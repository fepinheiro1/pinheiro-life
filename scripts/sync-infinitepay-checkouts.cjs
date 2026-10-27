// Gera links de pagamento sem expor a API Key no site público.
// A chave fica no Chaves do macOS, serviço io.pinheiro.life.infinitepay.checkout.
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const { execFileSync } = require('node:child_process');

const root = path.resolve(__dirname, '..');
const catalogPath = path.join(root, 'catalog.js');
const outputPath = path.join(root, 'checkout-links.js');
const products = vm.runInNewContext(fs.readFileSync(catalogPath, 'utf8') + '\nproducts;');
const existing = fs.existsSync(outputPath)
  ? vm.runInNewContext(fs.readFileSync(outputPath, 'utf8') + '\ncheckoutLinks;')
  : {};
const apiKey = execFileSync('/usr/bin/security', [
  'find-generic-password',
  '-a', 'pinheiro.life',
  '-s', 'io.pinheiro.life.infinitepay.checkout',
  '-w'
], { encoding: 'utf8' }).trim();

if (!apiKey.startsWith('inchk_')) throw new Error('API Key da InfinitePay não encontrada no Chaves do macOS.');

const write = links => {
  const ordered = Object.fromEntries(Object.entries(links).sort(([a], [b]) => a.localeCompare(b)));
  fs.writeFileSync(outputPath, `// Arquivo gerado por scripts/sync-infinitepay-checkouts.cjs.\nconst checkoutLinks = ${JSON.stringify(ordered, null, 2)};\n`);
};

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

(async () => {
  const links = { ...existing };
  const available = products.filter(product => product.status !== 'sold');
  const pending = available.filter(product => {
    const entry = links[product.id];
    return !entry || entry.price !== Math.round(product.price * 100) || !entry.url;
  });

  console.log(`${available.length} produtos disponíveis; ${pending.length} links para criar ou atualizar.`);

  for (const [index, product] of pending.entries()) {
    const price = Math.round(product.price * 100);
    const response = await fetch('https://api.checkout.infinitepay.io/links', {
      method: 'POST',
      headers: {
        'X-Api-Key': apiKey,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        order_nsu: `pinheiro-life-${product.id}-${Date.now()}`,
        redirect_url: `https://fepinheiro1.github.io/pinheiro-life/produto/${product.slug || product.id}/?pagamento=concluido`,
        items: [{ quantity: 1, price, description: product.name.slice(0, 120) }],
        options: {
          assured_installments: 6,
          require_delivery_address: false,
          single_payment: true,
          payment_methods_enabled: ['credit_card', 'pix'],
          discounts: { pix: 10 }
        }
      })
    });
    const body = await response.json().catch(() => ({}));
    if (!response.ok || !body.url) {
      throw new Error(`InfinitePay recusou ${product.id}: HTTP ${response.status} ${JSON.stringify(body)}`);
    }
    links[product.id] = { price, url: body.url };
    write(links);
    console.log(`[${index + 1}/${pending.length}] ${product.name}`);
    await sleep(150);
  }

  write(links);
  console.log(`Links prontos em ${path.relative(root, outputPath)}.`);
})().catch(error => {
  console.error(error.message);
  process.exitCode = 1;
});
