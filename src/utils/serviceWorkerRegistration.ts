
/**
 * Service worker registration utility
 * Manages the registration and updates of the service worker
 */

// Detect if the browser supports service workers
const isServiceWorkerSupported = 'serviceWorker' in navigator;

// Track the current registration
let registration: ServiceWorkerRegistration | null = null;

/**
 * Register the service worker
 */
export const register = async (options: { scope?: string } = {}): Promise<void> => {
  if (!isServiceWorkerSupported) {
    console.info('[SW] Service workers are not supported in this browser');
    return;
  }
  
  if (process.env.NODE_ENV !== 'production') {
    console.info('[SW] Skipping service worker registration in development');
    return;
  }
  
  try {
    registration = await navigator.serviceWorker.register('/service-worker.js', options);
    console.info('[SW] Service worker registered successfully');
    
    // Detect new service worker updates
    registration.addEventListener('updatefound', () => {
      const newWorker = registration?.installing;
      if (newWorker) {
        newWorker.addEventListener('statechange', () => {
          if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
            console.info('[SW] New content is available, please refresh');
            // You could show a toast here to let users know about the update
          }
        });
      }
    });
  } catch (error) {
    console.error('[SW] Error registering service worker:', error);
  }
};

/**
 * Unregister all service workers and remove caches
 */
export const unregister = async (): Promise<void> => {
  if (!isServiceWorkerSupported) return;
  
  try {
    const registrations = await navigator.serviceWorker.getRegistrations();
    
    for (const registration of registrations) {
      await registration.unregister();
    }
    
    // Clear service worker caches
    const cacheNames = await caches.keys();
    for (const cacheName of cacheNames) {
      if (cacheName.includes('spendthrone-cache')) {
        await caches.delete(cacheName);
      }
    }
    
    console.info('[SW] Service workers unregistered and caches cleared');
  } catch (error) {
    console.error('[SW] Error unregistering service workers:', error);
  }
};

/**
 * Check for and apply updates to the service worker
 */
export const checkForUpdates = async (): Promise<void> => {
  if (!registration) return;
  
  try {
    await registration.update();
    console.info('[SW] Service worker update check completed');
  } catch (error) {
    console.error('[SW] Error checking for service worker updates:', error);
  }
};

/**
 * Skip waiting for the new service worker to activate
 */
export const applyPendingUpdate = (): void => {
  if (!registration || !registration.waiting) return;
  
  registration.waiting.postMessage({ type: 'SKIP_WAITING' });
};

export default {
  register,
  unregister,
  checkForUpdates,
  applyPendingUpdate,
  isSupported: isServiceWorkerSupported
};
