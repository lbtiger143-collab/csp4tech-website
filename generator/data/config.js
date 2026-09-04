// Single source of truth for company details — fixes the audit findings:
// - one consistent set of stats (was 2016/4000+/2000+ on home vs 2018/150+/135+ on about)
// - one correct contact email everywhere (was a stray mailto to a third-party "shyphan.com" domain)
// - one consistent set of business hours (was Mon-Fri 9-18 in one place, Mon-Sat 9-6 in another)
// - canonical domain is csp4tech.com (no .in)
module.exports = {
  siteName: "CSP4TECH",
  domain: "https://www.csp4tech.com",
  tagline: "Certified Zoho Partner — Based in Lebanon, Serving Clients Worldwide",
  email: "info@csp4tech.com",
  phone: { display: "+961 78 744 789", href: "96178744789" },
  whatsapp: "96178744789",
  hours: "Mon–Sat, 9:00 AM – 6:00 PM (Beirut)",
  languages: "Arabic, English",
  address: {
    lebanon: "Beirut Digital District, Block 1499, Floor 1, Beirut, Lebanon",
  },
  social: {
    linkedin: "https://www.linkedin.com/in/mohamad-zeib-23052621a",
    facebook: "https://www.facebook.com/share/19cuA5S8ZB/",
    instagram: "https://www.instagram.com/csp4tech",
  },
  stats: {
    founded: 2018,
    yearsExperience: "8+ Years",
    projectsDelivered: "150+",
    businessesServed: "150+",
    industriesServed: "12+",
    zohoAppsImplemented: "39",
    certifiedExperts: "100%",
  },
  // Real client logos for the "trusted by" strip. Add more objects here as
  // logos are approved — the marquee and structured data both read this list.
  trustedByClients: [
    { name: "areeba", file: "areeba.png" },
    { name: "Allo Taxi", file: "allo-taxi.png" },
    { name: "Wood & Gas", file: "wood-and-gas.png" },
    { name: "Atelier Trente Trois", file: "atelier-trente-trois.png" },
    { name: "Morocco Welcome", file: "morocco-welcome.png" },
    { name: "Ajialouna", file: "ajialouna.png" },
  ],
  nav: {
    productCategories: [
      "Sales & CRM", "Finance & Operations", "HR & Payroll",
      "Service & Support", "Analytics & Data", "Apps & Workplace", "All-in-One Suite",
    ],
  },
};
