(window.webpackJsonp_hyperlink_group=window.webpackJsonp_hyperlink_group||[]).push([[1],{14:function(e,t,r){}}]),function(e){function t(t){for(var n,l,a=t[0],i=t[1],u=t[2],p=0,b=[];p<a.length;p++)l=a[p],Object.prototype.hasOwnProperty.call(o,l)&&o[l]&&b.push(o[l][0]),o[l]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n]);for(s&&s(t);b.length;)b.shift()();return c.push.apply(c,u||[]),r()}function r(){for(var e,t=0;t<c.length;t++){for(var r=c[t],n=!0,a=1;a<r.length;a++){var i=r[a];0!==o[i]&&(n=!1)}n&&(c.splice(t--,1),e=l(l.s=r[0]))}return e}var n={},o={0:0},c=[];function l(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,l),r.l=!0,r.exports}l.m=e,l.c=n,l.d=function(e,t,r){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},l.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(l.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)l.d(r,n,function(t){return e[t]}.bind(null,n));return r},l.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="";var a=window.webpackJsonp_hyperlink_group=window.webpackJsonp_hyperlink_group||[],i=a.push.bind(a);a.push=t,a=a.slice();for(var u=0;u<a.length;u++)t(a[u]);var s=i;c.push([20,1]),r()}([function(e,t){e.exports=window.wp.element},function(e,t){e.exports=window.wp.i18n},function(e,t){e.exports=window.wp.blockEditor},function(e,t,r){var n;!function(){"use strict";var r={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var c=typeof n;if("string"===c||"number"===c)e.push(n);else if(Array.isArray(n)&&n.length){var l=o.apply(null,n);l&&e.push(l)}else if("object"===c)for(var a in n)r.call(n,a)&&n[a]&&e.push(a)}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(n=function(){return o}.apply(t,[]))||(e.exports=n)}()},function(e,t){e.exports=window.wp.primitives},function(e,t){e.exports=window.wp.components},function(e,t){e.exports=function(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e},e.exports.default=e.exports,e.exports.__esModule=!0},function(e,t){e.exports=window.wp.blocks},function(e,t){e.exports=window.wp.keycodes},function(e){e.exports=JSON.parse('{"apiVersion":2,"name":"tiptip/hyperlink-group-block","title":"Hyperlink Group","category":"design","supports":{"html":true,"anchor":true,"align":true,"color":{"background":true,"gradients":true},"spacing":{"maring":true,"padding":true}},"attributes":{"url":{"type":"string","source":"attribute","selector":"a","attribute":"href"},"title":{"type":"string","source":"attribute","selector":"a","attribute":"title"},"linkTarget":{"type":"string","source":"attribute","selector":"a","attribute":"target"},"rel":{"type":"string","source":"attribute","selector":"a","attribute":"rel"},"backgroundColor":{"type":"string"},"textColor":{"type":"string"},"gradient":{"type":"string"}},"textdomain":"hyperlink-group-block","editorScript":"file:./build/index.js","style":"file:./build/style-index.css"}')},function(e,t){function r(){return e.exports=r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},e.exports.default=e.exports,e.exports.__esModule=!0,r.apply(this,arguments)}e.exports=r,e.exports.default=e.exports,e.exports.__esModule=!0},function(e,t,r){var n=r(15),o=r(16),c=r(17),l=r(19);e.exports=function(e,t){return n(e)||o(e,t)||c(e,t)||l()},e.exports.default=e.exports,e.exports.__esModule=!0},function(e,t){e.exports=window.wp.data},,,function(e,t){e.exports=function(e){if(Array.isArray(e))return e},e.exports.default=e.exports,e.exports.__esModule=!0},function(e,t){e.exports=function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var r=[],_n=!0,n=!1,o=void 0;try{for(var c,l=e[Symbol.iterator]();!(_n=(c=l.next()).done)&&(r.push(c.value),!t||r.length!==t);_n=!0);}catch(e){n=!0,o=e}finally{try{_n||null==l.return||l.return()}finally{if(n)throw o}}return r}},e.exports.default=e.exports,e.exports.__esModule=!0},function(e,t,r){var n=r(18);e.exports=function(e,t){if(e){if("string"==typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(e,t):void 0}},e.exports.default=e.exports,e.exports.__esModule=!0},function(e,t){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n},e.exports.default=e.exports,e.exports.__esModule=!0},function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.default=e.exports,e.exports.__esModule=!0},function(e,t,r){"use strict";r.r(t);var n=r(6),o=r.n(n),c=r(0),l=r(3),a=r.n(l),i=r(7),u=r(1),s=r(4),p=Object(c.createElement)(s.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},Object(c.createElement)(s.Path,{d:"M15.6 7.2H14v1.5h1.6c2 0 3.7 1.7 3.7 3.7s-1.7 3.7-3.7 3.7H14v1.5h1.6c2.8 0 5.2-2.3 5.2-5.2 0-2.9-2.3-5.2-5.2-5.2zM4.7 12.4c0-2 1.7-3.7 3.7-3.7H10V7.2H8.4c-2.9 0-5.2 2.3-5.2 5.2 0 2.9 2.3 5.2 5.2 5.2H10v-1.5H8.4c-2 0-3.7-1.7-3.7-3.7zm4.6.9h5.3v-1.5H9.3v1.5z"})),b=r(2),f=(r(14),r(10)),d=r.n(f),g=r(11),m=r.n(g),h=r(12),y=r(5),O=r(8),v=Object(c.createElement)(s.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},Object(c.createElement)(s.Path,{d:"M15.6 7.3h-.7l1.6-3.5-.9-.4-3.9 8.5H9v1.5h2l-1.3 2.8H8.4c-2 0-3.7-1.7-3.7-3.7s1.7-3.7 3.7-3.7H10V7.3H8.4c-2.9 0-5.2 2.3-5.2 5.2 0 2.9 2.3 5.2 5.2 5.2H9l-1.4 3.2.9.4 5.7-12.5h1.4c2 0 3.7 1.7 3.7 3.7s-1.7 3.7-3.7 3.7H14v1.5h1.6c2.9 0 5.2-2.3 5.2-5.2 0-2.9-2.4-5.2-5.2-5.2z"})),k=b.__experimentalUseInnerBlocksProps||b.useInnerBlocksProps,j=b.__experimentalLinkControl||b.LinkControl,w=r(9);function _(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function x(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?_(Object(r),!0).forEach((function(t){o()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):_(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var S=w.name;Object(i.registerBlockType)(S,x(x({},w),{},{icon:p,description:Object(u.__)("Combine blocks into a group wrapped with an hyperlink.","hyperlink-group-block"),keywords:[Object(u.__)("container"),Object(u.__)("wrapper"),Object(u.__)("anchor"),Object(u.__)("a"),Object(u.__)("hyperlink"),Object(u.__)("link"),Object(u.__)("tiptoppress")],deprecated:[x(x({},w),{},{save:function(e){var t=e.attributes,r=e.className,n=t.linkTarget,o=t.rel,l=t.title,i=t.url,u=a()("wp-block-hyperlink-group"),s=a()(r);return Object(c.createElement)("div",b.useBlockProps.save({className:s}),Object(c.createElement)("a",{className:u,href:i,title:l,target:n,rel:o},Object(c.createElement)(b.InnerBlocks.Content,null)))}})],example:{attributes:{style:{color:{text:"#000000",background:"#ffffff"}}},innerBlocks:[{name:"core/paragraph",attributes:{customTextColor:"#cf2e2e",fontSize:"large",content:Object(u.__)("One.")}},{name:"core/paragraph",attributes:{customTextColor:"#ff6900",fontSize:"large",content:Object(u.__)("Two.")}},{name:"core/paragraph",attributes:{customTextColor:"#fcb900",fontSize:"large",content:Object(u.__)("Three.")}},{name:"core/paragraph",attributes:{customTextColor:"#00d084",fontSize:"large",content:Object(u.__)("Four.")}},{name:"core/paragraph",attributes:{customTextColor:"#0693e3",fontSize:"large",content:Object(u.__)("Five.")}},{name:"core/paragraph",attributes:{customTextColor:"#9b51e0",fontSize:"large",content:Object(u.__)("Six.")}}]},transforms:{from:[{type:"block",isMultiBlock:!0,blocks:["*"],__experimentalConvert:function(e){if(1!==e.length||"tiptip/hyperlink-group-block"!==e[0].name){var t=e.map((function(e){return Object(i.createBlock)(e.name,e.attributes,e.innerBlocks)}));return Object(i.createBlock)("tiptip/hyperlink-group-block",{},t)}}}]},edit:function(e){var t=e.attributes,r=e.setAttributes,n=e.isSelected,l=e.clientId,i=t.linkTarget,s=t.rel,f=t.url,g=Object(h.useSelect)((function(e){var t,r=e(b.store),n=r.getBlock,o=r.getSettings,c=n(l);return{hasInnerBlocks:!(!c||!c.innerBlocks.length),themeSupportsLayout:null===(t=o())||void 0===t?void 0:t.supportsLayout}}),[l]).hasInnerBlocks,w=Object(c.useRef)(),_=Object(b.useBlockProps)({ref:w}),x=k(_,{renderAppender:g?void 0:b.InnerBlocks.ButtonBlockAppender}),S=Object(c.useCallback)((function(e){r({rel:e})}),[r]),T=Object(c.useCallback)((function(e){var t=e?"_blank":void 0,n=s;t&&!s?n="noreferrer noopener":t||"noreferrer noopener"!==s||(n=void 0),r({linkTarget:t,rel:n})}),[s,r]);return Object(c.createElement)(c.Fragment,null,Object(c.createElement)("div",d()({},_,{className:a()(_.className)}),Object(c.createElement)((function(e){var t,r=e.isSelected,n=e.url,l=e.setAttributes,a=e.opensInNewTab,i=e.onToggleOpenInNewTab,s=e.anchorRef,f=Object(c.useState)(!1),d=m()(f,2),g=d[0],h=d[1],k=!!n,w=k&&r,_=function(){return h(!0),!1},x=function(){l({url:void 0,linkTarget:void 0,rel:void 0}),h(!1)},S=(g||w)&&Object(c.createElement)(y.Popover,{focusOnMount:!1,position:"bottom center",onClose:function(){return h(!1)},anchorRef:null==s?void 0:s.current},Object(c.createElement)(j,{className:"wp-block-navigation-link__inline-link-input",value:{url:n,opensInNewTab:a},onChange:function(e){var t=e.url,r=void 0===t?"":t,n=e.opensInNewTab;l({url:r}),a!==n&&i(n)}}));return Object(c.createElement)(c.Fragment,null,Object(c.createElement)(b.BlockControls,{group:"block"},!k&&Object(c.createElement)(y.ToolbarButton,{name:"link",icon:p,title:Object(u.__)("Link"),shortcut:O.displayShortcut.primary("k"),onClick:_}),w&&Object(c.createElement)(y.ToolbarButton,{name:"link",icon:v,title:Object(u.__)("Unlink"),shortcut:O.displayShortcut.primaryShift("k"),onClick:x,isActive:!0})),r&&Object(c.createElement)(y.KeyboardShortcuts,{bindGlobal:!0,shortcuts:(t={},o()(t,O.rawShortcut.primary("k"),_),o()(t,O.rawShortcut.primaryShift("k"),x),t)}),S)}),{url:f,setAttributes:r,isSelected:n,opensInNewTab:"_blank"===i,onToggleOpenInNewTab:T,anchorRef:w}),Object(c.createElement)(b.InspectorAdvancedControls,null,Object(c.createElement)(y.TextControl,{label:Object(u.__)("Link rel"),value:s||"",onChange:S})),Object(c.createElement)("a",x)))},save:function(e){var t=e.attributes,r=t.linkTarget,n=t.rel,o=t.title,l=t.url,i=t.className,u=a()("wp-block-hyperlink-group"),s=a()(i);return Object(c.createElement)("a",{className:u,href:l,title:o,target:r,rel:n},Object(c.createElement)("div",b.useBlockProps.save({className:s}),Object(c.createElement)(b.InnerBlocks.Content,null)))}}))}]);