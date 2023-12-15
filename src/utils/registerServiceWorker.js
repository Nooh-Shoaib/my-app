export function registerServiceWorker() {
        if ('serviceWorker' in navigator) {
                window.addEventListener('load', () => {
                        navigator.serviceWorker.register('../utils/service-worker.js')
                                .then((registration) => {
                                        console.log('ServiceWorker registration successful:', registration);
                                })
                                .catch((error) => {
                                        console.log('ServiceWorker registration failed:', error);
                                });
                });
        }
}