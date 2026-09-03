module.exports = function suites(products) {
  const one = products.find((p) => p.slug === "one");
  const crmPlus = products.find((p) => p.slug === "crmplus");
  const financePlus = products.find((p) => p.slug === "financeplus");
  const peoplePlus = products.find((p) => p.slug === "peopleplus");
  const servicePlus = products.find((p) => p.slug === "serviceplus");
  const suiteList = [crmPlus, financePlus, peoplePlus, servicePlus].filter(Boolean);

  return `
  <section class="hero" style="padding-bottom:36px;">
    <div class="container hero-inner">
      <span class="eyebrow">Zoho Suites</span>
      <h1>Compare Zoho's bundled suites</h1>
      <p class="lead">If you need more than one Zoho app, a bundled suite is usually cheaper and more integrated than buying apps one at a time. Here's how they compare.</p>
    </div>
  </section>

  <section>
    <div class="container">
      <div class="card" style="border-color:var(--color-primary);">
        <span class="category-tag">Everything, in one license</span>
        <h2 style="margin-top:8px;">${one.name}</h2>
        <p>${one.description}</p>
        <ul class="feature-list" style="margin-top:14px;">
          ${one.features.map((f) => `<li><span class="check"><svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg></span>${f}</li>`).join("")}
        </ul>
        <a href="/zoho-products/one.html" class="btn btn-primary btn-sm" style="margin-top:16px;">Learn more about Zoho One</a>
      </div>
    </div>
  </section>

  <section class="section-alt">
    <div class="container">
      <div class="section-head">
        <span class="kicker">Focused suites</span>
        <h2>Or bundle by department</h2>
      </div>
      <div class="grid grid-2">
        ${suiteList
          .map(
            (p) => `
        <div class="card">
          <h3>${p.name}</h3>
          <p>${p.description}</p>
          <ul class="feature-list" style="margin-top:10px;">
            ${p.features.slice(0, 3).map((f) => `<li><span class="check"><svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg></span>${f}</li>`).join("")}
          </ul>
          <a href="/zoho-products/${p.slug}.html" class="btn btn-ghost btn-sm" style="margin-top:14px;">Learn more</a>
        </div>`
          )
          .join("")}
      </div>
    </div>
  </section>

  <section>
    <div class="container">
      <div class="section-head">
        <span class="kicker">Not sure which fits?</span>
        <h2>We'll model the cost against your real headcount</h2>
      </div>
      <p class="text-center" style="max-width:600px;margin:0 auto 24px;">Suite pricing only pays off if your team actually uses most of the bundle. We compare Zoho One against buying individual apps for your specific team size before recommending either.</p>
      <p class="text-center"><a href="/contact-us.html" class="btn btn-primary">Get a Suite Recommendation</a></p>
    </div>
  </section>`;
};
