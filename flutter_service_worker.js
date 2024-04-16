'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "2678869dcfa4ac6ab525201b599fb975",
"index.html": "448b611ee55c71124875f97c149f008a",
"/": "448b611ee55c71124875f97c149f008a",
"main.dart.js": "1fb61e1bf29eadc9c679279fba52ffc4",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"image/FRS01950%201.png": "e1cf1a4b8942e56189d0314d520afea8",
"image/first_page.jpeg": "c02c8c519b461116a776fc1e0801486b",
"image/slide/8.png": "6979e6f5f9eaa3223a8f06a810520d80",
"image/slide/9.png": "fd8fa92ed37dfc1e5b58a5965d96d221",
"image/slide/4.png": "999153e64c3fa0e34adf56bea859ac28",
"image/slide/5.png": "dfd31b78749407f51523bc7abbcee441",
"image/slide/7.png": "176bc2d9bef456f96b9fb16ae565ccca",
"image/slide/6.png": "5e0474fbdc7bac529d640f0617bee4c2",
"image/slide/2.png": "f266962571277bda0392251c98bbfc12",
"image/slide/3.png": "cc5e093f6c627186323c165332d70b4a",
"image/slide/1.png": "58f7eea26df04554e0c5badf15eeb966",
"image/love_page_groom.jpeg": "c25555608562cf4bddfed08ba5aea924",
"image/gallery/12.png": "3e5d734718e351a2d5e48441fc73f32d",
"image/gallery/13.png": "bf7e27e702e02a1fe094f91d051e602d",
"image/gallery/11.png": "e39c03b44415da0b27318471170aeb64",
"image/gallery/21.png": "8051f5eda35474ff28e6906a3c5b20c6",
"image/gallery/22.png": "d58d04b7fa909f06c83d29c167c3e02d",
"image/gallery/31.png": "443ee247e2496a611a97c543f90690a6",
"image/pray_page.jpg": "7e2a808aacffa5eb8683889791c9c725",
"image/love_page_bride.jpeg": "c03c3a7f1271d48e02b52690f6007361",
"image/story/2.png": "93e13eafeee1535234066ed798d20c6a",
"image/story/3.png": "c4bcae8d2a039a6971b2c0656250d829",
"image/story/1.png": "b767b3d215541e8c86c0228e5ec2f1aa",
"favicon.png": "0b09f9dd5a6e951f2585ffa7ef384dff",
"audio/audio.mp3": "4bd4a22fa8e479afd1036954161768b0",
"json/data.json": "a2efcd0ddfd22d9e55c7cd7288126229",
"icons/Icon-192.png": "849085d87d49b072b525b4cb7674942b",
"icons/Icon-512.png": "bdadc887921356cd8702cc2492337b53",
"manifest.json": "a57d440751fecd9196c0576792e928bc",
"assets/AssetManifest.json": "0aeedcaf9400781fcef3b0f938752d4f",
"assets/NOTICES": "8759469a7d3ade927abe6fab4c91cbb9",
"assets/image/FRS01950%201.png": "e1cf1a4b8942e56189d0314d520afea8",
"assets/image/first_page.jpeg": "c02c8c519b461116a776fc1e0801486b",
"assets/image/slide/8.png": "6979e6f5f9eaa3223a8f06a810520d80",
"assets/image/slide/9.png": "fd8fa92ed37dfc1e5b58a5965d96d221",
"assets/image/slide/4.png": "999153e64c3fa0e34adf56bea859ac28",
"assets/image/slide/5.png": "dfd31b78749407f51523bc7abbcee441",
"assets/image/slide/7.png": "176bc2d9bef456f96b9fb16ae565ccca",
"assets/image/slide/6.png": "5e0474fbdc7bac529d640f0617bee4c2",
"assets/image/slide/2.png": "f266962571277bda0392251c98bbfc12",
"assets/image/slide/3.png": "cc5e093f6c627186323c165332d70b4a",
"assets/image/slide/1.png": "58f7eea26df04554e0c5badf15eeb966",
"assets/image/love_page_groom.jpeg": "c25555608562cf4bddfed08ba5aea924",
"assets/image/gallery/12.png": "3e5d734718e351a2d5e48441fc73f32d",
"assets/image/gallery/13.png": "bf7e27e702e02a1fe094f91d051e602d",
"assets/image/gallery/11.png": "e39c03b44415da0b27318471170aeb64",
"assets/image/gallery/21.png": "8051f5eda35474ff28e6906a3c5b20c6",
"assets/image/gallery/22.png": "d58d04b7fa909f06c83d29c167c3e02d",
"assets/image/gallery/31.png": "443ee247e2496a611a97c543f90690a6",
"assets/image/pray_page.jpg": "7e2a808aacffa5eb8683889791c9c725",
"assets/image/love_page_bride.jpeg": "c03c3a7f1271d48e02b52690f6007361",
"assets/image/story/2.png": "93e13eafeee1535234066ed798d20c6a",
"assets/image/story/3.png": "c4bcae8d2a039a6971b2c0656250d829",
"assets/image/story/1.png": "b767b3d215541e8c86c0228e5ec2f1aa",
"assets/json/data.json": "a2efcd0ddfd22d9e55c7cd7288126229",
"assets/FontManifest.json": "b0691b234101e879a3456fe40967e64c",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/fluttertoast/assets/toastify.js": "18cfdd77033aa55d215e8a78c090ba89",
"assets/packages/fluttertoast/assets/toastify.css": "910ddaaf9712a0b0392cf7975a3b7fb5",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/AssetManifest.bin": "c7b4be1e88ccda66d02a991e9865c436",
"assets/fonts/MaterialIcons-Regular.otf": "69e2ac9cd13571c4e316b280cabddf42",
"assets/assets/fonts/Wedding/Wedding.otf": "6ae4c46df15ffaff4ab94ab1f2382be2",
"assets/assets/fonts/Inter/Inter-Bold.ttf": "ba74cc325d5f67d0efbeda51616352db",
"assets/assets/fonts/Inter/Inter-Regular.ttf": "ea5879884a95551632e9eb1bba5b2128",
"assets/assets/fonts/TenorSans/TenorSans-Regular.ttf": "d827fd7095587fad48ecc82ac81d0207",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/skwasm.wasm": "1a074e8452fe5e0d02b112e22cdcf455",
"canvaskit/chromium/canvaskit.js": "96ae916cd2d1b7320fff853ee22aebb0",
"canvaskit/chromium/canvaskit.wasm": "be0e3b33510f5b7b0cc76cc4d3e50048",
"canvaskit/canvaskit.js": "bbf39143dfd758d8d847453b120c8ebb",
"canvaskit/canvaskit.wasm": "42df12e09ecc0d5a4a34a69d7ee44314",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
