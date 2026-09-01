function renderBlock(block) {
  if (block.h2) return `<h2>${block.h2}</h2>`;
  if (block.p) return `<p>${block.p}</p>`;
  if (block.ul) return `<ul>${block.ul.map((li) => `<li>${li}</li>`).join("")}</ul>`;
  return "";
}

module.exports = function blogPost(post, allPosts) {
  const more = allPosts.filter((p) => p.slug !== post.slug).slice(0, 3);
  return `
  <section style="padding-bottom:20px;">
    <div class="container" style="max-width:760px;">
      <p class="breadcrumb"><a href="/">Home</a><span>/</span><a href="/blog/">Blog</a><span>/</span>${post.title}</p>
      <span class="meta" style="display:block;margin-bottom:10px;">${new Date(post.date).toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" })} · ${post.readTime}</span>
      <h1 style="font-size:clamp(1.7rem,3.4vw,2.3rem);">${post.title}</h1>
      <p class="lead" style="margin-top:14px;">${post.excerpt}</p>
    </div>
  </section>
  <section style="padding-top:0;">
    <div class="container blog-post-body" style="max-width:760px;">
      ${post.body.map(renderBlock).join("")}
      <div class="card" style="margin-top:32px;background:var(--color-primary-light);border:none;">
        <p style="margin-bottom:12px;font-weight:600;color:var(--color-ink);">Want help setting this up for your team?</p>
        <a href="/contact-us.html" class="btn btn-primary btn-sm">Book a Free Consultation</a>
      </div>
    </div>
  </section>
  ${
    more.length
      ? `
  <section class="section-alt">
    <div class="container">
      <div class="section-head"><span class="kicker">Keep reading</span><h2>More from the blog</h2></div>
      <div class="grid grid-3">
        ${more
          .map(
            (b) => `
        <a href="/blog/${b.slug}.html" class="blog-card">
          <div class="body">
            <span class="meta">${new Date(b.date).toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" })} · ${b.readTime}</span>
            <h3>${b.title}</h3>
            <span class="read-more">Read article →</span>
          </div>
        </a>`
          )
          .join("")}
      </div>
    </div>
  </section>`
      : ""
  }`;
};
