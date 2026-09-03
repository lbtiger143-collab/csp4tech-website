const config = require("../data/config");

module.exports = function privacy() {
  return `
  <section class="hero" style="padding-bottom:32px;">
    <div class="container hero-inner">
      <h1>Privacy Policy</h1>
      <p class="lead">Last updated: ${new Date().toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })}</p>
    </div>
  </section>
  <section style="padding-top:0;">
    <div class="container" style="max-width:760px;">
      <div class="legal-content">
        <p>${config.siteName} ("we", "us", "our") operates ${config.domain}. This page explains what information we collect when you use this website, how we use it, and the choices you have.</p>

        <h2>Information we collect</h2>
        <p>We collect information you provide directly to us, such as when you fill out the contact form on this site: your name, work email, company name, phone number, and any message or project details you choose to share. We use this only to respond to your enquiry and, if you become a client, to deliver our Zoho consulting services to you.</p>
        <p>We do not sell, rent, or trade your personal information to third parties.</p>

        <h2>Cookies and analytics</h2>
        <p>This site does not currently use tracking or advertising cookies. If we add analytics tools in the future to understand site usage, we will update this policy to describe what is collected and how to opt out.</p>

        <h2>How we use your information</h2>
        <ul>
          <li>To respond to enquiries submitted through the contact form</li>
          <li>To provide, maintain, and improve our Zoho implementation and support services to existing clients</li>
          <li>To send you information you have specifically requested, such as a quote or consultation follow-up</li>
        </ul>

        <h2>Data sharing</h2>
        <p>We may share information with service providers who help us operate this website or deliver our services (for example, hosting or CRM tools), under obligations to keep it confidential. We may also disclose information where required by law.</p>

        <h2>Data retention</h2>
        <p>We keep contact-form submissions and client information for as long as needed to respond to your enquiry or deliver our services, and as required for legitimate business or legal purposes.</p>

        <h2>Your choices</h2>
        <p>You can ask us to access, correct, or delete personal information we hold about you at any time by emailing <a href="mailto:${config.email}">${config.email}</a>.</p>

        <h2>Contact us</h2>
        <p>Questions about this policy can be sent to <a href="mailto:${config.email}">${config.email}</a> or by post to ${config.address.lebanon}.</p>

        <p style="font-size:.85rem;color:#9C9AC4;margin-top:32px;">This policy is a general template and has not been reviewed by a lawyer. Before relying on it, have it checked against the data-protection requirements that apply to your business in Lebanon and any other countries your clients are based in.</p>
      </div>
    </div>
  </section>`;
};
