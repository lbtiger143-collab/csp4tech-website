const config = require("../data/config");
const faq = require("../data/faq");
const platforms = require("../data/platforms");

module.exports = function home(products, blogPosts) {
  const featured = products.filter((p) =>
    ["crm", "books", "people", "desk", "analytics", "inventory"].includes(p.slug)
  );
  const latestPosts = blogPosts.slice(-3).reverse();

  return `
  <section class="hero">
    <div class="container hero-inner">
      <img src="/images/zoho-partner-badge.png" alt="Zoho Authorized Partner badge" class="partner-badge" width="220" height="61">
      <h1>Certified Zoho Partner for <em>Lebanon</em></h1>
      <p class="lead">End-to-end Zoho consulting: implementation, migration, integrations, and ongoing support across the full Zoho suite — with Arabic/English (RTL) experience and a local Beirut team.</p>
      <div class="hero-actions">
        <a href="/contact-us.html" class="btn btn-primary">Get a Free Consultation</a>
        <a href="/zoho-products/" class="btn btn-ghost">Browse Zoho Products</a>
      </div>
      <div class="pill-row">
        <span class="pill">Implementation &amp; Migration</span>
        <span class="pill">Arabic/English &amp; RTL</span>
        <span class="pill">Integrations &amp; APIs</span>
        <span class="pill">Training &amp; Support</span>
      </div>
    </div>
  </section>

  <section>
    <div class="container">
      <p class="text-center" style="font-weight:700;color:var(--color-ink-soft);margin-bottom:20px;">Trusted by businesses across Lebanon and beyond</p>
      <div class="trusted-marquee">
        <div class="trusted-track">
          ${config.trustedByClients
            .map((c) => `<div class="trusted-logo"><img src="/images/clients/${c.file}" alt="${c.name}" loading="lazy"></div>`)
            .join("")}
          ${config.trustedByClients
            .map((c) => `<div class="trusted-logo trusted-dup" aria-hidden="true"><img src="/images/clients/${c.file}" alt="" loading="lazy"></div>`)
            .join("")}
        </div>
      </div>
    </div>
  </section>

  <section class="section-alt">
    <div class="container">
      <div class="section-head">
        <span class="kicker">Why CSP4TECH</span>
        <h2>A local partner, not an overseas support queue</h2>
      </div>
      <div class="grid grid-3">
        <div class="card"><div class="icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg></div><h3>Certified &amp; ISO-aligned</h3><p>Certified Zoho consultants for CRM, Books, People, and Creator, working to ISO-aligned quality standards.</p></div>
        <div class="card"><div class="icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg></div><h3>Built for Lebanon</h3><p>Arabic/English (RTL) experience, USD/LBP multi-currency, and VAT-ready accounting configuration from day one.</p></div>
        <div class="card"><div class="icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M13 2 3 14h7l-1 8 10-12h-7l1-8z"/></svg></div><h3>Fast time-to-value</h3><p>Most implementations go live in 2–8 weeks, not months of scope creep.</p></div>
      </div>
    </div>
  </section>

  <section>
    <div class="container">
      <div class="section-head">
        <span class="kicker">What we do</span>
        <h2>Zoho services that cover the full lifecycle</h2>
      </div>
      <div class="grid grid-3">
        <div class="card"><h3>Implementation &amp; Migration</h3><p>From first workflow to full go-live, including migrating off Salesforce, HubSpot, QuickBooks, or spreadsheets.</p></div>
        <div class="card"><h3>Customization &amp; Integrations</h3><p>Custom Zoho Creator apps, API integrations, and automations built around how your team actually works.</p></div>
        <div class="card"><h3>Training &amp; Support</h3><p>Hands-on training for your team plus ongoing support — a phone call away, not a ticket in a queue.</p></div>
      </div>
    </div>
  </section>

  <section class="section-alt">
    <div class="container">
      <div class="section-head">
        <span class="kicker">Popular apps</span>
        <h2>Zoho products we implement most</h2>
      </div>
      <div class="grid grid-3">
        ${featured
          .map(
            (p) => `
        <div class="card">
          <h3>${p.name}</h3>
          <p>${p.tagline}</p>
          <a href="/zoho-products/${p.slug}.html" class="btn btn-ghost btn-sm" style="margin-top:10px;">Learn more</a>
        </div>`
          )
          .join("")}
      </div>
      <p class="text-center" style="margin-top:28px;"><a href="/zoho-products/" class="btn btn-primary">Browse all 39 Zoho apps</a></p>
    </div>
  </section>

  <section>
    <div class="container">
      <div class="section-head">
        <span class="kicker">By the numbers</span>
        <h2>Real Zoho implementation experience</h2>
      </div>
      <div class="stat-grid">
        <div><div class="stat-num">${config.stats.founded}</div><div class="stat-label">Serving Lebanon since</div></div>
        <div><div class="stat-num">${config.stats.projectsDelivered}</div><div class="stat-label">Businesses onboarded</div></div>
        <div><div class="stat-num">${config.stats.zohoAppsImplemented}</div><div class="stat-label">Zoho apps we implement</div></div>
        <div><div class="stat-num">${config.stats.industriesServed}</div><div class="stat-label">Industries served</div></div>
      </div>
    </div>
  </section>

  <section class="section-alt">
    <div class="container">
      <div class="section-head">
        <span class="kicker">From the blog</span>
        <h2>Recent Zoho guides for Lebanese businesses</h2>
      </div>
      <div class="grid grid-3">
        ${latestPosts
          .map(
            (b) => `
        <a href="/blog/${b.slug}.html" class="blog-card">
          <div class="body">
            <span class="meta">${new Date(b.date).toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" })} · ${b.readTime}</span>
            <h3>${b.title}</h3>
            <p style="font-size:.9rem;">${b.excerpt}</p>
            <span class="read-more">Read article →</span>
          </div>
        </a>`
          )
          .join("")}
      </div>
    </div>
  </section>

  <section>
    <div class="container" style="max-width:780px;text-align:center;">
      <p style="font-size:.85rem;color:var(--color-ink-soft);">Beyond our Zoho specialty, our team also has hands-on implementation experience with ${platforms.map((p) => p.name).join(", ")}.
      <a href="/platforms/" style="color:var(--color-primary);font-weight:600;">See other platforms →</a></p>
    </div>
  </section>

  <section class="section-alt">
    <div class="container" style="max-width:780px;">
      <div class="section-head">
        <span class="kicker">FAQ</span>
        <h2>Common questions before you get started</h2>
      </div>
      <div class="faq">
        ${faq
          .map(
            (item) => `
        <details>
          <summary>${item.q}</summary>
          <p>${item.a}</p>
        </details>`
          )
          .join("")}
      </div>
    </div>
  </section>

  <section>
    <div class="container">
      <div class="cta-band">
        <h2>Get Started with Zoho</h2>
        <p>Tell us where your team is stuck today — we'll reply within one business day with a straightforward plan.</p>
        <a href="/contact-us.html" class="btn btn-accent">Book a Free Consultation</a>
      </div>
    </div>
  </section>`;
};
