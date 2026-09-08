module.exports = function compareIndex(compares) {
  return `
  <section class="hero" style="padding-bottom:36px;">
    <div class="container hero-inner">
      <span class="eyebrow">Comparisons</span>
      <h1>Zoho apps vs the competition</h1>
      <p class="lead">Honest, sourced comparisons of the Zoho apps we implement against the tools most businesses weigh alongside them — real pricing, real feature gaps, no spin.</p>
    </div>
  </section>

  <section>
    <div class="container">
      <div class="grid grid-2">
        ${compares
          .map(
            (c) => `
        <a href="/compare/${c.slug}.html" class="card">
          <span class="compare-kicker-tag">${c.kicker}</span>
          <h3>${c.shortTitle}</h3>
          <p>${c.metaDescription}</p>
        </a>`
          )
          .join("")}
      </div>
    </div>
  </section>

  <section class="section-alt">
    <div class="container">
      <div class="cta-band">
        <h2>Not sure which one fits your team?</h2>
        <p>Tell us what you're using today and what's not working — we'll give you a straightforward recommendation, Zoho or otherwise.</p>
        <a href="/contact-us.html" class="btn btn-accent">Ask Us</a>
      </div>
    </div>
  </section>`;
};
