'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "71d03ae23ab22c3bcbc492848f839eef",
"assets/AssetManifest.bin.json": "4c4067c8084e0bf16bedb22a85b0ae93",
"assets/AssetManifest.json": "686fac4a7c1d1e05e51ba41b426ea1c3",
"assets/assets/images/assign.svg": "1416b11016d599d0211fecf88763fe0f",
"assets/assets/images/bank.svg": "8ba02f5732cd4edd53eab81751fa9fe3",
"assets/assets/images/barcode.png": "bc57d124879acc8ee799b593d655f414",
"assets/assets/images/barcode_icon.svg": "bd552ee4e50e5a5a4e9fdcfdc7d4aea3",
"assets/assets/images/branches.png": "e556ec034971819d1b166a818d1f41df",
"assets/assets/images/claims.png": "1fbceba686a13dca1009007d19536edc",
"assets/assets/images/company.svg": "aff6a11f0f01a1675af4a55b3739f0b9",
"assets/assets/images/copy.svg": "f9ebf13c77fc5ebf50bb02a19db48b50",
"assets/assets/images/customer.svg": "81adfed1913a09e964a0efd7adb32851",
"assets/assets/images/dashboard.svg": "bac33e67c733bfdb1eb5feb86fc838cd",
"assets/assets/images/icon_claim.svg": "b2c96f821a00804de47b7ba481f698a6",
"assets/assets/images/icon_discount.svg": "9b431ab4b28b86d54a4e7c4bf5e8a4ce",
"assets/assets/images/icon_expense.svg": "af52f5feaa58d2a491a612315dd6c724",
"assets/assets/images/icon_report.svg": "2cf1c3d18c5082326275e7084668598b",
"assets/assets/images/icon_stock_position.svg": "a571bbc9438da470d1b518556cfed593",
"assets/assets/images/icon_voucher.svg": "b0a76bcde6ab22f82a2cfd974189848c",
"assets/assets/images/person.png": "288ba4757aefa21aee328f57ab799fc3",
"assets/assets/images/products.svg": "9fc8e0cae22a42b5befb17674da2b1cc",
"assets/assets/images/purchase.svg": "a17125dd0dc21652a590a35ae3c80f78",
"assets/assets/images/purchase_invoice.png": "03937b04f5120c812f2152737936ba89",
"assets/assets/images/safi.png": "9a2a12b93dde9ac57acba0a3c49554b3",
"assets/assets/images/salaries.svg": "d8efee10088fdd61777c3a4e62e55747",
"assets/assets/images/sale.png": "b6638c74649a316de62be3db545243fc",
"assets/assets/images/salemen.png": "577b154347894ba7b019f0bee3fab8ba",
"assets/assets/images/salemen.svg": "dfe552da99c605e26dd03ea0c71c0883",
"assets/assets/images/sale_invice.png": "47b8e4a36310168972aecc3a84f3feaa",
"assets/assets/images/sale_invoice.svg": "a99c444321a548380e8c7034db5124d2",
"assets/assets/images/shop_logo.png": "7844ff4ef7eec00002a83d354a68db0c",
"assets/assets/images/target.png": "386abb15b15ad6b24c2bcc8b29c522d9",
"assets/assets/images/target.svg": "e33a1db189b85e8cfb07ba11c126328d",
"assets/assets/images/today_sale.png": "c8a48401a67b27e1e04126b6cafbad62",
"assets/assets/images/total_product.png": "8061ecabcfb5e692f67e5fab0ef21105",
"assets/assets/images/total_warhouse.png": "a49d744b32abb2c3ed828e5d071c6089",
"assets/assets/images/user.svg": "841410f0499468f942a3ca15daeb92d0",
"assets/assets/invoice.json": "26f586fd8d6f8b7f73cb06bfeebdc851",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "45d1001360239c69669440ad3ea83fd1",
"assets/NOTICES": "c5f67a26309c82cb67dcf7cf0604ea46",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "b20b1a95af6f34830b18a2d8589808d7",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "5fda3f1af7d6433d53b24083e2219fa0",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/chromium/canvaskit.js": "87325e67bf77a9b483250e1fb1b54677",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/skwasm.js": "9fa2ffe90a40d062dd2343c7b84caf01",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f31737fb005cd3a3c6bd9355efd33061",
"flutter_bootstrap.js": "18ae2a109053eb1fe7eb86fc58eca6ba",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "2e3d533099e56ce61bda78073a8b8dca",
"/": "2e3d533099e56ce61bda78073a8b8dca",
"main.dart.js": "feeeb00367d8cf281cba18e2133b3a5f",
"manifest.json": "4b20fe75179100de58cba989c9a2d547",
"version.json": "0fdec62a50d3415ad47345fb5926d309"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
