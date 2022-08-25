(()=>{var r={857:(r,t,e)=>{"use strict";function n(r,t,e){return t in r?Object.defineProperty(r,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):r[t]=e,r}function o(r,t){var e=Object.keys(r);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(r);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(r,t).enumerable}))),e.push.apply(e,n)}return e}function i(r){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{};t%2?o(Object(e),!0).forEach((function(t){n(r,t,e[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(e)):o(Object(e)).forEach((function(t){Object.defineProperty(r,t,Object.getOwnPropertyDescriptor(e,t))}))}return r}function f(r){return"Minified Redux error #"+r+"; visit https://redux.js.org/Errors?code="+r+" for the full message or use the non-minified dev environment for full errors. "}e.r(t),e.d(t,{__DO_NOT_USE__ActionTypes:()=>p,applyMiddleware:()=>d,bindActionCreators:()=>v,combineReducers:()=>s,compose:()=>b,createStore:()=>l,legacy_createStore:()=>y});var u="function"==typeof Symbol&&Symbol.observable||"@@observable",c=function(){return Math.random().toString(36).substring(7).split("").join(".")},p={INIT:"@@redux/INIT"+c(),REPLACE:"@@redux/REPLACE"+c(),PROBE_UNKNOWN_ACTION:function(){return"@@redux/PROBE_UNKNOWN_ACTION"+c()}};function a(r){if("object"!=typeof r||null===r)return!1;for(var t=r;null!==Object.getPrototypeOf(t);)t=Object.getPrototypeOf(t);return Object.getPrototypeOf(r)===t}function l(r,t,e){var n;if("function"==typeof t&&"function"==typeof e||"function"==typeof e&&"function"==typeof arguments[3])throw new Error(f(0));if("function"==typeof t&&void 0===e&&(e=t,t=void 0),void 0!==e){if("function"!=typeof e)throw new Error(f(1));return e(l)(r,t)}if("function"!=typeof r)throw new Error(f(2));var o=r,i=t,c=[],y=c,s=!1;function O(){y===c&&(y=c.slice())}function v(){if(s)throw new Error(f(3));return i}function b(r){if("function"!=typeof r)throw new Error(f(4));if(s)throw new Error(f(5));var t=!0;return O(),y.push(r),function(){if(t){if(s)throw new Error(f(6));t=!1,O();var e=y.indexOf(r);y.splice(e,1),c=null}}}function d(r){if(!a(r))throw new Error(f(7));if(void 0===r.type)throw new Error(f(8));if(s)throw new Error(f(9));try{s=!0,i=o(i,r)}finally{s=!1}for(var t=c=y,e=0;e<t.length;e++)(0,t[e])();return r}function E(r){if("function"!=typeof r)throw new Error(f(10));o=r,d({type:p.REPLACE})}function w(){var r,t=b;return(r={subscribe:function(r){if("object"!=typeof r||null===r)throw new Error(f(11));function e(){r.next&&r.next(v())}return e(),{unsubscribe:t(e)}}})[u]=function(){return this},r}return d({type:p.INIT}),(n={dispatch:d,subscribe:b,getState:v,replaceReducer:E})[u]=w,n}var y=l;function s(r){for(var t=Object.keys(r),e={},n=0;n<t.length;n++){var o=t[n];"function"==typeof r[o]&&(e[o]=r[o])}var i,u=Object.keys(e);try{!function(r){Object.keys(r).forEach((function(t){var e=r[t];if(void 0===e(void 0,{type:p.INIT}))throw new Error(f(12));if(void 0===e(void 0,{type:p.PROBE_UNKNOWN_ACTION()}))throw new Error(f(13))}))}(e)}catch(r){i=r}return function(r,t){if(void 0===r&&(r={}),i)throw i;for(var n=!1,o={},c=0;c<u.length;c++){var p=u[c],a=e[p],l=r[p],y=a(l,t);if(void 0===y)throw t&&t.type,new Error(f(14));o[p]=y,n=n||y!==l}return(n=n||u.length!==Object.keys(r).length)?o:r}}function O(r,t){return function(){return t(r.apply(this,arguments))}}function v(r,t){if("function"==typeof r)return O(r,t);if("object"!=typeof r||null===r)throw new Error(f(16));var e={};for(var n in r){var o=r[n];"function"==typeof o&&(e[n]=O(o,t))}return e}function b(){for(var r=arguments.length,t=new Array(r),e=0;e<r;e++)t[e]=arguments[e];return 0===t.length?function(r){return r}:1===t.length?t[0]:t.reduce((function(r,t){return function(){return r(t.apply(void 0,arguments))}}))}function d(){for(var r=arguments.length,t=new Array(r),e=0;e<r;e++)t[e]=arguments[e];return function(r){return function(){var e=r.apply(void 0,arguments),n=function(){throw new Error(f(15))},o={getState:e.getState,dispatch:function(){return n.apply(void 0,arguments)}},u=t.map((function(r){return r(o)}));return n=b.apply(void 0,u)(e.dispatch),i(i({},e),{},{dispatch:n})}}}},883:r=>{r.exports={INCREMENTO:"INCREMENTO",DECREMENTO:"DECREMENTO"}},518:(r,t,e)=>{const{INCREMENTO:n,DECREMENTO:o}=e(883);r.exports={incremento:null,decremento:null}},616:(r,t,e)=>{const{INCREMENTO:n,DECREMENTO:o}=e(883),i={contador:0};r.exports=function(r=i,t){}}},t={};function e(n){var o=t[n];if(void 0!==o)return o.exports;var i=t[n]={exports:{}};return r[n](i,i.exports,e),i.exports}e.d=(r,t)=>{for(var n in t)e.o(t,n)&&!e.o(r,n)&&Object.defineProperty(r,n,{enumerable:!0,get:t[n]})},e.o=(r,t)=>Object.prototype.hasOwnProperty.call(r,t),e.r=r=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(r,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(r,"__esModule",{value:!0})},(()=>{const{createStore:r}=e(857),{incremento:t,decremento:n}=(e(616),e(518))})()})();