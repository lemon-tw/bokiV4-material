var ii = Object.defineProperty;
var ai = (e, t, n) => t in e ? ii(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var gt = (e, t, n) => ai(e, typeof t != "symbol" ? t + "" : t, n);
import * as m from "react";
import $e, { useState as Jo, useEffect as si, isValidElement as jt, cloneElement as zt, Children as li } from "react";
import qo, { isValidElementType as Xo, Memo as ci, ForwardRef as ui, isFragment as Zo } from "react-is";
import { jsxs as Oe, jsx as M } from "react/jsx-runtime";
import di from "@emotion/styled";
import { ThemeContext as pi, keyframes as Ft, css as _o } from "@emotion/react";
import { FormControlLabel as fi } from "@mui/material";
import * as gi from "react-dom";
import Bt from "react-dom";
import { renderToStaticMarkup as hi } from "react-dom/server";
function Qe(e, ...t) {
  const n = new URL(`https://mui.com/production-error/?code=${e}`);
  return t.forEach((o) => n.searchParams.append("args[]", o)), `Minified MUI error #${e}; visit ${n} for the full message.`;
}
const er = "$$material";
function bi(e) {
  for (var t = 0, n, o = 0, i = e.length; i >= 4; ++o, i -= 4)
    n = e.charCodeAt(o) & 255 | (e.charCodeAt(++o) & 255) << 8 | (e.charCodeAt(++o) & 255) << 16 | (e.charCodeAt(++o) & 255) << 24, n = /* Math.imul(k, m): */
    (n & 65535) * 1540483477 + ((n >>> 16) * 59797 << 16), n ^= /* k >>> r: */
    n >>> 24, t = /* Math.imul(k, m): */
    (n & 65535) * 1540483477 + ((n >>> 16) * 59797 << 16) ^ /* Math.imul(h, m): */
    (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16);
  switch (i) {
    case 3:
      t ^= (e.charCodeAt(o + 2) & 255) << 16;
    case 2:
      t ^= (e.charCodeAt(o + 1) & 255) << 8;
    case 1:
      t ^= e.charCodeAt(o) & 255, t = /* Math.imul(h, m): */
      (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16);
  }
  return t ^= t >>> 13, t = /* Math.imul(h, m): */
  (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16), ((t ^ t >>> 15) >>> 0).toString(36);
}
var mi = {
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
function yi(e) {
  var t = /* @__PURE__ */ Object.create(null);
  return function(n) {
    return t[n] === void 0 && (t[n] = e(n)), t[n];
  };
}
var vi = /[A-Z]|^ms/g, Ci = /_EMO_([^_]+?)_([^]*?)_EMO_/g, tr = function(t) {
  return t.charCodeAt(1) === 45;
}, to = function(t) {
  return t != null && typeof t != "boolean";
}, gn = /* @__PURE__ */ yi(function(e) {
  return tr(e) ? e : e.replace(vi, "-$&").toLowerCase();
}), no = function(t, n) {
  switch (t) {
    case "animation":
    case "animationName":
      if (typeof n == "string")
        return n.replace(Ci, function(o, i, a) {
          return Ue = {
            name: i,
            styles: a,
            next: Ue
          }, i;
        });
  }
  return mi[t] !== 1 && !tr(t) && typeof n == "number" && n !== 0 ? n + "px" : n;
};
function Lt(e, t, n) {
  if (n == null)
    return "";
  var o = n;
  if (o.__emotion_styles !== void 0)
    return o;
  switch (typeof n) {
    case "boolean":
      return "";
    case "object": {
      var i = n;
      if (i.anim === 1)
        return Ue = {
          name: i.name,
          styles: i.styles,
          next: Ue
        }, i.name;
      var a = n;
      if (a.styles !== void 0) {
        var s = a.next;
        if (s !== void 0)
          for (; s !== void 0; )
            Ue = {
              name: s.name,
              styles: s.styles,
              next: Ue
            }, s = s.next;
        var l = a.styles + ";";
        return l;
      }
      return Ei(e, t, n);
    }
  }
  var c = n;
  return c;
}
function Ei(e, t, n) {
  var o = "";
  if (Array.isArray(n))
    for (var i = 0; i < n.length; i++)
      o += Lt(e, t, n[i]) + ";";
  else
    for (var a in n) {
      var s = n[a];
      if (typeof s != "object") {
        var l = s;
        to(l) && (o += gn(a) + ":" + no(a, l) + ";");
      } else if (Array.isArray(s) && typeof s[0] == "string" && t == null)
        for (var c = 0; c < s.length; c++)
          to(s[c]) && (o += gn(a) + ":" + no(a, s[c]) + ";");
      else {
        var d = Lt(e, t, s);
        switch (a) {
          case "animation":
          case "animationName": {
            o += gn(a) + ":" + d + ";";
            break;
          }
          default:
            o += a + "{" + d + "}";
        }
      }
    }
  return o;
}
var oo = /label:\s*([^\s;{]+)\s*(;|$)/g, Ue;
function xi(e, t, n) {
  if (e.length === 1 && typeof e[0] == "object" && e[0] !== null && e[0].styles !== void 0)
    return e[0];
  var o = !0, i = "";
  Ue = void 0;
  var a = e[0];
  if (a == null || a.raw === void 0)
    o = !1, i += Lt(n, t, a);
  else {
    var s = a;
    i += s[0];
  }
  for (var l = 1; l < e.length; l++)
    if (i += Lt(n, t, e[l]), o) {
      var c = a;
      i += c[l];
    }
  oo.lastIndex = 0;
  for (var d = "", p; (p = oo.exec(i)) !== null; )
    d += "-" + p[1];
  var f = bi(i) + d;
  return {
    name: f,
    styles: i,
    next: Ue
  };
}
function wi(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Mt = { exports: {} };
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var hn, ro;
function Ai() {
  if (ro) return hn;
  ro = 1;
  var e = Object.getOwnPropertySymbols, t = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
  function o(a) {
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
      for (var s = {}, l = 0; l < 10; l++)
        s["_" + String.fromCharCode(l)] = l;
      var c = Object.getOwnPropertyNames(s).map(function(p) {
        return s[p];
      });
      if (c.join("") !== "0123456789")
        return !1;
      var d = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(p) {
        d[p] = p;
      }), Object.keys(Object.assign({}, d)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return hn = i() ? Object.assign : function(a, s) {
    for (var l, c = o(a), d, p = 1; p < arguments.length; p++) {
      l = Object(arguments[p]);
      for (var f in l)
        t.call(l, f) && (c[f] = l[f]);
      if (e) {
        d = e(l);
        for (var g = 0; g < d.length; g++)
          n.call(l, d[g]) && (c[d[g]] = l[d[g]]);
      }
    }
    return c;
  }, hn;
}
var bn, io;
function Ln() {
  if (io) return bn;
  io = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return bn = e, bn;
}
var mn, ao;
function nr() {
  return ao || (ao = 1, mn = Function.call.bind(Object.prototype.hasOwnProperty)), mn;
}
var yn, so;
function Si() {
  if (so) return yn;
  so = 1;
  var e = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var t = /* @__PURE__ */ Ln(), n = {}, o = /* @__PURE__ */ nr();
    e = function(a) {
      var s = "Warning: " + a;
      typeof console < "u" && console.error(s);
      try {
        throw new Error(s);
      } catch {
      }
    };
  }
  function i(a, s, l, c, d) {
    if (process.env.NODE_ENV !== "production") {
      for (var p in a)
        if (o(a, p)) {
          var f;
          try {
            if (typeof a[p] != "function") {
              var g = Error(
                (c || "React class") + ": " + l + " type `" + p + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof a[p] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw g.name = "Invariant Violation", g;
            }
            f = a[p](s, p, c, l, null, t);
          } catch (b) {
            f = b;
          }
          if (f && !(f instanceof Error) && e(
            (c || "React class") + ": type specification of " + l + " `" + p + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof f + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), f instanceof Error && !(f.message in n)) {
            n[f.message] = !0;
            var h = d ? d() : "";
            e(
              "Failed " + l + " type: " + f.message + (h ?? "")
            );
          }
        }
    }
  }
  return i.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (n = {});
  }, yn = i, yn;
}
var vn, lo;
function Ti() {
  if (lo) return vn;
  lo = 1;
  var e = qo, t = Ai(), n = /* @__PURE__ */ Ln(), o = /* @__PURE__ */ nr(), i = /* @__PURE__ */ Si(), a = function() {
  };
  process.env.NODE_ENV !== "production" && (a = function(l) {
    var c = "Warning: " + l;
    typeof console < "u" && console.error(c);
    try {
      throw new Error(c);
    } catch {
    }
  });
  function s() {
    return null;
  }
  return vn = function(l, c) {
    var d = typeof Symbol == "function" && Symbol.iterator, p = "@@iterator";
    function f(A) {
      var R = A && (d && A[d] || A[p]);
      if (typeof R == "function")
        return R;
    }
    var g = "<<anonymous>>", h = {
      array: E("array"),
      bigint: E("bigint"),
      bool: E("boolean"),
      func: E("function"),
      number: E("number"),
      object: E("object"),
      string: E("string"),
      symbol: E("symbol"),
      any: O(),
      arrayOf: C,
      element: y(),
      elementType: S(),
      instanceOf: B,
      node: u(),
      objectOf: N,
      oneOf: $,
      oneOfType: H,
      shape: F,
      exact: j
    };
    function b(A, R) {
      return A === R ? A !== 0 || 1 / A === 1 / R : A !== A && R !== R;
    }
    function v(A, R) {
      this.message = A, this.data = R && typeof R == "object" ? R : {}, this.stack = "";
    }
    v.prototype = Error.prototype;
    function w(A) {
      if (process.env.NODE_ENV !== "production")
        var R = {}, q = 0;
      function J(L, K, W, ne, re, V, X) {
        if (ne = ne || g, V = V || W, X !== n) {
          if (c) {
            var Z = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw Z.name = "Invariant Violation", Z;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var fe = ne + ":" + W;
            !R[fe] && // Avoid spamming the console because they are often not actionable except for lib authors
            q < 3 && (a(
              "You are manually calling a React.PropTypes validation function for the `" + V + "` prop on `" + ne + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), R[fe] = !0, q++);
          }
        }
        return K[W] == null ? L ? K[W] === null ? new v("The " + re + " `" + V + "` is marked as required " + ("in `" + ne + "`, but its value is `null`.")) : new v("The " + re + " `" + V + "` is marked as required in " + ("`" + ne + "`, but its value is `undefined`.")) : null : A(K, W, ne, re, V);
      }
      var Q = J.bind(null, !1);
      return Q.isRequired = J.bind(null, !0), Q;
    }
    function E(A) {
      function R(q, J, Q, L, K, W) {
        var ne = q[J], re = k(ne);
        if (re !== A) {
          var V = G(ne);
          return new v(
            "Invalid " + L + " `" + K + "` of type " + ("`" + V + "` supplied to `" + Q + "`, expected ") + ("`" + A + "`."),
            { expectedType: A }
          );
        }
        return null;
      }
      return w(R);
    }
    function O() {
      return w(s);
    }
    function C(A) {
      function R(q, J, Q, L, K) {
        if (typeof A != "function")
          return new v("Property `" + K + "` of component `" + Q + "` has invalid PropType notation inside arrayOf.");
        var W = q[J];
        if (!Array.isArray(W)) {
          var ne = k(W);
          return new v("Invalid " + L + " `" + K + "` of type " + ("`" + ne + "` supplied to `" + Q + "`, expected an array."));
        }
        for (var re = 0; re < W.length; re++) {
          var V = A(W, re, Q, L, K + "[" + re + "]", n);
          if (V instanceof Error)
            return V;
        }
        return null;
      }
      return w(R);
    }
    function y() {
      function A(R, q, J, Q, L) {
        var K = R[q];
        if (!l(K)) {
          var W = k(K);
          return new v("Invalid " + Q + " `" + L + "` of type " + ("`" + W + "` supplied to `" + J + "`, expected a single ReactElement."));
        }
        return null;
      }
      return w(A);
    }
    function S() {
      function A(R, q, J, Q, L) {
        var K = R[q];
        if (!e.isValidElementType(K)) {
          var W = k(K);
          return new v("Invalid " + Q + " `" + L + "` of type " + ("`" + W + "` supplied to `" + J + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return w(A);
    }
    function B(A) {
      function R(q, J, Q, L, K) {
        if (!(q[J] instanceof A)) {
          var W = A.name || g, ne = D(q[J]);
          return new v("Invalid " + L + " `" + K + "` of type " + ("`" + ne + "` supplied to `" + Q + "`, expected ") + ("instance of `" + W + "`."));
        }
        return null;
      }
      return w(R);
    }
    function $(A) {
      if (!Array.isArray(A))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? a(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : a("Invalid argument supplied to oneOf, expected an array.")), s;
      function R(q, J, Q, L, K) {
        for (var W = q[J], ne = 0; ne < A.length; ne++)
          if (b(W, A[ne]))
            return null;
        var re = JSON.stringify(A, function(X, Z) {
          var fe = G(Z);
          return fe === "symbol" ? String(Z) : Z;
        });
        return new v("Invalid " + L + " `" + K + "` of value `" + String(W) + "` " + ("supplied to `" + Q + "`, expected one of " + re + "."));
      }
      return w(R);
    }
    function N(A) {
      function R(q, J, Q, L, K) {
        if (typeof A != "function")
          return new v("Property `" + K + "` of component `" + Q + "` has invalid PropType notation inside objectOf.");
        var W = q[J], ne = k(W);
        if (ne !== "object")
          return new v("Invalid " + L + " `" + K + "` of type " + ("`" + ne + "` supplied to `" + Q + "`, expected an object."));
        for (var re in W)
          if (o(W, re)) {
            var V = A(W, re, Q, L, K + "." + re, n);
            if (V instanceof Error)
              return V;
          }
        return null;
      }
      return w(R);
    }
    function H(A) {
      if (!Array.isArray(A))
        return process.env.NODE_ENV !== "production" && a("Invalid argument supplied to oneOfType, expected an instance of array."), s;
      for (var R = 0; R < A.length; R++) {
        var q = A[R];
        if (typeof q != "function")
          return a(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + oe(q) + " at index " + R + "."
          ), s;
      }
      function J(Q, L, K, W, ne) {
        for (var re = [], V = 0; V < A.length; V++) {
          var X = A[V], Z = X(Q, L, K, W, ne, n);
          if (Z == null)
            return null;
          Z.data && o(Z.data, "expectedType") && re.push(Z.data.expectedType);
        }
        var fe = re.length > 0 ? ", expected one of type [" + re.join(", ") + "]" : "";
        return new v("Invalid " + W + " `" + ne + "` supplied to " + ("`" + K + "`" + fe + "."));
      }
      return w(J);
    }
    function u() {
      function A(R, q, J, Q, L) {
        return z(R[q]) ? null : new v("Invalid " + Q + " `" + L + "` supplied to " + ("`" + J + "`, expected a ReactNode."));
      }
      return w(A);
    }
    function T(A, R, q, J, Q) {
      return new v(
        (A || "React class") + ": " + R + " type `" + q + "." + J + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + Q + "`."
      );
    }
    function F(A) {
      function R(q, J, Q, L, K) {
        var W = q[J], ne = k(W);
        if (ne !== "object")
          return new v("Invalid " + L + " `" + K + "` of type `" + ne + "` " + ("supplied to `" + Q + "`, expected `object`."));
        for (var re in A) {
          var V = A[re];
          if (typeof V != "function")
            return T(Q, L, K, re, G(V));
          var X = V(W, re, Q, L, K + "." + re, n);
          if (X)
            return X;
        }
        return null;
      }
      return w(R);
    }
    function j(A) {
      function R(q, J, Q, L, K) {
        var W = q[J], ne = k(W);
        if (ne !== "object")
          return new v("Invalid " + L + " `" + K + "` of type `" + ne + "` " + ("supplied to `" + Q + "`, expected `object`."));
        var re = t({}, q[J], A);
        for (var V in re) {
          var X = A[V];
          if (o(A, V) && typeof X != "function")
            return T(Q, L, K, V, G(X));
          if (!X)
            return new v(
              "Invalid " + L + " `" + K + "` key `" + V + "` supplied to `" + Q + "`.\nBad object: " + JSON.stringify(q[J], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(A), null, "  ")
            );
          var Z = X(W, V, Q, L, K + "." + V, n);
          if (Z)
            return Z;
        }
        return null;
      }
      return w(R);
    }
    function z(A) {
      switch (typeof A) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !A;
        case "object":
          if (Array.isArray(A))
            return A.every(z);
          if (A === null || l(A))
            return !0;
          var R = f(A);
          if (R) {
            var q = R.call(A), J;
            if (R !== A.entries) {
              for (; !(J = q.next()).done; )
                if (!z(J.value))
                  return !1;
            } else
              for (; !(J = q.next()).done; ) {
                var Q = J.value;
                if (Q && !z(Q[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function I(A, R) {
      return A === "symbol" ? !0 : R ? R["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && R instanceof Symbol : !1;
    }
    function k(A) {
      var R = typeof A;
      return Array.isArray(A) ? "array" : A instanceof RegExp ? "object" : I(R, A) ? "symbol" : R;
    }
    function G(A) {
      if (typeof A > "u" || A === null)
        return "" + A;
      var R = k(A);
      if (R === "object") {
        if (A instanceof Date)
          return "date";
        if (A instanceof RegExp)
          return "regexp";
      }
      return R;
    }
    function oe(A) {
      var R = G(A);
      switch (R) {
        case "array":
        case "object":
          return "an " + R;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + R;
        default:
          return R;
      }
    }
    function D(A) {
      return !A.constructor || !A.constructor.name ? g : A.constructor.name;
    }
    return h.checkPropTypes = i, h.resetWarningCache = i.resetWarningCache, h.PropTypes = h, h;
  }, vn;
}
var Cn, co;
function Fi() {
  if (co) return Cn;
  co = 1;
  var e = /* @__PURE__ */ Ln();
  function t() {
  }
  function n() {
  }
  return n.resetWarningCache = t, Cn = function() {
    function o(s, l, c, d, p, f) {
      if (f !== e) {
        var g = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw g.name = "Invariant Violation", g;
      }
    }
    o.isRequired = o;
    function i() {
      return o;
    }
    var a = {
      array: o,
      bigint: o,
      bool: o,
      func: o,
      number: o,
      object: o,
      string: o,
      symbol: o,
      any: o,
      arrayOf: i,
      element: o,
      elementType: o,
      instanceOf: i,
      node: o,
      objectOf: i,
      oneOf: i,
      oneOfType: i,
      shape: i,
      exact: i,
      checkPropTypes: n,
      resetWarningCache: t
    };
    return a.PropTypes = a, a;
  }, Cn;
}
var uo;
function Oi() {
  if (uo) return Mt.exports;
  if (uo = 1, process.env.NODE_ENV !== "production") {
    var e = qo, t = !0;
    Mt.exports = /* @__PURE__ */ Ti()(e.isElement, t);
  } else
    Mt.exports = /* @__PURE__ */ Fi()();
  return Mt.exports;
}
var ki = /* @__PURE__ */ Oi();
const r = /* @__PURE__ */ wi(ki);
/**
 * @mui/styled-engine v6.4.11
 *
 * @license MIT
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
function Ii(e, t) {
  const n = di(e, t);
  return process.env.NODE_ENV !== "production" ? (...o) => {
    const i = typeof e == "string" ? `"${e}"` : "component";
    return o.length === 0 ? console.error([`MUI: Seems like you called \`styled(${i})()\` without a \`style\` argument.`, 'You must provide a `styles` argument: `styled("div")(styleYouForgotToPass)`.'].join(`
`)) : o.some((a) => a === void 0) && console.error(`MUI: the styled(${i})(...args) API requires all its args to be defined.`), n(...o);
  } : n;
}
function Ri(e, t) {
  Array.isArray(e.__emotion_styles) && (e.__emotion_styles = t(e.__emotion_styles));
}
const po = [];
function fo(e) {
  return po[0] = e, xi(po);
}
function Pe(e) {
  if (typeof e != "object" || e === null)
    return !1;
  const t = Object.getPrototypeOf(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}
function or(e) {
  if (/* @__PURE__ */ m.isValidElement(e) || Xo(e) || !Pe(e))
    return e;
  const t = {};
  return Object.keys(e).forEach((n) => {
    t[n] = or(e[n]);
  }), t;
}
function Ee(e, t, n = {
  clone: !0
}) {
  const o = n.clone ? {
    ...e
  } : e;
  return Pe(e) && Pe(t) && Object.keys(t).forEach((i) => {
    /* @__PURE__ */ m.isValidElement(t[i]) || Xo(t[i]) ? o[i] = t[i] : Pe(t[i]) && // Avoid prototype pollution
    Object.prototype.hasOwnProperty.call(e, i) && Pe(e[i]) ? o[i] = Ee(e[i], t[i], n) : n.clone ? o[i] = Pe(t[i]) ? or(t[i]) : t[i] : o[i] = t[i];
  }), o;
}
const Bi = (e) => {
  const t = Object.keys(e).map((n) => ({
    key: n,
    val: e[n]
  })) || [];
  return t.sort((n, o) => n.val - o.val), t.reduce((n, o) => ({
    ...n,
    [o.key]: o.val
  }), {});
};
function Mi(e) {
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
    unit: n = "px",
    step: o = 5,
    ...i
  } = e, a = Bi(t), s = Object.keys(a);
  function l(g) {
    return `@media (min-width:${typeof t[g] == "number" ? t[g] : g}${n})`;
  }
  function c(g) {
    return `@media (max-width:${(typeof t[g] == "number" ? t[g] : g) - o / 100}${n})`;
  }
  function d(g, h) {
    const b = s.indexOf(h);
    return `@media (min-width:${typeof t[g] == "number" ? t[g] : g}${n}) and (max-width:${(b !== -1 && typeof t[s[b]] == "number" ? t[s[b]] : h) - o / 100}${n})`;
  }
  function p(g) {
    return s.indexOf(g) + 1 < s.length ? d(g, s[s.indexOf(g) + 1]) : l(g);
  }
  function f(g) {
    const h = s.indexOf(g);
    return h === 0 ? l(s[1]) : h === s.length - 1 ? c(s[h]) : d(g, s[s.indexOf(g) + 1]).replace("@media", "@media not all and");
  }
  return {
    keys: s,
    values: a,
    up: l,
    down: c,
    between: d,
    only: p,
    not: f,
    unit: n,
    ...i
  };
}
function Di(e, t) {
  if (!e.containerQueries)
    return t;
  const n = Object.keys(t).filter((o) => o.startsWith("@container")).sort((o, i) => {
    var s, l;
    const a = /min-width:\s*([0-9.]+)/;
    return +(((s = o.match(a)) == null ? void 0 : s[1]) || 0) - +(((l = i.match(a)) == null ? void 0 : l[1]) || 0);
  });
  return n.length ? n.reduce((o, i) => {
    const a = t[i];
    return delete o[i], o[i] = a, o;
  }, {
    ...t
  }) : t;
}
function Pi(e, t) {
  return t === "@" || t.startsWith("@") && (e.some((n) => t.startsWith(`@${n}`)) || !!t.match(/^@\d/));
}
function Ni(e, t) {
  const n = t.match(/^@([^/]+)?\/?(.+)?$/);
  if (!n) {
    if (process.env.NODE_ENV !== "production")
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The provided shorthand ${`(${t})`} is invalid. The format should be \`@<breakpoint | number>\` or \`@<breakpoint | number>/<container>\`.
For example, \`@sm\` or \`@600\` or \`@40rem/sidebar\`.` : Qe(18, `(${t})`));
    return null;
  }
  const [, o, i] = n, a = Number.isNaN(+o) ? o || 0 : +o;
  return e.containerQueries(i).up(a);
}
function $i(e) {
  const t = (a, s) => a.replace("@media", s ? `@container ${s}` : "@container");
  function n(a, s) {
    a.up = (...l) => t(e.breakpoints.up(...l), s), a.down = (...l) => t(e.breakpoints.down(...l), s), a.between = (...l) => t(e.breakpoints.between(...l), s), a.only = (...l) => t(e.breakpoints.only(...l), s), a.not = (...l) => {
      const c = t(e.breakpoints.not(...l), s);
      return c.includes("not all and") ? c.replace("not all and ", "").replace("min-width:", "width<").replace("max-width:", "width>").replace("and", "or") : c;
    };
  }
  const o = {}, i = (a) => (n(o, a), o);
  return n(i), {
    ...e,
    containerQueries: i
  };
}
const ji = {
  borderRadius: 4
}, Ge = process.env.NODE_ENV !== "production" ? r.oneOfType([r.number, r.string, r.object, r.array]) : {};
function xt(e, t) {
  return t ? Ee(e, t, {
    clone: !1
    // No need to clone deep, it's way faster.
  }) : e;
}
const Zt = {
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
}, go = {
  // Sorted ASC by size. That's important.
  // It can't be configured as it's used statically for propTypes.
  keys: ["xs", "sm", "md", "lg", "xl"],
  up: (e) => `@media (min-width:${Zt[e]}px)`
}, zi = {
  containerQueries: (e) => ({
    up: (t) => {
      let n = typeof t == "number" ? t : Zt[t] || t;
      return typeof n == "number" && (n = `${n}px`), e ? `@container ${e} (min-width:${n})` : `@container (min-width:${n})`;
    }
  })
};
function je(e, t, n) {
  const o = e.theme || {};
  if (Array.isArray(t)) {
    const a = o.breakpoints || go;
    return t.reduce((s, l, c) => (s[a.up(a.keys[c])] = n(t[c]), s), {});
  }
  if (typeof t == "object") {
    const a = o.breakpoints || go;
    return Object.keys(t).reduce((s, l) => {
      if (Pi(a.keys, l)) {
        const c = Ni(o.containerQueries ? o : zi, l);
        c && (s[c] = n(t[l], l));
      } else if (Object.keys(a.values || Zt).includes(l)) {
        const c = a.up(l);
        s[c] = n(t[l], l);
      } else {
        const c = l;
        s[c] = t[c];
      }
      return s;
    }, {});
  }
  return n(t);
}
function Vi(e = {}) {
  var n;
  return ((n = e.keys) == null ? void 0 : n.reduce((o, i) => {
    const a = e.up(i);
    return o[a] = {}, o;
  }, {})) || {};
}
function Li(e, t) {
  return e.reduce((n, o) => {
    const i = n[o];
    return (!i || Object.keys(i).length === 0) && delete n[o], n;
  }, t);
}
function P(e) {
  if (typeof e != "string")
    throw new Error(process.env.NODE_ENV !== "production" ? "MUI: `capitalize(string)` expects a string argument." : Qe(7));
  return e.charAt(0).toUpperCase() + e.slice(1);
}
function _t(e, t, n = !0) {
  if (!t || typeof t != "string")
    return null;
  if (e && e.vars && n) {
    const o = `vars.${t}`.split(".").reduce((i, a) => i && i[a] ? i[a] : null, e);
    if (o != null)
      return o;
  }
  return t.split(".").reduce((o, i) => o && o[i] != null ? o[i] : null, e);
}
function Ut(e, t, n, o = n) {
  let i;
  return typeof e == "function" ? i = e(n) : Array.isArray(e) ? i = e[n] || o : i = _t(e, n) || o, t && (i = t(i, o, e)), i;
}
function de(e) {
  const {
    prop: t,
    cssProperty: n = e.prop,
    themeKey: o,
    transform: i
  } = e, a = (s) => {
    if (s[t] == null)
      return null;
    const l = s[t], c = s.theme, d = _t(c, o) || {};
    return je(s, l, (f) => {
      let g = Ut(d, i, f);
      return f === g && typeof f == "string" && (g = Ut(d, i, `${t}${f === "default" ? "" : P(f)}`, f)), n === !1 ? g : {
        [n]: g
      };
    });
  };
  return a.propTypes = process.env.NODE_ENV !== "production" ? {
    [t]: Ge
  } : {}, a.filterProps = [t], a;
}
function Ui(e) {
  const t = {};
  return (n) => (t[n] === void 0 && (t[n] = e(n)), t[n]);
}
const Qi = {
  m: "margin",
  p: "padding"
}, Ki = {
  t: "Top",
  r: "Right",
  b: "Bottom",
  l: "Left",
  x: ["Left", "Right"],
  y: ["Top", "Bottom"]
}, ho = {
  marginX: "mx",
  marginY: "my",
  paddingX: "px",
  paddingY: "py"
}, Hi = Ui((e) => {
  if (e.length > 2)
    if (ho[e])
      e = ho[e];
    else
      return [e];
  const [t, n] = e.split(""), o = Qi[t], i = Ki[n] || "";
  return Array.isArray(i) ? i.map((a) => o + a) : [o + i];
}), en = ["m", "mt", "mr", "mb", "ml", "mx", "my", "margin", "marginTop", "marginRight", "marginBottom", "marginLeft", "marginX", "marginY", "marginInline", "marginInlineStart", "marginInlineEnd", "marginBlock", "marginBlockStart", "marginBlockEnd"], tn = ["p", "pt", "pr", "pb", "pl", "px", "py", "padding", "paddingTop", "paddingRight", "paddingBottom", "paddingLeft", "paddingX", "paddingY", "paddingInline", "paddingInlineStart", "paddingInlineEnd", "paddingBlock", "paddingBlockStart", "paddingBlockEnd"], Gi = [...en, ...tn];
function Ot(e, t, n, o) {
  const i = _t(e, t, !0) ?? n;
  return typeof i == "number" || typeof i == "string" ? (a) => typeof a == "string" ? a : (process.env.NODE_ENV !== "production" && typeof a != "number" && console.error(`MUI: Expected ${o} argument to be a number or a string, got ${a}.`), typeof i == "string" ? `calc(${a} * ${i})` : i * a) : Array.isArray(i) ? (a) => {
    if (typeof a == "string")
      return a;
    const s = Math.abs(a);
    process.env.NODE_ENV !== "production" && (Number.isInteger(s) ? s > i.length - 1 && console.error([`MUI: The value provided (${s}) overflows.`, `The supported values are: ${JSON.stringify(i)}.`, `${s} > ${i.length - 1}, you need to add the missing values.`].join(`
`)) : console.error([`MUI: The \`theme.${t}\` array type cannot be combined with non integer values.You should either use an integer value that can be used as index, or define the \`theme.${t}\` as a number.`].join(`
`)));
    const l = i[s];
    return a >= 0 ? l : typeof l == "number" ? -l : `-${l}`;
  } : typeof i == "function" ? i : (process.env.NODE_ENV !== "production" && console.error([`MUI: The \`theme.${t}\` value (${i}) is invalid.`, "It should be a number, an array or a function."].join(`
`)), () => {
  });
}
function Un(e) {
  return Ot(e, "spacing", 8, "spacing");
}
function kt(e, t) {
  return typeof t == "string" || t == null ? t : e(t);
}
function Wi(e, t) {
  return (n) => e.reduce((o, i) => (o[i] = kt(t, n), o), {});
}
function Yi(e, t, n, o) {
  if (!t.includes(n))
    return null;
  const i = Hi(n), a = Wi(i, o), s = e[n];
  return je(e, s, a);
}
function rr(e, t) {
  const n = Un(e.theme);
  return Object.keys(e).map((o) => Yi(e, t, o, n)).reduce(xt, {});
}
function le(e) {
  return rr(e, en);
}
le.propTypes = process.env.NODE_ENV !== "production" ? en.reduce((e, t) => (e[t] = Ge, e), {}) : {};
le.filterProps = en;
function ce(e) {
  return rr(e, tn);
}
ce.propTypes = process.env.NODE_ENV !== "production" ? tn.reduce((e, t) => (e[t] = Ge, e), {}) : {};
ce.filterProps = tn;
process.env.NODE_ENV !== "production" && Gi.reduce((e, t) => (e[t] = Ge, e), {});
function ir(e = 8, t = Un({
  spacing: e
})) {
  if (e.mui)
    return e;
  const n = (...o) => (process.env.NODE_ENV !== "production" && (o.length <= 4 || console.error(`MUI: Too many arguments provided, expected between 0 and 4, got ${o.length}`)), (o.length === 0 ? [1] : o).map((a) => {
    const s = t(a);
    return typeof s == "number" ? `${s}px` : s;
  }).join(" "));
  return n.mui = !0, n;
}
function nn(...e) {
  const t = e.reduce((o, i) => (i.filterProps.forEach((a) => {
    o[a] = i;
  }), o), {}), n = (o) => Object.keys(o).reduce((i, a) => t[a] ? xt(i, t[a](o)) : i, {});
  return n.propTypes = process.env.NODE_ENV !== "production" ? e.reduce((o, i) => Object.assign(o, i.propTypes), {}) : {}, n.filterProps = e.reduce((o, i) => o.concat(i.filterProps), []), n;
}
function we(e) {
  return typeof e != "number" ? e : `${e}px solid`;
}
function Fe(e, t) {
  return de({
    prop: e,
    themeKey: "borders",
    transform: t
  });
}
const Ji = Fe("border", we), qi = Fe("borderTop", we), Xi = Fe("borderRight", we), Zi = Fe("borderBottom", we), _i = Fe("borderLeft", we), ea = Fe("borderColor"), ta = Fe("borderTopColor"), na = Fe("borderRightColor"), oa = Fe("borderBottomColor"), ra = Fe("borderLeftColor"), ia = Fe("outline", we), aa = Fe("outlineColor"), on = (e) => {
  if (e.borderRadius !== void 0 && e.borderRadius !== null) {
    const t = Ot(e.theme, "shape.borderRadius", 4, "borderRadius"), n = (o) => ({
      borderRadius: kt(t, o)
    });
    return je(e, e.borderRadius, n);
  }
  return null;
};
on.propTypes = process.env.NODE_ENV !== "production" ? {
  borderRadius: Ge
} : {};
on.filterProps = ["borderRadius"];
nn(Ji, qi, Xi, Zi, _i, ea, ta, na, oa, ra, on, ia, aa);
const rn = (e) => {
  if (e.gap !== void 0 && e.gap !== null) {
    const t = Ot(e.theme, "spacing", 8, "gap"), n = (o) => ({
      gap: kt(t, o)
    });
    return je(e, e.gap, n);
  }
  return null;
};
rn.propTypes = process.env.NODE_ENV !== "production" ? {
  gap: Ge
} : {};
rn.filterProps = ["gap"];
const an = (e) => {
  if (e.columnGap !== void 0 && e.columnGap !== null) {
    const t = Ot(e.theme, "spacing", 8, "columnGap"), n = (o) => ({
      columnGap: kt(t, o)
    });
    return je(e, e.columnGap, n);
  }
  return null;
};
an.propTypes = process.env.NODE_ENV !== "production" ? {
  columnGap: Ge
} : {};
an.filterProps = ["columnGap"];
const sn = (e) => {
  if (e.rowGap !== void 0 && e.rowGap !== null) {
    const t = Ot(e.theme, "spacing", 8, "rowGap"), n = (o) => ({
      rowGap: kt(t, o)
    });
    return je(e, e.rowGap, n);
  }
  return null;
};
sn.propTypes = process.env.NODE_ENV !== "production" ? {
  rowGap: Ge
} : {};
sn.filterProps = ["rowGap"];
const sa = de({
  prop: "gridColumn"
}), la = de({
  prop: "gridRow"
}), ca = de({
  prop: "gridAutoFlow"
}), ua = de({
  prop: "gridAutoColumns"
}), da = de({
  prop: "gridAutoRows"
}), pa = de({
  prop: "gridTemplateColumns"
}), fa = de({
  prop: "gridTemplateRows"
}), ga = de({
  prop: "gridTemplateAreas"
}), ha = de({
  prop: "gridArea"
});
nn(rn, an, sn, sa, la, ca, ua, da, pa, fa, ga, ha);
function ct(e, t) {
  return t === "grey" ? t : e;
}
const ba = de({
  prop: "color",
  themeKey: "palette",
  transform: ct
}), ma = de({
  prop: "bgcolor",
  cssProperty: "backgroundColor",
  themeKey: "palette",
  transform: ct
}), ya = de({
  prop: "backgroundColor",
  themeKey: "palette",
  transform: ct
});
nn(ba, ma, ya);
function Ce(e) {
  return e <= 1 && e !== 0 ? `${e * 100}%` : e;
}
const va = de({
  prop: "width",
  transform: Ce
}), Qn = (e) => {
  if (e.maxWidth !== void 0 && e.maxWidth !== null) {
    const t = (n) => {
      var i, a, s, l, c;
      const o = ((s = (a = (i = e.theme) == null ? void 0 : i.breakpoints) == null ? void 0 : a.values) == null ? void 0 : s[n]) || Zt[n];
      return o ? ((c = (l = e.theme) == null ? void 0 : l.breakpoints) == null ? void 0 : c.unit) !== "px" ? {
        maxWidth: `${o}${e.theme.breakpoints.unit}`
      } : {
        maxWidth: o
      } : {
        maxWidth: Ce(n)
      };
    };
    return je(e, e.maxWidth, t);
  }
  return null;
};
Qn.filterProps = ["maxWidth"];
const Ca = de({
  prop: "minWidth",
  transform: Ce
}), Ea = de({
  prop: "height",
  transform: Ce
}), xa = de({
  prop: "maxHeight",
  transform: Ce
}), wa = de({
  prop: "minHeight",
  transform: Ce
});
de({
  prop: "size",
  cssProperty: "width",
  transform: Ce
});
de({
  prop: "size",
  cssProperty: "height",
  transform: Ce
});
const Aa = de({
  prop: "boxSizing"
});
nn(va, Qn, Ca, Ea, xa, wa, Aa);
const ln = {
  // borders
  border: {
    themeKey: "borders",
    transform: we
  },
  borderTop: {
    themeKey: "borders",
    transform: we
  },
  borderRight: {
    themeKey: "borders",
    transform: we
  },
  borderBottom: {
    themeKey: "borders",
    transform: we
  },
  borderLeft: {
    themeKey: "borders",
    transform: we
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
    transform: we
  },
  outlineColor: {
    themeKey: "palette"
  },
  borderRadius: {
    themeKey: "shape.borderRadius",
    style: on
  },
  // palette
  color: {
    themeKey: "palette",
    transform: ct
  },
  bgcolor: {
    themeKey: "palette",
    cssProperty: "backgroundColor",
    transform: ct
  },
  backgroundColor: {
    themeKey: "palette",
    transform: ct
  },
  // spacing
  p: {
    style: ce
  },
  pt: {
    style: ce
  },
  pr: {
    style: ce
  },
  pb: {
    style: ce
  },
  pl: {
    style: ce
  },
  px: {
    style: ce
  },
  py: {
    style: ce
  },
  padding: {
    style: ce
  },
  paddingTop: {
    style: ce
  },
  paddingRight: {
    style: ce
  },
  paddingBottom: {
    style: ce
  },
  paddingLeft: {
    style: ce
  },
  paddingX: {
    style: ce
  },
  paddingY: {
    style: ce
  },
  paddingInline: {
    style: ce
  },
  paddingInlineStart: {
    style: ce
  },
  paddingInlineEnd: {
    style: ce
  },
  paddingBlock: {
    style: ce
  },
  paddingBlockStart: {
    style: ce
  },
  paddingBlockEnd: {
    style: ce
  },
  m: {
    style: le
  },
  mt: {
    style: le
  },
  mr: {
    style: le
  },
  mb: {
    style: le
  },
  ml: {
    style: le
  },
  mx: {
    style: le
  },
  my: {
    style: le
  },
  margin: {
    style: le
  },
  marginTop: {
    style: le
  },
  marginRight: {
    style: le
  },
  marginBottom: {
    style: le
  },
  marginLeft: {
    style: le
  },
  marginX: {
    style: le
  },
  marginY: {
    style: le
  },
  marginInline: {
    style: le
  },
  marginInlineStart: {
    style: le
  },
  marginInlineEnd: {
    style: le
  },
  marginBlock: {
    style: le
  },
  marginBlockStart: {
    style: le
  },
  marginBlockEnd: {
    style: le
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
    style: rn
  },
  rowGap: {
    style: sn
  },
  columnGap: {
    style: an
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
    transform: Ce
  },
  maxWidth: {
    style: Qn
  },
  minWidth: {
    transform: Ce
  },
  height: {
    transform: Ce
  },
  maxHeight: {
    transform: Ce
  },
  minHeight: {
    transform: Ce
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
function Sa(...e) {
  const t = e.reduce((o, i) => o.concat(Object.keys(i)), []), n = new Set(t);
  return e.every((o) => n.size === Object.keys(o).length);
}
function Ta(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Fa() {
  function e(n, o, i, a) {
    const s = {
      [n]: o,
      theme: i
    }, l = a[n];
    if (!l)
      return {
        [n]: o
      };
    const {
      cssProperty: c = n,
      themeKey: d,
      transform: p,
      style: f
    } = l;
    if (o == null)
      return null;
    if (d === "typography" && o === "inherit")
      return {
        [n]: o
      };
    const g = _t(i, d) || {};
    return f ? f(s) : je(s, o, (b) => {
      let v = Ut(g, p, b);
      return b === v && typeof b == "string" && (v = Ut(g, p, `${n}${b === "default" ? "" : P(b)}`, b)), c === !1 ? v : {
        [c]: v
      };
    });
  }
  function t(n) {
    const {
      sx: o,
      theme: i = {}
    } = n || {};
    if (!o)
      return null;
    const a = i.unstable_sxConfig ?? ln;
    function s(l) {
      let c = l;
      if (typeof l == "function")
        c = l(i);
      else if (typeof l != "object")
        return l;
      if (!c)
        return null;
      const d = Vi(i.breakpoints), p = Object.keys(d);
      let f = d;
      return Object.keys(c).forEach((g) => {
        const h = Ta(c[g], i);
        if (h != null)
          if (typeof h == "object")
            if (a[g])
              f = xt(f, e(g, h, i, a));
            else {
              const b = je({
                theme: i
              }, h, (v) => ({
                [g]: v
              }));
              Sa(b, h) ? f[g] = t({
                sx: h,
                theme: i
              }) : f = xt(f, b);
            }
          else
            f = xt(f, e(g, h, i, a));
      }), Di(i, Li(p, f));
    }
    return Array.isArray(o) ? o.map(s) : s(o);
  }
  return t;
}
const dt = Fa();
dt.filterProps = ["sx"];
function Oa(e, t) {
  var o;
  const n = this;
  if (n.vars) {
    if (!((o = n.colorSchemes) != null && o[e]) || typeof n.getColorSchemeSelector != "function")
      return {};
    let i = n.getColorSchemeSelector(e);
    return i === "&" ? t : ((i.includes("data-") || i.includes(".")) && (i = `*:where(${i.replace(/\s*&$/, "")}) &`), {
      [i]: t
    });
  }
  return n.palette.mode === e ? t : {};
}
function Kn(e = {}, ...t) {
  const {
    breakpoints: n = {},
    palette: o = {},
    spacing: i,
    shape: a = {},
    ...s
  } = e, l = Mi(n), c = ir(i);
  let d = Ee({
    breakpoints: l,
    direction: "ltr",
    components: {},
    // Inject component definitions.
    palette: {
      mode: "light",
      ...o
    },
    spacing: c,
    shape: {
      ...ji,
      ...a
    }
  }, s);
  return d = $i(d), d.applyStyles = Oa, d = t.reduce((p, f) => Ee(p, f), d), d.unstable_sxConfig = {
    ...ln,
    ...s == null ? void 0 : s.unstable_sxConfig
  }, d.unstable_sx = function(f) {
    return dt({
      sx: f,
      theme: this
    });
  }, d;
}
function ka(e) {
  return Object.keys(e).length === 0;
}
function Ia(e = null) {
  const t = m.useContext(pi);
  return !t || ka(t) ? e : t;
}
const Ra = Kn();
function Ba(e = Ra) {
  return Ia(e);
}
const bo = (e) => e, Ma = () => {
  let e = bo;
  return {
    configure(t) {
      e = t;
    },
    generate(t) {
      return e(t);
    },
    reset() {
      e = bo;
    }
  };
}, Da = Ma();
function ar(e) {
  var t, n, o = "";
  if (typeof e == "string" || typeof e == "number") o += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var i = e.length;
    for (t = 0; t < i; t++) e[t] && (n = ar(e[t])) && (o && (o += " "), o += n);
  } else for (n in e) e[n] && (o && (o += " "), o += n);
  return o;
}
function ee() {
  for (var e, t, n = 0, o = "", i = arguments.length; n < i; n++) (e = arguments[n]) && (t = ar(e)) && (o && (o += " "), o += t);
  return o;
}
const Pa = {
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
function pe(e, t, n = "Mui") {
  const o = Pa[t];
  return o ? `${n}-${o}` : `${Da.generate(e)}-${t}`;
}
function ue(e, t, n = "Mui") {
  const o = {};
  return t.forEach((i) => {
    o[i] = pe(e, i, n);
  }), o;
}
function sr(e, t = "") {
  return e.displayName || e.name || t;
}
function mo(e, t, n) {
  const o = sr(t);
  return e.displayName || (o !== "" ? `${n}(${o})` : n);
}
function Na(e) {
  if (e != null) {
    if (typeof e == "string")
      return e;
    if (typeof e == "function")
      return sr(e, "Component");
    if (typeof e == "object")
      switch (e.$$typeof) {
        case ui:
          return mo(e, e.render, "ForwardRef");
        case ci:
          return mo(e, e.type, "memo");
        default:
          return;
      }
  }
}
function lr(e) {
  const {
    variants: t,
    ...n
  } = e, o = {
    variants: t,
    style: fo(n),
    isProcessed: !0
  };
  return o.style === n || t && t.forEach((i) => {
    typeof i.style != "function" && (i.style = fo(i.style));
  }), o;
}
const $a = Kn();
function En(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
function ja(e) {
  return e ? (t, n) => n[e] : null;
}
function za(e, t, n) {
  e.theme = Qa(e.theme) ? n : e.theme[t] || e.theme;
}
function Vt(e, t) {
  const n = typeof t == "function" ? t(e) : t;
  if (Array.isArray(n))
    return n.flatMap((o) => Vt(e, o));
  if (Array.isArray(n == null ? void 0 : n.variants)) {
    let o;
    if (n.isProcessed)
      o = n.style;
    else {
      const {
        variants: i,
        ...a
      } = n;
      o = a;
    }
    return cr(e, n.variants, [o]);
  }
  return n != null && n.isProcessed ? n.style : n;
}
function cr(e, t, n = []) {
  var i;
  let o;
  e: for (let a = 0; a < t.length; a += 1) {
    const s = t[a];
    if (typeof s.props == "function") {
      if (o ?? (o = {
        ...e,
        ...e.ownerState,
        ownerState: e.ownerState
      }), !s.props(o))
        continue;
    } else
      for (const l in s.props)
        if (e[l] !== s.props[l] && ((i = e.ownerState) == null ? void 0 : i[l]) !== s.props[l])
          continue e;
    typeof s.style == "function" ? (o ?? (o = {
      ...e,
      ...e.ownerState,
      ownerState: e.ownerState
    }), n.push(s.style(o))) : n.push(s.style);
  }
  return n;
}
function Va(e = {}) {
  const {
    themeId: t,
    defaultTheme: n = $a,
    rootShouldForwardProp: o = En,
    slotShouldForwardProp: i = En
  } = e;
  function a(l) {
    za(l, t, n);
  }
  return (l, c = {}) => {
    Ri(l, (S) => S.filter((B) => B !== dt));
    const {
      name: d,
      slot: p,
      skipVariantsResolver: f,
      skipSx: g,
      // TODO v6: remove `lowercaseFirstLetter()` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      overridesResolver: h = ja(ur(p)),
      ...b
    } = c, v = f !== void 0 ? f : (
      // TODO v6: remove `Root` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      p && p !== "Root" && p !== "root" || !1
    ), w = g || !1;
    let E = En;
    p === "Root" || p === "root" ? E = o : p ? E = i : Ka(l) && (E = void 0);
    const O = Ii(l, {
      shouldForwardProp: E,
      label: Ua(d, p),
      ...b
    }), C = (S) => {
      if (S.__emotion_real === S)
        return S;
      if (typeof S == "function")
        return function($) {
          return Vt($, S);
        };
      if (Pe(S)) {
        const B = lr(S);
        return B.variants ? function(N) {
          return Vt(N, B);
        } : B.style;
      }
      return S;
    }, y = (...S) => {
      const B = [], $ = S.map(C), N = [];
      if (B.push(a), d && h && N.push(function(F) {
        var k, G;
        const z = (G = (k = F.theme.components) == null ? void 0 : k[d]) == null ? void 0 : G.styleOverrides;
        if (!z)
          return null;
        const I = {};
        for (const oe in z)
          I[oe] = Vt(F, z[oe]);
        return h(F, I);
      }), d && !v && N.push(function(F) {
        var I, k;
        const j = F.theme, z = (k = (I = j == null ? void 0 : j.components) == null ? void 0 : I[d]) == null ? void 0 : k.variants;
        return z ? cr(F, z) : null;
      }), w || N.push(dt), Array.isArray($[0])) {
        const T = $.shift(), F = new Array(B.length).fill(""), j = new Array(N.length).fill("");
        let z;
        z = [...F, ...T, ...j], z.raw = [...F, ...T.raw, ...j], B.unshift(z);
      }
      const H = [...B, ...$, ...N], u = O(...H);
      return l.muiName && (u.muiName = l.muiName), process.env.NODE_ENV !== "production" && (u.displayName = La(d, p, l)), u;
    };
    return O.withConfig && (y.withConfig = O.withConfig), y;
  };
}
function La(e, t, n) {
  return e ? `${e}${P(t || "")}` : `Styled(${Na(n)})`;
}
function Ua(e, t) {
  let n;
  return process.env.NODE_ENV !== "production" && e && (n = `${e}-${ur(t || "Root")}`), n;
}
function Qa(e) {
  for (const t in e)
    return !1;
  return !0;
}
function Ka(e) {
  return typeof e == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  e.charCodeAt(0) > 96;
}
function ur(e) {
  return e && e.charAt(0).toLowerCase() + e.slice(1);
}
function Qt(e, t) {
  const n = {
    ...t
  };
  for (const o in e)
    if (Object.prototype.hasOwnProperty.call(e, o)) {
      const i = o;
      if (i === "components" || i === "slots")
        n[i] = {
          ...e[i],
          ...n[i]
        };
      else if (i === "componentsProps" || i === "slotProps") {
        const a = e[i], s = t[i];
        if (!s)
          n[i] = a || {};
        else if (!a)
          n[i] = s;
        else {
          n[i] = {
            ...s
          };
          for (const l in a)
            if (Object.prototype.hasOwnProperty.call(a, l)) {
              const c = l;
              n[i][c] = Qt(a[c], s[c]);
            }
        }
      } else n[i] === void 0 && (n[i] = e[i]);
    }
  return n;
}
const At = typeof window < "u" ? m.useLayoutEffect : m.useEffect;
function Ha(e, t = Number.MIN_SAFE_INTEGER, n = Number.MAX_SAFE_INTEGER) {
  return Math.max(t, Math.min(e, n));
}
function Hn(e, t = 0, n = 1) {
  return process.env.NODE_ENV !== "production" && (e < t || e > n) && console.error(`MUI: The value provided ${e} is out of range [${t}, ${n}].`), Ha(e, t, n);
}
function Ga(e) {
  e = e.slice(1);
  const t = new RegExp(`.{1,${e.length >= 6 ? 2 : 1}}`, "g");
  let n = e.match(t);
  return n && n[0].length === 1 && (n = n.map((o) => o + o)), process.env.NODE_ENV !== "production" && e.length !== e.trim().length && console.error(`MUI: The color: "${e}" is invalid. Make sure the color input doesn't contain leading/trailing space.`), n ? `rgb${n.length === 4 ? "a" : ""}(${n.map((o, i) => i < 3 ? parseInt(o, 16) : Math.round(parseInt(o, 16) / 255 * 1e3) / 1e3).join(", ")})` : "";
}
function Ke(e) {
  if (e.type)
    return e;
  if (e.charAt(0) === "#")
    return Ke(Ga(e));
  const t = e.indexOf("("), n = e.substring(0, t);
  if (!["rgb", "rgba", "hsl", "hsla", "color"].includes(n))
    throw new Error(process.env.NODE_ENV !== "production" ? `MUI: Unsupported \`${e}\` color.
The following formats are supported: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color().` : Qe(9, e));
  let o = e.substring(t + 1, e.length - 1), i;
  if (n === "color") {
    if (o = o.split(" "), i = o.shift(), o.length === 4 && o[3].charAt(0) === "/" && (o[3] = o[3].slice(1)), !["srgb", "display-p3", "a98-rgb", "prophoto-rgb", "rec-2020"].includes(i))
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: unsupported \`${i}\` color space.
The following color spaces are supported: srgb, display-p3, a98-rgb, prophoto-rgb, rec-2020.` : Qe(10, i));
  } else
    o = o.split(",");
  return o = o.map((a) => parseFloat(a)), {
    type: n,
    values: o,
    colorSpace: i
  };
}
const Wa = (e) => {
  const t = Ke(e);
  return t.values.slice(0, 3).map((n, o) => t.type.includes("hsl") && o !== 0 ? `${n}%` : n).join(" ");
}, yt = (e, t) => {
  try {
    return Wa(e);
  } catch {
    return t && process.env.NODE_ENV !== "production" && console.warn(t), e;
  }
};
function cn(e) {
  const {
    type: t,
    colorSpace: n
  } = e;
  let {
    values: o
  } = e;
  return t.includes("rgb") ? o = o.map((i, a) => a < 3 ? parseInt(i, 10) : i) : t.includes("hsl") && (o[1] = `${o[1]}%`, o[2] = `${o[2]}%`), t.includes("color") ? o = `${n} ${o.join(" ")}` : o = `${o.join(", ")}`, `${t}(${o})`;
}
function dr(e) {
  e = Ke(e);
  const {
    values: t
  } = e, n = t[0], o = t[1] / 100, i = t[2] / 100, a = o * Math.min(i, 1 - i), s = (d, p = (d + n / 30) % 12) => i - a * Math.max(Math.min(p - 3, 9 - p, 1), -1);
  let l = "rgb";
  const c = [Math.round(s(0) * 255), Math.round(s(8) * 255), Math.round(s(4) * 255)];
  return e.type === "hsla" && (l += "a", c.push(t[3])), cn({
    type: l,
    values: c
  });
}
function In(e) {
  e = Ke(e);
  let t = e.type === "hsl" || e.type === "hsla" ? Ke(dr(e)).values : e.values;
  return t = t.map((n) => (e.type !== "color" && (n /= 255), n <= 0.03928 ? n / 12.92 : ((n + 0.055) / 1.055) ** 2.4)), Number((0.2126 * t[0] + 0.7152 * t[1] + 0.0722 * t[2]).toFixed(3));
}
function yo(e, t) {
  const n = In(e), o = In(t);
  return (Math.max(n, o) + 0.05) / (Math.min(n, o) + 0.05);
}
function U(e, t) {
  return e = Ke(e), t = Hn(t), (e.type === "rgb" || e.type === "hsl") && (e.type += "a"), e.type === "color" ? e.values[3] = `/${t}` : e.values[3] = t, cn(e);
}
function Dt(e, t, n) {
  try {
    return U(e, t);
  } catch {
    return e;
  }
}
function un(e, t) {
  if (e = Ke(e), t = Hn(t), e.type.includes("hsl"))
    e.values[2] *= 1 - t;
  else if (e.type.includes("rgb") || e.type.includes("color"))
    for (let n = 0; n < 3; n += 1)
      e.values[n] *= 1 - t;
  return cn(e);
}
function ie(e, t, n) {
  try {
    return un(e, t);
  } catch {
    return e;
  }
}
function dn(e, t) {
  if (e = Ke(e), t = Hn(t), e.type.includes("hsl"))
    e.values[2] += (100 - e.values[2]) * t;
  else if (e.type.includes("rgb"))
    for (let n = 0; n < 3; n += 1)
      e.values[n] += (255 - e.values[n]) * t;
  else if (e.type.includes("color"))
    for (let n = 0; n < 3; n += 1)
      e.values[n] += (1 - e.values[n]) * t;
  return cn(e);
}
function ae(e, t, n) {
  try {
    return dn(e, t);
  } catch {
    return e;
  }
}
function Ya(e, t = 0.15) {
  return In(e) > 0.5 ? un(e, t) : dn(e, t);
}
function Pt(e, t, n) {
  try {
    return Ya(e, t);
  } catch {
    return e;
  }
}
function et(e, t) {
  return process.env.NODE_ENV === "production" ? () => null : function(...o) {
    return e(...o) || t(...o);
  };
}
function Ja(e) {
  const {
    prototype: t = {}
  } = e;
  return !!t.isReactComponent;
}
function pr(e, t, n, o, i) {
  const a = e[t], s = i || t;
  if (a == null || // When server-side rendering React doesn't warn either.
  // This is not an accurate check for SSR.
  // This is only in place for Emotion compat.
  // TODO: Revisit once https://github.com/facebook/react/issues/20047 is resolved.
  typeof window > "u")
    return null;
  let l;
  const c = a.type;
  return typeof c == "function" && !Ja(c) && (l = "Did you accidentally use a plain function component for an element instead?"), l !== void 0 ? new Error(`Invalid ${o} \`${s}\` supplied to \`${n}\`. Expected an element that can hold a ref. ${l} For more information see https://mui.com/r/caveat-with-refs-guide`) : null;
}
const It = et(r.element, pr);
It.isRequired = et(r.element.isRequired, pr);
function qa(e) {
  const {
    prototype: t = {}
  } = e;
  return !!t.isReactComponent;
}
function Xa(e, t, n, o, i) {
  const a = e[t], s = i || t;
  if (a == null || // When server-side rendering React doesn't warn either.
  // This is not an accurate check for SSR.
  // This is only in place for emotion compat.
  // TODO: Revisit once https://github.com/facebook/react/issues/20047 is resolved.
  typeof window > "u")
    return null;
  let l;
  return typeof a == "function" && !qa(a) && (l = "Did you accidentally provide a plain function component instead?"), l !== void 0 ? new Error(`Invalid ${o} \`${s}\` supplied to \`${n}\`. Expected an element type that can hold a ref. ${l} For more information see https://mui.com/r/caveat-with-refs-guide`) : null;
}
const fr = et(r.elementType, Xa), Za = "exact-prop: ​";
function gr(e) {
  return process.env.NODE_ENV === "production" ? e : {
    ...e,
    [Za]: (t) => {
      const n = Object.keys(t).filter((o) => !e.hasOwnProperty(o));
      return n.length > 0 ? new Error(`The following props are not supported: ${n.map((o) => `\`${o}\``).join(", ")}. Please remove them.`) : null;
    }
  };
}
function St(e, t, n, o, i) {
  if (process.env.NODE_ENV === "production")
    return null;
  const a = e[t], s = i || t;
  return a == null ? null : a && a.nodeType !== 1 ? new Error(`Invalid ${o} \`${s}\` supplied to \`${n}\`. Expected an HTMLElement.`) : null;
}
const pn = r.oneOfType([r.func, r.object]);
function vo(...e) {
  return e.reduce((t, n) => n == null ? t : function(...i) {
    t.apply(this, i), n.apply(this, i);
  }, () => {
  });
}
function _a(e, t = 166) {
  let n;
  function o(...i) {
    const a = () => {
      e.apply(this, i);
    };
    clearTimeout(n), n = setTimeout(a, t);
  }
  return o.clear = () => {
    clearTimeout(n);
  }, o;
}
function Re(e) {
  return e && e.ownerDocument || document;
}
function _e(e) {
  return Re(e).defaultView || window;
}
function Co(e, t) {
  typeof e == "function" ? e(t) : e && (e.current = t);
}
let Eo = 0;
function es(e) {
  const [t, n] = m.useState(e), o = e || t;
  return m.useEffect(() => {
    t == null && (Eo += 1, n(`mui-${Eo}`));
  }, [t]), o;
}
const ts = {
  ...m
}, xo = ts.useId;
function hr(e) {
  if (xo !== void 0) {
    const t = xo();
    return e ?? t;
  }
  return es(e);
}
function ns(e, t, n, o, i) {
  if (process.env.NODE_ENV === "production")
    return null;
  const a = i || t;
  return typeof e[t] < "u" ? new Error(`The prop \`${a}\` is not supported. Please remove it.`) : null;
}
function os({
  controlled: e,
  default: t,
  name: n,
  state: o = "value"
}) {
  const {
    current: i
  } = m.useRef(e !== void 0), [a, s] = m.useState(t), l = i ? e : a;
  if (process.env.NODE_ENV !== "production") {
    m.useEffect(() => {
      i !== (e !== void 0) && console.error([`MUI: A component is changing the ${i ? "" : "un"}controlled ${o} state of ${n} to be ${i ? "un" : ""}controlled.`, "Elements should not switch from uncontrolled to controlled (or vice versa).", `Decide between using a controlled or uncontrolled ${n} element for the lifetime of the component.`, "The nature of the state is determined during the first render. It's considered controlled if the value is not `undefined`.", "More info: https://fb.me/react-controlled-components"].join(`
`));
    }, [o, n, e]);
    const {
      current: d
    } = m.useRef(t);
    m.useEffect(() => {
      !i && !Object.is(d, t) && console.error([`MUI: A component is changing the default ${o} state of an uncontrolled ${n} after being initialized. To suppress this warning opt to use a controlled ${n}.`].join(`
`));
    }, [JSON.stringify(t)]);
  }
  const c = m.useCallback((d) => {
    i || s(d);
  }, []);
  return [l, c];
}
function ut(e) {
  const t = m.useRef(e);
  return At(() => {
    t.current = e;
  }), m.useRef((...n) => (
    // @ts-expect-error hide `this`
    (0, t.current)(...n)
  )).current;
}
function Te(...e) {
  const t = m.useRef(void 0), n = m.useCallback((o) => {
    const i = e.map((a) => {
      if (a == null)
        return null;
      if (typeof a == "function") {
        const s = a, l = s(o);
        return typeof l == "function" ? l : () => {
          s(null);
        };
      }
      return a.current = o, () => {
        a.current = null;
      };
    });
    return () => {
      i.forEach((a) => a == null ? void 0 : a());
    };
  }, e);
  return m.useMemo(() => e.every((o) => o == null) ? null : (o) => {
    t.current && (t.current(), t.current = void 0), o != null && (t.current = n(o));
  }, e);
}
const wo = {};
function br(e, t) {
  const n = m.useRef(wo);
  return n.current === wo && (n.current = e(t)), n;
}
const rs = [];
function is(e) {
  m.useEffect(e, rs);
}
class Gn {
  constructor() {
    gt(this, "currentId", null);
    gt(this, "clear", () => {
      this.currentId !== null && (clearTimeout(this.currentId), this.currentId = null);
    });
    gt(this, "disposeEffect", () => this.clear);
  }
  static create() {
    return new Gn();
  }
  /**
   * Executes `fn` after `delay`, clearing any previously scheduled call.
   */
  start(t, n) {
    this.clear(), this.currentId = setTimeout(() => {
      this.currentId = null, n();
    }, t);
  }
}
function mr() {
  const e = br(Gn.create).current;
  return is(e.disposeEffect), e;
}
function Ao(e) {
  try {
    return e.matches(":focus-visible");
  } catch {
    process.env.NODE_ENV !== "production" && !/jsdom/.test(window.navigator.userAgent) && console.warn(["MUI: The `:focus-visible` pseudo class is not supported in this browser.", "Some components rely on this feature to work properly."].join(`
`));
  }
  return !1;
}
function yr(e = window) {
  const t = e.document.documentElement.clientWidth;
  return e.innerWidth - t;
}
function as(e) {
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
function vr(e, t, n, o) {
  const i = e[t];
  if (i == null || !Number.isInteger(i)) {
    const a = as(i);
    return new RangeError(`Invalid ${o} \`${t}\` of type \`${a}\` supplied to \`${n}\`, expected \`integer\`.`);
  }
  return null;
}
function Cr(e, t, ...n) {
  return e[t] === void 0 ? null : vr(e, t, ...n);
}
function Rn() {
  return null;
}
Cr.isRequired = vr;
Rn.isRequired = Rn;
const Er = process.env.NODE_ENV === "production" ? Rn : Cr;
function he(e, t, n = void 0) {
  const o = {};
  for (const i in e) {
    const a = e[i];
    let s = "", l = !0;
    for (let c = 0; c < a.length; c += 1) {
      const d = a[c];
      d && (s += (l === !0 ? "" : " ") + t(d), l = !1, n && n[d] && (s += " " + n[d]));
    }
    o[i] = s;
  }
  return o;
}
function ss(e) {
  return typeof e == "string";
}
function xr(e, t, n) {
  return e === void 0 || ss(e) ? t : {
    ...t,
    ownerState: {
      ...t.ownerState,
      ...n
    }
  };
}
function wr(e, t = []) {
  if (e === void 0)
    return {};
  const n = {};
  return Object.keys(e).filter((o) => o.match(/^on[A-Z]/) && typeof e[o] == "function" && !t.includes(o)).forEach((o) => {
    n[o] = e[o];
  }), n;
}
function So(e) {
  if (e === void 0)
    return {};
  const t = {};
  return Object.keys(e).filter((n) => !(n.match(/^on[A-Z]/) && typeof e[n] == "function")).forEach((n) => {
    t[n] = e[n];
  }), t;
}
function Ar(e) {
  const {
    getSlotProps: t,
    additionalProps: n,
    externalSlotProps: o,
    externalForwardedProps: i,
    className: a
  } = e;
  if (!t) {
    const h = ee(n == null ? void 0 : n.className, a, i == null ? void 0 : i.className, o == null ? void 0 : o.className), b = {
      ...n == null ? void 0 : n.style,
      ...i == null ? void 0 : i.style,
      ...o == null ? void 0 : o.style
    }, v = {
      ...n,
      ...i,
      ...o
    };
    return h.length > 0 && (v.className = h), Object.keys(b).length > 0 && (v.style = b), {
      props: v,
      internalRef: void 0
    };
  }
  const s = wr({
    ...i,
    ...o
  }), l = So(o), c = So(i), d = t(s), p = ee(d == null ? void 0 : d.className, n == null ? void 0 : n.className, a, i == null ? void 0 : i.className, o == null ? void 0 : o.className), f = {
    ...d == null ? void 0 : d.style,
    ...n == null ? void 0 : n.style,
    ...i == null ? void 0 : i.style,
    ...o == null ? void 0 : o.style
  }, g = {
    ...d,
    ...n,
    ...c,
    ...l
  };
  return p.length > 0 && (g.className = p), Object.keys(f).length > 0 && (g.style = f), {
    props: g,
    internalRef: d.ref
  };
}
function Sr(e, t, n) {
  return typeof e == "function" ? e(t, n) : e;
}
function ls(e) {
  var f;
  const {
    elementType: t,
    externalSlotProps: n,
    ownerState: o,
    skipResolvingSlotProps: i = !1,
    ...a
  } = e, s = i ? {} : Sr(n, o), {
    props: l,
    internalRef: c
  } = Ar({
    ...a,
    externalSlotProps: s
  }), d = Te(c, s == null ? void 0 : s.ref, (f = e.additionalProps) == null ? void 0 : f.ref);
  return xr(t, {
    ...l,
    ref: d
  }, o);
}
function fn(e) {
  var t;
  return parseInt(m.version, 10) >= 19 ? ((t = e == null ? void 0 : e.props) == null ? void 0 : t.ref) || null : (e == null ? void 0 : e.ref) || null;
}
const cs = /* @__PURE__ */ m.createContext();
process.env.NODE_ENV !== "production" && (r.node, r.bool);
const us = () => m.useContext(cs) ?? !1, ds = /* @__PURE__ */ m.createContext(void 0);
process.env.NODE_ENV !== "production" && (r.node, r.object);
function ps(e) {
  const {
    theme: t,
    name: n,
    props: o
  } = e;
  if (!t || !t.components || !t.components[n])
    return o;
  const i = t.components[n];
  return i.defaultProps ? Qt(i.defaultProps, o) : !i.styleOverrides && !i.variants ? Qt(i, o) : o;
}
function fs({
  props: e,
  name: t
}) {
  const n = m.useContext(ds);
  return ps({
    props: e,
    name: t,
    theme: {
      components: n
    }
  });
}
const To = {
  theme: void 0
};
function gs(e) {
  let t, n;
  return function(i) {
    let a = t;
    return (a === void 0 || i.theme !== n) && (To.theme = i.theme, a = lr(e(To)), t = a, n = i.theme), a;
  };
}
function hs(e = "") {
  function t(...o) {
    if (!o.length)
      return "";
    const i = o[0];
    return typeof i == "string" && !i.match(/(#|\(|\)|(-?(\d*\.)?\d+)(px|em|%|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc))|^(-?(\d*\.)?\d+)$|(\d+ \d+ \d+)/) ? `, var(--${e ? `${e}-` : ""}${i}${t(...o.slice(1))})` : `, ${i}`;
  }
  return (o, ...i) => `var(--${e ? `${e}-` : ""}${o}${t(...i)})`;
}
const Fo = (e, t, n, o = []) => {
  let i = e;
  t.forEach((a, s) => {
    s === t.length - 1 ? Array.isArray(i) ? i[Number(a)] = n : i && typeof i == "object" && (i[a] = n) : i && typeof i == "object" && (i[a] || (i[a] = o.includes(a) ? [] : {}), i = i[a]);
  });
}, bs = (e, t, n) => {
  function o(i, a = [], s = []) {
    Object.entries(i).forEach(([l, c]) => {
      (!n || n && !n([...a, l])) && c != null && (typeof c == "object" && Object.keys(c).length > 0 ? o(c, [...a, l], Array.isArray(c) ? [...s, l] : s) : t([...a, l], c, s));
    });
  }
  o(e);
}, ms = (e, t) => typeof t == "number" ? ["lineHeight", "fontWeight", "opacity", "zIndex"].some((o) => e.includes(o)) || e[e.length - 1].toLowerCase().includes("opacity") ? t : `${t}px` : t;
function xn(e, t) {
  const {
    prefix: n,
    shouldSkipGeneratingVar: o
  } = t || {}, i = {}, a = {}, s = {};
  return bs(
    e,
    (l, c, d) => {
      if ((typeof c == "string" || typeof c == "number") && (!o || !o(l, c))) {
        const p = `--${n ? `${n}-` : ""}${l.join("-")}`, f = ms(l, c);
        Object.assign(i, {
          [p]: f
        }), Fo(a, l, `var(${p})`, d), Fo(s, l, `var(${p}, ${f})`, d);
      }
    },
    (l) => l[0] === "vars"
    // skip 'vars/*' paths
  ), {
    css: i,
    vars: a,
    varsWithDefaults: s
  };
}
function ys(e, t = {}) {
  const {
    getSelector: n = w,
    disableCssColorScheme: o,
    colorSchemeSelector: i
  } = t, {
    colorSchemes: a = {},
    components: s,
    defaultColorScheme: l = "light",
    ...c
  } = e, {
    vars: d,
    css: p,
    varsWithDefaults: f
  } = xn(c, t);
  let g = f;
  const h = {}, {
    [l]: b,
    ...v
  } = a;
  if (Object.entries(v || {}).forEach(([C, y]) => {
    const {
      vars: S,
      css: B,
      varsWithDefaults: $
    } = xn(y, t);
    g = Ee(g, $), h[C] = {
      css: B,
      vars: S
    };
  }), b) {
    const {
      css: C,
      vars: y,
      varsWithDefaults: S
    } = xn(b, t);
    g = Ee(g, S), h[l] = {
      css: C,
      vars: y
    };
  }
  function w(C, y) {
    var B, $;
    let S = i;
    if (i === "class" && (S = ".%s"), i === "data" && (S = "[data-%s]"), i != null && i.startsWith("data-") && !i.includes("%s") && (S = `[${i}="%s"]`), C) {
      if (S === "media")
        return e.defaultColorScheme === C ? ":root" : {
          [`@media (prefers-color-scheme: ${(($ = (B = a[C]) == null ? void 0 : B.palette) == null ? void 0 : $.mode) || C})`]: {
            ":root": y
          }
        };
      if (S)
        return e.defaultColorScheme === C ? `:root, ${S.replace("%s", String(C))}` : S.replace("%s", String(C));
    }
    return ":root";
  }
  return {
    vars: g,
    generateThemeVars: () => {
      let C = {
        ...d
      };
      return Object.entries(h).forEach(([, {
        vars: y
      }]) => {
        C = Ee(C, y);
      }), C;
    },
    generateStyleSheets: () => {
      var N, H;
      const C = [], y = e.defaultColorScheme || "light";
      function S(u, T) {
        Object.keys(T).length && C.push(typeof u == "string" ? {
          [u]: {
            ...T
          }
        } : u);
      }
      S(n(void 0, {
        ...p
      }), p);
      const {
        [y]: B,
        ...$
      } = h;
      if (B) {
        const {
          css: u
        } = B, T = (H = (N = a[y]) == null ? void 0 : N.palette) == null ? void 0 : H.mode, F = !o && T ? {
          colorScheme: T,
          ...u
        } : {
          ...u
        };
        S(n(y, {
          ...F
        }), F);
      }
      return Object.entries($).forEach(([u, {
        css: T
      }]) => {
        var z, I;
        const F = (I = (z = a[u]) == null ? void 0 : z.palette) == null ? void 0 : I.mode, j = !o && F ? {
          colorScheme: F,
          ...T
        } : {
          ...T
        };
        S(n(u, {
          ...j
        }), j);
      }), C;
    }
  };
}
function vs(e) {
  return function(n) {
    return e === "media" ? (process.env.NODE_ENV !== "production" && n !== "light" && n !== "dark" && console.error(`MUI: @media (prefers-color-scheme) supports only 'light' or 'dark', but receive '${n}'.`), `@media (prefers-color-scheme: ${n})`) : e ? e.startsWith("data-") && !e.includes("%s") ? `[${e}="${n}"] &` : e === "class" ? `.${n} &` : e === "data" ? `[data-${n}] &` : `${e.replace("%s", n)} &` : "&";
  };
}
const Tt = {
  black: "#000",
  white: "#fff"
}, Cs = {
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
}, nt = {
  50: "#f3e5f5",
  200: "#ce93d8",
  300: "#ba68c8",
  400: "#ab47bc",
  500: "#9c27b0",
  700: "#7b1fa2"
}, ot = {
  300: "#e57373",
  400: "#ef5350",
  500: "#f44336",
  700: "#d32f2f",
  800: "#c62828"
}, ht = {
  300: "#ffb74d",
  400: "#ffa726",
  500: "#ff9800",
  700: "#f57c00",
  900: "#e65100"
}, rt = {
  50: "#e3f2fd",
  200: "#90caf9",
  400: "#42a5f5",
  700: "#1976d2",
  800: "#1565c0"
}, it = {
  300: "#4fc3f7",
  400: "#29b6f6",
  500: "#03a9f4",
  700: "#0288d1",
  900: "#01579b"
}, at = {
  300: "#81c784",
  400: "#66bb6a",
  500: "#4caf50",
  700: "#388e3c",
  800: "#2e7d32",
  900: "#1b5e20"
};
function Tr() {
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
      paper: Tt.white,
      default: Tt.white
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
const Es = Tr();
function Fr() {
  return {
    text: {
      primary: Tt.white,
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
      active: Tt.white,
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
const Oo = Fr();
function ko(e, t, n, o) {
  const i = o.light || o, a = o.dark || o * 1.5;
  e[t] || (e.hasOwnProperty(n) ? e[t] = e[n] : t === "light" ? e.light = dn(e.main, i) : t === "dark" && (e.dark = un(e.main, a)));
}
function xs(e = "light") {
  return e === "dark" ? {
    main: rt[200],
    light: rt[50],
    dark: rt[400]
  } : {
    main: rt[700],
    light: rt[400],
    dark: rt[800]
  };
}
function ws(e = "light") {
  return e === "dark" ? {
    main: nt[200],
    light: nt[50],
    dark: nt[400]
  } : {
    main: nt[500],
    light: nt[300],
    dark: nt[700]
  };
}
function As(e = "light") {
  return e === "dark" ? {
    main: ot[500],
    light: ot[300],
    dark: ot[700]
  } : {
    main: ot[700],
    light: ot[400],
    dark: ot[800]
  };
}
function Ss(e = "light") {
  return e === "dark" ? {
    main: it[400],
    light: it[300],
    dark: it[700]
  } : {
    main: it[700],
    light: it[500],
    dark: it[900]
  };
}
function Ts(e = "light") {
  return e === "dark" ? {
    main: at[400],
    light: at[300],
    dark: at[700]
  } : {
    main: at[800],
    light: at[500],
    dark: at[900]
  };
}
function Fs(e = "light") {
  return e === "dark" ? {
    main: ht[400],
    light: ht[300],
    dark: ht[700]
  } : {
    main: "#ed6c02",
    // closest to orange[800] that pass 3:1.
    light: ht[500],
    dark: ht[900]
  };
}
function Wn(e) {
  const {
    mode: t = "light",
    contrastThreshold: n = 3,
    tonalOffset: o = 0.2,
    ...i
  } = e, a = e.primary || xs(t), s = e.secondary || ws(t), l = e.error || As(t), c = e.info || Ss(t), d = e.success || Ts(t), p = e.warning || Fs(t);
  function f(v) {
    const w = yo(v, Oo.text.primary) >= n ? Oo.text.primary : Es.text.primary;
    if (process.env.NODE_ENV !== "production") {
      const E = yo(v, w);
      E < 3 && console.error([`MUI: The contrast ratio of ${E}:1 for ${w} on ${v}`, "falls below the WCAG recommended absolute minimum contrast ratio of 3:1.", "https://www.w3.org/TR/2008/REC-WCAG20-20081211/#visual-audio-contrast-contrast"].join(`
`));
    }
    return w;
  }
  const g = ({
    color: v,
    name: w,
    mainShade: E = 500,
    lightShade: O = 300,
    darkShade: C = 700
  }) => {
    if (v = {
      ...v
    }, !v.main && v[E] && (v.main = v[E]), !v.hasOwnProperty("main"))
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The color${w ? ` (${w})` : ""} provided to augmentColor(color) is invalid.
The color object needs to have a \`main\` property or a \`${E}\` property.` : Qe(11, w ? ` (${w})` : "", E));
    if (typeof v.main != "string")
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The color${w ? ` (${w})` : ""} provided to augmentColor(color) is invalid.
\`color.main\` should be a string, but \`${JSON.stringify(v.main)}\` was provided instead.

Did you intend to use one of the following approaches?

import { green } from "@mui/material/colors";

const theme1 = createTheme({ palette: {
  primary: green,
} });

const theme2 = createTheme({ palette: {
  primary: { main: green[500] },
} });` : Qe(12, w ? ` (${w})` : "", JSON.stringify(v.main)));
    return ko(v, "light", O, o), ko(v, "dark", C, o), v.contrastText || (v.contrastText = f(v.main)), v;
  };
  let h;
  return t === "light" ? h = Tr() : t === "dark" && (h = Fr()), process.env.NODE_ENV !== "production" && (h || console.error(`MUI: The palette mode \`${t}\` is not supported.`)), Ee({
    // A collection of common colors.
    common: {
      ...Tt
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
      color: s,
      name: "secondary",
      mainShade: "A400",
      lightShade: "A200",
      darkShade: "A700"
    }),
    // The colors used to represent interface elements that the user should be made aware of.
    error: g({
      color: l,
      name: "error"
    }),
    // The colors used to represent potentially dangerous actions or important messages.
    warning: g({
      color: p,
      name: "warning"
    }),
    // The colors used to present information to the user that is neutral and not necessarily important.
    info: g({
      color: c,
      name: "info"
    }),
    // The colors used to indicate the successful completion of an action that user triggered.
    success: g({
      color: d,
      name: "success"
    }),
    // The grey colors.
    grey: Cs,
    // Used by `getContrastText()` to maximize the contrast between
    // the background and the text.
    contrastThreshold: n,
    // Takes a background color and returns the text color that maximizes the contrast.
    getContrastText: f,
    // Generate a rich color object.
    augmentColor: g,
    // Used by the functions below to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: o,
    // The light and dark mode object.
    ...h
  }, i);
}
function Os(e) {
  const t = {};
  return Object.entries(e).forEach((o) => {
    const [i, a] = o;
    typeof a == "object" && (t[i] = `${a.fontStyle ? `${a.fontStyle} ` : ""}${a.fontVariant ? `${a.fontVariant} ` : ""}${a.fontWeight ? `${a.fontWeight} ` : ""}${a.fontStretch ? `${a.fontStretch} ` : ""}${a.fontSize || ""}${a.lineHeight ? `/${a.lineHeight} ` : ""}${a.fontFamily || ""}`);
  }), t;
}
function ks(e, t) {
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
function Is(e) {
  return Math.round(e * 1e5) / 1e5;
}
const Io = {
  textTransform: "uppercase"
}, Ro = '"Roboto", "Helvetica", "Arial", sans-serif';
function Rs(e, t) {
  const {
    fontFamily: n = Ro,
    // The default font size of the Material Specification.
    fontSize: o = 14,
    // px
    fontWeightLight: i = 300,
    fontWeightRegular: a = 400,
    fontWeightMedium: s = 500,
    fontWeightBold: l = 700,
    // Tell MUI what's the font-size on the html element.
    // 16px is the default font-size used by browsers.
    htmlFontSize: c = 16,
    // Apply the CSS properties to all the variants.
    allVariants: d,
    pxToRem: p,
    ...f
  } = typeof t == "function" ? t(e) : t;
  process.env.NODE_ENV !== "production" && (typeof o != "number" && console.error("MUI: `fontSize` is required to be a number."), typeof c != "number" && console.error("MUI: `htmlFontSize` is required to be a number."));
  const g = o / 14, h = p || ((w) => `${w / c * g}rem`), b = (w, E, O, C, y) => ({
    fontFamily: n,
    fontWeight: w,
    fontSize: h(E),
    // Unitless following https://meyerweb.com/eric/thoughts/2006/02/08/unitless-line-heights/
    lineHeight: O,
    // The letter spacing was designed for the Roboto font-family. Using the same letter-spacing
    // across font-families can cause issues with the kerning.
    ...n === Ro ? {
      letterSpacing: `${Is(C / E)}em`
    } : {},
    ...y,
    ...d
  }), v = {
    h1: b(i, 96, 1.167, -1.5),
    h2: b(i, 60, 1.2, -0.5),
    h3: b(a, 48, 1.167, 0),
    h4: b(a, 34, 1.235, 0.25),
    h5: b(a, 24, 1.334, 0),
    h6: b(s, 20, 1.6, 0.15),
    subtitle1: b(a, 16, 1.75, 0.15),
    subtitle2: b(s, 14, 1.57, 0.1),
    body1: b(a, 16, 1.5, 0.15),
    body2: b(a, 14, 1.43, 0.15),
    button: b(s, 14, 1.75, 0.4, Io),
    caption: b(a, 12, 1.66, 0.4),
    overline: b(a, 12, 2.66, 1, Io),
    // TODO v6: Remove handling of 'inherit' variant from the theme as it is already handled in Material UI's Typography component. Also, remember to remove the associated types.
    inherit: {
      fontFamily: "inherit",
      fontWeight: "inherit",
      fontSize: "inherit",
      lineHeight: "inherit",
      letterSpacing: "inherit"
    }
  };
  return Ee({
    htmlFontSize: c,
    pxToRem: h,
    fontFamily: n,
    fontSize: o,
    fontWeightLight: i,
    fontWeightRegular: a,
    fontWeightMedium: s,
    fontWeightBold: l,
    ...v
  }, f, {
    clone: !1
    // No need to clone deep
  });
}
const Bs = 0.2, Ms = 0.14, Ds = 0.12;
function se(...e) {
  return [`${e[0]}px ${e[1]}px ${e[2]}px ${e[3]}px rgba(0,0,0,${Bs})`, `${e[4]}px ${e[5]}px ${e[6]}px ${e[7]}px rgba(0,0,0,${Ms})`, `${e[8]}px ${e[9]}px ${e[10]}px ${e[11]}px rgba(0,0,0,${Ds})`].join(",");
}
const Ps = ["none", se(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0), se(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0), se(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0), se(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0), se(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0), se(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0), se(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1), se(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2), se(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2), se(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3), se(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3), se(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4), se(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4), se(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4), se(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5), se(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5), se(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5), se(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6), se(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6), se(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7), se(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7), se(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7), se(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8), se(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8)], Ns = {
  // This is the most common easing curve.
  easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
  // Objects enter the screen at full velocity from off-screen and
  // slowly decelerate to a resting point.
  easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
  // Objects leave the screen at full velocity. They do not decelerate when off-screen.
  easeIn: "cubic-bezier(0.4, 0, 1, 1)",
  // The sharp curve is used by objects that may return to the screen at any time.
  sharp: "cubic-bezier(0.4, 0, 0.6, 1)"
}, $s = {
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
function Bo(e) {
  return `${Math.round(e)}ms`;
}
function js(e) {
  if (!e)
    return 0;
  const t = e / 36;
  return Math.min(Math.round((4 + 15 * t ** 0.25 + t / 5) * 10), 3e3);
}
function zs(e) {
  const t = {
    ...Ns,
    ...e.easing
  }, n = {
    ...$s,
    ...e.duration
  };
  return {
    getAutoHeightDuration: js,
    create: (i = ["all"], a = {}) => {
      const {
        duration: s = n.standard,
        easing: l = t.easeInOut,
        delay: c = 0,
        ...d
      } = a;
      if (process.env.NODE_ENV !== "production") {
        const p = (g) => typeof g == "string", f = (g) => !Number.isNaN(parseFloat(g));
        !p(i) && !Array.isArray(i) && console.error('MUI: Argument "props" must be a string or Array.'), !f(s) && !p(s) && console.error(`MUI: Argument "duration" must be a number or a string but found ${s}.`), p(l) || console.error('MUI: Argument "easing" must be a string.'), !f(c) && !p(c) && console.error('MUI: Argument "delay" must be a number or a string.'), typeof a != "object" && console.error(["MUI: Secong argument of transition.create must be an object.", "Arguments should be either `create('prop1', options)` or `create(['prop1', 'prop2'], options)`"].join(`
`)), Object.keys(d).length !== 0 && console.error(`MUI: Unrecognized argument(s) [${Object.keys(d).join(",")}].`);
      }
      return (Array.isArray(i) ? i : [i]).map((p) => `${p} ${typeof s == "string" ? s : Bo(s)} ${l} ${typeof c == "string" ? c : Bo(c)}`).join(",");
    },
    ...e,
    easing: t,
    duration: n
  };
}
const Vs = {
  mobileStepper: 1e3,
  fab: 1050,
  speedDial: 1050,
  appBar: 1100,
  drawer: 1200,
  modal: 1300,
  snackbar: 1400,
  tooltip: 1500
};
function Ls(e) {
  return Pe(e) || typeof e > "u" || typeof e == "string" || typeof e == "boolean" || typeof e == "number" || Array.isArray(e);
}
function Or(e = {}) {
  const t = {
    ...e
  };
  function n(o) {
    const i = Object.entries(o);
    for (let a = 0; a < i.length; a++) {
      const [s, l] = i[a];
      !Ls(l) || s.startsWith("unstable_") ? delete o[s] : Pe(l) && (o[s] = {
        ...l
      }, n(o[s]));
    }
  }
  return n(t), `import { unstable_createBreakpoints as createBreakpoints, createTransitions } from '@mui/material/styles';

const theme = ${JSON.stringify(t, null, 2)};

theme.breakpoints = createBreakpoints(theme.breakpoints || {});
theme.transitions = createTransitions(theme.transitions || {});

export default theme;`;
}
function Bn(e = {}, ...t) {
  const {
    breakpoints: n,
    mixins: o = {},
    spacing: i,
    palette: a = {},
    transitions: s = {},
    typography: l = {},
    shape: c,
    ...d
  } = e;
  if (e.vars && // The error should throw only for the root theme creation because user is not allowed to use a custom node `vars`.
  // `generateThemeVars` is the closest identifier for checking that the `options` is a result of `createTheme` with CSS variables so that user can create new theme for nested ThemeProvider.
  e.generateThemeVars === void 0)
    throw new Error(process.env.NODE_ENV !== "production" ? "MUI: `vars` is a private field used for CSS variables support.\nPlease use another name or follow the [docs](https://mui.com/material-ui/customization/css-theme-variables/usage/) to enable the feature." : Qe(20));
  const p = Wn(a), f = Kn(e);
  let g = Ee(f, {
    mixins: ks(f.breakpoints, o),
    palette: p,
    // Don't use [...shadows] until you've verified its transpiled code is not invoking the iterator protocol.
    shadows: Ps.slice(),
    typography: Rs(p, l),
    transitions: zs(s),
    zIndex: {
      ...Vs
    }
  });
  if (g = Ee(g, d), g = t.reduce((h, b) => Ee(h, b), g), process.env.NODE_ENV !== "production") {
    const h = ["active", "checked", "completed", "disabled", "error", "expanded", "focused", "focusVisible", "required", "selected"], b = (v, w) => {
      let E;
      for (E in v) {
        const O = v[E];
        if (h.includes(E) && Object.keys(O).length > 0) {
          if (process.env.NODE_ENV !== "production") {
            const C = pe("", E);
            console.error([`MUI: The \`${w}\` component increases the CSS specificity of the \`${E}\` internal state.`, "You can not override it like this: ", JSON.stringify(v, null, 2), "", `Instead, you need to use the '&.${C}' syntax:`, JSON.stringify({
              root: {
                [`&.${C}`]: O
              }
            }, null, 2), "", "https://mui.com/r/state-classes-guide"].join(`
`));
          }
          v[E] = {};
        }
      }
    };
    Object.keys(g.components).forEach((v) => {
      const w = g.components[v].styleOverrides;
      w && v.startsWith("Mui") && b(w, v);
    });
  }
  return g.unstable_sxConfig = {
    ...ln,
    ...d == null ? void 0 : d.unstable_sxConfig
  }, g.unstable_sx = function(b) {
    return dt({
      sx: b,
      theme: this
    });
  }, g.toRuntimeSource = Or, g;
}
function Mn(e) {
  let t;
  return e < 1 ? t = 5.11916 * e ** 2 : t = 4.5 * Math.log(e + 1) + 2, Math.round(t * 10) / 1e3;
}
const Us = [...Array(25)].map((e, t) => {
  if (t === 0)
    return "none";
  const n = Mn(t);
  return `linear-gradient(rgba(255 255 255 / ${n}), rgba(255 255 255 / ${n}))`;
});
function kr(e) {
  return {
    inputPlaceholder: e === "dark" ? 0.5 : 0.42,
    inputUnderline: e === "dark" ? 0.7 : 0.42,
    switchTrackDisabled: e === "dark" ? 0.2 : 0.12,
    switchTrack: e === "dark" ? 0.3 : 0.38
  };
}
function Ir(e) {
  return e === "dark" ? Us : [];
}
function Qs(e) {
  const {
    palette: t = {
      mode: "light"
    },
    // need to cast to avoid module augmentation test
    opacity: n,
    overlays: o,
    ...i
  } = e, a = Wn(t);
  return {
    palette: a,
    opacity: {
      ...kr(a.mode),
      ...n
    },
    overlays: o || Ir(a.mode),
    ...i
  };
}
function Ks(e) {
  var t;
  return !!e[0].match(/(cssVarPrefix|colorSchemeSelector|rootSelector|typography|mixins|breakpoints|direction|transitions)/) || !!e[0].match(/sxConfig$/) || // ends with sxConfig
  e[0] === "palette" && !!((t = e[1]) != null && t.match(/(mode|contrastThreshold|tonalOffset)/));
}
const Hs = (e) => [...[...Array(25)].map((t, n) => `--${e ? `${e}-` : ""}overlays-${n}`), `--${e ? `${e}-` : ""}palette-AppBar-darkBg`, `--${e ? `${e}-` : ""}palette-AppBar-darkColor`], Gs = (e) => (t, n) => {
  const o = e.rootSelector || ":root", i = e.colorSchemeSelector;
  let a = i;
  if (i === "class" && (a = ".%s"), i === "data" && (a = "[data-%s]"), i != null && i.startsWith("data-") && !i.includes("%s") && (a = `[${i}="%s"]`), e.defaultColorScheme === t) {
    if (t === "dark") {
      const s = {};
      return Hs(e.cssVarPrefix).forEach((l) => {
        s[l] = n[l], delete n[l];
      }), a === "media" ? {
        [o]: n,
        "@media (prefers-color-scheme: dark)": {
          [o]: s
        }
      } : a ? {
        [a.replace("%s", t)]: s,
        [`${o}, ${a.replace("%s", t)}`]: n
      } : {
        [o]: {
          ...n,
          ...s
        }
      };
    }
    if (a && a !== "media")
      return `${o}, ${a.replace("%s", String(t))}`;
  } else if (t) {
    if (a === "media")
      return {
        [`@media (prefers-color-scheme: ${String(t)})`]: {
          [o]: n
        }
      };
    if (a)
      return a.replace("%s", String(t));
  }
  return o;
};
function Ws(e, t) {
  t.forEach((n) => {
    e[n] || (e[n] = {});
  });
}
function x(e, t, n) {
  !e[t] && n && (e[t] = n);
}
function vt(e) {
  return typeof e != "string" || !e.startsWith("hsl") ? e : dr(e);
}
function Me(e, t) {
  `${t}Channel` in e || (e[`${t}Channel`] = yt(vt(e[t]), `MUI: Can't create \`palette.${t}Channel\` because \`palette.${t}\` is not one of these formats: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color().
To suppress this warning, you need to explicitly provide the \`palette.${t}Channel\` as a string (in rgb format, for example "12 12 12") or undefined if you want to remove the channel token.`));
}
function Ys(e) {
  return typeof e == "number" ? `${e}px` : typeof e == "string" || typeof e == "function" || Array.isArray(e) ? e : "8px";
}
const Ie = (e) => {
  try {
    return e();
  } catch {
  }
}, Js = (e = "mui") => hs(e);
function wn(e, t, n, o) {
  if (!t)
    return;
  t = t === !0 ? {} : t;
  const i = o === "dark" ? "dark" : "light";
  if (!n) {
    e[o] = Qs({
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
    ...s
  } = Bn({
    ...n,
    palette: {
      mode: i,
      ...t == null ? void 0 : t.palette
    }
  });
  return e[o] = {
    ...t,
    palette: a,
    opacity: {
      ...kr(i),
      ...t == null ? void 0 : t.opacity
    },
    overlays: (t == null ? void 0 : t.overlays) || Ir(i)
  }, s;
}
function qs(e = {}, ...t) {
  const {
    colorSchemes: n = {
      light: !0
    },
    defaultColorScheme: o,
    disableCssColorScheme: i = !1,
    cssVarPrefix: a = "mui",
    shouldSkipGeneratingVar: s = Ks,
    colorSchemeSelector: l = n.light && n.dark ? "media" : void 0,
    rootSelector: c = ":root",
    ...d
  } = e, p = Object.keys(n)[0], f = o || (n.light && p !== "light" ? "light" : p), g = Js(a), {
    [f]: h,
    light: b,
    dark: v,
    ...w
  } = n, E = {
    ...w
  };
  let O = h;
  if ((f === "dark" && !("dark" in n) || f === "light" && !("light" in n)) && (O = !0), !O)
    throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The \`colorSchemes.${f}\` option is either missing or invalid.` : Qe(21, f));
  const C = wn(E, O, d, f);
  b && !E.light && wn(E, b, void 0, "light"), v && !E.dark && wn(E, v, void 0, "dark");
  let y = {
    defaultColorScheme: f,
    ...C,
    cssVarPrefix: a,
    colorSchemeSelector: l,
    rootSelector: c,
    getCssVar: g,
    colorSchemes: E,
    font: {
      ...Os(C.typography),
      ...C.font
    },
    spacing: Ys(d.spacing)
  };
  Object.keys(y.colorSchemes).forEach((H) => {
    const u = y.colorSchemes[H].palette, T = (F) => {
      const j = F.split("-"), z = j[1], I = j[2];
      return g(F, u[z][I]);
    };
    if (u.mode === "light" && (x(u.common, "background", "#fff"), x(u.common, "onBackground", "#000")), u.mode === "dark" && (x(u.common, "background", "#000"), x(u.common, "onBackground", "#fff")), Ws(u, ["Alert", "AppBar", "Avatar", "Button", "Chip", "FilledInput", "LinearProgress", "Skeleton", "Slider", "SnackbarContent", "SpeedDialAction", "StepConnector", "StepContent", "Switch", "TableCell", "Tooltip"]), u.mode === "light") {
      x(u.Alert, "errorColor", ie(u.error.light, 0.6)), x(u.Alert, "infoColor", ie(u.info.light, 0.6)), x(u.Alert, "successColor", ie(u.success.light, 0.6)), x(u.Alert, "warningColor", ie(u.warning.light, 0.6)), x(u.Alert, "errorFilledBg", T("palette-error-main")), x(u.Alert, "infoFilledBg", T("palette-info-main")), x(u.Alert, "successFilledBg", T("palette-success-main")), x(u.Alert, "warningFilledBg", T("palette-warning-main")), x(u.Alert, "errorFilledColor", Ie(() => u.getContrastText(u.error.main))), x(u.Alert, "infoFilledColor", Ie(() => u.getContrastText(u.info.main))), x(u.Alert, "successFilledColor", Ie(() => u.getContrastText(u.success.main))), x(u.Alert, "warningFilledColor", Ie(() => u.getContrastText(u.warning.main))), x(u.Alert, "errorStandardBg", ae(u.error.light, 0.9)), x(u.Alert, "infoStandardBg", ae(u.info.light, 0.9)), x(u.Alert, "successStandardBg", ae(u.success.light, 0.9)), x(u.Alert, "warningStandardBg", ae(u.warning.light, 0.9)), x(u.Alert, "errorIconColor", T("palette-error-main")), x(u.Alert, "infoIconColor", T("palette-info-main")), x(u.Alert, "successIconColor", T("palette-success-main")), x(u.Alert, "warningIconColor", T("palette-warning-main")), x(u.AppBar, "defaultBg", T("palette-grey-100")), x(u.Avatar, "defaultBg", T("palette-grey-400")), x(u.Button, "inheritContainedBg", T("palette-grey-300")), x(u.Button, "inheritContainedHoverBg", T("palette-grey-A100")), x(u.Chip, "defaultBorder", T("palette-grey-400")), x(u.Chip, "defaultAvatarColor", T("palette-grey-700")), x(u.Chip, "defaultIconColor", T("palette-grey-700")), x(u.FilledInput, "bg", "rgba(0, 0, 0, 0.06)"), x(u.FilledInput, "hoverBg", "rgba(0, 0, 0, 0.09)"), x(u.FilledInput, "disabledBg", "rgba(0, 0, 0, 0.12)"), x(u.LinearProgress, "primaryBg", ae(u.primary.main, 0.62)), x(u.LinearProgress, "secondaryBg", ae(u.secondary.main, 0.62)), x(u.LinearProgress, "errorBg", ae(u.error.main, 0.62)), x(u.LinearProgress, "infoBg", ae(u.info.main, 0.62)), x(u.LinearProgress, "successBg", ae(u.success.main, 0.62)), x(u.LinearProgress, "warningBg", ae(u.warning.main, 0.62)), x(u.Skeleton, "bg", `rgba(${T("palette-text-primaryChannel")} / 0.11)`), x(u.Slider, "primaryTrack", ae(u.primary.main, 0.62)), x(u.Slider, "secondaryTrack", ae(u.secondary.main, 0.62)), x(u.Slider, "errorTrack", ae(u.error.main, 0.62)), x(u.Slider, "infoTrack", ae(u.info.main, 0.62)), x(u.Slider, "successTrack", ae(u.success.main, 0.62)), x(u.Slider, "warningTrack", ae(u.warning.main, 0.62));
      const F = Pt(u.background.default, 0.8);
      x(u.SnackbarContent, "bg", F), x(u.SnackbarContent, "color", Ie(() => u.getContrastText(F))), x(u.SpeedDialAction, "fabHoverBg", Pt(u.background.paper, 0.15)), x(u.StepConnector, "border", T("palette-grey-400")), x(u.StepContent, "border", T("palette-grey-400")), x(u.Switch, "defaultColor", T("palette-common-white")), x(u.Switch, "defaultDisabledColor", T("palette-grey-100")), x(u.Switch, "primaryDisabledColor", ae(u.primary.main, 0.62)), x(u.Switch, "secondaryDisabledColor", ae(u.secondary.main, 0.62)), x(u.Switch, "errorDisabledColor", ae(u.error.main, 0.62)), x(u.Switch, "infoDisabledColor", ae(u.info.main, 0.62)), x(u.Switch, "successDisabledColor", ae(u.success.main, 0.62)), x(u.Switch, "warningDisabledColor", ae(u.warning.main, 0.62)), x(u.TableCell, "border", ae(Dt(u.divider, 1), 0.88)), x(u.Tooltip, "bg", Dt(u.grey[700], 0.92));
    }
    if (u.mode === "dark") {
      x(u.Alert, "errorColor", ae(u.error.light, 0.6)), x(u.Alert, "infoColor", ae(u.info.light, 0.6)), x(u.Alert, "successColor", ae(u.success.light, 0.6)), x(u.Alert, "warningColor", ae(u.warning.light, 0.6)), x(u.Alert, "errorFilledBg", T("palette-error-dark")), x(u.Alert, "infoFilledBg", T("palette-info-dark")), x(u.Alert, "successFilledBg", T("palette-success-dark")), x(u.Alert, "warningFilledBg", T("palette-warning-dark")), x(u.Alert, "errorFilledColor", Ie(() => u.getContrastText(u.error.dark))), x(u.Alert, "infoFilledColor", Ie(() => u.getContrastText(u.info.dark))), x(u.Alert, "successFilledColor", Ie(() => u.getContrastText(u.success.dark))), x(u.Alert, "warningFilledColor", Ie(() => u.getContrastText(u.warning.dark))), x(u.Alert, "errorStandardBg", ie(u.error.light, 0.9)), x(u.Alert, "infoStandardBg", ie(u.info.light, 0.9)), x(u.Alert, "successStandardBg", ie(u.success.light, 0.9)), x(u.Alert, "warningStandardBg", ie(u.warning.light, 0.9)), x(u.Alert, "errorIconColor", T("palette-error-main")), x(u.Alert, "infoIconColor", T("palette-info-main")), x(u.Alert, "successIconColor", T("palette-success-main")), x(u.Alert, "warningIconColor", T("palette-warning-main")), x(u.AppBar, "defaultBg", T("palette-grey-900")), x(u.AppBar, "darkBg", T("palette-background-paper")), x(u.AppBar, "darkColor", T("palette-text-primary")), x(u.Avatar, "defaultBg", T("palette-grey-600")), x(u.Button, "inheritContainedBg", T("palette-grey-800")), x(u.Button, "inheritContainedHoverBg", T("palette-grey-700")), x(u.Chip, "defaultBorder", T("palette-grey-700")), x(u.Chip, "defaultAvatarColor", T("palette-grey-300")), x(u.Chip, "defaultIconColor", T("palette-grey-300")), x(u.FilledInput, "bg", "rgba(255, 255, 255, 0.09)"), x(u.FilledInput, "hoverBg", "rgba(255, 255, 255, 0.13)"), x(u.FilledInput, "disabledBg", "rgba(255, 255, 255, 0.12)"), x(u.LinearProgress, "primaryBg", ie(u.primary.main, 0.5)), x(u.LinearProgress, "secondaryBg", ie(u.secondary.main, 0.5)), x(u.LinearProgress, "errorBg", ie(u.error.main, 0.5)), x(u.LinearProgress, "infoBg", ie(u.info.main, 0.5)), x(u.LinearProgress, "successBg", ie(u.success.main, 0.5)), x(u.LinearProgress, "warningBg", ie(u.warning.main, 0.5)), x(u.Skeleton, "bg", `rgba(${T("palette-text-primaryChannel")} / 0.13)`), x(u.Slider, "primaryTrack", ie(u.primary.main, 0.5)), x(u.Slider, "secondaryTrack", ie(u.secondary.main, 0.5)), x(u.Slider, "errorTrack", ie(u.error.main, 0.5)), x(u.Slider, "infoTrack", ie(u.info.main, 0.5)), x(u.Slider, "successTrack", ie(u.success.main, 0.5)), x(u.Slider, "warningTrack", ie(u.warning.main, 0.5));
      const F = Pt(u.background.default, 0.98);
      x(u.SnackbarContent, "bg", F), x(u.SnackbarContent, "color", Ie(() => u.getContrastText(F))), x(u.SpeedDialAction, "fabHoverBg", Pt(u.background.paper, 0.15)), x(u.StepConnector, "border", T("palette-grey-600")), x(u.StepContent, "border", T("palette-grey-600")), x(u.Switch, "defaultColor", T("palette-grey-300")), x(u.Switch, "defaultDisabledColor", T("palette-grey-600")), x(u.Switch, "primaryDisabledColor", ie(u.primary.main, 0.55)), x(u.Switch, "secondaryDisabledColor", ie(u.secondary.main, 0.55)), x(u.Switch, "errorDisabledColor", ie(u.error.main, 0.55)), x(u.Switch, "infoDisabledColor", ie(u.info.main, 0.55)), x(u.Switch, "successDisabledColor", ie(u.success.main, 0.55)), x(u.Switch, "warningDisabledColor", ie(u.warning.main, 0.55)), x(u.TableCell, "border", ie(Dt(u.divider, 1), 0.68)), x(u.Tooltip, "bg", Dt(u.grey[700], 0.92));
    }
    Me(u.background, "default"), Me(u.background, "paper"), Me(u.common, "background"), Me(u.common, "onBackground"), Me(u, "divider"), Object.keys(u).forEach((F) => {
      const j = u[F];
      F !== "tonalOffset" && j && typeof j == "object" && (j.main && x(u[F], "mainChannel", yt(vt(j.main))), j.light && x(u[F], "lightChannel", yt(vt(j.light))), j.dark && x(u[F], "darkChannel", yt(vt(j.dark))), j.contrastText && x(u[F], "contrastTextChannel", yt(vt(j.contrastText))), F === "text" && (Me(u[F], "primary"), Me(u[F], "secondary")), F === "action" && (j.active && Me(u[F], "active"), j.selected && Me(u[F], "selected")));
    });
  }), y = t.reduce((H, u) => Ee(H, u), y);
  const S = {
    prefix: a,
    disableCssColorScheme: i,
    shouldSkipGeneratingVar: s,
    getSelector: Gs(y)
  }, {
    vars: B,
    generateThemeVars: $,
    generateStyleSheets: N
  } = ys(y, S);
  return y.vars = B, Object.entries(y.colorSchemes[y.defaultColorScheme]).forEach(([H, u]) => {
    y[H] = u;
  }), y.generateThemeVars = $, y.generateStyleSheets = N, y.generateSpacing = function() {
    return ir(d.spacing, Un(this));
  }, y.getColorSchemeSelector = vs(l), y.spacing = y.generateSpacing(), y.shouldSkipGeneratingVar = s, y.unstable_sxConfig = {
    ...ln,
    ...d == null ? void 0 : d.unstable_sxConfig
  }, y.unstable_sx = function(u) {
    return dt({
      sx: u,
      theme: this
    });
  }, y.toRuntimeSource = Or, y;
}
function Mo(e, t, n) {
  e.colorSchemes && n && (e.colorSchemes[t] = {
    ...n !== !0 && n,
    palette: Wn({
      ...n === !0 ? {} : n.palette,
      mode: t
    })
    // cast type to skip module augmentation test
  });
}
function Yn(e = {}, ...t) {
  const {
    palette: n,
    cssVariables: o = !1,
    colorSchemes: i = n ? void 0 : {
      light: !0
    },
    defaultColorScheme: a = n == null ? void 0 : n.mode,
    ...s
  } = e, l = a || "light", c = i == null ? void 0 : i[l], d = {
    ...i,
    ...n ? {
      [l]: {
        ...typeof c != "boolean" && c,
        palette: n
      }
    } : void 0
  };
  if (o === !1) {
    if (!("colorSchemes" in e))
      return Bn(e, ...t);
    let p = n;
    "palette" in e || d[l] && (d[l] !== !0 ? p = d[l].palette : l === "dark" && (p = {
      mode: "dark"
    }));
    const f = Bn({
      ...e,
      palette: p
    }, ...t);
    return f.defaultColorScheme = l, f.colorSchemes = d, f.palette.mode === "light" && (f.colorSchemes.light = {
      ...d.light !== !0 && d.light,
      palette: f.palette
    }, Mo(f, "dark", d.dark)), f.palette.mode === "dark" && (f.colorSchemes.dark = {
      ...d.dark !== !0 && d.dark,
      palette: f.palette
    }, Mo(f, "light", d.light)), f;
  }
  return !n && !("light" in d) && l === "light" && (d.light = !0), qs({
    ...s,
    colorSchemes: d,
    defaultColorScheme: l,
    ...typeof o != "boolean" && o
  }, ...t);
}
const Rr = Yn();
function Jn() {
  const e = Ba(Rr);
  return process.env.NODE_ENV !== "production" && m.useDebugValue(e), e[er] || e;
}
function Xs(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
const tt = (e) => Xs(e) && e !== "classes", Y = Va({
  themeId: er,
  defaultTheme: Rr,
  rootShouldForwardProp: tt
}), Ae = {
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
    fabFont: "#1994FC",
    myDefault: "#7a7d80",
    menuFont: "#373737",
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
    iconFont: "#7A7D80",
    iconOverlay: "#505050",
    surface: "#F5F5F6",
    neutral: "#34393D",
    fabBg: "#F5F5F6",
    fabFont: "#1994FC",
    myDefault: "1994FC",
    menuFont: "#373737",
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
    iconFont: "#7A7D80",
    iconOverlay: "#505050",
    surface: "#F5F5F6",
    neutral: "#34393D",
    fabBg: "#DBE9FF",
    fabFont: "#2D66BF",
    myDefault: "#2D66BF",
    menuFont: "#373737",
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
    iconFont: "#7A7D80",
    iconOverlay: "#505050",
    surface: "#BDDEDF",
    neutral: "#0E3A3B",
    fabBg: "#BDDEDF",
    fabFont: "#0E3A3B",
    myDefault: "#0E3A3B",
    menuFont: "#373737",
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
    iconFont: "#7A7D80",
    iconOverlay: "#505050",
    surface: "#F5F5F6",
    neutral: "#34393D",
    fabBg: "#F5F5F6",
    fabFont: "#FF4D4F",
    myDefault: "#FF4D4F",
    menuFont: "#373737",
    alertColor: {
      error: ["#FFEDED", "#A72E2F"],
      success: ["#E9FAF5", "#20C997"],
      info: ["#EDF4FF", "#4B91FF"],
      warning: ["#FFF8EC", "#FFB53F"],
      gray: ["#E9E9E9", "#373737"],
      dark: ["#373737", "#FFFFFF"]
    }
  }
}, Nt = {
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
    fabFont: "#1994FC",
    myDefault: "#1994FC",
    menuFont: "#373737",
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
    iconFont: "#7A7D80",
    iconOverlay: "#505050",
    surface: "#F5F5F6",
    neutral: "#34393D",
    fabBg: "#F5F5F6",
    fabFont: "#1994FC",
    myDefault: "#1994FC",
    menuFont: "#373737",
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
    iconFont: "#7A7D80",
    iconOverlay: "#505050",
    surface: "#F5F5F6",
    neutral: "#34393D",
    fabBg: "#DBE9FF",
    fabFont: "#2D66BF",
    myDefault: "#2D66BF",
    menuFont: "#373737",
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
    iconFont: "#7A7D80",
    iconOverlay: "#505050",
    surface: "#BDDEDF",
    neutral: "#0E3A3B",
    fabBg: "#BDDEDF",
    fabFont: "#0E3A3B",
    myDefault: "#0E3A3B",
    menuFont: "#373737",
    alertColor: {
      error: ["#FFEDED", "#A72E2F"],
      success: ["#E9FAF5", "#20C997"],
      info: ["#EDF4FF", "#4B91FF"],
      warning: ["#FFF8EC", "#FFB53F"],
      gray: ["#E9E9E9", "#373737"],
      dark: ["#373737", "#FFFFFF"]
    }
  }
}, Ne = ["#373737"], Ku = Yn({
  palette: {
    primary: Ae.primary,
    secondary: Ae.secondary,
    tertiary: Ae.tertiary,
    surface: Ae.surface
  }
});
Yn({
  palette: {
    primary: Nt.primary,
    secondary: Nt.secondary,
    tertiary: Nt.tertiary,
    surface: Nt.surface
  }
});
const ge = gs;
process.env.NODE_ENV !== "production" && (r.node, r.object.isRequired);
function be(e) {
  return fs(e);
}
function Zs(e) {
  return pe("MuiSvgIcon", e);
}
ue("MuiSvgIcon", ["root", "colorPrimary", "colorSecondary", "colorAction", "colorError", "colorDisabled", "fontSizeInherit", "fontSizeSmall", "fontSizeMedium", "fontSizeLarge"]);
const _s = (e) => {
  const {
    color: t,
    fontSize: n,
    classes: o
  } = e, i = {
    root: ["root", t !== "inherit" && `color${P(t)}`, `fontSize${P(n)}`]
  };
  return he(i, Zs, o);
}, el = Y("svg", {
  name: "MuiSvgIcon",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, n.color !== "inherit" && t[`color${P(n.color)}`], t[`fontSize${P(n.fontSize)}`]];
  }
})(ge(({
  theme: e
}) => {
  var t, n, o, i, a, s, l, c, d, p, f, g, h, b;
  return {
    userSelect: "none",
    width: "1em",
    height: "1em",
    display: "inline-block",
    flexShrink: 0,
    transition: (i = (t = e.transitions) == null ? void 0 : t.create) == null ? void 0 : i.call(t, "fill", {
      duration: (o = (n = (e.vars ?? e).transitions) == null ? void 0 : n.duration) == null ? void 0 : o.shorter
    }),
    variants: [
      {
        props: (v) => !v.hasSvgAsChild,
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
          fontSize: ((s = (a = e.typography) == null ? void 0 : a.pxToRem) == null ? void 0 : s.call(a, 20)) || "1.25rem"
        }
      },
      {
        props: {
          fontSize: "medium"
        },
        style: {
          fontSize: ((c = (l = e.typography) == null ? void 0 : l.pxToRem) == null ? void 0 : c.call(l, 24)) || "1.5rem"
        }
      },
      {
        props: {
          fontSize: "large"
        },
        style: {
          fontSize: ((p = (d = e.typography) == null ? void 0 : d.pxToRem) == null ? void 0 : p.call(d, 35)) || "2.1875rem"
        }
      },
      // TODO v5 deprecate color prop, v6 remove for sx
      ...Object.entries((e.vars ?? e).palette).filter(([, v]) => v && v.main).map(([v]) => {
        var w, E;
        return {
          props: {
            color: v
          },
          style: {
            color: (E = (w = (e.vars ?? e).palette) == null ? void 0 : w[v]) == null ? void 0 : E.main
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
          color: (b = (h = (e.vars ?? e).palette) == null ? void 0 : h.action) == null ? void 0 : b.disabled
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
})), Kt = /* @__PURE__ */ m.forwardRef(function(t, n) {
  const o = be({
    props: t,
    name: "MuiSvgIcon"
  }), {
    children: i,
    className: a,
    color: s = "inherit",
    component: l = "svg",
    fontSize: c = "medium",
    htmlColor: d,
    inheritViewBox: p = !1,
    titleAccess: f,
    viewBox: g = "0 0 24 24",
    ...h
  } = o, b = /* @__PURE__ */ m.isValidElement(i) && i.type === "svg", v = {
    ...o,
    color: s,
    component: l,
    fontSize: c,
    instanceFontSize: t.fontSize,
    inheritViewBox: p,
    viewBox: g,
    hasSvgAsChild: b
  }, w = {};
  p || (w.viewBox = g);
  const E = _s(v);
  return /* @__PURE__ */ Oe(el, {
    as: l,
    className: ee(E.root, a),
    focusable: "false",
    color: d,
    "aria-hidden": f ? void 0 : !0,
    role: f ? "img" : void 0,
    ref: n,
    ...w,
    ...h,
    ...b && i.props,
    ownerState: v,
    children: [b ? i.props.children : i, f ? /* @__PURE__ */ M("title", {
      children: f
    }) : null]
  });
});
process.env.NODE_ENV !== "production" && (Kt.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Node passed into the SVG element.
   */
  children: r.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: r.object,
  /**
   * @ignore
   */
  className: r.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * You can use the `htmlColor` prop to apply a color attribute to the SVG element.
   * @default 'inherit'
   */
  color: r.oneOfType([r.oneOf(["inherit", "action", "disabled", "primary", "secondary", "error", "info", "success", "warning"]), r.string]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: r.elementType,
  /**
   * The fontSize applied to the icon. Defaults to 24px, but can be configure to inherit font size.
   * @default 'medium'
   */
  fontSize: r.oneOfType([r.oneOf(["inherit", "large", "medium", "small"]), r.string]),
  /**
   * Applies a color attribute to the SVG element.
   */
  htmlColor: r.string,
  /**
   * If `true`, the root node will inherit the custom `component`'s viewBox and the `viewBox`
   * prop will be ignored.
   * Useful when you want to reference a custom `component` and have `SvgIcon` pass that
   * `component`'s viewBox to the root node.
   * @default false
   */
  inheritViewBox: r.bool,
  /**
   * The shape-rendering attribute. The behavior of the different options is described on the
   * [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/shape-rendering).
   * If you are having issues with blurry icons you should investigate this prop.
   */
  shapeRendering: r.string,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: r.oneOfType([r.arrayOf(r.oneOfType([r.func, r.object, r.bool])), r.func, r.object]),
  /**
   * Provides a human-readable title for the element that contains it.
   * https://www.w3.org/TR/SVG-access/#Equivalent
   */
  titleAccess: r.string,
  /**
   * Allows you to redefine what the coordinates without units mean inside an SVG element.
   * For example, if the SVG element is 500 (width) by 200 (height),
   * and you pass viewBox="0 0 50 20",
   * this means that the coordinates inside the SVG will go from the top left corner (0,0)
   * to bottom right (50,20) and each unit will be worth 10px.
   * @default '0 0 24 24'
   */
  viewBox: r.string
});
Kt.muiName = "SvgIcon";
function pt(e, t) {
  function n(o, i) {
    return /* @__PURE__ */ M(Kt, {
      "data-testid": `${t}Icon`,
      ref: i,
      ...o,
      children: e
    });
  }
  return process.env.NODE_ENV !== "production" && (n.displayName = `${t}Icon`), n.muiName = Kt.muiName, /* @__PURE__ */ m.memo(/* @__PURE__ */ m.forwardRef(n));
}
const tl = pt(/* @__PURE__ */ M("path", {
  d: "M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"
}), "Person");
function nl(e) {
  return pe("MuiAvatar", e);
}
ue("MuiAvatar", ["root", "colorDefault", "circular", "rounded", "square", "img", "fallback"]);
function me(e, t) {
  const {
    className: n,
    elementType: o,
    ownerState: i,
    externalForwardedProps: a,
    internalForwardedProps: s,
    shouldForwardComponentProp: l = !1,
    ...c
  } = t, {
    component: d,
    slots: p = {
      [e]: void 0
    },
    slotProps: f = {
      [e]: void 0
    },
    ...g
  } = a, h = p[e] || o, b = Sr(f[e], i), {
    props: {
      component: v,
      ...w
    },
    internalRef: E
  } = Ar({
    className: n,
    ...c,
    externalForwardedProps: e === "root" ? g : void 0,
    externalSlotProps: b
  }), O = Te(E, b == null ? void 0 : b.ref, t.ref), C = e === "root" ? v || d : v, y = xr(h, {
    ...e === "root" && !d && !p[e] && s,
    ...e !== "root" && !p[e] && s,
    ...w,
    ...C && !l && {
      as: C
    },
    ...C && l && {
      component: C
    },
    ref: O
  }, i);
  return [h, y];
}
const ol = (e) => {
  const {
    classes: t,
    variant: n,
    colorDefault: o
  } = e;
  return he({
    root: ["root", n, o && "colorDefault"],
    img: ["img"],
    fallback: ["fallback"]
  }, nl, t);
}, rl = Y("div", {
  name: "MuiAvatar",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, t[n.variant], n.colorDefault && t.colorDefault];
  }
})(ge(({
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
}))), il = Y("img", {
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
}), al = Y(tl, {
  name: "MuiAvatar",
  slot: "Fallback",
  overridesResolver: (e, t) => t.fallback
})({
  width: "75%",
  height: "75%"
});
function sl({
  crossOrigin: e,
  referrerPolicy: t,
  src: n,
  srcSet: o
}) {
  const [i, a] = m.useState(!1);
  return m.useEffect(() => {
    if (!n && !o)
      return;
    a(!1);
    let s = !0;
    const l = new Image();
    return l.onload = () => {
      s && a("loaded");
    }, l.onerror = () => {
      s && a("error");
    }, l.crossOrigin = e, l.referrerPolicy = t, l.src = n, o && (l.srcset = o), () => {
      s = !1;
    };
  }, [e, t, n, o]), i;
}
const Br = /* @__PURE__ */ m.forwardRef(function(t, n) {
  const o = be({
    props: t,
    name: "MuiAvatar"
  }), {
    alt: i,
    children: a,
    className: s,
    component: l = "div",
    slots: c = {},
    slotProps: d = {},
    imgProps: p,
    sizes: f,
    src: g,
    srcSet: h,
    variant: b = "circular",
    ...v
  } = o;
  let w = null;
  const E = {
    ...o,
    component: l,
    variant: b
  }, O = sl({
    ...p,
    ...typeof d.img == "function" ? d.img(E) : d.img,
    src: g,
    srcSet: h
  }), C = g || h, y = C && O !== "error";
  E.colorDefault = !y, delete E.ownerState;
  const S = ol(E), [B, $] = me("img", {
    className: S.img,
    elementType: il,
    externalForwardedProps: {
      slots: c,
      slotProps: {
        img: {
          ...p,
          ...d.img
        }
      }
    },
    additionalProps: {
      alt: i,
      src: g,
      srcSet: h,
      sizes: f
    },
    ownerState: E
  });
  return y ? w = /* @__PURE__ */ M(B, {
    ...$
  }) : a || a === 0 ? w = a : C && i ? w = i[0] : w = /* @__PURE__ */ M(al, {
    ownerState: E,
    className: S.fallback
  }), /* @__PURE__ */ M(rl, {
    as: l,
    className: ee(S.root, s),
    ref: n,
    ...v,
    ownerState: E,
    children: w
  });
});
process.env.NODE_ENV !== "production" && (Br.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Used in combination with `src` or `srcSet` to
   * provide an alt attribute for the rendered `img` element.
   */
  alt: r.string,
  /**
   * Used to render icon or text elements inside the Avatar if `src` is not set.
   * This can be an element, or just a string.
   */
  children: r.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: r.object,
  /**
   * @ignore
   */
  className: r.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: r.elementType,
  /**
   * [Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#attributes) applied to the `img` element if the component is used to display an image.
   * It can be used to listen for the loading error event.
   * @deprecated Use `slotProps.img` instead. This prop will be removed in v7. See [Migrating from deprecated APIs](/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   */
  imgProps: r.object,
  /**
   * The `sizes` attribute for the `img` element.
   */
  sizes: r.string,
  /**
   * The props used for each slot inside.
   * @default {}
   */
  slotProps: r.shape({
    img: r.oneOfType([r.func, r.object])
  }),
  /**
   * The components used for each slot inside.
   * @default {}
   */
  slots: r.shape({
    img: r.elementType
  }),
  /**
   * The `src` attribute for the `img` element.
   */
  src: r.string,
  /**
   * The `srcSet` attribute for the `img` element.
   * Use this attribute for responsive image display.
   */
  srcSet: r.string,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: r.oneOfType([r.arrayOf(r.oneOfType([r.func, r.object, r.bool])), r.func, r.object]),
  /**
   * The shape of the avatar.
   * @default 'circular'
   */
  variant: r.oneOfType([r.oneOf(["circular", "rounded", "square"]), r.string])
});
const ll = "data:image/png;base64,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", cl = "data:image/png;base64,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", ul = "data:image/png;base64,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", An = {
  extraLarge: 64,
  large: 40,
  medium: 32,
  small: 24
}, Hu = ({
  types: e = "unknown",
  src: t,
  children: n,
  size: o = "large",
  sx: i,
  ...a
}) => {
  const s = e === "male" ? cl : e === "female" ? ul : ll, [l, c] = Jo(t || null);
  return si(() => {
    c(t || null);
  }, [t]), /* @__PURE__ */ M(
    Br,
    {
      src: l || (!l && !n ? s : void 0),
      sx: {
        width: An[o],
        height: An[o],
        fontSize: An[o] * 0.4,
        ...i
      },
      slotProps: {
        img: {
          onError: () => {
            c(s);
          }
        }
      },
      ...a,
      children: !l && n
    }
  );
};
function Mr(e, t) {
  if (!e)
    return t;
  if (typeof e == "function" || typeof t == "function")
    return (i) => {
      const a = typeof t == "function" ? t(i) : t, s = typeof e == "function" ? e({
        ...i,
        ...a
      }) : e, l = ee(i == null ? void 0 : i.className, a == null ? void 0 : a.className, s == null ? void 0 : s.className);
      return {
        ...a,
        ...s,
        ...!!l && {
          className: l
        },
        ...(a == null ? void 0 : a.style) && (s == null ? void 0 : s.style) && {
          style: {
            ...a.style,
            ...s.style
          }
        },
        ...(a == null ? void 0 : a.sx) && (s == null ? void 0 : s.sx) && {
          sx: [...Array.isArray(a.sx) ? a.sx : [a.sx], ...Array.isArray(s.sx) ? s.sx : [s.sx]]
        }
      };
    };
  const n = t, o = ee(n == null ? void 0 : n.className, e == null ? void 0 : e.className);
  return {
    ...t,
    ...e,
    ...!!o && {
      className: o
    },
    ...(n == null ? void 0 : n.style) && (e == null ? void 0 : e.style) && {
      style: {
        ...n.style,
        ...e.style
      }
    },
    ...(n == null ? void 0 : n.sx) && (e == null ? void 0 : e.sx) && {
      sx: [...Array.isArray(n.sx) ? n.sx : [n.sx], ...Array.isArray(e.sx) ? e.sx : [e.sx]]
    }
  };
}
class Ht {
  constructor() {
    gt(this, "mountEffect", () => {
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
    return new Ht();
  }
  static use() {
    const t = br(Ht.create).current, [n, o] = m.useState(!1);
    return t.shouldMount = n, t.setShouldMount = o, m.useEffect(t.mountEffect, [n]), t;
  }
  mount() {
    return this.mounted || (this.mounted = pl(), this.shouldMount = !0, this.setShouldMount(this.shouldMount)), this.mounted;
  }
  /* Ripple API */
  start(...t) {
    this.mount().then(() => {
      var n;
      return (n = this.ref.current) == null ? void 0 : n.start(...t);
    });
  }
  stop(...t) {
    this.mount().then(() => {
      var n;
      return (n = this.ref.current) == null ? void 0 : n.stop(...t);
    });
  }
  pulsate(...t) {
    this.mount().then(() => {
      var n;
      return (n = this.ref.current) == null ? void 0 : n.pulsate(...t);
    });
  }
}
function dl() {
  return Ht.use();
}
function pl() {
  let e, t;
  const n = new Promise((o, i) => {
    e = o, t = i;
  });
  return n.resolve = e, n.reject = t, n;
}
function Dn() {
  return Dn = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var o in n) ({}).hasOwnProperty.call(n, o) && (e[o] = n[o]);
    }
    return e;
  }, Dn.apply(null, arguments);
}
function Dr(e, t) {
  if (e == null) return {};
  var n = {};
  for (var o in e) if ({}.hasOwnProperty.call(e, o)) {
    if (t.indexOf(o) !== -1) continue;
    n[o] = e[o];
  }
  return n;
}
function Pn(e, t) {
  return Pn = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, o) {
    return n.__proto__ = o, n;
  }, Pn(e, t);
}
function Pr(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, Pn(e, t);
}
const Do = {
  disabled: !1
};
var fl = process.env.NODE_ENV !== "production" ? r.oneOfType([r.number, r.shape({
  enter: r.number,
  exit: r.number,
  appear: r.number
}).isRequired]) : null;
process.env.NODE_ENV !== "production" && r.oneOfType([r.string, r.shape({
  enter: r.string,
  exit: r.string,
  active: r.string
}), r.shape({
  enter: r.string,
  enterDone: r.string,
  enterActive: r.string,
  exit: r.string,
  exitDone: r.string,
  exitActive: r.string
})]);
const Gt = $e.createContext(null);
var gl = function(t) {
  return t.scrollTop;
}, Ct = "unmounted", qe = "exited", Xe = "entering", lt = "entered", Nn = "exiting", Be = /* @__PURE__ */ function(e) {
  Pr(t, e);
  function t(o, i) {
    var a;
    a = e.call(this, o, i) || this;
    var s = i, l = s && !s.isMounting ? o.enter : o.appear, c;
    return a.appearStatus = null, o.in ? l ? (c = qe, a.appearStatus = Xe) : c = lt : o.unmountOnExit || o.mountOnEnter ? c = Ct : c = qe, a.state = {
      status: c
    }, a.nextCallback = null, a;
  }
  t.getDerivedStateFromProps = function(i, a) {
    var s = i.in;
    return s && a.status === Ct ? {
      status: qe
    } : null;
  };
  var n = t.prototype;
  return n.componentDidMount = function() {
    this.updateStatus(!0, this.appearStatus);
  }, n.componentDidUpdate = function(i) {
    var a = null;
    if (i !== this.props) {
      var s = this.state.status;
      this.props.in ? s !== Xe && s !== lt && (a = Xe) : (s === Xe || s === lt) && (a = Nn);
    }
    this.updateStatus(!1, a);
  }, n.componentWillUnmount = function() {
    this.cancelNextCallback();
  }, n.getTimeouts = function() {
    var i = this.props.timeout, a, s, l;
    return a = s = l = i, i != null && typeof i != "number" && (a = i.exit, s = i.enter, l = i.appear !== void 0 ? i.appear : s), {
      exit: a,
      enter: s,
      appear: l
    };
  }, n.updateStatus = function(i, a) {
    if (i === void 0 && (i = !1), a !== null)
      if (this.cancelNextCallback(), a === Xe) {
        if (this.props.unmountOnExit || this.props.mountOnEnter) {
          var s = this.props.nodeRef ? this.props.nodeRef.current : Bt.findDOMNode(this);
          s && gl(s);
        }
        this.performEnter(i);
      } else
        this.performExit();
    else this.props.unmountOnExit && this.state.status === qe && this.setState({
      status: Ct
    });
  }, n.performEnter = function(i) {
    var a = this, s = this.props.enter, l = this.context ? this.context.isMounting : i, c = this.props.nodeRef ? [l] : [Bt.findDOMNode(this), l], d = c[0], p = c[1], f = this.getTimeouts(), g = l ? f.appear : f.enter;
    if (!i && !s || Do.disabled) {
      this.safeSetState({
        status: lt
      }, function() {
        a.props.onEntered(d);
      });
      return;
    }
    this.props.onEnter(d, p), this.safeSetState({
      status: Xe
    }, function() {
      a.props.onEntering(d, p), a.onTransitionEnd(g, function() {
        a.safeSetState({
          status: lt
        }, function() {
          a.props.onEntered(d, p);
        });
      });
    });
  }, n.performExit = function() {
    var i = this, a = this.props.exit, s = this.getTimeouts(), l = this.props.nodeRef ? void 0 : Bt.findDOMNode(this);
    if (!a || Do.disabled) {
      this.safeSetState({
        status: qe
      }, function() {
        i.props.onExited(l);
      });
      return;
    }
    this.props.onExit(l), this.safeSetState({
      status: Nn
    }, function() {
      i.props.onExiting(l), i.onTransitionEnd(s.exit, function() {
        i.safeSetState({
          status: qe
        }, function() {
          i.props.onExited(l);
        });
      });
    });
  }, n.cancelNextCallback = function() {
    this.nextCallback !== null && (this.nextCallback.cancel(), this.nextCallback = null);
  }, n.safeSetState = function(i, a) {
    a = this.setNextCallback(a), this.setState(i, a);
  }, n.setNextCallback = function(i) {
    var a = this, s = !0;
    return this.nextCallback = function(l) {
      s && (s = !1, a.nextCallback = null, i(l));
    }, this.nextCallback.cancel = function() {
      s = !1;
    }, this.nextCallback;
  }, n.onTransitionEnd = function(i, a) {
    this.setNextCallback(a);
    var s = this.props.nodeRef ? this.props.nodeRef.current : Bt.findDOMNode(this), l = i == null && !this.props.addEndListener;
    if (!s || l) {
      setTimeout(this.nextCallback, 0);
      return;
    }
    if (this.props.addEndListener) {
      var c = this.props.nodeRef ? [this.nextCallback] : [s, this.nextCallback], d = c[0], p = c[1];
      this.props.addEndListener(d, p);
    }
    i != null && setTimeout(this.nextCallback, i);
  }, n.render = function() {
    var i = this.state.status;
    if (i === Ct)
      return null;
    var a = this.props, s = a.children;
    a.in, a.mountOnEnter, a.unmountOnExit, a.appear, a.enter, a.exit, a.timeout, a.addEndListener, a.onEnter, a.onEntering, a.onEntered, a.onExit, a.onExiting, a.onExited, a.nodeRef;
    var l = Dr(a, ["children", "in", "mountOnEnter", "unmountOnExit", "appear", "enter", "exit", "timeout", "addEndListener", "onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited", "nodeRef"]);
    return (
      // allows for nested Transitions
      /* @__PURE__ */ $e.createElement(Gt.Provider, {
        value: null
      }, typeof s == "function" ? s(i, l) : $e.cloneElement($e.Children.only(s), l))
    );
  }, t;
}($e.Component);
Be.contextType = Gt;
Be.propTypes = process.env.NODE_ENV !== "production" ? {
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
  nodeRef: r.shape({
    current: typeof Element > "u" ? r.any : function(e, t, n, o, i, a) {
      var s = e[t];
      return r.instanceOf(s && "ownerDocument" in s ? s.ownerDocument.defaultView.Element : Element)(e, t, n, o, i, a);
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
  children: r.oneOfType([r.func.isRequired, r.element.isRequired]).isRequired,
  /**
   * Show the component; triggers the enter or exit states
   */
  in: r.bool,
  /**
   * By default the child component is mounted immediately along with
   * the parent `Transition` component. If you want to "lazy mount" the component on the
   * first `in={true}` you can set `mountOnEnter`. After the first enter transition the component will stay
   * mounted, even on "exited", unless you also specify `unmountOnExit`.
   */
  mountOnEnter: r.bool,
  /**
   * By default the child component stays mounted after it reaches the `'exited'` state.
   * Set `unmountOnExit` if you'd prefer to unmount the component after it finishes exiting.
   */
  unmountOnExit: r.bool,
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
  appear: r.bool,
  /**
   * Enable or disable enter transitions.
   */
  enter: r.bool,
  /**
   * Enable or disable exit transitions.
   */
  exit: r.bool,
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
    var n = fl;
    t.addEndListener || (n = n.isRequired);
    for (var o = arguments.length, i = new Array(o > 1 ? o - 1 : 0), a = 1; a < o; a++)
      i[a - 1] = arguments[a];
    return n.apply(void 0, [t].concat(i));
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
  addEndListener: r.func,
  /**
   * Callback fired before the "entering" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool) -> void
   */
  onEnter: r.func,
  /**
   * Callback fired after the "entering" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool)
   */
  onEntering: r.func,
  /**
   * Callback fired after the "entered" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool) -> void
   */
  onEntered: r.func,
  /**
   * Callback fired before the "exiting" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExit: r.func,
  /**
   * Callback fired after the "exiting" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExiting: r.func,
  /**
   * Callback fired after the "exited" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExited: r.func
} : {};
function st() {
}
Be.defaultProps = {
  in: !1,
  mountOnEnter: !1,
  unmountOnExit: !1,
  appear: !1,
  enter: !0,
  exit: !0,
  onEnter: st,
  onEntering: st,
  onEntered: st,
  onExit: st,
  onExiting: st,
  onExited: st
};
Be.UNMOUNTED = Ct;
Be.EXITED = qe;
Be.ENTERING = Xe;
Be.ENTERED = lt;
Be.EXITING = Nn;
function hl(e) {
  if (e === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function qn(e, t) {
  var n = function(a) {
    return t && jt(a) ? t(a) : a;
  }, o = /* @__PURE__ */ Object.create(null);
  return e && li.map(e, function(i) {
    return i;
  }).forEach(function(i) {
    o[i.key] = n(i);
  }), o;
}
function bl(e, t) {
  e = e || {}, t = t || {};
  function n(p) {
    return p in t ? t[p] : e[p];
  }
  var o = /* @__PURE__ */ Object.create(null), i = [];
  for (var a in e)
    a in t ? i.length && (o[a] = i, i = []) : i.push(a);
  var s, l = {};
  for (var c in t) {
    if (o[c])
      for (s = 0; s < o[c].length; s++) {
        var d = o[c][s];
        l[o[c][s]] = n(d);
      }
    l[c] = n(c);
  }
  for (s = 0; s < i.length; s++)
    l[i[s]] = n(i[s]);
  return l;
}
function Ze(e, t, n) {
  return n[t] != null ? n[t] : e.props[t];
}
function ml(e, t) {
  return qn(e.children, function(n) {
    return zt(n, {
      onExited: t.bind(null, n),
      in: !0,
      appear: Ze(n, "appear", e),
      enter: Ze(n, "enter", e),
      exit: Ze(n, "exit", e)
    });
  });
}
function yl(e, t, n) {
  var o = qn(e.children), i = bl(t, o);
  return Object.keys(i).forEach(function(a) {
    var s = i[a];
    if (jt(s)) {
      var l = a in t, c = a in o, d = t[a], p = jt(d) && !d.props.in;
      c && (!l || p) ? i[a] = zt(s, {
        onExited: n.bind(null, s),
        in: !0,
        exit: Ze(s, "exit", e),
        enter: Ze(s, "enter", e)
      }) : !c && l && !p ? i[a] = zt(s, {
        in: !1
      }) : c && l && jt(d) && (i[a] = zt(s, {
        onExited: n.bind(null, s),
        in: d.props.in,
        exit: Ze(s, "exit", e),
        enter: Ze(s, "enter", e)
      }));
    }
  }), i;
}
var vl = Object.values || function(e) {
  return Object.keys(e).map(function(t) {
    return e[t];
  });
}, Cl = {
  component: "div",
  childFactory: function(t) {
    return t;
  }
}, Xn = /* @__PURE__ */ function(e) {
  Pr(t, e);
  function t(o, i) {
    var a;
    a = e.call(this, o, i) || this;
    var s = a.handleExited.bind(hl(a));
    return a.state = {
      contextValue: {
        isMounting: !0
      },
      handleExited: s,
      firstRender: !0
    }, a;
  }
  var n = t.prototype;
  return n.componentDidMount = function() {
    this.mounted = !0, this.setState({
      contextValue: {
        isMounting: !1
      }
    });
  }, n.componentWillUnmount = function() {
    this.mounted = !1;
  }, t.getDerivedStateFromProps = function(i, a) {
    var s = a.children, l = a.handleExited, c = a.firstRender;
    return {
      children: c ? ml(i, l) : yl(i, s, l),
      firstRender: !1
    };
  }, n.handleExited = function(i, a) {
    var s = qn(this.props.children);
    i.key in s || (i.props.onExited && i.props.onExited(a), this.mounted && this.setState(function(l) {
      var c = Dn({}, l.children);
      return delete c[i.key], {
        children: c
      };
    }));
  }, n.render = function() {
    var i = this.props, a = i.component, s = i.childFactory, l = Dr(i, ["component", "childFactory"]), c = this.state.contextValue, d = vl(this.state.children).map(s);
    return delete l.appear, delete l.enter, delete l.exit, a === null ? /* @__PURE__ */ $e.createElement(Gt.Provider, {
      value: c
    }, d) : /* @__PURE__ */ $e.createElement(Gt.Provider, {
      value: c
    }, /* @__PURE__ */ $e.createElement(a, l, d));
  }, t;
}($e.Component);
Xn.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * `<TransitionGroup>` renders a `<div>` by default. You can change this
   * behavior by providing a `component` prop.
   * If you use React v16+ and would like to avoid a wrapping `<div>` element
   * you can pass in `component={null}`. This is useful if the wrapping div
   * borks your css styles.
   */
  component: r.any,
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
  children: r.node,
  /**
   * A convenience prop that enables or disables appear animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  appear: r.bool,
  /**
   * A convenience prop that enables or disables enter animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  enter: r.bool,
  /**
   * A convenience prop that enables or disables exit animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  exit: r.bool,
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
  childFactory: r.func
} : {};
Xn.defaultProps = Cl;
function Nr(e) {
  const {
    className: t,
    classes: n,
    pulsate: o = !1,
    rippleX: i,
    rippleY: a,
    rippleSize: s,
    in: l,
    onExited: c,
    timeout: d
  } = e, [p, f] = m.useState(!1), g = ee(t, n.ripple, n.rippleVisible, o && n.ripplePulsate), h = {
    width: s,
    height: s,
    top: -(s / 2) + a,
    left: -(s / 2) + i
  }, b = ee(n.child, p && n.childLeaving, o && n.childPulsate);
  return !l && !p && f(!0), m.useEffect(() => {
    if (!l && c != null) {
      const v = setTimeout(c, d);
      return () => {
        clearTimeout(v);
      };
    }
  }, [c, l, d]), /* @__PURE__ */ M("span", {
    className: g,
    style: h,
    children: /* @__PURE__ */ M("span", {
      className: b
    })
  });
}
process.env.NODE_ENV !== "production" && (Nr.propTypes = {
  /**
   * Override or extend the styles applied to the component.
   */
  classes: r.object.isRequired,
  className: r.string,
  /**
   * @ignore - injected from TransitionGroup
   */
  in: r.bool,
  /**
   * @ignore - injected from TransitionGroup
   */
  onExited: r.func,
  /**
   * If `true`, the ripple pulsates, typically indicating the keyboard focus state of an element.
   */
  pulsate: r.bool,
  /**
   * Diameter of the ripple.
   */
  rippleSize: r.number,
  /**
   * Horizontal position of the ripple center.
   */
  rippleX: r.number,
  /**
   * Vertical position of the ripple center.
   */
  rippleY: r.number,
  /**
   * exit delay
   */
  timeout: r.number.isRequired
});
const xe = ue("MuiTouchRipple", ["root", "ripple", "rippleVisible", "ripplePulsate", "child", "childLeaving", "childPulsate"]), $n = 550, El = 80, xl = Ft`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`, wl = Ft`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`, Al = Ft`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`, Sl = Y("span", {
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
}), Tl = Y(Nr, {
  name: "MuiTouchRipple",
  slot: "Ripple"
})`
  opacity: 0;
  position: absolute;

  &.${xe.rippleVisible} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${xl};
    animation-duration: ${$n}ms;
    animation-timing-function: ${({
  theme: e
}) => e.transitions.easing.easeInOut};
  }

  &.${xe.ripplePulsate} {
    animation-duration: ${({
  theme: e
}) => e.transitions.duration.shorter}ms;
  }

  & .${xe.child} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${xe.childLeaving} {
    opacity: 0;
    animation-name: ${wl};
    animation-duration: ${$n}ms;
    animation-timing-function: ${({
  theme: e
}) => e.transitions.easing.easeInOut};
  }

  & .${xe.childPulsate} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
    animation-name: ${Al};
    animation-duration: 2500ms;
    animation-timing-function: ${({
  theme: e
}) => e.transitions.easing.easeInOut};
    animation-iteration-count: infinite;
    animation-delay: 200ms;
  }
`, $r = /* @__PURE__ */ m.forwardRef(function(t, n) {
  const o = be({
    props: t,
    name: "MuiTouchRipple"
  }), {
    center: i = !1,
    classes: a = {},
    className: s,
    ...l
  } = o, [c, d] = m.useState([]), p = m.useRef(0), f = m.useRef(null);
  m.useEffect(() => {
    f.current && (f.current(), f.current = null);
  }, [c]);
  const g = m.useRef(!1), h = mr(), b = m.useRef(null), v = m.useRef(null), w = m.useCallback((y) => {
    const {
      pulsate: S,
      rippleX: B,
      rippleY: $,
      rippleSize: N,
      cb: H
    } = y;
    d((u) => [...u, /* @__PURE__ */ M(Tl, {
      classes: {
        ripple: ee(a.ripple, xe.ripple),
        rippleVisible: ee(a.rippleVisible, xe.rippleVisible),
        ripplePulsate: ee(a.ripplePulsate, xe.ripplePulsate),
        child: ee(a.child, xe.child),
        childLeaving: ee(a.childLeaving, xe.childLeaving),
        childPulsate: ee(a.childPulsate, xe.childPulsate)
      },
      timeout: $n,
      pulsate: S,
      rippleX: B,
      rippleY: $,
      rippleSize: N
    }, p.current)]), p.current += 1, f.current = H;
  }, [a]), E = m.useCallback((y = {}, S = {}, B = () => {
  }) => {
    const {
      pulsate: $ = !1,
      center: N = i || S.pulsate,
      fakeElement: H = !1
      // For test purposes
    } = S;
    if ((y == null ? void 0 : y.type) === "mousedown" && g.current) {
      g.current = !1;
      return;
    }
    (y == null ? void 0 : y.type) === "touchstart" && (g.current = !0);
    const u = H ? null : v.current, T = u ? u.getBoundingClientRect() : {
      width: 0,
      height: 0,
      left: 0,
      top: 0
    };
    let F, j, z;
    if (N || y === void 0 || y.clientX === 0 && y.clientY === 0 || !y.clientX && !y.touches)
      F = Math.round(T.width / 2), j = Math.round(T.height / 2);
    else {
      const {
        clientX: I,
        clientY: k
      } = y.touches && y.touches.length > 0 ? y.touches[0] : y;
      F = Math.round(I - T.left), j = Math.round(k - T.top);
    }
    if (N)
      z = Math.sqrt((2 * T.width ** 2 + T.height ** 2) / 3), z % 2 === 0 && (z += 1);
    else {
      const I = Math.max(Math.abs((u ? u.clientWidth : 0) - F), F) * 2 + 2, k = Math.max(Math.abs((u ? u.clientHeight : 0) - j), j) * 2 + 2;
      z = Math.sqrt(I ** 2 + k ** 2);
    }
    y != null && y.touches ? b.current === null && (b.current = () => {
      w({
        pulsate: $,
        rippleX: F,
        rippleY: j,
        rippleSize: z,
        cb: B
      });
    }, h.start(El, () => {
      b.current && (b.current(), b.current = null);
    })) : w({
      pulsate: $,
      rippleX: F,
      rippleY: j,
      rippleSize: z,
      cb: B
    });
  }, [i, w, h]), O = m.useCallback(() => {
    E({}, {
      pulsate: !0
    });
  }, [E]), C = m.useCallback((y, S) => {
    if (h.clear(), (y == null ? void 0 : y.type) === "touchend" && b.current) {
      b.current(), b.current = null, h.start(0, () => {
        C(y, S);
      });
      return;
    }
    b.current = null, d((B) => B.length > 0 ? B.slice(1) : B), f.current = S;
  }, [h]);
  return m.useImperativeHandle(n, () => ({
    pulsate: O,
    start: E,
    stop: C
  }), [O, E, C]), /* @__PURE__ */ M(Sl, {
    className: ee(xe.root, a.root, s),
    ref: v,
    ...l,
    children: /* @__PURE__ */ M(Xn, {
      component: null,
      exit: !0,
      children: c
    })
  });
});
process.env.NODE_ENV !== "production" && ($r.propTypes = {
  /**
   * If `true`, the ripple starts at the center of the component
   * rather than at the point of interaction.
   */
  center: r.bool,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: r.object,
  /**
   * @ignore
   */
  className: r.string
});
function Fl(e) {
  return pe("MuiButtonBase", e);
}
const Ol = ue("MuiButtonBase", ["root", "disabled", "focusVisible"]), kl = (e) => {
  const {
    disabled: t,
    focusVisible: n,
    focusVisibleClassName: o,
    classes: i
  } = e, s = he({
    root: ["root", t && "disabled", n && "focusVisible"]
  }, Fl, i);
  return n && o && (s.root += ` ${o}`), s;
}, Il = Y("button", {
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
  [`&.${Ol.disabled}`]: {
    pointerEvents: "none",
    // Disable link interactions
    cursor: "default"
  },
  "@media print": {
    colorAdjust: "exact"
  }
}), He = /* @__PURE__ */ m.forwardRef(function(t, n) {
  const o = be({
    props: t,
    name: "MuiButtonBase"
  }), {
    action: i,
    centerRipple: a = !1,
    children: s,
    className: l,
    component: c = "button",
    disabled: d = !1,
    disableRipple: p = !1,
    disableTouchRipple: f = !1,
    focusRipple: g = !1,
    focusVisibleClassName: h,
    LinkComponent: b = "a",
    onBlur: v,
    onClick: w,
    onContextMenu: E,
    onDragLeave: O,
    onFocus: C,
    onFocusVisible: y,
    onKeyDown: S,
    onKeyUp: B,
    onMouseDown: $,
    onMouseLeave: N,
    onMouseUp: H,
    onTouchEnd: u,
    onTouchMove: T,
    onTouchStart: F,
    tabIndex: j = 0,
    TouchRippleProps: z,
    touchRippleRef: I,
    type: k,
    ...G
  } = o, oe = m.useRef(null), D = dl(), A = Te(D.ref, I), [R, q] = m.useState(!1);
  d && R && q(!1), m.useImperativeHandle(i, () => ({
    focusVisible: () => {
      q(!0), oe.current.focus();
    }
  }), []);
  const J = D.shouldMount && !p && !d;
  m.useEffect(() => {
    R && g && !p && D.pulsate();
  }, [p, g, R, D]);
  const Q = De(D, "start", $, f), L = De(D, "stop", E, f), K = De(D, "stop", O, f), W = De(D, "stop", H, f), ne = De(D, "stop", (_) => {
    R && _.preventDefault(), N && N(_);
  }, f), re = De(D, "start", F, f), V = De(D, "stop", u, f), X = De(D, "stop", T, f), Z = De(D, "stop", (_) => {
    Ao(_.target) || q(!1), v && v(_);
  }, !1), fe = ut((_) => {
    oe.current || (oe.current = _.currentTarget), Ao(_.target) && (q(!0), y && y(_)), C && C(_);
  }), ke = () => {
    const _ = oe.current;
    return c && c !== "button" && !(_.tagName === "A" && _.href);
  }, ze = ut((_) => {
    g && !_.repeat && R && _.key === " " && D.stop(_, () => {
      D.start(_);
    }), _.target === _.currentTarget && ke() && _.key === " " && _.preventDefault(), S && S(_), _.target === _.currentTarget && ke() && _.key === "Enter" && !d && (_.preventDefault(), w && w(_));
  }), Rt = ut((_) => {
    g && _.key === " " && R && !_.defaultPrevented && D.stop(_, () => {
      D.pulsate(_);
    }), B && B(_), w && _.target === _.currentTarget && ke() && _.key === " " && !_.defaultPrevented && w(_);
  });
  let We = c;
  We === "button" && (G.href || G.to) && (We = b);
  const Ve = {};
  We === "button" ? (Ve.type = k === void 0 ? "button" : k, Ve.disabled = d) : (!G.href && !G.to && (Ve.role = "button"), d && (Ve["aria-disabled"] = d));
  const Ye = Te(n, oe), ft = {
    ...o,
    centerRipple: a,
    component: c,
    disabled: d,
    disableRipple: p,
    disableTouchRipple: f,
    focusRipple: g,
    tabIndex: j,
    focusVisible: R
  }, ve = kl(ft);
  return /* @__PURE__ */ Oe(Il, {
    as: We,
    className: ee(ve.root, l),
    ownerState: ft,
    onBlur: Z,
    onClick: w,
    onContextMenu: L,
    onFocus: fe,
    onKeyDown: ze,
    onKeyUp: Rt,
    onMouseDown: Q,
    onMouseLeave: ne,
    onMouseUp: W,
    onDragLeave: K,
    onTouchEnd: V,
    onTouchMove: X,
    onTouchStart: re,
    ref: Ye,
    tabIndex: d ? -1 : j,
    type: k,
    ...Ve,
    ...G,
    children: [s, J ? /* @__PURE__ */ M($r, {
      ref: A,
      center: a,
      ...z
    }) : null]
  });
});
function De(e, t, n, o = !1) {
  return ut((i) => (n && n(i), o || e[t](i), !0));
}
process.env.NODE_ENV !== "production" && (He.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * A ref for imperative actions.
   * It currently only supports `focusVisible()` action.
   */
  action: pn,
  /**
   * If `true`, the ripples are centered.
   * They won't start at the cursor interaction position.
   * @default false
   */
  centerRipple: r.bool,
  /**
   * The content of the component.
   */
  children: r.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: r.object,
  /**
   * @ignore
   */
  className: r.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: fr,
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: r.bool,
  /**
   * If `true`, the ripple effect is disabled.
   *
   * ⚠️ Without a ripple there is no styling for :focus-visible by default. Be sure
   * to highlight the element by applying separate styles with the `.Mui-focusVisible` class.
   * @default false
   */
  disableRipple: r.bool,
  /**
   * If `true`, the touch ripple effect is disabled.
   * @default false
   */
  disableTouchRipple: r.bool,
  /**
   * If `true`, the base button will have a keyboard focus ripple.
   * @default false
   */
  focusRipple: r.bool,
  /**
   * This prop can help identify which element has keyboard focus.
   * The class name will be applied when the element gains the focus through keyboard interaction.
   * It's a polyfill for the [CSS :focus-visible selector](https://drafts.csswg.org/selectors-4/#the-focus-visible-pseudo).
   * The rationale for using this feature [is explained here](https://github.com/WICG/focus-visible/blob/HEAD/explainer.md).
   * A [polyfill can be used](https://github.com/WICG/focus-visible) to apply a `focus-visible` class to other components
   * if needed.
   */
  focusVisibleClassName: r.string,
  /**
   * @ignore
   */
  href: r.any,
  /**
   * The component used to render a link when the `href` prop is provided.
   * @default 'a'
   */
  LinkComponent: r.elementType,
  /**
   * @ignore
   */
  onBlur: r.func,
  /**
   * @ignore
   */
  onClick: r.func,
  /**
   * @ignore
   */
  onContextMenu: r.func,
  /**
   * @ignore
   */
  onDragLeave: r.func,
  /**
   * @ignore
   */
  onFocus: r.func,
  /**
   * Callback fired when the component is focused with a keyboard.
   * We trigger a `onFocus` callback too.
   */
  onFocusVisible: r.func,
  /**
   * @ignore
   */
  onKeyDown: r.func,
  /**
   * @ignore
   */
  onKeyUp: r.func,
  /**
   * @ignore
   */
  onMouseDown: r.func,
  /**
   * @ignore
   */
  onMouseLeave: r.func,
  /**
   * @ignore
   */
  onMouseUp: r.func,
  /**
   * @ignore
   */
  onTouchEnd: r.func,
  /**
   * @ignore
   */
  onTouchMove: r.func,
  /**
   * @ignore
   */
  onTouchStart: r.func,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: r.oneOfType([r.arrayOf(r.oneOfType([r.func, r.object, r.bool])), r.func, r.object]),
  /**
   * @default 0
   */
  tabIndex: r.number,
  /**
   * Props applied to the `TouchRipple` element.
   */
  TouchRippleProps: r.object,
  /**
   * A ref that points to the `TouchRipple` element.
   */
  touchRippleRef: r.oneOfType([r.func, r.shape({
    current: r.shape({
      pulsate: r.func.isRequired,
      start: r.func.isRequired,
      stop: r.func.isRequired
    })
  })]),
  /**
   * @ignore
   */
  type: r.oneOfType([r.oneOf(["button", "reset", "submit"]), r.string])
});
function Rl(e) {
  return typeof e.main == "string";
}
function Bl(e, t = []) {
  if (!Rl(e))
    return !1;
  for (const n of t)
    if (!e.hasOwnProperty(n) || typeof e[n] != "string")
      return !1;
  return !0;
}
function Se(e = []) {
  return ([, t]) => t && Bl(t, e);
}
function Ml(e) {
  return pe("MuiCircularProgress", e);
}
ue("MuiCircularProgress", ["root", "determinate", "indeterminate", "colorPrimary", "colorSecondary", "svg", "circle", "circleDeterminate", "circleIndeterminate", "circleDisableShrink"]);
const Le = 44, jn = Ft`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`, zn = Ft`
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
`, Dl = typeof jn != "string" ? _o`
        animation: ${jn} 1.4s linear infinite;
      ` : null, Pl = typeof zn != "string" ? _o`
        animation: ${zn} 1.4s ease-in-out infinite;
      ` : null, Nl = (e) => {
  const {
    classes: t,
    variant: n,
    color: o,
    disableShrink: i
  } = e, a = {
    root: ["root", n, `color${P(o)}`],
    svg: ["svg"],
    circle: ["circle", `circle${P(n)}`, i && "circleDisableShrink"]
  };
  return he(a, Ml, t);
}, $l = Y("span", {
  name: "MuiCircularProgress",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, t[n.variant], t[`color${P(n.color)}`]];
  }
})(ge(({
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
    style: Dl || {
      animation: `${jn} 1.4s linear infinite`
    }
  }, ...Object.entries(e.palette).filter(Se()).map(([t]) => ({
    props: {
      color: t
    },
    style: {
      color: (e.vars || e).palette[t].main
    }
  }))]
}))), jl = Y("svg", {
  name: "MuiCircularProgress",
  slot: "Svg",
  overridesResolver: (e, t) => t.svg
})({
  display: "block"
  // Keeps the progress centered
}), zl = Y("circle", {
  name: "MuiCircularProgress",
  slot: "Circle",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.circle, t[`circle${P(n.variant)}`], n.disableShrink && t.circleDisableShrink];
  }
})(ge(({
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
    style: Pl || {
      // At runtime for Pigment CSS, `bufferAnimation` will be null and the generated keyframe will be used.
      animation: `${zn} 1.4s ease-in-out infinite`
    }
  }]
}))), Zn = /* @__PURE__ */ m.forwardRef(function(t, n) {
  const o = be({
    props: t,
    name: "MuiCircularProgress"
  }), {
    className: i,
    color: a = "primary",
    disableShrink: s = !1,
    size: l = 40,
    style: c,
    thickness: d = 3.6,
    value: p = 0,
    variant: f = "indeterminate",
    ...g
  } = o, h = {
    ...o,
    color: a,
    disableShrink: s,
    size: l,
    thickness: d,
    value: p,
    variant: f
  }, b = Nl(h), v = {}, w = {}, E = {};
  if (f === "determinate") {
    const O = 2 * Math.PI * ((Le - d) / 2);
    v.strokeDasharray = O.toFixed(3), E["aria-valuenow"] = Math.round(p), v.strokeDashoffset = `${((100 - p) / 100 * O).toFixed(3)}px`, w.transform = "rotate(-90deg)";
  }
  return /* @__PURE__ */ M($l, {
    className: ee(b.root, i),
    style: {
      width: l,
      height: l,
      ...w,
      ...c
    },
    ownerState: h,
    ref: n,
    role: "progressbar",
    ...E,
    ...g,
    children: /* @__PURE__ */ M(jl, {
      className: b.svg,
      ownerState: h,
      viewBox: `${Le / 2} ${Le / 2} ${Le} ${Le}`,
      children: /* @__PURE__ */ M(zl, {
        className: b.circle,
        style: v,
        ownerState: h,
        cx: Le,
        cy: Le,
        r: (Le - d) / 2,
        fill: "none",
        strokeWidth: d
      })
    })
  });
});
process.env.NODE_ENV !== "production" && (Zn.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Override or extend the styles applied to the component.
   */
  classes: r.object,
  /**
   * @ignore
   */
  className: r.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * @default 'primary'
   */
  color: r.oneOfType([r.oneOf(["inherit", "primary", "secondary", "error", "info", "success", "warning"]), r.string]),
  /**
   * If `true`, the shrink animation is disabled.
   * This only works if variant is `indeterminate`.
   * @default false
   */
  disableShrink: et(r.bool, (e) => e.disableShrink && e.variant && e.variant !== "indeterminate" ? new Error("MUI: You have provided the `disableShrink` prop with a variant other than `indeterminate`. This will have no effect.") : null),
  /**
   * The size of the component.
   * If using a number, the pixel unit is assumed.
   * If using a string, you need to provide the CSS unit, for example '3rem'.
   * @default 40
   */
  size: r.oneOfType([r.number, r.string]),
  /**
   * @ignore
   */
  style: r.object,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: r.oneOfType([r.arrayOf(r.oneOfType([r.func, r.object, r.bool])), r.func, r.object]),
  /**
   * The thickness of the circle.
   * @default 3.6
   */
  thickness: r.number,
  /**
   * The value of the progress indicator for the determinate variant.
   * Value between 0 and 100.
   * @default 0
   */
  value: r.number,
  /**
   * The variant to use.
   * Use indeterminate when there is no progress value.
   * @default 'indeterminate'
   */
  variant: r.oneOf(["determinate", "indeterminate"])
});
function Vl(e) {
  return pe("MuiButton", e);
}
const Je = ue("MuiButton", ["root", "text", "textInherit", "textPrimary", "textSecondary", "textSuccess", "textError", "textInfo", "textWarning", "outlined", "outlinedInherit", "outlinedPrimary", "outlinedSecondary", "outlinedSuccess", "outlinedError", "outlinedInfo", "outlinedWarning", "contained", "containedInherit", "containedPrimary", "containedSecondary", "containedSuccess", "containedError", "containedInfo", "containedWarning", "disableElevation", "focusVisible", "disabled", "colorInherit", "colorPrimary", "colorSecondary", "colorSuccess", "colorError", "colorInfo", "colorWarning", "textSizeSmall", "textSizeMedium", "textSizeLarge", "outlinedSizeSmall", "outlinedSizeMedium", "outlinedSizeLarge", "containedSizeSmall", "containedSizeMedium", "containedSizeLarge", "sizeMedium", "sizeSmall", "sizeLarge", "fullWidth", "startIcon", "endIcon", "icon", "iconSizeSmall", "iconSizeMedium", "iconSizeLarge", "loading", "loadingWrapper", "loadingIconPlaceholder", "loadingIndicator", "loadingPositionCenter", "loadingPositionStart", "loadingPositionEnd"]), jr = /* @__PURE__ */ m.createContext({});
process.env.NODE_ENV !== "production" && (jr.displayName = "ButtonGroupContext");
const zr = /* @__PURE__ */ m.createContext(void 0);
process.env.NODE_ENV !== "production" && (zr.displayName = "ButtonGroupButtonContext");
const Ll = (e) => {
  const {
    color: t,
    disableElevation: n,
    fullWidth: o,
    size: i,
    variant: a,
    loading: s,
    loadingPosition: l,
    classes: c
  } = e, d = {
    root: ["root", s && "loading", a, `${a}${P(t)}`, `size${P(i)}`, `${a}Size${P(i)}`, `color${P(t)}`, n && "disableElevation", o && "fullWidth", s && `loadingPosition${P(l)}`],
    startIcon: ["icon", "startIcon", `iconSize${P(i)}`],
    endIcon: ["icon", "endIcon", `iconSize${P(i)}`],
    loadingIndicator: ["loadingIndicator"],
    loadingWrapper: ["loadingWrapper"]
  }, p = he(d, Vl, c);
  return {
    ...c,
    // forward the focused, disabled, etc. classes to the ButtonBase
    ...p
  };
}, Vr = [{
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
}], Ul = Y(He, {
  shouldForwardProp: (e) => tt(e) || e === "classes",
  name: "MuiButton",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, t[n.variant], t[`${n.variant}${P(n.color)}`], t[`size${P(n.size)}`], t[`${n.variant}Size${P(n.size)}`], n.color === "inherit" && t.colorInherit, n.disableElevation && t.disableElevation, n.fullWidth && t.fullWidth, n.loading && t.loading];
  }
})(ge(({
  theme: e
}) => {
  const t = e.palette.mode === "light" ? e.palette.grey[300] : e.palette.grey[800], n = e.palette.mode === "light" ? e.palette.grey.A100 : e.palette.grey[700];
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
    [`&.${Je.disabled}`]: {
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
        [`&.${Je.focusVisible}`]: {
          boxShadow: (e.vars || e).shadows[6]
        },
        [`&.${Je.disabled}`]: {
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
        [`&.${Je.disabled}`]: {
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
    }, ...Object.entries(e.palette).filter(Se()).map(([o]) => ({
      props: {
        color: o
      },
      style: {
        "--variant-textColor": (e.vars || e).palette[o].main,
        "--variant-outlinedColor": (e.vars || e).palette[o].main,
        "--variant-outlinedBorder": e.vars ? `rgba(${e.vars.palette[o].mainChannel} / 0.5)` : U(e.palette[o].main, 0.5),
        "--variant-containedColor": (e.vars || e).palette[o].contrastText,
        "--variant-containedBg": (e.vars || e).palette[o].main,
        "@media (hover: hover)": {
          "&:hover": {
            "--variant-containedBg": (e.vars || e).palette[o].dark,
            "--variant-textBg": e.vars ? `rgba(${e.vars.palette[o].mainChannel} / ${e.vars.palette.action.hoverOpacity})` : U(e.palette[o].main, e.palette.action.hoverOpacity),
            "--variant-outlinedBorder": (e.vars || e).palette[o].main,
            "--variant-outlinedBg": e.vars ? `rgba(${e.vars.palette[o].mainChannel} / ${e.vars.palette.action.hoverOpacity})` : U(e.palette[o].main, e.palette.action.hoverOpacity)
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
            "--variant-containedBg": e.vars ? e.vars.palette.Button.inheritContainedHoverBg : n,
            "--variant-textBg": e.vars ? `rgba(${e.vars.palette.text.primaryChannel} / ${e.vars.palette.action.hoverOpacity})` : U(e.palette.text.primary, e.palette.action.hoverOpacity),
            "--variant-outlinedBg": e.vars ? `rgba(${e.vars.palette.text.primaryChannel} / ${e.vars.palette.action.hoverOpacity})` : U(e.palette.text.primary, e.palette.action.hoverOpacity)
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
        [`&.${Je.focusVisible}`]: {
          boxShadow: "none"
        },
        "&:active": {
          boxShadow: "none"
        },
        [`&.${Je.disabled}`]: {
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
        [`&.${Je.loading}`]: {
          color: "transparent"
        }
      }
    }]
  };
})), Ql = Y("span", {
  name: "MuiButton",
  slot: "StartIcon",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.startIcon, n.loading && t.startIconLoadingStart, t[`iconSize${P(n.size)}`]];
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
  }, ...Vr]
})), Kl = Y("span", {
  name: "MuiButton",
  slot: "EndIcon",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.endIcon, n.loading && t.endIconLoadingEnd, t[`iconSize${P(n.size)}`]];
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
  }, ...Vr]
})), Hl = Y("span", {
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
})), Po = Y("span", {
  name: "MuiButton",
  slot: "LoadingIconPlaceholder",
  overridesResolver: (e, t) => t.loadingIconPlaceholder
})({
  display: "inline-block",
  width: "1em",
  height: "1em"
}), Lr = /* @__PURE__ */ m.forwardRef(function(t, n) {
  const o = m.useContext(jr), i = m.useContext(zr), a = Qt(o, t), s = be({
    props: a,
    name: "MuiButton"
  }), {
    children: l,
    color: c = "primary",
    component: d = "button",
    className: p,
    disabled: f = !1,
    disableElevation: g = !1,
    disableFocusRipple: h = !1,
    endIcon: b,
    focusVisibleClassName: v,
    fullWidth: w = !1,
    id: E,
    loading: O = null,
    loadingIndicator: C,
    loadingPosition: y = "center",
    size: S = "medium",
    startIcon: B,
    type: $,
    variant: N = "text",
    ...H
  } = s, u = hr(E), T = C ?? /* @__PURE__ */ M(Zn, {
    "aria-labelledby": u,
    color: "inherit",
    size: 16
  }), F = {
    ...s,
    color: c,
    component: d,
    disabled: f,
    disableElevation: g,
    disableFocusRipple: h,
    fullWidth: w,
    loading: O,
    loadingIndicator: T,
    loadingPosition: y,
    size: S,
    type: $,
    variant: N
  }, j = Ll(F), z = (B || O && y === "start") && /* @__PURE__ */ M(Ql, {
    className: j.startIcon,
    ownerState: F,
    children: B || /* @__PURE__ */ M(Po, {
      className: j.loadingIconPlaceholder,
      ownerState: F
    })
  }), I = (b || O && y === "end") && /* @__PURE__ */ M(Kl, {
    className: j.endIcon,
    ownerState: F,
    children: b || /* @__PURE__ */ M(Po, {
      className: j.loadingIconPlaceholder,
      ownerState: F
    })
  }), k = i || "", G = typeof O == "boolean" ? (
    // use plain HTML span to minimize the runtime overhead
    /* @__PURE__ */ M("span", {
      className: j.loadingWrapper,
      style: {
        display: "contents"
      },
      children: O && /* @__PURE__ */ M(Hl, {
        className: j.loadingIndicator,
        ownerState: F,
        children: T
      })
    })
  ) : null;
  return /* @__PURE__ */ Oe(Ul, {
    ownerState: F,
    className: ee(o.className, j.root, p, k),
    component: d,
    disabled: f || O,
    focusRipple: !h,
    focusVisibleClassName: ee(j.focusVisible, v),
    ref: n,
    type: $,
    id: O ? u : E,
    ...H,
    classes: j,
    children: [z, y !== "end" && G, l, y === "end" && G, I]
  });
});
process.env.NODE_ENV !== "production" && (Lr.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: r.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: r.object,
  /**
   * @ignore
   */
  className: r.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * @default 'primary'
   */
  color: r.oneOfType([r.oneOf(["inherit", "primary", "secondary", "success", "error", "info", "warning"]), r.string]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: r.elementType,
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: r.bool,
  /**
   * If `true`, no elevation is used.
   * @default false
   */
  disableElevation: r.bool,
  /**
   * If `true`, the  keyboard focus ripple is disabled.
   * @default false
   */
  disableFocusRipple: r.bool,
  /**
   * If `true`, the ripple effect is disabled.
   *
   * ⚠️ Without a ripple there is no styling for :focus-visible by default. Be sure
   * to highlight the element by applying separate styles with the `.Mui-focusVisible` class.
   * @default false
   */
  disableRipple: r.bool,
  /**
   * Element placed after the children.
   */
  endIcon: r.node,
  /**
   * @ignore
   */
  focusVisibleClassName: r.string,
  /**
   * If `true`, the button will take up the full width of its container.
   * @default false
   */
  fullWidth: r.bool,
  /**
   * The URL to link to when the button is clicked.
   * If defined, an `a` element will be used as the root node.
   */
  href: r.string,
  /**
   * @ignore
   */
  id: r.string,
  /**
   * If `true`, the loading indicator is visible and the button is disabled.
   * If `true | false`, the loading wrapper is always rendered before the children to prevent [Google Translation Crash](https://github.com/mui/material-ui/issues/27853).
   * @default null
   */
  loading: r.bool,
  /**
   * Element placed before the children if the button is in loading state.
   * The node should contain an element with `role="progressbar"` with an accessible name.
   * By default, it renders a `CircularProgress` that is labeled by the button itself.
   * @default <CircularProgress color="inherit" size={16} />
   */
  loadingIndicator: r.node,
  /**
   * The loading indicator can be positioned on the start, end, or the center of the button.
   * @default 'center'
   */
  loadingPosition: r.oneOf(["center", "end", "start"]),
  /**
   * The size of the component.
   * `small` is equivalent to the dense button styling.
   * @default 'medium'
   */
  size: r.oneOfType([r.oneOf(["small", "medium", "large"]), r.string]),
  /**
   * Element placed before the children.
   */
  startIcon: r.node,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: r.oneOfType([r.arrayOf(r.oneOfType([r.func, r.object, r.bool])), r.func, r.object]),
  /**
   * @ignore
   */
  type: r.oneOfType([r.oneOf(["button", "reset", "submit"]), r.string]),
  /**
   * The variant to use.
   * @default 'text'
   */
  variant: r.oneOfType([r.oneOf(["contained", "outlined", "text"]), r.string])
});
const Gl = (e, t = "primary") => {
  var i;
  const n = Ae[t], o = ((i = e == null ? void 0 : e.palette) == null ? void 0 : i[t]) ?? n;
  return {
    disabledcolor: Ne[0],
    filled: {
      borderColor: "transparent",
      bgColor: o.custMain ?? n.custMain,
      //theme傳進來的顏色/fallback的顏色
      fontColor: o.onMain ?? n.onMain,
      overlay: o.onMain ?? n.onMain,
      focusBorderColor: "transparent",
      shadowColor: o.shadow ?? n.shadow
    },
    outlined: {
      borderColor: o.outline ?? n.outline,
      bgColor: "transparent",
      fontColor: o.custMain ?? n.custMain,
      overlay: o.custMain ?? n.custMain,
      focusBorderColor: o.custMain ?? n.custMain,
      shadowColor: "transparent"
    },
    text: {
      borderColor: "transparent",
      bgColor: "transparent",
      fontColor: o.custMain ?? n.custMain,
      overlay: o.custMain ?? n.custMain,
      focusBorderColor: "transparent",
      shadowColor: "transparent"
    },
    elevated: {
      borderColor: "transparent",
      bgColor: o.elevated ?? n.elevated,
      fontColor: o.custMain ?? n.custMain,
      overlay: o.custMain ?? n.custMain,
      focusBorderColor: "transparent",
      shadowColor: o.shadow ?? n.shadow
    },
    tonal: {
      borderColor: "transparent",
      bgColor: o.tonal ?? n.tonal,
      fontColor: o.onTonal ?? n.onTonal,
      overlay: o.onTonal ?? n.onTonal,
      focusBorderColor: "transparent",
      shadowColor: o.shadow ?? n.shadow
    }
  };
}, Wl = Y(Lr)(({
  "data-variant": e,
  size: t = "medium",
  theme: n,
  "data-color": o = "primary"
}) => {
  const i = Gl(n, o), s = [
    "filled",
    "outlined",
    "text",
    "elevated",
    "tonal"
  ].includes(
    e
  ) ? e : "filled", l = i[s], c = {
    small: {},
    medium: {
      fontSize: "14px",
      height: "40px"
    },
    large: {
      fontSize: "20px",
      height: "70px"
    }
  }[t], d = (p) => ({
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
      backgroundColor: p.overlay,
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
      color: U(i.disabledcolor, 0.38)
    },
    ...c
  });
  switch (s) {
    case "filled":
      return {
        ...d(l),
        backgroundColor: l.bgColor,
        color: l.fontColor,
        "&:hover": {
          boxShadow: `0px 1px 3px 1px ${U(l.shadowColor, 0.15)}, 0px 1px 2px 0px ${U(l.shadowColor, 0.3)}`
        },
        "&:active": {
          boxShadow: "none"
        },
        "&.Mui-disabled": {
          backgroundColor: U(i.disabledcolor, 0.12)
        }
      };
    case "outlined":
      return {
        ...d(l),
        border: `1px solid ${l.borderColor}`,
        color: l.fontColor,
        backgroundColor: l.bgColor,
        "&:focus-visible": {
          border: `1px solid ${l.fontColor}`
        },
        "&:active": {
          border: `1px solid ${l.borderColor}`
        }
      };
    case "text":
      return {
        ...d(l),
        backgroundColor: l.bgColor,
        color: l.fontColor,
        "&:focus-visible::before": {
          backgroundColor: U(l.overlay, 0.12)
        }
      };
    case "elevated":
      return {
        ...d(l),
        backgroundColor: l.bgColor,
        color: l.fontColor,
        boxShadow: `0px 1px 3px 1px ${U(l.shadowColor, 0.15)}, 0px 1px 2px 0px ${U(l.shadowColor, 0.3)}`,
        "&:hover": {
          boxShadow: `0px 2px 6px 2px ${U(l.shadowColor, 0.15)}, 0px 1px 2px 0px ${U(l.shadowColor, 0.3)}`
        },
        "&:active, &:focus-visible": {
          boxShadow: `0px 1px 3px 1px ${U(l.shadowColor, 0.15)}, 0px 1px 2px 0px ${U(l.shadowColor, 0.3)}`
        },
        "&.Mui-disabled": {
          backgroundColor: U(i.disabledcolor, 0.12)
        }
      };
    case "tonal":
      return {
        ...d(l),
        backgroundColor: l.bgColor,
        color: l.fontColor,
        "&:hover": {
          boxShadow: `0px 1px 3px 1px ${U(l.shadowColor, 0.15)}, 0px 1px 2px 0px ${U(l.shadowColor, 0.3)}`
        },
        "&:active": {
          boxShadow: "none"
        },
        "&.Mui-disabled": {
          backgroundColor: U(i.disabledcolor, 0.12)
        }
      };
  }
}), Gu = ({
  variant: e = "filled",
  color: t = "primary",
  ...n
}) => /* @__PURE__ */ M(
  Wl,
  {
    disableElevation: !0,
    disableRipple: !0,
    ...n,
    "data-color": t,
    "data-variant": e
  }
);
function Yl(e) {
  return pe("MuiFab", e);
}
const No = ue("MuiFab", ["root", "primary", "secondary", "extended", "circular", "focusVisible", "disabled", "colorInherit", "sizeSmall", "sizeMedium", "sizeLarge", "info", "error", "warning", "success"]), Jl = (e) => {
  const {
    color: t,
    variant: n,
    classes: o,
    size: i
  } = e, a = {
    root: ["root", n, `size${P(i)}`, t === "inherit" ? "colorInherit" : t]
  }, s = he(a, Yl, o);
  return {
    ...o,
    // forward the focused, disabled, etc. classes to the ButtonBase
    ...s
  };
}, ql = Y(He, {
  name: "MuiFab",
  slot: "Root",
  shouldForwardProp: (e) => tt(e) || e === "classes",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, t[n.variant], t[`size${P(n.size)}`], n.color === "inherit" && t.colorInherit, t[P(n.size)], t[n.color]];
  }
})(ge(({
  theme: e
}) => {
  var t, n;
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
    color: e.vars ? e.vars.palette.text.primary : (n = (t = e.palette).getContrastText) == null ? void 0 : n.call(t, e.palette.grey[300]),
    backgroundColor: (e.vars || e).palette.grey[300],
    "&:hover": {
      backgroundColor: (e.vars || e).palette.grey.A100,
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        backgroundColor: (e.vars || e).palette.grey[300]
      },
      textDecoration: "none"
    },
    [`&.${No.focusVisible}`]: {
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
}), ge(({
  theme: e
}) => ({
  variants: [...Object.entries(e.palette).filter(Se(["dark", "contrastText"])).map(([t]) => ({
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
})), ge(({
  theme: e
}) => ({
  [`&.${No.disabled}`]: {
    color: (e.vars || e).palette.action.disabled,
    boxShadow: (e.vars || e).shadows[0],
    backgroundColor: (e.vars || e).palette.action.disabledBackground
  }
}))), Ur = /* @__PURE__ */ m.forwardRef(function(t, n) {
  const o = be({
    props: t,
    name: "MuiFab"
  }), {
    children: i,
    className: a,
    color: s = "default",
    component: l = "button",
    disabled: c = !1,
    disableFocusRipple: d = !1,
    focusVisibleClassName: p,
    size: f = "large",
    variant: g = "circular",
    ...h
  } = o, b = {
    ...o,
    color: s,
    component: l,
    disabled: c,
    disableFocusRipple: d,
    size: f,
    variant: g
  }, v = Jl(b);
  return /* @__PURE__ */ M(ql, {
    className: ee(v.root, a),
    component: l,
    disabled: c,
    focusRipple: !d,
    focusVisibleClassName: ee(v.focusVisible, p),
    ownerState: b,
    ref: n,
    ...h,
    classes: v,
    children: i
  });
});
process.env.NODE_ENV !== "production" && (Ur.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: r.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: r.object,
  /**
   * @ignore
   */
  className: r.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * @default 'default'
   */
  color: r.oneOfType([r.oneOf(["default", "error", "info", "inherit", "primary", "secondary", "success", "warning"]), r.string]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: r.elementType,
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: r.bool,
  /**
   * If `true`, the  keyboard focus ripple is disabled.
   * @default false
   */
  disableFocusRipple: r.bool,
  /**
   * If `true`, the ripple effect is disabled.
   */
  disableRipple: r.bool,
  /**
   * @ignore
   */
  focusVisibleClassName: r.string,
  /**
   * The URL to link to when the button is clicked.
   * If defined, an `a` element will be used as the root node.
   */
  href: r.string,
  /**
   * The size of the component.
   * `small` is equivalent to the dense button styling.
   * @default 'large'
   */
  size: r.oneOfType([r.oneOf(["small", "medium", "large"]), r.string]),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: r.oneOfType([r.arrayOf(r.oneOfType([r.func, r.object, r.bool])), r.func, r.object]),
  /**
   * The variant to use.
   * @default 'circular'
   */
  variant: r.oneOfType([r.oneOf(["circular", "extended"]), r.string])
});
const Xl = (e, t = "primary") => {
  var i;
  const n = Ae[t], o = ((i = e == null ? void 0 : e.palette) == null ? void 0 : i[t]) ?? n;
  return {
    bgColor: o.fabBg ?? n.fabBg,
    fontColor: o.fabFont ?? n.fabFont,
    overlay: o.fabFont ?? n.fabFont
  };
}, Zl = Y(Ur)(({ "data-color": e, size: t = "medium", variant: n, theme: o }) => {
  const i = Xl(o, e), a = {
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
  }[t], s = n === "extended";
  return {
    fontFamily: "'Noto Sans', 'Noto Sans TC', sans-serif;",
    fontWeight: 500,
    textTransform: "none",
    position: "relative",
    backgroundColor: i.bgColor,
    color: i.fontColor,
    borderRadius: s ? "6px" : "50%",
    ...s ? {} : a,
    "&::before": {
      content: '""',
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      backgroundColor: i.overlay,
      borderRadius: s ? "6px" : "50%",
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
}), Wu = ({ color: e = "surface", ...t }) => /* @__PURE__ */ M(Zl, { "data-color": e, size: "medium", disableFocusRipple: !0, ...t });
function _l(e) {
  return pe("MuiIconButton", e);
}
const $o = ue("MuiIconButton", ["root", "disabled", "colorInherit", "colorPrimary", "colorSecondary", "colorError", "colorInfo", "colorSuccess", "colorWarning", "edgeStart", "edgeEnd", "sizeSmall", "sizeMedium", "sizeLarge", "loading", "loadingIndicator", "loadingWrapper"]), ec = (e) => {
  const {
    classes: t,
    disabled: n,
    color: o,
    edge: i,
    size: a,
    loading: s
  } = e, l = {
    root: ["root", s && "loading", n && "disabled", o !== "default" && `color${P(o)}`, i && `edge${P(i)}`, `size${P(a)}`],
    loadingIndicator: ["loadingIndicator"],
    loadingWrapper: ["loadingWrapper"]
  };
  return he(l, _l, t);
}, tc = Y(He, {
  name: "MuiIconButton",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, n.loading && t.loading, n.color !== "default" && t[`color${P(n.color)}`], n.edge && t[`edge${P(n.edge)}`], t[`size${P(n.size)}`]];
  }
})(ge(({
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
      "--IconButton-hoverBg": e.vars ? `rgba(${e.vars.palette.action.activeChannel} / ${e.vars.palette.action.hoverOpacity})` : U(e.palette.action.active, e.palette.action.hoverOpacity),
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
})), ge(({
  theme: e
}) => ({
  variants: [{
    props: {
      color: "inherit"
    },
    style: {
      color: "inherit"
    }
  }, ...Object.entries(e.palette).filter(Se()).map(([t]) => ({
    props: {
      color: t
    },
    style: {
      color: (e.vars || e).palette[t].main
    }
  })), ...Object.entries(e.palette).filter(Se()).map(([t]) => ({
    props: {
      color: t
    },
    style: {
      "--IconButton-hoverBg": e.vars ? `rgba(${(e.vars || e).palette[t].mainChannel} / ${e.vars.palette.action.hoverOpacity})` : U((e.vars || e).palette[t].main, e.palette.action.hoverOpacity)
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
  [`&.${$o.disabled}`]: {
    backgroundColor: "transparent",
    color: (e.vars || e).palette.action.disabled
  },
  [`&.${$o.loading}`]: {
    color: "transparent"
  }
}))), nc = Y("span", {
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
})), _n = /* @__PURE__ */ m.forwardRef(function(t, n) {
  const o = be({
    props: t,
    name: "MuiIconButton"
  }), {
    edge: i = !1,
    children: a,
    className: s,
    color: l = "default",
    disabled: c = !1,
    disableFocusRipple: d = !1,
    size: p = "medium",
    id: f,
    loading: g = null,
    loadingIndicator: h,
    ...b
  } = o, v = hr(f), w = h ?? /* @__PURE__ */ M(Zn, {
    "aria-labelledby": v,
    color: "inherit",
    size: 16
  }), E = {
    ...o,
    edge: i,
    color: l,
    disabled: c,
    disableFocusRipple: d,
    loading: g,
    loadingIndicator: w,
    size: p
  }, O = ec(E);
  return /* @__PURE__ */ Oe(tc, {
    id: g ? v : f,
    className: ee(O.root, s),
    centerRipple: !0,
    focusRipple: !d,
    disabled: c || g,
    ref: n,
    ...b,
    ownerState: E,
    children: [typeof g == "boolean" && // use plain HTML span to minimize the runtime overhead
    /* @__PURE__ */ M("span", {
      className: O.loadingWrapper,
      style: {
        display: "contents"
      },
      children: /* @__PURE__ */ M(nc, {
        className: O.loadingIndicator,
        ownerState: E,
        children: g && w
      })
    }), a]
  });
});
process.env.NODE_ENV !== "production" && (_n.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The icon to display.
   */
  children: et(r.node, (e) => m.Children.toArray(e.children).some((n) => /* @__PURE__ */ m.isValidElement(n) && n.props.onClick) ? new Error(["MUI: You are providing an onClick event listener to a child of a button element.", "Prefer applying it to the IconButton directly.", "This guarantees that the whole <button> will be responsive to click events."].join(`
`)) : null),
  /**
   * Override or extend the styles applied to the component.
   */
  classes: r.object,
  /**
   * @ignore
   */
  className: r.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * @default 'default'
   */
  color: r.oneOfType([r.oneOf(["inherit", "default", "primary", "secondary", "error", "info", "success", "warning"]), r.string]),
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: r.bool,
  /**
   * If `true`, the  keyboard focus ripple is disabled.
   * @default false
   */
  disableFocusRipple: r.bool,
  /**
   * If `true`, the ripple effect is disabled.
   *
   * ⚠️ Without a ripple there is no styling for :focus-visible by default. Be sure
   * to highlight the element by applying separate styles with the `.Mui-focusVisible` class.
   * @default false
   */
  disableRipple: r.bool,
  /**
   * If given, uses a negative margin to counteract the padding on one
   * side (this is often helpful for aligning the left or right
   * side of the icon with content above or below, without ruining the border
   * size and shape).
   * @default false
   */
  edge: r.oneOf(["end", "start", !1]),
  /**
   * @ignore
   */
  id: r.string,
  /**
   * If `true`, the loading indicator is visible and the button is disabled.
   * If `true | false`, the loading wrapper is always rendered before the children to prevent [Google Translation Crash](https://github.com/mui/material-ui/issues/27853).
   * @default null
   */
  loading: r.bool,
  /**
   * Element placed before the children if the button is in loading state.
   * The node should contain an element with `role="progressbar"` with an accessible name.
   * By default, it renders a `CircularProgress` that is labeled by the button itself.
   * @default <CircularProgress color="inherit" size={16} />
   */
  loadingIndicator: r.node,
  /**
   * The size of the component.
   * `small` is equivalent to the dense button styling.
   * @default 'medium'
   */
  size: r.oneOfType([r.oneOf(["small", "medium", "large"]), r.string]),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: r.oneOfType([r.arrayOf(r.oneOfType([r.func, r.object, r.bool])), r.func, r.object])
});
const oc = (e, t = "primary") => {
  var i;
  const n = Ae[t], o = ((i = e == null ? void 0 : e.palette) == null ? void 0 : i[t]) ?? n;
  return {
    disabledcolor: Ne[0],
    filled: {
      bgColor: o.custMain ?? n.custMain,
      fontColor: o.onMain ?? n.onMain,
      overlay: o.onMain ?? n.onMain,
      borderColor: "transparent"
    },
    standard: {
      bgColor: "transparent",
      fontColor: o.iconFont ?? n.iconFont,
      overlay: o.iconOverlay ?? n.iconOverlay,
      borderColor: "transparent"
    },
    tonal: {
      bgColor: o.tonal ?? n.tonal,
      fontColor: o.iconFont ?? n.iconFont,
      overlay: o.onTonal ?? n.onTonal,
      borderColor: "transparent"
    },
    outlined: {
      bgColor: "transparent",
      fontColor: o.iconFont ?? n.iconFont,
      overlay: o.iconOverlay ?? n.iconOverlay,
      borderColor: o.outline ?? n.outline
    }
  };
}, rc = (e, t = "primary") => {
  var i;
  const n = Ae[t], o = ((i = e == null ? void 0 : e.palette) == null ? void 0 : i[t]) ?? n;
  return {
    disabledcolor: Ne[0],
    filled: {
      bgColor: o.surface ?? n.surface,
      fontColor: o.custMain ?? n.custMain,
      overlay: o.custMain ?? n.custMain,
      selectedBgColor: o.custMain ?? n.custMain,
      selectedFontColor: o.onMain ?? n.onMain,
      selectedOverlay: o.onMain ?? n.onMain,
      borderColor: "transparent"
    },
    standard: {
      bgColor: "transparent",
      fontColor: o.custMain ?? n.custMain,
      overlay: o.iconOverlay ?? n.iconOverlay,
      selectedBgColor: "transparent",
      selectedFontColor: o.custMain ?? n.custMain,
      selectedOverlay: o.custMain ?? n.custMain,
      borderColor: "transparent"
    },
    tonal: {
      bgColor: o.surface ?? n.surface,
      fontColor: o.onTonal ?? n.onTonal,
      overlay: o.iconOverlay ?? n.iconOverlay,
      selectedBgColor: o.tonal ?? n.tonal,
      selectedFontColor: o.onTonal ?? n.onTonal,
      selectedOverlay: o.onTonal ?? n.onTonal,
      borderColor: "transparent"
    },
    outlined: {
      bgColor: "transparent",
      fontColor: o.iconFont ?? n.iconFont,
      overlay: o.iconOverlay ?? n.iconOverlay,
      selectedBgColor: o.neutral ?? n.neutral,
      selectedFontColor: o.onMain ?? n.onMain,
      selectedOverlay: o.onMain ?? n.onMain,
      borderColor: o.outline ?? n.outline
    }
  };
}, ic = Y(_n)(({
  "data-variant": e,
  "data-color": t,
  size: n = "small",
  theme: o
}) => {
  const i = oc(o, t), a = ["filled", "standard", "tonal", "outlined"].includes(e) ? e : "filled", s = i[a], l = {
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
  }[n], c = () => ({
    backgroundColor: s.bgColor,
    color: s.fontColor,
    borderRadius: 6,
    ...l,
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
      backgroundColor: U(i.disabledcolor, 0.08),
      color: U(i.disabledcolor, 0.38)
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
  switch (a) {
    case "filled":
      return {
        ...c(),
        "&:hover": {
          backgroundColor: s.bgColor
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
          backgroundColor: s.bgColor
        }
      };
    case "outlined":
      return {
        ...c(),
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
}), ac = Y(_n)(({
  "data-variant": e,
  "data-color": t,
  clicked: n,
  size: o = "small",
  theme: i
}) => {
  const a = rc(i, t), s = ["filled", "standard", "tonal", "outlined"].includes(e) ? e : "filled", l = a[s], c = {
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
  }[o], d = () => ({
    backgroundColor: n ? l.selectedBgColor : l.bgColor,
    color: n ? l.selectedFontColor : l.fontColor,
    borderRadius: 6,
    ...c,
    "&::before": {
      content: '""',
      position: "absolute",
      left: 0,
      top: 0,
      width: "100%",
      height: "100%",
      backgroundColor: n ? l.selectedOverlay : l.overlay,
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
      backgroundColor: U(a.disabledcolor, 0.12),
      color: U(a.disabledcolor, 0.38)
    },
    "&:hover": {
      backgroundColor: n ? l.selectedBgColor : l.bgColor
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
        ...d()
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
        "&.Mui-disabled": {
          backgroundColor: U(a.disabledcolor, 0.08),
          color: U(
            n ? l.selectedFontColor : l.fontColor,
            0.38
          )
        }
      };
    case "outlined":
      return {
        ...d(),
        border: n ? "" : `1px solid ${l.borderColor}`,
        "&.Mui-disabled": {
          backgroundColor: n ? U(a.disabledcolor, 0.12) : "transparent"
        },
        "&:hover": {
          border: n ? "" : `1px solid ${l.borderColor}`
        }
      };
  }
}), Yu = ({
  variant: e,
  toggleIcon: t,
  children: n,
  color: o = "primary",
  ...i
}) => {
  const [a, s] = Jo(!1), l = () => {
    console.log("toggleClick"), s(!a);
  };
  return t ? /* @__PURE__ */ M(
    ac,
    {
      disableRipple: !0,
      "data-color": o,
      "data-variant": e,
      ...i,
      onClick: l,
      clicked: a,
      children: a ? n : t
    }
  ) : /* @__PURE__ */ M(
    ic,
    {
      disableRipple: !0,
      "data-color": o,
      "data-variant": e,
      ...i,
      children: n
    }
  );
}, Qr = /* @__PURE__ */ m.createContext(void 0);
process.env.NODE_ENV !== "production" && (Qr.displayName = "FormControlContext");
function sc() {
  return m.useContext(Qr);
}
function lc(e) {
  return pe("PrivateSwitchBase", e);
}
ue("PrivateSwitchBase", ["root", "checked", "disabled", "input", "edgeStart", "edgeEnd"]);
const cc = (e) => {
  const {
    classes: t,
    checked: n,
    disabled: o,
    edge: i
  } = e, a = {
    root: ["root", n && "checked", o && "disabled", i && `edge${P(i)}`],
    input: ["input"]
  };
  return he(a, lc, t);
}, uc = Y(He)({
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
}), dc = Y("input", {
  shouldForwardProp: tt
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
}), eo = /* @__PURE__ */ m.forwardRef(function(t, n) {
  const {
    autoFocus: o,
    checked: i,
    checkedIcon: a,
    defaultChecked: s,
    disabled: l,
    disableFocusRipple: c = !1,
    edge: d = !1,
    icon: p,
    id: f,
    inputProps: g,
    inputRef: h,
    name: b,
    onBlur: v,
    onChange: w,
    onFocus: E,
    readOnly: O,
    required: C = !1,
    tabIndex: y,
    type: S,
    value: B,
    slots: $ = {},
    slotProps: N = {},
    ...H
  } = t, [u, T] = os({
    controlled: i,
    default: !!s,
    name: "SwitchBase",
    state: "checked"
  }), F = sc(), j = (L) => {
    E && E(L), F && F.onFocus && F.onFocus(L);
  }, z = (L) => {
    v && v(L), F && F.onBlur && F.onBlur(L);
  }, I = (L) => {
    if (L.nativeEvent.defaultPrevented)
      return;
    const K = L.target.checked;
    T(K), w && w(L, K);
  };
  let k = l;
  F && typeof k > "u" && (k = F.disabled);
  const G = S === "checkbox" || S === "radio", oe = {
    ...t,
    checked: u,
    disabled: k,
    disableFocusRipple: c,
    edge: d
  }, D = cc(oe), A = {
    slots: $,
    slotProps: {
      input: g,
      ...N
    }
  }, [R, q] = me("root", {
    ref: n,
    elementType: uc,
    className: D.root,
    shouldForwardComponentProp: !0,
    externalForwardedProps: {
      ...A,
      component: "span",
      ...H
    },
    getSlotProps: (L) => ({
      ...L,
      onFocus: (K) => {
        var W;
        (W = L.onFocus) == null || W.call(L, K), j(K);
      },
      onBlur: (K) => {
        var W;
        (W = L.onBlur) == null || W.call(L, K), z(K);
      }
    }),
    ownerState: oe,
    additionalProps: {
      centerRipple: !0,
      focusRipple: !c,
      disabled: k,
      role: void 0,
      tabIndex: null
    }
  }), [J, Q] = me("input", {
    ref: h,
    elementType: dc,
    className: D.input,
    externalForwardedProps: A,
    getSlotProps: (L) => ({
      onChange: (K) => {
        var W;
        (W = L.onChange) == null || W.call(L, K), I(K);
      }
    }),
    ownerState: oe,
    additionalProps: {
      autoFocus: o,
      checked: i,
      defaultChecked: s,
      disabled: k,
      id: G ? f : void 0,
      name: b,
      readOnly: O,
      required: C,
      tabIndex: y,
      type: S,
      ...S === "checkbox" && B === void 0 ? {} : {
        value: B
      }
    }
  });
  return /* @__PURE__ */ Oe(R, {
    ...q,
    children: [/* @__PURE__ */ M(J, {
      ...Q
    }), u ? a : p]
  });
});
process.env.NODE_ENV !== "production" && (eo.propTypes = {
  /**
   * If `true`, the `input` element is focused during the first mount.
   */
  autoFocus: r.bool,
  /**
   * If `true`, the component is checked.
   */
  checked: r.bool,
  /**
   * The icon to display when the component is checked.
   */
  checkedIcon: r.node.isRequired,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: r.object,
  /**
   * @ignore
   */
  className: r.string,
  /**
   * @ignore
   */
  defaultChecked: r.bool,
  /**
   * If `true`, the component is disabled.
   */
  disabled: r.bool,
  /**
   * If `true`, the  keyboard focus ripple is disabled.
   * @default false
   */
  disableFocusRipple: r.bool,
  /**
   * If given, uses a negative margin to counteract the padding on one
   * side (this is often helpful for aligning the left or right
   * side of the icon with content above or below, without ruining the border
   * size and shape).
   * @default false
   */
  edge: r.oneOf(["end", "start", !1]),
  /**
   * The icon to display when the component is unchecked.
   */
  icon: r.node.isRequired,
  /**
   * The id of the `input` element.
   */
  id: r.string,
  /**
   * [Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Attributes) applied to the `input` element.
   */
  inputProps: r.object,
  /**
   * Pass a ref to the `input` element.
   */
  inputRef: pn,
  /*
   * @ignore
   */
  name: r.string,
  /**
   * @ignore
   */
  onBlur: r.func,
  /**
   * Callback fired when the state is changed.
   *
   * @param {object} event The event source of the callback.
   * You can pull out the new checked state by accessing `event.target.checked` (boolean).
   */
  onChange: r.func,
  /**
   * @ignore
   */
  onFocus: r.func,
  /**
   * It prevents the user from changing the value of the field
   * (not from interacting with the field).
   */
  readOnly: r.bool,
  /**
   * If `true`, the `input` element is required.
   */
  required: r.bool,
  /**
   * The props used for each slot inside.
   * @default {}
   */
  slotProps: r.shape({
    input: r.oneOfType([r.func, r.object]),
    root: r.oneOfType([r.func, r.object])
  }),
  /**
   * The components used for each slot inside.
   * @default {}
   */
  slots: r.shape({
    input: r.elementType,
    root: r.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: r.object,
  /**
   * @ignore
   */
  tabIndex: r.oneOfType([r.number, r.string]),
  /**
   * The input component prop `type`.
   */
  type: r.string.isRequired,
  /**
   * The value of the component.
   */
  value: r.any
});
const pc = pt(/* @__PURE__ */ M("path", {
  d: "M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"
}), "CheckBoxOutlineBlank"), fc = pt(/* @__PURE__ */ M("path", {
  d: "M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"
}), "CheckBox"), gc = pt(/* @__PURE__ */ M("path", {
  d: "M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"
}), "IndeterminateCheckBox");
function hc(e) {
  return pe("MuiCheckbox", e);
}
const Sn = ue("MuiCheckbox", ["root", "checked", "disabled", "indeterminate", "colorPrimary", "colorSecondary", "sizeSmall", "sizeMedium"]), bc = (e) => {
  const {
    classes: t,
    indeterminate: n,
    color: o,
    size: i
  } = e, a = {
    root: ["root", n && "indeterminate", `color${P(o)}`, `size${P(i)}`]
  }, s = he(a, hc, t);
  return {
    ...t,
    // forward the disabled and checked classes to the SwitchBase
    ...s
  };
}, mc = Y(eo, {
  shouldForwardProp: (e) => tt(e) || e === "classes",
  name: "MuiCheckbox",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, n.indeterminate && t.indeterminate, t[`size${P(n.size)}`], n.color !== "default" && t[`color${P(n.color)}`]];
  }
})(ge(({
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
        backgroundColor: e.vars ? `rgba(${e.vars.palette.action.activeChannel} / ${e.vars.palette.action.hoverOpacity})` : U(e.palette.action.active, e.palette.action.hoverOpacity)
      }
    }
  }, ...Object.entries(e.palette).filter(Se()).map(([t]) => ({
    props: {
      color: t,
      disableRipple: !1
    },
    style: {
      "&:hover": {
        backgroundColor: e.vars ? `rgba(${e.vars.palette[t].mainChannel} / ${e.vars.palette.action.hoverOpacity})` : U(e.palette[t].main, e.palette.action.hoverOpacity)
      }
    }
  })), ...Object.entries(e.palette).filter(Se()).map(([t]) => ({
    props: {
      color: t
    },
    style: {
      [`&.${Sn.checked}, &.${Sn.indeterminate}`]: {
        color: (e.vars || e).palette[t].main
      },
      [`&.${Sn.disabled}`]: {
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
}))), yc = /* @__PURE__ */ M(fc, {}), vc = /* @__PURE__ */ M(pc, {}), Cc = /* @__PURE__ */ M(gc, {}), Kr = /* @__PURE__ */ m.forwardRef(function(t, n) {
  const o = be({
    props: t,
    name: "MuiCheckbox"
  }), {
    checkedIcon: i = yc,
    color: a = "primary",
    icon: s = vc,
    indeterminate: l = !1,
    indeterminateIcon: c = Cc,
    inputProps: d,
    size: p = "medium",
    disableRipple: f = !1,
    className: g,
    slots: h = {},
    slotProps: b = {},
    ...v
  } = o, w = l ? c : s, E = l ? c : i, O = {
    ...o,
    disableRipple: f,
    color: a,
    indeterminate: l,
    size: p
  }, C = bc(O), y = b.input ?? d, [S, B] = me("root", {
    ref: n,
    elementType: mc,
    className: ee(C.root, g),
    shouldForwardComponentProp: !0,
    externalForwardedProps: {
      slots: h,
      slotProps: b,
      ...v
    },
    ownerState: O,
    additionalProps: {
      type: "checkbox",
      icon: /* @__PURE__ */ m.cloneElement(w, {
        fontSize: w.props.fontSize ?? p
      }),
      checkedIcon: /* @__PURE__ */ m.cloneElement(E, {
        fontSize: E.props.fontSize ?? p
      }),
      disableRipple: f,
      slots: h,
      slotProps: {
        input: Mr(typeof y == "function" ? y(O) : y, {
          "data-indeterminate": l
        })
      }
    }
  });
  return /* @__PURE__ */ M(S, {
    ...B,
    classes: C
  });
});
process.env.NODE_ENV !== "production" && (Kr.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * If `true`, the component is checked.
   */
  checked: r.bool,
  /**
   * The icon to display when the component is checked.
   * @default <CheckBoxIcon />
   */
  checkedIcon: r.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: r.object,
  /**
   * @ignore
   */
  className: r.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * @default 'primary'
   */
  color: r.oneOfType([r.oneOf(["default", "primary", "secondary", "error", "info", "success", "warning"]), r.string]),
  /**
   * The default checked state. Use when the component is not controlled.
   */
  defaultChecked: r.bool,
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: r.bool,
  /**
   * If `true`, the ripple effect is disabled.
   * @default false
   */
  disableRipple: r.bool,
  /**
   * The icon to display when the component is unchecked.
   * @default <CheckBoxOutlineBlankIcon />
   */
  icon: r.node,
  /**
   * The id of the `input` element.
   */
  id: r.string,
  /**
   * If `true`, the component appears indeterminate.
   * This does not set the native input element to indeterminate due
   * to inconsistent behavior across browsers.
   * However, we set a `data-indeterminate` attribute on the `input`.
   * @default false
   */
  indeterminate: r.bool,
  /**
   * The icon to display when the component is indeterminate.
   * @default <IndeterminateCheckBoxIcon />
   */
  indeterminateIcon: r.node,
  /**
   * [Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Attributes) applied to the `input` element.
   * @deprecated Use `slotProps.input` instead. This prop will be removed in v7. See [Migrating from deprecated APIs](/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   */
  inputProps: r.object,
  /**
   * Callback fired when the state is changed.
   *
   * @param {React.ChangeEvent<HTMLInputElement>} event The event source of the callback.
   * You can pull out the new checked state by accessing `event.target.checked` (boolean).
   */
  onChange: r.func,
  /**
   * If `true`, the `input` element is required.
   * @default false
   */
  required: r.bool,
  /**
   * The size of the component.
   * `small` is equivalent to the dense checkbox styling.
   * @default 'medium'
   */
  size: r.oneOfType([r.oneOf(["medium", "small"]), r.string]),
  /**
   * The props used for each slot inside.
   * @default {}
   */
  slotProps: r.shape({
    input: r.oneOfType([r.func, r.object]),
    root: r.oneOfType([r.func, r.object])
  }),
  /**
   * The components used for each slot inside.
   * @default {}
   */
  slots: r.shape({
    input: r.elementType,
    root: r.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: r.oneOfType([r.arrayOf(r.oneOfType([r.func, r.object, r.bool])), r.func, r.object]),
  /**
   * The value of the component. The DOM API casts this to a string.
   * The browser uses "on" as the default value.
   */
  value: r.any
});
const Ec = (e, t = "primary") => {
  var i;
  const n = Ae[t], o = ((i = e == null ? void 0 : e.palette) == null ? void 0 : i[t]) ?? n;
  return {
    // 初始狀態（未勾選、未 hover、未 disabled）
    "&": {
      color: (o == null ? void 0 : o.myDefault) ?? n.myDefault
      // 這裡設定初始顏色
    },
    // hover 狀態
    "&:hover": {
      color: o.defaultHover ?? n.custMain,
      backgroundColor: U(o.myDefault ?? n.custMain, 0.08)
    },
    // 勾選與 indeterminate 狀態
    "&.Mui-checked, &.MuiCheckbox-indeterminate": {
      color: o.custMain ?? n.custMain
    },
    // 勾選＋hover 狀態
    "&.Mui-checked:hover": {
      color: o.custMain ?? n.custMain,
      // 維持勾選色
      backgroundColor: U(o.custMain ?? n.custMain, 0.08)
    },
    "&.Mui-disabled": {
      Opacity: U(Ne[0], 0.38)
    },
    // focus 狀態
    "&.Mui-focusVisible": {
      outline: `2px solid ${o.custMain ?? n.custMain, 0.08}`,
      outlineOffset: 2
    }
  };
}, xc = Y(Kr, {
  shouldForwardProp: (e) => e !== "color"
})(
  ({ theme: e, color: t = "primary" }) => Ec(e, t)
), wc = ({
  color: e = "primary",
  label: t,
  ...n
}) => {
  const o = /* @__PURE__ */ M(xc, { color: e, ...n });
  return t ? /* @__PURE__ */ M(fi, { control: o, label: t || void 0 }) : o;
}, Ju = ({
  data: e,
  checkedKeys: t = [],
  onChecked: n
}) => {
  const o = (l, c) => {
    const d = i(l), p = c ? [.../* @__PURE__ */ new Set([...t, ...d])] : t.filter((f) => !d.includes(f));
    n == null || n(p);
  }, i = (l) => {
    var d;
    let c = [l.id];
    return (d = l.children) == null || d.forEach((p) => {
      c = [...c, ...i(p)];
    }), c;
  }, a = (l) => {
    const c = i(l).slice(1), d = c.some((f) => t.includes(f)), p = c.every((f) => t.includes(f));
    return d && !p;
  }, s = (l) => l.map((c) => /* @__PURE__ */ Oe("div", { style: { marginLeft: "24px" }, children: [
    /* @__PURE__ */ M(
      wc,
      {
        label: c.label,
        checked: t.includes(c.id),
        indeterminate: a(c),
        onChange: (d) => o(c, d.target.checked)
      }
    ),
    c.children && s(c.children)
  ] }, c.id));
  return /* @__PURE__ */ M("div", { children: s(e) });
}, Ac = pt(/* @__PURE__ */ M("path", {
  d: "M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"
}), "Cancel");
function Sc(e) {
  return pe("MuiChip", e);
}
const te = ue("MuiChip", ["root", "sizeSmall", "sizeMedium", "colorDefault", "colorError", "colorInfo", "colorPrimary", "colorSecondary", "colorSuccess", "colorWarning", "disabled", "clickable", "clickableColorPrimary", "clickableColorSecondary", "deletable", "deletableColorPrimary", "deletableColorSecondary", "outlined", "filled", "outlinedPrimary", "outlinedSecondary", "filledPrimary", "filledSecondary", "avatar", "avatarSmall", "avatarMedium", "avatarColorPrimary", "avatarColorSecondary", "icon", "iconSmall", "iconMedium", "iconColorPrimary", "iconColorSecondary", "label", "labelSmall", "labelMedium", "deleteIcon", "deleteIconSmall", "deleteIconMedium", "deleteIconColorPrimary", "deleteIconColorSecondary", "deleteIconOutlinedColorPrimary", "deleteIconOutlinedColorSecondary", "deleteIconFilledColorPrimary", "deleteIconFilledColorSecondary", "focusVisible"]), Tc = (e) => {
  const {
    classes: t,
    disabled: n,
    size: o,
    color: i,
    iconColor: a,
    onDelete: s,
    clickable: l,
    variant: c
  } = e, d = {
    root: ["root", c, n && "disabled", `size${P(o)}`, `color${P(i)}`, l && "clickable", l && `clickableColor${P(i)}`, s && "deletable", s && `deletableColor${P(i)}`, `${c}${P(i)}`],
    label: ["label", `label${P(o)}`],
    avatar: ["avatar", `avatar${P(o)}`, `avatarColor${P(i)}`],
    icon: ["icon", `icon${P(o)}`, `iconColor${P(a)}`],
    deleteIcon: ["deleteIcon", `deleteIcon${P(o)}`, `deleteIconColor${P(i)}`, `deleteIcon${P(c)}Color${P(i)}`]
  };
  return he(d, Sc, t);
}, Fc = Y("div", {
  name: "MuiChip",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e, {
      color: o,
      iconColor: i,
      clickable: a,
      onDelete: s,
      size: l,
      variant: c
    } = n;
    return [{
      [`& .${te.avatar}`]: t.avatar
    }, {
      [`& .${te.avatar}`]: t[`avatar${P(l)}`]
    }, {
      [`& .${te.avatar}`]: t[`avatarColor${P(o)}`]
    }, {
      [`& .${te.icon}`]: t.icon
    }, {
      [`& .${te.icon}`]: t[`icon${P(l)}`]
    }, {
      [`& .${te.icon}`]: t[`iconColor${P(i)}`]
    }, {
      [`& .${te.deleteIcon}`]: t.deleteIcon
    }, {
      [`& .${te.deleteIcon}`]: t[`deleteIcon${P(l)}`]
    }, {
      [`& .${te.deleteIcon}`]: t[`deleteIconColor${P(o)}`]
    }, {
      [`& .${te.deleteIcon}`]: t[`deleteIcon${P(c)}Color${P(o)}`]
    }, t.root, t[`size${P(l)}`], t[`color${P(o)}`], a && t.clickable, a && o !== "default" && t[`clickableColor${P(o)})`], s && t.deletable, s && o !== "default" && t[`deletableColor${P(o)}`], t[c], t[`${c}${P(o)}`]];
  }
})(ge(({
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
    [`&.${te.disabled}`]: {
      opacity: (e.vars || e).palette.action.disabledOpacity,
      pointerEvents: "none"
    },
    [`& .${te.avatar}`]: {
      marginLeft: 5,
      marginRight: -6,
      width: 24,
      height: 24,
      color: e.vars ? e.vars.palette.Chip.defaultAvatarColor : t,
      fontSize: e.typography.pxToRem(12)
    },
    [`& .${te.avatarColorPrimary}`]: {
      color: (e.vars || e).palette.primary.contrastText,
      backgroundColor: (e.vars || e).palette.primary.dark
    },
    [`& .${te.avatarColorSecondary}`]: {
      color: (e.vars || e).palette.secondary.contrastText,
      backgroundColor: (e.vars || e).palette.secondary.dark
    },
    [`& .${te.avatarSmall}`]: {
      marginLeft: 4,
      marginRight: -4,
      width: 18,
      height: 18,
      fontSize: e.typography.pxToRem(10)
    },
    [`& .${te.icon}`]: {
      marginLeft: 5,
      marginRight: -6
    },
    [`& .${te.deleteIcon}`]: {
      WebkitTapHighlightColor: "transparent",
      color: e.vars ? `rgba(${e.vars.palette.text.primaryChannel} / 0.26)` : U(e.palette.text.primary, 0.26),
      fontSize: 22,
      cursor: "pointer",
      margin: "0 5px 0 -6px",
      "&:hover": {
        color: e.vars ? `rgba(${e.vars.palette.text.primaryChannel} / 0.4)` : U(e.palette.text.primary, 0.4)
      }
    },
    variants: [{
      props: {
        size: "small"
      },
      style: {
        height: 24,
        [`& .${te.icon}`]: {
          fontSize: 18,
          marginLeft: 4,
          marginRight: -4
        },
        [`& .${te.deleteIcon}`]: {
          fontSize: 16,
          marginRight: 4,
          marginLeft: -4
        }
      }
    }, ...Object.entries(e.palette).filter(Se(["contrastText"])).map(([n]) => ({
      props: {
        color: n
      },
      style: {
        backgroundColor: (e.vars || e).palette[n].main,
        color: (e.vars || e).palette[n].contrastText,
        [`& .${te.deleteIcon}`]: {
          color: e.vars ? `rgba(${e.vars.palette[n].contrastTextChannel} / 0.7)` : U(e.palette[n].contrastText, 0.7),
          "&:hover, &:active": {
            color: (e.vars || e).palette[n].contrastText
          }
        }
      }
    })), {
      props: (n) => n.iconColor === n.color,
      style: {
        [`& .${te.icon}`]: {
          color: e.vars ? e.vars.palette.Chip.defaultIconColor : t
        }
      }
    }, {
      props: (n) => n.iconColor === n.color && n.color !== "default",
      style: {
        [`& .${te.icon}`]: {
          color: "inherit"
        }
      }
    }, {
      props: {
        onDelete: !0
      },
      style: {
        [`&.${te.focusVisible}`]: {
          backgroundColor: e.vars ? `rgba(${e.vars.palette.action.selectedChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))` : U(e.palette.action.selected, e.palette.action.selectedOpacity + e.palette.action.focusOpacity)
        }
      }
    }, ...Object.entries(e.palette).filter(Se(["dark"])).map(([n]) => ({
      props: {
        color: n,
        onDelete: !0
      },
      style: {
        [`&.${te.focusVisible}`]: {
          background: (e.vars || e).palette[n].dark
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
          backgroundColor: e.vars ? `rgba(${e.vars.palette.action.selectedChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))` : U(e.palette.action.selected, e.palette.action.selectedOpacity + e.palette.action.hoverOpacity)
        },
        [`&.${te.focusVisible}`]: {
          backgroundColor: e.vars ? `rgba(${e.vars.palette.action.selectedChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))` : U(e.palette.action.selected, e.palette.action.selectedOpacity + e.palette.action.focusOpacity)
        },
        "&:active": {
          boxShadow: (e.vars || e).shadows[1]
        }
      }
    }, ...Object.entries(e.palette).filter(Se(["dark"])).map(([n]) => ({
      props: {
        color: n,
        clickable: !0
      },
      style: {
        [`&:hover, &.${te.focusVisible}`]: {
          backgroundColor: (e.vars || e).palette[n].dark
        }
      }
    })), {
      props: {
        variant: "outlined"
      },
      style: {
        backgroundColor: "transparent",
        border: e.vars ? `1px solid ${e.vars.palette.Chip.defaultBorder}` : `1px solid ${e.palette.mode === "light" ? e.palette.grey[400] : e.palette.grey[700]}`,
        [`&.${te.clickable}:hover`]: {
          backgroundColor: (e.vars || e).palette.action.hover
        },
        [`&.${te.focusVisible}`]: {
          backgroundColor: (e.vars || e).palette.action.focus
        },
        [`& .${te.avatar}`]: {
          marginLeft: 4
        },
        [`& .${te.avatarSmall}`]: {
          marginLeft: 2
        },
        [`& .${te.icon}`]: {
          marginLeft: 4
        },
        [`& .${te.iconSmall}`]: {
          marginLeft: 2
        },
        [`& .${te.deleteIcon}`]: {
          marginRight: 5
        },
        [`& .${te.deleteIconSmall}`]: {
          marginRight: 3
        }
      }
    }, ...Object.entries(e.palette).filter(Se()).map(([n]) => ({
      props: {
        variant: "outlined",
        color: n
      },
      style: {
        color: (e.vars || e).palette[n].main,
        border: `1px solid ${e.vars ? `rgba(${e.vars.palette[n].mainChannel} / 0.7)` : U(e.palette[n].main, 0.7)}`,
        [`&.${te.clickable}:hover`]: {
          backgroundColor: e.vars ? `rgba(${e.vars.palette[n].mainChannel} / ${e.vars.palette.action.hoverOpacity})` : U(e.palette[n].main, e.palette.action.hoverOpacity)
        },
        [`&.${te.focusVisible}`]: {
          backgroundColor: e.vars ? `rgba(${e.vars.palette[n].mainChannel} / ${e.vars.palette.action.focusOpacity})` : U(e.palette[n].main, e.palette.action.focusOpacity)
        },
        [`& .${te.deleteIcon}`]: {
          color: e.vars ? `rgba(${e.vars.palette[n].mainChannel} / 0.7)` : U(e.palette[n].main, 0.7),
          "&:hover, &:active": {
            color: (e.vars || e).palette[n].main
          }
        }
      }
    }))]
  };
})), Oc = Y("span", {
  name: "MuiChip",
  slot: "Label",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e, {
      size: o
    } = n;
    return [t.label, t[`label${P(o)}`]];
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
function jo(e) {
  return e.key === "Backspace" || e.key === "Delete";
}
const Hr = /* @__PURE__ */ m.forwardRef(function(t, n) {
  const o = be({
    props: t,
    name: "MuiChip"
  }), {
    avatar: i,
    className: a,
    clickable: s,
    color: l = "default",
    component: c,
    deleteIcon: d,
    disabled: p = !1,
    icon: f,
    label: g,
    onClick: h,
    onDelete: b,
    onKeyDown: v,
    onKeyUp: w,
    size: E = "medium",
    variant: O = "filled",
    tabIndex: C,
    skipFocusWhenDisabled: y = !1,
    // TODO v6: Rename to `focusableWhenDisabled`.
    ...S
  } = o, B = m.useRef(null), $ = Te(B, n), N = (D) => {
    D.stopPropagation(), b && b(D);
  }, H = (D) => {
    D.currentTarget === D.target && jo(D) && D.preventDefault(), v && v(D);
  }, u = (D) => {
    D.currentTarget === D.target && b && jo(D) && b(D), w && w(D);
  }, T = s !== !1 && h ? !0 : s, F = T || b ? He : c || "div", j = {
    ...o,
    component: F,
    disabled: p,
    size: E,
    color: l,
    iconColor: /* @__PURE__ */ m.isValidElement(f) && f.props.color || l,
    onDelete: !!b,
    clickable: T,
    variant: O
  }, z = Tc(j), I = F === He ? {
    component: c || "div",
    focusVisibleClassName: z.focusVisible,
    ...b && {
      disableRipple: !0
    }
  } : {};
  let k = null;
  b && (k = d && /* @__PURE__ */ m.isValidElement(d) ? /* @__PURE__ */ m.cloneElement(d, {
    className: ee(d.props.className, z.deleteIcon),
    onClick: N
  }) : /* @__PURE__ */ M(Ac, {
    className: ee(z.deleteIcon),
    onClick: N
  }));
  let G = null;
  i && /* @__PURE__ */ m.isValidElement(i) && (G = /* @__PURE__ */ m.cloneElement(i, {
    className: ee(z.avatar, i.props.className)
  }));
  let oe = null;
  return f && /* @__PURE__ */ m.isValidElement(f) && (oe = /* @__PURE__ */ m.cloneElement(f, {
    className: ee(z.icon, f.props.className)
  })), process.env.NODE_ENV !== "production" && G && oe && console.error("MUI: The Chip component can not handle the avatar and the icon prop at the same time. Pick one."), /* @__PURE__ */ Oe(Fc, {
    as: F,
    className: ee(z.root, a),
    disabled: T && p ? !0 : void 0,
    onClick: h,
    onKeyDown: H,
    onKeyUp: u,
    ref: $,
    tabIndex: y && p ? -1 : C,
    ownerState: j,
    ...I,
    ...S,
    children: [G || oe, /* @__PURE__ */ M(Oc, {
      className: ee(z.label),
      ownerState: j,
      children: g
    }), k]
  });
});
process.env.NODE_ENV !== "production" && (Hr.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The Avatar element to display.
   */
  avatar: r.element,
  /**
   * This prop isn't supported.
   * Use the `component` prop if you need to change the children structure.
   */
  children: ns,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: r.object,
  /**
   * @ignore
   */
  className: r.string,
  /**
   * If `true`, the chip will appear clickable, and will raise when pressed,
   * even if the onClick prop is not defined.
   * If `false`, the chip will not appear clickable, even if onClick prop is defined.
   * This can be used, for example,
   * along with the component prop to indicate an anchor Chip is clickable.
   * Note: this controls the UI and does not affect the onClick event.
   */
  clickable: r.bool,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * @default 'default'
   */
  color: r.oneOfType([r.oneOf(["default", "primary", "secondary", "error", "info", "success", "warning"]), r.string]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: r.elementType,
  /**
   * Override the default delete icon element. Shown only if `onDelete` is set.
   */
  deleteIcon: r.element,
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: r.bool,
  /**
   * Icon element.
   */
  icon: r.element,
  /**
   * The content of the component.
   */
  label: r.node,
  /**
   * @ignore
   */
  onClick: r.func,
  /**
   * Callback fired when the delete icon is clicked.
   * If set, the delete icon will be shown.
   */
  onDelete: r.func,
  /**
   * @ignore
   */
  onKeyDown: r.func,
  /**
   * @ignore
   */
  onKeyUp: r.func,
  /**
   * The size of the component.
   * @default 'medium'
   */
  size: r.oneOfType([r.oneOf(["medium", "small"]), r.string]),
  /**
   * If `true`, allows the disabled chip to escape focus.
   * If `false`, allows the disabled chip to receive focus.
   * @default false
   */
  skipFocusWhenDisabled: r.bool,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: r.oneOfType([r.arrayOf(r.oneOfType([r.func, r.object, r.bool])), r.func, r.object]),
  /**
   * @ignore
   */
  tabIndex: r.number,
  /**
   * The variant to use.
   * @default 'filled'
   */
  variant: r.oneOfType([r.oneOf(["filled", "outlined"]), r.string])
});
const kc = pt(/* @__PURE__ */ M("path", {
  d: "M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
}), "Clear"), Ic = (e, t = "primary") => {
  var i;
  const n = Ae[t], o = ((i = e == null ? void 0 : e.palette) == null ? void 0 : i[t]) ?? n;
  return {
    bgColor: o.custMain ?? n.custMain,
    fontColor: o.iconFont ?? n.iconFont,
    overlay: o.iconOverlay ?? n.iconOverlay,
    selectedbgColor: o.tonal ?? n.tonal,
    selectedFontColor: o.onTonal ?? n.onTonal,
    selectedOverlay: o.onTonal ?? n.onTonal,
    iconColor: o.custMain ?? n.custMain
  };
}, Rc = Y(Hr, {
  shouldForwardProp: (e) => e !== "selected"
  // selected 不往下傳，其他都照傳
})(({ theme: e, selected: t = !1, avatar: n }) => {
  const o = !!n, i = Ic(e);
  return {
    borderRadius: o ? 30 : 8,
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
      borderRadius: o ? 30 : t ? 8 : 7,
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
}), qu = ({
  selected: e = !1,
  avatar: t,
  deleteIcon: n = /* @__PURE__ */ M(kc, {}),
  ...o
}) => /* @__PURE__ */ M(
  Rc,
  {
    ...o,
    selected: e,
    avatar: t,
    deleteIcon: n,
    variant: "outlined"
  }
), Wt = /* @__PURE__ */ m.createContext({});
process.env.NODE_ENV !== "production" && (Wt.displayName = "ListContext");
function Bc(e) {
  return pe("MuiList", e);
}
ue("MuiList", ["root", "padding", "dense", "subheader"]);
const Mc = (e) => {
  const {
    classes: t,
    disablePadding: n,
    dense: o,
    subheader: i
  } = e;
  return he({
    root: ["root", !n && "padding", o && "dense", i && "subheader"]
  }, Bc, t);
}, Dc = Y("ul", {
  name: "MuiList",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, !n.disablePadding && t.padding, n.dense && t.dense, n.subheader && t.subheader];
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
}), Gr = /* @__PURE__ */ m.forwardRef(function(t, n) {
  const o = be({
    props: t,
    name: "MuiList"
  }), {
    children: i,
    className: a,
    component: s = "ul",
    dense: l = !1,
    disablePadding: c = !1,
    subheader: d,
    ...p
  } = o, f = m.useMemo(() => ({
    dense: l
  }), [l]), g = {
    ...o,
    component: s,
    dense: l,
    disablePadding: c
  }, h = Mc(g);
  return /* @__PURE__ */ M(Wt.Provider, {
    value: f,
    children: /* @__PURE__ */ Oe(Dc, {
      as: s,
      className: ee(h.root, a),
      ref: n,
      ownerState: g,
      ...p,
      children: [d, i]
    })
  });
});
process.env.NODE_ENV !== "production" && (Gr.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: r.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: r.object,
  /**
   * @ignore
   */
  className: r.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: r.elementType,
  /**
   * If `true`, compact vertical padding designed for keyboard and mouse input is used for
   * the list and list items.
   * The prop is available to descendant components as the `dense` context.
   * @default false
   */
  dense: r.bool,
  /**
   * If `true`, vertical padding is removed from the list.
   * @default false
   */
  disablePadding: r.bool,
  /**
   * The content of the subheader, normally `ListSubheader`.
   */
  subheader: r.node,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: r.oneOfType([r.arrayOf(r.oneOfType([r.func, r.object, r.bool])), r.func, r.object])
});
function Tn(e, t, n) {
  return e === t ? e.firstChild : t && t.nextElementSibling ? t.nextElementSibling : n ? null : e.firstChild;
}
function zo(e, t, n) {
  return e === t ? n ? e.firstChild : e.lastChild : t && t.previousElementSibling ? t.previousElementSibling : n ? null : e.lastChild;
}
function Wr(e, t) {
  if (t === void 0)
    return !0;
  let n = e.innerText;
  return n === void 0 && (n = e.textContent), n = n.trim().toLowerCase(), n.length === 0 ? !1 : t.repeating ? n[0] === t.keys[0] : n.startsWith(t.keys.join(""));
}
function bt(e, t, n, o, i, a) {
  let s = !1, l = i(e, t, t ? n : !1);
  for (; l; ) {
    if (l === e.firstChild) {
      if (s)
        return !1;
      s = !0;
    }
    const c = o ? !1 : l.disabled || l.getAttribute("aria-disabled") === "true";
    if (!l.hasAttribute("tabindex") || !Wr(l, a) || c)
      l = i(e, l, n);
    else
      return l.focus(), !0;
  }
  return !1;
}
const Yr = /* @__PURE__ */ m.forwardRef(function(t, n) {
  const {
    // private
    // eslint-disable-next-line react/prop-types
    actions: o,
    autoFocus: i = !1,
    autoFocusItem: a = !1,
    children: s,
    className: l,
    disabledItemsFocusable: c = !1,
    disableListWrap: d = !1,
    onKeyDown: p,
    variant: f = "selectedMenu",
    ...g
  } = t, h = m.useRef(null), b = m.useRef({
    keys: [],
    repeating: !0,
    previousKeyMatched: !0,
    lastTime: null
  });
  At(() => {
    i && h.current.focus();
  }, [i]), m.useImperativeHandle(o, () => ({
    adjustStyleForScrollbar: (C, {
      direction: y
    }) => {
      const S = !h.current.style.width;
      if (C.clientHeight < h.current.clientHeight && S) {
        const B = `${yr(_e(C))}px`;
        h.current.style[y === "rtl" ? "paddingLeft" : "paddingRight"] = B, h.current.style.width = `calc(100% + ${B})`;
      }
      return h.current;
    }
  }), []);
  const v = (C) => {
    const y = h.current, S = C.key;
    if (C.ctrlKey || C.metaKey || C.altKey) {
      p && p(C);
      return;
    }
    const $ = Re(y).activeElement;
    if (S === "ArrowDown")
      C.preventDefault(), bt(y, $, d, c, Tn);
    else if (S === "ArrowUp")
      C.preventDefault(), bt(y, $, d, c, zo);
    else if (S === "Home")
      C.preventDefault(), bt(y, null, d, c, Tn);
    else if (S === "End")
      C.preventDefault(), bt(y, null, d, c, zo);
    else if (S.length === 1) {
      const N = b.current, H = S.toLowerCase(), u = performance.now();
      N.keys.length > 0 && (u - N.lastTime > 500 ? (N.keys = [], N.repeating = !0, N.previousKeyMatched = !0) : N.repeating && H !== N.keys[0] && (N.repeating = !1)), N.lastTime = u, N.keys.push(H);
      const T = $ && !N.repeating && Wr($, N);
      N.previousKeyMatched && (T || bt(y, $, !1, c, Tn, N)) ? C.preventDefault() : N.previousKeyMatched = !1;
    }
    p && p(C);
  }, w = Te(h, n);
  let E = -1;
  m.Children.forEach(s, (C, y) => {
    if (!/* @__PURE__ */ m.isValidElement(C)) {
      E === y && (E += 1, E >= s.length && (E = -1));
      return;
    }
    process.env.NODE_ENV !== "production" && Zo(C) && console.error(["MUI: The Menu component doesn't accept a Fragment as a child.", "Consider providing an array instead."].join(`
`)), C.props.disabled || (f === "selectedMenu" && C.props.selected || E === -1) && (E = y), E === y && (C.props.disabled || C.props.muiSkipListHighlight || C.type.muiSkipListHighlight) && (E += 1, E >= s.length && (E = -1));
  });
  const O = m.Children.map(s, (C, y) => {
    if (y === E) {
      const S = {};
      return a && (S.autoFocus = !0), C.props.tabIndex === void 0 && f === "selectedMenu" && (S.tabIndex = 0), /* @__PURE__ */ m.cloneElement(C, S);
    }
    return C;
  });
  return /* @__PURE__ */ M(Gr, {
    role: "menu",
    ref: w,
    className: l,
    onKeyDown: v,
    tabIndex: i ? 0 : -1,
    ...g,
    children: O
  });
});
process.env.NODE_ENV !== "production" && (Yr.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * If `true`, will focus the `[role="menu"]` container and move into tab order.
   * @default false
   */
  autoFocus: r.bool,
  /**
   * If `true`, will focus the first menuitem if `variant="menu"` or selected item
   * if `variant="selectedMenu"`.
   * @default false
   */
  autoFocusItem: r.bool,
  /**
   * MenuList contents, normally `MenuItem`s.
   */
  children: r.node,
  /**
   * @ignore
   */
  className: r.string,
  /**
   * If `true`, will allow focus on disabled items.
   * @default false
   */
  disabledItemsFocusable: r.bool,
  /**
   * If `true`, the menu items will not wrap focus.
   * @default false
   */
  disableListWrap: r.bool,
  /**
   * @ignore
   */
  onKeyDown: r.func,
  /**
   * The variant to use. Use `menu` to prevent selected items from impacting the initial focus
   * and the vertical alignment relative to the anchor element.
   * @default 'selectedMenu'
   */
  variant: r.oneOf(["menu", "selectedMenu"])
});
function Pc(e) {
  return typeof e == "string";
}
const Jr = (e) => e.scrollTop;
function Yt(e, t) {
  const {
    timeout: n,
    easing: o,
    style: i = {}
  } = e;
  return {
    duration: i.transitionDuration ?? (typeof n == "number" ? n : n[t.mode] || 0),
    easing: i.transitionTimingFunction ?? (typeof o == "object" ? o[t.mode] : o),
    delay: i.transitionDelay
  };
}
function Vn(e) {
  return `scale(${e}, ${e ** 2})`;
}
const Nc = {
  entering: {
    opacity: 1,
    transform: Vn(1)
  },
  entered: {
    opacity: 1,
    transform: "none"
  }
}, Fn = typeof navigator < "u" && /^((?!chrome|android).)*(safari|mobile)/i.test(navigator.userAgent) && /(os |version\/)15(.|_)4/i.test(navigator.userAgent), Jt = /* @__PURE__ */ m.forwardRef(function(t, n) {
  const {
    addEndListener: o,
    appear: i = !0,
    children: a,
    easing: s,
    in: l,
    onEnter: c,
    onEntered: d,
    onEntering: p,
    onExit: f,
    onExited: g,
    onExiting: h,
    style: b,
    timeout: v = "auto",
    // eslint-disable-next-line react/prop-types
    TransitionComponent: w = Be,
    ...E
  } = t, O = mr(), C = m.useRef(), y = Jn(), S = m.useRef(null), B = Te(S, fn(a), n), $ = (I) => (k) => {
    if (I) {
      const G = S.current;
      k === void 0 ? I(G) : I(G, k);
    }
  }, N = $(p), H = $((I, k) => {
    Jr(I);
    const {
      duration: G,
      delay: oe,
      easing: D
    } = Yt({
      style: b,
      timeout: v,
      easing: s
    }, {
      mode: "enter"
    });
    let A;
    v === "auto" ? (A = y.transitions.getAutoHeightDuration(I.clientHeight), C.current = A) : A = G, I.style.transition = [y.transitions.create("opacity", {
      duration: A,
      delay: oe
    }), y.transitions.create("transform", {
      duration: Fn ? A : A * 0.666,
      delay: oe,
      easing: D
    })].join(","), c && c(I, k);
  }), u = $(d), T = $(h), F = $((I) => {
    const {
      duration: k,
      delay: G,
      easing: oe
    } = Yt({
      style: b,
      timeout: v,
      easing: s
    }, {
      mode: "exit"
    });
    let D;
    v === "auto" ? (D = y.transitions.getAutoHeightDuration(I.clientHeight), C.current = D) : D = k, I.style.transition = [y.transitions.create("opacity", {
      duration: D,
      delay: G
    }), y.transitions.create("transform", {
      duration: Fn ? D : D * 0.666,
      delay: Fn ? G : G || D * 0.333,
      easing: oe
    })].join(","), I.style.opacity = 0, I.style.transform = Vn(0.75), f && f(I);
  }), j = $(g);
  return /* @__PURE__ */ M(w, {
    appear: i,
    in: l,
    nodeRef: S,
    onEnter: H,
    onEntered: u,
    onEntering: N,
    onExit: F,
    onExited: j,
    onExiting: T,
    addEndListener: (I) => {
      v === "auto" && O.start(C.current || 0, I), o && o(S.current, I);
    },
    timeout: v === "auto" ? null : v,
    ...E,
    children: (I, {
      ownerState: k,
      ...G
    }) => /* @__PURE__ */ m.cloneElement(a, {
      style: {
        opacity: 0,
        transform: Vn(0.75),
        visibility: I === "exited" && !l ? "hidden" : void 0,
        ...Nc[I],
        ...b,
        ...a.props.style
      },
      ref: B,
      ...G
    })
  });
});
process.env.NODE_ENV !== "production" && (Jt.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Add a custom transition end trigger. Called with the transitioning DOM
   * node and a done callback. Allows for more fine grained transition end
   * logic. Note: Timeouts are still used as a fallback if provided.
   */
  addEndListener: r.func,
  /**
   * Perform the enter transition when it first mounts if `in` is also `true`.
   * Set this to `false` to disable this behavior.
   * @default true
   */
  appear: r.bool,
  /**
   * A single child content element.
   */
  children: It.isRequired,
  /**
   * The transition timing function.
   * You may specify a single easing or a object containing enter and exit values.
   */
  easing: r.oneOfType([r.shape({
    enter: r.string,
    exit: r.string
  }), r.string]),
  /**
   * If `true`, the component will transition in.
   */
  in: r.bool,
  /**
   * @ignore
   */
  onEnter: r.func,
  /**
   * @ignore
   */
  onEntered: r.func,
  /**
   * @ignore
   */
  onEntering: r.func,
  /**
   * @ignore
   */
  onExit: r.func,
  /**
   * @ignore
   */
  onExited: r.func,
  /**
   * @ignore
   */
  onExiting: r.func,
  /**
   * @ignore
   */
  style: r.object,
  /**
   * The duration for the transition, in milliseconds.
   * You may specify a single timeout for all transitions, or individually with an object.
   *
   * Set to 'auto' to automatically calculate transition time based on height.
   * @default 'auto'
   */
  timeout: r.oneOfType([r.oneOf(["auto"]), r.number, r.shape({
    appear: r.number,
    enter: r.number,
    exit: r.number
  })])
});
Jt && (Jt.muiSupportAuto = !0);
function $c(e) {
  const t = Re(e);
  return t.body === e ? _e(e).innerWidth > t.documentElement.clientWidth : e.scrollHeight > e.clientHeight;
}
function wt(e, t) {
  t ? e.setAttribute("aria-hidden", "true") : e.removeAttribute("aria-hidden");
}
function Vo(e) {
  return parseInt(_e(e).getComputedStyle(e).paddingRight, 10) || 0;
}
function jc(e) {
  const n = ["TEMPLATE", "SCRIPT", "STYLE", "LINK", "MAP", "META", "NOSCRIPT", "PICTURE", "COL", "COLGROUP", "PARAM", "SLOT", "SOURCE", "TRACK"].includes(e.tagName), o = e.tagName === "INPUT" && e.getAttribute("type") === "hidden";
  return n || o;
}
function Lo(e, t, n, o, i) {
  const a = [t, n, ...o];
  [].forEach.call(e.children, (s) => {
    const l = !a.includes(s), c = !jc(s);
    l && c && wt(s, i);
  });
}
function On(e, t) {
  let n = -1;
  return e.some((o, i) => t(o) ? (n = i, !0) : !1), n;
}
function zc(e, t) {
  const n = [], o = e.container;
  if (!t.disableScrollLock) {
    if ($c(o)) {
      const s = yr(_e(o));
      n.push({
        value: o.style.paddingRight,
        property: "padding-right",
        el: o
      }), o.style.paddingRight = `${Vo(o) + s}px`;
      const l = Re(o).querySelectorAll(".mui-fixed");
      [].forEach.call(l, (c) => {
        n.push({
          value: c.style.paddingRight,
          property: "padding-right",
          el: c
        }), c.style.paddingRight = `${Vo(c) + s}px`;
      });
    }
    let a;
    if (o.parentNode instanceof DocumentFragment)
      a = Re(o).body;
    else {
      const s = o.parentElement, l = _e(o);
      a = (s == null ? void 0 : s.nodeName) === "HTML" && l.getComputedStyle(s).overflowY === "scroll" ? s : o;
    }
    n.push({
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
    n.forEach(({
      value: a,
      el: s,
      property: l
    }) => {
      a ? s.style.setProperty(l, a) : s.style.removeProperty(l);
    });
  };
}
function Vc(e) {
  const t = [];
  return [].forEach.call(e.children, (n) => {
    n.getAttribute("aria-hidden") === "true" && t.push(n);
  }), t;
}
class Lc {
  constructor() {
    this.modals = [], this.containers = [];
  }
  add(t, n) {
    let o = this.modals.indexOf(t);
    if (o !== -1)
      return o;
    o = this.modals.length, this.modals.push(t), t.modalRef && wt(t.modalRef, !1);
    const i = Vc(n);
    Lo(n, t.mount, t.modalRef, i, !0);
    const a = On(this.containers, (s) => s.container === n);
    return a !== -1 ? (this.containers[a].modals.push(t), o) : (this.containers.push({
      modals: [t],
      container: n,
      restore: null,
      hiddenSiblings: i
    }), o);
  }
  mount(t, n) {
    const o = On(this.containers, (a) => a.modals.includes(t)), i = this.containers[o];
    i.restore || (i.restore = zc(i, n));
  }
  remove(t, n = !0) {
    const o = this.modals.indexOf(t);
    if (o === -1)
      return o;
    const i = On(this.containers, (s) => s.modals.includes(t)), a = this.containers[i];
    if (a.modals.splice(a.modals.indexOf(t), 1), this.modals.splice(o, 1), a.modals.length === 0)
      a.restore && a.restore(), t.modalRef && wt(t.modalRef, n), Lo(a.container, t.mount, t.modalRef, a.hiddenSiblings, !1), this.containers.splice(i, 1);
    else {
      const s = a.modals[a.modals.length - 1];
      s.modalRef && wt(s.modalRef, !1);
    }
    return o;
  }
  isTopModal(t) {
    return this.modals.length > 0 && this.modals[this.modals.length - 1] === t;
  }
}
const Uc = ["input", "select", "textarea", "a[href]", "button", "[tabindex]", "audio[controls]", "video[controls]", '[contenteditable]:not([contenteditable="false"])'].join(",");
function Qc(e) {
  const t = parseInt(e.getAttribute("tabindex") || "", 10);
  return Number.isNaN(t) ? e.contentEditable === "true" || (e.nodeName === "AUDIO" || e.nodeName === "VIDEO" || e.nodeName === "DETAILS") && e.getAttribute("tabindex") === null ? 0 : e.tabIndex : t;
}
function Kc(e) {
  if (e.tagName !== "INPUT" || e.type !== "radio" || !e.name)
    return !1;
  const t = (o) => e.ownerDocument.querySelector(`input[type="radio"]${o}`);
  let n = t(`[name="${e.name}"]:checked`);
  return n || (n = t(`[name="${e.name}"]`)), n !== e;
}
function Hc(e) {
  return !(e.disabled || e.tagName === "INPUT" && e.type === "hidden" || Kc(e));
}
function Gc(e) {
  const t = [], n = [];
  return Array.from(e.querySelectorAll(Uc)).forEach((o, i) => {
    const a = Qc(o);
    a === -1 || !Hc(o) || (a === 0 ? t.push(o) : n.push({
      documentOrder: i,
      tabIndex: a,
      node: o
    }));
  }), n.sort((o, i) => o.tabIndex === i.tabIndex ? o.documentOrder - i.documentOrder : o.tabIndex - i.tabIndex).map((o) => o.node).concat(t);
}
function Wc() {
  return !0;
}
function qt(e) {
  const {
    children: t,
    disableAutoFocus: n = !1,
    disableEnforceFocus: o = !1,
    disableRestoreFocus: i = !1,
    getTabbable: a = Gc,
    isEnabled: s = Wc,
    open: l
  } = e, c = m.useRef(!1), d = m.useRef(null), p = m.useRef(null), f = m.useRef(null), g = m.useRef(null), h = m.useRef(!1), b = m.useRef(null), v = Te(fn(t), b), w = m.useRef(null);
  m.useEffect(() => {
    !l || !b.current || (h.current = !n);
  }, [n, l]), m.useEffect(() => {
    if (!l || !b.current)
      return;
    const C = Re(b.current);
    return b.current.contains(C.activeElement) || (b.current.hasAttribute("tabIndex") || (process.env.NODE_ENV !== "production" && console.error(["MUI: The modal content node does not accept focus.", 'For the benefit of assistive technologies, the tabIndex of the node is being set to "-1".'].join(`
`)), b.current.setAttribute("tabIndex", "-1")), h.current && b.current.focus()), () => {
      i || (f.current && f.current.focus && (c.current = !0, f.current.focus()), f.current = null);
    };
  }, [l]), m.useEffect(() => {
    if (!l || !b.current)
      return;
    const C = Re(b.current), y = ($) => {
      w.current = $, !(o || !s() || $.key !== "Tab") && C.activeElement === b.current && $.shiftKey && (c.current = !0, p.current && p.current.focus());
    }, S = () => {
      var H, u;
      const $ = b.current;
      if ($ === null)
        return;
      if (!C.hasFocus() || !s() || c.current) {
        c.current = !1;
        return;
      }
      if ($.contains(C.activeElement) || o && C.activeElement !== d.current && C.activeElement !== p.current)
        return;
      if (C.activeElement !== g.current)
        g.current = null;
      else if (g.current !== null)
        return;
      if (!h.current)
        return;
      let N = [];
      if ((C.activeElement === d.current || C.activeElement === p.current) && (N = a(b.current)), N.length > 0) {
        const T = !!((H = w.current) != null && H.shiftKey && ((u = w.current) == null ? void 0 : u.key) === "Tab"), F = N[0], j = N[N.length - 1];
        typeof F != "string" && typeof j != "string" && (T ? j.focus() : F.focus());
      } else
        $.focus();
    };
    C.addEventListener("focusin", S), C.addEventListener("keydown", y, !0);
    const B = setInterval(() => {
      C.activeElement && C.activeElement.tagName === "BODY" && S();
    }, 50);
    return () => {
      clearInterval(B), C.removeEventListener("focusin", S), C.removeEventListener("keydown", y, !0);
    };
  }, [n, o, i, s, l, a]);
  const E = (C) => {
    f.current === null && (f.current = C.relatedTarget), h.current = !0, g.current = C.target;
    const y = t.props.onFocus;
    y && y(C);
  }, O = (C) => {
    f.current === null && (f.current = C.relatedTarget), h.current = !0;
  };
  return /* @__PURE__ */ Oe(m.Fragment, {
    children: [/* @__PURE__ */ M("div", {
      tabIndex: l ? 0 : -1,
      onFocus: O,
      ref: d,
      "data-testid": "sentinelStart"
    }), /* @__PURE__ */ m.cloneElement(t, {
      ref: v,
      onFocus: E
    }), /* @__PURE__ */ M("div", {
      tabIndex: l ? 0 : -1,
      onFocus: O,
      ref: p,
      "data-testid": "sentinelEnd"
    })]
  });
}
process.env.NODE_ENV !== "production" && (qt.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * A single child content element.
   */
  children: It,
  /**
   * If `true`, the focus trap will not automatically shift focus to itself when it opens, and
   * replace it to the last focused element when it closes.
   * This also works correctly with any focus trap children that have the `disableAutoFocus` prop.
   *
   * Generally this should never be set to `true` as it makes the focus trap less
   * accessible to assistive technologies, like screen readers.
   * @default false
   */
  disableAutoFocus: r.bool,
  /**
   * If `true`, the focus trap will not prevent focus from leaving the focus trap while open.
   *
   * Generally this should never be set to `true` as it makes the focus trap less
   * accessible to assistive technologies, like screen readers.
   * @default false
   */
  disableEnforceFocus: r.bool,
  /**
   * If `true`, the focus trap will not restore focus to previously focused element once
   * focus trap is hidden or unmounted.
   * @default false
   */
  disableRestoreFocus: r.bool,
  /**
   * Returns an array of ordered tabbable nodes (i.e. in tab order) within the root.
   * For instance, you can provide the "tabbable" npm dependency.
   * @param {HTMLElement} root
   */
  getTabbable: r.func,
  /**
   * This prop extends the `open` prop.
   * It allows to toggle the open state without having to wait for a rerender when changing the `open` prop.
   * This prop should be memoized.
   * It can be used to support multiple focus trap mounted at the same time.
   * @default function defaultIsEnabled(): boolean {
   *   return true;
   * }
   */
  isEnabled: r.func,
  /**
   * If `true`, focus is locked.
   */
  open: r.bool.isRequired
});
process.env.NODE_ENV !== "production" && (qt.propTypes = gr(qt.propTypes));
function Yc(e) {
  return typeof e == "function" ? e() : e;
}
const Xt = /* @__PURE__ */ m.forwardRef(function(t, n) {
  const {
    children: o,
    container: i,
    disablePortal: a = !1
  } = t, [s, l] = m.useState(null), c = Te(/* @__PURE__ */ m.isValidElement(o) ? fn(o) : null, n);
  if (At(() => {
    a || l(Yc(i) || document.body);
  }, [i, a]), At(() => {
    if (s && !a)
      return Co(n, s), () => {
        Co(n, null);
      };
  }, [n, s, a]), a) {
    if (/* @__PURE__ */ m.isValidElement(o)) {
      const d = {
        ref: c
      };
      return /* @__PURE__ */ m.cloneElement(o, d);
    }
    return o;
  }
  return s && /* @__PURE__ */ gi.createPortal(o, s);
});
process.env.NODE_ENV !== "production" && (Xt.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The children to render into the `container`.
   */
  children: r.node,
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
  container: r.oneOfType([St, r.func]),
  /**
   * The `children` will be under the DOM hierarchy of the parent component.
   * @default false
   */
  disablePortal: r.bool
});
process.env.NODE_ENV !== "production" && (Xt.propTypes = gr(Xt.propTypes));
const Jc = {
  entering: {
    opacity: 1
  },
  entered: {
    opacity: 1
  }
}, qr = /* @__PURE__ */ m.forwardRef(function(t, n) {
  const o = Jn(), i = {
    enter: o.transitions.duration.enteringScreen,
    exit: o.transitions.duration.leavingScreen
  }, {
    addEndListener: a,
    appear: s = !0,
    children: l,
    easing: c,
    in: d,
    onEnter: p,
    onEntered: f,
    onEntering: g,
    onExit: h,
    onExited: b,
    onExiting: v,
    style: w,
    timeout: E = i,
    // eslint-disable-next-line react/prop-types
    TransitionComponent: O = Be,
    ...C
  } = t, y = m.useRef(null), S = Te(y, fn(l), n), B = (z) => (I) => {
    if (z) {
      const k = y.current;
      I === void 0 ? z(k) : z(k, I);
    }
  }, $ = B(g), N = B((z, I) => {
    Jr(z);
    const k = Yt({
      style: w,
      timeout: E,
      easing: c
    }, {
      mode: "enter"
    });
    z.style.webkitTransition = o.transitions.create("opacity", k), z.style.transition = o.transitions.create("opacity", k), p && p(z, I);
  }), H = B(f), u = B(v), T = B((z) => {
    const I = Yt({
      style: w,
      timeout: E,
      easing: c
    }, {
      mode: "exit"
    });
    z.style.webkitTransition = o.transitions.create("opacity", I), z.style.transition = o.transitions.create("opacity", I), h && h(z);
  }), F = B(b);
  return /* @__PURE__ */ M(O, {
    appear: s,
    in: d,
    nodeRef: y,
    onEnter: N,
    onEntered: H,
    onEntering: $,
    onExit: T,
    onExited: F,
    onExiting: u,
    addEndListener: (z) => {
      a && a(y.current, z);
    },
    timeout: E,
    ...C,
    children: (z, {
      ownerState: I,
      ...k
    }) => /* @__PURE__ */ m.cloneElement(l, {
      style: {
        opacity: 0,
        visibility: z === "exited" && !d ? "hidden" : void 0,
        ...Jc[z],
        ...w,
        ...l.props.style
      },
      ref: S,
      ...k
    })
  });
});
process.env.NODE_ENV !== "production" && (qr.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Add a custom transition end trigger. Called with the transitioning DOM
   * node and a done callback. Allows for more fine grained transition end
   * logic. Note: Timeouts are still used as a fallback if provided.
   */
  addEndListener: r.func,
  /**
   * Perform the enter transition when it first mounts if `in` is also `true`.
   * Set this to `false` to disable this behavior.
   * @default true
   */
  appear: r.bool,
  /**
   * A single child content element.
   */
  children: It.isRequired,
  /**
   * The transition timing function.
   * You may specify a single easing or a object containing enter and exit values.
   */
  easing: r.oneOfType([r.shape({
    enter: r.string,
    exit: r.string
  }), r.string]),
  /**
   * If `true`, the component will transition in.
   */
  in: r.bool,
  /**
   * @ignore
   */
  onEnter: r.func,
  /**
   * @ignore
   */
  onEntered: r.func,
  /**
   * @ignore
   */
  onEntering: r.func,
  /**
   * @ignore
   */
  onExit: r.func,
  /**
   * @ignore
   */
  onExited: r.func,
  /**
   * @ignore
   */
  onExiting: r.func,
  /**
   * @ignore
   */
  style: r.object,
  /**
   * The duration for the transition, in milliseconds.
   * You may specify a single timeout for all transitions, or individually with an object.
   * @default {
   *   enter: theme.transitions.duration.enteringScreen,
   *   exit: theme.transitions.duration.leavingScreen,
   * }
   */
  timeout: r.oneOfType([r.number, r.shape({
    appear: r.number,
    enter: r.number,
    exit: r.number
  })])
});
function qc(e) {
  return pe("MuiBackdrop", e);
}
ue("MuiBackdrop", ["root", "invisible"]);
const Xc = (e) => {
  const {
    classes: t,
    invisible: n
  } = e;
  return he({
    root: ["root", n && "invisible"]
  }, qc, t);
}, Zc = Y("div", {
  name: "MuiBackdrop",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, n.invisible && t.invisible];
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
}), Xr = /* @__PURE__ */ m.forwardRef(function(t, n) {
  const o = be({
    props: t,
    name: "MuiBackdrop"
  }), {
    children: i,
    className: a,
    component: s = "div",
    invisible: l = !1,
    open: c,
    components: d = {},
    componentsProps: p = {},
    slotProps: f = {},
    slots: g = {},
    TransitionComponent: h,
    transitionDuration: b,
    ...v
  } = o, w = {
    ...o,
    component: s,
    invisible: l
  }, E = Xc(w), O = {
    transition: h,
    root: d.Root,
    ...g
  }, C = {
    ...p,
    ...f
  }, y = {
    slots: O,
    slotProps: C
  }, [S, B] = me("root", {
    elementType: Zc,
    externalForwardedProps: y,
    className: ee(E.root, a),
    ownerState: w
  }), [$, N] = me("transition", {
    elementType: qr,
    externalForwardedProps: y,
    ownerState: w
  });
  return /* @__PURE__ */ M($, {
    in: c,
    timeout: b,
    ...v,
    ...N,
    children: /* @__PURE__ */ M(S, {
      "aria-hidden": !0,
      ...B,
      classes: E,
      ref: n,
      children: i
    })
  });
});
process.env.NODE_ENV !== "production" && (Xr.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: r.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: r.object,
  /**
   * @ignore
   */
  className: r.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: r.elementType,
  /**
   * The components used for each slot inside.
   *
   * @deprecated Use the `slots` prop instead. This prop will be removed in v7. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   *
   * @default {}
   */
  components: r.shape({
    Root: r.elementType
  }),
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * @deprecated Use the `slotProps` prop instead. This prop will be removed in v7. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   *
   * @default {}
   */
  componentsProps: r.shape({
    root: r.object
  }),
  /**
   * If `true`, the backdrop is invisible.
   * It can be used when rendering a popover or a custom select component.
   * @default false
   */
  invisible: r.bool,
  /**
   * If `true`, the component is shown.
   */
  open: r.bool.isRequired,
  /**
   * The props used for each slot inside.
   * @default {}
   */
  slotProps: r.shape({
    root: r.oneOfType([r.func, r.object]),
    transition: r.oneOfType([r.func, r.object])
  }),
  /**
   * The components used for each slot inside.
   * @default {}
   */
  slots: r.shape({
    root: r.elementType,
    transition: r.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: r.oneOfType([r.arrayOf(r.oneOfType([r.func, r.object, r.bool])), r.func, r.object]),
  /**
   * The component used for the transition.
   * [Follow this guide](https://mui.com/material-ui/transitions/#transitioncomponent-prop) to learn more about the requirements for this component.
   * @default Fade
   * @deprecated Use `slots.transition` instead. This prop will be removed in v7. See [Migrating from deprecated APIs](/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   */
  TransitionComponent: r.elementType,
  /**
   * The duration for the transition, in milliseconds.
   * You may specify a single timeout for all transitions, or individually with an object.
   */
  transitionDuration: r.oneOfType([r.number, r.shape({
    appear: r.number,
    enter: r.number,
    exit: r.number
  })])
});
function _c(e) {
  return typeof e == "function" ? e() : e;
}
function eu(e) {
  return e ? e.props.hasOwnProperty("in") : !1;
}
const Uo = () => {
}, $t = new Lc();
function tu(e) {
  const {
    container: t,
    disableEscapeKeyDown: n = !1,
    disableScrollLock: o = !1,
    closeAfterTransition: i = !1,
    onTransitionEnter: a,
    onTransitionExited: s,
    children: l,
    onClose: c,
    open: d,
    rootRef: p
  } = e, f = m.useRef({}), g = m.useRef(null), h = m.useRef(null), b = Te(h, p), [v, w] = m.useState(!d), E = eu(l);
  let O = !0;
  (e["aria-hidden"] === "false" || e["aria-hidden"] === !1) && (O = !1);
  const C = () => Re(g.current), y = () => (f.current.modalRef = h.current, f.current.mount = g.current, f.current), S = () => {
    $t.mount(y(), {
      disableScrollLock: o
    }), h.current && (h.current.scrollTop = 0);
  }, B = ut(() => {
    const I = _c(t) || C().body;
    $t.add(y(), I), h.current && S();
  }), $ = () => $t.isTopModal(y()), N = ut((I) => {
    g.current = I, I && (d && $() ? S() : h.current && wt(h.current, O));
  }), H = m.useCallback(() => {
    $t.remove(y(), O);
  }, [O]);
  m.useEffect(() => () => {
    H();
  }, [H]), m.useEffect(() => {
    d ? B() : (!E || !i) && H();
  }, [d, H, E, i, B]);
  const u = (I) => (k) => {
    var G;
    (G = I.onKeyDown) == null || G.call(I, k), !(k.key !== "Escape" || k.which === 229 || // Wait until IME is settled.
    !$()) && (n || (k.stopPropagation(), c && c(k, "escapeKeyDown")));
  }, T = (I) => (k) => {
    var G;
    (G = I.onClick) == null || G.call(I, k), k.target === k.currentTarget && c && c(k, "backdropClick");
  };
  return {
    getRootProps: (I = {}) => {
      const k = wr(e);
      delete k.onTransitionEnter, delete k.onTransitionExited;
      const G = {
        ...k,
        ...I
      };
      return {
        /*
         * Marking an element with the role presentation indicates to assistive technology
         * that this element should be ignored; it exists to support the web application and
         * is not meant for humans to interact with directly.
         * https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/no-static-element-interactions.md
         */
        role: "presentation",
        ...G,
        onKeyDown: u(G),
        ref: b
      };
    },
    getBackdropProps: (I = {}) => {
      const k = I;
      return {
        "aria-hidden": !0,
        ...k,
        onClick: T(k),
        open: d
      };
    },
    getTransitionProps: () => {
      const I = () => {
        w(!1), a && a();
      }, k = () => {
        w(!0), s && s(), i && H();
      };
      return {
        onEnter: vo(I, (l == null ? void 0 : l.props.onEnter) ?? Uo),
        onExited: vo(k, (l == null ? void 0 : l.props.onExited) ?? Uo)
      };
    },
    rootRef: b,
    portalRef: N,
    isTopModal: $,
    exited: v,
    hasTransition: E
  };
}
function nu(e) {
  return pe("MuiModal", e);
}
ue("MuiModal", ["root", "hidden", "backdrop"]);
const ou = (e) => {
  const {
    open: t,
    exited: n,
    classes: o
  } = e;
  return he({
    root: ["root", !t && n && "hidden"],
    backdrop: ["backdrop"]
  }, nu, o);
}, ru = Y("div", {
  name: "MuiModal",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, !n.open && n.exited && t.hidden];
  }
})(ge(({
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
}))), iu = Y(Xr, {
  name: "MuiModal",
  slot: "Backdrop",
  overridesResolver: (e, t) => t.backdrop
})({
  zIndex: -1
}), Zr = /* @__PURE__ */ m.forwardRef(function(t, n) {
  const o = be({
    name: "MuiModal",
    props: t
  }), {
    BackdropComponent: i = iu,
    BackdropProps: a,
    classes: s,
    className: l,
    closeAfterTransition: c = !1,
    children: d,
    container: p,
    component: f,
    components: g = {},
    componentsProps: h = {},
    disableAutoFocus: b = !1,
    disableEnforceFocus: v = !1,
    disableEscapeKeyDown: w = !1,
    disablePortal: E = !1,
    disableRestoreFocus: O = !1,
    disableScrollLock: C = !1,
    hideBackdrop: y = !1,
    keepMounted: S = !1,
    onBackdropClick: B,
    onClose: $,
    onTransitionEnter: N,
    onTransitionExited: H,
    open: u,
    slotProps: T = {},
    slots: F = {},
    // eslint-disable-next-line react/prop-types
    theme: j,
    ...z
  } = o, I = {
    ...o,
    closeAfterTransition: c,
    disableAutoFocus: b,
    disableEnforceFocus: v,
    disableEscapeKeyDown: w,
    disablePortal: E,
    disableRestoreFocus: O,
    disableScrollLock: C,
    hideBackdrop: y,
    keepMounted: S
  }, {
    getRootProps: k,
    getBackdropProps: G,
    getTransitionProps: oe,
    portalRef: D,
    isTopModal: A,
    exited: R,
    hasTransition: q
  } = tu({
    ...I,
    rootRef: n
  }), J = {
    ...I,
    exited: R
  }, Q = ou(J), L = {};
  if (d.props.tabIndex === void 0 && (L.tabIndex = "-1"), q) {
    const {
      onEnter: X,
      onExited: Z
    } = oe();
    L.onEnter = X, L.onExited = Z;
  }
  const K = {
    slots: {
      root: g.Root,
      backdrop: g.Backdrop,
      ...F
    },
    slotProps: {
      ...h,
      ...T
    }
  }, [W, ne] = me("root", {
    ref: n,
    elementType: ru,
    externalForwardedProps: {
      ...K,
      ...z,
      component: f
    },
    getSlotProps: k,
    ownerState: J,
    className: ee(l, Q == null ? void 0 : Q.root, !J.open && J.exited && (Q == null ? void 0 : Q.hidden))
  }), [re, V] = me("backdrop", {
    ref: a == null ? void 0 : a.ref,
    elementType: i,
    externalForwardedProps: K,
    shouldForwardComponentProp: !0,
    additionalProps: a,
    getSlotProps: (X) => G({
      ...X,
      onClick: (Z) => {
        B && B(Z), X != null && X.onClick && X.onClick(Z);
      }
    }),
    className: ee(a == null ? void 0 : a.className, Q == null ? void 0 : Q.backdrop),
    ownerState: J
  });
  return !S && !u && (!q || R) ? null : /* @__PURE__ */ M(Xt, {
    ref: D,
    container: p,
    disablePortal: E,
    children: /* @__PURE__ */ Oe(W, {
      ...ne,
      children: [!y && i ? /* @__PURE__ */ M(re, {
        ...V
      }) : null, /* @__PURE__ */ M(qt, {
        disableEnforceFocus: v,
        disableAutoFocus: b,
        disableRestoreFocus: O,
        isEnabled: A,
        open: u,
        children: /* @__PURE__ */ m.cloneElement(d, L)
      })]
    })
  });
});
process.env.NODE_ENV !== "production" && (Zr.propTypes = {
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
  BackdropComponent: r.elementType,
  /**
   * Props applied to the [`Backdrop`](https://mui.com/material-ui/api/backdrop/) element.
   * @deprecated Use `slotProps.backdrop` instead.
   */
  BackdropProps: r.object,
  /**
   * A single child content element.
   */
  children: It.isRequired,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: r.object,
  /**
   * @ignore
   */
  className: r.string,
  /**
   * When set to true the Modal waits until a nested Transition is completed before closing.
   * @default false
   */
  closeAfterTransition: r.bool,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: r.elementType,
  /**
   * The components used for each slot inside.
   *
   * @deprecated Use the `slots` prop instead. This prop will be removed in v7. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   *
   * @default {}
   */
  components: r.shape({
    Backdrop: r.elementType,
    Root: r.elementType
  }),
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * @deprecated Use the `slotProps` prop instead. This prop will be removed in v7. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   *
   * @default {}
   */
  componentsProps: r.shape({
    backdrop: r.oneOfType([r.func, r.object]),
    root: r.oneOfType([r.func, r.object])
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
  container: r.oneOfType([St, r.func]),
  /**
   * If `true`, the modal will not automatically shift focus to itself when it opens, and
   * replace it to the last focused element when it closes.
   * This also works correctly with any modal children that have the `disableAutoFocus` prop.
   *
   * Generally this should never be set to `true` as it makes the modal less
   * accessible to assistive technologies, like screen readers.
   * @default false
   */
  disableAutoFocus: r.bool,
  /**
   * If `true`, the modal will not prevent focus from leaving the modal while open.
   *
   * Generally this should never be set to `true` as it makes the modal less
   * accessible to assistive technologies, like screen readers.
   * @default false
   */
  disableEnforceFocus: r.bool,
  /**
   * If `true`, hitting escape will not fire the `onClose` callback.
   * @default false
   */
  disableEscapeKeyDown: r.bool,
  /**
   * The `children` will be under the DOM hierarchy of the parent component.
   * @default false
   */
  disablePortal: r.bool,
  /**
   * If `true`, the modal will not restore focus to previously focused element once
   * modal is hidden or unmounted.
   * @default false
   */
  disableRestoreFocus: r.bool,
  /**
   * Disable the scroll lock behavior.
   * @default false
   */
  disableScrollLock: r.bool,
  /**
   * If `true`, the backdrop is not rendered.
   * @default false
   */
  hideBackdrop: r.bool,
  /**
   * Always keep the children in the DOM.
   * This prop can be useful in SEO situation or
   * when you want to maximize the responsiveness of the Modal.
   * @default false
   */
  keepMounted: r.bool,
  /**
   * Callback fired when the backdrop is clicked.
   * @deprecated Use the `onClose` prop with the `reason` argument to handle the `backdropClick` events.
   */
  onBackdropClick: r.func,
  /**
   * Callback fired when the component requests to be closed.
   * The `reason` parameter can optionally be used to control the response to `onClose`.
   *
   * @param {object} event The event source of the callback.
   * @param {string} reason Can be: `"escapeKeyDown"`, `"backdropClick"`.
   */
  onClose: r.func,
  /**
   * A function called when a transition enters.
   */
  onTransitionEnter: r.func,
  /**
   * A function called when a transition has exited.
   */
  onTransitionExited: r.func,
  /**
   * If `true`, the component is shown.
   */
  open: r.bool.isRequired,
  /**
   * The props used for each slot inside the Modal.
   * @default {}
   */
  slotProps: r.shape({
    backdrop: r.oneOfType([r.func, r.object]),
    root: r.oneOfType([r.func, r.object])
  }),
  /**
   * The components used for each slot inside the Modal.
   * Either a string to use a HTML element or a component.
   * @default {}
   */
  slots: r.shape({
    backdrop: r.elementType,
    root: r.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: r.oneOfType([r.arrayOf(r.oneOfType([r.func, r.object, r.bool])), r.func, r.object])
});
function au(e) {
  return pe("MuiPaper", e);
}
ue("MuiPaper", ["root", "rounded", "outlined", "elevation", "elevation0", "elevation1", "elevation2", "elevation3", "elevation4", "elevation5", "elevation6", "elevation7", "elevation8", "elevation9", "elevation10", "elevation11", "elevation12", "elevation13", "elevation14", "elevation15", "elevation16", "elevation17", "elevation18", "elevation19", "elevation20", "elevation21", "elevation22", "elevation23", "elevation24"]);
const su = (e) => {
  const {
    square: t,
    elevation: n,
    variant: o,
    classes: i
  } = e, a = {
    root: ["root", o, !t && "rounded", o === "elevation" && `elevation${n}`]
  };
  return he(a, au, i);
}, lu = Y("div", {
  name: "MuiPaper",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, t[n.variant], !n.square && t.rounded, n.variant === "elevation" && t[`elevation${n.elevation}`]];
  }
})(ge(({
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
}))), _r = /* @__PURE__ */ m.forwardRef(function(t, n) {
  var h;
  const o = be({
    props: t,
    name: "MuiPaper"
  }), i = Jn(), {
    className: a,
    component: s = "div",
    elevation: l = 1,
    square: c = !1,
    variant: d = "elevation",
    ...p
  } = o, f = {
    ...o,
    component: s,
    elevation: l,
    square: c,
    variant: d
  }, g = su(f);
  return process.env.NODE_ENV !== "production" && i.shadows[l] === void 0 && console.error([`MUI: The elevation provided <Paper elevation={${l}}> is not available in the theme.`, `Please make sure that \`theme.shadows[${l}]\` is defined.`].join(`
`)), /* @__PURE__ */ M(lu, {
    as: s,
    ownerState: f,
    className: ee(g.root, a),
    ref: n,
    ...p,
    style: {
      ...d === "elevation" && {
        "--Paper-shadow": (i.vars || i).shadows[l],
        ...i.vars && {
          "--Paper-overlay": (h = i.vars.overlays) == null ? void 0 : h[l]
        },
        ...!i.vars && i.palette.mode === "dark" && {
          "--Paper-overlay": `linear-gradient(${U("#fff", Mn(l))}, ${U("#fff", Mn(l))})`
        }
      },
      ...p.style
    }
  });
});
process.env.NODE_ENV !== "production" && (_r.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: r.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: r.object,
  /**
   * @ignore
   */
  className: r.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: r.elementType,
  /**
   * Shadow depth, corresponds to `dp` in the spec.
   * It accepts values between 0 and 24 inclusive.
   * @default 1
   */
  elevation: et(Er, (e) => {
    const {
      elevation: t,
      variant: n
    } = e;
    return t > 0 && n === "outlined" ? new Error(`MUI: Combining \`elevation={${t}}\` with \`variant="${n}"\` has no effect. Either use \`elevation={0}\` or use a different \`variant\`.`) : null;
  }),
  /**
   * If `true`, rounded corners are disabled.
   * @default false
   */
  square: r.bool,
  /**
   * @ignore
   */
  style: r.object,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: r.oneOfType([r.arrayOf(r.oneOfType([r.func, r.object, r.bool])), r.func, r.object]),
  /**
   * The variant to use.
   * @default 'elevation'
   */
  variant: r.oneOfType([r.oneOf(["elevation", "outlined"]), r.string])
});
function cu(e) {
  return pe("MuiPopover", e);
}
ue("MuiPopover", ["root", "paper"]);
function Qo(e, t) {
  let n = 0;
  return typeof t == "number" ? n = t : t === "center" ? n = e.height / 2 : t === "bottom" && (n = e.height), n;
}
function Ko(e, t) {
  let n = 0;
  return typeof t == "number" ? n = t : t === "center" ? n = e.width / 2 : t === "right" && (n = e.width), n;
}
function Ho(e) {
  return [e.horizontal, e.vertical].map((t) => typeof t == "number" ? `${t}px` : t).join(" ");
}
function Et(e) {
  return typeof e == "function" ? e() : e;
}
const uu = (e) => {
  const {
    classes: t
  } = e;
  return he({
    root: ["root"],
    paper: ["paper"]
  }, cu, t);
}, du = Y(Zr, {
  name: "MuiPopover",
  slot: "Root",
  overridesResolver: (e, t) => t.root
})({}), ei = Y(_r, {
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
}), ti = /* @__PURE__ */ m.forwardRef(function(t, n) {
  const o = be({
    props: t,
    name: "MuiPopover"
  }), {
    action: i,
    anchorEl: a,
    anchorOrigin: s = {
      vertical: "top",
      horizontal: "left"
    },
    anchorPosition: l,
    anchorReference: c = "anchorEl",
    children: d,
    className: p,
    container: f,
    elevation: g = 8,
    marginThreshold: h = 16,
    open: b,
    PaperProps: v = {},
    // TODO: remove in v7
    slots: w = {},
    slotProps: E = {},
    transformOrigin: O = {
      vertical: "top",
      horizontal: "left"
    },
    TransitionComponent: C,
    // TODO: remove in v7
    transitionDuration: y = "auto",
    TransitionProps: S = {},
    // TODO: remove in v7
    disableScrollLock: B = !1,
    ...$
  } = o, N = m.useRef(), H = {
    ...o,
    anchorOrigin: s,
    anchorReference: c,
    elevation: g,
    marginThreshold: h,
    transformOrigin: O,
    TransitionComponent: C,
    transitionDuration: y,
    TransitionProps: S
  }, u = uu(H), T = m.useCallback(() => {
    if (c === "anchorPosition")
      return process.env.NODE_ENV !== "production" && (l || console.error('MUI: You need to provide a `anchorPosition` prop when using <Popover anchorReference="anchorPosition" />.')), l;
    const V = Et(a), X = V && V.nodeType === 1 ? V : Re(N.current).body, Z = X.getBoundingClientRect();
    if (process.env.NODE_ENV !== "production") {
      const fe = X.getBoundingClientRect();
      process.env.NODE_ENV !== "test" && fe.top === 0 && fe.left === 0 && fe.right === 0 && fe.bottom === 0 && console.warn(["MUI: The `anchorEl` prop provided to the component is invalid.", "The anchor element should be part of the document layout.", "Make sure the element is present in the document or that it's not display none."].join(`
`));
    }
    return {
      top: Z.top + Qo(Z, s.vertical),
      left: Z.left + Ko(Z, s.horizontal)
    };
  }, [a, s.horizontal, s.vertical, l, c]), F = m.useCallback((V) => ({
    vertical: Qo(V, O.vertical),
    horizontal: Ko(V, O.horizontal)
  }), [O.horizontal, O.vertical]), j = m.useCallback((V) => {
    const X = {
      width: V.offsetWidth,
      height: V.offsetHeight
    }, Z = F(X);
    if (c === "none")
      return {
        top: null,
        left: null,
        transformOrigin: Ho(Z)
      };
    const fe = T();
    let ke = fe.top - Z.vertical, ze = fe.left - Z.horizontal;
    const Rt = ke + X.height, We = ze + X.width, Ve = _e(Et(a)), Ye = Ve.innerHeight - h, ft = Ve.innerWidth - h;
    if (h !== null && ke < h) {
      const ve = ke - h;
      ke -= ve, Z.vertical += ve;
    } else if (h !== null && Rt > Ye) {
      const ve = Rt - Ye;
      ke -= ve, Z.vertical += ve;
    }
    if (process.env.NODE_ENV !== "production" && X.height > Ye && X.height && Ye && console.error(["MUI: The popover component is too tall.", `Some part of it can not be seen on the screen (${X.height - Ye}px).`, "Please consider adding a `max-height` to improve the user-experience."].join(`
`)), h !== null && ze < h) {
      const ve = ze - h;
      ze -= ve, Z.horizontal += ve;
    } else if (We > ft) {
      const ve = We - ft;
      ze -= ve, Z.horizontal += ve;
    }
    return {
      top: `${Math.round(ke)}px`,
      left: `${Math.round(ze)}px`,
      transformOrigin: Ho(Z)
    };
  }, [a, c, T, F, h]), [z, I] = m.useState(b), k = m.useCallback(() => {
    const V = N.current;
    if (!V)
      return;
    const X = j(V);
    X.top !== null && V.style.setProperty("top", X.top), X.left !== null && (V.style.left = X.left), V.style.transformOrigin = X.transformOrigin, I(!0);
  }, [j]);
  m.useEffect(() => (B && window.addEventListener("scroll", k), () => window.removeEventListener("scroll", k)), [a, B, k]);
  const G = () => {
    k();
  }, oe = () => {
    I(!1);
  };
  m.useEffect(() => {
    b && k();
  }), m.useImperativeHandle(i, () => b ? {
    updatePosition: () => {
      k();
    }
  } : null, [b, k]), m.useEffect(() => {
    if (!b)
      return;
    const V = _a(() => {
      k();
    }), X = _e(Et(a));
    return X.addEventListener("resize", V), () => {
      V.clear(), X.removeEventListener("resize", V);
    };
  }, [a, b, k]);
  let D = y;
  const A = {
    slots: {
      transition: C,
      ...w
    },
    slotProps: {
      transition: S,
      paper: v,
      ...E
    }
  }, [R, q] = me("transition", {
    elementType: Jt,
    externalForwardedProps: A,
    ownerState: H,
    getSlotProps: (V) => ({
      ...V,
      onEntering: (X, Z) => {
        var fe;
        (fe = V.onEntering) == null || fe.call(V, X, Z), G();
      },
      onExited: (X) => {
        var Z;
        (Z = V.onExited) == null || Z.call(V, X), oe();
      }
    }),
    additionalProps: {
      appear: !0,
      in: b
    }
  });
  y === "auto" && !R.muiSupportAuto && (D = void 0);
  const J = f || (a ? Re(Et(a)).body : void 0), [Q, {
    slots: L,
    slotProps: K,
    ...W
  }] = me("root", {
    ref: n,
    elementType: du,
    externalForwardedProps: {
      ...A,
      ...$
    },
    shouldForwardComponentProp: !0,
    additionalProps: {
      slots: {
        backdrop: w.backdrop
      },
      slotProps: {
        backdrop: Mr(typeof E.backdrop == "function" ? E.backdrop(H) : E.backdrop, {
          invisible: !0
        })
      },
      container: J,
      open: b
    },
    ownerState: H,
    className: ee(u.root, p)
  }), [ne, re] = me("paper", {
    ref: N,
    className: u.paper,
    elementType: ei,
    externalForwardedProps: A,
    shouldForwardComponentProp: !0,
    additionalProps: {
      elevation: g,
      style: z ? void 0 : {
        opacity: 0
      }
    },
    ownerState: H
  });
  return /* @__PURE__ */ M(Q, {
    ...W,
    ...!Pc(Q) && {
      slots: L,
      slotProps: K,
      disableScrollLock: B
    },
    children: /* @__PURE__ */ M(R, {
      ...q,
      timeout: D,
      children: /* @__PURE__ */ M(ne, {
        ...re,
        children: d
      })
    })
  });
});
process.env.NODE_ENV !== "production" && (ti.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * A ref for imperative actions.
   * It currently only supports updatePosition() action.
   */
  action: pn,
  /**
   * An HTML element, [PopoverVirtualElement](https://mui.com/material-ui/react-popover/#virtual-element),
   * or a function that returns either.
   * It's used to set the position of the popover.
   */
  anchorEl: et(r.oneOfType([St, r.func]), (e) => {
    if (e.open && (!e.anchorReference || e.anchorReference === "anchorEl")) {
      const t = Et(e.anchorEl);
      if (t && t.nodeType === 1) {
        const n = t.getBoundingClientRect();
        if (process.env.NODE_ENV !== "test" && n.top === 0 && n.left === 0 && n.right === 0 && n.bottom === 0)
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
  anchorOrigin: r.shape({
    horizontal: r.oneOfType([r.oneOf(["center", "left", "right"]), r.number]).isRequired,
    vertical: r.oneOfType([r.oneOf(["bottom", "center", "top"]), r.number]).isRequired
  }),
  /**
   * This is the position that may be used to set the position of the popover.
   * The coordinates are relative to the application's client area.
   */
  anchorPosition: r.shape({
    left: r.number.isRequired,
    top: r.number.isRequired
  }),
  /**
   * This determines which anchor prop to refer to when setting
   * the position of the popover.
   * @default 'anchorEl'
   */
  anchorReference: r.oneOf(["anchorEl", "anchorPosition", "none"]),
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
  BackdropComponent: r.elementType,
  /**
   * Props applied to the [`Backdrop`](/material-ui/api/backdrop/) element.
   * @deprecated Use `slotProps.backdrop` instead. This prop will be removed in v7. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   */
  BackdropProps: r.object,
  /**
   * The content of the component.
   */
  children: r.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: r.object,
  /**
   * @ignore
   */
  className: r.string,
  /**
   * An HTML element, component instance, or function that returns either.
   * The `container` will passed to the Modal component.
   *
   * By default, it uses the body of the anchorEl's top-level document object,
   * so it's simply `document.body` most of the time.
   */
  container: r.oneOfType([St, r.func]),
  /**
   * Disable the scroll lock behavior.
   * @default false
   */
  disableScrollLock: r.bool,
  /**
   * The elevation of the popover.
   * @default 8
   */
  elevation: Er,
  /**
   * Specifies how close to the edge of the window the popover can appear.
   * If null, the popover will not be constrained by the window.
   * @default 16
   */
  marginThreshold: r.number,
  /**
   * Callback fired when the component requests to be closed.
   * The `reason` parameter can optionally be used to control the response to `onClose`.
   */
  onClose: r.func,
  /**
   * If `true`, the component is shown.
   */
  open: r.bool.isRequired,
  /**
   * Props applied to the [`Paper`](https://mui.com/material-ui/api/paper/) element.
   *
   * This prop is an alias for `slotProps.paper` and will be overriden by it if both are used.
   * @deprecated Use `slotProps.paper` instead.
   *
   * @default {}
   */
  PaperProps: r.shape({
    component: fr
  }),
  /**
   * The props used for each slot inside.
   * @default {}
   */
  slotProps: r.shape({
    backdrop: r.oneOfType([r.func, r.object]),
    paper: r.oneOfType([r.func, r.object]),
    root: r.oneOfType([r.func, r.object]),
    transition: r.oneOfType([r.func, r.object])
  }),
  /**
   * The components used for each slot inside.
   * @default {}
   */
  slots: r.shape({
    backdrop: r.elementType,
    paper: r.elementType,
    root: r.elementType,
    transition: r.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: r.oneOfType([r.arrayOf(r.oneOfType([r.func, r.object, r.bool])), r.func, r.object]),
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
  transformOrigin: r.shape({
    horizontal: r.oneOfType([r.oneOf(["center", "left", "right"]), r.number]).isRequired,
    vertical: r.oneOfType([r.oneOf(["bottom", "center", "top"]), r.number]).isRequired
  }),
  /**
   * The component used for the transition.
   * [Follow this guide](https://mui.com/material-ui/transitions/#transitioncomponent-prop) to learn more about the requirements for this component.
   * @deprecated use the `slots.transition` prop instead. This prop will be removed in v7. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   * @default Grow
   */
  TransitionComponent: r.elementType,
  /**
   * Set to 'auto' to automatically calculate transition time based on height.
   * @default 'auto'
   */
  transitionDuration: r.oneOfType([r.oneOf(["auto"]), r.number, r.shape({
    appear: r.number,
    enter: r.number,
    exit: r.number
  })]),
  /**
   * Props applied to the transition element.
   * By default, the element is based on this [`Transition`](https://reactcommunity.org/react-transition-group/transition/) component.
   * @deprecated use the `slotProps.transition` prop instead. This prop will be removed in v7. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   * @default {}
   */
  TransitionProps: r.object
});
function pu(e) {
  return pe("MuiMenu", e);
}
ue("MuiMenu", ["root", "paper", "list"]);
const fu = {
  vertical: "top",
  horizontal: "right"
}, gu = {
  vertical: "top",
  horizontal: "left"
}, hu = (e) => {
  const {
    classes: t
  } = e;
  return he({
    root: ["root"],
    paper: ["paper"],
    list: ["list"]
  }, pu, t);
}, bu = Y(ti, {
  shouldForwardProp: (e) => tt(e) || e === "classes",
  name: "MuiMenu",
  slot: "Root",
  overridesResolver: (e, t) => t.root
})({}), mu = Y(ei, {
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
}), yu = Y(Yr, {
  name: "MuiMenu",
  slot: "List",
  overridesResolver: (e, t) => t.list
})({
  // We disable the focus ring for mouse, touch and keyboard users.
  outline: 0
}), ni = /* @__PURE__ */ m.forwardRef(function(t, n) {
  const o = be({
    props: t,
    name: "MuiMenu"
  }), {
    autoFocus: i = !0,
    children: a,
    className: s,
    disableAutoFocusItem: l = !1,
    MenuListProps: c = {},
    onClose: d,
    open: p,
    PaperProps: f = {},
    PopoverClasses: g,
    transitionDuration: h = "auto",
    TransitionProps: {
      onEntering: b,
      ...v
    } = {},
    variant: w = "selectedMenu",
    slots: E = {},
    slotProps: O = {},
    ...C
  } = o, y = us(), S = {
    ...o,
    autoFocus: i,
    disableAutoFocusItem: l,
    MenuListProps: c,
    onEntering: b,
    PaperProps: f,
    transitionDuration: h,
    TransitionProps: v,
    variant: w
  }, B = hu(S), $ = i && !l && p, N = m.useRef(null), H = (D, A) => {
    N.current && N.current.adjustStyleForScrollbar(D, {
      direction: y ? "rtl" : "ltr"
    }), b && b(D, A);
  }, u = (D) => {
    D.key === "Tab" && (D.preventDefault(), d && d(D, "tabKeyDown"));
  };
  let T = -1;
  m.Children.map(a, (D, A) => {
    /* @__PURE__ */ m.isValidElement(D) && (process.env.NODE_ENV !== "production" && Zo(D) && console.error(["MUI: The Menu component doesn't accept a Fragment as a child.", "Consider providing an array instead."].join(`
`)), D.props.disabled || (w === "selectedMenu" && D.props.selected || T === -1) && (T = A));
  });
  const F = {
    slots: E,
    slotProps: {
      list: c,
      transition: v,
      paper: f,
      ...O
    }
  }, j = ls({
    elementType: E.root,
    externalSlotProps: O.root,
    ownerState: S,
    className: [B.root, s]
  }), [z, I] = me("paper", {
    className: B.paper,
    elementType: mu,
    externalForwardedProps: F,
    shouldForwardComponentProp: !0,
    ownerState: S
  }), [k, G] = me("list", {
    className: ee(B.list, c.className),
    elementType: yu,
    shouldForwardComponentProp: !0,
    externalForwardedProps: F,
    getSlotProps: (D) => ({
      ...D,
      onKeyDown: (A) => {
        var R;
        u(A), (R = D.onKeyDown) == null || R.call(D, A);
      }
    }),
    ownerState: S
  }), oe = typeof F.slotProps.transition == "function" ? F.slotProps.transition(S) : F.slotProps.transition;
  return /* @__PURE__ */ M(bu, {
    onClose: d,
    anchorOrigin: {
      vertical: "bottom",
      horizontal: y ? "right" : "left"
    },
    transformOrigin: y ? fu : gu,
    slots: {
      root: E.root,
      paper: z,
      backdrop: E.backdrop,
      ...E.transition && {
        // TODO: pass `slots.transition` directly once `TransitionComponent` is removed from Popover
        transition: E.transition
      }
    },
    slotProps: {
      root: j,
      paper: I,
      backdrop: typeof O.backdrop == "function" ? O.backdrop(S) : O.backdrop,
      transition: {
        ...oe,
        onEntering: (...D) => {
          var A;
          H(...D), (A = oe == null ? void 0 : oe.onEntering) == null || A.call(oe, ...D);
        }
      }
    },
    open: p,
    ref: n,
    transitionDuration: h,
    ownerState: S,
    ...C,
    classes: g,
    children: /* @__PURE__ */ M(k, {
      actions: N,
      autoFocus: i && (T === -1 || l),
      autoFocusItem: $,
      variant: w,
      ...G,
      children: a
    })
  });
});
process.env.NODE_ENV !== "production" && (ni.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * An HTML element, or a function that returns one.
   * It's used to set the position of the menu.
   */
  anchorEl: r.oneOfType([St, r.func]),
  /**
   * If `true` (Default) will focus the `[role="menu"]` if no focusable child is found. Disabled
   * children are not focusable. If you set this prop to `false` focus will be placed
   * on the parent modal container. This has severe accessibility implications
   * and should only be considered if you manage focus otherwise.
   * @default true
   */
  autoFocus: r.bool,
  /**
   * Menu contents, normally `MenuItem`s.
   */
  children: r.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: r.object,
  /**
   * @ignore
   */
  className: r.string,
  /**
   * When opening the menu will not focus the active item but the `[role="menu"]`
   * unless `autoFocus` is also set to `false`. Not using the default means not
   * following WAI-ARIA authoring practices. Please be considerate about possible
   * accessibility implications.
   * @default false
   */
  disableAutoFocusItem: r.bool,
  /**
   * Props applied to the [`MenuList`](https://mui.com/material-ui/api/menu-list/) element.
   * @deprecated use the `slotProps.list` prop instead. This prop will be removed in v7. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   * @default {}
   */
  MenuListProps: r.object,
  /**
   * Callback fired when the component requests to be closed.
   *
   * @param {object} event The event source of the callback.
   * @param {string} reason Can be: `"escapeKeyDown"`, `"backdropClick"`, `"tabKeyDown"`.
   */
  onClose: r.func,
  /**
   * If `true`, the component is shown.
   */
  open: r.bool.isRequired,
  /**
   * @ignore
   */
  PaperProps: r.object,
  /**
   * `classes` prop applied to the [`Popover`](https://mui.com/material-ui/api/popover/) element.
   */
  PopoverClasses: r.object,
  /**
   * The props used for each slot inside.
   * @default {}
   */
  slotProps: r.shape({
    backdrop: r.oneOfType([r.func, r.object]),
    list: r.oneOfType([r.func, r.object]),
    paper: r.oneOfType([r.func, r.object]),
    root: r.oneOfType([r.func, r.object]),
    transition: r.oneOfType([r.func, r.object])
  }),
  /**
   * The components used for each slot inside.
   * @default {}
   */
  slots: r.shape({
    backdrop: r.elementType,
    list: r.elementType,
    paper: r.elementType,
    root: r.elementType,
    transition: r.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: r.oneOfType([r.arrayOf(r.oneOfType([r.func, r.object, r.bool])), r.func, r.object]),
  /**
   * The length of the transition in `ms`, or 'auto'
   * @default 'auto'
   */
  transitionDuration: r.oneOfType([r.oneOf(["auto"]), r.number, r.shape({
    appear: r.number,
    enter: r.number,
    exit: r.number
  })]),
  /**
   * Props applied to the transition element.
   * By default, the element is based on this [`Transition`](https://reactcommunity.org/react-transition-group/transition/) component.
   * @deprecated use the `slotProps.transition` prop instead. This prop will be removed in v7. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   * @default {}
   */
  TransitionProps: r.object,
  /**
   * The variant to use. Use `menu` to prevent selected items from impacting the initial focus.
   * @default 'selectedMenu'
   */
  variant: r.oneOf(["menu", "selectedMenu"])
});
const vu = Y(ni)(() => ({
  "& .MuiPaper-root": {
    boxShadow: "0px 2px 6px 2px #00000026, 0px 1px 2px 0px #0000004D"
  }
})), Xu = ({ open: e, ...t }) => /* @__PURE__ */ M(vu, { open: e, ...t }), Go = ue("MuiDivider", ["root", "absolute", "fullWidth", "inset", "middle", "flexItem", "light", "vertical", "withChildren", "withChildrenVertical", "textAlignRight", "textAlignLeft", "wrapper", "wrapperVertical"]), Wo = ue("MuiListItemIcon", ["root", "alignItemsFlexStart"]), Yo = ue("MuiListItemText", ["root", "multiline", "dense", "inset", "primary", "secondary"]);
function Cu(e) {
  return pe("MuiMenuItem", e);
}
const mt = ue("MuiMenuItem", ["root", "focusVisible", "dense", "disabled", "divider", "gutters", "selected"]), Eu = (e, t) => {
  const {
    ownerState: n
  } = e;
  return [t.root, n.dense && t.dense, n.divider && t.divider, !n.disableGutters && t.gutters];
}, xu = (e) => {
  const {
    disabled: t,
    dense: n,
    divider: o,
    disableGutters: i,
    selected: a,
    classes: s
  } = e, c = he({
    root: ["root", n && "dense", t && "disabled", !i && "gutters", o && "divider", a && "selected"]
  }, Cu, s);
  return {
    ...s,
    ...c
  };
}, wu = Y(He, {
  shouldForwardProp: (e) => tt(e) || e === "classes",
  name: "MuiMenuItem",
  slot: "Root",
  overridesResolver: Eu
})(ge(({
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
  [`&.${mt.selected}`]: {
    backgroundColor: e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})` : U(e.palette.primary.main, e.palette.action.selectedOpacity),
    [`&.${mt.focusVisible}`]: {
      backgroundColor: e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))` : U(e.palette.primary.main, e.palette.action.selectedOpacity + e.palette.action.focusOpacity)
    }
  },
  [`&.${mt.selected}:hover`]: {
    backgroundColor: e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))` : U(e.palette.primary.main, e.palette.action.selectedOpacity + e.palette.action.hoverOpacity),
    // Reset on touch devices, it doesn't add specificity
    "@media (hover: none)": {
      backgroundColor: e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})` : U(e.palette.primary.main, e.palette.action.selectedOpacity)
    }
  },
  [`&.${mt.focusVisible}`]: {
    backgroundColor: (e.vars || e).palette.action.focus
  },
  [`&.${mt.disabled}`]: {
    opacity: (e.vars || e).palette.action.disabledOpacity
  },
  [`& + .${Go.root}`]: {
    marginTop: e.spacing(1),
    marginBottom: e.spacing(1)
  },
  [`& + .${Go.inset}`]: {
    marginLeft: 52
  },
  [`& .${Yo.root}`]: {
    marginTop: 0,
    marginBottom: 0
  },
  [`& .${Yo.inset}`]: {
    paddingLeft: 36
  },
  [`& .${Wo.root}`]: {
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
      [`& .${Wo.root} svg`]: {
        fontSize: "1.25rem"
      }
    }
  }]
}))), oi = /* @__PURE__ */ m.forwardRef(function(t, n) {
  const o = be({
    props: t,
    name: "MuiMenuItem"
  }), {
    autoFocus: i = !1,
    component: a = "li",
    dense: s = !1,
    divider: l = !1,
    disableGutters: c = !1,
    focusVisibleClassName: d,
    role: p = "menuitem",
    tabIndex: f,
    className: g,
    ...h
  } = o, b = m.useContext(Wt), v = m.useMemo(() => ({
    dense: s || b.dense || !1,
    disableGutters: c
  }), [b.dense, s, c]), w = m.useRef(null);
  At(() => {
    i && (w.current ? w.current.focus() : process.env.NODE_ENV !== "production" && console.error("MUI: Unable to set focus to a MenuItem whose component has not been rendered."));
  }, [i]);
  const E = {
    ...o,
    dense: v.dense,
    divider: l,
    disableGutters: c
  }, O = xu(o), C = Te(w, n);
  let y;
  return o.disabled || (y = f !== void 0 ? f : -1), /* @__PURE__ */ M(Wt.Provider, {
    value: v,
    children: /* @__PURE__ */ M(wu, {
      ref: C,
      role: p,
      tabIndex: y,
      component: a,
      focusVisibleClassName: ee(O.focusVisible, d),
      className: ee(O.root, g),
      ...h,
      ownerState: E,
      classes: O
    })
  });
});
process.env.NODE_ENV !== "production" && (oi.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * If `true`, the list item is focused during the first mount.
   * Focus will also be triggered if the value changes from false to true.
   * @default false
   */
  autoFocus: r.bool,
  /**
   * The content of the component.
   */
  children: r.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: r.object,
  /**
   * @ignore
   */
  className: r.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: r.elementType,
  /**
   * If `true`, compact vertical padding designed for keyboard and mouse input is used.
   * The prop defaults to the value inherited from the parent Menu component.
   * @default false
   */
  dense: r.bool,
  /**
   * @ignore
   */
  disabled: r.bool,
  /**
   * If `true`, the left and right padding is removed.
   * @default false
   */
  disableGutters: r.bool,
  /**
   * If `true`, a 1px light border is added to the bottom of the menu item.
   * @default false
   */
  divider: r.bool,
  /**
   * This prop can help identify which element has keyboard focus.
   * The class name will be applied when the element gains the focus through keyboard interaction.
   * It's a polyfill for the [CSS :focus-visible selector](https://drafts.csswg.org/selectors-4/#the-focus-visible-pseudo).
   * The rationale for using this feature [is explained here](https://github.com/WICG/focus-visible/blob/HEAD/explainer.md).
   * A [polyfill can be used](https://github.com/WICG/focus-visible) to apply a `focus-visible` class to other components
   * if needed.
   */
  focusVisibleClassName: r.string,
  /**
   * @ignore
   */
  role: r.string,
  /**
   * If `true`, the component is selected.
   * @default false
   */
  selected: r.bool,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: r.oneOfType([r.arrayOf(r.oneOfType([r.func, r.object, r.bool])), r.func, r.object]),
  /**
   * @default 0
   */
  tabIndex: r.number
});
const Au = (e, t = "primary") => {
  var i;
  const n = Ae[t], o = ((i = e == null ? void 0 : e.palette) == null ? void 0 : i[t]) ?? n;
  return {
    fontColor: o.menuFont ?? n.menuFont,
    selectedBg: o.tonal ?? n.tonal,
    selectedFont: o.onTonal ?? n.onTonal
  };
}, Su = Y(
  oi,
  {}
)(({ theme: e }) => {
  const t = Au(e);
  return {
    fontFamily: "Noto Sans, Noto Sans TC, sans-serif",
    color: t.fontColor,
    "&:hover": {
      backgroundColor: U(t.fontColor, 0.08)
    },
    "&.Mui-selected": {
      backgroundColor: t.selectedBg,
      color: t.selectedFont
    },
    "& .MuiTouchRipple-root": {
      display: "none"
    }
  };
}), Zu = ({ ...e }) => /* @__PURE__ */ M(Su, { ...e });
function Tu(e) {
  return pe("MuiSwitch", e);
}
const ye = ue("MuiSwitch", ["root", "edgeStart", "edgeEnd", "switchBase", "colorPrimary", "colorSecondary", "sizeSmall", "sizeMedium", "checked", "disabled", "input", "thumb", "track"]), Fu = (e) => {
  const {
    classes: t,
    edge: n,
    size: o,
    color: i,
    checked: a,
    disabled: s
  } = e, l = {
    root: ["root", n && `edge${P(n)}`, `size${P(o)}`],
    switchBase: ["switchBase", `color${P(i)}`, a && "checked", s && "disabled"],
    thumb: ["thumb"],
    track: ["track"],
    input: ["input"]
  }, c = he(l, Tu, t);
  return {
    ...t,
    // forward the disabled and checked classes to the SwitchBase
    ...c
  };
}, Ou = Y("span", {
  name: "MuiSwitch",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, n.edge && t[`edge${P(n.edge)}`], t[`size${P(n.size)}`]];
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
      [`& .${ye.thumb}`]: {
        width: 16,
        height: 16
      },
      [`& .${ye.switchBase}`]: {
        padding: 4,
        [`&.${ye.checked}`]: {
          transform: "translateX(16px)"
        }
      }
    }
  }]
}), ku = Y(eo, {
  name: "MuiSwitch",
  slot: "SwitchBase",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.switchBase, {
      [`& .${ye.input}`]: t.input
    }, n.color !== "default" && t[`color${P(n.color)}`]];
  }
})(ge(({
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
  [`&.${ye.checked}`]: {
    transform: "translateX(20px)"
  },
  [`&.${ye.disabled}`]: {
    color: e.vars ? e.vars.palette.Switch.defaultDisabledColor : `${e.palette.mode === "light" ? e.palette.grey[100] : e.palette.grey[600]}`
  },
  [`&.${ye.checked} + .${ye.track}`]: {
    opacity: 0.5
  },
  [`&.${ye.disabled} + .${ye.track}`]: {
    opacity: e.vars ? e.vars.opacity.switchTrackDisabled : `${e.palette.mode === "light" ? 0.12 : 0.2}`
  },
  [`& .${ye.input}`]: {
    left: "-100%",
    width: "300%"
  }
})), ge(({
  theme: e
}) => ({
  "&:hover": {
    backgroundColor: e.vars ? `rgba(${e.vars.palette.action.activeChannel} / ${e.vars.palette.action.hoverOpacity})` : U(e.palette.action.active, e.palette.action.hoverOpacity),
    // Reset on touch devices, it doesn't add specificity
    "@media (hover: none)": {
      backgroundColor: "transparent"
    }
  },
  variants: [...Object.entries(e.palette).filter(Se(["light"])).map(([t]) => ({
    props: {
      color: t
    },
    style: {
      [`&.${ye.checked}`]: {
        color: (e.vars || e).palette[t].main,
        "&:hover": {
          backgroundColor: e.vars ? `rgba(${e.vars.palette[t].mainChannel} / ${e.vars.palette.action.hoverOpacity})` : U(e.palette[t].main, e.palette.action.hoverOpacity),
          "@media (hover: none)": {
            backgroundColor: "transparent"
          }
        },
        [`&.${ye.disabled}`]: {
          color: e.vars ? e.vars.palette.Switch[`${t}DisabledColor`] : `${e.palette.mode === "light" ? dn(e.palette[t].main, 0.62) : un(e.palette[t].main, 0.55)}`
        }
      },
      [`&.${ye.checked} + .${ye.track}`]: {
        backgroundColor: (e.vars || e).palette[t].main
      }
    }
  }))]
}))), Iu = Y("span", {
  name: "MuiSwitch",
  slot: "Track",
  overridesResolver: (e, t) => t.track
})(ge(({
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
}))), Ru = Y("span", {
  name: "MuiSwitch",
  slot: "Thumb",
  overridesResolver: (e, t) => t.thumb
})(ge(({
  theme: e
}) => ({
  boxShadow: (e.vars || e).shadows[1],
  backgroundColor: "currentColor",
  width: 20,
  height: 20,
  borderRadius: "50%"
}))), ri = /* @__PURE__ */ m.forwardRef(function(t, n) {
  const o = be({
    props: t,
    name: "MuiSwitch"
  }), {
    className: i,
    color: a = "primary",
    edge: s = !1,
    size: l = "medium",
    sx: c,
    slots: d = {},
    slotProps: p = {},
    ...f
  } = o, g = {
    ...o,
    color: a,
    edge: s,
    size: l
  }, h = Fu(g), b = {
    slots: d,
    slotProps: p
  }, [v, w] = me("root", {
    className: ee(h.root, i),
    elementType: Ou,
    externalForwardedProps: b,
    ownerState: g,
    additionalProps: {
      sx: c
    }
  }), [E, O] = me("thumb", {
    className: h.thumb,
    elementType: Ru,
    externalForwardedProps: b,
    ownerState: g
  }), C = /* @__PURE__ */ M(E, {
    ...O
  }), [y, S] = me("track", {
    className: h.track,
    elementType: Iu,
    externalForwardedProps: b,
    ownerState: g
  });
  return /* @__PURE__ */ Oe(v, {
    ...w,
    children: [/* @__PURE__ */ M(ku, {
      type: "checkbox",
      icon: C,
      checkedIcon: C,
      ref: n,
      ownerState: g,
      ...f,
      classes: {
        ...h,
        root: h.switchBase
      },
      slots: {
        ...d.switchBase && {
          root: d.switchBase
        },
        ...d.input && {
          input: d.input
        }
      },
      slotProps: {
        ...p.switchBase && {
          root: typeof p.switchBase == "function" ? p.switchBase(g) : p.switchBase
        },
        ...p.input && {
          input: typeof p.input == "function" ? p.input(g) : p.input
        }
      }
    }), /* @__PURE__ */ M(y, {
      ...S
    })]
  });
});
process.env.NODE_ENV !== "production" && (ri.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * If `true`, the component is checked.
   */
  checked: r.bool,
  /**
   * The icon to display when the component is checked.
   */
  checkedIcon: r.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: r.object,
  /**
   * @ignore
   */
  className: r.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * @default 'primary'
   */
  color: r.oneOfType([r.oneOf(["default", "primary", "secondary", "error", "info", "success", "warning"]), r.string]),
  /**
   * The default checked state. Use when the component is not controlled.
   */
  defaultChecked: r.bool,
  /**
   * If `true`, the component is disabled.
   */
  disabled: r.bool,
  /**
   * If `true`, the ripple effect is disabled.
   * @default false
   */
  disableRipple: r.bool,
  /**
   * If given, uses a negative margin to counteract the padding on one
   * side (this is often helpful for aligning the left or right
   * side of the icon with content above or below, without ruining the border
   * size and shape).
   * @default false
   */
  edge: r.oneOf(["end", "start", !1]),
  /**
   * The icon to display when the component is unchecked.
   */
  icon: r.node,
  /**
   * The id of the `input` element.
   */
  id: r.string,
  /**
   * [Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Attributes) applied to the `input` element.
   * @deprecated Use `slotProps.input` instead. This prop will be removed in v7. See [Migrating from deprecated APIs](/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   */
  inputProps: r.object,
  /**
   * Pass a ref to the `input` element.
   * @deprecated Use `slotProps.input.ref` instead. This prop will be removed in v7. See [Migrating from deprecated APIs](/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   */
  inputRef: pn,
  /**
   * Callback fired when the state is changed.
   *
   * @param {React.ChangeEvent<HTMLInputElement>} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value` (string).
   * You can pull out the new checked state by accessing `event.target.checked` (boolean).
   */
  onChange: r.func,
  /**
   * If `true`, the `input` element is required.
   * @default false
   */
  required: r.bool,
  /**
   * The size of the component.
   * `small` is equivalent to the dense switch styling.
   * @default 'medium'
   */
  size: r.oneOfType([r.oneOf(["medium", "small"]), r.string]),
  /**
   * The props used for each slot inside.
   * @default {}
   */
  slotProps: r.shape({
    input: r.oneOfType([r.func, r.object]),
    root: r.oneOfType([r.func, r.object]),
    switchBase: r.oneOfType([r.func, r.object]),
    thumb: r.oneOfType([r.func, r.object]),
    track: r.oneOfType([r.func, r.object])
  }),
  /**
   * The components used for each slot inside.
   * @default {}
   */
  slots: r.shape({
    input: r.elementType,
    root: r.elementType,
    switchBase: r.elementType,
    thumb: r.elementType,
    track: r.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: r.oneOfType([r.arrayOf(r.oneOfType([r.func, r.object, r.bool])), r.func, r.object]),
  /**
   * The value of the component. The DOM API casts this to a string.
   * The browser uses "on" as the default value.
   */
  value: r.any
});
const kn = (e, t = "#000000") => {
  if (!e) return;
  let n = hi(e);
  return n = n.replace(/class=".*?"/g, "").replace(/focusable=".*?"/g, "").replace(/aria-hidden=".*?"/g, "").replace(/data-testid=".*?"/g, ""), n.includes("xmlns") || (n = n.replace("<svg", '<svg xmlns="http://www.w3.org/2000/svg"')), n.includes("fill=") || (n = n.replace("<path", '<path fill="' + t + '"')), `url("data:image/svg+xml;utf8,${encodeURIComponent(n)}")`;
}, Bu = (e, t = "primary") => {
  var i;
  const n = Ae[t], o = ((i = e == null ? void 0 : e.palette) == null ? void 0 : i[t]) ?? n;
  return {
    bgColor: o.custMain ?? n.custMain,
    thumbColor: o.onMain ?? n.onMain,
    actthumbColor: o.fabBg ?? n.fabBg,
    unselectbgColor: o.surface ?? n.surface,
    unselectColor: o.outline ?? n.outline,
    unselectthumbColor: o.iconFont ?? n.iconFont
  };
}, Mu = {
  small: { w: 40, h: 24 },
  medium: { w: 52, h: 32 },
  // ⇦ 原始 52×32 | thumb24 checked
  large: { w: 80, h: 50 }
}, Du = Y(ri)(({ theme: e, selectedIcon: t, unselectedIcon: n, custsize: o = "medium" }) => {
  const i = Bu(e), a = kn(
    t,
    i.bgColor
  ), s = kn(
    t,
    U(Ne[0], 0.12)
    // "000000"
  ), l = kn(
    n,
    i.unselectbgColor
  ), c = Mu[o], d = c.h - 8;
  return {
    width: c.w,
    height: c.h,
    padding: 0,
    borderRadius: 100,
    overflow: "visible",
    "& .MuiSwitch-thumb": {
      position: "relative",
      margin: n ? (c.h - d) / 2 : (c.h - c.h / 2) / 2,
      boxShadow: "none",
      width: n ? d : c.h / 2,
      height: n ? d : c.h / 2,
      transitionDuration: "300ms",
      color: i.unselectColor,
      "&::before": {
        content: "''",
        position: "absolute",
        width: d - 8,
        // ✅ 固定寬高
        height: d - 8,
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundImage: l
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
          color: U(Ne[0], 0.38)
        },
        "& + .MuiSwitch-track": {
          border: `2px solid ${U(Ne[0], 0.12)}`,
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
        backgroundColor: U(Ne[0], 0.08),
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
          backgroundColor: U(i.bgColor, 0.08)
        },
        "& .MuiSwitch-thumb": {
          color: i.thumbColor,
          margin: (c.h - d) / 2,
          width: d,
          height: d
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
            backgroundColor: Ne[0],
            opacity: 0.12
          },
          "& .MuiSwitch-thumb:before": {
            transitionDuration: "300ms",
            backgroundImage: s
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
}), _u = ({
  selectedIcon: e,
  unselectedIcon: t,
  size: n,
  ...o
}) => /* @__PURE__ */ M(
  Du,
  {
    selectedIcon: e,
    unselectedIcon: t,
    custsize: n,
    ...o
  }
);
export {
  Hu as Avatar,
  Gu as Button,
  wc as Checkbox,
  Ju as CheckboxTree,
  qu as Chip,
  Wu as Fab,
  Yu as IconButton,
  Xu as Menu,
  Zu as MenuItem,
  _u as Switch,
  Ku as lemonTheme
};
