module.exports = function productPage(product, allProducts) {
  const related = allProducts
    .filter((p) => p.category === product.category && p.slug !== product.slug)
    .slice(0, 4);

  return `
  <section class="product-hero">
    <div class="container">
      <p class="breadcrumb"><a href="/">Home</a><span>/</span><a href="/zoho-products/">Zoho Products</a><span>/</span>${product.name}</p>
      <span class="category-tag">${product.category}</span>
      <h1>${product.name}</h1>
      <p class="tagline lead" style="margin-bottom:24px;">${product.tagline}</p>
      <div class="hero-actions" style="justify-content:flex-start;">
        <a href="/contact-us.html" class="btn btn-primary">Get a Free Consultation</a>
        <a href="/zoho-products/" class="btn btn-ghost">Browse other apps</a>
      </div>
    </div>
  </section>

  <section>
    <div class="container two-col">
      <div>
        <h2 style="font-size:1.4rem;">What ${product.name} does</h2>
        <p>${product.description}</p>
        <p style="font-weight:600;color:var(--color-ink);">${product.useCase}</p>
      </div>
      <div class="card">
        <h3>Key features</h3>
        <ul class="feature-list">
          ${product.features.map((f) => `<li><span class="check">✓</span>${f}</li>`).join("")}
        </ul>
      </div>
    </div>
  </section>

  <section class="section-alt">
    <div class="container">
      <div class="section-head">
        <span class="kicker">How we implement it</span>
        <h2>${product.name}, configured around your business</h2>
      </div>
      <div class="grid grid-4">
        <div class="card"><h3>1. Discovery</h3><p style="font-size:.88rem;">We map how your team works today before configuring anything.</p></div>
        <div class="card"><h3>2. Setup</h3><p style="font-size:.88rem;">${product.name} configured to your workflow — not left on defaults.</p></div>
        <div class="card"><h3>3. Migration</h3><p style="font-size:.88rem;">Clean data migration from your current system or spreadsheets.</p></div>
        <div class="card"><h3>4. Training</h3><p style="font-size:.88rem;">Hands-on training so your team is confident from day one.</p></div>
      </div>
    </div>
  </section>

  ${
    related.length
      ? `
  <section>
    <div class="container">
      <div class="section-head">
        <span class="kicker">Related apps</span>
        <h2>Other apps in ${product.category}</h2>
      </div>
      <div class="related-products">
        ${related.map((p) => `<a href="/zoho-products/${p.slug}.html">${p.name}</a>`).join("")}
      </div>
    </div>
  </section>`
      : ""
  }

  <section>
    <div class="container">
      <div class="cta-band">
        <h2>Ready to set up ${product.name}?</h2>
        <p>Book a free consultation and we'll scope the right configuration for your team.</p>
        <a href="/contact-us.html" class="btn btn-accent">Book a Free Consultation</a>
      </div>
    </div>
  </section>`;
};
