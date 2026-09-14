// Third-party tools Zoho commonly integrates with, shown as a "works with
// your stack" logo strip on the homepage. Each entry names the tool only to
// point out that Zoho (and our implementations) connect to it — nominative
// use, same as any consultancy listing the tools it supports. Not a claim of
// partnership, certification, or endorsement by any of these companies.
//
// `dir` picks which assets folder build.js has already copied into dist/:
// - "integration-logos": logos sourced specifically for this strip
// - "platform-logos": logos we already ship for the /platforms/ pages —
//   reused here rather than duplicated on disk
module.exports = [
  { name: "WhatsApp", file: "whatsapp.svg", dir: "integration-logos" },
  { name: "Shopify", file: "shopify.svg", dir: "platform-logos" },
  { name: "Microsoft 365", file: "microsoft.svg", dir: "platform-logos" },
  { name: "Google Workspace", file: "google-workspace.svg", dir: "integration-logos" },
  { name: "Slack", file: "slack.svg", dir: "integration-logos" },
  { name: "Stripe", file: "stripe.svg", dir: "integration-logos" },
  { name: "Zapier", file: "zapier.svg", dir: "integration-logos" },
];
