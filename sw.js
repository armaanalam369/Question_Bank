/* Wise Choice Study Hub: offline support.
   Bump VERSION whenever you change app.js, style.css or index.html so installed copies refresh. */
const VERSION = "wcsh-v1";
const SHELL = ["./", "index.html", "style.css", "app.js", "manifest.webmanifest", "data/manifest.js",
  "icons/icon.svg", "icons/icon-192.png", "icons/icon-512.png", "icons/apple-touch-icon.png", "fonts/fonts.css"];

/* Read the manifest so every paper and Static GK set is cached on first visit (the app then works fully offline). */
try { importScripts("data/manifest.js"); } catch (e) { /* manifest missing: shell only */ }
const dataFiles = [];
if (typeof PYQ_YEARS !== "undefined") PYQ_YEARS.forEach(y => dataFiles.push(`data/${y}.js`));
if (typeof STATIC_GK_TOPICS !== "undefined") STATIC_GK_TOPICS.forEach(t => { for (let n = 1; n <= (t.sets || 0); n++) dataFiles.push(`data/static-gk/${t.id}/set-${String(n).padStart(2, "0")}.js`); });

self.addEventListener("install", e => {
  e.waitUntil(caches.open(VERSION).then(c => Promise.all([...SHELL, ...dataFiles].map(u => c.add(u).catch(() => {})))).then(() => self.skipWaiting()));
});
self.addEventListener("activate", e => {
  e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== VERSION).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
/* Stale-while-revalidate for the app's own files and Google Fonts: instant from cache, refreshed in the background. */
self.addEventListener("fetch", e => {
  const req = e.request; if (req.method !== "GET") return;
  const url = new URL(req.url), own = url.origin === location.origin, font = /(^|\.)(fonts\.googleapis\.com|fonts\.gstatic\.com)$/.test(url.hostname);
  if (!own && !font) return;
  e.respondWith((async () => {
    const cache = await caches.open(VERSION), hit = await cache.match(req);
    const net = fetch(req).then(res => { if (res && (res.ok || res.type === "opaque")) cache.put(req, res.clone()); return res; }).catch(() => null);
    if (hit) { e.waitUntil(net); return hit; }
    const res = await net;
    return res || (req.mode === "navigate" ? (await cache.match("index.html")) || Response.error() : Response.error());
  })());
});
