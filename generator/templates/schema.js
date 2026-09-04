const config = require("../data/config");

// Convert "Mon–Sat, 9:00 AM – 6:00 PM (Beirut)" into schema.org's "Mo-Sa 09:00-18:00" shape.
// Kept as a plain constant here (rather than parsed) so it stays obviously correct/edit-able.
const OPENING_HOURS = "Mo-Sa 09:00-18:00";
const FULL_ADDRESS = `${config.siteName}, Beirut Digital District, Block 1499, Floor 1, Beirut, Lebanon`;

function ld(obj) {
  return `<script type="application/ld+json">${JSON.stringify(obj)}</script>`;
}

function organizationSchema() {
  return ld({
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: config.siteName,
    url: config.domain,
    logo: `${config.domain}/images/logo-mark.png`,
    image: `${config.domain}/images/og-banner.jpg`,
    description:
      "CSP4TECH is a Zoho Authorized Partner in Beirut, Lebanon, providing Zoho CRM, Books, People, and full-suite implementation, migration, and support for Lebanese SMEs and enterprises. Our team also has hands-on implementation experience with Odoo, Microsoft (Dynamics 365, Power Platform, Microsoft 365), Oracle (NetSuite, Fusion/EBS), Salesforce, and Shopify.",
    telephone: `+${config.phone.href}`,
    email: config.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Beirut Digital District, Block 1499, Floor 1",
      addressLocality: "Beirut",
      addressCountry: "LB",
    },
    areaServed: "Lebanon",
    knowsLanguage: ["en", "ar"],
    openingHours: OPENING_HOURS,
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "09:00",
      closes: "18:00",
    },
    hasMap: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(FULL_ADDRESS)}`,
    sameAs: Object.values(config.social),
  });
}

function breadcrumbSchema(items) {
  // items: [{ name, url }] in order, url may be relative (starts with "/")
  return ld({
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.url.startsWith("http") ? item.url : `${config.domain}${item.url}`,
    })),
  });
}

function articleSchema({ title, excerpt, date, path }) {
  return ld({
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description: excerpt,
    datePublished: date,
    dateModified: date,
    image: `${config.domain}/images/og-banner.jpg`,
    author: { "@type": "Organization", name: config.siteName, url: config.domain },
    publisher: {
      "@type": "Organization",
      name: config.siteName,
      logo: { "@type": "ImageObject", url: `${config.domain}/images/logo-mark.png` },
    },
    mainEntityOfPage: `${config.domain}${path}`,
  });
}

function serviceSchema(product, basePath) {
  // basePath defaults to the Zoho product pages for backward compatibility;
  // pass "/platforms/" for the non-Zoho platform pages.
  const base = basePath || "/zoho-products/";
  return ld({
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: `${product.name} Implementation & Support`,
    name: `${product.name} Implementation`,
    description: product.description,
    provider: { "@type": "Organization", name: config.siteName, url: config.domain },
    areaServed: "Lebanon",
    url: `${config.domain}${base}${product.slug}.html`,
  });
}

function faqSchema(qaPairs) {
  return ld({
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: qaPairs.map((qa) => ({
      "@type": "Question",
      name: qa.q,
      acceptedAnswer: { "@type": "Answer", text: qa.a },
    })),
  });
}

module.exports = { organizationSchema, breadcrumbSchema, articleSchema, serviceSchema, faqSchema };
