// Non-Zoho platforms CSP4TECH also implements. Zoho stays the flagship —
// these are secondary services, and (unlike Zoho) we are not an official
// certified/authorized partner for any of them, so the copy here must never
// claim certification or partner status. "We implement", "our team has
// experience with" — not "certified" or "authorized partner".
module.exports = [
  {
    slug: "odoo",
    name: "Odoo",
    tagline: "Flexible open-source ERP implementation and support",
    description:
      "Odoo is a modular, open-source business suite covering CRM, sales, inventory, accounting, manufacturing, and more. We implement and configure Odoo for businesses that want an affordable, highly customizable alternative to larger ERP suites, and support teams already running it.",
    capabilities: [
      "Odoo implementation and configuration",
      "Module setup — CRM, Sales, Inventory, Accounting, Manufacturing",
      "Data migration from spreadsheets or another system",
      "Custom workflow and automation setup",
      "Ongoing support and troubleshooting",
    ],
    useCase: "Best for growing businesses that want a flexible, cost-effective ERP without being locked into a single vendor's ecosystem.",
  },
  {
    slug: "microsoft",
    name: "Microsoft",
    tagline: "Dynamics 365, Power Platform & Microsoft 365 implementation",
    description:
      "We implement and support Microsoft's business tools for teams already on — or moving to — the Microsoft ecosystem: Dynamics 365 for CRM and ERP, the Power Platform for custom apps and automation, and Microsoft 365 for day-to-day collaboration.",
    capabilities: [
      "Dynamics 365 Sales, Customer Service & Finance setup",
      "Power Apps custom application development",
      "Power Automate workflow automation",
      "Power BI dashboards and reporting",
      "Microsoft 365 (Teams, SharePoint, Outlook) setup and administration",
    ],
    useCase: "Best for teams already standardized on Microsoft 365 who want their CRM/ERP and automation tools in the same ecosystem.",
  },
  {
    slug: "oracle",
    name: "Oracle",
    tagline: "NetSuite and Oracle Fusion/EBS implementation and support",
    description:
      "We implement and support Oracle NetSuite, a cloud ERP built for growing and mid-sized businesses, as well as Oracle Fusion and E-Business Suite (EBS) for larger enterprise deployments.",
    capabilities: [
      "Oracle NetSuite implementation and configuration",
      "Oracle Fusion / E-Business Suite (EBS) support",
      "Financial and inventory module setup",
      "Data migration and integration",
      "Ongoing administration and support",
    ],
    useCase: "Best for businesses that need enterprise-grade financial controls, whether on NetSuite's cloud platform or a larger Fusion/EBS deployment.",
  },
  {
    slug: "salesforce",
    name: "Salesforce",
    tagline: "Salesforce CRM implementation, customization & support",
    description:
      "We implement and support Salesforce for sales, service, and marketing teams — from initial setup and data migration to custom objects, automation, and ongoing administration.",
    capabilities: [
      "Salesforce Sales Cloud & Service Cloud setup",
      "Custom objects, fields, and workflow automation",
      "Data migration from another CRM or spreadsheets",
      "Third-party integrations",
      "Ongoing admin support and user training",
    ],
    useCase: "Best for sales and service teams already using — or evaluating — Salesforce as their CRM.",
  },
  {
    slug: "shopify",
    name: "Shopify",
    tagline: "Shopify store setup, customization & backend integration",
    description:
      "We build and configure Shopify stores — theme setup and customization, app configuration, and connecting the storefront to backend systems like a CRM or accounting platform (including Zoho) so orders, customers, and inventory stay in sync.",
    capabilities: [
      "Shopify store setup and theme customization",
      "App and payment gateway configuration",
      "Product catalog and inventory setup",
      "Integration with CRM/accounting systems (e.g. Zoho, Odoo)",
      "Ongoing store support and troubleshooting",
    ],
    useCase: "Best for businesses launching or replatforming an online store who also want it properly connected to their CRM, accounting, or inventory system.",
  },
];
