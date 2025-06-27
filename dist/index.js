var Al = Object.defineProperty;
var kl = (e, t, o) => t in e ? Al(e, t, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[t] = o;
var Oo = (e, t, o) => kl(e, typeof t != "symbol" ? t + "" : t, o);
import * as g from "react";
import je, { isValidElement as yn, cloneElement as vn, Children as Rl, useState as Gr, useEffect as Fl, useMemo as Pl } from "react";
import Ha, { isValidElementType as Qa, Memo as Bl, ForwardRef as Ml, isFragment as qr } from "react-is";
import { jsx as S, jsxs as ye } from "react/jsx-runtime";
import { AlertTitle as Il, FormControlLabel as Dl, tooltipClasses as Sn } from "@mui/material";
import Nl from "@emotion/styled";
import { ThemeContext as $l, keyframes as Jo, css as Ka } from "@emotion/react";
import * as Mr from "react-dom";
import an from "react-dom";
import { renderToStaticMarkup as jl } from "react-dom/server";
function Mt(e, ...t) {
  const o = new URL(`https://mui.com/production-error/?code=${e}`);
  return t.forEach((r) => o.searchParams.append("args[]", r)), `Minified MUI error #${e}; visit ${o} for the full message.`;
}
const Xr = "$$material";
function zl(e) {
  for (var t = 0, o, r = 0, i = e.length; i >= 4; ++r, i -= 4)
    o = e.charCodeAt(r) & 255 | (e.charCodeAt(++r) & 255) << 8 | (e.charCodeAt(++r) & 255) << 16 | (e.charCodeAt(++r) & 255) << 24, o = /* Math.imul(k, m): */
    (o & 65535) * 1540483477 + ((o >>> 16) * 59797 << 16), o ^= /* k >>> r: */
    o >>> 24, t = /* Math.imul(k, m): */
    (o & 65535) * 1540483477 + ((o >>> 16) * 59797 << 16) ^ /* Math.imul(h, m): */
    (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16);
  switch (i) {
    case 3:
      t ^= (e.charCodeAt(r + 2) & 255) << 16;
    case 2:
      t ^= (e.charCodeAt(r + 1) & 255) << 8;
    case 1:
      t ^= e.charCodeAt(r) & 255, t = /* Math.imul(h, m): */
      (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16);
  }
  return t ^= t >>> 13, t = /* Math.imul(h, m): */
  (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16), ((t ^ t >>> 15) >>> 0).toString(36);
}
var Ll = {
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
function Vl(e) {
  var t = /* @__PURE__ */ Object.create(null);
  return function(o) {
    return t[o] === void 0 && (t[o] = e(o)), t[o];
  };
}
var Wl = /[A-Z]|^ms/g, Ul = /_EMO_([^_]+?)_([^]*?)_EMO_/g, Ya = function(t) {
  return t.charCodeAt(1) === 45;
}, Ri = function(t) {
  return t != null && typeof t != "boolean";
}, pr = /* @__PURE__ */ Vl(function(e) {
  return Ya(e) ? e : e.replace(Wl, "-$&").toLowerCase();
}), Fi = function(t, o) {
  switch (t) {
    case "animation":
    case "animationName":
      if (typeof o == "string")
        return o.replace(Ul, function(r, i, a) {
          return Bt = {
            name: i,
            styles: a,
            next: Bt
          }, i;
        });
  }
  return Ll[t] !== 1 && !Ya(t) && typeof o == "number" && o !== 0 ? o + "px" : o;
};
function En(e, t, o) {
  if (o == null)
    return "";
  var r = o;
  if (r.__emotion_styles !== void 0)
    return r;
  switch (typeof o) {
    case "boolean":
      return "";
    case "object": {
      var i = o;
      if (i.anim === 1)
        return Bt = {
          name: i.name,
          styles: i.styles,
          next: Bt
        }, i.name;
      var a = o;
      if (a.styles !== void 0) {
        var l = a.next;
        if (l !== void 0)
          for (; l !== void 0; )
            Bt = {
              name: l.name,
              styles: l.styles,
              next: Bt
            }, l = l.next;
        var s = a.styles + ";";
        return s;
      }
      return Hl(e, t, o);
    }
  }
  var c = o;
  return c;
}
function Hl(e, t, o) {
  var r = "";
  if (Array.isArray(o))
    for (var i = 0; i < o.length; i++)
      r += En(e, t, o[i]) + ";";
  else
    for (var a in o) {
      var l = o[a];
      if (typeof l != "object") {
        var s = l;
        Ri(s) && (r += pr(a) + ":" + Fi(a, s) + ";");
      } else if (Array.isArray(l) && typeof l[0] == "string" && t == null)
        for (var c = 0; c < l.length; c++)
          Ri(l[c]) && (r += pr(a) + ":" + Fi(a, l[c]) + ";");
      else {
        var p = En(e, t, l);
        switch (a) {
          case "animation":
          case "animationName": {
            r += pr(a) + ":" + p + ";";
            break;
          }
          default:
            r += a + "{" + p + "}";
        }
      }
    }
  return r;
}
var Pi = /label:\s*([^\s;{]+)\s*(;|$)/g, Bt;
function Ql(e, t, o) {
  if (e.length === 1 && typeof e[0] == "object" && e[0] !== null && e[0].styles !== void 0)
    return e[0];
  var r = !0, i = "";
  Bt = void 0;
  var a = e[0];
  if (a == null || a.raw === void 0)
    r = !1, i += En(o, t, a);
  else {
    var l = a;
    i += l[0];
  }
  for (var s = 1; s < e.length; s++)
    if (i += En(o, t, e[s]), r) {
      var c = a;
      i += c[s];
    }
  Pi.lastIndex = 0;
  for (var p = "", d; (d = Pi.exec(i)) !== null; )
    p += "-" + d[1];
  var f = zl(i) + p;
  return {
    name: f,
    styles: i,
    next: Bt
  };
}
function Kl(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var sn = { exports: {} };
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var ur, Bi;
function Yl() {
  if (Bi) return ur;
  Bi = 1;
  var e = Object.getOwnPropertySymbols, t = Object.prototype.hasOwnProperty, o = Object.prototype.propertyIsEnumerable;
  function r(a) {
    if (a == null)
      throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(a);
  }
  function i() {
    try {
      if (!Object.assign)
        return !1;
      var a = new String("abc");
      if (a[5] = "de", Object.getOwnPropertyNames(a)[0] === "5")
        return !1;
      for (var l = {}, s = 0; s < 10; s++)
        l["_" + String.fromCharCode(s)] = s;
      var c = Object.getOwnPropertyNames(l).map(function(d) {
        return l[d];
      });
      if (c.join("") !== "0123456789")
        return !1;
      var p = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(d) {
        p[d] = d;
      }), Object.keys(Object.assign({}, p)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return ur = i() ? Object.assign : function(a, l) {
    for (var s, c = r(a), p, d = 1; d < arguments.length; d++) {
      s = Object(arguments[d]);
      for (var f in s)
        t.call(s, f) && (c[f] = s[f]);
      if (e) {
        p = e(s);
        for (var h = 0; h < p.length; h++)
          o.call(s, p[h]) && (c[p[h]] = s[p[h]]);
      }
    }
    return c;
  }, ur;
}
var dr, Mi;
function Jr() {
  if (Mi) return dr;
  Mi = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return dr = e, dr;
}
var fr, Ii;
function Ga() {
  return Ii || (Ii = 1, fr = Function.call.bind(Object.prototype.hasOwnProperty)), fr;
}
var gr, Di;
function Gl() {
  if (Di) return gr;
  Di = 1;
  var e = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var t = /* @__PURE__ */ Jr(), o = {}, r = /* @__PURE__ */ Ga();
    e = function(a) {
      var l = "Warning: " + a;
      typeof console < "u" && console.error(l);
      try {
        throw new Error(l);
      } catch {
      }
    };
  }
  function i(a, l, s, c, p) {
    if (process.env.NODE_ENV !== "production") {
      for (var d in a)
        if (r(a, d)) {
          var f;
          try {
            if (typeof a[d] != "function") {
              var h = Error(
                (c || "React class") + ": " + s + " type `" + d + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof a[d] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw h.name = "Invariant Violation", h;
            }
            f = a[d](l, d, c, s, null, t);
          } catch (v) {
            f = v;
          }
          if (f && !(f instanceof Error) && e(
            (c || "React class") + ": type specification of " + s + " `" + d + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof f + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), f instanceof Error && !(f.message in o)) {
            o[f.message] = !0;
            var b = p ? p() : "";
            e(
              "Failed " + s + " type: " + f.message + (b ?? "")
            );
          }
        }
    }
  }
  return i.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (o = {});
  }, gr = i, gr;
}
var hr, Ni;
function ql() {
  if (Ni) return hr;
  Ni = 1;
  var e = Ha, t = Yl(), o = /* @__PURE__ */ Jr(), r = /* @__PURE__ */ Ga(), i = /* @__PURE__ */ Gl(), a = function() {
  };
  process.env.NODE_ENV !== "production" && (a = function(s) {
    var c = "Warning: " + s;
    typeof console < "u" && console.error(c);
    try {
      throw new Error(c);
    } catch {
    }
  });
  function l() {
    return null;
  }
  return hr = function(s, c) {
    var p = typeof Symbol == "function" && Symbol.iterator, d = "@@iterator";
    function f(k) {
      var L = k && (p && k[p] || k[d]);
      if (typeof L == "function")
        return L;
    }
    var h = "<<anonymous>>", b = {
      array: x("array"),
      bigint: x("bigint"),
      bool: x("boolean"),
      func: x("function"),
      number: x("number"),
      object: x("object"),
      string: x("string"),
      symbol: x("symbol"),
      any: E(),
      arrayOf: w,
      element: m(),
      elementType: T(),
      instanceOf: A,
      node: u(),
      objectOf: $,
      oneOf: P,
      oneOfType: D,
      shape: B,
      exact: O
    };
    function v(k, L) {
      return k === L ? k !== 0 || 1 / k === 1 / L : k !== k && L !== L;
    }
    function y(k, L) {
      this.message = k, this.data = L && typeof L == "object" ? L : {}, this.stack = "";
    }
    y.prototype = Error.prototype;
    function C(k) {
      if (process.env.NODE_ENV !== "production")
        var L = {}, oe = 0;
      function ee(K, G, z, te, ne, Q, J) {
        if (te = te || h, Q = Q || z, J !== o) {
          if (c) {
            var X = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw X.name = "Invariant Violation", X;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var ce = te + ":" + z;
            !L[ce] && // Avoid spamming the console because they are often not actionable except for lib authors
            oe < 3 && (a(
              "You are manually calling a React.PropTypes validation function for the `" + Q + "` prop on `" + te + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), L[ce] = !0, oe++);
          }
        }
        return G[z] == null ? K ? G[z] === null ? new y("The " + ne + " `" + Q + "` is marked as required " + ("in `" + te + "`, but its value is `null`.")) : new y("The " + ne + " `" + Q + "` is marked as required in " + ("`" + te + "`, but its value is `undefined`.")) : null : k(G, z, te, ne, Q);
      }
      var Y = ee.bind(null, !1);
      return Y.isRequired = ee.bind(null, !0), Y;
    }
    function x(k) {
      function L(oe, ee, Y, K, G, z) {
        var te = oe[ee], ne = F(te);
        if (ne !== k) {
          var Q = W(te);
          return new y(
            "Invalid " + K + " `" + G + "` of type " + ("`" + Q + "` supplied to `" + Y + "`, expected ") + ("`" + k + "`."),
            { expectedType: k }
          );
        }
        return null;
      }
      return C(L);
    }
    function E() {
      return C(l);
    }
    function w(k) {
      function L(oe, ee, Y, K, G) {
        if (typeof k != "function")
          return new y("Property `" + G + "` of component `" + Y + "` has invalid PropType notation inside arrayOf.");
        var z = oe[ee];
        if (!Array.isArray(z)) {
          var te = F(z);
          return new y("Invalid " + K + " `" + G + "` of type " + ("`" + te + "` supplied to `" + Y + "`, expected an array."));
        }
        for (var ne = 0; ne < z.length; ne++) {
          var Q = k(z, ne, Y, K, G + "[" + ne + "]", o);
          if (Q instanceof Error)
            return Q;
        }
        return null;
      }
      return C(L);
    }
    function m() {
      function k(L, oe, ee, Y, K) {
        var G = L[oe];
        if (!s(G)) {
          var z = F(G);
          return new y("Invalid " + Y + " `" + K + "` of type " + ("`" + z + "` supplied to `" + ee + "`, expected a single ReactElement."));
        }
        return null;
      }
      return C(k);
    }
    function T() {
      function k(L, oe, ee, Y, K) {
        var G = L[oe];
        if (!e.isValidElementType(G)) {
          var z = F(G);
          return new y("Invalid " + Y + " `" + K + "` of type " + ("`" + z + "` supplied to `" + ee + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return C(k);
    }
    function A(k) {
      function L(oe, ee, Y, K, G) {
        if (!(oe[ee] instanceof k)) {
          var z = k.name || h, te = j(oe[ee]);
          return new y("Invalid " + K + " `" + G + "` of type " + ("`" + te + "` supplied to `" + Y + "`, expected ") + ("instance of `" + z + "`."));
        }
        return null;
      }
      return C(L);
    }
    function P(k) {
      if (!Array.isArray(k))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? a(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : a("Invalid argument supplied to oneOf, expected an array.")), l;
      function L(oe, ee, Y, K, G) {
        for (var z = oe[ee], te = 0; te < k.length; te++)
          if (v(z, k[te]))
            return null;
        var ne = JSON.stringify(k, function(J, X) {
          var ce = W(X);
          return ce === "symbol" ? String(X) : X;
        });
        return new y("Invalid " + K + " `" + G + "` of value `" + String(z) + "` " + ("supplied to `" + Y + "`, expected one of " + ne + "."));
      }
      return C(L);
    }
    function $(k) {
      function L(oe, ee, Y, K, G) {
        if (typeof k != "function")
          return new y("Property `" + G + "` of component `" + Y + "` has invalid PropType notation inside objectOf.");
        var z = oe[ee], te = F(z);
        if (te !== "object")
          return new y("Invalid " + K + " `" + G + "` of type " + ("`" + te + "` supplied to `" + Y + "`, expected an object."));
        for (var ne in z)
          if (r(z, ne)) {
            var Q = k(z, ne, Y, K, G + "." + ne, o);
            if (Q instanceof Error)
              return Q;
          }
        return null;
      }
      return C(L);
    }
    function D(k) {
      if (!Array.isArray(k))
        return process.env.NODE_ENV !== "production" && a("Invalid argument supplied to oneOfType, expected an instance of array."), l;
      for (var L = 0; L < k.length; L++) {
        var oe = k[L];
        if (typeof oe != "function")
          return a(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + U(oe) + " at index " + L + "."
          ), l;
      }
      function ee(Y, K, G, z, te) {
        for (var ne = [], Q = 0; Q < k.length; Q++) {
          var J = k[Q], X = J(Y, K, G, z, te, o);
          if (X == null)
            return null;
          X.data && r(X.data, "expectedType") && ne.push(X.data.expectedType);
        }
        var ce = ne.length > 0 ? ", expected one of type [" + ne.join(", ") + "]" : "";
        return new y("Invalid " + z + " `" + te + "` supplied to " + ("`" + G + "`" + ce + "."));
      }
      return C(ee);
    }
    function u() {
      function k(L, oe, ee, Y, K) {
        return M(L[oe]) ? null : new y("Invalid " + Y + " `" + K + "` supplied to " + ("`" + ee + "`, expected a ReactNode."));
      }
      return C(k);
    }
    function R(k, L, oe, ee, Y) {
      return new y(
        (k || "React class") + ": " + L + " type `" + oe + "." + ee + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + Y + "`."
      );
    }
    function B(k) {
      function L(oe, ee, Y, K, G) {
        var z = oe[ee], te = F(z);
        if (te !== "object")
          return new y("Invalid " + K + " `" + G + "` of type `" + te + "` " + ("supplied to `" + Y + "`, expected `object`."));
        for (var ne in k) {
          var Q = k[ne];
          if (typeof Q != "function")
            return R(Y, K, G, ne, W(Q));
          var J = Q(z, ne, Y, K, G + "." + ne, o);
          if (J)
            return J;
        }
        return null;
      }
      return C(L);
    }
    function O(k) {
      function L(oe, ee, Y, K, G) {
        var z = oe[ee], te = F(z);
        if (te !== "object")
          return new y("Invalid " + K + " `" + G + "` of type `" + te + "` " + ("supplied to `" + Y + "`, expected `object`."));
        var ne = t({}, oe[ee], k);
        for (var Q in ne) {
          var J = k[Q];
          if (r(k, Q) && typeof J != "function")
            return R(Y, K, G, Q, W(J));
          if (!J)
            return new y(
              "Invalid " + K + " `" + G + "` key `" + Q + "` supplied to `" + Y + "`.\nBad object: " + JSON.stringify(oe[ee], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(k), null, "  ")
            );
          var X = J(z, Q, Y, K, G + "." + Q, o);
          if (X)
            return X;
        }
        return null;
      }
      return C(L);
    }
    function M(k) {
      switch (typeof k) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !k;
        case "object":
          if (Array.isArray(k))
            return k.every(M);
          if (k === null || s(k))
            return !0;
          var L = f(k);
          if (L) {
            var oe = L.call(k), ee;
            if (L !== k.entries) {
              for (; !(ee = oe.next()).done; )
                if (!M(ee.value))
                  return !1;
            } else
              for (; !(ee = oe.next()).done; ) {
                var Y = ee.value;
                if (Y && !M(Y[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function N(k, L) {
      return k === "symbol" ? !0 : L ? L["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && L instanceof Symbol : !1;
    }
    function F(k) {
      var L = typeof k;
      return Array.isArray(k) ? "array" : k instanceof RegExp ? "object" : N(L, k) ? "symbol" : L;
    }
    function W(k) {
      if (typeof k > "u" || k === null)
        return "" + k;
      var L = F(k);
      if (L === "object") {
        if (k instanceof Date)
          return "date";
        if (k instanceof RegExp)
          return "regexp";
      }
      return L;
    }
    function U(k) {
      var L = W(k);
      switch (L) {
        case "array":
        case "object":
          return "an " + L;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + L;
        default:
          return L;
      }
    }
    function j(k) {
      return !k.constructor || !k.constructor.name ? h : k.constructor.name;
    }
    return b.checkPropTypes = i, b.resetWarningCache = i.resetWarningCache, b.PropTypes = b, b;
  }, hr;
}
var br, $i;
function Xl() {
  if ($i) return br;
  $i = 1;
  var e = /* @__PURE__ */ Jr();
  function t() {
  }
  function o() {
  }
  return o.resetWarningCache = t, br = function() {
    function r(l, s, c, p, d, f) {
      if (f !== e) {
        var h = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw h.name = "Invariant Violation", h;
      }
    }
    r.isRequired = r;
    function i() {
      return r;
    }
    var a = {
      array: r,
      bigint: r,
      bool: r,
      func: r,
      number: r,
      object: r,
      string: r,
      symbol: r,
      any: r,
      arrayOf: i,
      element: r,
      elementType: r,
      instanceOf: i,
      node: r,
      objectOf: i,
      oneOf: i,
      oneOfType: i,
      shape: i,
      exact: i,
      checkPropTypes: o,
      resetWarningCache: t
    };
    return a.PropTypes = a, a;
  }, br;
}
var ji;
function Jl() {
  if (ji) return sn.exports;
  if (ji = 1, process.env.NODE_ENV !== "production") {
    var e = Ha, t = !0;
    sn.exports = /* @__PURE__ */ ql()(e.isElement, t);
  } else
    sn.exports = /* @__PURE__ */ Xl()();
  return sn.exports;
}
var Zl = /* @__PURE__ */ Jl();
const n = /* @__PURE__ */ Kl(Zl);
/**
 * @mui/styled-engine v6.4.11
 *
 * @license MIT
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
function qa(e, t) {
  const o = Nl(e, t);
  return process.env.NODE_ENV !== "production" ? (...r) => {
    const i = typeof e == "string" ? `"${e}"` : "component";
    return r.length === 0 ? console.error([`MUI: Seems like you called \`styled(${i})()\` without a \`style\` argument.`, 'You must provide a `styles` argument: `styled("div")(styleYouForgotToPass)`.'].join(`
`)) : r.some((a) => a === void 0) && console.error(`MUI: the styled(${i})(...args) API requires all its args to be defined.`), o(...r);
  } : o;
}
function _l(e, t) {
  Array.isArray(e.__emotion_styles) && (e.__emotion_styles = t(e.__emotion_styles));
}
const zi = [];
function Li(e) {
  return zi[0] = e, Ql(zi);
}
function dt(e) {
  if (typeof e != "object" || e === null)
    return !1;
  const t = Object.getPrototypeOf(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}
function Xa(e) {
  if (/* @__PURE__ */ g.isValidElement(e) || Qa(e) || !dt(e))
    return e;
  const t = {};
  return Object.keys(e).forEach((o) => {
    t[o] = Xa(e[o]);
  }), t;
}
function qe(e, t, o = {
  clone: !0
}) {
  const r = o.clone ? {
    ...e
  } : e;
  return dt(e) && dt(t) && Object.keys(t).forEach((i) => {
    /* @__PURE__ */ g.isValidElement(t[i]) || Qa(t[i]) ? r[i] = t[i] : dt(t[i]) && // Avoid prototype pollution
    Object.prototype.hasOwnProperty.call(e, i) && dt(e[i]) ? r[i] = qe(e[i], t[i], o) : o.clone ? r[i] = dt(t[i]) ? Xa(t[i]) : t[i] : r[i] = t[i];
  }), r;
}
const ec = (e) => {
  const t = Object.keys(e).map((o) => ({
    key: o,
    val: e[o]
  })) || [];
  return t.sort((o, r) => o.val - r.val), t.reduce((o, r) => ({
    ...o,
    [r.key]: r.val
  }), {});
};
function tc(e) {
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
    unit: o = "px",
    step: r = 5,
    ...i
  } = e, a = ec(t), l = Object.keys(a);
  function s(h) {
    return `@media (min-width:${typeof t[h] == "number" ? t[h] : h}${o})`;
  }
  function c(h) {
    return `@media (max-width:${(typeof t[h] == "number" ? t[h] : h) - r / 100}${o})`;
  }
  function p(h, b) {
    const v = l.indexOf(b);
    return `@media (min-width:${typeof t[h] == "number" ? t[h] : h}${o}) and (max-width:${(v !== -1 && typeof t[l[v]] == "number" ? t[l[v]] : b) - r / 100}${o})`;
  }
  function d(h) {
    return l.indexOf(h) + 1 < l.length ? p(h, l[l.indexOf(h) + 1]) : s(h);
  }
  function f(h) {
    const b = l.indexOf(h);
    return b === 0 ? s(l[1]) : b === l.length - 1 ? c(l[b]) : p(h, l[l.indexOf(h) + 1]).replace("@media", "@media not all and");
  }
  return {
    keys: l,
    values: a,
    up: s,
    down: c,
    between: p,
    only: d,
    not: f,
    unit: o,
    ...i
  };
}
function oc(e, t) {
  if (!e.containerQueries)
    return t;
  const o = Object.keys(t).filter((r) => r.startsWith("@container")).sort((r, i) => {
    var l, s;
    const a = /min-width:\s*([0-9.]+)/;
    return +(((l = r.match(a)) == null ? void 0 : l[1]) || 0) - +(((s = i.match(a)) == null ? void 0 : s[1]) || 0);
  });
  return o.length ? o.reduce((r, i) => {
    const a = t[i];
    return delete r[i], r[i] = a, r;
  }, {
    ...t
  }) : t;
}
function nc(e, t) {
  return t === "@" || t.startsWith("@") && (e.some((o) => t.startsWith(`@${o}`)) || !!t.match(/^@\d/));
}
function rc(e, t) {
  const o = t.match(/^@([^/]+)?\/?(.+)?$/);
  if (!o) {
    if (process.env.NODE_ENV !== "production")
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The provided shorthand ${`(${t})`} is invalid. The format should be \`@<breakpoint | number>\` or \`@<breakpoint | number>/<container>\`.
For example, \`@sm\` or \`@600\` or \`@40rem/sidebar\`.` : Mt(18, `(${t})`));
    return null;
  }
  const [, r, i] = o, a = Number.isNaN(+r) ? r || 0 : +r;
  return e.containerQueries(i).up(a);
}
function ic(e) {
  const t = (a, l) => a.replace("@media", l ? `@container ${l}` : "@container");
  function o(a, l) {
    a.up = (...s) => t(e.breakpoints.up(...s), l), a.down = (...s) => t(e.breakpoints.down(...s), l), a.between = (...s) => t(e.breakpoints.between(...s), l), a.only = (...s) => t(e.breakpoints.only(...s), l), a.not = (...s) => {
      const c = t(e.breakpoints.not(...s), l);
      return c.includes("not all and") ? c.replace("not all and ", "").replace("min-width:", "width<").replace("max-width:", "width>").replace("and", "or") : c;
    };
  }
  const r = {}, i = (a) => (o(r, a), r);
  return o(i), {
    ...e,
    containerQueries: i
  };
}
const ac = {
  borderRadius: 4
}, Dt = process.env.NODE_ENV !== "production" ? n.oneOfType([n.number, n.string, n.object, n.array]) : {};
function zo(e, t) {
  return t ? qe(e, t, {
    clone: !1
    // No need to clone deep, it's way faster.
  }) : e;
}
const zn = {
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
}, Vi = {
  // Sorted ASC by size. That's important.
  // It can't be configured as it's used statically for propTypes.
  keys: ["xs", "sm", "md", "lg", "xl"],
  up: (e) => `@media (min-width:${zn[e]}px)`
}, sc = {
  containerQueries: (e) => ({
    up: (t) => {
      let o = typeof t == "number" ? t : zn[t] || t;
      return typeof o == "number" && (o = `${o}px`), e ? `@container ${e} (min-width:${o})` : `@container (min-width:${o})`;
    }
  })
};
function wt(e, t, o) {
  const r = e.theme || {};
  if (Array.isArray(t)) {
    const a = r.breakpoints || Vi;
    return t.reduce((l, s, c) => (l[a.up(a.keys[c])] = o(t[c]), l), {});
  }
  if (typeof t == "object") {
    const a = r.breakpoints || Vi;
    return Object.keys(t).reduce((l, s) => {
      if (nc(a.keys, s)) {
        const c = rc(r.containerQueries ? r : sc, s);
        c && (l[c] = o(t[s], s));
      } else if (Object.keys(a.values || zn).includes(s)) {
        const c = a.up(s);
        l[c] = o(t[s], s);
      } else {
        const c = s;
        l[c] = t[c];
      }
      return l;
    }, {});
  }
  return o(t);
}
function lc(e = {}) {
  var o;
  return ((o = e.keys) == null ? void 0 : o.reduce((r, i) => {
    const a = e.up(i);
    return r[a] = {}, r;
  }, {})) || {};
}
function cc(e, t) {
  return e.reduce((o, r) => {
    const i = o[r];
    return (!i || Object.keys(i).length === 0) && delete o[r], o;
  }, t);
}
function V(e) {
  if (typeof e != "string")
    throw new Error(process.env.NODE_ENV !== "production" ? "MUI: `capitalize(string)` expects a string argument." : Mt(7));
  return e.charAt(0).toUpperCase() + e.slice(1);
}
function Ln(e, t, o = !0) {
  if (!t || typeof t != "string")
    return null;
  if (e && e.vars && o) {
    const r = `vars.${t}`.split(".").reduce((i, a) => i && i[a] ? i[a] : null, e);
    if (r != null)
      return r;
  }
  return t.split(".").reduce((r, i) => r && r[i] != null ? r[i] : null, e);
}
function Tn(e, t, o, r = o) {
  let i;
  return typeof e == "function" ? i = e(o) : Array.isArray(e) ? i = e[o] || r : i = Ln(e, o) || r, t && (i = t(i, r, e)), i;
}
function Be(e) {
  const {
    prop: t,
    cssProperty: o = e.prop,
    themeKey: r,
    transform: i
  } = e, a = (l) => {
    if (l[t] == null)
      return null;
    const s = l[t], c = l.theme, p = Ln(c, r) || {};
    return wt(l, s, (f) => {
      let h = Tn(p, i, f);
      return f === h && typeof f == "string" && (h = Tn(p, i, `${t}${f === "default" ? "" : V(f)}`, f)), o === !1 ? h : {
        [o]: h
      };
    });
  };
  return a.propTypes = process.env.NODE_ENV !== "production" ? {
    [t]: Dt
  } : {}, a.filterProps = [t], a;
}
function pc(e) {
  const t = {};
  return (o) => (t[o] === void 0 && (t[o] = e(o)), t[o]);
}
const uc = {
  m: "margin",
  p: "padding"
}, dc = {
  t: "Top",
  r: "Right",
  b: "Bottom",
  l: "Left",
  x: ["Left", "Right"],
  y: ["Top", "Bottom"]
}, Wi = {
  marginX: "mx",
  marginY: "my",
  paddingX: "px",
  paddingY: "py"
}, fc = pc((e) => {
  if (e.length > 2)
    if (Wi[e])
      e = Wi[e];
    else
      return [e];
  const [t, o] = e.split(""), r = uc[t], i = dc[o] || "";
  return Array.isArray(i) ? i.map((a) => r + a) : [r + i];
}), Vn = ["m", "mt", "mr", "mb", "ml", "mx", "my", "margin", "marginTop", "marginRight", "marginBottom", "marginLeft", "marginX", "marginY", "marginInline", "marginInlineStart", "marginInlineEnd", "marginBlock", "marginBlockStart", "marginBlockEnd"], Wn = ["p", "pt", "pr", "pb", "pl", "px", "py", "padding", "paddingTop", "paddingRight", "paddingBottom", "paddingLeft", "paddingX", "paddingY", "paddingInline", "paddingInlineStart", "paddingInlineEnd", "paddingBlock", "paddingBlockStart", "paddingBlockEnd"], gc = [...Vn, ...Wn];
function Zo(e, t, o, r) {
  const i = Ln(e, t, !0) ?? o;
  return typeof i == "number" || typeof i == "string" ? (a) => typeof a == "string" ? a : (process.env.NODE_ENV !== "production" && typeof a != "number" && console.error(`MUI: Expected ${r} argument to be a number or a string, got ${a}.`), typeof i == "string" ? `calc(${a} * ${i})` : i * a) : Array.isArray(i) ? (a) => {
    if (typeof a == "string")
      return a;
    const l = Math.abs(a);
    process.env.NODE_ENV !== "production" && (Number.isInteger(l) ? l > i.length - 1 && console.error([`MUI: The value provided (${l}) overflows.`, `The supported values are: ${JSON.stringify(i)}.`, `${l} > ${i.length - 1}, you need to add the missing values.`].join(`
`)) : console.error([`MUI: The \`theme.${t}\` array type cannot be combined with non integer values.You should either use an integer value that can be used as index, or define the \`theme.${t}\` as a number.`].join(`
`)));
    const s = i[l];
    return a >= 0 ? s : typeof s == "number" ? -s : `-${s}`;
  } : typeof i == "function" ? i : (process.env.NODE_ENV !== "production" && console.error([`MUI: The \`theme.${t}\` value (${i}) is invalid.`, "It should be a number, an array or a function."].join(`
`)), () => {
  });
}
function Zr(e) {
  return Zo(e, "spacing", 8, "spacing");
}
function _o(e, t) {
  return typeof t == "string" || t == null ? t : e(t);
}
function hc(e, t) {
  return (o) => e.reduce((r, i) => (r[i] = _o(t, o), r), {});
}
function bc(e, t, o, r) {
  if (!t.includes(o))
    return null;
  const i = fc(o), a = hc(i, r), l = e[o];
  return wt(e, l, a);
}
function Ja(e, t) {
  const o = Zr(e.theme);
  return Object.keys(e).map((r) => bc(e, t, r, o)).reduce(zo, {});
}
function ke(e) {
  return Ja(e, Vn);
}
ke.propTypes = process.env.NODE_ENV !== "production" ? Vn.reduce((e, t) => (e[t] = Dt, e), {}) : {};
ke.filterProps = Vn;
function Re(e) {
  return Ja(e, Wn);
}
Re.propTypes = process.env.NODE_ENV !== "production" ? Wn.reduce((e, t) => (e[t] = Dt, e), {}) : {};
Re.filterProps = Wn;
process.env.NODE_ENV !== "production" && gc.reduce((e, t) => (e[t] = Dt, e), {});
function Za(e = 8, t = Zr({
  spacing: e
})) {
  if (e.mui)
    return e;
  const o = (...r) => (process.env.NODE_ENV !== "production" && (r.length <= 4 || console.error(`MUI: Too many arguments provided, expected between 0 and 4, got ${r.length}`)), (r.length === 0 ? [1] : r).map((a) => {
    const l = t(a);
    return typeof l == "number" ? `${l}px` : l;
  }).join(" "));
  return o.mui = !0, o;
}
function Un(...e) {
  const t = e.reduce((r, i) => (i.filterProps.forEach((a) => {
    r[a] = i;
  }), r), {}), o = (r) => Object.keys(r).reduce((i, a) => t[a] ? zo(i, t[a](r)) : i, {});
  return o.propTypes = process.env.NODE_ENV !== "production" ? e.reduce((r, i) => Object.assign(r, i.propTypes), {}) : {}, o.filterProps = e.reduce((r, i) => r.concat(i.filterProps), []), o;
}
function _e(e) {
  return typeof e != "number" ? e : `${e}px solid`;
}
function nt(e, t) {
  return Be({
    prop: e,
    themeKey: "borders",
    transform: t
  });
}
const mc = nt("border", _e), yc = nt("borderTop", _e), vc = nt("borderRight", _e), Cc = nt("borderBottom", _e), xc = nt("borderLeft", _e), wc = nt("borderColor"), Sc = nt("borderTopColor"), Ec = nt("borderRightColor"), Tc = nt("borderBottomColor"), Oc = nt("borderLeftColor"), Ac = nt("outline", _e), kc = nt("outlineColor"), Hn = (e) => {
  if (e.borderRadius !== void 0 && e.borderRadius !== null) {
    const t = Zo(e.theme, "shape.borderRadius", 4, "borderRadius"), o = (r) => ({
      borderRadius: _o(t, r)
    });
    return wt(e, e.borderRadius, o);
  }
  return null;
};
Hn.propTypes = process.env.NODE_ENV !== "production" ? {
  borderRadius: Dt
} : {};
Hn.filterProps = ["borderRadius"];
Un(mc, yc, vc, Cc, xc, wc, Sc, Ec, Tc, Oc, Hn, Ac, kc);
const Qn = (e) => {
  if (e.gap !== void 0 && e.gap !== null) {
    const t = Zo(e.theme, "spacing", 8, "gap"), o = (r) => ({
      gap: _o(t, r)
    });
    return wt(e, e.gap, o);
  }
  return null;
};
Qn.propTypes = process.env.NODE_ENV !== "production" ? {
  gap: Dt
} : {};
Qn.filterProps = ["gap"];
const Kn = (e) => {
  if (e.columnGap !== void 0 && e.columnGap !== null) {
    const t = Zo(e.theme, "spacing", 8, "columnGap"), o = (r) => ({
      columnGap: _o(t, r)
    });
    return wt(e, e.columnGap, o);
  }
  return null;
};
Kn.propTypes = process.env.NODE_ENV !== "production" ? {
  columnGap: Dt
} : {};
Kn.filterProps = ["columnGap"];
const Yn = (e) => {
  if (e.rowGap !== void 0 && e.rowGap !== null) {
    const t = Zo(e.theme, "spacing", 8, "rowGap"), o = (r) => ({
      rowGap: _o(t, r)
    });
    return wt(e, e.rowGap, o);
  }
  return null;
};
Yn.propTypes = process.env.NODE_ENV !== "production" ? {
  rowGap: Dt
} : {};
Yn.filterProps = ["rowGap"];
const Rc = Be({
  prop: "gridColumn"
}), Fc = Be({
  prop: "gridRow"
}), Pc = Be({
  prop: "gridAutoFlow"
}), Bc = Be({
  prop: "gridAutoColumns"
}), Mc = Be({
  prop: "gridAutoRows"
}), Ic = Be({
  prop: "gridTemplateColumns"
}), Dc = Be({
  prop: "gridTemplateRows"
}), Nc = Be({
  prop: "gridTemplateAreas"
}), $c = Be({
  prop: "gridArea"
});
Un(Qn, Kn, Yn, Rc, Fc, Pc, Bc, Mc, Ic, Dc, Nc, $c);
function po(e, t) {
  return t === "grey" ? t : e;
}
const jc = Be({
  prop: "color",
  themeKey: "palette",
  transform: po
}), zc = Be({
  prop: "bgcolor",
  cssProperty: "backgroundColor",
  themeKey: "palette",
  transform: po
}), Lc = Be({
  prop: "backgroundColor",
  themeKey: "palette",
  transform: po
});
Un(jc, zc, Lc);
function Ge(e) {
  return e <= 1 && e !== 0 ? `${e * 100}%` : e;
}
const Vc = Be({
  prop: "width",
  transform: Ge
}), _r = (e) => {
  if (e.maxWidth !== void 0 && e.maxWidth !== null) {
    const t = (o) => {
      var i, a, l, s, c;
      const r = ((l = (a = (i = e.theme) == null ? void 0 : i.breakpoints) == null ? void 0 : a.values) == null ? void 0 : l[o]) || zn[o];
      return r ? ((c = (s = e.theme) == null ? void 0 : s.breakpoints) == null ? void 0 : c.unit) !== "px" ? {
        maxWidth: `${r}${e.theme.breakpoints.unit}`
      } : {
        maxWidth: r
      } : {
        maxWidth: Ge(o)
      };
    };
    return wt(e, e.maxWidth, t);
  }
  return null;
};
_r.filterProps = ["maxWidth"];
const Wc = Be({
  prop: "minWidth",
  transform: Ge
}), Uc = Be({
  prop: "height",
  transform: Ge
}), Hc = Be({
  prop: "maxHeight",
  transform: Ge
}), Qc = Be({
  prop: "minHeight",
  transform: Ge
});
Be({
  prop: "size",
  cssProperty: "width",
  transform: Ge
});
Be({
  prop: "size",
  cssProperty: "height",
  transform: Ge
});
const Kc = Be({
  prop: "boxSizing"
});
Un(Vc, _r, Wc, Uc, Hc, Qc, Kc);
const en = {
  // borders
  border: {
    themeKey: "borders",
    transform: _e
  },
  borderTop: {
    themeKey: "borders",
    transform: _e
  },
  borderRight: {
    themeKey: "borders",
    transform: _e
  },
  borderBottom: {
    themeKey: "borders",
    transform: _e
  },
  borderLeft: {
    themeKey: "borders",
    transform: _e
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
    transform: _e
  },
  outlineColor: {
    themeKey: "palette"
  },
  borderRadius: {
    themeKey: "shape.borderRadius",
    style: Hn
  },
  // palette
  color: {
    themeKey: "palette",
    transform: po
  },
  bgcolor: {
    themeKey: "palette",
    cssProperty: "backgroundColor",
    transform: po
  },
  backgroundColor: {
    themeKey: "palette",
    transform: po
  },
  // spacing
  p: {
    style: Re
  },
  pt: {
    style: Re
  },
  pr: {
    style: Re
  },
  pb: {
    style: Re
  },
  pl: {
    style: Re
  },
  px: {
    style: Re
  },
  py: {
    style: Re
  },
  padding: {
    style: Re
  },
  paddingTop: {
    style: Re
  },
  paddingRight: {
    style: Re
  },
  paddingBottom: {
    style: Re
  },
  paddingLeft: {
    style: Re
  },
  paddingX: {
    style: Re
  },
  paddingY: {
    style: Re
  },
  paddingInline: {
    style: Re
  },
  paddingInlineStart: {
    style: Re
  },
  paddingInlineEnd: {
    style: Re
  },
  paddingBlock: {
    style: Re
  },
  paddingBlockStart: {
    style: Re
  },
  paddingBlockEnd: {
    style: Re
  },
  m: {
    style: ke
  },
  mt: {
    style: ke
  },
  mr: {
    style: ke
  },
  mb: {
    style: ke
  },
  ml: {
    style: ke
  },
  mx: {
    style: ke
  },
  my: {
    style: ke
  },
  margin: {
    style: ke
  },
  marginTop: {
    style: ke
  },
  marginRight: {
    style: ke
  },
  marginBottom: {
    style: ke
  },
  marginLeft: {
    style: ke
  },
  marginX: {
    style: ke
  },
  marginY: {
    style: ke
  },
  marginInline: {
    style: ke
  },
  marginInlineStart: {
    style: ke
  },
  marginInlineEnd: {
    style: ke
  },
  marginBlock: {
    style: ke
  },
  marginBlockStart: {
    style: ke
  },
  marginBlockEnd: {
    style: ke
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
    style: Qn
  },
  rowGap: {
    style: Yn
  },
  columnGap: {
    style: Kn
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
    transform: Ge
  },
  maxWidth: {
    style: _r
  },
  minWidth: {
    transform: Ge
  },
  height: {
    transform: Ge
  },
  maxHeight: {
    transform: Ge
  },
  minHeight: {
    transform: Ge
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
function Yc(...e) {
  const t = e.reduce((r, i) => r.concat(Object.keys(i)), []), o = new Set(t);
  return e.every((r) => o.size === Object.keys(r).length);
}
function Gc(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function qc() {
  function e(o, r, i, a) {
    const l = {
      [o]: r,
      theme: i
    }, s = a[o];
    if (!s)
      return {
        [o]: r
      };
    const {
      cssProperty: c = o,
      themeKey: p,
      transform: d,
      style: f
    } = s;
    if (r == null)
      return null;
    if (p === "typography" && r === "inherit")
      return {
        [o]: r
      };
    const h = Ln(i, p) || {};
    return f ? f(l) : wt(l, r, (v) => {
      let y = Tn(h, d, v);
      return v === y && typeof v == "string" && (y = Tn(h, d, `${o}${v === "default" ? "" : V(v)}`, v)), c === !1 ? y : {
        [c]: y
      };
    });
  }
  function t(o) {
    const {
      sx: r,
      theme: i = {}
    } = o || {};
    if (!r)
      return null;
    const a = i.unstable_sxConfig ?? en;
    function l(s) {
      let c = s;
      if (typeof s == "function")
        c = s(i);
      else if (typeof s != "object")
        return s;
      if (!c)
        return null;
      const p = lc(i.breakpoints), d = Object.keys(p);
      let f = p;
      return Object.keys(c).forEach((h) => {
        const b = Gc(c[h], i);
        if (b != null)
          if (typeof b == "object")
            if (a[h])
              f = zo(f, e(h, b, i, a));
            else {
              const v = wt({
                theme: i
              }, b, (y) => ({
                [h]: y
              }));
              Yc(v, b) ? f[h] = t({
                sx: b,
                theme: i
              }) : f = zo(f, v);
            }
          else
            f = zo(f, e(h, b, i, a));
      }), oc(i, cc(d, f));
    }
    return Array.isArray(r) ? r.map(l) : l(r);
  }
  return t;
}
const Kt = qc();
Kt.filterProps = ["sx"];
function Xc(e, t) {
  var r;
  const o = this;
  if (o.vars) {
    if (!((r = o.colorSchemes) != null && r[e]) || typeof o.getColorSchemeSelector != "function")
      return {};
    let i = o.getColorSchemeSelector(e);
    return i === "&" ? t : ((i.includes("data-") || i.includes(".")) && (i = `*:where(${i.replace(/\s*&$/, "")}) &`), {
      [i]: t
    });
  }
  return o.palette.mode === e ? t : {};
}
function ei(e = {}, ...t) {
  const {
    breakpoints: o = {},
    palette: r = {},
    spacing: i,
    shape: a = {},
    ...l
  } = e, s = tc(o), c = Za(i);
  let p = qe({
    breakpoints: s,
    direction: "ltr",
    components: {},
    // Inject component definitions.
    palette: {
      mode: "light",
      ...r
    },
    spacing: c,
    shape: {
      ...ac,
      ...a
    }
  }, l);
  return p = ic(p), p.applyStyles = Xc, p = t.reduce((d, f) => qe(d, f), p), p.unstable_sxConfig = {
    ...en,
    ...l == null ? void 0 : l.unstable_sxConfig
  }, p.unstable_sx = function(f) {
    return Kt({
      sx: f,
      theme: this
    });
  }, p;
}
function Jc(e) {
  return Object.keys(e).length === 0;
}
function Zc(e = null) {
  const t = g.useContext($l);
  return !t || Jc(t) ? e : t;
}
const _c = ei();
function _a(e = _c) {
  return Zc(e);
}
const ep = (e) => {
  var r;
  const t = {
    systemProps: {},
    otherProps: {}
  }, o = ((r = e == null ? void 0 : e.theme) == null ? void 0 : r.unstable_sxConfig) ?? en;
  return Object.keys(e).forEach((i) => {
    o[i] ? t.systemProps[i] = e[i] : t.otherProps[i] = e[i];
  }), t;
};
function es(e) {
  const {
    sx: t,
    ...o
  } = e, {
    systemProps: r,
    otherProps: i
  } = ep(o);
  let a;
  return Array.isArray(t) ? a = [r, ...t] : typeof t == "function" ? a = (...l) => {
    const s = t(...l);
    return dt(s) ? {
      ...r,
      ...s
    } : r;
  } : a = {
    ...r,
    ...t
  }, {
    ...i,
    sx: a
  };
}
const Ui = (e) => e, tp = () => {
  let e = Ui;
  return {
    configure(t) {
      e = t;
    },
    generate(t) {
      return e(t);
    },
    reset() {
      e = Ui;
    }
  };
}, ts = tp();
function os(e) {
  var t, o, r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var i = e.length;
    for (t = 0; t < i; t++) e[t] && (o = os(e[t])) && (r && (r += " "), r += o);
  } else for (o in e) e[o] && (r && (r += " "), r += o);
  return r;
}
function Z() {
  for (var e, t, o = 0, r = "", i = arguments.length; o < i; o++) (e = arguments[o]) && (t = os(e)) && (r && (r += " "), r += t);
  return r;
}
function op(e = {}) {
  const {
    themeId: t,
    defaultTheme: o,
    defaultClassName: r = "MuiBox-root",
    generateClassName: i
  } = e, a = qa("div", {
    shouldForwardProp: (s) => s !== "theme" && s !== "sx" && s !== "as"
  })(Kt);
  return /* @__PURE__ */ g.forwardRef(function(c, p) {
    const d = _a(o), {
      className: f,
      component: h = "div",
      ...b
    } = es(c);
    return /* @__PURE__ */ S(a, {
      as: h,
      ref: p,
      className: Z(f, i ? i(r) : r),
      theme: t && d[t] || d,
      ...b
    });
  });
}
const np = {
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
function ue(e, t, o = "Mui") {
  const r = np[t];
  return r ? `${o}-${r}` : `${ts.generate(e)}-${t}`;
}
function le(e, t, o = "Mui") {
  const r = {};
  return t.forEach((i) => {
    r[i] = ue(e, i, o);
  }), r;
}
function ns(e, t = "") {
  return e.displayName || e.name || t;
}
function Hi(e, t, o) {
  const r = ns(t);
  return e.displayName || (r !== "" ? `${o}(${r})` : o);
}
function rp(e) {
  if (e != null) {
    if (typeof e == "string")
      return e;
    if (typeof e == "function")
      return ns(e, "Component");
    if (typeof e == "object")
      switch (e.$$typeof) {
        case Ml:
          return Hi(e, e.render, "ForwardRef");
        case Bl:
          return Hi(e, e.type, "memo");
        default:
          return;
      }
  }
}
function rs(e) {
  const {
    variants: t,
    ...o
  } = e, r = {
    variants: t,
    style: Li(o),
    isProcessed: !0
  };
  return r.style === o || t && t.forEach((i) => {
    typeof i.style != "function" && (i.style = Li(i.style));
  }), r;
}
const ip = ei();
function mr(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
function ap(e) {
  return e ? (t, o) => o[e] : null;
}
function sp(e, t, o) {
  e.theme = up(e.theme) ? o : e.theme[t] || e.theme;
}
function Cn(e, t) {
  const o = typeof t == "function" ? t(e) : t;
  if (Array.isArray(o))
    return o.flatMap((r) => Cn(e, r));
  if (Array.isArray(o == null ? void 0 : o.variants)) {
    let r;
    if (o.isProcessed)
      r = o.style;
    else {
      const {
        variants: i,
        ...a
      } = o;
      r = a;
    }
    return is(e, o.variants, [r]);
  }
  return o != null && o.isProcessed ? o.style : o;
}
function is(e, t, o = []) {
  var i;
  let r;
  e: for (let a = 0; a < t.length; a += 1) {
    const l = t[a];
    if (typeof l.props == "function") {
      if (r ?? (r = {
        ...e,
        ...e.ownerState,
        ownerState: e.ownerState
      }), !l.props(r))
        continue;
    } else
      for (const s in l.props)
        if (e[s] !== l.props[s] && ((i = e.ownerState) == null ? void 0 : i[s]) !== l.props[s])
          continue e;
    typeof l.style == "function" ? (r ?? (r = {
      ...e,
      ...e.ownerState,
      ownerState: e.ownerState
    }), o.push(l.style(r))) : o.push(l.style);
  }
  return o;
}
function lp(e = {}) {
  const {
    themeId: t,
    defaultTheme: o = ip,
    rootShouldForwardProp: r = mr,
    slotShouldForwardProp: i = mr
  } = e;
  function a(s) {
    sp(s, t, o);
  }
  return (s, c = {}) => {
    _l(s, (T) => T.filter((A) => A !== Kt));
    const {
      name: p,
      slot: d,
      skipVariantsResolver: f,
      skipSx: h,
      // TODO v6: remove `lowercaseFirstLetter()` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      overridesResolver: b = ap(as(d)),
      ...v
    } = c, y = f !== void 0 ? f : (
      // TODO v6: remove `Root` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      d && d !== "Root" && d !== "root" || !1
    ), C = h || !1;
    let x = mr;
    d === "Root" || d === "root" ? x = r : d ? x = i : dp(s) && (x = void 0);
    const E = qa(s, {
      shouldForwardProp: x,
      label: pp(p, d),
      ...v
    }), w = (T) => {
      if (T.__emotion_real === T)
        return T;
      if (typeof T == "function")
        return function(P) {
          return Cn(P, T);
        };
      if (dt(T)) {
        const A = rs(T);
        return A.variants ? function($) {
          return Cn($, A);
        } : A.style;
      }
      return T;
    }, m = (...T) => {
      const A = [], P = T.map(w), $ = [];
      if (A.push(a), p && b && $.push(function(B) {
        var F, W;
        const M = (W = (F = B.theme.components) == null ? void 0 : F[p]) == null ? void 0 : W.styleOverrides;
        if (!M)
          return null;
        const N = {};
        for (const U in M)
          N[U] = Cn(B, M[U]);
        return b(B, N);
      }), p && !y && $.push(function(B) {
        var N, F;
        const O = B.theme, M = (F = (N = O == null ? void 0 : O.components) == null ? void 0 : N[p]) == null ? void 0 : F.variants;
        return M ? is(B, M) : null;
      }), C || $.push(Kt), Array.isArray(P[0])) {
        const R = P.shift(), B = new Array(A.length).fill(""), O = new Array($.length).fill("");
        let M;
        M = [...B, ...R, ...O], M.raw = [...B, ...R.raw, ...O], A.unshift(M);
      }
      const D = [...A, ...P, ...$], u = E(...D);
      return s.muiName && (u.muiName = s.muiName), process.env.NODE_ENV !== "production" && (u.displayName = cp(p, d, s)), u;
    };
    return E.withConfig && (m.withConfig = E.withConfig), m;
  };
}
function cp(e, t, o) {
  return e ? `${e}${V(t || "")}` : `Styled(${rp(o)})`;
}
function pp(e, t) {
  let o;
  return process.env.NODE_ENV !== "production" && e && (o = `${e}-${as(t || "Root")}`), o;
}
function up(e) {
  for (const t in e)
    return !1;
  return !0;
}
function dp(e) {
  return typeof e == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  e.charCodeAt(0) > 96;
}
function as(e) {
  return e && e.charAt(0).toLowerCase() + e.slice(1);
}
function Uo(e, t) {
  const o = {
    ...t
  };
  for (const r in e)
    if (Object.prototype.hasOwnProperty.call(e, r)) {
      const i = r;
      if (i === "components" || i === "slots")
        o[i] = {
          ...e[i],
          ...o[i]
        };
      else if (i === "componentsProps" || i === "slotProps") {
        const a = e[i], l = t[i];
        if (!l)
          o[i] = a || {};
        else if (!a)
          o[i] = l;
        else {
          o[i] = {
            ...l
          };
          for (const s in a)
            if (Object.prototype.hasOwnProperty.call(a, s)) {
              const c = s;
              o[i][c] = Uo(a[c], l[c]);
            }
        }
      } else o[i] === void 0 && (o[i] = e[i]);
    }
  return o;
}
const gt = typeof window < "u" ? g.useLayoutEffect : g.useEffect;
function fp(e, t = Number.MIN_SAFE_INTEGER, o = Number.MAX_SAFE_INTEGER) {
  return Math.max(t, Math.min(e, o));
}
function ti(e, t = 0, o = 1) {
  return process.env.NODE_ENV !== "production" && (e < t || e > o) && console.error(`MUI: The value provided ${e} is out of range [${t}, ${o}].`), fp(e, t, o);
}
function gp(e) {
  e = e.slice(1);
  const t = new RegExp(`.{1,${e.length >= 6 ? 2 : 1}}`, "g");
  let o = e.match(t);
  return o && o[0].length === 1 && (o = o.map((r) => r + r)), process.env.NODE_ENV !== "production" && e.length !== e.trim().length && console.error(`MUI: The color: "${e}" is invalid. Make sure the color input doesn't contain leading/trailing space.`), o ? `rgb${o.length === 4 ? "a" : ""}(${o.map((r, i) => i < 3 ? parseInt(r, 16) : Math.round(parseInt(r, 16) / 255 * 1e3) / 1e3).join(", ")})` : "";
}
function It(e) {
  if (e.type)
    return e;
  if (e.charAt(0) === "#")
    return It(gp(e));
  const t = e.indexOf("("), o = e.substring(0, t);
  if (!["rgb", "rgba", "hsl", "hsla", "color"].includes(o))
    throw new Error(process.env.NODE_ENV !== "production" ? `MUI: Unsupported \`${e}\` color.
The following formats are supported: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color().` : Mt(9, e));
  let r = e.substring(t + 1, e.length - 1), i;
  if (o === "color") {
    if (r = r.split(" "), i = r.shift(), r.length === 4 && r[3].charAt(0) === "/" && (r[3] = r[3].slice(1)), !["srgb", "display-p3", "a98-rgb", "prophoto-rgb", "rec-2020"].includes(i))
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: unsupported \`${i}\` color space.
The following color spaces are supported: srgb, display-p3, a98-rgb, prophoto-rgb, rec-2020.` : Mt(10, i));
  } else
    r = r.split(",");
  return r = r.map((a) => parseFloat(a)), {
    type: o,
    values: r,
    colorSpace: i
  };
}
const hp = (e) => {
  const t = It(e);
  return t.values.slice(0, 3).map((o, r) => t.type.includes("hsl") && r !== 0 ? `${o}%` : o).join(" ");
}, Mo = (e, t) => {
  try {
    return hp(e);
  } catch {
    return t && process.env.NODE_ENV !== "production" && console.warn(t), e;
  }
};
function Gn(e) {
  const {
    type: t,
    colorSpace: o
  } = e;
  let {
    values: r
  } = e;
  return t.includes("rgb") ? r = r.map((i, a) => a < 3 ? parseInt(i, 10) : i) : t.includes("hsl") && (r[1] = `${r[1]}%`, r[2] = `${r[2]}%`), t.includes("color") ? r = `${o} ${r.join(" ")}` : r = `${r.join(", ")}`, `${t}(${r})`;
}
function ss(e) {
  e = It(e);
  const {
    values: t
  } = e, o = t[0], r = t[1] / 100, i = t[2] / 100, a = r * Math.min(i, 1 - i), l = (p, d = (p + o / 30) % 12) => i - a * Math.max(Math.min(d - 3, 9 - d, 1), -1);
  let s = "rgb";
  const c = [Math.round(l(0) * 255), Math.round(l(8) * 255), Math.round(l(4) * 255)];
  return e.type === "hsla" && (s += "a", c.push(t[3])), Gn({
    type: s,
    values: c
  });
}
function Ir(e) {
  e = It(e);
  let t = e.type === "hsl" || e.type === "hsla" ? It(ss(e)).values : e.values;
  return t = t.map((o) => (e.type !== "color" && (o /= 255), o <= 0.03928 ? o / 12.92 : ((o + 0.055) / 1.055) ** 2.4)), Number((0.2126 * t[0] + 0.7152 * t[1] + 0.0722 * t[2]).toFixed(3));
}
function Qi(e, t) {
  const o = Ir(e), r = Ir(t);
  return (Math.max(o, r) + 0.05) / (Math.min(o, r) + 0.05);
}
function q(e, t) {
  return e = It(e), t = ti(t), (e.type === "rgb" || e.type === "hsl") && (e.type += "a"), e.type === "color" ? e.values[3] = `/${t}` : e.values[3] = t, Gn(e);
}
function ln(e, t, o) {
  try {
    return q(e, t);
  } catch {
    return e;
  }
}
function uo(e, t) {
  if (e = It(e), t = ti(t), e.type.includes("hsl"))
    e.values[2] *= 1 - t;
  else if (e.type.includes("rgb") || e.type.includes("color"))
    for (let o = 0; o < 3; o += 1)
      e.values[o] *= 1 - t;
  return Gn(e);
}
function Se(e, t, o) {
  try {
    return uo(e, t);
  } catch {
    return e;
  }
}
function fo(e, t) {
  if (e = It(e), t = ti(t), e.type.includes("hsl"))
    e.values[2] += (100 - e.values[2]) * t;
  else if (e.type.includes("rgb"))
    for (let o = 0; o < 3; o += 1)
      e.values[o] += (255 - e.values[o]) * t;
  else if (e.type.includes("color"))
    for (let o = 0; o < 3; o += 1)
      e.values[o] += (1 - e.values[o]) * t;
  return Gn(e);
}
function Ee(e, t, o) {
  try {
    return fo(e, t);
  } catch {
    return e;
  }
}
function bp(e, t = 0.15) {
  return Ir(e) > 0.5 ? uo(e, t) : fo(e, t);
}
function cn(e, t, o) {
  try {
    return bp(e, t);
  } catch {
    return e;
  }
}
function Et(e, t) {
  return process.env.NODE_ENV === "production" ? () => null : function(...r) {
    return e(...r) || t(...r);
  };
}
function mp(e) {
  const {
    prototype: t = {}
  } = e;
  return !!t.isReactComponent;
}
function ls(e, t, o, r, i) {
  const a = e[t], l = i || t;
  if (a == null || // When server-side rendering React doesn't warn either.
  // This is not an accurate check for SSR.
  // This is only in place for Emotion compat.
  // TODO: Revisit once https://github.com/facebook/react/issues/20047 is resolved.
  typeof window > "u")
    return null;
  let s;
  const c = a.type;
  return typeof c == "function" && !mp(c) && (s = "Did you accidentally use a plain function component for an element instead?"), s !== void 0 ? new Error(`Invalid ${r} \`${l}\` supplied to \`${o}\`. Expected an element that can hold a ref. ${s} For more information see https://mui.com/r/caveat-with-refs-guide`) : null;
}
const Xt = Et(n.element, ls);
Xt.isRequired = Et(n.element.isRequired, ls);
function yp(e) {
  const {
    prototype: t = {}
  } = e;
  return !!t.isReactComponent;
}
function vp(e, t, o, r, i) {
  const a = e[t], l = i || t;
  if (a == null || // When server-side rendering React doesn't warn either.
  // This is not an accurate check for SSR.
  // This is only in place for emotion compat.
  // TODO: Revisit once https://github.com/facebook/react/issues/20047 is resolved.
  typeof window > "u")
    return null;
  let s;
  return typeof a == "function" && !yp(a) && (s = "Did you accidentally provide a plain function component instead?"), s !== void 0 ? new Error(`Invalid ${r} \`${l}\` supplied to \`${o}\`. Expected an element type that can hold a ref. ${s} For more information see https://mui.com/r/caveat-with-refs-guide`) : null;
}
const On = Et(n.elementType, vp), Cp = "exact-prop: ​";
function oi(e) {
  return process.env.NODE_ENV === "production" ? e : {
    ...e,
    [Cp]: (t) => {
      const o = Object.keys(t).filter((r) => !e.hasOwnProperty(r));
      return o.length > 0 ? new Error(`The following props are not supported: ${o.map((r) => `\`${r}\``).join(", ")}. Please remove them.`) : null;
    }
  };
}
function ht(e, t, o, r, i) {
  if (process.env.NODE_ENV === "production")
    return null;
  const a = e[t], l = i || t;
  return a == null ? null : a && a.nodeType !== 1 ? new Error(`Invalid ${r} \`${l}\` supplied to \`${o}\`. Expected an HTMLElement.`) : null;
}
const Tt = n.oneOfType([n.func, n.object]);
function Dr(...e) {
  return e.reduce((t, o) => o == null ? t : function(...i) {
    t.apply(this, i), o.apply(this, i);
  }, () => {
  });
}
function qn(e, t = 166) {
  let o;
  function r(...i) {
    const a = () => {
      e.apply(this, i);
    };
    clearTimeout(o), o = setTimeout(a, t);
  }
  return r.clear = () => {
    clearTimeout(o);
  }, r;
}
function yr(e, t) {
  var o, r, i;
  return /* @__PURE__ */ g.isValidElement(e) && t.indexOf(
    // For server components `muiName` is avaialble in element.type._payload.value.muiName
    // relevant info - https://github.com/facebook/react/blob/2807d781a08db8e9873687fccc25c0f12b4fb3d4/packages/react/src/ReactLazy.js#L45
    // eslint-disable-next-line no-underscore-dangle
    e.type.muiName ?? ((i = (r = (o = e.type) == null ? void 0 : o._payload) == null ? void 0 : r.value) == null ? void 0 : i.muiName)
  ) !== -1;
}
function $e(e) {
  return e && e.ownerDocument || document;
}
function We(e) {
  return $e(e).defaultView || window;
}
function Ki(e, t) {
  typeof e == "function" ? e(t) : e && (e.current = t);
}
let Yi = 0;
function xp(e) {
  const [t, o] = g.useState(e), r = e || t;
  return g.useEffect(() => {
    t == null && (Yi += 1, o(`mui-${Yi}`));
  }, [t]), r;
}
const wp = {
  ...g
}, Gi = wp.useId;
function tn(e) {
  if (Gi !== void 0) {
    const t = Gi();
    return e ?? t;
  }
  return xp(e);
}
function cs(e, t, o, r, i) {
  if (process.env.NODE_ENV === "production")
    return null;
  const a = i || t;
  return typeof e[t] < "u" ? new Error(`The prop \`${a}\` is not supported. Please remove it.`) : null;
}
function ni({
  controlled: e,
  default: t,
  name: o,
  state: r = "value"
}) {
  const {
    current: i
  } = g.useRef(e !== void 0), [a, l] = g.useState(t), s = i ? e : a;
  if (process.env.NODE_ENV !== "production") {
    g.useEffect(() => {
      i !== (e !== void 0) && console.error([`MUI: A component is changing the ${i ? "" : "un"}controlled ${r} state of ${o} to be ${i ? "un" : ""}controlled.`, "Elements should not switch from uncontrolled to controlled (or vice versa).", `Decide between using a controlled or uncontrolled ${o} element for the lifetime of the component.`, "The nature of the state is determined during the first render. It's considered controlled if the value is not `undefined`.", "More info: https://fb.me/react-controlled-components"].join(`
`));
    }, [r, o, e]);
    const {
      current: p
    } = g.useRef(t);
    g.useEffect(() => {
      !i && !Object.is(p, t) && console.error([`MUI: A component is changing the default ${r} state of an uncontrolled ${o} after being initialized. To suppress this warning opt to use a controlled ${o}.`].join(`
`));
    }, [JSON.stringify(t)]);
  }
  const c = g.useCallback((p) => {
    i || l(p);
  }, []);
  return [s, c];
}
function He(e) {
  const t = g.useRef(e);
  return gt(() => {
    t.current = e;
  }), g.useRef((...o) => (
    // @ts-expect-error hide `this`
    (0, t.current)(...o)
  )).current;
}
function Ne(...e) {
  const t = g.useRef(void 0), o = g.useCallback((r) => {
    const i = e.map((a) => {
      if (a == null)
        return null;
      if (typeof a == "function") {
        const l = a, s = l(r);
        return typeof s == "function" ? s : () => {
          l(null);
        };
      }
      return a.current = r, () => {
        a.current = null;
      };
    });
    return () => {
      i.forEach((a) => a == null ? void 0 : a());
    };
  }, e);
  return g.useMemo(() => e.every((r) => r == null) ? null : (r) => {
    t.current && (t.current(), t.current = void 0), r != null && (t.current = o(r));
  }, e);
}
const qi = {};
function ps(e, t) {
  const o = g.useRef(qi);
  return o.current === qi && (o.current = e(t)), o;
}
const Sp = [];
function Ep(e) {
  g.useEffect(e, Sp);
}
class Xn {
  constructor() {
    Oo(this, "currentId", null);
    Oo(this, "clear", () => {
      this.currentId !== null && (clearTimeout(this.currentId), this.currentId = null);
    });
    Oo(this, "disposeEffect", () => this.clear);
  }
  static create() {
    return new Xn();
  }
  /**
   * Executes `fn` after `delay`, clearing any previously scheduled call.
   */
  start(t, o) {
    this.clear(), this.currentId = setTimeout(() => {
      this.currentId = null, o();
    }, t);
  }
}
function co() {
  const e = ps(Xn.create).current;
  return Ep(e.disposeEffect), e;
}
function An(e) {
  try {
    return e.matches(":focus-visible");
  } catch {
    process.env.NODE_ENV !== "production" && !/jsdom/.test(window.navigator.userAgent) && console.warn(["MUI: The `:focus-visible` pseudo class is not supported in this browser.", "Some components rely on this feature to work properly."].join(`
`));
  }
  return !1;
}
function us(e = window) {
  const t = e.document.documentElement.clientWidth;
  return e.innerWidth - t;
}
function Tp(e) {
  const t = typeof e;
  switch (t) {
    case "number":
      return Number.isNaN(e) ? "NaN" : Number.isFinite(e) ? e !== Math.floor(e) ? "float" : "number" : "Infinity";
    case "object":
      return e === null ? "null" : e.constructor.name;
    default:
      return t;
  }
}
function ds(e, t, o, r) {
  const i = e[t];
  if (i == null || !Number.isInteger(i)) {
    const a = Tp(i);
    return new RangeError(`Invalid ${r} \`${t}\` of type \`${a}\` supplied to \`${o}\`, expected \`integer\`.`);
  }
  return null;
}
function fs(e, t, ...o) {
  return e[t] === void 0 ? null : ds(e, t, ...o);
}
function Nr() {
  return null;
}
fs.isRequired = ds;
Nr.isRequired = Nr;
const ri = process.env.NODE_ENV === "production" ? Nr : fs;
function fe(e, t, o = void 0) {
  const r = {};
  for (const i in e) {
    const a = e[i];
    let l = "", s = !0;
    for (let c = 0; c < a.length; c += 1) {
      const p = a[c];
      p && (l += (s === !0 ? "" : " ") + t(p), s = !1, o && o[p] && (l += " " + o[p]));
    }
    r[i] = l;
  }
  return r;
}
function Op(e) {
  return typeof e == "string";
}
function gs(e, t, o) {
  return e === void 0 || Op(e) ? t : {
    ...t,
    ownerState: {
      ...t.ownerState,
      ...o
    }
  };
}
function hs(e, t = []) {
  if (e === void 0)
    return {};
  const o = {};
  return Object.keys(e).filter((r) => r.match(/^on[A-Z]/) && typeof e[r] == "function" && !t.includes(r)).forEach((r) => {
    o[r] = e[r];
  }), o;
}
function Xi(e) {
  if (e === void 0)
    return {};
  const t = {};
  return Object.keys(e).filter((o) => !(o.match(/^on[A-Z]/) && typeof e[o] == "function")).forEach((o) => {
    t[o] = e[o];
  }), t;
}
function bs(e) {
  const {
    getSlotProps: t,
    additionalProps: o,
    externalSlotProps: r,
    externalForwardedProps: i,
    className: a
  } = e;
  if (!t) {
    const b = Z(o == null ? void 0 : o.className, a, i == null ? void 0 : i.className, r == null ? void 0 : r.className), v = {
      ...o == null ? void 0 : o.style,
      ...i == null ? void 0 : i.style,
      ...r == null ? void 0 : r.style
    }, y = {
      ...o,
      ...i,
      ...r
    };
    return b.length > 0 && (y.className = b), Object.keys(v).length > 0 && (y.style = v), {
      props: y,
      internalRef: void 0
    };
  }
  const l = hs({
    ...i,
    ...r
  }), s = Xi(r), c = Xi(i), p = t(l), d = Z(p == null ? void 0 : p.className, o == null ? void 0 : o.className, a, i == null ? void 0 : i.className, r == null ? void 0 : r.className), f = {
    ...p == null ? void 0 : p.style,
    ...o == null ? void 0 : o.style,
    ...i == null ? void 0 : i.style,
    ...r == null ? void 0 : r.style
  }, h = {
    ...p,
    ...o,
    ...c,
    ...s
  };
  return d.length > 0 && (h.className = d), Object.keys(f).length > 0 && (h.style = f), {
    props: h,
    internalRef: p.ref
  };
}
function ms(e, t, o) {
  return typeof e == "function" ? e(t, o) : e;
}
function go(e) {
  var f;
  const {
    elementType: t,
    externalSlotProps: o,
    ownerState: r,
    skipResolvingSlotProps: i = !1,
    ...a
  } = e, l = i ? {} : ms(o, r), {
    props: s,
    internalRef: c
  } = bs({
    ...a,
    externalSlotProps: l
  }), p = Ne(c, l == null ? void 0 : l.ref, (f = e.additionalProps) == null ? void 0 : f.ref);
  return gs(t, {
    ...s,
    ref: p
  }, r);
}
function vo(e) {
  var t;
  return parseInt(g.version, 10) >= 19 ? ((t = e == null ? void 0 : e.props) == null ? void 0 : t.ref) || null : (e == null ? void 0 : e.ref) || null;
}
const Ap = /* @__PURE__ */ g.createContext();
process.env.NODE_ENV !== "production" && (n.node, n.bool);
const Co = () => g.useContext(Ap) ?? !1, kp = /* @__PURE__ */ g.createContext(void 0);
process.env.NODE_ENV !== "production" && (n.node, n.object);
function Rp(e) {
  const {
    theme: t,
    name: o,
    props: r
  } = e;
  if (!t || !t.components || !t.components[o])
    return r;
  const i = t.components[o];
  return i.defaultProps ? Uo(i.defaultProps, r) : !i.styleOverrides && !i.variants ? Uo(i, r) : r;
}
function Fp({
  props: e,
  name: t
}) {
  const o = g.useContext(kp);
  return Rp({
    props: e,
    name: t,
    theme: {
      components: o
    }
  });
}
const Ji = {
  theme: void 0
};
function Pp(e) {
  let t, o;
  return function(i) {
    let a = t;
    return (a === void 0 || i.theme !== o) && (Ji.theme = i.theme, a = rs(e(Ji)), t = a, o = i.theme), a;
  };
}
function Bp(e = "") {
  function t(...r) {
    if (!r.length)
      return "";
    const i = r[0];
    return typeof i == "string" && !i.match(/(#|\(|\)|(-?(\d*\.)?\d+)(px|em|%|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc))|^(-?(\d*\.)?\d+)$|(\d+ \d+ \d+)/) ? `, var(--${e ? `${e}-` : ""}${i}${t(...r.slice(1))})` : `, ${i}`;
  }
  return (r, ...i) => `var(--${e ? `${e}-` : ""}${r}${t(...i)})`;
}
const Zi = (e, t, o, r = []) => {
  let i = e;
  t.forEach((a, l) => {
    l === t.length - 1 ? Array.isArray(i) ? i[Number(a)] = o : i && typeof i == "object" && (i[a] = o) : i && typeof i == "object" && (i[a] || (i[a] = r.includes(a) ? [] : {}), i = i[a]);
  });
}, Mp = (e, t, o) => {
  function r(i, a = [], l = []) {
    Object.entries(i).forEach(([s, c]) => {
      (!o || o && !o([...a, s])) && c != null && (typeof c == "object" && Object.keys(c).length > 0 ? r(c, [...a, s], Array.isArray(c) ? [...l, s] : l) : t([...a, s], c, l));
    });
  }
  r(e);
}, Ip = (e, t) => typeof t == "number" ? ["lineHeight", "fontWeight", "opacity", "zIndex"].some((r) => e.includes(r)) || e[e.length - 1].toLowerCase().includes("opacity") ? t : `${t}px` : t;
function vr(e, t) {
  const {
    prefix: o,
    shouldSkipGeneratingVar: r
  } = t || {}, i = {}, a = {}, l = {};
  return Mp(
    e,
    (s, c, p) => {
      if ((typeof c == "string" || typeof c == "number") && (!r || !r(s, c))) {
        const d = `--${o ? `${o}-` : ""}${s.join("-")}`, f = Ip(s, c);
        Object.assign(i, {
          [d]: f
        }), Zi(a, s, `var(${d})`, p), Zi(l, s, `var(${d}, ${f})`, p);
      }
    },
    (s) => s[0] === "vars"
    // skip 'vars/*' paths
  ), {
    css: i,
    vars: a,
    varsWithDefaults: l
  };
}
function Dp(e, t = {}) {
  const {
    getSelector: o = C,
    disableCssColorScheme: r,
    colorSchemeSelector: i
  } = t, {
    colorSchemes: a = {},
    components: l,
    defaultColorScheme: s = "light",
    ...c
  } = e, {
    vars: p,
    css: d,
    varsWithDefaults: f
  } = vr(c, t);
  let h = f;
  const b = {}, {
    [s]: v,
    ...y
  } = a;
  if (Object.entries(y || {}).forEach(([w, m]) => {
    const {
      vars: T,
      css: A,
      varsWithDefaults: P
    } = vr(m, t);
    h = qe(h, P), b[w] = {
      css: A,
      vars: T
    };
  }), v) {
    const {
      css: w,
      vars: m,
      varsWithDefaults: T
    } = vr(v, t);
    h = qe(h, T), b[s] = {
      css: w,
      vars: m
    };
  }
  function C(w, m) {
    var A, P;
    let T = i;
    if (i === "class" && (T = ".%s"), i === "data" && (T = "[data-%s]"), i != null && i.startsWith("data-") && !i.includes("%s") && (T = `[${i}="%s"]`), w) {
      if (T === "media")
        return e.defaultColorScheme === w ? ":root" : {
          [`@media (prefers-color-scheme: ${((P = (A = a[w]) == null ? void 0 : A.palette) == null ? void 0 : P.mode) || w})`]: {
            ":root": m
          }
        };
      if (T)
        return e.defaultColorScheme === w ? `:root, ${T.replace("%s", String(w))}` : T.replace("%s", String(w));
    }
    return ":root";
  }
  return {
    vars: h,
    generateThemeVars: () => {
      let w = {
        ...p
      };
      return Object.entries(b).forEach(([, {
        vars: m
      }]) => {
        w = qe(w, m);
      }), w;
    },
    generateStyleSheets: () => {
      var $, D;
      const w = [], m = e.defaultColorScheme || "light";
      function T(u, R) {
        Object.keys(R).length && w.push(typeof u == "string" ? {
          [u]: {
            ...R
          }
        } : u);
      }
      T(o(void 0, {
        ...d
      }), d);
      const {
        [m]: A,
        ...P
      } = b;
      if (A) {
        const {
          css: u
        } = A, R = (D = ($ = a[m]) == null ? void 0 : $.palette) == null ? void 0 : D.mode, B = !r && R ? {
          colorScheme: R,
          ...u
        } : {
          ...u
        };
        T(o(m, {
          ...B
        }), B);
      }
      return Object.entries(P).forEach(([u, {
        css: R
      }]) => {
        var M, N;
        const B = (N = (M = a[u]) == null ? void 0 : M.palette) == null ? void 0 : N.mode, O = !r && B ? {
          colorScheme: B,
          ...R
        } : {
          ...R
        };
        T(o(u, {
          ...O
        }), O);
      }), w;
    }
  };
}
function Np(e) {
  return function(o) {
    return e === "media" ? (process.env.NODE_ENV !== "production" && o !== "light" && o !== "dark" && console.error(`MUI: @media (prefers-color-scheme) supports only 'light' or 'dark', but receive '${o}'.`), `@media (prefers-color-scheme: ${o})`) : e ? e.startsWith("data-") && !e.includes("%s") ? `[${e}="${o}"] &` : e === "class" ? `.${o} &` : e === "data" ? `[data-${o}] &` : `${e.replace("%s", o)} &` : "&";
  };
}
const Ho = {
  black: "#000",
  white: "#fff"
}, $p = {
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
}, oo = {
  50: "#f3e5f5",
  200: "#ce93d8",
  300: "#ba68c8",
  400: "#ab47bc",
  500: "#9c27b0",
  700: "#7b1fa2"
}, no = {
  300: "#e57373",
  400: "#ef5350",
  500: "#f44336",
  700: "#d32f2f",
  800: "#c62828"
}, Ao = {
  300: "#ffb74d",
  400: "#ffa726",
  500: "#ff9800",
  700: "#f57c00",
  900: "#e65100"
}, ro = {
  50: "#e3f2fd",
  200: "#90caf9",
  400: "#42a5f5",
  700: "#1976d2",
  800: "#1565c0"
}, io = {
  300: "#4fc3f7",
  400: "#29b6f6",
  500: "#03a9f4",
  700: "#0288d1",
  900: "#01579b"
}, ao = {
  300: "#81c784",
  400: "#66bb6a",
  500: "#4caf50",
  700: "#388e3c",
  800: "#2e7d32",
  900: "#1b5e20"
};
function ys() {
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
      paper: Ho.white,
      default: Ho.white
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
const jp = ys();
function vs() {
  return {
    text: {
      primary: Ho.white,
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
      active: Ho.white,
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
const _i = vs();
function ea(e, t, o, r) {
  const i = r.light || r, a = r.dark || r * 1.5;
  e[t] || (e.hasOwnProperty(o) ? e[t] = e[o] : t === "light" ? e.light = fo(e.main, i) : t === "dark" && (e.dark = uo(e.main, a)));
}
function zp(e = "light") {
  return e === "dark" ? {
    main: ro[200],
    light: ro[50],
    dark: ro[400]
  } : {
    main: ro[700],
    light: ro[400],
    dark: ro[800]
  };
}
function Lp(e = "light") {
  return e === "dark" ? {
    main: oo[200],
    light: oo[50],
    dark: oo[400]
  } : {
    main: oo[500],
    light: oo[300],
    dark: oo[700]
  };
}
function Vp(e = "light") {
  return e === "dark" ? {
    main: no[500],
    light: no[300],
    dark: no[700]
  } : {
    main: no[700],
    light: no[400],
    dark: no[800]
  };
}
function Wp(e = "light") {
  return e === "dark" ? {
    main: io[400],
    light: io[300],
    dark: io[700]
  } : {
    main: io[700],
    light: io[500],
    dark: io[900]
  };
}
function Up(e = "light") {
  return e === "dark" ? {
    main: ao[400],
    light: ao[300],
    dark: ao[700]
  } : {
    main: ao[800],
    light: ao[500],
    dark: ao[900]
  };
}
function Hp(e = "light") {
  return e === "dark" ? {
    main: Ao[400],
    light: Ao[300],
    dark: Ao[700]
  } : {
    main: "#ed6c02",
    // closest to orange[800] that pass 3:1.
    light: Ao[500],
    dark: Ao[900]
  };
}
function ii(e) {
  const {
    mode: t = "light",
    contrastThreshold: o = 3,
    tonalOffset: r = 0.2,
    ...i
  } = e, a = e.primary || zp(t), l = e.secondary || Lp(t), s = e.error || Vp(t), c = e.info || Wp(t), p = e.success || Up(t), d = e.warning || Hp(t);
  function f(y) {
    const C = Qi(y, _i.text.primary) >= o ? _i.text.primary : jp.text.primary;
    if (process.env.NODE_ENV !== "production") {
      const x = Qi(y, C);
      x < 3 && console.error([`MUI: The contrast ratio of ${x}:1 for ${C} on ${y}`, "falls below the WCAG recommended absolute minimum contrast ratio of 3:1.", "https://www.w3.org/TR/2008/REC-WCAG20-20081211/#visual-audio-contrast-contrast"].join(`
`));
    }
    return C;
  }
  const h = ({
    color: y,
    name: C,
    mainShade: x = 500,
    lightShade: E = 300,
    darkShade: w = 700
  }) => {
    if (y = {
      ...y
    }, !y.main && y[x] && (y.main = y[x]), !y.hasOwnProperty("main"))
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The color${C ? ` (${C})` : ""} provided to augmentColor(color) is invalid.
The color object needs to have a \`main\` property or a \`${x}\` property.` : Mt(11, C ? ` (${C})` : "", x));
    if (typeof y.main != "string")
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The color${C ? ` (${C})` : ""} provided to augmentColor(color) is invalid.
\`color.main\` should be a string, but \`${JSON.stringify(y.main)}\` was provided instead.

Did you intend to use one of the following approaches?

import { green } from "@mui/material/colors";

const theme1 = createTheme({ palette: {
  primary: green,
} });

const theme2 = createTheme({ palette: {
  primary: { main: green[500] },
} });` : Mt(12, C ? ` (${C})` : "", JSON.stringify(y.main)));
    return ea(y, "light", E, r), ea(y, "dark", w, r), y.contrastText || (y.contrastText = f(y.main)), y;
  };
  let b;
  return t === "light" ? b = ys() : t === "dark" && (b = vs()), process.env.NODE_ENV !== "production" && (b || console.error(`MUI: The palette mode \`${t}\` is not supported.`)), qe({
    // A collection of common colors.
    common: {
      ...Ho
    },
    // prevent mutable object.
    // The palette mode, can be light or dark.
    mode: t,
    // The colors used to represent primary interface elements for a user.
    primary: h({
      color: a,
      name: "primary"
    }),
    // The colors used to represent secondary interface elements for a user.
    secondary: h({
      color: l,
      name: "secondary",
      mainShade: "A400",
      lightShade: "A200",
      darkShade: "A700"
    }),
    // The colors used to represent interface elements that the user should be made aware of.
    error: h({
      color: s,
      name: "error"
    }),
    // The colors used to represent potentially dangerous actions or important messages.
    warning: h({
      color: d,
      name: "warning"
    }),
    // The colors used to present information to the user that is neutral and not necessarily important.
    info: h({
      color: c,
      name: "info"
    }),
    // The colors used to indicate the successful completion of an action that user triggered.
    success: h({
      color: p,
      name: "success"
    }),
    // The grey colors.
    grey: $p,
    // Used by `getContrastText()` to maximize the contrast between
    // the background and the text.
    contrastThreshold: o,
    // Takes a background color and returns the text color that maximizes the contrast.
    getContrastText: f,
    // Generate a rich color object.
    augmentColor: h,
    // Used by the functions below to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: r,
    // The light and dark mode object.
    ...b
  }, i);
}
function Qp(e) {
  const t = {};
  return Object.entries(e).forEach((r) => {
    const [i, a] = r;
    typeof a == "object" && (t[i] = `${a.fontStyle ? `${a.fontStyle} ` : ""}${a.fontVariant ? `${a.fontVariant} ` : ""}${a.fontWeight ? `${a.fontWeight} ` : ""}${a.fontStretch ? `${a.fontStretch} ` : ""}${a.fontSize || ""}${a.lineHeight ? `/${a.lineHeight} ` : ""}${a.fontFamily || ""}`);
  }), t;
}
function Kp(e, t) {
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
function Yp(e) {
  return Math.round(e * 1e5) / 1e5;
}
const ta = {
  textTransform: "uppercase"
}, oa = '"Roboto", "Helvetica", "Arial", sans-serif';
function Gp(e, t) {
  const {
    fontFamily: o = oa,
    // The default font size of the Material Specification.
    fontSize: r = 14,
    // px
    fontWeightLight: i = 300,
    fontWeightRegular: a = 400,
    fontWeightMedium: l = 500,
    fontWeightBold: s = 700,
    // Tell MUI what's the font-size on the html element.
    // 16px is the default font-size used by browsers.
    htmlFontSize: c = 16,
    // Apply the CSS properties to all the variants.
    allVariants: p,
    pxToRem: d,
    ...f
  } = typeof t == "function" ? t(e) : t;
  process.env.NODE_ENV !== "production" && (typeof r != "number" && console.error("MUI: `fontSize` is required to be a number."), typeof c != "number" && console.error("MUI: `htmlFontSize` is required to be a number."));
  const h = r / 14, b = d || ((C) => `${C / c * h}rem`), v = (C, x, E, w, m) => ({
    fontFamily: o,
    fontWeight: C,
    fontSize: b(x),
    // Unitless following https://meyerweb.com/eric/thoughts/2006/02/08/unitless-line-heights/
    lineHeight: E,
    // The letter spacing was designed for the Roboto font-family. Using the same letter-spacing
    // across font-families can cause issues with the kerning.
    ...o === oa ? {
      letterSpacing: `${Yp(w / x)}em`
    } : {},
    ...m,
    ...p
  }), y = {
    h1: v(i, 96, 1.167, -1.5),
    h2: v(i, 60, 1.2, -0.5),
    h3: v(a, 48, 1.167, 0),
    h4: v(a, 34, 1.235, 0.25),
    h5: v(a, 24, 1.334, 0),
    h6: v(l, 20, 1.6, 0.15),
    subtitle1: v(a, 16, 1.75, 0.15),
    subtitle2: v(l, 14, 1.57, 0.1),
    body1: v(a, 16, 1.5, 0.15),
    body2: v(a, 14, 1.43, 0.15),
    button: v(l, 14, 1.75, 0.4, ta),
    caption: v(a, 12, 1.66, 0.4),
    overline: v(a, 12, 2.66, 1, ta),
    // TODO v6: Remove handling of 'inherit' variant from the theme as it is already handled in Material UI's Typography component. Also, remember to remove the associated types.
    inherit: {
      fontFamily: "inherit",
      fontWeight: "inherit",
      fontSize: "inherit",
      lineHeight: "inherit",
      letterSpacing: "inherit"
    }
  };
  return qe({
    htmlFontSize: c,
    pxToRem: b,
    fontFamily: o,
    fontSize: r,
    fontWeightLight: i,
    fontWeightRegular: a,
    fontWeightMedium: l,
    fontWeightBold: s,
    ...y
  }, f, {
    clone: !1
    // No need to clone deep
  });
}
const qp = 0.2, Xp = 0.14, Jp = 0.12;
function Oe(...e) {
  return [`${e[0]}px ${e[1]}px ${e[2]}px ${e[3]}px rgba(0,0,0,${qp})`, `${e[4]}px ${e[5]}px ${e[6]}px ${e[7]}px rgba(0,0,0,${Xp})`, `${e[8]}px ${e[9]}px ${e[10]}px ${e[11]}px rgba(0,0,0,${Jp})`].join(",");
}
const Zp = ["none", Oe(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0), Oe(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0), Oe(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0), Oe(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0), Oe(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0), Oe(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0), Oe(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1), Oe(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2), Oe(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2), Oe(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3), Oe(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3), Oe(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4), Oe(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4), Oe(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4), Oe(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5), Oe(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5), Oe(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5), Oe(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6), Oe(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6), Oe(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7), Oe(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7), Oe(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7), Oe(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8), Oe(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8)], _p = {
  // This is the most common easing curve.
  easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
  // Objects enter the screen at full velocity from off-screen and
  // slowly decelerate to a resting point.
  easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
  // Objects leave the screen at full velocity. They do not decelerate when off-screen.
  easeIn: "cubic-bezier(0.4, 0, 1, 1)",
  // The sharp curve is used by objects that may return to the screen at any time.
  sharp: "cubic-bezier(0.4, 0, 0.6, 1)"
}, eu = {
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
function na(e) {
  return `${Math.round(e)}ms`;
}
function tu(e) {
  if (!e)
    return 0;
  const t = e / 36;
  return Math.min(Math.round((4 + 15 * t ** 0.25 + t / 5) * 10), 3e3);
}
function ou(e) {
  const t = {
    ..._p,
    ...e.easing
  }, o = {
    ...eu,
    ...e.duration
  };
  return {
    getAutoHeightDuration: tu,
    create: (i = ["all"], a = {}) => {
      const {
        duration: l = o.standard,
        easing: s = t.easeInOut,
        delay: c = 0,
        ...p
      } = a;
      if (process.env.NODE_ENV !== "production") {
        const d = (h) => typeof h == "string", f = (h) => !Number.isNaN(parseFloat(h));
        !d(i) && !Array.isArray(i) && console.error('MUI: Argument "props" must be a string or Array.'), !f(l) && !d(l) && console.error(`MUI: Argument "duration" must be a number or a string but found ${l}.`), d(s) || console.error('MUI: Argument "easing" must be a string.'), !f(c) && !d(c) && console.error('MUI: Argument "delay" must be a number or a string.'), typeof a != "object" && console.error(["MUI: Secong argument of transition.create must be an object.", "Arguments should be either `create('prop1', options)` or `create(['prop1', 'prop2'], options)`"].join(`
`)), Object.keys(p).length !== 0 && console.error(`MUI: Unrecognized argument(s) [${Object.keys(p).join(",")}].`);
      }
      return (Array.isArray(i) ? i : [i]).map((d) => `${d} ${typeof l == "string" ? l : na(l)} ${s} ${typeof c == "string" ? c : na(c)}`).join(",");
    },
    ...e,
    easing: t,
    duration: o
  };
}
const nu = {
  mobileStepper: 1e3,
  fab: 1050,
  speedDial: 1050,
  appBar: 1100,
  drawer: 1200,
  modal: 1300,
  snackbar: 1400,
  tooltip: 1500
};
function ru(e) {
  return dt(e) || typeof e > "u" || typeof e == "string" || typeof e == "boolean" || typeof e == "number" || Array.isArray(e);
}
function Cs(e = {}) {
  const t = {
    ...e
  };
  function o(r) {
    const i = Object.entries(r);
    for (let a = 0; a < i.length; a++) {
      const [l, s] = i[a];
      !ru(s) || l.startsWith("unstable_") ? delete r[l] : dt(s) && (r[l] = {
        ...s
      }, o(r[l]));
    }
  }
  return o(t), `import { unstable_createBreakpoints as createBreakpoints, createTransitions } from '@mui/material/styles';

const theme = ${JSON.stringify(t, null, 2)};

theme.breakpoints = createBreakpoints(theme.breakpoints || {});
theme.transitions = createTransitions(theme.transitions || {});

export default theme;`;
}
function $r(e = {}, ...t) {
  const {
    breakpoints: o,
    mixins: r = {},
    spacing: i,
    palette: a = {},
    transitions: l = {},
    typography: s = {},
    shape: c,
    ...p
  } = e;
  if (e.vars && // The error should throw only for the root theme creation because user is not allowed to use a custom node `vars`.
  // `generateThemeVars` is the closest identifier for checking that the `options` is a result of `createTheme` with CSS variables so that user can create new theme for nested ThemeProvider.
  e.generateThemeVars === void 0)
    throw new Error(process.env.NODE_ENV !== "production" ? "MUI: `vars` is a private field used for CSS variables support.\nPlease use another name or follow the [docs](https://mui.com/material-ui/customization/css-theme-variables/usage/) to enable the feature." : Mt(20));
  const d = ii(a), f = ei(e);
  let h = qe(f, {
    mixins: Kp(f.breakpoints, r),
    palette: d,
    // Don't use [...shadows] until you've verified its transpiled code is not invoking the iterator protocol.
    shadows: Zp.slice(),
    typography: Gp(d, s),
    transitions: ou(l),
    zIndex: {
      ...nu
    }
  });
  if (h = qe(h, p), h = t.reduce((b, v) => qe(b, v), h), process.env.NODE_ENV !== "production") {
    const b = ["active", "checked", "completed", "disabled", "error", "expanded", "focused", "focusVisible", "required", "selected"], v = (y, C) => {
      let x;
      for (x in y) {
        const E = y[x];
        if (b.includes(x) && Object.keys(E).length > 0) {
          if (process.env.NODE_ENV !== "production") {
            const w = ue("", x);
            console.error([`MUI: The \`${C}\` component increases the CSS specificity of the \`${x}\` internal state.`, "You can not override it like this: ", JSON.stringify(y, null, 2), "", `Instead, you need to use the '&.${w}' syntax:`, JSON.stringify({
              root: {
                [`&.${w}`]: E
              }
            }, null, 2), "", "https://mui.com/r/state-classes-guide"].join(`
`));
          }
          y[x] = {};
        }
      }
    };
    Object.keys(h.components).forEach((y) => {
      const C = h.components[y].styleOverrides;
      C && y.startsWith("Mui") && v(C, y);
    });
  }
  return h.unstable_sxConfig = {
    ...en,
    ...p == null ? void 0 : p.unstable_sxConfig
  }, h.unstable_sx = function(v) {
    return Kt({
      sx: v,
      theme: this
    });
  }, h.toRuntimeSource = Cs, h;
}
function jr(e) {
  let t;
  return e < 1 ? t = 5.11916 * e ** 2 : t = 4.5 * Math.log(e + 1) + 2, Math.round(t * 10) / 1e3;
}
const iu = [...Array(25)].map((e, t) => {
  if (t === 0)
    return "none";
  const o = jr(t);
  return `linear-gradient(rgba(255 255 255 / ${o}), rgba(255 255 255 / ${o}))`;
});
function xs(e) {
  return {
    inputPlaceholder: e === "dark" ? 0.5 : 0.42,
    inputUnderline: e === "dark" ? 0.7 : 0.42,
    switchTrackDisabled: e === "dark" ? 0.2 : 0.12,
    switchTrack: e === "dark" ? 0.3 : 0.38
  };
}
function ws(e) {
  return e === "dark" ? iu : [];
}
function au(e) {
  const {
    palette: t = {
      mode: "light"
    },
    // need to cast to avoid module augmentation test
    opacity: o,
    overlays: r,
    ...i
  } = e, a = ii(t);
  return {
    palette: a,
    opacity: {
      ...xs(a.mode),
      ...o
    },
    overlays: r || ws(a.mode),
    ...i
  };
}
function su(e) {
  var t;
  return !!e[0].match(/(cssVarPrefix|colorSchemeSelector|rootSelector|typography|mixins|breakpoints|direction|transitions)/) || !!e[0].match(/sxConfig$/) || // ends with sxConfig
  e[0] === "palette" && !!((t = e[1]) != null && t.match(/(mode|contrastThreshold|tonalOffset)/));
}
const lu = (e) => [...[...Array(25)].map((t, o) => `--${e ? `${e}-` : ""}overlays-${o}`), `--${e ? `${e}-` : ""}palette-AppBar-darkBg`, `--${e ? `${e}-` : ""}palette-AppBar-darkColor`], cu = (e) => (t, o) => {
  const r = e.rootSelector || ":root", i = e.colorSchemeSelector;
  let a = i;
  if (i === "class" && (a = ".%s"), i === "data" && (a = "[data-%s]"), i != null && i.startsWith("data-") && !i.includes("%s") && (a = `[${i}="%s"]`), e.defaultColorScheme === t) {
    if (t === "dark") {
      const l = {};
      return lu(e.cssVarPrefix).forEach((s) => {
        l[s] = o[s], delete o[s];
      }), a === "media" ? {
        [r]: o,
        "@media (prefers-color-scheme: dark)": {
          [r]: l
        }
      } : a ? {
        [a.replace("%s", t)]: l,
        [`${r}, ${a.replace("%s", t)}`]: o
      } : {
        [r]: {
          ...o,
          ...l
        }
      };
    }
    if (a && a !== "media")
      return `${r}, ${a.replace("%s", String(t))}`;
  } else if (t) {
    if (a === "media")
      return {
        [`@media (prefers-color-scheme: ${String(t)})`]: {
          [r]: o
        }
      };
    if (a)
      return a.replace("%s", String(t));
  }
  return r;
};
function pu(e, t) {
  t.forEach((o) => {
    e[o] || (e[o] = {});
  });
}
function I(e, t, o) {
  !e[t] && o && (e[t] = o);
}
function Io(e) {
  return typeof e != "string" || !e.startsWith("hsl") ? e : ss(e);
}
function vt(e, t) {
  `${t}Channel` in e || (e[`${t}Channel`] = Mo(Io(e[t]), `MUI: Can't create \`palette.${t}Channel\` because \`palette.${t}\` is not one of these formats: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color().
To suppress this warning, you need to explicitly provide the \`palette.${t}Channel\` as a string (in rgb format, for example "12 12 12") or undefined if you want to remove the channel token.`));
}
function uu(e) {
  return typeof e == "number" ? `${e}px` : typeof e == "string" || typeof e == "function" || Array.isArray(e) ? e : "8px";
}
const ut = (e) => {
  try {
    return e();
  } catch {
  }
}, du = (e = "mui") => Bp(e);
function Cr(e, t, o, r) {
  if (!t)
    return;
  t = t === !0 ? {} : t;
  const i = r === "dark" ? "dark" : "light";
  if (!o) {
    e[r] = au({
      ...t,
      palette: {
        mode: i,
        ...t == null ? void 0 : t.palette
      }
    });
    return;
  }
  const {
    palette: a,
    ...l
  } = $r({
    ...o,
    palette: {
      mode: i,
      ...t == null ? void 0 : t.palette
    }
  });
  return e[r] = {
    ...t,
    palette: a,
    opacity: {
      ...xs(i),
      ...t == null ? void 0 : t.opacity
    },
    overlays: (t == null ? void 0 : t.overlays) || ws(i)
  }, l;
}
function fu(e = {}, ...t) {
  const {
    colorSchemes: o = {
      light: !0
    },
    defaultColorScheme: r,
    disableCssColorScheme: i = !1,
    cssVarPrefix: a = "mui",
    shouldSkipGeneratingVar: l = su,
    colorSchemeSelector: s = o.light && o.dark ? "media" : void 0,
    rootSelector: c = ":root",
    ...p
  } = e, d = Object.keys(o)[0], f = r || (o.light && d !== "light" ? "light" : d), h = du(a), {
    [f]: b,
    light: v,
    dark: y,
    ...C
  } = o, x = {
    ...C
  };
  let E = b;
  if ((f === "dark" && !("dark" in o) || f === "light" && !("light" in o)) && (E = !0), !E)
    throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The \`colorSchemes.${f}\` option is either missing or invalid.` : Mt(21, f));
  const w = Cr(x, E, p, f);
  v && !x.light && Cr(x, v, void 0, "light"), y && !x.dark && Cr(x, y, void 0, "dark");
  let m = {
    defaultColorScheme: f,
    ...w,
    cssVarPrefix: a,
    colorSchemeSelector: s,
    rootSelector: c,
    getCssVar: h,
    colorSchemes: x,
    font: {
      ...Qp(w.typography),
      ...w.font
    },
    spacing: uu(p.spacing)
  };
  Object.keys(m.colorSchemes).forEach((D) => {
    const u = m.colorSchemes[D].palette, R = (B) => {
      const O = B.split("-"), M = O[1], N = O[2];
      return h(B, u[M][N]);
    };
    if (u.mode === "light" && (I(u.common, "background", "#fff"), I(u.common, "onBackground", "#000")), u.mode === "dark" && (I(u.common, "background", "#000"), I(u.common, "onBackground", "#fff")), pu(u, ["Alert", "AppBar", "Avatar", "Button", "Chip", "FilledInput", "LinearProgress", "Skeleton", "Slider", "SnackbarContent", "SpeedDialAction", "StepConnector", "StepContent", "Switch", "TableCell", "Tooltip"]), u.mode === "light") {
      I(u.Alert, "errorColor", Se(u.error.light, 0.6)), I(u.Alert, "infoColor", Se(u.info.light, 0.6)), I(u.Alert, "successColor", Se(u.success.light, 0.6)), I(u.Alert, "warningColor", Se(u.warning.light, 0.6)), I(u.Alert, "errorFilledBg", R("palette-error-main")), I(u.Alert, "infoFilledBg", R("palette-info-main")), I(u.Alert, "successFilledBg", R("palette-success-main")), I(u.Alert, "warningFilledBg", R("palette-warning-main")), I(u.Alert, "errorFilledColor", ut(() => u.getContrastText(u.error.main))), I(u.Alert, "infoFilledColor", ut(() => u.getContrastText(u.info.main))), I(u.Alert, "successFilledColor", ut(() => u.getContrastText(u.success.main))), I(u.Alert, "warningFilledColor", ut(() => u.getContrastText(u.warning.main))), I(u.Alert, "errorStandardBg", Ee(u.error.light, 0.9)), I(u.Alert, "infoStandardBg", Ee(u.info.light, 0.9)), I(u.Alert, "successStandardBg", Ee(u.success.light, 0.9)), I(u.Alert, "warningStandardBg", Ee(u.warning.light, 0.9)), I(u.Alert, "errorIconColor", R("palette-error-main")), I(u.Alert, "infoIconColor", R("palette-info-main")), I(u.Alert, "successIconColor", R("palette-success-main")), I(u.Alert, "warningIconColor", R("palette-warning-main")), I(u.AppBar, "defaultBg", R("palette-grey-100")), I(u.Avatar, "defaultBg", R("palette-grey-400")), I(u.Button, "inheritContainedBg", R("palette-grey-300")), I(u.Button, "inheritContainedHoverBg", R("palette-grey-A100")), I(u.Chip, "defaultBorder", R("palette-grey-400")), I(u.Chip, "defaultAvatarColor", R("palette-grey-700")), I(u.Chip, "defaultIconColor", R("palette-grey-700")), I(u.FilledInput, "bg", "rgba(0, 0, 0, 0.06)"), I(u.FilledInput, "hoverBg", "rgba(0, 0, 0, 0.09)"), I(u.FilledInput, "disabledBg", "rgba(0, 0, 0, 0.12)"), I(u.LinearProgress, "primaryBg", Ee(u.primary.main, 0.62)), I(u.LinearProgress, "secondaryBg", Ee(u.secondary.main, 0.62)), I(u.LinearProgress, "errorBg", Ee(u.error.main, 0.62)), I(u.LinearProgress, "infoBg", Ee(u.info.main, 0.62)), I(u.LinearProgress, "successBg", Ee(u.success.main, 0.62)), I(u.LinearProgress, "warningBg", Ee(u.warning.main, 0.62)), I(u.Skeleton, "bg", `rgba(${R("palette-text-primaryChannel")} / 0.11)`), I(u.Slider, "primaryTrack", Ee(u.primary.main, 0.62)), I(u.Slider, "secondaryTrack", Ee(u.secondary.main, 0.62)), I(u.Slider, "errorTrack", Ee(u.error.main, 0.62)), I(u.Slider, "infoTrack", Ee(u.info.main, 0.62)), I(u.Slider, "successTrack", Ee(u.success.main, 0.62)), I(u.Slider, "warningTrack", Ee(u.warning.main, 0.62));
      const B = cn(u.background.default, 0.8);
      I(u.SnackbarContent, "bg", B), I(u.SnackbarContent, "color", ut(() => u.getContrastText(B))), I(u.SpeedDialAction, "fabHoverBg", cn(u.background.paper, 0.15)), I(u.StepConnector, "border", R("palette-grey-400")), I(u.StepContent, "border", R("palette-grey-400")), I(u.Switch, "defaultColor", R("palette-common-white")), I(u.Switch, "defaultDisabledColor", R("palette-grey-100")), I(u.Switch, "primaryDisabledColor", Ee(u.primary.main, 0.62)), I(u.Switch, "secondaryDisabledColor", Ee(u.secondary.main, 0.62)), I(u.Switch, "errorDisabledColor", Ee(u.error.main, 0.62)), I(u.Switch, "infoDisabledColor", Ee(u.info.main, 0.62)), I(u.Switch, "successDisabledColor", Ee(u.success.main, 0.62)), I(u.Switch, "warningDisabledColor", Ee(u.warning.main, 0.62)), I(u.TableCell, "border", Ee(ln(u.divider, 1), 0.88)), I(u.Tooltip, "bg", ln(u.grey[700], 0.92));
    }
    if (u.mode === "dark") {
      I(u.Alert, "errorColor", Ee(u.error.light, 0.6)), I(u.Alert, "infoColor", Ee(u.info.light, 0.6)), I(u.Alert, "successColor", Ee(u.success.light, 0.6)), I(u.Alert, "warningColor", Ee(u.warning.light, 0.6)), I(u.Alert, "errorFilledBg", R("palette-error-dark")), I(u.Alert, "infoFilledBg", R("palette-info-dark")), I(u.Alert, "successFilledBg", R("palette-success-dark")), I(u.Alert, "warningFilledBg", R("palette-warning-dark")), I(u.Alert, "errorFilledColor", ut(() => u.getContrastText(u.error.dark))), I(u.Alert, "infoFilledColor", ut(() => u.getContrastText(u.info.dark))), I(u.Alert, "successFilledColor", ut(() => u.getContrastText(u.success.dark))), I(u.Alert, "warningFilledColor", ut(() => u.getContrastText(u.warning.dark))), I(u.Alert, "errorStandardBg", Se(u.error.light, 0.9)), I(u.Alert, "infoStandardBg", Se(u.info.light, 0.9)), I(u.Alert, "successStandardBg", Se(u.success.light, 0.9)), I(u.Alert, "warningStandardBg", Se(u.warning.light, 0.9)), I(u.Alert, "errorIconColor", R("palette-error-main")), I(u.Alert, "infoIconColor", R("palette-info-main")), I(u.Alert, "successIconColor", R("palette-success-main")), I(u.Alert, "warningIconColor", R("palette-warning-main")), I(u.AppBar, "defaultBg", R("palette-grey-900")), I(u.AppBar, "darkBg", R("palette-background-paper")), I(u.AppBar, "darkColor", R("palette-text-primary")), I(u.Avatar, "defaultBg", R("palette-grey-600")), I(u.Button, "inheritContainedBg", R("palette-grey-800")), I(u.Button, "inheritContainedHoverBg", R("palette-grey-700")), I(u.Chip, "defaultBorder", R("palette-grey-700")), I(u.Chip, "defaultAvatarColor", R("palette-grey-300")), I(u.Chip, "defaultIconColor", R("palette-grey-300")), I(u.FilledInput, "bg", "rgba(255, 255, 255, 0.09)"), I(u.FilledInput, "hoverBg", "rgba(255, 255, 255, 0.13)"), I(u.FilledInput, "disabledBg", "rgba(255, 255, 255, 0.12)"), I(u.LinearProgress, "primaryBg", Se(u.primary.main, 0.5)), I(u.LinearProgress, "secondaryBg", Se(u.secondary.main, 0.5)), I(u.LinearProgress, "errorBg", Se(u.error.main, 0.5)), I(u.LinearProgress, "infoBg", Se(u.info.main, 0.5)), I(u.LinearProgress, "successBg", Se(u.success.main, 0.5)), I(u.LinearProgress, "warningBg", Se(u.warning.main, 0.5)), I(u.Skeleton, "bg", `rgba(${R("palette-text-primaryChannel")} / 0.13)`), I(u.Slider, "primaryTrack", Se(u.primary.main, 0.5)), I(u.Slider, "secondaryTrack", Se(u.secondary.main, 0.5)), I(u.Slider, "errorTrack", Se(u.error.main, 0.5)), I(u.Slider, "infoTrack", Se(u.info.main, 0.5)), I(u.Slider, "successTrack", Se(u.success.main, 0.5)), I(u.Slider, "warningTrack", Se(u.warning.main, 0.5));
      const B = cn(u.background.default, 0.98);
      I(u.SnackbarContent, "bg", B), I(u.SnackbarContent, "color", ut(() => u.getContrastText(B))), I(u.SpeedDialAction, "fabHoverBg", cn(u.background.paper, 0.15)), I(u.StepConnector, "border", R("palette-grey-600")), I(u.StepContent, "border", R("palette-grey-600")), I(u.Switch, "defaultColor", R("palette-grey-300")), I(u.Switch, "defaultDisabledColor", R("palette-grey-600")), I(u.Switch, "primaryDisabledColor", Se(u.primary.main, 0.55)), I(u.Switch, "secondaryDisabledColor", Se(u.secondary.main, 0.55)), I(u.Switch, "errorDisabledColor", Se(u.error.main, 0.55)), I(u.Switch, "infoDisabledColor", Se(u.info.main, 0.55)), I(u.Switch, "successDisabledColor", Se(u.success.main, 0.55)), I(u.Switch, "warningDisabledColor", Se(u.warning.main, 0.55)), I(u.TableCell, "border", Se(ln(u.divider, 1), 0.68)), I(u.Tooltip, "bg", ln(u.grey[700], 0.92));
    }
    vt(u.background, "default"), vt(u.background, "paper"), vt(u.common, "background"), vt(u.common, "onBackground"), vt(u, "divider"), Object.keys(u).forEach((B) => {
      const O = u[B];
      B !== "tonalOffset" && O && typeof O == "object" && (O.main && I(u[B], "mainChannel", Mo(Io(O.main))), O.light && I(u[B], "lightChannel", Mo(Io(O.light))), O.dark && I(u[B], "darkChannel", Mo(Io(O.dark))), O.contrastText && I(u[B], "contrastTextChannel", Mo(Io(O.contrastText))), B === "text" && (vt(u[B], "primary"), vt(u[B], "secondary")), B === "action" && (O.active && vt(u[B], "active"), O.selected && vt(u[B], "selected")));
    });
  }), m = t.reduce((D, u) => qe(D, u), m);
  const T = {
    prefix: a,
    disableCssColorScheme: i,
    shouldSkipGeneratingVar: l,
    getSelector: cu(m)
  }, {
    vars: A,
    generateThemeVars: P,
    generateStyleSheets: $
  } = Dp(m, T);
  return m.vars = A, Object.entries(m.colorSchemes[m.defaultColorScheme]).forEach(([D, u]) => {
    m[D] = u;
  }), m.generateThemeVars = P, m.generateStyleSheets = $, m.generateSpacing = function() {
    return Za(p.spacing, Zr(this));
  }, m.getColorSchemeSelector = Np(s), m.spacing = m.generateSpacing(), m.shouldSkipGeneratingVar = l, m.unstable_sxConfig = {
    ...en,
    ...p == null ? void 0 : p.unstable_sxConfig
  }, m.unstable_sx = function(u) {
    return Kt({
      sx: u,
      theme: this
    });
  }, m.toRuntimeSource = Cs, m;
}
function ra(e, t, o) {
  e.colorSchemes && o && (e.colorSchemes[t] = {
    ...o !== !0 && o,
    palette: ii({
      ...o === !0 ? {} : o.palette,
      mode: t
    })
    // cast type to skip module augmentation test
  });
}
function Jn(e = {}, ...t) {
  const {
    palette: o,
    cssVariables: r = !1,
    colorSchemes: i = o ? void 0 : {
      light: !0
    },
    defaultColorScheme: a = o == null ? void 0 : o.mode,
    ...l
  } = e, s = a || "light", c = i == null ? void 0 : i[s], p = {
    ...i,
    ...o ? {
      [s]: {
        ...typeof c != "boolean" && c,
        palette: o
      }
    } : void 0
  };
  if (r === !1) {
    if (!("colorSchemes" in e))
      return $r(e, ...t);
    let d = o;
    "palette" in e || p[s] && (p[s] !== !0 ? d = p[s].palette : s === "dark" && (d = {
      mode: "dark"
    }));
    const f = $r({
      ...e,
      palette: d
    }, ...t);
    return f.defaultColorScheme = s, f.colorSchemes = p, f.palette.mode === "light" && (f.colorSchemes.light = {
      ...p.light !== !0 && p.light,
      palette: f.palette
    }, ra(f, "dark", p.dark)), f.palette.mode === "dark" && (f.colorSchemes.dark = {
      ...p.dark !== !0 && p.dark,
      palette: f.palette
    }, ra(f, "light", p.light)), f;
  }
  return !o && !("light" in p) && s === "light" && (p.light = !0), fu({
    ...l,
    colorSchemes: p,
    defaultColorScheme: s,
    ...typeof r != "boolean" && r
  }, ...t);
}
const Ss = Jn();
function rt() {
  const e = _a(Ss);
  return process.env.NODE_ENV !== "production" && g.useDebugValue(e), e[Xr] || e;
}
function gu(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
const it = (e) => gu(e) && e !== "classes", H = lp({
  themeId: Xr,
  defaultTheme: Ss,
  rootShouldForwardProp: it
}), Pe = {
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
    toggleButtonBg: "#1E1E1E",
    iconFont: "#7A7D80",
    iconOverlay: "#505050",
    surface: "#F5F5F6",
    neutral: "#34393D",
    fabBg: "#D1EAFE",
    fabFont: "#1994FC",
    myDefault: "#7a7d80",
    menuFont: "#373737",
    tooltipBg: "#34393D",
    alertColor: {
      //[0] bg color [1] Icon color
      error: ["#FFEDED", "#A72E2F"],
      success: ["#E9FAF5", "#20C997"],
      info: ["#EDF4FF", "#4B91FF"],
      warning: ["#FFF8EC", "#FFB53F"],
      gray: ["#E9E9E9", "#373737"],
      dark: ["#373737", "#FFFFFF"]
    }
  },
  surface: {
    custMain: "#1994FC",
    onMain: "#FFFFFF",
    shadow: "#000000",
    outline: "#CECECE",
    elevated: "#FAFAFA",
    tonal: "#DBE9FF",
    onTonal: "#2D66BF",
    toggleButtonBg: "#1E1E1E",
    iconFont: "#7A7D80",
    iconOverlay: "#505050",
    surface: "#F5F5F6",
    neutral: "#34393D",
    fabBg: "#F5F5F6",
    fabFont: "#1994FC",
    myDefault: "1994FC",
    menuFont: "#373737",
    tooltipBg: "#34393D",
    alertColor: {
      error: ["#FFEDED", "#A72E2F"],
      success: ["#E9FAF5", "#20C997"],
      info: ["#EDF4FF", "#4B91FF"],
      warning: ["#FFF8EC", "#FFB53F"],
      gray: ["#E9E9E9", "#373737"],
      dark: ["#373737", "#FFFFFF"]
    }
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
    toggleButtonBg: "#1E1E1E",
    iconFont: "#7A7D80",
    iconOverlay: "#505050",
    surface: "#F5F5F6",
    neutral: "#34393D",
    fabBg: "#DBE9FF",
    fabFont: "#2D66BF",
    myDefault: "#2D66BF",
    menuFont: "#373737",
    tooltipBg: "#34393D",
    alertColor: {
      error: ["#FFEDED", "#A72E2F"],
      success: ["#E9FAF5", "#20C997"],
      info: ["#EDF4FF", "#4B91FF"],
      warning: ["#FFF8EC", "#FFB53F"],
      gray: ["#E9E9E9", "#373737"],
      dark: ["#373737", "#FFFFFF"]
    }
  },
  tertiary: {
    custMain: "#1994FC",
    onMain: "#FFFFFF",
    shadow: "#000000",
    outline: "#CECECE",
    elevated: "#FAFAFA",
    tonal: "#DBE9FF",
    onTonal: "#2D66BF",
    toggleButtonBg: "#1E1E1E",
    iconFont: "#7A7D80",
    iconOverlay: "#505050",
    surface: "#BDDEDF",
    neutral: "#0E3A3B",
    fabBg: "#BDDEDF",
    fabFont: "#0E3A3B",
    myDefault: "#0E3A3B",
    menuFont: "#373737",
    tooltipBg: "#34393D",
    alertColor: {
      error: ["#FFEDED", "#A72E2F"],
      success: ["#E9FAF5", "#20C997"],
      info: ["#EDF4FF", "#4B91FF"],
      warning: ["#FFF8EC", "#FFB53F"],
      gray: ["#E9E9E9", "#373737"],
      dark: ["#373737", "#FFFFFF"]
    }
  },
  //
  error: {
    main: "#FF4D4F",
    custMain: "#FF4D4F",
    onMain: "#FFFFFF",
    shadow: "#000000",
    outline: "#CECECE",
    elevated: "#FAFAFA",
    tonal: "#DBE9FF",
    onTonal: "#2D66BF",
    toggleButtonBg: "#1E1E1E",
    iconFont: "#7A7D80",
    iconOverlay: "#505050",
    surface: "#F5F5F6",
    neutral: "#34393D",
    fabBg: "#F5F5F6",
    fabFont: "#FF4D4F",
    myDefault: "#FF4D4F",
    menuFont: "#373737",
    tooltipBg: "#34393D",
    alertColor: {
      error: ["#FFEDED", "#A72E2F"],
      success: ["#E9FAF5", "#20C997"],
      info: ["#EDF4FF", "#4B91FF"],
      warning: ["#FFF8EC", "#FFB53F"],
      gray: ["#E9E9E9", "#373737"],
      dark: ["#373737", "#FFFFFF"]
    }
  }
}, pn = {
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
    toggleButtonBg: "#1E1E1E",
    iconFont: "#7A7D80",
    iconOverlay: "#505050",
    surface: "#F5F5F6",
    neutral: "#34393D",
    fabBg: "#D1EAFE",
    fabFont: "#1994FC",
    myDefault: "#1994FC",
    menuFont: "#373737",
    tooltipBg: "#34393D",
    alertColor: {
      error: ["#FFEDED", "#A72E2F"],
      success: ["#E9FAF5", "#20C997"],
      info: ["#EDF4FF", "#4B91FF"],
      warning: ["#FFF8EC", "#FFB53F"],
      gray: ["#E9E9E9", "#373737"],
      dark: ["#373737", "#FFFFFF"]
    }
  },
  surface: {
    custMain: "#1994FC",
    onMain: "#FFFFFF",
    shadow: "#000000",
    outline: "#CECECE",
    elevated: "#FAFAFA",
    tonal: "#DBE9FF",
    onTonal: "#2D66BF",
    toggleButtonBg: "#1E1E1E",
    iconFont: "#7A7D80",
    iconOverlay: "#505050",
    surface: "#F5F5F6",
    neutral: "#34393D",
    fabBg: "#F5F5F6",
    fabFont: "#1994FC",
    myDefault: "#1994FC",
    menuFont: "#373737",
    tooltipBg: "#34393D",
    alertColor: {
      error: ["#FFEDED", "#A72E2F"],
      success: ["#E9FAF5", "#20C997"],
      info: ["#EDF4FF", "#4B91FF"],
      warning: ["#FFF8EC", "#FFB53F"],
      gray: ["#E9E9E9", "#373737"],
      dark: ["#373737", "#FFFFFF"]
    }
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
    toggleButtonBg: "#1E1E1E",
    iconFont: "#7A7D80",
    iconOverlay: "#505050",
    surface: "#F5F5F6",
    neutral: "#34393D",
    fabBg: "#DBE9FF",
    fabFont: "#2D66BF",
    myDefault: "#2D66BF",
    menuFont: "#373737",
    tooltipBg: "#34393D",
    alertColor: {
      error: ["#FFEDED", "#A72E2F"],
      success: ["#E9FAF5", "#20C997"],
      info: ["#EDF4FF", "#4B91FF"],
      warning: ["#FFF8EC", "#FFB53F"],
      gray: ["#E9E9E9", "#373737"],
      dark: ["#373737", "#FFFFFF"]
    }
  },
  tertiary: {
    custMain: "#1994FC",
    onMain: "#FFFFFF",
    shadow: "#000000",
    outline: "#CECECE",
    elevated: "#FAFAFA",
    tonal: "#DBE9FF",
    onTonal: "#2D66BF",
    toggleButtonBg: "#1E1E1E",
    iconFont: "#7A7D80",
    iconOverlay: "#505050",
    surface: "#BDDEDF",
    neutral: "#0E3A3B",
    fabBg: "#BDDEDF",
    fabFont: "#0E3A3B",
    myDefault: "#0E3A3B",
    menuFont: "#373737",
    tooltipBg: "#34393D",
    alertColor: {
      error: ["#FFEDED", "#A72E2F"],
      success: ["#E9FAF5", "#20C997"],
      info: ["#EDF4FF", "#4B91FF"],
      warning: ["#FFF8EC", "#FFB53F"],
      gray: ["#E9E9E9", "#373737"],
      dark: ["#373737", "#FFFFFF"]
    }
  }
}, at = ["#373737"], ey = Jn({
  palette: {
    primary: Pe.primary,
    secondary: Pe.secondary,
    tertiary: Pe.tertiary,
    surface: Pe.surface
  }
});
Jn({
  palette: {
    primary: pn.primary,
    secondary: pn.secondary,
    tertiary: pn.tertiary,
    surface: pn.surface
  }
});
function hu() {
  return es;
}
const de = Pp;
process.env.NODE_ENV !== "production" && (n.node, n.object.isRequired);
function ge(e) {
  return Fp(e);
}
function se(e, t) {
  const {
    className: o,
    elementType: r,
    ownerState: i,
    externalForwardedProps: a,
    internalForwardedProps: l,
    shouldForwardComponentProp: s = !1,
    ...c
  } = t, {
    component: p,
    slots: d = {
      [e]: void 0
    },
    slotProps: f = {
      [e]: void 0
    },
    ...h
  } = a, b = d[e] || r, v = ms(f[e], i), {
    props: {
      component: y,
      ...C
    },
    internalRef: x
  } = bs({
    className: o,
    ...c,
    externalForwardedProps: e === "root" ? h : void 0,
    externalSlotProps: v
  }), E = Ne(x, v == null ? void 0 : v.ref, t.ref), w = e === "root" ? y || p : y, m = gs(b, {
    ...e === "root" && !p && !d[e] && l,
    ...e !== "root" && !d[e] && l,
    ...C,
    ...w && !s && {
      as: w
    },
    ...w && s && {
      component: w
    },
    ref: E
  }, i);
  return [b, m];
}
function bu(e) {
  return typeof e.main == "string";
}
function mu(e, t = []) {
  if (!bu(e))
    return !1;
  for (const o of t)
    if (!e.hasOwnProperty(o) || typeof e[o] != "string")
      return !1;
  return !0;
}
function Ie(e = []) {
  return ([, t]) => t && mu(t, e);
}
function yu(e) {
  return ue("MuiPaper", e);
}
le("MuiPaper", ["root", "rounded", "outlined", "elevation", "elevation0", "elevation1", "elevation2", "elevation3", "elevation4", "elevation5", "elevation6", "elevation7", "elevation8", "elevation9", "elevation10", "elevation11", "elevation12", "elevation13", "elevation14", "elevation15", "elevation16", "elevation17", "elevation18", "elevation19", "elevation20", "elevation21", "elevation22", "elevation23", "elevation24"]);
const vu = (e) => {
  const {
    square: t,
    elevation: o,
    variant: r,
    classes: i
  } = e, a = {
    root: ["root", r, !t && "rounded", r === "elevation" && `elevation${o}`]
  };
  return fe(a, yu, i);
}, Cu = H("div", {
  name: "MuiPaper",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: o
    } = e;
    return [t.root, t[o.variant], !o.square && t.rounded, o.variant === "elevation" && t[`elevation${o.elevation}`]];
  }
})(de(({
  theme: e
}) => ({
  backgroundColor: (e.vars || e).palette.background.paper,
  color: (e.vars || e).palette.text.primary,
  transition: e.transitions.create("box-shadow"),
  variants: [{
    props: ({
      ownerState: t
    }) => !t.square,
    style: {
      borderRadius: e.shape.borderRadius
    }
  }, {
    props: {
      variant: "outlined"
    },
    style: {
      border: `1px solid ${(e.vars || e).palette.divider}`
    }
  }, {
    props: {
      variant: "elevation"
    },
    style: {
      boxShadow: "var(--Paper-shadow)",
      backgroundImage: "var(--Paper-overlay)"
    }
  }]
}))), xo = /* @__PURE__ */ g.forwardRef(function(t, o) {
  var b;
  const r = ge({
    props: t,
    name: "MuiPaper"
  }), i = rt(), {
    className: a,
    component: l = "div",
    elevation: s = 1,
    square: c = !1,
    variant: p = "elevation",
    ...d
  } = r, f = {
    ...r,
    component: l,
    elevation: s,
    square: c,
    variant: p
  }, h = vu(f);
  return process.env.NODE_ENV !== "production" && i.shadows[s] === void 0 && console.error([`MUI: The elevation provided <Paper elevation={${s}}> is not available in the theme.`, `Please make sure that \`theme.shadows[${s}]\` is defined.`].join(`
`)), /* @__PURE__ */ S(Cu, {
    as: l,
    ownerState: f,
    className: Z(h.root, a),
    ref: o,
    ...d,
    style: {
      ...p === "elevation" && {
        "--Paper-shadow": (i.vars || i).shadows[s],
        ...i.vars && {
          "--Paper-overlay": (b = i.vars.overlays) == null ? void 0 : b[s]
        },
        ...!i.vars && i.palette.mode === "dark" && {
          "--Paper-overlay": `linear-gradient(${q("#fff", jr(s))}, ${q("#fff", jr(s))})`
        }
      },
      ...d.style
    }
  });
});
process.env.NODE_ENV !== "production" && (xo.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: n.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: n.object,
  /**
   * @ignore
   */
  className: n.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: n.elementType,
  /**
   * Shadow depth, corresponds to `dp` in the spec.
   * It accepts values between 0 and 24 inclusive.
   * @default 1
   */
  elevation: Et(ri, (e) => {
    const {
      elevation: t,
      variant: o
    } = e;
    return t > 0 && o === "outlined" ? new Error(`MUI: Combining \`elevation={${t}}\` with \`variant="${o}"\` has no effect. Either use \`elevation={0}\` or use a different \`variant\`.`) : null;
  }),
  /**
   * If `true`, rounded corners are disabled.
   * @default false
   */
  square: n.bool,
  /**
   * @ignore
   */
  style: n.object,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: n.oneOfType([n.arrayOf(n.oneOfType([n.func, n.object, n.bool])), n.func, n.object]),
  /**
   * The variant to use.
   * @default 'elevation'
   */
  variant: n.oneOfType([n.oneOf(["elevation", "outlined"]), n.string])
});
function xu(e) {
  return ue("MuiAlert", e);
}
const ia = le("MuiAlert", ["root", "action", "icon", "message", "filled", "colorSuccess", "colorInfo", "colorWarning", "colorError", "filledSuccess", "filledInfo", "filledWarning", "filledError", "outlined", "outlinedSuccess", "outlinedInfo", "outlinedWarning", "outlinedError", "standard", "standardSuccess", "standardInfo", "standardWarning", "standardError"]);
function wu(e) {
  return ue("MuiSvgIcon", e);
}
le("MuiSvgIcon", ["root", "colorPrimary", "colorSecondary", "colorAction", "colorError", "colorDisabled", "fontSizeInherit", "fontSizeSmall", "fontSizeMedium", "fontSizeLarge"]);
const Su = (e) => {
  const {
    color: t,
    fontSize: o,
    classes: r
  } = e, i = {
    root: ["root", t !== "inherit" && `color${V(t)}`, `fontSize${V(o)}`]
  };
  return fe(i, wu, r);
}, Eu = H("svg", {
  name: "MuiSvgIcon",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: o
    } = e;
    return [t.root, o.color !== "inherit" && t[`color${V(o.color)}`], t[`fontSize${V(o.fontSize)}`]];
  }
})(de(({
  theme: e
}) => {
  var t, o, r, i, a, l, s, c, p, d, f, h, b, v;
  return {
    userSelect: "none",
    width: "1em",
    height: "1em",
    display: "inline-block",
    flexShrink: 0,
    transition: (i = (t = e.transitions) == null ? void 0 : t.create) == null ? void 0 : i.call(t, "fill", {
      duration: (r = (o = (e.vars ?? e).transitions) == null ? void 0 : o.duration) == null ? void 0 : r.shorter
    }),
    variants: [
      {
        props: (y) => !y.hasSvgAsChild,
        style: {
          // the <svg> will define the property that has `currentColor`
          // for example heroicons uses fill="none" and stroke="currentColor"
          fill: "currentColor"
        }
      },
      {
        props: {
          fontSize: "inherit"
        },
        style: {
          fontSize: "inherit"
        }
      },
      {
        props: {
          fontSize: "small"
        },
        style: {
          fontSize: ((l = (a = e.typography) == null ? void 0 : a.pxToRem) == null ? void 0 : l.call(a, 20)) || "1.25rem"
        }
      },
      {
        props: {
          fontSize: "medium"
        },
        style: {
          fontSize: ((c = (s = e.typography) == null ? void 0 : s.pxToRem) == null ? void 0 : c.call(s, 24)) || "1.5rem"
        }
      },
      {
        props: {
          fontSize: "large"
        },
        style: {
          fontSize: ((d = (p = e.typography) == null ? void 0 : p.pxToRem) == null ? void 0 : d.call(p, 35)) || "2.1875rem"
        }
      },
      // TODO v5 deprecate color prop, v6 remove for sx
      ...Object.entries((e.vars ?? e).palette).filter(([, y]) => y && y.main).map(([y]) => {
        var C, x;
        return {
          props: {
            color: y
          },
          style: {
            color: (x = (C = (e.vars ?? e).palette) == null ? void 0 : C[y]) == null ? void 0 : x.main
          }
        };
      }),
      {
        props: {
          color: "action"
        },
        style: {
          color: (h = (f = (e.vars ?? e).palette) == null ? void 0 : f.action) == null ? void 0 : h.active
        }
      },
      {
        props: {
          color: "disabled"
        },
        style: {
          color: (v = (b = (e.vars ?? e).palette) == null ? void 0 : b.action) == null ? void 0 : v.disabled
        }
      },
      {
        props: {
          color: "inherit"
        },
        style: {
          color: void 0
        }
      }
    ]
  };
})), kn = /* @__PURE__ */ g.forwardRef(function(t, o) {
  const r = ge({
    props: t,
    name: "MuiSvgIcon"
  }), {
    children: i,
    className: a,
    color: l = "inherit",
    component: s = "svg",
    fontSize: c = "medium",
    htmlColor: p,
    inheritViewBox: d = !1,
    titleAccess: f,
    viewBox: h = "0 0 24 24",
    ...b
  } = r, v = /* @__PURE__ */ g.isValidElement(i) && i.type === "svg", y = {
    ...r,
    color: l,
    component: s,
    fontSize: c,
    instanceFontSize: t.fontSize,
    inheritViewBox: d,
    viewBox: h,
    hasSvgAsChild: v
  }, C = {};
  d || (C.viewBox = h);
  const x = Su(y);
  return /* @__PURE__ */ ye(Eu, {
    as: s,
    className: Z(x.root, a),
    focusable: "false",
    color: p,
    "aria-hidden": f ? void 0 : !0,
    role: f ? "img" : void 0,
    ref: o,
    ...C,
    ...b,
    ...v && i.props,
    ownerState: y,
    children: [v ? i.props.children : i, f ? /* @__PURE__ */ S("title", {
      children: f
    }) : null]
  });
});
process.env.NODE_ENV !== "production" && (kn.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Node passed into the SVG element.
   */
  children: n.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: n.object,
  /**
   * @ignore
   */
  className: n.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * You can use the `htmlColor` prop to apply a color attribute to the SVG element.
   * @default 'inherit'
   */
  color: n.oneOfType([n.oneOf(["inherit", "action", "disabled", "primary", "secondary", "error", "info", "success", "warning"]), n.string]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: n.elementType,
  /**
   * The fontSize applied to the icon. Defaults to 24px, but can be configure to inherit font size.
   * @default 'medium'
   */
  fontSize: n.oneOfType([n.oneOf(["inherit", "large", "medium", "small"]), n.string]),
  /**
   * Applies a color attribute to the SVG element.
   */
  htmlColor: n.string,
  /**
   * If `true`, the root node will inherit the custom `component`'s viewBox and the `viewBox`
   * prop will be ignored.
   * Useful when you want to reference a custom `component` and have `SvgIcon` pass that
   * `component`'s viewBox to the root node.
   * @default false
   */
  inheritViewBox: n.bool,
  /**
   * The shape-rendering attribute. The behavior of the different options is described on the
   * [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/shape-rendering).
   * If you are having issues with blurry icons you should investigate this prop.
   */
  shapeRendering: n.string,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: n.oneOfType([n.arrayOf(n.oneOfType([n.func, n.object, n.bool])), n.func, n.object]),
  /**
   * Provides a human-readable title for the element that contains it.
   * https://www.w3.org/TR/SVG-access/#Equivalent
   */
  titleAccess: n.string,
  /**
   * Allows you to redefine what the coordinates without units mean inside an SVG element.
   * For example, if the SVG element is 500 (width) by 200 (height),
   * and you pass viewBox="0 0 50 20",
   * this means that the coordinates inside the SVG will go from the top left corner (0,0)
   * to bottom right (50,20) and each unit will be worth 10px.
   * @default '0 0 24 24'
   */
  viewBox: n.string
});
kn.muiName = "SvgIcon";
function ze(e, t) {
  function o(r, i) {
    return /* @__PURE__ */ S(kn, {
      "data-testid": `${t}Icon`,
      ref: i,
      ...r,
      children: e
    });
  }
  return process.env.NODE_ENV !== "production" && (o.displayName = `${t}Icon`), o.muiName = kn.muiName, /* @__PURE__ */ g.memo(/* @__PURE__ */ g.forwardRef(o));
}
function Qo(e, t) {
  if (!e)
    return t;
  if (typeof e == "function" || typeof t == "function")
    return (i) => {
      const a = typeof t == "function" ? t(i) : t, l = typeof e == "function" ? e({
        ...i,
        ...a
      }) : e, s = Z(i == null ? void 0 : i.className, a == null ? void 0 : a.className, l == null ? void 0 : l.className);
      return {
        ...a,
        ...l,
        ...!!s && {
          className: s
        },
        ...(a == null ? void 0 : a.style) && (l == null ? void 0 : l.style) && {
          style: {
            ...a.style,
            ...l.style
          }
        },
        ...(a == null ? void 0 : a.sx) && (l == null ? void 0 : l.sx) && {
          sx: [...Array.isArray(a.sx) ? a.sx : [a.sx], ...Array.isArray(l.sx) ? l.sx : [l.sx]]
        }
      };
    };
  const o = t, r = Z(o == null ? void 0 : o.className, e == null ? void 0 : e.className);
  return {
    ...t,
    ...e,
    ...!!r && {
      className: r
    },
    ...(o == null ? void 0 : o.style) && (e == null ? void 0 : e.style) && {
      style: {
        ...o.style,
        ...e.style
      }
    },
    ...(o == null ? void 0 : o.sx) && (e == null ? void 0 : e.sx) && {
      sx: [...Array.isArray(o.sx) ? o.sx : [o.sx], ...Array.isArray(e.sx) ? e.sx : [e.sx]]
    }
  };
}
class Rn {
  constructor() {
    Oo(this, "mountEffect", () => {
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
    return new Rn();
  }
  static use() {
    const t = ps(Rn.create).current, [o, r] = g.useState(!1);
    return t.shouldMount = o, t.setShouldMount = r, g.useEffect(t.mountEffect, [o]), t;
  }
  mount() {
    return this.mounted || (this.mounted = Ou(), this.shouldMount = !0, this.setShouldMount(this.shouldMount)), this.mounted;
  }
  /* Ripple API */
  start(...t) {
    this.mount().then(() => {
      var o;
      return (o = this.ref.current) == null ? void 0 : o.start(...t);
    });
  }
  stop(...t) {
    this.mount().then(() => {
      var o;
      return (o = this.ref.current) == null ? void 0 : o.stop(...t);
    });
  }
  pulsate(...t) {
    this.mount().then(() => {
      var o;
      return (o = this.ref.current) == null ? void 0 : o.pulsate(...t);
    });
  }
}
function Tu() {
  return Rn.use();
}
function Ou() {
  let e, t;
  const o = new Promise((r, i) => {
    e = r, t = i;
  });
  return o.resolve = e, o.reject = t, o;
}
function zr() {
  return zr = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var o = arguments[t];
      for (var r in o) ({}).hasOwnProperty.call(o, r) && (e[r] = o[r]);
    }
    return e;
  }, zr.apply(null, arguments);
}
function Es(e, t) {
  if (e == null) return {};
  var o = {};
  for (var r in e) if ({}.hasOwnProperty.call(e, r)) {
    if (t.indexOf(r) !== -1) continue;
    o[r] = e[r];
  }
  return o;
}
function Lr(e, t) {
  return Lr = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(o, r) {
    return o.__proto__ = r, o;
  }, Lr(e, t);
}
function Ts(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, Lr(e, t);
}
const aa = {
  disabled: !1
};
var Au = process.env.NODE_ENV !== "production" ? n.oneOfType([n.number, n.shape({
  enter: n.number,
  exit: n.number,
  appear: n.number
}).isRequired]) : null;
process.env.NODE_ENV !== "production" && n.oneOfType([n.string, n.shape({
  enter: n.string,
  exit: n.string,
  active: n.string
}), n.shape({
  enter: n.string,
  enterDone: n.string,
  enterActive: n.string,
  exit: n.string,
  exitDone: n.string,
  exitActive: n.string
})]);
const Fn = je.createContext(null);
var ku = function(t) {
  return t.scrollTop;
}, Do = "unmounted", Vt = "exited", Wt = "entering", lo = "entered", Vr = "exiting", ct = /* @__PURE__ */ function(e) {
  Ts(t, e);
  function t(r, i) {
    var a;
    a = e.call(this, r, i) || this;
    var l = i, s = l && !l.isMounting ? r.enter : r.appear, c;
    return a.appearStatus = null, r.in ? s ? (c = Vt, a.appearStatus = Wt) : c = lo : r.unmountOnExit || r.mountOnEnter ? c = Do : c = Vt, a.state = {
      status: c
    }, a.nextCallback = null, a;
  }
  t.getDerivedStateFromProps = function(i, a) {
    var l = i.in;
    return l && a.status === Do ? {
      status: Vt
    } : null;
  };
  var o = t.prototype;
  return o.componentDidMount = function() {
    this.updateStatus(!0, this.appearStatus);
  }, o.componentDidUpdate = function(i) {
    var a = null;
    if (i !== this.props) {
      var l = this.state.status;
      this.props.in ? l !== Wt && l !== lo && (a = Wt) : (l === Wt || l === lo) && (a = Vr);
    }
    this.updateStatus(!1, a);
  }, o.componentWillUnmount = function() {
    this.cancelNextCallback();
  }, o.getTimeouts = function() {
    var i = this.props.timeout, a, l, s;
    return a = l = s = i, i != null && typeof i != "number" && (a = i.exit, l = i.enter, s = i.appear !== void 0 ? i.appear : l), {
      exit: a,
      enter: l,
      appear: s
    };
  }, o.updateStatus = function(i, a) {
    if (i === void 0 && (i = !1), a !== null)
      if (this.cancelNextCallback(), a === Wt) {
        if (this.props.unmountOnExit || this.props.mountOnEnter) {
          var l = this.props.nodeRef ? this.props.nodeRef.current : an.findDOMNode(this);
          l && ku(l);
        }
        this.performEnter(i);
      } else
        this.performExit();
    else this.props.unmountOnExit && this.state.status === Vt && this.setState({
      status: Do
    });
  }, o.performEnter = function(i) {
    var a = this, l = this.props.enter, s = this.context ? this.context.isMounting : i, c = this.props.nodeRef ? [s] : [an.findDOMNode(this), s], p = c[0], d = c[1], f = this.getTimeouts(), h = s ? f.appear : f.enter;
    if (!i && !l || aa.disabled) {
      this.safeSetState({
        status: lo
      }, function() {
        a.props.onEntered(p);
      });
      return;
    }
    this.props.onEnter(p, d), this.safeSetState({
      status: Wt
    }, function() {
      a.props.onEntering(p, d), a.onTransitionEnd(h, function() {
        a.safeSetState({
          status: lo
        }, function() {
          a.props.onEntered(p, d);
        });
      });
    });
  }, o.performExit = function() {
    var i = this, a = this.props.exit, l = this.getTimeouts(), s = this.props.nodeRef ? void 0 : an.findDOMNode(this);
    if (!a || aa.disabled) {
      this.safeSetState({
        status: Vt
      }, function() {
        i.props.onExited(s);
      });
      return;
    }
    this.props.onExit(s), this.safeSetState({
      status: Vr
    }, function() {
      i.props.onExiting(s), i.onTransitionEnd(l.exit, function() {
        i.safeSetState({
          status: Vt
        }, function() {
          i.props.onExited(s);
        });
      });
    });
  }, o.cancelNextCallback = function() {
    this.nextCallback !== null && (this.nextCallback.cancel(), this.nextCallback = null);
  }, o.safeSetState = function(i, a) {
    a = this.setNextCallback(a), this.setState(i, a);
  }, o.setNextCallback = function(i) {
    var a = this, l = !0;
    return this.nextCallback = function(s) {
      l && (l = !1, a.nextCallback = null, i(s));
    }, this.nextCallback.cancel = function() {
      l = !1;
    }, this.nextCallback;
  }, o.onTransitionEnd = function(i, a) {
    this.setNextCallback(a);
    var l = this.props.nodeRef ? this.props.nodeRef.current : an.findDOMNode(this), s = i == null && !this.props.addEndListener;
    if (!l || s) {
      setTimeout(this.nextCallback, 0);
      return;
    }
    if (this.props.addEndListener) {
      var c = this.props.nodeRef ? [this.nextCallback] : [l, this.nextCallback], p = c[0], d = c[1];
      this.props.addEndListener(p, d);
    }
    i != null && setTimeout(this.nextCallback, i);
  }, o.render = function() {
    var i = this.state.status;
    if (i === Do)
      return null;
    var a = this.props, l = a.children;
    a.in, a.mountOnEnter, a.unmountOnExit, a.appear, a.enter, a.exit, a.timeout, a.addEndListener, a.onEnter, a.onEntering, a.onEntered, a.onExit, a.onExiting, a.onExited, a.nodeRef;
    var s = Es(a, ["children", "in", "mountOnEnter", "unmountOnExit", "appear", "enter", "exit", "timeout", "addEndListener", "onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited", "nodeRef"]);
    return (
      // allows for nested Transitions
      /* @__PURE__ */ je.createElement(Fn.Provider, {
        value: null
      }, typeof l == "function" ? l(i, s) : je.cloneElement(je.Children.only(l), s))
    );
  }, t;
}(je.Component);
ct.contextType = Fn;
ct.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * A React reference to DOM element that need to transition:
   * https://stackoverflow.com/a/51127130/4671932
   *
   *   - When `nodeRef` prop is used, `node` is not passed to callback functions
   *      (e.g. `onEnter`) because user already has direct access to the node.
   *   - When changing `key` prop of `Transition` in a `TransitionGroup` a new
   *     `nodeRef` need to be provided to `Transition` with changed `key` prop
   *     (see
   *     [test/CSSTransition-test.js](https://github.com/reactjs/react-transition-group/blob/13435f897b3ab71f6e19d724f145596f5910581c/test/CSSTransition-test.js#L362-L437)).
   */
  nodeRef: n.shape({
    current: typeof Element > "u" ? n.any : function(e, t, o, r, i, a) {
      var l = e[t];
      return n.instanceOf(l && "ownerDocument" in l ? l.ownerDocument.defaultView.Element : Element)(e, t, o, r, i, a);
    }
  }),
  /**
   * A `function` child can be used instead of a React element. This function is
   * called with the current transition status (`'entering'`, `'entered'`,
   * `'exiting'`, `'exited'`), which can be used to apply context
   * specific props to a component.
   *
   * ```jsx
   * <Transition in={this.state.in} timeout={150}>
   *   {state => (
   *     <MyComponent className={`fade fade-${state}`} />
   *   )}
   * </Transition>
   * ```
   */
  children: n.oneOfType([n.func.isRequired, n.element.isRequired]).isRequired,
  /**
   * Show the component; triggers the enter or exit states
   */
  in: n.bool,
  /**
   * By default the child component is mounted immediately along with
   * the parent `Transition` component. If you want to "lazy mount" the component on the
   * first `in={true}` you can set `mountOnEnter`. After the first enter transition the component will stay
   * mounted, even on "exited", unless you also specify `unmountOnExit`.
   */
  mountOnEnter: n.bool,
  /**
   * By default the child component stays mounted after it reaches the `'exited'` state.
   * Set `unmountOnExit` if you'd prefer to unmount the component after it finishes exiting.
   */
  unmountOnExit: n.bool,
  /**
   * By default the child component does not perform the enter transition when
   * it first mounts, regardless of the value of `in`. If you want this
   * behavior, set both `appear` and `in` to `true`.
   *
   * > **Note**: there are no special appear states like `appearing`/`appeared`, this prop
   * > only adds an additional enter transition. However, in the
   * > `<CSSTransition>` component that first enter transition does result in
   * > additional `.appear-*` classes, that way you can choose to style it
   * > differently.
   */
  appear: n.bool,
  /**
   * Enable or disable enter transitions.
   */
  enter: n.bool,
  /**
   * Enable or disable exit transitions.
   */
  exit: n.bool,
  /**
   * The duration of the transition, in milliseconds.
   * Required unless `addEndListener` is provided.
   *
   * You may specify a single timeout for all transitions:
   *
   * ```jsx
   * timeout={500}
   * ```
   *
   * or individually:
   *
   * ```jsx
   * timeout={{
   *  appear: 500,
   *  enter: 300,
   *  exit: 500,
   * }}
   * ```
   *
   * - `appear` defaults to the value of `enter`
   * - `enter` defaults to `0`
   * - `exit` defaults to `0`
   *
   * @type {number | { enter?: number, exit?: number, appear?: number }}
   */
  timeout: function(t) {
    var o = Au;
    t.addEndListener || (o = o.isRequired);
    for (var r = arguments.length, i = new Array(r > 1 ? r - 1 : 0), a = 1; a < r; a++)
      i[a - 1] = arguments[a];
    return o.apply(void 0, [t].concat(i));
  },
  /**
   * Add a custom transition end trigger. Called with the transitioning
   * DOM node and a `done` callback. Allows for more fine grained transition end
   * logic. Timeouts are still used as a fallback if provided.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * ```jsx
   * addEndListener={(node, done) => {
   *   // use the css transitionend event to mark the finish of a transition
   *   node.addEventListener('transitionend', done, false);
   * }}
   * ```
   */
  addEndListener: n.func,
  /**
   * Callback fired before the "entering" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool) -> void
   */
  onEnter: n.func,
  /**
   * Callback fired after the "entering" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool)
   */
  onEntering: n.func,
  /**
   * Callback fired after the "entered" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool) -> void
   */
  onEntered: n.func,
  /**
   * Callback fired before the "exiting" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExit: n.func,
  /**
   * Callback fired after the "exiting" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExiting: n.func,
  /**
   * Callback fired after the "exited" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExited: n.func
} : {};
function so() {
}
ct.defaultProps = {
  in: !1,
  mountOnEnter: !1,
  unmountOnExit: !1,
  appear: !1,
  enter: !0,
  exit: !0,
  onEnter: so,
  onEntering: so,
  onEntered: so,
  onExit: so,
  onExiting: so,
  onExited: so
};
ct.UNMOUNTED = Do;
ct.EXITED = Vt;
ct.ENTERING = Wt;
ct.ENTERED = lo;
ct.EXITING = Vr;
function Ru(e) {
  if (e === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function ai(e, t) {
  var o = function(a) {
    return t && yn(a) ? t(a) : a;
  }, r = /* @__PURE__ */ Object.create(null);
  return e && Rl.map(e, function(i) {
    return i;
  }).forEach(function(i) {
    r[i.key] = o(i);
  }), r;
}
function Fu(e, t) {
  e = e || {}, t = t || {};
  function o(d) {
    return d in t ? t[d] : e[d];
  }
  var r = /* @__PURE__ */ Object.create(null), i = [];
  for (var a in e)
    a in t ? i.length && (r[a] = i, i = []) : i.push(a);
  var l, s = {};
  for (var c in t) {
    if (r[c])
      for (l = 0; l < r[c].length; l++) {
        var p = r[c][l];
        s[r[c][l]] = o(p);
      }
    s[c] = o(c);
  }
  for (l = 0; l < i.length; l++)
    s[i[l]] = o(i[l]);
  return s;
}
function Ht(e, t, o) {
  return o[t] != null ? o[t] : e.props[t];
}
function Pu(e, t) {
  return ai(e.children, function(o) {
    return vn(o, {
      onExited: t.bind(null, o),
      in: !0,
      appear: Ht(o, "appear", e),
      enter: Ht(o, "enter", e),
      exit: Ht(o, "exit", e)
    });
  });
}
function Bu(e, t, o) {
  var r = ai(e.children), i = Fu(t, r);
  return Object.keys(i).forEach(function(a) {
    var l = i[a];
    if (yn(l)) {
      var s = a in t, c = a in r, p = t[a], d = yn(p) && !p.props.in;
      c && (!s || d) ? i[a] = vn(l, {
        onExited: o.bind(null, l),
        in: !0,
        exit: Ht(l, "exit", e),
        enter: Ht(l, "enter", e)
      }) : !c && s && !d ? i[a] = vn(l, {
        in: !1
      }) : c && s && yn(p) && (i[a] = vn(l, {
        onExited: o.bind(null, l),
        in: p.props.in,
        exit: Ht(l, "exit", e),
        enter: Ht(l, "enter", e)
      }));
    }
  }), i;
}
var Mu = Object.values || function(e) {
  return Object.keys(e).map(function(t) {
    return e[t];
  });
}, Iu = {
  component: "div",
  childFactory: function(t) {
    return t;
  }
}, si = /* @__PURE__ */ function(e) {
  Ts(t, e);
  function t(r, i) {
    var a;
    a = e.call(this, r, i) || this;
    var l = a.handleExited.bind(Ru(a));
    return a.state = {
      contextValue: {
        isMounting: !0
      },
      handleExited: l,
      firstRender: !0
    }, a;
  }
  var o = t.prototype;
  return o.componentDidMount = function() {
    this.mounted = !0, this.setState({
      contextValue: {
        isMounting: !1
      }
    });
  }, o.componentWillUnmount = function() {
    this.mounted = !1;
  }, t.getDerivedStateFromProps = function(i, a) {
    var l = a.children, s = a.handleExited, c = a.firstRender;
    return {
      children: c ? Pu(i, s) : Bu(i, l, s),
      firstRender: !1
    };
  }, o.handleExited = function(i, a) {
    var l = ai(this.props.children);
    i.key in l || (i.props.onExited && i.props.onExited(a), this.mounted && this.setState(function(s) {
      var c = zr({}, s.children);
      return delete c[i.key], {
        children: c
      };
    }));
  }, o.render = function() {
    var i = this.props, a = i.component, l = i.childFactory, s = Es(i, ["component", "childFactory"]), c = this.state.contextValue, p = Mu(this.state.children).map(l);
    return delete s.appear, delete s.enter, delete s.exit, a === null ? /* @__PURE__ */ je.createElement(Fn.Provider, {
      value: c
    }, p) : /* @__PURE__ */ je.createElement(Fn.Provider, {
      value: c
    }, /* @__PURE__ */ je.createElement(a, s, p));
  }, t;
}(je.Component);
si.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * `<TransitionGroup>` renders a `<div>` by default. You can change this
   * behavior by providing a `component` prop.
   * If you use React v16+ and would like to avoid a wrapping `<div>` element
   * you can pass in `component={null}`. This is useful if the wrapping div
   * borks your css styles.
   */
  component: n.any,
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
  children: n.node,
  /**
   * A convenience prop that enables or disables appear animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  appear: n.bool,
  /**
   * A convenience prop that enables or disables enter animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  enter: n.bool,
  /**
   * A convenience prop that enables or disables exit animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  exit: n.bool,
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
  childFactory: n.func
} : {};
si.defaultProps = Iu;
function Os(e) {
  const {
    className: t,
    classes: o,
    pulsate: r = !1,
    rippleX: i,
    rippleY: a,
    rippleSize: l,
    in: s,
    onExited: c,
    timeout: p
  } = e, [d, f] = g.useState(!1), h = Z(t, o.ripple, o.rippleVisible, r && o.ripplePulsate), b = {
    width: l,
    height: l,
    top: -(l / 2) + a,
    left: -(l / 2) + i
  }, v = Z(o.child, d && o.childLeaving, r && o.childPulsate);
  return !s && !d && f(!0), g.useEffect(() => {
    if (!s && c != null) {
      const y = setTimeout(c, p);
      return () => {
        clearTimeout(y);
      };
    }
  }, [c, s, p]), /* @__PURE__ */ S("span", {
    className: h,
    style: b,
    children: /* @__PURE__ */ S("span", {
      className: v
    })
  });
}
process.env.NODE_ENV !== "production" && (Os.propTypes = {
  /**
   * Override or extend the styles applied to the component.
   */
  classes: n.object.isRequired,
  className: n.string,
  /**
   * @ignore - injected from TransitionGroup
   */
  in: n.bool,
  /**
   * @ignore - injected from TransitionGroup
   */
  onExited: n.func,
  /**
   * If `true`, the ripple pulsates, typically indicating the keyboard focus state of an element.
   */
  pulsate: n.bool,
  /**
   * Diameter of the ripple.
   */
  rippleSize: n.number,
  /**
   * Horizontal position of the ripple center.
   */
  rippleX: n.number,
  /**
   * Vertical position of the ripple center.
   */
  rippleY: n.number,
  /**
   * exit delay
   */
  timeout: n.number.isRequired
});
const Ze = le("MuiTouchRipple", ["root", "ripple", "rippleVisible", "ripplePulsate", "child", "childLeaving", "childPulsate"]), Wr = 550, Du = 80, Nu = Jo`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`, $u = Jo`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`, ju = Jo`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`, zu = H("span", {
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
}), Lu = H(Os, {
  name: "MuiTouchRipple",
  slot: "Ripple"
})`
  opacity: 0;
  position: absolute;

  &.${Ze.rippleVisible} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${Nu};
    animation-duration: ${Wr}ms;
    animation-timing-function: ${({
  theme: e
}) => e.transitions.easing.easeInOut};
  }

  &.${Ze.ripplePulsate} {
    animation-duration: ${({
  theme: e
}) => e.transitions.duration.shorter}ms;
  }

  & .${Ze.child} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${Ze.childLeaving} {
    opacity: 0;
    animation-name: ${$u};
    animation-duration: ${Wr}ms;
    animation-timing-function: ${({
  theme: e
}) => e.transitions.easing.easeInOut};
  }

  & .${Ze.childPulsate} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
    animation-name: ${ju};
    animation-duration: 2500ms;
    animation-timing-function: ${({
  theme: e
}) => e.transitions.easing.easeInOut};
    animation-iteration-count: infinite;
    animation-delay: 200ms;
  }
`, As = /* @__PURE__ */ g.forwardRef(function(t, o) {
  const r = ge({
    props: t,
    name: "MuiTouchRipple"
  }), {
    center: i = !1,
    classes: a = {},
    className: l,
    ...s
  } = r, [c, p] = g.useState([]), d = g.useRef(0), f = g.useRef(null);
  g.useEffect(() => {
    f.current && (f.current(), f.current = null);
  }, [c]);
  const h = g.useRef(!1), b = co(), v = g.useRef(null), y = g.useRef(null), C = g.useCallback((m) => {
    const {
      pulsate: T,
      rippleX: A,
      rippleY: P,
      rippleSize: $,
      cb: D
    } = m;
    p((u) => [...u, /* @__PURE__ */ S(Lu, {
      classes: {
        ripple: Z(a.ripple, Ze.ripple),
        rippleVisible: Z(a.rippleVisible, Ze.rippleVisible),
        ripplePulsate: Z(a.ripplePulsate, Ze.ripplePulsate),
        child: Z(a.child, Ze.child),
        childLeaving: Z(a.childLeaving, Ze.childLeaving),
        childPulsate: Z(a.childPulsate, Ze.childPulsate)
      },
      timeout: Wr,
      pulsate: T,
      rippleX: A,
      rippleY: P,
      rippleSize: $
    }, d.current)]), d.current += 1, f.current = D;
  }, [a]), x = g.useCallback((m = {}, T = {}, A = () => {
  }) => {
    const {
      pulsate: P = !1,
      center: $ = i || T.pulsate,
      fakeElement: D = !1
      // For test purposes
    } = T;
    if ((m == null ? void 0 : m.type) === "mousedown" && h.current) {
      h.current = !1;
      return;
    }
    (m == null ? void 0 : m.type) === "touchstart" && (h.current = !0);
    const u = D ? null : y.current, R = u ? u.getBoundingClientRect() : {
      width: 0,
      height: 0,
      left: 0,
      top: 0
    };
    let B, O, M;
    if ($ || m === void 0 || m.clientX === 0 && m.clientY === 0 || !m.clientX && !m.touches)
      B = Math.round(R.width / 2), O = Math.round(R.height / 2);
    else {
      const {
        clientX: N,
        clientY: F
      } = m.touches && m.touches.length > 0 ? m.touches[0] : m;
      B = Math.round(N - R.left), O = Math.round(F - R.top);
    }
    if ($)
      M = Math.sqrt((2 * R.width ** 2 + R.height ** 2) / 3), M % 2 === 0 && (M += 1);
    else {
      const N = Math.max(Math.abs((u ? u.clientWidth : 0) - B), B) * 2 + 2, F = Math.max(Math.abs((u ? u.clientHeight : 0) - O), O) * 2 + 2;
      M = Math.sqrt(N ** 2 + F ** 2);
    }
    m != null && m.touches ? v.current === null && (v.current = () => {
      C({
        pulsate: P,
        rippleX: B,
        rippleY: O,
        rippleSize: M,
        cb: A
      });
    }, b.start(Du, () => {
      v.current && (v.current(), v.current = null);
    })) : C({
      pulsate: P,
      rippleX: B,
      rippleY: O,
      rippleSize: M,
      cb: A
    });
  }, [i, C, b]), E = g.useCallback(() => {
    x({}, {
      pulsate: !0
    });
  }, [x]), w = g.useCallback((m, T) => {
    if (b.clear(), (m == null ? void 0 : m.type) === "touchend" && v.current) {
      v.current(), v.current = null, b.start(0, () => {
        w(m, T);
      });
      return;
    }
    v.current = null, p((A) => A.length > 0 ? A.slice(1) : A), f.current = T;
  }, [b]);
  return g.useImperativeHandle(o, () => ({
    pulsate: E,
    start: x,
    stop: w
  }), [E, x, w]), /* @__PURE__ */ S(zu, {
    className: Z(Ze.root, a.root, l),
    ref: y,
    ...s,
    children: /* @__PURE__ */ S(si, {
      component: null,
      exit: !0,
      children: c
    })
  });
});
process.env.NODE_ENV !== "production" && (As.propTypes = {
  /**
   * If `true`, the ripple starts at the center of the component
   * rather than at the point of interaction.
   */
  center: n.bool,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: n.object,
  /**
   * @ignore
   */
  className: n.string
});
function Vu(e) {
  return ue("MuiButtonBase", e);
}
const Wu = le("MuiButtonBase", ["root", "disabled", "focusVisible"]), Uu = (e) => {
  const {
    disabled: t,
    focusVisible: o,
    focusVisibleClassName: r,
    classes: i
  } = e, l = fe({
    root: ["root", t && "disabled", o && "focusVisible"]
  }, Vu, i);
  return o && r && (l.root += ` ${r}`), l;
}, Hu = H("button", {
  name: "MuiButtonBase",
  slot: "Root",
  overridesResolver: (e, t) => t.root
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
  [`&.${Wu.disabled}`]: {
    pointerEvents: "none",
    // Disable link interactions
    cursor: "default"
  },
  "@media print": {
    colorAdjust: "exact"
  }
}), lt = /* @__PURE__ */ g.forwardRef(function(t, o) {
  const r = ge({
    props: t,
    name: "MuiButtonBase"
  }), {
    action: i,
    centerRipple: a = !1,
    children: l,
    className: s,
    component: c = "button",
    disabled: p = !1,
    disableRipple: d = !1,
    disableTouchRipple: f = !1,
    focusRipple: h = !1,
    focusVisibleClassName: b,
    LinkComponent: v = "a",
    onBlur: y,
    onClick: C,
    onContextMenu: x,
    onDragLeave: E,
    onFocus: w,
    onFocusVisible: m,
    onKeyDown: T,
    onKeyUp: A,
    onMouseDown: P,
    onMouseLeave: $,
    onMouseUp: D,
    onTouchEnd: u,
    onTouchMove: R,
    onTouchStart: B,
    tabIndex: O = 0,
    TouchRippleProps: M,
    touchRippleRef: N,
    type: F,
    ...W
  } = r, U = g.useRef(null), j = Tu(), k = Ne(j.ref, N), [L, oe] = g.useState(!1);
  p && L && oe(!1), g.useImperativeHandle(i, () => ({
    focusVisible: () => {
      oe(!0), U.current.focus();
    }
  }), []);
  const ee = j.shouldMount && !d && !p;
  g.useEffect(() => {
    L && h && !d && j.pulsate();
  }, [d, h, L, j]);
  const Y = Ct(j, "start", P, f), K = Ct(j, "stop", x, f), G = Ct(j, "stop", E, f), z = Ct(j, "stop", D, f), te = Ct(j, "stop", (ie) => {
    L && ie.preventDefault(), $ && $(ie);
  }, f), ne = Ct(j, "start", B, f), Q = Ct(j, "stop", u, f), J = Ct(j, "stop", R, f), X = Ct(j, "stop", (ie) => {
    An(ie.target) || oe(!1), y && y(ie);
  }, !1), ce = He((ie) => {
    U.current || (U.current = ie.currentTarget), An(ie.target) && (oe(!0), m && m(ie)), w && w(ie);
  }), pe = () => {
    const ie = U.current;
    return c && c !== "button" && !(ie.tagName === "A" && ie.href);
  }, Te = He((ie) => {
    h && !ie.repeat && L && ie.key === " " && j.stop(ie, () => {
      j.start(ie);
    }), ie.target === ie.currentTarget && pe() && ie.key === " " && ie.preventDefault(), T && T(ie), ie.target === ie.currentTarget && pe() && ie.key === "Enter" && !p && (ie.preventDefault(), C && C(ie));
  }), Ce = He((ie) => {
    h && ie.key === " " && L && !ie.defaultPrevented && j.stop(ie, () => {
      j.pulsate(ie);
    }), A && A(ie), C && ie.target === ie.currentTarget && pe() && ie.key === " " && !ie.defaultPrevented && C(ie);
  });
  let be = c;
  be === "button" && (W.href || W.to) && (be = v);
  const xe = {};
  be === "button" ? (xe.type = F === void 0 ? "button" : F, xe.disabled = p) : (!W.href && !W.to && (xe.role = "button"), p && (xe["aria-disabled"] = p));
  const Me = Ne(o, U), De = {
    ...r,
    centerRipple: a,
    component: c,
    disabled: p,
    disableRipple: d,
    disableTouchRipple: f,
    focusRipple: h,
    tabIndex: O,
    focusVisible: L
  }, we = Uu(De);
  return /* @__PURE__ */ ye(Hu, {
    as: be,
    className: Z(we.root, s),
    ownerState: De,
    onBlur: X,
    onClick: C,
    onContextMenu: K,
    onFocus: ce,
    onKeyDown: Te,
    onKeyUp: Ce,
    onMouseDown: Y,
    onMouseLeave: te,
    onMouseUp: z,
    onDragLeave: G,
    onTouchEnd: Q,
    onTouchMove: J,
    onTouchStart: ne,
    ref: Me,
    tabIndex: p ? -1 : O,
    type: F,
    ...xe,
    ...W,
    children: [l, ee ? /* @__PURE__ */ S(As, {
      ref: k,
      center: a,
      ...M
    }) : null]
  });
});
function Ct(e, t, o, r = !1) {
  return He((i) => (o && o(i), r || e[t](i), !0));
}
process.env.NODE_ENV !== "production" && (lt.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * A ref for imperative actions.
   * It currently only supports `focusVisible()` action.
   */
  action: Tt,
  /**
   * If `true`, the ripples are centered.
   * They won't start at the cursor interaction position.
   * @default false
   */
  centerRipple: n.bool,
  /**
   * The content of the component.
   */
  children: n.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: n.object,
  /**
   * @ignore
   */
  className: n.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: On,
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: n.bool,
  /**
   * If `true`, the ripple effect is disabled.
   *
   * ⚠️ Without a ripple there is no styling for :focus-visible by default. Be sure
   * to highlight the element by applying separate styles with the `.Mui-focusVisible` class.
   * @default false
   */
  disableRipple: n.bool,
  /**
   * If `true`, the touch ripple effect is disabled.
   * @default false
   */
  disableTouchRipple: n.bool,
  /**
   * If `true`, the base button will have a keyboard focus ripple.
   * @default false
   */
  focusRipple: n.bool,
  /**
   * This prop can help identify which element has keyboard focus.
   * The class name will be applied when the element gains the focus through keyboard interaction.
   * It's a polyfill for the [CSS :focus-visible selector](https://drafts.csswg.org/selectors-4/#the-focus-visible-pseudo).
   * The rationale for using this feature [is explained here](https://github.com/WICG/focus-visible/blob/HEAD/explainer.md).
   * A [polyfill can be used](https://github.com/WICG/focus-visible) to apply a `focus-visible` class to other components
   * if needed.
   */
  focusVisibleClassName: n.string,
  /**
   * @ignore
   */
  href: n.any,
  /**
   * The component used to render a link when the `href` prop is provided.
   * @default 'a'
   */
  LinkComponent: n.elementType,
  /**
   * @ignore
   */
  onBlur: n.func,
  /**
   * @ignore
   */
  onClick: n.func,
  /**
   * @ignore
   */
  onContextMenu: n.func,
  /**
   * @ignore
   */
  onDragLeave: n.func,
  /**
   * @ignore
   */
  onFocus: n.func,
  /**
   * Callback fired when the component is focused with a keyboard.
   * We trigger a `onFocus` callback too.
   */
  onFocusVisible: n.func,
  /**
   * @ignore
   */
  onKeyDown: n.func,
  /**
   * @ignore
   */
  onKeyUp: n.func,
  /**
   * @ignore
   */
  onMouseDown: n.func,
  /**
   * @ignore
   */
  onMouseLeave: n.func,
  /**
   * @ignore
   */
  onMouseUp: n.func,
  /**
   * @ignore
   */
  onTouchEnd: n.func,
  /**
   * @ignore
   */
  onTouchMove: n.func,
  /**
   * @ignore
   */
  onTouchStart: n.func,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: n.oneOfType([n.arrayOf(n.oneOfType([n.func, n.object, n.bool])), n.func, n.object]),
  /**
   * @default 0
   */
  tabIndex: n.number,
  /**
   * Props applied to the `TouchRipple` element.
   */
  TouchRippleProps: n.object,
  /**
   * A ref that points to the `TouchRipple` element.
   */
  touchRippleRef: n.oneOfType([n.func, n.shape({
    current: n.shape({
      pulsate: n.func.isRequired,
      start: n.func.isRequired,
      stop: n.func.isRequired
    })
  })]),
  /**
   * @ignore
   */
  type: n.oneOfType([n.oneOf(["button", "reset", "submit"]), n.string])
});
function Qu(e) {
  return ue("MuiCircularProgress", e);
}
le("MuiCircularProgress", ["root", "determinate", "indeterminate", "colorPrimary", "colorSecondary", "svg", "circle", "circleDeterminate", "circleIndeterminate", "circleDisableShrink"]);
const Pt = 44, Ur = Jo`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`, Hr = Jo`
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
`, Ku = typeof Ur != "string" ? Ka`
        animation: ${Ur} 1.4s linear infinite;
      ` : null, Yu = typeof Hr != "string" ? Ka`
        animation: ${Hr} 1.4s ease-in-out infinite;
      ` : null, Gu = (e) => {
  const {
    classes: t,
    variant: o,
    color: r,
    disableShrink: i
  } = e, a = {
    root: ["root", o, `color${V(r)}`],
    svg: ["svg"],
    circle: ["circle", `circle${V(o)}`, i && "circleDisableShrink"]
  };
  return fe(a, Qu, t);
}, qu = H("span", {
  name: "MuiCircularProgress",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: o
    } = e;
    return [t.root, t[o.variant], t[`color${V(o.color)}`]];
  }
})(de(({
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
    style: Ku || {
      animation: `${Ur} 1.4s linear infinite`
    }
  }, ...Object.entries(e.palette).filter(Ie()).map(([t]) => ({
    props: {
      color: t
    },
    style: {
      color: (e.vars || e).palette[t].main
    }
  }))]
}))), Xu = H("svg", {
  name: "MuiCircularProgress",
  slot: "Svg",
  overridesResolver: (e, t) => t.svg
})({
  display: "block"
  // Keeps the progress centered
}), Ju = H("circle", {
  name: "MuiCircularProgress",
  slot: "Circle",
  overridesResolver: (e, t) => {
    const {
      ownerState: o
    } = e;
    return [t.circle, t[`circle${V(o.variant)}`], o.disableShrink && t.circleDisableShrink];
  }
})(de(({
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
    style: Yu || {
      // At runtime for Pigment CSS, `bufferAnimation` will be null and the generated keyframe will be used.
      animation: `${Hr} 1.4s ease-in-out infinite`
    }
  }]
}))), li = /* @__PURE__ */ g.forwardRef(function(t, o) {
  const r = ge({
    props: t,
    name: "MuiCircularProgress"
  }), {
    className: i,
    color: a = "primary",
    disableShrink: l = !1,
    size: s = 40,
    style: c,
    thickness: p = 3.6,
    value: d = 0,
    variant: f = "indeterminate",
    ...h
  } = r, b = {
    ...r,
    color: a,
    disableShrink: l,
    size: s,
    thickness: p,
    value: d,
    variant: f
  }, v = Gu(b), y = {}, C = {}, x = {};
  if (f === "determinate") {
    const E = 2 * Math.PI * ((Pt - p) / 2);
    y.strokeDasharray = E.toFixed(3), x["aria-valuenow"] = Math.round(d), y.strokeDashoffset = `${((100 - d) / 100 * E).toFixed(3)}px`, C.transform = "rotate(-90deg)";
  }
  return /* @__PURE__ */ S(qu, {
    className: Z(v.root, i),
    style: {
      width: s,
      height: s,
      ...C,
      ...c
    },
    ownerState: b,
    ref: o,
    role: "progressbar",
    ...x,
    ...h,
    children: /* @__PURE__ */ S(Xu, {
      className: v.svg,
      ownerState: b,
      viewBox: `${Pt / 2} ${Pt / 2} ${Pt} ${Pt}`,
      children: /* @__PURE__ */ S(Ju, {
        className: v.circle,
        style: y,
        ownerState: b,
        cx: Pt,
        cy: Pt,
        r: (Pt - p) / 2,
        fill: "none",
        strokeWidth: p
      })
    })
  });
});
process.env.NODE_ENV !== "production" && (li.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Override or extend the styles applied to the component.
   */
  classes: n.object,
  /**
   * @ignore
   */
  className: n.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * @default 'primary'
   */
  color: n.oneOfType([n.oneOf(["inherit", "primary", "secondary", "error", "info", "success", "warning"]), n.string]),
  /**
   * If `true`, the shrink animation is disabled.
   * This only works if variant is `indeterminate`.
   * @default false
   */
  disableShrink: Et(n.bool, (e) => e.disableShrink && e.variant && e.variant !== "indeterminate" ? new Error("MUI: You have provided the `disableShrink` prop with a variant other than `indeterminate`. This will have no effect.") : null),
  /**
   * The size of the component.
   * If using a number, the pixel unit is assumed.
   * If using a string, you need to provide the CSS unit, for example '3rem'.
   * @default 40
   */
  size: n.oneOfType([n.number, n.string]),
  /**
   * @ignore
   */
  style: n.object,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: n.oneOfType([n.arrayOf(n.oneOfType([n.func, n.object, n.bool])), n.func, n.object]),
  /**
   * The thickness of the circle.
   * @default 3.6
   */
  thickness: n.number,
  /**
   * The value of the progress indicator for the determinate variant.
   * Value between 0 and 100.
   * @default 0
   */
  value: n.number,
  /**
   * The variant to use.
   * Use indeterminate when there is no progress value.
   * @default 'indeterminate'
   */
  variant: n.oneOf(["determinate", "indeterminate"])
});
function Zu(e) {
  return ue("MuiIconButton", e);
}
const sa = le("MuiIconButton", ["root", "disabled", "colorInherit", "colorPrimary", "colorSecondary", "colorError", "colorInfo", "colorSuccess", "colorWarning", "edgeStart", "edgeEnd", "sizeSmall", "sizeMedium", "sizeLarge", "loading", "loadingIndicator", "loadingWrapper"]), _u = (e) => {
  const {
    classes: t,
    disabled: o,
    color: r,
    edge: i,
    size: a,
    loading: l
  } = e, s = {
    root: ["root", l && "loading", o && "disabled", r !== "default" && `color${V(r)}`, i && `edge${V(i)}`, `size${V(a)}`],
    loadingIndicator: ["loadingIndicator"],
    loadingWrapper: ["loadingWrapper"]
  };
  return fe(s, Zu, t);
}, ed = H(lt, {
  name: "MuiIconButton",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: o
    } = e;
    return [t.root, o.loading && t.loading, o.color !== "default" && t[`color${V(o.color)}`], o.edge && t[`edge${V(o.edge)}`], t[`size${V(o.size)}`]];
  }
})(de(({
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
      "--IconButton-hoverBg": e.vars ? `rgba(${e.vars.palette.action.activeChannel} / ${e.vars.palette.action.hoverOpacity})` : q(e.palette.action.active, e.palette.action.hoverOpacity),
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
})), de(({
  theme: e
}) => ({
  variants: [{
    props: {
      color: "inherit"
    },
    style: {
      color: "inherit"
    }
  }, ...Object.entries(e.palette).filter(Ie()).map(([t]) => ({
    props: {
      color: t
    },
    style: {
      color: (e.vars || e).palette[t].main
    }
  })), ...Object.entries(e.palette).filter(Ie()).map(([t]) => ({
    props: {
      color: t
    },
    style: {
      "--IconButton-hoverBg": e.vars ? `rgba(${(e.vars || e).palette[t].mainChannel} / ${e.vars.palette.action.hoverOpacity})` : q((e.vars || e).palette[t].main, e.palette.action.hoverOpacity)
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
  [`&.${sa.disabled}`]: {
    backgroundColor: "transparent",
    color: (e.vars || e).palette.action.disabled
  },
  [`&.${sa.loading}`]: {
    color: "transparent"
  }
}))), td = H("span", {
  name: "MuiIconButton",
  slot: "LoadingIndicator",
  overridesResolver: (e, t) => t.loadingIndicator
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
})), Jt = /* @__PURE__ */ g.forwardRef(function(t, o) {
  const r = ge({
    props: t,
    name: "MuiIconButton"
  }), {
    edge: i = !1,
    children: a,
    className: l,
    color: s = "default",
    disabled: c = !1,
    disableFocusRipple: p = !1,
    size: d = "medium",
    id: f,
    loading: h = null,
    loadingIndicator: b,
    ...v
  } = r, y = tn(f), C = b ?? /* @__PURE__ */ S(li, {
    "aria-labelledby": y,
    color: "inherit",
    size: 16
  }), x = {
    ...r,
    edge: i,
    color: s,
    disabled: c,
    disableFocusRipple: p,
    loading: h,
    loadingIndicator: C,
    size: d
  }, E = _u(x);
  return /* @__PURE__ */ ye(ed, {
    id: h ? y : f,
    className: Z(E.root, l),
    centerRipple: !0,
    focusRipple: !p,
    disabled: c || h,
    ref: o,
    ...v,
    ownerState: x,
    children: [typeof h == "boolean" && // use plain HTML span to minimize the runtime overhead
    /* @__PURE__ */ S("span", {
      className: E.loadingWrapper,
      style: {
        display: "contents"
      },
      children: /* @__PURE__ */ S(td, {
        className: E.loadingIndicator,
        ownerState: x,
        children: h && C
      })
    }), a]
  });
});
process.env.NODE_ENV !== "production" && (Jt.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The icon to display.
   */
  children: Et(n.node, (e) => g.Children.toArray(e.children).some((o) => /* @__PURE__ */ g.isValidElement(o) && o.props.onClick) ? new Error(["MUI: You are providing an onClick event listener to a child of a button element.", "Prefer applying it to the IconButton directly.", "This guarantees that the whole <button> will be responsive to click events."].join(`
`)) : null),
  /**
   * Override or extend the styles applied to the component.
   */
  classes: n.object,
  /**
   * @ignore
   */
  className: n.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * @default 'default'
   */
  color: n.oneOfType([n.oneOf(["inherit", "default", "primary", "secondary", "error", "info", "success", "warning"]), n.string]),
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: n.bool,
  /**
   * If `true`, the  keyboard focus ripple is disabled.
   * @default false
   */
  disableFocusRipple: n.bool,
  /**
   * If `true`, the ripple effect is disabled.
   *
   * ⚠️ Without a ripple there is no styling for :focus-visible by default. Be sure
   * to highlight the element by applying separate styles with the `.Mui-focusVisible` class.
   * @default false
   */
  disableRipple: n.bool,
  /**
   * If given, uses a negative margin to counteract the padding on one
   * side (this is often helpful for aligning the left or right
   * side of the icon with content above or below, without ruining the border
   * size and shape).
   * @default false
   */
  edge: n.oneOf(["end", "start", !1]),
  /**
   * @ignore
   */
  id: n.string,
  /**
   * If `true`, the loading indicator is visible and the button is disabled.
   * If `true | false`, the loading wrapper is always rendered before the children to prevent [Google Translation Crash](https://github.com/mui/material-ui/issues/27853).
   * @default null
   */
  loading: n.bool,
  /**
   * Element placed before the children if the button is in loading state.
   * The node should contain an element with `role="progressbar"` with an accessible name.
   * By default, it renders a `CircularProgress` that is labeled by the button itself.
   * @default <CircularProgress color="inherit" size={16} />
   */
  loadingIndicator: n.node,
  /**
   * The size of the component.
   * `small` is equivalent to the dense button styling.
   * @default 'medium'
   */
  size: n.oneOfType([n.oneOf(["small", "medium", "large"]), n.string]),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: n.oneOfType([n.arrayOf(n.oneOfType([n.func, n.object, n.bool])), n.func, n.object])
});
const od = ze(/* @__PURE__ */ S("path", {
  d: "M20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4C12.76,4 13.5,4.11 14.2, 4.31L15.77,2.74C14.61,2.26 13.34,2 12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0, 0 22,12M7.91,10.08L6.5,11.5L11,16L21,6L19.59,4.58L11,13.17L7.91,10.08Z"
}), "SuccessOutlined"), nd = ze(/* @__PURE__ */ S("path", {
  d: "M12 5.99L19.53 19H4.47L12 5.99M12 2L1 21h22L12 2zm1 14h-2v2h2v-2zm0-6h-2v4h2v-4z"
}), "ReportProblemOutlined"), rd = ze(/* @__PURE__ */ S("path", {
  d: "M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"
}), "ErrorOutline"), id = ze(/* @__PURE__ */ S("path", {
  d: "M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20, 12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10, 10 0 0,0 12,2M11,17H13V11H11V17Z"
}), "InfoOutlined"), ad = ze(/* @__PURE__ */ S("path", {
  d: "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
}), "Close"), sd = (e) => {
  const {
    variant: t,
    color: o,
    severity: r,
    classes: i
  } = e, a = {
    root: ["root", `color${V(o || r)}`, `${t}${V(o || r)}`, `${t}`],
    icon: ["icon"],
    message: ["message"],
    action: ["action"]
  };
  return fe(a, xu, i);
}, ld = H(xo, {
  name: "MuiAlert",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: o
    } = e;
    return [t.root, t[o.variant], t[`${o.variant}${V(o.color || o.severity)}`]];
  }
})(de(({
  theme: e
}) => {
  const t = e.palette.mode === "light" ? uo : fo, o = e.palette.mode === "light" ? fo : uo;
  return {
    ...e.typography.body2,
    backgroundColor: "transparent",
    display: "flex",
    padding: "6px 16px",
    variants: [...Object.entries(e.palette).filter(Ie(["light"])).map(([r]) => ({
      props: {
        colorSeverity: r,
        variant: "standard"
      },
      style: {
        color: e.vars ? e.vars.palette.Alert[`${r}Color`] : t(e.palette[r].light, 0.6),
        backgroundColor: e.vars ? e.vars.palette.Alert[`${r}StandardBg`] : o(e.palette[r].light, 0.9),
        [`& .${ia.icon}`]: e.vars ? {
          color: e.vars.palette.Alert[`${r}IconColor`]
        } : {
          color: e.palette[r].main
        }
      }
    })), ...Object.entries(e.palette).filter(Ie(["light"])).map(([r]) => ({
      props: {
        colorSeverity: r,
        variant: "outlined"
      },
      style: {
        color: e.vars ? e.vars.palette.Alert[`${r}Color`] : t(e.palette[r].light, 0.6),
        border: `1px solid ${(e.vars || e).palette[r].light}`,
        [`& .${ia.icon}`]: e.vars ? {
          color: e.vars.palette.Alert[`${r}IconColor`]
        } : {
          color: e.palette[r].main
        }
      }
    })), ...Object.entries(e.palette).filter(Ie(["dark"])).map(([r]) => ({
      props: {
        colorSeverity: r,
        variant: "filled"
      },
      style: {
        fontWeight: e.typography.fontWeightMedium,
        ...e.vars ? {
          color: e.vars.palette.Alert[`${r}FilledColor`],
          backgroundColor: e.vars.palette.Alert[`${r}FilledBg`]
        } : {
          backgroundColor: e.palette.mode === "dark" ? e.palette[r].dark : e.palette[r].main,
          color: e.palette.getContrastText(e.palette[r].main)
        }
      }
    }))]
  };
})), cd = H("div", {
  name: "MuiAlert",
  slot: "Icon",
  overridesResolver: (e, t) => t.icon
})({
  marginRight: 12,
  padding: "7px 0",
  display: "flex",
  fontSize: 22,
  opacity: 0.9
}), pd = H("div", {
  name: "MuiAlert",
  slot: "Message",
  overridesResolver: (e, t) => t.message
})({
  padding: "8px 0",
  minWidth: 0,
  overflow: "auto"
}), ud = H("div", {
  name: "MuiAlert",
  slot: "Action",
  overridesResolver: (e, t) => t.action
})({
  display: "flex",
  alignItems: "flex-start",
  padding: "4px 0 0 16px",
  marginLeft: "auto",
  marginRight: -8
}), la = {
  success: /* @__PURE__ */ S(od, {
    fontSize: "inherit"
  }),
  warning: /* @__PURE__ */ S(nd, {
    fontSize: "inherit"
  }),
  error: /* @__PURE__ */ S(rd, {
    fontSize: "inherit"
  }),
  info: /* @__PURE__ */ S(id, {
    fontSize: "inherit"
  })
}, ks = /* @__PURE__ */ g.forwardRef(function(t, o) {
  const r = ge({
    props: t,
    name: "MuiAlert"
  }), {
    action: i,
    children: a,
    className: l,
    closeText: s = "Close",
    color: c,
    components: p = {},
    componentsProps: d = {},
    icon: f,
    iconMapping: h = la,
    onClose: b,
    role: v = "alert",
    severity: y = "success",
    slotProps: C = {},
    slots: x = {},
    variant: E = "standard",
    ...w
  } = r, m = {
    ...r,
    color: c,
    severity: y,
    variant: E,
    colorSeverity: c || y
  }, T = sd(m), A = {
    slots: {
      closeButton: p.CloseButton,
      closeIcon: p.CloseIcon,
      ...x
    },
    slotProps: {
      ...d,
      ...C
    }
  }, [P, $] = se("root", {
    ref: o,
    shouldForwardComponentProp: !0,
    className: Z(T.root, l),
    elementType: ld,
    externalForwardedProps: {
      ...A,
      ...w
    },
    ownerState: m,
    additionalProps: {
      role: v,
      elevation: 0
    }
  }), [D, u] = se("icon", {
    className: T.icon,
    elementType: cd,
    externalForwardedProps: A,
    ownerState: m
  }), [R, B] = se("message", {
    className: T.message,
    elementType: pd,
    externalForwardedProps: A,
    ownerState: m
  }), [O, M] = se("action", {
    className: T.action,
    elementType: ud,
    externalForwardedProps: A,
    ownerState: m
  }), [N, F] = se("closeButton", {
    elementType: Jt,
    externalForwardedProps: A,
    ownerState: m
  }), [W, U] = se("closeIcon", {
    elementType: ad,
    externalForwardedProps: A,
    ownerState: m
  });
  return /* @__PURE__ */ ye(P, {
    ...$,
    children: [f !== !1 ? /* @__PURE__ */ S(D, {
      ...u,
      children: f || h[y] || la[y]
    }) : null, /* @__PURE__ */ S(R, {
      ...B,
      children: a
    }), i != null ? /* @__PURE__ */ S(O, {
      ...M,
      children: i
    }) : null, i == null && b ? /* @__PURE__ */ S(O, {
      ...M,
      children: /* @__PURE__ */ S(N, {
        size: "small",
        "aria-label": s,
        title: s,
        color: "inherit",
        onClick: b,
        ...F,
        children: /* @__PURE__ */ S(W, {
          fontSize: "small",
          ...U
        })
      })
    }) : null]
  });
});
process.env.NODE_ENV !== "production" && (ks.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The action to display. It renders after the message, at the end of the alert.
   */
  action: n.node,
  /**
   * The content of the component.
   */
  children: n.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: n.object,
  /**
   * @ignore
   */
  className: n.string,
  /**
   * Override the default label for the *close popup* icon button.
   *
   * For localization purposes, you can use the provided [translations](https://mui.com/material-ui/guides/localization/).
   * @default 'Close'
   */
  closeText: n.string,
  /**
   * The color of the component. Unless provided, the value is taken from the `severity` prop.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   */
  color: n.oneOfType([n.oneOf(["error", "info", "success", "warning"]), n.string]),
  /**
   * The components used for each slot inside.
   *
   * @deprecated use the `slots` prop instead. This prop will be removed in v7. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   *
   * @default {}
   */
  components: n.shape({
    CloseButton: n.elementType,
    CloseIcon: n.elementType
  }),
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * @deprecated use the `slotProps` prop instead. This prop will be removed in v7. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   *
   * @default {}
   */
  componentsProps: n.shape({
    closeButton: n.object,
    closeIcon: n.object
  }),
  /**
   * Override the icon displayed before the children.
   * Unless provided, the icon is mapped to the value of the `severity` prop.
   * Set to `false` to remove the `icon`.
   */
  icon: n.node,
  /**
   * The component maps the `severity` prop to a range of different icons,
   * for instance success to `<SuccessOutlined>`.
   * If you wish to change this mapping, you can provide your own.
   * Alternatively, you can use the `icon` prop to override the icon displayed.
   */
  iconMapping: n.shape({
    error: n.node,
    info: n.node,
    success: n.node,
    warning: n.node
  }),
  /**
   * Callback fired when the component requests to be closed.
   * When provided and no `action` prop is set, a close icon button is displayed that triggers the callback when clicked.
   * @param {React.SyntheticEvent} event The event source of the callback.
   */
  onClose: n.func,
  /**
   * The ARIA role attribute of the element.
   * @default 'alert'
   */
  role: n.string,
  /**
   * The severity of the alert. This defines the color and icon used.
   * @default 'success'
   */
  severity: n.oneOfType([n.oneOf(["error", "info", "success", "warning"]), n.string]),
  /**
   * The props used for each slot inside.
   * @default {}
   */
  slotProps: n.shape({
    action: n.oneOfType([n.func, n.object]),
    closeButton: n.oneOfType([n.func, n.object]),
    closeIcon: n.oneOfType([n.func, n.object]),
    icon: n.oneOfType([n.func, n.object]),
    message: n.oneOfType([n.func, n.object]),
    root: n.oneOfType([n.func, n.object])
  }),
  /**
   * The components used for each slot inside.
   * @default {}
   */
  slots: n.shape({
    action: n.elementType,
    closeButton: n.elementType,
    closeIcon: n.elementType,
    icon: n.elementType,
    message: n.elementType,
    root: n.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: n.oneOfType([n.arrayOf(n.oneOfType([n.func, n.object, n.bool])), n.func, n.object]),
  /**
   * The variant to use.
   * @default 'standard'
   */
  variant: n.oneOfType([n.oneOf(["filled", "outlined", "standard"]), n.string])
});
var Rs = {
  color: void 0,
  size: void 0,
  className: void 0,
  style: void 0,
  attr: void 0
}, ca = je.createContext && /* @__PURE__ */ je.createContext(Rs), dd = ["attr", "size", "title"];
function fd(e, t) {
  if (e == null) return {};
  var o = gd(e, t), r, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      r = a[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r]);
  }
  return o;
}
function gd(e, t) {
  if (e == null) return {};
  var o = {};
  for (var r in e)
    if (Object.prototype.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) >= 0) continue;
      o[r] = e[r];
    }
  return o;
}
function Pn() {
  return Pn = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var o = arguments[t];
      for (var r in o)
        Object.prototype.hasOwnProperty.call(o, r) && (e[r] = o[r]);
    }
    return e;
  }, Pn.apply(this, arguments);
}
function pa(e, t) {
  var o = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), o.push.apply(o, r);
  }
  return o;
}
function Bn(e) {
  for (var t = 1; t < arguments.length; t++) {
    var o = arguments[t] != null ? arguments[t] : {};
    t % 2 ? pa(Object(o), !0).forEach(function(r) {
      hd(e, r, o[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(o)) : pa(Object(o)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(o, r));
    });
  }
  return e;
}
function hd(e, t, o) {
  return t = bd(t), t in e ? Object.defineProperty(e, t, { value: o, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = o, e;
}
function bd(e) {
  var t = md(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function md(e, t) {
  if (typeof e != "object" || !e) return e;
  var o = e[Symbol.toPrimitive];
  if (o !== void 0) {
    var r = o.call(e, t);
    if (typeof r != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Fs(e) {
  return e && e.map((t, o) => /* @__PURE__ */ je.createElement(t.tag, Bn({
    key: o
  }, t.attr), Fs(t.child)));
}
function Ot(e) {
  return (t) => /* @__PURE__ */ je.createElement(yd, Pn({
    attr: Bn({}, e.attr)
  }, t), Fs(e.child));
}
function yd(e) {
  var t = (o) => {
    var {
      attr: r,
      size: i,
      title: a
    } = e, l = fd(e, dd), s = i || o.size || "1em", c;
    return o.className && (c = o.className), e.className && (c = (c ? c + " " : "") + e.className), /* @__PURE__ */ je.createElement("svg", Pn({
      stroke: "currentColor",
      fill: "currentColor",
      strokeWidth: "0"
    }, o.attr, r, l, {
      className: c,
      style: Bn(Bn({
        color: e.color || o.color
      }, o.style), e.style),
      height: s,
      width: s,
      xmlns: "http://www.w3.org/2000/svg"
    }), a && /* @__PURE__ */ je.createElement("title", null, a), e.children);
  };
  return ca !== void 0 ? /* @__PURE__ */ je.createElement(ca.Consumer, null, (o) => t(o)) : t(Rs);
}
function vd(e) {
  return Ot({ attr: { viewBox: "0 0 24 24" }, child: [{ tag: "path", attr: { d: "M17.28 9.28a.75.75 0 0 0-1.06-1.06l-5.97 5.97-2.47-2.47a.75.75 0 0 0-1.06 1.06l3 3a.75.75 0 0 0 1.06 0l6.5-6.5Z" }, child: [] }, { tag: "path", attr: { d: "M12 1c6.075 0 11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12 5.925 1 12 1ZM2.5 12a9.5 9.5 0 0 0 9.5 9.5 9.5 9.5 0 0 0 9.5-9.5A9.5 9.5 0 0 0 12 2.5 9.5 9.5 0 0 0 2.5 12Z" }, child: [] }] })(e);
}
function Cd(e) {
  return Ot({ attr: { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, child: [{ tag: "path", attr: { d: "M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" }, child: [] }, { tag: "line", attr: { x1: "12", y1: "9", x2: "12", y2: "13" }, child: [] }, { tag: "line", attr: { x1: "12", y1: "17", x2: "12.01", y2: "17" }, child: [] }] })(e);
}
function xd(e) {
  return Ot({ attr: { viewBox: "0 0 256 256", fill: "currentColor" }, child: [{ tag: "path", attr: { d: "M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm16-40a8,8,0,0,1-8,8,16,16,0,0,1-16-16V128a8,8,0,0,1,0-16,16,16,0,0,1,16,16v40A8,8,0,0,1,144,176ZM112,84a12,12,0,1,1,12,12A12,12,0,0,1,112,84Z" }, child: [] }] })(e);
}
function wd(e) {
  return Ot({ attr: { viewBox: "0 0 24 24" }, child: [{ tag: "path", attr: { fill: "none", d: "M0 0h24v24H0V0z" }, child: [] }, { tag: "path", attr: { d: "M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z" }, child: [] }] })(e);
}
function Sd(e) {
  return Ot({ attr: { viewBox: "0 0 24 24" }, child: [{ tag: "path", attr: { fill: "none", d: "M0 0h24v24H0z" }, child: [] }, { tag: "path", attr: { d: "M11.67 3.87 9.9 2.1 0 12l9.9 9.9 1.77-1.77L3.54 12z" }, child: [] }] })(e);
}
function Ed(e) {
  return Ot({ attr: { viewBox: "0 0 24 24" }, child: [{ tag: "path", attr: { fill: "none", d: "M0 0h24v24H0V0z" }, child: [] }, { tag: "path", attr: { d: "M6.23 20.23 8 22l10-10L8 2 6.23 3.77 14.46 12z" }, child: [] }] })(e);
}
function ua(e) {
  return Ot({ attr: { viewBox: "0 0 24 24" }, child: [{ tag: "path", attr: { d: "M11 7h2v7h-2zm0 8h2v2h-2z" }, child: [] }, { tag: "path", attr: { d: "m21.707 7.293-5-5A.996.996 0 0 0 16 2H8a.996.996 0 0 0-.707.293l-5 5A.996.996 0 0 0 2 8v8c0 .266.105.52.293.707l5 5A.996.996 0 0 0 8 22h8c.266 0 .52-.105.707-.293l5-5A.996.996 0 0 0 22 16V8a.996.996 0 0 0-.293-.707zM20 15.586 15.586 20H8.414L4 15.586V8.414L8.414 4h7.172L20 8.414v7.172z" }, child: [] }] })(e);
}
const Td = (e, t = "primary") => {
  var i;
  const o = Pe[t].alertColor, r = ((i = e == null ? void 0 : e.palette) == null ? void 0 : i[t].alertColor) ?? o;
  return {
    bgColor: r ?? o,
    iconColor: r ?? o
  };
}, Od = {
  success: /* @__PURE__ */ S(vd, {}),
  info: /* @__PURE__ */ S(xd, {}),
  warning: /* @__PURE__ */ S(Cd, {}),
  error: /* @__PURE__ */ S(wd, {}),
  gray: /* @__PURE__ */ S(ua, {}),
  dark: /* @__PURE__ */ S(ua, {})
}, Ad = H(ks)(({
  "data-severity": e = "success",
  theme: t,
  "data-color": o = "primary"
}) => {
  const r = Td(t, o);
  return {
    fontSize: "16px",
    backgroundColor: r.bgColor[e][0],
    color: e == "dark" ? "#FFFFFF" : "#373737",
    "& .MuiAlert-icon": {
      color: r.bgColor[e][1]
    },
    "& .MuiAlert-message": {
      color: e == "dark" ? "#FFFFFF" : "#373737"
    }
  };
}), ty = ({
  severity: e = "success",
  color: t = "primary",
  iconMapping: o,
  icon: r,
  alertTitle: i,
  ...a
}) => /* @__PURE__ */ ye(
  Ad,
  {
    "data-severity": e,
    "data-color": t,
    icon: r ?? Od[e],
    ...a,
    children: [
      i && /* @__PURE__ */ S(Il, { sx: { color: e == "dark" ? "#FFFFFF" : "#1E1E1E" }, children: i }),
      a.children
    ]
  }
), kd = ze(/* @__PURE__ */ S("path", {
  d: "M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"
}), "Person");
function Rd(e) {
  return ue("MuiAvatar", e);
}
le("MuiAvatar", ["root", "colorDefault", "circular", "rounded", "square", "img", "fallback"]);
const Fd = (e) => {
  const {
    classes: t,
    variant: o,
    colorDefault: r
  } = e;
  return fe({
    root: ["root", o, r && "colorDefault"],
    img: ["img"],
    fallback: ["fallback"]
  }, Rd, t);
}, Pd = H("div", {
  name: "MuiAvatar",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: o
    } = e;
    return [t.root, t[o.variant], o.colorDefault && t.colorDefault];
  }
})(de(({
  theme: e
}) => ({
  position: "relative",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexShrink: 0,
  width: 40,
  height: 40,
  fontFamily: e.typography.fontFamily,
  fontSize: e.typography.pxToRem(20),
  lineHeight: 1,
  borderRadius: "50%",
  overflow: "hidden",
  userSelect: "none",
  variants: [{
    props: {
      variant: "rounded"
    },
    style: {
      borderRadius: (e.vars || e).shape.borderRadius
    }
  }, {
    props: {
      variant: "square"
    },
    style: {
      borderRadius: 0
    }
  }, {
    props: {
      colorDefault: !0
    },
    style: {
      color: (e.vars || e).palette.background.default,
      ...e.vars ? {
        backgroundColor: e.vars.palette.Avatar.defaultBg
      } : {
        backgroundColor: e.palette.grey[400],
        ...e.applyStyles("dark", {
          backgroundColor: e.palette.grey[600]
        })
      }
    }
  }]
}))), Bd = H("img", {
  name: "MuiAvatar",
  slot: "Img",
  overridesResolver: (e, t) => t.img
})({
  width: "100%",
  height: "100%",
  textAlign: "center",
  // Handle non-square image.
  objectFit: "cover",
  // Hide alt text.
  color: "transparent",
  // Hide the image broken icon, only works on Chrome.
  textIndent: 1e4
}), Md = H(kd, {
  name: "MuiAvatar",
  slot: "Fallback",
  overridesResolver: (e, t) => t.fallback
})({
  width: "75%",
  height: "75%"
});
function Id({
  crossOrigin: e,
  referrerPolicy: t,
  src: o,
  srcSet: r
}) {
  const [i, a] = g.useState(!1);
  return g.useEffect(() => {
    if (!o && !r)
      return;
    a(!1);
    let l = !0;
    const s = new Image();
    return s.onload = () => {
      l && a("loaded");
    }, s.onerror = () => {
      l && a("error");
    }, s.crossOrigin = e, s.referrerPolicy = t, s.src = o, r && (s.srcset = r), () => {
      l = !1;
    };
  }, [e, t, o, r]), i;
}
const Ps = /* @__PURE__ */ g.forwardRef(function(t, o) {
  const r = ge({
    props: t,
    name: "MuiAvatar"
  }), {
    alt: i,
    children: a,
    className: l,
    component: s = "div",
    slots: c = {},
    slotProps: p = {},
    imgProps: d,
    sizes: f,
    src: h,
    srcSet: b,
    variant: v = "circular",
    ...y
  } = r;
  let C = null;
  const x = {
    ...r,
    component: s,
    variant: v
  }, E = Id({
    ...d,
    ...typeof p.img == "function" ? p.img(x) : p.img,
    src: h,
    srcSet: b
  }), w = h || b, m = w && E !== "error";
  x.colorDefault = !m, delete x.ownerState;
  const T = Fd(x), [A, P] = se("img", {
    className: T.img,
    elementType: Bd,
    externalForwardedProps: {
      slots: c,
      slotProps: {
        img: {
          ...d,
          ...p.img
        }
      }
    },
    additionalProps: {
      alt: i,
      src: h,
      srcSet: b,
      sizes: f
    },
    ownerState: x
  });
  return m ? C = /* @__PURE__ */ S(A, {
    ...P
  }) : a || a === 0 ? C = a : w && i ? C = i[0] : C = /* @__PURE__ */ S(Md, {
    ownerState: x,
    className: T.fallback
  }), /* @__PURE__ */ S(Pd, {
    as: s,
    className: Z(T.root, l),
    ref: o,
    ...y,
    ownerState: x,
    children: C
  });
});
process.env.NODE_ENV !== "production" && (Ps.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Used in combination with `src` or `srcSet` to
   * provide an alt attribute for the rendered `img` element.
   */
  alt: n.string,
  /**
   * Used to render icon or text elements inside the Avatar if `src` is not set.
   * This can be an element, or just a string.
   */
  children: n.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: n.object,
  /**
   * @ignore
   */
  className: n.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: n.elementType,
  /**
   * [Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#attributes) applied to the `img` element if the component is used to display an image.
   * It can be used to listen for the loading error event.
   * @deprecated Use `slotProps.img` instead. This prop will be removed in v7. See [Migrating from deprecated APIs](/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   */
  imgProps: n.object,
  /**
   * The `sizes` attribute for the `img` element.
   */
  sizes: n.string,
  /**
   * The props used for each slot inside.
   * @default {}
   */
  slotProps: n.shape({
    img: n.oneOfType([n.func, n.object])
  }),
  /**
   * The components used for each slot inside.
   * @default {}
   */
  slots: n.shape({
    img: n.elementType
  }),
  /**
   * The `src` attribute for the `img` element.
   */
  src: n.string,
  /**
   * The `srcSet` attribute for the `img` element.
   * Use this attribute for responsive image display.
   */
  srcSet: n.string,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: n.oneOfType([n.arrayOf(n.oneOfType([n.func, n.object, n.bool])), n.func, n.object]),
  /**
   * The shape of the avatar.
   * @default 'circular'
   */
  variant: n.oneOfType([n.oneOf(["circular", "rounded", "square"]), n.string])
});
const Dd = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMAAAADACAYAAABS3GwHAAAACXBIWXMAACE4AAAhOAFFljFgAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAABBtSURBVHgB7Z3dbtTWFseXB2gPPYWmcNQgQGWCRKVEaklKpVY6p3RyWVIVeIIOT0D6BIQngD5B0ycgXIReJlD1ojeQctRUgqpxUEAkUnISAoGQD5/993gHJ/HM2B7bY6+9ftKOPZ5EynjWf6+P/WGLhERwHKdDHcpeO6Gaft3hOyff6yAWvQZs39H2rk/r15ZlLZLQMhYJkfAZeq9qp33nZcoWCGDC16aVKMZJiIQIoAmewVdU+8o7lql+D54HxqkmiNs4KlHYJNRFBLADz+DRo5+nmsH3UrGBGMZVuykeYjciANoy+gv0xujz3MO3AsKmcdVGqCYI4/MIYwXg6+mveEeuRt8ICGFECeEnMhTjBKAMv0K1nr5KZhp9EDbVPMMPSgwTZBBGCMAX4nxHtRBHqA8EcN0Ur8BaAJ7hD6p2maS3j4qtGkQwzLmSxFIAYviJM6zaVY5CYCUAMfzUGSZmQmAhADH8zLlKTEKjwgtAGT8MH6VMMfxssVUbKnqyXFgBeOXMa1T8kdqiY6s2qIRwkwpIiQoGwh3VflSnYyTGnwfKqo3gO1GtTAWjUALwwp0pqg1iCfmiqtqY+o6+owJRiBDI61nQ61dIKALDVJBqUe4FoIwfI7gwfklyi4VNBUiScxsCebH+dXV6g8T4i0hZtWH1HV7zytS5JJcewAt5kOSWSeCArVp/HkOi3HkAZfxVdbhHYvycKKt2L48Jcq4EoG7QEEm8zxV8p8Ped5wbchECeTEiDP8CCSaAhTiX8rAire0CkHjfWGzKQV7QVgGI8RuPTW0WQdtyAGX8mMYgya7ZlKk2ety2KS1t8QDeB0bPL8muAJAL9LdjPXLmHsArc4rxC35gC20pk2bqATzj/5EEoT7VLKdPZCYAX8wvCI3INBzKJATyxfyC0AyEQ5klxql7ACl1CjGBJ+hLu0SaqgBMN/61tXVaWFiilZVVevbsBb18+cpt4OXL1W2/u3fvXnrnnbfd4/79/6CDB/+51fbt20uGYlPK4wSpCcCb3mBUnR8GD0OfnZ13204jjwtEcODAu3TkyCHq7DxMhmFTzROkMm0iTQFgHr8Rc3vm55doZmbONfr19XVKE3gIiOD48Q/o8OH3yBCwge9FSoFUBODN+LtCjEFvPzX1hGz7SepGXw+ESqdOfeiKwQCwxHKIEiZxAXCv9efB8HcCIXR1HaVy+SgxJ/ExgkQF4CW9iPtZjvIixJmc/Dux2D5pDPAIiVeGEhMA56R3ZeUV3b//0K3oFAHkCN3dJ92qEkNsSjApTlIAWMB+mZiBcOfhw0e5CXfCgtIpRMDUG+D5Bd9TAiQiAI5xP2L9Bw8e0fT0EyoyyAt6ek4SQy4qEYxQi7QsAI6DXQh57t79063pcwDjCJ9+2sMtJEokH0hiLhDKnWViAoz/t9/+y8b4AT4LPhNGpBmh15G3REsC8EKfKjFBG39eqzytgCkYDEVQ8faLjU3sEIhb6MPZ+P2gVPr55x9zCocQCnXFrQq14gHYhD6mGD9g6AkQCl2jmMQSgLdhbZWYgITXBOPXQAR3704WrrTbgKr3wJTIxPUAsRWXN/74429WCW9Y8JlR5mVELJuMLAAv8S0TA2ZmZgtf528FzGdCY0JvnIQ4kgC8xJfFLE/E/ZOTU2Q6GOVmlA9ciboVe1QPUCUmvT+Mn1EMHBuMeN+//4CYAOOPNB0ntAA49f4Ifebm5kmogUl+mOnKhMEoXiCKB2CzwAVuX9gOI48YyQuEEoDX+1eJAZjdaVLJMywojeLeMCG0FwjrAdj0/rb9mIRg8rTKrUVCe4GmAuDU+yP2l96/Pnq5JxNCeYEwHqBKTJDYvzmMxgVCeYEwAijUk7/rga1LpPdvDrwA7hUTmnqBhgLgNuorhOPx4zliAoz/fKNfaOYB2KzxnZ1dICEcWWzwlSHVRm/WFYC3O2/bHl2TJE+fsvpCUwdh0NISmwmClUYzRRt5AEa9v4z6RoXZSHndMKiRACrEBBOnO7fK06esQsZqvWQ4UACckl+48+VlEUBUMDLMKGyE8QeG8/U8QMPMuUhI7x8fRuVQEDibYZcAPFfBZltzEUB8mI2b9AaFQUEegNWe/svLz0mIB7POI3BMIEgAbMIfwGwfnEzRj3NixK7OPUgAFWIEkmAhHgw7j8rOMGibALwBA1Z7+8v8H8HHrmrQTg/AKvwBMgIcH4YhENhm4zsFUCFB4E3F/2JLAN7CFxZzfwShAdvKoX4PIMYvmMJX+qQUdJET+/ezfE5WJjB+Qn1Fn4gHEOrCuPOo6JNS0EVOYD98IR6MPUBZ5wGuAOJuLV0EmD4qNBMYdx4w/jJOtAcoE1MOHHiXhHjg4XqMOY0fJf8LjkgSHB/mAnBz3pL/BUcOH36PhHgwF0AZP9gLAImceIHowPj37mWbBIOaB/CyYVYT4HbS2XmYhGgcPMg+d3IrQfAAZWKOCCA6nZ2HyADKRgjAAHeeKAgbDek0TkAAJ4g5+EKPHDGiR0sEgzym6wFYx/+aY8c6SQjH8eMfkCGYkQMAlEMlDGoORn8PHTKmdGxGDqDp6jpKQmNOnfqQDKIj7pPiC0m5fFS8QAPQ+xsU/gBzQiCAZFi8QH0MvDdlozwAgBeQkeHdoPfHvTENY6pAGniB7u6TJGzHsNhf02GcAMCRI4dNqnQ0BffDsNhfY1YS7Of06VOSECtwD0z2iMYKADGvoW5/Gz09J43OiYwVAEDVw8TET4PPb2jos4XRAgDwAgcOsF74EQgmCEoxQATgVoU++6zbqDAA4d+ZMz0k1ASwSIYDg/jii4+NEIFJnzUEiyIADxMMQ4x/F4vGh0B+OBuIGH8wEIBNwhbaUDglxkh4xfgDsSUECgAi+PLLPhYlUpQ6xfjrg6FQEUAdMEiE3nNycqpwT5rBCO9HH31o9DhHCGwIwCahLsePd7qrySCC2dl5KgL4fz/55CPp9ZtjiwcIQa1u3k0zM7P08OGj3D54D/9nT0+XbAMTnkUIYJqEUMAboE1NPSHbfpwbISDcQayPJhP8ImFbjuNgi7h7JESm3R5BDL9l+ixva8T/kRCbhYUlVwxPny6knizD0PX8fVnT0DLvW/ipRDBFBq0NThMkymjPnr1wWxLgIR+I69Fkl7vEWLQs6319JydIBJAI2lABvAFEsLT0gpaXX7gPnl5bW6eVldVdnkI/yQaJLBoG4nBN9jNKDdg86Ttrk5A4MFyEKRKq5BJXAHou0O8kCGaxTQATJAhmYeOHToJRCUIibNwOEYKZqATYtf2S9wKjwTYJghmM65NS0EVBYM5WyO8XwG0SBDMY1yeWPpERYcEgulTYb+NkywN4eYBUgwTuTGjjBzvXBI+TIPBm3P9ipwBukiDwZsT/wvK/kPEAgTnuBDj/hW0ewMsDxkkQeDK+80LQvkASBglcGdl5wdp5QcIggTHve1HOFrs8gJRDBaaM7DR+UG+lxVXVKiQ0BItb1tY23IUutcUuG1tHLHjB+/qoabZ+GGsI9u3b455jYQzADta4/mbRzNvue7iOcxyFpowEXbSCLkoY9AYYL4z22bPn7uouGPfy8vPAVV3tQosDosCSSS0QnIs4XGzV+3cFvWHV+wslgmvqMEgGAaNeWFh0DV0bfV73AAoLxAEhoGF5pRaGYQwrAVwKeqORACrqMEZMQc8OQ/cvYC/a9odx0aKAILBc0wBP0acEEJjXWo3+SokAAqgQA/wGj21MktqxgQsQAcSgRcFIEJj701fvzWYCqKrDj1RQ5ueX3AaDRxPCAxFgdwsIouAhU1UJ4Kd6bzYTQOGSYRg8evmZmTljQpq0Qd4AQWAzLgiiQNRNfjUNBQCUCK6owxDlGDH67CiYGIaUAK42+oUwAsilFxCjbz8FEEOXf+5/EE0FAPLiBZDIYmfmx49nC1+e5AbEgGcuQxB6wK7N1C19+gkrgLZ6AfT22IVZEtligOQZXqHNzylo2vuDUAIAWXsB3dvb9hMJcQpKG71CqN4fRBFAJl5gZeWVa/QS2/Pi2LFOVwwZCSFU7w9CCwCk6QUkzDGDDITQtPLjJ6oAEvcCYvhmgrAIQki4emSr1h+29weRBACUCDBB7hq1iBi+ABIWQsNR3yAiCwAoEeCZYr0UAzF8IQhUjLq7T7YSGjUd9Q0irgAqFHGmKJJbPGt3bq4Yz9oV2kMLOcIFJYDI69ljCQAoEWCSXLXZ7+ly5l9/PSJBCEtEIYQue+6kFQE0TYhh+Ah3pJwpxEGPI2BQrQE2RUx8/cQWAKiXECPO//PPv2XOvZAIEMKZM931pmVHTnz9tCQA4F80g3DnwYNHND39hAQhaQLCotihjyYJAZTV4Z4Kdzok3BHSxhcW2dRC6KNpWQDgzp17F5aXn98gQciIo0f/Ve3r644d+mhKlABnz/aNWJZznQQhA1TUcT0J4weJCACsrm5cVSKwSRBSxbHX1jZCz/VpRiIhkObnn8fKm5t7MUos+4oKKeAsvn690XfxYr9NCZGYBwBff41/zPmeBCEFHKc0mKTxg0QFAAYGzg5TzhfRC4Vk6Jtv/pNI3O8n0RDIz61bv9xwHLpAgtAiKrccOXfu7EVKgcQ9gGZ1df2SJMVC6zi2KrC0NNjViNQEoGK1Rcva6BcRCPFxbJX09sOWKCVSC4E0UhkS4rFl/DalSGoeQFOrDJX61WlqKha44Shb2biYtvGD1D2AZnT0116iTUycE08gNGG9b2CgP5PHdKXuATQDA/+ekDECoRmOY1WzMn6QmQBAbYzASS2jF4qMswjjT6PW34jMQiA/Eg4J23Fj/v4se35Nph5AUwuHSlIiFaidxg/a4gE0KJE6zp4x5frKJBhINqXORrRVAEBEYCrtN37QlhDID8YJ1FB3n2UFP8hY4Afm9iQ9rTn2/0I5YnT0l9w/jklomaGBgS8TW9DSKrkSABgdvVNV/xa2WpEKEStQ5iwNZl3mbEbuBAAkL+BGPuL9INqeAwTxJi+QhfZFBwvY8xLvB5FLD+AHIZFKkK+INygazuLGBl369tuzuS5u5NID+MH0CawrUDd0mIRC4Dg0jl4/78YPcu8B/Ig3yDsY1bVQ5fmBCkKhBABqC2z2qHKpVSUhRzjDqtf/Ps3VW2lQOAFoRkd/Pa9Co+viDdrOhCpWDJ47d/Y2FZDCCkAjYVG7KF64E0ThBQC8dcffkYwiZ4Br+Kq0uf5D0cKdIFgIQCP5QZrwMnwNKwFoRAhJwtPwNSwFoNGhkUrSqpIjRIW34WtYC8CPN8nuMsV8vrEpYBBL3afhtbW1m5wNX2OMADSjo2NKAHsuq8pRRbyCBjM1abhUopGiljPjYpwA/Hhe4bw6NXATX3cXholSyRlaXd343YTePgijBaC5cWOs46239lyoicGpqCPTtQhuXD9uWZsjq6ubRoQ4zRABBHDr1p2vNjfpgmVZFSp+zjDhOM44whuTe/p6iACa4JVUT6sYuaJuVy9yB8otbg9vw+DV/4kZmbfF4BsjAogBPIQSRJdqp2uicHqzD5uwp5KF3t1Wcbw6bv7++jXZYvDREAEkRC2PoLKqMJ1Qt1UdqaNWZXIfJI6dEMrer3bUFwt68Nou2upvbdWLI1Fd9DYQW6wZ/ca0GHpy/B/PrV+5tmNiEwAAAABJRU5ErkJggg==", Nd = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMAAAADACAYAAABS3GwHAAAACXBIWXMAACE4AAAhOAFFljFgAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAABAaSURBVHgB7Z1NjNTmGccfj0qkkDYlzQeRSsTsIZUCkWDblEaV2szm1oLKkkNyzGzuFUSqkp7KklsjVRApZ9jcSg5lkKC9laWnFtSyVIEDVFmj5BCISAeikAaSdZ+/7Xfxztoztsf22M/7/KR37ZndRIzn+b/Px/vlkFIInudt4ks7bFu5mdebIvcUeR1HP2zAjVzd8P1r5rXjOH1SxsYhJRMRQ9/JbUfkvk3VAgEsRdo1FsUiKZlQAYwgNPgOtxfCa5uSe/A6sEiBIM7iyqJwSUlEBTBAaPDo0fdSYPA7qdlADIvcTqqHWI8KgFaNfpbuG32de/hxQNi0yK1HgSCszyOsFUCkpz8YXqUa/TAghB4L4T2yFOsEwIbfoaCn75KdRh+HS4FneIfFsEQWYYUAIiHOqxSEOEoyEMARW7yCaAGEhn+A237S3j4rLjeIYEFyJUmkANTwC2eB2yGJQhAlADX80lkgYUIQIQA1/Mo5REJCo8YLgI0fho9Sphp+tbjc5pueLDdWAGE58zA1f6S26bjcDrAQTlIDaVHDQLjD7RjfniE1/jrQ5tbDd8KtTQ2jUQIIw51lCgaxlHrR5XaGv6NXqUE0IgQKexb0+h1SmsACNaRaVHsBsPFjBBfGr0lus3CpAUlybUOgMNY/wrcnSI2/ibS5LfB3eDgsU9eSWnqAMORBktsmRQIut5k6hkS18wBs/F2+XCA1fkm0uV2oY4JcKwHwA5onjfelgu90IfyOa0MtQqAwRoThz5JiA1iIM1eHFWkTF4DG+9biUg3ygokKQI3felyasAgmlgOw8WMagya7dtOmYPR4YlNaJuIBwg+Mnl+TXQUgF5iZxHrkyj1AWOZU41eiwBYmUiat1AOExn+MFCWZbpXTJyoTQCTmV5RhVBoOVRICRWJ+RRkFwqHKEuPSPYCWOpWcwBNMl10iLVUAthv/F/eILn1GdOMLouXbRJ9+GTRw48u1f7vxW0SbNwbXxx8kmnqY23f5wfH1oQ1kKy6VPE5QmgDC6Q1W1flh8DD0c9eJzn+y3sjzAjFs5faTJ4l2bSbbcCnwBKVMmyhTAJjHb8Xcng9uspv7KDD8O19TqcBD7GIhvLiFaPujZAvYwHcflUApAghn/B0kwaC3P7UctLKNPgmESq88zTHCU2QDWGI5TwVTuACk1/rrYPiDQAh7poImnMLHCAoVQJj0Iu4XOcp7juP6o5fvJ7J1wwKPUHhlqDABSE56b9whevdiUNFpAsgR5p4hemIjScSlApPiIgWABez7SRinPiQ6frU+4U5aUDqFCIR6A5xf8DoVQCECkBj3I9Y/foXotEuNZjfnBa9tI4nsYxH0aEzGFoDEwS6EPL//J/va2yQCDKi98UNxIVEh+UARc4FQ7myTEGD8v/u7HOMHy7eCz4TPJgizjnwsxhJAGPp0SQjG+Ota5RkHfCaBIuiE+8XmJncIJC30kWz8UVAqfet5UeEQQqGpvFWhcTyAmNDHFuMHAj0BQqHDlJNcAgg3rO2SEJDw2mD8BnzWt//VvNLuELrhgSmZyesBciuubhy9JCvhTQsS4z9eIUnkssnMAggT3zYJADM4m17nH4fT4ZwmIezMkxBnEkCY+IqY5YkYGPN6bOf9q6LygYNZt2LP6gG6JKT3h/ELioFzgxHvd/9NUoDxZ5qOk1oAknp/hD7nr5MSculmsJhHCAeyeIEsHkDMAhdMblPWgmKAEI+YyQukEkDY+3dJAJjdaVPJMy14Jng2QkjtBdJ6ADG9/ymXlATwbGzzAiMFIKn3R+yvvX8y/nJPy7xAGg/QJSFo7D8aQR4ylRdII4BGnfydBLYu0d5/NP5mXjdJCiO9wFABiBr1/ZiUlPxVzrOC8e8d9gejPICYNb7Y0UFJx/nrsibKDftlogDC3XkndnRNkcD4ddQ3Pf4Wj7dICp1hM0WHeQAxvf8/dNQ3M4JGhkFiGDRMAB0SgiunN6sMYSFjNykZjhWApOQX7tz9nJSMYGdrQWEjjD82nE/yAEMz5yaxbOFil6L4QE45FMTOZlgngNBViNnWXMOf/AjbQWJnXBgU5wFE7em/rOFPboR5z9gxgTgBiAl/wKeyerFKEThyvq5zjxNAhwSBJFjJh8DOozMYBq0RQDhgIGpv/xs6/0e5z7pq0KAHEBX+AB0Bzo/QzmONjQ8KoEOKIptO9MWqAMKFLyLm/ijKENaUQ6MeQI1fsYUXzE0r7k1JPPEgKTkRfEJ9x9yoB1ASEXrIHuiYm1bcm5J4XD1AbnAqvVDaJg/wBZB3a+km8LjcXqx0BHceMP42bowHaJNQpr5DSk6mHibJ7MCPVvSFRATHsaUjXAB+ztuKvpDI9kdJyQmOVxVMGz/ECwClPC2FZgfGLzgJBoEHCLNhURPgBvnxZlIy0pafO/mVIHiANgln15OkZMSSZ9a2QgBI5oS780JB2LjLDq+5FQLYSsLxv1D1AqmxxPiB7wFEx/+GmS2kpMSiZ2VHDgCefVTDoDRg3MSi0rEdOYBhzxQpI3j5abKJTXlPim8kEIB6gWTQ+1sWKtoTAgEkw+oFkrHw2bSt8gAAX7LOD1oPnsnuNlmHNVUgA7zA3DOkDGBZ7G/YZJ0AAMYEdJLcffA8LC0T25UER/n1Dk2IATzia9vIWqwVAFY7vfIDsp65bXYvG7VWAAAJ8Z42WQs+v+0j5FYLALzMXqAte+VTLJjvP2dx6GOwXgCIgX/7nF2lUXzWN39ECgUC6JPlIAZ+63k7RIDPiM+q28X49FUAITaIQI1/HX3rQ6AokkWgxh8PBOCSsooRgaTEGAmvGn8sroZAMcBQ/vAzGSVSlDrV+JPBWKgKIIG57ewJuPc8eql5J82guoWBPhsnuGXAhQBcUhLBQBFWk0EE565TI8A8J0z10F5/JK56gBTAkN7ksYIzHxO9f7W+B0gj0cXglkWL2sel73ieh7NTT5CSmlPLRKfd+gjBLPTRFW+ZmYUAsEXcBVIyM2mPoIY/NtNOuDXif0nJzQc3iRY/DnKEsg/mhtFjq8cXt+iahgJ4xMFPFgE7dXvWBpfJuU8CISzf5gzrNhUCYnvE9WgWbFpbFX3HcR4xj3KJVACFgNVVZhc6lE4/vBUIAYL49MvAQ5hrFDP6jIQbDds5YlfrZx9Tgy8J2DyZR+uSUjgwXJRQn9VQpY74AjBzgS6SotjFGgEskaLYhYsfJglGJQiJsHU7RCh2wgmwb/ut8AVGg11SFDtYNDetuDcVRTirIX9UAGdJUexg0dw45kZHhBWLmOKw38XNqgcI8wCtBinSWTLGDwbXBC+SoshmMfpiUAAnSVFk04u+cKIvdDxAEY4/AS76xhoPEOYBi6QoMlkcfCNuXyANgxSp9AbfcAbf0DBIEcwjYZSzyjoPoOVQRSi9QeMHSUstDnHrkDIULGoxC1xuYJHLXb7+L7hiMQx+Z64G/N0wsIbg2xuCe7OtCZZB4n2zaAZXLJbZuCG4PrSBlNH04t504t7UMOg+MF4YrVnVBeO+9jnR9Tv12SwL4ti8MRAMtnQ0AsG9isPH5d4/9hBYJ+m/YBEc5ssBsgjs7nDps3D54p3A6Ef12HUH4sDySuxwh5VpZrmlZSywAObifjFMAB2+nCGhoGeHoWMBu3sruG/a9od5MaLYHi7XtMBTTLMAYvNaZ9h/xSKAADokgKjBX74Z3Cv3gSC2hYLY/j1RgsDcn+mkX44SQJcvx6ihYL+eS6Z9RkoGIAJsw7L9scaHTF0WwHtJvxwlgMYlwzB69PJnPrInpCkb5A0Ilxq4GVdi8msYKgDAIjjIl3mqMWr01dEwMcyzAA4N+4M0AqilF1CjnzwNEMNUdO5/HCMFAOriBZDIYmdm7MPZ9PKkNCCGV54OhFCTM9YSS59R0gpgol4Avf37VzSRbQpInmeemvg5BSN7f5BKAKBqL2B6ezQNcZrJBL1Cqt4fZBFAJV4Ao7GnXI3tpdHZEoihIiGk6v1BagGAMr2Ahjl2UIEQRlZ+omQVQOFeQA3fTjDQhlMsC64eudxm0vb+IJMAAIsAE+QO05io4SugYCEMHfWNI7MAAIsAZ4rtpByo4Stx4FCRuWfGCo1GjvrGkVcAHco4UxTJ7dHLROcbctauMhnGyBFmWQCZ17PnEgBgEWCSXHfU35lyJk5TVJS0ZBRC6rLnIOMIYGRCfOpDouNXtZyp5MOMI2BQbQguZUx8o+QWAEhKiBHnH7tc3CmJit1ACG8+lzgtO3PiG2UsAYDoohmEO8evBKeoK0rRxIRFuUMfQxECaPPlAoc7mzTcUcomEha5NEboYxhbAOCNv3mz/7lNJ0hRKuKn36fub6bzhz6GFhXA2z93sOfKEVKUClhhWyvC+EEhAgAr9+gQ+xOXFKVEPI9t7B6lnuszikJCIMPsX7x26xvCKLHuK6qUQZ872unevvHi/iiFeQDQ+4Xjrjj0OilKCXDoc6BI4weFCgD0djsLLIJ5UpQCgU319hQT90cpNASK8tJp7wR5NEuKMi4O9f6029lHJVC4BzCs3KU5TYqVcUHS69tSSZQmAI7V+istmlERKHmB8Xtf0wxsiUqitBDIoJUhJQ8R43epRErzAIawMjTDt6WpWBFH32vRvrKNH5TuAQyzp72dLc9fRKOeQBkKd5jTXE2s5Jiu0j2AAR9IxwiUUXCtv1uV8YPKBADCMYLSMnql0fR94y+h1j+MykKgKBoOKQP0kSdW2fMbKvUAhjAc0hKpAiZm/GAiHsDgl0hX2BN41CbFOqoqdQ5jogIAKgI7qYPxg4mEQFH8cYK7NI35HqTYAX/XbPzTkzb+4J9SIzg5PsjJ8TwpYvFnde5Ov3lt2dRKAOCl016XwyFstaIVIln0/fn8FZc5R1E7AQDNC2RRl3g/jonnAHGs5gW60L7xYAF7XeL9OGrpAaL4IRHRQfUGjaO/skJzvV85tS5u1F4AIAyJIIIuKbXHI1r07rHx17TXj9IIARjUG9SefljleYcaQqMEANQb1JaFlXv0epmrt8qgcQIw7Dvt7XWQJKs3mCgc7ixxKeXAiV86Z6mBNFYABg2LJkbjwp04Gi8AgLCI622v6ihyJcDwj9Bdeqdp4U4cIgRg0PygVEQZvkGUAAwqhEIRafgGkQIwrIZGOMxPc4SsiDZ8g2gBREGy7Hm038l5vrEt+INYXNKke3RSsuEbrBGAwV+PTLSfcK6ZegUDDH3Ba1GvqeXMvFgngChhCXWvpZv49sMa/rz3FV20obePw2oBGGZPeJtaD/gigBg6JHctQp+/8UXHod43X9kR4oxCBRDDvj97LzgrNMs9ZKfpOQN6eQdxPYc3Nvf0SagARoBKEothh8OegY1ppxOeiVxTENa4vsFzT+/dpbNq8MNRAeTA9xAeTXH3uiMUBbxEtWFTsKfSEv8bXKdFS994dJFLlq4afDZUAAWBPIIeoDY/0K1cZWp7EITnX9v4Pcfd/pXfg1CSxIIY3TdgLCN0cO/576FXx5pal/9/19TQi+P/q2gQShu80aQAAAAASUVORK5CYII=", $d = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMAAAADACAYAAABS3GwHAAAACXBIWXMAACE4AAAhOAFFljFgAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAA/wSURBVHgB7Z09cxRXFoZPD1jewKjkMptAwIjaLbQJQlUrJ2jLI2/gggQREXpIjW3gFyB+gbDL9oaWQ0ceEjvyIsqQIFdZkgOLRGqqVkoQtSogQVAa37f7Xqk16p7p7unu6T73PFVX/TESSDPnvefjfrRDQia02+0Rdajrdko1cz0SOKfAdRjbugE3cHT1/Sfm2nGcbRL6xiEhEQFDP6faeOC8TsUCASwF2hMligUSEiEC6IE2+IZqH+hjnaJ78DKwQL4g7uOoROGSEIkIoANt8OjRL5Fv8Oeo2kAMC6rdFQ9xGBEA7Rn9DO0bfZl7+H5A2LSgWot8QVifR1grgEBPf0sfuRp9NyCElhLCd2Qp1glAGX6D/J6+SXYafRgu+Z7hCyWGJbIIKwQQCHE+Jj/EEaKBAO7Y4hVYC0Ab/g3VrpP09klxVYMI5jlXklgKQAw/c+ZVu81RCKwEIIafO/PETAgsBCCGXzi3iUloVHkBKOOH4aOUKYZfLK5qs1VPlisrAF3OnKPqj9RWHVe1G0oId6mC1KhiINxR7Vt1eo/E+MtAXbUWPhPV6lQxKiUAHe6skz+IJZSLpmr31Gf0MVWISoRAumdBr98goQrMU0WqRaUXgDJ+jODC+CXJrRYuVSBJLm0IpGP9O+r0BxLjryJ11ebVZziny9SlpJQeQIc8SHLrJHDAVW26jCFR6TyAMv6mOvxGYvycqKv2WxkT5FIJQL1BsyTxPlfwmc7rz7g0lCIE0jEiDH+GBBvAQpyrZViRNnABSLxvLS6VIC8YqADE+K3HpQGLYGA5gDJ+TGOQZNdu6uSPHg9sSstAPID+g9HzS7IrAOQC04NYj1y4B9BlTjF+IQhsYSBl0kI9gDb+b0kQomkWOX2iMAEEYn5B6Eah4VAhIVAg5heEXiAcKiwxzt0DSKlTSAk8wUTeJdJcBWC98b96RbSxQfTiJdHWFtHz5+r8hf+aORrefpvo2DtEQ+o4PEx0/Lhq7/lHvGYnLuU8TpCbAPT0Brvq/DB4GPraOtH6+mEjT4snhL8SjdaJTp8my3DJ9wS5TJvIUwCYx2/H3B708quPfaOHCPIE3mB0lGjsDNHJk2QJ2MD3MuVALgLQM/5uEWdg6MvLRCu/52/0UQwfI5qcVGIYIwvAEstZypjMBcC+1l8Gw+8EQjg7TjR+lpiT+RhBpgLQSS/ifp6jvGtrRA8eZhfbZw1/j5B5ZSgzAbBOelG9+fm/RJubVAlOqxxhakpVlY4RQ1zKMCnOUgBYwH6duIFwZ/HX8oQ7cUGyPHWeqzfA8wtuUgZkIgCWcT8M/tEjP9avMsgL4A34cVmJoEV90rcAWA52IeT56SdV039GLMA4wsWL3EKiTPKBLOYCodxZJy7A+Ft3+Rg/wN/SapU3eU+HWUfeF30JQIc+TeKCMX5ehuLz/AVHETT0frGpSR0CsQt9OBt/EJRKZ2Y4hUMIhUbTVoX68QB8Qh9bjB/w8wQIheYoJakEoDesbRIXkPDaYPwGiODHH6tX2o2mqR+Ykpi0HiC14krHL7/wSnjjgr95cZEYkcomEwtAJ7514sAfq9Wv8/fD8orfeHAuTUKcSAA68eUxyxNx/8OHZD3wAnzCv1tJt2JP6gGaxKX3x6Q2PjFwevAe/PwzMQHGn2g6TmwBsOr9Efpg8Yrgs7Hpz3TlwY0kXiCJB+CzwIVX8pcND9l4xEReIJYAdO/fJA5gdqdNJc+4oDTKJyGO7QXiegA+vT+fDzl7Vlas8wI9BcCq90fsL71/NN5yT7u8QBwP0CQuSOzfmxU2AojlBeIIoFJP/o7E26BKev+emM28eNDTC3QVAKtR39VVEmKCPY54AOO/1O0benkAPmt8110SYlLEBl/F0ez2YqQA9O68A3t0TaZgkEdGfeNjtnjkQaPbTNFuHoBR7y+jvolZY/WeRYZB3QTQIC48ZdObFQevTqMZlQyHCoBV8gt3/szC+f79gooZn7ARxh8azkd5gK6Zc6XgE8sWz0ZFdsKLR+hshkMC0K6Cz7bmNq72ygpe4ybnwsKgMA/Aa09/8QDp4fXehY4JhAmAT/gDsPJLSAe/kfNDnXuYABrECan/p4df59HoDIMOCEAPGPDa2//lSxIEzaFqUKcH4BX+APEA6eE5efCAjXcKoEGCwJtG8GJPAHrhC4+5P4IQzYFyaNADiPELtvCBOamF3WQFz+dkFQPfJ9Q3zIl4ACEavp1Hw5zUwm6yQjxAevh6gLrJAzwBpN1auhIMD5OQEr6dB4y/jhPjAerElePHSUgJ7/duHF9qwQuWHHuHhJTwFoCX89aCFyw5eZKElODxqnyp4wt/ASCRk0Q4Oej9+SbBwPcAOhvmNQGuk9FREhLCP3fyKkHwAHXizmkRQGLs6DTqdgiAvzvPFrxXdnQapyCAU8QdfKASBsXHnvfK8wC843/D2BkSYjI2RpZgSQ4AUA6VMKg3w6pidvIEWYIlOYDh7FkSejA5SRYxkvZJ8dVk/Kx4gW6g97cn/AEWhUAAxi9eIJpxvjNiIqjb5QEAvICMDB8Gvb+FnYM9VSADvMDUeRI6sCv2N4zYJwBw+rRNlY7e4P2wK/Y3WJYEB/nwQ0mIgeUe0V4BYKXY5D/JemD8FudE9goAoOphc1UIBQE7Q5897BYAeH+S+8KPcPA3T02R7YgAEANfuGBXGICS58WLJPgC2CbbQT4wc8kOEcD4Z2ZkLMRnWwRgsEEEYvydbEsIFISzCMT4Q4EAXBL2MSLglBjjbxHjD8OVECgMiODKFR4lUpQ6xfgjOUoigGj+NeWvJ374sHpPmkF1CyVemf3aDRcCcEmI5h9j/ryhB0oE6+tUCbD67d8fSq/fG1c8QBwQEl1UYwV/rBItLpb32VlIdM+f9ye3CXHYhgCekBAPeAO05WXVVsojBIQ7iPXPyoq3hLhOu93GFnG/kZCcQXsEMfx+mXD01oj/JyE9G5tEq3+oHMHNP1k2exyNjcmahv5518FXJQJkd3US+mdNvZXra0Rbz1TbokxAMgujR2yPmr709lmw7TjOu0f1xRKJALIBWwqabQXhDYwQ0BAq4Z45BjEVGyTcOEf59Zjeo0cMPg9g82QE4JKQPTBcGLCEKmXEE4CZC7RMgmAXBwSwRIJgFy6+mCQYlSAkwvbtECFYiUqAPduv6QuMBrskCHawYE5qYTcFgTl7IX9QAPdJEOxgwZw45kRGhAWLGFVhv4uTPQ+g8wCpBgncWTLGDzrXBC+QIPBmIXjRKYC7JAi8aQUvnOCFjAcIzPEmwAVvHPAAOg9YIEHgyULnjbB9gSQMErjS6rzhdN6QMEhgzLs6ytnjkAeQcqjAlFan8YOjEd98W7UGCd3BopadHaLnz1V7sX+OI17zXsdxZ/9neq0fxhqCoSH/3CySwT00c40jdoAw92TBTBxaYTedsJsSBgUwK7ie6lVdMO6tp+rey/JsluUJ4R3VhvdXkg3rVWUiDuCq3n807AUn6ieUCObU4QbZBAz9fxv7yxfNscpAAO+954sBK9OGtUjsYl4J4GrYC90E0FCHe8QVb73ulr+IHcdnz6q3/WFajCiwgxxEwd9TTCgBhOa1TrefUiKAABrEgaDBb274i9WFfbDbxAktCAiDjyAw92ci6sVeAmiqw7dUVTY2dNtURr9JQgJOnNh/nnK1Q6amEsB3US/2EkD1kmEYPHr5x4/tCWnyBgk1vMPYGd87VIfI5NfQVQBAieCWOsxSmRGjL45qiWFWCeB2t2+II4ByegEx+sFTfjGMBuf+h9FTAKA0XgCGjp2ZVx9XvzzJDYhhctIXQjmeSxBZ+gwSVwCD9QLo7R8tSiJbFbzNe88M+jkFPXt/EEsAoHAvYHr7ld8lxKkqg/MKsXp/kEQAxXgBzKXBwycktucFtnPHM8uKEUKs3h/EFgDI1QtImGMH+QuhZ+UnSFIBZO8FxPDtBANt709mXT1yVZuO2/uDRAIASgSYIDdH/SKGL4BshdB11DeMxAIASgR4ptg5SoMYvhAGHioyNdVPaNRz1DeMtAJoUNKZokhu8cDptYo8a1cYDOlzhBklgMTr2VMJACgRYJJcs+c3mnLm4q8kCLFJJoTYZc9O+hFA74TYGL6UM4U0mHEEiCEalxImvkFSCwBEJsSI8x88kDn3QjZACBcuRE3LTpz4BulLAODAohn09I8e+aO3gpA1h8Oi1KGPIQsB1AlPml9eHpFwR8id/bDIpT5CH0PfAgDt77+foadbP5AgFMXf/9Z0PvoodehjqFEGOFeutNTXOyQIheDcycL4QSYC8Hj96ja15UF7Qs7AxmBrGZFJCGRoz83V6a0hjBLLhlpC9rTb2/Tm9YRz86ZLGZGdB1B4v5hDN0kQ8sChG1kaP8hUAMC5dm2enNosCUKWODTrfPppJnH/wX82J9pff/2DitdmSBD6pU0t57NrlykHMvcAe+zsXJWkWOgb2NCbnb4Gu7qRmwBUrKYSlp1pEYGQGt/4pz1byoncQiCDVIaEVOwbv0s5kl8IpNGVoWl1mpuKBWZ45c6dy3kbP8jdAxhUUnxOqRoT58QTCN15vYNafyGP6crdAxhUeXRJxgiEntScZlHG7/13VCD+GAHlltELFQZhD4z/k08yr/V3o7AQKIiEQ8IB/CkO00X2/IZCPYBBh0NSIhUGavxgIB7A4JVIjw7dU79FnQT7KKjU2Y2BCgCICCylBMYPBhICBfHegDc7E0oALRLsoK0+6zc7E4M2fjBwDxCk/fV/blF7d5YEvmBW57VrmS1o6ZdSCQC0v/yySbUj2GpFKkScQLJ7pHaj6DJnL0onACB5ATNKEu+HMfAcIIy9vEAW2jNAfYYliffDKKUHCOKFRM6RW+INKgZCHmpfdT77rNTFjVJ6gCDO55/Pe+sKiOZJqAjtBW/xesmNH5TeAwQRb1By/Pk8qPJ8QRWh9B4giHiDUqM+m9ejVTJ+UCkPEKT91VeXqK0SLPEGg2ZJ9foob96nClJZARgkLBoQFQx3wqi8AIA3bjD0l49lFLkAfMO/Qzs7X+S5WL0oWAjAoBfg41nGTRKyhZnhG1gJwCBCyBCmhm9gKQDDXmi0u9uUHCEhzA3fwFoAQfQku+uU9vnG1qAGsVDSfP36LmfDN1gjAINej3xdtYZ4BQ16e6c2r0aFWlUtZ6bFOgEE8bzCkSOXrNzE1zN61PBrs/Tq1bINvX0YVgvAoHKFESWEGU8Mu23lGRyeaxH8uH5BHVu2hDi9EAGE0P7mmw9oF15BiaH6OcOS+pgXEN7Y3NNHIQLogV9SfWucqNZQVxBDg8qKF9bgsaHK4Gl3QfXy98XguyMCSIHnId68GaXa0XFPFG3Vig6bsMqqpnr3Ngx+d0n9/8uqZOmKwSdDBJARXh4xNFRXYjhFeHh4rQZBqGtdaTJHao9EisVbROL4BuwQdtXGOZqrxjL83t1xnoihZ8efuB8O9a5VZecAAAAASUVORK5CYII=", xr = {
  extraLarge: 64,
  large: 40,
  medium: 32,
  small: 24
}, oy = ({
  types: e = "unknown",
  src: t,
  children: o,
  size: r = "large",
  sx: i,
  ...a
}) => {
  const l = e === "male" ? Nd : e === "female" ? $d : Dd, [s, c] = Gr(t || null);
  return Fl(() => {
    c(t || null);
  }, [t]), /* @__PURE__ */ S(
    Ps,
    {
      src: s || (!s && !o ? l : void 0),
      sx: {
        width: xr[r],
        height: xr[r],
        fontSize: xr[r] * 0.4,
        ...i
      },
      slotProps: {
        img: {
          onError: () => {
            c(l);
          }
        }
      },
      ...a,
      children: !s && o
    }
  );
};
function jd(e) {
  return ue("MuiButton", e);
}
const Lt = le("MuiButton", ["root", "text", "textInherit", "textPrimary", "textSecondary", "textSuccess", "textError", "textInfo", "textWarning", "outlined", "outlinedInherit", "outlinedPrimary", "outlinedSecondary", "outlinedSuccess", "outlinedError", "outlinedInfo", "outlinedWarning", "contained", "containedInherit", "containedPrimary", "containedSecondary", "containedSuccess", "containedError", "containedInfo", "containedWarning", "disableElevation", "focusVisible", "disabled", "colorInherit", "colorPrimary", "colorSecondary", "colorSuccess", "colorError", "colorInfo", "colorWarning", "textSizeSmall", "textSizeMedium", "textSizeLarge", "outlinedSizeSmall", "outlinedSizeMedium", "outlinedSizeLarge", "containedSizeSmall", "containedSizeMedium", "containedSizeLarge", "sizeMedium", "sizeSmall", "sizeLarge", "fullWidth", "startIcon", "endIcon", "icon", "iconSizeSmall", "iconSizeMedium", "iconSizeLarge", "loading", "loadingWrapper", "loadingIconPlaceholder", "loadingIndicator", "loadingPositionCenter", "loadingPositionStart", "loadingPositionEnd"]), Bs = /* @__PURE__ */ g.createContext({});
process.env.NODE_ENV !== "production" && (Bs.displayName = "ButtonGroupContext");
const Ms = /* @__PURE__ */ g.createContext(void 0);
process.env.NODE_ENV !== "production" && (Ms.displayName = "ButtonGroupButtonContext");
const zd = (e) => {
  const {
    color: t,
    disableElevation: o,
    fullWidth: r,
    size: i,
    variant: a,
    loading: l,
    loadingPosition: s,
    classes: c
  } = e, p = {
    root: ["root", l && "loading", a, `${a}${V(t)}`, `size${V(i)}`, `${a}Size${V(i)}`, `color${V(t)}`, o && "disableElevation", r && "fullWidth", l && `loadingPosition${V(s)}`],
    startIcon: ["icon", "startIcon", `iconSize${V(i)}`],
    endIcon: ["icon", "endIcon", `iconSize${V(i)}`],
    loadingIndicator: ["loadingIndicator"],
    loadingWrapper: ["loadingWrapper"]
  }, d = fe(p, jd, c);
  return {
    ...c,
    // forward the focused, disabled, etc. classes to the ButtonBase
    ...d
  };
}, Is = [{
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
}], Ld = H(lt, {
  shouldForwardProp: (e) => it(e) || e === "classes",
  name: "MuiButton",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: o
    } = e;
    return [t.root, t[o.variant], t[`${o.variant}${V(o.color)}`], t[`size${V(o.size)}`], t[`${o.variant}Size${V(o.size)}`], o.color === "inherit" && t.colorInherit, o.disableElevation && t.disableElevation, o.fullWidth && t.fullWidth, o.loading && t.loading];
  }
})(de(({
  theme: e
}) => {
  const t = e.palette.mode === "light" ? e.palette.grey[300] : e.palette.grey[800], o = e.palette.mode === "light" ? e.palette.grey.A100 : e.palette.grey[700];
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
    [`&.${Lt.disabled}`]: {
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
        [`&.${Lt.focusVisible}`]: {
          boxShadow: (e.vars || e).shadows[6]
        },
        [`&.${Lt.disabled}`]: {
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
        [`&.${Lt.disabled}`]: {
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
    }, ...Object.entries(e.palette).filter(Ie()).map(([r]) => ({
      props: {
        color: r
      },
      style: {
        "--variant-textColor": (e.vars || e).palette[r].main,
        "--variant-outlinedColor": (e.vars || e).palette[r].main,
        "--variant-outlinedBorder": e.vars ? `rgba(${e.vars.palette[r].mainChannel} / 0.5)` : q(e.palette[r].main, 0.5),
        "--variant-containedColor": (e.vars || e).palette[r].contrastText,
        "--variant-containedBg": (e.vars || e).palette[r].main,
        "@media (hover: hover)": {
          "&:hover": {
            "--variant-containedBg": (e.vars || e).palette[r].dark,
            "--variant-textBg": e.vars ? `rgba(${e.vars.palette[r].mainChannel} / ${e.vars.palette.action.hoverOpacity})` : q(e.palette[r].main, e.palette.action.hoverOpacity),
            "--variant-outlinedBorder": (e.vars || e).palette[r].main,
            "--variant-outlinedBg": e.vars ? `rgba(${e.vars.palette[r].mainChannel} / ${e.vars.palette.action.hoverOpacity})` : q(e.palette[r].main, e.palette.action.hoverOpacity)
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
            "--variant-containedBg": e.vars ? e.vars.palette.Button.inheritContainedHoverBg : o,
            "--variant-textBg": e.vars ? `rgba(${e.vars.palette.text.primaryChannel} / ${e.vars.palette.action.hoverOpacity})` : q(e.palette.text.primary, e.palette.action.hoverOpacity),
            "--variant-outlinedBg": e.vars ? `rgba(${e.vars.palette.text.primaryChannel} / ${e.vars.palette.action.hoverOpacity})` : q(e.palette.text.primary, e.palette.action.hoverOpacity)
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
        [`&.${Lt.focusVisible}`]: {
          boxShadow: "none"
        },
        "&:active": {
          boxShadow: "none"
        },
        [`&.${Lt.disabled}`]: {
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
        [`&.${Lt.loading}`]: {
          color: "transparent"
        }
      }
    }]
  };
})), Vd = H("span", {
  name: "MuiButton",
  slot: "StartIcon",
  overridesResolver: (e, t) => {
    const {
      ownerState: o
    } = e;
    return [t.startIcon, o.loading && t.startIconLoadingStart, t[`iconSize${V(o.size)}`]];
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
  }, ...Is]
})), Wd = H("span", {
  name: "MuiButton",
  slot: "EndIcon",
  overridesResolver: (e, t) => {
    const {
      ownerState: o
    } = e;
    return [t.endIcon, o.loading && t.endIconLoadingEnd, t[`iconSize${V(o.size)}`]];
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
  }, ...Is]
})), Ud = H("span", {
  name: "MuiButton",
  slot: "LoadingIndicator",
  overridesResolver: (e, t) => t.loadingIndicator
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
})), da = H("span", {
  name: "MuiButton",
  slot: "LoadingIconPlaceholder",
  overridesResolver: (e, t) => t.loadingIconPlaceholder
})({
  display: "inline-block",
  width: "1em",
  height: "1em"
}), Ds = /* @__PURE__ */ g.forwardRef(function(t, o) {
  const r = g.useContext(Bs), i = g.useContext(Ms), a = Uo(r, t), l = ge({
    props: a,
    name: "MuiButton"
  }), {
    children: s,
    color: c = "primary",
    component: p = "button",
    className: d,
    disabled: f = !1,
    disableElevation: h = !1,
    disableFocusRipple: b = !1,
    endIcon: v,
    focusVisibleClassName: y,
    fullWidth: C = !1,
    id: x,
    loading: E = null,
    loadingIndicator: w,
    loadingPosition: m = "center",
    size: T = "medium",
    startIcon: A,
    type: P,
    variant: $ = "text",
    ...D
  } = l, u = tn(x), R = w ?? /* @__PURE__ */ S(li, {
    "aria-labelledby": u,
    color: "inherit",
    size: 16
  }), B = {
    ...l,
    color: c,
    component: p,
    disabled: f,
    disableElevation: h,
    disableFocusRipple: b,
    fullWidth: C,
    loading: E,
    loadingIndicator: R,
    loadingPosition: m,
    size: T,
    type: P,
    variant: $
  }, O = zd(B), M = (A || E && m === "start") && /* @__PURE__ */ S(Vd, {
    className: O.startIcon,
    ownerState: B,
    children: A || /* @__PURE__ */ S(da, {
      className: O.loadingIconPlaceholder,
      ownerState: B
    })
  }), N = (v || E && m === "end") && /* @__PURE__ */ S(Wd, {
    className: O.endIcon,
    ownerState: B,
    children: v || /* @__PURE__ */ S(da, {
      className: O.loadingIconPlaceholder,
      ownerState: B
    })
  }), F = i || "", W = typeof E == "boolean" ? (
    // use plain HTML span to minimize the runtime overhead
    /* @__PURE__ */ S("span", {
      className: O.loadingWrapper,
      style: {
        display: "contents"
      },
      children: E && /* @__PURE__ */ S(Ud, {
        className: O.loadingIndicator,
        ownerState: B,
        children: R
      })
    })
  ) : null;
  return /* @__PURE__ */ ye(Ld, {
    ownerState: B,
    className: Z(r.className, O.root, d, F),
    component: p,
    disabled: f || E,
    focusRipple: !b,
    focusVisibleClassName: Z(O.focusVisible, y),
    ref: o,
    type: P,
    id: E ? u : x,
    ...D,
    classes: O,
    children: [M, m !== "end" && W, s, m === "end" && W, N]
  });
});
process.env.NODE_ENV !== "production" && (Ds.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: n.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: n.object,
  /**
   * @ignore
   */
  className: n.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * @default 'primary'
   */
  color: n.oneOfType([n.oneOf(["inherit", "primary", "secondary", "success", "error", "info", "warning"]), n.string]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: n.elementType,
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: n.bool,
  /**
   * If `true`, no elevation is used.
   * @default false
   */
  disableElevation: n.bool,
  /**
   * If `true`, the  keyboard focus ripple is disabled.
   * @default false
   */
  disableFocusRipple: n.bool,
  /**
   * If `true`, the ripple effect is disabled.
   *
   * ⚠️ Without a ripple there is no styling for :focus-visible by default. Be sure
   * to highlight the element by applying separate styles with the `.Mui-focusVisible` class.
   * @default false
   */
  disableRipple: n.bool,
  /**
   * Element placed after the children.
   */
  endIcon: n.node,
  /**
   * @ignore
   */
  focusVisibleClassName: n.string,
  /**
   * If `true`, the button will take up the full width of its container.
   * @default false
   */
  fullWidth: n.bool,
  /**
   * The URL to link to when the button is clicked.
   * If defined, an `a` element will be used as the root node.
   */
  href: n.string,
  /**
   * @ignore
   */
  id: n.string,
  /**
   * If `true`, the loading indicator is visible and the button is disabled.
   * If `true | false`, the loading wrapper is always rendered before the children to prevent [Google Translation Crash](https://github.com/mui/material-ui/issues/27853).
   * @default null
   */
  loading: n.bool,
  /**
   * Element placed before the children if the button is in loading state.
   * The node should contain an element with `role="progressbar"` with an accessible name.
   * By default, it renders a `CircularProgress` that is labeled by the button itself.
   * @default <CircularProgress color="inherit" size={16} />
   */
  loadingIndicator: n.node,
  /**
   * The loading indicator can be positioned on the start, end, or the center of the button.
   * @default 'center'
   */
  loadingPosition: n.oneOf(["center", "end", "start"]),
  /**
   * The size of the component.
   * `small` is equivalent to the dense button styling.
   * @default 'medium'
   */
  size: n.oneOfType([n.oneOf(["small", "medium", "large"]), n.string]),
  /**
   * Element placed before the children.
   */
  startIcon: n.node,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: n.oneOfType([n.arrayOf(n.oneOfType([n.func, n.object, n.bool])), n.func, n.object]),
  /**
   * @ignore
   */
  type: n.oneOfType([n.oneOf(["button", "reset", "submit"]), n.string]),
  /**
   * The variant to use.
   * @default 'text'
   */
  variant: n.oneOfType([n.oneOf(["contained", "outlined", "text"]), n.string])
});
const Hd = (e, t = "primary") => {
  var i;
  const o = Pe[t], r = ((i = e == null ? void 0 : e.palette) == null ? void 0 : i[t]) ?? o;
  return {
    disabledcolor: at[0],
    filled: {
      borderColor: "transparent",
      bgColor: r.custMain ?? o.custMain,
      //theme傳進來的顏色/fallback的顏色
      fontColor: r.onMain ?? o.onMain,
      overlay: r.onMain ?? o.onMain,
      focusBorderColor: "transparent",
      shadowColor: r.shadow ?? o.shadow
    },
    outlined: {
      borderColor: r.outline ?? o.outline,
      bgColor: "transparent",
      fontColor: r.custMain ?? o.custMain,
      overlay: r.custMain ?? o.custMain,
      focusBorderColor: r.custMain ?? o.custMain,
      shadowColor: "transparent"
    },
    text: {
      borderColor: "transparent",
      bgColor: "transparent",
      fontColor: r.custMain ?? o.custMain,
      overlay: r.custMain ?? o.custMain,
      focusBorderColor: "transparent",
      shadowColor: "transparent"
    },
    elevated: {
      borderColor: "transparent",
      bgColor: r.elevated ?? o.elevated,
      fontColor: r.custMain ?? o.custMain,
      overlay: r.custMain ?? o.custMain,
      focusBorderColor: "transparent",
      shadowColor: r.shadow ?? o.shadow
    },
    tonal: {
      borderColor: "transparent",
      bgColor: r.tonal ?? o.tonal,
      fontColor: r.onTonal ?? o.onTonal,
      overlay: r.onTonal ?? o.onTonal,
      focusBorderColor: "transparent",
      shadowColor: r.shadow ?? o.shadow
    }
  };
}, Qd = H(Ds)(({
  "data-variant": e,
  size: t = "medium",
  theme: o,
  "data-color": r = "primary"
}) => {
  const i = Hd(o, r), l = [
    "filled",
    "outlined",
    "text",
    "elevated",
    "tonal"
  ].includes(
    e
  ) ? e : "filled", s = i[l], c = {
    small: {},
    medium: {
      fontSize: "14px",
      height: "40px"
    },
    large: {
      fontSize: "20px",
      height: "70px"
    }
  }[t], p = (d) => ({
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
      backgroundColor: d.overlay,
      // 半透明白色遮罩
      borderRadius: 4,
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
      color: q(i.disabledcolor, 0.38)
    },
    ...c
  });
  switch (l) {
    case "filled":
      return {
        ...p(s),
        backgroundColor: s.bgColor,
        color: s.fontColor,
        "&:hover": {
          boxShadow: `0px 1px 3px 1px ${q(s.shadowColor, 0.15)}, 0px 1px 2px 0px ${q(s.shadowColor, 0.3)}`
        },
        "&:active": {
          boxShadow: "none"
        },
        "&.Mui-disabled": {
          backgroundColor: q(i.disabledcolor, 0.12)
        }
      };
    case "outlined":
      return {
        ...p(s),
        border: `1px solid ${s.borderColor}`,
        color: s.fontColor,
        backgroundColor: s.bgColor,
        "&:focus-visible": {
          border: `1px solid ${s.fontColor}`
        },
        "&:active": {
          border: `1px solid ${s.borderColor}`
        }
      };
    case "text":
      return {
        ...p(s),
        backgroundColor: s.bgColor,
        color: s.fontColor,
        "&:focus-visible::before": {
          backgroundColor: q(s.overlay, 0.12)
        }
      };
    case "elevated":
      return {
        ...p(s),
        backgroundColor: s.bgColor,
        color: s.fontColor,
        boxShadow: `0px 1px 3px 1px ${q(s.shadowColor, 0.15)}, 0px 1px 2px 0px ${q(s.shadowColor, 0.3)}`,
        "&:hover": {
          boxShadow: `0px 2px 6px 2px ${q(s.shadowColor, 0.15)}, 0px 1px 2px 0px ${q(s.shadowColor, 0.3)}`
        },
        "&:active, &:focus-visible": {
          boxShadow: `0px 1px 3px 1px ${q(s.shadowColor, 0.15)}, 0px 1px 2px 0px ${q(s.shadowColor, 0.3)}`
        },
        "&.Mui-disabled": {
          backgroundColor: q(i.disabledcolor, 0.12)
        }
      };
    case "tonal":
      return {
        ...p(s),
        backgroundColor: s.bgColor,
        color: s.fontColor,
        "&:hover": {
          boxShadow: `0px 1px 3px 1px ${q(s.shadowColor, 0.15)}, 0px 1px 2px 0px ${q(s.shadowColor, 0.3)}`
        },
        "&:active": {
          boxShadow: "none"
        },
        "&.Mui-disabled": {
          backgroundColor: q(i.disabledcolor, 0.12)
        }
      };
  }
}), ny = ({
  variant: e = "filled",
  color: t = "primary",
  ...o
}) => /* @__PURE__ */ S(
  Qd,
  {
    disableElevation: !0,
    disableRipple: !0,
    ...o,
    "data-color": t,
    "data-variant": e
  }
);
function Kd(e) {
  return ue("MuiFab", e);
}
const fa = le("MuiFab", ["root", "primary", "secondary", "extended", "circular", "focusVisible", "disabled", "colorInherit", "sizeSmall", "sizeMedium", "sizeLarge", "info", "error", "warning", "success"]), Yd = (e) => {
  const {
    color: t,
    variant: o,
    classes: r,
    size: i
  } = e, a = {
    root: ["root", o, `size${V(i)}`, t === "inherit" ? "colorInherit" : t]
  }, l = fe(a, Kd, r);
  return {
    ...r,
    // forward the focused, disabled, etc. classes to the ButtonBase
    ...l
  };
}, Gd = H(lt, {
  name: "MuiFab",
  slot: "Root",
  shouldForwardProp: (e) => it(e) || e === "classes",
  overridesResolver: (e, t) => {
    const {
      ownerState: o
    } = e;
    return [t.root, t[o.variant], t[`size${V(o.size)}`], o.color === "inherit" && t.colorInherit, t[V(o.size)], t[o.color]];
  }
})(de(({
  theme: e
}) => {
  var t, o;
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
    color: e.vars ? e.vars.palette.text.primary : (o = (t = e.palette).getContrastText) == null ? void 0 : o.call(t, e.palette.grey[300]),
    backgroundColor: (e.vars || e).palette.grey[300],
    "&:hover": {
      backgroundColor: (e.vars || e).palette.grey.A100,
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        backgroundColor: (e.vars || e).palette.grey[300]
      },
      textDecoration: "none"
    },
    [`&.${fa.focusVisible}`]: {
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
}), de(({
  theme: e
}) => ({
  variants: [...Object.entries(e.palette).filter(Ie(["dark", "contrastText"])).map(([t]) => ({
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
})), de(({
  theme: e
}) => ({
  [`&.${fa.disabled}`]: {
    color: (e.vars || e).palette.action.disabled,
    boxShadow: (e.vars || e).shadows[0],
    backgroundColor: (e.vars || e).palette.action.disabledBackground
  }
}))), Ns = /* @__PURE__ */ g.forwardRef(function(t, o) {
  const r = ge({
    props: t,
    name: "MuiFab"
  }), {
    children: i,
    className: a,
    color: l = "default",
    component: s = "button",
    disabled: c = !1,
    disableFocusRipple: p = !1,
    focusVisibleClassName: d,
    size: f = "large",
    variant: h = "circular",
    ...b
  } = r, v = {
    ...r,
    color: l,
    component: s,
    disabled: c,
    disableFocusRipple: p,
    size: f,
    variant: h
  }, y = Yd(v);
  return /* @__PURE__ */ S(Gd, {
    className: Z(y.root, a),
    component: s,
    disabled: c,
    focusRipple: !p,
    focusVisibleClassName: Z(y.focusVisible, d),
    ownerState: v,
    ref: o,
    ...b,
    classes: y,
    children: i
  });
});
process.env.NODE_ENV !== "production" && (Ns.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: n.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: n.object,
  /**
   * @ignore
   */
  className: n.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * @default 'default'
   */
  color: n.oneOfType([n.oneOf(["default", "error", "info", "inherit", "primary", "secondary", "success", "warning"]), n.string]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: n.elementType,
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: n.bool,
  /**
   * If `true`, the  keyboard focus ripple is disabled.
   * @default false
   */
  disableFocusRipple: n.bool,
  /**
   * If `true`, the ripple effect is disabled.
   */
  disableRipple: n.bool,
  /**
   * @ignore
   */
  focusVisibleClassName: n.string,
  /**
   * The URL to link to when the button is clicked.
   * If defined, an `a` element will be used as the root node.
   */
  href: n.string,
  /**
   * The size of the component.
   * `small` is equivalent to the dense button styling.
   * @default 'large'
   */
  size: n.oneOfType([n.oneOf(["small", "medium", "large"]), n.string]),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: n.oneOfType([n.arrayOf(n.oneOfType([n.func, n.object, n.bool])), n.func, n.object]),
  /**
   * The variant to use.
   * @default 'circular'
   */
  variant: n.oneOfType([n.oneOf(["circular", "extended"]), n.string])
});
const qd = (e, t = "primary") => {
  var i;
  const o = Pe[t], r = ((i = e == null ? void 0 : e.palette) == null ? void 0 : i[t]) ?? o;
  return {
    bgColor: r.fabBg ?? o.fabBg,
    fontColor: r.fabFont ?? o.fabFont,
    overlay: r.fabFont ?? o.fabFont
  };
}, Xd = H(Ns)(({ "data-color": e, size: t = "medium", variant: o, theme: r }) => {
  const i = qd(r, e), a = {
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
  }[t], l = o === "extended";
  return {
    fontFamily: "'Noto Sans', 'Noto Sans TC', sans-serif;",
    fontWeight: 500,
    textTransform: "none",
    position: "relative",
    backgroundColor: i.bgColor,
    color: i.fontColor,
    borderRadius: l ? "6px" : "50%",
    ...l ? {} : a,
    "&::before": {
      content: '""',
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      backgroundColor: i.overlay,
      borderRadius: l ? "6px" : "50%",
      opacity: 0,
      transition: "opacity 0.2s ease-in-out"
    },
    "&:hover, &:focus-visible, &:active, &:focus": {
      backgroundColor: i.bgColor
    },
    "&:hover::before": {
      opacity: 0.08
    },
    "&:focus-visible::before, &:active::before": {
      opacity: 0.12
    }
  };
}), ry = ({ color: e = "surface", ...t }) => /* @__PURE__ */ S(Xd, { "data-color": e, size: "medium", disableFocusRipple: !0, ...t }), Jd = (e, t = "primary") => {
  var i;
  const o = Pe[t], r = ((i = e == null ? void 0 : e.palette) == null ? void 0 : i[t]) ?? o;
  return {
    disabledcolor: at[0],
    filled: {
      bgColor: r.custMain ?? o.custMain,
      fontColor: r.onMain ?? o.onMain,
      overlay: r.onMain ?? o.onMain,
      borderColor: "transparent"
    },
    standard: {
      bgColor: "transparent",
      fontColor: r.iconFont ?? o.iconFont,
      overlay: r.iconOverlay ?? o.iconOverlay,
      borderColor: "transparent"
    },
    tonal: {
      bgColor: r.tonal ?? o.tonal,
      fontColor: r.iconFont ?? o.iconFont,
      overlay: r.onTonal ?? o.onTonal,
      borderColor: "transparent"
    },
    outlined: {
      bgColor: "transparent",
      fontColor: r.iconFont ?? o.iconFont,
      overlay: r.iconOverlay ?? o.iconOverlay,
      borderColor: r.outline ?? o.outline
    }
  };
}, Zd = (e, t = "primary") => {
  var i;
  const o = Pe[t], r = ((i = e == null ? void 0 : e.palette) == null ? void 0 : i[t]) ?? o;
  return {
    disabledcolor: at[0],
    filled: {
      bgColor: r.surface ?? o.surface,
      fontColor: r.custMain ?? o.custMain,
      overlay: r.custMain ?? o.custMain,
      selectedBgColor: r.custMain ?? o.custMain,
      selectedFontColor: r.onMain ?? o.onMain,
      selectedOverlay: r.onMain ?? o.onMain,
      borderColor: "transparent"
    },
    standard: {
      bgColor: "transparent",
      fontColor: r.custMain ?? o.custMain,
      overlay: r.iconOverlay ?? o.iconOverlay,
      selectedBgColor: "transparent",
      selectedFontColor: r.custMain ?? o.custMain,
      selectedOverlay: r.custMain ?? o.custMain,
      borderColor: "transparent"
    },
    tonal: {
      bgColor: r.surface ?? o.surface,
      fontColor: r.onTonal ?? o.onTonal,
      overlay: r.iconOverlay ?? o.iconOverlay,
      selectedBgColor: r.tonal ?? o.tonal,
      selectedFontColor: r.onTonal ?? o.onTonal,
      selectedOverlay: r.onTonal ?? o.onTonal,
      borderColor: "transparent"
    },
    outlined: {
      bgColor: "transparent",
      fontColor: r.iconFont ?? o.iconFont,
      overlay: r.iconOverlay ?? o.iconOverlay,
      selectedBgColor: r.neutral ?? o.neutral,
      selectedFontColor: r.onMain ?? o.onMain,
      selectedOverlay: r.onMain ?? o.onMain,
      borderColor: r.outline ?? o.outline
    }
  };
}, _d = H(Jt)(({
  "data-variant": e,
  "data-color": t,
  size: o = "small",
  theme: r
}) => {
  const i = Jd(r, t), a = ["filled", "standard", "tonal", "outlined"].includes(e) ? e : "filled", l = i[a], s = {
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
  }[o], c = () => ({
    backgroundColor: l.bgColor,
    color: l.fontColor,
    borderRadius: 6,
    ...s,
    "&::before": {
      content: '""',
      position: "absolute",
      left: 0,
      top: 0,
      width: "100%",
      height: "100%",
      backgroundColor: l.overlay,
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
      backgroundColor: q(i.disabledcolor, 0.08),
      color: q(i.disabledcolor, 0.38)
    },
    "&:hover": {
      backgroundColor: l.bgColor
    },
    "&:hover::before": {
      opacity: 0.08
    },
    "&:active::before, &:focus-visible::before": {
      opacity: 0.12
    }
  });
  switch (a) {
    case "filled":
      return {
        ...c(),
        "&:hover": {
          backgroundColor: l.bgColor
        }
      };
    case "standard":
      return {
        ...c(),
        "&.Mui-disabled": {
          backgroundColor: "transparent"
        }
      };
    case "tonal":
      return {
        ...c(),
        "&:hover": {
          backgroundColor: l.bgColor
        }
      };
    case "outlined":
      return {
        ...c(),
        border: `1px solid ${l.borderColor}`,
        "&:hover": {
          backgroundColor: l.bgColor,
          border: `1px solid ${l.borderColor}`
        },
        "&.Mui-disabled": {
          backgroundColor: "transparent"
        }
      };
  }
}), ef = H(Jt)(({
  "data-variant": e,
  "data-color": t,
  clicked: o,
  size: r = "small",
  theme: i
}) => {
  const a = Zd(i, t), l = ["filled", "standard", "tonal", "outlined"].includes(e) ? e : "filled", s = a[l], c = {
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
  }[r], p = () => ({
    backgroundColor: o ? s.selectedBgColor : s.bgColor,
    color: o ? s.selectedFontColor : s.fontColor,
    borderRadius: 6,
    ...c,
    "&::before": {
      content: '""',
      position: "absolute",
      left: 0,
      top: 0,
      width: "100%",
      height: "100%",
      backgroundColor: o ? s.selectedOverlay : s.overlay,
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
      backgroundColor: q(a.disabledcolor, 0.12),
      color: q(a.disabledcolor, 0.38)
    },
    "&:hover": {
      backgroundColor: o ? s.selectedBgColor : s.bgColor
    },
    "&:hover::before": {
      opacity: 0.08
    },
    "&:active::before, &:focus-visible::before": {
      opacity: 0.12
    }
  });
  switch (l) {
    case "filled":
      return {
        ...p()
      };
    case "standard":
      return {
        ...p(),
        "&.Mui-disabled": {
          backgroundColor: "transparent"
        }
      };
    case "tonal":
      return {
        ...p(),
        "&.Mui-disabled": {
          backgroundColor: q(a.disabledcolor, 0.08),
          color: q(
            o ? s.selectedFontColor : s.fontColor,
            0.38
          )
        }
      };
    case "outlined":
      return {
        ...p(),
        border: o ? "" : `1px solid ${s.borderColor}`,
        "&.Mui-disabled": {
          backgroundColor: o ? q(a.disabledcolor, 0.12) : "transparent"
        },
        "&:hover": {
          border: o ? "" : `1px solid ${s.borderColor}`
        }
      };
  }
}), iy = ({
  variant: e,
  toggleIcon: t,
  children: o,
  color: r = "primary",
  ...i
}) => {
  const [a, l] = Gr(!1), s = () => {
    console.log("toggleClick"), l(!a);
  };
  return t ? /* @__PURE__ */ S(
    ef,
    {
      disableRipple: !0,
      "data-color": r,
      "data-variant": e,
      ...i,
      onClick: s,
      clicked: a,
      children: a ? o : t
    }
  ) : /* @__PURE__ */ S(
    _d,
    {
      disableRipple: !0,
      "data-color": r,
      "data-variant": e,
      ...i,
      children: o
    }
  );
};
function tf(e) {
  return ue("MuiToggleButton", e);
}
const wr = le("MuiToggleButton", ["root", "disabled", "selected", "standard", "primary", "secondary", "sizeSmall", "sizeMedium", "sizeLarge", "fullWidth"]), $s = /* @__PURE__ */ g.createContext({});
process.env.NODE_ENV !== "production" && ($s.displayName = "ToggleButtonGroupContext");
const js = /* @__PURE__ */ g.createContext(void 0);
process.env.NODE_ENV !== "production" && (js.displayName = "ToggleButtonGroupButtonContext");
function of(e, t) {
  return t === void 0 || e === void 0 ? !1 : Array.isArray(t) ? t.includes(e) : e === t;
}
const nf = (e) => {
  const {
    classes: t,
    fullWidth: o,
    selected: r,
    disabled: i,
    size: a,
    color: l
  } = e, s = {
    root: ["root", r && "selected", i && "disabled", o && "fullWidth", `size${V(a)}`, l]
  };
  return fe(s, tf, t);
}, rf = H(lt, {
  name: "MuiToggleButton",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: o
    } = e;
    return [t.root, t[`size${V(o.size)}`]];
  }
})(de(({
  theme: e
}) => ({
  ...e.typography.button,
  borderRadius: (e.vars || e).shape.borderRadius,
  padding: 11,
  border: `1px solid ${(e.vars || e).palette.divider}`,
  color: (e.vars || e).palette.action.active,
  [`&.${wr.disabled}`]: {
    color: (e.vars || e).palette.action.disabled,
    border: `1px solid ${(e.vars || e).palette.action.disabledBackground}`
  },
  "&:hover": {
    textDecoration: "none",
    // Reset on mouse devices
    backgroundColor: e.vars ? `rgba(${e.vars.palette.text.primaryChannel} / ${e.vars.palette.action.hoverOpacity})` : q(e.palette.text.primary, e.palette.action.hoverOpacity),
    "@media (hover: none)": {
      backgroundColor: "transparent"
    }
  },
  variants: [{
    props: {
      color: "standard"
    },
    style: {
      [`&.${wr.selected}`]: {
        color: (e.vars || e).palette.text.primary,
        backgroundColor: e.vars ? `rgba(${e.vars.palette.text.primaryChannel} / ${e.vars.palette.action.selectedOpacity})` : q(e.palette.text.primary, e.palette.action.selectedOpacity),
        "&:hover": {
          backgroundColor: e.vars ? `rgba(${e.vars.palette.text.primaryChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))` : q(e.palette.text.primary, e.palette.action.selectedOpacity + e.palette.action.hoverOpacity),
          // Reset on touch devices, it doesn't add specificity
          "@media (hover: none)": {
            backgroundColor: e.vars ? `rgba(${e.vars.palette.text.primaryChannel} / ${e.vars.palette.action.selectedOpacity})` : q(e.palette.text.primary, e.palette.action.selectedOpacity)
          }
        }
      }
    }
  }, ...Object.entries(e.palette).filter(Ie()).map(([t]) => ({
    props: {
      color: t
    },
    style: {
      [`&.${wr.selected}`]: {
        color: (e.vars || e).palette[t].main,
        backgroundColor: e.vars ? `rgba(${e.vars.palette[t].mainChannel} / ${e.vars.palette.action.selectedOpacity})` : q(e.palette[t].main, e.palette.action.selectedOpacity),
        "&:hover": {
          backgroundColor: e.vars ? `rgba(${e.vars.palette[t].mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))` : q(e.palette[t].main, e.palette.action.selectedOpacity + e.palette.action.hoverOpacity),
          // Reset on touch devices, it doesn't add specificity
          "@media (hover: none)": {
            backgroundColor: e.vars ? `rgba(${e.vars.palette[t].mainChannel} / ${e.vars.palette.action.selectedOpacity})` : q(e.palette[t].main, e.palette.action.selectedOpacity)
          }
        }
      }
    }
  })), {
    props: {
      fullWidth: !0
    },
    style: {
      width: "100%"
    }
  }, {
    props: {
      size: "small"
    },
    style: {
      padding: 7,
      fontSize: e.typography.pxToRem(13)
    }
  }, {
    props: {
      size: "large"
    },
    style: {
      padding: 15,
      fontSize: e.typography.pxToRem(15)
    }
  }]
}))), zs = /* @__PURE__ */ g.forwardRef(function(t, o) {
  const {
    value: r,
    ...i
  } = g.useContext($s), a = g.useContext(js), l = Uo({
    ...i,
    selected: of(t.value, r)
  }, t), s = ge({
    props: l,
    name: "MuiToggleButton"
  }), {
    children: c,
    className: p,
    color: d = "standard",
    disabled: f = !1,
    disableFocusRipple: h = !1,
    fullWidth: b = !1,
    onChange: v,
    onClick: y,
    selected: C,
    size: x = "medium",
    value: E,
    ...w
  } = s, m = {
    ...s,
    color: d,
    disabled: f,
    disableFocusRipple: h,
    fullWidth: b,
    size: x
  }, T = nf(m), A = ($) => {
    y && (y($, E), $.defaultPrevented) || v && v($, E);
  }, P = a || "";
  return /* @__PURE__ */ S(rf, {
    className: Z(i.className, T.root, p, P),
    disabled: f,
    focusRipple: !h,
    ref: o,
    onClick: A,
    onChange: v,
    value: E,
    ownerState: m,
    "aria-pressed": C,
    ...w,
    children: c
  });
});
process.env.NODE_ENV !== "production" && (zs.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: n.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: n.object,
  /**
   * @ignore
   */
  className: n.string,
  /**
   * The color of the button when it is in an active state.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * @default 'standard'
   */
  color: n.oneOfType([n.oneOf(["standard", "primary", "secondary", "error", "info", "success", "warning"]), n.string]),
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: n.bool,
  /**
   * If `true`, the  keyboard focus ripple is disabled.
   * @default false
   */
  disableFocusRipple: n.bool,
  /**
   * If `true`, the ripple effect is disabled.
   *
   * ⚠️ Without a ripple there is no styling for :focus-visible by default. Be sure
   * to highlight the element by applying separate styles with the `.Mui-focusVisible` class.
   * @default false
   */
  disableRipple: n.bool,
  /**
   * If `true`, the button will take up the full width of its container.
   * @default false
   */
  fullWidth: n.bool,
  /**
   * Callback fired when the state changes.
   *
   * @param {React.MouseEvent<HTMLElement>} event The event source of the callback.
   * @param {any} value of the selected button.
   */
  onChange: n.func,
  /**
   * Callback fired when the button is clicked.
   *
   * @param {React.MouseEvent<HTMLElement>} event The event source of the callback.
   * @param {any} value of the selected button.
   */
  onClick: n.func,
  /**
   * If `true`, the button is rendered in an active state.
   */
  selected: n.bool,
  /**
   * The size of the component.
   * The prop defaults to the value inherited from the parent ToggleButtonGroup component.
   * @default 'medium'
   */
  size: n.oneOfType([n.oneOf(["small", "medium", "large"]), n.string]),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: n.oneOfType([n.arrayOf(n.oneOfType([n.func, n.object, n.bool])), n.func, n.object]),
  /**
   * The value to associate with the button when selected in a
   * ToggleButtonGroup.
   */
  value: n.any.isRequired
});
const af = (e, t = "primary") => {
  var i;
  const o = Pe[t], r = ((i = e == null ? void 0 : e.palette) == null ? void 0 : i[t]) ?? o;
  return {
    fontColor: r.onMain ?? o.onMain,
    bgColor: r.toggleButtonBg ?? o.toggleButtonBg
  };
}, sf = H(zs)(({ theme: e, "data-color": t = "primary", size: o = "medium" }) => {
  const r = af(e, t), i = {
    small: {
      height: "44px",
      width: "44px",
      "& svg": {
        fontSize: 32
      }
    },
    medium: {
      height: "54px",
      width: "54px",
      "& svg": {
        fontSize: 38
      }
    },
    large: {
      height: "64px",
      width: "64px",
      "& svg": {
        fontSize: 44
      }
    }
  }[o];
  return {
    color: r.fontColor,
    backgroundColor: q(r.bgColor, 0.75),
    ...i,
    "&:hover": {
      backgroundColor: r.bgColor
    },
    "&.Mui-selected": {
      backgroundColor: r.bgColor,
      color: r.fontColor
    },
    "&.Mui-selected:hover": {
      backgroundColor: r.bgColor
    },
    "&.Mui-disabled": {
      color: r.fontColor,
      backgroundColor: q(r.bgColor, 0.38)
    }
  };
}), ay = ({
  color: e = "primary",
  ...t
}) => /* @__PURE__ */ S(sf, { ...t }), ci = /* @__PURE__ */ g.createContext(void 0);
process.env.NODE_ENV !== "production" && (ci.displayName = "FormControlContext");
function on() {
  return g.useContext(ci);
}
function lf(e) {
  return ue("PrivateSwitchBase", e);
}
le("PrivateSwitchBase", ["root", "checked", "disabled", "input", "edgeStart", "edgeEnd"]);
const cf = (e) => {
  const {
    classes: t,
    checked: o,
    disabled: r,
    edge: i
  } = e, a = {
    root: ["root", o && "checked", r && "disabled", i && `edge${V(i)}`],
    input: ["input"]
  };
  return fe(a, lf, t);
}, pf = H(lt)({
  padding: 9,
  borderRadius: "50%",
  variants: [{
    props: {
      edge: "start",
      size: "small"
    },
    style: {
      marginLeft: -3
    }
  }, {
    props: ({
      edge: e,
      ownerState: t
    }) => e === "start" && t.size !== "small",
    style: {
      marginLeft: -12
    }
  }, {
    props: {
      edge: "end",
      size: "small"
    },
    style: {
      marginRight: -3
    }
  }, {
    props: ({
      edge: e,
      ownerState: t
    }) => e === "end" && t.size !== "small",
    style: {
      marginRight: -12
    }
  }]
}), uf = H("input", {
  shouldForwardProp: it
})({
  cursor: "inherit",
  position: "absolute",
  opacity: 0,
  width: "100%",
  height: "100%",
  top: 0,
  left: 0,
  margin: 0,
  padding: 0,
  zIndex: 1
}), Zn = /* @__PURE__ */ g.forwardRef(function(t, o) {
  const {
    autoFocus: r,
    checked: i,
    checkedIcon: a,
    defaultChecked: l,
    disabled: s,
    disableFocusRipple: c = !1,
    edge: p = !1,
    icon: d,
    id: f,
    inputProps: h,
    inputRef: b,
    name: v,
    onBlur: y,
    onChange: C,
    onFocus: x,
    readOnly: E,
    required: w = !1,
    tabIndex: m,
    type: T,
    value: A,
    slots: P = {},
    slotProps: $ = {},
    ...D
  } = t, [u, R] = ni({
    controlled: i,
    default: !!l,
    name: "SwitchBase",
    state: "checked"
  }), B = on(), O = (K) => {
    x && x(K), B && B.onFocus && B.onFocus(K);
  }, M = (K) => {
    y && y(K), B && B.onBlur && B.onBlur(K);
  }, N = (K) => {
    if (K.nativeEvent.defaultPrevented)
      return;
    const G = K.target.checked;
    R(G), C && C(K, G);
  };
  let F = s;
  B && typeof F > "u" && (F = B.disabled);
  const W = T === "checkbox" || T === "radio", U = {
    ...t,
    checked: u,
    disabled: F,
    disableFocusRipple: c,
    edge: p
  }, j = cf(U), k = {
    slots: P,
    slotProps: {
      input: h,
      ...$
    }
  }, [L, oe] = se("root", {
    ref: o,
    elementType: pf,
    className: j.root,
    shouldForwardComponentProp: !0,
    externalForwardedProps: {
      ...k,
      component: "span",
      ...D
    },
    getSlotProps: (K) => ({
      ...K,
      onFocus: (G) => {
        var z;
        (z = K.onFocus) == null || z.call(K, G), O(G);
      },
      onBlur: (G) => {
        var z;
        (z = K.onBlur) == null || z.call(K, G), M(G);
      }
    }),
    ownerState: U,
    additionalProps: {
      centerRipple: !0,
      focusRipple: !c,
      disabled: F,
      role: void 0,
      tabIndex: null
    }
  }), [ee, Y] = se("input", {
    ref: b,
    elementType: uf,
    className: j.input,
    externalForwardedProps: k,
    getSlotProps: (K) => ({
      onChange: (G) => {
        var z;
        (z = K.onChange) == null || z.call(K, G), N(G);
      }
    }),
    ownerState: U,
    additionalProps: {
      autoFocus: r,
      checked: i,
      defaultChecked: l,
      disabled: F,
      id: W ? f : void 0,
      name: v,
      readOnly: E,
      required: w,
      tabIndex: m,
      type: T,
      ...T === "checkbox" && A === void 0 ? {} : {
        value: A
      }
    }
  });
  return /* @__PURE__ */ ye(L, {
    ...oe,
    children: [/* @__PURE__ */ S(ee, {
      ...Y
    }), u ? a : d]
  });
});
process.env.NODE_ENV !== "production" && (Zn.propTypes = {
  /**
   * If `true`, the `input` element is focused during the first mount.
   */
  autoFocus: n.bool,
  /**
   * If `true`, the component is checked.
   */
  checked: n.bool,
  /**
   * The icon to display when the component is checked.
   */
  checkedIcon: n.node.isRequired,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: n.object,
  /**
   * @ignore
   */
  className: n.string,
  /**
   * @ignore
   */
  defaultChecked: n.bool,
  /**
   * If `true`, the component is disabled.
   */
  disabled: n.bool,
  /**
   * If `true`, the  keyboard focus ripple is disabled.
   * @default false
   */
  disableFocusRipple: n.bool,
  /**
   * If given, uses a negative margin to counteract the padding on one
   * side (this is often helpful for aligning the left or right
   * side of the icon with content above or below, without ruining the border
   * size and shape).
   * @default false
   */
  edge: n.oneOf(["end", "start", !1]),
  /**
   * The icon to display when the component is unchecked.
   */
  icon: n.node.isRequired,
  /**
   * The id of the `input` element.
   */
  id: n.string,
  /**
   * [Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Attributes) applied to the `input` element.
   */
  inputProps: n.object,
  /**
   * Pass a ref to the `input` element.
   */
  inputRef: Tt,
  /*
   * @ignore
   */
  name: n.string,
  /**
   * @ignore
   */
  onBlur: n.func,
  /**
   * Callback fired when the state is changed.
   *
   * @param {object} event The event source of the callback.
   * You can pull out the new checked state by accessing `event.target.checked` (boolean).
   */
  onChange: n.func,
  /**
   * @ignore
   */
  onFocus: n.func,
  /**
   * It prevents the user from changing the value of the field
   * (not from interacting with the field).
   */
  readOnly: n.bool,
  /**
   * If `true`, the `input` element is required.
   */
  required: n.bool,
  /**
   * The props used for each slot inside.
   * @default {}
   */
  slotProps: n.shape({
    input: n.oneOfType([n.func, n.object]),
    root: n.oneOfType([n.func, n.object])
  }),
  /**
   * The components used for each slot inside.
   * @default {}
   */
  slots: n.shape({
    input: n.elementType,
    root: n.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: n.object,
  /**
   * @ignore
   */
  tabIndex: n.oneOfType([n.number, n.string]),
  /**
   * The input component prop `type`.
   */
  type: n.string.isRequired,
  /**
   * The value of the component.
   */
  value: n.any
});
const df = ze(/* @__PURE__ */ S("path", {
  d: "M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"
}), "CheckBoxOutlineBlank"), ff = ze(/* @__PURE__ */ S("path", {
  d: "M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"
}), "CheckBox"), gf = ze(/* @__PURE__ */ S("path", {
  d: "M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"
}), "IndeterminateCheckBox");
function hf(e) {
  return ue("MuiCheckbox", e);
}
const Sr = le("MuiCheckbox", ["root", "checked", "disabled", "indeterminate", "colorPrimary", "colorSecondary", "sizeSmall", "sizeMedium"]), bf = (e) => {
  const {
    classes: t,
    indeterminate: o,
    color: r,
    size: i
  } = e, a = {
    root: ["root", o && "indeterminate", `color${V(r)}`, `size${V(i)}`]
  }, l = fe(a, hf, t);
  return {
    ...t,
    // forward the disabled and checked classes to the SwitchBase
    ...l
  };
}, mf = H(Zn, {
  shouldForwardProp: (e) => it(e) || e === "classes",
  name: "MuiCheckbox",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: o
    } = e;
    return [t.root, o.indeterminate && t.indeterminate, t[`size${V(o.size)}`], o.color !== "default" && t[`color${V(o.color)}`]];
  }
})(de(({
  theme: e
}) => ({
  color: (e.vars || e).palette.text.secondary,
  variants: [{
    props: {
      color: "default",
      disableRipple: !1
    },
    style: {
      "&:hover": {
        backgroundColor: e.vars ? `rgba(${e.vars.palette.action.activeChannel} / ${e.vars.palette.action.hoverOpacity})` : q(e.palette.action.active, e.palette.action.hoverOpacity)
      }
    }
  }, ...Object.entries(e.palette).filter(Ie()).map(([t]) => ({
    props: {
      color: t,
      disableRipple: !1
    },
    style: {
      "&:hover": {
        backgroundColor: e.vars ? `rgba(${e.vars.palette[t].mainChannel} / ${e.vars.palette.action.hoverOpacity})` : q(e.palette[t].main, e.palette.action.hoverOpacity)
      }
    }
  })), ...Object.entries(e.palette).filter(Ie()).map(([t]) => ({
    props: {
      color: t
    },
    style: {
      [`&.${Sr.checked}, &.${Sr.indeterminate}`]: {
        color: (e.vars || e).palette[t].main
      },
      [`&.${Sr.disabled}`]: {
        color: (e.vars || e).palette.action.disabled
      }
    }
  })), {
    // Should be last to override other colors
    props: {
      disableRipple: !1
    },
    style: {
      // Reset on touch devices, it doesn't add specificity
      "&:hover": {
        "@media (hover: none)": {
          backgroundColor: "transparent"
        }
      }
    }
  }]
}))), yf = /* @__PURE__ */ S(ff, {}), vf = /* @__PURE__ */ S(df, {}), Cf = /* @__PURE__ */ S(gf, {}), Ls = /* @__PURE__ */ g.forwardRef(function(t, o) {
  const r = ge({
    props: t,
    name: "MuiCheckbox"
  }), {
    checkedIcon: i = yf,
    color: a = "primary",
    icon: l = vf,
    indeterminate: s = !1,
    indeterminateIcon: c = Cf,
    inputProps: p,
    size: d = "medium",
    disableRipple: f = !1,
    className: h,
    slots: b = {},
    slotProps: v = {},
    ...y
  } = r, C = s ? c : l, x = s ? c : i, E = {
    ...r,
    disableRipple: f,
    color: a,
    indeterminate: s,
    size: d
  }, w = bf(E), m = v.input ?? p, [T, A] = se("root", {
    ref: o,
    elementType: mf,
    className: Z(w.root, h),
    shouldForwardComponentProp: !0,
    externalForwardedProps: {
      slots: b,
      slotProps: v,
      ...y
    },
    ownerState: E,
    additionalProps: {
      type: "checkbox",
      icon: /* @__PURE__ */ g.cloneElement(C, {
        fontSize: C.props.fontSize ?? d
      }),
      checkedIcon: /* @__PURE__ */ g.cloneElement(x, {
        fontSize: x.props.fontSize ?? d
      }),
      disableRipple: f,
      slots: b,
      slotProps: {
        input: Qo(typeof m == "function" ? m(E) : m, {
          "data-indeterminate": s
        })
      }
    }
  });
  return /* @__PURE__ */ S(T, {
    ...A,
    classes: w
  });
});
process.env.NODE_ENV !== "production" && (Ls.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * If `true`, the component is checked.
   */
  checked: n.bool,
  /**
   * The icon to display when the component is checked.
   * @default <CheckBoxIcon />
   */
  checkedIcon: n.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: n.object,
  /**
   * @ignore
   */
  className: n.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * @default 'primary'
   */
  color: n.oneOfType([n.oneOf(["default", "primary", "secondary", "error", "info", "success", "warning"]), n.string]),
  /**
   * The default checked state. Use when the component is not controlled.
   */
  defaultChecked: n.bool,
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: n.bool,
  /**
   * If `true`, the ripple effect is disabled.
   * @default false
   */
  disableRipple: n.bool,
  /**
   * The icon to display when the component is unchecked.
   * @default <CheckBoxOutlineBlankIcon />
   */
  icon: n.node,
  /**
   * The id of the `input` element.
   */
  id: n.string,
  /**
   * If `true`, the component appears indeterminate.
   * This does not set the native input element to indeterminate due
   * to inconsistent behavior across browsers.
   * However, we set a `data-indeterminate` attribute on the `input`.
   * @default false
   */
  indeterminate: n.bool,
  /**
   * The icon to display when the component is indeterminate.
   * @default <IndeterminateCheckBoxIcon />
   */
  indeterminateIcon: n.node,
  /**
   * [Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Attributes) applied to the `input` element.
   * @deprecated Use `slotProps.input` instead. This prop will be removed in v7. See [Migrating from deprecated APIs](/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   */
  inputProps: n.object,
  /**
   * Callback fired when the state is changed.
   *
   * @param {React.ChangeEvent<HTMLInputElement>} event The event source of the callback.
   * You can pull out the new checked state by accessing `event.target.checked` (boolean).
   */
  onChange: n.func,
  /**
   * If `true`, the `input` element is required.
   * @default false
   */
  required: n.bool,
  /**
   * The size of the component.
   * `small` is equivalent to the dense checkbox styling.
   * @default 'medium'
   */
  size: n.oneOfType([n.oneOf(["medium", "small"]), n.string]),
  /**
   * The props used for each slot inside.
   * @default {}
   */
  slotProps: n.shape({
    input: n.oneOfType([n.func, n.object]),
    root: n.oneOfType([n.func, n.object])
  }),
  /**
   * The components used for each slot inside.
   * @default {}
   */
  slots: n.shape({
    input: n.elementType,
    root: n.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: n.oneOfType([n.arrayOf(n.oneOfType([n.func, n.object, n.bool])), n.func, n.object]),
  /**
   * The value of the component. The DOM API casts this to a string.
   * The browser uses "on" as the default value.
   */
  value: n.any
});
const xf = (e, t = "primary") => {
  var i;
  const o = Pe[t], r = ((i = e == null ? void 0 : e.palette) == null ? void 0 : i[t]) ?? o;
  return {
    // 初始狀態（未勾選、未 hover、未 disabled）
    "&": {
      color: (r == null ? void 0 : r.myDefault) ?? o.myDefault
      // 這裡設定初始顏色
    },
    // hover 狀態
    "&:hover": {
      color: r.defaultHover ?? o.custMain,
      backgroundColor: q(r.myDefault ?? o.custMain, 0.08)
    },
    // 勾選與 indeterminate 狀態
    "&.Mui-checked, &.MuiCheckbox-indeterminate": {
      color: r.custMain ?? o.custMain
    },
    // 勾選＋hover 狀態
    "&.Mui-checked:hover": {
      color: r.custMain ?? o.custMain,
      // 維持勾選色
      backgroundColor: q(r.custMain ?? o.custMain, 0.08)
    },
    "&.Mui-disabled": {
      Opacity: q(at[0], 0.38)
    },
    // focus 狀態
    "&.Mui-focusVisible": {
      outline: `2px solid ${r.custMain ?? o.custMain, 0.08}`,
      outlineOffset: 2
    }
  };
}, wf = H(Ls, {
  shouldForwardProp: (e) => e !== "color"
})(
  ({ theme: e, color: t = "primary" }) => xf(e, t)
), Sf = ({
  color: e = "primary",
  label: t,
  ...o
}) => {
  const r = /* @__PURE__ */ S(wf, { color: e, ...o });
  return t ? /* @__PURE__ */ S(Dl, { control: r, label: t || void 0 }) : r;
}, sy = ({
  data: e,
  checkedKeys: t = [],
  onChecked: o
}) => {
  const r = (s, c) => {
    const p = i(s), d = c ? [.../* @__PURE__ */ new Set([...t, ...p])] : t.filter((f) => !p.includes(f));
    o == null || o(d);
  }, i = (s) => {
    var p;
    let c = [s.id];
    return (p = s.children) == null || p.forEach((d) => {
      c = [...c, ...i(d)];
    }), c;
  }, a = (s) => {
    const c = i(s).slice(1), p = c.some((f) => t.includes(f)), d = c.every((f) => t.includes(f));
    return p && !d;
  }, l = (s) => s.map((c) => /* @__PURE__ */ ye("div", { style: { marginLeft: "24px" }, children: [
    /* @__PURE__ */ S(
      Sf,
      {
        label: c.label,
        checked: t.includes(c.id),
        indeterminate: a(c),
        onChange: (p) => r(c, p.target.checked)
      }
    ),
    c.children && l(c.children)
  ] }, c.id));
  return /* @__PURE__ */ S("div", { children: l(e) });
}, Ef = ze(/* @__PURE__ */ S("path", {
  d: "M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"
}), "Cancel");
function Tf(e) {
  return ue("MuiChip", e);
}
const he = le("MuiChip", ["root", "sizeSmall", "sizeMedium", "colorDefault", "colorError", "colorInfo", "colorPrimary", "colorSecondary", "colorSuccess", "colorWarning", "disabled", "clickable", "clickableColorPrimary", "clickableColorSecondary", "deletable", "deletableColorPrimary", "deletableColorSecondary", "outlined", "filled", "outlinedPrimary", "outlinedSecondary", "filledPrimary", "filledSecondary", "avatar", "avatarSmall", "avatarMedium", "avatarColorPrimary", "avatarColorSecondary", "icon", "iconSmall", "iconMedium", "iconColorPrimary", "iconColorSecondary", "label", "labelSmall", "labelMedium", "deleteIcon", "deleteIconSmall", "deleteIconMedium", "deleteIconColorPrimary", "deleteIconColorSecondary", "deleteIconOutlinedColorPrimary", "deleteIconOutlinedColorSecondary", "deleteIconFilledColorPrimary", "deleteIconFilledColorSecondary", "focusVisible"]), Of = (e) => {
  const {
    classes: t,
    disabled: o,
    size: r,
    color: i,
    iconColor: a,
    onDelete: l,
    clickable: s,
    variant: c
  } = e, p = {
    root: ["root", c, o && "disabled", `size${V(r)}`, `color${V(i)}`, s && "clickable", s && `clickableColor${V(i)}`, l && "deletable", l && `deletableColor${V(i)}`, `${c}${V(i)}`],
    label: ["label", `label${V(r)}`],
    avatar: ["avatar", `avatar${V(r)}`, `avatarColor${V(i)}`],
    icon: ["icon", `icon${V(r)}`, `iconColor${V(a)}`],
    deleteIcon: ["deleteIcon", `deleteIcon${V(r)}`, `deleteIconColor${V(i)}`, `deleteIcon${V(c)}Color${V(i)}`]
  };
  return fe(p, Tf, t);
}, Af = H("div", {
  name: "MuiChip",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: o
    } = e, {
      color: r,
      iconColor: i,
      clickable: a,
      onDelete: l,
      size: s,
      variant: c
    } = o;
    return [{
      [`& .${he.avatar}`]: t.avatar
    }, {
      [`& .${he.avatar}`]: t[`avatar${V(s)}`]
    }, {
      [`& .${he.avatar}`]: t[`avatarColor${V(r)}`]
    }, {
      [`& .${he.icon}`]: t.icon
    }, {
      [`& .${he.icon}`]: t[`icon${V(s)}`]
    }, {
      [`& .${he.icon}`]: t[`iconColor${V(i)}`]
    }, {
      [`& .${he.deleteIcon}`]: t.deleteIcon
    }, {
      [`& .${he.deleteIcon}`]: t[`deleteIcon${V(s)}`]
    }, {
      [`& .${he.deleteIcon}`]: t[`deleteIconColor${V(r)}`]
    }, {
      [`& .${he.deleteIcon}`]: t[`deleteIcon${V(c)}Color${V(r)}`]
    }, t.root, t[`size${V(s)}`], t[`color${V(r)}`], a && t.clickable, a && r !== "default" && t[`clickableColor${V(r)})`], l && t.deletable, l && r !== "default" && t[`deletableColor${V(r)}`], t[c], t[`${c}${V(r)}`]];
  }
})(de(({
  theme: e
}) => {
  const t = e.palette.mode === "light" ? e.palette.grey[700] : e.palette.grey[300];
  return {
    maxWidth: "100%",
    fontFamily: e.typography.fontFamily,
    fontSize: e.typography.pxToRem(13),
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    height: 32,
    color: (e.vars || e).palette.text.primary,
    backgroundColor: (e.vars || e).palette.action.selected,
    borderRadius: 32 / 2,
    whiteSpace: "nowrap",
    transition: e.transitions.create(["background-color", "box-shadow"]),
    // reset cursor explicitly in case ButtonBase is used
    cursor: "unset",
    // We disable the focus ring for mouse, touch and keyboard users.
    outline: 0,
    textDecoration: "none",
    border: 0,
    // Remove `button` border
    padding: 0,
    // Remove `button` padding
    verticalAlign: "middle",
    boxSizing: "border-box",
    [`&.${he.disabled}`]: {
      opacity: (e.vars || e).palette.action.disabledOpacity,
      pointerEvents: "none"
    },
    [`& .${he.avatar}`]: {
      marginLeft: 5,
      marginRight: -6,
      width: 24,
      height: 24,
      color: e.vars ? e.vars.palette.Chip.defaultAvatarColor : t,
      fontSize: e.typography.pxToRem(12)
    },
    [`& .${he.avatarColorPrimary}`]: {
      color: (e.vars || e).palette.primary.contrastText,
      backgroundColor: (e.vars || e).palette.primary.dark
    },
    [`& .${he.avatarColorSecondary}`]: {
      color: (e.vars || e).palette.secondary.contrastText,
      backgroundColor: (e.vars || e).palette.secondary.dark
    },
    [`& .${he.avatarSmall}`]: {
      marginLeft: 4,
      marginRight: -4,
      width: 18,
      height: 18,
      fontSize: e.typography.pxToRem(10)
    },
    [`& .${he.icon}`]: {
      marginLeft: 5,
      marginRight: -6
    },
    [`& .${he.deleteIcon}`]: {
      WebkitTapHighlightColor: "transparent",
      color: e.vars ? `rgba(${e.vars.palette.text.primaryChannel} / 0.26)` : q(e.palette.text.primary, 0.26),
      fontSize: 22,
      cursor: "pointer",
      margin: "0 5px 0 -6px",
      "&:hover": {
        color: e.vars ? `rgba(${e.vars.palette.text.primaryChannel} / 0.4)` : q(e.palette.text.primary, 0.4)
      }
    },
    variants: [{
      props: {
        size: "small"
      },
      style: {
        height: 24,
        [`& .${he.icon}`]: {
          fontSize: 18,
          marginLeft: 4,
          marginRight: -4
        },
        [`& .${he.deleteIcon}`]: {
          fontSize: 16,
          marginRight: 4,
          marginLeft: -4
        }
      }
    }, ...Object.entries(e.palette).filter(Ie(["contrastText"])).map(([o]) => ({
      props: {
        color: o
      },
      style: {
        backgroundColor: (e.vars || e).palette[o].main,
        color: (e.vars || e).palette[o].contrastText,
        [`& .${he.deleteIcon}`]: {
          color: e.vars ? `rgba(${e.vars.palette[o].contrastTextChannel} / 0.7)` : q(e.palette[o].contrastText, 0.7),
          "&:hover, &:active": {
            color: (e.vars || e).palette[o].contrastText
          }
        }
      }
    })), {
      props: (o) => o.iconColor === o.color,
      style: {
        [`& .${he.icon}`]: {
          color: e.vars ? e.vars.palette.Chip.defaultIconColor : t
        }
      }
    }, {
      props: (o) => o.iconColor === o.color && o.color !== "default",
      style: {
        [`& .${he.icon}`]: {
          color: "inherit"
        }
      }
    }, {
      props: {
        onDelete: !0
      },
      style: {
        [`&.${he.focusVisible}`]: {
          backgroundColor: e.vars ? `rgba(${e.vars.palette.action.selectedChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))` : q(e.palette.action.selected, e.palette.action.selectedOpacity + e.palette.action.focusOpacity)
        }
      }
    }, ...Object.entries(e.palette).filter(Ie(["dark"])).map(([o]) => ({
      props: {
        color: o,
        onDelete: !0
      },
      style: {
        [`&.${he.focusVisible}`]: {
          background: (e.vars || e).palette[o].dark
        }
      }
    })), {
      props: {
        clickable: !0
      },
      style: {
        userSelect: "none",
        WebkitTapHighlightColor: "transparent",
        cursor: "pointer",
        "&:hover": {
          backgroundColor: e.vars ? `rgba(${e.vars.palette.action.selectedChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))` : q(e.palette.action.selected, e.palette.action.selectedOpacity + e.palette.action.hoverOpacity)
        },
        [`&.${he.focusVisible}`]: {
          backgroundColor: e.vars ? `rgba(${e.vars.palette.action.selectedChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))` : q(e.palette.action.selected, e.palette.action.selectedOpacity + e.palette.action.focusOpacity)
        },
        "&:active": {
          boxShadow: (e.vars || e).shadows[1]
        }
      }
    }, ...Object.entries(e.palette).filter(Ie(["dark"])).map(([o]) => ({
      props: {
        color: o,
        clickable: !0
      },
      style: {
        [`&:hover, &.${he.focusVisible}`]: {
          backgroundColor: (e.vars || e).palette[o].dark
        }
      }
    })), {
      props: {
        variant: "outlined"
      },
      style: {
        backgroundColor: "transparent",
        border: e.vars ? `1px solid ${e.vars.palette.Chip.defaultBorder}` : `1px solid ${e.palette.mode === "light" ? e.palette.grey[400] : e.palette.grey[700]}`,
        [`&.${he.clickable}:hover`]: {
          backgroundColor: (e.vars || e).palette.action.hover
        },
        [`&.${he.focusVisible}`]: {
          backgroundColor: (e.vars || e).palette.action.focus
        },
        [`& .${he.avatar}`]: {
          marginLeft: 4
        },
        [`& .${he.avatarSmall}`]: {
          marginLeft: 2
        },
        [`& .${he.icon}`]: {
          marginLeft: 4
        },
        [`& .${he.iconSmall}`]: {
          marginLeft: 2
        },
        [`& .${he.deleteIcon}`]: {
          marginRight: 5
        },
        [`& .${he.deleteIconSmall}`]: {
          marginRight: 3
        }
      }
    }, ...Object.entries(e.palette).filter(Ie()).map(([o]) => ({
      props: {
        variant: "outlined",
        color: o
      },
      style: {
        color: (e.vars || e).palette[o].main,
        border: `1px solid ${e.vars ? `rgba(${e.vars.palette[o].mainChannel} / 0.7)` : q(e.palette[o].main, 0.7)}`,
        [`&.${he.clickable}:hover`]: {
          backgroundColor: e.vars ? `rgba(${e.vars.palette[o].mainChannel} / ${e.vars.palette.action.hoverOpacity})` : q(e.palette[o].main, e.palette.action.hoverOpacity)
        },
        [`&.${he.focusVisible}`]: {
          backgroundColor: e.vars ? `rgba(${e.vars.palette[o].mainChannel} / ${e.vars.palette.action.focusOpacity})` : q(e.palette[o].main, e.palette.action.focusOpacity)
        },
        [`& .${he.deleteIcon}`]: {
          color: e.vars ? `rgba(${e.vars.palette[o].mainChannel} / 0.7)` : q(e.palette[o].main, 0.7),
          "&:hover, &:active": {
            color: (e.vars || e).palette[o].main
          }
        }
      }
    }))]
  };
})), kf = H("span", {
  name: "MuiChip",
  slot: "Label",
  overridesResolver: (e, t) => {
    const {
      ownerState: o
    } = e, {
      size: r
    } = o;
    return [t.label, t[`label${V(r)}`]];
  }
})({
  overflow: "hidden",
  textOverflow: "ellipsis",
  paddingLeft: 12,
  paddingRight: 12,
  whiteSpace: "nowrap",
  variants: [{
    props: {
      variant: "outlined"
    },
    style: {
      paddingLeft: 11,
      paddingRight: 11
    }
  }, {
    props: {
      size: "small"
    },
    style: {
      paddingLeft: 8,
      paddingRight: 8
    }
  }, {
    props: {
      size: "small",
      variant: "outlined"
    },
    style: {
      paddingLeft: 7,
      paddingRight: 7
    }
  }]
});
function ga(e) {
  return e.key === "Backspace" || e.key === "Delete";
}
const Vs = /* @__PURE__ */ g.forwardRef(function(t, o) {
  const r = ge({
    props: t,
    name: "MuiChip"
  }), {
    avatar: i,
    className: a,
    clickable: l,
    color: s = "default",
    component: c,
    deleteIcon: p,
    disabled: d = !1,
    icon: f,
    label: h,
    onClick: b,
    onDelete: v,
    onKeyDown: y,
    onKeyUp: C,
    size: x = "medium",
    variant: E = "filled",
    tabIndex: w,
    skipFocusWhenDisabled: m = !1,
    // TODO v6: Rename to `focusableWhenDisabled`.
    ...T
  } = r, A = g.useRef(null), P = Ne(A, o), $ = (j) => {
    j.stopPropagation(), v && v(j);
  }, D = (j) => {
    j.currentTarget === j.target && ga(j) && j.preventDefault(), y && y(j);
  }, u = (j) => {
    j.currentTarget === j.target && v && ga(j) && v(j), C && C(j);
  }, R = l !== !1 && b ? !0 : l, B = R || v ? lt : c || "div", O = {
    ...r,
    component: B,
    disabled: d,
    size: x,
    color: s,
    iconColor: /* @__PURE__ */ g.isValidElement(f) && f.props.color || s,
    onDelete: !!v,
    clickable: R,
    variant: E
  }, M = Of(O), N = B === lt ? {
    component: c || "div",
    focusVisibleClassName: M.focusVisible,
    ...v && {
      disableRipple: !0
    }
  } : {};
  let F = null;
  v && (F = p && /* @__PURE__ */ g.isValidElement(p) ? /* @__PURE__ */ g.cloneElement(p, {
    className: Z(p.props.className, M.deleteIcon),
    onClick: $
  }) : /* @__PURE__ */ S(Ef, {
    className: Z(M.deleteIcon),
    onClick: $
  }));
  let W = null;
  i && /* @__PURE__ */ g.isValidElement(i) && (W = /* @__PURE__ */ g.cloneElement(i, {
    className: Z(M.avatar, i.props.className)
  }));
  let U = null;
  return f && /* @__PURE__ */ g.isValidElement(f) && (U = /* @__PURE__ */ g.cloneElement(f, {
    className: Z(M.icon, f.props.className)
  })), process.env.NODE_ENV !== "production" && W && U && console.error("MUI: The Chip component can not handle the avatar and the icon prop at the same time. Pick one."), /* @__PURE__ */ ye(Af, {
    as: B,
    className: Z(M.root, a),
    disabled: R && d ? !0 : void 0,
    onClick: b,
    onKeyDown: D,
    onKeyUp: u,
    ref: P,
    tabIndex: m && d ? -1 : w,
    ownerState: O,
    ...N,
    ...T,
    children: [W || U, /* @__PURE__ */ S(kf, {
      className: Z(M.label),
      ownerState: O,
      children: h
    }), F]
  });
});
process.env.NODE_ENV !== "production" && (Vs.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The Avatar element to display.
   */
  avatar: n.element,
  /**
   * This prop isn't supported.
   * Use the `component` prop if you need to change the children structure.
   */
  children: cs,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: n.object,
  /**
   * @ignore
   */
  className: n.string,
  /**
   * If `true`, the chip will appear clickable, and will raise when pressed,
   * even if the onClick prop is not defined.
   * If `false`, the chip will not appear clickable, even if onClick prop is defined.
   * This can be used, for example,
   * along with the component prop to indicate an anchor Chip is clickable.
   * Note: this controls the UI and does not affect the onClick event.
   */
  clickable: n.bool,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * @default 'default'
   */
  color: n.oneOfType([n.oneOf(["default", "primary", "secondary", "error", "info", "success", "warning"]), n.string]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: n.elementType,
  /**
   * Override the default delete icon element. Shown only if `onDelete` is set.
   */
  deleteIcon: n.element,
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: n.bool,
  /**
   * Icon element.
   */
  icon: n.element,
  /**
   * The content of the component.
   */
  label: n.node,
  /**
   * @ignore
   */
  onClick: n.func,
  /**
   * Callback fired when the delete icon is clicked.
   * If set, the delete icon will be shown.
   */
  onDelete: n.func,
  /**
   * @ignore
   */
  onKeyDown: n.func,
  /**
   * @ignore
   */
  onKeyUp: n.func,
  /**
   * The size of the component.
   * @default 'medium'
   */
  size: n.oneOfType([n.oneOf(["medium", "small"]), n.string]),
  /**
   * If `true`, allows the disabled chip to escape focus.
   * If `false`, allows the disabled chip to receive focus.
   * @default false
   */
  skipFocusWhenDisabled: n.bool,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: n.oneOfType([n.arrayOf(n.oneOfType([n.func, n.object, n.bool])), n.func, n.object]),
  /**
   * @ignore
   */
  tabIndex: n.number,
  /**
   * The variant to use.
   * @default 'filled'
   */
  variant: n.oneOfType([n.oneOf(["filled", "outlined"]), n.string])
});
const Rf = ze(/* @__PURE__ */ S("path", {
  d: "M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
}), "Clear"), Ff = (e, t = "primary") => {
  var i;
  const o = Pe[t], r = ((i = e == null ? void 0 : e.palette) == null ? void 0 : i[t]) ?? o;
  return {
    bgColor: r.custMain ?? o.custMain,
    fontColor: r.iconFont ?? o.iconFont,
    overlay: r.iconOverlay ?? o.iconOverlay,
    selectedbgColor: r.tonal ?? o.tonal,
    selectedFontColor: r.onTonal ?? o.onTonal,
    selectedOverlay: r.onTonal ?? o.onTonal,
    iconColor: r.custMain ?? o.custMain
  };
}, Pf = H(Vs, {
  shouldForwardProp: (e) => e !== "selected"
  // selected 不往下傳，其他都照傳
})(({ theme: e, selected: t = !1, avatar: o }) => {
  const r = !!o, i = Ff(e);
  return {
    borderRadius: r ? 30 : 8,
    color: t ? i.selectedFontColor : i.fontColor,
    backgroundColor: t ? i.selectedbgColor : "transparent",
    position: "relative",
    border: t ? "0px" : "",
    ".MuiChip-icon": {
      color: i.iconColor
    },
    "&.MuiChip-clickable:hover, &.MuiChip-clickable:focus": {
      backgroundColor: t ? i.selectedbgColor : "transparent"
    },
    "&::before": {
      pointerEvents: "none",
      content: '""',
      borderRadius: r ? 30 : t ? 8 : 7,
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      backgroundColor: t ? i.selectedOverlay : i.overlay,
      opacity: 0,
      zIndex: 1
    },
    "&:hover::before": {
      opacity: 0.08
    },
    "&.Mui-focusVisible::before": {
      opacity: 0.12
    },
    "&.MuiChip-clickable:active": {
      boxShadow: "0px 1px 3px 0px #0000004D, 0px 4px 8px 3px #00000026"
      // ⬅ 你可以自訂這邊的陰影效果
    },
    "& .MuiTouchRipple-root": {
      display: "none"
    }
  };
}), ly = ({
  selected: e = !1,
  avatar: t,
  deleteIcon: o = /* @__PURE__ */ S(Rf, {}),
  ...r
}) => /* @__PURE__ */ S(
  Pf,
  {
    ...r,
    selected: e,
    avatar: t,
    deleteIcon: o,
    variant: "outlined"
  }
), Mn = /* @__PURE__ */ g.createContext({});
process.env.NODE_ENV !== "production" && (Mn.displayName = "ListContext");
function Bf(e) {
  return ue("MuiList", e);
}
le("MuiList", ["root", "padding", "dense", "subheader"]);
const Mf = (e) => {
  const {
    classes: t,
    disablePadding: o,
    dense: r,
    subheader: i
  } = e;
  return fe({
    root: ["root", !o && "padding", r && "dense", i && "subheader"]
  }, Bf, t);
}, If = H("ul", {
  name: "MuiList",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: o
    } = e;
    return [t.root, !o.disablePadding && t.padding, o.dense && t.dense, o.subheader && t.subheader];
  }
})({
  listStyle: "none",
  margin: 0,
  padding: 0,
  position: "relative",
  variants: [{
    props: ({
      ownerState: e
    }) => !e.disablePadding,
    style: {
      paddingTop: 8,
      paddingBottom: 8
    }
  }, {
    props: ({
      ownerState: e
    }) => e.subheader,
    style: {
      paddingTop: 0
    }
  }]
}), Ws = /* @__PURE__ */ g.forwardRef(function(t, o) {
  const r = ge({
    props: t,
    name: "MuiList"
  }), {
    children: i,
    className: a,
    component: l = "ul",
    dense: s = !1,
    disablePadding: c = !1,
    subheader: p,
    ...d
  } = r, f = g.useMemo(() => ({
    dense: s
  }), [s]), h = {
    ...r,
    component: l,
    dense: s,
    disablePadding: c
  }, b = Mf(h);
  return /* @__PURE__ */ S(Mn.Provider, {
    value: f,
    children: /* @__PURE__ */ ye(If, {
      as: l,
      className: Z(b.root, a),
      ref: o,
      ownerState: h,
      ...d,
      children: [p, i]
    })
  });
});
process.env.NODE_ENV !== "production" && (Ws.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: n.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: n.object,
  /**
   * @ignore
   */
  className: n.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: n.elementType,
  /**
   * If `true`, compact vertical padding designed for keyboard and mouse input is used for
   * the list and list items.
   * The prop is available to descendant components as the `dense` context.
   * @default false
   */
  dense: n.bool,
  /**
   * If `true`, vertical padding is removed from the list.
   * @default false
   */
  disablePadding: n.bool,
  /**
   * The content of the subheader, normally `ListSubheader`.
   */
  subheader: n.node,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: n.oneOfType([n.arrayOf(n.oneOfType([n.func, n.object, n.bool])), n.func, n.object])
});
function Er(e, t, o) {
  return e === t ? e.firstChild : t && t.nextElementSibling ? t.nextElementSibling : o ? null : e.firstChild;
}
function ha(e, t, o) {
  return e === t ? o ? e.firstChild : e.lastChild : t && t.previousElementSibling ? t.previousElementSibling : o ? null : e.lastChild;
}
function Us(e, t) {
  if (t === void 0)
    return !0;
  let o = e.innerText;
  return o === void 0 && (o = e.textContent), o = o.trim().toLowerCase(), o.length === 0 ? !1 : t.repeating ? o[0] === t.keys[0] : o.startsWith(t.keys.join(""));
}
function ko(e, t, o, r, i, a) {
  let l = !1, s = i(e, t, t ? o : !1);
  for (; s; ) {
    if (s === e.firstChild) {
      if (l)
        return !1;
      l = !0;
    }
    const c = r ? !1 : s.disabled || s.getAttribute("aria-disabled") === "true";
    if (!s.hasAttribute("tabindex") || !Us(s, a) || c)
      s = i(e, s, o);
    else
      return s.focus(), !0;
  }
  return !1;
}
const Hs = /* @__PURE__ */ g.forwardRef(function(t, o) {
  const {
    // private
    // eslint-disable-next-line react/prop-types
    actions: r,
    autoFocus: i = !1,
    autoFocusItem: a = !1,
    children: l,
    className: s,
    disabledItemsFocusable: c = !1,
    disableListWrap: p = !1,
    onKeyDown: d,
    variant: f = "selectedMenu",
    ...h
  } = t, b = g.useRef(null), v = g.useRef({
    keys: [],
    repeating: !0,
    previousKeyMatched: !0,
    lastTime: null
  });
  gt(() => {
    i && b.current.focus();
  }, [i]), g.useImperativeHandle(r, () => ({
    adjustStyleForScrollbar: (w, {
      direction: m
    }) => {
      const T = !b.current.style.width;
      if (w.clientHeight < b.current.clientHeight && T) {
        const A = `${us(We(w))}px`;
        b.current.style[m === "rtl" ? "paddingLeft" : "paddingRight"] = A, b.current.style.width = `calc(100% + ${A})`;
      }
      return b.current;
    }
  }), []);
  const y = (w) => {
    const m = b.current, T = w.key;
    if (w.ctrlKey || w.metaKey || w.altKey) {
      d && d(w);
      return;
    }
    const P = $e(m).activeElement;
    if (T === "ArrowDown")
      w.preventDefault(), ko(m, P, p, c, Er);
    else if (T === "ArrowUp")
      w.preventDefault(), ko(m, P, p, c, ha);
    else if (T === "Home")
      w.preventDefault(), ko(m, null, p, c, Er);
    else if (T === "End")
      w.preventDefault(), ko(m, null, p, c, ha);
    else if (T.length === 1) {
      const $ = v.current, D = T.toLowerCase(), u = performance.now();
      $.keys.length > 0 && (u - $.lastTime > 500 ? ($.keys = [], $.repeating = !0, $.previousKeyMatched = !0) : $.repeating && D !== $.keys[0] && ($.repeating = !1)), $.lastTime = u, $.keys.push(D);
      const R = P && !$.repeating && Us(P, $);
      $.previousKeyMatched && (R || ko(m, P, !1, c, Er, $)) ? w.preventDefault() : $.previousKeyMatched = !1;
    }
    d && d(w);
  }, C = Ne(b, o);
  let x = -1;
  g.Children.forEach(l, (w, m) => {
    if (!/* @__PURE__ */ g.isValidElement(w)) {
      x === m && (x += 1, x >= l.length && (x = -1));
      return;
    }
    process.env.NODE_ENV !== "production" && qr(w) && console.error(["MUI: The Menu component doesn't accept a Fragment as a child.", "Consider providing an array instead."].join(`
`)), w.props.disabled || (f === "selectedMenu" && w.props.selected || x === -1) && (x = m), x === m && (w.props.disabled || w.props.muiSkipListHighlight || w.type.muiSkipListHighlight) && (x += 1, x >= l.length && (x = -1));
  });
  const E = g.Children.map(l, (w, m) => {
    if (m === x) {
      const T = {};
      return a && (T.autoFocus = !0), w.props.tabIndex === void 0 && f === "selectedMenu" && (T.tabIndex = 0), /* @__PURE__ */ g.cloneElement(w, T);
    }
    return w;
  });
  return /* @__PURE__ */ S(Ws, {
    role: "menu",
    ref: C,
    className: s,
    onKeyDown: y,
    tabIndex: i ? 0 : -1,
    ...h,
    children: E
  });
});
process.env.NODE_ENV !== "production" && (Hs.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * If `true`, will focus the `[role="menu"]` container and move into tab order.
   * @default false
   */
  autoFocus: n.bool,
  /**
   * If `true`, will focus the first menuitem if `variant="menu"` or selected item
   * if `variant="selectedMenu"`.
   * @default false
   */
  autoFocusItem: n.bool,
  /**
   * MenuList contents, normally `MenuItem`s.
   */
  children: n.node,
  /**
   * @ignore
   */
  className: n.string,
  /**
   * If `true`, will allow focus on disabled items.
   * @default false
   */
  disabledItemsFocusable: n.bool,
  /**
   * If `true`, the menu items will not wrap focus.
   * @default false
   */
  disableListWrap: n.bool,
  /**
   * @ignore
   */
  onKeyDown: n.func,
  /**
   * The variant to use. Use `menu` to prevent selected items from impacting the initial focus
   * and the vertical alignment relative to the anchor element.
   * @default 'selectedMenu'
   */
  variant: n.oneOf(["menu", "selectedMenu"])
});
function Df(e) {
  return typeof e == "string";
}
const pi = (e) => e.scrollTop;
function Yt(e, t) {
  const {
    timeout: o,
    easing: r,
    style: i = {}
  } = e;
  return {
    duration: i.transitionDuration ?? (typeof o == "number" ? o : o[t.mode] || 0),
    easing: i.transitionTimingFunction ?? (typeof r == "object" ? r[t.mode] : r),
    delay: i.transitionDelay
  };
}
function Qr(e) {
  return `scale(${e}, ${e ** 2})`;
}
const Nf = {
  entering: {
    opacity: 1,
    transform: Qr(1)
  },
  entered: {
    opacity: 1,
    transform: "none"
  }
}, Tr = typeof navigator < "u" && /^((?!chrome|android).)*(safari|mobile)/i.test(navigator.userAgent) && /(os |version\/)15(.|_)4/i.test(navigator.userAgent), Ko = /* @__PURE__ */ g.forwardRef(function(t, o) {
  const {
    addEndListener: r,
    appear: i = !0,
    children: a,
    easing: l,
    in: s,
    onEnter: c,
    onEntered: p,
    onEntering: d,
    onExit: f,
    onExited: h,
    onExiting: b,
    style: v,
    timeout: y = "auto",
    // eslint-disable-next-line react/prop-types
    TransitionComponent: C = ct,
    ...x
  } = t, E = co(), w = g.useRef(), m = rt(), T = g.useRef(null), A = Ne(T, vo(a), o), P = (N) => (F) => {
    if (N) {
      const W = T.current;
      F === void 0 ? N(W) : N(W, F);
    }
  }, $ = P(d), D = P((N, F) => {
    pi(N);
    const {
      duration: W,
      delay: U,
      easing: j
    } = Yt({
      style: v,
      timeout: y,
      easing: l
    }, {
      mode: "enter"
    });
    let k;
    y === "auto" ? (k = m.transitions.getAutoHeightDuration(N.clientHeight), w.current = k) : k = W, N.style.transition = [m.transitions.create("opacity", {
      duration: k,
      delay: U
    }), m.transitions.create("transform", {
      duration: Tr ? k : k * 0.666,
      delay: U,
      easing: j
    })].join(","), c && c(N, F);
  }), u = P(p), R = P(b), B = P((N) => {
    const {
      duration: F,
      delay: W,
      easing: U
    } = Yt({
      style: v,
      timeout: y,
      easing: l
    }, {
      mode: "exit"
    });
    let j;
    y === "auto" ? (j = m.transitions.getAutoHeightDuration(N.clientHeight), w.current = j) : j = F, N.style.transition = [m.transitions.create("opacity", {
      duration: j,
      delay: W
    }), m.transitions.create("transform", {
      duration: Tr ? j : j * 0.666,
      delay: Tr ? W : W || j * 0.333,
      easing: U
    })].join(","), N.style.opacity = 0, N.style.transform = Qr(0.75), f && f(N);
  }), O = P(h);
  return /* @__PURE__ */ S(C, {
    appear: i,
    in: s,
    nodeRef: T,
    onEnter: D,
    onEntered: u,
    onEntering: $,
    onExit: B,
    onExited: O,
    onExiting: R,
    addEndListener: (N) => {
      y === "auto" && E.start(w.current || 0, N), r && r(T.current, N);
    },
    timeout: y === "auto" ? null : y,
    ...x,
    children: (N, {
      ownerState: F,
      ...W
    }) => /* @__PURE__ */ g.cloneElement(a, {
      style: {
        opacity: 0,
        transform: Qr(0.75),
        visibility: N === "exited" && !s ? "hidden" : void 0,
        ...Nf[N],
        ...v,
        ...a.props.style
      },
      ref: A,
      ...W
    })
  });
});
process.env.NODE_ENV !== "production" && (Ko.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Add a custom transition end trigger. Called with the transitioning DOM
   * node and a done callback. Allows for more fine grained transition end
   * logic. Note: Timeouts are still used as a fallback if provided.
   */
  addEndListener: n.func,
  /**
   * Perform the enter transition when it first mounts if `in` is also `true`.
   * Set this to `false` to disable this behavior.
   * @default true
   */
  appear: n.bool,
  /**
   * A single child content element.
   */
  children: Xt.isRequired,
  /**
   * The transition timing function.
   * You may specify a single easing or a object containing enter and exit values.
   */
  easing: n.oneOfType([n.shape({
    enter: n.string,
    exit: n.string
  }), n.string]),
  /**
   * If `true`, the component will transition in.
   */
  in: n.bool,
  /**
   * @ignore
   */
  onEnter: n.func,
  /**
   * @ignore
   */
  onEntered: n.func,
  /**
   * @ignore
   */
  onEntering: n.func,
  /**
   * @ignore
   */
  onExit: n.func,
  /**
   * @ignore
   */
  onExited: n.func,
  /**
   * @ignore
   */
  onExiting: n.func,
  /**
   * @ignore
   */
  style: n.object,
  /**
   * The duration for the transition, in milliseconds.
   * You may specify a single timeout for all transitions, or individually with an object.
   *
   * Set to 'auto' to automatically calculate transition time based on height.
   * @default 'auto'
   */
  timeout: n.oneOfType([n.oneOf(["auto"]), n.number, n.shape({
    appear: n.number,
    enter: n.number,
    exit: n.number
  })])
});
Ko && (Ko.muiSupportAuto = !0);
function $f(e) {
  const t = $e(e);
  return t.body === e ? We(e).innerWidth > t.documentElement.clientWidth : e.scrollHeight > e.clientHeight;
}
function Lo(e, t) {
  t ? e.setAttribute("aria-hidden", "true") : e.removeAttribute("aria-hidden");
}
function ba(e) {
  return parseInt(We(e).getComputedStyle(e).paddingRight, 10) || 0;
}
function jf(e) {
  const o = ["TEMPLATE", "SCRIPT", "STYLE", "LINK", "MAP", "META", "NOSCRIPT", "PICTURE", "COL", "COLGROUP", "PARAM", "SLOT", "SOURCE", "TRACK"].includes(e.tagName), r = e.tagName === "INPUT" && e.getAttribute("type") === "hidden";
  return o || r;
}
function ma(e, t, o, r, i) {
  const a = [t, o, ...r];
  [].forEach.call(e.children, (l) => {
    const s = !a.includes(l), c = !jf(l);
    s && c && Lo(l, i);
  });
}
function Or(e, t) {
  let o = -1;
  return e.some((r, i) => t(r) ? (o = i, !0) : !1), o;
}
function zf(e, t) {
  const o = [], r = e.container;
  if (!t.disableScrollLock) {
    if ($f(r)) {
      const l = us(We(r));
      o.push({
        value: r.style.paddingRight,
        property: "padding-right",
        el: r
      }), r.style.paddingRight = `${ba(r) + l}px`;
      const s = $e(r).querySelectorAll(".mui-fixed");
      [].forEach.call(s, (c) => {
        o.push({
          value: c.style.paddingRight,
          property: "padding-right",
          el: c
        }), c.style.paddingRight = `${ba(c) + l}px`;
      });
    }
    let a;
    if (r.parentNode instanceof DocumentFragment)
      a = $e(r).body;
    else {
      const l = r.parentElement, s = We(r);
      a = (l == null ? void 0 : l.nodeName) === "HTML" && s.getComputedStyle(l).overflowY === "scroll" ? l : r;
    }
    o.push({
      value: a.style.overflow,
      property: "overflow",
      el: a
    }, {
      value: a.style.overflowX,
      property: "overflow-x",
      el: a
    }, {
      value: a.style.overflowY,
      property: "overflow-y",
      el: a
    }), a.style.overflow = "hidden";
  }
  return () => {
    o.forEach(({
      value: a,
      el: l,
      property: s
    }) => {
      a ? l.style.setProperty(s, a) : l.style.removeProperty(s);
    });
  };
}
function Lf(e) {
  const t = [];
  return [].forEach.call(e.children, (o) => {
    o.getAttribute("aria-hidden") === "true" && t.push(o);
  }), t;
}
class Vf {
  constructor() {
    this.modals = [], this.containers = [];
  }
  add(t, o) {
    let r = this.modals.indexOf(t);
    if (r !== -1)
      return r;
    r = this.modals.length, this.modals.push(t), t.modalRef && Lo(t.modalRef, !1);
    const i = Lf(o);
    ma(o, t.mount, t.modalRef, i, !0);
    const a = Or(this.containers, (l) => l.container === o);
    return a !== -1 ? (this.containers[a].modals.push(t), r) : (this.containers.push({
      modals: [t],
      container: o,
      restore: null,
      hiddenSiblings: i
    }), r);
  }
  mount(t, o) {
    const r = Or(this.containers, (a) => a.modals.includes(t)), i = this.containers[r];
    i.restore || (i.restore = zf(i, o));
  }
  remove(t, o = !0) {
    const r = this.modals.indexOf(t);
    if (r === -1)
      return r;
    const i = Or(this.containers, (l) => l.modals.includes(t)), a = this.containers[i];
    if (a.modals.splice(a.modals.indexOf(t), 1), this.modals.splice(r, 1), a.modals.length === 0)
      a.restore && a.restore(), t.modalRef && Lo(t.modalRef, o), ma(a.container, t.mount, t.modalRef, a.hiddenSiblings, !1), this.containers.splice(i, 1);
    else {
      const l = a.modals[a.modals.length - 1];
      l.modalRef && Lo(l.modalRef, !1);
    }
    return r;
  }
  isTopModal(t) {
    return this.modals.length > 0 && this.modals[this.modals.length - 1] === t;
  }
}
const Wf = ["input", "select", "textarea", "a[href]", "button", "[tabindex]", "audio[controls]", "video[controls]", '[contenteditable]:not([contenteditable="false"])'].join(",");
function Uf(e) {
  const t = parseInt(e.getAttribute("tabindex") || "", 10);
  return Number.isNaN(t) ? e.contentEditable === "true" || (e.nodeName === "AUDIO" || e.nodeName === "VIDEO" || e.nodeName === "DETAILS") && e.getAttribute("tabindex") === null ? 0 : e.tabIndex : t;
}
function Hf(e) {
  if (e.tagName !== "INPUT" || e.type !== "radio" || !e.name)
    return !1;
  const t = (r) => e.ownerDocument.querySelector(`input[type="radio"]${r}`);
  let o = t(`[name="${e.name}"]:checked`);
  return o || (o = t(`[name="${e.name}"]`)), o !== e;
}
function Qf(e) {
  return !(e.disabled || e.tagName === "INPUT" && e.type === "hidden" || Hf(e));
}
function Kf(e) {
  const t = [], o = [];
  return Array.from(e.querySelectorAll(Wf)).forEach((r, i) => {
    const a = Uf(r);
    a === -1 || !Qf(r) || (a === 0 ? t.push(r) : o.push({
      documentOrder: i,
      tabIndex: a,
      node: r
    }));
  }), o.sort((r, i) => r.tabIndex === i.tabIndex ? r.documentOrder - i.documentOrder : r.tabIndex - i.tabIndex).map((r) => r.node).concat(t);
}
function Yf() {
  return !0;
}
function In(e) {
  const {
    children: t,
    disableAutoFocus: o = !1,
    disableEnforceFocus: r = !1,
    disableRestoreFocus: i = !1,
    getTabbable: a = Kf,
    isEnabled: l = Yf,
    open: s
  } = e, c = g.useRef(!1), p = g.useRef(null), d = g.useRef(null), f = g.useRef(null), h = g.useRef(null), b = g.useRef(!1), v = g.useRef(null), y = Ne(vo(t), v), C = g.useRef(null);
  g.useEffect(() => {
    !s || !v.current || (b.current = !o);
  }, [o, s]), g.useEffect(() => {
    if (!s || !v.current)
      return;
    const w = $e(v.current);
    return v.current.contains(w.activeElement) || (v.current.hasAttribute("tabIndex") || (process.env.NODE_ENV !== "production" && console.error(["MUI: The modal content node does not accept focus.", 'For the benefit of assistive technologies, the tabIndex of the node is being set to "-1".'].join(`
`)), v.current.setAttribute("tabIndex", "-1")), b.current && v.current.focus()), () => {
      i || (f.current && f.current.focus && (c.current = !0, f.current.focus()), f.current = null);
    };
  }, [s]), g.useEffect(() => {
    if (!s || !v.current)
      return;
    const w = $e(v.current), m = (P) => {
      C.current = P, !(r || !l() || P.key !== "Tab") && w.activeElement === v.current && P.shiftKey && (c.current = !0, d.current && d.current.focus());
    }, T = () => {
      var D, u;
      const P = v.current;
      if (P === null)
        return;
      if (!w.hasFocus() || !l() || c.current) {
        c.current = !1;
        return;
      }
      if (P.contains(w.activeElement) || r && w.activeElement !== p.current && w.activeElement !== d.current)
        return;
      if (w.activeElement !== h.current)
        h.current = null;
      else if (h.current !== null)
        return;
      if (!b.current)
        return;
      let $ = [];
      if ((w.activeElement === p.current || w.activeElement === d.current) && ($ = a(v.current)), $.length > 0) {
        const R = !!((D = C.current) != null && D.shiftKey && ((u = C.current) == null ? void 0 : u.key) === "Tab"), B = $[0], O = $[$.length - 1];
        typeof B != "string" && typeof O != "string" && (R ? O.focus() : B.focus());
      } else
        P.focus();
    };
    w.addEventListener("focusin", T), w.addEventListener("keydown", m, !0);
    const A = setInterval(() => {
      w.activeElement && w.activeElement.tagName === "BODY" && T();
    }, 50);
    return () => {
      clearInterval(A), w.removeEventListener("focusin", T), w.removeEventListener("keydown", m, !0);
    };
  }, [o, r, i, l, s, a]);
  const x = (w) => {
    f.current === null && (f.current = w.relatedTarget), b.current = !0, h.current = w.target;
    const m = t.props.onFocus;
    m && m(w);
  }, E = (w) => {
    f.current === null && (f.current = w.relatedTarget), b.current = !0;
  };
  return /* @__PURE__ */ ye(g.Fragment, {
    children: [/* @__PURE__ */ S("div", {
      tabIndex: s ? 0 : -1,
      onFocus: E,
      ref: p,
      "data-testid": "sentinelStart"
    }), /* @__PURE__ */ g.cloneElement(t, {
      ref: y,
      onFocus: x
    }), /* @__PURE__ */ S("div", {
      tabIndex: s ? 0 : -1,
      onFocus: E,
      ref: d,
      "data-testid": "sentinelEnd"
    })]
  });
}
process.env.NODE_ENV !== "production" && (In.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * A single child content element.
   */
  children: Xt,
  /**
   * If `true`, the focus trap will not automatically shift focus to itself when it opens, and
   * replace it to the last focused element when it closes.
   * This also works correctly with any focus trap children that have the `disableAutoFocus` prop.
   *
   * Generally this should never be set to `true` as it makes the focus trap less
   * accessible to assistive technologies, like screen readers.
   * @default false
   */
  disableAutoFocus: n.bool,
  /**
   * If `true`, the focus trap will not prevent focus from leaving the focus trap while open.
   *
   * Generally this should never be set to `true` as it makes the focus trap less
   * accessible to assistive technologies, like screen readers.
   * @default false
   */
  disableEnforceFocus: n.bool,
  /**
   * If `true`, the focus trap will not restore focus to previously focused element once
   * focus trap is hidden or unmounted.
   * @default false
   */
  disableRestoreFocus: n.bool,
  /**
   * Returns an array of ordered tabbable nodes (i.e. in tab order) within the root.
   * For instance, you can provide the "tabbable" npm dependency.
   * @param {HTMLElement} root
   */
  getTabbable: n.func,
  /**
   * This prop extends the `open` prop.
   * It allows to toggle the open state without having to wait for a rerender when changing the `open` prop.
   * This prop should be memoized.
   * It can be used to support multiple focus trap mounted at the same time.
   * @default function defaultIsEnabled(): boolean {
   *   return true;
   * }
   */
  isEnabled: n.func,
  /**
   * If `true`, focus is locked.
   */
  open: n.bool.isRequired
});
process.env.NODE_ENV !== "production" && (In.propTypes = oi(In.propTypes));
function Gf(e) {
  return typeof e == "function" ? e() : e;
}
const Yo = /* @__PURE__ */ g.forwardRef(function(t, o) {
  const {
    children: r,
    container: i,
    disablePortal: a = !1
  } = t, [l, s] = g.useState(null), c = Ne(/* @__PURE__ */ g.isValidElement(r) ? vo(r) : null, o);
  if (gt(() => {
    a || s(Gf(i) || document.body);
  }, [i, a]), gt(() => {
    if (l && !a)
      return Ki(o, l), () => {
        Ki(o, null);
      };
  }, [o, l, a]), a) {
    if (/* @__PURE__ */ g.isValidElement(r)) {
      const p = {
        ref: c
      };
      return /* @__PURE__ */ g.cloneElement(r, p);
    }
    return r;
  }
  return l && /* @__PURE__ */ Mr.createPortal(r, l);
});
process.env.NODE_ENV !== "production" && (Yo.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The children to render into the `container`.
   */
  children: n.node,
  /**
   * An HTML element or function that returns one.
   * The `container` will have the portal children appended to it.
   *
   * You can also provide a callback, which is called in a React layout effect.
   * This lets you set the container from a ref, and also makes server-side rendering possible.
   *
   * By default, it uses the body of the top-level document object,
   * so it's simply `document.body` most of the time.
   */
  container: n.oneOfType([ht, n.func]),
  /**
   * The `children` will be under the DOM hierarchy of the parent component.
   * @default false
   */
  disablePortal: n.bool
});
process.env.NODE_ENV !== "production" && (Yo.propTypes = oi(Yo.propTypes));
const qf = {
  entering: {
    opacity: 1
  },
  entered: {
    opacity: 1
  }
}, Dn = /* @__PURE__ */ g.forwardRef(function(t, o) {
  const r = rt(), i = {
    enter: r.transitions.duration.enteringScreen,
    exit: r.transitions.duration.leavingScreen
  }, {
    addEndListener: a,
    appear: l = !0,
    children: s,
    easing: c,
    in: p,
    onEnter: d,
    onEntered: f,
    onEntering: h,
    onExit: b,
    onExited: v,
    onExiting: y,
    style: C,
    timeout: x = i,
    // eslint-disable-next-line react/prop-types
    TransitionComponent: E = ct,
    ...w
  } = t, m = g.useRef(null), T = Ne(m, vo(s), o), A = (M) => (N) => {
    if (M) {
      const F = m.current;
      N === void 0 ? M(F) : M(F, N);
    }
  }, P = A(h), $ = A((M, N) => {
    pi(M);
    const F = Yt({
      style: C,
      timeout: x,
      easing: c
    }, {
      mode: "enter"
    });
    M.style.webkitTransition = r.transitions.create("opacity", F), M.style.transition = r.transitions.create("opacity", F), d && d(M, N);
  }), D = A(f), u = A(y), R = A((M) => {
    const N = Yt({
      style: C,
      timeout: x,
      easing: c
    }, {
      mode: "exit"
    });
    M.style.webkitTransition = r.transitions.create("opacity", N), M.style.transition = r.transitions.create("opacity", N), b && b(M);
  }), B = A(v);
  return /* @__PURE__ */ S(E, {
    appear: l,
    in: p,
    nodeRef: m,
    onEnter: $,
    onEntered: D,
    onEntering: P,
    onExit: R,
    onExited: B,
    onExiting: u,
    addEndListener: (M) => {
      a && a(m.current, M);
    },
    timeout: x,
    ...w,
    children: (M, {
      ownerState: N,
      ...F
    }) => /* @__PURE__ */ g.cloneElement(s, {
      style: {
        opacity: 0,
        visibility: M === "exited" && !p ? "hidden" : void 0,
        ...qf[M],
        ...C,
        ...s.props.style
      },
      ref: T,
      ...F
    })
  });
});
process.env.NODE_ENV !== "production" && (Dn.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Add a custom transition end trigger. Called with the transitioning DOM
   * node and a done callback. Allows for more fine grained transition end
   * logic. Note: Timeouts are still used as a fallback if provided.
   */
  addEndListener: n.func,
  /**
   * Perform the enter transition when it first mounts if `in` is also `true`.
   * Set this to `false` to disable this behavior.
   * @default true
   */
  appear: n.bool,
  /**
   * A single child content element.
   */
  children: Xt.isRequired,
  /**
   * The transition timing function.
   * You may specify a single easing or a object containing enter and exit values.
   */
  easing: n.oneOfType([n.shape({
    enter: n.string,
    exit: n.string
  }), n.string]),
  /**
   * If `true`, the component will transition in.
   */
  in: n.bool,
  /**
   * @ignore
   */
  onEnter: n.func,
  /**
   * @ignore
   */
  onEntered: n.func,
  /**
   * @ignore
   */
  onEntering: n.func,
  /**
   * @ignore
   */
  onExit: n.func,
  /**
   * @ignore
   */
  onExited: n.func,
  /**
   * @ignore
   */
  onExiting: n.func,
  /**
   * @ignore
   */
  style: n.object,
  /**
   * The duration for the transition, in milliseconds.
   * You may specify a single timeout for all transitions, or individually with an object.
   * @default {
   *   enter: theme.transitions.duration.enteringScreen,
   *   exit: theme.transitions.duration.leavingScreen,
   * }
   */
  timeout: n.oneOfType([n.number, n.shape({
    appear: n.number,
    enter: n.number,
    exit: n.number
  })])
});
function Xf(e) {
  return ue("MuiBackdrop", e);
}
le("MuiBackdrop", ["root", "invisible"]);
const Jf = (e) => {
  const {
    classes: t,
    invisible: o
  } = e;
  return fe({
    root: ["root", o && "invisible"]
  }, Xf, t);
}, Zf = H("div", {
  name: "MuiBackdrop",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: o
    } = e;
    return [t.root, o.invisible && t.invisible];
  }
})({
  position: "fixed",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  right: 0,
  bottom: 0,
  top: 0,
  left: 0,
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  WebkitTapHighlightColor: "transparent",
  variants: [{
    props: {
      invisible: !0
    },
    style: {
      backgroundColor: "transparent"
    }
  }]
}), ui = /* @__PURE__ */ g.forwardRef(function(t, o) {
  const r = ge({
    props: t,
    name: "MuiBackdrop"
  }), {
    children: i,
    className: a,
    component: l = "div",
    invisible: s = !1,
    open: c,
    components: p = {},
    componentsProps: d = {},
    slotProps: f = {},
    slots: h = {},
    TransitionComponent: b,
    transitionDuration: v,
    ...y
  } = r, C = {
    ...r,
    component: l,
    invisible: s
  }, x = Jf(C), E = {
    transition: b,
    root: p.Root,
    ...h
  }, w = {
    ...d,
    ...f
  }, m = {
    slots: E,
    slotProps: w
  }, [T, A] = se("root", {
    elementType: Zf,
    externalForwardedProps: m,
    className: Z(x.root, a),
    ownerState: C
  }), [P, $] = se("transition", {
    elementType: Dn,
    externalForwardedProps: m,
    ownerState: C
  });
  return /* @__PURE__ */ S(P, {
    in: c,
    timeout: v,
    ...y,
    ...$,
    children: /* @__PURE__ */ S(T, {
      "aria-hidden": !0,
      ...A,
      classes: x,
      ref: o,
      children: i
    })
  });
});
process.env.NODE_ENV !== "production" && (ui.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: n.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: n.object,
  /**
   * @ignore
   */
  className: n.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: n.elementType,
  /**
   * The components used for each slot inside.
   *
   * @deprecated Use the `slots` prop instead. This prop will be removed in v7. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   *
   * @default {}
   */
  components: n.shape({
    Root: n.elementType
  }),
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * @deprecated Use the `slotProps` prop instead. This prop will be removed in v7. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   *
   * @default {}
   */
  componentsProps: n.shape({
    root: n.object
  }),
  /**
   * If `true`, the backdrop is invisible.
   * It can be used when rendering a popover or a custom select component.
   * @default false
   */
  invisible: n.bool,
  /**
   * If `true`, the component is shown.
   */
  open: n.bool.isRequired,
  /**
   * The props used for each slot inside.
   * @default {}
   */
  slotProps: n.shape({
    root: n.oneOfType([n.func, n.object]),
    transition: n.oneOfType([n.func, n.object])
  }),
  /**
   * The components used for each slot inside.
   * @default {}
   */
  slots: n.shape({
    root: n.elementType,
    transition: n.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: n.oneOfType([n.arrayOf(n.oneOfType([n.func, n.object, n.bool])), n.func, n.object]),
  /**
   * The component used for the transition.
   * [Follow this guide](https://mui.com/material-ui/transitions/#transitioncomponent-prop) to learn more about the requirements for this component.
   * @default Fade
   * @deprecated Use `slots.transition` instead. This prop will be removed in v7. See [Migrating from deprecated APIs](/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   */
  TransitionComponent: n.elementType,
  /**
   * The duration for the transition, in milliseconds.
   * You may specify a single timeout for all transitions, or individually with an object.
   */
  transitionDuration: n.oneOfType([n.number, n.shape({
    appear: n.number,
    enter: n.number,
    exit: n.number
  })])
});
function _f(e) {
  return typeof e == "function" ? e() : e;
}
function eg(e) {
  return e ? e.props.hasOwnProperty("in") : !1;
}
const ya = () => {
}, un = new Vf();
function tg(e) {
  const {
    container: t,
    disableEscapeKeyDown: o = !1,
    disableScrollLock: r = !1,
    closeAfterTransition: i = !1,
    onTransitionEnter: a,
    onTransitionExited: l,
    children: s,
    onClose: c,
    open: p,
    rootRef: d
  } = e, f = g.useRef({}), h = g.useRef(null), b = g.useRef(null), v = Ne(b, d), [y, C] = g.useState(!p), x = eg(s);
  let E = !0;
  (e["aria-hidden"] === "false" || e["aria-hidden"] === !1) && (E = !1);
  const w = () => $e(h.current), m = () => (f.current.modalRef = b.current, f.current.mount = h.current, f.current), T = () => {
    un.mount(m(), {
      disableScrollLock: r
    }), b.current && (b.current.scrollTop = 0);
  }, A = He(() => {
    const N = _f(t) || w().body;
    un.add(m(), N), b.current && T();
  }), P = () => un.isTopModal(m()), $ = He((N) => {
    h.current = N, N && (p && P() ? T() : b.current && Lo(b.current, E));
  }), D = g.useCallback(() => {
    un.remove(m(), E);
  }, [E]);
  g.useEffect(() => () => {
    D();
  }, [D]), g.useEffect(() => {
    p ? A() : (!x || !i) && D();
  }, [p, D, x, i, A]);
  const u = (N) => (F) => {
    var W;
    (W = N.onKeyDown) == null || W.call(N, F), !(F.key !== "Escape" || F.which === 229 || // Wait until IME is settled.
    !P()) && (o || (F.stopPropagation(), c && c(F, "escapeKeyDown")));
  }, R = (N) => (F) => {
    var W;
    (W = N.onClick) == null || W.call(N, F), F.target === F.currentTarget && c && c(F, "backdropClick");
  };
  return {
    getRootProps: (N = {}) => {
      const F = hs(e);
      delete F.onTransitionEnter, delete F.onTransitionExited;
      const W = {
        ...F,
        ...N
      };
      return {
        /*
         * Marking an element with the role presentation indicates to assistive technology
         * that this element should be ignored; it exists to support the web application and
         * is not meant for humans to interact with directly.
         * https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/no-static-element-interactions.md
         */
        role: "presentation",
        ...W,
        onKeyDown: u(W),
        ref: v
      };
    },
    getBackdropProps: (N = {}) => {
      const F = N;
      return {
        "aria-hidden": !0,
        ...F,
        onClick: R(F),
        open: p
      };
    },
    getTransitionProps: () => {
      const N = () => {
        C(!1), a && a();
      }, F = () => {
        C(!0), l && l(), i && D();
      };
      return {
        onEnter: Dr(N, (s == null ? void 0 : s.props.onEnter) ?? ya),
        onExited: Dr(F, (s == null ? void 0 : s.props.onExited) ?? ya)
      };
    },
    rootRef: v,
    portalRef: $,
    isTopModal: P,
    exited: y,
    hasTransition: x
  };
}
function og(e) {
  return ue("MuiModal", e);
}
le("MuiModal", ["root", "hidden", "backdrop"]);
const ng = (e) => {
  const {
    open: t,
    exited: o,
    classes: r
  } = e;
  return fe({
    root: ["root", !t && o && "hidden"],
    backdrop: ["backdrop"]
  }, og, r);
}, rg = H("div", {
  name: "MuiModal",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: o
    } = e;
    return [t.root, !o.open && o.exited && t.hidden];
  }
})(de(({
  theme: e
}) => ({
  position: "fixed",
  zIndex: (e.vars || e).zIndex.modal,
  right: 0,
  bottom: 0,
  top: 0,
  left: 0,
  variants: [{
    props: ({
      ownerState: t
    }) => !t.open && t.exited,
    style: {
      visibility: "hidden"
    }
  }]
}))), ig = H(ui, {
  name: "MuiModal",
  slot: "Backdrop",
  overridesResolver: (e, t) => t.backdrop
})({
  zIndex: -1
}), _n = /* @__PURE__ */ g.forwardRef(function(t, o) {
  const r = ge({
    name: "MuiModal",
    props: t
  }), {
    BackdropComponent: i = ig,
    BackdropProps: a,
    classes: l,
    className: s,
    closeAfterTransition: c = !1,
    children: p,
    container: d,
    component: f,
    components: h = {},
    componentsProps: b = {},
    disableAutoFocus: v = !1,
    disableEnforceFocus: y = !1,
    disableEscapeKeyDown: C = !1,
    disablePortal: x = !1,
    disableRestoreFocus: E = !1,
    disableScrollLock: w = !1,
    hideBackdrop: m = !1,
    keepMounted: T = !1,
    onBackdropClick: A,
    onClose: P,
    onTransitionEnter: $,
    onTransitionExited: D,
    open: u,
    slotProps: R = {},
    slots: B = {},
    // eslint-disable-next-line react/prop-types
    theme: O,
    ...M
  } = r, N = {
    ...r,
    closeAfterTransition: c,
    disableAutoFocus: v,
    disableEnforceFocus: y,
    disableEscapeKeyDown: C,
    disablePortal: x,
    disableRestoreFocus: E,
    disableScrollLock: w,
    hideBackdrop: m,
    keepMounted: T
  }, {
    getRootProps: F,
    getBackdropProps: W,
    getTransitionProps: U,
    portalRef: j,
    isTopModal: k,
    exited: L,
    hasTransition: oe
  } = tg({
    ...N,
    rootRef: o
  }), ee = {
    ...N,
    exited: L
  }, Y = ng(ee), K = {};
  if (p.props.tabIndex === void 0 && (K.tabIndex = "-1"), oe) {
    const {
      onEnter: J,
      onExited: X
    } = U();
    K.onEnter = J, K.onExited = X;
  }
  const G = {
    slots: {
      root: h.Root,
      backdrop: h.Backdrop,
      ...B
    },
    slotProps: {
      ...b,
      ...R
    }
  }, [z, te] = se("root", {
    ref: o,
    elementType: rg,
    externalForwardedProps: {
      ...G,
      ...M,
      component: f
    },
    getSlotProps: F,
    ownerState: ee,
    className: Z(s, Y == null ? void 0 : Y.root, !ee.open && ee.exited && (Y == null ? void 0 : Y.hidden))
  }), [ne, Q] = se("backdrop", {
    ref: a == null ? void 0 : a.ref,
    elementType: i,
    externalForwardedProps: G,
    shouldForwardComponentProp: !0,
    additionalProps: a,
    getSlotProps: (J) => W({
      ...J,
      onClick: (X) => {
        A && A(X), J != null && J.onClick && J.onClick(X);
      }
    }),
    className: Z(a == null ? void 0 : a.className, Y == null ? void 0 : Y.backdrop),
    ownerState: ee
  });
  return !T && !u && (!oe || L) ? null : /* @__PURE__ */ S(Yo, {
    ref: j,
    container: d,
    disablePortal: x,
    children: /* @__PURE__ */ ye(z, {
      ...te,
      children: [!m && i ? /* @__PURE__ */ S(ne, {
        ...Q
      }) : null, /* @__PURE__ */ S(In, {
        disableEnforceFocus: y,
        disableAutoFocus: v,
        disableRestoreFocus: E,
        isEnabled: k,
        open: u,
        children: /* @__PURE__ */ g.cloneElement(p, K)
      })]
    })
  });
});
process.env.NODE_ENV !== "production" && (_n.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * A backdrop component. This prop enables custom backdrop rendering.
   * @deprecated Use `slots.backdrop` instead. While this prop currently works, it will be removed in the next major version.
   * Use the `slots.backdrop` prop to make your application ready for the next version of Material UI.
   * @default styled(Backdrop, {
   *   name: 'MuiModal',
   *   slot: 'Backdrop',
   *   overridesResolver: (props, styles) => {
   *     return styles.backdrop;
   *   },
   * })({
   *   zIndex: -1,
   * })
   */
  BackdropComponent: n.elementType,
  /**
   * Props applied to the [`Backdrop`](https://mui.com/material-ui/api/backdrop/) element.
   * @deprecated Use `slotProps.backdrop` instead.
   */
  BackdropProps: n.object,
  /**
   * A single child content element.
   */
  children: Xt.isRequired,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: n.object,
  /**
   * @ignore
   */
  className: n.string,
  /**
   * When set to true the Modal waits until a nested Transition is completed before closing.
   * @default false
   */
  closeAfterTransition: n.bool,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: n.elementType,
  /**
   * The components used for each slot inside.
   *
   * @deprecated Use the `slots` prop instead. This prop will be removed in v7. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   *
   * @default {}
   */
  components: n.shape({
    Backdrop: n.elementType,
    Root: n.elementType
  }),
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * @deprecated Use the `slotProps` prop instead. This prop will be removed in v7. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   *
   * @default {}
   */
  componentsProps: n.shape({
    backdrop: n.oneOfType([n.func, n.object]),
    root: n.oneOfType([n.func, n.object])
  }),
  /**
   * An HTML element or function that returns one.
   * The `container` will have the portal children appended to it.
   *
   * You can also provide a callback, which is called in a React layout effect.
   * This lets you set the container from a ref, and also makes server-side rendering possible.
   *
   * By default, it uses the body of the top-level document object,
   * so it's simply `document.body` most of the time.
   */
  container: n.oneOfType([ht, n.func]),
  /**
   * If `true`, the modal will not automatically shift focus to itself when it opens, and
   * replace it to the last focused element when it closes.
   * This also works correctly with any modal children that have the `disableAutoFocus` prop.
   *
   * Generally this should never be set to `true` as it makes the modal less
   * accessible to assistive technologies, like screen readers.
   * @default false
   */
  disableAutoFocus: n.bool,
  /**
   * If `true`, the modal will not prevent focus from leaving the modal while open.
   *
   * Generally this should never be set to `true` as it makes the modal less
   * accessible to assistive technologies, like screen readers.
   * @default false
   */
  disableEnforceFocus: n.bool,
  /**
   * If `true`, hitting escape will not fire the `onClose` callback.
   * @default false
   */
  disableEscapeKeyDown: n.bool,
  /**
   * The `children` will be under the DOM hierarchy of the parent component.
   * @default false
   */
  disablePortal: n.bool,
  /**
   * If `true`, the modal will not restore focus to previously focused element once
   * modal is hidden or unmounted.
   * @default false
   */
  disableRestoreFocus: n.bool,
  /**
   * Disable the scroll lock behavior.
   * @default false
   */
  disableScrollLock: n.bool,
  /**
   * If `true`, the backdrop is not rendered.
   * @default false
   */
  hideBackdrop: n.bool,
  /**
   * Always keep the children in the DOM.
   * This prop can be useful in SEO situation or
   * when you want to maximize the responsiveness of the Modal.
   * @default false
   */
  keepMounted: n.bool,
  /**
   * Callback fired when the backdrop is clicked.
   * @deprecated Use the `onClose` prop with the `reason` argument to handle the `backdropClick` events.
   */
  onBackdropClick: n.func,
  /**
   * Callback fired when the component requests to be closed.
   * The `reason` parameter can optionally be used to control the response to `onClose`.
   *
   * @param {object} event The event source of the callback.
   * @param {string} reason Can be: `"escapeKeyDown"`, `"backdropClick"`.
   */
  onClose: n.func,
  /**
   * A function called when a transition enters.
   */
  onTransitionEnter: n.func,
  /**
   * A function called when a transition has exited.
   */
  onTransitionExited: n.func,
  /**
   * If `true`, the component is shown.
   */
  open: n.bool.isRequired,
  /**
   * The props used for each slot inside the Modal.
   * @default {}
   */
  slotProps: n.shape({
    backdrop: n.oneOfType([n.func, n.object]),
    root: n.oneOfType([n.func, n.object])
  }),
  /**
   * The components used for each slot inside the Modal.
   * Either a string to use a HTML element or a component.
   * @default {}
   */
  slots: n.shape({
    backdrop: n.elementType,
    root: n.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: n.oneOfType([n.arrayOf(n.oneOfType([n.func, n.object, n.bool])), n.func, n.object])
});
function ag(e) {
  return ue("MuiPopover", e);
}
le("MuiPopover", ["root", "paper"]);
function va(e, t) {
  let o = 0;
  return typeof t == "number" ? o = t : t === "center" ? o = e.height / 2 : t === "bottom" && (o = e.height), o;
}
function Ca(e, t) {
  let o = 0;
  return typeof t == "number" ? o = t : t === "center" ? o = e.width / 2 : t === "right" && (o = e.width), o;
}
function xa(e) {
  return [e.horizontal, e.vertical].map((t) => typeof t == "number" ? `${t}px` : t).join(" ");
}
function No(e) {
  return typeof e == "function" ? e() : e;
}
const sg = (e) => {
  const {
    classes: t
  } = e;
  return fe({
    root: ["root"],
    paper: ["paper"]
  }, ag, t);
}, lg = H(_n, {
  name: "MuiPopover",
  slot: "Root",
  overridesResolver: (e, t) => t.root
})({}), Qs = H(xo, {
  name: "MuiPopover",
  slot: "Paper",
  overridesResolver: (e, t) => t.paper
})({
  position: "absolute",
  overflowY: "auto",
  overflowX: "hidden",
  // So we see the popover when it's empty.
  // It's most likely on issue on userland.
  minWidth: 16,
  minHeight: 16,
  maxWidth: "calc(100% - 32px)",
  maxHeight: "calc(100% - 32px)",
  // We disable the focus ring for mouse, touch and keyboard users.
  outline: 0
}), Ks = /* @__PURE__ */ g.forwardRef(function(t, o) {
  const r = ge({
    props: t,
    name: "MuiPopover"
  }), {
    action: i,
    anchorEl: a,
    anchorOrigin: l = {
      vertical: "top",
      horizontal: "left"
    },
    anchorPosition: s,
    anchorReference: c = "anchorEl",
    children: p,
    className: d,
    container: f,
    elevation: h = 8,
    marginThreshold: b = 16,
    open: v,
    PaperProps: y = {},
    // TODO: remove in v7
    slots: C = {},
    slotProps: x = {},
    transformOrigin: E = {
      vertical: "top",
      horizontal: "left"
    },
    TransitionComponent: w,
    // TODO: remove in v7
    transitionDuration: m = "auto",
    TransitionProps: T = {},
    // TODO: remove in v7
    disableScrollLock: A = !1,
    ...P
  } = r, $ = g.useRef(), D = {
    ...r,
    anchorOrigin: l,
    anchorReference: c,
    elevation: h,
    marginThreshold: b,
    transformOrigin: E,
    TransitionComponent: w,
    transitionDuration: m,
    TransitionProps: T
  }, u = sg(D), R = g.useCallback(() => {
    if (c === "anchorPosition")
      return process.env.NODE_ENV !== "production" && (s || console.error('MUI: You need to provide a `anchorPosition` prop when using <Popover anchorReference="anchorPosition" />.')), s;
    const Q = No(a), J = Q && Q.nodeType === 1 ? Q : $e($.current).body, X = J.getBoundingClientRect();
    if (process.env.NODE_ENV !== "production") {
      const ce = J.getBoundingClientRect();
      process.env.NODE_ENV !== "test" && ce.top === 0 && ce.left === 0 && ce.right === 0 && ce.bottom === 0 && console.warn(["MUI: The `anchorEl` prop provided to the component is invalid.", "The anchor element should be part of the document layout.", "Make sure the element is present in the document or that it's not display none."].join(`
`));
    }
    return {
      top: X.top + va(X, l.vertical),
      left: X.left + Ca(X, l.horizontal)
    };
  }, [a, l.horizontal, l.vertical, s, c]), B = g.useCallback((Q) => ({
    vertical: va(Q, E.vertical),
    horizontal: Ca(Q, E.horizontal)
  }), [E.horizontal, E.vertical]), O = g.useCallback((Q) => {
    const J = {
      width: Q.offsetWidth,
      height: Q.offsetHeight
    }, X = B(J);
    if (c === "none")
      return {
        top: null,
        left: null,
        transformOrigin: xa(X)
      };
    const ce = R();
    let pe = ce.top - X.vertical, Te = ce.left - X.horizontal;
    const Ce = pe + J.height, be = Te + J.width, xe = We(No(a)), Me = xe.innerHeight - b, De = xe.innerWidth - b;
    if (b !== null && pe < b) {
      const we = pe - b;
      pe -= we, X.vertical += we;
    } else if (b !== null && Ce > Me) {
      const we = Ce - Me;
      pe -= we, X.vertical += we;
    }
    if (process.env.NODE_ENV !== "production" && J.height > Me && J.height && Me && console.error(["MUI: The popover component is too tall.", `Some part of it can not be seen on the screen (${J.height - Me}px).`, "Please consider adding a `max-height` to improve the user-experience."].join(`
`)), b !== null && Te < b) {
      const we = Te - b;
      Te -= we, X.horizontal += we;
    } else if (be > De) {
      const we = be - De;
      Te -= we, X.horizontal += we;
    }
    return {
      top: `${Math.round(pe)}px`,
      left: `${Math.round(Te)}px`,
      transformOrigin: xa(X)
    };
  }, [a, c, R, B, b]), [M, N] = g.useState(v), F = g.useCallback(() => {
    const Q = $.current;
    if (!Q)
      return;
    const J = O(Q);
    J.top !== null && Q.style.setProperty("top", J.top), J.left !== null && (Q.style.left = J.left), Q.style.transformOrigin = J.transformOrigin, N(!0);
  }, [O]);
  g.useEffect(() => (A && window.addEventListener("scroll", F), () => window.removeEventListener("scroll", F)), [a, A, F]);
  const W = () => {
    F();
  }, U = () => {
    N(!1);
  };
  g.useEffect(() => {
    v && F();
  }), g.useImperativeHandle(i, () => v ? {
    updatePosition: () => {
      F();
    }
  } : null, [v, F]), g.useEffect(() => {
    if (!v)
      return;
    const Q = qn(() => {
      F();
    }), J = We(No(a));
    return J.addEventListener("resize", Q), () => {
      Q.clear(), J.removeEventListener("resize", Q);
    };
  }, [a, v, F]);
  let j = m;
  const k = {
    slots: {
      transition: w,
      ...C
    },
    slotProps: {
      transition: T,
      paper: y,
      ...x
    }
  }, [L, oe] = se("transition", {
    elementType: Ko,
    externalForwardedProps: k,
    ownerState: D,
    getSlotProps: (Q) => ({
      ...Q,
      onEntering: (J, X) => {
        var ce;
        (ce = Q.onEntering) == null || ce.call(Q, J, X), W();
      },
      onExited: (J) => {
        var X;
        (X = Q.onExited) == null || X.call(Q, J), U();
      }
    }),
    additionalProps: {
      appear: !0,
      in: v
    }
  });
  m === "auto" && !L.muiSupportAuto && (j = void 0);
  const ee = f || (a ? $e(No(a)).body : void 0), [Y, {
    slots: K,
    slotProps: G,
    ...z
  }] = se("root", {
    ref: o,
    elementType: lg,
    externalForwardedProps: {
      ...k,
      ...P
    },
    shouldForwardComponentProp: !0,
    additionalProps: {
      slots: {
        backdrop: C.backdrop
      },
      slotProps: {
        backdrop: Qo(typeof x.backdrop == "function" ? x.backdrop(D) : x.backdrop, {
          invisible: !0
        })
      },
      container: ee,
      open: v
    },
    ownerState: D,
    className: Z(u.root, d)
  }), [te, ne] = se("paper", {
    ref: $,
    className: u.paper,
    elementType: Qs,
    externalForwardedProps: k,
    shouldForwardComponentProp: !0,
    additionalProps: {
      elevation: h,
      style: M ? void 0 : {
        opacity: 0
      }
    },
    ownerState: D
  });
  return /* @__PURE__ */ S(Y, {
    ...z,
    ...!Df(Y) && {
      slots: K,
      slotProps: G,
      disableScrollLock: A
    },
    children: /* @__PURE__ */ S(L, {
      ...oe,
      timeout: j,
      children: /* @__PURE__ */ S(te, {
        ...ne,
        children: p
      })
    })
  });
});
process.env.NODE_ENV !== "production" && (Ks.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * A ref for imperative actions.
   * It currently only supports updatePosition() action.
   */
  action: Tt,
  /**
   * An HTML element, [PopoverVirtualElement](https://mui.com/material-ui/react-popover/#virtual-element),
   * or a function that returns either.
   * It's used to set the position of the popover.
   */
  anchorEl: Et(n.oneOfType([ht, n.func]), (e) => {
    if (e.open && (!e.anchorReference || e.anchorReference === "anchorEl")) {
      const t = No(e.anchorEl);
      if (t && t.nodeType === 1) {
        const o = t.getBoundingClientRect();
        if (process.env.NODE_ENV !== "test" && o.top === 0 && o.left === 0 && o.right === 0 && o.bottom === 0)
          return new Error(["MUI: The `anchorEl` prop provided to the component is invalid.", "The anchor element should be part of the document layout.", "Make sure the element is present in the document or that it's not display none."].join(`
`));
      } else
        return new Error(["MUI: The `anchorEl` prop provided to the component is invalid.", `It should be an Element or PopoverVirtualElement instance but it's \`${t}\` instead.`].join(`
`));
    }
    return null;
  }),
  /**
   * This is the point on the anchor where the popover's
   * `anchorEl` will attach to. This is not used when the
   * anchorReference is 'anchorPosition'.
   *
   * Options:
   * vertical: [top, center, bottom];
   * horizontal: [left, center, right].
   * @default {
   *   vertical: 'top',
   *   horizontal: 'left',
   * }
   */
  anchorOrigin: n.shape({
    horizontal: n.oneOfType([n.oneOf(["center", "left", "right"]), n.number]).isRequired,
    vertical: n.oneOfType([n.oneOf(["bottom", "center", "top"]), n.number]).isRequired
  }),
  /**
   * This is the position that may be used to set the position of the popover.
   * The coordinates are relative to the application's client area.
   */
  anchorPosition: n.shape({
    left: n.number.isRequired,
    top: n.number.isRequired
  }),
  /**
   * This determines which anchor prop to refer to when setting
   * the position of the popover.
   * @default 'anchorEl'
   */
  anchorReference: n.oneOf(["anchorEl", "anchorPosition", "none"]),
  /**
   * A backdrop component. This prop enables custom backdrop rendering.
   * @deprecated Use `slots.backdrop` instead. This prop will be removed in v7. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   * @default styled(Backdrop, {
   *   name: 'MuiModal',
   *   slot: 'Backdrop',
   *   overridesResolver: (props, styles) => {
   *     return styles.backdrop;
   *   },
   * })({
   *   zIndex: -1,
   * })
   */
  BackdropComponent: n.elementType,
  /**
   * Props applied to the [`Backdrop`](/material-ui/api/backdrop/) element.
   * @deprecated Use `slotProps.backdrop` instead. This prop will be removed in v7. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   */
  BackdropProps: n.object,
  /**
   * The content of the component.
   */
  children: n.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: n.object,
  /**
   * @ignore
   */
  className: n.string,
  /**
   * An HTML element, component instance, or function that returns either.
   * The `container` will passed to the Modal component.
   *
   * By default, it uses the body of the anchorEl's top-level document object,
   * so it's simply `document.body` most of the time.
   */
  container: n.oneOfType([ht, n.func]),
  /**
   * Disable the scroll lock behavior.
   * @default false
   */
  disableScrollLock: n.bool,
  /**
   * The elevation of the popover.
   * @default 8
   */
  elevation: ri,
  /**
   * Specifies how close to the edge of the window the popover can appear.
   * If null, the popover will not be constrained by the window.
   * @default 16
   */
  marginThreshold: n.number,
  /**
   * Callback fired when the component requests to be closed.
   * The `reason` parameter can optionally be used to control the response to `onClose`.
   */
  onClose: n.func,
  /**
   * If `true`, the component is shown.
   */
  open: n.bool.isRequired,
  /**
   * Props applied to the [`Paper`](https://mui.com/material-ui/api/paper/) element.
   *
   * This prop is an alias for `slotProps.paper` and will be overriden by it if both are used.
   * @deprecated Use `slotProps.paper` instead.
   *
   * @default {}
   */
  PaperProps: n.shape({
    component: On
  }),
  /**
   * The props used for each slot inside.
   * @default {}
   */
  slotProps: n.shape({
    backdrop: n.oneOfType([n.func, n.object]),
    paper: n.oneOfType([n.func, n.object]),
    root: n.oneOfType([n.func, n.object]),
    transition: n.oneOfType([n.func, n.object])
  }),
  /**
   * The components used for each slot inside.
   * @default {}
   */
  slots: n.shape({
    backdrop: n.elementType,
    paper: n.elementType,
    root: n.elementType,
    transition: n.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: n.oneOfType([n.arrayOf(n.oneOfType([n.func, n.object, n.bool])), n.func, n.object]),
  /**
   * This is the point on the popover which
   * will attach to the anchor's origin.
   *
   * Options:
   * vertical: [top, center, bottom, x(px)];
   * horizontal: [left, center, right, x(px)].
   * @default {
   *   vertical: 'top',
   *   horizontal: 'left',
   * }
   */
  transformOrigin: n.shape({
    horizontal: n.oneOfType([n.oneOf(["center", "left", "right"]), n.number]).isRequired,
    vertical: n.oneOfType([n.oneOf(["bottom", "center", "top"]), n.number]).isRequired
  }),
  /**
   * The component used for the transition.
   * [Follow this guide](https://mui.com/material-ui/transitions/#transitioncomponent-prop) to learn more about the requirements for this component.
   * @deprecated use the `slots.transition` prop instead. This prop will be removed in v7. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   * @default Grow
   */
  TransitionComponent: n.elementType,
  /**
   * Set to 'auto' to automatically calculate transition time based on height.
   * @default 'auto'
   */
  transitionDuration: n.oneOfType([n.oneOf(["auto"]), n.number, n.shape({
    appear: n.number,
    enter: n.number,
    exit: n.number
  })]),
  /**
   * Props applied to the transition element.
   * By default, the element is based on this [`Transition`](https://reactcommunity.org/react-transition-group/transition/) component.
   * @deprecated use the `slotProps.transition` prop instead. This prop will be removed in v7. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   * @default {}
   */
  TransitionProps: n.object
});
function cg(e) {
  return ue("MuiMenu", e);
}
le("MuiMenu", ["root", "paper", "list"]);
const pg = {
  vertical: "top",
  horizontal: "right"
}, ug = {
  vertical: "top",
  horizontal: "left"
}, dg = (e) => {
  const {
    classes: t
  } = e;
  return fe({
    root: ["root"],
    paper: ["paper"],
    list: ["list"]
  }, cg, t);
}, fg = H(Ks, {
  shouldForwardProp: (e) => it(e) || e === "classes",
  name: "MuiMenu",
  slot: "Root",
  overridesResolver: (e, t) => t.root
})({}), gg = H(Qs, {
  name: "MuiMenu",
  slot: "Paper",
  overridesResolver: (e, t) => t.paper
})({
  // specZ: The maximum height of a simple menu should be one or more rows less than the view
  // height. This ensures a tappable area outside of the simple menu with which to dismiss
  // the menu.
  maxHeight: "calc(100% - 96px)",
  // Add iOS momentum scrolling for iOS < 13.0
  WebkitOverflowScrolling: "touch"
}), hg = H(Hs, {
  name: "MuiMenu",
  slot: "List",
  overridesResolver: (e, t) => t.list
})({
  // We disable the focus ring for mouse, touch and keyboard users.
  outline: 0
}), Ys = /* @__PURE__ */ g.forwardRef(function(t, o) {
  const r = ge({
    props: t,
    name: "MuiMenu"
  }), {
    autoFocus: i = !0,
    children: a,
    className: l,
    disableAutoFocusItem: s = !1,
    MenuListProps: c = {},
    onClose: p,
    open: d,
    PaperProps: f = {},
    PopoverClasses: h,
    transitionDuration: b = "auto",
    TransitionProps: {
      onEntering: v,
      ...y
    } = {},
    variant: C = "selectedMenu",
    slots: x = {},
    slotProps: E = {},
    ...w
  } = r, m = Co(), T = {
    ...r,
    autoFocus: i,
    disableAutoFocusItem: s,
    MenuListProps: c,
    onEntering: v,
    PaperProps: f,
    transitionDuration: b,
    TransitionProps: y,
    variant: C
  }, A = dg(T), P = i && !s && d, $ = g.useRef(null), D = (j, k) => {
    $.current && $.current.adjustStyleForScrollbar(j, {
      direction: m ? "rtl" : "ltr"
    }), v && v(j, k);
  }, u = (j) => {
    j.key === "Tab" && (j.preventDefault(), p && p(j, "tabKeyDown"));
  };
  let R = -1;
  g.Children.map(a, (j, k) => {
    /* @__PURE__ */ g.isValidElement(j) && (process.env.NODE_ENV !== "production" && qr(j) && console.error(["MUI: The Menu component doesn't accept a Fragment as a child.", "Consider providing an array instead."].join(`
`)), j.props.disabled || (C === "selectedMenu" && j.props.selected || R === -1) && (R = k));
  });
  const B = {
    slots: x,
    slotProps: {
      list: c,
      transition: y,
      paper: f,
      ...E
    }
  }, O = go({
    elementType: x.root,
    externalSlotProps: E.root,
    ownerState: T,
    className: [A.root, l]
  }), [M, N] = se("paper", {
    className: A.paper,
    elementType: gg,
    externalForwardedProps: B,
    shouldForwardComponentProp: !0,
    ownerState: T
  }), [F, W] = se("list", {
    className: Z(A.list, c.className),
    elementType: hg,
    shouldForwardComponentProp: !0,
    externalForwardedProps: B,
    getSlotProps: (j) => ({
      ...j,
      onKeyDown: (k) => {
        var L;
        u(k), (L = j.onKeyDown) == null || L.call(j, k);
      }
    }),
    ownerState: T
  }), U = typeof B.slotProps.transition == "function" ? B.slotProps.transition(T) : B.slotProps.transition;
  return /* @__PURE__ */ S(fg, {
    onClose: p,
    anchorOrigin: {
      vertical: "bottom",
      horizontal: m ? "right" : "left"
    },
    transformOrigin: m ? pg : ug,
    slots: {
      root: x.root,
      paper: M,
      backdrop: x.backdrop,
      ...x.transition && {
        // TODO: pass `slots.transition` directly once `TransitionComponent` is removed from Popover
        transition: x.transition
      }
    },
    slotProps: {
      root: O,
      paper: N,
      backdrop: typeof E.backdrop == "function" ? E.backdrop(T) : E.backdrop,
      transition: {
        ...U,
        onEntering: (...j) => {
          var k;
          D(...j), (k = U == null ? void 0 : U.onEntering) == null || k.call(U, ...j);
        }
      }
    },
    open: d,
    ref: o,
    transitionDuration: b,
    ownerState: T,
    ...w,
    classes: h,
    children: /* @__PURE__ */ S(F, {
      actions: $,
      autoFocus: i && (R === -1 || s),
      autoFocusItem: P,
      variant: C,
      ...W,
      children: a
    })
  });
});
process.env.NODE_ENV !== "production" && (Ys.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * An HTML element, or a function that returns one.
   * It's used to set the position of the menu.
   */
  anchorEl: n.oneOfType([ht, n.func]),
  /**
   * If `true` (Default) will focus the `[role="menu"]` if no focusable child is found. Disabled
   * children are not focusable. If you set this prop to `false` focus will be placed
   * on the parent modal container. This has severe accessibility implications
   * and should only be considered if you manage focus otherwise.
   * @default true
   */
  autoFocus: n.bool,
  /**
   * Menu contents, normally `MenuItem`s.
   */
  children: n.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: n.object,
  /**
   * @ignore
   */
  className: n.string,
  /**
   * When opening the menu will not focus the active item but the `[role="menu"]`
   * unless `autoFocus` is also set to `false`. Not using the default means not
   * following WAI-ARIA authoring practices. Please be considerate about possible
   * accessibility implications.
   * @default false
   */
  disableAutoFocusItem: n.bool,
  /**
   * Props applied to the [`MenuList`](https://mui.com/material-ui/api/menu-list/) element.
   * @deprecated use the `slotProps.list` prop instead. This prop will be removed in v7. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   * @default {}
   */
  MenuListProps: n.object,
  /**
   * Callback fired when the component requests to be closed.
   *
   * @param {object} event The event source of the callback.
   * @param {string} reason Can be: `"escapeKeyDown"`, `"backdropClick"`, `"tabKeyDown"`.
   */
  onClose: n.func,
  /**
   * If `true`, the component is shown.
   */
  open: n.bool.isRequired,
  /**
   * @ignore
   */
  PaperProps: n.object,
  /**
   * `classes` prop applied to the [`Popover`](https://mui.com/material-ui/api/popover/) element.
   */
  PopoverClasses: n.object,
  /**
   * The props used for each slot inside.
   * @default {}
   */
  slotProps: n.shape({
    backdrop: n.oneOfType([n.func, n.object]),
    list: n.oneOfType([n.func, n.object]),
    paper: n.oneOfType([n.func, n.object]),
    root: n.oneOfType([n.func, n.object]),
    transition: n.oneOfType([n.func, n.object])
  }),
  /**
   * The components used for each slot inside.
   * @default {}
   */
  slots: n.shape({
    backdrop: n.elementType,
    list: n.elementType,
    paper: n.elementType,
    root: n.elementType,
    transition: n.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: n.oneOfType([n.arrayOf(n.oneOfType([n.func, n.object, n.bool])), n.func, n.object]),
  /**
   * The length of the transition in `ms`, or 'auto'
   * @default 'auto'
   */
  transitionDuration: n.oneOfType([n.oneOf(["auto"]), n.number, n.shape({
    appear: n.number,
    enter: n.number,
    exit: n.number
  })]),
  /**
   * Props applied to the transition element.
   * By default, the element is based on this [`Transition`](https://reactcommunity.org/react-transition-group/transition/) component.
   * @deprecated use the `slotProps.transition` prop instead. This prop will be removed in v7. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   * @default {}
   */
  TransitionProps: n.object,
  /**
   * The variant to use. Use `menu` to prevent selected items from impacting the initial focus.
   * @default 'selectedMenu'
   */
  variant: n.oneOf(["menu", "selectedMenu"])
});
const bg = H(Ys)(() => ({
  "& .MuiPaper-root": {
    boxShadow: "0px 2px 6px 2px #00000026, 0px 1px 2px 0px #0000004D"
  }
})), cy = ({ open: e, ...t }) => /* @__PURE__ */ S(bg, { open: e, ...t }), wa = le("MuiDivider", ["root", "absolute", "fullWidth", "inset", "middle", "flexItem", "light", "vertical", "withChildren", "withChildrenVertical", "textAlignRight", "textAlignLeft", "wrapper", "wrapperVertical"]), Sa = le("MuiListItemIcon", ["root", "alignItemsFlexStart"]);
function mg(e) {
  return ue("MuiTypography", e);
}
le("MuiTypography", ["root", "h1", "h2", "h3", "h4", "h5", "h6", "subtitle1", "subtitle2", "body1", "body2", "inherit", "button", "caption", "overline", "alignLeft", "alignRight", "alignCenter", "alignJustify", "noWrap", "gutterBottom", "paragraph"]);
const yg = {
  primary: !0,
  secondary: !0,
  error: !0,
  info: !0,
  success: !0,
  warning: !0,
  textPrimary: !0,
  textSecondary: !0,
  textDisabled: !0
}, vg = hu(), Cg = (e) => {
  const {
    align: t,
    gutterBottom: o,
    noWrap: r,
    paragraph: i,
    variant: a,
    classes: l
  } = e, s = {
    root: ["root", a, e.align !== "inherit" && `align${V(t)}`, o && "gutterBottom", r && "noWrap", i && "paragraph"]
  };
  return fe(s, mg, l);
}, xg = H("span", {
  name: "MuiTypography",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: o
    } = e;
    return [t.root, o.variant && t[o.variant], o.align !== "inherit" && t[`align${V(o.align)}`], o.noWrap && t.noWrap, o.gutterBottom && t.gutterBottom, o.paragraph && t.paragraph];
  }
})(de(({
  theme: e
}) => {
  var t;
  return {
    margin: 0,
    variants: [{
      props: {
        variant: "inherit"
      },
      style: {
        // Some elements, like <button> on Chrome have default font that doesn't inherit, reset this.
        font: "inherit",
        lineHeight: "inherit",
        letterSpacing: "inherit"
      }
    }, ...Object.entries(e.typography).filter(([o, r]) => o !== "inherit" && r && typeof r == "object").map(([o, r]) => ({
      props: {
        variant: o
      },
      style: r
    })), ...Object.entries(e.palette).filter(Ie()).map(([o]) => ({
      props: {
        color: o
      },
      style: {
        color: (e.vars || e).palette[o].main
      }
    })), ...Object.entries(((t = e.palette) == null ? void 0 : t.text) || {}).filter(([, o]) => typeof o == "string").map(([o]) => ({
      props: {
        color: `text${V(o)}`
      },
      style: {
        color: (e.vars || e).palette.text[o]
      }
    })), {
      props: ({
        ownerState: o
      }) => o.align !== "inherit",
      style: {
        textAlign: "var(--Typography-textAlign)"
      }
    }, {
      props: ({
        ownerState: o
      }) => o.noWrap,
      style: {
        overflow: "hidden",
        textOverflow: "ellipsis",
        whiteSpace: "nowrap"
      }
    }, {
      props: ({
        ownerState: o
      }) => o.gutterBottom,
      style: {
        marginBottom: "0.35em"
      }
    }, {
      props: ({
        ownerState: o
      }) => o.paragraph,
      style: {
        marginBottom: 16
      }
    }]
  };
})), Ea = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h5",
  h6: "h6",
  subtitle1: "h6",
  subtitle2: "h6",
  body1: "p",
  body2: "p",
  inherit: "p"
}, Gt = /* @__PURE__ */ g.forwardRef(function(t, o) {
  const {
    color: r,
    ...i
  } = ge({
    props: t,
    name: "MuiTypography"
  }), a = !yg[r], l = vg({
    ...i,
    ...a && {
      color: r
    }
  }), {
    align: s = "inherit",
    className: c,
    component: p,
    gutterBottom: d = !1,
    noWrap: f = !1,
    paragraph: h = !1,
    variant: b = "body1",
    variantMapping: v = Ea,
    ...y
  } = l, C = {
    ...l,
    align: s,
    color: r,
    className: c,
    component: p,
    gutterBottom: d,
    noWrap: f,
    paragraph: h,
    variant: b,
    variantMapping: v
  }, x = p || (h ? "p" : v[b] || Ea[b]) || "span", E = Cg(C);
  return /* @__PURE__ */ S(xg, {
    as: x,
    ref: o,
    className: Z(E.root, c),
    ...y,
    ownerState: C,
    style: {
      ...s !== "inherit" && {
        "--Typography-textAlign": s
      },
      ...y.style
    }
  });
});
process.env.NODE_ENV !== "production" && (Gt.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Set the text-align on the component.
   * @default 'inherit'
   */
  align: n.oneOf(["center", "inherit", "justify", "left", "right"]),
  /**
   * The content of the component.
   */
  children: n.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: n.object,
  /**
   * @ignore
   */
  className: n.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   */
  color: n.oneOfType([n.oneOf(["primary", "secondary", "success", "error", "info", "warning", "textPrimary", "textSecondary", "textDisabled"]), n.string]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: n.elementType,
  /**
   * If `true`, the text will have a bottom margin.
   * @default false
   */
  gutterBottom: n.bool,
  /**
   * If `true`, the text will not wrap, but instead will truncate with a text overflow ellipsis.
   *
   * Note that text overflow can only happen with block or inline-block level elements
   * (the element needs to have a width in order to overflow).
   * @default false
   */
  noWrap: n.bool,
  /**
   * If `true`, the element will be a paragraph element.
   * @default false
   * @deprecated Use the `component` prop instead. This prop will be removed in v7. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   */
  paragraph: n.bool,
  /**
   * @ignore
   */
  style: n.object,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: n.oneOfType([n.arrayOf(n.oneOfType([n.func, n.object, n.bool])), n.func, n.object]),
  /**
   * Applies the theme typography styles.
   * @default 'body1'
   */
  variant: n.oneOfType([n.oneOf(["body1", "body2", "button", "caption", "h1", "h2", "h3", "h4", "h5", "h6", "inherit", "overline", "subtitle1", "subtitle2"]), n.string]),
  /**
   * The component maps the variant prop to a range of different HTML element types.
   * For instance, subtitle1 to `<h6>`.
   * If you wish to change that mapping, you can provide your own.
   * Alternatively, you can use the `component` prop.
   * @default {
   *   h1: 'h1',
   *   h2: 'h2',
   *   h3: 'h3',
   *   h4: 'h4',
   *   h5: 'h5',
   *   h6: 'h6',
   *   subtitle1: 'h6',
   *   subtitle2: 'h6',
   *   body1: 'p',
   *   body2: 'p',
   *   inherit: 'p',
   * }
   */
  variantMapping: n.object
});
const Ta = le("MuiListItemText", ["root", "multiline", "dense", "inset", "primary", "secondary"]);
function wg(e) {
  return ue("MuiMenuItem", e);
}
const Ro = le("MuiMenuItem", ["root", "focusVisible", "dense", "disabled", "divider", "gutters", "selected"]), Sg = (e, t) => {
  const {
    ownerState: o
  } = e;
  return [t.root, o.dense && t.dense, o.divider && t.divider, !o.disableGutters && t.gutters];
}, Eg = (e) => {
  const {
    disabled: t,
    dense: o,
    divider: r,
    disableGutters: i,
    selected: a,
    classes: l
  } = e, c = fe({
    root: ["root", o && "dense", t && "disabled", !i && "gutters", r && "divider", a && "selected"]
  }, wg, l);
  return {
    ...l,
    ...c
  };
}, Tg = H(lt, {
  shouldForwardProp: (e) => it(e) || e === "classes",
  name: "MuiMenuItem",
  slot: "Root",
  overridesResolver: Sg
})(de(({
  theme: e
}) => ({
  ...e.typography.body1,
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "center",
  position: "relative",
  textDecoration: "none",
  minHeight: 48,
  paddingTop: 6,
  paddingBottom: 6,
  boxSizing: "border-box",
  whiteSpace: "nowrap",
  "&:hover": {
    textDecoration: "none",
    backgroundColor: (e.vars || e).palette.action.hover,
    // Reset on touch devices, it doesn't add specificity
    "@media (hover: none)": {
      backgroundColor: "transparent"
    }
  },
  [`&.${Ro.selected}`]: {
    backgroundColor: e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})` : q(e.palette.primary.main, e.palette.action.selectedOpacity),
    [`&.${Ro.focusVisible}`]: {
      backgroundColor: e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))` : q(e.palette.primary.main, e.palette.action.selectedOpacity + e.palette.action.focusOpacity)
    }
  },
  [`&.${Ro.selected}:hover`]: {
    backgroundColor: e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))` : q(e.palette.primary.main, e.palette.action.selectedOpacity + e.palette.action.hoverOpacity),
    // Reset on touch devices, it doesn't add specificity
    "@media (hover: none)": {
      backgroundColor: e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})` : q(e.palette.primary.main, e.palette.action.selectedOpacity)
    }
  },
  [`&.${Ro.focusVisible}`]: {
    backgroundColor: (e.vars || e).palette.action.focus
  },
  [`&.${Ro.disabled}`]: {
    opacity: (e.vars || e).palette.action.disabledOpacity
  },
  [`& + .${wa.root}`]: {
    marginTop: e.spacing(1),
    marginBottom: e.spacing(1)
  },
  [`& + .${wa.inset}`]: {
    marginLeft: 52
  },
  [`& .${Ta.root}`]: {
    marginTop: 0,
    marginBottom: 0
  },
  [`& .${Ta.inset}`]: {
    paddingLeft: 36
  },
  [`& .${Sa.root}`]: {
    minWidth: 36
  },
  variants: [{
    props: ({
      ownerState: t
    }) => !t.disableGutters,
    style: {
      paddingLeft: 16,
      paddingRight: 16
    }
  }, {
    props: ({
      ownerState: t
    }) => t.divider,
    style: {
      borderBottom: `1px solid ${(e.vars || e).palette.divider}`,
      backgroundClip: "padding-box"
    }
  }, {
    props: ({
      ownerState: t
    }) => !t.dense,
    style: {
      [e.breakpoints.up("sm")]: {
        minHeight: "auto"
      }
    }
  }, {
    props: ({
      ownerState: t
    }) => t.dense,
    style: {
      minHeight: 32,
      // https://m2.material.io/components/menus#specs > Dense
      paddingTop: 4,
      paddingBottom: 4,
      ...e.typography.body2,
      [`& .${Sa.root} svg`]: {
        fontSize: "1.25rem"
      }
    }
  }]
}))), Gs = /* @__PURE__ */ g.forwardRef(function(t, o) {
  const r = ge({
    props: t,
    name: "MuiMenuItem"
  }), {
    autoFocus: i = !1,
    component: a = "li",
    dense: l = !1,
    divider: s = !1,
    disableGutters: c = !1,
    focusVisibleClassName: p,
    role: d = "menuitem",
    tabIndex: f,
    className: h,
    ...b
  } = r, v = g.useContext(Mn), y = g.useMemo(() => ({
    dense: l || v.dense || !1,
    disableGutters: c
  }), [v.dense, l, c]), C = g.useRef(null);
  gt(() => {
    i && (C.current ? C.current.focus() : process.env.NODE_ENV !== "production" && console.error("MUI: Unable to set focus to a MenuItem whose component has not been rendered."));
  }, [i]);
  const x = {
    ...r,
    dense: y.dense,
    divider: s,
    disableGutters: c
  }, E = Eg(r), w = Ne(C, o);
  let m;
  return r.disabled || (m = f !== void 0 ? f : -1), /* @__PURE__ */ S(Mn.Provider, {
    value: y,
    children: /* @__PURE__ */ S(Tg, {
      ref: w,
      role: d,
      tabIndex: m,
      component: a,
      focusVisibleClassName: Z(E.focusVisible, p),
      className: Z(E.root, h),
      ...b,
      ownerState: x,
      classes: E
    })
  });
});
process.env.NODE_ENV !== "production" && (Gs.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * If `true`, the list item is focused during the first mount.
   * Focus will also be triggered if the value changes from false to true.
   * @default false
   */
  autoFocus: n.bool,
  /**
   * The content of the component.
   */
  children: n.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: n.object,
  /**
   * @ignore
   */
  className: n.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: n.elementType,
  /**
   * If `true`, compact vertical padding designed for keyboard and mouse input is used.
   * The prop defaults to the value inherited from the parent Menu component.
   * @default false
   */
  dense: n.bool,
  /**
   * @ignore
   */
  disabled: n.bool,
  /**
   * If `true`, the left and right padding is removed.
   * @default false
   */
  disableGutters: n.bool,
  /**
   * If `true`, a 1px light border is added to the bottom of the menu item.
   * @default false
   */
  divider: n.bool,
  /**
   * This prop can help identify which element has keyboard focus.
   * The class name will be applied when the element gains the focus through keyboard interaction.
   * It's a polyfill for the [CSS :focus-visible selector](https://drafts.csswg.org/selectors-4/#the-focus-visible-pseudo).
   * The rationale for using this feature [is explained here](https://github.com/WICG/focus-visible/blob/HEAD/explainer.md).
   * A [polyfill can be used](https://github.com/WICG/focus-visible) to apply a `focus-visible` class to other components
   * if needed.
   */
  focusVisibleClassName: n.string,
  /**
   * @ignore
   */
  role: n.string,
  /**
   * If `true`, the component is selected.
   * @default false
   */
  selected: n.bool,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: n.oneOfType([n.arrayOf(n.oneOfType([n.func, n.object, n.bool])), n.func, n.object]),
  /**
   * @default 0
   */
  tabIndex: n.number
});
const Og = (e, t = "primary") => {
  var i;
  const o = Pe[t], r = ((i = e == null ? void 0 : e.palette) == null ? void 0 : i[t]) ?? o;
  return {
    fontColor: r.menuFont ?? o.menuFont,
    selectedBg: r.tonal ?? o.tonal,
    selectedFont: r.onTonal ?? o.onTonal
  };
}, Ag = H(
  Gs,
  {}
)(({ theme: e }) => {
  const t = Og(e);
  return {
    fontFamily: "Noto Sans, Noto Sans TC, sans-serif",
    color: t.fontColor,
    "&:hover": {
      backgroundColor: q(t.fontColor, 0.08)
    },
    "&.Mui-selected": {
      backgroundColor: t.selectedBg,
      color: t.selectedFont
    },
    "& .MuiTouchRipple-root": {
      display: "none"
    }
  };
}), py = ({ ...e }) => /* @__PURE__ */ S(Ag, { ...e });
function kg(e) {
  return ue("MuiDialog", e);
}
const Ar = le("MuiDialog", ["root", "scrollPaper", "scrollBody", "container", "paper", "paperScrollPaper", "paperScrollBody", "paperWidthFalse", "paperWidthXs", "paperWidthSm", "paperWidthMd", "paperWidthLg", "paperWidthXl", "paperFullWidth", "paperFullScreen"]), di = /* @__PURE__ */ g.createContext({});
process.env.NODE_ENV !== "production" && (di.displayName = "DialogContext");
const Rg = H(ui, {
  name: "MuiDialog",
  slot: "Backdrop",
  overrides: (e, t) => t.backdrop
})({
  // Improve scrollable dialog support.
  zIndex: -1
}), Fg = (e) => {
  const {
    classes: t,
    scroll: o,
    maxWidth: r,
    fullWidth: i,
    fullScreen: a
  } = e, l = {
    root: ["root"],
    container: ["container", `scroll${V(o)}`],
    paper: ["paper", `paperScroll${V(o)}`, `paperWidth${V(String(r))}`, i && "paperFullWidth", a && "paperFullScreen"]
  };
  return fe(l, kg, t);
}, Pg = H(_n, {
  name: "MuiDialog",
  slot: "Root",
  overridesResolver: (e, t) => t.root
})({
  "@media print": {
    // Use !important to override the Modal inline-style.
    position: "absolute !important"
  }
}), Bg = H("div", {
  name: "MuiDialog",
  slot: "Container",
  overridesResolver: (e, t) => {
    const {
      ownerState: o
    } = e;
    return [t.container, t[`scroll${V(o.scroll)}`]];
  }
})({
  height: "100%",
  "@media print": {
    height: "auto"
  },
  // We disable the focus ring for mouse, touch and keyboard users.
  outline: 0,
  variants: [{
    props: {
      scroll: "paper"
    },
    style: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    }
  }, {
    props: {
      scroll: "body"
    },
    style: {
      overflowY: "auto",
      overflowX: "hidden",
      textAlign: "center",
      "&::after": {
        content: '""',
        display: "inline-block",
        verticalAlign: "middle",
        height: "100%",
        width: "0"
      }
    }
  }]
}), Mg = H(xo, {
  name: "MuiDialog",
  slot: "Paper",
  overridesResolver: (e, t) => {
    const {
      ownerState: o
    } = e;
    return [t.paper, t[`scrollPaper${V(o.scroll)}`], t[`paperWidth${V(String(o.maxWidth))}`], o.fullWidth && t.paperFullWidth, o.fullScreen && t.paperFullScreen];
  }
})(de(({
  theme: e
}) => ({
  margin: 32,
  position: "relative",
  overflowY: "auto",
  "@media print": {
    overflowY: "visible",
    boxShadow: "none"
  },
  variants: [{
    props: {
      scroll: "paper"
    },
    style: {
      display: "flex",
      flexDirection: "column",
      maxHeight: "calc(100% - 64px)"
    }
  }, {
    props: {
      scroll: "body"
    },
    style: {
      display: "inline-block",
      verticalAlign: "middle",
      textAlign: "initial"
    }
  }, {
    props: ({
      ownerState: t
    }) => !t.maxWidth,
    style: {
      maxWidth: "calc(100% - 64px)"
    }
  }, {
    props: {
      maxWidth: "xs"
    },
    style: {
      maxWidth: e.breakpoints.unit === "px" ? Math.max(e.breakpoints.values.xs, 444) : `max(${e.breakpoints.values.xs}${e.breakpoints.unit}, 444px)`,
      [`&.${Ar.paperScrollBody}`]: {
        [e.breakpoints.down(Math.max(e.breakpoints.values.xs, 444) + 32 * 2)]: {
          maxWidth: "calc(100% - 64px)"
        }
      }
    }
  }, ...Object.keys(e.breakpoints.values).filter((t) => t !== "xs").map((t) => ({
    props: {
      maxWidth: t
    },
    style: {
      maxWidth: `${e.breakpoints.values[t]}${e.breakpoints.unit}`,
      [`&.${Ar.paperScrollBody}`]: {
        [e.breakpoints.down(e.breakpoints.values[t] + 32 * 2)]: {
          maxWidth: "calc(100% - 64px)"
        }
      }
    }
  })), {
    props: ({
      ownerState: t
    }) => t.fullWidth,
    style: {
      width: "calc(100% - 64px)"
    }
  }, {
    props: ({
      ownerState: t
    }) => t.fullScreen,
    style: {
      margin: 0,
      width: "100%",
      maxWidth: "100%",
      height: "100%",
      maxHeight: "none",
      borderRadius: 0,
      [`&.${Ar.paperScrollBody}`]: {
        margin: 0,
        maxWidth: "100%"
      }
    }
  }]
}))), qs = /* @__PURE__ */ g.forwardRef(function(t, o) {
  const r = ge({
    props: t,
    name: "MuiDialog"
  }), i = rt(), a = {
    enter: i.transitions.duration.enteringScreen,
    exit: i.transitions.duration.leavingScreen
  }, {
    "aria-describedby": l,
    "aria-labelledby": s,
    "aria-modal": c = !0,
    BackdropComponent: p,
    BackdropProps: d,
    children: f,
    className: h,
    disableEscapeKeyDown: b = !1,
    fullScreen: v = !1,
    fullWidth: y = !1,
    maxWidth: C = "sm",
    onBackdropClick: x,
    onClick: E,
    onClose: w,
    open: m,
    PaperComponent: T = xo,
    PaperProps: A = {},
    scroll: P = "paper",
    slots: $ = {},
    slotProps: D = {},
    TransitionComponent: u = Dn,
    transitionDuration: R = a,
    TransitionProps: B,
    ...O
  } = r, M = {
    ...r,
    disableEscapeKeyDown: b,
    fullScreen: v,
    fullWidth: y,
    maxWidth: C,
    scroll: P
  }, N = Fg(M), F = g.useRef(), W = (pe) => {
    F.current = pe.target === pe.currentTarget;
  }, U = (pe) => {
    E && E(pe), F.current && (F.current = null, x && x(pe), w && w(pe, "backdropClick"));
  }, j = tn(s), k = g.useMemo(() => ({
    titleId: j
  }), [j]), L = {
    transition: u,
    ...$
  }, oe = {
    transition: B,
    paper: A,
    backdrop: d,
    ...D
  }, ee = {
    slots: L,
    slotProps: oe
  }, [Y, K] = se("root", {
    elementType: Pg,
    shouldForwardComponentProp: !0,
    externalForwardedProps: ee,
    ownerState: M,
    className: Z(N.root, h),
    ref: o
  }), [G, z] = se("backdrop", {
    elementType: Rg,
    shouldForwardComponentProp: !0,
    externalForwardedProps: ee,
    ownerState: M
  }), [te, ne] = se("paper", {
    elementType: Mg,
    shouldForwardComponentProp: !0,
    externalForwardedProps: ee,
    ownerState: M,
    className: Z(N.paper, A.className)
  }), [Q, J] = se("container", {
    elementType: Bg,
    externalForwardedProps: ee,
    ownerState: M,
    className: Z(N.container)
  }), [X, ce] = se("transition", {
    elementType: Dn,
    externalForwardedProps: ee,
    ownerState: M,
    additionalProps: {
      appear: !0,
      in: m,
      timeout: R,
      role: "presentation"
    }
  });
  return /* @__PURE__ */ S(Y, {
    closeAfterTransition: !0,
    slots: {
      backdrop: G
    },
    slotProps: {
      backdrop: {
        transitionDuration: R,
        as: p,
        ...z
      }
    },
    disableEscapeKeyDown: b,
    onClose: w,
    open: m,
    onClick: U,
    ...K,
    ...O,
    children: /* @__PURE__ */ S(X, {
      ...ce,
      children: /* @__PURE__ */ S(Q, {
        onMouseDown: W,
        ...J,
        children: /* @__PURE__ */ S(te, {
          as: T,
          elevation: 24,
          role: "dialog",
          "aria-describedby": l,
          "aria-labelledby": j,
          "aria-modal": c,
          ...ne,
          children: /* @__PURE__ */ S(di.Provider, {
            value: k,
            children: f
          })
        })
      })
    })
  });
});
process.env.NODE_ENV !== "production" && (qs.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The id(s) of the element(s) that describe the dialog.
   */
  "aria-describedby": n.string,
  /**
   * The id(s) of the element(s) that label the dialog.
   */
  "aria-labelledby": n.string,
  /**
   * Informs assistive technologies that the element is modal.
   * It's added on the element with role="dialog".
   * @default true
   */
  "aria-modal": n.oneOfType([n.oneOf(["false", "true"]), n.bool]),
  /**
   * A backdrop component. This prop enables custom backdrop rendering.
   * @deprecated Use `slots.backdrop` instead. While this prop currently works, it will be removed in the next major version.
   * Use the `slots.backdrop` prop to make your application ready for the next version of Material UI.
   * @default styled(Backdrop, {
   *   name: 'MuiModal',
   *   slot: 'Backdrop',
   *   overridesResolver: (props, styles) => {
   *     return styles.backdrop;
   *   },
   * })({
   *   zIndex: -1,
   * })
   */
  BackdropComponent: n.elementType,
  /**
   * @ignore
   */
  BackdropProps: n.object,
  /**
   * Dialog children, usually the included sub-components.
   */
  children: n.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: n.object,
  /**
   * @ignore
   */
  className: n.string,
  /**
   * If `true`, hitting escape will not fire the `onClose` callback.
   * @default false
   */
  disableEscapeKeyDown: n.bool,
  /**
   * If `true`, the dialog is full-screen.
   * @default false
   */
  fullScreen: n.bool,
  /**
   * If `true`, the dialog stretches to `maxWidth`.
   *
   * Notice that the dialog width grow is limited by the default margin.
   * @default false
   */
  fullWidth: n.bool,
  /**
   * Determine the max-width of the dialog.
   * The dialog width grows with the size of the screen.
   * Set to `false` to disable `maxWidth`.
   * @default 'sm'
   */
  maxWidth: n.oneOfType([n.oneOf(["xs", "sm", "md", "lg", "xl", !1]), n.string]),
  /**
   * Callback fired when the backdrop is clicked.
   * @deprecated Use the `onClose` prop with the `reason` argument to handle the `backdropClick` events.
   */
  onBackdropClick: n.func,
  /**
   * @ignore
   */
  onClick: n.func,
  /**
   * Callback fired when the component requests to be closed.
   *
   * @param {object} event The event source of the callback.
   * @param {string} reason Can be: `"escapeKeyDown"`, `"backdropClick"`.
   */
  onClose: n.func,
  /**
   * If `true`, the component is shown.
   */
  open: n.bool.isRequired,
  /**
   * The component used to render the body of the dialog.
   * @default Paper
   */
  PaperComponent: n.elementType,
  /**
   * Props applied to the [`Paper`](https://mui.com/material-ui/api/paper/) element.
   * @default {}
   * @deprecated Use `slotProps.paper` instead. This prop will be removed in v7. See [Migrating from deprecated APIs](/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   */
  PaperProps: n.object,
  /**
   * Determine the container for scrolling the dialog.
   * @default 'paper'
   */
  scroll: n.oneOf(["body", "paper"]),
  /**
   * The props used for each slot inside.
   * @default {}
   */
  slotProps: n.shape({
    backdrop: n.oneOfType([n.func, n.object]),
    container: n.oneOfType([n.func, n.object]),
    paper: n.oneOfType([n.func, n.object]),
    root: n.oneOfType([n.func, n.object]),
    transition: n.oneOfType([n.func, n.object])
  }),
  /**
   * The components used for each slot inside.
   * @default {}
   */
  slots: n.shape({
    backdrop: n.elementType,
    container: n.elementType,
    paper: n.elementType,
    root: n.elementType,
    transition: n.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: n.oneOfType([n.arrayOf(n.oneOfType([n.func, n.object, n.bool])), n.func, n.object]),
  /**
   * The component used for the transition.
   * [Follow this guide](https://mui.com/material-ui/transitions/#transitioncomponent-prop) to learn more about the requirements for this component.
   * @default Fade
   * @deprecated Use `slots.transition` instead. This prop will be removed in v7. See [Migrating from deprecated APIs](/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   */
  TransitionComponent: n.elementType,
  /**
   * The duration for the transition, in milliseconds.
   * You may specify a single timeout for all transitions, or individually with an object.
   * @default {
   *   enter: theme.transitions.duration.enteringScreen,
   *   exit: theme.transitions.duration.leavingScreen,
   * }
   */
  transitionDuration: n.oneOfType([n.number, n.shape({
    appear: n.number,
    enter: n.number,
    exit: n.number
  })]),
  /**
   * Props applied to the transition element.
   * By default, the element is based on this [`Transition`](https://reactcommunity.org/react-transition-group/transition/) component.
   * @deprecated Use `slotProps.transition` instead. This prop will be removed in v7. See [Migrating from deprecated APIs](/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   */
  TransitionProps: n.object
});
function Ig(e) {
  return ue("MuiDialogContent", e);
}
le("MuiDialogContent", ["root", "dividers"]);
function Dg(e) {
  return ue("MuiDialogTitle", e);
}
const Ng = le("MuiDialogTitle", ["root"]), $g = (e) => {
  const {
    classes: t,
    dividers: o
  } = e;
  return fe({
    root: ["root", o && "dividers"]
  }, Ig, t);
}, jg = H("div", {
  name: "MuiDialogContent",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: o
    } = e;
    return [t.root, o.dividers && t.dividers];
  }
})(de(({
  theme: e
}) => ({
  flex: "1 1 auto",
  // Add iOS momentum scrolling for iOS < 13.0
  WebkitOverflowScrolling: "touch",
  overflowY: "auto",
  padding: "20px 24px",
  variants: [{
    props: ({
      ownerState: t
    }) => t.dividers,
    style: {
      padding: "16px 24px",
      borderTop: `1px solid ${(e.vars || e).palette.divider}`,
      borderBottom: `1px solid ${(e.vars || e).palette.divider}`
    }
  }, {
    props: ({
      ownerState: t
    }) => !t.dividers,
    style: {
      [`.${Ng.root} + &`]: {
        paddingTop: 0
      }
    }
  }]
}))), Xs = /* @__PURE__ */ g.forwardRef(function(t, o) {
  const r = ge({
    props: t,
    name: "MuiDialogContent"
  }), {
    className: i,
    dividers: a = !1,
    ...l
  } = r, s = {
    ...r,
    dividers: a
  }, c = $g(s);
  return /* @__PURE__ */ S(jg, {
    className: Z(c.root, i),
    ownerState: s,
    ref: o,
    ...l
  });
});
process.env.NODE_ENV !== "production" && (Xs.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: n.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: n.object,
  /**
   * @ignore
   */
  className: n.string,
  /**
   * Display the top and bottom dividers.
   * @default false
   */
  dividers: n.bool,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: n.oneOfType([n.arrayOf(n.oneOfType([n.func, n.object, n.bool])), n.func, n.object])
});
function zg(e) {
  return ue("MuiDialogContentText", e);
}
le("MuiDialogContentText", ["root"]);
const Lg = (e) => {
  const {
    classes: t
  } = e, r = fe({
    root: ["root"]
  }, zg, t);
  return {
    ...t,
    // forward classes to the Typography
    ...r
  };
}, Vg = H(Gt, {
  shouldForwardProp: (e) => it(e) || e === "classes",
  name: "MuiDialogContentText",
  slot: "Root",
  overridesResolver: (e, t) => t.root
})({}), Js = /* @__PURE__ */ g.forwardRef(function(t, o) {
  const r = ge({
    props: t,
    name: "MuiDialogContentText"
  }), {
    children: i,
    className: a,
    ...l
  } = r, s = Lg(l);
  return /* @__PURE__ */ S(Vg, {
    component: "p",
    variant: "body1",
    color: "textSecondary",
    ref: o,
    ownerState: l,
    className: Z(s.root, a),
    ...r,
    classes: s
  });
});
process.env.NODE_ENV !== "production" && (Js.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: n.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: n.object,
  /**
   * @ignore
   */
  className: n.string,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: n.oneOfType([n.arrayOf(n.oneOfType([n.func, n.object, n.bool])), n.func, n.object])
});
const Wg = (e) => {
  const {
    classes: t
  } = e;
  return fe({
    root: ["root"]
  }, Dg, t);
}, Ug = H(Gt, {
  name: "MuiDialogTitle",
  slot: "Root",
  overridesResolver: (e, t) => t.root
})({
  padding: "16px 24px",
  flex: "0 0 auto"
}), Go = /* @__PURE__ */ g.forwardRef(function(t, o) {
  const r = ge({
    props: t,
    name: "MuiDialogTitle"
  }), {
    className: i,
    id: a,
    ...l
  } = r, s = r, c = Wg(s), {
    titleId: p = a
  } = g.useContext(di);
  return /* @__PURE__ */ S(Ug, {
    component: "h2",
    className: Z(c.root, i),
    ownerState: s,
    ref: o,
    variant: "h6",
    id: a ?? p,
    ...l
  });
});
process.env.NODE_ENV !== "production" && (Go.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: n.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: n.object,
  /**
   * @ignore
   */
  className: n.string,
  /**
   * @ignore
   */
  id: n.string,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: n.oneOfType([n.arrayOf(n.oneOfType([n.func, n.object, n.bool])), n.func, n.object])
});
function Hg(e) {
  return ue("MuiDialogActions", e);
}
le("MuiDialogActions", ["root", "spacing"]);
const Qg = (e) => {
  const {
    classes: t,
    disableSpacing: o
  } = e;
  return fe({
    root: ["root", !o && "spacing"]
  }, Hg, t);
}, Kg = H("div", {
  name: "MuiDialogActions",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: o
    } = e;
    return [t.root, !o.disableSpacing && t.spacing];
  }
})({
  display: "flex",
  alignItems: "center",
  padding: 8,
  justifyContent: "flex-end",
  flex: "0 0 auto",
  variants: [{
    props: ({
      ownerState: e
    }) => !e.disableSpacing,
    style: {
      "& > :not(style) ~ :not(style)": {
        marginLeft: 8
      }
    }
  }]
}), Zs = /* @__PURE__ */ g.forwardRef(function(t, o) {
  const r = ge({
    props: t,
    name: "MuiDialogActions"
  }), {
    className: i,
    disableSpacing: a = !1,
    ...l
  } = r, s = {
    ...r,
    disableSpacing: a
  }, c = Qg(s);
  return /* @__PURE__ */ S(Kg, {
    className: Z(c.root, i),
    ownerState: s,
    ref: o,
    ...l
  });
});
process.env.NODE_ENV !== "production" && (Zs.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: n.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: n.object,
  /**
   * @ignore
   */
  className: n.string,
  /**
   * If `true`, the actions do not have additional margin.
   * @default false
   */
  disableSpacing: n.bool,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: n.oneOfType([n.arrayOf(n.oneOfType([n.func, n.object, n.bool])), n.func, n.object])
});
const fi = ze(/* @__PURE__ */ S("path", {
  d: "M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
}), "Close"), Yg = (e, t = "primary") => {
  var i;
  const o = Pe[t];
  return {
    fontColor: (((i = e == null ? void 0 : e.palette) == null ? void 0 : i[t]) ?? o).menuFont ?? o.menuFont
  };
}, Gg = {
  desktop: {
    small: "440px",
    medium: "600px",
    large: "800px",
    extraLarge: "1200px"
  },
  tablet: {
    small: "320px",
    medium: "458px",
    large: "640px",
    extraLarge: "640px"
  },
  mobile: "320px"
}, qg = H(qs)(({ size: e = "medium", deviceType: t = "desktop" }) => {
  const o = Gg[t];
  return {
    // width: Size,
    "& .MuiDialog-paper": {
      borderRadius: 12,
      width: typeof o == "string" ? o : o[e],
      padding: "24px 36px"
    }
  };
}), uy = ({
  icon: e,
  title: t,
  content: o,
  actions: r,
  size: i,
  align: a = "center",
  deviceType: l = "desktop",
  ...s
}) => {
  const c = rt(), p = Yg(c);
  return /* @__PURE__ */ ye(qg, { size: i, deviceType: l, ...s, maxWidth: "lg", children: [
    /* @__PURE__ */ S(
      Jt,
      {
        "aria-label": "close",
        onClick: (d) => {
          var f;
          return (f = s.onClose) == null ? void 0 : f.call(s, d, "escapeKeyDown");
        },
        sx: {
          position: "absolute",
          right: 16,
          top: 16
        },
        children: /* @__PURE__ */ S(fi, {})
      }
    ),
    e && /* @__PURE__ */ S(
      Go,
      {
        color: p.fontColor,
        sx: {
          fontSize: "48px",
          height: "80px",
          p: 0,
          textAlign: a
        },
        children: e
      }
    ),
    t && /* @__PURE__ */ S(
      Go,
      {
        sx: { p: 0, textAlign: a, fontSize: "20px", fontWeight: 600 },
        color: p.fontColor,
        children: t
      }
    ),
    o && /* @__PURE__ */ S(Xs, { sx: { p: 0 }, children: /* @__PURE__ */ S(
      Js,
      {
        color: p.fontColor,
        sx: { textAlign: a, fontSize: "14px", fontWeight: 400 },
        children: o
      }
    ) }),
    r && /* @__PURE__ */ S(
      Zs,
      {
        sx: {
          justifyContent: a === "center" ? "center" : "flex-end",
          p: 0
        },
        children: r
      }
    )
  ] });
};
function Xg(e, t, o) {
  const r = t.getBoundingClientRect(), i = o && o.getBoundingClientRect(), a = We(t);
  let l;
  if (t.fakeTransform)
    l = t.fakeTransform;
  else {
    const p = a.getComputedStyle(t);
    l = p.getPropertyValue("-webkit-transform") || p.getPropertyValue("transform");
  }
  let s = 0, c = 0;
  if (l && l !== "none" && typeof l == "string") {
    const p = l.split("(")[1].split(")")[0].split(",");
    s = parseInt(p[4], 10), c = parseInt(p[5], 10);
  }
  return e === "left" ? i ? `translateX(${i.right + s - r.left}px)` : `translateX(${a.innerWidth + s - r.left}px)` : e === "right" ? i ? `translateX(-${r.right - i.left - s}px)` : `translateX(-${r.left + r.width - s}px)` : e === "up" ? i ? `translateY(${i.bottom + c - r.top}px)` : `translateY(${a.innerHeight + c - r.top}px)` : i ? `translateY(-${r.top - i.top + r.height - c}px)` : `translateY(-${r.top + r.height - c}px)`;
}
function _s(e) {
  return typeof e == "function" ? e() : e;
}
function dn(e, t, o) {
  const r = _s(o), i = Xg(e, t, r);
  i && (t.style.webkitTransform = i, t.style.transform = i);
}
const el = /* @__PURE__ */ g.forwardRef(function(t, o) {
  const r = rt(), i = {
    enter: r.transitions.easing.easeOut,
    exit: r.transitions.easing.sharp
  }, a = {
    enter: r.transitions.duration.enteringScreen,
    exit: r.transitions.duration.leavingScreen
  }, {
    addEndListener: l,
    appear: s = !0,
    children: c,
    container: p,
    direction: d = "down",
    easing: f = i,
    in: h,
    onEnter: b,
    onEntered: v,
    onEntering: y,
    onExit: C,
    onExited: x,
    onExiting: E,
    style: w,
    timeout: m = a,
    // eslint-disable-next-line react/prop-types
    TransitionComponent: T = ct,
    ...A
  } = t, P = g.useRef(null), $ = Ne(vo(c), P, o), D = (U) => (j) => {
    U && (j === void 0 ? U(P.current) : U(P.current, j));
  }, u = D((U, j) => {
    dn(d, U, p), pi(U), b && b(U, j);
  }), R = D((U, j) => {
    const k = Yt({
      timeout: m,
      style: w,
      easing: f
    }, {
      mode: "enter"
    });
    U.style.webkitTransition = r.transitions.create("-webkit-transform", {
      ...k
    }), U.style.transition = r.transitions.create("transform", {
      ...k
    }), U.style.webkitTransform = "none", U.style.transform = "none", y && y(U, j);
  }), B = D(v), O = D(E), M = D((U) => {
    const j = Yt({
      timeout: m,
      style: w,
      easing: f
    }, {
      mode: "exit"
    });
    U.style.webkitTransition = r.transitions.create("-webkit-transform", j), U.style.transition = r.transitions.create("transform", j), dn(d, U, p), C && C(U);
  }), N = D((U) => {
    U.style.webkitTransition = "", U.style.transition = "", x && x(U);
  }), F = (U) => {
    l && l(P.current, U);
  }, W = g.useCallback(() => {
    P.current && dn(d, P.current, p);
  }, [d, p]);
  return g.useEffect(() => {
    if (h || d === "down" || d === "right")
      return;
    const U = qn(() => {
      P.current && dn(d, P.current, p);
    }), j = We(P.current);
    return j.addEventListener("resize", U), () => {
      U.clear(), j.removeEventListener("resize", U);
    };
  }, [d, h, p]), g.useEffect(() => {
    h || W();
  }, [h, W]), /* @__PURE__ */ S(T, {
    nodeRef: P,
    onEnter: u,
    onEntered: B,
    onEntering: R,
    onExit: M,
    onExited: N,
    onExiting: O,
    addEndListener: F,
    appear: s,
    in: h,
    timeout: m,
    ...A,
    children: (U, {
      ownerState: j,
      ...k
    }) => /* @__PURE__ */ g.cloneElement(c, {
      ref: $,
      style: {
        visibility: U === "exited" && !h ? "hidden" : void 0,
        ...w,
        ...c.props.style
      },
      ...k
    })
  });
});
process.env.NODE_ENV !== "production" && (el.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Add a custom transition end trigger. Called with the transitioning DOM
   * node and a done callback. Allows for more fine grained transition end
   * logic. Note: Timeouts are still used as a fallback if provided.
   */
  addEndListener: n.func,
  /**
   * Perform the enter transition when it first mounts if `in` is also `true`.
   * Set this to `false` to disable this behavior.
   * @default true
   */
  appear: n.bool,
  /**
   * A single child content element.
   */
  children: Xt.isRequired,
  /**
   * An HTML element, or a function that returns one.
   * It's used to set the container the Slide is transitioning from.
   */
  container: Et(n.oneOfType([ht, n.func]), (e) => {
    if (e.open) {
      const t = _s(e.container);
      if (t && t.nodeType === 1) {
        const o = t.getBoundingClientRect();
        if (process.env.NODE_ENV !== "test" && o.top === 0 && o.left === 0 && o.right === 0 && o.bottom === 0)
          return new Error(["MUI: The `container` prop provided to the component is invalid.", "The anchor element should be part of the document layout.", "Make sure the element is present in the document or that it's not display none."].join(`
`));
      } else if (!t || typeof t.getBoundingClientRect != "function" || t.contextElement != null && t.contextElement.nodeType !== 1)
        return new Error(["MUI: The `container` prop provided to the component is invalid.", "It should be an HTML element instance."].join(`
`));
    }
    return null;
  }),
  /**
   * Direction the child node will enter from.
   * @default 'down'
   */
  direction: n.oneOf(["down", "left", "right", "up"]),
  /**
   * The transition timing function.
   * You may specify a single easing or a object containing enter and exit values.
   * @default {
   *   enter: theme.transitions.easing.easeOut,
   *   exit: theme.transitions.easing.sharp,
   * }
   */
  easing: n.oneOfType([n.shape({
    enter: n.string,
    exit: n.string
  }), n.string]),
  /**
   * If `true`, the component will transition in.
   */
  in: n.bool,
  /**
   * @ignore
   */
  onEnter: n.func,
  /**
   * @ignore
   */
  onEntered: n.func,
  /**
   * @ignore
   */
  onEntering: n.func,
  /**
   * @ignore
   */
  onExit: n.func,
  /**
   * @ignore
   */
  onExited: n.func,
  /**
   * @ignore
   */
  onExiting: n.func,
  /**
   * @ignore
   */
  style: n.object,
  /**
   * The duration for the transition, in milliseconds.
   * You may specify a single timeout for all transitions, or individually with an object.
   * @default {
   *   enter: theme.transitions.duration.enteringScreen,
   *   exit: theme.transitions.duration.leavingScreen,
   * }
   */
  timeout: n.oneOfType([n.number, n.shape({
    appear: n.number,
    enter: n.number,
    exit: n.number
  })])
});
function Jg(e) {
  return ue("MuiDrawer", e);
}
le("MuiDrawer", ["root", "docked", "paper", "anchorLeft", "anchorRight", "anchorTop", "anchorBottom", "paperAnchorLeft", "paperAnchorRight", "paperAnchorTop", "paperAnchorBottom", "paperAnchorDockedLeft", "paperAnchorDockedRight", "paperAnchorDockedTop", "paperAnchorDockedBottom", "modal"]);
const tl = (e, t) => {
  const {
    ownerState: o
  } = e;
  return [t.root, (o.variant === "permanent" || o.variant === "persistent") && t.docked, t.modal];
}, Zg = (e) => {
  const {
    classes: t,
    anchor: o,
    variant: r
  } = e, i = {
    root: ["root", `anchor${V(o)}`],
    docked: [(r === "permanent" || r === "persistent") && "docked"],
    modal: ["modal"],
    paper: ["paper", `paperAnchor${V(o)}`, r !== "temporary" && `paperAnchorDocked${V(o)}`]
  };
  return fe(i, Jg, t);
}, _g = H(_n, {
  name: "MuiDrawer",
  slot: "Root",
  overridesResolver: tl
})(de(({
  theme: e
}) => ({
  zIndex: (e.vars || e).zIndex.drawer
}))), eh = H("div", {
  shouldForwardProp: it,
  name: "MuiDrawer",
  slot: "Docked",
  skipVariantsResolver: !1,
  overridesResolver: tl
})({
  flex: "0 0 auto"
}), th = H(xo, {
  name: "MuiDrawer",
  slot: "Paper",
  overridesResolver: (e, t) => {
    const {
      ownerState: o
    } = e;
    return [t.paper, t[`paperAnchor${V(o.anchor)}`], o.variant !== "temporary" && t[`paperAnchorDocked${V(o.anchor)}`]];
  }
})(de(({
  theme: e
}) => ({
  overflowY: "auto",
  display: "flex",
  flexDirection: "column",
  height: "100%",
  flex: "1 0 auto",
  zIndex: (e.vars || e).zIndex.drawer,
  // Add iOS momentum scrolling for iOS < 13.0
  WebkitOverflowScrolling: "touch",
  // temporary style
  position: "fixed",
  top: 0,
  // We disable the focus ring for mouse, touch and keyboard users.
  // At some point, it would be better to keep it for keyboard users.
  // :focus-ring CSS pseudo-class will help.
  outline: 0,
  variants: [{
    props: {
      anchor: "left"
    },
    style: {
      left: 0
    }
  }, {
    props: {
      anchor: "top"
    },
    style: {
      top: 0,
      left: 0,
      right: 0,
      height: "auto",
      maxHeight: "100%"
    }
  }, {
    props: {
      anchor: "right"
    },
    style: {
      right: 0
    }
  }, {
    props: {
      anchor: "bottom"
    },
    style: {
      top: "auto",
      left: 0,
      bottom: 0,
      right: 0,
      height: "auto",
      maxHeight: "100%"
    }
  }, {
    props: ({
      ownerState: t
    }) => t.anchor === "left" && t.variant !== "temporary",
    style: {
      borderRight: `1px solid ${(e.vars || e).palette.divider}`
    }
  }, {
    props: ({
      ownerState: t
    }) => t.anchor === "top" && t.variant !== "temporary",
    style: {
      borderBottom: `1px solid ${(e.vars || e).palette.divider}`
    }
  }, {
    props: ({
      ownerState: t
    }) => t.anchor === "right" && t.variant !== "temporary",
    style: {
      borderLeft: `1px solid ${(e.vars || e).palette.divider}`
    }
  }, {
    props: ({
      ownerState: t
    }) => t.anchor === "bottom" && t.variant !== "temporary",
    style: {
      borderTop: `1px solid ${(e.vars || e).palette.divider}`
    }
  }]
}))), ol = {
  left: "right",
  right: "left",
  top: "down",
  bottom: "up"
};
function Ut(e) {
  return ["left", "right"].includes(e);
}
function $o({
  direction: e
}, t) {
  return e === "rtl" && Ut(t) ? ol[t] : t;
}
const gi = /* @__PURE__ */ g.forwardRef(function(t, o) {
  const r = ge({
    props: t,
    name: "MuiDrawer"
  }), i = rt(), a = Co(), l = {
    enter: i.transitions.duration.enteringScreen,
    exit: i.transitions.duration.leavingScreen
  }, {
    anchor: s = "left",
    BackdropProps: c,
    children: p,
    className: d,
    elevation: f = 16,
    hideBackdrop: h = !1,
    ModalProps: {
      BackdropProps: b,
      ...v
    } = {},
    onClose: y,
    open: C = !1,
    PaperProps: x = {},
    SlideProps: E,
    // eslint-disable-next-line react/prop-types
    TransitionComponent: w,
    transitionDuration: m = l,
    variant: T = "temporary",
    slots: A = {},
    slotProps: P = {},
    ...$
  } = r, D = g.useRef(!1);
  g.useEffect(() => {
    D.current = !0;
  }, []);
  const u = $o({
    direction: a ? "rtl" : "ltr"
  }, s), B = {
    ...r,
    anchor: s,
    elevation: f,
    open: C,
    variant: T,
    ...$
  }, O = Zg(B), M = {
    slots: {
      transition: w,
      ...A
    },
    slotProps: {
      paper: x,
      transition: E,
      ...P,
      backdrop: Qo(P.backdrop || {
        ...c,
        ...b
      }, {
        transitionDuration: m
      })
    }
  }, [N, F] = se("root", {
    ref: o,
    elementType: _g,
    className: Z(O.root, O.modal, d),
    shouldForwardComponentProp: !0,
    ownerState: B,
    externalForwardedProps: {
      ...M,
      ...$,
      ...v
    },
    additionalProps: {
      open: C,
      onClose: y,
      hideBackdrop: h,
      slots: {
        backdrop: M.slots.backdrop
      },
      slotProps: {
        backdrop: M.slotProps.backdrop
      }
    }
  }), [W, U] = se("paper", {
    elementType: th,
    shouldForwardComponentProp: !0,
    className: Z(O.paper, x.className),
    ownerState: B,
    externalForwardedProps: M,
    additionalProps: {
      elevation: T === "temporary" ? f : 0,
      square: !0
    }
  }), [j, k] = se("docked", {
    elementType: eh,
    ref: o,
    className: Z(O.root, O.docked, d),
    ownerState: B,
    externalForwardedProps: M,
    additionalProps: $
    // pass `other` here because `DockedSlot` is also a root slot for some variants
  }), [L, oe] = se("transition", {
    elementType: el,
    ownerState: B,
    externalForwardedProps: M,
    additionalProps: {
      in: C,
      direction: ol[u],
      timeout: m,
      appear: D.current
    }
  }), ee = /* @__PURE__ */ S(W, {
    ...U,
    children: p
  });
  if (T === "permanent")
    return /* @__PURE__ */ S(j, {
      ...k,
      children: ee
    });
  const Y = /* @__PURE__ */ S(L, {
    ...oe,
    children: ee
  });
  return T === "persistent" ? /* @__PURE__ */ S(j, {
    ...k,
    children: Y
  }) : /* @__PURE__ */ S(N, {
    ...F,
    children: Y
  });
});
process.env.NODE_ENV !== "production" && (gi.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Side from which the drawer will appear.
   * @default 'left'
   */
  anchor: n.oneOf(["bottom", "left", "right", "top"]),
  /**
   * @ignore
   */
  BackdropProps: n.object,
  /**
   * The content of the component.
   */
  children: n.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: n.object,
  /**
   * @ignore
   */
  className: n.string,
  /**
   * The elevation of the drawer.
   * @default 16
   */
  elevation: ri,
  /**
   * If `true`, the backdrop is not rendered.
   * @default false
   */
  hideBackdrop: n.bool,
  /**
   * Props applied to the [`Modal`](https://mui.com/material-ui/api/modal/) element.
   * @default {}
   */
  ModalProps: n.object,
  /**
   * Callback fired when the component requests to be closed.
   * The `reason` parameter can optionally be used to control the response to `onClose`.
   *
   * @param {object} event The event source of the callback.
   * @param {string} reason Can be: `"escapeKeyDown"`, `"backdropClick"`.
   */
  onClose: n.func,
  /**
   * If `true`, the component is shown.
   * @default false
   */
  open: n.bool,
  /**
   * Props applied to the [`Paper`](https://mui.com/material-ui/api/paper/) element.
   * @deprecated use the `slotProps.paper` prop instead. This prop will be removed in v7. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   * @default {}
   */
  PaperProps: n.object,
  /**
   * Props applied to the [`Slide`](https://mui.com/material-ui/api/slide/) element.
   * @deprecated use the `slotProps.transition` prop instead. This prop will be removed in v7. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   */
  SlideProps: n.object,
  /**
   * The props used for each slot inside.
   * @default {}
   */
  slotProps: n.shape({
    backdrop: n.oneOfType([n.func, n.object]),
    docked: n.oneOfType([n.func, n.object]),
    paper: n.oneOfType([n.func, n.object]),
    root: n.oneOfType([n.func, n.object]),
    transition: n.oneOfType([n.func, n.object])
  }),
  /**
   * The components used for each slot inside.
   * @default {}
   */
  slots: n.shape({
    backdrop: n.elementType,
    docked: n.elementType,
    paper: n.elementType,
    root: n.elementType,
    transition: n.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: n.oneOfType([n.arrayOf(n.oneOfType([n.func, n.object, n.bool])), n.func, n.object]),
  /**
   * The duration for the transition, in milliseconds.
   * You may specify a single timeout for all transitions, or individually with an object.
   * @default {
   *   enter: theme.transitions.duration.enteringScreen,
   *   exit: theme.transitions.duration.leavingScreen,
   * }
   */
  transitionDuration: n.oneOfType([n.number, n.shape({
    appear: n.number,
    enter: n.number,
    exit: n.number
  })]),
  /**
   * The variant to use.
   * @default 'temporary'
   */
  variant: n.oneOf(["permanent", "persistent", "temporary"])
});
const oh = le("MuiBox", ["root"]), nh = Jn(), st = op({
  themeId: Xr,
  defaultTheme: nh,
  defaultClassName: oh.root,
  generateClassName: ts.generate
});
process.env.NODE_ENV !== "production" && (st.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * @ignore
   */
  children: n.node,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: n.elementType,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: n.oneOfType([n.arrayOf(n.oneOfType([n.func, n.object, n.bool])), n.func, n.object])
});
const nl = (e, t = "primary") => {
  var i;
  const o = Pe[t], r = ((i = e == null ? void 0 : e.palette) == null ? void 0 : i[t]) ?? o;
  return {
    fontColor: r.menuFont ?? o.menuFont,
    bgColor: r.elevated ?? o.elevated,
    boxColor: r.onMain ?? o.onMain
  };
}, rh = H(
  ({ title: e, content: t, align: o, ...r }) => /* @__PURE__ */ S(gi, { ...r }),
  {
    shouldForwardProp: (e) => e !== "title" && e !== "content" && e !== "align"
  }
)(({ anchor: e, theme: t }) => ({
  "& .MuiDrawer-paper": {
    backgroundColor: nl(t).bgColor,
    borderRadius: e === "left" ? "0 20px 20px 0" : e === "right" ? "20px 0 0 20px" : "0"
  }
})), dy = ({
  title: e,
  align: t,
  content: o,
  actions: r,
  anchor: i = "right",
  // 預設為右側
  ...a
}) => {
  const l = rt(), s = nl(l);
  return /* @__PURE__ */ ye(rh, { anchor: i, ...a, children: [
    /* @__PURE__ */ S(
      Jt,
      {
        "aria-label": "close",
        onClick: (c) => {
          var p;
          return (p = a.onClose) == null ? void 0 : p.call(a, c, "escapeKeyDown");
        },
        sx: {
          fontSize: "30px",
          position: "absolute",
          right: 16,
          top: 16
        },
        children: /* @__PURE__ */ S(fi, {})
      }
    ),
    e && /* @__PURE__ */ ye(st, { sx: { display: "flex", justifyContent: t }, children: [
      i === "right" && t === "start" && /* @__PURE__ */ S(
        st,
        {
          sx: {
            alignContent: "center",
            ml: "24px",
            mt: "8px",
            fontSize: "18px"
          },
          children: /* @__PURE__ */ S(Sd, {})
        }
      ),
      /* @__PURE__ */ S(
        Go,
        {
          sx: {
            p: 0,
            m: "25px",
            textAlign: t,
            fontSize: t === "start" ? "20px" : "24px",
            fontWeight: t === "start" ? 500 : 600,
            gap: "20px"
          },
          color: s.fontColor,
          children: e
        }
      ),
      i === "left" && t === "start" && /* @__PURE__ */ S(
        st,
        {
          sx: {
            alignContent: "center",
            mr: "24px",
            mt: "8px",
            fontSize: "18px"
          },
          children: /* @__PURE__ */ S(Ed, {})
        }
      )
    ] }),
    /* @__PURE__ */ S(
      st,
      {
        sx: {
          backgroundColor: s.boxColor,
          overflowY: "auto",
          maxHeight: "calc(100% - 92px)",
          // 留給底部 actions 空間
          boxShadow: "0px 2px 10px 0px #0000000D",
          p: "24px 24px 92px 24px"
          // 上方留空間給標題
        },
        children: o
      }
    ),
    r && /* @__PURE__ */ S(
      st,
      {
        sx: {
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          display: "flex",
          justifyContent: t === "center" ? "center" : "flex-end",
          p: "10px",
          boxShadow: "0px -12px 10px 0px #0000000D",
          height: "92px",
          gap: "10px",
          backgroundColor: s.boxColor
          // or theme.palette.background.paper
        },
        children: r
      }
    )
  ] });
};
function Nn(e) {
  const {
    children: t,
    defer: o = !1,
    fallback: r = null
  } = e, [i, a] = g.useState(!1);
  return gt(() => {
    o || a(!0);
  }, [o]), g.useEffect(() => {
    o && a(!0);
  }, [o]), i ? t : r;
}
process.env.NODE_ENV !== "production" && (Nn.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * You can wrap a node.
   */
  children: n.node,
  /**
   * If `true`, the component will not only prevent server-side rendering.
   * It will also defer the rendering of the children into a different screen frame.
   * @default false
   */
  defer: n.bool,
  /**
   * The fallback content to display.
   * @default null
   */
  fallback: n.node
});
process.env.NODE_ENV !== "production" && (Nn.propTypes = oi(Nn.propTypes));
const ih = H("div", {
  shouldForwardProp: it
})(de(({
  theme: e
}) => ({
  position: "fixed",
  top: 0,
  left: 0,
  bottom: 0,
  zIndex: e.zIndex.drawer - 1,
  variants: [{
    props: {
      anchor: "left"
    },
    style: {
      right: "auto"
    }
  }, {
    props: {
      anchor: "right"
    },
    style: {
      left: "auto",
      right: 0
    }
  }, {
    props: {
      anchor: "top"
    },
    style: {
      bottom: "auto",
      right: 0
    }
  }, {
    props: {
      anchor: "bottom"
    },
    style: {
      top: "auto",
      bottom: 0,
      right: 0
    }
  }]
}))), rl = /* @__PURE__ */ g.forwardRef(function(t, o) {
  const {
    anchor: r,
    classes: i = {},
    className: a,
    width: l,
    style: s,
    ...c
  } = t, p = t;
  return /* @__PURE__ */ S(ih, {
    className: Z("PrivateSwipeArea-root", i.root, i[`anchor${V(r)}`], a),
    ref: o,
    style: {
      [Ut(r) ? "width" : "height"]: l,
      ...s
    },
    ownerState: p,
    ...c
  });
});
process.env.NODE_ENV !== "production" && (rl.propTypes = {
  /**
   * Side on which to attach the discovery area.
   */
  anchor: n.oneOf(["left", "top", "right", "bottom"]).isRequired,
  /**
   * @ignore
   */
  classes: n.object,
  /**
   * @ignore
   */
  className: n.string,
  /**
   * @ignore
   */
  style: n.object,
  /**
   * The width of the left most (or right most) area in `px` where the
   * drawer can be swiped open from.
   */
  width: n.number.isRequired
});
const fn = 3, kr = 20;
let xt = null;
function Rr(e, t, o) {
  return e === "right" ? o.body.offsetWidth - t[0].pageX : t[0].pageX;
}
function Fr(e, t, o) {
  return e === "bottom" ? o.innerHeight - t[0].clientY : t[0].clientY;
}
function Fo(e, t) {
  return e ? t.clientWidth : t.clientHeight;
}
function Oa(e, t, o, r) {
  return Math.min(Math.max(o ? t - e : r + t - e, 0), r);
}
function ah(e, t) {
  const o = [];
  for (; e && e !== t.parentElement; ) {
    const r = We(t).getComputedStyle(e);
    // Ignore the scroll children if the element is absolute positioned.
    r.getPropertyValue("position") === "absolute" || // Ignore the scroll children if the element has an overflowX hidden
    r.getPropertyValue("overflow-x") === "hidden" || (e.clientWidth > 0 && e.scrollWidth > e.clientWidth || e.clientHeight > 0 && e.scrollHeight > e.clientHeight) && o.push(e), e = e.parentElement;
  }
  return o;
}
function sh({
  domTreeShapes: e,
  start: t,
  current: o,
  anchor: r
}) {
  const i = {
    scrollPosition: {
      x: "scrollLeft",
      y: "scrollTop"
    },
    scrollLength: {
      x: "scrollWidth",
      y: "scrollHeight"
    },
    clientLength: {
      x: "clientWidth",
      y: "clientHeight"
    }
  };
  return e.some((a) => {
    let l = o >= t;
    (r === "top" || r === "left") && (l = !l);
    const s = r === "left" || r === "right" ? "x" : "y", c = Math.round(a[i.scrollPosition[s]]), p = c > 0, d = c + a[i.clientLength[s]] < a[i.scrollLength[s]];
    return !!(l && d || !l && p);
  });
}
const lh = typeof navigator < "u" && /iPad|iPhone|iPod/.test(navigator.userAgent), il = /* @__PURE__ */ g.forwardRef(function(t, o) {
  const r = ge({
    name: "MuiSwipeableDrawer",
    props: t
  }), i = rt(), a = {
    enter: i.transitions.duration.enteringScreen,
    exit: i.transitions.duration.leavingScreen
  }, {
    anchor: l = "left",
    disableBackdropTransition: s = !1,
    disableDiscovery: c = !1,
    disableSwipeToOpen: p = lh,
    hideBackdrop: d,
    hysteresis: f = 0.52,
    allowSwipeInChildren: h = !1,
    minFlingVelocity: b = 450,
    ModalProps: {
      BackdropProps: v,
      ...y
    } = {},
    onClose: C,
    onOpen: x,
    open: E = !1,
    PaperProps: w = {},
    SwipeAreaProps: m,
    swipeAreaWidth: T = 20,
    transitionDuration: A = a,
    variant: P = "temporary",
    // Mobile first.
    slots: $ = {},
    slotProps: D = {},
    ...u
  } = r, [R, B] = g.useState(!1), O = g.useRef({
    isSwiping: null
  }), M = g.useRef(), N = g.useRef(), F = g.useRef(), W = Ne(w.ref, F), U = g.useRef(!1), j = g.useRef();
  gt(() => {
    j.current = null;
  }, [E]);
  const k = g.useCallback((z, te = {}) => {
    const {
      mode: ne = null,
      changeTransition: Q = !0
    } = te, J = $o(i, l), X = ["right", "bottom"].includes(J) ? 1 : -1, ce = Ut(l), pe = ce ? `translate(${X * z}px, 0)` : `translate(0, ${X * z}px)`, Te = F.current.style;
    Te.webkitTransform = pe, Te.transform = pe;
    let Ce = "";
    if (ne && (Ce = i.transitions.create("all", Yt({
      easing: void 0,
      style: void 0,
      timeout: A
    }, {
      mode: ne
    }))), Q && (Te.webkitTransition = Ce, Te.transition = Ce), !s && !d) {
      const be = N.current.style;
      be.opacity = 1 - z / Fo(ce, F.current), Q && (be.webkitTransition = Ce, be.transition = Ce);
    }
  }, [l, s, d, i, A]), L = He((z) => {
    if (!U.current)
      return;
    if (xt = null, U.current = !1, Mr.flushSync(() => {
      B(!1);
    }), !O.current.isSwiping) {
      O.current.isSwiping = null;
      return;
    }
    O.current.isSwiping = null;
    const te = $o(i, l), ne = Ut(l);
    let Q;
    ne ? Q = Rr(te, z.changedTouches, $e(z.currentTarget)) : Q = Fr(te, z.changedTouches, We(z.currentTarget));
    const J = ne ? O.current.startX : O.current.startY, X = Fo(ne, F.current), ce = Oa(Q, J, E, X), pe = ce / X;
    if (Math.abs(O.current.velocity) > b && (j.current = Math.abs((X - ce) / O.current.velocity) * 1e3), E) {
      O.current.velocity > b || pe > f ? C() : k(0, {
        mode: "exit"
      });
      return;
    }
    O.current.velocity < -b || 1 - pe > f ? x() : k(Fo(ne, F.current), {
      mode: "enter"
    });
  }), oe = (z = !1) => {
    if (!R) {
      (z || !(c && h)) && Mr.flushSync(() => {
        B(!0);
      });
      const te = Ut(l);
      !E && F.current && k(Fo(te, F.current) + (c ? 15 : -kr), {
        changeTransition: !1
      }), O.current.velocity = 0, O.current.lastTime = null, O.current.lastTranslate = null, O.current.paperHit = !1, U.current = !0;
    }
  }, ee = He((z) => {
    if (!F.current || !U.current || xt !== null && xt !== O.current)
      return;
    oe(!0);
    const te = $o(i, l), ne = Ut(l), Q = Rr(te, z.touches, $e(z.currentTarget)), J = Fr(te, z.touches, We(z.currentTarget));
    if (E && F.current.contains(z.target) && xt === null) {
      const Ce = ah(z.target, F.current);
      if (sh({
        domTreeShapes: Ce,
        start: ne ? O.current.startX : O.current.startY,
        current: ne ? Q : J,
        anchor: l
      })) {
        xt = !0;
        return;
      }
      xt = O.current;
    }
    if (O.current.isSwiping == null) {
      const Ce = Math.abs(Q - O.current.startX), be = Math.abs(J - O.current.startY), xe = ne ? Ce > be && Ce > fn : be > Ce && be > fn;
      if (xe && z.cancelable && z.preventDefault(), xe === !0 || (ne ? be > fn : Ce > fn)) {
        if (O.current.isSwiping = xe, !xe) {
          L(z);
          return;
        }
        O.current.startX = Q, O.current.startY = J, !c && !E && (ne ? O.current.startX -= kr : O.current.startY -= kr);
      }
    }
    if (!O.current.isSwiping)
      return;
    const X = Fo(ne, F.current);
    let ce = ne ? O.current.startX : O.current.startY;
    E && !O.current.paperHit && (ce = Math.min(ce, X));
    const pe = Oa(ne ? Q : J, ce, E, X);
    if (E)
      if (O.current.paperHit)
        pe === 0 && (O.current.startX = Q, O.current.startY = J);
      else if (ne ? Q < X : J < X)
        O.current.paperHit = !0, O.current.startX = Q, O.current.startY = J;
      else
        return;
    O.current.lastTranslate === null && (O.current.lastTranslate = pe, O.current.lastTime = performance.now() + 1);
    const Te = (pe - O.current.lastTranslate) / (performance.now() - O.current.lastTime) * 1e3;
    O.current.velocity = O.current.velocity * 0.4 + Te * 0.6, O.current.lastTranslate = pe, O.current.lastTime = performance.now(), z.cancelable && z.preventDefault(), k(pe);
  }), Y = He((z) => {
    var X;
    if (z.defaultPrevented || z.defaultMuiPrevented || E && (d || !N.current.contains(z.target)) && !F.current.contains(z.target))
      return;
    const te = $o(i, l), ne = Ut(l), Q = Rr(te, z.touches, $e(z.currentTarget)), J = Fr(te, z.touches, We(z.currentTarget));
    if (!E) {
      if (p || !(z.target === M.current || (X = F.current) != null && X.contains(z.target) && (typeof h == "function" ? h(z, M.current, F.current) : h)))
        return;
      if (ne) {
        if (Q > T)
          return;
      } else if (J > T)
        return;
    }
    z.defaultMuiPrevented = !0, xt = null, O.current.startX = Q, O.current.startY = J, oe();
  });
  g.useEffect(() => {
    if (P === "temporary") {
      const z = $e(F.current);
      return z.addEventListener("touchstart", Y), z.addEventListener("touchmove", ee, {
        passive: !E
      }), z.addEventListener("touchend", L), () => {
        z.removeEventListener("touchstart", Y), z.removeEventListener("touchmove", ee, {
          passive: !E
        }), z.removeEventListener("touchend", L);
      };
    }
  }, [P, E, Y, ee, L]), g.useEffect(() => () => {
    xt === O.current && (xt = null);
  }, []), g.useEffect(() => {
    E || B(!1);
  }, [E]);
  const [K, G] = se("swipeArea", {
    ref: M,
    elementType: rl,
    ownerState: r,
    externalForwardedProps: {
      slots: $,
      slotProps: {
        swipeArea: m,
        ...D
      }
    },
    additionalProps: {
      width: T,
      anchor: l
    }
  });
  return /* @__PURE__ */ ye(g.Fragment, {
    children: [/* @__PURE__ */ S(gi, {
      open: P === "temporary" && R ? !0 : E,
      variant: P,
      ModalProps: {
        BackdropProps: {
          ...v,
          ref: N
        },
        // Ensures that paperRef.current will be defined inside the touch start event handler
        // See https://github.com/mui/material-ui/issues/30414 for more information
        ...P === "temporary" && {
          keepMounted: !0
        },
        ...y
      },
      hideBackdrop: d,
      anchor: l,
      transitionDuration: j.current || A,
      onClose: C,
      ref: o,
      slots: $,
      slotProps: {
        ...D,
        backdrop: Qo(D.backdrop ?? v, {
          ref: N
        }),
        paper: Qo(D.paper ?? w, {
          style: {
            pointerEvents: P === "temporary" && !E && !h ? "none" : ""
          },
          ref: W
        })
      },
      ...u
    }), !p && P === "temporary" && /* @__PURE__ */ S(Nn, {
      children: /* @__PURE__ */ S(K, {
        ...G
      })
    })]
  });
});
process.env.NODE_ENV !== "production" && (il.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * If set to true, the swipe event will open the drawer even if the user begins the swipe on one of the drawer's children.
   * This can be useful in scenarios where the drawer is partially visible.
   * You can customize it further with a callback that determines which children the user can drag over to open the drawer
   * (for example, to ignore other elements that handle touch move events, like sliders).
   *
   * @param {TouchEvent} event The 'touchstart' event
   * @param {HTMLDivElement} swipeArea The swipe area element
   * @param {HTMLDivElement} paper The drawer's paper element
   *
   * @default false
   */
  allowSwipeInChildren: n.oneOfType([n.func, n.bool]),
  /**
   * @ignore
   */
  anchor: n.oneOf(["bottom", "left", "right", "top"]),
  /**
   * The content of the component.
   */
  children: n.node,
  /**
   * Disable the backdrop transition.
   * This can improve the FPS on low-end devices.
   * @default false
   */
  disableBackdropTransition: n.bool,
  /**
   * If `true`, touching the screen near the edge of the drawer will not slide in the drawer a bit
   * to promote accidental discovery of the swipe gesture.
   * @default false
   */
  disableDiscovery: n.bool,
  /**
   * If `true`, swipe to open is disabled. This is useful in browsers where swiping triggers
   * navigation actions. Swipe to open is disabled on iOS browsers by default.
   * @default typeof navigator !== 'undefined' && /iPad|iPhone|iPod/.test(navigator.userAgent)
   */
  disableSwipeToOpen: n.bool,
  /**
   * @ignore
   */
  hideBackdrop: n.bool,
  /**
   * Affects how far the drawer must be opened/closed to change its state.
   * Specified as percent (0-1) of the width of the drawer
   * @default 0.52
   */
  hysteresis: n.number,
  /**
   * Defines, from which (average) velocity on, the swipe is
   * defined as complete although hysteresis isn't reached.
   * Good threshold is between 250 - 1000 px/s
   * @default 450
   */
  minFlingVelocity: n.number,
  /**
   * @ignore
   */
  ModalProps: n.shape({
    BackdropProps: n.shape({
      component: On
    })
  }),
  /**
   * Callback fired when the component requests to be closed.
   *
   * @param {React.SyntheticEvent<{}>} event The event source of the callback.
   */
  onClose: n.func.isRequired,
  /**
   * Callback fired when the component requests to be opened.
   *
   * @param {React.SyntheticEvent<{}>} event The event source of the callback.
   */
  onOpen: n.func.isRequired,
  /**
   * If `true`, the component is shown.
   * @default false
   */
  open: n.bool,
  /**
   * @ignore
   */
  PaperProps: n.shape({
    component: On,
    style: n.object
  }),
  /**
   * The props used for each slot inside.
   * @default {}
   */
  slotProps: n.shape({
    backdrop: n.oneOfType([n.func, n.object]),
    docked: n.oneOfType([n.func, n.object]),
    paper: n.oneOfType([n.func, n.object]),
    root: n.oneOfType([n.func, n.object]),
    swipeArea: n.oneOfType([n.func, n.object]),
    transition: n.oneOfType([n.func, n.object])
  }),
  /**
   * The components used for each slot inside.
   * @default {}
   */
  slots: n.shape({
    backdrop: n.elementType,
    docked: n.elementType,
    paper: n.elementType,
    root: n.elementType,
    swipeArea: n.elementType,
    transition: n.elementType
  }),
  /**
   * The element is used to intercept the touch events on the edge.
   * @deprecated use the `slotProps.swipeArea` prop instead. This prop will be removed in v7. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   */
  SwipeAreaProps: n.object,
  /**
   * The width of the left most (or right most) area in `px` that
   * the drawer can be swiped open from.
   * @default 20
   */
  swipeAreaWidth: n.number,
  /**
   * The duration for the transition, in milliseconds.
   * You may specify a single timeout for all transitions, or individually with an object.
   * @default {
   *   enter: theme.transitions.duration.enteringScreen,
   *   exit: theme.transitions.duration.leavingScreen,
   * }
   */
  transitionDuration: n.oneOfType([n.number, n.shape({
    appear: n.number,
    enter: n.number,
    exit: n.number
  })]),
  /**
   * @ignore
   */
  variant: n.oneOf(["permanent", "persistent", "temporary"])
});
const al = (e, t = "primary") => {
  var i;
  const o = Pe[t], r = ((i = e == null ? void 0 : e.palette) == null ? void 0 : i[t]) ?? o;
  return {
    fontColor: r.menuFont ?? o.menuFont,
    bgColor: r.elevated ?? o.elevated,
    boxColor: r.onMain ?? o.onMain
  };
}, ch = H(
  ({ title: e, content: t, align: o, ...r }) => /* @__PURE__ */ S(il, { ...r }),
  {
    shouldForwardProp: (e) => e !== "title" && e !== "content" && e !== "align"
  }
)(({ anchor: e, theme: t }) => ({
  "& .MuiDrawer-paper": {
    backgroundColor: al(t).bgColor,
    borderRadius: e === "top" ? "0 0 16px 16px" : e === "bottom" ? "16px 16px 0 0" : "0"
  }
})), fy = ({
  title: e,
  align: t,
  content: o,
  actions: r,
  anchor: i = "bottom",
  ...a
}) => {
  const l = rt(), s = al(l);
  return /* @__PURE__ */ ye(ch, { anchor: i, ...a, children: [
    /* @__PURE__ */ S(
      Jt,
      {
        "aria-label": "close",
        onClick: (c) => {
          var p;
          return (p = a.onClose) == null ? void 0 : p.call(a, c);
        },
        sx: {
          fontSize: "30px",
          position: "absolute",
          right: 16,
          top: 16
        },
        children: /* @__PURE__ */ S(fi, {})
      }
    ),
    e && /* @__PURE__ */ S(st, { sx: { display: "flex", justifyContent: t }, children: /* @__PURE__ */ S(
      Go,
      {
        sx: {
          p: 0,
          m: "25px",
          textAlign: t,
          fontSize: t === "start" ? "20px" : "24px",
          fontWeight: t === "start" ? 500 : 600,
          gap: "20px"
        },
        color: s.fontColor,
        children: e
      }
    ) }),
    /* @__PURE__ */ S(
      st,
      {
        sx: {
          backgroundColor: s.boxColor,
          overflowY: "auto",
          maxHeight: "calc(100% - 92px)",
          // 留給底部 actions 空間
          boxShadow: "0px 2px 10px 0px #0000000D",
          p: "24px 24px 92px 24px"
          // 上方留空間給標題
        },
        children: o
      }
    ),
    r && /* @__PURE__ */ S(
      st,
      {
        sx: {
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          display: "flex",
          justifyContent: t === "center" ? "center" : "flex-end",
          p: "10px",
          boxShadow: "0px -12px 10px 0px #0000000D",
          height: "92px",
          gap: "10px",
          backgroundColor: s.boxColor
          // or theme.palette.background.paper
        },
        children: r
      }
    )
  ] });
}, ph = ze(/* @__PURE__ */ S("path", {
  d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"
}), "RadioButtonUnchecked"), uh = ze(/* @__PURE__ */ S("path", {
  d: "M8.465 8.465C9.37 7.56 10.62 7 12 7C14.76 7 17 9.24 17 12C17 13.38 16.44 14.63 15.535 15.535C14.63 16.44 13.38 17 12 17C9.24 17 7 14.76 7 12C7 10.62 7.56 9.37 8.465 8.465Z"
}), "RadioButtonChecked"), dh = H("span", {
  shouldForwardProp: it
})({
  position: "relative",
  display: "flex"
}), fh = H(ph)({
  // Scale applied to prevent dot misalignment in Safari
  transform: "scale(1)"
}), gh = H(uh)(de(({
  theme: e
}) => ({
  left: 0,
  position: "absolute",
  transform: "scale(0)",
  transition: e.transitions.create("transform", {
    easing: e.transitions.easing.easeIn,
    duration: e.transitions.duration.shortest
  }),
  variants: [{
    props: {
      checked: !0
    },
    style: {
      transform: "scale(1)",
      transition: e.transitions.create("transform", {
        easing: e.transitions.easing.easeOut,
        duration: e.transitions.duration.shortest
      })
    }
  }]
})));
function hi(e) {
  const {
    checked: t = !1,
    classes: o = {},
    fontSize: r
  } = e, i = {
    ...e,
    checked: t
  };
  return /* @__PURE__ */ ye(dh, {
    className: o.root,
    ownerState: i,
    children: [/* @__PURE__ */ S(fh, {
      fontSize: r,
      className: o.background,
      ownerState: i
    }), /* @__PURE__ */ S(gh, {
      fontSize: r,
      className: o.dot,
      ownerState: i
    })]
  });
}
process.env.NODE_ENV !== "production" && (hi.propTypes = {
  /**
   * If `true`, the component is checked.
   */
  checked: n.bool,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: n.object,
  /**
   * The size of the component.
   * `small` is equivalent to the dense radio styling.
   */
  fontSize: n.oneOf(["small", "medium"])
});
const bi = /* @__PURE__ */ g.createContext(void 0);
process.env.NODE_ENV !== "production" && (bi.displayName = "RadioGroupContext");
function hh() {
  return g.useContext(bi);
}
function bh(e) {
  return ue("MuiRadio", e);
}
const Aa = le("MuiRadio", ["root", "checked", "disabled", "colorPrimary", "colorSecondary", "sizeSmall"]), mh = (e) => {
  const {
    classes: t,
    color: o,
    size: r
  } = e, i = {
    root: ["root", `color${V(o)}`, r !== "medium" && `size${V(r)}`]
  };
  return {
    ...t,
    ...fe(i, bh, t)
  };
}, yh = H(Zn, {
  shouldForwardProp: (e) => it(e) || e === "classes",
  name: "MuiRadio",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: o
    } = e;
    return [t.root, o.size !== "medium" && t[`size${V(o.size)}`], t[`color${V(o.color)}`]];
  }
})(de(({
  theme: e
}) => ({
  color: (e.vars || e).palette.text.secondary,
  [`&.${Aa.disabled}`]: {
    color: (e.vars || e).palette.action.disabled
  },
  variants: [{
    props: {
      color: "default",
      disabled: !1,
      disableRipple: !1
    },
    style: {
      "&:hover": {
        backgroundColor: e.vars ? `rgba(${e.vars.palette.action.activeChannel} / ${e.vars.palette.action.hoverOpacity})` : q(e.palette.action.active, e.palette.action.hoverOpacity)
      }
    }
  }, ...Object.entries(e.palette).filter(Ie()).map(([t]) => ({
    props: {
      color: t,
      disabled: !1,
      disableRipple: !1
    },
    style: {
      "&:hover": {
        backgroundColor: e.vars ? `rgba(${e.vars.palette[t].mainChannel} / ${e.vars.palette.action.hoverOpacity})` : q(e.palette[t].main, e.palette.action.hoverOpacity)
      }
    }
  })), ...Object.entries(e.palette).filter(Ie()).map(([t]) => ({
    props: {
      color: t,
      disabled: !1
    },
    style: {
      [`&.${Aa.checked}`]: {
        color: (e.vars || e).palette[t].main
      }
    }
  })), {
    // Should be last to override other colors
    props: {
      disableRipple: !1
    },
    style: {
      // Reset on touch devices, it doesn't add specificity
      "&:hover": {
        "@media (hover: none)": {
          backgroundColor: "transparent"
        }
      }
    }
  }]
})));
function vh(e, t) {
  return typeof t == "object" && t !== null ? e === t : String(e) === String(t);
}
const Ch = /* @__PURE__ */ S(hi, {
  checked: !0
}), xh = /* @__PURE__ */ S(hi, {}), sl = /* @__PURE__ */ g.forwardRef(function(t, o) {
  const r = ge({
    props: t,
    name: "MuiRadio"
  }), {
    checked: i,
    checkedIcon: a = Ch,
    color: l = "primary",
    icon: s = xh,
    name: c,
    onChange: p,
    size: d = "medium",
    className: f,
    disabled: h,
    disableRipple: b = !1,
    slots: v = {},
    slotProps: y = {},
    inputProps: C,
    ...x
  } = r, E = on();
  let w = h;
  E && typeof w > "u" && (w = E.disabled), w ?? (w = !1);
  const m = {
    ...r,
    disabled: w,
    disableRipple: b,
    color: l,
    size: d
  }, T = mh(m), A = hh();
  let P = i;
  const $ = Dr(p, A && A.onChange);
  let D = c;
  A && (typeof P > "u" && (P = vh(A.value, r.value)), typeof D > "u" && (D = A.name));
  const u = y.input ?? C, [R, B] = se("root", {
    ref: o,
    elementType: yh,
    className: Z(T.root, f),
    shouldForwardComponentProp: !0,
    externalForwardedProps: {
      slots: v,
      slotProps: y,
      ...x
    },
    getSlotProps: (O) => ({
      ...O,
      onChange: (M, ...N) => {
        var F;
        (F = O.onChange) == null || F.call(O, M, ...N), $(M, ...N);
      }
    }),
    ownerState: m,
    additionalProps: {
      type: "radio",
      icon: /* @__PURE__ */ g.cloneElement(s, {
        fontSize: s.props.fontSize ?? d
      }),
      checkedIcon: /* @__PURE__ */ g.cloneElement(a, {
        fontSize: a.props.fontSize ?? d
      }),
      disabled: w,
      name: D,
      checked: P,
      slots: v,
      slotProps: {
        // Do not forward `slotProps.root` again because it's already handled by the `RootSlot` in this file.
        input: typeof u == "function" ? u(m) : u
      }
    }
  });
  return /* @__PURE__ */ S(R, {
    ...B,
    classes: T
  });
});
process.env.NODE_ENV !== "production" && (sl.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * If `true`, the component is checked.
   */
  checked: n.bool,
  /**
   * The icon to display when the component is checked.
   * @default <RadioButtonIcon checked />
   */
  checkedIcon: n.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: n.object,
  /**
   * @ignore
   */
  className: n.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * @default 'primary'
   */
  color: n.oneOfType([n.oneOf(["default", "primary", "secondary", "error", "info", "success", "warning"]), n.string]),
  /**
   * If `true`, the component is disabled.
   */
  disabled: n.bool,
  /**
   * If `true`, the ripple effect is disabled.
   * @default false
   */
  disableRipple: n.bool,
  /**
   * The icon to display when the component is unchecked.
   * @default <RadioButtonIcon />
   */
  icon: n.node,
  /**
   * The id of the `input` element.
   */
  id: n.string,
  /**
   * [Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Attributes) applied to the `input` element.
   * @deprecated Use `slotProps.input` instead. This prop will be removed in v7. See [Migrating from deprecated APIs](/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   */
  inputProps: n.object,
  /**
   * Pass a ref to the `input` element.
   * @deprecated Use `slotProps.input.ref` instead. This prop will be removed in v7. See [Migrating from deprecated APIs](/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   */
  inputRef: Tt,
  /**
   * Name attribute of the `input` element.
   */
  name: n.string,
  /**
   * Callback fired when the state is changed.
   *
   * @param {React.ChangeEvent<HTMLInputElement>} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value` (string).
   * You can pull out the new checked state by accessing `event.target.checked` (boolean).
   */
  onChange: n.func,
  /**
   * If `true`, the `input` element is required.
   * @default false
   */
  required: n.bool,
  /**
   * The size of the component.
   * `small` is equivalent to the dense radio styling.
   * @default 'medium'
   */
  size: n.oneOfType([n.oneOf(["medium", "small"]), n.string]),
  /**
   * The props used for each slot inside.
   * @default {}
   */
  slotProps: n.shape({
    input: n.oneOfType([n.func, n.object]),
    root: n.oneOfType([n.func, n.object])
  }),
  /**
   * The components used for each slot inside.
   * @default {}
   */
  slots: n.shape({
    input: n.elementType,
    root: n.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: n.oneOfType([n.arrayOf(n.oneOfType([n.func, n.object, n.bool])), n.func, n.object]),
  /**
   * The value of the component. The DOM API casts this to a string.
   */
  value: n.any
});
function ka(e) {
  return e != null && !(Array.isArray(e) && e.length === 0);
}
function Ra(e, t = !1) {
  return e && (ka(e.value) && e.value !== "" || t && ka(e.defaultValue) && e.defaultValue !== "");
}
function wh(e) {
  return e.startAdornment;
}
function Sh(e) {
  return ue("MuiFormControl", e);
}
le("MuiFormControl", ["root", "marginNone", "marginNormal", "marginDense", "fullWidth", "disabled"]);
const Eh = (e) => {
  const {
    classes: t,
    margin: o,
    fullWidth: r
  } = e, i = {
    root: ["root", o !== "none" && `margin${V(o)}`, r && "fullWidth"]
  };
  return fe(i, Sh, t);
}, Th = H("div", {
  name: "MuiFormControl",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: o
    } = e;
    return [t.root, t[`margin${V(o.margin)}`], o.fullWidth && t.fullWidth];
  }
})({
  display: "inline-flex",
  flexDirection: "column",
  position: "relative",
  // Reset fieldset default style.
  minWidth: 0,
  padding: 0,
  margin: 0,
  border: 0,
  verticalAlign: "top",
  // Fix alignment issue on Safari.
  variants: [{
    props: {
      margin: "normal"
    },
    style: {
      marginTop: 16,
      marginBottom: 8
    }
  }, {
    props: {
      margin: "dense"
    },
    style: {
      marginTop: 8,
      marginBottom: 4
    }
  }, {
    props: {
      fullWidth: !0
    },
    style: {
      width: "100%"
    }
  }]
}), ll = /* @__PURE__ */ g.forwardRef(function(t, o) {
  const r = ge({
    props: t,
    name: "MuiFormControl"
  }), {
    children: i,
    className: a,
    color: l = "primary",
    component: s = "div",
    disabled: c = !1,
    error: p = !1,
    focused: d,
    fullWidth: f = !1,
    hiddenLabel: h = !1,
    margin: b = "none",
    required: v = !1,
    size: y = "medium",
    variant: C = "outlined",
    ...x
  } = r, E = {
    ...r,
    color: l,
    component: s,
    disabled: c,
    error: p,
    fullWidth: f,
    hiddenLabel: h,
    margin: b,
    required: v,
    size: y,
    variant: C
  }, w = Eh(E), [m, T] = g.useState(() => {
    let F = !1;
    return i && g.Children.forEach(i, (W) => {
      if (!yr(W, ["Input", "Select"]))
        return;
      const U = yr(W, ["Select"]) ? W.props.input : W;
      U && wh(U.props) && (F = !0);
    }), F;
  }), [A, P] = g.useState(() => {
    let F = !1;
    return i && g.Children.forEach(i, (W) => {
      yr(W, ["Input", "Select"]) && (Ra(W.props, !0) || Ra(W.props.inputProps, !0)) && (F = !0);
    }), F;
  }), [$, D] = g.useState(!1);
  c && $ && D(!1);
  const u = d !== void 0 && !c ? d : $;
  let R;
  const B = g.useRef(!1);
  process.env.NODE_ENV !== "production" && (R = () => (B.current && console.error(["MUI: There are multiple `InputBase` components inside a FormControl.", "This creates visual inconsistencies, only use one `InputBase`."].join(`
`)), B.current = !0, () => {
    B.current = !1;
  }));
  const O = g.useCallback(() => {
    P(!0);
  }, []), M = g.useCallback(() => {
    P(!1);
  }, []), N = g.useMemo(() => ({
    adornedStart: m,
    setAdornedStart: T,
    color: l,
    disabled: c,
    error: p,
    filled: A,
    focused: u,
    fullWidth: f,
    hiddenLabel: h,
    size: y,
    onBlur: () => {
      D(!1);
    },
    onFocus: () => {
      D(!0);
    },
    onEmpty: M,
    onFilled: O,
    registerEffect: R,
    required: v,
    variant: C
  }), [m, l, c, p, A, u, f, h, R, M, O, v, y, C]);
  return /* @__PURE__ */ S(ci.Provider, {
    value: N,
    children: /* @__PURE__ */ S(Th, {
      as: s,
      ownerState: E,
      className: Z(w.root, a),
      ref: o,
      ...x,
      children: i
    })
  });
});
process.env.NODE_ENV !== "production" && (ll.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: n.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: n.object,
  /**
   * @ignore
   */
  className: n.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * @default 'primary'
   */
  color: n.oneOfType([n.oneOf(["primary", "secondary", "error", "info", "success", "warning"]), n.string]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: n.elementType,
  /**
   * If `true`, the label, input and helper text should be displayed in a disabled state.
   * @default false
   */
  disabled: n.bool,
  /**
   * If `true`, the label is displayed in an error state.
   * @default false
   */
  error: n.bool,
  /**
   * If `true`, the component is displayed in focused state.
   */
  focused: n.bool,
  /**
   * If `true`, the component will take up the full width of its container.
   * @default false
   */
  fullWidth: n.bool,
  /**
   * If `true`, the label is hidden.
   * This is used to increase density for a `FilledInput`.
   * Be sure to add `aria-label` to the `input` element.
   * @default false
   */
  hiddenLabel: n.bool,
  /**
   * If `dense` or `normal`, will adjust vertical spacing of this and contained components.
   * @default 'none'
   */
  margin: n.oneOf(["dense", "none", "normal"]),
  /**
   * If `true`, the label will indicate that the `input` is required.
   * @default false
   */
  required: n.bool,
  /**
   * The size of the component.
   * @default 'medium'
   */
  size: n.oneOfType([n.oneOf(["medium", "small"]), n.string]),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: n.oneOfType([n.arrayOf(n.oneOfType([n.func, n.object, n.bool])), n.func, n.object]),
  /**
   * The variant to use.
   * @default 'outlined'
   */
  variant: n.oneOf(["filled", "outlined", "standard"])
});
function Oh(e) {
  return ue("MuiFormControlLabel", e);
}
const jo = le("MuiFormControlLabel", ["root", "labelPlacementStart", "labelPlacementTop", "labelPlacementBottom", "disabled", "label", "error", "required", "asterisk"]);
function mi({
  props: e,
  states: t,
  muiFormControl: o
}) {
  return t.reduce((r, i) => (r[i] = e[i], o && typeof e[i] > "u" && (r[i] = o[i]), r), {});
}
const Ah = (e) => {
  const {
    classes: t,
    disabled: o,
    labelPlacement: r,
    error: i,
    required: a
  } = e, l = {
    root: ["root", o && "disabled", `labelPlacement${V(r)}`, i && "error", a && "required"],
    label: ["label", o && "disabled"],
    asterisk: ["asterisk", i && "error"]
  };
  return fe(l, Oh, t);
}, kh = H("label", {
  name: "MuiFormControlLabel",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: o
    } = e;
    return [{
      [`& .${jo.label}`]: t.label
    }, t.root, t[`labelPlacement${V(o.labelPlacement)}`]];
  }
})(de(({
  theme: e
}) => ({
  display: "inline-flex",
  alignItems: "center",
  cursor: "pointer",
  // For correct alignment with the text.
  verticalAlign: "middle",
  WebkitTapHighlightColor: "transparent",
  marginLeft: -11,
  marginRight: 16,
  // used for row presentation of radio/checkbox
  [`&.${jo.disabled}`]: {
    cursor: "default"
  },
  [`& .${jo.label}`]: {
    [`&.${jo.disabled}`]: {
      color: (e.vars || e).palette.text.disabled
    }
  },
  variants: [{
    props: {
      labelPlacement: "start"
    },
    style: {
      flexDirection: "row-reverse",
      marginRight: -11
    }
  }, {
    props: {
      labelPlacement: "top"
    },
    style: {
      flexDirection: "column-reverse"
    }
  }, {
    props: {
      labelPlacement: "bottom"
    },
    style: {
      flexDirection: "column"
    }
  }, {
    props: ({
      labelPlacement: t
    }) => t === "start" || t === "top" || t === "bottom",
    style: {
      marginLeft: 16
      // used for row presentation of radio/checkbox
    }
  }]
}))), Rh = H("span", {
  name: "MuiFormControlLabel",
  slot: "Asterisk",
  overridesResolver: (e, t) => t.asterisk
})(de(({
  theme: e
}) => ({
  [`&.${jo.error}`]: {
    color: (e.vars || e).palette.error.main
  }
}))), yi = /* @__PURE__ */ g.forwardRef(function(t, o) {
  const r = ge({
    props: t,
    name: "MuiFormControlLabel"
  }), {
    checked: i,
    className: a,
    componentsProps: l = {},
    control: s,
    disabled: c,
    disableTypography: p,
    inputRef: d,
    label: f,
    labelPlacement: h = "end",
    name: b,
    onChange: v,
    required: y,
    slots: C = {},
    slotProps: x = {},
    value: E,
    ...w
  } = r, m = on(), T = c ?? s.props.disabled ?? (m == null ? void 0 : m.disabled), A = y ?? s.props.required, P = {
    disabled: T,
    required: A
  };
  ["checked", "name", "onChange", "value", "inputRef"].forEach((N) => {
    typeof s.props[N] > "u" && typeof r[N] < "u" && (P[N] = r[N]);
  });
  const $ = mi({
    props: r,
    muiFormControl: m,
    states: ["error"]
  }), D = {
    ...r,
    disabled: T,
    labelPlacement: h,
    required: A,
    error: $.error
  }, u = Ah(D), R = {
    slots: C,
    slotProps: {
      ...l,
      ...x
    }
  }, [B, O] = se("typography", {
    elementType: Gt,
    externalForwardedProps: R,
    ownerState: D
  });
  let M = f;
  return M != null && M.type !== Gt && !p && (M = /* @__PURE__ */ S(B, {
    component: "span",
    ...O,
    className: Z(u.label, O == null ? void 0 : O.className),
    children: M
  })), /* @__PURE__ */ ye(kh, {
    className: Z(u.root, a),
    ownerState: D,
    ref: o,
    ...w,
    children: [/* @__PURE__ */ g.cloneElement(s, P), A ? /* @__PURE__ */ ye("div", {
      children: [M, /* @__PURE__ */ ye(Rh, {
        ownerState: D,
        "aria-hidden": !0,
        className: u.asterisk,
        children: [" ", "*"]
      })]
    }) : M]
  });
});
process.env.NODE_ENV !== "production" && (yi.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * If `true`, the component appears selected.
   */
  checked: n.bool,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: n.object,
  /**
   * @ignore
   */
  className: n.string,
  /**
   * The props used for each slot inside.
   * @default {}
   * @deprecated use the `slotProps` prop instead. This prop will be removed in v7. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   */
  componentsProps: n.shape({
    typography: n.object
  }),
  /**
   * A control element. For instance, it can be a `Radio`, a `Switch` or a `Checkbox`.
   */
  control: n.element.isRequired,
  /**
   * If `true`, the control is disabled.
   */
  disabled: n.bool,
  /**
   * If `true`, the label is rendered as it is passed without an additional typography node.
   */
  disableTypography: n.bool,
  /**
   * Pass a ref to the `input` element.
   */
  inputRef: Tt,
  /**
   * A text or an element to be used in an enclosing label element.
   */
  label: n.node,
  /**
   * The position of the label.
   * @default 'end'
   */
  labelPlacement: n.oneOf(["bottom", "end", "start", "top"]),
  /**
   * @ignore
   */
  name: n.string,
  /**
   * Callback fired when the state is changed.
   *
   * @param {React.SyntheticEvent} event The event source of the callback.
   * You can pull out the new checked state by accessing `event.target.checked` (boolean).
   */
  onChange: n.func,
  /**
   * If `true`, the label will indicate that the `input` is required.
   */
  required: n.bool,
  /**
   * The props used for each slot inside.
   * @default {}
   */
  slotProps: n.shape({
    typography: n.oneOfType([n.func, n.object])
  }),
  /**
   * The components used for each slot inside.
   * @default {}
   */
  slots: n.shape({
    typography: n.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: n.oneOfType([n.arrayOf(n.oneOfType([n.func, n.object, n.bool])), n.func, n.object]),
  /**
   * The value of the component.
   */
  value: n.any
});
const Fh = (e, t = "primary") => {
  var i;
  const o = Pe[t], r = ((i = e == null ? void 0 : e.palette) == null ? void 0 : i[t]) ?? o;
  return {
    // 預設狀態
    "&": {
      color: (r == null ? void 0 : r.myDefault) ?? o.myDefault
    },
    // 勾選狀態
    "&.Mui-checked": {
      color: r.custMain ?? o.custMain
    },
    // 滑鼠 hover 狀態
    "&:hover": {
      backgroundColor: q(r.custMain ?? o.custMain, 0.08)
    },
    // 禁用狀態
    "&.Mui-disabled": {
      color: q(at[0], 0.38)
    },
    // 鍵盤 focus 狀態
    "&.Mui-focusVisible": {
      outline: `2px solid ${r.custMain ?? o.custMain}`,
      outlineOffset: 2
    }
  };
}, Ph = H(sl, {
  shouldForwardProp: (e) => e !== "color"
})(
  ({ theme: e, color: t = "primary" }) => Fh(e, t)
), Bh = ({
  color: e = "primary",
  label: t,
  ...o
}) => /* @__PURE__ */ S(
  yi,
  {
    control: /* @__PURE__ */ S(
      Ph,
      {
        color: e,
        ...o
      }
    ),
    label: t || void 0
  }
);
function Mh(e) {
  return ue("MuiFormGroup", e);
}
le("MuiFormGroup", ["root", "row", "error"]);
const Ih = (e) => {
  const {
    classes: t,
    row: o,
    error: r
  } = e;
  return fe({
    root: ["root", o && "row", r && "error"]
  }, Mh, t);
}, Dh = H("div", {
  name: "MuiFormGroup",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: o
    } = e;
    return [t.root, o.row && t.row];
  }
})({
  display: "flex",
  flexDirection: "column",
  flexWrap: "wrap",
  variants: [{
    props: {
      row: !0
    },
    style: {
      flexDirection: "row"
    }
  }]
}), cl = /* @__PURE__ */ g.forwardRef(function(t, o) {
  const r = ge({
    props: t,
    name: "MuiFormGroup"
  }), {
    className: i,
    row: a = !1,
    ...l
  } = r, s = on(), c = mi({
    props: r,
    muiFormControl: s,
    states: ["error"]
  }), p = {
    ...r,
    row: a,
    error: c.error
  }, d = Ih(p);
  return /* @__PURE__ */ S(Dh, {
    className: Z(d.root, i),
    ownerState: p,
    ref: o,
    ...l
  });
});
process.env.NODE_ENV !== "production" && (cl.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: n.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: n.object,
  /**
   * @ignore
   */
  className: n.string,
  /**
   * Display group of elements in a compact row.
   * @default false
   */
  row: n.bool,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: n.oneOfType([n.arrayOf(n.oneOfType([n.func, n.object, n.bool])), n.func, n.object])
});
function Nh(e) {
  return ue("MuiRadioGroup", e);
}
le("MuiRadioGroup", ["root", "row", "error"]);
const $h = (e) => {
  const {
    classes: t,
    row: o,
    error: r
  } = e;
  return fe({
    root: ["root", o && "row", r && "error"]
  }, Nh, t);
}, pl = /* @__PURE__ */ g.forwardRef(function(t, o) {
  const {
    // private
    // eslint-disable-next-line react/prop-types
    actions: r,
    children: i,
    className: a,
    defaultValue: l,
    name: s,
    onChange: c,
    value: p,
    ...d
  } = t, f = g.useRef(null), h = $h(t), [b, v] = ni({
    controlled: p,
    default: l,
    name: "RadioGroup"
  });
  g.useImperativeHandle(r, () => ({
    focus: () => {
      let E = f.current.querySelector("input:not(:disabled):checked");
      E || (E = f.current.querySelector("input:not(:disabled)")), E && E.focus();
    }
  }), []);
  const y = Ne(o, f), C = tn(s), x = g.useMemo(() => ({
    name: C,
    onChange(E) {
      v(E.target.value), c && c(E, E.target.value);
    },
    value: b
  }), [C, c, v, b]);
  return /* @__PURE__ */ S(bi.Provider, {
    value: x,
    children: /* @__PURE__ */ S(cl, {
      role: "radiogroup",
      ref: y,
      className: Z(h.root, a),
      ...d,
      children: i
    })
  });
});
process.env.NODE_ENV !== "production" && (pl.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: n.node,
  /**
   * @ignore
   */
  className: n.string,
  /**
   * The default value. Use when the component is not controlled.
   */
  defaultValue: n.any,
  /**
   * The name used to reference the value of the control.
   * If you don't provide this prop, it falls back to a randomly generated name.
   */
  name: n.string,
  /**
   * Callback fired when a radio button is selected.
   *
   * @param {React.ChangeEvent<HTMLInputElement>} event The event source of the callback.
   * @param {string} value The value of the selected radio button.
   * You can pull out the new value by accessing `event.target.value` (string).
   */
  onChange: n.func,
  /**
   * Value of the selected radio button. The DOM API casts this to a string.
   */
  value: n.any
});
function jh(e) {
  return ue("MuiFormLabel", e);
}
const xn = le("MuiFormLabel", ["root", "colorSecondary", "focused", "disabled", "error", "filled", "required", "asterisk"]), zh = (e) => {
  const {
    classes: t,
    color: o,
    focused: r,
    disabled: i,
    error: a,
    filled: l,
    required: s
  } = e, c = {
    root: ["root", `color${V(o)}`, i && "disabled", a && "error", l && "filled", r && "focused", s && "required"],
    asterisk: ["asterisk", a && "error"]
  };
  return fe(c, jh, t);
}, Lh = H("label", {
  name: "MuiFormLabel",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: o
    } = e;
    return [t.root, o.color === "secondary" && t.colorSecondary, o.filled && t.filled];
  }
})(de(({
  theme: e
}) => ({
  color: (e.vars || e).palette.text.secondary,
  ...e.typography.body1,
  lineHeight: "1.4375em",
  padding: 0,
  position: "relative",
  variants: [...Object.entries(e.palette).filter(Ie()).map(([t]) => ({
    props: {
      color: t
    },
    style: {
      [`&.${xn.focused}`]: {
        color: (e.vars || e).palette[t].main
      }
    }
  })), {
    props: {},
    style: {
      [`&.${xn.disabled}`]: {
        color: (e.vars || e).palette.text.disabled
      },
      [`&.${xn.error}`]: {
        color: (e.vars || e).palette.error.main
      }
    }
  }]
}))), Vh = H("span", {
  name: "MuiFormLabel",
  slot: "Asterisk",
  overridesResolver: (e, t) => t.asterisk
})(de(({
  theme: e
}) => ({
  [`&.${xn.error}`]: {
    color: (e.vars || e).palette.error.main
  }
}))), ul = /* @__PURE__ */ g.forwardRef(function(t, o) {
  const r = ge({
    props: t,
    name: "MuiFormLabel"
  }), {
    children: i,
    className: a,
    color: l,
    component: s = "label",
    disabled: c,
    error: p,
    filled: d,
    focused: f,
    required: h,
    ...b
  } = r, v = on(), y = mi({
    props: r,
    muiFormControl: v,
    states: ["color", "required", "focused", "disabled", "error", "filled"]
  }), C = {
    ...r,
    color: y.color || "primary",
    component: s,
    disabled: y.disabled,
    error: y.error,
    filled: y.filled,
    focused: y.focused,
    required: y.required
  }, x = zh(C);
  return /* @__PURE__ */ ye(Lh, {
    as: s,
    ownerState: C,
    className: Z(x.root, a),
    ref: o,
    ...b,
    children: [i, y.required && /* @__PURE__ */ ye(Vh, {
      ownerState: C,
      "aria-hidden": !0,
      className: x.asterisk,
      children: [" ", "*"]
    })]
  });
});
process.env.NODE_ENV !== "production" && (ul.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: n.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: n.object,
  /**
   * @ignore
   */
  className: n.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   */
  color: n.oneOfType([n.oneOf(["error", "info", "primary", "secondary", "success", "warning"]), n.string]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: n.elementType,
  /**
   * If `true`, the label should be displayed in a disabled state.
   */
  disabled: n.bool,
  /**
   * If `true`, the label is displayed in an error state.
   */
  error: n.bool,
  /**
   * If `true`, the label should use filled classes key.
   */
  filled: n.bool,
  /**
   * If `true`, the input of this label is focused (used by `FormGroup` components).
   */
  focused: n.bool,
  /**
   * If `true`, the label will indicate that the `input` is required.
   */
  required: n.bool,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: n.oneOfType([n.arrayOf(n.oneOfType([n.func, n.object, n.bool])), n.func, n.object])
});
const gy = ({
  options: e,
  color: t = "primary",
  label: o,
  value: r,
  onChange: i,
  ...a
}) => /* @__PURE__ */ ye(ll, { component: "fieldset", children: [
  o && /* @__PURE__ */ S(ul, { component: "legend", children: o }),
  /* @__PURE__ */ S(pl, { value: r, onChange: i, ...a, children: e.map((l) => /* @__PURE__ */ S(
    yi,
    {
      value: l.value,
      control: /* @__PURE__ */ S(Bh, { color: t }),
      label: l.label
    },
    l.value
  )) })
] });
function Wh(e) {
  return Ot({ attr: { viewBox: "0 0 576 512" }, child: [{ tag: "path", attr: { d: "M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z" }, child: [] }] })(e);
}
function Uh(e) {
  return Ot({ attr: { viewBox: "0 0 24 24" }, child: [{ tag: "g", attr: { id: "Star" }, child: [{ tag: "path", attr: { d: "M16.6,20.463a1.5,1.5,0,0,1-.7-.174l-3.666-1.927a.5.5,0,0,0-.464,0L8.1,20.289a1.5,1.5,0,0,1-2.177-1.581l.7-4.082a.5.5,0,0,0-.143-.442L3.516,11.293a1.5,1.5,0,0,1,.832-2.559l4.1-.6a.5.5,0,0,0,.376-.273l1.833-3.714a1.5,1.5,0,0,1,2.69,0l1.833,3.714a.5.5,0,0,0,.376.274l4.1.6a1.5,1.5,0,0,1,.832,2.559l-2.965,2.891a.5.5,0,0,0-.144.442l.7,4.082A1.5,1.5,0,0,1,16.6,20.463Zm-3.9-2.986L16.364,19.4a.5.5,0,0,0,.725-.527l-.7-4.082a1.5,1.5,0,0,1,.432-1.328l2.965-2.89a.5.5,0,0,0-.277-.853l-4.1-.6a1.5,1.5,0,0,1-1.13-.821L12.449,4.594a.516.516,0,0,0-.9,0L9.719,8.308a1.5,1.5,0,0,1-1.13.82l-4.1.6a.5.5,0,0,0-.277.853L7.18,13.468A1.5,1.5,0,0,1,7.611,14.8l-.7,4.082a.5.5,0,0,0,.726.527L11.3,17.477a1.5,1.5,0,0,1,1.4,0Z" }, child: [] }] }] })(e);
}
const Hh = { small: 20, medium: 32, large: 40 }, hy = ({
  value: e,
  max: t = 5,
  precision: o = 0.1,
  size: r = "medium",
  readOnly: i = !1,
  disabled: a = !1,
  showValueLabel: l = !0,
  onChange: s
}) => {
  const [c, p] = Gr(null), d = Hh[r] || 32, f = Pl(() => Array.from({ length: t }), [t]), h = (C) => {
    const E = (c !== null ? c : e) - C;
    return E >= 1 ? 1 : E > 0 ? Math.round(E / o) * o : 0;
  }, b = (C, x) => {
    if (i || a) return;
    const { left: E, width: w } = x.target.getBoundingClientRect(), m = (x.clientX - E) / w;
    let T = C + m;
    T = Math.round(T / o) * o, p(Math.max(o, Math.min(t, T)));
  }, v = () => {
    p(null);
  }, y = (C, x) => {
    if (i || a || !s) return;
    const { left: E, width: w } = x.target.getBoundingClientRect(), m = (x.clientX - E) / w;
    let T = C + m;
    T = Math.round(T / o) * o, s(Math.max(o, Math.min(t, T)));
  };
  return /* @__PURE__ */ ye(
    "span",
    {
      style: { display: "inline-flex", alignItems: "center", cursor: i || a ? "default" : "pointer" },
      onMouseLeave: v,
      children: [
        f.map((C, x) => {
          const E = h(x);
          return /* @__PURE__ */ ye(
            "span",
            {
              style: { position: "relative", width: d, height: d, display: "inline-block" },
              onMouseMove: (w) => b(x, w),
              onClick: (w) => y(x, w),
              children: [
                /* @__PURE__ */ S(Uh, { size: d, style: { position: "absolute", left: 0, top: 0, color: "#bbb" } }),
                /* @__PURE__ */ S(
                  "span",
                  {
                    style: {
                      width: `${E * 100}%`,
                      overflow: "hidden",
                      position: "absolute",
                      left: 0,
                      top: 0,
                      height: "100%",
                      pointerEvents: "none",
                      display: "inline-block"
                    },
                    children: /* @__PURE__ */ S(Wh, { size: d, style: { color: "#FFD700" } })
                  }
                )
              ]
            },
            x
          );
        }),
        l && /* @__PURE__ */ S("span", { style: { marginLeft: 8, fontSize: d * 0.7 }, children: (c ?? e).toFixed(1) })
      ]
    }
  );
};
function Qh(e) {
  return ue("MuiSwitch", e);
}
const Ve = le("MuiSwitch", ["root", "edgeStart", "edgeEnd", "switchBase", "colorPrimary", "colorSecondary", "sizeSmall", "sizeMedium", "checked", "disabled", "input", "thumb", "track"]), Kh = (e) => {
  const {
    classes: t,
    edge: o,
    size: r,
    color: i,
    checked: a,
    disabled: l
  } = e, s = {
    root: ["root", o && `edge${V(o)}`, `size${V(r)}`],
    switchBase: ["switchBase", `color${V(i)}`, a && "checked", l && "disabled"],
    thumb: ["thumb"],
    track: ["track"],
    input: ["input"]
  }, c = fe(s, Qh, t);
  return {
    ...t,
    // forward the disabled and checked classes to the SwitchBase
    ...c
  };
}, Yh = H("span", {
  name: "MuiSwitch",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: o
    } = e;
    return [t.root, o.edge && t[`edge${V(o.edge)}`], t[`size${V(o.size)}`]];
  }
})({
  display: "inline-flex",
  width: 34 + 12 * 2,
  height: 14 + 12 * 2,
  overflow: "hidden",
  padding: 12,
  boxSizing: "border-box",
  position: "relative",
  flexShrink: 0,
  zIndex: 0,
  // Reset the stacking context.
  verticalAlign: "middle",
  // For correct alignment with the text.
  "@media print": {
    colorAdjust: "exact"
  },
  variants: [{
    props: {
      edge: "start"
    },
    style: {
      marginLeft: -8
    }
  }, {
    props: {
      edge: "end"
    },
    style: {
      marginRight: -8
    }
  }, {
    props: {
      size: "small"
    },
    style: {
      width: 40,
      height: 24,
      padding: 7,
      [`& .${Ve.thumb}`]: {
        width: 16,
        height: 16
      },
      [`& .${Ve.switchBase}`]: {
        padding: 4,
        [`&.${Ve.checked}`]: {
          transform: "translateX(16px)"
        }
      }
    }
  }]
}), Gh = H(Zn, {
  name: "MuiSwitch",
  slot: "SwitchBase",
  overridesResolver: (e, t) => {
    const {
      ownerState: o
    } = e;
    return [t.switchBase, {
      [`& .${Ve.input}`]: t.input
    }, o.color !== "default" && t[`color${V(o.color)}`]];
  }
})(de(({
  theme: e
}) => ({
  position: "absolute",
  top: 0,
  left: 0,
  zIndex: 1,
  // Render above the focus ripple.
  color: e.vars ? e.vars.palette.Switch.defaultColor : `${e.palette.mode === "light" ? e.palette.common.white : e.palette.grey[300]}`,
  transition: e.transitions.create(["left", "transform"], {
    duration: e.transitions.duration.shortest
  }),
  [`&.${Ve.checked}`]: {
    transform: "translateX(20px)"
  },
  [`&.${Ve.disabled}`]: {
    color: e.vars ? e.vars.palette.Switch.defaultDisabledColor : `${e.palette.mode === "light" ? e.palette.grey[100] : e.palette.grey[600]}`
  },
  [`&.${Ve.checked} + .${Ve.track}`]: {
    opacity: 0.5
  },
  [`&.${Ve.disabled} + .${Ve.track}`]: {
    opacity: e.vars ? e.vars.opacity.switchTrackDisabled : `${e.palette.mode === "light" ? 0.12 : 0.2}`
  },
  [`& .${Ve.input}`]: {
    left: "-100%",
    width: "300%"
  }
})), de(({
  theme: e
}) => ({
  "&:hover": {
    backgroundColor: e.vars ? `rgba(${e.vars.palette.action.activeChannel} / ${e.vars.palette.action.hoverOpacity})` : q(e.palette.action.active, e.palette.action.hoverOpacity),
    // Reset on touch devices, it doesn't add specificity
    "@media (hover: none)": {
      backgroundColor: "transparent"
    }
  },
  variants: [...Object.entries(e.palette).filter(Ie(["light"])).map(([t]) => ({
    props: {
      color: t
    },
    style: {
      [`&.${Ve.checked}`]: {
        color: (e.vars || e).palette[t].main,
        "&:hover": {
          backgroundColor: e.vars ? `rgba(${e.vars.palette[t].mainChannel} / ${e.vars.palette.action.hoverOpacity})` : q(e.palette[t].main, e.palette.action.hoverOpacity),
          "@media (hover: none)": {
            backgroundColor: "transparent"
          }
        },
        [`&.${Ve.disabled}`]: {
          color: e.vars ? e.vars.palette.Switch[`${t}DisabledColor`] : `${e.palette.mode === "light" ? fo(e.palette[t].main, 0.62) : uo(e.palette[t].main, 0.55)}`
        }
      },
      [`&.${Ve.checked} + .${Ve.track}`]: {
        backgroundColor: (e.vars || e).palette[t].main
      }
    }
  }))]
}))), qh = H("span", {
  name: "MuiSwitch",
  slot: "Track",
  overridesResolver: (e, t) => t.track
})(de(({
  theme: e
}) => ({
  height: "100%",
  width: "100%",
  borderRadius: 14 / 2,
  zIndex: -1,
  transition: e.transitions.create(["opacity", "background-color"], {
    duration: e.transitions.duration.shortest
  }),
  backgroundColor: e.vars ? e.vars.palette.common.onBackground : `${e.palette.mode === "light" ? e.palette.common.black : e.palette.common.white}`,
  opacity: e.vars ? e.vars.opacity.switchTrack : `${e.palette.mode === "light" ? 0.38 : 0.3}`
}))), Xh = H("span", {
  name: "MuiSwitch",
  slot: "Thumb",
  overridesResolver: (e, t) => t.thumb
})(de(({
  theme: e
}) => ({
  boxShadow: (e.vars || e).shadows[1],
  backgroundColor: "currentColor",
  width: 20,
  height: 20,
  borderRadius: "50%"
}))), dl = /* @__PURE__ */ g.forwardRef(function(t, o) {
  const r = ge({
    props: t,
    name: "MuiSwitch"
  }), {
    className: i,
    color: a = "primary",
    edge: l = !1,
    size: s = "medium",
    sx: c,
    slots: p = {},
    slotProps: d = {},
    ...f
  } = r, h = {
    ...r,
    color: a,
    edge: l,
    size: s
  }, b = Kh(h), v = {
    slots: p,
    slotProps: d
  }, [y, C] = se("root", {
    className: Z(b.root, i),
    elementType: Yh,
    externalForwardedProps: v,
    ownerState: h,
    additionalProps: {
      sx: c
    }
  }), [x, E] = se("thumb", {
    className: b.thumb,
    elementType: Xh,
    externalForwardedProps: v,
    ownerState: h
  }), w = /* @__PURE__ */ S(x, {
    ...E
  }), [m, T] = se("track", {
    className: b.track,
    elementType: qh,
    externalForwardedProps: v,
    ownerState: h
  });
  return /* @__PURE__ */ ye(y, {
    ...C,
    children: [/* @__PURE__ */ S(Gh, {
      type: "checkbox",
      icon: w,
      checkedIcon: w,
      ref: o,
      ownerState: h,
      ...f,
      classes: {
        ...b,
        root: b.switchBase
      },
      slots: {
        ...p.switchBase && {
          root: p.switchBase
        },
        ...p.input && {
          input: p.input
        }
      },
      slotProps: {
        ...d.switchBase && {
          root: typeof d.switchBase == "function" ? d.switchBase(h) : d.switchBase
        },
        ...d.input && {
          input: typeof d.input == "function" ? d.input(h) : d.input
        }
      }
    }), /* @__PURE__ */ S(m, {
      ...T
    })]
  });
});
process.env.NODE_ENV !== "production" && (dl.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * If `true`, the component is checked.
   */
  checked: n.bool,
  /**
   * The icon to display when the component is checked.
   */
  checkedIcon: n.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: n.object,
  /**
   * @ignore
   */
  className: n.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * @default 'primary'
   */
  color: n.oneOfType([n.oneOf(["default", "primary", "secondary", "error", "info", "success", "warning"]), n.string]),
  /**
   * The default checked state. Use when the component is not controlled.
   */
  defaultChecked: n.bool,
  /**
   * If `true`, the component is disabled.
   */
  disabled: n.bool,
  /**
   * If `true`, the ripple effect is disabled.
   * @default false
   */
  disableRipple: n.bool,
  /**
   * If given, uses a negative margin to counteract the padding on one
   * side (this is often helpful for aligning the left or right
   * side of the icon with content above or below, without ruining the border
   * size and shape).
   * @default false
   */
  edge: n.oneOf(["end", "start", !1]),
  /**
   * The icon to display when the component is unchecked.
   */
  icon: n.node,
  /**
   * The id of the `input` element.
   */
  id: n.string,
  /**
   * [Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Attributes) applied to the `input` element.
   * @deprecated Use `slotProps.input` instead. This prop will be removed in v7. See [Migrating from deprecated APIs](/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   */
  inputProps: n.object,
  /**
   * Pass a ref to the `input` element.
   * @deprecated Use `slotProps.input.ref` instead. This prop will be removed in v7. See [Migrating from deprecated APIs](/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   */
  inputRef: Tt,
  /**
   * Callback fired when the state is changed.
   *
   * @param {React.ChangeEvent<HTMLInputElement>} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value` (string).
   * You can pull out the new checked state by accessing `event.target.checked` (boolean).
   */
  onChange: n.func,
  /**
   * If `true`, the `input` element is required.
   * @default false
   */
  required: n.bool,
  /**
   * The size of the component.
   * `small` is equivalent to the dense switch styling.
   * @default 'medium'
   */
  size: n.oneOfType([n.oneOf(["medium", "small"]), n.string]),
  /**
   * The props used for each slot inside.
   * @default {}
   */
  slotProps: n.shape({
    input: n.oneOfType([n.func, n.object]),
    root: n.oneOfType([n.func, n.object]),
    switchBase: n.oneOfType([n.func, n.object]),
    thumb: n.oneOfType([n.func, n.object]),
    track: n.oneOfType([n.func, n.object])
  }),
  /**
   * The components used for each slot inside.
   * @default {}
   */
  slots: n.shape({
    input: n.elementType,
    root: n.elementType,
    switchBase: n.elementType,
    thumb: n.elementType,
    track: n.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: n.oneOfType([n.arrayOf(n.oneOfType([n.func, n.object, n.bool])), n.func, n.object]),
  /**
   * The value of the component. The DOM API casts this to a string.
   * The browser uses "on" as the default value.
   */
  value: n.any
});
const Pr = (e, t = "#000000") => {
  if (!e) return;
  let o = jl(e);
  return o = o.replace(/class=".*?"/g, "").replace(/focusable=".*?"/g, "").replace(/aria-hidden=".*?"/g, "").replace(/data-testid=".*?"/g, ""), o.includes("xmlns") || (o = o.replace("<svg", '<svg xmlns="http://www.w3.org/2000/svg"')), o.includes("fill=") || (o = o.replace("<path", '<path fill="' + t + '"')), `url("data:image/svg+xml;utf8,${encodeURIComponent(o)}")`;
}, Jh = (e, t = "primary") => {
  var i;
  const o = Pe[t], r = ((i = e == null ? void 0 : e.palette) == null ? void 0 : i[t]) ?? o;
  return {
    bgColor: r.custMain ?? o.custMain,
    thumbColor: r.onMain ?? o.onMain,
    actthumbColor: r.fabBg ?? o.fabBg,
    unselectbgColor: r.surface ?? o.surface,
    unselectColor: r.outline ?? o.outline,
    unselectthumbColor: r.iconFont ?? o.iconFont
  };
}, Zh = {
  small: { w: 40, h: 24 },
  medium: { w: 52, h: 32 },
  // ⇦ 原始 52×32 | thumb24 checked
  large: { w: 80, h: 50 }
}, _h = H(dl)(({ theme: e, selectedIcon: t, unselectedIcon: o, custsize: r = "medium" }) => {
  const i = Jh(e), a = Pr(
    t,
    i.bgColor
  ), l = Pr(
    t,
    q(at[0], 0.12)
    // "000000"
  ), s = Pr(
    o,
    i.unselectbgColor
  ), c = Zh[r], p = c.h - 8;
  return {
    width: c.w,
    height: c.h,
    padding: 0,
    borderRadius: 100,
    overflow: "visible",
    "& .MuiSwitch-thumb": {
      position: "relative",
      margin: o ? (c.h - p) / 2 : (c.h - c.h / 2) / 2,
      boxShadow: "none",
      width: o ? p : c.h / 2,
      height: o ? p : c.h / 2,
      transitionDuration: "300ms",
      color: i.unselectColor,
      "&::before": {
        content: "''",
        position: "absolute",
        width: p - 8,
        // ✅ 固定寬高
        height: p - 8,
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundImage: s
      }
    },
    "& .MuiSwitch-track": {
      boxSizing: "border-box",
      borderRadius: 100,
      backgroundColor: i.unselectbgColor,
      border: `2px solid ${i.unselectColor}`,
      opacity: 1
    },
    "& .MuiSwitch-switchBase": {
      padding: 0,
      //   margin: 4,
      transitionDuration: "300ms",
      "&.Mui-disabled": {
        "& .MuiSwitch-thumb": {
          color: q(at[0], 0.38)
        },
        "& + .MuiSwitch-track": {
          border: `2px solid ${q(at[0], 0.12)}`,
          opacity: 1
        }
      },
      "&:active": {
        "& .MuiSwitch-thumb": {
          margin: 0,
          width: c.h - 4,
          height: c.h - 4
        }
      },
      "&:hover ": {
        backgroundColor: q(at[0], 0.08),
        margin: -4,
        width: c.h + 8,
        height: c.h + 8,
        "& .MuiSwitch-thumb": {
          color: i.unselectthumbColor
        }
      },
      "&.Mui-checked": {
        transform: `translateX( ${c.w - c.h}px)`,
        "&:hover ": {
          backgroundColor: q(i.bgColor, 0.08)
        },
        "& .MuiSwitch-thumb": {
          color: i.thumbColor,
          margin: (c.h - p) / 2,
          width: p,
          height: p
        },
        "& .MuiSwitch-thumb:before": {
          backgroundImage: a
        },
        "& + .MuiSwitch-track": {
          backgroundColor: i.bgColor,
          opacity: 1,
          border: 0
        },
        "&.Mui-disabled": {
          "+ .MuiSwitch-track": {
            backgroundColor: at[0],
            opacity: 0.12
          },
          "& .MuiSwitch-thumb:before": {
            transitionDuration: "300ms",
            backgroundImage: l
          }
        },
        "&.Mui-focusVisible .MuiSwitch-thumb, &:hover .MuiSwitch-thumb": {
          color: i.actthumbColor
        },
        "&:active": {
          "& .MuiSwitch-thumb": {
            width: c.h - 4,
            height: c.h - 4
          }
        }
      }
    }
  };
}), by = ({
  selectedIcon: e,
  unselectedIcon: t,
  size: o,
  ...r
}) => /* @__PURE__ */ S(
  _h,
  {
    selectedIcon: e,
    unselectedIcon: t,
    custsize: o,
    ...r
  }
);
function eb(e) {
  return (1 + Math.sin(Math.PI * e - Math.PI / 2)) / 2;
}
function tb(e, t, o, r = {}, i = () => {
}) {
  const {
    ease: a = eb,
    duration: l = 300
    // standard
  } = r;
  let s = null;
  const c = t[e];
  let p = !1;
  const d = () => {
    p = !0;
  }, f = (h) => {
    if (p) {
      i(new Error("Animation cancelled"));
      return;
    }
    s === null && (s = h);
    const b = Math.min(1, (h - s) / l);
    if (t[e] = a(b) * (o - c) + c, b >= 1) {
      requestAnimationFrame(() => {
        i(null);
      });
      return;
    }
    requestAnimationFrame(f);
  };
  return c === o ? (i(new Error("Element already at target position")), d) : (requestAnimationFrame(f), d);
}
const ob = {
  width: 99,
  height: 99,
  position: "absolute",
  top: -9999,
  overflow: "scroll"
};
function fl(e) {
  const {
    onChange: t,
    ...o
  } = e, r = g.useRef(), i = g.useRef(null), a = () => {
    r.current = i.current.offsetHeight - i.current.clientHeight;
  };
  return gt(() => {
    const l = qn(() => {
      const c = r.current;
      a(), c !== r.current && t(r.current);
    }), s = We(i.current);
    return s.addEventListener("resize", l), () => {
      l.clear(), s.removeEventListener("resize", l);
    };
  }, [t]), g.useEffect(() => {
    a(), t(r.current);
  }, [t]), /* @__PURE__ */ S("div", {
    style: ob,
    ...o,
    ref: i
  });
}
process.env.NODE_ENV !== "production" && (fl.propTypes = {
  onChange: n.func.isRequired
});
const nb = ze(/* @__PURE__ */ S("path", {
  d: "M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z"
}), "KeyboardArrowLeft"), rb = ze(/* @__PURE__ */ S("path", {
  d: "M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z"
}), "KeyboardArrowRight");
function ib(e) {
  return ue("MuiTabScrollButton", e);
}
const ab = le("MuiTabScrollButton", ["root", "vertical", "horizontal", "disabled"]), sb = (e) => {
  const {
    classes: t,
    orientation: o,
    disabled: r
  } = e;
  return fe({
    root: ["root", o, r && "disabled"]
  }, ib, t);
}, lb = H(lt, {
  name: "MuiTabScrollButton",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: o
    } = e;
    return [t.root, o.orientation && t[o.orientation]];
  }
})({
  width: 40,
  flexShrink: 0,
  opacity: 0.8,
  [`&.${ab.disabled}`]: {
    opacity: 0
  },
  variants: [{
    props: {
      orientation: "vertical"
    },
    style: {
      width: "100%",
      height: 40,
      "& svg": {
        transform: "var(--TabScrollButton-svgRotate)"
      }
    }
  }]
}), gl = /* @__PURE__ */ g.forwardRef(function(t, o) {
  const r = ge({
    props: t,
    name: "MuiTabScrollButton"
  }), {
    className: i,
    slots: a = {},
    slotProps: l = {},
    direction: s,
    orientation: c,
    disabled: p,
    ...d
  } = r, f = Co(), h = {
    isRtl: f,
    ...r
  }, b = sb(h), v = a.StartScrollButtonIcon ?? nb, y = a.EndScrollButtonIcon ?? rb, C = go({
    elementType: v,
    externalSlotProps: l.startScrollButtonIcon,
    additionalProps: {
      fontSize: "small"
    },
    ownerState: h
  }), x = go({
    elementType: y,
    externalSlotProps: l.endScrollButtonIcon,
    additionalProps: {
      fontSize: "small"
    },
    ownerState: h
  });
  return /* @__PURE__ */ S(lb, {
    component: "div",
    className: Z(b.root, i),
    ref: o,
    role: null,
    ownerState: h,
    tabIndex: null,
    ...d,
    style: {
      ...d.style,
      ...c === "vertical" && {
        "--TabScrollButton-svgRotate": `rotate(${f ? -90 : 90}deg)`
      }
    },
    children: s === "left" ? /* @__PURE__ */ S(v, {
      ...C
    }) : /* @__PURE__ */ S(y, {
      ...x
    })
  });
});
process.env.NODE_ENV !== "production" && (gl.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: n.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: n.object,
  /**
   * @ignore
   */
  className: n.string,
  /**
   * The direction the button should indicate.
   */
  direction: n.oneOf(["left", "right"]).isRequired,
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: n.bool,
  /**
   * The component orientation (layout flow direction).
   */
  orientation: n.oneOf(["horizontal", "vertical"]).isRequired,
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   * @default {}
   */
  slotProps: n.shape({
    endScrollButtonIcon: n.oneOfType([n.func, n.object]),
    startScrollButtonIcon: n.oneOfType([n.func, n.object])
  }),
  /**
   * The components used for each slot inside.
   * @default {}
   */
  slots: n.shape({
    EndScrollButtonIcon: n.elementType,
    StartScrollButtonIcon: n.elementType
  }),
  /**
   * @ignore
   */
  style: n.object,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: n.oneOfType([n.arrayOf(n.oneOfType([n.func, n.object, n.bool])), n.func, n.object])
});
function cb(e) {
  return ue("MuiTabs", e);
}
const Br = le("MuiTabs", ["root", "vertical", "list", "flexContainer", "flexContainerVertical", "centered", "scroller", "fixed", "scrollableX", "scrollableY", "hideScrollbar", "scrollButtons", "scrollButtonsHideMobile", "indicator"]), Fa = (e, t) => e === t ? e.firstChild : t && t.nextElementSibling ? t.nextElementSibling : e.firstChild, Pa = (e, t) => e === t ? e.lastChild : t && t.previousElementSibling ? t.previousElementSibling : e.lastChild, gn = (e, t, o) => {
  let r = !1, i = o(e, t);
  for (; i; ) {
    if (i === e.firstChild) {
      if (r)
        return;
      r = !0;
    }
    const a = i.disabled || i.getAttribute("aria-disabled") === "true";
    if (!i.hasAttribute("tabindex") || a)
      i = o(e, i);
    else {
      i.focus();
      return;
    }
  }
}, pb = (e) => {
  const {
    vertical: t,
    fixed: o,
    hideScrollbar: r,
    scrollableX: i,
    scrollableY: a,
    centered: l,
    scrollButtonsHideMobile: s,
    classes: c
  } = e;
  return fe({
    root: ["root", t && "vertical"],
    scroller: ["scroller", o && "fixed", r && "hideScrollbar", i && "scrollableX", a && "scrollableY"],
    list: ["list", "flexContainer", t && "flexContainerVertical", t && "vertical", l && "centered"],
    indicator: ["indicator"],
    scrollButtons: ["scrollButtons", s && "scrollButtonsHideMobile"],
    scrollableX: [i && "scrollableX"],
    hideScrollbar: [r && "hideScrollbar"]
  }, cb, c);
}, ub = H("div", {
  name: "MuiTabs",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: o
    } = e;
    return [{
      [`& .${Br.scrollButtons}`]: t.scrollButtons
    }, {
      [`& .${Br.scrollButtons}`]: o.scrollButtonsHideMobile && t.scrollButtonsHideMobile
    }, t.root, o.vertical && t.vertical];
  }
})(de(({
  theme: e
}) => ({
  overflow: "hidden",
  minHeight: 48,
  // Add iOS momentum scrolling for iOS < 13.0
  WebkitOverflowScrolling: "touch",
  display: "flex",
  variants: [{
    props: ({
      ownerState: t
    }) => t.vertical,
    style: {
      flexDirection: "column"
    }
  }, {
    props: ({
      ownerState: t
    }) => t.scrollButtonsHideMobile,
    style: {
      [`& .${Br.scrollButtons}`]: {
        [e.breakpoints.down("sm")]: {
          display: "none"
        }
      }
    }
  }]
}))), db = H("div", {
  name: "MuiTabs",
  slot: "Scroller",
  overridesResolver: (e, t) => {
    const {
      ownerState: o
    } = e;
    return [t.scroller, o.fixed && t.fixed, o.hideScrollbar && t.hideScrollbar, o.scrollableX && t.scrollableX, o.scrollableY && t.scrollableY];
  }
})({
  position: "relative",
  display: "inline-block",
  flex: "1 1 auto",
  whiteSpace: "nowrap",
  variants: [{
    props: ({
      ownerState: e
    }) => e.fixed,
    style: {
      overflowX: "hidden",
      width: "100%"
    }
  }, {
    props: ({
      ownerState: e
    }) => e.hideScrollbar,
    style: {
      // Hide dimensionless scrollbar on macOS
      scrollbarWidth: "none",
      // Firefox
      "&::-webkit-scrollbar": {
        display: "none"
        // Safari + Chrome
      }
    }
  }, {
    props: ({
      ownerState: e
    }) => e.scrollableX,
    style: {
      overflowX: "auto",
      overflowY: "hidden"
    }
  }, {
    props: ({
      ownerState: e
    }) => e.scrollableY,
    style: {
      overflowY: "auto",
      overflowX: "hidden"
    }
  }]
}), fb = H("div", {
  name: "MuiTabs",
  slot: "List",
  overridesResolver: (e, t) => {
    const {
      ownerState: o
    } = e;
    return [t.list, t.flexContainer, o.vertical && t.flexContainerVertical, o.centered && t.centered];
  }
})({
  display: "flex",
  variants: [{
    props: ({
      ownerState: e
    }) => e.vertical,
    style: {
      flexDirection: "column"
    }
  }, {
    props: ({
      ownerState: e
    }) => e.centered,
    style: {
      justifyContent: "center"
    }
  }]
}), gb = H("span", {
  name: "MuiTabs",
  slot: "Indicator",
  overridesResolver: (e, t) => t.indicator
})(de(({
  theme: e
}) => ({
  position: "absolute",
  height: 2,
  bottom: 0,
  width: "100%",
  transition: e.transitions.create(),
  variants: [{
    props: {
      indicatorColor: "primary"
    },
    style: {
      backgroundColor: (e.vars || e).palette.primary.main
    }
  }, {
    props: {
      indicatorColor: "secondary"
    },
    style: {
      backgroundColor: (e.vars || e).palette.secondary.main
    }
  }, {
    props: ({
      ownerState: t
    }) => t.vertical,
    style: {
      height: "100%",
      width: 2,
      right: 0
    }
  }]
}))), hb = H(fl)({
  overflowX: "auto",
  overflowY: "hidden",
  // Hide dimensionless scrollbar on macOS
  scrollbarWidth: "none",
  // Firefox
  "&::-webkit-scrollbar": {
    display: "none"
    // Safari + Chrome
  }
}), Ba = {};
let Ma = !1;
const hl = /* @__PURE__ */ g.forwardRef(function(t, o) {
  const r = ge({
    props: t,
    name: "MuiTabs"
  }), i = rt(), a = Co(), {
    "aria-label": l,
    "aria-labelledby": s,
    action: c,
    centered: p = !1,
    children: d,
    className: f,
    component: h = "div",
    allowScrollButtonsMobile: b = !1,
    indicatorColor: v = "primary",
    onChange: y,
    orientation: C = "horizontal",
    ScrollButtonComponent: x,
    // TODO: remove in v7 (deprecated in v6)
    scrollButtons: E = "auto",
    selectionFollowsFocus: w,
    slots: m = {},
    slotProps: T = {},
    TabIndicatorProps: A = {},
    // TODO: remove in v7 (deprecated in v6)
    TabScrollButtonProps: P = {},
    // TODO: remove in v7 (deprecated in v6)
    textColor: $ = "primary",
    value: D,
    variant: u = "standard",
    visibleScrollbar: R = !1,
    ...B
  } = r, O = u === "scrollable", M = C === "vertical", N = M ? "scrollTop" : "scrollLeft", F = M ? "top" : "left", W = M ? "bottom" : "right", U = M ? "clientHeight" : "clientWidth", j = M ? "height" : "width", k = {
    ...r,
    component: h,
    allowScrollButtonsMobile: b,
    indicatorColor: v,
    orientation: C,
    vertical: M,
    scrollButtons: E,
    textColor: $,
    variant: u,
    visibleScrollbar: R,
    fixed: !O,
    hideScrollbar: O && !R,
    scrollableX: O && !M,
    scrollableY: O && M,
    centered: p && !O,
    scrollButtonsHideMobile: !b
  }, L = pb(k), oe = go({
    elementType: m.StartScrollButtonIcon,
    externalSlotProps: T.startScrollButtonIcon,
    ownerState: k
  }), ee = go({
    elementType: m.EndScrollButtonIcon,
    externalSlotProps: T.endScrollButtonIcon,
    ownerState: k
  });
  process.env.NODE_ENV !== "production" && p && O && console.error('MUI: You can not use the `centered={true}` and `variant="scrollable"` properties at the same time on a `Tabs` component.');
  const [Y, K] = g.useState(!1), [G, z] = g.useState(Ba), [te, ne] = g.useState(!1), [Q, J] = g.useState(!1), [X, ce] = g.useState(!1), [pe, Te] = g.useState({
    overflow: "hidden",
    scrollbarWidth: 0
  }), Ce = /* @__PURE__ */ new Map(), be = g.useRef(null), xe = g.useRef(null), Me = {
    slots: m,
    slotProps: {
      indicator: A,
      scrollButton: P,
      ...T
    }
  }, De = () => {
    const _ = be.current;
    let re;
    if (_) {
      const ve = _.getBoundingClientRect();
      re = {
        clientWidth: _.clientWidth,
        scrollLeft: _.scrollLeft,
        scrollTop: _.scrollTop,
        scrollWidth: _.scrollWidth,
        top: ve.top,
        bottom: ve.bottom,
        left: ve.left,
        right: ve.right
      };
    }
    let me;
    if (_ && D !== !1) {
      const ve = xe.current.children;
      if (ve.length > 0) {
        const Ae = ve[Ce.get(D)];
        process.env.NODE_ENV !== "production" && (Ae || console.error(["MUI: The `value` provided to the Tabs component is invalid.", `None of the Tabs' children match with "${D}".`, Ce.keys ? `You can provide one of the following values: ${Array.from(Ce.keys()).join(", ")}.` : null].join(`
`))), me = Ae ? Ae.getBoundingClientRect() : null, process.env.NODE_ENV !== "production" && process.env.NODE_ENV !== "test" && !Ma && me && me.width === 0 && me.height === 0 && // if the whole Tabs component is hidden, don't warn
        re.clientWidth !== 0 && (re = null, console.error(["MUI: The `value` provided to the Tabs component is invalid.", `The Tab with this \`value\` ("${D}") is not part of the document layout.`, "Make sure the tab item is present in the document or that it's not `display: none`."].join(`
`)), Ma = !0);
      }
    }
    return {
      tabsMeta: re,
      tabMeta: me
    };
  }, we = He(() => {
    const {
      tabsMeta: _,
      tabMeta: re
    } = De();
    let me = 0, ve;
    M ? (ve = "top", re && _ && (me = re.top - _.top + _.scrollTop)) : (ve = a ? "right" : "left", re && _ && (me = (a ? -1 : 1) * (re[ve] - _[ve] + _.scrollLeft)));
    const Ae = {
      [ve]: me,
      // May be wrong until the font is loaded.
      [j]: re ? re[j] : 0
    };
    if (typeof G[ve] != "number" || typeof G[j] != "number")
      z(Ae);
    else {
      const pt = Math.abs(G[ve] - Ae[ve]), zt = Math.abs(G[j] - Ae[j]);
      (pt >= 1 || zt >= 1) && z(Ae);
    }
  }), ie = (_, {
    animation: re = !0
  } = {}) => {
    re ? tb(N, be.current, _, {
      duration: i.transitions.duration.standard
    }) : be.current[N] = _;
  }, At = (_) => {
    let re = be.current[N];
    M ? re += _ : re += _ * (a ? -1 : 1), ie(re);
  }, kt = () => {
    const _ = be.current[U];
    let re = 0;
    const me = Array.from(xe.current.children);
    for (let ve = 0; ve < me.length; ve += 1) {
      const Ae = me[ve];
      if (re + Ae[U] > _) {
        ve === 0 && (re = _);
        break;
      }
      re += Ae[U];
    }
    return re;
  }, Zt = () => {
    At(-1 * kt());
  }, _t = () => {
    At(kt());
  }, [Rt, {
    onChange: mt,
    ...$t
  }] = se("scrollbar", {
    className: Z(L.scrollableX, L.hideScrollbar),
    elementType: hb,
    shouldForwardComponentProp: !0,
    externalForwardedProps: Me,
    ownerState: k
  }), wo = g.useCallback((_) => {
    mt == null || mt(_), Te({
      overflow: null,
      scrollbarWidth: _
    });
  }, [mt]), [Le, Ft] = se("scrollButtons", {
    className: Z(L.scrollButtons, P.className),
    elementType: gl,
    externalForwardedProps: Me,
    ownerState: k,
    additionalProps: {
      orientation: C,
      slots: {
        StartScrollButtonIcon: m.startScrollButtonIcon || m.StartScrollButtonIcon,
        EndScrollButtonIcon: m.endScrollButtonIcon || m.EndScrollButtonIcon
      },
      slotProps: {
        startScrollButtonIcon: oe,
        endScrollButtonIcon: ee
      }
    }
  }), yt = () => {
    const _ = {};
    _.scrollbarSizeListener = O ? /* @__PURE__ */ S(Rt, {
      ...$t,
      onChange: wo
    }) : null;
    const me = O && (E === "auto" && (te || Q) || E === !0);
    return _.scrollButtonStart = me ? /* @__PURE__ */ S(Le, {
      direction: a ? "right" : "left",
      onClick: Zt,
      disabled: !te,
      ...Ft
    }) : null, _.scrollButtonEnd = me ? /* @__PURE__ */ S(Le, {
      direction: a ? "left" : "right",
      onClick: _t,
      disabled: !Q,
      ...Ft
    }) : null, _;
  }, Ue = He((_) => {
    const {
      tabsMeta: re,
      tabMeta: me
    } = De();
    if (!(!me || !re)) {
      if (me[F] < re[F]) {
        const ve = re[N] + (me[F] - re[F]);
        ie(ve, {
          animation: _
        });
      } else if (me[W] > re[W]) {
        const ve = re[N] + (me[W] - re[W]);
        ie(ve, {
          animation: _
        });
      }
    }
  }), eo = He(() => {
    O && E !== !1 && ce(!X);
  });
  g.useEffect(() => {
    const _ = qn(() => {
      be.current && we();
    });
    let re;
    const me = (pt) => {
      pt.forEach((zt) => {
        zt.removedNodes.forEach((To) => {
          re == null || re.unobserve(To);
        }), zt.addedNodes.forEach((To) => {
          re == null || re.observe(To);
        });
      }), _(), eo();
    }, ve = We(be.current);
    ve.addEventListener("resize", _);
    let Ae;
    return typeof ResizeObserver < "u" && (re = new ResizeObserver(_), Array.from(xe.current.children).forEach((pt) => {
      re.observe(pt);
    })), typeof MutationObserver < "u" && (Ae = new MutationObserver(me), Ae.observe(xe.current, {
      childList: !0
    })), () => {
      _.clear(), ve.removeEventListener("resize", _), Ae == null || Ae.disconnect(), re == null || re.disconnect();
    };
  }, [we, eo]), g.useEffect(() => {
    const _ = Array.from(xe.current.children), re = _.length;
    if (typeof IntersectionObserver < "u" && re > 0 && O && E !== !1) {
      const me = _[0], ve = _[re - 1], Ae = {
        root: be.current,
        threshold: 0.99
      }, pt = (cr) => {
        ne(!cr[0].isIntersecting);
      }, zt = new IntersectionObserver(pt, Ae);
      zt.observe(me);
      const To = (cr) => {
        J(!cr[0].isIntersecting);
      }, ki = new IntersectionObserver(To, Ae);
      return ki.observe(ve), () => {
        zt.disconnect(), ki.disconnect();
      };
    }
  }, [O, E, X, d == null ? void 0 : d.length]), g.useEffect(() => {
    K(!0);
  }, []), g.useEffect(() => {
    we();
  }), g.useEffect(() => {
    Ue(Ba !== G);
  }, [Ue, G]), g.useImperativeHandle(c, () => ({
    updateIndicator: we,
    updateScrollButtons: eo
  }), [we, eo]);
  const [So, or] = se("indicator", {
    className: Z(L.indicator, A.className),
    elementType: gb,
    externalForwardedProps: Me,
    ownerState: k,
    additionalProps: {
      style: G
    }
  }), jt = /* @__PURE__ */ S(So, {
    ...or
  });
  let to = 0;
  const nr = g.Children.map(d, (_) => {
    if (!/* @__PURE__ */ g.isValidElement(_))
      return null;
    process.env.NODE_ENV !== "production" && qr(_) && console.error(["MUI: The Tabs component doesn't accept a Fragment as a child.", "Consider providing an array instead."].join(`
`));
    const re = _.props.value === void 0 ? to : _.props.value;
    Ce.set(re, to);
    const me = re === D;
    return to += 1, /* @__PURE__ */ g.cloneElement(_, {
      fullWidth: u === "fullWidth",
      indicator: me && !Y && jt,
      selected: me,
      selectionFollowsFocus: w,
      onChange: y,
      textColor: $,
      value: re,
      ...to === 1 && D === !1 && !_.props.tabIndex ? {
        tabIndex: 0
      } : {}
    });
  }), rr = (_) => {
    if (_.altKey || _.shiftKey || _.ctrlKey || _.metaKey)
      return;
    const re = xe.current, me = $e(re).activeElement;
    if (me.getAttribute("role") !== "tab")
      return;
    let Ae = C === "horizontal" ? "ArrowLeft" : "ArrowUp", pt = C === "horizontal" ? "ArrowRight" : "ArrowDown";
    switch (C === "horizontal" && a && (Ae = "ArrowRight", pt = "ArrowLeft"), _.key) {
      case Ae:
        _.preventDefault(), gn(re, me, Pa);
        break;
      case pt:
        _.preventDefault(), gn(re, me, Fa);
        break;
      case "Home":
        _.preventDefault(), gn(re, null, Fa);
        break;
      case "End":
        _.preventDefault(), gn(re, null, Pa);
        break;
    }
  }, Eo = yt(), [ir, ar] = se("root", {
    ref: o,
    className: Z(L.root, f),
    elementType: ub,
    externalForwardedProps: {
      ...Me,
      ...B,
      component: h
    },
    ownerState: k
  }), [sr, lr] = se("scroller", {
    ref: be,
    className: L.scroller,
    elementType: db,
    externalForwardedProps: Me,
    ownerState: k,
    additionalProps: {
      style: {
        overflow: pe.overflow,
        [M ? `margin${a ? "Left" : "Right"}` : "marginBottom"]: R ? void 0 : -pe.scrollbarWidth
      }
    }
  }), [ae, Ye] = se("list", {
    ref: xe,
    className: Z(L.list, L.flexContainer),
    elementType: fb,
    externalForwardedProps: Me,
    ownerState: k,
    getSlotProps: (_) => ({
      ..._,
      onKeyDown: (re) => {
        var me;
        rr(re), (me = _.onKeyDown) == null || me.call(_, re);
      }
    })
  });
  return /* @__PURE__ */ ye(ir, {
    ...ar,
    children: [Eo.scrollButtonStart, Eo.scrollbarSizeListener, /* @__PURE__ */ ye(sr, {
      ...lr,
      children: [/* @__PURE__ */ S(ae, {
        "aria-label": l,
        "aria-labelledby": s,
        "aria-orientation": C === "vertical" ? "vertical" : null,
        role: "tablist",
        ...Ye,
        children: nr
      }), Y && jt]
    }), Eo.scrollButtonEnd]
  });
});
process.env.NODE_ENV !== "production" && (hl.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Callback fired when the component mounts.
   * This is useful when you want to trigger an action programmatically.
   * It supports two actions: `updateIndicator()` and `updateScrollButtons()`
   *
   * @param {object} actions This object contains all possible actions
   * that can be triggered programmatically.
   */
  action: Tt,
  /**
   * If `true`, the scroll buttons aren't forced hidden on mobile.
   * By default the scroll buttons are hidden on mobile and takes precedence over `scrollButtons`.
   * @default false
   */
  allowScrollButtonsMobile: n.bool,
  /**
   * The label for the Tabs as a string.
   */
  "aria-label": n.string,
  /**
   * An id or list of ids separated by a space that label the Tabs.
   */
  "aria-labelledby": n.string,
  /**
   * If `true`, the tabs are centered.
   * This prop is intended for large views.
   * @default false
   */
  centered: n.bool,
  /**
   * The content of the component.
   */
  children: n.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: n.object,
  /**
   * @ignore
   */
  className: n.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: n.elementType,
  /**
   * Determines the color of the indicator.
   * @default 'primary'
   */
  indicatorColor: n.oneOfType([n.oneOf(["primary", "secondary"]), n.string]),
  /**
   * Callback fired when the value changes.
   *
   * @param {React.SyntheticEvent} event The event source of the callback. **Warning**: This is a generic event not a change event.
   * @param {any} value We default to the index of the child (number)
   */
  onChange: n.func,
  /**
   * The component orientation (layout flow direction).
   * @default 'horizontal'
   */
  orientation: n.oneOf(["horizontal", "vertical"]),
  /**
   * The component used to render the scroll buttons.
   * @deprecated use the `slots.scrollButtons` prop instead. This prop will be removed in v7. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   * @default TabScrollButton
   */
  ScrollButtonComponent: n.elementType,
  /**
   * Determine behavior of scroll buttons when tabs are set to scroll:
   *
   * - `auto` will only present them when not all the items are visible.
   * - `true` will always present them.
   * - `false` will never present them.
   *
   * By default the scroll buttons are hidden on mobile.
   * This behavior can be disabled with `allowScrollButtonsMobile`.
   * @default 'auto'
   */
  scrollButtons: n.oneOf(["auto", !1, !0]),
  /**
   * If `true` the selected tab changes on focus. Otherwise it only
   * changes on activation.
   */
  selectionFollowsFocus: n.bool,
  /**
   * The props used for each slot inside.
   * @default {}
   */
  slotProps: n.shape({
    endScrollButtonIcon: n.oneOfType([n.func, n.object]),
    indicator: n.oneOfType([n.func, n.object]),
    list: n.oneOfType([n.func, n.object]),
    root: n.oneOfType([n.func, n.object]),
    scrollbar: n.oneOfType([n.func, n.object]),
    scrollButtons: n.oneOfType([n.func, n.object]),
    scroller: n.oneOfType([n.func, n.object]),
    startScrollButtonIcon: n.oneOfType([n.func, n.object])
  }),
  /**
   * The components used for each slot inside.
   * @default {}
   */
  slots: n.shape({
    endScrollButtonIcon: n.elementType,
    EndScrollButtonIcon: n.elementType,
    indicator: n.elementType,
    list: n.elementType,
    root: n.elementType,
    scrollbar: n.elementType,
    scrollButtons: n.elementType,
    scroller: n.elementType,
    startScrollButtonIcon: n.elementType,
    StartScrollButtonIcon: n.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: n.oneOfType([n.arrayOf(n.oneOfType([n.func, n.object, n.bool])), n.func, n.object]),
  /**
   * Props applied to the tab indicator element.
   * @deprecated use the `slotProps.indicator` prop instead. This prop will be removed in v7. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   * @default  {}
   */
  TabIndicatorProps: n.object,
  /**
   * Props applied to the [`TabScrollButton`](https://mui.com/material-ui/api/tab-scroll-button/) element.
   * @deprecated use the `slotProps.scrollButtons` prop instead. This prop will be removed in v7. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   * @default {}
   */
  TabScrollButtonProps: n.object,
  /**
   * Determines the color of the `Tab`.
   * @default 'primary'
   */
  textColor: n.oneOf(["inherit", "primary", "secondary"]),
  /**
   * The value of the currently selected `Tab`.
   * If you don't want any selected `Tab`, you can set this prop to `false`.
   */
  value: n.any,
  /**
   * Determines additional display behavior of the tabs:
   *
   *  - `scrollable` will invoke scrolling properties and allow for horizontally
   *  scrolling (or swiping) of the tab bar.
   *  - `fullWidth` will make the tabs grow to use all the available space,
   *  which should be used for small views, like on mobile.
   *  - `standard` will render the default state.
   * @default 'standard'
   */
  variant: n.oneOf(["fullWidth", "scrollable", "standard"]),
  /**
   * If `true`, the scrollbar is visible. It can be useful when displaying
   * a long vertical list of tabs.
   * @default false
   */
  visibleScrollbar: n.bool
});
function bb(e) {
  return ue("MuiTab", e);
}
const Je = le("MuiTab", ["root", "labelIcon", "textColorInherit", "textColorPrimary", "textColorSecondary", "selected", "disabled", "fullWidth", "wrapped", "iconWrapper", "icon"]), mb = (e) => {
  const {
    classes: t,
    textColor: o,
    fullWidth: r,
    wrapped: i,
    icon: a,
    label: l,
    selected: s,
    disabled: c
  } = e, p = {
    root: ["root", a && l && "labelIcon", `textColor${V(o)}`, r && "fullWidth", i && "wrapped", s && "selected", c && "disabled"],
    icon: ["iconWrapper", "icon"]
  };
  return fe(p, bb, t);
}, yb = H(lt, {
  name: "MuiTab",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: o
    } = e;
    return [t.root, o.label && o.icon && t.labelIcon, t[`textColor${V(o.textColor)}`], o.fullWidth && t.fullWidth, o.wrapped && t.wrapped, {
      [`& .${Je.iconWrapper}`]: t.iconWrapper
    }, {
      [`& .${Je.icon}`]: t.icon
    }];
  }
})(de(({
  theme: e
}) => ({
  ...e.typography.button,
  maxWidth: 360,
  minWidth: 90,
  position: "relative",
  minHeight: 48,
  flexShrink: 0,
  padding: "12px 16px",
  overflow: "hidden",
  whiteSpace: "normal",
  textAlign: "center",
  lineHeight: 1.25,
  variants: [{
    props: ({
      ownerState: t
    }) => t.label && (t.iconPosition === "top" || t.iconPosition === "bottom"),
    style: {
      flexDirection: "column"
    }
  }, {
    props: ({
      ownerState: t
    }) => t.label && t.iconPosition !== "top" && t.iconPosition !== "bottom",
    style: {
      flexDirection: "row"
    }
  }, {
    props: ({
      ownerState: t
    }) => t.icon && t.label,
    style: {
      minHeight: 72,
      paddingTop: 9,
      paddingBottom: 9
    }
  }, {
    props: ({
      ownerState: t,
      iconPosition: o
    }) => t.icon && t.label && o === "top",
    style: {
      [`& > .${Je.icon}`]: {
        marginBottom: 6
      }
    }
  }, {
    props: ({
      ownerState: t,
      iconPosition: o
    }) => t.icon && t.label && o === "bottom",
    style: {
      [`& > .${Je.icon}`]: {
        marginTop: 6
      }
    }
  }, {
    props: ({
      ownerState: t,
      iconPosition: o
    }) => t.icon && t.label && o === "start",
    style: {
      [`& > .${Je.icon}`]: {
        marginRight: e.spacing(1)
      }
    }
  }, {
    props: ({
      ownerState: t,
      iconPosition: o
    }) => t.icon && t.label && o === "end",
    style: {
      [`& > .${Je.icon}`]: {
        marginLeft: e.spacing(1)
      }
    }
  }, {
    props: {
      textColor: "inherit"
    },
    style: {
      color: "inherit",
      opacity: 0.6,
      // same opacity as theme.palette.text.secondary
      [`&.${Je.selected}`]: {
        opacity: 1
      },
      [`&.${Je.disabled}`]: {
        opacity: (e.vars || e).palette.action.disabledOpacity
      }
    }
  }, {
    props: {
      textColor: "primary"
    },
    style: {
      color: (e.vars || e).palette.text.secondary,
      [`&.${Je.selected}`]: {
        color: (e.vars || e).palette.primary.main
      },
      [`&.${Je.disabled}`]: {
        color: (e.vars || e).palette.text.disabled
      }
    }
  }, {
    props: {
      textColor: "secondary"
    },
    style: {
      color: (e.vars || e).palette.text.secondary,
      [`&.${Je.selected}`]: {
        color: (e.vars || e).palette.secondary.main
      },
      [`&.${Je.disabled}`]: {
        color: (e.vars || e).palette.text.disabled
      }
    }
  }, {
    props: ({
      ownerState: t
    }) => t.fullWidth,
    style: {
      flexShrink: 1,
      flexGrow: 1,
      flexBasis: 0,
      maxWidth: "none"
    }
  }, {
    props: ({
      ownerState: t
    }) => t.wrapped,
    style: {
      fontSize: e.typography.pxToRem(12)
    }
  }]
}))), bl = /* @__PURE__ */ g.forwardRef(function(t, o) {
  const r = ge({
    props: t,
    name: "MuiTab"
  }), {
    className: i,
    disabled: a = !1,
    disableFocusRipple: l = !1,
    // eslint-disable-next-line react/prop-types
    fullWidth: s,
    icon: c,
    iconPosition: p = "top",
    // eslint-disable-next-line react/prop-types
    indicator: d,
    label: f,
    onChange: h,
    onClick: b,
    onFocus: v,
    // eslint-disable-next-line react/prop-types
    selected: y,
    // eslint-disable-next-line react/prop-types
    selectionFollowsFocus: C,
    // eslint-disable-next-line react/prop-types
    textColor: x = "inherit",
    value: E,
    wrapped: w = !1,
    ...m
  } = r, T = {
    ...r,
    disabled: a,
    disableFocusRipple: l,
    selected: y,
    icon: !!c,
    iconPosition: p,
    label: !!f,
    fullWidth: s,
    textColor: x,
    wrapped: w
  }, A = mb(T), P = c && f && /* @__PURE__ */ g.isValidElement(c) ? /* @__PURE__ */ g.cloneElement(c, {
    className: Z(A.icon, c.props.className)
  }) : c, $ = (u) => {
    !y && h && h(u, E), b && b(u);
  }, D = (u) => {
    C && !y && h && h(u, E), v && v(u);
  };
  return /* @__PURE__ */ ye(yb, {
    focusRipple: !l,
    className: Z(A.root, i),
    ref: o,
    role: "tab",
    "aria-selected": y,
    disabled: a,
    onClick: $,
    onFocus: D,
    ownerState: T,
    tabIndex: y ? 0 : -1,
    ...m,
    children: [p === "top" || p === "start" ? /* @__PURE__ */ ye(g.Fragment, {
      children: [P, f]
    }) : /* @__PURE__ */ ye(g.Fragment, {
      children: [f, P]
    }), d]
  });
});
process.env.NODE_ENV !== "production" && (bl.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * This prop isn't supported.
   * Use the `component` prop if you need to change the children structure.
   */
  children: cs,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: n.object,
  /**
   * @ignore
   */
  className: n.string,
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: n.bool,
  /**
   * If `true`, the  keyboard focus ripple is disabled.
   * @default false
   */
  disableFocusRipple: n.bool,
  /**
   * If `true`, the ripple effect is disabled.
   *
   * ⚠️ Without a ripple there is no styling for :focus-visible by default. Be sure
   * to highlight the element by applying separate styles with the `.Mui-focusVisible` class.
   * @default false
   */
  disableRipple: n.bool,
  /**
   * The icon to display.
   */
  icon: n.oneOfType([n.element, n.string]),
  /**
   * The position of the icon relative to the label.
   * @default 'top'
   */
  iconPosition: n.oneOf(["bottom", "end", "start", "top"]),
  /**
   * The label element.
   */
  label: n.node,
  /**
   * @ignore
   */
  onChange: n.func,
  /**
   * @ignore
   */
  onClick: n.func,
  /**
   * @ignore
   */
  onFocus: n.func,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: n.oneOfType([n.arrayOf(n.oneOfType([n.func, n.object, n.bool])), n.func, n.object]),
  /**
   * You can provide your own value. Otherwise, we fallback to the child position index.
   */
  value: n.any,
  /**
   * Tab labels appear in a single row.
   * They can use a second line if needed.
   * @default false
   */
  wrapped: n.bool
});
const vb = H(hl)(() => ({})), Cb = (e, t = "primary") => {
  var i;
  const o = Pe[t], r = ((i = e == null ? void 0 : e.palette) == null ? void 0 : i[t]) ?? o;
  return {
    padding: 0,
    margin: "0 8px",
    minWidth: 0,
    // 隨著內文等寬
    "&": {
      color: (r == null ? void 0 : r.myDefault) ?? o.fabFont
    },
    "&.Mui-selected": {
      color: r.fabFont ?? o.fabFont
    },
    "&.Mui-disabled": {
      color: q(at[0], 0.38)
    },
    "& svg": {
      fontSize: 30,
      color: e.palette.grey[500]
    }
  };
}, xb = H(bl, {
  shouldForwardProp: (e) => e !== "color"
})(
  ({ theme: e, color: t = "primary" }) => Cb(e, t)
), my = ({
  options: e,
  value: t,
  onChange: o,
  indicatorColor: r,
  variant: i = "standard",
  iconPosition: a,
  ...l
}) => /* @__PURE__ */ S(
  vb,
  {
    value: t,
    onChange: (c, p) => {
      o(p);
    },
    indicatorColor: r,
    variant: i,
    ...l,
    slotProps: {
      indicator: {
        style: {
          height: "3px",
          // 你要的厚度
          borderRadius: "100px 100px 0 0",
          // 左右上角圓角
          backgroundColor: "#1994FC"
          // 你要的顏色
          // 不要設 width，讓 MUI 自動依照 Tab 內容寬度切換
        }
      }
    },
    children: e.map((c) => /* @__PURE__ */ S(
      xb,
      {
        label: c.label,
        value: c.value,
        disabled: c.disabled,
        color: r,
        id: c.id,
        "aria-controls": c.id ? `${c.id}-tabpanel` : void 0,
        icon: c.icon || void 0,
        iconPosition: a || (c.icon ? "start" : void 0)
      },
      c.value
    ))
  }
);
var Qe = "top", tt = "bottom", ot = "right", Ke = "left", vi = "auto", nn = [Qe, tt, ot, Ke], ho = "start", qo = "end", wb = "clippingParents", ml = "viewport", Po = "popper", Sb = "reference", Ia = /* @__PURE__ */ nn.reduce(function(e, t) {
  return e.concat([t + "-" + ho, t + "-" + qo]);
}, []), yl = /* @__PURE__ */ [].concat(nn, [vi]).reduce(function(e, t) {
  return e.concat([t, t + "-" + ho, t + "-" + qo]);
}, []), Eb = "beforeRead", Tb = "read", Ob = "afterRead", Ab = "beforeMain", kb = "main", Rb = "afterMain", Fb = "beforeWrite", Pb = "write", Bb = "afterWrite", Mb = [Eb, Tb, Ob, Ab, kb, Rb, Fb, Pb, Bb];
function bt(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function Xe(e) {
  if (e == null)
    return window;
  if (e.toString() !== "[object Window]") {
    var t = e.ownerDocument;
    return t && t.defaultView || window;
  }
  return e;
}
function qt(e) {
  var t = Xe(e).Element;
  return e instanceof t || e instanceof Element;
}
function et(e) {
  var t = Xe(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function Ci(e) {
  if (typeof ShadowRoot > "u")
    return !1;
  var t = Xe(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
function Ib(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function(o) {
    var r = t.styles[o] || {}, i = t.attributes[o] || {}, a = t.elements[o];
    !et(a) || !bt(a) || (Object.assign(a.style, r), Object.keys(i).forEach(function(l) {
      var s = i[l];
      s === !1 ? a.removeAttribute(l) : a.setAttribute(l, s === !0 ? "" : s);
    }));
  });
}
function Db(e) {
  var t = e.state, o = {
    popper: {
      position: t.options.strategy,
      left: "0",
      top: "0",
      margin: "0"
    },
    arrow: {
      position: "absolute"
    },
    reference: {}
  };
  return Object.assign(t.elements.popper.style, o.popper), t.styles = o, t.elements.arrow && Object.assign(t.elements.arrow.style, o.arrow), function() {
    Object.keys(t.elements).forEach(function(r) {
      var i = t.elements[r], a = t.attributes[r] || {}, l = Object.keys(t.styles.hasOwnProperty(r) ? t.styles[r] : o[r]), s = l.reduce(function(c, p) {
        return c[p] = "", c;
      }, {});
      !et(i) || !bt(i) || (Object.assign(i.style, s), Object.keys(a).forEach(function(c) {
        i.removeAttribute(c);
      }));
    });
  };
}
const Nb = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: Ib,
  effect: Db,
  requires: ["computeStyles"]
};
function ft(e) {
  return e.split("-")[0];
}
var Qt = Math.max, $n = Math.min, bo = Math.round;
function Kr() {
  var e = navigator.userAgentData;
  return e != null && e.brands && Array.isArray(e.brands) ? e.brands.map(function(t) {
    return t.brand + "/" + t.version;
  }).join(" ") : navigator.userAgent;
}
function vl() {
  return !/^((?!chrome|android).)*safari/i.test(Kr());
}
function mo(e, t, o) {
  t === void 0 && (t = !1), o === void 0 && (o = !1);
  var r = e.getBoundingClientRect(), i = 1, a = 1;
  t && et(e) && (i = e.offsetWidth > 0 && bo(r.width) / e.offsetWidth || 1, a = e.offsetHeight > 0 && bo(r.height) / e.offsetHeight || 1);
  var l = qt(e) ? Xe(e) : window, s = l.visualViewport, c = !vl() && o, p = (r.left + (c && s ? s.offsetLeft : 0)) / i, d = (r.top + (c && s ? s.offsetTop : 0)) / a, f = r.width / i, h = r.height / a;
  return {
    width: f,
    height: h,
    top: d,
    right: p + f,
    bottom: d + h,
    left: p,
    x: p,
    y: d
  };
}
function xi(e) {
  var t = mo(e), o = e.offsetWidth, r = e.offsetHeight;
  return Math.abs(t.width - o) <= 1 && (o = t.width), Math.abs(t.height - r) <= 1 && (r = t.height), {
    x: e.offsetLeft,
    y: e.offsetTop,
    width: o,
    height: r
  };
}
function Cl(e, t) {
  var o = t.getRootNode && t.getRootNode();
  if (e.contains(t))
    return !0;
  if (o && Ci(o)) {
    var r = t;
    do {
      if (r && e.isSameNode(r))
        return !0;
      r = r.parentNode || r.host;
    } while (r);
  }
  return !1;
}
function St(e) {
  return Xe(e).getComputedStyle(e);
}
function $b(e) {
  return ["table", "td", "th"].indexOf(bt(e)) >= 0;
}
function Nt(e) {
  return ((qt(e) ? e.ownerDocument : (
    // $FlowFixMe[prop-missing]
    e.document
  )) || window.document).documentElement;
}
function er(e) {
  return bt(e) === "html" ? e : (
    // this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    e.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    e.parentNode || // DOM Element detected
    (Ci(e) ? e.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    Nt(e)
  );
}
function Da(e) {
  return !et(e) || // https://github.com/popperjs/popper-core/issues/837
  St(e).position === "fixed" ? null : e.offsetParent;
}
function jb(e) {
  var t = /firefox/i.test(Kr()), o = /Trident/i.test(Kr());
  if (o && et(e)) {
    var r = St(e);
    if (r.position === "fixed")
      return null;
  }
  var i = er(e);
  for (Ci(i) && (i = i.host); et(i) && ["html", "body"].indexOf(bt(i)) < 0; ) {
    var a = St(i);
    if (a.transform !== "none" || a.perspective !== "none" || a.contain === "paint" || ["transform", "perspective"].indexOf(a.willChange) !== -1 || t && a.willChange === "filter" || t && a.filter && a.filter !== "none")
      return i;
    i = i.parentNode;
  }
  return null;
}
function rn(e) {
  for (var t = Xe(e), o = Da(e); o && $b(o) && St(o).position === "static"; )
    o = Da(o);
  return o && (bt(o) === "html" || bt(o) === "body" && St(o).position === "static") ? t : o || jb(e) || t;
}
function wi(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function Vo(e, t, o) {
  return Qt(e, $n(t, o));
}
function zb(e, t, o) {
  var r = Vo(e, t, o);
  return r > o ? o : r;
}
function xl() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function wl(e) {
  return Object.assign({}, xl(), e);
}
function Sl(e, t) {
  return t.reduce(function(o, r) {
    return o[r] = e, o;
  }, {});
}
var Lb = function(t, o) {
  return t = typeof t == "function" ? t(Object.assign({}, o.rects, {
    placement: o.placement
  })) : t, wl(typeof t != "number" ? t : Sl(t, nn));
};
function Vb(e) {
  var t, o = e.state, r = e.name, i = e.options, a = o.elements.arrow, l = o.modifiersData.popperOffsets, s = ft(o.placement), c = wi(s), p = [Ke, ot].indexOf(s) >= 0, d = p ? "height" : "width";
  if (!(!a || !l)) {
    var f = Lb(i.padding, o), h = xi(a), b = c === "y" ? Qe : Ke, v = c === "y" ? tt : ot, y = o.rects.reference[d] + o.rects.reference[c] - l[c] - o.rects.popper[d], C = l[c] - o.rects.reference[c], x = rn(a), E = x ? c === "y" ? x.clientHeight || 0 : x.clientWidth || 0 : 0, w = y / 2 - C / 2, m = f[b], T = E - h[d] - f[v], A = E / 2 - h[d] / 2 + w, P = Vo(m, A, T), $ = c;
    o.modifiersData[r] = (t = {}, t[$] = P, t.centerOffset = P - A, t);
  }
}
function Wb(e) {
  var t = e.state, o = e.options, r = o.element, i = r === void 0 ? "[data-popper-arrow]" : r;
  i != null && (typeof i == "string" && (i = t.elements.popper.querySelector(i), !i) || Cl(t.elements.popper, i) && (t.elements.arrow = i));
}
const Ub = {
  name: "arrow",
  enabled: !0,
  phase: "main",
  fn: Vb,
  effect: Wb,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"]
};
function yo(e) {
  return e.split("-")[1];
}
var Hb = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function Qb(e, t) {
  var o = e.x, r = e.y, i = t.devicePixelRatio || 1;
  return {
    x: bo(o * i) / i || 0,
    y: bo(r * i) / i || 0
  };
}
function Na(e) {
  var t, o = e.popper, r = e.popperRect, i = e.placement, a = e.variation, l = e.offsets, s = e.position, c = e.gpuAcceleration, p = e.adaptive, d = e.roundOffsets, f = e.isFixed, h = l.x, b = h === void 0 ? 0 : h, v = l.y, y = v === void 0 ? 0 : v, C = typeof d == "function" ? d({
    x: b,
    y
  }) : {
    x: b,
    y
  };
  b = C.x, y = C.y;
  var x = l.hasOwnProperty("x"), E = l.hasOwnProperty("y"), w = Ke, m = Qe, T = window;
  if (p) {
    var A = rn(o), P = "clientHeight", $ = "clientWidth";
    if (A === Xe(o) && (A = Nt(o), St(A).position !== "static" && s === "absolute" && (P = "scrollHeight", $ = "scrollWidth")), A = A, i === Qe || (i === Ke || i === ot) && a === qo) {
      m = tt;
      var D = f && A === T && T.visualViewport ? T.visualViewport.height : (
        // $FlowFixMe[prop-missing]
        A[P]
      );
      y -= D - r.height, y *= c ? 1 : -1;
    }
    if (i === Ke || (i === Qe || i === tt) && a === qo) {
      w = ot;
      var u = f && A === T && T.visualViewport ? T.visualViewport.width : (
        // $FlowFixMe[prop-missing]
        A[$]
      );
      b -= u - r.width, b *= c ? 1 : -1;
    }
  }
  var R = Object.assign({
    position: s
  }, p && Hb), B = d === !0 ? Qb({
    x: b,
    y
  }, Xe(o)) : {
    x: b,
    y
  };
  if (b = B.x, y = B.y, c) {
    var O;
    return Object.assign({}, R, (O = {}, O[m] = E ? "0" : "", O[w] = x ? "0" : "", O.transform = (T.devicePixelRatio || 1) <= 1 ? "translate(" + b + "px, " + y + "px)" : "translate3d(" + b + "px, " + y + "px, 0)", O));
  }
  return Object.assign({}, R, (t = {}, t[m] = E ? y + "px" : "", t[w] = x ? b + "px" : "", t.transform = "", t));
}
function Kb(e) {
  var t = e.state, o = e.options, r = o.gpuAcceleration, i = r === void 0 ? !0 : r, a = o.adaptive, l = a === void 0 ? !0 : a, s = o.roundOffsets, c = s === void 0 ? !0 : s, p = {
    placement: ft(t.placement),
    variation: yo(t.placement),
    popper: t.elements.popper,
    popperRect: t.rects.popper,
    gpuAcceleration: i,
    isFixed: t.options.strategy === "fixed"
  };
  t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, Na(Object.assign({}, p, {
    offsets: t.modifiersData.popperOffsets,
    position: t.options.strategy,
    adaptive: l,
    roundOffsets: c
  })))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, Na(Object.assign({}, p, {
    offsets: t.modifiersData.arrow,
    position: "absolute",
    adaptive: !1,
    roundOffsets: c
  })))), t.attributes.popper = Object.assign({}, t.attributes.popper, {
    "data-popper-placement": t.placement
  });
}
const Yb = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: Kb,
  data: {}
};
var hn = {
  passive: !0
};
function Gb(e) {
  var t = e.state, o = e.instance, r = e.options, i = r.scroll, a = i === void 0 ? !0 : i, l = r.resize, s = l === void 0 ? !0 : l, c = Xe(t.elements.popper), p = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return a && p.forEach(function(d) {
    d.addEventListener("scroll", o.update, hn);
  }), s && c.addEventListener("resize", o.update, hn), function() {
    a && p.forEach(function(d) {
      d.removeEventListener("scroll", o.update, hn);
    }), s && c.removeEventListener("resize", o.update, hn);
  };
}
const qb = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function() {
  },
  effect: Gb,
  data: {}
};
var Xb = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function wn(e) {
  return e.replace(/left|right|bottom|top/g, function(t) {
    return Xb[t];
  });
}
var Jb = {
  start: "end",
  end: "start"
};
function $a(e) {
  return e.replace(/start|end/g, function(t) {
    return Jb[t];
  });
}
function Si(e) {
  var t = Xe(e), o = t.pageXOffset, r = t.pageYOffset;
  return {
    scrollLeft: o,
    scrollTop: r
  };
}
function Ei(e) {
  return mo(Nt(e)).left + Si(e).scrollLeft;
}
function Zb(e, t) {
  var o = Xe(e), r = Nt(e), i = o.visualViewport, a = r.clientWidth, l = r.clientHeight, s = 0, c = 0;
  if (i) {
    a = i.width, l = i.height;
    var p = vl();
    (p || !p && t === "fixed") && (s = i.offsetLeft, c = i.offsetTop);
  }
  return {
    width: a,
    height: l,
    x: s + Ei(e),
    y: c
  };
}
function _b(e) {
  var t, o = Nt(e), r = Si(e), i = (t = e.ownerDocument) == null ? void 0 : t.body, a = Qt(o.scrollWidth, o.clientWidth, i ? i.scrollWidth : 0, i ? i.clientWidth : 0), l = Qt(o.scrollHeight, o.clientHeight, i ? i.scrollHeight : 0, i ? i.clientHeight : 0), s = -r.scrollLeft + Ei(e), c = -r.scrollTop;
  return St(i || o).direction === "rtl" && (s += Qt(o.clientWidth, i ? i.clientWidth : 0) - a), {
    width: a,
    height: l,
    x: s,
    y: c
  };
}
function Ti(e) {
  var t = St(e), o = t.overflow, r = t.overflowX, i = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(o + i + r);
}
function El(e) {
  return ["html", "body", "#document"].indexOf(bt(e)) >= 0 ? e.ownerDocument.body : et(e) && Ti(e) ? e : El(er(e));
}
function Wo(e, t) {
  var o;
  t === void 0 && (t = []);
  var r = El(e), i = r === ((o = e.ownerDocument) == null ? void 0 : o.body), a = Xe(r), l = i ? [a].concat(a.visualViewport || [], Ti(r) ? r : []) : r, s = t.concat(l);
  return i ? s : (
    // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
    s.concat(Wo(er(l)))
  );
}
function Yr(e) {
  return Object.assign({}, e, {
    left: e.x,
    top: e.y,
    right: e.x + e.width,
    bottom: e.y + e.height
  });
}
function em(e, t) {
  var o = mo(e, !1, t === "fixed");
  return o.top = o.top + e.clientTop, o.left = o.left + e.clientLeft, o.bottom = o.top + e.clientHeight, o.right = o.left + e.clientWidth, o.width = e.clientWidth, o.height = e.clientHeight, o.x = o.left, o.y = o.top, o;
}
function ja(e, t, o) {
  return t === ml ? Yr(Zb(e, o)) : qt(t) ? em(t, o) : Yr(_b(Nt(e)));
}
function tm(e) {
  var t = Wo(er(e)), o = ["absolute", "fixed"].indexOf(St(e).position) >= 0, r = o && et(e) ? rn(e) : e;
  return qt(r) ? t.filter(function(i) {
    return qt(i) && Cl(i, r) && bt(i) !== "body";
  }) : [];
}
function om(e, t, o, r) {
  var i = t === "clippingParents" ? tm(e) : [].concat(t), a = [].concat(i, [o]), l = a[0], s = a.reduce(function(c, p) {
    var d = ja(e, p, r);
    return c.top = Qt(d.top, c.top), c.right = $n(d.right, c.right), c.bottom = $n(d.bottom, c.bottom), c.left = Qt(d.left, c.left), c;
  }, ja(e, l, r));
  return s.width = s.right - s.left, s.height = s.bottom - s.top, s.x = s.left, s.y = s.top, s;
}
function Tl(e) {
  var t = e.reference, o = e.element, r = e.placement, i = r ? ft(r) : null, a = r ? yo(r) : null, l = t.x + t.width / 2 - o.width / 2, s = t.y + t.height / 2 - o.height / 2, c;
  switch (i) {
    case Qe:
      c = {
        x: l,
        y: t.y - o.height
      };
      break;
    case tt:
      c = {
        x: l,
        y: t.y + t.height
      };
      break;
    case ot:
      c = {
        x: t.x + t.width,
        y: s
      };
      break;
    case Ke:
      c = {
        x: t.x - o.width,
        y: s
      };
      break;
    default:
      c = {
        x: t.x,
        y: t.y
      };
  }
  var p = i ? wi(i) : null;
  if (p != null) {
    var d = p === "y" ? "height" : "width";
    switch (a) {
      case ho:
        c[p] = c[p] - (t[d] / 2 - o[d] / 2);
        break;
      case qo:
        c[p] = c[p] + (t[d] / 2 - o[d] / 2);
        break;
    }
  }
  return c;
}
function Xo(e, t) {
  t === void 0 && (t = {});
  var o = t, r = o.placement, i = r === void 0 ? e.placement : r, a = o.strategy, l = a === void 0 ? e.strategy : a, s = o.boundary, c = s === void 0 ? wb : s, p = o.rootBoundary, d = p === void 0 ? ml : p, f = o.elementContext, h = f === void 0 ? Po : f, b = o.altBoundary, v = b === void 0 ? !1 : b, y = o.padding, C = y === void 0 ? 0 : y, x = wl(typeof C != "number" ? C : Sl(C, nn)), E = h === Po ? Sb : Po, w = e.rects.popper, m = e.elements[v ? E : h], T = om(qt(m) ? m : m.contextElement || Nt(e.elements.popper), c, d, l), A = mo(e.elements.reference), P = Tl({
    reference: A,
    element: w,
    placement: i
  }), $ = Yr(Object.assign({}, w, P)), D = h === Po ? $ : A, u = {
    top: T.top - D.top + x.top,
    bottom: D.bottom - T.bottom + x.bottom,
    left: T.left - D.left + x.left,
    right: D.right - T.right + x.right
  }, R = e.modifiersData.offset;
  if (h === Po && R) {
    var B = R[i];
    Object.keys(u).forEach(function(O) {
      var M = [ot, tt].indexOf(O) >= 0 ? 1 : -1, N = [Qe, tt].indexOf(O) >= 0 ? "y" : "x";
      u[O] += B[N] * M;
    });
  }
  return u;
}
function nm(e, t) {
  t === void 0 && (t = {});
  var o = t, r = o.placement, i = o.boundary, a = o.rootBoundary, l = o.padding, s = o.flipVariations, c = o.allowedAutoPlacements, p = c === void 0 ? yl : c, d = yo(r), f = d ? s ? Ia : Ia.filter(function(v) {
    return yo(v) === d;
  }) : nn, h = f.filter(function(v) {
    return p.indexOf(v) >= 0;
  });
  h.length === 0 && (h = f);
  var b = h.reduce(function(v, y) {
    return v[y] = Xo(e, {
      placement: y,
      boundary: i,
      rootBoundary: a,
      padding: l
    })[ft(y)], v;
  }, {});
  return Object.keys(b).sort(function(v, y) {
    return b[v] - b[y];
  });
}
function rm(e) {
  if (ft(e) === vi)
    return [];
  var t = wn(e);
  return [$a(e), t, $a(t)];
}
function im(e) {
  var t = e.state, o = e.options, r = e.name;
  if (!t.modifiersData[r]._skip) {
    for (var i = o.mainAxis, a = i === void 0 ? !0 : i, l = o.altAxis, s = l === void 0 ? !0 : l, c = o.fallbackPlacements, p = o.padding, d = o.boundary, f = o.rootBoundary, h = o.altBoundary, b = o.flipVariations, v = b === void 0 ? !0 : b, y = o.allowedAutoPlacements, C = t.options.placement, x = ft(C), E = x === C, w = c || (E || !v ? [wn(C)] : rm(C)), m = [C].concat(w).reduce(function(Y, K) {
      return Y.concat(ft(K) === vi ? nm(t, {
        placement: K,
        boundary: d,
        rootBoundary: f,
        padding: p,
        flipVariations: v,
        allowedAutoPlacements: y
      }) : K);
    }, []), T = t.rects.reference, A = t.rects.popper, P = /* @__PURE__ */ new Map(), $ = !0, D = m[0], u = 0; u < m.length; u++) {
      var R = m[u], B = ft(R), O = yo(R) === ho, M = [Qe, tt].indexOf(B) >= 0, N = M ? "width" : "height", F = Xo(t, {
        placement: R,
        boundary: d,
        rootBoundary: f,
        altBoundary: h,
        padding: p
      }), W = M ? O ? ot : Ke : O ? tt : Qe;
      T[N] > A[N] && (W = wn(W));
      var U = wn(W), j = [];
      if (a && j.push(F[B] <= 0), s && j.push(F[W] <= 0, F[U] <= 0), j.every(function(Y) {
        return Y;
      })) {
        D = R, $ = !1;
        break;
      }
      P.set(R, j);
    }
    if ($)
      for (var k = v ? 3 : 1, L = function(K) {
        var G = m.find(function(z) {
          var te = P.get(z);
          if (te)
            return te.slice(0, K).every(function(ne) {
              return ne;
            });
        });
        if (G)
          return D = G, "break";
      }, oe = k; oe > 0; oe--) {
        var ee = L(oe);
        if (ee === "break") break;
      }
    t.placement !== D && (t.modifiersData[r]._skip = !0, t.placement = D, t.reset = !0);
  }
}
const am = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: im,
  requiresIfExists: ["offset"],
  data: {
    _skip: !1
  }
};
function za(e, t, o) {
  return o === void 0 && (o = {
    x: 0,
    y: 0
  }), {
    top: e.top - t.height - o.y,
    right: e.right - t.width + o.x,
    bottom: e.bottom - t.height + o.y,
    left: e.left - t.width - o.x
  };
}
function La(e) {
  return [Qe, ot, tt, Ke].some(function(t) {
    return e[t] >= 0;
  });
}
function sm(e) {
  var t = e.state, o = e.name, r = t.rects.reference, i = t.rects.popper, a = t.modifiersData.preventOverflow, l = Xo(t, {
    elementContext: "reference"
  }), s = Xo(t, {
    altBoundary: !0
  }), c = za(l, r), p = za(s, i, a), d = La(c), f = La(p);
  t.modifiersData[o] = {
    referenceClippingOffsets: c,
    popperEscapeOffsets: p,
    isReferenceHidden: d,
    hasPopperEscaped: f
  }, t.attributes.popper = Object.assign({}, t.attributes.popper, {
    "data-popper-reference-hidden": d,
    "data-popper-escaped": f
  });
}
const lm = {
  name: "hide",
  enabled: !0,
  phase: "main",
  requiresIfExists: ["preventOverflow"],
  fn: sm
};
function cm(e, t, o) {
  var r = ft(e), i = [Ke, Qe].indexOf(r) >= 0 ? -1 : 1, a = typeof o == "function" ? o(Object.assign({}, t, {
    placement: e
  })) : o, l = a[0], s = a[1];
  return l = l || 0, s = (s || 0) * i, [Ke, ot].indexOf(r) >= 0 ? {
    x: s,
    y: l
  } : {
    x: l,
    y: s
  };
}
function pm(e) {
  var t = e.state, o = e.options, r = e.name, i = o.offset, a = i === void 0 ? [0, 0] : i, l = yl.reduce(function(d, f) {
    return d[f] = cm(f, t.rects, a), d;
  }, {}), s = l[t.placement], c = s.x, p = s.y;
  t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += c, t.modifiersData.popperOffsets.y += p), t.modifiersData[r] = l;
}
const um = {
  name: "offset",
  enabled: !0,
  phase: "main",
  requires: ["popperOffsets"],
  fn: pm
};
function dm(e) {
  var t = e.state, o = e.name;
  t.modifiersData[o] = Tl({
    reference: t.rects.reference,
    element: t.rects.popper,
    placement: t.placement
  });
}
const fm = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: dm,
  data: {}
};
function gm(e) {
  return e === "x" ? "y" : "x";
}
function hm(e) {
  var t = e.state, o = e.options, r = e.name, i = o.mainAxis, a = i === void 0 ? !0 : i, l = o.altAxis, s = l === void 0 ? !1 : l, c = o.boundary, p = o.rootBoundary, d = o.altBoundary, f = o.padding, h = o.tether, b = h === void 0 ? !0 : h, v = o.tetherOffset, y = v === void 0 ? 0 : v, C = Xo(t, {
    boundary: c,
    rootBoundary: p,
    padding: f,
    altBoundary: d
  }), x = ft(t.placement), E = yo(t.placement), w = !E, m = wi(x), T = gm(m), A = t.modifiersData.popperOffsets, P = t.rects.reference, $ = t.rects.popper, D = typeof y == "function" ? y(Object.assign({}, t.rects, {
    placement: t.placement
  })) : y, u = typeof D == "number" ? {
    mainAxis: D,
    altAxis: D
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, D), R = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null, B = {
    x: 0,
    y: 0
  };
  if (A) {
    if (a) {
      var O, M = m === "y" ? Qe : Ke, N = m === "y" ? tt : ot, F = m === "y" ? "height" : "width", W = A[m], U = W + C[M], j = W - C[N], k = b ? -$[F] / 2 : 0, L = E === ho ? P[F] : $[F], oe = E === ho ? -$[F] : -P[F], ee = t.elements.arrow, Y = b && ee ? xi(ee) : {
        width: 0,
        height: 0
      }, K = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : xl(), G = K[M], z = K[N], te = Vo(0, P[F], Y[F]), ne = w ? P[F] / 2 - k - te - G - u.mainAxis : L - te - G - u.mainAxis, Q = w ? -P[F] / 2 + k + te + z + u.mainAxis : oe + te + z + u.mainAxis, J = t.elements.arrow && rn(t.elements.arrow), X = J ? m === "y" ? J.clientTop || 0 : J.clientLeft || 0 : 0, ce = (O = R == null ? void 0 : R[m]) != null ? O : 0, pe = W + ne - ce - X, Te = W + Q - ce, Ce = Vo(b ? $n(U, pe) : U, W, b ? Qt(j, Te) : j);
      A[m] = Ce, B[m] = Ce - W;
    }
    if (s) {
      var be, xe = m === "x" ? Qe : Ke, Me = m === "x" ? tt : ot, De = A[T], we = T === "y" ? "height" : "width", ie = De + C[xe], At = De - C[Me], kt = [Qe, Ke].indexOf(x) !== -1, Zt = (be = R == null ? void 0 : R[T]) != null ? be : 0, _t = kt ? ie : De - P[we] - $[we] - Zt + u.altAxis, Rt = kt ? De + P[we] + $[we] - Zt - u.altAxis : At, mt = b && kt ? zb(_t, De, Rt) : Vo(b ? _t : ie, De, b ? Rt : At);
      A[T] = mt, B[T] = mt - De;
    }
    t.modifiersData[r] = B;
  }
}
const bm = {
  name: "preventOverflow",
  enabled: !0,
  phase: "main",
  fn: hm,
  requiresIfExists: ["offset"]
};
function mm(e) {
  return {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  };
}
function ym(e) {
  return e === Xe(e) || !et(e) ? Si(e) : mm(e);
}
function vm(e) {
  var t = e.getBoundingClientRect(), o = bo(t.width) / e.offsetWidth || 1, r = bo(t.height) / e.offsetHeight || 1;
  return o !== 1 || r !== 1;
}
function Cm(e, t, o) {
  o === void 0 && (o = !1);
  var r = et(t), i = et(t) && vm(t), a = Nt(t), l = mo(e, i, o), s = {
    scrollLeft: 0,
    scrollTop: 0
  }, c = {
    x: 0,
    y: 0
  };
  return (r || !r && !o) && ((bt(t) !== "body" || // https://github.com/popperjs/popper-core/issues/1078
  Ti(a)) && (s = ym(t)), et(t) ? (c = mo(t, !0), c.x += t.clientLeft, c.y += t.clientTop) : a && (c.x = Ei(a))), {
    x: l.left + s.scrollLeft - c.x,
    y: l.top + s.scrollTop - c.y,
    width: l.width,
    height: l.height
  };
}
function xm(e) {
  var t = /* @__PURE__ */ new Map(), o = /* @__PURE__ */ new Set(), r = [];
  e.forEach(function(a) {
    t.set(a.name, a);
  });
  function i(a) {
    o.add(a.name);
    var l = [].concat(a.requires || [], a.requiresIfExists || []);
    l.forEach(function(s) {
      if (!o.has(s)) {
        var c = t.get(s);
        c && i(c);
      }
    }), r.push(a);
  }
  return e.forEach(function(a) {
    o.has(a.name) || i(a);
  }), r;
}
function wm(e) {
  var t = xm(e);
  return Mb.reduce(function(o, r) {
    return o.concat(t.filter(function(i) {
      return i.phase === r;
    }));
  }, []);
}
function Sm(e) {
  var t;
  return function() {
    return t || (t = new Promise(function(o) {
      Promise.resolve().then(function() {
        t = void 0, o(e());
      });
    })), t;
  };
}
function Em(e) {
  var t = e.reduce(function(o, r) {
    var i = o[r.name];
    return o[r.name] = i ? Object.assign({}, i, r, {
      options: Object.assign({}, i.options, r.options),
      data: Object.assign({}, i.data, r.data)
    }) : r, o;
  }, {});
  return Object.keys(t).map(function(o) {
    return t[o];
  });
}
var Va = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function Wa() {
  for (var e = arguments.length, t = new Array(e), o = 0; o < e; o++)
    t[o] = arguments[o];
  return !t.some(function(r) {
    return !(r && typeof r.getBoundingClientRect == "function");
  });
}
function Tm(e) {
  e === void 0 && (e = {});
  var t = e, o = t.defaultModifiers, r = o === void 0 ? [] : o, i = t.defaultOptions, a = i === void 0 ? Va : i;
  return function(s, c, p) {
    p === void 0 && (p = a);
    var d = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, Va, a),
      modifiersData: {},
      elements: {
        reference: s,
        popper: c
      },
      attributes: {},
      styles: {}
    }, f = [], h = !1, b = {
      state: d,
      setOptions: function(x) {
        var E = typeof x == "function" ? x(d.options) : x;
        y(), d.options = Object.assign({}, a, d.options, E), d.scrollParents = {
          reference: qt(s) ? Wo(s) : s.contextElement ? Wo(s.contextElement) : [],
          popper: Wo(c)
        };
        var w = wm(Em([].concat(r, d.options.modifiers)));
        return d.orderedModifiers = w.filter(function(m) {
          return m.enabled;
        }), v(), b.update();
      },
      // Sync update – it will always be executed, even if not necessary. This
      // is useful for low frequency updates where sync behavior simplifies the
      // logic.
      // For high frequency updates (e.g. `resize` and `scroll` events), always
      // prefer the async Popper#update method
      forceUpdate: function() {
        if (!h) {
          var x = d.elements, E = x.reference, w = x.popper;
          if (Wa(E, w)) {
            d.rects = {
              reference: Cm(E, rn(w), d.options.strategy === "fixed"),
              popper: xi(w)
            }, d.reset = !1, d.placement = d.options.placement, d.orderedModifiers.forEach(function(u) {
              return d.modifiersData[u.name] = Object.assign({}, u.data);
            });
            for (var m = 0; m < d.orderedModifiers.length; m++) {
              if (d.reset === !0) {
                d.reset = !1, m = -1;
                continue;
              }
              var T = d.orderedModifiers[m], A = T.fn, P = T.options, $ = P === void 0 ? {} : P, D = T.name;
              typeof A == "function" && (d = A({
                state: d,
                options: $,
                name: D,
                instance: b
              }) || d);
            }
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: Sm(function() {
        return new Promise(function(C) {
          b.forceUpdate(), C(d);
        });
      }),
      destroy: function() {
        y(), h = !0;
      }
    };
    if (!Wa(s, c))
      return b;
    b.setOptions(p).then(function(C) {
      !h && p.onFirstUpdate && p.onFirstUpdate(C);
    });
    function v() {
      d.orderedModifiers.forEach(function(C) {
        var x = C.name, E = C.options, w = E === void 0 ? {} : E, m = C.effect;
        if (typeof m == "function") {
          var T = m({
            state: d,
            name: x,
            instance: b,
            options: w
          }), A = function() {
          };
          f.push(T || A);
        }
      });
    }
    function y() {
      f.forEach(function(C) {
        return C();
      }), f = [];
    }
    return b;
  };
}
var Om = [qb, fm, Yb, Nb, um, am, bm, Ub, lm], Am = /* @__PURE__ */ Tm({
  defaultModifiers: Om
});
function km(e) {
  return ue("MuiPopper", e);
}
le("MuiPopper", ["root"]);
function Rm(e, t) {
  if (t === "ltr")
    return e;
  switch (e) {
    case "bottom-end":
      return "bottom-start";
    case "bottom-start":
      return "bottom-end";
    case "top-end":
      return "top-start";
    case "top-start":
      return "top-end";
    default:
      return e;
  }
}
function jn(e) {
  return typeof e == "function" ? e() : e;
}
function tr(e) {
  return e.nodeType !== void 0;
}
function Fm(e) {
  return !tr(e);
}
const Pm = (e) => {
  const {
    classes: t
  } = e;
  return fe({
    root: ["root"]
  }, km, t);
}, Bm = {}, Mm = /* @__PURE__ */ g.forwardRef(function(t, o) {
  const {
    anchorEl: r,
    children: i,
    direction: a,
    disablePortal: l,
    modifiers: s,
    open: c,
    placement: p,
    popperOptions: d,
    popperRef: f,
    slotProps: h = {},
    slots: b = {},
    TransitionProps: v,
    // @ts-ignore internal logic
    ownerState: y,
    // prevent from spreading to DOM, it can come from the parent component e.g. Select.
    ...C
  } = t, x = g.useRef(null), E = Ne(x, o), w = g.useRef(null), m = Ne(w, f), T = g.useRef(m);
  gt(() => {
    T.current = m;
  }, [m]), g.useImperativeHandle(f, () => w.current, []);
  const A = Rm(p, a), [P, $] = g.useState(A), [D, u] = g.useState(jn(r));
  g.useEffect(() => {
    w.current && w.current.forceUpdate();
  }), g.useEffect(() => {
    r && u(jn(r));
  }, [r]), gt(() => {
    if (!D || !c)
      return;
    const N = (U) => {
      $(U.placement);
    };
    if (process.env.NODE_ENV !== "production" && D && tr(D) && D.nodeType === 1) {
      const U = D.getBoundingClientRect();
      process.env.NODE_ENV !== "test" && U.top === 0 && U.left === 0 && U.right === 0 && U.bottom === 0 && console.warn(["MUI: The `anchorEl` prop provided to the component is invalid.", "The anchor element should be part of the document layout.", "Make sure the element is present in the document or that it's not display none."].join(`
`));
    }
    let F = [{
      name: "preventOverflow",
      options: {
        altBoundary: l
      }
    }, {
      name: "flip",
      options: {
        altBoundary: l
      }
    }, {
      name: "onUpdate",
      enabled: !0,
      phase: "afterWrite",
      fn: ({
        state: U
      }) => {
        N(U);
      }
    }];
    s != null && (F = F.concat(s)), d && d.modifiers != null && (F = F.concat(d.modifiers));
    const W = Am(D, x.current, {
      placement: A,
      ...d,
      modifiers: F
    });
    return T.current(W), () => {
      W.destroy(), T.current(null);
    };
  }, [D, l, s, c, d, A]);
  const R = {
    placement: P
  };
  v !== null && (R.TransitionProps = v);
  const B = Pm(t), O = b.root ?? "div", M = go({
    elementType: O,
    externalSlotProps: h.root,
    externalForwardedProps: C,
    additionalProps: {
      role: "tooltip",
      ref: E
    },
    ownerState: t,
    className: B.root
  });
  return /* @__PURE__ */ S(O, {
    ...M,
    children: typeof i == "function" ? i(R) : i
  });
}), Ol = /* @__PURE__ */ g.forwardRef(function(t, o) {
  const {
    anchorEl: r,
    children: i,
    container: a,
    direction: l = "ltr",
    disablePortal: s = !1,
    keepMounted: c = !1,
    modifiers: p,
    open: d,
    placement: f = "bottom",
    popperOptions: h = Bm,
    popperRef: b,
    style: v,
    transition: y = !1,
    slotProps: C = {},
    slots: x = {},
    ...E
  } = t, [w, m] = g.useState(!0), T = () => {
    m(!1);
  }, A = () => {
    m(!0);
  };
  if (!c && !d && (!y || w))
    return null;
  let P;
  if (a)
    P = a;
  else if (r) {
    const u = jn(r);
    P = u && tr(u) ? $e(u).body : $e(null).body;
  }
  const $ = !d && c && (!y || w) ? "none" : void 0, D = y ? {
    in: d,
    onEnter: T,
    onExited: A
  } : void 0;
  return /* @__PURE__ */ S(Yo, {
    disablePortal: s,
    container: P,
    children: /* @__PURE__ */ S(Mm, {
      anchorEl: r,
      direction: l,
      disablePortal: s,
      modifiers: p,
      ref: o,
      open: y ? !w : d,
      placement: f,
      popperOptions: h,
      popperRef: b,
      slotProps: C,
      slots: x,
      ...E,
      style: {
        // Prevents scroll issue, waiting for Popper.js to add this style once initiated.
        position: "fixed",
        // Fix Popper.js display issue
        top: 0,
        left: 0,
        display: $,
        ...v
      },
      TransitionProps: D,
      children: i
    })
  });
});
process.env.NODE_ENV !== "production" && (Ol.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * An HTML element, [virtualElement](https://popper.js.org/docs/v2/virtual-elements/),
   * or a function that returns either.
   * It's used to set the position of the popper.
   * The return value will passed as the reference object of the Popper instance.
   */
  anchorEl: Et(n.oneOfType([ht, n.object, n.func]), (e) => {
    if (e.open) {
      const t = jn(e.anchorEl);
      if (t && tr(t) && t.nodeType === 1) {
        const o = t.getBoundingClientRect();
        if (process.env.NODE_ENV !== "test" && o.top === 0 && o.left === 0 && o.right === 0 && o.bottom === 0)
          return new Error(["MUI: The `anchorEl` prop provided to the component is invalid.", "The anchor element should be part of the document layout.", "Make sure the element is present in the document or that it's not display none."].join(`
`));
      } else if (!t || typeof t.getBoundingClientRect != "function" || Fm(t) && t.contextElement != null && t.contextElement.nodeType !== 1)
        return new Error(["MUI: The `anchorEl` prop provided to the component is invalid.", "It should be an HTML element instance or a virtualElement ", "(https://popper.js.org/docs/v2/virtual-elements/)."].join(`
`));
    }
    return null;
  }),
  /**
   * Popper render function or node.
   */
  children: n.oneOfType([n.node, n.func]),
  /**
   * An HTML element or function that returns one.
   * The `container` will have the portal children appended to it.
   *
   * You can also provide a callback, which is called in a React layout effect.
   * This lets you set the container from a ref, and also makes server-side rendering possible.
   *
   * By default, it uses the body of the top-level document object,
   * so it's simply `document.body` most of the time.
   */
  container: n.oneOfType([ht, n.func]),
  /**
   * Direction of the text.
   * @default 'ltr'
   */
  direction: n.oneOf(["ltr", "rtl"]),
  /**
   * The `children` will be under the DOM hierarchy of the parent component.
   * @default false
   */
  disablePortal: n.bool,
  /**
   * Always keep the children in the DOM.
   * This prop can be useful in SEO situation or
   * when you want to maximize the responsiveness of the Popper.
   * @default false
   */
  keepMounted: n.bool,
  /**
   * Popper.js is based on a "plugin-like" architecture,
   * most of its features are fully encapsulated "modifiers".
   *
   * A modifier is a function that is called each time Popper.js needs to
   * compute the position of the popper.
   * For this reason, modifiers should be very performant to avoid bottlenecks.
   * To learn how to create a modifier, [read the modifiers documentation](https://popper.js.org/docs/v2/modifiers/).
   */
  modifiers: n.arrayOf(n.shape({
    data: n.object,
    effect: n.func,
    enabled: n.bool,
    fn: n.func,
    name: n.any,
    options: n.object,
    phase: n.oneOf(["afterMain", "afterRead", "afterWrite", "beforeMain", "beforeRead", "beforeWrite", "main", "read", "write"]),
    requires: n.arrayOf(n.string),
    requiresIfExists: n.arrayOf(n.string)
  })),
  /**
   * If `true`, the component is shown.
   */
  open: n.bool.isRequired,
  /**
   * Popper placement.
   * @default 'bottom'
   */
  placement: n.oneOf(["auto-end", "auto-start", "auto", "bottom-end", "bottom-start", "bottom", "left-end", "left-start", "left", "right-end", "right-start", "right", "top-end", "top-start", "top"]),
  /**
   * Options provided to the [`Popper.js`](https://popper.js.org/docs/v2/constructors/#options) instance.
   * @default {}
   */
  popperOptions: n.shape({
    modifiers: n.array,
    onFirstUpdate: n.func,
    placement: n.oneOf(["auto-end", "auto-start", "auto", "bottom-end", "bottom-start", "bottom", "left-end", "left-start", "left", "right-end", "right-start", "right", "top-end", "top-start", "top"]),
    strategy: n.oneOf(["absolute", "fixed"])
  }),
  /**
   * A ref that points to the used popper instance.
   */
  popperRef: Tt,
  /**
   * The props used for each slot inside the Popper.
   * @default {}
   */
  slotProps: n.shape({
    root: n.oneOfType([n.func, n.object])
  }),
  /**
   * The components used for each slot inside the Popper.
   * Either a string to use a HTML element or a component.
   * @default {}
   */
  slots: n.shape({
    root: n.elementType
  }),
  /**
   * Help supporting a react-transition-group/Transition component.
   * @default false
   */
  transition: n.bool
});
const Im = H(Ol, {
  name: "MuiPopper",
  slot: "Root",
  overridesResolver: (e, t) => t.root
})({}), Oi = /* @__PURE__ */ g.forwardRef(function(t, o) {
  const r = Co(), i = ge({
    props: t,
    name: "MuiPopper"
  }), {
    anchorEl: a,
    component: l,
    components: s,
    componentsProps: c,
    container: p,
    disablePortal: d,
    keepMounted: f,
    modifiers: h,
    open: b,
    placement: v,
    popperOptions: y,
    popperRef: C,
    transition: x,
    slots: E,
    slotProps: w,
    ...m
  } = i, T = (E == null ? void 0 : E.root) ?? (s == null ? void 0 : s.Root), A = {
    anchorEl: a,
    container: p,
    disablePortal: d,
    keepMounted: f,
    modifiers: h,
    open: b,
    placement: v,
    popperOptions: y,
    popperRef: C,
    transition: x,
    ...m
  };
  return /* @__PURE__ */ S(Im, {
    as: l,
    direction: r ? "rtl" : "ltr",
    slots: {
      root: T
    },
    slotProps: w ?? c,
    ...A,
    ref: o
  });
});
process.env.NODE_ENV !== "production" && (Oi.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * An HTML element, [virtualElement](https://popper.js.org/docs/v2/virtual-elements/),
   * or a function that returns either.
   * It's used to set the position of the popper.
   * The return value will passed as the reference object of the Popper instance.
   */
  anchorEl: n.oneOfType([ht, n.object, n.func]),
  /**
   * Popper render function or node.
   */
  children: n.oneOfType([n.node, n.func]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: n.elementType,
  /**
   * The components used for each slot inside the Popper.
   * Either a string to use a HTML element or a component.
   *
   * @deprecated use the `slots` prop instead. This prop will be removed in v7. [How to migrate](/material-ui/migration/migrating-from-deprecated-apis/).
   * @default {}
   */
  components: n.shape({
    Root: n.elementType
  }),
  /**
   * The props used for each slot inside the Popper.
   *
   * @deprecated use the `slotProps` prop instead. This prop will be removed in v7. [How to migrate](/material-ui/migration/migrating-from-deprecated-apis/).
   * @default {}
   */
  componentsProps: n.shape({
    root: n.oneOfType([n.func, n.object])
  }),
  /**
   * An HTML element or function that returns one.
   * The `container` will have the portal children appended to it.
   *
   * You can also provide a callback, which is called in a React layout effect.
   * This lets you set the container from a ref, and also makes server-side rendering possible.
   *
   * By default, it uses the body of the top-level document object,
   * so it's simply `document.body` most of the time.
   */
  container: n.oneOfType([ht, n.func]),
  /**
   * The `children` will be under the DOM hierarchy of the parent component.
   * @default false
   */
  disablePortal: n.bool,
  /**
   * Always keep the children in the DOM.
   * This prop can be useful in SEO situation or
   * when you want to maximize the responsiveness of the Popper.
   * @default false
   */
  keepMounted: n.bool,
  /**
   * Popper.js is based on a "plugin-like" architecture,
   * most of its features are fully encapsulated "modifiers".
   *
   * A modifier is a function that is called each time Popper.js needs to
   * compute the position of the popper.
   * For this reason, modifiers should be very performant to avoid bottlenecks.
   * To learn how to create a modifier, [read the modifiers documentation](https://popper.js.org/docs/v2/modifiers/).
   */
  modifiers: n.arrayOf(n.shape({
    data: n.object,
    effect: n.func,
    enabled: n.bool,
    fn: n.func,
    name: n.any,
    options: n.object,
    phase: n.oneOf(["afterMain", "afterRead", "afterWrite", "beforeMain", "beforeRead", "beforeWrite", "main", "read", "write"]),
    requires: n.arrayOf(n.string),
    requiresIfExists: n.arrayOf(n.string)
  })),
  /**
   * If `true`, the component is shown.
   */
  open: n.bool.isRequired,
  /**
   * Popper placement.
   * @default 'bottom'
   */
  placement: n.oneOf(["auto-end", "auto-start", "auto", "bottom-end", "bottom-start", "bottom", "left-end", "left-start", "left", "right-end", "right-start", "right", "top-end", "top-start", "top"]),
  /**
   * Options provided to the [`Popper.js`](https://popper.js.org/docs/v2/constructors/#options) instance.
   * @default {}
   */
  popperOptions: n.shape({
    modifiers: n.array,
    onFirstUpdate: n.func,
    placement: n.oneOf(["auto-end", "auto-start", "auto", "bottom-end", "bottom-start", "bottom", "left-end", "left-start", "left", "right-end", "right-start", "right", "top-end", "top-start", "top"]),
    strategy: n.oneOf(["absolute", "fixed"])
  }),
  /**
   * A ref that points to the used popper instance.
   */
  popperRef: Tt,
  /**
   * The props used for each slot inside the Popper.
   * @default {}
   */
  slotProps: n.shape({
    root: n.oneOfType([n.func, n.object])
  }),
  /**
   * The components used for each slot inside the Popper.
   * Either a string to use a HTML element or a component.
   * @default {}
   */
  slots: n.shape({
    root: n.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: n.oneOfType([n.arrayOf(n.oneOfType([n.func, n.object, n.bool])), n.func, n.object]),
  /**
   * Help supporting a react-transition-group/Transition component.
   * @default false
   */
  transition: n.bool
});
function Dm(e) {
  return ue("MuiTooltip", e);
}
const Fe = le("MuiTooltip", ["popper", "popperInteractive", "popperArrow", "popperClose", "tooltip", "tooltipArrow", "touch", "tooltipPlacementLeft", "tooltipPlacementRight", "tooltipPlacementTop", "tooltipPlacementBottom", "arrow"]);
function Nm(e) {
  return Math.round(e * 1e5) / 1e5;
}
const $m = (e) => {
  const {
    classes: t,
    disableInteractive: o,
    arrow: r,
    touch: i,
    placement: a
  } = e, l = {
    popper: ["popper", !o && "popperInteractive", r && "popperArrow"],
    tooltip: ["tooltip", r && "tooltipArrow", i && "touch", `tooltipPlacement${V(a.split("-")[0])}`],
    arrow: ["arrow"]
  };
  return fe(l, Dm, t);
}, jm = H(Oi, {
  name: "MuiTooltip",
  slot: "Popper",
  overridesResolver: (e, t) => {
    const {
      ownerState: o
    } = e;
    return [t.popper, !o.disableInteractive && t.popperInteractive, o.arrow && t.popperArrow, !o.open && t.popperClose];
  }
})(de(({
  theme: e
}) => ({
  zIndex: (e.vars || e).zIndex.tooltip,
  pointerEvents: "none",
  variants: [{
    props: ({
      ownerState: t
    }) => !t.disableInteractive,
    style: {
      pointerEvents: "auto"
    }
  }, {
    props: ({
      open: t
    }) => !t,
    style: {
      pointerEvents: "none"
    }
  }, {
    props: ({
      ownerState: t
    }) => t.arrow,
    style: {
      [`&[data-popper-placement*="bottom"] .${Fe.arrow}`]: {
        top: 0,
        marginTop: "-0.71em",
        "&::before": {
          transformOrigin: "0 100%"
        }
      },
      [`&[data-popper-placement*="top"] .${Fe.arrow}`]: {
        bottom: 0,
        marginBottom: "-0.71em",
        "&::before": {
          transformOrigin: "100% 0"
        }
      },
      [`&[data-popper-placement*="right"] .${Fe.arrow}`]: {
        height: "1em",
        width: "0.71em",
        "&::before": {
          transformOrigin: "100% 100%"
        }
      },
      [`&[data-popper-placement*="left"] .${Fe.arrow}`]: {
        height: "1em",
        width: "0.71em",
        "&::before": {
          transformOrigin: "0 0"
        }
      }
    }
  }, {
    props: ({
      ownerState: t
    }) => t.arrow && !t.isRtl,
    style: {
      [`&[data-popper-placement*="right"] .${Fe.arrow}`]: {
        left: 0,
        marginLeft: "-0.71em"
      }
    }
  }, {
    props: ({
      ownerState: t
    }) => t.arrow && !!t.isRtl,
    style: {
      [`&[data-popper-placement*="right"] .${Fe.arrow}`]: {
        right: 0,
        marginRight: "-0.71em"
      }
    }
  }, {
    props: ({
      ownerState: t
    }) => t.arrow && !t.isRtl,
    style: {
      [`&[data-popper-placement*="left"] .${Fe.arrow}`]: {
        right: 0,
        marginRight: "-0.71em"
      }
    }
  }, {
    props: ({
      ownerState: t
    }) => t.arrow && !!t.isRtl,
    style: {
      [`&[data-popper-placement*="left"] .${Fe.arrow}`]: {
        left: 0,
        marginLeft: "-0.71em"
      }
    }
  }]
}))), zm = H("div", {
  name: "MuiTooltip",
  slot: "Tooltip",
  overridesResolver: (e, t) => {
    const {
      ownerState: o
    } = e;
    return [t.tooltip, o.touch && t.touch, o.arrow && t.tooltipArrow, t[`tooltipPlacement${V(o.placement.split("-")[0])}`]];
  }
})(de(({
  theme: e
}) => ({
  backgroundColor: e.vars ? e.vars.palette.Tooltip.bg : q(e.palette.grey[700], 0.92),
  borderRadius: (e.vars || e).shape.borderRadius,
  color: (e.vars || e).palette.common.white,
  fontFamily: e.typography.fontFamily,
  padding: "4px 8px",
  fontSize: e.typography.pxToRem(11),
  maxWidth: 300,
  margin: 2,
  wordWrap: "break-word",
  fontWeight: e.typography.fontWeightMedium,
  [`.${Fe.popper}[data-popper-placement*="left"] &`]: {
    transformOrigin: "right center"
  },
  [`.${Fe.popper}[data-popper-placement*="right"] &`]: {
    transformOrigin: "left center"
  },
  [`.${Fe.popper}[data-popper-placement*="top"] &`]: {
    transformOrigin: "center bottom",
    marginBottom: "14px"
  },
  [`.${Fe.popper}[data-popper-placement*="bottom"] &`]: {
    transformOrigin: "center top",
    marginTop: "14px"
  },
  variants: [{
    props: ({
      ownerState: t
    }) => t.arrow,
    style: {
      position: "relative",
      margin: 0
    }
  }, {
    props: ({
      ownerState: t
    }) => t.touch,
    style: {
      padding: "8px 16px",
      fontSize: e.typography.pxToRem(14),
      lineHeight: `${Nm(16 / 14)}em`,
      fontWeight: e.typography.fontWeightRegular
    }
  }, {
    props: ({
      ownerState: t
    }) => !t.isRtl,
    style: {
      [`.${Fe.popper}[data-popper-placement*="left"] &`]: {
        marginRight: "14px"
      },
      [`.${Fe.popper}[data-popper-placement*="right"] &`]: {
        marginLeft: "14px"
      }
    }
  }, {
    props: ({
      ownerState: t
    }) => !t.isRtl && t.touch,
    style: {
      [`.${Fe.popper}[data-popper-placement*="left"] &`]: {
        marginRight: "24px"
      },
      [`.${Fe.popper}[data-popper-placement*="right"] &`]: {
        marginLeft: "24px"
      }
    }
  }, {
    props: ({
      ownerState: t
    }) => !!t.isRtl,
    style: {
      [`.${Fe.popper}[data-popper-placement*="left"] &`]: {
        marginLeft: "14px"
      },
      [`.${Fe.popper}[data-popper-placement*="right"] &`]: {
        marginRight: "14px"
      }
    }
  }, {
    props: ({
      ownerState: t
    }) => !!t.isRtl && t.touch,
    style: {
      [`.${Fe.popper}[data-popper-placement*="left"] &`]: {
        marginLeft: "24px"
      },
      [`.${Fe.popper}[data-popper-placement*="right"] &`]: {
        marginRight: "24px"
      }
    }
  }, {
    props: ({
      ownerState: t
    }) => t.touch,
    style: {
      [`.${Fe.popper}[data-popper-placement*="top"] &`]: {
        marginBottom: "24px"
      }
    }
  }, {
    props: ({
      ownerState: t
    }) => t.touch,
    style: {
      [`.${Fe.popper}[data-popper-placement*="bottom"] &`]: {
        marginTop: "24px"
      }
    }
  }]
}))), Lm = H("span", {
  name: "MuiTooltip",
  slot: "Arrow",
  overridesResolver: (e, t) => t.arrow
})(de(({
  theme: e
}) => ({
  overflow: "hidden",
  position: "absolute",
  width: "1em",
  height: "0.71em",
  boxSizing: "border-box",
  color: e.vars ? e.vars.palette.Tooltip.bg : q(e.palette.grey[700], 0.9),
  "&::before": {
    content: '""',
    margin: "auto",
    display: "block",
    width: "100%",
    height: "100%",
    backgroundColor: "currentColor",
    transform: "rotate(45deg)"
  }
})));
let bn = !1;
const Ua = new Xn();
let Bo = {
  x: 0,
  y: 0
};
function mn(e, t) {
  return (o, ...r) => {
    t && t(o, ...r), e(o, ...r);
  };
}
const Ai = /* @__PURE__ */ g.forwardRef(function(t, o) {
  const r = ge({
    props: t,
    name: "MuiTooltip"
  }), {
    arrow: i = !1,
    children: a,
    classes: l,
    components: s = {},
    componentsProps: c = {},
    describeChild: p = !1,
    disableFocusListener: d = !1,
    disableHoverListener: f = !1,
    disableInteractive: h = !1,
    disableTouchListener: b = !1,
    enterDelay: v = 100,
    enterNextDelay: y = 0,
    enterTouchDelay: C = 700,
    followCursor: x = !1,
    id: E,
    leaveDelay: w = 0,
    leaveTouchDelay: m = 1500,
    onClose: T,
    onOpen: A,
    open: P,
    placement: $ = "bottom",
    PopperComponent: D,
    PopperProps: u = {},
    slotProps: R = {},
    slots: B = {},
    title: O,
    TransitionComponent: M,
    TransitionProps: N,
    ...F
  } = r, W = /* @__PURE__ */ g.isValidElement(a) ? a : /* @__PURE__ */ S("span", {
    children: a
  }), U = rt(), j = Co(), [k, L] = g.useState(), [oe, ee] = g.useState(null), Y = g.useRef(!1), K = h || x, G = co(), z = co(), te = co(), ne = co(), [Q, J] = ni({
    controlled: P,
    default: !1,
    name: "Tooltip",
    state: "open"
  });
  let X = Q;
  if (process.env.NODE_ENV !== "production") {
    const {
      current: ae
    } = g.useRef(P !== void 0);
    g.useEffect(() => {
      k && k.disabled && !ae && O !== "" && k.tagName.toLowerCase() === "button" && console.warn(["MUI: You are providing a disabled `button` child to the Tooltip component.", "A disabled element does not fire events.", "Tooltip needs to listen to the child element's events to display the title.", "", "Add a simple wrapper element, such as a `span`."].join(`
`));
    }, [O, k, ae]);
  }
  const ce = tn(E), pe = g.useRef(), Te = He(() => {
    pe.current !== void 0 && (document.body.style.WebkitUserSelect = pe.current, pe.current = void 0), ne.clear();
  });
  g.useEffect(() => Te, [Te]);
  const Ce = (ae) => {
    Ua.clear(), bn = !0, J(!0), A && !X && A(ae);
  }, be = He(
    /**
     * @param {React.SyntheticEvent | Event} event
     */
    (ae) => {
      Ua.start(800 + w, () => {
        bn = !1;
      }), J(!1), T && X && T(ae), G.start(U.transitions.duration.shortest, () => {
        Y.current = !1;
      });
    }
  ), xe = (ae) => {
    Y.current && ae.type !== "touchstart" || (k && k.removeAttribute("title"), z.clear(), te.clear(), v || bn && y ? z.start(bn ? y : v, () => {
      Ce(ae);
    }) : Ce(ae));
  }, Me = (ae) => {
    z.clear(), te.start(w, () => {
      be(ae);
    });
  }, [, De] = g.useState(!1), we = (ae) => {
    An(ae.target) || (De(!1), Me(ae));
  }, ie = (ae) => {
    k || L(ae.currentTarget), An(ae.target) && (De(!0), xe(ae));
  }, At = (ae) => {
    Y.current = !0;
    const Ye = W.props;
    Ye.onTouchStart && Ye.onTouchStart(ae);
  }, kt = (ae) => {
    At(ae), te.clear(), G.clear(), Te(), pe.current = document.body.style.WebkitUserSelect, document.body.style.WebkitUserSelect = "none", ne.start(C, () => {
      document.body.style.WebkitUserSelect = pe.current, xe(ae);
    });
  }, Zt = (ae) => {
    W.props.onTouchEnd && W.props.onTouchEnd(ae), Te(), te.start(m, () => {
      be(ae);
    });
  };
  g.useEffect(() => {
    if (!X)
      return;
    function ae(Ye) {
      Ye.key === "Escape" && be(Ye);
    }
    return document.addEventListener("keydown", ae), () => {
      document.removeEventListener("keydown", ae);
    };
  }, [be, X]);
  const _t = Ne(vo(W), L, o);
  !O && O !== 0 && (X = !1);
  const Rt = g.useRef(), mt = (ae) => {
    const Ye = W.props;
    Ye.onMouseMove && Ye.onMouseMove(ae), Bo = {
      x: ae.clientX,
      y: ae.clientY
    }, Rt.current && Rt.current.update();
  }, $t = {}, wo = typeof O == "string";
  p ? ($t.title = !X && wo && !f ? O : null, $t["aria-describedby"] = X ? ce : null) : ($t["aria-label"] = wo ? O : null, $t["aria-labelledby"] = X && !wo ? ce : null);
  const Le = {
    ...$t,
    ...F,
    ...W.props,
    className: Z(F.className, W.props.className),
    onTouchStart: At,
    ref: _t,
    ...x ? {
      onMouseMove: mt
    } : {}
  };
  process.env.NODE_ENV !== "production" && (Le["data-mui-internal-clone-element"] = !0, g.useEffect(() => {
    k && !k.getAttribute("data-mui-internal-clone-element") && console.error(["MUI: The `children` component of the Tooltip is not forwarding its props correctly.", "Please make sure that props are spread on the same element that the ref is applied to."].join(`
`));
  }, [k]));
  const Ft = {};
  b || (Le.onTouchStart = kt, Le.onTouchEnd = Zt), f || (Le.onMouseOver = mn(xe, Le.onMouseOver), Le.onMouseLeave = mn(Me, Le.onMouseLeave), K || (Ft.onMouseOver = xe, Ft.onMouseLeave = Me)), d || (Le.onFocus = mn(ie, Le.onFocus), Le.onBlur = mn(we, Le.onBlur), K || (Ft.onFocus = ie, Ft.onBlur = we)), process.env.NODE_ENV !== "production" && W.props.title && console.error(["MUI: You have provided a `title` prop to the child of <Tooltip />.", `Remove this title prop \`${W.props.title}\` or the Tooltip component.`].join(`
`));
  const yt = {
    ...r,
    isRtl: j,
    arrow: i,
    disableInteractive: K,
    placement: $,
    PopperComponentProp: D,
    touch: Y.current
  }, Ue = typeof R.popper == "function" ? R.popper(yt) : R.popper, eo = g.useMemo(() => {
    var Ye, _;
    let ae = [{
      name: "arrow",
      enabled: !!oe,
      options: {
        element: oe,
        padding: 4
      }
    }];
    return (Ye = u.popperOptions) != null && Ye.modifiers && (ae = ae.concat(u.popperOptions.modifiers)), (_ = Ue == null ? void 0 : Ue.popperOptions) != null && _.modifiers && (ae = ae.concat(Ue.popperOptions.modifiers)), {
      ...u.popperOptions,
      ...Ue == null ? void 0 : Ue.popperOptions,
      modifiers: ae
    };
  }, [oe, u.popperOptions, Ue == null ? void 0 : Ue.popperOptions]), So = $m(yt), or = typeof R.transition == "function" ? R.transition(yt) : R.transition, jt = {
    slots: {
      popper: s.Popper,
      transition: s.Transition ?? M,
      tooltip: s.Tooltip,
      arrow: s.Arrow,
      ...B
    },
    slotProps: {
      arrow: R.arrow ?? c.arrow,
      popper: {
        ...u,
        ...Ue ?? c.popper
      },
      // resolvedPopperProps can be spread because it's already an object
      tooltip: R.tooltip ?? c.tooltip,
      transition: {
        ...N,
        ...or ?? c.transition
      }
    }
  }, [to, nr] = se("popper", {
    elementType: jm,
    externalForwardedProps: jt,
    ownerState: yt,
    className: Z(So.popper, u == null ? void 0 : u.className)
  }), [rr, Eo] = se("transition", {
    elementType: Ko,
    externalForwardedProps: jt,
    ownerState: yt
  }), [ir, ar] = se("tooltip", {
    elementType: zm,
    className: So.tooltip,
    externalForwardedProps: jt,
    ownerState: yt
  }), [sr, lr] = se("arrow", {
    elementType: Lm,
    className: So.arrow,
    externalForwardedProps: jt,
    ownerState: yt,
    ref: ee
  });
  return /* @__PURE__ */ ye(g.Fragment, {
    children: [/* @__PURE__ */ g.cloneElement(W, Le), /* @__PURE__ */ S(to, {
      as: D ?? Oi,
      placement: $,
      anchorEl: x ? {
        getBoundingClientRect: () => ({
          top: Bo.y,
          left: Bo.x,
          right: Bo.x,
          bottom: Bo.y,
          width: 0,
          height: 0
        })
      } : k,
      popperRef: Rt,
      open: k ? X : !1,
      id: ce,
      transition: !0,
      ...Ft,
      ...nr,
      popperOptions: eo,
      children: ({
        TransitionProps: ae
      }) => /* @__PURE__ */ S(rr, {
        timeout: U.transitions.duration.shorter,
        ...ae,
        ...Eo,
        children: /* @__PURE__ */ ye(ir, {
          ...ar,
          children: [O, i ? /* @__PURE__ */ S(sr, {
            ...lr
          }) : null]
        })
      })
    })]
  });
});
process.env.NODE_ENV !== "production" && (Ai.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * If `true`, adds an arrow to the tooltip.
   * @default false
   */
  arrow: n.bool,
  /**
   * Tooltip reference element.
   */
  children: Xt.isRequired,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: n.object,
  /**
   * @ignore
   */
  className: n.string,
  /**
   * The components used for each slot inside.
   *
   * @deprecated use the `slots` prop instead. This prop will be removed in v7. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   *
   * @default {}
   */
  components: n.shape({
    Arrow: n.elementType,
    Popper: n.elementType,
    Tooltip: n.elementType,
    Transition: n.elementType
  }),
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * @deprecated use the `slotProps` prop instead. This prop will be removed in v7. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   *
   * @default {}
   */
  componentsProps: n.shape({
    arrow: n.object,
    popper: n.object,
    tooltip: n.object,
    transition: n.object
  }),
  /**
   * Set to `true` if the `title` acts as an accessible description.
   * By default the `title` acts as an accessible label for the child.
   * @default false
   */
  describeChild: n.bool,
  /**
   * Do not respond to focus-visible events.
   * @default false
   */
  disableFocusListener: n.bool,
  /**
   * Do not respond to hover events.
   * @default false
   */
  disableHoverListener: n.bool,
  /**
   * Makes a tooltip not interactive, i.e. it will close when the user
   * hovers over the tooltip before the `leaveDelay` is expired.
   * @default false
   */
  disableInteractive: n.bool,
  /**
   * Do not respond to long press touch events.
   * @default false
   */
  disableTouchListener: n.bool,
  /**
   * The number of milliseconds to wait before showing the tooltip.
   * This prop won't impact the enter touch delay (`enterTouchDelay`).
   * @default 100
   */
  enterDelay: n.number,
  /**
   * The number of milliseconds to wait before showing the tooltip when one was already recently opened.
   * @default 0
   */
  enterNextDelay: n.number,
  /**
   * The number of milliseconds a user must touch the element before showing the tooltip.
   * @default 700
   */
  enterTouchDelay: n.number,
  /**
   * If `true`, the tooltip follow the cursor over the wrapped element.
   * @default false
   */
  followCursor: n.bool,
  /**
   * This prop is used to help implement the accessibility logic.
   * If you don't provide this prop. It falls back to a randomly generated id.
   */
  id: n.string,
  /**
   * The number of milliseconds to wait before hiding the tooltip.
   * This prop won't impact the leave touch delay (`leaveTouchDelay`).
   * @default 0
   */
  leaveDelay: n.number,
  /**
   * The number of milliseconds after the user stops touching an element before hiding the tooltip.
   * @default 1500
   */
  leaveTouchDelay: n.number,
  /**
   * Callback fired when the component requests to be closed.
   *
   * @param {React.SyntheticEvent} event The event source of the callback.
   */
  onClose: n.func,
  /**
   * Callback fired when the component requests to be open.
   *
   * @param {React.SyntheticEvent} event The event source of the callback.
   */
  onOpen: n.func,
  /**
   * If `true`, the component is shown.
   */
  open: n.bool,
  /**
   * Tooltip placement.
   * @default 'bottom'
   */
  placement: n.oneOf(["auto-end", "auto-start", "auto", "bottom-end", "bottom-start", "bottom", "left-end", "left-start", "left", "right-end", "right-start", "right", "top-end", "top-start", "top"]),
  /**
   * The component used for the popper.
   * @deprecated use the `slots.popper` prop instead. This prop will be removed in v7. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   */
  PopperComponent: n.elementType,
  /**
   * Props applied to the [`Popper`](https://mui.com/material-ui/api/popper/) element.
   * @deprecated use the `slotProps.popper` prop instead. This prop will be removed in v7. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   * @default {}
   */
  PopperProps: n.object,
  /**
   * The props used for each slot inside.
   * @default {}
   */
  slotProps: n.shape({
    arrow: n.oneOfType([n.func, n.object]),
    popper: n.oneOfType([n.func, n.object]),
    tooltip: n.oneOfType([n.func, n.object]),
    transition: n.oneOfType([n.func, n.object])
  }),
  /**
   * The components used for each slot inside.
   * @default {}
   */
  slots: n.shape({
    arrow: n.elementType,
    popper: n.elementType,
    tooltip: n.elementType,
    transition: n.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: n.oneOfType([n.arrayOf(n.oneOfType([n.func, n.object, n.bool])), n.func, n.object]),
  /**
   * Tooltip title. Zero-length titles string, undefined, null and false are never displayed.
   */
  title: n.node,
  /**
   * The component used for the transition.
   * [Follow this guide](https://mui.com/material-ui/transitions/#transitioncomponent-prop) to learn more about the requirements for this component.
   * @deprecated use the `slots.transition` prop instead. This prop will be removed in v7. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   */
  TransitionComponent: n.elementType,
  /**
   * Props applied to the transition element.
   * By default, the element is based on this [`Transition`](https://reactcommunity.org/react-transition-group/transition/) component.
   * @deprecated use the `slotProps.transition` prop instead. This prop will be removed in v7. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   * @default {}
   */
  TransitionProps: n.object
});
const Vm = (e, t = "primary") => {
  var i;
  const o = Pe[t];
  return {
    bgColor: (((i = e == null ? void 0 : e.palette) == null ? void 0 : i[t]) ?? o).tooltipBg ?? o.tooltipBg
  };
}, Wm = H(({ className: e, ...t }) => /* @__PURE__ */ S(Ai, { ...t, classes: { popper: e } }))(({ theme: e }) => {
  const t = Vm(e);
  return {
    [`& .${Sn.tooltip}`]: {
      backgroundColor: t.bgColor,
      fontSize: 13,
      fontFamily: "Noto Sans, Noto Sans TC, sans-serif",
      fontWeight: 400
    },
    [`& .${Sn.arrow}`]: {
      color: t.bgColor
    }
  };
}), yy = ({ ...e }) => /* @__PURE__ */ S(Wm, { ...e }), Um = (e, t = "primary") => {
  var i;
  const o = Pe[t], r = ((i = e == null ? void 0 : e.palette) == null ? void 0 : i[t]) ?? o;
  return {
    bgColor: r.elevated ?? o.elevated,
    fontColor: r.iconFont ?? o.iconFont
  };
}, Hm = H(
  ({ className: e, ...t }) => /* @__PURE__ */ S(Ai, { ...t, classes: { popper: e } })
)(({ theme: e }) => {
  const t = Um(e);
  return {
    [`& .${Sn.tooltip}`]: {
      backgroundColor: t.bgColor,
      color: t.fontColor,
      fontSize: 13,
      fontFamily: "Noto Sans, Noto Sans TC, sans-serif",
      fontWeight: 400,
      padding: "10px",
      borderRadius: "12px",
      boxShadow: "0px 2px 6px 2px #00000026, 0px 1px 2px 0px #0000004D"
    },
    [`& .${Sn.arrow}`]: {
      color: t.bgColor,
      "&::before": {
        boxShadow: "0px 2px 6px 2px #00000026, 0px 1px 2px 0px #0000004D"
      }
    }
  };
}), vy = ({
  title: e,
  content: t,
  actions: o,
  ...r
}) => /* @__PURE__ */ S(
  Hm,
  {
    ...r,
    title: /* @__PURE__ */ ye(st, { children: [
      e && /* @__PURE__ */ S(Gt, { fontWeight: 500, fontSize: 14, fontFamily: "Noto Sans", children: e }),
      t && /* @__PURE__ */ S(Gt, { fontSize: 14, fontFamily: "Noto Sans", children: t }),
      o && /* @__PURE__ */ S(st, { display: "flex", gap: 2, children: o })
    ] })
  }
);
export {
  ty as Alert,
  oy as Avatar,
  fy as BottomModal,
  ny as Button,
  Sf as Checkbox,
  sy as CheckboxTree,
  ly as Chip,
  ry as Fab,
  iy as IconButton,
  cy as Menu,
  py as MenuItem,
  uy as Modal,
  Bh as Radio,
  gy as RadioGroup,
  hy as Rating,
  vy as RichTooltip,
  dy as SideModal,
  by as Switch,
  my as Tabs,
  ay as ToggleButton,
  yy as Tooltip,
  ey as lemonTheme
};
