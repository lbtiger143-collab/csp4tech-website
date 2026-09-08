// "Our Service Sector" — industry-specific configurations of our Zoho work.
// Recreated (with updated original copy) from a section that existed on the
// old csp4tech.com.in site but wasn't part of the initial rebuild scope.
// Colors are the closest match to the icon backgrounds in the reference
// recording of the old site; icon keys map to the inline SVGs in
// templates/industries.js. Photos are free-license stock photos (Pexels),
// one per industry, stored in generator/assets/industries/.
module.exports = [
  {
    slug: "real-estate",
    name: "Real Estate",
    icon: "home",
    color: "#6738EA",
    description: "Property listings, leads, and tenant management in one CRM.",
    detail:
      "Agents and brokers spend more time chasing paperwork than closing deals. We set up Zoho CRM to track every listing, buyer, and viewing in one place, so nothing falls through the cracks between the first call and the signed contract.",
    benefits: [
      "Listing & inventory management",
      "Lead & viewing scheduling",
      "Tenant & lease tracking",
      "Commission & broker payouts",
    ],
  },
  {
    slug: "logistics",
    name: "Logistics",
    icon: "truck",
    color: "#22B04C",
    description: "Fleet & order tracking, delivery status, and route optimization.",
    detail:
      "When shipments, drivers, and warehouse stock live in separate spreadsheets, delays are inevitable. We connect Zoho CRM, Inventory, and Creator so dispatch, tracking, and billing update automatically as a shipment moves.",
    benefits: [
      "Shipment tracking",
      "Warehouse & inventory",
      "Driver app & POD",
      "Billing & reconciliation",
    ],
  },
  {
    slug: "travel-agencies",
    name: "Travel Agencies",
    icon: "send",
    color: "#E0324B",
    description: "Manage itineraries, bookings, and CRM in one place.",
    detail:
      "Building a package, chasing supplier rates, and following up with the client shouldn't need three different tools. We set up Zoho to handle the whole trip lifecycle — from the first quote to the final invoice — so nothing gets missed during peak season.",
    benefits: [
      "Package builder & quotes",
      "Supplier contracts & rates",
      "Voucher & invoice automation",
      "Customer portal",
    ],
  },
  {
    slug: "finance",
    name: "Finance",
    icon: "database",
    color: "#EA9E16",
    description: "Accounting, approvals, audits, and analytics built for scale.",
    detail:
      "Manual approvals and month-end reconciliation eat up time your finance team could spend on planning. We configure Zoho Books and Analytics around your actual approval chain and reporting needs, with proper audit trails built in from day one.",
    benefits: [
      "General ledger & reporting",
      "Approvals & audit trails",
      "E-invoicing & payments",
      "Budgeting & analytics",
    ],
  },
  {
    slug: "healthcare",
    name: "Healthcare",
    icon: "cross",
    color: "#8C4DEE",
    description: "For clinics & hospitals with patient-first workflows.",
    detail:
      "Patient records, appointments, and billing need to move fast without compromising on compliance. We set up Zoho for clinics and hospitals so front-desk staff, doctors, and billing teams all work from the same up-to-date record.",
    benefits: [
      "Patient CRM & appointments",
      "Inventory & pharmacy",
      "Insurance claims & billing",
      "Compliance logs",
    ],
  },
  {
    slug: "projects-services",
    name: "Projects/Services",
    icon: "layers",
    color: "#5B4FE0",
    description: "Perfect for agencies and consulting teams.",
    detail:
      "Agencies and consulting teams live or die by utilization and timely billing. We configure Zoho Projects and Desk so project plans, support tickets, and timesheets all feed the same dashboard your team already checks daily.",
    benefits: [
      "Project planning & Gantt",
      "Helpdesk & SLAs",
      "Timesheets & billing",
      "Resource utilization",
    ],
  },
  {
    slug: "manufacturing",
    name: "Manufacturing",
    icon: "factory",
    color: "#4B5563",
    description: "Production, inventory, and quality in one flow.",
    detail:
      "A missed BOM update or an untracked batch can cascade into a costly recall. We set up Zoho to connect production planning, inventory, and quality control, so what's on the floor always matches what's in the system.",
    benefits: [
      "BOM & work orders",
      "Production planning",
      "QC & traceability",
      "Inventory & procurement",
    ],
  },
];
