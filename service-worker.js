if(!self.define){let e,i={};const r=(r,c)=>(r=new URL(r+".js",c).href,i[r]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=r,e.onload=i,document.head.appendChild(e)}else e=r,importScripts(r),i()})).then((()=>{let e=i[r];if(!e)throw new Error(`Module ${r} didn’t register its module`);return e})));self.define=(c,d)=>{const s=e||("document"in self?document.currentScript.src:"")||location.href;if(i[s])return;let a={};const f=e=>r(e,s),n={module:{uri:s},exports:a,require:f};i[s]=Promise.all(c.map((e=>n[e]||f(e)))).then((e=>(d(...e),a)))}}define(["./workbox-ba07dddf"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"2023/12/22/hello-world-2/index.html",revision:"d6101b676942c0e021f08f3c05608fb6"},{url:"2023/12/22/hello-world/index.html",revision:"87b08ed3207c3c02f436fc1f312a9a4d"},{url:"404.html",revision:"f31442e745b4f2f7518eaa9bb5a31971"},{url:"archives/2023/12/index.html",revision:"790d94a7b1b902e728a68cc5c12aecf6"},{url:"archives/2023/index.html",revision:"c0397115f76caf4a464c7286d57d2b19"},{url:"archives/index.html",revision:"83bdd7a4223aada7a45089174c54a4f4"},{url:"categories/index.html",revision:"f1b5df776830ef46a80e316d663d7225"},{url:"css/index.css",revision:"566c5426d8f7793995fca9742e2ee5fe"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"img/404.jpg",revision:"4ef3cfb882b6dd4128da4c8745e9a507"},{url:"img/favicon.png",revision:"7a8c47cb5a2149c1a1af21e90ecd9ca7"},{url:"img/friend_404.gif",revision:"68af0be9d22722e74665ef44dd532ba8"},{url:"index.html",revision:"9a3256ec3c3b157ff755d8e5d8925f17"},{url:"js/main.js",revision:"960297fafacb19dff1246d71f6dfcf6f"},{url:"js/search/algolia.js",revision:"4491ac1d470a1693a502a9d09034aa21"},{url:"js/search/local-search.js",revision:"9da6b76672a143c8c8449770a8d259f3"},{url:"js/tw_cn.js",revision:"fb4da68124bbafbd2d3da537c80e27ce"},{url:"js/utils.js",revision:"420a15cf446b5670244a9ea05b2bccf0"},{url:"link/index.html",revision:"2a2af671f52fb719c46206084904de67"},{url:"tags/index.html",revision:"e3f1dd3bf87ad8cf3c00ea57bc7047e2"}],{}),e.registerRoute(/^https:\/\/cdn\.example\.com\/.*/,new e.CacheFirst,"GET")}));
//# sourceMappingURL=service-worker.js.map
