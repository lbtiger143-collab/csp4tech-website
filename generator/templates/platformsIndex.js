module.exports = function platformsIndex(platforms) {
  return `
  <section class="hero" style="padding-bottom:36px;">
    <div class="container hero-inner">
      <span class="eyebrow">Other Platforms</span>
      <h1>Beyond Zoho: other platforms we implement</h1>
      <p class="lead">Zoho is where CSP4TECH is an official Authorized Partner — most of our work happens there. For clients already on, or evaluating, one of these platforms, our team also has hands-on implementation experience with them.</p>
    </div>
  </section>

  <section>
    <div class="container">
      <div class="grid grid-2">
        ${platforms
          .map(
            (p) => `
        <a href="/platforms/${p.slug}.html" class="card">
          <h3>${p.name}</h3>
          <p>${p.tagline}</p>
        </a>`
          )
          .join("")}
      </div>
      <p class="text-center" style="font-size:.85rem;margin-top:24px;color:#9C9AC4;">Not an official partner/certification for these platforms — this reflects hands-on implementation experience. See our <a href="/zoho-suites.html" style="color:var(--color-primary);">Zoho Authorized Partner</a> work for our certified specialty.</p>
    </div>
  </section>

  <section class="section-alt">
    <div class="container">
      <div class="cta-band">
        <h2>Not sure which platform is right for you?</h2>
        <p>Tell us what you're trying to solve and we'll give you a straightforward, no-pressure recommendation — including when Zoho isn't the best fit.</p>
        <a href="/contact-us.html" class="btn btn-accent">Ask Us</a>
      </div>
    </div>
  </section>`;
};
