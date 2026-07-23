const CACHE = "schritte-b1-v1";
const URLS = [
  "/shrite-b1/",
  "/shrite-b1/index.html",
  "/shrite-b1/manifest.json",
  "/shrite-b1/icon-192.svg",
  "/shrite-b1/icon-512.svg"
];

self.addEventListener("install", e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(URLS)));
  self.skipWaiting();
});

self.addEventListener("activate", e => {
  e.waitUntil(clients.claim());
});

self.addEventListener("fetch", e => {
  e.respondWith(
    caches.match(e.request).then(r => r || fetch(e.request))
  );
});
