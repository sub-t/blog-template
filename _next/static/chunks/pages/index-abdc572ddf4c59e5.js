(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8312:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return r(5540)}])},8572:function(e,t,r){"use strict";r.d(t,{E:function(){return c}});var n=r(5893),a=r(9352),i=function(e){return new Date(e).toLocaleDateString("ja-JP",{year:"numeric",month:"2-digit",day:"2-digit"})},c=function(e){var t=e.date;return(0,n.jsxs)("div",{className:"select-none hstack gap-2 text-md font-medium text-accent-1",children:[(0,n.jsx)(a.N$g,{}),i(t)]})}},3759:function(e,t,r){"use strict";r.d(t,{E:function(){return l}});var n=r(5893),a=r(7294),i=r(1891);function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=a.forwardRef((function(e,t){var r=e.children,a=e.src,l=e.alt,o=s(e,["children","src","alt"]),u=(0,i.O)()+a;return(0,n.jsx)("img",function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){c(e,t,r[t])}))}return e}({src:u,alt:l},o,{ref:t,children:r}))}));l.displayName="Image"},6965:function(e,t,r){"use strict";r.d(t,{N:function(){return s}});var n=r(5893),a=r(3759),i=r(4929),c=r(4759),s=function(){return(0,n.jsxs)("div",{className:"select-none vstack items-center gap-5 p-6 bg-primary-1",children:[(0,n.jsxs)("div",{className:"vstack items-center gap-2",children:[(0,n.jsx)(a.E,{className:"object-cover w-28 h-28 rounded-full",alt:"avatar",src:"/assets/author.png"}),(0,n.jsx)("h1",{className:"text-2xl font-semibold text-primary-1",children:"Next.js"})]}),(0,n.jsx)("p",{className:"text-primary-1",children:"Modern JavaScript Framework: hybrid static & server rendering, TypeScript support, smart bundling, route pre-fetching..."}),(0,n.jsx)("div",{className:"flex gap-4",children:c.e.map((function(e){var t=e.href,r=e.icon;return(0,n.jsx)(i.r,{href:t,passHref:!0,children:(0,n.jsx)("a",{className:"text-primary-1",children:r})},t)}))})]})}},1362:function(e,t,r){"use strict";r.d(t,{f:function(){return l}});var n=r(5893),a=r(8572),i=r(3759),c=r(4929),s=function(e){var t=e.title,r=e.coverImage,s=e.date,l=e.excerpt,o=e.slug;return(0,n.jsx)(c.r,{href:"/posts/".concat(o),children:(0,n.jsxs)("a",{className:"select-none overflow-hidden w-full h-full vstack md:flex-row cursor-pointer focus:outline-2 ",children:[(0,n.jsx)("div",{className:"center w-full md:w-1/3 h-52 md:h-full bg-neutral-50 md:bg-transparent",children:(0,n.jsx)(i.E,{src:r,alt:"Cover Image for ".concat(t),className:"w-full max-w-xs h-full object-cover"})}),(0,n.jsxs)("div",{className:"md:w-2/3 p-4 md:p-6 vstack gap-2 bg-primary-1",children:[(0,n.jsx)(a.E,{date:s}),(0,n.jsx)("h3",{className:"text-primary-1 text-xl font-medium",children:t}),(0,n.jsx)("p",{className:"text-neutral-700 dark:text-neutral-300 font-normal text-md line-clamp-2 md:line-clamp-3",children:l})]})]})})},l=function(e){var t=e.posts;return(0,n.jsxs)("section",{children:[(0,n.jsx)("h2",{className:"text-primary-1 mb-8 text-3xl md:text-4xl font-bold tracking-tighter leading-tight",children:"Stories"}),(0,n.jsx)("div",{className:"grid grid-cols-1 gap-10",children:t.map((function(e){return(0,n.jsx)(s,{title:e.title,coverImage:e.coverImage,date:e.date,slug:e.slug,excerpt:e.excerpt},e.slug)}))})]})}},5540:function(e,t,r){"use strict";r.r(t),r.d(t,{__N_SSG:function(){return x},default:function(){return h}});var n=r(5893),a=r(4929),i=r(2981),c=r(6965),s=(r(7294),r(8820)),l=(0,r(3746).E)(s.g7),o={initial:{},hover:{}},u={initial:{opacity:0},hover:{opacity:1}},d=function(){return(0,n.jsx)(l,{variants:o,transition:{staggerChildren:.1},initial:"initial",whileHover:"hover",children:(0,n.jsxs)("div",{className:"center gap-2 py-3 px-4 rounded-lg text-md font-normal bg-teal-700 text-white",children:[(0,n.jsx)("div",{className:"w-10"}),"\u3082\u3063\u3068\u898b\u308b",(0,n.jsx)("div",{className:"hstack",children:Array.from({length:3}).map((function(e,t){return(0,n.jsx)(l,{variants:u,children:(0,n.jsx)("div",{children:">"})},t)}))})]})})},f=r(1362),m=function(e){var t=e.posts;return(0,n.jsx)(i.Z,{main:(0,n.jsxs)("div",{className:"vstack gap-12 p-8 bg-primary-1",children:[(0,n.jsx)(f.f,{posts:t}),(0,n.jsx)(a.r,{href:"/posts/page/1",passHref:!0,children:(0,n.jsx)("a",{children:(0,n.jsx)(d,{})})})]}),aside:(0,n.jsx)(c.N,{})})};function p(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var x=!0,h=function(e){return(0,n.jsx)(m,function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){p(e,t,r[t])}))}return e}({},e))}}},function(e){e.O(0,[774,888,179],(function(){return t=8312,e(e.s=t);var t}));var t=e.O();_N_E=t}]);