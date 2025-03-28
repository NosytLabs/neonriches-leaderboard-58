const CACHE_VERSION = 'v1.0.1';
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

self.addEventListener('install', event => {
  self.skipWaiting();

  event.waitUntil(
    caches.open(STATIC_CACHE_NAME)
      .then(cache => {
        console.log('[Service Worker] Caching static assets');
        return cache.addAll(STATIC_ASSETS);
      })
  );
});

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
  
  return DYNAMIC_CACHE_NAME;
}

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
  
  return true;
}

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

async function cacheWithMetadata(request, response, cacheName) {
  const expiry = getExpiryTimestamp(cacheName);
  
  const responseToCache = response.clone();
  
  const headers = new Headers(responseToCache.headers);
  headers.append('sw-cache-timestamp', Date.now().toString());
  headers.append('sw-cache-expiry', expiry.toString());
  
  const augmentedResponse = new Response(await responseToCache.blob(), {
    status: responseToCache.status,
    statusText: responseToCache.statusText,
    headers: headers
  });
  
  const cache = await caches.open(cacheName);
  cache.put(request, augmentedResponse);
}

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

self.addEventListener('fetch', event => {
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
              return caches.match('/');
            });
        })
    );
    return;
  }
  
  if (requestUrl.pathname.includes('/api/')) {
    event.respondWith(
      caches.open(API_CACHE_NAME)
        .then(cache => {
          return cache.match(event.request)
            .then(async cachedResponse => {
              const expired = await isResponseExpired(cachedResponse);
              
              const fetchPromise = fetch(event.request)
                .then(networkResponse => {
                  if (networkResponse.ok && shouldCache(event.request)) {
                    cacheWithMetadata(event.request, networkResponse, API_CACHE_NAME);
                  }
                  return networkResponse;
                })
                .catch(error => {
                  console.error('[Service Worker] API fetch failed:', error);
                  if (cachedResponse) {
                    return cachedResponse;
                  }
                  throw error;
                });
              
              if (cachedResponse && !expired) {
                fetchPromise.catch(console.error);
                return cachedResponse;
              }
              
              return fetchPromise;
            });
        })
    );
    return;
  }
  
  if (STATIC_ASSETS.includes(requestUrl.pathname) || requestUrl.pathname.startsWith('/static/')) {
    event.respondWith(
      caches.match(event.request)
        .then(cachedResponse => {
          if (cachedResponse) {
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
    );
    return;
  }
  
  const cacheName = getCacheNameForRequest(event.request);
  
  event.respondWith(
    caches.open(cacheName)
      .then(cache => {
        return cache.match(event.request)
          .then(async cachedResponse => {
            const expired = await isResponseExpired(cachedResponse);
            
            const fetchPromise = fetch(event.request)
              .then(networkResponse => {
                if (networkResponse.ok && shouldCache(event.request)) {
                  cacheWithMetadata(event.request, networkResponse, cacheName);
                }
                return networkResponse;
              })
              .catch(error => {
                console.error('[Service Worker] Fetch failed:', error);
                if (cachedResponse) {
                  return cachedResponse;
                }
                throw error;
              });
            
            if (cachedResponse && !expired) {
              fetchPromise.catch(console.error);
              return cachedResponse;
            }
            
            return fetchPromise;
          });
      })
  );
});

self.addEventListener('sync', event => {
  if (event.tag === 'sync-offline-actions') {
    event.waitUntil(
      console.log('[Service Worker] Processing offline actions')
    );
  }
});

self.addEventListener('push', event => {
  if (event.data) {
    const data = event.data.json();
    
    const options = {
      body: data.body || 'New notification',
      icon: data.icon || '/favicon-196.png',
      badge: '/favicon-196.png',
      data: {
        url: data.url || '/'
      }
    };
    
    event.waitUntil(
      self.registration.showNotification(data.title || 'SpendThrone Notification', options)
    );
  }
});

self.addEventListener('notificationclick', event => {
  event.notification.close();
  
  if (event.notification.data && event.notification.data.url) {
    event.waitUntil(
      clients.openWindow(event.notification.data.url)
    );
  }
});

console.log('[Service Worker] Initialized (Version:', CACHE_VERSION, ')');
