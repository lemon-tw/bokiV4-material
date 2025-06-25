var il = Object.defineProperty;
var al = (e, t, o) => t in e ? il(e, t, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[t] = o;
var yo = (e, t, o) => al(e, typeof t != "symbol" ? t + "" : t, o);
import * as h from "react";
import De, { isValidElement as ln, cloneElement as cn, Children as sl, useState as Ir, useEffect as ll, useMemo as cl } from "react";
import Ta, { isValidElementType as Oa, Memo as ul, ForwardRef as pl, isFragment as Pr } from "react-is";
import { jsx as S, jsxs as be } from "react/jsx-runtime";
import { AlertTitle as dl, FormControlLabel as fl, tooltipClasses as fn } from "@mui/material";
import gl from "@emotion/styled";
import { ThemeContext as hl, keyframes as zo, css as Aa } from "@emotion/react";
import * as bl from "react-dom";
import Jo from "react-dom";
import { renderToStaticMarkup as ml } from "react-dom/server";
function At(e, ...t) {
  const o = new URL(`https://mui.com/production-error/?code=${e}`);
  return t.forEach((r) => o.searchParams.append("args[]", r)), `Minified MUI error #${e}; visit ${o} for the full message.`;
}
const Dr = "$$material";
function yl(e) {
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
var vl = {
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
function Cl(e) {
  var t = /* @__PURE__ */ Object.create(null);
  return function(o) {
    return t[o] === void 0 && (t[o] = e(o)), t[o];
  };
}
var xl = /[A-Z]|^ms/g, wl = /_EMO_([^_]+?)_([^]*?)_EMO_/g, ka = function(t) {
  return t.charCodeAt(1) === 45;
}, pi = function(t) {
  return t != null && typeof t != "boolean";
}, Jn = /* @__PURE__ */ Cl(function(e) {
  return ka(e) ? e : e.replace(xl, "-$&").toLowerCase();
}), di = function(t, o) {
  switch (t) {
    case "animation":
    case "animationName":
      if (typeof o == "string")
        return o.replace(wl, function(r, i, a) {
          return Ot = {
            name: i,
            styles: a,
            next: Ot
          }, i;
        });
  }
  return vl[t] !== 1 && !ka(t) && typeof o == "number" && o !== 0 ? o + "px" : o;
};
function gn(e, t, o) {
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
        return Ot = {
          name: i.name,
          styles: i.styles,
          next: Ot
        }, i.name;
      var a = o;
      if (a.styles !== void 0) {
        var l = a.next;
        if (l !== void 0)
          for (; l !== void 0; )
            Ot = {
              name: l.name,
              styles: l.styles,
              next: Ot
            }, l = l.next;
        var s = a.styles + ";";
        return s;
      }
      return El(e, t, o);
    }
  }
  var c = o;
  return c;
}
function El(e, t, o) {
  var r = "";
  if (Array.isArray(o))
    for (var i = 0; i < o.length; i++)
      r += gn(e, t, o[i]) + ";";
  else
    for (var a in o) {
      var l = o[a];
      if (typeof l != "object") {
        var s = l;
        pi(s) && (r += Jn(a) + ":" + di(a, s) + ";");
      } else if (Array.isArray(l) && typeof l[0] == "string" && t == null)
        for (var c = 0; c < l.length; c++)
          pi(l[c]) && (r += Jn(a) + ":" + di(a, l[c]) + ";");
      else {
        var u = gn(e, t, l);
        switch (a) {
          case "animation":
          case "animationName": {
            r += Jn(a) + ":" + u + ";";
            break;
          }
          default:
            r += a + "{" + u + "}";
        }
      }
    }
  return r;
}
var fi = /label:\s*([^\s;{]+)\s*(;|$)/g, Ot;
function Sl(e, t, o) {
  if (e.length === 1 && typeof e[0] == "object" && e[0] !== null && e[0].styles !== void 0)
    return e[0];
  var r = !0, i = "";
  Ot = void 0;
  var a = e[0];
  if (a == null || a.raw === void 0)
    r = !1, i += gn(o, t, a);
  else {
    var l = a;
    i += l[0];
  }
  for (var s = 1; s < e.length; s++)
    if (i += gn(o, t, e[s]), r) {
      var c = a;
      i += c[s];
    }
  fi.lastIndex = 0;
  for (var u = "", d; (d = fi.exec(i)) !== null; )
    u += "-" + d[1];
  var f = yl(i) + u;
  return {
    name: f,
    styles: i,
    next: Ot
  };
}
function Tl(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Zo = { exports: {} };
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var Zn, gi;
function Ol() {
  if (gi) return Zn;
  gi = 1;
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
  return Zn = i() ? Object.assign : function(a, l) {
    for (var s, c = r(a), u, d = 1; d < arguments.length; d++) {
      s = Object(arguments[d]);
      for (var f in s)
        t.call(s, f) && (c[f] = s[f]);
      if (e) {
        u = e(s);
        for (var g = 0; g < u.length; g++)
          o.call(s, u[g]) && (c[u[g]] = s[u[g]]);
      }
    }
    return c;
  }, Zn;
}
var _n, hi;
function Nr() {
  if (hi) return _n;
  hi = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return _n = e, _n;
}
var er, bi;
function Ra() {
  return bi || (bi = 1, er = Function.call.bind(Object.prototype.hasOwnProperty)), er;
}
var tr, mi;
function Al() {
  if (mi) return tr;
  mi = 1;
  var e = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var t = /* @__PURE__ */ Nr(), o = {}, r = /* @__PURE__ */ Ra();
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
              var g = Error(
                (c || "React class") + ": " + s + " type `" + d + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof a[d] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw g.name = "Invariant Violation", g;
            }
            f = a[d](l, d, c, s, null, t);
          } catch (v) {
            f = v;
          }
          if (f && !(f instanceof Error) && e(
            (c || "React class") + ": type specification of " + s + " `" + d + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof f + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), f instanceof Error && !(f.message in o)) {
            o[f.message] = !0;
            var b = u ? u() : "";
            e(
              "Failed " + s + " type: " + f.message + (b ?? "")
            );
          }
        }
    }
  }
  return i.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (o = {});
  }, tr = i, tr;
}
var or, yi;
function kl() {
  if (yi) return or;
  yi = 1;
  var e = Ta, t = Ol(), o = /* @__PURE__ */ Nr(), r = /* @__PURE__ */ Ra(), i = /* @__PURE__ */ Al(), a = function() {
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
  return or = function(s, c) {
    var u = typeof Symbol == "function" && Symbol.iterator, d = "@@iterator";
    function f(k) {
      var z = k && (u && k[u] || k[d]);
      if (typeof z == "function")
        return z;
    }
    var g = "<<anonymous>>", b = {
      array: C("array"),
      bigint: C("bigint"),
      bool: C("boolean"),
      func: C("function"),
      number: C("number"),
      object: C("object"),
      string: C("string"),
      symbol: C("symbol"),
      any: T(),
      arrayOf: w,
      element: m(),
      elementType: E(),
      instanceOf: O,
      node: p(),
      objectOf: D,
      oneOf: M,
      oneOfType: $,
      shape: I,
      exact: B
    };
    function v(k, z) {
      return k === z ? k !== 0 || 1 / k === 1 / z : k !== k && z !== z;
    }
    function y(k, z) {
      this.message = k, this.data = z && typeof z == "object" ? z : {}, this.stack = "";
    }
    y.prototype = Error.prototype;
    function x(k) {
      if (process.env.NODE_ENV !== "production")
        var z = {}, _ = 0;
      function Z(W, Q, X, ne, ie, G, oe) {
        if (ne = ne || g, G = G || X, oe !== o) {
          if (c) {
            var te = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw te.name = "Invariant Violation", te;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var me = ne + ":" + X;
            !z[me] && // Avoid spamming the console because they are often not actionable except for lib authors
            _ < 3 && (a(
              "You are manually calling a React.PropTypes validation function for the `" + G + "` prop on `" + ne + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), z[me] = !0, _++);
          }
        }
        return Q[X] == null ? W ? Q[X] === null ? new y("The " + ie + " `" + G + "` is marked as required " + ("in `" + ne + "`, but its value is `null`.")) : new y("The " + ie + " `" + G + "` is marked as required in " + ("`" + ne + "`, but its value is `undefined`.")) : null : k(Q, X, ne, ie, G);
      }
      var K = Z.bind(null, !1);
      return K.isRequired = Z.bind(null, !0), K;
    }
    function C(k) {
      function z(_, Z, K, W, Q, X) {
        var ne = _[Z], ie = R(ne);
        if (ie !== k) {
          var G = V(ne);
          return new y(
            "Invalid " + W + " `" + Q + "` of type " + ("`" + G + "` supplied to `" + K + "`, expected ") + ("`" + k + "`."),
            { expectedType: k }
          );
        }
        return null;
      }
      return x(z);
    }
    function T() {
      return x(l);
    }
    function w(k) {
      function z(_, Z, K, W, Q) {
        if (typeof k != "function")
          return new y("Property `" + Q + "` of component `" + K + "` has invalid PropType notation inside arrayOf.");
        var X = _[Z];
        if (!Array.isArray(X)) {
          var ne = R(X);
          return new y("Invalid " + W + " `" + Q + "` of type " + ("`" + ne + "` supplied to `" + K + "`, expected an array."));
        }
        for (var ie = 0; ie < X.length; ie++) {
          var G = k(X, ie, K, W, Q + "[" + ie + "]", o);
          if (G instanceof Error)
            return G;
        }
        return null;
      }
      return x(z);
    }
    function m() {
      function k(z, _, Z, K, W) {
        var Q = z[_];
        if (!s(Q)) {
          var X = R(Q);
          return new y("Invalid " + K + " `" + W + "` of type " + ("`" + X + "` supplied to `" + Z + "`, expected a single ReactElement."));
        }
        return null;
      }
      return x(k);
    }
    function E() {
      function k(z, _, Z, K, W) {
        var Q = z[_];
        if (!e.isValidElementType(Q)) {
          var X = R(Q);
          return new y("Invalid " + K + " `" + W + "` of type " + ("`" + X + "` supplied to `" + Z + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return x(k);
    }
    function O(k) {
      function z(_, Z, K, W, Q) {
        if (!(_[Z] instanceof k)) {
          var X = k.name || g, ne = L(_[Z]);
          return new y("Invalid " + W + " `" + Q + "` of type " + ("`" + ne + "` supplied to `" + K + "`, expected ") + ("instance of `" + X + "`."));
        }
        return null;
      }
      return x(z);
    }
    function M(k) {
      if (!Array.isArray(k))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? a(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : a("Invalid argument supplied to oneOf, expected an array.")), l;
      function z(_, Z, K, W, Q) {
        for (var X = _[Z], ne = 0; ne < k.length; ne++)
          if (v(X, k[ne]))
            return null;
        var ie = JSON.stringify(k, function(oe, te) {
          var me = V(te);
          return me === "symbol" ? String(te) : te;
        });
        return new y("Invalid " + W + " `" + Q + "` of value `" + String(X) + "` " + ("supplied to `" + K + "`, expected one of " + ie + "."));
      }
      return x(z);
    }
    function D(k) {
      function z(_, Z, K, W, Q) {
        if (typeof k != "function")
          return new y("Property `" + Q + "` of component `" + K + "` has invalid PropType notation inside objectOf.");
        var X = _[Z], ne = R(X);
        if (ne !== "object")
          return new y("Invalid " + W + " `" + Q + "` of type " + ("`" + ne + "` supplied to `" + K + "`, expected an object."));
        for (var ie in X)
          if (r(X, ie)) {
            var G = k(X, ie, K, W, Q + "." + ie, o);
            if (G instanceof Error)
              return G;
          }
        return null;
      }
      return x(z);
    }
    function $(k) {
      if (!Array.isArray(k))
        return process.env.NODE_ENV !== "production" && a("Invalid argument supplied to oneOfType, expected an instance of array."), l;
      for (var z = 0; z < k.length; z++) {
        var _ = k[z];
        if (typeof _ != "function")
          return a(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + J(_) + " at index " + z + "."
          ), l;
      }
      function Z(K, W, Q, X, ne) {
        for (var ie = [], G = 0; G < k.length; G++) {
          var oe = k[G], te = oe(K, W, Q, X, ne, o);
          if (te == null)
            return null;
          te.data && r(te.data, "expectedType") && ie.push(te.data.expectedType);
        }
        var me = ie.length > 0 ? ", expected one of type [" + ie.join(", ") + "]" : "";
        return new y("Invalid " + X + " `" + ne + "` supplied to " + ("`" + Q + "`" + me + "."));
      }
      return x(Z);
    }
    function p() {
      function k(z, _, Z, K, W) {
        return N(z[_]) ? null : new y("Invalid " + K + " `" + W + "` supplied to " + ("`" + Z + "`, expected a ReactNode."));
      }
      return x(k);
    }
    function A(k, z, _, Z, K) {
      return new y(
        (k || "React class") + ": " + z + " type `" + _ + "." + Z + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + K + "`."
      );
    }
    function I(k) {
      function z(_, Z, K, W, Q) {
        var X = _[Z], ne = R(X);
        if (ne !== "object")
          return new y("Invalid " + W + " `" + Q + "` of type `" + ne + "` " + ("supplied to `" + K + "`, expected `object`."));
        for (var ie in k) {
          var G = k[ie];
          if (typeof G != "function")
            return A(K, W, Q, ie, V(G));
          var oe = G(X, ie, K, W, Q + "." + ie, o);
          if (oe)
            return oe;
        }
        return null;
      }
      return x(z);
    }
    function B(k) {
      function z(_, Z, K, W, Q) {
        var X = _[Z], ne = R(X);
        if (ne !== "object")
          return new y("Invalid " + W + " `" + Q + "` of type `" + ne + "` " + ("supplied to `" + K + "`, expected `object`."));
        var ie = t({}, _[Z], k);
        for (var G in ie) {
          var oe = k[G];
          if (r(k, G) && typeof oe != "function")
            return A(K, W, Q, G, V(oe));
          if (!oe)
            return new y(
              "Invalid " + W + " `" + Q + "` key `" + G + "` supplied to `" + K + "`.\nBad object: " + JSON.stringify(_[Z], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(k), null, "  ")
            );
          var te = oe(X, G, K, W, Q + "." + G, o);
          if (te)
            return te;
        }
        return null;
      }
      return x(z);
    }
    function N(k) {
      switch (typeof k) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !k;
        case "object":
          if (Array.isArray(k))
            return k.every(N);
          if (k === null || s(k))
            return !0;
          var z = f(k);
          if (z) {
            var _ = z.call(k), Z;
            if (z !== k.entries) {
              for (; !(Z = _.next()).done; )
                if (!N(Z.value))
                  return !1;
            } else
              for (; !(Z = _.next()).done; ) {
                var K = Z.value;
                if (K && !N(K[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function P(k, z) {
      return k === "symbol" ? !0 : z ? z["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && z instanceof Symbol : !1;
    }
    function R(k) {
      var z = typeof k;
      return Array.isArray(k) ? "array" : k instanceof RegExp ? "object" : P(z, k) ? "symbol" : z;
    }
    function V(k) {
      if (typeof k > "u" || k === null)
        return "" + k;
      var z = R(k);
      if (z === "object") {
        if (k instanceof Date)
          return "date";
        if (k instanceof RegExp)
          return "regexp";
      }
      return z;
    }
    function J(k) {
      var z = V(k);
      switch (z) {
        case "array":
        case "object":
          return "an " + z;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + z;
        default:
          return z;
      }
    }
    function L(k) {
      return !k.constructor || !k.constructor.name ? g : k.constructor.name;
    }
    return b.checkPropTypes = i, b.resetWarningCache = i.resetWarningCache, b.PropTypes = b, b;
  }, or;
}
var nr, vi;
function Rl() {
  if (vi) return nr;
  vi = 1;
  var e = /* @__PURE__ */ Nr();
  function t() {
  }
  function o() {
  }
  return o.resetWarningCache = t, nr = function() {
    function r(l, s, c, u, d, f) {
      if (f !== e) {
        var g = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw g.name = "Invariant Violation", g;
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
  }, nr;
}
var Ci;
function Fl() {
  if (Ci) return Zo.exports;
  if (Ci = 1, process.env.NODE_ENV !== "production") {
    var e = Ta, t = !0;
    Zo.exports = /* @__PURE__ */ kl()(e.isElement, t);
  } else
    Zo.exports = /* @__PURE__ */ Rl()();
  return Zo.exports;
}
var Bl = /* @__PURE__ */ Fl();
const n = /* @__PURE__ */ Tl(Bl);
/**
 * @mui/styled-engine v6.4.11
 *
 * @license MIT
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
function Fa(e, t) {
  const o = gl(e, t);
  return process.env.NODE_ENV !== "production" ? (...r) => {
    const i = typeof e == "string" ? `"${e}"` : "component";
    return r.length === 0 ? console.error([`MUI: Seems like you called \`styled(${i})()\` without a \`style\` argument.`, 'You must provide a `styles` argument: `styled("div")(styleYouForgotToPass)`.'].join(`
`)) : r.some((a) => a === void 0) && console.error(`MUI: the styled(${i})(...args) API requires all its args to be defined.`), o(...r);
  } : o;
}
function Ml(e, t) {
  Array.isArray(e.__emotion_styles) && (e.__emotion_styles = t(e.__emotion_styles));
}
const xi = [];
function wi(e) {
  return xi[0] = e, Sl(xi);
}
function st(e) {
  if (typeof e != "object" || e === null)
    return !1;
  const t = Object.getPrototypeOf(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}
function Ba(e) {
  if (/* @__PURE__ */ h.isValidElement(e) || Oa(e) || !st(e))
    return e;
  const t = {};
  return Object.keys(e).forEach((o) => {
    t[o] = Ba(e[o]);
  }), t;
}
function Ke(e, t, o = {
  clone: !0
}) {
  const r = o.clone ? {
    ...e
  } : e;
  return st(e) && st(t) && Object.keys(t).forEach((i) => {
    /* @__PURE__ */ h.isValidElement(t[i]) || Oa(t[i]) ? r[i] = t[i] : st(t[i]) && // Avoid prototype pollution
    Object.prototype.hasOwnProperty.call(e, i) && st(e[i]) ? r[i] = Ke(e[i], t[i], o) : o.clone ? r[i] = st(t[i]) ? Ba(t[i]) : t[i] : r[i] = t[i];
  }), r;
}
const Il = (e) => {
  const t = Object.keys(e).map((o) => ({
    key: o,
    val: e[o]
  })) || [];
  return t.sort((o, r) => o.val - r.val), t.reduce((o, r) => ({
    ...o,
    [r.key]: r.val
  }), {});
};
function Pl(e) {
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
  } = e, a = Il(t), l = Object.keys(a);
  function s(g) {
    return `@media (min-width:${typeof t[g] == "number" ? t[g] : g}${o})`;
  }
  function c(g) {
    return `@media (max-width:${(typeof t[g] == "number" ? t[g] : g) - r / 100}${o})`;
  }
  function u(g, b) {
    const v = l.indexOf(b);
    return `@media (min-width:${typeof t[g] == "number" ? t[g] : g}${o}) and (max-width:${(v !== -1 && typeof t[l[v]] == "number" ? t[l[v]] : b) - r / 100}${o})`;
  }
  function d(g) {
    return l.indexOf(g) + 1 < l.length ? u(g, l[l.indexOf(g) + 1]) : s(g);
  }
  function f(g) {
    const b = l.indexOf(g);
    return b === 0 ? s(l[1]) : b === l.length - 1 ? c(l[b]) : u(g, l[l.indexOf(g) + 1]).replace("@media", "@media not all and");
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
function Dl(e, t) {
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
function Nl(e, t) {
  return t === "@" || t.startsWith("@") && (e.some((o) => t.startsWith(`@${o}`)) || !!t.match(/^@\d/));
}
function $l(e, t) {
  const o = t.match(/^@([^/]+)?\/?(.+)?$/);
  if (!o) {
    if (process.env.NODE_ENV !== "production")
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The provided shorthand ${`(${t})`} is invalid. The format should be \`@<breakpoint | number>\` or \`@<breakpoint | number>/<container>\`.
For example, \`@sm\` or \`@600\` or \`@40rem/sidebar\`.` : At(18, `(${t})`));
    return null;
  }
  const [, r, i] = o, a = Number.isNaN(+r) ? r || 0 : +r;
  return e.containerQueries(i).up(a);
}
function jl(e) {
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
const zl = {
  borderRadius: 4
}, Ft = process.env.NODE_ENV !== "production" ? n.oneOfType([n.number, n.string, n.object, n.array]) : {};
function Ro(e, t) {
  return t ? Ke(e, t, {
    clone: !1
    // No need to clone deep, it's way faster.
  }) : e;
}
const kn = {
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
}, Ei = {
  // Sorted ASC by size. That's important.
  // It can't be configured as it's used statically for propTypes.
  keys: ["xs", "sm", "md", "lg", "xl"],
  up: (e) => `@media (min-width:${kn[e]}px)`
}, Vl = {
  containerQueries: (e) => ({
    up: (t) => {
      let o = typeof t == "number" ? t : kn[t] || t;
      return typeof o == "number" && (o = `${o}px`), e ? `@container ${e} (min-width:${o})` : `@container (min-width:${o})`;
    }
  })
};
function bt(e, t, o) {
  const r = e.theme || {};
  if (Array.isArray(t)) {
    const a = r.breakpoints || Ei;
    return t.reduce((l, s, c) => (l[a.up(a.keys[c])] = o(t[c]), l), {});
  }
  if (typeof t == "object") {
    const a = r.breakpoints || Ei;
    return Object.keys(t).reduce((l, s) => {
      if (Nl(a.keys, s)) {
        const c = $l(r.containerQueries ? r : Vl, s);
        c && (l[c] = o(t[s], s));
      } else if (Object.keys(a.values || kn).includes(s)) {
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
function Ll(e = {}) {
  var o;
  return ((o = e.keys) == null ? void 0 : o.reduce((r, i) => {
    const a = e.up(i);
    return r[a] = {}, r;
  }, {})) || {};
}
function Ul(e, t) {
  return e.reduce((o, r) => {
    const i = o[r];
    return (!i || Object.keys(i).length === 0) && delete o[r], o;
  }, t);
}
function j(e) {
  if (typeof e != "string")
    throw new Error(process.env.NODE_ENV !== "production" ? "MUI: `capitalize(string)` expects a string argument." : At(7));
  return e.charAt(0).toUpperCase() + e.slice(1);
}
function Rn(e, t, o = !0) {
  if (!t || typeof t != "string")
    return null;
  if (e && e.vars && o) {
    const r = `vars.${t}`.split(".").reduce((i, a) => i && i[a] ? i[a] : null, e);
    if (r != null)
      return r;
  }
  return t.split(".").reduce((r, i) => r && r[i] != null ? r[i] : null, e);
}
function hn(e, t, o, r = o) {
  let i;
  return typeof e == "function" ? i = e(o) : Array.isArray(e) ? i = e[o] || r : i = Rn(e, o) || r, t && (i = t(i, r, e)), i;
}
function Re(e) {
  const {
    prop: t,
    cssProperty: o = e.prop,
    themeKey: r,
    transform: i
  } = e, a = (l) => {
    if (l[t] == null)
      return null;
    const s = l[t], c = l.theme, u = Rn(c, r) || {};
    return bt(l, s, (f) => {
      let g = hn(u, i, f);
      return f === g && typeof f == "string" && (g = hn(u, i, `${t}${f === "default" ? "" : j(f)}`, f)), o === !1 ? g : {
        [o]: g
      };
    });
  };
  return a.propTypes = process.env.NODE_ENV !== "production" ? {
    [t]: Ft
  } : {}, a.filterProps = [t], a;
}
function Wl(e) {
  const t = {};
  return (o) => (t[o] === void 0 && (t[o] = e(o)), t[o]);
}
const Hl = {
  m: "margin",
  p: "padding"
}, Ql = {
  t: "Top",
  r: "Right",
  b: "Bottom",
  l: "Left",
  x: ["Left", "Right"],
  y: ["Top", "Bottom"]
}, Si = {
  marginX: "mx",
  marginY: "my",
  paddingX: "px",
  paddingY: "py"
}, Kl = Wl((e) => {
  if (e.length > 2)
    if (Si[e])
      e = Si[e];
    else
      return [e];
  const [t, o] = e.split(""), r = Hl[t], i = Ql[o] || "";
  return Array.isArray(i) ? i.map((a) => r + a) : [r + i];
}), Fn = ["m", "mt", "mr", "mb", "ml", "mx", "my", "margin", "marginTop", "marginRight", "marginBottom", "marginLeft", "marginX", "marginY", "marginInline", "marginInlineStart", "marginInlineEnd", "marginBlock", "marginBlockStart", "marginBlockEnd"], Bn = ["p", "pt", "pr", "pb", "pl", "px", "py", "padding", "paddingTop", "paddingRight", "paddingBottom", "paddingLeft", "paddingX", "paddingY", "paddingInline", "paddingInlineStart", "paddingInlineEnd", "paddingBlock", "paddingBlockStart", "paddingBlockEnd"], Gl = [...Fn, ...Bn];
function Vo(e, t, o, r) {
  const i = Rn(e, t, !0) ?? o;
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
function $r(e) {
  return Vo(e, "spacing", 8, "spacing");
}
function Lo(e, t) {
  return typeof t == "string" || t == null ? t : e(t);
}
function Yl(e, t) {
  return (o) => e.reduce((r, i) => (r[i] = Lo(t, o), r), {});
}
function ql(e, t, o, r) {
  if (!t.includes(o))
    return null;
  const i = Kl(o), a = Yl(i, r), l = e[o];
  return bt(e, l, a);
}
function Ma(e, t) {
  const o = $r(e.theme);
  return Object.keys(e).map((r) => ql(e, t, r, o)).reduce(Ro, {});
}
function Oe(e) {
  return Ma(e, Fn);
}
Oe.propTypes = process.env.NODE_ENV !== "production" ? Fn.reduce((e, t) => (e[t] = Ft, e), {}) : {};
Oe.filterProps = Fn;
function Ae(e) {
  return Ma(e, Bn);
}
Ae.propTypes = process.env.NODE_ENV !== "production" ? Bn.reduce((e, t) => (e[t] = Ft, e), {}) : {};
Ae.filterProps = Bn;
process.env.NODE_ENV !== "production" && Gl.reduce((e, t) => (e[t] = Ft, e), {});
function Ia(e = 8, t = $r({
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
function Mn(...e) {
  const t = e.reduce((r, i) => (i.filterProps.forEach((a) => {
    r[a] = i;
  }), r), {}), o = (r) => Object.keys(r).reduce((i, a) => t[a] ? Ro(i, t[a](r)) : i, {});
  return o.propTypes = process.env.NODE_ENV !== "production" ? e.reduce((r, i) => Object.assign(r, i.propTypes), {}) : {}, o.filterProps = e.reduce((r, i) => r.concat(i.filterProps), []), o;
}
function Je(e) {
  return typeof e != "number" ? e : `${e}px solid`;
}
function tt(e, t) {
  return Re({
    prop: e,
    themeKey: "borders",
    transform: t
  });
}
const Xl = tt("border", Je), Jl = tt("borderTop", Je), Zl = tt("borderRight", Je), _l = tt("borderBottom", Je), ec = tt("borderLeft", Je), tc = tt("borderColor"), oc = tt("borderTopColor"), nc = tt("borderRightColor"), rc = tt("borderBottomColor"), ic = tt("borderLeftColor"), ac = tt("outline", Je), sc = tt("outlineColor"), In = (e) => {
  if (e.borderRadius !== void 0 && e.borderRadius !== null) {
    const t = Vo(e.theme, "shape.borderRadius", 4, "borderRadius"), o = (r) => ({
      borderRadius: Lo(t, r)
    });
    return bt(e, e.borderRadius, o);
  }
  return null;
};
In.propTypes = process.env.NODE_ENV !== "production" ? {
  borderRadius: Ft
} : {};
In.filterProps = ["borderRadius"];
Mn(Xl, Jl, Zl, _l, ec, tc, oc, nc, rc, ic, In, ac, sc);
const Pn = (e) => {
  if (e.gap !== void 0 && e.gap !== null) {
    const t = Vo(e.theme, "spacing", 8, "gap"), o = (r) => ({
      gap: Lo(t, r)
    });
    return bt(e, e.gap, o);
  }
  return null;
};
Pn.propTypes = process.env.NODE_ENV !== "production" ? {
  gap: Ft
} : {};
Pn.filterProps = ["gap"];
const Dn = (e) => {
  if (e.columnGap !== void 0 && e.columnGap !== null) {
    const t = Vo(e.theme, "spacing", 8, "columnGap"), o = (r) => ({
      columnGap: Lo(t, r)
    });
    return bt(e, e.columnGap, o);
  }
  return null;
};
Dn.propTypes = process.env.NODE_ENV !== "production" ? {
  columnGap: Ft
} : {};
Dn.filterProps = ["columnGap"];
const Nn = (e) => {
  if (e.rowGap !== void 0 && e.rowGap !== null) {
    const t = Vo(e.theme, "spacing", 8, "rowGap"), o = (r) => ({
      rowGap: Lo(t, r)
    });
    return bt(e, e.rowGap, o);
  }
  return null;
};
Nn.propTypes = process.env.NODE_ENV !== "production" ? {
  rowGap: Ft
} : {};
Nn.filterProps = ["rowGap"];
const lc = Re({
  prop: "gridColumn"
}), cc = Re({
  prop: "gridRow"
}), uc = Re({
  prop: "gridAutoFlow"
}), pc = Re({
  prop: "gridAutoColumns"
}), dc = Re({
  prop: "gridAutoRows"
}), fc = Re({
  prop: "gridTemplateColumns"
}), gc = Re({
  prop: "gridTemplateRows"
}), hc = Re({
  prop: "gridTemplateAreas"
}), bc = Re({
  prop: "gridArea"
});
Mn(Pn, Dn, Nn, lc, cc, uc, pc, dc, fc, gc, hc, bc);
function ro(e, t) {
  return t === "grey" ? t : e;
}
const mc = Re({
  prop: "color",
  themeKey: "palette",
  transform: ro
}), yc = Re({
  prop: "bgcolor",
  cssProperty: "backgroundColor",
  themeKey: "palette",
  transform: ro
}), vc = Re({
  prop: "backgroundColor",
  themeKey: "palette",
  transform: ro
});
Mn(mc, yc, vc);
function Qe(e) {
  return e <= 1 && e !== 0 ? `${e * 100}%` : e;
}
const Cc = Re({
  prop: "width",
  transform: Qe
}), jr = (e) => {
  if (e.maxWidth !== void 0 && e.maxWidth !== null) {
    const t = (o) => {
      var i, a, l, s, c;
      const r = ((l = (a = (i = e.theme) == null ? void 0 : i.breakpoints) == null ? void 0 : a.values) == null ? void 0 : l[o]) || kn[o];
      return r ? ((c = (s = e.theme) == null ? void 0 : s.breakpoints) == null ? void 0 : c.unit) !== "px" ? {
        maxWidth: `${r}${e.theme.breakpoints.unit}`
      } : {
        maxWidth: r
      } : {
        maxWidth: Qe(o)
      };
    };
    return bt(e, e.maxWidth, t);
  }
  return null;
};
jr.filterProps = ["maxWidth"];
const xc = Re({
  prop: "minWidth",
  transform: Qe
}), wc = Re({
  prop: "height",
  transform: Qe
}), Ec = Re({
  prop: "maxHeight",
  transform: Qe
}), Sc = Re({
  prop: "minHeight",
  transform: Qe
});
Re({
  prop: "size",
  cssProperty: "width",
  transform: Qe
});
Re({
  prop: "size",
  cssProperty: "height",
  transform: Qe
});
const Tc = Re({
  prop: "boxSizing"
});
Mn(Cc, jr, xc, wc, Ec, Sc, Tc);
const Uo = {
  // borders
  border: {
    themeKey: "borders",
    transform: Je
  },
  borderTop: {
    themeKey: "borders",
    transform: Je
  },
  borderRight: {
    themeKey: "borders",
    transform: Je
  },
  borderBottom: {
    themeKey: "borders",
    transform: Je
  },
  borderLeft: {
    themeKey: "borders",
    transform: Je
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
    transform: Je
  },
  outlineColor: {
    themeKey: "palette"
  },
  borderRadius: {
    themeKey: "shape.borderRadius",
    style: In
  },
  // palette
  color: {
    themeKey: "palette",
    transform: ro
  },
  bgcolor: {
    themeKey: "palette",
    cssProperty: "backgroundColor",
    transform: ro
  },
  backgroundColor: {
    themeKey: "palette",
    transform: ro
  },
  // spacing
  p: {
    style: Ae
  },
  pt: {
    style: Ae
  },
  pr: {
    style: Ae
  },
  pb: {
    style: Ae
  },
  pl: {
    style: Ae
  },
  px: {
    style: Ae
  },
  py: {
    style: Ae
  },
  padding: {
    style: Ae
  },
  paddingTop: {
    style: Ae
  },
  paddingRight: {
    style: Ae
  },
  paddingBottom: {
    style: Ae
  },
  paddingLeft: {
    style: Ae
  },
  paddingX: {
    style: Ae
  },
  paddingY: {
    style: Ae
  },
  paddingInline: {
    style: Ae
  },
  paddingInlineStart: {
    style: Ae
  },
  paddingInlineEnd: {
    style: Ae
  },
  paddingBlock: {
    style: Ae
  },
  paddingBlockStart: {
    style: Ae
  },
  paddingBlockEnd: {
    style: Ae
  },
  m: {
    style: Oe
  },
  mt: {
    style: Oe
  },
  mr: {
    style: Oe
  },
  mb: {
    style: Oe
  },
  ml: {
    style: Oe
  },
  mx: {
    style: Oe
  },
  my: {
    style: Oe
  },
  margin: {
    style: Oe
  },
  marginTop: {
    style: Oe
  },
  marginRight: {
    style: Oe
  },
  marginBottom: {
    style: Oe
  },
  marginLeft: {
    style: Oe
  },
  marginX: {
    style: Oe
  },
  marginY: {
    style: Oe
  },
  marginInline: {
    style: Oe
  },
  marginInlineStart: {
    style: Oe
  },
  marginInlineEnd: {
    style: Oe
  },
  marginBlock: {
    style: Oe
  },
  marginBlockStart: {
    style: Oe
  },
  marginBlockEnd: {
    style: Oe
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
    style: Pn
  },
  rowGap: {
    style: Nn
  },
  columnGap: {
    style: Dn
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
    transform: Qe
  },
  maxWidth: {
    style: jr
  },
  minWidth: {
    transform: Qe
  },
  height: {
    transform: Qe
  },
  maxHeight: {
    transform: Qe
  },
  minHeight: {
    transform: Qe
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
function Oc(...e) {
  const t = e.reduce((r, i) => r.concat(Object.keys(i)), []), o = new Set(t);
  return e.every((r) => o.size === Object.keys(r).length);
}
function Ac(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function kc() {
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
    const g = Rn(i, u) || {};
    return f ? f(l) : bt(l, r, (v) => {
      let y = hn(g, d, v);
      return v === y && typeof v == "string" && (y = hn(g, d, `${o}${v === "default" ? "" : j(v)}`, v)), c === !1 ? y : {
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
    const a = i.unstable_sxConfig ?? Uo;
    function l(s) {
      let c = s;
      if (typeof s == "function")
        c = s(i);
      else if (typeof s != "object")
        return s;
      if (!c)
        return null;
      const u = Ll(i.breakpoints), d = Object.keys(u);
      let f = u;
      return Object.keys(c).forEach((g) => {
        const b = Ac(c[g], i);
        if (b != null)
          if (typeof b == "object")
            if (a[g])
              f = Ro(f, e(g, b, i, a));
            else {
              const v = bt({
                theme: i
              }, b, (y) => ({
                [g]: y
              }));
              Oc(v, b) ? f[g] = t({
                sx: b,
                theme: i
              }) : f = Ro(f, v);
            }
          else
            f = Ro(f, e(g, b, i, a));
      }), Dl(i, Ul(d, f));
    }
    return Array.isArray(r) ? r.map(l) : l(r);
  }
  return t;
}
const Lt = kc();
Lt.filterProps = ["sx"];
function Rc(e, t) {
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
function zr(e = {}, ...t) {
  const {
    breakpoints: o = {},
    palette: r = {},
    spacing: i,
    shape: a = {},
    ...l
  } = e, s = Pl(o), c = Ia(i);
  let u = Ke({
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
      ...zl,
      ...a
    }
  }, l);
  return u = jl(u), u.applyStyles = Rc, u = t.reduce((d, f) => Ke(d, f), u), u.unstable_sxConfig = {
    ...Uo,
    ...l == null ? void 0 : l.unstable_sxConfig
  }, u.unstable_sx = function(f) {
    return Lt({
      sx: f,
      theme: this
    });
  }, u;
}
function Fc(e) {
  return Object.keys(e).length === 0;
}
function Bc(e = null) {
  const t = h.useContext(hl);
  return !t || Fc(t) ? e : t;
}
const Mc = zr();
function Pa(e = Mc) {
  return Bc(e);
}
const Ic = (e) => {
  var r;
  const t = {
    systemProps: {},
    otherProps: {}
  }, o = ((r = e == null ? void 0 : e.theme) == null ? void 0 : r.unstable_sxConfig) ?? Uo;
  return Object.keys(e).forEach((i) => {
    o[i] ? t.systemProps[i] = e[i] : t.otherProps[i] = e[i];
  }), t;
};
function Da(e) {
  const {
    sx: t,
    ...o
  } = e, {
    systemProps: r,
    otherProps: i
  } = Ic(o);
  let a;
  return Array.isArray(t) ? a = [r, ...t] : typeof t == "function" ? a = (...l) => {
    const s = t(...l);
    return st(s) ? {
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
const Ti = (e) => e, Pc = () => {
  let e = Ti;
  return {
    configure(t) {
      e = t;
    },
    generate(t) {
      return e(t);
    },
    reset() {
      e = Ti;
    }
  };
}, Na = Pc();
function $a(e) {
  var t, o, r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var i = e.length;
    for (t = 0; t < i; t++) e[t] && (o = $a(e[t])) && (r && (r += " "), r += o);
  } else for (o in e) e[o] && (r && (r += " "), r += o);
  return r;
}
function q() {
  for (var e, t, o = 0, r = "", i = arguments.length; o < i; o++) (e = arguments[o]) && (t = $a(e)) && (r && (r += " "), r += t);
  return r;
}
function Dc(e = {}) {
  const {
    themeId: t,
    defaultTheme: o,
    defaultClassName: r = "MuiBox-root",
    generateClassName: i
  } = e, a = Fa("div", {
    shouldForwardProp: (s) => s !== "theme" && s !== "sx" && s !== "as"
  })(Lt);
  return /* @__PURE__ */ h.forwardRef(function(c, u) {
    const d = Pa(o), {
      className: f,
      component: g = "div",
      ...b
    } = Da(c);
    return /* @__PURE__ */ S(a, {
      as: g,
      ref: u,
      className: q(f, i ? i(r) : r),
      theme: t && d[t] || d,
      ...b
    });
  });
}
const Nc = {
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
function ce(e, t, o = "Mui") {
  const r = Nc[t];
  return r ? `${o}-${r}` : `${Na.generate(e)}-${t}`;
}
function se(e, t, o = "Mui") {
  const r = {};
  return t.forEach((i) => {
    r[i] = ce(e, i, o);
  }), r;
}
function ja(e, t = "") {
  return e.displayName || e.name || t;
}
function Oi(e, t, o) {
  const r = ja(t);
  return e.displayName || (r !== "" ? `${o}(${r})` : o);
}
function $c(e) {
  if (e != null) {
    if (typeof e == "string")
      return e;
    if (typeof e == "function")
      return ja(e, "Component");
    if (typeof e == "object")
      switch (e.$$typeof) {
        case pl:
          return Oi(e, e.render, "ForwardRef");
        case ul:
          return Oi(e, e.type, "memo");
        default:
          return;
      }
  }
}
function za(e) {
  const {
    variants: t,
    ...o
  } = e, r = {
    variants: t,
    style: wi(o),
    isProcessed: !0
  };
  return r.style === o || t && t.forEach((i) => {
    typeof i.style != "function" && (i.style = wi(i.style));
  }), r;
}
const jc = zr();
function rr(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
function zc(e) {
  return e ? (t, o) => o[e] : null;
}
function Vc(e, t, o) {
  e.theme = Hc(e.theme) ? o : e.theme[t] || e.theme;
}
function un(e, t) {
  const o = typeof t == "function" ? t(e) : t;
  if (Array.isArray(o))
    return o.flatMap((r) => un(e, r));
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
    return Va(e, o.variants, [r]);
  }
  return o != null && o.isProcessed ? o.style : o;
}
function Va(e, t, o = []) {
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
function Lc(e = {}) {
  const {
    themeId: t,
    defaultTheme: o = jc,
    rootShouldForwardProp: r = rr,
    slotShouldForwardProp: i = rr
  } = e;
  function a(s) {
    Vc(s, t, o);
  }
  return (s, c = {}) => {
    Ml(s, (E) => E.filter((O) => O !== Lt));
    const {
      name: u,
      slot: d,
      skipVariantsResolver: f,
      skipSx: g,
      // TODO v6: remove `lowercaseFirstLetter()` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      overridesResolver: b = zc(La(d)),
      ...v
    } = c, y = f !== void 0 ? f : (
      // TODO v6: remove `Root` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      d && d !== "Root" && d !== "root" || !1
    ), x = g || !1;
    let C = rr;
    d === "Root" || d === "root" ? C = r : d ? C = i : Qc(s) && (C = void 0);
    const T = Fa(s, {
      shouldForwardProp: C,
      label: Wc(u, d),
      ...v
    }), w = (E) => {
      if (E.__emotion_real === E)
        return E;
      if (typeof E == "function")
        return function(M) {
          return un(M, E);
        };
      if (st(E)) {
        const O = za(E);
        return O.variants ? function(D) {
          return un(D, O);
        } : O.style;
      }
      return E;
    }, m = (...E) => {
      const O = [], M = E.map(w), D = [];
      if (O.push(a), u && b && D.push(function(I) {
        var R, V;
        const N = (V = (R = I.theme.components) == null ? void 0 : R[u]) == null ? void 0 : V.styleOverrides;
        if (!N)
          return null;
        const P = {};
        for (const J in N)
          P[J] = un(I, N[J]);
        return b(I, P);
      }), u && !y && D.push(function(I) {
        var P, R;
        const B = I.theme, N = (R = (P = B == null ? void 0 : B.components) == null ? void 0 : P[u]) == null ? void 0 : R.variants;
        return N ? Va(I, N) : null;
      }), x || D.push(Lt), Array.isArray(M[0])) {
        const A = M.shift(), I = new Array(O.length).fill(""), B = new Array(D.length).fill("");
        let N;
        N = [...I, ...A, ...B], N.raw = [...I, ...A.raw, ...B], O.unshift(N);
      }
      const $ = [...O, ...M, ...D], p = T(...$);
      return s.muiName && (p.muiName = s.muiName), process.env.NODE_ENV !== "production" && (p.displayName = Uc(u, d, s)), p;
    };
    return T.withConfig && (m.withConfig = T.withConfig), m;
  };
}
function Uc(e, t, o) {
  return e ? `${e}${j(t || "")}` : `Styled(${$c(o)})`;
}
function Wc(e, t) {
  let o;
  return process.env.NODE_ENV !== "production" && e && (o = `${e}-${La(t || "Root")}`), o;
}
function Hc(e) {
  for (const t in e)
    return !1;
  return !0;
}
function Qc(e) {
  return typeof e == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  e.charCodeAt(0) > 96;
}
function La(e) {
  return e && e.charAt(0).toLowerCase() + e.slice(1);
}
function Io(e, t) {
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
              o[i][c] = Io(a[c], l[c]);
            }
        }
      } else o[i] === void 0 && (o[i] = e[i]);
    }
  return o;
}
const kt = typeof window < "u" ? h.useLayoutEffect : h.useEffect;
function Kc(e, t = Number.MIN_SAFE_INTEGER, o = Number.MAX_SAFE_INTEGER) {
  return Math.max(t, Math.min(e, o));
}
function Vr(e, t = 0, o = 1) {
  return process.env.NODE_ENV !== "production" && (e < t || e > o) && console.error(`MUI: The value provided ${e} is out of range [${t}, ${o}].`), Kc(e, t, o);
}
function Gc(e) {
  e = e.slice(1);
  const t = new RegExp(`.{1,${e.length >= 6 ? 2 : 1}}`, "g");
  let o = e.match(t);
  return o && o[0].length === 1 && (o = o.map((r) => r + r)), process.env.NODE_ENV !== "production" && e.length !== e.trim().length && console.error(`MUI: The color: "${e}" is invalid. Make sure the color input doesn't contain leading/trailing space.`), o ? `rgb${o.length === 4 ? "a" : ""}(${o.map((r, i) => i < 3 ? parseInt(r, 16) : Math.round(parseInt(r, 16) / 255 * 1e3) / 1e3).join(", ")})` : "";
}
function Rt(e) {
  if (e.type)
    return e;
  if (e.charAt(0) === "#")
    return Rt(Gc(e));
  const t = e.indexOf("("), o = e.substring(0, t);
  if (!["rgb", "rgba", "hsl", "hsla", "color"].includes(o))
    throw new Error(process.env.NODE_ENV !== "production" ? `MUI: Unsupported \`${e}\` color.
The following formats are supported: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color().` : At(9, e));
  let r = e.substring(t + 1, e.length - 1), i;
  if (o === "color") {
    if (r = r.split(" "), i = r.shift(), r.length === 4 && r[3].charAt(0) === "/" && (r[3] = r[3].slice(1)), !["srgb", "display-p3", "a98-rgb", "prophoto-rgb", "rec-2020"].includes(i))
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: unsupported \`${i}\` color space.
The following color spaces are supported: srgb, display-p3, a98-rgb, prophoto-rgb, rec-2020.` : At(10, i));
  } else
    r = r.split(",");
  return r = r.map((a) => parseFloat(a)), {
    type: o,
    values: r,
    colorSpace: i
  };
}
const Yc = (e) => {
  const t = Rt(e);
  return t.values.slice(0, 3).map((o, r) => t.type.includes("hsl") && r !== 0 ? `${o}%` : o).join(" ");
}, So = (e, t) => {
  try {
    return Yc(e);
  } catch {
    return t && process.env.NODE_ENV !== "production" && console.warn(t), e;
  }
};
function $n(e) {
  const {
    type: t,
    colorSpace: o
  } = e;
  let {
    values: r
  } = e;
  return t.includes("rgb") ? r = r.map((i, a) => a < 3 ? parseInt(i, 10) : i) : t.includes("hsl") && (r[1] = `${r[1]}%`, r[2] = `${r[2]}%`), t.includes("color") ? r = `${o} ${r.join(" ")}` : r = `${r.join(", ")}`, `${t}(${r})`;
}
function Ua(e) {
  e = Rt(e);
  const {
    values: t
  } = e, o = t[0], r = t[1] / 100, i = t[2] / 100, a = r * Math.min(i, 1 - i), l = (u, d = (u + o / 30) % 12) => i - a * Math.max(Math.min(d - 3, 9 - d, 1), -1);
  let s = "rgb";
  const c = [Math.round(l(0) * 255), Math.round(l(8) * 255), Math.round(l(4) * 255)];
  return e.type === "hsla" && (s += "a", c.push(t[3])), $n({
    type: s,
    values: c
  });
}
function mr(e) {
  e = Rt(e);
  let t = e.type === "hsl" || e.type === "hsla" ? Rt(Ua(e)).values : e.values;
  return t = t.map((o) => (e.type !== "color" && (o /= 255), o <= 0.03928 ? o / 12.92 : ((o + 0.055) / 1.055) ** 2.4)), Number((0.2126 * t[0] + 0.7152 * t[1] + 0.0722 * t[2]).toFixed(3));
}
function Ai(e, t) {
  const o = mr(e), r = mr(t);
  return (Math.max(o, r) + 0.05) / (Math.min(o, r) + 0.05);
}
function H(e, t) {
  return e = Rt(e), t = Vr(t), (e.type === "rgb" || e.type === "hsl") && (e.type += "a"), e.type === "color" ? e.values[3] = `/${t}` : e.values[3] = t, $n(e);
}
function _o(e, t, o) {
  try {
    return H(e, t);
  } catch {
    return e;
  }
}
function io(e, t) {
  if (e = Rt(e), t = Vr(t), e.type.includes("hsl"))
    e.values[2] *= 1 - t;
  else if (e.type.includes("rgb") || e.type.includes("color"))
    for (let o = 0; o < 3; o += 1)
      e.values[o] *= 1 - t;
  return $n(e);
}
function Ce(e, t, o) {
  try {
    return io(e, t);
  } catch {
    return e;
  }
}
function ao(e, t) {
  if (e = Rt(e), t = Vr(t), e.type.includes("hsl"))
    e.values[2] += (100 - e.values[2]) * t;
  else if (e.type.includes("rgb"))
    for (let o = 0; o < 3; o += 1)
      e.values[o] += (255 - e.values[o]) * t;
  else if (e.type.includes("color"))
    for (let o = 0; o < 3; o += 1)
      e.values[o] += (1 - e.values[o]) * t;
  return $n(e);
}
function xe(e, t, o) {
  try {
    return ao(e, t);
  } catch {
    return e;
  }
}
function qc(e, t = 0.15) {
  return mr(e) > 0.5 ? io(e, t) : ao(e, t);
}
function en(e, t, o) {
  try {
    return qc(e, t);
  } catch {
    return e;
  }
}
function Bt(e, t) {
  return process.env.NODE_ENV === "production" ? () => null : function(...r) {
    return e(...r) || t(...r);
  };
}
function Xc(e) {
  const {
    prototype: t = {}
  } = e;
  return !!t.isReactComponent;
}
function Wa(e, t, o, r, i) {
  const a = e[t], l = i || t;
  if (a == null || // When server-side rendering React doesn't warn either.
  // This is not an accurate check for SSR.
  // This is only in place for Emotion compat.
  // TODO: Revisit once https://github.com/facebook/react/issues/20047 is resolved.
  typeof window > "u")
    return null;
  let s;
  const c = a.type;
  return typeof c == "function" && !Xc(c) && (s = "Did you accidentally use a plain function component for an element instead?"), s !== void 0 ? new Error(`Invalid ${r} \`${l}\` supplied to \`${o}\`. Expected an element that can hold a ref. ${s} For more information see https://mui.com/r/caveat-with-refs-guide`) : null;
}
const fo = Bt(n.element, Wa);
fo.isRequired = Bt(n.element.isRequired, Wa);
function Jc(e) {
  const {
    prototype: t = {}
  } = e;
  return !!t.isReactComponent;
}
function Zc(e, t, o, r, i) {
  const a = e[t], l = i || t;
  if (a == null || // When server-side rendering React doesn't warn either.
  // This is not an accurate check for SSR.
  // This is only in place for emotion compat.
  // TODO: Revisit once https://github.com/facebook/react/issues/20047 is resolved.
  typeof window > "u")
    return null;
  let s;
  return typeof a == "function" && !Jc(a) && (s = "Did you accidentally provide a plain function component instead?"), s !== void 0 ? new Error(`Invalid ${r} \`${l}\` supplied to \`${o}\`. Expected an element type that can hold a ref. ${s} For more information see https://mui.com/r/caveat-with-refs-guide`) : null;
}
const Ha = Bt(n.elementType, Zc), _c = "exact-prop: ​";
function Qa(e) {
  return process.env.NODE_ENV === "production" ? e : {
    ...e,
    [_c]: (t) => {
      const o = Object.keys(t).filter((r) => !e.hasOwnProperty(r));
      return o.length > 0 ? new Error(`The following props are not supported: ${o.map((r) => `\`${r}\``).join(", ")}. Please remove them.`) : null;
    }
  };
}
function mt(e, t, o, r, i) {
  if (process.env.NODE_ENV === "production")
    return null;
  const a = e[t], l = i || t;
  return a == null ? null : a && a.nodeType !== 1 ? new Error(`Invalid ${r} \`${l}\` supplied to \`${o}\`. Expected an HTMLElement.`) : null;
}
const Ct = n.oneOfType([n.func, n.object]);
function yr(...e) {
  return e.reduce((t, o) => o == null ? t : function(...i) {
    t.apply(this, i), o.apply(this, i);
  }, () => {
  });
}
function Lr(e, t = 166) {
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
function ir(e, t) {
  var o, r, i;
  return /* @__PURE__ */ h.isValidElement(e) && t.indexOf(
    // For server components `muiName` is avaialble in element.type._payload.value.muiName
    // relevant info - https://github.com/facebook/react/blob/2807d781a08db8e9873687fccc25c0f12b4fb3d4/packages/react/src/ReactLazy.js#L45
    // eslint-disable-next-line no-underscore-dangle
    e.type.muiName ?? ((i = (r = (o = e.type) == null ? void 0 : o._payload) == null ? void 0 : r.value) == null ? void 0 : i.muiName)
  ) !== -1;
}
function Ge(e) {
  return e && e.ownerDocument || document;
}
function yt(e) {
  return Ge(e).defaultView || window;
}
function ki(e, t) {
  typeof e == "function" ? e(t) : e && (e.current = t);
}
let Ri = 0;
function eu(e) {
  const [t, o] = h.useState(e), r = e || t;
  return h.useEffect(() => {
    t == null && (Ri += 1, o(`mui-${Ri}`));
  }, [t]), r;
}
const tu = {
  ...h
}, Fi = tu.useId;
function Wo(e) {
  if (Fi !== void 0) {
    const t = Fi();
    return e ?? t;
  }
  return eu(e);
}
function Ka(e, t, o, r, i) {
  if (process.env.NODE_ENV === "production")
    return null;
  const a = i || t;
  return typeof e[t] < "u" ? new Error(`The prop \`${a}\` is not supported. Please remove it.`) : null;
}
function Ur({
  controlled: e,
  default: t,
  name: o,
  state: r = "value"
}) {
  const {
    current: i
  } = h.useRef(e !== void 0), [a, l] = h.useState(t), s = i ? e : a;
  if (process.env.NODE_ENV !== "production") {
    h.useEffect(() => {
      i !== (e !== void 0) && console.error([`MUI: A component is changing the ${i ? "" : "un"}controlled ${r} state of ${o} to be ${i ? "un" : ""}controlled.`, "Elements should not switch from uncontrolled to controlled (or vice versa).", `Decide between using a controlled or uncontrolled ${o} element for the lifetime of the component.`, "The nature of the state is determined during the first render. It's considered controlled if the value is not `undefined`.", "More info: https://fb.me/react-controlled-components"].join(`
`));
    }, [r, o, e]);
    const {
      current: u
    } = h.useRef(t);
    h.useEffect(() => {
      !i && !Object.is(u, t) && console.error([`MUI: A component is changing the default ${r} state of an uncontrolled ${o} after being initialized. To suppress this warning opt to use a controlled ${o}.`].join(`
`));
    }, [JSON.stringify(t)]);
  }
  const c = h.useCallback((u) => {
    i || l(u);
  }, []);
  return [s, c];
}
function nt(e) {
  const t = h.useRef(e);
  return kt(() => {
    t.current = e;
  }), h.useRef((...o) => (
    // @ts-expect-error hide `this`
    (0, t.current)(...o)
  )).current;
}
function Ne(...e) {
  const t = h.useRef(void 0), o = h.useCallback((r) => {
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
  return h.useMemo(() => e.every((r) => r == null) ? null : (r) => {
    t.current && (t.current(), t.current = void 0), r != null && (t.current = o(r));
  }, e);
}
const Bi = {};
function Ga(e, t) {
  const o = h.useRef(Bi);
  return o.current === Bi && (o.current = e(t)), o;
}
const ou = [];
function nu(e) {
  h.useEffect(e, ou);
}
class jn {
  constructor() {
    yo(this, "currentId", null);
    yo(this, "clear", () => {
      this.currentId !== null && (clearTimeout(this.currentId), this.currentId = null);
    });
    yo(this, "disposeEffect", () => this.clear);
  }
  static create() {
    return new jn();
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
function no() {
  const e = Ga(jn.create).current;
  return nu(e.disposeEffect), e;
}
function bn(e) {
  try {
    return e.matches(":focus-visible");
  } catch {
    process.env.NODE_ENV !== "production" && !/jsdom/.test(window.navigator.userAgent) && console.warn(["MUI: The `:focus-visible` pseudo class is not supported in this browser.", "Some components rely on this feature to work properly."].join(`
`));
  }
  return !1;
}
function Ya(e = window) {
  const t = e.document.documentElement.clientWidth;
  return e.innerWidth - t;
}
function ru(e) {
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
function qa(e, t, o, r) {
  const i = e[t];
  if (i == null || !Number.isInteger(i)) {
    const a = ru(i);
    return new RangeError(`Invalid ${r} \`${t}\` of type \`${a}\` supplied to \`${o}\`, expected \`integer\`.`);
  }
  return null;
}
function Xa(e, t, ...o) {
  return e[t] === void 0 ? null : qa(e, t, ...o);
}
function vr() {
  return null;
}
Xa.isRequired = qa;
vr.isRequired = vr;
const Ja = process.env.NODE_ENV === "production" ? vr : Xa;
function pe(e, t, o = void 0) {
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
function iu(e) {
  return typeof e == "string";
}
function Za(e, t, o) {
  return e === void 0 || iu(e) ? t : {
    ...t,
    ownerState: {
      ...t.ownerState,
      ...o
    }
  };
}
function _a(e, t = []) {
  if (e === void 0)
    return {};
  const o = {};
  return Object.keys(e).filter((r) => r.match(/^on[A-Z]/) && typeof e[r] == "function" && !t.includes(r)).forEach((r) => {
    o[r] = e[r];
  }), o;
}
function Mi(e) {
  if (e === void 0)
    return {};
  const t = {};
  return Object.keys(e).filter((o) => !(o.match(/^on[A-Z]/) && typeof e[o] == "function")).forEach((o) => {
    t[o] = e[o];
  }), t;
}
function es(e) {
  const {
    getSlotProps: t,
    additionalProps: o,
    externalSlotProps: r,
    externalForwardedProps: i,
    className: a
  } = e;
  if (!t) {
    const b = q(o == null ? void 0 : o.className, a, i == null ? void 0 : i.className, r == null ? void 0 : r.className), v = {
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
  const l = _a({
    ...i,
    ...r
  }), s = Mi(r), c = Mi(i), u = t(l), d = q(u == null ? void 0 : u.className, o == null ? void 0 : o.className, a, i == null ? void 0 : i.className, r == null ? void 0 : r.className), f = {
    ...u == null ? void 0 : u.style,
    ...o == null ? void 0 : o.style,
    ...i == null ? void 0 : i.style,
    ...r == null ? void 0 : r.style
  }, g = {
    ...u,
    ...o,
    ...c,
    ...s
  };
  return d.length > 0 && (g.className = d), Object.keys(f).length > 0 && (g.style = f), {
    props: g,
    internalRef: u.ref
  };
}
function ts(e, t, o) {
  return typeof e == "function" ? e(t, o) : e;
}
function so(e) {
  var f;
  const {
    elementType: t,
    externalSlotProps: o,
    ownerState: r,
    skipResolvingSlotProps: i = !1,
    ...a
  } = e, l = i ? {} : ts(o, r), {
    props: s,
    internalRef: c
  } = es({
    ...a,
    externalSlotProps: l
  }), u = Ne(c, l == null ? void 0 : l.ref, (f = e.additionalProps) == null ? void 0 : f.ref);
  return Za(t, {
    ...s,
    ref: u
  }, r);
}
function Ho(e) {
  var t;
  return parseInt(h.version, 10) >= 19 ? ((t = e == null ? void 0 : e.props) == null ? void 0 : t.ref) || null : (e == null ? void 0 : e.ref) || null;
}
const au = /* @__PURE__ */ h.createContext();
process.env.NODE_ENV !== "production" && (n.node, n.bool);
const Qo = () => h.useContext(au) ?? !1, su = /* @__PURE__ */ h.createContext(void 0);
process.env.NODE_ENV !== "production" && (n.node, n.object);
function lu(e) {
  const {
    theme: t,
    name: o,
    props: r
  } = e;
  if (!t || !t.components || !t.components[o])
    return r;
  const i = t.components[o];
  return i.defaultProps ? Io(i.defaultProps, r) : !i.styleOverrides && !i.variants ? Io(i, r) : r;
}
function cu({
  props: e,
  name: t
}) {
  const o = h.useContext(su);
  return lu({
    props: e,
    name: t,
    theme: {
      components: o
    }
  });
}
const Ii = {
  theme: void 0
};
function uu(e) {
  let t, o;
  return function(i) {
    let a = t;
    return (a === void 0 || i.theme !== o) && (Ii.theme = i.theme, a = za(e(Ii)), t = a, o = i.theme), a;
  };
}
function pu(e = "") {
  function t(...r) {
    if (!r.length)
      return "";
    const i = r[0];
    return typeof i == "string" && !i.match(/(#|\(|\)|(-?(\d*\.)?\d+)(px|em|%|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc))|^(-?(\d*\.)?\d+)$|(\d+ \d+ \d+)/) ? `, var(--${e ? `${e}-` : ""}${i}${t(...r.slice(1))})` : `, ${i}`;
  }
  return (r, ...i) => `var(--${e ? `${e}-` : ""}${r}${t(...i)})`;
}
const Pi = (e, t, o, r = []) => {
  let i = e;
  t.forEach((a, l) => {
    l === t.length - 1 ? Array.isArray(i) ? i[Number(a)] = o : i && typeof i == "object" && (i[a] = o) : i && typeof i == "object" && (i[a] || (i[a] = r.includes(a) ? [] : {}), i = i[a]);
  });
}, du = (e, t, o) => {
  function r(i, a = [], l = []) {
    Object.entries(i).forEach(([s, c]) => {
      (!o || o && !o([...a, s])) && c != null && (typeof c == "object" && Object.keys(c).length > 0 ? r(c, [...a, s], Array.isArray(c) ? [...l, s] : l) : t([...a, s], c, l));
    });
  }
  r(e);
}, fu = (e, t) => typeof t == "number" ? ["lineHeight", "fontWeight", "opacity", "zIndex"].some((r) => e.includes(r)) || e[e.length - 1].toLowerCase().includes("opacity") ? t : `${t}px` : t;
function ar(e, t) {
  const {
    prefix: o,
    shouldSkipGeneratingVar: r
  } = t || {}, i = {}, a = {}, l = {};
  return du(
    e,
    (s, c, u) => {
      if ((typeof c == "string" || typeof c == "number") && (!r || !r(s, c))) {
        const d = `--${o ? `${o}-` : ""}${s.join("-")}`, f = fu(s, c);
        Object.assign(i, {
          [d]: f
        }), Pi(a, s, `var(${d})`, u), Pi(l, s, `var(${d}, ${f})`, u);
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
function gu(e, t = {}) {
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
  } = ar(c, t);
  let g = f;
  const b = {}, {
    [s]: v,
    ...y
  } = a;
  if (Object.entries(y || {}).forEach(([w, m]) => {
    const {
      vars: E,
      css: O,
      varsWithDefaults: M
    } = ar(m, t);
    g = Ke(g, M), b[w] = {
      css: O,
      vars: E
    };
  }), v) {
    const {
      css: w,
      vars: m,
      varsWithDefaults: E
    } = ar(v, t);
    g = Ke(g, E), b[s] = {
      css: w,
      vars: m
    };
  }
  function x(w, m) {
    var O, M;
    let E = i;
    if (i === "class" && (E = ".%s"), i === "data" && (E = "[data-%s]"), i != null && i.startsWith("data-") && !i.includes("%s") && (E = `[${i}="%s"]`), w) {
      if (E === "media")
        return e.defaultColorScheme === w ? ":root" : {
          [`@media (prefers-color-scheme: ${((M = (O = a[w]) == null ? void 0 : O.palette) == null ? void 0 : M.mode) || w})`]: {
            ":root": m
          }
        };
      if (E)
        return e.defaultColorScheme === w ? `:root, ${E.replace("%s", String(w))}` : E.replace("%s", String(w));
    }
    return ":root";
  }
  return {
    vars: g,
    generateThemeVars: () => {
      let w = {
        ...u
      };
      return Object.entries(b).forEach(([, {
        vars: m
      }]) => {
        w = Ke(w, m);
      }), w;
    },
    generateStyleSheets: () => {
      var D, $;
      const w = [], m = e.defaultColorScheme || "light";
      function E(p, A) {
        Object.keys(A).length && w.push(typeof p == "string" ? {
          [p]: {
            ...A
          }
        } : p);
      }
      E(o(void 0, {
        ...d
      }), d);
      const {
        [m]: O,
        ...M
      } = b;
      if (O) {
        const {
          css: p
        } = O, A = ($ = (D = a[m]) == null ? void 0 : D.palette) == null ? void 0 : $.mode, I = !r && A ? {
          colorScheme: A,
          ...p
        } : {
          ...p
        };
        E(o(m, {
          ...I
        }), I);
      }
      return Object.entries(M).forEach(([p, {
        css: A
      }]) => {
        var N, P;
        const I = (P = (N = a[p]) == null ? void 0 : N.palette) == null ? void 0 : P.mode, B = !r && I ? {
          colorScheme: I,
          ...A
        } : {
          ...A
        };
        E(o(p, {
          ...B
        }), B);
      }), w;
    }
  };
}
function hu(e) {
  return function(o) {
    return e === "media" ? (process.env.NODE_ENV !== "production" && o !== "light" && o !== "dark" && console.error(`MUI: @media (prefers-color-scheme) supports only 'light' or 'dark', but receive '${o}'.`), `@media (prefers-color-scheme: ${o})`) : e ? e.startsWith("data-") && !e.includes("%s") ? `[${e}="${o}"] &` : e === "class" ? `.${o} &` : e === "data" ? `[data-${o}] &` : `${e.replace("%s", o)} &` : "&";
  };
}
const Po = {
  black: "#000",
  white: "#fff"
}, bu = {
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
}, Xt = {
  50: "#f3e5f5",
  200: "#ce93d8",
  300: "#ba68c8",
  400: "#ab47bc",
  500: "#9c27b0",
  700: "#7b1fa2"
}, Jt = {
  300: "#e57373",
  400: "#ef5350",
  500: "#f44336",
  700: "#d32f2f",
  800: "#c62828"
}, vo = {
  300: "#ffb74d",
  400: "#ffa726",
  500: "#ff9800",
  700: "#f57c00",
  900: "#e65100"
}, Zt = {
  50: "#e3f2fd",
  200: "#90caf9",
  400: "#42a5f5",
  700: "#1976d2",
  800: "#1565c0"
}, _t = {
  300: "#4fc3f7",
  400: "#29b6f6",
  500: "#03a9f4",
  700: "#0288d1",
  900: "#01579b"
}, eo = {
  300: "#81c784",
  400: "#66bb6a",
  500: "#4caf50",
  700: "#388e3c",
  800: "#2e7d32",
  900: "#1b5e20"
};
function os() {
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
      paper: Po.white,
      default: Po.white
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
const mu = os();
function ns() {
  return {
    text: {
      primary: Po.white,
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
      active: Po.white,
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
const Di = ns();
function Ni(e, t, o, r) {
  const i = r.light || r, a = r.dark || r * 1.5;
  e[t] || (e.hasOwnProperty(o) ? e[t] = e[o] : t === "light" ? e.light = ao(e.main, i) : t === "dark" && (e.dark = io(e.main, a)));
}
function yu(e = "light") {
  return e === "dark" ? {
    main: Zt[200],
    light: Zt[50],
    dark: Zt[400]
  } : {
    main: Zt[700],
    light: Zt[400],
    dark: Zt[800]
  };
}
function vu(e = "light") {
  return e === "dark" ? {
    main: Xt[200],
    light: Xt[50],
    dark: Xt[400]
  } : {
    main: Xt[500],
    light: Xt[300],
    dark: Xt[700]
  };
}
function Cu(e = "light") {
  return e === "dark" ? {
    main: Jt[500],
    light: Jt[300],
    dark: Jt[700]
  } : {
    main: Jt[700],
    light: Jt[400],
    dark: Jt[800]
  };
}
function xu(e = "light") {
  return e === "dark" ? {
    main: _t[400],
    light: _t[300],
    dark: _t[700]
  } : {
    main: _t[700],
    light: _t[500],
    dark: _t[900]
  };
}
function wu(e = "light") {
  return e === "dark" ? {
    main: eo[400],
    light: eo[300],
    dark: eo[700]
  } : {
    main: eo[800],
    light: eo[500],
    dark: eo[900]
  };
}
function Eu(e = "light") {
  return e === "dark" ? {
    main: vo[400],
    light: vo[300],
    dark: vo[700]
  } : {
    main: "#ed6c02",
    // closest to orange[800] that pass 3:1.
    light: vo[500],
    dark: vo[900]
  };
}
function Wr(e) {
  const {
    mode: t = "light",
    contrastThreshold: o = 3,
    tonalOffset: r = 0.2,
    ...i
  } = e, a = e.primary || yu(t), l = e.secondary || vu(t), s = e.error || Cu(t), c = e.info || xu(t), u = e.success || wu(t), d = e.warning || Eu(t);
  function f(y) {
    const x = Ai(y, Di.text.primary) >= o ? Di.text.primary : mu.text.primary;
    if (process.env.NODE_ENV !== "production") {
      const C = Ai(y, x);
      C < 3 && console.error([`MUI: The contrast ratio of ${C}:1 for ${x} on ${y}`, "falls below the WCAG recommended absolute minimum contrast ratio of 3:1.", "https://www.w3.org/TR/2008/REC-WCAG20-20081211/#visual-audio-contrast-contrast"].join(`
`));
    }
    return x;
  }
  const g = ({
    color: y,
    name: x,
    mainShade: C = 500,
    lightShade: T = 300,
    darkShade: w = 700
  }) => {
    if (y = {
      ...y
    }, !y.main && y[C] && (y.main = y[C]), !y.hasOwnProperty("main"))
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The color${x ? ` (${x})` : ""} provided to augmentColor(color) is invalid.
The color object needs to have a \`main\` property or a \`${C}\` property.` : At(11, x ? ` (${x})` : "", C));
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
} });` : At(12, x ? ` (${x})` : "", JSON.stringify(y.main)));
    return Ni(y, "light", T, r), Ni(y, "dark", w, r), y.contrastText || (y.contrastText = f(y.main)), y;
  };
  let b;
  return t === "light" ? b = os() : t === "dark" && (b = ns()), process.env.NODE_ENV !== "production" && (b || console.error(`MUI: The palette mode \`${t}\` is not supported.`)), Ke({
    // A collection of common colors.
    common: {
      ...Po
    },
    // prevent mutable object.
    // The palette mode, can be light or dark.
    mode: t,
    // The colors used to represent primary interface elements for a user.
    primary: g({
      color: a,
      name: "primary"
    }),
    // The colors used to represent secondary interface elements for a user.
    secondary: g({
      color: l,
      name: "secondary",
      mainShade: "A400",
      lightShade: "A200",
      darkShade: "A700"
    }),
    // The colors used to represent interface elements that the user should be made aware of.
    error: g({
      color: s,
      name: "error"
    }),
    // The colors used to represent potentially dangerous actions or important messages.
    warning: g({
      color: d,
      name: "warning"
    }),
    // The colors used to present information to the user that is neutral and not necessarily important.
    info: g({
      color: c,
      name: "info"
    }),
    // The colors used to indicate the successful completion of an action that user triggered.
    success: g({
      color: u,
      name: "success"
    }),
    // The grey colors.
    grey: bu,
    // Used by `getContrastText()` to maximize the contrast between
    // the background and the text.
    contrastThreshold: o,
    // Takes a background color and returns the text color that maximizes the contrast.
    getContrastText: f,
    // Generate a rich color object.
    augmentColor: g,
    // Used by the functions below to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: r,
    // The light and dark mode object.
    ...b
  }, i);
}
function Su(e) {
  const t = {};
  return Object.entries(e).forEach((r) => {
    const [i, a] = r;
    typeof a == "object" && (t[i] = `${a.fontStyle ? `${a.fontStyle} ` : ""}${a.fontVariant ? `${a.fontVariant} ` : ""}${a.fontWeight ? `${a.fontWeight} ` : ""}${a.fontStretch ? `${a.fontStretch} ` : ""}${a.fontSize || ""}${a.lineHeight ? `/${a.lineHeight} ` : ""}${a.fontFamily || ""}`);
  }), t;
}
function Tu(e, t) {
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
function Ou(e) {
  return Math.round(e * 1e5) / 1e5;
}
const $i = {
  textTransform: "uppercase"
}, ji = '"Roboto", "Helvetica", "Arial", sans-serif';
function Au(e, t) {
  const {
    fontFamily: o = ji,
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
  const g = r / 14, b = d || ((x) => `${x / c * g}rem`), v = (x, C, T, w, m) => ({
    fontFamily: o,
    fontWeight: x,
    fontSize: b(C),
    // Unitless following https://meyerweb.com/eric/thoughts/2006/02/08/unitless-line-heights/
    lineHeight: T,
    // The letter spacing was designed for the Roboto font-family. Using the same letter-spacing
    // across font-families can cause issues with the kerning.
    ...o === ji ? {
      letterSpacing: `${Ou(w / C)}em`
    } : {},
    ...m,
    ...u
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
    button: v(l, 14, 1.75, 0.4, $i),
    caption: v(a, 12, 1.66, 0.4),
    overline: v(a, 12, 2.66, 1, $i),
    // TODO v6: Remove handling of 'inherit' variant from the theme as it is already handled in Material UI's Typography component. Also, remember to remove the associated types.
    inherit: {
      fontFamily: "inherit",
      fontWeight: "inherit",
      fontSize: "inherit",
      lineHeight: "inherit",
      letterSpacing: "inherit"
    }
  };
  return Ke({
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
const ku = 0.2, Ru = 0.14, Fu = 0.12;
function Ee(...e) {
  return [`${e[0]}px ${e[1]}px ${e[2]}px ${e[3]}px rgba(0,0,0,${ku})`, `${e[4]}px ${e[5]}px ${e[6]}px ${e[7]}px rgba(0,0,0,${Ru})`, `${e[8]}px ${e[9]}px ${e[10]}px ${e[11]}px rgba(0,0,0,${Fu})`].join(",");
}
const Bu = ["none", Ee(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0), Ee(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0), Ee(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0), Ee(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0), Ee(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0), Ee(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0), Ee(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1), Ee(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2), Ee(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2), Ee(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3), Ee(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3), Ee(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4), Ee(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4), Ee(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4), Ee(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5), Ee(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5), Ee(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5), Ee(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6), Ee(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6), Ee(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7), Ee(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7), Ee(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7), Ee(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8), Ee(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8)], Mu = {
  // This is the most common easing curve.
  easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
  // Objects enter the screen at full velocity from off-screen and
  // slowly decelerate to a resting point.
  easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
  // Objects leave the screen at full velocity. They do not decelerate when off-screen.
  easeIn: "cubic-bezier(0.4, 0, 1, 1)",
  // The sharp curve is used by objects that may return to the screen at any time.
  sharp: "cubic-bezier(0.4, 0, 0.6, 1)"
}, Iu = {
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
function zi(e) {
  return `${Math.round(e)}ms`;
}
function Pu(e) {
  if (!e)
    return 0;
  const t = e / 36;
  return Math.min(Math.round((4 + 15 * t ** 0.25 + t / 5) * 10), 3e3);
}
function Du(e) {
  const t = {
    ...Mu,
    ...e.easing
  }, o = {
    ...Iu,
    ...e.duration
  };
  return {
    getAutoHeightDuration: Pu,
    create: (i = ["all"], a = {}) => {
      const {
        duration: l = o.standard,
        easing: s = t.easeInOut,
        delay: c = 0,
        ...u
      } = a;
      if (process.env.NODE_ENV !== "production") {
        const d = (g) => typeof g == "string", f = (g) => !Number.isNaN(parseFloat(g));
        !d(i) && !Array.isArray(i) && console.error('MUI: Argument "props" must be a string or Array.'), !f(l) && !d(l) && console.error(`MUI: Argument "duration" must be a number or a string but found ${l}.`), d(s) || console.error('MUI: Argument "easing" must be a string.'), !f(c) && !d(c) && console.error('MUI: Argument "delay" must be a number or a string.'), typeof a != "object" && console.error(["MUI: Secong argument of transition.create must be an object.", "Arguments should be either `create('prop1', options)` or `create(['prop1', 'prop2'], options)`"].join(`
`)), Object.keys(u).length !== 0 && console.error(`MUI: Unrecognized argument(s) [${Object.keys(u).join(",")}].`);
      }
      return (Array.isArray(i) ? i : [i]).map((d) => `${d} ${typeof l == "string" ? l : zi(l)} ${s} ${typeof c == "string" ? c : zi(c)}`).join(",");
    },
    ...e,
    easing: t,
    duration: o
  };
}
const Nu = {
  mobileStepper: 1e3,
  fab: 1050,
  speedDial: 1050,
  appBar: 1100,
  drawer: 1200,
  modal: 1300,
  snackbar: 1400,
  tooltip: 1500
};
function $u(e) {
  return st(e) || typeof e > "u" || typeof e == "string" || typeof e == "boolean" || typeof e == "number" || Array.isArray(e);
}
function rs(e = {}) {
  const t = {
    ...e
  };
  function o(r) {
    const i = Object.entries(r);
    for (let a = 0; a < i.length; a++) {
      const [l, s] = i[a];
      !$u(s) || l.startsWith("unstable_") ? delete r[l] : st(s) && (r[l] = {
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
function Cr(e = {}, ...t) {
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
    throw new Error(process.env.NODE_ENV !== "production" ? "MUI: `vars` is a private field used for CSS variables support.\nPlease use another name or follow the [docs](https://mui.com/material-ui/customization/css-theme-variables/usage/) to enable the feature." : At(20));
  const d = Wr(a), f = zr(e);
  let g = Ke(f, {
    mixins: Tu(f.breakpoints, r),
    palette: d,
    // Don't use [...shadows] until you've verified its transpiled code is not invoking the iterator protocol.
    shadows: Bu.slice(),
    typography: Au(d, s),
    transitions: Du(l),
    zIndex: {
      ...Nu
    }
  });
  if (g = Ke(g, u), g = t.reduce((b, v) => Ke(b, v), g), process.env.NODE_ENV !== "production") {
    const b = ["active", "checked", "completed", "disabled", "error", "expanded", "focused", "focusVisible", "required", "selected"], v = (y, x) => {
      let C;
      for (C in y) {
        const T = y[C];
        if (b.includes(C) && Object.keys(T).length > 0) {
          if (process.env.NODE_ENV !== "production") {
            const w = ce("", C);
            console.error([`MUI: The \`${x}\` component increases the CSS specificity of the \`${C}\` internal state.`, "You can not override it like this: ", JSON.stringify(y, null, 2), "", `Instead, you need to use the '&.${w}' syntax:`, JSON.stringify({
              root: {
                [`&.${w}`]: T
              }
            }, null, 2), "", "https://mui.com/r/state-classes-guide"].join(`
`));
          }
          y[C] = {};
        }
      }
    };
    Object.keys(g.components).forEach((y) => {
      const x = g.components[y].styleOverrides;
      x && y.startsWith("Mui") && v(x, y);
    });
  }
  return g.unstable_sxConfig = {
    ...Uo,
    ...u == null ? void 0 : u.unstable_sxConfig
  }, g.unstable_sx = function(v) {
    return Lt({
      sx: v,
      theme: this
    });
  }, g.toRuntimeSource = rs, g;
}
function xr(e) {
  let t;
  return e < 1 ? t = 5.11916 * e ** 2 : t = 4.5 * Math.log(e + 1) + 2, Math.round(t * 10) / 1e3;
}
const ju = [...Array(25)].map((e, t) => {
  if (t === 0)
    return "none";
  const o = xr(t);
  return `linear-gradient(rgba(255 255 255 / ${o}), rgba(255 255 255 / ${o}))`;
});
function is(e) {
  return {
    inputPlaceholder: e === "dark" ? 0.5 : 0.42,
    inputUnderline: e === "dark" ? 0.7 : 0.42,
    switchTrackDisabled: e === "dark" ? 0.2 : 0.12,
    switchTrack: e === "dark" ? 0.3 : 0.38
  };
}
function as(e) {
  return e === "dark" ? ju : [];
}
function zu(e) {
  const {
    palette: t = {
      mode: "light"
    },
    // need to cast to avoid module augmentation test
    opacity: o,
    overlays: r,
    ...i
  } = e, a = Wr(t);
  return {
    palette: a,
    opacity: {
      ...is(a.mode),
      ...o
    },
    overlays: r || as(a.mode),
    ...i
  };
}
function Vu(e) {
  var t;
  return !!e[0].match(/(cssVarPrefix|colorSchemeSelector|rootSelector|typography|mixins|breakpoints|direction|transitions)/) || !!e[0].match(/sxConfig$/) || // ends with sxConfig
  e[0] === "palette" && !!((t = e[1]) != null && t.match(/(mode|contrastThreshold|tonalOffset)/));
}
const Lu = (e) => [...[...Array(25)].map((t, o) => `--${e ? `${e}-` : ""}overlays-${o}`), `--${e ? `${e}-` : ""}palette-AppBar-darkBg`, `--${e ? `${e}-` : ""}palette-AppBar-darkColor`], Uu = (e) => (t, o) => {
  const r = e.rootSelector || ":root", i = e.colorSchemeSelector;
  let a = i;
  if (i === "class" && (a = ".%s"), i === "data" && (a = "[data-%s]"), i != null && i.startsWith("data-") && !i.includes("%s") && (a = `[${i}="%s"]`), e.defaultColorScheme === t) {
    if (t === "dark") {
      const l = {};
      return Lu(e.cssVarPrefix).forEach((s) => {
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
function Wu(e, t) {
  t.forEach((o) => {
    e[o] || (e[o] = {});
  });
}
function F(e, t, o) {
  !e[t] && o && (e[t] = o);
}
function To(e) {
  return typeof e != "string" || !e.startsWith("hsl") ? e : Ua(e);
}
function gt(e, t) {
  `${t}Channel` in e || (e[`${t}Channel`] = So(To(e[t]), `MUI: Can't create \`palette.${t}Channel\` because \`palette.${t}\` is not one of these formats: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color().
To suppress this warning, you need to explicitly provide the \`palette.${t}Channel\` as a string (in rgb format, for example "12 12 12") or undefined if you want to remove the channel token.`));
}
function Hu(e) {
  return typeof e == "number" ? `${e}px` : typeof e == "string" || typeof e == "function" || Array.isArray(e) ? e : "8px";
}
const at = (e) => {
  try {
    return e();
  } catch {
  }
}, Qu = (e = "mui") => pu(e);
function sr(e, t, o, r) {
  if (!t)
    return;
  t = t === !0 ? {} : t;
  const i = r === "dark" ? "dark" : "light";
  if (!o) {
    e[r] = zu({
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
  } = Cr({
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
      ...is(i),
      ...t == null ? void 0 : t.opacity
    },
    overlays: (t == null ? void 0 : t.overlays) || as(i)
  }, l;
}
function Ku(e = {}, ...t) {
  const {
    colorSchemes: o = {
      light: !0
    },
    defaultColorScheme: r,
    disableCssColorScheme: i = !1,
    cssVarPrefix: a = "mui",
    shouldSkipGeneratingVar: l = Vu,
    colorSchemeSelector: s = o.light && o.dark ? "media" : void 0,
    rootSelector: c = ":root",
    ...u
  } = e, d = Object.keys(o)[0], f = r || (o.light && d !== "light" ? "light" : d), g = Qu(a), {
    [f]: b,
    light: v,
    dark: y,
    ...x
  } = o, C = {
    ...x
  };
  let T = b;
  if ((f === "dark" && !("dark" in o) || f === "light" && !("light" in o)) && (T = !0), !T)
    throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The \`colorSchemes.${f}\` option is either missing or invalid.` : At(21, f));
  const w = sr(C, T, u, f);
  v && !C.light && sr(C, v, void 0, "light"), y && !C.dark && sr(C, y, void 0, "dark");
  let m = {
    defaultColorScheme: f,
    ...w,
    cssVarPrefix: a,
    colorSchemeSelector: s,
    rootSelector: c,
    getCssVar: g,
    colorSchemes: C,
    font: {
      ...Su(w.typography),
      ...w.font
    },
    spacing: Hu(u.spacing)
  };
  Object.keys(m.colorSchemes).forEach(($) => {
    const p = m.colorSchemes[$].palette, A = (I) => {
      const B = I.split("-"), N = B[1], P = B[2];
      return g(I, p[N][P]);
    };
    if (p.mode === "light" && (F(p.common, "background", "#fff"), F(p.common, "onBackground", "#000")), p.mode === "dark" && (F(p.common, "background", "#000"), F(p.common, "onBackground", "#fff")), Wu(p, ["Alert", "AppBar", "Avatar", "Button", "Chip", "FilledInput", "LinearProgress", "Skeleton", "Slider", "SnackbarContent", "SpeedDialAction", "StepConnector", "StepContent", "Switch", "TableCell", "Tooltip"]), p.mode === "light") {
      F(p.Alert, "errorColor", Ce(p.error.light, 0.6)), F(p.Alert, "infoColor", Ce(p.info.light, 0.6)), F(p.Alert, "successColor", Ce(p.success.light, 0.6)), F(p.Alert, "warningColor", Ce(p.warning.light, 0.6)), F(p.Alert, "errorFilledBg", A("palette-error-main")), F(p.Alert, "infoFilledBg", A("palette-info-main")), F(p.Alert, "successFilledBg", A("palette-success-main")), F(p.Alert, "warningFilledBg", A("palette-warning-main")), F(p.Alert, "errorFilledColor", at(() => p.getContrastText(p.error.main))), F(p.Alert, "infoFilledColor", at(() => p.getContrastText(p.info.main))), F(p.Alert, "successFilledColor", at(() => p.getContrastText(p.success.main))), F(p.Alert, "warningFilledColor", at(() => p.getContrastText(p.warning.main))), F(p.Alert, "errorStandardBg", xe(p.error.light, 0.9)), F(p.Alert, "infoStandardBg", xe(p.info.light, 0.9)), F(p.Alert, "successStandardBg", xe(p.success.light, 0.9)), F(p.Alert, "warningStandardBg", xe(p.warning.light, 0.9)), F(p.Alert, "errorIconColor", A("palette-error-main")), F(p.Alert, "infoIconColor", A("palette-info-main")), F(p.Alert, "successIconColor", A("palette-success-main")), F(p.Alert, "warningIconColor", A("palette-warning-main")), F(p.AppBar, "defaultBg", A("palette-grey-100")), F(p.Avatar, "defaultBg", A("palette-grey-400")), F(p.Button, "inheritContainedBg", A("palette-grey-300")), F(p.Button, "inheritContainedHoverBg", A("palette-grey-A100")), F(p.Chip, "defaultBorder", A("palette-grey-400")), F(p.Chip, "defaultAvatarColor", A("palette-grey-700")), F(p.Chip, "defaultIconColor", A("palette-grey-700")), F(p.FilledInput, "bg", "rgba(0, 0, 0, 0.06)"), F(p.FilledInput, "hoverBg", "rgba(0, 0, 0, 0.09)"), F(p.FilledInput, "disabledBg", "rgba(0, 0, 0, 0.12)"), F(p.LinearProgress, "primaryBg", xe(p.primary.main, 0.62)), F(p.LinearProgress, "secondaryBg", xe(p.secondary.main, 0.62)), F(p.LinearProgress, "errorBg", xe(p.error.main, 0.62)), F(p.LinearProgress, "infoBg", xe(p.info.main, 0.62)), F(p.LinearProgress, "successBg", xe(p.success.main, 0.62)), F(p.LinearProgress, "warningBg", xe(p.warning.main, 0.62)), F(p.Skeleton, "bg", `rgba(${A("palette-text-primaryChannel")} / 0.11)`), F(p.Slider, "primaryTrack", xe(p.primary.main, 0.62)), F(p.Slider, "secondaryTrack", xe(p.secondary.main, 0.62)), F(p.Slider, "errorTrack", xe(p.error.main, 0.62)), F(p.Slider, "infoTrack", xe(p.info.main, 0.62)), F(p.Slider, "successTrack", xe(p.success.main, 0.62)), F(p.Slider, "warningTrack", xe(p.warning.main, 0.62));
      const I = en(p.background.default, 0.8);
      F(p.SnackbarContent, "bg", I), F(p.SnackbarContent, "color", at(() => p.getContrastText(I))), F(p.SpeedDialAction, "fabHoverBg", en(p.background.paper, 0.15)), F(p.StepConnector, "border", A("palette-grey-400")), F(p.StepContent, "border", A("palette-grey-400")), F(p.Switch, "defaultColor", A("palette-common-white")), F(p.Switch, "defaultDisabledColor", A("palette-grey-100")), F(p.Switch, "primaryDisabledColor", xe(p.primary.main, 0.62)), F(p.Switch, "secondaryDisabledColor", xe(p.secondary.main, 0.62)), F(p.Switch, "errorDisabledColor", xe(p.error.main, 0.62)), F(p.Switch, "infoDisabledColor", xe(p.info.main, 0.62)), F(p.Switch, "successDisabledColor", xe(p.success.main, 0.62)), F(p.Switch, "warningDisabledColor", xe(p.warning.main, 0.62)), F(p.TableCell, "border", xe(_o(p.divider, 1), 0.88)), F(p.Tooltip, "bg", _o(p.grey[700], 0.92));
    }
    if (p.mode === "dark") {
      F(p.Alert, "errorColor", xe(p.error.light, 0.6)), F(p.Alert, "infoColor", xe(p.info.light, 0.6)), F(p.Alert, "successColor", xe(p.success.light, 0.6)), F(p.Alert, "warningColor", xe(p.warning.light, 0.6)), F(p.Alert, "errorFilledBg", A("palette-error-dark")), F(p.Alert, "infoFilledBg", A("palette-info-dark")), F(p.Alert, "successFilledBg", A("palette-success-dark")), F(p.Alert, "warningFilledBg", A("palette-warning-dark")), F(p.Alert, "errorFilledColor", at(() => p.getContrastText(p.error.dark))), F(p.Alert, "infoFilledColor", at(() => p.getContrastText(p.info.dark))), F(p.Alert, "successFilledColor", at(() => p.getContrastText(p.success.dark))), F(p.Alert, "warningFilledColor", at(() => p.getContrastText(p.warning.dark))), F(p.Alert, "errorStandardBg", Ce(p.error.light, 0.9)), F(p.Alert, "infoStandardBg", Ce(p.info.light, 0.9)), F(p.Alert, "successStandardBg", Ce(p.success.light, 0.9)), F(p.Alert, "warningStandardBg", Ce(p.warning.light, 0.9)), F(p.Alert, "errorIconColor", A("palette-error-main")), F(p.Alert, "infoIconColor", A("palette-info-main")), F(p.Alert, "successIconColor", A("palette-success-main")), F(p.Alert, "warningIconColor", A("palette-warning-main")), F(p.AppBar, "defaultBg", A("palette-grey-900")), F(p.AppBar, "darkBg", A("palette-background-paper")), F(p.AppBar, "darkColor", A("palette-text-primary")), F(p.Avatar, "defaultBg", A("palette-grey-600")), F(p.Button, "inheritContainedBg", A("palette-grey-800")), F(p.Button, "inheritContainedHoverBg", A("palette-grey-700")), F(p.Chip, "defaultBorder", A("palette-grey-700")), F(p.Chip, "defaultAvatarColor", A("palette-grey-300")), F(p.Chip, "defaultIconColor", A("palette-grey-300")), F(p.FilledInput, "bg", "rgba(255, 255, 255, 0.09)"), F(p.FilledInput, "hoverBg", "rgba(255, 255, 255, 0.13)"), F(p.FilledInput, "disabledBg", "rgba(255, 255, 255, 0.12)"), F(p.LinearProgress, "primaryBg", Ce(p.primary.main, 0.5)), F(p.LinearProgress, "secondaryBg", Ce(p.secondary.main, 0.5)), F(p.LinearProgress, "errorBg", Ce(p.error.main, 0.5)), F(p.LinearProgress, "infoBg", Ce(p.info.main, 0.5)), F(p.LinearProgress, "successBg", Ce(p.success.main, 0.5)), F(p.LinearProgress, "warningBg", Ce(p.warning.main, 0.5)), F(p.Skeleton, "bg", `rgba(${A("palette-text-primaryChannel")} / 0.13)`), F(p.Slider, "primaryTrack", Ce(p.primary.main, 0.5)), F(p.Slider, "secondaryTrack", Ce(p.secondary.main, 0.5)), F(p.Slider, "errorTrack", Ce(p.error.main, 0.5)), F(p.Slider, "infoTrack", Ce(p.info.main, 0.5)), F(p.Slider, "successTrack", Ce(p.success.main, 0.5)), F(p.Slider, "warningTrack", Ce(p.warning.main, 0.5));
      const I = en(p.background.default, 0.98);
      F(p.SnackbarContent, "bg", I), F(p.SnackbarContent, "color", at(() => p.getContrastText(I))), F(p.SpeedDialAction, "fabHoverBg", en(p.background.paper, 0.15)), F(p.StepConnector, "border", A("palette-grey-600")), F(p.StepContent, "border", A("palette-grey-600")), F(p.Switch, "defaultColor", A("palette-grey-300")), F(p.Switch, "defaultDisabledColor", A("palette-grey-600")), F(p.Switch, "primaryDisabledColor", Ce(p.primary.main, 0.55)), F(p.Switch, "secondaryDisabledColor", Ce(p.secondary.main, 0.55)), F(p.Switch, "errorDisabledColor", Ce(p.error.main, 0.55)), F(p.Switch, "infoDisabledColor", Ce(p.info.main, 0.55)), F(p.Switch, "successDisabledColor", Ce(p.success.main, 0.55)), F(p.Switch, "warningDisabledColor", Ce(p.warning.main, 0.55)), F(p.TableCell, "border", Ce(_o(p.divider, 1), 0.68)), F(p.Tooltip, "bg", _o(p.grey[700], 0.92));
    }
    gt(p.background, "default"), gt(p.background, "paper"), gt(p.common, "background"), gt(p.common, "onBackground"), gt(p, "divider"), Object.keys(p).forEach((I) => {
      const B = p[I];
      I !== "tonalOffset" && B && typeof B == "object" && (B.main && F(p[I], "mainChannel", So(To(B.main))), B.light && F(p[I], "lightChannel", So(To(B.light))), B.dark && F(p[I], "darkChannel", So(To(B.dark))), B.contrastText && F(p[I], "contrastTextChannel", So(To(B.contrastText))), I === "text" && (gt(p[I], "primary"), gt(p[I], "secondary")), I === "action" && (B.active && gt(p[I], "active"), B.selected && gt(p[I], "selected")));
    });
  }), m = t.reduce(($, p) => Ke($, p), m);
  const E = {
    prefix: a,
    disableCssColorScheme: i,
    shouldSkipGeneratingVar: l,
    getSelector: Uu(m)
  }, {
    vars: O,
    generateThemeVars: M,
    generateStyleSheets: D
  } = gu(m, E);
  return m.vars = O, Object.entries(m.colorSchemes[m.defaultColorScheme]).forEach(([$, p]) => {
    m[$] = p;
  }), m.generateThemeVars = M, m.generateStyleSheets = D, m.generateSpacing = function() {
    return Ia(u.spacing, $r(this));
  }, m.getColorSchemeSelector = hu(s), m.spacing = m.generateSpacing(), m.shouldSkipGeneratingVar = l, m.unstable_sxConfig = {
    ...Uo,
    ...u == null ? void 0 : u.unstable_sxConfig
  }, m.unstable_sx = function(p) {
    return Lt({
      sx: p,
      theme: this
    });
  }, m.toRuntimeSource = rs, m;
}
function Vi(e, t, o) {
  e.colorSchemes && o && (e.colorSchemes[t] = {
    ...o !== !0 && o,
    palette: Wr({
      ...o === !0 ? {} : o.palette,
      mode: t
    })
    // cast type to skip module augmentation test
  });
}
function zn(e = {}, ...t) {
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
      return Cr(e, ...t);
    let d = o;
    "palette" in e || u[s] && (u[s] !== !0 ? d = u[s].palette : s === "dark" && (d = {
      mode: "dark"
    }));
    const f = Cr({
      ...e,
      palette: d
    }, ...t);
    return f.defaultColorScheme = s, f.colorSchemes = u, f.palette.mode === "light" && (f.colorSchemes.light = {
      ...u.light !== !0 && u.light,
      palette: f.palette
    }, Vi(f, "dark", u.dark)), f.palette.mode === "dark" && (f.colorSchemes.dark = {
      ...u.dark !== !0 && u.dark,
      palette: f.palette
    }, Vi(f, "light", u.light)), f;
  }
  return !o && !("light" in u) && s === "light" && (u.light = !0), Ku({
    ...l,
    colorSchemes: u,
    defaultColorScheme: s,
    ...typeof r != "boolean" && r
  }, ...t);
}
const ss = zn();
function Ht() {
  const e = Pa(ss);
  return process.env.NODE_ENV !== "production" && h.useDebugValue(e), e[Dr] || e;
}
function Gu(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
const ut = (e) => Gu(e) && e !== "classes", U = Lc({
  themeId: Dr,
  defaultTheme: ss,
  rootShouldForwardProp: ut
}), Ie = {
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
}, tn = {
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
}, ot = ["#373737"], Cm = zn({
  palette: {
    primary: Ie.primary,
    secondary: Ie.secondary,
    tertiary: Ie.tertiary,
    surface: Ie.surface
  }
});
zn({
  palette: {
    primary: tn.primary,
    secondary: tn.secondary,
    tertiary: tn.tertiary,
    surface: tn.surface
  }
});
function Yu() {
  return Da;
}
const de = uu;
process.env.NODE_ENV !== "production" && (n.node, n.object.isRequired);
function fe(e) {
  return cu(e);
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
    ...g
  } = a, b = d[e] || r, v = ts(f[e], i), {
    props: {
      component: y,
      ...x
    },
    internalRef: C
  } = es({
    className: o,
    ...c,
    externalForwardedProps: e === "root" ? g : void 0,
    externalSlotProps: v
  }), T = Ne(C, v == null ? void 0 : v.ref, t.ref), w = e === "root" ? y || u : y, m = Za(b, {
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
  return [b, m];
}
function qu(e) {
  return typeof e.main == "string";
}
function Xu(e, t = []) {
  if (!qu(e))
    return !1;
  for (const o of t)
    if (!e.hasOwnProperty(o) || typeof e[o] != "string")
      return !1;
  return !0;
}
function Be(e = []) {
  return ([, t]) => t && Xu(t, e);
}
function Ju(e) {
  return ce("MuiPaper", e);
}
se("MuiPaper", ["root", "rounded", "outlined", "elevation", "elevation0", "elevation1", "elevation2", "elevation3", "elevation4", "elevation5", "elevation6", "elevation7", "elevation8", "elevation9", "elevation10", "elevation11", "elevation12", "elevation13", "elevation14", "elevation15", "elevation16", "elevation17", "elevation18", "elevation19", "elevation20", "elevation21", "elevation22", "elevation23", "elevation24"]);
const Zu = (e) => {
  const {
    square: t,
    elevation: o,
    variant: r,
    classes: i
  } = e, a = {
    root: ["root", r, !t && "rounded", r === "elevation" && `elevation${o}`]
  };
  return pe(a, Ju, i);
}, _u = U("div", {
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
}))), Ko = /* @__PURE__ */ h.forwardRef(function(t, o) {
  var b;
  const r = fe({
    props: t,
    name: "MuiPaper"
  }), i = Ht(), {
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
  }, g = Zu(f);
  return process.env.NODE_ENV !== "production" && i.shadows[s] === void 0 && console.error([`MUI: The elevation provided <Paper elevation={${s}}> is not available in the theme.`, `Please make sure that \`theme.shadows[${s}]\` is defined.`].join(`
`)), /* @__PURE__ */ S(_u, {
    as: l,
    ownerState: f,
    className: q(g.root, a),
    ref: o,
    ...d,
    style: {
      ...u === "elevation" && {
        "--Paper-shadow": (i.vars || i).shadows[s],
        ...i.vars && {
          "--Paper-overlay": (b = i.vars.overlays) == null ? void 0 : b[s]
        },
        ...!i.vars && i.palette.mode === "dark" && {
          "--Paper-overlay": `linear-gradient(${H("#fff", xr(s))}, ${H("#fff", xr(s))})`
        }
      },
      ...d.style
    }
  });
});
process.env.NODE_ENV !== "production" && (Ko.propTypes = {
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
  elevation: Bt(Ja, (e) => {
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
function ep(e) {
  return ce("MuiAlert", e);
}
const Li = se("MuiAlert", ["root", "action", "icon", "message", "filled", "colorSuccess", "colorInfo", "colorWarning", "colorError", "filledSuccess", "filledInfo", "filledWarning", "filledError", "outlined", "outlinedSuccess", "outlinedInfo", "outlinedWarning", "outlinedError", "standard", "standardSuccess", "standardInfo", "standardWarning", "standardError"]);
function tp(e) {
  return ce("MuiSvgIcon", e);
}
se("MuiSvgIcon", ["root", "colorPrimary", "colorSecondary", "colorAction", "colorError", "colorDisabled", "fontSizeInherit", "fontSizeSmall", "fontSizeMedium", "fontSizeLarge"]);
const op = (e) => {
  const {
    color: t,
    fontSize: o,
    classes: r
  } = e, i = {
    root: ["root", t !== "inherit" && `color${j(t)}`, `fontSize${j(o)}`]
  };
  return pe(i, tp, r);
}, np = U("svg", {
  name: "MuiSvgIcon",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: o
    } = e;
    return [t.root, o.color !== "inherit" && t[`color${j(o.color)}`], t[`fontSize${j(o.fontSize)}`]];
  }
})(de(({
  theme: e
}) => {
  var t, o, r, i, a, l, s, c, u, d, f, g, b, v;
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
        var x, C;
        return {
          props: {
            color: y
          },
          style: {
            color: (C = (x = (e.vars ?? e).palette) == null ? void 0 : x[y]) == null ? void 0 : C.main
          }
        };
      }),
      {
        props: {
          color: "action"
        },
        style: {
          color: (g = (f = (e.vars ?? e).palette) == null ? void 0 : f.action) == null ? void 0 : g.active
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
})), mn = /* @__PURE__ */ h.forwardRef(function(t, o) {
  const r = fe({
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
    viewBox: g = "0 0 24 24",
    ...b
  } = r, v = /* @__PURE__ */ h.isValidElement(i) && i.type === "svg", y = {
    ...r,
    color: l,
    component: s,
    fontSize: c,
    instanceFontSize: t.fontSize,
    inheritViewBox: d,
    viewBox: g,
    hasSvgAsChild: v
  }, x = {};
  d || (x.viewBox = g);
  const C = op(y);
  return /* @__PURE__ */ be(np, {
    as: s,
    className: q(C.root, a),
    focusable: "false",
    color: u,
    "aria-hidden": f ? void 0 : !0,
    role: f ? "img" : void 0,
    ref: o,
    ...x,
    ...b,
    ...v && i.props,
    ownerState: y,
    children: [v ? i.props.children : i, f ? /* @__PURE__ */ S("title", {
      children: f
    }) : null]
  });
});
process.env.NODE_ENV !== "production" && (mn.propTypes = {
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
mn.muiName = "SvgIcon";
function $e(e, t) {
  function o(r, i) {
    return /* @__PURE__ */ S(mn, {
      "data-testid": `${t}Icon`,
      ref: i,
      ...r,
      children: e
    });
  }
  return process.env.NODE_ENV !== "production" && (o.displayName = `${t}Icon`), o.muiName = mn.muiName, /* @__PURE__ */ h.memo(/* @__PURE__ */ h.forwardRef(o));
}
function ls(e, t) {
  if (!e)
    return t;
  if (typeof e == "function" || typeof t == "function")
    return (i) => {
      const a = typeof t == "function" ? t(i) : t, l = typeof e == "function" ? e({
        ...i,
        ...a
      }) : e, s = q(i == null ? void 0 : i.className, a == null ? void 0 : a.className, l == null ? void 0 : l.className);
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
  const o = t, r = q(o == null ? void 0 : o.className, e == null ? void 0 : e.className);
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
class yn {
  constructor() {
    yo(this, "mountEffect", () => {
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
    return new yn();
  }
  static use() {
    const t = Ga(yn.create).current, [o, r] = h.useState(!1);
    return t.shouldMount = o, t.setShouldMount = r, h.useEffect(t.mountEffect, [o]), t;
  }
  mount() {
    return this.mounted || (this.mounted = ip(), this.shouldMount = !0, this.setShouldMount(this.shouldMount)), this.mounted;
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
function rp() {
  return yn.use();
}
function ip() {
  let e, t;
  const o = new Promise((r, i) => {
    e = r, t = i;
  });
  return o.resolve = e, o.reject = t, o;
}
function wr() {
  return wr = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var o = arguments[t];
      for (var r in o) ({}).hasOwnProperty.call(o, r) && (e[r] = o[r]);
    }
    return e;
  }, wr.apply(null, arguments);
}
function cs(e, t) {
  if (e == null) return {};
  var o = {};
  for (var r in e) if ({}.hasOwnProperty.call(e, r)) {
    if (t.indexOf(r) !== -1) continue;
    o[r] = e[r];
  }
  return o;
}
function Er(e, t) {
  return Er = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(o, r) {
    return o.__proto__ = r, o;
  }, Er(e, t);
}
function us(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, Er(e, t);
}
const Ui = {
  disabled: !1
};
var ap = process.env.NODE_ENV !== "production" ? n.oneOfType([n.number, n.shape({
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
const vn = De.createContext(null);
var sp = function(t) {
  return t.scrollTop;
}, Oo = "unmounted", $t = "exited", jt = "entering", oo = "entered", Sr = "exiting", pt = /* @__PURE__ */ function(e) {
  us(t, e);
  function t(r, i) {
    var a;
    a = e.call(this, r, i) || this;
    var l = i, s = l && !l.isMounting ? r.enter : r.appear, c;
    return a.appearStatus = null, r.in ? s ? (c = $t, a.appearStatus = jt) : c = oo : r.unmountOnExit || r.mountOnEnter ? c = Oo : c = $t, a.state = {
      status: c
    }, a.nextCallback = null, a;
  }
  t.getDerivedStateFromProps = function(i, a) {
    var l = i.in;
    return l && a.status === Oo ? {
      status: $t
    } : null;
  };
  var o = t.prototype;
  return o.componentDidMount = function() {
    this.updateStatus(!0, this.appearStatus);
  }, o.componentDidUpdate = function(i) {
    var a = null;
    if (i !== this.props) {
      var l = this.state.status;
      this.props.in ? l !== jt && l !== oo && (a = jt) : (l === jt || l === oo) && (a = Sr);
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
      if (this.cancelNextCallback(), a === jt) {
        if (this.props.unmountOnExit || this.props.mountOnEnter) {
          var l = this.props.nodeRef ? this.props.nodeRef.current : Jo.findDOMNode(this);
          l && sp(l);
        }
        this.performEnter(i);
      } else
        this.performExit();
    else this.props.unmountOnExit && this.state.status === $t && this.setState({
      status: Oo
    });
  }, o.performEnter = function(i) {
    var a = this, l = this.props.enter, s = this.context ? this.context.isMounting : i, c = this.props.nodeRef ? [s] : [Jo.findDOMNode(this), s], u = c[0], d = c[1], f = this.getTimeouts(), g = s ? f.appear : f.enter;
    if (!i && !l || Ui.disabled) {
      this.safeSetState({
        status: oo
      }, function() {
        a.props.onEntered(u);
      });
      return;
    }
    this.props.onEnter(u, d), this.safeSetState({
      status: jt
    }, function() {
      a.props.onEntering(u, d), a.onTransitionEnd(g, function() {
        a.safeSetState({
          status: oo
        }, function() {
          a.props.onEntered(u, d);
        });
      });
    });
  }, o.performExit = function() {
    var i = this, a = this.props.exit, l = this.getTimeouts(), s = this.props.nodeRef ? void 0 : Jo.findDOMNode(this);
    if (!a || Ui.disabled) {
      this.safeSetState({
        status: $t
      }, function() {
        i.props.onExited(s);
      });
      return;
    }
    this.props.onExit(s), this.safeSetState({
      status: Sr
    }, function() {
      i.props.onExiting(s), i.onTransitionEnd(l.exit, function() {
        i.safeSetState({
          status: $t
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
    var l = this.props.nodeRef ? this.props.nodeRef.current : Jo.findDOMNode(this), s = i == null && !this.props.addEndListener;
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
    if (i === Oo)
      return null;
    var a = this.props, l = a.children;
    a.in, a.mountOnEnter, a.unmountOnExit, a.appear, a.enter, a.exit, a.timeout, a.addEndListener, a.onEnter, a.onEntering, a.onEntered, a.onExit, a.onExiting, a.onExited, a.nodeRef;
    var s = cs(a, ["children", "in", "mountOnEnter", "unmountOnExit", "appear", "enter", "exit", "timeout", "addEndListener", "onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited", "nodeRef"]);
    return (
      // allows for nested Transitions
      /* @__PURE__ */ De.createElement(vn.Provider, {
        value: null
      }, typeof l == "function" ? l(i, s) : De.cloneElement(De.Children.only(l), s))
    );
  }, t;
}(De.Component);
pt.contextType = vn;
pt.propTypes = process.env.NODE_ENV !== "production" ? {
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
    var o = ap;
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
function to() {
}
pt.defaultProps = {
  in: !1,
  mountOnEnter: !1,
  unmountOnExit: !1,
  appear: !1,
  enter: !0,
  exit: !0,
  onEnter: to,
  onEntering: to,
  onEntered: to,
  onExit: to,
  onExiting: to,
  onExited: to
};
pt.UNMOUNTED = Oo;
pt.EXITED = $t;
pt.ENTERING = jt;
pt.ENTERED = oo;
pt.EXITING = Sr;
function lp(e) {
  if (e === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Hr(e, t) {
  var o = function(a) {
    return t && ln(a) ? t(a) : a;
  }, r = /* @__PURE__ */ Object.create(null);
  return e && sl.map(e, function(i) {
    return i;
  }).forEach(function(i) {
    r[i.key] = o(i);
  }), r;
}
function cp(e, t) {
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
function zt(e, t, o) {
  return o[t] != null ? o[t] : e.props[t];
}
function up(e, t) {
  return Hr(e.children, function(o) {
    return cn(o, {
      onExited: t.bind(null, o),
      in: !0,
      appear: zt(o, "appear", e),
      enter: zt(o, "enter", e),
      exit: zt(o, "exit", e)
    });
  });
}
function pp(e, t, o) {
  var r = Hr(e.children), i = cp(t, r);
  return Object.keys(i).forEach(function(a) {
    var l = i[a];
    if (ln(l)) {
      var s = a in t, c = a in r, u = t[a], d = ln(u) && !u.props.in;
      c && (!s || d) ? i[a] = cn(l, {
        onExited: o.bind(null, l),
        in: !0,
        exit: zt(l, "exit", e),
        enter: zt(l, "enter", e)
      }) : !c && s && !d ? i[a] = cn(l, {
        in: !1
      }) : c && s && ln(u) && (i[a] = cn(l, {
        onExited: o.bind(null, l),
        in: u.props.in,
        exit: zt(l, "exit", e),
        enter: zt(l, "enter", e)
      }));
    }
  }), i;
}
var dp = Object.values || function(e) {
  return Object.keys(e).map(function(t) {
    return e[t];
  });
}, fp = {
  component: "div",
  childFactory: function(t) {
    return t;
  }
}, Qr = /* @__PURE__ */ function(e) {
  us(t, e);
  function t(r, i) {
    var a;
    a = e.call(this, r, i) || this;
    var l = a.handleExited.bind(lp(a));
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
      children: c ? up(i, s) : pp(i, l, s),
      firstRender: !1
    };
  }, o.handleExited = function(i, a) {
    var l = Hr(this.props.children);
    i.key in l || (i.props.onExited && i.props.onExited(a), this.mounted && this.setState(function(s) {
      var c = wr({}, s.children);
      return delete c[i.key], {
        children: c
      };
    }));
  }, o.render = function() {
    var i = this.props, a = i.component, l = i.childFactory, s = cs(i, ["component", "childFactory"]), c = this.state.contextValue, u = dp(this.state.children).map(l);
    return delete s.appear, delete s.enter, delete s.exit, a === null ? /* @__PURE__ */ De.createElement(vn.Provider, {
      value: c
    }, u) : /* @__PURE__ */ De.createElement(vn.Provider, {
      value: c
    }, /* @__PURE__ */ De.createElement(a, s, u));
  }, t;
}(De.Component);
Qr.propTypes = process.env.NODE_ENV !== "production" ? {
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
Qr.defaultProps = fp;
function ps(e) {
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
  } = e, [d, f] = h.useState(!1), g = q(t, o.ripple, o.rippleVisible, r && o.ripplePulsate), b = {
    width: l,
    height: l,
    top: -(l / 2) + a,
    left: -(l / 2) + i
  }, v = q(o.child, d && o.childLeaving, r && o.childPulsate);
  return !s && !d && f(!0), h.useEffect(() => {
    if (!s && c != null) {
      const y = setTimeout(c, u);
      return () => {
        clearTimeout(y);
      };
    }
  }, [c, s, u]), /* @__PURE__ */ S("span", {
    className: g,
    style: b,
    children: /* @__PURE__ */ S("span", {
      className: v
    })
  });
}
process.env.NODE_ENV !== "production" && (ps.propTypes = {
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
const Xe = se("MuiTouchRipple", ["root", "ripple", "rippleVisible", "ripplePulsate", "child", "childLeaving", "childPulsate"]), Tr = 550, gp = 80, hp = zo`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`, bp = zo`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`, mp = zo`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`, yp = U("span", {
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
}), vp = U(ps, {
  name: "MuiTouchRipple",
  slot: "Ripple"
})`
  opacity: 0;
  position: absolute;

  &.${Xe.rippleVisible} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${hp};
    animation-duration: ${Tr}ms;
    animation-timing-function: ${({
  theme: e
}) => e.transitions.easing.easeInOut};
  }

  &.${Xe.ripplePulsate} {
    animation-duration: ${({
  theme: e
}) => e.transitions.duration.shorter}ms;
  }

  & .${Xe.child} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${Xe.childLeaving} {
    opacity: 0;
    animation-name: ${bp};
    animation-duration: ${Tr}ms;
    animation-timing-function: ${({
  theme: e
}) => e.transitions.easing.easeInOut};
  }

  & .${Xe.childPulsate} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
    animation-name: ${mp};
    animation-duration: 2500ms;
    animation-timing-function: ${({
  theme: e
}) => e.transitions.easing.easeInOut};
    animation-iteration-count: infinite;
    animation-delay: 200ms;
  }
`, ds = /* @__PURE__ */ h.forwardRef(function(t, o) {
  const r = fe({
    props: t,
    name: "MuiTouchRipple"
  }), {
    center: i = !1,
    classes: a = {},
    className: l,
    ...s
  } = r, [c, u] = h.useState([]), d = h.useRef(0), f = h.useRef(null);
  h.useEffect(() => {
    f.current && (f.current(), f.current = null);
  }, [c]);
  const g = h.useRef(!1), b = no(), v = h.useRef(null), y = h.useRef(null), x = h.useCallback((m) => {
    const {
      pulsate: E,
      rippleX: O,
      rippleY: M,
      rippleSize: D,
      cb: $
    } = m;
    u((p) => [...p, /* @__PURE__ */ S(vp, {
      classes: {
        ripple: q(a.ripple, Xe.ripple),
        rippleVisible: q(a.rippleVisible, Xe.rippleVisible),
        ripplePulsate: q(a.ripplePulsate, Xe.ripplePulsate),
        child: q(a.child, Xe.child),
        childLeaving: q(a.childLeaving, Xe.childLeaving),
        childPulsate: q(a.childPulsate, Xe.childPulsate)
      },
      timeout: Tr,
      pulsate: E,
      rippleX: O,
      rippleY: M,
      rippleSize: D
    }, d.current)]), d.current += 1, f.current = $;
  }, [a]), C = h.useCallback((m = {}, E = {}, O = () => {
  }) => {
    const {
      pulsate: M = !1,
      center: D = i || E.pulsate,
      fakeElement: $ = !1
      // For test purposes
    } = E;
    if ((m == null ? void 0 : m.type) === "mousedown" && g.current) {
      g.current = !1;
      return;
    }
    (m == null ? void 0 : m.type) === "touchstart" && (g.current = !0);
    const p = $ ? null : y.current, A = p ? p.getBoundingClientRect() : {
      width: 0,
      height: 0,
      left: 0,
      top: 0
    };
    let I, B, N;
    if (D || m === void 0 || m.clientX === 0 && m.clientY === 0 || !m.clientX && !m.touches)
      I = Math.round(A.width / 2), B = Math.round(A.height / 2);
    else {
      const {
        clientX: P,
        clientY: R
      } = m.touches && m.touches.length > 0 ? m.touches[0] : m;
      I = Math.round(P - A.left), B = Math.round(R - A.top);
    }
    if (D)
      N = Math.sqrt((2 * A.width ** 2 + A.height ** 2) / 3), N % 2 === 0 && (N += 1);
    else {
      const P = Math.max(Math.abs((p ? p.clientWidth : 0) - I), I) * 2 + 2, R = Math.max(Math.abs((p ? p.clientHeight : 0) - B), B) * 2 + 2;
      N = Math.sqrt(P ** 2 + R ** 2);
    }
    m != null && m.touches ? v.current === null && (v.current = () => {
      x({
        pulsate: M,
        rippleX: I,
        rippleY: B,
        rippleSize: N,
        cb: O
      });
    }, b.start(gp, () => {
      v.current && (v.current(), v.current = null);
    })) : x({
      pulsate: M,
      rippleX: I,
      rippleY: B,
      rippleSize: N,
      cb: O
    });
  }, [i, x, b]), T = h.useCallback(() => {
    C({}, {
      pulsate: !0
    });
  }, [C]), w = h.useCallback((m, E) => {
    if (b.clear(), (m == null ? void 0 : m.type) === "touchend" && v.current) {
      v.current(), v.current = null, b.start(0, () => {
        w(m, E);
      });
      return;
    }
    v.current = null, u((O) => O.length > 0 ? O.slice(1) : O), f.current = E;
  }, [b]);
  return h.useImperativeHandle(o, () => ({
    pulsate: T,
    start: C,
    stop: w
  }), [T, C, w]), /* @__PURE__ */ S(yp, {
    className: q(Xe.root, a.root, l),
    ref: y,
    ...s,
    children: /* @__PURE__ */ S(Qr, {
      component: null,
      exit: !0,
      children: c
    })
  });
});
process.env.NODE_ENV !== "production" && (ds.propTypes = {
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
function Cp(e) {
  return ce("MuiButtonBase", e);
}
const xp = se("MuiButtonBase", ["root", "disabled", "focusVisible"]), wp = (e) => {
  const {
    disabled: t,
    focusVisible: o,
    focusVisibleClassName: r,
    classes: i
  } = e, l = pe({
    root: ["root", t && "disabled", o && "focusVisible"]
  }, Cp, i);
  return o && r && (l.root += ` ${r}`), l;
}, Ep = U("button", {
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
  [`&.${xp.disabled}`]: {
    pointerEvents: "none",
    // Disable link interactions
    cursor: "default"
  },
  "@media print": {
    colorAdjust: "exact"
  }
}), rt = /* @__PURE__ */ h.forwardRef(function(t, o) {
  const r = fe({
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
    focusRipple: g = !1,
    focusVisibleClassName: b,
    LinkComponent: v = "a",
    onBlur: y,
    onClick: x,
    onContextMenu: C,
    onDragLeave: T,
    onFocus: w,
    onFocusVisible: m,
    onKeyDown: E,
    onKeyUp: O,
    onMouseDown: M,
    onMouseLeave: D,
    onMouseUp: $,
    onTouchEnd: p,
    onTouchMove: A,
    onTouchStart: I,
    tabIndex: B = 0,
    TouchRippleProps: N,
    touchRippleRef: P,
    type: R,
    ...V
  } = r, J = h.useRef(null), L = rp(), k = Ne(L.ref, P), [z, _] = h.useState(!1);
  u && z && _(!1), h.useImperativeHandle(i, () => ({
    focusVisible: () => {
      _(!0), J.current.focus();
    }
  }), []);
  const Z = L.shouldMount && !d && !u;
  h.useEffect(() => {
    z && g && !d && L.pulsate();
  }, [d, g, z, L]);
  const K = ht(L, "start", M, f), W = ht(L, "stop", C, f), Q = ht(L, "stop", T, f), X = ht(L, "stop", $, f), ne = ht(L, "stop", (re) => {
    z && re.preventDefault(), D && D(re);
  }, f), ie = ht(L, "start", I, f), G = ht(L, "stop", p, f), oe = ht(L, "stop", A, f), te = ht(L, "stop", (re) => {
    bn(re.target) || _(!1), y && y(re);
  }, !1), me = nt((re) => {
    J.current || (J.current = re.currentTarget), bn(re.target) && (_(!0), m && m(re)), w && w(re);
  }), ye = () => {
    const re = J.current;
    return c && c !== "button" && !(re.tagName === "A" && re.href);
  }, Pe = nt((re) => {
    g && !re.repeat && z && re.key === " " && L.stop(re, () => {
      L.start(re);
    }), re.target === re.currentTarget && ye() && re.key === " " && re.preventDefault(), E && E(re), re.target === re.currentTarget && ye() && re.key === "Enter" && !u && (re.preventDefault(), x && x(re));
  }), je = nt((re) => {
    g && re.key === " " && z && !re.defaultPrevented && L.stop(re, () => {
      L.pulsate(re);
    }), O && O(re), x && re.target === re.currentTarget && ye() && re.key === " " && !re.defaultPrevented && x(re);
  });
  let we = c;
  we === "button" && (V.href || V.to) && (we = v);
  const Se = {};
  we === "button" ? (Se.type = R === void 0 ? "button" : R, Se.disabled = u) : (!V.href && !V.to && (Se.role = "button"), u && (Se["aria-disabled"] = u));
  const Fe = Ne(o, J), Me = {
    ...r,
    centerRipple: a,
    component: c,
    disabled: u,
    disableRipple: d,
    disableTouchRipple: f,
    focusRipple: g,
    tabIndex: B,
    focusVisible: z
  }, ve = wp(Me);
  return /* @__PURE__ */ be(Ep, {
    as: we,
    className: q(ve.root, s),
    ownerState: Me,
    onBlur: te,
    onClick: x,
    onContextMenu: W,
    onFocus: me,
    onKeyDown: Pe,
    onKeyUp: je,
    onMouseDown: K,
    onMouseLeave: ne,
    onMouseUp: X,
    onDragLeave: Q,
    onTouchEnd: G,
    onTouchMove: oe,
    onTouchStart: ie,
    ref: Fe,
    tabIndex: u ? -1 : B,
    type: R,
    ...Se,
    ...V,
    children: [l, Z ? /* @__PURE__ */ S(ds, {
      ref: k,
      center: a,
      ...N
    }) : null]
  });
});
function ht(e, t, o, r = !1) {
  return nt((i) => (o && o(i), r || e[t](i), !0));
}
process.env.NODE_ENV !== "production" && (rt.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * A ref for imperative actions.
   * It currently only supports `focusVisible()` action.
   */
  action: Ct,
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
  component: Ha,
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
function Sp(e) {
  return ce("MuiCircularProgress", e);
}
se("MuiCircularProgress", ["root", "determinate", "indeterminate", "colorPrimary", "colorSecondary", "svg", "circle", "circleDeterminate", "circleIndeterminate", "circleDisableShrink"]);
const Tt = 44, Or = zo`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`, Ar = zo`
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
`, Tp = typeof Or != "string" ? Aa`
        animation: ${Or} 1.4s linear infinite;
      ` : null, Op = typeof Ar != "string" ? Aa`
        animation: ${Ar} 1.4s ease-in-out infinite;
      ` : null, Ap = (e) => {
  const {
    classes: t,
    variant: o,
    color: r,
    disableShrink: i
  } = e, a = {
    root: ["root", o, `color${j(r)}`],
    svg: ["svg"],
    circle: ["circle", `circle${j(o)}`, i && "circleDisableShrink"]
  };
  return pe(a, Sp, t);
}, kp = U("span", {
  name: "MuiCircularProgress",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: o
    } = e;
    return [t.root, t[o.variant], t[`color${j(o.color)}`]];
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
    style: Tp || {
      animation: `${Or} 1.4s linear infinite`
    }
  }, ...Object.entries(e.palette).filter(Be()).map(([t]) => ({
    props: {
      color: t
    },
    style: {
      color: (e.vars || e).palette[t].main
    }
  }))]
}))), Rp = U("svg", {
  name: "MuiCircularProgress",
  slot: "Svg",
  overridesResolver: (e, t) => t.svg
})({
  display: "block"
  // Keeps the progress centered
}), Fp = U("circle", {
  name: "MuiCircularProgress",
  slot: "Circle",
  overridesResolver: (e, t) => {
    const {
      ownerState: o
    } = e;
    return [t.circle, t[`circle${j(o.variant)}`], o.disableShrink && t.circleDisableShrink];
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
    style: Op || {
      // At runtime for Pigment CSS, `bufferAnimation` will be null and the generated keyframe will be used.
      animation: `${Ar} 1.4s ease-in-out infinite`
    }
  }]
}))), Kr = /* @__PURE__ */ h.forwardRef(function(t, o) {
  const r = fe({
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
    ...g
  } = r, b = {
    ...r,
    color: a,
    disableShrink: l,
    size: s,
    thickness: u,
    value: d,
    variant: f
  }, v = Ap(b), y = {}, x = {}, C = {};
  if (f === "determinate") {
    const T = 2 * Math.PI * ((Tt - u) / 2);
    y.strokeDasharray = T.toFixed(3), C["aria-valuenow"] = Math.round(d), y.strokeDashoffset = `${((100 - d) / 100 * T).toFixed(3)}px`, x.transform = "rotate(-90deg)";
  }
  return /* @__PURE__ */ S(kp, {
    className: q(v.root, i),
    style: {
      width: s,
      height: s,
      ...x,
      ...c
    },
    ownerState: b,
    ref: o,
    role: "progressbar",
    ...C,
    ...g,
    children: /* @__PURE__ */ S(Rp, {
      className: v.svg,
      ownerState: b,
      viewBox: `${Tt / 2} ${Tt / 2} ${Tt} ${Tt}`,
      children: /* @__PURE__ */ S(Fp, {
        className: v.circle,
        style: y,
        ownerState: b,
        cx: Tt,
        cy: Tt,
        r: (Tt - u) / 2,
        fill: "none",
        strokeWidth: u
      })
    })
  });
});
process.env.NODE_ENV !== "production" && (Kr.propTypes = {
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
  disableShrink: Bt(n.bool, (e) => e.disableShrink && e.variant && e.variant !== "indeterminate" ? new Error("MUI: You have provided the `disableShrink` prop with a variant other than `indeterminate`. This will have no effect.") : null),
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
function Bp(e) {
  return ce("MuiIconButton", e);
}
const Wi = se("MuiIconButton", ["root", "disabled", "colorInherit", "colorPrimary", "colorSecondary", "colorError", "colorInfo", "colorSuccess", "colorWarning", "edgeStart", "edgeEnd", "sizeSmall", "sizeMedium", "sizeLarge", "loading", "loadingIndicator", "loadingWrapper"]), Mp = (e) => {
  const {
    classes: t,
    disabled: o,
    color: r,
    edge: i,
    size: a,
    loading: l
  } = e, s = {
    root: ["root", l && "loading", o && "disabled", r !== "default" && `color${j(r)}`, i && `edge${j(i)}`, `size${j(a)}`],
    loadingIndicator: ["loadingIndicator"],
    loadingWrapper: ["loadingWrapper"]
  };
  return pe(s, Bp, t);
}, Ip = U(rt, {
  name: "MuiIconButton",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: o
    } = e;
    return [t.root, o.loading && t.loading, o.color !== "default" && t[`color${j(o.color)}`], o.edge && t[`edge${j(o.edge)}`], t[`size${j(o.size)}`]];
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
      "--IconButton-hoverBg": e.vars ? `rgba(${e.vars.palette.action.activeChannel} / ${e.vars.palette.action.hoverOpacity})` : H(e.palette.action.active, e.palette.action.hoverOpacity),
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
  }, ...Object.entries(e.palette).filter(Be()).map(([t]) => ({
    props: {
      color: t
    },
    style: {
      color: (e.vars || e).palette[t].main
    }
  })), ...Object.entries(e.palette).filter(Be()).map(([t]) => ({
    props: {
      color: t
    },
    style: {
      "--IconButton-hoverBg": e.vars ? `rgba(${(e.vars || e).palette[t].mainChannel} / ${e.vars.palette.action.hoverOpacity})` : H((e.vars || e).palette[t].main, e.palette.action.hoverOpacity)
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
  [`&.${Wi.disabled}`]: {
    backgroundColor: "transparent",
    color: (e.vars || e).palette.action.disabled
  },
  [`&.${Wi.loading}`]: {
    color: "transparent"
  }
}))), Pp = U("span", {
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
})), Go = /* @__PURE__ */ h.forwardRef(function(t, o) {
  const r = fe({
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
    loading: g = null,
    loadingIndicator: b,
    ...v
  } = r, y = Wo(f), x = b ?? /* @__PURE__ */ S(Kr, {
    "aria-labelledby": y,
    color: "inherit",
    size: 16
  }), C = {
    ...r,
    edge: i,
    color: s,
    disabled: c,
    disableFocusRipple: u,
    loading: g,
    loadingIndicator: x,
    size: d
  }, T = Mp(C);
  return /* @__PURE__ */ be(Ip, {
    id: g ? y : f,
    className: q(T.root, l),
    centerRipple: !0,
    focusRipple: !u,
    disabled: c || g,
    ref: o,
    ...v,
    ownerState: C,
    children: [typeof g == "boolean" && // use plain HTML span to minimize the runtime overhead
    /* @__PURE__ */ S("span", {
      className: T.loadingWrapper,
      style: {
        display: "contents"
      },
      children: /* @__PURE__ */ S(Pp, {
        className: T.loadingIndicator,
        ownerState: C,
        children: g && x
      })
    }), a]
  });
});
process.env.NODE_ENV !== "production" && (Go.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The icon to display.
   */
  children: Bt(n.node, (e) => h.Children.toArray(e.children).some((o) => /* @__PURE__ */ h.isValidElement(o) && o.props.onClick) ? new Error(["MUI: You are providing an onClick event listener to a child of a button element.", "Prefer applying it to the IconButton directly.", "This guarantees that the whole <button> will be responsive to click events."].join(`
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
const Dp = $e(/* @__PURE__ */ S("path", {
  d: "M20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4C12.76,4 13.5,4.11 14.2, 4.31L15.77,2.74C14.61,2.26 13.34,2 12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0, 0 22,12M7.91,10.08L6.5,11.5L11,16L21,6L19.59,4.58L11,13.17L7.91,10.08Z"
}), "SuccessOutlined"), Np = $e(/* @__PURE__ */ S("path", {
  d: "M12 5.99L19.53 19H4.47L12 5.99M12 2L1 21h22L12 2zm1 14h-2v2h2v-2zm0-6h-2v4h2v-4z"
}), "ReportProblemOutlined"), $p = $e(/* @__PURE__ */ S("path", {
  d: "M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"
}), "ErrorOutline"), jp = $e(/* @__PURE__ */ S("path", {
  d: "M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20, 12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10, 10 0 0,0 12,2M11,17H13V11H11V17Z"
}), "InfoOutlined"), zp = $e(/* @__PURE__ */ S("path", {
  d: "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
}), "Close"), Vp = (e) => {
  const {
    variant: t,
    color: o,
    severity: r,
    classes: i
  } = e, a = {
    root: ["root", `color${j(o || r)}`, `${t}${j(o || r)}`, `${t}`],
    icon: ["icon"],
    message: ["message"],
    action: ["action"]
  };
  return pe(a, ep, i);
}, Lp = U(Ko, {
  name: "MuiAlert",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: o
    } = e;
    return [t.root, t[o.variant], t[`${o.variant}${j(o.color || o.severity)}`]];
  }
})(de(({
  theme: e
}) => {
  const t = e.palette.mode === "light" ? io : ao, o = e.palette.mode === "light" ? ao : io;
  return {
    ...e.typography.body2,
    backgroundColor: "transparent",
    display: "flex",
    padding: "6px 16px",
    variants: [...Object.entries(e.palette).filter(Be(["light"])).map(([r]) => ({
      props: {
        colorSeverity: r,
        variant: "standard"
      },
      style: {
        color: e.vars ? e.vars.palette.Alert[`${r}Color`] : t(e.palette[r].light, 0.6),
        backgroundColor: e.vars ? e.vars.palette.Alert[`${r}StandardBg`] : o(e.palette[r].light, 0.9),
        [`& .${Li.icon}`]: e.vars ? {
          color: e.vars.palette.Alert[`${r}IconColor`]
        } : {
          color: e.palette[r].main
        }
      }
    })), ...Object.entries(e.palette).filter(Be(["light"])).map(([r]) => ({
      props: {
        colorSeverity: r,
        variant: "outlined"
      },
      style: {
        color: e.vars ? e.vars.palette.Alert[`${r}Color`] : t(e.palette[r].light, 0.6),
        border: `1px solid ${(e.vars || e).palette[r].light}`,
        [`& .${Li.icon}`]: e.vars ? {
          color: e.vars.palette.Alert[`${r}IconColor`]
        } : {
          color: e.palette[r].main
        }
      }
    })), ...Object.entries(e.palette).filter(Be(["dark"])).map(([r]) => ({
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
})), Up = U("div", {
  name: "MuiAlert",
  slot: "Icon",
  overridesResolver: (e, t) => t.icon
})({
  marginRight: 12,
  padding: "7px 0",
  display: "flex",
  fontSize: 22,
  opacity: 0.9
}), Wp = U("div", {
  name: "MuiAlert",
  slot: "Message",
  overridesResolver: (e, t) => t.message
})({
  padding: "8px 0",
  minWidth: 0,
  overflow: "auto"
}), Hp = U("div", {
  name: "MuiAlert",
  slot: "Action",
  overridesResolver: (e, t) => t.action
})({
  display: "flex",
  alignItems: "flex-start",
  padding: "4px 0 0 16px",
  marginLeft: "auto",
  marginRight: -8
}), Hi = {
  success: /* @__PURE__ */ S(Dp, {
    fontSize: "inherit"
  }),
  warning: /* @__PURE__ */ S(Np, {
    fontSize: "inherit"
  }),
  error: /* @__PURE__ */ S($p, {
    fontSize: "inherit"
  }),
  info: /* @__PURE__ */ S(jp, {
    fontSize: "inherit"
  })
}, fs = /* @__PURE__ */ h.forwardRef(function(t, o) {
  const r = fe({
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
    iconMapping: g = Hi,
    onClose: b,
    role: v = "alert",
    severity: y = "success",
    slotProps: x = {},
    slots: C = {},
    variant: T = "standard",
    ...w
  } = r, m = {
    ...r,
    color: c,
    severity: y,
    variant: T,
    colorSeverity: c || y
  }, E = Vp(m), O = {
    slots: {
      closeButton: u.CloseButton,
      closeIcon: u.CloseIcon,
      ...C
    },
    slotProps: {
      ...d,
      ...x
    }
  }, [M, D] = le("root", {
    ref: o,
    shouldForwardComponentProp: !0,
    className: q(E.root, l),
    elementType: Lp,
    externalForwardedProps: {
      ...O,
      ...w
    },
    ownerState: m,
    additionalProps: {
      role: v,
      elevation: 0
    }
  }), [$, p] = le("icon", {
    className: E.icon,
    elementType: Up,
    externalForwardedProps: O,
    ownerState: m
  }), [A, I] = le("message", {
    className: E.message,
    elementType: Wp,
    externalForwardedProps: O,
    ownerState: m
  }), [B, N] = le("action", {
    className: E.action,
    elementType: Hp,
    externalForwardedProps: O,
    ownerState: m
  }), [P, R] = le("closeButton", {
    elementType: Go,
    externalForwardedProps: O,
    ownerState: m
  }), [V, J] = le("closeIcon", {
    elementType: zp,
    externalForwardedProps: O,
    ownerState: m
  });
  return /* @__PURE__ */ be(M, {
    ...D,
    children: [f !== !1 ? /* @__PURE__ */ S($, {
      ...p,
      children: f || g[y] || Hi[y]
    }) : null, /* @__PURE__ */ S(A, {
      ...I,
      children: a
    }), i != null ? /* @__PURE__ */ S(B, {
      ...N,
      children: i
    }) : null, i == null && b ? /* @__PURE__ */ S(B, {
      ...N,
      children: /* @__PURE__ */ S(P, {
        size: "small",
        "aria-label": s,
        title: s,
        color: "inherit",
        onClick: b,
        ...R,
        children: /* @__PURE__ */ S(V, {
          fontSize: "small",
          ...J
        })
      })
    }) : null]
  });
});
process.env.NODE_ENV !== "production" && (fs.propTypes = {
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
var gs = {
  color: void 0,
  size: void 0,
  className: void 0,
  style: void 0,
  attr: void 0
}, Qi = De.createContext && /* @__PURE__ */ De.createContext(gs), Qp = ["attr", "size", "title"];
function Kp(e, t) {
  if (e == null) return {};
  var o = Gp(e, t), r, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      r = a[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r]);
  }
  return o;
}
function Gp(e, t) {
  if (e == null) return {};
  var o = {};
  for (var r in e)
    if (Object.prototype.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) >= 0) continue;
      o[r] = e[r];
    }
  return o;
}
function Cn() {
  return Cn = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var o = arguments[t];
      for (var r in o)
        Object.prototype.hasOwnProperty.call(o, r) && (e[r] = o[r]);
    }
    return e;
  }, Cn.apply(this, arguments);
}
function Ki(e, t) {
  var o = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), o.push.apply(o, r);
  }
  return o;
}
function xn(e) {
  for (var t = 1; t < arguments.length; t++) {
    var o = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Ki(Object(o), !0).forEach(function(r) {
      Yp(e, r, o[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(o)) : Ki(Object(o)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(o, r));
    });
  }
  return e;
}
function Yp(e, t, o) {
  return t = qp(t), t in e ? Object.defineProperty(e, t, { value: o, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = o, e;
}
function qp(e) {
  var t = Xp(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function Xp(e, t) {
  if (typeof e != "object" || !e) return e;
  var o = e[Symbol.toPrimitive];
  if (o !== void 0) {
    var r = o.call(e, t);
    if (typeof r != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function hs(e) {
  return e && e.map((t, o) => /* @__PURE__ */ De.createElement(t.tag, xn({
    key: o
  }, t.attr), hs(t.child)));
}
function Qt(e) {
  return (t) => /* @__PURE__ */ De.createElement(Jp, Cn({
    attr: xn({}, e.attr)
  }, t), hs(e.child));
}
function Jp(e) {
  var t = (o) => {
    var {
      attr: r,
      size: i,
      title: a
    } = e, l = Kp(e, Qp), s = i || o.size || "1em", c;
    return o.className && (c = o.className), e.className && (c = (c ? c + " " : "") + e.className), /* @__PURE__ */ De.createElement("svg", Cn({
      stroke: "currentColor",
      fill: "currentColor",
      strokeWidth: "0"
    }, o.attr, r, l, {
      className: c,
      style: xn(xn({
        color: e.color || o.color
      }, o.style), e.style),
      height: s,
      width: s,
      xmlns: "http://www.w3.org/2000/svg"
    }), a && /* @__PURE__ */ De.createElement("title", null, a), e.children);
  };
  return Qi !== void 0 ? /* @__PURE__ */ De.createElement(Qi.Consumer, null, (o) => t(o)) : t(gs);
}
function Zp(e) {
  return Qt({ attr: { viewBox: "0 0 24 24" }, child: [{ tag: "path", attr: { d: "M17.28 9.28a.75.75 0 0 0-1.06-1.06l-5.97 5.97-2.47-2.47a.75.75 0 0 0-1.06 1.06l3 3a.75.75 0 0 0 1.06 0l6.5-6.5Z" }, child: [] }, { tag: "path", attr: { d: "M12 1c6.075 0 11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12 5.925 1 12 1ZM2.5 12a9.5 9.5 0 0 0 9.5 9.5 9.5 9.5 0 0 0 9.5-9.5A9.5 9.5 0 0 0 12 2.5 9.5 9.5 0 0 0 2.5 12Z" }, child: [] }] })(e);
}
function _p(e) {
  return Qt({ attr: { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, child: [{ tag: "path", attr: { d: "M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" }, child: [] }, { tag: "line", attr: { x1: "12", y1: "9", x2: "12", y2: "13" }, child: [] }, { tag: "line", attr: { x1: "12", y1: "17", x2: "12.01", y2: "17" }, child: [] }] })(e);
}
function ed(e) {
  return Qt({ attr: { viewBox: "0 0 256 256", fill: "currentColor" }, child: [{ tag: "path", attr: { d: "M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm16-40a8,8,0,0,1-8,8,16,16,0,0,1-16-16V128a8,8,0,0,1,0-16,16,16,0,0,1,16,16v40A8,8,0,0,1,144,176ZM112,84a12,12,0,1,1,12,12A12,12,0,0,1,112,84Z" }, child: [] }] })(e);
}
function td(e) {
  return Qt({ attr: { viewBox: "0 0 24 24" }, child: [{ tag: "path", attr: { fill: "none", d: "M0 0h24v24H0V0z" }, child: [] }, { tag: "path", attr: { d: "M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z" }, child: [] }] })(e);
}
function Gi(e) {
  return Qt({ attr: { viewBox: "0 0 24 24" }, child: [{ tag: "path", attr: { d: "M11 7h2v7h-2zm0 8h2v2h-2z" }, child: [] }, { tag: "path", attr: { d: "m21.707 7.293-5-5A.996.996 0 0 0 16 2H8a.996.996 0 0 0-.707.293l-5 5A.996.996 0 0 0 2 8v8c0 .266.105.52.293.707l5 5A.996.996 0 0 0 8 22h8c.266 0 .52-.105.707-.293l5-5A.996.996 0 0 0 22 16V8a.996.996 0 0 0-.293-.707zM20 15.586 15.586 20H8.414L4 15.586V8.414L8.414 4h7.172L20 8.414v7.172z" }, child: [] }] })(e);
}
const od = (e, t = "primary") => {
  var i;
  const o = Ie[t].alertColor, r = ((i = e == null ? void 0 : e.palette) == null ? void 0 : i[t].alertColor) ?? o;
  return {
    bgColor: r ?? o,
    iconColor: r ?? o
  };
}, nd = {
  success: /* @__PURE__ */ S(Zp, {}),
  info: /* @__PURE__ */ S(ed, {}),
  warning: /* @__PURE__ */ S(_p, {}),
  error: /* @__PURE__ */ S(td, {}),
  gray: /* @__PURE__ */ S(Gi, {}),
  dark: /* @__PURE__ */ S(Gi, {})
}, rd = U(fs)(({
  "data-severity": e = "success",
  theme: t,
  "data-color": o = "primary"
}) => {
  const r = od(t, o);
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
}), xm = ({
  severity: e = "success",
  color: t = "primary",
  iconMapping: o,
  icon: r,
  alertTitle: i,
  ...a
}) => /* @__PURE__ */ be(
  rd,
  {
    "data-severity": e,
    "data-color": t,
    icon: r ?? nd[e],
    ...a,
    children: [
      i && /* @__PURE__ */ S(dl, { sx: { color: e == "dark" ? "#FFFFFF" : "#1E1E1E" }, children: i }),
      a.children
    ]
  }
), id = $e(/* @__PURE__ */ S("path", {
  d: "M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"
}), "Person");
function ad(e) {
  return ce("MuiAvatar", e);
}
se("MuiAvatar", ["root", "colorDefault", "circular", "rounded", "square", "img", "fallback"]);
const sd = (e) => {
  const {
    classes: t,
    variant: o,
    colorDefault: r
  } = e;
  return pe({
    root: ["root", o, r && "colorDefault"],
    img: ["img"],
    fallback: ["fallback"]
  }, ad, t);
}, ld = U("div", {
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
}))), cd = U("img", {
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
}), ud = U(id, {
  name: "MuiAvatar",
  slot: "Fallback",
  overridesResolver: (e, t) => t.fallback
})({
  width: "75%",
  height: "75%"
});
function pd({
  crossOrigin: e,
  referrerPolicy: t,
  src: o,
  srcSet: r
}) {
  const [i, a] = h.useState(!1);
  return h.useEffect(() => {
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
const bs = /* @__PURE__ */ h.forwardRef(function(t, o) {
  const r = fe({
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
    src: g,
    srcSet: b,
    variant: v = "circular",
    ...y
  } = r;
  let x = null;
  const C = {
    ...r,
    component: s,
    variant: v
  }, T = pd({
    ...d,
    ...typeof u.img == "function" ? u.img(C) : u.img,
    src: g,
    srcSet: b
  }), w = g || b, m = w && T !== "error";
  C.colorDefault = !m, delete C.ownerState;
  const E = sd(C), [O, M] = le("img", {
    className: E.img,
    elementType: cd,
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
      src: g,
      srcSet: b,
      sizes: f
    },
    ownerState: C
  });
  return m ? x = /* @__PURE__ */ S(O, {
    ...M
  }) : a || a === 0 ? x = a : w && i ? x = i[0] : x = /* @__PURE__ */ S(ud, {
    ownerState: C,
    className: E.fallback
  }), /* @__PURE__ */ S(ld, {
    as: s,
    className: q(E.root, l),
    ref: o,
    ...y,
    ownerState: C,
    children: x
  });
});
process.env.NODE_ENV !== "production" && (bs.propTypes = {
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
const dd = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMAAAADACAYAAABS3GwHAAAACXBIWXMAACE4AAAhOAFFljFgAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAABBtSURBVHgB7Z3dbtTWFseXB2gPPYWmcNQgQGWCRKVEaklKpVY6p3RyWVIVeIIOT0D6BIQngD5B0ycgXIReJlD1ojeQctRUgqpxUEAkUnISAoGQD5/993gHJ/HM2B7bY6+9ftKOPZ5EynjWf6+P/WGLhERwHKdDHcpeO6Gaft3hOyff6yAWvQZs39H2rk/r15ZlLZLQMhYJkfAZeq9qp33nZcoWCGDC16aVKMZJiIQIoAmewVdU+8o7lql+D54HxqkmiNs4KlHYJNRFBLADz+DRo5+nmsH3UrGBGMZVuykeYjciANoy+gv0xujz3MO3AsKmcdVGqCYI4/MIYwXg6+mveEeuRt8ICGFECeEnMhTjBKAMv0K1nr5KZhp9EDbVPMMPSgwTZBBGCMAX4nxHtRBHqA8EcN0Ur8BaAJ7hD6p2maS3j4qtGkQwzLmSxFIAYviJM6zaVY5CYCUAMfzUGSZmQmAhADH8zLlKTEKjwgtAGT8MH6VMMfxssVUbKnqyXFgBeOXMa1T8kdqiY6s2qIRwkwpIiQoGwh3VflSnYyTGnwfKqo3gO1GtTAWjUALwwp0pqg1iCfmiqtqY+o6+owJRiBDI61nQ61dIKALDVJBqUe4FoIwfI7gwfklyi4VNBUiScxsCebH+dXV6g8T4i0hZtWH1HV7zytS5JJcewAt5kOSWSeCArVp/HkOi3HkAZfxVdbhHYvycKKt2L48Jcq4EoG7QEEm8zxV8p8Ped5wbchECeTEiDP8CCSaAhTiX8rAire0CkHjfWGzKQV7QVgGI8RuPTW0WQdtyAGX8mMYgya7ZlKk2ety2KS1t8QDeB0bPL8muAJAL9LdjPXLmHsArc4rxC35gC20pk2bqATzj/5EEoT7VLKdPZCYAX8wvCI3INBzKJATyxfyC0AyEQ5klxql7ACl1CjGBJ+hLu0SaqgBMN/61tXVaWFiilZVVevbsBb18+cpt4OXL1W2/u3fvXnrnnbfd4/79/6CDB/+51fbt20uGYlPK4wSpCcCb3mBUnR8GD0OfnZ13204jjwtEcODAu3TkyCHq7DxMhmFTzROkMm0iTQFgHr8Rc3vm55doZmbONfr19XVKE3gIiOD48Q/o8OH3yBCwge9FSoFUBODN+LtCjEFvPzX1hGz7SepGXw+ESqdOfeiKwQCwxHKIEiZxAXCv9efB8HcCIXR1HaVy+SgxJ/ExgkQF4CW9iPtZjvIixJmc/Dux2D5pDPAIiVeGEhMA56R3ZeUV3b//0K3oFAHkCN3dJ92qEkNsSjApTlIAWMB+mZiBcOfhw0e5CXfCgtIpRMDUG+D5Bd9TAiQiAI5xP2L9Bw8e0fT0EyoyyAt6ek4SQy4qEYxQi7QsAI6DXQh57t79063pcwDjCJ9+2sMtJEokH0hiLhDKnWViAoz/t9/+y8b4AT4LPhNGpBmh15G3REsC8EKfKjFBG39eqzytgCkYDEVQ8faLjU3sEIhb6MPZ+P2gVPr55x9zCocQCnXFrQq14gHYhD6mGD9g6AkQCl2jmMQSgLdhbZWYgITXBOPXQAR3704WrrTbgKr3wJTIxPUAsRWXN/74429WCW9Y8JlR5mVELJuMLAAv8S0TA2ZmZgtf528FzGdCY0JvnIQ4kgC8xJfFLE/E/ZOTU2Q6GOVmlA9ciboVe1QPUCUmvT+Mn1EMHBuMeN+//4CYAOOPNB0ntAA49f4Ifebm5kmogUl+mOnKhMEoXiCKB2CzwAVuX9gOI48YyQuEEoDX+1eJAZjdaVLJMywojeLeMCG0FwjrAdj0/rb9mIRg8rTKrUVCe4GmAuDU+yP2l96/Pnq5JxNCeYEwHqBKTJDYvzmMxgVCeYEwAijUk7/rga1LpPdvDrwA7hUTmnqBhgLgNuorhOPx4zliAoz/fKNfaOYB2KzxnZ1dICEcWWzwlSHVRm/WFYC3O2/bHl2TJE+fsvpCUwdh0NISmwmClUYzRRt5AEa9v4z6RoXZSHndMKiRACrEBBOnO7fK06esQsZqvWQ4UACckl+48+VlEUBUMDLMKGyE8QeG8/U8QMPMuUhI7x8fRuVQEDibYZcAPFfBZltzEUB8mI2b9AaFQUEegNWe/svLz0mIB7POI3BMIEgAbMIfwGwfnEzRj3NixK7OPUgAFWIEkmAhHgw7j8rOMGibALwBA1Z7+8v8H8HHrmrQTg/AKvwBMgIcH4YhENhm4zsFUCFB4E3F/2JLAN7CFxZzfwShAdvKoX4PIMYvmMJX+qQUdJET+/ezfE5WJjB+Qn1Fn4gHEOrCuPOo6JNS0EVOYD98IR6MPUBZ5wGuAOJuLV0EmD4qNBMYdx4w/jJOtAcoE1MOHHiXhHjg4XqMOY0fJf8LjkgSHB/mAnBz3pL/BUcOH36PhHgwF0AZP9gLAImceIHowPj37mWbBIOaB/CyYVYT4HbS2XmYhGgcPMg+d3IrQfAAZWKOCCA6nZ2HyADKRgjAAHeeKAgbDek0TkAAJ4g5+EKPHDGiR0sEgzym6wFYx/+aY8c6SQjH8eMfkCGYkQMAlEMlDGoORn8PHTKmdGxGDqDp6jpKQmNOnfqQDKIj7pPiC0m5fFS8QAPQ+xsU/gBzQiCAZFi8QH0MvDdlozwAgBeQkeHdoPfHvTENY6pAGniB7u6TJGzHsNhf02GcAMCRI4dNqnQ0BffDsNhfY1YS7Of06VOSECtwD0z2iMYKADGvoW5/Gz09J43OiYwVAEDVw8TET4PPb2jos4XRAgDwAgcOsF74EQgmCEoxQATgVoU++6zbqDAA4d+ZMz0k1ASwSIYDg/jii4+NEIFJnzUEiyIADxMMQ4x/F4vGh0B+OBuIGH8wEIBNwhbaUDglxkh4xfgDsSUECgAi+PLLPhYlUpQ6xfjrg6FQEUAdMEiE3nNycqpwT5rBCO9HH31o9DhHCGwIwCahLsePd7qrySCC2dl5KgL4fz/55CPp9ZtjiwcIQa1u3k0zM7P08OGj3D54D/9nT0+XbAMTnkUIYJqEUMAboE1NPSHbfpwbISDcQayPJhP8ImFbjuNgi7h7JESm3R5BDL9l+ixva8T/kRCbhYUlVwxPny6knizD0PX8fVnT0DLvW/ipRDBFBq0NThMkymjPnr1wWxLgIR+I69Fkl7vEWLQs6319JydIBJAI2lABvAFEsLT0gpaXX7gPnl5bW6eVldVdnkI/yQaJLBoG4nBN9jNKDdg86Ttrk5A4MFyEKRKq5BJXAHou0O8kCGaxTQATJAhmYeOHToJRCUIibNwOEYKZqATYtf2S9wKjwTYJghmM65NS0EVBYM5WyO8XwG0SBDMY1yeWPpERYcEgulTYb+NkywN4eYBUgwTuTGjjBzvXBI+TIPBm3P9ipwBukiDwZsT/wvK/kPEAgTnuBDj/hW0ewMsDxkkQeDK+80LQvkASBglcGdl5wdp5QcIggTHve1HOFrs8gJRDBaaM7DR+UG+lxVXVKiQ0BItb1tY23IUutcUuG1tHLHjB+/qoabZ+GGsI9u3b455jYQzADta4/mbRzNvue7iOcxyFpowEXbSCLkoY9AYYL4z22bPn7uouGPfy8vPAVV3tQosDosCSSS0QnIs4XGzV+3cFvWHV+wslgmvqMEgGAaNeWFh0DV0bfV73AAoLxAEhoGF5pRaGYQwrAVwKeqORACrqMEZMQc8OQ/cvYC/a9odx0aKAILBc0wBP0acEEJjXWo3+SokAAqgQA/wGj21MktqxgQsQAcSgRcFIEJj701fvzWYCqKrDj1RQ5ueX3AaDRxPCAxFgdwsIouAhU1UJ4Kd6bzYTQOGSYRg8evmZmTljQpq0Qd4AQWAzLgiiQNRNfjUNBQCUCK6owxDlGDH67CiYGIaUAK42+oUwAsilFxCjbz8FEEOXf+5/EE0FAPLiBZDIYmfmx49nC1+e5AbEgGcuQxB6wK7N1C19+gkrgLZ6AfT22IVZEtligOQZXqHNzylo2vuDUAIAWXsB3dvb9hMJcQpKG71CqN4fRBFAJl5gZeWVa/QS2/Pi2LFOVwwZCSFU7w9CCwCk6QUkzDGDDITQtPLjJ6oAEvcCYvhmgrAIQki4emSr1h+29weRBACUCDBB7hq1iBi+ABIWQsNR3yAiCwAoEeCZYr0UAzF8IQhUjLq7T7YSGjUd9Q0irgAqFHGmKJJbPGt3bq4Yz9oV2kMLOcIFJYDI69ljCQAoEWCSXLXZ7+ly5l9/PSJBCEtEIYQue+6kFQE0TYhh+Ah3pJwpxEGPI2BQrQE2RUx8/cQWAKiXECPO//PPv2XOvZAIEMKZM931pmVHTnz9tCQA4F80g3DnwYNHND39hAQhaQLCotihjyYJAZTV4Z4Kdzok3BHSxhcW2dRC6KNpWQDgzp17F5aXn98gQciIo0f/Ve3r644d+mhKlABnz/aNWJZznQQhA1TUcT0J4weJCACsrm5cVSKwSRBSxbHX1jZCz/VpRiIhkObnn8fKm5t7MUos+4oKKeAsvn690XfxYr9NCZGYBwBff41/zPmeBCEFHKc0mKTxg0QFAAYGzg5TzhfRC4Vk6Jtv/pNI3O8n0RDIz61bv9xwHLpAgtAiKrccOXfu7EVKgcQ9gGZ1df2SJMVC6zi2KrC0NNjViNQEoGK1Rcva6BcRCPFxbJX09sOWKCVSC4E0UhkS4rFl/DalSGoeQFOrDJX61WlqKha44Shb2biYtvGD1D2AZnT0116iTUycE08gNGG9b2CgP5PHdKXuATQDA/+ekDECoRmOY1WzMn6QmQBAbYzASS2jF4qMswjjT6PW34jMQiA/Eg4J23Fj/v4se35Nph5AUwuHSlIiFaidxg/a4gE0KJE6zp4x5frKJBhINqXORrRVAEBEYCrtN37QlhDID8YJ1FB3n2UFP8hY4Afm9iQ9rTn2/0I5YnT0l9w/jklomaGBgS8TW9DSKrkSABgdvVNV/xa2WpEKEStQ5iwNZl3mbEbuBAAkL+BGPuL9INqeAwTxJi+QhfZFBwvY8xLvB5FLD+AHIZFKkK+INygazuLGBl369tuzuS5u5NID+MH0CawrUDd0mIRC4Dg0jl4/78YPcu8B/Ig3yDsY1bVQ5fmBCkKhBABqC2z2qHKpVSUhRzjDqtf/Ps3VW2lQOAFoRkd/Pa9Co+viDdrOhCpWDJ47d/Y2FZDCCkAjYVG7KF64E0ThBQC8dcffkYwiZ4Br+Kq0uf5D0cKdIFgIQCP5QZrwMnwNKwFoRAhJwtPwNSwFoNGhkUrSqpIjRIW34WtYC8CPN8nuMsV8vrEpYBBL3afhtbW1m5wNX2OMADSjo2NKAHsuq8pRRbyCBjM1abhUopGiljPjYpwA/Hhe4bw6NXATX3cXholSyRlaXd343YTePgijBaC5cWOs46239lyoicGpqCPTtQhuXD9uWZsjq6ubRoQ4zRABBHDr1p2vNjfpgmVZFSp+zjDhOM44whuTe/p6iACa4JVUT6sYuaJuVy9yB8otbg9vw+DV/4kZmbfF4BsjAogBPIQSRJdqp2uicHqzD5uwp5KF3t1Wcbw6bv7++jXZYvDREAEkRC2PoLKqMJ1Qt1UdqaNWZXIfJI6dEMrer3bUFwt68Nou2upvbdWLI1Fd9DYQW6wZ/ca0GHpy/B/PrV+5tmNiEwAAAABJRU5ErkJggg==", fd = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMAAAADACAYAAABS3GwHAAAACXBIWXMAACE4AAAhOAFFljFgAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAABAaSURBVHgB7Z1NjNTmGccfj0qkkDYlzQeRSsTsIZUCkWDblEaV2szm1oLKkkNyzGzuFUSqkp7KklsjVRApZ9jcSg5lkKC9laWnFtSyVIEDVFmj5BCISAeikAaSdZ+/7Xfxztoztsf22M/7/KR37ZndRIzn+b/Px/vlkFIInudt4ks7bFu5mdebIvcUeR1HP2zAjVzd8P1r5rXjOH1SxsYhJRMRQ9/JbUfkvk3VAgEsRdo1FsUiKZlQAYwgNPgOtxfCa5uSe/A6sEiBIM7iyqJwSUlEBTBAaPDo0fdSYPA7qdlADIvcTqqHWI8KgFaNfpbuG32de/hxQNi0yK1HgSCszyOsFUCkpz8YXqUa/TAghB4L4T2yFOsEwIbfoaCn75KdRh+HS4FneIfFsEQWYYUAIiHOqxSEOEoyEMARW7yCaAGEhn+A237S3j4rLjeIYEFyJUmkANTwC2eB2yGJQhAlADX80lkgYUIQIQA1/Mo5REJCo8YLgI0fho9Sphp+tbjc5pueLDdWAGE58zA1f6S26bjcDrAQTlIDaVHDQLjD7RjfniE1/jrQ5tbDd8KtTQ2jUQIIw51lCgaxlHrR5XaGv6NXqUE0IgQKexb0+h1SmsACNaRaVHsBsPFjBBfGr0lus3CpAUlybUOgMNY/wrcnSI2/ibS5LfB3eDgsU9eSWnqAMORBktsmRQIut5k6hkS18wBs/F2+XCA1fkm0uV2oY4JcKwHwA5onjfelgu90IfyOa0MtQqAwRoThz5JiA1iIM1eHFWkTF4DG+9biUg3ygokKQI3felyasAgmlgOw8WMagya7dtOmYPR4YlNaJuIBwg+Mnl+TXQUgF5iZxHrkyj1AWOZU41eiwBYmUiat1AOExn+MFCWZbpXTJyoTQCTmV5RhVBoOVRICRWJ+RRkFwqHKEuPSPYCWOpWcwBNMl10iLVUAthv/F/eILn1GdOMLouXbRJ9+GTRw48u1f7vxW0SbNwbXxx8kmnqY23f5wfH1oQ1kKy6VPE5QmgDC6Q1W1flh8DD0c9eJzn+y3sjzAjFs5faTJ4l2bSbbcCnwBKVMmyhTAJjHb8Xcng9uspv7KDD8O19TqcBD7GIhvLiFaPujZAvYwHcflUApAghn/B0kwaC3P7UctLKNPgmESq88zTHCU2QDWGI5TwVTuACk1/rrYPiDQAh7poImnMLHCAoVQJj0Iu4XOcp7juP6o5fvJ7J1wwKPUHhlqDABSE56b9whevdiUNFpAsgR5p4hemIjScSlApPiIgWABez7SRinPiQ6frU+4U5aUDqFCIR6A5xf8DoVQCECkBj3I9Y/foXotEuNZjfnBa9tI4nsYxH0aEzGFoDEwS6EPL//J/va2yQCDKi98UNxIVEh+UARc4FQ7myTEGD8v/u7HOMHy7eCz4TPJgizjnwsxhJAGPp0SQjG+Ota5RkHfCaBIuiE+8XmJncIJC30kWz8UVAqfet5UeEQQqGpvFWhcTyAmNDHFuMHAj0BQqHDlJNcAgg3rO2SEJDw2mD8BnzWt//VvNLuELrhgSmZyesBciuubhy9JCvhTQsS4z9eIUnkssnMAggT3zYJADM4m17nH4fT4ZwmIezMkxBnEkCY+IqY5YkYGPN6bOf9q6LygYNZt2LP6gG6JKT3h/ELioFzgxHvd/9NUoDxZ5qOk1oAknp/hD7nr5MSculmsJhHCAeyeIEsHkDMAhdMblPWgmKAEI+YyQukEkDY+3dJAJjdaVPJMy14Jng2QkjtBdJ6ADG9/ymXlATwbGzzAiMFIKn3R+yvvX8y/nJPy7xAGg/QJSFo7D8aQR4ylRdII4BGnfydBLYu0d5/NP5mXjdJCiO9wFABiBr1/ZiUlPxVzrOC8e8d9gejPICYNb7Y0UFJx/nrsibKDftlogDC3XkndnRNkcD4ddQ3Pf4Wj7dICp1hM0WHeQAxvf8/dNQ3M4JGhkFiGDRMAB0SgiunN6sMYSFjNykZjhWApOQX7tz9nJSMYGdrQWEjjD82nE/yAEMz5yaxbOFil6L4QE45FMTOZlgngNBViNnWXMOf/AjbQWJnXBgU5wFE7em/rOFPboR5z9gxgTgBiAl/wKeyerFKEThyvq5zjxNAhwSBJFjJh8DOozMYBq0RQDhgIGpv/xs6/0e5z7pq0KAHEBX+AB0Bzo/QzmONjQ8KoEOKIptO9MWqAMKFLyLm/ijKENaUQ6MeQI1fsYUXzE0r7k1JPPEgKTkRfEJ9x9yoB1ASEXrIHuiYm1bcm5J4XD1AbnAqvVDaJg/wBZB3a+km8LjcXqx0BHceMP42bowHaJNQpr5DSk6mHibJ7MCPVvSFRATHsaUjXAB+ztuKvpDI9kdJyQmOVxVMGz/ECwClPC2FZgfGLzgJBoEHCLNhURPgBvnxZlIy0pafO/mVIHiANgln15OkZMSSZ9a2QgBI5oS780JB2LjLDq+5FQLYSsLxv1D1AqmxxPiB7wFEx/+GmS2kpMSiZ2VHDgCefVTDoDRg3MSi0rEdOYBhzxQpI3j5abKJTXlPim8kEIB6gWTQ+1sWKtoTAgEkw+oFkrHw2bSt8gAAX7LOD1oPnsnuNlmHNVUgA7zA3DOkDGBZ7G/YZJ0AAMYEdJLcffA8LC0T25UER/n1Dk2IATzia9vIWqwVAFY7vfIDsp65bXYvG7VWAAAJ8Z42WQs+v+0j5FYLALzMXqAte+VTLJjvP2dx6GOwXgCIgX/7nF2lUXzWN39ECgUC6JPlIAZ+63k7RIDPiM+q28X49FUAITaIQI1/HX3rQ6AokkWgxh8PBOCSsooRgaTEGAmvGn8sroZAMcBQ/vAzGSVSlDrV+JPBWKgKIIG57ewJuPc8eql5J82guoWBPhsnuGXAhQBcUhLBQBFWk0EE565TI8A8J0z10F5/JK56gBTAkN7ksYIzHxO9f7W+B0gj0cXglkWL2sel73ieh7NTT5CSmlPLRKfd+gjBLPTRFW+ZmYUAsEXcBVIyM2mPoIY/NtNOuDXif0nJzQc3iRY/DnKEsg/mhtFjq8cXt+iahgJ4xMFPFgE7dXvWBpfJuU8CISzf5gzrNhUCYnvE9WgWbFpbFX3HcR4xj3KJVACFgNVVZhc6lE4/vBUIAYL49MvAQ5hrFDP6jIQbDds5YlfrZx9Tgy8J2DyZR+uSUjgwXJRQn9VQpY74AjBzgS6SotjFGgEskaLYhYsfJglGJQiJsHU7RCh2wgmwb/ut8AVGg11SFDtYNDetuDcVRTirIX9UAGdJUexg0dw45kZHhBWLmOKw38XNqgcI8wCtBinSWTLGDwbXBC+SoshmMfpiUAAnSVFk04u+cKIvdDxAEY4/AS76xhoPEOYBi6QoMlkcfCNuXyANgxSp9AbfcAbf0DBIEcwjYZSzyjoPoOVQRSi9QeMHSUstDnHrkDIULGoxC1xuYJHLXb7+L7hiMQx+Z64G/N0wsIbg2xuCe7OtCZZB4n2zaAZXLJbZuCG4PrSBlNH04t504t7UMOg+MF4YrVnVBeO+9jnR9Tv12SwL4ti8MRAMtnQ0AsG9isPH5d4/9hBYJ+m/YBEc5ssBsgjs7nDps3D54p3A6Ef12HUH4sDySuxwh5VpZrmlZSywAObifjFMAB2+nCGhoGeHoWMBu3sruG/a9od5MaLYHi7XtMBTTLMAYvNaZ9h/xSKAADokgKjBX74Z3Cv3gSC2hYLY/j1RgsDcn+mkX44SQJcvx6ihYL+eS6Z9RkoGIAJsw7L9scaHTF0WwHtJvxwlgMYlwzB69PJnPrInpCkb5A0Ilxq4GVdi8msYKgDAIjjIl3mqMWr01dEwMcyzAA4N+4M0AqilF1CjnzwNEMNUdO5/HCMFAOriBZDIYmdm7MPZ9PKkNCCGV54OhFCTM9YSS59R0gpgol4Avf37VzSRbQpInmeemvg5BSN7f5BKAKBqL2B6ezQNcZrJBL1Cqt4fZBFAJV4Ao7GnXI3tpdHZEoihIiGk6v1BagGAMr2Ahjl2UIEQRlZ+omQVQOFeQA3fTjDQhlMsC64eudxm0vb+IJMAAIsAE+QO05io4SugYCEMHfWNI7MAAIsAZ4rtpByo4Stx4FCRuWfGCo1GjvrGkVcAHco4UxTJ7dHLROcbctauMhnGyBFmWQCZ17PnEgBgEWCSXHfU35lyJk5TVJS0ZBRC6rLnIOMIYGRCfOpDouNXtZyp5MOMI2BQbQguZUx8o+QWAEhKiBHnH7tc3CmJit1ACG8+lzgtO3PiG2UsAYDoohmEO8evBKeoK0rRxIRFuUMfQxECaPPlAoc7mzTcUcomEha5NEboYxhbAOCNv3mz/7lNJ0hRKuKn36fub6bzhz6GFhXA2z93sOfKEVKUClhhWyvC+EEhAgAr9+gQ+xOXFKVEPI9t7B6lnuszikJCIMPsX7x26xvCKLHuK6qUQZ872unevvHi/iiFeQDQ+4Xjrjj0OilKCXDoc6BI4weFCgD0djsLLIJ5UpQCgU319hQT90cpNASK8tJp7wR5NEuKMi4O9f6029lHJVC4BzCs3KU5TYqVcUHS69tSSZQmAI7V+istmlERKHmB8Xtf0wxsiUqitBDIoJUhJQ8R43epRErzAIawMjTDt6WpWBFH32vRvrKNH5TuAQyzp72dLc9fRKOeQBkKd5jTXE2s5Jiu0j2AAR9IxwiUUXCtv1uV8YPKBADCMYLSMnql0fR94y+h1j+MykKgKBoOKQP0kSdW2fMbKvUAhjAc0hKpAiZm/GAiHsDgl0hX2BN41CbFOqoqdQ5jogIAKgI7qYPxg4mEQFH8cYK7NI35HqTYAX/XbPzTkzb+4J9SIzg5PsjJ8TwpYvFnde5Ov3lt2dRKAOCl016XwyFstaIVIln0/fn8FZc5R1E7AQDNC2RRl3g/jonnAHGs5gW60L7xYAF7XeL9OGrpAaL4IRHRQfUGjaO/skJzvV85tS5u1F4AIAyJIIIuKbXHI1r07rHx17TXj9IIARjUG9SefljleYcaQqMEANQb1JaFlXv0epmrt8qgcQIw7Dvt7XWQJKs3mCgc7ixxKeXAiV86Z6mBNFYABg2LJkbjwp04Gi8AgLCI622v6ihyJcDwj9Bdeqdp4U4cIgRg0PygVEQZvkGUAAwqhEIRafgGkQIwrIZGOMxPc4SsiDZ8g2gBREGy7Hm038l5vrEt+INYXNKke3RSsuEbrBGAwV+PTLSfcK6ZegUDDH3Ba1GvqeXMvFgngChhCXWvpZv49sMa/rz3FV20obePw2oBGGZPeJtaD/gigBg6JHctQp+/8UXHod43X9kR4oxCBRDDvj97LzgrNMs9ZKfpOQN6eQdxPYc3Nvf0SagARoBKEothh8OegY1ppxOeiVxTENa4vsFzT+/dpbNq8MNRAeTA9xAeTXH3uiMUBbxEtWFTsKfSEv8bXKdFS994dJFLlq4afDZUAAWBPIIeoDY/0K1cZWp7EITnX9v4Pcfd/pXfg1CSxIIY3TdgLCN0cO/576FXx5pal/9/19TQi+P/q2gQShu80aQAAAAASUVORK5CYII=", gd = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMAAAADACAYAAABS3GwHAAAACXBIWXMAACE4AAAhOAFFljFgAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAA/wSURBVHgB7Z09cxRXFoZPD1jewKjkMptAwIjaLbQJQlUrJ2jLI2/gggQREXpIjW3gFyB+gbDL9oaWQ0ceEjvyIsqQIFdZkgOLRGqqVkoQtSogQVAa37f7Xqk16p7p7unu6T73PFVX/TESSDPnvefjfrRDQia02+0Rdajrdko1cz0SOKfAdRjbugE3cHT1/Sfm2nGcbRL6xiEhEQFDP6faeOC8TsUCASwF2hMligUSEiEC6IE2+IZqH+hjnaJ78DKwQL4g7uOoROGSEIkIoANt8OjRL5Fv8Oeo2kAMC6rdFQ9xGBEA7Rn9DO0bfZl7+H5A2LSgWot8QVifR1grgEBPf0sfuRp9NyCElhLCd2Qp1glAGX6D/J6+SXYafRgu+Z7hCyWGJbIIKwQQCHE+Jj/EEaKBAO7Y4hVYC0Ab/g3VrpP09klxVYMI5jlXklgKQAw/c+ZVu81RCKwEIIafO/PETAgsBCCGXzi3iUloVHkBKOOH4aOUKYZfLK5qs1VPlisrAF3OnKPqj9RWHVe1G0oId6mC1KhiINxR7Vt1eo/E+MtAXbUWPhPV6lQxKiUAHe6skz+IJZSLpmr31Gf0MVWISoRAumdBr98goQrMU0WqRaUXgDJ+jODC+CXJrRYuVSBJLm0IpGP9O+r0BxLjryJ11ebVZziny9SlpJQeQIc8SHLrJHDAVW26jCFR6TyAMv6mOvxGYvycqKv2WxkT5FIJQL1BsyTxPlfwmc7rz7g0lCIE0jEiDH+GBBvAQpyrZViRNnABSLxvLS6VIC8YqADE+K3HpQGLYGA5gDJ+TGOQZNdu6uSPHg9sSstAPID+g9HzS7IrAOQC04NYj1y4B9BlTjF+IQhsYSBl0kI9gDb+b0kQomkWOX2iMAEEYn5B6Eah4VAhIVAg5heEXiAcKiwxzt0DSKlTSAk8wUTeJdJcBWC98b96RbSxQfTiJdHWFtHz5+r8hf+aORrefpvo2DtEQ+o4PEx0/Lhq7/lHvGYnLuU8TpCbAPT0Brvq/DB4GPraOtH6+mEjT4snhL8SjdaJTp8my3DJ9wS5TJvIUwCYx2/H3B708quPfaOHCPIE3mB0lGjsDNHJk2QJ2MD3MuVALgLQM/5uEWdg6MvLRCu/52/0UQwfI5qcVGIYIwvAEstZypjMBcC+1l8Gw+8EQjg7TjR+lpiT+RhBpgLQSS/ifp6jvGtrRA8eZhfbZw1/j5B5ZSgzAbBOelG9+fm/RJubVAlOqxxhakpVlY4RQ1zKMCnOUgBYwH6duIFwZ/HX8oQ7cUGyPHWeqzfA8wtuUgZkIgCWcT8M/tEjP9avMsgL4A34cVmJoEV90rcAWA52IeT56SdV039GLMA4wsWL3EKiTPKBLOYCodxZJy7A+Ft3+Rg/wN/SapU3eU+HWUfeF30JQIc+TeKCMX5ehuLz/AVHETT0frGpSR0CsQt9OBt/EJRKZ2Y4hUMIhUbTVoX68QB8Qh9bjB/w8wQIheYoJakEoDesbRIXkPDaYPwGiODHH6tX2o2mqR+Ykpi0HiC14krHL7/wSnjjgr95cZEYkcomEwtAJ7514sAfq9Wv8/fD8orfeHAuTUKcSAA68eUxyxNx/8OHZD3wAnzCv1tJt2JP6gGaxKX3x6Q2PjFwevAe/PwzMQHGn2g6TmwBsOr9Efpg8Yrgs7Hpz3TlwY0kXiCJB+CzwIVX8pcND9l4xEReIJYAdO/fJA5gdqdNJc+4oDTKJyGO7QXiegA+vT+fDzl7Vlas8wI9BcCq90fsL71/NN5yT7u8QBwP0CQuSOzfmxU2AojlBeIIoFJP/o7E26BKev+emM28eNDTC3QVAKtR39VVEmKCPY54AOO/1O0benkAPmt8110SYlLEBl/F0ez2YqQA9O68A3t0TaZgkEdGfeNjtnjkQaPbTNFuHoBR7y+jvolZY/WeRYZB3QTQIC48ZdObFQevTqMZlQyHCoBV8gt3/szC+f79gooZn7ARxh8azkd5gK6Zc6XgE8sWz0ZFdsKLR+hshkMC0K6Cz7bmNq72ygpe4ybnwsKgMA/Aa09/8QDp4fXehY4JhAmAT/gDsPJLSAe/kfNDnXuYABrECan/p4df59HoDIMOCEAPGPDa2//lSxIEzaFqUKcH4BX+APEA6eE5efCAjXcKoEGCwJtG8GJPAHrhC4+5P4IQzYFyaNADiPELtvCBOamF3WQFz+dkFQPfJ9Q3zIl4ACEavp1Hw5zUwm6yQjxAevh6gLrJAzwBpN1auhIMD5OQEr6dB4y/jhPjAerElePHSUgJ7/duHF9qwQuWHHuHhJTwFoCX89aCFyw5eZKElODxqnyp4wt/ASCRk0Q4Oej9+SbBwPcAOhvmNQGuk9FREhLCP3fyKkHwAHXizmkRQGLs6DTqdgiAvzvPFrxXdnQapyCAU8QdfKASBsXHnvfK8wC843/D2BkSYjI2RpZgSQ4AUA6VMKg3w6pidvIEWYIlOYDh7FkSejA5SRYxkvZJ8dVk/Kx4gW6g97cn/AEWhUAAxi9eIJpxvjNiIqjb5QEAvICMDB8Gvb+FnYM9VSADvMDUeRI6sCv2N4zYJwBw+rRNlY7e4P2wK/Y3WJYEB/nwQ0mIgeUe0V4BYKXY5D/JemD8FudE9goAoOphc1UIBQE7Q5897BYAeH+S+8KPcPA3T02R7YgAEANfuGBXGICS58WLJPgC2CbbQT4wc8kOEcD4Z2ZkLMRnWwRgsEEEYvydbEsIFISzCMT4Q4EAXBL2MSLglBjjbxHjD8OVECgMiODKFR4lUpQ6xfgjOUoigGj+NeWvJ374sHpPmkF1CyVemf3aDRcCcEmI5h9j/ryhB0oE6+tUCbD67d8fSq/fG1c8QBwQEl1UYwV/rBItLpb32VlIdM+f9ye3CXHYhgCekBAPeAO05WXVVsojBIQ7iPXPyoq3hLhOu93GFnG/kZCcQXsEMfx+mXD01oj/JyE9G5tEq3+oHMHNP1k2exyNjcmahv5518FXJQJkd3US+mdNvZXra0Rbz1TbokxAMgujR2yPmr709lmw7TjOu0f1xRKJALIBWwqabQXhDYwQ0BAq4Z45BjEVGyTcOEf59Zjeo0cMPg9g82QE4JKQPTBcGLCEKmXEE4CZC7RMgmAXBwSwRIJgFy6+mCQYlSAkwvbtECFYiUqAPduv6QuMBrskCHawYE5qYTcFgTl7IX9QAPdJEOxgwZw45kRGhAWLGFVhv4uTPQ+g8wCpBgncWTLGDzrXBC+QIPBmIXjRKYC7JAi8aQUvnOCFjAcIzPEmwAVvHPAAOg9YIEHgyULnjbB9gSQMErjS6rzhdN6QMEhgzLs6ytnjkAeQcqjAlFan8YOjEd98W7UGCd3BopadHaLnz1V7sX+OI17zXsdxZ/9neq0fxhqCoSH/3CySwT00c40jdoAw92TBTBxaYTedsJsSBgUwK7ie6lVdMO6tp+rey/JsluUJ4R3VhvdXkg3rVWUiDuCq3n807AUn6ieUCObU4QbZBAz9fxv7yxfNscpAAO+954sBK9OGtUjsYl4J4GrYC90E0FCHe8QVb73ulr+IHcdnz6q3/WFajCiwgxxEwd9TTCgBhOa1TrefUiKAABrEgaDBb274i9WFfbDbxAktCAiDjyAw92ci6sVeAmiqw7dUVTY2dNtURr9JQgJOnNh/nnK1Q6amEsB3US/2EkD1kmEYPHr5x4/tCWnyBgk1vMPYGd87VIfI5NfQVQBAieCWOsxSmRGjL45qiWFWCeB2t2+II4ByegEx+sFTfjGMBuf+h9FTAKA0XgCGjp2ZVx9XvzzJDYhhctIXQjmeSxBZ+gwSVwCD9QLo7R8tSiJbFbzNe88M+jkFPXt/EEsAoHAvYHr7ld8lxKkqg/MKsXp/kEQAxXgBzKXBwycktucFtnPHM8uKEUKs3h/EFgDI1QtImGMH+QuhZ+UnSFIBZO8FxPDtBANt709mXT1yVZuO2/uDRAIASgSYIDdH/SKGL4BshdB11DeMxAIASgR4ptg5SoMYvhAGHioyNdVPaNRz1DeMtAJoUNKZokhu8cDptYo8a1cYDOlzhBklgMTr2VMJACgRYJJcs+c3mnLm4q8kCLFJJoTYZc9O+hFA74TYGL6UM4U0mHEEiCEalxImvkFSCwBEJsSI8x88kDn3QjZACBcuRE3LTpz4BulLAODAohn09I8e+aO3gpA1h8Oi1KGPIQsB1AlPml9eHpFwR8id/bDIpT5CH0PfAgDt77+foadbP5AgFMXf/9Z0PvoodehjqFEGOFeutNTXOyQIheDcycL4QSYC8Hj96ja15UF7Qs7AxmBrGZFJCGRoz83V6a0hjBLLhlpC9rTb2/Tm9YRz86ZLGZGdB1B4v5hDN0kQ8sChG1kaP8hUAMC5dm2enNosCUKWODTrfPppJnH/wX82J9pff/2DitdmSBD6pU0t57NrlykHMvcAe+zsXJWkWOgb2NCbnb4Gu7qRmwBUrKYSlp1pEYGQGt/4pz1byoncQiCDVIaEVOwbv0s5kl8IpNGVoWl1mpuKBWZ45c6dy3kbP8jdAxhUUnxOqRoT58QTCN15vYNafyGP6crdAxhUeXRJxgiEntScZlHG7/13VCD+GAHlltELFQZhD4z/k08yr/V3o7AQKIiEQ8IB/CkO00X2/IZCPYBBh0NSIhUGavxgIB7A4JVIjw7dU79FnQT7KKjU2Y2BCgCICCylBMYPBhICBfHegDc7E0oALRLsoK0+6zc7E4M2fjBwDxCk/fV/blF7d5YEvmBW57VrmS1o6ZdSCQC0v/yySbUj2GpFKkScQLJ7pHaj6DJnL0onACB5ATNKEu+HMfAcIIy9vEAW2jNAfYYliffDKKUHCOKFRM6RW+INKgZCHmpfdT77rNTFjVJ6gCDO55/Pe+sKiOZJqAjtBW/xesmNH5TeAwQRb1By/Pk8qPJ8QRWh9B4giHiDUqM+m9ejVTJ+UCkPEKT91VeXqK0SLPEGg2ZJ9foob96nClJZARgkLBoQFQx3wqi8AIA3bjD0l49lFLkAfMO/Qzs7X+S5WL0oWAjAoBfg41nGTRKyhZnhG1gJwCBCyBCmhm9gKQDDXmi0u9uUHCEhzA3fwFoAQfQku+uU9vnG1qAGsVDSfP36LmfDN1gjAINej3xdtYZ4BQ16e6c2r0aFWlUtZ6bFOgEE8bzCkSOXrNzE1zN61PBrs/Tq1bINvX0YVgvAoHKFESWEGU8Mu23lGRyeaxH8uH5BHVu2hDi9EAGE0P7mmw9oF15BiaH6OcOS+pgXEN7Y3NNHIQLogV9SfWucqNZQVxBDg8qKF9bgsaHK4Gl3QfXy98XguyMCSIHnId68GaXa0XFPFG3Vig6bsMqqpnr3Ngx+d0n9/8uqZOmKwSdDBJARXh4xNFRXYjhFeHh4rQZBqGtdaTJHao9EisVbROL4BuwQdtXGOZqrxjL83t1xnoihZ8efuB8O9a5VZecAAAAASUVORK5CYII=", lr = {
  extraLarge: 64,
  large: 40,
  medium: 32,
  small: 24
}, wm = ({
  types: e = "unknown",
  src: t,
  children: o,
  size: r = "large",
  sx: i,
  ...a
}) => {
  const l = e === "male" ? fd : e === "female" ? gd : dd, [s, c] = Ir(t || null);
  return ll(() => {
    c(t || null);
  }, [t]), /* @__PURE__ */ S(
    bs,
    {
      src: s || (!s && !o ? l : void 0),
      sx: {
        width: lr[r],
        height: lr[r],
        fontSize: lr[r] * 0.4,
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
function hd(e) {
  return ce("MuiButton", e);
}
const Nt = se("MuiButton", ["root", "text", "textInherit", "textPrimary", "textSecondary", "textSuccess", "textError", "textInfo", "textWarning", "outlined", "outlinedInherit", "outlinedPrimary", "outlinedSecondary", "outlinedSuccess", "outlinedError", "outlinedInfo", "outlinedWarning", "contained", "containedInherit", "containedPrimary", "containedSecondary", "containedSuccess", "containedError", "containedInfo", "containedWarning", "disableElevation", "focusVisible", "disabled", "colorInherit", "colorPrimary", "colorSecondary", "colorSuccess", "colorError", "colorInfo", "colorWarning", "textSizeSmall", "textSizeMedium", "textSizeLarge", "outlinedSizeSmall", "outlinedSizeMedium", "outlinedSizeLarge", "containedSizeSmall", "containedSizeMedium", "containedSizeLarge", "sizeMedium", "sizeSmall", "sizeLarge", "fullWidth", "startIcon", "endIcon", "icon", "iconSizeSmall", "iconSizeMedium", "iconSizeLarge", "loading", "loadingWrapper", "loadingIconPlaceholder", "loadingIndicator", "loadingPositionCenter", "loadingPositionStart", "loadingPositionEnd"]), ms = /* @__PURE__ */ h.createContext({});
process.env.NODE_ENV !== "production" && (ms.displayName = "ButtonGroupContext");
const ys = /* @__PURE__ */ h.createContext(void 0);
process.env.NODE_ENV !== "production" && (ys.displayName = "ButtonGroupButtonContext");
const bd = (e) => {
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
    root: ["root", l && "loading", a, `${a}${j(t)}`, `size${j(i)}`, `${a}Size${j(i)}`, `color${j(t)}`, o && "disableElevation", r && "fullWidth", l && `loadingPosition${j(s)}`],
    startIcon: ["icon", "startIcon", `iconSize${j(i)}`],
    endIcon: ["icon", "endIcon", `iconSize${j(i)}`],
    loadingIndicator: ["loadingIndicator"],
    loadingWrapper: ["loadingWrapper"]
  }, d = pe(u, hd, c);
  return {
    ...c,
    // forward the focused, disabled, etc. classes to the ButtonBase
    ...d
  };
}, vs = [{
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
}], md = U(rt, {
  shouldForwardProp: (e) => ut(e) || e === "classes",
  name: "MuiButton",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: o
    } = e;
    return [t.root, t[o.variant], t[`${o.variant}${j(o.color)}`], t[`size${j(o.size)}`], t[`${o.variant}Size${j(o.size)}`], o.color === "inherit" && t.colorInherit, o.disableElevation && t.disableElevation, o.fullWidth && t.fullWidth, o.loading && t.loading];
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
    [`&.${Nt.disabled}`]: {
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
        [`&.${Nt.focusVisible}`]: {
          boxShadow: (e.vars || e).shadows[6]
        },
        [`&.${Nt.disabled}`]: {
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
        [`&.${Nt.disabled}`]: {
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
    }, ...Object.entries(e.palette).filter(Be()).map(([r]) => ({
      props: {
        color: r
      },
      style: {
        "--variant-textColor": (e.vars || e).palette[r].main,
        "--variant-outlinedColor": (e.vars || e).palette[r].main,
        "--variant-outlinedBorder": e.vars ? `rgba(${e.vars.palette[r].mainChannel} / 0.5)` : H(e.palette[r].main, 0.5),
        "--variant-containedColor": (e.vars || e).palette[r].contrastText,
        "--variant-containedBg": (e.vars || e).palette[r].main,
        "@media (hover: hover)": {
          "&:hover": {
            "--variant-containedBg": (e.vars || e).palette[r].dark,
            "--variant-textBg": e.vars ? `rgba(${e.vars.palette[r].mainChannel} / ${e.vars.palette.action.hoverOpacity})` : H(e.palette[r].main, e.palette.action.hoverOpacity),
            "--variant-outlinedBorder": (e.vars || e).palette[r].main,
            "--variant-outlinedBg": e.vars ? `rgba(${e.vars.palette[r].mainChannel} / ${e.vars.palette.action.hoverOpacity})` : H(e.palette[r].main, e.palette.action.hoverOpacity)
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
            "--variant-textBg": e.vars ? `rgba(${e.vars.palette.text.primaryChannel} / ${e.vars.palette.action.hoverOpacity})` : H(e.palette.text.primary, e.palette.action.hoverOpacity),
            "--variant-outlinedBg": e.vars ? `rgba(${e.vars.palette.text.primaryChannel} / ${e.vars.palette.action.hoverOpacity})` : H(e.palette.text.primary, e.palette.action.hoverOpacity)
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
        [`&.${Nt.focusVisible}`]: {
          boxShadow: "none"
        },
        "&:active": {
          boxShadow: "none"
        },
        [`&.${Nt.disabled}`]: {
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
        [`&.${Nt.loading}`]: {
          color: "transparent"
        }
      }
    }]
  };
})), yd = U("span", {
  name: "MuiButton",
  slot: "StartIcon",
  overridesResolver: (e, t) => {
    const {
      ownerState: o
    } = e;
    return [t.startIcon, o.loading && t.startIconLoadingStart, t[`iconSize${j(o.size)}`]];
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
  }, ...vs]
})), vd = U("span", {
  name: "MuiButton",
  slot: "EndIcon",
  overridesResolver: (e, t) => {
    const {
      ownerState: o
    } = e;
    return [t.endIcon, o.loading && t.endIconLoadingEnd, t[`iconSize${j(o.size)}`]];
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
  }, ...vs]
})), Cd = U("span", {
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
})), Yi = U("span", {
  name: "MuiButton",
  slot: "LoadingIconPlaceholder",
  overridesResolver: (e, t) => t.loadingIconPlaceholder
})({
  display: "inline-block",
  width: "1em",
  height: "1em"
}), Cs = /* @__PURE__ */ h.forwardRef(function(t, o) {
  const r = h.useContext(ms), i = h.useContext(ys), a = Io(r, t), l = fe({
    props: a,
    name: "MuiButton"
  }), {
    children: s,
    color: c = "primary",
    component: u = "button",
    className: d,
    disabled: f = !1,
    disableElevation: g = !1,
    disableFocusRipple: b = !1,
    endIcon: v,
    focusVisibleClassName: y,
    fullWidth: x = !1,
    id: C,
    loading: T = null,
    loadingIndicator: w,
    loadingPosition: m = "center",
    size: E = "medium",
    startIcon: O,
    type: M,
    variant: D = "text",
    ...$
  } = l, p = Wo(C), A = w ?? /* @__PURE__ */ S(Kr, {
    "aria-labelledby": p,
    color: "inherit",
    size: 16
  }), I = {
    ...l,
    color: c,
    component: u,
    disabled: f,
    disableElevation: g,
    disableFocusRipple: b,
    fullWidth: x,
    loading: T,
    loadingIndicator: A,
    loadingPosition: m,
    size: E,
    type: M,
    variant: D
  }, B = bd(I), N = (O || T && m === "start") && /* @__PURE__ */ S(yd, {
    className: B.startIcon,
    ownerState: I,
    children: O || /* @__PURE__ */ S(Yi, {
      className: B.loadingIconPlaceholder,
      ownerState: I
    })
  }), P = (v || T && m === "end") && /* @__PURE__ */ S(vd, {
    className: B.endIcon,
    ownerState: I,
    children: v || /* @__PURE__ */ S(Yi, {
      className: B.loadingIconPlaceholder,
      ownerState: I
    })
  }), R = i || "", V = typeof T == "boolean" ? (
    // use plain HTML span to minimize the runtime overhead
    /* @__PURE__ */ S("span", {
      className: B.loadingWrapper,
      style: {
        display: "contents"
      },
      children: T && /* @__PURE__ */ S(Cd, {
        className: B.loadingIndicator,
        ownerState: I,
        children: A
      })
    })
  ) : null;
  return /* @__PURE__ */ be(md, {
    ownerState: I,
    className: q(r.className, B.root, d, R),
    component: u,
    disabled: f || T,
    focusRipple: !b,
    focusVisibleClassName: q(B.focusVisible, y),
    ref: o,
    type: M,
    id: T ? p : C,
    ...$,
    classes: B,
    children: [N, m !== "end" && V, s, m === "end" && V, P]
  });
});
process.env.NODE_ENV !== "production" && (Cs.propTypes = {
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
const xd = (e, t = "primary") => {
  var i;
  const o = Ie[t], r = ((i = e == null ? void 0 : e.palette) == null ? void 0 : i[t]) ?? o;
  return {
    disabledcolor: ot[0],
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
}, wd = U(Cs)(({
  "data-variant": e,
  size: t = "medium",
  theme: o,
  "data-color": r = "primary"
}) => {
  const i = xd(o, r), l = [
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
      color: H(i.disabledcolor, 0.38)
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
          boxShadow: `0px 1px 3px 1px ${H(s.shadowColor, 0.15)}, 0px 1px 2px 0px ${H(s.shadowColor, 0.3)}`
        },
        "&:active": {
          boxShadow: "none"
        },
        "&.Mui-disabled": {
          backgroundColor: H(i.disabledcolor, 0.12)
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
          backgroundColor: H(s.overlay, 0.12)
        }
      };
    case "elevated":
      return {
        ...u(s),
        backgroundColor: s.bgColor,
        color: s.fontColor,
        boxShadow: `0px 1px 3px 1px ${H(s.shadowColor, 0.15)}, 0px 1px 2px 0px ${H(s.shadowColor, 0.3)}`,
        "&:hover": {
          boxShadow: `0px 2px 6px 2px ${H(s.shadowColor, 0.15)}, 0px 1px 2px 0px ${H(s.shadowColor, 0.3)}`
        },
        "&:active, &:focus-visible": {
          boxShadow: `0px 1px 3px 1px ${H(s.shadowColor, 0.15)}, 0px 1px 2px 0px ${H(s.shadowColor, 0.3)}`
        },
        "&.Mui-disabled": {
          backgroundColor: H(i.disabledcolor, 0.12)
        }
      };
    case "tonal":
      return {
        ...u(s),
        backgroundColor: s.bgColor,
        color: s.fontColor,
        "&:hover": {
          boxShadow: `0px 1px 3px 1px ${H(s.shadowColor, 0.15)}, 0px 1px 2px 0px ${H(s.shadowColor, 0.3)}`
        },
        "&:active": {
          boxShadow: "none"
        },
        "&.Mui-disabled": {
          backgroundColor: H(i.disabledcolor, 0.12)
        }
      };
  }
}), Em = ({
  variant: e = "filled",
  color: t = "primary",
  ...o
}) => /* @__PURE__ */ S(
  wd,
  {
    disableElevation: !0,
    disableRipple: !0,
    ...o,
    "data-color": t,
    "data-variant": e
  }
);
function Ed(e) {
  return ce("MuiFab", e);
}
const qi = se("MuiFab", ["root", "primary", "secondary", "extended", "circular", "focusVisible", "disabled", "colorInherit", "sizeSmall", "sizeMedium", "sizeLarge", "info", "error", "warning", "success"]), Sd = (e) => {
  const {
    color: t,
    variant: o,
    classes: r,
    size: i
  } = e, a = {
    root: ["root", o, `size${j(i)}`, t === "inherit" ? "colorInherit" : t]
  }, l = pe(a, Ed, r);
  return {
    ...r,
    // forward the focused, disabled, etc. classes to the ButtonBase
    ...l
  };
}, Td = U(rt, {
  name: "MuiFab",
  slot: "Root",
  shouldForwardProp: (e) => ut(e) || e === "classes",
  overridesResolver: (e, t) => {
    const {
      ownerState: o
    } = e;
    return [t.root, t[o.variant], t[`size${j(o.size)}`], o.color === "inherit" && t.colorInherit, t[j(o.size)], t[o.color]];
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
    [`&.${qi.focusVisible}`]: {
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
  variants: [...Object.entries(e.palette).filter(Be(["dark", "contrastText"])).map(([t]) => ({
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
  [`&.${qi.disabled}`]: {
    color: (e.vars || e).palette.action.disabled,
    boxShadow: (e.vars || e).shadows[0],
    backgroundColor: (e.vars || e).palette.action.disabledBackground
  }
}))), xs = /* @__PURE__ */ h.forwardRef(function(t, o) {
  const r = fe({
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
    variant: g = "circular",
    ...b
  } = r, v = {
    ...r,
    color: l,
    component: s,
    disabled: c,
    disableFocusRipple: u,
    size: f,
    variant: g
  }, y = Sd(v);
  return /* @__PURE__ */ S(Td, {
    className: q(y.root, a),
    component: s,
    disabled: c,
    focusRipple: !u,
    focusVisibleClassName: q(y.focusVisible, d),
    ownerState: v,
    ref: o,
    ...b,
    classes: y,
    children: i
  });
});
process.env.NODE_ENV !== "production" && (xs.propTypes = {
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
const Od = (e, t = "primary") => {
  var i;
  const o = Ie[t], r = ((i = e == null ? void 0 : e.palette) == null ? void 0 : i[t]) ?? o;
  return {
    bgColor: r.fabBg ?? o.fabBg,
    fontColor: r.fabFont ?? o.fabFont,
    overlay: r.fabFont ?? o.fabFont
  };
}, Ad = U(xs)(({ "data-color": e, size: t = "medium", variant: o, theme: r }) => {
  const i = Od(r, e), a = {
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
}), Sm = ({ color: e = "surface", ...t }) => /* @__PURE__ */ S(Ad, { "data-color": e, size: "medium", disableFocusRipple: !0, ...t }), kd = (e, t = "primary") => {
  var i;
  const o = Ie[t], r = ((i = e == null ? void 0 : e.palette) == null ? void 0 : i[t]) ?? o;
  return {
    disabledcolor: ot[0],
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
}, Rd = (e, t = "primary") => {
  var i;
  const o = Ie[t], r = ((i = e == null ? void 0 : e.palette) == null ? void 0 : i[t]) ?? o;
  return {
    disabledcolor: ot[0],
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
}, Fd = U(Go)(({
  "data-variant": e,
  "data-color": t,
  size: o = "small",
  theme: r
}) => {
  const i = kd(r, t), a = ["filled", "standard", "tonal", "outlined"].includes(e) ? e : "filled", l = i[a], s = {
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
      backgroundColor: H(i.disabledcolor, 0.08),
      color: H(i.disabledcolor, 0.38)
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
}), Bd = U(Go)(({
  "data-variant": e,
  "data-color": t,
  clicked: o,
  size: r = "small",
  theme: i
}) => {
  const a = Rd(i, t), l = ["filled", "standard", "tonal", "outlined"].includes(e) ? e : "filled", s = a[l], c = {
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
      backgroundColor: H(a.disabledcolor, 0.12),
      color: H(a.disabledcolor, 0.38)
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
          backgroundColor: H(a.disabledcolor, 0.08),
          color: H(
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
          backgroundColor: o ? H(a.disabledcolor, 0.12) : "transparent"
        },
        "&:hover": {
          border: o ? "" : `1px solid ${s.borderColor}`
        }
      };
  }
}), Tm = ({
  variant: e,
  toggleIcon: t,
  children: o,
  color: r = "primary",
  ...i
}) => {
  const [a, l] = Ir(!1), s = () => {
    console.log("toggleClick"), l(!a);
  };
  return t ? /* @__PURE__ */ S(
    Bd,
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
    Fd,
    {
      disableRipple: !0,
      "data-color": r,
      "data-variant": e,
      ...i,
      children: o
    }
  );
};
function Md(e) {
  return ce("MuiToggleButton", e);
}
const cr = se("MuiToggleButton", ["root", "disabled", "selected", "standard", "primary", "secondary", "sizeSmall", "sizeMedium", "sizeLarge", "fullWidth"]), ws = /* @__PURE__ */ h.createContext({});
process.env.NODE_ENV !== "production" && (ws.displayName = "ToggleButtonGroupContext");
const Es = /* @__PURE__ */ h.createContext(void 0);
process.env.NODE_ENV !== "production" && (Es.displayName = "ToggleButtonGroupButtonContext");
function Id(e, t) {
  return t === void 0 || e === void 0 ? !1 : Array.isArray(t) ? t.includes(e) : e === t;
}
const Pd = (e) => {
  const {
    classes: t,
    fullWidth: o,
    selected: r,
    disabled: i,
    size: a,
    color: l
  } = e, s = {
    root: ["root", r && "selected", i && "disabled", o && "fullWidth", `size${j(a)}`, l]
  };
  return pe(s, Md, t);
}, Dd = U(rt, {
  name: "MuiToggleButton",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: o
    } = e;
    return [t.root, t[`size${j(o.size)}`]];
  }
})(de(({
  theme: e
}) => ({
  ...e.typography.button,
  borderRadius: (e.vars || e).shape.borderRadius,
  padding: 11,
  border: `1px solid ${(e.vars || e).palette.divider}`,
  color: (e.vars || e).palette.action.active,
  [`&.${cr.disabled}`]: {
    color: (e.vars || e).palette.action.disabled,
    border: `1px solid ${(e.vars || e).palette.action.disabledBackground}`
  },
  "&:hover": {
    textDecoration: "none",
    // Reset on mouse devices
    backgroundColor: e.vars ? `rgba(${e.vars.palette.text.primaryChannel} / ${e.vars.palette.action.hoverOpacity})` : H(e.palette.text.primary, e.palette.action.hoverOpacity),
    "@media (hover: none)": {
      backgroundColor: "transparent"
    }
  },
  variants: [{
    props: {
      color: "standard"
    },
    style: {
      [`&.${cr.selected}`]: {
        color: (e.vars || e).palette.text.primary,
        backgroundColor: e.vars ? `rgba(${e.vars.palette.text.primaryChannel} / ${e.vars.palette.action.selectedOpacity})` : H(e.palette.text.primary, e.palette.action.selectedOpacity),
        "&:hover": {
          backgroundColor: e.vars ? `rgba(${e.vars.palette.text.primaryChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))` : H(e.palette.text.primary, e.palette.action.selectedOpacity + e.palette.action.hoverOpacity),
          // Reset on touch devices, it doesn't add specificity
          "@media (hover: none)": {
            backgroundColor: e.vars ? `rgba(${e.vars.palette.text.primaryChannel} / ${e.vars.palette.action.selectedOpacity})` : H(e.palette.text.primary, e.palette.action.selectedOpacity)
          }
        }
      }
    }
  }, ...Object.entries(e.palette).filter(Be()).map(([t]) => ({
    props: {
      color: t
    },
    style: {
      [`&.${cr.selected}`]: {
        color: (e.vars || e).palette[t].main,
        backgroundColor: e.vars ? `rgba(${e.vars.palette[t].mainChannel} / ${e.vars.palette.action.selectedOpacity})` : H(e.palette[t].main, e.palette.action.selectedOpacity),
        "&:hover": {
          backgroundColor: e.vars ? `rgba(${e.vars.palette[t].mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))` : H(e.palette[t].main, e.palette.action.selectedOpacity + e.palette.action.hoverOpacity),
          // Reset on touch devices, it doesn't add specificity
          "@media (hover: none)": {
            backgroundColor: e.vars ? `rgba(${e.vars.palette[t].mainChannel} / ${e.vars.palette.action.selectedOpacity})` : H(e.palette[t].main, e.palette.action.selectedOpacity)
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
}))), Ss = /* @__PURE__ */ h.forwardRef(function(t, o) {
  const {
    value: r,
    ...i
  } = h.useContext(ws), a = h.useContext(Es), l = Io({
    ...i,
    selected: Id(t.value, r)
  }, t), s = fe({
    props: l,
    name: "MuiToggleButton"
  }), {
    children: c,
    className: u,
    color: d = "standard",
    disabled: f = !1,
    disableFocusRipple: g = !1,
    fullWidth: b = !1,
    onChange: v,
    onClick: y,
    selected: x,
    size: C = "medium",
    value: T,
    ...w
  } = s, m = {
    ...s,
    color: d,
    disabled: f,
    disableFocusRipple: g,
    fullWidth: b,
    size: C
  }, E = Pd(m), O = (D) => {
    y && (y(D, T), D.defaultPrevented) || v && v(D, T);
  }, M = a || "";
  return /* @__PURE__ */ S(Dd, {
    className: q(i.className, E.root, u, M),
    disabled: f,
    focusRipple: !g,
    ref: o,
    onClick: O,
    onChange: v,
    value: T,
    ownerState: m,
    "aria-pressed": x,
    ...w,
    children: c
  });
});
process.env.NODE_ENV !== "production" && (Ss.propTypes = {
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
const Nd = (e, t = "primary") => {
  var i;
  const o = Ie[t], r = ((i = e == null ? void 0 : e.palette) == null ? void 0 : i[t]) ?? o;
  return {
    fontColor: r.onMain ?? o.onMain,
    bgColor: r.toggleButtonBg ?? o.toggleButtonBg
  };
}, $d = U(Ss)(({ theme: e, "data-color": t = "primary", size: o = "medium" }) => {
  const r = Nd(e, t), i = {
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
    backgroundColor: H(r.bgColor, 0.75),
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
      backgroundColor: H(r.bgColor, 0.38)
    }
  };
}), Om = ({
  color: e = "primary",
  ...t
}) => /* @__PURE__ */ S($d, { ...t }), Gr = /* @__PURE__ */ h.createContext(void 0);
process.env.NODE_ENV !== "production" && (Gr.displayName = "FormControlContext");
function Yo() {
  return h.useContext(Gr);
}
function jd(e) {
  return ce("PrivateSwitchBase", e);
}
se("PrivateSwitchBase", ["root", "checked", "disabled", "input", "edgeStart", "edgeEnd"]);
const zd = (e) => {
  const {
    classes: t,
    checked: o,
    disabled: r,
    edge: i
  } = e, a = {
    root: ["root", o && "checked", r && "disabled", i && `edge${j(i)}`],
    input: ["input"]
  };
  return pe(a, jd, t);
}, Vd = U(rt)({
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
}), Ld = U("input", {
  shouldForwardProp: ut
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
}), Vn = /* @__PURE__ */ h.forwardRef(function(t, o) {
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
    inputProps: g,
    inputRef: b,
    name: v,
    onBlur: y,
    onChange: x,
    onFocus: C,
    readOnly: T,
    required: w = !1,
    tabIndex: m,
    type: E,
    value: O,
    slots: M = {},
    slotProps: D = {},
    ...$
  } = t, [p, A] = Ur({
    controlled: i,
    default: !!l,
    name: "SwitchBase",
    state: "checked"
  }), I = Yo(), B = (W) => {
    C && C(W), I && I.onFocus && I.onFocus(W);
  }, N = (W) => {
    y && y(W), I && I.onBlur && I.onBlur(W);
  }, P = (W) => {
    if (W.nativeEvent.defaultPrevented)
      return;
    const Q = W.target.checked;
    A(Q), x && x(W, Q);
  };
  let R = s;
  I && typeof R > "u" && (R = I.disabled);
  const V = E === "checkbox" || E === "radio", J = {
    ...t,
    checked: p,
    disabled: R,
    disableFocusRipple: c,
    edge: u
  }, L = zd(J), k = {
    slots: M,
    slotProps: {
      input: g,
      ...D
    }
  }, [z, _] = le("root", {
    ref: o,
    elementType: Vd,
    className: L.root,
    shouldForwardComponentProp: !0,
    externalForwardedProps: {
      ...k,
      component: "span",
      ...$
    },
    getSlotProps: (W) => ({
      ...W,
      onFocus: (Q) => {
        var X;
        (X = W.onFocus) == null || X.call(W, Q), B(Q);
      },
      onBlur: (Q) => {
        var X;
        (X = W.onBlur) == null || X.call(W, Q), N(Q);
      }
    }),
    ownerState: J,
    additionalProps: {
      centerRipple: !0,
      focusRipple: !c,
      disabled: R,
      role: void 0,
      tabIndex: null
    }
  }), [Z, K] = le("input", {
    ref: b,
    elementType: Ld,
    className: L.input,
    externalForwardedProps: k,
    getSlotProps: (W) => ({
      onChange: (Q) => {
        var X;
        (X = W.onChange) == null || X.call(W, Q), P(Q);
      }
    }),
    ownerState: J,
    additionalProps: {
      autoFocus: r,
      checked: i,
      defaultChecked: l,
      disabled: R,
      id: V ? f : void 0,
      name: v,
      readOnly: T,
      required: w,
      tabIndex: m,
      type: E,
      ...E === "checkbox" && O === void 0 ? {} : {
        value: O
      }
    }
  });
  return /* @__PURE__ */ be(z, {
    ..._,
    children: [/* @__PURE__ */ S(Z, {
      ...K
    }), p ? a : d]
  });
});
process.env.NODE_ENV !== "production" && (Vn.propTypes = {
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
  inputRef: Ct,
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
const Ud = $e(/* @__PURE__ */ S("path", {
  d: "M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"
}), "CheckBoxOutlineBlank"), Wd = $e(/* @__PURE__ */ S("path", {
  d: "M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"
}), "CheckBox"), Hd = $e(/* @__PURE__ */ S("path", {
  d: "M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"
}), "IndeterminateCheckBox");
function Qd(e) {
  return ce("MuiCheckbox", e);
}
const ur = se("MuiCheckbox", ["root", "checked", "disabled", "indeterminate", "colorPrimary", "colorSecondary", "sizeSmall", "sizeMedium"]), Kd = (e) => {
  const {
    classes: t,
    indeterminate: o,
    color: r,
    size: i
  } = e, a = {
    root: ["root", o && "indeterminate", `color${j(r)}`, `size${j(i)}`]
  }, l = pe(a, Qd, t);
  return {
    ...t,
    // forward the disabled and checked classes to the SwitchBase
    ...l
  };
}, Gd = U(Vn, {
  shouldForwardProp: (e) => ut(e) || e === "classes",
  name: "MuiCheckbox",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: o
    } = e;
    return [t.root, o.indeterminate && t.indeterminate, t[`size${j(o.size)}`], o.color !== "default" && t[`color${j(o.color)}`]];
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
        backgroundColor: e.vars ? `rgba(${e.vars.palette.action.activeChannel} / ${e.vars.palette.action.hoverOpacity})` : H(e.palette.action.active, e.palette.action.hoverOpacity)
      }
    }
  }, ...Object.entries(e.palette).filter(Be()).map(([t]) => ({
    props: {
      color: t,
      disableRipple: !1
    },
    style: {
      "&:hover": {
        backgroundColor: e.vars ? `rgba(${e.vars.palette[t].mainChannel} / ${e.vars.palette.action.hoverOpacity})` : H(e.palette[t].main, e.palette.action.hoverOpacity)
      }
    }
  })), ...Object.entries(e.palette).filter(Be()).map(([t]) => ({
    props: {
      color: t
    },
    style: {
      [`&.${ur.checked}, &.${ur.indeterminate}`]: {
        color: (e.vars || e).palette[t].main
      },
      [`&.${ur.disabled}`]: {
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
}))), Yd = /* @__PURE__ */ S(Wd, {}), qd = /* @__PURE__ */ S(Ud, {}), Xd = /* @__PURE__ */ S(Hd, {}), Ts = /* @__PURE__ */ h.forwardRef(function(t, o) {
  const r = fe({
    props: t,
    name: "MuiCheckbox"
  }), {
    checkedIcon: i = Yd,
    color: a = "primary",
    icon: l = qd,
    indeterminate: s = !1,
    indeterminateIcon: c = Xd,
    inputProps: u,
    size: d = "medium",
    disableRipple: f = !1,
    className: g,
    slots: b = {},
    slotProps: v = {},
    ...y
  } = r, x = s ? c : l, C = s ? c : i, T = {
    ...r,
    disableRipple: f,
    color: a,
    indeterminate: s,
    size: d
  }, w = Kd(T), m = v.input ?? u, [E, O] = le("root", {
    ref: o,
    elementType: Gd,
    className: q(w.root, g),
    shouldForwardComponentProp: !0,
    externalForwardedProps: {
      slots: b,
      slotProps: v,
      ...y
    },
    ownerState: T,
    additionalProps: {
      type: "checkbox",
      icon: /* @__PURE__ */ h.cloneElement(x, {
        fontSize: x.props.fontSize ?? d
      }),
      checkedIcon: /* @__PURE__ */ h.cloneElement(C, {
        fontSize: C.props.fontSize ?? d
      }),
      disableRipple: f,
      slots: b,
      slotProps: {
        input: ls(typeof m == "function" ? m(T) : m, {
          "data-indeterminate": s
        })
      }
    }
  });
  return /* @__PURE__ */ S(E, {
    ...O,
    classes: w
  });
});
process.env.NODE_ENV !== "production" && (Ts.propTypes = {
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
const Jd = (e, t = "primary") => {
  var i;
  const o = Ie[t], r = ((i = e == null ? void 0 : e.palette) == null ? void 0 : i[t]) ?? o;
  return {
    // 初始狀態（未勾選、未 hover、未 disabled）
    "&": {
      color: (r == null ? void 0 : r.myDefault) ?? o.myDefault
      // 這裡設定初始顏色
    },
    // hover 狀態
    "&:hover": {
      color: r.defaultHover ?? o.custMain,
      backgroundColor: H(r.myDefault ?? o.custMain, 0.08)
    },
    // 勾選與 indeterminate 狀態
    "&.Mui-checked, &.MuiCheckbox-indeterminate": {
      color: r.custMain ?? o.custMain
    },
    // 勾選＋hover 狀態
    "&.Mui-checked:hover": {
      color: r.custMain ?? o.custMain,
      // 維持勾選色
      backgroundColor: H(r.custMain ?? o.custMain, 0.08)
    },
    "&.Mui-disabled": {
      Opacity: H(ot[0], 0.38)
    },
    // focus 狀態
    "&.Mui-focusVisible": {
      outline: `2px solid ${r.custMain ?? o.custMain, 0.08}`,
      outlineOffset: 2
    }
  };
}, Zd = U(Ts, {
  shouldForwardProp: (e) => e !== "color"
})(
  ({ theme: e, color: t = "primary" }) => Jd(e, t)
), _d = ({
  color: e = "primary",
  label: t,
  ...o
}) => {
  const r = /* @__PURE__ */ S(Zd, { color: e, ...o });
  return t ? /* @__PURE__ */ S(fl, { control: r, label: t || void 0 }) : r;
}, Am = ({
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
  }, l = (s) => s.map((c) => /* @__PURE__ */ be("div", { style: { marginLeft: "24px" }, children: [
    /* @__PURE__ */ S(
      _d,
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
}, ef = $e(/* @__PURE__ */ S("path", {
  d: "M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"
}), "Cancel");
function tf(e) {
  return ce("MuiChip", e);
}
const ue = se("MuiChip", ["root", "sizeSmall", "sizeMedium", "colorDefault", "colorError", "colorInfo", "colorPrimary", "colorSecondary", "colorSuccess", "colorWarning", "disabled", "clickable", "clickableColorPrimary", "clickableColorSecondary", "deletable", "deletableColorPrimary", "deletableColorSecondary", "outlined", "filled", "outlinedPrimary", "outlinedSecondary", "filledPrimary", "filledSecondary", "avatar", "avatarSmall", "avatarMedium", "avatarColorPrimary", "avatarColorSecondary", "icon", "iconSmall", "iconMedium", "iconColorPrimary", "iconColorSecondary", "label", "labelSmall", "labelMedium", "deleteIcon", "deleteIconSmall", "deleteIconMedium", "deleteIconColorPrimary", "deleteIconColorSecondary", "deleteIconOutlinedColorPrimary", "deleteIconOutlinedColorSecondary", "deleteIconFilledColorPrimary", "deleteIconFilledColorSecondary", "focusVisible"]), of = (e) => {
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
    root: ["root", c, o && "disabled", `size${j(r)}`, `color${j(i)}`, s && "clickable", s && `clickableColor${j(i)}`, l && "deletable", l && `deletableColor${j(i)}`, `${c}${j(i)}`],
    label: ["label", `label${j(r)}`],
    avatar: ["avatar", `avatar${j(r)}`, `avatarColor${j(i)}`],
    icon: ["icon", `icon${j(r)}`, `iconColor${j(a)}`],
    deleteIcon: ["deleteIcon", `deleteIcon${j(r)}`, `deleteIconColor${j(i)}`, `deleteIcon${j(c)}Color${j(i)}`]
  };
  return pe(u, tf, t);
}, nf = U("div", {
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
      [`& .${ue.avatar}`]: t.avatar
    }, {
      [`& .${ue.avatar}`]: t[`avatar${j(s)}`]
    }, {
      [`& .${ue.avatar}`]: t[`avatarColor${j(r)}`]
    }, {
      [`& .${ue.icon}`]: t.icon
    }, {
      [`& .${ue.icon}`]: t[`icon${j(s)}`]
    }, {
      [`& .${ue.icon}`]: t[`iconColor${j(i)}`]
    }, {
      [`& .${ue.deleteIcon}`]: t.deleteIcon
    }, {
      [`& .${ue.deleteIcon}`]: t[`deleteIcon${j(s)}`]
    }, {
      [`& .${ue.deleteIcon}`]: t[`deleteIconColor${j(r)}`]
    }, {
      [`& .${ue.deleteIcon}`]: t[`deleteIcon${j(c)}Color${j(r)}`]
    }, t.root, t[`size${j(s)}`], t[`color${j(r)}`], a && t.clickable, a && r !== "default" && t[`clickableColor${j(r)})`], l && t.deletable, l && r !== "default" && t[`deletableColor${j(r)}`], t[c], t[`${c}${j(r)}`]];
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
    [`&.${ue.disabled}`]: {
      opacity: (e.vars || e).palette.action.disabledOpacity,
      pointerEvents: "none"
    },
    [`& .${ue.avatar}`]: {
      marginLeft: 5,
      marginRight: -6,
      width: 24,
      height: 24,
      color: e.vars ? e.vars.palette.Chip.defaultAvatarColor : t,
      fontSize: e.typography.pxToRem(12)
    },
    [`& .${ue.avatarColorPrimary}`]: {
      color: (e.vars || e).palette.primary.contrastText,
      backgroundColor: (e.vars || e).palette.primary.dark
    },
    [`& .${ue.avatarColorSecondary}`]: {
      color: (e.vars || e).palette.secondary.contrastText,
      backgroundColor: (e.vars || e).palette.secondary.dark
    },
    [`& .${ue.avatarSmall}`]: {
      marginLeft: 4,
      marginRight: -4,
      width: 18,
      height: 18,
      fontSize: e.typography.pxToRem(10)
    },
    [`& .${ue.icon}`]: {
      marginLeft: 5,
      marginRight: -6
    },
    [`& .${ue.deleteIcon}`]: {
      WebkitTapHighlightColor: "transparent",
      color: e.vars ? `rgba(${e.vars.palette.text.primaryChannel} / 0.26)` : H(e.palette.text.primary, 0.26),
      fontSize: 22,
      cursor: "pointer",
      margin: "0 5px 0 -6px",
      "&:hover": {
        color: e.vars ? `rgba(${e.vars.palette.text.primaryChannel} / 0.4)` : H(e.palette.text.primary, 0.4)
      }
    },
    variants: [{
      props: {
        size: "small"
      },
      style: {
        height: 24,
        [`& .${ue.icon}`]: {
          fontSize: 18,
          marginLeft: 4,
          marginRight: -4
        },
        [`& .${ue.deleteIcon}`]: {
          fontSize: 16,
          marginRight: 4,
          marginLeft: -4
        }
      }
    }, ...Object.entries(e.palette).filter(Be(["contrastText"])).map(([o]) => ({
      props: {
        color: o
      },
      style: {
        backgroundColor: (e.vars || e).palette[o].main,
        color: (e.vars || e).palette[o].contrastText,
        [`& .${ue.deleteIcon}`]: {
          color: e.vars ? `rgba(${e.vars.palette[o].contrastTextChannel} / 0.7)` : H(e.palette[o].contrastText, 0.7),
          "&:hover, &:active": {
            color: (e.vars || e).palette[o].contrastText
          }
        }
      }
    })), {
      props: (o) => o.iconColor === o.color,
      style: {
        [`& .${ue.icon}`]: {
          color: e.vars ? e.vars.palette.Chip.defaultIconColor : t
        }
      }
    }, {
      props: (o) => o.iconColor === o.color && o.color !== "default",
      style: {
        [`& .${ue.icon}`]: {
          color: "inherit"
        }
      }
    }, {
      props: {
        onDelete: !0
      },
      style: {
        [`&.${ue.focusVisible}`]: {
          backgroundColor: e.vars ? `rgba(${e.vars.palette.action.selectedChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))` : H(e.palette.action.selected, e.palette.action.selectedOpacity + e.palette.action.focusOpacity)
        }
      }
    }, ...Object.entries(e.palette).filter(Be(["dark"])).map(([o]) => ({
      props: {
        color: o,
        onDelete: !0
      },
      style: {
        [`&.${ue.focusVisible}`]: {
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
          backgroundColor: e.vars ? `rgba(${e.vars.palette.action.selectedChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))` : H(e.palette.action.selected, e.palette.action.selectedOpacity + e.palette.action.hoverOpacity)
        },
        [`&.${ue.focusVisible}`]: {
          backgroundColor: e.vars ? `rgba(${e.vars.palette.action.selectedChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))` : H(e.palette.action.selected, e.palette.action.selectedOpacity + e.palette.action.focusOpacity)
        },
        "&:active": {
          boxShadow: (e.vars || e).shadows[1]
        }
      }
    }, ...Object.entries(e.palette).filter(Be(["dark"])).map(([o]) => ({
      props: {
        color: o,
        clickable: !0
      },
      style: {
        [`&:hover, &.${ue.focusVisible}`]: {
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
        [`&.${ue.clickable}:hover`]: {
          backgroundColor: (e.vars || e).palette.action.hover
        },
        [`&.${ue.focusVisible}`]: {
          backgroundColor: (e.vars || e).palette.action.focus
        },
        [`& .${ue.avatar}`]: {
          marginLeft: 4
        },
        [`& .${ue.avatarSmall}`]: {
          marginLeft: 2
        },
        [`& .${ue.icon}`]: {
          marginLeft: 4
        },
        [`& .${ue.iconSmall}`]: {
          marginLeft: 2
        },
        [`& .${ue.deleteIcon}`]: {
          marginRight: 5
        },
        [`& .${ue.deleteIconSmall}`]: {
          marginRight: 3
        }
      }
    }, ...Object.entries(e.palette).filter(Be()).map(([o]) => ({
      props: {
        variant: "outlined",
        color: o
      },
      style: {
        color: (e.vars || e).palette[o].main,
        border: `1px solid ${e.vars ? `rgba(${e.vars.palette[o].mainChannel} / 0.7)` : H(e.palette[o].main, 0.7)}`,
        [`&.${ue.clickable}:hover`]: {
          backgroundColor: e.vars ? `rgba(${e.vars.palette[o].mainChannel} / ${e.vars.palette.action.hoverOpacity})` : H(e.palette[o].main, e.palette.action.hoverOpacity)
        },
        [`&.${ue.focusVisible}`]: {
          backgroundColor: e.vars ? `rgba(${e.vars.palette[o].mainChannel} / ${e.vars.palette.action.focusOpacity})` : H(e.palette[o].main, e.palette.action.focusOpacity)
        },
        [`& .${ue.deleteIcon}`]: {
          color: e.vars ? `rgba(${e.vars.palette[o].mainChannel} / 0.7)` : H(e.palette[o].main, 0.7),
          "&:hover, &:active": {
            color: (e.vars || e).palette[o].main
          }
        }
      }
    }))]
  };
})), rf = U("span", {
  name: "MuiChip",
  slot: "Label",
  overridesResolver: (e, t) => {
    const {
      ownerState: o
    } = e, {
      size: r
    } = o;
    return [t.label, t[`label${j(r)}`]];
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
function Xi(e) {
  return e.key === "Backspace" || e.key === "Delete";
}
const Os = /* @__PURE__ */ h.forwardRef(function(t, o) {
  const r = fe({
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
    label: g,
    onClick: b,
    onDelete: v,
    onKeyDown: y,
    onKeyUp: x,
    size: C = "medium",
    variant: T = "filled",
    tabIndex: w,
    skipFocusWhenDisabled: m = !1,
    // TODO v6: Rename to `focusableWhenDisabled`.
    ...E
  } = r, O = h.useRef(null), M = Ne(O, o), D = (L) => {
    L.stopPropagation(), v && v(L);
  }, $ = (L) => {
    L.currentTarget === L.target && Xi(L) && L.preventDefault(), y && y(L);
  }, p = (L) => {
    L.currentTarget === L.target && v && Xi(L) && v(L), x && x(L);
  }, A = l !== !1 && b ? !0 : l, I = A || v ? rt : c || "div", B = {
    ...r,
    component: I,
    disabled: d,
    size: C,
    color: s,
    iconColor: /* @__PURE__ */ h.isValidElement(f) && f.props.color || s,
    onDelete: !!v,
    clickable: A,
    variant: T
  }, N = of(B), P = I === rt ? {
    component: c || "div",
    focusVisibleClassName: N.focusVisible,
    ...v && {
      disableRipple: !0
    }
  } : {};
  let R = null;
  v && (R = u && /* @__PURE__ */ h.isValidElement(u) ? /* @__PURE__ */ h.cloneElement(u, {
    className: q(u.props.className, N.deleteIcon),
    onClick: D
  }) : /* @__PURE__ */ S(ef, {
    className: q(N.deleteIcon),
    onClick: D
  }));
  let V = null;
  i && /* @__PURE__ */ h.isValidElement(i) && (V = /* @__PURE__ */ h.cloneElement(i, {
    className: q(N.avatar, i.props.className)
  }));
  let J = null;
  return f && /* @__PURE__ */ h.isValidElement(f) && (J = /* @__PURE__ */ h.cloneElement(f, {
    className: q(N.icon, f.props.className)
  })), process.env.NODE_ENV !== "production" && V && J && console.error("MUI: The Chip component can not handle the avatar and the icon prop at the same time. Pick one."), /* @__PURE__ */ be(nf, {
    as: I,
    className: q(N.root, a),
    disabled: A && d ? !0 : void 0,
    onClick: b,
    onKeyDown: $,
    onKeyUp: p,
    ref: M,
    tabIndex: m && d ? -1 : w,
    ownerState: B,
    ...P,
    ...E,
    children: [V || J, /* @__PURE__ */ S(rf, {
      className: q(N.label),
      ownerState: B,
      children: g
    }), R]
  });
});
process.env.NODE_ENV !== "production" && (Os.propTypes = {
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
  children: Ka,
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
const af = $e(/* @__PURE__ */ S("path", {
  d: "M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
}), "Clear"), sf = (e, t = "primary") => {
  var i;
  const o = Ie[t], r = ((i = e == null ? void 0 : e.palette) == null ? void 0 : i[t]) ?? o;
  return {
    bgColor: r.custMain ?? o.custMain,
    fontColor: r.iconFont ?? o.iconFont,
    overlay: r.iconOverlay ?? o.iconOverlay,
    selectedbgColor: r.tonal ?? o.tonal,
    selectedFontColor: r.onTonal ?? o.onTonal,
    selectedOverlay: r.onTonal ?? o.onTonal,
    iconColor: r.custMain ?? o.custMain
  };
}, lf = U(Os, {
  shouldForwardProp: (e) => e !== "selected"
  // selected 不往下傳，其他都照傳
})(({ theme: e, selected: t = !1, avatar: o }) => {
  const r = !!o, i = sf(e);
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
}), km = ({
  selected: e = !1,
  avatar: t,
  deleteIcon: o = /* @__PURE__ */ S(af, {}),
  ...r
}) => /* @__PURE__ */ S(
  lf,
  {
    ...r,
    selected: e,
    avatar: t,
    deleteIcon: o,
    variant: "outlined"
  }
), wn = /* @__PURE__ */ h.createContext({});
process.env.NODE_ENV !== "production" && (wn.displayName = "ListContext");
function cf(e) {
  return ce("MuiList", e);
}
se("MuiList", ["root", "padding", "dense", "subheader"]);
const uf = (e) => {
  const {
    classes: t,
    disablePadding: o,
    dense: r,
    subheader: i
  } = e;
  return pe({
    root: ["root", !o && "padding", r && "dense", i && "subheader"]
  }, cf, t);
}, pf = U("ul", {
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
}), As = /* @__PURE__ */ h.forwardRef(function(t, o) {
  const r = fe({
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
  } = r, f = h.useMemo(() => ({
    dense: s
  }), [s]), g = {
    ...r,
    component: l,
    dense: s,
    disablePadding: c
  }, b = uf(g);
  return /* @__PURE__ */ S(wn.Provider, {
    value: f,
    children: /* @__PURE__ */ be(pf, {
      as: l,
      className: q(b.root, a),
      ref: o,
      ownerState: g,
      ...d,
      children: [u, i]
    })
  });
});
process.env.NODE_ENV !== "production" && (As.propTypes = {
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
function pr(e, t, o) {
  return e === t ? e.firstChild : t && t.nextElementSibling ? t.nextElementSibling : o ? null : e.firstChild;
}
function Ji(e, t, o) {
  return e === t ? o ? e.firstChild : e.lastChild : t && t.previousElementSibling ? t.previousElementSibling : o ? null : e.lastChild;
}
function ks(e, t) {
  if (t === void 0)
    return !0;
  let o = e.innerText;
  return o === void 0 && (o = e.textContent), o = o.trim().toLowerCase(), o.length === 0 ? !1 : t.repeating ? o[0] === t.keys[0] : o.startsWith(t.keys.join(""));
}
function Co(e, t, o, r, i, a) {
  let l = !1, s = i(e, t, t ? o : !1);
  for (; s; ) {
    if (s === e.firstChild) {
      if (l)
        return !1;
      l = !0;
    }
    const c = r ? !1 : s.disabled || s.getAttribute("aria-disabled") === "true";
    if (!s.hasAttribute("tabindex") || !ks(s, a) || c)
      s = i(e, s, o);
    else
      return s.focus(), !0;
  }
  return !1;
}
const Rs = /* @__PURE__ */ h.forwardRef(function(t, o) {
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
    ...g
  } = t, b = h.useRef(null), v = h.useRef({
    keys: [],
    repeating: !0,
    previousKeyMatched: !0,
    lastTime: null
  });
  kt(() => {
    i && b.current.focus();
  }, [i]), h.useImperativeHandle(r, () => ({
    adjustStyleForScrollbar: (w, {
      direction: m
    }) => {
      const E = !b.current.style.width;
      if (w.clientHeight < b.current.clientHeight && E) {
        const O = `${Ya(yt(w))}px`;
        b.current.style[m === "rtl" ? "paddingLeft" : "paddingRight"] = O, b.current.style.width = `calc(100% + ${O})`;
      }
      return b.current;
    }
  }), []);
  const y = (w) => {
    const m = b.current, E = w.key;
    if (w.ctrlKey || w.metaKey || w.altKey) {
      d && d(w);
      return;
    }
    const M = Ge(m).activeElement;
    if (E === "ArrowDown")
      w.preventDefault(), Co(m, M, u, c, pr);
    else if (E === "ArrowUp")
      w.preventDefault(), Co(m, M, u, c, Ji);
    else if (E === "Home")
      w.preventDefault(), Co(m, null, u, c, pr);
    else if (E === "End")
      w.preventDefault(), Co(m, null, u, c, Ji);
    else if (E.length === 1) {
      const D = v.current, $ = E.toLowerCase(), p = performance.now();
      D.keys.length > 0 && (p - D.lastTime > 500 ? (D.keys = [], D.repeating = !0, D.previousKeyMatched = !0) : D.repeating && $ !== D.keys[0] && (D.repeating = !1)), D.lastTime = p, D.keys.push($);
      const A = M && !D.repeating && ks(M, D);
      D.previousKeyMatched && (A || Co(m, M, !1, c, pr, D)) ? w.preventDefault() : D.previousKeyMatched = !1;
    }
    d && d(w);
  }, x = Ne(b, o);
  let C = -1;
  h.Children.forEach(l, (w, m) => {
    if (!/* @__PURE__ */ h.isValidElement(w)) {
      C === m && (C += 1, C >= l.length && (C = -1));
      return;
    }
    process.env.NODE_ENV !== "production" && Pr(w) && console.error(["MUI: The Menu component doesn't accept a Fragment as a child.", "Consider providing an array instead."].join(`
`)), w.props.disabled || (f === "selectedMenu" && w.props.selected || C === -1) && (C = m), C === m && (w.props.disabled || w.props.muiSkipListHighlight || w.type.muiSkipListHighlight) && (C += 1, C >= l.length && (C = -1));
  });
  const T = h.Children.map(l, (w, m) => {
    if (m === C) {
      const E = {};
      return a && (E.autoFocus = !0), w.props.tabIndex === void 0 && f === "selectedMenu" && (E.tabIndex = 0), /* @__PURE__ */ h.cloneElement(w, E);
    }
    return w;
  });
  return /* @__PURE__ */ S(As, {
    role: "menu",
    ref: x,
    className: s,
    onKeyDown: y,
    tabIndex: i ? 0 : -1,
    ...g,
    children: T
  });
});
process.env.NODE_ENV !== "production" && (Rs.propTypes = {
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
function df(e) {
  return typeof e == "string";
}
const Fs = (e) => e.scrollTop;
function En(e, t) {
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
function kr(e) {
  return `scale(${e}, ${e ** 2})`;
}
const ff = {
  entering: {
    opacity: 1,
    transform: kr(1)
  },
  entered: {
    opacity: 1,
    transform: "none"
  }
}, dr = typeof navigator < "u" && /^((?!chrome|android).)*(safari|mobile)/i.test(navigator.userAgent) && /(os |version\/)15(.|_)4/i.test(navigator.userAgent), Do = /* @__PURE__ */ h.forwardRef(function(t, o) {
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
    onExited: g,
    onExiting: b,
    style: v,
    timeout: y = "auto",
    // eslint-disable-next-line react/prop-types
    TransitionComponent: x = pt,
    ...C
  } = t, T = no(), w = h.useRef(), m = Ht(), E = h.useRef(null), O = Ne(E, Ho(a), o), M = (P) => (R) => {
    if (P) {
      const V = E.current;
      R === void 0 ? P(V) : P(V, R);
    }
  }, D = M(d), $ = M((P, R) => {
    Fs(P);
    const {
      duration: V,
      delay: J,
      easing: L
    } = En({
      style: v,
      timeout: y,
      easing: l
    }, {
      mode: "enter"
    });
    let k;
    y === "auto" ? (k = m.transitions.getAutoHeightDuration(P.clientHeight), w.current = k) : k = V, P.style.transition = [m.transitions.create("opacity", {
      duration: k,
      delay: J
    }), m.transitions.create("transform", {
      duration: dr ? k : k * 0.666,
      delay: J,
      easing: L
    })].join(","), c && c(P, R);
  }), p = M(u), A = M(b), I = M((P) => {
    const {
      duration: R,
      delay: V,
      easing: J
    } = En({
      style: v,
      timeout: y,
      easing: l
    }, {
      mode: "exit"
    });
    let L;
    y === "auto" ? (L = m.transitions.getAutoHeightDuration(P.clientHeight), w.current = L) : L = R, P.style.transition = [m.transitions.create("opacity", {
      duration: L,
      delay: V
    }), m.transitions.create("transform", {
      duration: dr ? L : L * 0.666,
      delay: dr ? V : V || L * 0.333,
      easing: J
    })].join(","), P.style.opacity = 0, P.style.transform = kr(0.75), f && f(P);
  }), B = M(g);
  return /* @__PURE__ */ S(x, {
    appear: i,
    in: s,
    nodeRef: E,
    onEnter: $,
    onEntered: p,
    onEntering: D,
    onExit: I,
    onExited: B,
    onExiting: A,
    addEndListener: (P) => {
      y === "auto" && T.start(w.current || 0, P), r && r(E.current, P);
    },
    timeout: y === "auto" ? null : y,
    ...C,
    children: (P, {
      ownerState: R,
      ...V
    }) => /* @__PURE__ */ h.cloneElement(a, {
      style: {
        opacity: 0,
        transform: kr(0.75),
        visibility: P === "exited" && !s ? "hidden" : void 0,
        ...ff[P],
        ...v,
        ...a.props.style
      },
      ref: O,
      ...V
    })
  });
});
process.env.NODE_ENV !== "production" && (Do.propTypes = {
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
  children: fo.isRequired,
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
Do && (Do.muiSupportAuto = !0);
function gf(e) {
  const t = Ge(e);
  return t.body === e ? yt(e).innerWidth > t.documentElement.clientWidth : e.scrollHeight > e.clientHeight;
}
function Fo(e, t) {
  t ? e.setAttribute("aria-hidden", "true") : e.removeAttribute("aria-hidden");
}
function Zi(e) {
  return parseInt(yt(e).getComputedStyle(e).paddingRight, 10) || 0;
}
function hf(e) {
  const o = ["TEMPLATE", "SCRIPT", "STYLE", "LINK", "MAP", "META", "NOSCRIPT", "PICTURE", "COL", "COLGROUP", "PARAM", "SLOT", "SOURCE", "TRACK"].includes(e.tagName), r = e.tagName === "INPUT" && e.getAttribute("type") === "hidden";
  return o || r;
}
function _i(e, t, o, r, i) {
  const a = [t, o, ...r];
  [].forEach.call(e.children, (l) => {
    const s = !a.includes(l), c = !hf(l);
    s && c && Fo(l, i);
  });
}
function fr(e, t) {
  let o = -1;
  return e.some((r, i) => t(r) ? (o = i, !0) : !1), o;
}
function bf(e, t) {
  const o = [], r = e.container;
  if (!t.disableScrollLock) {
    if (gf(r)) {
      const l = Ya(yt(r));
      o.push({
        value: r.style.paddingRight,
        property: "padding-right",
        el: r
      }), r.style.paddingRight = `${Zi(r) + l}px`;
      const s = Ge(r).querySelectorAll(".mui-fixed");
      [].forEach.call(s, (c) => {
        o.push({
          value: c.style.paddingRight,
          property: "padding-right",
          el: c
        }), c.style.paddingRight = `${Zi(c) + l}px`;
      });
    }
    let a;
    if (r.parentNode instanceof DocumentFragment)
      a = Ge(r).body;
    else {
      const l = r.parentElement, s = yt(r);
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
function mf(e) {
  const t = [];
  return [].forEach.call(e.children, (o) => {
    o.getAttribute("aria-hidden") === "true" && t.push(o);
  }), t;
}
class yf {
  constructor() {
    this.modals = [], this.containers = [];
  }
  add(t, o) {
    let r = this.modals.indexOf(t);
    if (r !== -1)
      return r;
    r = this.modals.length, this.modals.push(t), t.modalRef && Fo(t.modalRef, !1);
    const i = mf(o);
    _i(o, t.mount, t.modalRef, i, !0);
    const a = fr(this.containers, (l) => l.container === o);
    return a !== -1 ? (this.containers[a].modals.push(t), r) : (this.containers.push({
      modals: [t],
      container: o,
      restore: null,
      hiddenSiblings: i
    }), r);
  }
  mount(t, o) {
    const r = fr(this.containers, (a) => a.modals.includes(t)), i = this.containers[r];
    i.restore || (i.restore = bf(i, o));
  }
  remove(t, o = !0) {
    const r = this.modals.indexOf(t);
    if (r === -1)
      return r;
    const i = fr(this.containers, (l) => l.modals.includes(t)), a = this.containers[i];
    if (a.modals.splice(a.modals.indexOf(t), 1), this.modals.splice(r, 1), a.modals.length === 0)
      a.restore && a.restore(), t.modalRef && Fo(t.modalRef, o), _i(a.container, t.mount, t.modalRef, a.hiddenSiblings, !1), this.containers.splice(i, 1);
    else {
      const l = a.modals[a.modals.length - 1];
      l.modalRef && Fo(l.modalRef, !1);
    }
    return r;
  }
  isTopModal(t) {
    return this.modals.length > 0 && this.modals[this.modals.length - 1] === t;
  }
}
const vf = ["input", "select", "textarea", "a[href]", "button", "[tabindex]", "audio[controls]", "video[controls]", '[contenteditable]:not([contenteditable="false"])'].join(",");
function Cf(e) {
  const t = parseInt(e.getAttribute("tabindex") || "", 10);
  return Number.isNaN(t) ? e.contentEditable === "true" || (e.nodeName === "AUDIO" || e.nodeName === "VIDEO" || e.nodeName === "DETAILS") && e.getAttribute("tabindex") === null ? 0 : e.tabIndex : t;
}
function xf(e) {
  if (e.tagName !== "INPUT" || e.type !== "radio" || !e.name)
    return !1;
  const t = (r) => e.ownerDocument.querySelector(`input[type="radio"]${r}`);
  let o = t(`[name="${e.name}"]:checked`);
  return o || (o = t(`[name="${e.name}"]`)), o !== e;
}
function wf(e) {
  return !(e.disabled || e.tagName === "INPUT" && e.type === "hidden" || xf(e));
}
function Ef(e) {
  const t = [], o = [];
  return Array.from(e.querySelectorAll(vf)).forEach((r, i) => {
    const a = Cf(r);
    a === -1 || !wf(r) || (a === 0 ? t.push(r) : o.push({
      documentOrder: i,
      tabIndex: a,
      node: r
    }));
  }), o.sort((r, i) => r.tabIndex === i.tabIndex ? r.documentOrder - i.documentOrder : r.tabIndex - i.tabIndex).map((r) => r.node).concat(t);
}
function Sf() {
  return !0;
}
function Sn(e) {
  const {
    children: t,
    disableAutoFocus: o = !1,
    disableEnforceFocus: r = !1,
    disableRestoreFocus: i = !1,
    getTabbable: a = Ef,
    isEnabled: l = Sf,
    open: s
  } = e, c = h.useRef(!1), u = h.useRef(null), d = h.useRef(null), f = h.useRef(null), g = h.useRef(null), b = h.useRef(!1), v = h.useRef(null), y = Ne(Ho(t), v), x = h.useRef(null);
  h.useEffect(() => {
    !s || !v.current || (b.current = !o);
  }, [o, s]), h.useEffect(() => {
    if (!s || !v.current)
      return;
    const w = Ge(v.current);
    return v.current.contains(w.activeElement) || (v.current.hasAttribute("tabIndex") || (process.env.NODE_ENV !== "production" && console.error(["MUI: The modal content node does not accept focus.", 'For the benefit of assistive technologies, the tabIndex of the node is being set to "-1".'].join(`
`)), v.current.setAttribute("tabIndex", "-1")), b.current && v.current.focus()), () => {
      i || (f.current && f.current.focus && (c.current = !0, f.current.focus()), f.current = null);
    };
  }, [s]), h.useEffect(() => {
    if (!s || !v.current)
      return;
    const w = Ge(v.current), m = (M) => {
      x.current = M, !(r || !l() || M.key !== "Tab") && w.activeElement === v.current && M.shiftKey && (c.current = !0, d.current && d.current.focus());
    }, E = () => {
      var $, p;
      const M = v.current;
      if (M === null)
        return;
      if (!w.hasFocus() || !l() || c.current) {
        c.current = !1;
        return;
      }
      if (M.contains(w.activeElement) || r && w.activeElement !== u.current && w.activeElement !== d.current)
        return;
      if (w.activeElement !== g.current)
        g.current = null;
      else if (g.current !== null)
        return;
      if (!b.current)
        return;
      let D = [];
      if ((w.activeElement === u.current || w.activeElement === d.current) && (D = a(v.current)), D.length > 0) {
        const A = !!(($ = x.current) != null && $.shiftKey && ((p = x.current) == null ? void 0 : p.key) === "Tab"), I = D[0], B = D[D.length - 1];
        typeof I != "string" && typeof B != "string" && (A ? B.focus() : I.focus());
      } else
        M.focus();
    };
    w.addEventListener("focusin", E), w.addEventListener("keydown", m, !0);
    const O = setInterval(() => {
      w.activeElement && w.activeElement.tagName === "BODY" && E();
    }, 50);
    return () => {
      clearInterval(O), w.removeEventListener("focusin", E), w.removeEventListener("keydown", m, !0);
    };
  }, [o, r, i, l, s, a]);
  const C = (w) => {
    f.current === null && (f.current = w.relatedTarget), b.current = !0, g.current = w.target;
    const m = t.props.onFocus;
    m && m(w);
  }, T = (w) => {
    f.current === null && (f.current = w.relatedTarget), b.current = !0;
  };
  return /* @__PURE__ */ be(h.Fragment, {
    children: [/* @__PURE__ */ S("div", {
      tabIndex: s ? 0 : -1,
      onFocus: T,
      ref: u,
      "data-testid": "sentinelStart"
    }), /* @__PURE__ */ h.cloneElement(t, {
      ref: y,
      onFocus: C
    }), /* @__PURE__ */ S("div", {
      tabIndex: s ? 0 : -1,
      onFocus: T,
      ref: d,
      "data-testid": "sentinelEnd"
    })]
  });
}
process.env.NODE_ENV !== "production" && (Sn.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * A single child content element.
   */
  children: fo,
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
process.env.NODE_ENV !== "production" && (Sn.propTypes = Qa(Sn.propTypes));
function Tf(e) {
  return typeof e == "function" ? e() : e;
}
const No = /* @__PURE__ */ h.forwardRef(function(t, o) {
  const {
    children: r,
    container: i,
    disablePortal: a = !1
  } = t, [l, s] = h.useState(null), c = Ne(/* @__PURE__ */ h.isValidElement(r) ? Ho(r) : null, o);
  if (kt(() => {
    a || s(Tf(i) || document.body);
  }, [i, a]), kt(() => {
    if (l && !a)
      return ki(o, l), () => {
        ki(o, null);
      };
  }, [o, l, a]), a) {
    if (/* @__PURE__ */ h.isValidElement(r)) {
      const u = {
        ref: c
      };
      return /* @__PURE__ */ h.cloneElement(r, u);
    }
    return r;
  }
  return l && /* @__PURE__ */ bl.createPortal(r, l);
});
process.env.NODE_ENV !== "production" && (No.propTypes = {
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
  container: n.oneOfType([mt, n.func]),
  /**
   * The `children` will be under the DOM hierarchy of the parent component.
   * @default false
   */
  disablePortal: n.bool
});
process.env.NODE_ENV !== "production" && (No.propTypes = Qa(No.propTypes));
const Of = {
  entering: {
    opacity: 1
  },
  entered: {
    opacity: 1
  }
}, Tn = /* @__PURE__ */ h.forwardRef(function(t, o) {
  const r = Ht(), i = {
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
    onEntering: g,
    onExit: b,
    onExited: v,
    onExiting: y,
    style: x,
    timeout: C = i,
    // eslint-disable-next-line react/prop-types
    TransitionComponent: T = pt,
    ...w
  } = t, m = h.useRef(null), E = Ne(m, Ho(s), o), O = (N) => (P) => {
    if (N) {
      const R = m.current;
      P === void 0 ? N(R) : N(R, P);
    }
  }, M = O(g), D = O((N, P) => {
    Fs(N);
    const R = En({
      style: x,
      timeout: C,
      easing: c
    }, {
      mode: "enter"
    });
    N.style.webkitTransition = r.transitions.create("opacity", R), N.style.transition = r.transitions.create("opacity", R), d && d(N, P);
  }), $ = O(f), p = O(y), A = O((N) => {
    const P = En({
      style: x,
      timeout: C,
      easing: c
    }, {
      mode: "exit"
    });
    N.style.webkitTransition = r.transitions.create("opacity", P), N.style.transition = r.transitions.create("opacity", P), b && b(N);
  }), I = O(v);
  return /* @__PURE__ */ S(T, {
    appear: l,
    in: u,
    nodeRef: m,
    onEnter: D,
    onEntered: $,
    onEntering: M,
    onExit: A,
    onExited: I,
    onExiting: p,
    addEndListener: (N) => {
      a && a(m.current, N);
    },
    timeout: C,
    ...w,
    children: (N, {
      ownerState: P,
      ...R
    }) => /* @__PURE__ */ h.cloneElement(s, {
      style: {
        opacity: 0,
        visibility: N === "exited" && !u ? "hidden" : void 0,
        ...Of[N],
        ...x,
        ...s.props.style
      },
      ref: E,
      ...R
    })
  });
});
process.env.NODE_ENV !== "production" && (Tn.propTypes = {
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
  children: fo.isRequired,
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
function Af(e) {
  return ce("MuiBackdrop", e);
}
se("MuiBackdrop", ["root", "invisible"]);
const kf = (e) => {
  const {
    classes: t,
    invisible: o
  } = e;
  return pe({
    root: ["root", o && "invisible"]
  }, Af, t);
}, Rf = U("div", {
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
}), Yr = /* @__PURE__ */ h.forwardRef(function(t, o) {
  const r = fe({
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
    slots: g = {},
    TransitionComponent: b,
    transitionDuration: v,
    ...y
  } = r, x = {
    ...r,
    component: l,
    invisible: s
  }, C = kf(x), T = {
    transition: b,
    root: u.Root,
    ...g
  }, w = {
    ...d,
    ...f
  }, m = {
    slots: T,
    slotProps: w
  }, [E, O] = le("root", {
    elementType: Rf,
    externalForwardedProps: m,
    className: q(C.root, a),
    ownerState: x
  }), [M, D] = le("transition", {
    elementType: Tn,
    externalForwardedProps: m,
    ownerState: x
  });
  return /* @__PURE__ */ S(M, {
    in: c,
    timeout: v,
    ...y,
    ...D,
    children: /* @__PURE__ */ S(E, {
      "aria-hidden": !0,
      ...O,
      classes: C,
      ref: o,
      children: i
    })
  });
});
process.env.NODE_ENV !== "production" && (Yr.propTypes = {
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
function Ff(e) {
  return typeof e == "function" ? e() : e;
}
function Bf(e) {
  return e ? e.props.hasOwnProperty("in") : !1;
}
const ea = () => {
}, on = new yf();
function Mf(e) {
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
  } = e, f = h.useRef({}), g = h.useRef(null), b = h.useRef(null), v = Ne(b, d), [y, x] = h.useState(!u), C = Bf(s);
  let T = !0;
  (e["aria-hidden"] === "false" || e["aria-hidden"] === !1) && (T = !1);
  const w = () => Ge(g.current), m = () => (f.current.modalRef = b.current, f.current.mount = g.current, f.current), E = () => {
    on.mount(m(), {
      disableScrollLock: r
    }), b.current && (b.current.scrollTop = 0);
  }, O = nt(() => {
    const P = Ff(t) || w().body;
    on.add(m(), P), b.current && E();
  }), M = () => on.isTopModal(m()), D = nt((P) => {
    g.current = P, P && (u && M() ? E() : b.current && Fo(b.current, T));
  }), $ = h.useCallback(() => {
    on.remove(m(), T);
  }, [T]);
  h.useEffect(() => () => {
    $();
  }, [$]), h.useEffect(() => {
    u ? O() : (!C || !i) && $();
  }, [u, $, C, i, O]);
  const p = (P) => (R) => {
    var V;
    (V = P.onKeyDown) == null || V.call(P, R), !(R.key !== "Escape" || R.which === 229 || // Wait until IME is settled.
    !M()) && (o || (R.stopPropagation(), c && c(R, "escapeKeyDown")));
  }, A = (P) => (R) => {
    var V;
    (V = P.onClick) == null || V.call(P, R), R.target === R.currentTarget && c && c(R, "backdropClick");
  };
  return {
    getRootProps: (P = {}) => {
      const R = _a(e);
      delete R.onTransitionEnter, delete R.onTransitionExited;
      const V = {
        ...R,
        ...P
      };
      return {
        /*
         * Marking an element with the role presentation indicates to assistive technology
         * that this element should be ignored; it exists to support the web application and
         * is not meant for humans to interact with directly.
         * https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/no-static-element-interactions.md
         */
        role: "presentation",
        ...V,
        onKeyDown: p(V),
        ref: v
      };
    },
    getBackdropProps: (P = {}) => {
      const R = P;
      return {
        "aria-hidden": !0,
        ...R,
        onClick: A(R),
        open: u
      };
    },
    getTransitionProps: () => {
      const P = () => {
        x(!1), a && a();
      }, R = () => {
        x(!0), l && l(), i && $();
      };
      return {
        onEnter: yr(P, (s == null ? void 0 : s.props.onEnter) ?? ea),
        onExited: yr(R, (s == null ? void 0 : s.props.onExited) ?? ea)
      };
    },
    rootRef: v,
    portalRef: D,
    isTopModal: M,
    exited: y,
    hasTransition: C
  };
}
function If(e) {
  return ce("MuiModal", e);
}
se("MuiModal", ["root", "hidden", "backdrop"]);
const Pf = (e) => {
  const {
    open: t,
    exited: o,
    classes: r
  } = e;
  return pe({
    root: ["root", !t && o && "hidden"],
    backdrop: ["backdrop"]
  }, If, r);
}, Df = U("div", {
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
}))), Nf = U(Yr, {
  name: "MuiModal",
  slot: "Backdrop",
  overridesResolver: (e, t) => t.backdrop
})({
  zIndex: -1
}), qr = /* @__PURE__ */ h.forwardRef(function(t, o) {
  const r = fe({
    name: "MuiModal",
    props: t
  }), {
    BackdropComponent: i = Nf,
    BackdropProps: a,
    classes: l,
    className: s,
    closeAfterTransition: c = !1,
    children: u,
    container: d,
    component: f,
    components: g = {},
    componentsProps: b = {},
    disableAutoFocus: v = !1,
    disableEnforceFocus: y = !1,
    disableEscapeKeyDown: x = !1,
    disablePortal: C = !1,
    disableRestoreFocus: T = !1,
    disableScrollLock: w = !1,
    hideBackdrop: m = !1,
    keepMounted: E = !1,
    onBackdropClick: O,
    onClose: M,
    onTransitionEnter: D,
    onTransitionExited: $,
    open: p,
    slotProps: A = {},
    slots: I = {},
    // eslint-disable-next-line react/prop-types
    theme: B,
    ...N
  } = r, P = {
    ...r,
    closeAfterTransition: c,
    disableAutoFocus: v,
    disableEnforceFocus: y,
    disableEscapeKeyDown: x,
    disablePortal: C,
    disableRestoreFocus: T,
    disableScrollLock: w,
    hideBackdrop: m,
    keepMounted: E
  }, {
    getRootProps: R,
    getBackdropProps: V,
    getTransitionProps: J,
    portalRef: L,
    isTopModal: k,
    exited: z,
    hasTransition: _
  } = Mf({
    ...P,
    rootRef: o
  }), Z = {
    ...P,
    exited: z
  }, K = Pf(Z), W = {};
  if (u.props.tabIndex === void 0 && (W.tabIndex = "-1"), _) {
    const {
      onEnter: oe,
      onExited: te
    } = J();
    W.onEnter = oe, W.onExited = te;
  }
  const Q = {
    slots: {
      root: g.Root,
      backdrop: g.Backdrop,
      ...I
    },
    slotProps: {
      ...b,
      ...A
    }
  }, [X, ne] = le("root", {
    ref: o,
    elementType: Df,
    externalForwardedProps: {
      ...Q,
      ...N,
      component: f
    },
    getSlotProps: R,
    ownerState: Z,
    className: q(s, K == null ? void 0 : K.root, !Z.open && Z.exited && (K == null ? void 0 : K.hidden))
  }), [ie, G] = le("backdrop", {
    ref: a == null ? void 0 : a.ref,
    elementType: i,
    externalForwardedProps: Q,
    shouldForwardComponentProp: !0,
    additionalProps: a,
    getSlotProps: (oe) => V({
      ...oe,
      onClick: (te) => {
        O && O(te), oe != null && oe.onClick && oe.onClick(te);
      }
    }),
    className: q(a == null ? void 0 : a.className, K == null ? void 0 : K.backdrop),
    ownerState: Z
  });
  return !E && !p && (!_ || z) ? null : /* @__PURE__ */ S(No, {
    ref: L,
    container: d,
    disablePortal: C,
    children: /* @__PURE__ */ be(X, {
      ...ne,
      children: [!m && i ? /* @__PURE__ */ S(ie, {
        ...G
      }) : null, /* @__PURE__ */ S(Sn, {
        disableEnforceFocus: y,
        disableAutoFocus: v,
        disableRestoreFocus: T,
        isEnabled: k,
        open: p,
        children: /* @__PURE__ */ h.cloneElement(u, W)
      })]
    })
  });
});
process.env.NODE_ENV !== "production" && (qr.propTypes = {
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
  children: fo.isRequired,
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
  container: n.oneOfType([mt, n.func]),
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
function $f(e) {
  return ce("MuiPopover", e);
}
se("MuiPopover", ["root", "paper"]);
function ta(e, t) {
  let o = 0;
  return typeof t == "number" ? o = t : t === "center" ? o = e.height / 2 : t === "bottom" && (o = e.height), o;
}
function oa(e, t) {
  let o = 0;
  return typeof t == "number" ? o = t : t === "center" ? o = e.width / 2 : t === "right" && (o = e.width), o;
}
function na(e) {
  return [e.horizontal, e.vertical].map((t) => typeof t == "number" ? `${t}px` : t).join(" ");
}
function Ao(e) {
  return typeof e == "function" ? e() : e;
}
const jf = (e) => {
  const {
    classes: t
  } = e;
  return pe({
    root: ["root"],
    paper: ["paper"]
  }, $f, t);
}, zf = U(qr, {
  name: "MuiPopover",
  slot: "Root",
  overridesResolver: (e, t) => t.root
})({}), Bs = U(Ko, {
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
}), Ms = /* @__PURE__ */ h.forwardRef(function(t, o) {
  const r = fe({
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
    elevation: g = 8,
    marginThreshold: b = 16,
    open: v,
    PaperProps: y = {},
    // TODO: remove in v7
    slots: x = {},
    slotProps: C = {},
    transformOrigin: T = {
      vertical: "top",
      horizontal: "left"
    },
    TransitionComponent: w,
    // TODO: remove in v7
    transitionDuration: m = "auto",
    TransitionProps: E = {},
    // TODO: remove in v7
    disableScrollLock: O = !1,
    ...M
  } = r, D = h.useRef(), $ = {
    ...r,
    anchorOrigin: l,
    anchorReference: c,
    elevation: g,
    marginThreshold: b,
    transformOrigin: T,
    TransitionComponent: w,
    transitionDuration: m,
    TransitionProps: E
  }, p = jf($), A = h.useCallback(() => {
    if (c === "anchorPosition")
      return process.env.NODE_ENV !== "production" && (s || console.error('MUI: You need to provide a `anchorPosition` prop when using <Popover anchorReference="anchorPosition" />.')), s;
    const G = Ao(a), oe = G && G.nodeType === 1 ? G : Ge(D.current).body, te = oe.getBoundingClientRect();
    if (process.env.NODE_ENV !== "production") {
      const me = oe.getBoundingClientRect();
      process.env.NODE_ENV !== "test" && me.top === 0 && me.left === 0 && me.right === 0 && me.bottom === 0 && console.warn(["MUI: The `anchorEl` prop provided to the component is invalid.", "The anchor element should be part of the document layout.", "Make sure the element is present in the document or that it's not display none."].join(`
`));
    }
    return {
      top: te.top + ta(te, l.vertical),
      left: te.left + oa(te, l.horizontal)
    };
  }, [a, l.horizontal, l.vertical, s, c]), I = h.useCallback((G) => ({
    vertical: ta(G, T.vertical),
    horizontal: oa(G, T.horizontal)
  }), [T.horizontal, T.vertical]), B = h.useCallback((G) => {
    const oe = {
      width: G.offsetWidth,
      height: G.offsetHeight
    }, te = I(oe);
    if (c === "none")
      return {
        top: null,
        left: null,
        transformOrigin: na(te)
      };
    const me = A();
    let ye = me.top - te.vertical, Pe = me.left - te.horizontal;
    const je = ye + oe.height, we = Pe + oe.width, Se = yt(Ao(a)), Fe = Se.innerHeight - b, Me = Se.innerWidth - b;
    if (b !== null && ye < b) {
      const ve = ye - b;
      ye -= ve, te.vertical += ve;
    } else if (b !== null && je > Fe) {
      const ve = je - Fe;
      ye -= ve, te.vertical += ve;
    }
    if (process.env.NODE_ENV !== "production" && oe.height > Fe && oe.height && Fe && console.error(["MUI: The popover component is too tall.", `Some part of it can not be seen on the screen (${oe.height - Fe}px).`, "Please consider adding a `max-height` to improve the user-experience."].join(`
`)), b !== null && Pe < b) {
      const ve = Pe - b;
      Pe -= ve, te.horizontal += ve;
    } else if (we > Me) {
      const ve = we - Me;
      Pe -= ve, te.horizontal += ve;
    }
    return {
      top: `${Math.round(ye)}px`,
      left: `${Math.round(Pe)}px`,
      transformOrigin: na(te)
    };
  }, [a, c, A, I, b]), [N, P] = h.useState(v), R = h.useCallback(() => {
    const G = D.current;
    if (!G)
      return;
    const oe = B(G);
    oe.top !== null && G.style.setProperty("top", oe.top), oe.left !== null && (G.style.left = oe.left), G.style.transformOrigin = oe.transformOrigin, P(!0);
  }, [B]);
  h.useEffect(() => (O && window.addEventListener("scroll", R), () => window.removeEventListener("scroll", R)), [a, O, R]);
  const V = () => {
    R();
  }, J = () => {
    P(!1);
  };
  h.useEffect(() => {
    v && R();
  }), h.useImperativeHandle(i, () => v ? {
    updatePosition: () => {
      R();
    }
  } : null, [v, R]), h.useEffect(() => {
    if (!v)
      return;
    const G = Lr(() => {
      R();
    }), oe = yt(Ao(a));
    return oe.addEventListener("resize", G), () => {
      G.clear(), oe.removeEventListener("resize", G);
    };
  }, [a, v, R]);
  let L = m;
  const k = {
    slots: {
      transition: w,
      ...x
    },
    slotProps: {
      transition: E,
      paper: y,
      ...C
    }
  }, [z, _] = le("transition", {
    elementType: Do,
    externalForwardedProps: k,
    ownerState: $,
    getSlotProps: (G) => ({
      ...G,
      onEntering: (oe, te) => {
        var me;
        (me = G.onEntering) == null || me.call(G, oe, te), V();
      },
      onExited: (oe) => {
        var te;
        (te = G.onExited) == null || te.call(G, oe), J();
      }
    }),
    additionalProps: {
      appear: !0,
      in: v
    }
  });
  m === "auto" && !z.muiSupportAuto && (L = void 0);
  const Z = f || (a ? Ge(Ao(a)).body : void 0), [K, {
    slots: W,
    slotProps: Q,
    ...X
  }] = le("root", {
    ref: o,
    elementType: zf,
    externalForwardedProps: {
      ...k,
      ...M
    },
    shouldForwardComponentProp: !0,
    additionalProps: {
      slots: {
        backdrop: x.backdrop
      },
      slotProps: {
        backdrop: ls(typeof C.backdrop == "function" ? C.backdrop($) : C.backdrop, {
          invisible: !0
        })
      },
      container: Z,
      open: v
    },
    ownerState: $,
    className: q(p.root, d)
  }), [ne, ie] = le("paper", {
    ref: D,
    className: p.paper,
    elementType: Bs,
    externalForwardedProps: k,
    shouldForwardComponentProp: !0,
    additionalProps: {
      elevation: g,
      style: N ? void 0 : {
        opacity: 0
      }
    },
    ownerState: $
  });
  return /* @__PURE__ */ S(K, {
    ...X,
    ...!df(K) && {
      slots: W,
      slotProps: Q,
      disableScrollLock: O
    },
    children: /* @__PURE__ */ S(z, {
      ..._,
      timeout: L,
      children: /* @__PURE__ */ S(ne, {
        ...ie,
        children: u
      })
    })
  });
});
process.env.NODE_ENV !== "production" && (Ms.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * A ref for imperative actions.
   * It currently only supports updatePosition() action.
   */
  action: Ct,
  /**
   * An HTML element, [PopoverVirtualElement](https://mui.com/material-ui/react-popover/#virtual-element),
   * or a function that returns either.
   * It's used to set the position of the popover.
   */
  anchorEl: Bt(n.oneOfType([mt, n.func]), (e) => {
    if (e.open && (!e.anchorReference || e.anchorReference === "anchorEl")) {
      const t = Ao(e.anchorEl);
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
  container: n.oneOfType([mt, n.func]),
  /**
   * Disable the scroll lock behavior.
   * @default false
   */
  disableScrollLock: n.bool,
  /**
   * The elevation of the popover.
   * @default 8
   */
  elevation: Ja,
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
    component: Ha
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
function Vf(e) {
  return ce("MuiMenu", e);
}
se("MuiMenu", ["root", "paper", "list"]);
const Lf = {
  vertical: "top",
  horizontal: "right"
}, Uf = {
  vertical: "top",
  horizontal: "left"
}, Wf = (e) => {
  const {
    classes: t
  } = e;
  return pe({
    root: ["root"],
    paper: ["paper"],
    list: ["list"]
  }, Vf, t);
}, Hf = U(Ms, {
  shouldForwardProp: (e) => ut(e) || e === "classes",
  name: "MuiMenu",
  slot: "Root",
  overridesResolver: (e, t) => t.root
})({}), Qf = U(Bs, {
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
}), Kf = U(Rs, {
  name: "MuiMenu",
  slot: "List",
  overridesResolver: (e, t) => t.list
})({
  // We disable the focus ring for mouse, touch and keyboard users.
  outline: 0
}), Is = /* @__PURE__ */ h.forwardRef(function(t, o) {
  const r = fe({
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
    PopoverClasses: g,
    transitionDuration: b = "auto",
    TransitionProps: {
      onEntering: v,
      ...y
    } = {},
    variant: x = "selectedMenu",
    slots: C = {},
    slotProps: T = {},
    ...w
  } = r, m = Qo(), E = {
    ...r,
    autoFocus: i,
    disableAutoFocusItem: s,
    MenuListProps: c,
    onEntering: v,
    PaperProps: f,
    transitionDuration: b,
    TransitionProps: y,
    variant: x
  }, O = Wf(E), M = i && !s && d, D = h.useRef(null), $ = (L, k) => {
    D.current && D.current.adjustStyleForScrollbar(L, {
      direction: m ? "rtl" : "ltr"
    }), v && v(L, k);
  }, p = (L) => {
    L.key === "Tab" && (L.preventDefault(), u && u(L, "tabKeyDown"));
  };
  let A = -1;
  h.Children.map(a, (L, k) => {
    /* @__PURE__ */ h.isValidElement(L) && (process.env.NODE_ENV !== "production" && Pr(L) && console.error(["MUI: The Menu component doesn't accept a Fragment as a child.", "Consider providing an array instead."].join(`
`)), L.props.disabled || (x === "selectedMenu" && L.props.selected || A === -1) && (A = k));
  });
  const I = {
    slots: C,
    slotProps: {
      list: c,
      transition: y,
      paper: f,
      ...T
    }
  }, B = so({
    elementType: C.root,
    externalSlotProps: T.root,
    ownerState: E,
    className: [O.root, l]
  }), [N, P] = le("paper", {
    className: O.paper,
    elementType: Qf,
    externalForwardedProps: I,
    shouldForwardComponentProp: !0,
    ownerState: E
  }), [R, V] = le("list", {
    className: q(O.list, c.className),
    elementType: Kf,
    shouldForwardComponentProp: !0,
    externalForwardedProps: I,
    getSlotProps: (L) => ({
      ...L,
      onKeyDown: (k) => {
        var z;
        p(k), (z = L.onKeyDown) == null || z.call(L, k);
      }
    }),
    ownerState: E
  }), J = typeof I.slotProps.transition == "function" ? I.slotProps.transition(E) : I.slotProps.transition;
  return /* @__PURE__ */ S(Hf, {
    onClose: u,
    anchorOrigin: {
      vertical: "bottom",
      horizontal: m ? "right" : "left"
    },
    transformOrigin: m ? Lf : Uf,
    slots: {
      root: C.root,
      paper: N,
      backdrop: C.backdrop,
      ...C.transition && {
        // TODO: pass `slots.transition` directly once `TransitionComponent` is removed from Popover
        transition: C.transition
      }
    },
    slotProps: {
      root: B,
      paper: P,
      backdrop: typeof T.backdrop == "function" ? T.backdrop(E) : T.backdrop,
      transition: {
        ...J,
        onEntering: (...L) => {
          var k;
          $(...L), (k = J == null ? void 0 : J.onEntering) == null || k.call(J, ...L);
        }
      }
    },
    open: d,
    ref: o,
    transitionDuration: b,
    ownerState: E,
    ...w,
    classes: g,
    children: /* @__PURE__ */ S(R, {
      actions: D,
      autoFocus: i && (A === -1 || s),
      autoFocusItem: M,
      variant: x,
      ...V,
      children: a
    })
  });
});
process.env.NODE_ENV !== "production" && (Is.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * An HTML element, or a function that returns one.
   * It's used to set the position of the menu.
   */
  anchorEl: n.oneOfType([mt, n.func]),
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
const Gf = U(Is)(() => ({
  "& .MuiPaper-root": {
    boxShadow: "0px 2px 6px 2px #00000026, 0px 1px 2px 0px #0000004D"
  }
})), Rm = ({ open: e, ...t }) => /* @__PURE__ */ S(Gf, { open: e, ...t }), ra = se("MuiDivider", ["root", "absolute", "fullWidth", "inset", "middle", "flexItem", "light", "vertical", "withChildren", "withChildrenVertical", "textAlignRight", "textAlignLeft", "wrapper", "wrapperVertical"]), ia = se("MuiListItemIcon", ["root", "alignItemsFlexStart"]);
function Yf(e) {
  return ce("MuiTypography", e);
}
se("MuiTypography", ["root", "h1", "h2", "h3", "h4", "h5", "h6", "subtitle1", "subtitle2", "body1", "body2", "inherit", "button", "caption", "overline", "alignLeft", "alignRight", "alignCenter", "alignJustify", "noWrap", "gutterBottom", "paragraph"]);
const qf = {
  primary: !0,
  secondary: !0,
  error: !0,
  info: !0,
  success: !0,
  warning: !0,
  textPrimary: !0,
  textSecondary: !0,
  textDisabled: !0
}, Xf = Yu(), Jf = (e) => {
  const {
    align: t,
    gutterBottom: o,
    noWrap: r,
    paragraph: i,
    variant: a,
    classes: l
  } = e, s = {
    root: ["root", a, e.align !== "inherit" && `align${j(t)}`, o && "gutterBottom", r && "noWrap", i && "paragraph"]
  };
  return pe(s, Yf, l);
}, Zf = U("span", {
  name: "MuiTypography",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: o
    } = e;
    return [t.root, o.variant && t[o.variant], o.align !== "inherit" && t[`align${j(o.align)}`], o.noWrap && t.noWrap, o.gutterBottom && t.gutterBottom, o.paragraph && t.paragraph];
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
    })), ...Object.entries(e.palette).filter(Be()).map(([o]) => ({
      props: {
        color: o
      },
      style: {
        color: (e.vars || e).palette[o].main
      }
    })), ...Object.entries(((t = e.palette) == null ? void 0 : t.text) || {}).filter(([, o]) => typeof o == "string").map(([o]) => ({
      props: {
        color: `text${j(o)}`
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
})), aa = {
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
}, Ut = /* @__PURE__ */ h.forwardRef(function(t, o) {
  const {
    color: r,
    ...i
  } = fe({
    props: t,
    name: "MuiTypography"
  }), a = !qf[r], l = Xf({
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
    paragraph: g = !1,
    variant: b = "body1",
    variantMapping: v = aa,
    ...y
  } = l, x = {
    ...l,
    align: s,
    color: r,
    className: c,
    component: u,
    gutterBottom: d,
    noWrap: f,
    paragraph: g,
    variant: b,
    variantMapping: v
  }, C = u || (g ? "p" : v[b] || aa[b]) || "span", T = Jf(x);
  return /* @__PURE__ */ S(Zf, {
    as: C,
    ref: o,
    className: q(T.root, c),
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
process.env.NODE_ENV !== "production" && (Ut.propTypes = {
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
const sa = se("MuiListItemText", ["root", "multiline", "dense", "inset", "primary", "secondary"]);
function _f(e) {
  return ce("MuiMenuItem", e);
}
const xo = se("MuiMenuItem", ["root", "focusVisible", "dense", "disabled", "divider", "gutters", "selected"]), eg = (e, t) => {
  const {
    ownerState: o
  } = e;
  return [t.root, o.dense && t.dense, o.divider && t.divider, !o.disableGutters && t.gutters];
}, tg = (e) => {
  const {
    disabled: t,
    dense: o,
    divider: r,
    disableGutters: i,
    selected: a,
    classes: l
  } = e, c = pe({
    root: ["root", o && "dense", t && "disabled", !i && "gutters", r && "divider", a && "selected"]
  }, _f, l);
  return {
    ...l,
    ...c
  };
}, og = U(rt, {
  shouldForwardProp: (e) => ut(e) || e === "classes",
  name: "MuiMenuItem",
  slot: "Root",
  overridesResolver: eg
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
  [`&.${xo.selected}`]: {
    backgroundColor: e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})` : H(e.palette.primary.main, e.palette.action.selectedOpacity),
    [`&.${xo.focusVisible}`]: {
      backgroundColor: e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))` : H(e.palette.primary.main, e.palette.action.selectedOpacity + e.palette.action.focusOpacity)
    }
  },
  [`&.${xo.selected}:hover`]: {
    backgroundColor: e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))` : H(e.palette.primary.main, e.palette.action.selectedOpacity + e.palette.action.hoverOpacity),
    // Reset on touch devices, it doesn't add specificity
    "@media (hover: none)": {
      backgroundColor: e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})` : H(e.palette.primary.main, e.palette.action.selectedOpacity)
    }
  },
  [`&.${xo.focusVisible}`]: {
    backgroundColor: (e.vars || e).palette.action.focus
  },
  [`&.${xo.disabled}`]: {
    opacity: (e.vars || e).palette.action.disabledOpacity
  },
  [`& + .${ra.root}`]: {
    marginTop: e.spacing(1),
    marginBottom: e.spacing(1)
  },
  [`& + .${ra.inset}`]: {
    marginLeft: 52
  },
  [`& .${sa.root}`]: {
    marginTop: 0,
    marginBottom: 0
  },
  [`& .${sa.inset}`]: {
    paddingLeft: 36
  },
  [`& .${ia.root}`]: {
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
      [`& .${ia.root} svg`]: {
        fontSize: "1.25rem"
      }
    }
  }]
}))), Ps = /* @__PURE__ */ h.forwardRef(function(t, o) {
  const r = fe({
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
    className: g,
    ...b
  } = r, v = h.useContext(wn), y = h.useMemo(() => ({
    dense: l || v.dense || !1,
    disableGutters: c
  }), [v.dense, l, c]), x = h.useRef(null);
  kt(() => {
    i && (x.current ? x.current.focus() : process.env.NODE_ENV !== "production" && console.error("MUI: Unable to set focus to a MenuItem whose component has not been rendered."));
  }, [i]);
  const C = {
    ...r,
    dense: y.dense,
    divider: s,
    disableGutters: c
  }, T = tg(r), w = Ne(x, o);
  let m;
  return r.disabled || (m = f !== void 0 ? f : -1), /* @__PURE__ */ S(wn.Provider, {
    value: y,
    children: /* @__PURE__ */ S(og, {
      ref: w,
      role: d,
      tabIndex: m,
      component: a,
      focusVisibleClassName: q(T.focusVisible, u),
      className: q(T.root, g),
      ...b,
      ownerState: C,
      classes: T
    })
  });
});
process.env.NODE_ENV !== "production" && (Ps.propTypes = {
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
const ng = (e, t = "primary") => {
  var i;
  const o = Ie[t], r = ((i = e == null ? void 0 : e.palette) == null ? void 0 : i[t]) ?? o;
  return {
    fontColor: r.menuFont ?? o.menuFont,
    selectedBg: r.tonal ?? o.tonal,
    selectedFont: r.onTonal ?? o.onTonal
  };
}, rg = U(
  Ps,
  {}
)(({ theme: e }) => {
  const t = ng(e);
  return {
    fontFamily: "Noto Sans, Noto Sans TC, sans-serif",
    color: t.fontColor,
    "&:hover": {
      backgroundColor: H(t.fontColor, 0.08)
    },
    "&.Mui-selected": {
      backgroundColor: t.selectedBg,
      color: t.selectedFont
    },
    "& .MuiTouchRipple-root": {
      display: "none"
    }
  };
}), Fm = ({ ...e }) => /* @__PURE__ */ S(rg, { ...e });
function ig(e) {
  return ce("MuiDialog", e);
}
const gr = se("MuiDialog", ["root", "scrollPaper", "scrollBody", "container", "paper", "paperScrollPaper", "paperScrollBody", "paperWidthFalse", "paperWidthXs", "paperWidthSm", "paperWidthMd", "paperWidthLg", "paperWidthXl", "paperFullWidth", "paperFullScreen"]), Xr = /* @__PURE__ */ h.createContext({});
process.env.NODE_ENV !== "production" && (Xr.displayName = "DialogContext");
const ag = U(Yr, {
  name: "MuiDialog",
  slot: "Backdrop",
  overrides: (e, t) => t.backdrop
})({
  // Improve scrollable dialog support.
  zIndex: -1
}), sg = (e) => {
  const {
    classes: t,
    scroll: o,
    maxWidth: r,
    fullWidth: i,
    fullScreen: a
  } = e, l = {
    root: ["root"],
    container: ["container", `scroll${j(o)}`],
    paper: ["paper", `paperScroll${j(o)}`, `paperWidth${j(String(r))}`, i && "paperFullWidth", a && "paperFullScreen"]
  };
  return pe(l, ig, t);
}, lg = U(qr, {
  name: "MuiDialog",
  slot: "Root",
  overridesResolver: (e, t) => t.root
})({
  "@media print": {
    // Use !important to override the Modal inline-style.
    position: "absolute !important"
  }
}), cg = U("div", {
  name: "MuiDialog",
  slot: "Container",
  overridesResolver: (e, t) => {
    const {
      ownerState: o
    } = e;
    return [t.container, t[`scroll${j(o.scroll)}`]];
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
}), ug = U(Ko, {
  name: "MuiDialog",
  slot: "Paper",
  overridesResolver: (e, t) => {
    const {
      ownerState: o
    } = e;
    return [t.paper, t[`scrollPaper${j(o.scroll)}`], t[`paperWidth${j(String(o.maxWidth))}`], o.fullWidth && t.paperFullWidth, o.fullScreen && t.paperFullScreen];
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
      [`&.${gr.paperScrollBody}`]: {
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
      [`&.${gr.paperScrollBody}`]: {
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
      [`&.${gr.paperScrollBody}`]: {
        margin: 0,
        maxWidth: "100%"
      }
    }
  }]
}))), Ds = /* @__PURE__ */ h.forwardRef(function(t, o) {
  const r = fe({
    props: t,
    name: "MuiDialog"
  }), i = Ht(), a = {
    enter: i.transitions.duration.enteringScreen,
    exit: i.transitions.duration.leavingScreen
  }, {
    "aria-describedby": l,
    "aria-labelledby": s,
    "aria-modal": c = !0,
    BackdropComponent: u,
    BackdropProps: d,
    children: f,
    className: g,
    disableEscapeKeyDown: b = !1,
    fullScreen: v = !1,
    fullWidth: y = !1,
    maxWidth: x = "sm",
    onBackdropClick: C,
    onClick: T,
    onClose: w,
    open: m,
    PaperComponent: E = Ko,
    PaperProps: O = {},
    scroll: M = "paper",
    slots: D = {},
    slotProps: $ = {},
    TransitionComponent: p = Tn,
    transitionDuration: A = a,
    TransitionProps: I,
    ...B
  } = r, N = {
    ...r,
    disableEscapeKeyDown: b,
    fullScreen: v,
    fullWidth: y,
    maxWidth: x,
    scroll: M
  }, P = sg(N), R = h.useRef(), V = (ye) => {
    R.current = ye.target === ye.currentTarget;
  }, J = (ye) => {
    T && T(ye), R.current && (R.current = null, C && C(ye), w && w(ye, "backdropClick"));
  }, L = Wo(s), k = h.useMemo(() => ({
    titleId: L
  }), [L]), z = {
    transition: p,
    ...D
  }, _ = {
    transition: I,
    paper: O,
    backdrop: d,
    ...$
  }, Z = {
    slots: z,
    slotProps: _
  }, [K, W] = le("root", {
    elementType: lg,
    shouldForwardComponentProp: !0,
    externalForwardedProps: Z,
    ownerState: N,
    className: q(P.root, g),
    ref: o
  }), [Q, X] = le("backdrop", {
    elementType: ag,
    shouldForwardComponentProp: !0,
    externalForwardedProps: Z,
    ownerState: N
  }), [ne, ie] = le("paper", {
    elementType: ug,
    shouldForwardComponentProp: !0,
    externalForwardedProps: Z,
    ownerState: N,
    className: q(P.paper, O.className)
  }), [G, oe] = le("container", {
    elementType: cg,
    externalForwardedProps: Z,
    ownerState: N,
    className: q(P.container)
  }), [te, me] = le("transition", {
    elementType: Tn,
    externalForwardedProps: Z,
    ownerState: N,
    additionalProps: {
      appear: !0,
      in: m,
      timeout: A,
      role: "presentation"
    }
  });
  return /* @__PURE__ */ S(K, {
    closeAfterTransition: !0,
    slots: {
      backdrop: Q
    },
    slotProps: {
      backdrop: {
        transitionDuration: A,
        as: u,
        ...X
      }
    },
    disableEscapeKeyDown: b,
    onClose: w,
    open: m,
    onClick: J,
    ...W,
    ...B,
    children: /* @__PURE__ */ S(te, {
      ...me,
      children: /* @__PURE__ */ S(G, {
        onMouseDown: V,
        ...oe,
        children: /* @__PURE__ */ S(ne, {
          as: E,
          elevation: 24,
          role: "dialog",
          "aria-describedby": l,
          "aria-labelledby": L,
          "aria-modal": c,
          ...ie,
          children: /* @__PURE__ */ S(Xr.Provider, {
            value: k,
            children: f
          })
        })
      })
    })
  });
});
process.env.NODE_ENV !== "production" && (Ds.propTypes = {
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
function pg(e) {
  return ce("MuiDialogContent", e);
}
se("MuiDialogContent", ["root", "dividers"]);
function dg(e) {
  return ce("MuiDialogTitle", e);
}
const fg = se("MuiDialogTitle", ["root"]), gg = (e) => {
  const {
    classes: t,
    dividers: o
  } = e;
  return pe({
    root: ["root", o && "dividers"]
  }, pg, t);
}, hg = U("div", {
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
      [`.${fg.root} + &`]: {
        paddingTop: 0
      }
    }
  }]
}))), Ns = /* @__PURE__ */ h.forwardRef(function(t, o) {
  const r = fe({
    props: t,
    name: "MuiDialogContent"
  }), {
    className: i,
    dividers: a = !1,
    ...l
  } = r, s = {
    ...r,
    dividers: a
  }, c = gg(s);
  return /* @__PURE__ */ S(hg, {
    className: q(c.root, i),
    ownerState: s,
    ref: o,
    ...l
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
   * Display the top and bottom dividers.
   * @default false
   */
  dividers: n.bool,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: n.oneOfType([n.arrayOf(n.oneOfType([n.func, n.object, n.bool])), n.func, n.object])
});
function bg(e) {
  return ce("MuiDialogContentText", e);
}
se("MuiDialogContentText", ["root"]);
const mg = (e) => {
  const {
    classes: t
  } = e, r = pe({
    root: ["root"]
  }, bg, t);
  return {
    ...t,
    // forward classes to the Typography
    ...r
  };
}, yg = U(Ut, {
  shouldForwardProp: (e) => ut(e) || e === "classes",
  name: "MuiDialogContentText",
  slot: "Root",
  overridesResolver: (e, t) => t.root
})({}), $s = /* @__PURE__ */ h.forwardRef(function(t, o) {
  const r = fe({
    props: t,
    name: "MuiDialogContentText"
  }), {
    children: i,
    className: a,
    ...l
  } = r, s = mg(l);
  return /* @__PURE__ */ S(yg, {
    component: "p",
    variant: "body1",
    color: "textSecondary",
    ref: o,
    ownerState: l,
    className: q(s.root, a),
    ...r,
    classes: s
  });
});
process.env.NODE_ENV !== "production" && ($s.propTypes = {
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
const vg = (e) => {
  const {
    classes: t
  } = e;
  return pe({
    root: ["root"]
  }, dg, t);
}, Cg = U(Ut, {
  name: "MuiDialogTitle",
  slot: "Root",
  overridesResolver: (e, t) => t.root
})({
  padding: "16px 24px",
  flex: "0 0 auto"
}), Rr = /* @__PURE__ */ h.forwardRef(function(t, o) {
  const r = fe({
    props: t,
    name: "MuiDialogTitle"
  }), {
    className: i,
    id: a,
    ...l
  } = r, s = r, c = vg(s), {
    titleId: u = a
  } = h.useContext(Xr);
  return /* @__PURE__ */ S(Cg, {
    component: "h2",
    className: q(c.root, i),
    ownerState: s,
    ref: o,
    variant: "h6",
    id: a ?? u,
    ...l
  });
});
process.env.NODE_ENV !== "production" && (Rr.propTypes = {
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
function xg(e) {
  return ce("MuiDialogActions", e);
}
se("MuiDialogActions", ["root", "spacing"]);
const wg = (e) => {
  const {
    classes: t,
    disableSpacing: o
  } = e;
  return pe({
    root: ["root", !o && "spacing"]
  }, xg, t);
}, Eg = U("div", {
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
}), js = /* @__PURE__ */ h.forwardRef(function(t, o) {
  const r = fe({
    props: t,
    name: "MuiDialogActions"
  }), {
    className: i,
    disableSpacing: a = !1,
    ...l
  } = r, s = {
    ...r,
    disableSpacing: a
  }, c = wg(s);
  return /* @__PURE__ */ S(Eg, {
    className: q(c.root, i),
    ownerState: s,
    ref: o,
    ...l
  });
});
process.env.NODE_ENV !== "production" && (js.propTypes = {
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
const Sg = $e(/* @__PURE__ */ S("path", {
  d: "M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
}), "Close"), Tg = (e, t = "primary") => {
  var i;
  const o = Ie[t];
  return {
    fontColor: (((i = e == null ? void 0 : e.palette) == null ? void 0 : i[t]) ?? o).menuFont ?? o.menuFont
  };
}, Og = {
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
}, Ag = U(Ds)(({ size: e = "medium", deviceType: t = "desktop" }) => {
  const o = Og[t];
  return {
    // width: Size,
    "& .MuiDialog-paper": {
      borderRadius: 12,
      width: typeof o == "string" ? o : o[e],
      padding: "24px 36px"
    }
  };
}), Bm = ({
  icon: e,
  title: t,
  content: o,
  actions: r,
  size: i,
  align: a = "center",
  deviceType: l = "desktop",
  ...s
}) => {
  const c = Ht(), u = Tg(c);
  return /* @__PURE__ */ be(Ag, { size: i, deviceType: l, ...s, maxWidth: "lg", children: [
    /* @__PURE__ */ S(
      Go,
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
        children: /* @__PURE__ */ S(Sg, {})
      }
    ),
    e && /* @__PURE__ */ S(
      Rr,
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
      Rr,
      {
        sx: { p: 0, textAlign: a, fontSize: "20px", fontWeight: 600 },
        color: u.fontColor,
        children: t
      }
    ),
    o && /* @__PURE__ */ S(Ns, { sx: { p: 0 }, children: /* @__PURE__ */ S(
      $s,
      {
        color: u.fontColor,
        sx: { textAlign: a, fontSize: "14px", fontWeight: 400 },
        children: o
      }
    ) }),
    r && /* @__PURE__ */ S(
      js,
      {
        sx: {
          justifyContent: a === "center" ? "center" : "flex-end",
          p: 0
        },
        children: r
      }
    )
  ] });
}, kg = $e(/* @__PURE__ */ S("path", {
  d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"
}), "RadioButtonUnchecked"), Rg = $e(/* @__PURE__ */ S("path", {
  d: "M8.465 8.465C9.37 7.56 10.62 7 12 7C14.76 7 17 9.24 17 12C17 13.38 16.44 14.63 15.535 15.535C14.63 16.44 13.38 17 12 17C9.24 17 7 14.76 7 12C7 10.62 7.56 9.37 8.465 8.465Z"
}), "RadioButtonChecked"), Fg = U("span", {
  shouldForwardProp: ut
})({
  position: "relative",
  display: "flex"
}), Bg = U(kg)({
  // Scale applied to prevent dot misalignment in Safari
  transform: "scale(1)"
}), Mg = U(Rg)(de(({
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
function Jr(e) {
  const {
    checked: t = !1,
    classes: o = {},
    fontSize: r
  } = e, i = {
    ...e,
    checked: t
  };
  return /* @__PURE__ */ be(Fg, {
    className: o.root,
    ownerState: i,
    children: [/* @__PURE__ */ S(Bg, {
      fontSize: r,
      className: o.background,
      ownerState: i
    }), /* @__PURE__ */ S(Mg, {
      fontSize: r,
      className: o.dot,
      ownerState: i
    })]
  });
}
process.env.NODE_ENV !== "production" && (Jr.propTypes = {
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
const Zr = /* @__PURE__ */ h.createContext(void 0);
process.env.NODE_ENV !== "production" && (Zr.displayName = "RadioGroupContext");
function Ig() {
  return h.useContext(Zr);
}
function Pg(e) {
  return ce("MuiRadio", e);
}
const la = se("MuiRadio", ["root", "checked", "disabled", "colorPrimary", "colorSecondary", "sizeSmall"]), Dg = (e) => {
  const {
    classes: t,
    color: o,
    size: r
  } = e, i = {
    root: ["root", `color${j(o)}`, r !== "medium" && `size${j(r)}`]
  };
  return {
    ...t,
    ...pe(i, Pg, t)
  };
}, Ng = U(Vn, {
  shouldForwardProp: (e) => ut(e) || e === "classes",
  name: "MuiRadio",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: o
    } = e;
    return [t.root, o.size !== "medium" && t[`size${j(o.size)}`], t[`color${j(o.color)}`]];
  }
})(de(({
  theme: e
}) => ({
  color: (e.vars || e).palette.text.secondary,
  [`&.${la.disabled}`]: {
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
        backgroundColor: e.vars ? `rgba(${e.vars.palette.action.activeChannel} / ${e.vars.palette.action.hoverOpacity})` : H(e.palette.action.active, e.palette.action.hoverOpacity)
      }
    }
  }, ...Object.entries(e.palette).filter(Be()).map(([t]) => ({
    props: {
      color: t,
      disabled: !1,
      disableRipple: !1
    },
    style: {
      "&:hover": {
        backgroundColor: e.vars ? `rgba(${e.vars.palette[t].mainChannel} / ${e.vars.palette.action.hoverOpacity})` : H(e.palette[t].main, e.palette.action.hoverOpacity)
      }
    }
  })), ...Object.entries(e.palette).filter(Be()).map(([t]) => ({
    props: {
      color: t,
      disabled: !1
    },
    style: {
      [`&.${la.checked}`]: {
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
function $g(e, t) {
  return typeof t == "object" && t !== null ? e === t : String(e) === String(t);
}
const jg = /* @__PURE__ */ S(Jr, {
  checked: !0
}), zg = /* @__PURE__ */ S(Jr, {}), zs = /* @__PURE__ */ h.forwardRef(function(t, o) {
  const r = fe({
    props: t,
    name: "MuiRadio"
  }), {
    checked: i,
    checkedIcon: a = jg,
    color: l = "primary",
    icon: s = zg,
    name: c,
    onChange: u,
    size: d = "medium",
    className: f,
    disabled: g,
    disableRipple: b = !1,
    slots: v = {},
    slotProps: y = {},
    inputProps: x,
    ...C
  } = r, T = Yo();
  let w = g;
  T && typeof w > "u" && (w = T.disabled), w ?? (w = !1);
  const m = {
    ...r,
    disabled: w,
    disableRipple: b,
    color: l,
    size: d
  }, E = Dg(m), O = Ig();
  let M = i;
  const D = yr(u, O && O.onChange);
  let $ = c;
  O && (typeof M > "u" && (M = $g(O.value, r.value)), typeof $ > "u" && ($ = O.name));
  const p = y.input ?? x, [A, I] = le("root", {
    ref: o,
    elementType: Ng,
    className: q(E.root, f),
    shouldForwardComponentProp: !0,
    externalForwardedProps: {
      slots: v,
      slotProps: y,
      ...C
    },
    getSlotProps: (B) => ({
      ...B,
      onChange: (N, ...P) => {
        var R;
        (R = B.onChange) == null || R.call(B, N, ...P), D(N, ...P);
      }
    }),
    ownerState: m,
    additionalProps: {
      type: "radio",
      icon: /* @__PURE__ */ h.cloneElement(s, {
        fontSize: s.props.fontSize ?? d
      }),
      checkedIcon: /* @__PURE__ */ h.cloneElement(a, {
        fontSize: a.props.fontSize ?? d
      }),
      disabled: w,
      name: $,
      checked: M,
      slots: v,
      slotProps: {
        // Do not forward `slotProps.root` again because it's already handled by the `RootSlot` in this file.
        input: typeof p == "function" ? p(m) : p
      }
    }
  });
  return /* @__PURE__ */ S(A, {
    ...I,
    classes: E
  });
});
process.env.NODE_ENV !== "production" && (zs.propTypes = {
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
  inputRef: Ct,
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
function ca(e) {
  return e != null && !(Array.isArray(e) && e.length === 0);
}
function ua(e, t = !1) {
  return e && (ca(e.value) && e.value !== "" || t && ca(e.defaultValue) && e.defaultValue !== "");
}
function Vg(e) {
  return e.startAdornment;
}
function Lg(e) {
  return ce("MuiFormControl", e);
}
se("MuiFormControl", ["root", "marginNone", "marginNormal", "marginDense", "fullWidth", "disabled"]);
const Ug = (e) => {
  const {
    classes: t,
    margin: o,
    fullWidth: r
  } = e, i = {
    root: ["root", o !== "none" && `margin${j(o)}`, r && "fullWidth"]
  };
  return pe(i, Lg, t);
}, Wg = U("div", {
  name: "MuiFormControl",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: o
    } = e;
    return [t.root, t[`margin${j(o.margin)}`], o.fullWidth && t.fullWidth];
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
}), Vs = /* @__PURE__ */ h.forwardRef(function(t, o) {
  const r = fe({
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
    hiddenLabel: g = !1,
    margin: b = "none",
    required: v = !1,
    size: y = "medium",
    variant: x = "outlined",
    ...C
  } = r, T = {
    ...r,
    color: l,
    component: s,
    disabled: c,
    error: u,
    fullWidth: f,
    hiddenLabel: g,
    margin: b,
    required: v,
    size: y,
    variant: x
  }, w = Ug(T), [m, E] = h.useState(() => {
    let R = !1;
    return i && h.Children.forEach(i, (V) => {
      if (!ir(V, ["Input", "Select"]))
        return;
      const J = ir(V, ["Select"]) ? V.props.input : V;
      J && Vg(J.props) && (R = !0);
    }), R;
  }), [O, M] = h.useState(() => {
    let R = !1;
    return i && h.Children.forEach(i, (V) => {
      ir(V, ["Input", "Select"]) && (ua(V.props, !0) || ua(V.props.inputProps, !0)) && (R = !0);
    }), R;
  }), [D, $] = h.useState(!1);
  c && D && $(!1);
  const p = d !== void 0 && !c ? d : D;
  let A;
  const I = h.useRef(!1);
  process.env.NODE_ENV !== "production" && (A = () => (I.current && console.error(["MUI: There are multiple `InputBase` components inside a FormControl.", "This creates visual inconsistencies, only use one `InputBase`."].join(`
`)), I.current = !0, () => {
    I.current = !1;
  }));
  const B = h.useCallback(() => {
    M(!0);
  }, []), N = h.useCallback(() => {
    M(!1);
  }, []), P = h.useMemo(() => ({
    adornedStart: m,
    setAdornedStart: E,
    color: l,
    disabled: c,
    error: u,
    filled: O,
    focused: p,
    fullWidth: f,
    hiddenLabel: g,
    size: y,
    onBlur: () => {
      $(!1);
    },
    onFocus: () => {
      $(!0);
    },
    onEmpty: N,
    onFilled: B,
    registerEffect: A,
    required: v,
    variant: x
  }), [m, l, c, u, O, p, f, g, A, N, B, v, y, x]);
  return /* @__PURE__ */ S(Gr.Provider, {
    value: P,
    children: /* @__PURE__ */ S(Wg, {
      as: s,
      ownerState: T,
      className: q(w.root, a),
      ref: o,
      ...C,
      children: i
    })
  });
});
process.env.NODE_ENV !== "production" && (Vs.propTypes = {
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
function Hg(e) {
  return ce("MuiFormControlLabel", e);
}
const ko = se("MuiFormControlLabel", ["root", "labelPlacementStart", "labelPlacementTop", "labelPlacementBottom", "disabled", "label", "error", "required", "asterisk"]);
function _r({
  props: e,
  states: t,
  muiFormControl: o
}) {
  return t.reduce((r, i) => (r[i] = e[i], o && typeof e[i] > "u" && (r[i] = o[i]), r), {});
}
const Qg = (e) => {
  const {
    classes: t,
    disabled: o,
    labelPlacement: r,
    error: i,
    required: a
  } = e, l = {
    root: ["root", o && "disabled", `labelPlacement${j(r)}`, i && "error", a && "required"],
    label: ["label", o && "disabled"],
    asterisk: ["asterisk", i && "error"]
  };
  return pe(l, Hg, t);
}, Kg = U("label", {
  name: "MuiFormControlLabel",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: o
    } = e;
    return [{
      [`& .${ko.label}`]: t.label
    }, t.root, t[`labelPlacement${j(o.labelPlacement)}`]];
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
  [`&.${ko.disabled}`]: {
    cursor: "default"
  },
  [`& .${ko.label}`]: {
    [`&.${ko.disabled}`]: {
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
}))), Gg = U("span", {
  name: "MuiFormControlLabel",
  slot: "Asterisk",
  overridesResolver: (e, t) => t.asterisk
})(de(({
  theme: e
}) => ({
  [`&.${ko.error}`]: {
    color: (e.vars || e).palette.error.main
  }
}))), ei = /* @__PURE__ */ h.forwardRef(function(t, o) {
  const r = fe({
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
    labelPlacement: g = "end",
    name: b,
    onChange: v,
    required: y,
    slots: x = {},
    slotProps: C = {},
    value: T,
    ...w
  } = r, m = Yo(), E = c ?? s.props.disabled ?? (m == null ? void 0 : m.disabled), O = y ?? s.props.required, M = {
    disabled: E,
    required: O
  };
  ["checked", "name", "onChange", "value", "inputRef"].forEach((P) => {
    typeof s.props[P] > "u" && typeof r[P] < "u" && (M[P] = r[P]);
  });
  const D = _r({
    props: r,
    muiFormControl: m,
    states: ["error"]
  }), $ = {
    ...r,
    disabled: E,
    labelPlacement: g,
    required: O,
    error: D.error
  }, p = Qg($), A = {
    slots: x,
    slotProps: {
      ...l,
      ...C
    }
  }, [I, B] = le("typography", {
    elementType: Ut,
    externalForwardedProps: A,
    ownerState: $
  });
  let N = f;
  return N != null && N.type !== Ut && !u && (N = /* @__PURE__ */ S(I, {
    component: "span",
    ...B,
    className: q(p.label, B == null ? void 0 : B.className),
    children: N
  })), /* @__PURE__ */ be(Kg, {
    className: q(p.root, a),
    ownerState: $,
    ref: o,
    ...w,
    children: [/* @__PURE__ */ h.cloneElement(s, M), O ? /* @__PURE__ */ be("div", {
      children: [N, /* @__PURE__ */ be(Gg, {
        ownerState: $,
        "aria-hidden": !0,
        className: p.asterisk,
        children: [" ", "*"]
      })]
    }) : N]
  });
});
process.env.NODE_ENV !== "production" && (ei.propTypes = {
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
  inputRef: Ct,
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
const Yg = (e, t = "primary") => {
  var i;
  const o = Ie[t], r = ((i = e == null ? void 0 : e.palette) == null ? void 0 : i[t]) ?? o;
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
      backgroundColor: H(r.custMain ?? o.custMain, 0.08)
    },
    // 禁用狀態
    "&.Mui-disabled": {
      color: H(ot[0], 0.38)
    },
    // 鍵盤 focus 狀態
    "&.Mui-focusVisible": {
      outline: `2px solid ${r.custMain ?? o.custMain}`,
      outlineOffset: 2
    }
  };
}, qg = U(zs, {
  shouldForwardProp: (e) => e !== "color"
})(
  ({ theme: e, color: t = "primary" }) => Yg(e, t)
), Xg = ({
  color: e = "primary",
  label: t,
  ...o
}) => /* @__PURE__ */ S(
  ei,
  {
    control: /* @__PURE__ */ S(
      qg,
      {
        color: e,
        ...o
      }
    ),
    label: t || void 0
  }
);
function Jg(e) {
  return ce("MuiFormGroup", e);
}
se("MuiFormGroup", ["root", "row", "error"]);
const Zg = (e) => {
  const {
    classes: t,
    row: o,
    error: r
  } = e;
  return pe({
    root: ["root", o && "row", r && "error"]
  }, Jg, t);
}, _g = U("div", {
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
}), Ls = /* @__PURE__ */ h.forwardRef(function(t, o) {
  const r = fe({
    props: t,
    name: "MuiFormGroup"
  }), {
    className: i,
    row: a = !1,
    ...l
  } = r, s = Yo(), c = _r({
    props: r,
    muiFormControl: s,
    states: ["error"]
  }), u = {
    ...r,
    row: a,
    error: c.error
  }, d = Zg(u);
  return /* @__PURE__ */ S(_g, {
    className: q(d.root, i),
    ownerState: u,
    ref: o,
    ...l
  });
});
process.env.NODE_ENV !== "production" && (Ls.propTypes = {
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
function eh(e) {
  return ce("MuiRadioGroup", e);
}
se("MuiRadioGroup", ["root", "row", "error"]);
const th = (e) => {
  const {
    classes: t,
    row: o,
    error: r
  } = e;
  return pe({
    root: ["root", o && "row", r && "error"]
  }, eh, t);
}, Us = /* @__PURE__ */ h.forwardRef(function(t, o) {
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
  } = t, f = h.useRef(null), g = th(t), [b, v] = Ur({
    controlled: u,
    default: l,
    name: "RadioGroup"
  });
  h.useImperativeHandle(r, () => ({
    focus: () => {
      let T = f.current.querySelector("input:not(:disabled):checked");
      T || (T = f.current.querySelector("input:not(:disabled)")), T && T.focus();
    }
  }), []);
  const y = Ne(o, f), x = Wo(s), C = h.useMemo(() => ({
    name: x,
    onChange(T) {
      v(T.target.value), c && c(T, T.target.value);
    },
    value: b
  }), [x, c, v, b]);
  return /* @__PURE__ */ S(Zr.Provider, {
    value: C,
    children: /* @__PURE__ */ S(Ls, {
      role: "radiogroup",
      ref: y,
      className: q(g.root, a),
      ...d,
      children: i
    })
  });
});
process.env.NODE_ENV !== "production" && (Us.propTypes = {
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
function oh(e) {
  return ce("MuiFormLabel", e);
}
const pn = se("MuiFormLabel", ["root", "colorSecondary", "focused", "disabled", "error", "filled", "required", "asterisk"]), nh = (e) => {
  const {
    classes: t,
    color: o,
    focused: r,
    disabled: i,
    error: a,
    filled: l,
    required: s
  } = e, c = {
    root: ["root", `color${j(o)}`, i && "disabled", a && "error", l && "filled", r && "focused", s && "required"],
    asterisk: ["asterisk", a && "error"]
  };
  return pe(c, oh, t);
}, rh = U("label", {
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
  variants: [...Object.entries(e.palette).filter(Be()).map(([t]) => ({
    props: {
      color: t
    },
    style: {
      [`&.${pn.focused}`]: {
        color: (e.vars || e).palette[t].main
      }
    }
  })), {
    props: {},
    style: {
      [`&.${pn.disabled}`]: {
        color: (e.vars || e).palette.text.disabled
      },
      [`&.${pn.error}`]: {
        color: (e.vars || e).palette.error.main
      }
    }
  }]
}))), ih = U("span", {
  name: "MuiFormLabel",
  slot: "Asterisk",
  overridesResolver: (e, t) => t.asterisk
})(de(({
  theme: e
}) => ({
  [`&.${pn.error}`]: {
    color: (e.vars || e).palette.error.main
  }
}))), Ws = /* @__PURE__ */ h.forwardRef(function(t, o) {
  const r = fe({
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
    required: g,
    ...b
  } = r, v = Yo(), y = _r({
    props: r,
    muiFormControl: v,
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
  }, C = nh(x);
  return /* @__PURE__ */ be(rh, {
    as: s,
    ownerState: x,
    className: q(C.root, a),
    ref: o,
    ...b,
    children: [i, y.required && /* @__PURE__ */ be(ih, {
      ownerState: x,
      "aria-hidden": !0,
      className: C.asterisk,
      children: [" ", "*"]
    })]
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
const Mm = ({
  options: e,
  color: t = "primary",
  label: o,
  value: r,
  onChange: i,
  ...a
}) => /* @__PURE__ */ be(Vs, { component: "fieldset", children: [
  o && /* @__PURE__ */ S(Ws, { component: "legend", children: o }),
  /* @__PURE__ */ S(Us, { value: r, onChange: i, ...a, children: e.map((l) => /* @__PURE__ */ S(
    ei,
    {
      value: l.value,
      control: /* @__PURE__ */ S(Xg, { color: t }),
      label: l.label
    },
    l.value
  )) })
] });
function ah(e) {
  return Qt({ attr: { viewBox: "0 0 576 512" }, child: [{ tag: "path", attr: { d: "M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z" }, child: [] }] })(e);
}
function sh(e) {
  return Qt({ attr: { viewBox: "0 0 24 24" }, child: [{ tag: "g", attr: { id: "Star" }, child: [{ tag: "path", attr: { d: "M16.6,20.463a1.5,1.5,0,0,1-.7-.174l-3.666-1.927a.5.5,0,0,0-.464,0L8.1,20.289a1.5,1.5,0,0,1-2.177-1.581l.7-4.082a.5.5,0,0,0-.143-.442L3.516,11.293a1.5,1.5,0,0,1,.832-2.559l4.1-.6a.5.5,0,0,0,.376-.273l1.833-3.714a1.5,1.5,0,0,1,2.69,0l1.833,3.714a.5.5,0,0,0,.376.274l4.1.6a1.5,1.5,0,0,1,.832,2.559l-2.965,2.891a.5.5,0,0,0-.144.442l.7,4.082A1.5,1.5,0,0,1,16.6,20.463Zm-3.9-2.986L16.364,19.4a.5.5,0,0,0,.725-.527l-.7-4.082a1.5,1.5,0,0,1,.432-1.328l2.965-2.89a.5.5,0,0,0-.277-.853l-4.1-.6a1.5,1.5,0,0,1-1.13-.821L12.449,4.594a.516.516,0,0,0-.9,0L9.719,8.308a1.5,1.5,0,0,1-1.13.82l-4.1.6a.5.5,0,0,0-.277.853L7.18,13.468A1.5,1.5,0,0,1,7.611,14.8l-.7,4.082a.5.5,0,0,0,.726.527L11.3,17.477a1.5,1.5,0,0,1,1.4,0Z" }, child: [] }] }] })(e);
}
const lh = { small: 20, medium: 32, large: 40 }, Im = ({
  value: e,
  max: t = 5,
  precision: o = 0.1,
  size: r = "medium",
  readOnly: i = !1,
  disabled: a = !1,
  showValueLabel: l = !0,
  onChange: s
}) => {
  const [c, u] = Ir(null), d = lh[r] || 32, f = cl(() => Array.from({ length: t }), [t]), g = (x) => {
    const T = (c !== null ? c : e) - x;
    return T >= 1 ? 1 : T > 0 ? Math.round(T / o) * o : 0;
  }, b = (x, C) => {
    if (i || a) return;
    const { left: T, width: w } = C.target.getBoundingClientRect(), m = (C.clientX - T) / w;
    let E = x + m;
    E = Math.round(E / o) * o, u(Math.max(o, Math.min(t, E)));
  }, v = () => {
    u(null);
  }, y = (x, C) => {
    if (i || a || !s) return;
    const { left: T, width: w } = C.target.getBoundingClientRect(), m = (C.clientX - T) / w;
    let E = x + m;
    E = Math.round(E / o) * o, s(Math.max(o, Math.min(t, E)));
  };
  return /* @__PURE__ */ be(
    "span",
    {
      style: { display: "inline-flex", alignItems: "center", cursor: i || a ? "default" : "pointer" },
      onMouseLeave: v,
      children: [
        f.map((x, C) => {
          const T = g(C);
          return /* @__PURE__ */ be(
            "span",
            {
              style: { position: "relative", width: d, height: d, display: "inline-block" },
              onMouseMove: (w) => b(C, w),
              onClick: (w) => y(C, w),
              children: [
                /* @__PURE__ */ S(sh, { size: d, style: { position: "absolute", left: 0, top: 0, color: "#bbb" } }),
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
                    children: /* @__PURE__ */ S(ah, { size: d, style: { color: "#FFD700" } })
                  }
                )
              ]
            },
            C
          );
        }),
        l && /* @__PURE__ */ S("span", { style: { marginLeft: 8, fontSize: d * 0.7 }, children: (c ?? e).toFixed(1) })
      ]
    }
  );
};
function ch(e) {
  return ce("MuiSwitch", e);
}
const Ve = se("MuiSwitch", ["root", "edgeStart", "edgeEnd", "switchBase", "colorPrimary", "colorSecondary", "sizeSmall", "sizeMedium", "checked", "disabled", "input", "thumb", "track"]), uh = (e) => {
  const {
    classes: t,
    edge: o,
    size: r,
    color: i,
    checked: a,
    disabled: l
  } = e, s = {
    root: ["root", o && `edge${j(o)}`, `size${j(r)}`],
    switchBase: ["switchBase", `color${j(i)}`, a && "checked", l && "disabled"],
    thumb: ["thumb"],
    track: ["track"],
    input: ["input"]
  }, c = pe(s, ch, t);
  return {
    ...t,
    // forward the disabled and checked classes to the SwitchBase
    ...c
  };
}, ph = U("span", {
  name: "MuiSwitch",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: o
    } = e;
    return [t.root, o.edge && t[`edge${j(o.edge)}`], t[`size${j(o.size)}`]];
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
}), dh = U(Vn, {
  name: "MuiSwitch",
  slot: "SwitchBase",
  overridesResolver: (e, t) => {
    const {
      ownerState: o
    } = e;
    return [t.switchBase, {
      [`& .${Ve.input}`]: t.input
    }, o.color !== "default" && t[`color${j(o.color)}`]];
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
    backgroundColor: e.vars ? `rgba(${e.vars.palette.action.activeChannel} / ${e.vars.palette.action.hoverOpacity})` : H(e.palette.action.active, e.palette.action.hoverOpacity),
    // Reset on touch devices, it doesn't add specificity
    "@media (hover: none)": {
      backgroundColor: "transparent"
    }
  },
  variants: [...Object.entries(e.palette).filter(Be(["light"])).map(([t]) => ({
    props: {
      color: t
    },
    style: {
      [`&.${Ve.checked}`]: {
        color: (e.vars || e).palette[t].main,
        "&:hover": {
          backgroundColor: e.vars ? `rgba(${e.vars.palette[t].mainChannel} / ${e.vars.palette.action.hoverOpacity})` : H(e.palette[t].main, e.palette.action.hoverOpacity),
          "@media (hover: none)": {
            backgroundColor: "transparent"
          }
        },
        [`&.${Ve.disabled}`]: {
          color: e.vars ? e.vars.palette.Switch[`${t}DisabledColor`] : `${e.palette.mode === "light" ? ao(e.palette[t].main, 0.62) : io(e.palette[t].main, 0.55)}`
        }
      },
      [`&.${Ve.checked} + .${Ve.track}`]: {
        backgroundColor: (e.vars || e).palette[t].main
      }
    }
  }))]
}))), fh = U("span", {
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
}))), gh = U("span", {
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
}))), Hs = /* @__PURE__ */ h.forwardRef(function(t, o) {
  const r = fe({
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
  } = r, g = {
    ...r,
    color: a,
    edge: l,
    size: s
  }, b = uh(g), v = {
    slots: u,
    slotProps: d
  }, [y, x] = le("root", {
    className: q(b.root, i),
    elementType: ph,
    externalForwardedProps: v,
    ownerState: g,
    additionalProps: {
      sx: c
    }
  }), [C, T] = le("thumb", {
    className: b.thumb,
    elementType: gh,
    externalForwardedProps: v,
    ownerState: g
  }), w = /* @__PURE__ */ S(C, {
    ...T
  }), [m, E] = le("track", {
    className: b.track,
    elementType: fh,
    externalForwardedProps: v,
    ownerState: g
  });
  return /* @__PURE__ */ be(y, {
    ...x,
    children: [/* @__PURE__ */ S(dh, {
      type: "checkbox",
      icon: w,
      checkedIcon: w,
      ref: o,
      ownerState: g,
      ...f,
      classes: {
        ...b,
        root: b.switchBase
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
          root: typeof d.switchBase == "function" ? d.switchBase(g) : d.switchBase
        },
        ...d.input && {
          input: typeof d.input == "function" ? d.input(g) : d.input
        }
      }
    }), /* @__PURE__ */ S(m, {
      ...E
    })]
  });
});
process.env.NODE_ENV !== "production" && (Hs.propTypes = {
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
  inputRef: Ct,
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
const hr = (e, t = "#000000") => {
  if (!e) return;
  let o = ml(e);
  return o = o.replace(/class=".*?"/g, "").replace(/focusable=".*?"/g, "").replace(/aria-hidden=".*?"/g, "").replace(/data-testid=".*?"/g, ""), o.includes("xmlns") || (o = o.replace("<svg", '<svg xmlns="http://www.w3.org/2000/svg"')), o.includes("fill=") || (o = o.replace("<path", '<path fill="' + t + '"')), `url("data:image/svg+xml;utf8,${encodeURIComponent(o)}")`;
}, hh = (e, t = "primary") => {
  var i;
  const o = Ie[t], r = ((i = e == null ? void 0 : e.palette) == null ? void 0 : i[t]) ?? o;
  return {
    bgColor: r.custMain ?? o.custMain,
    thumbColor: r.onMain ?? o.onMain,
    actthumbColor: r.fabBg ?? o.fabBg,
    unselectbgColor: r.surface ?? o.surface,
    unselectColor: r.outline ?? o.outline,
    unselectthumbColor: r.iconFont ?? o.iconFont
  };
}, bh = {
  small: { w: 40, h: 24 },
  medium: { w: 52, h: 32 },
  // ⇦ 原始 52×32 | thumb24 checked
  large: { w: 80, h: 50 }
}, mh = U(Hs)(({ theme: e, selectedIcon: t, unselectedIcon: o, custsize: r = "medium" }) => {
  const i = hh(e), a = hr(
    t,
    i.bgColor
  ), l = hr(
    t,
    H(ot[0], 0.12)
    // "000000"
  ), s = hr(
    o,
    i.unselectbgColor
  ), c = bh[r], u = c.h - 8;
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
          color: H(ot[0], 0.38)
        },
        "& + .MuiSwitch-track": {
          border: `2px solid ${H(ot[0], 0.12)}`,
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
        backgroundColor: H(ot[0], 0.08),
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
          backgroundColor: H(i.bgColor, 0.08)
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
            backgroundColor: ot[0],
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
}), Pm = ({
  selectedIcon: e,
  unselectedIcon: t,
  size: o,
  ...r
}) => /* @__PURE__ */ S(
  mh,
  {
    selectedIcon: e,
    unselectedIcon: t,
    custsize: o,
    ...r
  }
);
function yh(e) {
  return (1 + Math.sin(Math.PI * e - Math.PI / 2)) / 2;
}
function vh(e, t, o, r = {}, i = () => {
}) {
  const {
    ease: a = yh,
    duration: l = 300
    // standard
  } = r;
  let s = null;
  const c = t[e];
  let u = !1;
  const d = () => {
    u = !0;
  }, f = (g) => {
    if (u) {
      i(new Error("Animation cancelled"));
      return;
    }
    s === null && (s = g);
    const b = Math.min(1, (g - s) / l);
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
const Ch = {
  width: 99,
  height: 99,
  position: "absolute",
  top: -9999,
  overflow: "scroll"
};
function Qs(e) {
  const {
    onChange: t,
    ...o
  } = e, r = h.useRef(), i = h.useRef(null), a = () => {
    r.current = i.current.offsetHeight - i.current.clientHeight;
  };
  return kt(() => {
    const l = Lr(() => {
      const c = r.current;
      a(), c !== r.current && t(r.current);
    }), s = yt(i.current);
    return s.addEventListener("resize", l), () => {
      l.clear(), s.removeEventListener("resize", l);
    };
  }, [t]), h.useEffect(() => {
    a(), t(r.current);
  }, [t]), /* @__PURE__ */ S("div", {
    style: Ch,
    ...o,
    ref: i
  });
}
process.env.NODE_ENV !== "production" && (Qs.propTypes = {
  onChange: n.func.isRequired
});
const xh = $e(/* @__PURE__ */ S("path", {
  d: "M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z"
}), "KeyboardArrowLeft"), wh = $e(/* @__PURE__ */ S("path", {
  d: "M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z"
}), "KeyboardArrowRight");
function Eh(e) {
  return ce("MuiTabScrollButton", e);
}
const Sh = se("MuiTabScrollButton", ["root", "vertical", "horizontal", "disabled"]), Th = (e) => {
  const {
    classes: t,
    orientation: o,
    disabled: r
  } = e;
  return pe({
    root: ["root", o, r && "disabled"]
  }, Eh, t);
}, Oh = U(rt, {
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
  [`&.${Sh.disabled}`]: {
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
}), Ks = /* @__PURE__ */ h.forwardRef(function(t, o) {
  const r = fe({
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
  } = r, f = Qo(), g = {
    isRtl: f,
    ...r
  }, b = Th(g), v = a.StartScrollButtonIcon ?? xh, y = a.EndScrollButtonIcon ?? wh, x = so({
    elementType: v,
    externalSlotProps: l.startScrollButtonIcon,
    additionalProps: {
      fontSize: "small"
    },
    ownerState: g
  }), C = so({
    elementType: y,
    externalSlotProps: l.endScrollButtonIcon,
    additionalProps: {
      fontSize: "small"
    },
    ownerState: g
  });
  return /* @__PURE__ */ S(Oh, {
    component: "div",
    className: q(b.root, i),
    ref: o,
    role: null,
    ownerState: g,
    tabIndex: null,
    ...d,
    style: {
      ...d.style,
      ...c === "vertical" && {
        "--TabScrollButton-svgRotate": `rotate(${f ? -90 : 90}deg)`
      }
    },
    children: s === "left" ? /* @__PURE__ */ S(v, {
      ...x
    }) : /* @__PURE__ */ S(y, {
      ...C
    })
  });
});
process.env.NODE_ENV !== "production" && (Ks.propTypes = {
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
function Ah(e) {
  return ce("MuiTabs", e);
}
const br = se("MuiTabs", ["root", "vertical", "list", "flexContainer", "flexContainerVertical", "centered", "scroller", "fixed", "scrollableX", "scrollableY", "hideScrollbar", "scrollButtons", "scrollButtonsHideMobile", "indicator"]), pa = (e, t) => e === t ? e.firstChild : t && t.nextElementSibling ? t.nextElementSibling : e.firstChild, da = (e, t) => e === t ? e.lastChild : t && t.previousElementSibling ? t.previousElementSibling : e.lastChild, nn = (e, t, o) => {
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
}, kh = (e) => {
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
  return pe({
    root: ["root", t && "vertical"],
    scroller: ["scroller", o && "fixed", r && "hideScrollbar", i && "scrollableX", a && "scrollableY"],
    list: ["list", "flexContainer", t && "flexContainerVertical", t && "vertical", l && "centered"],
    indicator: ["indicator"],
    scrollButtons: ["scrollButtons", s && "scrollButtonsHideMobile"],
    scrollableX: [i && "scrollableX"],
    hideScrollbar: [r && "hideScrollbar"]
  }, Ah, c);
}, Rh = U("div", {
  name: "MuiTabs",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: o
    } = e;
    return [{
      [`& .${br.scrollButtons}`]: t.scrollButtons
    }, {
      [`& .${br.scrollButtons}`]: o.scrollButtonsHideMobile && t.scrollButtonsHideMobile
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
      [`& .${br.scrollButtons}`]: {
        [e.breakpoints.down("sm")]: {
          display: "none"
        }
      }
    }
  }]
}))), Fh = U("div", {
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
}), Bh = U("div", {
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
}), Mh = U("span", {
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
}))), Ih = U(Qs)({
  overflowX: "auto",
  overflowY: "hidden",
  // Hide dimensionless scrollbar on macOS
  scrollbarWidth: "none",
  // Firefox
  "&::-webkit-scrollbar": {
    display: "none"
    // Safari + Chrome
  }
}), fa = {};
let ga = !1;
const Gs = /* @__PURE__ */ h.forwardRef(function(t, o) {
  const r = fe({
    props: t,
    name: "MuiTabs"
  }), i = Ht(), a = Qo(), {
    "aria-label": l,
    "aria-labelledby": s,
    action: c,
    centered: u = !1,
    children: d,
    className: f,
    component: g = "div",
    allowScrollButtonsMobile: b = !1,
    indicatorColor: v = "primary",
    onChange: y,
    orientation: x = "horizontal",
    ScrollButtonComponent: C,
    // TODO: remove in v7 (deprecated in v6)
    scrollButtons: T = "auto",
    selectionFollowsFocus: w,
    slots: m = {},
    slotProps: E = {},
    TabIndicatorProps: O = {},
    // TODO: remove in v7 (deprecated in v6)
    TabScrollButtonProps: M = {},
    // TODO: remove in v7 (deprecated in v6)
    textColor: D = "primary",
    value: $,
    variant: p = "standard",
    visibleScrollbar: A = !1,
    ...I
  } = r, B = p === "scrollable", N = x === "vertical", P = N ? "scrollTop" : "scrollLeft", R = N ? "top" : "left", V = N ? "bottom" : "right", J = N ? "clientHeight" : "clientWidth", L = N ? "height" : "width", k = {
    ...r,
    component: g,
    allowScrollButtonsMobile: b,
    indicatorColor: v,
    orientation: x,
    vertical: N,
    scrollButtons: T,
    textColor: D,
    variant: p,
    visibleScrollbar: A,
    fixed: !B,
    hideScrollbar: B && !A,
    scrollableX: B && !N,
    scrollableY: B && N,
    centered: u && !B,
    scrollButtonsHideMobile: !b
  }, z = kh(k), _ = so({
    elementType: m.StartScrollButtonIcon,
    externalSlotProps: E.startScrollButtonIcon,
    ownerState: k
  }), Z = so({
    elementType: m.EndScrollButtonIcon,
    externalSlotProps: E.endScrollButtonIcon,
    ownerState: k
  });
  process.env.NODE_ENV !== "production" && u && B && console.error('MUI: You can not use the `centered={true}` and `variant="scrollable"` properties at the same time on a `Tabs` component.');
  const [K, W] = h.useState(!1), [Q, X] = h.useState(fa), [ne, ie] = h.useState(!1), [G, oe] = h.useState(!1), [te, me] = h.useState(!1), [ye, Pe] = h.useState({
    overflow: "hidden",
    scrollbarWidth: 0
  }), je = /* @__PURE__ */ new Map(), we = h.useRef(null), Se = h.useRef(null), Fe = {
    slots: m,
    slotProps: {
      indicator: O,
      scrollButton: M,
      ...E
    }
  }, Me = () => {
    const Y = we.current;
    let ee;
    if (Y) {
      const he = Y.getBoundingClientRect();
      ee = {
        clientWidth: Y.clientWidth,
        scrollLeft: Y.scrollLeft,
        scrollTop: Y.scrollTop,
        scrollWidth: Y.scrollWidth,
        top: he.top,
        bottom: he.bottom,
        left: he.left,
        right: he.right
      };
    }
    let ge;
    if (Y && $ !== !1) {
      const he = Se.current.children;
      if (he.length > 0) {
        const Te = he[je.get($)];
        process.env.NODE_ENV !== "production" && (Te || console.error(["MUI: The `value` provided to the Tabs component is invalid.", `None of the Tabs' children match with "${$}".`, je.keys ? `You can provide one of the following values: ${Array.from(je.keys()).join(", ")}.` : null].join(`
`))), ge = Te ? Te.getBoundingClientRect() : null, process.env.NODE_ENV !== "production" && process.env.NODE_ENV !== "test" && !ga && ge && ge.width === 0 && ge.height === 0 && // if the whole Tabs component is hidden, don't warn
        ee.clientWidth !== 0 && (ee = null, console.error(["MUI: The `value` provided to the Tabs component is invalid.", `The Tab with this \`value\` ("${$}") is not part of the document layout.`, "Make sure the tab item is present in the document or that it's not `display: none`."].join(`
`)), ga = !0);
      }
    }
    return {
      tabsMeta: ee,
      tabMeta: ge
    };
  }, ve = nt(() => {
    const {
      tabsMeta: Y,
      tabMeta: ee
    } = Me();
    let ge = 0, he;
    N ? (he = "top", ee && Y && (ge = ee.top - Y.top + Y.scrollTop)) : (he = a ? "right" : "left", ee && Y && (ge = (a ? -1 : 1) * (ee[he] - Y[he] + Y.scrollLeft)));
    const Te = {
      [he]: ge,
      // May be wrong until the font is loaded.
      [L]: ee ? ee[L] : 0
    };
    if (typeof Q[he] != "number" || typeof Q[L] != "number")
      X(Te);
    else {
      const it = Math.abs(Q[he] - Te[he]), Dt = Math.abs(Q[L] - Te[L]);
      (it >= 1 || Dt >= 1) && X(Te);
    }
  }), re = (Y, {
    animation: ee = !0
  } = {}) => {
    ee ? vh(P, we.current, Y, {
      duration: i.transitions.duration.standard
    }) : we.current[P] = Y;
  }, xt = (Y) => {
    let ee = we.current[P];
    N ? ee += Y : ee += Y * (a ? -1 : 1), re(ee);
  }, wt = () => {
    const Y = we.current[J];
    let ee = 0;
    const ge = Array.from(Se.current.children);
    for (let he = 0; he < ge.length; he += 1) {
      const Te = ge[he];
      if (ee + Te[J] > Y) {
        he === 0 && (ee = Y);
        break;
      }
      ee += Te[J];
    }
    return ee;
  }, Kt = () => {
    xt(-1 * wt());
  }, Gt = () => {
    xt(wt());
  }, [Et, {
    onChange: dt,
    ...It
  }] = le("scrollbar", {
    className: q(z.scrollableX, z.hideScrollbar),
    elementType: Ih,
    shouldForwardComponentProp: !0,
    externalForwardedProps: Fe,
    ownerState: k
  }), go = h.useCallback((Y) => {
    dt == null || dt(Y), Pe({
      overflow: null,
      scrollbarWidth: Y
    });
  }, [dt]), [ze, St] = le("scrollButtons", {
    className: q(z.scrollButtons, M.className),
    elementType: Ks,
    externalForwardedProps: Fe,
    ownerState: k,
    additionalProps: {
      orientation: x,
      slots: {
        StartScrollButtonIcon: m.startScrollButtonIcon || m.StartScrollButtonIcon,
        EndScrollButtonIcon: m.endScrollButtonIcon || m.EndScrollButtonIcon
      },
      slotProps: {
        startScrollButtonIcon: _,
        endScrollButtonIcon: Z
      }
    }
  }), ft = () => {
    const Y = {};
    Y.scrollbarSizeListener = B ? /* @__PURE__ */ S(Et, {
      ...It,
      onChange: go
    }) : null;
    const ge = B && (T === "auto" && (ne || G) || T === !0);
    return Y.scrollButtonStart = ge ? /* @__PURE__ */ S(ze, {
      direction: a ? "right" : "left",
      onClick: Kt,
      disabled: !ne,
      ...St
    }) : null, Y.scrollButtonEnd = ge ? /* @__PURE__ */ S(ze, {
      direction: a ? "left" : "right",
      onClick: Gt,
      disabled: !G,
      ...St
    }) : null, Y;
  }, Le = nt((Y) => {
    const {
      tabsMeta: ee,
      tabMeta: ge
    } = Me();
    if (!(!ge || !ee)) {
      if (ge[R] < ee[R]) {
        const he = ee[P] + (ge[R] - ee[R]);
        re(he, {
          animation: Y
        });
      } else if (ge[V] > ee[V]) {
        const he = ee[P] + (ge[V] - ee[V]);
        re(he, {
          animation: Y
        });
      }
    }
  }), Yt = nt(() => {
    B && T !== !1 && me(!te);
  });
  h.useEffect(() => {
    const Y = Lr(() => {
      we.current && ve();
    });
    let ee;
    const ge = (it) => {
      it.forEach((Dt) => {
        Dt.removedNodes.forEach((mo) => {
          ee == null || ee.unobserve(mo);
        }), Dt.addedNodes.forEach((mo) => {
          ee == null || ee.observe(mo);
        });
      }), Y(), Yt();
    }, he = yt(we.current);
    he.addEventListener("resize", Y);
    let Te;
    return typeof ResizeObserver < "u" && (ee = new ResizeObserver(Y), Array.from(Se.current.children).forEach((it) => {
      ee.observe(it);
    })), typeof MutationObserver < "u" && (Te = new MutationObserver(ge), Te.observe(Se.current, {
      childList: !0
    })), () => {
      Y.clear(), he.removeEventListener("resize", Y), Te == null || Te.disconnect(), ee == null || ee.disconnect();
    };
  }, [ve, Yt]), h.useEffect(() => {
    const Y = Array.from(Se.current.children), ee = Y.length;
    if (typeof IntersectionObserver < "u" && ee > 0 && B && T !== !1) {
      const ge = Y[0], he = Y[ee - 1], Te = {
        root: we.current,
        threshold: 0.99
      }, it = (Xn) => {
        ie(!Xn[0].isIntersecting);
      }, Dt = new IntersectionObserver(it, Te);
      Dt.observe(ge);
      const mo = (Xn) => {
        oe(!Xn[0].isIntersecting);
      }, ui = new IntersectionObserver(mo, Te);
      return ui.observe(he), () => {
        Dt.disconnect(), ui.disconnect();
      };
    }
  }, [B, T, te, d == null ? void 0 : d.length]), h.useEffect(() => {
    W(!0);
  }, []), h.useEffect(() => {
    ve();
  }), h.useEffect(() => {
    Le(fa !== Q);
  }, [Le, Q]), h.useImperativeHandle(c, () => ({
    updateIndicator: ve,
    updateScrollButtons: Yt
  }), [ve, Yt]);
  const [ho, Wn] = le("indicator", {
    className: q(z.indicator, O.className),
    elementType: Mh,
    externalForwardedProps: Fe,
    ownerState: k,
    additionalProps: {
      style: Q
    }
  }), Pt = /* @__PURE__ */ S(ho, {
    ...Wn
  });
  let qt = 0;
  const Hn = h.Children.map(d, (Y) => {
    if (!/* @__PURE__ */ h.isValidElement(Y))
      return null;
    process.env.NODE_ENV !== "production" && Pr(Y) && console.error(["MUI: The Tabs component doesn't accept a Fragment as a child.", "Consider providing an array instead."].join(`
`));
    const ee = Y.props.value === void 0 ? qt : Y.props.value;
    je.set(ee, qt);
    const ge = ee === $;
    return qt += 1, /* @__PURE__ */ h.cloneElement(Y, {
      fullWidth: p === "fullWidth",
      indicator: ge && !K && Pt,
      selected: ge,
      selectionFollowsFocus: w,
      onChange: y,
      textColor: D,
      value: ee,
      ...qt === 1 && $ === !1 && !Y.props.tabIndex ? {
        tabIndex: 0
      } : {}
    });
  }), Qn = (Y) => {
    if (Y.altKey || Y.shiftKey || Y.ctrlKey || Y.metaKey)
      return;
    const ee = Se.current, ge = Ge(ee).activeElement;
    if (ge.getAttribute("role") !== "tab")
      return;
    let Te = x === "horizontal" ? "ArrowLeft" : "ArrowUp", it = x === "horizontal" ? "ArrowRight" : "ArrowDown";
    switch (x === "horizontal" && a && (Te = "ArrowRight", it = "ArrowLeft"), Y.key) {
      case Te:
        Y.preventDefault(), nn(ee, ge, da);
        break;
      case it:
        Y.preventDefault(), nn(ee, ge, pa);
        break;
      case "Home":
        Y.preventDefault(), nn(ee, null, pa);
        break;
      case "End":
        Y.preventDefault(), nn(ee, null, da);
        break;
    }
  }, bo = ft(), [Kn, Gn] = le("root", {
    ref: o,
    className: q(z.root, f),
    elementType: Rh,
    externalForwardedProps: {
      ...Fe,
      ...I,
      component: g
    },
    ownerState: k
  }), [Yn, qn] = le("scroller", {
    ref: we,
    className: z.scroller,
    elementType: Fh,
    externalForwardedProps: Fe,
    ownerState: k,
    additionalProps: {
      style: {
        overflow: ye.overflow,
        [N ? `margin${a ? "Left" : "Right"}` : "marginBottom"]: A ? void 0 : -ye.scrollbarWidth
      }
    }
  }), [ae, He] = le("list", {
    ref: Se,
    className: q(z.list, z.flexContainer),
    elementType: Bh,
    externalForwardedProps: Fe,
    ownerState: k,
    getSlotProps: (Y) => ({
      ...Y,
      onKeyDown: (ee) => {
        var ge;
        Qn(ee), (ge = Y.onKeyDown) == null || ge.call(Y, ee);
      }
    })
  });
  return /* @__PURE__ */ be(Kn, {
    ...Gn,
    children: [bo.scrollButtonStart, bo.scrollbarSizeListener, /* @__PURE__ */ be(Yn, {
      ...qn,
      children: [/* @__PURE__ */ S(ae, {
        "aria-label": l,
        "aria-labelledby": s,
        "aria-orientation": x === "vertical" ? "vertical" : null,
        role: "tablist",
        ...He,
        children: Hn
      }), K && Pt]
    }), bo.scrollButtonEnd]
  });
});
process.env.NODE_ENV !== "production" && (Gs.propTypes = {
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
  action: Ct,
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
function Ph(e) {
  return ce("MuiTab", e);
}
const qe = se("MuiTab", ["root", "labelIcon", "textColorInherit", "textColorPrimary", "textColorSecondary", "selected", "disabled", "fullWidth", "wrapped", "iconWrapper", "icon"]), Dh = (e) => {
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
    root: ["root", a && l && "labelIcon", `textColor${j(o)}`, r && "fullWidth", i && "wrapped", s && "selected", c && "disabled"],
    icon: ["iconWrapper", "icon"]
  };
  return pe(u, Ph, t);
}, Nh = U(rt, {
  name: "MuiTab",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: o
    } = e;
    return [t.root, o.label && o.icon && t.labelIcon, t[`textColor${j(o.textColor)}`], o.fullWidth && t.fullWidth, o.wrapped && t.wrapped, {
      [`& .${qe.iconWrapper}`]: t.iconWrapper
    }, {
      [`& .${qe.icon}`]: t.icon
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
      [`& > .${qe.icon}`]: {
        marginBottom: 6
      }
    }
  }, {
    props: ({
      ownerState: t,
      iconPosition: o
    }) => t.icon && t.label && o === "bottom",
    style: {
      [`& > .${qe.icon}`]: {
        marginTop: 6
      }
    }
  }, {
    props: ({
      ownerState: t,
      iconPosition: o
    }) => t.icon && t.label && o === "start",
    style: {
      [`& > .${qe.icon}`]: {
        marginRight: e.spacing(1)
      }
    }
  }, {
    props: ({
      ownerState: t,
      iconPosition: o
    }) => t.icon && t.label && o === "end",
    style: {
      [`& > .${qe.icon}`]: {
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
      [`&.${qe.selected}`]: {
        opacity: 1
      },
      [`&.${qe.disabled}`]: {
        opacity: (e.vars || e).palette.action.disabledOpacity
      }
    }
  }, {
    props: {
      textColor: "primary"
    },
    style: {
      color: (e.vars || e).palette.text.secondary,
      [`&.${qe.selected}`]: {
        color: (e.vars || e).palette.primary.main
      },
      [`&.${qe.disabled}`]: {
        color: (e.vars || e).palette.text.disabled
      }
    }
  }, {
    props: {
      textColor: "secondary"
    },
    style: {
      color: (e.vars || e).palette.text.secondary,
      [`&.${qe.selected}`]: {
        color: (e.vars || e).palette.secondary.main
      },
      [`&.${qe.disabled}`]: {
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
}))), Ys = /* @__PURE__ */ h.forwardRef(function(t, o) {
  const r = fe({
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
    onChange: g,
    onClick: b,
    onFocus: v,
    // eslint-disable-next-line react/prop-types
    selected: y,
    // eslint-disable-next-line react/prop-types
    selectionFollowsFocus: x,
    // eslint-disable-next-line react/prop-types
    textColor: C = "inherit",
    value: T,
    wrapped: w = !1,
    ...m
  } = r, E = {
    ...r,
    disabled: a,
    disableFocusRipple: l,
    selected: y,
    icon: !!c,
    iconPosition: u,
    label: !!f,
    fullWidth: s,
    textColor: C,
    wrapped: w
  }, O = Dh(E), M = c && f && /* @__PURE__ */ h.isValidElement(c) ? /* @__PURE__ */ h.cloneElement(c, {
    className: q(O.icon, c.props.className)
  }) : c, D = (p) => {
    !y && g && g(p, T), b && b(p);
  }, $ = (p) => {
    x && !y && g && g(p, T), v && v(p);
  };
  return /* @__PURE__ */ be(Nh, {
    focusRipple: !l,
    className: q(O.root, i),
    ref: o,
    role: "tab",
    "aria-selected": y,
    disabled: a,
    onClick: D,
    onFocus: $,
    ownerState: E,
    tabIndex: y ? 0 : -1,
    ...m,
    children: [u === "top" || u === "start" ? /* @__PURE__ */ be(h.Fragment, {
      children: [M, f]
    }) : /* @__PURE__ */ be(h.Fragment, {
      children: [f, M]
    }), d]
  });
});
process.env.NODE_ENV !== "production" && (Ys.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * This prop isn't supported.
   * Use the `component` prop if you need to change the children structure.
   */
  children: Ka,
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
const $h = U(Gs)(() => ({})), jh = (e, t = "primary") => {
  var i;
  const o = Ie[t], r = ((i = e == null ? void 0 : e.palette) == null ? void 0 : i[t]) ?? o;
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
      color: H(ot[0], 0.38)
    },
    "& svg": {
      fontSize: 30,
      color: e.palette.grey[500]
    }
  };
}, zh = U(Ys, {
  shouldForwardProp: (e) => e !== "color"
})(
  ({ theme: e, color: t = "primary" }) => jh(e, t)
), Dm = ({
  options: e,
  value: t,
  onChange: o,
  indicatorColor: r,
  variant: i = "standard",
  iconPosition: a,
  ...l
}) => /* @__PURE__ */ S(
  $h,
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
      zh,
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
var Ue = "top", _e = "bottom", et = "right", We = "left", ti = "auto", qo = [Ue, _e, et, We], lo = "start", $o = "end", Vh = "clippingParents", qs = "viewport", wo = "popper", Lh = "reference", ha = /* @__PURE__ */ qo.reduce(function(e, t) {
  return e.concat([t + "-" + lo, t + "-" + $o]);
}, []), Xs = /* @__PURE__ */ [].concat(qo, [ti]).reduce(function(e, t) {
  return e.concat([t, t + "-" + lo, t + "-" + $o]);
}, []), Uh = "beforeRead", Wh = "read", Hh = "afterRead", Qh = "beforeMain", Kh = "main", Gh = "afterMain", Yh = "beforeWrite", qh = "write", Xh = "afterWrite", Jh = [Uh, Wh, Hh, Qh, Kh, Gh, Yh, qh, Xh];
function ct(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function Ye(e) {
  if (e == null)
    return window;
  if (e.toString() !== "[object Window]") {
    var t = e.ownerDocument;
    return t && t.defaultView || window;
  }
  return e;
}
function Wt(e) {
  var t = Ye(e).Element;
  return e instanceof t || e instanceof Element;
}
function Ze(e) {
  var t = Ye(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function oi(e) {
  if (typeof ShadowRoot > "u")
    return !1;
  var t = Ye(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
function Zh(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function(o) {
    var r = t.styles[o] || {}, i = t.attributes[o] || {}, a = t.elements[o];
    !Ze(a) || !ct(a) || (Object.assign(a.style, r), Object.keys(i).forEach(function(l) {
      var s = i[l];
      s === !1 ? a.removeAttribute(l) : a.setAttribute(l, s === !0 ? "" : s);
    }));
  });
}
function _h(e) {
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
      !Ze(i) || !ct(i) || (Object.assign(i.style, s), Object.keys(a).forEach(function(c) {
        i.removeAttribute(c);
      }));
    });
  };
}
const eb = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: Zh,
  effect: _h,
  requires: ["computeStyles"]
};
function lt(e) {
  return e.split("-")[0];
}
var Vt = Math.max, On = Math.min, co = Math.round;
function Fr() {
  var e = navigator.userAgentData;
  return e != null && e.brands && Array.isArray(e.brands) ? e.brands.map(function(t) {
    return t.brand + "/" + t.version;
  }).join(" ") : navigator.userAgent;
}
function Js() {
  return !/^((?!chrome|android).)*safari/i.test(Fr());
}
function uo(e, t, o) {
  t === void 0 && (t = !1), o === void 0 && (o = !1);
  var r = e.getBoundingClientRect(), i = 1, a = 1;
  t && Ze(e) && (i = e.offsetWidth > 0 && co(r.width) / e.offsetWidth || 1, a = e.offsetHeight > 0 && co(r.height) / e.offsetHeight || 1);
  var l = Wt(e) ? Ye(e) : window, s = l.visualViewport, c = !Js() && o, u = (r.left + (c && s ? s.offsetLeft : 0)) / i, d = (r.top + (c && s ? s.offsetTop : 0)) / a, f = r.width / i, g = r.height / a;
  return {
    width: f,
    height: g,
    top: d,
    right: u + f,
    bottom: d + g,
    left: u,
    x: u,
    y: d
  };
}
function ni(e) {
  var t = uo(e), o = e.offsetWidth, r = e.offsetHeight;
  return Math.abs(t.width - o) <= 1 && (o = t.width), Math.abs(t.height - r) <= 1 && (r = t.height), {
    x: e.offsetLeft,
    y: e.offsetTop,
    width: o,
    height: r
  };
}
function Zs(e, t) {
  var o = t.getRootNode && t.getRootNode();
  if (e.contains(t))
    return !0;
  if (o && oi(o)) {
    var r = t;
    do {
      if (r && e.isSameNode(r))
        return !0;
      r = r.parentNode || r.host;
    } while (r);
  }
  return !1;
}
function vt(e) {
  return Ye(e).getComputedStyle(e);
}
function tb(e) {
  return ["table", "td", "th"].indexOf(ct(e)) >= 0;
}
function Mt(e) {
  return ((Wt(e) ? e.ownerDocument : (
    // $FlowFixMe[prop-missing]
    e.document
  )) || window.document).documentElement;
}
function Ln(e) {
  return ct(e) === "html" ? e : (
    // this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    e.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    e.parentNode || // DOM Element detected
    (oi(e) ? e.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    Mt(e)
  );
}
function ba(e) {
  return !Ze(e) || // https://github.com/popperjs/popper-core/issues/837
  vt(e).position === "fixed" ? null : e.offsetParent;
}
function ob(e) {
  var t = /firefox/i.test(Fr()), o = /Trident/i.test(Fr());
  if (o && Ze(e)) {
    var r = vt(e);
    if (r.position === "fixed")
      return null;
  }
  var i = Ln(e);
  for (oi(i) && (i = i.host); Ze(i) && ["html", "body"].indexOf(ct(i)) < 0; ) {
    var a = vt(i);
    if (a.transform !== "none" || a.perspective !== "none" || a.contain === "paint" || ["transform", "perspective"].indexOf(a.willChange) !== -1 || t && a.willChange === "filter" || t && a.filter && a.filter !== "none")
      return i;
    i = i.parentNode;
  }
  return null;
}
function Xo(e) {
  for (var t = Ye(e), o = ba(e); o && tb(o) && vt(o).position === "static"; )
    o = ba(o);
  return o && (ct(o) === "html" || ct(o) === "body" && vt(o).position === "static") ? t : o || ob(e) || t;
}
function ri(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function Bo(e, t, o) {
  return Vt(e, On(t, o));
}
function nb(e, t, o) {
  var r = Bo(e, t, o);
  return r > o ? o : r;
}
function _s() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function el(e) {
  return Object.assign({}, _s(), e);
}
function tl(e, t) {
  return t.reduce(function(o, r) {
    return o[r] = e, o;
  }, {});
}
var rb = function(t, o) {
  return t = typeof t == "function" ? t(Object.assign({}, o.rects, {
    placement: o.placement
  })) : t, el(typeof t != "number" ? t : tl(t, qo));
};
function ib(e) {
  var t, o = e.state, r = e.name, i = e.options, a = o.elements.arrow, l = o.modifiersData.popperOffsets, s = lt(o.placement), c = ri(s), u = [We, et].indexOf(s) >= 0, d = u ? "height" : "width";
  if (!(!a || !l)) {
    var f = rb(i.padding, o), g = ni(a), b = c === "y" ? Ue : We, v = c === "y" ? _e : et, y = o.rects.reference[d] + o.rects.reference[c] - l[c] - o.rects.popper[d], x = l[c] - o.rects.reference[c], C = Xo(a), T = C ? c === "y" ? C.clientHeight || 0 : C.clientWidth || 0 : 0, w = y / 2 - x / 2, m = f[b], E = T - g[d] - f[v], O = T / 2 - g[d] / 2 + w, M = Bo(m, O, E), D = c;
    o.modifiersData[r] = (t = {}, t[D] = M, t.centerOffset = M - O, t);
  }
}
function ab(e) {
  var t = e.state, o = e.options, r = o.element, i = r === void 0 ? "[data-popper-arrow]" : r;
  i != null && (typeof i == "string" && (i = t.elements.popper.querySelector(i), !i) || Zs(t.elements.popper, i) && (t.elements.arrow = i));
}
const sb = {
  name: "arrow",
  enabled: !0,
  phase: "main",
  fn: ib,
  effect: ab,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"]
};
function po(e) {
  return e.split("-")[1];
}
var lb = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function cb(e, t) {
  var o = e.x, r = e.y, i = t.devicePixelRatio || 1;
  return {
    x: co(o * i) / i || 0,
    y: co(r * i) / i || 0
  };
}
function ma(e) {
  var t, o = e.popper, r = e.popperRect, i = e.placement, a = e.variation, l = e.offsets, s = e.position, c = e.gpuAcceleration, u = e.adaptive, d = e.roundOffsets, f = e.isFixed, g = l.x, b = g === void 0 ? 0 : g, v = l.y, y = v === void 0 ? 0 : v, x = typeof d == "function" ? d({
    x: b,
    y
  }) : {
    x: b,
    y
  };
  b = x.x, y = x.y;
  var C = l.hasOwnProperty("x"), T = l.hasOwnProperty("y"), w = We, m = Ue, E = window;
  if (u) {
    var O = Xo(o), M = "clientHeight", D = "clientWidth";
    if (O === Ye(o) && (O = Mt(o), vt(O).position !== "static" && s === "absolute" && (M = "scrollHeight", D = "scrollWidth")), O = O, i === Ue || (i === We || i === et) && a === $o) {
      m = _e;
      var $ = f && O === E && E.visualViewport ? E.visualViewport.height : (
        // $FlowFixMe[prop-missing]
        O[M]
      );
      y -= $ - r.height, y *= c ? 1 : -1;
    }
    if (i === We || (i === Ue || i === _e) && a === $o) {
      w = et;
      var p = f && O === E && E.visualViewport ? E.visualViewport.width : (
        // $FlowFixMe[prop-missing]
        O[D]
      );
      b -= p - r.width, b *= c ? 1 : -1;
    }
  }
  var A = Object.assign({
    position: s
  }, u && lb), I = d === !0 ? cb({
    x: b,
    y
  }, Ye(o)) : {
    x: b,
    y
  };
  if (b = I.x, y = I.y, c) {
    var B;
    return Object.assign({}, A, (B = {}, B[m] = T ? "0" : "", B[w] = C ? "0" : "", B.transform = (E.devicePixelRatio || 1) <= 1 ? "translate(" + b + "px, " + y + "px)" : "translate3d(" + b + "px, " + y + "px, 0)", B));
  }
  return Object.assign({}, A, (t = {}, t[m] = T ? y + "px" : "", t[w] = C ? b + "px" : "", t.transform = "", t));
}
function ub(e) {
  var t = e.state, o = e.options, r = o.gpuAcceleration, i = r === void 0 ? !0 : r, a = o.adaptive, l = a === void 0 ? !0 : a, s = o.roundOffsets, c = s === void 0 ? !0 : s, u = {
    placement: lt(t.placement),
    variation: po(t.placement),
    popper: t.elements.popper,
    popperRect: t.rects.popper,
    gpuAcceleration: i,
    isFixed: t.options.strategy === "fixed"
  };
  t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, ma(Object.assign({}, u, {
    offsets: t.modifiersData.popperOffsets,
    position: t.options.strategy,
    adaptive: l,
    roundOffsets: c
  })))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, ma(Object.assign({}, u, {
    offsets: t.modifiersData.arrow,
    position: "absolute",
    adaptive: !1,
    roundOffsets: c
  })))), t.attributes.popper = Object.assign({}, t.attributes.popper, {
    "data-popper-placement": t.placement
  });
}
const pb = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: ub,
  data: {}
};
var rn = {
  passive: !0
};
function db(e) {
  var t = e.state, o = e.instance, r = e.options, i = r.scroll, a = i === void 0 ? !0 : i, l = r.resize, s = l === void 0 ? !0 : l, c = Ye(t.elements.popper), u = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return a && u.forEach(function(d) {
    d.addEventListener("scroll", o.update, rn);
  }), s && c.addEventListener("resize", o.update, rn), function() {
    a && u.forEach(function(d) {
      d.removeEventListener("scroll", o.update, rn);
    }), s && c.removeEventListener("resize", o.update, rn);
  };
}
const fb = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function() {
  },
  effect: db,
  data: {}
};
var gb = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function dn(e) {
  return e.replace(/left|right|bottom|top/g, function(t) {
    return gb[t];
  });
}
var hb = {
  start: "end",
  end: "start"
};
function ya(e) {
  return e.replace(/start|end/g, function(t) {
    return hb[t];
  });
}
function ii(e) {
  var t = Ye(e), o = t.pageXOffset, r = t.pageYOffset;
  return {
    scrollLeft: o,
    scrollTop: r
  };
}
function ai(e) {
  return uo(Mt(e)).left + ii(e).scrollLeft;
}
function bb(e, t) {
  var o = Ye(e), r = Mt(e), i = o.visualViewport, a = r.clientWidth, l = r.clientHeight, s = 0, c = 0;
  if (i) {
    a = i.width, l = i.height;
    var u = Js();
    (u || !u && t === "fixed") && (s = i.offsetLeft, c = i.offsetTop);
  }
  return {
    width: a,
    height: l,
    x: s + ai(e),
    y: c
  };
}
function mb(e) {
  var t, o = Mt(e), r = ii(e), i = (t = e.ownerDocument) == null ? void 0 : t.body, a = Vt(o.scrollWidth, o.clientWidth, i ? i.scrollWidth : 0, i ? i.clientWidth : 0), l = Vt(o.scrollHeight, o.clientHeight, i ? i.scrollHeight : 0, i ? i.clientHeight : 0), s = -r.scrollLeft + ai(e), c = -r.scrollTop;
  return vt(i || o).direction === "rtl" && (s += Vt(o.clientWidth, i ? i.clientWidth : 0) - a), {
    width: a,
    height: l,
    x: s,
    y: c
  };
}
function si(e) {
  var t = vt(e), o = t.overflow, r = t.overflowX, i = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(o + i + r);
}
function ol(e) {
  return ["html", "body", "#document"].indexOf(ct(e)) >= 0 ? e.ownerDocument.body : Ze(e) && si(e) ? e : ol(Ln(e));
}
function Mo(e, t) {
  var o;
  t === void 0 && (t = []);
  var r = ol(e), i = r === ((o = e.ownerDocument) == null ? void 0 : o.body), a = Ye(r), l = i ? [a].concat(a.visualViewport || [], si(r) ? r : []) : r, s = t.concat(l);
  return i ? s : (
    // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
    s.concat(Mo(Ln(l)))
  );
}
function Br(e) {
  return Object.assign({}, e, {
    left: e.x,
    top: e.y,
    right: e.x + e.width,
    bottom: e.y + e.height
  });
}
function yb(e, t) {
  var o = uo(e, !1, t === "fixed");
  return o.top = o.top + e.clientTop, o.left = o.left + e.clientLeft, o.bottom = o.top + e.clientHeight, o.right = o.left + e.clientWidth, o.width = e.clientWidth, o.height = e.clientHeight, o.x = o.left, o.y = o.top, o;
}
function va(e, t, o) {
  return t === qs ? Br(bb(e, o)) : Wt(t) ? yb(t, o) : Br(mb(Mt(e)));
}
function vb(e) {
  var t = Mo(Ln(e)), o = ["absolute", "fixed"].indexOf(vt(e).position) >= 0, r = o && Ze(e) ? Xo(e) : e;
  return Wt(r) ? t.filter(function(i) {
    return Wt(i) && Zs(i, r) && ct(i) !== "body";
  }) : [];
}
function Cb(e, t, o, r) {
  var i = t === "clippingParents" ? vb(e) : [].concat(t), a = [].concat(i, [o]), l = a[0], s = a.reduce(function(c, u) {
    var d = va(e, u, r);
    return c.top = Vt(d.top, c.top), c.right = On(d.right, c.right), c.bottom = On(d.bottom, c.bottom), c.left = Vt(d.left, c.left), c;
  }, va(e, l, r));
  return s.width = s.right - s.left, s.height = s.bottom - s.top, s.x = s.left, s.y = s.top, s;
}
function nl(e) {
  var t = e.reference, o = e.element, r = e.placement, i = r ? lt(r) : null, a = r ? po(r) : null, l = t.x + t.width / 2 - o.width / 2, s = t.y + t.height / 2 - o.height / 2, c;
  switch (i) {
    case Ue:
      c = {
        x: l,
        y: t.y - o.height
      };
      break;
    case _e:
      c = {
        x: l,
        y: t.y + t.height
      };
      break;
    case et:
      c = {
        x: t.x + t.width,
        y: s
      };
      break;
    case We:
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
  var u = i ? ri(i) : null;
  if (u != null) {
    var d = u === "y" ? "height" : "width";
    switch (a) {
      case lo:
        c[u] = c[u] - (t[d] / 2 - o[d] / 2);
        break;
      case $o:
        c[u] = c[u] + (t[d] / 2 - o[d] / 2);
        break;
    }
  }
  return c;
}
function jo(e, t) {
  t === void 0 && (t = {});
  var o = t, r = o.placement, i = r === void 0 ? e.placement : r, a = o.strategy, l = a === void 0 ? e.strategy : a, s = o.boundary, c = s === void 0 ? Vh : s, u = o.rootBoundary, d = u === void 0 ? qs : u, f = o.elementContext, g = f === void 0 ? wo : f, b = o.altBoundary, v = b === void 0 ? !1 : b, y = o.padding, x = y === void 0 ? 0 : y, C = el(typeof x != "number" ? x : tl(x, qo)), T = g === wo ? Lh : wo, w = e.rects.popper, m = e.elements[v ? T : g], E = Cb(Wt(m) ? m : m.contextElement || Mt(e.elements.popper), c, d, l), O = uo(e.elements.reference), M = nl({
    reference: O,
    element: w,
    placement: i
  }), D = Br(Object.assign({}, w, M)), $ = g === wo ? D : O, p = {
    top: E.top - $.top + C.top,
    bottom: $.bottom - E.bottom + C.bottom,
    left: E.left - $.left + C.left,
    right: $.right - E.right + C.right
  }, A = e.modifiersData.offset;
  if (g === wo && A) {
    var I = A[i];
    Object.keys(p).forEach(function(B) {
      var N = [et, _e].indexOf(B) >= 0 ? 1 : -1, P = [Ue, _e].indexOf(B) >= 0 ? "y" : "x";
      p[B] += I[P] * N;
    });
  }
  return p;
}
function xb(e, t) {
  t === void 0 && (t = {});
  var o = t, r = o.placement, i = o.boundary, a = o.rootBoundary, l = o.padding, s = o.flipVariations, c = o.allowedAutoPlacements, u = c === void 0 ? Xs : c, d = po(r), f = d ? s ? ha : ha.filter(function(v) {
    return po(v) === d;
  }) : qo, g = f.filter(function(v) {
    return u.indexOf(v) >= 0;
  });
  g.length === 0 && (g = f);
  var b = g.reduce(function(v, y) {
    return v[y] = jo(e, {
      placement: y,
      boundary: i,
      rootBoundary: a,
      padding: l
    })[lt(y)], v;
  }, {});
  return Object.keys(b).sort(function(v, y) {
    return b[v] - b[y];
  });
}
function wb(e) {
  if (lt(e) === ti)
    return [];
  var t = dn(e);
  return [ya(e), t, ya(t)];
}
function Eb(e) {
  var t = e.state, o = e.options, r = e.name;
  if (!t.modifiersData[r]._skip) {
    for (var i = o.mainAxis, a = i === void 0 ? !0 : i, l = o.altAxis, s = l === void 0 ? !0 : l, c = o.fallbackPlacements, u = o.padding, d = o.boundary, f = o.rootBoundary, g = o.altBoundary, b = o.flipVariations, v = b === void 0 ? !0 : b, y = o.allowedAutoPlacements, x = t.options.placement, C = lt(x), T = C === x, w = c || (T || !v ? [dn(x)] : wb(x)), m = [x].concat(w).reduce(function(K, W) {
      return K.concat(lt(W) === ti ? xb(t, {
        placement: W,
        boundary: d,
        rootBoundary: f,
        padding: u,
        flipVariations: v,
        allowedAutoPlacements: y
      }) : W);
    }, []), E = t.rects.reference, O = t.rects.popper, M = /* @__PURE__ */ new Map(), D = !0, $ = m[0], p = 0; p < m.length; p++) {
      var A = m[p], I = lt(A), B = po(A) === lo, N = [Ue, _e].indexOf(I) >= 0, P = N ? "width" : "height", R = jo(t, {
        placement: A,
        boundary: d,
        rootBoundary: f,
        altBoundary: g,
        padding: u
      }), V = N ? B ? et : We : B ? _e : Ue;
      E[P] > O[P] && (V = dn(V));
      var J = dn(V), L = [];
      if (a && L.push(R[I] <= 0), s && L.push(R[V] <= 0, R[J] <= 0), L.every(function(K) {
        return K;
      })) {
        $ = A, D = !1;
        break;
      }
      M.set(A, L);
    }
    if (D)
      for (var k = v ? 3 : 1, z = function(W) {
        var Q = m.find(function(X) {
          var ne = M.get(X);
          if (ne)
            return ne.slice(0, W).every(function(ie) {
              return ie;
            });
        });
        if (Q)
          return $ = Q, "break";
      }, _ = k; _ > 0; _--) {
        var Z = z(_);
        if (Z === "break") break;
      }
    t.placement !== $ && (t.modifiersData[r]._skip = !0, t.placement = $, t.reset = !0);
  }
}
const Sb = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: Eb,
  requiresIfExists: ["offset"],
  data: {
    _skip: !1
  }
};
function Ca(e, t, o) {
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
function xa(e) {
  return [Ue, et, _e, We].some(function(t) {
    return e[t] >= 0;
  });
}
function Tb(e) {
  var t = e.state, o = e.name, r = t.rects.reference, i = t.rects.popper, a = t.modifiersData.preventOverflow, l = jo(t, {
    elementContext: "reference"
  }), s = jo(t, {
    altBoundary: !0
  }), c = Ca(l, r), u = Ca(s, i, a), d = xa(c), f = xa(u);
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
const Ob = {
  name: "hide",
  enabled: !0,
  phase: "main",
  requiresIfExists: ["preventOverflow"],
  fn: Tb
};
function Ab(e, t, o) {
  var r = lt(e), i = [We, Ue].indexOf(r) >= 0 ? -1 : 1, a = typeof o == "function" ? o(Object.assign({}, t, {
    placement: e
  })) : o, l = a[0], s = a[1];
  return l = l || 0, s = (s || 0) * i, [We, et].indexOf(r) >= 0 ? {
    x: s,
    y: l
  } : {
    x: l,
    y: s
  };
}
function kb(e) {
  var t = e.state, o = e.options, r = e.name, i = o.offset, a = i === void 0 ? [0, 0] : i, l = Xs.reduce(function(d, f) {
    return d[f] = Ab(f, t.rects, a), d;
  }, {}), s = l[t.placement], c = s.x, u = s.y;
  t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += c, t.modifiersData.popperOffsets.y += u), t.modifiersData[r] = l;
}
const Rb = {
  name: "offset",
  enabled: !0,
  phase: "main",
  requires: ["popperOffsets"],
  fn: kb
};
function Fb(e) {
  var t = e.state, o = e.name;
  t.modifiersData[o] = nl({
    reference: t.rects.reference,
    element: t.rects.popper,
    placement: t.placement
  });
}
const Bb = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: Fb,
  data: {}
};
function Mb(e) {
  return e === "x" ? "y" : "x";
}
function Ib(e) {
  var t = e.state, o = e.options, r = e.name, i = o.mainAxis, a = i === void 0 ? !0 : i, l = o.altAxis, s = l === void 0 ? !1 : l, c = o.boundary, u = o.rootBoundary, d = o.altBoundary, f = o.padding, g = o.tether, b = g === void 0 ? !0 : g, v = o.tetherOffset, y = v === void 0 ? 0 : v, x = jo(t, {
    boundary: c,
    rootBoundary: u,
    padding: f,
    altBoundary: d
  }), C = lt(t.placement), T = po(t.placement), w = !T, m = ri(C), E = Mb(m), O = t.modifiersData.popperOffsets, M = t.rects.reference, D = t.rects.popper, $ = typeof y == "function" ? y(Object.assign({}, t.rects, {
    placement: t.placement
  })) : y, p = typeof $ == "number" ? {
    mainAxis: $,
    altAxis: $
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, $), A = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null, I = {
    x: 0,
    y: 0
  };
  if (O) {
    if (a) {
      var B, N = m === "y" ? Ue : We, P = m === "y" ? _e : et, R = m === "y" ? "height" : "width", V = O[m], J = V + x[N], L = V - x[P], k = b ? -D[R] / 2 : 0, z = T === lo ? M[R] : D[R], _ = T === lo ? -D[R] : -M[R], Z = t.elements.arrow, K = b && Z ? ni(Z) : {
        width: 0,
        height: 0
      }, W = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : _s(), Q = W[N], X = W[P], ne = Bo(0, M[R], K[R]), ie = w ? M[R] / 2 - k - ne - Q - p.mainAxis : z - ne - Q - p.mainAxis, G = w ? -M[R] / 2 + k + ne + X + p.mainAxis : _ + ne + X + p.mainAxis, oe = t.elements.arrow && Xo(t.elements.arrow), te = oe ? m === "y" ? oe.clientTop || 0 : oe.clientLeft || 0 : 0, me = (B = A == null ? void 0 : A[m]) != null ? B : 0, ye = V + ie - me - te, Pe = V + G - me, je = Bo(b ? On(J, ye) : J, V, b ? Vt(L, Pe) : L);
      O[m] = je, I[m] = je - V;
    }
    if (s) {
      var we, Se = m === "x" ? Ue : We, Fe = m === "x" ? _e : et, Me = O[E], ve = E === "y" ? "height" : "width", re = Me + x[Se], xt = Me - x[Fe], wt = [Ue, We].indexOf(C) !== -1, Kt = (we = A == null ? void 0 : A[E]) != null ? we : 0, Gt = wt ? re : Me - M[ve] - D[ve] - Kt + p.altAxis, Et = wt ? Me + M[ve] + D[ve] - Kt - p.altAxis : xt, dt = b && wt ? nb(Gt, Me, Et) : Bo(b ? Gt : re, Me, b ? Et : xt);
      O[E] = dt, I[E] = dt - Me;
    }
    t.modifiersData[r] = I;
  }
}
const Pb = {
  name: "preventOverflow",
  enabled: !0,
  phase: "main",
  fn: Ib,
  requiresIfExists: ["offset"]
};
function Db(e) {
  return {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  };
}
function Nb(e) {
  return e === Ye(e) || !Ze(e) ? ii(e) : Db(e);
}
function $b(e) {
  var t = e.getBoundingClientRect(), o = co(t.width) / e.offsetWidth || 1, r = co(t.height) / e.offsetHeight || 1;
  return o !== 1 || r !== 1;
}
function jb(e, t, o) {
  o === void 0 && (o = !1);
  var r = Ze(t), i = Ze(t) && $b(t), a = Mt(t), l = uo(e, i, o), s = {
    scrollLeft: 0,
    scrollTop: 0
  }, c = {
    x: 0,
    y: 0
  };
  return (r || !r && !o) && ((ct(t) !== "body" || // https://github.com/popperjs/popper-core/issues/1078
  si(a)) && (s = Nb(t)), Ze(t) ? (c = uo(t, !0), c.x += t.clientLeft, c.y += t.clientTop) : a && (c.x = ai(a))), {
    x: l.left + s.scrollLeft - c.x,
    y: l.top + s.scrollTop - c.y,
    width: l.width,
    height: l.height
  };
}
function zb(e) {
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
function Vb(e) {
  var t = zb(e);
  return Jh.reduce(function(o, r) {
    return o.concat(t.filter(function(i) {
      return i.phase === r;
    }));
  }, []);
}
function Lb(e) {
  var t;
  return function() {
    return t || (t = new Promise(function(o) {
      Promise.resolve().then(function() {
        t = void 0, o(e());
      });
    })), t;
  };
}
function Ub(e) {
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
var wa = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function Ea() {
  for (var e = arguments.length, t = new Array(e), o = 0; o < e; o++)
    t[o] = arguments[o];
  return !t.some(function(r) {
    return !(r && typeof r.getBoundingClientRect == "function");
  });
}
function Wb(e) {
  e === void 0 && (e = {});
  var t = e, o = t.defaultModifiers, r = o === void 0 ? [] : o, i = t.defaultOptions, a = i === void 0 ? wa : i;
  return function(s, c, u) {
    u === void 0 && (u = a);
    var d = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, wa, a),
      modifiersData: {},
      elements: {
        reference: s,
        popper: c
      },
      attributes: {},
      styles: {}
    }, f = [], g = !1, b = {
      state: d,
      setOptions: function(C) {
        var T = typeof C == "function" ? C(d.options) : C;
        y(), d.options = Object.assign({}, a, d.options, T), d.scrollParents = {
          reference: Wt(s) ? Mo(s) : s.contextElement ? Mo(s.contextElement) : [],
          popper: Mo(c)
        };
        var w = Vb(Ub([].concat(r, d.options.modifiers)));
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
        if (!g) {
          var C = d.elements, T = C.reference, w = C.popper;
          if (Ea(T, w)) {
            d.rects = {
              reference: jb(T, Xo(w), d.options.strategy === "fixed"),
              popper: ni(w)
            }, d.reset = !1, d.placement = d.options.placement, d.orderedModifiers.forEach(function(p) {
              return d.modifiersData[p.name] = Object.assign({}, p.data);
            });
            for (var m = 0; m < d.orderedModifiers.length; m++) {
              if (d.reset === !0) {
                d.reset = !1, m = -1;
                continue;
              }
              var E = d.orderedModifiers[m], O = E.fn, M = E.options, D = M === void 0 ? {} : M, $ = E.name;
              typeof O == "function" && (d = O({
                state: d,
                options: D,
                name: $,
                instance: b
              }) || d);
            }
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: Lb(function() {
        return new Promise(function(x) {
          b.forceUpdate(), x(d);
        });
      }),
      destroy: function() {
        y(), g = !0;
      }
    };
    if (!Ea(s, c))
      return b;
    b.setOptions(u).then(function(x) {
      !g && u.onFirstUpdate && u.onFirstUpdate(x);
    });
    function v() {
      d.orderedModifiers.forEach(function(x) {
        var C = x.name, T = x.options, w = T === void 0 ? {} : T, m = x.effect;
        if (typeof m == "function") {
          var E = m({
            state: d,
            name: C,
            instance: b,
            options: w
          }), O = function() {
          };
          f.push(E || O);
        }
      });
    }
    function y() {
      f.forEach(function(x) {
        return x();
      }), f = [];
    }
    return b;
  };
}
var Hb = [fb, Bb, pb, eb, Rb, Sb, Pb, sb, Ob], Qb = /* @__PURE__ */ Wb({
  defaultModifiers: Hb
});
function Kb(e) {
  return ce("MuiPopper", e);
}
se("MuiPopper", ["root"]);
function Gb(e, t) {
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
function An(e) {
  return typeof e == "function" ? e() : e;
}
function Un(e) {
  return e.nodeType !== void 0;
}
function Yb(e) {
  return !Un(e);
}
const qb = (e) => {
  const {
    classes: t
  } = e;
  return pe({
    root: ["root"]
  }, Kb, t);
}, Xb = {}, Jb = /* @__PURE__ */ h.forwardRef(function(t, o) {
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
    slotProps: g = {},
    slots: b = {},
    TransitionProps: v,
    // @ts-ignore internal logic
    ownerState: y,
    // prevent from spreading to DOM, it can come from the parent component e.g. Select.
    ...x
  } = t, C = h.useRef(null), T = Ne(C, o), w = h.useRef(null), m = Ne(w, f), E = h.useRef(m);
  kt(() => {
    E.current = m;
  }, [m]), h.useImperativeHandle(f, () => w.current, []);
  const O = Gb(u, a), [M, D] = h.useState(O), [$, p] = h.useState(An(r));
  h.useEffect(() => {
    w.current && w.current.forceUpdate();
  }), h.useEffect(() => {
    r && p(An(r));
  }, [r]), kt(() => {
    if (!$ || !c)
      return;
    const P = (J) => {
      D(J.placement);
    };
    if (process.env.NODE_ENV !== "production" && $ && Un($) && $.nodeType === 1) {
      const J = $.getBoundingClientRect();
      process.env.NODE_ENV !== "test" && J.top === 0 && J.left === 0 && J.right === 0 && J.bottom === 0 && console.warn(["MUI: The `anchorEl` prop provided to the component is invalid.", "The anchor element should be part of the document layout.", "Make sure the element is present in the document or that it's not display none."].join(`
`));
    }
    let R = [{
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
        state: J
      }) => {
        P(J);
      }
    }];
    s != null && (R = R.concat(s)), d && d.modifiers != null && (R = R.concat(d.modifiers));
    const V = Qb($, C.current, {
      placement: O,
      ...d,
      modifiers: R
    });
    return E.current(V), () => {
      V.destroy(), E.current(null);
    };
  }, [$, l, s, c, d, O]);
  const A = {
    placement: M
  };
  v !== null && (A.TransitionProps = v);
  const I = qb(t), B = b.root ?? "div", N = so({
    elementType: B,
    externalSlotProps: g.root,
    externalForwardedProps: x,
    additionalProps: {
      role: "tooltip",
      ref: T
    },
    ownerState: t,
    className: I.root
  });
  return /* @__PURE__ */ S(B, {
    ...N,
    children: typeof i == "function" ? i(A) : i
  });
}), rl = /* @__PURE__ */ h.forwardRef(function(t, o) {
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
    popperOptions: g = Xb,
    popperRef: b,
    style: v,
    transition: y = !1,
    slotProps: x = {},
    slots: C = {},
    ...T
  } = t, [w, m] = h.useState(!0), E = () => {
    m(!1);
  }, O = () => {
    m(!0);
  };
  if (!c && !d && (!y || w))
    return null;
  let M;
  if (a)
    M = a;
  else if (r) {
    const p = An(r);
    M = p && Un(p) ? Ge(p).body : Ge(null).body;
  }
  const D = !d && c && (!y || w) ? "none" : void 0, $ = y ? {
    in: d,
    onEnter: E,
    onExited: O
  } : void 0;
  return /* @__PURE__ */ S(No, {
    disablePortal: s,
    container: M,
    children: /* @__PURE__ */ S(Jb, {
      anchorEl: r,
      direction: l,
      disablePortal: s,
      modifiers: u,
      ref: o,
      open: y ? !w : d,
      placement: f,
      popperOptions: g,
      popperRef: b,
      slotProps: x,
      slots: C,
      ...T,
      style: {
        // Prevents scroll issue, waiting for Popper.js to add this style once initiated.
        position: "fixed",
        // Fix Popper.js display issue
        top: 0,
        left: 0,
        display: D,
        ...v
      },
      TransitionProps: $,
      children: i
    })
  });
});
process.env.NODE_ENV !== "production" && (rl.propTypes = {
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
  anchorEl: Bt(n.oneOfType([mt, n.object, n.func]), (e) => {
    if (e.open) {
      const t = An(e.anchorEl);
      if (t && Un(t) && t.nodeType === 1) {
        const o = t.getBoundingClientRect();
        if (process.env.NODE_ENV !== "test" && o.top === 0 && o.left === 0 && o.right === 0 && o.bottom === 0)
          return new Error(["MUI: The `anchorEl` prop provided to the component is invalid.", "The anchor element should be part of the document layout.", "Make sure the element is present in the document or that it's not display none."].join(`
`));
      } else if (!t || typeof t.getBoundingClientRect != "function" || Yb(t) && t.contextElement != null && t.contextElement.nodeType !== 1)
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
  container: n.oneOfType([mt, n.func]),
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
  popperRef: Ct,
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
const Zb = U(rl, {
  name: "MuiPopper",
  slot: "Root",
  overridesResolver: (e, t) => t.root
})({}), li = /* @__PURE__ */ h.forwardRef(function(t, o) {
  const r = Qo(), i = fe({
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
    modifiers: g,
    open: b,
    placement: v,
    popperOptions: y,
    popperRef: x,
    transition: C,
    slots: T,
    slotProps: w,
    ...m
  } = i, E = (T == null ? void 0 : T.root) ?? (s == null ? void 0 : s.Root), O = {
    anchorEl: a,
    container: u,
    disablePortal: d,
    keepMounted: f,
    modifiers: g,
    open: b,
    placement: v,
    popperOptions: y,
    popperRef: x,
    transition: C,
    ...m
  };
  return /* @__PURE__ */ S(Zb, {
    as: l,
    direction: r ? "rtl" : "ltr",
    slots: {
      root: E
    },
    slotProps: w ?? c,
    ...O,
    ref: o
  });
});
process.env.NODE_ENV !== "production" && (li.propTypes = {
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
  anchorEl: n.oneOfType([mt, n.object, n.func]),
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
  container: n.oneOfType([mt, n.func]),
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
  popperRef: Ct,
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
function _b(e) {
  return ce("MuiTooltip", e);
}
const ke = se("MuiTooltip", ["popper", "popperInteractive", "popperArrow", "popperClose", "tooltip", "tooltipArrow", "touch", "tooltipPlacementLeft", "tooltipPlacementRight", "tooltipPlacementTop", "tooltipPlacementBottom", "arrow"]);
function em(e) {
  return Math.round(e * 1e5) / 1e5;
}
const tm = (e) => {
  const {
    classes: t,
    disableInteractive: o,
    arrow: r,
    touch: i,
    placement: a
  } = e, l = {
    popper: ["popper", !o && "popperInteractive", r && "popperArrow"],
    tooltip: ["tooltip", r && "tooltipArrow", i && "touch", `tooltipPlacement${j(a.split("-")[0])}`],
    arrow: ["arrow"]
  };
  return pe(l, _b, t);
}, om = U(li, {
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
      [`&[data-popper-placement*="bottom"] .${ke.arrow}`]: {
        top: 0,
        marginTop: "-0.71em",
        "&::before": {
          transformOrigin: "0 100%"
        }
      },
      [`&[data-popper-placement*="top"] .${ke.arrow}`]: {
        bottom: 0,
        marginBottom: "-0.71em",
        "&::before": {
          transformOrigin: "100% 0"
        }
      },
      [`&[data-popper-placement*="right"] .${ke.arrow}`]: {
        height: "1em",
        width: "0.71em",
        "&::before": {
          transformOrigin: "100% 100%"
        }
      },
      [`&[data-popper-placement*="left"] .${ke.arrow}`]: {
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
      [`&[data-popper-placement*="right"] .${ke.arrow}`]: {
        left: 0,
        marginLeft: "-0.71em"
      }
    }
  }, {
    props: ({
      ownerState: t
    }) => t.arrow && !!t.isRtl,
    style: {
      [`&[data-popper-placement*="right"] .${ke.arrow}`]: {
        right: 0,
        marginRight: "-0.71em"
      }
    }
  }, {
    props: ({
      ownerState: t
    }) => t.arrow && !t.isRtl,
    style: {
      [`&[data-popper-placement*="left"] .${ke.arrow}`]: {
        right: 0,
        marginRight: "-0.71em"
      }
    }
  }, {
    props: ({
      ownerState: t
    }) => t.arrow && !!t.isRtl,
    style: {
      [`&[data-popper-placement*="left"] .${ke.arrow}`]: {
        left: 0,
        marginLeft: "-0.71em"
      }
    }
  }]
}))), nm = U("div", {
  name: "MuiTooltip",
  slot: "Tooltip",
  overridesResolver: (e, t) => {
    const {
      ownerState: o
    } = e;
    return [t.tooltip, o.touch && t.touch, o.arrow && t.tooltipArrow, t[`tooltipPlacement${j(o.placement.split("-")[0])}`]];
  }
})(de(({
  theme: e
}) => ({
  backgroundColor: e.vars ? e.vars.palette.Tooltip.bg : H(e.palette.grey[700], 0.92),
  borderRadius: (e.vars || e).shape.borderRadius,
  color: (e.vars || e).palette.common.white,
  fontFamily: e.typography.fontFamily,
  padding: "4px 8px",
  fontSize: e.typography.pxToRem(11),
  maxWidth: 300,
  margin: 2,
  wordWrap: "break-word",
  fontWeight: e.typography.fontWeightMedium,
  [`.${ke.popper}[data-popper-placement*="left"] &`]: {
    transformOrigin: "right center"
  },
  [`.${ke.popper}[data-popper-placement*="right"] &`]: {
    transformOrigin: "left center"
  },
  [`.${ke.popper}[data-popper-placement*="top"] &`]: {
    transformOrigin: "center bottom",
    marginBottom: "14px"
  },
  [`.${ke.popper}[data-popper-placement*="bottom"] &`]: {
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
      lineHeight: `${em(16 / 14)}em`,
      fontWeight: e.typography.fontWeightRegular
    }
  }, {
    props: ({
      ownerState: t
    }) => !t.isRtl,
    style: {
      [`.${ke.popper}[data-popper-placement*="left"] &`]: {
        marginRight: "14px"
      },
      [`.${ke.popper}[data-popper-placement*="right"] &`]: {
        marginLeft: "14px"
      }
    }
  }, {
    props: ({
      ownerState: t
    }) => !t.isRtl && t.touch,
    style: {
      [`.${ke.popper}[data-popper-placement*="left"] &`]: {
        marginRight: "24px"
      },
      [`.${ke.popper}[data-popper-placement*="right"] &`]: {
        marginLeft: "24px"
      }
    }
  }, {
    props: ({
      ownerState: t
    }) => !!t.isRtl,
    style: {
      [`.${ke.popper}[data-popper-placement*="left"] &`]: {
        marginLeft: "14px"
      },
      [`.${ke.popper}[data-popper-placement*="right"] &`]: {
        marginRight: "14px"
      }
    }
  }, {
    props: ({
      ownerState: t
    }) => !!t.isRtl && t.touch,
    style: {
      [`.${ke.popper}[data-popper-placement*="left"] &`]: {
        marginLeft: "24px"
      },
      [`.${ke.popper}[data-popper-placement*="right"] &`]: {
        marginRight: "24px"
      }
    }
  }, {
    props: ({
      ownerState: t
    }) => t.touch,
    style: {
      [`.${ke.popper}[data-popper-placement*="top"] &`]: {
        marginBottom: "24px"
      }
    }
  }, {
    props: ({
      ownerState: t
    }) => t.touch,
    style: {
      [`.${ke.popper}[data-popper-placement*="bottom"] &`]: {
        marginTop: "24px"
      }
    }
  }]
}))), rm = U("span", {
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
  color: e.vars ? e.vars.palette.Tooltip.bg : H(e.palette.grey[700], 0.9),
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
let an = !1;
const Sa = new jn();
let Eo = {
  x: 0,
  y: 0
};
function sn(e, t) {
  return (o, ...r) => {
    t && t(o, ...r), e(o, ...r);
  };
}
const ci = /* @__PURE__ */ h.forwardRef(function(t, o) {
  const r = fe({
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
    disableInteractive: g = !1,
    disableTouchListener: b = !1,
    enterDelay: v = 100,
    enterNextDelay: y = 0,
    enterTouchDelay: x = 700,
    followCursor: C = !1,
    id: T,
    leaveDelay: w = 0,
    leaveTouchDelay: m = 1500,
    onClose: E,
    onOpen: O,
    open: M,
    placement: D = "bottom",
    PopperComponent: $,
    PopperProps: p = {},
    slotProps: A = {},
    slots: I = {},
    title: B,
    TransitionComponent: N,
    TransitionProps: P,
    ...R
  } = r, V = /* @__PURE__ */ h.isValidElement(a) ? a : /* @__PURE__ */ S("span", {
    children: a
  }), J = Ht(), L = Qo(), [k, z] = h.useState(), [_, Z] = h.useState(null), K = h.useRef(!1), W = g || C, Q = no(), X = no(), ne = no(), ie = no(), [G, oe] = Ur({
    controlled: M,
    default: !1,
    name: "Tooltip",
    state: "open"
  });
  let te = G;
  if (process.env.NODE_ENV !== "production") {
    const {
      current: ae
    } = h.useRef(M !== void 0);
    h.useEffect(() => {
      k && k.disabled && !ae && B !== "" && k.tagName.toLowerCase() === "button" && console.warn(["MUI: You are providing a disabled `button` child to the Tooltip component.", "A disabled element does not fire events.", "Tooltip needs to listen to the child element's events to display the title.", "", "Add a simple wrapper element, such as a `span`."].join(`
`));
    }, [B, k, ae]);
  }
  const me = Wo(T), ye = h.useRef(), Pe = nt(() => {
    ye.current !== void 0 && (document.body.style.WebkitUserSelect = ye.current, ye.current = void 0), ie.clear();
  });
  h.useEffect(() => Pe, [Pe]);
  const je = (ae) => {
    Sa.clear(), an = !0, oe(!0), O && !te && O(ae);
  }, we = nt(
    /**
     * @param {React.SyntheticEvent | Event} event
     */
    (ae) => {
      Sa.start(800 + w, () => {
        an = !1;
      }), oe(!1), E && te && E(ae), Q.start(J.transitions.duration.shortest, () => {
        K.current = !1;
      });
    }
  ), Se = (ae) => {
    K.current && ae.type !== "touchstart" || (k && k.removeAttribute("title"), X.clear(), ne.clear(), v || an && y ? X.start(an ? y : v, () => {
      je(ae);
    }) : je(ae));
  }, Fe = (ae) => {
    X.clear(), ne.start(w, () => {
      we(ae);
    });
  }, [, Me] = h.useState(!1), ve = (ae) => {
    bn(ae.target) || (Me(!1), Fe(ae));
  }, re = (ae) => {
    k || z(ae.currentTarget), bn(ae.target) && (Me(!0), Se(ae));
  }, xt = (ae) => {
    K.current = !0;
    const He = V.props;
    He.onTouchStart && He.onTouchStart(ae);
  }, wt = (ae) => {
    xt(ae), ne.clear(), Q.clear(), Pe(), ye.current = document.body.style.WebkitUserSelect, document.body.style.WebkitUserSelect = "none", ie.start(x, () => {
      document.body.style.WebkitUserSelect = ye.current, Se(ae);
    });
  }, Kt = (ae) => {
    V.props.onTouchEnd && V.props.onTouchEnd(ae), Pe(), ne.start(m, () => {
      we(ae);
    });
  };
  h.useEffect(() => {
    if (!te)
      return;
    function ae(He) {
      He.key === "Escape" && we(He);
    }
    return document.addEventListener("keydown", ae), () => {
      document.removeEventListener("keydown", ae);
    };
  }, [we, te]);
  const Gt = Ne(Ho(V), z, o);
  !B && B !== 0 && (te = !1);
  const Et = h.useRef(), dt = (ae) => {
    const He = V.props;
    He.onMouseMove && He.onMouseMove(ae), Eo = {
      x: ae.clientX,
      y: ae.clientY
    }, Et.current && Et.current.update();
  }, It = {}, go = typeof B == "string";
  u ? (It.title = !te && go && !f ? B : null, It["aria-describedby"] = te ? me : null) : (It["aria-label"] = go ? B : null, It["aria-labelledby"] = te && !go ? me : null);
  const ze = {
    ...It,
    ...R,
    ...V.props,
    className: q(R.className, V.props.className),
    onTouchStart: xt,
    ref: Gt,
    ...C ? {
      onMouseMove: dt
    } : {}
  };
  process.env.NODE_ENV !== "production" && (ze["data-mui-internal-clone-element"] = !0, h.useEffect(() => {
    k && !k.getAttribute("data-mui-internal-clone-element") && console.error(["MUI: The `children` component of the Tooltip is not forwarding its props correctly.", "Please make sure that props are spread on the same element that the ref is applied to."].join(`
`));
  }, [k]));
  const St = {};
  b || (ze.onTouchStart = wt, ze.onTouchEnd = Kt), f || (ze.onMouseOver = sn(Se, ze.onMouseOver), ze.onMouseLeave = sn(Fe, ze.onMouseLeave), W || (St.onMouseOver = Se, St.onMouseLeave = Fe)), d || (ze.onFocus = sn(re, ze.onFocus), ze.onBlur = sn(ve, ze.onBlur), W || (St.onFocus = re, St.onBlur = ve)), process.env.NODE_ENV !== "production" && V.props.title && console.error(["MUI: You have provided a `title` prop to the child of <Tooltip />.", `Remove this title prop \`${V.props.title}\` or the Tooltip component.`].join(`
`));
  const ft = {
    ...r,
    isRtl: L,
    arrow: i,
    disableInteractive: W,
    placement: D,
    PopperComponentProp: $,
    touch: K.current
  }, Le = typeof A.popper == "function" ? A.popper(ft) : A.popper, Yt = h.useMemo(() => {
    var He, Y;
    let ae = [{
      name: "arrow",
      enabled: !!_,
      options: {
        element: _,
        padding: 4
      }
    }];
    return (He = p.popperOptions) != null && He.modifiers && (ae = ae.concat(p.popperOptions.modifiers)), (Y = Le == null ? void 0 : Le.popperOptions) != null && Y.modifiers && (ae = ae.concat(Le.popperOptions.modifiers)), {
      ...p.popperOptions,
      ...Le == null ? void 0 : Le.popperOptions,
      modifiers: ae
    };
  }, [_, p.popperOptions, Le == null ? void 0 : Le.popperOptions]), ho = tm(ft), Wn = typeof A.transition == "function" ? A.transition(ft) : A.transition, Pt = {
    slots: {
      popper: s.Popper,
      transition: s.Transition ?? N,
      tooltip: s.Tooltip,
      arrow: s.Arrow,
      ...I
    },
    slotProps: {
      arrow: A.arrow ?? c.arrow,
      popper: {
        ...p,
        ...Le ?? c.popper
      },
      // resolvedPopperProps can be spread because it's already an object
      tooltip: A.tooltip ?? c.tooltip,
      transition: {
        ...P,
        ...Wn ?? c.transition
      }
    }
  }, [qt, Hn] = le("popper", {
    elementType: om,
    externalForwardedProps: Pt,
    ownerState: ft,
    className: q(ho.popper, p == null ? void 0 : p.className)
  }), [Qn, bo] = le("transition", {
    elementType: Do,
    externalForwardedProps: Pt,
    ownerState: ft
  }), [Kn, Gn] = le("tooltip", {
    elementType: nm,
    className: ho.tooltip,
    externalForwardedProps: Pt,
    ownerState: ft
  }), [Yn, qn] = le("arrow", {
    elementType: rm,
    className: ho.arrow,
    externalForwardedProps: Pt,
    ownerState: ft,
    ref: Z
  });
  return /* @__PURE__ */ be(h.Fragment, {
    children: [/* @__PURE__ */ h.cloneElement(V, ze), /* @__PURE__ */ S(qt, {
      as: $ ?? li,
      placement: D,
      anchorEl: C ? {
        getBoundingClientRect: () => ({
          top: Eo.y,
          left: Eo.x,
          right: Eo.x,
          bottom: Eo.y,
          width: 0,
          height: 0
        })
      } : k,
      popperRef: Et,
      open: k ? te : !1,
      id: me,
      transition: !0,
      ...St,
      ...Hn,
      popperOptions: Yt,
      children: ({
        TransitionProps: ae
      }) => /* @__PURE__ */ S(Qn, {
        timeout: J.transitions.duration.shorter,
        ...ae,
        ...bo,
        children: /* @__PURE__ */ be(Kn, {
          ...Gn,
          children: [B, i ? /* @__PURE__ */ S(Yn, {
            ...qn
          }) : null]
        })
      })
    })]
  });
});
process.env.NODE_ENV !== "production" && (ci.propTypes = {
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
  children: fo.isRequired,
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
const im = (e, t = "primary") => {
  var i;
  const o = Ie[t];
  return {
    bgColor: (((i = e == null ? void 0 : e.palette) == null ? void 0 : i[t]) ?? o).tooltipBg ?? o.tooltipBg
  };
}, am = U(({ className: e, ...t }) => /* @__PURE__ */ S(ci, { ...t, classes: { popper: e } }))(({ theme: e }) => {
  const t = im(e);
  return {
    [`& .${fn.tooltip}`]: {
      backgroundColor: t.bgColor,
      fontSize: 13,
      fontFamily: "Noto Sans, Noto Sans TC, sans-serif",
      fontWeight: 400
    },
    [`& .${fn.arrow}`]: {
      color: t.bgColor
    }
  };
}), Nm = ({ ...e }) => /* @__PURE__ */ S(am, { ...e }), sm = se("MuiBox", ["root"]), lm = zn(), Mr = Dc({
  themeId: Dr,
  defaultTheme: lm,
  defaultClassName: sm.root,
  generateClassName: Na.generate
});
process.env.NODE_ENV !== "production" && (Mr.propTypes = {
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
const cm = (e, t = "primary") => {
  var i;
  const o = Ie[t], r = ((i = e == null ? void 0 : e.palette) == null ? void 0 : i[t]) ?? o;
  return {
    bgColor: r.elevated ?? o.elevated,
    fontColor: r.iconFont ?? o.iconFont
  };
}, um = U(
  ({ className: e, ...t }) => /* @__PURE__ */ S(ci, { ...t, classes: { popper: e } })
)(({ theme: e }) => {
  const t = cm(e);
  return {
    [`& .${fn.tooltip}`]: {
      backgroundColor: t.bgColor,
      color: t.fontColor,
      fontSize: 13,
      fontFamily: "Noto Sans, Noto Sans TC, sans-serif",
      fontWeight: 400,
      padding: "10px",
      borderRadius: "12px",
      boxShadow: "0px 2px 6px 2px #00000026, 0px 1px 2px 0px #0000004D"
    },
    [`& .${fn.arrow}`]: {
      color: t.bgColor,
      "&::before": {
        boxShadow: "0px 2px 6px 2px #00000026, 0px 1px 2px 0px #0000004D"
      }
    }
  };
}), $m = ({
  title: e,
  content: t,
  actions: o,
  ...r
}) => /* @__PURE__ */ S(
  um,
  {
    ...r,
    title: /* @__PURE__ */ be(Mr, { children: [
      e && /* @__PURE__ */ S(Ut, { fontWeight: 500, fontSize: 14, fontFamily: "Noto Sans", children: e }),
      t && /* @__PURE__ */ S(Ut, { fontSize: 14, fontFamily: "Noto Sans", children: t }),
      o && /* @__PURE__ */ S(Mr, { display: "flex", gap: 2, children: o })
    ] })
  }
);
export {
  xm as Alert,
  wm as Avatar,
  Em as Button,
  _d as Checkbox,
  Am as CheckboxTree,
  km as Chip,
  Sm as Fab,
  Tm as IconButton,
  Rm as Menu,
  Fm as MenuItem,
  Bm as Modal,
  Xg as Radio,
  Mm as RadioGroup,
  Im as Rating,
  $m as RichTooltip,
  Pm as Switch,
  Dm as Tabs,
  Om as ToggleButton,
  Nm as Tooltip,
  Cm as lemonTheme
};
