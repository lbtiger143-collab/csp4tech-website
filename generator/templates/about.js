const config = require("../data/config");

module.exports = function about() {
  return `
  <section class="hero" style="padding-bottom:40px;">
    <div class="container hero-inner">
      <span class="eyebrow">About CSP4TECH</span>
      <h1>Empowering Lebanese businesses through Zoho</h1>
      <p class="lead">We're a Beirut-based Zoho Authorized Partner helping Lebanese SMEs and enterprises run their operations on one connected platform — implementation, migration, training, and support, delivered locally.</p>
    </div>
  </section>

  <section>
    <div class="container">
      <div class="stat-grid">
        <div><div class="stat-num">${config.stats.founded}</div><div class="stat-label">Serving Lebanon since</div></div>
        <div><div class="stat-num">${config.stats.yearsExperience}</div><div class="stat-label">Of local expertise</div></div>
        <div><div class="stat-num">${config.stats.businessesServed}</div><div class="stat-label">Businesses onboarded</div></div>
        <div><div class="stat-num">${config.stats.zohoAppsImplemented}</div><div class="stat-label">Zoho apps we implement</div></div>
      </div>
      <p class="text-center" style="font-size:.8rem;color:#9C9AC4;margin-top:10px;">One consistent set of numbers, used everywhere on this site.</p>
    </div>
  </section>

  <section class="section-alt">
    <div class="container two-col">
      <div>
        <span class="kicker">Our story</span>
        <h2>Local expertise, not an outsourced ticket queue</h2>
        <p>CSP4TECH was founded to close a gap we kept seeing: Lebanese businesses adopting powerful software like Zoho, then getting generic, overseas support that didn't understand VAT rules, LBP/USD accounting, or the fact that half their sales conversations happen on WhatsApp.</p>
        <p>Since ${config.stats.founded}, we've focused on exactly that — implementation and support that's built around how Lebanese businesses actually operate, delivered by a team based in Beirut Digital District.</p>
      </div>
      <div class="grid" style="gap:16px;">
        <div class="card"><h3>Mission</h3><p>Give Lebanese businesses enterprise-grade tools without an enterprise-size budget or an overseas support desk.</p></div>
        <div class="card"><h3>How we work</h3><p>Discovery, configuration, migration, training, then ongoing support — a straightforward five-phase process, no black box.</p></div>
      </div>
    </div>
  </section>

  <section>
    <div class="container">
      <div class="section-head">
        <span class="kicker">Credentials</span>
        <h2>Certified, and held to a real quality standard</h2>
      </div>
      <div class="grid grid-3">
        <div class="card"><img src="/images/zoho-partner-badge.png" alt="Zoho Authorized Partner badge" style="height:32px;width:auto;margin-bottom:14px;" width="220" height="61"><h3>Zoho Authorized Partner</h3><p>Officially certified to implement, customize, and support the Zoho product suite.</p></div>
        <div class="card"><div class="icon">🎓</div><h3>Certified Consultants</h3><p>Certified across Zoho CRM, Books, People, and Creator — not generalists learning on your project.</p></div>
        <div class="card"><div class="icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg></div><h3>${config.languages}</h3><p>We work with your team in the language they're most comfortable in, including full Arabic/RTL support.</p></div>
      </div>
    </div>
  </section>

  <section class="section-alt">
    <div class="container">
      <div class="section-head">
        <span class="kicker">Process</span>
        <h2>How a typical engagement runs</h2>
      </div>
      <div class="grid grid-4">
        <div class="card"><h3>1. Discovery</h3><p style="font-size:.88rem;">We map your current process before touching any configuration.</p></div>
        <div class="card"><h3>2. Configuration</h3><p style="font-size:.88rem;">Pipelines, automations, and access set up around your real workflow.</p></div>
        <div class="card"><h3>3. Migration</h3><p style="font-size:.88rem;">Clean data migration from spreadsheets or your previous system.</p></div>
        <div class="card"><h3>4. Training &amp; go-live</h3><p style="font-size:.88rem;">Hands-on training with your team, then a supported launch.</p></div>
      </div>
    </div>
  </section>

  <section>
    <div class="container">
      <div class="cta-band">
        <h2>Want to work with a local Zoho partner?</h2>
        <p>Tell us about your business and we'll put together a straightforward implementation plan.</p>
        <a href="/contact-us.html" class="btn btn-accent">Talk to Our Team</a>
      </div>
    </div>
  </section>`;
};
