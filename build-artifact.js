// index.html is the standalone webpage. Claude Artifacts supply their own
// document skeleton, so this strips it out to produce artifact.html.
// Run: node build-artifact.js
const fs = require("fs");
const path = require("path");

const dir = __dirname;
const src = fs.readFileSync(path.join(dir, "index.html"), "utf8");

const DROP = [
  /<!doctype html>\s*/i,
  /<html[^>]*>\s*/i,
  /<head>\s*/i,
  /<meta charset="utf-8">\s*/i,
  /<link rel="icon"[^>]*>\s*/i,
  /<\/head>\s*/i,
  /<body>\s*/i,
  /\s*<\/body>/i,
  /\s*<\/html>\s*$/i,
];

let out = src;
DROP.forEach(re => { out = out.replace(re, ""); });

// note the delimiter — <header> and <thead> are legitimate content
const bad = /<!doctype|<html[\s>]|<head[\s>]|<body[\s>]/i.exec(out);
if (bad) throw new Error("skeleton tag survived the strip: " + bad[0]);
if (!/<title>/.test(out)) throw new Error("title went missing");

fs.writeFileSync(path.join(dir, "artifact.html"), out.trim() + "\n");
console.log("artifact.html written —", out.length, "bytes");
