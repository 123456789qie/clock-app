const CACHE_NAME = 'clock-v1';
const ASSETS = [
    '/',
    '/index.html',
    '/icons/icon-192.png',
    '/icons/icon-512.png'
];

// 安装时缓存资源
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => cache.addAll(ASSETS))
    );
});

// 拦截请求并返回缓存
self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request)
            .then(response => response || fetch(event.request))
    );
});