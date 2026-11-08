/* Service Worker – Cache-First with background refresh.
   Files are served instantly from the cache (works offline). Whenever you are
   online, the newest copy is quietly downloaded, so edits to data.js appear
   on the NEXT reload. If you ever want to force everything to refresh,
   change the number in CACHE_NAME below (e.g. v1 -> v2). */
const CACHE_NAME = 'wise-choice-v1';
const ASSETS = [
  './', './index.html', './style.css', './app.js', './data.js', './manifest.json',
  './icons/icon.svg', './icons/icon-192.png', './icons/icon-512.png'
];

self.addEventListener('install', (event) => {
  event.waitUntil(caches.open(CACHE_NAME).then((c) => c.addAll(ASSETS)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  const req = event.request;
  if (req.method !== 'GET' || new URL(req.url).origin !== self.location.origin) return;

  event.respondWith((async () => {
    const cache = await caches.open(CACHE_NAME);
    const cached = await cache.match(req, { ignoreSearch: true });
    const refresh = fetch(req)
      .then((res) => { if (res && res.ok) cache.put(req, res.clone()); return res; })
      .catch(() => null);
    if (cached) { event.waitUntil(refresh); return cached; }
    const res = await refresh;
    return res || (await cache.match('./index.html')) || Response.error();
  })());
});
