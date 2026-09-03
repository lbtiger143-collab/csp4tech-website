const config = require("../data/config");

module.exports = function terms() {
  return `
  <section class="hero" style="padding-bottom:32px;">
    <div class="container hero-inner">
      <h1>Terms of Use</h1>
      <p class="lead">Last updated: ${new Date().toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })}</p>
    </div>
  </section>
  <section style="padding-top:0;">
    <div class="container" style="max-width:760px;">
      <div class="legal-content">
        <p>These terms govern your use of ${config.domain} (the "site"), operated by ${config.siteName}. By using this site, you agree to these terms.</p>

        <h2>Use of this site</h2>
        <p>This site is provided to give you information about ${config.siteName}'s Zoho consulting services and to let you get in touch with us. You agree to use it only for lawful purposes and not to attempt to disrupt, scrape at scale, or gain unauthorized access to it.</p>

        <h2>No professional advice</h2>
        <p>Content on this site, including blog posts, is provided for general information about Zoho products and implementation practices. It is not a substitute for advice tailored to your specific business, and you should not rely on it as such without speaking with us directly.</p>

        <h2>Zoho trademarks</h2>
        <p>Zoho and related product names are trademarks of Zoho Corporation. ${config.siteName} is an authorized Zoho partner; this site is not operated by Zoho Corporation itself.</p>

        <h2>Intellectual property</h2>
        <p>The content, design, and branding of this site belong to ${config.siteName} unless otherwise credited. You may not reproduce or redistribute it without our permission.</p>

        <h2>Third-party links</h2>
        <p>This site may link to third-party websites (for example, Zoho's own site or our social media profiles). We aren't responsible for the content or practices of sites we don't operate.</p>

        <h2>Limitation of liability</h2>
        <p>This site and its content are provided "as is" without warranties of any kind. To the extent permitted by law, ${config.siteName} is not liable for any loss arising from your use of this site. This does not affect the separate terms of any service agreement you sign with us for actual Zoho implementation work.</p>

        <h2>Changes to these terms</h2>
        <p>We may update these terms from time to time. Continued use of the site after changes are posted means you accept the updated terms.</p>

        <h2>Contact us</h2>
        <p>Questions about these terms can be sent to <a href="mailto:${config.email}">${config.email}</a>.</p>

        <p style="font-size:.85rem;color:#9C9AC4;margin-top:32px;">This page is a general template and has not been reviewed by a lawyer. Before relying on it, have it checked against the requirements that apply to your business in Lebanon.</p>
      </div>
    </div>
  </section>`;
};
