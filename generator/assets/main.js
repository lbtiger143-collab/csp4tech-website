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
    // Basic spam protection: a honeypot field real visitors never see or
    // fill (bots that auto-fill every field will), plus a minimum time
    // between page load and submit (bots tend to submit almost instantly).
    // Neither is foolproof, but both stop the bulk of automated spam with
    // no friction for real visitors and no CAPTCHA to load.
    var loadedAtField = form.querySelector("[data-form-loaded-at]");
    if (loadedAtField) loadedAtField.value = String(Date.now());
    var MIN_SUBMIT_MS = 2500;

    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var status = form.querySelector("[data-form-status]");
      var honeypot = form.querySelector("#website");
      var loadedAt = loadedAtField ? parseInt(loadedAtField.value, 10) : 0;
      var submittedTooFast = loadedAt && Date.now() - loadedAt < MIN_SUBMIT_MS;

      if ((honeypot && honeypot.value.trim()) || submittedTooFast) {
        // Likely a bot. Show the same success message as a real submission
        // (so scripts don't learn to detect and route around this check)
        // but don't actually send anything.
        if (status) {
          status.textContent = "Thanks — we've received your message and will reply within one business day.";
          status.style.color = "#059669";
        }
        form.reset();
        if (loadedAtField) loadedAtField.value = String(Date.now());
        return;
      }

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
      if (loadedAtField) loadedAtField.value = String(Date.now());
    });
  }

  var reduceMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // ---------- Scroll-reveal ----------
  // Fade/slide common content blocks in as they enter the viewport. Applied
  // entirely from JS (not baked into the server-rendered HTML) so anyone
  // without JS, and any crawler that doesn't run it, still gets the full
  // page content visible immediately — this is purely additive polish.
  if (!reduceMotion && "IntersectionObserver" in window) {
    var revealTargets = document.querySelectorAll(
      ".section-head, .card, .blog-card, .stat-grid > div, .faq details, .trusted-marquee, .related-products, .office-card, .form-card, .contact-info-list .item"
    );
    var revealObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    revealTargets.forEach(function (el, i) {
      el.classList.add("reveal");
      // Small stagger within a row of siblings (cards in the same grid)
      // reads as intentional rather than everything popping in at once.
      el.style.transitionDelay = (i % 3) * 60 + "ms";
      revealObserver.observe(el);
    });
  }

  // ---------- Counting-up stats ----------
  if (!reduceMotion && "IntersectionObserver" in window) {
    var statEls = document.querySelectorAll(".stat-num");
    var statObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          statObserver.unobserve(entry.target);
          var el = entry.target;
          var match = el.textContent.match(/^(\D*)(\d+)(.*)$/);
          if (!match) return; // no digits found (shouldn't happen) — leave as-is
          var prefix = match[1], target = parseInt(match[2], 10), suffix = match[3];
          var duration = 1200;
          var start = null;
          function step(ts) {
            if (start === null) start = ts;
            var progress = Math.min((ts - start) / duration, 1);
            var eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
            var current = Math.floor(eased * target);
            el.textContent = prefix + current + suffix;
            if (progress < 1) {
              requestAnimationFrame(step);
            } else {
              el.textContent = prefix + target + suffix; // exact final text
            }
          }
          requestAnimationFrame(step);
        });
      },
      { threshold: 0.4 }
    );
    statEls.forEach(function (el) { statObserver.observe(el); });
  }
});
