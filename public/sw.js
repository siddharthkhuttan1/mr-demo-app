const CACHE_NAME = 'vida-solutions-cache-v1';

// We do not pre-cache everything statically on install because Vite builds hashed assets.
// Instead, we cache dynamically as assets are requested (Stale-While-Revalidate).
self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cache) => {
          if (cache !== CACHE_NAME) {
            return caches.delete(cache);
          }
        })
      );
    })
  );
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  const isGoogleFont = event.request.url.startsWith('https://fonts.googleapis.com') ||
                       event.request.url.startsWith('https://fonts.gstatic.com');

  // Only cache GET requests originating from our same domain or Google Fonts
  if (event.request.method !== 'GET' || (!event.request.url.startsWith(self.location.origin) && !isGoogleFont)) {
    return;
  }

  // Bypass service worker caching for Hot Module Replacement in dev (if any registered in dev)
  if (event.request.url.includes('@vite/client') || event.request.url.includes('hot-update')) {
    return;
  }

  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      // If we have a cached response, return it immediately, but update the cache in the background
      if (cachedResponse) {
        fetch(event.request)
          .then((networkResponse) => {
            if (networkResponse && networkResponse.status === 200) {
              caches.open(CACHE_NAME).then((cache) => {
                cache.put(event.request, networkResponse);
              });
            }
          })
          .catch(() => {
            // Ignore background fetch failures (e.g. offline)
          });
        return cachedResponse;
      }

      // If we don't have it in the cache, fetch it from the network
      return fetch(event.request).then((networkResponse) => {
        if (!networkResponse || networkResponse.status !== 200 || networkResponse.type !== 'basic') {
          return networkResponse;
        }

        // Clone the response since it can only be consumed once
        const responseToCache = networkResponse.clone();
        caches.open(CACHE_NAME).then((cache) => {
          cache.put(event.request, responseToCache);
        });

        return networkResponse;
      });
    })
  );
});
