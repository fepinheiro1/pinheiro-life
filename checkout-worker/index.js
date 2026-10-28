import { products } from './products.js';

const allowedOrigins = new Set([
  'https://fepinheiro1.github.io',
  'http://127.0.0.1:4173',
  'http://localhost:4173'
]);

const corsHeaders = origin => ({
  'Access-Control-Allow-Origin': allowedOrigins.has(origin) ? origin : 'https://fepinheiro1.github.io',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
  'Access-Control-Max-Age': '86400',
  'Vary': 'Origin'
});

const json = (body, status, origin) => new Response(JSON.stringify(body), {
  status,
  headers: {
    ...corsHeaders(origin),
    'Content-Type': 'application/json; charset=utf-8',
    'Cache-Control': 'no-store'
  }
});

const normalizeBrazilianPhone = value => {
  let digits = String(value || '').replace(/\D/g, '');
  if ((digits.length === 12 || digits.length === 13) && digits.startsWith('55')) digits = digits.slice(2);
  if (digits.length !== 10 && digits.length !== 11) return null;
  return `+55${digits}`;
};

export default {
  async fetch(request, env) {
    const origin = request.headers.get('Origin') || '';
    const url = new URL(request.url);

    if (request.method === 'OPTIONS') {
      if (!allowedOrigins.has(origin)) return new Response(null, { status: 403 });
      return new Response(null, { status: 204, headers: corsHeaders(origin) });
    }

    if (request.method === 'GET' && url.pathname === '/health') {
      return json({ ok: true }, 200, origin);
    }

    if (request.method !== 'POST' || url.pathname !== '/checkout') {
      return json({ error: 'not_found' }, 404, origin);
    }

    if (!allowedOrigins.has(origin)) return json({ error: 'origin_not_allowed' }, 403, origin);

    let payload;
    try {
      payload = await request.json();
    } catch {
      return json({ error: 'invalid_json' }, 400, origin);
    }

    const requestedIds = Array.isArray(payload.productIds) ? payload.productIds : [payload.productId];
    const uniqueIds = [...new Set(requestedIds.filter(id => typeof id === 'string'))].slice(0, 20);
    const selectedProducts = uniqueIds.map(id => products[id]).filter(Boolean);
    const phone = normalizeBrazilianPhone(payload.phone);
    if (!selectedProducts.length || selectedProducts.length !== uniqueIds.length || !phone) return json({ error: 'invalid_checkout_data' }, 400, origin);

    const isCart = selectedProducts.length > 1 || Array.isArray(payload.productIds);
    const product = selectedProducts[0];
    const orderNsu = `pinheiro-life-${isCart ? 'sacola' : product.id}-${Date.now()}-${crypto.randomUUID().slice(0, 8)}`;
    const response = await fetch('https://api.checkout.infinitepay.io/links', {
      method: 'POST',
      headers: {
        'X-Api-Key': env.INFINITEPAY_API_KEY,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        order_nsu: orderNsu,
        redirect_url: isCart ? 'https://fepinheiro1.github.io/pinheiro-life/?pagamento=concluido&carrinho=1' : `https://fepinheiro1.github.io/pinheiro-life/produto/${product.slug}/?pagamento=concluido`,
        customer: { phone_number: phone },
        items: selectedProducts.map(item => ({ quantity: 1, price: item.price, description: item.name })),
        options: {
          assured_installments: 6,
          require_delivery_address: false,
          single_payment: true,
          payment_methods_enabled: ['credit_card', 'pix'],
          discounts: { pix: 10 }
        }
      })
    });

    const checkout = await response.json().catch(() => ({}));
    if (!response.ok || !checkout.url) {
      return json({ error: 'checkout_unavailable' }, 502, origin);
    }

    await env.LEADS.put(orderNsu, JSON.stringify({
      createdAt: new Date().toISOString(),
      productIds: selectedProducts.map(item => item.id),
      productNames: selectedProducts.map(item => item.name),
      phone,
      orderNsu,
      checkoutUrl: checkout.url,
      status: 'checkout_created'
    }), { expirationTtl: 60 * 60 * 24 * 90 });

    return json({ url: checkout.url }, 200, origin);
  }
};
