// Single source of truth for company details — fixes the audit findings:
// - one consistent set of stats (was 2016/4000+/2000+ on home vs 2018/150+/135+ on about)
// - one correct contact email everywhere (was a stray mailto to a third-party "shyphan.com" domain)
// - one consistent set of business hours (was Mon-Fri 9-18 in one place, Mon-Sat 9-6 in another)
// - canonical domain is csp4tech.com (no .in)
module.exports = {
  siteName: "CSP4TECH",
  domain: "https://www.csp4tech.com",
  tagline: "Certified Zoho Partner — Lebanon",
  email: "info@csp4tech.com",
  phone: { display: "+961 78 744 789", href: "96178744789" },
  whatsapp: "96178744789",
  hours: "Mon–Sat, 9:00 AM – 6:00 PM (Beirut)",
  languages: "Arabic, English, French",
  address: {
    lebanon: "Beirut Digital District, Block 1499, Floor 1, Beirut, Lebanon",
  },
  social: {
    linkedin: "https://www.linkedin.com/company/csp4tech",
    twitter: "https://twitter.com/csp4tech",
    facebook: "https://www.facebook.com/csp4tech",
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
  // Real, named local partners the client will swap in — no stock photos, no
  // fabricated testimonials standing in as real ones. See README "Trusted by" section.
  trustedByPlaceholders: [
    "Your Client Co.", "Partner Group", "Client Name", "Company Ltd.", "Brand Co.", "Client Six",
  ],
  nav: {
    productCategories: [
      "Sales & CRM", "Finance & Operations", "HR & Payroll",
      "Service & Support", "Analytics & Data", "Apps & Workplace", "All-in-One Suite",
    ],
  },
};
