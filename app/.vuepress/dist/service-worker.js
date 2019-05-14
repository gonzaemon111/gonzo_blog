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
    "revision": "f897292be3c4c893b089cd06fd3311ff"
  },
  {
    "url": "about/1.html",
    "revision": "9dacd5226b672f5d6bef68fd70438129"
  },
  {
    "url": "about/index.html",
    "revision": "6f5b3fda8a99209b5526b48c09ab632b"
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
    "url": "assets/js/app.16f217b8.js",
    "revision": "9a0c297f7d556ce126bb7dfd8d11074e"
  },
  {
    "url": "blogs/1.html",
    "revision": "47c3de0ca494ebb06dececa5358f092d"
  },
  {
    "url": "blogs/2.html",
    "revision": "abb3597db9e8a702e8981a930723cbfb"
  },
  {
    "url": "blogs/3.html",
    "revision": "274e079980c7dea4c28991df847ddb0a"
  },
  {
    "url": "blogs/4.html",
    "revision": "5ffd033c0e82d91b9f6add034bb220bb"
  },
  {
    "url": "blogs/5.html",
    "revision": "a3f40e7ee0a5f6ea87daefb47574239e"
  },
  {
    "url": "blogs/6.html",
    "revision": "6d18493c58dd1d7be69a8f540fdd0309"
  },
  {
    "url": "blogs/7.html",
    "revision": "20d448979109de0ef62b4d18d850c2d9"
  },
  {
    "url": "favicon.png",
    "revision": "5a7e61744c8a91a7f11f9d9b3767d072"
  },
  {
    "url": "img/vuetify_top.png",
    "revision": "905ebd7fd8e0fbdb42a292afe71a52c5"
  },
  {
    "url": "index.html",
    "revision": "603c0488b3699a9152db14d37c13dd87"
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
