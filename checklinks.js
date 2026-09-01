const fs = require("fs");
const path = require("path");

const DIST = path.join(__dirname, "dist");
const files = [];
(function walk(dir) {
  for (const f of fs.readdirSync(dir)) {
    const full = path.join(dir, f);
    if (fs.statSync(full).isDirectory()) walk(full);
    else if (f.endsWith(".html")) files.push(full);
  }
})(DIST);

function resolveTarget(link, fromFile) {
  if (link.startsWith("/")) {
    let p = link.split("#")[0];
    if (p.endsWith("/")) p += "index.html";
    return path.join(DIST, p);
  }
  return null; // external or relative — skip
}

let broken = [];
let checked = 0;
for (const file of files) {
  const html = fs.readFileSync(file, "utf8");
  const hrefs = [...html.matchAll(/href="(\/[^"]*)"/g)].map((m) => m[1]);
  const srcs = [...html.matchAll(/src="(\/[^"]*)"/g)].map((m) => m[1]);
  for (const link of [...hrefs, ...srcs]) {
    if (link.startsWith("//") || link.startsWith("/http")) continue;
    const target = resolveTarget(link, file);
    checked++;
    if (target && !fs.existsSync(target)) {
      broken.push({ file: path.relative(DIST, file), link });
    }
  }
}

console.log(`Checked ${checked} internal links across ${files.length} files.`);
if (broken.length) {
  console.log(`BROKEN LINKS (${broken.length}):`);
  broken.forEach((b) => console.log(`  ${b.file} -> ${b.link}`));
  process.exit(1);
} else {
  console.log("No broken internal links found.");
}
