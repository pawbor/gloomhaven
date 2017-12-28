"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/gloomhaven/monster-damage-tracker/index.html","e4a28fc1b6df9fa7484019463d9139af"],["/gloomhaven/monster-damage-tracker/static/css/main.f147860f.css","ef471de664d84640baff34813f9454bb"],["/gloomhaven/monster-damage-tracker/static/js/main.b4f6d816.js","147c4f3c1e32aafc5fb6e29b85e97b86"],["/gloomhaven/monster-damage-tracker/static/media/air.b71a1e90.svg","b71a1e902aea2b375eca97f4d6e83f3e"],["/gloomhaven/monster-damage-tracker/static/media/any.3687221d.svg","3687221dc75acf4fc32af645547ab8b3"],["/gloomhaven/monster-damage-tracker/static/media/attack.79852f29.svg","79852f29c26b8a85b187b429f8499134"],["/gloomhaven/monster-damage-tracker/static/media/bless.c9e17e32.svg","c9e17e3217a92457ac31b0df73d59596"],["/gloomhaven/monster-damage-tracker/static/media/circle-with-middle-black.41cc1fc8.svg","41cc1fc887cd61ce7d31e0298a3327c1"],["/gloomhaven/monster-damage-tracker/static/media/circle-with-side-black.57e14188.svg","57e14188d07388ad5a8f8261ba5e4983"],["/gloomhaven/monster-damage-tracker/static/media/circle.80bf6532.svg","80bf65329b371553c8e4f58a2bdf981f"],["/gloomhaven/monster-damage-tracker/static/media/curse.5fbb8b2f.svg","5fbb8b2fd662b38767b28faa46cde29f"],["/gloomhaven/monster-damage-tracker/static/media/dark.89ef21f6.svg","89ef21f635af95117dd7d503d7729b9a"],["/gloomhaven/monster-damage-tracker/static/media/disarm.14c767e8.svg","14c767e8d72c53400bbf46cba1271404"],["/gloomhaven/monster-damage-tracker/static/media/earth.11e7c60d.svg","11e7c60d5f469c125f3feeca3fc24bbf"],["/gloomhaven/monster-damage-tracker/static/media/elder-drake-special-1.eb3b491a.svg","eb3b491add6900b57ea727883334b2ef"],["/gloomhaven/monster-damage-tracker/static/media/fire.d45dc737.svg","d45dc73746cde89950d870228d81b9b1"],["/gloomhaven/monster-damage-tracker/static/media/fly.643cca37.svg","643cca37132455f7c97e4ba30fdb8640"],["/gloomhaven/monster-damage-tracker/static/media/heal.7e43977c.svg","7e43977c1284758971218a55743d2dfd"],["/gloomhaven/monster-damage-tracker/static/media/ice.a5af5486.svg","a5af5486b49d068148a1b81acdb47f31"],["/gloomhaven/monster-damage-tracker/static/media/immobilize.06a7bf04.svg","06a7bf04bb124c8de796cd542e44e12b"],["/gloomhaven/monster-damage-tracker/static/media/inox-bodyguard-special-1.42a2a477.svg","42a2a4770330d830200dd170f733954e"],["/gloomhaven/monster-damage-tracker/static/media/invisible.6aaa5c90.svg","6aaa5c9057893509e7b90c00a2fff232"],["/gloomhaven/monster-damage-tracker/static/media/jump.df5dd13a.svg","df5dd13a0b2fc7e6a34c111efb45bb22"],["/gloomhaven/monster-damage-tracker/static/media/light.fea53de9.svg","fea53de9242848cf2e6656180c791f67"],["/gloomhaven/monster-damage-tracker/static/media/line-3-with-black.0d20dd0e.svg","0d20dd0e258e3f21b3397c00f6aa7e66"],["/gloomhaven/monster-damage-tracker/static/media/line-4-with-black.6150fa98.svg","6150fa98df661064b2fc363e2e54015e"],["/gloomhaven/monster-damage-tracker/static/media/line-6-with-black.1cba71ae.svg","1cba71ae42bef23a43828c8d08564ff2"],["/gloomhaven/monster-damage-tracker/static/media/loot.bddb0267.svg","bddb0267b0a0487ef495078729e4f4a1"],["/gloomhaven/monster-damage-tracker/static/media/move.bea37385.svg","bea373854dbb0d447dff7df9a6794481"],["/gloomhaven/monster-damage-tracker/static/media/muddle.0265827a.svg","0265827a50fafb557e1ad354e83fefe6"],["/gloomhaven/monster-damage-tracker/static/media/pierce.904bbb03.svg","904bbb03449e8eceb78973afebacceeb"],["/gloomhaven/monster-damage-tracker/static/media/poison.57e3c705.svg","57e3c705b9b62aa7277349460bf64382"],["/gloomhaven/monster-damage-tracker/static/media/pull.7cad5487.svg","7cad548719edb4a040cf52f72e3027c3"],["/gloomhaven/monster-damage-tracker/static/media/push.6109e085.svg","6109e085db1ee5fbea2b6f701af7d1a6"],["/gloomhaven/monster-damage-tracker/static/media/range.786732e0.svg","786732e09788deab70c8c721d2216a8b"],["/gloomhaven/monster-damage-tracker/static/media/retaliate.e0cc69e5.svg","e0cc69e50f55ffcadfe026bf87d5dede"],["/gloomhaven/monster-damage-tracker/static/media/rhomb-2-with-black.66d11fbc.svg","66d11fbc3e7dc0d1343dc72ac5f7c4c0"],["/gloomhaven/monster-damage-tracker/static/media/roboto-latin-100.987b8457.woff2","987b84570ea69ee660455b8d5e91f5f1"],["/gloomhaven/monster-damage-tracker/static/media/roboto-latin-100.e9dbbe8a.woff","e9dbbe8a693dd275c16d32feb101f1c1"],["/gloomhaven/monster-damage-tracker/static/media/roboto-latin-100italic.6232f43d.woff2","6232f43d15b0e7a0bf0fe82e295bdd06"],["/gloomhaven/monster-damage-tracker/static/media/roboto-latin-100italic.d704bb3d.woff","d704bb3d579b7d5e40880c75705c8a71"],["/gloomhaven/monster-damage-tracker/static/media/roboto-latin-300.55536c8e.woff2","55536c8e9e9a532651e3cf374f290ea3"],["/gloomhaven/monster-damage-tracker/static/media/roboto-latin-300.a1471d1d.woff","a1471d1d6431c893582a5f6a250db3f9"],["/gloomhaven/monster-damage-tracker/static/media/roboto-latin-300italic.210a7c78.woff","210a7c781f5a354a0e4985656ab456d9"],["/gloomhaven/monster-damage-tracker/static/media/roboto-latin-300italic.d69924b9.woff2","d69924b98acd849cdeba9fbff3f88ea6"],["/gloomhaven/monster-damage-tracker/static/media/roboto-latin-400.5d4aeb4e.woff2","5d4aeb4e5f5ef754e307d7ffaef688bd"],["/gloomhaven/monster-damage-tracker/static/media/roboto-latin-400.bafb105b.woff","bafb105baeb22d965c70fe52ba6b49d9"],["/gloomhaven/monster-damage-tracker/static/media/roboto-latin-400italic.9680d5a0.woff","9680d5a0c32d2fd084e07bbc4c8b2923"],["/gloomhaven/monster-damage-tracker/static/media/roboto-latin-400italic.d8bcbe72.woff2","d8bcbe724fd6f4ba44d0ee6a2675890f"],["/gloomhaven/monster-damage-tracker/static/media/roboto-latin-500.28546717.woff2","285467176f7fe6bb6a9c6873b3dad2cc"],["/gloomhaven/monster-damage-tracker/static/media/roboto-latin-500.de8b7431.woff","de8b7431b74642e830af4d4f4b513ec9"],["/gloomhaven/monster-damage-tracker/static/media/roboto-latin-500italic.510dec37.woff2","510dec37fa69fba39593e01a469ee018"],["/gloomhaven/monster-damage-tracker/static/media/roboto-latin-500italic.ffcc050b.woff","ffcc050b2d92d4b14a4fcb527ee0bcc8"],["/gloomhaven/monster-damage-tracker/static/media/roboto-latin-700.037d8304.woff2","037d830416495def72b7881024c14b7b"],["/gloomhaven/monster-damage-tracker/static/media/roboto-latin-700.cf6613d1.woff","cf6613d1adf490972c557a8e318e0868"],["/gloomhaven/monster-damage-tracker/static/media/roboto-latin-700italic.010c1aee.woff2","010c1aeee3c6d1cbb1d5761d80353823"],["/gloomhaven/monster-damage-tracker/static/media/roboto-latin-700italic.846d1890.woff","846d1890aee87fde5d8ced8eba360c3a"],["/gloomhaven/monster-damage-tracker/static/media/roboto-latin-900.19b7a0ad.woff2","19b7a0adfdd4f808b53af7e2ce2ad4e5"],["/gloomhaven/monster-damage-tracker/static/media/roboto-latin-900.8c2ade50.woff","8c2ade503b34e31430d6c98aa29a52a3"],["/gloomhaven/monster-damage-tracker/static/media/roboto-latin-900italic.7b770d6c.woff2","7b770d6c53423deb1a8e49d3c9175184"],["/gloomhaven/monster-damage-tracker/static/media/roboto-latin-900italic.bc833e72.woff","bc833e725c137257c2c42a789845d82f"],["/gloomhaven/monster-damage-tracker/static/media/shield.859b3baa.svg","859b3baa5d7744fb0566159449d83fe9"],["/gloomhaven/monster-damage-tracker/static/media/sightless-eye-special-1.83d99185.svg","83d99185291ef4b5b6e4172b5535feb2"],["/gloomhaven/monster-damage-tracker/static/media/sightless-eye-special-2.b39dba33.svg","b39dba3343cb75ed41109e7cdc6f0329"],["/gloomhaven/monster-damage-tracker/static/media/strengthen.ee72246f.svg","ee72246fef0374f6325ef171f46a7111"],["/gloomhaven/monster-damage-tracker/static/media/stun.9dfae759.svg","9dfae759e57ef44c53ef34cf20000bfd"],["/gloomhaven/monster-damage-tracker/static/media/target.cb5d81e7.svg","cb5d81e73c0320f18aad75887afec442"],["/gloomhaven/monster-damage-tracker/static/media/triangle-2-side-with-black.ada60566.svg","ada605665b3ecde019e3dce2738de91a"],["/gloomhaven/monster-damage-tracker/static/media/triangle-2-side.ee68e6ed.svg","ee68e6ed90d00d9cf2a5ea095744d3a5"],["/gloomhaven/monster-damage-tracker/static/media/triangle-3-side-with-corner-black.46c07040.svg","46c070403c4d4d5832f9051fe76d3552"],["/gloomhaven/monster-damage-tracker/static/media/use.ed829f9b.svg","ed829f9b7844218b583088538c59ba87"],["/gloomhaven/monster-damage-tracker/static/media/wound.b07b0aea.svg","b07b0aea854e1d6214e217a3af81a99c"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(e){if(!e.redirected)return Promise.resolve(e);return("body"in e?Promise.resolve(e.body):e.blob()).then(function(a){return new Response(a,{headers:e.headers,status:e.status,statusText:e.statusText})})},createCacheKey=function(e,a,t,r){var c=new URL(e);return r&&c.pathname.match(r)||(c.search+=(c.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),c.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return a.every(function(a){return!a.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],t=e[1],r=new URL(a,self.location),c=createCacheKey(r,hashParamName,t,/\.\w{8}\./);return[r.toString(),c]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var r=new Request(t,{credentials:"same-origin"});return fetch(r).then(function(a){if(!a.ok)throw new Error("Request for "+t+" returned a response with status "+a.status);return cleanResponse(a).then(function(a){return e.put(t,a)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(t){return Promise.all(t.map(function(t){if(!a.has(t.url))return e.delete(t)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var a,t=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching),r="index.html";(a=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,r),a=urlsToCacheKeys.has(t));var c="/gloomhaven/monster-damage-tracker/index.html";!a&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(t=new URL(c,self.location).toString(),a=urlsToCacheKeys.has(t)),a&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(a){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,a),fetch(e.request)}))}});