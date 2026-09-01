const { groupByCategory } = require("./layout");

module.exports = function productsIndex(products) {
  const groups = groupByCategory(products);
  return `
  <section class="hero" style="padding-bottom:36px;">
    <div class="container hero-inner">
      <span class="eyebrow">Zoho Products</span>
      <h1>Every Zoho app, one implementation partner</h1>
      <p class="lead">We implement and support the full Zoho suite — ${products.length} apps across sales, finance, HR, support, analytics, and workplace productivity.</p>
    </div>
  </section>
  ${groups
    .map(
      (g) => `
  <section ${g === groups[0] ? "" : 'class="section-alt"'}>
    <div class="container">
      <h2 style="margin-bottom:24px;">${g.category}</h2>
      <div class="grid grid-3">
        ${g.items
          .map(
            (p) => `
        <a href="/zoho-products/${p.slug}.html" class="card">
          <h3>${p.name}</h3>
          <p>${p.tagline}</p>
        </a>`
          )
          .join("")}
      </div>
    </div>
  </section>`
    )
    .join("")}
  <section>
    <div class="container">
      <div class="cta-band">
        <h2>Not sure which apps you need?</h2>
        <p>Tell us how your team works today and we'll recommend the right starting point.</p>
        <a href="/contact-us.html" class="btn btn-accent">Get a Recommendation</a>
      </div>
    </div>
  </section>`;
};
