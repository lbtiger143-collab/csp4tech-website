// Zero-dependency site JS: mobile nav toggle + basic contact form UX feedback.
document.addEventListener("DOMContentLoaded", function () {
  var toggle = document.querySelector(".menu-toggle");
  var mobileNav = document.querySelector(".mobile-nav");
  if (toggle && mobileNav) {
    toggle.addEventListener("click", function () {
      var isOpen = mobileNav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
      document.body.style.overflow = isOpen ? "hidden" : "";
    });
  }

  var form = document.querySelector("[data-contact-form]");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var status = form.querySelector("[data-form-status]");
      var required = form.querySelectorAll("[required]");
      var valid = true;
      required.forEach(function (field) {
        if (!field.value.trim()) valid = false;
      });
      if (!valid) {
        if (status) {
          status.textContent = "Please fill in all required fields.";
          status.style.color = "#B91C1C";
        }
        return;
      }
      // NOTE: replace this with your real form endpoint (Zoho Forms / CRM webhook) before launch.
      if (status) {
        status.textContent = "Thanks — we've received your message and will reply within one business day.";
        status.style.color = "#059669";
      }
      form.reset();
    });
  }
});
