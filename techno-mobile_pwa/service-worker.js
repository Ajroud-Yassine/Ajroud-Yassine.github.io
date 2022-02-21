const cacheBuild='Build-cache-1.0';

let urlsToCache = ['index.html','assets/js/script.js'];

self.addEventListener('install',function(event)
{
    event.waitUntil(
        caches.open(cacheBuild)
        .then(function(cache)
        {
            console.log('Opened cache');
            return cache.addAll(urlsToCache);
        }));
});


self.addEventListener('fetch', evt => 
{
    evt.respondWith(
        caches.match(evt.request).then(urlsToCache =>
            {       
                return fetch(evt.request).then(newResponse =>
                    {
                        console.log("From network");
                        caches.open(cacheBuild).then(cache => cache.put(evt.request,newResponse));
                        return newResponse.clone();
                    }).catch(urlsToCache =>
                    {
                        console.log("From cache");
                        return urlsToCache;


                    });
                
            }
        )
    );
});