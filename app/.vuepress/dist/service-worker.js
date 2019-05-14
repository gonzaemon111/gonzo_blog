/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "2be6595cec19865ca66e03e7f3ee5614"
  },
  {
    "url": "about/1.html",
    "revision": "17b121c3de0753b461cd2982a3aa719d"
  },
  {
    "url": "about/index.html",
    "revision": "3986fc305a8589fee08df6937abb2ba0"
  },
  {
    "url": "assets/css/0.styles.4c855733.css",
    "revision": "18b1fac0e68389f6ef37de02d09efc94"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/vuetify_top.905ebd7f.png",
    "revision": "905ebd7fd8e0fbdb42a292afe71a52c5"
  },
  {
    "url": "assets/js/10.0c625b5c.js",
    "revision": "c4cb181816d97bc3a6fe39df57151f94"
  },
  {
    "url": "assets/js/11.e6309a92.js",
    "revision": "579a50ed8a2ae76e1b241b21821ff2ef"
  },
  {
    "url": "assets/js/12.77ce0e77.js",
    "revision": "e4f6e69867ffeafd598269ba914bce78"
  },
  {
    "url": "assets/js/13.ecc2ae20.js",
    "revision": "149e243cbb212618f34f2759251f6028"
  },
  {
    "url": "assets/js/14.23070198.js",
    "revision": "1cf4424da12739355402089a60eb3e3a"
  },
  {
    "url": "assets/js/2.9f5cdd9e.js",
    "revision": "923e17081c5c98bcd072a6d59d0522bd"
  },
  {
    "url": "assets/js/3.680b5926.js",
    "revision": "235e98a3b5fa986dd0161df172901104"
  },
  {
    "url": "assets/js/4.a774b9ac.js",
    "revision": "2690e59076edc592f384306edd5ea268"
  },
  {
    "url": "assets/js/5.e13cf9d0.js",
    "revision": "770baf1e842834583a8333e0511d4fd5"
  },
  {
    "url": "assets/js/6.af358d35.js",
    "revision": "7f225cf31a7cdf847af3dc35aa502cc4"
  },
  {
    "url": "assets/js/7.30fc6c8b.js",
    "revision": "df667a9ab55cb5871fcc3b6dcaa423e8"
  },
  {
    "url": "assets/js/8.0462935d.js",
    "revision": "d23a3bfe37526ee35eab4e68b8c2be1f"
  },
  {
    "url": "assets/js/9.8e719401.js",
    "revision": "33af46b27345b8c4431be9e417642e04"
  },
  {
    "url": "assets/js/app.94406576.js",
    "revision": "14301fc2159853c401566f4bd70db08d"
  },
  {
    "url": "blogs/1.html",
    "revision": "601ed99d7e697b3d806e94df6f034a0c"
  },
  {
    "url": "blogs/2.html",
    "revision": "49d0ed6182c596844d993dec032d375c"
  },
  {
    "url": "blogs/3.html",
    "revision": "fe06d89c79bef57e6ec481b3aa26e590"
  },
  {
    "url": "blogs/4.html",
    "revision": "1d50dee962b79faf89b809543b561b61"
  },
  {
    "url": "blogs/5.html",
    "revision": "befc4ac160076f2d4c8840662ff3d2d7"
  },
  {
    "url": "blogs/6.html",
    "revision": "ed7e074486a614ced83121787aeeeecf"
  },
  {
    "url": "blogs/7.html",
    "revision": "4b0bc396be58517c1a9ba61a830eac01"
  },
  {
    "url": "img/vuetify_top.png",
    "revision": "905ebd7fd8e0fbdb42a292afe71a52c5"
  },
  {
    "url": "index.html",
    "revision": "b2e8d7be693778266628225aac9925fe"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
