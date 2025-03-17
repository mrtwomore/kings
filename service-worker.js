/**
 * Kings Electrical - Service Worker
 * Provides offline capabilities and performance improvements
 */

const CACHE_NAME = 'kings-electrical-v1';
const ASSETS_TO_CACHE = [
    '/',
    '/index.html',
    '/about.html',
    '/services.html',
    '/contact.html',
    '/consultation.html',
    '/project-planner.html',
    '/service-finder.html',
    '/projects.html',
    '/testimonials.html',
    '/careers.html',
    '/privacy-policy.html',
    '/terms-of-service.html',
    '/css/styles.css',
    '/css/mobile.css',
    '/js/main.js',
    '/js/mobile-menu.js',
    '/js/mobile-optimizations.js',
    '/favicon.ico',
    '/public/icons/apple-touch-icon.png',
    '/public/icons/favicon-32x32.png',
    '/public/icons/favicon-16x16.png',
    '/public/icons/site.webmanifest',
    '/images/Capture-One-Catalog0815.jpg' // Logo
];

// Install event - cache assets
self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => {
                console.log('Caching assets');
                return cache.addAll(ASSETS_TO_CACHE);
            })
            .then(() => self.skipWaiting())
    );
});

// Activate event - clean up old caches
self.addEventListener('activate', event => {
    event.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.filter(cacheName => {
                    return cacheName !== CACHE_NAME;
                }).map(cacheName => {
                    console.log('Deleting old cache:', cacheName);
                    return caches.delete(cacheName);
                })
            );
        }).then(() => self.clients.claim())
    );
});

// Fetch event - serve from cache, fall back to network
self.addEventListener('fetch', event => {
    // Skip cross-origin requests
    if (!event.request.url.startsWith(self.location.origin)) {
        return;
    }
    
    // Skip non-GET requests
    if (event.request.method !== 'GET') {
        return;
    }
    
    // Skip browser-sync requests
    if (event.request.url.includes('browser-sync')) {
        return;
    }
    
    event.respondWith(
        caches.match(event.request)
            .then(cachedResponse => {
                if (cachedResponse) {
                    // Return cached response
                    return cachedResponse;
                }
                
                // Not in cache, fetch from network
                return fetch(event.request)
                    .then(response => {
                        // Check if valid response
                        if (!response || response.status !== 200 || response.type !== 'basic') {
                            return response;
                        }
                        
                        // Clone the response
                        const responseToCache = response.clone();
                        
                        // Cache the fetched response
                        caches.open(CACHE_NAME)
                            .then(cache => {
                                cache.put(event.request, responseToCache);
                            });
                        
                        return response;
                    })
                    .catch(error => {
                        // Network failed, try to serve offline page
                        if (event.request.mode === 'navigate') {
                            return caches.match('/offline.html');
                        }
                        
                        // For image requests, serve a placeholder
                        if (event.request.destination === 'image') {
                            return new Response(
                                '<svg width="400" height="300" xmlns="http://www.w3.org/2000/svg">' +
                                '<rect width="400" height="300" fill="#eee"/>' +
                                '<text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-family="sans-serif" font-size="24" fill="#999">Image Offline</text>' +
                                '</svg>',
                                { headers: { 'Content-Type': 'image/svg+xml' } }
                            );
                        }
                        
                        return new Response('Content not available offline');
                    });
            })
    );
}); 