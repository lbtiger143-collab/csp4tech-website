function renderCell(value, extraClass) {
  const cls = extraClass ? ` class="${extraClass}"` : "";
  if (value === true) {
    return `<td${cls}><svg class="compare-check" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" aria-label="Included"><polyline points="20 6 9 17 4 12"/></svg></td>`;
  }
  if (value === false) {
    return `<td${cls}><svg class="compare-cross" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" aria-label="Not included"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg></td>`;
  }
  return `<td${cls}><span class="compare-badge">${value}</span></td>`;
}

module.exports = function comparePage(entry, allCompares, products) {
  const zohoProduct = products.find((p) => p.slug === entry.zohoProductSlug);
  const others = allCompares.filter((c) => c.slug !== entry.slug);

  return `
  <section class="product-hero">
    <div class="container">
      <p class="breadcrumb"><a href="/">Home</a><span>/</span><a href="/compare/">Compare</a><span>/</span>${entry.shortTitle}</p>
      <div class="product-hero-icon-row">
        ${zohoProduct && zohoProduct.logo ? `<img src="/images/logos/${zohoProduct.logo}" alt="" class="product-hero-icon" width="56" height="56">` : ""}
        <span class="category-tag" style="margin-bottom:0;">${entry.kicker}</span>
      </div>
      <h1>${entry.title}</h1>
      <div class="hero-actions" style="justify-content:flex-start;margin-top:20px;margin-bottom:0;">
        <a href="/contact-us.html" class="btn btn-primary">Get a Free Consultation</a>
        ${zohoProduct ? `<a href="/zoho-products/${zohoProduct.slug}.html" class="btn btn-ghost">${zohoProduct.logo ? `<img src="/images/logos/${zohoProduct.logo}" alt="" width="16" height="16" class="nav-app-icon" style="margin-right:6px;">` : ""}See ${zohoProduct.name} details</a>` : ""}
      </div>
    </div>
  </section>

  <section style="padding-bottom:0;">
    <div class="container" style="max-width:820px;">
      ${entry.intro.map((p) => `<p class="lead" style="font-size:1.02rem;margin:0 0 16px;">${p}</p>`).join("")}
    </div>
  </section>

  <section>
    <div class="container">
      <div class="compare-table-wrap">
        <table class="compare-table">
          <thead>
            <tr>
              <th></th>
              ${entry.columns.map((c, i) => `<th${i === 0 ? ` class="col-zoho"` : ""}>${c}</th>`).join("")}
            </tr>
          </thead>
          <tbody>
            <tr class="price-row">
              <td>Starting price</td>
              ${entry.pricing.map((p, i) => `<td${i === 0 ? ` class="col-zoho"` : ""}>${p}</td>`).join("")}
            </tr>
            ${entry.rows
              .map(
                (row) => `
            <tr>
              <td>${row.feature}</td>
              ${row.cells.map((cell, i) => renderCell(cell, i === 0 ? "col-zoho" : "")).join("")}
            </tr>`
              )
              .join("")}
          </tbody>
        </table>
      </div>
      <p style="font-size:0.82rem;color:var(--color-ink-soft);margin-top:14px;">${entry.pricingNote}</p>
    </div>
  </section>

  <section class="section-alt">
    <div class="container">
      <div class="section-head">
        <span class="kicker">The verdict</span>
        <h2>Who each one is actually best for</h2>
      </div>
      <div class="grid grid-2">
        ${entry.verdict
          .map(
            (v) => `
        <div class="card">
          <h3>${v.name}</h3>
          <p>${v.text}</p>
        </div>`
          )
          .join("")}
      </div>
    </div>
  </section>

  <section>
    <div class="container faq" style="max-width:760px;">
      <div class="section-head" style="text-align:left;margin:0 0 24px;max-width:none;">
        <span class="kicker">FAQ</span>
        <h2>Common questions</h2>
      </div>
      ${entry.faqs
        .map(
          (f) => `
      <details>
        <summary>${f.q}</summary>
        <p>${f.a}</p>
      </details>`
        )
        .join("")}
      <p style="font-size:0.8rem;color:var(--color-ink-soft);margin-top:20px;">Pricing and feature availability change often — this comparison reflects publicly published vendor information as of ${entry.lastVerified}. Always confirm current pricing directly with each vendor before making a purchasing decision. CSP4TECH is a Zoho Authorized Partner and is not affiliated with, or sponsored by, any other company named above.</p>
    </div>
  </section>

  ${
    others.length
      ? `
  <section class="section-alt">
    <div class="container">
      <div class="section-head">
        <span class="kicker">More comparisons</span>
        <h2>See how other Zoho apps compare</h2>
      </div>
      <div class="related-products">
        ${others
          .map((c) => {
            const zp = products.find((p) => p.slug === c.zohoProductSlug);
            const icon = zp && zp.logo ? `<img src="/images/logos/${zp.logo}" alt="" width="16" height="16" class="nav-app-icon">` : "";
            return `<a href="/compare/${c.slug}.html">${icon}${c.shortTitle}</a>`;
          })
          .join("")}
      </div>
    </div>
  </section>`
      : ""
  }

  <section>
    <div class="container">
      <div class="cta-band">
        <h2>Thinking about switching to ${entry.columns[0]}?</h2>
        <p>We'll walk you through migration, timeline, and cost with no pressure — including when it's not the right move.</p>
        <a href="/contact-us.html" class="btn btn-accent">Book a Free Consultation</a>
      </div>
    </div>
  </section>`;
};
