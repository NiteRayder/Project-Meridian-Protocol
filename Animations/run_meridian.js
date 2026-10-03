"use strict";
// Serve the self-contained prototype and its bundled image with Node's built-in modules only.
const http = require("node:http");
const fs = require("node:fs");
const path = require("node:path");
const assets = new Map([
  ["/", { file: "meridian_loading_screen.html", type: "text/html; charset=utf-8" }],
  ["/meridian_loading_screen.html", { file: "meridian_loading_screen.html", type: "text/html; charset=utf-8" }],
  ["/entity.jpg", { file: "entity.jpg", type: "image/jpeg" }],
]);
const port = Number(process.env.PORT || 8765);
const server = http.createServer((request, response) => {
  const pathname = new URL(request.url, "http://127.0.0.1").pathname;
  const asset = assets.get(pathname);
  if (!asset) {
    response.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
    response.end("Not found");
    return;
  }
  fs.readFile(path.join(__dirname, asset.file), (error, contents) => {
    if (error) {
      response.writeHead(500, { "Content-Type": "text/plain; charset=utf-8" });
      response.end("Unable to load prototype asset.");
      return;
    }
    response.writeHead(200, { "Content-Type": asset.type, "Cache-Control": "no-store" });
    response.end(contents);
