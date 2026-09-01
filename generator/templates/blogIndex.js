module.exports = function blogIndex(posts) {
  const sorted = [...posts].sort((a, b) => new Date(b.date) - new Date(a.date));
  return `
  <section class="hero" style="padding-bottom:36px;">
    <div class="container hero-inner">
      <span class="eyebrow">Blog</span>
      <h1>Zoho guides for Lebanese businesses</h1>
      <p class="lead">Practical, Lebanon-specific writing on Zoho implementation, migration, and day-to-day operations — no generic filler.</p>
    </div>
  </section>
  <section style="padding-top:0;">
    <div class="container">
      <div class="grid grid-3">
        ${sorted
          .map(
            (b) => `
        <a href="/blog/${b.slug}.html" class="blog-card">
          <div class="body">
            <span class="meta">${new Date(b.date).toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" })} · ${b.readTime}</span>
            <h3>${b.title}</h3>
            <p style="font-size:.9rem;">${b.excerpt}</p>
            <span class="read-more">Read article →</span>
          </div>
        </a>`
          )
          .join("")}
      </div>
    </div>
  </section>`;
};
