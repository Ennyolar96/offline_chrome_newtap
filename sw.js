if(!self.define){let e,s={};const i=(i,r)=>(i=new URL(i+".js",r).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(r,t)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(s[n])return;let o={};const c=e=>i(e,n),f={module:{uri:n},exports:o,require:c};s[n]=Promise.all(r.map((e=>f[e]||c(e)))).then((e=>(t(...e),o)))}}define(["./workbox-7e8b9001"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"asset/afternoon.jpg",revision:"d3b81c7262f82721835d03ae829def4c"},{url:"asset/default.jpg",revision:"77049605bb7018eb45ce65695559caac"},{url:"asset/evening.jpg",revision:"1e759187eef9aac7dcf79c31c3dff962"},{url:"asset/morning.jpg",revision:"a85d338da8266649722f5e46036cd0a0"},{url:"index.html",revision:"7ac4ba9e4f7590f0350c6e34718b77ce"},{url:"style.css",revision:"123ada304cab29e3793e040cbf71be11"}],{ignoreURLParametersMatching:[/^utm_/,/^fbclid$/]})}));
//# sourceMappingURL=sw.js.map