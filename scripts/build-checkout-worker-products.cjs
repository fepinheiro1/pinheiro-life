const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');

const root = path.resolve(__dirname, '..');
const products = vm.runInNewContext(fs.readFileSync(path.join(root, 'catalog.js'), 'utf8') + '\nproducts;');
const available = products.filter(product => product.status !== 'sold');
const checkoutProducts = Object.fromEntries(available.map(product => [product.id, {
  id: product.id,
  slug: product.slug || product.id,
  name: product.name.slice(0, 120),
  price: Math.round(product.price * 100)
}]));

const output = `// Arquivo gerado por scripts/build-checkout-worker-products.cjs.\nexport const products = ${JSON.stringify(checkoutProducts, null, 2)};\n`;
fs.writeFileSync(path.join(root, 'checkout-worker', 'products.js'), output);
console.log(`${available.length} produtos preparados para o checkout seguro.`);
