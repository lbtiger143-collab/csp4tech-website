const industries = require("../data/industries");

// Minimal 24x24 stroke icons (Feather-style), matching the look of the
// reference recording. White strokes — always rendered on a colored tile.
const ICONS = {
  home: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 11.5 12 4l9 7.5"/><path d="M5.5 10v9a1 1 0 0 0 1 1H17.5a1 1 0 0 0 1-1v-9"/><path d="M10 20v-6h4v6"/></svg>`,
  truck: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 8h11v9H2z"/><path d="M13 11h4l4 3.5V17h-8z"/><circle cx="6.5" cy="18.5" r="1.8"/><circle cx="17" cy="18.5" r="1.8"/></svg>`,
  send: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 3 11 13"/><path d="M21 3 14.5 21l-3.5-8-8-3.5Z"/></svg>`,
  database: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="5.5" rx="8" ry="3"/><path d="M4 5.5V18a8 3 0 0 0 16 0V5.5"/><path d="M4 11.75a8 3 0 0 0 16 0"/></svg>`,
  cross: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 5v14"/><path d="M5 12h14"/></svg>`,
  layers: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m12 3 9 5-9 5-9-5 9-5Z"/><path d="m3 13 9 5 9-5"/><path d="m3 17.5 9 5 9-5"/></svg>`,
  factory: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 21V10l5 3.5V10l5 3.5V10l5 3.5V21z"/><path d="M3 21h18"/><path d="M7 21v-4"/><path d="M12 21v-4"/><path d="M17 21v-4"/></svg>`,
};

module.exports = function industriesSection() {
  const first = industries[0];
  return `
  <section>
    <div class="container">
      <div class="section-head">
        <span class="kicker">Industries</span>
        <h2>Our Service Sector</h2>
        <p>Zoho configured around how each industry actually operates — not a generic template.</p>
      </div>

      <div class="industry-block" data-industry-block>
        <div class="industry-tabs" role="tablist" aria-label="Industries">
          ${industries
            .map(
              (ind, i) => `
          <button
            type="button"
            class="industry-tab${i === 0 ? " is-active" : ""}"
            role="tab"
            id="industry-tab-${ind.slug}"
            aria-controls="industry-panel-${ind.slug}"
            aria-selected="${i === 0 ? "true" : "false"}"
            tabindex="${i === 0 ? "0" : "-1"}"
            data-industry-tab="${ind.slug}"
          >
            <span class="industry-tab-icon" style="background:${ind.color}">${ICONS[ind.icon]}</span>
            ${ind.name}
          </button>`
            )
            .join("")}
        </div>

        <div class="industry-panels">
          ${industries
            .map(
              (ind, i) => `
          <div
            class="industry-panel"
            id="industry-panel-${ind.slug}"
            role="tabpanel"
            aria-labelledby="industry-tab-${ind.slug}"
            ${i === 0 ? "" : "hidden"}
          >
            <div class="industry-panel-head">
              <span class="industry-panel-icon" style="background:${ind.color}">${ICONS[ind.icon]}</span>
              <h3>${ind.name}</h3>
            </div>
            <p class="industry-panel-desc">${ind.description}</p>
            <span class="industry-benefits-label">Key Benefits:</span>
            <ul class="industry-benefits">
              ${ind.benefits.map((b) => `<li>${b}</li>`).join("")}
            </ul>
          </div>`
            )
            .join("")}
        </div>
      </div>
    </div>
  </section>`;
};
