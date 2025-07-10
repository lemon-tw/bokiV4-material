var zl = Object.defineProperty;
var Vl = (e, t, o) => t in e ? zl(e, t, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[t] = o;
var jo = (e, t, o) => Vl(e, typeof t != "symbol" ? t + "" : t, o);
import * as g from "react";
import v, { isValidElement as Fn, cloneElement as Pn, Children as Wl, createContext as Ul, forwardRef as bt, useContext as Hl, useState as ai, useEffect as Ql, useMemo as Kl } from "react";
import _a, { isValidElementType as es, Memo as Yl, ForwardRef as Gl, isFragment as si } from "react-is";
import { jsx as S, jsxs as ve } from "react/jsx-runtime";
import { AlertTitle as ql, FormControlLabel as Xl, tooltipClasses as Dn } from "@mui/material";
import Jl from "@emotion/styled";
import { ThemeContext as Zl, keyframes as cn, css as ts } from "@emotion/react";
import * as Ur from "react-dom";
import yn from "react-dom";
import { renderToStaticMarkup as _l } from "react-dom/server";
function Dt(e, ...t) {
  const o = new URL(`https://mui.com/production-error/?code=${e}`);
  return t.forEach((r) => o.searchParams.append("args[]", r)), `Minified MUI error #${e}; visit ${o} for the full message.`;
}
const li = "$$material";
function ec(e) {
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
var tc = {
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
function oc(e) {
  var t = /* @__PURE__ */ Object.create(null);
  return function(o) {
    return t[o] === void 0 && (t[o] = e(o)), t[o];
  };
}
var nc = /[A-Z]|^ms/g, rc = /_EMO_([^_]+?)_([^]*?)_EMO_/g, os = function(t) {
  return t.charCodeAt(1) === 45;
}, zi = function(t) {
  return t != null && typeof t != "boolean";
}, Cr = /* @__PURE__ */ oc(function(e) {
  return os(e) ? e : e.replace(nc, "-$&").toLowerCase();
}), Vi = function(t, o) {
  switch (t) {
    case "animation":
    case "animationName":
      if (typeof o == "string")
        return o.replace(rc, function(r, i, a) {
          return It = {
            name: i,
            styles: a,
            next: It
          }, i;
        });
  }
  return tc[t] !== 1 && !os(t) && typeof o == "number" && o !== 0 ? o + "px" : o;
};
function Nn(e, t, o) {
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
        return It = {
          name: i.name,
          styles: i.styles,
          next: It
        }, i.name;
      var a = o;
      if (a.styles !== void 0) {
        var l = a.next;
        if (l !== void 0)
          for (; l !== void 0; )
            It = {
              name: l.name,
              styles: l.styles,
              next: It
            }, l = l.next;
        var s = a.styles + ";";
        return s;
      }
      return ic(e, t, o);
    }
  }
  var c = o;
  return c;
}
function ic(e, t, o) {
  var r = "";
  if (Array.isArray(o))
    for (var i = 0; i < o.length; i++)
      r += Nn(e, t, o[i]) + ";";
  else
    for (var a in o) {
      var l = o[a];
      if (typeof l != "object") {
        var s = l;
        zi(s) && (r += Cr(a) + ":" + Vi(a, s) + ";");
      } else if (Array.isArray(l) && typeof l[0] == "string" && t == null)
        for (var c = 0; c < l.length; c++)
          zi(l[c]) && (r += Cr(a) + ":" + Vi(a, l[c]) + ";");
      else {
        var u = Nn(e, t, l);
        switch (a) {
          case "animation":
          case "animationName": {
            r += Cr(a) + ":" + u + ";";
            break;
          }
          default:
            r += a + "{" + u + "}";
        }
      }
    }
  return r;
}
var Wi = /label:\s*([^\s;{]+)\s*(;|$)/g, It;
function ac(e, t, o) {
  if (e.length === 1 && typeof e[0] == "object" && e[0] !== null && e[0].styles !== void 0)
    return e[0];
  var r = !0, i = "";
  It = void 0;
  var a = e[0];
  if (a == null || a.raw === void 0)
    r = !1, i += Nn(o, t, a);
  else {
    var l = a;
    i += l[0];
  }
  for (var s = 1; s < e.length; s++)
    if (i += Nn(o, t, e[s]), r) {
      var c = a;
      i += c[s];
    }
  Wi.lastIndex = 0;
  for (var u = "", d; (d = Wi.exec(i)) !== null; )
    u += "-" + d[1];
  var f = ec(i) + u;
  return {
    name: f,
    styles: i,
    next: It
  };
}
function sc(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var vn = { exports: {} };
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var xr, Ui;
function lc() {
  if (Ui) return xr;
  Ui = 1;
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
      var u = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(d) {
        u[d] = d;
      }), Object.keys(Object.assign({}, u)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return xr = i() ? Object.assign : function(a, l) {
    for (var s, c = r(a), u, d = 1; d < arguments.length; d++) {
      s = Object(arguments[d]);
      for (var f in s)
        t.call(s, f) && (c[f] = s[f]);
      if (e) {
        u = e(s);
        for (var h = 0; h < u.length; h++)
          o.call(s, u[h]) && (c[u[h]] = s[u[h]]);
      }
    }
    return c;
  }, xr;
}
var Er, Hi;
function ci() {
  if (Hi) return Er;
  Hi = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return Er = e, Er;
}
var wr, Qi;
function ns() {
  return Qi || (Qi = 1, wr = Function.call.bind(Object.prototype.hasOwnProperty)), wr;
}
var Sr, Ki;
function cc() {
  if (Ki) return Sr;
  Ki = 1;
  var e = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var t = /* @__PURE__ */ ci(), o = {}, r = /* @__PURE__ */ ns();
    e = function(a) {
      var l = "Warning: " + a;
      typeof console < "u" && console.error(l);
      try {
        throw new Error(l);
      } catch {
      }
    };
  }
  function i(a, l, s, c, u) {
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
          } catch (C) {
            f = C;
          }
          if (f && !(f instanceof Error) && e(
            (c || "React class") + ": type specification of " + s + " `" + d + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof f + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), f instanceof Error && !(f.message in o)) {
            o[f.message] = !0;
            var m = u ? u() : "";
            e(
              "Failed " + s + " type: " + f.message + (m ?? "")
            );
          }
        }
    }
  }
  return i.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (o = {});
  }, Sr = i, Sr;
}
var Tr, Yi;
function uc() {
  if (Yi) return Tr;
  Yi = 1;
  var e = _a, t = lc(), o = /* @__PURE__ */ ci(), r = /* @__PURE__ */ ns(), i = /* @__PURE__ */ cc(), a = function() {
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
  return Tr = function(s, c) {
    var u = typeof Symbol == "function" && Symbol.iterator, d = "@@iterator";
    function f(R) {
      var V = R && (u && R[u] || R[d]);
      if (typeof V == "function")
        return V;
    }
    var h = "<<anonymous>>", m = {
      array: E("array"),
      bigint: E("bigint"),
      bool: E("boolean"),
      func: E("function"),
      number: E("number"),
      object: E("object"),
      string: E("string"),
      symbol: E("symbol"),
      any: T(),
      arrayOf: w,
      element: b(),
      elementType: k(),
      instanceOf: A,
      node: p(),
      objectOf: $,
      oneOf: M,
      oneOfType: N,
      shape: B,
      exact: O
    };
    function C(R, V) {
      return R === V ? R !== 0 || 1 / R === 1 / V : R !== R && V !== V;
    }
    function y(R, V) {
      this.message = R, this.data = V && typeof V == "object" ? V : {}, this.stack = "";
    }
    y.prototype = Error.prototype;
    function x(R) {
      if (process.env.NODE_ENV !== "production")
        var V = {}, ne = 0;
      function te(Y, q, z, oe, re, K, Z) {
        if (oe = oe || h, K = K || z, Z !== o) {
          if (c) {
            var J = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw J.name = "Invariant Violation", J;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var ue = oe + ":" + z;
            !V[ue] && // Avoid spamming the console because they are often not actionable except for lib authors
            ne < 3 && (a(
              "You are manually calling a React.PropTypes validation function for the `" + K + "` prop on `" + oe + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), V[ue] = !0, ne++);
          }
        }
        return q[z] == null ? Y ? q[z] === null ? new y("The " + re + " `" + K + "` is marked as required " + ("in `" + oe + "`, but its value is `null`.")) : new y("The " + re + " `" + K + "` is marked as required in " + ("`" + oe + "`, but its value is `undefined`.")) : null : R(q, z, oe, re, K);
      }
      var G = te.bind(null, !1);
      return G.isRequired = te.bind(null, !0), G;
    }
    function E(R) {
      function V(ne, te, G, Y, q, z) {
        var oe = ne[te], re = P(oe);
        if (re !== R) {
          var K = U(oe);
          return new y(
            "Invalid " + Y + " `" + q + "` of type " + ("`" + K + "` supplied to `" + G + "`, expected ") + ("`" + R + "`."),
            { expectedType: R }
          );
        }
        return null;
      }
      return x(V);
    }
    function T() {
      return x(l);
    }
    function w(R) {
      function V(ne, te, G, Y, q) {
        if (typeof R != "function")
          return new y("Property `" + q + "` of component `" + G + "` has invalid PropType notation inside arrayOf.");
        var z = ne[te];
        if (!Array.isArray(z)) {
          var oe = P(z);
          return new y("Invalid " + Y + " `" + q + "` of type " + ("`" + oe + "` supplied to `" + G + "`, expected an array."));
        }
        for (var re = 0; re < z.length; re++) {
          var K = R(z, re, G, Y, q + "[" + re + "]", o);
          if (K instanceof Error)
            return K;
        }
        return null;
      }
      return x(V);
    }
    function b() {
      function R(V, ne, te, G, Y) {
        var q = V[ne];
        if (!s(q)) {
          var z = P(q);
          return new y("Invalid " + G + " `" + Y + "` of type " + ("`" + z + "` supplied to `" + te + "`, expected a single ReactElement."));
        }
        return null;
      }
      return x(R);
    }
    function k() {
      function R(V, ne, te, G, Y) {
        var q = V[ne];
        if (!e.isValidElementType(q)) {
          var z = P(q);
          return new y("Invalid " + G + " `" + Y + "` of type " + ("`" + z + "` supplied to `" + te + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return x(R);
    }
    function A(R) {
      function V(ne, te, G, Y, q) {
        if (!(ne[te] instanceof R)) {
          var z = R.name || h, oe = L(ne[te]);
          return new y("Invalid " + Y + " `" + q + "` of type " + ("`" + oe + "` supplied to `" + G + "`, expected ") + ("instance of `" + z + "`."));
        }
        return null;
      }
      return x(V);
    }
    function M(R) {
      if (!Array.isArray(R))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? a(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : a("Invalid argument supplied to oneOf, expected an array.")), l;
      function V(ne, te, G, Y, q) {
        for (var z = ne[te], oe = 0; oe < R.length; oe++)
          if (C(z, R[oe]))
            return null;
        var re = JSON.stringify(R, function(Z, J) {
          var ue = U(J);
          return ue === "symbol" ? String(J) : J;
        });
        return new y("Invalid " + Y + " `" + q + "` of value `" + String(z) + "` " + ("supplied to `" + G + "`, expected one of " + re + "."));
      }
      return x(V);
    }
    function $(R) {
      function V(ne, te, G, Y, q) {
        if (typeof R != "function")
          return new y("Property `" + q + "` of component `" + G + "` has invalid PropType notation inside objectOf.");
        var z = ne[te], oe = P(z);
        if (oe !== "object")
          return new y("Invalid " + Y + " `" + q + "` of type " + ("`" + oe + "` supplied to `" + G + "`, expected an object."));
        for (var re in z)
          if (r(z, re)) {
            var K = R(z, re, G, Y, q + "." + re, o);
            if (K instanceof Error)
              return K;
          }
        return null;
      }
      return x(V);
    }
    function N(R) {
      if (!Array.isArray(R))
        return process.env.NODE_ENV !== "production" && a("Invalid argument supplied to oneOfType, expected an instance of array."), l;
      for (var V = 0; V < R.length; V++) {
        var ne = R[V];
        if (typeof ne != "function")
          return a(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + H(ne) + " at index " + V + "."
          ), l;
      }
      function te(G, Y, q, z, oe) {
        for (var re = [], K = 0; K < R.length; K++) {
          var Z = R[K], J = Z(G, Y, q, z, oe, o);
          if (J == null)
            return null;
          J.data && r(J.data, "expectedType") && re.push(J.data.expectedType);
        }
        var ue = re.length > 0 ? ", expected one of type [" + re.join(", ") + "]" : "";
        return new y("Invalid " + z + " `" + oe + "` supplied to " + ("`" + q + "`" + ue + "."));
      }
      return x(te);
    }
    function p() {
      function R(V, ne, te, G, Y) {
        return I(V[ne]) ? null : new y("Invalid " + G + " `" + Y + "` supplied to " + ("`" + te + "`, expected a ReactNode."));
      }
      return x(R);
    }
    function F(R, V, ne, te, G) {
      return new y(
        (R || "React class") + ": " + V + " type `" + ne + "." + te + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + G + "`."
      );
    }
    function B(R) {
      function V(ne, te, G, Y, q) {
        var z = ne[te], oe = P(z);
        if (oe !== "object")
          return new y("Invalid " + Y + " `" + q + "` of type `" + oe + "` " + ("supplied to `" + G + "`, expected `object`."));
        for (var re in R) {
          var K = R[re];
          if (typeof K != "function")
            return F(G, Y, q, re, U(K));
          var Z = K(z, re, G, Y, q + "." + re, o);
          if (Z)
            return Z;
        }
        return null;
      }
      return x(V);
    }
    function O(R) {
      function V(ne, te, G, Y, q) {
        var z = ne[te], oe = P(z);
        if (oe !== "object")
          return new y("Invalid " + Y + " `" + q + "` of type `" + oe + "` " + ("supplied to `" + G + "`, expected `object`."));
        var re = t({}, ne[te], R);
        for (var K in re) {
          var Z = R[K];
          if (r(R, K) && typeof Z != "function")
            return F(G, Y, q, K, U(Z));
          if (!Z)
            return new y(
              "Invalid " + Y + " `" + q + "` key `" + K + "` supplied to `" + G + "`.\nBad object: " + JSON.stringify(ne[te], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(R), null, "  ")
            );
          var J = Z(z, K, G, Y, q + "." + K, o);
          if (J)
            return J;
        }
        return null;
      }
      return x(V);
    }
    function I(R) {
      switch (typeof R) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !R;
        case "object":
          if (Array.isArray(R))
            return R.every(I);
          if (R === null || s(R))
            return !0;
          var V = f(R);
          if (V) {
            var ne = V.call(R), te;
            if (V !== R.entries) {
              for (; !(te = ne.next()).done; )
                if (!I(te.value))
                  return !1;
            } else
              for (; !(te = ne.next()).done; ) {
                var G = te.value;
                if (G && !I(G[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function j(R, V) {
      return R === "symbol" ? !0 : V ? V["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && V instanceof Symbol : !1;
    }
    function P(R) {
      var V = typeof R;
      return Array.isArray(R) ? "array" : R instanceof RegExp ? "object" : j(V, R) ? "symbol" : V;
    }
    function U(R) {
      if (typeof R > "u" || R === null)
        return "" + R;
      var V = P(R);
      if (V === "object") {
        if (R instanceof Date)
          return "date";
        if (R instanceof RegExp)
          return "regexp";
      }
      return V;
    }
    function H(R) {
      var V = U(R);
      switch (V) {
        case "array":
        case "object":
          return "an " + V;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + V;
        default:
          return V;
      }
    }
    function L(R) {
      return !R.constructor || !R.constructor.name ? h : R.constructor.name;
    }
    return m.checkPropTypes = i, m.resetWarningCache = i.resetWarningCache, m.PropTypes = m, m;
  }, Tr;
}
var kr, Gi;
function pc() {
  if (Gi) return kr;
  Gi = 1;
  var e = /* @__PURE__ */ ci();
  function t() {
  }
  function o() {
  }
  return o.resetWarningCache = t, kr = function() {
    function r(l, s, c, u, d, f) {
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
  }, kr;
}
var qi;
function dc() {
  if (qi) return vn.exports;
  if (qi = 1, process.env.NODE_ENV !== "production") {
    var e = _a, t = !0;
    vn.exports = /* @__PURE__ */ uc()(e.isElement, t);
  } else
    vn.exports = /* @__PURE__ */ pc()();
  return vn.exports;
}
var fc = /* @__PURE__ */ dc();
const n = /* @__PURE__ */ sc(fc);
/**
 * @mui/styled-engine v6.4.11
 *
 * @license MIT
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
function rs(e, t) {
  const o = Jl(e, t);
  return process.env.NODE_ENV !== "production" ? (...r) => {
    const i = typeof e == "string" ? `"${e}"` : "component";
    return r.length === 0 ? console.error([`MUI: Seems like you called \`styled(${i})()\` without a \`style\` argument.`, 'You must provide a `styles` argument: `styled("div")(styleYouForgotToPass)`.'].join(`
`)) : r.some((a) => a === void 0) && console.error(`MUI: the styled(${i})(...args) API requires all its args to be defined.`), o(...r);
  } : o;
}
function gc(e, t) {
  Array.isArray(e.__emotion_styles) && (e.__emotion_styles = t(e.__emotion_styles));
}
const Xi = [];
function Ji(e) {
  return Xi[0] = e, ac(Xi);
}
function dt(e) {
  if (typeof e != "object" || e === null)
    return !1;
  const t = Object.getPrototypeOf(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}
function is(e) {
  if (/* @__PURE__ */ g.isValidElement(e) || es(e) || !dt(e))
    return e;
  const t = {};
  return Object.keys(e).forEach((o) => {
    t[o] = is(e[o]);
  }), t;
}
function qe(e, t, o = {
  clone: !0
}) {
  const r = o.clone ? {
    ...e
  } : e;
  return dt(e) && dt(t) && Object.keys(t).forEach((i) => {
    /* @__PURE__ */ g.isValidElement(t[i]) || es(t[i]) ? r[i] = t[i] : dt(t[i]) && // Avoid prototype pollution
    Object.prototype.hasOwnProperty.call(e, i) && dt(e[i]) ? r[i] = qe(e[i], t[i], o) : o.clone ? r[i] = dt(t[i]) ? is(t[i]) : t[i] : r[i] = t[i];
  }), r;
}
const hc = (e) => {
  const t = Object.keys(e).map((o) => ({
    key: o,
    val: e[o]
  })) || [];
  return t.sort((o, r) => o.val - r.val), t.reduce((o, r) => ({
    ...o,
    [r.key]: r.val
  }), {});
};
function mc(e) {
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
  } = e, a = hc(t), l = Object.keys(a);
  function s(h) {
    return `@media (min-width:${typeof t[h] == "number" ? t[h] : h}${o})`;
  }
  function c(h) {
    return `@media (max-width:${(typeof t[h] == "number" ? t[h] : h) - r / 100}${o})`;
  }
  function u(h, m) {
    const C = l.indexOf(m);
    return `@media (min-width:${typeof t[h] == "number" ? t[h] : h}${o}) and (max-width:${(C !== -1 && typeof t[l[C]] == "number" ? t[l[C]] : m) - r / 100}${o})`;
  }
  function d(h) {
    return l.indexOf(h) + 1 < l.length ? u(h, l[l.indexOf(h) + 1]) : s(h);
  }
  function f(h) {
    const m = l.indexOf(h);
    return m === 0 ? s(l[1]) : m === l.length - 1 ? c(l[m]) : u(h, l[l.indexOf(h) + 1]).replace("@media", "@media not all and");
  }
  return {
    keys: l,
    values: a,
    up: s,
    down: c,
    between: u,
    only: d,
    not: f,
    unit: o,
    ...i
  };
}
function bc(e, t) {
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
function yc(e, t) {
  return t === "@" || t.startsWith("@") && (e.some((o) => t.startsWith(`@${o}`)) || !!t.match(/^@\d/));
}
function vc(e, t) {
  const o = t.match(/^@([^/]+)?\/?(.+)?$/);
  if (!o) {
    if (process.env.NODE_ENV !== "production")
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The provided shorthand ${`(${t})`} is invalid. The format should be \`@<breakpoint | number>\` or \`@<breakpoint | number>/<container>\`.
For example, \`@sm\` or \`@600\` or \`@40rem/sidebar\`.` : Dt(18, `(${t})`));
    return null;
  }
  const [, r, i] = o, a = Number.isNaN(+r) ? r || 0 : +r;
  return e.containerQueries(i).up(a);
}
function Cc(e) {
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
const xc = {
  borderRadius: 4
}, jt = process.env.NODE_ENV !== "production" ? n.oneOfType([n.number, n.string, n.object, n.array]) : {};
function Xo(e, t) {
  return t ? qe(e, t, {
    clone: !1
    // No need to clone deep, it's way faster.
  }) : e;
}
const qn = {
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
}, Zi = {
  // Sorted ASC by size. That's important.
  // It can't be configured as it's used statically for propTypes.
  keys: ["xs", "sm", "md", "lg", "xl"],
  up: (e) => `@media (min-width:${qn[e]}px)`
}, Ec = {
  containerQueries: (e) => ({
    up: (t) => {
      let o = typeof t == "number" ? t : qn[t] || t;
      return typeof o == "number" && (o = `${o}px`), e ? `@container ${e} (min-width:${o})` : `@container (min-width:${o})`;
    }
  })
};
function St(e, t, o) {
  const r = e.theme || {};
  if (Array.isArray(t)) {
    const a = r.breakpoints || Zi;
    return t.reduce((l, s, c) => (l[a.up(a.keys[c])] = o(t[c]), l), {});
  }
  if (typeof t == "object") {
    const a = r.breakpoints || Zi;
    return Object.keys(t).reduce((l, s) => {
      if (yc(a.keys, s)) {
        const c = vc(r.containerQueries ? r : Ec, s);
        c && (l[c] = o(t[s], s));
      } else if (Object.keys(a.values || qn).includes(s)) {
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
function wc(e = {}) {
  var o;
  return ((o = e.keys) == null ? void 0 : o.reduce((r, i) => {
    const a = e.up(i);
    return r[a] = {}, r;
  }, {})) || {};
}
function Sc(e, t) {
  return e.reduce((o, r) => {
    const i = o[r];
    return (!i || Object.keys(i).length === 0) && delete o[r], o;
  }, t);
}
function W(e) {
  if (typeof e != "string")
    throw new Error(process.env.NODE_ENV !== "production" ? "MUI: `capitalize(string)` expects a string argument." : Dt(7));
  return e.charAt(0).toUpperCase() + e.slice(1);
}
function Xn(e, t, o = !0) {
  if (!t || typeof t != "string")
    return null;
  if (e && e.vars && o) {
    const r = `vars.${t}`.split(".").reduce((i, a) => i && i[a] ? i[a] : null, e);
    if (r != null)
      return r;
  }
  return t.split(".").reduce((r, i) => r && r[i] != null ? r[i] : null, e);
}
function jn(e, t, o, r = o) {
  let i;
  return typeof e == "function" ? i = e(o) : Array.isArray(e) ? i = e[o] || r : i = Xn(e, o) || r, t && (i = t(i, r, e)), i;
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
    const s = l[t], c = l.theme, u = Xn(c, r) || {};
    return St(l, s, (f) => {
      let h = jn(u, i, f);
      return f === h && typeof f == "string" && (h = jn(u, i, `${t}${f === "default" ? "" : W(f)}`, f)), o === !1 ? h : {
        [o]: h
      };
    });
  };
  return a.propTypes = process.env.NODE_ENV !== "production" ? {
    [t]: jt
  } : {}, a.filterProps = [t], a;
}
function Tc(e) {
  const t = {};
  return (o) => (t[o] === void 0 && (t[o] = e(o)), t[o]);
}
const kc = {
  m: "margin",
  p: "padding"
}, Oc = {
  t: "Top",
  r: "Right",
  b: "Bottom",
  l: "Left",
  x: ["Left", "Right"],
  y: ["Top", "Bottom"]
}, _i = {
  marginX: "mx",
  marginY: "my",
  paddingX: "px",
  paddingY: "py"
}, Ac = Tc((e) => {
  if (e.length > 2)
    if (_i[e])
      e = _i[e];
    else
      return [e];
  const [t, o] = e.split(""), r = kc[t], i = Oc[o] || "";
  return Array.isArray(i) ? i.map((a) => r + a) : [r + i];
}), Jn = ["m", "mt", "mr", "mb", "ml", "mx", "my", "margin", "marginTop", "marginRight", "marginBottom", "marginLeft", "marginX", "marginY", "marginInline", "marginInlineStart", "marginInlineEnd", "marginBlock", "marginBlockStart", "marginBlockEnd"], Zn = ["p", "pt", "pr", "pb", "pl", "px", "py", "padding", "paddingTop", "paddingRight", "paddingBottom", "paddingLeft", "paddingX", "paddingY", "paddingInline", "paddingInlineStart", "paddingInlineEnd", "paddingBlock", "paddingBlockStart", "paddingBlockEnd"], Rc = [...Jn, ...Zn];
function un(e, t, o, r) {
  const i = Xn(e, t, !0) ?? o;
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
function ui(e) {
  return un(e, "spacing", 8, "spacing");
}
function pn(e, t) {
  return typeof t == "string" || t == null ? t : e(t);
}
function Fc(e, t) {
  return (o) => e.reduce((r, i) => (r[i] = pn(t, o), r), {});
}
function Pc(e, t, o, r) {
  if (!t.includes(o))
    return null;
  const i = Ac(o), a = Fc(i, r), l = e[o];
  return St(e, l, a);
}
function as(e, t) {
  const o = ui(e.theme);
  return Object.keys(e).map((r) => Pc(e, t, r, o)).reduce(Xo, {});
}
function Re(e) {
  return as(e, Jn);
}
Re.propTypes = process.env.NODE_ENV !== "production" ? Jn.reduce((e, t) => (e[t] = jt, e), {}) : {};
Re.filterProps = Jn;
function Fe(e) {
  return as(e, Zn);
}
Fe.propTypes = process.env.NODE_ENV !== "production" ? Zn.reduce((e, t) => (e[t] = jt, e), {}) : {};
Fe.filterProps = Zn;
process.env.NODE_ENV !== "production" && Rc.reduce((e, t) => (e[t] = jt, e), {});
function ss(e = 8, t = ui({
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
function _n(...e) {
  const t = e.reduce((r, i) => (i.filterProps.forEach((a) => {
    r[a] = i;
  }), r), {}), o = (r) => Object.keys(r).reduce((i, a) => t[a] ? Xo(i, t[a](r)) : i, {});
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
const Mc = nt("border", _e), Bc = nt("borderTop", _e), Ic = nt("borderRight", _e), Dc = nt("borderBottom", _e), Nc = nt("borderLeft", _e), jc = nt("borderColor"), $c = nt("borderTopColor"), Lc = nt("borderRightColor"), zc = nt("borderBottomColor"), Vc = nt("borderLeftColor"), Wc = nt("outline", _e), Uc = nt("outlineColor"), er = (e) => {
  if (e.borderRadius !== void 0 && e.borderRadius !== null) {
    const t = un(e.theme, "shape.borderRadius", 4, "borderRadius"), o = (r) => ({
      borderRadius: pn(t, r)
    });
    return St(e, e.borderRadius, o);
  }
  return null;
};
er.propTypes = process.env.NODE_ENV !== "production" ? {
  borderRadius: jt
} : {};
er.filterProps = ["borderRadius"];
_n(Mc, Bc, Ic, Dc, Nc, jc, $c, Lc, zc, Vc, er, Wc, Uc);
const tr = (e) => {
  if (e.gap !== void 0 && e.gap !== null) {
    const t = un(e.theme, "spacing", 8, "gap"), o = (r) => ({
      gap: pn(t, r)
    });
    return St(e, e.gap, o);
  }
  return null;
};
tr.propTypes = process.env.NODE_ENV !== "production" ? {
  gap: jt
} : {};
tr.filterProps = ["gap"];
const or = (e) => {
  if (e.columnGap !== void 0 && e.columnGap !== null) {
    const t = un(e.theme, "spacing", 8, "columnGap"), o = (r) => ({
      columnGap: pn(t, r)
    });
    return St(e, e.columnGap, o);
  }
  return null;
};
or.propTypes = process.env.NODE_ENV !== "production" ? {
  columnGap: jt
} : {};
or.filterProps = ["columnGap"];
const nr = (e) => {
  if (e.rowGap !== void 0 && e.rowGap !== null) {
    const t = un(e.theme, "spacing", 8, "rowGap"), o = (r) => ({
      rowGap: pn(t, r)
    });
    return St(e, e.rowGap, o);
  }
  return null;
};
nr.propTypes = process.env.NODE_ENV !== "production" ? {
  rowGap: jt
} : {};
nr.filterProps = ["rowGap"];
const Hc = Be({
  prop: "gridColumn"
}), Qc = Be({
  prop: "gridRow"
}), Kc = Be({
  prop: "gridAutoFlow"
}), Yc = Be({
  prop: "gridAutoColumns"
}), Gc = Be({
  prop: "gridAutoRows"
}), qc = Be({
  prop: "gridTemplateColumns"
}), Xc = Be({
  prop: "gridTemplateRows"
}), Jc = Be({
  prop: "gridTemplateAreas"
}), Zc = Be({
  prop: "gridArea"
});
_n(tr, or, nr, Hc, Qc, Kc, Yc, Gc, qc, Xc, Jc, Zc);
function Eo(e, t) {
  return t === "grey" ? t : e;
}
const _c = Be({
  prop: "color",
  themeKey: "palette",
  transform: Eo
}), eu = Be({
  prop: "bgcolor",
  cssProperty: "backgroundColor",
  themeKey: "palette",
  transform: Eo
}), tu = Be({
  prop: "backgroundColor",
  themeKey: "palette",
  transform: Eo
});
_n(_c, eu, tu);
function Ge(e) {
  return e <= 1 && e !== 0 ? `${e * 100}%` : e;
}
const ou = Be({
  prop: "width",
  transform: Ge
}), pi = (e) => {
  if (e.maxWidth !== void 0 && e.maxWidth !== null) {
    const t = (o) => {
      var i, a, l, s, c;
      const r = ((l = (a = (i = e.theme) == null ? void 0 : i.breakpoints) == null ? void 0 : a.values) == null ? void 0 : l[o]) || qn[o];
      return r ? ((c = (s = e.theme) == null ? void 0 : s.breakpoints) == null ? void 0 : c.unit) !== "px" ? {
        maxWidth: `${r}${e.theme.breakpoints.unit}`
      } : {
        maxWidth: r
      } : {
        maxWidth: Ge(o)
      };
    };
    return St(e, e.maxWidth, t);
  }
  return null;
};
pi.filterProps = ["maxWidth"];
const nu = Be({
  prop: "minWidth",
  transform: Ge
}), ru = Be({
  prop: "height",
  transform: Ge
}), iu = Be({
  prop: "maxHeight",
  transform: Ge
}), au = Be({
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
const su = Be({
  prop: "boxSizing"
});
_n(ou, pi, nu, ru, iu, au, su);
const dn = {
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
    style: er
  },
  // palette
  color: {
    themeKey: "palette",
    transform: Eo
  },
  bgcolor: {
    themeKey: "palette",
    cssProperty: "backgroundColor",
    transform: Eo
  },
  backgroundColor: {
    themeKey: "palette",
    transform: Eo
  },
  // spacing
  p: {
    style: Fe
  },
  pt: {
    style: Fe
  },
  pr: {
    style: Fe
  },
  pb: {
    style: Fe
  },
  pl: {
    style: Fe
  },
  px: {
    style: Fe
  },
  py: {
    style: Fe
  },
  padding: {
    style: Fe
  },
  paddingTop: {
    style: Fe
  },
  paddingRight: {
    style: Fe
  },
  paddingBottom: {
    style: Fe
  },
  paddingLeft: {
    style: Fe
  },
  paddingX: {
    style: Fe
  },
  paddingY: {
    style: Fe
  },
  paddingInline: {
    style: Fe
  },
  paddingInlineStart: {
    style: Fe
  },
  paddingInlineEnd: {
    style: Fe
  },
  paddingBlock: {
    style: Fe
  },
  paddingBlockStart: {
    style: Fe
  },
  paddingBlockEnd: {
    style: Fe
  },
  m: {
    style: Re
  },
  mt: {
    style: Re
  },
  mr: {
    style: Re
  },
  mb: {
    style: Re
  },
  ml: {
    style: Re
  },
  mx: {
    style: Re
  },
  my: {
    style: Re
  },
  margin: {
    style: Re
  },
  marginTop: {
    style: Re
  },
  marginRight: {
    style: Re
  },
  marginBottom: {
    style: Re
  },
  marginLeft: {
    style: Re
  },
  marginX: {
    style: Re
  },
  marginY: {
    style: Re
  },
  marginInline: {
    style: Re
  },
  marginInlineStart: {
    style: Re
  },
  marginInlineEnd: {
    style: Re
  },
  marginBlock: {
    style: Re
  },
  marginBlockStart: {
    style: Re
  },
  marginBlockEnd: {
    style: Re
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
    style: tr
  },
  rowGap: {
    style: nr
  },
  columnGap: {
    style: or
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
    style: pi
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
function lu(...e) {
  const t = e.reduce((r, i) => r.concat(Object.keys(i)), []), o = new Set(t);
  return e.every((r) => o.size === Object.keys(r).length);
}
function cu(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function uu() {
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
      themeKey: u,
      transform: d,
      style: f
    } = s;
    if (r == null)
      return null;
    if (u === "typography" && r === "inherit")
      return {
        [o]: r
      };
    const h = Xn(i, u) || {};
    return f ? f(l) : St(l, r, (C) => {
      let y = jn(h, d, C);
      return C === y && typeof C == "string" && (y = jn(h, d, `${o}${C === "default" ? "" : W(C)}`, C)), c === !1 ? y : {
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
    const a = i.unstable_sxConfig ?? dn;
    function l(s) {
      let c = s;
      if (typeof s == "function")
        c = s(i);
      else if (typeof s != "object")
        return s;
      if (!c)
        return null;
      const u = wc(i.breakpoints), d = Object.keys(u);
      let f = u;
      return Object.keys(c).forEach((h) => {
        const m = cu(c[h], i);
        if (m != null)
          if (typeof m == "object")
            if (a[h])
              f = Xo(f, e(h, m, i, a));
            else {
              const C = St({
                theme: i
              }, m, (y) => ({
                [h]: y
              }));
              lu(C, m) ? f[h] = t({
                sx: m,
                theme: i
              }) : f = Xo(f, C);
            }
          else
            f = Xo(f, e(h, m, i, a));
      }), bc(i, Sc(d, f));
    }
    return Array.isArray(r) ? r.map(l) : l(r);
  }
  return t;
}
const Gt = uu();
Gt.filterProps = ["sx"];
function pu(e, t) {
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
function di(e = {}, ...t) {
  const {
    breakpoints: o = {},
    palette: r = {},
    spacing: i,
    shape: a = {},
    ...l
  } = e, s = mc(o), c = ss(i);
  let u = qe({
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
      ...xc,
      ...a
    }
  }, l);
  return u = Cc(u), u.applyStyles = pu, u = t.reduce((d, f) => qe(d, f), u), u.unstable_sxConfig = {
    ...dn,
    ...l == null ? void 0 : l.unstable_sxConfig
  }, u.unstable_sx = function(f) {
    return Gt({
      sx: f,
      theme: this
    });
  }, u;
}
function du(e) {
  return Object.keys(e).length === 0;
}
function fu(e = null) {
  const t = g.useContext(Zl);
  return !t || du(t) ? e : t;
}
const gu = di();
function ls(e = gu) {
  return fu(e);
}
const hu = (e) => {
  var r;
  const t = {
    systemProps: {},
    otherProps: {}
  }, o = ((r = e == null ? void 0 : e.theme) == null ? void 0 : r.unstable_sxConfig) ?? dn;
  return Object.keys(e).forEach((i) => {
    o[i] ? t.systemProps[i] = e[i] : t.otherProps[i] = e[i];
  }), t;
};
function cs(e) {
  const {
    sx: t,
    ...o
  } = e, {
    systemProps: r,
    otherProps: i
  } = hu(o);
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
const ea = (e) => e, mu = () => {
  let e = ea;
  return {
    configure(t) {
      e = t;
    },
    generate(t) {
      return e(t);
    },
    reset() {
      e = ea;
    }
  };
}, us = mu();
function ps(e) {
  var t, o, r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var i = e.length;
    for (t = 0; t < i; t++) e[t] && (o = ps(e[t])) && (r && (r += " "), r += o);
  } else for (o in e) e[o] && (r && (r += " "), r += o);
  return r;
}
function _() {
  for (var e, t, o = 0, r = "", i = arguments.length; o < i; o++) (e = arguments[o]) && (t = ps(e)) && (r && (r += " "), r += t);
  return r;
}
function bu(e = {}) {
  const {
    themeId: t,
    defaultTheme: o,
    defaultClassName: r = "MuiBox-root",
    generateClassName: i
  } = e, a = rs("div", {
    shouldForwardProp: (s) => s !== "theme" && s !== "sx" && s !== "as"
  })(Gt);
  return /* @__PURE__ */ g.forwardRef(function(c, u) {
    const d = ls(o), {
      className: f,
      component: h = "div",
      ...m
    } = cs(c);
    return /* @__PURE__ */ S(a, {
      as: h,
      ref: u,
      className: _(f, i ? i(r) : r),
      theme: t && d[t] || d,
      ...m
    });
  });
}
const yu = {
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
function de(e, t, o = "Mui") {
  const r = yu[t];
  return r ? `${o}-${r}` : `${us.generate(e)}-${t}`;
}
function ce(e, t, o = "Mui") {
  const r = {};
  return t.forEach((i) => {
    r[i] = de(e, i, o);
  }), r;
}
function ds(e, t = "") {
  return e.displayName || e.name || t;
}
function ta(e, t, o) {
  const r = ds(t);
  return e.displayName || (r !== "" ? `${o}(${r})` : o);
}
function vu(e) {
  if (e != null) {
    if (typeof e == "string")
      return e;
    if (typeof e == "function")
      return ds(e, "Component");
    if (typeof e == "object")
      switch (e.$$typeof) {
        case Gl:
          return ta(e, e.render, "ForwardRef");
        case Yl:
          return ta(e, e.type, "memo");
        default:
          return;
      }
  }
}
function fs(e) {
  const {
    variants: t,
    ...o
  } = e, r = {
    variants: t,
    style: Ji(o),
    isProcessed: !0
  };
  return r.style === o || t && t.forEach((i) => {
    typeof i.style != "function" && (i.style = Ji(i.style));
  }), r;
}
const Cu = di();
function Or(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
function xu(e) {
  return e ? (t, o) => o[e] : null;
}
function Eu(e, t, o) {
  e.theme = ku(e.theme) ? o : e.theme[t] || e.theme;
}
function Mn(e, t) {
  const o = typeof t == "function" ? t(e) : t;
  if (Array.isArray(o))
    return o.flatMap((r) => Mn(e, r));
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
    return gs(e, o.variants, [r]);
  }
  return o != null && o.isProcessed ? o.style : o;
}
function gs(e, t, o = []) {
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
function wu(e = {}) {
  const {
    themeId: t,
    defaultTheme: o = Cu,
    rootShouldForwardProp: r = Or,
    slotShouldForwardProp: i = Or
  } = e;
  function a(s) {
    Eu(s, t, o);
  }
  return (s, c = {}) => {
    gc(s, (k) => k.filter((A) => A !== Gt));
    const {
      name: u,
      slot: d,
      skipVariantsResolver: f,
      skipSx: h,
      // TODO v6: remove `lowercaseFirstLetter()` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      overridesResolver: m = xu(hs(d)),
      ...C
    } = c, y = f !== void 0 ? f : (
      // TODO v6: remove `Root` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      d && d !== "Root" && d !== "root" || !1
    ), x = h || !1;
    let E = Or;
    d === "Root" || d === "root" ? E = r : d ? E = i : Ou(s) && (E = void 0);
    const T = rs(s, {
      shouldForwardProp: E,
      label: Tu(u, d),
      ...C
    }), w = (k) => {
      if (k.__emotion_real === k)
        return k;
      if (typeof k == "function")
        return function(M) {
          return Mn(M, k);
        };
      if (dt(k)) {
        const A = fs(k);
        return A.variants ? function($) {
          return Mn($, A);
        } : A.style;
      }
      return k;
    }, b = (...k) => {
      const A = [], M = k.map(w), $ = [];
      if (A.push(a), u && m && $.push(function(B) {
        var P, U;
        const I = (U = (P = B.theme.components) == null ? void 0 : P[u]) == null ? void 0 : U.styleOverrides;
        if (!I)
          return null;
        const j = {};
        for (const H in I)
          j[H] = Mn(B, I[H]);
        return m(B, j);
      }), u && !y && $.push(function(B) {
        var j, P;
        const O = B.theme, I = (P = (j = O == null ? void 0 : O.components) == null ? void 0 : j[u]) == null ? void 0 : P.variants;
        return I ? gs(B, I) : null;
      }), x || $.push(Gt), Array.isArray(M[0])) {
        const F = M.shift(), B = new Array(A.length).fill(""), O = new Array($.length).fill("");
        let I;
        I = [...B, ...F, ...O], I.raw = [...B, ...F.raw, ...O], A.unshift(I);
      }
      const N = [...A, ...M, ...$], p = T(...N);
      return s.muiName && (p.muiName = s.muiName), process.env.NODE_ENV !== "production" && (p.displayName = Su(u, d, s)), p;
    };
    return T.withConfig && (b.withConfig = T.withConfig), b;
  };
}
function Su(e, t, o) {
  return e ? `${e}${W(t || "")}` : `Styled(${vu(o)})`;
}
function Tu(e, t) {
  let o;
  return process.env.NODE_ENV !== "production" && e && (o = `${e}-${hs(t || "Root")}`), o;
}
function ku(e) {
  for (const t in e)
    return !1;
  return !0;
}
function Ou(e) {
  return typeof e == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  e.charCodeAt(0) > 96;
}
function hs(e) {
  return e && e.charAt(0).toLowerCase() + e.slice(1);
}
function en(e, t) {
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
              o[i][c] = en(a[c], l[c]);
            }
        }
      } else o[i] === void 0 && (o[i] = e[i]);
    }
  return o;
}
const gt = typeof window < "u" ? g.useLayoutEffect : g.useEffect;
function Au(e, t = Number.MIN_SAFE_INTEGER, o = Number.MAX_SAFE_INTEGER) {
  return Math.max(t, Math.min(e, o));
}
function fi(e, t = 0, o = 1) {
  return process.env.NODE_ENV !== "production" && (e < t || e > o) && console.error(`MUI: The value provided ${e} is out of range [${t}, ${o}].`), Au(e, t, o);
}
function Ru(e) {
  e = e.slice(1);
  const t = new RegExp(`.{1,${e.length >= 6 ? 2 : 1}}`, "g");
  let o = e.match(t);
  return o && o[0].length === 1 && (o = o.map((r) => r + r)), process.env.NODE_ENV !== "production" && e.length !== e.trim().length && console.error(`MUI: The color: "${e}" is invalid. Make sure the color input doesn't contain leading/trailing space.`), o ? `rgb${o.length === 4 ? "a" : ""}(${o.map((r, i) => i < 3 ? parseInt(r, 16) : Math.round(parseInt(r, 16) / 255 * 1e3) / 1e3).join(", ")})` : "";
}
function Nt(e) {
  if (e.type)
    return e;
  if (e.charAt(0) === "#")
    return Nt(Ru(e));
  const t = e.indexOf("("), o = e.substring(0, t);
  if (!["rgb", "rgba", "hsl", "hsla", "color"].includes(o))
    throw new Error(process.env.NODE_ENV !== "production" ? `MUI: Unsupported \`${e}\` color.
The following formats are supported: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color().` : Dt(9, e));
  let r = e.substring(t + 1, e.length - 1), i;
  if (o === "color") {
    if (r = r.split(" "), i = r.shift(), r.length === 4 && r[3].charAt(0) === "/" && (r[3] = r[3].slice(1)), !["srgb", "display-p3", "a98-rgb", "prophoto-rgb", "rec-2020"].includes(i))
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: unsupported \`${i}\` color space.
The following color spaces are supported: srgb, display-p3, a98-rgb, prophoto-rgb, rec-2020.` : Dt(10, i));
  } else
    r = r.split(",");
  return r = r.map((a) => parseFloat(a)), {
    type: o,
    values: r,
    colorSpace: i
  };
}
const Fu = (e) => {
  const t = Nt(e);
  return t.values.slice(0, 3).map((o, r) => t.type.includes("hsl") && r !== 0 ? `${o}%` : o).join(" ");
}, Ho = (e, t) => {
  try {
    return Fu(e);
  } catch {
    return t && process.env.NODE_ENV !== "production" && console.warn(t), e;
  }
};
function rr(e) {
  const {
    type: t,
    colorSpace: o
  } = e;
  let {
    values: r
  } = e;
  return t.includes("rgb") ? r = r.map((i, a) => a < 3 ? parseInt(i, 10) : i) : t.includes("hsl") && (r[1] = `${r[1]}%`, r[2] = `${r[2]}%`), t.includes("color") ? r = `${o} ${r.join(" ")}` : r = `${r.join(", ")}`, `${t}(${r})`;
}
function ms(e) {
  e = Nt(e);
  const {
    values: t
  } = e, o = t[0], r = t[1] / 100, i = t[2] / 100, a = r * Math.min(i, 1 - i), l = (u, d = (u + o / 30) % 12) => i - a * Math.max(Math.min(d - 3, 9 - d, 1), -1);
  let s = "rgb";
  const c = [Math.round(l(0) * 255), Math.round(l(8) * 255), Math.round(l(4) * 255)];
  return e.type === "hsla" && (s += "a", c.push(t[3])), rr({
    type: s,
    values: c
  });
}
function Hr(e) {
  e = Nt(e);
  let t = e.type === "hsl" || e.type === "hsla" ? Nt(ms(e)).values : e.values;
  return t = t.map((o) => (e.type !== "color" && (o /= 255), o <= 0.03928 ? o / 12.92 : ((o + 0.055) / 1.055) ** 2.4)), Number((0.2126 * t[0] + 0.7152 * t[1] + 0.0722 * t[2]).toFixed(3));
}
function oa(e, t) {
  const o = Hr(e), r = Hr(t);
  return (Math.max(o, r) + 0.05) / (Math.min(o, r) + 0.05);
}
function X(e, t) {
  return e = Nt(e), t = fi(t), (e.type === "rgb" || e.type === "hsl") && (e.type += "a"), e.type === "color" ? e.values[3] = `/${t}` : e.values[3] = t, rr(e);
}
function Cn(e, t, o) {
  try {
    return X(e, t);
  } catch {
    return e;
  }
}
function wo(e, t) {
  if (e = Nt(e), t = fi(t), e.type.includes("hsl"))
    e.values[2] *= 1 - t;
  else if (e.type.includes("rgb") || e.type.includes("color"))
    for (let o = 0; o < 3; o += 1)
      e.values[o] *= 1 - t;
  return rr(e);
}
function Se(e, t, o) {
  try {
    return wo(e, t);
  } catch {
    return e;
  }
}
function So(e, t) {
  if (e = Nt(e), t = fi(t), e.type.includes("hsl"))
    e.values[2] += (100 - e.values[2]) * t;
  else if (e.type.includes("rgb"))
    for (let o = 0; o < 3; o += 1)
      e.values[o] += (255 - e.values[o]) * t;
  else if (e.type.includes("color"))
    for (let o = 0; o < 3; o += 1)
      e.values[o] += (1 - e.values[o]) * t;
  return rr(e);
}
function Te(e, t, o) {
  try {
    return So(e, t);
  } catch {
    return e;
  }
}
function Pu(e, t = 0.15) {
  return Hr(e) > 0.5 ? wo(e, t) : So(e, t);
}
function xn(e, t, o) {
  try {
    return Pu(e, t);
  } catch {
    return e;
  }
}
function kt(e, t) {
  return process.env.NODE_ENV === "production" ? () => null : function(...r) {
    return e(...r) || t(...r);
  };
}
function Mu(e) {
  const {
    prototype: t = {}
  } = e;
  return !!t.isReactComponent;
}
function bs(e, t, o, r, i) {
  const a = e[t], l = i || t;
  if (a == null || // When server-side rendering React doesn't warn either.
  // This is not an accurate check for SSR.
  // This is only in place for Emotion compat.
  // TODO: Revisit once https://github.com/facebook/react/issues/20047 is resolved.
  typeof window > "u")
    return null;
  let s;
  const c = a.type;
  return typeof c == "function" && !Mu(c) && (s = "Did you accidentally use a plain function component for an element instead?"), s !== void 0 ? new Error(`Invalid ${r} \`${l}\` supplied to \`${o}\`. Expected an element that can hold a ref. ${s} For more information see https://mui.com/r/caveat-with-refs-guide`) : null;
}
const Zt = kt(n.element, bs);
Zt.isRequired = kt(n.element.isRequired, bs);
function Bu(e) {
  const {
    prototype: t = {}
  } = e;
  return !!t.isReactComponent;
}
function Iu(e, t, o, r, i) {
  const a = e[t], l = i || t;
  if (a == null || // When server-side rendering React doesn't warn either.
  // This is not an accurate check for SSR.
  // This is only in place for emotion compat.
  // TODO: Revisit once https://github.com/facebook/react/issues/20047 is resolved.
  typeof window > "u")
    return null;
  let s;
  return typeof a == "function" && !Bu(a) && (s = "Did you accidentally provide a plain function component instead?"), s !== void 0 ? new Error(`Invalid ${r} \`${l}\` supplied to \`${o}\`. Expected an element type that can hold a ref. ${s} For more information see https://mui.com/r/caveat-with-refs-guide`) : null;
}
const $n = kt(n.elementType, Iu), Du = "exact-prop: ​";
function gi(e) {
  return process.env.NODE_ENV === "production" ? e : {
    ...e,
    [Du]: (t) => {
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
const Ot = n.oneOfType([n.func, n.object]);
function Qr(...e) {
  return e.reduce((t, o) => o == null ? t : function(...i) {
    t.apply(this, i), o.apply(this, i);
  }, () => {
  });
}
function ir(e, t = 166) {
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
function Ar(e, t) {
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
function Ve(e) {
  return $e(e).defaultView || window;
}
function na(e, t) {
  typeof e == "function" ? e(t) : e && (e.current = t);
}
let ra = 0;
function Nu(e) {
  const [t, o] = g.useState(e), r = e || t;
  return g.useEffect(() => {
    t == null && (ra += 1, o(`mui-${ra}`));
  }, [t]), r;
}
const ju = {
  ...g
}, ia = ju.useId;
function fn(e) {
  if (ia !== void 0) {
    const t = ia();
    return e ?? t;
  }
  return Nu(e);
}
function ys(e, t, o, r, i) {
  if (process.env.NODE_ENV === "production")
    return null;
  const a = i || t;
  return typeof e[t] < "u" ? new Error(`The prop \`${a}\` is not supported. Please remove it.`) : null;
}
function hi({
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
      current: u
    } = g.useRef(t);
    g.useEffect(() => {
      !i && !Object.is(u, t) && console.error([`MUI: A component is changing the default ${r} state of an uncontrolled ${o} after being initialized. To suppress this warning opt to use a controlled ${o}.`].join(`
`));
    }, [JSON.stringify(t)]);
  }
  const c = g.useCallback((u) => {
    i || l(u);
  }, []);
  return [s, c];
}
function Ue(e) {
  const t = g.useRef(e);
  return gt(() => {
    t.current = e;
  }), g.useRef((...o) => (
    // @ts-expect-error hide `this`
    (0, t.current)(...o)
  )).current;
}
function je(...e) {
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
const aa = {};
function vs(e, t) {
  const o = g.useRef(aa);
  return o.current === aa && (o.current = e(t)), o;
}
const $u = [];
function Lu(e) {
  g.useEffect(e, $u);
}
class ar {
  constructor() {
    jo(this, "currentId", null);
    jo(this, "clear", () => {
      this.currentId !== null && (clearTimeout(this.currentId), this.currentId = null);
    });
    jo(this, "disposeEffect", () => this.clear);
  }
  static create() {
    return new ar();
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
function xo() {
  const e = vs(ar.create).current;
  return Lu(e.disposeEffect), e;
}
function Ln(e) {
  try {
    return e.matches(":focus-visible");
  } catch {
    process.env.NODE_ENV !== "production" && !/jsdom/.test(window.navigator.userAgent) && console.warn(["MUI: The `:focus-visible` pseudo class is not supported in this browser.", "Some components rely on this feature to work properly."].join(`
`));
  }
  return !1;
}
function Cs(e = window) {
  const t = e.document.documentElement.clientWidth;
  return e.innerWidth - t;
}
function zu(e) {
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
function xs(e, t, o, r) {
  const i = e[t];
  if (i == null || !Number.isInteger(i)) {
    const a = zu(i);
    return new RangeError(`Invalid ${r} \`${t}\` of type \`${a}\` supplied to \`${o}\`, expected \`integer\`.`);
  }
  return null;
}
function Es(e, t, ...o) {
  return e[t] === void 0 ? null : xs(e, t, ...o);
}
function Kr() {
  return null;
}
Es.isRequired = xs;
Kr.isRequired = Kr;
const mi = process.env.NODE_ENV === "production" ? Kr : Es;
function ge(e, t, o = void 0) {
  const r = {};
  for (const i in e) {
    const a = e[i];
    let l = "", s = !0;
    for (let c = 0; c < a.length; c += 1) {
      const u = a[c];
      u && (l += (s === !0 ? "" : " ") + t(u), s = !1, o && o[u] && (l += " " + o[u]));
    }
    r[i] = l;
  }
  return r;
}
function Vu(e) {
  return typeof e == "string";
}
function ws(e, t, o) {
  return e === void 0 || Vu(e) ? t : {
    ...t,
    ownerState: {
      ...t.ownerState,
      ...o
    }
  };
}
function Ss(e, t = []) {
  if (e === void 0)
    return {};
  const o = {};
  return Object.keys(e).filter((r) => r.match(/^on[A-Z]/) && typeof e[r] == "function" && !t.includes(r)).forEach((r) => {
    o[r] = e[r];
  }), o;
}
function sa(e) {
  if (e === void 0)
    return {};
  const t = {};
  return Object.keys(e).filter((o) => !(o.match(/^on[A-Z]/) && typeof e[o] == "function")).forEach((o) => {
    t[o] = e[o];
  }), t;
}
function Ts(e) {
  const {
    getSlotProps: t,
    additionalProps: o,
    externalSlotProps: r,
    externalForwardedProps: i,
    className: a
  } = e;
  if (!t) {
    const m = _(o == null ? void 0 : o.className, a, i == null ? void 0 : i.className, r == null ? void 0 : r.className), C = {
      ...o == null ? void 0 : o.style,
      ...i == null ? void 0 : i.style,
      ...r == null ? void 0 : r.style
    }, y = {
      ...o,
      ...i,
      ...r
    };
    return m.length > 0 && (y.className = m), Object.keys(C).length > 0 && (y.style = C), {
      props: y,
      internalRef: void 0
    };
  }
  const l = Ss({
    ...i,
    ...r
  }), s = sa(r), c = sa(i), u = t(l), d = _(u == null ? void 0 : u.className, o == null ? void 0 : o.className, a, i == null ? void 0 : i.className, r == null ? void 0 : r.className), f = {
    ...u == null ? void 0 : u.style,
    ...o == null ? void 0 : o.style,
    ...i == null ? void 0 : i.style,
    ...r == null ? void 0 : r.style
  }, h = {
    ...u,
    ...o,
    ...c,
    ...s
  };
  return d.length > 0 && (h.className = d), Object.keys(f).length > 0 && (h.style = f), {
    props: h,
    internalRef: u.ref
  };
}
function ks(e, t, o) {
  return typeof e == "function" ? e(t, o) : e;
}
function To(e) {
  var f;
  const {
    elementType: t,
    externalSlotProps: o,
    ownerState: r,
    skipResolvingSlotProps: i = !1,
    ...a
  } = e, l = i ? {} : ks(o, r), {
    props: s,
    internalRef: c
  } = Ts({
    ...a,
    externalSlotProps: l
  }), u = je(c, l == null ? void 0 : l.ref, (f = e.additionalProps) == null ? void 0 : f.ref);
  return ws(t, {
    ...s,
    ref: u
  }, r);
}
function Fo(e) {
  var t;
  return parseInt(g.version, 10) >= 19 ? ((t = e == null ? void 0 : e.props) == null ? void 0 : t.ref) || null : (e == null ? void 0 : e.ref) || null;
}
const Wu = /* @__PURE__ */ g.createContext();
process.env.NODE_ENV !== "production" && (n.node, n.bool);
const Po = () => g.useContext(Wu) ?? !1, Uu = /* @__PURE__ */ g.createContext(void 0);
process.env.NODE_ENV !== "production" && (n.node, n.object);
function Hu(e) {
  const {
    theme: t,
    name: o,
    props: r
  } = e;
  if (!t || !t.components || !t.components[o])
    return r;
  const i = t.components[o];
  return i.defaultProps ? en(i.defaultProps, r) : !i.styleOverrides && !i.variants ? en(i, r) : r;
}
function Qu({
  props: e,
  name: t
}) {
  const o = g.useContext(Uu);
  return Hu({
    props: e,
    name: t,
    theme: {
      components: o
    }
  });
}
const la = {
  theme: void 0
};
function Ku(e) {
  let t, o;
  return function(i) {
    let a = t;
    return (a === void 0 || i.theme !== o) && (la.theme = i.theme, a = fs(e(la)), t = a, o = i.theme), a;
  };
}
function Yu(e = "") {
  function t(...r) {
    if (!r.length)
      return "";
    const i = r[0];
    return typeof i == "string" && !i.match(/(#|\(|\)|(-?(\d*\.)?\d+)(px|em|%|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc))|^(-?(\d*\.)?\d+)$|(\d+ \d+ \d+)/) ? `, var(--${e ? `${e}-` : ""}${i}${t(...r.slice(1))})` : `, ${i}`;
  }
  return (r, ...i) => `var(--${e ? `${e}-` : ""}${r}${t(...i)})`;
}
const ca = (e, t, o, r = []) => {
  let i = e;
  t.forEach((a, l) => {
    l === t.length - 1 ? Array.isArray(i) ? i[Number(a)] = o : i && typeof i == "object" && (i[a] = o) : i && typeof i == "object" && (i[a] || (i[a] = r.includes(a) ? [] : {}), i = i[a]);
  });
}, Gu = (e, t, o) => {
  function r(i, a = [], l = []) {
    Object.entries(i).forEach(([s, c]) => {
      (!o || o && !o([...a, s])) && c != null && (typeof c == "object" && Object.keys(c).length > 0 ? r(c, [...a, s], Array.isArray(c) ? [...l, s] : l) : t([...a, s], c, l));
    });
  }
  r(e);
}, qu = (e, t) => typeof t == "number" ? ["lineHeight", "fontWeight", "opacity", "zIndex"].some((r) => e.includes(r)) || e[e.length - 1].toLowerCase().includes("opacity") ? t : `${t}px` : t;
function Rr(e, t) {
  const {
    prefix: o,
    shouldSkipGeneratingVar: r
  } = t || {}, i = {}, a = {}, l = {};
  return Gu(
    e,
    (s, c, u) => {
      if ((typeof c == "string" || typeof c == "number") && (!r || !r(s, c))) {
        const d = `--${o ? `${o}-` : ""}${s.join("-")}`, f = qu(s, c);
        Object.assign(i, {
          [d]: f
        }), ca(a, s, `var(${d})`, u), ca(l, s, `var(${d}, ${f})`, u);
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
function Xu(e, t = {}) {
  const {
    getSelector: o = x,
    disableCssColorScheme: r,
    colorSchemeSelector: i
  } = t, {
    colorSchemes: a = {},
    components: l,
    defaultColorScheme: s = "light",
    ...c
  } = e, {
    vars: u,
    css: d,
    varsWithDefaults: f
  } = Rr(c, t);
  let h = f;
  const m = {}, {
    [s]: C,
    ...y
  } = a;
  if (Object.entries(y || {}).forEach(([w, b]) => {
    const {
      vars: k,
      css: A,
      varsWithDefaults: M
    } = Rr(b, t);
    h = qe(h, M), m[w] = {
      css: A,
      vars: k
    };
  }), C) {
    const {
      css: w,
      vars: b,
      varsWithDefaults: k
    } = Rr(C, t);
    h = qe(h, k), m[s] = {
      css: w,
      vars: b
    };
  }
  function x(w, b) {
    var A, M;
    let k = i;
    if (i === "class" && (k = ".%s"), i === "data" && (k = "[data-%s]"), i != null && i.startsWith("data-") && !i.includes("%s") && (k = `[${i}="%s"]`), w) {
      if (k === "media")
        return e.defaultColorScheme === w ? ":root" : {
          [`@media (prefers-color-scheme: ${((M = (A = a[w]) == null ? void 0 : A.palette) == null ? void 0 : M.mode) || w})`]: {
            ":root": b
          }
        };
      if (k)
        return e.defaultColorScheme === w ? `:root, ${k.replace("%s", String(w))}` : k.replace("%s", String(w));
    }
    return ":root";
  }
  return {
    vars: h,
    generateThemeVars: () => {
      let w = {
        ...u
      };
      return Object.entries(m).forEach(([, {
        vars: b
      }]) => {
        w = qe(w, b);
      }), w;
    },
    generateStyleSheets: () => {
      var $, N;
      const w = [], b = e.defaultColorScheme || "light";
      function k(p, F) {
        Object.keys(F).length && w.push(typeof p == "string" ? {
          [p]: {
            ...F
          }
        } : p);
      }
      k(o(void 0, {
        ...d
      }), d);
      const {
        [b]: A,
        ...M
      } = m;
      if (A) {
        const {
          css: p
        } = A, F = (N = ($ = a[b]) == null ? void 0 : $.palette) == null ? void 0 : N.mode, B = !r && F ? {
          colorScheme: F,
          ...p
        } : {
          ...p
        };
        k(o(b, {
          ...B
        }), B);
      }
      return Object.entries(M).forEach(([p, {
        css: F
      }]) => {
        var I, j;
        const B = (j = (I = a[p]) == null ? void 0 : I.palette) == null ? void 0 : j.mode, O = !r && B ? {
          colorScheme: B,
          ...F
        } : {
          ...F
        };
        k(o(p, {
          ...O
        }), O);
      }), w;
    }
  };
}
function Ju(e) {
  return function(o) {
    return e === "media" ? (process.env.NODE_ENV !== "production" && o !== "light" && o !== "dark" && console.error(`MUI: @media (prefers-color-scheme) supports only 'light' or 'dark', but receive '${o}'.`), `@media (prefers-color-scheme: ${o})`) : e ? e.startsWith("data-") && !e.includes("%s") ? `[${e}="${o}"] &` : e === "class" ? `.${o} &` : e === "data" ? `[data-${o}] &` : `${e.replace("%s", o)} &` : "&";
  };
}
const tn = {
  black: "#000",
  white: "#fff"
}, Zu = {
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
}, go = {
  50: "#f3e5f5",
  200: "#ce93d8",
  300: "#ba68c8",
  400: "#ab47bc",
  500: "#9c27b0",
  700: "#7b1fa2"
}, ho = {
  300: "#e57373",
  400: "#ef5350",
  500: "#f44336",
  700: "#d32f2f",
  800: "#c62828"
}, $o = {
  300: "#ffb74d",
  400: "#ffa726",
  500: "#ff9800",
  700: "#f57c00",
  900: "#e65100"
}, mo = {
  50: "#e3f2fd",
  200: "#90caf9",
  400: "#42a5f5",
  700: "#1976d2",
  800: "#1565c0"
}, bo = {
  300: "#4fc3f7",
  400: "#29b6f6",
  500: "#03a9f4",
  700: "#0288d1",
  900: "#01579b"
}, yo = {
  300: "#81c784",
  400: "#66bb6a",
  500: "#4caf50",
  700: "#388e3c",
  800: "#2e7d32",
  900: "#1b5e20"
};
function Os() {
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
      paper: tn.white,
      default: tn.white
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
const _u = Os();
function As() {
  return {
    text: {
      primary: tn.white,
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
      active: tn.white,
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
const ua = As();
function pa(e, t, o, r) {
  const i = r.light || r, a = r.dark || r * 1.5;
  e[t] || (e.hasOwnProperty(o) ? e[t] = e[o] : t === "light" ? e.light = So(e.main, i) : t === "dark" && (e.dark = wo(e.main, a)));
}
function ep(e = "light") {
  return e === "dark" ? {
    main: mo[200],
    light: mo[50],
    dark: mo[400]
  } : {
    main: mo[700],
    light: mo[400],
    dark: mo[800]
  };
}
function tp(e = "light") {
  return e === "dark" ? {
    main: go[200],
    light: go[50],
    dark: go[400]
  } : {
    main: go[500],
    light: go[300],
    dark: go[700]
  };
}
function op(e = "light") {
  return e === "dark" ? {
    main: ho[500],
    light: ho[300],
    dark: ho[700]
  } : {
    main: ho[700],
    light: ho[400],
    dark: ho[800]
  };
}
function np(e = "light") {
  return e === "dark" ? {
    main: bo[400],
    light: bo[300],
    dark: bo[700]
  } : {
    main: bo[700],
    light: bo[500],
    dark: bo[900]
  };
}
function rp(e = "light") {
  return e === "dark" ? {
    main: yo[400],
    light: yo[300],
    dark: yo[700]
  } : {
    main: yo[800],
    light: yo[500],
    dark: yo[900]
  };
}
function ip(e = "light") {
  return e === "dark" ? {
    main: $o[400],
    light: $o[300],
    dark: $o[700]
  } : {
    main: "#ed6c02",
    // closest to orange[800] that pass 3:1.
    light: $o[500],
    dark: $o[900]
  };
}
function bi(e) {
  const {
    mode: t = "light",
    contrastThreshold: o = 3,
    tonalOffset: r = 0.2,
    ...i
  } = e, a = e.primary || ep(t), l = e.secondary || tp(t), s = e.error || op(t), c = e.info || np(t), u = e.success || rp(t), d = e.warning || ip(t);
  function f(y) {
    const x = oa(y, ua.text.primary) >= o ? ua.text.primary : _u.text.primary;
    if (process.env.NODE_ENV !== "production") {
      const E = oa(y, x);
      E < 3 && console.error([`MUI: The contrast ratio of ${E}:1 for ${x} on ${y}`, "falls below the WCAG recommended absolute minimum contrast ratio of 3:1.", "https://www.w3.org/TR/2008/REC-WCAG20-20081211/#visual-audio-contrast-contrast"].join(`
`));
    }
    return x;
  }
  const h = ({
    color: y,
    name: x,
    mainShade: E = 500,
    lightShade: T = 300,
    darkShade: w = 700
  }) => {
    if (y = {
      ...y
    }, !y.main && y[E] && (y.main = y[E]), !y.hasOwnProperty("main"))
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The color${x ? ` (${x})` : ""} provided to augmentColor(color) is invalid.
The color object needs to have a \`main\` property or a \`${E}\` property.` : Dt(11, x ? ` (${x})` : "", E));
    if (typeof y.main != "string")
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The color${x ? ` (${x})` : ""} provided to augmentColor(color) is invalid.
\`color.main\` should be a string, but \`${JSON.stringify(y.main)}\` was provided instead.

Did you intend to use one of the following approaches?

import { green } from "@mui/material/colors";

const theme1 = createTheme({ palette: {
  primary: green,
} });

const theme2 = createTheme({ palette: {
  primary: { main: green[500] },
} });` : Dt(12, x ? ` (${x})` : "", JSON.stringify(y.main)));
    return pa(y, "light", T, r), pa(y, "dark", w, r), y.contrastText || (y.contrastText = f(y.main)), y;
  };
  let m;
  return t === "light" ? m = Os() : t === "dark" && (m = As()), process.env.NODE_ENV !== "production" && (m || console.error(`MUI: The palette mode \`${t}\` is not supported.`)), qe({
    // A collection of common colors.
    common: {
      ...tn
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
      color: u,
      name: "success"
    }),
    // The grey colors.
    grey: Zu,
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
    ...m
  }, i);
}
function ap(e) {
  const t = {};
  return Object.entries(e).forEach((r) => {
    const [i, a] = r;
    typeof a == "object" && (t[i] = `${a.fontStyle ? `${a.fontStyle} ` : ""}${a.fontVariant ? `${a.fontVariant} ` : ""}${a.fontWeight ? `${a.fontWeight} ` : ""}${a.fontStretch ? `${a.fontStretch} ` : ""}${a.fontSize || ""}${a.lineHeight ? `/${a.lineHeight} ` : ""}${a.fontFamily || ""}`);
  }), t;
}
function sp(e, t) {
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
function lp(e) {
  return Math.round(e * 1e5) / 1e5;
}
const da = {
  textTransform: "uppercase"
}, fa = '"Roboto", "Helvetica", "Arial", sans-serif';
function cp(e, t) {
  const {
    fontFamily: o = fa,
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
    allVariants: u,
    pxToRem: d,
    ...f
  } = typeof t == "function" ? t(e) : t;
  process.env.NODE_ENV !== "production" && (typeof r != "number" && console.error("MUI: `fontSize` is required to be a number."), typeof c != "number" && console.error("MUI: `htmlFontSize` is required to be a number."));
  const h = r / 14, m = d || ((x) => `${x / c * h}rem`), C = (x, E, T, w, b) => ({
    fontFamily: o,
    fontWeight: x,
    fontSize: m(E),
    // Unitless following https://meyerweb.com/eric/thoughts/2006/02/08/unitless-line-heights/
    lineHeight: T,
    // The letter spacing was designed for the Roboto font-family. Using the same letter-spacing
    // across font-families can cause issues with the kerning.
    ...o === fa ? {
      letterSpacing: `${lp(w / E)}em`
    } : {},
    ...b,
    ...u
  }), y = {
    h1: C(i, 96, 1.167, -1.5),
    h2: C(i, 60, 1.2, -0.5),
    h3: C(a, 48, 1.167, 0),
    h4: C(a, 34, 1.235, 0.25),
    h5: C(a, 24, 1.334, 0),
    h6: C(l, 20, 1.6, 0.15),
    subtitle1: C(a, 16, 1.75, 0.15),
    subtitle2: C(l, 14, 1.57, 0.1),
    body1: C(a, 16, 1.5, 0.15),
    body2: C(a, 14, 1.43, 0.15),
    button: C(l, 14, 1.75, 0.4, da),
    caption: C(a, 12, 1.66, 0.4),
    overline: C(a, 12, 2.66, 1, da),
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
    pxToRem: m,
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
const up = 0.2, pp = 0.14, dp = 0.12;
function Oe(...e) {
  return [`${e[0]}px ${e[1]}px ${e[2]}px ${e[3]}px rgba(0,0,0,${up})`, `${e[4]}px ${e[5]}px ${e[6]}px ${e[7]}px rgba(0,0,0,${pp})`, `${e[8]}px ${e[9]}px ${e[10]}px ${e[11]}px rgba(0,0,0,${dp})`].join(",");
}
const fp = ["none", Oe(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0), Oe(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0), Oe(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0), Oe(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0), Oe(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0), Oe(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0), Oe(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1), Oe(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2), Oe(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2), Oe(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3), Oe(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3), Oe(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4), Oe(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4), Oe(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4), Oe(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5), Oe(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5), Oe(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5), Oe(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6), Oe(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6), Oe(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7), Oe(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7), Oe(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7), Oe(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8), Oe(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8)], gp = {
  // This is the most common easing curve.
  easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
  // Objects enter the screen at full velocity from off-screen and
  // slowly decelerate to a resting point.
  easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
  // Objects leave the screen at full velocity. They do not decelerate when off-screen.
  easeIn: "cubic-bezier(0.4, 0, 1, 1)",
  // The sharp curve is used by objects that may return to the screen at any time.
  sharp: "cubic-bezier(0.4, 0, 0.6, 1)"
}, hp = {
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
function ga(e) {
  return `${Math.round(e)}ms`;
}
function mp(e) {
  if (!e)
    return 0;
  const t = e / 36;
  return Math.min(Math.round((4 + 15 * t ** 0.25 + t / 5) * 10), 3e3);
}
function bp(e) {
  const t = {
    ...gp,
    ...e.easing
  }, o = {
    ...hp,
    ...e.duration
  };
  return {
    getAutoHeightDuration: mp,
    create: (i = ["all"], a = {}) => {
      const {
        duration: l = o.standard,
        easing: s = t.easeInOut,
        delay: c = 0,
        ...u
      } = a;
      if (process.env.NODE_ENV !== "production") {
        const d = (h) => typeof h == "string", f = (h) => !Number.isNaN(parseFloat(h));
        !d(i) && !Array.isArray(i) && console.error('MUI: Argument "props" must be a string or Array.'), !f(l) && !d(l) && console.error(`MUI: Argument "duration" must be a number or a string but found ${l}.`), d(s) || console.error('MUI: Argument "easing" must be a string.'), !f(c) && !d(c) && console.error('MUI: Argument "delay" must be a number or a string.'), typeof a != "object" && console.error(["MUI: Secong argument of transition.create must be an object.", "Arguments should be either `create('prop1', options)` or `create(['prop1', 'prop2'], options)`"].join(`
`)), Object.keys(u).length !== 0 && console.error(`MUI: Unrecognized argument(s) [${Object.keys(u).join(",")}].`);
      }
      return (Array.isArray(i) ? i : [i]).map((d) => `${d} ${typeof l == "string" ? l : ga(l)} ${s} ${typeof c == "string" ? c : ga(c)}`).join(",");
    },
    ...e,
    easing: t,
    duration: o
  };
}
const yp = {
  mobileStepper: 1e3,
  fab: 1050,
  speedDial: 1050,
  appBar: 1100,
  drawer: 1200,
  modal: 1300,
  snackbar: 1400,
  tooltip: 1500
};
function vp(e) {
  return dt(e) || typeof e > "u" || typeof e == "string" || typeof e == "boolean" || typeof e == "number" || Array.isArray(e);
}
function Rs(e = {}) {
  const t = {
    ...e
  };
  function o(r) {
    const i = Object.entries(r);
    for (let a = 0; a < i.length; a++) {
      const [l, s] = i[a];
      !vp(s) || l.startsWith("unstable_") ? delete r[l] : dt(s) && (r[l] = {
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
function Yr(e = {}, ...t) {
  const {
    breakpoints: o,
    mixins: r = {},
    spacing: i,
    palette: a = {},
    transitions: l = {},
    typography: s = {},
    shape: c,
    ...u
  } = e;
  if (e.vars && // The error should throw only for the root theme creation because user is not allowed to use a custom node `vars`.
  // `generateThemeVars` is the closest identifier for checking that the `options` is a result of `createTheme` with CSS variables so that user can create new theme for nested ThemeProvider.
  e.generateThemeVars === void 0)
    throw new Error(process.env.NODE_ENV !== "production" ? "MUI: `vars` is a private field used for CSS variables support.\nPlease use another name or follow the [docs](https://mui.com/material-ui/customization/css-theme-variables/usage/) to enable the feature." : Dt(20));
  const d = bi(a), f = di(e);
  let h = qe(f, {
    mixins: sp(f.breakpoints, r),
    palette: d,
    // Don't use [...shadows] until you've verified its transpiled code is not invoking the iterator protocol.
    shadows: fp.slice(),
    typography: cp(d, s),
    transitions: bp(l),
    zIndex: {
      ...yp
    }
  });
  if (h = qe(h, u), h = t.reduce((m, C) => qe(m, C), h), process.env.NODE_ENV !== "production") {
    const m = ["active", "checked", "completed", "disabled", "error", "expanded", "focused", "focusVisible", "required", "selected"], C = (y, x) => {
      let E;
      for (E in y) {
        const T = y[E];
        if (m.includes(E) && Object.keys(T).length > 0) {
          if (process.env.NODE_ENV !== "production") {
            const w = de("", E);
            console.error([`MUI: The \`${x}\` component increases the CSS specificity of the \`${E}\` internal state.`, "You can not override it like this: ", JSON.stringify(y, null, 2), "", `Instead, you need to use the '&.${w}' syntax:`, JSON.stringify({
              root: {
                [`&.${w}`]: T
              }
            }, null, 2), "", "https://mui.com/r/state-classes-guide"].join(`
`));
          }
          y[E] = {};
        }
      }
    };
    Object.keys(h.components).forEach((y) => {
      const x = h.components[y].styleOverrides;
      x && y.startsWith("Mui") && C(x, y);
    });
  }
  return h.unstable_sxConfig = {
    ...dn,
    ...u == null ? void 0 : u.unstable_sxConfig
  }, h.unstable_sx = function(C) {
    return Gt({
      sx: C,
      theme: this
    });
  }, h.toRuntimeSource = Rs, h;
}
function Gr(e) {
  let t;
  return e < 1 ? t = 5.11916 * e ** 2 : t = 4.5 * Math.log(e + 1) + 2, Math.round(t * 10) / 1e3;
}
const Cp = [...Array(25)].map((e, t) => {
  if (t === 0)
    return "none";
  const o = Gr(t);
  return `linear-gradient(rgba(255 255 255 / ${o}), rgba(255 255 255 / ${o}))`;
});
function Fs(e) {
  return {
    inputPlaceholder: e === "dark" ? 0.5 : 0.42,
    inputUnderline: e === "dark" ? 0.7 : 0.42,
    switchTrackDisabled: e === "dark" ? 0.2 : 0.12,
    switchTrack: e === "dark" ? 0.3 : 0.38
  };
}
function Ps(e) {
  return e === "dark" ? Cp : [];
}
function xp(e) {
  const {
    palette: t = {
      mode: "light"
    },
    // need to cast to avoid module augmentation test
    opacity: o,
    overlays: r,
    ...i
  } = e, a = bi(t);
  return {
    palette: a,
    opacity: {
      ...Fs(a.mode),
      ...o
    },
    overlays: r || Ps(a.mode),
    ...i
  };
}
function Ep(e) {
  var t;
  return !!e[0].match(/(cssVarPrefix|colorSchemeSelector|rootSelector|typography|mixins|breakpoints|direction|transitions)/) || !!e[0].match(/sxConfig$/) || // ends with sxConfig
  e[0] === "palette" && !!((t = e[1]) != null && t.match(/(mode|contrastThreshold|tonalOffset)/));
}
const wp = (e) => [...[...Array(25)].map((t, o) => `--${e ? `${e}-` : ""}overlays-${o}`), `--${e ? `${e}-` : ""}palette-AppBar-darkBg`, `--${e ? `${e}-` : ""}palette-AppBar-darkColor`], Sp = (e) => (t, o) => {
  const r = e.rootSelector || ":root", i = e.colorSchemeSelector;
  let a = i;
  if (i === "class" && (a = ".%s"), i === "data" && (a = "[data-%s]"), i != null && i.startsWith("data-") && !i.includes("%s") && (a = `[${i}="%s"]`), e.defaultColorScheme === t) {
    if (t === "dark") {
      const l = {};
      return wp(e.cssVarPrefix).forEach((s) => {
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
function Tp(e, t) {
  t.forEach((o) => {
    e[o] || (e[o] = {});
  });
}
function D(e, t, o) {
  !e[t] && o && (e[t] = o);
}
function Qo(e) {
  return typeof e != "string" || !e.startsWith("hsl") ? e : ms(e);
}
function xt(e, t) {
  `${t}Channel` in e || (e[`${t}Channel`] = Ho(Qo(e[t]), `MUI: Can't create \`palette.${t}Channel\` because \`palette.${t}\` is not one of these formats: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color().
To suppress this warning, you need to explicitly provide the \`palette.${t}Channel\` as a string (in rgb format, for example "12 12 12") or undefined if you want to remove the channel token.`));
}
function kp(e) {
  return typeof e == "number" ? `${e}px` : typeof e == "string" || typeof e == "function" || Array.isArray(e) ? e : "8px";
}
const pt = (e) => {
  try {
    return e();
  } catch {
  }
}, Op = (e = "mui") => Yu(e);
function Fr(e, t, o, r) {
  if (!t)
    return;
  t = t === !0 ? {} : t;
  const i = r === "dark" ? "dark" : "light";
  if (!o) {
    e[r] = xp({
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
  } = Yr({
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
      ...Fs(i),
      ...t == null ? void 0 : t.opacity
    },
    overlays: (t == null ? void 0 : t.overlays) || Ps(i)
  }, l;
}
function Ap(e = {}, ...t) {
  const {
    colorSchemes: o = {
      light: !0
    },
    defaultColorScheme: r,
    disableCssColorScheme: i = !1,
    cssVarPrefix: a = "mui",
    shouldSkipGeneratingVar: l = Ep,
    colorSchemeSelector: s = o.light && o.dark ? "media" : void 0,
    rootSelector: c = ":root",
    ...u
  } = e, d = Object.keys(o)[0], f = r || (o.light && d !== "light" ? "light" : d), h = Op(a), {
    [f]: m,
    light: C,
    dark: y,
    ...x
  } = o, E = {
    ...x
  };
  let T = m;
  if ((f === "dark" && !("dark" in o) || f === "light" && !("light" in o)) && (T = !0), !T)
    throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The \`colorSchemes.${f}\` option is either missing or invalid.` : Dt(21, f));
  const w = Fr(E, T, u, f);
  C && !E.light && Fr(E, C, void 0, "light"), y && !E.dark && Fr(E, y, void 0, "dark");
  let b = {
    defaultColorScheme: f,
    ...w,
    cssVarPrefix: a,
    colorSchemeSelector: s,
    rootSelector: c,
    getCssVar: h,
    colorSchemes: E,
    font: {
      ...ap(w.typography),
      ...w.font
    },
    spacing: kp(u.spacing)
  };
  Object.keys(b.colorSchemes).forEach((N) => {
    const p = b.colorSchemes[N].palette, F = (B) => {
      const O = B.split("-"), I = O[1], j = O[2];
      return h(B, p[I][j]);
    };
    if (p.mode === "light" && (D(p.common, "background", "#fff"), D(p.common, "onBackground", "#000")), p.mode === "dark" && (D(p.common, "background", "#000"), D(p.common, "onBackground", "#fff")), Tp(p, ["Alert", "AppBar", "Avatar", "Button", "Chip", "FilledInput", "LinearProgress", "Skeleton", "Slider", "SnackbarContent", "SpeedDialAction", "StepConnector", "StepContent", "Switch", "TableCell", "Tooltip"]), p.mode === "light") {
      D(p.Alert, "errorColor", Se(p.error.light, 0.6)), D(p.Alert, "infoColor", Se(p.info.light, 0.6)), D(p.Alert, "successColor", Se(p.success.light, 0.6)), D(p.Alert, "warningColor", Se(p.warning.light, 0.6)), D(p.Alert, "errorFilledBg", F("palette-error-main")), D(p.Alert, "infoFilledBg", F("palette-info-main")), D(p.Alert, "successFilledBg", F("palette-success-main")), D(p.Alert, "warningFilledBg", F("palette-warning-main")), D(p.Alert, "errorFilledColor", pt(() => p.getContrastText(p.error.main))), D(p.Alert, "infoFilledColor", pt(() => p.getContrastText(p.info.main))), D(p.Alert, "successFilledColor", pt(() => p.getContrastText(p.success.main))), D(p.Alert, "warningFilledColor", pt(() => p.getContrastText(p.warning.main))), D(p.Alert, "errorStandardBg", Te(p.error.light, 0.9)), D(p.Alert, "infoStandardBg", Te(p.info.light, 0.9)), D(p.Alert, "successStandardBg", Te(p.success.light, 0.9)), D(p.Alert, "warningStandardBg", Te(p.warning.light, 0.9)), D(p.Alert, "errorIconColor", F("palette-error-main")), D(p.Alert, "infoIconColor", F("palette-info-main")), D(p.Alert, "successIconColor", F("palette-success-main")), D(p.Alert, "warningIconColor", F("palette-warning-main")), D(p.AppBar, "defaultBg", F("palette-grey-100")), D(p.Avatar, "defaultBg", F("palette-grey-400")), D(p.Button, "inheritContainedBg", F("palette-grey-300")), D(p.Button, "inheritContainedHoverBg", F("palette-grey-A100")), D(p.Chip, "defaultBorder", F("palette-grey-400")), D(p.Chip, "defaultAvatarColor", F("palette-grey-700")), D(p.Chip, "defaultIconColor", F("palette-grey-700")), D(p.FilledInput, "bg", "rgba(0, 0, 0, 0.06)"), D(p.FilledInput, "hoverBg", "rgba(0, 0, 0, 0.09)"), D(p.FilledInput, "disabledBg", "rgba(0, 0, 0, 0.12)"), D(p.LinearProgress, "primaryBg", Te(p.primary.main, 0.62)), D(p.LinearProgress, "secondaryBg", Te(p.secondary.main, 0.62)), D(p.LinearProgress, "errorBg", Te(p.error.main, 0.62)), D(p.LinearProgress, "infoBg", Te(p.info.main, 0.62)), D(p.LinearProgress, "successBg", Te(p.success.main, 0.62)), D(p.LinearProgress, "warningBg", Te(p.warning.main, 0.62)), D(p.Skeleton, "bg", `rgba(${F("palette-text-primaryChannel")} / 0.11)`), D(p.Slider, "primaryTrack", Te(p.primary.main, 0.62)), D(p.Slider, "secondaryTrack", Te(p.secondary.main, 0.62)), D(p.Slider, "errorTrack", Te(p.error.main, 0.62)), D(p.Slider, "infoTrack", Te(p.info.main, 0.62)), D(p.Slider, "successTrack", Te(p.success.main, 0.62)), D(p.Slider, "warningTrack", Te(p.warning.main, 0.62));
      const B = xn(p.background.default, 0.8);
      D(p.SnackbarContent, "bg", B), D(p.SnackbarContent, "color", pt(() => p.getContrastText(B))), D(p.SpeedDialAction, "fabHoverBg", xn(p.background.paper, 0.15)), D(p.StepConnector, "border", F("palette-grey-400")), D(p.StepContent, "border", F("palette-grey-400")), D(p.Switch, "defaultColor", F("palette-common-white")), D(p.Switch, "defaultDisabledColor", F("palette-grey-100")), D(p.Switch, "primaryDisabledColor", Te(p.primary.main, 0.62)), D(p.Switch, "secondaryDisabledColor", Te(p.secondary.main, 0.62)), D(p.Switch, "errorDisabledColor", Te(p.error.main, 0.62)), D(p.Switch, "infoDisabledColor", Te(p.info.main, 0.62)), D(p.Switch, "successDisabledColor", Te(p.success.main, 0.62)), D(p.Switch, "warningDisabledColor", Te(p.warning.main, 0.62)), D(p.TableCell, "border", Te(Cn(p.divider, 1), 0.88)), D(p.Tooltip, "bg", Cn(p.grey[700], 0.92));
    }
    if (p.mode === "dark") {
      D(p.Alert, "errorColor", Te(p.error.light, 0.6)), D(p.Alert, "infoColor", Te(p.info.light, 0.6)), D(p.Alert, "successColor", Te(p.success.light, 0.6)), D(p.Alert, "warningColor", Te(p.warning.light, 0.6)), D(p.Alert, "errorFilledBg", F("palette-error-dark")), D(p.Alert, "infoFilledBg", F("palette-info-dark")), D(p.Alert, "successFilledBg", F("palette-success-dark")), D(p.Alert, "warningFilledBg", F("palette-warning-dark")), D(p.Alert, "errorFilledColor", pt(() => p.getContrastText(p.error.dark))), D(p.Alert, "infoFilledColor", pt(() => p.getContrastText(p.info.dark))), D(p.Alert, "successFilledColor", pt(() => p.getContrastText(p.success.dark))), D(p.Alert, "warningFilledColor", pt(() => p.getContrastText(p.warning.dark))), D(p.Alert, "errorStandardBg", Se(p.error.light, 0.9)), D(p.Alert, "infoStandardBg", Se(p.info.light, 0.9)), D(p.Alert, "successStandardBg", Se(p.success.light, 0.9)), D(p.Alert, "warningStandardBg", Se(p.warning.light, 0.9)), D(p.Alert, "errorIconColor", F("palette-error-main")), D(p.Alert, "infoIconColor", F("palette-info-main")), D(p.Alert, "successIconColor", F("palette-success-main")), D(p.Alert, "warningIconColor", F("palette-warning-main")), D(p.AppBar, "defaultBg", F("palette-grey-900")), D(p.AppBar, "darkBg", F("palette-background-paper")), D(p.AppBar, "darkColor", F("palette-text-primary")), D(p.Avatar, "defaultBg", F("palette-grey-600")), D(p.Button, "inheritContainedBg", F("palette-grey-800")), D(p.Button, "inheritContainedHoverBg", F("palette-grey-700")), D(p.Chip, "defaultBorder", F("palette-grey-700")), D(p.Chip, "defaultAvatarColor", F("palette-grey-300")), D(p.Chip, "defaultIconColor", F("palette-grey-300")), D(p.FilledInput, "bg", "rgba(255, 255, 255, 0.09)"), D(p.FilledInput, "hoverBg", "rgba(255, 255, 255, 0.13)"), D(p.FilledInput, "disabledBg", "rgba(255, 255, 255, 0.12)"), D(p.LinearProgress, "primaryBg", Se(p.primary.main, 0.5)), D(p.LinearProgress, "secondaryBg", Se(p.secondary.main, 0.5)), D(p.LinearProgress, "errorBg", Se(p.error.main, 0.5)), D(p.LinearProgress, "infoBg", Se(p.info.main, 0.5)), D(p.LinearProgress, "successBg", Se(p.success.main, 0.5)), D(p.LinearProgress, "warningBg", Se(p.warning.main, 0.5)), D(p.Skeleton, "bg", `rgba(${F("palette-text-primaryChannel")} / 0.13)`), D(p.Slider, "primaryTrack", Se(p.primary.main, 0.5)), D(p.Slider, "secondaryTrack", Se(p.secondary.main, 0.5)), D(p.Slider, "errorTrack", Se(p.error.main, 0.5)), D(p.Slider, "infoTrack", Se(p.info.main, 0.5)), D(p.Slider, "successTrack", Se(p.success.main, 0.5)), D(p.Slider, "warningTrack", Se(p.warning.main, 0.5));
      const B = xn(p.background.default, 0.98);
      D(p.SnackbarContent, "bg", B), D(p.SnackbarContent, "color", pt(() => p.getContrastText(B))), D(p.SpeedDialAction, "fabHoverBg", xn(p.background.paper, 0.15)), D(p.StepConnector, "border", F("palette-grey-600")), D(p.StepContent, "border", F("palette-grey-600")), D(p.Switch, "defaultColor", F("palette-grey-300")), D(p.Switch, "defaultDisabledColor", F("palette-grey-600")), D(p.Switch, "primaryDisabledColor", Se(p.primary.main, 0.55)), D(p.Switch, "secondaryDisabledColor", Se(p.secondary.main, 0.55)), D(p.Switch, "errorDisabledColor", Se(p.error.main, 0.55)), D(p.Switch, "infoDisabledColor", Se(p.info.main, 0.55)), D(p.Switch, "successDisabledColor", Se(p.success.main, 0.55)), D(p.Switch, "warningDisabledColor", Se(p.warning.main, 0.55)), D(p.TableCell, "border", Se(Cn(p.divider, 1), 0.68)), D(p.Tooltip, "bg", Cn(p.grey[700], 0.92));
    }
    xt(p.background, "default"), xt(p.background, "paper"), xt(p.common, "background"), xt(p.common, "onBackground"), xt(p, "divider"), Object.keys(p).forEach((B) => {
      const O = p[B];
      B !== "tonalOffset" && O && typeof O == "object" && (O.main && D(p[B], "mainChannel", Ho(Qo(O.main))), O.light && D(p[B], "lightChannel", Ho(Qo(O.light))), O.dark && D(p[B], "darkChannel", Ho(Qo(O.dark))), O.contrastText && D(p[B], "contrastTextChannel", Ho(Qo(O.contrastText))), B === "text" && (xt(p[B], "primary"), xt(p[B], "secondary")), B === "action" && (O.active && xt(p[B], "active"), O.selected && xt(p[B], "selected")));
    });
  }), b = t.reduce((N, p) => qe(N, p), b);
  const k = {
    prefix: a,
    disableCssColorScheme: i,
    shouldSkipGeneratingVar: l,
    getSelector: Sp(b)
  }, {
    vars: A,
    generateThemeVars: M,
    generateStyleSheets: $
  } = Xu(b, k);
  return b.vars = A, Object.entries(b.colorSchemes[b.defaultColorScheme]).forEach(([N, p]) => {
    b[N] = p;
  }), b.generateThemeVars = M, b.generateStyleSheets = $, b.generateSpacing = function() {
    return ss(u.spacing, ui(this));
  }, b.getColorSchemeSelector = Ju(s), b.spacing = b.generateSpacing(), b.shouldSkipGeneratingVar = l, b.unstable_sxConfig = {
    ...dn,
    ...u == null ? void 0 : u.unstable_sxConfig
  }, b.unstable_sx = function(p) {
    return Gt({
      sx: p,
      theme: this
    });
  }, b.toRuntimeSource = Rs, b;
}
function ha(e, t, o) {
  e.colorSchemes && o && (e.colorSchemes[t] = {
    ...o !== !0 && o,
    palette: bi({
      ...o === !0 ? {} : o.palette,
      mode: t
    })
    // cast type to skip module augmentation test
  });
}
function sr(e = {}, ...t) {
  const {
    palette: o,
    cssVariables: r = !1,
    colorSchemes: i = o ? void 0 : {
      light: !0
    },
    defaultColorScheme: a = o == null ? void 0 : o.mode,
    ...l
  } = e, s = a || "light", c = i == null ? void 0 : i[s], u = {
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
      return Yr(e, ...t);
    let d = o;
    "palette" in e || u[s] && (u[s] !== !0 ? d = u[s].palette : s === "dark" && (d = {
      mode: "dark"
    }));
    const f = Yr({
      ...e,
      palette: d
    }, ...t);
    return f.defaultColorScheme = s, f.colorSchemes = u, f.palette.mode === "light" && (f.colorSchemes.light = {
      ...u.light !== !0 && u.light,
      palette: f.palette
    }, ha(f, "dark", u.dark)), f.palette.mode === "dark" && (f.colorSchemes.dark = {
      ...u.dark !== !0 && u.dark,
      palette: f.palette
    }, ha(f, "light", u.light)), f;
  }
  return !o && !("light" in u) && s === "light" && (u.light = !0), Ap({
    ...l,
    colorSchemes: u,
    defaultColorScheme: s,
    ...typeof r != "boolean" && r
  }, ...t);
}
const Ms = sr();
function rt() {
  const e = ls(Ms);
  return process.env.NODE_ENV !== "production" && g.useDebugValue(e), e[li] || e;
}
function Rp(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
const it = (e) => Rp(e) && e !== "classes", Q = wu({
  themeId: li,
  defaultTheme: Ms,
  rootShouldForwardProp: it
}), Me = {
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
}, En = {
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
}, at = ["#373737"], cy = sr({
  palette: {
    primary: Me.primary,
    secondary: Me.secondary,
    tertiary: Me.tertiary,
    surface: Me.surface
  }
});
sr({
  palette: {
    primary: En.primary,
    secondary: En.secondary,
    tertiary: En.tertiary,
    surface: En.surface
  }
});
function Fp() {
  return cs;
}
const fe = Ku;
process.env.NODE_ENV !== "production" && (n.node, n.object.isRequired);
function he(e) {
  return Qu(e);
}
function le(e, t) {
  const {
    className: o,
    elementType: r,
    ownerState: i,
    externalForwardedProps: a,
    internalForwardedProps: l,
    shouldForwardComponentProp: s = !1,
    ...c
  } = t, {
    component: u,
    slots: d = {
      [e]: void 0
    },
    slotProps: f = {
      [e]: void 0
    },
    ...h
  } = a, m = d[e] || r, C = ks(f[e], i), {
    props: {
      component: y,
      ...x
    },
    internalRef: E
  } = Ts({
    className: o,
    ...c,
    externalForwardedProps: e === "root" ? h : void 0,
    externalSlotProps: C
  }), T = je(E, C == null ? void 0 : C.ref, t.ref), w = e === "root" ? y || u : y, b = ws(m, {
    ...e === "root" && !u && !d[e] && l,
    ...e !== "root" && !d[e] && l,
    ...x,
    ...w && !s && {
      as: w
    },
    ...w && s && {
      component: w
    },
    ref: T
  }, i);
  return [m, b];
}
function Pp(e) {
  return typeof e.main == "string";
}
function Mp(e, t = []) {
  if (!Pp(e))
    return !1;
  for (const o of t)
    if (!e.hasOwnProperty(o) || typeof e[o] != "string")
      return !1;
  return !0;
}
function De(e = []) {
  return ([, t]) => t && Mp(t, e);
}
function Bp(e) {
  return de("MuiPaper", e);
}
ce("MuiPaper", ["root", "rounded", "outlined", "elevation", "elevation0", "elevation1", "elevation2", "elevation3", "elevation4", "elevation5", "elevation6", "elevation7", "elevation8", "elevation9", "elevation10", "elevation11", "elevation12", "elevation13", "elevation14", "elevation15", "elevation16", "elevation17", "elevation18", "elevation19", "elevation20", "elevation21", "elevation22", "elevation23", "elevation24"]);
const Ip = (e) => {
  const {
    square: t,
    elevation: o,
    variant: r,
    classes: i
  } = e, a = {
    root: ["root", r, !t && "rounded", r === "elevation" && `elevation${o}`]
  };
  return ge(a, Bp, i);
}, Dp = Q("div", {
  name: "MuiPaper",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: o
    } = e;
    return [t.root, t[o.variant], !o.square && t.rounded, o.variant === "elevation" && t[`elevation${o.elevation}`]];
  }
})(fe(({
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
}))), Mo = /* @__PURE__ */ g.forwardRef(function(t, o) {
  var m;
  const r = he({
    props: t,
    name: "MuiPaper"
  }), i = rt(), {
    className: a,
    component: l = "div",
    elevation: s = 1,
    square: c = !1,
    variant: u = "elevation",
    ...d
  } = r, f = {
    ...r,
    component: l,
    elevation: s,
    square: c,
    variant: u
  }, h = Ip(f);
  return process.env.NODE_ENV !== "production" && i.shadows[s] === void 0 && console.error([`MUI: The elevation provided <Paper elevation={${s}}> is not available in the theme.`, `Please make sure that \`theme.shadows[${s}]\` is defined.`].join(`
`)), /* @__PURE__ */ S(Dp, {
    as: l,
    ownerState: f,
    className: _(h.root, a),
    ref: o,
    ...d,
    style: {
      ...u === "elevation" && {
        "--Paper-shadow": (i.vars || i).shadows[s],
        ...i.vars && {
          "--Paper-overlay": (m = i.vars.overlays) == null ? void 0 : m[s]
        },
        ...!i.vars && i.palette.mode === "dark" && {
          "--Paper-overlay": `linear-gradient(${X("#fff", Gr(s))}, ${X("#fff", Gr(s))})`
        }
      },
      ...d.style
    }
  });
});
process.env.NODE_ENV !== "production" && (Mo.propTypes = {
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
  elevation: kt(mi, (e) => {
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
function Np(e) {
  return de("MuiAlert", e);
}
const ma = ce("MuiAlert", ["root", "action", "icon", "message", "filled", "colorSuccess", "colorInfo", "colorWarning", "colorError", "filledSuccess", "filledInfo", "filledWarning", "filledError", "outlined", "outlinedSuccess", "outlinedInfo", "outlinedWarning", "outlinedError", "standard", "standardSuccess", "standardInfo", "standardWarning", "standardError"]);
function jp(e) {
  return de("MuiSvgIcon", e);
}
ce("MuiSvgIcon", ["root", "colorPrimary", "colorSecondary", "colorAction", "colorError", "colorDisabled", "fontSizeInherit", "fontSizeSmall", "fontSizeMedium", "fontSizeLarge"]);
const $p = (e) => {
  const {
    color: t,
    fontSize: o,
    classes: r
  } = e, i = {
    root: ["root", t !== "inherit" && `color${W(t)}`, `fontSize${W(o)}`]
  };
  return ge(i, jp, r);
}, Lp = Q("svg", {
  name: "MuiSvgIcon",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: o
    } = e;
    return [t.root, o.color !== "inherit" && t[`color${W(o.color)}`], t[`fontSize${W(o.fontSize)}`]];
  }
})(fe(({
  theme: e
}) => {
  var t, o, r, i, a, l, s, c, u, d, f, h, m, C;
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
          fontSize: ((d = (u = e.typography) == null ? void 0 : u.pxToRem) == null ? void 0 : d.call(u, 35)) || "2.1875rem"
        }
      },
      // TODO v5 deprecate color prop, v6 remove for sx
      ...Object.entries((e.vars ?? e).palette).filter(([, y]) => y && y.main).map(([y]) => {
        var x, E;
        return {
          props: {
            color: y
          },
          style: {
            color: (E = (x = (e.vars ?? e).palette) == null ? void 0 : x[y]) == null ? void 0 : E.main
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
          color: (C = (m = (e.vars ?? e).palette) == null ? void 0 : m.action) == null ? void 0 : C.disabled
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
})), zn = /* @__PURE__ */ g.forwardRef(function(t, o) {
  const r = he({
    props: t,
    name: "MuiSvgIcon"
  }), {
    children: i,
    className: a,
    color: l = "inherit",
    component: s = "svg",
    fontSize: c = "medium",
    htmlColor: u,
    inheritViewBox: d = !1,
    titleAccess: f,
    viewBox: h = "0 0 24 24",
    ...m
  } = r, C = /* @__PURE__ */ g.isValidElement(i) && i.type === "svg", y = {
    ...r,
    color: l,
    component: s,
    fontSize: c,
    instanceFontSize: t.fontSize,
    inheritViewBox: d,
    viewBox: h,
    hasSvgAsChild: C
  }, x = {};
  d || (x.viewBox = h);
  const E = $p(y);
  return /* @__PURE__ */ ve(Lp, {
    as: s,
    className: _(E.root, a),
    focusable: "false",
    color: u,
    "aria-hidden": f ? void 0 : !0,
    role: f ? "img" : void 0,
    ref: o,
    ...x,
    ...m,
    ...C && i.props,
    ownerState: y,
    children: [C ? i.props.children : i, f ? /* @__PURE__ */ S("title", {
      children: f
    }) : null]
  });
});
process.env.NODE_ENV !== "production" && (zn.propTypes = {
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
zn.muiName = "SvgIcon";
function Ke(e, t) {
  function o(r, i) {
    return /* @__PURE__ */ S(zn, {
      "data-testid": `${t}Icon`,
      ref: i,
      ...r,
      children: e
    });
  }
  return process.env.NODE_ENV !== "production" && (o.displayName = `${t}Icon`), o.muiName = zn.muiName, /* @__PURE__ */ g.memo(/* @__PURE__ */ g.forwardRef(o));
}
function on(e, t) {
  if (!e)
    return t;
  if (typeof e == "function" || typeof t == "function")
    return (i) => {
      const a = typeof t == "function" ? t(i) : t, l = typeof e == "function" ? e({
        ...i,
        ...a
      }) : e, s = _(i == null ? void 0 : i.className, a == null ? void 0 : a.className, l == null ? void 0 : l.className);
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
  const o = t, r = _(o == null ? void 0 : o.className, e == null ? void 0 : e.className);
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
class Vn {
  constructor() {
    jo(this, "mountEffect", () => {
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
    return new Vn();
  }
  static use() {
    const t = vs(Vn.create).current, [o, r] = g.useState(!1);
    return t.shouldMount = o, t.setShouldMount = r, g.useEffect(t.mountEffect, [o]), t;
  }
  mount() {
    return this.mounted || (this.mounted = Vp(), this.shouldMount = !0, this.setShouldMount(this.shouldMount)), this.mounted;
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
function zp() {
  return Vn.use();
}
function Vp() {
  let e, t;
  const o = new Promise((r, i) => {
    e = r, t = i;
  });
  return o.resolve = e, o.reject = t, o;
}
function qr() {
  return qr = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var o = arguments[t];
      for (var r in o) ({}).hasOwnProperty.call(o, r) && (e[r] = o[r]);
    }
    return e;
  }, qr.apply(null, arguments);
}
function Bs(e, t) {
  if (e == null) return {};
  var o = {};
  for (var r in e) if ({}.hasOwnProperty.call(e, r)) {
    if (t.indexOf(r) !== -1) continue;
    o[r] = e[r];
  }
  return o;
}
function Xr(e, t) {
  return Xr = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(o, r) {
    return o.__proto__ = r, o;
  }, Xr(e, t);
}
function Is(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, Xr(e, t);
}
const ba = {
  disabled: !1
};
var Wp = process.env.NODE_ENV !== "production" ? n.oneOfType([n.number, n.shape({
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
const Wn = v.createContext(null);
var Up = function(t) {
  return t.scrollTop;
}, Ko = "unmounted", Ut = "exited", Ht = "entering", Co = "entered", Jr = "exiting", ct = /* @__PURE__ */ function(e) {
  Is(t, e);
  function t(r, i) {
    var a;
    a = e.call(this, r, i) || this;
    var l = i, s = l && !l.isMounting ? r.enter : r.appear, c;
    return a.appearStatus = null, r.in ? s ? (c = Ut, a.appearStatus = Ht) : c = Co : r.unmountOnExit || r.mountOnEnter ? c = Ko : c = Ut, a.state = {
      status: c
    }, a.nextCallback = null, a;
  }
  t.getDerivedStateFromProps = function(i, a) {
    var l = i.in;
    return l && a.status === Ko ? {
      status: Ut
    } : null;
  };
  var o = t.prototype;
  return o.componentDidMount = function() {
    this.updateStatus(!0, this.appearStatus);
  }, o.componentDidUpdate = function(i) {
    var a = null;
    if (i !== this.props) {
      var l = this.state.status;
      this.props.in ? l !== Ht && l !== Co && (a = Ht) : (l === Ht || l === Co) && (a = Jr);
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
      if (this.cancelNextCallback(), a === Ht) {
        if (this.props.unmountOnExit || this.props.mountOnEnter) {
          var l = this.props.nodeRef ? this.props.nodeRef.current : yn.findDOMNode(this);
          l && Up(l);
        }
        this.performEnter(i);
      } else
        this.performExit();
    else this.props.unmountOnExit && this.state.status === Ut && this.setState({
      status: Ko
    });
  }, o.performEnter = function(i) {
    var a = this, l = this.props.enter, s = this.context ? this.context.isMounting : i, c = this.props.nodeRef ? [s] : [yn.findDOMNode(this), s], u = c[0], d = c[1], f = this.getTimeouts(), h = s ? f.appear : f.enter;
    if (!i && !l || ba.disabled) {
      this.safeSetState({
        status: Co
      }, function() {
        a.props.onEntered(u);
      });
      return;
    }
    this.props.onEnter(u, d), this.safeSetState({
      status: Ht
    }, function() {
      a.props.onEntering(u, d), a.onTransitionEnd(h, function() {
        a.safeSetState({
          status: Co
        }, function() {
          a.props.onEntered(u, d);
        });
      });
    });
  }, o.performExit = function() {
    var i = this, a = this.props.exit, l = this.getTimeouts(), s = this.props.nodeRef ? void 0 : yn.findDOMNode(this);
    if (!a || ba.disabled) {
      this.safeSetState({
        status: Ut
      }, function() {
        i.props.onExited(s);
      });
      return;
    }
    this.props.onExit(s), this.safeSetState({
      status: Jr
    }, function() {
      i.props.onExiting(s), i.onTransitionEnd(l.exit, function() {
        i.safeSetState({
          status: Ut
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
    var l = this.props.nodeRef ? this.props.nodeRef.current : yn.findDOMNode(this), s = i == null && !this.props.addEndListener;
    if (!l || s) {
      setTimeout(this.nextCallback, 0);
      return;
    }
    if (this.props.addEndListener) {
      var c = this.props.nodeRef ? [this.nextCallback] : [l, this.nextCallback], u = c[0], d = c[1];
      this.props.addEndListener(u, d);
    }
    i != null && setTimeout(this.nextCallback, i);
  }, o.render = function() {
    var i = this.state.status;
    if (i === Ko)
      return null;
    var a = this.props, l = a.children;
    a.in, a.mountOnEnter, a.unmountOnExit, a.appear, a.enter, a.exit, a.timeout, a.addEndListener, a.onEnter, a.onEntering, a.onEntered, a.onExit, a.onExiting, a.onExited, a.nodeRef;
    var s = Bs(a, ["children", "in", "mountOnEnter", "unmountOnExit", "appear", "enter", "exit", "timeout", "addEndListener", "onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited", "nodeRef"]);
    return (
      // allows for nested Transitions
      /* @__PURE__ */ v.createElement(Wn.Provider, {
        value: null
      }, typeof l == "function" ? l(i, s) : v.cloneElement(v.Children.only(l), s))
    );
  }, t;
}(v.Component);
ct.contextType = Wn;
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
    var o = Wp;
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
function vo() {
}
ct.defaultProps = {
  in: !1,
  mountOnEnter: !1,
  unmountOnExit: !1,
  appear: !1,
  enter: !0,
  exit: !0,
  onEnter: vo,
  onEntering: vo,
  onEntered: vo,
  onExit: vo,
  onExiting: vo,
  onExited: vo
};
ct.UNMOUNTED = Ko;
ct.EXITED = Ut;
ct.ENTERING = Ht;
ct.ENTERED = Co;
ct.EXITING = Jr;
function Hp(e) {
  if (e === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function yi(e, t) {
  var o = function(a) {
    return t && Fn(a) ? t(a) : a;
  }, r = /* @__PURE__ */ Object.create(null);
  return e && Wl.map(e, function(i) {
    return i;
  }).forEach(function(i) {
    r[i.key] = o(i);
  }), r;
}
function Qp(e, t) {
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
        var u = r[c][l];
        s[r[c][l]] = o(u);
      }
    s[c] = o(c);
  }
  for (l = 0; l < i.length; l++)
    s[i[l]] = o(i[l]);
  return s;
}
function Kt(e, t, o) {
  return o[t] != null ? o[t] : e.props[t];
}
function Kp(e, t) {
  return yi(e.children, function(o) {
    return Pn(o, {
      onExited: t.bind(null, o),
      in: !0,
      appear: Kt(o, "appear", e),
      enter: Kt(o, "enter", e),
      exit: Kt(o, "exit", e)
    });
  });
}
function Yp(e, t, o) {
  var r = yi(e.children), i = Qp(t, r);
  return Object.keys(i).forEach(function(a) {
    var l = i[a];
    if (Fn(l)) {
      var s = a in t, c = a in r, u = t[a], d = Fn(u) && !u.props.in;
      c && (!s || d) ? i[a] = Pn(l, {
        onExited: o.bind(null, l),
        in: !0,
        exit: Kt(l, "exit", e),
        enter: Kt(l, "enter", e)
      }) : !c && s && !d ? i[a] = Pn(l, {
        in: !1
      }) : c && s && Fn(u) && (i[a] = Pn(l, {
        onExited: o.bind(null, l),
        in: u.props.in,
        exit: Kt(l, "exit", e),
        enter: Kt(l, "enter", e)
      }));
    }
  }), i;
}
var Gp = Object.values || function(e) {
  return Object.keys(e).map(function(t) {
    return e[t];
  });
}, qp = {
  component: "div",
  childFactory: function(t) {
    return t;
  }
}, vi = /* @__PURE__ */ function(e) {
  Is(t, e);
  function t(r, i) {
    var a;
    a = e.call(this, r, i) || this;
    var l = a.handleExited.bind(Hp(a));
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
      children: c ? Kp(i, s) : Yp(i, l, s),
      firstRender: !1
    };
  }, o.handleExited = function(i, a) {
    var l = yi(this.props.children);
    i.key in l || (i.props.onExited && i.props.onExited(a), this.mounted && this.setState(function(s) {
      var c = qr({}, s.children);
      return delete c[i.key], {
        children: c
      };
    }));
  }, o.render = function() {
    var i = this.props, a = i.component, l = i.childFactory, s = Bs(i, ["component", "childFactory"]), c = this.state.contextValue, u = Gp(this.state.children).map(l);
    return delete s.appear, delete s.enter, delete s.exit, a === null ? /* @__PURE__ */ v.createElement(Wn.Provider, {
      value: c
    }, u) : /* @__PURE__ */ v.createElement(Wn.Provider, {
      value: c
    }, /* @__PURE__ */ v.createElement(a, s, u));
  }, t;
}(v.Component);
vi.propTypes = process.env.NODE_ENV !== "production" ? {
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
vi.defaultProps = qp;
function Ds(e) {
  const {
    className: t,
    classes: o,
    pulsate: r = !1,
    rippleX: i,
    rippleY: a,
    rippleSize: l,
    in: s,
    onExited: c,
    timeout: u
  } = e, [d, f] = g.useState(!1), h = _(t, o.ripple, o.rippleVisible, r && o.ripplePulsate), m = {
    width: l,
    height: l,
    top: -(l / 2) + a,
    left: -(l / 2) + i
  }, C = _(o.child, d && o.childLeaving, r && o.childPulsate);
  return !s && !d && f(!0), g.useEffect(() => {
    if (!s && c != null) {
      const y = setTimeout(c, u);
      return () => {
        clearTimeout(y);
      };
    }
  }, [c, s, u]), /* @__PURE__ */ S("span", {
    className: h,
    style: m,
    children: /* @__PURE__ */ S("span", {
      className: C
    })
  });
}
process.env.NODE_ENV !== "production" && (Ds.propTypes = {
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
const Ze = ce("MuiTouchRipple", ["root", "ripple", "rippleVisible", "ripplePulsate", "child", "childLeaving", "childPulsate"]), Zr = 550, Xp = 80, Jp = cn`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`, Zp = cn`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`, _p = cn`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`, ed = Q("span", {
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
}), td = Q(Ds, {
  name: "MuiTouchRipple",
  slot: "Ripple"
})`
  opacity: 0;
  position: absolute;

  &.${Ze.rippleVisible} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${Jp};
    animation-duration: ${Zr}ms;
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
    animation-name: ${Zp};
    animation-duration: ${Zr}ms;
    animation-timing-function: ${({
  theme: e
}) => e.transitions.easing.easeInOut};
  }

  & .${Ze.childPulsate} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
    animation-name: ${_p};
    animation-duration: 2500ms;
    animation-timing-function: ${({
  theme: e
}) => e.transitions.easing.easeInOut};
    animation-iteration-count: infinite;
    animation-delay: 200ms;
  }
`, Ns = /* @__PURE__ */ g.forwardRef(function(t, o) {
  const r = he({
    props: t,
    name: "MuiTouchRipple"
  }), {
    center: i = !1,
    classes: a = {},
    className: l,
    ...s
  } = r, [c, u] = g.useState([]), d = g.useRef(0), f = g.useRef(null);
  g.useEffect(() => {
    f.current && (f.current(), f.current = null);
  }, [c]);
  const h = g.useRef(!1), m = xo(), C = g.useRef(null), y = g.useRef(null), x = g.useCallback((b) => {
    const {
      pulsate: k,
      rippleX: A,
      rippleY: M,
      rippleSize: $,
      cb: N
    } = b;
    u((p) => [...p, /* @__PURE__ */ S(td, {
      classes: {
        ripple: _(a.ripple, Ze.ripple),
        rippleVisible: _(a.rippleVisible, Ze.rippleVisible),
        ripplePulsate: _(a.ripplePulsate, Ze.ripplePulsate),
        child: _(a.child, Ze.child),
        childLeaving: _(a.childLeaving, Ze.childLeaving),
        childPulsate: _(a.childPulsate, Ze.childPulsate)
      },
      timeout: Zr,
      pulsate: k,
      rippleX: A,
      rippleY: M,
      rippleSize: $
    }, d.current)]), d.current += 1, f.current = N;
  }, [a]), E = g.useCallback((b = {}, k = {}, A = () => {
  }) => {
    const {
      pulsate: M = !1,
      center: $ = i || k.pulsate,
      fakeElement: N = !1
      // For test purposes
    } = k;
    if ((b == null ? void 0 : b.type) === "mousedown" && h.current) {
      h.current = !1;
      return;
    }
    (b == null ? void 0 : b.type) === "touchstart" && (h.current = !0);
    const p = N ? null : y.current, F = p ? p.getBoundingClientRect() : {
      width: 0,
      height: 0,
      left: 0,
      top: 0
    };
    let B, O, I;
    if ($ || b === void 0 || b.clientX === 0 && b.clientY === 0 || !b.clientX && !b.touches)
      B = Math.round(F.width / 2), O = Math.round(F.height / 2);
    else {
      const {
        clientX: j,
        clientY: P
      } = b.touches && b.touches.length > 0 ? b.touches[0] : b;
      B = Math.round(j - F.left), O = Math.round(P - F.top);
    }
    if ($)
      I = Math.sqrt((2 * F.width ** 2 + F.height ** 2) / 3), I % 2 === 0 && (I += 1);
    else {
      const j = Math.max(Math.abs((p ? p.clientWidth : 0) - B), B) * 2 + 2, P = Math.max(Math.abs((p ? p.clientHeight : 0) - O), O) * 2 + 2;
      I = Math.sqrt(j ** 2 + P ** 2);
    }
    b != null && b.touches ? C.current === null && (C.current = () => {
      x({
        pulsate: M,
        rippleX: B,
        rippleY: O,
        rippleSize: I,
        cb: A
      });
    }, m.start(Xp, () => {
      C.current && (C.current(), C.current = null);
    })) : x({
      pulsate: M,
      rippleX: B,
      rippleY: O,
      rippleSize: I,
      cb: A
    });
  }, [i, x, m]), T = g.useCallback(() => {
    E({}, {
      pulsate: !0
    });
  }, [E]), w = g.useCallback((b, k) => {
    if (m.clear(), (b == null ? void 0 : b.type) === "touchend" && C.current) {
      C.current(), C.current = null, m.start(0, () => {
        w(b, k);
      });
      return;
    }
    C.current = null, u((A) => A.length > 0 ? A.slice(1) : A), f.current = k;
  }, [m]);
  return g.useImperativeHandle(o, () => ({
    pulsate: T,
    start: E,
    stop: w
  }), [T, E, w]), /* @__PURE__ */ S(ed, {
    className: _(Ze.root, a.root, l),
    ref: y,
    ...s,
    children: /* @__PURE__ */ S(vi, {
      component: null,
      exit: !0,
      children: c
    })
  });
});
process.env.NODE_ENV !== "production" && (Ns.propTypes = {
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
function od(e) {
  return de("MuiButtonBase", e);
}
const nd = ce("MuiButtonBase", ["root", "disabled", "focusVisible"]), rd = (e) => {
  const {
    disabled: t,
    focusVisible: o,
    focusVisibleClassName: r,
    classes: i
  } = e, l = ge({
    root: ["root", t && "disabled", o && "focusVisible"]
  }, od, i);
  return o && r && (l.root += ` ${r}`), l;
}, id = Q("button", {
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
  [`&.${nd.disabled}`]: {
    pointerEvents: "none",
    // Disable link interactions
    cursor: "default"
  },
  "@media print": {
    colorAdjust: "exact"
  }
}), lt = /* @__PURE__ */ g.forwardRef(function(t, o) {
  const r = he({
    props: t,
    name: "MuiButtonBase"
  }), {
    action: i,
    centerRipple: a = !1,
    children: l,
    className: s,
    component: c = "button",
    disabled: u = !1,
    disableRipple: d = !1,
    disableTouchRipple: f = !1,
    focusRipple: h = !1,
    focusVisibleClassName: m,
    LinkComponent: C = "a",
    onBlur: y,
    onClick: x,
    onContextMenu: E,
    onDragLeave: T,
    onFocus: w,
    onFocusVisible: b,
    onKeyDown: k,
    onKeyUp: A,
    onMouseDown: M,
    onMouseLeave: $,
    onMouseUp: N,
    onTouchEnd: p,
    onTouchMove: F,
    onTouchStart: B,
    tabIndex: O = 0,
    TouchRippleProps: I,
    touchRippleRef: j,
    type: P,
    ...U
  } = r, H = g.useRef(null), L = zp(), R = je(L.ref, j), [V, ne] = g.useState(!1);
  u && V && ne(!1), g.useImperativeHandle(i, () => ({
    focusVisible: () => {
      ne(!0), H.current.focus();
    }
  }), []);
  const te = L.shouldMount && !d && !u;
  g.useEffect(() => {
    V && h && !d && L.pulsate();
  }, [d, h, V, L]);
  const G = Et(L, "start", M, f), Y = Et(L, "stop", E, f), q = Et(L, "stop", T, f), z = Et(L, "stop", N, f), oe = Et(L, "stop", (ae) => {
    V && ae.preventDefault(), $ && $(ae);
  }, f), re = Et(L, "start", B, f), K = Et(L, "stop", p, f), Z = Et(L, "stop", F, f), J = Et(L, "stop", (ae) => {
    Ln(ae.target) || ne(!1), y && y(ae);
  }, !1), ue = Ue((ae) => {
    H.current || (H.current = ae.currentTarget), Ln(ae.target) && (ne(!0), b && b(ae)), w && w(ae);
  }), pe = () => {
    const ae = H.current;
    return c && c !== "button" && !(ae.tagName === "A" && ae.href);
  }, ke = Ue((ae) => {
    h && !ae.repeat && V && ae.key === " " && L.stop(ae, () => {
      L.start(ae);
    }), ae.target === ae.currentTarget && pe() && ae.key === " " && ae.preventDefault(), k && k(ae), ae.target === ae.currentTarget && pe() && ae.key === "Enter" && !u && (ae.preventDefault(), x && x(ae));
  }), xe = Ue((ae) => {
    h && ae.key === " " && V && !ae.defaultPrevented && L.stop(ae, () => {
      L.pulsate(ae);
    }), A && A(ae), x && ae.target === ae.currentTarget && pe() && ae.key === " " && !ae.defaultPrevented && x(ae);
  });
  let be = c;
  be === "button" && (U.href || U.to) && (be = C);
  const Ee = {};
  be === "button" ? (Ee.type = P === void 0 ? "button" : P, Ee.disabled = u) : (!U.href && !U.to && (Ee.role = "button"), u && (Ee["aria-disabled"] = u));
  const Ie = je(o, H), Ne = {
    ...r,
    centerRipple: a,
    component: c,
    disabled: u,
    disableRipple: d,
    disableTouchRipple: f,
    focusRipple: h,
    tabIndex: O,
    focusVisible: V
  }, we = rd(Ne);
  return /* @__PURE__ */ ve(id, {
    as: be,
    className: _(we.root, s),
    ownerState: Ne,
    onBlur: J,
    onClick: x,
    onContextMenu: Y,
    onFocus: ue,
    onKeyDown: ke,
    onKeyUp: xe,
    onMouseDown: G,
    onMouseLeave: oe,
    onMouseUp: z,
    onDragLeave: q,
    onTouchEnd: K,
    onTouchMove: Z,
    onTouchStart: re,
    ref: Ie,
    tabIndex: u ? -1 : O,
    type: P,
    ...Ee,
    ...U,
    children: [l, te ? /* @__PURE__ */ S(Ns, {
      ref: R,
      center: a,
      ...I
    }) : null]
  });
});
function Et(e, t, o, r = !1) {
  return Ue((i) => (o && o(i), r || e[t](i), !0));
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
  action: Ot,
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
  component: $n,
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
function ad(e) {
  return de("MuiCircularProgress", e);
}
ce("MuiCircularProgress", ["root", "determinate", "indeterminate", "colorPrimary", "colorSecondary", "svg", "circle", "circleDeterminate", "circleIndeterminate", "circleDisableShrink"]);
const Bt = 44, _r = cn`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`, ei = cn`
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
`, sd = typeof _r != "string" ? ts`
        animation: ${_r} 1.4s linear infinite;
      ` : null, ld = typeof ei != "string" ? ts`
        animation: ${ei} 1.4s ease-in-out infinite;
      ` : null, cd = (e) => {
  const {
    classes: t,
    variant: o,
    color: r,
    disableShrink: i
  } = e, a = {
    root: ["root", o, `color${W(r)}`],
    svg: ["svg"],
    circle: ["circle", `circle${W(o)}`, i && "circleDisableShrink"]
  };
  return ge(a, ad, t);
}, ud = Q("span", {
  name: "MuiCircularProgress",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: o
    } = e;
    return [t.root, t[o.variant], t[`color${W(o.color)}`]];
  }
})(fe(({
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
    style: sd || {
      animation: `${_r} 1.4s linear infinite`
    }
  }, ...Object.entries(e.palette).filter(De()).map(([t]) => ({
    props: {
      color: t
    },
    style: {
      color: (e.vars || e).palette[t].main
    }
  }))]
}))), pd = Q("svg", {
  name: "MuiCircularProgress",
  slot: "Svg",
  overridesResolver: (e, t) => t.svg
})({
  display: "block"
  // Keeps the progress centered
}), dd = Q("circle", {
  name: "MuiCircularProgress",
  slot: "Circle",
  overridesResolver: (e, t) => {
    const {
      ownerState: o
    } = e;
    return [t.circle, t[`circle${W(o.variant)}`], o.disableShrink && t.circleDisableShrink];
  }
})(fe(({
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
    style: ld || {
      // At runtime for Pigment CSS, `bufferAnimation` will be null and the generated keyframe will be used.
      animation: `${ei} 1.4s ease-in-out infinite`
    }
  }]
}))), Ci = /* @__PURE__ */ g.forwardRef(function(t, o) {
  const r = he({
    props: t,
    name: "MuiCircularProgress"
  }), {
    className: i,
    color: a = "primary",
    disableShrink: l = !1,
    size: s = 40,
    style: c,
    thickness: u = 3.6,
    value: d = 0,
    variant: f = "indeterminate",
    ...h
  } = r, m = {
    ...r,
    color: a,
    disableShrink: l,
    size: s,
    thickness: u,
    value: d,
    variant: f
  }, C = cd(m), y = {}, x = {}, E = {};
  if (f === "determinate") {
    const T = 2 * Math.PI * ((Bt - u) / 2);
    y.strokeDasharray = T.toFixed(3), E["aria-valuenow"] = Math.round(d), y.strokeDashoffset = `${((100 - d) / 100 * T).toFixed(3)}px`, x.transform = "rotate(-90deg)";
  }
  return /* @__PURE__ */ S(ud, {
    className: _(C.root, i),
    style: {
      width: s,
      height: s,
      ...x,
      ...c
    },
    ownerState: m,
    ref: o,
    role: "progressbar",
    ...E,
    ...h,
    children: /* @__PURE__ */ S(pd, {
      className: C.svg,
      ownerState: m,
      viewBox: `${Bt / 2} ${Bt / 2} ${Bt} ${Bt}`,
      children: /* @__PURE__ */ S(dd, {
        className: C.circle,
        style: y,
        ownerState: m,
        cx: Bt,
        cy: Bt,
        r: (Bt - u) / 2,
        fill: "none",
        strokeWidth: u
      })
    })
  });
});
process.env.NODE_ENV !== "production" && (Ci.propTypes = {
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
  disableShrink: kt(n.bool, (e) => e.disableShrink && e.variant && e.variant !== "indeterminate" ? new Error("MUI: You have provided the `disableShrink` prop with a variant other than `indeterminate`. This will have no effect.") : null),
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
function fd(e) {
  return de("MuiIconButton", e);
}
const ya = ce("MuiIconButton", ["root", "disabled", "colorInherit", "colorPrimary", "colorSecondary", "colorError", "colorInfo", "colorSuccess", "colorWarning", "edgeStart", "edgeEnd", "sizeSmall", "sizeMedium", "sizeLarge", "loading", "loadingIndicator", "loadingWrapper"]), gd = (e) => {
  const {
    classes: t,
    disabled: o,
    color: r,
    edge: i,
    size: a,
    loading: l
  } = e, s = {
    root: ["root", l && "loading", o && "disabled", r !== "default" && `color${W(r)}`, i && `edge${W(i)}`, `size${W(a)}`],
    loadingIndicator: ["loadingIndicator"],
    loadingWrapper: ["loadingWrapper"]
  };
  return ge(s, fd, t);
}, hd = Q(lt, {
  name: "MuiIconButton",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: o
    } = e;
    return [t.root, o.loading && t.loading, o.color !== "default" && t[`color${W(o.color)}`], o.edge && t[`edge${W(o.edge)}`], t[`size${W(o.size)}`]];
  }
})(fe(({
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
      "--IconButton-hoverBg": e.vars ? `rgba(${e.vars.palette.action.activeChannel} / ${e.vars.palette.action.hoverOpacity})` : X(e.palette.action.active, e.palette.action.hoverOpacity),
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
})), fe(({
  theme: e
}) => ({
  variants: [{
    props: {
      color: "inherit"
    },
    style: {
      color: "inherit"
    }
  }, ...Object.entries(e.palette).filter(De()).map(([t]) => ({
    props: {
      color: t
    },
    style: {
      color: (e.vars || e).palette[t].main
    }
  })), ...Object.entries(e.palette).filter(De()).map(([t]) => ({
    props: {
      color: t
    },
    style: {
      "--IconButton-hoverBg": e.vars ? `rgba(${(e.vars || e).palette[t].mainChannel} / ${e.vars.palette.action.hoverOpacity})` : X((e.vars || e).palette[t].main, e.palette.action.hoverOpacity)
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
  [`&.${ya.disabled}`]: {
    backgroundColor: "transparent",
    color: (e.vars || e).palette.action.disabled
  },
  [`&.${ya.loading}`]: {
    color: "transparent"
  }
}))), md = Q("span", {
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
})), _t = /* @__PURE__ */ g.forwardRef(function(t, o) {
  const r = he({
    props: t,
    name: "MuiIconButton"
  }), {
    edge: i = !1,
    children: a,
    className: l,
    color: s = "default",
    disabled: c = !1,
    disableFocusRipple: u = !1,
    size: d = "medium",
    id: f,
    loading: h = null,
    loadingIndicator: m,
    ...C
  } = r, y = fn(f), x = m ?? /* @__PURE__ */ S(Ci, {
    "aria-labelledby": y,
    color: "inherit",
    size: 16
  }), E = {
    ...r,
    edge: i,
    color: s,
    disabled: c,
    disableFocusRipple: u,
    loading: h,
    loadingIndicator: x,
    size: d
  }, T = gd(E);
  return /* @__PURE__ */ ve(hd, {
    id: h ? y : f,
    className: _(T.root, l),
    centerRipple: !0,
    focusRipple: !u,
    disabled: c || h,
    ref: o,
    ...C,
    ownerState: E,
    children: [typeof h == "boolean" && // use plain HTML span to minimize the runtime overhead
    /* @__PURE__ */ S("span", {
      className: T.loadingWrapper,
      style: {
        display: "contents"
      },
      children: /* @__PURE__ */ S(md, {
        className: T.loadingIndicator,
        ownerState: E,
        children: h && x
      })
    }), a]
  });
});
process.env.NODE_ENV !== "production" && (_t.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The icon to display.
   */
  children: kt(n.node, (e) => g.Children.toArray(e.children).some((o) => /* @__PURE__ */ g.isValidElement(o) && o.props.onClick) ? new Error(["MUI: You are providing an onClick event listener to a child of a button element.", "Prefer applying it to the IconButton directly.", "This guarantees that the whole <button> will be responsive to click events."].join(`
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
const bd = Ke(/* @__PURE__ */ S("path", {
  d: "M20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4C12.76,4 13.5,4.11 14.2, 4.31L15.77,2.74C14.61,2.26 13.34,2 12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0, 0 22,12M7.91,10.08L6.5,11.5L11,16L21,6L19.59,4.58L11,13.17L7.91,10.08Z"
}), "SuccessOutlined"), yd = Ke(/* @__PURE__ */ S("path", {
  d: "M12 5.99L19.53 19H4.47L12 5.99M12 2L1 21h22L12 2zm1 14h-2v2h2v-2zm0-6h-2v4h2v-4z"
}), "ReportProblemOutlined"), vd = Ke(/* @__PURE__ */ S("path", {
  d: "M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"
}), "ErrorOutline"), Cd = Ke(/* @__PURE__ */ S("path", {
  d: "M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20, 12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10, 10 0 0,0 12,2M11,17H13V11H11V17Z"
}), "InfoOutlined"), xd = Ke(/* @__PURE__ */ S("path", {
  d: "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
}), "Close"), Ed = (e) => {
  const {
    variant: t,
    color: o,
    severity: r,
    classes: i
  } = e, a = {
    root: ["root", `color${W(o || r)}`, `${t}${W(o || r)}`, `${t}`],
    icon: ["icon"],
    message: ["message"],
    action: ["action"]
  };
  return ge(a, Np, i);
}, wd = Q(Mo, {
  name: "MuiAlert",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: o
    } = e;
    return [t.root, t[o.variant], t[`${o.variant}${W(o.color || o.severity)}`]];
  }
})(fe(({
  theme: e
}) => {
  const t = e.palette.mode === "light" ? wo : So, o = e.palette.mode === "light" ? So : wo;
  return {
    ...e.typography.body2,
    backgroundColor: "transparent",
    display: "flex",
    padding: "6px 16px",
    variants: [...Object.entries(e.palette).filter(De(["light"])).map(([r]) => ({
      props: {
        colorSeverity: r,
        variant: "standard"
      },
      style: {
        color: e.vars ? e.vars.palette.Alert[`${r}Color`] : t(e.palette[r].light, 0.6),
        backgroundColor: e.vars ? e.vars.palette.Alert[`${r}StandardBg`] : o(e.palette[r].light, 0.9),
        [`& .${ma.icon}`]: e.vars ? {
          color: e.vars.palette.Alert[`${r}IconColor`]
        } : {
          color: e.palette[r].main
        }
      }
    })), ...Object.entries(e.palette).filter(De(["light"])).map(([r]) => ({
      props: {
        colorSeverity: r,
        variant: "outlined"
      },
      style: {
        color: e.vars ? e.vars.palette.Alert[`${r}Color`] : t(e.palette[r].light, 0.6),
        border: `1px solid ${(e.vars || e).palette[r].light}`,
        [`& .${ma.icon}`]: e.vars ? {
          color: e.vars.palette.Alert[`${r}IconColor`]
        } : {
          color: e.palette[r].main
        }
      }
    })), ...Object.entries(e.palette).filter(De(["dark"])).map(([r]) => ({
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
})), Sd = Q("div", {
  name: "MuiAlert",
  slot: "Icon",
  overridesResolver: (e, t) => t.icon
})({
  marginRight: 12,
  padding: "7px 0",
  display: "flex",
  fontSize: 22,
  opacity: 0.9
}), Td = Q("div", {
  name: "MuiAlert",
  slot: "Message",
  overridesResolver: (e, t) => t.message
})({
  padding: "8px 0",
  minWidth: 0,
  overflow: "auto"
}), kd = Q("div", {
  name: "MuiAlert",
  slot: "Action",
  overridesResolver: (e, t) => t.action
})({
  display: "flex",
  alignItems: "flex-start",
  padding: "4px 0 0 16px",
  marginLeft: "auto",
  marginRight: -8
}), va = {
  success: /* @__PURE__ */ S(bd, {
    fontSize: "inherit"
  }),
  warning: /* @__PURE__ */ S(yd, {
    fontSize: "inherit"
  }),
  error: /* @__PURE__ */ S(vd, {
    fontSize: "inherit"
  }),
  info: /* @__PURE__ */ S(Cd, {
    fontSize: "inherit"
  })
}, js = /* @__PURE__ */ g.forwardRef(function(t, o) {
  const r = he({
    props: t,
    name: "MuiAlert"
  }), {
    action: i,
    children: a,
    className: l,
    closeText: s = "Close",
    color: c,
    components: u = {},
    componentsProps: d = {},
    icon: f,
    iconMapping: h = va,
    onClose: m,
    role: C = "alert",
    severity: y = "success",
    slotProps: x = {},
    slots: E = {},
    variant: T = "standard",
    ...w
  } = r, b = {
    ...r,
    color: c,
    severity: y,
    variant: T,
    colorSeverity: c || y
  }, k = Ed(b), A = {
    slots: {
      closeButton: u.CloseButton,
      closeIcon: u.CloseIcon,
      ...E
    },
    slotProps: {
      ...d,
      ...x
    }
  }, [M, $] = le("root", {
    ref: o,
    shouldForwardComponentProp: !0,
    className: _(k.root, l),
    elementType: wd,
    externalForwardedProps: {
      ...A,
      ...w
    },
    ownerState: b,
    additionalProps: {
      role: C,
      elevation: 0
    }
  }), [N, p] = le("icon", {
    className: k.icon,
    elementType: Sd,
    externalForwardedProps: A,
    ownerState: b
  }), [F, B] = le("message", {
    className: k.message,
    elementType: Td,
    externalForwardedProps: A,
    ownerState: b
  }), [O, I] = le("action", {
    className: k.action,
    elementType: kd,
    externalForwardedProps: A,
    ownerState: b
  }), [j, P] = le("closeButton", {
    elementType: _t,
    externalForwardedProps: A,
    ownerState: b
  }), [U, H] = le("closeIcon", {
    elementType: xd,
    externalForwardedProps: A,
    ownerState: b
  });
  return /* @__PURE__ */ ve(M, {
    ...$,
    children: [f !== !1 ? /* @__PURE__ */ S(N, {
      ...p,
      children: f || h[y] || va[y]
    }) : null, /* @__PURE__ */ S(F, {
      ...B,
      children: a
    }), i != null ? /* @__PURE__ */ S(O, {
      ...I,
      children: i
    }) : null, i == null && m ? /* @__PURE__ */ S(O, {
      ...I,
      children: /* @__PURE__ */ S(j, {
        size: "small",
        "aria-label": s,
        title: s,
        color: "inherit",
        onClick: m,
        ...P,
        children: /* @__PURE__ */ S(U, {
          fontSize: "small",
          ...H
        })
      })
    }) : null]
  });
});
process.env.NODE_ENV !== "production" && (js.propTypes = {
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
var Od = /* @__PURE__ */ Ul({
  color: "currentColor",
  size: "1em",
  weight: "regular",
  mirrored: !1
}), At = function(t, o, r) {
  var i = r.get(t);
  return i ? i(o) : (console.error('Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'), null);
};
function Ca(e, t) {
  if (e == null) return {};
  var o = {}, r = Object.keys(e), i, a;
  for (a = 0; a < r.length; a++)
    i = r[a], !(t.indexOf(i) >= 0) && (o[i] = e[i]);
  return o;
}
var yt = /* @__PURE__ */ bt(function(e, t) {
  var o = e.alt, r = e.color, i = e.size, a = e.weight, l = e.mirrored, s = e.children, c = e.renderPath, u = Ca(e, ["alt", "color", "size", "weight", "mirrored", "children", "renderPath"]), d = Hl(Od), f = d.color, h = f === void 0 ? "currentColor" : f, m = d.size, C = d.weight, y = C === void 0 ? "regular" : C, x = d.mirrored, E = x === void 0 ? !1 : x, T = Ca(d, ["color", "size", "weight", "mirrored"]);
  return v.createElement("svg", Object.assign({
    ref: t,
    xmlns: "http://www.w3.org/2000/svg",
    width: i ?? m,
    height: i ?? m,
    fill: r ?? h,
    viewBox: "0 0 256 256",
    transform: l || E ? "scale(-1, 1)" : void 0
  }, T, u), !!o && v.createElement("title", null, o), s, v.createElement("rect", {
    width: "256",
    height: "256",
    fill: "none"
  }), c(a ?? y, r ?? h));
});
yt.displayName = "IconBase";
var eo = /* @__PURE__ */ new Map();
eo.set("bold", function(e) {
  return v.createElement(v.Fragment, null, v.createElement("polyline", {
    points: "160 208 80 128 160 48",
    fill: "none",
    stroke: e,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "24"
  }));
});
eo.set("duotone", function(e) {
  return v.createElement(v.Fragment, null, v.createElement("polygon", {
    points: "160 208 80 128 160 48 160 208",
    opacity: "0.2"
  }), v.createElement("polygon", {
    points: "160 208 80 128 160 48 160 208",
    fill: "none",
    stroke: e,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }));
});
eo.set("fill", function() {
  return v.createElement(v.Fragment, null, v.createElement("path", {
    d: "M163.1,40.6a8.4,8.4,0,0,0-8.8,1.7l-80,80a8.1,8.1,0,0,0,0,11.4l80,80A8.3,8.3,0,0,0,160,216a8.5,8.5,0,0,0,3.1-.6A8,8,0,0,0,168,208V48A8,8,0,0,0,163.1,40.6Z"
  }));
});
eo.set("light", function(e) {
  return v.createElement(v.Fragment, null, v.createElement("polyline", {
    points: "160 208 80 128 160 48",
    fill: "none",
    stroke: e,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "12"
  }));
});
eo.set("thin", function(e) {
  return v.createElement(v.Fragment, null, v.createElement("polyline", {
    points: "160 208 80 128 160 48",
    fill: "none",
    stroke: e,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "8"
  }));
});
eo.set("regular", function(e) {
  return v.createElement(v.Fragment, null, v.createElement("polyline", {
    points: "160 208 80 128 160 48",
    fill: "none",
    stroke: e,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }));
});
var Ad = function(t, o) {
  return At(t, o, eo);
}, $s = /* @__PURE__ */ bt(function(e, t) {
  return v.createElement(yt, Object.assign({
    ref: t
  }, e, {
    renderPath: Ad
  }));
});
$s.displayName = "CaretLeft";
var to = /* @__PURE__ */ new Map();
to.set("bold", function(e) {
  return v.createElement(v.Fragment, null, v.createElement("polyline", {
    points: "96 48 176 128 96 208",
    fill: "none",
    stroke: e,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "24"
  }));
});
to.set("duotone", function(e) {
  return v.createElement(v.Fragment, null, v.createElement("polygon", {
    points: "96 48 176 128 96 208 96 48",
    opacity: "0.2"
  }), v.createElement("polygon", {
    points: "96 48 176 128 96 208 96 48",
    fill: "none",
    stroke: e,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }));
});
to.set("fill", function() {
  return v.createElement(v.Fragment, null, v.createElement("path", {
    d: "M181.7,122.3l-80-80a8.4,8.4,0,0,0-8.8-1.7A8,8,0,0,0,88,48V208a8,8,0,0,0,4.9,7.4,8.5,8.5,0,0,0,3.1.6,8.3,8.3,0,0,0,5.7-2.3l80-80A8.1,8.1,0,0,0,181.7,122.3Z"
  }));
});
to.set("light", function(e) {
  return v.createElement(v.Fragment, null, v.createElement("polyline", {
    points: "96 48 176 128 96 208",
    fill: "none",
    stroke: e,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "12"
  }));
});
to.set("thin", function(e) {
  return v.createElement(v.Fragment, null, v.createElement("polyline", {
    points: "96 48 176 128 96 208",
    fill: "none",
    stroke: e,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "8"
  }));
});
to.set("regular", function(e) {
  return v.createElement(v.Fragment, null, v.createElement("polyline", {
    points: "96 48 176 128 96 208",
    fill: "none",
    stroke: e,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }));
});
var Rd = function(t, o) {
  return At(t, o, to);
}, Ls = /* @__PURE__ */ bt(function(e, t) {
  return v.createElement(yt, Object.assign({
    ref: t
  }, e, {
    renderPath: Rd
  }));
});
Ls.displayName = "CaretRight";
var oo = /* @__PURE__ */ new Map();
oo.set("bold", function(e) {
  return v.createElement(v.Fragment, null, v.createElement("polyline", {
    points: "172 104 113.3 160 84 132",
    fill: "none",
    stroke: e,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "24"
  }), v.createElement("circle", {
    cx: "128",
    cy: "128",
    r: "96",
    fill: "none",
    stroke: e,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "24"
  }));
});
oo.set("duotone", function(e) {
  return v.createElement(v.Fragment, null, v.createElement("circle", {
    cx: "128",
    cy: "128",
    r: "96",
    opacity: "0.2"
  }), v.createElement("polyline", {
    points: "172 104 113.3 160 84 132",
    fill: "none",
    stroke: e,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), v.createElement("circle", {
    cx: "128",
    cy: "128",
    r: "96",
    fill: "none",
    stroke: e,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }));
});
oo.set("fill", function() {
  return v.createElement(v.Fragment, null, v.createElement("path", {
    d: "M128,24A104,104,0,1,0,232,128,104.2,104.2,0,0,0,128,24Zm49.5,85.8-58.6,56a8.1,8.1,0,0,1-5.6,2.2,7.7,7.7,0,0,1-5.5-2.2l-29.3-28a8,8,0,1,1,11-11.6l23.8,22.7,53.2-50.7a8,8,0,0,1,11,11.6Z"
  }));
});
oo.set("light", function(e) {
  return v.createElement(v.Fragment, null, v.createElement("polyline", {
    points: "172 104 113.3 160 84 132",
    fill: "none",
    stroke: e,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "12"
  }), v.createElement("circle", {
    cx: "128",
    cy: "128",
    r: "96",
    fill: "none",
    stroke: e,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "12"
  }));
});
oo.set("thin", function(e) {
  return v.createElement(v.Fragment, null, v.createElement("polyline", {
    points: "172 104 113.3 160 84 132",
    fill: "none",
    stroke: e,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "8"
  }), v.createElement("circle", {
    cx: "128",
    cy: "128",
    r: "96",
    fill: "none",
    stroke: e,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "8"
  }));
});
oo.set("regular", function(e) {
  return v.createElement(v.Fragment, null, v.createElement("polyline", {
    points: "172 104 113.3 160 84 132",
    fill: "none",
    stroke: e,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), v.createElement("circle", {
    cx: "128",
    cy: "128",
    r: "96",
    fill: "none",
    stroke: e,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }));
});
var Fd = function(t, o) {
  return At(t, o, oo);
}, zs = /* @__PURE__ */ bt(function(e, t) {
  return v.createElement(yt, Object.assign({
    ref: t
  }, e, {
    renderPath: Fd
  }));
});
zs.displayName = "CheckCircle";
var no = /* @__PURE__ */ new Map();
no.set("bold", function(e) {
  return v.createElement(v.Fragment, null, v.createElement("circle", {
    cx: "128",
    cy: "128",
    r: "96",
    fill: "none",
    stroke: e,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "24"
  }), v.createElement("polyline", {
    points: "120 124 128 124 128 176 136 176",
    fill: "none",
    stroke: e,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "24"
  }), v.createElement("circle", {
    cx: "126",
    cy: "84",
    r: "16"
  }));
});
no.set("duotone", function(e) {
  return v.createElement(v.Fragment, null, v.createElement("circle", {
    cx: "128",
    cy: "128",
    r: "96",
    opacity: "0.2"
  }), v.createElement("circle", {
    cx: "128",
    cy: "128",
    r: "96",
    fill: "none",
    stroke: e,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), v.createElement("polyline", {
    points: "120 120 128 120 128 176 136 176",
    fill: "none",
    stroke: e,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), v.createElement("circle", {
    cx: "126",
    cy: "84",
    r: "12"
  }));
});
no.set("fill", function() {
  return v.createElement(v.Fragment, null, v.createElement("path", {
    d: "M128,24A104,104,0,1,0,232,128,104.2,104.2,0,0,0,128,24Zm-2,48a12,12,0,1,1-12,12A12,12,0,0,1,126,72Zm10,112h-8a8,8,0,0,1-8-8V128a8,8,0,0,1,0-16h8a8,8,0,0,1,8,8v48a8,8,0,0,1,0,16Z"
  }));
});
no.set("light", function(e) {
  return v.createElement(v.Fragment, null, v.createElement("circle", {
    cx: "128",
    cy: "128",
    r: "96",
    fill: "none",
    stroke: e,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "12"
  }), v.createElement("polyline", {
    points: "120 120 128 120 128 176 136 176",
    fill: "none",
    stroke: e,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "12"
  }), v.createElement("circle", {
    cx: "126",
    cy: "84",
    r: "10"
  }));
});
no.set("thin", function(e) {
  return v.createElement(v.Fragment, null, v.createElement("circle", {
    cx: "128",
    cy: "128",
    r: "96",
    fill: "none",
    stroke: e,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "8"
  }), v.createElement("polyline", {
    points: "120 120 128 120 128 176 136 176",
    fill: "none",
    stroke: e,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "8"
  }), v.createElement("circle", {
    cx: "126",
    cy: "84",
    r: "8"
  }));
});
no.set("regular", function(e) {
  return v.createElement(v.Fragment, null, v.createElement("circle", {
    cx: "128",
    cy: "128",
    r: "96",
    fill: "none",
    stroke: e,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), v.createElement("polyline", {
    points: "120 120 128 120 128 176 136 176",
    fill: "none",
    stroke: e,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), v.createElement("circle", {
    cx: "126",
    cy: "84",
    r: "12"
  }));
});
var Pd = function(t, o) {
  return At(t, o, no);
}, Vs = /* @__PURE__ */ bt(function(e, t) {
  return v.createElement(yt, Object.assign({
    ref: t
  }, e, {
    renderPath: Pd
  }));
});
Vs.displayName = "Info";
var ro = /* @__PURE__ */ new Map();
ro.set("bold", function(e) {
  return v.createElement(v.Fragment, null, v.createElement("path", {
    d: "M132.4,190.7l50.4,32c6.5,4.1,14.5-2,12.6-9.5l-14.6-57.4a8.7,8.7,0,0,1,2.9-8.8l45.2-37.7c5.9-4.9,2.9-14.8-4.8-15.3l-59-3.8a8.3,8.3,0,0,1-7.3-5.4l-22-55.4a8.3,8.3,0,0,0-15.6,0l-22,55.4a8.3,8.3,0,0,1-7.3,5.4L31.9,94c-7.7.5-10.7,10.4-4.8,15.3L72.3,147a8.7,8.7,0,0,1,2.9,8.8L61.7,209c-2.3,9,7.3,16.3,15,11.4l46.9-29.7A8.2,8.2,0,0,1,132.4,190.7Z",
    fill: "none",
    stroke: e,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "24"
  }));
});
ro.set("duotone", function(e) {
  return v.createElement(v.Fragment, null, v.createElement("path", {
    d: "M132.4,190.7l50.4,32c6.5,4.1,14.5-2,12.6-9.5l-14.6-57.4a8.7,8.7,0,0,1,2.9-8.8l45.2-37.7c5.9-4.9,2.9-14.8-4.8-15.3l-59-3.8a8.3,8.3,0,0,1-7.3-5.4l-22-55.4a8.3,8.3,0,0,0-15.6,0l-22,55.4a8.3,8.3,0,0,1-7.3,5.4L31.9,94c-7.7.5-10.7,10.4-4.8,15.3L72.3,147a8.7,8.7,0,0,1,2.9,8.8L61.7,209c-2.3,9,7.3,16.3,15,11.4l46.9-29.7A8.2,8.2,0,0,1,132.4,190.7Z",
    opacity: "0.2"
  }), v.createElement("path", {
    d: "M132.4,190.7l50.4,32c6.5,4.1,14.5-2,12.6-9.5l-14.6-57.4a8.7,8.7,0,0,1,2.9-8.8l45.2-37.7c5.9-4.9,2.9-14.8-4.8-15.3l-59-3.8a8.3,8.3,0,0,1-7.3-5.4l-22-55.4a8.3,8.3,0,0,0-15.6,0l-22,55.4a8.3,8.3,0,0,1-7.3,5.4L31.9,94c-7.7.5-10.7,10.4-4.8,15.3L72.3,147a8.7,8.7,0,0,1,2.9,8.8L61.7,209c-2.3,9,7.3,16.3,15,11.4l46.9-29.7A8.2,8.2,0,0,1,132.4,190.7Z",
    fill: "none",
    stroke: e,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }));
});
ro.set("fill", function() {
  return v.createElement(v.Fragment, null, v.createElement("path", {
    d: "M239.2,97.4A16.4,16.4,0,0,0,224.6,86l-59.4-4.1-22-55.5A16.4,16.4,0,0,0,128,16h0a16.4,16.4,0,0,0-15.2,10.4L90.4,82.2,31.4,86A16.5,16.5,0,0,0,16.8,97.4,16.8,16.8,0,0,0,22,115.5l45.4,38.4L53.9,207a18.5,18.5,0,0,0,7,19.6,18,18,0,0,0,20.1.6l46.9-29.7h.2l50.5,31.9a16.1,16.1,0,0,0,8.7,2.6,16.5,16.5,0,0,0,15.8-20.8l-14.3-58.1L234,115.5A16.8,16.8,0,0,0,239.2,97.4Z"
  }));
});
ro.set("light", function(e) {
  return v.createElement(v.Fragment, null, v.createElement("path", {
    d: "M132.4,190.7l50.4,32c6.5,4.1,14.5-2,12.6-9.5l-14.6-57.4a8.7,8.7,0,0,1,2.9-8.8l45.2-37.7c5.9-4.9,2.9-14.8-4.8-15.3l-59-3.8a8.3,8.3,0,0,1-7.3-5.4l-22-55.4a8.3,8.3,0,0,0-15.6,0l-22,55.4a8.3,8.3,0,0,1-7.3,5.4L31.9,94c-7.7.5-10.7,10.4-4.8,15.3L72.3,147a8.7,8.7,0,0,1,2.9,8.8L61.7,209c-2.3,9,7.3,16.3,15,11.4l46.9-29.7A8.2,8.2,0,0,1,132.4,190.7Z",
    fill: "none",
    stroke: e,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "12"
  }));
});
ro.set("thin", function(e) {
  return v.createElement(v.Fragment, null, v.createElement("path", {
    d: "M132.4,190.7l50.4,32c6.5,4.1,14.5-2,12.6-9.5l-14.6-57.4a8.7,8.7,0,0,1,2.9-8.8l45.2-37.7c5.9-4.9,2.9-14.8-4.8-15.3l-59-3.8a8.3,8.3,0,0,1-7.3-5.4l-22-55.4a8.3,8.3,0,0,0-15.6,0l-22,55.4a8.3,8.3,0,0,1-7.3,5.4L31.9,94c-7.7.5-10.7,10.4-4.8,15.3L72.3,147a8.7,8.7,0,0,1,2.9,8.8L61.7,209c-2.3,9,7.3,16.3,15,11.4l46.9-29.7A8.2,8.2,0,0,1,132.4,190.7Z",
    fill: "none",
    stroke: e,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "8"
  }));
});
ro.set("regular", function(e) {
  return v.createElement(v.Fragment, null, v.createElement("path", {
    d: "M132.4,190.7l50.4,32c6.5,4.1,14.5-2,12.6-9.5l-14.6-57.4a8.7,8.7,0,0,1,2.9-8.8l45.2-37.7c5.9-4.9,2.9-14.8-4.8-15.3l-59-3.8a8.3,8.3,0,0,1-7.3-5.4l-22-55.4a8.3,8.3,0,0,0-15.6,0l-22,55.4a8.3,8.3,0,0,1-7.3,5.4L31.9,94c-7.7.5-10.7,10.4-4.8,15.3L72.3,147a8.7,8.7,0,0,1,2.9,8.8L61.7,209c-2.3,9,7.3,16.3,15,11.4l46.9-29.7A8.2,8.2,0,0,1,132.4,190.7Z",
    fill: "none",
    stroke: e,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }));
});
var Md = function(t, o) {
  return At(t, o, ro);
}, ti = /* @__PURE__ */ bt(function(e, t) {
  return v.createElement(yt, Object.assign({
    ref: t
  }, e, {
    renderPath: Md
  }));
});
ti.displayName = "Star";
var io = /* @__PURE__ */ new Map();
io.set("bold", function(e) {
  return v.createElement(v.Fragment, null, v.createElement("line", {
    x1: "128",
    y1: "104",
    x2: "128",
    y2: "136",
    fill: "none",
    stroke: e,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "24"
  }), v.createElement("path", {
    d: "M114.2,40l-88,152A16,16,0,0,0,40,216H216a16,16,0,0,0,13.8-24l-88-152A15.9,15.9,0,0,0,114.2,40Z",
    fill: "none",
    stroke: e,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "24"
  }), v.createElement("circle", {
    cx: "128",
    cy: "176",
    r: "16"
  }));
});
io.set("duotone", function(e) {
  return v.createElement(v.Fragment, null, v.createElement("path", {
    d: "M114.2,40l-88,152A16,16,0,0,0,40,216H216a16,16,0,0,0,13.8-24l-88-152A15.9,15.9,0,0,0,114.2,40Z",
    opacity: "0.2"
  }), v.createElement("line", {
    x1: "128",
    y1: "112",
    x2: "128",
    y2: "144",
    fill: "none",
    stroke: e,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), v.createElement("path", {
    d: "M114.2,40l-88,152A16,16,0,0,0,40,216H216a16,16,0,0,0,13.8-24l-88-152A15.9,15.9,0,0,0,114.2,40Z",
    fill: "none",
    stroke: e,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), v.createElement("circle", {
    cx: "128",
    cy: "180",
    r: "12"
  }));
});
io.set("fill", function() {
  return v.createElement(v.Fragment, null, v.createElement("path", {
    d: "M236.7,188,148.8,36a24,24,0,0,0-41.6,0h0L19.3,188A23.9,23.9,0,0,0,40,224H216a23.9,23.9,0,0,0,20.7-36ZM120,104a8,8,0,0,1,16,0v40a8,8,0,0,1-16,0Zm8,88a12,12,0,1,1,12-12A12,12,0,0,1,128,192Z"
  }));
});
io.set("light", function(e) {
  return v.createElement(v.Fragment, null, v.createElement("line", {
    x1: "128",
    y1: "104",
    x2: "128",
    y2: "144",
    fill: "none",
    stroke: e,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "12"
  }), v.createElement("path", {
    d: "M114.2,40l-88,152A16,16,0,0,0,40,216H216a16,16,0,0,0,13.8-24l-88-152A15.9,15.9,0,0,0,114.2,40Z",
    fill: "none",
    stroke: e,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "12"
  }), v.createElement("circle", {
    cx: "128",
    cy: "180",
    r: "10"
  }));
});
io.set("thin", function(e) {
  return v.createElement(v.Fragment, null, v.createElement("line", {
    x1: "128",
    y1: "104",
    x2: "128",
    y2: "144",
    fill: "none",
    stroke: e,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "8"
  }), v.createElement("path", {
    d: "M114.2,40l-88,152A16,16,0,0,0,40,216H216a16,16,0,0,0,13.8-24l-88-152A15.9,15.9,0,0,0,114.2,40Z",
    fill: "none",
    stroke: e,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "8"
  }), v.createElement("circle", {
    cx: "128",
    cy: "180",
    r: "8"
  }));
});
io.set("regular", function(e) {
  return v.createElement(v.Fragment, null, v.createElement("line", {
    x1: "128",
    y1: "104",
    x2: "128",
    y2: "144",
    fill: "none",
    stroke: e,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), v.createElement("path", {
    d: "M114.2,40l-88,152A16,16,0,0,0,40,216H216a16,16,0,0,0,13.8-24l-88-152A15.9,15.9,0,0,0,114.2,40Z",
    fill: "none",
    stroke: e,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), v.createElement("circle", {
    cx: "128",
    cy: "180",
    r: "12"
  }));
});
var Bd = function(t, o) {
  return At(t, o, io);
}, Ws = /* @__PURE__ */ bt(function(e, t) {
  return v.createElement(yt, Object.assign({
    ref: t
  }, e, {
    renderPath: Bd
  }));
});
Ws.displayName = "Warning";
var ao = /* @__PURE__ */ new Map();
ao.set("bold", function(e) {
  return v.createElement(v.Fragment, null, v.createElement("circle", {
    cx: "128",
    cy: "128",
    r: "96",
    fill: "none",
    stroke: e,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "24"
  }), v.createElement("line", {
    x1: "128",
    y1: "80",
    x2: "128",
    y2: "132",
    fill: "none",
    stroke: e,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "24"
  }), v.createElement("circle", {
    cx: "128",
    cy: "172",
    r: "16"
  }));
});
ao.set("duotone", function(e) {
  return v.createElement(v.Fragment, null, v.createElement("circle", {
    cx: "128",
    cy: "128",
    r: "96",
    opacity: "0.2"
  }), v.createElement("circle", {
    cx: "128",
    cy: "128",
    r: "96",
    fill: "none",
    stroke: e,
    strokeMiterlimit: "10",
    strokeWidth: "16"
  }), v.createElement("line", {
    x1: "128",
    y1: "80",
    x2: "128",
    y2: "136",
    fill: "none",
    stroke: e,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), v.createElement("circle", {
    cx: "128",
    cy: "172",
    r: "12"
  }));
});
ao.set("fill", function() {
  return v.createElement(v.Fragment, null, v.createElement("path", {
    d: "M128,24A104,104,0,1,0,232,128,104.2,104.2,0,0,0,128,24Zm-8,56a8,8,0,0,1,16,0v56a8,8,0,0,1-16,0Zm8,104a12,12,0,1,1,12-12A12,12,0,0,1,128,184Z"
  }));
});
ao.set("light", function(e) {
  return v.createElement(v.Fragment, null, v.createElement("circle", {
    cx: "128",
    cy: "128",
    r: "96",
    fill: "none",
    stroke: e,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "12"
  }), v.createElement("line", {
    x1: "128",
    y1: "80",
    x2: "128",
    y2: "136",
    fill: "none",
    stroke: e,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "12"
  }), v.createElement("circle", {
    cx: "128",
    cy: "172",
    r: "10"
  }));
});
ao.set("thin", function(e) {
  return v.createElement(v.Fragment, null, v.createElement("circle", {
    cx: "128",
    cy: "128",
    r: "96",
    fill: "none",
    stroke: e,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "8"
  }), v.createElement("line", {
    x1: "128",
    y1: "80",
    x2: "128",
    y2: "136",
    fill: "none",
    stroke: e,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "8"
  }), v.createElement("circle", {
    cx: "128",
    cy: "172",
    r: "8"
  }));
});
ao.set("regular", function(e) {
  return v.createElement(v.Fragment, null, v.createElement("circle", {
    cx: "128",
    cy: "128",
    r: "96",
    fill: "none",
    stroke: e,
    strokeMiterlimit: "10",
    strokeWidth: "16"
  }), v.createElement("line", {
    x1: "128",
    y1: "80",
    x2: "128",
    y2: "136",
    fill: "none",
    stroke: e,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), v.createElement("circle", {
    cx: "128",
    cy: "172",
    r: "12"
  }));
});
var Id = function(t, o) {
  return At(t, o, ao);
}, Us = /* @__PURE__ */ bt(function(e, t) {
  return v.createElement(yt, Object.assign({
    ref: t
  }, e, {
    renderPath: Id
  }));
});
Us.displayName = "WarningCircle";
var so = /* @__PURE__ */ new Map();
so.set("bold", function(e) {
  return v.createElement(v.Fragment, null, v.createElement("line", {
    x1: "128",
    y1: "80",
    x2: "128",
    y2: "132",
    fill: "none",
    stroke: e,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "24"
  }), v.createElement("path", {
    d: "M164.5,32h-73a7.9,7.9,0,0,0-5.6,2.3L34.3,85.9A7.9,7.9,0,0,0,32,91.5v73a7.9,7.9,0,0,0,2.3,5.6l51.6,51.6a7.9,7.9,0,0,0,5.6,2.3h73a7.9,7.9,0,0,0,5.6-2.3l51.6-51.6a7.9,7.9,0,0,0,2.3-5.6v-73a7.9,7.9,0,0,0-2.3-5.6L170.1,34.3A7.9,7.9,0,0,0,164.5,32Z",
    fill: "none",
    stroke: e,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "24"
  }), v.createElement("circle", {
    cx: "128",
    cy: "172",
    r: "16"
  }));
});
so.set("duotone", function(e) {
  return v.createElement(v.Fragment, null, v.createElement("path", {
    d: "M164.5,32h-73a7.9,7.9,0,0,0-5.6,2.3L34.3,85.9A7.9,7.9,0,0,0,32,91.5v73a7.9,7.9,0,0,0,2.3,5.6l51.6,51.6a7.9,7.9,0,0,0,5.6,2.3h73a7.9,7.9,0,0,0,5.6-2.3l51.6-51.6a7.9,7.9,0,0,0,2.3-5.6v-73a7.9,7.9,0,0,0-2.3-5.6L170.1,34.3A7.9,7.9,0,0,0,164.5,32Z",
    opacity: "0.2"
  }), v.createElement("line", {
    x1: "128",
    y1: "80",
    x2: "128",
    y2: "136",
    fill: "none",
    stroke: e,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), v.createElement("path", {
    d: "M164.5,32h-73a7.9,7.9,0,0,0-5.6,2.3L34.3,85.9A7.9,7.9,0,0,0,32,91.5v73a7.9,7.9,0,0,0,2.3,5.6l51.6,51.6a7.9,7.9,0,0,0,5.6,2.3h73a7.9,7.9,0,0,0,5.6-2.3l51.6-51.6a7.9,7.9,0,0,0,2.3-5.6v-73a7.9,7.9,0,0,0-2.3-5.6L170.1,34.3A7.9,7.9,0,0,0,164.5,32Z",
    fill: "none",
    stroke: e,
    strokeMiterlimit: "10",
    strokeWidth: "16"
  }), v.createElement("circle", {
    cx: "128",
    cy: "172",
    r: "12"
  }));
});
so.set("fill", function() {
  return v.createElement(v.Fragment, null, v.createElement("path", {
    d: "M227.3,80.2,175.8,28.7A16.1,16.1,0,0,0,164.5,24h-73a16.1,16.1,0,0,0-11.3,4.7L28.7,80.2A16.1,16.1,0,0,0,24,91.5v73a16.1,16.1,0,0,0,4.7,11.3l51.5,51.5A16.1,16.1,0,0,0,91.5,232h73a16.1,16.1,0,0,0,11.3-4.7l51.5-51.5a16.1,16.1,0,0,0,4.7-11.3v-73A16.1,16.1,0,0,0,227.3,80.2ZM120,80a8,8,0,0,1,16,0v56a8,8,0,0,1-16,0Zm8,104a12,12,0,1,1,12-12A12,12,0,0,1,128,184Z"
  }));
});
so.set("light", function(e) {
  return v.createElement(v.Fragment, null, v.createElement("line", {
    x1: "128",
    y1: "80",
    x2: "128",
    y2: "136",
    fill: "none",
    stroke: e,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "12"
  }), v.createElement("path", {
    d: "M164.5,32h-73a7.9,7.9,0,0,0-5.6,2.3L34.3,85.9A7.9,7.9,0,0,0,32,91.5v73a7.9,7.9,0,0,0,2.3,5.6l51.6,51.6a7.9,7.9,0,0,0,5.6,2.3h73a7.9,7.9,0,0,0,5.6-2.3l51.6-51.6a7.9,7.9,0,0,0,2.3-5.6v-73a7.9,7.9,0,0,0-2.3-5.6L170.1,34.3A7.9,7.9,0,0,0,164.5,32Z",
    fill: "none",
    stroke: e,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "12"
  }), v.createElement("circle", {
    cx: "128",
    cy: "172",
    r: "10"
  }));
});
so.set("thin", function(e) {
  return v.createElement(v.Fragment, null, v.createElement("line", {
    x1: "128",
    y1: "80",
    x2: "128",
    y2: "136",
    fill: "none",
    stroke: e,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "8"
  }), v.createElement("path", {
    d: "M164.5,32h-73a7.9,7.9,0,0,0-5.6,2.3L34.3,85.9A7.9,7.9,0,0,0,32,91.5v73a7.9,7.9,0,0,0,2.3,5.6l51.6,51.6a7.9,7.9,0,0,0,5.6,2.3h73a7.9,7.9,0,0,0,5.6-2.3l51.6-51.6a7.9,7.9,0,0,0,2.3-5.6v-73a7.9,7.9,0,0,0-2.3-5.6L170.1,34.3A7.9,7.9,0,0,0,164.5,32Z",
    fill: "none",
    stroke: e,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "8"
  }), v.createElement("circle", {
    cx: "128",
    cy: "172",
    r: "8"
  }));
});
so.set("regular", function(e) {
  return v.createElement(v.Fragment, null, v.createElement("line", {
    x1: "128",
    y1: "80",
    x2: "128",
    y2: "136",
    fill: "none",
    stroke: e,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), v.createElement("path", {
    d: "M164.5,32h-73a7.9,7.9,0,0,0-5.6,2.3L34.3,85.9A7.9,7.9,0,0,0,32,91.5v73a7.9,7.9,0,0,0,2.3,5.6l51.6,51.6a7.9,7.9,0,0,0,5.6,2.3h73a7.9,7.9,0,0,0,5.6-2.3l51.6-51.6a7.9,7.9,0,0,0,2.3-5.6v-73a7.9,7.9,0,0,0-2.3-5.6L170.1,34.3A7.9,7.9,0,0,0,164.5,32Z",
    fill: "none",
    stroke: e,
    strokeMiterlimit: "10",
    strokeWidth: "16"
  }), v.createElement("circle", {
    cx: "128",
    cy: "172",
    r: "12"
  }));
});
var Dd = function(t, o) {
  return At(t, o, so);
}, oi = /* @__PURE__ */ bt(function(e, t) {
  return v.createElement(yt, Object.assign({
    ref: t
  }, e, {
    renderPath: Dd
  }));
});
oi.displayName = "WarningOctagon";
var lo = /* @__PURE__ */ new Map();
lo.set("bold", function(e) {
  return v.createElement(v.Fragment, null, v.createElement("line", {
    x1: "200",
    y1: "56",
    x2: "56",
    y2: "200",
    fill: "none",
    stroke: e,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "24"
  }), v.createElement("line", {
    x1: "200",
    y1: "200",
    x2: "56",
    y2: "56",
    fill: "none",
    stroke: e,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "24"
  }));
});
lo.set("duotone", function(e) {
  return v.createElement(v.Fragment, null, v.createElement("line", {
    x1: "200",
    y1: "56",
    x2: "56",
    y2: "200",
    stroke: e,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), v.createElement("line", {
    x1: "200",
    y1: "200",
    x2: "56",
    y2: "56",
    stroke: e,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }));
});
lo.set("fill", function() {
  return v.createElement(v.Fragment, null, v.createElement("path", {
    d: "M139.3,128l66.4-66.3a8.1,8.1,0,0,0-11.4-11.4L128,116.7,61.7,50.3A8.1,8.1,0,0,0,50.3,61.7L116.7,128,50.3,194.3a8.1,8.1,0,0,0,0,11.4,8.2,8.2,0,0,0,11.4,0L128,139.3l66.3,66.4a8.2,8.2,0,0,0,11.4,0,8.1,8.1,0,0,0,0-11.4Z"
  }));
});
lo.set("light", function(e) {
  return v.createElement(v.Fragment, null, v.createElement("line", {
    x1: "200",
    y1: "56",
    x2: "56",
    y2: "200",
    fill: "none",
    stroke: e,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "12"
  }), v.createElement("line", {
    x1: "200",
    y1: "200",
    x2: "56",
    y2: "56",
    fill: "none",
    stroke: e,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "12"
  }));
});
lo.set("thin", function(e) {
  return v.createElement(v.Fragment, null, v.createElement("line", {
    x1: "200",
    y1: "56",
    x2: "56",
    y2: "200",
    fill: "none",
    stroke: e,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "8"
  }), v.createElement("line", {
    x1: "200",
    y1: "200",
    x2: "56",
    y2: "56",
    fill: "none",
    stroke: e,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "8"
  }));
});
lo.set("regular", function(e) {
  return v.createElement(v.Fragment, null, v.createElement("line", {
    x1: "200",
    y1: "56",
    x2: "56",
    y2: "200",
    stroke: e,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), v.createElement("line", {
    x1: "200",
    y1: "200",
    x2: "56",
    y2: "56",
    stroke: e,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }));
});
var Nd = function(t, o) {
  return At(t, o, lo);
}, gn = /* @__PURE__ */ bt(function(e, t) {
  return v.createElement(yt, Object.assign({
    ref: t
  }, e, {
    renderPath: Nd
  }));
});
gn.displayName = "X";
const jd = (e, t = "primary") => {
  var i;
  const o = Me[t].alertColor, r = ((i = e == null ? void 0 : e.palette) == null ? void 0 : i[t].alertColor) ?? o;
  return {
    bgColor: r ?? o,
    iconColor: r ?? o
  };
}, $d = {
  success: /* @__PURE__ */ S(zs, {}),
  info: /* @__PURE__ */ S(Vs, {}),
  warning: /* @__PURE__ */ S(Ws, {}),
  error: /* @__PURE__ */ S(Us, {}),
  gray: /* @__PURE__ */ S(oi, {}),
  dark: /* @__PURE__ */ S(oi, {})
}, Ld = Q(js)(({
  "data-severity": e = "success",
  theme: t,
  "data-color": o = "primary"
}) => {
  const r = jd(t, o);
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
}), uy = ({
  severity: e = "success",
  color: t = "primary",
  iconMapping: o,
  icon: r,
  alertTitle: i,
  ...a
}) => /* @__PURE__ */ ve(
  Ld,
  {
    "data-severity": e,
    "data-color": t,
    icon: r ?? $d[e],
    ...a,
    children: [
      i && /* @__PURE__ */ S(ql, { sx: { color: e == "dark" ? "#FFFFFF" : "#1E1E1E" }, children: i }),
      a.children
    ]
  }
), zd = Ke(/* @__PURE__ */ S("path", {
  d: "M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"
}), "Person");
function Vd(e) {
  return de("MuiAvatar", e);
}
ce("MuiAvatar", ["root", "colorDefault", "circular", "rounded", "square", "img", "fallback"]);
const Wd = (e) => {
  const {
    classes: t,
    variant: o,
    colorDefault: r
  } = e;
  return ge({
    root: ["root", o, r && "colorDefault"],
    img: ["img"],
    fallback: ["fallback"]
  }, Vd, t);
}, Ud = Q("div", {
  name: "MuiAvatar",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: o
    } = e;
    return [t.root, t[o.variant], o.colorDefault && t.colorDefault];
  }
})(fe(({
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
}))), Hd = Q("img", {
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
}), Qd = Q(zd, {
  name: "MuiAvatar",
  slot: "Fallback",
  overridesResolver: (e, t) => t.fallback
})({
  width: "75%",
  height: "75%"
});
function Kd({
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
const Hs = /* @__PURE__ */ g.forwardRef(function(t, o) {
  const r = he({
    props: t,
    name: "MuiAvatar"
  }), {
    alt: i,
    children: a,
    className: l,
    component: s = "div",
    slots: c = {},
    slotProps: u = {},
    imgProps: d,
    sizes: f,
    src: h,
    srcSet: m,
    variant: C = "circular",
    ...y
  } = r;
  let x = null;
  const E = {
    ...r,
    component: s,
    variant: C
  }, T = Kd({
    ...d,
    ...typeof u.img == "function" ? u.img(E) : u.img,
    src: h,
    srcSet: m
  }), w = h || m, b = w && T !== "error";
  E.colorDefault = !b, delete E.ownerState;
  const k = Wd(E), [A, M] = le("img", {
    className: k.img,
    elementType: Hd,
    externalForwardedProps: {
      slots: c,
      slotProps: {
        img: {
          ...d,
          ...u.img
        }
      }
    },
    additionalProps: {
      alt: i,
      src: h,
      srcSet: m,
      sizes: f
    },
    ownerState: E
  });
  return b ? x = /* @__PURE__ */ S(A, {
    ...M
  }) : a || a === 0 ? x = a : w && i ? x = i[0] : x = /* @__PURE__ */ S(Qd, {
    ownerState: E,
    className: k.fallback
  }), /* @__PURE__ */ S(Ud, {
    as: s,
    className: _(k.root, l),
    ref: o,
    ...y,
    ownerState: E,
    children: x
  });
});
process.env.NODE_ENV !== "production" && (Hs.propTypes = {
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
const Yd = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMAAAADACAYAAABS3GwHAAAACXBIWXMAACE4AAAhOAFFljFgAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAABBtSURBVHgB7Z3dbtTWFseXB2gPPYWmcNQgQGWCRKVEaklKpVY6p3RyWVIVeIIOT0D6BIQngD5B0ycgXIReJlD1ojeQctRUgqpxUEAkUnISAoGQD5/993gHJ/HM2B7bY6+9ftKOPZ5EynjWf6+P/WGLhERwHKdDHcpeO6Gaft3hOyff6yAWvQZs39H2rk/r15ZlLZLQMhYJkfAZeq9qp33nZcoWCGDC16aVKMZJiIQIoAmewVdU+8o7lql+D54HxqkmiNs4KlHYJNRFBLADz+DRo5+nmsH3UrGBGMZVuykeYjciANoy+gv0xujz3MO3AsKmcdVGqCYI4/MIYwXg6+mveEeuRt8ICGFECeEnMhTjBKAMv0K1nr5KZhp9EDbVPMMPSgwTZBBGCMAX4nxHtRBHqA8EcN0Ur8BaAJ7hD6p2maS3j4qtGkQwzLmSxFIAYviJM6zaVY5CYCUAMfzUGSZmQmAhADH8zLlKTEKjwgtAGT8MH6VMMfxssVUbKnqyXFgBeOXMa1T8kdqiY6s2qIRwkwpIiQoGwh3VflSnYyTGnwfKqo3gO1GtTAWjUALwwp0pqg1iCfmiqtqY+o6+owJRiBDI61nQ61dIKALDVJBqUe4FoIwfI7gwfklyi4VNBUiScxsCebH+dXV6g8T4i0hZtWH1HV7zytS5JJcewAt5kOSWSeCArVp/HkOi3HkAZfxVdbhHYvycKKt2L48Jcq4EoG7QEEm8zxV8p8Ped5wbchECeTEiDP8CCSaAhTiX8rAire0CkHjfWGzKQV7QVgGI8RuPTW0WQdtyAGX8mMYgya7ZlKk2ety2KS1t8QDeB0bPL8muAJAL9LdjPXLmHsArc4rxC35gC20pk2bqATzj/5EEoT7VLKdPZCYAX8wvCI3INBzKJATyxfyC0AyEQ5klxql7ACl1CjGBJ+hLu0SaqgBMN/61tXVaWFiilZVVevbsBb18+cpt4OXL1W2/u3fvXnrnnbfd4/79/6CDB/+51fbt20uGYlPK4wSpCcCb3mBUnR8GD0OfnZ13204jjwtEcODAu3TkyCHq7DxMhmFTzROkMm0iTQFgHr8Rc3vm55doZmbONfr19XVKE3gIiOD48Q/o8OH3yBCwge9FSoFUBODN+LtCjEFvPzX1hGz7SepGXw+ESqdOfeiKwQCwxHKIEiZxAXCv9efB8HcCIXR1HaVy+SgxJ/ExgkQF4CW9iPtZjvIixJmc/Dux2D5pDPAIiVeGEhMA56R3ZeUV3b//0K3oFAHkCN3dJ92qEkNsSjApTlIAWMB+mZiBcOfhw0e5CXfCgtIpRMDUG+D5Bd9TAiQiAI5xP2L9Bw8e0fT0EyoyyAt6ek4SQy4qEYxQi7QsAI6DXQh57t79063pcwDjCJ9+2sMtJEokH0hiLhDKnWViAoz/t9/+y8b4AT4LPhNGpBmh15G3REsC8EKfKjFBG39eqzytgCkYDEVQ8faLjU3sEIhb6MPZ+P2gVPr55x9zCocQCnXFrQq14gHYhD6mGD9g6AkQCl2jmMQSgLdhbZWYgITXBOPXQAR3704WrrTbgKr3wJTIxPUAsRWXN/74429WCW9Y8JlR5mVELJuMLAAv8S0TA2ZmZgtf528FzGdCY0JvnIQ4kgC8xJfFLE/E/ZOTU2Q6GOVmlA9ciboVe1QPUCUmvT+Mn1EMHBuMeN+//4CYAOOPNB0ntAA49f4Ifebm5kmogUl+mOnKhMEoXiCKB2CzwAVuX9gOI48YyQuEEoDX+1eJAZjdaVLJMywojeLeMCG0FwjrAdj0/rb9mIRg8rTKrUVCe4GmAuDU+yP2l96/Pnq5JxNCeYEwHqBKTJDYvzmMxgVCeYEwAijUk7/rga1LpPdvDrwA7hUTmnqBhgLgNuorhOPx4zliAoz/fKNfaOYB2KzxnZ1dICEcWWzwlSHVRm/WFYC3O2/bHl2TJE+fsvpCUwdh0NISmwmClUYzRRt5AEa9v4z6RoXZSHndMKiRACrEBBOnO7fK06esQsZqvWQ4UACckl+48+VlEUBUMDLMKGyE8QeG8/U8QMPMuUhI7x8fRuVQEDibYZcAPFfBZltzEUB8mI2b9AaFQUEegNWe/svLz0mIB7POI3BMIEgAbMIfwGwfnEzRj3NixK7OPUgAFWIEkmAhHgw7j8rOMGibALwBA1Z7+8v8H8HHrmrQTg/AKvwBMgIcH4YhENhm4zsFUCFB4E3F/2JLAN7CFxZzfwShAdvKoX4PIMYvmMJX+qQUdJET+/ezfE5WJjB+Qn1Fn4gHEOrCuPOo6JNS0EVOYD98IR6MPUBZ5wGuAOJuLV0EmD4qNBMYdx4w/jJOtAcoE1MOHHiXhHjg4XqMOY0fJf8LjkgSHB/mAnBz3pL/BUcOH36PhHgwF0AZP9gLAImceIHowPj37mWbBIOaB/CyYVYT4HbS2XmYhGgcPMg+d3IrQfAAZWKOCCA6nZ2HyADKRgjAAHeeKAgbDek0TkAAJ4g5+EKPHDGiR0sEgzym6wFYx/+aY8c6SQjH8eMfkCGYkQMAlEMlDGoORn8PHTKmdGxGDqDp6jpKQmNOnfqQDKIj7pPiC0m5fFS8QAPQ+xsU/gBzQiCAZFi8QH0MvDdlozwAgBeQkeHdoPfHvTENY6pAGniB7u6TJGzHsNhf02GcAMCRI4dNqnQ0BffDsNhfY1YS7Of06VOSECtwD0z2iMYKADGvoW5/Gz09J43OiYwVAEDVw8TET4PPb2jos4XRAgDwAgcOsF74EQgmCEoxQATgVoU++6zbqDAA4d+ZMz0k1ASwSIYDg/jii4+NEIFJnzUEiyIADxMMQ4x/F4vGh0B+OBuIGH8wEIBNwhbaUDglxkh4xfgDsSUECgAi+PLLPhYlUpQ6xfjrg6FQEUAdMEiE3nNycqpwT5rBCO9HH31o9DhHCGwIwCahLsePd7qrySCC2dl5KgL4fz/55CPp9ZtjiwcIQa1u3k0zM7P08OGj3D54D/9nT0+XbAMTnkUIYJqEUMAboE1NPSHbfpwbISDcQayPJhP8ImFbjuNgi7h7JESm3R5BDL9l+ixva8T/kRCbhYUlVwxPny6knizD0PX8fVnT0DLvW/ipRDBFBq0NThMkymjPnr1wWxLgIR+I69Fkl7vEWLQs6319JydIBJAI2lABvAFEsLT0gpaXX7gPnl5bW6eVldVdnkI/yQaJLBoG4nBN9jNKDdg86Ttrk5A4MFyEKRKq5BJXAHou0O8kCGaxTQATJAhmYeOHToJRCUIibNwOEYKZqATYtf2S9wKjwTYJghmM65NS0EVBYM5WyO8XwG0SBDMY1yeWPpERYcEgulTYb+NkywN4eYBUgwTuTGjjBzvXBI+TIPBm3P9ipwBukiDwZsT/wvK/kPEAgTnuBDj/hW0ewMsDxkkQeDK+80LQvkASBglcGdl5wdp5QcIggTHve1HOFrs8gJRDBaaM7DR+UG+lxVXVKiQ0BItb1tY23IUutcUuG1tHLHjB+/qoabZ+GGsI9u3b455jYQzADta4/mbRzNvue7iOcxyFpowEXbSCLkoY9AYYL4z22bPn7uouGPfy8vPAVV3tQosDosCSSS0QnIs4XGzV+3cFvWHV+wslgmvqMEgGAaNeWFh0DV0bfV73AAoLxAEhoGF5pRaGYQwrAVwKeqORACrqMEZMQc8OQ/cvYC/a9odx0aKAILBc0wBP0acEEJjXWo3+SokAAqgQA/wGj21MktqxgQsQAcSgRcFIEJj701fvzWYCqKrDj1RQ5ueX3AaDRxPCAxFgdwsIouAhU1UJ4Kd6bzYTQOGSYRg8evmZmTljQpq0Qd4AQWAzLgiiQNRNfjUNBQCUCK6owxDlGDH67CiYGIaUAK42+oUwAsilFxCjbz8FEEOXf+5/EE0FAPLiBZDIYmfmx49nC1+e5AbEgGcuQxB6wK7N1C19+gkrgLZ6AfT22IVZEtligOQZXqHNzylo2vuDUAIAWXsB3dvb9hMJcQpKG71CqN4fRBFAJl5gZeWVa/QS2/Pi2LFOVwwZCSFU7w9CCwCk6QUkzDGDDITQtPLjJ6oAEvcCYvhmgrAIQki4emSr1h+29weRBACUCDBB7hq1iBi+ABIWQsNR3yAiCwAoEeCZYr0UAzF8IQhUjLq7T7YSGjUd9Q0irgAqFHGmKJJbPGt3bq4Yz9oV2kMLOcIFJYDI69ljCQAoEWCSXLXZ7+ly5l9/PSJBCEtEIYQue+6kFQE0TYhh+Ah3pJwpxEGPI2BQrQE2RUx8/cQWAKiXECPO//PPv2XOvZAIEMKZM931pmVHTnz9tCQA4F80g3DnwYNHND39hAQhaQLCotihjyYJAZTV4Z4Kdzok3BHSxhcW2dRC6KNpWQDgzp17F5aXn98gQciIo0f/Ve3r644d+mhKlABnz/aNWJZznQQhA1TUcT0J4weJCACsrm5cVSKwSRBSxbHX1jZCz/VpRiIhkObnn8fKm5t7MUos+4oKKeAsvn690XfxYr9NCZGYBwBff41/zPmeBCEFHKc0mKTxg0QFAAYGzg5TzhfRC4Vk6Jtv/pNI3O8n0RDIz61bv9xwHLpAgtAiKrccOXfu7EVKgcQ9gGZ1df2SJMVC6zi2KrC0NNjViNQEoGK1Rcva6BcRCPFxbJX09sOWKCVSC4E0UhkS4rFl/DalSGoeQFOrDJX61WlqKha44Shb2biYtvGD1D2AZnT0116iTUycE08gNGG9b2CgP5PHdKXuATQDA/+ekDECoRmOY1WzMn6QmQBAbYzASS2jF4qMswjjT6PW34jMQiA/Eg4J23Fj/v4se35Nph5AUwuHSlIiFaidxg/a4gE0KJE6zp4x5frKJBhINqXORrRVAEBEYCrtN37QlhDID8YJ1FB3n2UFP8hY4Afm9iQ9rTn2/0I5YnT0l9w/jklomaGBgS8TW9DSKrkSABgdvVNV/xa2WpEKEStQ5iwNZl3mbEbuBAAkL+BGPuL9INqeAwTxJi+QhfZFBwvY8xLvB5FLD+AHIZFKkK+INygazuLGBl369tuzuS5u5NID+MH0CawrUDd0mIRC4Dg0jl4/78YPcu8B/Ig3yDsY1bVQ5fmBCkKhBABqC2z2qHKpVSUhRzjDqtf/Ps3VW2lQOAFoRkd/Pa9Co+viDdrOhCpWDJ47d/Y2FZDCCkAjYVG7KF64E0ThBQC8dcffkYwiZ4Br+Kq0uf5D0cKdIFgIQCP5QZrwMnwNKwFoRAhJwtPwNSwFoNGhkUrSqpIjRIW34WtYC8CPN8nuMsV8vrEpYBBL3afhtbW1m5wNX2OMADSjo2NKAHsuq8pRRbyCBjM1abhUopGiljPjYpwA/Hhe4bw6NXATX3cXholSyRlaXd343YTePgijBaC5cWOs46239lyoicGpqCPTtQhuXD9uWZsjq6ubRoQ4zRABBHDr1p2vNjfpgmVZFSp+zjDhOM44whuTe/p6iACa4JVUT6sYuaJuVy9yB8otbg9vw+DV/4kZmbfF4BsjAogBPIQSRJdqp2uicHqzD5uwp5KF3t1Wcbw6bv7++jXZYvDREAEkRC2PoLKqMJ1Qt1UdqaNWZXIfJI6dEMrer3bUFwt68Nou2upvbdWLI1Fd9DYQW6wZ/ca0GHpy/B/PrV+5tmNiEwAAAABJRU5ErkJggg==", Gd = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMAAAADACAYAAABS3GwHAAAACXBIWXMAACE4AAAhOAFFljFgAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAABAaSURBVHgB7Z1NjNTmGccfj0qkkDYlzQeRSsTsIZUCkWDblEaV2szm1oLKkkNyzGzuFUSqkp7KklsjVRApZ9jcSg5lkKC9laWnFtSyVIEDVFmj5BCISAeikAaSdZ+/7Xfxztoztsf22M/7/KR37ZndRIzn+b/Px/vlkFIInudt4ks7bFu5mdebIvcUeR1HP2zAjVzd8P1r5rXjOH1SxsYhJRMRQ9/JbUfkvk3VAgEsRdo1FsUiKZlQAYwgNPgOtxfCa5uSe/A6sEiBIM7iyqJwSUlEBTBAaPDo0fdSYPA7qdlADIvcTqqHWI8KgFaNfpbuG32de/hxQNi0yK1HgSCszyOsFUCkpz8YXqUa/TAghB4L4T2yFOsEwIbfoaCn75KdRh+HS4FneIfFsEQWYYUAIiHOqxSEOEoyEMARW7yCaAGEhn+A237S3j4rLjeIYEFyJUmkANTwC2eB2yGJQhAlADX80lkgYUIQIQA1/Mo5REJCo8YLgI0fho9Sphp+tbjc5pueLDdWAGE58zA1f6S26bjcDrAQTlIDaVHDQLjD7RjfniE1/jrQ5tbDd8KtTQ2jUQIIw51lCgaxlHrR5XaGv6NXqUE0IgQKexb0+h1SmsACNaRaVHsBsPFjBBfGr0lus3CpAUlybUOgMNY/wrcnSI2/ibS5LfB3eDgsU9eSWnqAMORBktsmRQIut5k6hkS18wBs/F2+XCA1fkm0uV2oY4JcKwHwA5onjfelgu90IfyOa0MtQqAwRoThz5JiA1iIM1eHFWkTF4DG+9biUg3ygokKQI3felyasAgmlgOw8WMagya7dtOmYPR4YlNaJuIBwg+Mnl+TXQUgF5iZxHrkyj1AWOZU41eiwBYmUiat1AOExn+MFCWZbpXTJyoTQCTmV5RhVBoOVRICRWJ+RRkFwqHKEuPSPYCWOpWcwBNMl10iLVUAthv/F/eILn1GdOMLouXbRJ9+GTRw48u1f7vxW0SbNwbXxx8kmnqY23f5wfH1oQ1kKy6VPE5QmgDC6Q1W1flh8DD0c9eJzn+y3sjzAjFs5faTJ4l2bSbbcCnwBKVMmyhTAJjHb8Xcng9uspv7KDD8O19TqcBD7GIhvLiFaPujZAvYwHcflUApAghn/B0kwaC3P7UctLKNPgmESq88zTHCU2QDWGI5TwVTuACk1/rrYPiDQAh7poImnMLHCAoVQJj0Iu4XOcp7juP6o5fvJ7J1wwKPUHhlqDABSE56b9whevdiUNFpAsgR5p4hemIjScSlApPiIgWABez7SRinPiQ6frU+4U5aUDqFCIR6A5xf8DoVQCECkBj3I9Y/foXotEuNZjfnBa9tI4nsYxH0aEzGFoDEwS6EPL//J/va2yQCDKi98UNxIVEh+UARc4FQ7myTEGD8v/u7HOMHy7eCz4TPJgizjnwsxhJAGPp0SQjG+Ota5RkHfCaBIuiE+8XmJncIJC30kWz8UVAqfet5UeEQQqGpvFWhcTyAmNDHFuMHAj0BQqHDlJNcAgg3rO2SEJDw2mD8BnzWt//VvNLuELrhgSmZyesBciuubhy9JCvhTQsS4z9eIUnkssnMAggT3zYJADM4m17nH4fT4ZwmIezMkxBnEkCY+IqY5YkYGPN6bOf9q6LygYNZt2LP6gG6JKT3h/ELioFzgxHvd/9NUoDxZ5qOk1oAknp/hD7nr5MSculmsJhHCAeyeIEsHkDMAhdMblPWgmKAEI+YyQukEkDY+3dJAJjdaVPJMy14Jng2QkjtBdJ6ADG9/ymXlATwbGzzAiMFIKn3R+yvvX8y/nJPy7xAGg/QJSFo7D8aQR4ylRdII4BGnfydBLYu0d5/NP5mXjdJCiO9wFABiBr1/ZiUlPxVzrOC8e8d9gejPICYNb7Y0UFJx/nrsibKDftlogDC3XkndnRNkcD4ddQ3Pf4Wj7dICp1hM0WHeQAxvf8/dNQ3M4JGhkFiGDRMAB0SgiunN6sMYSFjNykZjhWApOQX7tz9nJSMYGdrQWEjjD82nE/yAEMz5yaxbOFil6L4QE45FMTOZlgngNBViNnWXMOf/AjbQWJnXBgU5wFE7em/rOFPboR5z9gxgTgBiAl/wKeyerFKEThyvq5zjxNAhwSBJFjJh8DOozMYBq0RQDhgIGpv/xs6/0e5z7pq0KAHEBX+AB0Bzo/QzmONjQ8KoEOKIptO9MWqAMKFLyLm/ijKENaUQ6MeQI1fsYUXzE0r7k1JPPEgKTkRfEJ9x9yoB1ASEXrIHuiYm1bcm5J4XD1AbnAqvVDaJg/wBZB3a+km8LjcXqx0BHceMP42bowHaJNQpr5DSk6mHibJ7MCPVvSFRATHsaUjXAB+ztuKvpDI9kdJyQmOVxVMGz/ECwClPC2FZgfGLzgJBoEHCLNhURPgBvnxZlIy0pafO/mVIHiANgln15OkZMSSZ9a2QgBI5oS780JB2LjLDq+5FQLYSsLxv1D1AqmxxPiB7wFEx/+GmS2kpMSiZ2VHDgCefVTDoDRg3MSi0rEdOYBhzxQpI3j5abKJTXlPim8kEIB6gWTQ+1sWKtoTAgEkw+oFkrHw2bSt8gAAX7LOD1oPnsnuNlmHNVUgA7zA3DOkDGBZ7G/YZJ0AAMYEdJLcffA8LC0T25UER/n1Dk2IATzia9vIWqwVAFY7vfIDsp65bXYvG7VWAAAJ8Z42WQs+v+0j5FYLALzMXqAte+VTLJjvP2dx6GOwXgCIgX/7nF2lUXzWN39ECgUC6JPlIAZ+63k7RIDPiM+q28X49FUAITaIQI1/HX3rQ6AokkWgxh8PBOCSsooRgaTEGAmvGn8sroZAMcBQ/vAzGSVSlDrV+JPBWKgKIIG57ewJuPc8eql5J82guoWBPhsnuGXAhQBcUhLBQBFWk0EE565TI8A8J0z10F5/JK56gBTAkN7ksYIzHxO9f7W+B0gj0cXglkWL2sel73ieh7NTT5CSmlPLRKfd+gjBLPTRFW+ZmYUAsEXcBVIyM2mPoIY/NtNOuDXif0nJzQc3iRY/DnKEsg/mhtFjq8cXt+iahgJ4xMFPFgE7dXvWBpfJuU8CISzf5gzrNhUCYnvE9WgWbFpbFX3HcR4xj3KJVACFgNVVZhc6lE4/vBUIAYL49MvAQ5hrFDP6jIQbDds5YlfrZx9Tgy8J2DyZR+uSUjgwXJRQn9VQpY74AjBzgS6SotjFGgEskaLYhYsfJglGJQiJsHU7RCh2wgmwb/ut8AVGg11SFDtYNDetuDcVRTirIX9UAGdJUexg0dw45kZHhBWLmOKw38XNqgcI8wCtBinSWTLGDwbXBC+SoshmMfpiUAAnSVFk04u+cKIvdDxAEY4/AS76xhoPEOYBi6QoMlkcfCNuXyANgxSp9AbfcAbf0DBIEcwjYZSzyjoPoOVQRSi9QeMHSUstDnHrkDIULGoxC1xuYJHLXb7+L7hiMQx+Z64G/N0wsIbg2xuCe7OtCZZB4n2zaAZXLJbZuCG4PrSBlNH04t504t7UMOg+MF4YrVnVBeO+9jnR9Tv12SwL4ti8MRAMtnQ0AsG9isPH5d4/9hBYJ+m/YBEc5ssBsgjs7nDps3D54p3A6Ef12HUH4sDySuxwh5VpZrmlZSywAObifjFMAB2+nCGhoGeHoWMBu3sruG/a9od5MaLYHi7XtMBTTLMAYvNaZ9h/xSKAADokgKjBX74Z3Cv3gSC2hYLY/j1RgsDcn+mkX44SQJcvx6ihYL+eS6Z9RkoGIAJsw7L9scaHTF0WwHtJvxwlgMYlwzB69PJnPrInpCkb5A0Ilxq4GVdi8msYKgDAIjjIl3mqMWr01dEwMcyzAA4N+4M0AqilF1CjnzwNEMNUdO5/HCMFAOriBZDIYmdm7MPZ9PKkNCCGV54OhFCTM9YSS59R0gpgol4Avf37VzSRbQpInmeemvg5BSN7f5BKAKBqL2B6ezQNcZrJBL1Cqt4fZBFAJV4Ao7GnXI3tpdHZEoihIiGk6v1BagGAMr2Ahjl2UIEQRlZ+omQVQOFeQA3fTjDQhlMsC64eudxm0vb+IJMAAIsAE+QO05io4SugYCEMHfWNI7MAAIsAZ4rtpByo4Stx4FCRuWfGCo1GjvrGkVcAHco4UxTJ7dHLROcbctauMhnGyBFmWQCZ17PnEgBgEWCSXHfU35lyJk5TVJS0ZBRC6rLnIOMIYGRCfOpDouNXtZyp5MOMI2BQbQguZUx8o+QWAEhKiBHnH7tc3CmJit1ACG8+lzgtO3PiG2UsAYDoohmEO8evBKeoK0rRxIRFuUMfQxECaPPlAoc7mzTcUcomEha5NEboYxhbAOCNv3mz/7lNJ0hRKuKn36fub6bzhz6GFhXA2z93sOfKEVKUClhhWyvC+EEhAgAr9+gQ+xOXFKVEPI9t7B6lnuszikJCIMPsX7x26xvCKLHuK6qUQZ872unevvHi/iiFeQDQ+4Xjrjj0OilKCXDoc6BI4weFCgD0djsLLIJ5UpQCgU319hQT90cpNASK8tJp7wR5NEuKMi4O9f6029lHJVC4BzCs3KU5TYqVcUHS69tSSZQmAI7V+istmlERKHmB8Xtf0wxsiUqitBDIoJUhJQ8R43epRErzAIawMjTDt6WpWBFH32vRvrKNH5TuAQyzp72dLc9fRKOeQBkKd5jTXE2s5Jiu0j2AAR9IxwiUUXCtv1uV8YPKBADCMYLSMnql0fR94y+h1j+MykKgKBoOKQP0kSdW2fMbKvUAhjAc0hKpAiZm/GAiHsDgl0hX2BN41CbFOqoqdQ5jogIAKgI7qYPxg4mEQFH8cYK7NI35HqTYAX/XbPzTkzb+4J9SIzg5PsjJ8TwpYvFnde5Ov3lt2dRKAOCl016XwyFstaIVIln0/fn8FZc5R1E7AQDNC2RRl3g/jonnAHGs5gW60L7xYAF7XeL9OGrpAaL4IRHRQfUGjaO/skJzvV85tS5u1F4AIAyJIIIuKbXHI1r07rHx17TXj9IIARjUG9SefljleYcaQqMEANQb1JaFlXv0epmrt8qgcQIw7Dvt7XWQJKs3mCgc7ixxKeXAiV86Z6mBNFYABg2LJkbjwp04Gi8AgLCI622v6ihyJcDwj9Bdeqdp4U4cIgRg0PygVEQZvkGUAAwqhEIRafgGkQIwrIZGOMxPc4SsiDZ8g2gBREGy7Hm038l5vrEt+INYXNKke3RSsuEbrBGAwV+PTLSfcK6ZegUDDH3Ba1GvqeXMvFgngChhCXWvpZv49sMa/rz3FV20obePw2oBGGZPeJtaD/gigBg6JHctQp+/8UXHod43X9kR4oxCBRDDvj97LzgrNMs9ZKfpOQN6eQdxPYc3Nvf0SagARoBKEothh8OegY1ppxOeiVxTENa4vsFzT+/dpbNq8MNRAeTA9xAeTXH3uiMUBbxEtWFTsKfSEv8bXKdFS994dJFLlq4afDZUAAWBPIIeoDY/0K1cZWp7EITnX9v4Pcfd/pXfg1CSxIIY3TdgLCN0cO/576FXx5pal/9/19TQi+P/q2gQShu80aQAAAAASUVORK5CYII=", qd = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMAAAADACAYAAABS3GwHAAAACXBIWXMAACE4AAAhOAFFljFgAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAA/wSURBVHgB7Z09cxRXFoZPD1jewKjkMptAwIjaLbQJQlUrJ2jLI2/gggQREXpIjW3gFyB+gbDL9oaWQ0ceEjvyIsqQIFdZkgOLRGqqVkoQtSogQVAa37f7Xqk16p7p7unu6T73PFVX/TESSDPnvefjfrRDQia02+0Rdajrdko1cz0SOKfAdRjbugE3cHT1/Sfm2nGcbRL6xiEhEQFDP6faeOC8TsUCASwF2hMligUSEiEC6IE2+IZqH+hjnaJ78DKwQL4g7uOoROGSEIkIoANt8OjRL5Fv8Oeo2kAMC6rdFQ9xGBEA7Rn9DO0bfZl7+H5A2LSgWot8QVifR1grgEBPf0sfuRp9NyCElhLCd2Qp1glAGX6D/J6+SXYafRgu+Z7hCyWGJbIIKwQQCHE+Jj/EEaKBAO7Y4hVYC0Ab/g3VrpP09klxVYMI5jlXklgKQAw/c+ZVu81RCKwEIIafO/PETAgsBCCGXzi3iUloVHkBKOOH4aOUKYZfLK5qs1VPlisrAF3OnKPqj9RWHVe1G0oId6mC1KhiINxR7Vt1eo/E+MtAXbUWPhPV6lQxKiUAHe6skz+IJZSLpmr31Gf0MVWISoRAumdBr98goQrMU0WqRaUXgDJ+jODC+CXJrRYuVSBJLm0IpGP9O+r0BxLjryJ11ebVZziny9SlpJQeQIc8SHLrJHDAVW26jCFR6TyAMv6mOvxGYvycqKv2WxkT5FIJQL1BsyTxPlfwmc7rz7g0lCIE0jEiDH+GBBvAQpyrZViRNnABSLxvLS6VIC8YqADE+K3HpQGLYGA5gDJ+TGOQZNdu6uSPHg9sSstAPID+g9HzS7IrAOQC04NYj1y4B9BlTjF+IQhsYSBl0kI9gDb+b0kQomkWOX2iMAEEYn5B6Eah4VAhIVAg5heEXiAcKiwxzt0DSKlTSAk8wUTeJdJcBWC98b96RbSxQfTiJdHWFtHz5+r8hf+aORrefpvo2DtEQ+o4PEx0/Lhq7/lHvGYnLuU8TpCbAPT0Brvq/DB4GPraOtH6+mEjT4snhL8SjdaJTp8my3DJ9wS5TJvIUwCYx2/H3B708quPfaOHCPIE3mB0lGjsDNHJk2QJ2MD3MuVALgLQM/5uEWdg6MvLRCu/52/0UQwfI5qcVGIYIwvAEstZypjMBcC+1l8Gw+8EQjg7TjR+lpiT+RhBpgLQSS/ifp6jvGtrRA8eZhfbZw1/j5B5ZSgzAbBOelG9+fm/RJubVAlOqxxhakpVlY4RQ1zKMCnOUgBYwH6duIFwZ/HX8oQ7cUGyPHWeqzfA8wtuUgZkIgCWcT8M/tEjP9avMsgL4A34cVmJoEV90rcAWA52IeT56SdV039GLMA4wsWL3EKiTPKBLOYCodxZJy7A+Ft3+Rg/wN/SapU3eU+HWUfeF30JQIc+TeKCMX5ehuLz/AVHETT0frGpSR0CsQt9OBt/EJRKZ2Y4hUMIhUbTVoX68QB8Qh9bjB/w8wQIheYoJakEoDesbRIXkPDaYPwGiODHH6tX2o2mqR+Ykpi0HiC14krHL7/wSnjjgr95cZEYkcomEwtAJ7514sAfq9Wv8/fD8orfeHAuTUKcSAA68eUxyxNx/8OHZD3wAnzCv1tJt2JP6gGaxKX3x6Q2PjFwevAe/PwzMQHGn2g6TmwBsOr9Efpg8Yrgs7Hpz3TlwY0kXiCJB+CzwIVX8pcND9l4xEReIJYAdO/fJA5gdqdNJc+4oDTKJyGO7QXiegA+vT+fDzl7Vlas8wI9BcCq90fsL71/NN5yT7u8QBwP0CQuSOzfmxU2AojlBeIIoFJP/o7E26BKev+emM28eNDTC3QVAKtR39VVEmKCPY54AOO/1O0benkAPmt8110SYlLEBl/F0ez2YqQA9O68A3t0TaZgkEdGfeNjtnjkQaPbTNFuHoBR7y+jvolZY/WeRYZB3QTQIC48ZdObFQevTqMZlQyHCoBV8gt3/szC+f79gooZn7ARxh8azkd5gK6Zc6XgE8sWz0ZFdsKLR+hshkMC0K6Cz7bmNq72ygpe4ybnwsKgMA/Aa09/8QDp4fXehY4JhAmAT/gDsPJLSAe/kfNDnXuYABrECan/p4df59HoDIMOCEAPGPDa2//lSxIEzaFqUKcH4BX+APEA6eE5efCAjXcKoEGCwJtG8GJPAHrhC4+5P4IQzYFyaNADiPELtvCBOamF3WQFz+dkFQPfJ9Q3zIl4ACEavp1Hw5zUwm6yQjxAevh6gLrJAzwBpN1auhIMD5OQEr6dB4y/jhPjAerElePHSUgJ7/duHF9qwQuWHHuHhJTwFoCX89aCFyw5eZKElODxqnyp4wt/ASCRk0Q4Oej9+SbBwPcAOhvmNQGuk9FREhLCP3fyKkHwAHXizmkRQGLs6DTqdgiAvzvPFrxXdnQapyCAU8QdfKASBsXHnvfK8wC843/D2BkSYjI2RpZgSQ4AUA6VMKg3w6pidvIEWYIlOYDh7FkSejA5SRYxkvZJ8dVk/Kx4gW6g97cn/AEWhUAAxi9eIJpxvjNiIqjb5QEAvICMDB8Gvb+FnYM9VSADvMDUeRI6sCv2N4zYJwBw+rRNlY7e4P2wK/Y3WJYEB/nwQ0mIgeUe0V4BYKXY5D/JemD8FudE9goAoOphc1UIBQE7Q5897BYAeH+S+8KPcPA3T02R7YgAEANfuGBXGICS58WLJPgC2CbbQT4wc8kOEcD4Z2ZkLMRnWwRgsEEEYvydbEsIFISzCMT4Q4EAXBL2MSLglBjjbxHjD8OVECgMiODKFR4lUpQ6xfgjOUoigGj+NeWvJ374sHpPmkF1CyVemf3aDRcCcEmI5h9j/ryhB0oE6+tUCbD67d8fSq/fG1c8QBwQEl1UYwV/rBItLpb32VlIdM+f9ye3CXHYhgCekBAPeAO05WXVVsojBIQ7iPXPyoq3hLhOu93GFnG/kZCcQXsEMfx+mXD01oj/JyE9G5tEq3+oHMHNP1k2exyNjcmahv5518FXJQJkd3US+mdNvZXra0Rbz1TbokxAMgujR2yPmr709lmw7TjOu0f1xRKJALIBWwqabQXhDYwQ0BAq4Z45BjEVGyTcOEf59Zjeo0cMPg9g82QE4JKQPTBcGLCEKmXEE4CZC7RMgmAXBwSwRIJgFy6+mCQYlSAkwvbtECFYiUqAPduv6QuMBrskCHawYE5qYTcFgTl7IX9QAPdJEOxgwZw45kRGhAWLGFVhv4uTPQ+g8wCpBgncWTLGDzrXBC+QIPBmIXjRKYC7JAi8aQUvnOCFjAcIzPEmwAVvHPAAOg9YIEHgyULnjbB9gSQMErjS6rzhdN6QMEhgzLs6ytnjkAeQcqjAlFan8YOjEd98W7UGCd3BopadHaLnz1V7sX+OI17zXsdxZ/9neq0fxhqCoSH/3CySwT00c40jdoAw92TBTBxaYTedsJsSBgUwK7ie6lVdMO6tp+rey/JsluUJ4R3VhvdXkg3rVWUiDuCq3n807AUn6ieUCObU4QbZBAz9fxv7yxfNscpAAO+954sBK9OGtUjsYl4J4GrYC90E0FCHe8QVb73ulr+IHcdnz6q3/WFajCiwgxxEwd9TTCgBhOa1TrefUiKAABrEgaDBb274i9WFfbDbxAktCAiDjyAw92ci6sVeAmiqw7dUVTY2dNtURr9JQgJOnNh/nnK1Q6amEsB3US/2EkD1kmEYPHr5x4/tCWnyBgk1vMPYGd87VIfI5NfQVQBAieCWOsxSmRGjL45qiWFWCeB2t2+II4ByegEx+sFTfjGMBuf+h9FTAKA0XgCGjp2ZVx9XvzzJDYhhctIXQjmeSxBZ+gwSVwCD9QLo7R8tSiJbFbzNe88M+jkFPXt/EEsAoHAvYHr7ld8lxKkqg/MKsXp/kEQAxXgBzKXBwycktucFtnPHM8uKEUKs3h/EFgDI1QtImGMH+QuhZ+UnSFIBZO8FxPDtBANt709mXT1yVZuO2/uDRAIASgSYIDdH/SKGL4BshdB11DeMxAIASgR4ptg5SoMYvhAGHioyNdVPaNRz1DeMtAJoUNKZokhu8cDptYo8a1cYDOlzhBklgMTr2VMJACgRYJJcs+c3mnLm4q8kCLFJJoTYZc9O+hFA74TYGL6UM4U0mHEEiCEalxImvkFSCwBEJsSI8x88kDn3QjZACBcuRE3LTpz4BulLAODAohn09I8e+aO3gpA1h8Oi1KGPIQsB1AlPml9eHpFwR8id/bDIpT5CH0PfAgDt77+foadbP5AgFMXf/9Z0PvoodehjqFEGOFeutNTXOyQIheDcycL4QSYC8Hj96ja15UF7Qs7AxmBrGZFJCGRoz83V6a0hjBLLhlpC9rTb2/Tm9YRz86ZLGZGdB1B4v5hDN0kQ8sChG1kaP8hUAMC5dm2enNosCUKWODTrfPppJnH/wX82J9pff/2DitdmSBD6pU0t57NrlykHMvcAe+zsXJWkWOgb2NCbnb4Gu7qRmwBUrKYSlp1pEYGQGt/4pz1byoncQiCDVIaEVOwbv0s5kl8IpNGVoWl1mpuKBWZ45c6dy3kbP8jdAxhUUnxOqRoT58QTCN15vYNafyGP6crdAxhUeXRJxgiEntScZlHG7/13VCD+GAHlltELFQZhD4z/k08yr/V3o7AQKIiEQ8IB/CkO00X2/IZCPYBBh0NSIhUGavxgIB7A4JVIjw7dU79FnQT7KKjU2Y2BCgCICCylBMYPBhICBfHegDc7E0oALRLsoK0+6zc7E4M2fjBwDxCk/fV/blF7d5YEvmBW57VrmS1o6ZdSCQC0v/yySbUj2GpFKkScQLJ7pHaj6DJnL0onACB5ATNKEu+HMfAcIIy9vEAW2jNAfYYliffDKKUHCOKFRM6RW+INKgZCHmpfdT77rNTFjVJ6gCDO55/Pe+sKiOZJqAjtBW/xesmNH5TeAwQRb1By/Pk8qPJ8QRWh9B4giHiDUqM+m9ejVTJ+UCkPEKT91VeXqK0SLPEGg2ZJ9foob96nClJZARgkLBoQFQx3wqi8AIA3bjD0l49lFLkAfMO/Qzs7X+S5WL0oWAjAoBfg41nGTRKyhZnhG1gJwCBCyBCmhm9gKQDDXmi0u9uUHCEhzA3fwFoAQfQku+uU9vnG1qAGsVDSfP36LmfDN1gjAINej3xdtYZ4BQ16e6c2r0aFWlUtZ6bFOgEE8bzCkSOXrNzE1zN61PBrs/Tq1bINvX0YVgvAoHKFESWEGU8Mu23lGRyeaxH8uH5BHVu2hDi9EAGE0P7mmw9oF15BiaH6OcOS+pgXEN7Y3NNHIQLogV9SfWucqNZQVxBDg8qKF9bgsaHK4Gl3QfXy98XguyMCSIHnId68GaXa0XFPFG3Vig6bsMqqpnr3Ngx+d0n9/8uqZOmKwSdDBJARXh4xNFRXYjhFeHh4rQZBqGtdaTJHao9EisVbROL4BuwQdtXGOZqrxjL83t1xnoihZ8efuB8O9a5VZecAAAAASUVORK5CYII=", Pr = {
  extraLarge: 64,
  large: 40,
  medium: 32,
  small: 24
}, py = ({
  types: e = "unknown",
  src: t,
  children: o,
  size: r = "large",
  sx: i,
  ...a
}) => {
  const l = e === "male" ? Gd : e === "female" ? qd : Yd, [s, c] = ai(t || null);
  return Ql(() => {
    c(t || null);
  }, [t]), /* @__PURE__ */ S(
    Hs,
    {
      src: s || (!s && !o ? l : void 0),
      sx: {
        width: Pr[r],
        height: Pr[r],
        fontSize: Pr[r] * 0.4,
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
function Xd(e) {
  return de("MuiButton", e);
}
const Wt = ce("MuiButton", ["root", "text", "textInherit", "textPrimary", "textSecondary", "textSuccess", "textError", "textInfo", "textWarning", "outlined", "outlinedInherit", "outlinedPrimary", "outlinedSecondary", "outlinedSuccess", "outlinedError", "outlinedInfo", "outlinedWarning", "contained", "containedInherit", "containedPrimary", "containedSecondary", "containedSuccess", "containedError", "containedInfo", "containedWarning", "disableElevation", "focusVisible", "disabled", "colorInherit", "colorPrimary", "colorSecondary", "colorSuccess", "colorError", "colorInfo", "colorWarning", "textSizeSmall", "textSizeMedium", "textSizeLarge", "outlinedSizeSmall", "outlinedSizeMedium", "outlinedSizeLarge", "containedSizeSmall", "containedSizeMedium", "containedSizeLarge", "sizeMedium", "sizeSmall", "sizeLarge", "fullWidth", "startIcon", "endIcon", "icon", "iconSizeSmall", "iconSizeMedium", "iconSizeLarge", "loading", "loadingWrapper", "loadingIconPlaceholder", "loadingIndicator", "loadingPositionCenter", "loadingPositionStart", "loadingPositionEnd"]), Qs = /* @__PURE__ */ g.createContext({});
process.env.NODE_ENV !== "production" && (Qs.displayName = "ButtonGroupContext");
const Ks = /* @__PURE__ */ g.createContext(void 0);
process.env.NODE_ENV !== "production" && (Ks.displayName = "ButtonGroupButtonContext");
const Jd = (e) => {
  const {
    color: t,
    disableElevation: o,
    fullWidth: r,
    size: i,
    variant: a,
    loading: l,
    loadingPosition: s,
    classes: c
  } = e, u = {
    root: ["root", l && "loading", a, `${a}${W(t)}`, `size${W(i)}`, `${a}Size${W(i)}`, `color${W(t)}`, o && "disableElevation", r && "fullWidth", l && `loadingPosition${W(s)}`],
    startIcon: ["icon", "startIcon", `iconSize${W(i)}`],
    endIcon: ["icon", "endIcon", `iconSize${W(i)}`],
    loadingIndicator: ["loadingIndicator"],
    loadingWrapper: ["loadingWrapper"]
  }, d = ge(u, Xd, c);
  return {
    ...c,
    // forward the focused, disabled, etc. classes to the ButtonBase
    ...d
  };
}, Ys = [{
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
}], Zd = Q(lt, {
  shouldForwardProp: (e) => it(e) || e === "classes",
  name: "MuiButton",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: o
    } = e;
    return [t.root, t[o.variant], t[`${o.variant}${W(o.color)}`], t[`size${W(o.size)}`], t[`${o.variant}Size${W(o.size)}`], o.color === "inherit" && t.colorInherit, o.disableElevation && t.disableElevation, o.fullWidth && t.fullWidth, o.loading && t.loading];
  }
})(fe(({
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
    [`&.${Wt.disabled}`]: {
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
        [`&.${Wt.focusVisible}`]: {
          boxShadow: (e.vars || e).shadows[6]
        },
        [`&.${Wt.disabled}`]: {
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
        [`&.${Wt.disabled}`]: {
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
    }, ...Object.entries(e.palette).filter(De()).map(([r]) => ({
      props: {
        color: r
      },
      style: {
        "--variant-textColor": (e.vars || e).palette[r].main,
        "--variant-outlinedColor": (e.vars || e).palette[r].main,
        "--variant-outlinedBorder": e.vars ? `rgba(${e.vars.palette[r].mainChannel} / 0.5)` : X(e.palette[r].main, 0.5),
        "--variant-containedColor": (e.vars || e).palette[r].contrastText,
        "--variant-containedBg": (e.vars || e).palette[r].main,
        "@media (hover: hover)": {
          "&:hover": {
            "--variant-containedBg": (e.vars || e).palette[r].dark,
            "--variant-textBg": e.vars ? `rgba(${e.vars.palette[r].mainChannel} / ${e.vars.palette.action.hoverOpacity})` : X(e.palette[r].main, e.palette.action.hoverOpacity),
            "--variant-outlinedBorder": (e.vars || e).palette[r].main,
            "--variant-outlinedBg": e.vars ? `rgba(${e.vars.palette[r].mainChannel} / ${e.vars.palette.action.hoverOpacity})` : X(e.palette[r].main, e.palette.action.hoverOpacity)
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
            "--variant-textBg": e.vars ? `rgba(${e.vars.palette.text.primaryChannel} / ${e.vars.palette.action.hoverOpacity})` : X(e.palette.text.primary, e.palette.action.hoverOpacity),
            "--variant-outlinedBg": e.vars ? `rgba(${e.vars.palette.text.primaryChannel} / ${e.vars.palette.action.hoverOpacity})` : X(e.palette.text.primary, e.palette.action.hoverOpacity)
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
        [`&.${Wt.focusVisible}`]: {
          boxShadow: "none"
        },
        "&:active": {
          boxShadow: "none"
        },
        [`&.${Wt.disabled}`]: {
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
        [`&.${Wt.loading}`]: {
          color: "transparent"
        }
      }
    }]
  };
})), _d = Q("span", {
  name: "MuiButton",
  slot: "StartIcon",
  overridesResolver: (e, t) => {
    const {
      ownerState: o
    } = e;
    return [t.startIcon, o.loading && t.startIconLoadingStart, t[`iconSize${W(o.size)}`]];
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
  }, ...Ys]
})), ef = Q("span", {
  name: "MuiButton",
  slot: "EndIcon",
  overridesResolver: (e, t) => {
    const {
      ownerState: o
    } = e;
    return [t.endIcon, o.loading && t.endIconLoadingEnd, t[`iconSize${W(o.size)}`]];
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
  }, ...Ys]
})), tf = Q("span", {
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
})), xa = Q("span", {
  name: "MuiButton",
  slot: "LoadingIconPlaceholder",
  overridesResolver: (e, t) => t.loadingIconPlaceholder
})({
  display: "inline-block",
  width: "1em",
  height: "1em"
}), Gs = /* @__PURE__ */ g.forwardRef(function(t, o) {
  const r = g.useContext(Qs), i = g.useContext(Ks), a = en(r, t), l = he({
    props: a,
    name: "MuiButton"
  }), {
    children: s,
    color: c = "primary",
    component: u = "button",
    className: d,
    disabled: f = !1,
    disableElevation: h = !1,
    disableFocusRipple: m = !1,
    endIcon: C,
    focusVisibleClassName: y,
    fullWidth: x = !1,
    id: E,
    loading: T = null,
    loadingIndicator: w,
    loadingPosition: b = "center",
    size: k = "medium",
    startIcon: A,
    type: M,
    variant: $ = "text",
    ...N
  } = l, p = fn(E), F = w ?? /* @__PURE__ */ S(Ci, {
    "aria-labelledby": p,
    color: "inherit",
    size: 16
  }), B = {
    ...l,
    color: c,
    component: u,
    disabled: f,
    disableElevation: h,
    disableFocusRipple: m,
    fullWidth: x,
    loading: T,
    loadingIndicator: F,
    loadingPosition: b,
    size: k,
    type: M,
    variant: $
  }, O = Jd(B), I = (A || T && b === "start") && /* @__PURE__ */ S(_d, {
    className: O.startIcon,
    ownerState: B,
    children: A || /* @__PURE__ */ S(xa, {
      className: O.loadingIconPlaceholder,
      ownerState: B
    })
  }), j = (C || T && b === "end") && /* @__PURE__ */ S(ef, {
    className: O.endIcon,
    ownerState: B,
    children: C || /* @__PURE__ */ S(xa, {
      className: O.loadingIconPlaceholder,
      ownerState: B
    })
  }), P = i || "", U = typeof T == "boolean" ? (
    // use plain HTML span to minimize the runtime overhead
    /* @__PURE__ */ S("span", {
      className: O.loadingWrapper,
      style: {
        display: "contents"
      },
      children: T && /* @__PURE__ */ S(tf, {
        className: O.loadingIndicator,
        ownerState: B,
        children: F
      })
    })
  ) : null;
  return /* @__PURE__ */ ve(Zd, {
    ownerState: B,
    className: _(r.className, O.root, d, P),
    component: u,
    disabled: f || T,
    focusRipple: !m,
    focusVisibleClassName: _(O.focusVisible, y),
    ref: o,
    type: M,
    id: T ? p : E,
    ...N,
    classes: O,
    children: [I, b !== "end" && U, s, b === "end" && U, j]
  });
});
process.env.NODE_ENV !== "production" && (Gs.propTypes = {
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
const of = (e, t = "primary") => {
  var i;
  const o = Me[t], r = ((i = e == null ? void 0 : e.palette) == null ? void 0 : i[t]) ?? o;
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
}, nf = Q(Gs)(({
  "data-variant": e,
  size: t = "medium",
  theme: o,
  "data-color": r = "primary"
}) => {
  const i = of(o, r), l = [
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
  }[t], u = (d) => ({
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
      color: X(i.disabledcolor, 0.38)
    },
    ...c
  });
  switch (l) {
    case "filled":
      return {
        ...u(s),
        backgroundColor: s.bgColor,
        color: s.fontColor,
        "&:hover": {
          boxShadow: `0px 1px 3px 1px ${X(s.shadowColor, 0.15)}, 0px 1px 2px 0px ${X(s.shadowColor, 0.3)}`
        },
        "&:active": {
          boxShadow: "none"
        },
        "&.Mui-disabled": {
          backgroundColor: X(i.disabledcolor, 0.12)
        }
      };
    case "outlined":
      return {
        ...u(s),
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
        ...u(s),
        backgroundColor: s.bgColor,
        color: s.fontColor,
        "&:focus-visible::before": {
          backgroundColor: X(s.overlay, 0.12)
        }
      };
    case "elevated":
      return {
        ...u(s),
        backgroundColor: s.bgColor,
        color: s.fontColor,
        boxShadow: `0px 1px 3px 1px ${X(s.shadowColor, 0.15)}, 0px 1px 2px 0px ${X(s.shadowColor, 0.3)}`,
        "&:hover": {
          boxShadow: `0px 2px 6px 2px ${X(s.shadowColor, 0.15)}, 0px 1px 2px 0px ${X(s.shadowColor, 0.3)}`
        },
        "&:active, &:focus-visible": {
          boxShadow: `0px 1px 3px 1px ${X(s.shadowColor, 0.15)}, 0px 1px 2px 0px ${X(s.shadowColor, 0.3)}`
        },
        "&.Mui-disabled": {
          backgroundColor: X(i.disabledcolor, 0.12)
        }
      };
    case "tonal":
      return {
        ...u(s),
        backgroundColor: s.bgColor,
        color: s.fontColor,
        "&:hover": {
          boxShadow: `0px 1px 3px 1px ${X(s.shadowColor, 0.15)}, 0px 1px 2px 0px ${X(s.shadowColor, 0.3)}`
        },
        "&:active": {
          boxShadow: "none"
        },
        "&.Mui-disabled": {
          backgroundColor: X(i.disabledcolor, 0.12)
        }
      };
  }
}), dy = ({
  variant: e = "filled",
  color: t = "primary",
  ...o
}) => /* @__PURE__ */ S(
  nf,
  {
    disableElevation: !0,
    disableRipple: !0,
    ...o,
    "data-color": t,
    "data-variant": e
  }
);
function rf(e) {
  return de("MuiFab", e);
}
const Ea = ce("MuiFab", ["root", "primary", "secondary", "extended", "circular", "focusVisible", "disabled", "colorInherit", "sizeSmall", "sizeMedium", "sizeLarge", "info", "error", "warning", "success"]), af = (e) => {
  const {
    color: t,
    variant: o,
    classes: r,
    size: i
  } = e, a = {
    root: ["root", o, `size${W(i)}`, t === "inherit" ? "colorInherit" : t]
  }, l = ge(a, rf, r);
  return {
    ...r,
    // forward the focused, disabled, etc. classes to the ButtonBase
    ...l
  };
}, sf = Q(lt, {
  name: "MuiFab",
  slot: "Root",
  shouldForwardProp: (e) => it(e) || e === "classes",
  overridesResolver: (e, t) => {
    const {
      ownerState: o
    } = e;
    return [t.root, t[o.variant], t[`size${W(o.size)}`], o.color === "inherit" && t.colorInherit, t[W(o.size)], t[o.color]];
  }
})(fe(({
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
    [`&.${Ea.focusVisible}`]: {
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
}), fe(({
  theme: e
}) => ({
  variants: [...Object.entries(e.palette).filter(De(["dark", "contrastText"])).map(([t]) => ({
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
})), fe(({
  theme: e
}) => ({
  [`&.${Ea.disabled}`]: {
    color: (e.vars || e).palette.action.disabled,
    boxShadow: (e.vars || e).shadows[0],
    backgroundColor: (e.vars || e).palette.action.disabledBackground
  }
}))), qs = /* @__PURE__ */ g.forwardRef(function(t, o) {
  const r = he({
    props: t,
    name: "MuiFab"
  }), {
    children: i,
    className: a,
    color: l = "default",
    component: s = "button",
    disabled: c = !1,
    disableFocusRipple: u = !1,
    focusVisibleClassName: d,
    size: f = "large",
    variant: h = "circular",
    ...m
  } = r, C = {
    ...r,
    color: l,
    component: s,
    disabled: c,
    disableFocusRipple: u,
    size: f,
    variant: h
  }, y = af(C);
  return /* @__PURE__ */ S(sf, {
    className: _(y.root, a),
    component: s,
    disabled: c,
    focusRipple: !u,
    focusVisibleClassName: _(y.focusVisible, d),
    ownerState: C,
    ref: o,
    ...m,
    classes: y,
    children: i
  });
});
process.env.NODE_ENV !== "production" && (qs.propTypes = {
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
const lf = (e, t = "primary") => {
  var i;
  const o = Me[t], r = ((i = e == null ? void 0 : e.palette) == null ? void 0 : i[t]) ?? o;
  return {
    bgColor: r.fabBg ?? o.fabBg,
    fontColor: r.fabFont ?? o.fabFont,
    overlay: r.fabFont ?? o.fabFont
  };
}, cf = Q(qs)(({ "data-color": e, size: t = "medium", variant: o, theme: r }) => {
  const i = lf(r, e), a = {
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
}), fy = ({ color: e = "surface", ...t }) => /* @__PURE__ */ S(cf, { "data-color": e, size: "medium", disableFocusRipple: !0, ...t }), uf = (e, t = "primary") => {
  var i;
  const o = Me[t], r = ((i = e == null ? void 0 : e.palette) == null ? void 0 : i[t]) ?? o;
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
}, pf = (e, t = "primary") => {
  var i;
  const o = Me[t], r = ((i = e == null ? void 0 : e.palette) == null ? void 0 : i[t]) ?? o;
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
}, df = Q(_t)(({
  "data-variant": e,
  "data-color": t,
  size: o = "small",
  theme: r
}) => {
  const i = uf(r, t), a = ["filled", "standard", "tonal", "outlined"].includes(e) ? e : "filled", l = i[a], s = {
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
      backgroundColor: X(i.disabledcolor, 0.08),
      color: X(i.disabledcolor, 0.38)
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
}), ff = Q(_t)(({
  "data-variant": e,
  "data-color": t,
  clicked: o,
  size: r = "small",
  theme: i
}) => {
  const a = pf(i, t), l = ["filled", "standard", "tonal", "outlined"].includes(e) ? e : "filled", s = a[l], c = {
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
  }[r], u = () => ({
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
      backgroundColor: X(a.disabledcolor, 0.12),
      color: X(a.disabledcolor, 0.38)
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
        ...u()
      };
    case "standard":
      return {
        ...u(),
        "&.Mui-disabled": {
          backgroundColor: "transparent"
        }
      };
    case "tonal":
      return {
        ...u(),
        "&.Mui-disabled": {
          backgroundColor: X(a.disabledcolor, 0.08),
          color: X(
            o ? s.selectedFontColor : s.fontColor,
            0.38
          )
        }
      };
    case "outlined":
      return {
        ...u(),
        border: o ? "" : `1px solid ${s.borderColor}`,
        "&.Mui-disabled": {
          backgroundColor: o ? X(a.disabledcolor, 0.12) : "transparent"
        },
        "&:hover": {
          border: o ? "" : `1px solid ${s.borderColor}`
        }
      };
  }
}), gy = ({
  variant: e,
  toggleIcon: t,
  children: o,
  color: r = "primary",
  ...i
}) => {
  const [a, l] = ai(!1), s = () => {
    console.log("toggleClick"), l(!a);
  };
  return t ? /* @__PURE__ */ S(
    ff,
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
    df,
    {
      disableRipple: !0,
      "data-color": r,
      "data-variant": e,
      ...i,
      children: o
    }
  );
};
function gf(e) {
  return de("MuiToggleButton", e);
}
const Mr = ce("MuiToggleButton", ["root", "disabled", "selected", "standard", "primary", "secondary", "sizeSmall", "sizeMedium", "sizeLarge", "fullWidth"]), Xs = /* @__PURE__ */ g.createContext({});
process.env.NODE_ENV !== "production" && (Xs.displayName = "ToggleButtonGroupContext");
const Js = /* @__PURE__ */ g.createContext(void 0);
process.env.NODE_ENV !== "production" && (Js.displayName = "ToggleButtonGroupButtonContext");
function hf(e, t) {
  return t === void 0 || e === void 0 ? !1 : Array.isArray(t) ? t.includes(e) : e === t;
}
const mf = (e) => {
  const {
    classes: t,
    fullWidth: o,
    selected: r,
    disabled: i,
    size: a,
    color: l
  } = e, s = {
    root: ["root", r && "selected", i && "disabled", o && "fullWidth", `size${W(a)}`, l]
  };
  return ge(s, gf, t);
}, bf = Q(lt, {
  name: "MuiToggleButton",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: o
    } = e;
    return [t.root, t[`size${W(o.size)}`]];
  }
})(fe(({
  theme: e
}) => ({
  ...e.typography.button,
  borderRadius: (e.vars || e).shape.borderRadius,
  padding: 11,
  border: `1px solid ${(e.vars || e).palette.divider}`,
  color: (e.vars || e).palette.action.active,
  [`&.${Mr.disabled}`]: {
    color: (e.vars || e).palette.action.disabled,
    border: `1px solid ${(e.vars || e).palette.action.disabledBackground}`
  },
  "&:hover": {
    textDecoration: "none",
    // Reset on mouse devices
    backgroundColor: e.vars ? `rgba(${e.vars.palette.text.primaryChannel} / ${e.vars.palette.action.hoverOpacity})` : X(e.palette.text.primary, e.palette.action.hoverOpacity),
    "@media (hover: none)": {
      backgroundColor: "transparent"
    }
  },
  variants: [{
    props: {
      color: "standard"
    },
    style: {
      [`&.${Mr.selected}`]: {
        color: (e.vars || e).palette.text.primary,
        backgroundColor: e.vars ? `rgba(${e.vars.palette.text.primaryChannel} / ${e.vars.palette.action.selectedOpacity})` : X(e.palette.text.primary, e.palette.action.selectedOpacity),
        "&:hover": {
          backgroundColor: e.vars ? `rgba(${e.vars.palette.text.primaryChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))` : X(e.palette.text.primary, e.palette.action.selectedOpacity + e.palette.action.hoverOpacity),
          // Reset on touch devices, it doesn't add specificity
          "@media (hover: none)": {
            backgroundColor: e.vars ? `rgba(${e.vars.palette.text.primaryChannel} / ${e.vars.palette.action.selectedOpacity})` : X(e.palette.text.primary, e.palette.action.selectedOpacity)
          }
        }
      }
    }
  }, ...Object.entries(e.palette).filter(De()).map(([t]) => ({
    props: {
      color: t
    },
    style: {
      [`&.${Mr.selected}`]: {
        color: (e.vars || e).palette[t].main,
        backgroundColor: e.vars ? `rgba(${e.vars.palette[t].mainChannel} / ${e.vars.palette.action.selectedOpacity})` : X(e.palette[t].main, e.palette.action.selectedOpacity),
        "&:hover": {
          backgroundColor: e.vars ? `rgba(${e.vars.palette[t].mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))` : X(e.palette[t].main, e.palette.action.selectedOpacity + e.palette.action.hoverOpacity),
          // Reset on touch devices, it doesn't add specificity
          "@media (hover: none)": {
            backgroundColor: e.vars ? `rgba(${e.vars.palette[t].mainChannel} / ${e.vars.palette.action.selectedOpacity})` : X(e.palette[t].main, e.palette.action.selectedOpacity)
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
}))), Zs = /* @__PURE__ */ g.forwardRef(function(t, o) {
  const {
    value: r,
    ...i
  } = g.useContext(Xs), a = g.useContext(Js), l = en({
    ...i,
    selected: hf(t.value, r)
  }, t), s = he({
    props: l,
    name: "MuiToggleButton"
  }), {
    children: c,
    className: u,
    color: d = "standard",
    disabled: f = !1,
    disableFocusRipple: h = !1,
    fullWidth: m = !1,
    onChange: C,
    onClick: y,
    selected: x,
    size: E = "medium",
    value: T,
    ...w
  } = s, b = {
    ...s,
    color: d,
    disabled: f,
    disableFocusRipple: h,
    fullWidth: m,
    size: E
  }, k = mf(b), A = ($) => {
    y && (y($, T), $.defaultPrevented) || C && C($, T);
  }, M = a || "";
  return /* @__PURE__ */ S(bf, {
    className: _(i.className, k.root, u, M),
    disabled: f,
    focusRipple: !h,
    ref: o,
    onClick: A,
    onChange: C,
    value: T,
    ownerState: b,
    "aria-pressed": x,
    ...w,
    children: c
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
const yf = (e, t = "primary") => {
  var i;
  const o = Me[t], r = ((i = e == null ? void 0 : e.palette) == null ? void 0 : i[t]) ?? o;
  return {
    fontColor: r.onMain ?? o.onMain,
    bgColor: r.toggleButtonBg ?? o.toggleButtonBg
  };
}, vf = Q(Zs)(({ theme: e, "data-color": t = "primary", size: o = "medium" }) => {
  const r = yf(e, t), i = {
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
    backgroundColor: X(r.bgColor, 0.75),
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
      backgroundColor: X(r.bgColor, 0.38)
    }
  };
}), hy = ({
  color: e = "primary",
  ...t
}) => /* @__PURE__ */ S(vf, { ...t }), xi = /* @__PURE__ */ g.createContext(void 0);
process.env.NODE_ENV !== "production" && (xi.displayName = "FormControlContext");
function hn() {
  return g.useContext(xi);
}
function Cf(e) {
  return de("PrivateSwitchBase", e);
}
ce("PrivateSwitchBase", ["root", "checked", "disabled", "input", "edgeStart", "edgeEnd"]);
const xf = (e) => {
  const {
    classes: t,
    checked: o,
    disabled: r,
    edge: i
  } = e, a = {
    root: ["root", o && "checked", r && "disabled", i && `edge${W(i)}`],
    input: ["input"]
  };
  return ge(a, Cf, t);
}, Ef = Q(lt)({
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
}), wf = Q("input", {
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
}), lr = /* @__PURE__ */ g.forwardRef(function(t, o) {
  const {
    autoFocus: r,
    checked: i,
    checkedIcon: a,
    defaultChecked: l,
    disabled: s,
    disableFocusRipple: c = !1,
    edge: u = !1,
    icon: d,
    id: f,
    inputProps: h,
    inputRef: m,
    name: C,
    onBlur: y,
    onChange: x,
    onFocus: E,
    readOnly: T,
    required: w = !1,
    tabIndex: b,
    type: k,
    value: A,
    slots: M = {},
    slotProps: $ = {},
    ...N
  } = t, [p, F] = hi({
    controlled: i,
    default: !!l,
    name: "SwitchBase",
    state: "checked"
  }), B = hn(), O = (Y) => {
    E && E(Y), B && B.onFocus && B.onFocus(Y);
  }, I = (Y) => {
    y && y(Y), B && B.onBlur && B.onBlur(Y);
  }, j = (Y) => {
    if (Y.nativeEvent.defaultPrevented)
      return;
    const q = Y.target.checked;
    F(q), x && x(Y, q);
  };
  let P = s;
  B && typeof P > "u" && (P = B.disabled);
  const U = k === "checkbox" || k === "radio", H = {
    ...t,
    checked: p,
    disabled: P,
    disableFocusRipple: c,
    edge: u
  }, L = xf(H), R = {
    slots: M,
    slotProps: {
      input: h,
      ...$
    }
  }, [V, ne] = le("root", {
    ref: o,
    elementType: Ef,
    className: L.root,
    shouldForwardComponentProp: !0,
    externalForwardedProps: {
      ...R,
      component: "span",
      ...N
    },
    getSlotProps: (Y) => ({
      ...Y,
      onFocus: (q) => {
        var z;
        (z = Y.onFocus) == null || z.call(Y, q), O(q);
      },
      onBlur: (q) => {
        var z;
        (z = Y.onBlur) == null || z.call(Y, q), I(q);
      }
    }),
    ownerState: H,
    additionalProps: {
      centerRipple: !0,
      focusRipple: !c,
      disabled: P,
      role: void 0,
      tabIndex: null
    }
  }), [te, G] = le("input", {
    ref: m,
    elementType: wf,
    className: L.input,
    externalForwardedProps: R,
    getSlotProps: (Y) => ({
      onChange: (q) => {
        var z;
        (z = Y.onChange) == null || z.call(Y, q), j(q);
      }
    }),
    ownerState: H,
    additionalProps: {
      autoFocus: r,
      checked: i,
      defaultChecked: l,
      disabled: P,
      id: U ? f : void 0,
      name: C,
      readOnly: T,
      required: w,
      tabIndex: b,
      type: k,
      ...k === "checkbox" && A === void 0 ? {} : {
        value: A
      }
    }
  });
  return /* @__PURE__ */ ve(V, {
    ...ne,
    children: [/* @__PURE__ */ S(te, {
      ...G
    }), p ? a : d]
  });
});
process.env.NODE_ENV !== "production" && (lr.propTypes = {
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
  inputRef: Ot,
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
const Sf = Ke(/* @__PURE__ */ S("path", {
  d: "M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"
}), "CheckBoxOutlineBlank"), Tf = Ke(/* @__PURE__ */ S("path", {
  d: "M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"
}), "CheckBox"), kf = Ke(/* @__PURE__ */ S("path", {
  d: "M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"
}), "IndeterminateCheckBox");
function Of(e) {
  return de("MuiCheckbox", e);
}
const Br = ce("MuiCheckbox", ["root", "checked", "disabled", "indeterminate", "colorPrimary", "colorSecondary", "sizeSmall", "sizeMedium"]), Af = (e) => {
  const {
    classes: t,
    indeterminate: o,
    color: r,
    size: i
  } = e, a = {
    root: ["root", o && "indeterminate", `color${W(r)}`, `size${W(i)}`]
  }, l = ge(a, Of, t);
  return {
    ...t,
    // forward the disabled and checked classes to the SwitchBase
    ...l
  };
}, Rf = Q(lr, {
  shouldForwardProp: (e) => it(e) || e === "classes",
  name: "MuiCheckbox",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: o
    } = e;
    return [t.root, o.indeterminate && t.indeterminate, t[`size${W(o.size)}`], o.color !== "default" && t[`color${W(o.color)}`]];
  }
})(fe(({
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
        backgroundColor: e.vars ? `rgba(${e.vars.palette.action.activeChannel} / ${e.vars.palette.action.hoverOpacity})` : X(e.palette.action.active, e.palette.action.hoverOpacity)
      }
    }
  }, ...Object.entries(e.palette).filter(De()).map(([t]) => ({
    props: {
      color: t,
      disableRipple: !1
    },
    style: {
      "&:hover": {
        backgroundColor: e.vars ? `rgba(${e.vars.palette[t].mainChannel} / ${e.vars.palette.action.hoverOpacity})` : X(e.palette[t].main, e.palette.action.hoverOpacity)
      }
    }
  })), ...Object.entries(e.palette).filter(De()).map(([t]) => ({
    props: {
      color: t
    },
    style: {
      [`&.${Br.checked}, &.${Br.indeterminate}`]: {
        color: (e.vars || e).palette[t].main
      },
      [`&.${Br.disabled}`]: {
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
}))), Ff = /* @__PURE__ */ S(Tf, {}), Pf = /* @__PURE__ */ S(Sf, {}), Mf = /* @__PURE__ */ S(kf, {}), _s = /* @__PURE__ */ g.forwardRef(function(t, o) {
  const r = he({
    props: t,
    name: "MuiCheckbox"
  }), {
    checkedIcon: i = Ff,
    color: a = "primary",
    icon: l = Pf,
    indeterminate: s = !1,
    indeterminateIcon: c = Mf,
    inputProps: u,
    size: d = "medium",
    disableRipple: f = !1,
    className: h,
    slots: m = {},
    slotProps: C = {},
    ...y
  } = r, x = s ? c : l, E = s ? c : i, T = {
    ...r,
    disableRipple: f,
    color: a,
    indeterminate: s,
    size: d
  }, w = Af(T), b = C.input ?? u, [k, A] = le("root", {
    ref: o,
    elementType: Rf,
    className: _(w.root, h),
    shouldForwardComponentProp: !0,
    externalForwardedProps: {
      slots: m,
      slotProps: C,
      ...y
    },
    ownerState: T,
    additionalProps: {
      type: "checkbox",
      icon: /* @__PURE__ */ g.cloneElement(x, {
        fontSize: x.props.fontSize ?? d
      }),
      checkedIcon: /* @__PURE__ */ g.cloneElement(E, {
        fontSize: E.props.fontSize ?? d
      }),
      disableRipple: f,
      slots: m,
      slotProps: {
        input: on(typeof b == "function" ? b(T) : b, {
          "data-indeterminate": s
        })
      }
    }
  });
  return /* @__PURE__ */ S(k, {
    ...A,
    classes: w
  });
});
process.env.NODE_ENV !== "production" && (_s.propTypes = {
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
const Bf = (e, t = "primary") => {
  var i;
  const o = Me[t], r = ((i = e == null ? void 0 : e.palette) == null ? void 0 : i[t]) ?? o;
  return {
    // 初始狀態（未勾選、未 hover、未 disabled）
    "&": {
      color: (r == null ? void 0 : r.myDefault) ?? o.myDefault
      // 這裡設定初始顏色
    },
    // hover 狀態
    "&:hover": {
      color: r.defaultHover ?? o.custMain,
      backgroundColor: X(r.myDefault ?? o.custMain, 0.08)
    },
    // 勾選與 indeterminate 狀態
    "&.Mui-checked, &.MuiCheckbox-indeterminate": {
      color: r.custMain ?? o.custMain
    },
    // 勾選＋hover 狀態
    "&.Mui-checked:hover": {
      color: r.custMain ?? o.custMain,
      // 維持勾選色
      backgroundColor: X(r.custMain ?? o.custMain, 0.08)
    },
    "&.Mui-disabled": {
      Opacity: X(at[0], 0.38)
    },
    // focus 狀態
    "&.Mui-focusVisible": {
      outline: `2px solid ${r.custMain ?? o.custMain, 0.08}`,
      outlineOffset: 2
    }
  };
}, If = Q(_s, {
  shouldForwardProp: (e) => e !== "color" && e !== "data-color"
})(
  ({ theme: e, color: t = "primary" }) => Bf(e, t)
), Df = ({
  color: e = "primary",
  label: t,
  ...o
}) => {
  const r = /* @__PURE__ */ S(If, { "data-color": e, ...o });
  return t ? /* @__PURE__ */ S(Xl, { control: r, label: t || void 0 }) : r;
}, my = ({
  data: e,
  checkedKeys: t = [],
  onChecked: o
}) => {
  const r = (s, c) => {
    const u = i(s), d = c ? [.../* @__PURE__ */ new Set([...t, ...u])] : t.filter((f) => !u.includes(f));
    o == null || o(d);
  }, i = (s) => {
    var u;
    let c = [s.id];
    return (u = s.children) == null || u.forEach((d) => {
      c = [...c, ...i(d)];
    }), c;
  }, a = (s) => {
    const c = i(s).slice(1), u = c.some((f) => t.includes(f)), d = c.every((f) => t.includes(f));
    return u && !d;
  }, l = (s) => s.map((c) => /* @__PURE__ */ ve("div", { style: { marginLeft: "24px" }, children: [
    /* @__PURE__ */ S(
      Df,
      {
        label: c.label,
        checked: t.includes(c.id),
        indeterminate: a(c),
        onChange: (u) => r(c, u.target.checked)
      }
    ),
    c.children && l(c.children)
  ] }, c.id));
  return /* @__PURE__ */ S("div", { children: l(e) });
}, Nf = Ke(/* @__PURE__ */ S("path", {
  d: "M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"
}), "Cancel");
function jf(e) {
  return de("MuiChip", e);
}
const me = ce("MuiChip", ["root", "sizeSmall", "sizeMedium", "colorDefault", "colorError", "colorInfo", "colorPrimary", "colorSecondary", "colorSuccess", "colorWarning", "disabled", "clickable", "clickableColorPrimary", "clickableColorSecondary", "deletable", "deletableColorPrimary", "deletableColorSecondary", "outlined", "filled", "outlinedPrimary", "outlinedSecondary", "filledPrimary", "filledSecondary", "avatar", "avatarSmall", "avatarMedium", "avatarColorPrimary", "avatarColorSecondary", "icon", "iconSmall", "iconMedium", "iconColorPrimary", "iconColorSecondary", "label", "labelSmall", "labelMedium", "deleteIcon", "deleteIconSmall", "deleteIconMedium", "deleteIconColorPrimary", "deleteIconColorSecondary", "deleteIconOutlinedColorPrimary", "deleteIconOutlinedColorSecondary", "deleteIconFilledColorPrimary", "deleteIconFilledColorSecondary", "focusVisible"]), $f = (e) => {
  const {
    classes: t,
    disabled: o,
    size: r,
    color: i,
    iconColor: a,
    onDelete: l,
    clickable: s,
    variant: c
  } = e, u = {
    root: ["root", c, o && "disabled", `size${W(r)}`, `color${W(i)}`, s && "clickable", s && `clickableColor${W(i)}`, l && "deletable", l && `deletableColor${W(i)}`, `${c}${W(i)}`],
    label: ["label", `label${W(r)}`],
    avatar: ["avatar", `avatar${W(r)}`, `avatarColor${W(i)}`],
    icon: ["icon", `icon${W(r)}`, `iconColor${W(a)}`],
    deleteIcon: ["deleteIcon", `deleteIcon${W(r)}`, `deleteIconColor${W(i)}`, `deleteIcon${W(c)}Color${W(i)}`]
  };
  return ge(u, jf, t);
}, Lf = Q("div", {
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
      [`& .${me.avatar}`]: t.avatar
    }, {
      [`& .${me.avatar}`]: t[`avatar${W(s)}`]
    }, {
      [`& .${me.avatar}`]: t[`avatarColor${W(r)}`]
    }, {
      [`& .${me.icon}`]: t.icon
    }, {
      [`& .${me.icon}`]: t[`icon${W(s)}`]
    }, {
      [`& .${me.icon}`]: t[`iconColor${W(i)}`]
    }, {
      [`& .${me.deleteIcon}`]: t.deleteIcon
    }, {
      [`& .${me.deleteIcon}`]: t[`deleteIcon${W(s)}`]
    }, {
      [`& .${me.deleteIcon}`]: t[`deleteIconColor${W(r)}`]
    }, {
      [`& .${me.deleteIcon}`]: t[`deleteIcon${W(c)}Color${W(r)}`]
    }, t.root, t[`size${W(s)}`], t[`color${W(r)}`], a && t.clickable, a && r !== "default" && t[`clickableColor${W(r)})`], l && t.deletable, l && r !== "default" && t[`deletableColor${W(r)}`], t[c], t[`${c}${W(r)}`]];
  }
})(fe(({
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
    [`&.${me.disabled}`]: {
      opacity: (e.vars || e).palette.action.disabledOpacity,
      pointerEvents: "none"
    },
    [`& .${me.avatar}`]: {
      marginLeft: 5,
      marginRight: -6,
      width: 24,
      height: 24,
      color: e.vars ? e.vars.palette.Chip.defaultAvatarColor : t,
      fontSize: e.typography.pxToRem(12)
    },
    [`& .${me.avatarColorPrimary}`]: {
      color: (e.vars || e).palette.primary.contrastText,
      backgroundColor: (e.vars || e).palette.primary.dark
    },
    [`& .${me.avatarColorSecondary}`]: {
      color: (e.vars || e).palette.secondary.contrastText,
      backgroundColor: (e.vars || e).palette.secondary.dark
    },
    [`& .${me.avatarSmall}`]: {
      marginLeft: 4,
      marginRight: -4,
      width: 18,
      height: 18,
      fontSize: e.typography.pxToRem(10)
    },
    [`& .${me.icon}`]: {
      marginLeft: 5,
      marginRight: -6
    },
    [`& .${me.deleteIcon}`]: {
      WebkitTapHighlightColor: "transparent",
      color: e.vars ? `rgba(${e.vars.palette.text.primaryChannel} / 0.26)` : X(e.palette.text.primary, 0.26),
      fontSize: 22,
      cursor: "pointer",
      margin: "0 5px 0 -6px",
      "&:hover": {
        color: e.vars ? `rgba(${e.vars.palette.text.primaryChannel} / 0.4)` : X(e.palette.text.primary, 0.4)
      }
    },
    variants: [{
      props: {
        size: "small"
      },
      style: {
        height: 24,
        [`& .${me.icon}`]: {
          fontSize: 18,
          marginLeft: 4,
          marginRight: -4
        },
        [`& .${me.deleteIcon}`]: {
          fontSize: 16,
          marginRight: 4,
          marginLeft: -4
        }
      }
    }, ...Object.entries(e.palette).filter(De(["contrastText"])).map(([o]) => ({
      props: {
        color: o
      },
      style: {
        backgroundColor: (e.vars || e).palette[o].main,
        color: (e.vars || e).palette[o].contrastText,
        [`& .${me.deleteIcon}`]: {
          color: e.vars ? `rgba(${e.vars.palette[o].contrastTextChannel} / 0.7)` : X(e.palette[o].contrastText, 0.7),
          "&:hover, &:active": {
            color: (e.vars || e).palette[o].contrastText
          }
        }
      }
    })), {
      props: (o) => o.iconColor === o.color,
      style: {
        [`& .${me.icon}`]: {
          color: e.vars ? e.vars.palette.Chip.defaultIconColor : t
        }
      }
    }, {
      props: (o) => o.iconColor === o.color && o.color !== "default",
      style: {
        [`& .${me.icon}`]: {
          color: "inherit"
        }
      }
    }, {
      props: {
        onDelete: !0
      },
      style: {
        [`&.${me.focusVisible}`]: {
          backgroundColor: e.vars ? `rgba(${e.vars.palette.action.selectedChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))` : X(e.palette.action.selected, e.palette.action.selectedOpacity + e.palette.action.focusOpacity)
        }
      }
    }, ...Object.entries(e.palette).filter(De(["dark"])).map(([o]) => ({
      props: {
        color: o,
        onDelete: !0
      },
      style: {
        [`&.${me.focusVisible}`]: {
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
          backgroundColor: e.vars ? `rgba(${e.vars.palette.action.selectedChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))` : X(e.palette.action.selected, e.palette.action.selectedOpacity + e.palette.action.hoverOpacity)
        },
        [`&.${me.focusVisible}`]: {
          backgroundColor: e.vars ? `rgba(${e.vars.palette.action.selectedChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))` : X(e.palette.action.selected, e.palette.action.selectedOpacity + e.palette.action.focusOpacity)
        },
        "&:active": {
          boxShadow: (e.vars || e).shadows[1]
        }
      }
    }, ...Object.entries(e.palette).filter(De(["dark"])).map(([o]) => ({
      props: {
        color: o,
        clickable: !0
      },
      style: {
        [`&:hover, &.${me.focusVisible}`]: {
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
        [`&.${me.clickable}:hover`]: {
          backgroundColor: (e.vars || e).palette.action.hover
        },
        [`&.${me.focusVisible}`]: {
          backgroundColor: (e.vars || e).palette.action.focus
        },
        [`& .${me.avatar}`]: {
          marginLeft: 4
        },
        [`& .${me.avatarSmall}`]: {
          marginLeft: 2
        },
        [`& .${me.icon}`]: {
          marginLeft: 4
        },
        [`& .${me.iconSmall}`]: {
          marginLeft: 2
        },
        [`& .${me.deleteIcon}`]: {
          marginRight: 5
        },
        [`& .${me.deleteIconSmall}`]: {
          marginRight: 3
        }
      }
    }, ...Object.entries(e.palette).filter(De()).map(([o]) => ({
      props: {
        variant: "outlined",
        color: o
      },
      style: {
        color: (e.vars || e).palette[o].main,
        border: `1px solid ${e.vars ? `rgba(${e.vars.palette[o].mainChannel} / 0.7)` : X(e.palette[o].main, 0.7)}`,
        [`&.${me.clickable}:hover`]: {
          backgroundColor: e.vars ? `rgba(${e.vars.palette[o].mainChannel} / ${e.vars.palette.action.hoverOpacity})` : X(e.palette[o].main, e.palette.action.hoverOpacity)
        },
        [`&.${me.focusVisible}`]: {
          backgroundColor: e.vars ? `rgba(${e.vars.palette[o].mainChannel} / ${e.vars.palette.action.focusOpacity})` : X(e.palette[o].main, e.palette.action.focusOpacity)
        },
        [`& .${me.deleteIcon}`]: {
          color: e.vars ? `rgba(${e.vars.palette[o].mainChannel} / 0.7)` : X(e.palette[o].main, 0.7),
          "&:hover, &:active": {
            color: (e.vars || e).palette[o].main
          }
        }
      }
    }))]
  };
})), zf = Q("span", {
  name: "MuiChip",
  slot: "Label",
  overridesResolver: (e, t) => {
    const {
      ownerState: o
    } = e, {
      size: r
    } = o;
    return [t.label, t[`label${W(r)}`]];
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
function wa(e) {
  return e.key === "Backspace" || e.key === "Delete";
}
const el = /* @__PURE__ */ g.forwardRef(function(t, o) {
  const r = he({
    props: t,
    name: "MuiChip"
  }), {
    avatar: i,
    className: a,
    clickable: l,
    color: s = "default",
    component: c,
    deleteIcon: u,
    disabled: d = !1,
    icon: f,
    label: h,
    onClick: m,
    onDelete: C,
    onKeyDown: y,
    onKeyUp: x,
    size: E = "medium",
    variant: T = "filled",
    tabIndex: w,
    skipFocusWhenDisabled: b = !1,
    // TODO v6: Rename to `focusableWhenDisabled`.
    ...k
  } = r, A = g.useRef(null), M = je(A, o), $ = (L) => {
    L.stopPropagation(), C && C(L);
  }, N = (L) => {
    L.currentTarget === L.target && wa(L) && L.preventDefault(), y && y(L);
  }, p = (L) => {
    L.currentTarget === L.target && C && wa(L) && C(L), x && x(L);
  }, F = l !== !1 && m ? !0 : l, B = F || C ? lt : c || "div", O = {
    ...r,
    component: B,
    disabled: d,
    size: E,
    color: s,
    iconColor: /* @__PURE__ */ g.isValidElement(f) && f.props.color || s,
    onDelete: !!C,
    clickable: F,
    variant: T
  }, I = $f(O), j = B === lt ? {
    component: c || "div",
    focusVisibleClassName: I.focusVisible,
    ...C && {
      disableRipple: !0
    }
  } : {};
  let P = null;
  C && (P = u && /* @__PURE__ */ g.isValidElement(u) ? /* @__PURE__ */ g.cloneElement(u, {
    className: _(u.props.className, I.deleteIcon),
    onClick: $
  }) : /* @__PURE__ */ S(Nf, {
    className: _(I.deleteIcon),
    onClick: $
  }));
  let U = null;
  i && /* @__PURE__ */ g.isValidElement(i) && (U = /* @__PURE__ */ g.cloneElement(i, {
    className: _(I.avatar, i.props.className)
  }));
  let H = null;
  return f && /* @__PURE__ */ g.isValidElement(f) && (H = /* @__PURE__ */ g.cloneElement(f, {
    className: _(I.icon, f.props.className)
  })), process.env.NODE_ENV !== "production" && U && H && console.error("MUI: The Chip component can not handle the avatar and the icon prop at the same time. Pick one."), /* @__PURE__ */ ve(Lf, {
    as: B,
    className: _(I.root, a),
    disabled: F && d ? !0 : void 0,
    onClick: m,
    onKeyDown: N,
    onKeyUp: p,
    ref: M,
    tabIndex: b && d ? -1 : w,
    ownerState: O,
    ...j,
    ...k,
    children: [U || H, /* @__PURE__ */ S(zf, {
      className: _(I.label),
      ownerState: O,
      children: h
    }), P]
  });
});
process.env.NODE_ENV !== "production" && (el.propTypes = {
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
  children: ys,
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
const Vf = (e, t = "primary") => {
  var i;
  const o = Me[t], r = ((i = e == null ? void 0 : e.palette) == null ? void 0 : i[t]) ?? o;
  return {
    bgColor: r.custMain ?? o.custMain,
    fontColor: r.iconFont ?? o.iconFont,
    overlay: r.iconOverlay ?? o.iconOverlay,
    selectedbgColor: r.tonal ?? o.tonal,
    selectedFontColor: r.onTonal ?? o.onTonal,
    selectedOverlay: r.onTonal ?? o.onTonal,
    iconColor: r.custMain ?? o.custMain
  };
}, Wf = Q(el, {
  shouldForwardProp: (e) => e !== "selected"
  // selected 不往下傳，其他都照傳
})(({ theme: e, selected: t = !1, avatar: o }) => {
  const r = !!o, i = Vf(e);
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
}), by = ({
  selected: e = !1,
  avatar: t,
  deleteIcon: o = /* @__PURE__ */ S(gn, {}),
  ...r
}) => /* @__PURE__ */ S(
  Wf,
  {
    ...r,
    selected: e,
    avatar: t,
    deleteIcon: o,
    variant: "outlined"
  }
), Un = /* @__PURE__ */ g.createContext({});
process.env.NODE_ENV !== "production" && (Un.displayName = "ListContext");
function Uf(e) {
  return de("MuiList", e);
}
ce("MuiList", ["root", "padding", "dense", "subheader"]);
const Hf = (e) => {
  const {
    classes: t,
    disablePadding: o,
    dense: r,
    subheader: i
  } = e;
  return ge({
    root: ["root", !o && "padding", r && "dense", i && "subheader"]
  }, Uf, t);
}, Qf = Q("ul", {
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
}), tl = /* @__PURE__ */ g.forwardRef(function(t, o) {
  const r = he({
    props: t,
    name: "MuiList"
  }), {
    children: i,
    className: a,
    component: l = "ul",
    dense: s = !1,
    disablePadding: c = !1,
    subheader: u,
    ...d
  } = r, f = g.useMemo(() => ({
    dense: s
  }), [s]), h = {
    ...r,
    component: l,
    dense: s,
    disablePadding: c
  }, m = Hf(h);
  return /* @__PURE__ */ S(Un.Provider, {
    value: f,
    children: /* @__PURE__ */ ve(Qf, {
      as: l,
      className: _(m.root, a),
      ref: o,
      ownerState: h,
      ...d,
      children: [u, i]
    })
  });
});
process.env.NODE_ENV !== "production" && (tl.propTypes = {
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
function Ir(e, t, o) {
  return e === t ? e.firstChild : t && t.nextElementSibling ? t.nextElementSibling : o ? null : e.firstChild;
}
function Sa(e, t, o) {
  return e === t ? o ? e.firstChild : e.lastChild : t && t.previousElementSibling ? t.previousElementSibling : o ? null : e.lastChild;
}
function ol(e, t) {
  if (t === void 0)
    return !0;
  let o = e.innerText;
  return o === void 0 && (o = e.textContent), o = o.trim().toLowerCase(), o.length === 0 ? !1 : t.repeating ? o[0] === t.keys[0] : o.startsWith(t.keys.join(""));
}
function Lo(e, t, o, r, i, a) {
  let l = !1, s = i(e, t, t ? o : !1);
  for (; s; ) {
    if (s === e.firstChild) {
      if (l)
        return !1;
      l = !0;
    }
    const c = r ? !1 : s.disabled || s.getAttribute("aria-disabled") === "true";
    if (!s.hasAttribute("tabindex") || !ol(s, a) || c)
      s = i(e, s, o);
    else
      return s.focus(), !0;
  }
  return !1;
}
const nl = /* @__PURE__ */ g.forwardRef(function(t, o) {
  const {
    // private
    // eslint-disable-next-line react/prop-types
    actions: r,
    autoFocus: i = !1,
    autoFocusItem: a = !1,
    children: l,
    className: s,
    disabledItemsFocusable: c = !1,
    disableListWrap: u = !1,
    onKeyDown: d,
    variant: f = "selectedMenu",
    ...h
  } = t, m = g.useRef(null), C = g.useRef({
    keys: [],
    repeating: !0,
    previousKeyMatched: !0,
    lastTime: null
  });
  gt(() => {
    i && m.current.focus();
  }, [i]), g.useImperativeHandle(r, () => ({
    adjustStyleForScrollbar: (w, {
      direction: b
    }) => {
      const k = !m.current.style.width;
      if (w.clientHeight < m.current.clientHeight && k) {
        const A = `${Cs(Ve(w))}px`;
        m.current.style[b === "rtl" ? "paddingLeft" : "paddingRight"] = A, m.current.style.width = `calc(100% + ${A})`;
      }
      return m.current;
    }
  }), []);
  const y = (w) => {
    const b = m.current, k = w.key;
    if (w.ctrlKey || w.metaKey || w.altKey) {
      d && d(w);
      return;
    }
    const M = $e(b).activeElement;
    if (k === "ArrowDown")
      w.preventDefault(), Lo(b, M, u, c, Ir);
    else if (k === "ArrowUp")
      w.preventDefault(), Lo(b, M, u, c, Sa);
    else if (k === "Home")
      w.preventDefault(), Lo(b, null, u, c, Ir);
    else if (k === "End")
      w.preventDefault(), Lo(b, null, u, c, Sa);
    else if (k.length === 1) {
      const $ = C.current, N = k.toLowerCase(), p = performance.now();
      $.keys.length > 0 && (p - $.lastTime > 500 ? ($.keys = [], $.repeating = !0, $.previousKeyMatched = !0) : $.repeating && N !== $.keys[0] && ($.repeating = !1)), $.lastTime = p, $.keys.push(N);
      const F = M && !$.repeating && ol(M, $);
      $.previousKeyMatched && (F || Lo(b, M, !1, c, Ir, $)) ? w.preventDefault() : $.previousKeyMatched = !1;
    }
    d && d(w);
  }, x = je(m, o);
  let E = -1;
  g.Children.forEach(l, (w, b) => {
    if (!/* @__PURE__ */ g.isValidElement(w)) {
      E === b && (E += 1, E >= l.length && (E = -1));
      return;
    }
    process.env.NODE_ENV !== "production" && si(w) && console.error(["MUI: The Menu component doesn't accept a Fragment as a child.", "Consider providing an array instead."].join(`
`)), w.props.disabled || (f === "selectedMenu" && w.props.selected || E === -1) && (E = b), E === b && (w.props.disabled || w.props.muiSkipListHighlight || w.type.muiSkipListHighlight) && (E += 1, E >= l.length && (E = -1));
  });
  const T = g.Children.map(l, (w, b) => {
    if (b === E) {
      const k = {};
      return a && (k.autoFocus = !0), w.props.tabIndex === void 0 && f === "selectedMenu" && (k.tabIndex = 0), /* @__PURE__ */ g.cloneElement(w, k);
    }
    return w;
  });
  return /* @__PURE__ */ S(tl, {
    role: "menu",
    ref: x,
    className: s,
    onKeyDown: y,
    tabIndex: i ? 0 : -1,
    ...h,
    children: T
  });
});
process.env.NODE_ENV !== "production" && (nl.propTypes = {
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
function Kf(e) {
  return typeof e == "string";
}
const Ei = (e) => e.scrollTop;
function qt(e, t) {
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
function ni(e) {
  return `scale(${e}, ${e ** 2})`;
}
const Yf = {
  entering: {
    opacity: 1,
    transform: ni(1)
  },
  entered: {
    opacity: 1,
    transform: "none"
  }
}, Dr = typeof navigator < "u" && /^((?!chrome|android).)*(safari|mobile)/i.test(navigator.userAgent) && /(os |version\/)15(.|_)4/i.test(navigator.userAgent), nn = /* @__PURE__ */ g.forwardRef(function(t, o) {
  const {
    addEndListener: r,
    appear: i = !0,
    children: a,
    easing: l,
    in: s,
    onEnter: c,
    onEntered: u,
    onEntering: d,
    onExit: f,
    onExited: h,
    onExiting: m,
    style: C,
    timeout: y = "auto",
    // eslint-disable-next-line react/prop-types
    TransitionComponent: x = ct,
    ...E
  } = t, T = xo(), w = g.useRef(), b = rt(), k = g.useRef(null), A = je(k, Fo(a), o), M = (j) => (P) => {
    if (j) {
      const U = k.current;
      P === void 0 ? j(U) : j(U, P);
    }
  }, $ = M(d), N = M((j, P) => {
    Ei(j);
    const {
      duration: U,
      delay: H,
      easing: L
    } = qt({
      style: C,
      timeout: y,
      easing: l
    }, {
      mode: "enter"
    });
    let R;
    y === "auto" ? (R = b.transitions.getAutoHeightDuration(j.clientHeight), w.current = R) : R = U, j.style.transition = [b.transitions.create("opacity", {
      duration: R,
      delay: H
    }), b.transitions.create("transform", {
      duration: Dr ? R : R * 0.666,
      delay: H,
      easing: L
    })].join(","), c && c(j, P);
  }), p = M(u), F = M(m), B = M((j) => {
    const {
      duration: P,
      delay: U,
      easing: H
    } = qt({
      style: C,
      timeout: y,
      easing: l
    }, {
      mode: "exit"
    });
    let L;
    y === "auto" ? (L = b.transitions.getAutoHeightDuration(j.clientHeight), w.current = L) : L = P, j.style.transition = [b.transitions.create("opacity", {
      duration: L,
      delay: U
    }), b.transitions.create("transform", {
      duration: Dr ? L : L * 0.666,
      delay: Dr ? U : U || L * 0.333,
      easing: H
    })].join(","), j.style.opacity = 0, j.style.transform = ni(0.75), f && f(j);
  }), O = M(h);
  return /* @__PURE__ */ S(x, {
    appear: i,
    in: s,
    nodeRef: k,
    onEnter: N,
    onEntered: p,
    onEntering: $,
    onExit: B,
    onExited: O,
    onExiting: F,
    addEndListener: (j) => {
      y === "auto" && T.start(w.current || 0, j), r && r(k.current, j);
    },
    timeout: y === "auto" ? null : y,
    ...E,
    children: (j, {
      ownerState: P,
      ...U
    }) => /* @__PURE__ */ g.cloneElement(a, {
      style: {
        opacity: 0,
        transform: ni(0.75),
        visibility: j === "exited" && !s ? "hidden" : void 0,
        ...Yf[j],
        ...C,
        ...a.props.style
      },
      ref: A,
      ...U
    })
  });
});
process.env.NODE_ENV !== "production" && (nn.propTypes = {
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
  children: Zt.isRequired,
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
nn && (nn.muiSupportAuto = !0);
function Gf(e) {
  const t = $e(e);
  return t.body === e ? Ve(e).innerWidth > t.documentElement.clientWidth : e.scrollHeight > e.clientHeight;
}
function Jo(e, t) {
  t ? e.setAttribute("aria-hidden", "true") : e.removeAttribute("aria-hidden");
}
function Ta(e) {
  return parseInt(Ve(e).getComputedStyle(e).paddingRight, 10) || 0;
}
function qf(e) {
  const o = ["TEMPLATE", "SCRIPT", "STYLE", "LINK", "MAP", "META", "NOSCRIPT", "PICTURE", "COL", "COLGROUP", "PARAM", "SLOT", "SOURCE", "TRACK"].includes(e.tagName), r = e.tagName === "INPUT" && e.getAttribute("type") === "hidden";
  return o || r;
}
function ka(e, t, o, r, i) {
  const a = [t, o, ...r];
  [].forEach.call(e.children, (l) => {
    const s = !a.includes(l), c = !qf(l);
    s && c && Jo(l, i);
  });
}
function Nr(e, t) {
  let o = -1;
  return e.some((r, i) => t(r) ? (o = i, !0) : !1), o;
}
function Xf(e, t) {
  const o = [], r = e.container;
  if (!t.disableScrollLock) {
    if (Gf(r)) {
      const l = Cs(Ve(r));
      o.push({
        value: r.style.paddingRight,
        property: "padding-right",
        el: r
      }), r.style.paddingRight = `${Ta(r) + l}px`;
      const s = $e(r).querySelectorAll(".mui-fixed");
      [].forEach.call(s, (c) => {
        o.push({
          value: c.style.paddingRight,
          property: "padding-right",
          el: c
        }), c.style.paddingRight = `${Ta(c) + l}px`;
      });
    }
    let a;
    if (r.parentNode instanceof DocumentFragment)
      a = $e(r).body;
    else {
      const l = r.parentElement, s = Ve(r);
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
function Jf(e) {
  const t = [];
  return [].forEach.call(e.children, (o) => {
    o.getAttribute("aria-hidden") === "true" && t.push(o);
  }), t;
}
class Zf {
  constructor() {
    this.modals = [], this.containers = [];
  }
  add(t, o) {
    let r = this.modals.indexOf(t);
    if (r !== -1)
      return r;
    r = this.modals.length, this.modals.push(t), t.modalRef && Jo(t.modalRef, !1);
    const i = Jf(o);
    ka(o, t.mount, t.modalRef, i, !0);
    const a = Nr(this.containers, (l) => l.container === o);
    return a !== -1 ? (this.containers[a].modals.push(t), r) : (this.containers.push({
      modals: [t],
      container: o,
      restore: null,
      hiddenSiblings: i
    }), r);
  }
  mount(t, o) {
    const r = Nr(this.containers, (a) => a.modals.includes(t)), i = this.containers[r];
    i.restore || (i.restore = Xf(i, o));
  }
  remove(t, o = !0) {
    const r = this.modals.indexOf(t);
    if (r === -1)
      return r;
    const i = Nr(this.containers, (l) => l.modals.includes(t)), a = this.containers[i];
    if (a.modals.splice(a.modals.indexOf(t), 1), this.modals.splice(r, 1), a.modals.length === 0)
      a.restore && a.restore(), t.modalRef && Jo(t.modalRef, o), ka(a.container, t.mount, t.modalRef, a.hiddenSiblings, !1), this.containers.splice(i, 1);
    else {
      const l = a.modals[a.modals.length - 1];
      l.modalRef && Jo(l.modalRef, !1);
    }
    return r;
  }
  isTopModal(t) {
    return this.modals.length > 0 && this.modals[this.modals.length - 1] === t;
  }
}
const _f = ["input", "select", "textarea", "a[href]", "button", "[tabindex]", "audio[controls]", "video[controls]", '[contenteditable]:not([contenteditable="false"])'].join(",");
function eg(e) {
  const t = parseInt(e.getAttribute("tabindex") || "", 10);
  return Number.isNaN(t) ? e.contentEditable === "true" || (e.nodeName === "AUDIO" || e.nodeName === "VIDEO" || e.nodeName === "DETAILS") && e.getAttribute("tabindex") === null ? 0 : e.tabIndex : t;
}
function tg(e) {
  if (e.tagName !== "INPUT" || e.type !== "radio" || !e.name)
    return !1;
  const t = (r) => e.ownerDocument.querySelector(`input[type="radio"]${r}`);
  let o = t(`[name="${e.name}"]:checked`);
  return o || (o = t(`[name="${e.name}"]`)), o !== e;
}
function og(e) {
  return !(e.disabled || e.tagName === "INPUT" && e.type === "hidden" || tg(e));
}
function ng(e) {
  const t = [], o = [];
  return Array.from(e.querySelectorAll(_f)).forEach((r, i) => {
    const a = eg(r);
    a === -1 || !og(r) || (a === 0 ? t.push(r) : o.push({
      documentOrder: i,
      tabIndex: a,
      node: r
    }));
  }), o.sort((r, i) => r.tabIndex === i.tabIndex ? r.documentOrder - i.documentOrder : r.tabIndex - i.tabIndex).map((r) => r.node).concat(t);
}
function rg() {
  return !0;
}
function Hn(e) {
  const {
    children: t,
    disableAutoFocus: o = !1,
    disableEnforceFocus: r = !1,
    disableRestoreFocus: i = !1,
    getTabbable: a = ng,
    isEnabled: l = rg,
    open: s
  } = e, c = g.useRef(!1), u = g.useRef(null), d = g.useRef(null), f = g.useRef(null), h = g.useRef(null), m = g.useRef(!1), C = g.useRef(null), y = je(Fo(t), C), x = g.useRef(null);
  g.useEffect(() => {
    !s || !C.current || (m.current = !o);
  }, [o, s]), g.useEffect(() => {
    if (!s || !C.current)
      return;
    const w = $e(C.current);
    return C.current.contains(w.activeElement) || (C.current.hasAttribute("tabIndex") || (process.env.NODE_ENV !== "production" && console.error(["MUI: The modal content node does not accept focus.", 'For the benefit of assistive technologies, the tabIndex of the node is being set to "-1".'].join(`
`)), C.current.setAttribute("tabIndex", "-1")), m.current && C.current.focus()), () => {
      i || (f.current && f.current.focus && (c.current = !0, f.current.focus()), f.current = null);
    };
  }, [s]), g.useEffect(() => {
    if (!s || !C.current)
      return;
    const w = $e(C.current), b = (M) => {
      x.current = M, !(r || !l() || M.key !== "Tab") && w.activeElement === C.current && M.shiftKey && (c.current = !0, d.current && d.current.focus());
    }, k = () => {
      var N, p;
      const M = C.current;
      if (M === null)
        return;
      if (!w.hasFocus() || !l() || c.current) {
        c.current = !1;
        return;
      }
      if (M.contains(w.activeElement) || r && w.activeElement !== u.current && w.activeElement !== d.current)
        return;
      if (w.activeElement !== h.current)
        h.current = null;
      else if (h.current !== null)
        return;
      if (!m.current)
        return;
      let $ = [];
      if ((w.activeElement === u.current || w.activeElement === d.current) && ($ = a(C.current)), $.length > 0) {
        const F = !!((N = x.current) != null && N.shiftKey && ((p = x.current) == null ? void 0 : p.key) === "Tab"), B = $[0], O = $[$.length - 1];
        typeof B != "string" && typeof O != "string" && (F ? O.focus() : B.focus());
      } else
        M.focus();
    };
    w.addEventListener("focusin", k), w.addEventListener("keydown", b, !0);
    const A = setInterval(() => {
      w.activeElement && w.activeElement.tagName === "BODY" && k();
    }, 50);
    return () => {
      clearInterval(A), w.removeEventListener("focusin", k), w.removeEventListener("keydown", b, !0);
    };
  }, [o, r, i, l, s, a]);
  const E = (w) => {
    f.current === null && (f.current = w.relatedTarget), m.current = !0, h.current = w.target;
    const b = t.props.onFocus;
    b && b(w);
  }, T = (w) => {
    f.current === null && (f.current = w.relatedTarget), m.current = !0;
  };
  return /* @__PURE__ */ ve(g.Fragment, {
    children: [/* @__PURE__ */ S("div", {
      tabIndex: s ? 0 : -1,
      onFocus: T,
      ref: u,
      "data-testid": "sentinelStart"
    }), /* @__PURE__ */ g.cloneElement(t, {
      ref: y,
      onFocus: E
    }), /* @__PURE__ */ S("div", {
      tabIndex: s ? 0 : -1,
      onFocus: T,
      ref: d,
      "data-testid": "sentinelEnd"
    })]
  });
}
process.env.NODE_ENV !== "production" && (Hn.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * A single child content element.
   */
  children: Zt,
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
process.env.NODE_ENV !== "production" && (Hn.propTypes = gi(Hn.propTypes));
function ig(e) {
  return typeof e == "function" ? e() : e;
}
const rn = /* @__PURE__ */ g.forwardRef(function(t, o) {
  const {
    children: r,
    container: i,
    disablePortal: a = !1
  } = t, [l, s] = g.useState(null), c = je(/* @__PURE__ */ g.isValidElement(r) ? Fo(r) : null, o);
  if (gt(() => {
    a || s(ig(i) || document.body);
  }, [i, a]), gt(() => {
    if (l && !a)
      return na(o, l), () => {
        na(o, null);
      };
  }, [o, l, a]), a) {
    if (/* @__PURE__ */ g.isValidElement(r)) {
      const u = {
        ref: c
      };
      return /* @__PURE__ */ g.cloneElement(r, u);
    }
    return r;
  }
  return l && /* @__PURE__ */ Ur.createPortal(r, l);
});
process.env.NODE_ENV !== "production" && (rn.propTypes = {
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
process.env.NODE_ENV !== "production" && (rn.propTypes = gi(rn.propTypes));
const ag = {
  entering: {
    opacity: 1
  },
  entered: {
    opacity: 1
  }
}, Qn = /* @__PURE__ */ g.forwardRef(function(t, o) {
  const r = rt(), i = {
    enter: r.transitions.duration.enteringScreen,
    exit: r.transitions.duration.leavingScreen
  }, {
    addEndListener: a,
    appear: l = !0,
    children: s,
    easing: c,
    in: u,
    onEnter: d,
    onEntered: f,
    onEntering: h,
    onExit: m,
    onExited: C,
    onExiting: y,
    style: x,
    timeout: E = i,
    // eslint-disable-next-line react/prop-types
    TransitionComponent: T = ct,
    ...w
  } = t, b = g.useRef(null), k = je(b, Fo(s), o), A = (I) => (j) => {
    if (I) {
      const P = b.current;
      j === void 0 ? I(P) : I(P, j);
    }
  }, M = A(h), $ = A((I, j) => {
    Ei(I);
    const P = qt({
      style: x,
      timeout: E,
      easing: c
    }, {
      mode: "enter"
    });
    I.style.webkitTransition = r.transitions.create("opacity", P), I.style.transition = r.transitions.create("opacity", P), d && d(I, j);
  }), N = A(f), p = A(y), F = A((I) => {
    const j = qt({
      style: x,
      timeout: E,
      easing: c
    }, {
      mode: "exit"
    });
    I.style.webkitTransition = r.transitions.create("opacity", j), I.style.transition = r.transitions.create("opacity", j), m && m(I);
  }), B = A(C);
  return /* @__PURE__ */ S(T, {
    appear: l,
    in: u,
    nodeRef: b,
    onEnter: $,
    onEntered: N,
    onEntering: M,
    onExit: F,
    onExited: B,
    onExiting: p,
    addEndListener: (I) => {
      a && a(b.current, I);
    },
    timeout: E,
    ...w,
    children: (I, {
      ownerState: j,
      ...P
    }) => /* @__PURE__ */ g.cloneElement(s, {
      style: {
        opacity: 0,
        visibility: I === "exited" && !u ? "hidden" : void 0,
        ...ag[I],
        ...x,
        ...s.props.style
      },
      ref: k,
      ...P
    })
  });
});
process.env.NODE_ENV !== "production" && (Qn.propTypes = {
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
  children: Zt.isRequired,
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
function sg(e) {
  return de("MuiBackdrop", e);
}
ce("MuiBackdrop", ["root", "invisible"]);
const lg = (e) => {
  const {
    classes: t,
    invisible: o
  } = e;
  return ge({
    root: ["root", o && "invisible"]
  }, sg, t);
}, cg = Q("div", {
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
}), wi = /* @__PURE__ */ g.forwardRef(function(t, o) {
  const r = he({
    props: t,
    name: "MuiBackdrop"
  }), {
    children: i,
    className: a,
    component: l = "div",
    invisible: s = !1,
    open: c,
    components: u = {},
    componentsProps: d = {},
    slotProps: f = {},
    slots: h = {},
    TransitionComponent: m,
    transitionDuration: C,
    ...y
  } = r, x = {
    ...r,
    component: l,
    invisible: s
  }, E = lg(x), T = {
    transition: m,
    root: u.Root,
    ...h
  }, w = {
    ...d,
    ...f
  }, b = {
    slots: T,
    slotProps: w
  }, [k, A] = le("root", {
    elementType: cg,
    externalForwardedProps: b,
    className: _(E.root, a),
    ownerState: x
  }), [M, $] = le("transition", {
    elementType: Qn,
    externalForwardedProps: b,
    ownerState: x
  });
  return /* @__PURE__ */ S(M, {
    in: c,
    timeout: C,
    ...y,
    ...$,
    children: /* @__PURE__ */ S(k, {
      "aria-hidden": !0,
      ...A,
      classes: E,
      ref: o,
      children: i
    })
  });
});
process.env.NODE_ENV !== "production" && (wi.propTypes = {
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
function ug(e) {
  return typeof e == "function" ? e() : e;
}
function pg(e) {
  return e ? e.props.hasOwnProperty("in") : !1;
}
const Oa = () => {
}, wn = new Zf();
function dg(e) {
  const {
    container: t,
    disableEscapeKeyDown: o = !1,
    disableScrollLock: r = !1,
    closeAfterTransition: i = !1,
    onTransitionEnter: a,
    onTransitionExited: l,
    children: s,
    onClose: c,
    open: u,
    rootRef: d
  } = e, f = g.useRef({}), h = g.useRef(null), m = g.useRef(null), C = je(m, d), [y, x] = g.useState(!u), E = pg(s);
  let T = !0;
  (e["aria-hidden"] === "false" || e["aria-hidden"] === !1) && (T = !1);
  const w = () => $e(h.current), b = () => (f.current.modalRef = m.current, f.current.mount = h.current, f.current), k = () => {
    wn.mount(b(), {
      disableScrollLock: r
    }), m.current && (m.current.scrollTop = 0);
  }, A = Ue(() => {
    const j = ug(t) || w().body;
    wn.add(b(), j), m.current && k();
  }), M = () => wn.isTopModal(b()), $ = Ue((j) => {
    h.current = j, j && (u && M() ? k() : m.current && Jo(m.current, T));
  }), N = g.useCallback(() => {
    wn.remove(b(), T);
  }, [T]);
  g.useEffect(() => () => {
    N();
  }, [N]), g.useEffect(() => {
    u ? A() : (!E || !i) && N();
  }, [u, N, E, i, A]);
  const p = (j) => (P) => {
    var U;
    (U = j.onKeyDown) == null || U.call(j, P), !(P.key !== "Escape" || P.which === 229 || // Wait until IME is settled.
    !M()) && (o || (P.stopPropagation(), c && c(P, "escapeKeyDown")));
  }, F = (j) => (P) => {
    var U;
    (U = j.onClick) == null || U.call(j, P), P.target === P.currentTarget && c && c(P, "backdropClick");
  };
  return {
    getRootProps: (j = {}) => {
      const P = Ss(e);
      delete P.onTransitionEnter, delete P.onTransitionExited;
      const U = {
        ...P,
        ...j
      };
      return {
        /*
         * Marking an element with the role presentation indicates to assistive technology
         * that this element should be ignored; it exists to support the web application and
         * is not meant for humans to interact with directly.
         * https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/no-static-element-interactions.md
         */
        role: "presentation",
        ...U,
        onKeyDown: p(U),
        ref: C
      };
    },
    getBackdropProps: (j = {}) => {
      const P = j;
      return {
        "aria-hidden": !0,
        ...P,
        onClick: F(P),
        open: u
      };
    },
    getTransitionProps: () => {
      const j = () => {
        x(!1), a && a();
      }, P = () => {
        x(!0), l && l(), i && N();
      };
      return {
        onEnter: Qr(j, (s == null ? void 0 : s.props.onEnter) ?? Oa),
        onExited: Qr(P, (s == null ? void 0 : s.props.onExited) ?? Oa)
      };
    },
    rootRef: C,
    portalRef: $,
    isTopModal: M,
    exited: y,
    hasTransition: E
  };
}
function fg(e) {
  return de("MuiModal", e);
}
ce("MuiModal", ["root", "hidden", "backdrop"]);
const gg = (e) => {
  const {
    open: t,
    exited: o,
    classes: r
  } = e;
  return ge({
    root: ["root", !t && o && "hidden"],
    backdrop: ["backdrop"]
  }, fg, r);
}, hg = Q("div", {
  name: "MuiModal",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: o
    } = e;
    return [t.root, !o.open && o.exited && t.hidden];
  }
})(fe(({
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
}))), mg = Q(wi, {
  name: "MuiModal",
  slot: "Backdrop",
  overridesResolver: (e, t) => t.backdrop
})({
  zIndex: -1
}), cr = /* @__PURE__ */ g.forwardRef(function(t, o) {
  const r = he({
    name: "MuiModal",
    props: t
  }), {
    BackdropComponent: i = mg,
    BackdropProps: a,
    classes: l,
    className: s,
    closeAfterTransition: c = !1,
    children: u,
    container: d,
    component: f,
    components: h = {},
    componentsProps: m = {},
    disableAutoFocus: C = !1,
    disableEnforceFocus: y = !1,
    disableEscapeKeyDown: x = !1,
    disablePortal: E = !1,
    disableRestoreFocus: T = !1,
    disableScrollLock: w = !1,
    hideBackdrop: b = !1,
    keepMounted: k = !1,
    onBackdropClick: A,
    onClose: M,
    onTransitionEnter: $,
    onTransitionExited: N,
    open: p,
    slotProps: F = {},
    slots: B = {},
    // eslint-disable-next-line react/prop-types
    theme: O,
    ...I
  } = r, j = {
    ...r,
    closeAfterTransition: c,
    disableAutoFocus: C,
    disableEnforceFocus: y,
    disableEscapeKeyDown: x,
    disablePortal: E,
    disableRestoreFocus: T,
    disableScrollLock: w,
    hideBackdrop: b,
    keepMounted: k
  }, {
    getRootProps: P,
    getBackdropProps: U,
    getTransitionProps: H,
    portalRef: L,
    isTopModal: R,
    exited: V,
    hasTransition: ne
  } = dg({
    ...j,
    rootRef: o
  }), te = {
    ...j,
    exited: V
  }, G = gg(te), Y = {};
  if (u.props.tabIndex === void 0 && (Y.tabIndex = "-1"), ne) {
    const {
      onEnter: Z,
      onExited: J
    } = H();
    Y.onEnter = Z, Y.onExited = J;
  }
  const q = {
    slots: {
      root: h.Root,
      backdrop: h.Backdrop,
      ...B
    },
    slotProps: {
      ...m,
      ...F
    }
  }, [z, oe] = le("root", {
    ref: o,
    elementType: hg,
    externalForwardedProps: {
      ...q,
      ...I,
      component: f
    },
    getSlotProps: P,
    ownerState: te,
    className: _(s, G == null ? void 0 : G.root, !te.open && te.exited && (G == null ? void 0 : G.hidden))
  }), [re, K] = le("backdrop", {
    ref: a == null ? void 0 : a.ref,
    elementType: i,
    externalForwardedProps: q,
    shouldForwardComponentProp: !0,
    additionalProps: a,
    getSlotProps: (Z) => U({
      ...Z,
      onClick: (J) => {
        A && A(J), Z != null && Z.onClick && Z.onClick(J);
      }
    }),
    className: _(a == null ? void 0 : a.className, G == null ? void 0 : G.backdrop),
    ownerState: te
  });
  return !k && !p && (!ne || V) ? null : /* @__PURE__ */ S(rn, {
    ref: L,
    container: d,
    disablePortal: E,
    children: /* @__PURE__ */ ve(z, {
      ...oe,
      children: [!b && i ? /* @__PURE__ */ S(re, {
        ...K
      }) : null, /* @__PURE__ */ S(Hn, {
        disableEnforceFocus: y,
        disableAutoFocus: C,
        disableRestoreFocus: T,
        isEnabled: R,
        open: p,
        children: /* @__PURE__ */ g.cloneElement(u, Y)
      })]
    })
  });
});
process.env.NODE_ENV !== "production" && (cr.propTypes = {
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
  children: Zt.isRequired,
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
function bg(e) {
  return de("MuiPopover", e);
}
ce("MuiPopover", ["root", "paper"]);
function Aa(e, t) {
  let o = 0;
  return typeof t == "number" ? o = t : t === "center" ? o = e.height / 2 : t === "bottom" && (o = e.height), o;
}
function Ra(e, t) {
  let o = 0;
  return typeof t == "number" ? o = t : t === "center" ? o = e.width / 2 : t === "right" && (o = e.width), o;
}
function Fa(e) {
  return [e.horizontal, e.vertical].map((t) => typeof t == "number" ? `${t}px` : t).join(" ");
}
function Yo(e) {
  return typeof e == "function" ? e() : e;
}
const yg = (e) => {
  const {
    classes: t
  } = e;
  return ge({
    root: ["root"],
    paper: ["paper"]
  }, bg, t);
}, vg = Q(cr, {
  name: "MuiPopover",
  slot: "Root",
  overridesResolver: (e, t) => t.root
})({}), rl = Q(Mo, {
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
}), il = /* @__PURE__ */ g.forwardRef(function(t, o) {
  const r = he({
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
    children: u,
    className: d,
    container: f,
    elevation: h = 8,
    marginThreshold: m = 16,
    open: C,
    PaperProps: y = {},
    // TODO: remove in v7
    slots: x = {},
    slotProps: E = {},
    transformOrigin: T = {
      vertical: "top",
      horizontal: "left"
    },
    TransitionComponent: w,
    // TODO: remove in v7
    transitionDuration: b = "auto",
    TransitionProps: k = {},
    // TODO: remove in v7
    disableScrollLock: A = !1,
    ...M
  } = r, $ = g.useRef(), N = {
    ...r,
    anchorOrigin: l,
    anchorReference: c,
    elevation: h,
    marginThreshold: m,
    transformOrigin: T,
    TransitionComponent: w,
    transitionDuration: b,
    TransitionProps: k
  }, p = yg(N), F = g.useCallback(() => {
    if (c === "anchorPosition")
      return process.env.NODE_ENV !== "production" && (s || console.error('MUI: You need to provide a `anchorPosition` prop when using <Popover anchorReference="anchorPosition" />.')), s;
    const K = Yo(a), Z = K && K.nodeType === 1 ? K : $e($.current).body, J = Z.getBoundingClientRect();
    if (process.env.NODE_ENV !== "production") {
      const ue = Z.getBoundingClientRect();
      process.env.NODE_ENV !== "test" && ue.top === 0 && ue.left === 0 && ue.right === 0 && ue.bottom === 0 && console.warn(["MUI: The `anchorEl` prop provided to the component is invalid.", "The anchor element should be part of the document layout.", "Make sure the element is present in the document or that it's not display none."].join(`
`));
    }
    return {
      top: J.top + Aa(J, l.vertical),
      left: J.left + Ra(J, l.horizontal)
    };
  }, [a, l.horizontal, l.vertical, s, c]), B = g.useCallback((K) => ({
    vertical: Aa(K, T.vertical),
    horizontal: Ra(K, T.horizontal)
  }), [T.horizontal, T.vertical]), O = g.useCallback((K) => {
    const Z = {
      width: K.offsetWidth,
      height: K.offsetHeight
    }, J = B(Z);
    if (c === "none")
      return {
        top: null,
        left: null,
        transformOrigin: Fa(J)
      };
    const ue = F();
    let pe = ue.top - J.vertical, ke = ue.left - J.horizontal;
    const xe = pe + Z.height, be = ke + Z.width, Ee = Ve(Yo(a)), Ie = Ee.innerHeight - m, Ne = Ee.innerWidth - m;
    if (m !== null && pe < m) {
      const we = pe - m;
      pe -= we, J.vertical += we;
    } else if (m !== null && xe > Ie) {
      const we = xe - Ie;
      pe -= we, J.vertical += we;
    }
    if (process.env.NODE_ENV !== "production" && Z.height > Ie && Z.height && Ie && console.error(["MUI: The popover component is too tall.", `Some part of it can not be seen on the screen (${Z.height - Ie}px).`, "Please consider adding a `max-height` to improve the user-experience."].join(`
`)), m !== null && ke < m) {
      const we = ke - m;
      ke -= we, J.horizontal += we;
    } else if (be > Ne) {
      const we = be - Ne;
      ke -= we, J.horizontal += we;
    }
    return {
      top: `${Math.round(pe)}px`,
      left: `${Math.round(ke)}px`,
      transformOrigin: Fa(J)
    };
  }, [a, c, F, B, m]), [I, j] = g.useState(C), P = g.useCallback(() => {
    const K = $.current;
    if (!K)
      return;
    const Z = O(K);
    Z.top !== null && K.style.setProperty("top", Z.top), Z.left !== null && (K.style.left = Z.left), K.style.transformOrigin = Z.transformOrigin, j(!0);
  }, [O]);
  g.useEffect(() => (A && window.addEventListener("scroll", P), () => window.removeEventListener("scroll", P)), [a, A, P]);
  const U = () => {
    P();
  }, H = () => {
    j(!1);
  };
  g.useEffect(() => {
    C && P();
  }), g.useImperativeHandle(i, () => C ? {
    updatePosition: () => {
      P();
    }
  } : null, [C, P]), g.useEffect(() => {
    if (!C)
      return;
    const K = ir(() => {
      P();
    }), Z = Ve(Yo(a));
    return Z.addEventListener("resize", K), () => {
      K.clear(), Z.removeEventListener("resize", K);
    };
  }, [a, C, P]);
  let L = b;
  const R = {
    slots: {
      transition: w,
      ...x
    },
    slotProps: {
      transition: k,
      paper: y,
      ...E
    }
  }, [V, ne] = le("transition", {
    elementType: nn,
    externalForwardedProps: R,
    ownerState: N,
    getSlotProps: (K) => ({
      ...K,
      onEntering: (Z, J) => {
        var ue;
        (ue = K.onEntering) == null || ue.call(K, Z, J), U();
      },
      onExited: (Z) => {
        var J;
        (J = K.onExited) == null || J.call(K, Z), H();
      }
    }),
    additionalProps: {
      appear: !0,
      in: C
    }
  });
  b === "auto" && !V.muiSupportAuto && (L = void 0);
  const te = f || (a ? $e(Yo(a)).body : void 0), [G, {
    slots: Y,
    slotProps: q,
    ...z
  }] = le("root", {
    ref: o,
    elementType: vg,
    externalForwardedProps: {
      ...R,
      ...M
    },
    shouldForwardComponentProp: !0,
    additionalProps: {
      slots: {
        backdrop: x.backdrop
      },
      slotProps: {
        backdrop: on(typeof E.backdrop == "function" ? E.backdrop(N) : E.backdrop, {
          invisible: !0
        })
      },
      container: te,
      open: C
    },
    ownerState: N,
    className: _(p.root, d)
  }), [oe, re] = le("paper", {
    ref: $,
    className: p.paper,
    elementType: rl,
    externalForwardedProps: R,
    shouldForwardComponentProp: !0,
    additionalProps: {
      elevation: h,
      style: I ? void 0 : {
        opacity: 0
      }
    },
    ownerState: N
  });
  return /* @__PURE__ */ S(G, {
    ...z,
    ...!Kf(G) && {
      slots: Y,
      slotProps: q,
      disableScrollLock: A
    },
    children: /* @__PURE__ */ S(V, {
      ...ne,
      timeout: L,
      children: /* @__PURE__ */ S(oe, {
        ...re,
        children: u
      })
    })
  });
});
process.env.NODE_ENV !== "production" && (il.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * A ref for imperative actions.
   * It currently only supports updatePosition() action.
   */
  action: Ot,
  /**
   * An HTML element, [PopoverVirtualElement](https://mui.com/material-ui/react-popover/#virtual-element),
   * or a function that returns either.
   * It's used to set the position of the popover.
   */
  anchorEl: kt(n.oneOfType([ht, n.func]), (e) => {
    if (e.open && (!e.anchorReference || e.anchorReference === "anchorEl")) {
      const t = Yo(e.anchorEl);
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
  elevation: mi,
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
    component: $n
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
function Cg(e) {
  return de("MuiMenu", e);
}
ce("MuiMenu", ["root", "paper", "list"]);
const xg = {
  vertical: "top",
  horizontal: "right"
}, Eg = {
  vertical: "top",
  horizontal: "left"
}, wg = (e) => {
  const {
    classes: t
  } = e;
  return ge({
    root: ["root"],
    paper: ["paper"],
    list: ["list"]
  }, Cg, t);
}, Sg = Q(il, {
  shouldForwardProp: (e) => it(e) || e === "classes",
  name: "MuiMenu",
  slot: "Root",
  overridesResolver: (e, t) => t.root
})({}), Tg = Q(rl, {
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
}), kg = Q(nl, {
  name: "MuiMenu",
  slot: "List",
  overridesResolver: (e, t) => t.list
})({
  // We disable the focus ring for mouse, touch and keyboard users.
  outline: 0
}), al = /* @__PURE__ */ g.forwardRef(function(t, o) {
  const r = he({
    props: t,
    name: "MuiMenu"
  }), {
    autoFocus: i = !0,
    children: a,
    className: l,
    disableAutoFocusItem: s = !1,
    MenuListProps: c = {},
    onClose: u,
    open: d,
    PaperProps: f = {},
    PopoverClasses: h,
    transitionDuration: m = "auto",
    TransitionProps: {
      onEntering: C,
      ...y
    } = {},
    variant: x = "selectedMenu",
    slots: E = {},
    slotProps: T = {},
    ...w
  } = r, b = Po(), k = {
    ...r,
    autoFocus: i,
    disableAutoFocusItem: s,
    MenuListProps: c,
    onEntering: C,
    PaperProps: f,
    transitionDuration: m,
    TransitionProps: y,
    variant: x
  }, A = wg(k), M = i && !s && d, $ = g.useRef(null), N = (L, R) => {
    $.current && $.current.adjustStyleForScrollbar(L, {
      direction: b ? "rtl" : "ltr"
    }), C && C(L, R);
  }, p = (L) => {
    L.key === "Tab" && (L.preventDefault(), u && u(L, "tabKeyDown"));
  };
  let F = -1;
  g.Children.map(a, (L, R) => {
    /* @__PURE__ */ g.isValidElement(L) && (process.env.NODE_ENV !== "production" && si(L) && console.error(["MUI: The Menu component doesn't accept a Fragment as a child.", "Consider providing an array instead."].join(`
`)), L.props.disabled || (x === "selectedMenu" && L.props.selected || F === -1) && (F = R));
  });
  const B = {
    slots: E,
    slotProps: {
      list: c,
      transition: y,
      paper: f,
      ...T
    }
  }, O = To({
    elementType: E.root,
    externalSlotProps: T.root,
    ownerState: k,
    className: [A.root, l]
  }), [I, j] = le("paper", {
    className: A.paper,
    elementType: Tg,
    externalForwardedProps: B,
    shouldForwardComponentProp: !0,
    ownerState: k
  }), [P, U] = le("list", {
    className: _(A.list, c.className),
    elementType: kg,
    shouldForwardComponentProp: !0,
    externalForwardedProps: B,
    getSlotProps: (L) => ({
      ...L,
      onKeyDown: (R) => {
        var V;
        p(R), (V = L.onKeyDown) == null || V.call(L, R);
      }
    }),
    ownerState: k
  }), H = typeof B.slotProps.transition == "function" ? B.slotProps.transition(k) : B.slotProps.transition;
  return /* @__PURE__ */ S(Sg, {
    onClose: u,
    anchorOrigin: {
      vertical: "bottom",
      horizontal: b ? "right" : "left"
    },
    transformOrigin: b ? xg : Eg,
    slots: {
      root: E.root,
      paper: I,
      backdrop: E.backdrop,
      ...E.transition && {
        // TODO: pass `slots.transition` directly once `TransitionComponent` is removed from Popover
        transition: E.transition
      }
    },
    slotProps: {
      root: O,
      paper: j,
      backdrop: typeof T.backdrop == "function" ? T.backdrop(k) : T.backdrop,
      transition: {
        ...H,
        onEntering: (...L) => {
          var R;
          N(...L), (R = H == null ? void 0 : H.onEntering) == null || R.call(H, ...L);
        }
      }
    },
    open: d,
    ref: o,
    transitionDuration: m,
    ownerState: k,
    ...w,
    classes: h,
    children: /* @__PURE__ */ S(P, {
      actions: $,
      autoFocus: i && (F === -1 || s),
      autoFocusItem: M,
      variant: x,
      ...U,
      children: a
    })
  });
});
process.env.NODE_ENV !== "production" && (al.propTypes = {
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
const Og = Q(al)(() => ({
  "& .MuiPaper-root": {
    boxShadow: "0px 2px 6px 2px #00000026, 0px 1px 2px 0px #0000004D"
  }
})), yy = ({ open: e, ...t }) => /* @__PURE__ */ S(Og, { open: e, ...t }), Pa = ce("MuiDivider", ["root", "absolute", "fullWidth", "inset", "middle", "flexItem", "light", "vertical", "withChildren", "withChildrenVertical", "textAlignRight", "textAlignLeft", "wrapper", "wrapperVertical"]), Ma = ce("MuiListItemIcon", ["root", "alignItemsFlexStart"]);
function Ag(e) {
  return de("MuiTypography", e);
}
ce("MuiTypography", ["root", "h1", "h2", "h3", "h4", "h5", "h6", "subtitle1", "subtitle2", "body1", "body2", "inherit", "button", "caption", "overline", "alignLeft", "alignRight", "alignCenter", "alignJustify", "noWrap", "gutterBottom", "paragraph"]);
const Rg = {
  primary: !0,
  secondary: !0,
  error: !0,
  info: !0,
  success: !0,
  warning: !0,
  textPrimary: !0,
  textSecondary: !0,
  textDisabled: !0
}, Fg = Fp(), Pg = (e) => {
  const {
    align: t,
    gutterBottom: o,
    noWrap: r,
    paragraph: i,
    variant: a,
    classes: l
  } = e, s = {
    root: ["root", a, e.align !== "inherit" && `align${W(t)}`, o && "gutterBottom", r && "noWrap", i && "paragraph"]
  };
  return ge(s, Ag, l);
}, Mg = Q("span", {
  name: "MuiTypography",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: o
    } = e;
    return [t.root, o.variant && t[o.variant], o.align !== "inherit" && t[`align${W(o.align)}`], o.noWrap && t.noWrap, o.gutterBottom && t.gutterBottom, o.paragraph && t.paragraph];
  }
})(fe(({
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
    })), ...Object.entries(e.palette).filter(De()).map(([o]) => ({
      props: {
        color: o
      },
      style: {
        color: (e.vars || e).palette[o].main
      }
    })), ...Object.entries(((t = e.palette) == null ? void 0 : t.text) || {}).filter(([, o]) => typeof o == "string").map(([o]) => ({
      props: {
        color: `text${W(o)}`
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
})), Ba = {
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
}, Xt = /* @__PURE__ */ g.forwardRef(function(t, o) {
  const {
    color: r,
    ...i
  } = he({
    props: t,
    name: "MuiTypography"
  }), a = !Rg[r], l = Fg({
    ...i,
    ...a && {
      color: r
    }
  }), {
    align: s = "inherit",
    className: c,
    component: u,
    gutterBottom: d = !1,
    noWrap: f = !1,
    paragraph: h = !1,
    variant: m = "body1",
    variantMapping: C = Ba,
    ...y
  } = l, x = {
    ...l,
    align: s,
    color: r,
    className: c,
    component: u,
    gutterBottom: d,
    noWrap: f,
    paragraph: h,
    variant: m,
    variantMapping: C
  }, E = u || (h ? "p" : C[m] || Ba[m]) || "span", T = Pg(x);
  return /* @__PURE__ */ S(Mg, {
    as: E,
    ref: o,
    className: _(T.root, c),
    ...y,
    ownerState: x,
    style: {
      ...s !== "inherit" && {
        "--Typography-textAlign": s
      },
      ...y.style
    }
  });
});
process.env.NODE_ENV !== "production" && (Xt.propTypes = {
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
const Ia = ce("MuiListItemText", ["root", "multiline", "dense", "inset", "primary", "secondary"]);
function Bg(e) {
  return de("MuiMenuItem", e);
}
const zo = ce("MuiMenuItem", ["root", "focusVisible", "dense", "disabled", "divider", "gutters", "selected"]), Ig = (e, t) => {
  const {
    ownerState: o
  } = e;
  return [t.root, o.dense && t.dense, o.divider && t.divider, !o.disableGutters && t.gutters];
}, Dg = (e) => {
  const {
    disabled: t,
    dense: o,
    divider: r,
    disableGutters: i,
    selected: a,
    classes: l
  } = e, c = ge({
    root: ["root", o && "dense", t && "disabled", !i && "gutters", r && "divider", a && "selected"]
  }, Bg, l);
  return {
    ...l,
    ...c
  };
}, Ng = Q(lt, {
  shouldForwardProp: (e) => it(e) || e === "classes",
  name: "MuiMenuItem",
  slot: "Root",
  overridesResolver: Ig
})(fe(({
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
  [`&.${zo.selected}`]: {
    backgroundColor: e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})` : X(e.palette.primary.main, e.palette.action.selectedOpacity),
    [`&.${zo.focusVisible}`]: {
      backgroundColor: e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))` : X(e.palette.primary.main, e.palette.action.selectedOpacity + e.palette.action.focusOpacity)
    }
  },
  [`&.${zo.selected}:hover`]: {
    backgroundColor: e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))` : X(e.palette.primary.main, e.palette.action.selectedOpacity + e.palette.action.hoverOpacity),
    // Reset on touch devices, it doesn't add specificity
    "@media (hover: none)": {
      backgroundColor: e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})` : X(e.palette.primary.main, e.palette.action.selectedOpacity)
    }
  },
  [`&.${zo.focusVisible}`]: {
    backgroundColor: (e.vars || e).palette.action.focus
  },
  [`&.${zo.disabled}`]: {
    opacity: (e.vars || e).palette.action.disabledOpacity
  },
  [`& + .${Pa.root}`]: {
    marginTop: e.spacing(1),
    marginBottom: e.spacing(1)
  },
  [`& + .${Pa.inset}`]: {
    marginLeft: 52
  },
  [`& .${Ia.root}`]: {
    marginTop: 0,
    marginBottom: 0
  },
  [`& .${Ia.inset}`]: {
    paddingLeft: 36
  },
  [`& .${Ma.root}`]: {
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
      [`& .${Ma.root} svg`]: {
        fontSize: "1.25rem"
      }
    }
  }]
}))), sl = /* @__PURE__ */ g.forwardRef(function(t, o) {
  const r = he({
    props: t,
    name: "MuiMenuItem"
  }), {
    autoFocus: i = !1,
    component: a = "li",
    dense: l = !1,
    divider: s = !1,
    disableGutters: c = !1,
    focusVisibleClassName: u,
    role: d = "menuitem",
    tabIndex: f,
    className: h,
    ...m
  } = r, C = g.useContext(Un), y = g.useMemo(() => ({
    dense: l || C.dense || !1,
    disableGutters: c
  }), [C.dense, l, c]), x = g.useRef(null);
  gt(() => {
    i && (x.current ? x.current.focus() : process.env.NODE_ENV !== "production" && console.error("MUI: Unable to set focus to a MenuItem whose component has not been rendered."));
  }, [i]);
  const E = {
    ...r,
    dense: y.dense,
    divider: s,
    disableGutters: c
  }, T = Dg(r), w = je(x, o);
  let b;
  return r.disabled || (b = f !== void 0 ? f : -1), /* @__PURE__ */ S(Un.Provider, {
    value: y,
    children: /* @__PURE__ */ S(Ng, {
      ref: w,
      role: d,
      tabIndex: b,
      component: a,
      focusVisibleClassName: _(T.focusVisible, u),
      className: _(T.root, h),
      ...m,
      ownerState: E,
      classes: T
    })
  });
});
process.env.NODE_ENV !== "production" && (sl.propTypes = {
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
const jg = (e, t = "primary") => {
  var i;
  const o = Me[t], r = ((i = e == null ? void 0 : e.palette) == null ? void 0 : i[t]) ?? o;
  return {
    fontColor: r.menuFont ?? o.menuFont,
    selectedBg: r.tonal ?? o.tonal,
    selectedFont: r.onTonal ?? o.onTonal
  };
}, $g = Q(
  sl,
  {}
)(({ theme: e }) => {
  const t = jg(e);
  return {
    fontFamily: "Noto Sans, Noto Sans TC, sans-serif",
    color: t.fontColor,
    "&:hover": {
      backgroundColor: X(t.fontColor, 0.08)
    },
    "&.Mui-selected": {
      backgroundColor: t.selectedBg,
      color: t.selectedFont
    },
    "& .MuiTouchRipple-root": {
      display: "none"
    }
  };
}), vy = ({ ...e }) => /* @__PURE__ */ S($g, { ...e });
function Lg(e) {
  return de("MuiDialog", e);
}
const jr = ce("MuiDialog", ["root", "scrollPaper", "scrollBody", "container", "paper", "paperScrollPaper", "paperScrollBody", "paperWidthFalse", "paperWidthXs", "paperWidthSm", "paperWidthMd", "paperWidthLg", "paperWidthXl", "paperFullWidth", "paperFullScreen"]), Si = /* @__PURE__ */ g.createContext({});
process.env.NODE_ENV !== "production" && (Si.displayName = "DialogContext");
const zg = Q(wi, {
  name: "MuiDialog",
  slot: "Backdrop",
  overrides: (e, t) => t.backdrop
})({
  // Improve scrollable dialog support.
  zIndex: -1
}), Vg = (e) => {
  const {
    classes: t,
    scroll: o,
    maxWidth: r,
    fullWidth: i,
    fullScreen: a
  } = e, l = {
    root: ["root"],
    container: ["container", `scroll${W(o)}`],
    paper: ["paper", `paperScroll${W(o)}`, `paperWidth${W(String(r))}`, i && "paperFullWidth", a && "paperFullScreen"]
  };
  return ge(l, Lg, t);
}, Wg = Q(cr, {
  name: "MuiDialog",
  slot: "Root",
  overridesResolver: (e, t) => t.root
})({
  "@media print": {
    // Use !important to override the Modal inline-style.
    position: "absolute !important"
  }
}), Ug = Q("div", {
  name: "MuiDialog",
  slot: "Container",
  overridesResolver: (e, t) => {
    const {
      ownerState: o
    } = e;
    return [t.container, t[`scroll${W(o.scroll)}`]];
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
}), Hg = Q(Mo, {
  name: "MuiDialog",
  slot: "Paper",
  overridesResolver: (e, t) => {
    const {
      ownerState: o
    } = e;
    return [t.paper, t[`scrollPaper${W(o.scroll)}`], t[`paperWidth${W(String(o.maxWidth))}`], o.fullWidth && t.paperFullWidth, o.fullScreen && t.paperFullScreen];
  }
})(fe(({
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
      [`&.${jr.paperScrollBody}`]: {
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
      [`&.${jr.paperScrollBody}`]: {
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
      [`&.${jr.paperScrollBody}`]: {
        margin: 0,
        maxWidth: "100%"
      }
    }
  }]
}))), ll = /* @__PURE__ */ g.forwardRef(function(t, o) {
  const r = he({
    props: t,
    name: "MuiDialog"
  }), i = rt(), a = {
    enter: i.transitions.duration.enteringScreen,
    exit: i.transitions.duration.leavingScreen
  }, {
    "aria-describedby": l,
    "aria-labelledby": s,
    "aria-modal": c = !0,
    BackdropComponent: u,
    BackdropProps: d,
    children: f,
    className: h,
    disableEscapeKeyDown: m = !1,
    fullScreen: C = !1,
    fullWidth: y = !1,
    maxWidth: x = "sm",
    onBackdropClick: E,
    onClick: T,
    onClose: w,
    open: b,
    PaperComponent: k = Mo,
    PaperProps: A = {},
    scroll: M = "paper",
    slots: $ = {},
    slotProps: N = {},
    TransitionComponent: p = Qn,
    transitionDuration: F = a,
    TransitionProps: B,
    ...O
  } = r, I = {
    ...r,
    disableEscapeKeyDown: m,
    fullScreen: C,
    fullWidth: y,
    maxWidth: x,
    scroll: M
  }, j = Vg(I), P = g.useRef(), U = (pe) => {
    P.current = pe.target === pe.currentTarget;
  }, H = (pe) => {
    T && T(pe), P.current && (P.current = null, E && E(pe), w && w(pe, "backdropClick"));
  }, L = fn(s), R = g.useMemo(() => ({
    titleId: L
  }), [L]), V = {
    transition: p,
    ...$
  }, ne = {
    transition: B,
    paper: A,
    backdrop: d,
    ...N
  }, te = {
    slots: V,
    slotProps: ne
  }, [G, Y] = le("root", {
    elementType: Wg,
    shouldForwardComponentProp: !0,
    externalForwardedProps: te,
    ownerState: I,
    className: _(j.root, h),
    ref: o
  }), [q, z] = le("backdrop", {
    elementType: zg,
    shouldForwardComponentProp: !0,
    externalForwardedProps: te,
    ownerState: I
  }), [oe, re] = le("paper", {
    elementType: Hg,
    shouldForwardComponentProp: !0,
    externalForwardedProps: te,
    ownerState: I,
    className: _(j.paper, A.className)
  }), [K, Z] = le("container", {
    elementType: Ug,
    externalForwardedProps: te,
    ownerState: I,
    className: _(j.container)
  }), [J, ue] = le("transition", {
    elementType: Qn,
    externalForwardedProps: te,
    ownerState: I,
    additionalProps: {
      appear: !0,
      in: b,
      timeout: F,
      role: "presentation"
    }
  });
  return /* @__PURE__ */ S(G, {
    closeAfterTransition: !0,
    slots: {
      backdrop: q
    },
    slotProps: {
      backdrop: {
        transitionDuration: F,
        as: u,
        ...z
      }
    },
    disableEscapeKeyDown: m,
    onClose: w,
    open: b,
    onClick: H,
    ...Y,
    ...O,
    children: /* @__PURE__ */ S(J, {
      ...ue,
      children: /* @__PURE__ */ S(K, {
        onMouseDown: U,
        ...Z,
        children: /* @__PURE__ */ S(oe, {
          as: k,
          elevation: 24,
          role: "dialog",
          "aria-describedby": l,
          "aria-labelledby": L,
          "aria-modal": c,
          ...re,
          children: /* @__PURE__ */ S(Si.Provider, {
            value: R,
            children: f
          })
        })
      })
    })
  });
});
process.env.NODE_ENV !== "production" && (ll.propTypes = {
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
function Qg(e) {
  return de("MuiDialogContent", e);
}
ce("MuiDialogContent", ["root", "dividers"]);
function Kg(e) {
  return de("MuiDialogTitle", e);
}
const Yg = ce("MuiDialogTitle", ["root"]), Gg = (e) => {
  const {
    classes: t,
    dividers: o
  } = e;
  return ge({
    root: ["root", o && "dividers"]
  }, Qg, t);
}, qg = Q("div", {
  name: "MuiDialogContent",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: o
    } = e;
    return [t.root, o.dividers && t.dividers];
  }
})(fe(({
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
      [`.${Yg.root} + &`]: {
        paddingTop: 0
      }
    }
  }]
}))), cl = /* @__PURE__ */ g.forwardRef(function(t, o) {
  const r = he({
    props: t,
    name: "MuiDialogContent"
  }), {
    className: i,
    dividers: a = !1,
    ...l
  } = r, s = {
    ...r,
    dividers: a
  }, c = Gg(s);
  return /* @__PURE__ */ S(qg, {
    className: _(c.root, i),
    ownerState: s,
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
   * Display the top and bottom dividers.
   * @default false
   */
  dividers: n.bool,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: n.oneOfType([n.arrayOf(n.oneOfType([n.func, n.object, n.bool])), n.func, n.object])
});
function Xg(e) {
  return de("MuiDialogContentText", e);
}
ce("MuiDialogContentText", ["root"]);
const Jg = (e) => {
  const {
    classes: t
  } = e, r = ge({
    root: ["root"]
  }, Xg, t);
  return {
    ...t,
    // forward classes to the Typography
    ...r
  };
}, Zg = Q(Xt, {
  shouldForwardProp: (e) => it(e) || e === "classes",
  name: "MuiDialogContentText",
  slot: "Root",
  overridesResolver: (e, t) => t.root
})({}), ul = /* @__PURE__ */ g.forwardRef(function(t, o) {
  const r = he({
    props: t,
    name: "MuiDialogContentText"
  }), {
    children: i,
    className: a,
    ...l
  } = r, s = Jg(l);
  return /* @__PURE__ */ S(Zg, {
    component: "p",
    variant: "body1",
    color: "textSecondary",
    ref: o,
    ownerState: l,
    className: _(s.root, a),
    ...r,
    classes: s
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
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: n.oneOfType([n.arrayOf(n.oneOfType([n.func, n.object, n.bool])), n.func, n.object])
});
const _g = (e) => {
  const {
    classes: t
  } = e;
  return ge({
    root: ["root"]
  }, Kg, t);
}, eh = Q(Xt, {
  name: "MuiDialogTitle",
  slot: "Root",
  overridesResolver: (e, t) => t.root
})({
  padding: "16px 24px",
  flex: "0 0 auto"
}), an = /* @__PURE__ */ g.forwardRef(function(t, o) {
  const r = he({
    props: t,
    name: "MuiDialogTitle"
  }), {
    className: i,
    id: a,
    ...l
  } = r, s = r, c = _g(s), {
    titleId: u = a
  } = g.useContext(Si);
  return /* @__PURE__ */ S(eh, {
    component: "h2",
    className: _(c.root, i),
    ownerState: s,
    ref: o,
    variant: "h6",
    id: a ?? u,
    ...l
  });
});
process.env.NODE_ENV !== "production" && (an.propTypes = {
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
function th(e) {
  return de("MuiDialogActions", e);
}
ce("MuiDialogActions", ["root", "spacing"]);
const oh = (e) => {
  const {
    classes: t,
    disableSpacing: o
  } = e;
  return ge({
    root: ["root", !o && "spacing"]
  }, th, t);
}, nh = Q("div", {
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
}), pl = /* @__PURE__ */ g.forwardRef(function(t, o) {
  const r = he({
    props: t,
    name: "MuiDialogActions"
  }), {
    className: i,
    disableSpacing: a = !1,
    ...l
  } = r, s = {
    ...r,
    disableSpacing: a
  }, c = oh(s);
  return /* @__PURE__ */ S(nh, {
    className: _(c.root, i),
    ownerState: s,
    ref: o,
    ...l
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
const rh = (e, t = "primary") => {
  var i;
  const o = Me[t];
  return {
    fontColor: (((i = e == null ? void 0 : e.palette) == null ? void 0 : i[t]) ?? o).menuFont ?? o.menuFont
  };
}, ih = {
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
}, ah = Q(ll)(({ size: e = "medium", deviceType: t = "desktop" }) => {
  const o = ih[t];
  return {
    // width: Size,
    "& .MuiDialog-paper": {
      borderRadius: 12,
      width: typeof o == "string" ? o : o[e],
      padding: "24px 36px"
    }
  };
}), Cy = ({
  icon: e,
  title: t,
  content: o,
  actions: r,
  size: i,
  align: a = "center",
  deviceType: l = "desktop",
  ...s
}) => {
  const c = rt(), u = rh(c);
  return /* @__PURE__ */ ve(ah, { size: i, deviceType: l, ...s, maxWidth: "lg", children: [
    /* @__PURE__ */ S(
      _t,
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
        children: /* @__PURE__ */ S(gn, {})
      }
    ),
    e && /* @__PURE__ */ S(
      an,
      {
        color: u.fontColor,
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
      an,
      {
        sx: { p: 0, textAlign: a, fontSize: "20px", fontWeight: 600 },
        color: u.fontColor,
        children: t
      }
    ),
    o && /* @__PURE__ */ S(cl, { sx: { p: 0 }, children: /* @__PURE__ */ S(
      ul,
      {
        color: u.fontColor,
        sx: { textAlign: a, fontSize: "14px", fontWeight: 400 },
        children: o
      }
    ) }),
    r && /* @__PURE__ */ S(
      pl,
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
function sh(e, t, o) {
  const r = t.getBoundingClientRect(), i = o && o.getBoundingClientRect(), a = Ve(t);
  let l;
  if (t.fakeTransform)
    l = t.fakeTransform;
  else {
    const u = a.getComputedStyle(t);
    l = u.getPropertyValue("-webkit-transform") || u.getPropertyValue("transform");
  }
  let s = 0, c = 0;
  if (l && l !== "none" && typeof l == "string") {
    const u = l.split("(")[1].split(")")[0].split(",");
    s = parseInt(u[4], 10), c = parseInt(u[5], 10);
  }
  return e === "left" ? i ? `translateX(${i.right + s - r.left}px)` : `translateX(${a.innerWidth + s - r.left}px)` : e === "right" ? i ? `translateX(-${r.right - i.left - s}px)` : `translateX(-${r.left + r.width - s}px)` : e === "up" ? i ? `translateY(${i.bottom + c - r.top}px)` : `translateY(${a.innerHeight + c - r.top}px)` : i ? `translateY(-${r.top - i.top + r.height - c}px)` : `translateY(-${r.top + r.height - c}px)`;
}
function dl(e) {
  return typeof e == "function" ? e() : e;
}
function Sn(e, t, o) {
  const r = dl(o), i = sh(e, t, r);
  i && (t.style.webkitTransform = i, t.style.transform = i);
}
const fl = /* @__PURE__ */ g.forwardRef(function(t, o) {
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
    container: u,
    direction: d = "down",
    easing: f = i,
    in: h,
    onEnter: m,
    onEntered: C,
    onEntering: y,
    onExit: x,
    onExited: E,
    onExiting: T,
    style: w,
    timeout: b = a,
    // eslint-disable-next-line react/prop-types
    TransitionComponent: k = ct,
    ...A
  } = t, M = g.useRef(null), $ = je(Fo(c), M, o), N = (H) => (L) => {
    H && (L === void 0 ? H(M.current) : H(M.current, L));
  }, p = N((H, L) => {
    Sn(d, H, u), Ei(H), m && m(H, L);
  }), F = N((H, L) => {
    const R = qt({
      timeout: b,
      style: w,
      easing: f
    }, {
      mode: "enter"
    });
    H.style.webkitTransition = r.transitions.create("-webkit-transform", {
      ...R
    }), H.style.transition = r.transitions.create("transform", {
      ...R
    }), H.style.webkitTransform = "none", H.style.transform = "none", y && y(H, L);
  }), B = N(C), O = N(T), I = N((H) => {
    const L = qt({
      timeout: b,
      style: w,
      easing: f
    }, {
      mode: "exit"
    });
    H.style.webkitTransition = r.transitions.create("-webkit-transform", L), H.style.transition = r.transitions.create("transform", L), Sn(d, H, u), x && x(H);
  }), j = N((H) => {
    H.style.webkitTransition = "", H.style.transition = "", E && E(H);
  }), P = (H) => {
    l && l(M.current, H);
  }, U = g.useCallback(() => {
    M.current && Sn(d, M.current, u);
  }, [d, u]);
  return g.useEffect(() => {
    if (h || d === "down" || d === "right")
      return;
    const H = ir(() => {
      M.current && Sn(d, M.current, u);
    }), L = Ve(M.current);
    return L.addEventListener("resize", H), () => {
      H.clear(), L.removeEventListener("resize", H);
    };
  }, [d, h, u]), g.useEffect(() => {
    h || U();
  }, [h, U]), /* @__PURE__ */ S(k, {
    nodeRef: M,
    onEnter: p,
    onEntered: B,
    onEntering: F,
    onExit: I,
    onExited: j,
    onExiting: O,
    addEndListener: P,
    appear: s,
    in: h,
    timeout: b,
    ...A,
    children: (H, {
      ownerState: L,
      ...R
    }) => /* @__PURE__ */ g.cloneElement(c, {
      ref: $,
      style: {
        visibility: H === "exited" && !h ? "hidden" : void 0,
        ...w,
        ...c.props.style
      },
      ...R
    })
  });
});
process.env.NODE_ENV !== "production" && (fl.propTypes = {
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
  children: Zt.isRequired,
  /**
   * An HTML element, or a function that returns one.
   * It's used to set the container the Slide is transitioning from.
   */
  container: kt(n.oneOfType([ht, n.func]), (e) => {
    if (e.open) {
      const t = dl(e.container);
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
function lh(e) {
  return de("MuiDrawer", e);
}
ce("MuiDrawer", ["root", "docked", "paper", "anchorLeft", "anchorRight", "anchorTop", "anchorBottom", "paperAnchorLeft", "paperAnchorRight", "paperAnchorTop", "paperAnchorBottom", "paperAnchorDockedLeft", "paperAnchorDockedRight", "paperAnchorDockedTop", "paperAnchorDockedBottom", "modal"]);
const gl = (e, t) => {
  const {
    ownerState: o
  } = e;
  return [t.root, (o.variant === "permanent" || o.variant === "persistent") && t.docked, t.modal];
}, ch = (e) => {
  const {
    classes: t,
    anchor: o,
    variant: r
  } = e, i = {
    root: ["root", `anchor${W(o)}`],
    docked: [(r === "permanent" || r === "persistent") && "docked"],
    modal: ["modal"],
    paper: ["paper", `paperAnchor${W(o)}`, r !== "temporary" && `paperAnchorDocked${W(o)}`]
  };
  return ge(i, lh, t);
}, uh = Q(cr, {
  name: "MuiDrawer",
  slot: "Root",
  overridesResolver: gl
})(fe(({
  theme: e
}) => ({
  zIndex: (e.vars || e).zIndex.drawer
}))), ph = Q("div", {
  shouldForwardProp: it,
  name: "MuiDrawer",
  slot: "Docked",
  skipVariantsResolver: !1,
  overridesResolver: gl
})({
  flex: "0 0 auto"
}), dh = Q(Mo, {
  name: "MuiDrawer",
  slot: "Paper",
  overridesResolver: (e, t) => {
    const {
      ownerState: o
    } = e;
    return [t.paper, t[`paperAnchor${W(o.anchor)}`], o.variant !== "temporary" && t[`paperAnchorDocked${W(o.anchor)}`]];
  }
})(fe(({
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
}))), hl = {
  left: "right",
  right: "left",
  top: "down",
  bottom: "up"
};
function Qt(e) {
  return ["left", "right"].includes(e);
}
function Go({
  direction: e
}, t) {
  return e === "rtl" && Qt(t) ? hl[t] : t;
}
const Ti = /* @__PURE__ */ g.forwardRef(function(t, o) {
  const r = he({
    props: t,
    name: "MuiDrawer"
  }), i = rt(), a = Po(), l = {
    enter: i.transitions.duration.enteringScreen,
    exit: i.transitions.duration.leavingScreen
  }, {
    anchor: s = "left",
    BackdropProps: c,
    children: u,
    className: d,
    elevation: f = 16,
    hideBackdrop: h = !1,
    ModalProps: {
      BackdropProps: m,
      ...C
    } = {},
    onClose: y,
    open: x = !1,
    PaperProps: E = {},
    SlideProps: T,
    // eslint-disable-next-line react/prop-types
    TransitionComponent: w,
    transitionDuration: b = l,
    variant: k = "temporary",
    slots: A = {},
    slotProps: M = {},
    ...$
  } = r, N = g.useRef(!1);
  g.useEffect(() => {
    N.current = !0;
  }, []);
  const p = Go({
    direction: a ? "rtl" : "ltr"
  }, s), B = {
    ...r,
    anchor: s,
    elevation: f,
    open: x,
    variant: k,
    ...$
  }, O = ch(B), I = {
    slots: {
      transition: w,
      ...A
    },
    slotProps: {
      paper: E,
      transition: T,
      ...M,
      backdrop: on(M.backdrop || {
        ...c,
        ...m
      }, {
        transitionDuration: b
      })
    }
  }, [j, P] = le("root", {
    ref: o,
    elementType: uh,
    className: _(O.root, O.modal, d),
    shouldForwardComponentProp: !0,
    ownerState: B,
    externalForwardedProps: {
      ...I,
      ...$,
      ...C
    },
    additionalProps: {
      open: x,
      onClose: y,
      hideBackdrop: h,
      slots: {
        backdrop: I.slots.backdrop
      },
      slotProps: {
        backdrop: I.slotProps.backdrop
      }
    }
  }), [U, H] = le("paper", {
    elementType: dh,
    shouldForwardComponentProp: !0,
    className: _(O.paper, E.className),
    ownerState: B,
    externalForwardedProps: I,
    additionalProps: {
      elevation: k === "temporary" ? f : 0,
      square: !0
    }
  }), [L, R] = le("docked", {
    elementType: ph,
    ref: o,
    className: _(O.root, O.docked, d),
    ownerState: B,
    externalForwardedProps: I,
    additionalProps: $
    // pass `other` here because `DockedSlot` is also a root slot for some variants
  }), [V, ne] = le("transition", {
    elementType: fl,
    ownerState: B,
    externalForwardedProps: I,
    additionalProps: {
      in: x,
      direction: hl[p],
      timeout: b,
      appear: N.current
    }
  }), te = /* @__PURE__ */ S(U, {
    ...H,
    children: u
  });
  if (k === "permanent")
    return /* @__PURE__ */ S(L, {
      ...R,
      children: te
    });
  const G = /* @__PURE__ */ S(V, {
    ...ne,
    children: te
  });
  return k === "persistent" ? /* @__PURE__ */ S(L, {
    ...R,
    children: G
  }) : /* @__PURE__ */ S(j, {
    ...P,
    children: G
  });
});
process.env.NODE_ENV !== "production" && (Ti.propTypes = {
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
  elevation: mi,
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
const fh = ce("MuiBox", ["root"]), gh = sr(), st = bu({
  themeId: li,
  defaultTheme: gh,
  defaultClassName: fh.root,
  generateClassName: us.generate
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
const ml = (e, t = "primary") => {
  var i;
  const o = Me[t], r = ((i = e == null ? void 0 : e.palette) == null ? void 0 : i[t]) ?? o;
  return {
    fontColor: r.menuFont ?? o.menuFont,
    bgColor: r.elevated ?? o.elevated,
    boxColor: r.onMain ?? o.onMain
  };
}, hh = Q(
  ({ title: e, content: t, align: o, ...r }) => /* @__PURE__ */ S(Ti, { ...r }),
  {
    shouldForwardProp: (e) => e !== "title" && e !== "content" && e !== "align"
  }
)(({ anchor: e, theme: t }) => ({
  "& .MuiDrawer-paper": {
    backgroundColor: ml(t).bgColor,
    borderRadius: e === "left" ? "0 20px 20px 0" : e === "right" ? "20px 0 0 20px" : "0"
  }
})), xy = ({
  title: e,
  align: t,
  content: o,
  actions: r,
  anchor: i = "right",
  // 預設為右側
  ...a
}) => {
  const l = rt(), s = ml(l);
  return /* @__PURE__ */ ve(hh, { anchor: i, ...a, children: [
    /* @__PURE__ */ S(
      _t,
      {
        "aria-label": "close",
        onClick: (c) => {
          var u;
          return (u = a.onClose) == null ? void 0 : u.call(a, c, "escapeKeyDown");
        },
        sx: {
          fontSize: "30px",
          position: "absolute",
          right: 16,
          top: 16
        },
        children: /* @__PURE__ */ S(gn, {})
      }
    ),
    e && /* @__PURE__ */ ve(st, { sx: { display: "flex", justifyContent: t }, children: [
      i === "right" && t === "start" && /* @__PURE__ */ S(
        st,
        {
          sx: {
            alignContent: "center",
            ml: "24px",
            mt: "8px",
            fontSize: "18px"
          },
          children: /* @__PURE__ */ S($s, {})
        }
      ),
      /* @__PURE__ */ S(
        an,
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
          children: /* @__PURE__ */ S(Ls, {})
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
function Kn(e) {
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
process.env.NODE_ENV !== "production" && (Kn.propTypes = {
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
process.env.NODE_ENV !== "production" && (Kn.propTypes = gi(Kn.propTypes));
const mh = Q("div", {
  shouldForwardProp: it
})(fe(({
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
}))), bl = /* @__PURE__ */ g.forwardRef(function(t, o) {
  const {
    anchor: r,
    classes: i = {},
    className: a,
    width: l,
    style: s,
    ...c
  } = t, u = t;
  return /* @__PURE__ */ S(mh, {
    className: _("PrivateSwipeArea-root", i.root, i[`anchor${W(r)}`], a),
    ref: o,
    style: {
      [Qt(r) ? "width" : "height"]: l,
      ...s
    },
    ownerState: u,
    ...c
  });
});
process.env.NODE_ENV !== "production" && (bl.propTypes = {
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
const Tn = 3, $r = 20;
let wt = null;
function Lr(e, t, o) {
  return e === "right" ? o.body.offsetWidth - t[0].pageX : t[0].pageX;
}
function zr(e, t, o) {
  return e === "bottom" ? o.innerHeight - t[0].clientY : t[0].clientY;
}
function Vo(e, t) {
  return e ? t.clientWidth : t.clientHeight;
}
function Da(e, t, o, r) {
  return Math.min(Math.max(o ? t - e : r + t - e, 0), r);
}
function bh(e, t) {
  const o = [];
  for (; e && e !== t.parentElement; ) {
    const r = Ve(t).getComputedStyle(e);
    // Ignore the scroll children if the element is absolute positioned.
    r.getPropertyValue("position") === "absolute" || // Ignore the scroll children if the element has an overflowX hidden
    r.getPropertyValue("overflow-x") === "hidden" || (e.clientWidth > 0 && e.scrollWidth > e.clientWidth || e.clientHeight > 0 && e.scrollHeight > e.clientHeight) && o.push(e), e = e.parentElement;
  }
  return o;
}
function yh({
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
    const s = r === "left" || r === "right" ? "x" : "y", c = Math.round(a[i.scrollPosition[s]]), u = c > 0, d = c + a[i.clientLength[s]] < a[i.scrollLength[s]];
    return !!(l && d || !l && u);
  });
}
const vh = typeof navigator < "u" && /iPad|iPhone|iPod/.test(navigator.userAgent), yl = /* @__PURE__ */ g.forwardRef(function(t, o) {
  const r = he({
    name: "MuiSwipeableDrawer",
    props: t
  }), i = rt(), a = {
    enter: i.transitions.duration.enteringScreen,
    exit: i.transitions.duration.leavingScreen
  }, {
    anchor: l = "left",
    disableBackdropTransition: s = !1,
    disableDiscovery: c = !1,
    disableSwipeToOpen: u = vh,
    hideBackdrop: d,
    hysteresis: f = 0.52,
    allowSwipeInChildren: h = !1,
    minFlingVelocity: m = 450,
    ModalProps: {
      BackdropProps: C,
      ...y
    } = {},
    onClose: x,
    onOpen: E,
    open: T = !1,
    PaperProps: w = {},
    SwipeAreaProps: b,
    swipeAreaWidth: k = 20,
    transitionDuration: A = a,
    variant: M = "temporary",
    // Mobile first.
    slots: $ = {},
    slotProps: N = {},
    ...p
  } = r, [F, B] = g.useState(!1), O = g.useRef({
    isSwiping: null
  }), I = g.useRef(), j = g.useRef(), P = g.useRef(), U = je(w.ref, P), H = g.useRef(!1), L = g.useRef();
  gt(() => {
    L.current = null;
  }, [T]);
  const R = g.useCallback((z, oe = {}) => {
    const {
      mode: re = null,
      changeTransition: K = !0
    } = oe, Z = Go(i, l), J = ["right", "bottom"].includes(Z) ? 1 : -1, ue = Qt(l), pe = ue ? `translate(${J * z}px, 0)` : `translate(0, ${J * z}px)`, ke = P.current.style;
    ke.webkitTransform = pe, ke.transform = pe;
    let xe = "";
    if (re && (xe = i.transitions.create("all", qt({
      easing: void 0,
      style: void 0,
      timeout: A
    }, {
      mode: re
    }))), K && (ke.webkitTransition = xe, ke.transition = xe), !s && !d) {
      const be = j.current.style;
      be.opacity = 1 - z / Vo(ue, P.current), K && (be.webkitTransition = xe, be.transition = xe);
    }
  }, [l, s, d, i, A]), V = Ue((z) => {
    if (!H.current)
      return;
    if (wt = null, H.current = !1, Ur.flushSync(() => {
      B(!1);
    }), !O.current.isSwiping) {
      O.current.isSwiping = null;
      return;
    }
    O.current.isSwiping = null;
    const oe = Go(i, l), re = Qt(l);
    let K;
    re ? K = Lr(oe, z.changedTouches, $e(z.currentTarget)) : K = zr(oe, z.changedTouches, Ve(z.currentTarget));
    const Z = re ? O.current.startX : O.current.startY, J = Vo(re, P.current), ue = Da(K, Z, T, J), pe = ue / J;
    if (Math.abs(O.current.velocity) > m && (L.current = Math.abs((J - ue) / O.current.velocity) * 1e3), T) {
      O.current.velocity > m || pe > f ? x() : R(0, {
        mode: "exit"
      });
      return;
    }
    O.current.velocity < -m || 1 - pe > f ? E() : R(Vo(re, P.current), {
      mode: "enter"
    });
  }), ne = (z = !1) => {
    if (!F) {
      (z || !(c && h)) && Ur.flushSync(() => {
        B(!0);
      });
      const oe = Qt(l);
      !T && P.current && R(Vo(oe, P.current) + (c ? 15 : -$r), {
        changeTransition: !1
      }), O.current.velocity = 0, O.current.lastTime = null, O.current.lastTranslate = null, O.current.paperHit = !1, H.current = !0;
    }
  }, te = Ue((z) => {
    if (!P.current || !H.current || wt !== null && wt !== O.current)
      return;
    ne(!0);
    const oe = Go(i, l), re = Qt(l), K = Lr(oe, z.touches, $e(z.currentTarget)), Z = zr(oe, z.touches, Ve(z.currentTarget));
    if (T && P.current.contains(z.target) && wt === null) {
      const xe = bh(z.target, P.current);
      if (yh({
        domTreeShapes: xe,
        start: re ? O.current.startX : O.current.startY,
        current: re ? K : Z,
        anchor: l
      })) {
        wt = !0;
        return;
      }
      wt = O.current;
    }
    if (O.current.isSwiping == null) {
      const xe = Math.abs(K - O.current.startX), be = Math.abs(Z - O.current.startY), Ee = re ? xe > be && xe > Tn : be > xe && be > Tn;
      if (Ee && z.cancelable && z.preventDefault(), Ee === !0 || (re ? be > Tn : xe > Tn)) {
        if (O.current.isSwiping = Ee, !Ee) {
          V(z);
          return;
        }
        O.current.startX = K, O.current.startY = Z, !c && !T && (re ? O.current.startX -= $r : O.current.startY -= $r);
      }
    }
    if (!O.current.isSwiping)
      return;
    const J = Vo(re, P.current);
    let ue = re ? O.current.startX : O.current.startY;
    T && !O.current.paperHit && (ue = Math.min(ue, J));
    const pe = Da(re ? K : Z, ue, T, J);
    if (T)
      if (O.current.paperHit)
        pe === 0 && (O.current.startX = K, O.current.startY = Z);
      else if (re ? K < J : Z < J)
        O.current.paperHit = !0, O.current.startX = K, O.current.startY = Z;
      else
        return;
    O.current.lastTranslate === null && (O.current.lastTranslate = pe, O.current.lastTime = performance.now() + 1);
    const ke = (pe - O.current.lastTranslate) / (performance.now() - O.current.lastTime) * 1e3;
    O.current.velocity = O.current.velocity * 0.4 + ke * 0.6, O.current.lastTranslate = pe, O.current.lastTime = performance.now(), z.cancelable && z.preventDefault(), R(pe);
  }), G = Ue((z) => {
    var J;
    if (z.defaultPrevented || z.defaultMuiPrevented || T && (d || !j.current.contains(z.target)) && !P.current.contains(z.target))
      return;
    const oe = Go(i, l), re = Qt(l), K = Lr(oe, z.touches, $e(z.currentTarget)), Z = zr(oe, z.touches, Ve(z.currentTarget));
    if (!T) {
      if (u || !(z.target === I.current || (J = P.current) != null && J.contains(z.target) && (typeof h == "function" ? h(z, I.current, P.current) : h)))
        return;
      if (re) {
        if (K > k)
          return;
      } else if (Z > k)
        return;
    }
    z.defaultMuiPrevented = !0, wt = null, O.current.startX = K, O.current.startY = Z, ne();
  });
  g.useEffect(() => {
    if (M === "temporary") {
      const z = $e(P.current);
      return z.addEventListener("touchstart", G), z.addEventListener("touchmove", te, {
        passive: !T
      }), z.addEventListener("touchend", V), () => {
        z.removeEventListener("touchstart", G), z.removeEventListener("touchmove", te, {
          passive: !T
        }), z.removeEventListener("touchend", V);
      };
    }
  }, [M, T, G, te, V]), g.useEffect(() => () => {
    wt === O.current && (wt = null);
  }, []), g.useEffect(() => {
    T || B(!1);
  }, [T]);
  const [Y, q] = le("swipeArea", {
    ref: I,
    elementType: bl,
    ownerState: r,
    externalForwardedProps: {
      slots: $,
      slotProps: {
        swipeArea: b,
        ...N
      }
    },
    additionalProps: {
      width: k,
      anchor: l
    }
  });
  return /* @__PURE__ */ ve(g.Fragment, {
    children: [/* @__PURE__ */ S(Ti, {
      open: M === "temporary" && F ? !0 : T,
      variant: M,
      ModalProps: {
        BackdropProps: {
          ...C,
          ref: j
        },
        // Ensures that paperRef.current will be defined inside the touch start event handler
        // See https://github.com/mui/material-ui/issues/30414 for more information
        ...M === "temporary" && {
          keepMounted: !0
        },
        ...y
      },
      hideBackdrop: d,
      anchor: l,
      transitionDuration: L.current || A,
      onClose: x,
      ref: o,
      slots: $,
      slotProps: {
        ...N,
        backdrop: on(N.backdrop ?? C, {
          ref: j
        }),
        paper: on(N.paper ?? w, {
          style: {
            pointerEvents: M === "temporary" && !T && !h ? "none" : ""
          },
          ref: U
        })
      },
      ...p
    }), !u && M === "temporary" && /* @__PURE__ */ S(Kn, {
      children: /* @__PURE__ */ S(Y, {
        ...q
      })
    })]
  });
});
process.env.NODE_ENV !== "production" && (yl.propTypes = {
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
      component: $n
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
    component: $n,
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
const vl = (e, t = "primary") => {
  var i;
  const o = Me[t], r = ((i = e == null ? void 0 : e.palette) == null ? void 0 : i[t]) ?? o;
  return {
    fontColor: r.menuFont ?? o.menuFont,
    bgColor: r.elevated ?? o.elevated,
    boxColor: r.onMain ?? o.onMain
  };
}, Ch = Q(
  ({ title: e, content: t, align: o, ...r }) => /* @__PURE__ */ S(yl, { ...r }),
  {
    shouldForwardProp: (e) => e !== "title" && e !== "content" && e !== "align"
  }
)(({ anchor: e, theme: t }) => ({
  "& .MuiDrawer-paper": {
    backgroundColor: vl(t).bgColor,
    borderRadius: e === "top" ? "0 0 16px 16px" : e === "bottom" ? "16px 16px 0 0" : "0"
  }
})), Ey = ({
  title: e,
  align: t,
  content: o,
  actions: r,
  anchor: i = "bottom",
  ...a
}) => {
  const l = rt(), s = vl(l);
  return /* @__PURE__ */ ve(Ch, { anchor: i, ...a, children: [
    /* @__PURE__ */ S(
      _t,
      {
        "aria-label": "close",
        onClick: (c) => {
          var u;
          return (u = a.onClose) == null ? void 0 : u.call(a, c);
        },
        sx: {
          fontSize: "30px",
          position: "absolute",
          right: 16,
          top: 16
        },
        children: /* @__PURE__ */ S(gn, {})
      }
    ),
    e && /* @__PURE__ */ S(st, { sx: { display: "flex", justifyContent: t }, children: /* @__PURE__ */ S(
      an,
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
}, xh = Ke(/* @__PURE__ */ S("path", {
  d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"
}), "RadioButtonUnchecked"), Eh = Ke(/* @__PURE__ */ S("path", {
  d: "M8.465 8.465C9.37 7.56 10.62 7 12 7C14.76 7 17 9.24 17 12C17 13.38 16.44 14.63 15.535 15.535C14.63 16.44 13.38 17 12 17C9.24 17 7 14.76 7 12C7 10.62 7.56 9.37 8.465 8.465Z"
}), "RadioButtonChecked"), wh = Q("span", {
  shouldForwardProp: it
})({
  position: "relative",
  display: "flex"
}), Sh = Q(xh)({
  // Scale applied to prevent dot misalignment in Safari
  transform: "scale(1)"
}), Th = Q(Eh)(fe(({
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
function ki(e) {
  const {
    checked: t = !1,
    classes: o = {},
    fontSize: r
  } = e, i = {
    ...e,
    checked: t
  };
  return /* @__PURE__ */ ve(wh, {
    className: o.root,
    ownerState: i,
    children: [/* @__PURE__ */ S(Sh, {
      fontSize: r,
      className: o.background,
      ownerState: i
    }), /* @__PURE__ */ S(Th, {
      fontSize: r,
      className: o.dot,
      ownerState: i
    })]
  });
}
process.env.NODE_ENV !== "production" && (ki.propTypes = {
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
const Oi = /* @__PURE__ */ g.createContext(void 0);
process.env.NODE_ENV !== "production" && (Oi.displayName = "RadioGroupContext");
function kh() {
  return g.useContext(Oi);
}
function Oh(e) {
  return de("MuiRadio", e);
}
const Na = ce("MuiRadio", ["root", "checked", "disabled", "colorPrimary", "colorSecondary", "sizeSmall"]), Ah = (e) => {
  const {
    classes: t,
    color: o,
    size: r
  } = e, i = {
    root: ["root", `color${W(o)}`, r !== "medium" && `size${W(r)}`]
  };
  return {
    ...t,
    ...ge(i, Oh, t)
  };
}, Rh = Q(lr, {
  shouldForwardProp: (e) => it(e) || e === "classes",
  name: "MuiRadio",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: o
    } = e;
    return [t.root, o.size !== "medium" && t[`size${W(o.size)}`], t[`color${W(o.color)}`]];
  }
})(fe(({
  theme: e
}) => ({
  color: (e.vars || e).palette.text.secondary,
  [`&.${Na.disabled}`]: {
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
        backgroundColor: e.vars ? `rgba(${e.vars.palette.action.activeChannel} / ${e.vars.palette.action.hoverOpacity})` : X(e.palette.action.active, e.palette.action.hoverOpacity)
      }
    }
  }, ...Object.entries(e.palette).filter(De()).map(([t]) => ({
    props: {
      color: t,
      disabled: !1,
      disableRipple: !1
    },
    style: {
      "&:hover": {
        backgroundColor: e.vars ? `rgba(${e.vars.palette[t].mainChannel} / ${e.vars.palette.action.hoverOpacity})` : X(e.palette[t].main, e.palette.action.hoverOpacity)
      }
    }
  })), ...Object.entries(e.palette).filter(De()).map(([t]) => ({
    props: {
      color: t,
      disabled: !1
    },
    style: {
      [`&.${Na.checked}`]: {
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
function Fh(e, t) {
  return typeof t == "object" && t !== null ? e === t : String(e) === String(t);
}
const Ph = /* @__PURE__ */ S(ki, {
  checked: !0
}), Mh = /* @__PURE__ */ S(ki, {}), Cl = /* @__PURE__ */ g.forwardRef(function(t, o) {
  const r = he({
    props: t,
    name: "MuiRadio"
  }), {
    checked: i,
    checkedIcon: a = Ph,
    color: l = "primary",
    icon: s = Mh,
    name: c,
    onChange: u,
    size: d = "medium",
    className: f,
    disabled: h,
    disableRipple: m = !1,
    slots: C = {},
    slotProps: y = {},
    inputProps: x,
    ...E
  } = r, T = hn();
  let w = h;
  T && typeof w > "u" && (w = T.disabled), w ?? (w = !1);
  const b = {
    ...r,
    disabled: w,
    disableRipple: m,
    color: l,
    size: d
  }, k = Ah(b), A = kh();
  let M = i;
  const $ = Qr(u, A && A.onChange);
  let N = c;
  A && (typeof M > "u" && (M = Fh(A.value, r.value)), typeof N > "u" && (N = A.name));
  const p = y.input ?? x, [F, B] = le("root", {
    ref: o,
    elementType: Rh,
    className: _(k.root, f),
    shouldForwardComponentProp: !0,
    externalForwardedProps: {
      slots: C,
      slotProps: y,
      ...E
    },
    getSlotProps: (O) => ({
      ...O,
      onChange: (I, ...j) => {
        var P;
        (P = O.onChange) == null || P.call(O, I, ...j), $(I, ...j);
      }
    }),
    ownerState: b,
    additionalProps: {
      type: "radio",
      icon: /* @__PURE__ */ g.cloneElement(s, {
        fontSize: s.props.fontSize ?? d
      }),
      checkedIcon: /* @__PURE__ */ g.cloneElement(a, {
        fontSize: a.props.fontSize ?? d
      }),
      disabled: w,
      name: N,
      checked: M,
      slots: C,
      slotProps: {
        // Do not forward `slotProps.root` again because it's already handled by the `RootSlot` in this file.
        input: typeof p == "function" ? p(b) : p
      }
    }
  });
  return /* @__PURE__ */ S(F, {
    ...B,
    classes: k
  });
});
process.env.NODE_ENV !== "production" && (Cl.propTypes = {
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
  inputRef: Ot,
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
function ja(e) {
  return e != null && !(Array.isArray(e) && e.length === 0);
}
function $a(e, t = !1) {
  return e && (ja(e.value) && e.value !== "" || t && ja(e.defaultValue) && e.defaultValue !== "");
}
function Bh(e) {
  return e.startAdornment;
}
function Ih(e) {
  return de("MuiFormControl", e);
}
ce("MuiFormControl", ["root", "marginNone", "marginNormal", "marginDense", "fullWidth", "disabled"]);
const Dh = (e) => {
  const {
    classes: t,
    margin: o,
    fullWidth: r
  } = e, i = {
    root: ["root", o !== "none" && `margin${W(o)}`, r && "fullWidth"]
  };
  return ge(i, Ih, t);
}, Nh = Q("div", {
  name: "MuiFormControl",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: o
    } = e;
    return [t.root, t[`margin${W(o.margin)}`], o.fullWidth && t.fullWidth];
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
}), xl = /* @__PURE__ */ g.forwardRef(function(t, o) {
  const r = he({
    props: t,
    name: "MuiFormControl"
  }), {
    children: i,
    className: a,
    color: l = "primary",
    component: s = "div",
    disabled: c = !1,
    error: u = !1,
    focused: d,
    fullWidth: f = !1,
    hiddenLabel: h = !1,
    margin: m = "none",
    required: C = !1,
    size: y = "medium",
    variant: x = "outlined",
    ...E
  } = r, T = {
    ...r,
    color: l,
    component: s,
    disabled: c,
    error: u,
    fullWidth: f,
    hiddenLabel: h,
    margin: m,
    required: C,
    size: y,
    variant: x
  }, w = Dh(T), [b, k] = g.useState(() => {
    let P = !1;
    return i && g.Children.forEach(i, (U) => {
      if (!Ar(U, ["Input", "Select"]))
        return;
      const H = Ar(U, ["Select"]) ? U.props.input : U;
      H && Bh(H.props) && (P = !0);
    }), P;
  }), [A, M] = g.useState(() => {
    let P = !1;
    return i && g.Children.forEach(i, (U) => {
      Ar(U, ["Input", "Select"]) && ($a(U.props, !0) || $a(U.props.inputProps, !0)) && (P = !0);
    }), P;
  }), [$, N] = g.useState(!1);
  c && $ && N(!1);
  const p = d !== void 0 && !c ? d : $;
  let F;
  const B = g.useRef(!1);
  process.env.NODE_ENV !== "production" && (F = () => (B.current && console.error(["MUI: There are multiple `InputBase` components inside a FormControl.", "This creates visual inconsistencies, only use one `InputBase`."].join(`
`)), B.current = !0, () => {
    B.current = !1;
  }));
  const O = g.useCallback(() => {
    M(!0);
  }, []), I = g.useCallback(() => {
    M(!1);
  }, []), j = g.useMemo(() => ({
    adornedStart: b,
    setAdornedStart: k,
    color: l,
    disabled: c,
    error: u,
    filled: A,
    focused: p,
    fullWidth: f,
    hiddenLabel: h,
    size: y,
    onBlur: () => {
      N(!1);
    },
    onFocus: () => {
      N(!0);
    },
    onEmpty: I,
    onFilled: O,
    registerEffect: F,
    required: C,
    variant: x
  }), [b, l, c, u, A, p, f, h, F, I, O, C, y, x]);
  return /* @__PURE__ */ S(xi.Provider, {
    value: j,
    children: /* @__PURE__ */ S(Nh, {
      as: s,
      ownerState: T,
      className: _(w.root, a),
      ref: o,
      ...E,
      children: i
    })
  });
});
process.env.NODE_ENV !== "production" && (xl.propTypes = {
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
function jh(e) {
  return de("MuiFormControlLabel", e);
}
const qo = ce("MuiFormControlLabel", ["root", "labelPlacementStart", "labelPlacementTop", "labelPlacementBottom", "disabled", "label", "error", "required", "asterisk"]);
function Ai({
  props: e,
  states: t,
  muiFormControl: o
}) {
  return t.reduce((r, i) => (r[i] = e[i], o && typeof e[i] > "u" && (r[i] = o[i]), r), {});
}
const $h = (e) => {
  const {
    classes: t,
    disabled: o,
    labelPlacement: r,
    error: i,
    required: a
  } = e, l = {
    root: ["root", o && "disabled", `labelPlacement${W(r)}`, i && "error", a && "required"],
    label: ["label", o && "disabled"],
    asterisk: ["asterisk", i && "error"]
  };
  return ge(l, jh, t);
}, Lh = Q("label", {
  name: "MuiFormControlLabel",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: o
    } = e;
    return [{
      [`& .${qo.label}`]: t.label
    }, t.root, t[`labelPlacement${W(o.labelPlacement)}`]];
  }
})(fe(({
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
  [`&.${qo.disabled}`]: {
    cursor: "default"
  },
  [`& .${qo.label}`]: {
    [`&.${qo.disabled}`]: {
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
}))), zh = Q("span", {
  name: "MuiFormControlLabel",
  slot: "Asterisk",
  overridesResolver: (e, t) => t.asterisk
})(fe(({
  theme: e
}) => ({
  [`&.${qo.error}`]: {
    color: (e.vars || e).palette.error.main
  }
}))), Ri = /* @__PURE__ */ g.forwardRef(function(t, o) {
  const r = he({
    props: t,
    name: "MuiFormControlLabel"
  }), {
    checked: i,
    className: a,
    componentsProps: l = {},
    control: s,
    disabled: c,
    disableTypography: u,
    inputRef: d,
    label: f,
    labelPlacement: h = "end",
    name: m,
    onChange: C,
    required: y,
    slots: x = {},
    slotProps: E = {},
    value: T,
    ...w
  } = r, b = hn(), k = c ?? s.props.disabled ?? (b == null ? void 0 : b.disabled), A = y ?? s.props.required, M = {
    disabled: k,
    required: A
  };
  ["checked", "name", "onChange", "value", "inputRef"].forEach((j) => {
    typeof s.props[j] > "u" && typeof r[j] < "u" && (M[j] = r[j]);
  });
  const $ = Ai({
    props: r,
    muiFormControl: b,
    states: ["error"]
  }), N = {
    ...r,
    disabled: k,
    labelPlacement: h,
    required: A,
    error: $.error
  }, p = $h(N), F = {
    slots: x,
    slotProps: {
      ...l,
      ...E
    }
  }, [B, O] = le("typography", {
    elementType: Xt,
    externalForwardedProps: F,
    ownerState: N
  });
  let I = f;
  return I != null && I.type !== Xt && !u && (I = /* @__PURE__ */ S(B, {
    component: "span",
    ...O,
    className: _(p.label, O == null ? void 0 : O.className),
    children: I
  })), /* @__PURE__ */ ve(Lh, {
    className: _(p.root, a),
    ownerState: N,
    ref: o,
    ...w,
    children: [/* @__PURE__ */ g.cloneElement(s, M), A ? /* @__PURE__ */ ve("div", {
      children: [I, /* @__PURE__ */ ve(zh, {
        ownerState: N,
        "aria-hidden": !0,
        className: p.asterisk,
        children: [" ", "*"]
      })]
    }) : I]
  });
});
process.env.NODE_ENV !== "production" && (Ri.propTypes = {
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
  inputRef: Ot,
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
const Vh = (e, t = "primary") => {
  var i;
  const o = Me[t], r = ((i = e == null ? void 0 : e.palette) == null ? void 0 : i[t]) ?? o;
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
      backgroundColor: X(r.custMain ?? o.custMain, 0.08)
    },
    // 禁用狀態
    "&.Mui-disabled": {
      color: X(at[0], 0.38)
    },
    // 鍵盤 focus 狀態
    "&.Mui-focusVisible": {
      outline: `2px solid ${r.custMain ?? o.custMain}`,
      outlineOffset: 2
    }
  };
}, Wh = Q(Cl, {
  shouldForwardProp: (e) => e !== "color" && e !== "data-color"
})(
  ({ theme: e, color: t = "primary" }) => Vh(e, t)
), Uh = ({
  color: e = "primary",
  label: t,
  ...o
}) => /* @__PURE__ */ S(
  Ri,
  {
    control: /* @__PURE__ */ S(Wh, { "data-color": e, ...o }),
    label: t || void 0
  }
);
function Hh(e) {
  return de("MuiFormGroup", e);
}
ce("MuiFormGroup", ["root", "row", "error"]);
const Qh = (e) => {
  const {
    classes: t,
    row: o,
    error: r
  } = e;
  return ge({
    root: ["root", o && "row", r && "error"]
  }, Hh, t);
}, Kh = Q("div", {
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
}), El = /* @__PURE__ */ g.forwardRef(function(t, o) {
  const r = he({
    props: t,
    name: "MuiFormGroup"
  }), {
    className: i,
    row: a = !1,
    ...l
  } = r, s = hn(), c = Ai({
    props: r,
    muiFormControl: s,
    states: ["error"]
  }), u = {
    ...r,
    row: a,
    error: c.error
  }, d = Qh(u);
  return /* @__PURE__ */ S(Kh, {
    className: _(d.root, i),
    ownerState: u,
    ref: o,
    ...l
  });
});
process.env.NODE_ENV !== "production" && (El.propTypes = {
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
function Yh(e) {
  return de("MuiRadioGroup", e);
}
ce("MuiRadioGroup", ["root", "row", "error"]);
const Gh = (e) => {
  const {
    classes: t,
    row: o,
    error: r
  } = e;
  return ge({
    root: ["root", o && "row", r && "error"]
  }, Yh, t);
}, wl = /* @__PURE__ */ g.forwardRef(function(t, o) {
  const {
    // private
    // eslint-disable-next-line react/prop-types
    actions: r,
    children: i,
    className: a,
    defaultValue: l,
    name: s,
    onChange: c,
    value: u,
    ...d
  } = t, f = g.useRef(null), h = Gh(t), [m, C] = hi({
    controlled: u,
    default: l,
    name: "RadioGroup"
  });
  g.useImperativeHandle(r, () => ({
    focus: () => {
      let T = f.current.querySelector("input:not(:disabled):checked");
      T || (T = f.current.querySelector("input:not(:disabled)")), T && T.focus();
    }
  }), []);
  const y = je(o, f), x = fn(s), E = g.useMemo(() => ({
    name: x,
    onChange(T) {
      C(T.target.value), c && c(T, T.target.value);
    },
    value: m
  }), [x, c, C, m]);
  return /* @__PURE__ */ S(Oi.Provider, {
    value: E,
    children: /* @__PURE__ */ S(El, {
      role: "radiogroup",
      ref: y,
      className: _(h.root, a),
      ...d,
      children: i
    })
  });
});
process.env.NODE_ENV !== "production" && (wl.propTypes = {
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
function qh(e) {
  return de("MuiFormLabel", e);
}
const Bn = ce("MuiFormLabel", ["root", "colorSecondary", "focused", "disabled", "error", "filled", "required", "asterisk"]), Xh = (e) => {
  const {
    classes: t,
    color: o,
    focused: r,
    disabled: i,
    error: a,
    filled: l,
    required: s
  } = e, c = {
    root: ["root", `color${W(o)}`, i && "disabled", a && "error", l && "filled", r && "focused", s && "required"],
    asterisk: ["asterisk", a && "error"]
  };
  return ge(c, qh, t);
}, Jh = Q("label", {
  name: "MuiFormLabel",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: o
    } = e;
    return [t.root, o.color === "secondary" && t.colorSecondary, o.filled && t.filled];
  }
})(fe(({
  theme: e
}) => ({
  color: (e.vars || e).palette.text.secondary,
  ...e.typography.body1,
  lineHeight: "1.4375em",
  padding: 0,
  position: "relative",
  variants: [...Object.entries(e.palette).filter(De()).map(([t]) => ({
    props: {
      color: t
    },
    style: {
      [`&.${Bn.focused}`]: {
        color: (e.vars || e).palette[t].main
      }
    }
  })), {
    props: {},
    style: {
      [`&.${Bn.disabled}`]: {
        color: (e.vars || e).palette.text.disabled
      },
      [`&.${Bn.error}`]: {
        color: (e.vars || e).palette.error.main
      }
    }
  }]
}))), Zh = Q("span", {
  name: "MuiFormLabel",
  slot: "Asterisk",
  overridesResolver: (e, t) => t.asterisk
})(fe(({
  theme: e
}) => ({
  [`&.${Bn.error}`]: {
    color: (e.vars || e).palette.error.main
  }
}))), Sl = /* @__PURE__ */ g.forwardRef(function(t, o) {
  const r = he({
    props: t,
    name: "MuiFormLabel"
  }), {
    children: i,
    className: a,
    color: l,
    component: s = "label",
    disabled: c,
    error: u,
    filled: d,
    focused: f,
    required: h,
    ...m
  } = r, C = hn(), y = Ai({
    props: r,
    muiFormControl: C,
    states: ["color", "required", "focused", "disabled", "error", "filled"]
  }), x = {
    ...r,
    color: y.color || "primary",
    component: s,
    disabled: y.disabled,
    error: y.error,
    filled: y.filled,
    focused: y.focused,
    required: y.required
  }, E = Xh(x);
  return /* @__PURE__ */ ve(Jh, {
    as: s,
    ownerState: x,
    className: _(E.root, a),
    ref: o,
    ...m,
    children: [i, y.required && /* @__PURE__ */ ve(Zh, {
      ownerState: x,
      "aria-hidden": !0,
      className: E.asterisk,
      children: [" ", "*"]
    })]
  });
});
process.env.NODE_ENV !== "production" && (Sl.propTypes = {
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
const wy = ({
  options: e,
  color: t = "primary",
  label: o,
  value: r,
  onChange: i,
  ...a
}) => /* @__PURE__ */ ve(xl, { component: "fieldset", children: [
  o && /* @__PURE__ */ S(Sl, { component: "legend", children: o }),
  /* @__PURE__ */ S(wl, { value: r, onChange: i, ...a, children: e.map((l) => /* @__PURE__ */ S(
    Ri,
    {
      value: l.value,
      control: /* @__PURE__ */ S(Uh, { color: t }),
      label: l.label
    },
    l.value
  )) })
] }), _h = { small: 20, medium: 32, large: 40 }, Sy = ({
  value: e,
  max: t = 5,
  precision: o = 0.1,
  size: r = "medium",
  readOnly: i = !1,
  disabled: a = !1,
  showValueLabel: l = !0,
  onChange: s
}) => {
  const [c, u] = ai(null), d = _h[r] || 32, f = Kl(() => Array.from({ length: t }), [t]), h = (x) => {
    const T = (c !== null ? c : e) - x;
    return T >= 1 ? 1 : T > 0 ? Math.round(T / o) * o : 0;
  }, m = (x, E) => {
    if (i || a) return;
    const { left: T, width: w } = E.target.getBoundingClientRect(), b = (E.clientX - T) / w;
    let k = x + b;
    k = Math.round(k / o) * o, u(Math.max(o, Math.min(t, k)));
  }, C = () => {
    u(null);
  }, y = (x, E) => {
    if (i || a || !s) return;
    const { left: T, width: w } = E.target.getBoundingClientRect(), b = (E.clientX - T) / w;
    let k = x + b;
    k = Math.round(k / o) * o, s(Math.max(o, Math.min(t, k)));
  };
  return /* @__PURE__ */ ve(
    "span",
    {
      style: {
        display: "inline-flex",
        alignItems: "center",
        cursor: i || a ? "default" : "pointer"
      },
      onMouseLeave: C,
      children: [
        f.map((x, E) => {
          const T = h(E);
          return /* @__PURE__ */ ve(
            "span",
            {
              style: {
                position: "relative",
                width: d,
                height: d,
                display: "inline-block"
              },
              onMouseMove: (w) => m(E, w),
              onClick: (w) => y(E, w),
              children: [
                /* @__PURE__ */ S(
                  ti,
                  {
                    size: d,
                    style: { position: "absolute", left: 0, top: 0, color: "#bbb" }
                  }
                ),
                /* @__PURE__ */ S(
                  "span",
                  {
                    style: {
                      width: `${T * 100}%`,
                      overflow: "hidden",
                      position: "absolute",
                      left: 0,
                      top: 0,
                      height: "100%",
                      pointerEvents: "none",
                      display: "inline-block"
                    },
                    children: /* @__PURE__ */ S(
                      ti,
                      {
                        weight: "fill",
                        size: d,
                        style: { color: "#FFD700" }
                      }
                    )
                  }
                )
              ]
            },
            E
          );
        }),
        l && /* @__PURE__ */ S("span", { style: { marginLeft: 8, fontSize: d * 0.7 }, children: (c ?? e).toFixed(1) })
      ]
    }
  );
};
function em(e) {
  return de("MuiSwitch", e);
}
const ze = ce("MuiSwitch", ["root", "edgeStart", "edgeEnd", "switchBase", "colorPrimary", "colorSecondary", "sizeSmall", "sizeMedium", "checked", "disabled", "input", "thumb", "track"]), tm = (e) => {
  const {
    classes: t,
    edge: o,
    size: r,
    color: i,
    checked: a,
    disabled: l
  } = e, s = {
    root: ["root", o && `edge${W(o)}`, `size${W(r)}`],
    switchBase: ["switchBase", `color${W(i)}`, a && "checked", l && "disabled"],
    thumb: ["thumb"],
    track: ["track"],
    input: ["input"]
  }, c = ge(s, em, t);
  return {
    ...t,
    // forward the disabled and checked classes to the SwitchBase
    ...c
  };
}, om = Q("span", {
  name: "MuiSwitch",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: o
    } = e;
    return [t.root, o.edge && t[`edge${W(o.edge)}`], t[`size${W(o.size)}`]];
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
      [`& .${ze.thumb}`]: {
        width: 16,
        height: 16
      },
      [`& .${ze.switchBase}`]: {
        padding: 4,
        [`&.${ze.checked}`]: {
          transform: "translateX(16px)"
        }
      }
    }
  }]
}), nm = Q(lr, {
  name: "MuiSwitch",
  slot: "SwitchBase",
  overridesResolver: (e, t) => {
    const {
      ownerState: o
    } = e;
    return [t.switchBase, {
      [`& .${ze.input}`]: t.input
    }, o.color !== "default" && t[`color${W(o.color)}`]];
  }
})(fe(({
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
  [`&.${ze.checked}`]: {
    transform: "translateX(20px)"
  },
  [`&.${ze.disabled}`]: {
    color: e.vars ? e.vars.palette.Switch.defaultDisabledColor : `${e.palette.mode === "light" ? e.palette.grey[100] : e.palette.grey[600]}`
  },
  [`&.${ze.checked} + .${ze.track}`]: {
    opacity: 0.5
  },
  [`&.${ze.disabled} + .${ze.track}`]: {
    opacity: e.vars ? e.vars.opacity.switchTrackDisabled : `${e.palette.mode === "light" ? 0.12 : 0.2}`
  },
  [`& .${ze.input}`]: {
    left: "-100%",
    width: "300%"
  }
})), fe(({
  theme: e
}) => ({
  "&:hover": {
    backgroundColor: e.vars ? `rgba(${e.vars.palette.action.activeChannel} / ${e.vars.palette.action.hoverOpacity})` : X(e.palette.action.active, e.palette.action.hoverOpacity),
    // Reset on touch devices, it doesn't add specificity
    "@media (hover: none)": {
      backgroundColor: "transparent"
    }
  },
  variants: [...Object.entries(e.palette).filter(De(["light"])).map(([t]) => ({
    props: {
      color: t
    },
    style: {
      [`&.${ze.checked}`]: {
        color: (e.vars || e).palette[t].main,
        "&:hover": {
          backgroundColor: e.vars ? `rgba(${e.vars.palette[t].mainChannel} / ${e.vars.palette.action.hoverOpacity})` : X(e.palette[t].main, e.palette.action.hoverOpacity),
          "@media (hover: none)": {
            backgroundColor: "transparent"
          }
        },
        [`&.${ze.disabled}`]: {
          color: e.vars ? e.vars.palette.Switch[`${t}DisabledColor`] : `${e.palette.mode === "light" ? So(e.palette[t].main, 0.62) : wo(e.palette[t].main, 0.55)}`
        }
      },
      [`&.${ze.checked} + .${ze.track}`]: {
        backgroundColor: (e.vars || e).palette[t].main
      }
    }
  }))]
}))), rm = Q("span", {
  name: "MuiSwitch",
  slot: "Track",
  overridesResolver: (e, t) => t.track
})(fe(({
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
}))), im = Q("span", {
  name: "MuiSwitch",
  slot: "Thumb",
  overridesResolver: (e, t) => t.thumb
})(fe(({
  theme: e
}) => ({
  boxShadow: (e.vars || e).shadows[1],
  backgroundColor: "currentColor",
  width: 20,
  height: 20,
  borderRadius: "50%"
}))), Tl = /* @__PURE__ */ g.forwardRef(function(t, o) {
  const r = he({
    props: t,
    name: "MuiSwitch"
  }), {
    className: i,
    color: a = "primary",
    edge: l = !1,
    size: s = "medium",
    sx: c,
    slots: u = {},
    slotProps: d = {},
    ...f
  } = r, h = {
    ...r,
    color: a,
    edge: l,
    size: s
  }, m = tm(h), C = {
    slots: u,
    slotProps: d
  }, [y, x] = le("root", {
    className: _(m.root, i),
    elementType: om,
    externalForwardedProps: C,
    ownerState: h,
    additionalProps: {
      sx: c
    }
  }), [E, T] = le("thumb", {
    className: m.thumb,
    elementType: im,
    externalForwardedProps: C,
    ownerState: h
  }), w = /* @__PURE__ */ S(E, {
    ...T
  }), [b, k] = le("track", {
    className: m.track,
    elementType: rm,
    externalForwardedProps: C,
    ownerState: h
  });
  return /* @__PURE__ */ ve(y, {
    ...x,
    children: [/* @__PURE__ */ S(nm, {
      type: "checkbox",
      icon: w,
      checkedIcon: w,
      ref: o,
      ownerState: h,
      ...f,
      classes: {
        ...m,
        root: m.switchBase
      },
      slots: {
        ...u.switchBase && {
          root: u.switchBase
        },
        ...u.input && {
          input: u.input
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
    }), /* @__PURE__ */ S(b, {
      ...k
    })]
  });
});
process.env.NODE_ENV !== "production" && (Tl.propTypes = {
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
  inputRef: Ot,
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
const Vr = (e, t = "#000000") => {
  if (!e) return;
  let o = _l(e);
  return o = o.replace(/class=".*?"/g, "").replace(/focusable=".*?"/g, "").replace(/aria-hidden=".*?"/g, "").replace(/data-testid=".*?"/g, ""), o.includes("xmlns") || (o = o.replace("<svg", '<svg xmlns="http://www.w3.org/2000/svg"')), o.includes("fill=") || (o = o.replace("<path", '<path fill="' + t + '"')), `url("data:image/svg+xml;utf8,${encodeURIComponent(o)}")`;
}, am = (e, t = "primary") => {
  var i;
  const o = Me[t], r = ((i = e == null ? void 0 : e.palette) == null ? void 0 : i[t]) ?? o;
  return {
    bgColor: r.custMain ?? o.custMain,
    thumbColor: r.onMain ?? o.onMain,
    actthumbColor: r.fabBg ?? o.fabBg,
    unselectbgColor: r.surface ?? o.surface,
    unselectColor: r.outline ?? o.outline,
    unselectthumbColor: r.iconFont ?? o.iconFont
  };
}, sm = {
  small: { w: 40, h: 24 },
  medium: { w: 52, h: 32 },
  // ⇦ 原始 52×32 | thumb24 checked
  large: { w: 80, h: 50 }
}, lm = Q(Tl)(({ theme: e, selectedIcon: t, unselectedIcon: o, custsize: r = "medium" }) => {
  const i = am(e), a = Vr(
    t,
    i.bgColor
  ), l = Vr(
    t,
    X(at[0], 0.12)
    // "000000"
  ), s = Vr(
    o,
    i.unselectbgColor
  ), c = sm[r], u = c.h - 8;
  return {
    width: c.w,
    height: c.h,
    padding: 0,
    borderRadius: 100,
    overflow: "visible",
    "& .MuiSwitch-thumb": {
      position: "relative",
      margin: o ? (c.h - u) / 2 : (c.h - c.h / 2) / 2,
      boxShadow: "none",
      width: o ? u : c.h / 2,
      height: o ? u : c.h / 2,
      transitionDuration: "300ms",
      color: i.unselectColor,
      "&::before": {
        content: "''",
        position: "absolute",
        width: u - 8,
        // ✅ 固定寬高
        height: u - 8,
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
          color: X(at[0], 0.38)
        },
        "& + .MuiSwitch-track": {
          border: `2px solid ${X(at[0], 0.12)}`,
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
        backgroundColor: X(at[0], 0.08),
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
          backgroundColor: X(i.bgColor, 0.08)
        },
        "& .MuiSwitch-thumb": {
          color: i.thumbColor,
          margin: (c.h - u) / 2,
          width: u,
          height: u
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
}), Ty = ({
  selectedIcon: e,
  unselectedIcon: t,
  size: o,
  ...r
}) => /* @__PURE__ */ S(
  lm,
  {
    selectedIcon: e,
    unselectedIcon: t,
    custsize: o,
    ...r
  }
);
function cm(e) {
  return (1 + Math.sin(Math.PI * e - Math.PI / 2)) / 2;
}
function um(e, t, o, r = {}, i = () => {
}) {
  const {
    ease: a = cm,
    duration: l = 300
    // standard
  } = r;
  let s = null;
  const c = t[e];
  let u = !1;
  const d = () => {
    u = !0;
  }, f = (h) => {
    if (u) {
      i(new Error("Animation cancelled"));
      return;
    }
    s === null && (s = h);
    const m = Math.min(1, (h - s) / l);
    if (t[e] = a(m) * (o - c) + c, m >= 1) {
      requestAnimationFrame(() => {
        i(null);
      });
      return;
    }
    requestAnimationFrame(f);
  };
  return c === o ? (i(new Error("Element already at target position")), d) : (requestAnimationFrame(f), d);
}
const pm = {
  width: 99,
  height: 99,
  position: "absolute",
  top: -9999,
  overflow: "scroll"
};
function kl(e) {
  const {
    onChange: t,
    ...o
  } = e, r = g.useRef(), i = g.useRef(null), a = () => {
    r.current = i.current.offsetHeight - i.current.clientHeight;
  };
  return gt(() => {
    const l = ir(() => {
      const c = r.current;
      a(), c !== r.current && t(r.current);
    }), s = Ve(i.current);
    return s.addEventListener("resize", l), () => {
      l.clear(), s.removeEventListener("resize", l);
    };
  }, [t]), g.useEffect(() => {
    a(), t(r.current);
  }, [t]), /* @__PURE__ */ S("div", {
    style: pm,
    ...o,
    ref: i
  });
}
process.env.NODE_ENV !== "production" && (kl.propTypes = {
  onChange: n.func.isRequired
});
const dm = Ke(/* @__PURE__ */ S("path", {
  d: "M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z"
}), "KeyboardArrowLeft"), fm = Ke(/* @__PURE__ */ S("path", {
  d: "M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z"
}), "KeyboardArrowRight");
function gm(e) {
  return de("MuiTabScrollButton", e);
}
const hm = ce("MuiTabScrollButton", ["root", "vertical", "horizontal", "disabled"]), mm = (e) => {
  const {
    classes: t,
    orientation: o,
    disabled: r
  } = e;
  return ge({
    root: ["root", o, r && "disabled"]
  }, gm, t);
}, bm = Q(lt, {
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
  [`&.${hm.disabled}`]: {
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
}), Ol = /* @__PURE__ */ g.forwardRef(function(t, o) {
  const r = he({
    props: t,
    name: "MuiTabScrollButton"
  }), {
    className: i,
    slots: a = {},
    slotProps: l = {},
    direction: s,
    orientation: c,
    disabled: u,
    ...d
  } = r, f = Po(), h = {
    isRtl: f,
    ...r
  }, m = mm(h), C = a.StartScrollButtonIcon ?? dm, y = a.EndScrollButtonIcon ?? fm, x = To({
    elementType: C,
    externalSlotProps: l.startScrollButtonIcon,
    additionalProps: {
      fontSize: "small"
    },
    ownerState: h
  }), E = To({
    elementType: y,
    externalSlotProps: l.endScrollButtonIcon,
    additionalProps: {
      fontSize: "small"
    },
    ownerState: h
  });
  return /* @__PURE__ */ S(bm, {
    component: "div",
    className: _(m.root, i),
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
    children: s === "left" ? /* @__PURE__ */ S(C, {
      ...x
    }) : /* @__PURE__ */ S(y, {
      ...E
    })
  });
});
process.env.NODE_ENV !== "production" && (Ol.propTypes = {
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
function ym(e) {
  return de("MuiTabs", e);
}
const Wr = ce("MuiTabs", ["root", "vertical", "list", "flexContainer", "flexContainerVertical", "centered", "scroller", "fixed", "scrollableX", "scrollableY", "hideScrollbar", "scrollButtons", "scrollButtonsHideMobile", "indicator"]), La = (e, t) => e === t ? e.firstChild : t && t.nextElementSibling ? t.nextElementSibling : e.firstChild, za = (e, t) => e === t ? e.lastChild : t && t.previousElementSibling ? t.previousElementSibling : e.lastChild, kn = (e, t, o) => {
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
}, vm = (e) => {
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
  return ge({
    root: ["root", t && "vertical"],
    scroller: ["scroller", o && "fixed", r && "hideScrollbar", i && "scrollableX", a && "scrollableY"],
    list: ["list", "flexContainer", t && "flexContainerVertical", t && "vertical", l && "centered"],
    indicator: ["indicator"],
    scrollButtons: ["scrollButtons", s && "scrollButtonsHideMobile"],
    scrollableX: [i && "scrollableX"],
    hideScrollbar: [r && "hideScrollbar"]
  }, ym, c);
}, Cm = Q("div", {
  name: "MuiTabs",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: o
    } = e;
    return [{
      [`& .${Wr.scrollButtons}`]: t.scrollButtons
    }, {
      [`& .${Wr.scrollButtons}`]: o.scrollButtonsHideMobile && t.scrollButtonsHideMobile
    }, t.root, o.vertical && t.vertical];
  }
})(fe(({
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
      [`& .${Wr.scrollButtons}`]: {
        [e.breakpoints.down("sm")]: {
          display: "none"
        }
      }
    }
  }]
}))), xm = Q("div", {
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
}), Em = Q("div", {
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
}), wm = Q("span", {
  name: "MuiTabs",
  slot: "Indicator",
  overridesResolver: (e, t) => t.indicator
})(fe(({
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
}))), Sm = Q(kl)({
  overflowX: "auto",
  overflowY: "hidden",
  // Hide dimensionless scrollbar on macOS
  scrollbarWidth: "none",
  // Firefox
  "&::-webkit-scrollbar": {
    display: "none"
    // Safari + Chrome
  }
}), Va = {};
let Wa = !1;
const Al = /* @__PURE__ */ g.forwardRef(function(t, o) {
  const r = he({
    props: t,
    name: "MuiTabs"
  }), i = rt(), a = Po(), {
    "aria-label": l,
    "aria-labelledby": s,
    action: c,
    centered: u = !1,
    children: d,
    className: f,
    component: h = "div",
    allowScrollButtonsMobile: m = !1,
    indicatorColor: C = "primary",
    onChange: y,
    orientation: x = "horizontal",
    ScrollButtonComponent: E,
    // TODO: remove in v7 (deprecated in v6)
    scrollButtons: T = "auto",
    selectionFollowsFocus: w,
    slots: b = {},
    slotProps: k = {},
    TabIndicatorProps: A = {},
    // TODO: remove in v7 (deprecated in v6)
    TabScrollButtonProps: M = {},
    // TODO: remove in v7 (deprecated in v6)
    textColor: $ = "primary",
    value: N,
    variant: p = "standard",
    visibleScrollbar: F = !1,
    ...B
  } = r, O = p === "scrollable", I = x === "vertical", j = I ? "scrollTop" : "scrollLeft", P = I ? "top" : "left", U = I ? "bottom" : "right", H = I ? "clientHeight" : "clientWidth", L = I ? "height" : "width", R = {
    ...r,
    component: h,
    allowScrollButtonsMobile: m,
    indicatorColor: C,
    orientation: x,
    vertical: I,
    scrollButtons: T,
    textColor: $,
    variant: p,
    visibleScrollbar: F,
    fixed: !O,
    hideScrollbar: O && !F,
    scrollableX: O && !I,
    scrollableY: O && I,
    centered: u && !O,
    scrollButtonsHideMobile: !m
  }, V = vm(R), ne = To({
    elementType: b.StartScrollButtonIcon,
    externalSlotProps: k.startScrollButtonIcon,
    ownerState: R
  }), te = To({
    elementType: b.EndScrollButtonIcon,
    externalSlotProps: k.endScrollButtonIcon,
    ownerState: R
  });
  process.env.NODE_ENV !== "production" && u && O && console.error('MUI: You can not use the `centered={true}` and `variant="scrollable"` properties at the same time on a `Tabs` component.');
  const [G, Y] = g.useState(!1), [q, z] = g.useState(Va), [oe, re] = g.useState(!1), [K, Z] = g.useState(!1), [J, ue] = g.useState(!1), [pe, ke] = g.useState({
    overflow: "hidden",
    scrollbarWidth: 0
  }), xe = /* @__PURE__ */ new Map(), be = g.useRef(null), Ee = g.useRef(null), Ie = {
    slots: b,
    slotProps: {
      indicator: A,
      scrollButton: M,
      ...k
    }
  }, Ne = () => {
    const ee = be.current;
    let ie;
    if (ee) {
      const Ce = ee.getBoundingClientRect();
      ie = {
        clientWidth: ee.clientWidth,
        scrollLeft: ee.scrollLeft,
        scrollTop: ee.scrollTop,
        scrollWidth: ee.scrollWidth,
        top: Ce.top,
        bottom: Ce.bottom,
        left: Ce.left,
        right: Ce.right
      };
    }
    let ye;
    if (ee && N !== !1) {
      const Ce = Ee.current.children;
      if (Ce.length > 0) {
        const Ae = Ce[xe.get(N)];
        process.env.NODE_ENV !== "production" && (Ae || console.error(["MUI: The `value` provided to the Tabs component is invalid.", `None of the Tabs' children match with "${N}".`, xe.keys ? `You can provide one of the following values: ${Array.from(xe.keys()).join(", ")}.` : null].join(`
`))), ye = Ae ? Ae.getBoundingClientRect() : null, process.env.NODE_ENV !== "production" && process.env.NODE_ENV !== "test" && !Wa && ye && ye.width === 0 && ye.height === 0 && // if the whole Tabs component is hidden, don't warn
        ie.clientWidth !== 0 && (ie = null, console.error(["MUI: The `value` provided to the Tabs component is invalid.", `The Tab with this \`value\` ("${N}") is not part of the document layout.`, "Make sure the tab item is present in the document or that it's not `display: none`."].join(`
`)), Wa = !0);
      }
    }
    return {
      tabsMeta: ie,
      tabMeta: ye
    };
  }, we = Ue(() => {
    const {
      tabsMeta: ee,
      tabMeta: ie
    } = Ne();
    let ye = 0, Ce;
    I ? (Ce = "top", ie && ee && (ye = ie.top - ee.top + ee.scrollTop)) : (Ce = a ? "right" : "left", ie && ee && (ye = (a ? -1 : 1) * (ie[Ce] - ee[Ce] + ee.scrollLeft)));
    const Ae = {
      [Ce]: ye,
      // May be wrong until the font is loaded.
      [L]: ie ? ie[L] : 0
    };
    if (typeof q[Ce] != "number" || typeof q[L] != "number")
      z(Ae);
    else {
      const ut = Math.abs(q[Ce] - Ae[Ce]), Vt = Math.abs(q[L] - Ae[L]);
      (ut >= 1 || Vt >= 1) && z(Ae);
    }
  }), ae = (ee, {
    animation: ie = !0
  } = {}) => {
    ie ? um(j, be.current, ee, {
      duration: i.transitions.duration.standard
    }) : be.current[j] = ee;
  }, Rt = (ee) => {
    let ie = be.current[j];
    I ? ie += ee : ie += ee * (a ? -1 : 1), ae(ie);
  }, Ft = () => {
    const ee = be.current[H];
    let ie = 0;
    const ye = Array.from(Ee.current.children);
    for (let Ce = 0; Ce < ye.length; Ce += 1) {
      const Ae = ye[Ce];
      if (ie + Ae[H] > ee) {
        Ce === 0 && (ie = ee);
        break;
      }
      ie += Ae[H];
    }
    return ie;
  }, co = () => {
    Rt(-1 * Ft());
  }, uo = () => {
    Rt(Ft());
  }, [Pt, {
    onChange: vt,
    ...Lt
  }] = le("scrollbar", {
    className: _(V.scrollableX, V.hideScrollbar),
    elementType: Sm,
    shouldForwardComponentProp: !0,
    externalForwardedProps: Ie,
    ownerState: R
  }), Bo = g.useCallback((ee) => {
    vt == null || vt(ee), ke({
      overflow: null,
      scrollbarWidth: ee
    });
  }, [vt]), [Le, Mt] = le("scrollButtons", {
    className: _(V.scrollButtons, M.className),
    elementType: Ol,
    externalForwardedProps: Ie,
    ownerState: R,
    additionalProps: {
      orientation: x,
      slots: {
        StartScrollButtonIcon: b.startScrollButtonIcon || b.StartScrollButtonIcon,
        EndScrollButtonIcon: b.endScrollButtonIcon || b.EndScrollButtonIcon
      },
      slotProps: {
        startScrollButtonIcon: ne,
        endScrollButtonIcon: te
      }
    }
  }), Ct = () => {
    const ee = {};
    ee.scrollbarSizeListener = O ? /* @__PURE__ */ S(Pt, {
      ...Lt,
      onChange: Bo
    }) : null;
    const ye = O && (T === "auto" && (oe || K) || T === !0);
    return ee.scrollButtonStart = ye ? /* @__PURE__ */ S(Le, {
      direction: a ? "right" : "left",
      onClick: co,
      disabled: !oe,
      ...Mt
    }) : null, ee.scrollButtonEnd = ye ? /* @__PURE__ */ S(Le, {
      direction: a ? "left" : "right",
      onClick: uo,
      disabled: !K,
      ...Mt
    }) : null, ee;
  }, We = Ue((ee) => {
    const {
      tabsMeta: ie,
      tabMeta: ye
    } = Ne();
    if (!(!ye || !ie)) {
      if (ye[P] < ie[P]) {
        const Ce = ie[j] + (ye[P] - ie[P]);
        ae(Ce, {
          animation: ee
        });
      } else if (ye[U] > ie[U]) {
        const Ce = ie[j] + (ye[U] - ie[U]);
        ae(Ce, {
          animation: ee
        });
      }
    }
  }), po = Ue(() => {
    O && T !== !1 && ue(!J);
  });
  g.useEffect(() => {
    const ee = ir(() => {
      be.current && we();
    });
    let ie;
    const ye = (ut) => {
      ut.forEach((Vt) => {
        Vt.removedNodes.forEach((No) => {
          ie == null || ie.unobserve(No);
        }), Vt.addedNodes.forEach((No) => {
          ie == null || ie.observe(No);
        });
      }), ee(), po();
    }, Ce = Ve(be.current);
    Ce.addEventListener("resize", ee);
    let Ae;
    return typeof ResizeObserver < "u" && (ie = new ResizeObserver(ee), Array.from(Ee.current.children).forEach((ut) => {
      ie.observe(ut);
    })), typeof MutationObserver < "u" && (Ae = new MutationObserver(ye), Ae.observe(Ee.current, {
      childList: !0
    })), () => {
      ee.clear(), Ce.removeEventListener("resize", ee), Ae == null || Ae.disconnect(), ie == null || ie.disconnect();
    };
  }, [we, po]), g.useEffect(() => {
    const ee = Array.from(Ee.current.children), ie = ee.length;
    if (typeof IntersectionObserver < "u" && ie > 0 && O && T !== !1) {
      const ye = ee[0], Ce = ee[ie - 1], Ae = {
        root: be.current,
        threshold: 0.99
      }, ut = (vr) => {
        re(!vr[0].isIntersecting);
      }, Vt = new IntersectionObserver(ut, Ae);
      Vt.observe(ye);
      const No = (vr) => {
        Z(!vr[0].isIntersecting);
      }, Li = new IntersectionObserver(No, Ae);
      return Li.observe(Ce), () => {
        Vt.disconnect(), Li.disconnect();
      };
    }
  }, [O, T, J, d == null ? void 0 : d.length]), g.useEffect(() => {
    Y(!0);
  }, []), g.useEffect(() => {
    we();
  }), g.useEffect(() => {
    We(Va !== q);
  }, [We, q]), g.useImperativeHandle(c, () => ({
    updateIndicator: we,
    updateScrollButtons: po
  }), [we, po]);
  const [Io, dr] = le("indicator", {
    className: _(V.indicator, A.className),
    elementType: wm,
    externalForwardedProps: Ie,
    ownerState: R,
    additionalProps: {
      style: q
    }
  }), zt = /* @__PURE__ */ S(Io, {
    ...dr
  });
  let fo = 0;
  const fr = g.Children.map(d, (ee) => {
    if (!/* @__PURE__ */ g.isValidElement(ee))
      return null;
    process.env.NODE_ENV !== "production" && si(ee) && console.error(["MUI: The Tabs component doesn't accept a Fragment as a child.", "Consider providing an array instead."].join(`
`));
    const ie = ee.props.value === void 0 ? fo : ee.props.value;
    xe.set(ie, fo);
    const ye = ie === N;
    return fo += 1, /* @__PURE__ */ g.cloneElement(ee, {
      fullWidth: p === "fullWidth",
      indicator: ye && !G && zt,
      selected: ye,
      selectionFollowsFocus: w,
      onChange: y,
      textColor: $,
      value: ie,
      ...fo === 1 && N === !1 && !ee.props.tabIndex ? {
        tabIndex: 0
      } : {}
    });
  }), gr = (ee) => {
    if (ee.altKey || ee.shiftKey || ee.ctrlKey || ee.metaKey)
      return;
    const ie = Ee.current, ye = $e(ie).activeElement;
    if (ye.getAttribute("role") !== "tab")
      return;
    let Ae = x === "horizontal" ? "ArrowLeft" : "ArrowUp", ut = x === "horizontal" ? "ArrowRight" : "ArrowDown";
    switch (x === "horizontal" && a && (Ae = "ArrowRight", ut = "ArrowLeft"), ee.key) {
      case Ae:
        ee.preventDefault(), kn(ie, ye, za);
        break;
      case ut:
        ee.preventDefault(), kn(ie, ye, La);
        break;
      case "Home":
        ee.preventDefault(), kn(ie, null, La);
        break;
      case "End":
        ee.preventDefault(), kn(ie, null, za);
        break;
    }
  }, Do = Ct(), [hr, mr] = le("root", {
    ref: o,
    className: _(V.root, f),
    elementType: Cm,
    externalForwardedProps: {
      ...Ie,
      ...B,
      component: h
    },
    ownerState: R
  }), [br, yr] = le("scroller", {
    ref: be,
    className: V.scroller,
    elementType: xm,
    externalForwardedProps: Ie,
    ownerState: R,
    additionalProps: {
      style: {
        overflow: pe.overflow,
        [I ? `margin${a ? "Left" : "Right"}` : "marginBottom"]: F ? void 0 : -pe.scrollbarWidth
      }
    }
  }), [se, Ye] = le("list", {
    ref: Ee,
    className: _(V.list, V.flexContainer),
    elementType: Em,
    externalForwardedProps: Ie,
    ownerState: R,
    getSlotProps: (ee) => ({
      ...ee,
      onKeyDown: (ie) => {
        var ye;
        gr(ie), (ye = ee.onKeyDown) == null || ye.call(ee, ie);
      }
    })
  });
  return /* @__PURE__ */ ve(hr, {
    ...mr,
    children: [Do.scrollButtonStart, Do.scrollbarSizeListener, /* @__PURE__ */ ve(br, {
      ...yr,
      children: [/* @__PURE__ */ S(se, {
        "aria-label": l,
        "aria-labelledby": s,
        "aria-orientation": x === "vertical" ? "vertical" : null,
        role: "tablist",
        ...Ye,
        children: fr
      }), G && zt]
    }), Do.scrollButtonEnd]
  });
});
process.env.NODE_ENV !== "production" && (Al.propTypes = {
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
  action: Ot,
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
function Tm(e) {
  return de("MuiTab", e);
}
const Je = ce("MuiTab", ["root", "labelIcon", "textColorInherit", "textColorPrimary", "textColorSecondary", "selected", "disabled", "fullWidth", "wrapped", "iconWrapper", "icon"]), km = (e) => {
  const {
    classes: t,
    textColor: o,
    fullWidth: r,
    wrapped: i,
    icon: a,
    label: l,
    selected: s,
    disabled: c
  } = e, u = {
    root: ["root", a && l && "labelIcon", `textColor${W(o)}`, r && "fullWidth", i && "wrapped", s && "selected", c && "disabled"],
    icon: ["iconWrapper", "icon"]
  };
  return ge(u, Tm, t);
}, Om = Q(lt, {
  name: "MuiTab",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: o
    } = e;
    return [t.root, o.label && o.icon && t.labelIcon, t[`textColor${W(o.textColor)}`], o.fullWidth && t.fullWidth, o.wrapped && t.wrapped, {
      [`& .${Je.iconWrapper}`]: t.iconWrapper
    }, {
      [`& .${Je.icon}`]: t.icon
    }];
  }
})(fe(({
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
}))), Rl = /* @__PURE__ */ g.forwardRef(function(t, o) {
  const r = he({
    props: t,
    name: "MuiTab"
  }), {
    className: i,
    disabled: a = !1,
    disableFocusRipple: l = !1,
    // eslint-disable-next-line react/prop-types
    fullWidth: s,
    icon: c,
    iconPosition: u = "top",
    // eslint-disable-next-line react/prop-types
    indicator: d,
    label: f,
    onChange: h,
    onClick: m,
    onFocus: C,
    // eslint-disable-next-line react/prop-types
    selected: y,
    // eslint-disable-next-line react/prop-types
    selectionFollowsFocus: x,
    // eslint-disable-next-line react/prop-types
    textColor: E = "inherit",
    value: T,
    wrapped: w = !1,
    ...b
  } = r, k = {
    ...r,
    disabled: a,
    disableFocusRipple: l,
    selected: y,
    icon: !!c,
    iconPosition: u,
    label: !!f,
    fullWidth: s,
    textColor: E,
    wrapped: w
  }, A = km(k), M = c && f && /* @__PURE__ */ g.isValidElement(c) ? /* @__PURE__ */ g.cloneElement(c, {
    className: _(A.icon, c.props.className)
  }) : c, $ = (p) => {
    !y && h && h(p, T), m && m(p);
  }, N = (p) => {
    x && !y && h && h(p, T), C && C(p);
  };
  return /* @__PURE__ */ ve(Om, {
    focusRipple: !l,
    className: _(A.root, i),
    ref: o,
    role: "tab",
    "aria-selected": y,
    disabled: a,
    onClick: $,
    onFocus: N,
    ownerState: k,
    tabIndex: y ? 0 : -1,
    ...b,
    children: [u === "top" || u === "start" ? /* @__PURE__ */ ve(g.Fragment, {
      children: [M, f]
    }) : /* @__PURE__ */ ve(g.Fragment, {
      children: [f, M]
    }), d]
  });
});
process.env.NODE_ENV !== "production" && (Rl.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * This prop isn't supported.
   * Use the `component` prop if you need to change the children structure.
   */
  children: ys,
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
const Am = Q(Al)(() => ({})), Rm = (e, t = "primary") => {
  var i;
  const o = Me[t], r = ((i = e == null ? void 0 : e.palette) == null ? void 0 : i[t]) ?? o;
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
      color: X(at[0], 0.38)
    },
    "& svg": {
      fontSize: 30,
      color: e.palette.grey[500]
    }
  };
}, Fm = Q(Rl, {
  shouldForwardProp: (e) => e !== "color"
})(
  ({ theme: e, color: t = "primary" }) => Rm(e, t)
), ky = ({
  options: e,
  value: t,
  onChange: o,
  indicatorColor: r,
  variant: i = "standard",
  iconPosition: a,
  ...l
}) => /* @__PURE__ */ S(
  Am,
  {
    value: t,
    onChange: (c, u) => {
      o(u);
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
      Fm,
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
var He = "top", tt = "bottom", ot = "right", Qe = "left", Fi = "auto", mn = [He, tt, ot, Qe], ko = "start", sn = "end", Pm = "clippingParents", Fl = "viewport", Wo = "popper", Mm = "reference", Ua = /* @__PURE__ */ mn.reduce(function(e, t) {
  return e.concat([t + "-" + ko, t + "-" + sn]);
}, []), Pl = /* @__PURE__ */ [].concat(mn, [Fi]).reduce(function(e, t) {
  return e.concat([t, t + "-" + ko, t + "-" + sn]);
}, []), Bm = "beforeRead", Im = "read", Dm = "afterRead", Nm = "beforeMain", jm = "main", $m = "afterMain", Lm = "beforeWrite", zm = "write", Vm = "afterWrite", Wm = [Bm, Im, Dm, Nm, jm, $m, Lm, zm, Vm];
function mt(e) {
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
function Jt(e) {
  var t = Xe(e).Element;
  return e instanceof t || e instanceof Element;
}
function et(e) {
  var t = Xe(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function Pi(e) {
  if (typeof ShadowRoot > "u")
    return !1;
  var t = Xe(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
function Um(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function(o) {
    var r = t.styles[o] || {}, i = t.attributes[o] || {}, a = t.elements[o];
    !et(a) || !mt(a) || (Object.assign(a.style, r), Object.keys(i).forEach(function(l) {
      var s = i[l];
      s === !1 ? a.removeAttribute(l) : a.setAttribute(l, s === !0 ? "" : s);
    }));
  });
}
function Hm(e) {
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
      var i = t.elements[r], a = t.attributes[r] || {}, l = Object.keys(t.styles.hasOwnProperty(r) ? t.styles[r] : o[r]), s = l.reduce(function(c, u) {
        return c[u] = "", c;
      }, {});
      !et(i) || !mt(i) || (Object.assign(i.style, s), Object.keys(a).forEach(function(c) {
        i.removeAttribute(c);
      }));
    });
  };
}
const Qm = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: Um,
  effect: Hm,
  requires: ["computeStyles"]
};
function ft(e) {
  return e.split("-")[0];
}
var Yt = Math.max, Yn = Math.min, Oo = Math.round;
function ri() {
  var e = navigator.userAgentData;
  return e != null && e.brands && Array.isArray(e.brands) ? e.brands.map(function(t) {
    return t.brand + "/" + t.version;
  }).join(" ") : navigator.userAgent;
}
function Ml() {
  return !/^((?!chrome|android).)*safari/i.test(ri());
}
function Ao(e, t, o) {
  t === void 0 && (t = !1), o === void 0 && (o = !1);
  var r = e.getBoundingClientRect(), i = 1, a = 1;
  t && et(e) && (i = e.offsetWidth > 0 && Oo(r.width) / e.offsetWidth || 1, a = e.offsetHeight > 0 && Oo(r.height) / e.offsetHeight || 1);
  var l = Jt(e) ? Xe(e) : window, s = l.visualViewport, c = !Ml() && o, u = (r.left + (c && s ? s.offsetLeft : 0)) / i, d = (r.top + (c && s ? s.offsetTop : 0)) / a, f = r.width / i, h = r.height / a;
  return {
    width: f,
    height: h,
    top: d,
    right: u + f,
    bottom: d + h,
    left: u,
    x: u,
    y: d
  };
}
function Mi(e) {
  var t = Ao(e), o = e.offsetWidth, r = e.offsetHeight;
  return Math.abs(t.width - o) <= 1 && (o = t.width), Math.abs(t.height - r) <= 1 && (r = t.height), {
    x: e.offsetLeft,
    y: e.offsetTop,
    width: o,
    height: r
  };
}
function Bl(e, t) {
  var o = t.getRootNode && t.getRootNode();
  if (e.contains(t))
    return !0;
  if (o && Pi(o)) {
    var r = t;
    do {
      if (r && e.isSameNode(r))
        return !0;
      r = r.parentNode || r.host;
    } while (r);
  }
  return !1;
}
function Tt(e) {
  return Xe(e).getComputedStyle(e);
}
function Km(e) {
  return ["table", "td", "th"].indexOf(mt(e)) >= 0;
}
function $t(e) {
  return ((Jt(e) ? e.ownerDocument : (
    // $FlowFixMe[prop-missing]
    e.document
  )) || window.document).documentElement;
}
function ur(e) {
  return mt(e) === "html" ? e : (
    // this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    e.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    e.parentNode || // DOM Element detected
    (Pi(e) ? e.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    $t(e)
  );
}
function Ha(e) {
  return !et(e) || // https://github.com/popperjs/popper-core/issues/837
  Tt(e).position === "fixed" ? null : e.offsetParent;
}
function Ym(e) {
  var t = /firefox/i.test(ri()), o = /Trident/i.test(ri());
  if (o && et(e)) {
    var r = Tt(e);
    if (r.position === "fixed")
      return null;
  }
  var i = ur(e);
  for (Pi(i) && (i = i.host); et(i) && ["html", "body"].indexOf(mt(i)) < 0; ) {
    var a = Tt(i);
    if (a.transform !== "none" || a.perspective !== "none" || a.contain === "paint" || ["transform", "perspective"].indexOf(a.willChange) !== -1 || t && a.willChange === "filter" || t && a.filter && a.filter !== "none")
      return i;
    i = i.parentNode;
  }
  return null;
}
function bn(e) {
  for (var t = Xe(e), o = Ha(e); o && Km(o) && Tt(o).position === "static"; )
    o = Ha(o);
  return o && (mt(o) === "html" || mt(o) === "body" && Tt(o).position === "static") ? t : o || Ym(e) || t;
}
function Bi(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function Zo(e, t, o) {
  return Yt(e, Yn(t, o));
}
function Gm(e, t, o) {
  var r = Zo(e, t, o);
  return r > o ? o : r;
}
function Il() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function Dl(e) {
  return Object.assign({}, Il(), e);
}
function Nl(e, t) {
  return t.reduce(function(o, r) {
    return o[r] = e, o;
  }, {});
}
var qm = function(t, o) {
  return t = typeof t == "function" ? t(Object.assign({}, o.rects, {
    placement: o.placement
  })) : t, Dl(typeof t != "number" ? t : Nl(t, mn));
};
function Xm(e) {
  var t, o = e.state, r = e.name, i = e.options, a = o.elements.arrow, l = o.modifiersData.popperOffsets, s = ft(o.placement), c = Bi(s), u = [Qe, ot].indexOf(s) >= 0, d = u ? "height" : "width";
  if (!(!a || !l)) {
    var f = qm(i.padding, o), h = Mi(a), m = c === "y" ? He : Qe, C = c === "y" ? tt : ot, y = o.rects.reference[d] + o.rects.reference[c] - l[c] - o.rects.popper[d], x = l[c] - o.rects.reference[c], E = bn(a), T = E ? c === "y" ? E.clientHeight || 0 : E.clientWidth || 0 : 0, w = y / 2 - x / 2, b = f[m], k = T - h[d] - f[C], A = T / 2 - h[d] / 2 + w, M = Zo(b, A, k), $ = c;
    o.modifiersData[r] = (t = {}, t[$] = M, t.centerOffset = M - A, t);
  }
}
function Jm(e) {
  var t = e.state, o = e.options, r = o.element, i = r === void 0 ? "[data-popper-arrow]" : r;
  i != null && (typeof i == "string" && (i = t.elements.popper.querySelector(i), !i) || Bl(t.elements.popper, i) && (t.elements.arrow = i));
}
const Zm = {
  name: "arrow",
  enabled: !0,
  phase: "main",
  fn: Xm,
  effect: Jm,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"]
};
function Ro(e) {
  return e.split("-")[1];
}
var _m = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function eb(e, t) {
  var o = e.x, r = e.y, i = t.devicePixelRatio || 1;
  return {
    x: Oo(o * i) / i || 0,
    y: Oo(r * i) / i || 0
  };
}
function Qa(e) {
  var t, o = e.popper, r = e.popperRect, i = e.placement, a = e.variation, l = e.offsets, s = e.position, c = e.gpuAcceleration, u = e.adaptive, d = e.roundOffsets, f = e.isFixed, h = l.x, m = h === void 0 ? 0 : h, C = l.y, y = C === void 0 ? 0 : C, x = typeof d == "function" ? d({
    x: m,
    y
  }) : {
    x: m,
    y
  };
  m = x.x, y = x.y;
  var E = l.hasOwnProperty("x"), T = l.hasOwnProperty("y"), w = Qe, b = He, k = window;
  if (u) {
    var A = bn(o), M = "clientHeight", $ = "clientWidth";
    if (A === Xe(o) && (A = $t(o), Tt(A).position !== "static" && s === "absolute" && (M = "scrollHeight", $ = "scrollWidth")), A = A, i === He || (i === Qe || i === ot) && a === sn) {
      b = tt;
      var N = f && A === k && k.visualViewport ? k.visualViewport.height : (
        // $FlowFixMe[prop-missing]
        A[M]
      );
      y -= N - r.height, y *= c ? 1 : -1;
    }
    if (i === Qe || (i === He || i === tt) && a === sn) {
      w = ot;
      var p = f && A === k && k.visualViewport ? k.visualViewport.width : (
        // $FlowFixMe[prop-missing]
        A[$]
      );
      m -= p - r.width, m *= c ? 1 : -1;
    }
  }
  var F = Object.assign({
    position: s
  }, u && _m), B = d === !0 ? eb({
    x: m,
    y
  }, Xe(o)) : {
    x: m,
    y
  };
  if (m = B.x, y = B.y, c) {
    var O;
    return Object.assign({}, F, (O = {}, O[b] = T ? "0" : "", O[w] = E ? "0" : "", O.transform = (k.devicePixelRatio || 1) <= 1 ? "translate(" + m + "px, " + y + "px)" : "translate3d(" + m + "px, " + y + "px, 0)", O));
  }
  return Object.assign({}, F, (t = {}, t[b] = T ? y + "px" : "", t[w] = E ? m + "px" : "", t.transform = "", t));
}
function tb(e) {
  var t = e.state, o = e.options, r = o.gpuAcceleration, i = r === void 0 ? !0 : r, a = o.adaptive, l = a === void 0 ? !0 : a, s = o.roundOffsets, c = s === void 0 ? !0 : s, u = {
    placement: ft(t.placement),
    variation: Ro(t.placement),
    popper: t.elements.popper,
    popperRect: t.rects.popper,
    gpuAcceleration: i,
    isFixed: t.options.strategy === "fixed"
  };
  t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, Qa(Object.assign({}, u, {
    offsets: t.modifiersData.popperOffsets,
    position: t.options.strategy,
    adaptive: l,
    roundOffsets: c
  })))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, Qa(Object.assign({}, u, {
    offsets: t.modifiersData.arrow,
    position: "absolute",
    adaptive: !1,
    roundOffsets: c
  })))), t.attributes.popper = Object.assign({}, t.attributes.popper, {
    "data-popper-placement": t.placement
  });
}
const ob = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: tb,
  data: {}
};
var On = {
  passive: !0
};
function nb(e) {
  var t = e.state, o = e.instance, r = e.options, i = r.scroll, a = i === void 0 ? !0 : i, l = r.resize, s = l === void 0 ? !0 : l, c = Xe(t.elements.popper), u = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return a && u.forEach(function(d) {
    d.addEventListener("scroll", o.update, On);
  }), s && c.addEventListener("resize", o.update, On), function() {
    a && u.forEach(function(d) {
      d.removeEventListener("scroll", o.update, On);
    }), s && c.removeEventListener("resize", o.update, On);
  };
}
const rb = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function() {
  },
  effect: nb,
  data: {}
};
var ib = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function In(e) {
  return e.replace(/left|right|bottom|top/g, function(t) {
    return ib[t];
  });
}
var ab = {
  start: "end",
  end: "start"
};
function Ka(e) {
  return e.replace(/start|end/g, function(t) {
    return ab[t];
  });
}
function Ii(e) {
  var t = Xe(e), o = t.pageXOffset, r = t.pageYOffset;
  return {
    scrollLeft: o,
    scrollTop: r
  };
}
function Di(e) {
  return Ao($t(e)).left + Ii(e).scrollLeft;
}
function sb(e, t) {
  var o = Xe(e), r = $t(e), i = o.visualViewport, a = r.clientWidth, l = r.clientHeight, s = 0, c = 0;
  if (i) {
    a = i.width, l = i.height;
    var u = Ml();
    (u || !u && t === "fixed") && (s = i.offsetLeft, c = i.offsetTop);
  }
  return {
    width: a,
    height: l,
    x: s + Di(e),
    y: c
  };
}
function lb(e) {
  var t, o = $t(e), r = Ii(e), i = (t = e.ownerDocument) == null ? void 0 : t.body, a = Yt(o.scrollWidth, o.clientWidth, i ? i.scrollWidth : 0, i ? i.clientWidth : 0), l = Yt(o.scrollHeight, o.clientHeight, i ? i.scrollHeight : 0, i ? i.clientHeight : 0), s = -r.scrollLeft + Di(e), c = -r.scrollTop;
  return Tt(i || o).direction === "rtl" && (s += Yt(o.clientWidth, i ? i.clientWidth : 0) - a), {
    width: a,
    height: l,
    x: s,
    y: c
  };
}
function Ni(e) {
  var t = Tt(e), o = t.overflow, r = t.overflowX, i = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(o + i + r);
}
function jl(e) {
  return ["html", "body", "#document"].indexOf(mt(e)) >= 0 ? e.ownerDocument.body : et(e) && Ni(e) ? e : jl(ur(e));
}
function _o(e, t) {
  var o;
  t === void 0 && (t = []);
  var r = jl(e), i = r === ((o = e.ownerDocument) == null ? void 0 : o.body), a = Xe(r), l = i ? [a].concat(a.visualViewport || [], Ni(r) ? r : []) : r, s = t.concat(l);
  return i ? s : (
    // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
    s.concat(_o(ur(l)))
  );
}
function ii(e) {
  return Object.assign({}, e, {
    left: e.x,
    top: e.y,
    right: e.x + e.width,
    bottom: e.y + e.height
  });
}
function cb(e, t) {
  var o = Ao(e, !1, t === "fixed");
  return o.top = o.top + e.clientTop, o.left = o.left + e.clientLeft, o.bottom = o.top + e.clientHeight, o.right = o.left + e.clientWidth, o.width = e.clientWidth, o.height = e.clientHeight, o.x = o.left, o.y = o.top, o;
}
function Ya(e, t, o) {
  return t === Fl ? ii(sb(e, o)) : Jt(t) ? cb(t, o) : ii(lb($t(e)));
}
function ub(e) {
  var t = _o(ur(e)), o = ["absolute", "fixed"].indexOf(Tt(e).position) >= 0, r = o && et(e) ? bn(e) : e;
  return Jt(r) ? t.filter(function(i) {
    return Jt(i) && Bl(i, r) && mt(i) !== "body";
  }) : [];
}
function pb(e, t, o, r) {
  var i = t === "clippingParents" ? ub(e) : [].concat(t), a = [].concat(i, [o]), l = a[0], s = a.reduce(function(c, u) {
    var d = Ya(e, u, r);
    return c.top = Yt(d.top, c.top), c.right = Yn(d.right, c.right), c.bottom = Yn(d.bottom, c.bottom), c.left = Yt(d.left, c.left), c;
  }, Ya(e, l, r));
  return s.width = s.right - s.left, s.height = s.bottom - s.top, s.x = s.left, s.y = s.top, s;
}
function $l(e) {
  var t = e.reference, o = e.element, r = e.placement, i = r ? ft(r) : null, a = r ? Ro(r) : null, l = t.x + t.width / 2 - o.width / 2, s = t.y + t.height / 2 - o.height / 2, c;
  switch (i) {
    case He:
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
    case Qe:
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
  var u = i ? Bi(i) : null;
  if (u != null) {
    var d = u === "y" ? "height" : "width";
    switch (a) {
      case ko:
        c[u] = c[u] - (t[d] / 2 - o[d] / 2);
        break;
      case sn:
        c[u] = c[u] + (t[d] / 2 - o[d] / 2);
        break;
    }
  }
  return c;
}
function ln(e, t) {
  t === void 0 && (t = {});
  var o = t, r = o.placement, i = r === void 0 ? e.placement : r, a = o.strategy, l = a === void 0 ? e.strategy : a, s = o.boundary, c = s === void 0 ? Pm : s, u = o.rootBoundary, d = u === void 0 ? Fl : u, f = o.elementContext, h = f === void 0 ? Wo : f, m = o.altBoundary, C = m === void 0 ? !1 : m, y = o.padding, x = y === void 0 ? 0 : y, E = Dl(typeof x != "number" ? x : Nl(x, mn)), T = h === Wo ? Mm : Wo, w = e.rects.popper, b = e.elements[C ? T : h], k = pb(Jt(b) ? b : b.contextElement || $t(e.elements.popper), c, d, l), A = Ao(e.elements.reference), M = $l({
    reference: A,
    element: w,
    placement: i
  }), $ = ii(Object.assign({}, w, M)), N = h === Wo ? $ : A, p = {
    top: k.top - N.top + E.top,
    bottom: N.bottom - k.bottom + E.bottom,
    left: k.left - N.left + E.left,
    right: N.right - k.right + E.right
  }, F = e.modifiersData.offset;
  if (h === Wo && F) {
    var B = F[i];
    Object.keys(p).forEach(function(O) {
      var I = [ot, tt].indexOf(O) >= 0 ? 1 : -1, j = [He, tt].indexOf(O) >= 0 ? "y" : "x";
      p[O] += B[j] * I;
    });
  }
  return p;
}
function db(e, t) {
  t === void 0 && (t = {});
  var o = t, r = o.placement, i = o.boundary, a = o.rootBoundary, l = o.padding, s = o.flipVariations, c = o.allowedAutoPlacements, u = c === void 0 ? Pl : c, d = Ro(r), f = d ? s ? Ua : Ua.filter(function(C) {
    return Ro(C) === d;
  }) : mn, h = f.filter(function(C) {
    return u.indexOf(C) >= 0;
  });
  h.length === 0 && (h = f);
  var m = h.reduce(function(C, y) {
    return C[y] = ln(e, {
      placement: y,
      boundary: i,
      rootBoundary: a,
      padding: l
    })[ft(y)], C;
  }, {});
  return Object.keys(m).sort(function(C, y) {
    return m[C] - m[y];
  });
}
function fb(e) {
  if (ft(e) === Fi)
    return [];
  var t = In(e);
  return [Ka(e), t, Ka(t)];
}
function gb(e) {
  var t = e.state, o = e.options, r = e.name;
  if (!t.modifiersData[r]._skip) {
    for (var i = o.mainAxis, a = i === void 0 ? !0 : i, l = o.altAxis, s = l === void 0 ? !0 : l, c = o.fallbackPlacements, u = o.padding, d = o.boundary, f = o.rootBoundary, h = o.altBoundary, m = o.flipVariations, C = m === void 0 ? !0 : m, y = o.allowedAutoPlacements, x = t.options.placement, E = ft(x), T = E === x, w = c || (T || !C ? [In(x)] : fb(x)), b = [x].concat(w).reduce(function(G, Y) {
      return G.concat(ft(Y) === Fi ? db(t, {
        placement: Y,
        boundary: d,
        rootBoundary: f,
        padding: u,
        flipVariations: C,
        allowedAutoPlacements: y
      }) : Y);
    }, []), k = t.rects.reference, A = t.rects.popper, M = /* @__PURE__ */ new Map(), $ = !0, N = b[0], p = 0; p < b.length; p++) {
      var F = b[p], B = ft(F), O = Ro(F) === ko, I = [He, tt].indexOf(B) >= 0, j = I ? "width" : "height", P = ln(t, {
        placement: F,
        boundary: d,
        rootBoundary: f,
        altBoundary: h,
        padding: u
      }), U = I ? O ? ot : Qe : O ? tt : He;
      k[j] > A[j] && (U = In(U));
      var H = In(U), L = [];
      if (a && L.push(P[B] <= 0), s && L.push(P[U] <= 0, P[H] <= 0), L.every(function(G) {
        return G;
      })) {
        N = F, $ = !1;
        break;
      }
      M.set(F, L);
    }
    if ($)
      for (var R = C ? 3 : 1, V = function(Y) {
        var q = b.find(function(z) {
          var oe = M.get(z);
          if (oe)
            return oe.slice(0, Y).every(function(re) {
              return re;
            });
        });
        if (q)
          return N = q, "break";
      }, ne = R; ne > 0; ne--) {
        var te = V(ne);
        if (te === "break") break;
      }
    t.placement !== N && (t.modifiersData[r]._skip = !0, t.placement = N, t.reset = !0);
  }
}
const hb = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: gb,
  requiresIfExists: ["offset"],
  data: {
    _skip: !1
  }
};
function Ga(e, t, o) {
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
function qa(e) {
  return [He, ot, tt, Qe].some(function(t) {
    return e[t] >= 0;
  });
}
function mb(e) {
  var t = e.state, o = e.name, r = t.rects.reference, i = t.rects.popper, a = t.modifiersData.preventOverflow, l = ln(t, {
    elementContext: "reference"
  }), s = ln(t, {
    altBoundary: !0
  }), c = Ga(l, r), u = Ga(s, i, a), d = qa(c), f = qa(u);
  t.modifiersData[o] = {
    referenceClippingOffsets: c,
    popperEscapeOffsets: u,
    isReferenceHidden: d,
    hasPopperEscaped: f
  }, t.attributes.popper = Object.assign({}, t.attributes.popper, {
    "data-popper-reference-hidden": d,
    "data-popper-escaped": f
  });
}
const bb = {
  name: "hide",
  enabled: !0,
  phase: "main",
  requiresIfExists: ["preventOverflow"],
  fn: mb
};
function yb(e, t, o) {
  var r = ft(e), i = [Qe, He].indexOf(r) >= 0 ? -1 : 1, a = typeof o == "function" ? o(Object.assign({}, t, {
    placement: e
  })) : o, l = a[0], s = a[1];
  return l = l || 0, s = (s || 0) * i, [Qe, ot].indexOf(r) >= 0 ? {
    x: s,
    y: l
  } : {
    x: l,
    y: s
  };
}
function vb(e) {
  var t = e.state, o = e.options, r = e.name, i = o.offset, a = i === void 0 ? [0, 0] : i, l = Pl.reduce(function(d, f) {
    return d[f] = yb(f, t.rects, a), d;
  }, {}), s = l[t.placement], c = s.x, u = s.y;
  t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += c, t.modifiersData.popperOffsets.y += u), t.modifiersData[r] = l;
}
const Cb = {
  name: "offset",
  enabled: !0,
  phase: "main",
  requires: ["popperOffsets"],
  fn: vb
};
function xb(e) {
  var t = e.state, o = e.name;
  t.modifiersData[o] = $l({
    reference: t.rects.reference,
    element: t.rects.popper,
    placement: t.placement
  });
}
const Eb = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: xb,
  data: {}
};
function wb(e) {
  return e === "x" ? "y" : "x";
}
function Sb(e) {
  var t = e.state, o = e.options, r = e.name, i = o.mainAxis, a = i === void 0 ? !0 : i, l = o.altAxis, s = l === void 0 ? !1 : l, c = o.boundary, u = o.rootBoundary, d = o.altBoundary, f = o.padding, h = o.tether, m = h === void 0 ? !0 : h, C = o.tetherOffset, y = C === void 0 ? 0 : C, x = ln(t, {
    boundary: c,
    rootBoundary: u,
    padding: f,
    altBoundary: d
  }), E = ft(t.placement), T = Ro(t.placement), w = !T, b = Bi(E), k = wb(b), A = t.modifiersData.popperOffsets, M = t.rects.reference, $ = t.rects.popper, N = typeof y == "function" ? y(Object.assign({}, t.rects, {
    placement: t.placement
  })) : y, p = typeof N == "number" ? {
    mainAxis: N,
    altAxis: N
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, N), F = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null, B = {
    x: 0,
    y: 0
  };
  if (A) {
    if (a) {
      var O, I = b === "y" ? He : Qe, j = b === "y" ? tt : ot, P = b === "y" ? "height" : "width", U = A[b], H = U + x[I], L = U - x[j], R = m ? -$[P] / 2 : 0, V = T === ko ? M[P] : $[P], ne = T === ko ? -$[P] : -M[P], te = t.elements.arrow, G = m && te ? Mi(te) : {
        width: 0,
        height: 0
      }, Y = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : Il(), q = Y[I], z = Y[j], oe = Zo(0, M[P], G[P]), re = w ? M[P] / 2 - R - oe - q - p.mainAxis : V - oe - q - p.mainAxis, K = w ? -M[P] / 2 + R + oe + z + p.mainAxis : ne + oe + z + p.mainAxis, Z = t.elements.arrow && bn(t.elements.arrow), J = Z ? b === "y" ? Z.clientTop || 0 : Z.clientLeft || 0 : 0, ue = (O = F == null ? void 0 : F[b]) != null ? O : 0, pe = U + re - ue - J, ke = U + K - ue, xe = Zo(m ? Yn(H, pe) : H, U, m ? Yt(L, ke) : L);
      A[b] = xe, B[b] = xe - U;
    }
    if (s) {
      var be, Ee = b === "x" ? He : Qe, Ie = b === "x" ? tt : ot, Ne = A[k], we = k === "y" ? "height" : "width", ae = Ne + x[Ee], Rt = Ne - x[Ie], Ft = [He, Qe].indexOf(E) !== -1, co = (be = F == null ? void 0 : F[k]) != null ? be : 0, uo = Ft ? ae : Ne - M[we] - $[we] - co + p.altAxis, Pt = Ft ? Ne + M[we] + $[we] - co - p.altAxis : Rt, vt = m && Ft ? Gm(uo, Ne, Pt) : Zo(m ? uo : ae, Ne, m ? Pt : Rt);
      A[k] = vt, B[k] = vt - Ne;
    }
    t.modifiersData[r] = B;
  }
}
const Tb = {
  name: "preventOverflow",
  enabled: !0,
  phase: "main",
  fn: Sb,
  requiresIfExists: ["offset"]
};
function kb(e) {
  return {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  };
}
function Ob(e) {
  return e === Xe(e) || !et(e) ? Ii(e) : kb(e);
}
function Ab(e) {
  var t = e.getBoundingClientRect(), o = Oo(t.width) / e.offsetWidth || 1, r = Oo(t.height) / e.offsetHeight || 1;
  return o !== 1 || r !== 1;
}
function Rb(e, t, o) {
  o === void 0 && (o = !1);
  var r = et(t), i = et(t) && Ab(t), a = $t(t), l = Ao(e, i, o), s = {
    scrollLeft: 0,
    scrollTop: 0
  }, c = {
    x: 0,
    y: 0
  };
  return (r || !r && !o) && ((mt(t) !== "body" || // https://github.com/popperjs/popper-core/issues/1078
  Ni(a)) && (s = Ob(t)), et(t) ? (c = Ao(t, !0), c.x += t.clientLeft, c.y += t.clientTop) : a && (c.x = Di(a))), {
    x: l.left + s.scrollLeft - c.x,
    y: l.top + s.scrollTop - c.y,
    width: l.width,
    height: l.height
  };
}
function Fb(e) {
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
function Pb(e) {
  var t = Fb(e);
  return Wm.reduce(function(o, r) {
    return o.concat(t.filter(function(i) {
      return i.phase === r;
    }));
  }, []);
}
function Mb(e) {
  var t;
  return function() {
    return t || (t = new Promise(function(o) {
      Promise.resolve().then(function() {
        t = void 0, o(e());
      });
    })), t;
  };
}
function Bb(e) {
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
var Xa = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function Ja() {
  for (var e = arguments.length, t = new Array(e), o = 0; o < e; o++)
    t[o] = arguments[o];
  return !t.some(function(r) {
    return !(r && typeof r.getBoundingClientRect == "function");
  });
}
function Ib(e) {
  e === void 0 && (e = {});
  var t = e, o = t.defaultModifiers, r = o === void 0 ? [] : o, i = t.defaultOptions, a = i === void 0 ? Xa : i;
  return function(s, c, u) {
    u === void 0 && (u = a);
    var d = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, Xa, a),
      modifiersData: {},
      elements: {
        reference: s,
        popper: c
      },
      attributes: {},
      styles: {}
    }, f = [], h = !1, m = {
      state: d,
      setOptions: function(E) {
        var T = typeof E == "function" ? E(d.options) : E;
        y(), d.options = Object.assign({}, a, d.options, T), d.scrollParents = {
          reference: Jt(s) ? _o(s) : s.contextElement ? _o(s.contextElement) : [],
          popper: _o(c)
        };
        var w = Pb(Bb([].concat(r, d.options.modifiers)));
        return d.orderedModifiers = w.filter(function(b) {
          return b.enabled;
        }), C(), m.update();
      },
      // Sync update – it will always be executed, even if not necessary. This
      // is useful for low frequency updates where sync behavior simplifies the
      // logic.
      // For high frequency updates (e.g. `resize` and `scroll` events), always
      // prefer the async Popper#update method
      forceUpdate: function() {
        if (!h) {
          var E = d.elements, T = E.reference, w = E.popper;
          if (Ja(T, w)) {
            d.rects = {
              reference: Rb(T, bn(w), d.options.strategy === "fixed"),
              popper: Mi(w)
            }, d.reset = !1, d.placement = d.options.placement, d.orderedModifiers.forEach(function(p) {
              return d.modifiersData[p.name] = Object.assign({}, p.data);
            });
            for (var b = 0; b < d.orderedModifiers.length; b++) {
              if (d.reset === !0) {
                d.reset = !1, b = -1;
                continue;
              }
              var k = d.orderedModifiers[b], A = k.fn, M = k.options, $ = M === void 0 ? {} : M, N = k.name;
              typeof A == "function" && (d = A({
                state: d,
                options: $,
                name: N,
                instance: m
              }) || d);
            }
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: Mb(function() {
        return new Promise(function(x) {
          m.forceUpdate(), x(d);
        });
      }),
      destroy: function() {
        y(), h = !0;
      }
    };
    if (!Ja(s, c))
      return m;
    m.setOptions(u).then(function(x) {
      !h && u.onFirstUpdate && u.onFirstUpdate(x);
    });
    function C() {
      d.orderedModifiers.forEach(function(x) {
        var E = x.name, T = x.options, w = T === void 0 ? {} : T, b = x.effect;
        if (typeof b == "function") {
          var k = b({
            state: d,
            name: E,
            instance: m,
            options: w
          }), A = function() {
          };
          f.push(k || A);
        }
      });
    }
    function y() {
      f.forEach(function(x) {
        return x();
      }), f = [];
    }
    return m;
  };
}
var Db = [rb, Eb, ob, Qm, Cb, hb, Tb, Zm, bb], Nb = /* @__PURE__ */ Ib({
  defaultModifiers: Db
});
function jb(e) {
  return de("MuiPopper", e);
}
ce("MuiPopper", ["root"]);
function $b(e, t) {
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
function Gn(e) {
  return typeof e == "function" ? e() : e;
}
function pr(e) {
  return e.nodeType !== void 0;
}
function Lb(e) {
  return !pr(e);
}
const zb = (e) => {
  const {
    classes: t
  } = e;
  return ge({
    root: ["root"]
  }, jb, t);
}, Vb = {}, Wb = /* @__PURE__ */ g.forwardRef(function(t, o) {
  const {
    anchorEl: r,
    children: i,
    direction: a,
    disablePortal: l,
    modifiers: s,
    open: c,
    placement: u,
    popperOptions: d,
    popperRef: f,
    slotProps: h = {},
    slots: m = {},
    TransitionProps: C,
    // @ts-ignore internal logic
    ownerState: y,
    // prevent from spreading to DOM, it can come from the parent component e.g. Select.
    ...x
  } = t, E = g.useRef(null), T = je(E, o), w = g.useRef(null), b = je(w, f), k = g.useRef(b);
  gt(() => {
    k.current = b;
  }, [b]), g.useImperativeHandle(f, () => w.current, []);
  const A = $b(u, a), [M, $] = g.useState(A), [N, p] = g.useState(Gn(r));
  g.useEffect(() => {
    w.current && w.current.forceUpdate();
  }), g.useEffect(() => {
    r && p(Gn(r));
  }, [r]), gt(() => {
    if (!N || !c)
      return;
    const j = (H) => {
      $(H.placement);
    };
    if (process.env.NODE_ENV !== "production" && N && pr(N) && N.nodeType === 1) {
      const H = N.getBoundingClientRect();
      process.env.NODE_ENV !== "test" && H.top === 0 && H.left === 0 && H.right === 0 && H.bottom === 0 && console.warn(["MUI: The `anchorEl` prop provided to the component is invalid.", "The anchor element should be part of the document layout.", "Make sure the element is present in the document or that it's not display none."].join(`
`));
    }
    let P = [{
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
        state: H
      }) => {
        j(H);
      }
    }];
    s != null && (P = P.concat(s)), d && d.modifiers != null && (P = P.concat(d.modifiers));
    const U = Nb(N, E.current, {
      placement: A,
      ...d,
      modifiers: P
    });
    return k.current(U), () => {
      U.destroy(), k.current(null);
    };
  }, [N, l, s, c, d, A]);
  const F = {
    placement: M
  };
  C !== null && (F.TransitionProps = C);
  const B = zb(t), O = m.root ?? "div", I = To({
    elementType: O,
    externalSlotProps: h.root,
    externalForwardedProps: x,
    additionalProps: {
      role: "tooltip",
      ref: T
    },
    ownerState: t,
    className: B.root
  });
  return /* @__PURE__ */ S(O, {
    ...I,
    children: typeof i == "function" ? i(F) : i
  });
}), Ll = /* @__PURE__ */ g.forwardRef(function(t, o) {
  const {
    anchorEl: r,
    children: i,
    container: a,
    direction: l = "ltr",
    disablePortal: s = !1,
    keepMounted: c = !1,
    modifiers: u,
    open: d,
    placement: f = "bottom",
    popperOptions: h = Vb,
    popperRef: m,
    style: C,
    transition: y = !1,
    slotProps: x = {},
    slots: E = {},
    ...T
  } = t, [w, b] = g.useState(!0), k = () => {
    b(!1);
  }, A = () => {
    b(!0);
  };
  if (!c && !d && (!y || w))
    return null;
  let M;
  if (a)
    M = a;
  else if (r) {
    const p = Gn(r);
    M = p && pr(p) ? $e(p).body : $e(null).body;
  }
  const $ = !d && c && (!y || w) ? "none" : void 0, N = y ? {
    in: d,
    onEnter: k,
    onExited: A
  } : void 0;
  return /* @__PURE__ */ S(rn, {
    disablePortal: s,
    container: M,
    children: /* @__PURE__ */ S(Wb, {
      anchorEl: r,
      direction: l,
      disablePortal: s,
      modifiers: u,
      ref: o,
      open: y ? !w : d,
      placement: f,
      popperOptions: h,
      popperRef: m,
      slotProps: x,
      slots: E,
      ...T,
      style: {
        // Prevents scroll issue, waiting for Popper.js to add this style once initiated.
        position: "fixed",
        // Fix Popper.js display issue
        top: 0,
        left: 0,
        display: $,
        ...C
      },
      TransitionProps: N,
      children: i
    })
  });
});
process.env.NODE_ENV !== "production" && (Ll.propTypes = {
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
  anchorEl: kt(n.oneOfType([ht, n.object, n.func]), (e) => {
    if (e.open) {
      const t = Gn(e.anchorEl);
      if (t && pr(t) && t.nodeType === 1) {
        const o = t.getBoundingClientRect();
        if (process.env.NODE_ENV !== "test" && o.top === 0 && o.left === 0 && o.right === 0 && o.bottom === 0)
          return new Error(["MUI: The `anchorEl` prop provided to the component is invalid.", "The anchor element should be part of the document layout.", "Make sure the element is present in the document or that it's not display none."].join(`
`));
      } else if (!t || typeof t.getBoundingClientRect != "function" || Lb(t) && t.contextElement != null && t.contextElement.nodeType !== 1)
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
  popperRef: Ot,
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
const Ub = Q(Ll, {
  name: "MuiPopper",
  slot: "Root",
  overridesResolver: (e, t) => t.root
})({}), ji = /* @__PURE__ */ g.forwardRef(function(t, o) {
  const r = Po(), i = he({
    props: t,
    name: "MuiPopper"
  }), {
    anchorEl: a,
    component: l,
    components: s,
    componentsProps: c,
    container: u,
    disablePortal: d,
    keepMounted: f,
    modifiers: h,
    open: m,
    placement: C,
    popperOptions: y,
    popperRef: x,
    transition: E,
    slots: T,
    slotProps: w,
    ...b
  } = i, k = (T == null ? void 0 : T.root) ?? (s == null ? void 0 : s.Root), A = {
    anchorEl: a,
    container: u,
    disablePortal: d,
    keepMounted: f,
    modifiers: h,
    open: m,
    placement: C,
    popperOptions: y,
    popperRef: x,
    transition: E,
    ...b
  };
  return /* @__PURE__ */ S(Ub, {
    as: l,
    direction: r ? "rtl" : "ltr",
    slots: {
      root: k
    },
    slotProps: w ?? c,
    ...A,
    ref: o
  });
});
process.env.NODE_ENV !== "production" && (ji.propTypes = {
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
  popperRef: Ot,
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
function Hb(e) {
  return de("MuiTooltip", e);
}
const Pe = ce("MuiTooltip", ["popper", "popperInteractive", "popperArrow", "popperClose", "tooltip", "tooltipArrow", "touch", "tooltipPlacementLeft", "tooltipPlacementRight", "tooltipPlacementTop", "tooltipPlacementBottom", "arrow"]);
function Qb(e) {
  return Math.round(e * 1e5) / 1e5;
}
const Kb = (e) => {
  const {
    classes: t,
    disableInteractive: o,
    arrow: r,
    touch: i,
    placement: a
  } = e, l = {
    popper: ["popper", !o && "popperInteractive", r && "popperArrow"],
    tooltip: ["tooltip", r && "tooltipArrow", i && "touch", `tooltipPlacement${W(a.split("-")[0])}`],
    arrow: ["arrow"]
  };
  return ge(l, Hb, t);
}, Yb = Q(ji, {
  name: "MuiTooltip",
  slot: "Popper",
  overridesResolver: (e, t) => {
    const {
      ownerState: o
    } = e;
    return [t.popper, !o.disableInteractive && t.popperInteractive, o.arrow && t.popperArrow, !o.open && t.popperClose];
  }
})(fe(({
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
      [`&[data-popper-placement*="bottom"] .${Pe.arrow}`]: {
        top: 0,
        marginTop: "-0.71em",
        "&::before": {
          transformOrigin: "0 100%"
        }
      },
      [`&[data-popper-placement*="top"] .${Pe.arrow}`]: {
        bottom: 0,
        marginBottom: "-0.71em",
        "&::before": {
          transformOrigin: "100% 0"
        }
      },
      [`&[data-popper-placement*="right"] .${Pe.arrow}`]: {
        height: "1em",
        width: "0.71em",
        "&::before": {
          transformOrigin: "100% 100%"
        }
      },
      [`&[data-popper-placement*="left"] .${Pe.arrow}`]: {
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
      [`&[data-popper-placement*="right"] .${Pe.arrow}`]: {
        left: 0,
        marginLeft: "-0.71em"
      }
    }
  }, {
    props: ({
      ownerState: t
    }) => t.arrow && !!t.isRtl,
    style: {
      [`&[data-popper-placement*="right"] .${Pe.arrow}`]: {
        right: 0,
        marginRight: "-0.71em"
      }
    }
  }, {
    props: ({
      ownerState: t
    }) => t.arrow && !t.isRtl,
    style: {
      [`&[data-popper-placement*="left"] .${Pe.arrow}`]: {
        right: 0,
        marginRight: "-0.71em"
      }
    }
  }, {
    props: ({
      ownerState: t
    }) => t.arrow && !!t.isRtl,
    style: {
      [`&[data-popper-placement*="left"] .${Pe.arrow}`]: {
        left: 0,
        marginLeft: "-0.71em"
      }
    }
  }]
}))), Gb = Q("div", {
  name: "MuiTooltip",
  slot: "Tooltip",
  overridesResolver: (e, t) => {
    const {
      ownerState: o
    } = e;
    return [t.tooltip, o.touch && t.touch, o.arrow && t.tooltipArrow, t[`tooltipPlacement${W(o.placement.split("-")[0])}`]];
  }
})(fe(({
  theme: e
}) => ({
  backgroundColor: e.vars ? e.vars.palette.Tooltip.bg : X(e.palette.grey[700], 0.92),
  borderRadius: (e.vars || e).shape.borderRadius,
  color: (e.vars || e).palette.common.white,
  fontFamily: e.typography.fontFamily,
  padding: "4px 8px",
  fontSize: e.typography.pxToRem(11),
  maxWidth: 300,
  margin: 2,
  wordWrap: "break-word",
  fontWeight: e.typography.fontWeightMedium,
  [`.${Pe.popper}[data-popper-placement*="left"] &`]: {
    transformOrigin: "right center"
  },
  [`.${Pe.popper}[data-popper-placement*="right"] &`]: {
    transformOrigin: "left center"
  },
  [`.${Pe.popper}[data-popper-placement*="top"] &`]: {
    transformOrigin: "center bottom",
    marginBottom: "14px"
  },
  [`.${Pe.popper}[data-popper-placement*="bottom"] &`]: {
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
      lineHeight: `${Qb(16 / 14)}em`,
      fontWeight: e.typography.fontWeightRegular
    }
  }, {
    props: ({
      ownerState: t
    }) => !t.isRtl,
    style: {
      [`.${Pe.popper}[data-popper-placement*="left"] &`]: {
        marginRight: "14px"
      },
      [`.${Pe.popper}[data-popper-placement*="right"] &`]: {
        marginLeft: "14px"
      }
    }
  }, {
    props: ({
      ownerState: t
    }) => !t.isRtl && t.touch,
    style: {
      [`.${Pe.popper}[data-popper-placement*="left"] &`]: {
        marginRight: "24px"
      },
      [`.${Pe.popper}[data-popper-placement*="right"] &`]: {
        marginLeft: "24px"
      }
    }
  }, {
    props: ({
      ownerState: t
    }) => !!t.isRtl,
    style: {
      [`.${Pe.popper}[data-popper-placement*="left"] &`]: {
        marginLeft: "14px"
      },
      [`.${Pe.popper}[data-popper-placement*="right"] &`]: {
        marginRight: "14px"
      }
    }
  }, {
    props: ({
      ownerState: t
    }) => !!t.isRtl && t.touch,
    style: {
      [`.${Pe.popper}[data-popper-placement*="left"] &`]: {
        marginLeft: "24px"
      },
      [`.${Pe.popper}[data-popper-placement*="right"] &`]: {
        marginRight: "24px"
      }
    }
  }, {
    props: ({
      ownerState: t
    }) => t.touch,
    style: {
      [`.${Pe.popper}[data-popper-placement*="top"] &`]: {
        marginBottom: "24px"
      }
    }
  }, {
    props: ({
      ownerState: t
    }) => t.touch,
    style: {
      [`.${Pe.popper}[data-popper-placement*="bottom"] &`]: {
        marginTop: "24px"
      }
    }
  }]
}))), qb = Q("span", {
  name: "MuiTooltip",
  slot: "Arrow",
  overridesResolver: (e, t) => t.arrow
})(fe(({
  theme: e
}) => ({
  overflow: "hidden",
  position: "absolute",
  width: "1em",
  height: "0.71em",
  boxSizing: "border-box",
  color: e.vars ? e.vars.palette.Tooltip.bg : X(e.palette.grey[700], 0.9),
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
let An = !1;
const Za = new ar();
let Uo = {
  x: 0,
  y: 0
};
function Rn(e, t) {
  return (o, ...r) => {
    t && t(o, ...r), e(o, ...r);
  };
}
const $i = /* @__PURE__ */ g.forwardRef(function(t, o) {
  const r = he({
    props: t,
    name: "MuiTooltip"
  }), {
    arrow: i = !1,
    children: a,
    classes: l,
    components: s = {},
    componentsProps: c = {},
    describeChild: u = !1,
    disableFocusListener: d = !1,
    disableHoverListener: f = !1,
    disableInteractive: h = !1,
    disableTouchListener: m = !1,
    enterDelay: C = 100,
    enterNextDelay: y = 0,
    enterTouchDelay: x = 700,
    followCursor: E = !1,
    id: T,
    leaveDelay: w = 0,
    leaveTouchDelay: b = 1500,
    onClose: k,
    onOpen: A,
    open: M,
    placement: $ = "bottom",
    PopperComponent: N,
    PopperProps: p = {},
    slotProps: F = {},
    slots: B = {},
    title: O,
    TransitionComponent: I,
    TransitionProps: j,
    ...P
  } = r, U = /* @__PURE__ */ g.isValidElement(a) ? a : /* @__PURE__ */ S("span", {
    children: a
  }), H = rt(), L = Po(), [R, V] = g.useState(), [ne, te] = g.useState(null), G = g.useRef(!1), Y = h || E, q = xo(), z = xo(), oe = xo(), re = xo(), [K, Z] = hi({
    controlled: M,
    default: !1,
    name: "Tooltip",
    state: "open"
  });
  let J = K;
  if (process.env.NODE_ENV !== "production") {
    const {
      current: se
    } = g.useRef(M !== void 0);
    g.useEffect(() => {
      R && R.disabled && !se && O !== "" && R.tagName.toLowerCase() === "button" && console.warn(["MUI: You are providing a disabled `button` child to the Tooltip component.", "A disabled element does not fire events.", "Tooltip needs to listen to the child element's events to display the title.", "", "Add a simple wrapper element, such as a `span`."].join(`
`));
    }, [O, R, se]);
  }
  const ue = fn(T), pe = g.useRef(), ke = Ue(() => {
    pe.current !== void 0 && (document.body.style.WebkitUserSelect = pe.current, pe.current = void 0), re.clear();
  });
  g.useEffect(() => ke, [ke]);
  const xe = (se) => {
    Za.clear(), An = !0, Z(!0), A && !J && A(se);
  }, be = Ue(
    /**
     * @param {React.SyntheticEvent | Event} event
     */
    (se) => {
      Za.start(800 + w, () => {
        An = !1;
      }), Z(!1), k && J && k(se), q.start(H.transitions.duration.shortest, () => {
        G.current = !1;
      });
    }
  ), Ee = (se) => {
    G.current && se.type !== "touchstart" || (R && R.removeAttribute("title"), z.clear(), oe.clear(), C || An && y ? z.start(An ? y : C, () => {
      xe(se);
    }) : xe(se));
  }, Ie = (se) => {
    z.clear(), oe.start(w, () => {
      be(se);
    });
  }, [, Ne] = g.useState(!1), we = (se) => {
    Ln(se.target) || (Ne(!1), Ie(se));
  }, ae = (se) => {
    R || V(se.currentTarget), Ln(se.target) && (Ne(!0), Ee(se));
  }, Rt = (se) => {
    G.current = !0;
    const Ye = U.props;
    Ye.onTouchStart && Ye.onTouchStart(se);
  }, Ft = (se) => {
    Rt(se), oe.clear(), q.clear(), ke(), pe.current = document.body.style.WebkitUserSelect, document.body.style.WebkitUserSelect = "none", re.start(x, () => {
      document.body.style.WebkitUserSelect = pe.current, Ee(se);
    });
  }, co = (se) => {
    U.props.onTouchEnd && U.props.onTouchEnd(se), ke(), oe.start(b, () => {
      be(se);
    });
  };
  g.useEffect(() => {
    if (!J)
      return;
    function se(Ye) {
      Ye.key === "Escape" && be(Ye);
    }
    return document.addEventListener("keydown", se), () => {
      document.removeEventListener("keydown", se);
    };
  }, [be, J]);
  const uo = je(Fo(U), V, o);
  !O && O !== 0 && (J = !1);
  const Pt = g.useRef(), vt = (se) => {
    const Ye = U.props;
    Ye.onMouseMove && Ye.onMouseMove(se), Uo = {
      x: se.clientX,
      y: se.clientY
    }, Pt.current && Pt.current.update();
  }, Lt = {}, Bo = typeof O == "string";
  u ? (Lt.title = !J && Bo && !f ? O : null, Lt["aria-describedby"] = J ? ue : null) : (Lt["aria-label"] = Bo ? O : null, Lt["aria-labelledby"] = J && !Bo ? ue : null);
  const Le = {
    ...Lt,
    ...P,
    ...U.props,
    className: _(P.className, U.props.className),
    onTouchStart: Rt,
    ref: uo,
    ...E ? {
      onMouseMove: vt
    } : {}
  };
  process.env.NODE_ENV !== "production" && (Le["data-mui-internal-clone-element"] = !0, g.useEffect(() => {
    R && !R.getAttribute("data-mui-internal-clone-element") && console.error(["MUI: The `children` component of the Tooltip is not forwarding its props correctly.", "Please make sure that props are spread on the same element that the ref is applied to."].join(`
`));
  }, [R]));
  const Mt = {};
  m || (Le.onTouchStart = Ft, Le.onTouchEnd = co), f || (Le.onMouseOver = Rn(Ee, Le.onMouseOver), Le.onMouseLeave = Rn(Ie, Le.onMouseLeave), Y || (Mt.onMouseOver = Ee, Mt.onMouseLeave = Ie)), d || (Le.onFocus = Rn(ae, Le.onFocus), Le.onBlur = Rn(we, Le.onBlur), Y || (Mt.onFocus = ae, Mt.onBlur = we)), process.env.NODE_ENV !== "production" && U.props.title && console.error(["MUI: You have provided a `title` prop to the child of <Tooltip />.", `Remove this title prop \`${U.props.title}\` or the Tooltip component.`].join(`
`));
  const Ct = {
    ...r,
    isRtl: L,
    arrow: i,
    disableInteractive: Y,
    placement: $,
    PopperComponentProp: N,
    touch: G.current
  }, We = typeof F.popper == "function" ? F.popper(Ct) : F.popper, po = g.useMemo(() => {
    var Ye, ee;
    let se = [{
      name: "arrow",
      enabled: !!ne,
      options: {
        element: ne,
        padding: 4
      }
    }];
    return (Ye = p.popperOptions) != null && Ye.modifiers && (se = se.concat(p.popperOptions.modifiers)), (ee = We == null ? void 0 : We.popperOptions) != null && ee.modifiers && (se = se.concat(We.popperOptions.modifiers)), {
      ...p.popperOptions,
      ...We == null ? void 0 : We.popperOptions,
      modifiers: se
    };
  }, [ne, p.popperOptions, We == null ? void 0 : We.popperOptions]), Io = Kb(Ct), dr = typeof F.transition == "function" ? F.transition(Ct) : F.transition, zt = {
    slots: {
      popper: s.Popper,
      transition: s.Transition ?? I,
      tooltip: s.Tooltip,
      arrow: s.Arrow,
      ...B
    },
    slotProps: {
      arrow: F.arrow ?? c.arrow,
      popper: {
        ...p,
        ...We ?? c.popper
      },
      // resolvedPopperProps can be spread because it's already an object
      tooltip: F.tooltip ?? c.tooltip,
      transition: {
        ...j,
        ...dr ?? c.transition
      }
    }
  }, [fo, fr] = le("popper", {
    elementType: Yb,
    externalForwardedProps: zt,
    ownerState: Ct,
    className: _(Io.popper, p == null ? void 0 : p.className)
  }), [gr, Do] = le("transition", {
    elementType: nn,
    externalForwardedProps: zt,
    ownerState: Ct
  }), [hr, mr] = le("tooltip", {
    elementType: Gb,
    className: Io.tooltip,
    externalForwardedProps: zt,
    ownerState: Ct
  }), [br, yr] = le("arrow", {
    elementType: qb,
    className: Io.arrow,
    externalForwardedProps: zt,
    ownerState: Ct,
    ref: te
  });
  return /* @__PURE__ */ ve(g.Fragment, {
    children: [/* @__PURE__ */ g.cloneElement(U, Le), /* @__PURE__ */ S(fo, {
      as: N ?? ji,
      placement: $,
      anchorEl: E ? {
        getBoundingClientRect: () => ({
          top: Uo.y,
          left: Uo.x,
          right: Uo.x,
          bottom: Uo.y,
          width: 0,
          height: 0
        })
      } : R,
      popperRef: Pt,
      open: R ? J : !1,
      id: ue,
      transition: !0,
      ...Mt,
      ...fr,
      popperOptions: po,
      children: ({
        TransitionProps: se
      }) => /* @__PURE__ */ S(gr, {
        timeout: H.transitions.duration.shorter,
        ...se,
        ...Do,
        children: /* @__PURE__ */ ve(hr, {
          ...mr,
          children: [O, i ? /* @__PURE__ */ S(br, {
            ...yr
          }) : null]
        })
      })
    })]
  });
});
process.env.NODE_ENV !== "production" && ($i.propTypes = {
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
  children: Zt.isRequired,
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
const Xb = (e, t = "primary") => {
  var i;
  const o = Me[t];
  return {
    bgColor: (((i = e == null ? void 0 : e.palette) == null ? void 0 : i[t]) ?? o).tooltipBg ?? o.tooltipBg
  };
}, Jb = Q(({ className: e, ...t }) => /* @__PURE__ */ S($i, { ...t, classes: { popper: e } }))(({ theme: e }) => {
  const t = Xb(e);
  return {
    [`& .${Dn.tooltip}`]: {
      backgroundColor: t.bgColor,
      fontSize: 13,
      fontFamily: "Noto Sans, Noto Sans TC, sans-serif",
      fontWeight: 400
    },
    [`& .${Dn.arrow}`]: {
      color: t.bgColor
    }
  };
}), Oy = ({ ...e }) => /* @__PURE__ */ S(Jb, { ...e }), Zb = (e, t = "primary") => {
  var i;
  const o = Me[t], r = ((i = e == null ? void 0 : e.palette) == null ? void 0 : i[t]) ?? o;
  return {
    bgColor: r.elevated ?? o.elevated,
    fontColor: r.iconFont ?? o.iconFont
  };
}, _b = Q(
  ({ className: e, ...t }) => /* @__PURE__ */ S($i, { ...t, classes: { popper: e } })
)(({ theme: e }) => {
  const t = Zb(e);
  return {
    [`& .${Dn.tooltip}`]: {
      backgroundColor: t.bgColor,
      color: t.fontColor,
      fontSize: 13,
      fontFamily: "Noto Sans, Noto Sans TC, sans-serif",
      fontWeight: 400,
      padding: "10px",
      borderRadius: "12px",
      boxShadow: "0px 2px 6px 2px #00000026, 0px 1px 2px 0px #0000004D"
    },
    [`& .${Dn.arrow}`]: {
      color: t.bgColor,
      "&::before": {
        boxShadow: "0px 2px 6px 2px #00000026, 0px 1px 2px 0px #0000004D"
      }
    }
  };
}), Ay = ({
  title: e,
  content: t,
  actions: o,
  ...r
}) => /* @__PURE__ */ S(
  _b,
  {
    ...r,
    title: /* @__PURE__ */ ve(st, { children: [
      e && /* @__PURE__ */ S(Xt, { fontWeight: 500, fontSize: 14, fontFamily: "Noto Sans", children: e }),
      t && /* @__PURE__ */ S(Xt, { fontSize: 14, fontFamily: "Noto Sans", children: t }),
      o && /* @__PURE__ */ S(st, { display: "flex", gap: 2, children: o })
    ] })
  }
);
export {
  uy as Alert,
  py as Avatar,
  Ey as BottomModal,
  dy as Button,
  Df as Checkbox,
  my as CheckboxTree,
  by as Chip,
  fy as Fab,
  gy as IconButton,
  yy as Menu,
  vy as MenuItem,
  Cy as Modal,
  Uh as Radio,
  wy as RadioGroup,
  Sy as Rating,
  Ay as RichTooltip,
  xy as SideModal,
  Ty as Switch,
  ky as Tabs,
  hy as ToggleButton,
  Oy as Tooltip,
  cy as lemonTheme
};
