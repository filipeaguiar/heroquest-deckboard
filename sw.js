if(!self.define){let i,n={};const c=(c,e)=>(c=new URL(c+".js",e).href,n[c]||new Promise((n=>{if("document"in self){const i=document.createElement("script");i.src=c,i.onload=n,document.head.appendChild(i)}else i=c,importScripts(c),n()})).then((()=>{let i=n[c];if(!i)throw new Error(`Module ${c} didn’t register its module`);return i})));self.define=(e,o)=>{const s=i||("document"in self?document.currentScript.src:"")||location.href;if(n[s])return;let r={};const f=i=>c(i,s),a={module:{uri:s},exports:r,require:f};n[s]=Promise.all(e.map((i=>a[i]||f(i)))).then((i=>(o(...i),r)))}}define(["./workbox-b3e22772"],(function(i){"use strict";self.addEventListener("message",(i=>{i.data&&"SKIP_WAITING"===i.data.type&&self.skipWaiting()})),i.precacheAndRoute([{url:"assets/AboutView.404a18b6.js",revision:null},{url:"assets/AboutView.ab071ea6.css",revision:null},{url:"assets/index.4347fce1.js",revision:null},{url:"assets/index.c0f7ad16.css",revision:null},{url:"index.html",revision:"6b562ab39d581de7d5c0185f5e329253"},{url:"pwabuilder-sw.js",revision:"8e3e46b5ef7a183d86da1bf303f76bff"},{url:"registerSW.js",revision:"5596443ef5bb1462a45db8e1cee08099"},{url:"icons/71x71-icon.png",revision:"208294ca85a7b12c05047b0c4f8067a1"},{url:"icons/89x89-icon.png",revision:"e704a6131d7b3243c301f54eb8a5b123"},{url:"icons/107x107-icon.png",revision:"bdae11033917825d3bc597d157f58412"},{url:"icons/142x142-icon.png",revision:"bf6f13d8bae42c433689a70a40a2471a"},{url:"icons/284x284-icon.png",revision:"d8f4dcaec3a1bfe71b8730f134121635"},{url:"icons/150x150-icon.png",revision:"3ca6a84df71d13d9a53d3d5ee9cff507"},{url:"icons/188x188-icon.png",revision:"5b5ee36f2ed26228e44d0f9a0f818221"},{url:"icons/225x225-icon.png",revision:"9c01d7ac3c53f2693ea195328cf7dca6"},{url:"icons/300x300-icon.png",revision:"d65b22e6716e3f96a35dd4021b310067"},{url:"icons/600x600-icon.png",revision:"7d7b6f589988cb81934d896481e8d7ef"},{url:"icons/310x150-icon.png",revision:"1ff8491296b43ccc5d1160c649c5d243"},{url:"icons/388x188-icon.png",revision:"82784eb4a47bacd6d968cccd186cb1e4"},{url:"icons/465x225-icon.png",revision:"c01a10dc048d49f5566ac911d0ba3927"},{url:"icons/620x300-icon.png",revision:"5bc4f4fcecc196688074c48f32f60c1e"},{url:"icons/1240x600-icon.png",revision:"c60bf737b0be85d8ff90960c07952146"},{url:"icons/310x310-icon.png",revision:"7ac01b19fdd6c12f3daf6ece6c1c8116"},{url:"icons/388x388-icon.png",revision:"c5303f930e875e0f8d8eb380b9582917"},{url:"icons/465x465-icon.png",revision:"c17a27fd08ef3f8539a73eeaacef81cc"},{url:"icons/620x620-icon.png",revision:"e1ec4120a2378e726f624c056ced1917"},{url:"icons/1240x1240-icon.png",revision:"ee3939c30884f20c64c066cb523975e4"},{url:"icons/44x44-icon.png",revision:"e630d61f8f01f7eb276b0ad450ea6082"},{url:"icons/55x55-icon.png",revision:"b20a7a7d8a028e348c5d325995755262"},{url:"icons/66x66-icon.png",revision:"ab96bcffd79321d01acee4903109f7b1"},{url:"icons/88x88-icon.png",revision:"e3f45ce547e13767cc4aed9a49d8e657"},{url:"icons/176x176-icon.png",revision:"84932f27d6f2f5d0cae97e40aae83c23"},{url:"icons/50x50-icon.png",revision:"4c369326490e272b3ded5de4c837eb5a"},{url:"icons/63x63-icon.png",revision:"9fb0326c7c6fda11c7973acb1f470d8d"},{url:"icons/75x75-icon.png",revision:"b1392b03a7be8d263739761aca0286f8"},{url:"icons/100x100-icon.png",revision:"7bb2835eadb82670f8a00177873f38d8"},{url:"icons/200x200-icon.png",revision:"955beae47228216b2b59e6b9b5775f87"},{url:"icons/775x375-icon.png",revision:"89981e49b731589a64a91e2490f2ef13"},{url:"icons/930x450-icon.png",revision:"d28dff05482508c042c987d8b789d6b7"},{url:"icons/2480x1200-icon.png",revision:"619f9c1d430a24664d27d4a3dd83ec74"},{url:"icons/16x16-icon.png",revision:"63f5b05bb397a30dd1dd17903e9d576e"},{url:"icons/20x20-icon.png",revision:"c06fca5052806ae855b30e1c6858aa30"},{url:"icons/24x24-icon.png",revision:"1821398e334cf08ca4ba6d5e41fefec4"},{url:"icons/30x30-icon.png",revision:"be44b3258915eef1d60ac99277c479a0"},{url:"icons/32x32-icon.png",revision:"7610682e28f5b1c5c88f5ab914813977"},{url:"icons/36x36-icon.png",revision:"d10355c49f3adb2c77d4981dbacc49cc"},{url:"icons/40x40-icon.png",revision:"88c5c37a670cfa71f88d784a5b848fcb"},{url:"icons/48x48-icon.png",revision:"37b8ec82a301031857d5757b11e95b92"},{url:"icons/60x60-icon.png",revision:"9e8b06ea2df66852d99dc7552e64ab5c"},{url:"icons/64x64-icon.png",revision:"4b138c4e37c85af2bb4b39913c7aceec"},{url:"icons/72x72-icon.png",revision:"2fca61b0035dae0e8cb4ca3b2b009d0b"},{url:"icons/80x80-icon.png",revision:"09847b914731b8a10107555557623f40"},{url:"icons/96x96-icon.png",revision:"ed5051889d7358ff08b4f65f6b422198"},{url:"icons/256x256-icon.png",revision:"f4625bc506b053e38de83554cf974fa0"},{url:"icons/512x512-icon.png",revision:"61975a268e90e8ec142dbbe6147bdf1a"},{url:"icons/192x192-icon.png",revision:"8976aeba58dcf36feb998940248e8b12"},{url:"icons/144x144-icon.png",revision:"96bcaf5c2a9a598299fa863199012596"},{url:"icons/29x29-icon.png",revision:"ba521dc553ff74a3663b2423445cf162"},{url:"icons/57x57-icon.png",revision:"2f4f52d01650471fa199967eb950ab67"},{url:"icons/58x58-icon.png",revision:"ce1d136e9349a909b59ead737ac53ca4"},{url:"icons/76x76-icon.png",revision:"aa439ae96f8eb4ff72a3c797f77072bc"},{url:"icons/87x87-icon.png",revision:"553266bea4ff2e1bcfb754e57487fc59"},{url:"icons/114x114-icon.png",revision:"3a995c176e95334d0e425296f8091527"},{url:"icons/120x120-icon.png",revision:"9d18afea7bf5dfaf941e9471250914ac"},{url:"icons/128x128-icon.png",revision:"2783948caf8ac30e5c7923bca4a02ce2"},{url:"icons/152x152-icon.png",revision:"b926187d22d579654a34a8742209de96"},{url:"icons/167x167-icon.png",revision:"3dbb82ba5871ec1898037c2ebef035a9"},{url:"icons/180x180-icon.png",revision:"78072255a76437eda19ff2e7cd56284d"},{url:"icons/1024x1024-icon.png",revision:"f1822f59db405c696f11fda9175f8a87"},{url:"manifest.webmanifest",revision:"864eb5dabb775af97c0249e8bd83cf06"}],{}),i.cleanupOutdatedCaches(),i.registerRoute(new i.NavigationRoute(i.createHandlerBoundToURL("index.html")))}));
//# sourceMappingURL=sw.js.map
