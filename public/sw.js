
if('serviceWorker' in navigator){
  window.addEventListener('load',()=>{
    navigator.serviceWorker.register('./sw.js').then(reg=>{
      if(reg.installing) {
        console.log('Service worker installing');
      } else if(reg.waiting) {
        console.log('Service worker installed');
      } else if (reg.active) {
        console.log('Service worker active');
      }
    }).catch(e=>console.log(e))
  })
}
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open('news-v1').then((cache) => {
      return cache.addAll([
        './index.html',
        '../src/styles/variables.scss',
        '../src/images/stucco-texture.jpg',
        '../src/icons/loon-icon fb.svg',
        '../src/icons/loon-icon vk.svg',
        '../src/icons/mail-open-symbol-of-an-envelope-with-a-letter-inside_icon-icons.com_56495.svg',
        '../src/icons/Phone-old_icon-icons.com_51955.svg',
        '../src/icons/296990.svg',
        '../src/index.js'

      ]);
    }).catch(err=>console.log(err))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
      caches.open('news-v1')
          .then(cache => cache.match(event.request)
              .then(response => response || fetch(event.request)
                  .then(response => {
                      return response
                  })))
  )
})