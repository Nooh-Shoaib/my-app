/* eslint-disable no-restricted-globals */
const CACHE_VERSION = 1;
const DYNAMIC_CACHE_NAME = 'dynamic-cache-v1';
const STATIC_CACHE_NAME = `static-cache-v${CACHE_VERSION}`;

const STATIC_FILES = [
        '/',
        '/:id',
        // Add other essential static assets here
];

self.addEventListener('install', (event) => {
        self.skipWaiting();

        event.waitUntil(
                caches.open(STATIC_CACHE_NAME).then((cache) => {
                        return cache.addAll(STATIC_FILES);
                })
        );
});

self.addEventListener('activate', (event) => {
        event.waitUntil(
                caches.keys().then((cacheNames) => {
                        return Promise.all(
                                cacheNames.map((name) => {
                                        if (name !== STATIC_CACHE_NAME && name !== DYNAMIC_CACHE_NAME) {
                                                return caches.delete(name);
                                        }
                                })
                        );
                })
        );
});

self.addEventListener('fetch', (event) => {
        event.respondWith(
                caches.match(event.request).then((staticResponse) => {
                        return staticResponse || fetch(event.request).then((dynamicRes) => {
                                return caches.open(DYNAMIC_CACHE_NAME).then((cache) => {
                                        cache.put(event.request.url, dynamicRes.clone());
                                        return dynamicRes;
                                });
                        });
                })
        );
});
/* eslint-enable no-restricted-globals */
