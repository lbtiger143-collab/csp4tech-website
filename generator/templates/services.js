const platforms = require("../data/platforms");

module.exports = function services() {
  return `
  <section class="hero" style="padding-bottom:36px;">
    <div class="container hero-inner">
      <span class="eyebrow">Services</span>
      <h1>Zoho services, from first workflow to ongoing support</h1>
      <p class="lead">We don't just switch on software — we configure it around how your business actually runs, then stay involved after go-live.</p>
    </div>
  </section>

  <section>
    <div class="container">
      <div class="grid grid-2">
        <div class="card">
          <h3>Implementation</h3>
          <p>Full setup of CRM, Books, People, or any Zoho app — pipelines, automations, permissions, and reporting configured around your workflow, not left on defaults.</p>
        </div>
        <div class="card">
          <h3>Migration</h3>
          <p>Clean migration from Salesforce, HubSpot, QuickBooks, or spreadsheets, with data mapped and validated before go-live — not dumped in as-is.</p>
        </div>
        <div class="card">
          <h3>Customization &amp; integrations</h3>
          <p>Custom Zoho Creator apps and API integrations for the workflows off-the-shelf software doesn't quite cover.</p>
        </div>
        <div class="card">
          <h3>Automation</h3>
          <p>Workflow rules, approval chains, and cross-app automation (Zoho Flow) so repetitive work runs itself.</p>
        </div>
        <div class="card">
          <h3>Training</h3>
          <p>Hands-on sessions with your actual team, in the language they're most comfortable working in.</p>
        </div>
        <div class="card">
          <h3>Ongoing support</h3>
          <p>A local team you can call, not a ticket queue in another timezone.</p>
        </div>
      </div>
    </div>
  </section>

  <section class="section-alt">
    <div class="container">
      <div class="section-head">
        <span class="kicker">Timeline</span>
        <h2>Most implementations go live in 2–8 weeks</h2>
      </div>
      <div class="grid grid-4">
        <div class="card"><h3>1. Discovery</h3><p style="font-size:.88rem;">Understand your current process and pain points.</p></div>
        <div class="card"><h3>2. Configuration</h3><p style="font-size:.88rem;">Build the system around your actual workflow.</p></div>
        <div class="card"><h3>3. Migration</h3><p style="font-size:.88rem;">Move your data over, cleanly and validated.</p></div>
        <div class="card"><h3>4. Training &amp; go-live</h3><p style="font-size:.88rem;">Train your team, then launch with support on standby.</p></div>
      </div>
    </div>
  </section>

  <section>
    <div class="container">
      <div class="section-head">
        <span class="kicker">Other platforms</span>
        <h2>Also implemented beyond our Zoho specialty</h2>
      </div>
      <p style="max-width:640px;margin-bottom:24px;">Zoho is where we're an official Authorized Partner and where most of our work happens. Our team also has hands-on implementation experience — not a formal certification — with a few other platforms, for clients already using or evaluating them.</p>
      <div class="grid grid-4">
        ${platforms
          .map(
            (p) => `
        <a href="/platforms/${p.slug}.html" class="card">
          <h3 style="font-size:1.05rem;">${p.name}</h3>
          <p style="font-size:.85rem;">${p.tagline}</p>
        </a>`
          )
          .join("")}
      </div>
    </div>
  </section>

  <section class="section-alt">
    <div class="container">
      <div class="cta-band">
        <h2>Not sure where to start?</h2>
        <p>Tell us what's broken today — spreadsheets, a CRM you've outgrown, manual payroll — and we'll recommend the right first step.</p>
        <a href="/contact-us.html" class="btn btn-accent">Book a Free Consultation</a>
      </div>
    </div>
  </section>`;
};
