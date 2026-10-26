const CACHE_NAME = "mtec-bore-key-customer-shared-v4_2";
const FILES_TO_CACHE = ["./", "./index.html", "./manifest.json", "./service-worker.js", "./LOGO.png"];
self.addEventListener("install", event => { self.skipWaiting(); event.waitUntil(caches.open(CACHE_NAME).then(c => c.addAll(FILES_TO_CACHE))); });
self.addEventListener("activate", event => { event.waitUntil(caches.keys().then(names => Promise.all(names.filter(name => name.startsWith("mtec-bore-key-") && name !== CACHE_NAME).map(name => caches.delete(name))))); self.clients.claim(); });
self.addEventListener("fetch", event => {
  if (event.request.method !== "GET") return;
  if (new URL(event.request.url).pathname.endsWith("/pricing.json")) { event.respondWith(fetch(event.request,{cache:"no-store"})); return; }
  event.respondWith(fetch(event.request).catch(() => caches.match(event.request)));
});
