// Zoho product catalog for CSP4TECH. Original copy — not copied from Zoho or the old site.
module.exports = [
  // ---------- Sales & CRM ----------
  {
    slug: "crm", name: "Zoho CRM", category: "Sales & CRM",
    tagline: "One pipeline for every lead, deal, and follow-up.",
    description: "Zoho CRM centralizes contacts, deals, and communication so your sales team stops chasing spreadsheets and starts closing. We configure pipelines, scoring, and automation around how your team actually sells — whether you're in Lebanon or anywhere else.",
    features: ["Custom pipelines & deal stages", "WhatsApp, call & email logging", "Workflow automation & approvals", "Sales forecasting & territory reports"],
    useCase: "Best for teams that need one source of truth for every customer conversation."
  },
  {
    slug: "bigin", name: "Zoho Bigin", category: "Sales & CRM",
    tagline: "Pipeline CRM built for small teams, not enterprises.",
    description: "Bigin strips CRM down to what a small business actually needs: a simple pipeline, contact history, and reminders. It's a lightweight starting point before a company is ready for full Zoho CRM.",
    features: ["Drag-and-drop pipeline view", "Built-in telephony & email", "Simple task reminders", "Fast setup, minimal training"],
    useCase: "Best for small teams replacing spreadsheets or notebooks with a real pipeline."
  },
  {
    slug: "crmplus", name: "Zoho CRM Plus", category: "Sales & CRM",
    tagline: "CRM, support, marketing, and analytics under one roof.",
    description: "CRM Plus bundles Zoho's customer-facing apps — CRM, Desk, SalesIQ, Analytics, and more — into one unified customer experience platform, so sales, marketing, and support work from the same record.",
    features: ["Unified customer timeline", "Cross-team SLAs & handoffs", "Shared analytics across apps", "Single sign-on across the suite"],
    useCase: "Best for growing companies that want sales, marketing, and support aligned in one platform."
  },
  {
    slug: "bookings", name: "Zoho Bookings", category: "Sales & CRM",
    tagline: "Let customers book time with your team automatically.",
    description: "Bookings turns your calendar into a self-service scheduling page, syncing with your team's availability so meetings, consultations, and services get booked without back-and-forth emails.",
    features: ["Self-service booking pages", "Calendar sync (Google/Outlook)", "Automated reminders & reschedules", "Team & resource scheduling"],
    useCase: "Best for consultancies, clinics, and service businesses that book appointments daily."
  },
  {
    slug: "salesiq", name: "Zoho SalesIQ", category: "Sales & CRM",
    tagline: "Live chat and visitor tracking for your website.",
    description: "SalesIQ shows you who's on your site in real time and lets your team chat with them before they leave — with visitor history feeding straight back into CRM.",
    features: ["Live chat widget", "Visitor tracking & scoring", "Chatbot for after-hours queries", "Direct CRM integration"],
    useCase: "Best for businesses that want to convert website visitors while they're still browsing."
  },
  {
    slug: "contracts", name: "Zoho Contracts", category: "Sales & CRM",
    tagline: "Draft, negotiate, and track contracts without the email chaos.",
    description: "Contracts manages the full contract lifecycle — templates, redlines, approvals, e-signature, and renewal alerts — so nothing important expires quietly in someone's inbox.",
    features: ["Clause & template library", "Approval workflows", "E-signature built in", "Renewal & expiry alerts"],
    useCase: "Best for teams juggling vendor, client, or employment contracts on tight timelines."
  },
  {
    slug: "forms", name: "Zoho Forms", category: "Sales & CRM",
    tagline: "Web forms that feed straight into your CRM.",
    description: "Build branded forms for leads, surveys, or internal requests in minutes, with submissions routed automatically into CRM, Desk, or a workflow of your choice.",
    features: ["Drag-and-drop form builder", "Conditional logic", "Native Zoho app integrations", "Offline form collection (mobile)"],
    useCase: "Best for capturing leads, feedback, or internal requests without developer time."
  },

  // ---------- Finance & Operations ----------
  {
    slug: "books", name: "Zoho Books", category: "Finance & Operations",
    tagline: "Multi-currency, VAT-ready accounting — with deep Lebanon expertise built in.",
    description: "Books handles invoicing, expense tracking, bank reconciliation, and VAT-ready reporting in any currency mix — including USD and LBP for Lebanon-based clients — so your books stay accurate without a spreadsheet on the side.",
    features: ["VAT-compliant invoicing", "Multi-currency (USD/LBP)", "Bank feed reconciliation", "Chart of accounts setup"],
    useCase: "Best for SMEs that need proper books without hiring a full finance team."
  },
  {
    slug: "billing", name: "Zoho Billing", category: "Finance & Operations",
    tagline: "Subscriptions and recurring invoices, handled automatically.",
    description: "Billing manages recurring plans, metered usage, and dunning for subscription businesses, syncing revenue straight into Zoho Books so finance never reconciles by hand.",
    features: ["Recurring & usage-based billing", "Automated dunning & retries", "Customer self-service portal", "Revenue recognition reports"],
    useCase: "Best for SaaS, membership, or any business billing customers on a schedule."
  },
  {
    slug: "expense", name: "Zoho Expense", category: "Finance & Operations",
    tagline: "Expense reports your team can file from their phone.",
    description: "Expense lets employees snap a receipt, categorize it, and submit — with approval chains and policy checks running automatically before it ever hits accounting.",
    features: ["Receipt scanning (mobile)", "Approval workflows", "Policy & budget checks", "Direct sync to Zoho Books"],
    useCase: "Best for teams tired of chasing paper receipts and manual expense spreadsheets."
  },
  {
    slug: "checkout", name: "Zoho Checkout", category: "Finance & Operations",
    tagline: "Payment pages you can set up without a developer.",
    description: "Checkout creates hosted payment pages for one-time or recurring payments — donations, deposits, one-off invoices — without needing an e-commerce build.",
    features: ["No-code payment pages", "One-time & recurring options", "Multiple payment gateways", "Instant payment notifications"],
    useCase: "Best for collecting payments quickly without building a full storefront."
  },
  {
    slug: "commerce", name: "Zoho Commerce", category: "Finance & Operations",
    tagline: "A full online store, connected to your accounting and stock.",
    description: "Commerce gives you a storefront, cart, and checkout that stays in sync with Zoho Inventory and Books — so stock levels and financials never drift from what's actually sold.",
    features: ["Hosted online storefront", "Live inventory sync", "Order & fulfillment tracking", "Built-in SEO & analytics"],
    useCase: "Best for retailers who want e-commerce without stitching together separate platforms."
  },
  {
    slug: "inventory", name: "Zoho Inventory", category: "Finance & Operations",
    tagline: "Stock, orders, and warehouses in one accurate view.",
    description: "Inventory tracks stock across warehouses, automates reordering, and connects sales channels to real stock counts — built for the retail and wholesale operations we work with, in Lebanon and beyond.",
    features: ["Multi-warehouse tracking", "Reorder point automation", "Sales channel integrations", "Batch & serial tracking"],
    useCase: "Best for retail and wholesale businesses managing stock across multiple locations."
  },
  {
    slug: "practice", name: "Zoho Practice", category: "Finance & Operations",
    tagline: "Practice management built for accounting firms.",
    description: "Practice gives accounting and audit firms a single place to manage client work, deadlines, documents, and staff capacity across every engagement.",
    features: ["Client & engagement tracking", "Deadline & task management", "Document exchange portal", "Team capacity planning"],
    useCase: "Best for accounting, audit, or advisory firms managing many client engagements at once."
  },
  {
    slug: "financeplus", name: "Zoho Finance Plus", category: "Finance & Operations",
    tagline: "Books, Billing, Expense, and Inventory, working as one system.",
    description: "Finance Plus bundles Zoho's finance apps into a single back office, so invoicing, subscriptions, expenses, and stock all reconcile automatically instead of living in separate tools.",
    features: ["Unified finance back office", "Cross-app reconciliation", "Consolidated financial reporting", "Single admin console"],
    useCase: "Best for finance teams ready to retire disconnected spreadsheets and point tools."
  },

  // ---------- HR & Payroll ----------
  {
    slug: "people", name: "Zoho People", category: "HR & Payroll",
    tagline: "HR records, leave, and onboarding without the paper trail.",
    description: "People centralizes employee records, leave requests, attendance, and onboarding checklists, with self-service so HR isn't the bottleneck for every small request.",
    features: ["Employee self-service portal", "Leave & attendance tracking", "Onboarding checklists", "Custom HR workflows"],
    useCase: "Best for HR teams replacing paper files and WhatsApp requests with real records."
  },
  {
    slug: "payroll", name: "Zoho Payroll", category: "HR & Payroll",
    tagline: "Payroll calculated correctly, every pay cycle.",
    description: "Payroll runs salary calculations, statutory deductions, and payslips on schedule, integrated with Zoho People and Books so payroll numbers match your actual books.",
    features: ["Automated salary runs", "Statutory deduction handling", "Digital payslips", "Payroll journal sync to Books"],
    useCase: "Best for businesses that have outgrown manual or Excel-based payroll runs."
  },
  {
    slug: "recruit", name: "Zoho Recruit", category: "HR & Payroll",
    tagline: "Hiring pipelines that don't live in someone's inbox.",
    description: "Recruit tracks candidates from application to offer, with job postings, interview scheduling, and evaluation forms all in one pipeline your hiring managers can actually see.",
    features: ["Candidate pipeline tracking", "Job board posting", "Interview scheduling", "Collaborative evaluation forms"],
    useCase: "Best for companies hiring regularly and tired of tracking candidates by email."
  },
  {
    slug: "shifts", name: "Zoho Shifts", category: "HR & Payroll",
    tagline: "Shift scheduling for teams that don't work 9-to-5.",
    description: "Shifts builds and shares staff schedules, handles swap requests, and flags coverage gaps — built for retail, hospitality, and support teams working rotating hours.",
    features: ["Drag-and-drop shift builder", "Shift swap requests", "Coverage gap alerts", "Mobile schedule access"],
    useCase: "Best for retail, hospitality, or support teams scheduling shift-based staff."
  },
  {
    slug: "workerly", name: "Zoho Workerly", category: "HR & Payroll",
    tagline: "Staffing agency operations, from placement to invoicing.",
    description: "Workerly helps staffing agencies manage temp workers, client placements, timesheets, and billing in one place, instead of juggling spreadsheets per client.",
    features: ["Temp worker database", "Client placement tracking", "Digital timesheets", "Placement-based invoicing"],
    useCase: "Best for staffing and recruitment agencies placing temporary or contract workers."
  },
  {
    slug: "peopleplus", name: "Zoho People Plus", category: "HR & Payroll",
    tagline: "The full HR stack — hire, pay, manage, and develop.",
    description: "People Plus bundles Zoho's HR apps — People, Recruit, Payroll, Shifts — into one employee experience platform covering the full employee lifecycle.",
    features: ["End-to-end employee lifecycle", "Unified HR reporting", "Single employee record", "Consistent HR workflows"],
    useCase: "Best for HR teams ready to consolidate hiring, payroll, and people management."
  },

  // ---------- Service & Support ----------
  {
    slug: "desk", name: "Zoho Desk", category: "Service & Support",
    tagline: "Support tickets that don't fall through the cracks.",
    description: "Desk organizes support requests from email, chat, and social into one ticket queue, with SLAs and automation so nothing sits unanswered.",
    features: ["Multi-channel ticketing", "SLA & escalation rules", "Knowledge base builder", "Customer satisfaction surveys"],
    useCase: "Best for support teams that need structure once email alone stops scaling."
  },
  {
    slug: "assist", name: "Zoho Assist", category: "Service & Support",
    tagline: "Remote support and access, without the awkward setup.",
    description: "Assist lets your support team remotely view and control a customer's or employee's device to fix issues directly, with session recording for accountability.",
    features: ["Remote screen control", "Unattended access", "File transfer during sessions", "Session recording"],
    useCase: "Best for IT and support teams troubleshooting devices they can't physically reach."
  },
  {
    slug: "lens", name: "Zoho Lens", category: "Service & Support",
    tagline: "See the problem through the customer's camera.",
    description: "Lens uses augmented reality video calls so a technician can guide a customer through a fix by seeing exactly what they see, no site visit required.",
    features: ["AR-guided video support", "Remote annotation", "No app install for customers", "Session recording"],
    useCase: "Best for field service or hardware support where a site visit is costly."
  },
  {
    slug: "qntrl", name: "Qntrl", category: "Service & Support",
    tagline: "Turn ad-hoc processes into tracked, repeatable workflows.",
    description: "Qntrl (formerly Orchestly) maps out internal processes — approvals, procurement, onboarding — as visual workflows with clear ownership at every step.",
    features: ["Visual workflow builder", "Role-based task routing", "Process analytics", "SLA tracking per step"],
    useCase: "Best for operations teams standardizing processes that currently run on habit and memory."
  },
  {
    slug: "serviceplus", name: "Zoho Service Plus", category: "Service & Support",
    tagline: "Support, remote assistance, and field service, unified.",
    description: "Service Plus bundles Desk, Assist, Lens, and more into one customer service platform, so every support channel reports into the same ticket and customer history.",
    features: ["Unified service console", "Cross-channel ticket history", "Shared SLAs", "Consolidated service analytics"],
    useCase: "Best for support organizations running multiple service channels that need one view."
  },

  // ---------- Analytics & Data ----------
  {
    slug: "analytics", name: "Zoho Analytics", category: "Analytics & Data",
    tagline: "Dashboards that pull straight from your Zoho apps.",
    description: "Analytics turns CRM, Books, and other Zoho data into live dashboards and reports, so leadership sees real numbers instead of waiting on a monthly export.",
    features: ["Drag-and-drop dashboards", "Native Zoho app connectors", "Scheduled report emails", "Cross-app data blending"],
    useCase: "Best for leadership teams that want real-time visibility instead of manual reports."
  },
  {
    slug: "analyticsplus", name: "Zoho Analytics Plus", category: "Analytics & Data",
    tagline: "Analytics with AI-assisted insight discovery.",
    description: "Analytics Plus adds AI-driven anomaly detection and natural-language querying on top of standard reporting, surfacing trends someone might otherwise miss.",
    features: ["AI anomaly detection", "Natural-language queries", "Predictive trend forecasts", "Advanced data modeling"],
    useCase: "Best for data-heavy teams who want the analysis, not just the chart."
  },
  {
    slug: "dataprep", name: "Zoho DataPrep", category: "Analytics & Data",
    tagline: "Clean and shape messy data before it hits your reports.",
    description: "DataPrep automates the tedious part of analytics — cleaning, deduplicating, and transforming raw data — before it's loaded into dashboards or other systems.",
    features: ["Automated data cleansing", "Duplicate detection", "Reusable transformation rules", "Scheduled data pipelines"],
    useCase: "Best for teams whose reports are only as good as their messiest spreadsheet."
  },
  {
    slug: "apptics", name: "Zoho Apptics", category: "Analytics & Data",
    tagline: "Understand how people actually use your app.",
    description: "Apptics tracks app usage, crashes, and user behavior for mobile and web apps, giving product teams real data instead of guesswork.",
    features: ["Crash & performance monitoring", "User behavior analytics", "Push notification insights", "Custom event tracking"],
    useCase: "Best for teams shipping their own mobile or web app who need real usage data."
  },

  // ---------- Apps & Workplace ----------
  {
    slug: "creator", name: "Zoho Creator", category: "Apps & Workplace",
    tagline: "Build the custom app your business actually needs.",
    description: "Creator is a low-code platform for building internal apps — approvals, tracking tools, custom portals — tailored to a workflow no off-the-shelf app quite fits.",
    features: ["Low-code app builder", "Custom workflow automation", "Mobile-ready apps", "Integrates with other Zoho apps"],
    useCase: "Best for businesses with a workflow specific enough that no template fits."
  },
  {
    slug: "catalyst", name: "Zoho Catalyst", category: "Apps & Workplace",
    tagline: "A serverless backend for developers building on Zoho.",
    description: "Catalyst gives development teams a serverless platform — functions, databases, authentication — for building custom applications that plug directly into the Zoho ecosystem.",
    features: ["Serverless functions", "Built-in database & auth", "AI/ML integrations", "Direct Zoho ecosystem access"],
    useCase: "Best for in-house developer teams building custom software on top of Zoho."
  },
  {
    slug: "mail", name: "Zoho Mail", category: "Apps & Workplace",
    tagline: "Business email on your own domain, without the ads.",
    description: "Mail gives your team professional email on your domain, with calendar, contacts, and admin controls — a privacy-focused alternative to free consumer email.",
    features: ["Custom domain email", "Shared calendars & contacts", "Admin & security controls", "Migration from existing email"],
    useCase: "Best for businesses that want professional email without vendor lock-in."
  },
  {
    slug: "zeptomail", name: "ZeptoMail", category: "Apps & Workplace",
    tagline: "Transactional email that reliably reaches the inbox.",
    description: "ZeptoMail sends receipts, password resets, and other transactional email at scale, with deliverability tracking so you know what actually landed.",
    features: ["High-deliverability sending", "Real-time delivery tracking", "Email templates & API", "Bounce & spam monitoring"],
    useCase: "Best for applications that need transactional email to actually arrive."
  },
  {
    slug: "directory", name: "Zoho Directory", category: "Apps & Workplace",
    tagline: "One login, every Zoho app, properly secured.",
    description: "Directory centralizes identity and access — single sign-on, multi-factor authentication, and provisioning — across every app your team uses.",
    features: ["Single sign-on (SSO)", "Multi-factor authentication", "User provisioning & offboarding", "App access policies"],
    useCase: "Best for IT teams managing access across a growing number of business apps."
  },
  {
    slug: "notebook", name: "Zoho Notebook", category: "Apps & Workplace",
    tagline: "Notes, synced everywhere, without the clutter.",
    description: "Notebook is a clean note-taking app for text, checklists, and files that stays in sync across devices — a simple tool for teams that don't need anything heavier.",
    features: ["Cross-device sync", "Checklists & audio notes", "Note organization by cards", "Free to use"],
    useCase: "Best for individuals and teams who just need reliable, simple note-taking."
  },
  {
    slug: "workplace", name: "Zoho Workplace", category: "Apps & Workplace",
    tagline: "Email, docs, chat, and meetings, in one suite.",
    description: "Workplace bundles Mail, Docs, Cliq, and Meeting into a single productivity suite, so your team collaborates without stitching together five separate vendors.",
    features: ["Email, docs & spreadsheets", "Team chat (Cliq)", "Video meetings", "Shared drive & file storage"],
    useCase: "Best for teams replacing a patchwork of productivity tools with one suite."
  },
  {
    slug: "marketingplus", name: "Zoho Marketing Plus", category: "Apps & Workplace",
    tagline: "Campaigns, social, surveys, and webinars, in one plan.",
    description: "Marketing Plus unifies email campaigns, social scheduling, surveys, landing pages, and webinars, with shared analytics so marketing can see what's actually working.",
    features: ["Email campaign builder", "Social media scheduling", "Landing pages & forms", "Unified marketing analytics"],
    useCase: "Best for marketing teams running campaigns across multiple channels without separate tools."
  },

  // ---------- Suite ----------
  {
    slug: "one", name: "Zoho One", category: "All-in-One Suite",
    tagline: "The entire Zoho suite, one login, one price per employee.",
    description: "Zoho One bundles 45+ Zoho applications — CRM, Books, People, Desk, Analytics, and more — under a single per-employee license, so every department runs on one connected platform.",
    features: ["45+ apps in one license", "Single admin console", "Cross-app automation (Flow)", "Company-wide analytics"],
    useCase: "Best for businesses ready to standardize every department on one platform."
  },
];
