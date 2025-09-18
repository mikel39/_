const express = require("express");
const fs = require("fs/promises");
const app = express();

async function getHtml(file) {
  const data = await fs.readFile(file, "utf8");
  return data;
}

app.get("/", (req, res) => getHtml("index.html").then((r) => res.send(r)));
app.get("/about", (req, res) => getHtml("about.html").then((r) => res.send(r)));
app.get("/contact-me", (req, res) =>
  getHtml("contact-me.html").then((r) => res.send(r))
);
app.get(/.*/, (req, res) => {
  return getHtml("404.html").then((r) => res.send(r));
  console.log(req);
});

app.listen(8080);
