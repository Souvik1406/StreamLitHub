self.addEventListener('install',function(event){
    event.waitUntil(
        caches.open('sw-cache').then(function(cache){
            return cache.add('index.html',
            'style.css',
            'script.js',
            'images/wdicon1.jpg',
            'images/wdicon2.jpg',
            'sw.js',
            'manifest.json',
            'img1.jpg',
            'img2.jpg',
            'img3.jpg',
            'img4.jpg',
            'img5.jpg',
            'img6.jpg',

            );
        })
    );
});

self.addEventListener('fetch',function(event){
    event.respondwith(
        caches.match(event.request).then(function(response){
            return response || fetch(event.request);
        })
    );
});