'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "5fe25dc4c561d45d4c0ac84758b4a302",
"assets/assets/images/1.jpeg": "3b5161d98f0d5387518082f8791713cd",
"assets/assets/images/10.jpeg": "10027e5c65eb4f95633cd1dd62675d36",
"assets/assets/images/11.jpeg": "aebe788dcca121d0415097113449c47b",
"assets/assets/images/2.jpeg": "a79d46382d3022d7c0255cbe6c39beb4",
"assets/assets/images/3.jpeg": "ac2fadd7370a0e6f9edf63da0e29f6a6",
"assets/assets/images/4.jpeg": "1d1722786e0ebcac6bfc84c74ad33995",
"assets/assets/images/5.jpeg": "79bdc8e16780af16c84e5cf49734cb70",
"assets/assets/images/6.jpeg": "0205ce9e3cf25bdd7e1e38277bb077cd",
"assets/assets/images/7.jpeg": "0a3d6727caf73ed8c06b3c40e06c744c",
"assets/assets/images/8.jpeg": "7a8c1f210bdc65664d958cbf19b82832",
"assets/assets/images/9.jpeg": "777d0f9f8ed5d4c574b9b99efd8aafa2",
"assets/assets/images/Ananna.jpg": "2305cc70af590d7f833fadb65379cee3",
"assets/assets/images/apple-touch-icon.png": "1fb60b58848c000249af4a417d8eac6b",
"assets/assets/images/Ayon.jpg": "464e14ca6bc533e63c87218466c6b791",
"assets/assets/images/doodle.png": "187f0373e538cc433b10809a1dd59fb2",
"assets/assets/images/dot.png": "81a2106763ca4d10177a79ed67359e43",
"assets/assets/images/earth.glb": "03723d7c829e5e2feeda8a65d4e9e2fd",
"assets/assets/images/earthpic.png": "df50bd76b38f033d4d0f55114ed74a88",
"assets/assets/images/earthpic1.png": "3f664a83f873f1bd53f08b99caf4a77a",
"assets/assets/images/Earth_1.usdz": "ee087ecd34c4f65e74a096cd0c19b46e",
"assets/assets/images/Fahmida.jpeg": "d48f3dfd63e00f7fde65bb68632306e3",
"assets/assets/images/favicon-16x16.png": "3f0c3344a21531c36a9d724a4cb92d85",
"assets/assets/images/favicon-32x32.png": "7625e018702459a49355bacf9c92e863",
"assets/assets/images/favicon.ico": "a9aba65ad65a84250f45cc74bd3a1ddd",
"assets/assets/images/icon-192.png": "06e10e817c39759a2a573e7d28f6ad32",
"assets/assets/images/icon-512.png": "5b069a247bf0b9198320b09ab5e737a9",
"assets/assets/images/Mahim.jpg": "93003796d273cbea6df82d2a0d771a62",
"assets/assets/images/neon.png": "bdf204e23756ed745bae7b65eec3a51e",
"assets/assets/images/shuttle.png": "9df39e09fcb3cb9b413a46f9ab221d71",
"assets/assets/images/sifat.jpg": "4e89270aad0d5658d412f031b2d86569",
"assets/assets/images/site.webmanifest": "053100cb84a50d2ae7f5492f7dd7f25e",
"assets/assets/images/WhatsApp%2520Image%25202022-10-02%2520at%252012.00.00%2520PM.jpeg": "d4860cf4541b065ee93c22807b50e22d",
"assets/assets/images/WhatsApp%2520Image%25202022-10-02%2520at%252012.09.50%2520PM.jpeg": "893e6371185dc738e7c1f8516b39cd1f",
"assets/assets/rocket_loader.json": "a0bd3a90bc870cdfea4896ff3784754a",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/NOTICES": "2628ce338a0597c13f9d5dd4d25fe01a",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/model_viewer_plus/assets/model-viewer.min.js": "5648e58354cbcc4aba485a7da101b7f0",
"assets/packages/model_viewer_plus/assets/template.html": "ce0bee852c97830372cf5bac6796cae6",
"assets/shaders/ink_sparkle.frag": "8399ae8e54e2273b17e9ad1ce38e5cb5",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"favicon.ico": "a9aba65ad65a84250f45cc74bd3a1ddd",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"icons/Icon-192.png": "06e10e817c39759a2a573e7d28f6ad32",
"icons/Icon-512.png": "5b069a247bf0b9198320b09ab5e737a9",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "fcccac7b2232ccad1c21af7a29cdebb7",
"/": "fcccac7b2232ccad1c21af7a29cdebb7",
"main.dart.js": "f1d82b6f9624551a2715256d1433e7d9",
"manifest.json": "ef247c94df5b7e0363ca0ca6d82cac2d",
"version.json": "5b6d8e2c54df43570c41646bdaacf5c1"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
