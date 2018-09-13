/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		0: 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([5,1]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ([
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */
/*!*******************************!*\
  !*** ./dist/vue-tel-input.js ***!
  \*******************************/
/*! no static exports found */
/*! exports used: default */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(setImmediate, clearImmediate, module) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

!function (t, e) {
  "object" == ( false ? undefined : _typeof(exports)) && "object" == ( false ? undefined : _typeof(module)) ? module.exports = e() :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (e),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : undefined;
}(window, function () {
  return function (t) {
    var e = {};

    function n(r) {
      if (e[r]) return e[r].exports;
      var i = e[r] = {
        i: r,
        l: !1,
        exports: {}
      };
      return t[r].call(i.exports, i, i.exports, n), i.l = !0, i.exports;
    }

    return n.m = t, n.c = e, n.d = function (t, e, r) {
      n.o(t, e) || Object.defineProperty(t, e, {
        enumerable: !0,
        get: r
      });
    }, n.r = function (t) {
      "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
        value: "Module"
      }), Object.defineProperty(t, "__esModule", {
        value: !0
      });
    }, n.t = function (t, e) {
      if (1 & e && (t = n(t)), 8 & e) return t;
      if (4 & e && "object" == _typeof(t) && t && t.__esModule) return t;
      var r = Object.create(null);
      if (n.r(r), Object.defineProperty(r, "default", {
        enumerable: !0,
        value: t
      }), 2 & e && "string" != typeof t) for (var i in t) {
        n.d(r, i, function (e) {
          return t[e];
        }.bind(null, i));
      }
      return r;
    }, n.n = function (t) {
      var e = t && t.__esModule ? function () {
        return t.default;
      } : function () {
        return t;
      };
      return n.d(e, "a", e), e;
    }, n.o = function (t, e) {
      return Object.prototype.hasOwnProperty.call(t, e);
    }, n.p = "/", n(n.s = 65);
  }([function (t, e) {
    var n;

    n = function () {
      return this;
    }();

    try {
      n = n || Function("return this")() || (0, eval)("this");
    } catch (t) {
      "object" == (typeof window === "undefined" ? "undefined" : _typeof(window)) && (n = window);
    }

    t.exports = n;
  }, function (t, e, n) {
    t.exports = {
      default: n(94),
      __esModule: !0
    };
  }, function (t, e) {
    var n,
        r,
        i = t.exports = {};

    function o() {
      throw new Error("setTimeout has not been defined");
    }

    function a() {
      throw new Error("clearTimeout has not been defined");
    }

    function d(t) {
      if (n === setTimeout) return setTimeout(t, 0);
      if ((n === o || !n) && setTimeout) return n = setTimeout, setTimeout(t, 0);

      try {
        return n(t, 0);
      } catch (e) {
        try {
          return n.call(null, t, 0);
        } catch (e) {
          return n.call(this, t, 0);
        }
      }
    }

    !function () {
      try {
        n = "function" == typeof setTimeout ? setTimeout : o;
      } catch (t) {
        n = o;
      }

      try {
        r = "function" == typeof clearTimeout ? clearTimeout : a;
      } catch (t) {
        r = a;
      }
    }();
    var s,
        u = [],
        l = !1,
        f = -1;

    function c() {
      l && s && (l = !1, s.length ? u = s.concat(u) : f = -1, u.length && h());
    }

    function h() {
      if (!l) {
        var t = d(c);
        l = !0;

        for (var e = u.length; e;) {
          for (s = u, u = []; ++f < e;) {
            s && s[f].run();
          }

          f = -1, e = u.length;
        }

        s = null, l = !1, function (t) {
          if (r === clearTimeout) return clearTimeout(t);
          if ((r === a || !r) && clearTimeout) return r = clearTimeout, clearTimeout(t);

          try {
            r(t);
          } catch (e) {
            try {
              return r.call(null, t);
            } catch (e) {
              return r.call(this, t);
            }
          }
        }(t);
      }
    }

    function $(t, e) {
      this.fun = t, this.array = e;
    }

    function p() {}

    i.nextTick = function (t) {
      var e = new Array(arguments.length - 1);
      if (arguments.length > 1) for (var n = 1; n < arguments.length; n++) {
        e[n - 1] = arguments[n];
      }
      u.push(new $(t, e)), 1 !== u.length || l || d(h);
    }, $.prototype.run = function () {
      this.fun.apply(null, this.array);
    }, i.title = "browser", i.browser = !0, i.env = {}, i.argv = [], i.version = "", i.versions = {}, i.on = p, i.addListener = p, i.once = p, i.off = p, i.removeListener = p, i.removeAllListeners = p, i.emit = p, i.prependListener = p, i.prependOnceListener = p, i.listeners = function (t) {
      return [];
    }, i.binding = function (t) {
      throw new Error("process.binding is not supported");
    }, i.cwd = function () {
      return "/";
    }, i.chdir = function (t) {
      throw new Error("process.chdir is not supported");
    }, i.umask = function () {
      return 0;
    };
  }, function (t, e, n) {
    "use strict";

    (function (t) {
      var r = n(103),
          i = n(104),
          o = n(46);

      function a() {
        return s.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823;
      }

      function d(t, e) {
        if (a() < e) throw new RangeError("Invalid typed array length");
        return s.TYPED_ARRAY_SUPPORT ? (t = new Uint8Array(e)).__proto__ = s.prototype : (null === t && (t = new s(e)), t.length = e), t;
      }

      function s(t, e, n) {
        if (!(s.TYPED_ARRAY_SUPPORT || this instanceof s)) return new s(t, e, n);

        if ("number" == typeof t) {
          if ("string" == typeof e) throw new Error("If encoding is specified then the first argument must be a string");
          return f(this, t);
        }

        return u(this, t, e, n);
      }

      function u(t, e, n, r) {
        if ("number" == typeof e) throw new TypeError('"value" argument must not be a number');
        return "undefined" != typeof ArrayBuffer && e instanceof ArrayBuffer ? function (t, e, n, r) {
          if (e.byteLength, n < 0 || e.byteLength < n) throw new RangeError("'offset' is out of bounds");
          if (e.byteLength < n + (r || 0)) throw new RangeError("'length' is out of bounds");
          e = void 0 === n && void 0 === r ? new Uint8Array(e) : void 0 === r ? new Uint8Array(e, n) : new Uint8Array(e, n, r);
          s.TYPED_ARRAY_SUPPORT ? (t = e).__proto__ = s.prototype : t = c(t, e);
          return t;
        }(t, e, n, r) : "string" == typeof e ? function (t, e, n) {
          "string" == typeof n && "" !== n || (n = "utf8");
          if (!s.isEncoding(n)) throw new TypeError('"encoding" must be a valid string encoding');
          var r = 0 | $(e, n),
              i = (t = d(t, r)).write(e, n);
          i !== r && (t = t.slice(0, i));
          return t;
        }(t, e, n) : function (t, e) {
          if (s.isBuffer(e)) {
            var n = 0 | h(e.length);
            return 0 === (t = d(t, n)).length ? t : (e.copy(t, 0, 0, n), t);
          }

          if (e) {
            if ("undefined" != typeof ArrayBuffer && e.buffer instanceof ArrayBuffer || "length" in e) return "number" != typeof e.length || function (t) {
              return t != t;
            }(e.length) ? d(t, 0) : c(t, e);
            if ("Buffer" === e.type && o(e.data)) return c(t, e.data);
          }

          throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.");
        }(t, e);
      }

      function l(t) {
        if ("number" != typeof t) throw new TypeError('"size" argument must be a number');
        if (t < 0) throw new RangeError('"size" argument must not be negative');
      }

      function f(t, e) {
        if (l(e), t = d(t, e < 0 ? 0 : 0 | h(e)), !s.TYPED_ARRAY_SUPPORT) for (var n = 0; n < e; ++n) {
          t[n] = 0;
        }
        return t;
      }

      function c(t, e) {
        var n = e.length < 0 ? 0 : 0 | h(e.length);
        t = d(t, n);

        for (var r = 0; r < n; r += 1) {
          t[r] = 255 & e[r];
        }

        return t;
      }

      function h(t) {
        if (t >= a()) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + a().toString(16) + " bytes");
        return 0 | t;
      }

      function $(t, e) {
        if (s.isBuffer(t)) return t.length;
        if ("undefined" != typeof ArrayBuffer && "function" == typeof ArrayBuffer.isView && (ArrayBuffer.isView(t) || t instanceof ArrayBuffer)) return t.byteLength;
        "string" != typeof t && (t = "" + t);
        var n = t.length;
        if (0 === n) return 0;

        for (var r = !1;;) {
          switch (e) {
            case "ascii":
            case "latin1":
            case "binary":
              return n;

            case "utf8":
            case "utf-8":
            case void 0:
              return z(t).length;

            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
              return 2 * n;

            case "hex":
              return n >>> 1;

            case "base64":
              return D(t).length;

            default:
              if (r) return z(t).length;
              e = ("" + e).toLowerCase(), r = !0;
          }
        }
      }

      function p(t, e, n) {
        var r = t[e];
        t[e] = t[n], t[n] = r;
      }

      function _(t, e, n, r, i) {
        if (0 === t.length) return -1;

        if ("string" == typeof n ? (r = n, n = 0) : n > 2147483647 ? n = 2147483647 : n < -2147483648 && (n = -2147483648), n = +n, isNaN(n) && (n = i ? 0 : t.length - 1), n < 0 && (n = t.length + n), n >= t.length) {
          if (i) return -1;
          n = t.length - 1;
        } else if (n < 0) {
          if (!i) return -1;
          n = 0;
        }

        if ("string" == typeof e && (e = s.from(e, r)), s.isBuffer(e)) return 0 === e.length ? -1 : g(t, e, n, r, i);
        if ("number" == typeof e) return e &= 255, s.TYPED_ARRAY_SUPPORT && "function" == typeof Uint8Array.prototype.indexOf ? i ? Uint8Array.prototype.indexOf.call(t, e, n) : Uint8Array.prototype.lastIndexOf.call(t, e, n) : g(t, [e], n, r, i);
        throw new TypeError("val must be string, number or Buffer");
      }

      function g(t, e, n, r, i) {
        var o,
            a = 1,
            d = t.length,
            s = e.length;

        if (void 0 !== r && ("ucs2" === (r = String(r).toLowerCase()) || "ucs-2" === r || "utf16le" === r || "utf-16le" === r)) {
          if (t.length < 2 || e.length < 2) return -1;
          a = 2, d /= 2, s /= 2, n /= 2;
        }

        function u(t, e) {
          return 1 === a ? t[e] : t.readUInt16BE(e * a);
        }

        if (i) {
          var l = -1;

          for (o = n; o < d; o++) {
            if (u(t, o) === u(e, -1 === l ? 0 : o - l)) {
              if (-1 === l && (l = o), o - l + 1 === s) return l * a;
            } else -1 !== l && (o -= o - l), l = -1;
          }
        } else for (n + s > d && (n = d - s), o = n; o >= 0; o--) {
          for (var f = !0, c = 0; c < s; c++) {
            if (u(t, o + c) !== u(e, c)) {
              f = !1;
              break;
            }
          }

          if (f) return o;
        }

        return -1;
      }

      function m(t, e, n, r) {
        n = Number(n) || 0;
        var i = t.length - n;
        r ? (r = Number(r)) > i && (r = i) : r = i;
        var o = e.length;
        if (o % 2 != 0) throw new TypeError("Invalid hex string");
        r > o / 2 && (r = o / 2);

        for (var a = 0; a < r; ++a) {
          var d = parseInt(e.substr(2 * a, 2), 16);
          if (isNaN(d)) return a;
          t[n + a] = d;
        }

        return a;
      }

      function v(t, e, n, r) {
        return F(z(e, t.length - n), t, n, r);
      }

      function y(t, e, n, r) {
        return F(function (t) {
          for (var e = [], n = 0; n < t.length; ++n) {
            e.push(255 & t.charCodeAt(n));
          }

          return e;
        }(e), t, n, r);
      }

      function b(t, e, n, r) {
        return y(t, e, n, r);
      }

      function w(t, e, n, r) {
        return F(D(e), t, n, r);
      }

      function E(t, e, n, r) {
        return F(function (t, e) {
          for (var n, r, i, o = [], a = 0; a < t.length && !((e -= 2) < 0); ++a) {
            n = t.charCodeAt(a), r = n >> 8, i = n % 256, o.push(i), o.push(r);
          }

          return o;
        }(e, t.length - n), t, n, r);
      }

      function k(t, e, n) {
        return 0 === e && n === t.length ? r.fromByteArray(t) : r.fromByteArray(t.slice(e, n));
      }

      function x(t, e, n) {
        n = Math.min(t.length, n);

        for (var r = [], i = e; i < n;) {
          var o,
              a,
              d,
              s,
              u = t[i],
              l = null,
              f = u > 239 ? 4 : u > 223 ? 3 : u > 191 ? 2 : 1;
          if (i + f <= n) switch (f) {
            case 1:
              u < 128 && (l = u);
              break;

            case 2:
              128 == (192 & (o = t[i + 1])) && (s = (31 & u) << 6 | 63 & o) > 127 && (l = s);
              break;

            case 3:
              o = t[i + 1], a = t[i + 2], 128 == (192 & o) && 128 == (192 & a) && (s = (15 & u) << 12 | (63 & o) << 6 | 63 & a) > 2047 && (s < 55296 || s > 57343) && (l = s);
              break;

            case 4:
              o = t[i + 1], a = t[i + 2], d = t[i + 3], 128 == (192 & o) && 128 == (192 & a) && 128 == (192 & d) && (s = (15 & u) << 18 | (63 & o) << 12 | (63 & a) << 6 | 63 & d) > 65535 && s < 1114112 && (l = s);
          }
          null === l ? (l = 65533, f = 1) : l > 65535 && (l -= 65536, r.push(l >>> 10 & 1023 | 55296), l = 56320 | 1023 & l), r.push(l), i += f;
        }

        return function (t) {
          var e = t.length;
          if (e <= S) return String.fromCharCode.apply(String, t);
          var n = "",
              r = 0;

          for (; r < e;) {
            n += String.fromCharCode.apply(String, t.slice(r, r += S));
          }

          return n;
        }(r);
      }

      e.Buffer = s, e.SlowBuffer = function (t) {
        +t != t && (t = 0);
        return s.alloc(+t);
      }, e.INSPECT_MAX_BYTES = 50, s.TYPED_ARRAY_SUPPORT = void 0 !== t.TYPED_ARRAY_SUPPORT ? t.TYPED_ARRAY_SUPPORT : function () {
        try {
          var t = new Uint8Array(1);
          return t.__proto__ = {
            __proto__: Uint8Array.prototype,
            foo: function foo() {
              return 42;
            }
          }, 42 === t.foo() && "function" == typeof t.subarray && 0 === t.subarray(1, 1).byteLength;
        } catch (t) {
          return !1;
        }
      }(), e.kMaxLength = a(), s.poolSize = 8192, s._augment = function (t) {
        return t.__proto__ = s.prototype, t;
      }, s.from = function (t, e, n) {
        return u(null, t, e, n);
      }, s.TYPED_ARRAY_SUPPORT && (s.prototype.__proto__ = Uint8Array.prototype, s.__proto__ = Uint8Array, "undefined" != typeof Symbol && Symbol.species && s[Symbol.species] === s && Object.defineProperty(s, Symbol.species, {
        value: null,
        configurable: !0
      })), s.alloc = function (t, e, n) {
        return function (t, e, n, r) {
          return l(e), e <= 0 ? d(t, e) : void 0 !== n ? "string" == typeof r ? d(t, e).fill(n, r) : d(t, e).fill(n) : d(t, e);
        }(null, t, e, n);
      }, s.allocUnsafe = function (t) {
        return f(null, t);
      }, s.allocUnsafeSlow = function (t) {
        return f(null, t);
      }, s.isBuffer = function (t) {
        return !(null == t || !t._isBuffer);
      }, s.compare = function (t, e) {
        if (!s.isBuffer(t) || !s.isBuffer(e)) throw new TypeError("Arguments must be Buffers");
        if (t === e) return 0;

        for (var n = t.length, r = e.length, i = 0, o = Math.min(n, r); i < o; ++i) {
          if (t[i] !== e[i]) {
            n = t[i], r = e[i];
            break;
          }
        }

        return n < r ? -1 : r < n ? 1 : 0;
      }, s.isEncoding = function (t) {
        switch (String(t).toLowerCase()) {
          case "hex":
          case "utf8":
          case "utf-8":
          case "ascii":
          case "latin1":
          case "binary":
          case "base64":
          case "ucs2":
          case "ucs-2":
          case "utf16le":
          case "utf-16le":
            return !0;

          default:
            return !1;
        }
      }, s.concat = function (t, e) {
        if (!o(t)) throw new TypeError('"list" argument must be an Array of Buffers');
        if (0 === t.length) return s.alloc(0);
        var n;
        if (void 0 === e) for (e = 0, n = 0; n < t.length; ++n) {
          e += t[n].length;
        }
        var r = s.allocUnsafe(e),
            i = 0;

        for (n = 0; n < t.length; ++n) {
          var a = t[n];
          if (!s.isBuffer(a)) throw new TypeError('"list" argument must be an Array of Buffers');
          a.copy(r, i), i += a.length;
        }

        return r;
      }, s.byteLength = $, s.prototype._isBuffer = !0, s.prototype.swap16 = function () {
        var t = this.length;
        if (t % 2 != 0) throw new RangeError("Buffer size must be a multiple of 16-bits");

        for (var e = 0; e < t; e += 2) {
          p(this, e, e + 1);
        }

        return this;
      }, s.prototype.swap32 = function () {
        var t = this.length;
        if (t % 4 != 0) throw new RangeError("Buffer size must be a multiple of 32-bits");

        for (var e = 0; e < t; e += 4) {
          p(this, e, e + 3), p(this, e + 1, e + 2);
        }

        return this;
      }, s.prototype.swap64 = function () {
        var t = this.length;
        if (t % 8 != 0) throw new RangeError("Buffer size must be a multiple of 64-bits");

        for (var e = 0; e < t; e += 8) {
          p(this, e, e + 7), p(this, e + 1, e + 6), p(this, e + 2, e + 5), p(this, e + 3, e + 4);
        }

        return this;
      }, s.prototype.toString = function () {
        var t = 0 | this.length;
        return 0 === t ? "" : 0 === arguments.length ? x(this, 0, t) : function (t, e, n) {
          var r = !1;
          if ((void 0 === e || e < 0) && (e = 0), e > this.length) return "";
          if ((void 0 === n || n > this.length) && (n = this.length), n <= 0) return "";
          if ((n >>>= 0) <= (e >>>= 0)) return "";

          for (t || (t = "utf8");;) {
            switch (t) {
              case "hex":
                return T(this, e, n);

              case "utf8":
              case "utf-8":
                return x(this, e, n);

              case "ascii":
                return A(this, e, n);

              case "latin1":
              case "binary":
                return R(this, e, n);

              case "base64":
                return k(this, e, n);

              case "ucs2":
              case "ucs-2":
              case "utf16le":
              case "utf-16le":
                return C(this, e, n);

              default:
                if (r) throw new TypeError("Unknown encoding: " + t);
                t = (t + "").toLowerCase(), r = !0;
            }
          }
        }.apply(this, arguments);
      }, s.prototype.equals = function (t) {
        if (!s.isBuffer(t)) throw new TypeError("Argument must be a Buffer");
        return this === t || 0 === s.compare(this, t);
      }, s.prototype.inspect = function () {
        var t = "",
            n = e.INSPECT_MAX_BYTES;
        return this.length > 0 && (t = this.toString("hex", 0, n).match(/.{2}/g).join(" "), this.length > n && (t += " ... ")), "<Buffer " + t + ">";
      }, s.prototype.compare = function (t, e, n, r, i) {
        if (!s.isBuffer(t)) throw new TypeError("Argument must be a Buffer");
        if (void 0 === e && (e = 0), void 0 === n && (n = t ? t.length : 0), void 0 === r && (r = 0), void 0 === i && (i = this.length), e < 0 || n > t.length || r < 0 || i > this.length) throw new RangeError("out of range index");
        if (r >= i && e >= n) return 0;
        if (r >= i) return -1;
        if (e >= n) return 1;
        if (e >>>= 0, n >>>= 0, r >>>= 0, i >>>= 0, this === t) return 0;

        for (var o = i - r, a = n - e, d = Math.min(o, a), u = this.slice(r, i), l = t.slice(e, n), f = 0; f < d; ++f) {
          if (u[f] !== l[f]) {
            o = u[f], a = l[f];
            break;
          }
        }

        return o < a ? -1 : a < o ? 1 : 0;
      }, s.prototype.includes = function (t, e, n) {
        return -1 !== this.indexOf(t, e, n);
      }, s.prototype.indexOf = function (t, e, n) {
        return _(this, t, e, n, !0);
      }, s.prototype.lastIndexOf = function (t, e, n) {
        return _(this, t, e, n, !1);
      }, s.prototype.write = function (t, e, n, r) {
        if (void 0 === e) r = "utf8", n = this.length, e = 0;else if (void 0 === n && "string" == typeof e) r = e, n = this.length, e = 0;else {
          if (!isFinite(e)) throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
          e |= 0, isFinite(n) ? (n |= 0, void 0 === r && (r = "utf8")) : (r = n, n = void 0);
        }
        var i = this.length - e;
        if ((void 0 === n || n > i) && (n = i), t.length > 0 && (n < 0 || e < 0) || e > this.length) throw new RangeError("Attempt to write outside buffer bounds");
        r || (r = "utf8");

        for (var o = !1;;) {
          switch (r) {
            case "hex":
              return m(this, t, e, n);

            case "utf8":
            case "utf-8":
              return v(this, t, e, n);

            case "ascii":
              return y(this, t, e, n);

            case "latin1":
            case "binary":
              return b(this, t, e, n);

            case "base64":
              return w(this, t, e, n);

            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
              return E(this, t, e, n);

            default:
              if (o) throw new TypeError("Unknown encoding: " + r);
              r = ("" + r).toLowerCase(), o = !0;
          }
        }
      }, s.prototype.toJSON = function () {
        return {
          type: "Buffer",
          data: Array.prototype.slice.call(this._arr || this, 0)
        };
      };
      var S = 4096;

      function A(t, e, n) {
        var r = "";
        n = Math.min(t.length, n);

        for (var i = e; i < n; ++i) {
          r += String.fromCharCode(127 & t[i]);
        }

        return r;
      }

      function R(t, e, n) {
        var r = "";
        n = Math.min(t.length, n);

        for (var i = e; i < n; ++i) {
          r += String.fromCharCode(t[i]);
        }

        return r;
      }

      function T(t, e, n) {
        var r = t.length;
        (!e || e < 0) && (e = 0), (!n || n < 0 || n > r) && (n = r);

        for (var i = "", o = e; o < n; ++o) {
          i += j(t[o]);
        }

        return i;
      }

      function C(t, e, n) {
        for (var r = t.slice(e, n), i = "", o = 0; o < r.length; o += 2) {
          i += String.fromCharCode(r[o] + 256 * r[o + 1]);
        }

        return i;
      }

      function O(t, e, n) {
        if (t % 1 != 0 || t < 0) throw new RangeError("offset is not uint");
        if (t + e > n) throw new RangeError("Trying to access beyond buffer length");
      }

      function L(t, e, n, r, i, o) {
        if (!s.isBuffer(t)) throw new TypeError('"buffer" argument must be a Buffer instance');
        if (e > i || e < o) throw new RangeError('"value" argument is out of bounds');
        if (n + r > t.length) throw new RangeError("Index out of range");
      }

      function M(t, e, n, r) {
        e < 0 && (e = 65535 + e + 1);

        for (var i = 0, o = Math.min(t.length - n, 2); i < o; ++i) {
          t[n + i] = (e & 255 << 8 * (r ? i : 1 - i)) >>> 8 * (r ? i : 1 - i);
        }
      }

      function I(t, e, n, r) {
        e < 0 && (e = 4294967295 + e + 1);

        for (var i = 0, o = Math.min(t.length - n, 4); i < o; ++i) {
          t[n + i] = e >>> 8 * (r ? i : 3 - i) & 255;
        }
      }

      function B(t, e, n, r, i, o) {
        if (n + r > t.length) throw new RangeError("Index out of range");
        if (n < 0) throw new RangeError("Index out of range");
      }

      function P(t, e, n, r, o) {
        return o || B(t, 0, n, 4), i.write(t, e, n, r, 23, 4), n + 4;
      }

      function N(t, e, n, r, o) {
        return o || B(t, 0, n, 8), i.write(t, e, n, r, 52, 8), n + 8;
      }

      s.prototype.slice = function (t, e) {
        var n,
            r = this.length;
        if (t = ~~t, e = void 0 === e ? r : ~~e, t < 0 ? (t += r) < 0 && (t = 0) : t > r && (t = r), e < 0 ? (e += r) < 0 && (e = 0) : e > r && (e = r), e < t && (e = t), s.TYPED_ARRAY_SUPPORT) (n = this.subarray(t, e)).__proto__ = s.prototype;else {
          var i = e - t;
          n = new s(i, void 0);

          for (var o = 0; o < i; ++o) {
            n[o] = this[o + t];
          }
        }
        return n;
      }, s.prototype.readUIntLE = function (t, e, n) {
        t |= 0, e |= 0, n || O(t, e, this.length);

        for (var r = this[t], i = 1, o = 0; ++o < e && (i *= 256);) {
          r += this[t + o] * i;
        }

        return r;
      }, s.prototype.readUIntBE = function (t, e, n) {
        t |= 0, e |= 0, n || O(t, e, this.length);

        for (var r = this[t + --e], i = 1; e > 0 && (i *= 256);) {
          r += this[t + --e] * i;
        }

        return r;
      }, s.prototype.readUInt8 = function (t, e) {
        return e || O(t, 1, this.length), this[t];
      }, s.prototype.readUInt16LE = function (t, e) {
        return e || O(t, 2, this.length), this[t] | this[t + 1] << 8;
      }, s.prototype.readUInt16BE = function (t, e) {
        return e || O(t, 2, this.length), this[t] << 8 | this[t + 1];
      }, s.prototype.readUInt32LE = function (t, e) {
        return e || O(t, 4, this.length), (this[t] | this[t + 1] << 8 | this[t + 2] << 16) + 16777216 * this[t + 3];
      }, s.prototype.readUInt32BE = function (t, e) {
        return e || O(t, 4, this.length), 16777216 * this[t] + (this[t + 1] << 16 | this[t + 2] << 8 | this[t + 3]);
      }, s.prototype.readIntLE = function (t, e, n) {
        t |= 0, e |= 0, n || O(t, e, this.length);

        for (var r = this[t], i = 1, o = 0; ++o < e && (i *= 256);) {
          r += this[t + o] * i;
        }

        return r >= (i *= 128) && (r -= Math.pow(2, 8 * e)), r;
      }, s.prototype.readIntBE = function (t, e, n) {
        t |= 0, e |= 0, n || O(t, e, this.length);

        for (var r = e, i = 1, o = this[t + --r]; r > 0 && (i *= 256);) {
          o += this[t + --r] * i;
        }

        return o >= (i *= 128) && (o -= Math.pow(2, 8 * e)), o;
      }, s.prototype.readInt8 = function (t, e) {
        return e || O(t, 1, this.length), 128 & this[t] ? -1 * (255 - this[t] + 1) : this[t];
      }, s.prototype.readInt16LE = function (t, e) {
        e || O(t, 2, this.length);
        var n = this[t] | this[t + 1] << 8;
        return 32768 & n ? 4294901760 | n : n;
      }, s.prototype.readInt16BE = function (t, e) {
        e || O(t, 2, this.length);
        var n = this[t + 1] | this[t] << 8;
        return 32768 & n ? 4294901760 | n : n;
      }, s.prototype.readInt32LE = function (t, e) {
        return e || O(t, 4, this.length), this[t] | this[t + 1] << 8 | this[t + 2] << 16 | this[t + 3] << 24;
      }, s.prototype.readInt32BE = function (t, e) {
        return e || O(t, 4, this.length), this[t] << 24 | this[t + 1] << 16 | this[t + 2] << 8 | this[t + 3];
      }, s.prototype.readFloatLE = function (t, e) {
        return e || O(t, 4, this.length), i.read(this, t, !0, 23, 4);
      }, s.prototype.readFloatBE = function (t, e) {
        return e || O(t, 4, this.length), i.read(this, t, !1, 23, 4);
      }, s.prototype.readDoubleLE = function (t, e) {
        return e || O(t, 8, this.length), i.read(this, t, !0, 52, 8);
      }, s.prototype.readDoubleBE = function (t, e) {
        return e || O(t, 8, this.length), i.read(this, t, !1, 52, 8);
      }, s.prototype.writeUIntLE = function (t, e, n, r) {
        (t = +t, e |= 0, n |= 0, r) || L(this, t, e, n, Math.pow(2, 8 * n) - 1, 0);
        var i = 1,
            o = 0;

        for (this[e] = 255 & t; ++o < n && (i *= 256);) {
          this[e + o] = t / i & 255;
        }

        return e + n;
      }, s.prototype.writeUIntBE = function (t, e, n, r) {
        (t = +t, e |= 0, n |= 0, r) || L(this, t, e, n, Math.pow(2, 8 * n) - 1, 0);
        var i = n - 1,
            o = 1;

        for (this[e + i] = 255 & t; --i >= 0 && (o *= 256);) {
          this[e + i] = t / o & 255;
        }

        return e + n;
      }, s.prototype.writeUInt8 = function (t, e, n) {
        return t = +t, e |= 0, n || L(this, t, e, 1, 255, 0), s.TYPED_ARRAY_SUPPORT || (t = Math.floor(t)), this[e] = 255 & t, e + 1;
      }, s.prototype.writeUInt16LE = function (t, e, n) {
        return t = +t, e |= 0, n || L(this, t, e, 2, 65535, 0), s.TYPED_ARRAY_SUPPORT ? (this[e] = 255 & t, this[e + 1] = t >>> 8) : M(this, t, e, !0), e + 2;
      }, s.prototype.writeUInt16BE = function (t, e, n) {
        return t = +t, e |= 0, n || L(this, t, e, 2, 65535, 0), s.TYPED_ARRAY_SUPPORT ? (this[e] = t >>> 8, this[e + 1] = 255 & t) : M(this, t, e, !1), e + 2;
      }, s.prototype.writeUInt32LE = function (t, e, n) {
        return t = +t, e |= 0, n || L(this, t, e, 4, 4294967295, 0), s.TYPED_ARRAY_SUPPORT ? (this[e + 3] = t >>> 24, this[e + 2] = t >>> 16, this[e + 1] = t >>> 8, this[e] = 255 & t) : I(this, t, e, !0), e + 4;
      }, s.prototype.writeUInt32BE = function (t, e, n) {
        return t = +t, e |= 0, n || L(this, t, e, 4, 4294967295, 0), s.TYPED_ARRAY_SUPPORT ? (this[e] = t >>> 24, this[e + 1] = t >>> 16, this[e + 2] = t >>> 8, this[e + 3] = 255 & t) : I(this, t, e, !1), e + 4;
      }, s.prototype.writeIntLE = function (t, e, n, r) {
        if (t = +t, e |= 0, !r) {
          var i = Math.pow(2, 8 * n - 1);
          L(this, t, e, n, i - 1, -i);
        }

        var o = 0,
            a = 1,
            d = 0;

        for (this[e] = 255 & t; ++o < n && (a *= 256);) {
          t < 0 && 0 === d && 0 !== this[e + o - 1] && (d = 1), this[e + o] = (t / a >> 0) - d & 255;
        }

        return e + n;
      }, s.prototype.writeIntBE = function (t, e, n, r) {
        if (t = +t, e |= 0, !r) {
          var i = Math.pow(2, 8 * n - 1);
          L(this, t, e, n, i - 1, -i);
        }

        var o = n - 1,
            a = 1,
            d = 0;

        for (this[e + o] = 255 & t; --o >= 0 && (a *= 256);) {
          t < 0 && 0 === d && 0 !== this[e + o + 1] && (d = 1), this[e + o] = (t / a >> 0) - d & 255;
        }

        return e + n;
      }, s.prototype.writeInt8 = function (t, e, n) {
        return t = +t, e |= 0, n || L(this, t, e, 1, 127, -128), s.TYPED_ARRAY_SUPPORT || (t = Math.floor(t)), t < 0 && (t = 255 + t + 1), this[e] = 255 & t, e + 1;
      }, s.prototype.writeInt16LE = function (t, e, n) {
        return t = +t, e |= 0, n || L(this, t, e, 2, 32767, -32768), s.TYPED_ARRAY_SUPPORT ? (this[e] = 255 & t, this[e + 1] = t >>> 8) : M(this, t, e, !0), e + 2;
      }, s.prototype.writeInt16BE = function (t, e, n) {
        return t = +t, e |= 0, n || L(this, t, e, 2, 32767, -32768), s.TYPED_ARRAY_SUPPORT ? (this[e] = t >>> 8, this[e + 1] = 255 & t) : M(this, t, e, !1), e + 2;
      }, s.prototype.writeInt32LE = function (t, e, n) {
        return t = +t, e |= 0, n || L(this, t, e, 4, 2147483647, -2147483648), s.TYPED_ARRAY_SUPPORT ? (this[e] = 255 & t, this[e + 1] = t >>> 8, this[e + 2] = t >>> 16, this[e + 3] = t >>> 24) : I(this, t, e, !0), e + 4;
      }, s.prototype.writeInt32BE = function (t, e, n) {
        return t = +t, e |= 0, n || L(this, t, e, 4, 2147483647, -2147483648), t < 0 && (t = 4294967295 + t + 1), s.TYPED_ARRAY_SUPPORT ? (this[e] = t >>> 24, this[e + 1] = t >>> 16, this[e + 2] = t >>> 8, this[e + 3] = 255 & t) : I(this, t, e, !1), e + 4;
      }, s.prototype.writeFloatLE = function (t, e, n) {
        return P(this, t, e, !0, n);
      }, s.prototype.writeFloatBE = function (t, e, n) {
        return P(this, t, e, !1, n);
      }, s.prototype.writeDoubleLE = function (t, e, n) {
        return N(this, t, e, !0, n);
      }, s.prototype.writeDoubleBE = function (t, e, n) {
        return N(this, t, e, !1, n);
      }, s.prototype.copy = function (t, e, n, r) {
        if (n || (n = 0), r || 0 === r || (r = this.length), e >= t.length && (e = t.length), e || (e = 0), r > 0 && r < n && (r = n), r === n) return 0;
        if (0 === t.length || 0 === this.length) return 0;
        if (e < 0) throw new RangeError("targetStart out of bounds");
        if (n < 0 || n >= this.length) throw new RangeError("sourceStart out of bounds");
        if (r < 0) throw new RangeError("sourceEnd out of bounds");
        r > this.length && (r = this.length), t.length - e < r - n && (r = t.length - e + n);
        var i,
            o = r - n;
        if (this === t && n < e && e < r) for (i = o - 1; i >= 0; --i) {
          t[i + e] = this[i + n];
        } else if (o < 1e3 || !s.TYPED_ARRAY_SUPPORT) for (i = 0; i < o; ++i) {
          t[i + e] = this[i + n];
        } else Uint8Array.prototype.set.call(t, this.subarray(n, n + o), e);
        return o;
      }, s.prototype.fill = function (t, e, n, r) {
        if ("string" == typeof t) {
          if ("string" == typeof e ? (r = e, e = 0, n = this.length) : "string" == typeof n && (r = n, n = this.length), 1 === t.length) {
            var i = t.charCodeAt(0);
            i < 256 && (t = i);
          }

          if (void 0 !== r && "string" != typeof r) throw new TypeError("encoding must be a string");
          if ("string" == typeof r && !s.isEncoding(r)) throw new TypeError("Unknown encoding: " + r);
        } else "number" == typeof t && (t &= 255);

        if (e < 0 || this.length < e || this.length < n) throw new RangeError("Out of range index");
        if (n <= e) return this;
        var o;
        if (e >>>= 0, n = void 0 === n ? this.length : n >>> 0, t || (t = 0), "number" == typeof t) for (o = e; o < n; ++o) {
          this[o] = t;
        } else {
          var a = s.isBuffer(t) ? t : z(new s(t, r).toString()),
              d = a.length;

          for (o = 0; o < n - e; ++o) {
            this[o + e] = a[o % d];
          }
        }
        return this;
      };
      var U = /[^+\/0-9A-Za-z-_]/g;

      function j(t) {
        return t < 16 ? "0" + t.toString(16) : t.toString(16);
      }

      function z(t, e) {
        var n;
        e = e || 1 / 0;

        for (var r = t.length, i = null, o = [], a = 0; a < r; ++a) {
          if ((n = t.charCodeAt(a)) > 55295 && n < 57344) {
            if (!i) {
              if (n > 56319) {
                (e -= 3) > -1 && o.push(239, 191, 189);
                continue;
              }

              if (a + 1 === r) {
                (e -= 3) > -1 && o.push(239, 191, 189);
                continue;
              }

              i = n;
              continue;
            }

            if (n < 56320) {
              (e -= 3) > -1 && o.push(239, 191, 189), i = n;
              continue;
            }

            n = 65536 + (i - 55296 << 10 | n - 56320);
          } else i && (e -= 3) > -1 && o.push(239, 191, 189);

          if (i = null, n < 128) {
            if ((e -= 1) < 0) break;
            o.push(n);
          } else if (n < 2048) {
            if ((e -= 2) < 0) break;
            o.push(n >> 6 | 192, 63 & n | 128);
          } else if (n < 65536) {
            if ((e -= 3) < 0) break;
            o.push(n >> 12 | 224, n >> 6 & 63 | 128, 63 & n | 128);
          } else {
            if (!(n < 1114112)) throw new Error("Invalid code point");
            if ((e -= 4) < 0) break;
            o.push(n >> 18 | 240, n >> 12 & 63 | 128, n >> 6 & 63 | 128, 63 & n | 128);
          }
        }

        return o;
      }

      function D(t) {
        return r.toByteArray(function (t) {
          if ((t = function (t) {
            return t.trim ? t.trim() : t.replace(/^\s+|\s+$/g, "");
          }(t).replace(U, "")).length < 2) return "";

          for (; t.length % 4 != 0;) {
            t += "=";
          }

          return t;
        }(t));
      }

      function F(t, e, n, r) {
        for (var i = 0; i < r && !(i + n >= e.length || i >= t.length); ++i) {
          e[i + n] = t[i];
        }

        return i;
      }
    }).call(this, n(0));
  }, function (t) {
    t.exports = {
      country_phone_code_to_countries: {
        1: ["US", "AG", "AI", "AS", "BB", "BM", "BS", "CA", "DM", "DO", "GD", "GU", "JM", "KN", "KY", "LC", "MP", "MS", "PR", "SX", "TC", "TT", "VC", "VG", "VI"],
        7: ["RU", "KZ"],
        20: ["EG"],
        27: ["ZA"],
        30: ["GR"],
        31: ["NL"],
        32: ["BE"],
        33: ["FR"],
        34: ["ES"],
        36: ["HU"],
        39: ["IT", "VA"],
        40: ["RO"],
        41: ["CH"],
        43: ["AT"],
        44: ["GB", "GG", "IM", "JE"],
        45: ["DK"],
        46: ["SE"],
        47: ["NO", "SJ"],
        48: ["PL"],
        49: ["DE"],
        51: ["PE"],
        52: ["MX"],
        53: ["CU"],
        54: ["AR"],
        55: ["BR"],
        56: ["CL"],
        57: ["CO"],
        58: ["VE"],
        60: ["MY"],
        61: ["AU", "CC", "CX"],
        62: ["ID"],
        63: ["PH"],
        64: ["NZ"],
        65: ["SG"],
        66: ["TH"],
        81: ["JP"],
        82: ["KR"],
        84: ["VN"],
        86: ["CN"],
        90: ["TR"],
        91: ["IN"],
        92: ["PK"],
        93: ["AF"],
        94: ["LK"],
        95: ["MM"],
        98: ["IR"],
        211: ["SS"],
        212: ["MA", "EH"],
        213: ["DZ"],
        216: ["TN"],
        218: ["LY"],
        220: ["GM"],
        221: ["SN"],
        222: ["MR"],
        223: ["ML"],
        224: ["GN"],
        225: ["CI"],
        226: ["BF"],
        227: ["NE"],
        228: ["TG"],
        229: ["BJ"],
        230: ["MU"],
        231: ["LR"],
        232: ["SL"],
        233: ["GH"],
        234: ["NG"],
        235: ["TD"],
        236: ["CF"],
        237: ["CM"],
        238: ["CV"],
        239: ["ST"],
        240: ["GQ"],
        241: ["GA"],
        242: ["CG"],
        243: ["CD"],
        244: ["AO"],
        245: ["GW"],
        246: ["IO"],
        247: ["AC"],
        248: ["SC"],
        249: ["SD"],
        250: ["RW"],
        251: ["ET"],
        252: ["SO"],
        253: ["DJ"],
        254: ["KE"],
        255: ["TZ"],
        256: ["UG"],
        257: ["BI"],
        258: ["MZ"],
        260: ["ZM"],
        261: ["MG"],
        262: ["RE", "YT"],
        263: ["ZW"],
        264: ["NA"],
        265: ["MW"],
        266: ["LS"],
        267: ["BW"],
        268: ["SZ"],
        269: ["KM"],
        290: ["SH", "TA"],
        291: ["ER"],
        297: ["AW"],
        298: ["FO"],
        299: ["GL"],
        350: ["GI"],
        351: ["PT"],
        352: ["LU"],
        353: ["IE"],
        354: ["IS"],
        355: ["AL"],
        356: ["MT"],
        357: ["CY"],
        358: ["FI", "AX"],
        359: ["BG"],
        370: ["LT"],
        371: ["LV"],
        372: ["EE"],
        373: ["MD"],
        374: ["AM"],
        375: ["BY"],
        376: ["AD"],
        377: ["MC"],
        378: ["SM"],
        380: ["UA"],
        381: ["RS"],
        382: ["ME"],
        385: ["HR"],
        386: ["SI"],
        387: ["BA"],
        389: ["MK"],
        420: ["CZ"],
        421: ["SK"],
        423: ["LI"],
        500: ["FK"],
        501: ["BZ"],
        502: ["GT"],
        503: ["SV"],
        504: ["HN"],
        505: ["NI"],
        506: ["CR"],
        507: ["PA"],
        508: ["PM"],
        509: ["HT"],
        590: ["GP", "BL", "MF"],
        591: ["BO"],
        592: ["GY"],
        593: ["EC"],
        594: ["GF"],
        595: ["PY"],
        596: ["MQ"],
        597: ["SR"],
        598: ["UY"],
        599: ["CW", "BQ"],
        670: ["TL"],
        672: ["NF"],
        673: ["BN"],
        674: ["NR"],
        675: ["PG"],
        676: ["TO"],
        677: ["SB"],
        678: ["VU"],
        679: ["FJ"],
        680: ["PW"],
        681: ["WF"],
        682: ["CK"],
        683: ["NU"],
        685: ["WS"],
        686: ["KI"],
        687: ["NC"],
        688: ["TV"],
        689: ["PF"],
        690: ["TK"],
        691: ["FM"],
        692: ["MH"],
        800: ["001"],
        808: ["001"],
        850: ["KP"],
        852: ["HK"],
        853: ["MO"],
        855: ["KH"],
        856: ["LA"],
        870: ["001"],
        878: ["001"],
        880: ["BD"],
        881: ["001"],
        882: ["001"],
        883: ["001"],
        886: ["TW"],
        888: ["001"],
        960: ["MV"],
        961: ["LB"],
        962: ["JO"],
        963: ["SY"],
        964: ["IQ"],
        965: ["KW"],
        966: ["SA"],
        967: ["YE"],
        968: ["OM"],
        970: ["PS"],
        971: ["AE"],
        972: ["IL"],
        973: ["BH"],
        974: ["QA"],
        975: ["BT"],
        976: ["MN"],
        977: ["NP"],
        979: ["001"],
        992: ["TJ"],
        993: ["TM"],
        994: ["AZ"],
        995: ["GE"],
        996: ["KG"],
        998: ["UZ"]
      },
      countries: {
        AC: ["247", "[46]\\d{4}|[01589]\\d{5}"],
        AD: ["376", "[16]\\d{5,8}|[37-9]\\d{5}", [["(\\d{3})(\\d{3})", "$1 $2", ["[137-9]|6[0-8]"]], ["(\\d{4})(\\d{4})", "$1 $2", ["180", "180[02]"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["690"]]]],
        AE: ["971", "[2-79]\\d{7,8}|800\\d{2,9}", [["([2-4679])(\\d{3})(\\d{4})", "$1 $2 $3", ["[2-4679][2-8]"]], ["(5\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["5"]], ["([479]00)(\\d)(\\d{5})", "$1 $2 $3", ["[479]00"], "$1"], ["([68]00)(\\d{2,9})", "$1 $2", ["[68]00"], "$1"]], "0", "0$1"],
        AF: ["93", "[2-7]\\d{8}", [["([2-7]\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["[2-7]"]]], "0", "0$1"],
        AG: ["1", "[2589]\\d{9}", [["(\\d{3})(\\d{3})(\\d{4})", "($1) $2-$3", null, null, null, "$1-$2-$3"]], "1", null, null, null, null, "268"],
        AI: ["1", "[2589]\\d{9}", [["(\\d{3})(\\d{3})(\\d{4})", "($1) $2-$3", null, null, null, "$1-$2-$3"]], "1", null, null, null, null, "264"],
        AL: ["355", "[2-57]\\d{7}|6\\d{8}|8\\d{5,7}|9\\d{5}", [["(4)(\\d{3})(\\d{4})", "$1 $2 $3", ["4[0-6]"]], ["(6\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["6"]], ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[2358][2-5]|4[7-9]"]], ["(\\d{3})(\\d{3,5})", "$1 $2", ["[235][16-9]|[79]|8[016-9]"]]], "0", "0$1"],
        AM: ["374", "[1-9]\\d{7}", [["(\\d{2})(\\d{6})", "$1 $2", ["1|47"]], ["(\\d{2})(\\d{6})", "$1 $2", ["4[1349]|[5-7]|88|9[1-9]"], "0$1"], ["(\\d{3})(\\d{5})", "$1 $2", ["[23]"]], ["(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["8|90"], "0 $1"]], "0", "(0$1)"],
        AO: ["244", "[29]\\d{8}", [["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3"]]],
        AR: ["54", "11\\d{8}|[2368]\\d{9}|9\\d{10}", [["([68]\\d{2})(\\d{3})(\\d{4})", "$1-$2-$3", ["[68]"]], ["(9)(11)(\\d{4})(\\d{4})", "$2 15-$3-$4", ["911"], null, null, "$1 $2 $3-$4"], ["(9)(\\d{3})(\\d{3})(\\d{4})", "$2 15-$3-$4", ["9(?:2[2-4689]|3[3-8])", "9(?:2(?:2[013]|3[067]|49|6[01346]|8|9[147-9])|3(?:36|4[1-358]|5[138]|6|7[069]|8[013578]))", "9(?:2(?:2(?:0[013-9]|[13])|3(?:0[013-9]|[67])|49|6(?:[0136]|4[0-59])|8|9(?:[19]|44|7[013-9]|8[14]))|3(?:36|4(?:[12]|3[4-6]|[58]4)|5(?:1|3[0-24-689]|8[46])|6|7[069]|8(?:[01]|34|[578][45])))", "9(?:2(?:2(?:0[013-9]|[13])|3(?:0[013-9]|[67])|49|6(?:[0136]|4[0-59])|8|9(?:[19]|44|7[013-9]|8[14]))|3(?:36|4(?:[12]|3(?:4|5[014]|6[1-39])|[58]4)|5(?:1|3[0-24-689]|8[46])|6|7[069]|8(?:[01]|34|[578][45])))"], null, null, "$1 $2 $3-$4"], ["(9)(\\d{4})(\\d{2})(\\d{4})", "$2 15-$3-$4", ["9[23]"], null, null, "$1 $2 $3-$4"], ["(11)(\\d{4})(\\d{4})", "$1 $2-$3", ["11"], null, "true"], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2-$3", ["2(?:2[013]|3[067]|49|6[01346]|8|9[147-9])|3(?:36|4[1-358]|5[138]|6|7[069]|8[013578])", "2(?:2(?:0[013-9]|[13])|3(?:0[013-9]|[67])|49|6(?:[0136]|4[0-59])|8|9(?:[19]|44|7[013-9]|8[14]))|3(?:36|4(?:[12]|3[4-6]|[58]4)|5(?:1|3[0-24-689]|8[46])|6|7[069]|8(?:[01]|34|[578][45]))", "2(?:2(?:0[013-9]|[13])|3(?:0[013-9]|[67])|49|6(?:[0136]|4[0-59])|8|9(?:[19]|44|7[013-9]|8[14]))|3(?:36|4(?:[12]|3(?:4|5[014]|6[1-39])|[58]4)|5(?:1|3[0-24-689]|8[46])|6|7[069]|8(?:[01]|34|[578][45]))"], null, "true"], ["(\\d{4})(\\d{2})(\\d{4})", "$1 $2-$3", ["[23]"], null, "true"]], "0", "0$1", "0?(?:(11|2(?:2(?:02?|[13]|2[13-79]|4[1-6]|5[2457]|6[124-8]|7[1-4]|8[13-6]|9[1267])|3(?:02?|1[467]|2[03-6]|3[13-8]|[49][2-6]|5[2-8]|[67])|4(?:7[3-578]|9)|6(?:[0136]|2[24-6]|4[6-8]?|5[15-8])|80|9(?:0[1-3]|[19]|2\\d|3[1-6]|4[02568]?|5[2-4]|6[2-46]|72?|8[23]?))|3(?:3(?:2[79]|6|8[2578])|4(?:0[0-24-9]|[12]|3[5-8]?|4[24-7]|5[4-68]?|6[02-9]|7[126]|8[2379]?|9[1-36-8])|5(?:1|2[1245]|3[237]?|4[1-46-9]|6[2-4]|7[1-6]|8[2-5]?)|6[24]|7(?:[069]|1[1568]|2[15]|3[145]|4[13]|5[14-8]|7[2-57]|8[126])|8(?:[01]|2[15-7]|3[2578]?|4[13-6]|5[4-8]?|6[1-357-9]|7[36-8]?|8[5-8]?|9[124])))?15)?", "9$1"],
        AS: ["1", "[5689]\\d{9}", [["(\\d{3})(\\d{3})(\\d{4})", "($1) $2-$3", null, null, null, "$1-$2-$3"]], "1", null, null, null, null, "684"],
        AT: ["43", "[1-9]\\d{3,12}", [["(116\\d{3})", "$1", ["116"], "$1"], ["(1)(\\d{3,12})", "$1 $2", ["1"]], ["(5\\d)(\\d{3,5})", "$1 $2", ["5[079]"]], ["(5\\d)(\\d{3})(\\d{3,4})", "$1 $2 $3", ["5[079]"]], ["(5\\d)(\\d{4})(\\d{4,7})", "$1 $2 $3", ["5[079]"]], ["(\\d{3})(\\d{3,10})", "$1 $2", ["(?:31|4)6|51|6(?:5[0-3579]|[6-9])|7(?:[28]0|32)|[89]"]], ["(\\d{4})(\\d{3,9})", "$1 $2", ["2|3(?:1[1-578]|[3-8])|4[2378]|5[2-6]|6(?:[12]|4[1-9]|5[468])|7(?:[24][1-8]|35|[5-79])"]]], "0", "0$1"],
        AU: ["61", "1\\d{4,9}|[2-578]\\d{8}", [["([2378])(\\d{4})(\\d{4})", "$1 $2 $3", ["[2378]"], "(0$1)"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["14|[45]"], "0$1"], ["(16)(\\d{3,4})", "$1 $2", ["16"], "0$1"], ["(16)(\\d{3})(\\d{2,4})", "$1 $2 $3", ["16"], "0$1"], ["(1[389]\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["1[389]0", "1(?:[38]0|9)0"]], ["(180)(2\\d{3})", "$1 $2", ["180", "1802"]], ["(19\\d)(\\d{3})", "$1 $2", ["19[13]"]], ["(19\\d{2})(\\d{4})", "$1 $2", ["19[679]"]], ["(13)(\\d{2})(\\d{2})", "$1 $2 $3", ["13[1-9]"]]], "0", null, null, null, null, null, ["[237]\\d{8}|8(?:51(?:0(?:0[03-9]|[1247]\\d|3[2-9]|5[0-8]|6[1-9]|8[0-6])|1(?:1[69]|[23]\\d|4[0-4]))|[6-8]\\d{4}|9(?:[02-9]\\d{3}|1(?:[0-57-9]\\d{2}|6[0135-9]\\d)))\\d{3}", "14(?:5\\d|71)\\d{5}|4(?:[0-3]\\d|4[047-9]|5[0-25-9]|6[6-9]|7[02-9]|8[12457-9]|9[017-9])\\d{6}", "180(?:0\\d{3}|2)\\d{3}", "19(?:0[0126]\\d|[679])\\d{5}", "500\\d{6}", null, null, "16\\d{3,7}", "550\\d{6}", "13(?:00\\d{3}|45[0-4]|\\d)\\d{3}"]],
        AW: ["297", "[25-9]\\d{6}", [["(\\d{3})(\\d{4})", "$1 $2"]]],
        AX: ["358", "1\\d{5,11}|[35]\\d{5,9}|2\\d{4,9}|4\\d{5,10}|6\\d{7,9}|7\\d{4,9}|8\\d{6,9}", [["(\\d{3})(\\d{3,7})", "$1 $2", ["(?:[1-3]0|[6-8])0"]], ["(75\\d{3})", "$1", ["75[12]"]], ["(116\\d{3})", "$1", ["116"], "$1"], ["(\\d{2})(\\d{4,10})", "$1 $2", ["[14]|2[09]|50|7[135]"]], ["(\\d)(\\d{4,11})", "$1 $2", ["[25689][1-8]|3"]]], "0", null, null, null, null, null, ["18[1-8]\\d{3,9}", "4\\d{5,10}|50\\d{4,8}", "800\\d{4,7}", "[67]00\\d{5,6}", null, null, "[13]0\\d{4,8}|2(?:0(?:[016-8]\\d{3,7}|[2-59]\\d{2,7})|9\\d{4,8})|60(?:[12]\\d{5,6}|6\\d{7})|7(?:1\\d{7}|3\\d{8}|5[03-9]\\d{2,7})"]],
        AZ: ["994", "[1-9]\\d{8}", [["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["1[28]|2(?:[0-36]|[45]2)|365"]], ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[4-8]"], "0$1"], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["9"], "0$1"]], "0", "(0$1)"],
        BA: ["387", "[3-9]\\d{7,8}", [["(\\d{2})(\\d{3})(\\d{3})", "$1 $2-$3", ["[3-5]"]], ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["6[1-356]|[7-9]"]], ["(\\d{2})(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3 $4", ["6[047]"]]], "0", "0$1"],
        BB: ["1", "[2589]\\d{9}", [["(\\d{3})(\\d{3})(\\d{4})", "($1) $2-$3", null, null, null, "$1-$2-$3"]], "1", null, null, null, null, "246"],
        BD: ["880", "[2-79]\\d{5,9}|1\\d{9}|8[0-7]\\d{4,8}", [["(2)(\\d{7,8})", "$1-$2", ["2"]], ["(\\d{2})(\\d{4,6})", "$1-$2", ["[3-79]1"]], ["(\\d{4})(\\d{3,6})", "$1-$2", ["1|3(?:0|[2-58]2)|4(?:0|[25]2|3[23]|[4689][25])|5(?:[02-578]2|6[25])|6(?:[0347-9]2|[26][25])|7[02-9]2|8(?:[023][23]|[4-7]2)|9(?:[02][23]|[458]2|6[016])"]], ["(\\d{3})(\\d{3,7})", "$1-$2", ["[3-79][2-9]|8"]]], "0", "0$1"],
        BE: ["32", "[1-9]\\d{7,8}", [["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["4[6-9]"]], ["(\\d)(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[23]|4[23]|9[2-4]"]], ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[156]|7[018]|8(?:0[1-9]|[1-79])"]], ["(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["(?:80|9)0"]]], "0", "0$1"],
        BF: ["226", "[25-7]\\d{7}", [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4"]]],
        BG: ["359", "[23567]\\d{5,7}|[489]\\d{6,8}", [["(2)(\\d)(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["2"]], ["(2)(\\d{3})(\\d{3,4})", "$1 $2 $3", ["2"]], ["(\\d{3})(\\d{4})", "$1 $2", ["43[124-7]|70[1-9]"]], ["(\\d{3})(\\d{3})(\\d{2})", "$1 $2 $3", ["43[124-7]|70[1-9]"]], ["(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["[78]00"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["99[69]"]], ["(\\d{2})(\\d{3})(\\d{2,3})", "$1 $2 $3", ["[356]|4[124-7]|7[1-9]|8[1-6]|9[1-7]"]], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["48|8[7-9]|9[08]"]]], "0", "0$1"],
        BH: ["973", "[136-9]\\d{7}", [["(\\d{4})(\\d{4})", "$1 $2"]]],
        BI: ["257", "[267]\\d{7}", [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4"]]],
        BJ: ["229", "[2689]\\d{7}", [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[2689]"]]]],
        BL: ["590", "[56]\\d{8}", [["([56]\\d{2})(\\d{2})(\\d{4})", "$1 $2-$3", ["590|69[01]"]]], "0", null, null, null, null, null, ["590(?:2[7-9]|5[12]|87)\\d{4}", "69(?:0\\d{2}|1(?:2[29]|3[0-5]))\\d{4}"]],
        BM: ["1", "[4589]\\d{9}", [["(\\d{3})(\\d{3})(\\d{4})", "($1) $2-$3", null, null, null, "$1-$2-$3"]], "1", null, null, null, null, "441"],
        BN: ["673", "[2-578]\\d{6}", [["([2-578]\\d{2})(\\d{4})", "$1 $2", ["[2-578]"]]]],
        BO: ["591", "[23467]\\d{7}|8\\d{8}", [["([234])(\\d{7})", "$1 $2", ["[2-4]"]], ["([67]\\d{7})", "$1", ["[67]"]], ["(800)(\\d{2})(\\d{4})", "$1 $2 $3", ["800"]]], "0", null, "0(1\\d)?"],
        BQ: ["599", "[347]\\d{6}", [["(\\d{3})(\\d{4})", "$1 $2", ["[13-7]"]], ["(9)(\\d{3})(\\d{4})", "$1 $2 $3", ["9"]]], null, null, null, null, null, null, ["(?:318[023]|41(?:6[023]|70)|7(?:1[578]|50)\\d)\\d{3}", "(?:31(?:8[14-8]|9[14578])|416[145-9]|7(?:0[01]|7[07]|8\\d|9[056])\\d)\\d{3}"]],
        BR: ["55", "[1-46-9]\\d{7,10}|5(?:[0-4]\\d{7,9}|5(?:[2-8]\\d{7}|9\\d{7,8}))", [["(\\d{4})(\\d{4})", "$1-$2", ["300|40[02]", "300|40(?:0|20)"]], ["([3589]00)(\\d{2,3})(\\d{4})", "$1 $2 $3", ["[3589]00"], "0$1"], ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2-$3", ["[1-9][1-9]"], "($1)"], ["(\\d{2})(\\d{5})(\\d{4})", "$1 $2-$3", ["[1-9][1-9]9"], "($1)"]], "0", null, "0(?:(1[245]|2[1-35]|31|4[13]|[56]5|99)(\\d{10,11}))?", "$2"],
        BS: ["1", "[2589]\\d{9}", [["(\\d{3})(\\d{3})(\\d{4})", "($1) $2-$3", null, null, null, "$1-$2-$3"]], "1", null, null, null, null, "242"],
        BT: ["975", "[1-8]\\d{6,7}", [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["1|77"]], ["([2-8])(\\d{3})(\\d{3})", "$1 $2 $3", ["[2-68]|7[246]"]]]],
        BW: ["267", "[2-79]\\d{6,7}", [["(\\d{3})(\\d{4})", "$1 $2", ["[2-6]"]], ["(7\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["7"]], ["(90)(\\d{5})", "$1 $2", ["90"]]]],
        BY: ["375", "[1-4]\\d{8}|8(?:0(?:0\\d{3,7}|[13]\\d{7})|(?:10|20\\d)\\d{7})|9\\d{9,10}", [["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2-$3-$4", ["17[0-3589]|2[4-9]|[34]", "17(?:[02358]|1[0-2]|9[0189])|2[4-9]|[34]"], "8 0$1"], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2-$3-$4", ["1(?:5[24]|6[235]|7[467])|2(?:1[246]|2[25]|3[26])", "1(?:5[24]|6(?:2|3[04-9]|5[0346-9])|7(?:[46]|7[37-9]))|2(?:1[246]|2[25]|3[26])"], "8 0$1"], ["(\\d{4})(\\d{2})(\\d{3})", "$1 $2-$3", ["1(?:5[169]|6[3-5]|7[179])|2(?:1[35]|2[34]|3[3-5])", "1(?:5[169]|6(?:3[1-3]|4|5[125])|7(?:1[3-9]|7[0-24-6]|9[2-7]))|2(?:1[35]|2[34]|3[3-5])"], "8 0$1"], ["([89]\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["8[01]|9"], "8 $1"], ["(82\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["82"], "8 $1"], ["(800)(\\d{3})", "$1 $2", ["800"], "8 $1"], ["(800)(\\d{2})(\\d{2,4})", "$1 $2 $3", ["800"], "8 $1"]], "8", null, "8?0?"],
        BZ: ["501", "[2-8]\\d{6}|0\\d{10}", [["(\\d{3})(\\d{4})", "$1-$2", ["[2-8]"]], ["(0)(800)(\\d{4})(\\d{3})", "$1-$2-$3-$4", ["080", "0800"]]]],
        CA: ["1", "[2-9]\\d{9}", [["(\\d{3})(\\d{3})(\\d{4})", "($1) $2-$3", null, null, null, "$1-$2-$3"]], "1", null, null, null, null, null, ["(?:2(?:04|[23]6|[48]9|50)|3(?:06|43|65)|4(?:03|1[68]|3[178]|50)|5(?:06|1[49]|48|79|8[17])|6(?:0[04]|13|22|39|47)|7(?:0[59]|78|8[02])|8(?:[06]7|19|25|73)|90[25])[2-9]\\d{6}", null, "8(?:00|33|44|55|66|77|88)[2-9]\\d{6}", "900[2-9]\\d{6}", "5(?:(?:00|22|33|44|66|77|88)[2-9]|21[23])\\d{6}"]],
        CC: ["61", "[1458]\\d{5,9}", [["([2378])(\\d{4})(\\d{4})", "$1 $2 $3", ["[2378]"], "(0$1)"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["14|[45]"], "0$1"], ["(16)(\\d{3,4})", "$1 $2", ["16"], "0$1"], ["(16)(\\d{3})(\\d{2,4})", "$1 $2 $3", ["16"], "0$1"], ["(1[389]\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["1[389]0", "1(?:[38]0|9)0"]], ["(180)(2\\d{3})", "$1 $2", ["180", "1802"]], ["(19\\d)(\\d{3})", "$1 $2", ["19[13]"]], ["(19\\d{2})(\\d{4})", "$1 $2", ["19[679]"]], ["(13)(\\d{2})(\\d{2})", "$1 $2 $3", ["13[1-9]"]]], "0", null, null, null, null, null, ["8(?:51(?:0(?:02|31|60)|118)|91(?:0(?:1[0-2]|29)|1(?:[28]2|50|79)|2(?:10|64)|3(?:08|22|68)|4[29]8|62\\d|70[23]|959))\\d{3}", "14(?:5\\d|71)\\d{5}|4(?:[0-3]\\d|4[047-9]|5[0-25-9]|6[6-9]|7[02-9]|8[12547-9]|9[017-9])\\d{6}", "180(?:0\\d{3}|2)\\d{3}", "19(?:0[0126]\\d|[679])\\d{5}", "500\\d{6}", null, null, null, "550\\d{6}", "13(?:00\\d{2})?\\d{4}"]],
        CD: ["243", "[2-6]\\d{6}|[18]\\d{6,8}|9\\d{8}", [["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["12"]], ["([89]\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["8[0-2459]|9"]], ["(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3", ["88"]], ["(\\d{2})(\\d{5})", "$1 $2", ["[1-6]"]]], "0", "0$1"],
        CF: ["236", "[278]\\d{7}", [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4"]]],
        CG: ["242", "[028]\\d{8}", [["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["801"]], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[02]"]], ["(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["800"]]]],
        CH: ["41", "[2-9]\\d{8}|860\\d{9}", [["([2-9]\\d)(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[2-7]|[89]1"]], ["([89]\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["8[047]|90"]], ["(\\d{3})(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4 $5", ["860"]]], "0", "0$1"],
        CI: ["225", "[02-8]\\d{7}", [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4"]]],
        CK: ["682", "[2-8]\\d{4}", [["(\\d{2})(\\d{3})", "$1 $2"]]],
        CL: ["56", "1230\\d{7}|[2-46-9]\\d{8,10}|5[1-3578]\\d{7}", [["(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["2[23]"], "($1)"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[357]|4[1-35]|6[13-57]"], "($1)"], ["(9)(\\d{4})(\\d{4})", "$1 $2 $3", ["9"]], ["(44)(\\d{3})(\\d{4})", "$1 $2 $3", ["44"]], ["([68]00)(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[68]00"], "$1"], ["(600)(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3 $4", ["600"], "$1"], ["(1230)(\\d{3})(\\d{4})", "$1 $2 $3", ["123", "1230"], "$1"], ["(\\d{5})(\\d{4})", "$1 $2", ["219"], "($1)"]], "0", "0$1", "0|(1(?:1[0-69]|2[0-57]|5[13-58]|69|7[0167]|8[018]))"],
        CM: ["237", "[2368]\\d{7,8}", [["([26])(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4 $5", ["[26]"]], ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[23]|88"]]]],
        CN: ["86", "[1-7]\\d{6,11}|8[0-357-9]\\d{6,9}|9\\d{7,10}", [["([48]00)(\\d{3})(\\d{4})", "$1 $2 $3", ["[48]00"]], ["(\\d{2})(\\d{5,6})", "$1 $2", ["(?:10|2\\d)[19]", "(?:10|2\\d)(?:10|9[56])", "(?:10|2\\d)(?:100|9[56])"], "0$1"], ["(\\d{3})(\\d{5,6})", "$1 $2", ["[3-9]", "[3-9]\\d\\d[19]", "[3-9]\\d\\d(?:10|9[56])"], "0$1"], ["(21)(\\d{4})(\\d{4,6})", "$1 $2 $3", ["21"], "0$1", "true"], ["([12]\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["10[1-9]|2[02-9]", "10[1-9]|2[02-9]", "10(?:[1-79]|8(?:0[1-9]|[1-9]))|2[02-9]"], "0$1", "true"], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["3(?:1[02-9]|35|49|5|7[02-68]|9[1-68])|4(?:1[02-9]|2[179]|[35][2-9]|6[47-9]|7|8[23])|5(?:3[03-9]|4[36]|5[02-9]|6[1-46]|7[028]|80|9[2-46-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]|2[248]|3[04-9]|4[3-6]|6[2368])|8(?:1[236-8]|2[5-7]|3|5[1-9]|7[02-9]|8[36-8]|9[1-7])|9(?:0[1-3689]|1[1-79]|[379]|4[13]|5[1-5])"], "0$1", "true"], ["(\\d{3})(\\d{4})(\\d{4})", "$1 $2 $3", ["3(?:11|7[179])|4(?:[15]1|3[1-35])|5(?:1|2[37]|3[12]|51|7[13-79]|9[15])|7(?:[39]1|5[457]|6[09])|8(?:[57]1|98)"], "0$1", "true"], ["(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["807", "8078"], "0$1", "true"], ["(\\d{3})(\\d{4})(\\d{4})", "$1 $2 $3", ["1(?:[3-57-9]|66)"]], ["(10800)(\\d{3})(\\d{4})", "$1 $2 $3", ["108", "1080", "10800"]], ["(\\d{3})(\\d{7,8})", "$1 $2", ["950"]]], "0", null, "(1(?:[129]\\d{3}|79\\d{2}))|0"],
        CO: ["57", "(?:[13]\\d{0,3}|[24-8])\\d{7}", [["(\\d)(\\d{7})", "$1 $2", ["1(?:[2-7]|8[2-9]|9[0-3])|[24-8]", "1(?:[2-7]|8[2-9]|9(?:09|[1-3]))|[24-8]"], "($1)"], ["(\\d{3})(\\d{7})", "$1 $2", ["3"]], ["(1)(\\d{3})(\\d{7})", "$1-$2-$3", ["1(?:80|9[04])", "1(?:800|9(?:0[01]|4[78]))"], "0$1", null, "$1 $2 $3"]], "0", null, "0([3579]|4(?:44|56))?"],
        CR: ["506", "[24-9]\\d{7,9}", [["(\\d{4})(\\d{4})", "$1 $2", ["[24-7]|8[3-9]"]], ["(\\d{3})(\\d{3})(\\d{4})", "$1-$2-$3", ["[89]0"]]], null, null, "(19(?:0[012468]|1[09]|20|66|77|99))"],
        CU: ["53", "[2-57]\\d{5,7}", [["(\\d)(\\d{6,7})", "$1 $2", ["7"]], ["(\\d{2})(\\d{4,6})", "$1 $2", ["[2-4]"]], ["(\\d)(\\d{7})", "$1 $2", ["5"], "0$1"]], "0", "(0$1)"],
        CV: ["238", "[259]\\d{6}", [["(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3"]]],
        CW: ["599", "[134679]\\d{6,7}", [["(\\d{3})(\\d{4})", "$1 $2", ["[13-7]"]], ["(9)(\\d{3})(\\d{4})", "$1 $2 $3", ["9"]]], null, null, null, null, null, null, ["9(?:[48]\\d{2}|50\\d|7(?:2[0-24]|[34]\\d|6[35-7]|77|8[7-9]))\\d{4}", "9(?:5(?:[12467]\\d|3[01])|6(?:[15-9]\\d|3[01]))\\d{4}", null, null, null, null, null, "955\\d{5}", null, "60[0-2]\\d{4}"]],
        CX: ["61", "[1458]\\d{5,9}", [["([2378])(\\d{4})(\\d{4})", "$1 $2 $3", ["[2378]"], "(0$1)"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["14|[45]"], "0$1"], ["(16)(\\d{3,4})", "$1 $2", ["16"], "0$1"], ["(16)(\\d{3})(\\d{2,4})", "$1 $2 $3", ["16"], "0$1"], ["(1[389]\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["1[389]0", "1(?:[38]0|9)0"]], ["(180)(2\\d{3})", "$1 $2", ["180", "1802"]], ["(19\\d)(\\d{3})", "$1 $2", ["19[13]"]], ["(19\\d{2})(\\d{4})", "$1 $2", ["19[679]"]], ["(13)(\\d{2})(\\d{2})", "$1 $2 $3", ["13[1-9]"]]], "0", null, null, null, null, null, ["8(?:51(?:0(?:01|30|59)|117)|91(?:00[6-9]|1(?:21|49|78|81)|2(?:09|63)|3(?:12|26|75)|4(?:56|97)|64\\d|7(?:0[01]|1[0-2])|958))\\d{3}", "14(?:5\\d|71)\\d{5}|4(?:[0-3]\\d|4[047-9]|5[0-25-9]|6[6-9]|7[02-9]|8[12547-9]|9[017-9])\\d{6}", "180(?:0\\d{3}|2)\\d{3}", "19(?:0[0126]\\d|[679])\\d{5}", "500\\d{6}", null, null, null, "550\\d{6}", "13(?:00\\d{2})?\\d{4}"]],
        CY: ["357", "[257-9]\\d{7}", [["(\\d{2})(\\d{6})", "$1 $2"]]],
        CZ: ["420", "[2-8]\\d{8}|9\\d{8,11}", [["([2-9]\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[2-8]|9[015-7]"]], ["(96\\d)(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["96"]], ["(9\\d)(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["9[36]"]]]],
        DE: ["49", "[1-35-9]\\d{3,14}|4(?:[0-8]\\d{3,12}|9(?:[0-37]\\d|4(?:[1-35-8]|4\\d?)|5\\d{1,2}|6[1-8]\\d?)\\d{2,8})", [["(1\\d{2})(\\d{7,8})", "$1 $2", ["1[67]"]], ["(15\\d{3})(\\d{6})", "$1 $2", ["15[0568]"]], ["(1\\d{3})(\\d{7})", "$1 $2", ["15"]], ["(\\d{2})(\\d{3,11})", "$1 $2", ["3[02]|40|[68]9"]], ["(\\d{3})(\\d{3,11})", "$1 $2", ["2(?:0[1-389]|1[124]|2[18]|3[14]|[4-9]1)|3(?:[35-9][15]|4[015])|[4-8][1-9]1|9(?:06|[1-9]1)"]], ["(\\d{4})(\\d{2,11})", "$1 $2", ["[24-6]|3(?:[3569][02-46-9]|4[2-4679]|7[2-467]|8[2-46-8])|[7-9](?:0[1-9]|[1-9])", "[24-6]|3(?:3(?:0[1-467]|2[127-9]|3[124578]|[46][1246]|7[1257-9]|8[1256]|9[145])|4(?:2[135]|3[1357]|4[13578]|6[1246]|7[1356]|9[1346])|5(?:0[14]|2[1-3589]|3[1357]|[49][1246]|6[1-4]|7[1346]|8[13568])|6(?:0[356]|2[1-489]|3[124-6]|4[1347]|6[13]|7[12579]|8[1-356]|9[135])|7(?:2[1-7]|3[1357]|4[145]|6[1-5]|7[1-4])|8(?:21|3[1468]|4[1347]|6[0135-9]|7[1467]|8[136])|9(?:0[12479]|2[1358]|3[1357]|4[134679]|6[1-9]|7[136]|8[147]|9[1468]))|[7-9](?:0[1-9]|[1-9])"]], ["(3\\d{4})(\\d{1,10})", "$1 $2", ["3"]], ["(800)(\\d{7,12})", "$1 $2", ["800"]], ["(\\d{3})(\\d)(\\d{4,10})", "$1 $2 $3", ["1(?:37|80)|900", "1(?:37|80)|900[1359]"]], ["(1\\d{2})(\\d{5,11})", "$1 $2", ["181"]], ["(18\\d{3})(\\d{6})", "$1 $2", ["185", "1850", "18500"]], ["(18\\d{2})(\\d{7})", "$1 $2", ["18[68]"]], ["(18\\d)(\\d{8})", "$1 $2", ["18[2-579]"]], ["(700)(\\d{4})(\\d{4})", "$1 $2 $3", ["700"]], ["(138)(\\d{4})", "$1 $2", ["138"]], ["(15[013-68])(\\d{2})(\\d{8})", "$1 $2 $3", ["15[013-68]"]], ["(15[279]\\d)(\\d{2})(\\d{7})", "$1 $2 $3", ["15[279]"]], ["(1[67]\\d)(\\d{2})(\\d{7,8})", "$1 $2 $3", ["1(?:6[023]|7)"]]], "0", "0$1"],
        DJ: ["253", "[27]\\d{7}", [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4"]]],
        DK: ["45", "[2-9]\\d{7}", [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4"]]],
        DM: ["1", "[57-9]\\d{9}", [["(\\d{3})(\\d{3})(\\d{4})", "($1) $2-$3", null, null, null, "$1-$2-$3"]], "1", null, null, null, null, "767"],
        DO: ["1", "[589]\\d{9}", [["(\\d{3})(\\d{3})(\\d{4})", "($1) $2-$3", null, null, null, "$1-$2-$3"]], "1", null, null, null, null, "8[024]9"],
        DZ: ["213", "(?:[1-4]|[5-9]\\d)\\d{7}", [["([1-4]\\d)(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[1-4]"]], ["([5-8]\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[5-8]"]], ["(9\\d)(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["9"]]], "0", "0$1"],
        EC: ["593", "1\\d{9,10}|[2-8]\\d{7}|9\\d{8}", [["(\\d)(\\d{3})(\\d{4})", "$1 $2-$3", ["[247]|[356][2-8]"], null, null, "$1-$2-$3"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["9"], "0$1"], ["(1800)(\\d{3})(\\d{3,4})", "$1 $2 $3", ["180", "1800"], "$1"]], "0", "(0$1)"],
        EE: ["372", "[3-9]\\d{6,7}|800\\d{6,7}", [["([3-79]\\d{2})(\\d{4})", "$1 $2", ["[369]|4[3-8]|5(?:[0-2]|5[0-478]|6[45])|7[1-9]", "[369]|4[3-8]|5(?:[02]|1(?:[0-8]|95)|5[0-478]|6(?:4[0-4]|5[1-589]))|7[1-9]"]], ["(70)(\\d{2})(\\d{4})", "$1 $2 $3", ["70"]], ["(8000)(\\d{3})(\\d{3})", "$1 $2 $3", ["800", "8000"]], ["([458]\\d{3})(\\d{3,4})", "$1 $2", ["40|5|8(?:00|[1-5])", "40|5|8(?:00[1-9]|[1-5])"]]]],
        EG: ["20", "1\\d{4,9}|[24-6]\\d{8}|3\\d{7}|[89]\\d{8,9}", [["(\\d)(\\d{7,8})", "$1 $2", ["[23]"]], ["(\\d{2})(\\d{6,7})", "$1 $2", ["1(?:3|5[239])|[4-6]|[89][2-9]"]], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["1[0-25]|[89]00"]]], "0", "0$1"],
        EH: ["212", "[5-9]\\d{8}", [["([5-7]\\d{2})(\\d{6})", "$1-$2", ["5(?:2[015-7]|3[0-4])|[67]"]], ["([58]\\d{3})(\\d{5})", "$1-$2", ["5(?:2[2-489]|3[5-9]|92)|892", "5(?:2(?:[2-48]|9[0-7])|3(?:[5-79]|8[0-7])|924)|892"]], ["(5\\d{4})(\\d{4})", "$1-$2", ["5(?:29|38)", "5(?:29|38)[89]"]], ["([5]\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["5(?:4[067]|5[03])"]], ["(8[09])(\\d{7})", "$1-$2", ["8(?:0|9[013-9])"]]], "0", null, null, null, null, "528[89]"],
        ER: ["291", "[178]\\d{6}", [["(\\d)(\\d{3})(\\d{3})", "$1 $2 $3"]], "0", "0$1"],
        ES: ["34", "[5-9]\\d{8}", [["([89]00)(\\d{3})(\\d{3})", "$1 $2 $3", ["[89]00"]], ["([5-9]\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[568]|[79][0-8]"]]]],
        ET: ["251", "[1-59]\\d{8}", [["([1-59]\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["[1-59]"]]], "0", "0$1"],
        FI: ["358", "1\\d{4,11}|[2-9]\\d{4,10}", [["(\\d{3})(\\d{3,7})", "$1 $2", ["(?:[1-3]0|[6-8])0"]], ["(75\\d{3})", "$1", ["75[12]"]], ["(116\\d{3})", "$1", ["116"], "$1"], ["(\\d{2})(\\d{4,10})", "$1 $2", ["[14]|2[09]|50|7[135]"]], ["(\\d)(\\d{4,11})", "$1 $2", ["[25689][1-8]|3"]]], "0", "0$1", null, null, null, null, ["1(?:[3569][1-8]\\d{3,9}|[47]\\d{5,10})|2[1-8]\\d{3,9}|3(?:[1-8]\\d{3,9}|9\\d{4,8})|[5689][1-8]\\d{3,9}", "4(?:[0-8]\\d{4,9}|9\\d{3,8})|50\\d{4,8}", "800\\d{4,7}", "[67]00\\d{5,6}", null, null, "[13]0\\d{4,8}|2(?:0(?:[016-8]\\d{3,7}|[2-59]\\d{2,7})|9\\d{4,8})|60(?:[12]\\d{5,6}|6\\d{7})|7(?:1\\d{7}|3\\d{8}|5[03-9]\\d{3,7})"]],
        FJ: ["679", "[2-9]\\d{6}|0\\d{10}", [["(\\d{3})(\\d{4})", "$1 $2", ["[2-9]"]], ["(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["0"]]]],
        FK: ["500", "[2-7]\\d{4}"],
        FM: ["691", "[39]\\d{6}", [["(\\d{3})(\\d{4})", "$1 $2"]]],
        FO: ["298", "[2-9]\\d{5}", [["(\\d{6})", "$1"]], null, null, "(10(?:01|[12]0|88))"],
        FR: ["33", "[1-9]\\d{8}", [["([1-79])(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4 $5", ["[1-79]"]], ["(8\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["8"], "0 $1"]], "0", "0$1"],
        GA: ["241", "0?\\d{7}", [["(\\d)(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[2-7]"], "0$1"], ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["0"]]]],
        GB: ["44", "\\d{7,10}", [["(7\\d{3})(\\d{6})", "$1 $2", ["7(?:[1-57-9]|62)", "7(?:[1-57-9]|624)"]], ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["2|5[56]|7[06]"]], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["1(?:[02-9]1|1)|3|9[018]"]], ["(\\d{5})(\\d{4,5})", "$1 $2", ["1(?:38|5[23]|69|76|94)", "1(?:(?:38|69)7|5(?:24|39)|768|946)", "1(?:3873|5(?:242|39[4-6])|(?:697|768)[347]|9467)"]], ["(1\\d{3})(\\d{5,6})", "$1 $2", ["1"]], ["(800)(\\d{4})", "$1 $2", ["800", "8001", "80011", "800111", "8001111"]], ["(845)(46)(4\\d)", "$1 $2 $3", ["845", "8454", "84546", "845464"]], ["(8\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["8(?:4[2-5]|7[0-3])"]], ["(80\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["80"]], ["(800)(\\d{6})", "$1 $2", ["800"]]], "0", "0$1", null, null, null, null, ["2(?:0[01378]|3[0189]|4[017]|8[0-46-9]|9[0-2])\\d{7}|1(?:1(?:3[0-48]|[46][0-4]|5[0-26-9]|[78][0-49])|21[0-7]|31[0-8]|[4-69]1\\d)\\d{6}|1(?:2(?:0[024-9]|2[3-9]|3[3-79]|4[1-689]|[58][02-9]|6[0-47-9]|7[013-9]|9\\d)|3(?:0\\d|[25][02-9]|3[02-579]|[468][0-46-9]|7[1-35-79]|9[2-578])|4(?:0[03-9]|[28][02-57-9]|[37]\\d|4[02-69]|5[0-8]|[69][0-79])|5(?:0[1-35-9]|2[024-9]|3[015689]|4[02-9]|5[03-9]|6\\d|7[0-35-9]|8[0-468]|9[0-57-9])|6(?:0[034689]|2[0-35689]|[38][013-9]|4[1-467]|5[0-69]|6[13-9]|7[0-8]|9[0124578])|7(?:0[0246-9]|2\\d|3[0236-8]|4[03-9]|5[0-46-9]|6[013-9]|7[0-35-9]|8[024-9]|9[02-9])|8(?:0[35-9]|2[1-57-9]|3[02-578]|4[0-578]|5[124-9]|6[2-69]|7\\d|8[02-9]|9[02569])|9(?:0[02-589]|2[02-689]|3[1-57-9]|4[2-9]|5[0-579]|6[2-47-9]|7[0-24578]|8\\d|9[2-57]))\\d{6}|1(?:2(?:0(?:46[1-4]|87[2-9])|545[1-79]|76(?:2\\d|3[1-8]|6[1-6])|9(?:7(?:2[0-4]|3[2-5])|8(?:2[2-8]|7[0-47-9]|8[345])))|3(?:638[2-5]|647[23]|8(?:47[04-9]|64[0157-9]))|4(?:044[1-7]|20(?:2[23]|8\\d)|6(?:0(?:30|5[2-57]|6[1-8]|7[2-8])|140)|8(?:052|87[123]))|5(?:24(?:3[2-79]|6\\d)|276\\d|6(?:26[06-9]|686))|6(?:06(?:4\\d|7[4-79])|295[567]|35[34]\\d|47(?:24|61)|59(?:5[08]|6[67]|74)|955[0-4])|7(?:26(?:6[13-9]|7[0-7])|442\\d|50(?:2[0-3]|[3-68]2|76))|8(?:27[56]\\d|37(?:5[2-5]|8[239])|84(?:3[2-58]))|9(?:0(?:0(?:6[1-8]|85)|52\\d)|3583|4(?:66[1-8]|9(?:2[01]|81))|63(?:23|3[1-4])|9561))\\d{3}|176888[2-46-8]\\d{2}|16977[23]\\d{3}", "7(?:[1-3]\\d{3}|4(?:[0-46-9]\\d{2}|5(?:[0-689]\\d|7[0-57-9]))|5(?:0[0-8]|[13-9]\\d|2[0-35-9])\\d|7(?:0(?:0[01]|[1-9]\\d)|[1-7]\\d{2}|8[02-9]\\d|9[0-689]\\d)|8(?:[014-9]\\d|[23][0-8])\\d|9(?:[024-9]\\d{2}|1(?:[02-9]\\d|1[028])|3[0-689]\\d))\\d{5}", "80(?:0(?:1111|\\d{6,7})|8\\d{7})", "(?:87[123]|9(?:[01]\\d|8[2349]))\\d{7}", "70\\d{8}", null, "(?:3[0347]|55)\\d{8}", "76(?:0[012]|2[356]|4[0134]|5[49]|6[0-369]|77|81|9[39])\\d{6}", "56\\d{8}", "8(?:4(?:5464\\d|[2-5]\\d{7})|70\\d{7})"]],
        GD: ["1", "[4589]\\d{9}", [["(\\d{3})(\\d{3})(\\d{4})", "($1) $2-$3", null, null, null, "$1-$2-$3"]], "1", null, null, null, null, "473"],
        GE: ["995", "[34578]\\d{8}", [["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[348]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["7"], "0$1"], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["5"]]], "0"],
        GF: ["594", "[56]\\d{8}", [["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4"]], "0", "0$1"],
        GG: ["44", "[135789]\\d{6,9}", [["(7\\d{3})(\\d{6})", "$1 $2", ["7(?:[1-57-9]|62)", "7(?:[1-57-9]|624)"]], ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["2|5[56]|7[06]"]], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["1(?:[02-9]1|1)|3|9[018]"]], ["(\\d{5})(\\d{4,5})", "$1 $2", ["1(?:38|5[23]|69|76|94)", "1(?:(?:38|69)7|5(?:24|39)|768|946)", "1(?:3873|5(?:242|39[4-6])|(?:697|768)[347]|9467)"]], ["(1\\d{3})(\\d{5,6})", "$1 $2", ["1"]], ["(800)(\\d{4})", "$1 $2", ["800", "8001", "80011", "800111", "8001111"]], ["(845)(46)(4\\d)", "$1 $2 $3", ["845", "8454", "84546", "845464"]], ["(8\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["8(?:4[2-5]|7[0-3])"]], ["(80\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["80"]], ["(800)(\\d{6})", "$1 $2", ["800"]]], "0", null, null, null, null, null, ["1481[25-9]\\d{5}", "7(?:781\\d|839\\d|911[17])\\d{5}", "80(?:0(?:1111|\\d{6,7})|8\\d{7})", "(?:87[123]|9(?:[01]\\d|8[0-3]))\\d{7}", "70\\d{8}", null, "(?:3[0347]|55)\\d{8}", "76(?:0[012]|2[356]|4[0134]|5[49]|6[0-369]|77|81|9[39])\\d{6}", "56\\d{8}", "8(?:4(?:5464\\d|[2-5]\\d{7})|70\\d{7})"]],
        GH: ["233", "[235]\\d{8}|8\\d{7}", [["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[235]"]], ["(\\d{3})(\\d{5})", "$1 $2", ["8"]]], "0", "0$1"],
        GI: ["350", "[256]\\d{7}", [["(\\d{3})(\\d{5})", "$1 $2", ["2"]]]],
        GL: ["299", "[1-689]\\d{5}", [["(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3"]]],
        GM: ["220", "[2-9]\\d{6}", [["(\\d{3})(\\d{4})", "$1 $2"]]],
        GN: ["224", "[367]\\d{7,8}", [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["3"]], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[67]"]]]],
        GP: ["590", "[56]\\d{8}", [["([56]\\d{2})(\\d{2})(\\d{4})", "$1 $2-$3", ["590|69[01]"]]], "0", "0$1", null, null, null, null, ["590(?:0[1-68]|1[0-2]|2[0-68]|3[1289]|4[0-24-9]|5[3-579]|6[0189]|7[08]|8[0-689]|9\\d)\\d{4}", "69(?:0\\d{2}|1(?:2[29]|3[0-5]))\\d{4}"]],
        GQ: ["240", "[23589]\\d{8}", [["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[235]"]], ["(\\d{3})(\\d{6})", "$1 $2", ["[89]"]]]],
        GR: ["30", "[26-9]\\d{9}", [["([27]\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["21|7"]], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["2[2-9]1|[689]"]], ["(2\\d{3})(\\d{6})", "$1 $2", ["2[2-9][02-9]"]]]],
        GT: ["502", "[2-7]\\d{7}|1[89]\\d{9}", [["(\\d{4})(\\d{4})", "$1 $2", ["[2-7]"]], ["(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["1"]]]],
        GU: ["1", "[5689]\\d{9}", [["(\\d{3})(\\d{3})(\\d{4})", "($1) $2-$3", null, null, null, "$1-$2-$3"]], "1", null, null, null, null, "671"],
        GW: ["245", "(?:4(?:0\\d{5}|4\\d{7})|9\\d{8})", [["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["44|9[5-7]"]], ["(\\d{3})(\\d{4})", "$1 $2", ["40"]]]],
        GY: ["592", "[2-46-9]\\d{6}", [["(\\d{3})(\\d{4})", "$1 $2"]]],
        HK: ["852", "[2-7]\\d{7}|8[0-3]\\d{6,7}|9\\d{4,10}", [["(\\d{4})(\\d{4})", "$1 $2", ["[2-7]|[89](?:0[1-9]|[1-9])"]], ["(800)(\\d{3})(\\d{3})", "$1 $2 $3", ["800"]], ["(900)(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["900"]], ["(900)(\\d{2,5})", "$1 $2", ["900"]]]],
        HN: ["504", "[237-9]\\d{7}", [["(\\d{4})(\\d{4})", "$1-$2"]]],
        HR: ["385", "[1-7]\\d{5,8}|[89]\\d{6,8}", [["(1)(\\d{4})(\\d{3})", "$1 $2 $3", ["1"]], ["([2-5]\\d)(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[2-5]"]], ["(9\\d)(\\d{3})(\\d{3,4})", "$1 $2 $3", ["9"]], ["(6[01])(\\d{2})(\\d{2,3})", "$1 $2 $3", ["6[01]"]], ["([67]\\d)(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[67]"]], ["(80[01])(\\d{2})(\\d{2,3})", "$1 $2 $3", ["80[01]"]], ["(80[01])(\\d{3})(\\d{3})", "$1 $2 $3", ["80[01]"]]], "0", "0$1"],
        HT: ["509", "[2-489]\\d{7}", [["(\\d{2})(\\d{2})(\\d{4})", "$1 $2 $3"]]],
        HU: ["36", "[1-9]\\d{7,8}", [["(1)(\\d{3})(\\d{4})", "$1 $2 $3", ["1"]], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[2-9]"]]], "06", "($1)"],
        ID: ["62", "(?:[1-79]\\d{6,10}|8\\d{7,11})", [["(\\d{2})(\\d{5,8})", "$1 $2", ["2[124]|[36]1"], "(0$1)"], ["(\\d{3})(\\d{5,8})", "$1 $2", ["2[035-9]|[36][02-9]|[4579]"], "(0$1)"], ["(8\\d{2})(\\d{3,4})(\\d{3})", "$1-$2-$3", ["8[1-35-9]"]], ["(8\\d{2})(\\d{4})(\\d{4,5})", "$1-$2-$3", ["8[1-35-9]"]], ["(1)(500)(\\d{3})", "$1 $2 $3", ["150", "1500"], "$1"], ["(177)(\\d{6,8})", "$1 $2", ["177"]], ["(800)(\\d{5,7})", "$1 $2", ["800"]], ["(804)(\\d{3})(\\d{4})", "$1 $2 $3", ["804"]], ["(80\\d)(\\d)(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["80[79]"]]], "0", "0$1"],
        IE: ["353", "[124-9]\\d{6,9}", [["(1)(\\d{3,4})(\\d{4})", "$1 $2 $3", ["1"]], ["(\\d{2})(\\d{5})", "$1 $2", ["2[24-9]|47|58|6[237-9]|9[35-9]"]], ["(\\d{3})(\\d{5})", "$1 $2", ["40[24]|50[45]"]], ["(48)(\\d{4})(\\d{4})", "$1 $2 $3", ["48"]], ["(818)(\\d{3})(\\d{3})", "$1 $2 $3", ["818"]], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[24-69]|7[14]"]], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["76|8[35-9]"], "0$1"], ["(8\\d)(\\d)(\\d{3})(\\d{4})", "$1 $2 $3 $4", ["8[35-9]5"], "0$1"], ["(700)(\\d{3})(\\d{3})", "$1 $2 $3", ["700"], "0$1"], ["(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["1(?:5|8[059])", "1(?:5|8[059]0)"], "$1"]], "0", "(0$1)"],
        IL: ["972", "1\\d{6,11}|[2-589]\\d{3}(?:\\d{3,6})?|6\\d{3}|7\\d{6,9}", [["([2-489])(\\d{3})(\\d{4})", "$1-$2-$3", ["[2-489]"], "0$1"], ["([57]\\d)(\\d{3})(\\d{4})", "$1-$2-$3", ["[57]"], "0$1"], ["(153)(\\d{1,2})(\\d{3})(\\d{4})", "$1 $2 $3 $4", ["153"]], ["(1)([7-9]\\d{2})(\\d{3})(\\d{3})", "$1-$2-$3-$4", ["1[7-9]"]], ["(1255)(\\d{3})", "$1-$2", ["125", "1255"]], ["(1200)(\\d{3})(\\d{3})", "$1-$2-$3", ["120", "1200"]], ["(1212)(\\d{2})(\\d{2})", "$1-$2-$3", ["121", "1212"]], ["(1599)(\\d{6})", "$1-$2", ["159", "1599"]], ["(151)(\\d{1,2})(\\d{3})(\\d{4})", "$1-$2 $3-$4", ["151"]], ["(\\d{4})", "*$1", ["[2-689]"]]], "0"],
        IM: ["44", "[135789]\\d{6,9}", [["(7\\d{3})(\\d{6})", "$1 $2", ["7(?:[1-57-9]|62)", "7(?:[1-57-9]|624)"]], ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["2|5[56]|7[06]"]], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["1(?:[02-9]1|1)|3|9[018]"]], ["(\\d{5})(\\d{4,5})", "$1 $2", ["1(?:38|5[23]|69|76|94)", "1(?:(?:38|69)7|5(?:24|39)|768|946)", "1(?:3873|5(?:242|39[4-6])|(?:697|768)[347]|9467)"]], ["(1\\d{3})(\\d{5,6})", "$1 $2", ["1"]], ["(800)(\\d{4})", "$1 $2", ["800", "8001", "80011", "800111", "8001111"]], ["(845)(46)(4\\d)", "$1 $2 $3", ["845", "8454", "84546", "845464"]], ["(8\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["8(?:4[2-5]|7[0-3])"]], ["(80\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["80"]], ["(800)(\\d{6})", "$1 $2", ["800"]]], "0", null, null, null, null, null, ["1624[5-8]\\d{5}", "7(?:4576|[59]24\\d|624[0-4689])\\d{5}", "808162\\d{4}", "(?:872299|90[0167]624)\\d{4}", "70\\d{8}", null, "3(?:08162\\d|3\\d{5}|4(?:40[49]06|5624\\d)|7(?:0624\\d|2299\\d))\\d{3}|55\\d{8}", null, "56\\d{8}", "8(?:4(?:40[49]06|5624\\d)|70624\\d)\\d{3}"]],
        IN: ["91", "008\\d{9}|1\\d{7,12}|[2-9]\\d{9,10}", [["(\\d{8})", "$1", ["561", "5616", "56161"], "$1"], ["(\\d{5})(\\d{5})", "$1 $2", ["6(?:[09]0|2[03689]|3[05-9])|7(?:[02-8]|19|9[037-9])|8(?:0[015-9]|[1-9])|9", "6(?:[09]0|2(?:0[01]|39|60|8[0-2]|9[04])|3(?:0[01]|5[0-2]|60|7[05]|81|9[03-5]))|7(?:[07]|19[0-5]|2(?:[0235-9]|[14][017-9])|3(?:[025-9]|[134][017-9])|4(?:[0-35689]|[47][017-9])|5(?:[02-46-9]|[15][017-9])|6(?:[02-9]|1[0-257-9])|8(?:[0-79]|8[0189])|9(?:[089]|31|7[02-9]))|8(?:0(?:[01589]|6[67]|7[02-9])|1(?:[0-57-9]|6[07-9])|2(?:[014][07-9]|[235-9])|3(?:[03-57-9]|[126][07-9])|[45]|6(?:[02457-9]|[136][07-9])|7(?:[078][07-9]|[1-69])|8(?:[0-25-9]|3[07-9]|4[047-9])|9(?:[02-9]|1[027-9]))|9", "6(?:[09]0|2(?:0[01]|39|60|8[0-2]|9[04])|3(?:0[01]|5[0-2]|60|7[05]|81|9[03-5]))|7(?:0|19[0-5]|2(?:[0235-79]|[14][017-9]|8(?:[0-69]|[78][089]))|3(?:[05-8]|1(?:[0189]|7[5-9])|2(?:[0-49][089]|[5-8])|3[017-9]|4(?:[07-9]|11)|9(?:[01689]|[2-5][089]|7[0189]))|4(?:[056]|1(?:[0135-9]|[24][089])|[29](?:[0-7][089]|[89])|3(?:[0-8][089]|9)|[47](?:[089]|11|7[02-8])|8(?:[0-24-7][089]|[389]))|5(?:[0346-9]|[15][017-9]|2(?:[03-9]|[12][089]))|6(?:[0346-9]|1[0-257-9]|2(?:[0-4]|[5-9][089])|5(?:[0-367][089]|[4589]))|7(?:0(?:[02-9]|1[089])|[1-9])|8(?:[0-79]|8(?:0[0189]|11|8[013-9]|9))|9(?:[089]|313|7(?:[02-8]|9[07-9])))|8(?:0(?:[01589]|6[67]|7(?:[02-8]|9[05-9]))|1(?:[02-57-9]|1(?:[0-35-9]|4[0-46-9])|6(?:[089]|7[02-8]))|2(?:0(?:[089]|7[02])|[14](?:[089]|7[02-8])|[235-9])|3(?:[03-57-9]|1(?:[089]|7[02-6])|2(?:[09]|77|8[0-689])|6(?:[089]|7[02-7]))|[45]|6(?:[02457-9]|[136](?:[089]|7[02-8]))|7(?:0[07-9]|[1-69]|[78](?:[089]|7[02-8]))|8(?:[0-25-9]|3(?:[089]|7[02-8])|4(?:[0489]|7[02-68]))|9(?:[02-9]|1(?:[0289]|7[2-6])))|9"]], ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["11|2[02]|33|4[04]|79[1-9]|80[2-46]"]], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["1(?:2[0-249]|3[0-25]|4[145]|[59][14]|[68][1-9]|7[1257])|2(?:1[257]|3[013]|4[01]|5[0137]|6[0158]|78|8[1568]|9[14])|3(?:26|4[1-3]|5[34]|6[01489]|7[02-46]|8[159])|4(?:1[36]|2[1-47]|3[15]|5[12]|6[0-26-9]|7[0-24-9]|8[013-57]|9[014-7])|5(?:1[025]|22|[36][25]|4[28]|5[12]|[78]1|9[15])|6(?:12|[2-4]1|5[17]|6[13]|7[14]|80)|7(?:12|2[14]|3[134]|4[47]|5[15]|[67]1|88)|8(?:16|2[014]|3[126]|6[136]|7[078]|8[34]|91)"]], ["(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["1(?:[23579]|[468][1-9])|[2-8]"]], ["(\\d{2})(\\d{3})(\\d{4})(\\d{3})", "$1 $2 $3 $4", ["008"]], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["140"], "$1"], ["(\\d{4})(\\d{2})(\\d{4})", "$1 $2 $3", ["160", "1600"], "$1"], ["(\\d{4})(\\d{4,5})", "$1 $2", ["180", "1800"], "$1"], ["(\\d{4})(\\d{2,4})(\\d{4})", "$1 $2 $3", ["180", "1800"], "$1"], ["(\\d{4})(\\d{3,4})(\\d{4})", "$1 $2 $3", ["186", "1860"], "$1"], ["(\\d{4})(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["18[06]"], "$1"]], "0", "0$1", null, null, !0],
        IO: ["246", "3\\d{6}", [["(\\d{3})(\\d{4})", "$1 $2"]]],
        IQ: ["964", "[1-7]\\d{7,9}", [["(1)(\\d{3})(\\d{4})", "$1 $2 $3", ["1"]], ["([2-6]\\d)(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[2-6]"]], ["(7\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["7"]]], "0", "0$1"],
        IR: ["98", "[1-8]\\d{5,9}|9(?:[0-4]\\d{8}|9\\d{8})", [["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["[1-8]"]], ["(\\d{2})(\\d{4,5})", "$1 $2", ["[1-8]"]], ["(\\d{4,5})", "$1", ["96"]], ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["9"]]], "0", "0$1"],
        IS: ["354", "[4-9]\\d{6}|38\\d{7}", [["(\\d{3})(\\d{4})", "$1 $2", ["[4-9]"]], ["(3\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["3"]]]],
        IT: ["39", "[01589]\\d{5,10}|3(?:[12457-9]\\d{8}|[36]\\d{7,9})", [["(\\d{2})(\\d{3,4})(\\d{4})", "$1 $2 $3", ["0[26]|55"]], ["(0[26])(\\d{4})(\\d{5})", "$1 $2 $3", ["0[26]"]], ["(0[26])(\\d{4,6})", "$1 $2", ["0[26]"]], ["(0\\d{2})(\\d{3,4})(\\d{4})", "$1 $2 $3", ["0[13-57-9][0159]"]], ["(\\d{3})(\\d{3,6})", "$1 $2", ["0[13-57-9][0159]|8(?:03|4[17]|9[245])", "0[13-57-9][0159]|8(?:03|4[17]|9(?:2|[45][0-4]))"]], ["(0\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["0[13-57-9][2-46-8]"]], ["(0\\d{3})(\\d{2,6})", "$1 $2", ["0[13-57-9][2-46-8]"]], ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[13]|8(?:00|4[08]|9[59])", "[13]|8(?:00|4[08]|9(?:5[5-9]|9))"]], ["(\\d{4})(\\d{4})", "$1 $2", ["894", "894[5-9]"]], ["(\\d{3})(\\d{4})(\\d{4})", "$1 $2 $3", ["3"]]], null, null, null, null, null, null, ["0(?:[26]\\d{4,9}|(?:1(?:[0159]\\d|[27][1-5]|31|4[1-4]|6[1356]|8[2-57])|3(?:[0159]\\d|2[1-4]|3[12]|[48][1-6]|6[2-59]|7[1-7])|4(?:[0159]\\d|[23][1-9]|4[245]|6[1-5]|7[1-4]|81)|5(?:[0159]\\d|2[1-5]|3[2-6]|4[1-79]|6[4-6]|7[1-578]|8[3-8])|7(?:[0159]\\d|2[12]|3[1-7]|4[2346]|6[13569]|7[13-6]|8[1-59])|8(?:[0159]\\d|2[34578]|3[1-356]|[6-8][1-5])|9(?:[0159]\\d|[238][1-5]|4[12]|6[1-8]|7[1-6]))\\d{2,7})", "3(?:[12457-9]\\d{8}|6\\d{7,8}|3\\d{7,9})", "80(?:0\\d{6}|3\\d{3})", "0878\\d{5}|1(?:44|6[346])\\d{6}|89(?:2\\d{3}|4(?:[0-4]\\d{2}|[5-9]\\d{4})|5(?:[0-4]\\d{2}|[5-9]\\d{6})|9\\d{6})", "1(?:78\\d|99)\\d{6}", null, null, null, "55\\d{8}", "84(?:[08]\\d{6}|[17]\\d{3})"]],
        JE: ["44", "[135789]\\d{6,9}", [["(7\\d{3})(\\d{6})", "$1 $2", ["7(?:[1-57-9]|62)", "7(?:[1-57-9]|624)"]], ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["2|5[56]|7[06]"]], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["1(?:[02-9]1|1)|3|9[018]"]], ["(\\d{5})(\\d{4,5})", "$1 $2", ["1(?:38|5[23]|69|76|94)", "1(?:(?:38|69)7|5(?:24|39)|768|946)", "1(?:3873|5(?:242|39[4-6])|(?:697|768)[347]|9467)"]], ["(1\\d{3})(\\d{5,6})", "$1 $2", ["1"]], ["(800)(\\d{4})", "$1 $2", ["800", "8001", "80011", "800111", "8001111"]], ["(845)(46)(4\\d)", "$1 $2 $3", ["845", "8454", "84546", "845464"]], ["(8\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["8(?:4[2-5]|7[0-3])"]], ["(80\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["80"]], ["(800)(\\d{6})", "$1 $2", ["800"]]], "0", null, null, null, null, null, ["1534[0-24-8]\\d{5}", "7(?:509\\d|7(?:00[378]|97[7-9])|829\\d|937\\d)\\d{5}", "80(?:07(?:35|81)|8901)\\d{4}", "(?:871206|90(?:066[59]|1810|71(?:07|55)))\\d{4}", "701511\\d{4}", null, "3(?:0(?:07(?:35|81)|8901)|3\\d{4}|4(?:4(?:4(?:05|42|69)|703)|5(?:041|800))|7(?:0002|1206))\\d{4}|55\\d{8}", "76(?:0[012]|2[356]|4[0134]|5[49]|6[0-369]|77|81|9[39])\\d{6}", "56\\d{8}", "8(?:4(?:4(?:4(?:05|42|69)|703)|5(?:041|800))|70002)\\d{4}"]],
        JM: ["1", "[589]\\d{9}", [["(\\d{3})(\\d{3})(\\d{4})", "($1) $2-$3", null, null, null, "$1-$2-$3"]], "1", null, null, null, null, "876"],
        JO: ["962", "[235-9]\\d{7,8}", [["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["[2356]|87"], "(0$1)"], ["(7)(\\d{4})(\\d{4})", "$1 $2 $3", ["7[457-9]"]], ["(\\d{2})(\\d{7})", "$1 $2", ["70"]], ["(\\d{3})(\\d{5,6})", "$1 $2", ["8[0158]|9"]]], "0", "0$1"],
        JP: ["81", "[1-9]\\d{8,9}|00(?:[36]\\d{7,14}|7\\d{5,7}|8\\d{7})", [["(\\d{3})(\\d{3})(\\d{3})", "$1-$2-$3", ["(?:12|57|99)0"]], ["(\\d{3})(\\d{3})(\\d{4})", "$1-$2-$3", ["800"]], ["(\\d{2})(\\d{4})(\\d{4})", "$1-$2-$3", ["[2579]0|80[1-9]"]], ["(\\d{4})(\\d)(\\d{4})", "$1-$2-$3", ["1(?:26|3[79]|4[56]|5[4-68]|6[3-5])|499|5(?:76|97)|746|8(?:3[89]|47|51|63)|9(?:49|80|9[16])", "1(?:267|3(?:7[247]|9[278])|4(?:5[67]|66)|5(?:47|58|64|8[67])|6(?:3[245]|48|5[4-68]))|499[2468]|5(?:76|97)9|7468|8(?:3(?:8[78]|96)|477|51[24]|636)|9(?:496|802|9(?:1[23]|69))", "1(?:267|3(?:7[247]|9[278])|4(?:5[67]|66)|5(?:47|58|64|8[67])|6(?:3[245]|48|5[4-68]))|499[2468]|5(?:769|979[2-69])|7468|8(?:3(?:8[78]|96[2457-9])|477|51[24]|636[2-57-9])|9(?:496|802|9(?:1[23]|69))"]], ["(\\d{3})(\\d{2})(\\d{4})", "$1-$2-$3", ["1(?:2[3-6]|3[3-9]|4[2-6]|5[2-8]|[68][2-7]|7[2-689]|9[1-578])|2(?:2[03-689]|3[3-58]|4[0-468]|5[04-8]|6[013-8]|7[06-9]|8[02-57-9]|9[13])|4(?:2[28]|3[689]|6[035-7]|7[05689]|80|9[3-5])|5(?:3[1-36-9]|4[4578]|5[013-8]|6[1-9]|7[2-8]|8[14-7]|9[4-9])|7(?:2[15]|3[5-9]|4[02-9]|6[135-8]|7[0-4689]|9[014-9])|8(?:2[49]|3[3-8]|4[5-8]|5[2-9]|6[35-9]|7[579]|8[03-579]|9[2-8])|9(?:[23]0|4[02-46-9]|5[024-79]|6[4-9]|7[2-47-9]|8[02-7]|9[3-7])", "1(?:2[3-6]|3[3-9]|4[2-6]|5(?:[236-8]|[45][2-69])|[68][2-7]|7[2-689]|9[1-578])|2(?:2(?:[04-689]|3[23])|3[3-58]|4[0-468]|5(?:[0468][2-9]|5[78]|7[2-4])|6(?:[0135-8]|4[2-5])|7(?:[0679]|8[2-7])|8(?:[024578]|3[25-9]|9[6-9])|9(?:11|3[2-4]))|4(?:2(?:2[2-9]|8[237-9])|3[689]|6[035-7]|7(?:[059][2-8]|[68])|80|9[3-5])|5(?:3[1-36-9]|4[4578]|5[013-8]|6[1-9]|7[2-8]|8[14-7]|9(?:[4-7]|[89][2-8]))|7(?:2[15]|3[5-9]|4[02-9]|6[135-8]|7[0-4689]|9(?:[017-9]|4[6-8]|5[2-478]|6[2-589]))|8(?:2(?:4[4-8]|9[2-8])|3(?:[3-6][2-9]|7[2-6]|8[2-5])|4[5-8]|5[2-9]|6(?:[37]|5[4-7]|6[2-9]|8[2-8]|9[236-9])|7[579]|8[03-579]|9[2-8])|9(?:[23]0|4[02-46-9]|5[024-79]|6[4-9]|7[2-47-9]|8[02-7]|9(?:3[34]|4[2-69]|[5-7]))", "1(?:2[3-6]|3[3-9]|4[2-6]|5(?:[236-8]|[45][2-69])|[68][2-7]|7[2-689]|9[1-578])|2(?:2(?:[04-689]|3[23])|3[3-58]|4[0-468]|5(?:[0468][2-9]|5[78]|7[2-4])|6(?:[0135-8]|4[2-5])|7(?:[0679]|8[2-7])|8(?:[024578]|3[25-9]|9[6-9])|9(?:11|3[2-4]))|4(?:2(?:2[2-9]|8[237-9])|3[689]|6[035-7]|7(?:[059][2-8]|[68])|80|9[3-5])|5(?:3[1-36-9]|4[4578]|5[013-8]|6[1-9]|7[2-8]|8[14-7]|9(?:[4-7]|[89][2-8]))|7(?:2[15]|3[5-9]|4[02-9]|6[135-8]|7[0-4689]|9(?:[017-9]|4[6-8]|5[2-478]|6[2-589]))|8(?:2(?:4[4-8]|9(?:20|[3578]|4[04-9]|6[56]))|3(?:[3-6][2-9]|7(?:[2-5]|6[0-59])|8[2-5])|4[5-8]|5[2-9]|6(?:[37]|5(?:[467]|5[014-9])|6(?:[2-8]|9[02-69])|8[2-8]|9(?:[236-8]|9[23]))|7[579]|8[03-579]|9[2-8])|9(?:[23]0|4[02-46-9]|5[024-79]|6[4-9]|7[2-47-9]|8[02-7]|9(?:3(?:3[02-9]|4[0-24689])|4[2-69]|[5-7]))", "1(?:2[3-6]|3[3-9]|4[2-6]|5(?:[236-8]|[45][2-69])|[68][2-7]|7[2-689]|9[1-578])|2(?:2(?:[04-689]|3[23])|3[3-58]|4[0-468]|5(?:[0468][2-9]|5[78]|7[2-4])|6(?:[0135-8]|4[2-5])|7(?:[0679]|8[2-7])|8(?:[024578]|3[25-9]|9[6-9])|9(?:11|3[2-4]))|4(?:2(?:2[2-9]|8[237-9])|3[689]|6[035-7]|7(?:[059][2-8]|[68])|80|9[3-5])|5(?:3[1-36-9]|4[4578]|5[013-8]|6[1-9]|7[2-8]|8[14-7]|9(?:[4-7]|[89][2-8]))|7(?:2[15]|3[5-9]|4[02-9]|6[135-8]|7[0-4689]|9(?:[017-9]|4[6-8]|5[2-478]|6[2-589]))|8(?:2(?:4[4-8]|9(?:20|[3578]|4[04-9]|6(?:5[25]|60)))|3(?:[3-6][2-9]|7(?:[2-5]|6[0-59])|8[2-5])|4[5-8]|5[2-9]|6(?:[37]|5(?:[467]|5[014-9])|6(?:[2-8]|9[02-69])|8[2-8]|9(?:[236-8]|9[23]))|7[579]|8[03-579]|9[2-8])|9(?:[23]0|4[02-46-9]|5[024-79]|6[4-9]|7[2-47-9]|8[02-7]|9(?:3(?:3[02-9]|4[0-24689])|4[2-69]|[5-7]))"]], ["(\\d{2})(\\d{3})(\\d{4})", "$1-$2-$3", ["1|2(?:2[37]|5[5-9]|64|78|8[39]|91)|4(?:2[2689]|64|7[347])|5[2-589]|60|8(?:2[124589]|3[279]|[46-9])|9(?:[235-8]|93)", "1|2(?:2[37]|5(?:[57]|[68]0|9[19])|64|78|8[39]|917)|4(?:2(?:20|[68]|9[178])|64|7[347])|5[2-589]|60|8(?:2[124589]|3[279]|[46-9])|9(?:[235-8]|93[34])", "1|2(?:2[37]|5(?:[57]|[68]0|9(?:17|99))|64|78|8[39]|917)|4(?:2(?:20|[68]|9[178])|64|7[347])|5[2-589]|60|8(?:2[124589]|3[279]|[46-9])|9(?:[235-8]|93(?:31|4))"]], ["(\\d{3})(\\d{2})(\\d{4})", "$1-$2-$3", ["2(?:[34]7|[56]9|74|9[14-79])|82|993"]], ["(\\d)(\\d{4})(\\d{4})", "$1-$2-$3", ["3|4(?:2[09]|7[01])|6[1-9]"]], ["(\\d{2})(\\d{3})(\\d{4})", "$1-$2-$3", ["[2479][1-9]"]]], "0", "0$1"],
        KE: ["254", "20\\d{6,7}|[4-9]\\d{6,9}", [["(\\d{2})(\\d{5,7})", "$1 $2", ["[24-6]"]], ["(\\d{3})(\\d{6})", "$1 $2", ["7"]], ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[89]"]]], "0", "0$1", "005|0"],
        KG: ["996", "[235-8]\\d{8,9}", [["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[25-7]|31[25]"]], ["(\\d{4})(\\d{5})", "$1 $2", ["3(?:1[36]|[2-9])"]], ["(\\d{3})(\\d{3})(\\d)(\\d{3})", "$1 $2 $3 $4", ["8"]]], "0", "0$1"],
        KH: ["855", "[1-9]\\d{7,9}", [["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["1\\d[1-9]|[2-9]"], "0$1"], ["(1[89]00)(\\d{3})(\\d{3})", "$1 $2 $3", ["1[89]0", "1[89]00"]]], "0"],
        KI: ["686", "[2458]\\d{4}|3\\d{4,7}|[67]\\d{7}", [], null, null, "0"],
        KM: ["269", "[3478]\\d{6}", [["(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3"]]],
        KN: ["1", "[589]\\d{9}", [["(\\d{3})(\\d{3})(\\d{4})", "($1) $2-$3", null, null, null, "$1-$2-$3"]], "1", null, null, null, null, "869"],
        KP: ["850", "1\\d{9}|[28]\\d{7}", [["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["1"]], ["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["2"]], ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["8"]]], "0", "0$1"],
        KR: ["82", "00(?:3\\d{8,9}|7\\d{9,11})|[1-7]\\d{4,9}|8\\d{8}", [["(\\d{2})(\\d{3,4})", "$1-$2", ["(?:3[1-3]|[46][1-4]|5[1-5])1"]], ["(\\d{4})(\\d{4})", "$1-$2", ["1(?:5[246-9]|6[046-8]|8[03579])", "1(?:5(?:22|44|66|77|88|99)|6(?:[07]0|44|6[16]|88)|8(?:00|33|55|77|99))"], "$1"], ["(\\d{5})", "$1", ["1[016-9]1", "1[016-9]11", "1[016-9]114"]], ["(\\d)(\\d{3,4})(\\d{4})", "$1-$2-$3", ["2[1-9]"]], ["(\\d{2})(\\d{3})(\\d{4})", "$1-$2-$3", ["60[2-9]|80"]], ["(\\d{2})(\\d{3,4})(\\d{4})", "$1-$2-$3", ["1[0-25-9]|(?:3[1-3]|[46][1-4]|5[1-5])[1-9]"]], ["(\\d{2})(\\d{4})(\\d{4})", "$1-$2-$3", ["[57]0"]]], "0", "0$1", "0(8[1-46-8]|85\\d{2})?"],
        KW: ["965", "[12569]\\d{6,7}", [["(\\d{4})(\\d{3,4})", "$1 $2", ["[16]|2(?:[0-35-9]|4[0-35-9])|52[25]|9[024-9]"]], ["(\\d{3})(\\d{5})", "$1 $2", ["244|5(?:[015]|6[56])"]]]],
        KY: ["1", "[3589]\\d{9}", [["(\\d{3})(\\d{3})(\\d{4})", "($1) $2-$3", null, null, null, "$1-$2-$3"]], "1", null, null, null, null, "345"],
        KZ: ["7", "(?:33\\d|7\\d{2}|80[089])\\d{7}", [["([3489]\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2-$3-$4", ["[3489]"]], ["(7\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["7"]]], "8", null, null, null, null, null, ["33622\\d{5}|7(?:1(?:0(?:[23]\\d|4[0-3]|59|63)|1(?:[23]\\d|4[0-79]|59)|2(?:[23]\\d|59)|3(?:2\\d|3[0-79]|4[0-35-9]|59)|4(?:[24]\\d|3[013-9]|5[1-9])|5(?:2\\d|3[1-9]|4[0-7]|59)|6(?:[234]\\d|5[19]|61)|72\\d|8(?:[27]\\d|3[1-46-9]|4[0-5]))|2(?:1(?:[23]\\d|4[46-9]|5[3469])|2(?:2\\d|3[0679]|46|5[12679])|3(?:[234]\\d|5[139])|4(?:2\\d|3[1235-9]|59)|5(?:[23]\\d|4[01246-8]|59|61)|6(?:2\\d|3[1-9]|4[0-4]|59)|7(?:[2379]\\d|40|5[279])|8(?:[23]\\d|4[0-3]|59)|9(?:2\\d|3[124578]|59)))\\d{5}", "7(?:0[012578]|47|6[02-4]|7[15-8]|85)\\d{7}", "800\\d{7}", "809\\d{7}", "808\\d{7}", null, null, null, "751\\d{7}"]],
        LA: ["856", "[2-8]\\d{7,9}", [["(20)(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["20"]], ["([2-8]\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["2[13]|3[14]|[4-8]"]], ["(30)(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3 $4", ["30"]]], "0", "0$1"],
        LB: ["961", "[13-9]\\d{6,7}", [["(\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["[13-69]|7(?:[2-57]|62|8[0-7]|9[04-9])|8[02-9]"], "0$1"], ["([7-9]\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["7(?:[01]|6[013-9]|8[89]|9[1-3])|[89][01]"]]], "0"],
        LC: ["1", "[5789]\\d{9}", [["(\\d{3})(\\d{3})(\\d{4})", "($1) $2-$3", null, null, null, "$1-$2-$3"]], "1", null, null, null, null, "758"],
        LI: ["423", "6\\d{8}|[23789]\\d{6}", [["(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3", ["[237-9]"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["6[56]"]], ["(69)(7\\d{2})(\\d{4})", "$1 $2 $3", ["697"]]], "0", null, "0|10(?:01|20|66)"],
        LK: ["94", "[1-9]\\d{8}", [["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[1-689]"]], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["7"]]], "0", "0$1"],
        LR: ["231", "2\\d{7,8}|[378]\\d{8}|4\\d{6}|5\\d{6,8}", [["(2\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["2"]], ["([4-5])(\\d{3})(\\d{3})", "$1 $2 $3", ["[45]"]], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[23578]"]]], "0", "0$1"],
        LS: ["266", "[2568]\\d{7}", [["(\\d{4})(\\d{4})", "$1 $2"]]],
        LT: ["370", "[3-9]\\d{7}", [["([34]\\d)(\\d{6})", "$1 $2", ["37|4(?:1|5[45]|6[2-4])"]], ["([3-6]\\d{2})(\\d{5})", "$1 $2", ["3[148]|4(?:[24]|6[09])|528|6"]], ["([7-9]\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3", ["[7-9]"], "8 $1"], ["(5)(2\\d{2})(\\d{4})", "$1 $2 $3", ["52[0-79]"]]], "8", "(8-$1)", "[08]", null, !0],
        LU: ["352", "[24-9]\\d{3,10}|3(?:[0-46-9]\\d{2,9}|5[013-9]\\d{1,8})", [["(\\d{2})(\\d{3})", "$1 $2", ["[2-5]|7[1-9]|[89](?:0[2-9]|[1-9])"]], ["(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3", ["[2-5]|7[1-9]|[89](?:0[2-9]|[1-9])"]], ["(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3", ["20"]], ["(\\d{2})(\\d{2})(\\d{2})(\\d{1,2})", "$1 $2 $3 $4", ["2(?:[0367]|4[3-8])"]], ["(\\d{2})(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3 $4", ["20"]], ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})(\\d{1,2})", "$1 $2 $3 $4 $5", ["2(?:[0367]|4[3-8])"]], ["(\\d{2})(\\d{2})(\\d{2})(\\d{1,4})", "$1 $2 $3 $4", ["2(?:[12589]|4[12])|[3-5]|7[1-9]|8(?:0[2-9]|[1-9])|9(?:0[2-46-9]|[1-9])"]], ["(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["70|80[01]|90[015]"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["6"]]], null, null, "(15(?:0[06]|1[12]|35|4[04]|55|6[26]|77|88|99)\\d)"],
        LV: ["371", "[2689]\\d{7}", [["([2689]\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["[2689]"]]]],
        LY: ["218", "[25679]\\d{8}", [["([25-79]\\d)(\\d{7})", "$1-$2", ["[25-79]"]]], "0", "0$1"],
        MA: ["212", "[5-9]\\d{8}", [["([5-7]\\d{2})(\\d{6})", "$1-$2", ["5(?:2[015-7]|3[0-4])|[67]"]], ["([58]\\d{3})(\\d{5})", "$1-$2", ["5(?:2[2-489]|3[5-9]|92)|892", "5(?:2(?:[2-48]|9[0-7])|3(?:[5-79]|8[0-7])|924)|892"]], ["(5\\d{4})(\\d{4})", "$1-$2", ["5(?:29|38)", "5(?:29|38)[89]"]], ["([5]\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["5(?:4[067]|5[03])"]], ["(8[09])(\\d{7})", "$1-$2", ["8(?:0|9[013-9])"]]], "0", "0$1", null, null, null, null, ["5(?:2(?:[015-79]\\d|2[02-9]|3[2-57]|4[2-8]|8[235-7])\\d|3(?:[0-48]\\d|[57][2-9]|6[2-8]|9[3-9])\\d|4[067]\\d{2}|5[03]\\d{2})\\d{4}", "(?:6(?:[0-79]\\d|8[0-247-9])|7(?:0[067]|6[1267]|7[07]))\\d{6}", "80\\d{7}", "89\\d{7}", null, null, null, null, "5924[01]\\d{4}"]],
        MC: ["377", "[34689]\\d{7,8}", [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[39]"], "$1"], ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["4"]], ["(6)(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4 $5", ["6"]], ["(\\d{3})(\\d{3})(\\d{2})", "$1 $2 $3", ["8"], "$1"]], "0", "0$1"],
        MD: ["373", "[235-9]\\d{7}", [["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["22|3"]], ["([25-7]\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3", ["2[13-9]|[5-7]"]], ["([89]\\d{2})(\\d{5})", "$1 $2", ["[89]"]]], "0", "0$1"],
        ME: ["382", "[2-9]\\d{7,8}", [["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[2-57-9]|6[036-9]"]]], "0", "0$1"],
        MF: ["590", "[56]\\d{8}", [["([56]\\d{2})(\\d{2})(\\d{4})", "$1 $2-$3", ["590|69[01]"]]], "0", null, null, null, null, null, ["590(?:0[079]|13|2[79]|30|43|5[0-268]|7[79]|87)\\d{4}", "69(?:0\\d{2}|1(?:2[29]|3[0-5]))\\d{4}"]],
        MG: ["261", "[23]\\d{8}", [["([23]\\d)(\\d{2})(\\d{3})(\\d{2})", "$1 $2 $3 $4", ["[23]"]]], "0", "0$1"],
        MH: ["692", "[2-6]\\d{6}", [["(\\d{3})(\\d{4})", "$1-$2"]], "1"],
        MK: ["389", "[2-578]\\d{7}", [["(2)(\\d{3})(\\d{4})", "$1 $2 $3", ["2"]], ["([347]\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["[347]"]], ["([58]\\d{2})(\\d)(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[58]"]]], "0", "0$1"],
        ML: ["223", "[246-9]\\d{7}", [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[246-9]"]]]],
        MM: ["95", "[178]\\d{5,7}|[24-6]\\d{5,8}|9(?:[279]\\d{0,2}|5|[34]\\d{1,2}|6(?:\\d{1,2})?|8(?:\\d{2})?)\\d{6}", [["(\\d)(\\d{3})(\\d{3,4})", "$1 $2 $3", ["1|2[245]"]], ["(2)(\\d{4})(\\d{4})", "$1 $2 $3", ["251"]], ["(\\d)(\\d{2})(\\d{3})", "$1 $2 $3", ["16|2"]], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["432|67|81"]], ["(\\d{2})(\\d{2})(\\d{3,4})", "$1 $2 $3", ["[4-8]"]], ["(9)(\\d{3})(\\d{4,6})", "$1 $2 $3", ["9(?:2[0-4]|[35-9]|4[137-9])"]], ["(9)([34]\\d{4})(\\d{4})", "$1 $2 $3", ["9(?:3[0-36]|4[0-57-9])"]], ["(9)(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["92[56]"]], ["(9)(\\d{3})(\\d{3})(\\d{2})", "$1 $2 $3 $4", ["93"]]], "0", "0$1"],
        MN: ["976", "[12]\\d{7,9}|[57-9]\\d{7}", [["([12]\\d)(\\d{2})(\\d{4})", "$1 $2 $3", ["[12]1"]], ["([12]2\\d)(\\d{5,6})", "$1 $2", ["[12]2[1-3]"]], ["([12]\\d{3})(\\d{5})", "$1 $2", ["[12](?:27|[3-5])", "[12](?:27|[3-5]\\d)2"]], ["(\\d{4})(\\d{4})", "$1 $2", ["[57-9]"], "$1"], ["([12]\\d{4})(\\d{4,5})", "$1 $2", ["[12](?:27|[3-5])", "[12](?:27|[3-5]\\d)[4-9]"]]], "0", "0$1"],
        MO: ["853", "[268]\\d{7}", [["([268]\\d{3})(\\d{4})", "$1 $2", ["[268]"]]]],
        MP: ["1", "[5689]\\d{9}", [["(\\d{3})(\\d{3})(\\d{4})", "($1) $2-$3", null, null, null, "$1-$2-$3"]], "1", null, null, null, null, "670"],
        MQ: ["596", "[56]\\d{8}", [["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4"]], "0", "0$1"],
        MR: ["222", "[2-48]\\d{7}", [["([2-48]\\d)(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[2-48]"]]]],
        MS: ["1", "[5689]\\d{9}", [["(\\d{3})(\\d{3})(\\d{4})", "($1) $2-$3", null, null, null, "$1-$2-$3"]], "1", null, null, null, null, "664"],
        MT: ["356", "[2357-9]\\d{7}", [["(\\d{4})(\\d{4})", "$1 $2"]]],
        MU: ["230", "[2-9]\\d{6,7}", [["([2-46-9]\\d{2})(\\d{4})", "$1 $2", ["[2-46-9]"]], ["(5\\d{3})(\\d{4})", "$1 $2", ["5"]]]],
        MV: ["960", "[346-8]\\d{6,9}|9(?:00\\d{7}|\\d{6})", [["(\\d{3})(\\d{4})", "$1-$2", ["[3467]|9(?:0[1-9]|[1-9])"]], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["[89]00"]]]],
        MW: ["265", "(?:1(?:\\d{2})?|[2789]\\d{2})\\d{6}", [["(\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["1"]], ["(2\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["2"]], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[17-9]"]]], "0", "0$1"],
        MX: ["52", "[1-9]\\d{9,10}", [["([358]\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["33|55|81"]], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["[2467]|3[0-2457-9]|5[089]|8[02-9]|9[0-35-9]"]], ["(1)([358]\\d)(\\d{4})(\\d{4})", "044 $2 $3 $4", ["1(?:33|55|81)"], "$1", null, "$1 $2 $3 $4"], ["(1)(\\d{3})(\\d{3})(\\d{4})", "044 $2 $3 $4", ["1(?:[2467]|3[0-2457-9]|5[089]|8[2-9]|9[1-35-9])"], "$1", null, "$1 $2 $3 $4"]], "01", "01 $1", "0[12]|04[45](\\d{10})", "1$1", !0],
        MY: ["60", "[13-9]\\d{7,9}", [["([4-79])(\\d{3})(\\d{4})", "$1-$2 $3", ["[4-79]"], "0$1"], ["(3)(\\d{4})(\\d{4})", "$1-$2 $3", ["3"], "0$1"], ["([18]\\d)(\\d{3})(\\d{3,4})", "$1-$2 $3", ["1[02-46-9][1-9]|8"], "0$1"], ["(1)([36-8]00)(\\d{2})(\\d{4})", "$1-$2-$3-$4", ["1[36-8]0", "1[36-8]00"]], ["(11)(\\d{4})(\\d{4})", "$1-$2 $3", ["11"], "0$1"], ["(15[49])(\\d{3})(\\d{4})", "$1-$2 $3", ["15[49]"], "0$1"]], "0"],
        MZ: ["258", "[28]\\d{7,8}", [["([28]\\d)(\\d{3})(\\d{3,4})", "$1 $2 $3", ["2|8[2-7]"]], ["(80\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["80"]]]],
        NA: ["264", "[68]\\d{7,8}", [["(8\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["8[1-35]"]], ["(6\\d)(\\d{3})(\\d{3,4})", "$1 $2 $3", ["6"]], ["(88)(\\d{3})(\\d{3})", "$1 $2 $3", ["88"]], ["(870)(\\d{3})(\\d{3})", "$1 $2 $3", ["870"]]], "0", "0$1"],
        NC: ["687", "[2-57-9]\\d{5}", [["(\\d{2})(\\d{2})(\\d{2})", "$1.$2.$3", ["[2-46-9]|5[0-4]"]]]],
        NE: ["227", "[0289]\\d{7}", [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["09|[289]"]], ["(08)(\\d{3})(\\d{3})", "$1 $2 $3", ["08"]]]],
        NF: ["672", "[13]\\d{5}", [["(\\d{2})(\\d{4})", "$1 $2", ["1"]], ["(\\d)(\\d{5})", "$1 $2", ["3"]]]],
        NG: ["234", "[1-6]\\d{5,8}|9\\d{5,9}|[78]\\d{5,13}", [["(\\d)(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[12]|9(?:0[3-9]|[1-9])"]], ["(\\d{2})(\\d{3})(\\d{2,3})", "$1 $2 $3", ["[3-6]|7(?:0[1-9]|[1-79])|8[2-9]"]], ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["70|8[01]|90[235-9]"]], ["([78]00)(\\d{4})(\\d{4,5})", "$1 $2 $3", ["[78]00"]], ["([78]00)(\\d{5})(\\d{5,6})", "$1 $2 $3", ["[78]00"]], ["(78)(\\d{2})(\\d{3})", "$1 $2 $3", ["78"]]], "0", "0$1"],
        NI: ["505", "[125-8]\\d{7}", [["(\\d{4})(\\d{4})", "$1 $2"]]],
        NL: ["31", "1\\d{4,8}|[2-7]\\d{8}|[89]\\d{6,9}", [["([1-578]\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["1[035]|2[0346]|3[03568]|4[0356]|5[0358]|7|8[4578]"]], ["([1-5]\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["1[16-8]|2[259]|3[124]|4[17-9]|5[124679]"]], ["(6)(\\d{8})", "$1 $2", ["6[0-57-9]"]], ["(66)(\\d{7})", "$1 $2", ["66"]], ["(14)(\\d{3,4})", "$1 $2", ["14"], "$1"], ["([89]0\\d)(\\d{4,7})", "$1 $2", ["[89]0"]]], "0", "0$1"],
        NO: ["47", "0\\d{4}|[2-9]\\d{7}", [["([489]\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3", ["[489]"]], ["([235-7]\\d)(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[235-7]"]]], null, null, null, null, null, null, ["(?:2[1-4]|3[1-3578]|5[1-35-7]|6[1-4679]|7[0-8])\\d{6}", "(?:4[015-8]|5[89]|87|9\\d)\\d{6}", "80[01]\\d{5}", "82[09]\\d{5}", "880\\d{5}", null, "0\\d{4}|81(?:0(?:0[7-9]|1\\d)|5\\d{2})\\d{3}", null, "85[0-5]\\d{5}", "810(?:0[0-6]|[2-8]\\d)\\d{3}"]],
        NP: ["977", "[1-8]\\d{7}|9(?:[1-69]\\d{6,8}|7[2-6]\\d{5,7}|8\\d{8})", [["(1)(\\d{7})", "$1-$2", ["1[2-6]"]], ["(\\d{2})(\\d{6})", "$1-$2", ["1[01]|[2-8]|9(?:[1-69]|7[15-9])"]], ["(9\\d{2})(\\d{7})", "$1-$2", ["9(?:6[013]|7[245]|8)"], "$1"]], "0", "0$1"],
        NR: ["674", "[458]\\d{6}", [["(\\d{3})(\\d{4})", "$1 $2"]]],
        NU: ["683", "[1-5]\\d{3}"],
        NZ: ["64", "6[235-9]\\d{6}|[2-57-9]\\d{7,9}", [["(\\d)(\\d{3})(\\d{4})", "$1-$2 $3", ["240|[346]|7[2-57-9]|9[1-9]"]], ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["21"]], ["(\\d{2})(\\d{3})(\\d{3,5})", "$1 $2 $3", ["2(?:1[1-9]|[69]|7[0-35-9])|70|86"]], ["(2\\d)(\\d{3,4})(\\d{4})", "$1 $2 $3", ["2[028]"]], ["(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["90"]], ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["2(?:10|74)|5|[89]0"]]], "0", "0$1"],
        OM: ["968", "(?:5|[279]\\d)\\d{6}|800\\d{5,6}", [["(2\\d)(\\d{6})", "$1 $2", ["2"]], ["([79]\\d{3})(\\d{4})", "$1 $2", ["[79]"]], ["([58]00)(\\d{4,6})", "$1 $2", ["[58]00"]]]],
        PA: ["507", "[1-9]\\d{6,7}", [["(\\d{3})(\\d{4})", "$1-$2", ["[1-57-9]"]], ["(\\d{4})(\\d{4})", "$1-$2", ["6"]]]],
        PE: ["51", "[14-9]\\d{7,8}", [["(1)(\\d{7})", "$1 $2", ["1"]], ["([4-8]\\d)(\\d{6})", "$1 $2", ["[4-7]|8[2-4]"]], ["(\\d{3})(\\d{5})", "$1 $2", ["80"]], ["(9\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["9"], "$1"]], "0", "(0$1)"],
        PF: ["689", "4\\d{5,7}|8\\d{7}", [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["4[09]|8[79]"]], ["(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3", ["44"]]]],
        PG: ["675", "[1-9]\\d{6,7}", [["(\\d{3})(\\d{4})", "$1 $2", ["[13-689]|27"]], ["(\\d{4})(\\d{4})", "$1 $2", ["20|7"]]]],
        PH: ["63", "1\\d{10,12}|2\\d{5,7}|[3-7]\\d{8}|8\\d{7,9}|9\\d{9}", [["(2)(\\d{3})(\\d{4})", "$1 $2 $3", ["2"], "(0$1)"], ["(2)(\\d{5})", "$1 $2", ["2"], "(0$1)"], ["(\\d{4})(\\d{4,6})", "$1 $2", ["3(?:23|39|46)|4(?:2[3-6]|[35]9|4[26]|76)|5(?:22|44)|642|8(?:62|8[245])", "3(?:230|397|461)|4(?:2(?:35|[46]4|51)|396|4(?:22|63)|59[347]|76[15])|5(?:221|446)|642[23]|8(?:622|8(?:[24]2|5[13]))"], "(0$1)"], ["(\\d{5})(\\d{4})", "$1 $2", ["346|4(?:27|9[35])|883", "3469|4(?:279|9(?:30|56))|8834"], "(0$1)"], ["([3-8]\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["[3-8]"], "(0$1)"], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["81|9"], "0$1"], ["(1800)(\\d{3})(\\d{4})", "$1 $2 $3", ["180", "1800"]], ["(1800)(\\d{1,2})(\\d{3})(\\d{4})", "$1 $2 $3 $4", ["180", "1800"]]], "0"],
        PK: ["92", "1\\d{8}|[2-8]\\d{5,11}|9(?:[013-9]\\d{4,10}|2\\d(?:111\\d{6}|\\d{3,7}))", [["([89]00)(\\d{3})(\\d{2})", "$1 $2 $3", ["[89]00"], "0$1"], ["(1\\d{3})(\\d{5})", "$1 $2", ["1"], "$1"], ["(\\d{2})(\\d{7,8})", "$1 $2", ["(?:2[125]|4[0-246-9]|5[1-35-7]|6[1-8]|7[14]|8[16]|91)[2-9]"]], ["(\\d{3})(\\d{6,7})", "$1 $2", ["2[349]|45|54|60|72|8[2-5]|9[2-469]", "(?:2[349]|45|54|60|72|8[2-5]|9[2-469])\\d[2-9]"]], ["(58\\d{3})(\\d{5})", "$1 $2", ["58[126]"]], ["(3\\d{2})(\\d{7})", "$1 $2", ["3"], "0$1"], ["(\\d{2})(111)(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["(?:2[125]|4[0-246-9]|5[1-35-7]|6[1-8]|7[14]|8[16]|91)1", "(?:2[125]|4[0-246-9]|5[1-35-7]|6[1-8]|7[14]|8[16]|91)11", "(?:2[125]|4[0-246-9]|5[1-35-7]|6[1-8]|7[14]|8[16]|91)111"]], ["(\\d{3})(111)(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["2[349]|45|54|60|72|8[2-5]|9[2-9]", "(?:2[349]|45|54|60|72|8[2-5]|9[2-9])\\d1", "(?:2[349]|45|54|60|72|8[2-5]|9[2-9])\\d11", "(?:2[349]|45|54|60|72|8[2-5]|9[2-9])\\d111"]]], "0", "(0$1)"],
        PL: ["48", "[1-57-9]\\d{6,8}|6\\d{5,8}", [["(\\d{3})(\\d{3})", "$1 $2", ["11[68]|64"]], ["(\\d{5})", "$1", ["19"]], ["(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3", ["1[2-8]|2[2-69]|3[2-4]|4[1-468]|5[24-689]|6[1-3578]|7[14-7]|8[1-79]|9[145]"]], ["(\\d{3})(\\d{2})(\\d{2,3})", "$1 $2 $3", ["64"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["26|39|45|5[0137]|6[0469]|7[02389]|8[08]"]], ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[14]|2[0-57-9]|3[2-4]|5[24-689]|6[1-3578]|7[14-7]|8[1-79]|9[145]"]]]],
        PM: ["508", "[45]\\d{5}", [["([45]\\d)(\\d{2})(\\d{2})", "$1 $2 $3", ["[45]"]]], "0", "0$1"],
        PR: ["1", "[5789]\\d{9}", [["(\\d{3})(\\d{3})(\\d{4})", "($1) $2-$3", null, null, null, "$1-$2-$3"]], "1", null, null, null, null, "787|939"],
        PS: ["970", "1\\d{9}|[24589]\\d{7,8}", [["([2489])(2\\d{2})(\\d{4})", "$1 $2 $3", ["[2489]2"]], ["(5[69]\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["5[69]"]], ["(1[78]00)(\\d{3})(\\d{3})", "$1 $2 $3", ["1[78]0", "1[78]00"], "$1"]], "0", "0$1"],
        PT: ["351", "[2-46-9]\\d{8}", [["(2\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["2[12]"]], ["([2-46-9]\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["2[3-9]|[346-9]"]]]],
        PW: ["680", "[2-8]\\d{6}", [["(\\d{3})(\\d{4})", "$1 $2"]]],
        PY: ["595", "5[0-5]\\d{4,7}|[2-46-9]\\d{5,8}", [["(\\d{2})(\\d{5})", "$1 $2", ["[26]1|3[289]|4[1246-8]|7[1-3]|8[1-36]"], "(0$1)"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[26]1|3[289]|4[1246-8]|7[1-3]|8[1-36]"], "(0$1)"], ["(\\d{3})(\\d{3,6})", "$1 $2", ["[2-9]0"], "0$1"], ["(\\d{3})(\\d{6})", "$1 $2", ["9[1-9]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["870", "8700"]], ["(\\d{3})(\\d{4,5})", "$1 $2", ["[2-8][1-9]"], "(0$1)"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[2-8][1-9]"], "0$1"]], "0"],
        QA: ["974", "[2-8]\\d{6,7}", [["([28]\\d{2})(\\d{4})", "$1 $2", ["[28]"]], ["([3-7]\\d{3})(\\d{4})", "$1 $2", ["[3-7]"]]]],
        RE: ["262", "[268]\\d{8}", [["([268]\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[268]"]]], "0", "0$1", null, null, null, "262|69|8"],
        RO: ["40", "[23]\\d{5,8}|[7-9]\\d{8}", [["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[23]1"]], ["(\\d{2})(\\d{4})", "$1 $2", ["[23]1"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[23][3-7]|[7-9]"]], ["(2\\d{2})(\\d{3})", "$1 $2", ["2[3-6]"]]], "0", "0$1"],
        RS: ["381", "[126-9]\\d{4,11}|3(?:[0-79]\\d{3,10}|8[2-9]\\d{2,9})", [["([23]\\d{2})(\\d{4,9})", "$1 $2", ["(?:2[389]|39)0"]], ["([1-3]\\d)(\\d{5,10})", "$1 $2", ["1|2(?:[0-24-7]|[389][1-9])|3(?:[0-8]|9[1-9])"]], ["(6\\d)(\\d{6,8})", "$1 $2", ["6"]], ["([89]\\d{2})(\\d{3,9})", "$1 $2", ["[89]"]], ["(7[26])(\\d{4,9})", "$1 $2", ["7[26]"]], ["(7[08]\\d)(\\d{4,9})", "$1 $2", ["7[08]"]]], "0", "0$1"],
        RU: ["7", "[347-9]\\d{9}", [["([3489]\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2-$3-$4", ["[3489]"]], ["(7\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["7"]]], "8", "8 ($1)", null, null, !0, null, ["(?:3(?:0[12]|4[1-35-79]|5[1-3]|65|8[1-58]|9[0145])|4(?:01|1[1356]|2[13467]|7[1-5]|8[1-7]|9[1-689])|8(?:1[1-8]|2[01]|3[13-6]|4[0-8]|5[15]|6[1-35-79]|7[1-37-9]))\\d{7}", "9\\d{9}", "80[04]\\d{7}", "80[39]\\d{7}", "808\\d{7}"]],
        RW: ["250", "[027-9]\\d{7,8}", [["(2\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["2"]], ["([7-9]\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[7-9]"], "0$1"], ["(0\\d)(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["0"]]], "0"],
        SA: ["966", "1\\d{7,8}|(?:[2-467]|92)\\d{7}|5\\d{8}|8\\d{9}", [["([1-467])(\\d{3})(\\d{4})", "$1 $2 $3", ["[1-467]"]], ["(1\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["1[1-467]"]], ["(5\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["5"]], ["(92\\d{2})(\\d{5})", "$1 $2", ["92"], "$1"], ["(800)(\\d{3})(\\d{4})", "$1 $2 $3", ["800"], "$1"], ["(811)(\\d{3})(\\d{3,4})", "$1 $2 $3", ["811"]]], "0", "0$1"],
        SB: ["677", "[1-9]\\d{4,6}", [["(\\d{2})(\\d{5})", "$1 $2", ["[7-9]"]]]],
        SC: ["248", "[24689]\\d{5,6}", [["(\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["[246]"]]]],
        SD: ["249", "[19]\\d{8}", [["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3"]], "0", "0$1"],
        SE: ["46", "[1-35-9]\\d{5,11}|4\\d{6,8}", [["(8)(\\d{2,3})(\\d{2,3})(\\d{2})", "$1-$2 $3 $4", ["8"], null, null, "$1 $2 $3 $4"], ["([1-69]\\d)(\\d{2,3})(\\d{2})(\\d{2})", "$1-$2 $3 $4", ["1[013689]|2[0136]|3[1356]|4[0246]|54|6[03]|90"], null, null, "$1 $2 $3 $4"], ["([1-469]\\d)(\\d{3})(\\d{2})", "$1-$2 $3", ["[12][136]|3[356]|4[0246]|6[03]|90"], null, null, "$1 $2 $3"], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1-$2 $3 $4", ["1[2457]|2(?:[247-9]|5[0138])|3[0247-9]|4[1357-9]|5[0-35-9]|6(?:[124-689]|7[0-2])|9(?:[125-8]|3[0-5]|4[0-3])"], null, null, "$1 $2 $3 $4"], ["(\\d{3})(\\d{2,3})(\\d{2})", "$1-$2 $3", ["1[2457]|2(?:[247-9]|5[0138])|3[0247-9]|4[1357-9]|5[0-35-9]|6(?:[124-689]|7[0-2])|9(?:[125-8]|3[0-5]|4[0-3])"], null, null, "$1 $2 $3"], ["(7\\d)(\\d{3})(\\d{2})(\\d{2})", "$1-$2 $3 $4", ["7"], null, null, "$1 $2 $3 $4"], ["(77)(\\d{2})(\\d{2})", "$1-$2$3", ["77"], null, null, "$1 $2 $3"], ["(20)(\\d{2,3})(\\d{2})", "$1-$2 $3", ["20"], null, null, "$1 $2 $3"], ["(9[034]\\d)(\\d{2})(\\d{2})(\\d{3})", "$1-$2 $3 $4", ["9[034]"], null, null, "$1 $2 $3 $4"], ["(9[034]\\d)(\\d{4})", "$1-$2", ["9[034]"], null, null, "$1 $2"], ["(\\d{3})(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1-$2 $3 $4 $5", ["25[245]|67[3-6]"], null, null, "$1 $2 $3 $4 $5"]], "0", "0$1"],
        SG: ["65", "[36]\\d{7}|[17-9]\\d{7,10}", [["([3689]\\d{3})(\\d{4})", "$1 $2", ["[369]|8[1-9]"]], ["(1[89]00)(\\d{3})(\\d{4})", "$1 $2 $3", ["1[89]0", "1[89]00"]], ["(7000)(\\d{4})(\\d{3})", "$1 $2 $3", ["700", "7000"]], ["(800)(\\d{3})(\\d{4})", "$1 $2 $3", ["800"]]]],
        SH: ["290", "[256]\\d{4}|8\\d{3}", [], null, null, null, null, null, null, ["2(?:[0-57-9]\\d|6[4-9])\\d{2}", "[56]\\d{4}", null, null, null, null, null, null, "262\\d{2}"]],
        SI: ["386", "[1-7]\\d{6,7}|[89]\\d{4,7}", [["(\\d)(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[12]|[34][24-8]|5[2-8]|7[3-8]"], "(0$1)"], ["([3-7]\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["[37][01]|4[0139]|51|6"]], ["([89][09])(\\d{3,6})", "$1 $2", ["[89][09]"]], ["([58]\\d{2})(\\d{5})", "$1 $2", ["59|8[1-3]"]]], "0", "0$1"],
        SJ: ["47", "0\\d{4}|[45789]\\d{7}", [["([489]\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3", ["[489]"]], ["([235-7]\\d)(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[235-7]"]]], null, null, null, null, null, null, ["79\\d{6}", "(?:4[015-8]|5[89]|9\\d)\\d{6}", "80[01]\\d{5}", "82[09]\\d{5}", "880\\d{5}", null, "0\\d{4}|81(?:0(?:0[7-9]|1\\d)|5\\d{2})\\d{3}", null, "85[0-5]\\d{5}", "810(?:0[0-6]|[2-8]\\d)\\d{3}"]],
        SK: ["421", "(?:[2-68]\\d{5,8}|9\\d{6,8})", [["(2)(1[67])(\\d{3,4})", "$1 $2 $3", ["21[67]"]], ["([3-5]\\d)(\\d{2})(\\d{2,3})", "$1 $2 $3", ["[3-5]"]], ["(2)(\\d{3})(\\d{3})(\\d{2})", "$1/$2 $3 $4", ["2"]], ["([3-5]\\d)(\\d{3})(\\d{2})(\\d{2})", "$1/$2 $3 $4", ["[3-5]"]], ["([689]\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[689]"]], ["(9090)(\\d{3})", "$1 $2", ["909", "9090"]]], "0", "0$1"],
        SL: ["232", "[2-9]\\d{7}", [["(\\d{2})(\\d{6})", "$1 $2"]], "0", "(0$1)"],
        SM: ["378", "[05-7]\\d{7,9}", [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[5-7]"]], ["(0549)(\\d{6})", "$1 $2", ["054", "0549"], null, null, "($1) $2"], ["(\\d{6})", "0549 $1", ["[89]"], null, null, "(0549) $1"]], null, null, "([89]\\d{5})", "0549$1"],
        SN: ["221", "[3789]\\d{8}", [["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[379]"]], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["8"]]]],
        SO: ["252", "[1-9]\\d{5,8}", [["(\\d{6})", "$1", ["[134]"]], ["(\\d)(\\d{6})", "$1 $2", ["[13-5]|2[0-79]"]], ["(\\d)(\\d{7})", "$1 $2", ["24|[67]"]], ["(\\d{2})(\\d{4})", "$1 $2", ["8[125]"]], ["(\\d{2})(\\d{5,7})", "$1 $2", ["15|28|6[1-35-9]|799|9[2-9]"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["3[59]|4[89]|6[24-6]|79|8[08]|90"]]], "0"],
        SR: ["597", "[2-8]\\d{5,6}", [["(\\d{3})(\\d{3})", "$1-$2", ["[2-4]|5[2-58]"]], ["(\\d{2})(\\d{2})(\\d{2})", "$1-$2-$3", ["56"]], ["(\\d{3})(\\d{4})", "$1-$2", ["[6-8]"]]]],
        SS: ["211", "[19]\\d{8}", [["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", null, "0$1"]], "0"],
        ST: ["239", "[29]\\d{6}", [["(\\d{3})(\\d{4})", "$1 $2"]]],
        SV: ["503", "[267]\\d{7}|[89]\\d{6}(?:\\d{4})?", [["(\\d{4})(\\d{4})", "$1 $2", ["[267]"]], ["(\\d{3})(\\d{4})", "$1 $2", ["[89]"]], ["(\\d{3})(\\d{4})(\\d{4})", "$1 $2 $3", ["[89]"]]]],
        SX: ["1", "[5789]\\d{9}", [["(\\d{3})(\\d{3})(\\d{4})", "($1) $2-$3", null, null, null, "$1-$2-$3"]], "1", null, null, null, null, "721"],
        SY: ["963", "[1-59]\\d{7,8}", [["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[1-5]"]], ["(9\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["9"]]], "0", "0$1", null, null, !0],
        SZ: ["268", "[027]\\d{7}", [["(\\d{4})(\\d{4})", "$1 $2", ["[027]"]]]],
        TA: ["290", "8\\d{3}", [], null, null, null, null, null, null, ["8\\d{3}"]],
        TC: ["1", "[5689]\\d{9}", [["(\\d{3})(\\d{3})(\\d{4})", "($1) $2-$3", null, null, null, "$1-$2-$3"]], "1", null, null, null, null, "649"],
        TD: ["235", "[2679]\\d{7}", [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4"]]],
        TG: ["228", "[279]\\d{7}", [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[279]"]]]],
        TH: ["66", "1\\d{8,9}|[2-9]\\d{7,8}", [["(2)(\\d{3})(\\d{4})", "$1 $2 $3", ["2"]], ["([13-9]\\d)(\\d{3})(\\d{3,4})", "$1 $2 $3", ["14|[3-9]"]], ["(1[89]00)(\\d{3})(\\d{3})", "$1 $2 $3", ["1[89]0", "1[89]00"], "$1"]], "0", "0$1"],
        TJ: ["992", "[3-57-9]\\d{8}", [["([349]\\d{2})(\\d{2})(\\d{4})", "$1 $2 $3", ["[34]7|91[78]"]], ["([457-9]\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["4[148]|[578]|9(?:[0235-9]|1[59])"]], ["(331700)(\\d)(\\d{2})", "$1 $2 $3", ["331", "3317", "33170", "331700"]], ["(\\d{4})(\\d)(\\d{4})", "$1 $2 $3", ["3[1-5]", "3(?:[1245]|3(?:[02-9]|1[0-589]))"]]], "8", null, null, null, !0],
        TK: ["690", "[2-47]\\d{3,6}"],
        TL: ["670", "[2-489]\\d{6}|7\\d{6,7}", [["(\\d{3})(\\d{4})", "$1 $2", ["[2-489]|70"]], ["(\\d{4})(\\d{4})", "$1 $2", ["7[3-8]"]]]],
        TM: ["993", "[1-6]\\d{7}", [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2-$3-$4", ["12"]], ["(\\d{2})(\\d{6})", "$1 $2", ["6"], "8 $1"], ["(\\d{3})(\\d)(\\d{2})(\\d{2})", "$1 $2-$3-$4", ["13|[2-5]"]]], "8", "(8 $1)"],
        TN: ["216", "[2-57-9]\\d{7}", [["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3"]]],
        TO: ["676", "[02-8]\\d{4,6}", [["(\\d{2})(\\d{3})", "$1-$2", ["[1-6]|7[0-4]|8[05]"]], ["(\\d{3})(\\d{4})", "$1 $2", ["7[5-9]|8[47-9]"]], ["(\\d{4})(\\d{3})", "$1 $2", ["0"]]]],
        TR: ["90", "[2-589]\\d{9}|444\\d{4}", [["(\\d{3})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[23]|4(?:[0-35-9]|4[0-35-9])"], "(0$1)"], ["(\\d{3})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["5[02-69]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["51|[89]"], "0$1"], ["(444)(\\d{1})(\\d{3})", "$1 $2 $3", ["444"]]], "0", null, null, null, !0],
        TT: ["1", "[589]\\d{9}", [["(\\d{3})(\\d{3})(\\d{4})", "($1) $2-$3", null, null, null, "$1-$2-$3"]], "1", null, null, null, null, "868"],
        TV: ["688", "[279]\\d{4,6}"],
        TW: ["886", "2\\d{6,8}|[3-689]\\d{7,8}|7\\d{7,9}", [["(20)(\\d)(\\d{4})", "$1 $2 $3", ["202"]], ["([258]0)(\\d{3})(\\d{4})", "$1 $2 $3", ["20[013-9]|50[0-46-9]|80[0-79]"]], ["([2-8])(\\d{3,4})(\\d{4})", "$1 $2 $3", ["[25][2-8]|[346]|[78][1-9]"]], ["(9\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["9"]], ["(70)(\\d{4})(\\d{4})", "$1 $2 $3", ["70"]]], "0", "0$1"],
        TZ: ["255", "\\d{9}", [["([24]\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["[24]"]], ["([67]\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[67]"]], ["([89]\\d{2})(\\d{2})(\\d{4})", "$1 $2 $3", ["[89]"]]], "0", "0$1"],
        UA: ["380", "[3-9]\\d{8}", [["([3-9]\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["[38]9|4(?:[45][0-5]|87)|5(?:0|[67][37])|6[36-8]|7|9[1-9]", "[38]9|4(?:[45][0-5]|87)|5(?:0|6(?:3[14-7]|7)|7[37])|6[36-8]|7|9[1-9]"]], ["([3-689]\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["(?:3[1-8]|4[136-8])2|5(?:[12457]2|6[24])|6(?:[12][29]|[49]2|5[24])|8[0-8]|90", "3(?:[1-46-8]2[013-9]|52)|4(?:[1378]2|62[013-9])|5(?:[12457]2|6[24])|6(?:[12][29]|[49]2|5[24])|8[0-8]|90"]], ["([3-6]\\d{3})(\\d{5})", "$1 $2", ["3(?:[1-46-8]|5[013-9])|4(?:[137][013-9]|[45][6-9]|6|8[4-6])|5(?:[1245][013-9]|3|6[0135689]|7[4-6])|6(?:[12][13-8]|[49][013-9]|5[0135-9])", "3(?:[1-46-8](?:[013-9]|22)|5[013-9])|4(?:[137][013-9]|[45][6-9]|6(?:[013-9]|22)|8[4-6])|5(?:[1245][013-9]|3|6(?:[015689]|3[02389])|7[4-6])|6(?:[12][13-8]|[49][013-9]|5[0135-9])"]]], "0", "0$1"],
        UG: ["256", "\\d{9}", [["(\\d{3})(\\d{6})", "$1 $2", ["20[0-8]|4(?:6[45]|[7-9])|[7-9]", "20(?:[013-8]|2[5-9])|4(?:6[45]|[7-9])|[7-9]"]], ["(\\d{2})(\\d{7})", "$1 $2", ["3|4(?:[1-5]|6[0-36-9])"]], ["(2024)(\\d{5})", "$1 $2", ["202", "2024"]]], "0", "0$1"],
        US: ["1", "[2-9]\\d{9}", [["(\\d{3})(\\d{3})(\\d{4})", "($1) $2-$3", null, null, null, "$1-$2-$3"]], "1", null, null, null, !0, null, ["(?:2(?:0[1-35-9]|1[02-9]|2[03-589]|3[149]|4[08]|5[1-46]|6[0279]|7[026]|8[13])|3(?:0[1-57-9]|1[02-9]|2[0135]|3[0-24679]|4[67]|5[12]|6[014]|8[056])|4(?:0[124-9]|1[02-579]|2[3-5]|3[0245]|4[0235]|58|6[39]|7[0589]|8[04])|5(?:0[1-57-9]|1[0235-8]|20|3[0149]|4[01]|5[19]|6[1-47]|7[013-5]|8[056])|6(?:0[1-35-9]|1[024-9]|2[03689]|3[016]|4[16]|5[017]|6[0-279]|78|8[012])|7(?:0[1-46-8]|1[02-9]|2[04-7]|3[1247]|4[037]|5[47]|6[02359]|7[02-59]|8[156])|8(?:0[1-68]|1[02-8]|28|3[0-258]|4[3578]|5[046-9]|6[02-5]|7[028])|9(?:0[1346-9]|1[02-9]|2[0589]|3[014678]|4[0179]|5[12469]|7[0-3589]|8[04-69]))[2-9]\\d{6}", null, "8(?:00|33|44|55|66|77|88)[2-9]\\d{6}", "900[2-9]\\d{6}", "5(?:(?:00|22|33|44|66|77|88)[2-9]|21[23])\\d{6}"]],
        UY: ["598", "[2489]\\d{6,7}", [["(\\d{4})(\\d{4})", "$1 $2", ["[24]"]], ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["9[1-9]"], "0$1"], ["(\\d{3})(\\d{4})", "$1 $2", ["[89]0"], "0$1"]], "0"],
        UZ: ["998", "[679]\\d{8}", [["([679]\\d)(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[679]"]]], "8", "8 $1"],
        VA: ["39", "(?:0(?:878\\d{5}|6698\\d{5})|[1589]\\d{5,10}|3(?:[12457-9]\\d{8}|[36]\\d{7,9}))", [["(\\d{2})(\\d{3,4})(\\d{4})", "$1 $2 $3", ["0[26]|55"]], ["(0[26])(\\d{4})(\\d{5})", "$1 $2 $3", ["0[26]"]], ["(0[26])(\\d{4,6})", "$1 $2", ["0[26]"]], ["(0\\d{2})(\\d{3,4})(\\d{4})", "$1 $2 $3", ["0[13-57-9][0159]"]], ["(\\d{3})(\\d{3,6})", "$1 $2", ["0[13-57-9][0159]|8(?:03|4[17]|9[245])", "0[13-57-9][0159]|8(?:03|4[17]|9(?:2|[45][0-4]))"]], ["(0\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["0[13-57-9][2-46-8]"]], ["(0\\d{3})(\\d{2,6})", "$1 $2", ["0[13-57-9][2-46-8]"]], ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[13]|8(?:00|4[08]|9[59])", "[13]|8(?:00|4[08]|9(?:5[5-9]|9))"]], ["(\\d{4})(\\d{4})", "$1 $2", ["894", "894[5-9]"]], ["(\\d{3})(\\d{4})(\\d{4})", "$1 $2 $3", ["3"]]], null, null, null, null, null, null, ["06698\\d{5}", "3(?:[12457-9]\\d{8}|6\\d{7,8}|3\\d{7,9})", "80(?:0\\d{6}|3\\d{3})", "0878\\d{5}|1(?:44|6[346])\\d{6}|89(?:2\\d{3}|4(?:[0-4]\\d{2}|[5-9]\\d{4})|5(?:[0-4]\\d{2}|[5-9]\\d{6})|9\\d{6})", "1(?:78\\d|99)\\d{6}", null, null, null, "55\\d{8}", "84(?:[08]\\d{6}|[17]\\d{3})"]],
        VC: ["1", "[5789]\\d{9}", [["(\\d{3})(\\d{3})(\\d{4})", "($1) $2-$3", null, null, null, "$1-$2-$3"]], "1", null, null, null, null, "784"],
        VE: ["58", "[24589]\\d{9}", [["(\\d{3})(\\d{7})", "$1-$2"]], "0", "0$1"],
        VG: ["1", "[2589]\\d{9}", [["(\\d{3})(\\d{3})(\\d{4})", "($1) $2-$3", null, null, null, "$1-$2-$3"]], "1", null, null, null, null, "284"],
        VI: ["1", "[3589]\\d{9}", [["(\\d{3})(\\d{3})(\\d{4})", "($1) $2-$3", null, null, null, "$1-$2-$3"]], "1", null, null, null, null, "340"],
        VN: ["84", "1\\d{6,9}|2\\d{9}|6\\d{6,7}|7\\d{6}|8\\d{6,8}|9\\d{8}", [["([17]99)(\\d{4})", "$1 $2", ["[17]99"]], ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["2[48]"]], ["(80)(\\d{5})", "$1 $2", ["80"]], ["(69\\d)(\\d{4,5})", "$1 $2", ["69"]], ["(\\d{3})(\\d{4})(\\d{3})", "$1 $2 $3", ["2[0-35-79]"]], ["([89]\\d)(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["8(?:8|9[89])|9"]], ["(1[2689]\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["1(?:[26]|8[68]|99)"]], ["(86[89])(\\d{3})(\\d{3})", "$1 $2 $3", ["86[89]"]], ["(1[89]00)(\\d{4,6})", "$1 $2", ["1[89]0", "1[89]00"], "$1"]], "0", "0$1", null, null, !0],
        VU: ["678", "[2-57-9]\\d{4,6}", [["(\\d{3})(\\d{4})", "$1 $2", ["[579]"]]]],
        WF: ["681", "[4-8]\\d{5}", [["(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3"]]],
        WS: ["685", "[2-8]\\d{4,6}", [["(8\\d{2})(\\d{3,4})", "$1 $2", ["8"]], ["(7\\d)(\\d{5})", "$1 $2", ["7"]], ["(\\d{5})", "$1", ["[2-6]"]]]],
        YE: ["967", "[1-7]\\d{6,8}", [["([1-7])(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[1-6]|7[24-68]"]], ["(7\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["7[0137]"]]], "0", "0$1"],
        YT: ["262", "[268]\\d{8}", [["([268]\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[268]"]]], "0", null, null, null, null, "269|63"],
        ZA: ["27", "[1-79]\\d{8}|8\\d{4,8}", [["(860)(\\d{3})(\\d{3})", "$1 $2 $3", ["860"]], ["(\\d{2})(\\d{3,4})", "$1 $2", ["8[1-4]"]], ["(\\d{2})(\\d{3})(\\d{2,3})", "$1 $2 $3", ["8[1-4]"]], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[1-79]|8(?:[0-57]|6[1-9])"]]], "0", "0$1"],
        ZM: ["260", "[289]\\d{8}", [["(\\d{2})(\\d{4})", "$1 $2", null, "$1"], ["([1-8])(\\d{2})(\\d{4})", "$1 $2 $3", ["[1-8]"], "$1"], ["([29]\\d)(\\d{7})", "$1 $2", ["[29]"]], ["(800)(\\d{3})(\\d{3})", "$1 $2 $3", ["800"]]], "0", "0$1"],
        ZW: ["263", "2(?:[0-57-9]\\d{3,8}|6(?:[14]\\d{7}|\\d{4}))|[13-69]\\d{4,9}|7\\d{8}|8[06]\\d{5,8}", [["([49])(\\d{3})(\\d{2,4})", "$1 $2 $3", ["4|9[2-9]"]], ["(7\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["7"]], ["(86\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["86[24]"]], ["([2356]\\d{2})(\\d{3,5})", "$1 $2", ["2(?:0[45]|2[278]|[49]8|[78])|3(?:[09]8|17|3[78]|7[1569]|8[37])|5[15][78]|6(?:[29]8|37|[68][78]|75)"]], ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["2(?:1[39]|2[0157]|31|[56][14]|7[35]|84)|329"]], ["([1-356]\\d)(\\d{3,5})", "$1 $2", ["1[3-9]|2[02569]|3[0-69]|5[05689]|6"]], ["([235]\\d)(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[23]9|54"]], ["([25]\\d{3})(\\d{3,5})", "$1 $2", ["(?:25|54)8", "258[23]|5483"]], ["(8\\d{3})(\\d{6})", "$1 $2", ["86"]], ["(80\\d)(\\d{4})", "$1 $2", ["80"]]], "0", "0$1"],
        "001": ["979", "\\d{9}", [["(\\d)(\\d{4})(\\d{4})", "$1 $2 $3"]]]
      }
    };
  }, function (t, e) {
    "function" == typeof Object.create ? t.exports = function (t, e) {
      t.super_ = e, t.prototype = Object.create(e.prototype, {
        constructor: {
          value: t,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      });
    } : t.exports = function (t, e) {
      t.super_ = e;

      var n = function n() {};

      n.prototype = e.prototype, t.prototype = new n(), t.prototype.constructor = t;
    };
  }, function (t, e, n) {
    var r = n(37)("wks"),
        i = n(38),
        o = n(7).Symbol,
        a = "function" == typeof o;
    (t.exports = function (t) {
      return r[t] || (r[t] = a && o[t] || (a ? o : i)("Symbol." + t));
    }).store = r;
  }, function (t, e) {
    var n = t.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();
    "number" == typeof __g && (__g = n);
  }, function (t, e) {
    var n = t.exports = {
      version: "2.5.1"
    };
    "number" == typeof __e && (__e = n);
  }, function (t, e, n) {
    "use strict";

    var r = n(17),
        i = Object.keys || function (t) {
      var e = [];

      for (var n in t) {
        e.push(n);
      }

      return e;
    };

    t.exports = f;
    var o = n(13);
    o.inherits = n(5);
    var a = n(49),
        d = n(53);
    o.inherits(f, a);

    for (var s = i(d.prototype), u = 0; u < s.length; u++) {
      var l = s[u];
      f.prototype[l] || (f.prototype[l] = d.prototype[l]);
    }

    function f(t) {
      if (!(this instanceof f)) return new f(t);
      a.call(this, t), d.call(this, t), t && !1 === t.readable && (this.readable = !1), t && !1 === t.writable && (this.writable = !1), this.allowHalfOpen = !0, t && !1 === t.allowHalfOpen && (this.allowHalfOpen = !1), this.once("end", c);
    }

    function c() {
      this.allowHalfOpen || this._writableState.ended || r(h, this);
    }

    function h(t) {
      t.end();
    }

    Object.defineProperty(f.prototype, "destroyed", {
      get: function get() {
        return void 0 !== this._readableState && void 0 !== this._writableState && this._readableState.destroyed && this._writableState.destroyed;
      },
      set: function set(t) {
        void 0 !== this._readableState && void 0 !== this._writableState && (this._readableState.destroyed = t, this._writableState.destroyed = t);
      }
    }), f.prototype._destroy = function (t, e) {
      this.push(null), this.end(), r(e, t);
    };
  }, function (t, e, n) {
    var r = n(14),
        i = n(33);
    t.exports = n(11) ? function (t, e, n) {
      return r.f(t, e, i(1, n));
    } : function (t, e, n) {
      return t[e] = n, t;
    };
  }, function (t, e, n) {
    t.exports = !n(24)(function () {
      return 7 != Object.defineProperty({}, "a", {
        get: function get() {
          return 7;
        }
      }).a;
    });
  }, function (t, e) {
    t.exports = {};
  }, function (t, e, n) {
    (function (t) {
      function n(t) {
        return Object.prototype.toString.call(t);
      }

      e.isArray = function (t) {
        return Array.isArray ? Array.isArray(t) : "[object Array]" === n(t);
      }, e.isBoolean = function (t) {
        return "boolean" == typeof t;
      }, e.isNull = function (t) {
        return null === t;
      }, e.isNullOrUndefined = function (t) {
        return null == t;
      }, e.isNumber = function (t) {
        return "number" == typeof t;
      }, e.isString = function (t) {
        return "string" == typeof t;
      }, e.isSymbol = function (t) {
        return "symbol" == _typeof(t);
      }, e.isUndefined = function (t) {
        return void 0 === t;
      }, e.isRegExp = function (t) {
        return "[object RegExp]" === n(t);
      }, e.isObject = function (t) {
        return "object" == _typeof(t) && null !== t;
      }, e.isDate = function (t) {
        return "[object Date]" === n(t);
      }, e.isError = function (t) {
        return "[object Error]" === n(t) || t instanceof Error;
      }, e.isFunction = function (t) {
        return "function" == typeof t;
      }, e.isPrimitive = function (t) {
        return null === t || "boolean" == typeof t || "number" == typeof t || "string" == typeof t || "symbol" == _typeof(t) || void 0 === t;
      }, e.isBuffer = t.isBuffer;
    }).call(this, n(3).Buffer);
  }, function (t, e, n) {
    var r = n(15),
        i = n(71),
        o = n(72),
        a = Object.defineProperty;
    e.f = n(11) ? Object.defineProperty : function (t, e, n) {
      if (r(t), e = o(e, !0), r(n), i) try {
        return a(t, e, n);
      } catch (t) {}
      if ("get" in n || "set" in n) throw TypeError("Accessors not supported!");
      return "value" in n && (t[e] = n.value), t;
    };
  }, function (t, e, n) {
    var r = n(23);

    t.exports = function (t) {
      if (!r(t)) throw TypeError(t + " is not an object!");
      return t;
    };
  }, function (t, e) {
    var n = {}.hasOwnProperty;

    t.exports = function (t, e) {
      return n.call(t, e);
    };
  }, function (t, e, n) {
    "use strict";

    (function (e) {
      !e.version || 0 === e.version.indexOf("v0.") || 0 === e.version.indexOf("v1.") && 0 !== e.version.indexOf("v1.8.") ? t.exports = function (t, n, r, i) {
        if ("function" != typeof t) throw new TypeError('"callback" argument must be a function');
        var o,
            a,
            d = arguments.length;

        switch (d) {
          case 0:
          case 1:
            return e.nextTick(t);

          case 2:
            return e.nextTick(function () {
              t.call(null, n);
            });

          case 3:
            return e.nextTick(function () {
              t.call(null, n, r);
            });

          case 4:
            return e.nextTick(function () {
              t.call(null, n, r, i);
            });

          default:
            for (o = new Array(d - 1), a = 0; a < o.length;) {
              o[a++] = arguments[a];
            }

            return e.nextTick(function () {
              t.apply(null, o);
            });
        }
      } : t.exports = e.nextTick;
    }).call(this, n(2));
  }, function (t, e, n) {
    "use strict";

    var r = "undefined" != typeof Uint8Array && "undefined" != typeof Uint16Array && "undefined" != typeof Int32Array;
    e.assign = function (t) {
      for (var e = Array.prototype.slice.call(arguments, 1); e.length;) {
        var n = e.shift();

        if (n) {
          if ("object" != _typeof(n)) throw new TypeError(n + "must be non-object");

          for (var r in n) {
            n.hasOwnProperty(r) && (t[r] = n[r]);
          }
        }
      }

      return t;
    }, e.shrinkBuf = function (t, e) {
      return t.length === e ? t : t.subarray ? t.subarray(0, e) : (t.length = e, t);
    };
    var i = {
      arraySet: function arraySet(t, e, n, r, i) {
        if (e.subarray && t.subarray) t.set(e.subarray(n, n + r), i);else for (var o = 0; o < r; o++) {
          t[i + o] = e[n + o];
        }
      },
      flattenChunks: function flattenChunks(t) {
        var e, n, r, i, o, a;

        for (r = 0, e = 0, n = t.length; e < n; e++) {
          r += t[e].length;
        }

        for (a = new Uint8Array(r), i = 0, e = 0, n = t.length; e < n; e++) {
          o = t[e], a.set(o, i), i += o.length;
        }

        return a;
      }
    },
        o = {
      arraySet: function arraySet(t, e, n, r, i) {
        for (var o = 0; o < r; o++) {
          t[i + o] = e[n + o];
        }
      },
      flattenChunks: function flattenChunks(t) {
        return [].concat.apply([], t);
      }
    };
    e.setTyped = function (t) {
      t ? (e.Buf8 = Uint8Array, e.Buf16 = Uint16Array, e.Buf32 = Int32Array, e.assign(e, i)) : (e.Buf8 = Array, e.Buf16 = Array, e.Buf32 = Array, e.assign(e, o));
    }, e.setTyped(r);
  }, function (t, e, n) {}, function (t, e, n) {}, function (t, e, n) {
    "use strict";

    e.__esModule = !0;

    var r = function (t) {
      return t && t.__esModule ? t : {
        default: t
      };
    }(n(66));

    e.default = r.default || function (t) {
      for (var e = 1; e < arguments.length; e++) {
        var n = arguments[e];

        for (var r in n) {
          Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
        }
      }

      return t;
    };
  }, function (t, e, n) {
    var r = n(7),
        i = n(8),
        o = n(69),
        a = n(10),
        d = function d(t, e, n) {
      var s,
          u,
          l,
          f = t & d.F,
          c = t & d.G,
          h = t & d.S,
          $ = t & d.P,
          p = t & d.B,
          _ = t & d.W,
          g = c ? i : i[e] || (i[e] = {}),
          m = g.prototype,
          v = c ? r : h ? r[e] : (r[e] || {}).prototype;

      for (s in c && (n = e), n) {
        (u = !f && v && void 0 !== v[s]) && s in g || (l = u ? v[s] : n[s], g[s] = c && "function" != typeof v[s] ? n[s] : p && u ? o(l, r) : _ && v[s] == l ? function (t) {
          var e = function e(_e, n, r) {
            if (this instanceof t) {
              switch (arguments.length) {
                case 0:
                  return new t();

                case 1:
                  return new t(_e);

                case 2:
                  return new t(_e, n);
              }

              return new t(_e, n, r);
            }

            return t.apply(this, arguments);
          };

          return e.prototype = t.prototype, e;
        }(l) : $ && "function" == typeof l ? o(Function.call, l) : l, $ && ((g.virtual || (g.virtual = {}))[s] = l, t & d.R && m && !m[s] && a(m, s, l)));
      }
    };

    d.F = 1, d.G = 2, d.S = 4, d.P = 8, d.B = 16, d.W = 32, d.U = 64, d.R = 128, t.exports = d;
  }, function (t, e) {
    t.exports = function (t) {
      return "object" == _typeof(t) ? null !== t : "function" == typeof t;
    };
  }, function (t, e) {
    t.exports = function (t) {
      try {
        return !!t();
      } catch (t) {
        return !0;
      }
    };
  }, function (t, e, n) {
    var r = n(35),
        i = n(26);

    t.exports = function (t) {
      return r(i(t));
    };
  }, function (t, e) {
    t.exports = function (t) {
      if (void 0 == t) throw TypeError("Can't call method on  " + t);
      return t;
    };
  }, function (t, e) {
    var n = Math.ceil,
        r = Math.floor;

    t.exports = function (t) {
      return isNaN(t = +t) ? 0 : (t > 0 ? r : n)(t);
    };
  }, function (t, e, n) {
    var r = n(37)("keys"),
        i = n(38);

    t.exports = function (t) {
      return r[t] || (r[t] = i(t));
    };
  }, function (t, e, n) {
    (e = t.exports = n(49)).Stream = e, e.Readable = e, e.Writable = n(53), e.Duplex = n(9), e.Transform = n(55), e.PassThrough = n(112);
  }, function (t, e, n) {
    var r = n(3),
        i = r.Buffer;

    function o(t, e) {
      for (var n in t) {
        e[n] = t[n];
      }
    }

    function a(t, e, n) {
      return i(t, e, n);
    }

    i.from && i.alloc && i.allocUnsafe && i.allocUnsafeSlow ? t.exports = r : (o(r, e), e.Buffer = a), o(i, a), a.from = function (t, e, n) {
      if ("number" == typeof t) throw new TypeError("Argument must not be a number");
      return i(t, e, n);
    }, a.alloc = function (t, e, n) {
      if ("number" != typeof t) throw new TypeError("Argument must be a number");
      var r = i(t);
      return void 0 !== e ? "string" == typeof n ? r.fill(e, n) : r.fill(e) : r.fill(0), r;
    }, a.allocUnsafe = function (t) {
      if ("number" != typeof t) throw new TypeError("Argument must be a number");
      return i(t);
    }, a.allocUnsafeSlow = function (t) {
      if ("number" != typeof t) throw new TypeError("Argument must be a number");
      return r.SlowBuffer(t);
    };
  }, function (t, e, n) {
    (function (t, r) {
      var i = /%[sdj%]/g;
      e.format = function (t) {
        if (!g(t)) {
          for (var e = [], n = 0; n < arguments.length; n++) {
            e.push(d(arguments[n]));
          }

          return e.join(" ");
        }

        n = 1;

        for (var r = arguments, o = r.length, a = String(t).replace(i, function (t) {
          if ("%%" === t) return "%";
          if (n >= o) return t;

          switch (t) {
            case "%s":
              return String(r[n++]);

            case "%d":
              return Number(r[n++]);

            case "%j":
              try {
                return JSON.stringify(r[n++]);
              } catch (t) {
                return "[Circular]";
              }

            default:
              return t;
          }
        }), s = r[n]; n < o; s = r[++n]) {
          p(s) || !y(s) ? a += " " + s : a += " " + d(s);
        }

        return a;
      }, e.deprecate = function (n, i) {
        if (m(t.process)) return function () {
          return e.deprecate(n, i).apply(this, arguments);
        };
        if (!0 === r.noDeprecation) return n;
        var o = !1;
        return function () {
          if (!o) {
            if (r.throwDeprecation) throw new Error(i);
            r.traceDeprecation ? console.trace(i) : console.error(i), o = !0;
          }

          return n.apply(this, arguments);
        };
      };
      var o,
          a = {};

      function d(t, n) {
        var r = {
          seen: [],
          stylize: u
        };
        return arguments.length >= 3 && (r.depth = arguments[2]), arguments.length >= 4 && (r.colors = arguments[3]), $(n) ? r.showHidden = n : n && e._extend(r, n), m(r.showHidden) && (r.showHidden = !1), m(r.depth) && (r.depth = 2), m(r.colors) && (r.colors = !1), m(r.customInspect) && (r.customInspect = !0), r.colors && (r.stylize = s), l(r, t, r.depth);
      }

      function s(t, e) {
        var n = d.styles[e];
        return n ? "[" + d.colors[n][0] + "m" + t + "[" + d.colors[n][1] + "m" : t;
      }

      function u(t, e) {
        return t;
      }

      function l(t, n, r) {
        if (t.customInspect && n && E(n.inspect) && n.inspect !== e.inspect && (!n.constructor || n.constructor.prototype !== n)) {
          var i = n.inspect(r, t);
          return g(i) || (i = l(t, i, r)), i;
        }

        var o = function (t, e) {
          if (m(e)) return t.stylize("undefined", "undefined");

          if (g(e)) {
            var n = "'" + JSON.stringify(e).replace(/^"|"$/g, "").replace(/'/g, "\\'").replace(/\\"/g, '"') + "'";
            return t.stylize(n, "string");
          }

          if (_(e)) return t.stylize("" + e, "number");
          if ($(e)) return t.stylize("" + e, "boolean");
          if (p(e)) return t.stylize("null", "null");
        }(t, n);

        if (o) return o;

        var a = Object.keys(n),
            d = function (t) {
          var e = {};
          return t.forEach(function (t, n) {
            e[t] = !0;
          }), e;
        }(a);

        if (t.showHidden && (a = Object.getOwnPropertyNames(n)), w(n) && (a.indexOf("message") >= 0 || a.indexOf("description") >= 0)) return f(n);

        if (0 === a.length) {
          if (E(n)) {
            var s = n.name ? ": " + n.name : "";
            return t.stylize("[Function" + s + "]", "special");
          }

          if (v(n)) return t.stylize(RegExp.prototype.toString.call(n), "regexp");
          if (b(n)) return t.stylize(Date.prototype.toString.call(n), "date");
          if (w(n)) return f(n);
        }

        var u,
            y = "",
            k = !1,
            x = ["{", "}"];
        (h(n) && (k = !0, x = ["[", "]"]), E(n)) && (y = " [Function" + (n.name ? ": " + n.name : "") + "]");
        return v(n) && (y = " " + RegExp.prototype.toString.call(n)), b(n) && (y = " " + Date.prototype.toUTCString.call(n)), w(n) && (y = " " + f(n)), 0 !== a.length || k && 0 != n.length ? r < 0 ? v(n) ? t.stylize(RegExp.prototype.toString.call(n), "regexp") : t.stylize("[Object]", "special") : (t.seen.push(n), u = k ? function (t, e, n, r, i) {
          for (var o = [], a = 0, d = e.length; a < d; ++a) {
            A(e, String(a)) ? o.push(c(t, e, n, r, String(a), !0)) : o.push("");
          }

          return i.forEach(function (i) {
            i.match(/^\d+$/) || o.push(c(t, e, n, r, i, !0));
          }), o;
        }(t, n, r, d, a) : a.map(function (e) {
          return c(t, n, r, d, e, k);
        }), t.seen.pop(), function (t, e, n) {
          if (t.reduce(function (t, e) {
            return 0, e.indexOf("\n") >= 0 && 0, t + e.replace(/\u001b\[\d\d?m/g, "").length + 1;
          }, 0) > 60) return n[0] + ("" === e ? "" : e + "\n ") + " " + t.join(",\n  ") + " " + n[1];
          return n[0] + e + " " + t.join(", ") + " " + n[1];
        }(u, y, x)) : x[0] + y + x[1];
      }

      function f(t) {
        return "[" + Error.prototype.toString.call(t) + "]";
      }

      function c(t, e, n, r, i, o) {
        var a, d, s;

        if ((s = Object.getOwnPropertyDescriptor(e, i) || {
          value: e[i]
        }).get ? d = s.set ? t.stylize("[Getter/Setter]", "special") : t.stylize("[Getter]", "special") : s.set && (d = t.stylize("[Setter]", "special")), A(r, i) || (a = "[" + i + "]"), d || (t.seen.indexOf(s.value) < 0 ? (d = p(n) ? l(t, s.value, null) : l(t, s.value, n - 1)).indexOf("\n") > -1 && (d = o ? d.split("\n").map(function (t) {
          return "  " + t;
        }).join("\n").substr(2) : "\n" + d.split("\n").map(function (t) {
          return "   " + t;
        }).join("\n")) : d = t.stylize("[Circular]", "special")), m(a)) {
          if (o && i.match(/^\d+$/)) return d;
          (a = JSON.stringify("" + i)).match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/) ? (a = a.substr(1, a.length - 2), a = t.stylize(a, "name")) : (a = a.replace(/'/g, "\\'").replace(/\\"/g, '"').replace(/(^"|"$)/g, "'"), a = t.stylize(a, "string"));
        }

        return a + ": " + d;
      }

      function h(t) {
        return Array.isArray(t);
      }

      function $(t) {
        return "boolean" == typeof t;
      }

      function p(t) {
        return null === t;
      }

      function _(t) {
        return "number" == typeof t;
      }

      function g(t) {
        return "string" == typeof t;
      }

      function m(t) {
        return void 0 === t;
      }

      function v(t) {
        return y(t) && "[object RegExp]" === k(t);
      }

      function y(t) {
        return "object" == _typeof(t) && null !== t;
      }

      function b(t) {
        return y(t) && "[object Date]" === k(t);
      }

      function w(t) {
        return y(t) && ("[object Error]" === k(t) || t instanceof Error);
      }

      function E(t) {
        return "function" == typeof t;
      }

      function k(t) {
        return Object.prototype.toString.call(t);
      }

      function x(t) {
        return t < 10 ? "0" + t.toString(10) : t.toString(10);
      }

      e.debuglog = function (t) {
        if (m(o) && (o = r.env.NODE_DEBUG || ""), t = t.toUpperCase(), !a[t]) if (new RegExp("\\b" + t + "\\b", "i").test(o)) {
          var n = r.pid;

          a[t] = function () {
            var r = e.format.apply(e, arguments);
            console.error("%s %d: %s", t, n, r);
          };
        } else a[t] = function () {};
        return a[t];
      }, e.inspect = d, d.colors = {
        bold: [1, 22],
        italic: [3, 23],
        underline: [4, 24],
        inverse: [7, 27],
        white: [37, 39],
        grey: [90, 39],
        black: [30, 39],
        blue: [34, 39],
        cyan: [36, 39],
        green: [32, 39],
        magenta: [35, 39],
        red: [31, 39],
        yellow: [33, 39]
      }, d.styles = {
        special: "cyan",
        number: "yellow",
        boolean: "yellow",
        undefined: "grey",
        null: "bold",
        string: "green",
        date: "magenta",
        regexp: "red"
      }, e.isArray = h, e.isBoolean = $, e.isNull = p, e.isNullOrUndefined = function (t) {
        return null == t;
      }, e.isNumber = _, e.isString = g, e.isSymbol = function (t) {
        return "symbol" == _typeof(t);
      }, e.isUndefined = m, e.isRegExp = v, e.isObject = y, e.isDate = b, e.isError = w, e.isFunction = E, e.isPrimitive = function (t) {
        return null === t || "boolean" == typeof t || "number" == typeof t || "string" == typeof t || "symbol" == _typeof(t) || void 0 === t;
      }, e.isBuffer = n(132);
      var S = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

      function A(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e);
      }

      e.log = function () {
        console.log("%s - %s", function () {
          var t = new Date(),
              e = [x(t.getHours()), x(t.getMinutes()), x(t.getSeconds())].join(":");
          return [t.getDate(), S[t.getMonth()], e].join(" ");
        }(), e.format.apply(e, arguments));
      }, e.inherits = n(5), e._extend = function (t, e) {
        if (!e || !y(e)) return t;

        for (var n = Object.keys(e), r = n.length; r--;) {
          t[n[r]] = e[n[r]];
        }

        return t;
      };
    }).call(this, n(0), n(2));
  }, function (t, e, n) {
    var r = n(23),
        i = n(7).document,
        o = r(i) && r(i.createElement);

    t.exports = function (t) {
      return o ? i.createElement(t) : {};
    };
  }, function (t, e) {
    t.exports = function (t, e) {
      return {
        enumerable: !(1 & t),
        configurable: !(2 & t),
        writable: !(4 & t),
        value: e
      };
    };
  }, function (t, e, n) {
    var r = n(74),
        i = n(39);

    t.exports = Object.keys || function (t) {
      return r(t, i);
    };
  }, function (t, e, n) {
    var r = n(36);
    t.exports = Object("z").propertyIsEnumerable(0) ? Object : function (t) {
      return "String" == r(t) ? t.split("") : Object(t);
    };
  }, function (t, e) {
    var n = {}.toString;

    t.exports = function (t) {
      return n.call(t).slice(8, -1);
    };
  }, function (t, e, n) {
    var r = n(7),
        i = r["__core-js_shared__"] || (r["__core-js_shared__"] = {});

    t.exports = function (t) {
      return i[t] || (i[t] = {});
    };
  }, function (t, e) {
    var n = 0,
        r = Math.random();

    t.exports = function (t) {
      return "Symbol(".concat(void 0 === t ? "" : t, ")_", (++n + r).toString(36));
    };
  }, function (t, e) {
    t.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",");
  }, function (t, e, n) {
    var r = n(26);

    t.exports = function (t) {
      return Object(r(t));
    };
  }, function (t, e, n) {
    n(82);

    for (var r = n(7), i = n(10), o = n(12), a = n(6)("toStringTag"), d = "CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList".split(","), s = 0; s < d.length; s++) {
      var u = d[s],
          l = r[u],
          f = l && l.prototype;
      f && !f[a] && i(f, a, u), o[u] = o.Array;
    }
  }, function (t, e, n) {
    "use strict";

    var r = n(85),
        i = n(22),
        o = n(86),
        a = n(10),
        d = n(16),
        s = n(12),
        u = n(87),
        l = n(43),
        f = n(91),
        c = n(6)("iterator"),
        h = !([].keys && "next" in [].keys()),
        $ = function $() {
      return this;
    };

    t.exports = function (t, e, n, p, _, g, m) {
      u(n, e, p);

      var v,
          y,
          b,
          w = function w(t) {
        if (!h && t in S) return S[t];

        switch (t) {
          case "keys":
          case "values":
            return function () {
              return new n(this, t);
            };
        }

        return function () {
          return new n(this, t);
        };
      },
          E = e + " Iterator",
          k = "values" == _,
          x = !1,
          S = t.prototype,
          A = S[c] || S["@@iterator"] || _ && S[_],
          R = A || w(_),
          T = _ ? k ? w("entries") : R : void 0,
          C = "Array" == e && S.entries || A;

      if (C && (b = f(C.call(new t()))) !== Object.prototype && b.next && (l(b, E, !0), r || d(b, c) || a(b, c, $)), k && A && "values" !== A.name && (x = !0, R = function R() {
        return A.call(this);
      }), r && !m || !h && !x && S[c] || a(S, c, R), s[e] = R, s[E] = $, _) if (v = {
        values: k ? R : w("values"),
        keys: g ? R : w("keys"),
        entries: T
      }, m) for (y in v) {
        y in S || o(S, y, v[y]);
      } else i(i.P + i.F * (h || x), e, v);
      return v;
    };
  }, function (t, e, n) {
    var r = n(14).f,
        i = n(16),
        o = n(6)("toStringTag");

    t.exports = function (t, e, n) {
      t && !i(t = n ? t : t.prototype, o) && r(t, o, {
        configurable: !0,
        value: e
      });
    };
  }, function (t, e, n) {
    "use strict";

    var r = n(92)(!0);
    n(42)(String, "String", function (t) {
      this._t = String(t), this._i = 0;
    }, function () {
      var t,
          e = this._t,
          n = this._i;
      return n >= e.length ? {
        value: void 0,
        done: !0
      } : (t = r(e, n), this._i += t.length, {
        value: t,
        done: !1
      });
    });
  }, function (t, e, n) {
    var r = n(36),
        i = n(6)("toStringTag"),
        o = "Arguments" == r(function () {
      return arguments;
    }());

    t.exports = function (t) {
      var e, n, a;
      return void 0 === t ? "Undefined" : null === t ? "Null" : "string" == typeof (n = function (t, e) {
        try {
          return t[e];
        } catch (t) {}
      }(e = Object(t), i)) ? n : o ? r(e) : "Object" == (a = r(e)) && "function" == typeof e.callee ? "Arguments" : a;
    };
  }, function (t, e) {
    var n = {}.toString;

    t.exports = Array.isArray || function (t) {
      return "[object Array]" == n.call(t);
    };
  }, function (t, e, n) {
    (function (t) {
      var r = n(105),
          i = n(114),
          o = n(115),
          a = n(56),
          d = e;
      d.request = function (e, n) {
        e = "string" == typeof e ? a.parse(e) : i(e);
        var o = -1 === t.location.protocol.search(/^https?:$/) ? "http:" : "",
            d = e.protocol || o,
            s = e.hostname || e.host,
            u = e.port,
            l = e.path || "/";
        s && -1 !== s.indexOf(":") && (s = "[" + s + "]"), e.url = (s ? d + "//" + s : "") + (u ? ":" + u : "") + l, e.method = (e.method || "GET").toUpperCase(), e.headers = e.headers || {};
        var f = new r(e);
        return n && f.on("response", n), f;
      }, d.get = function (t, e) {
        var n = d.request(t, e);
        return n.end(), n;
      }, d.Agent = function () {}, d.Agent.defaultMaxSockets = 4, d.STATUS_CODES = o, d.METHODS = ["CHECKOUT", "CONNECT", "COPY", "DELETE", "GET", "HEAD", "LOCK", "M-SEARCH", "MERGE", "MKACTIVITY", "MKCOL", "MOVE", "NOTIFY", "OPTIONS", "PATCH", "POST", "PROPFIND", "PROPPATCH", "PURGE", "PUT", "REPORT", "SEARCH", "SUBSCRIBE", "TRACE", "UNLOCK", "UNSUBSCRIBE"];
    }).call(this, n(0));
  }, function (t, e, n) {
    (function (t) {
      e.fetch = d(t.fetch) && d(t.ReadableStream), e.blobConstructor = !1;

      try {
        new Blob([new ArrayBuffer(1)]), e.blobConstructor = !0;
      } catch (t) {}

      var n;

      function r() {
        if (void 0 !== n) return n;

        if (t.XMLHttpRequest) {
          n = new t.XMLHttpRequest();

          try {
            n.open("GET", t.XDomainRequest ? "/" : "https://example.com");
          } catch (t) {
            n = null;
          }
        } else n = null;

        return n;
      }

      function i(t) {
        var e = r();
        if (!e) return !1;

        try {
          return e.responseType = t, e.responseType === t;
        } catch (t) {}

        return !1;
      }

      var o = void 0 !== t.ArrayBuffer,
          a = o && d(t.ArrayBuffer.prototype.slice);

      function d(t) {
        return "function" == typeof t;
      }

      e.arraybuffer = e.fetch || o && i("arraybuffer"), e.msstream = !e.fetch && a && i("ms-stream"), e.mozchunkedarraybuffer = !e.fetch && o && i("moz-chunked-arraybuffer"), e.overrideMimeType = e.fetch || !!r() && d(r().overrideMimeType), e.vbArray = d(t.VBArray), n = null;
    }).call(this, n(0));
  }, function (t, e, n) {
    "use strict";

    (function (e, r) {
      var i = n(17);
      t.exports = v;
      var o,
          a = n(46);
      v.ReadableState = m;
      n(50).EventEmitter;

      var d = function d(t, e) {
        return t.listeners(e).length;
      },
          s = n(51),
          u = n(30).Buffer,
          l = e.Uint8Array || function () {};

      var f = n(13);
      f.inherits = n(5);
      var c = n(107),
          h = void 0;
      h = c && c.debuglog ? c.debuglog("stream") : function () {};

      var $,
          p = n(108),
          _ = n(52);

      f.inherits(v, s);
      var g = ["error", "close", "destroy", "pause", "resume"];

      function m(t, e) {
        o = o || n(9), t = t || {}, this.objectMode = !!t.objectMode, e instanceof o && (this.objectMode = this.objectMode || !!t.readableObjectMode);
        var r = t.highWaterMark,
            i = this.objectMode ? 16 : 16384;
        this.highWaterMark = r || 0 === r ? r : i, this.highWaterMark = Math.floor(this.highWaterMark), this.buffer = new p(), this.length = 0, this.pipes = null, this.pipesCount = 0, this.flowing = null, this.ended = !1, this.endEmitted = !1, this.reading = !1, this.sync = !0, this.needReadable = !1, this.emittedReadable = !1, this.readableListening = !1, this.resumeScheduled = !1, this.destroyed = !1, this.defaultEncoding = t.defaultEncoding || "utf8", this.awaitDrain = 0, this.readingMore = !1, this.decoder = null, this.encoding = null, t.encoding && ($ || ($ = n(54).StringDecoder), this.decoder = new $(t.encoding), this.encoding = t.encoding);
      }

      function v(t) {
        if (o = o || n(9), !(this instanceof v)) return new v(t);
        this._readableState = new m(t, this), this.readable = !0, t && ("function" == typeof t.read && (this._read = t.read), "function" == typeof t.destroy && (this._destroy = t.destroy)), s.call(this);
      }

      function y(t, e, n, r, i) {
        var o,
            a = t._readableState;
        null === e ? (a.reading = !1, function (t, e) {
          if (e.ended) return;

          if (e.decoder) {
            var n = e.decoder.end();
            n && n.length && (e.buffer.push(n), e.length += e.objectMode ? 1 : n.length);
          }

          e.ended = !0, k(t);
        }(t, a)) : (i || (o = function (t, e) {
          var n;
          (function (t) {
            return u.isBuffer(t) || t instanceof l;
          })(e) || "string" == typeof e || void 0 === e || t.objectMode || (n = new TypeError("Invalid non-string/buffer chunk"));
          return n;
        }(a, e)), o ? t.emit("error", o) : a.objectMode || e && e.length > 0 ? ("string" == typeof e || a.objectMode || Object.getPrototypeOf(e) === u.prototype || (e = function (t) {
          return u.from(t);
        }(e)), r ? a.endEmitted ? t.emit("error", new Error("stream.unshift() after end event")) : b(t, a, e, !0) : a.ended ? t.emit("error", new Error("stream.push() after EOF")) : (a.reading = !1, a.decoder && !n ? (e = a.decoder.write(e), a.objectMode || 0 !== e.length ? b(t, a, e, !1) : S(t, a)) : b(t, a, e, !1))) : r || (a.reading = !1));
        return function (t) {
          return !t.ended && (t.needReadable || t.length < t.highWaterMark || 0 === t.length);
        }(a);
      }

      function b(t, e, n, r) {
        e.flowing && 0 === e.length && !e.sync ? (t.emit("data", n), t.read(0)) : (e.length += e.objectMode ? 1 : n.length, r ? e.buffer.unshift(n) : e.buffer.push(n), e.needReadable && k(t)), S(t, e);
      }

      Object.defineProperty(v.prototype, "destroyed", {
        get: function get() {
          return void 0 !== this._readableState && this._readableState.destroyed;
        },
        set: function set(t) {
          this._readableState && (this._readableState.destroyed = t);
        }
      }), v.prototype.destroy = _.destroy, v.prototype._undestroy = _.undestroy, v.prototype._destroy = function (t, e) {
        this.push(null), e(t);
      }, v.prototype.push = function (t, e) {
        var n,
            r = this._readableState;
        return r.objectMode ? n = !0 : "string" == typeof t && ((e = e || r.defaultEncoding) !== r.encoding && (t = u.from(t, e), e = ""), n = !0), y(this, t, e, !1, n);
      }, v.prototype.unshift = function (t) {
        return y(this, t, null, !0, !1);
      }, v.prototype.isPaused = function () {
        return !1 === this._readableState.flowing;
      }, v.prototype.setEncoding = function (t) {
        return $ || ($ = n(54).StringDecoder), this._readableState.decoder = new $(t), this._readableState.encoding = t, this;
      };
      var w = 8388608;

      function E(t, e) {
        return t <= 0 || 0 === e.length && e.ended ? 0 : e.objectMode ? 1 : t != t ? e.flowing && e.length ? e.buffer.head.data.length : e.length : (t > e.highWaterMark && (e.highWaterMark = function (t) {
          return t >= w ? t = w : (t--, t |= t >>> 1, t |= t >>> 2, t |= t >>> 4, t |= t >>> 8, t |= t >>> 16, t++), t;
        }(t)), t <= e.length ? t : e.ended ? e.length : (e.needReadable = !0, 0));
      }

      function k(t) {
        var e = t._readableState;
        e.needReadable = !1, e.emittedReadable || (h("emitReadable", e.flowing), e.emittedReadable = !0, e.sync ? i(x, t) : x(t));
      }

      function x(t) {
        h("emit readable"), t.emit("readable"), C(t);
      }

      function S(t, e) {
        e.readingMore || (e.readingMore = !0, i(A, t, e));
      }

      function A(t, e) {
        for (var n = e.length; !e.reading && !e.flowing && !e.ended && e.length < e.highWaterMark && (h("maybeReadMore read 0"), t.read(0), n !== e.length);) {
          n = e.length;
        }

        e.readingMore = !1;
      }

      function R(t) {
        h("readable nexttick read 0"), t.read(0);
      }

      function T(t, e) {
        e.reading || (h("resume read 0"), t.read(0)), e.resumeScheduled = !1, e.awaitDrain = 0, t.emit("resume"), C(t), e.flowing && !e.reading && t.read(0);
      }

      function C(t) {
        var e = t._readableState;

        for (h("flow", e.flowing); e.flowing && null !== t.read();) {
          ;
        }
      }

      function O(t, e) {
        return 0 === e.length ? null : (e.objectMode ? n = e.buffer.shift() : !t || t >= e.length ? (n = e.decoder ? e.buffer.join("") : 1 === e.buffer.length ? e.buffer.head.data : e.buffer.concat(e.length), e.buffer.clear()) : n = function (t, e, n) {
          var r;
          t < e.head.data.length ? (r = e.head.data.slice(0, t), e.head.data = e.head.data.slice(t)) : r = t === e.head.data.length ? e.shift() : n ? function (t, e) {
            var n = e.head,
                r = 1,
                i = n.data;
            t -= i.length;

            for (; n = n.next;) {
              var o = n.data,
                  a = t > o.length ? o.length : t;

              if (a === o.length ? i += o : i += o.slice(0, t), 0 === (t -= a)) {
                a === o.length ? (++r, n.next ? e.head = n.next : e.head = e.tail = null) : (e.head = n, n.data = o.slice(a));
                break;
              }

              ++r;
            }

            return e.length -= r, i;
          }(t, e) : function (t, e) {
            var n = u.allocUnsafe(t),
                r = e.head,
                i = 1;
            r.data.copy(n), t -= r.data.length;

            for (; r = r.next;) {
              var o = r.data,
                  a = t > o.length ? o.length : t;

              if (o.copy(n, n.length - t, 0, a), 0 === (t -= a)) {
                a === o.length ? (++i, r.next ? e.head = r.next : e.head = e.tail = null) : (e.head = r, r.data = o.slice(a));
                break;
              }

              ++i;
            }

            return e.length -= i, n;
          }(t, e);
          return r;
        }(t, e.buffer, e.decoder), n);
        var n;
      }

      function L(t) {
        var e = t._readableState;
        if (e.length > 0) throw new Error('"endReadable()" called on non-empty stream');
        e.endEmitted || (e.ended = !0, i(M, e, t));
      }

      function M(t, e) {
        t.endEmitted || 0 !== t.length || (t.endEmitted = !0, e.readable = !1, e.emit("end"));
      }

      function I(t, e) {
        for (var n = 0, r = t.length; n < r; n++) {
          if (t[n] === e) return n;
        }

        return -1;
      }

      v.prototype.read = function (t) {
        h("read", t), t = parseInt(t, 10);
        var e = this._readableState,
            n = t;
        if (0 !== t && (e.emittedReadable = !1), 0 === t && e.needReadable && (e.length >= e.highWaterMark || e.ended)) return h("read: emitReadable", e.length, e.ended), 0 === e.length && e.ended ? L(this) : k(this), null;
        if (0 === (t = E(t, e)) && e.ended) return 0 === e.length && L(this), null;
        var r,
            i = e.needReadable;
        return h("need readable", i), (0 === e.length || e.length - t < e.highWaterMark) && h("length less than watermark", i = !0), e.ended || e.reading ? h("reading or ended", i = !1) : i && (h("do read"), e.reading = !0, e.sync = !0, 0 === e.length && (e.needReadable = !0), this._read(e.highWaterMark), e.sync = !1, e.reading || (t = E(n, e))), null === (r = t > 0 ? O(t, e) : null) ? (e.needReadable = !0, t = 0) : e.length -= t, 0 === e.length && (e.ended || (e.needReadable = !0), n !== t && e.ended && L(this)), null !== r && this.emit("data", r), r;
      }, v.prototype._read = function (t) {
        this.emit("error", new Error("_read() is not implemented"));
      }, v.prototype.pipe = function (t, e) {
        var n = this,
            o = this._readableState;

        switch (o.pipesCount) {
          case 0:
            o.pipes = t;
            break;

          case 1:
            o.pipes = [o.pipes, t];
            break;

          default:
            o.pipes.push(t);
        }

        o.pipesCount += 1, h("pipe count=%d opts=%j", o.pipesCount, e);
        var s = (!e || !1 !== e.end) && t !== r.stdout && t !== r.stderr ? l : v;

        function u(e, r) {
          h("onunpipe"), e === n && r && !1 === r.hasUnpiped && (r.hasUnpiped = !0, h("cleanup"), t.removeListener("close", g), t.removeListener("finish", m), t.removeListener("drain", f), t.removeListener("error", _), t.removeListener("unpipe", u), n.removeListener("end", l), n.removeListener("end", v), n.removeListener("data", p), c = !0, !o.awaitDrain || t._writableState && !t._writableState.needDrain || f());
        }

        function l() {
          h("onend"), t.end();
        }

        o.endEmitted ? i(s) : n.once("end", s), t.on("unpipe", u);

        var f = function (t) {
          return function () {
            var e = t._readableState;
            h("pipeOnDrain", e.awaitDrain), e.awaitDrain && e.awaitDrain--, 0 === e.awaitDrain && d(t, "data") && (e.flowing = !0, C(t));
          };
        }(n);

        t.on("drain", f);
        var c = !1;
        var $ = !1;

        function p(e) {
          h("ondata"), $ = !1, !1 !== t.write(e) || $ || ((1 === o.pipesCount && o.pipes === t || o.pipesCount > 1 && -1 !== I(o.pipes, t)) && !c && (h("false write response, pause", n._readableState.awaitDrain), n._readableState.awaitDrain++, $ = !0), n.pause());
        }

        function _(e) {
          h("onerror", e), v(), t.removeListener("error", _), 0 === d(t, "error") && t.emit("error", e);
        }

        function g() {
          t.removeListener("finish", m), v();
        }

        function m() {
          h("onfinish"), t.removeListener("close", g), v();
        }

        function v() {
          h("unpipe"), n.unpipe(t);
        }

        return n.on("data", p), function (t, e, n) {
          if ("function" == typeof t.prependListener) return t.prependListener(e, n);
          t._events && t._events[e] ? a(t._events[e]) ? t._events[e].unshift(n) : t._events[e] = [n, t._events[e]] : t.on(e, n);
        }(t, "error", _), t.once("close", g), t.once("finish", m), t.emit("pipe", n), o.flowing || (h("pipe resume"), n.resume()), t;
      }, v.prototype.unpipe = function (t) {
        var e = this._readableState,
            n = {
          hasUnpiped: !1
        };
        if (0 === e.pipesCount) return this;
        if (1 === e.pipesCount) return t && t !== e.pipes ? this : (t || (t = e.pipes), e.pipes = null, e.pipesCount = 0, e.flowing = !1, t && t.emit("unpipe", this, n), this);

        if (!t) {
          var r = e.pipes,
              i = e.pipesCount;
          e.pipes = null, e.pipesCount = 0, e.flowing = !1;

          for (var o = 0; o < i; o++) {
            r[o].emit("unpipe", this, n);
          }

          return this;
        }

        var a = I(e.pipes, t);
        return -1 === a ? this : (e.pipes.splice(a, 1), e.pipesCount -= 1, 1 === e.pipesCount && (e.pipes = e.pipes[0]), t.emit("unpipe", this, n), this);
      }, v.prototype.on = function (t, e) {
        var n = s.prototype.on.call(this, t, e);
        if ("data" === t) !1 !== this._readableState.flowing && this.resume();else if ("readable" === t) {
          var r = this._readableState;
          r.endEmitted || r.readableListening || (r.readableListening = r.needReadable = !0, r.emittedReadable = !1, r.reading ? r.length && k(this) : i(R, this));
        }
        return n;
      }, v.prototype.addListener = v.prototype.on, v.prototype.resume = function () {
        var t = this._readableState;
        return t.flowing || (h("resume"), t.flowing = !0, function (t, e) {
          e.resumeScheduled || (e.resumeScheduled = !0, i(T, t, e));
        }(this, t)), this;
      }, v.prototype.pause = function () {
        return h("call pause flowing=%j", this._readableState.flowing), !1 !== this._readableState.flowing && (h("pause"), this._readableState.flowing = !1, this.emit("pause")), this;
      }, v.prototype.wrap = function (t) {
        var e = this._readableState,
            n = !1,
            r = this;

        for (var i in t.on("end", function () {
          if (h("wrapped end"), e.decoder && !e.ended) {
            var t = e.decoder.end();
            t && t.length && r.push(t);
          }

          r.push(null);
        }), t.on("data", function (i) {
          (h("wrapped data"), e.decoder && (i = e.decoder.write(i)), !e.objectMode || null !== i && void 0 !== i) && (e.objectMode || i && i.length) && (r.push(i) || (n = !0, t.pause()));
        }), t) {
          void 0 === this[i] && "function" == typeof t[i] && (this[i] = function (e) {
            return function () {
              return t[e].apply(t, arguments);
            };
          }(i));
        }

        for (var o = 0; o < g.length; o++) {
          t.on(g[o], r.emit.bind(r, g[o]));
        }

        return r._read = function (e) {
          h("wrapped _read", e), n && (n = !1, t.resume());
        }, r;
      }, v._fromList = O;
    }).call(this, n(0), n(2));
  }, function (t, e) {
    function n() {
      this._events = this._events || {}, this._maxListeners = this._maxListeners || void 0;
    }

    function r(t) {
      return "function" == typeof t;
    }

    function i(t) {
      return "object" == _typeof(t) && null !== t;
    }

    function o(t) {
      return void 0 === t;
    }

    t.exports = n, n.EventEmitter = n, n.prototype._events = void 0, n.prototype._maxListeners = void 0, n.defaultMaxListeners = 10, n.prototype.setMaxListeners = function (t) {
      if (!function (t) {
        return "number" == typeof t;
      }(t) || t < 0 || isNaN(t)) throw TypeError("n must be a positive number");
      return this._maxListeners = t, this;
    }, n.prototype.emit = function (t) {
      var e, n, a, d, s, u;

      if (this._events || (this._events = {}), "error" === t && (!this._events.error || i(this._events.error) && !this._events.error.length)) {
        if ((e = arguments[1]) instanceof Error) throw e;
        var l = new Error('Uncaught, unspecified "error" event. (' + e + ")");
        throw l.context = e, l;
      }

      if (o(n = this._events[t])) return !1;
      if (r(n)) switch (arguments.length) {
        case 1:
          n.call(this);
          break;

        case 2:
          n.call(this, arguments[1]);
          break;

        case 3:
          n.call(this, arguments[1], arguments[2]);
          break;

        default:
          d = Array.prototype.slice.call(arguments, 1), n.apply(this, d);
      } else if (i(n)) for (d = Array.prototype.slice.call(arguments, 1), a = (u = n.slice()).length, s = 0; s < a; s++) {
        u[s].apply(this, d);
      }
      return !0;
    }, n.prototype.addListener = function (t, e) {
      var a;
      if (!r(e)) throw TypeError("listener must be a function");
      return this._events || (this._events = {}), this._events.newListener && this.emit("newListener", t, r(e.listener) ? e.listener : e), this._events[t] ? i(this._events[t]) ? this._events[t].push(e) : this._events[t] = [this._events[t], e] : this._events[t] = e, i(this._events[t]) && !this._events[t].warned && (a = o(this._maxListeners) ? n.defaultMaxListeners : this._maxListeners) && a > 0 && this._events[t].length > a && (this._events[t].warned = !0, console.error("(node) warning: possible EventEmitter memory leak detected. %d listeners added. Use emitter.setMaxListeners() to increase limit.", this._events[t].length), "function" == typeof console.trace && console.trace()), this;
    }, n.prototype.on = n.prototype.addListener, n.prototype.once = function (t, e) {
      if (!r(e)) throw TypeError("listener must be a function");
      var n = !1;

      function i() {
        this.removeListener(t, i), n || (n = !0, e.apply(this, arguments));
      }

      return i.listener = e, this.on(t, i), this;
    }, n.prototype.removeListener = function (t, e) {
      var n, o, a, d;
      if (!r(e)) throw TypeError("listener must be a function");
      if (!this._events || !this._events[t]) return this;
      if (a = (n = this._events[t]).length, o = -1, n === e || r(n.listener) && n.listener === e) delete this._events[t], this._events.removeListener && this.emit("removeListener", t, e);else if (i(n)) {
        for (d = a; d-- > 0;) {
          if (n[d] === e || n[d].listener && n[d].listener === e) {
            o = d;
            break;
          }
        }

        if (o < 0) return this;
        1 === n.length ? (n.length = 0, delete this._events[t]) : n.splice(o, 1), this._events.removeListener && this.emit("removeListener", t, e);
      }
      return this;
    }, n.prototype.removeAllListeners = function (t) {
      var e, n;
      if (!this._events) return this;
      if (!this._events.removeListener) return 0 === arguments.length ? this._events = {} : this._events[t] && delete this._events[t], this;

      if (0 === arguments.length) {
        for (e in this._events) {
          "removeListener" !== e && this.removeAllListeners(e);
        }

        return this.removeAllListeners("removeListener"), this._events = {}, this;
      }

      if (r(n = this._events[t])) this.removeListener(t, n);else if (n) for (; n.length;) {
        this.removeListener(t, n[n.length - 1]);
      }
      return delete this._events[t], this;
    }, n.prototype.listeners = function (t) {
      return this._events && this._events[t] ? r(this._events[t]) ? [this._events[t]] : this._events[t].slice() : [];
    }, n.prototype.listenerCount = function (t) {
      if (this._events) {
        var e = this._events[t];
        if (r(e)) return 1;
        if (e) return e.length;
      }

      return 0;
    }, n.listenerCount = function (t, e) {
      return t.listenerCount(e);
    };
  }, function (t, e, n) {
    t.exports = n(50).EventEmitter;
  }, function (t, e, n) {
    "use strict";

    var r = n(17);

    function i(t, e) {
      t.emit("error", e);
    }

    t.exports = {
      destroy: function destroy(t, e) {
        var n = this,
            o = this._readableState && this._readableState.destroyed,
            a = this._writableState && this._writableState.destroyed;
        o || a ? e ? e(t) : !t || this._writableState && this._writableState.errorEmitted || r(i, this, t) : (this._readableState && (this._readableState.destroyed = !0), this._writableState && (this._writableState.destroyed = !0), this._destroy(t || null, function (t) {
          !e && t ? (r(i, n, t), n._writableState && (n._writableState.errorEmitted = !0)) : e && e(t);
        }));
      },
      undestroy: function undestroy() {
        this._readableState && (this._readableState.destroyed = !1, this._readableState.reading = !1, this._readableState.ended = !1, this._readableState.endEmitted = !1), this._writableState && (this._writableState.destroyed = !1, this._writableState.ended = !1, this._writableState.ending = !1, this._writableState.finished = !1, this._writableState.errorEmitted = !1);
      }
    };
  }, function (t, e, n) {
    "use strict";

    (function (e, r, i) {
      var o = n(17);

      function a(t) {
        var e = this;
        this.next = null, this.entry = null, this.finish = function () {
          !function (t, e, n) {
            var r = t.entry;
            t.entry = null;

            for (; r;) {
              var i = r.callback;
              e.pendingcb--, i(n), r = r.next;
            }

            e.corkedRequestsFree ? e.corkedRequestsFree.next = t : e.corkedRequestsFree = t;
          }(e, t);
        };
      }

      t.exports = m;
      var d,
          s = !e.browser && ["v0.10", "v0.9."].indexOf(e.version.slice(0, 5)) > -1 ? r : o;
      m.WritableState = g;
      var u = n(13);
      u.inherits = n(5);

      var l = {
        deprecate: n(111)
      },
          f = n(51),
          c = n(30).Buffer,
          h = i.Uint8Array || function () {};

      var $,
          p = n(52);

      function _() {}

      function g(t, e) {
        d = d || n(9), t = t || {}, this.objectMode = !!t.objectMode, e instanceof d && (this.objectMode = this.objectMode || !!t.writableObjectMode);
        var r = t.highWaterMark,
            i = this.objectMode ? 16 : 16384;
        this.highWaterMark = r || 0 === r ? r : i, this.highWaterMark = Math.floor(this.highWaterMark), this.finalCalled = !1, this.needDrain = !1, this.ending = !1, this.ended = !1, this.finished = !1, this.destroyed = !1;
        var u = !1 === t.decodeStrings;
        this.decodeStrings = !u, this.defaultEncoding = t.defaultEncoding || "utf8", this.length = 0, this.writing = !1, this.corked = 0, this.sync = !0, this.bufferProcessing = !1, this.onwrite = function (t) {
          !function (t, e) {
            var n = t._writableState,
                r = n.sync,
                i = n.writecb;
            if (function (t) {
              t.writing = !1, t.writecb = null, t.length -= t.writelen, t.writelen = 0;
            }(n), e) !function (t, e, n, r, i) {
              --e.pendingcb, n ? (o(i, r), o(k, t, e), t._writableState.errorEmitted = !0, t.emit("error", r)) : (i(r), t._writableState.errorEmitted = !0, t.emit("error", r), k(t, e));
            }(t, n, r, e, i);else {
              var a = w(n);
              a || n.corked || n.bufferProcessing || !n.bufferedRequest || b(t, n), r ? s(y, t, n, a, i) : y(t, n, a, i);
            }
          }(e, t);
        }, this.writecb = null, this.writelen = 0, this.bufferedRequest = null, this.lastBufferedRequest = null, this.pendingcb = 0, this.prefinished = !1, this.errorEmitted = !1, this.bufferedRequestCount = 0, this.corkedRequestsFree = new a(this);
      }

      function m(t) {
        if (d = d || n(9), !($.call(m, this) || this instanceof d)) return new m(t);
        this._writableState = new g(t, this), this.writable = !0, t && ("function" == typeof t.write && (this._write = t.write), "function" == typeof t.writev && (this._writev = t.writev), "function" == typeof t.destroy && (this._destroy = t.destroy), "function" == typeof t.final && (this._final = t.final)), f.call(this);
      }

      function v(t, e, n, r, i, o, a) {
        e.writelen = r, e.writecb = a, e.writing = !0, e.sync = !0, n ? t._writev(i, e.onwrite) : t._write(i, o, e.onwrite), e.sync = !1;
      }

      function y(t, e, n, r) {
        n || function (t, e) {
          0 === e.length && e.needDrain && (e.needDrain = !1, t.emit("drain"));
        }(t, e), e.pendingcb--, r(), k(t, e);
      }

      function b(t, e) {
        e.bufferProcessing = !0;
        var n = e.bufferedRequest;

        if (t._writev && n && n.next) {
          var r = e.bufferedRequestCount,
              i = new Array(r),
              o = e.corkedRequestsFree;
          o.entry = n;

          for (var d = 0, s = !0; n;) {
            i[d] = n, n.isBuf || (s = !1), n = n.next, d += 1;
          }

          i.allBuffers = s, v(t, e, !0, e.length, i, "", o.finish), e.pendingcb++, e.lastBufferedRequest = null, o.next ? (e.corkedRequestsFree = o.next, o.next = null) : e.corkedRequestsFree = new a(e);
        } else {
          for (; n;) {
            var u = n.chunk,
                l = n.encoding,
                f = n.callback;
            if (v(t, e, !1, e.objectMode ? 1 : u.length, u, l, f), n = n.next, e.writing) break;
          }

          null === n && (e.lastBufferedRequest = null);
        }

        e.bufferedRequestCount = 0, e.bufferedRequest = n, e.bufferProcessing = !1;
      }

      function w(t) {
        return t.ending && 0 === t.length && null === t.bufferedRequest && !t.finished && !t.writing;
      }

      function E(t, e) {
        t._final(function (n) {
          e.pendingcb--, n && t.emit("error", n), e.prefinished = !0, t.emit("prefinish"), k(t, e);
        });
      }

      function k(t, e) {
        var n = w(e);
        return n && (!function (t, e) {
          e.prefinished || e.finalCalled || ("function" == typeof t._final ? (e.pendingcb++, e.finalCalled = !0, o(E, t, e)) : (e.prefinished = !0, t.emit("prefinish")));
        }(t, e), 0 === e.pendingcb && (e.finished = !0, t.emit("finish"))), n;
      }

      u.inherits(m, f), g.prototype.getBuffer = function () {
        for (var t = this.bufferedRequest, e = []; t;) {
          e.push(t), t = t.next;
        }

        return e;
      }, function () {
        try {
          Object.defineProperty(g.prototype, "buffer", {
            get: l.deprecate(function () {
              return this.getBuffer();
            }, "_writableState.buffer is deprecated. Use _writableState.getBuffer instead.", "DEP0003")
          });
        } catch (t) {}
      }(), "function" == typeof Symbol && Symbol.hasInstance && "function" == typeof Function.prototype[Symbol.hasInstance] ? ($ = Function.prototype[Symbol.hasInstance], Object.defineProperty(m, Symbol.hasInstance, {
        value: function value(t) {
          return !!$.call(this, t) || t && t._writableState instanceof g;
        }
      })) : $ = function $(t) {
        return t instanceof this;
      }, m.prototype.pipe = function () {
        this.emit("error", new Error("Cannot pipe, not readable"));
      }, m.prototype.write = function (t, e, n) {
        var r = this._writableState,
            i = !1,
            a = function (t) {
          return c.isBuffer(t) || t instanceof h;
        }(t) && !r.objectMode;

        return a && !c.isBuffer(t) && (t = function (t) {
          return c.from(t);
        }(t)), "function" == typeof e && (n = e, e = null), a ? e = "buffer" : e || (e = r.defaultEncoding), "function" != typeof n && (n = _), r.ended ? function (t, e) {
          var n = new Error("write after end");
          t.emit("error", n), o(e, n);
        }(this, n) : (a || function (t, e, n, r) {
          var i = !0,
              a = !1;
          return null === n ? a = new TypeError("May not write null values to stream") : "string" == typeof n || void 0 === n || e.objectMode || (a = new TypeError("Invalid non-string/buffer chunk")), a && (t.emit("error", a), o(r, a), i = !1), i;
        }(this, r, t, n)) && (r.pendingcb++, i = function (t, e, n, r, i, o) {
          if (!n) {
            var a = function (t, e, n) {
              t.objectMode || !1 === t.decodeStrings || "string" != typeof e || (e = c.from(e, n));
              return e;
            }(e, r, i);

            r !== a && (n = !0, i = "buffer", r = a);
          }

          var d = e.objectMode ? 1 : r.length;
          e.length += d;
          var s = e.length < e.highWaterMark;
          s || (e.needDrain = !0);

          if (e.writing || e.corked) {
            var u = e.lastBufferedRequest;
            e.lastBufferedRequest = {
              chunk: r,
              encoding: i,
              isBuf: n,
              callback: o,
              next: null
            }, u ? u.next = e.lastBufferedRequest : e.bufferedRequest = e.lastBufferedRequest, e.bufferedRequestCount += 1;
          } else v(t, e, !1, d, r, i, o);

          return s;
        }(this, r, a, t, e, n)), i;
      }, m.prototype.cork = function () {
        this._writableState.corked++;
      }, m.prototype.uncork = function () {
        var t = this._writableState;
        t.corked && (t.corked--, t.writing || t.corked || t.finished || t.bufferProcessing || !t.bufferedRequest || b(this, t));
      }, m.prototype.setDefaultEncoding = function (t) {
        if ("string" == typeof t && (t = t.toLowerCase()), !(["hex", "utf8", "utf-8", "ascii", "binary", "base64", "ucs2", "ucs-2", "utf16le", "utf-16le", "raw"].indexOf((t + "").toLowerCase()) > -1)) throw new TypeError("Unknown encoding: " + t);
        return this._writableState.defaultEncoding = t, this;
      }, m.prototype._write = function (t, e, n) {
        n(new Error("_write() is not implemented"));
      }, m.prototype._writev = null, m.prototype.end = function (t, e, n) {
        var r = this._writableState;
        "function" == typeof t ? (n = t, t = null, e = null) : "function" == typeof e && (n = e, e = null), null !== t && void 0 !== t && this.write(t, e), r.corked && (r.corked = 1, this.uncork()), r.ending || r.finished || function (t, e, n) {
          e.ending = !0, k(t, e), n && (e.finished ? o(n) : t.once("finish", n));
          e.ended = !0, t.writable = !1;
        }(this, r, n);
      }, Object.defineProperty(m.prototype, "destroyed", {
        get: function get() {
          return void 0 !== this._writableState && this._writableState.destroyed;
        },
        set: function set(t) {
          this._writableState && (this._writableState.destroyed = t);
        }
      }), m.prototype.destroy = p.destroy, m.prototype._undestroy = p.undestroy, m.prototype._destroy = function (t, e) {
        this.end(), e(t);
      };
    }).call(this, n(2), n(109).setImmediate, n(0));
  }, function (t, e, n) {
    var r = n(3).Buffer,
        i = r.isEncoding || function (t) {
      switch (t && t.toLowerCase()) {
        case "hex":
        case "utf8":
        case "utf-8":
        case "ascii":
        case "binary":
        case "base64":
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
        case "raw":
          return !0;

        default:
          return !1;
      }
    };

    var o = e.StringDecoder = function (t) {
      switch (this.encoding = (t || "utf8").toLowerCase().replace(/[-_]/, ""), function (t) {
        if (t && !i(t)) throw new Error("Unknown encoding: " + t);
      }(t), this.encoding) {
        case "utf8":
          this.surrogateSize = 3;
          break;

        case "ucs2":
        case "utf16le":
          this.surrogateSize = 2, this.detectIncompleteChar = d;
          break;

        case "base64":
          this.surrogateSize = 3, this.detectIncompleteChar = s;
          break;

        default:
          return void (this.write = a);
      }

      this.charBuffer = new r(6), this.charReceived = 0, this.charLength = 0;
    };

    function a(t) {
      return t.toString(this.encoding);
    }

    function d(t) {
      this.charReceived = t.length % 2, this.charLength = this.charReceived ? 2 : 0;
    }

    function s(t) {
      this.charReceived = t.length % 3, this.charLength = this.charReceived ? 3 : 0;
    }

    o.prototype.write = function (t) {
      for (var e = ""; this.charLength;) {
        var n = t.length >= this.charLength - this.charReceived ? this.charLength - this.charReceived : t.length;
        if (t.copy(this.charBuffer, this.charReceived, 0, n), this.charReceived += n, this.charReceived < this.charLength) return "";

        if (t = t.slice(n, t.length), !((i = (e = this.charBuffer.slice(0, this.charLength).toString(this.encoding)).charCodeAt(e.length - 1)) >= 55296 && i <= 56319)) {
          if (this.charReceived = this.charLength = 0, 0 === t.length) return e;
          break;
        }

        this.charLength += this.surrogateSize, e = "";
      }

      this.detectIncompleteChar(t);
      var r = t.length;
      this.charLength && (t.copy(this.charBuffer, 0, t.length - this.charReceived, r), r -= this.charReceived);
      var i;
      r = (e += t.toString(this.encoding, 0, r)).length - 1;

      if ((i = e.charCodeAt(r)) >= 55296 && i <= 56319) {
        var o = this.surrogateSize;
        return this.charLength += o, this.charReceived += o, this.charBuffer.copy(this.charBuffer, o, 0, o), t.copy(this.charBuffer, 0, 0, o), e.substring(0, r);
      }

      return e;
    }, o.prototype.detectIncompleteChar = function (t) {
      for (var e = t.length >= 3 ? 3 : t.length; e > 0; e--) {
        var n = t[t.length - e];

        if (1 == e && n >> 5 == 6) {
          this.charLength = 2;
          break;
        }

        if (e <= 2 && n >> 4 == 14) {
          this.charLength = 3;
          break;
        }

        if (e <= 3 && n >> 3 == 30) {
          this.charLength = 4;
          break;
        }
      }

      this.charReceived = e;
    }, o.prototype.end = function (t) {
      var e = "";

      if (t && t.length && (e = this.write(t)), this.charReceived) {
        var n = this.charReceived,
            r = this.charBuffer,
            i = this.encoding;
        e += r.slice(0, n).toString(i);
      }

      return e;
    };
  }, function (t, e, n) {
    "use strict";

    t.exports = a;
    var r = n(9),
        i = n(13);

    function o(t) {
      this.afterTransform = function (e, n) {
        return function (t, e, n) {
          var r = t._transformState;
          r.transforming = !1;
          var i = r.writecb;
          if (!i) return t.emit("error", new Error("write callback called multiple times"));
          r.writechunk = null, r.writecb = null, null !== n && void 0 !== n && t.push(n);
          i(e);
          var o = t._readableState;
          o.reading = !1, (o.needReadable || o.length < o.highWaterMark) && t._read(o.highWaterMark);
        }(t, e, n);
      }, this.needTransform = !1, this.transforming = !1, this.writecb = null, this.writechunk = null, this.writeencoding = null;
    }

    function a(t) {
      if (!(this instanceof a)) return new a(t);
      r.call(this, t), this._transformState = new o(this);
      var e = this;
      this._readableState.needReadable = !0, this._readableState.sync = !1, t && ("function" == typeof t.transform && (this._transform = t.transform), "function" == typeof t.flush && (this._flush = t.flush)), this.once("prefinish", function () {
        "function" == typeof this._flush ? this._flush(function (t, n) {
          d(e, t, n);
        }) : d(e);
      });
    }

    function d(t, e, n) {
      if (e) return t.emit("error", e);
      null !== n && void 0 !== n && t.push(n);
      var r = t._writableState,
          i = t._transformState;
      if (r.length) throw new Error("Calling transform done when ws.length != 0");
      if (i.transforming) throw new Error("Calling transform done when still transforming");
      return t.push(null);
    }

    i.inherits = n(5), i.inherits(a, r), a.prototype.push = function (t, e) {
      return this._transformState.needTransform = !1, r.prototype.push.call(this, t, e);
    }, a.prototype._transform = function (t, e, n) {
      throw new Error("_transform() is not implemented");
    }, a.prototype._write = function (t, e, n) {
      var r = this._transformState;

      if (r.writecb = n, r.writechunk = t, r.writeencoding = e, !r.transforming) {
        var i = this._readableState;
        (r.needTransform || i.needReadable || i.length < i.highWaterMark) && this._read(i.highWaterMark);
      }
    }, a.prototype._read = function (t) {
      var e = this._transformState;
      null !== e.writechunk && e.writecb && !e.transforming ? (e.transforming = !0, this._transform(e.writechunk, e.writeencoding, e.afterTransform)) : e.needTransform = !0;
    }, a.prototype._destroy = function (t, e) {
      var n = this;

      r.prototype._destroy.call(this, t, function (t) {
        e(t), n.emit("close");
      });
    };
  }, function (t, e, n) {
    "use strict";

    var r = n(116),
        i = n(118);

    function o() {
      this.protocol = null, this.slashes = null, this.auth = null, this.host = null, this.port = null, this.hostname = null, this.hash = null, this.search = null, this.query = null, this.pathname = null, this.path = null, this.href = null;
    }

    e.parse = v, e.resolve = function (t, e) {
      return v(t, !1, !0).resolve(e);
    }, e.resolveObject = function (t, e) {
      return t ? v(t, !1, !0).resolveObject(e) : e;
    }, e.format = function (t) {
      i.isString(t) && (t = v(t));
      return t instanceof o ? t.format() : o.prototype.format.call(t);
    }, e.Url = o;
    var a = /^([a-z0-9.+-]+:)/i,
        d = /:[0-9]*$/,
        s = /^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/,
        u = ["{", "}", "|", "\\", "^", "`"].concat(["<", ">", '"', "`", " ", "\r", "\n", "\t"]),
        l = ["'"].concat(u),
        f = ["%", "/", "?", ";", "#"].concat(l),
        c = ["/", "?", "#"],
        h = /^[+a-z0-9A-Z_-]{0,63}$/,
        $ = /^([+a-z0-9A-Z_-]{0,63})(.*)$/,
        p = {
      javascript: !0,
      "javascript:": !0
    },
        _ = {
      javascript: !0,
      "javascript:": !0
    },
        g = {
      http: !0,
      https: !0,
      ftp: !0,
      gopher: !0,
      file: !0,
      "http:": !0,
      "https:": !0,
      "ftp:": !0,
      "gopher:": !0,
      "file:": !0
    },
        m = n(57);

    function v(t, e, n) {
      if (t && i.isObject(t) && t instanceof o) return t;
      var r = new o();
      return r.parse(t, e, n), r;
    }

    o.prototype.parse = function (t, e, n) {
      if (!i.isString(t)) throw new TypeError("Parameter 'url' must be a string, not " + _typeof(t));
      var o = t.indexOf("?"),
          d = -1 !== o && o < t.indexOf("#") ? "?" : "#",
          u = t.split(d);
      u[0] = u[0].replace(/\\/g, "/");
      var v = t = u.join(d);

      if (v = v.trim(), !n && 1 === t.split("#").length) {
        var y = s.exec(v);
        if (y) return this.path = v, this.href = v, this.pathname = y[1], y[2] ? (this.search = y[2], this.query = e ? m.parse(this.search.substr(1)) : this.search.substr(1)) : e && (this.search = "", this.query = {}), this;
      }

      var b = a.exec(v);

      if (b) {
        var w = (b = b[0]).toLowerCase();
        this.protocol = w, v = v.substr(b.length);
      }

      if (n || b || v.match(/^\/\/[^@\/]+@[^@\/]+/)) {
        var E = "//" === v.substr(0, 2);
        !E || b && _[b] || (v = v.substr(2), this.slashes = !0);
      }

      if (!_[b] && (E || b && !g[b])) {
        for (var k, x, S = -1, A = 0; A < c.length; A++) {
          -1 !== (R = v.indexOf(c[A])) && (-1 === S || R < S) && (S = R);
        }

        -1 !== (x = -1 === S ? v.lastIndexOf("@") : v.lastIndexOf("@", S)) && (k = v.slice(0, x), v = v.slice(x + 1), this.auth = decodeURIComponent(k)), S = -1;

        for (A = 0; A < f.length; A++) {
          var R;
          -1 !== (R = v.indexOf(f[A])) && (-1 === S || R < S) && (S = R);
        }

        -1 === S && (S = v.length), this.host = v.slice(0, S), v = v.slice(S), this.parseHost(), this.hostname = this.hostname || "";
        var T = "[" === this.hostname[0] && "]" === this.hostname[this.hostname.length - 1];
        if (!T) for (var C = this.hostname.split(/\./), O = (A = 0, C.length); A < O; A++) {
          var L = C[A];

          if (L && !L.match(h)) {
            for (var M = "", I = 0, B = L.length; I < B; I++) {
              L.charCodeAt(I) > 127 ? M += "x" : M += L[I];
            }

            if (!M.match(h)) {
              var P = C.slice(0, A),
                  N = C.slice(A + 1),
                  U = L.match($);
              U && (P.push(U[1]), N.unshift(U[2])), N.length && (v = "/" + N.join(".") + v), this.hostname = P.join(".");
              break;
            }
          }
        }
        this.hostname.length > 255 ? this.hostname = "" : this.hostname = this.hostname.toLowerCase(), T || (this.hostname = r.toASCII(this.hostname));
        var j = this.port ? ":" + this.port : "",
            z = this.hostname || "";
        this.host = z + j, this.href += this.host, T && (this.hostname = this.hostname.substr(1, this.hostname.length - 2), "/" !== v[0] && (v = "/" + v));
      }

      if (!p[w]) for (A = 0, O = l.length; A < O; A++) {
        var D = l[A];

        if (-1 !== v.indexOf(D)) {
          var F = encodeURIComponent(D);
          F === D && (F = escape(D)), v = v.split(D).join(F);
        }
      }
      var Z = v.indexOf("#");
      -1 !== Z && (this.hash = v.substr(Z), v = v.slice(0, Z));
      var G = v.indexOf("?");

      if (-1 !== G ? (this.search = v.substr(G), this.query = v.substr(G + 1), e && (this.query = m.parse(this.query)), v = v.slice(0, G)) : e && (this.search = "", this.query = {}), v && (this.pathname = v), g[w] && this.hostname && !this.pathname && (this.pathname = "/"), this.pathname || this.search) {
        j = this.pathname || "";
        var H = this.search || "";
        this.path = j + H;
      }

      return this.href = this.format(), this;
    }, o.prototype.format = function () {
      var t = this.auth || "";
      t && (t = (t = encodeURIComponent(t)).replace(/%3A/i, ":"), t += "@");
      var e = this.protocol || "",
          n = this.pathname || "",
          r = this.hash || "",
          o = !1,
          a = "";
      this.host ? o = t + this.host : this.hostname && (o = t + (-1 === this.hostname.indexOf(":") ? this.hostname : "[" + this.hostname + "]"), this.port && (o += ":" + this.port)), this.query && i.isObject(this.query) && Object.keys(this.query).length && (a = m.stringify(this.query));
      var d = this.search || a && "?" + a || "";
      return e && ":" !== e.substr(-1) && (e += ":"), this.slashes || (!e || g[e]) && !1 !== o ? (o = "//" + (o || ""), n && "/" !== n.charAt(0) && (n = "/" + n)) : o || (o = ""), r && "#" !== r.charAt(0) && (r = "#" + r), d && "?" !== d.charAt(0) && (d = "?" + d), e + o + (n = n.replace(/[?#]/g, function (t) {
        return encodeURIComponent(t);
      })) + (d = d.replace("#", "%23")) + r;
    }, o.prototype.resolve = function (t) {
      return this.resolveObject(v(t, !1, !0)).format();
    }, o.prototype.resolveObject = function (t) {
      if (i.isString(t)) {
        var e = new o();
        e.parse(t, !1, !0), t = e;
      }

      for (var n = new o(), r = Object.keys(this), a = 0; a < r.length; a++) {
        var d = r[a];
        n[d] = this[d];
      }

      if (n.hash = t.hash, "" === t.href) return n.href = n.format(), n;

      if (t.slashes && !t.protocol) {
        for (var s = Object.keys(t), u = 0; u < s.length; u++) {
          var l = s[u];
          "protocol" !== l && (n[l] = t[l]);
        }

        return g[n.protocol] && n.hostname && !n.pathname && (n.path = n.pathname = "/"), n.href = n.format(), n;
      }

      if (t.protocol && t.protocol !== n.protocol) {
        if (!g[t.protocol]) {
          for (var f = Object.keys(t), c = 0; c < f.length; c++) {
            var h = f[c];
            n[h] = t[h];
          }

          return n.href = n.format(), n;
        }

        if (n.protocol = t.protocol, t.host || _[t.protocol]) n.pathname = t.pathname;else {
          for (var $ = (t.pathname || "").split("/"); $.length && !(t.host = $.shift());) {
            ;
          }

          t.host || (t.host = ""), t.hostname || (t.hostname = ""), "" !== $[0] && $.unshift(""), $.length < 2 && $.unshift(""), n.pathname = $.join("/");
        }

        if (n.search = t.search, n.query = t.query, n.host = t.host || "", n.auth = t.auth, n.hostname = t.hostname || t.host, n.port = t.port, n.pathname || n.search) {
          var p = n.pathname || "",
              m = n.search || "";
          n.path = p + m;
        }

        return n.slashes = n.slashes || t.slashes, n.href = n.format(), n;
      }

      var v = n.pathname && "/" === n.pathname.charAt(0),
          y = t.host || t.pathname && "/" === t.pathname.charAt(0),
          b = y || v || n.host && t.pathname,
          w = b,
          E = n.pathname && n.pathname.split("/") || [],
          k = ($ = t.pathname && t.pathname.split("/") || [], n.protocol && !g[n.protocol]);
      if (k && (n.hostname = "", n.port = null, n.host && ("" === E[0] ? E[0] = n.host : E.unshift(n.host)), n.host = "", t.protocol && (t.hostname = null, t.port = null, t.host && ("" === $[0] ? $[0] = t.host : $.unshift(t.host)), t.host = null), b = b && ("" === $[0] || "" === E[0])), y) n.host = t.host || "" === t.host ? t.host : n.host, n.hostname = t.hostname || "" === t.hostname ? t.hostname : n.hostname, n.search = t.search, n.query = t.query, E = $;else if ($.length) E || (E = []), E.pop(), E = E.concat($), n.search = t.search, n.query = t.query;else if (!i.isNullOrUndefined(t.search)) {
        if (k) n.hostname = n.host = E.shift(), (T = !!(n.host && n.host.indexOf("@") > 0) && n.host.split("@")) && (n.auth = T.shift(), n.host = n.hostname = T.shift());
        return n.search = t.search, n.query = t.query, i.isNull(n.pathname) && i.isNull(n.search) || (n.path = (n.pathname ? n.pathname : "") + (n.search ? n.search : "")), n.href = n.format(), n;
      }
      if (!E.length) return n.pathname = null, n.search ? n.path = "/" + n.search : n.path = null, n.href = n.format(), n;

      for (var x = E.slice(-1)[0], S = (n.host || t.host || E.length > 1) && ("." === x || ".." === x) || "" === x, A = 0, R = E.length; R >= 0; R--) {
        "." === (x = E[R]) ? E.splice(R, 1) : ".." === x ? (E.splice(R, 1), A++) : A && (E.splice(R, 1), A--);
      }

      if (!b && !w) for (; A--; A) {
        E.unshift("..");
      }
      !b || "" === E[0] || E[0] && "/" === E[0].charAt(0) || E.unshift(""), S && "/" !== E.join("/").substr(-1) && E.push("");
      var T,
          C = "" === E[0] || E[0] && "/" === E[0].charAt(0);
      k && (n.hostname = n.host = C ? "" : E.length ? E.shift() : "", (T = !!(n.host && n.host.indexOf("@") > 0) && n.host.split("@")) && (n.auth = T.shift(), n.host = n.hostname = T.shift()));
      return (b = b || n.host && E.length) && !C && E.unshift(""), E.length ? n.pathname = E.join("/") : (n.pathname = null, n.path = null), i.isNull(n.pathname) && i.isNull(n.search) || (n.path = (n.pathname ? n.pathname : "") + (n.search ? n.search : "")), n.auth = t.auth || n.auth, n.slashes = n.slashes || t.slashes, n.href = n.format(), n;
    }, o.prototype.parseHost = function () {
      var t = this.host,
          e = d.exec(t);
      e && (":" !== (e = e[0]) && (this.port = e.substr(1)), t = t.substr(0, t.length - e.length)), t && (this.hostname = t);
    };
  }, function (t, e, n) {
    "use strict";

    e.decode = e.parse = n(119), e.encode = e.stringify = n(120);
  }, function (t, e, n) {
    "use strict";

    t.exports = {
      2: "need dictionary",
      1: "stream end",
      0: "",
      "-1": "file error",
      "-2": "stream error",
      "-3": "data error",
      "-4": "insufficient memory",
      "-5": "buffer error",
      "-6": "incompatible version"
    };
  }, function (t, e, n) {
    "use strict";

    t.exports = function (t, e, n, r) {
      for (var i = 65535 & t | 0, o = t >>> 16 & 65535 | 0, a = 0; 0 !== n;) {
        n -= a = n > 2e3 ? 2e3 : n;

        do {
          o = o + (i = i + e[r++] | 0) | 0;
        } while (--a);

        i %= 65521, o %= 65521;
      }

      return i | o << 16 | 0;
    };
  }, function (t, e, n) {
    "use strict";

    var r = function () {
      for (var t, e = [], n = 0; n < 256; n++) {
        t = n;

        for (var r = 0; r < 8; r++) {
          t = 1 & t ? 3988292384 ^ t >>> 1 : t >>> 1;
        }

        e[n] = t;
      }

      return e;
    }();

    t.exports = function (t, e, n, i) {
      var o = r,
          a = i + n;
      t ^= -1;

      for (var d = i; d < a; d++) {
        t = t >>> 8 ^ o[255 & (t ^ e[d])];
      }

      return -1 ^ t;
    };
  }, function (t, e, n) {
    "use strict";

    e.__esModule = !0;
    var r = o(n(80)),
        i = o(n(1));

    function o(t) {
      return t && t.__esModule ? t : {
        default: t
      };
    }

    e.default = function () {
      return function (t, e) {
        if (Array.isArray(t)) return t;
        if ((0, r.default)(Object(t))) return function (t, e) {
          var n = [],
              r = !0,
              o = !1,
              a = void 0;

          try {
            for (var d, s = (0, i.default)(t); !(r = (d = s.next()).done) && (n.push(d.value), !e || n.length !== e); r = !0) {
              ;
            }
          } catch (t) {
            o = !0, a = t;
          } finally {
            try {
              !r && s.return && s.return();
            } finally {
              if (o) throw a;
            }
          }

          return n;
        }(t, e);
        throw new TypeError("Invalid attempt to destructure non-iterable instance");
      };
    }();
  }, function (t, e, n) {
    "use strict";

    e.__esModule = !0, e.default = function (t, e) {
      if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
    };
  }, function (t, e, n) {
    "use strict";

    e.__esModule = !0;

    var r = function (t) {
      return t && t.__esModule ? t : {
        default: t
      };
    }(n(97));

    e.default = function () {
      function t(t, e) {
        for (var n = 0; n < e.length; n++) {
          var i = e[n];
          i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), (0, r.default)(t, i.key, i);
        }
      }

      return function (e, n, r) {
        return n && t(e.prototype, n), r && t(e, r), e;
      };
    }();
  }, function (t, e, n) {
    var r = n(100);
    t.exports = n(r ? 101 : 134);
  }, function (t, e, n) {
    t.exports = n(143);
  }, function (t, e, n) {
    t.exports = {
      default: n(67),
      __esModule: !0
    };
  }, function (t, e, n) {
    n(68), t.exports = n(8).Object.assign;
  }, function (t, e, n) {
    var r = n(22);
    r(r.S + r.F, "Object", {
      assign: n(73)
    });
  }, function (t, e, n) {
    var r = n(70);

    t.exports = function (t, e, n) {
      if (r(t), void 0 === e) return t;

      switch (n) {
        case 1:
          return function (n) {
            return t.call(e, n);
          };

        case 2:
          return function (n, r) {
            return t.call(e, n, r);
          };

        case 3:
          return function (n, r, i) {
            return t.call(e, n, r, i);
          };
      }

      return function () {
        return t.apply(e, arguments);
      };
    };
  }, function (t, e) {
    t.exports = function (t) {
      if ("function" != typeof t) throw TypeError(t + " is not a function!");
      return t;
    };
  }, function (t, e, n) {
    t.exports = !n(11) && !n(24)(function () {
      return 7 != Object.defineProperty(n(32)("div"), "a", {
        get: function get() {
          return 7;
        }
      }).a;
    });
  }, function (t, e, n) {
    var r = n(23);

    t.exports = function (t, e) {
      if (!r(t)) return t;
      var n, i;
      if (e && "function" == typeof (n = t.toString) && !r(i = n.call(t))) return i;
      if ("function" == typeof (n = t.valueOf) && !r(i = n.call(t))) return i;
      if (!e && "function" == typeof (n = t.toString) && !r(i = n.call(t))) return i;
      throw TypeError("Can't convert object to primitive value");
    };
  }, function (t, e, n) {
    "use strict";

    var r = n(34),
        i = n(78),
        o = n(79),
        a = n(40),
        d = n(35),
        s = Object.assign;
    t.exports = !s || n(24)(function () {
      var t = {},
          e = {},
          n = Symbol(),
          r = "abcdefghijklmnopqrst";
      return t[n] = 7, r.split("").forEach(function (t) {
        e[t] = t;
      }), 7 != s({}, t)[n] || Object.keys(s({}, e)).join("") != r;
    }) ? function (t, e) {
      for (var n = a(t), s = arguments.length, u = 1, l = i.f, f = o.f; s > u;) {
        for (var c, h = d(arguments[u++]), $ = l ? r(h).concat(l(h)) : r(h), p = $.length, _ = 0; p > _;) {
          f.call(h, c = $[_++]) && (n[c] = h[c]);
        }
      }

      return n;
    } : s;
  }, function (t, e, n) {
    var r = n(16),
        i = n(25),
        o = n(75)(!1),
        a = n(28)("IE_PROTO");

    t.exports = function (t, e) {
      var n,
          d = i(t),
          s = 0,
          u = [];

      for (n in d) {
        n != a && r(d, n) && u.push(n);
      }

      for (; e.length > s;) {
        r(d, n = e[s++]) && (~o(u, n) || u.push(n));
      }

      return u;
    };
  }, function (t, e, n) {
    var r = n(25),
        i = n(76),
        o = n(77);

    t.exports = function (t) {
      return function (e, n, a) {
        var d,
            s = r(e),
            u = i(s.length),
            l = o(a, u);

        if (t && n != n) {
          for (; u > l;) {
            if ((d = s[l++]) != d) return !0;
          }
        } else for (; u > l; l++) {
          if ((t || l in s) && s[l] === n) return t || l || 0;
        }

        return !t && -1;
      };
    };
  }, function (t, e, n) {
    var r = n(27),
        i = Math.min;

    t.exports = function (t) {
      return t > 0 ? i(r(t), 9007199254740991) : 0;
    };
  }, function (t, e, n) {
    var r = n(27),
        i = Math.max,
        o = Math.min;

    t.exports = function (t, e) {
      return (t = r(t)) < 0 ? i(t + e, 0) : o(t, e);
    };
  }, function (t, e) {
    e.f = Object.getOwnPropertySymbols;
  }, function (t, e) {
    e.f = {}.propertyIsEnumerable;
  }, function (t, e, n) {
    t.exports = {
      default: n(81),
      __esModule: !0
    };
  }, function (t, e, n) {
    n(41), n(44), t.exports = n(93);
  }, function (t, e, n) {
    "use strict";

    var r = n(83),
        i = n(84),
        o = n(12),
        a = n(25);
    t.exports = n(42)(Array, "Array", function (t, e) {
      this._t = a(t), this._i = 0, this._k = e;
    }, function () {
      var t = this._t,
          e = this._k,
          n = this._i++;
      return !t || n >= t.length ? (this._t = void 0, i(1)) : i(0, "keys" == e ? n : "values" == e ? t[n] : [n, t[n]]);
    }, "values"), o.Arguments = o.Array, r("keys"), r("values"), r("entries");
  }, function (t, e) {
    t.exports = function () {};
  }, function (t, e) {
    t.exports = function (t, e) {
      return {
        value: e,
        done: !!t
      };
    };
  }, function (t, e) {
    t.exports = !0;
  }, function (t, e, n) {
    t.exports = n(10);
  }, function (t, e, n) {
    "use strict";

    var r = n(88),
        i = n(33),
        o = n(43),
        a = {};
    n(10)(a, n(6)("iterator"), function () {
      return this;
    }), t.exports = function (t, e, n) {
      t.prototype = r(a, {
        next: i(1, n)
      }), o(t, e + " Iterator");
    };
  }, function (t, e, n) {
    var r = n(15),
        i = n(89),
        o = n(39),
        a = n(28)("IE_PROTO"),
        d = function d() {},
        _s = function s() {
      var t,
          e = n(32)("iframe"),
          r = o.length;

      for (e.style.display = "none", n(90).appendChild(e), e.src = "javascript:", (t = e.contentWindow.document).open(), t.write("<script>document.F=Object<\/script>"), t.close(), _s = t.F; r--;) {
        delete _s.prototype[o[r]];
      }

      return _s();
    };

    t.exports = Object.create || function (t, e) {
      var n;
      return null !== t ? (d.prototype = r(t), n = new d(), d.prototype = null, n[a] = t) : n = _s(), void 0 === e ? n : i(n, e);
    };
  }, function (t, e, n) {
    var r = n(14),
        i = n(15),
        o = n(34);
    t.exports = n(11) ? Object.defineProperties : function (t, e) {
      i(t);

      for (var n, a = o(e), d = a.length, s = 0; d > s;) {
        r.f(t, n = a[s++], e[n]);
      }

      return t;
    };
  }, function (t, e, n) {
    var r = n(7).document;
    t.exports = r && r.documentElement;
  }, function (t, e, n) {
    var r = n(16),
        i = n(40),
        o = n(28)("IE_PROTO"),
        a = Object.prototype;

    t.exports = Object.getPrototypeOf || function (t) {
      return t = i(t), r(t, o) ? t[o] : "function" == typeof t.constructor && t instanceof t.constructor ? t.constructor.prototype : t instanceof Object ? a : null;
    };
  }, function (t, e, n) {
    var r = n(27),
        i = n(26);

    t.exports = function (t) {
      return function (e, n) {
        var o,
            a,
            d = String(i(e)),
            s = r(n),
            u = d.length;
        return s < 0 || s >= u ? t ? "" : void 0 : (o = d.charCodeAt(s)) < 55296 || o > 56319 || s + 1 === u || (a = d.charCodeAt(s + 1)) < 56320 || a > 57343 ? t ? d.charAt(s) : o : t ? d.slice(s, s + 2) : a - 56320 + (o - 55296 << 10) + 65536;
      };
    };
  }, function (t, e, n) {
    var r = n(45),
        i = n(6)("iterator"),
        o = n(12);

    t.exports = n(8).isIterable = function (t) {
      var e = Object(t);
      return void 0 !== e[i] || "@@iterator" in e || o.hasOwnProperty(r(e));
    };
  }, function (t, e, n) {
    n(41), n(44), t.exports = n(95);
  }, function (t, e, n) {
    var r = n(15),
        i = n(96);

    t.exports = n(8).getIterator = function (t) {
      var e = i(t);
      if ("function" != typeof e) throw TypeError(t + " is not iterable!");
      return r(e.call(t));
    };
  }, function (t, e, n) {
    var r = n(45),
        i = n(6)("iterator"),
        o = n(12);

    t.exports = n(8).getIteratorMethod = function (t) {
      if (void 0 != t) return t[i] || t["@@iterator"] || o[r(t)];
    };
  }, function (t, e, n) {
    t.exports = {
      default: n(98),
      __esModule: !0
    };
  }, function (t, e, n) {
    n(99);
    var r = n(8).Object;

    t.exports = function (t, e, n) {
      return r.defineProperty(t, e, n);
    };
  }, function (t, e, n) {
    var r = n(22);
    r(r.S + r.F * !n(11), "Object", {
      defineProperty: n(14).f
    });
  }, function (t, e, n) {
    (function (e) {
      t.exports = !(void 0 === e || !e.versions || !e.versions.node);
    }).call(this, n(2));
  }, function (t, e, n) {
    var r = n(102);

    t.exports = function (t, e) {
      r({
        url: t
      }, function (t, n) {
        if (t) e(t);else {
          try {
            var r = JSON.parse(n.body);
          } catch (t) {
            return void e("Parse error: " + t);
          }

          200 == n.statusCode ? e(null, r) : e("Unexpected response code.");
        }
      });
    };
  }, function (t, e, n) {
    "use strict";

    (function (e) {
      var r = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (t) {
        return _typeof(t);
      } : function (t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : _typeof(t);
      },
          i = n(47),
          o = n(121),
          a = n(56),
          d = n(57),
          s = n(122),
          u = n(31),
          l = function l(t, n) {
        if ("string" != typeof t && !t.hasOwnProperty("url")) throw new Error("Missing url option from options for request method.");
        var u = "object" === (void 0 === t ? "undefined" : r(t)) ? a.parse(t.url) : a.parse(t),
            l = {
          hostname: u.hostname,
          port: u.port || ("http:" === u.protocol.toLowerCase() ? 80 : 443),
          path: u.path,
          method: "GET",
          headers: {},
          auth: u.auth || null,
          timeout: null,
          parse: "none",
          stream: !1
        };

        if ("object" === (void 0 === t ? "undefined" : r(t)) && (l = Object.assign(l, t)), l.port = Number(l.port), !0 === l.compressed && (l.headers["accept-encoding"] = "gzip, deflate"), t.hasOwnProperty("form")) {
          if ("object" !== r(t.form)) throw new Error("phin 'form' option must be of type Object if present.");
          var f = d.stringify(t.form);
          l.headers["Content-Type"] = "application/x-www-form-urlencoded", l.headers["Content-Length"] = e.byteLength(f), t.data = f;
        }

        var c = void 0,
            h = function h(t) {
          var r = t;
          !0 === l.compressed && ("gzip" === t.headers["content-encoding"] ? r = t.pipe(s.createGunzip()) : "deflate" === t.headers["content-encoding"] && (r = t.pipe(s.createInflate()))), !0 === l.stream ? (t.stream = r, n(null, t)) : (t.body = new e([]), r.on("data", function (n) {
            t.body = e.concat([t.body, n]);
          }), r.on("end", function () {
            if (n) {
              if ("json" === l.parse) try {
                t.body = JSON.parse(t.body.toString());
              } catch (e) {
                return void n("Invalid JSON received.", t);
              }
              n(null, t);
            }
          }));
        };

        switch (u.protocol.toLowerCase()) {
          case "http:":
            c = i.request(l, h);
            break;

          case "https:":
            c = o.request(l, h);
            break;

          default:
            return void (n && n(new Error("Invalid / unknown URL protocol. Expected HTTP or HTTPS."), null));
        }

        if ("number" == typeof l.timeout && c.setTimeout(l.timeout, function () {
          c.abort(), n(new Error("Timeout has been reached."), null), n = null;
        }), c.on("error", function (t) {
          n && n(t, null);
        }), t.hasOwnProperty("data")) {
          var $ = t.data;
          if (!(t.data instanceof e) && "object" === r(t.data)) if ("application/x-www-form-urlencoded" === (l.headers["content-type"] || l.headers["Content-Type"])) $ = d.stringify(t.data);else try {
            $ = JSON.stringify(t.data);
          } catch (t) {
            n(new Error("Couldn't stringify object. (Likely due to a circular reference.)"), null);
          }
          c.write($);
        }

        c.end();
      };

      l.promisified = function (t, e) {
        return new Promise(function (e, n) {
          l(t, function (t, r) {
            t ? n(t) : e(r);
          });
        });
      }, u.promisify && (l[u.promisify.custom] = l.promisified), t.exports = l;
    }).call(this, n(3).Buffer);
  }, function (t, e, n) {
    "use strict";

    e.byteLength = function (t) {
      return 3 * t.length / 4 - u(t);
    }, e.toByteArray = function (t) {
      var e,
          n,
          r,
          a,
          d,
          s = t.length;
      a = u(t), d = new o(3 * s / 4 - a), n = a > 0 ? s - 4 : s;
      var l = 0;

      for (e = 0; e < n; e += 4) {
        r = i[t.charCodeAt(e)] << 18 | i[t.charCodeAt(e + 1)] << 12 | i[t.charCodeAt(e + 2)] << 6 | i[t.charCodeAt(e + 3)], d[l++] = r >> 16 & 255, d[l++] = r >> 8 & 255, d[l++] = 255 & r;
      }

      2 === a ? (r = i[t.charCodeAt(e)] << 2 | i[t.charCodeAt(e + 1)] >> 4, d[l++] = 255 & r) : 1 === a && (r = i[t.charCodeAt(e)] << 10 | i[t.charCodeAt(e + 1)] << 4 | i[t.charCodeAt(e + 2)] >> 2, d[l++] = r >> 8 & 255, d[l++] = 255 & r);
      return d;
    }, e.fromByteArray = function (t) {
      for (var e, n = t.length, i = n % 3, o = "", a = [], d = 0, s = n - i; d < s; d += 16383) {
        a.push(f(t, d, d + 16383 > s ? s : d + 16383));
      }

      1 === i ? (e = t[n - 1], o += r[e >> 2], o += r[e << 4 & 63], o += "==") : 2 === i && (e = (t[n - 2] << 8) + t[n - 1], o += r[e >> 10], o += r[e >> 4 & 63], o += r[e << 2 & 63], o += "=");
      return a.push(o), a.join("");
    };

    for (var r = [], i = [], o = "undefined" != typeof Uint8Array ? Uint8Array : Array, a = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", d = 0, s = a.length; d < s; ++d) {
      r[d] = a[d], i[a.charCodeAt(d)] = d;
    }

    function u(t) {
      var e = t.length;
      if (e % 4 > 0) throw new Error("Invalid string. Length must be a multiple of 4");
      return "=" === t[e - 2] ? 2 : "=" === t[e - 1] ? 1 : 0;
    }

    function l(t) {
      return r[t >> 18 & 63] + r[t >> 12 & 63] + r[t >> 6 & 63] + r[63 & t];
    }

    function f(t, e, n) {
      for (var r, i = [], o = e; o < n; o += 3) {
        r = (t[o] << 16) + (t[o + 1] << 8) + t[o + 2], i.push(l(r));
      }

      return i.join("");
    }

    i["-".charCodeAt(0)] = 62, i["_".charCodeAt(0)] = 63;
  }, function (t, e) {
    e.read = function (t, e, n, r, i) {
      var o,
          a,
          d = 8 * i - r - 1,
          s = (1 << d) - 1,
          u = s >> 1,
          l = -7,
          f = n ? i - 1 : 0,
          c = n ? -1 : 1,
          h = t[e + f];

      for (f += c, o = h & (1 << -l) - 1, h >>= -l, l += d; l > 0; o = 256 * o + t[e + f], f += c, l -= 8) {
        ;
      }

      for (a = o & (1 << -l) - 1, o >>= -l, l += r; l > 0; a = 256 * a + t[e + f], f += c, l -= 8) {
        ;
      }

      if (0 === o) o = 1 - u;else {
        if (o === s) return a ? NaN : 1 / 0 * (h ? -1 : 1);
        a += Math.pow(2, r), o -= u;
      }
      return (h ? -1 : 1) * a * Math.pow(2, o - r);
    }, e.write = function (t, e, n, r, i, o) {
      var a,
          d,
          s,
          u = 8 * o - i - 1,
          l = (1 << u) - 1,
          f = l >> 1,
          c = 23 === i ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
          h = r ? 0 : o - 1,
          $ = r ? 1 : -1,
          p = e < 0 || 0 === e && 1 / e < 0 ? 1 : 0;

      for (e = Math.abs(e), isNaN(e) || e === 1 / 0 ? (d = isNaN(e) ? 1 : 0, a = l) : (a = Math.floor(Math.log(e) / Math.LN2), e * (s = Math.pow(2, -a)) < 1 && (a--, s *= 2), (e += a + f >= 1 ? c / s : c * Math.pow(2, 1 - f)) * s >= 2 && (a++, s /= 2), a + f >= l ? (d = 0, a = l) : a + f >= 1 ? (d = (e * s - 1) * Math.pow(2, i), a += f) : (d = e * Math.pow(2, f - 1) * Math.pow(2, i), a = 0)); i >= 8; t[n + h] = 255 & d, h += $, d /= 256, i -= 8) {
        ;
      }

      for (a = a << i | d, u += i; u > 0; t[n + h] = 255 & a, h += $, a /= 256, u -= 8) {
        ;
      }

      t[n + h - $] |= 128 * p;
    };
  }, function (t, e, n) {
    (function (e, r, i) {
      var o = n(48),
          a = n(5),
          d = n(106),
          s = n(29),
          u = n(113),
          l = d.IncomingMessage,
          f = d.readyStates;

      var c = t.exports = function (t) {
        var n,
            r = this;
        s.Writable.call(r), r._opts = t, r._body = [], r._headers = {}, t.auth && r.setHeader("Authorization", "Basic " + new e(t.auth).toString("base64")), Object.keys(t.headers).forEach(function (e) {
          r.setHeader(e, t.headers[e]);
        });
        var i = !0;
        if ("disable-fetch" === t.mode || "timeout" in t) i = !1, n = !0;else if ("prefer-streaming" === t.mode) n = !1;else if ("allow-wrong-content-type" === t.mode) n = !o.overrideMimeType;else {
          if (t.mode && "default" !== t.mode && "prefer-fast" !== t.mode) throw new Error("Invalid value for opts.mode");
          n = !0;
        }
        r._mode = function (t, e) {
          return o.fetch && e ? "fetch" : o.mozchunkedarraybuffer ? "moz-chunked-arraybuffer" : o.msstream ? "ms-stream" : o.arraybuffer && t ? "arraybuffer" : o.vbArray && t ? "text:vbarray" : "text";
        }(n, i), r.on("finish", function () {
          r._onFinish();
        });
      };

      a(c, s.Writable), c.prototype.setHeader = function (t, e) {
        var n = t.toLowerCase();
        -1 === h.indexOf(n) && (this._headers[n] = {
          name: t,
          value: e
        });
      }, c.prototype.getHeader = function (t) {
        var e = this._headers[t.toLowerCase()];

        return e ? e.value : null;
      }, c.prototype.removeHeader = function (t) {
        delete this._headers[t.toLowerCase()];
      }, c.prototype._onFinish = function () {
        var t = this;

        if (!t._destroyed) {
          var n = t._opts,
              a = t._headers,
              d = null;
          "GET" !== n.method && "HEAD" !== n.method && (d = o.blobConstructor ? new r.Blob(t._body.map(function (t) {
            return u(t);
          }), {
            type: (a["content-type"] || {}).value || ""
          }) : e.concat(t._body).toString());
          var s = [];
          if (Object.keys(a).forEach(function (t) {
            var e = a[t].name,
                n = a[t].value;
            Array.isArray(n) ? n.forEach(function (t) {
              s.push([e, t]);
            }) : s.push([e, n]);
          }), "fetch" === t._mode) r.fetch(t._opts.url, {
            method: t._opts.method,
            headers: s,
            body: d || void 0,
            mode: "cors",
            credentials: n.withCredentials ? "include" : "same-origin"
          }).then(function (e) {
            t._fetchResponse = e, t._connect();
          }, function (e) {
            t.emit("error", e);
          });else {
            var l = t._xhr = new r.XMLHttpRequest();

            try {
              l.open(t._opts.method, t._opts.url, !0);
            } catch (e) {
              return void i.nextTick(function () {
                t.emit("error", e);
              });
            }

            "responseType" in l && (l.responseType = t._mode.split(":")[0]), "withCredentials" in l && (l.withCredentials = !!n.withCredentials), "text" === t._mode && "overrideMimeType" in l && l.overrideMimeType("text/plain; charset=x-user-defined"), "timeout" in n && (l.timeout = n.timeout, l.ontimeout = function () {
              t.emit("timeout");
            }), s.forEach(function (t) {
              l.setRequestHeader(t[0], t[1]);
            }), t._response = null, l.onreadystatechange = function () {
              switch (l.readyState) {
                case f.LOADING:
                case f.DONE:
                  t._onXHRProgress();

              }
            }, "moz-chunked-arraybuffer" === t._mode && (l.onprogress = function () {
              t._onXHRProgress();
            }), l.onerror = function () {
              t._destroyed || t.emit("error", new Error("XHR error"));
            };

            try {
              l.send(d);
            } catch (e) {
              return void i.nextTick(function () {
                t.emit("error", e);
              });
            }
          }
        }
      }, c.prototype._onXHRProgress = function () {
        (function (t) {
          try {
            var e = t.status;
            return null !== e && 0 !== e;
          } catch (t) {
            return !1;
          }
        })(this._xhr) && !this._destroyed && (this._response || this._connect(), this._response._onXHRProgress());
      }, c.prototype._connect = function () {
        var t = this;
        t._destroyed || (t._response = new l(t._xhr, t._fetchResponse, t._mode), t._response.on("error", function (e) {
          t.emit("error", e);
        }), t.emit("response", t._response));
      }, c.prototype._write = function (t, e, n) {
        this._body.push(t), n();
      }, c.prototype.abort = c.prototype.destroy = function () {
        this._destroyed = !0, this._response && (this._response._destroyed = !0), this._xhr && this._xhr.abort();
      }, c.prototype.end = function (t, e, n) {
        "function" == typeof t && (n = t, t = void 0), s.Writable.prototype.end.call(this, t, e, n);
      }, c.prototype.flushHeaders = function () {}, c.prototype.setTimeout = function () {}, c.prototype.setNoDelay = function () {}, c.prototype.setSocketKeepAlive = function () {};
      var h = ["accept-charset", "accept-encoding", "access-control-request-headers", "access-control-request-method", "connection", "content-length", "cookie", "cookie2", "date", "dnt", "expect", "host", "keep-alive", "origin", "referer", "te", "trailer", "transfer-encoding", "upgrade", "user-agent", "via"];
    }).call(this, n(3).Buffer, n(0), n(2));
  }, function (t, e, n) {
    (function (t, r, i) {
      var o = n(48),
          a = n(5),
          d = n(29),
          s = e.readyStates = {
        UNSENT: 0,
        OPENED: 1,
        HEADERS_RECEIVED: 2,
        LOADING: 3,
        DONE: 4
      },
          u = e.IncomingMessage = function (e, n, i) {
        var a = this;

        if (d.Readable.call(a), a._mode = i, a.headers = {}, a.rawHeaders = [], a.trailers = {}, a.rawTrailers = [], a.on("end", function () {
          t.nextTick(function () {
            a.emit("close");
          });
        }), "fetch" === i) {
          a._fetchResponse = n, a.url = n.url, a.statusCode = n.status, a.statusMessage = n.statusText, n.headers.forEach(function (t, e) {
            a.headers[e.toLowerCase()] = t, a.rawHeaders.push(e, t);
          });
          var s = n.body.getReader();
          !function t() {
            s.read().then(function (e) {
              a._destroyed || (e.done ? a.push(null) : (a.push(new r(e.value)), t()));
            }).catch(function (t) {
              a.emit("error", t);
            });
          }();
        } else {
          if (a._xhr = e, a._pos = 0, a.url = e.responseURL, a.statusCode = e.status, a.statusMessage = e.statusText, e.getAllResponseHeaders().split(/\r?\n/).forEach(function (t) {
            var e = t.match(/^([^:]+):\s*(.*)/);

            if (e) {
              var n = e[1].toLowerCase();
              "set-cookie" === n ? (void 0 === a.headers[n] && (a.headers[n] = []), a.headers[n].push(e[2])) : void 0 !== a.headers[n] ? a.headers[n] += ", " + e[2] : a.headers[n] = e[2], a.rawHeaders.push(e[1], e[2]);
            }
          }), a._charset = "x-user-defined", !o.overrideMimeType) {
            var u = a.rawHeaders["mime-type"];

            if (u) {
              var l = u.match(/;\s*charset=([^;])(;|$)/);
              l && (a._charset = l[1].toLowerCase());
            }

            a._charset || (a._charset = "utf-8");
          }
        }
      };

      a(u, d.Readable), u.prototype._read = function () {}, u.prototype._onXHRProgress = function () {
        var t = this,
            e = t._xhr,
            n = null;

        switch (t._mode) {
          case "text:vbarray":
            if (e.readyState !== s.DONE) break;

            try {
              n = new i.VBArray(e.responseBody).toArray();
            } catch (t) {}

            if (null !== n) {
              t.push(new r(n));
              break;
            }

          case "text":
            try {
              n = e.responseText;
            } catch (e) {
              t._mode = "text:vbarray";
              break;
            }

            if (n.length > t._pos) {
              var o = n.substr(t._pos);

              if ("x-user-defined" === t._charset) {
                for (var a = new r(o.length), d = 0; d < o.length; d++) {
                  a[d] = 255 & o.charCodeAt(d);
                }

                t.push(a);
              } else t.push(o, t._charset);

              t._pos = n.length;
            }

            break;

          case "arraybuffer":
            if (e.readyState !== s.DONE || !e.response) break;
            n = e.response, t.push(new r(new Uint8Array(n)));
            break;

          case "moz-chunked-arraybuffer":
            if (n = e.response, e.readyState !== s.LOADING || !n) break;
            t.push(new r(new Uint8Array(n)));
            break;

          case "ms-stream":
            if (n = e.response, e.readyState !== s.LOADING) break;
            var u = new i.MSStreamReader();
            u.onprogress = function () {
              u.result.byteLength > t._pos && (t.push(new r(new Uint8Array(u.result.slice(t._pos)))), t._pos = u.result.byteLength);
            }, u.onload = function () {
              t.push(null);
            }, u.readAsArrayBuffer(n);
        }

        t._xhr.readyState === s.DONE && "ms-stream" !== t._mode && t.push(null);
      };
    }).call(this, n(2), n(3).Buffer, n(0));
  }, function (t, e) {}, function (t, e, n) {
    "use strict";

    var r = n(30).Buffer;

    function i(t, e, n) {
      t.copy(e, n);
    }

    t.exports = function () {
      function t() {
        !function (t, e) {
          if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
        }(this, t), this.head = null, this.tail = null, this.length = 0;
      }

      return t.prototype.push = function (t) {
        var e = {
          data: t,
          next: null
        };
        this.length > 0 ? this.tail.next = e : this.head = e, this.tail = e, ++this.length;
      }, t.prototype.unshift = function (t) {
        var e = {
          data: t,
          next: this.head
        };
        0 === this.length && (this.tail = e), this.head = e, ++this.length;
      }, t.prototype.shift = function () {
        if (0 !== this.length) {
          var t = this.head.data;
          return 1 === this.length ? this.head = this.tail = null : this.head = this.head.next, --this.length, t;
        }
      }, t.prototype.clear = function () {
        this.head = this.tail = null, this.length = 0;
      }, t.prototype.join = function (t) {
        if (0 === this.length) return "";

        for (var e = this.head, n = "" + e.data; e = e.next;) {
          n += t + e.data;
        }

        return n;
      }, t.prototype.concat = function (t) {
        if (0 === this.length) return r.alloc(0);
        if (1 === this.length) return this.head.data;

        for (var e = r.allocUnsafe(t >>> 0), n = this.head, o = 0; n;) {
          i(n.data, e, o), o += n.data.length, n = n.next;
        }

        return e;
      }, t;
    }();
  }, function (t, e, n) {
    var r = Function.prototype.apply;

    function i(t, e) {
      this._id = t, this._clearFn = e;
    }

    e.setTimeout = function () {
      return new i(r.call(setTimeout, window, arguments), clearTimeout);
    }, e.setInterval = function () {
      return new i(r.call(setInterval, window, arguments), clearInterval);
    }, e.clearTimeout = e.clearInterval = function (t) {
      t && t.close();
    }, i.prototype.unref = i.prototype.ref = function () {}, i.prototype.close = function () {
      this._clearFn.call(window, this._id);
    }, e.enroll = function (t, e) {
      clearTimeout(t._idleTimeoutId), t._idleTimeout = e;
    }, e.unenroll = function (t) {
      clearTimeout(t._idleTimeoutId), t._idleTimeout = -1;
    }, e._unrefActive = e.active = function (t) {
      clearTimeout(t._idleTimeoutId);
      var e = t._idleTimeout;
      e >= 0 && (t._idleTimeoutId = setTimeout(function () {
        t._onTimeout && t._onTimeout();
      }, e));
    }, n(110), e.setImmediate = setImmediate, e.clearImmediate = clearImmediate;
  }, function (t, e, n) {
    (function (t, e) {
      !function (t, n) {
        "use strict";

        if (!t.setImmediate) {
          var r,
              i = 1,
              o = {},
              a = !1,
              d = t.document,
              s = Object.getPrototypeOf && Object.getPrototypeOf(t);
          s = s && s.setTimeout ? s : t, "[object process]" === {}.toString.call(t.process) ? r = function r(t) {
            e.nextTick(function () {
              l(t);
            });
          } : function () {
            if (t.postMessage && !t.importScripts) {
              var e = !0,
                  n = t.onmessage;
              return t.onmessage = function () {
                e = !1;
              }, t.postMessage("", "*"), t.onmessage = n, e;
            }
          }() ? function () {
            var e = "setImmediate$" + Math.random() + "$",
                n = function n(_n) {
              _n.source === t && "string" == typeof _n.data && 0 === _n.data.indexOf(e) && l(+_n.data.slice(e.length));
            };

            t.addEventListener ? t.addEventListener("message", n, !1) : t.attachEvent("onmessage", n), r = function r(n) {
              t.postMessage(e + n, "*");
            };
          }() : t.MessageChannel ? function () {
            var t = new MessageChannel();
            t.port1.onmessage = function (t) {
              l(t.data);
            }, r = function r(e) {
              t.port2.postMessage(e);
            };
          }() : d && "onreadystatechange" in d.createElement("script") ? function () {
            var t = d.documentElement;

            r = function r(e) {
              var n = d.createElement("script");
              n.onreadystatechange = function () {
                l(e), n.onreadystatechange = null, t.removeChild(n), n = null;
              }, t.appendChild(n);
            };
          }() : r = function r(t) {
            setTimeout(l, 0, t);
          }, s.setImmediate = function (t) {
            "function" != typeof t && (t = new Function("" + t));

            for (var e = new Array(arguments.length - 1), n = 0; n < e.length; n++) {
              e[n] = arguments[n + 1];
            }

            var a = {
              callback: t,
              args: e
            };
            return o[i] = a, r(i), i++;
          }, s.clearImmediate = u;
        }

        function u(t) {
          delete o[t];
        }

        function l(t) {
          if (a) setTimeout(l, 0, t);else {
            var e = o[t];

            if (e) {
              a = !0;

              try {
                !function (t) {
                  var e = t.callback,
                      r = t.args;

                  switch (r.length) {
                    case 0:
                      e();
                      break;

                    case 1:
                      e(r[0]);
                      break;

                    case 2:
                      e(r[0], r[1]);
                      break;

                    case 3:
                      e(r[0], r[1], r[2]);
                      break;

                    default:
                      e.apply(n, r);
                  }
                }(e);
              } finally {
                u(t), a = !1;
              }
            }
          }
        }
      }("undefined" == typeof self ? void 0 === t ? this : t : self);
    }).call(this, n(0), n(2));
  }, function (t, e, n) {
    (function (e) {
      function n(t) {
        try {
          if (!e.localStorage) return !1;
        } catch (t) {
          return !1;
        }

        var n = e.localStorage[t];
        return null != n && "true" === String(n).toLowerCase();
      }

      t.exports = function (t, e) {
        if (n("noDeprecation")) return t;
        var r = !1;
        return function () {
          if (!r) {
            if (n("throwDeprecation")) throw new Error(e);
            n("traceDeprecation") ? console.trace(e) : console.warn(e), r = !0;
          }

          return t.apply(this, arguments);
        };
      };
    }).call(this, n(0));
  }, function (t, e, n) {
    "use strict";

    t.exports = o;
    var r = n(55),
        i = n(13);

    function o(t) {
      if (!(this instanceof o)) return new o(t);
      r.call(this, t);
    }

    i.inherits = n(5), i.inherits(o, r), o.prototype._transform = function (t, e, n) {
      n(null, t);
    };
  }, function (t, e, n) {
    var r = n(3).Buffer;

    t.exports = function (t) {
      if (t instanceof Uint8Array) {
        if (0 === t.byteOffset && t.byteLength === t.buffer.byteLength) return t.buffer;
        if ("function" == typeof t.buffer.slice) return t.buffer.slice(t.byteOffset, t.byteOffset + t.byteLength);
      }

      if (r.isBuffer(t)) {
        for (var e = new Uint8Array(t.length), n = t.length, i = 0; i < n; i++) {
          e[i] = t[i];
        }

        return e.buffer;
      }

      throw new Error("Argument must be a Buffer");
    };
  }, function (t, e) {
    t.exports = function () {
      for (var t = {}, e = 0; e < arguments.length; e++) {
        var r = arguments[e];

        for (var i in r) {
          n.call(r, i) && (t[i] = r[i]);
        }
      }

      return t;
    };

    var n = Object.prototype.hasOwnProperty;
  }, function (t, e) {
    t.exports = {
      100: "Continue",
      101: "Switching Protocols",
      102: "Processing",
      200: "OK",
      201: "Created",
      202: "Accepted",
      203: "Non-Authoritative Information",
      204: "No Content",
      205: "Reset Content",
      206: "Partial Content",
      207: "Multi-Status",
      208: "Already Reported",
      226: "IM Used",
      300: "Multiple Choices",
      301: "Moved Permanently",
      302: "Found",
      303: "See Other",
      304: "Not Modified",
      305: "Use Proxy",
      307: "Temporary Redirect",
      308: "Permanent Redirect",
      400: "Bad Request",
      401: "Unauthorized",
      402: "Payment Required",
      403: "Forbidden",
      404: "Not Found",
      405: "Method Not Allowed",
      406: "Not Acceptable",
      407: "Proxy Authentication Required",
      408: "Request Timeout",
      409: "Conflict",
      410: "Gone",
      411: "Length Required",
      412: "Precondition Failed",
      413: "Payload Too Large",
      414: "URI Too Long",
      415: "Unsupported Media Type",
      416: "Range Not Satisfiable",
      417: "Expectation Failed",
      418: "I'm a teapot",
      421: "Misdirected Request",
      422: "Unprocessable Entity",
      423: "Locked",
      424: "Failed Dependency",
      425: "Unordered Collection",
      426: "Upgrade Required",
      428: "Precondition Required",
      429: "Too Many Requests",
      431: "Request Header Fields Too Large",
      451: "Unavailable For Legal Reasons",
      500: "Internal Server Error",
      501: "Not Implemented",
      502: "Bad Gateway",
      503: "Service Unavailable",
      504: "Gateway Timeout",
      505: "HTTP Version Not Supported",
      506: "Variant Also Negotiates",
      507: "Insufficient Storage",
      508: "Loop Detected",
      509: "Bandwidth Limit Exceeded",
      510: "Not Extended",
      511: "Network Authentication Required"
    };
  }, function (t, e, n) {
    (function (t, r) {
      var i;
      !function (o) {
        "object" == _typeof(e) && e && e.nodeType, "object" == _typeof(t) && t && t.nodeType;
        var a = "object" == _typeof(r) && r;
        a.global !== a && a.window !== a && a.self;
        var d,
            s = 2147483647,
            u = 36,
            l = 1,
            f = 26,
            c = 38,
            h = 700,
            $ = 72,
            p = 128,
            _ = "-",
            g = /^xn--/,
            m = /[^\x20-\x7E]/,
            v = /[\x2E\u3002\uFF0E\uFF61]/g,
            y = {
          overflow: "Overflow: input needs wider integers to process",
          "not-basic": "Illegal input >= 0x80 (not a basic code point)",
          "invalid-input": "Invalid input"
        },
            b = u - l,
            w = Math.floor,
            E = String.fromCharCode;

        function k(t) {
          throw new RangeError(y[t]);
        }

        function x(t, e) {
          for (var n = t.length, r = []; n--;) {
            r[n] = e(t[n]);
          }

          return r;
        }

        function S(t, e) {
          var n = t.split("@"),
              r = "";
          return n.length > 1 && (r = n[0] + "@", t = n[1]), r + x((t = t.replace(v, ".")).split("."), e).join(".");
        }

        function A(t) {
          for (var e, n, r = [], i = 0, o = t.length; i < o;) {
            (e = t.charCodeAt(i++)) >= 55296 && e <= 56319 && i < o ? 56320 == (64512 & (n = t.charCodeAt(i++))) ? r.push(((1023 & e) << 10) + (1023 & n) + 65536) : (r.push(e), i--) : r.push(e);
          }

          return r;
        }

        function R(t) {
          return x(t, function (t) {
            var e = "";
            return t > 65535 && (e += E((t -= 65536) >>> 10 & 1023 | 55296), t = 56320 | 1023 & t), e += E(t);
          }).join("");
        }

        function T(t) {
          return t - 48 < 10 ? t - 22 : t - 65 < 26 ? t - 65 : t - 97 < 26 ? t - 97 : u;
        }

        function C(t, e) {
          return t + 22 + 75 * (t < 26) - ((0 != e) << 5);
        }

        function O(t, e, n) {
          var r = 0;

          for (t = n ? w(t / h) : t >> 1, t += w(t / e); t > b * f >> 1; r += u) {
            t = w(t / b);
          }

          return w(r + (b + 1) * t / (t + c));
        }

        function L(t) {
          var e,
              n,
              r,
              i,
              o,
              a,
              d,
              c,
              h,
              g,
              m = [],
              v = t.length,
              y = 0,
              b = p,
              E = $;

          for ((n = t.lastIndexOf(_)) < 0 && (n = 0), r = 0; r < n; ++r) {
            t.charCodeAt(r) >= 128 && k("not-basic"), m.push(t.charCodeAt(r));
          }

          for (i = n > 0 ? n + 1 : 0; i < v;) {
            for (o = y, a = 1, d = u; i >= v && k("invalid-input"), ((c = T(t.charCodeAt(i++))) >= u || c > w((s - y) / a)) && k("overflow"), y += c * a, !(c < (h = d <= E ? l : d >= E + f ? f : d - E)); d += u) {
              a > w(s / (g = u - h)) && k("overflow"), a *= g;
            }

            E = O(y - o, e = m.length + 1, 0 == o), w(y / e) > s - b && k("overflow"), b += w(y / e), y %= e, m.splice(y++, 0, b);
          }

          return R(m);
        }

        function M(t) {
          var e,
              n,
              r,
              i,
              o,
              a,
              d,
              c,
              h,
              g,
              m,
              v,
              y,
              b,
              x,
              S = [];

          for (v = (t = A(t)).length, e = p, n = 0, o = $, a = 0; a < v; ++a) {
            (m = t[a]) < 128 && S.push(E(m));
          }

          for (r = i = S.length, i && S.push(_); r < v;) {
            for (d = s, a = 0; a < v; ++a) {
              (m = t[a]) >= e && m < d && (d = m);
            }

            for (d - e > w((s - n) / (y = r + 1)) && k("overflow"), n += (d - e) * y, e = d, a = 0; a < v; ++a) {
              if ((m = t[a]) < e && ++n > s && k("overflow"), m == e) {
                for (c = n, h = u; !(c < (g = h <= o ? l : h >= o + f ? f : h - o)); h += u) {
                  x = c - g, b = u - g, S.push(E(C(g + x % b, 0))), c = w(x / b);
                }

                S.push(E(C(c, 0))), o = O(n, y, r == i), n = 0, ++r;
              }
            }

            ++n, ++e;
          }

          return S.join("");
        }

        d = {
          version: "1.4.1",
          ucs2: {
            decode: A,
            encode: R
          },
          decode: L,
          encode: M,
          toASCII: function toASCII(t) {
            return S(t, function (t) {
              return m.test(t) ? "xn--" + M(t) : t;
            });
          },
          toUnicode: function toUnicode(t) {
            return S(t, function (t) {
              return g.test(t) ? L(t.slice(4).toLowerCase()) : t;
            });
          }
        }, void 0 === (i = function () {
          return d;
        }.call(e, n, e, t)) || (t.exports = i);
      }();
    }).call(this, n(117)(t), n(0));
  }, function (t, e) {
    t.exports = function (t) {
      return t.webpackPolyfill || (t.deprecate = function () {}, t.paths = [], t.children || (t.children = []), Object.defineProperty(t, "loaded", {
        enumerable: !0,
        get: function get() {
          return t.l;
        }
      }), Object.defineProperty(t, "id", {
        enumerable: !0,
        get: function get() {
          return t.i;
        }
      }), t.webpackPolyfill = 1), t;
    };
  }, function (t, e, n) {
    "use strict";

    t.exports = {
      isString: function isString(t) {
        return "string" == typeof t;
      },
      isObject: function isObject(t) {
        return "object" == _typeof(t) && null !== t;
      },
      isNull: function isNull(t) {
        return null === t;
      },
      isNullOrUndefined: function isNullOrUndefined(t) {
        return null == t;
      }
    };
  }, function (t, e, n) {
    "use strict";

    function r(t, e) {
      return Object.prototype.hasOwnProperty.call(t, e);
    }

    t.exports = function (t, e, n, o) {
      e = e || "&", n = n || "=";
      var a = {};
      if ("string" != typeof t || 0 === t.length) return a;
      var d = /\+/g;
      t = t.split(e);
      var s = 1e3;
      o && "number" == typeof o.maxKeys && (s = o.maxKeys);
      var u = t.length;
      s > 0 && u > s && (u = s);

      for (var l = 0; l < u; ++l) {
        var f,
            c,
            h,
            $,
            p = t[l].replace(d, "%20"),
            _ = p.indexOf(n);

        _ >= 0 ? (f = p.substr(0, _), c = p.substr(_ + 1)) : (f = p, c = ""), h = decodeURIComponent(f), $ = decodeURIComponent(c), r(a, h) ? i(a[h]) ? a[h].push($) : a[h] = [a[h], $] : a[h] = $;
      }

      return a;
    };

    var i = Array.isArray || function (t) {
      return "[object Array]" === Object.prototype.toString.call(t);
    };
  }, function (t, e, n) {
    "use strict";

    var r = function r(t) {
      switch (_typeof(t)) {
        case "string":
          return t;

        case "boolean":
          return t ? "true" : "false";

        case "number":
          return isFinite(t) ? t : "";

        default:
          return "";
      }
    };

    t.exports = function (t, e, n, d) {
      return e = e || "&", n = n || "=", null === t && (t = void 0), "object" == _typeof(t) ? o(a(t), function (a) {
        var d = encodeURIComponent(r(a)) + n;
        return i(t[a]) ? o(t[a], function (t) {
          return d + encodeURIComponent(r(t));
        }).join(e) : d + encodeURIComponent(r(t[a]));
      }).join(e) : d ? encodeURIComponent(r(d)) + n + encodeURIComponent(r(t)) : "";
    };

    var i = Array.isArray || function (t) {
      return "[object Array]" === Object.prototype.toString.call(t);
    };

    function o(t, e) {
      if (t.map) return t.map(e);

      for (var n = [], r = 0; r < t.length; r++) {
        n.push(e(t[r], r));
      }

      return n;
    }

    var a = Object.keys || function (t) {
      var e = [];

      for (var n in t) {
        Object.prototype.hasOwnProperty.call(t, n) && e.push(n);
      }

      return e;
    };
  }, function (t, e, n) {
    var r = n(47),
        i = t.exports;

    for (var o in r) {
      r.hasOwnProperty(o) && (i[o] = r[o]);
    }

    i.request = function (t, e) {
      return t || (t = {}), t.scheme = "https", t.protocol = "https:", r.request.call(this, t, e);
    };
  }, function (t, e, n) {
    (function (t, r) {
      var i = n(123),
          o = n(124),
          a = n(31),
          d = n(133).ok;

      function s(e, n, r) {
        var i = [],
            o = 0;

        function a() {
          for (var t; null !== (t = e.read());) {
            i.push(t), o += t.length;
          }

          e.once("readable", a);
        }

        function d() {
          var n = t.concat(i, o);
          i = [], r(null, n), e.close();
        }

        e.on("error", function (t) {
          e.removeListener("end", d), e.removeListener("readable", a), r(t);
        }), e.on("end", d), e.end(n), a();
      }

      function u(e, n) {
        if ("string" == typeof n && (n = new t(n)), !t.isBuffer(n)) throw new TypeError("Not a string or buffer");
        var r = o.Z_FINISH;
        return e._processChunk(n, r);
      }

      function l(t) {
        if (!(this instanceof l)) return new l(t);
        g.call(this, t, o.DEFLATE);
      }

      function f(t) {
        if (!(this instanceof f)) return new f(t);
        g.call(this, t, o.INFLATE);
      }

      function c(t) {
        if (!(this instanceof c)) return new c(t);
        g.call(this, t, o.GZIP);
      }

      function h(t) {
        if (!(this instanceof h)) return new h(t);
        g.call(this, t, o.GUNZIP);
      }

      function $(t) {
        if (!(this instanceof $)) return new $(t);
        g.call(this, t, o.DEFLATERAW);
      }

      function p(t) {
        if (!(this instanceof p)) return new p(t);
        g.call(this, t, o.INFLATERAW);
      }

      function _(t) {
        if (!(this instanceof _)) return new _(t);
        g.call(this, t, o.UNZIP);
      }

      function g(n, r) {
        if (this._opts = n = n || {}, this._chunkSize = n.chunkSize || e.Z_DEFAULT_CHUNK, i.call(this, n), n.flush && n.flush !== o.Z_NO_FLUSH && n.flush !== o.Z_PARTIAL_FLUSH && n.flush !== o.Z_SYNC_FLUSH && n.flush !== o.Z_FULL_FLUSH && n.flush !== o.Z_FINISH && n.flush !== o.Z_BLOCK) throw new Error("Invalid flush flag: " + n.flush);
        if (this._flushFlag = n.flush || o.Z_NO_FLUSH, n.chunkSize && (n.chunkSize < e.Z_MIN_CHUNK || n.chunkSize > e.Z_MAX_CHUNK)) throw new Error("Invalid chunk size: " + n.chunkSize);
        if (n.windowBits && (n.windowBits < e.Z_MIN_WINDOWBITS || n.windowBits > e.Z_MAX_WINDOWBITS)) throw new Error("Invalid windowBits: " + n.windowBits);
        if (n.level && (n.level < e.Z_MIN_LEVEL || n.level > e.Z_MAX_LEVEL)) throw new Error("Invalid compression level: " + n.level);
        if (n.memLevel && (n.memLevel < e.Z_MIN_MEMLEVEL || n.memLevel > e.Z_MAX_MEMLEVEL)) throw new Error("Invalid memLevel: " + n.memLevel);
        if (n.strategy && n.strategy != e.Z_FILTERED && n.strategy != e.Z_HUFFMAN_ONLY && n.strategy != e.Z_RLE && n.strategy != e.Z_FIXED && n.strategy != e.Z_DEFAULT_STRATEGY) throw new Error("Invalid strategy: " + n.strategy);
        if (n.dictionary && !t.isBuffer(n.dictionary)) throw new Error("Invalid dictionary: it should be a Buffer instance");
        this._binding = new o.Zlib(r);
        var a = this;
        this._hadError = !1, this._binding.onerror = function (t, n) {
          a._binding = null, a._hadError = !0;
          var r = new Error(t);
          r.errno = n, r.code = e.codes[n], a.emit("error", r);
        };
        var d = e.Z_DEFAULT_COMPRESSION;
        "number" == typeof n.level && (d = n.level);
        var s = e.Z_DEFAULT_STRATEGY;
        "number" == typeof n.strategy && (s = n.strategy), this._binding.init(n.windowBits || e.Z_DEFAULT_WINDOWBITS, d, n.memLevel || e.Z_DEFAULT_MEMLEVEL, s, n.dictionary), this._buffer = new t(this._chunkSize), this._offset = 0, this._closed = !1, this._level = d, this._strategy = s, this.once("end", this.close);
      }

      o.Z_MIN_WINDOWBITS = 8, o.Z_MAX_WINDOWBITS = 15, o.Z_DEFAULT_WINDOWBITS = 15, o.Z_MIN_CHUNK = 64, o.Z_MAX_CHUNK = 1 / 0, o.Z_DEFAULT_CHUNK = 16384, o.Z_MIN_MEMLEVEL = 1, o.Z_MAX_MEMLEVEL = 9, o.Z_DEFAULT_MEMLEVEL = 8, o.Z_MIN_LEVEL = -1, o.Z_MAX_LEVEL = 9, o.Z_DEFAULT_LEVEL = o.Z_DEFAULT_COMPRESSION, Object.keys(o).forEach(function (t) {
        t.match(/^Z/) && (e[t] = o[t]);
      }), e.codes = {
        Z_OK: o.Z_OK,
        Z_STREAM_END: o.Z_STREAM_END,
        Z_NEED_DICT: o.Z_NEED_DICT,
        Z_ERRNO: o.Z_ERRNO,
        Z_STREAM_ERROR: o.Z_STREAM_ERROR,
        Z_DATA_ERROR: o.Z_DATA_ERROR,
        Z_MEM_ERROR: o.Z_MEM_ERROR,
        Z_BUF_ERROR: o.Z_BUF_ERROR,
        Z_VERSION_ERROR: o.Z_VERSION_ERROR
      }, Object.keys(e.codes).forEach(function (t) {
        e.codes[e.codes[t]] = t;
      }), e.Deflate = l, e.Inflate = f, e.Gzip = c, e.Gunzip = h, e.DeflateRaw = $, e.InflateRaw = p, e.Unzip = _, e.createDeflate = function (t) {
        return new l(t);
      }, e.createInflate = function (t) {
        return new f(t);
      }, e.createDeflateRaw = function (t) {
        return new $(t);
      }, e.createInflateRaw = function (t) {
        return new p(t);
      }, e.createGzip = function (t) {
        return new c(t);
      }, e.createGunzip = function (t) {
        return new h(t);
      }, e.createUnzip = function (t) {
        return new _(t);
      }, e.deflate = function (t, e, n) {
        return "function" == typeof e && (n = e, e = {}), s(new l(e), t, n);
      }, e.deflateSync = function (t, e) {
        return u(new l(e), t);
      }, e.gzip = function (t, e, n) {
        return "function" == typeof e && (n = e, e = {}), s(new c(e), t, n);
      }, e.gzipSync = function (t, e) {
        return u(new c(e), t);
      }, e.deflateRaw = function (t, e, n) {
        return "function" == typeof e && (n = e, e = {}), s(new $(e), t, n);
      }, e.deflateRawSync = function (t, e) {
        return u(new $(e), t);
      }, e.unzip = function (t, e, n) {
        return "function" == typeof e && (n = e, e = {}), s(new _(e), t, n);
      }, e.unzipSync = function (t, e) {
        return u(new _(e), t);
      }, e.inflate = function (t, e, n) {
        return "function" == typeof e && (n = e, e = {}), s(new f(e), t, n);
      }, e.inflateSync = function (t, e) {
        return u(new f(e), t);
      }, e.gunzip = function (t, e, n) {
        return "function" == typeof e && (n = e, e = {}), s(new h(e), t, n);
      }, e.gunzipSync = function (t, e) {
        return u(new h(e), t);
      }, e.inflateRaw = function (t, e, n) {
        return "function" == typeof e && (n = e, e = {}), s(new p(e), t, n);
      }, e.inflateRawSync = function (t, e) {
        return u(new p(e), t);
      }, a.inherits(g, i), g.prototype.params = function (t, n, i) {
        if (t < e.Z_MIN_LEVEL || t > e.Z_MAX_LEVEL) throw new RangeError("Invalid compression level: " + t);
        if (n != e.Z_FILTERED && n != e.Z_HUFFMAN_ONLY && n != e.Z_RLE && n != e.Z_FIXED && n != e.Z_DEFAULT_STRATEGY) throw new TypeError("Invalid strategy: " + n);

        if (this._level !== t || this._strategy !== n) {
          var a = this;
          this.flush(o.Z_SYNC_FLUSH, function () {
            a._binding.params(t, n), a._hadError || (a._level = t, a._strategy = n, i && i());
          });
        } else r.nextTick(i);
      }, g.prototype.reset = function () {
        return this._binding.reset();
      }, g.prototype._flush = function (e) {
        this._transform(new t(0), "", e);
      }, g.prototype.flush = function (e, n) {
        var i = this._writableState;
        if (("function" == typeof e || void 0 === e && !n) && (n = e, e = o.Z_FULL_FLUSH), i.ended) n && r.nextTick(n);else if (i.ending) n && this.once("end", n);else if (i.needDrain) {
          var a = this;
          this.once("drain", function () {
            a.flush(n);
          });
        } else this._flushFlag = e, this.write(new t(0), "", n);
      }, g.prototype.close = function (t) {
        if (t && r.nextTick(t), !this._closed) {
          this._closed = !0, this._binding.close();
          var e = this;
          r.nextTick(function () {
            e.emit("close");
          });
        }
      }, g.prototype._transform = function (e, n, r) {
        var i,
            a = this._writableState,
            d = (a.ending || a.ended) && (!e || a.length === e.length);
        if (null === !e && !t.isBuffer(e)) return r(new Error("invalid input"));
        d ? i = o.Z_FINISH : (i = this._flushFlag, e.length >= a.length && (this._flushFlag = this._opts.flush || o.Z_NO_FLUSH));

        this._processChunk(e, i, r);
      }, g.prototype._processChunk = function (e, n, r) {
        var i = e && e.length,
            o = this._chunkSize - this._offset,
            a = 0,
            s = this,
            u = "function" == typeof r;

        if (!u) {
          var l,
              f = [],
              c = 0;
          this.on("error", function (t) {
            l = t;
          });

          do {
            var h = this._binding.writeSync(n, e, a, i, this._buffer, this._offset, o);
          } while (!this._hadError && _(h[0], h[1]));

          if (this._hadError) throw l;
          var $ = t.concat(f, c);
          return this.close(), $;
        }

        var p = this._binding.write(n, e, a, i, this._buffer, this._offset, o);

        function _(l, h) {
          if (!s._hadError) {
            var $ = o - h;

            if (d($ >= 0, "have should not go down"), $ > 0) {
              var p = s._buffer.slice(s._offset, s._offset + $);

              s._offset += $, u ? s.push(p) : (f.push(p), c += p.length);
            }

            if ((0 === h || s._offset >= s._chunkSize) && (o = s._chunkSize, s._offset = 0, s._buffer = new t(s._chunkSize)), 0 === h) {
              if (a += i - l, i = l, !u) return !0;

              var g = s._binding.write(n, e, a, i, s._buffer, s._offset, s._chunkSize);

              return g.callback = _, void (g.buffer = e);
            }

            if (!u) return !1;
            r();
          }
        }

        p.buffer = e, p.callback = _;
      }, a.inherits(l, g), a.inherits(f, g), a.inherits(c, g), a.inherits(h, g), a.inherits($, g), a.inherits(p, g), a.inherits(_, g);
    }).call(this, n(3).Buffer, n(2));
  }, function (t, e, n) {
    t.exports = n(29).Transform;
  }, function (t, e, n) {
    (function (t, r) {
      var i = n(58),
          o = n(125),
          a = n(126),
          d = n(128),
          s = n(131);

      for (var u in s) {
        e[u] = s[u];
      }

      function l(t) {
        if (t < e.DEFLATE || t > e.UNZIP) throw new TypeError("Bad argument");
        this.mode = t, this.init_done = !1, this.write_in_progress = !1, this.pending_close = !1, this.windowBits = 0, this.level = 0, this.memLevel = 0, this.strategy = 0, this.dictionary = null;
      }

      function f(t, e) {
        for (var n = 0; n < t.length; n++) {
          this[e + n] = t[n];
        }
      }

      e.NONE = 0, e.DEFLATE = 1, e.INFLATE = 2, e.GZIP = 3, e.GUNZIP = 4, e.DEFLATERAW = 5, e.INFLATERAW = 6, e.UNZIP = 7, l.prototype.init = function (t, n, r, i, s) {
        switch (this.windowBits = t, this.level = n, this.memLevel = r, this.strategy = i, this.mode !== e.GZIP && this.mode !== e.GUNZIP || (this.windowBits += 16), this.mode === e.UNZIP && (this.windowBits += 32), this.mode !== e.DEFLATERAW && this.mode !== e.INFLATERAW || (this.windowBits = -this.windowBits), this.strm = new o(), this.mode) {
          case e.DEFLATE:
          case e.GZIP:
          case e.DEFLATERAW:
            var u = a.deflateInit2(this.strm, this.level, e.Z_DEFLATED, this.windowBits, this.memLevel, this.strategy);
            break;

          case e.INFLATE:
          case e.GUNZIP:
          case e.INFLATERAW:
          case e.UNZIP:
            u = d.inflateInit2(this.strm, this.windowBits);
            break;

          default:
            throw new Error("Unknown mode " + this.mode);
        }

        u === e.Z_OK ? (this.write_in_progress = !1, this.init_done = !0) : this._error(u);
      }, l.prototype.params = function () {
        throw new Error("deflateParams Not supported");
      }, l.prototype._writeCheck = function () {
        if (!this.init_done) throw new Error("write before init");
        if (this.mode === e.NONE) throw new Error("already finalized");
        if (this.write_in_progress) throw new Error("write already in progress");
        if (this.pending_close) throw new Error("close is pending");
      }, l.prototype.write = function (e, n, r, i, o, a, d) {
        this._writeCheck(), this.write_in_progress = !0;
        var s = this;
        return t.nextTick(function () {
          s.write_in_progress = !1;

          var t = s._write(e, n, r, i, o, a, d);

          s.callback(t[0], t[1]), s.pending_close && s.close();
        }), this;
      }, l.prototype.writeSync = function (t, e, n, r, i, o, a) {
        return this._writeCheck(), this._write(t, e, n, r, i, o, a);
      }, l.prototype._write = function (t, n, i, o, s, u, l) {
        if (this.write_in_progress = !0, t !== e.Z_NO_FLUSH && t !== e.Z_PARTIAL_FLUSH && t !== e.Z_SYNC_FLUSH && t !== e.Z_FULL_FLUSH && t !== e.Z_FINISH && t !== e.Z_BLOCK) throw new Error("Invalid flush value");
        null == n && (n = new r(0), o = 0, i = 0), s._set ? s.set = s._set : s.set = f;
        var c = this.strm;

        switch (c.avail_in = o, c.input = n, c.next_in = i, c.avail_out = l, c.output = s, c.next_out = u, this.mode) {
          case e.DEFLATE:
          case e.GZIP:
          case e.DEFLATERAW:
            var h = a.deflate(c, t);
            break;

          case e.UNZIP:
          case e.INFLATE:
          case e.GUNZIP:
          case e.INFLATERAW:
            h = d.inflate(c, t);
            break;

          default:
            throw new Error("Unknown mode " + this.mode);
        }

        return h !== e.Z_STREAM_END && h !== e.Z_OK && this._error(h), this.write_in_progress = !1, [c.avail_in, c.avail_out];
      }, l.prototype.close = function () {
        this.write_in_progress ? this.pending_close = !0 : (this.pending_close = !1, this.mode === e.DEFLATE || this.mode === e.GZIP || this.mode === e.DEFLATERAW ? a.deflateEnd(this.strm) : d.inflateEnd(this.strm), this.mode = e.NONE);
      }, l.prototype.reset = function () {
        switch (this.mode) {
          case e.DEFLATE:
          case e.DEFLATERAW:
            var t = a.deflateReset(this.strm);
            break;

          case e.INFLATE:
          case e.INFLATERAW:
            t = d.inflateReset(this.strm);
        }

        t !== e.Z_OK && this._error(t);
      }, l.prototype._error = function (t) {
        this.onerror(i[t] + ": " + this.strm.msg, t), this.write_in_progress = !1, this.pending_close && this.close();
      }, e.Zlib = l;
    }).call(this, n(2), n(3).Buffer);
  }, function (t, e, n) {
    "use strict";

    t.exports = function () {
      this.input = null, this.next_in = 0, this.avail_in = 0, this.total_in = 0, this.output = null, this.next_out = 0, this.avail_out = 0, this.total_out = 0, this.msg = "", this.state = null, this.data_type = 2, this.adler = 0;
    };
  }, function (t, e, n) {
    "use strict";

    var r,
        i = n(18),
        o = n(127),
        a = n(59),
        d = n(60),
        s = n(58),
        u = 0,
        l = 1,
        f = 3,
        c = 4,
        h = 5,
        $ = 0,
        p = 1,
        _ = -2,
        g = -3,
        m = -5,
        v = -1,
        y = 1,
        b = 2,
        w = 3,
        E = 4,
        k = 0,
        x = 2,
        S = 8,
        A = 9,
        R = 15,
        T = 8,
        C = 286,
        O = 30,
        L = 19,
        M = 2 * C + 1,
        I = 15,
        B = 3,
        P = 258,
        N = P + B + 1,
        U = 32,
        j = 42,
        z = 69,
        D = 73,
        F = 91,
        Z = 103,
        G = 113,
        H = 666,
        q = 1,
        Y = 2,
        K = 3,
        W = 4,
        V = 3;

    function J(t, e) {
      return t.msg = s[e], e;
    }

    function X(t) {
      return (t << 1) - (t > 4 ? 9 : 0);
    }

    function Q(t) {
      for (var e = t.length; --e >= 0;) {
        t[e] = 0;
      }
    }

    function tt(t) {
      var e = t.state,
          n = e.pending;
      n > t.avail_out && (n = t.avail_out), 0 !== n && (i.arraySet(t.output, e.pending_buf, e.pending_out, n, t.next_out), t.next_out += n, e.pending_out += n, t.total_out += n, t.avail_out -= n, e.pending -= n, 0 === e.pending && (e.pending_out = 0));
    }

    function et(t, e) {
      o._tr_flush_block(t, t.block_start >= 0 ? t.block_start : -1, t.strstart - t.block_start, e), t.block_start = t.strstart, tt(t.strm);
    }

    function nt(t, e) {
      t.pending_buf[t.pending++] = e;
    }

    function rt(t, e) {
      t.pending_buf[t.pending++] = e >>> 8 & 255, t.pending_buf[t.pending++] = 255 & e;
    }

    function it(t, e, n, r) {
      var o = t.avail_in;
      return o > r && (o = r), 0 === o ? 0 : (t.avail_in -= o, i.arraySet(e, t.input, t.next_in, o, n), 1 === t.state.wrap ? t.adler = a(t.adler, e, o, n) : 2 === t.state.wrap && (t.adler = d(t.adler, e, o, n)), t.next_in += o, t.total_in += o, o);
    }

    function ot(t, e) {
      var n,
          r,
          i = t.max_chain_length,
          o = t.strstart,
          a = t.prev_length,
          d = t.nice_match,
          s = t.strstart > t.w_size - N ? t.strstart - (t.w_size - N) : 0,
          u = t.window,
          l = t.w_mask,
          f = t.prev,
          c = t.strstart + P,
          h = u[o + a - 1],
          $ = u[o + a];
      t.prev_length >= t.good_match && (i >>= 2), d > t.lookahead && (d = t.lookahead);

      do {
        if (u[(n = e) + a] === $ && u[n + a - 1] === h && u[n] === u[o] && u[++n] === u[o + 1]) {
          o += 2, n++;

          do {} while (u[++o] === u[++n] && u[++o] === u[++n] && u[++o] === u[++n] && u[++o] === u[++n] && u[++o] === u[++n] && u[++o] === u[++n] && u[++o] === u[++n] && u[++o] === u[++n] && o < c);

          if (r = P - (c - o), o = c - P, r > a) {
            if (t.match_start = e, a = r, r >= d) break;
            h = u[o + a - 1], $ = u[o + a];
          }
        }
      } while ((e = f[e & l]) > s && 0 != --i);

      return a <= t.lookahead ? a : t.lookahead;
    }

    function at(t) {
      var e,
          n,
          r,
          o,
          a,
          d = t.w_size;

      do {
        if (o = t.window_size - t.lookahead - t.strstart, t.strstart >= d + (d - N)) {
          i.arraySet(t.window, t.window, d, d, 0), t.match_start -= d, t.strstart -= d, t.block_start -= d, e = n = t.hash_size;

          do {
            r = t.head[--e], t.head[e] = r >= d ? r - d : 0;
          } while (--n);

          e = n = d;

          do {
            r = t.prev[--e], t.prev[e] = r >= d ? r - d : 0;
          } while (--n);

          o += d;
        }

        if (0 === t.strm.avail_in) break;
        if (n = it(t.strm, t.window, t.strstart + t.lookahead, o), t.lookahead += n, t.lookahead + t.insert >= B) for (a = t.strstart - t.insert, t.ins_h = t.window[a], t.ins_h = (t.ins_h << t.hash_shift ^ t.window[a + 1]) & t.hash_mask; t.insert && (t.ins_h = (t.ins_h << t.hash_shift ^ t.window[a + B - 1]) & t.hash_mask, t.prev[a & t.w_mask] = t.head[t.ins_h], t.head[t.ins_h] = a, a++, t.insert--, !(t.lookahead + t.insert < B));) {
          ;
        }
      } while (t.lookahead < N && 0 !== t.strm.avail_in);
    }

    function dt(t, e) {
      for (var n, r;;) {
        if (t.lookahead < N) {
          if (at(t), t.lookahead < N && e === u) return q;
          if (0 === t.lookahead) break;
        }

        if (n = 0, t.lookahead >= B && (t.ins_h = (t.ins_h << t.hash_shift ^ t.window[t.strstart + B - 1]) & t.hash_mask, n = t.prev[t.strstart & t.w_mask] = t.head[t.ins_h], t.head[t.ins_h] = t.strstart), 0 !== n && t.strstart - n <= t.w_size - N && (t.match_length = ot(t, n)), t.match_length >= B) {
          if (r = o._tr_tally(t, t.strstart - t.match_start, t.match_length - B), t.lookahead -= t.match_length, t.match_length <= t.max_lazy_match && t.lookahead >= B) {
            t.match_length--;

            do {
              t.strstart++, t.ins_h = (t.ins_h << t.hash_shift ^ t.window[t.strstart + B - 1]) & t.hash_mask, n = t.prev[t.strstart & t.w_mask] = t.head[t.ins_h], t.head[t.ins_h] = t.strstart;
            } while (0 != --t.match_length);

            t.strstart++;
          } else t.strstart += t.match_length, t.match_length = 0, t.ins_h = t.window[t.strstart], t.ins_h = (t.ins_h << t.hash_shift ^ t.window[t.strstart + 1]) & t.hash_mask;
        } else r = o._tr_tally(t, 0, t.window[t.strstart]), t.lookahead--, t.strstart++;
        if (r && (et(t, !1), 0 === t.strm.avail_out)) return q;
      }

      return t.insert = t.strstart < B - 1 ? t.strstart : B - 1, e === c ? (et(t, !0), 0 === t.strm.avail_out ? K : W) : t.last_lit && (et(t, !1), 0 === t.strm.avail_out) ? q : Y;
    }

    function st(t, e) {
      for (var n, r, i;;) {
        if (t.lookahead < N) {
          if (at(t), t.lookahead < N && e === u) return q;
          if (0 === t.lookahead) break;
        }

        if (n = 0, t.lookahead >= B && (t.ins_h = (t.ins_h << t.hash_shift ^ t.window[t.strstart + B - 1]) & t.hash_mask, n = t.prev[t.strstart & t.w_mask] = t.head[t.ins_h], t.head[t.ins_h] = t.strstart), t.prev_length = t.match_length, t.prev_match = t.match_start, t.match_length = B - 1, 0 !== n && t.prev_length < t.max_lazy_match && t.strstart - n <= t.w_size - N && (t.match_length = ot(t, n), t.match_length <= 5 && (t.strategy === y || t.match_length === B && t.strstart - t.match_start > 4096) && (t.match_length = B - 1)), t.prev_length >= B && t.match_length <= t.prev_length) {
          i = t.strstart + t.lookahead - B, r = o._tr_tally(t, t.strstart - 1 - t.prev_match, t.prev_length - B), t.lookahead -= t.prev_length - 1, t.prev_length -= 2;

          do {
            ++t.strstart <= i && (t.ins_h = (t.ins_h << t.hash_shift ^ t.window[t.strstart + B - 1]) & t.hash_mask, n = t.prev[t.strstart & t.w_mask] = t.head[t.ins_h], t.head[t.ins_h] = t.strstart);
          } while (0 != --t.prev_length);

          if (t.match_available = 0, t.match_length = B - 1, t.strstart++, r && (et(t, !1), 0 === t.strm.avail_out)) return q;
        } else if (t.match_available) {
          if ((r = o._tr_tally(t, 0, t.window[t.strstart - 1])) && et(t, !1), t.strstart++, t.lookahead--, 0 === t.strm.avail_out) return q;
        } else t.match_available = 1, t.strstart++, t.lookahead--;
      }

      return t.match_available && (r = o._tr_tally(t, 0, t.window[t.strstart - 1]), t.match_available = 0), t.insert = t.strstart < B - 1 ? t.strstart : B - 1, e === c ? (et(t, !0), 0 === t.strm.avail_out ? K : W) : t.last_lit && (et(t, !1), 0 === t.strm.avail_out) ? q : Y;
    }

    function ut(t, e, n, r, i) {
      this.good_length = t, this.max_lazy = e, this.nice_length = n, this.max_chain = r, this.func = i;
    }

    function lt(t) {
      var e;
      return t && t.state ? (t.total_in = t.total_out = 0, t.data_type = x, (e = t.state).pending = 0, e.pending_out = 0, e.wrap < 0 && (e.wrap = -e.wrap), e.status = e.wrap ? j : G, t.adler = 2 === e.wrap ? 0 : 1, e.last_flush = u, o._tr_init(e), $) : J(t, _);
    }

    function ft(t) {
      var e = lt(t);
      return e === $ && function (t) {
        t.window_size = 2 * t.w_size, Q(t.head), t.max_lazy_match = r[t.level].max_lazy, t.good_match = r[t.level].good_length, t.nice_match = r[t.level].nice_length, t.max_chain_length = r[t.level].max_chain, t.strstart = 0, t.block_start = 0, t.lookahead = 0, t.insert = 0, t.match_length = t.prev_length = B - 1, t.match_available = 0, t.ins_h = 0;
      }(t.state), e;
    }

    function ct(t, e, n, r, o, a) {
      if (!t) return _;
      var d = 1;
      if (e === v && (e = 6), r < 0 ? (d = 0, r = -r) : r > 15 && (d = 2, r -= 16), o < 1 || o > A || n !== S || r < 8 || r > 15 || e < 0 || e > 9 || a < 0 || a > E) return J(t, _);
      8 === r && (r = 9);
      var s = new function () {
        this.strm = null, this.status = 0, this.pending_buf = null, this.pending_buf_size = 0, this.pending_out = 0, this.pending = 0, this.wrap = 0, this.gzhead = null, this.gzindex = 0, this.method = S, this.last_flush = -1, this.w_size = 0, this.w_bits = 0, this.w_mask = 0, this.window = null, this.window_size = 0, this.prev = null, this.head = null, this.ins_h = 0, this.hash_size = 0, this.hash_bits = 0, this.hash_mask = 0, this.hash_shift = 0, this.block_start = 0, this.match_length = 0, this.prev_match = 0, this.match_available = 0, this.strstart = 0, this.match_start = 0, this.lookahead = 0, this.prev_length = 0, this.max_chain_length = 0, this.max_lazy_match = 0, this.level = 0, this.strategy = 0, this.good_match = 0, this.nice_match = 0, this.dyn_ltree = new i.Buf16(2 * M), this.dyn_dtree = new i.Buf16(2 * (2 * O + 1)), this.bl_tree = new i.Buf16(2 * (2 * L + 1)), Q(this.dyn_ltree), Q(this.dyn_dtree), Q(this.bl_tree), this.l_desc = null, this.d_desc = null, this.bl_desc = null, this.bl_count = new i.Buf16(I + 1), this.heap = new i.Buf16(2 * C + 1), Q(this.heap), this.heap_len = 0, this.heap_max = 0, this.depth = new i.Buf16(2 * C + 1), Q(this.depth), this.l_buf = 0, this.lit_bufsize = 0, this.last_lit = 0, this.d_buf = 0, this.opt_len = 0, this.static_len = 0, this.matches = 0, this.insert = 0, this.bi_buf = 0, this.bi_valid = 0;
      }();
      return t.state = s, s.strm = t, s.wrap = d, s.gzhead = null, s.w_bits = r, s.w_size = 1 << s.w_bits, s.w_mask = s.w_size - 1, s.hash_bits = o + 7, s.hash_size = 1 << s.hash_bits, s.hash_mask = s.hash_size - 1, s.hash_shift = ~~((s.hash_bits + B - 1) / B), s.window = new i.Buf8(2 * s.w_size), s.head = new i.Buf16(s.hash_size), s.prev = new i.Buf16(s.w_size), s.lit_bufsize = 1 << o + 6, s.pending_buf_size = 4 * s.lit_bufsize, s.pending_buf = new i.Buf8(s.pending_buf_size), s.d_buf = 1 * s.lit_bufsize, s.l_buf = 3 * s.lit_bufsize, s.level = e, s.strategy = a, s.method = n, ft(t);
    }

    r = [new ut(0, 0, 0, 0, function (t, e) {
      var n = 65535;

      for (n > t.pending_buf_size - 5 && (n = t.pending_buf_size - 5);;) {
        if (t.lookahead <= 1) {
          if (at(t), 0 === t.lookahead && e === u) return q;
          if (0 === t.lookahead) break;
        }

        t.strstart += t.lookahead, t.lookahead = 0;
        var r = t.block_start + n;
        if ((0 === t.strstart || t.strstart >= r) && (t.lookahead = t.strstart - r, t.strstart = r, et(t, !1), 0 === t.strm.avail_out)) return q;
        if (t.strstart - t.block_start >= t.w_size - N && (et(t, !1), 0 === t.strm.avail_out)) return q;
      }

      return t.insert = 0, e === c ? (et(t, !0), 0 === t.strm.avail_out ? K : W) : (t.strstart > t.block_start && (et(t, !1), t.strm.avail_out), q);
    }), new ut(4, 4, 8, 4, dt), new ut(4, 5, 16, 8, dt), new ut(4, 6, 32, 32, dt), new ut(4, 4, 16, 16, st), new ut(8, 16, 32, 32, st), new ut(8, 16, 128, 128, st), new ut(8, 32, 128, 256, st), new ut(32, 128, 258, 1024, st), new ut(32, 258, 258, 4096, st)], e.deflateInit = function (t, e) {
      return ct(t, e, S, R, T, k);
    }, e.deflateInit2 = ct, e.deflateReset = ft, e.deflateResetKeep = lt, e.deflateSetHeader = function (t, e) {
      return t && t.state ? 2 !== t.state.wrap ? _ : (t.state.gzhead = e, $) : _;
    }, e.deflate = function (t, e) {
      var n, i, a, s;
      if (!t || !t.state || e > h || e < 0) return t ? J(t, _) : _;
      if (i = t.state, !t.output || !t.input && 0 !== t.avail_in || i.status === H && e !== c) return J(t, 0 === t.avail_out ? m : _);
      if (i.strm = t, n = i.last_flush, i.last_flush = e, i.status === j) if (2 === i.wrap) t.adler = 0, nt(i, 31), nt(i, 139), nt(i, 8), i.gzhead ? (nt(i, (i.gzhead.text ? 1 : 0) + (i.gzhead.hcrc ? 2 : 0) + (i.gzhead.extra ? 4 : 0) + (i.gzhead.name ? 8 : 0) + (i.gzhead.comment ? 16 : 0)), nt(i, 255 & i.gzhead.time), nt(i, i.gzhead.time >> 8 & 255), nt(i, i.gzhead.time >> 16 & 255), nt(i, i.gzhead.time >> 24 & 255), nt(i, 9 === i.level ? 2 : i.strategy >= b || i.level < 2 ? 4 : 0), nt(i, 255 & i.gzhead.os), i.gzhead.extra && i.gzhead.extra.length && (nt(i, 255 & i.gzhead.extra.length), nt(i, i.gzhead.extra.length >> 8 & 255)), i.gzhead.hcrc && (t.adler = d(t.adler, i.pending_buf, i.pending, 0)), i.gzindex = 0, i.status = z) : (nt(i, 0), nt(i, 0), nt(i, 0), nt(i, 0), nt(i, 0), nt(i, 9 === i.level ? 2 : i.strategy >= b || i.level < 2 ? 4 : 0), nt(i, V), i.status = G);else {
        var g = S + (i.w_bits - 8 << 4) << 8;
        g |= (i.strategy >= b || i.level < 2 ? 0 : i.level < 6 ? 1 : 6 === i.level ? 2 : 3) << 6, 0 !== i.strstart && (g |= U), g += 31 - g % 31, i.status = G, rt(i, g), 0 !== i.strstart && (rt(i, t.adler >>> 16), rt(i, 65535 & t.adler)), t.adler = 1;
      }
      if (i.status === z) if (i.gzhead.extra) {
        for (a = i.pending; i.gzindex < (65535 & i.gzhead.extra.length) && (i.pending !== i.pending_buf_size || (i.gzhead.hcrc && i.pending > a && (t.adler = d(t.adler, i.pending_buf, i.pending - a, a)), tt(t), a = i.pending, i.pending !== i.pending_buf_size));) {
          nt(i, 255 & i.gzhead.extra[i.gzindex]), i.gzindex++;
        }

        i.gzhead.hcrc && i.pending > a && (t.adler = d(t.adler, i.pending_buf, i.pending - a, a)), i.gzindex === i.gzhead.extra.length && (i.gzindex = 0, i.status = D);
      } else i.status = D;
      if (i.status === D) if (i.gzhead.name) {
        a = i.pending;

        do {
          if (i.pending === i.pending_buf_size && (i.gzhead.hcrc && i.pending > a && (t.adler = d(t.adler, i.pending_buf, i.pending - a, a)), tt(t), a = i.pending, i.pending === i.pending_buf_size)) {
            s = 1;
            break;
          }

          s = i.gzindex < i.gzhead.name.length ? 255 & i.gzhead.name.charCodeAt(i.gzindex++) : 0, nt(i, s);
        } while (0 !== s);

        i.gzhead.hcrc && i.pending > a && (t.adler = d(t.adler, i.pending_buf, i.pending - a, a)), 0 === s && (i.gzindex = 0, i.status = F);
      } else i.status = F;
      if (i.status === F) if (i.gzhead.comment) {
        a = i.pending;

        do {
          if (i.pending === i.pending_buf_size && (i.gzhead.hcrc && i.pending > a && (t.adler = d(t.adler, i.pending_buf, i.pending - a, a)), tt(t), a = i.pending, i.pending === i.pending_buf_size)) {
            s = 1;
            break;
          }

          s = i.gzindex < i.gzhead.comment.length ? 255 & i.gzhead.comment.charCodeAt(i.gzindex++) : 0, nt(i, s);
        } while (0 !== s);

        i.gzhead.hcrc && i.pending > a && (t.adler = d(t.adler, i.pending_buf, i.pending - a, a)), 0 === s && (i.status = Z);
      } else i.status = Z;

      if (i.status === Z && (i.gzhead.hcrc ? (i.pending + 2 > i.pending_buf_size && tt(t), i.pending + 2 <= i.pending_buf_size && (nt(i, 255 & t.adler), nt(i, t.adler >> 8 & 255), t.adler = 0, i.status = G)) : i.status = G), 0 !== i.pending) {
        if (tt(t), 0 === t.avail_out) return i.last_flush = -1, $;
      } else if (0 === t.avail_in && X(e) <= X(n) && e !== c) return J(t, m);

      if (i.status === H && 0 !== t.avail_in) return J(t, m);

      if (0 !== t.avail_in || 0 !== i.lookahead || e !== u && i.status !== H) {
        var v = i.strategy === b ? function (t, e) {
          for (var n;;) {
            if (0 === t.lookahead && (at(t), 0 === t.lookahead)) {
              if (e === u) return q;
              break;
            }

            if (t.match_length = 0, n = o._tr_tally(t, 0, t.window[t.strstart]), t.lookahead--, t.strstart++, n && (et(t, !1), 0 === t.strm.avail_out)) return q;
          }

          return t.insert = 0, e === c ? (et(t, !0), 0 === t.strm.avail_out ? K : W) : t.last_lit && (et(t, !1), 0 === t.strm.avail_out) ? q : Y;
        }(i, e) : i.strategy === w ? function (t, e) {
          for (var n, r, i, a, d = t.window;;) {
            if (t.lookahead <= P) {
              if (at(t), t.lookahead <= P && e === u) return q;
              if (0 === t.lookahead) break;
            }

            if (t.match_length = 0, t.lookahead >= B && t.strstart > 0 && (r = d[i = t.strstart - 1]) === d[++i] && r === d[++i] && r === d[++i]) {
              a = t.strstart + P;

              do {} while (r === d[++i] && r === d[++i] && r === d[++i] && r === d[++i] && r === d[++i] && r === d[++i] && r === d[++i] && r === d[++i] && i < a);

              t.match_length = P - (a - i), t.match_length > t.lookahead && (t.match_length = t.lookahead);
            }

            if (t.match_length >= B ? (n = o._tr_tally(t, 1, t.match_length - B), t.lookahead -= t.match_length, t.strstart += t.match_length, t.match_length = 0) : (n = o._tr_tally(t, 0, t.window[t.strstart]), t.lookahead--, t.strstart++), n && (et(t, !1), 0 === t.strm.avail_out)) return q;
          }

          return t.insert = 0, e === c ? (et(t, !0), 0 === t.strm.avail_out ? K : W) : t.last_lit && (et(t, !1), 0 === t.strm.avail_out) ? q : Y;
        }(i, e) : r[i.level].func(i, e);
        if (v !== K && v !== W || (i.status = H), v === q || v === K) return 0 === t.avail_out && (i.last_flush = -1), $;
        if (v === Y && (e === l ? o._tr_align(i) : e !== h && (o._tr_stored_block(i, 0, 0, !1), e === f && (Q(i.head), 0 === i.lookahead && (i.strstart = 0, i.block_start = 0, i.insert = 0))), tt(t), 0 === t.avail_out)) return i.last_flush = -1, $;
      }

      return e !== c ? $ : i.wrap <= 0 ? p : (2 === i.wrap ? (nt(i, 255 & t.adler), nt(i, t.adler >> 8 & 255), nt(i, t.adler >> 16 & 255), nt(i, t.adler >> 24 & 255), nt(i, 255 & t.total_in), nt(i, t.total_in >> 8 & 255), nt(i, t.total_in >> 16 & 255), nt(i, t.total_in >> 24 & 255)) : (rt(i, t.adler >>> 16), rt(i, 65535 & t.adler)), tt(t), i.wrap > 0 && (i.wrap = -i.wrap), 0 !== i.pending ? $ : p);
    }, e.deflateEnd = function (t) {
      var e;
      return t && t.state ? (e = t.state.status) !== j && e !== z && e !== D && e !== F && e !== Z && e !== G && e !== H ? J(t, _) : (t.state = null, e === G ? J(t, g) : $) : _;
    }, e.deflateSetDictionary = function (t, e) {
      var n,
          r,
          o,
          d,
          s,
          u,
          l,
          f,
          c = e.length;
      if (!t || !t.state) return _;
      if (2 === (d = (n = t.state).wrap) || 1 === d && n.status !== j || n.lookahead) return _;

      for (1 === d && (t.adler = a(t.adler, e, c, 0)), n.wrap = 0, c >= n.w_size && (0 === d && (Q(n.head), n.strstart = 0, n.block_start = 0, n.insert = 0), f = new i.Buf8(n.w_size), i.arraySet(f, e, c - n.w_size, n.w_size, 0), e = f, c = n.w_size), s = t.avail_in, u = t.next_in, l = t.input, t.avail_in = c, t.next_in = 0, t.input = e, at(n); n.lookahead >= B;) {
        r = n.strstart, o = n.lookahead - (B - 1);

        do {
          n.ins_h = (n.ins_h << n.hash_shift ^ n.window[r + B - 1]) & n.hash_mask, n.prev[r & n.w_mask] = n.head[n.ins_h], n.head[n.ins_h] = r, r++;
        } while (--o);

        n.strstart = r, n.lookahead = B - 1, at(n);
      }

      return n.strstart += n.lookahead, n.block_start = n.strstart, n.insert = n.lookahead, n.lookahead = 0, n.match_length = n.prev_length = B - 1, n.match_available = 0, t.next_in = u, t.input = l, t.avail_in = s, n.wrap = d, $;
    }, e.deflateInfo = "pako deflate (from Nodeca project)";
  }, function (t, e, n) {
    "use strict";

    var r = n(18),
        i = 4,
        o = 0,
        a = 1,
        d = 2;

    function s(t) {
      for (var e = t.length; --e >= 0;) {
        t[e] = 0;
      }
    }

    var u = 0,
        l = 1,
        f = 2,
        c = 29,
        h = 256,
        $ = h + 1 + c,
        p = 30,
        _ = 19,
        g = 2 * $ + 1,
        m = 15,
        v = 16,
        y = 7,
        b = 256,
        w = 16,
        E = 17,
        k = 18,
        x = [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0],
        S = [0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13],
        A = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 7],
        R = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15],
        T = new Array(2 * ($ + 2));
    s(T);
    var C = new Array(2 * p);
    s(C);
    var O = new Array(512);
    s(O);
    var L = new Array(256);
    s(L);
    var M = new Array(c);
    s(M);
    var I,
        B,
        P,
        N = new Array(p);

    function U(t, e, n, r, i) {
      this.static_tree = t, this.extra_bits = e, this.extra_base = n, this.elems = r, this.max_length = i, this.has_stree = t && t.length;
    }

    function j(t, e) {
      this.dyn_tree = t, this.max_code = 0, this.stat_desc = e;
    }

    function z(t) {
      return t < 256 ? O[t] : O[256 + (t >>> 7)];
    }

    function D(t, e) {
      t.pending_buf[t.pending++] = 255 & e, t.pending_buf[t.pending++] = e >>> 8 & 255;
    }

    function F(t, e, n) {
      t.bi_valid > v - n ? (t.bi_buf |= e << t.bi_valid & 65535, D(t, t.bi_buf), t.bi_buf = e >> v - t.bi_valid, t.bi_valid += n - v) : (t.bi_buf |= e << t.bi_valid & 65535, t.bi_valid += n);
    }

    function Z(t, e, n) {
      F(t, n[2 * e], n[2 * e + 1]);
    }

    function G(t, e) {
      var n = 0;

      do {
        n |= 1 & t, t >>>= 1, n <<= 1;
      } while (--e > 0);

      return n >>> 1;
    }

    function H(t, e, n) {
      var r,
          i,
          o = new Array(m + 1),
          a = 0;

      for (r = 1; r <= m; r++) {
        o[r] = a = a + n[r - 1] << 1;
      }

      for (i = 0; i <= e; i++) {
        var d = t[2 * i + 1];
        0 !== d && (t[2 * i] = G(o[d]++, d));
      }
    }

    function q(t) {
      var e;

      for (e = 0; e < $; e++) {
        t.dyn_ltree[2 * e] = 0;
      }

      for (e = 0; e < p; e++) {
        t.dyn_dtree[2 * e] = 0;
      }

      for (e = 0; e < _; e++) {
        t.bl_tree[2 * e] = 0;
      }

      t.dyn_ltree[2 * b] = 1, t.opt_len = t.static_len = 0, t.last_lit = t.matches = 0;
    }

    function Y(t) {
      t.bi_valid > 8 ? D(t, t.bi_buf) : t.bi_valid > 0 && (t.pending_buf[t.pending++] = t.bi_buf), t.bi_buf = 0, t.bi_valid = 0;
    }

    function K(t, e, n, r) {
      var i = 2 * e,
          o = 2 * n;
      return t[i] < t[o] || t[i] === t[o] && r[e] <= r[n];
    }

    function W(t, e, n) {
      for (var r = t.heap[n], i = n << 1; i <= t.heap_len && (i < t.heap_len && K(e, t.heap[i + 1], t.heap[i], t.depth) && i++, !K(e, r, t.heap[i], t.depth));) {
        t.heap[n] = t.heap[i], n = i, i <<= 1;
      }

      t.heap[n] = r;
    }

    function V(t, e, n) {
      var r,
          i,
          o,
          a,
          d = 0;
      if (0 !== t.last_lit) do {
        r = t.pending_buf[t.d_buf + 2 * d] << 8 | t.pending_buf[t.d_buf + 2 * d + 1], i = t.pending_buf[t.l_buf + d], d++, 0 === r ? Z(t, i, e) : (Z(t, (o = L[i]) + h + 1, e), 0 !== (a = x[o]) && F(t, i -= M[o], a), Z(t, o = z(--r), n), 0 !== (a = S[o]) && F(t, r -= N[o], a));
      } while (d < t.last_lit);
      Z(t, b, e);
    }

    function J(t, e) {
      var n,
          r,
          i,
          o = e.dyn_tree,
          a = e.stat_desc.static_tree,
          d = e.stat_desc.has_stree,
          s = e.stat_desc.elems,
          u = -1;

      for (t.heap_len = 0, t.heap_max = g, n = 0; n < s; n++) {
        0 !== o[2 * n] ? (t.heap[++t.heap_len] = u = n, t.depth[n] = 0) : o[2 * n + 1] = 0;
      }

      for (; t.heap_len < 2;) {
        o[2 * (i = t.heap[++t.heap_len] = u < 2 ? ++u : 0)] = 1, t.depth[i] = 0, t.opt_len--, d && (t.static_len -= a[2 * i + 1]);
      }

      for (e.max_code = u, n = t.heap_len >> 1; n >= 1; n--) {
        W(t, o, n);
      }

      i = s;

      do {
        n = t.heap[1], t.heap[1] = t.heap[t.heap_len--], W(t, o, 1), r = t.heap[1], t.heap[--t.heap_max] = n, t.heap[--t.heap_max] = r, o[2 * i] = o[2 * n] + o[2 * r], t.depth[i] = (t.depth[n] >= t.depth[r] ? t.depth[n] : t.depth[r]) + 1, o[2 * n + 1] = o[2 * r + 1] = i, t.heap[1] = i++, W(t, o, 1);
      } while (t.heap_len >= 2);

      t.heap[--t.heap_max] = t.heap[1], function (t, e) {
        var n,
            r,
            i,
            o,
            a,
            d,
            s = e.dyn_tree,
            u = e.max_code,
            l = e.stat_desc.static_tree,
            f = e.stat_desc.has_stree,
            c = e.stat_desc.extra_bits,
            h = e.stat_desc.extra_base,
            $ = e.stat_desc.max_length,
            p = 0;

        for (o = 0; o <= m; o++) {
          t.bl_count[o] = 0;
        }

        for (s[2 * t.heap[t.heap_max] + 1] = 0, n = t.heap_max + 1; n < g; n++) {
          (o = s[2 * s[2 * (r = t.heap[n]) + 1] + 1] + 1) > $ && (o = $, p++), s[2 * r + 1] = o, r > u || (t.bl_count[o]++, a = 0, r >= h && (a = c[r - h]), d = s[2 * r], t.opt_len += d * (o + a), f && (t.static_len += d * (l[2 * r + 1] + a)));
        }

        if (0 !== p) {
          do {
            for (o = $ - 1; 0 === t.bl_count[o];) {
              o--;
            }

            t.bl_count[o]--, t.bl_count[o + 1] += 2, t.bl_count[$]--, p -= 2;
          } while (p > 0);

          for (o = $; 0 !== o; o--) {
            for (r = t.bl_count[o]; 0 !== r;) {
              (i = t.heap[--n]) > u || (s[2 * i + 1] !== o && (t.opt_len += (o - s[2 * i + 1]) * s[2 * i], s[2 * i + 1] = o), r--);
            }
          }
        }
      }(t, e), H(o, u, t.bl_count);
    }

    function X(t, e, n) {
      var r,
          i,
          o = -1,
          a = e[1],
          d = 0,
          s = 7,
          u = 4;

      for (0 === a && (s = 138, u = 3), e[2 * (n + 1) + 1] = 65535, r = 0; r <= n; r++) {
        i = a, a = e[2 * (r + 1) + 1], ++d < s && i === a || (d < u ? t.bl_tree[2 * i] += d : 0 !== i ? (i !== o && t.bl_tree[2 * i]++, t.bl_tree[2 * w]++) : d <= 10 ? t.bl_tree[2 * E]++ : t.bl_tree[2 * k]++, d = 0, o = i, 0 === a ? (s = 138, u = 3) : i === a ? (s = 6, u = 3) : (s = 7, u = 4));
      }
    }

    function Q(t, e, n) {
      var r,
          i,
          o = -1,
          a = e[1],
          d = 0,
          s = 7,
          u = 4;

      for (0 === a && (s = 138, u = 3), r = 0; r <= n; r++) {
        if (i = a, a = e[2 * (r + 1) + 1], !(++d < s && i === a)) {
          if (d < u) do {
            Z(t, i, t.bl_tree);
          } while (0 != --d);else 0 !== i ? (i !== o && (Z(t, i, t.bl_tree), d--), Z(t, w, t.bl_tree), F(t, d - 3, 2)) : d <= 10 ? (Z(t, E, t.bl_tree), F(t, d - 3, 3)) : (Z(t, k, t.bl_tree), F(t, d - 11, 7));
          d = 0, o = i, 0 === a ? (s = 138, u = 3) : i === a ? (s = 6, u = 3) : (s = 7, u = 4);
        }
      }
    }

    s(N);
    var tt = !1;

    function et(t, e, n, i) {
      F(t, (u << 1) + (i ? 1 : 0), 3), function (t, e, n, i) {
        Y(t), i && (D(t, n), D(t, ~n)), r.arraySet(t.pending_buf, t.window, e, n, t.pending), t.pending += n;
      }(t, e, n, !0);
    }

    e._tr_init = function (t) {
      tt || (function () {
        var t,
            e,
            n,
            r,
            i,
            o = new Array(m + 1);

        for (n = 0, r = 0; r < c - 1; r++) {
          for (M[r] = n, t = 0; t < 1 << x[r]; t++) {
            L[n++] = r;
          }
        }

        for (L[n - 1] = r, i = 0, r = 0; r < 16; r++) {
          for (N[r] = i, t = 0; t < 1 << S[r]; t++) {
            O[i++] = r;
          }
        }

        for (i >>= 7; r < p; r++) {
          for (N[r] = i << 7, t = 0; t < 1 << S[r] - 7; t++) {
            O[256 + i++] = r;
          }
        }

        for (e = 0; e <= m; e++) {
          o[e] = 0;
        }

        for (t = 0; t <= 143;) {
          T[2 * t + 1] = 8, t++, o[8]++;
        }

        for (; t <= 255;) {
          T[2 * t + 1] = 9, t++, o[9]++;
        }

        for (; t <= 279;) {
          T[2 * t + 1] = 7, t++, o[7]++;
        }

        for (; t <= 287;) {
          T[2 * t + 1] = 8, t++, o[8]++;
        }

        for (H(T, $ + 1, o), t = 0; t < p; t++) {
          C[2 * t + 1] = 5, C[2 * t] = G(t, 5);
        }

        I = new U(T, x, h + 1, $, m), B = new U(C, S, 0, p, m), P = new U(new Array(0), A, 0, _, y);
      }(), tt = !0), t.l_desc = new j(t.dyn_ltree, I), t.d_desc = new j(t.dyn_dtree, B), t.bl_desc = new j(t.bl_tree, P), t.bi_buf = 0, t.bi_valid = 0, q(t);
    }, e._tr_stored_block = et, e._tr_flush_block = function (t, e, n, r) {
      var s,
          u,
          c = 0;
      t.level > 0 ? (t.strm.data_type === d && (t.strm.data_type = function (t) {
        var e,
            n = 4093624447;

        for (e = 0; e <= 31; e++, n >>>= 1) {
          if (1 & n && 0 !== t.dyn_ltree[2 * e]) return o;
        }

        if (0 !== t.dyn_ltree[18] || 0 !== t.dyn_ltree[20] || 0 !== t.dyn_ltree[26]) return a;

        for (e = 32; e < h; e++) {
          if (0 !== t.dyn_ltree[2 * e]) return a;
        }

        return o;
      }(t)), J(t, t.l_desc), J(t, t.d_desc), c = function (t) {
        var e;

        for (X(t, t.dyn_ltree, t.l_desc.max_code), X(t, t.dyn_dtree, t.d_desc.max_code), J(t, t.bl_desc), e = _ - 1; e >= 3 && 0 === t.bl_tree[2 * R[e] + 1]; e--) {
          ;
        }

        return t.opt_len += 3 * (e + 1) + 5 + 5 + 4, e;
      }(t), s = t.opt_len + 3 + 7 >>> 3, (u = t.static_len + 3 + 7 >>> 3) <= s && (s = u)) : s = u = n + 5, n + 4 <= s && -1 !== e ? et(t, e, n, r) : t.strategy === i || u === s ? (F(t, (l << 1) + (r ? 1 : 0), 3), V(t, T, C)) : (F(t, (f << 1) + (r ? 1 : 0), 3), function (t, e, n, r) {
        var i;

        for (F(t, e - 257, 5), F(t, n - 1, 5), F(t, r - 4, 4), i = 0; i < r; i++) {
          F(t, t.bl_tree[2 * R[i] + 1], 3);
        }

        Q(t, t.dyn_ltree, e - 1), Q(t, t.dyn_dtree, n - 1);
      }(t, t.l_desc.max_code + 1, t.d_desc.max_code + 1, c + 1), V(t, t.dyn_ltree, t.dyn_dtree)), q(t), r && Y(t);
    }, e._tr_tally = function (t, e, n) {
      return t.pending_buf[t.d_buf + 2 * t.last_lit] = e >>> 8 & 255, t.pending_buf[t.d_buf + 2 * t.last_lit + 1] = 255 & e, t.pending_buf[t.l_buf + t.last_lit] = 255 & n, t.last_lit++, 0 === e ? t.dyn_ltree[2 * n]++ : (t.matches++, e--, t.dyn_ltree[2 * (L[n] + h + 1)]++, t.dyn_dtree[2 * z(e)]++), t.last_lit === t.lit_bufsize - 1;
    }, e._tr_align = function (t) {
      F(t, l << 1, 3), Z(t, b, T), function (t) {
        16 === t.bi_valid ? (D(t, t.bi_buf), t.bi_buf = 0, t.bi_valid = 0) : t.bi_valid >= 8 && (t.pending_buf[t.pending++] = 255 & t.bi_buf, t.bi_buf >>= 8, t.bi_valid -= 8);
      }(t);
    };
  }, function (t, e, n) {
    "use strict";

    var r = n(18),
        i = n(59),
        o = n(60),
        a = n(129),
        d = n(130),
        s = 0,
        u = 1,
        l = 2,
        f = 4,
        c = 5,
        h = 6,
        $ = 0,
        p = 1,
        _ = 2,
        g = -2,
        m = -3,
        v = -4,
        y = -5,
        b = 8,
        w = 1,
        E = 2,
        k = 3,
        x = 4,
        S = 5,
        A = 6,
        R = 7,
        T = 8,
        C = 9,
        O = 10,
        L = 11,
        M = 12,
        I = 13,
        B = 14,
        P = 15,
        N = 16,
        U = 17,
        j = 18,
        z = 19,
        D = 20,
        F = 21,
        Z = 22,
        G = 23,
        H = 24,
        q = 25,
        Y = 26,
        K = 27,
        W = 28,
        V = 29,
        J = 30,
        X = 31,
        Q = 32,
        tt = 852,
        et = 592,
        nt = 15;

    function rt(t) {
      return (t >>> 24 & 255) + (t >>> 8 & 65280) + ((65280 & t) << 8) + ((255 & t) << 24);
    }

    function it(t) {
      var e;
      return t && t.state ? (e = t.state, t.total_in = t.total_out = e.total = 0, t.msg = "", e.wrap && (t.adler = 1 & e.wrap), e.mode = w, e.last = 0, e.havedict = 0, e.dmax = 32768, e.head = null, e.hold = 0, e.bits = 0, e.lencode = e.lendyn = new r.Buf32(tt), e.distcode = e.distdyn = new r.Buf32(et), e.sane = 1, e.back = -1, $) : g;
    }

    function ot(t) {
      var e;
      return t && t.state ? ((e = t.state).wsize = 0, e.whave = 0, e.wnext = 0, it(t)) : g;
    }

    function at(t, e) {
      var n, r;
      return t && t.state ? (r = t.state, e < 0 ? (n = 0, e = -e) : (n = 1 + (e >> 4), e < 48 && (e &= 15)), e && (e < 8 || e > 15) ? g : (null !== r.window && r.wbits !== e && (r.window = null), r.wrap = n, r.wbits = e, ot(t))) : g;
    }

    function dt(t, e) {
      var n, i;
      return t ? (i = new function () {
        this.mode = 0, this.last = !1, this.wrap = 0, this.havedict = !1, this.flags = 0, this.dmax = 0, this.check = 0, this.total = 0, this.head = null, this.wbits = 0, this.wsize = 0, this.whave = 0, this.wnext = 0, this.window = null, this.hold = 0, this.bits = 0, this.length = 0, this.offset = 0, this.extra = 0, this.lencode = null, this.distcode = null, this.lenbits = 0, this.distbits = 0, this.ncode = 0, this.nlen = 0, this.ndist = 0, this.have = 0, this.next = null, this.lens = new r.Buf16(320), this.work = new r.Buf16(288), this.lendyn = null, this.distdyn = null, this.sane = 0, this.back = 0, this.was = 0;
      }(), t.state = i, i.window = null, (n = at(t, e)) !== $ && (t.state = null), n) : g;
    }

    var st,
        ut,
        lt = !0;

    function ft(t) {
      if (lt) {
        var e;

        for (st = new r.Buf32(512), ut = new r.Buf32(32), e = 0; e < 144;) {
          t.lens[e++] = 8;
        }

        for (; e < 256;) {
          t.lens[e++] = 9;
        }

        for (; e < 280;) {
          t.lens[e++] = 7;
        }

        for (; e < 288;) {
          t.lens[e++] = 8;
        }

        for (d(u, t.lens, 0, 288, st, 0, t.work, {
          bits: 9
        }), e = 0; e < 32;) {
          t.lens[e++] = 5;
        }

        d(l, t.lens, 0, 32, ut, 0, t.work, {
          bits: 5
        }), lt = !1;
      }

      t.lencode = st, t.lenbits = 9, t.distcode = ut, t.distbits = 5;
    }

    function ct(t, e, n, i) {
      var o,
          a = t.state;
      return null === a.window && (a.wsize = 1 << a.wbits, a.wnext = 0, a.whave = 0, a.window = new r.Buf8(a.wsize)), i >= a.wsize ? (r.arraySet(a.window, e, n - a.wsize, a.wsize, 0), a.wnext = 0, a.whave = a.wsize) : ((o = a.wsize - a.wnext) > i && (o = i), r.arraySet(a.window, e, n - i, o, a.wnext), (i -= o) ? (r.arraySet(a.window, e, n - i, i, 0), a.wnext = i, a.whave = a.wsize) : (a.wnext += o, a.wnext === a.wsize && (a.wnext = 0), a.whave < a.wsize && (a.whave += o))), 0;
    }

    e.inflateReset = ot, e.inflateReset2 = at, e.inflateResetKeep = it, e.inflateInit = function (t) {
      return dt(t, nt);
    }, e.inflateInit2 = dt, e.inflate = function (t, e) {
      var n,
          tt,
          et,
          nt,
          it,
          ot,
          at,
          dt,
          st,
          ut,
          lt,
          ht,
          $t,
          pt,
          _t,
          gt,
          mt,
          vt,
          yt,
          bt,
          wt,
          Et,
          kt,
          xt,
          St = 0,
          At = new r.Buf8(4),
          Rt = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15];

      if (!t || !t.state || !t.output || !t.input && 0 !== t.avail_in) return g;
      (n = t.state).mode === M && (n.mode = I), it = t.next_out, et = t.output, at = t.avail_out, nt = t.next_in, tt = t.input, ot = t.avail_in, dt = n.hold, st = n.bits, ut = ot, lt = at, Et = $;

      t: for (;;) {
        switch (n.mode) {
          case w:
            if (0 === n.wrap) {
              n.mode = I;
              break;
            }

            for (; st < 16;) {
              if (0 === ot) break t;
              ot--, dt += tt[nt++] << st, st += 8;
            }

            if (2 & n.wrap && 35615 === dt) {
              n.check = 0, At[0] = 255 & dt, At[1] = dt >>> 8 & 255, n.check = o(n.check, At, 2, 0), dt = 0, st = 0, n.mode = E;
              break;
            }

            if (n.flags = 0, n.head && (n.head.done = !1), !(1 & n.wrap) || (((255 & dt) << 8) + (dt >> 8)) % 31) {
              t.msg = "incorrect header check", n.mode = J;
              break;
            }

            if ((15 & dt) !== b) {
              t.msg = "unknown compression method", n.mode = J;
              break;
            }

            if (st -= 4, wt = 8 + (15 & (dt >>>= 4)), 0 === n.wbits) n.wbits = wt;else if (wt > n.wbits) {
              t.msg = "invalid window size", n.mode = J;
              break;
            }
            n.dmax = 1 << wt, t.adler = n.check = 1, n.mode = 512 & dt ? O : M, dt = 0, st = 0;
            break;

          case E:
            for (; st < 16;) {
              if (0 === ot) break t;
              ot--, dt += tt[nt++] << st, st += 8;
            }

            if (n.flags = dt, (255 & n.flags) !== b) {
              t.msg = "unknown compression method", n.mode = J;
              break;
            }

            if (57344 & n.flags) {
              t.msg = "unknown header flags set", n.mode = J;
              break;
            }

            n.head && (n.head.text = dt >> 8 & 1), 512 & n.flags && (At[0] = 255 & dt, At[1] = dt >>> 8 & 255, n.check = o(n.check, At, 2, 0)), dt = 0, st = 0, n.mode = k;

          case k:
            for (; st < 32;) {
              if (0 === ot) break t;
              ot--, dt += tt[nt++] << st, st += 8;
            }

            n.head && (n.head.time = dt), 512 & n.flags && (At[0] = 255 & dt, At[1] = dt >>> 8 & 255, At[2] = dt >>> 16 & 255, At[3] = dt >>> 24 & 255, n.check = o(n.check, At, 4, 0)), dt = 0, st = 0, n.mode = x;

          case x:
            for (; st < 16;) {
              if (0 === ot) break t;
              ot--, dt += tt[nt++] << st, st += 8;
            }

            n.head && (n.head.xflags = 255 & dt, n.head.os = dt >> 8), 512 & n.flags && (At[0] = 255 & dt, At[1] = dt >>> 8 & 255, n.check = o(n.check, At, 2, 0)), dt = 0, st = 0, n.mode = S;

          case S:
            if (1024 & n.flags) {
              for (; st < 16;) {
                if (0 === ot) break t;
                ot--, dt += tt[nt++] << st, st += 8;
              }

              n.length = dt, n.head && (n.head.extra_len = dt), 512 & n.flags && (At[0] = 255 & dt, At[1] = dt >>> 8 & 255, n.check = o(n.check, At, 2, 0)), dt = 0, st = 0;
            } else n.head && (n.head.extra = null);

            n.mode = A;

          case A:
            if (1024 & n.flags && ((ht = n.length) > ot && (ht = ot), ht && (n.head && (wt = n.head.extra_len - n.length, n.head.extra || (n.head.extra = new Array(n.head.extra_len)), r.arraySet(n.head.extra, tt, nt, ht, wt)), 512 & n.flags && (n.check = o(n.check, tt, ht, nt)), ot -= ht, nt += ht, n.length -= ht), n.length)) break t;
            n.length = 0, n.mode = R;

          case R:
            if (2048 & n.flags) {
              if (0 === ot) break t;
              ht = 0;

              do {
                wt = tt[nt + ht++], n.head && wt && n.length < 65536 && (n.head.name += String.fromCharCode(wt));
              } while (wt && ht < ot);

              if (512 & n.flags && (n.check = o(n.check, tt, ht, nt)), ot -= ht, nt += ht, wt) break t;
            } else n.head && (n.head.name = null);

            n.length = 0, n.mode = T;

          case T:
            if (4096 & n.flags) {
              if (0 === ot) break t;
              ht = 0;

              do {
                wt = tt[nt + ht++], n.head && wt && n.length < 65536 && (n.head.comment += String.fromCharCode(wt));
              } while (wt && ht < ot);

              if (512 & n.flags && (n.check = o(n.check, tt, ht, nt)), ot -= ht, nt += ht, wt) break t;
            } else n.head && (n.head.comment = null);

            n.mode = C;

          case C:
            if (512 & n.flags) {
              for (; st < 16;) {
                if (0 === ot) break t;
                ot--, dt += tt[nt++] << st, st += 8;
              }

              if (dt !== (65535 & n.check)) {
                t.msg = "header crc mismatch", n.mode = J;
                break;
              }

              dt = 0, st = 0;
            }

            n.head && (n.head.hcrc = n.flags >> 9 & 1, n.head.done = !0), t.adler = n.check = 0, n.mode = M;
            break;

          case O:
            for (; st < 32;) {
              if (0 === ot) break t;
              ot--, dt += tt[nt++] << st, st += 8;
            }

            t.adler = n.check = rt(dt), dt = 0, st = 0, n.mode = L;

          case L:
            if (0 === n.havedict) return t.next_out = it, t.avail_out = at, t.next_in = nt, t.avail_in = ot, n.hold = dt, n.bits = st, _;
            t.adler = n.check = 1, n.mode = M;

          case M:
            if (e === c || e === h) break t;

          case I:
            if (n.last) {
              dt >>>= 7 & st, st -= 7 & st, n.mode = K;
              break;
            }

            for (; st < 3;) {
              if (0 === ot) break t;
              ot--, dt += tt[nt++] << st, st += 8;
            }

            switch (n.last = 1 & dt, st -= 1, 3 & (dt >>>= 1)) {
              case 0:
                n.mode = B;
                break;

              case 1:
                if (ft(n), n.mode = D, e === h) {
                  dt >>>= 2, st -= 2;
                  break t;
                }

                break;

              case 2:
                n.mode = U;
                break;

              case 3:
                t.msg = "invalid block type", n.mode = J;
            }

            dt >>>= 2, st -= 2;
            break;

          case B:
            for (dt >>>= 7 & st, st -= 7 & st; st < 32;) {
              if (0 === ot) break t;
              ot--, dt += tt[nt++] << st, st += 8;
            }

            if ((65535 & dt) != (dt >>> 16 ^ 65535)) {
              t.msg = "invalid stored block lengths", n.mode = J;
              break;
            }

            if (n.length = 65535 & dt, dt = 0, st = 0, n.mode = P, e === h) break t;

          case P:
            n.mode = N;

          case N:
            if (ht = n.length) {
              if (ht > ot && (ht = ot), ht > at && (ht = at), 0 === ht) break t;
              r.arraySet(et, tt, nt, ht, it), ot -= ht, nt += ht, at -= ht, it += ht, n.length -= ht;
              break;
            }

            n.mode = M;
            break;

          case U:
            for (; st < 14;) {
              if (0 === ot) break t;
              ot--, dt += tt[nt++] << st, st += 8;
            }

            if (n.nlen = 257 + (31 & dt), dt >>>= 5, st -= 5, n.ndist = 1 + (31 & dt), dt >>>= 5, st -= 5, n.ncode = 4 + (15 & dt), dt >>>= 4, st -= 4, n.nlen > 286 || n.ndist > 30) {
              t.msg = "too many length or distance symbols", n.mode = J;
              break;
            }

            n.have = 0, n.mode = j;

          case j:
            for (; n.have < n.ncode;) {
              for (; st < 3;) {
                if (0 === ot) break t;
                ot--, dt += tt[nt++] << st, st += 8;
              }

              n.lens[Rt[n.have++]] = 7 & dt, dt >>>= 3, st -= 3;
            }

            for (; n.have < 19;) {
              n.lens[Rt[n.have++]] = 0;
            }

            if (n.lencode = n.lendyn, n.lenbits = 7, kt = {
              bits: n.lenbits
            }, Et = d(s, n.lens, 0, 19, n.lencode, 0, n.work, kt), n.lenbits = kt.bits, Et) {
              t.msg = "invalid code lengths set", n.mode = J;
              break;
            }

            n.have = 0, n.mode = z;

          case z:
            for (; n.have < n.nlen + n.ndist;) {
              for (; gt = (St = n.lencode[dt & (1 << n.lenbits) - 1]) >>> 16 & 255, mt = 65535 & St, !((_t = St >>> 24) <= st);) {
                if (0 === ot) break t;
                ot--, dt += tt[nt++] << st, st += 8;
              }

              if (mt < 16) dt >>>= _t, st -= _t, n.lens[n.have++] = mt;else {
                if (16 === mt) {
                  for (xt = _t + 2; st < xt;) {
                    if (0 === ot) break t;
                    ot--, dt += tt[nt++] << st, st += 8;
                  }

                  if (dt >>>= _t, st -= _t, 0 === n.have) {
                    t.msg = "invalid bit length repeat", n.mode = J;
                    break;
                  }

                  wt = n.lens[n.have - 1], ht = 3 + (3 & dt), dt >>>= 2, st -= 2;
                } else if (17 === mt) {
                  for (xt = _t + 3; st < xt;) {
                    if (0 === ot) break t;
                    ot--, dt += tt[nt++] << st, st += 8;
                  }

                  st -= _t, wt = 0, ht = 3 + (7 & (dt >>>= _t)), dt >>>= 3, st -= 3;
                } else {
                  for (xt = _t + 7; st < xt;) {
                    if (0 === ot) break t;
                    ot--, dt += tt[nt++] << st, st += 8;
                  }

                  st -= _t, wt = 0, ht = 11 + (127 & (dt >>>= _t)), dt >>>= 7, st -= 7;
                }

                if (n.have + ht > n.nlen + n.ndist) {
                  t.msg = "invalid bit length repeat", n.mode = J;
                  break;
                }

                for (; ht--;) {
                  n.lens[n.have++] = wt;
                }
              }
            }

            if (n.mode === J) break;

            if (0 === n.lens[256]) {
              t.msg = "invalid code -- missing end-of-block", n.mode = J;
              break;
            }

            if (n.lenbits = 9, kt = {
              bits: n.lenbits
            }, Et = d(u, n.lens, 0, n.nlen, n.lencode, 0, n.work, kt), n.lenbits = kt.bits, Et) {
              t.msg = "invalid literal/lengths set", n.mode = J;
              break;
            }

            if (n.distbits = 6, n.distcode = n.distdyn, kt = {
              bits: n.distbits
            }, Et = d(l, n.lens, n.nlen, n.ndist, n.distcode, 0, n.work, kt), n.distbits = kt.bits, Et) {
              t.msg = "invalid distances set", n.mode = J;
              break;
            }

            if (n.mode = D, e === h) break t;

          case D:
            n.mode = F;

          case F:
            if (ot >= 6 && at >= 258) {
              t.next_out = it, t.avail_out = at, t.next_in = nt, t.avail_in = ot, n.hold = dt, n.bits = st, a(t, lt), it = t.next_out, et = t.output, at = t.avail_out, nt = t.next_in, tt = t.input, ot = t.avail_in, dt = n.hold, st = n.bits, n.mode === M && (n.back = -1);
              break;
            }

            for (n.back = 0; gt = (St = n.lencode[dt & (1 << n.lenbits) - 1]) >>> 16 & 255, mt = 65535 & St, !((_t = St >>> 24) <= st);) {
              if (0 === ot) break t;
              ot--, dt += tt[nt++] << st, st += 8;
            }

            if (gt && 0 == (240 & gt)) {
              for (vt = _t, yt = gt, bt = mt; gt = (St = n.lencode[bt + ((dt & (1 << vt + yt) - 1) >> vt)]) >>> 16 & 255, mt = 65535 & St, !(vt + (_t = St >>> 24) <= st);) {
                if (0 === ot) break t;
                ot--, dt += tt[nt++] << st, st += 8;
              }

              dt >>>= vt, st -= vt, n.back += vt;
            }

            if (dt >>>= _t, st -= _t, n.back += _t, n.length = mt, 0 === gt) {
              n.mode = Y;
              break;
            }

            if (32 & gt) {
              n.back = -1, n.mode = M;
              break;
            }

            if (64 & gt) {
              t.msg = "invalid literal/length code", n.mode = J;
              break;
            }

            n.extra = 15 & gt, n.mode = Z;

          case Z:
            if (n.extra) {
              for (xt = n.extra; st < xt;) {
                if (0 === ot) break t;
                ot--, dt += tt[nt++] << st, st += 8;
              }

              n.length += dt & (1 << n.extra) - 1, dt >>>= n.extra, st -= n.extra, n.back += n.extra;
            }

            n.was = n.length, n.mode = G;

          case G:
            for (; gt = (St = n.distcode[dt & (1 << n.distbits) - 1]) >>> 16 & 255, mt = 65535 & St, !((_t = St >>> 24) <= st);) {
              if (0 === ot) break t;
              ot--, dt += tt[nt++] << st, st += 8;
            }

            if (0 == (240 & gt)) {
              for (vt = _t, yt = gt, bt = mt; gt = (St = n.distcode[bt + ((dt & (1 << vt + yt) - 1) >> vt)]) >>> 16 & 255, mt = 65535 & St, !(vt + (_t = St >>> 24) <= st);) {
                if (0 === ot) break t;
                ot--, dt += tt[nt++] << st, st += 8;
              }

              dt >>>= vt, st -= vt, n.back += vt;
            }

            if (dt >>>= _t, st -= _t, n.back += _t, 64 & gt) {
              t.msg = "invalid distance code", n.mode = J;
              break;
            }

            n.offset = mt, n.extra = 15 & gt, n.mode = H;

          case H:
            if (n.extra) {
              for (xt = n.extra; st < xt;) {
                if (0 === ot) break t;
                ot--, dt += tt[nt++] << st, st += 8;
              }

              n.offset += dt & (1 << n.extra) - 1, dt >>>= n.extra, st -= n.extra, n.back += n.extra;
            }

            if (n.offset > n.dmax) {
              t.msg = "invalid distance too far back", n.mode = J;
              break;
            }

            n.mode = q;

          case q:
            if (0 === at) break t;

            if (ht = lt - at, n.offset > ht) {
              if ((ht = n.offset - ht) > n.whave && n.sane) {
                t.msg = "invalid distance too far back", n.mode = J;
                break;
              }

              ht > n.wnext ? (ht -= n.wnext, $t = n.wsize - ht) : $t = n.wnext - ht, ht > n.length && (ht = n.length), pt = n.window;
            } else pt = et, $t = it - n.offset, ht = n.length;

            ht > at && (ht = at), at -= ht, n.length -= ht;

            do {
              et[it++] = pt[$t++];
            } while (--ht);

            0 === n.length && (n.mode = F);
            break;

          case Y:
            if (0 === at) break t;
            et[it++] = n.length, at--, n.mode = F;
            break;

          case K:
            if (n.wrap) {
              for (; st < 32;) {
                if (0 === ot) break t;
                ot--, dt |= tt[nt++] << st, st += 8;
              }

              if (lt -= at, t.total_out += lt, n.total += lt, lt && (t.adler = n.check = n.flags ? o(n.check, et, lt, it - lt) : i(n.check, et, lt, it - lt)), lt = at, (n.flags ? dt : rt(dt)) !== n.check) {
                t.msg = "incorrect data check", n.mode = J;
                break;
              }

              dt = 0, st = 0;
            }

            n.mode = W;

          case W:
            if (n.wrap && n.flags) {
              for (; st < 32;) {
                if (0 === ot) break t;
                ot--, dt += tt[nt++] << st, st += 8;
              }

              if (dt !== (4294967295 & n.total)) {
                t.msg = "incorrect length check", n.mode = J;
                break;
              }

              dt = 0, st = 0;
            }

            n.mode = V;

          case V:
            Et = p;
            break t;

          case J:
            Et = m;
            break t;

          case X:
            return v;

          case Q:
          default:
            return g;
        }
      }

      return t.next_out = it, t.avail_out = at, t.next_in = nt, t.avail_in = ot, n.hold = dt, n.bits = st, (n.wsize || lt !== t.avail_out && n.mode < J && (n.mode < K || e !== f)) && ct(t, t.output, t.next_out, lt - t.avail_out) ? (n.mode = X, v) : (ut -= t.avail_in, lt -= t.avail_out, t.total_in += ut, t.total_out += lt, n.total += lt, n.wrap && lt && (t.adler = n.check = n.flags ? o(n.check, et, lt, t.next_out - lt) : i(n.check, et, lt, t.next_out - lt)), t.data_type = n.bits + (n.last ? 64 : 0) + (n.mode === M ? 128 : 0) + (n.mode === D || n.mode === P ? 256 : 0), (0 === ut && 0 === lt || e === f) && Et === $ && (Et = y), Et);
    }, e.inflateEnd = function (t) {
      if (!t || !t.state) return g;
      var e = t.state;
      return e.window && (e.window = null), t.state = null, $;
    }, e.inflateGetHeader = function (t, e) {
      var n;
      return t && t.state ? 0 == (2 & (n = t.state).wrap) ? g : (n.head = e, e.done = !1, $) : g;
    }, e.inflateSetDictionary = function (t, e) {
      var n,
          r = e.length;
      return t && t.state ? 0 !== (n = t.state).wrap && n.mode !== L ? g : n.mode === L && i(1, e, r, 0) !== n.check ? m : ct(t, e, r, r) ? (n.mode = X, v) : (n.havedict = 1, $) : g;
    }, e.inflateInfo = "pako inflate (from Nodeca project)";
  }, function (t, e, n) {
    "use strict";

    t.exports = function (t, e) {
      var n, r, i, o, a, d, s, u, l, f, c, h, $, p, _, g, m, v, y, b, w, E, k, x, S;

      n = t.state, r = t.next_in, x = t.input, i = r + (t.avail_in - 5), o = t.next_out, S = t.output, a = o - (e - t.avail_out), d = o + (t.avail_out - 257), s = n.dmax, u = n.wsize, l = n.whave, f = n.wnext, c = n.window, h = n.hold, $ = n.bits, p = n.lencode, _ = n.distcode, g = (1 << n.lenbits) - 1, m = (1 << n.distbits) - 1;

      t: do {
        $ < 15 && (h += x[r++] << $, $ += 8, h += x[r++] << $, $ += 8), v = p[h & g];

        e: for (;;) {
          if (h >>>= y = v >>> 24, $ -= y, 0 === (y = v >>> 16 & 255)) S[o++] = 65535 & v;else {
            if (!(16 & y)) {
              if (0 == (64 & y)) {
                v = p[(65535 & v) + (h & (1 << y) - 1)];
                continue e;
              }

              if (32 & y) {
                n.mode = 12;
                break t;
              }

              t.msg = "invalid literal/length code", n.mode = 30;
              break t;
            }

            b = 65535 & v, (y &= 15) && ($ < y && (h += x[r++] << $, $ += 8), b += h & (1 << y) - 1, h >>>= y, $ -= y), $ < 15 && (h += x[r++] << $, $ += 8, h += x[r++] << $, $ += 8), v = _[h & m];

            n: for (;;) {
              if (h >>>= y = v >>> 24, $ -= y, !(16 & (y = v >>> 16 & 255))) {
                if (0 == (64 & y)) {
                  v = _[(65535 & v) + (h & (1 << y) - 1)];
                  continue n;
                }

                t.msg = "invalid distance code", n.mode = 30;
                break t;
              }

              if (w = 65535 & v, $ < (y &= 15) && (h += x[r++] << $, ($ += 8) < y && (h += x[r++] << $, $ += 8)), (w += h & (1 << y) - 1) > s) {
                t.msg = "invalid distance too far back", n.mode = 30;
                break t;
              }

              if (h >>>= y, $ -= y, w > (y = o - a)) {
                if ((y = w - y) > l && n.sane) {
                  t.msg = "invalid distance too far back", n.mode = 30;
                  break t;
                }

                if (E = 0, k = c, 0 === f) {
                  if (E += u - y, y < b) {
                    b -= y;

                    do {
                      S[o++] = c[E++];
                    } while (--y);

                    E = o - w, k = S;
                  }
                } else if (f < y) {
                  if (E += u + f - y, (y -= f) < b) {
                    b -= y;

                    do {
                      S[o++] = c[E++];
                    } while (--y);

                    if (E = 0, f < b) {
                      b -= y = f;

                      do {
                        S[o++] = c[E++];
                      } while (--y);

                      E = o - w, k = S;
                    }
                  }
                } else if (E += f - y, y < b) {
                  b -= y;

                  do {
                    S[o++] = c[E++];
                  } while (--y);

                  E = o - w, k = S;
                }

                for (; b > 2;) {
                  S[o++] = k[E++], S[o++] = k[E++], S[o++] = k[E++], b -= 3;
                }

                b && (S[o++] = k[E++], b > 1 && (S[o++] = k[E++]));
              } else {
                E = o - w;

                do {
                  S[o++] = S[E++], S[o++] = S[E++], S[o++] = S[E++], b -= 3;
                } while (b > 2);

                b && (S[o++] = S[E++], b > 1 && (S[o++] = S[E++]));
              }

              break;
            }
          }
          break;
        }
      } while (r < i && o < d);

      r -= b = $ >> 3, h &= (1 << ($ -= b << 3)) - 1, t.next_in = r, t.next_out = o, t.avail_in = r < i ? i - r + 5 : 5 - (r - i), t.avail_out = o < d ? d - o + 257 : 257 - (o - d), n.hold = h, n.bits = $;
    };
  }, function (t, e, n) {
    "use strict";

    var r = n(18),
        i = [3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51, 59, 67, 83, 99, 115, 131, 163, 195, 227, 258, 0, 0],
        o = [16, 16, 16, 16, 16, 16, 16, 16, 17, 17, 17, 17, 18, 18, 18, 18, 19, 19, 19, 19, 20, 20, 20, 20, 21, 21, 21, 21, 16, 72, 78],
        a = [1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289, 16385, 24577, 0, 0],
        d = [16, 16, 16, 16, 17, 17, 18, 18, 19, 19, 20, 20, 21, 21, 22, 22, 23, 23, 24, 24, 25, 25, 26, 26, 27, 27, 28, 28, 29, 29, 64, 64];

    t.exports = function (t, e, n, s, u, l, f, c) {
      var h,
          $,
          p,
          _,
          g,
          m,
          v,
          y,
          b,
          w = c.bits,
          E = 0,
          k = 0,
          x = 0,
          S = 0,
          A = 0,
          R = 0,
          T = 0,
          C = 0,
          O = 0,
          L = 0,
          M = null,
          I = 0,
          B = new r.Buf16(16),
          P = new r.Buf16(16),
          N = null,
          U = 0;

      for (E = 0; E <= 15; E++) {
        B[E] = 0;
      }

      for (k = 0; k < s; k++) {
        B[e[n + k]]++;
      }

      for (A = w, S = 15; S >= 1 && 0 === B[S]; S--) {
        ;
      }

      if (A > S && (A = S), 0 === S) return u[l++] = 20971520, u[l++] = 20971520, c.bits = 1, 0;

      for (x = 1; x < S && 0 === B[x]; x++) {
        ;
      }

      for (A < x && (A = x), C = 1, E = 1; E <= 15; E++) {
        if (C <<= 1, (C -= B[E]) < 0) return -1;
      }

      if (C > 0 && (0 === t || 1 !== S)) return -1;

      for (P[1] = 0, E = 1; E < 15; E++) {
        P[E + 1] = P[E] + B[E];
      }

      for (k = 0; k < s; k++) {
        0 !== e[n + k] && (f[P[e[n + k]]++] = k);
      }

      if (0 === t ? (M = N = f, m = 19) : 1 === t ? (M = i, I -= 257, N = o, U -= 257, m = 256) : (M = a, N = d, m = -1), L = 0, k = 0, E = x, g = l, R = A, T = 0, p = -1, _ = (O = 1 << A) - 1, 1 === t && O > 852 || 2 === t && O > 592) return 1;

      for (;;) {
        0, v = E - T, f[k] < m ? (y = 0, b = f[k]) : f[k] > m ? (y = N[U + f[k]], b = M[I + f[k]]) : (y = 96, b = 0), h = 1 << E - T, x = $ = 1 << R;

        do {
          u[g + (L >> T) + ($ -= h)] = v << 24 | y << 16 | b | 0;
        } while (0 !== $);

        for (h = 1 << E - 1; L & h;) {
          h >>= 1;
        }

        if (0 !== h ? (L &= h - 1, L += h) : L = 0, k++, 0 == --B[E]) {
          if (E === S) break;
          E = e[n + f[k]];
        }

        if (E > A && (L & _) !== p) {
          for (0 === T && (T = A), g += x, C = 1 << (R = E - T); R + T < S && !((C -= B[R + T]) <= 0);) {
            R++, C <<= 1;
          }

          if (O += 1 << R, 1 === t && O > 852 || 2 === t && O > 592) return 1;
          u[p = L & _] = A << 24 | R << 16 | g - l | 0;
        }
      }

      return 0 !== L && (u[g + L] = E - T << 24 | 64 << 16 | 0), c.bits = A, 0;
    };
  }, function (t, e, n) {
    "use strict";

    t.exports = {
      Z_NO_FLUSH: 0,
      Z_PARTIAL_FLUSH: 1,
      Z_SYNC_FLUSH: 2,
      Z_FULL_FLUSH: 3,
      Z_FINISH: 4,
      Z_BLOCK: 5,
      Z_TREES: 6,
      Z_OK: 0,
      Z_STREAM_END: 1,
      Z_NEED_DICT: 2,
      Z_ERRNO: -1,
      Z_STREAM_ERROR: -2,
      Z_DATA_ERROR: -3,
      Z_BUF_ERROR: -5,
      Z_NO_COMPRESSION: 0,
      Z_BEST_SPEED: 1,
      Z_BEST_COMPRESSION: 9,
      Z_DEFAULT_COMPRESSION: -1,
      Z_FILTERED: 1,
      Z_HUFFMAN_ONLY: 2,
      Z_RLE: 3,
      Z_FIXED: 4,
      Z_DEFAULT_STRATEGY: 0,
      Z_BINARY: 0,
      Z_TEXT: 1,
      Z_UNKNOWN: 2,
      Z_DEFLATED: 8
    };
  }, function (t, e) {
    t.exports = function (t) {
      return t && "object" == _typeof(t) && "function" == typeof t.copy && "function" == typeof t.fill && "function" == typeof t.readUInt8;
    };
  }, function (t, e, n) {
    "use strict";

    (function (e) {
      function r(t, e) {
        if (t === e) return 0;

        for (var n = t.length, r = e.length, i = 0, o = Math.min(n, r); i < o; ++i) {
          if (t[i] !== e[i]) {
            n = t[i], r = e[i];
            break;
          }
        }

        return n < r ? -1 : r < n ? 1 : 0;
      }

      function i(t) {
        return e.Buffer && "function" == typeof e.Buffer.isBuffer ? e.Buffer.isBuffer(t) : !(null == t || !t._isBuffer);
      }

      var o = n(31),
          a = Object.prototype.hasOwnProperty,
          d = Array.prototype.slice,
          s = "foo" === function () {}.name;

      function u(t) {
        return Object.prototype.toString.call(t);
      }

      function l(t) {
        return !i(t) && "function" == typeof e.ArrayBuffer && ("function" == typeof ArrayBuffer.isView ? ArrayBuffer.isView(t) : !!t && (t instanceof DataView || !!(t.buffer && t.buffer instanceof ArrayBuffer)));
      }

      var f = t.exports = g,
          c = /\s*function\s+([^\(\s]*)\s*/;

      function h(t) {
        if (o.isFunction(t)) {
          if (s) return t.name;
          var e = t.toString().match(c);
          return e && e[1];
        }
      }

      function $(t, e) {
        return "string" == typeof t ? t.length < e ? t : t.slice(0, e) : t;
      }

      function p(t) {
        if (s || !o.isFunction(t)) return o.inspect(t);
        var e = h(t);
        return "[Function" + (e ? ": " + e : "") + "]";
      }

      function _(t, e, n, r, i) {
        throw new f.AssertionError({
          message: n,
          actual: t,
          expected: e,
          operator: r,
          stackStartFunction: i
        });
      }

      function g(t, e) {
        t || _(t, !0, e, "==", f.ok);
      }

      function m(t, e, n, a) {
        if (t === e) return !0;
        if (i(t) && i(e)) return 0 === r(t, e);
        if (o.isDate(t) && o.isDate(e)) return t.getTime() === e.getTime();
        if (o.isRegExp(t) && o.isRegExp(e)) return t.source === e.source && t.global === e.global && t.multiline === e.multiline && t.lastIndex === e.lastIndex && t.ignoreCase === e.ignoreCase;

        if (null !== t && "object" == _typeof(t) || null !== e && "object" == _typeof(e)) {
          if (l(t) && l(e) && u(t) === u(e) && !(t instanceof Float32Array || t instanceof Float64Array)) return 0 === r(new Uint8Array(t.buffer), new Uint8Array(e.buffer));
          if (i(t) !== i(e)) return !1;
          var s = (a = a || {
            actual: [],
            expected: []
          }).actual.indexOf(t);
          return -1 !== s && s === a.expected.indexOf(e) || (a.actual.push(t), a.expected.push(e), function (t, e, n, r) {
            if (null === t || void 0 === t || null === e || void 0 === e) return !1;
            if (o.isPrimitive(t) || o.isPrimitive(e)) return t === e;
            if (n && Object.getPrototypeOf(t) !== Object.getPrototypeOf(e)) return !1;
            var i = v(t),
                a = v(e);
            if (i && !a || !i && a) return !1;
            if (i) return t = d.call(t), e = d.call(e), m(t, e, n);
            var s,
                u,
                l = w(t),
                f = w(e);
            if (l.length !== f.length) return !1;

            for (l.sort(), f.sort(), u = l.length - 1; u >= 0; u--) {
              if (l[u] !== f[u]) return !1;
            }

            for (u = l.length - 1; u >= 0; u--) {
              if (s = l[u], !m(t[s], e[s], n, r)) return !1;
            }

            return !0;
          }(t, e, n, a));
        }

        return n ? t === e : t == e;
      }

      function v(t) {
        return "[object Arguments]" == Object.prototype.toString.call(t);
      }

      function y(t, e) {
        if (!t || !e) return !1;
        if ("[object RegExp]" == Object.prototype.toString.call(e)) return e.test(t);

        try {
          if (t instanceof e) return !0;
        } catch (t) {}

        return !Error.isPrototypeOf(e) && !0 === e.call({}, t);
      }

      function b(t, e, n, r) {
        var i;
        if ("function" != typeof e) throw new TypeError('"block" argument must be a function');
        "string" == typeof n && (r = n, n = null), i = function (t) {
          var e;

          try {
            t();
          } catch (t) {
            e = t;
          }

          return e;
        }(e), r = (n && n.name ? " (" + n.name + ")." : ".") + (r ? " " + r : "."), t && !i && _(i, n, "Missing expected exception" + r);
        var a = "string" == typeof r,
            d = !t && o.isError(i),
            s = !t && i && !n;
        if ((d && a && y(i, n) || s) && _(i, n, "Got unwanted exception" + r), t && i && n && !y(i, n) || !t && i) throw i;
      }

      f.AssertionError = function (t) {
        this.name = "AssertionError", this.actual = t.actual, this.expected = t.expected, this.operator = t.operator, t.message ? (this.message = t.message, this.generatedMessage = !1) : (this.message = function (t) {
          return $(p(t.actual), 128) + " " + t.operator + " " + $(p(t.expected), 128);
        }(this), this.generatedMessage = !0);
        var e = t.stackStartFunction || _;
        if (Error.captureStackTrace) Error.captureStackTrace(this, e);else {
          var n = new Error();

          if (n.stack) {
            var r = n.stack,
                i = h(e),
                o = r.indexOf("\n" + i);

            if (o >= 0) {
              var a = r.indexOf("\n", o + 1);
              r = r.substring(a + 1);
            }

            this.stack = r;
          }
        }
      }, o.inherits(f.AssertionError, Error), f.fail = _, f.ok = g, f.equal = function (t, e, n) {
        t != e && _(t, e, n, "==", f.equal);
      }, f.notEqual = function (t, e, n) {
        t == e && _(t, e, n, "!=", f.notEqual);
      }, f.deepEqual = function (t, e, n) {
        m(t, e, !1) || _(t, e, n, "deepEqual", f.deepEqual);
      }, f.deepStrictEqual = function (t, e, n) {
        m(t, e, !0) || _(t, e, n, "deepStrictEqual", f.deepStrictEqual);
      }, f.notDeepEqual = function (t, e, n) {
        m(t, e, !1) && _(t, e, n, "notDeepEqual", f.notDeepEqual);
      }, f.notDeepStrictEqual = function t(e, n, r) {
        m(e, n, !0) && _(e, n, r, "notDeepStrictEqual", t);
      }, f.strictEqual = function (t, e, n) {
        t !== e && _(t, e, n, "===", f.strictEqual);
      }, f.notStrictEqual = function (t, e, n) {
        t === e && _(t, e, n, "!==", f.notStrictEqual);
      }, f.throws = function (t, e, n) {
        b(!0, t, e, n);
      }, f.doesNotThrow = function (t, e, n) {
        b(!1, t, e, n);
      }, f.ifError = function (t) {
        if (t) throw t;
      };

      var w = Object.keys || function (t) {
        var e = [];

        for (var n in t) {
          a.call(t, n) && e.push(n);
        }

        return e;
      };
    }).call(this, n(0));
  }, function (t, e, n) {
    t.exports = n(135);
  }, function (t, e, n) {
    var r = n(136)("jsonp");

    t.exports = function (t, e, n) {
      "function" == typeof e && (n = e, e = {});
      e || (e = {});
      var a,
          d,
          s = e.prefix || "__jp",
          u = e.param || "callback",
          l = null != e.timeout ? e.timeout : 6e4,
          f = encodeURIComponent,
          c = document.getElementsByTagName("script")[0] || document.head,
          h = s + i++;
      l && (d = setTimeout(function () {
        $(), n && n(new Error("Timeout"));
      }, l));

      function $() {
        a.parentNode.removeChild(a), window[h] = o;
      }

      window[h] = function (t) {
        r("jsonp got", t), d && clearTimeout(d), $(), n && n(null, t);
      }, t = (t += (~t.indexOf("?") ? "&" : "?") + u + "=" + f(h)).replace("?&", "?"), r('jsonp req "%s"', t), (a = document.createElement("script")).src = t, c.parentNode.insertBefore(a, c);
    };

    var i = 0;

    function o() {}
  }, function (t, e, n) {
    (function (r) {
      function i() {
        var t;

        try {
          t = e.storage.debug;
        } catch (t) {}

        return !t && void 0 !== r && "env" in r && (t = r.env.DEBUG), t;
      }

      (e = t.exports = n(137)).log = function () {
        return "object" == (typeof console === "undefined" ? "undefined" : _typeof(console)) && console.log && Function.prototype.apply.call(console.log, console, arguments);
      }, e.formatArgs = function (t) {
        var n = this.useColors;
        if (t[0] = (n ? "%c" : "") + this.namespace + (n ? " %c" : " ") + t[0] + (n ? "%c " : " ") + "+" + e.humanize(this.diff), !n) return;
        var r = "color: " + this.color;
        t.splice(1, 0, r, "color: inherit");
        var i = 0,
            o = 0;
        t[0].replace(/%[a-zA-Z%]/g, function (t) {
          "%%" !== t && "%c" === t && (o = ++i);
        }), t.splice(o, 0, r);
      }, e.save = function (t) {
        try {
          null == t ? e.storage.removeItem("debug") : e.storage.debug = t;
        } catch (t) {}
      }, e.load = i, e.useColors = function () {
        if ("undefined" != typeof window && window.process && "renderer" === window.process.type) return !0;
        return "undefined" != typeof document && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || "undefined" != typeof window && window.console && (window.console.firebug || window.console.exception && window.console.table) || "undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31 || "undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/);
      }, e.storage = "undefined" != typeof chrome && void 0 !== chrome.storage ? chrome.storage.local : function () {
        try {
          return window.localStorage;
        } catch (t) {}
      }(), e.colors = ["lightseagreen", "forestgreen", "goldenrod", "dodgerblue", "darkorchid", "crimson"], e.formatters.j = function (t) {
        try {
          return JSON.stringify(t);
        } catch (t) {
          return "[UnexpectedJSONParseError]: " + t.message;
        }
      }, e.enable(i());
    }).call(this, n(2));
  }, function (t, e, n) {
    var r;

    function i(t) {
      function n() {
        if (n.enabled) {
          var t = n,
              i = +new Date(),
              o = i - (r || i);
          t.diff = o, t.prev = r, t.curr = i, r = i;

          for (var a = new Array(arguments.length), d = 0; d < a.length; d++) {
            a[d] = arguments[d];
          }

          a[0] = e.coerce(a[0]), "string" != typeof a[0] && a.unshift("%O");
          var s = 0;
          a[0] = a[0].replace(/%([a-zA-Z%])/g, function (n, r) {
            if ("%%" === n) return n;
            s++;
            var i = e.formatters[r];

            if ("function" == typeof i) {
              var o = a[s];
              n = i.call(t, o), a.splice(s, 1), s--;
            }

            return n;
          }), e.formatArgs.call(t, a), (n.log || e.log || console.log.bind(console)).apply(t, a);
        }
      }

      return n.namespace = t, n.enabled = e.enabled(t), n.useColors = e.useColors(), n.color = function (t) {
        var n,
            r = 0;

        for (n in t) {
          r = (r << 5) - r + t.charCodeAt(n), r |= 0;
        }

        return e.colors[Math.abs(r) % e.colors.length];
      }(t), "function" == typeof e.init && e.init(n), n;
    }

    (e = t.exports = i.debug = i.default = i).coerce = function (t) {
      return t instanceof Error ? t.stack || t.message : t;
    }, e.disable = function () {
      e.enable("");
    }, e.enable = function (t) {
      e.save(t), e.names = [], e.skips = [];

      for (var n = ("string" == typeof t ? t : "").split(/[\s,]+/), r = n.length, i = 0; i < r; i++) {
        n[i] && ("-" === (t = n[i].replace(/\*/g, ".*?"))[0] ? e.skips.push(new RegExp("^" + t.substr(1) + "$")) : e.names.push(new RegExp("^" + t + "$")));
      }
    }, e.enabled = function (t) {
      var n, r;

      for (n = 0, r = e.skips.length; n < r; n++) {
        if (e.skips[n].test(t)) return !1;
      }

      for (n = 0, r = e.names.length; n < r; n++) {
        if (e.names[n].test(t)) return !0;
      }

      return !1;
    }, e.humanize = n(138), e.names = [], e.skips = [], e.formatters = {};
  }, function (t, e) {
    var n = 1e3,
        r = 60 * n,
        i = 60 * r,
        o = 24 * i,
        a = 365.25 * o;

    function d(t, e, n) {
      if (!(t < e)) return t < 1.5 * e ? Math.floor(t / e) + " " + n : Math.ceil(t / e) + " " + n + "s";
    }

    t.exports = function (t, e) {
      e = e || {};

      var s = _typeof(t);

      if ("string" === s && t.length > 0) return function (t) {
        if ((t = String(t)).length > 100) return;
        var e = /^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(t);
        if (!e) return;
        var d = parseFloat(e[1]);

        switch ((e[2] || "ms").toLowerCase()) {
          case "years":
          case "year":
          case "yrs":
          case "yr":
          case "y":
            return d * a;

          case "days":
          case "day":
          case "d":
            return d * o;

          case "hours":
          case "hour":
          case "hrs":
          case "hr":
          case "h":
            return d * i;

          case "minutes":
          case "minute":
          case "mins":
          case "min":
          case "m":
            return d * r;

          case "seconds":
          case "second":
          case "secs":
          case "sec":
          case "s":
            return d * n;

          case "milliseconds":
          case "millisecond":
          case "msecs":
          case "msec":
          case "ms":
            return d;

          default:
            return;
        }
      }(t);
      if ("number" === s && !1 === isNaN(t)) return e.long ? function (t) {
        return d(t, o, "day") || d(t, i, "hour") || d(t, r, "minute") || d(t, n, "second") || t + " ms";
      }(t) : function (t) {
        if (t >= o) return Math.round(t / o) + "d";
        if (t >= i) return Math.round(t / i) + "h";
        if (t >= r) return Math.round(t / r) + "m";
        if (t >= n) return Math.round(t / n) + "s";
        return t + "ms";
      }(t);
      throw new Error("val is not a non-empty string or a valid number. val=" + JSON.stringify(t));
    };
  }, function (t, e, n) {
    "use strict";

    var r = n(19);
    n.n(r).a;
  },, function (t, e, n) {
    "use strict";

    var r = n(20);
    n.n(r).a;
  },, function (t, e, n) {
    "use strict";

    n.r(e);
    var r = n(4),
        i = n(21),
        o = n.n(i),
        a = n(61),
        d = n.n(a),
        s = n(1),
        u = n.n(s);

    function l() {
      var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
          e = arguments[1];
      "string" == typeof e && (e = "^(?:" + e + ")$");
      var n = t.match(e);
      return null !== n && n[0].length === t.length;
    }

    function f(t) {
      return t[0];
    }

    function c(t) {
      return t[1];
    }

    function h(t) {
      return t[2] || [];
    }

    function $(t) {
      return t[8];
    }

    function p(t) {
      return t[0];
    }

    function _(t) {
      return t[1];
    }

    function g(t) {
      return t[2] || [];
    }

    function m(t, e) {
      return t[3] || function (t) {
        return t[4];
      }(e);
    }

    function v(t, e) {
      return t[4] || function (t) {
        return t[7];
      }(e);
    }

    function y(t) {
      return "$1" !== t && /\d/.test(t.replace("$1", ""));
    }

    function b(t) {
      return t[5] || _(t);
    }

    function w(t, e) {
      var n = e.country_phone_code_to_countries[t][0];
      return e.countries[n];
    }

    function E(t) {
      return t[9];
    }

    function k(t, e) {
      return E(t) ? E(t)[e] : void 0;
    }

    function x(t) {
      return k(t, 1);
    }

    var S = {
      formatExtension: function formatExtension(t, e) {
        return t + " ext. " + e;
      }
    };

    function A(t, e, n, r, i) {
      var a = function () {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
            e = arguments[1],
            n = arguments[2],
            r = arguments[3],
            i = arguments[4],
            a = void 0,
            d = void 0,
            s = void 0,
            u = void 0;
        if ("string" == typeof t) {
          if ("string" == typeof n) a = {
            phone: t,
            country: e
          }, d = n, i ? (s = r, u = i) : u = r;else {
            if (a = {
              phone: t
            }, "string" != typeof e) throw new Error("Format type argument not passed for `format()`");
            d = e, r ? (s = n, u = r) : u = n;
          }
        } else a = t, d = e, r ? (s = n, u = r) : u = n;
        if (!u) throw new Error("Metadata is required");

        switch (d) {
          case "International":
          case "E.164":
          case "International_plaintext":
          case "National":
          case "RFC3966":
            break;

          default:
            throw new Error('Unknown format type argument passed to "format()": "' + d + '"');
        }

        s = s ? o()({}, S, s) : S;
        return {
          input: a,
          format_type: d,
          options: s,
          metadata: u
        };
      }(t, e, n, r, i),
          d = a.input,
          s = a.format_type,
          u = a.options,
          l = a.metadata,
          c = void 0;

      d.country && (c = l.countries[d.country]);
      var h = Q(d.phone, l),
          $ = h.country_phone_code,
          p = h.number;

      if ($) {
        if (d.country && c && $ !== f(c)) return d.phone;
        c = w($, l);
      }

      if (!c) return d.phone;

      switch (s) {
        case "International":
          if (!p) return "+" + f(c);

          var _ = C(p, "International", !1, c),
              g = "+" + f(c) + " " + _;

          return d.ext || 0 === d.ext ? u.formatExtension(g, d.ext) : g;

        case "E.164":
        case "International_plaintext":
          return "+" + f(c) + d.phone;

        case "RFC3966":
          return "+" + f(c) + d.phone + (d.ext || 0 === d.ext ? ";ext=" + d.ext : "");

        case "National":
          if (!p) return "";
          var m = C(p, "National", !1, c);
          return d.ext || 0 === d.ext ? u.formatExtension(m, d.ext) : m;
      }
    }

    var R = /(\$\d)/;

    function T(t, e, n, r, i) {
      var o = new RegExp(p(e)),
          a = m(e, i),
          d = !a || a && v(e, i) && !r;
      if (!n && !d) return t.replace(o, _(e).replace(R, a));
      var s = t.replace(o, n ? b(e) : _(e));
      return n ? O(s) : s;
    }

    function C(t, e, n, r) {
      var i = function (t, e) {
        var n = !0,
            r = !1,
            i = void 0;

        try {
          for (var o, a = u()(t); !(n = (o = a.next()).done); n = !0) {
            var d = o.value;

            if (g(d).length > 0) {
              var s = g(d)[g(d).length - 1];
              if (0 !== e.search(s)) continue;
            }

            if (l(e, new RegExp(p(d)))) return d;
          }
        } catch (t) {
          r = !0, i = t;
        } finally {
          try {
            !n && a.return && a.return();
          } finally {
            if (r) throw i;
          }
        }
      }(h(r), t);

      return i ? T(t, i, "International" === e, n, r) : t;
    }

    function O(t) {
      return t.replace(new RegExp("[" + j + "]+", "g"), " ").trim();
    }

    function L(t, e, n) {
      var r = I(t, e, n),
          i = r.input,
          o = r.metadata;

      if (i && i.country) {
        var a = i.phone,
            d = o.countries[i.country];
        if (M(a, c(d))) return M(a, function (t) {
          return k(t, 3);
        }(d)) ? "PREMIUM_RATE" : M(a, function (t) {
          return k(t, 2);
        }(d)) ? "TOLL_FREE" : M(a, function (t) {
          return k(t, 9);
        }(d)) ? "SHARED_COST" : M(a, function (t) {
          return k(t, 8);
        }(d)) ? "VOIP" : M(a, function (t) {
          return k(t, 4);
        }(d)) ? "PERSONAL_NUMBER" : M(a, function (t) {
          return k(t, 7);
        }(d)) ? "PAGER" : M(a, function (t) {
          return k(t, 6);
        }(d)) ? "UAN" : M(a, function (t) {
          return k(t, 5);
        }(d)) ? "VOICEMAIL" : M(a, function (t) {
          return k(t, 0);
        }(d)) ? x(d) ? M(a, x(d)) ? "FIXED_LINE_OR_MOBILE" : "FIXED_LINE" : "FIXED_LINE_OR_MOBILE" : M(a, x(d)) ? "MOBILE" : void 0;
      }
    }

    function M(t, e) {
      return l(t, e);
    }

    function I(t, e, n) {
      var r = void 0,
          i = void 0;
      if ("number" == typeof t && (t = String(t)), "string" == typeof t ? "string" == typeof e || void 0 === e ? (i = n, V(t) && (r = K(t, e, i))) : (i = e, V(t) && (r = K(t, i))) : (t && t.phone && V(t.phone) && (r = t), i = e), !i || !i.countries) throw new Error("Metadata is required");
      return {
        input: r,
        metadata: i
      };
    }

    var B = 3,
        P = 2,
        N = 17,
        U = 250,
        j = "-‐-―−ー－／/．.  ­​⁠　()（）［］\\[\\]~⁓∼～",
        z = ";ext=([0-9０-９٠-٩۰-۹]{1,7})|[  \\t,]*(?:e?xt(?:ensi(?:ó?|ó))?n?|ｅ?ｘｔｎ?|[;,xｘ#＃~～]|int|anexo|ｉｎｔ)[:\\.．]?[  \\t,-]*([0-9０-９٠-٩۰-۹]{1,7})#?|[- ]+([0-9０-９٠-٩۰-۹]{1,5})#",
        D = new RegExp("(?:" + z + ")$", "i"),
        F = new RegExp("^" + ("[0-9０-９٠-٩۰-۹]{" + P + "}") + "$|^" + ("[+＋]{0,1}(?:[" + j + "]*[0-9０-９٠-٩۰-۹]){3,}[" + j + "0-9０-９٠-٩۰-۹]*") + "(?:" + z + ")?$", "i"),
        Z = new RegExp("[+＋0-9０-９٠-٩۰-۹]"),
        G = new RegExp("[^0-9０-９٠-٩۰-۹]+$"),
        H = new RegExp("^[+＋]+"),
        q = {
      0: "0",
      1: "1",
      2: "2",
      3: "3",
      4: "4",
      5: "5",
      6: "6",
      7: "7",
      8: "8",
      9: "9",
      "０": "0",
      "１": "1",
      "２": "2",
      "３": "3",
      "４": "4",
      "５": "5",
      "６": "6",
      "７": "7",
      "８": "8",
      "９": "9",
      "٠": "0",
      "١": "1",
      "٢": "2",
      "٣": "3",
      "٤": "4",
      "٥": "5",
      "٦": "6",
      "٧": "7",
      "٨": "8",
      "٩": "9",
      "۰": "0",
      "۱": "1",
      "۲": "2",
      "۳": "3",
      "۴": "4",
      "۵": "5",
      "۶": "6",
      "۷": "7",
      "۸": "8",
      "۹": "9"
    },
        Y = {
      country: {}
    };

    function K(t, e, n) {
      var r = function (t, e, n) {
        var r = void 0,
            i = void 0,
            a = void 0;
        "number" == typeof t && (t = String(t));
        "string" == typeof t && (r = t);
        "string" == typeof e ? (i = {
          country: {
            restrict: e
          }
        }, a = n) : n ? (i = e, a = n) : a = e;
        if (!a || !a.countries) throw new Error("Metadata is required");
        i = i ? o()({}, Y, i) : Y;
        return {
          text: r,
          options: i,
          metadata: a
        };
      }(t, e, n),
          i = r.text,
          a = r.options,
          s = r.metadata;

      if (a.country.default && !s.countries[a.country.default]) throw new Error("Unknown country code: " + a.country.default);
      if (a.country.restrict && !s.countries[a.country.restrict]) throw new Error("Unknown country code: " + a.country.restrict);
      var h = void 0,
          $ = void 0;

      if (i && 0 === i.indexOf("tel:")) {
        var p = !0,
            _ = !1,
            g = void 0;

        try {
          for (var m, v = u()(i.split(";")); !(p = (m = v.next()).done); p = !0) {
            var y = m.value.split(":"),
                b = d()(y, 2),
                E = b[0],
                k = b[1];

            switch (E) {
              case "tel":
                h = k;
                break;

              case "ext":
                $ = k;
                break;

              case "phone-context":
                "+" === k[0] && (h = k + h);
            }
          }
        } catch (t) {
          _ = !0, g = t;
        } finally {
          try {
            !p && v.return && v.return();
          } finally {
            if (_) throw g;
          }
        }
      } else h = J(i);

      if (!V(h)) return {};

      var x = function (t) {
        var e = t.search(D);
        if (e < 0) return {};
        var n = t.slice(0, e);
        if (!V(n)) return {};
        var r = t.match(D),
            i = 1;

        for (; i < r.length;) {
          if (null != r[i] && r[i].length > 0) return {
            number: n,
            extension: r[i]
          };
          i++;
        }
      }(h);

      x.extension && (h = x.number, $ = x.extension);
      var S = Q(h, s),
          A = S.country_phone_code,
          R = S.number;
      if (!R) return {};
      var T = void 0,
          C = void 0,
          O = !1;

      if (A) {
        if (O = !0, a.country.restrict && A !== f(s.countries[a.country.restrict])) return {};
        C = w(A, s);
      } else (a.country.restrict || a.country.default) && (T = a.country.restrict || a.country.default, C = s.countries[T], R = W(h));

      if (!C) return {};
      var L = R;
      O || (L = tt(R, C));

      if (!T) {
        if (!(T = et(A, L, s))) return {};
        C = s.countries[T];
      }

      if (L.length > N) return {};
      if (!l(L, new RegExp(c(C)))) return {};
      var M = {
        country: T,
        phone: L
      };
      return $ && (M.ext = $), M;
    }

    function W(t) {
      return function (t, e) {
        var n = "",
            r = !0,
            i = !1,
            o = void 0;

        try {
          for (var a, d = u()(t); !(r = (a = d.next()).done); r = !0) {
            var s = a.value,
                l = e[s.toUpperCase()];
            void 0 !== l && (n += l);
          }
        } catch (t) {
          i = !0, o = t;
        } finally {
          try {
            !r && d.return && d.return();
          } finally {
            if (i) throw o;
          }
        }

        return n;
      }(t, q);
    }

    function V(t) {
      return t.length >= P && l(t, F);
    }

    function J(t) {
      if (!t || t.length > U) return "";
      var e = t.search(Z);
      return e < 0 ? "" : t.slice(e).replace(G, "");
    }

    function X(t) {
      if (!t) return "";
      var e = H.test(t);
      return t = W(t), e ? "+" + t : t;
    }

    function Q(t, e) {
      if (!(t = X(t))) return {};
      if ("+" !== t[0]) return {
        number: t
      };
      if ("0" === (t = t.slice(1))[0]) return {};

      for (var n = 1; n <= B && n <= t.length;) {
        var r = t.slice(0, n);
        if (e.country_phone_code_to_countries[r]) return {
          country_phone_code: r,
          number: t.slice(n)
        };
        n++;
      }

      return {};
    }

    function tt(t, e) {
      var n = function (t) {
        var e = t[5];
        return e || (e = function (t) {
          return t[3];
        }(t)), e;
      }(e);

      if (!t || !n) return t;
      var r = new RegExp("^(?:" + n + ")"),
          i = r.exec(t);
      if (!i) return t;

      var o = void 0,
          a = i[i.length - 1],
          d = function (t) {
        return t[6];
      }(e);

      o = d && a ? t.replace(r, d) : t.slice(i[0].length);
      var s = new RegExp(c(e));
      return l(t, s) && !l(o, s) ? t : o;
    }

    function et(t, e, n) {
      var r = n.country_phone_code_to_countries[t];
      if (1 === r.length) return r[0];
      var i = !0,
          o = !1,
          a = void 0;

      try {
        for (var d, s = u()(r); !(i = (d = s.next()).done); i = !0) {
          var l = d.value,
              f = n.countries[l];

          if ($(f)) {
            if (e && 0 === e.search($(f))) return l;
          } else if (L({
            phone: e,
            country: l
          }, n)) return l;
        }
      } catch (t) {
        o = !0, a = t;
      } finally {
        try {
          !i && s.return && s.return();
        } finally {
          if (o) throw a;
        }
      }
    }

    var nt = n(62),
        rt = n.n(nt),
        it = n(63),
        ot = n.n(it),
        at = new RegExp("9", "g"),
        dt = _t("9", 15),
        st = new RegExp("x"),
        ut = new RegExp("x", "g"),
        lt = /\[([^\[\]])*\]/g,
        ft = /\d(?=[^,}][^,}])/g,
        ct = new RegExp("^[" + j + "]*(\\$\\d[" + j + "]*)+$"),
        ht = new RegExp("^" + ("[+＋]{0,1}[" + j + "0-9０-９٠-٩۰-۹]*") + "$", "i"),
        $t = function () {
      function t(e, n) {
        if (rt()(this, t), !n || !n.countries) throw new Error("Metadata is required");
        e && n.countries[e] && (this.default_country = e), this.metadata = n, this.reset();
      }

      return ot()(t, [{
        key: "input",
        value: function value(t) {
          var e = J(t);
          return e || t && t.indexOf("+") >= 0 && (e = "+"), l(e, ht) ? this.process_input(X(e)) : this.current_output;
        }
      }, {
        key: "process_input",
        value: function value(t) {
          if ("+" === t[0] && (this.parsed_input || (this.parsed_input += "+", this.reset_countriness()), t = t.slice(1)), this.parsed_input += t, this.national_number += t, this.is_international()) {
            if (this.country_phone_code) this.country || this.determine_the_country();else {
              if (!this.extract_country_phone_code()) return this.parsed_input;
              this.initialize_phone_number_formats_for_this_country_phone_code(), this.reset_format(), this.determine_the_country();
            }
          } else {
            var e = this.national_prefix;
            this.national_number = this.national_prefix + this.national_number, this.extract_national_prefix(), this.national_prefix !== e && (this.matching_formats = this.available_formats, this.reset_format());
          }
          if (!this.should_format()) return this.format_as_non_formatted_number();
          this.match_formats_by_leading_digits();
          var n = this.format_national_phone_number(t);
          return n ? this.full_phone_number(n) : this.parsed_input;
        }
      }, {
        key: "format_as_non_formatted_number",
        value: function value() {
          return this.is_international() && this.country_phone_code ? this.national_number ? (this.template = "x" + _t("x", this.country_phone_code.length) + " " + _t("x", this.national_number.length), "+" + this.country_phone_code + " " + this.national_number) : "+" + this.country_phone_code : this.parsed_input;
        }
      }, {
        key: "format_national_phone_number",
        value: function value(t) {
          var e = void 0;
          this.chosen_format && (e = this.format_next_national_number_digits(t));
          var n = this.attempt_to_format_complete_phone_number();
          return n || (this.choose_another_format() ? this.reformat_national_number() : e);
        }
      }, {
        key: "reset",
        value: function value() {
          return this.parsed_input = "", this.current_output = "", this.national_prefix = "", this.national_number = "", this.reset_countriness(), this.reset_format(), this;
        }
      }, {
        key: "reset_country",
        value: function value() {
          this.default_country && !this.is_international() ? this.country = this.default_country : this.country = void 0;
        }
      }, {
        key: "reset_countriness",
        value: function value() {
          this.reset_country(), this.default_country && !this.is_international() ? (this.country_metadata = this.metadata.countries[this.default_country], this.country_phone_code = f(this.country_metadata), this.initialize_phone_number_formats_for_this_country_phone_code()) : (this.country_metadata = void 0, this.country_phone_code = void 0, this.available_formats = [], this.matching_formats = this.available_formats);
        }
      }, {
        key: "reset_format",
        value: function value() {
          this.chosen_format = void 0, this.template = void 0, this.partially_populated_template = void 0, this.last_match_position = -1;
        }
      }, {
        key: "reformat_national_number",
        value: function value() {
          return this.format_next_national_number_digits(this.national_number);
        }
      }, {
        key: "initialize_phone_number_formats_for_this_country_phone_code",
        value: function value() {
          this.available_formats = h(this.country_metadata).filter(function (t) {
            return ct.test(b(t));
          }), this.matching_formats = this.available_formats;
        }
      }, {
        key: "match_formats_by_leading_digits",
        value: function value() {
          var t = this.national_number,
              e = t.length - 3;
          e < 0 && (e = 0), this.matching_formats = this.matching_formats.filter(function (n) {
            var r = g(n).length;
            if (0 === r) return !0;
            var i = Math.min(e, r - 1),
                o = g(n)[i];
            return new RegExp("^(" + o + ")").test(t);
          }), this.chosen_format && -1 === this.matching_formats.indexOf(this.chosen_format) && this.reset_format();
        }
      }, {
        key: "should_format",
        value: function value() {
          return this.national_number >= 3;
        }
      }, {
        key: "attempt_to_format_complete_phone_number",
        value: function value() {
          var t = !0,
              e = !1,
              n = void 0;

          try {
            for (var r, i = u()(this.matching_formats); !(t = (r = i.next()).done); t = !0) {
              var o = r.value;

              if (new RegExp("^(?:" + p(o) + ")$").test(this.national_number) && this.validate_format(o)) {
                this.reset_format(), this.chosen_format = o;
                var a = T(this.national_number, o, this.is_international(), this.national_prefix.length > 0, this.country_metadata);
                if (this.create_formatting_template(o)) this.reformat_national_number();else {
                  var d = this.full_phone_number(a);
                  this.template = d.replace(/[\d\+]/g, "x"), this.partially_populated_template = d;
                }
                return a;
              }
            }
          } catch (t) {
            e = !0, n = t;
          } finally {
            try {
              !t && i.return && i.return();
            } finally {
              if (e) throw n;
            }
          }
        }
      }, {
        key: "full_phone_number",
        value: function value(t) {
          return this.is_international() ? "+" + this.country_phone_code + " " + t : t;
        }
      }, {
        key: "extract_country_phone_code",
        value: function value() {
          if (this.national_number) {
            var t = Q(this.parsed_input, this.metadata),
                e = t.country_phone_code,
                n = t.number;
            if (e) return this.country_phone_code = e, this.national_number = n, this.country_metadata = w(e, this.metadata);
          }
        }
      }, {
        key: "extract_national_prefix",
        value: function value() {
          if (this.national_prefix = "", this.country_metadata) {
            var t = tt(this.national_number, this.country_metadata);
            return t !== this.national_number && (this.national_prefix = this.national_number.slice(0, this.national_number.length - t.length), this.national_number = t), this.national_prefix;
          }
        }
      }, {
        key: "choose_another_format",
        value: function value() {
          var t = !0,
              e = !1,
              n = void 0;

          try {
            for (var r, i = u()(this.matching_formats); !(t = (r = i.next()).done); t = !0) {
              var o = r.value;
              if (this.chosen_format === o) return;
              if (this.validate_format(o) && this.create_formatting_template(o)) return this.chosen_format = o, this.last_match_position = -1, !0;
            }
          } catch (t) {
            e = !0, n = t;
          } finally {
            try {
              !t && i.return && i.return();
            } finally {
              if (e) throw n;
            }
          }

          this.reset_country(), this.reset_format();
        }
      }, {
        key: "validate_format",
        value: function value(t) {
          if (this.is_international() || this.national_prefix || !function (t, e) {
            var n = m(t, e);
            return n && y(n) && !v(t, e);
          }(t, this.country_metadata)) return !0;
        }
      }, {
        key: "create_formatting_template",
        value: function value(t) {
          if (!(p(t).indexOf("|") >= 0)) {
            var e = this.get_template_for_phone_number_format_pattern(t);
            if (e) return this.partially_populated_template = e, this.is_international() ? this.template = "x" + _t("x", this.country_phone_code.length) + " " + e : this.template = e.replace(/\d/g, "x"), this.template;
          }
        }
      }, {
        key: "get_template_for_phone_number_format_pattern",
        value: function value(t) {
          var e = m(t, this.country_metadata),
              n = p(t).replace(lt, "\\d").replace(ft, "\\d"),
              r = dt.match(n)[0];

          if (!(this.national_number.length > r.length)) {
            var i = this.get_format_format(t, e),
                o = new RegExp("^" + n + "$"),
                a = this.national_number.replace(/\d/g, "9");
            return o.test(a) && (r = a), r.replace(new RegExp(n), i).replace(at, "x");
          }
        }
      }, {
        key: "format_next_national_number_digits",
        value: function value(t) {
          var e = !0,
              n = !1,
              r = void 0;

          try {
            for (var i, o = u()(t); !(e = (i = o.next()).done); e = !0) {
              var a = i.value;
              if (-1 === this.partially_populated_template.slice(this.last_match_position + 1).search(st)) return this.chosen_format = void 0, this.template = void 0, void (this.partially_populated_template = void 0);
              this.last_match_position = this.partially_populated_template.search(st), this.partially_populated_template = this.partially_populated_template.replace(st, a);
            }
          } catch (t) {
            n = !0, r = t;
          } finally {
            try {
              !e && o.return && o.return();
            } finally {
              if (n) throw r;
            }
          }

          return function (t, e) {
            var n = t.slice(0, e),
                r = pt("(", n),
                i = pt(")", n),
                o = r - i;

            for (; o > 0 && e < t.length;) {
              ")" === t[e] && o--, e++;
            }

            return t.slice(0, e);
          }(this.partially_populated_template, this.last_match_position + 1).replace(ut, " ");
        }
      }, {
        key: "is_international",
        value: function value() {
          return this.parsed_input && "+" === this.parsed_input[0];
        }
      }, {
        key: "get_format_format",
        value: function value(t, e) {
          var n = this.is_international() ? b(t) : _(t);
          return e && (!this.national_prefix && y(e) || (n = n.replace(R, e))), this.is_international() ? O(n) : n;
        }
      }, {
        key: "determine_the_country",
        value: function value() {
          this.country = et(this.country_phone_code, this.national_number, this.metadata);
        }
      }]), t;
    }();

    function pt(t, e) {
      var n = 0,
          r = !0,
          i = !1,
          o = void 0;

      try {
        for (var a, d = u()(e); !(r = (a = d.next()).done); r = !0) {
          a.value === t && n++;
        }
      } catch (t) {
        i = !0, o = t;
      } finally {
        try {
          !r && d.return && d.return();
        } finally {
          if (i) throw o;
        }
      }

      return n;
    }

    function _t(t, e) {
      if (e < 1) return "";

      for (var n = ""; e > 1;) {
        1 & e && (n += t), e >>= 1, t += t;
      }

      return n + t;
    }

    function gt() {
      var t = Array.prototype.slice.call(arguments);
      return t.push(r), function (t, e, n) {
        var r = I(t, e, n),
            i = r.input,
            o = r.metadata;
        return !(!i || !i.country || E(o.countries[i.country]) && !L(i, o));
      }.apply(this, t);
    }

    function mt(t) {
      $t.call(this, t, r);
    }

    function vt(t) {
      $t.call(this, t, r);
    }

    function yt(t) {
      $t.call(this, t, r);
    }

    mt.prototype = Object.create($t.prototype, {}), mt.prototype.constructor = mt, vt.prototype = Object.create($t.prototype, {}), vt.prototype.constructor = vt, yt.prototype = Object.create($t.prototype, {}), yt.prototype.constructor = yt;

    var bt = [["Afghanistan (‫افغانستان‬‎)", "af", "93"], ["Albania (Shqipëri)", "al", "355"], ["Algeria (‫الجزائر‬‎)", "dz", "213"], ["American Samoa", "as", "1684"], ["Andorra", "ad", "376"], ["Angola", "ao", "244"], ["Anguilla", "ai", "1264"], ["Antigua and Barbuda", "ag", "1268"], ["Argentina", "ar", "54"], ["Armenia (Հայաստան)", "am", "374"], ["Aruba", "aw", "297"], ["Australia", "au", "61", 0], ["Austria (Österreich)", "at", "43"], ["Azerbaijan (Azərbaycan)", "az", "994"], ["Bahamas", "bs", "1242"], ["Bahrain (‫البحرين‬‎)", "bh", "973"], ["Bangladesh (বাংলাদেশ)", "bd", "880"], ["Barbados", "bb", "1246"], ["Belarus (Беларусь)", "by", "375"], ["Belgium (België)", "be", "32"], ["Belize", "bz", "501"], ["Benin (Bénin)", "bj", "229"], ["Bermuda", "bm", "1441"], ["Bhutan (འབྲུག)", "bt", "975"], ["Bolivia", "bo", "591"], ["Bosnia and Herzegovina (Босна и Херцеговина)", "ba", "387"], ["Botswana", "bw", "267"], ["Brazil (Brasil)", "br", "55"], ["British Indian Ocean Territory", "io", "246"], ["British Virgin Islands", "vg", "1284"], ["Brunei", "bn", "673"], ["Bulgaria (България)", "bg", "359"], ["Burkina Faso", "bf", "226"], ["Burundi (Uburundi)", "bi", "257"], ["Cambodia (កម្ពុជា)", "kh", "855"], ["Cameroon (Cameroun)", "cm", "237"], ["Canada", "ca", "1", 1, ["204", "226", "236", "249", "250", "289", "306", "343", "365", "387", "403", "416", "418", "431", "437", "438", "450", "506", "514", "519", "548", "579", "581", "587", "604", "613", "639", "647", "672", "705", "709", "742", "778", "780", "782", "807", "819", "825", "867", "873", "902", "905"]], ["Cape Verde (Kabu Verdi)", "cv", "238"], ["Caribbean Netherlands", "bq", "599", 1], ["Cayman Islands", "ky", "1345"], ["Central African Republic (République centrafricaine)", "cf", "236"], ["Chad (Tchad)", "td", "235"], ["Chile", "cl", "56"], ["China (中国)", "cn", "86"], ["Christmas Island", "cx", "61", 2], ["Cocos (Keeling) Islands", "cc", "61", 1], ["Colombia", "co", "57"], ["Comoros (‫جزر القمر‬‎)", "km", "269"], ["Congo (DRC) (Jamhuri ya Kidemokrasia ya Kongo)", "cd", "243"], ["Congo (Republic) (Congo-Brazzaville)", "cg", "242"], ["Cook Islands", "ck", "682"], ["Costa Rica", "cr", "506"], ["Côte d’Ivoire", "ci", "225"], ["Croatia (Hrvatska)", "hr", "385"], ["Cuba", "cu", "53"], ["Curaçao", "cw", "599", 0], ["Cyprus (Κύπρος)", "cy", "357"], ["Czech Republic (Česká republika)", "cz", "420"], ["Denmark (Danmark)", "dk", "45"], ["Djibouti", "dj", "253"], ["Dominica", "dm", "1767"], ["Dominican Republic (República Dominicana)", "do", "1", 2, ["809", "829", "849"]], ["Ecuador", "ec", "593"], ["Egypt (‫مصر‬‎)", "eg", "20"], ["El Salvador", "sv", "503"], ["Equatorial Guinea (Guinea Ecuatorial)", "gq", "240"], ["Eritrea", "er", "291"], ["Estonia (Eesti)", "ee", "372"], ["Ethiopia", "et", "251"], ["Falkland Islands (Islas Malvinas)", "fk", "500"], ["Faroe Islands (Føroyar)", "fo", "298"], ["Fiji", "fj", "679"], ["Finland (Suomi)", "fi", "358", 0], ["France", "fr", "33"], ["French Guiana (Guyane française)", "gf", "594"], ["French Polynesia (Polynésie française)", "pf", "689"], ["Gabon", "ga", "241"], ["Gambia", "gm", "220"], ["Georgia (საქართველო)", "ge", "995"], ["Germany (Deutschland)", "de", "49"], ["Ghana (Gaana)", "gh", "233"], ["Gibraltar", "gi", "350"], ["Greece (Ελλάδα)", "gr", "30"], ["Greenland (Kalaallit Nunaat)", "gl", "299"], ["Grenada", "gd", "1473"], ["Guadeloupe", "gp", "590", 0], ["Guam", "gu", "1671"], ["Guatemala", "gt", "502"], ["Guernsey", "gg", "44", 1], ["Guinea (Guinée)", "gn", "224"], ["Guinea-Bissau (Guiné Bissau)", "gw", "245"], ["Guyana", "gy", "592"], ["Haiti", "ht", "509"], ["Honduras", "hn", "504"], ["Hong Kong (香港)", "hk", "852"], ["Hungary (Magyarország)", "hu", "36"], ["Iceland (Ísland)", "is", "354"], ["India (भारत)", "in", "91"], ["Indonesia", "id", "62"], ["Iran (‫ایران‬‎)", "ir", "98"], ["Iraq (‫العراق‬‎)", "iq", "964"], ["Ireland", "ie", "353"], ["Isle of Man", "im", "44", 2], ["Israel (‫ישראל‬‎)", "il", "972"], ["Italy (Italia)", "it", "39", 0], ["Jamaica", "jm", "1876"], ["Japan (日本)", "jp", "81"], ["Jersey", "je", "44", 3], ["Jordan (‫الأردن‬‎)", "jo", "962"], ["Kazakhstan (Казахстан)", "kz", "7", 1], ["Kenya", "ke", "254"], ["Kiribati", "ki", "686"], ["Kosovo", "xk", "383"], ["Kuwait (‫الكويت‬‎)", "kw", "965"], ["Kyrgyzstan (Кыргызстан)", "kg", "996"], ["Laos (ລາວ)", "la", "856"], ["Latvia (Latvija)", "lv", "371"], ["Lebanon (‫لبنان‬‎)", "lb", "961"], ["Lesotho", "ls", "266"], ["Liberia", "lr", "231"], ["Libya (‫ليبيا‬‎)", "ly", "218"], ["Liechtenstein", "li", "423"], ["Lithuania (Lietuva)", "lt", "370"], ["Luxembourg", "lu", "352"], ["Macau (澳門)", "mo", "853"], ["Macedonia (FYROM) (Македонија)", "mk", "389"], ["Madagascar (Madagasikara)", "mg", "261"], ["Malawi", "mw", "265"], ["Malaysia", "my", "60"], ["Maldives", "mv", "960"], ["Mali", "ml", "223"], ["Malta", "mt", "356"], ["Marshall Islands", "mh", "692"], ["Martinique", "mq", "596"], ["Mauritania (‫موريتانيا‬‎)", "mr", "222"], ["Mauritius (Moris)", "mu", "230"], ["Mayotte", "yt", "262", 1], ["Mexico (México)", "mx", "52"], ["Micronesia", "fm", "691"], ["Moldova (Republica Moldova)", "md", "373"], ["Monaco", "mc", "377"], ["Mongolia (Монгол)", "mn", "976"], ["Montenegro (Crna Gora)", "me", "382"], ["Montserrat", "ms", "1664"], ["Morocco (‫المغرب‬‎)", "ma", "212", 0], ["Mozambique (Moçambique)", "mz", "258"], ["Myanmar (Burma) (မြန်မာ)", "mm", "95"], ["Namibia (Namibië)", "na", "264"], ["Nauru", "nr", "674"], ["Nepal (नेपाल)", "np", "977"], ["Netherlands (Nederland)", "nl", "31"], ["New Caledonia (Nouvelle-Calédonie)", "nc", "687"], ["New Zealand", "nz", "64"], ["Nicaragua", "ni", "505"], ["Niger (Nijar)", "ne", "227"], ["Nigeria", "ng", "234"], ["Niue", "nu", "683"], ["Norfolk Island", "nf", "672"], ["North Korea (조선 민주주의 인민 공화국)", "kp", "850"], ["Northern Mariana Islands", "mp", "1670"], ["Norway (Norge)", "no", "47", 0], ["Oman (‫عُمان‬‎)", "om", "968"], ["Pakistan (‫پاکستان‬‎)", "pk", "92"], ["Palau", "pw", "680"], ["Palestine (‫فلسطين‬‎)", "ps", "970"], ["Panama (Panamá)", "pa", "507"], ["Papua New Guinea", "pg", "675"], ["Paraguay", "py", "595"], ["Peru (Perú)", "pe", "51"], ["Philippines", "ph", "63"], ["Poland (Polska)", "pl", "48"], ["Portugal", "pt", "351"], ["Puerto Rico", "pr", "1", 3, ["787", "939"]], ["Qatar (‫قطر‬‎)", "qa", "974"], ["Réunion (La Réunion)", "re", "262", 0], ["Romania (România)", "ro", "40"], ["Russia (Россия)", "ru", "7", 0], ["Rwanda", "rw", "250"], ["Saint Barthélemy", "bl", "590", 1], ["Saint Helena", "sh", "290"], ["Saint Kitts and Nevis", "kn", "1869"], ["Saint Lucia", "lc", "1758"], ["Saint Martin (Saint-Martin (partie française))", "mf", "590", 2], ["Saint Pierre and Miquelon (Saint-Pierre-et-Miquelon)", "pm", "508"], ["Saint Vincent and the Grenadines", "vc", "1784"], ["Samoa", "ws", "685"], ["San Marino", "sm", "378"], ["São Tomé and Príncipe (São Tomé e Príncipe)", "st", "239"], ["Saudi Arabia (‫المملكة العربية السعودية‬‎)", "sa", "966"], ["Senegal (Sénégal)", "sn", "221"], ["Serbia (Србија)", "rs", "381"], ["Seychelles", "sc", "248"], ["Sierra Leone", "sl", "232"], ["Singapore", "sg", "65"], ["Sint Maarten", "sx", "1721"], ["Slovakia (Slovensko)", "sk", "421"], ["Slovenia (Slovenija)", "si", "386"], ["Solomon Islands", "sb", "677"], ["Somalia (Soomaaliya)", "so", "252"], ["South Africa", "za", "27"], ["South Korea (대한민국)", "kr", "82"], ["South Sudan (‫جنوب السودان‬‎)", "ss", "211"], ["Spain (España)", "es", "34"], ["Sri Lanka (ශ්‍රී ලංකාව)", "lk", "94"], ["Sudan (‫السودان‬‎)", "sd", "249"], ["Suriname", "sr", "597"], ["Svalbard and Jan Mayen", "sj", "47", 1], ["Swaziland", "sz", "268"], ["Sweden (Sverige)", "se", "46"], ["Switzerland (Schweiz)", "ch", "41"], ["Syria (‫سوريا‬‎)", "sy", "963"], ["Taiwan (台灣)", "tw", "886"], ["Tajikistan", "tj", "992"], ["Tanzania", "tz", "255"], ["Thailand (ไทย)", "th", "66"], ["Timor-Leste", "tl", "670"], ["Togo", "tg", "228"], ["Tokelau", "tk", "690"], ["Tonga", "to", "676"], ["Trinidad and Tobago", "tt", "1868"], ["Tunisia (‫تونس‬‎)", "tn", "216"], ["Turkey (Türkiye)", "tr", "90"], ["Turkmenistan", "tm", "993"], ["Turks and Caicos Islands", "tc", "1649"], ["Tuvalu", "tv", "688"], ["U.S. Virgin Islands", "vi", "1340"], ["Uganda", "ug", "256"], ["Ukraine (Україна)", "ua", "380"], ["United Arab Emirates (‫الإمارات العربية المتحدة‬‎)", "ae", "971"], ["United Kingdom", "gb", "44", 0], ["United States", "us", "1", 0], ["Uruguay", "uy", "598"], ["Uzbekistan (Oʻzbekiston)", "uz", "998"], ["Vanuatu", "vu", "678"], ["Vatican City (Città del Vaticano)", "va", "39", 1], ["Venezuela", "ve", "58"], ["Vietnam (Việt Nam)", "vn", "84"], ["Wallis and Futuna (Wallis-et-Futuna)", "wf", "681"], ["Western Sahara (‫الصحراء الغربية‬‎)", "eh", "212", 1], ["Yemen (‫اليمن‬‎)", "ye", "967"], ["Zambia", "zm", "260"], ["Zimbabwe", "zw", "263"], ["Åland Islands", "ax", "358", 1]].map(function (t) {
      return {
        name: t[0],
        iso2: t[1].toUpperCase(),
        dialCode: t[2],
        priority: t[3] || 0,
        areaCodes: t[4] || null
      };
    }),
        wt = n(64),
        Et = n.n(wt),
        kt = function kt() {
      return new Promise(function (t, e) {
        Et()("https://ipinfo.io/json", function (n, r) {
          n && e(n), t(r && r.country);
        });
      });
    };

    function xt(t) {
      return function (t) {
        if (Array.isArray(t)) {
          for (var e = 0, n = new Array(t.length); e < t.length; e++) {
            n[e] = t[e];
          }

          return n;
        }
      }(t) || function (t) {
        if (Symbol.iterator in Object(t) || "[object Arguments]" === Object.prototype.toString.call(t)) return Array.from(t);
      }(t) || function () {
        throw new TypeError("Invalid attempt to spread non-iterable instance");
      }();
    }

    function St(t, e, n) {
      return e in t ? Object.defineProperty(t, e, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : t[e] = n, t;
    }

    var At = {
      name: "vue-tel-input",
      props: {
        value: {
          type: String
        },
        placeholder: {
          type: String,
          default: "Enter a phone number"
        },
        disabledFetchingCountry: {
          type: Boolean,
          default: !1
        },
        disabled: {
          type: Boolean,
          default: !1
        },
        preferredCountries: {
          type: Array,
          default: function _default() {
            return [];
          }
        },
        invalidMsg: {
          default: "",
          type: String
        },
        required: {
          type: Boolean,
          default: !1
        },
        defaultCountry: {
          type: String,
          default: ""
        }
      },
      mounted: function mounted() {
        this.initializeCountry();
      },
      created: function created() {
        this.value && (this.phone = this.value);
      },
      data: function data() {
        return {
          phone: "",
          allCountries: bt,
          activeCountry: {
            iso2: ""
          },
          open: !1,
          selectedIndex: null,
          typeToFindInput: "",
          typeToFindTimer: null
        };
      },
      computed: {
        mode: function mode() {
          return this.phone ? "+" === this.phone[0] ? "code" : "0" === this.phone[0] ? "prefix" : "normal" : "";
        },
        sortedCountries: function sortedCountries() {
          var t = this;
          return xt(this.preferredCountries.map(function (e) {
            return t.findCountry(e);
          }).filter(Boolean).map(function (t) {
            return function (t) {
              for (var e = 1; e < arguments.length; e++) {
                var n = null != arguments[e] ? arguments[e] : {},
                    r = Object.keys(n);
                "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function (t) {
                  return Object.getOwnPropertyDescriptor(n, t).enumerable;
                }))), r.forEach(function (e) {
                  St(t, e, n[e]);
                });
              }

              return t;
            }({}, t, {
              preferred: !0
            });
          })).concat(xt(bt));
        },
        formattedResult: function formattedResult() {
          if (!this.mode || !this.allCountries) return "";
          var t = this.phone;

          if ("code" === this.mode) {
            var e = new yt();
            e.input(this.phone), this.activeCountry = this.findCountry(e.country) || this.activeCountry;
          } else "prefix" === this.mode && (t = this.phone.slice(1));

          return function () {
            var t = Array.prototype.slice.call(arguments);
            return t.push(r), A.apply(this, t);
          }(t, this.activeCountry && this.activeCountry.iso2, "International");
        },
        state: function state() {
          return gt(this.formattedResult);
        },
        response: function response() {
          return {
            number: this.state ? this.formattedResult : this.phone,
            isValid: this.state,
            country: this.activeCountry
          };
        }
      },
      watch: {
        state: function state(t) {
          t && "prefix" !== this.mode && (this.phone = this.formattedResult);
        },
        value: function value() {
          this.phone = this.value;
        }
      },
      methods: {
        initializeCountry: function initializeCountry() {
          var t = this;

          if (this.defaultCountry) {
            var e = this.findCountry(this.defaultCountry);
            if (e) return void (this.activeCountry = e);
          }

          this.activeCountry = this.findCountry(this.preferredCountries[0]) || bt[0], this.disabledFetchingCountry || kt().then(function (e) {
            t.activeCountry = t.findCountry(e) || t.activeCountry;
          });
        },
        findCountry: function findCountry() {
          var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
          return bt.find(function (e) {
            return e.iso2 === t.toUpperCase();
          });
        },
        getItemClass: function getItemClass(t, e) {
          return {
            highlighted: this.selectedIndex === t,
            "last-preferred": t === this.preferredCountries.length - 1,
            preferred: !!~this.preferredCountries.map(function (t) {
              return t.toUpperCase();
            }).indexOf(e)
          };
        },
        choose: function choose(t) {
          this.activeCountry = t, this.$emit("onInput", this.response);
        },
        onInput: function onInput() {
          this.$refs.input.setCustomValidity(this.response.isValid ? "" : this.invalidMsg), this.$emit("input", this.response.number), this.$emit("onInput", this.response);
        },
        onBlur: function onBlur() {
          this.$emit("onBlur");
        },
        toggleDropdown: function toggleDropdown() {
          this.disabled || (this.open = !this.open);
        },
        clickedOutside: function clickedOutside() {
          this.open = !1;
        },
        keyboardNav: function keyboardNav(t) {
          var e = this;

          if (40 === t.keyCode) {
            this.open = !0, null === this.selectedIndex ? this.selectedIndex = 0 : this.selectedIndex = Math.min(this.sortedCountries.length - 1, this.selectedIndex + 1);
            var n = this.$refs.list.children[this.selectedIndex];
            n.offsetTop + n.clientHeight > this.$refs.list.scrollTop + this.$refs.list.clientHeight && (this.$refs.list.scrollTop = n.offsetTop - this.$refs.list.clientHeight + n.clientHeight);
          } else if (38 === t.keyCode) {
            this.open = !0, null === this.selectedIndex ? this.selectedIndex = this.sortedCountries.length - 1 : this.selectedIndex = Math.max(0, this.selectedIndex - 1);
            var r = this.$refs.list.children[this.selectedIndex];
            r.offsetTop < this.$refs.list.scrollTop && (this.$refs.list.scrollTop = r.offsetTop);
          } else if (13 === t.keyCode) null !== this.selectedIndex && this.choose(this.sortedCountries[this.selectedIndex]), this.open = !this.open;else {
            this.typeToFindInput += t.key, clearTimeout(this.typeToFindTimer), this.typeToFindTimer = setTimeout(function () {
              e.typeToFindInput = "";
            }, 700);
            var i = this.sortedCountries.slice(this.preferredCountries.length).findIndex(function (t) {
              return t.name.toLowerCase().startsWith(e.typeToFindInput);
            });

            if (~i) {
              this.selectedIndex = this.preferredCountries.length + i;
              var o = this.$refs.list.children[this.selectedIndex];
              (o.offsetTop < this.$refs.list.scrollTop || o.offsetTop + o.clientHeight > this.$refs.list.scrollTop + this.$refs.list.clientHeight) && (this.$refs.list.scrollTop = o.offsetTop - this.$refs.list.clientHeight / 2);
            }
          }
        },
        reset: function reset() {
          this.selectedIndex = this.sortedCountries.map(function (t) {
            return t.iso2;
          }).indexOf(this.activeCountry.iso2), this.open = !1;
        }
      },
      directives: {
        "click-outside": {
          bind: function bind(t, e, n) {
            if ("function" != typeof e.value) {
              var r = n.context.name,
                  i = "[Vue-click-outside:] provided expression " + e.expression + " is not a function, but has to be";
              r && (i += "Found in component " + r), console.warn(i);
            }

            var o = e.modifiers.bubble,
                a = function a(n) {
              (o || !t.contains(n.target) && t !== n.target) && e.value(n);
            };

            t.__vueClickOutside__ = a, document.addEventListener("click", a);
          },
          unbind: function unbind(t, e) {
            document.removeEventListener("click", t.__vueClickOutside__), t.__vueClickOutside__ = null;
          }
        }
      }
    };
    n(139), n(141);

    var Rt = function (t, e, n, r, i, o, a, d) {
      var s,
          u = "function" == typeof t ? t.options : t;
      if (e && (u.render = e, u.staticRenderFns = n, u._compiled = !0), r && (u.functional = !0), o && (u._scopeId = "data-v-" + o), a ? (s = function s(t) {
        (t = t || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) || "undefined" == typeof __VUE_SSR_CONTEXT__ || (t = __VUE_SSR_CONTEXT__), i && i.call(this, t), t && t._registeredComponents && t._registeredComponents.add(a);
      }, u._ssrRegister = s) : i && (s = d ? function () {
        i.call(this, this.$root.$options.shadowRoot);
      } : i), s) if (u.functional) {
        u._injectStyles = s;
        var l = u.render;

        u.render = function (t, e) {
          return s.call(e), l(t, e);
        };
      } else {
        var f = u.beforeCreate;
        u.beforeCreate = f ? [].concat(f, s) : [s];
      }
      return {
        exports: t,
        options: u
      };
    }(At, function () {
      var t = this,
          e = t.$createElement,
          n = t._self._c || e;
      return n("div", {
        staticClass: "vue-tel-input",
        class: {
          disabled: t.disabled
        }
      }, [n("div", {
        directives: [{
          name: "click-outside",
          rawName: "v-click-outside",
          value: t.clickedOutside,
          expression: "clickedOutside"
        }],
        staticClass: "dropdown",
        class: {
          open: t.open
        },
        attrs: {
          tabindex: "0"
        },
        on: {
          click: t.toggleDropdown,
          keydown: [t.keyboardNav, function (e) {
            return "button" in e || !t._k(e.keyCode, "esc", 27, e.key, "Escape") ? t.reset(e) : null;
          }]
        }
      }, [n("span", {
        staticClass: "selection"
      }, [n("div", {
        staticClass: "iti-flag",
        class: t.activeCountry.iso2.toLowerCase()
      }), t._v(" "), n("span", {
        staticClass: "dropdown-arrow"
      }, [t._v("\n        " + t._s(t.open ? "▲" : "▼") + "\n      ")])]), t._v(" "), n("ul", {
        directives: [{
          name: "show",
          rawName: "v-show",
          value: t.open,
          expression: "open"
        }],
        ref: "list"
      }, t._l(t.sortedCountries, function (e, r) {
        return n("li", {
          key: e.iso2 + (e.preferred ? "-preferred" : ""),
          staticClass: "dropdown-item",
          class: t.getItemClass(r, e.iso2),
          on: {
            click: function click(n) {
              t.choose(e);
            },
            mousemove: function mousemove(e) {
              t.selectedIndex = r;
            }
          }
        }, [n("div", {
          staticClass: "iti-flag",
          class: e.iso2.toLowerCase()
        }), t._v(" "), n("strong", [t._v(t._s(e.name) + " ")]), t._v(" "), n("span", [t._v("+" + t._s(e.dialCode))])]);
      }))]), t._v(" "), n("input", {
        directives: [{
          name: "model",
          rawName: "v-model",
          value: t.phone,
          expression: "phone"
        }],
        ref: "input",
        staticClass: "input",
        attrs: {
          type: "tel",
          placeholder: t.placeholder,
          state: t.state,
          formatter: t.format,
          disabled: t.disabled,
          required: t.required
        },
        domProps: {
          value: t.phone
        },
        on: {
          blur: t.onBlur,
          input: [function (e) {
            e.target.composing || (t.phone = e.target.value);
          }, t.onInput]
        }
      })]);
    }, [], !1, null, "c6718c38", null);

    Rt.options.__file = "vue-tel-input.vue";
    var Tt = Rt.exports;

    function Ct(t, e, n) {
      return e in t ? Object.defineProperty(t, e, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : t[e] = n, t;
    }

    e.default = function (t) {
      for (var e = 1; e < arguments.length; e++) {
        var n = null != arguments[e] ? arguments[e] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function (t) {
          return Object.getOwnPropertyDescriptor(n, t).enumerable;
        }))), r.forEach(function (e) {
          Ct(t, e, n[e]);
        });
      }

      return t;
    }({}, Tt, {
      install: function install(t) {
        return t.component(Tt.name, Tt), t;
      }
    });
  }]);
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/timers-browserify/main.js */ 1).setImmediate, __webpack_require__(/*! ./../node_modules/timers-browserify/main.js */ 1).clearImmediate, __webpack_require__(/*! ./../node_modules/webpack/buildin/module.js */ 8)(module)))

/***/ }),
/* 4 */,
/* 5 */
/*!*****************************!*\
  !*** multi ./demo/index.js ***!
  \*****************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/ibanzajoe/work/phoneInput/demo/index.js */11);


/***/ }),
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */
/*!********************************!*\
  !*** ./dist/vue-tel-input.css ***!
  \********************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 10 */,
/* 11 */
/*!***********************************!*\
  !*** ./demo/index.js + 5 modules ***!
  \***********************************/
/*! no exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Cannot concat with ./dist/vue-tel-input.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/vue-loader/lib/runtime/componentNormalizer.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/vue/dist/vue.runtime.esm.js (<- Module uses injected variables (global, setImmediate)) */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.runtime.esm.js
var vue_runtime_esm = __webpack_require__(0);

// EXTERNAL MODULE: ./dist/vue-tel-input.js
var vue_tel_input = __webpack_require__(3);
var vue_tel_input_default = /*#__PURE__*/__webpack_require__.n(vue_tel_input);

// EXTERNAL MODULE: ./dist/vue-tel-input.css
var dist_vue_tel_input = __webpack_require__(9);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./demo/App.vue?vue&type=template&id=e56a6a6e&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"app"}},[_c('h1',[_vm._v("Telephone Input Vue")]),_vm._v(" "),_c('h2',{staticStyle:{"color":"#999"}},[_vm._v("made with ❤ by Steven.")]),_vm._v(" "),_c('div',{staticStyle:{"width":"500px","margin":"20px auto"}},[_c('vue-tel-input',{attrs:{"preferredCountries":['us', 'gb', 'ua']},on:{"onInput":_vm.onInput}})],1),_vm._v(" "),(_vm.phone.number)?_c('div',{staticStyle:{"color":"#e83e8c"}},[_c('span',[_vm._v("Number:\n      "),_c('strong',[_vm._v(_vm._s(_vm.phone.number))]),_vm._v(", \n    ")]),_vm._v(" "),_c('span',[_vm._v("Is valid:\n      "),_c('strong',[_vm._v(_vm._s(_vm.phone.isValid))]),_vm._v(", \n    ")]),_vm._v(" "),_c('span',[_vm._v("Country:\n      "),_c('strong',[_vm._v(_vm._s(_vm.phone.country))])])]):_vm._e()])}
var staticRenderFns = []


// CONCATENATED MODULE: ./demo/App.vue?vue&type=template&id=e56a6a6e&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--5-0!./node_modules/vue-loader/lib??vue-loader-options!./demo/App.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var Appvue_type_script_lang_js_ = ({
  name: 'app',
  data: function data() {
    return {
      phone: {
        number: '',
        isValid: false,
        country: undefined
      }
    };
  },
  methods: {
    onInput: function onInput(_ref) {
      var number = _ref.number,
          isValid = _ref.isValid,
          country = _ref.country;
      this.phone.number = number;
      this.phone.isValid = isValid;
      this.phone.country = country && country.name;
    }
  }
});
// CONCATENATED MODULE: ./demo/App.vue?vue&type=script&lang=js&
 /* harmony default export */ var demo_Appvue_type_script_lang_js_ = (Appvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(4);

// CONCATENATED MODULE: ./demo/App.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  demo_Appvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

component.options.__file = "App.vue"
/* harmony default export */ var App = (component.exports);
// CONCATENATED MODULE: ./demo/index.js
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





vue_runtime_esm["a" /* default */].use(vue_tel_input_default.a);
vue_runtime_esm["a" /* default */].config.productionTip = false;
/* eslint-disable no-new */

new vue_runtime_esm["a" /* default */](_objectSpread({}, App)).$mount('#app');

/***/ })
/******/ ]);