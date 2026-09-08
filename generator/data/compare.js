// Zoho product vs. competitor comparison pages — built for organic search
// traffic on "<Zoho app> vs <competitor>" and "best <category> software"
// queries. Every price/feature claim here was researched against each
// vendor's own current pricing page; see `lastVerified` per entry and the
// disclaimer rendered on the page itself. Re-check before making major
// edits — SaaS pricing pages change often, sometimes without notice.
//
// Shape of each entry:
//   slug            - URL slug under /compare/
//   zohoProductSlug - links back to the matching /zoho-products/<slug>.html
//   title           - <h1> and <title>
//   metaDescription
//   kicker          - small label above the h1
//   intro           - array of intro paragraphs (strings)
//   columns         - table header labels, Zoho product first
//   pricing         - price strings aligned to `columns`
//   pricingNote     - caveat shown under the price row (promos, currency, etc.)
//   rows            - [{ feature, cells }], cells aligned to `columns`.
//                     cell value: true (check), false (cross), or a short
//                     string rendered as a muted text badge (e.g. "$",
//                     "Add-on", "Basic", "15 days").
//   verdict         - [{ name, text }] aligned to `columns`
//   faqs            - [{ q, a }]
//   lastVerified    - "Month YYYY" shown in the disclaimer
module.exports = [
  {
    slug: "zoho-crm-vs-salesforce",
    zohoProductSlug: "crm",
    title: "Zoho CRM vs Salesforce vs HubSpot vs Microsoft Dynamics 365: Which CRM Is Best in 2026?",
    metaDescription:
      "An honest, feature-by-feature comparison of Zoho CRM, Salesforce, HubSpot, and Microsoft Dynamics 365 Sales — entry-tier pricing, what's included, and who each one actually suits.",
    kicker: "CRM Comparison",
    shortTitle: "Zoho CRM vs Salesforce, HubSpot & Dynamics 365",
    intro: [
      "Choosing a CRM usually comes down to four names: Zoho CRM, Salesforce, HubSpot, and Microsoft Dynamics 365. All four can manage leads and deals — the real differences show up in what's actually included at the entry paid tier versus what gets pushed behind an add-on or a pricier plan.",
      "We implement Zoho CRM every week as a Zoho Authorized Partner, so we're not a neutral third party — but we've tried to keep this comparison factual and sourced rather than one-sided. Where a competitor genuinely wins on a feature, we've said so.",
    ],
    columns: [
      "Zoho CRM Standard",
      "Salesforce Starter Suite",
      "HubSpot Sales Hub Starter",
      "Dynamics 365 Sales Professional",
    ],
    pricing: ["$14 /user/mo", "$25 /user/mo", "$15–20 /user/mo*", "$65 /user/mo"],
    pricingNote:
      "*HubSpot runs frequent promotional pricing on Sales Hub Starter — treat this as a range and check hubspot.com/pricing/sales for the live rate. All other prices are billed annually, per user/month, from each vendor's own pricing page.",
    rows: [
      { feature: "Free trial", cells: ["15 days", "30 days", "14 days", "30 days"] },
      { feature: "Multiple sales pipelines", cells: [true, false, true, true] },
      { feature: "Workflow / process automation", cells: [true, "Basic", "Basic", true] },
      { feature: "Social media monitoring", cells: [true, false, false, false] },
      { feature: "Live chat & visitor tracking", cells: ["$", false, true, "$"] },
      { feature: "Sales forecasting", cells: [true, false, false, "Basic"] },
      { feature: "Full API access", cells: [true, false, false, "Add-on"] },
      { feature: "Mobile app", cells: [true, true, true, true] },
    ],
    verdict: [
      {
        name: "Zoho CRM",
        text: "Best value for SMEs and lean sales teams — multiple pipelines, workflow automation, forecasting, and full API access are bundled into the entry tier instead of gated behind add-ons.",
      },
      {
        name: "Salesforce",
        text: "Best for larger or fast-scaling organizations that need deep customization and the AppExchange ecosystem, and are prepared to pay more as they move up the edition ladder for automation and API access.",
      },
      {
        name: "HubSpot",
        text: "Best for teams already using HubSpot's marketing or CMS tools who want a usable CRM with live chat included, but budget for a Professional-tier upgrade once forecasting or multi-step sequences are needed.",
      },
      {
        name: "Microsoft Dynamics 365",
        text: "Best for organizations standardized on Microsoft 365 and the Power Platform, where deep Outlook/Teams/Copilot integration matters more than entry price.",
      },
    ],
    faqs: [
      {
        q: "Is Zoho CRM cheaper than Salesforce?",
        a: "Yes. Zoho CRM Standard is $14/user/month billed annually, versus Salesforce's Starter Suite at $25/user/month — and Zoho's entry tier already includes multiple pipelines, workflow automation, and basic forecasting that Salesforce reserves for higher tiers.",
      },
      {
        q: "Which CRM is easiest to use for a small business?",
        a: "Zoho CRM and HubSpot are both built with SMB onboarding in mind. Zoho's Standard plan bundles pipelines, forecasting, and automation for $14/user/month, while HubSpot is friendlier for marketing-led teams but reserves forecasting and sales sequences for its Professional tier.",
      },
      {
        q: "Does Zoho CRM have a free plan?",
        a: "Yes — Zoho CRM offers a permanently free plan for up to 3 users with core lead and contact management. Salesforce and HubSpot have limited free tiers too; Dynamics 365 has no free CRM tier, only a trial.",
      },
      {
        q: "Which CRM gives the most value without paying for add-ons?",
        a: "At the entry tier, Zoho CRM Standard is the most self-contained — pipelines, workflow automation, forecasting, and full API access are all included for $14/user/month. Salesforce and HubSpot both push forecasting and API access into higher tiers or paid add-ons.",
      },
      {
        q: "Can I migrate from Salesforce or HubSpot to Zoho CRM?",
        a: "Yes — this is one of the most common projects we run. Contacts, deals/pipelines, activity history, and custom fields can all be migrated, and we typically run the old and new systems in parallel briefly to make sure nothing is missed.",
      },
    ],
    lastVerified: "September 2026",
  },
  {
    slug: "zoho-books-vs-quickbooks",
    zohoProductSlug: "books",
    title: "Zoho Books vs QuickBooks Online vs Xero: Which Accounting Software Is Best in 2026?",
    metaDescription:
      "A feature-by-feature comparison of Zoho Books, QuickBooks Online, and Xero — real pricing, what each plan includes, and which one fits a growing small business.",
    kicker: "Accounting Software Comparison",
    shortTitle: "Zoho Books vs QuickBooks & Xero",
    intro: [
      "Zoho Books, QuickBooks Online, and Xero all cover the accounting basics — invoicing, expenses, bank reconciliation. Where they diverge is pricing structure, how many users you get before paying more, and which extras (multi-currency, inventory, a client portal) are bundled in versus locked behind a higher plan.",
      "As a Zoho Authorized Partner we implement Zoho Books most often, but the comparison below reflects each vendor's own published pricing and feature pages, not just our preference.",
    ],
    columns: ["Zoho Books Standard", "QuickBooks Online Essentials", "Xero Growing"],
    pricing: ["$12 /mo", "$85 /mo list*", "$55 /mo list*"],
    pricingNote:
      "*QuickBooks and Xero both run introductory discounts (as low as $2.50–$42.50/month for the first 3–6 months) — figures above are list price once the promo period ends. Zoho Books also offers $10/mo if billed annually.",
    rows: [
      { feature: "Users included", cells: ["3 + 1 accountant", "3 + 2 accountant", "Unlimited"] },
      { feature: "Invoicing", cells: [true, true, true] },
      { feature: "Recurring invoices & reminders", cells: [true, "Higher tier", true] },
      { feature: "Bank reconciliation", cells: [true, true, true] },
      { feature: "Inventory management", cells: ["Basic", false, true] },
      { feature: "Multi-currency support", cells: [false, true, false] },
      { feature: "Client/customer portal", cells: [true, false, false] },
      { feature: "Native CRM integration", cells: [true, false, false] },
    ],
    verdict: [
      {
        name: "Zoho Books",
        text: "Best for a budget-conscious small business, especially one already using — or planning to use — Zoho CRM, since the two sync natively. Multi-currency and inventory require stepping up to the Professional plan.",
      },
      {
        name: "QuickBooks Online",
        text: "Best for a US-centric small business that wants the most mainstream bookkeeper/accountant familiarity and multi-currency at a mid tier, but its per-plan user caps make it costlier to scale a team.",
      },
      {
        name: "Xero",
        text: "Best for a team-heavy small business — unlimited users on every plan is a genuine differentiator — but multi-currency and project tracking are reserved for its priciest Established tier.",
      },
    ],
    faqs: [
      {
        q: "Is Zoho Books cheaper than QuickBooks Online?",
        a: "Yes, significantly at list price. Zoho Books Standard is $12/month versus QuickBooks Essentials at $85/month list for a comparable 3-user tier. Even against QuickBooks' cheapest plan, Simple Start ($38/month, 1 user only), Zoho Books is cheaper and includes more users.",
      },
      {
        q: "Can Zoho Books replace QuickBooks for a small business?",
        a: "For core bookkeeping — invoicing, expense tracking, bank reconciliation, and a client portal — yes, at a much lower price. The trade-off is multi-currency, which QuickBooks includes from Essentials while Zoho Books requires stepping up to its Professional plan.",
      },
      {
        q: "Does Zoho Books integrate with a CRM?",
        a: "Yes, natively — Zoho Books connects directly to Zoho CRM with two-way syncing of customers, quotes, invoices, and orders. QuickBooks and Xero rely on third-party marketplace connectors for the same thing.",
      },
      {
        q: "Is Xero cheaper than QuickBooks Online?",
        a: "On promotional pricing, yes, and Xero's structural advantage is unlimited users on every plan versus QuickBooks' hard per-plan caps (1 user on Simple Start, 3 on Essentials).",
      },
      {
        q: "Which should a growing small business with several team members pick?",
        a: "If team size will exceed 1–3 people and budget matters, Zoho Books ($12, 3 users) or Xero (unlimited users on any plan) beat QuickBooks on user economics. If multi-currency is a near-term need, QuickBooks Essentials or Zoho Books Professional get there more affordably than Xero.",
      },
    ],
    lastVerified: "September 2026",
  },
  {
    slug: "zoho-people-vs-bamboohr",
    zohoProductSlug: "people",
    title: "Zoho People vs BambooHR vs Gusto: Which HR Software Is Best in 2026?",
    metaDescription:
      "Comparing Zoho People, BambooHR, and Gusto on pricing and features — self-service portals, payroll, onboarding, and which HR platform suits which kind of business.",
    kicker: "HR Software Comparison",
    shortTitle: "Zoho People vs BambooHR & Gusto",
    intro: [
      "Zoho People, BambooHR, and Gusto all cover the HR basics — an employee database, time-off tracking, onboarding — but they're built around different priorities. Gusto is payroll-first and US-only. BambooHR is a polished, general-purpose HRIS. Zoho People is the most affordable and the most automation-heavy of the three, with the trade-off that native payroll is limited to a handful of countries.",
      "We implement Zoho People as a Zoho Authorized Partner, but the numbers below are pulled from each vendor's own pricing pages.",
    ],
    columns: ["Zoho People Essential HR", "BambooHR Core", "Gusto Simple"],
    pricing: ["~$1.25–1.50 /employee/mo*", "$10 /employee/mo**", "$49/mo + $6 /employee/mo"],
    pricingNote:
      "*Zoho's pricing page shows localized currency by default and has a 5-user minimum on paid plans — confirm the current USD rate on zoho.com before quoting a client. **BambooHR charges a flat $250/month for companies with 25 or fewer employees instead of the per-employee rate.",
    rows: [
      { feature: "Employee self-service portal", cells: [true, true, true] },
      { feature: "Time-off / leave management", cells: [true, true, "Basic"] },
      { feature: "Onboarding workflows", cells: [true, true, true] },
      { feature: "Performance reviews", cells: ["Higher tier", "Higher tier", "Higher tier"] },
      { feature: "Native payroll", cells: ["Add-on (US/India/UAE)", "Add-on", "Yes (US only)"] },
      { feature: "Org chart", cells: [true, true, true] },
      { feature: "Custom workflow automation", cells: [true, "Basic", false] },
      { feature: "Multi-country HR support", cells: ["Partial", "Partial", false] },
    ],
    verdict: [
      {
        name: "Zoho People",
        text: "Best for small-to-mid businesses — especially outside the US, or already on other Zoho apps — that want an affordable, highly automatable HRIS and are comfortable pairing it with a separate payroll tool where Zoho Payroll isn't available.",
      },
      {
        name: "BambooHR",
        text: "Best for growing US/Canada-based companies that want a polished all-in-one HR platform with strong hiring tools, and don't mind paying a premium per employee plus extra for payroll.",
      },
      {
        name: "Gusto",
        text: "Best for a small US-only business whose main need is simple, compliant payroll with just enough HR bolted on — not a fit for multi-country teams or deep HR workflow customization.",
      },
    ],
    faqs: [
      {
        q: "Is Zoho People cheaper than BambooHR?",
        a: "Yes, on a per-employee basis — roughly $1.25–1.50/employee/month versus BambooHR Core at $10/employee/month (or $250/month flat for teams of 25 or fewer). Compare features as well as price, since BambooHR's Core tier already includes hiring tools.",
      },
      {
        q: "Does Zoho People include payroll?",
        a: "Not natively in the base HR plans. Zoho People integrates with Zoho Payroll, a separate product currently available only in the US, India, and UAE — elsewhere, payroll needs a separate tool.",
      },
      {
        q: "Does Gusto work outside the United States?",
        a: "Gusto's core payroll is US-only. It can pay non-US contractors, and international employees are possible through the separate Gusto Global (Employer-of-Record) add-on — not native multi-country payroll.",
      },
      {
        q: "Which HR software is best for a small business on a tight budget?",
        a: "For core HR record-keeping and onboarding without payroll, Zoho People's Essential HR plan is the least expensive per employee. If payroll is the priority and the business is US-based, Gusto Simple bundles both at a predictable price.",
      },
      {
        q: "Is BambooHR worth the higher price compared to Zoho People?",
        a: "BambooHR's higher per-employee cost buys a more specialized, North America-oriented HR experience with strong hiring tools. Zoho People costs less and offers deeper workflow automation plus integration with the wider Zoho suite (CRM, Payroll, Recruit).",
      },
    ],
    lastVerified: "September 2026",
  },
  {
    slug: "zoho-desk-vs-zendesk",
    zohoProductSlug: "desk",
    title: "Zoho Desk vs Zendesk vs Freshdesk: Which Helpdesk Software Is Best in 2026?",
    metaDescription:
      "Comparing Zoho Desk, Zendesk, and Freshdesk on pricing and features — ticketing, live chat, SLAs, and AI tools — to help you pick the right helpdesk platform.",
    kicker: "Helpdesk Software Comparison",
    shortTitle: "Zoho Desk vs Zendesk & Freshdesk",
    intro: [
      "Zoho Desk, Zendesk, and Freshdesk all handle the core of customer support — multi-channel ticketing, a knowledge base, SLAs. The gap shows up in price: Zendesk's fully-featured tier costs roughly four times what Zoho Desk charges for a similar feature set.",
      "We implement Zoho Desk as a Zoho Authorized Partner, and the table below compares each vendor's fair, feature-equivalent tier rather than their cheapest headline number.",
    ],
    columns: ["Zoho Desk Standard", "Zendesk Suite Team", "Freshdesk Growth"],
    pricing: ["$14 /agent/mo", "$55 /agent/mo", "$19 /agent/mo"],
    pricingNote:
      "Zendesk's cheapest plan (Support Team, $19/agent/month) is ticket-only with no live chat, knowledge base, or AI tools — Suite Team at $55 is the fair comparison point for those features against Zoho Desk and Freshdesk.",
    rows: [
      { feature: "Multi-channel ticketing", cells: [true, true, true] },
      { feature: "Live chat included", cells: [true, true, false] },
      { feature: "Knowledge base / self-service portal", cells: [true, true, true] },
      { feature: "Community forums", cells: [true, false, false] },
      { feature: "SLA management", cells: [true, true, "Single policy"] },
      { feature: "Automation / workflow rules", cells: [true, true, "Basic"] },
      { feature: "AI agent / auto-suggest", cells: [true, true, true] },
      { feature: "Free plan available", cells: [true, false, false] },
    ],
    verdict: [
      {
        name: "Zoho Desk",
        text: "Best value for small-to-mid support teams — SLAs, live chat, automation, and reporting come included at $14/agent/month; multi-department support and native generative AI are reserved for higher tiers.",
      },
      {
        name: "Zendesk",
        text: "Best for larger, CX-mature organizations that need deep customization, a large app marketplace, and polished omnichannel/voice support, and can absorb the $55+/agent/month cost.",
      },
      {
        name: "Freshdesk",
        text: "A solid middle ground for growing support teams that want AI-assisted ticketing at a moderate price, though multiple SLA policies and community forums push toward its Pro tier.",
      },
    ],
    faqs: [
      {
        q: "Is Zoho Desk cheaper than Zendesk?",
        a: "Yes, significantly. Zoho Desk Standard starts around $14/agent/month versus Zendesk's Suite Team at $55/agent/month for a comparable feature set — nearly four times the cost. Even Zendesk's bare $19 tier lacks live chat, a knowledge base, and AI tools that Zoho Desk includes at $14.",
      },
      {
        q: "Is Freshdesk cheaper than Zendesk?",
        a: "Yes. Freshdesk Growth is $19/agent/month, matching Zendesk's cheapest tier price-for-price, but Growth already includes a customer portal, knowledge base, and AI agent sessions — features Zendesk only bundles from $55/agent/month up.",
      },
      {
        q: "Which helpdesk software is best for small teams on a budget?",
        a: "Zoho Desk is the strongest fit: a genuine free tier for up to 3 agents, plus the lowest entry-level paid price ($14/agent/month) with SLAs, live chat, and CRM integration already included. Freshdesk is a close second at $19/agent/month.",
      },
      {
        q: "Does Zoho Desk have a free plan?",
        a: "Yes — a permanent Free Edition for up to 3 agents with basic email ticketing. Zendesk offers no free plan (only a 14-day trial), and Freshdesk's legacy free tier is no longer advertised publicly.",
      },
      {
        q: "Can I switch from Zendesk or Freshdesk to Zoho Desk?",
        a: "Yes — tickets, contacts, knowledge base articles, and agent/department setups can all be migrated. We typically run a short parallel period so live tickets aren't lost mid-migration.",
      },
    ],
    lastVerified: "September 2026",
  },
];
