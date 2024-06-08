'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/config": "f4fb2c05b952704f93e9d5f1345e808c",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "9c594910a094767677b30d7fedf19c8f",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "007f0a593dc06d7ced2889c03e48fb2c",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "5bce7962748f58298cd6e52a1c4f92cd",
".git/logs/refs/heads/main": "5bce7962748f58298cd6e52a1c4f92cd",
".git/logs/refs/remotes/origin/HEAD": "5bce7962748f58298cd6e52a1c4f92cd",
".git/objects/pack/pack-c26d79f8385b04c3c8ad22ff019ca69937afb916.idx": "5aebd9ac3b9fcb9e833a65d25862cfdb",
".git/objects/pack/pack-c26d79f8385b04c3c8ad22ff019ca69937afb916.pack": "2e036ef591d6072483fdf0172eca5627",
".git/objects/pack/pack-c26d79f8385b04c3c8ad22ff019ca69937afb916.rev": "4399862e4e0556bb4f403e1f0111fb61",
".git/packed-refs": "7529761c11f3e97092dc69fa76146d5a",
".git/refs/heads/main": "a32df8fe9f7f33e5daff98e40a8c48f1",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
"assets/AssetManifest.bin": "c7b4be1e88ccda66d02a991e9865c436",
"assets/AssetManifest.json": "0aeedcaf9400781fcef3b0f938752d4f",
"assets/assets/fonts/Inter/Inter-Bold.ttf": "ba74cc325d5f67d0efbeda51616352db",
"assets/assets/fonts/Inter/Inter-Regular.ttf": "ea5879884a95551632e9eb1bba5b2128",
"assets/assets/fonts/TenorSans/TenorSans-Regular.ttf": "d827fd7095587fad48ecc82ac81d0207",
"assets/assets/fonts/Wedding/Wedding.otf": "6ae4c46df15ffaff4ab94ab1f2382be2",
"assets/FontManifest.json": "b0691b234101e879a3456fe40967e64c",
"assets/fonts/MaterialIcons-Regular.otf": "69e2ac9cd13571c4e316b280cabddf42",
"assets/image/first_page.jpeg": "c02c8c519b461116a776fc1e0801486b",
"assets/image/FRS01950%201.png": "e1cf1a4b8942e56189d0314d520afea8",
"assets/image/gallery/11.png": "e39c03b44415da0b27318471170aeb64",
"assets/image/gallery/12.png": "3e5d734718e351a2d5e48441fc73f32d",
"assets/image/gallery/13.png": "bf7e27e702e02a1fe094f91d051e602d",
"assets/image/gallery/21.png": "8051f5eda35474ff28e6906a3c5b20c6",
"assets/image/gallery/22.png": "d58d04b7fa909f06c83d29c167c3e02d",
"assets/image/gallery/31.png": "443ee247e2496a611a97c543f90690a6",
"assets/image/love_page_bride.jpeg": "c03c3a7f1271d48e02b52690f6007361",
"assets/image/love_page_groom.jpeg": "c25555608562cf4bddfed08ba5aea924",
"assets/image/pray_page.jpg": "7e2a808aacffa5eb8683889791c9c725",
"assets/image/slide/1.png": "58f7eea26df04554e0c5badf15eeb966",
"assets/image/slide/2.png": "f266962571277bda0392251c98bbfc12",
"assets/image/slide/3.png": "cc5e093f6c627186323c165332d70b4a",
"assets/image/slide/4.png": "999153e64c3fa0e34adf56bea859ac28",
"assets/image/slide/5.png": "dfd31b78749407f51523bc7abbcee441",
"assets/image/slide/6.png": "5e0474fbdc7bac529d640f0617bee4c2",
"assets/image/slide/7.png": "176bc2d9bef456f96b9fb16ae565ccca",
"assets/image/slide/8.png": "6979e6f5f9eaa3223a8f06a810520d80",
"assets/image/slide/9.png": "fd8fa92ed37dfc1e5b58a5965d96d221",
"assets/image/story/1.png": "b767b3d215541e8c86c0228e5ec2f1aa",
"assets/image/story/2.png": "93e13eafeee1535234066ed798d20c6a",
"assets/image/story/3.png": "c4bcae8d2a039a6971b2c0656250d829",
"assets/json/data.json": "bfbc1d5133e10e76fab42ff210a70ec7",
"assets/NOTICES": "e961995c108f18e410eba8eb0bf399f6",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/fluttertoast/assets/toastify.css": "910ddaaf9712a0b0392cf7975a3b7fb5",
"assets/packages/fluttertoast/assets/toastify.js": "18cfdd77033aa55d215e8a78c090ba89",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"audio/audio.mp3": "4bd4a22fa8e479afd1036954161768b0",
"canvaskit/canvaskit.js": "bbf39143dfd758d8d847453b120c8ebb",
"canvaskit/canvaskit.wasm": "42df12e09ecc0d5a4a34a69d7ee44314",
"canvaskit/chromium/canvaskit.js": "96ae916cd2d1b7320fff853ee22aebb0",
"canvaskit/chromium/canvaskit.wasm": "be0e3b33510f5b7b0cc76cc4d3e50048",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/skwasm.wasm": "1a074e8452fe5e0d02b112e22cdcf455",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15",
"favicon.png": "0b09f9dd5a6e951f2585ffa7ef384dff",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "849085d87d49b072b525b4cb7674942b",
"icons/Icon-512.png": "bdadc887921356cd8702cc2492337b53",
"image/first_page.jpeg": "c02c8c519b461116a776fc1e0801486b",
"image/FRS01950%201.png": "e1cf1a4b8942e56189d0314d520afea8",
"image/gallery/11.png": "e39c03b44415da0b27318471170aeb64",
"image/gallery/12.png": "3e5d734718e351a2d5e48441fc73f32d",
"image/gallery/13.png": "bf7e27e702e02a1fe094f91d051e602d",
"image/gallery/21.png": "8051f5eda35474ff28e6906a3c5b20c6",
"image/gallery/22.png": "d58d04b7fa909f06c83d29c167c3e02d",
"image/gallery/31.png": "443ee247e2496a611a97c543f90690a6",
"image/love_page_bride.jpeg": "c03c3a7f1271d48e02b52690f6007361",
"image/love_page_groom.jpeg": "c25555608562cf4bddfed08ba5aea924",
"image/pray_page.jpg": "7e2a808aacffa5eb8683889791c9c725",
"image/slide/1.png": "58f7eea26df04554e0c5badf15eeb966",
"image/slide/2.png": "f266962571277bda0392251c98bbfc12",
"image/slide/3.png": "cc5e093f6c627186323c165332d70b4a",
"image/slide/4.png": "999153e64c3fa0e34adf56bea859ac28",
"image/slide/5.png": "dfd31b78749407f51523bc7abbcee441",
"image/slide/6.png": "5e0474fbdc7bac529d640f0617bee4c2",
"image/slide/7.png": "176bc2d9bef456f96b9fb16ae565ccca",
"image/slide/8.png": "6979e6f5f9eaa3223a8f06a810520d80",
"image/slide/9.png": "fd8fa92ed37dfc1e5b58a5965d96d221",
"image/story/1.png": "b767b3d215541e8c86c0228e5ec2f1aa",
"image/story/2.png": "93e13eafeee1535234066ed798d20c6a",
"image/story/3.png": "c4bcae8d2a039a6971b2c0656250d829",
"index.html": "96856917346aa2302fbb135164f3018c",
"/": "96856917346aa2302fbb135164f3018c",
"json/data.json": "bfbc1d5133e10e76fab42ff210a70ec7",
"main.dart.js": "4c272c82a41aef9754e7a600e10f928b",
"manifest.json": "0f3209d3b4f9a7f0b6e5cf1f9fdd17d6",
"version.json": "2678869dcfa4ac6ab525201b599fb975"};
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
