const fs = require("fs");
const path = require("path");

const config = require("./data/config");
const products = require("./data/products");
const blogPosts = require("./data/blog");

const { page } = require("./templates/layout");
const homeTpl = require("./templates/home");
const aboutTpl = require("./templates/about");
const contactTpl = require("./templates/contact");
const servicesTpl = require("./templates/services");
const suitesTpl = require("./templates/suites");
const productsIndexTpl = require("./templates/productsIndex");
const productPageTpl = require("./templates/productPage");
const blogIndexTpl = require("./templates/blogIndex");
const blogPostTpl = require("./templates/blogPost");

const ROOT = path.join(__dirname, "..");
const DIST = path.join(ROOT, "dist");

function write(relPath, html) {
  const full = path.join(DIST, relPath);
  fs.mkdirSync(path.dirname(full), { recursive: true });
  fs.writeFileSync(full, html, "utf8");
}

function clean(dir) {
  if (fs.existsSync(dir)) fs.rmSync(dir, { recursive: true, force: true });
  fs.mkdirSync(dir, { recursive: true });
}

function copyAssets() {
  const assetsDir = path.join(__dirname, "assets");
  fs.mkdirSync(path.join(DIST, "css"), { recursive: true });
  fs.mkdirSync(path.join(DIST, "js"), { recursive: true });
  fs.mkdirSync(path.join(DIST, "images"), { recursive: true });
  fs.copyFileSync(path.join(assetsDir, "style.css"), path.join(DIST, "css", "style.css"));
  fs.copyFileSync(path.join(assetsDir, "main.js"), path.join(DIST, "js", "main.js"));
  // Real CSP4TECH brand assets (replaced the placeholder recreated mark).
  fs.copyFileSync(path.join(assetsDir, "logo-mark.png"), path.join(DIST, "images", "logo-mark.png"));
  fs.copyFileSync(path.join(assetsDir, "og-banner.jpg"), path.join(DIST, "images", "og-banner.jpg"));
}

let pageCount = 0;

function emit(relPath, opts) {
  write(relPath, page({ ...opts, products }));
  pageCount++;
}

function build() {
  clean(DIST);
  copyAssets();

  // Home
  emit("index.html", {
    title: "Zoho Partner Lebanon | CRM, Accounting, HR & ERP Software in Beirut | CSP4TECH",
    description: `${config.siteName} is a Zoho Authorized Partner in Beirut, Lebanon — CRM, accounting, HR & payroll, inventory, and custom-app implementation, migration & support for Lebanese SMEs and enterprises.`,
    path: "/",
    bodyHtml: homeTpl(products, blogPosts),
  });

  // About
  emit("about.html", {
    title: "About CSP4TECH | Zoho Authorized Partner in Beirut, Lebanon",
    description: "CSP4TECH is a Beirut-based Zoho Authorized Partner serving Lebanese SMEs since 2018 — certified consultants, local support, Arabic/English delivery.",
    path: "/about.html",
    bodyHtml: aboutTpl(),
  });

  // Contact
  emit("contact-us.html", {
    title: "Contact CSP4TECH | Zoho Consultation & Support in Beirut, Lebanon",
    description: "Get in touch with CSP4TECH for a free Zoho consultation. Beirut, Lebanon — reply within one business day.",
    path: "/contact-us.html",
    bodyHtml: contactTpl(),
  });

  // Services
  emit("services.html", {
    title: "Zoho Services | Implementation, Migration & Support | CSP4TECH",
    description: "Zoho implementation, migration, customization, automation, training, and support for Lebanese businesses.",
    path: "/services.html",
    bodyHtml: servicesTpl(),
  });

  // Suites
  emit("zoho-suites.html", {
    title: "Compare Zoho Suites | Zoho One, CRM Plus & More | CSP4TECH",
    description: "Compare Zoho One against Zoho's focused suites — CRM Plus, Finance Plus, People Plus, Service Plus — and find the right bundle for your team.",
    path: "/zoho-suites.html",
    bodyHtml: suitesTpl(products),
  });

  // Products index
  emit("zoho-products/index.html", {
    title: "Zoho Products We Implement | 39 Apps | CSP4TECH",
    description: "Browse every Zoho app CSP4TECH implements and supports — Sales & CRM, Finance, HR & Payroll, Service & Support, Analytics, and Workplace tools.",
    path: "/zoho-products/",
    bodyHtml: productsIndexTpl(products),
  });

  // Individual product pages
  products.forEach((p) => {
    emit(`zoho-products/${p.slug}.html`, {
      title: `${p.name} Implementation in Lebanon | CSP4TECH`,
      description: `${p.tagline} CSP4TECH implements and supports ${p.name} for Lebanese businesses.`,
      path: `/zoho-products/${p.slug}.html`,
      bodyHtml: productPageTpl(p, products),
    });
  });

  // Blog index
  emit("blog/index.html", {
    title: "Blog | Zoho Guides for Lebanese Businesses | CSP4TECH",
    description: "Practical, Lebanon-specific guides on Zoho CRM, Books, People, and more — written by the team that implements them.",
    path: "/blog/",
    bodyHtml: blogIndexTpl(blogPosts),
  });

  // Blog posts
  blogPosts.forEach((b) => {
    emit(`blog/${b.slug}.html`, {
      title: `${b.title} | CSP4TECH Blog`,
      description: b.excerpt,
      path: `/blog/${b.slug}.html`,
      bodyHtml: blogPostTpl(b, blogPosts),
    });
  });

  // 404 page
  write(
    "404.html",
    page({
      title: "Page Not Found | CSP4TECH",
      description: "The page you're looking for doesn't exist.",
      path: "/404.html",
      products,
      bodyHtml: `
      <section class="hero"><div class="container hero-inner">
        <h1>404 — Page not found</h1>
        <p class="lead">The page you're looking for may have moved. Try the homepage or browse our Zoho products.</p>
        <div class="hero-actions">
          <a href="/" class="btn btn-primary">Back to Home</a>
          <a href="/zoho-products/" class="btn btn-ghost">Browse Zoho Products</a>
        </div>
      </div></section>`,
    })
  );

  // sitemap.xml
  const urls = [
    "/", "/about.html", "/contact-us.html", "/services.html", "/zoho-suites.html", "/zoho-products/", "/blog/",
    ...products.map((p) => `/zoho-products/${p.slug}.html`),
    ...blogPosts.map((b) => `/blog/${b.slug}.html`),
  ];
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map((u) => `  <url><loc>${config.domain}${u}</loc></url>`).join("\n")}
</urlset>`;
  write("sitemap.xml", sitemap);

  // robots.txt
  write("robots.txt", `User-agent: *\nAllow: /\nSitemap: ${config.domain}/sitemap.xml\n`);

  console.log(`Built ${pageCount} HTML pages + sitemap/robots into dist/`);
  console.log(`Products: ${products.length}, Blog posts: ${blogPosts.length}`);
}

build();
