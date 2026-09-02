const config = require("../data/config");

function groupByCategory(products) {
  const map = {};
  products.forEach((p) => {
    if (!map[p.category]) map[p.category] = [];
    map[p.category].push(p);
  });
  return config.nav.productCategories
    .filter((c) => map[c])
    .map((c) => ({ category: c, items: map[c] }));
}

function megaMenu(products) {
  const groups = groupByCategory(products);
  return `
  <div class="nav-item has-mega">
    <a href="/zoho-products/" class="nav-link" aria-haspopup="true">Zoho Products <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M2 4l4 4 4-4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg></a>
    <div class="mega-menu">
      ${groups
        .map(
          (g) => `
      <div class="mega-col">
        <h4>${g.category}</h4>
        ${g.items.map((p) => `<a href="/zoho-products/${p.slug}.html">${p.name}</a>`).join("")}
      </div>`
        )
        .join("")}
      <div class="mega-cta">
        <span style="font-size:.85rem;color:var(--color-ink-soft)">39 Zoho apps, one local implementation partner.</span>
        <a href="/zoho-products/" class="btn btn-ghost btn-sm">Browse all products</a>
      </div>
    </div>
  </div>`;
}

function mobileProductGroups(products) {
  const groups = groupByCategory(products);
  return groups
    .map(
      (g) => `
    <details>
      <summary>${g.category}</summary>
      <div>
        ${g.items.map((p) => `<a href="/zoho-products/${p.slug}.html">${p.name}</a>`).join("")}
      </div>
    </details>`
    )
    .join("");
}

function header(products, activePath) {
  return `
  <header class="site-header">
    <div class="container">
      <a href="/" class="brand"><img src="/images/logo-mark.png" alt="" class="brand-mark" width="34" height="34"> CSP4TECH</a>
      <nav class="primary-nav" aria-label="Primary">
        <ul>
          <li><a href="/services.html" class="nav-link">Services</a></li>
          <li>${megaMenu(products)}</li>
          <li><a href="/zoho-suites.html" class="nav-link">Zoho Suites</a></li>
          <li class="nav-item has-mega">
            <a href="#" class="nav-link" aria-haspopup="true">Company <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M2 4l4 4 4-4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg></a>
            <div class="mega-menu" style="grid-template-columns:1fr;width:220px;padding:12px;">
              <div class="mega-col" style="grid-column:1/-1;">
                <a href="/about.html">About Us</a>
                <a href="/blog/">Blog</a>
                <a href="/contact-us.html">Contact Us</a>
              </div>
            </div>
          </li>
        </ul>
      </nav>
      <div class="header-actions">
        <a href="/contact-us.html" class="btn btn-primary btn-sm">Get Started</a>
        <button class="menu-toggle" aria-label="Open menu" aria-expanded="false">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M3 5h14M3 10h14M3 15h14" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg>
        </button>
      </div>
    </div>
  </header>
  <div class="mobile-nav">
    <a href="/services.html">Services</a>
    ${mobileProductGroups(products)}
    <a href="/zoho-suites.html">Zoho Suites</a>
    <a href="/about.html">About Us</a>
    <a href="/blog/">Blog</a>
    <a href="/contact-us.html">Contact Us</a>
    <a href="/contact-us.html" class="btn btn-primary btn-block" style="margin-top:16px;">Get Started</a>
  </div>`;
}

function footer(products) {
  const groups = groupByCategory(products).slice(0, 3);
  return `
  <footer class="site-footer">
    <div class="container">
      <div class="footer-grid">
        <div>
          <div class="footer-brand">CSP4TECH</div>
          <p style="color:#9C9AC4;font-size:0.88rem;max-width:280px;">${config.tagline}. End-to-end Zoho consulting for Lebanese businesses — implementation, migration, integrations, and ongoing support.</p>
          <div class="social-row" style="margin-top:16px;">
            <a href="${config.social.linkedin}" aria-label="LinkedIn">in</a>
            <a href="${config.social.twitter}" aria-label="X / Twitter">X</a>
            <a href="${config.social.facebook}" aria-label="Facebook">f</a>
            <a href="${config.social.instagram}" aria-label="Instagram">ig</a>
          </div>
        </div>
        ${groups
          .map(
            (g) => `
        <div>
          <h4>${g.category}</h4>
          ${g.items
            .slice(0, 6)
            .map((p) => `<a href="/zoho-products/${p.slug}.html">${p.name}</a>`)
            .join("")}
        </div>`
          )
          .join("")}
        <div>
          <h4>Company</h4>
          <a href="/about.html">About Us</a>
          <a href="/blog/">Blog</a>
          <a href="/contact-us.html">Contact Us</a>
          <a href="/zoho-suites.html">Zoho Suites</a>
          <a href="mailto:${config.email}">${config.email}</a>
          <a href="tel:+${config.phone.href}">${config.phone.display}</a>
        </div>
      </div>
      <div class="footer-bottom">
        <span>&copy; ${new Date().getFullYear()} CSP4TECH. All rights reserved.</span>
        <span>${config.address.lebanon}</span>
      </div>
    </div>
  </footer>
  <a class="wa-float" href="https://wa.me/${config.whatsapp}" aria-label="Chat on WhatsApp" target="_blank" rel="noopener">
    <svg width="28" height="28" viewBox="0 0 32 32" fill="none"><path d="M16 3C9 3 3.3 8.7 3.3 15.7c0 2.5.7 4.8 1.9 6.8L3 29l6.7-2.1c1.9 1 4.1 1.6 6.3 1.6 7 0 12.7-5.7 12.7-12.7C28.7 8.7 23 3 16 3z" fill="#fff"/><path d="M16 4.3C9.7 4.3 4.6 9.4 4.6 15.7c0 2.3.7 4.4 1.8 6.2l-1.2 4.4 4.5-1.2c1.7 1 3.7 1.6 5.8 1.6 6.3 0 11.4-5.1 11.4-11.4S22.3 4.3 16 4.3z" fill="#25D366"/><path d="M21.6 18.5c-.3-.2-1.8-.9-2.1-1-.3-.1-.5-.2-.7.2-.2.3-.8 1-1 1.2-.2.2-.4.2-.7.1-.3-.2-1.4-.5-2.6-1.6-1-.9-1.6-2-1.8-2.3-.2-.3 0-.5.1-.6.1-.1.3-.4.5-.5.2-.2.2-.3.3-.5.1-.2 0-.4 0-.6 0-.2-.7-1.7-1-2.3-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.4 0 1.4 1 2.8 1.2 3 .1.2 2 3.1 4.9 4.3.7.3 1.2.5 1.6.6.7.2 1.3.2 1.8.1.5-.1 1.8-.7 2-1.4.3-.7.3-1.3.2-1.4-.1-.1-.3-.2-.6-.4z" fill="#fff"/></svg>
  </a>
  <script src="/js/main.js"></script>`;
}

function page({ title, description, path, bodyHtml, products, extraHead = "" }) {
  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${title}</title>
<meta name="description" content="${description}">
<link rel="canonical" href="${config.domain}${path}">
<link rel="icon" href="/images/logo-mark.png" type="image/png">
<meta property="og:title" content="${title}">
<meta property="og:description" content="${description}">
<meta property="og:type" content="website">
<meta property="og:url" content="${config.domain}${path}">
<meta property="og:image" content="${config.domain}/images/og-banner.jpg">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:image" content="${config.domain}/images/og-banner.jpg">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">
<link rel="stylesheet" href="/css/style.css">
${extraHead}
</head>
<body>
${header(products, path)}
<main>
${bodyHtml}
</main>
${footer(products)}
</body>
</html>`;
}

module.exports = { page, groupByCategory };
