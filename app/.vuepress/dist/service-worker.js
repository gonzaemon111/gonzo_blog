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
    "revision": "bf4930e17ce4b80c74e4e3bd86c7cc10"
  },
  {
    "url": "about/1.html",
    "revision": "773265a71687c254500eee04b2536039"
  },
  {
    "url": "about/index.html",
    "revision": "0ade704a0233558bdddb0bcbc9bfea40"
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
    "url": "assets/js/app.c6fa78d3.js",
    "revision": "3bf3696dcddebb423fc5019afd520202"
  },
  {
    "url": "blogs/1.html",
    "revision": "06f74ee8db6a57d25a57aacb8fdb0924"
  },
  {
    "url": "blogs/2.html",
    "revision": "a25a348a1e8980c19ad9a2952386067c"
  },
  {
    "url": "blogs/3.html",
    "revision": "faade54f63d53b50fa827507ab1d242b"
  },
  {
    "url": "blogs/4.html",
    "revision": "1a39ed0da7b5ff6cf24226af613a1d11"
  },
  {
    "url": "blogs/5.html",
    "revision": "f5f0a4da255f9995baab2a32bc10587d"
  },
  {
    "url": "blogs/6.html",
    "revision": "7c726241530aa722f6275b20ce5b675b"
  },
  {
    "url": "blogs/7.html",
    "revision": "0feda48053216ad49db18a1ec619d549"
  },
  {
    "url": "favicon.png",
    "revision": "5a7e61744c8a91a7f11f9d9b3767d072"
  },
  {
    "url": "img/icons/icon-128x128.png",
    "revision": "d1aa941628912f0175ce4e54ab896c4f"
  },
  {
    "url": "img/icons/icon-144x144.png",
    "revision": "74c3d721e5d72bff6bd29f5d5aeda831"
  },
  {
    "url": "img/icons/icon-152x152.png",
    "revision": "eaea8e4d63fa61e82380f856a380c681"
  },
  {
    "url": "img/icons/icon-192x192.png",
    "revision": "20c38e93c160a65fb5daa96390b75397"
  },
  {
    "url": "img/icons/icon-384x384.png",
    "revision": "32c1b293a0b5e88e118458031240f8f9"
  },
  {
    "url": "img/icons/icon-512x512.png",
    "revision": "32c1b293a0b5e88e118458031240f8f9"
  },
  {
    "url": "img/icons/icon-72x72.png",
    "revision": "78519e55bfb2ce40452fd04cf40be1b3"
  },
  {
    "url": "img/icons/icon-96x96.png",
    "revision": "d65f12196dbdda2f11881f258c34632d"
  },
  {
    "url": "img/vuetify_top.png",
    "revision": "905ebd7fd8e0fbdb42a292afe71a52c5"
  },
  {
    "url": "index.html",
    "revision": "637aef9851e0345f526083eb205ab4d3"
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
