(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[327],{7516:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/tags/[tag]",function(){return r(5884)}])},8572:function(e,t,r){"use strict";r.d(t,{E:function(){return s}});var n=r(5893),c=r(9352),a=function(e){return new Date(e).toLocaleDateString("ja-JP",{year:"numeric",month:"2-digit",day:"2-digit"})},s=function(e){var t=e.date;return(0,n.jsxs)("div",{className:"select-none hstack gap-2 text-md font-medium text-accent-1",children:[(0,n.jsx)(c.N$g,{}),a(t)]})}},3759:function(e,t,r){"use strict";r.d(t,{E:function(){return l}});var n=r(5893),c=r(7294),a=r(1891);function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){if(null==e)return{};var r,n,c=function(e,t){if(null==e)return{};var r,n,c={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(c[r]=e[r]);return c}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(c[r]=e[r])}return c}var l=c.forwardRef((function(e,t){var r=e.children,c=e.src,l=e.alt,o=i(e,["children","src","alt"]),u=(0,a.O)()+c;return(0,n.jsx)("img",function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){s(e,t,r[t])}))}return e}({src:u,alt:l},o,{ref:t,children:r}))}));l.displayName="Image"},6965:function(e,t,r){"use strict";r.d(t,{N:function(){return i}});var n=r(5893),c=r(3759),a=r(4929),s=r(4759),i=function(){return(0,n.jsxs)("div",{className:"select-none vstack items-center gap-5 p-6 bg-primary-1",children:[(0,n.jsxs)("div",{className:"vstack items-center gap-2",children:[(0,n.jsx)(c.E,{className:"object-cover w-28 h-28 rounded-full",alt:"avatar",src:"/assets/author.png"}),(0,n.jsx)("h1",{className:"text-2xl font-semibold text-primary-1",children:"Next.js"})]}),(0,n.jsx)("p",{className:"text-primary-1",children:"Modern JavaScript Framework: hybrid static & server rendering, TypeScript support, smart bundling, route pre-fetching..."}),(0,n.jsx)("div",{className:"flex gap-4",children:s.e.map((function(e){var t=e.href,r=e.icon;return(0,n.jsx)(a.r,{href:t,passHref:!0,children:(0,n.jsx)("a",{className:"text-primary-1",children:r})},t)}))})]})}},1362:function(e,t,r){"use strict";r.d(t,{f:function(){return l}});var n=r(5893),c=r(8572),a=r(3759),s=r(4929),i=function(e){var t=e.title,r=e.coverImage,i=e.date,l=e.excerpt,o=e.slug;return(0,n.jsx)(s.r,{href:"/posts/".concat(o),children:(0,n.jsxs)("a",{className:"select-none overflow-hidden w-full h-full vstack md:flex-row cursor-pointer focus:outline-2 ",children:[(0,n.jsx)("div",{className:"center w-full md:w-1/3 h-52 md:h-full bg-neutral-50 md:bg-transparent",children:(0,n.jsx)(a.E,{src:r,alt:"Cover Image for ".concat(t),className:"w-full max-w-xs h-full object-cover"})}),(0,n.jsxs)("div",{className:"md:w-2/3 p-4 md:p-6 vstack gap-2 bg-primary-1",children:[(0,n.jsx)(c.E,{date:i}),(0,n.jsx)("h3",{className:"text-primary-1 text-xl font-medium",children:t}),(0,n.jsx)("p",{className:"text-neutral-700 dark:text-neutral-300 font-normal text-md line-clamp-2 md:line-clamp-3",children:l})]})]})})},l=function(e){var t=e.posts;return(0,n.jsxs)("section",{children:[(0,n.jsx)("h2",{className:"text-primary-1 mb-8 text-3xl md:text-4xl font-bold tracking-tighter leading-tight",children:"Stories"}),(0,n.jsx)("div",{className:"grid grid-cols-1 gap-10",children:t.map((function(e){return(0,n.jsx)(i,{title:e.title,coverImage:e.coverImage,date:e.date,slug:e.slug,excerpt:e.excerpt},e.slug)}))})]})}},5884:function(e,t,r){"use strict";r.r(t),r.d(t,{__N_SSG:function(){return o},default:function(){return u}});var n=r(5893),c=r(2981),a=r(6965),s=r(1362),i=function(e){var t=e.posts;return(0,n.jsx)(c.Z,{main:(0,n.jsx)("div",{className:"p-8 bg-primary-1",children:(0,n.jsx)(s.f,{posts:t})}),aside:(0,n.jsx)(a.N,{})})};function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var o=!0,u=function(e){return(0,n.jsx)(i,function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){l(e,t,r[t])}))}return e}({},e))}}},function(e){e.O(0,[774,888,179],(function(){return t=7516,e(e.s=t);var t}));var t=e.O();_N_E=t}]);