
const CACHE_VERSION = 'v1.1.0';
const CACHE_NAME = `spendthrone-cache-${CACHE_VERSION}`;

// Resources to cache during installation
const STATIC_ASSETS = [
  '/',
  '/index.html',
  '/favicon.ico',
  '/favicon.svg',
  '/og-image.jpg',
  '/site.webmanifest',
  '/placeholder.svg'
];

// Cache images separately with different strategies
const IMAGE_CACHE_NAME = `spendthrone-images-${CACHE_VERSION}`;

// Assets that should be network-first (API responses, etc.)
const DYNAMIC_ROUTES = [
  '/api/',
  '/data/'
];

// Install event - cache core static assets
self.addEventListener('install', event => {
  self.skipWaiting();

  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('[Service Worker] Caching static assets');
        return cache.addAll(STATIC_ASSETS);
      })
  );
});

// Activate event - clean up old caches
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames
          .filter(cacheName => {
            // Delete old versions of our caches
            return (
              cacheName.startsWith('spendthrone-cache') && cacheName !== CACHE_NAME ||
              cacheName.startsWith('spendthrone-images') && cacheName !== IMAGE_CACHE_NAME
            );
          })
          .map(cacheName => {
            console.log('[Service Worker] Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          })
      );
    }).then(() => {
      console.log('[Service Worker] Claiming clients');
      return self.clients.claim();
    })
  );
});

// Fetch event - apply different caching strategies
self.addEventListener('fetch', event => {
  // Skip cross-origin requests
  if (!event.request.url.startsWith(self.location.origin)) {
    return;
  }
  
  // Skip non-GET requests
  if (event.request.method !== 'GET') {
    return;
  }

  const url = new URL(event.request.url);
  
  // HTML navigation - network-first strategy with cache fallback
  if (event.request.mode === 'navigate') {
    event.respondWith(
      fetch(event.request)
        .then(response => {
          if (response.ok) {
            const responseToCache = response.clone();
            caches.open(CACHE_NAME)
              .then(cache => cache.put(event.request, responseToCache));
          }
          return response;
        })
        .catch(() => {
          return caches.match('/index.html');
        })
    );
    return;
  }
  
  // Special handling for images - cache-first with background update
  if (
    event.request.destination === 'image' ||
    url.pathname.endsWith('.jpg') ||
    url.pathname.endsWith('.jpeg') ||
    url.pathname.endsWith('.png') ||
    url.pathname.endsWith('.gif') ||
    url.pathname.endsWith('.svg') ||
    url.pathname.endsWith('.webp')
  ) {
    event.respondWith(
      caches.open(IMAGE_CACHE_NAME).then(cache => 
        cache.match(event.request).then(cachedResponse => {
          // Return cached response immediately if available
          const fetchPromise = fetch(event.request)
            .then(networkResponse => {
              // Save new response in cache
              if (networkResponse.ok) {
                cache.put(event.request, networkResponse.clone());
              }
              return networkResponse;
            })
            .catch(() => {
              console.log('[Service Worker] Failed to fetch image');
              // If both cache and network fail, return a fallback image
              if (!cachedResponse) {
                return caches.match('/placeholder.svg');
              }
            });
          
          return cachedResponse || fetchPromise;
        })
      )
    );
    return;
  }
  
  // Check if this is a dynamic route that should be network-first
  const isDynamicRoute = DYNAMIC_ROUTES.some(route => url.pathname.includes(route));
  
  if (isDynamicRoute) {
    // Network-first strategy for API calls and dynamic content
    event.respondWith(
      fetch(event.request)
        .then(response => {
          // Only cache successful responses
          if (response.ok) {
            const responseToCache = response.clone();
            caches.open(CACHE_NAME)
              .then(cache => cache.put(event.request, responseToCache));
          }
          return response;
        })
        .catch(() => {
          return caches.match(event.request);
        })
    );
  } else {
    // Cache-first strategy for other static assets
    event.respondWith(
      caches.match(event.request)
        .then(cachedResponse => {
          if (cachedResponse) {
            // Background fetch to update cache
            fetch(event.request)
              .then(response => {
                if (response.ok) {
                  caches.open(CACHE_NAME)
                    .then(cache => cache.put(event.request, response));
                }
              })
              .catch(() => {
                // Silent fail on background fetch
              });
            
            return cachedResponse;
          }
          
          // If not in cache, fetch from network
          return fetch(event.request)
            .then(response => {
              if (response.ok) {
                const responseToCache = response.clone();
                caches.open(CACHE_NAME)
                  .then(cache => cache.put(event.request, responseToCache));
              }
              return response;
            });
        })
    );
  }
});

// Handle messages from clients (like skipWaiting)
self.addEventListener('message', event => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

// Clean up old image caches periodically
self.addEventListener('periodicsync', event => {
  if (event.tag === 'cleanup-caches') {
    event.waitUntil(
      caches.keys().then(cacheNames => {
        const oldCaches = cacheNames.filter(cacheName => 
          cacheName.startsWith('spendthrone-images') && cacheName !== IMAGE_CACHE_NAME
        );
        
        return Promise.all(oldCaches.map(cacheName => caches.delete(cacheName)));
      })
    );
  }
});
