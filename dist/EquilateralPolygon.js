parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"J4Nk":[function(require,module,exports) {
"use strict";var r=Object.getOwnPropertySymbols,t=Object.prototype.hasOwnProperty,e=Object.prototype.propertyIsEnumerable;function n(r){if(null==r)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(r)}function o(){try{if(!Object.assign)return!1;var r=new String("abc");if(r[5]="de","5"===Object.getOwnPropertyNames(r)[0])return!1;for(var t={},e=0;e<10;e++)t["_"+String.fromCharCode(e)]=e;if("0123456789"!==Object.getOwnPropertyNames(t).map(function(r){return t[r]}).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach(function(r){n[r]=r}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(o){return!1}}module.exports=o()?Object.assign:function(o,c){for(var a,i,s=n(o),f=1;f<arguments.length;f++){for(var u in a=Object(arguments[f]))t.call(a,u)&&(s[u]=a[u]);if(r){i=r(a);for(var b=0;b<i.length;b++)e.call(a,i[b])&&(s[i[b]]=a[i[b]])}}return s};
},{}],"awqi":[function(require,module,exports) {
"use strict";var e=require("object-assign"),t="function"==typeof Symbol&&Symbol.for,r=t?Symbol.for("react.element"):60103,n=t?Symbol.for("react.portal"):60106,o=t?Symbol.for("react.fragment"):60107,u=t?Symbol.for("react.strict_mode"):60108,l=t?Symbol.for("react.profiler"):60114,f=t?Symbol.for("react.provider"):60109,c=t?Symbol.for("react.context"):60110,i=t?Symbol.for("react.forward_ref"):60112,a=t?Symbol.for("react.suspense"):60113,s=t?Symbol.for("react.suspense_list"):60120,p=t?Symbol.for("react.memo"):60115,y=t?Symbol.for("react.lazy"):60116;t&&Symbol.for("react.fundamental"),t&&Symbol.for("react.responder"),t&&Symbol.for("react.scope");var d="function"==typeof Symbol&&Symbol.iterator;function m(e){for(var t=e.message,r="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)r+="&args[]="+encodeURIComponent(arguments[n]);return e.message="Minified React error #"+t+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings. ",e}var v={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},h={};function b(e,t,r){this.props=e,this.context=t,this.refs=h,this.updater=r||v}function S(){}function _(e,t,r){this.props=e,this.context=t,this.refs=h,this.updater=r||v}b.prototype.isReactComponent={},b.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw m(Error(85));this.updater.enqueueSetState(this,e,t,"setState")},b.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},S.prototype=b.prototype;var g=_.prototype=new S;g.constructor=_,e(g,b.prototype),g.isPureReactComponent=!0;var k={current:null},$={suspense:null},w={current:null},C=Object.prototype.hasOwnProperty,E={key:!0,ref:!0,__self:!0,__source:!0};function R(e,t,n){var o,u={},l=null,f=null;if(null!=t)for(o in void 0!==t.ref&&(f=t.ref),void 0!==t.key&&(l=""+t.key),t)C.call(t,o)&&!E.hasOwnProperty(o)&&(u[o]=t[o]);var c=arguments.length-2;if(1===c)u.children=n;else if(1<c){for(var i=Array(c),a=0;a<c;a++)i[a]=arguments[a+2];u.children=i}if(e&&e.defaultProps)for(o in c=e.defaultProps)void 0===u[o]&&(u[o]=c[o]);return{$$typeof:r,type:e,key:l,ref:f,props:u,_owner:w.current}}function x(e,t){return{$$typeof:r,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function P(e){return"object"==typeof e&&null!==e&&e.$$typeof===r}function j(e){var t={"=":"=0",":":"=2"};return"$"+(""+e).replace(/[=:]/g,function(e){return t[e]})}var O=/\/+/g,A=[];function I(e,t,r,n){if(A.length){var o=A.pop();return o.result=e,o.keyPrefix=t,o.func=r,o.context=n,o.count=0,o}return{result:e,keyPrefix:t,func:r,context:n,count:0}}function U(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,10>A.length&&A.push(e)}function q(e,t,o,u){var l=typeof e;"undefined"!==l&&"boolean"!==l||(e=null);var f=!1;if(null===e)f=!0;else switch(l){case"string":case"number":f=!0;break;case"object":switch(e.$$typeof){case r:case n:f=!0}}if(f)return o(u,e,""===t?"."+F(e,0):t),1;if(f=0,t=""===t?".":t+":",Array.isArray(e))for(var c=0;c<e.length;c++){var i=t+F(l=e[c],c);f+=q(l,i,o,u)}else if(null===e||"object"!=typeof e?i=null:i="function"==typeof(i=d&&e[d]||e["@@iterator"])?i:null,"function"==typeof i)for(e=i.call(e),c=0;!(l=e.next()).done;)f+=q(l=l.value,i=t+F(l,c++),o,u);else if("object"===l)throw o=""+e,m(Error(31),"[object Object]"===o?"object with keys {"+Object.keys(e).join(", ")+"}":o,"");return f}function L(e,t,r){return null==e?0:q(e,"",t,r)}function F(e,t){return"object"==typeof e&&null!==e&&null!=e.key?j(e.key):t.toString(36)}function M(e,t){e.func.call(e.context,t,e.count++)}function D(e,t,r){var n=e.result,o=e.keyPrefix;e=e.func.call(e.context,t,e.count++),Array.isArray(e)?V(e,n,r,function(e){return e}):null!=e&&(P(e)&&(e=x(e,o+(!e.key||t&&t.key===e.key?"":(""+e.key).replace(O,"$&/")+"/")+r)),n.push(e))}function V(e,t,r,n,o){var u="";null!=r&&(u=(""+r).replace(O,"$&/")+"/"),L(e,D,t=I(t,u,n,o)),U(t)}function B(){var e=k.current;if(null===e)throw m(Error(321));return e}var N={Children:{map:function(e,t,r){if(null==e)return e;var n=[];return V(e,n,null,t,r),n},forEach:function(e,t,r){if(null==e)return e;L(e,M,t=I(null,null,t,r)),U(t)},count:function(e){return L(e,function(){return null},null)},toArray:function(e){var t=[];return V(e,t,null,function(e){return e}),t},only:function(e){if(!P(e))throw m(Error(143));return e}},createRef:function(){return{current:null}},Component:b,PureComponent:_,createContext:function(e,t){return void 0===t&&(t=null),(e={$$typeof:c,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:f,_context:e},e.Consumer=e},forwardRef:function(e){return{$$typeof:i,render:e}},lazy:function(e){return{$$typeof:y,_ctor:e,_status:-1,_result:null}},memo:function(e,t){return{$$typeof:p,type:e,compare:void 0===t?null:t}},useCallback:function(e,t){return B().useCallback(e,t)},useContext:function(e,t){return B().useContext(e,t)},useEffect:function(e,t){return B().useEffect(e,t)},useImperativeHandle:function(e,t,r){return B().useImperativeHandle(e,t,r)},useDebugValue:function(){},useLayoutEffect:function(e,t){return B().useLayoutEffect(e,t)},useMemo:function(e,t){return B().useMemo(e,t)},useReducer:function(e,t,r){return B().useReducer(e,t,r)},useRef:function(e){return B().useRef(e)},useState:function(e){return B().useState(e)},Fragment:o,Profiler:l,StrictMode:u,Suspense:a,unstable_SuspenseList:s,createElement:R,cloneElement:function(t,n,o){if(null==t)throw m(Error(267),t);var u=e({},t.props),l=t.key,f=t.ref,c=t._owner;if(null!=n){if(void 0!==n.ref&&(f=n.ref,c=w.current),void 0!==n.key&&(l=""+n.key),t.type&&t.type.defaultProps)var i=t.type.defaultProps;for(a in n)C.call(n,a)&&!E.hasOwnProperty(a)&&(u[a]=void 0===n[a]&&void 0!==i?i[a]:n[a])}var a=arguments.length-2;if(1===a)u.children=o;else if(1<a){i=Array(a);for(var s=0;s<a;s++)i[s]=arguments[s+2];u.children=i}return{$$typeof:r,type:t.type,key:l,ref:f,props:u,_owner:c}},createFactory:function(e){var t=R.bind(null,e);return t.type=e,t},isValidElement:P,version:"16.10.2",unstable_withSuspenseConfig:function(e,t){var r=$.suspense;$.suspense=void 0===t?null:t;try{e()}finally{$.suspense=r}},__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:{ReactCurrentDispatcher:k,ReactCurrentBatchConfig:$,ReactCurrentOwner:w,IsSomeRendererActing:{current:!1},assign:e}},T={default:N},z=T&&N||T;module.exports=z.default||z;
},{"object-assign":"J4Nk"}],"1n8/":[function(require,module,exports) {
"use strict";module.exports=require("./cjs/react.production.min.js");
},{"./cjs/react.production.min.js":"awqi"}],"FO+Z":[function(require,module,exports) {
"use strict";function t(t,n){this.x=t,this.y=n}function n(t){return t*Math.PI/180}function e(e,r){if(!("number"==typeof e&&e>=3&&"number"==typeof r&&r>0))return[];for(var u=[],o=360/e,i=new t(r,r),l=null,s=null,f=null,c=null,a=0;a<e;a++)c=n(o*a-90),l=i.x+r*Math.cos(c),s=i.y+r*Math.sin(c),f=new t(l.toFixed(2),s.toFixed(2)),u.push(f);return u}function r(t){return t.reduce(function(n,e,r){return n+=e.x+","+e.y,r!==t.length-1&&(n+=" "),n},"")}Object.defineProperty(exports,"__esModule",{value:!0}),exports.getPointsOfEquilateralPolygon=e,exports.pointsArrayToString=r;
},{}],"iWJm":[function(require,module,exports) {

},{}],"NSNB":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var t=n(require("react")),e=require("./utils.js");function r(){if("function"!=typeof WeakMap)return null;var t=new WeakMap;return r=function(){return t},t}function n(t){if(t&&t.__esModule)return t;var e=r();if(e&&e.has(t))return e.get(t);var n={};if(null!=t){var o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in t)if(Object.prototype.hasOwnProperty.call(t,i)){var u=o?Object.getOwnPropertyDescriptor(t,i):null;u&&(u.get||u.set)?Object.defineProperty(n,i,u):n[i]=t[i]}}return n.default=t,e&&e.set(t,n),n}function o(t){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function u(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function s(t,e,r){return e&&u(t.prototype,e),r&&u(t,r),t}function a(t,e){return!e||"object"!==o(e)&&"function"!=typeof e?l(t):e}function l(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function f(t){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function c(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&p(t,e)}function p(t,e){return(p=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}require("./EquilateralPolygon.css");var y=function(r){function n(t){var e;i(this,n),e=a(this,f(n).call(this));var r=t.sideCount,o=t.size,u=e.getPointsStr(r,o);return e.state={points:u},e}return c(n,t.Component),s(n,[{key:"componentDidUpdate",value:function(t){if(t.sideCount!==this.props.sideCount){var e=this.props,r=e.sideCount,n=e.size,o=this.getPointsStr(r,n);this.setState({points:o})}}},{key:"getPointsStr",value:function(t,r){if("number"==typeof t&&t>=3){var n=r/2,o=(0,e.getPointsOfEquilateralPolygon)(t,n);return(0,e.pointsArrayToString)(o)}}},{key:"render",value:function(){var e=this.props.size,r=this.state.points;return r&&t.default.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",class:"equilateral-polygon-svg",style:{height:e,width:e}},t.default.createElement("polygon",{class:"equilateral-polygon-polygon",points:r}))}}]),n}(),b=y;exports.default=b;
},{"react":"1n8/","./utils.js":"FO+Z","./EquilateralPolygon.css":"iWJm"}]},{},["NSNB"], null)