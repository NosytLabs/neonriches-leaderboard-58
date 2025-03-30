const CACHE_VERSION = 'v1.1.0';
const CACHE_NAME = `spendthrone-cache-${CACHE_VERSION}`;

const STATIC_CACHE_NAME = `static-${CACHE_VERSION}`;
const STATIC_ASSETS = [
  '/',
  '/index.html',
  '/favicon.ico',
  '/favicon.svg',
  '/og-image.jpg',
  '/site.webmanifest',
  '/placeholder.svg'
];

const DYNAMIC_CACHE_NAME = `dynamic-${CACHE_VERSION}`;

const API_CACHE_NAME = `api-${CACHE_VERSION}`;

const FONTS_CACHE_NAME = `fonts-${CACHE_VERSION}`;

const IMAGES_CACHE_NAME = `images-${CACHE_VERSION}`;

const CACHE_TIMES = {
  api: 5 * 60 * 1000, // 5 minutes
  dynamic: 60 * 60 * 1000, // 1 hour
  fonts: 7 * 24 * 60 * 60 * 1000, // 7 days
  images: 24 * 60 * 60 * 1000 // 24 hours
};

// Preload critical assets during installation
self.addEventListener('install', event => {
  self.skipWaiting();

  event.waitUntil(
    caches.open(STATIC_CACHE_NAME)
      .then(cache => {
        console.log('[Service Worker] Caching static assets');
        return cache.addAll(STATIC_ASSETS);
      })
      .then(() => {
        // Preload critical fonts
        return caches.open(FONTS_CACHE_NAME)
          .then(cache => {
            return cache.addAll([
              'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap',
              'https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuOKfAZ9hiA.woff2'
            ]);
          });
      })
  );
});

// Clean up old caches on activation
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (
            cacheName.startsWith('spendthrone-cache-') &&
            cacheName !== CACHE_NAME &&
            !cacheName.includes(CACHE_VERSION)
          ) {
            console.log('[Service Worker] Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    }).then(() => {
      console.log('[Service Worker] Claiming clients');
      return self.clients.claim();
    })
  );
});

// Determine which cache to use based on request type
function getCacheNameForRequest(request) {
  const url = new URL(request.url);
  
  if (url.pathname.includes('/api/')) {
    return API_CACHE_NAME;
  }
  
  if (
    url.hostname.includes('fonts.googleapis.com') ||
    url.hostname.includes('fonts.gstatic.com') ||
    url.pathname.endsWith('.woff') ||
    url.pathname.endsWith('.woff2') ||
    url.pathname.endsWith('.ttf')
  ) {
    return FONTS_CACHE_NAME;
  }
  
  if (
    url.pathname.endsWith('.png') ||
    url.pathname.endsWith('.jpg') ||
    url.pathname.endsWith('.jpeg') ||
    url.pathname.endsWith('.gif') ||
    url.pathname.endsWith('.webp') ||
    url.pathname.endsWith('.svg') ||
    url.pathname.endsWith('.avif')
  ) {
    return IMAGES_CACHE_NAME;
  }
  
  // Check for JavaScript files to cache separately
  if (
    url.pathname.endsWith('.js') ||
    url.pathname.endsWith('.mjs')
  ) {
    return `js-${CACHE_VERSION}`;
  }
  
  // Check for CSS files to cache separately
  if (url.pathname.endsWith('.css')) {
    return `css-${CACHE_VERSION}`;
  }
  
  return DYNAMIC_CACHE_NAME;
}

// Determine if a request should be cached
function shouldCache(request) {
  const url = new URL(request.url);
  
  if (request.method !== 'GET') {
    return false;
  }
  
  if (url.pathname.includes('/auth/') || url.pathname.includes('/login') || url.pathname.includes('/logout')) {
    return false;
  }
  
  if (url.pathname.includes('/analytics') || url.hostname.includes('analytics') || url.hostname.includes('tracking')) {
    return false;
  }
  
  // Don't cache POST requests to API
  if (request.method === 'POST' && url.pathname.includes('/api/')) {
    return false;
  }
  
  return true;
}

// Calculate expiry time for cached items
function getExpiryTimestamp(cacheName) {
  const now = Date.now();
  
  if (cacheName === API_CACHE_NAME) {
    return now + CACHE_TIMES.api;
  }
  
  if (cacheName === FONTS_CACHE_NAME) {
    return now + CACHE_TIMES.fonts;
  }
  
  if (cacheName === IMAGES_CACHE_NAME) {
    return now + CACHE_TIMES.images;
  }
  
  return now + CACHE_TIMES.dynamic;
}

// Store response in cache with metadata
async function cacheWithMetadata(request, response, cacheName) {
  const expiry = getExpiryTimestamp(cacheName);
  
  const responseToCache = response.clone();
  
  // Add cache metadata to headers (timestamp and expiry)
  const headers = new Headers(responseToCache.headers);
  headers.append('sw-cache-timestamp', Date.now().toString());
  headers.append('sw-cache-expiry', expiry.toString());
  
  // Create new response with added headers
  const augmentedResponse = new Response(await responseToCache.blob(), {
    status: responseToCache.status,
    statusText: responseToCache.statusText,
    headers: headers
  });
  
  // Store in appropriate cache
  const cache = await caches.open(cacheName);
  cache.put(request, augmentedResponse);
}

// Check if a cached response has expired
async function isResponseExpired(response) {
  if (!response || !response.headers) {
    return true;
  }
  
  const expiry = response.headers.get('sw-cache-expiry');
  if (!expiry) {
    return true;
  }
  
  return Date.now() > parseInt(expiry, 10);
}

// Compress a string for performance logging
function compressString(str) {
  // Simple compression by removing spaces and limiting length
  return str.replace(/\s+/g, '').slice(0, 100);
}

// Advanced fetch handler with stale-while-revalidate strategy
self.addEventListener('fetch', event => {
  // Only handle requests from our origin and font services
  if (!event.request.url.startsWith(self.location.origin) && 
      !event.request.url.startsWith('https://fonts.')) {
    return;
  }
  
  const requestUrl = new URL(event.request.url);
  if (requestUrl.origin !== self.location.origin && 
      !requestUrl.hostname.includes('fonts.googleapis.com') && 
      !requestUrl.hostname.includes('fonts.gstatic.com')) {
    return;
  }
  
  // Performance tracking
  const fetchStart = Date.now();
  let cacheHit = false;
  
  // Special handling for navigation requests (HTML pages)
  if (event.request.mode === 'navigate') {
    event.respondWith(
      fetch(event.request)
        .then(response => {
          if (response.ok) {
            const responseToCache = response.clone();
            caches.open(STATIC_CACHE_NAME)
              .then(cache => cache.put(event.request, responseToCache));
          }
          return response;
        })
        .catch(() => {
          return caches.match(event.request)
            .then(cachedResponse => {
              if (cachedResponse) {
                return cachedResponse;
              }
              // Return the homepage as a fallback
              return caches.match('/');
            });
        })
        .finally(() => {
          const fetchEnd = Date.now();
          console.log(`[Performance] Navigation fetch completed in ${fetchEnd - fetchStart}ms. Cache hit: ${cacheHit}`);
        })
    );
    return;
  }
  
  // Special handling for API requests
  if (requestUrl.pathname.includes('/api/')) {
    event.respondWith(
      caches.open(API_CACHE_NAME)
        .then(cache => {
          return cache.match(event.request)
            .then(async cachedResponse => {
              const expired = await isResponseExpired(cachedResponse);
              cacheHit = cachedResponse && !expired;
              
              // Network request with timeout
              const networkPromise = Promise.race([
                fetch(event.request)
                  .then(networkResponse => {
                    if (networkResponse.ok && shouldCache(event.request)) {
                      cacheWithMetadata(event.request, networkResponse, API_CACHE_NAME);
                    }
                    return networkResponse;
                  }),
                new Promise((_, reject) => 
                  setTimeout(() => reject(new Error('Network request timeout')), 10000)
                )
              ]).catch(error => {
                console.error('[Service Worker] API fetch failed:', error);
                if (cachedResponse) {
                  return cachedResponse;
                }
                throw error;
              });
              
              // Return cached response immediately if it's not expired
              if (cachedResponse && !expired) {
                // Revalidate in the background
                networkPromise.catch(console.error);
                return cachedResponse;
              }
              
              // Otherwise, wait for the network response
              return networkPromise;
            });
        })
        .finally(() => {
          const fetchEnd = Date.now();
          console.log(`[Performance] API fetch for ${compressString(event.request.url)} completed in ${fetchEnd - fetchStart}ms. Cache hit: ${cacheHit}`);
        })
    );
    return;
  }
  
  // Static assets handling
  if (STATIC_ASSETS.includes(requestUrl.pathname) || requestUrl.pathname.startsWith('/static/')) {
    event.respondWith(
      caches.match(event.request)
        .then(cachedResponse => {
          if (cachedResponse) {
            cacheHit = true;
            return cachedResponse;
          }
          return fetch(event.request)
            .then(response => {
              if (response.ok && shouldCache(event.request)) {
                const responseToCache = response.clone();
                caches.open(STATIC_CACHE_NAME)
                  .then(cache => cache.put(event.request, responseToCache));
              }
              return response;
            });
        })
        .finally(() => {
          const fetchEnd = Date.now();
          console.log(`[Performance] Static asset fetch for ${compressString(requestUrl.pathname)} completed in ${fetchEnd - fetchStart}ms. Cache hit: ${cacheHit}`);
        })
    );
    return;
  }
  
  // Default handling for all other requests
  const cacheName = getCacheNameForRequest(event.request);
  
  event.respondWith(
    caches.open(cacheName)
      .then(cache => {
        return cache.match(event.request)
          .then(async cachedResponse => {
            const expired = await isResponseExpired(cachedResponse);
            cacheHit = cachedResponse && !expired;
            
            // Network request with timeout for images and non-critical resources
            const isNonCritical = cacheName === IMAGES_CACHE_NAME || cacheName === DYNAMIC_CACHE_NAME;
            const timeout = isNonCritical ? 8000 : 5000;
            
            const networkPromise = Promise.race([
              fetch(event.request)
                .then(networkResponse => {
                  if (networkResponse.ok && shouldCache(event.request)) {
                    cacheWithMetadata(event.request, networkResponse, cacheName);
                  }
                  return networkResponse;
                }),
              new Promise((_, reject) => 
                setTimeout(() => reject(new Error('Network request timeout')), timeout)
              )
            ]).catch(error => {
              console.error(`[Service Worker] Fetch failed for ${requestUrl.pathname}:`, error);
              if (cachedResponse) {
                return cachedResponse;
              }
              throw error;
            });
            
            // Stale-while-revalidate: return cached immediately and update in background
            if (cachedResponse && !expired) {
              networkPromise.catch(console.error);
              return cachedResponse;
            }
            
            // If we have a stale (expired) response and this is an image, use it temporarily
            if (cachedResponse && expired && cacheName === IMAGES_CACHE_NAME) {
              // Revalidate in the background
              networkPromise.catch(console.error);
              return cachedResponse;
            }
            
            // Otherwise, wait for the network response
            return networkPromise;
          });
      })
      .finally(() => {
        const fetchEnd = Date.now();
        const resourceType = cacheName.split('-')[0]; // Get the resource type from the cache name
        console.log(`[Performance] ${resourceType} fetch for ${compressString(requestUrl.pathname)} completed in ${fetchEnd - fetchStart}ms. Cache hit: ${cacheHit}`);
      })
  );
});

// Background sync for offline actions
self.addEventListener('sync', event => {
  if (event.tag === 'sync-offline-actions') {
    event.waitUntil(
      self.clients.matchAll().then(clients => {
        clients.forEach(client => {
          client.postMessage({
            type: 'SYNC_STARTED',
            timestamp: Date.now()
          });
        });
        
        // Process offline queue
        console.log('[Service Worker] Processing offline actions');
        return processOfflineQueue()
          .then(results => {
            // Notify clients of completion
            return self.clients.matchAll().then(clients => {
              clients.forEach(client => {
                client.postMessage({
                  type: 'SYNC_COMPLETED',
                  results: results,
                  timestamp: Date.now()
                });
              });
            });
          });
      })
    );
  }
});

// Process queued offline actions
async function processOfflineQueue() {
  // Implementation would depend on how offline actions are stored
  // This is a placeholder
  return { processed: 0, failed: 0 };
}

// Handle push notifications
self.addEventListener('push', event => {
  if (event.data) {
    try {
      const data = event.data.json();
      
      const options = {
        body: data.body || 'New notification',
        icon: data.icon || '/favicon-196.png',
        badge: '/favicon-196.png',
        data: {
          url: data.url || '/',
          timestamp: Date.now()
        },
        actions: data.actions || [],
        tag: data.tag || 'default',
        renotify: data.renotify || false,
        requireInteraction: data.requireInteraction || false
      };
      
      event.waitUntil(
        self.registration.showNotification(data.title || 'SpendThrone Notification', options)
      );
    } catch (error) {
      console.error('[Service Worker] Error processing push notification:', error);
    }
  }
});

// Handle notification clicks
self.addEventListener('notificationclick', event => {
  event.notification.close();
  
  if (event.notification.data && event.notification.data.url) {
    event.waitUntil(
      clients.matchAll({ type: 'window' }).then(windowClients => {
        // Check if there is already a window/tab open with the URL
        for (let client of windowClients) {
          if (client.url === event.notification.data.url && 'focus' in client) {
            return client.focus();
          }
        }
        // If not, open a new window/tab
        if (clients.openWindow) {
          return clients.openWindow(event.notification.data.url);
        }
      })
    );
  }
});

// Keep service worker alive
self.addEventListener('message', event => {
  if (event.data && event.data.type === 'KEEP_ALIVE') {
    console.log('[Service Worker] Received keep-alive ping');
  }
  
  // Handle cache invalidation requests from the app
  if (event.data && event.data.type === 'INVALIDATE_CACHE') {
    const urls = event.data.urls || [];
    const cacheName = event.data.cacheName || API_CACHE_NAME;
    
    caches.open(cacheName).then(cache => {
      urls.forEach(url => {
        cache.delete(new Request(url))
          .then(success => {
            console.log(`[Service Worker] Cache invalidated for ${url}: ${success}`);
          });
      });
    });
  }
});

// Update service worker metrics
setInterval(() => {
  const memoryUsage = self.performance && self.performance.memory 
    ? {
        usedJSHeapSize: self.performance.memory.usedJSHeapSize,
        totalJSHeapSize: self.performance.memory.totalJSHeapSize
      }
    : { usedJSHeapSize: 0, totalJSHeapSize: 0 };
  
  // This would be used for monitoring, but just log for now
  console.log('[Service Worker] Memory usage:', memoryUsage);
}, 60000);

console.log('[Service Worker] Initialized (Version:', CACHE_VERSION, ')');
