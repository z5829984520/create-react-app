(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[function(t,n){t.exports=React},function(t,n){t.exports=ReactRouterDOM},function(t,n){t.exports=ReactDOM},function(t,n,e){t.exports=e(6)},function(t,n,e){},,function(t,n,e){"use strict";e.r(n);var o=e(0),r=e.n(o),u=e(2),i=e.n(u);e(4);function c(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}function a(t,n){for(var e=0;e<n.length;e++){var o=n[e];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function l(t,n,e){return n&&a(t.prototype,n),e&&a(t,e),t}function f(t){return(f="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function p(t){return(p="function"===typeof Symbol&&"symbol"===f(Symbol.iterator)?function(t){return f(t)}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":f(t)})(t)}function s(t,n){return!n||"object"!==p(n)&&"function"!==typeof n?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):n}function y(t){return(y=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function m(t,n){return(m=Object.setPrototypeOf||function(t,n){return t.__proto__=n,t})(t,n)}function b(t,n){if("function"!==typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(n&&n.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),n&&m(t,n)}var h=e(1),w=function(t){function n(){return c(this,n),s(this,y(n).apply(this,arguments))}return b(n,o["Component"]),l(n,[{key:"render",value:function(){return r.a.createElement("div",null,"One")}}]),n}(),d=function(t){function n(){return c(this,n),s(this,y(n).apply(this,arguments))}return b(n,o["Component"]),l(n,[{key:"render",value:function(){return r.a.createElement("div",null,"Two")}}]),n}(),v=function(t){function n(){return c(this,n),s(this,y(n).apply(this,arguments))}return b(n,o["Component"]),l(n,[{key:"render",value:function(){return r.a.createElement(h.HashRouter,null,r.a.createElement(h.Switch,null,r.a.createElement(h.Route,{path:"/",exact:!0,component:w}),r.a.createElement(h.Route,{path:"/two",component:d})))}}]),n}();Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(t){t.unregister()})}],[[3,1]]]);