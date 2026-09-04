const config = require("../data/config");

module.exports = function platformPage(platform, allPlatforms) {
  const others = allPlatforms.filter((p) => p.slug !== platform.slug);

  return `
  <section class="product-hero">
    <div class="container">
      <p class="breadcrumb"><a href="/">Home</a><span>/</span><a href="/platforms/">Other Platforms</a><span>/</span>${platform.name}</p>
      <span class="category-tag">Also implemented by CSP4TECH</span>
      <h1>${platform.name}</h1>
      <p class="tagline lead" style="margin-bottom:24px;">${platform.tagline}</p>
      <div class="hero-actions" style="justify-content:flex-start;">
        <a href="/contact-us.html" class="btn btn-primary">Get a Free Consultation</a>
        <a href="/platforms/" class="btn btn-ghost">See other platforms</a>
      </div>
    </div>
  </section>

  <section>
    <div class="container two-col">
      <div>
        <h2 style="font-size:1.4rem;">What we do with ${platform.name}</h2>
        <p>${platform.description}</p>
        <p style="font-weight:600;color:var(--color-ink);">${platform.useCase}</p>
        <p style="font-size:.85rem;color:var(--color-ink-soft);margin-top:20px;">Zoho is where CSP4TECH holds official Authorized Partner status. For ${platform.name}, this reflects our team's hands-on implementation experience rather than a formal certification.</p>
      </div>
      <div class="card">
        <h3>What's included</h3>
        <ul class="feature-list">
          ${platform.capabilities.map((c) => `<li><span class="check"><svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg></span>${c}</li>`).join("")}
        </ul>
      </div>
    </div>
  </section>

  <section class="section-alt">
    <div class="container">
      <div class="section-head">
        <span class="kicker">Not sure ${platform.name} is the right fit?</span>
        <h2>Zoho is our core specialty — happy to compare</h2>
      </div>
      <p style="max-width:620px;">Most of our client work is Zoho implementation, where we're an official Authorized Partner. If you're evaluating platforms rather than set on one, we can walk you through how ${platform.name} compares to Zoho for your specific case, with no pressure either way.</p>
      <div class="hero-actions" style="justify-content:flex-start;margin-top:20px;margin-bottom:0;">
        <a href="/zoho-suites.html" class="btn btn-ghost">Compare Zoho suites</a>
        <a href="/contact-us.html" class="btn btn-primary">Ask us</a>
      </div>
    </div>
  </section>

  ${
    others.length
      ? `
  <section>
    <div class="container">
      <div class="section-head">
        <span class="kicker">Other platforms</span>
        <h2>We also work with</h2>
      </div>
      <div class="related-products">
        ${others.map((p) => `<a href="/platforms/${p.slug}.html">${p.name}</a>`).join("")}
      </div>
    </div>
  </section>`
      : ""
  }

  <section>
    <div class="container">
      <div class="cta-band">
        <h2>Ready to talk about ${platform.name}?</h2>
        <p>Tell us where you're stuck today and we'll give you a straightforward read on the right next step.</p>
        <a href="/contact-us.html" class="btn btn-accent">Book a Free Consultation</a>
      </div>
    </div>
  </section>`;
};
