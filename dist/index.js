var Mn = Object.defineProperty;
var kn = (e, t, r) => t in e ? Mn(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r;
var Ge = (e, t, r) => kn(e, typeof t != "symbol" ? t + "" : t, r);
import * as F from "react";
import Ke, { isValidElement as ft, cloneElement as pt, Children as In, useState as _n } from "react";
import { jsx as ne, jsxs as Xt } from "react/jsx-runtime";
import Bn from "@emotion/styled";
import { keyframes as et, css as en } from "@emotion/react";
function Fe(e, ...t) {
  const r = new URL(`https://mui.com/production-error/?code=${e}`);
  return t.forEach((n) => r.searchParams.append("args[]", n)), `Minified MUI error #${e}; visit ${r} for the full message.`;
}
const Nn = "$$material";
function Dn(e) {
  for (var t = 0, r, n = 0, o = e.length; o >= 4; ++n, o -= 4)
    r = e.charCodeAt(n) & 255 | (e.charCodeAt(++n) & 255) << 8 | (e.charCodeAt(++n) & 255) << 16 | (e.charCodeAt(++n) & 255) << 24, r = /* Math.imul(k, m): */
    (r & 65535) * 1540483477 + ((r >>> 16) * 59797 << 16), r ^= /* k >>> r: */
    r >>> 24, t = /* Math.imul(k, m): */
    (r & 65535) * 1540483477 + ((r >>> 16) * 59797 << 16) ^ /* Math.imul(h, m): */
    (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16);
  switch (o) {
    case 3:
      t ^= (e.charCodeAt(n + 2) & 255) << 16;
    case 2:
      t ^= (e.charCodeAt(n + 1) & 255) << 8;
    case 1:
      t ^= e.charCodeAt(n) & 255, t = /* Math.imul(h, m): */
      (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16);
  }
  return t ^= t >>> 13, t = /* Math.imul(h, m): */
  (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16), ((t ^ t >>> 15) >>> 0).toString(36);
}
var zn = {
  animationIterationCount: 1,
  aspectRatio: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  scale: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
};
function Vn(e) {
  var t = /* @__PURE__ */ Object.create(null);
  return function(r) {
    return t[r] === void 0 && (t[r] = e(r)), t[r];
  };
}
var jn = /[A-Z]|^ms/g, Ln = /_EMO_([^_]+?)_([^]*?)_EMO_/g, tn = function(t) {
  return t.charCodeAt(1) === 45;
}, gr = function(t) {
  return t != null && typeof t != "boolean";
}, kt = /* @__PURE__ */ Vn(function(e) {
  return tn(e) ? e : e.replace(jn, "-$&").toLowerCase();
}), hr = function(t, r) {
  switch (t) {
    case "animation":
    case "animationName":
      if (typeof r == "string")
        return r.replace(Ln, function(n, o, i) {
          return Oe = {
            name: o,
            styles: i,
            next: Oe
          }, o;
        });
  }
  return zn[t] !== 1 && !tn(t) && typeof r == "number" && r !== 0 ? r + "px" : r;
};
function mt(e, t, r) {
  if (r == null)
    return "";
  var n = r;
  if (n.__emotion_styles !== void 0)
    return n;
  switch (typeof r) {
    case "boolean":
      return "";
    case "object": {
      var o = r;
      if (o.anim === 1)
        return Oe = {
          name: o.name,
          styles: o.styles,
          next: Oe
        }, o.name;
      var i = r;
      if (i.styles !== void 0) {
        var s = i.next;
        if (s !== void 0)
          for (; s !== void 0; )
            Oe = {
              name: s.name,
              styles: s.styles,
              next: Oe
            }, s = s.next;
        var a = i.styles + ";";
        return a;
      }
      return Wn(e, t, r);
    }
  }
  var d = r;
  return d;
}
function Wn(e, t, r) {
  var n = "";
  if (Array.isArray(r))
    for (var o = 0; o < r.length; o++)
      n += mt(e, t, r[o]) + ";";
  else
    for (var i in r) {
      var s = r[i];
      if (typeof s != "object") {
        var a = s;
        gr(a) && (n += kt(i) + ":" + hr(i, a) + ";");
      } else if (Array.isArray(s) && typeof s[0] == "string" && t == null)
        for (var d = 0; d < s.length; d++)
          gr(s[d]) && (n += kt(i) + ":" + hr(i, s[d]) + ";");
      else {
        var f = mt(e, t, s);
        switch (i) {
          case "animation":
          case "animationName": {
            n += kt(i) + ":" + f + ";";
            break;
          }
          default:
            n += i + "{" + f + "}";
        }
      }
    }
  return n;
}
var mr = /label:\s*([^\s;{]+)\s*(;|$)/g, Oe;
function Un(e, t, r) {
  if (e.length === 1 && typeof e[0] == "object" && e[0] !== null && e[0].styles !== void 0)
    return e[0];
  var n = !0, o = "";
  Oe = void 0;
  var i = e[0];
  if (i == null || i.raw === void 0)
    n = !1, o += mt(r, t, i);
  else {
    var s = i;
    o += s[0];
  }
  for (var a = 1; a < e.length; a++)
    if (o += mt(r, t, e[a]), n) {
      var d = i;
      o += d[a];
    }
  mr.lastIndex = 0;
  for (var f = "", g; (g = mr.exec(o)) !== null; )
    f += "-" + g[1];
  var p = Dn(o) + f;
  return {
    name: p,
    styles: o,
    next: Oe
  };
}
function Yn(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var at = { exports: {} }, st = { exports: {} }, U = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var yr;
function Gn() {
  if (yr) return U;
  yr = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, s = e ? Symbol.for("react.provider") : 60109, a = e ? Symbol.for("react.context") : 60110, d = e ? Symbol.for("react.async_mode") : 60111, f = e ? Symbol.for("react.concurrent_mode") : 60111, g = e ? Symbol.for("react.forward_ref") : 60112, p = e ? Symbol.for("react.suspense") : 60113, m = e ? Symbol.for("react.suspense_list") : 60120, S = e ? Symbol.for("react.memo") : 60115, b = e ? Symbol.for("react.lazy") : 60116, c = e ? Symbol.for("react.block") : 60121, E = e ? Symbol.for("react.fundamental") : 60117, $ = e ? Symbol.for("react.responder") : 60118, k = e ? Symbol.for("react.scope") : 60119;
  function O(y) {
    if (typeof y == "object" && y !== null) {
      var A = y.$$typeof;
      switch (A) {
        case t:
          switch (y = y.type, y) {
            case d:
            case f:
            case n:
            case i:
            case o:
            case p:
              return y;
            default:
              switch (y = y && y.$$typeof, y) {
                case a:
                case g:
                case b:
                case S:
                case s:
                  return y;
                default:
                  return A;
              }
          }
        case r:
          return A;
      }
    }
  }
  function v(y) {
    return O(y) === f;
  }
  return U.AsyncMode = d, U.ConcurrentMode = f, U.ContextConsumer = a, U.ContextProvider = s, U.Element = t, U.ForwardRef = g, U.Fragment = n, U.Lazy = b, U.Memo = S, U.Portal = r, U.Profiler = i, U.StrictMode = o, U.Suspense = p, U.isAsyncMode = function(y) {
    return v(y) || O(y) === d;
  }, U.isConcurrentMode = v, U.isContextConsumer = function(y) {
    return O(y) === a;
  }, U.isContextProvider = function(y) {
    return O(y) === s;
  }, U.isElement = function(y) {
    return typeof y == "object" && y !== null && y.$$typeof === t;
  }, U.isForwardRef = function(y) {
    return O(y) === g;
  }, U.isFragment = function(y) {
    return O(y) === n;
  }, U.isLazy = function(y) {
    return O(y) === b;
  }, U.isMemo = function(y) {
    return O(y) === S;
  }, U.isPortal = function(y) {
    return O(y) === r;
  }, U.isProfiler = function(y) {
    return O(y) === i;
  }, U.isStrictMode = function(y) {
    return O(y) === o;
  }, U.isSuspense = function(y) {
    return O(y) === p;
  }, U.isValidElementType = function(y) {
    return typeof y == "string" || typeof y == "function" || y === n || y === f || y === i || y === o || y === p || y === m || typeof y == "object" && y !== null && (y.$$typeof === b || y.$$typeof === S || y.$$typeof === s || y.$$typeof === a || y.$$typeof === g || y.$$typeof === E || y.$$typeof === $ || y.$$typeof === k || y.$$typeof === c);
  }, U.typeOf = O, U;
}
var Y = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var br;
function qn() {
  return br || (br = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, s = e ? Symbol.for("react.provider") : 60109, a = e ? Symbol.for("react.context") : 60110, d = e ? Symbol.for("react.async_mode") : 60111, f = e ? Symbol.for("react.concurrent_mode") : 60111, g = e ? Symbol.for("react.forward_ref") : 60112, p = e ? Symbol.for("react.suspense") : 60113, m = e ? Symbol.for("react.suspense_list") : 60120, S = e ? Symbol.for("react.memo") : 60115, b = e ? Symbol.for("react.lazy") : 60116, c = e ? Symbol.for("react.block") : 60121, E = e ? Symbol.for("react.fundamental") : 60117, $ = e ? Symbol.for("react.responder") : 60118, k = e ? Symbol.for("react.scope") : 60119;
    function O(w) {
      return typeof w == "string" || typeof w == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      w === n || w === f || w === i || w === o || w === p || w === m || typeof w == "object" && w !== null && (w.$$typeof === b || w.$$typeof === S || w.$$typeof === s || w.$$typeof === a || w.$$typeof === g || w.$$typeof === E || w.$$typeof === $ || w.$$typeof === k || w.$$typeof === c);
    }
    function v(w) {
      if (typeof w == "object" && w !== null) {
        var me = w.$$typeof;
        switch (me) {
          case t:
            var we = w.type;
            switch (we) {
              case d:
              case f:
              case n:
              case i:
              case o:
              case p:
                return we;
              default:
                var ot = we && we.$$typeof;
                switch (ot) {
                  case a:
                  case g:
                  case b:
                  case S:
                  case s:
                    return ot;
                  default:
                    return me;
                }
            }
          case r:
            return me;
        }
      }
    }
    var y = d, A = f, q = a, Q = s, te = t, l = g, x = n, R = b, P = S, L = r, oe = i, ee = o, ce = p, pe = !1;
    function se(w) {
      return pe || (pe = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), C(w) || v(w) === d;
    }
    function C(w) {
      return v(w) === f;
    }
    function T(w) {
      return v(w) === a;
    }
    function I(w) {
      return v(w) === s;
    }
    function N(w) {
      return typeof w == "object" && w !== null && w.$$typeof === t;
    }
    function M(w) {
      return v(w) === g;
    }
    function z(w) {
      return v(w) === n;
    }
    function _(w) {
      return v(w) === b;
    }
    function D(w) {
      return v(w) === S;
    }
    function V(w) {
      return v(w) === r;
    }
    function W(w) {
      return v(w) === i;
    }
    function j(w) {
      return v(w) === o;
    }
    function de(w) {
      return v(w) === p;
    }
    Y.AsyncMode = y, Y.ConcurrentMode = A, Y.ContextConsumer = q, Y.ContextProvider = Q, Y.Element = te, Y.ForwardRef = l, Y.Fragment = x, Y.Lazy = R, Y.Memo = P, Y.Portal = L, Y.Profiler = oe, Y.StrictMode = ee, Y.Suspense = ce, Y.isAsyncMode = se, Y.isConcurrentMode = C, Y.isContextConsumer = T, Y.isContextProvider = I, Y.isElement = N, Y.isForwardRef = M, Y.isFragment = z, Y.isLazy = _, Y.isMemo = D, Y.isPortal = V, Y.isProfiler = W, Y.isStrictMode = j, Y.isSuspense = de, Y.isValidElementType = O, Y.typeOf = v;
  }()), Y;
}
var vr;
function rn() {
  return vr || (vr = 1, process.env.NODE_ENV === "production" ? st.exports = Gn() : st.exports = qn()), st.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var It, Cr;
function Kn() {
  if (Cr) return It;
  Cr = 1;
  var e = Object.getOwnPropertySymbols, t = Object.prototype.hasOwnProperty, r = Object.prototype.propertyIsEnumerable;
  function n(i) {
    if (i == null)
      throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(i);
  }
  function o() {
    try {
      if (!Object.assign)
        return !1;
      var i = new String("abc");
      if (i[5] = "de", Object.getOwnPropertyNames(i)[0] === "5")
        return !1;
      for (var s = {}, a = 0; a < 10; a++)
        s["_" + String.fromCharCode(a)] = a;
      var d = Object.getOwnPropertyNames(s).map(function(g) {
        return s[g];
      });
      if (d.join("") !== "0123456789")
        return !1;
      var f = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(g) {
        f[g] = g;
      }), Object.keys(Object.assign({}, f)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return It = o() ? Object.assign : function(i, s) {
    for (var a, d = n(i), f, g = 1; g < arguments.length; g++) {
      a = Object(arguments[g]);
      for (var p in a)
        t.call(a, p) && (d[p] = a[p]);
      if (e) {
        f = e(a);
        for (var m = 0; m < f.length; m++)
          r.call(a, f[m]) && (d[f[m]] = a[f[m]]);
      }
    }
    return d;
  }, It;
}
var _t, Sr;
function Qt() {
  if (Sr) return _t;
  Sr = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return _t = e, _t;
}
var Bt, xr;
function nn() {
  return xr || (xr = 1, Bt = Function.call.bind(Object.prototype.hasOwnProperty)), Bt;
}
var Nt, Er;
function Hn() {
  if (Er) return Nt;
  Er = 1;
  var e = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var t = /* @__PURE__ */ Qt(), r = {}, n = /* @__PURE__ */ nn();
    e = function(i) {
      var s = "Warning: " + i;
      typeof console < "u" && console.error(s);
      try {
        throw new Error(s);
      } catch {
      }
    };
  }
  function o(i, s, a, d, f) {
    if (process.env.NODE_ENV !== "production") {
      for (var g in i)
        if (n(i, g)) {
          var p;
          try {
            if (typeof i[g] != "function") {
              var m = Error(
                (d || "React class") + ": " + a + " type `" + g + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof i[g] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw m.name = "Invariant Violation", m;
            }
            p = i[g](s, g, d, a, null, t);
          } catch (b) {
            p = b;
          }
          if (p && !(p instanceof Error) && e(
            (d || "React class") + ": type specification of " + a + " `" + g + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof p + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), p instanceof Error && !(p.message in r)) {
            r[p.message] = !0;
            var S = f ? f() : "";
            e(
              "Failed " + a + " type: " + p.message + (S ?? "")
            );
          }
        }
    }
  }
  return o.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (r = {});
  }, Nt = o, Nt;
}
var Dt, Tr;
function Xn() {
  if (Tr) return Dt;
  Tr = 1;
  var e = rn(), t = Kn(), r = /* @__PURE__ */ Qt(), n = /* @__PURE__ */ nn(), o = /* @__PURE__ */ Hn(), i = function() {
  };
  process.env.NODE_ENV !== "production" && (i = function(a) {
    var d = "Warning: " + a;
    typeof console < "u" && console.error(d);
    try {
      throw new Error(d);
    } catch {
    }
  });
  function s() {
    return null;
  }
  return Dt = function(a, d) {
    var f = typeof Symbol == "function" && Symbol.iterator, g = "@@iterator";
    function p(C) {
      var T = C && (f && C[f] || C[g]);
      if (typeof T == "function")
        return T;
    }
    var m = "<<anonymous>>", S = {
      array: $("array"),
      bigint: $("bigint"),
      bool: $("boolean"),
      func: $("function"),
      number: $("number"),
      object: $("object"),
      string: $("string"),
      symbol: $("symbol"),
      any: k(),
      arrayOf: O,
      element: v(),
      elementType: y(),
      instanceOf: A,
      node: l(),
      objectOf: Q,
      oneOf: q,
      oneOfType: te,
      shape: R,
      exact: P
    };
    function b(C, T) {
      return C === T ? C !== 0 || 1 / C === 1 / T : C !== C && T !== T;
    }
    function c(C, T) {
      this.message = C, this.data = T && typeof T == "object" ? T : {}, this.stack = "";
    }
    c.prototype = Error.prototype;
    function E(C) {
      if (process.env.NODE_ENV !== "production")
        var T = {}, I = 0;
      function N(z, _, D, V, W, j, de) {
        if (V = V || m, j = j || D, de !== r) {
          if (d) {
            var w = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw w.name = "Invariant Violation", w;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var me = V + ":" + D;
            !T[me] && // Avoid spamming the console because they are often not actionable except for lib authors
            I < 3 && (i(
              "You are manually calling a React.PropTypes validation function for the `" + j + "` prop on `" + V + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), T[me] = !0, I++);
          }
        }
        return _[D] == null ? z ? _[D] === null ? new c("The " + W + " `" + j + "` is marked as required " + ("in `" + V + "`, but its value is `null`.")) : new c("The " + W + " `" + j + "` is marked as required in " + ("`" + V + "`, but its value is `undefined`.")) : null : C(_, D, V, W, j);
      }
      var M = N.bind(null, !1);
      return M.isRequired = N.bind(null, !0), M;
    }
    function $(C) {
      function T(I, N, M, z, _, D) {
        var V = I[N], W = ee(V);
        if (W !== C) {
          var j = ce(V);
          return new c(
            "Invalid " + z + " `" + _ + "` of type " + ("`" + j + "` supplied to `" + M + "`, expected ") + ("`" + C + "`."),
            { expectedType: C }
          );
        }
        return null;
      }
      return E(T);
    }
    function k() {
      return E(s);
    }
    function O(C) {
      function T(I, N, M, z, _) {
        if (typeof C != "function")
          return new c("Property `" + _ + "` of component `" + M + "` has invalid PropType notation inside arrayOf.");
        var D = I[N];
        if (!Array.isArray(D)) {
          var V = ee(D);
          return new c("Invalid " + z + " `" + _ + "` of type " + ("`" + V + "` supplied to `" + M + "`, expected an array."));
        }
        for (var W = 0; W < D.length; W++) {
          var j = C(D, W, M, z, _ + "[" + W + "]", r);
          if (j instanceof Error)
            return j;
        }
        return null;
      }
      return E(T);
    }
    function v() {
      function C(T, I, N, M, z) {
        var _ = T[I];
        if (!a(_)) {
          var D = ee(_);
          return new c("Invalid " + M + " `" + z + "` of type " + ("`" + D + "` supplied to `" + N + "`, expected a single ReactElement."));
        }
        return null;
      }
      return E(C);
    }
    function y() {
      function C(T, I, N, M, z) {
        var _ = T[I];
        if (!e.isValidElementType(_)) {
          var D = ee(_);
          return new c("Invalid " + M + " `" + z + "` of type " + ("`" + D + "` supplied to `" + N + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return E(C);
    }
    function A(C) {
      function T(I, N, M, z, _) {
        if (!(I[N] instanceof C)) {
          var D = C.name || m, V = se(I[N]);
          return new c("Invalid " + z + " `" + _ + "` of type " + ("`" + V + "` supplied to `" + M + "`, expected ") + ("instance of `" + D + "`."));
        }
        return null;
      }
      return E(T);
    }
    function q(C) {
      if (!Array.isArray(C))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? i(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : i("Invalid argument supplied to oneOf, expected an array.")), s;
      function T(I, N, M, z, _) {
        for (var D = I[N], V = 0; V < C.length; V++)
          if (b(D, C[V]))
            return null;
        var W = JSON.stringify(C, function(de, w) {
          var me = ce(w);
          return me === "symbol" ? String(w) : w;
        });
        return new c("Invalid " + z + " `" + _ + "` of value `" + String(D) + "` " + ("supplied to `" + M + "`, expected one of " + W + "."));
      }
      return E(T);
    }
    function Q(C) {
      function T(I, N, M, z, _) {
        if (typeof C != "function")
          return new c("Property `" + _ + "` of component `" + M + "` has invalid PropType notation inside objectOf.");
        var D = I[N], V = ee(D);
        if (V !== "object")
          return new c("Invalid " + z + " `" + _ + "` of type " + ("`" + V + "` supplied to `" + M + "`, expected an object."));
        for (var W in D)
          if (n(D, W)) {
            var j = C(D, W, M, z, _ + "." + W, r);
            if (j instanceof Error)
              return j;
          }
        return null;
      }
      return E(T);
    }
    function te(C) {
      if (!Array.isArray(C))
        return process.env.NODE_ENV !== "production" && i("Invalid argument supplied to oneOfType, expected an instance of array."), s;
      for (var T = 0; T < C.length; T++) {
        var I = C[T];
        if (typeof I != "function")
          return i(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + pe(I) + " at index " + T + "."
          ), s;
      }
      function N(M, z, _, D, V) {
        for (var W = [], j = 0; j < C.length; j++) {
          var de = C[j], w = de(M, z, _, D, V, r);
          if (w == null)
            return null;
          w.data && n(w.data, "expectedType") && W.push(w.data.expectedType);
        }
        var me = W.length > 0 ? ", expected one of type [" + W.join(", ") + "]" : "";
        return new c("Invalid " + D + " `" + V + "` supplied to " + ("`" + _ + "`" + me + "."));
      }
      return E(N);
    }
    function l() {
      function C(T, I, N, M, z) {
        return L(T[I]) ? null : new c("Invalid " + M + " `" + z + "` supplied to " + ("`" + N + "`, expected a ReactNode."));
      }
      return E(C);
    }
    function x(C, T, I, N, M) {
      return new c(
        (C || "React class") + ": " + T + " type `" + I + "." + N + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + M + "`."
      );
    }
    function R(C) {
      function T(I, N, M, z, _) {
        var D = I[N], V = ee(D);
        if (V !== "object")
          return new c("Invalid " + z + " `" + _ + "` of type `" + V + "` " + ("supplied to `" + M + "`, expected `object`."));
        for (var W in C) {
          var j = C[W];
          if (typeof j != "function")
            return x(M, z, _, W, ce(j));
          var de = j(D, W, M, z, _ + "." + W, r);
          if (de)
            return de;
        }
        return null;
      }
      return E(T);
    }
    function P(C) {
      function T(I, N, M, z, _) {
        var D = I[N], V = ee(D);
        if (V !== "object")
          return new c("Invalid " + z + " `" + _ + "` of type `" + V + "` " + ("supplied to `" + M + "`, expected `object`."));
        var W = t({}, I[N], C);
        for (var j in W) {
          var de = C[j];
          if (n(C, j) && typeof de != "function")
            return x(M, z, _, j, ce(de));
          if (!de)
            return new c(
              "Invalid " + z + " `" + _ + "` key `" + j + "` supplied to `" + M + "`.\nBad object: " + JSON.stringify(I[N], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(C), null, "  ")
            );
          var w = de(D, j, M, z, _ + "." + j, r);
          if (w)
            return w;
        }
        return null;
      }
      return E(T);
    }
    function L(C) {
      switch (typeof C) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !C;
        case "object":
          if (Array.isArray(C))
            return C.every(L);
          if (C === null || a(C))
            return !0;
          var T = p(C);
          if (T) {
            var I = T.call(C), N;
            if (T !== C.entries) {
              for (; !(N = I.next()).done; )
                if (!L(N.value))
                  return !1;
            } else
              for (; !(N = I.next()).done; ) {
                var M = N.value;
                if (M && !L(M[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function oe(C, T) {
      return C === "symbol" ? !0 : T ? T["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && T instanceof Symbol : !1;
    }
    function ee(C) {
      var T = typeof C;
      return Array.isArray(C) ? "array" : C instanceof RegExp ? "object" : oe(T, C) ? "symbol" : T;
    }
    function ce(C) {
      if (typeof C > "u" || C === null)
        return "" + C;
      var T = ee(C);
      if (T === "object") {
        if (C instanceof Date)
          return "date";
        if (C instanceof RegExp)
          return "regexp";
      }
      return T;
    }
    function pe(C) {
      var T = ce(C);
      switch (T) {
        case "array":
        case "object":
          return "an " + T;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + T;
        default:
          return T;
      }
    }
    function se(C) {
      return !C.constructor || !C.constructor.name ? m : C.constructor.name;
    }
    return S.checkPropTypes = o, S.resetWarningCache = o.resetWarningCache, S.PropTypes = S, S;
  }, Dt;
}
var zt, wr;
function Qn() {
  if (wr) return zt;
  wr = 1;
  var e = /* @__PURE__ */ Qt();
  function t() {
  }
  function r() {
  }
  return r.resetWarningCache = t, zt = function() {
    function n(s, a, d, f, g, p) {
      if (p !== e) {
        var m = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw m.name = "Invariant Violation", m;
      }
    }
    n.isRequired = n;
    function o() {
      return n;
    }
    var i = {
      array: n,
      bigint: n,
      bool: n,
      func: n,
      number: n,
      object: n,
      string: n,
      symbol: n,
      any: n,
      arrayOf: o,
      element: n,
      elementType: n,
      instanceOf: o,
      node: n,
      objectOf: o,
      oneOf: o,
      oneOfType: o,
      shape: o,
      exact: o,
      checkPropTypes: r,
      resetWarningCache: t
    };
    return i.PropTypes = i, i;
  }, zt;
}
var $r;
function Jn() {
  if ($r) return at.exports;
  if ($r = 1, process.env.NODE_ENV !== "production") {
    var e = rn(), t = !0;
    at.exports = /* @__PURE__ */ Xn()(e.isElement, t);
  } else
    at.exports = /* @__PURE__ */ Qn()();
  return at.exports;
}
var Zn = /* @__PURE__ */ Jn();
const u = /* @__PURE__ */ Yn(Zn);
/**
 * @mui/styled-engine v7.1.1
 *
 * @license MIT
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
function eo(e, t) {
  const r = Bn(e, t);
  return process.env.NODE_ENV !== "production" ? (...n) => {
    const o = typeof e == "string" ? `"${e}"` : "component";
    return n.length === 0 ? console.error([`MUI: Seems like you called \`styled(${o})()\` without a \`style\` argument.`, 'You must provide a `styles` argument: `styled("div")(styleYouForgotToPass)`.'].join(`
`)) : n.some((i) => i === void 0) && console.error(`MUI: the styled(${o})(...args) API requires all its args to be defined.`), r(...n);
  } : r;
}
function to(e, t) {
  Array.isArray(e.__emotion_styles) && (e.__emotion_styles = t(e.__emotion_styles));
}
const Or = [];
function Rr(e) {
  return Or[0] = e, Un(Or);
}
var lt = { exports: {} }, K = {};
/**
 * @license React
 * react-is.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Pr;
function ro() {
  if (Pr) return K;
  Pr = 1;
  var e = Symbol.for("react.transitional.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), i = Symbol.for("react.consumer"), s = Symbol.for("react.context"), a = Symbol.for("react.forward_ref"), d = Symbol.for("react.suspense"), f = Symbol.for("react.suspense_list"), g = Symbol.for("react.memo"), p = Symbol.for("react.lazy"), m = Symbol.for("react.view_transition"), S = Symbol.for("react.client.reference");
  function b(c) {
    if (typeof c == "object" && c !== null) {
      var E = c.$$typeof;
      switch (E) {
        case e:
          switch (c = c.type, c) {
            case r:
            case o:
            case n:
            case d:
            case f:
            case m:
              return c;
            default:
              switch (c = c && c.$$typeof, c) {
                case s:
                case a:
                case p:
                case g:
                  return c;
                case i:
                  return c;
                default:
                  return E;
              }
          }
        case t:
          return E;
      }
    }
  }
  return K.ContextConsumer = i, K.ContextProvider = s, K.Element = e, K.ForwardRef = a, K.Fragment = r, K.Lazy = p, K.Memo = g, K.Portal = t, K.Profiler = o, K.StrictMode = n, K.Suspense = d, K.SuspenseList = f, K.isContextConsumer = function(c) {
    return b(c) === i;
  }, K.isContextProvider = function(c) {
    return b(c) === s;
  }, K.isElement = function(c) {
    return typeof c == "object" && c !== null && c.$$typeof === e;
  }, K.isForwardRef = function(c) {
    return b(c) === a;
  }, K.isFragment = function(c) {
    return b(c) === r;
  }, K.isLazy = function(c) {
    return b(c) === p;
  }, K.isMemo = function(c) {
    return b(c) === g;
  }, K.isPortal = function(c) {
    return b(c) === t;
  }, K.isProfiler = function(c) {
    return b(c) === o;
  }, K.isStrictMode = function(c) {
    return b(c) === n;
  }, K.isSuspense = function(c) {
    return b(c) === d;
  }, K.isSuspenseList = function(c) {
    return b(c) === f;
  }, K.isValidElementType = function(c) {
    return typeof c == "string" || typeof c == "function" || c === r || c === o || c === n || c === d || c === f || typeof c == "object" && c !== null && (c.$$typeof === p || c.$$typeof === g || c.$$typeof === s || c.$$typeof === i || c.$$typeof === a || c.$$typeof === S || c.getModuleId !== void 0);
  }, K.typeOf = b, K;
}
var H = {};
/**
 * @license React
 * react-is.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Fr;
function no() {
  return Fr || (Fr = 1, process.env.NODE_ENV !== "production" && function() {
    function e(c) {
      if (typeof c == "object" && c !== null) {
        var E = c.$$typeof;
        switch (E) {
          case t:
            switch (c = c.type, c) {
              case n:
              case i:
              case o:
              case f:
              case g:
              case S:
                return c;
              default:
                switch (c = c && c.$$typeof, c) {
                  case a:
                  case d:
                  case m:
                  case p:
                    return c;
                  case s:
                    return c;
                  default:
                    return E;
                }
            }
          case r:
            return E;
        }
      }
    }
    var t = Symbol.for("react.transitional.element"), r = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), s = Symbol.for("react.consumer"), a = Symbol.for("react.context"), d = Symbol.for("react.forward_ref"), f = Symbol.for("react.suspense"), g = Symbol.for("react.suspense_list"), p = Symbol.for("react.memo"), m = Symbol.for("react.lazy"), S = Symbol.for("react.view_transition"), b = Symbol.for("react.client.reference");
    H.ContextConsumer = s, H.ContextProvider = a, H.Element = t, H.ForwardRef = d, H.Fragment = n, H.Lazy = m, H.Memo = p, H.Portal = r, H.Profiler = i, H.StrictMode = o, H.Suspense = f, H.SuspenseList = g, H.isContextConsumer = function(c) {
      return e(c) === s;
    }, H.isContextProvider = function(c) {
      return e(c) === a;
    }, H.isElement = function(c) {
      return typeof c == "object" && c !== null && c.$$typeof === t;
    }, H.isForwardRef = function(c) {
      return e(c) === d;
    }, H.isFragment = function(c) {
      return e(c) === n;
    }, H.isLazy = function(c) {
      return e(c) === m;
    }, H.isMemo = function(c) {
      return e(c) === p;
    }, H.isPortal = function(c) {
      return e(c) === r;
    }, H.isProfiler = function(c) {
      return e(c) === i;
    }, H.isStrictMode = function(c) {
      return e(c) === o;
    }, H.isSuspense = function(c) {
      return e(c) === f;
    }, H.isSuspenseList = function(c) {
      return e(c) === g;
    }, H.isValidElementType = function(c) {
      return typeof c == "string" || typeof c == "function" || c === n || c === i || c === o || c === f || c === g || typeof c == "object" && c !== null && (c.$$typeof === m || c.$$typeof === p || c.$$typeof === a || c.$$typeof === s || c.$$typeof === d || c.$$typeof === b || c.getModuleId !== void 0);
    }, H.typeOf = e;
  }()), H;
}
var Ar;
function oo() {
  return Ar || (Ar = 1, process.env.NODE_ENV === "production" ? lt.exports = /* @__PURE__ */ ro() : lt.exports = /* @__PURE__ */ no()), lt.exports;
}
var yt = /* @__PURE__ */ oo();
function Ee(e) {
  if (typeof e != "object" || e === null)
    return !1;
  const t = Object.getPrototypeOf(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}
function on(e) {
  if (/* @__PURE__ */ F.isValidElement(e) || yt.isValidElementType(e) || !Ee(e))
    return e;
  const t = {};
  return Object.keys(e).forEach((r) => {
    t[r] = on(e[r]);
  }), t;
}
function he(e, t, r = {
  clone: !0
}) {
  const n = r.clone ? {
    ...e
  } : e;
  return Ee(e) && Ee(t) && Object.keys(t).forEach((o) => {
    /* @__PURE__ */ F.isValidElement(t[o]) || yt.isValidElementType(t[o]) ? n[o] = t[o] : Ee(t[o]) && // Avoid prototype pollution
    Object.prototype.hasOwnProperty.call(e, o) && Ee(e[o]) ? n[o] = he(e[o], t[o], r) : r.clone ? n[o] = Ee(t[o]) ? on(t[o]) : t[o] : n[o] = t[o];
  }), n;
}
const io = (e) => {
  const t = Object.keys(e).map((r) => ({
    key: r,
    val: e[r]
  })) || [];
  return t.sort((r, n) => r.val - n.val), t.reduce((r, n) => ({
    ...r,
    [n.key]: n.val
  }), {});
};
function ao(e) {
  const {
    // The breakpoint **start** at this value.
    // For instance with the first breakpoint xs: [xs, sm).
    values: t = {
      xs: 0,
      // phone
      sm: 600,
      // tablet
      md: 900,
      // small laptop
      lg: 1200,
      // desktop
      xl: 1536
      // large screen
    },
    unit: r = "px",
    step: n = 5,
    ...o
  } = e, i = io(t), s = Object.keys(i);
  function a(m) {
    return `@media (min-width:${typeof t[m] == "number" ? t[m] : m}${r})`;
  }
  function d(m) {
    return `@media (max-width:${(typeof t[m] == "number" ? t[m] : m) - n / 100}${r})`;
  }
  function f(m, S) {
    const b = s.indexOf(S);
    return `@media (min-width:${typeof t[m] == "number" ? t[m] : m}${r}) and (max-width:${(b !== -1 && typeof t[s[b]] == "number" ? t[s[b]] : S) - n / 100}${r})`;
  }
  function g(m) {
    return s.indexOf(m) + 1 < s.length ? f(m, s[s.indexOf(m) + 1]) : a(m);
  }
  function p(m) {
    const S = s.indexOf(m);
    return S === 0 ? a(s[1]) : S === s.length - 1 ? d(s[S]) : f(m, s[s.indexOf(m) + 1]).replace("@media", "@media not all and");
  }
  return {
    keys: s,
    values: i,
    up: a,
    down: d,
    between: f,
    only: g,
    not: p,
    unit: r,
    ...o
  };
}
function so(e, t) {
  if (!e.containerQueries)
    return t;
  const r = Object.keys(t).filter((n) => n.startsWith("@container")).sort((n, o) => {
    var s, a;
    const i = /min-width:\s*([0-9.]+)/;
    return +(((s = n.match(i)) == null ? void 0 : s[1]) || 0) - +(((a = o.match(i)) == null ? void 0 : a[1]) || 0);
  });
  return r.length ? r.reduce((n, o) => {
    const i = t[o];
    return delete n[o], n[o] = i, n;
  }, {
    ...t
  }) : t;
}
function lo(e, t) {
  return t === "@" || t.startsWith("@") && (e.some((r) => t.startsWith(`@${r}`)) || !!t.match(/^@\d/));
}
function co(e, t) {
  const r = t.match(/^@([^/]+)?\/?(.+)?$/);
  if (!r) {
    if (process.env.NODE_ENV !== "production")
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The provided shorthand ${`(${t})`} is invalid. The format should be \`@<breakpoint | number>\` or \`@<breakpoint | number>/<container>\`.
For example, \`@sm\` or \`@600\` or \`@40rem/sidebar\`.` : Fe(18, `(${t})`));
    return null;
  }
  const [, n, o] = r, i = Number.isNaN(+n) ? n || 0 : +n;
  return e.containerQueries(o).up(i);
}
function uo(e) {
  const t = (i, s) => i.replace("@media", s ? `@container ${s}` : "@container");
  function r(i, s) {
    i.up = (...a) => t(e.breakpoints.up(...a), s), i.down = (...a) => t(e.breakpoints.down(...a), s), i.between = (...a) => t(e.breakpoints.between(...a), s), i.only = (...a) => t(e.breakpoints.only(...a), s), i.not = (...a) => {
      const d = t(e.breakpoints.not(...a), s);
      return d.includes("not all and") ? d.replace("not all and ", "").replace("min-width:", "width<").replace("max-width:", "width>").replace("and", "or") : d;
    };
  }
  const n = {}, o = (i) => (r(n, i), n);
  return r(o), {
    ...e,
    containerQueries: o
  };
}
const fo = {
  borderRadius: 4
}, Me = process.env.NODE_ENV !== "production" ? u.oneOfType([u.number, u.string, u.object, u.array]) : {};
function Qe(e, t) {
  return t ? he(e, t, {
    clone: !1
    // No need to clone deep, it's way faster.
  }) : e;
}
const St = {
  xs: 0,
  // phone
  sm: 600,
  // tablet
  md: 900,
  // small laptop
  lg: 1200,
  // desktop
  xl: 1536
  // large screen
}, Mr = {
  // Sorted ASC by size. That's important.
  // It can't be configured as it's used statically for propTypes.
  keys: ["xs", "sm", "md", "lg", "xl"],
  up: (e) => `@media (min-width:${St[e]}px)`
}, po = {
  containerQueries: (e) => ({
    up: (t) => {
      let r = typeof t == "number" ? t : St[t] || t;
      return typeof r == "number" && (r = `${r}px`), e ? `@container ${e} (min-width:${r})` : `@container (min-width:${r})`;
    }
  })
};
function Te(e, t, r) {
  const n = e.theme || {};
  if (Array.isArray(t)) {
    const i = n.breakpoints || Mr;
    return t.reduce((s, a, d) => (s[i.up(i.keys[d])] = r(t[d]), s), {});
  }
  if (typeof t == "object") {
    const i = n.breakpoints || Mr;
    return Object.keys(t).reduce((s, a) => {
      if (lo(i.keys, a)) {
        const d = co(n.containerQueries ? n : po, a);
        d && (s[d] = r(t[a], a));
      } else if (Object.keys(i.values || St).includes(a)) {
        const d = i.up(a);
        s[d] = r(t[a], a);
      } else {
        const d = a;
        s[d] = t[d];
      }
      return s;
    }, {});
  }
  return r(t);
}
function go(e = {}) {
  var r;
  return ((r = e.keys) == null ? void 0 : r.reduce((n, o) => {
    const i = e.up(o);
    return n[i] = {}, n;
  }, {})) || {};
}
function ho(e, t) {
  return e.reduce((r, n) => {
    const o = r[n];
    return (!o || Object.keys(o).length === 0) && delete r[n], r;
  }, t);
}
function X(e) {
  if (typeof e != "string")
    throw new Error(process.env.NODE_ENV !== "production" ? "MUI: `capitalize(string)` expects a string argument." : Fe(7));
  return e.charAt(0).toUpperCase() + e.slice(1);
}
function xt(e, t, r = !0) {
  if (!t || typeof t != "string")
    return null;
  if (e && e.vars && r) {
    const n = `vars.${t}`.split(".").reduce((o, i) => o && o[i] ? o[i] : null, e);
    if (n != null)
      return n;
  }
  return t.split(".").reduce((n, o) => n && n[o] != null ? n[o] : null, e);
}
function bt(e, t, r, n = r) {
  let o;
  return typeof e == "function" ? o = e(r) : Array.isArray(e) ? o = e[r] || n : o = xt(e, r) || n, t && (o = t(o, n, e)), o;
}
function le(e) {
  const {
    prop: t,
    cssProperty: r = e.prop,
    themeKey: n,
    transform: o
  } = e, i = (s) => {
    if (s[t] == null)
      return null;
    const a = s[t], d = s.theme, f = xt(d, n) || {};
    return Te(s, a, (p) => {
      let m = bt(f, o, p);
      return p === m && typeof p == "string" && (m = bt(f, o, `${t}${p === "default" ? "" : X(p)}`, p)), r === !1 ? m : {
        [r]: m
      };
    });
  };
  return i.propTypes = process.env.NODE_ENV !== "production" ? {
    [t]: Me
  } : {}, i.filterProps = [t], i;
}
function mo(e) {
  const t = {};
  return (r) => (t[r] === void 0 && (t[r] = e(r)), t[r]);
}
const yo = {
  m: "margin",
  p: "padding"
}, bo = {
  t: "Top",
  r: "Right",
  b: "Bottom",
  l: "Left",
  x: ["Left", "Right"],
  y: ["Top", "Bottom"]
}, kr = {
  marginX: "mx",
  marginY: "my",
  paddingX: "px",
  paddingY: "py"
}, vo = mo((e) => {
  if (e.length > 2)
    if (kr[e])
      e = kr[e];
    else
      return [e];
  const [t, r] = e.split(""), n = yo[t], o = bo[r] || "";
  return Array.isArray(o) ? o.map((i) => n + i) : [n + o];
}), Et = ["m", "mt", "mr", "mb", "ml", "mx", "my", "margin", "marginTop", "marginRight", "marginBottom", "marginLeft", "marginX", "marginY", "marginInline", "marginInlineStart", "marginInlineEnd", "marginBlock", "marginBlockStart", "marginBlockEnd"], Tt = ["p", "pt", "pr", "pb", "pl", "px", "py", "padding", "paddingTop", "paddingRight", "paddingBottom", "paddingLeft", "paddingX", "paddingY", "paddingInline", "paddingInlineStart", "paddingInlineEnd", "paddingBlock", "paddingBlockStart", "paddingBlockEnd"], Co = [...Et, ...Tt];
function tt(e, t, r, n) {
  const o = xt(e, t, !0) ?? r;
  return typeof o == "number" || typeof o == "string" ? (i) => typeof i == "string" ? i : (process.env.NODE_ENV !== "production" && typeof i != "number" && console.error(`MUI: Expected ${n} argument to be a number or a string, got ${i}.`), typeof o == "string" ? o.startsWith("var(") && i === 0 ? 0 : o.startsWith("var(") && i === 1 ? o : `calc(${i} * ${o})` : o * i) : Array.isArray(o) ? (i) => {
    if (typeof i == "string")
      return i;
    const s = Math.abs(i);
    process.env.NODE_ENV !== "production" && (Number.isInteger(s) ? s > o.length - 1 && console.error([`MUI: The value provided (${s}) overflows.`, `The supported values are: ${JSON.stringify(o)}.`, `${s} > ${o.length - 1}, you need to add the missing values.`].join(`
`)) : console.error([`MUI: The \`theme.${t}\` array type cannot be combined with non integer values.You should either use an integer value that can be used as index, or define the \`theme.${t}\` as a number.`].join(`
`)));
    const a = o[s];
    return i >= 0 ? a : typeof a == "number" ? -a : typeof a == "string" && a.startsWith("var(") ? `calc(-1 * ${a})` : `-${a}`;
  } : typeof o == "function" ? o : (process.env.NODE_ENV !== "production" && console.error([`MUI: The \`theme.${t}\` value (${o}) is invalid.`, "It should be a number, an array or a function."].join(`
`)), () => {
  });
}
function Jt(e) {
  return tt(e, "spacing", 8, "spacing");
}
function rt(e, t) {
  return typeof t == "string" || t == null ? t : e(t);
}
function So(e, t) {
  return (r) => e.reduce((n, o) => (n[o] = rt(t, r), n), {});
}
function xo(e, t, r, n) {
  if (!t.includes(r))
    return null;
  const o = vo(r), i = So(o, n), s = e[r];
  return Te(e, s, i);
}
function an(e, t) {
  const r = Jt(e.theme);
  return Object.keys(e).map((n) => xo(e, t, n, r)).reduce(Qe, {});
}
function ie(e) {
  return an(e, Et);
}
ie.propTypes = process.env.NODE_ENV !== "production" ? Et.reduce((e, t) => (e[t] = Me, e), {}) : {};
ie.filterProps = Et;
function ae(e) {
  return an(e, Tt);
}
ae.propTypes = process.env.NODE_ENV !== "production" ? Tt.reduce((e, t) => (e[t] = Me, e), {}) : {};
ae.filterProps = Tt;
process.env.NODE_ENV !== "production" && Co.reduce((e, t) => (e[t] = Me, e), {});
function sn(e = 8, t = Jt({
  spacing: e
})) {
  if (e.mui)
    return e;
  const r = (...n) => (process.env.NODE_ENV !== "production" && (n.length <= 4 || console.error(`MUI: Too many arguments provided, expected between 0 and 4, got ${n.length}`)), (n.length === 0 ? [1] : n).map((i) => {
    const s = t(i);
    return typeof s == "number" ? `${s}px` : s;
  }).join(" "));
  return r.mui = !0, r;
}
function wt(...e) {
  const t = e.reduce((n, o) => (o.filterProps.forEach((i) => {
    n[i] = o;
  }), n), {}), r = (n) => Object.keys(n).reduce((o, i) => t[i] ? Qe(o, t[i](n)) : o, {});
  return r.propTypes = process.env.NODE_ENV !== "production" ? e.reduce((n, o) => Object.assign(n, o.propTypes), {}) : {}, r.filterProps = e.reduce((n, o) => n.concat(o.filterProps), []), r;
}
function be(e) {
  return typeof e != "number" ? e : `${e}px solid`;
}
function ve(e, t) {
  return le({
    prop: e,
    themeKey: "borders",
    transform: t
  });
}
const Eo = ve("border", be), To = ve("borderTop", be), wo = ve("borderRight", be), $o = ve("borderBottom", be), Oo = ve("borderLeft", be), Ro = ve("borderColor"), Po = ve("borderTopColor"), Fo = ve("borderRightColor"), Ao = ve("borderBottomColor"), Mo = ve("borderLeftColor"), ko = ve("outline", be), Io = ve("outlineColor"), $t = (e) => {
  if (e.borderRadius !== void 0 && e.borderRadius !== null) {
    const t = tt(e.theme, "shape.borderRadius", 4, "borderRadius"), r = (n) => ({
      borderRadius: rt(t, n)
    });
    return Te(e, e.borderRadius, r);
  }
  return null;
};
$t.propTypes = process.env.NODE_ENV !== "production" ? {
  borderRadius: Me
} : {};
$t.filterProps = ["borderRadius"];
wt(Eo, To, wo, $o, Oo, Ro, Po, Fo, Ao, Mo, $t, ko, Io);
const Ot = (e) => {
  if (e.gap !== void 0 && e.gap !== null) {
    const t = tt(e.theme, "spacing", 8, "gap"), r = (n) => ({
      gap: rt(t, n)
    });
    return Te(e, e.gap, r);
  }
  return null;
};
Ot.propTypes = process.env.NODE_ENV !== "production" ? {
  gap: Me
} : {};
Ot.filterProps = ["gap"];
const Rt = (e) => {
  if (e.columnGap !== void 0 && e.columnGap !== null) {
    const t = tt(e.theme, "spacing", 8, "columnGap"), r = (n) => ({
      columnGap: rt(t, n)
    });
    return Te(e, e.columnGap, r);
  }
  return null;
};
Rt.propTypes = process.env.NODE_ENV !== "production" ? {
  columnGap: Me
} : {};
Rt.filterProps = ["columnGap"];
const Pt = (e) => {
  if (e.rowGap !== void 0 && e.rowGap !== null) {
    const t = tt(e.theme, "spacing", 8, "rowGap"), r = (n) => ({
      rowGap: rt(t, n)
    });
    return Te(e, e.rowGap, r);
  }
  return null;
};
Pt.propTypes = process.env.NODE_ENV !== "production" ? {
  rowGap: Me
} : {};
Pt.filterProps = ["rowGap"];
const _o = le({
  prop: "gridColumn"
}), Bo = le({
  prop: "gridRow"
}), No = le({
  prop: "gridAutoFlow"
}), Do = le({
  prop: "gridAutoColumns"
}), zo = le({
  prop: "gridAutoRows"
}), Vo = le({
  prop: "gridTemplateColumns"
}), jo = le({
  prop: "gridTemplateRows"
}), Lo = le({
  prop: "gridTemplateAreas"
}), Wo = le({
  prop: "gridArea"
});
wt(Ot, Rt, Pt, _o, Bo, No, Do, zo, Vo, jo, Lo, Wo);
function je(e, t) {
  return t === "grey" ? t : e;
}
const Uo = le({
  prop: "color",
  themeKey: "palette",
  transform: je
}), Yo = le({
  prop: "bgcolor",
  cssProperty: "backgroundColor",
  themeKey: "palette",
  transform: je
}), Go = le({
  prop: "backgroundColor",
  themeKey: "palette",
  transform: je
});
wt(Uo, Yo, Go);
function ge(e) {
  return e <= 1 && e !== 0 ? `${e * 100}%` : e;
}
const qo = le({
  prop: "width",
  transform: ge
}), Zt = (e) => {
  if (e.maxWidth !== void 0 && e.maxWidth !== null) {
    const t = (r) => {
      var o, i, s, a, d;
      const n = ((s = (i = (o = e.theme) == null ? void 0 : o.breakpoints) == null ? void 0 : i.values) == null ? void 0 : s[r]) || St[r];
      return n ? ((d = (a = e.theme) == null ? void 0 : a.breakpoints) == null ? void 0 : d.unit) !== "px" ? {
        maxWidth: `${n}${e.theme.breakpoints.unit}`
      } : {
        maxWidth: n
      } : {
        maxWidth: ge(r)
      };
    };
    return Te(e, e.maxWidth, t);
  }
  return null;
};
Zt.filterProps = ["maxWidth"];
const Ko = le({
  prop: "minWidth",
  transform: ge
}), Ho = le({
  prop: "height",
  transform: ge
}), Xo = le({
  prop: "maxHeight",
  transform: ge
}), Qo = le({
  prop: "minHeight",
  transform: ge
});
le({
  prop: "size",
  cssProperty: "width",
  transform: ge
});
le({
  prop: "size",
  cssProperty: "height",
  transform: ge
});
const Jo = le({
  prop: "boxSizing"
});
wt(qo, Zt, Ko, Ho, Xo, Qo, Jo);
const Ft = {
  // borders
  border: {
    themeKey: "borders",
    transform: be
  },
  borderTop: {
    themeKey: "borders",
    transform: be
  },
  borderRight: {
    themeKey: "borders",
    transform: be
  },
  borderBottom: {
    themeKey: "borders",
    transform: be
  },
  borderLeft: {
    themeKey: "borders",
    transform: be
  },
  borderColor: {
    themeKey: "palette"
  },
  borderTopColor: {
    themeKey: "palette"
  },
  borderRightColor: {
    themeKey: "palette"
  },
  borderBottomColor: {
    themeKey: "palette"
  },
  borderLeftColor: {
    themeKey: "palette"
  },
  outline: {
    themeKey: "borders",
    transform: be
  },
  outlineColor: {
    themeKey: "palette"
  },
  borderRadius: {
    themeKey: "shape.borderRadius",
    style: $t
  },
  // palette
  color: {
    themeKey: "palette",
    transform: je
  },
  bgcolor: {
    themeKey: "palette",
    cssProperty: "backgroundColor",
    transform: je
  },
  backgroundColor: {
    themeKey: "palette",
    transform: je
  },
  // spacing
  p: {
    style: ae
  },
  pt: {
    style: ae
  },
  pr: {
    style: ae
  },
  pb: {
    style: ae
  },
  pl: {
    style: ae
  },
  px: {
    style: ae
  },
  py: {
    style: ae
  },
  padding: {
    style: ae
  },
  paddingTop: {
    style: ae
  },
  paddingRight: {
    style: ae
  },
  paddingBottom: {
    style: ae
  },
  paddingLeft: {
    style: ae
  },
  paddingX: {
    style: ae
  },
  paddingY: {
    style: ae
  },
  paddingInline: {
    style: ae
  },
  paddingInlineStart: {
    style: ae
  },
  paddingInlineEnd: {
    style: ae
  },
  paddingBlock: {
    style: ae
  },
  paddingBlockStart: {
    style: ae
  },
  paddingBlockEnd: {
    style: ae
  },
  m: {
    style: ie
  },
  mt: {
    style: ie
  },
  mr: {
    style: ie
  },
  mb: {
    style: ie
  },
  ml: {
    style: ie
  },
  mx: {
    style: ie
  },
  my: {
    style: ie
  },
  margin: {
    style: ie
  },
  marginTop: {
    style: ie
  },
  marginRight: {
    style: ie
  },
  marginBottom: {
    style: ie
  },
  marginLeft: {
    style: ie
  },
  marginX: {
    style: ie
  },
  marginY: {
    style: ie
  },
  marginInline: {
    style: ie
  },
  marginInlineStart: {
    style: ie
  },
  marginInlineEnd: {
    style: ie
  },
  marginBlock: {
    style: ie
  },
  marginBlockStart: {
    style: ie
  },
  marginBlockEnd: {
    style: ie
  },
  // display
  displayPrint: {
    cssProperty: !1,
    transform: (e) => ({
      "@media print": {
        display: e
      }
    })
  },
  display: {},
  overflow: {},
  textOverflow: {},
  visibility: {},
  whiteSpace: {},
  // flexbox
  flexBasis: {},
  flexDirection: {},
  flexWrap: {},
  justifyContent: {},
  alignItems: {},
  alignContent: {},
  order: {},
  flex: {},
  flexGrow: {},
  flexShrink: {},
  alignSelf: {},
  justifyItems: {},
  justifySelf: {},
  // grid
  gap: {
    style: Ot
  },
  rowGap: {
    style: Pt
  },
  columnGap: {
    style: Rt
  },
  gridColumn: {},
  gridRow: {},
  gridAutoFlow: {},
  gridAutoColumns: {},
  gridAutoRows: {},
  gridTemplateColumns: {},
  gridTemplateRows: {},
  gridTemplateAreas: {},
  gridArea: {},
  // positions
  position: {},
  zIndex: {
    themeKey: "zIndex"
  },
  top: {},
  right: {},
  bottom: {},
  left: {},
  // shadows
  boxShadow: {
    themeKey: "shadows"
  },
  // sizing
  width: {
    transform: ge
  },
  maxWidth: {
    style: Zt
  },
  minWidth: {
    transform: ge
  },
  height: {
    transform: ge
  },
  maxHeight: {
    transform: ge
  },
  minHeight: {
    transform: ge
  },
  boxSizing: {},
  // typography
  font: {
    themeKey: "font"
  },
  fontFamily: {
    themeKey: "typography"
  },
  fontSize: {
    themeKey: "typography"
  },
  fontStyle: {
    themeKey: "typography"
  },
  fontWeight: {
    themeKey: "typography"
  },
  letterSpacing: {},
  textTransform: {},
  lineHeight: {},
  textAlign: {},
  typography: {
    cssProperty: !1,
    themeKey: "typography"
  }
};
function Zo(...e) {
  const t = e.reduce((n, o) => n.concat(Object.keys(o)), []), r = new Set(t);
  return e.every((n) => r.size === Object.keys(n).length);
}
function ei(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function ti() {
  function e(r, n, o, i) {
    const s = {
      [r]: n,
      theme: o
    }, a = i[r];
    if (!a)
      return {
        [r]: n
      };
    const {
      cssProperty: d = r,
      themeKey: f,
      transform: g,
      style: p
    } = a;
    if (n == null)
      return null;
    if (f === "typography" && n === "inherit")
      return {
        [r]: n
      };
    const m = xt(o, f) || {};
    return p ? p(s) : Te(s, n, (b) => {
      let c = bt(m, g, b);
      return b === c && typeof b == "string" && (c = bt(m, g, `${r}${b === "default" ? "" : X(b)}`, b)), d === !1 ? c : {
        [d]: c
      };
    });
  }
  function t(r) {
    const {
      sx: n,
      theme: o = {}
    } = r || {};
    if (!n)
      return null;
    const i = o.unstable_sxConfig ?? Ft;
    function s(a) {
      let d = a;
      if (typeof a == "function")
        d = a(o);
      else if (typeof a != "object")
        return a;
      if (!d)
        return null;
      const f = go(o.breakpoints), g = Object.keys(f);
      let p = f;
      return Object.keys(d).forEach((m) => {
        const S = ei(d[m], o);
        if (S != null)
          if (typeof S == "object")
            if (i[m])
              p = Qe(p, e(m, S, o, i));
            else {
              const b = Te({
                theme: o
              }, S, (c) => ({
                [m]: c
              }));
              Zo(b, S) ? p[m] = t({
                sx: S,
                theme: o
              }) : p = Qe(p, b);
            }
          else
            p = Qe(p, e(m, S, o, i));
      }), so(o, ho(g, p));
    }
    return Array.isArray(n) ? n.map(s) : s(n);
  }
  return t;
}
const Le = ti();
Le.filterProps = ["sx"];
function ri(e, t) {
  var n;
  const r = this;
  if (r.vars) {
    if (!((n = r.colorSchemes) != null && n[e]) || typeof r.getColorSchemeSelector != "function")
      return {};
    let o = r.getColorSchemeSelector(e);
    return o === "&" ? t : ((o.includes("data-") || o.includes(".")) && (o = `*:where(${o.replace(/\s*&$/, "")}) &`), {
      [o]: t
    });
  }
  return r.palette.mode === e ? t : {};
}
function ln(e = {}, ...t) {
  const {
    breakpoints: r = {},
    palette: n = {},
    spacing: o,
    shape: i = {},
    ...s
  } = e, a = ao(r), d = sn(o);
  let f = he({
    breakpoints: a,
    direction: "ltr",
    components: {},
    // Inject component definitions.
    palette: {
      mode: "light",
      ...n
    },
    spacing: d,
    shape: {
      ...fo,
      ...i
    }
  }, s);
  return f = uo(f), f.applyStyles = ri, f = t.reduce((g, p) => he(g, p), f), f.unstable_sxConfig = {
    ...Ft,
    ...s == null ? void 0 : s.unstable_sxConfig
  }, f.unstable_sx = function(p) {
    return Le({
      sx: p,
      theme: this
    });
  }, f;
}
const Ir = (e) => e, ni = () => {
  let e = Ir;
  return {
    configure(t) {
      e = t;
    },
    generate(t) {
      return e(t);
    },
    reset() {
      e = Ir;
    }
  };
}, oi = ni();
function cn(e) {
  var t, r, n = "";
  if (typeof e == "string" || typeof e == "number") n += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var o = e.length;
    for (t = 0; t < o; t++) e[t] && (r = cn(e[t])) && (n && (n += " "), n += r);
  } else for (r in e) e[r] && (n && (n += " "), n += r);
  return n;
}
function fe() {
  for (var e, t, r = 0, n = "", o = arguments.length; r < o; r++) (e = arguments[r]) && (t = cn(e)) && (n && (n += " "), n += t);
  return n;
}
const ii = {
  active: "active",
  checked: "checked",
  completed: "completed",
  disabled: "disabled",
  error: "error",
  expanded: "expanded",
  focused: "focused",
  focusVisible: "focusVisible",
  open: "open",
  readOnly: "readOnly",
  required: "required",
  selected: "selected"
};
function _e(e, t, r = "Mui") {
  const n = ii[t];
  return n ? `${r}-${n}` : `${oi.generate(e)}-${t}`;
}
function We(e, t, r = "Mui") {
  const n = {};
  return t.forEach((o) => {
    n[o] = _e(e, o, r);
  }), n;
}
function un(e, t = "") {
  return e.displayName || e.name || t;
}
function _r(e, t, r) {
  const n = un(t);
  return e.displayName || (n !== "" ? `${r}(${n})` : r);
}
function ai(e) {
  if (e != null) {
    if (typeof e == "string")
      return e;
    if (typeof e == "function")
      return un(e, "Component");
    if (typeof e == "object")
      switch (e.$$typeof) {
        case yt.ForwardRef:
          return _r(e, e.render, "ForwardRef");
        case yt.Memo:
          return _r(e, e.type, "memo");
        default:
          return;
      }
  }
}
function dn(e) {
  const {
    variants: t,
    ...r
  } = e, n = {
    variants: t,
    style: Rr(r),
    isProcessed: !0
  };
  return n.style === r || t && t.forEach((o) => {
    typeof o.style != "function" && (o.style = Rr(o.style));
  }), n;
}
const si = ln();
function Vt(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
function li(e) {
  return e ? (t, r) => r[e] : null;
}
function ci(e, t, r) {
  e.theme = pi(e.theme) ? r : e.theme[t] || e.theme;
}
function gt(e, t) {
  const r = typeof t == "function" ? t(e) : t;
  if (Array.isArray(r))
    return r.flatMap((n) => gt(e, n));
  if (Array.isArray(r == null ? void 0 : r.variants)) {
    let n;
    if (r.isProcessed)
      n = r.style;
    else {
      const {
        variants: o,
        ...i
      } = r;
      n = i;
    }
    return fn(e, r.variants, [n]);
  }
  return r != null && r.isProcessed ? r.style : r;
}
function fn(e, t, r = []) {
  var o;
  let n;
  e: for (let i = 0; i < t.length; i += 1) {
    const s = t[i];
    if (typeof s.props == "function") {
      if (n ?? (n = {
        ...e,
        ...e.ownerState,
        ownerState: e.ownerState
      }), !s.props(n))
        continue;
    } else
      for (const a in s.props)
        if (e[a] !== s.props[a] && ((o = e.ownerState) == null ? void 0 : o[a]) !== s.props[a])
          continue e;
    typeof s.style == "function" ? (n ?? (n = {
      ...e,
      ...e.ownerState,
      ownerState: e.ownerState
    }), r.push(s.style(n))) : r.push(s.style);
  }
  return r;
}
function ui(e = {}) {
  const {
    themeId: t,
    defaultTheme: r = si,
    rootShouldForwardProp: n = Vt,
    slotShouldForwardProp: o = Vt
  } = e;
  function i(a) {
    ci(a, t, r);
  }
  return (a, d = {}) => {
    to(a, (y) => y.filter((A) => A !== Le));
    const {
      name: f,
      slot: g,
      skipVariantsResolver: p,
      skipSx: m,
      // TODO v6: remove `lowercaseFirstLetter()` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      overridesResolver: S = li(pn(g)),
      ...b
    } = d, c = p !== void 0 ? p : (
      // TODO v6: remove `Root` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      g && g !== "Root" && g !== "root" || !1
    ), E = m || !1;
    let $ = Vt;
    g === "Root" || g === "root" ? $ = n : g ? $ = o : gi(a) && ($ = void 0);
    const k = eo(a, {
      shouldForwardProp: $,
      label: fi(f, g),
      ...b
    }), O = (y) => {
      if (y.__emotion_real === y)
        return y;
      if (typeof y == "function")
        return function(q) {
          return gt(q, y);
        };
      if (Ee(y)) {
        const A = dn(y);
        return A.variants ? function(Q) {
          return gt(Q, A);
        } : A.style;
      }
      return y;
    }, v = (...y) => {
      const A = [], q = y.map(O), Q = [];
      if (A.push(i), f && S && Q.push(function(R) {
        var ee, ce;
        const L = (ce = (ee = R.theme.components) == null ? void 0 : ee[f]) == null ? void 0 : ce.styleOverrides;
        if (!L)
          return null;
        const oe = {};
        for (const pe in L)
          oe[pe] = gt(R, L[pe]);
        return S(R, oe);
      }), f && !c && Q.push(function(R) {
        var oe, ee;
        const P = R.theme, L = (ee = (oe = P == null ? void 0 : P.components) == null ? void 0 : oe[f]) == null ? void 0 : ee.variants;
        return L ? fn(R, L) : null;
      }), E || Q.push(Le), Array.isArray(q[0])) {
        const x = q.shift(), R = new Array(A.length).fill(""), P = new Array(Q.length).fill("");
        let L;
        L = [...R, ...x, ...P], L.raw = [...R, ...x.raw, ...P], A.unshift(L);
      }
      const te = [...A, ...q, ...Q], l = k(...te);
      return a.muiName && (l.muiName = a.muiName), process.env.NODE_ENV !== "production" && (l.displayName = di(f, g, a)), l;
    };
    return k.withConfig && (v.withConfig = k.withConfig), v;
  };
}
function di(e, t, r) {
  return e ? `${e}${X(t || "")}` : `Styled(${ai(r)})`;
}
function fi(e, t) {
  let r;
  return process.env.NODE_ENV !== "production" && e && (r = `${e}-${pn(t || "Root")}`), r;
}
function pi(e) {
  for (const t in e)
    return !1;
  return !0;
}
function gi(e) {
  return typeof e == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  e.charCodeAt(0) > 96;
}
function pn(e) {
  return e && e.charAt(0).toLowerCase() + e.slice(1);
}
function vt(e, t) {
  const r = {
    ...t
  };
  for (const n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      const o = n;
      if (o === "components" || o === "slots")
        r[o] = {
          ...e[o],
          ...r[o]
        };
      else if (o === "componentsProps" || o === "slotProps") {
        const i = e[o], s = t[o];
        if (!s)
          r[o] = i || {};
        else if (!i)
          r[o] = s;
        else {
          r[o] = {
            ...s
          };
          for (const a in i)
            if (Object.prototype.hasOwnProperty.call(i, a)) {
              const d = a;
              r[o][d] = vt(i[d], s[d]);
            }
        }
      } else r[o] === void 0 && (r[o] = e[o]);
    }
  return r;
}
const hi = typeof window < "u" ? F.useLayoutEffect : F.useEffect;
function mi(e, t = Number.MIN_SAFE_INTEGER, r = Number.MAX_SAFE_INTEGER) {
  return Math.max(t, Math.min(e, r));
}
function er(e, t = 0, r = 1) {
  return process.env.NODE_ENV !== "production" && (e < t || e > r) && console.error(`MUI: The value provided ${e} is out of range [${t}, ${r}].`), mi(e, t, r);
}
function yi(e) {
  e = e.slice(1);
  const t = new RegExp(`.{1,${e.length >= 6 ? 2 : 1}}`, "g");
  let r = e.match(t);
  return r && r[0].length === 1 && (r = r.map((n) => n + n)), process.env.NODE_ENV !== "production" && e.length !== e.trim().length && console.error(`MUI: The color: "${e}" is invalid. Make sure the color input doesn't contain leading/trailing space.`), r ? `rgb${r.length === 4 ? "a" : ""}(${r.map((n, o) => o < 3 ? parseInt(n, 16) : Math.round(parseInt(n, 16) / 255 * 1e3) / 1e3).join(", ")})` : "";
}
function Ae(e) {
  if (e.type)
    return e;
  if (e.charAt(0) === "#")
    return Ae(yi(e));
  const t = e.indexOf("("), r = e.substring(0, t);
  if (!["rgb", "rgba", "hsl", "hsla", "color"].includes(r))
    throw new Error(process.env.NODE_ENV !== "production" ? `MUI: Unsupported \`${e}\` color.
The following formats are supported: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color().` : Fe(9, e));
  let n = e.substring(t + 1, e.length - 1), o;
  if (r === "color") {
    if (n = n.split(" "), o = n.shift(), n.length === 4 && n[3].charAt(0) === "/" && (n[3] = n[3].slice(1)), !["srgb", "display-p3", "a98-rgb", "prophoto-rgb", "rec-2020"].includes(o))
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: unsupported \`${o}\` color space.
The following color spaces are supported: srgb, display-p3, a98-rgb, prophoto-rgb, rec-2020.` : Fe(10, o));
  } else
    n = n.split(",");
  return n = n.map((i) => parseFloat(i)), {
    type: r,
    values: n,
    colorSpace: o
  };
}
const bi = (e) => {
  const t = Ae(e);
  return t.values.slice(0, 3).map((r, n) => t.type.includes("hsl") && n !== 0 ? `${r}%` : r).join(" ");
}, He = (e, t) => {
  try {
    return bi(e);
  } catch {
    return t && process.env.NODE_ENV !== "production" && console.warn(t), e;
  }
};
function At(e) {
  const {
    type: t,
    colorSpace: r
  } = e;
  let {
    values: n
  } = e;
  return t.includes("rgb") ? n = n.map((o, i) => i < 3 ? parseInt(o, 10) : o) : t.includes("hsl") && (n[1] = `${n[1]}%`, n[2] = `${n[2]}%`), t.includes("color") ? n = `${r} ${n.join(" ")}` : n = `${n.join(", ")}`, `${t}(${n})`;
}
function gn(e) {
  e = Ae(e);
  const {
    values: t
  } = e, r = t[0], n = t[1] / 100, o = t[2] / 100, i = n * Math.min(o, 1 - o), s = (f, g = (f + r / 30) % 12) => o - i * Math.max(Math.min(g - 3, 9 - g, 1), -1);
  let a = "rgb";
  const d = [Math.round(s(0) * 255), Math.round(s(8) * 255), Math.round(s(4) * 255)];
  return e.type === "hsla" && (a += "a", d.push(t[3])), At({
    type: a,
    values: d
  });
}
function Wt(e) {
  e = Ae(e);
  let t = e.type === "hsl" || e.type === "hsla" ? Ae(gn(e)).values : e.values;
  return t = t.map((r) => (e.type !== "color" && (r /= 255), r <= 0.03928 ? r / 12.92 : ((r + 0.055) / 1.055) ** 2.4)), Number((0.2126 * t[0] + 0.7152 * t[1] + 0.0722 * t[2]).toFixed(3));
}
function Br(e, t) {
  const r = Wt(e), n = Wt(t);
  return (Math.max(r, n) + 0.05) / (Math.min(r, n) + 0.05);
}
function G(e, t) {
  return e = Ae(e), t = er(t), (e.type === "rgb" || e.type === "hsl") && (e.type += "a"), e.type === "color" ? e.values[3] = `/${t}` : e.values[3] = t, At(e);
}
function ct(e, t, r) {
  try {
    return G(e, t);
  } catch {
    return e;
  }
}
function tr(e, t) {
  if (e = Ae(e), t = er(t), e.type.includes("hsl"))
    e.values[2] *= 1 - t;
  else if (e.type.includes("rgb") || e.type.includes("color"))
    for (let r = 0; r < 3; r += 1)
      e.values[r] *= 1 - t;
  return At(e);
}
function J(e, t, r) {
  try {
    return tr(e, t);
  } catch {
    return e;
  }
}
function rr(e, t) {
  if (e = Ae(e), t = er(t), e.type.includes("hsl"))
    e.values[2] += (100 - e.values[2]) * t;
  else if (e.type.includes("rgb"))
    for (let r = 0; r < 3; r += 1)
      e.values[r] += (255 - e.values[r]) * t;
  else if (e.type.includes("color"))
    for (let r = 0; r < 3; r += 1)
      e.values[r] += (1 - e.values[r]) * t;
  return At(e);
}
function Z(e, t, r) {
  try {
    return rr(e, t);
  } catch {
    return e;
  }
}
function vi(e, t = 0.15) {
  return Wt(e) > 0.5 ? tr(e, t) : rr(e, t);
}
function ut(e, t, r) {
  try {
    return vi(e, t);
  } catch {
    return e;
  }
}
const Ci = /* @__PURE__ */ F.createContext(void 0);
process.env.NODE_ENV !== "production" && (u.node, u.object);
function Si(e) {
  const {
    theme: t,
    name: r,
    props: n
  } = e;
  if (!t || !t.components || !t.components[r])
    return n;
  const o = t.components[r];
  return o.defaultProps ? vt(o.defaultProps, n) : !o.styleOverrides && !o.variants ? vt(o, n) : n;
}
function xi({
  props: e,
  name: t
}) {
  const r = F.useContext(Ci);
  return Si({
    props: e,
    name: t,
    theme: {
      components: r
    }
  });
}
const Nr = {
  theme: void 0
};
function Ei(e) {
  let t, r;
  return function(o) {
    let i = t;
    return (i === void 0 || o.theme !== r) && (Nr.theme = o.theme, i = dn(e(Nr)), t = i, r = o.theme), i;
  };
}
function Ti(e = "") {
  function t(...n) {
    if (!n.length)
      return "";
    const o = n[0];
    return typeof o == "string" && !o.match(/(#|\(|\)|(-?(\d*\.)?\d+)(px|em|%|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc))|^(-?(\d*\.)?\d+)$|(\d+ \d+ \d+)/) ? `, var(--${e ? `${e}-` : ""}${o}${t(...n.slice(1))})` : `, ${o}`;
  }
  return (n, ...o) => `var(--${e ? `${e}-` : ""}${n}${t(...o)})`;
}
const Dr = (e, t, r, n = []) => {
  let o = e;
  t.forEach((i, s) => {
    s === t.length - 1 ? Array.isArray(o) ? o[Number(i)] = r : o && typeof o == "object" && (o[i] = r) : o && typeof o == "object" && (o[i] || (o[i] = n.includes(i) ? [] : {}), o = o[i]);
  });
}, wi = (e, t, r) => {
  function n(o, i = [], s = []) {
    Object.entries(o).forEach(([a, d]) => {
      (!r || r && !r([...i, a])) && d != null && (typeof d == "object" && Object.keys(d).length > 0 ? n(d, [...i, a], Array.isArray(d) ? [...s, a] : s) : t([...i, a], d, s));
    });
  }
  n(e);
}, $i = (e, t) => typeof t == "number" ? ["lineHeight", "fontWeight", "opacity", "zIndex"].some((n) => e.includes(n)) || e[e.length - 1].toLowerCase().includes("opacity") ? t : `${t}px` : t;
function jt(e, t) {
  const {
    prefix: r,
    shouldSkipGeneratingVar: n
  } = t || {}, o = {}, i = {}, s = {};
  return wi(
    e,
    (a, d, f) => {
      if ((typeof d == "string" || typeof d == "number") && (!n || !n(a, d))) {
        const g = `--${r ? `${r}-` : ""}${a.join("-")}`, p = $i(a, d);
        Object.assign(o, {
          [g]: p
        }), Dr(i, a, `var(${g})`, f), Dr(s, a, `var(${g}, ${p})`, f);
      }
    },
    (a) => a[0] === "vars"
    // skip 'vars/*' paths
  ), {
    css: o,
    vars: i,
    varsWithDefaults: s
  };
}
function Oi(e, t = {}) {
  const {
    getSelector: r = E,
    disableCssColorScheme: n,
    colorSchemeSelector: o
  } = t, {
    colorSchemes: i = {},
    components: s,
    defaultColorScheme: a = "light",
    ...d
  } = e, {
    vars: f,
    css: g,
    varsWithDefaults: p
  } = jt(d, t);
  let m = p;
  const S = {}, {
    [a]: b,
    ...c
  } = i;
  if (Object.entries(c || {}).forEach(([O, v]) => {
    const {
      vars: y,
      css: A,
      varsWithDefaults: q
    } = jt(v, t);
    m = he(m, q), S[O] = {
      css: A,
      vars: y
    };
  }), b) {
    const {
      css: O,
      vars: v,
      varsWithDefaults: y
    } = jt(b, t);
    m = he(m, y), S[a] = {
      css: O,
      vars: v
    };
  }
  function E(O, v) {
    var A, q;
    let y = o;
    if (o === "class" && (y = ".%s"), o === "data" && (y = "[data-%s]"), o != null && o.startsWith("data-") && !o.includes("%s") && (y = `[${o}="%s"]`), O) {
      if (y === "media")
        return e.defaultColorScheme === O ? ":root" : {
          [`@media (prefers-color-scheme: ${((q = (A = i[O]) == null ? void 0 : A.palette) == null ? void 0 : q.mode) || O})`]: {
            ":root": v
          }
        };
      if (y)
        return e.defaultColorScheme === O ? `:root, ${y.replace("%s", String(O))}` : y.replace("%s", String(O));
    }
    return ":root";
  }
  return {
    vars: m,
    generateThemeVars: () => {
      let O = {
        ...f
      };
      return Object.entries(S).forEach(([, {
        vars: v
      }]) => {
        O = he(O, v);
      }), O;
    },
    generateStyleSheets: () => {
      var Q, te;
      const O = [], v = e.defaultColorScheme || "light";
      function y(l, x) {
        Object.keys(x).length && O.push(typeof l == "string" ? {
          [l]: {
            ...x
          }
        } : l);
      }
      y(r(void 0, {
        ...g
      }), g);
      const {
        [v]: A,
        ...q
      } = S;
      if (A) {
        const {
          css: l
        } = A, x = (te = (Q = i[v]) == null ? void 0 : Q.palette) == null ? void 0 : te.mode, R = !n && x ? {
          colorScheme: x,
          ...l
        } : {
          ...l
        };
        y(r(v, {
          ...R
        }), R);
      }
      return Object.entries(q).forEach(([l, {
        css: x
      }]) => {
        var L, oe;
        const R = (oe = (L = i[l]) == null ? void 0 : L.palette) == null ? void 0 : oe.mode, P = !n && R ? {
          colorScheme: R,
          ...x
        } : {
          ...x
        };
        y(r(l, {
          ...P
        }), P);
      }), O;
    }
  };
}
function Ri(e) {
  return function(r) {
    return e === "media" ? (process.env.NODE_ENV !== "production" && r !== "light" && r !== "dark" && console.error(`MUI: @media (prefers-color-scheme) supports only 'light' or 'dark', but receive '${r}'.`), `@media (prefers-color-scheme: ${r})`) : e ? e.startsWith("data-") && !e.includes("%s") ? `[${e}="${r}"] &` : e === "class" ? `.${r} &` : e === "data" ? `[data-${r}] &` : `${e.replace("%s", r)} &` : "&";
  };
}
function nt(e, t, r = void 0) {
  const n = {};
  for (const o in e) {
    const i = e[o];
    let s = "", a = !0;
    for (let d = 0; d < i.length; d += 1) {
      const f = i[d];
      f && (s += (a === !0 ? "" : " ") + t(f), a = !1, r && r[f] && (s += " " + r[f]));
    }
    n[o] = s;
  }
  return n;
}
const Je = {
  black: "#000",
  white: "#fff"
}, Pi = {
  50: "#fafafa",
  100: "#f5f5f5",
  200: "#eeeeee",
  300: "#e0e0e0",
  400: "#bdbdbd",
  500: "#9e9e9e",
  600: "#757575",
  700: "#616161",
  800: "#424242",
  900: "#212121",
  A100: "#f5f5f5",
  A200: "#eeeeee",
  A400: "#bdbdbd",
  A700: "#616161"
}, Be = {
  50: "#f3e5f5",
  200: "#ce93d8",
  300: "#ba68c8",
  400: "#ab47bc",
  500: "#9c27b0",
  700: "#7b1fa2"
}, Ne = {
  300: "#e57373",
  400: "#ef5350",
  500: "#f44336",
  700: "#d32f2f",
  800: "#c62828"
}, qe = {
  300: "#ffb74d",
  400: "#ffa726",
  500: "#ff9800",
  700: "#f57c00",
  900: "#e65100"
}, De = {
  50: "#e3f2fd",
  200: "#90caf9",
  400: "#42a5f5",
  700: "#1976d2",
  800: "#1565c0"
}, ze = {
  300: "#4fc3f7",
  400: "#29b6f6",
  500: "#03a9f4",
  700: "#0288d1",
  900: "#01579b"
}, Ve = {
  300: "#81c784",
  400: "#66bb6a",
  500: "#4caf50",
  700: "#388e3c",
  800: "#2e7d32",
  900: "#1b5e20"
};
function hn() {
  return {
    // The colors used to style the text.
    text: {
      // The most important text.
      primary: "rgba(0, 0, 0, 0.87)",
      // Secondary text.
      secondary: "rgba(0, 0, 0, 0.6)",
      // Disabled text have even lower visual prominence.
      disabled: "rgba(0, 0, 0, 0.38)"
    },
    // The color used to divide different elements.
    divider: "rgba(0, 0, 0, 0.12)",
    // The background colors used to style the surfaces.
    // Consistency between these values is important.
    background: {
      paper: Je.white,
      default: Je.white
    },
    // The colors used to style the action elements.
    action: {
      // The color of an active action like an icon button.
      active: "rgba(0, 0, 0, 0.54)",
      // The color of an hovered action.
      hover: "rgba(0, 0, 0, 0.04)",
      hoverOpacity: 0.04,
      // The color of a selected action.
      selected: "rgba(0, 0, 0, 0.08)",
      selectedOpacity: 0.08,
      // The color of a disabled action.
      disabled: "rgba(0, 0, 0, 0.26)",
      // The background color of a disabled action.
      disabledBackground: "rgba(0, 0, 0, 0.12)",
      disabledOpacity: 0.38,
      focus: "rgba(0, 0, 0, 0.12)",
      focusOpacity: 0.12,
      activatedOpacity: 0.12
    }
  };
}
const Fi = hn();
function mn() {
  return {
    text: {
      primary: Je.white,
      secondary: "rgba(255, 255, 255, 0.7)",
      disabled: "rgba(255, 255, 255, 0.5)",
      icon: "rgba(255, 255, 255, 0.5)"
    },
    divider: "rgba(255, 255, 255, 0.12)",
    background: {
      paper: "#121212",
      default: "#121212"
    },
    action: {
      active: Je.white,
      hover: "rgba(255, 255, 255, 0.08)",
      hoverOpacity: 0.08,
      selected: "rgba(255, 255, 255, 0.16)",
      selectedOpacity: 0.16,
      disabled: "rgba(255, 255, 255, 0.3)",
      disabledBackground: "rgba(255, 255, 255, 0.12)",
      disabledOpacity: 0.38,
      focus: "rgba(255, 255, 255, 0.12)",
      focusOpacity: 0.12,
      activatedOpacity: 0.24
    }
  };
}
const zr = mn();
function Vr(e, t, r, n) {
  const o = n.light || n, i = n.dark || n * 1.5;
  e[t] || (e.hasOwnProperty(r) ? e[t] = e[r] : t === "light" ? e.light = rr(e.main, o) : t === "dark" && (e.dark = tr(e.main, i)));
}
function Ai(e = "light") {
  return e === "dark" ? {
    main: De[200],
    light: De[50],
    dark: De[400]
  } : {
    main: De[700],
    light: De[400],
    dark: De[800]
  };
}
function Mi(e = "light") {
  return e === "dark" ? {
    main: Be[200],
    light: Be[50],
    dark: Be[400]
  } : {
    main: Be[500],
    light: Be[300],
    dark: Be[700]
  };
}
function ki(e = "light") {
  return e === "dark" ? {
    main: Ne[500],
    light: Ne[300],
    dark: Ne[700]
  } : {
    main: Ne[700],
    light: Ne[400],
    dark: Ne[800]
  };
}
function Ii(e = "light") {
  return e === "dark" ? {
    main: ze[400],
    light: ze[300],
    dark: ze[700]
  } : {
    main: ze[700],
    light: ze[500],
    dark: ze[900]
  };
}
function _i(e = "light") {
  return e === "dark" ? {
    main: Ve[400],
    light: Ve[300],
    dark: Ve[700]
  } : {
    main: Ve[800],
    light: Ve[500],
    dark: Ve[900]
  };
}
function Bi(e = "light") {
  return e === "dark" ? {
    main: qe[400],
    light: qe[300],
    dark: qe[700]
  } : {
    main: "#ed6c02",
    // closest to orange[800] that pass 3:1.
    light: qe[500],
    dark: qe[900]
  };
}
function nr(e) {
  const {
    mode: t = "light",
    contrastThreshold: r = 3,
    tonalOffset: n = 0.2,
    ...o
  } = e, i = e.primary || Ai(t), s = e.secondary || Mi(t), a = e.error || ki(t), d = e.info || Ii(t), f = e.success || _i(t), g = e.warning || Bi(t);
  function p(c) {
    const E = Br(c, zr.text.primary) >= r ? zr.text.primary : Fi.text.primary;
    if (process.env.NODE_ENV !== "production") {
      const $ = Br(c, E);
      $ < 3 && console.error([`MUI: The contrast ratio of ${$}:1 for ${E} on ${c}`, "falls below the WCAG recommended absolute minimum contrast ratio of 3:1.", "https://www.w3.org/TR/2008/REC-WCAG20-20081211/#visual-audio-contrast-contrast"].join(`
`));
    }
    return E;
  }
  const m = ({
    color: c,
    name: E,
    mainShade: $ = 500,
    lightShade: k = 300,
    darkShade: O = 700
  }) => {
    if (c = {
      ...c
    }, !c.main && c[$] && (c.main = c[$]), !c.hasOwnProperty("main"))
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The color${E ? ` (${E})` : ""} provided to augmentColor(color) is invalid.
The color object needs to have a \`main\` property or a \`${$}\` property.` : Fe(11, E ? ` (${E})` : "", $));
    if (typeof c.main != "string")
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The color${E ? ` (${E})` : ""} provided to augmentColor(color) is invalid.
\`color.main\` should be a string, but \`${JSON.stringify(c.main)}\` was provided instead.

Did you intend to use one of the following approaches?

import { green } from "@mui/material/colors";

const theme1 = createTheme({ palette: {
  primary: green,
} });

const theme2 = createTheme({ palette: {
  primary: { main: green[500] },
} });` : Fe(12, E ? ` (${E})` : "", JSON.stringify(c.main)));
    return Vr(c, "light", k, n), Vr(c, "dark", O, n), c.contrastText || (c.contrastText = p(c.main)), c;
  };
  let S;
  return t === "light" ? S = hn() : t === "dark" && (S = mn()), process.env.NODE_ENV !== "production" && (S || console.error(`MUI: The palette mode \`${t}\` is not supported.`)), he({
    // A collection of common colors.
    common: {
      ...Je
    },
    // prevent mutable object.
    // The palette mode, can be light or dark.
    mode: t,
    // The colors used to represent primary interface elements for a user.
    primary: m({
      color: i,
      name: "primary"
    }),
    // The colors used to represent secondary interface elements for a user.
    secondary: m({
      color: s,
      name: "secondary",
      mainShade: "A400",
      lightShade: "A200",
      darkShade: "A700"
    }),
    // The colors used to represent interface elements that the user should be made aware of.
    error: m({
      color: a,
      name: "error"
    }),
    // The colors used to represent potentially dangerous actions or important messages.
    warning: m({
      color: g,
      name: "warning"
    }),
    // The colors used to present information to the user that is neutral and not necessarily important.
    info: m({
      color: d,
      name: "info"
    }),
    // The colors used to indicate the successful completion of an action that user triggered.
    success: m({
      color: f,
      name: "success"
    }),
    // The grey colors.
    grey: Pi,
    // Used by `getContrastText()` to maximize the contrast between
    // the background and the text.
    contrastThreshold: r,
    // Takes a background color and returns the text color that maximizes the contrast.
    getContrastText: p,
    // Generate a rich color object.
    augmentColor: m,
    // Used by the functions below to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: n,
    // The light and dark mode object.
    ...S
  }, o);
}
function Ni(e) {
  const t = {};
  return Object.entries(e).forEach((n) => {
    const [o, i] = n;
    typeof i == "object" && (t[o] = `${i.fontStyle ? `${i.fontStyle} ` : ""}${i.fontVariant ? `${i.fontVariant} ` : ""}${i.fontWeight ? `${i.fontWeight} ` : ""}${i.fontStretch ? `${i.fontStretch} ` : ""}${i.fontSize || ""}${i.lineHeight ? `/${i.lineHeight} ` : ""}${i.fontFamily || ""}`);
  }), t;
}
function Di(e, t) {
  return {
    toolbar: {
      minHeight: 56,
      [e.up("xs")]: {
        "@media (orientation: landscape)": {
          minHeight: 48
        }
      },
      [e.up("sm")]: {
        minHeight: 64
      }
    },
    ...t
  };
}
function zi(e) {
  return Math.round(e * 1e5) / 1e5;
}
const jr = {
  textTransform: "uppercase"
}, Lr = '"Roboto", "Helvetica", "Arial", sans-serif';
function Vi(e, t) {
  const {
    fontFamily: r = Lr,
    // The default font size of the Material Specification.
    fontSize: n = 14,
    // px
    fontWeightLight: o = 300,
    fontWeightRegular: i = 400,
    fontWeightMedium: s = 500,
    fontWeightBold: a = 700,
    // Tell MUI what's the font-size on the html element.
    // 16px is the default font-size used by browsers.
    htmlFontSize: d = 16,
    // Apply the CSS properties to all the variants.
    allVariants: f,
    pxToRem: g,
    ...p
  } = typeof t == "function" ? t(e) : t;
  process.env.NODE_ENV !== "production" && (typeof n != "number" && console.error("MUI: `fontSize` is required to be a number."), typeof d != "number" && console.error("MUI: `htmlFontSize` is required to be a number."));
  const m = n / 14, S = g || ((E) => `${E / d * m}rem`), b = (E, $, k, O, v) => ({
    fontFamily: r,
    fontWeight: E,
    fontSize: S($),
    // Unitless following https://meyerweb.com/eric/thoughts/2006/02/08/unitless-line-heights/
    lineHeight: k,
    // The letter spacing was designed for the Roboto font-family. Using the same letter-spacing
    // across font-families can cause issues with the kerning.
    ...r === Lr ? {
      letterSpacing: `${zi(O / $)}em`
    } : {},
    ...v,
    ...f
  }), c = {
    h1: b(o, 96, 1.167, -1.5),
    h2: b(o, 60, 1.2, -0.5),
    h3: b(i, 48, 1.167, 0),
    h4: b(i, 34, 1.235, 0.25),
    h5: b(i, 24, 1.334, 0),
    h6: b(s, 20, 1.6, 0.15),
    subtitle1: b(i, 16, 1.75, 0.15),
    subtitle2: b(s, 14, 1.57, 0.1),
    body1: b(i, 16, 1.5, 0.15),
    body2: b(i, 14, 1.43, 0.15),
    button: b(s, 14, 1.75, 0.4, jr),
    caption: b(i, 12, 1.66, 0.4),
    overline: b(i, 12, 2.66, 1, jr),
    // TODO v6: Remove handling of 'inherit' variant from the theme as it is already handled in Material UI's Typography component. Also, remember to remove the associated types.
    inherit: {
      fontFamily: "inherit",
      fontWeight: "inherit",
      fontSize: "inherit",
      lineHeight: "inherit",
      letterSpacing: "inherit"
    }
  };
  return he({
    htmlFontSize: d,
    pxToRem: S,
    fontFamily: r,
    fontSize: n,
    fontWeightLight: o,
    fontWeightRegular: i,
    fontWeightMedium: s,
    fontWeightBold: a,
    ...c
  }, p, {
    clone: !1
    // No need to clone deep
  });
}
const ji = 0.2, Li = 0.14, Wi = 0.12;
function re(...e) {
  return [`${e[0]}px ${e[1]}px ${e[2]}px ${e[3]}px rgba(0,0,0,${ji})`, `${e[4]}px ${e[5]}px ${e[6]}px ${e[7]}px rgba(0,0,0,${Li})`, `${e[8]}px ${e[9]}px ${e[10]}px ${e[11]}px rgba(0,0,0,${Wi})`].join(",");
}
const Ui = ["none", re(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0), re(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0), re(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0), re(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0), re(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0), re(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0), re(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1), re(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2), re(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2), re(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3), re(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3), re(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4), re(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4), re(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4), re(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5), re(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5), re(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5), re(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6), re(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6), re(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7), re(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7), re(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7), re(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8), re(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8)], Yi = {
  // This is the most common easing curve.
  easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
  // Objects enter the screen at full velocity from off-screen and
  // slowly decelerate to a resting point.
  easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
  // Objects leave the screen at full velocity. They do not decelerate when off-screen.
  easeIn: "cubic-bezier(0.4, 0, 1, 1)",
  // The sharp curve is used by objects that may return to the screen at any time.
  sharp: "cubic-bezier(0.4, 0, 0.6, 1)"
}, Gi = {
  shortest: 150,
  shorter: 200,
  short: 250,
  // most basic recommended timing
  standard: 300,
  // this is to be used in complex animations
  complex: 375,
  // recommended when something is entering screen
  enteringScreen: 225,
  // recommended when something is leaving screen
  leavingScreen: 195
};
function Wr(e) {
  return `${Math.round(e)}ms`;
}
function qi(e) {
  if (!e)
    return 0;
  const t = e / 36;
  return Math.min(Math.round((4 + 15 * t ** 0.25 + t / 5) * 10), 3e3);
}
function Ki(e) {
  const t = {
    ...Yi,
    ...e.easing
  }, r = {
    ...Gi,
    ...e.duration
  };
  return {
    getAutoHeightDuration: qi,
    create: (o = ["all"], i = {}) => {
      const {
        duration: s = r.standard,
        easing: a = t.easeInOut,
        delay: d = 0,
        ...f
      } = i;
      if (process.env.NODE_ENV !== "production") {
        const g = (m) => typeof m == "string", p = (m) => !Number.isNaN(parseFloat(m));
        !g(o) && !Array.isArray(o) && console.error('MUI: Argument "props" must be a string or Array.'), !p(s) && !g(s) && console.error(`MUI: Argument "duration" must be a number or a string but found ${s}.`), g(a) || console.error('MUI: Argument "easing" must be a string.'), !p(d) && !g(d) && console.error('MUI: Argument "delay" must be a number or a string.'), typeof i != "object" && console.error(["MUI: Secong argument of transition.create must be an object.", "Arguments should be either `create('prop1', options)` or `create(['prop1', 'prop2'], options)`"].join(`
`)), Object.keys(f).length !== 0 && console.error(`MUI: Unrecognized argument(s) [${Object.keys(f).join(",")}].`);
      }
      return (Array.isArray(o) ? o : [o]).map((g) => `${g} ${typeof s == "string" ? s : Wr(s)} ${a} ${typeof d == "string" ? d : Wr(d)}`).join(",");
    },
    ...e,
    easing: t,
    duration: r
  };
}
const Hi = {
  mobileStepper: 1e3,
  fab: 1050,
  speedDial: 1050,
  appBar: 1100,
  drawer: 1200,
  modal: 1300,
  snackbar: 1400,
  tooltip: 1500
};
function Xi(e) {
  return Ee(e) || typeof e > "u" || typeof e == "string" || typeof e == "boolean" || typeof e == "number" || Array.isArray(e);
}
function yn(e = {}) {
  const t = {
    ...e
  };
  function r(n) {
    const o = Object.entries(n);
    for (let i = 0; i < o.length; i++) {
      const [s, a] = o[i];
      !Xi(a) || s.startsWith("unstable_") ? delete n[s] : Ee(a) && (n[s] = {
        ...a
      }, r(n[s]));
    }
  }
  return r(t), `import { unstable_createBreakpoints as createBreakpoints, createTransitions } from '@mui/material/styles';

const theme = ${JSON.stringify(t, null, 2)};

theme.breakpoints = createBreakpoints(theme.breakpoints || {});
theme.transitions = createTransitions(theme.transitions || {});

export default theme;`;
}
function Ut(e = {}, ...t) {
  const {
    breakpoints: r,
    mixins: n = {},
    spacing: o,
    palette: i = {},
    transitions: s = {},
    typography: a = {},
    shape: d,
    ...f
  } = e;
  if (e.vars && // The error should throw only for the root theme creation because user is not allowed to use a custom node `vars`.
  // `generateThemeVars` is the closest identifier for checking that the `options` is a result of `createTheme` with CSS variables so that user can create new theme for nested ThemeProvider.
  e.generateThemeVars === void 0)
    throw new Error(process.env.NODE_ENV !== "production" ? "MUI: `vars` is a private field used for CSS variables support.\nPlease use another name or follow the [docs](https://mui.com/material-ui/customization/css-theme-variables/usage/) to enable the feature." : Fe(20));
  const g = nr(i), p = ln(e);
  let m = he(p, {
    mixins: Di(p.breakpoints, n),
    palette: g,
    // Don't use [...shadows] until you've verified its transpiled code is not invoking the iterator protocol.
    shadows: Ui.slice(),
    typography: Vi(g, a),
    transitions: Ki(s),
    zIndex: {
      ...Hi
    }
  });
  if (m = he(m, f), m = t.reduce((S, b) => he(S, b), m), process.env.NODE_ENV !== "production") {
    const S = ["active", "checked", "completed", "disabled", "error", "expanded", "focused", "focusVisible", "required", "selected"], b = (c, E) => {
      let $;
      for ($ in c) {
        const k = c[$];
        if (S.includes($) && Object.keys(k).length > 0) {
          if (process.env.NODE_ENV !== "production") {
            const O = _e("", $);
            console.error([`MUI: The \`${E}\` component increases the CSS specificity of the \`${$}\` internal state.`, "You can not override it like this: ", JSON.stringify(c, null, 2), "", `Instead, you need to use the '&.${O}' syntax:`, JSON.stringify({
              root: {
                [`&.${O}`]: k
              }
            }, null, 2), "", "https://mui.com/r/state-classes-guide"].join(`
`));
          }
          c[$] = {};
        }
      }
    };
    Object.keys(m.components).forEach((c) => {
      const E = m.components[c].styleOverrides;
      E && c.startsWith("Mui") && b(E, c);
    });
  }
  return m.unstable_sxConfig = {
    ...Ft,
    ...f == null ? void 0 : f.unstable_sxConfig
  }, m.unstable_sx = function(b) {
    return Le({
      sx: b,
      theme: this
    });
  }, m.toRuntimeSource = yn, m;
}
function Qi(e) {
  let t;
  return e < 1 ? t = 5.11916 * e ** 2 : t = 4.5 * Math.log(e + 1) + 2, Math.round(t * 10) / 1e3;
}
const Ji = [...Array(25)].map((e, t) => {
  if (t === 0)
    return "none";
  const r = Qi(t);
  return `linear-gradient(rgba(255 255 255 / ${r}), rgba(255 255 255 / ${r}))`;
});
function bn(e) {
  return {
    inputPlaceholder: e === "dark" ? 0.5 : 0.42,
    inputUnderline: e === "dark" ? 0.7 : 0.42,
    switchTrackDisabled: e === "dark" ? 0.2 : 0.12,
    switchTrack: e === "dark" ? 0.3 : 0.38
  };
}
function vn(e) {
  return e === "dark" ? Ji : [];
}
function Zi(e) {
  const {
    palette: t = {
      mode: "light"
    },
    // need to cast to avoid module augmentation test
    opacity: r,
    overlays: n,
    ...o
  } = e, i = nr(t);
  return {
    palette: i,
    opacity: {
      ...bn(i.mode),
      ...r
    },
    overlays: n || vn(i.mode),
    ...o
  };
}
function ea(e) {
  var t;
  return !!e[0].match(/(cssVarPrefix|colorSchemeSelector|rootSelector|typography|mixins|breakpoints|direction|transitions)/) || !!e[0].match(/sxConfig$/) || // ends with sxConfig
  e[0] === "palette" && !!((t = e[1]) != null && t.match(/(mode|contrastThreshold|tonalOffset)/));
}
const ta = (e) => [...[...Array(25)].map((t, r) => `--${e ? `${e}-` : ""}overlays-${r}`), `--${e ? `${e}-` : ""}palette-AppBar-darkBg`, `--${e ? `${e}-` : ""}palette-AppBar-darkColor`], ra = (e) => (t, r) => {
  const n = e.rootSelector || ":root", o = e.colorSchemeSelector;
  let i = o;
  if (o === "class" && (i = ".%s"), o === "data" && (i = "[data-%s]"), o != null && o.startsWith("data-") && !o.includes("%s") && (i = `[${o}="%s"]`), e.defaultColorScheme === t) {
    if (t === "dark") {
      const s = {};
      return ta(e.cssVarPrefix).forEach((a) => {
        s[a] = r[a], delete r[a];
      }), i === "media" ? {
        [n]: r,
        "@media (prefers-color-scheme: dark)": {
          [n]: s
        }
      } : i ? {
        [i.replace("%s", t)]: s,
        [`${n}, ${i.replace("%s", t)}`]: r
      } : {
        [n]: {
          ...r,
          ...s
        }
      };
    }
    if (i && i !== "media")
      return `${n}, ${i.replace("%s", String(t))}`;
  } else if (t) {
    if (i === "media")
      return {
        [`@media (prefers-color-scheme: ${String(t)})`]: {
          [n]: r
        }
      };
    if (i)
      return i.replace("%s", String(t));
  }
  return n;
};
function na(e, t) {
  t.forEach((r) => {
    e[r] || (e[r] = {});
  });
}
function h(e, t, r) {
  !e[t] && r && (e[t] = r);
}
function Xe(e) {
  return typeof e != "string" || !e.startsWith("hsl") ? e : gn(e);
}
function Se(e, t) {
  `${t}Channel` in e || (e[`${t}Channel`] = He(Xe(e[t]), `MUI: Can't create \`palette.${t}Channel\` because \`palette.${t}\` is not one of these formats: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color().
To suppress this warning, you need to explicitly provide the \`palette.${t}Channel\` as a string (in rgb format, for example "12 12 12") or undefined if you want to remove the channel token.`));
}
function oa(e) {
  return typeof e == "number" ? `${e}px` : typeof e == "string" || typeof e == "function" || Array.isArray(e) ? e : "8px";
}
const Ce = (e) => {
  try {
    return e();
  } catch {
  }
}, ia = (e = "mui") => Ti(e);
function Lt(e, t, r, n) {
  if (!t)
    return;
  t = t === !0 ? {} : t;
  const o = n === "dark" ? "dark" : "light";
  if (!r) {
    e[n] = Zi({
      ...t,
      palette: {
        mode: o,
        ...t == null ? void 0 : t.palette
      }
    });
    return;
  }
  const {
    palette: i,
    ...s
  } = Ut({
    ...r,
    palette: {
      mode: o,
      ...t == null ? void 0 : t.palette
    }
  });
  return e[n] = {
    ...t,
    palette: i,
    opacity: {
      ...bn(o),
      ...t == null ? void 0 : t.opacity
    },
    overlays: (t == null ? void 0 : t.overlays) || vn(o)
  }, s;
}
function aa(e = {}, ...t) {
  const {
    colorSchemes: r = {
      light: !0
    },
    defaultColorScheme: n,
    disableCssColorScheme: o = !1,
    cssVarPrefix: i = "mui",
    shouldSkipGeneratingVar: s = ea,
    colorSchemeSelector: a = r.light && r.dark ? "media" : void 0,
    rootSelector: d = ":root",
    ...f
  } = e, g = Object.keys(r)[0], p = n || (r.light && g !== "light" ? "light" : g), m = ia(i), {
    [p]: S,
    light: b,
    dark: c,
    ...E
  } = r, $ = {
    ...E
  };
  let k = S;
  if ((p === "dark" && !("dark" in r) || p === "light" && !("light" in r)) && (k = !0), !k)
    throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The \`colorSchemes.${p}\` option is either missing or invalid.` : Fe(21, p));
  const O = Lt($, k, f, p);
  b && !$.light && Lt($, b, void 0, "light"), c && !$.dark && Lt($, c, void 0, "dark");
  let v = {
    defaultColorScheme: p,
    ...O,
    cssVarPrefix: i,
    colorSchemeSelector: a,
    rootSelector: d,
    getCssVar: m,
    colorSchemes: $,
    font: {
      ...Ni(O.typography),
      ...O.font
    },
    spacing: oa(f.spacing)
  };
  Object.keys(v.colorSchemes).forEach((te) => {
    const l = v.colorSchemes[te].palette, x = (R) => {
      const P = R.split("-"), L = P[1], oe = P[2];
      return m(R, l[L][oe]);
    };
    if (l.mode === "light" && (h(l.common, "background", "#fff"), h(l.common, "onBackground", "#000")), l.mode === "dark" && (h(l.common, "background", "#000"), h(l.common, "onBackground", "#fff")), na(l, ["Alert", "AppBar", "Avatar", "Button", "Chip", "FilledInput", "LinearProgress", "Skeleton", "Slider", "SnackbarContent", "SpeedDialAction", "StepConnector", "StepContent", "Switch", "TableCell", "Tooltip"]), l.mode === "light") {
      h(l.Alert, "errorColor", J(l.error.light, 0.6)), h(l.Alert, "infoColor", J(l.info.light, 0.6)), h(l.Alert, "successColor", J(l.success.light, 0.6)), h(l.Alert, "warningColor", J(l.warning.light, 0.6)), h(l.Alert, "errorFilledBg", x("palette-error-main")), h(l.Alert, "infoFilledBg", x("palette-info-main")), h(l.Alert, "successFilledBg", x("palette-success-main")), h(l.Alert, "warningFilledBg", x("palette-warning-main")), h(l.Alert, "errorFilledColor", Ce(() => l.getContrastText(l.error.main))), h(l.Alert, "infoFilledColor", Ce(() => l.getContrastText(l.info.main))), h(l.Alert, "successFilledColor", Ce(() => l.getContrastText(l.success.main))), h(l.Alert, "warningFilledColor", Ce(() => l.getContrastText(l.warning.main))), h(l.Alert, "errorStandardBg", Z(l.error.light, 0.9)), h(l.Alert, "infoStandardBg", Z(l.info.light, 0.9)), h(l.Alert, "successStandardBg", Z(l.success.light, 0.9)), h(l.Alert, "warningStandardBg", Z(l.warning.light, 0.9)), h(l.Alert, "errorIconColor", x("palette-error-main")), h(l.Alert, "infoIconColor", x("palette-info-main")), h(l.Alert, "successIconColor", x("palette-success-main")), h(l.Alert, "warningIconColor", x("palette-warning-main")), h(l.AppBar, "defaultBg", x("palette-grey-100")), h(l.Avatar, "defaultBg", x("palette-grey-400")), h(l.Button, "inheritContainedBg", x("palette-grey-300")), h(l.Button, "inheritContainedHoverBg", x("palette-grey-A100")), h(l.Chip, "defaultBorder", x("palette-grey-400")), h(l.Chip, "defaultAvatarColor", x("palette-grey-700")), h(l.Chip, "defaultIconColor", x("palette-grey-700")), h(l.FilledInput, "bg", "rgba(0, 0, 0, 0.06)"), h(l.FilledInput, "hoverBg", "rgba(0, 0, 0, 0.09)"), h(l.FilledInput, "disabledBg", "rgba(0, 0, 0, 0.12)"), h(l.LinearProgress, "primaryBg", Z(l.primary.main, 0.62)), h(l.LinearProgress, "secondaryBg", Z(l.secondary.main, 0.62)), h(l.LinearProgress, "errorBg", Z(l.error.main, 0.62)), h(l.LinearProgress, "infoBg", Z(l.info.main, 0.62)), h(l.LinearProgress, "successBg", Z(l.success.main, 0.62)), h(l.LinearProgress, "warningBg", Z(l.warning.main, 0.62)), h(l.Skeleton, "bg", `rgba(${x("palette-text-primaryChannel")} / 0.11)`), h(l.Slider, "primaryTrack", Z(l.primary.main, 0.62)), h(l.Slider, "secondaryTrack", Z(l.secondary.main, 0.62)), h(l.Slider, "errorTrack", Z(l.error.main, 0.62)), h(l.Slider, "infoTrack", Z(l.info.main, 0.62)), h(l.Slider, "successTrack", Z(l.success.main, 0.62)), h(l.Slider, "warningTrack", Z(l.warning.main, 0.62));
      const R = ut(l.background.default, 0.8);
      h(l.SnackbarContent, "bg", R), h(l.SnackbarContent, "color", Ce(() => l.getContrastText(R))), h(l.SpeedDialAction, "fabHoverBg", ut(l.background.paper, 0.15)), h(l.StepConnector, "border", x("palette-grey-400")), h(l.StepContent, "border", x("palette-grey-400")), h(l.Switch, "defaultColor", x("palette-common-white")), h(l.Switch, "defaultDisabledColor", x("palette-grey-100")), h(l.Switch, "primaryDisabledColor", Z(l.primary.main, 0.62)), h(l.Switch, "secondaryDisabledColor", Z(l.secondary.main, 0.62)), h(l.Switch, "errorDisabledColor", Z(l.error.main, 0.62)), h(l.Switch, "infoDisabledColor", Z(l.info.main, 0.62)), h(l.Switch, "successDisabledColor", Z(l.success.main, 0.62)), h(l.Switch, "warningDisabledColor", Z(l.warning.main, 0.62)), h(l.TableCell, "border", Z(ct(l.divider, 1), 0.88)), h(l.Tooltip, "bg", ct(l.grey[700], 0.92));
    }
    if (l.mode === "dark") {
      h(l.Alert, "errorColor", Z(l.error.light, 0.6)), h(l.Alert, "infoColor", Z(l.info.light, 0.6)), h(l.Alert, "successColor", Z(l.success.light, 0.6)), h(l.Alert, "warningColor", Z(l.warning.light, 0.6)), h(l.Alert, "errorFilledBg", x("palette-error-dark")), h(l.Alert, "infoFilledBg", x("palette-info-dark")), h(l.Alert, "successFilledBg", x("palette-success-dark")), h(l.Alert, "warningFilledBg", x("palette-warning-dark")), h(l.Alert, "errorFilledColor", Ce(() => l.getContrastText(l.error.dark))), h(l.Alert, "infoFilledColor", Ce(() => l.getContrastText(l.info.dark))), h(l.Alert, "successFilledColor", Ce(() => l.getContrastText(l.success.dark))), h(l.Alert, "warningFilledColor", Ce(() => l.getContrastText(l.warning.dark))), h(l.Alert, "errorStandardBg", J(l.error.light, 0.9)), h(l.Alert, "infoStandardBg", J(l.info.light, 0.9)), h(l.Alert, "successStandardBg", J(l.success.light, 0.9)), h(l.Alert, "warningStandardBg", J(l.warning.light, 0.9)), h(l.Alert, "errorIconColor", x("palette-error-main")), h(l.Alert, "infoIconColor", x("palette-info-main")), h(l.Alert, "successIconColor", x("palette-success-main")), h(l.Alert, "warningIconColor", x("palette-warning-main")), h(l.AppBar, "defaultBg", x("palette-grey-900")), h(l.AppBar, "darkBg", x("palette-background-paper")), h(l.AppBar, "darkColor", x("palette-text-primary")), h(l.Avatar, "defaultBg", x("palette-grey-600")), h(l.Button, "inheritContainedBg", x("palette-grey-800")), h(l.Button, "inheritContainedHoverBg", x("palette-grey-700")), h(l.Chip, "defaultBorder", x("palette-grey-700")), h(l.Chip, "defaultAvatarColor", x("palette-grey-300")), h(l.Chip, "defaultIconColor", x("palette-grey-300")), h(l.FilledInput, "bg", "rgba(255, 255, 255, 0.09)"), h(l.FilledInput, "hoverBg", "rgba(255, 255, 255, 0.13)"), h(l.FilledInput, "disabledBg", "rgba(255, 255, 255, 0.12)"), h(l.LinearProgress, "primaryBg", J(l.primary.main, 0.5)), h(l.LinearProgress, "secondaryBg", J(l.secondary.main, 0.5)), h(l.LinearProgress, "errorBg", J(l.error.main, 0.5)), h(l.LinearProgress, "infoBg", J(l.info.main, 0.5)), h(l.LinearProgress, "successBg", J(l.success.main, 0.5)), h(l.LinearProgress, "warningBg", J(l.warning.main, 0.5)), h(l.Skeleton, "bg", `rgba(${x("palette-text-primaryChannel")} / 0.13)`), h(l.Slider, "primaryTrack", J(l.primary.main, 0.5)), h(l.Slider, "secondaryTrack", J(l.secondary.main, 0.5)), h(l.Slider, "errorTrack", J(l.error.main, 0.5)), h(l.Slider, "infoTrack", J(l.info.main, 0.5)), h(l.Slider, "successTrack", J(l.success.main, 0.5)), h(l.Slider, "warningTrack", J(l.warning.main, 0.5));
      const R = ut(l.background.default, 0.98);
      h(l.SnackbarContent, "bg", R), h(l.SnackbarContent, "color", Ce(() => l.getContrastText(R))), h(l.SpeedDialAction, "fabHoverBg", ut(l.background.paper, 0.15)), h(l.StepConnector, "border", x("palette-grey-600")), h(l.StepContent, "border", x("palette-grey-600")), h(l.Switch, "defaultColor", x("palette-grey-300")), h(l.Switch, "defaultDisabledColor", x("palette-grey-600")), h(l.Switch, "primaryDisabledColor", J(l.primary.main, 0.55)), h(l.Switch, "secondaryDisabledColor", J(l.secondary.main, 0.55)), h(l.Switch, "errorDisabledColor", J(l.error.main, 0.55)), h(l.Switch, "infoDisabledColor", J(l.info.main, 0.55)), h(l.Switch, "successDisabledColor", J(l.success.main, 0.55)), h(l.Switch, "warningDisabledColor", J(l.warning.main, 0.55)), h(l.TableCell, "border", J(ct(l.divider, 1), 0.68)), h(l.Tooltip, "bg", ct(l.grey[700], 0.92));
    }
    Se(l.background, "default"), Se(l.background, "paper"), Se(l.common, "background"), Se(l.common, "onBackground"), Se(l, "divider"), Object.keys(l).forEach((R) => {
      const P = l[R];
      R !== "tonalOffset" && P && typeof P == "object" && (P.main && h(l[R], "mainChannel", He(Xe(P.main))), P.light && h(l[R], "lightChannel", He(Xe(P.light))), P.dark && h(l[R], "darkChannel", He(Xe(P.dark))), P.contrastText && h(l[R], "contrastTextChannel", He(Xe(P.contrastText))), R === "text" && (Se(l[R], "primary"), Se(l[R], "secondary")), R === "action" && (P.active && Se(l[R], "active"), P.selected && Se(l[R], "selected")));
    });
  }), v = t.reduce((te, l) => he(te, l), v);
  const y = {
    prefix: i,
    disableCssColorScheme: o,
    shouldSkipGeneratingVar: s,
    getSelector: ra(v)
  }, {
    vars: A,
    generateThemeVars: q,
    generateStyleSheets: Q
  } = Oi(v, y);
  return v.vars = A, Object.entries(v.colorSchemes[v.defaultColorScheme]).forEach(([te, l]) => {
    v[te] = l;
  }), v.generateThemeVars = q, v.generateStyleSheets = Q, v.generateSpacing = function() {
    return sn(f.spacing, Jt(this));
  }, v.getColorSchemeSelector = Ri(a), v.spacing = v.generateSpacing(), v.shouldSkipGeneratingVar = s, v.unstable_sxConfig = {
    ...Ft,
    ...f == null ? void 0 : f.unstable_sxConfig
  }, v.unstable_sx = function(l) {
    return Le({
      sx: l,
      theme: this
    });
  }, v.toRuntimeSource = yn, v;
}
function Ur(e, t, r) {
  e.colorSchemes && r && (e.colorSchemes[t] = {
    ...r !== !0 && r,
    palette: nr({
      ...r === !0 ? {} : r.palette,
      mode: t
    })
    // cast type to skip module augmentation test
  });
}
function or(e = {}, ...t) {
  const {
    palette: r,
    cssVariables: n = !1,
    colorSchemes: o = r ? void 0 : {
      light: !0
    },
    defaultColorScheme: i = r == null ? void 0 : r.mode,
    ...s
  } = e, a = i || "light", d = o == null ? void 0 : o[a], f = {
    ...o,
    ...r ? {
      [a]: {
        ...typeof d != "boolean" && d,
        palette: r
      }
    } : void 0
  };
  if (n === !1) {
    if (!("colorSchemes" in e))
      return Ut(e, ...t);
    let g = r;
    "palette" in e || f[a] && (f[a] !== !0 ? g = f[a].palette : a === "dark" && (g = {
      mode: "dark"
    }));
    const p = Ut({
      ...e,
      palette: g
    }, ...t);
    return p.defaultColorScheme = a, p.colorSchemes = f, p.palette.mode === "light" && (p.colorSchemes.light = {
      ...f.light !== !0 && f.light,
      palette: p.palette
    }, Ur(p, "dark", f.dark)), p.palette.mode === "dark" && (p.colorSchemes.dark = {
      ...f.dark !== !0 && f.dark,
      palette: p.palette
    }, Ur(p, "light", f.light)), p;
  }
  return !r && !("light" in f) && a === "light" && (f.light = !0), aa({
    ...s,
    colorSchemes: f,
    defaultColorScheme: a,
    ...typeof n != "boolean" && n
  }, ...t);
}
const sa = or();
function la(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
const ir = (e) => la(e) && e !== "classes", ue = ui({
  themeId: Nn,
  defaultTheme: sa,
  rootShouldForwardProp: ir
}), Re = {
  primary: {
    main: "#1994FC",
    //為了MUI theme的設定 無用
    custMain: "#1994FC",
    //這才是主色調
    onMain: "#FFFFFF",
    shadow: "#000000",
    outline: "#CECECE",
    elevated: "#FAFAFA",
    tonal: "#DBE9FF",
    onTonal: "#2D66BF",
    iconFont: "#7A7D80",
    iconOverlay: "#505050",
    surface: "#F5F5F6",
    neutral: "#34393D",
    fabBg: "#D1EAFE",
    fabFont: "#1994FC"
  },
  surface: {
    custMain: "#1994FC",
    onMain: "#FFFFFF",
    shadow: "#000000",
    outline: "#CECECE",
    elevated: "#FAFAFA",
    tonal: "#DBE9FF",
    onTonal: "#2D66BF",
    iconFont: "#7A7D80",
    iconOverlay: "#505050",
    surface: "#F5F5F6",
    neutral: "#34393D",
    fabBg: "#F5F5F6",
    fabFont: "#1994FC"
  },
  secondary: {
    main: "#1994FC",
    custMain: "#DBE9FF",
    onMain: "#FFFFFF",
    shadow: "#000000",
    outline: "#CECECE",
    elevated: "#FAFAFA",
    tonal: "#DBE9FF",
    onTonal: "#2D66BF",
    iconFont: "#7A7D80",
    iconOverlay: "#505050",
    surface: "#F5F5F6",
    neutral: "#34393D",
    fabBg: "#DBE9FF",
    fabFont: "#2D66BF"
  },
  tertiary: {
    custMain: "#1994FC",
    onMain: "#FFFFFF",
    shadow: "#000000",
    outline: "#CECECE",
    elevated: "#FAFAFA",
    tonal: "#DBE9FF",
    onTonal: "#2D66BF",
    iconFont: "#7A7D80",
    iconOverlay: "#505050",
    surface: "#BDDEDF",
    neutral: "#0E3A3B",
    fabBg: "#BDDEDF",
    fabFont: "#0E3A3B"
  }
}, dt = {
  primary: {
    main: "#1994FC",
    //為了MUI theme的設定 無用
    custMain: "#000000",
    //這才是主色調
    onMain: "#FFFFFF",
    shadow: "#000000",
    outline: "#CECECE",
    elevated: "#FAFAFA",
    tonal: "#DBE9FF",
    onTonal: "#2D66BF",
    iconFont: "#7A7D80",
    iconOverlay: "#505050",
    surface: "#F5F5F6",
    neutral: "#34393D",
    fabBg: "#D1EAFE",
    fabFont: "#1994FC"
  },
  surface: {
    custMain: "#1994FC",
    onMain: "#FFFFFF",
    shadow: "#000000",
    outline: "#CECECE",
    elevated: "#FAFAFA",
    tonal: "#DBE9FF",
    onTonal: "#2D66BF",
    iconFont: "#7A7D80",
    iconOverlay: "#505050",
    surface: "#F5F5F6",
    neutral: "#34393D",
    fabBg: "#F5F5F6",
    fabFont: "#1994FC"
  },
  secondary: {
    main: "#1994FC",
    custMain: "#DBE9FF",
    onMain: "#FFFFFF",
    shadow: "#000000",
    outline: "#CECECE",
    elevated: "#FAFAFA",
    tonal: "#DBE9FF",
    onTonal: "#2D66BF",
    iconFont: "#7A7D80",
    iconOverlay: "#505050",
    surface: "#F5F5F6",
    neutral: "#34393D",
    fabBg: "#DBE9FF",
    fabFont: "#2D66BF"
  },
  tertiary: {
    custMain: "#1994FC",
    onMain: "#FFFFFF",
    shadow: "#000000",
    outline: "#CECECE",
    elevated: "#FAFAFA",
    tonal: "#DBE9FF",
    onTonal: "#2D66BF",
    iconFont: "#7A7D80",
    iconOverlay: "#505050",
    surface: "#BDDEDF",
    neutral: "#0E3A3B",
    fabBg: "#BDDEDF",
    fabFont: "#0E3A3B"
  }
}, ar = ["#373737"], vs = or({
  palette: {
    primary: Re.primary,
    secondary: Re.secondary,
    tertiary: Re.tertiary,
    surface: Re.surface
  }
});
or({
  palette: {
    primary: dt.primary,
    secondary: dt.secondary,
    tertiary: dt.tertiary,
    surface: dt.surface
  }
});
const Pe = Ei;
process.env.NODE_ENV !== "production" && (u.node, u.object.isRequired);
function Ue(e) {
  return xi(e);
}
let Yr = 0;
function ca(e) {
  const [t, r] = F.useState(e), n = e || t;
  return F.useEffect(() => {
    t == null && (Yr += 1, r(`mui-${Yr}`));
  }, [t]), n;
}
const ua = {
  ...F
}, Gr = ua.useId;
function Cn(e) {
  if (Gr !== void 0) {
    const t = Gr();
    return e ?? t;
  }
  return ca(e);
}
function ht(e) {
  const t = F.useRef(e);
  return hi(() => {
    t.current = e;
  }), F.useRef((...r) => (
    // @ts-expect-error hide `this`
    (0, t.current)(...r)
  )).current;
}
function qr(...e) {
  const t = F.useRef(void 0), r = F.useCallback((n) => {
    const o = e.map((i) => {
      if (i == null)
        return null;
      if (typeof i == "function") {
        const s = i, a = s(n);
        return typeof a == "function" ? a : () => {
          s(null);
        };
      }
      return i.current = n, () => {
        i.current = null;
      };
    });
    return () => {
      o.forEach((i) => i == null ? void 0 : i());
    };
  }, e);
  return F.useMemo(() => e.every((n) => n == null) ? null : (n) => {
    t.current && (t.current(), t.current = void 0), n != null && (t.current = r(n));
  }, e);
}
const da = u.oneOfType([u.func, u.object]);
function sr(e, t) {
  return process.env.NODE_ENV === "production" ? () => null : function(...n) {
    return e(...n) || t(...n);
  };
}
function fa(e) {
  const {
    prototype: t = {}
  } = e;
  return !!t.isReactComponent;
}
function pa(e, t, r, n, o) {
  const i = e[t], s = o || t;
  if (i == null || // When server-side rendering React doesn't warn either.
  // This is not an accurate check for SSR.
  // This is only in place for emotion compat.
  // TODO: Revisit once https://github.com/facebook/react/issues/20047 is resolved.
  typeof window > "u")
    return null;
  let a;
  return typeof i == "function" && !fa(i) && (a = "Did you accidentally provide a plain function component instead?"), a !== void 0 ? new Error(`Invalid ${n} \`${s}\` supplied to \`${r}\`. Expected an element type that can hold a ref. ${a} For more information see https://mui.com/r/caveat-with-refs-guide`) : null;
}
const ga = sr(u.elementType, pa);
function Kr(e) {
  try {
    return e.matches(":focus-visible");
  } catch {
    process.env.NODE_ENV !== "production" && !/jsdom/.test(window.navigator.userAgent) && console.warn(["MUI: The `:focus-visible` pseudo class is not supported in this browser.", "Some components rely on this feature to work properly."].join(`
`));
  }
  return !1;
}
const Hr = {};
function Sn(e, t) {
  const r = F.useRef(Hr);
  return r.current === Hr && (r.current = e(t)), r;
}
class Ct {
  constructor() {
    Ge(this, "mountEffect", () => {
      this.shouldMount && !this.didMount && this.ref.current !== null && (this.didMount = !0, this.mounted.resolve());
    });
    this.ref = {
      current: null
    }, this.mounted = null, this.didMount = !1, this.shouldMount = !1, this.setShouldMount = null;
  }
  /** React ref to the ripple instance */
  /** If the ripple component should be mounted */
  /** Promise that resolves when the ripple component is mounted */
  /** If the ripple component has been mounted */
  /** React state hook setter */
  static create() {
    return new Ct();
  }
  static use() {
    const t = Sn(Ct.create).current, [r, n] = F.useState(!1);
    return t.shouldMount = r, t.setShouldMount = n, F.useEffect(t.mountEffect, [r]), t;
  }
  mount() {
    return this.mounted || (this.mounted = ma(), this.shouldMount = !0, this.setShouldMount(this.shouldMount)), this.mounted;
  }
  /* Ripple API */
  start(...t) {
    this.mount().then(() => {
      var r;
      return (r = this.ref.current) == null ? void 0 : r.start(...t);
    });
  }
  stop(...t) {
    this.mount().then(() => {
      var r;
      return (r = this.ref.current) == null ? void 0 : r.stop(...t);
    });
  }
  pulsate(...t) {
    this.mount().then(() => {
      var r;
      return (r = this.ref.current) == null ? void 0 : r.pulsate(...t);
    });
  }
}
function ha() {
  return Ct.use();
}
function ma() {
  let e, t;
  const r = new Promise((n, o) => {
    e = n, t = o;
  });
  return r.resolve = e, r.reject = t, r;
}
function Yt() {
  return Yt = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Yt.apply(null, arguments);
}
function ya(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e) if ({}.hasOwnProperty.call(e, n)) {
    if (t.indexOf(n) !== -1) continue;
    r[n] = e[n];
  }
  return r;
}
function Gt(e, t) {
  return Gt = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, n) {
    return r.__proto__ = n, r;
  }, Gt(e, t);
}
function ba(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, Gt(e, t);
}
const Xr = Ke.createContext(null);
function va(e) {
  if (e === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function lr(e, t) {
  var r = function(i) {
    return t && ft(i) ? t(i) : i;
  }, n = /* @__PURE__ */ Object.create(null);
  return e && In.map(e, function(o) {
    return o;
  }).forEach(function(o) {
    n[o.key] = r(o);
  }), n;
}
function Ca(e, t) {
  e = e || {}, t = t || {};
  function r(g) {
    return g in t ? t[g] : e[g];
  }
  var n = /* @__PURE__ */ Object.create(null), o = [];
  for (var i in e)
    i in t ? o.length && (n[i] = o, o = []) : o.push(i);
  var s, a = {};
  for (var d in t) {
    if (n[d])
      for (s = 0; s < n[d].length; s++) {
        var f = n[d][s];
        a[n[d][s]] = r(f);
      }
    a[d] = r(d);
  }
  for (s = 0; s < o.length; s++)
    a[o[s]] = r(o[s]);
  return a;
}
function Ie(e, t, r) {
  return r[t] != null ? r[t] : e.props[t];
}
function Sa(e, t) {
  return lr(e.children, function(r) {
    return pt(r, {
      onExited: t.bind(null, r),
      in: !0,
      appear: Ie(r, "appear", e),
      enter: Ie(r, "enter", e),
      exit: Ie(r, "exit", e)
    });
  });
}
function xa(e, t, r) {
  var n = lr(e.children), o = Ca(t, n);
  return Object.keys(o).forEach(function(i) {
    var s = o[i];
    if (ft(s)) {
      var a = i in t, d = i in n, f = t[i], g = ft(f) && !f.props.in;
      d && (!a || g) ? o[i] = pt(s, {
        onExited: r.bind(null, s),
        in: !0,
        exit: Ie(s, "exit", e),
        enter: Ie(s, "enter", e)
      }) : !d && a && !g ? o[i] = pt(s, {
        in: !1
      }) : d && a && ft(f) && (o[i] = pt(s, {
        onExited: r.bind(null, s),
        in: f.props.in,
        exit: Ie(s, "exit", e),
        enter: Ie(s, "enter", e)
      }));
    }
  }), o;
}
var Ea = Object.values || function(e) {
  return Object.keys(e).map(function(t) {
    return e[t];
  });
}, Ta = {
  component: "div",
  childFactory: function(t) {
    return t;
  }
}, cr = /* @__PURE__ */ function(e) {
  ba(t, e);
  function t(n, o) {
    var i;
    i = e.call(this, n, o) || this;
    var s = i.handleExited.bind(va(i));
    return i.state = {
      contextValue: {
        isMounting: !0
      },
      handleExited: s,
      firstRender: !0
    }, i;
  }
  var r = t.prototype;
  return r.componentDidMount = function() {
    this.mounted = !0, this.setState({
      contextValue: {
        isMounting: !1
      }
    });
  }, r.componentWillUnmount = function() {
    this.mounted = !1;
  }, t.getDerivedStateFromProps = function(o, i) {
    var s = i.children, a = i.handleExited, d = i.firstRender;
    return {
      children: d ? Sa(o, a) : xa(o, s, a),
      firstRender: !1
    };
  }, r.handleExited = function(o, i) {
    var s = lr(this.props.children);
    o.key in s || (o.props.onExited && o.props.onExited(i), this.mounted && this.setState(function(a) {
      var d = Yt({}, a.children);
      return delete d[o.key], {
        children: d
      };
    }));
  }, r.render = function() {
    var o = this.props, i = o.component, s = o.childFactory, a = ya(o, ["component", "childFactory"]), d = this.state.contextValue, f = Ea(this.state.children).map(s);
    return delete a.appear, delete a.enter, delete a.exit, i === null ? /* @__PURE__ */ Ke.createElement(Xr.Provider, {
      value: d
    }, f) : /* @__PURE__ */ Ke.createElement(Xr.Provider, {
      value: d
    }, /* @__PURE__ */ Ke.createElement(i, a, f));
  }, t;
}(Ke.Component);
cr.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * `<TransitionGroup>` renders a `<div>` by default. You can change this
   * behavior by providing a `component` prop.
   * If you use React v16+ and would like to avoid a wrapping `<div>` element
   * you can pass in `component={null}`. This is useful if the wrapping div
   * borks your css styles.
   */
  component: u.any,
  /**
   * A set of `<Transition>` components, that are toggled `in` and out as they
   * leave. the `<TransitionGroup>` will inject specific transition props, so
   * remember to spread them through if you are wrapping the `<Transition>` as
   * with our `<Fade>` example.
   *
   * While this component is meant for multiple `Transition` or `CSSTransition`
   * children, sometimes you may want to have a single transition child with
   * content that you want to be transitioned out and in when you change it
   * (e.g. routes, images etc.) In that case you can change the `key` prop of
   * the transition child as you change its content, this will cause
   * `TransitionGroup` to transition the child out and back in.
   */
  children: u.node,
  /**
   * A convenience prop that enables or disables appear animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  appear: u.bool,
  /**
   * A convenience prop that enables or disables enter animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  enter: u.bool,
  /**
   * A convenience prop that enables or disables exit animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  exit: u.bool,
  /**
   * You may need to apply reactive updates to a child as it is exiting.
   * This is generally done by using `cloneElement` however in the case of an exiting
   * child the element has already been removed and not accessible to the consumer.
   *
   * If you do need to update a child as it leaves you can provide a `childFactory`
   * to wrap every child, even the ones that are leaving.
   *
   * @type Function(child: ReactElement) -> ReactElement
   */
  childFactory: u.func
} : {};
cr.defaultProps = Ta;
const wa = [];
function $a(e) {
  F.useEffect(e, wa);
}
class ur {
  constructor() {
    Ge(this, "currentId", null);
    Ge(this, "clear", () => {
      this.currentId !== null && (clearTimeout(this.currentId), this.currentId = null);
    });
    Ge(this, "disposeEffect", () => this.clear);
  }
  static create() {
    return new ur();
  }
  /**
   * Executes `fn` after `delay`, clearing any previously scheduled call.
   */
  start(t, r) {
    this.clear(), this.currentId = setTimeout(() => {
      this.currentId = null, r();
    }, t);
  }
}
function Oa() {
  const e = Sn(ur.create).current;
  return $a(e.disposeEffect), e;
}
function xn(e) {
  const {
    className: t,
    classes: r,
    pulsate: n = !1,
    rippleX: o,
    rippleY: i,
    rippleSize: s,
    in: a,
    onExited: d,
    timeout: f
  } = e, [g, p] = F.useState(!1), m = fe(t, r.ripple, r.rippleVisible, n && r.ripplePulsate), S = {
    width: s,
    height: s,
    top: -(s / 2) + i,
    left: -(s / 2) + o
  }, b = fe(r.child, g && r.childLeaving, n && r.childPulsate);
  return !a && !g && p(!0), F.useEffect(() => {
    if (!a && d != null) {
      const c = setTimeout(d, f);
      return () => {
        clearTimeout(c);
      };
    }
  }, [d, a, f]), /* @__PURE__ */ ne("span", {
    className: m,
    style: S,
    children: /* @__PURE__ */ ne("span", {
      className: b
    })
  });
}
process.env.NODE_ENV !== "production" && (xn.propTypes = {
  /**
   * Override or extend the styles applied to the component.
   */
  classes: u.object.isRequired,
  className: u.string,
  /**
   * @ignore - injected from TransitionGroup
   */
  in: u.bool,
  /**
   * @ignore - injected from TransitionGroup
   */
  onExited: u.func,
  /**
   * If `true`, the ripple pulsates, typically indicating the keyboard focus state of an element.
   */
  pulsate: u.bool,
  /**
   * Diameter of the ripple.
   */
  rippleSize: u.number,
  /**
   * Horizontal position of the ripple center.
   */
  rippleX: u.number,
  /**
   * Vertical position of the ripple center.
   */
  rippleY: u.number,
  /**
   * exit delay
   */
  timeout: u.number.isRequired
});
const ye = We("MuiTouchRipple", ["root", "ripple", "rippleVisible", "ripplePulsate", "child", "childLeaving", "childPulsate"]), qt = 550, Ra = 80, Pa = et`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`, Fa = et`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`, Aa = et`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`, Ma = ue("span", {
  name: "MuiTouchRipple",
  slot: "Root"
})({
  overflow: "hidden",
  pointerEvents: "none",
  position: "absolute",
  zIndex: 0,
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  borderRadius: "inherit"
}), ka = ue(xn, {
  name: "MuiTouchRipple",
  slot: "Ripple"
})`
  opacity: 0;
  position: absolute;

  &.${ye.rippleVisible} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${Pa};
    animation-duration: ${qt}ms;
    animation-timing-function: ${({
  theme: e
}) => e.transitions.easing.easeInOut};
  }

  &.${ye.ripplePulsate} {
    animation-duration: ${({
  theme: e
}) => e.transitions.duration.shorter}ms;
  }

  & .${ye.child} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${ye.childLeaving} {
    opacity: 0;
    animation-name: ${Fa};
    animation-duration: ${qt}ms;
    animation-timing-function: ${({
  theme: e
}) => e.transitions.easing.easeInOut};
  }

  & .${ye.childPulsate} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
    animation-name: ${Aa};
    animation-duration: 2500ms;
    animation-timing-function: ${({
  theme: e
}) => e.transitions.easing.easeInOut};
    animation-iteration-count: infinite;
    animation-delay: 200ms;
  }
`, En = /* @__PURE__ */ F.forwardRef(function(t, r) {
  const n = Ue({
    props: t,
    name: "MuiTouchRipple"
  }), {
    center: o = !1,
    classes: i = {},
    className: s,
    ...a
  } = n, [d, f] = F.useState([]), g = F.useRef(0), p = F.useRef(null);
  F.useEffect(() => {
    p.current && (p.current(), p.current = null);
  }, [d]);
  const m = F.useRef(!1), S = Oa(), b = F.useRef(null), c = F.useRef(null), E = F.useCallback((v) => {
    const {
      pulsate: y,
      rippleX: A,
      rippleY: q,
      rippleSize: Q,
      cb: te
    } = v;
    f((l) => [...l, /* @__PURE__ */ ne(ka, {
      classes: {
        ripple: fe(i.ripple, ye.ripple),
        rippleVisible: fe(i.rippleVisible, ye.rippleVisible),
        ripplePulsate: fe(i.ripplePulsate, ye.ripplePulsate),
        child: fe(i.child, ye.child),
        childLeaving: fe(i.childLeaving, ye.childLeaving),
        childPulsate: fe(i.childPulsate, ye.childPulsate)
      },
      timeout: qt,
      pulsate: y,
      rippleX: A,
      rippleY: q,
      rippleSize: Q
    }, g.current)]), g.current += 1, p.current = te;
  }, [i]), $ = F.useCallback((v = {}, y = {}, A = () => {
  }) => {
    const {
      pulsate: q = !1,
      center: Q = o || y.pulsate,
      fakeElement: te = !1
      // For test purposes
    } = y;
    if ((v == null ? void 0 : v.type) === "mousedown" && m.current) {
      m.current = !1;
      return;
    }
    (v == null ? void 0 : v.type) === "touchstart" && (m.current = !0);
    const l = te ? null : c.current, x = l ? l.getBoundingClientRect() : {
      width: 0,
      height: 0,
      left: 0,
      top: 0
    };
    let R, P, L;
    if (Q || v === void 0 || v.clientX === 0 && v.clientY === 0 || !v.clientX && !v.touches)
      R = Math.round(x.width / 2), P = Math.round(x.height / 2);
    else {
      const {
        clientX: oe,
        clientY: ee
      } = v.touches && v.touches.length > 0 ? v.touches[0] : v;
      R = Math.round(oe - x.left), P = Math.round(ee - x.top);
    }
    if (Q)
      L = Math.sqrt((2 * x.width ** 2 + x.height ** 2) / 3), L % 2 === 0 && (L += 1);
    else {
      const oe = Math.max(Math.abs((l ? l.clientWidth : 0) - R), R) * 2 + 2, ee = Math.max(Math.abs((l ? l.clientHeight : 0) - P), P) * 2 + 2;
      L = Math.sqrt(oe ** 2 + ee ** 2);
    }
    v != null && v.touches ? b.current === null && (b.current = () => {
      E({
        pulsate: q,
        rippleX: R,
        rippleY: P,
        rippleSize: L,
        cb: A
      });
    }, S.start(Ra, () => {
      b.current && (b.current(), b.current = null);
    })) : E({
      pulsate: q,
      rippleX: R,
      rippleY: P,
      rippleSize: L,
      cb: A
    });
  }, [o, E, S]), k = F.useCallback(() => {
    $({}, {
      pulsate: !0
    });
  }, [$]), O = F.useCallback((v, y) => {
    if (S.clear(), (v == null ? void 0 : v.type) === "touchend" && b.current) {
      b.current(), b.current = null, S.start(0, () => {
        O(v, y);
      });
      return;
    }
    b.current = null, f((A) => A.length > 0 ? A.slice(1) : A), p.current = y;
  }, [S]);
  return F.useImperativeHandle(r, () => ({
    pulsate: k,
    start: $,
    stop: O
  }), [k, $, O]), /* @__PURE__ */ ne(Ma, {
    className: fe(ye.root, i.root, s),
    ref: c,
    ...a,
    children: /* @__PURE__ */ ne(cr, {
      component: null,
      exit: !0,
      children: d
    })
  });
});
process.env.NODE_ENV !== "production" && (En.propTypes = {
  /**
   * If `true`, the ripple starts at the center of the component
   * rather than at the point of interaction.
   */
  center: u.bool,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: u.object,
  /**
   * @ignore
   */
  className: u.string
});
function Ia(e) {
  return _e("MuiButtonBase", e);
}
const _a = We("MuiButtonBase", ["root", "disabled", "focusVisible"]), Ba = (e) => {
  const {
    disabled: t,
    focusVisible: r,
    focusVisibleClassName: n,
    classes: o
  } = e, s = nt({
    root: ["root", t && "disabled", r && "focusVisible"]
  }, Ia, o);
  return r && n && (s.root += ` ${n}`), s;
}, Na = ue("button", {
  name: "MuiButtonBase",
  slot: "Root"
})({
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  position: "relative",
  boxSizing: "border-box",
  WebkitTapHighlightColor: "transparent",
  backgroundColor: "transparent",
  // Reset default value
  // We disable the focus ring for mouse, touch and keyboard users.
  outline: 0,
  border: 0,
  margin: 0,
  // Remove the margin in Safari
  borderRadius: 0,
  padding: 0,
  // Remove the padding in Firefox
  cursor: "pointer",
  userSelect: "none",
  verticalAlign: "middle",
  MozAppearance: "none",
  // Reset
  WebkitAppearance: "none",
  // Reset
  textDecoration: "none",
  // So we take precedent over the style of a native <a /> element.
  color: "inherit",
  "&::-moz-focus-inner": {
    borderStyle: "none"
    // Remove Firefox dotted outline.
  },
  [`&.${_a.disabled}`]: {
    pointerEvents: "none",
    // Disable link interactions
    cursor: "default"
  },
  "@media print": {
    colorAdjust: "exact"
  }
}), Mt = /* @__PURE__ */ F.forwardRef(function(t, r) {
  const n = Ue({
    props: t,
    name: "MuiButtonBase"
  }), {
    action: o,
    centerRipple: i = !1,
    children: s,
    className: a,
    component: d = "button",
    disabled: f = !1,
    disableRipple: g = !1,
    disableTouchRipple: p = !1,
    focusRipple: m = !1,
    focusVisibleClassName: S,
    LinkComponent: b = "a",
    onBlur: c,
    onClick: E,
    onContextMenu: $,
    onDragLeave: k,
    onFocus: O,
    onFocusVisible: v,
    onKeyDown: y,
    onKeyUp: A,
    onMouseDown: q,
    onMouseLeave: Q,
    onMouseUp: te,
    onTouchEnd: l,
    onTouchMove: x,
    onTouchStart: R,
    tabIndex: P = 0,
    TouchRippleProps: L,
    touchRippleRef: oe,
    type: ee,
    ...ce
  } = n, pe = F.useRef(null), se = ha(), C = qr(se.ref, oe), [T, I] = F.useState(!1);
  f && T && I(!1), F.useImperativeHandle(o, () => ({
    focusVisible: () => {
      I(!0), pe.current.focus();
    }
  }), []);
  const N = se.shouldMount && !g && !f;
  F.useEffect(() => {
    T && m && !g && se.pulsate();
  }, [g, m, T, se]);
  const M = xe(se, "start", q, p), z = xe(se, "stop", $, p), _ = xe(se, "stop", k, p), D = xe(se, "stop", te, p), V = xe(se, "stop", (B) => {
    T && B.preventDefault(), Q && Q(B);
  }, p), W = xe(se, "start", R, p), j = xe(se, "stop", l, p), de = xe(se, "stop", x, p), w = xe(se, "stop", (B) => {
    Kr(B.target) || I(!1), c && c(B);
  }, !1), me = ht((B) => {
    pe.current || (pe.current = B.currentTarget), Kr(B.target) && (I(!0), v && v(B)), O && O(B);
  }), we = () => {
    const B = pe.current;
    return d && d !== "button" && !(B.tagName === "A" && B.href);
  }, ot = ht((B) => {
    m && !B.repeat && T && B.key === " " && se.stop(B, () => {
      se.start(B);
    }), B.target === B.currentTarget && we() && B.key === " " && B.preventDefault(), y && y(B), B.target === B.currentTarget && we() && B.key === "Enter" && !f && (B.preventDefault(), E && E(B));
  }), Pn = ht((B) => {
    m && B.key === " " && T && !B.defaultPrevented && se.stop(B, () => {
      se.pulsate(B);
    }), A && A(B), E && B.target === B.currentTarget && we() && B.key === " " && !B.defaultPrevented && E(B);
  });
  let it = d;
  it === "button" && (ce.href || ce.to) && (it = b);
  const Ye = {};
  it === "button" ? (Ye.type = ee === void 0 ? "button" : ee, Ye.disabled = f) : (!ce.href && !ce.to && (Ye.role = "button"), f && (Ye["aria-disabled"] = f));
  const Fn = qr(r, pe), pr = {
    ...n,
    centerRipple: i,
    component: d,
    disabled: f,
    disableRipple: g,
    disableTouchRipple: p,
    focusRipple: m,
    tabIndex: P,
    focusVisible: T
  }, An = Ba(pr);
  return /* @__PURE__ */ Xt(Na, {
    as: it,
    className: fe(An.root, a),
    ownerState: pr,
    onBlur: w,
    onClick: E,
    onContextMenu: z,
    onFocus: me,
    onKeyDown: ot,
    onKeyUp: Pn,
    onMouseDown: M,
    onMouseLeave: V,
    onMouseUp: D,
    onDragLeave: _,
    onTouchEnd: j,
    onTouchMove: de,
    onTouchStart: W,
    ref: Fn,
    tabIndex: f ? -1 : P,
    type: ee,
    ...Ye,
    ...ce,
    children: [s, N ? /* @__PURE__ */ ne(En, {
      ref: C,
      center: i,
      ...L
    }) : null]
  });
});
function xe(e, t, r, n = !1) {
  return ht((o) => (r && r(o), n || e[t](o), !0));
}
process.env.NODE_ENV !== "production" && (Mt.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * A ref for imperative actions.
   * It currently only supports `focusVisible()` action.
   */
  action: da,
  /**
   * If `true`, the ripples are centered.
   * They won't start at the cursor interaction position.
   * @default false
   */
  centerRipple: u.bool,
  /**
   * The content of the component.
   */
  children: u.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: u.object,
  /**
   * @ignore
   */
  className: u.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: ga,
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: u.bool,
  /**
   * If `true`, the ripple effect is disabled.
   *
   * ⚠️ Without a ripple there is no styling for :focus-visible by default. Be sure
   * to highlight the element by applying separate styles with the `.Mui-focusVisible` class.
   * @default false
   */
  disableRipple: u.bool,
  /**
   * If `true`, the touch ripple effect is disabled.
   * @default false
   */
  disableTouchRipple: u.bool,
  /**
   * If `true`, the base button will have a keyboard focus ripple.
   * @default false
   */
  focusRipple: u.bool,
  /**
   * This prop can help identify which element has keyboard focus.
   * The class name will be applied when the element gains the focus through keyboard interaction.
   * It's a polyfill for the [CSS :focus-visible selector](https://drafts.csswg.org/selectors-4/#the-focus-visible-pseudo).
   * The rationale for using this feature [is explained here](https://github.com/WICG/focus-visible/blob/HEAD/explainer.md).
   * A [polyfill can be used](https://github.com/WICG/focus-visible) to apply a `focus-visible` class to other components
   * if needed.
   */
  focusVisibleClassName: u.string,
  /**
   * @ignore
   */
  href: u.any,
  /**
   * The component used to render a link when the `href` prop is provided.
   * @default 'a'
   */
  LinkComponent: u.elementType,
  /**
   * @ignore
   */
  onBlur: u.func,
  /**
   * @ignore
   */
  onClick: u.func,
  /**
   * @ignore
   */
  onContextMenu: u.func,
  /**
   * @ignore
   */
  onDragLeave: u.func,
  /**
   * @ignore
   */
  onFocus: u.func,
  /**
   * Callback fired when the component is focused with a keyboard.
   * We trigger a `onFocus` callback too.
   */
  onFocusVisible: u.func,
  /**
   * @ignore
   */
  onKeyDown: u.func,
  /**
   * @ignore
   */
  onKeyUp: u.func,
  /**
   * @ignore
   */
  onMouseDown: u.func,
  /**
   * @ignore
   */
  onMouseLeave: u.func,
  /**
   * @ignore
   */
  onMouseUp: u.func,
  /**
   * @ignore
   */
  onTouchEnd: u.func,
  /**
   * @ignore
   */
  onTouchMove: u.func,
  /**
   * @ignore
   */
  onTouchStart: u.func,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: u.oneOfType([u.arrayOf(u.oneOfType([u.func, u.object, u.bool])), u.func, u.object]),
  /**
   * @default 0
   */
  tabIndex: u.number,
  /**
   * Props applied to the `TouchRipple` element.
   */
  TouchRippleProps: u.object,
  /**
   * A ref that points to the `TouchRipple` element.
   */
  touchRippleRef: u.oneOfType([u.func, u.shape({
    current: u.shape({
      pulsate: u.func.isRequired,
      start: u.func.isRequired,
      stop: u.func.isRequired
    })
  })]),
  /**
   * @ignore
   */
  type: u.oneOfType([u.oneOf(["button", "reset", "submit"]), u.string])
});
function Da(e) {
  return typeof e.main == "string";
}
function za(e, t = []) {
  if (!Da(e))
    return !1;
  for (const r of t)
    if (!e.hasOwnProperty(r) || typeof e[r] != "string")
      return !1;
  return !0;
}
function Ze(e = []) {
  return ([, t]) => t && za(t, e);
}
function Va(e) {
  return _e("MuiCircularProgress", e);
}
We("MuiCircularProgress", ["root", "determinate", "indeterminate", "colorPrimary", "colorSecondary", "svg", "circle", "circleDeterminate", "circleIndeterminate", "circleDisableShrink"]);
const $e = 44, Kt = et`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`, Ht = et`
  0% {
    stroke-dasharray: 1px, 200px;
    stroke-dashoffset: 0;
  }

  50% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -15px;
  }

  100% {
    stroke-dasharray: 1px, 200px;
    stroke-dashoffset: -126px;
  }
`, ja = typeof Kt != "string" ? en`
        animation: ${Kt} 1.4s linear infinite;
      ` : null, La = typeof Ht != "string" ? en`
        animation: ${Ht} 1.4s ease-in-out infinite;
      ` : null, Wa = (e) => {
  const {
    classes: t,
    variant: r,
    color: n,
    disableShrink: o
  } = e, i = {
    root: ["root", r, `color${X(n)}`],
    svg: ["svg"],
    circle: ["circle", `circle${X(r)}`, o && "circleDisableShrink"]
  };
  return nt(i, Va, t);
}, Ua = ue("span", {
  name: "MuiCircularProgress",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.root, t[r.variant], t[`color${X(r.color)}`]];
  }
})(Pe(({
  theme: e
}) => ({
  display: "inline-block",
  variants: [{
    props: {
      variant: "determinate"
    },
    style: {
      transition: e.transitions.create("transform")
    }
  }, {
    props: {
      variant: "indeterminate"
    },
    style: ja || {
      animation: `${Kt} 1.4s linear infinite`
    }
  }, ...Object.entries(e.palette).filter(Ze()).map(([t]) => ({
    props: {
      color: t
    },
    style: {
      color: (e.vars || e).palette[t].main
    }
  }))]
}))), Ya = ue("svg", {
  name: "MuiCircularProgress",
  slot: "Svg"
})({
  display: "block"
  // Keeps the progress centered
}), Ga = ue("circle", {
  name: "MuiCircularProgress",
  slot: "Circle",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.circle, t[`circle${X(r.variant)}`], r.disableShrink && t.circleDisableShrink];
  }
})(Pe(({
  theme: e
}) => ({
  stroke: "currentColor",
  variants: [{
    props: {
      variant: "determinate"
    },
    style: {
      transition: e.transitions.create("stroke-dashoffset")
    }
  }, {
    props: {
      variant: "indeterminate"
    },
    style: {
      // Some default value that looks fine waiting for the animation to kicks in.
      strokeDasharray: "80px, 200px",
      strokeDashoffset: 0
      // Add the unit to fix a Edge 16 and below bug.
    }
  }, {
    props: ({
      ownerState: t
    }) => t.variant === "indeterminate" && !t.disableShrink,
    style: La || {
      // At runtime for Pigment CSS, `bufferAnimation` will be null and the generated keyframe will be used.
      animation: `${Ht} 1.4s ease-in-out infinite`
    }
  }]
}))), dr = /* @__PURE__ */ F.forwardRef(function(t, r) {
  const n = Ue({
    props: t,
    name: "MuiCircularProgress"
  }), {
    className: o,
    color: i = "primary",
    disableShrink: s = !1,
    size: a = 40,
    style: d,
    thickness: f = 3.6,
    value: g = 0,
    variant: p = "indeterminate",
    ...m
  } = n, S = {
    ...n,
    color: i,
    disableShrink: s,
    size: a,
    thickness: f,
    value: g,
    variant: p
  }, b = Wa(S), c = {}, E = {}, $ = {};
  if (p === "determinate") {
    const k = 2 * Math.PI * (($e - f) / 2);
    c.strokeDasharray = k.toFixed(3), $["aria-valuenow"] = Math.round(g), c.strokeDashoffset = `${((100 - g) / 100 * k).toFixed(3)}px`, E.transform = "rotate(-90deg)";
  }
  return /* @__PURE__ */ ne(Ua, {
    className: fe(b.root, o),
    style: {
      width: a,
      height: a,
      ...E,
      ...d
    },
    ownerState: S,
    ref: r,
    role: "progressbar",
    ...$,
    ...m,
    children: /* @__PURE__ */ ne(Ya, {
      className: b.svg,
      ownerState: S,
      viewBox: `${$e / 2} ${$e / 2} ${$e} ${$e}`,
      children: /* @__PURE__ */ ne(Ga, {
        className: b.circle,
        style: c,
        ownerState: S,
        cx: $e,
        cy: $e,
        r: ($e - f) / 2,
        fill: "none",
        strokeWidth: f
      })
    })
  });
});
process.env.NODE_ENV !== "production" && (dr.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Override or extend the styles applied to the component.
   */
  classes: u.object,
  /**
   * @ignore
   */
  className: u.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * @default 'primary'
   */
  color: u.oneOfType([u.oneOf(["inherit", "primary", "secondary", "error", "info", "success", "warning"]), u.string]),
  /**
   * If `true`, the shrink animation is disabled.
   * This only works if variant is `indeterminate`.
   * @default false
   */
  disableShrink: sr(u.bool, (e) => e.disableShrink && e.variant && e.variant !== "indeterminate" ? new Error("MUI: You have provided the `disableShrink` prop with a variant other than `indeterminate`. This will have no effect.") : null),
  /**
   * The size of the component.
   * If using a number, the pixel unit is assumed.
   * If using a string, you need to provide the CSS unit, for example '3rem'.
   * @default 40
   */
  size: u.oneOfType([u.number, u.string]),
  /**
   * @ignore
   */
  style: u.object,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: u.oneOfType([u.arrayOf(u.oneOfType([u.func, u.object, u.bool])), u.func, u.object]),
  /**
   * The thickness of the circle.
   * @default 3.6
   */
  thickness: u.number,
  /**
   * The value of the progress indicator for the determinate variant.
   * Value between 0 and 100.
   * @default 0
   */
  value: u.number,
  /**
   * The variant to use.
   * Use indeterminate when there is no progress value.
   * @default 'indeterminate'
   */
  variant: u.oneOf(["determinate", "indeterminate"])
});
function qa(e) {
  return _e("MuiButton", e);
}
const ke = We("MuiButton", ["root", "text", "textInherit", "textPrimary", "textSecondary", "textSuccess", "textError", "textInfo", "textWarning", "outlined", "outlinedInherit", "outlinedPrimary", "outlinedSecondary", "outlinedSuccess", "outlinedError", "outlinedInfo", "outlinedWarning", "contained", "containedInherit", "containedPrimary", "containedSecondary", "containedSuccess", "containedError", "containedInfo", "containedWarning", "disableElevation", "focusVisible", "disabled", "colorInherit", "colorPrimary", "colorSecondary", "colorSuccess", "colorError", "colorInfo", "colorWarning", "textSizeSmall", "textSizeMedium", "textSizeLarge", "outlinedSizeSmall", "outlinedSizeMedium", "outlinedSizeLarge", "containedSizeSmall", "containedSizeMedium", "containedSizeLarge", "sizeMedium", "sizeSmall", "sizeLarge", "fullWidth", "startIcon", "endIcon", "icon", "iconSizeSmall", "iconSizeMedium", "iconSizeLarge", "loading", "loadingWrapper", "loadingIconPlaceholder", "loadingIndicator", "loadingPositionCenter", "loadingPositionStart", "loadingPositionEnd"]), Tn = /* @__PURE__ */ F.createContext({});
process.env.NODE_ENV !== "production" && (Tn.displayName = "ButtonGroupContext");
const wn = /* @__PURE__ */ F.createContext(void 0);
process.env.NODE_ENV !== "production" && (wn.displayName = "ButtonGroupButtonContext");
const Ka = (e) => {
  const {
    color: t,
    disableElevation: r,
    fullWidth: n,
    size: o,
    variant: i,
    loading: s,
    loadingPosition: a,
    classes: d
  } = e, f = {
    root: ["root", s && "loading", i, `${i}${X(t)}`, `size${X(o)}`, `${i}Size${X(o)}`, `color${X(t)}`, r && "disableElevation", n && "fullWidth", s && `loadingPosition${X(a)}`],
    startIcon: ["icon", "startIcon", `iconSize${X(o)}`],
    endIcon: ["icon", "endIcon", `iconSize${X(o)}`],
    loadingIndicator: ["loadingIndicator"],
    loadingWrapper: ["loadingWrapper"]
  }, g = nt(f, qa, d);
  return {
    ...d,
    // forward the focused, disabled, etc. classes to the ButtonBase
    ...g
  };
}, $n = [{
  props: {
    size: "small"
  },
  style: {
    "& > *:nth-of-type(1)": {
      fontSize: 18
    }
  }
}, {
  props: {
    size: "medium"
  },
  style: {
    "& > *:nth-of-type(1)": {
      fontSize: 20
    }
  }
}, {
  props: {
    size: "large"
  },
  style: {
    "& > *:nth-of-type(1)": {
      fontSize: 22
    }
  }
}], Ha = ue(Mt, {
  shouldForwardProp: (e) => ir(e) || e === "classes",
  name: "MuiButton",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.root, t[r.variant], t[`${r.variant}${X(r.color)}`], t[`size${X(r.size)}`], t[`${r.variant}Size${X(r.size)}`], r.color === "inherit" && t.colorInherit, r.disableElevation && t.disableElevation, r.fullWidth && t.fullWidth, r.loading && t.loading];
  }
})(Pe(({
  theme: e
}) => {
  const t = e.palette.mode === "light" ? e.palette.grey[300] : e.palette.grey[800], r = e.palette.mode === "light" ? e.palette.grey.A100 : e.palette.grey[700];
  return {
    ...e.typography.button,
    minWidth: 64,
    padding: "6px 16px",
    border: 0,
    borderRadius: (e.vars || e).shape.borderRadius,
    transition: e.transitions.create(["background-color", "box-shadow", "border-color", "color"], {
      duration: e.transitions.duration.short
    }),
    "&:hover": {
      textDecoration: "none"
    },
    [`&.${ke.disabled}`]: {
      color: (e.vars || e).palette.action.disabled
    },
    variants: [{
      props: {
        variant: "contained"
      },
      style: {
        color: "var(--variant-containedColor)",
        backgroundColor: "var(--variant-containedBg)",
        boxShadow: (e.vars || e).shadows[2],
        "&:hover": {
          boxShadow: (e.vars || e).shadows[4],
          // Reset on touch devices, it doesn't add specificity
          "@media (hover: none)": {
            boxShadow: (e.vars || e).shadows[2]
          }
        },
        "&:active": {
          boxShadow: (e.vars || e).shadows[8]
        },
        [`&.${ke.focusVisible}`]: {
          boxShadow: (e.vars || e).shadows[6]
        },
        [`&.${ke.disabled}`]: {
          color: (e.vars || e).palette.action.disabled,
          boxShadow: (e.vars || e).shadows[0],
          backgroundColor: (e.vars || e).palette.action.disabledBackground
        }
      }
    }, {
      props: {
        variant: "outlined"
      },
      style: {
        padding: "5px 15px",
        border: "1px solid currentColor",
        borderColor: "var(--variant-outlinedBorder, currentColor)",
        backgroundColor: "var(--variant-outlinedBg)",
        color: "var(--variant-outlinedColor)",
        [`&.${ke.disabled}`]: {
          border: `1px solid ${(e.vars || e).palette.action.disabledBackground}`
        }
      }
    }, {
      props: {
        variant: "text"
      },
      style: {
        padding: "6px 8px",
        color: "var(--variant-textColor)",
        backgroundColor: "var(--variant-textBg)"
      }
    }, ...Object.entries(e.palette).filter(Ze()).map(([n]) => ({
      props: {
        color: n
      },
      style: {
        "--variant-textColor": (e.vars || e).palette[n].main,
        "--variant-outlinedColor": (e.vars || e).palette[n].main,
        "--variant-outlinedBorder": e.vars ? `rgba(${e.vars.palette[n].mainChannel} / 0.5)` : G(e.palette[n].main, 0.5),
        "--variant-containedColor": (e.vars || e).palette[n].contrastText,
        "--variant-containedBg": (e.vars || e).palette[n].main,
        "@media (hover: hover)": {
          "&:hover": {
            "--variant-containedBg": (e.vars || e).palette[n].dark,
            "--variant-textBg": e.vars ? `rgba(${e.vars.palette[n].mainChannel} / ${e.vars.palette.action.hoverOpacity})` : G(e.palette[n].main, e.palette.action.hoverOpacity),
            "--variant-outlinedBorder": (e.vars || e).palette[n].main,
            "--variant-outlinedBg": e.vars ? `rgba(${e.vars.palette[n].mainChannel} / ${e.vars.palette.action.hoverOpacity})` : G(e.palette[n].main, e.palette.action.hoverOpacity)
          }
        }
      }
    })), {
      props: {
        color: "inherit"
      },
      style: {
        color: "inherit",
        borderColor: "currentColor",
        "--variant-containedBg": e.vars ? e.vars.palette.Button.inheritContainedBg : t,
        "@media (hover: hover)": {
          "&:hover": {
            "--variant-containedBg": e.vars ? e.vars.palette.Button.inheritContainedHoverBg : r,
            "--variant-textBg": e.vars ? `rgba(${e.vars.palette.text.primaryChannel} / ${e.vars.palette.action.hoverOpacity})` : G(e.palette.text.primary, e.palette.action.hoverOpacity),
            "--variant-outlinedBg": e.vars ? `rgba(${e.vars.palette.text.primaryChannel} / ${e.vars.palette.action.hoverOpacity})` : G(e.palette.text.primary, e.palette.action.hoverOpacity)
          }
        }
      }
    }, {
      props: {
        size: "small",
        variant: "text"
      },
      style: {
        padding: "4px 5px",
        fontSize: e.typography.pxToRem(13)
      }
    }, {
      props: {
        size: "large",
        variant: "text"
      },
      style: {
        padding: "8px 11px",
        fontSize: e.typography.pxToRem(15)
      }
    }, {
      props: {
        size: "small",
        variant: "outlined"
      },
      style: {
        padding: "3px 9px",
        fontSize: e.typography.pxToRem(13)
      }
    }, {
      props: {
        size: "large",
        variant: "outlined"
      },
      style: {
        padding: "7px 21px",
        fontSize: e.typography.pxToRem(15)
      }
    }, {
      props: {
        size: "small",
        variant: "contained"
      },
      style: {
        padding: "4px 10px",
        fontSize: e.typography.pxToRem(13)
      }
    }, {
      props: {
        size: "large",
        variant: "contained"
      },
      style: {
        padding: "8px 22px",
        fontSize: e.typography.pxToRem(15)
      }
    }, {
      props: {
        disableElevation: !0
      },
      style: {
        boxShadow: "none",
        "&:hover": {
          boxShadow: "none"
        },
        [`&.${ke.focusVisible}`]: {
          boxShadow: "none"
        },
        "&:active": {
          boxShadow: "none"
        },
        [`&.${ke.disabled}`]: {
          boxShadow: "none"
        }
      }
    }, {
      props: {
        fullWidth: !0
      },
      style: {
        width: "100%"
      }
    }, {
      props: {
        loadingPosition: "center"
      },
      style: {
        transition: e.transitions.create(["background-color", "box-shadow", "border-color"], {
          duration: e.transitions.duration.short
        }),
        [`&.${ke.loading}`]: {
          color: "transparent"
        }
      }
    }]
  };
})), Xa = ue("span", {
  name: "MuiButton",
  slot: "StartIcon",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.startIcon, r.loading && t.startIconLoadingStart, t[`iconSize${X(r.size)}`]];
  }
})(({
  theme: e
}) => ({
  display: "inherit",
  marginRight: 8,
  marginLeft: -4,
  variants: [{
    props: {
      size: "small"
    },
    style: {
      marginLeft: -2
    }
  }, {
    props: {
      loadingPosition: "start",
      loading: !0
    },
    style: {
      transition: e.transitions.create(["opacity"], {
        duration: e.transitions.duration.short
      }),
      opacity: 0
    }
  }, {
    props: {
      loadingPosition: "start",
      loading: !0,
      fullWidth: !0
    },
    style: {
      marginRight: -8
    }
  }, ...$n]
})), Qa = ue("span", {
  name: "MuiButton",
  slot: "EndIcon",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.endIcon, r.loading && t.endIconLoadingEnd, t[`iconSize${X(r.size)}`]];
  }
})(({
  theme: e
}) => ({
  display: "inherit",
  marginRight: -4,
  marginLeft: 8,
  variants: [{
    props: {
      size: "small"
    },
    style: {
      marginRight: -2
    }
  }, {
    props: {
      loadingPosition: "end",
      loading: !0
    },
    style: {
      transition: e.transitions.create(["opacity"], {
        duration: e.transitions.duration.short
      }),
      opacity: 0
    }
  }, {
    props: {
      loadingPosition: "end",
      loading: !0,
      fullWidth: !0
    },
    style: {
      marginLeft: -8
    }
  }, ...$n]
})), Ja = ue("span", {
  name: "MuiButton",
  slot: "LoadingIndicator"
})(({
  theme: e
}) => ({
  display: "none",
  position: "absolute",
  visibility: "visible",
  variants: [{
    props: {
      loading: !0
    },
    style: {
      display: "flex"
    }
  }, {
    props: {
      loadingPosition: "start"
    },
    style: {
      left: 14
    }
  }, {
    props: {
      loadingPosition: "start",
      size: "small"
    },
    style: {
      left: 10
    }
  }, {
    props: {
      variant: "text",
      loadingPosition: "start"
    },
    style: {
      left: 6
    }
  }, {
    props: {
      loadingPosition: "center"
    },
    style: {
      left: "50%",
      transform: "translate(-50%)",
      color: (e.vars || e).palette.action.disabled
    }
  }, {
    props: {
      loadingPosition: "end"
    },
    style: {
      right: 14
    }
  }, {
    props: {
      loadingPosition: "end",
      size: "small"
    },
    style: {
      right: 10
    }
  }, {
    props: {
      variant: "text",
      loadingPosition: "end"
    },
    style: {
      right: 6
    }
  }, {
    props: {
      loadingPosition: "start",
      fullWidth: !0
    },
    style: {
      position: "relative",
      left: -10
    }
  }, {
    props: {
      loadingPosition: "end",
      fullWidth: !0
    },
    style: {
      position: "relative",
      right: -10
    }
  }]
})), Qr = ue("span", {
  name: "MuiButton",
  slot: "LoadingIconPlaceholder"
})({
  display: "inline-block",
  width: "1em",
  height: "1em"
}), On = /* @__PURE__ */ F.forwardRef(function(t, r) {
  const n = F.useContext(Tn), o = F.useContext(wn), i = vt(n, t), s = Ue({
    props: i,
    name: "MuiButton"
  }), {
    children: a,
    color: d = "primary",
    component: f = "button",
    className: g,
    disabled: p = !1,
    disableElevation: m = !1,
    disableFocusRipple: S = !1,
    endIcon: b,
    focusVisibleClassName: c,
    fullWidth: E = !1,
    id: $,
    loading: k = null,
    loadingIndicator: O,
    loadingPosition: v = "center",
    size: y = "medium",
    startIcon: A,
    type: q,
    variant: Q = "text",
    ...te
  } = s, l = Cn($), x = O ?? /* @__PURE__ */ ne(dr, {
    "aria-labelledby": l,
    color: "inherit",
    size: 16
  }), R = {
    ...s,
    color: d,
    component: f,
    disabled: p,
    disableElevation: m,
    disableFocusRipple: S,
    fullWidth: E,
    loading: k,
    loadingIndicator: x,
    loadingPosition: v,
    size: y,
    type: q,
    variant: Q
  }, P = Ka(R), L = (A || k && v === "start") && /* @__PURE__ */ ne(Xa, {
    className: P.startIcon,
    ownerState: R,
    children: A || /* @__PURE__ */ ne(Qr, {
      className: P.loadingIconPlaceholder,
      ownerState: R
    })
  }), oe = (b || k && v === "end") && /* @__PURE__ */ ne(Qa, {
    className: P.endIcon,
    ownerState: R,
    children: b || /* @__PURE__ */ ne(Qr, {
      className: P.loadingIconPlaceholder,
      ownerState: R
    })
  }), ee = o || "", ce = typeof k == "boolean" ? (
    // use plain HTML span to minimize the runtime overhead
    /* @__PURE__ */ ne("span", {
      className: P.loadingWrapper,
      style: {
        display: "contents"
      },
      children: k && /* @__PURE__ */ ne(Ja, {
        className: P.loadingIndicator,
        ownerState: R,
        children: x
      })
    })
  ) : null;
  return /* @__PURE__ */ Xt(Ha, {
    ownerState: R,
    className: fe(n.className, P.root, g, ee),
    component: f,
    disabled: p || k,
    focusRipple: !S,
    focusVisibleClassName: fe(P.focusVisible, c),
    ref: r,
    type: q,
    id: k ? l : $,
    ...te,
    classes: P,
    children: [L, v !== "end" && ce, a, v === "end" && ce, oe]
  });
});
process.env.NODE_ENV !== "production" && (On.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: u.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: u.object,
  /**
   * @ignore
   */
  className: u.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * @default 'primary'
   */
  color: u.oneOfType([u.oneOf(["inherit", "primary", "secondary", "success", "error", "info", "warning"]), u.string]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: u.elementType,
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: u.bool,
  /**
   * If `true`, no elevation is used.
   * @default false
   */
  disableElevation: u.bool,
  /**
   * If `true`, the  keyboard focus ripple is disabled.
   * @default false
   */
  disableFocusRipple: u.bool,
  /**
   * If `true`, the ripple effect is disabled.
   *
   * ⚠️ Without a ripple there is no styling for :focus-visible by default. Be sure
   * to highlight the element by applying separate styles with the `.Mui-focusVisible` class.
   * @default false
   */
  disableRipple: u.bool,
  /**
   * Element placed after the children.
   */
  endIcon: u.node,
  /**
   * @ignore
   */
  focusVisibleClassName: u.string,
  /**
   * If `true`, the button will take up the full width of its container.
   * @default false
   */
  fullWidth: u.bool,
  /**
   * The URL to link to when the button is clicked.
   * If defined, an `a` element will be used as the root node.
   */
  href: u.string,
  /**
   * @ignore
   */
  id: u.string,
  /**
   * If `true`, the loading indicator is visible and the button is disabled.
   * If `true | false`, the loading wrapper is always rendered before the children to prevent [Google Translation Crash](https://github.com/mui/material-ui/issues/27853).
   * @default null
   */
  loading: u.bool,
  /**
   * Element placed before the children if the button is in loading state.
   * The node should contain an element with `role="progressbar"` with an accessible name.
   * By default, it renders a `CircularProgress` that is labeled by the button itself.
   * @default <CircularProgress color="inherit" size={16} />
   */
  loadingIndicator: u.node,
  /**
   * The loading indicator can be positioned on the start, end, or the center of the button.
   * @default 'center'
   */
  loadingPosition: u.oneOf(["center", "end", "start"]),
  /**
   * The size of the component.
   * `small` is equivalent to the dense button styling.
   * @default 'medium'
   */
  size: u.oneOfType([u.oneOf(["small", "medium", "large"]), u.string]),
  /**
   * Element placed before the children.
   */
  startIcon: u.node,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: u.oneOfType([u.arrayOf(u.oneOfType([u.func, u.object, u.bool])), u.func, u.object]),
  /**
   * @ignore
   */
  type: u.oneOfType([u.oneOf(["button", "reset", "submit"]), u.string]),
  /**
   * The variant to use.
   * @default 'text'
   */
  variant: u.oneOfType([u.oneOf(["contained", "outlined", "text"]), u.string])
});
const Za = (e, t = "primary") => {
  var o;
  const r = Re[t], n = ((o = e == null ? void 0 : e.palette) == null ? void 0 : o[t]) ?? r;
  return {
    disabledcolor: ar[0],
    filled: {
      borderColor: "transparent",
      bgColor: n.custMain ?? r.custMain,
      //theme傳進來的顏色/fallback的顏色
      fontColor: n.onMain ?? r.onMain,
      overlay: n.onMain ?? r.onMain,
      focusBorderColor: "transparent",
      shadowColor: n.shadow ?? r.shadow
    },
    outlined: {
      borderColor: n.outline ?? r.outline,
      bgColor: "transparent",
      fontColor: n.custMain ?? r.custMain,
      overlay: n.custMain ?? r.custMain,
      focusBorderColor: n.custMain ?? r.custMain,
      shadowColor: "transparent"
    },
    text: {
      borderColor: "transparent",
      bgColor: "transparent",
      fontColor: n.custMain ?? r.custMain,
      overlay: n.custMain ?? r.custMain,
      focusBorderColor: "transparent",
      shadowColor: "transparent"
    },
    elevated: {
      borderColor: "transparent",
      bgColor: n.elevated ?? r.elevated,
      fontColor: n.custMain ?? r.custMain,
      overlay: n.custMain ?? r.custMain,
      focusBorderColor: "transparent",
      shadowColor: n.shadow ?? r.shadow
    },
    tonal: {
      borderColor: "transparent",
      bgColor: n.tonal ?? r.tonal,
      fontColor: n.onTonal ?? r.onTonal,
      overlay: n.onTonal ?? r.onTonal,
      focusBorderColor: "transparent",
      shadowColor: n.shadow ?? r.shadow
    }
  };
}, es = ue(On)(({
  "data-variant": e,
  size: t = "medium",
  theme: r,
  "data-color": n = "primary"
}) => {
  const o = Za(r, n), s = [
    "filled",
    "outlined",
    "text",
    "elevated",
    "tonal"
  ].includes(
    e
  ) ? e : "filled", a = o[s], d = {
    small: {},
    medium: {
      fontSize: "14px",
      height: "40px"
    },
    large: {
      fontSize: "20px",
      height: "70px"
    }
  }[t], f = (g) => ({
    textTransform: "none",
    fontFamily: "'Noto Sans', 'Noto Sans TC', sans-serif;",
    borderRadius: 6,
    fontWeight: 500,
    padding: "10px 24px",
    "&::before": {
      content: '""',
      position: "absolute",
      left: 0,
      top: 0,
      width: "100%",
      height: "100%",
      backgroundColor: g.overlay,
      // 半透明白色遮罩
      borderRadius: 6,
      opacity: 0,
      transition: "opacity 0.3s",
      pointerEvents: "none",
      // 確保不影響互動
      zIndex: 1
      // 蓋在 button 上但不蓋文字
    },
    "&:hover::before": {
      opacity: 0.08
    },
    "&:active::before, &:focus-visible::before": {
      opacity: 0.12
    },
    "&.Mui-disabled": {
      color: G(o.disabledcolor, 0.38)
    },
    ...d
  });
  switch (s) {
    case "filled":
      return {
        ...f(a),
        backgroundColor: a.bgColor,
        color: a.fontColor,
        "&:hover": {
          boxShadow: `0px 1px 3px 1px ${G(a.shadowColor, 0.15)}, 0px 1px 2px 0px ${G(a.shadowColor, 0.3)}`
        },
        "&:active": {
          boxShadow: "none"
        },
        "&.Mui-disabled": {
          backgroundColor: G(o.disabledcolor, 0.12)
        }
      };
    case "outlined":
      return {
        ...f(a),
        border: `1px solid ${a.borderColor}`,
        color: a.fontColor,
        backgroundColor: a.bgColor,
        "&:focus-visible": {
          border: `1px solid ${a.fontColor}`
        },
        "&:active": {
          border: `1px solid ${a.borderColor}`
        }
      };
    case "text":
      return {
        ...f(a),
        backgroundColor: a.bgColor,
        color: a.fontColor,
        "&:focus-visible::before": {
          backgroundColor: G(a.overlay, 0.12)
        }
      };
    case "elevated":
      return {
        ...f(a),
        backgroundColor: a.bgColor,
        color: a.fontColor,
        boxShadow: `0px 1px 3px 1px ${G(a.shadowColor, 0.15)}, 0px 1px 2px 0px ${G(a.shadowColor, 0.3)}`,
        "&:hover": {
          boxShadow: `0px 2px 6px 2px ${G(a.shadowColor, 0.15)}, 0px 1px 2px 0px ${G(a.shadowColor, 0.3)}`
        },
        "&:active, &:focus-visible": {
          boxShadow: `0px 1px 3px 1px ${G(a.shadowColor, 0.15)}, 0px 1px 2px 0px ${G(a.shadowColor, 0.3)}`
        },
        "&.Mui-disabled": {
          backgroundColor: G(o.disabledcolor, 0.12)
        }
      };
    case "tonal":
      return {
        ...f(a),
        backgroundColor: a.bgColor,
        color: a.fontColor,
        "&:hover": {
          boxShadow: `0px 1px 3px 1px ${G(a.shadowColor, 0.15)}, 0px 1px 2px 0px ${G(a.shadowColor, 0.3)}`
        },
        "&:active": {
          boxShadow: "none"
        },
        "&.Mui-disabled": {
          backgroundColor: G(o.disabledcolor, 0.12)
        }
      };
  }
}), Cs = ({
  variant: e = "filled",
  color: t = "primary",
  ...r
}) => /* @__PURE__ */ ne(
  es,
  {
    disableElevation: !0,
    disableRipple: !0,
    ...r,
    "data-color": t,
    "data-variant": e
  }
);
function ts(e) {
  return _e("MuiFab", e);
}
const Jr = We("MuiFab", ["root", "primary", "secondary", "extended", "circular", "focusVisible", "disabled", "colorInherit", "sizeSmall", "sizeMedium", "sizeLarge", "info", "error", "warning", "success"]), rs = (e) => {
  const {
    color: t,
    variant: r,
    classes: n,
    size: o
  } = e, i = {
    root: ["root", r, `size${X(o)}`, t === "inherit" ? "colorInherit" : t]
  }, s = nt(i, ts, n);
  return {
    ...n,
    // forward the focused, disabled, etc. classes to the ButtonBase
    ...s
  };
}, ns = ue(Mt, {
  name: "MuiFab",
  slot: "Root",
  shouldForwardProp: (e) => ir(e) || e === "classes",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.root, t[r.variant], t[`size${X(r.size)}`], r.color === "inherit" && t.colorInherit, t[X(r.size)], t[r.color]];
  }
})(Pe(({
  theme: e
}) => {
  var t, r;
  return {
    ...e.typography.button,
    minHeight: 36,
    transition: e.transitions.create(["background-color", "box-shadow", "border-color"], {
      duration: e.transitions.duration.short
    }),
    borderRadius: "50%",
    padding: 0,
    minWidth: 0,
    width: 56,
    height: 56,
    zIndex: (e.vars || e).zIndex.fab,
    boxShadow: (e.vars || e).shadows[6],
    "&:active": {
      boxShadow: (e.vars || e).shadows[12]
    },
    color: e.vars ? e.vars.palette.grey[900] : (r = (t = e.palette).getContrastText) == null ? void 0 : r.call(t, e.palette.grey[300]),
    backgroundColor: (e.vars || e).palette.grey[300],
    "&:hover": {
      backgroundColor: (e.vars || e).palette.grey.A100,
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        backgroundColor: (e.vars || e).palette.grey[300]
      },
      textDecoration: "none"
    },
    [`&.${Jr.focusVisible}`]: {
      boxShadow: (e.vars || e).shadows[6]
    },
    variants: [{
      props: {
        size: "small"
      },
      style: {
        width: 40,
        height: 40
      }
    }, {
      props: {
        size: "medium"
      },
      style: {
        width: 48,
        height: 48
      }
    }, {
      props: {
        variant: "extended"
      },
      style: {
        borderRadius: 48 / 2,
        padding: "0 16px",
        width: "auto",
        minHeight: "auto",
        minWidth: 48,
        height: 48
      }
    }, {
      props: {
        variant: "extended",
        size: "small"
      },
      style: {
        width: "auto",
        padding: "0 8px",
        borderRadius: 34 / 2,
        minWidth: 34,
        height: 34
      }
    }, {
      props: {
        variant: "extended",
        size: "medium"
      },
      style: {
        width: "auto",
        padding: "0 16px",
        borderRadius: 40 / 2,
        minWidth: 40,
        height: 40
      }
    }, {
      props: {
        color: "inherit"
      },
      style: {
        color: "inherit"
      }
    }]
  };
}), Pe(({
  theme: e
}) => ({
  variants: [...Object.entries(e.palette).filter(Ze(["dark", "contrastText"])).map(([t]) => ({
    props: {
      color: t
    },
    style: {
      color: (e.vars || e).palette[t].contrastText,
      backgroundColor: (e.vars || e).palette[t].main,
      "&:hover": {
        backgroundColor: (e.vars || e).palette[t].dark,
        // Reset on touch devices, it doesn't add specificity
        "@media (hover: none)": {
          backgroundColor: (e.vars || e).palette[t].main
        }
      }
    }
  }))]
})), Pe(({
  theme: e
}) => ({
  [`&.${Jr.disabled}`]: {
    color: (e.vars || e).palette.action.disabled,
    boxShadow: (e.vars || e).shadows[0],
    backgroundColor: (e.vars || e).palette.action.disabledBackground
  }
}))), Rn = /* @__PURE__ */ F.forwardRef(function(t, r) {
  const n = Ue({
    props: t,
    name: "MuiFab"
  }), {
    children: o,
    className: i,
    color: s = "default",
    component: a = "button",
    disabled: d = !1,
    disableFocusRipple: f = !1,
    focusVisibleClassName: g,
    size: p = "large",
    variant: m = "circular",
    ...S
  } = n, b = {
    ...n,
    color: s,
    component: a,
    disabled: d,
    disableFocusRipple: f,
    size: p,
    variant: m
  }, c = rs(b);
  return /* @__PURE__ */ ne(ns, {
    className: fe(c.root, i),
    component: a,
    disabled: d,
    focusRipple: !f,
    focusVisibleClassName: fe(c.focusVisible, g),
    ownerState: b,
    ref: r,
    ...S,
    classes: c,
    children: o
  });
});
process.env.NODE_ENV !== "production" && (Rn.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: u.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: u.object,
  /**
   * @ignore
   */
  className: u.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * @default 'default'
   */
  color: u.oneOfType([u.oneOf(["default", "error", "info", "inherit", "primary", "secondary", "success", "warning"]), u.string]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: u.elementType,
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: u.bool,
  /**
   * If `true`, the  keyboard focus ripple is disabled.
   * @default false
   */
  disableFocusRipple: u.bool,
  /**
   * If `true`, the ripple effect is disabled.
   */
  disableRipple: u.bool,
  /**
   * @ignore
   */
  focusVisibleClassName: u.string,
  /**
   * The URL to link to when the button is clicked.
   * If defined, an `a` element will be used as the root node.
   */
  href: u.string,
  /**
   * The size of the component.
   * `small` is equivalent to the dense button styling.
   * @default 'large'
   */
  size: u.oneOfType([u.oneOf(["small", "medium", "large"]), u.string]),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: u.oneOfType([u.arrayOf(u.oneOfType([u.func, u.object, u.bool])), u.func, u.object]),
  /**
   * The variant to use.
   * @default 'circular'
   */
  variant: u.oneOfType([u.oneOf(["circular", "extended"]), u.string])
});
const os = (e, t = "primary") => {
  var o;
  const r = Re[t], n = ((o = e == null ? void 0 : e.palette) == null ? void 0 : o[t]) ?? r;
  return {
    bgColor: n.fabBg ?? r.fabBg,
    fontColor: n.fabFont ?? r.fabFont,
    overlay: n.fabFont ?? r.fabFont
  };
}, is = ue(Rn)(({ "data-color": e, size: t = "medium", variant: r, theme: n }) => {
  const o = os(n, e), i = {
    small: {
      height: "40px",
      width: "40px",
      "& svg": {
        fontSize: 24
      }
    },
    medium: {
      height: "56px",
      width: "56px",
      "& svg": {
        fontSize: 24
      }
    },
    large: {
      height: "96px",
      width: "96px",
      "& svg": {
        fontSize: 36
      }
    }
  }[t], s = r === "extended";
  return {
    fontFamily: "'Noto Sans', 'Noto Sans TC', sans-serif;",
    fontWeight: 500,
    textTransform: "none",
    position: "relative",
    backgroundColor: o.bgColor,
    color: o.fontColor,
    borderRadius: s ? "6px" : "50%",
    ...s ? {} : i,
    "&::before": {
      content: '""',
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      backgroundColor: o.overlay,
      borderRadius: s ? "6px" : "50%",
      opacity: 0,
      transition: "opacity 0.2s ease-in-out"
    },
    "&:hover, &:focus-visible, &:active, &:focus": {
      backgroundColor: o.bgColor
    },
    "&:hover::before": {
      opacity: 0.08
    },
    "&:focus-visible::before, &:active::before": {
      opacity: 0.12
    }
  };
}), Ss = ({ color: e = "surface", ...t }) => /* @__PURE__ */ ne(is, { "data-color": e, size: "medium", disableFocusRipple: !0, ...t });
function as(e) {
  return _e("MuiIconButton", e);
}
const Zr = We("MuiIconButton", ["root", "disabled", "colorInherit", "colorPrimary", "colorSecondary", "colorError", "colorInfo", "colorSuccess", "colorWarning", "edgeStart", "edgeEnd", "sizeSmall", "sizeMedium", "sizeLarge", "loading", "loadingIndicator", "loadingWrapper"]), ss = (e) => {
  const {
    classes: t,
    disabled: r,
    color: n,
    edge: o,
    size: i,
    loading: s
  } = e, a = {
    root: ["root", s && "loading", r && "disabled", n !== "default" && `color${X(n)}`, o && `edge${X(o)}`, `size${X(i)}`],
    loadingIndicator: ["loadingIndicator"],
    loadingWrapper: ["loadingWrapper"]
  };
  return nt(a, as, t);
}, ls = ue(Mt, {
  name: "MuiIconButton",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.root, r.loading && t.loading, r.color !== "default" && t[`color${X(r.color)}`], r.edge && t[`edge${X(r.edge)}`], t[`size${X(r.size)}`]];
  }
})(Pe(({
  theme: e
}) => ({
  textAlign: "center",
  flex: "0 0 auto",
  fontSize: e.typography.pxToRem(24),
  padding: 8,
  borderRadius: "50%",
  color: (e.vars || e).palette.action.active,
  transition: e.transitions.create("background-color", {
    duration: e.transitions.duration.shortest
  }),
  variants: [{
    props: (t) => !t.disableRipple,
    style: {
      "--IconButton-hoverBg": e.vars ? `rgba(${e.vars.palette.action.activeChannel} / ${e.vars.palette.action.hoverOpacity})` : G(e.palette.action.active, e.palette.action.hoverOpacity),
      "&:hover": {
        backgroundColor: "var(--IconButton-hoverBg)",
        // Reset on touch devices, it doesn't add specificity
        "@media (hover: none)": {
          backgroundColor: "transparent"
        }
      }
    }
  }, {
    props: {
      edge: "start"
    },
    style: {
      marginLeft: -12
    }
  }, {
    props: {
      edge: "start",
      size: "small"
    },
    style: {
      marginLeft: -3
    }
  }, {
    props: {
      edge: "end"
    },
    style: {
      marginRight: -12
    }
  }, {
    props: {
      edge: "end",
      size: "small"
    },
    style: {
      marginRight: -3
    }
  }]
})), Pe(({
  theme: e
}) => ({
  variants: [{
    props: {
      color: "inherit"
    },
    style: {
      color: "inherit"
    }
  }, ...Object.entries(e.palette).filter(Ze()).map(([t]) => ({
    props: {
      color: t
    },
    style: {
      color: (e.vars || e).palette[t].main
    }
  })), ...Object.entries(e.palette).filter(Ze()).map(([t]) => ({
    props: {
      color: t
    },
    style: {
      "--IconButton-hoverBg": e.vars ? `rgba(${(e.vars || e).palette[t].mainChannel} / ${e.vars.palette.action.hoverOpacity})` : G((e.vars || e).palette[t].main, e.palette.action.hoverOpacity)
    }
  })), {
    props: {
      size: "small"
    },
    style: {
      padding: 5,
      fontSize: e.typography.pxToRem(18)
    }
  }, {
    props: {
      size: "large"
    },
    style: {
      padding: 12,
      fontSize: e.typography.pxToRem(28)
    }
  }],
  [`&.${Zr.disabled}`]: {
    backgroundColor: "transparent",
    color: (e.vars || e).palette.action.disabled
  },
  [`&.${Zr.loading}`]: {
    color: "transparent"
  }
}))), cs = ue("span", {
  name: "MuiIconButton",
  slot: "LoadingIndicator"
})(({
  theme: e
}) => ({
  display: "none",
  position: "absolute",
  visibility: "visible",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  color: (e.vars || e).palette.action.disabled,
  variants: [{
    props: {
      loading: !0
    },
    style: {
      display: "flex"
    }
  }]
})), fr = /* @__PURE__ */ F.forwardRef(function(t, r) {
  const n = Ue({
    props: t,
    name: "MuiIconButton"
  }), {
    edge: o = !1,
    children: i,
    className: s,
    color: a = "default",
    disabled: d = !1,
    disableFocusRipple: f = !1,
    size: g = "medium",
    id: p,
    loading: m = null,
    loadingIndicator: S,
    ...b
  } = n, c = Cn(p), E = S ?? /* @__PURE__ */ ne(dr, {
    "aria-labelledby": c,
    color: "inherit",
    size: 16
  }), $ = {
    ...n,
    edge: o,
    color: a,
    disabled: d,
    disableFocusRipple: f,
    loading: m,
    loadingIndicator: E,
    size: g
  }, k = ss($);
  return /* @__PURE__ */ Xt(ls, {
    id: m ? c : p,
    className: fe(k.root, s),
    centerRipple: !0,
    focusRipple: !f,
    disabled: d || m,
    ref: r,
    ...b,
    ownerState: $,
    children: [typeof m == "boolean" && // use plain HTML span to minimize the runtime overhead
    /* @__PURE__ */ ne("span", {
      className: k.loadingWrapper,
      style: {
        display: "contents"
      },
      children: /* @__PURE__ */ ne(cs, {
        className: k.loadingIndicator,
        ownerState: $,
        children: m && E
      })
    }), i]
  });
});
process.env.NODE_ENV !== "production" && (fr.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The icon to display.
   */
  children: sr(u.node, (e) => F.Children.toArray(e.children).some((r) => /* @__PURE__ */ F.isValidElement(r) && r.props.onClick) ? new Error(["MUI: You are providing an onClick event listener to a child of a button element.", "Prefer applying it to the IconButton directly.", "This guarantees that the whole <button> will be responsive to click events."].join(`
`)) : null),
  /**
   * Override or extend the styles applied to the component.
   */
  classes: u.object,
  /**
   * @ignore
   */
  className: u.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * @default 'default'
   */
  color: u.oneOfType([u.oneOf(["inherit", "default", "primary", "secondary", "error", "info", "success", "warning"]), u.string]),
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: u.bool,
  /**
   * If `true`, the  keyboard focus ripple is disabled.
   * @default false
   */
  disableFocusRipple: u.bool,
  /**
   * If `true`, the ripple effect is disabled.
   *
   * ⚠️ Without a ripple there is no styling for :focus-visible by default. Be sure
   * to highlight the element by applying separate styles with the `.Mui-focusVisible` class.
   * @default false
   */
  disableRipple: u.bool,
  /**
   * If given, uses a negative margin to counteract the padding on one
   * side (this is often helpful for aligning the left or right
   * side of the icon with content above or below, without ruining the border
   * size and shape).
   * @default false
   */
  edge: u.oneOf(["end", "start", !1]),
  /**
   * @ignore
   */
  id: u.string,
  /**
   * If `true`, the loading indicator is visible and the button is disabled.
   * If `true | false`, the loading wrapper is always rendered before the children to prevent [Google Translation Crash](https://github.com/mui/material-ui/issues/27853).
   * @default null
   */
  loading: u.bool,
  /**
   * Element placed before the children if the button is in loading state.
   * The node should contain an element with `role="progressbar"` with an accessible name.
   * By default, it renders a `CircularProgress` that is labeled by the button itself.
   * @default <CircularProgress color="inherit" size={16} />
   */
  loadingIndicator: u.node,
  /**
   * The size of the component.
   * `small` is equivalent to the dense button styling.
   * @default 'medium'
   */
  size: u.oneOfType([u.oneOf(["small", "medium", "large"]), u.string]),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: u.oneOfType([u.arrayOf(u.oneOfType([u.func, u.object, u.bool])), u.func, u.object])
});
const us = (e, t = "primary") => {
  var o;
  const r = Re[t], n = ((o = e == null ? void 0 : e.palette) == null ? void 0 : o[t]) ?? r;
  return {
    disabledcolor: ar[0],
    filled: {
      bgColor: n.custMain ?? r.custMain,
      fontColor: n.onMain ?? r.onMain,
      overlay: n.onMain ?? r.onMain,
      borderColor: "transparent"
    },
    standard: {
      bgColor: "transparent",
      fontColor: n.iconFont ?? r.iconFont,
      overlay: n.iconOverlay ?? r.iconOverlay,
      borderColor: "transparent"
    },
    tonal: {
      bgColor: n.tonal ?? r.tonal,
      fontColor: n.iconFont ?? r.iconFont,
      overlay: n.onTonal ?? r.onTonal,
      borderColor: "transparent"
    },
    outlined: {
      bgColor: "transparent",
      fontColor: n.iconFont ?? r.iconFont,
      overlay: n.iconOverlay ?? r.iconOverlay,
      borderColor: n.outline ?? r.outline
    }
  };
}, ds = (e, t = "primary") => {
  var o;
  const r = Re[t], n = ((o = e == null ? void 0 : e.palette) == null ? void 0 : o[t]) ?? r;
  return {
    disabledcolor: ar[0],
    filled: {
      bgColor: n.surface ?? r.surface,
      fontColor: n.custMain ?? r.custMain,
      overlay: n.custMain ?? r.custMain,
      selectedBgColor: n.custMain ?? r.custMain,
      selectedFontColor: n.onMain ?? r.onMain,
      selectedOverlay: n.onMain ?? r.onMain,
      borderColor: "transparent"
    },
    standard: {
      bgColor: "transparent",
      fontColor: n.custMain ?? r.custMain,
      overlay: n.iconOverlay ?? r.iconOverlay,
      selectedBgColor: "transparent",
      selectedFontColor: n.custMain ?? r.custMain,
      selectedOverlay: n.custMain ?? r.custMain,
      borderColor: "transparent"
    },
    tonal: {
      bgColor: n.surface ?? r.surface,
      fontColor: n.onTonal ?? r.onTonal,
      overlay: n.iconOverlay ?? r.iconOverlay,
      selectedBgColor: n.tonal ?? r.tonal,
      selectedFontColor: n.onTonal ?? r.onTonal,
      selectedOverlay: n.onTonal ?? r.onTonal,
      borderColor: "transparent"
    },
    outlined: {
      bgColor: "transparent",
      fontColor: n.iconFont ?? r.iconFont,
      overlay: n.iconOverlay ?? r.iconOverlay,
      selectedBgColor: n.neutral ?? r.neutral,
      selectedFontColor: n.onMain ?? r.onMain,
      selectedOverlay: n.onMain ?? r.onMain,
      borderColor: n.outline ?? r.outline
    }
  };
}, fs = ue(fr)(({
  "data-variant": e,
  "data-color": t,
  size: r = "small",
  theme: n
}) => {
  const o = us(n, t), i = ["filled", "standard", "tonal", "outlined"].includes(e) ? e : "filled", s = o[i], a = {
    small: {
      height: "40px",
      width: "40px",
      "& svg": {
        fontSize: 24
      }
    },
    medium: {
      height: "56px",
      width: "56px",
      "& svg": {
        fontSize: 24
      }
    },
    large: {
      height: "96px",
      width: "96px",
      "& svg": {
        fontSize: 36
      }
    }
  }[r], d = () => ({
    backgroundColor: s.bgColor,
    color: s.fontColor,
    borderRadius: 6,
    ...a,
    "&::before": {
      content: '""',
      position: "absolute",
      left: 0,
      top: 0,
      width: "100%",
      height: "100%",
      backgroundColor: s.overlay,
      // 半透明白色遮罩
      borderRadius: 6,
      opacity: 0,
      transition: "opacity 0.3s",
      pointerEvents: "none",
      // 確保不影響互動
      zIndex: 1
      // 蓋在 button 上但不蓋文字
    },
    "&.Mui-disabled": {
      backgroundColor: G(o.disabledcolor, 0.08),
      color: G(o.disabledcolor, 0.38)
    },
    "&:hover": {
      backgroundColor: s.bgColor
    },
    "&:hover::before": {
      opacity: 0.08
    },
    "&:active::before, &:focus-visible::before": {
      opacity: 0.12
    }
  });
  switch (i) {
    case "filled":
      return {
        ...d(),
        "&:hover": {
          backgroundColor: s.bgColor
        }
      };
    case "standard":
      return {
        ...d(),
        "&.Mui-disabled": {
          backgroundColor: "transparent"
        }
      };
    case "tonal":
      return {
        ...d(),
        "&:hover": {
          backgroundColor: s.bgColor
        }
      };
    case "outlined":
      return {
        ...d(),
        border: `1px solid ${s.borderColor}`,
        "&:hover": {
          backgroundColor: s.bgColor,
          border: `1px solid ${s.borderColor}`
        },
        "&.Mui-disabled": {
          backgroundColor: "transparent"
        }
      };
  }
}), ps = ue(fr)(({
  "data-variant": e,
  "data-color": t,
  clicked: r,
  size: n = "small",
  theme: o
}) => {
  const i = ds(o, t), s = ["filled", "standard", "tonal", "outlined"].includes(e) ? e : "filled", a = i[s], d = {
    small: {
      height: "40px",
      width: "40px",
      "& svg": {
        fontSize: 24
      }
    },
    medium: {
      height: "56px",
      width: "56px",
      "& svg": {
        fontSize: 24
      }
    },
    large: {
      height: "96px",
      width: "96px",
      "& svg": {
        fontSize: 36
      }
    }
  }[n], f = () => ({
    backgroundColor: r ? a.selectedBgColor : a.bgColor,
    color: r ? a.selectedFontColor : a.fontColor,
    borderRadius: 6,
    ...d,
    "&::before": {
      content: '""',
      position: "absolute",
      left: 0,
      top: 0,
      width: "100%",
      height: "100%",
      backgroundColor: r ? a.selectedOverlay : a.overlay,
      // 半透明白色遮罩
      borderRadius: 6,
      opacity: 0,
      transition: "opacity 0.3s",
      pointerEvents: "none",
      // 確保不影響互動
      zIndex: 1
      // 蓋在 button 上但不蓋文字
    },
    "&.Mui-disabled": {
      backgroundColor: G(i.disabledcolor, 0.12),
      color: G(i.disabledcolor, 0.38)
    },
    "&:hover": {
      backgroundColor: r ? a.selectedBgColor : a.bgColor
    },
    "&:hover::before": {
      opacity: 0.08
    },
    "&:active::before, &:focus-visible::before": {
      opacity: 0.12
    }
  });
  switch (s) {
    case "filled":
      return {
        ...f()
      };
    case "standard":
      return {
        ...f(),
        "&.Mui-disabled": {
          backgroundColor: "transparent"
        }
      };
    case "tonal":
      return {
        ...f(),
        "&.Mui-disabled": {
          backgroundColor: G(i.disabledcolor, 0.08),
          color: G(
            r ? a.selectedFontColor : a.fontColor,
            0.38
          )
        }
      };
    case "outlined":
      return {
        ...f(),
        border: r ? "" : `1px solid ${a.borderColor}`,
        "&.Mui-disabled": {
          backgroundColor: r ? G(i.disabledcolor, 0.12) : "transparent"
        },
        "&:hover": {
          border: r ? "" : `1px solid ${a.borderColor}`
        }
      };
  }
}), xs = ({
  variant: e,
  toggleIcon: t,
  children: r,
  color: n = "primary",
  ...o
}) => {
  const [i, s] = _n(!1), a = () => {
    console.log("toggleClick"), s(!i);
  };
  return t ? /* @__PURE__ */ ne(
    ps,
    {
      disableRipple: !0,
      "data-color": n,
      "data-variant": e,
      ...o,
      onClick: a,
      clicked: i,
      children: i ? r : t
    }
  ) : /* @__PURE__ */ ne(
    fs,
    {
      disableRipple: !0,
      "data-color": n,
      "data-variant": e,
      ...o,
      children: r
    }
  );
};
export {
  Cs as Button,
  Ss as Fab,
  xs as IconButton,
  vs as lemonTheme
};
