function darkMode(){const e=window.matchMedia("(prefers-scheme: dark)");e.matches?document.body.classList.add("dark-mode"):document.body.classList.remove("dark-mode"),e.addEventListener("change",()=>{e.matches?document.body.classList.add("dark-mode"):document.body.classList.remove("dark-mode")});document.querySelector(".dark-mode-boton").addEventListener("click",activeDrakMode)}function activeDrakMode(){document.body.classList.toggle("dark-mode")}function eventListeners(){document.querySelector(".movil-menu").addEventListener("click",navegacionResponsive)}function navegacionResponsive(){document.querySelector(".navegacion").classList.toggle("mostar")}
/*! modernizr 3.6.0 (Custom Build) | MIT *
 * https://modernizr.com/download/?-webp-setclasses !*/document.addEventListener("DOMContentLoaded",()=>{eventListeners(),darkMode()}),function(e,n,o){function t(e,n){return typeof e===n}function A(e){var n=l.className,o=c._config.classPrefix||"";if(u&&(n=n.baseVal),c._config.enableJSClass){var t=new RegExp("(^|\\s)"+o+"no-js(\\s|$)");n=n.replace(t,"$1"+o+"js$2")}c._config.enableClasses&&(n+=" "+o+e.join(" "+o),u?l.className.baseVal=n:l.className=n)}function a(e,n){if("object"==typeof e)for(var o in e)d(e,o)&&a(o,e[o]);else{var t=(e=e.toLowerCase()).split("."),s=c[t[0]];if(2==t.length&&(s=s[t[1]]),void 0!==s)return c;n="function"==typeof n?n():n,1==t.length?c[t[0]]=n:(!c[t[0]]||c[t[0]]instanceof Boolean||(c[t[0]]=new Boolean(c[t[0]])),c[t[0]][t[1]]=n),A([(n&&0!=n?"":"no-")+t.join("-")]),c._trigger(e,n)}return c}var s=[],i=[],r={_version:"3.6.0",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,n){var o=this;setTimeout((function(){n(o[e])}),0)},addTest:function(e,n,o){i.push({name:e,fn:n,options:o})},addAsyncTest:function(e){i.push({name:null,fn:e})}},c=function(){};c.prototype=r,c=new c;var d,l=n.documentElement,u="svg"===l.nodeName.toLowerCase();!function(){var e={}.hasOwnProperty;d=t(e,"undefined")||t(e.call,"undefined")?function(e,n){return n in e&&t(e.constructor.prototype[n],"undefined")}:function(n,o){return e.call(n,o)}}(),r._l={},r.on=function(e,n){this._l[e]||(this._l[e]=[]),this._l[e].push(n),c.hasOwnProperty(e)&&setTimeout((function(){c._trigger(e,c[e])}),0)},r._trigger=function(e,n){if(this._l[e]){var o=this._l[e];setTimeout((function(){var e;for(e=0;e<o.length;e++)(0,o[e])(n)}),0),delete this._l[e]}},c._q.push((function(){r.addTest=a})),c.addAsyncTest((function(){function e(e,n,o){function t(n){var t=!(!n||"load"!==n.type)&&1==A.width;a(e,"webp"===e&&t?new Boolean(t):t),o&&o(n)}var A=new Image;A.onerror=t,A.onload=t,A.src=n}var n=[{uri:"data:image/webp;base64,UklGRiQAAABXRUJQVlA4IBgAAAAwAQCdASoBAAEAAwA0JaQAA3AA/vuUAAA=",name:"webp"},{uri:"data:image/webp;base64,UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAABBxAR/Q9ERP8DAABWUDggGAAAADABAJ0BKgEAAQADADQlpAADcAD++/1QAA==",name:"webp.alpha"},{uri:"data:image/webp;base64,UklGRlIAAABXRUJQVlA4WAoAAAASAAAAAAAAAAAAQU5JTQYAAAD/////AABBTk1GJgAAAAAAAAAAAAAAAAAAAGQAAABWUDhMDQAAAC8AAAAQBxAREYiI/gcA",name:"webp.animation"},{uri:"data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA=",name:"webp.lossless"}],o=n.shift();e(o.name,o.uri,(function(o){if(o&&"load"===o.type)for(var t=0;t<n.length;t++)e(n[t].name,n[t].uri)}))})),function(){var e,n,o,A,a,r;for(var d in i)if(i.hasOwnProperty(d)){if(e=[],(n=i[d]).name&&(e.push(n.name.toLowerCase()),n.options&&n.options.aliases&&n.options.aliases.length))for(o=0;o<n.options.aliases.length;o++)e.push(n.options.aliases[o].toLowerCase());for(A=t(n.fn,"function")?n.fn():n.fn,a=0;a<e.length;a++)1===(r=e[a].split(".")).length?c[r[0]]=A:(!c[r[0]]||c[r[0]]instanceof Boolean||(c[r[0]]=new Boolean(c[r[0]])),c[r[0]][r[1]]=A),s.push((A?"":"no-")+r.join("-"))}}(),A(s),delete r.addTest,delete r.addAsyncTest;for(var f=0;f<c._q.length;f++)c._q[f]();e.Modernizr=c}(window,document);
//# sourceMappingURL=bundle.js.map
