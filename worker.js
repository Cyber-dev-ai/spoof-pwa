// Minimal service worker for PWA install

// Required to make the service worker install successfully
self.addEventListener('install', () => {
  // Skip waiting so it activates immediately (optional but common)
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  // Take control of uncontrolled clients as soon as possible
  event.waitUntil(self.clients.claim());
});

// Empty fetch handler just to keep the SW alive (optional)
self.addEventListener('fetch', () => {
  // Intentionally left blank
});
