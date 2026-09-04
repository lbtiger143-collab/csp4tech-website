const config = require("../data/config");

module.exports = function contact() {
  return `
  <section class="hero" style="padding-bottom:40px;">
    <div class="container hero-inner">
      <span class="eyebrow">Contact CSP4TECH</span>
      <h1>Let's talk about your Zoho setup</h1>
      <p class="lead">Free initial consultation. Typical reply time: one business day.</p>
    </div>
  </section>

  <section style="padding-top:0;">
    <div class="container two-col" style="align-items:flex-start;">
      <div class="form-card">
        <h2 style="font-size:1.3rem;">Send us a message</h2>
        <p style="font-size:.9rem;">Tell us briefly about your idea, timeline, or goals — a real person reads every message.</p>
        <form data-contact-form novalidate>
          <div class="visually-hidden" aria-hidden="true">
            <label for="website">Leave this field blank</label>
            <input type="text" id="website" name="website" tabindex="-1" autocomplete="off">
          </div>
          <input type="hidden" data-form-loaded-at value="">
          <div class="form-grid-2">
            <div class="form-row"><label for="fullName">Full name *</label><input id="fullName" name="fullName" type="text" required></div>
            <div class="form-row"><label for="workEmail">Work email *</label><input id="workEmail" name="workEmail" type="email" required></div>
          </div>
          <div class="form-grid-2">
            <div class="form-row"><label for="company">Company name *</label><input id="company" name="company" type="text" required></div>
            <div class="form-row"><label for="mobile">Phone (with country code) *</label><input id="mobile" name="mobile" type="tel" required></div>
          </div>
          <div class="form-row">
            <label for="services">What are you interested in?</label>
            <select id="services" name="services">
              <option value="">Select an area</option>
              <option>Zoho CRM</option>
              <option>Zoho Books / Finance</option>
              <option>Zoho People / HR</option>
              <option>Zoho One (full suite)</option>
              <option>Custom Zoho Creator app</option>
              <option>Not sure yet</option>
            </select>
          </div>
          <div class="form-row">
            <label for="description">What are you trying to solve? *</label>
            <textarea id="description" name="description" rows="4" required></textarea>
          </div>
          <button type="submit" class="btn btn-primary btn-block">Send message</button>
          <p data-form-status style="font-size:.85rem;margin-top:10px;min-height:1.2em;"></p>
          <p style="font-size:.76rem;color:#9C9AC4;margin-top:6px;">This form is a static front-end — connect it to your Zoho Forms/CRM webhook endpoint before launch. See README.</p>
        </form>
      </div>

      <div>
        <div class="contact-info-list">
          <div class="item"><div class="ic"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 6-10 7L2 6"/></svg></div><div><h4>Email</h4><p><a href="mailto:${config.email}">${config.email}</a></p></div></div>
          <div class="item"><div class="ic"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg></div><div><h4>Phone / WhatsApp</h4><p><a href="tel:+${config.phone.href}">${config.phone.display}</a></p></div></div>
          <div class="item"><div class="ic"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg></div><div><h4>Hours</h4><p>${config.hours}</p></div></div>
          <div class="item"><div class="ic"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg></div><div><h4>Languages</h4><p>${config.languages}</p></div></div>
        </div>

        <div style="margin-top:28px;">
          <div class="office-card">
            <h4>Beirut, Lebanon — Head Office</h4>
            <p style="font-size:.9rem;">${config.address.lebanon}</p>
            <a href="https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${config.siteName}, ${config.address.lebanon}`)}" target="_blank" rel="noopener" class="btn btn-ghost btn-sm" style="margin-top:12px;">Get Directions</a>
          </div>
        </div>
      </div>
    </div>
  </section>`;
};
