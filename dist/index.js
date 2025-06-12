var pg = Object.defineProperty;
var wg = (o, d, f) => d in o ? pg(o, d, { enumerable: !0, configurable: !0, writable: !0, value: f }) : o[d] = f;
var sf = (o, d, f) => wg(o, typeof d != "symbol" ? d + "" : d, f);
import * as rn from "react";
import nu, { isValidElement as Mf, cloneElement as If, Children as Tg, useState as Cg } from "react";
import { jsx as ct, jsxs as wf } from "react/jsx-runtime";
import Eg from "@emotion/styled";
import { keyframes as Tf, css as Uh } from "@emotion/react";
import Uf from "react-dom";
function Eu(o, ...d) {
  const f = new URL(`https://mui.com/production-error/?code=${o}`);
  return d.forEach((b) => f.searchParams.append("args[]", b)), `Minified MUI error #${o}; visit ${f} for the full message.`;
}
const xg = "$$material";
function Rg(o) {
  for (var d = 0, f, b = 0, T = o.length; T >= 4; ++b, T -= 4)
    f = o.charCodeAt(b) & 255 | (o.charCodeAt(++b) & 255) << 8 | (o.charCodeAt(++b) & 255) << 16 | (o.charCodeAt(++b) & 255) << 24, f = /* Math.imul(k, m): */
    (f & 65535) * 1540483477 + ((f >>> 16) * 59797 << 16), f ^= /* k >>> r: */
    f >>> 24, d = /* Math.imul(k, m): */
    (f & 65535) * 1540483477 + ((f >>> 16) * 59797 << 16) ^ /* Math.imul(h, m): */
    (d & 65535) * 1540483477 + ((d >>> 16) * 59797 << 16);
  switch (T) {
    case 3:
      d ^= (o.charCodeAt(b + 2) & 255) << 16;
    case 2:
      d ^= (o.charCodeAt(b + 1) & 255) << 8;
    case 1:
      d ^= o.charCodeAt(b) & 255, d = /* Math.imul(h, m): */
      (d & 65535) * 1540483477 + ((d >>> 16) * 59797 << 16);
  }
  return d ^= d >>> 13, d = /* Math.imul(h, m): */
  (d & 65535) * 1540483477 + ((d >>> 16) * 59797 << 16), ((d ^ d >>> 15) >>> 0).toString(36);
}
var Sg = {
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
function kg(o) {
  var d = /* @__PURE__ */ Object.create(null);
  return function(f) {
    return d[f] === void 0 && (d[f] = o(f)), d[f];
  };
}
var mg = /[A-Z]|^ms/g, Pg = /_EMO_([^_]+?)_([^]*?)_EMO_/g, Hh = function(d) {
  return d.charCodeAt(1) === 45;
}, Jd = function(d) {
  return d != null && typeof d != "boolean";
}, ud = /* @__PURE__ */ kg(function(o) {
  return Hh(o) ? o : o.replace(mg, "-$&").toLowerCase();
}), Kd = function(d, f) {
  switch (d) {
    case "animation":
    case "animationName":
      if (typeof f == "string")
        return f.replace(Pg, function(b, T, S) {
          return Cu = {
            name: T,
            styles: S,
            next: Cu
          }, T;
        });
  }
  return Sg[d] !== 1 && !Hh(d) && typeof f == "number" && f !== 0 ? f + "px" : f;
};
function Bf(o, d, f) {
  if (f == null)
    return "";
  var b = f;
  if (b.__emotion_styles !== void 0)
    return b;
  switch (typeof f) {
    case "boolean":
      return "";
    case "object": {
      var T = f;
      if (T.anim === 1)
        return Cu = {
          name: T.name,
          styles: T.styles,
          next: Cu
        }, T.name;
      var S = f;
      if (S.styles !== void 0) {
        var A = S.next;
        if (A !== void 0)
          for (; A !== void 0; )
            Cu = {
              name: A.name,
              styles: A.styles,
              next: Cu
            }, A = A.next;
        var O = S.styles + ";";
        return O;
      }
      return Fg(o, d, f);
    }
  }
  var Y = f;
  return Y;
}
function Fg(o, d, f) {
  var b = "";
  if (Array.isArray(f))
    for (var T = 0; T < f.length; T++)
      b += Bf(o, d, f[T]) + ";";
  else
    for (var S in f) {
      var A = f[S];
      if (typeof A != "object") {
        var O = A;
        Jd(O) && (b += ud(S) + ":" + Kd(S, O) + ";");
      } else if (Array.isArray(A) && typeof A[0] == "string" && d == null)
        for (var Y = 0; Y < A.length; Y++)
          Jd(A[Y]) && (b += ud(S) + ":" + Kd(S, A[Y]) + ";");
      else {
        var Z = Bf(o, d, A);
        switch (S) {
          case "animation":
          case "animationName": {
            b += ud(S) + ":" + Z + ";";
            break;
          }
          default:
            b += S + "{" + Z + "}";
        }
      }
    }
  return b;
}
var qd = /label:\s*([^\s;{]+)\s*(;|$)/g, Cu;
function Og(o, d, f) {
  if (o.length === 1 && typeof o[0] == "object" && o[0] !== null && o[0].styles !== void 0)
    return o[0];
  var b = !0, T = "";
  Cu = void 0;
  var S = o[0];
  if (S == null || S.raw === void 0)
    b = !1, T += Bf(f, d, S);
  else {
    var A = S;
    T += A[0];
  }
  for (var O = 1; O < o.length; O++)
    if (T += Bf(f, d, o[O]), b) {
      var Y = S;
      T += Y[O];
    }
  qd.lastIndex = 0;
  for (var Z = "", M; (M = qd.exec(T)) !== null; )
    Z += "-" + M[1];
  var J = Rg(T) + Z;
  return {
    name: J,
    styles: T,
    next: Cu
  };
}
function Ag(o) {
  return o && o.__esModule && Object.prototype.hasOwnProperty.call(o, "default") ? o.default : o;
}
var kf = { exports: {} }, mf = { exports: {} }, et = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var jd;
function Mg() {
  if (jd) return et;
  jd = 1;
  var o = typeof Symbol == "function" && Symbol.for, d = o ? Symbol.for("react.element") : 60103, f = o ? Symbol.for("react.portal") : 60106, b = o ? Symbol.for("react.fragment") : 60107, T = o ? Symbol.for("react.strict_mode") : 60108, S = o ? Symbol.for("react.profiler") : 60114, A = o ? Symbol.for("react.provider") : 60109, O = o ? Symbol.for("react.context") : 60110, Y = o ? Symbol.for("react.async_mode") : 60111, Z = o ? Symbol.for("react.concurrent_mode") : 60111, M = o ? Symbol.for("react.forward_ref") : 60112, J = o ? Symbol.for("react.suspense") : 60113, re = o ? Symbol.for("react.suspense_list") : 60120, V = o ? Symbol.for("react.memo") : 60115, _ = o ? Symbol.for("react.lazy") : 60116, N = o ? Symbol.for("react.block") : 60121, Pe = o ? Symbol.for("react.fundamental") : 60117, Me = o ? Symbol.for("react.responder") : 60118, je = o ? Symbol.for("react.scope") : 60119;
  function ke($) {
    if (typeof $ == "object" && $ !== null) {
      var Xe = $.$$typeof;
      switch (Xe) {
        case d:
          switch ($ = $.type, $) {
            case Y:
            case Z:
            case b:
            case S:
            case T:
            case J:
              return $;
            default:
              switch ($ = $ && $.$$typeof, $) {
                case O:
                case M:
                case _:
                case V:
                case A:
                  return $;
                default:
                  return Xe;
              }
          }
        case f:
          return Xe;
      }
    }
  }
  function ge($) {
    return ke($) === Z;
  }
  return et.AsyncMode = Y, et.ConcurrentMode = Z, et.ContextConsumer = O, et.ContextProvider = A, et.Element = d, et.ForwardRef = M, et.Fragment = b, et.Lazy = _, et.Memo = V, et.Portal = f, et.Profiler = S, et.StrictMode = T, et.Suspense = J, et.isAsyncMode = function($) {
    return ge($) || ke($) === Y;
  }, et.isConcurrentMode = ge, et.isContextConsumer = function($) {
    return ke($) === O;
  }, et.isContextProvider = function($) {
    return ke($) === A;
  }, et.isElement = function($) {
    return typeof $ == "object" && $ !== null && $.$$typeof === d;
  }, et.isForwardRef = function($) {
    return ke($) === M;
  }, et.isFragment = function($) {
    return ke($) === b;
  }, et.isLazy = function($) {
    return ke($) === _;
  }, et.isMemo = function($) {
    return ke($) === V;
  }, et.isPortal = function($) {
    return ke($) === f;
  }, et.isProfiler = function($) {
    return ke($) === S;
  }, et.isStrictMode = function($) {
    return ke($) === T;
  }, et.isSuspense = function($) {
    return ke($) === J;
  }, et.isValidElementType = function($) {
    return typeof $ == "string" || typeof $ == "function" || $ === b || $ === Z || $ === S || $ === T || $ === J || $ === re || typeof $ == "object" && $ !== null && ($.$$typeof === _ || $.$$typeof === V || $.$$typeof === A || $.$$typeof === O || $.$$typeof === M || $.$$typeof === Pe || $.$$typeof === Me || $.$$typeof === je || $.$$typeof === N);
  }, et.typeOf = ke, et;
}
var nt = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var $d;
function Ig() {
  return $d || ($d = 1, process.env.NODE_ENV !== "production" && function() {
    var o = typeof Symbol == "function" && Symbol.for, d = o ? Symbol.for("react.element") : 60103, f = o ? Symbol.for("react.portal") : 60106, b = o ? Symbol.for("react.fragment") : 60107, T = o ? Symbol.for("react.strict_mode") : 60108, S = o ? Symbol.for("react.profiler") : 60114, A = o ? Symbol.for("react.provider") : 60109, O = o ? Symbol.for("react.context") : 60110, Y = o ? Symbol.for("react.async_mode") : 60111, Z = o ? Symbol.for("react.concurrent_mode") : 60111, M = o ? Symbol.for("react.forward_ref") : 60112, J = o ? Symbol.for("react.suspense") : 60113, re = o ? Symbol.for("react.suspense_list") : 60120, V = o ? Symbol.for("react.memo") : 60115, _ = o ? Symbol.for("react.lazy") : 60116, N = o ? Symbol.for("react.block") : 60121, Pe = o ? Symbol.for("react.fundamental") : 60117, Me = o ? Symbol.for("react.responder") : 60118, je = o ? Symbol.for("react.scope") : 60119;
    function ke(de) {
      return typeof de == "string" || typeof de == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      de === b || de === Z || de === S || de === T || de === J || de === re || typeof de == "object" && de !== null && (de.$$typeof === _ || de.$$typeof === V || de.$$typeof === A || de.$$typeof === O || de.$$typeof === M || de.$$typeof === Pe || de.$$typeof === Me || de.$$typeof === je || de.$$typeof === N);
    }
    function ge(de) {
      if (typeof de == "object" && de !== null) {
        var yt = de.$$typeof;
        switch (yt) {
          case d:
            var to = de.type;
            switch (to) {
              case Y:
              case Z:
              case b:
              case S:
              case T:
              case J:
                return to;
              default:
                var tt = to && to.$$typeof;
                switch (tt) {
                  case O:
                  case M:
                  case _:
                  case V:
                  case A:
                    return tt;
                  default:
                    return yt;
                }
            }
          case f:
            return yt;
        }
      }
    }
    var $ = Y, Xe = Z, vn = O, un = A, Ke = d, I = M, Oe = b, Be = _, ye = V, Le = f, dn = S, te = T, Ce = J, Xn = !1;
    function ze(de) {
      return Xn || (Xn = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), q(de) || ge(de) === Y;
    }
    function q(de) {
      return ge(de) === Z;
    }
    function Q(de) {
      return ge(de) === O;
    }
    function on(de) {
      return ge(de) === A;
    }
    function Qe(de) {
      return typeof de == "object" && de !== null && de.$$typeof === d;
    }
    function Re(de) {
      return ge(de) === M;
    }
    function me(de) {
      return ge(de) === b;
    }
    function _e(de) {
      return ge(de) === _;
    }
    function $e(de) {
      return ge(de) === V;
    }
    function fn(de) {
      return ge(de) === f;
    }
    function Tn(de) {
      return ge(de) === S;
    }
    function Ne(de) {
      return ge(de) === T;
    }
    function He(de) {
      return ge(de) === J;
    }
    nt.AsyncMode = $, nt.ConcurrentMode = Xe, nt.ContextConsumer = vn, nt.ContextProvider = un, nt.Element = Ke, nt.ForwardRef = I, nt.Fragment = Oe, nt.Lazy = Be, nt.Memo = ye, nt.Portal = Le, nt.Profiler = dn, nt.StrictMode = te, nt.Suspense = Ce, nt.isAsyncMode = ze, nt.isConcurrentMode = q, nt.isContextConsumer = Q, nt.isContextProvider = on, nt.isElement = Qe, nt.isForwardRef = Re, nt.isFragment = me, nt.isLazy = _e, nt.isMemo = $e, nt.isPortal = fn, nt.isProfiler = Tn, nt.isStrictMode = Ne, nt.isSuspense = He, nt.isValidElementType = ke, nt.typeOf = ge;
  }()), nt;
}
var eh;
function Yh() {
  return eh || (eh = 1, process.env.NODE_ENV === "production" ? mf.exports = Mg() : mf.exports = Ig()), mf.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var fd, nh;
function Dg() {
  if (nh) return fd;
  nh = 1;
  var o = Object.getOwnPropertySymbols, d = Object.prototype.hasOwnProperty, f = Object.prototype.propertyIsEnumerable;
  function b(S) {
    if (S == null)
      throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(S);
  }
  function T() {
    try {
      if (!Object.assign)
        return !1;
      var S = new String("abc");
      if (S[5] = "de", Object.getOwnPropertyNames(S)[0] === "5")
        return !1;
      for (var A = {}, O = 0; O < 10; O++)
        A["_" + String.fromCharCode(O)] = O;
      var Y = Object.getOwnPropertyNames(A).map(function(M) {
        return A[M];
      });
      if (Y.join("") !== "0123456789")
        return !1;
      var Z = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(M) {
        Z[M] = M;
      }), Object.keys(Object.assign({}, Z)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return fd = T() ? Object.assign : function(S, A) {
    for (var O, Y = b(S), Z, M = 1; M < arguments.length; M++) {
      O = Object(arguments[M]);
      for (var J in O)
        d.call(O, J) && (Y[J] = O[J]);
      if (o) {
        Z = o(O);
        for (var re = 0; re < Z.length; re++)
          f.call(O, Z[re]) && (Y[Z[re]] = O[Z[re]]);
      }
    }
    return Y;
  }, fd;
}
var dd, th;
function Pd() {
  if (th) return dd;
  th = 1;
  var o = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return dd = o, dd;
}
var hd, rh;
function Gh() {
  return rh || (rh = 1, hd = Function.call.bind(Object.prototype.hasOwnProperty)), hd;
}
var gd, oh;
function _g() {
  if (oh) return gd;
  oh = 1;
  var o = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var d = /* @__PURE__ */ Pd(), f = {}, b = /* @__PURE__ */ Gh();
    o = function(S) {
      var A = "Warning: " + S;
      typeof console < "u" && console.error(A);
      try {
        throw new Error(A);
      } catch {
      }
    };
  }
  function T(S, A, O, Y, Z) {
    if (process.env.NODE_ENV !== "production") {
      for (var M in S)
        if (b(S, M)) {
          var J;
          try {
            if (typeof S[M] != "function") {
              var re = Error(
                (Y || "React class") + ": " + O + " type `" + M + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof S[M] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw re.name = "Invariant Violation", re;
            }
            J = S[M](A, M, Y, O, null, d);
          } catch (_) {
            J = _;
          }
          if (J && !(J instanceof Error) && o(
            (Y || "React class") + ": type specification of " + O + " `" + M + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof J + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), J instanceof Error && !(J.message in f)) {
            f[J.message] = !0;
            var V = Z ? Z() : "";
            o(
              "Failed " + O + " type: " + J.message + (V ?? "")
            );
          }
        }
    }
  }
  return T.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (f = {});
  }, gd = T, gd;
}
var bd, ah;
function Bg() {
  if (ah) return bd;
  ah = 1;
  var o = Yh(), d = Dg(), f = /* @__PURE__ */ Pd(), b = /* @__PURE__ */ Gh(), T = /* @__PURE__ */ _g(), S = function() {
  };
  process.env.NODE_ENV !== "production" && (S = function(O) {
    var Y = "Warning: " + O;
    typeof console < "u" && console.error(Y);
    try {
      throw new Error(Y);
    } catch {
    }
  });
  function A() {
    return null;
  }
  return bd = function(O, Y) {
    var Z = typeof Symbol == "function" && Symbol.iterator, M = "@@iterator";
    function J(q) {
      var Q = q && (Z && q[Z] || q[M]);
      if (typeof Q == "function")
        return Q;
    }
    var re = "<<anonymous>>", V = {
      array: Me("array"),
      bigint: Me("bigint"),
      bool: Me("boolean"),
      func: Me("function"),
      number: Me("number"),
      object: Me("object"),
      string: Me("string"),
      symbol: Me("symbol"),
      any: je(),
      arrayOf: ke,
      element: ge(),
      elementType: $(),
      instanceOf: Xe,
      node: I(),
      objectOf: un,
      oneOf: vn,
      oneOfType: Ke,
      shape: Be,
      exact: ye
    };
    function _(q, Q) {
      return q === Q ? q !== 0 || 1 / q === 1 / Q : q !== q && Q !== Q;
    }
    function N(q, Q) {
      this.message = q, this.data = Q && typeof Q == "object" ? Q : {}, this.stack = "";
    }
    N.prototype = Error.prototype;
    function Pe(q) {
      if (process.env.NODE_ENV !== "production")
        var Q = {}, on = 0;
      function Qe(me, _e, $e, fn, Tn, Ne, He) {
        if (fn = fn || re, Ne = Ne || $e, He !== f) {
          if (Y) {
            var de = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw de.name = "Invariant Violation", de;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var yt = fn + ":" + $e;
            !Q[yt] && // Avoid spamming the console because they are often not actionable except for lib authors
            on < 3 && (S(
              "You are manually calling a React.PropTypes validation function for the `" + Ne + "` prop on `" + fn + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), Q[yt] = !0, on++);
          }
        }
        return _e[$e] == null ? me ? _e[$e] === null ? new N("The " + Tn + " `" + Ne + "` is marked as required " + ("in `" + fn + "`, but its value is `null`.")) : new N("The " + Tn + " `" + Ne + "` is marked as required in " + ("`" + fn + "`, but its value is `undefined`.")) : null : q(_e, $e, fn, Tn, Ne);
      }
      var Re = Qe.bind(null, !1);
      return Re.isRequired = Qe.bind(null, !0), Re;
    }
    function Me(q) {
      function Q(on, Qe, Re, me, _e, $e) {
        var fn = on[Qe], Tn = te(fn);
        if (Tn !== q) {
          var Ne = Ce(fn);
          return new N(
            "Invalid " + me + " `" + _e + "` of type " + ("`" + Ne + "` supplied to `" + Re + "`, expected ") + ("`" + q + "`."),
            { expectedType: q }
          );
        }
        return null;
      }
      return Pe(Q);
    }
    function je() {
      return Pe(A);
    }
    function ke(q) {
      function Q(on, Qe, Re, me, _e) {
        if (typeof q != "function")
          return new N("Property `" + _e + "` of component `" + Re + "` has invalid PropType notation inside arrayOf.");
        var $e = on[Qe];
        if (!Array.isArray($e)) {
          var fn = te($e);
          return new N("Invalid " + me + " `" + _e + "` of type " + ("`" + fn + "` supplied to `" + Re + "`, expected an array."));
        }
        for (var Tn = 0; Tn < $e.length; Tn++) {
          var Ne = q($e, Tn, Re, me, _e + "[" + Tn + "]", f);
          if (Ne instanceof Error)
            return Ne;
        }
        return null;
      }
      return Pe(Q);
    }
    function ge() {
      function q(Q, on, Qe, Re, me) {
        var _e = Q[on];
        if (!O(_e)) {
          var $e = te(_e);
          return new N("Invalid " + Re + " `" + me + "` of type " + ("`" + $e + "` supplied to `" + Qe + "`, expected a single ReactElement."));
        }
        return null;
      }
      return Pe(q);
    }
    function $() {
      function q(Q, on, Qe, Re, me) {
        var _e = Q[on];
        if (!o.isValidElementType(_e)) {
          var $e = te(_e);
          return new N("Invalid " + Re + " `" + me + "` of type " + ("`" + $e + "` supplied to `" + Qe + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return Pe(q);
    }
    function Xe(q) {
      function Q(on, Qe, Re, me, _e) {
        if (!(on[Qe] instanceof q)) {
          var $e = q.name || re, fn = ze(on[Qe]);
          return new N("Invalid " + me + " `" + _e + "` of type " + ("`" + fn + "` supplied to `" + Re + "`, expected ") + ("instance of `" + $e + "`."));
        }
        return null;
      }
      return Pe(Q);
    }
    function vn(q) {
      if (!Array.isArray(q))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? S(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : S("Invalid argument supplied to oneOf, expected an array.")), A;
      function Q(on, Qe, Re, me, _e) {
        for (var $e = on[Qe], fn = 0; fn < q.length; fn++)
          if (_($e, q[fn]))
            return null;
        var Tn = JSON.stringify(q, function(He, de) {
          var yt = Ce(de);
          return yt === "symbol" ? String(de) : de;
        });
        return new N("Invalid " + me + " `" + _e + "` of value `" + String($e) + "` " + ("supplied to `" + Re + "`, expected one of " + Tn + "."));
      }
      return Pe(Q);
    }
    function un(q) {
      function Q(on, Qe, Re, me, _e) {
        if (typeof q != "function")
          return new N("Property `" + _e + "` of component `" + Re + "` has invalid PropType notation inside objectOf.");
        var $e = on[Qe], fn = te($e);
        if (fn !== "object")
          return new N("Invalid " + me + " `" + _e + "` of type " + ("`" + fn + "` supplied to `" + Re + "`, expected an object."));
        for (var Tn in $e)
          if (b($e, Tn)) {
            var Ne = q($e, Tn, Re, me, _e + "." + Tn, f);
            if (Ne instanceof Error)
              return Ne;
          }
        return null;
      }
      return Pe(Q);
    }
    function Ke(q) {
      if (!Array.isArray(q))
        return process.env.NODE_ENV !== "production" && S("Invalid argument supplied to oneOfType, expected an instance of array."), A;
      for (var Q = 0; Q < q.length; Q++) {
        var on = q[Q];
        if (typeof on != "function")
          return S(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + Xn(on) + " at index " + Q + "."
          ), A;
      }
      function Qe(Re, me, _e, $e, fn) {
        for (var Tn = [], Ne = 0; Ne < q.length; Ne++) {
          var He = q[Ne], de = He(Re, me, _e, $e, fn, f);
          if (de == null)
            return null;
          de.data && b(de.data, "expectedType") && Tn.push(de.data.expectedType);
        }
        var yt = Tn.length > 0 ? ", expected one of type [" + Tn.join(", ") + "]" : "";
        return new N("Invalid " + $e + " `" + fn + "` supplied to " + ("`" + _e + "`" + yt + "."));
      }
      return Pe(Qe);
    }
    function I() {
      function q(Q, on, Qe, Re, me) {
        return Le(Q[on]) ? null : new N("Invalid " + Re + " `" + me + "` supplied to " + ("`" + Qe + "`, expected a ReactNode."));
      }
      return Pe(q);
    }
    function Oe(q, Q, on, Qe, Re) {
      return new N(
        (q || "React class") + ": " + Q + " type `" + on + "." + Qe + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + Re + "`."
      );
    }
    function Be(q) {
      function Q(on, Qe, Re, me, _e) {
        var $e = on[Qe], fn = te($e);
        if (fn !== "object")
          return new N("Invalid " + me + " `" + _e + "` of type `" + fn + "` " + ("supplied to `" + Re + "`, expected `object`."));
        for (var Tn in q) {
          var Ne = q[Tn];
          if (typeof Ne != "function")
            return Oe(Re, me, _e, Tn, Ce(Ne));
          var He = Ne($e, Tn, Re, me, _e + "." + Tn, f);
          if (He)
            return He;
        }
        return null;
      }
      return Pe(Q);
    }
    function ye(q) {
      function Q(on, Qe, Re, me, _e) {
        var $e = on[Qe], fn = te($e);
        if (fn !== "object")
          return new N("Invalid " + me + " `" + _e + "` of type `" + fn + "` " + ("supplied to `" + Re + "`, expected `object`."));
        var Tn = d({}, on[Qe], q);
        for (var Ne in Tn) {
          var He = q[Ne];
          if (b(q, Ne) && typeof He != "function")
            return Oe(Re, me, _e, Ne, Ce(He));
          if (!He)
            return new N(
              "Invalid " + me + " `" + _e + "` key `" + Ne + "` supplied to `" + Re + "`.\nBad object: " + JSON.stringify(on[Qe], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(q), null, "  ")
            );
          var de = He($e, Ne, Re, me, _e + "." + Ne, f);
          if (de)
            return de;
        }
        return null;
      }
      return Pe(Q);
    }
    function Le(q) {
      switch (typeof q) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !q;
        case "object":
          if (Array.isArray(q))
            return q.every(Le);
          if (q === null || O(q))
            return !0;
          var Q = J(q);
          if (Q) {
            var on = Q.call(q), Qe;
            if (Q !== q.entries) {
              for (; !(Qe = on.next()).done; )
                if (!Le(Qe.value))
                  return !1;
            } else
              for (; !(Qe = on.next()).done; ) {
                var Re = Qe.value;
                if (Re && !Le(Re[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function dn(q, Q) {
      return q === "symbol" ? !0 : Q ? Q["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && Q instanceof Symbol : !1;
    }
    function te(q) {
      var Q = typeof q;
      return Array.isArray(q) ? "array" : q instanceof RegExp ? "object" : dn(Q, q) ? "symbol" : Q;
    }
    function Ce(q) {
      if (typeof q > "u" || q === null)
        return "" + q;
      var Q = te(q);
      if (Q === "object") {
        if (q instanceof Date)
          return "date";
        if (q instanceof RegExp)
          return "regexp";
      }
      return Q;
    }
    function Xn(q) {
      var Q = Ce(q);
      switch (Q) {
        case "array":
        case "object":
          return "an " + Q;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + Q;
        default:
          return Q;
      }
    }
    function ze(q) {
      return !q.constructor || !q.constructor.name ? re : q.constructor.name;
    }
    return V.checkPropTypes = T, V.resetWarningCache = T.resetWarningCache, V.PropTypes = V, V;
  }, bd;
}
var yd, ih;
function Ng() {
  if (ih) return yd;
  ih = 1;
  var o = /* @__PURE__ */ Pd();
  function d() {
  }
  function f() {
  }
  return f.resetWarningCache = d, yd = function() {
    function b(A, O, Y, Z, M, J) {
      if (J !== o) {
        var re = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw re.name = "Invariant Violation", re;
      }
    }
    b.isRequired = b;
    function T() {
      return b;
    }
    var S = {
      array: b,
      bigint: b,
      bool: b,
      func: b,
      number: b,
      object: b,
      string: b,
      symbol: b,
      any: b,
      arrayOf: T,
      element: b,
      elementType: b,
      instanceOf: T,
      node: b,
      objectOf: T,
      oneOf: T,
      oneOfType: T,
      shape: T,
      exact: T,
      checkPropTypes: f,
      resetWarningCache: d
    };
    return S.PropTypes = S, S;
  }, yd;
}
var lh;
function Lg() {
  if (lh) return kf.exports;
  if (lh = 1, process.env.NODE_ENV !== "production") {
    var o = Yh(), d = !0;
    kf.exports = /* @__PURE__ */ Bg()(o.isElement, d);
  } else
    kf.exports = /* @__PURE__ */ Ng()();
  return kf.exports;
}
var zg = /* @__PURE__ */ Lg();
const D = /* @__PURE__ */ Ag(zg);
/**
 * @mui/styled-engine v7.1.1
 *
 * @license MIT
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
function Wg(o, d) {
  const f = Eg(o, d);
  return process.env.NODE_ENV !== "production" ? (...b) => {
    const T = typeof o == "string" ? `"${o}"` : "component";
    return b.length === 0 ? console.error([`MUI: Seems like you called \`styled(${T})()\` without a \`style\` argument.`, 'You must provide a `styles` argument: `styled("div")(styleYouForgotToPass)`.'].join(`
`)) : b.some((S) => S === void 0) && console.error(`MUI: the styled(${T})(...args) API requires all its args to be defined.`), f(...b);
  } : f;
}
function Ug(o, d) {
  Array.isArray(o.__emotion_styles) && (o.__emotion_styles = d(o.__emotion_styles));
}
const sh = [];
function ch(o) {
  return sh[0] = o, Og(sh);
}
var Pf = { exports: {} }, gt = {};
/**
 * @license React
 * react-is.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var uh;
function Hg() {
  if (uh) return gt;
  uh = 1;
  var o = Symbol.for("react.transitional.element"), d = Symbol.for("react.portal"), f = Symbol.for("react.fragment"), b = Symbol.for("react.strict_mode"), T = Symbol.for("react.profiler"), S = Symbol.for("react.consumer"), A = Symbol.for("react.context"), O = Symbol.for("react.forward_ref"), Y = Symbol.for("react.suspense"), Z = Symbol.for("react.suspense_list"), M = Symbol.for("react.memo"), J = Symbol.for("react.lazy"), re = Symbol.for("react.view_transition"), V = Symbol.for("react.client.reference");
  function _(N) {
    if (typeof N == "object" && N !== null) {
      var Pe = N.$$typeof;
      switch (Pe) {
        case o:
          switch (N = N.type, N) {
            case f:
            case T:
            case b:
            case Y:
            case Z:
            case re:
              return N;
            default:
              switch (N = N && N.$$typeof, N) {
                case A:
                case O:
                case J:
                case M:
                  return N;
                case S:
                  return N;
                default:
                  return Pe;
              }
          }
        case d:
          return Pe;
      }
    }
  }
  return gt.ContextConsumer = S, gt.ContextProvider = A, gt.Element = o, gt.ForwardRef = O, gt.Fragment = f, gt.Lazy = J, gt.Memo = M, gt.Portal = d, gt.Profiler = T, gt.StrictMode = b, gt.Suspense = Y, gt.SuspenseList = Z, gt.isContextConsumer = function(N) {
    return _(N) === S;
  }, gt.isContextProvider = function(N) {
    return _(N) === A;
  }, gt.isElement = function(N) {
    return typeof N == "object" && N !== null && N.$$typeof === o;
  }, gt.isForwardRef = function(N) {
    return _(N) === O;
  }, gt.isFragment = function(N) {
    return _(N) === f;
  }, gt.isLazy = function(N) {
    return _(N) === J;
  }, gt.isMemo = function(N) {
    return _(N) === M;
  }, gt.isPortal = function(N) {
    return _(N) === d;
  }, gt.isProfiler = function(N) {
    return _(N) === T;
  }, gt.isStrictMode = function(N) {
    return _(N) === b;
  }, gt.isSuspense = function(N) {
    return _(N) === Y;
  }, gt.isSuspenseList = function(N) {
    return _(N) === Z;
  }, gt.isValidElementType = function(N) {
    return typeof N == "string" || typeof N == "function" || N === f || N === T || N === b || N === Y || N === Z || typeof N == "object" && N !== null && (N.$$typeof === J || N.$$typeof === M || N.$$typeof === A || N.$$typeof === S || N.$$typeof === O || N.$$typeof === V || N.getModuleId !== void 0);
  }, gt.typeOf = _, gt;
}
var bt = {};
/**
 * @license React
 * react-is.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var fh;
function Yg() {
  return fh || (fh = 1, process.env.NODE_ENV !== "production" && function() {
    function o(N) {
      if (typeof N == "object" && N !== null) {
        var Pe = N.$$typeof;
        switch (Pe) {
          case d:
            switch (N = N.type, N) {
              case b:
              case S:
              case T:
              case Z:
              case M:
              case V:
                return N;
              default:
                switch (N = N && N.$$typeof, N) {
                  case O:
                  case Y:
                  case re:
                  case J:
                    return N;
                  case A:
                    return N;
                  default:
                    return Pe;
                }
            }
          case f:
            return Pe;
        }
      }
    }
    var d = Symbol.for("react.transitional.element"), f = Symbol.for("react.portal"), b = Symbol.for("react.fragment"), T = Symbol.for("react.strict_mode"), S = Symbol.for("react.profiler"), A = Symbol.for("react.consumer"), O = Symbol.for("react.context"), Y = Symbol.for("react.forward_ref"), Z = Symbol.for("react.suspense"), M = Symbol.for("react.suspense_list"), J = Symbol.for("react.memo"), re = Symbol.for("react.lazy"), V = Symbol.for("react.view_transition"), _ = Symbol.for("react.client.reference");
    bt.ContextConsumer = A, bt.ContextProvider = O, bt.Element = d, bt.ForwardRef = Y, bt.Fragment = b, bt.Lazy = re, bt.Memo = J, bt.Portal = f, bt.Profiler = S, bt.StrictMode = T, bt.Suspense = Z, bt.SuspenseList = M, bt.isContextConsumer = function(N) {
      return o(N) === A;
    }, bt.isContextProvider = function(N) {
      return o(N) === O;
    }, bt.isElement = function(N) {
      return typeof N == "object" && N !== null && N.$$typeof === d;
    }, bt.isForwardRef = function(N) {
      return o(N) === Y;
    }, bt.isFragment = function(N) {
      return o(N) === b;
    }, bt.isLazy = function(N) {
      return o(N) === re;
    }, bt.isMemo = function(N) {
      return o(N) === J;
    }, bt.isPortal = function(N) {
      return o(N) === f;
    }, bt.isProfiler = function(N) {
      return o(N) === S;
    }, bt.isStrictMode = function(N) {
      return o(N) === T;
    }, bt.isSuspense = function(N) {
      return o(N) === Z;
    }, bt.isSuspenseList = function(N) {
      return o(N) === M;
    }, bt.isValidElementType = function(N) {
      return typeof N == "string" || typeof N == "function" || N === b || N === S || N === T || N === Z || N === M || typeof N == "object" && N !== null && (N.$$typeof === re || N.$$typeof === J || N.$$typeof === O || N.$$typeof === A || N.$$typeof === Y || N.$$typeof === _ || N.getModuleId !== void 0);
    }, bt.typeOf = o;
  }()), bt;
}
var dh;
function Gg() {
  return dh || (dh = 1, process.env.NODE_ENV === "production" ? Pf.exports = /* @__PURE__ */ Hg() : Pf.exports = /* @__PURE__ */ Yg()), Pf.exports;
}
var Nf = /* @__PURE__ */ Gg();
function eu(o) {
  if (typeof o != "object" || o === null)
    return !1;
  const d = Object.getPrototypeOf(o);
  return (d === null || d === Object.prototype || Object.getPrototypeOf(d) === null) && !(Symbol.toStringTag in o) && !(Symbol.iterator in o);
}
function Xh(o) {
  if (/* @__PURE__ */ rn.isValidElement(o) || Nf.isValidElementType(o) || !eu(o))
    return o;
  const d = {};
  return Object.keys(o).forEach((f) => {
    d[f] = Xh(o[f]);
  }), d;
}
function xl(o, d, f = {
  clone: !0
}) {
  const b = f.clone ? {
    ...o
  } : o;
  return eu(o) && eu(d) && Object.keys(d).forEach((T) => {
    /* @__PURE__ */ rn.isValidElement(d[T]) || Nf.isValidElementType(d[T]) ? b[T] = d[T] : eu(d[T]) && // Avoid prototype pollution
    Object.prototype.hasOwnProperty.call(o, T) && eu(o[T]) ? b[T] = xl(o[T], d[T], f) : f.clone ? b[T] = eu(d[T]) ? Xh(d[T]) : d[T] : b[T] = d[T];
  }), b;
}
const Xg = (o) => {
  const d = Object.keys(o).map((f) => ({
    key: f,
    val: o[f]
  })) || [];
  return d.sort((f, b) => f.val - b.val), d.reduce((f, b) => ({
    ...f,
    [b.key]: b.val
  }), {});
};
function Zg(o) {
  const {
    // The breakpoint **start** at this value.
    // For instance with the first breakpoint xs: [xs, sm).
    values: d = {
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
    unit: f = "px",
    step: b = 5,
    ...T
  } = o, S = Xg(d), A = Object.keys(S);
  function O(re) {
    return `@media (min-width:${typeof d[re] == "number" ? d[re] : re}${f})`;
  }
  function Y(re) {
    return `@media (max-width:${(typeof d[re] == "number" ? d[re] : re) - b / 100}${f})`;
  }
  function Z(re, V) {
    const _ = A.indexOf(V);
    return `@media (min-width:${typeof d[re] == "number" ? d[re] : re}${f}) and (max-width:${(_ !== -1 && typeof d[A[_]] == "number" ? d[A[_]] : V) - b / 100}${f})`;
  }
  function M(re) {
    return A.indexOf(re) + 1 < A.length ? Z(re, A[A.indexOf(re) + 1]) : O(re);
  }
  function J(re) {
    const V = A.indexOf(re);
    return V === 0 ? O(A[1]) : V === A.length - 1 ? Y(A[V]) : Z(re, A[A.indexOf(re) + 1]).replace("@media", "@media not all and");
  }
  return {
    keys: A,
    values: S,
    up: O,
    down: Y,
    between: Z,
    only: M,
    not: J,
    unit: f,
    ...T
  };
}
function Vg(o, d) {
  if (!o.containerQueries)
    return d;
  const f = Object.keys(d).filter((b) => b.startsWith("@container")).sort((b, T) => {
    var A, O;
    const S = /min-width:\s*([0-9.]+)/;
    return +(((A = b.match(S)) == null ? void 0 : A[1]) || 0) - +(((O = T.match(S)) == null ? void 0 : O[1]) || 0);
  });
  return f.length ? f.reduce((b, T) => {
    const S = d[T];
    return delete b[T], b[T] = S, b;
  }, {
    ...d
  }) : d;
}
function Qg(o, d) {
  return d === "@" || d.startsWith("@") && (o.some((f) => d.startsWith(`@${f}`)) || !!d.match(/^@\d/));
}
function Jg(o, d) {
  const f = d.match(/^@([^/]+)?\/?(.+)?$/);
  if (!f) {
    if (process.env.NODE_ENV !== "production")
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The provided shorthand ${`(${d})`} is invalid. The format should be \`@<breakpoint | number>\` or \`@<breakpoint | number>/<container>\`.
For example, \`@sm\` or \`@600\` or \`@40rem/sidebar\`.` : Eu(18, `(${d})`));
    return null;
  }
  const [, b, T] = f, S = Number.isNaN(+b) ? b || 0 : +b;
  return o.containerQueries(T).up(S);
}
function Kg(o) {
  const d = (S, A) => S.replace("@media", A ? `@container ${A}` : "@container");
  function f(S, A) {
    S.up = (...O) => d(o.breakpoints.up(...O), A), S.down = (...O) => d(o.breakpoints.down(...O), A), S.between = (...O) => d(o.breakpoints.between(...O), A), S.only = (...O) => d(o.breakpoints.only(...O), A), S.not = (...O) => {
      const Y = d(o.breakpoints.not(...O), A);
      return Y.includes("not all and") ? Y.replace("not all and ", "").replace("min-width:", "width<").replace("max-width:", "width>").replace("and", "or") : Y;
    };
  }
  const b = {}, T = (S) => (f(b, S), b);
  return f(T), {
    ...o,
    containerQueries: T
  };
}
const qg = {
  borderRadius: 4
}, Ru = process.env.NODE_ENV !== "production" ? D.oneOfType([D.number, D.string, D.object, D.array]) : {};
function yf(o, d) {
  return d ? xl(o, d, {
    clone: !1
    // No need to clone deep, it's way faster.
  }) : o;
}
const Hf = {
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
}, hh = {
  // Sorted ASC by size. That's important.
  // It can't be configured as it's used statically for propTypes.
  keys: ["xs", "sm", "md", "lg", "xl"],
  up: (o) => `@media (min-width:${Hf[o]}px)`
}, jg = {
  containerQueries: (o) => ({
    up: (d) => {
      let f = typeof d == "number" ? d : Hf[d] || d;
      return typeof f == "number" && (f = `${f}px`), o ? `@container ${o} (min-width:${f})` : `@container (min-width:${f})`;
    }
  })
};
function ru(o, d, f) {
  const b = o.theme || {};
  if (Array.isArray(d)) {
    const S = b.breakpoints || hh;
    return d.reduce((A, O, Y) => (A[S.up(S.keys[Y])] = f(d[Y]), A), {});
  }
  if (typeof d == "object") {
    const S = b.breakpoints || hh;
    return Object.keys(d).reduce((A, O) => {
      if (Qg(S.keys, O)) {
        const Y = Jg(b.containerQueries ? b : jg, O);
        Y && (A[Y] = f(d[O], O));
      } else if (Object.keys(S.values || Hf).includes(O)) {
        const Y = S.up(O);
        A[Y] = f(d[O], O);
      } else {
        const Y = O;
        A[Y] = d[Y];
      }
      return A;
    }, {});
  }
  return f(d);
}
function $g(o = {}) {
  var f;
  return ((f = o.keys) == null ? void 0 : f.reduce((b, T) => {
    const S = o.up(T);
    return b[S] = {}, b;
  }, {})) || {};
}
function eb(o, d) {
  return o.reduce((f, b) => {
    const T = f[b];
    return (!T || Object.keys(T).length === 0) && delete f[b], f;
  }, d);
}
function Nn(o) {
  if (typeof o != "string")
    throw new Error(process.env.NODE_ENV !== "production" ? "MUI: `capitalize(string)` expects a string argument." : Eu(7));
  return o.charAt(0).toUpperCase() + o.slice(1);
}
function Yf(o, d, f = !0) {
  if (!d || typeof d != "string")
    return null;
  if (o && o.vars && f) {
    const b = `vars.${d}`.split(".").reduce((T, S) => T && T[S] ? T[S] : null, o);
    if (b != null)
      return b;
  }
  return d.split(".").reduce((b, T) => b && b[T] != null ? b[T] : null, o);
}
function Lf(o, d, f, b = f) {
  let T;
  return typeof o == "function" ? T = o(f) : Array.isArray(o) ? T = o[f] || b : T = Yf(o, f) || b, d && (T = d(T, b, o)), T;
}
function zr(o) {
  const {
    prop: d,
    cssProperty: f = o.prop,
    themeKey: b,
    transform: T
  } = o, S = (A) => {
    if (A[d] == null)
      return null;
    const O = A[d], Y = A.theme, Z = Yf(Y, b) || {};
    return ru(A, O, (J) => {
      let re = Lf(Z, T, J);
      return J === re && typeof J == "string" && (re = Lf(Z, T, `${d}${J === "default" ? "" : Nn(J)}`, J)), f === !1 ? re : {
        [f]: re
      };
    });
  };
  return S.propTypes = process.env.NODE_ENV !== "production" ? {
    [d]: Ru
  } : {}, S.filterProps = [d], S;
}
function nb(o) {
  const d = {};
  return (f) => (d[f] === void 0 && (d[f] = o(f)), d[f]);
}
const tb = {
  m: "margin",
  p: "padding"
}, rb = {
  t: "Top",
  r: "Right",
  b: "Bottom",
  l: "Left",
  x: ["Left", "Right"],
  y: ["Top", "Bottom"]
}, gh = {
  marginX: "mx",
  marginY: "my",
  paddingX: "px",
  paddingY: "py"
}, ob = nb((o) => {
  if (o.length > 2)
    if (gh[o])
      o = gh[o];
    else
      return [o];
  const [d, f] = o.split(""), b = tb[d], T = rb[f] || "";
  return Array.isArray(T) ? T.map((S) => b + S) : [b + T];
}), Gf = ["m", "mt", "mr", "mb", "ml", "mx", "my", "margin", "marginTop", "marginRight", "marginBottom", "marginLeft", "marginX", "marginY", "marginInline", "marginInlineStart", "marginInlineEnd", "marginBlock", "marginBlockStart", "marginBlockEnd"], Xf = ["p", "pt", "pr", "pb", "pl", "px", "py", "padding", "paddingTop", "paddingRight", "paddingBottom", "paddingLeft", "paddingX", "paddingY", "paddingInline", "paddingInlineStart", "paddingInlineEnd", "paddingBlock", "paddingBlockStart", "paddingBlockEnd"], ab = [...Gf, ...Xf];
function Cf(o, d, f, b) {
  const T = Yf(o, d, !0) ?? f;
  return typeof T == "number" || typeof T == "string" ? (S) => typeof S == "string" ? S : (process.env.NODE_ENV !== "production" && typeof S != "number" && console.error(`MUI: Expected ${b} argument to be a number or a string, got ${S}.`), typeof T == "string" ? T.startsWith("var(") && S === 0 ? 0 : T.startsWith("var(") && S === 1 ? T : `calc(${S} * ${T})` : T * S) : Array.isArray(T) ? (S) => {
    if (typeof S == "string")
      return S;
    const A = Math.abs(S);
    process.env.NODE_ENV !== "production" && (Number.isInteger(A) ? A > T.length - 1 && console.error([`MUI: The value provided (${A}) overflows.`, `The supported values are: ${JSON.stringify(T)}.`, `${A} > ${T.length - 1}, you need to add the missing values.`].join(`
`)) : console.error([`MUI: The \`theme.${d}\` array type cannot be combined with non integer values.You should either use an integer value that can be used as index, or define the \`theme.${d}\` as a number.`].join(`
`)));
    const O = T[A];
    return S >= 0 ? O : typeof O == "number" ? -O : typeof O == "string" && O.startsWith("var(") ? `calc(-1 * ${O})` : `-${O}`;
  } : typeof T == "function" ? T : (process.env.NODE_ENV !== "production" && console.error([`MUI: The \`theme.${d}\` value (${T}) is invalid.`, "It should be a number, an array or a function."].join(`
`)), () => {
  });
}
function Fd(o) {
  return Cf(o, "spacing", 8, "spacing");
}
function Ef(o, d) {
  return typeof d == "string" || d == null ? d : o(d);
}
function ib(o, d) {
  return (f) => o.reduce((b, T) => (b[T] = Ef(d, f), b), {});
}
function lb(o, d, f, b) {
  if (!d.includes(f))
    return null;
  const T = ob(f), S = ib(T, b), A = o[f];
  return ru(o, A, S);
}
function Zh(o, d) {
  const f = Fd(o.theme);
  return Object.keys(o).map((b) => lb(o, d, b, f)).reduce(yf, {});
}
function Or(o) {
  return Zh(o, Gf);
}
Or.propTypes = process.env.NODE_ENV !== "production" ? Gf.reduce((o, d) => (o[d] = Ru, o), {}) : {};
Or.filterProps = Gf;
function Ar(o) {
  return Zh(o, Xf);
}
Ar.propTypes = process.env.NODE_ENV !== "production" ? Xf.reduce((o, d) => (o[d] = Ru, o), {}) : {};
Ar.filterProps = Xf;
process.env.NODE_ENV !== "production" && ab.reduce((o, d) => (o[d] = Ru, o), {});
function Vh(o = 8, d = Fd({
  spacing: o
})) {
  if (o.mui)
    return o;
  const f = (...b) => (process.env.NODE_ENV !== "production" && (b.length <= 4 || console.error(`MUI: Too many arguments provided, expected between 0 and 4, got ${b.length}`)), (b.length === 0 ? [1] : b).map((S) => {
    const A = d(S);
    return typeof A == "number" ? `${A}px` : A;
  }).join(" "));
  return f.mui = !0, f;
}
function Zf(...o) {
  const d = o.reduce((b, T) => (T.filterProps.forEach((S) => {
    b[S] = T;
  }), b), {}), f = (b) => Object.keys(b).reduce((T, S) => d[S] ? yf(T, d[S](b)) : T, {});
  return f.propTypes = process.env.NODE_ENV !== "production" ? o.reduce((b, T) => Object.assign(b, T.propTypes), {}) : {}, f.filterProps = o.reduce((b, T) => b.concat(T.filterProps), []), f;
}
function as(o) {
  return typeof o != "number" ? o : `${o}px solid`;
}
function ls(o, d) {
  return zr({
    prop: o,
    themeKey: "borders",
    transform: d
  });
}
const sb = ls("border", as), cb = ls("borderTop", as), ub = ls("borderRight", as), fb = ls("borderBottom", as), db = ls("borderLeft", as), hb = ls("borderColor"), gb = ls("borderTopColor"), bb = ls("borderRightColor"), yb = ls("borderBottomColor"), vb = ls("borderLeftColor"), pb = ls("outline", as), wb = ls("outlineColor"), Vf = (o) => {
  if (o.borderRadius !== void 0 && o.borderRadius !== null) {
    const d = Cf(o.theme, "shape.borderRadius", 4, "borderRadius"), f = (b) => ({
      borderRadius: Ef(d, b)
    });
    return ru(o, o.borderRadius, f);
  }
  return null;
};
Vf.propTypes = process.env.NODE_ENV !== "production" ? {
  borderRadius: Ru
} : {};
Vf.filterProps = ["borderRadius"];
Zf(sb, cb, ub, fb, db, hb, gb, bb, yb, vb, Vf, pb, wb);
const Qf = (o) => {
  if (o.gap !== void 0 && o.gap !== null) {
    const d = Cf(o.theme, "spacing", 8, "gap"), f = (b) => ({
      gap: Ef(d, b)
    });
    return ru(o, o.gap, f);
  }
  return null;
};
Qf.propTypes = process.env.NODE_ENV !== "production" ? {
  gap: Ru
} : {};
Qf.filterProps = ["gap"];
const Jf = (o) => {
  if (o.columnGap !== void 0 && o.columnGap !== null) {
    const d = Cf(o.theme, "spacing", 8, "columnGap"), f = (b) => ({
      columnGap: Ef(d, b)
    });
    return ru(o, o.columnGap, f);
  }
  return null;
};
Jf.propTypes = process.env.NODE_ENV !== "production" ? {
  columnGap: Ru
} : {};
Jf.filterProps = ["columnGap"];
const Kf = (o) => {
  if (o.rowGap !== void 0 && o.rowGap !== null) {
    const d = Cf(o.theme, "spacing", 8, "rowGap"), f = (b) => ({
      rowGap: Ef(d, b)
    });
    return ru(o, o.rowGap, f);
  }
  return null;
};
Kf.propTypes = process.env.NODE_ENV !== "production" ? {
  rowGap: Ru
} : {};
Kf.filterProps = ["rowGap"];
const Tb = zr({
  prop: "gridColumn"
}), Cb = zr({
  prop: "gridRow"
}), Eb = zr({
  prop: "gridAutoFlow"
}), xb = zr({
  prop: "gridAutoColumns"
}), Rb = zr({
  prop: "gridAutoRows"
}), Sb = zr({
  prop: "gridTemplateColumns"
}), kb = zr({
  prop: "gridTemplateRows"
}), mb = zr({
  prop: "gridTemplateAreas"
}), Pb = zr({
  prop: "gridArea"
});
Zf(Qf, Jf, Kf, Tb, Cb, Eb, xb, Rb, Sb, kb, mb, Pb);
function Ku(o, d) {
  return d === "grey" ? d : o;
}
const Fb = zr({
  prop: "color",
  themeKey: "palette",
  transform: Ku
}), Ob = zr({
  prop: "bgcolor",
  cssProperty: "backgroundColor",
  themeKey: "palette",
  transform: Ku
}), Ab = zr({
  prop: "backgroundColor",
  themeKey: "palette",
  transform: Ku
});
Zf(Fb, Ob, Ab);
function El(o) {
  return o <= 1 && o !== 0 ? `${o * 100}%` : o;
}
const Mb = zr({
  prop: "width",
  transform: El
}), Od = (o) => {
  if (o.maxWidth !== void 0 && o.maxWidth !== null) {
    const d = (f) => {
      var T, S, A, O, Y;
      const b = ((A = (S = (T = o.theme) == null ? void 0 : T.breakpoints) == null ? void 0 : S.values) == null ? void 0 : A[f]) || Hf[f];
      return b ? ((Y = (O = o.theme) == null ? void 0 : O.breakpoints) == null ? void 0 : Y.unit) !== "px" ? {
        maxWidth: `${b}${o.theme.breakpoints.unit}`
      } : {
        maxWidth: b
      } : {
        maxWidth: El(f)
      };
    };
    return ru(o, o.maxWidth, d);
  }
  return null;
};
Od.filterProps = ["maxWidth"];
const Ib = zr({
  prop: "minWidth",
  transform: El
}), Db = zr({
  prop: "height",
  transform: El
}), _b = zr({
  prop: "maxHeight",
  transform: El
}), Bb = zr({
  prop: "minHeight",
  transform: El
});
zr({
  prop: "size",
  cssProperty: "width",
  transform: El
});
zr({
  prop: "size",
  cssProperty: "height",
  transform: El
});
const Nb = zr({
  prop: "boxSizing"
});
Zf(Mb, Od, Ib, Db, _b, Bb, Nb);
const qf = {
  // borders
  border: {
    themeKey: "borders",
    transform: as
  },
  borderTop: {
    themeKey: "borders",
    transform: as
  },
  borderRight: {
    themeKey: "borders",
    transform: as
  },
  borderBottom: {
    themeKey: "borders",
    transform: as
  },
  borderLeft: {
    themeKey: "borders",
    transform: as
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
    transform: as
  },
  outlineColor: {
    themeKey: "palette"
  },
  borderRadius: {
    themeKey: "shape.borderRadius",
    style: Vf
  },
  // palette
  color: {
    themeKey: "palette",
    transform: Ku
  },
  bgcolor: {
    themeKey: "palette",
    cssProperty: "backgroundColor",
    transform: Ku
  },
  backgroundColor: {
    themeKey: "palette",
    transform: Ku
  },
  // spacing
  p: {
    style: Ar
  },
  pt: {
    style: Ar
  },
  pr: {
    style: Ar
  },
  pb: {
    style: Ar
  },
  pl: {
    style: Ar
  },
  px: {
    style: Ar
  },
  py: {
    style: Ar
  },
  padding: {
    style: Ar
  },
  paddingTop: {
    style: Ar
  },
  paddingRight: {
    style: Ar
  },
  paddingBottom: {
    style: Ar
  },
  paddingLeft: {
    style: Ar
  },
  paddingX: {
    style: Ar
  },
  paddingY: {
    style: Ar
  },
  paddingInline: {
    style: Ar
  },
  paddingInlineStart: {
    style: Ar
  },
  paddingInlineEnd: {
    style: Ar
  },
  paddingBlock: {
    style: Ar
  },
  paddingBlockStart: {
    style: Ar
  },
  paddingBlockEnd: {
    style: Ar
  },
  m: {
    style: Or
  },
  mt: {
    style: Or
  },
  mr: {
    style: Or
  },
  mb: {
    style: Or
  },
  ml: {
    style: Or
  },
  mx: {
    style: Or
  },
  my: {
    style: Or
  },
  margin: {
    style: Or
  },
  marginTop: {
    style: Or
  },
  marginRight: {
    style: Or
  },
  marginBottom: {
    style: Or
  },
  marginLeft: {
    style: Or
  },
  marginX: {
    style: Or
  },
  marginY: {
    style: Or
  },
  marginInline: {
    style: Or
  },
  marginInlineStart: {
    style: Or
  },
  marginInlineEnd: {
    style: Or
  },
  marginBlock: {
    style: Or
  },
  marginBlockStart: {
    style: Or
  },
  marginBlockEnd: {
    style: Or
  },
  // display
  displayPrint: {
    cssProperty: !1,
    transform: (o) => ({
      "@media print": {
        display: o
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
    style: Qf
  },
  rowGap: {
    style: Kf
  },
  columnGap: {
    style: Jf
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
    transform: El
  },
  maxWidth: {
    style: Od
  },
  minWidth: {
    transform: El
  },
  height: {
    transform: El
  },
  maxHeight: {
    transform: El
  },
  minHeight: {
    transform: El
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
function Lb(...o) {
  const d = o.reduce((b, T) => b.concat(Object.keys(T)), []), f = new Set(d);
  return o.every((b) => f.size === Object.keys(b).length);
}
function zb(o, d) {
  return typeof o == "function" ? o(d) : o;
}
function Wb() {
  function o(f, b, T, S) {
    const A = {
      [f]: b,
      theme: T
    }, O = S[f];
    if (!O)
      return {
        [f]: b
      };
    const {
      cssProperty: Y = f,
      themeKey: Z,
      transform: M,
      style: J
    } = O;
    if (b == null)
      return null;
    if (Z === "typography" && b === "inherit")
      return {
        [f]: b
      };
    const re = Yf(T, Z) || {};
    return J ? J(A) : ru(A, b, (_) => {
      let N = Lf(re, M, _);
      return _ === N && typeof _ == "string" && (N = Lf(re, M, `${f}${_ === "default" ? "" : Nn(_)}`, _)), Y === !1 ? N : {
        [Y]: N
      };
    });
  }
  function d(f) {
    const {
      sx: b,
      theme: T = {}
    } = f || {};
    if (!b)
      return null;
    const S = T.unstable_sxConfig ?? qf;
    function A(O) {
      let Y = O;
      if (typeof O == "function")
        Y = O(T);
      else if (typeof O != "object")
        return O;
      if (!Y)
        return null;
      const Z = $g(T.breakpoints), M = Object.keys(Z);
      let J = Z;
      return Object.keys(Y).forEach((re) => {
        const V = zb(Y[re], T);
        if (V != null)
          if (typeof V == "object")
            if (S[re])
              J = yf(J, o(re, V, T, S));
            else {
              const _ = ru({
                theme: T
              }, V, (N) => ({
                [re]: N
              }));
              Lb(_, V) ? J[re] = d({
                sx: V,
                theme: T
              }) : J = yf(J, _);
            }
          else
            J = yf(J, o(re, V, T, S));
      }), Vg(T, eb(M, J));
    }
    return Array.isArray(b) ? b.map(A) : A(b);
  }
  return d;
}
const qu = Wb();
qu.filterProps = ["sx"];
function Ub(o, d) {
  var b;
  const f = this;
  if (f.vars) {
    if (!((b = f.colorSchemes) != null && b[o]) || typeof f.getColorSchemeSelector != "function")
      return {};
    let T = f.getColorSchemeSelector(o);
    return T === "&" ? d : ((T.includes("data-") || T.includes(".")) && (T = `*:where(${T.replace(/\s*&$/, "")}) &`), {
      [T]: d
    });
  }
  return f.palette.mode === o ? d : {};
}
function Qh(o = {}, ...d) {
  const {
    breakpoints: f = {},
    palette: b = {},
    spacing: T,
    shape: S = {},
    ...A
  } = o, O = Zg(f), Y = Vh(T);
  let Z = xl({
    breakpoints: O,
    direction: "ltr",
    components: {},
    // Inject component definitions.
    palette: {
      mode: "light",
      ...b
    },
    spacing: Y,
    shape: {
      ...qg,
      ...S
    }
  }, A);
  return Z = Kg(Z), Z.applyStyles = Ub, Z = d.reduce((M, J) => xl(M, J), Z), Z.unstable_sxConfig = {
    ...qf,
    ...A == null ? void 0 : A.unstable_sxConfig
  }, Z.unstable_sx = function(J) {
    return qu({
      sx: J,
      theme: this
    });
  }, Z;
}
const bh = (o) => o, Hb = () => {
  let o = bh;
  return {
    configure(d) {
      o = d;
    },
    generate(d) {
      return o(d);
    },
    reset() {
      o = bh;
    }
  };
}, Yb = Hb();
function Jh(o) {
  var d, f, b = "";
  if (typeof o == "string" || typeof o == "number") b += o;
  else if (typeof o == "object") if (Array.isArray(o)) {
    var T = o.length;
    for (d = 0; d < T; d++) o[d] && (f = Jh(o[d])) && (b && (b += " "), b += f);
  } else for (f in o) o[f] && (b && (b += " "), b += f);
  return b;
}
function To() {
  for (var o, d, f = 0, b = "", T = arguments.length; f < T; f++) (o = arguments[f]) && (d = Jh(o)) && (b && (b += " "), b += d);
  return b;
}
const Gb = {
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
function ou(o, d, f = "Mui") {
  const b = Gb[d];
  return b ? `${f}-${b}` : `${Yb.generate(o)}-${d}`;
}
function Su(o, d, f = "Mui") {
  const b = {};
  return d.forEach((T) => {
    b[T] = ou(o, T, f);
  }), b;
}
function Kh(o, d = "") {
  return o.displayName || o.name || d;
}
function yh(o, d, f) {
  const b = Kh(d);
  return o.displayName || (b !== "" ? `${f}(${b})` : f);
}
function Xb(o) {
  if (o != null) {
    if (typeof o == "string")
      return o;
    if (typeof o == "function")
      return Kh(o, "Component");
    if (typeof o == "object")
      switch (o.$$typeof) {
        case Nf.ForwardRef:
          return yh(o, o.render, "ForwardRef");
        case Nf.Memo:
          return yh(o, o.type, "memo");
        default:
          return;
      }
  }
}
function qh(o) {
  const {
    variants: d,
    ...f
  } = o, b = {
    variants: d,
    style: ch(f),
    isProcessed: !0
  };
  return b.style === f || d && d.forEach((T) => {
    typeof T.style != "function" && (T.style = ch(T.style));
  }), b;
}
const Zb = Qh();
function vd(o) {
  return o !== "ownerState" && o !== "theme" && o !== "sx" && o !== "as";
}
function Vb(o) {
  return o ? (d, f) => f[o] : null;
}
function Qb(o, d, f) {
  o.theme = jb(o.theme) ? f : o.theme[d] || o.theme;
}
function Df(o, d) {
  const f = typeof d == "function" ? d(o) : d;
  if (Array.isArray(f))
    return f.flatMap((b) => Df(o, b));
  if (Array.isArray(f == null ? void 0 : f.variants)) {
    let b;
    if (f.isProcessed)
      b = f.style;
    else {
      const {
        variants: T,
        ...S
      } = f;
      b = S;
    }
    return jh(o, f.variants, [b]);
  }
  return f != null && f.isProcessed ? f.style : f;
}
function jh(o, d, f = []) {
  var T;
  let b;
  e: for (let S = 0; S < d.length; S += 1) {
    const A = d[S];
    if (typeof A.props == "function") {
      if (b ?? (b = {
        ...o,
        ...o.ownerState,
        ownerState: o.ownerState
      }), !A.props(b))
        continue;
    } else
      for (const O in A.props)
        if (o[O] !== A.props[O] && ((T = o.ownerState) == null ? void 0 : T[O]) !== A.props[O])
          continue e;
    typeof A.style == "function" ? (b ?? (b = {
      ...o,
      ...o.ownerState,
      ownerState: o.ownerState
    }), f.push(A.style(b))) : f.push(A.style);
  }
  return f;
}
function Jb(o = {}) {
  const {
    themeId: d,
    defaultTheme: f = Zb,
    rootShouldForwardProp: b = vd,
    slotShouldForwardProp: T = vd
  } = o;
  function S(O) {
    Qb(O, d, f);
  }
  return (O, Y = {}) => {
    Ug(O, ($) => $.filter((Xe) => Xe !== qu));
    const {
      name: Z,
      slot: M,
      skipVariantsResolver: J,
      skipSx: re,
      // TODO v6: remove `lowercaseFirstLetter()` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      overridesResolver: V = Vb($h(M)),
      ..._
    } = Y, N = J !== void 0 ? J : (
      // TODO v6: remove `Root` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      M && M !== "Root" && M !== "root" || !1
    ), Pe = re || !1;
    let Me = vd;
    M === "Root" || M === "root" ? Me = b : M ? Me = T : $b(O) && (Me = void 0);
    const je = Wg(O, {
      shouldForwardProp: Me,
      label: qb(Z, M),
      ..._
    }), ke = ($) => {
      if ($.__emotion_real === $)
        return $;
      if (typeof $ == "function")
        return function(vn) {
          return Df(vn, $);
        };
      if (eu($)) {
        const Xe = qh($);
        return Xe.variants ? function(un) {
          return Df(un, Xe);
        } : Xe.style;
      }
      return $;
    }, ge = (...$) => {
      const Xe = [], vn = $.map(ke), un = [];
      if (Xe.push(S), Z && V && un.push(function(Be) {
        var te, Ce;
        const Le = (Ce = (te = Be.theme.components) == null ? void 0 : te[Z]) == null ? void 0 : Ce.styleOverrides;
        if (!Le)
          return null;
        const dn = {};
        for (const Xn in Le)
          dn[Xn] = Df(Be, Le[Xn]);
        return V(Be, dn);
      }), Z && !N && un.push(function(Be) {
        var dn, te;
        const ye = Be.theme, Le = (te = (dn = ye == null ? void 0 : ye.components) == null ? void 0 : dn[Z]) == null ? void 0 : te.variants;
        return Le ? jh(Be, Le) : null;
      }), Pe || un.push(qu), Array.isArray(vn[0])) {
        const Oe = vn.shift(), Be = new Array(Xe.length).fill(""), ye = new Array(un.length).fill("");
        let Le;
        Le = [...Be, ...Oe, ...ye], Le.raw = [...Be, ...Oe.raw, ...ye], Xe.unshift(Le);
      }
      const Ke = [...Xe, ...vn, ...un], I = je(...Ke);
      return O.muiName && (I.muiName = O.muiName), process.env.NODE_ENV !== "production" && (I.displayName = Kb(Z, M, O)), I;
    };
    return je.withConfig && (ge.withConfig = je.withConfig), ge;
  };
}
function Kb(o, d, f) {
  return o ? `${o}${Nn(d || "")}` : `Styled(${Xb(f)})`;
}
function qb(o, d) {
  let f;
  return process.env.NODE_ENV !== "production" && o && (f = `${o}-${$h(d || "Root")}`), f;
}
function jb(o) {
  for (const d in o)
    return !1;
  return !0;
}
function $b(o) {
  return typeof o == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  o.charCodeAt(0) > 96;
}
function $h(o) {
  return o && o.charAt(0).toLowerCase() + o.slice(1);
}
function zf(o, d) {
  const f = {
    ...d
  };
  for (const b in o)
    if (Object.prototype.hasOwnProperty.call(o, b)) {
      const T = b;
      if (T === "components" || T === "slots")
        f[T] = {
          ...o[T],
          ...f[T]
        };
      else if (T === "componentsProps" || T === "slotProps") {
        const S = o[T], A = d[T];
        if (!A)
          f[T] = S || {};
        else if (!S)
          f[T] = A;
        else {
          f[T] = {
            ...A
          };
          for (const O in S)
            if (Object.prototype.hasOwnProperty.call(S, O)) {
              const Y = O;
              f[T][Y] = zf(S[Y], A[Y]);
            }
        }
      } else f[T] === void 0 && (f[T] = o[T]);
    }
  return f;
}
const ey = typeof window < "u" ? rn.useLayoutEffect : rn.useEffect;
function ny(o, d = Number.MIN_SAFE_INTEGER, f = Number.MAX_SAFE_INTEGER) {
  return Math.max(d, Math.min(o, f));
}
function Ad(o, d = 0, f = 1) {
  return process.env.NODE_ENV !== "production" && (o < d || o > f) && console.error(`MUI: The value provided ${o} is out of range [${d}, ${f}].`), ny(o, d, f);
}
function ty(o) {
  o = o.slice(1);
  const d = new RegExp(`.{1,${o.length >= 6 ? 2 : 1}}`, "g");
  let f = o.match(d);
  return f && f[0].length === 1 && (f = f.map((b) => b + b)), process.env.NODE_ENV !== "production" && o.length !== o.trim().length && console.error(`MUI: The color: "${o}" is invalid. Make sure the color input doesn't contain leading/trailing space.`), f ? `rgb${f.length === 4 ? "a" : ""}(${f.map((b, T) => T < 3 ? parseInt(b, 16) : Math.round(parseInt(b, 16) / 255 * 1e3) / 1e3).join(", ")})` : "";
}
function xu(o) {
  if (o.type)
    return o;
  if (o.charAt(0) === "#")
    return xu(ty(o));
  const d = o.indexOf("("), f = o.substring(0, d);
  if (!["rgb", "rgba", "hsl", "hsla", "color"].includes(f))
    throw new Error(process.env.NODE_ENV !== "production" ? `MUI: Unsupported \`${o}\` color.
The following formats are supported: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color().` : Eu(9, o));
  let b = o.substring(d + 1, o.length - 1), T;
  if (f === "color") {
    if (b = b.split(" "), T = b.shift(), b.length === 4 && b[3].charAt(0) === "/" && (b[3] = b[3].slice(1)), !["srgb", "display-p3", "a98-rgb", "prophoto-rgb", "rec-2020"].includes(T))
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: unsupported \`${T}\` color space.
The following color spaces are supported: srgb, display-p3, a98-rgb, prophoto-rgb, rec-2020.` : Eu(10, T));
  } else
    b = b.split(",");
  return b = b.map((S) => parseFloat(S)), {
    type: f,
    values: b,
    colorSpace: T
  };
}
const ry = (o) => {
  const d = xu(o);
  return d.values.slice(0, 3).map((f, b) => d.type.includes("hsl") && b !== 0 ? `${f}%` : f).join(" ");
}, gf = (o, d) => {
  try {
    return ry(o);
  } catch {
    return d && process.env.NODE_ENV !== "production" && console.warn(d), o;
  }
};
function jf(o) {
  const {
    type: d,
    colorSpace: f
  } = o;
  let {
    values: b
  } = o;
  return d.includes("rgb") ? b = b.map((T, S) => S < 3 ? parseInt(T, 10) : T) : d.includes("hsl") && (b[1] = `${b[1]}%`, b[2] = `${b[2]}%`), d.includes("color") ? b = `${f} ${b.join(" ")}` : b = `${b.join(", ")}`, `${d}(${b})`;
}
function eg(o) {
  o = xu(o);
  const {
    values: d
  } = o, f = d[0], b = d[1] / 100, T = d[2] / 100, S = b * Math.min(T, 1 - T), A = (Z, M = (Z + f / 30) % 12) => T - S * Math.max(Math.min(M - 3, 9 - M, 1), -1);
  let O = "rgb";
  const Y = [Math.round(A(0) * 255), Math.round(A(8) * 255), Math.round(A(4) * 255)];
  return o.type === "hsla" && (O += "a", Y.push(d[3])), jf({
    type: O,
    values: Y
  });
}
function Td(o) {
  o = xu(o);
  let d = o.type === "hsl" || o.type === "hsla" ? xu(eg(o)).values : o.values;
  return d = d.map((f) => (o.type !== "color" && (f /= 255), f <= 0.03928 ? f / 12.92 : ((f + 0.055) / 1.055) ** 2.4)), Number((0.2126 * d[0] + 0.7152 * d[1] + 0.0722 * d[2]).toFixed(3));
}
function vh(o, d) {
  const f = Td(o), b = Td(d);
  return (Math.max(f, b) + 0.05) / (Math.min(f, b) + 0.05);
}
function In(o, d) {
  return o = xu(o), d = Ad(d), (o.type === "rgb" || o.type === "hsl") && (o.type += "a"), o.type === "color" ? o.values[3] = `/${d}` : o.values[3] = d, jf(o);
}
function Ff(o, d, f) {
  try {
    return In(o, d);
  } catch {
    return o;
  }
}
function $f(o, d) {
  if (o = xu(o), d = Ad(d), o.type.includes("hsl"))
    o.values[2] *= 1 - d;
  else if (o.type.includes("rgb") || o.type.includes("color"))
    for (let f = 0; f < 3; f += 1)
      o.values[f] *= 1 - d;
  return jf(o);
}
function kt(o, d, f) {
  try {
    return $f(o, d);
  } catch {
    return o;
  }
}
function ed(o, d) {
  if (o = xu(o), d = Ad(d), o.type.includes("hsl"))
    o.values[2] += (100 - o.values[2]) * d;
  else if (o.type.includes("rgb"))
    for (let f = 0; f < 3; f += 1)
      o.values[f] += (255 - o.values[f]) * d;
  else if (o.type.includes("color"))
    for (let f = 0; f < 3; f += 1)
      o.values[f] += (1 - o.values[f]) * d;
  return jf(o);
}
function mt(o, d, f) {
  try {
    return ed(o, d);
  } catch {
    return o;
  }
}
function oy(o, d = 0.15) {
  return Td(o) > 0.5 ? $f(o, d) : ed(o, d);
}
function Of(o, d, f) {
  try {
    return oy(o, d);
  } catch {
    return o;
  }
}
const ay = /* @__PURE__ */ rn.createContext(void 0);
process.env.NODE_ENV !== "production" && (D.node, D.object);
function iy(o) {
  const {
    theme: d,
    name: f,
    props: b
  } = o;
  if (!d || !d.components || !d.components[f])
    return b;
  const T = d.components[f];
  return T.defaultProps ? zf(T.defaultProps, b) : !T.styleOverrides && !T.variants ? zf(T, b) : b;
}
function ly({
  props: o,
  name: d
}) {
  const f = rn.useContext(ay);
  return iy({
    props: o,
    name: d,
    theme: {
      components: f
    }
  });
}
const ph = {
  theme: void 0
};
function sy(o) {
  let d, f;
  return function(T) {
    let S = d;
    return (S === void 0 || T.theme !== f) && (ph.theme = T.theme, S = qh(o(ph)), d = S, f = T.theme), S;
  };
}
function cy(o = "") {
  function d(...b) {
    if (!b.length)
      return "";
    const T = b[0];
    return typeof T == "string" && !T.match(/(#|\(|\)|(-?(\d*\.)?\d+)(px|em|%|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc))|^(-?(\d*\.)?\d+)$|(\d+ \d+ \d+)/) ? `, var(--${o ? `${o}-` : ""}${T}${d(...b.slice(1))})` : `, ${T}`;
  }
  return (b, ...T) => `var(--${o ? `${o}-` : ""}${b}${d(...T)})`;
}
const wh = (o, d, f, b = []) => {
  let T = o;
  d.forEach((S, A) => {
    A === d.length - 1 ? Array.isArray(T) ? T[Number(S)] = f : T && typeof T == "object" && (T[S] = f) : T && typeof T == "object" && (T[S] || (T[S] = b.includes(S) ? [] : {}), T = T[S]);
  });
}, uy = (o, d, f) => {
  function b(T, S = [], A = []) {
    Object.entries(T).forEach(([O, Y]) => {
      (!f || f && !f([...S, O])) && Y != null && (typeof Y == "object" && Object.keys(Y).length > 0 ? b(Y, [...S, O], Array.isArray(Y) ? [...A, O] : A) : d([...S, O], Y, A));
    });
  }
  b(o);
}, fy = (o, d) => typeof d == "number" ? ["lineHeight", "fontWeight", "opacity", "zIndex"].some((b) => o.includes(b)) || o[o.length - 1].toLowerCase().includes("opacity") ? d : `${d}px` : d;
function pd(o, d) {
  const {
    prefix: f,
    shouldSkipGeneratingVar: b
  } = d || {}, T = {}, S = {}, A = {};
  return uy(
    o,
    (O, Y, Z) => {
      if ((typeof Y == "string" || typeof Y == "number") && (!b || !b(O, Y))) {
        const M = `--${f ? `${f}-` : ""}${O.join("-")}`, J = fy(O, Y);
        Object.assign(T, {
          [M]: J
        }), wh(S, O, `var(${M})`, Z), wh(A, O, `var(${M}, ${J})`, Z);
      }
    },
    (O) => O[0] === "vars"
    // skip 'vars/*' paths
  ), {
    css: T,
    vars: S,
    varsWithDefaults: A
  };
}
function dy(o, d = {}) {
  const {
    getSelector: f = Pe,
    disableCssColorScheme: b,
    colorSchemeSelector: T
  } = d, {
    colorSchemes: S = {},
    components: A,
    defaultColorScheme: O = "light",
    ...Y
  } = o, {
    vars: Z,
    css: M,
    varsWithDefaults: J
  } = pd(Y, d);
  let re = J;
  const V = {}, {
    [O]: _,
    ...N
  } = S;
  if (Object.entries(N || {}).forEach(([ke, ge]) => {
    const {
      vars: $,
      css: Xe,
      varsWithDefaults: vn
    } = pd(ge, d);
    re = xl(re, vn), V[ke] = {
      css: Xe,
      vars: $
    };
  }), _) {
    const {
      css: ke,
      vars: ge,
      varsWithDefaults: $
    } = pd(_, d);
    re = xl(re, $), V[O] = {
      css: ke,
      vars: ge
    };
  }
  function Pe(ke, ge) {
    var Xe, vn;
    let $ = T;
    if (T === "class" && ($ = ".%s"), T === "data" && ($ = "[data-%s]"), T != null && T.startsWith("data-") && !T.includes("%s") && ($ = `[${T}="%s"]`), ke) {
      if ($ === "media")
        return o.defaultColorScheme === ke ? ":root" : {
          [`@media (prefers-color-scheme: ${((vn = (Xe = S[ke]) == null ? void 0 : Xe.palette) == null ? void 0 : vn.mode) || ke})`]: {
            ":root": ge
          }
        };
      if ($)
        return o.defaultColorScheme === ke ? `:root, ${$.replace("%s", String(ke))}` : $.replace("%s", String(ke));
    }
    return ":root";
  }
  return {
    vars: re,
    generateThemeVars: () => {
      let ke = {
        ...Z
      };
      return Object.entries(V).forEach(([, {
        vars: ge
      }]) => {
        ke = xl(ke, ge);
      }), ke;
    },
    generateStyleSheets: () => {
      var un, Ke;
      const ke = [], ge = o.defaultColorScheme || "light";
      function $(I, Oe) {
        Object.keys(Oe).length && ke.push(typeof I == "string" ? {
          [I]: {
            ...Oe
          }
        } : I);
      }
      $(f(void 0, {
        ...M
      }), M);
      const {
        [ge]: Xe,
        ...vn
      } = V;
      if (Xe) {
        const {
          css: I
        } = Xe, Oe = (Ke = (un = S[ge]) == null ? void 0 : un.palette) == null ? void 0 : Ke.mode, Be = !b && Oe ? {
          colorScheme: Oe,
          ...I
        } : {
          ...I
        };
        $(f(ge, {
          ...Be
        }), Be);
      }
      return Object.entries(vn).forEach(([I, {
        css: Oe
      }]) => {
        var Le, dn;
        const Be = (dn = (Le = S[I]) == null ? void 0 : Le.palette) == null ? void 0 : dn.mode, ye = !b && Be ? {
          colorScheme: Be,
          ...Oe
        } : {
          ...Oe
        };
        $(f(I, {
          ...ye
        }), ye);
      }), ke;
    }
  };
}
function hy(o) {
  return function(f) {
    return o === "media" ? (process.env.NODE_ENV !== "production" && f !== "light" && f !== "dark" && console.error(`MUI: @media (prefers-color-scheme) supports only 'light' or 'dark', but receive '${f}'.`), `@media (prefers-color-scheme: ${f})`) : o ? o.startsWith("data-") && !o.includes("%s") ? `[${o}="${f}"] &` : o === "class" ? `.${f} &` : o === "data" ? `[data-${f}] &` : `${o.replace("%s", f)} &` : "&";
  };
}
function Uu(o, d, f = void 0) {
  const b = {};
  for (const T in o) {
    const S = o[T];
    let A = "", O = !0;
    for (let Y = 0; Y < S.length; Y += 1) {
      const Z = S[Y];
      Z && (A += (O === !0 ? "" : " ") + d(Z), O = !1, f && f[Z] && (A += " " + f[Z]));
    }
    b[T] = A;
  }
  return b;
}
const pf = {
  black: "#000",
  white: "#fff"
}, gy = {
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
}, Xu = {
  50: "#f3e5f5",
  200: "#ce93d8",
  300: "#ba68c8",
  400: "#ab47bc",
  500: "#9c27b0",
  700: "#7b1fa2"
}, Zu = {
  300: "#e57373",
  400: "#ef5350",
  500: "#f44336",
  700: "#d32f2f",
  800: "#c62828"
}, cf = {
  300: "#ffb74d",
  400: "#ffa726",
  500: "#ff9800",
  700: "#f57c00",
  900: "#e65100"
}, Vu = {
  50: "#e3f2fd",
  200: "#90caf9",
  400: "#42a5f5",
  700: "#1976d2",
  800: "#1565c0"
}, Qu = {
  300: "#4fc3f7",
  400: "#29b6f6",
  500: "#03a9f4",
  700: "#0288d1",
  900: "#01579b"
}, Ju = {
  300: "#81c784",
  400: "#66bb6a",
  500: "#4caf50",
  700: "#388e3c",
  800: "#2e7d32",
  900: "#1b5e20"
};
function ng() {
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
      paper: pf.white,
      default: pf.white
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
const by = ng();
function tg() {
  return {
    text: {
      primary: pf.white,
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
      active: pf.white,
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
const Th = tg();
function Ch(o, d, f, b) {
  const T = b.light || b, S = b.dark || b * 1.5;
  o[d] || (o.hasOwnProperty(f) ? o[d] = o[f] : d === "light" ? o.light = ed(o.main, T) : d === "dark" && (o.dark = $f(o.main, S)));
}
function yy(o = "light") {
  return o === "dark" ? {
    main: Vu[200],
    light: Vu[50],
    dark: Vu[400]
  } : {
    main: Vu[700],
    light: Vu[400],
    dark: Vu[800]
  };
}
function vy(o = "light") {
  return o === "dark" ? {
    main: Xu[200],
    light: Xu[50],
    dark: Xu[400]
  } : {
    main: Xu[500],
    light: Xu[300],
    dark: Xu[700]
  };
}
function py(o = "light") {
  return o === "dark" ? {
    main: Zu[500],
    light: Zu[300],
    dark: Zu[700]
  } : {
    main: Zu[700],
    light: Zu[400],
    dark: Zu[800]
  };
}
function wy(o = "light") {
  return o === "dark" ? {
    main: Qu[400],
    light: Qu[300],
    dark: Qu[700]
  } : {
    main: Qu[700],
    light: Qu[500],
    dark: Qu[900]
  };
}
function Ty(o = "light") {
  return o === "dark" ? {
    main: Ju[400],
    light: Ju[300],
    dark: Ju[700]
  } : {
    main: Ju[800],
    light: Ju[500],
    dark: Ju[900]
  };
}
function Cy(o = "light") {
  return o === "dark" ? {
    main: cf[400],
    light: cf[300],
    dark: cf[700]
  } : {
    main: "#ed6c02",
    // closest to orange[800] that pass 3:1.
    light: cf[500],
    dark: cf[900]
  };
}
function Md(o) {
  const {
    mode: d = "light",
    contrastThreshold: f = 3,
    tonalOffset: b = 0.2,
    ...T
  } = o, S = o.primary || yy(d), A = o.secondary || vy(d), O = o.error || py(d), Y = o.info || wy(d), Z = o.success || Ty(d), M = o.warning || Cy(d);
  function J(N) {
    const Pe = vh(N, Th.text.primary) >= f ? Th.text.primary : by.text.primary;
    if (process.env.NODE_ENV !== "production") {
      const Me = vh(N, Pe);
      Me < 3 && console.error([`MUI: The contrast ratio of ${Me}:1 for ${Pe} on ${N}`, "falls below the WCAG recommended absolute minimum contrast ratio of 3:1.", "https://www.w3.org/TR/2008/REC-WCAG20-20081211/#visual-audio-contrast-contrast"].join(`
`));
    }
    return Pe;
  }
  const re = ({
    color: N,
    name: Pe,
    mainShade: Me = 500,
    lightShade: je = 300,
    darkShade: ke = 700
  }) => {
    if (N = {
      ...N
    }, !N.main && N[Me] && (N.main = N[Me]), !N.hasOwnProperty("main"))
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The color${Pe ? ` (${Pe})` : ""} provided to augmentColor(color) is invalid.
The color object needs to have a \`main\` property or a \`${Me}\` property.` : Eu(11, Pe ? ` (${Pe})` : "", Me));
    if (typeof N.main != "string")
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The color${Pe ? ` (${Pe})` : ""} provided to augmentColor(color) is invalid.
\`color.main\` should be a string, but \`${JSON.stringify(N.main)}\` was provided instead.

Did you intend to use one of the following approaches?

import { green } from "@mui/material/colors";

const theme1 = createTheme({ palette: {
  primary: green,
} });

const theme2 = createTheme({ palette: {
  primary: { main: green[500] },
} });` : Eu(12, Pe ? ` (${Pe})` : "", JSON.stringify(N.main)));
    return Ch(N, "light", je, b), Ch(N, "dark", ke, b), N.contrastText || (N.contrastText = J(N.main)), N;
  };
  let V;
  return d === "light" ? V = ng() : d === "dark" && (V = tg()), process.env.NODE_ENV !== "production" && (V || console.error(`MUI: The palette mode \`${d}\` is not supported.`)), xl({
    // A collection of common colors.
    common: {
      ...pf
    },
    // prevent mutable object.
    // The palette mode, can be light or dark.
    mode: d,
    // The colors used to represent primary interface elements for a user.
    primary: re({
      color: S,
      name: "primary"
    }),
    // The colors used to represent secondary interface elements for a user.
    secondary: re({
      color: A,
      name: "secondary",
      mainShade: "A400",
      lightShade: "A200",
      darkShade: "A700"
    }),
    // The colors used to represent interface elements that the user should be made aware of.
    error: re({
      color: O,
      name: "error"
    }),
    // The colors used to represent potentially dangerous actions or important messages.
    warning: re({
      color: M,
      name: "warning"
    }),
    // The colors used to present information to the user that is neutral and not necessarily important.
    info: re({
      color: Y,
      name: "info"
    }),
    // The colors used to indicate the successful completion of an action that user triggered.
    success: re({
      color: Z,
      name: "success"
    }),
    // The grey colors.
    grey: gy,
    // Used by `getContrastText()` to maximize the contrast between
    // the background and the text.
    contrastThreshold: f,
    // Takes a background color and returns the text color that maximizes the contrast.
    getContrastText: J,
    // Generate a rich color object.
    augmentColor: re,
    // Used by the functions below to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: b,
    // The light and dark mode object.
    ...V
  }, T);
}
function Ey(o) {
  const d = {};
  return Object.entries(o).forEach((b) => {
    const [T, S] = b;
    typeof S == "object" && (d[T] = `${S.fontStyle ? `${S.fontStyle} ` : ""}${S.fontVariant ? `${S.fontVariant} ` : ""}${S.fontWeight ? `${S.fontWeight} ` : ""}${S.fontStretch ? `${S.fontStretch} ` : ""}${S.fontSize || ""}${S.lineHeight ? `/${S.lineHeight} ` : ""}${S.fontFamily || ""}`);
  }), d;
}
function xy(o, d) {
  return {
    toolbar: {
      minHeight: 56,
      [o.up("xs")]: {
        "@media (orientation: landscape)": {
          minHeight: 48
        }
      },
      [o.up("sm")]: {
        minHeight: 64
      }
    },
    ...d
  };
}
function Ry(o) {
  return Math.round(o * 1e5) / 1e5;
}
const Eh = {
  textTransform: "uppercase"
}, xh = '"Roboto", "Helvetica", "Arial", sans-serif';
function Sy(o, d) {
  const {
    fontFamily: f = xh,
    // The default font size of the Material Specification.
    fontSize: b = 14,
    // px
    fontWeightLight: T = 300,
    fontWeightRegular: S = 400,
    fontWeightMedium: A = 500,
    fontWeightBold: O = 700,
    // Tell MUI what's the font-size on the html element.
    // 16px is the default font-size used by browsers.
    htmlFontSize: Y = 16,
    // Apply the CSS properties to all the variants.
    allVariants: Z,
    pxToRem: M,
    ...J
  } = typeof d == "function" ? d(o) : d;
  process.env.NODE_ENV !== "production" && (typeof b != "number" && console.error("MUI: `fontSize` is required to be a number."), typeof Y != "number" && console.error("MUI: `htmlFontSize` is required to be a number."));
  const re = b / 14, V = M || ((Pe) => `${Pe / Y * re}rem`), _ = (Pe, Me, je, ke, ge) => ({
    fontFamily: f,
    fontWeight: Pe,
    fontSize: V(Me),
    // Unitless following https://meyerweb.com/eric/thoughts/2006/02/08/unitless-line-heights/
    lineHeight: je,
    // The letter spacing was designed for the Roboto font-family. Using the same letter-spacing
    // across font-families can cause issues with the kerning.
    ...f === xh ? {
      letterSpacing: `${Ry(ke / Me)}em`
    } : {},
    ...ge,
    ...Z
  }), N = {
    h1: _(T, 96, 1.167, -1.5),
    h2: _(T, 60, 1.2, -0.5),
    h3: _(S, 48, 1.167, 0),
    h4: _(S, 34, 1.235, 0.25),
    h5: _(S, 24, 1.334, 0),
    h6: _(A, 20, 1.6, 0.15),
    subtitle1: _(S, 16, 1.75, 0.15),
    subtitle2: _(A, 14, 1.57, 0.1),
    body1: _(S, 16, 1.5, 0.15),
    body2: _(S, 14, 1.43, 0.15),
    button: _(A, 14, 1.75, 0.4, Eh),
    caption: _(S, 12, 1.66, 0.4),
    overline: _(S, 12, 2.66, 1, Eh),
    // TODO v6: Remove handling of 'inherit' variant from the theme as it is already handled in Material UI's Typography component. Also, remember to remove the associated types.
    inherit: {
      fontFamily: "inherit",
      fontWeight: "inherit",
      fontSize: "inherit",
      lineHeight: "inherit",
      letterSpacing: "inherit"
    }
  };
  return xl({
    htmlFontSize: Y,
    pxToRem: V,
    fontFamily: f,
    fontSize: b,
    fontWeightLight: T,
    fontWeightRegular: S,
    fontWeightMedium: A,
    fontWeightBold: O,
    ...N
  }, J, {
    clone: !1
    // No need to clone deep
  });
}
const ky = 0.2, my = 0.14, Py = 0.12;
function rr(...o) {
  return [`${o[0]}px ${o[1]}px ${o[2]}px ${o[3]}px rgba(0,0,0,${ky})`, `${o[4]}px ${o[5]}px ${o[6]}px ${o[7]}px rgba(0,0,0,${my})`, `${o[8]}px ${o[9]}px ${o[10]}px ${o[11]}px rgba(0,0,0,${Py})`].join(",");
}
const Fy = ["none", rr(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0), rr(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0), rr(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0), rr(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0), rr(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0), rr(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0), rr(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1), rr(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2), rr(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2), rr(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3), rr(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3), rr(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4), rr(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4), rr(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4), rr(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5), rr(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5), rr(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5), rr(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6), rr(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6), rr(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7), rr(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7), rr(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7), rr(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8), rr(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8)], Oy = {
  // This is the most common easing curve.
  easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
  // Objects enter the screen at full velocity from off-screen and
  // slowly decelerate to a resting point.
  easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
  // Objects leave the screen at full velocity. They do not decelerate when off-screen.
  easeIn: "cubic-bezier(0.4, 0, 1, 1)",
  // The sharp curve is used by objects that may return to the screen at any time.
  sharp: "cubic-bezier(0.4, 0, 0.6, 1)"
}, Ay = {
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
function Rh(o) {
  return `${Math.round(o)}ms`;
}
function My(o) {
  if (!o)
    return 0;
  const d = o / 36;
  return Math.min(Math.round((4 + 15 * d ** 0.25 + d / 5) * 10), 3e3);
}
function Iy(o) {
  const d = {
    ...Oy,
    ...o.easing
  }, f = {
    ...Ay,
    ...o.duration
  };
  return {
    getAutoHeightDuration: My,
    create: (T = ["all"], S = {}) => {
      const {
        duration: A = f.standard,
        easing: O = d.easeInOut,
        delay: Y = 0,
        ...Z
      } = S;
      if (process.env.NODE_ENV !== "production") {
        const M = (re) => typeof re == "string", J = (re) => !Number.isNaN(parseFloat(re));
        !M(T) && !Array.isArray(T) && console.error('MUI: Argument "props" must be a string or Array.'), !J(A) && !M(A) && console.error(`MUI: Argument "duration" must be a number or a string but found ${A}.`), M(O) || console.error('MUI: Argument "easing" must be a string.'), !J(Y) && !M(Y) && console.error('MUI: Argument "delay" must be a number or a string.'), typeof S != "object" && console.error(["MUI: Secong argument of transition.create must be an object.", "Arguments should be either `create('prop1', options)` or `create(['prop1', 'prop2'], options)`"].join(`
`)), Object.keys(Z).length !== 0 && console.error(`MUI: Unrecognized argument(s) [${Object.keys(Z).join(",")}].`);
      }
      return (Array.isArray(T) ? T : [T]).map((M) => `${M} ${typeof A == "string" ? A : Rh(A)} ${O} ${typeof Y == "string" ? Y : Rh(Y)}`).join(",");
    },
    ...o,
    easing: d,
    duration: f
  };
}
const Dy = {
  mobileStepper: 1e3,
  fab: 1050,
  speedDial: 1050,
  appBar: 1100,
  drawer: 1200,
  modal: 1300,
  snackbar: 1400,
  tooltip: 1500
};
function _y(o) {
  return eu(o) || typeof o > "u" || typeof o == "string" || typeof o == "boolean" || typeof o == "number" || Array.isArray(o);
}
function rg(o = {}) {
  const d = {
    ...o
  };
  function f(b) {
    const T = Object.entries(b);
    for (let S = 0; S < T.length; S++) {
      const [A, O] = T[S];
      !_y(O) || A.startsWith("unstable_") ? delete b[A] : eu(O) && (b[A] = {
        ...O
      }, f(b[A]));
    }
  }
  return f(d), `import { unstable_createBreakpoints as createBreakpoints, createTransitions } from '@mui/material/styles';

const theme = ${JSON.stringify(d, null, 2)};

theme.breakpoints = createBreakpoints(theme.breakpoints || {});
theme.transitions = createTransitions(theme.transitions || {});

export default theme;`;
}
function Cd(o = {}, ...d) {
  const {
    breakpoints: f,
    mixins: b = {},
    spacing: T,
    palette: S = {},
    transitions: A = {},
    typography: O = {},
    shape: Y,
    ...Z
  } = o;
  if (o.vars && // The error should throw only for the root theme creation because user is not allowed to use a custom node `vars`.
  // `generateThemeVars` is the closest identifier for checking that the `options` is a result of `createTheme` with CSS variables so that user can create new theme for nested ThemeProvider.
  o.generateThemeVars === void 0)
    throw new Error(process.env.NODE_ENV !== "production" ? "MUI: `vars` is a private field used for CSS variables support.\nPlease use another name or follow the [docs](https://mui.com/material-ui/customization/css-theme-variables/usage/) to enable the feature." : Eu(20));
  const M = Md(S), J = Qh(o);
  let re = xl(J, {
    mixins: xy(J.breakpoints, b),
    palette: M,
    // Don't use [...shadows] until you've verified its transpiled code is not invoking the iterator protocol.
    shadows: Fy.slice(),
    typography: Sy(M, O),
    transitions: Iy(A),
    zIndex: {
      ...Dy
    }
  });
  if (re = xl(re, Z), re = d.reduce((V, _) => xl(V, _), re), process.env.NODE_ENV !== "production") {
    const V = ["active", "checked", "completed", "disabled", "error", "expanded", "focused", "focusVisible", "required", "selected"], _ = (N, Pe) => {
      let Me;
      for (Me in N) {
        const je = N[Me];
        if (V.includes(Me) && Object.keys(je).length > 0) {
          if (process.env.NODE_ENV !== "production") {
            const ke = ou("", Me);
            console.error([`MUI: The \`${Pe}\` component increases the CSS specificity of the \`${Me}\` internal state.`, "You can not override it like this: ", JSON.stringify(N, null, 2), "", `Instead, you need to use the '&.${ke}' syntax:`, JSON.stringify({
              root: {
                [`&.${ke}`]: je
              }
            }, null, 2), "", "https://mui.com/r/state-classes-guide"].join(`
`));
          }
          N[Me] = {};
        }
      }
    };
    Object.keys(re.components).forEach((N) => {
      const Pe = re.components[N].styleOverrides;
      Pe && N.startsWith("Mui") && _(Pe, N);
    });
  }
  return re.unstable_sxConfig = {
    ...qf,
    ...Z == null ? void 0 : Z.unstable_sxConfig
  }, re.unstable_sx = function(_) {
    return qu({
      sx: _,
      theme: this
    });
  }, re.toRuntimeSource = rg, re;
}
function By(o) {
  let d;
  return o < 1 ? d = 5.11916 * o ** 2 : d = 4.5 * Math.log(o + 1) + 2, Math.round(d * 10) / 1e3;
}
const Ny = [...Array(25)].map((o, d) => {
  if (d === 0)
    return "none";
  const f = By(d);
  return `linear-gradient(rgba(255 255 255 / ${f}), rgba(255 255 255 / ${f}))`;
});
function og(o) {
  return {
    inputPlaceholder: o === "dark" ? 0.5 : 0.42,
    inputUnderline: o === "dark" ? 0.7 : 0.42,
    switchTrackDisabled: o === "dark" ? 0.2 : 0.12,
    switchTrack: o === "dark" ? 0.3 : 0.38
  };
}
function ag(o) {
  return o === "dark" ? Ny : [];
}
function Ly(o) {
  const {
    palette: d = {
      mode: "light"
    },
    // need to cast to avoid module augmentation test
    opacity: f,
    overlays: b,
    ...T
  } = o, S = Md(d);
  return {
    palette: S,
    opacity: {
      ...og(S.mode),
      ...f
    },
    overlays: b || ag(S.mode),
    ...T
  };
}
function zy(o) {
  var d;
  return !!o[0].match(/(cssVarPrefix|colorSchemeSelector|rootSelector|typography|mixins|breakpoints|direction|transitions)/) || !!o[0].match(/sxConfig$/) || // ends with sxConfig
  o[0] === "palette" && !!((d = o[1]) != null && d.match(/(mode|contrastThreshold|tonalOffset)/));
}
const Wy = (o) => [...[...Array(25)].map((d, f) => `--${o ? `${o}-` : ""}overlays-${f}`), `--${o ? `${o}-` : ""}palette-AppBar-darkBg`, `--${o ? `${o}-` : ""}palette-AppBar-darkColor`], Uy = (o) => (d, f) => {
  const b = o.rootSelector || ":root", T = o.colorSchemeSelector;
  let S = T;
  if (T === "class" && (S = ".%s"), T === "data" && (S = "[data-%s]"), T != null && T.startsWith("data-") && !T.includes("%s") && (S = `[${T}="%s"]`), o.defaultColorScheme === d) {
    if (d === "dark") {
      const A = {};
      return Wy(o.cssVarPrefix).forEach((O) => {
        A[O] = f[O], delete f[O];
      }), S === "media" ? {
        [b]: f,
        "@media (prefers-color-scheme: dark)": {
          [b]: A
        }
      } : S ? {
        [S.replace("%s", d)]: A,
        [`${b}, ${S.replace("%s", d)}`]: f
      } : {
        [b]: {
          ...f,
          ...A
        }
      };
    }
    if (S && S !== "media")
      return `${b}, ${S.replace("%s", String(d))}`;
  } else if (d) {
    if (S === "media")
      return {
        [`@media (prefers-color-scheme: ${String(d)})`]: {
          [b]: f
        }
      };
    if (S)
      return S.replace("%s", String(d));
  }
  return b;
};
function Hy(o, d) {
  d.forEach((f) => {
    o[f] || (o[f] = {});
  });
}
function se(o, d, f) {
  !o[d] && f && (o[d] = f);
}
function bf(o) {
  return typeof o != "string" || !o.startsWith("hsl") ? o : eg(o);
}
function jc(o, d) {
  `${d}Channel` in o || (o[`${d}Channel`] = gf(bf(o[d]), `MUI: Can't create \`palette.${d}Channel\` because \`palette.${d}\` is not one of these formats: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color().
To suppress this warning, you need to explicitly provide the \`palette.${d}Channel\` as a string (in rgb format, for example "12 12 12") or undefined if you want to remove the channel token.`));
}
function Yy(o) {
  return typeof o == "number" ? `${o}px` : typeof o == "string" || typeof o == "function" || Array.isArray(o) ? o : "8px";
}
const mc = (o) => {
  try {
    return o();
  } catch {
  }
}, Gy = (o = "mui") => cy(o);
function wd(o, d, f, b) {
  if (!d)
    return;
  d = d === !0 ? {} : d;
  const T = b === "dark" ? "dark" : "light";
  if (!f) {
    o[b] = Ly({
      ...d,
      palette: {
        mode: T,
        ...d == null ? void 0 : d.palette
      }
    });
    return;
  }
  const {
    palette: S,
    ...A
  } = Cd({
    ...f,
    palette: {
      mode: T,
      ...d == null ? void 0 : d.palette
    }
  });
  return o[b] = {
    ...d,
    palette: S,
    opacity: {
      ...og(T),
      ...d == null ? void 0 : d.opacity
    },
    overlays: (d == null ? void 0 : d.overlays) || ag(T)
  }, A;
}
function Xy(o = {}, ...d) {
  const {
    colorSchemes: f = {
      light: !0
    },
    defaultColorScheme: b,
    disableCssColorScheme: T = !1,
    cssVarPrefix: S = "mui",
    shouldSkipGeneratingVar: A = zy,
    colorSchemeSelector: O = f.light && f.dark ? "media" : void 0,
    rootSelector: Y = ":root",
    ...Z
  } = o, M = Object.keys(f)[0], J = b || (f.light && M !== "light" ? "light" : M), re = Gy(S), {
    [J]: V,
    light: _,
    dark: N,
    ...Pe
  } = f, Me = {
    ...Pe
  };
  let je = V;
  if ((J === "dark" && !("dark" in f) || J === "light" && !("light" in f)) && (je = !0), !je)
    throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The \`colorSchemes.${J}\` option is either missing or invalid.` : Eu(21, J));
  const ke = wd(Me, je, Z, J);
  _ && !Me.light && wd(Me, _, void 0, "light"), N && !Me.dark && wd(Me, N, void 0, "dark");
  let ge = {
    defaultColorScheme: J,
    ...ke,
    cssVarPrefix: S,
    colorSchemeSelector: O,
    rootSelector: Y,
    getCssVar: re,
    colorSchemes: Me,
    font: {
      ...Ey(ke.typography),
      ...ke.font
    },
    spacing: Yy(Z.spacing)
  };
  Object.keys(ge.colorSchemes).forEach((Ke) => {
    const I = ge.colorSchemes[Ke].palette, Oe = (Be) => {
      const ye = Be.split("-"), Le = ye[1], dn = ye[2];
      return re(Be, I[Le][dn]);
    };
    if (I.mode === "light" && (se(I.common, "background", "#fff"), se(I.common, "onBackground", "#000")), I.mode === "dark" && (se(I.common, "background", "#000"), se(I.common, "onBackground", "#fff")), Hy(I, ["Alert", "AppBar", "Avatar", "Button", "Chip", "FilledInput", "LinearProgress", "Skeleton", "Slider", "SnackbarContent", "SpeedDialAction", "StepConnector", "StepContent", "Switch", "TableCell", "Tooltip"]), I.mode === "light") {
      se(I.Alert, "errorColor", kt(I.error.light, 0.6)), se(I.Alert, "infoColor", kt(I.info.light, 0.6)), se(I.Alert, "successColor", kt(I.success.light, 0.6)), se(I.Alert, "warningColor", kt(I.warning.light, 0.6)), se(I.Alert, "errorFilledBg", Oe("palette-error-main")), se(I.Alert, "infoFilledBg", Oe("palette-info-main")), se(I.Alert, "successFilledBg", Oe("palette-success-main")), se(I.Alert, "warningFilledBg", Oe("palette-warning-main")), se(I.Alert, "errorFilledColor", mc(() => I.getContrastText(I.error.main))), se(I.Alert, "infoFilledColor", mc(() => I.getContrastText(I.info.main))), se(I.Alert, "successFilledColor", mc(() => I.getContrastText(I.success.main))), se(I.Alert, "warningFilledColor", mc(() => I.getContrastText(I.warning.main))), se(I.Alert, "errorStandardBg", mt(I.error.light, 0.9)), se(I.Alert, "infoStandardBg", mt(I.info.light, 0.9)), se(I.Alert, "successStandardBg", mt(I.success.light, 0.9)), se(I.Alert, "warningStandardBg", mt(I.warning.light, 0.9)), se(I.Alert, "errorIconColor", Oe("palette-error-main")), se(I.Alert, "infoIconColor", Oe("palette-info-main")), se(I.Alert, "successIconColor", Oe("palette-success-main")), se(I.Alert, "warningIconColor", Oe("palette-warning-main")), se(I.AppBar, "defaultBg", Oe("palette-grey-100")), se(I.Avatar, "defaultBg", Oe("palette-grey-400")), se(I.Button, "inheritContainedBg", Oe("palette-grey-300")), se(I.Button, "inheritContainedHoverBg", Oe("palette-grey-A100")), se(I.Chip, "defaultBorder", Oe("palette-grey-400")), se(I.Chip, "defaultAvatarColor", Oe("palette-grey-700")), se(I.Chip, "defaultIconColor", Oe("palette-grey-700")), se(I.FilledInput, "bg", "rgba(0, 0, 0, 0.06)"), se(I.FilledInput, "hoverBg", "rgba(0, 0, 0, 0.09)"), se(I.FilledInput, "disabledBg", "rgba(0, 0, 0, 0.12)"), se(I.LinearProgress, "primaryBg", mt(I.primary.main, 0.62)), se(I.LinearProgress, "secondaryBg", mt(I.secondary.main, 0.62)), se(I.LinearProgress, "errorBg", mt(I.error.main, 0.62)), se(I.LinearProgress, "infoBg", mt(I.info.main, 0.62)), se(I.LinearProgress, "successBg", mt(I.success.main, 0.62)), se(I.LinearProgress, "warningBg", mt(I.warning.main, 0.62)), se(I.Skeleton, "bg", `rgba(${Oe("palette-text-primaryChannel")} / 0.11)`), se(I.Slider, "primaryTrack", mt(I.primary.main, 0.62)), se(I.Slider, "secondaryTrack", mt(I.secondary.main, 0.62)), se(I.Slider, "errorTrack", mt(I.error.main, 0.62)), se(I.Slider, "infoTrack", mt(I.info.main, 0.62)), se(I.Slider, "successTrack", mt(I.success.main, 0.62)), se(I.Slider, "warningTrack", mt(I.warning.main, 0.62));
      const Be = Of(I.background.default, 0.8);
      se(I.SnackbarContent, "bg", Be), se(I.SnackbarContent, "color", mc(() => I.getContrastText(Be))), se(I.SpeedDialAction, "fabHoverBg", Of(I.background.paper, 0.15)), se(I.StepConnector, "border", Oe("palette-grey-400")), se(I.StepContent, "border", Oe("palette-grey-400")), se(I.Switch, "defaultColor", Oe("palette-common-white")), se(I.Switch, "defaultDisabledColor", Oe("palette-grey-100")), se(I.Switch, "primaryDisabledColor", mt(I.primary.main, 0.62)), se(I.Switch, "secondaryDisabledColor", mt(I.secondary.main, 0.62)), se(I.Switch, "errorDisabledColor", mt(I.error.main, 0.62)), se(I.Switch, "infoDisabledColor", mt(I.info.main, 0.62)), se(I.Switch, "successDisabledColor", mt(I.success.main, 0.62)), se(I.Switch, "warningDisabledColor", mt(I.warning.main, 0.62)), se(I.TableCell, "border", mt(Ff(I.divider, 1), 0.88)), se(I.Tooltip, "bg", Ff(I.grey[700], 0.92));
    }
    if (I.mode === "dark") {
      se(I.Alert, "errorColor", mt(I.error.light, 0.6)), se(I.Alert, "infoColor", mt(I.info.light, 0.6)), se(I.Alert, "successColor", mt(I.success.light, 0.6)), se(I.Alert, "warningColor", mt(I.warning.light, 0.6)), se(I.Alert, "errorFilledBg", Oe("palette-error-dark")), se(I.Alert, "infoFilledBg", Oe("palette-info-dark")), se(I.Alert, "successFilledBg", Oe("palette-success-dark")), se(I.Alert, "warningFilledBg", Oe("palette-warning-dark")), se(I.Alert, "errorFilledColor", mc(() => I.getContrastText(I.error.dark))), se(I.Alert, "infoFilledColor", mc(() => I.getContrastText(I.info.dark))), se(I.Alert, "successFilledColor", mc(() => I.getContrastText(I.success.dark))), se(I.Alert, "warningFilledColor", mc(() => I.getContrastText(I.warning.dark))), se(I.Alert, "errorStandardBg", kt(I.error.light, 0.9)), se(I.Alert, "infoStandardBg", kt(I.info.light, 0.9)), se(I.Alert, "successStandardBg", kt(I.success.light, 0.9)), se(I.Alert, "warningStandardBg", kt(I.warning.light, 0.9)), se(I.Alert, "errorIconColor", Oe("palette-error-main")), se(I.Alert, "infoIconColor", Oe("palette-info-main")), se(I.Alert, "successIconColor", Oe("palette-success-main")), se(I.Alert, "warningIconColor", Oe("palette-warning-main")), se(I.AppBar, "defaultBg", Oe("palette-grey-900")), se(I.AppBar, "darkBg", Oe("palette-background-paper")), se(I.AppBar, "darkColor", Oe("palette-text-primary")), se(I.Avatar, "defaultBg", Oe("palette-grey-600")), se(I.Button, "inheritContainedBg", Oe("palette-grey-800")), se(I.Button, "inheritContainedHoverBg", Oe("palette-grey-700")), se(I.Chip, "defaultBorder", Oe("palette-grey-700")), se(I.Chip, "defaultAvatarColor", Oe("palette-grey-300")), se(I.Chip, "defaultIconColor", Oe("palette-grey-300")), se(I.FilledInput, "bg", "rgba(255, 255, 255, 0.09)"), se(I.FilledInput, "hoverBg", "rgba(255, 255, 255, 0.13)"), se(I.FilledInput, "disabledBg", "rgba(255, 255, 255, 0.12)"), se(I.LinearProgress, "primaryBg", kt(I.primary.main, 0.5)), se(I.LinearProgress, "secondaryBg", kt(I.secondary.main, 0.5)), se(I.LinearProgress, "errorBg", kt(I.error.main, 0.5)), se(I.LinearProgress, "infoBg", kt(I.info.main, 0.5)), se(I.LinearProgress, "successBg", kt(I.success.main, 0.5)), se(I.LinearProgress, "warningBg", kt(I.warning.main, 0.5)), se(I.Skeleton, "bg", `rgba(${Oe("palette-text-primaryChannel")} / 0.13)`), se(I.Slider, "primaryTrack", kt(I.primary.main, 0.5)), se(I.Slider, "secondaryTrack", kt(I.secondary.main, 0.5)), se(I.Slider, "errorTrack", kt(I.error.main, 0.5)), se(I.Slider, "infoTrack", kt(I.info.main, 0.5)), se(I.Slider, "successTrack", kt(I.success.main, 0.5)), se(I.Slider, "warningTrack", kt(I.warning.main, 0.5));
      const Be = Of(I.background.default, 0.98);
      se(I.SnackbarContent, "bg", Be), se(I.SnackbarContent, "color", mc(() => I.getContrastText(Be))), se(I.SpeedDialAction, "fabHoverBg", Of(I.background.paper, 0.15)), se(I.StepConnector, "border", Oe("palette-grey-600")), se(I.StepContent, "border", Oe("palette-grey-600")), se(I.Switch, "defaultColor", Oe("palette-grey-300")), se(I.Switch, "defaultDisabledColor", Oe("palette-grey-600")), se(I.Switch, "primaryDisabledColor", kt(I.primary.main, 0.55)), se(I.Switch, "secondaryDisabledColor", kt(I.secondary.main, 0.55)), se(I.Switch, "errorDisabledColor", kt(I.error.main, 0.55)), se(I.Switch, "infoDisabledColor", kt(I.info.main, 0.55)), se(I.Switch, "successDisabledColor", kt(I.success.main, 0.55)), se(I.Switch, "warningDisabledColor", kt(I.warning.main, 0.55)), se(I.TableCell, "border", kt(Ff(I.divider, 1), 0.68)), se(I.Tooltip, "bg", Ff(I.grey[700], 0.92));
    }
    jc(I.background, "default"), jc(I.background, "paper"), jc(I.common, "background"), jc(I.common, "onBackground"), jc(I, "divider"), Object.keys(I).forEach((Be) => {
      const ye = I[Be];
      Be !== "tonalOffset" && ye && typeof ye == "object" && (ye.main && se(I[Be], "mainChannel", gf(bf(ye.main))), ye.light && se(I[Be], "lightChannel", gf(bf(ye.light))), ye.dark && se(I[Be], "darkChannel", gf(bf(ye.dark))), ye.contrastText && se(I[Be], "contrastTextChannel", gf(bf(ye.contrastText))), Be === "text" && (jc(I[Be], "primary"), jc(I[Be], "secondary")), Be === "action" && (ye.active && jc(I[Be], "active"), ye.selected && jc(I[Be], "selected")));
    });
  }), ge = d.reduce((Ke, I) => xl(Ke, I), ge);
  const $ = {
    prefix: S,
    disableCssColorScheme: T,
    shouldSkipGeneratingVar: A,
    getSelector: Uy(ge)
  }, {
    vars: Xe,
    generateThemeVars: vn,
    generateStyleSheets: un
  } = dy(ge, $);
  return ge.vars = Xe, Object.entries(ge.colorSchemes[ge.defaultColorScheme]).forEach(([Ke, I]) => {
    ge[Ke] = I;
  }), ge.generateThemeVars = vn, ge.generateStyleSheets = un, ge.generateSpacing = function() {
    return Vh(Z.spacing, Fd(this));
  }, ge.getColorSchemeSelector = hy(O), ge.spacing = ge.generateSpacing(), ge.shouldSkipGeneratingVar = A, ge.unstable_sxConfig = {
    ...qf,
    ...Z == null ? void 0 : Z.unstable_sxConfig
  }, ge.unstable_sx = function(I) {
    return qu({
      sx: I,
      theme: this
    });
  }, ge.toRuntimeSource = rg, ge;
}
function Sh(o, d, f) {
  o.colorSchemes && f && (o.colorSchemes[d] = {
    ...f !== !0 && f,
    palette: Md({
      ...f === !0 ? {} : f.palette,
      mode: d
    })
    // cast type to skip module augmentation test
  });
}
function Id(o = {}, ...d) {
  const {
    palette: f,
    cssVariables: b = !1,
    colorSchemes: T = f ? void 0 : {
      light: !0
    },
    defaultColorScheme: S = f == null ? void 0 : f.mode,
    ...A
  } = o, O = S || "light", Y = T == null ? void 0 : T[O], Z = {
    ...T,
    ...f ? {
      [O]: {
        ...typeof Y != "boolean" && Y,
        palette: f
      }
    } : void 0
  };
  if (b === !1) {
    if (!("colorSchemes" in o))
      return Cd(o, ...d);
    let M = f;
    "palette" in o || Z[O] && (Z[O] !== !0 ? M = Z[O].palette : O === "dark" && (M = {
      mode: "dark"
    }));
    const J = Cd({
      ...o,
      palette: M
    }, ...d);
    return J.defaultColorScheme = O, J.colorSchemes = Z, J.palette.mode === "light" && (J.colorSchemes.light = {
      ...Z.light !== !0 && Z.light,
      palette: J.palette
    }, Sh(J, "dark", Z.dark)), J.palette.mode === "dark" && (J.colorSchemes.dark = {
      ...Z.dark !== !0 && Z.dark,
      palette: J.palette
    }, Sh(J, "light", Z.light)), J;
  }
  return !f && !("light" in Z) && O === "light" && (Z.light = !0), Xy({
    ...A,
    colorSchemes: Z,
    defaultColorScheme: O,
    ...typeof b != "boolean" && b
  }, ...d);
}
const Zy = Id();
function Vy(o) {
  return o !== "ownerState" && o !== "theme" && o !== "sx" && o !== "as";
}
const nd = (o) => Vy(o) && o !== "classes", Xt = Jb({
  themeId: xg,
  defaultTheme: Zy,
  rootShouldForwardProp: nd
}), tu = {
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
}, Af = {
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
}, zu = ["#373737"], Op = Id({
  palette: {
    primary: tu.primary,
    secondary: tu.secondary,
    tertiary: tu.tertiary,
    surface: tu.surface
  }
});
Id({
  palette: {
    primary: Af.primary,
    secondary: Af.secondary,
    tertiary: Af.tertiary,
    surface: Af.surface
  }
});
const is = sy;
process.env.NODE_ENV !== "production" && (D.node, D.object.isRequired);
function Hu(o) {
  return ly(o);
}
let kh = 0;
function Qy(o) {
  const [d, f] = rn.useState(o), b = o || d;
  return rn.useEffect(() => {
    d == null && (kh += 1, f(`mui-${kh}`));
  }, [d]), b;
}
const Jy = {
  ...rn
}, mh = Jy.useId;
function ig(o) {
  if (mh !== void 0) {
    const d = mh();
    return o ?? d;
  }
  return Qy(o);
}
function Ky(o) {
  const {
    controlled: d,
    default: f,
    name: b,
    state: T = "value"
  } = o, {
    current: S
  } = rn.useRef(d !== void 0), [A, O] = rn.useState(f), Y = S ? d : A;
  if (process.env.NODE_ENV !== "production") {
    rn.useEffect(() => {
      S !== (d !== void 0) && console.error([`MUI: A component is changing the ${S ? "" : "un"}controlled ${T} state of ${b} to be ${S ? "un" : ""}controlled.`, "Elements should not switch from uncontrolled to controlled (or vice versa).", `Decide between using a controlled or uncontrolled ${b} element for the lifetime of the component.`, "The nature of the state is determined during the first render. It's considered controlled if the value is not `undefined`.", "More info: https://fb.me/react-controlled-components"].join(`
`));
    }, [T, b, d]);
    const {
      current: M
    } = rn.useRef(f);
    rn.useEffect(() => {
      !S && !Object.is(M, f) && console.error([`MUI: A component is changing the default ${T} state of an uncontrolled ${b} after being initialized. To suppress this warning opt to use a controlled ${b}.`].join(`
`));
    }, [JSON.stringify(f)]);
  }
  const Z = rn.useCallback((M) => {
    S || O(M);
  }, []);
  return [Y, Z];
}
function _f(o) {
  const d = rn.useRef(o);
  return ey(() => {
    d.current = o;
  }), rn.useRef((...f) => (
    // @ts-expect-error hide `this`
    (0, d.current)(...f)
  )).current;
}
function Ed(...o) {
  const d = rn.useRef(void 0), f = rn.useCallback((b) => {
    const T = o.map((S) => {
      if (S == null)
        return null;
      if (typeof S == "function") {
        const A = S, O = A(b);
        return typeof O == "function" ? O : () => {
          A(null);
        };
      }
      return S.current = b, () => {
        S.current = null;
      };
    });
    return () => {
      T.forEach((S) => S == null ? void 0 : S());
    };
  }, o);
  return rn.useMemo(() => o.every((b) => b == null) ? null : (b) => {
    d.current && (d.current(), d.current = void 0), b != null && (d.current = f(b));
  }, o);
}
const Dd = D.oneOfType([D.func, D.object]);
function _d(o, d) {
  return process.env.NODE_ENV === "production" ? () => null : function(...b) {
    return o(...b) || d(...b);
  };
}
function qy(o) {
  const {
    prototype: d = {}
  } = o;
  return !!d.isReactComponent;
}
function jy(o, d, f, b, T) {
  const S = o[d], A = T || d;
  if (S == null || // When server-side rendering React doesn't warn either.
  // This is not an accurate check for SSR.
  // This is only in place for emotion compat.
  // TODO: Revisit once https://github.com/facebook/react/issues/20047 is resolved.
  typeof window > "u")
    return null;
  let O;
  return typeof S == "function" && !qy(S) && (O = "Did you accidentally provide a plain function component instead?"), O !== void 0 ? new Error(`Invalid ${b} \`${A}\` supplied to \`${f}\`. Expected an element type that can hold a ref. ${O} For more information see https://mui.com/r/caveat-with-refs-guide`) : null;
}
const $y = _d(D.elementType, jy);
function Ph(o) {
  try {
    return o.matches(":focus-visible");
  } catch {
    process.env.NODE_ENV !== "production" && !/jsdom/.test(window.navigator.userAgent) && console.warn(["MUI: The `:focus-visible` pseudo class is not supported in this browser.", "Some components rely on this feature to work properly."].join(`
`));
  }
  return !1;
}
const Fh = {};
function lg(o, d) {
  const f = rn.useRef(Fh);
  return f.current === Fh && (f.current = o(d)), f;
}
class Wf {
  constructor() {
    sf(this, "mountEffect", () => {
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
    return new Wf();
  }
  static use() {
    const d = lg(Wf.create).current, [f, b] = rn.useState(!1);
    return d.shouldMount = f, d.setShouldMount = b, rn.useEffect(d.mountEffect, [f]), d;
  }
  mount() {
    return this.mounted || (this.mounted = nv(), this.shouldMount = !0, this.setShouldMount(this.shouldMount)), this.mounted;
  }
  /* Ripple API */
  start(...d) {
    this.mount().then(() => {
      var f;
      return (f = this.ref.current) == null ? void 0 : f.start(...d);
    });
  }
  stop(...d) {
    this.mount().then(() => {
      var f;
      return (f = this.ref.current) == null ? void 0 : f.stop(...d);
    });
  }
  pulsate(...d) {
    this.mount().then(() => {
      var f;
      return (f = this.ref.current) == null ? void 0 : f.pulsate(...d);
    });
  }
}
function ev() {
  return Wf.use();
}
function nv() {
  let o, d;
  const f = new Promise((b, T) => {
    o = b, d = T;
  });
  return f.resolve = o, f.reject = d, f;
}
function xd() {
  return xd = Object.assign ? Object.assign.bind() : function(o) {
    for (var d = 1; d < arguments.length; d++) {
      var f = arguments[d];
      for (var b in f) ({}).hasOwnProperty.call(f, b) && (o[b] = f[b]);
    }
    return o;
  }, xd.apply(null, arguments);
}
function tv(o, d) {
  if (o == null) return {};
  var f = {};
  for (var b in o) if ({}.hasOwnProperty.call(o, b)) {
    if (d.indexOf(b) !== -1) continue;
    f[b] = o[b];
  }
  return f;
}
function Rd(o, d) {
  return Rd = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(f, b) {
    return f.__proto__ = b, f;
  }, Rd(o, d);
}
function rv(o, d) {
  o.prototype = Object.create(d.prototype), o.prototype.constructor = o, Rd(o, d);
}
const Oh = nu.createContext(null);
function ov(o) {
  if (o === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return o;
}
function Bd(o, d) {
  var f = function(S) {
    return d && Mf(S) ? d(S) : S;
  }, b = /* @__PURE__ */ Object.create(null);
  return o && Tg.map(o, function(T) {
    return T;
  }).forEach(function(T) {
    b[T.key] = f(T);
  }), b;
}
function av(o, d) {
  o = o || {}, d = d || {};
  function f(M) {
    return M in d ? d[M] : o[M];
  }
  var b = /* @__PURE__ */ Object.create(null), T = [];
  for (var S in o)
    S in d ? T.length && (b[S] = T, T = []) : T.push(S);
  var A, O = {};
  for (var Y in d) {
    if (b[Y])
      for (A = 0; A < b[Y].length; A++) {
        var Z = b[Y][A];
        O[b[Y][A]] = f(Z);
      }
    O[Y] = f(Y);
  }
  for (A = 0; A < T.length; A++)
    O[T[A]] = f(T[A]);
  return O;
}
function Wu(o, d, f) {
  return f[d] != null ? f[d] : o.props[d];
}
function iv(o, d) {
  return Bd(o.children, function(f) {
    return If(f, {
      onExited: d.bind(null, f),
      in: !0,
      appear: Wu(f, "appear", o),
      enter: Wu(f, "enter", o),
      exit: Wu(f, "exit", o)
    });
  });
}
function lv(o, d, f) {
  var b = Bd(o.children), T = av(d, b);
  return Object.keys(T).forEach(function(S) {
    var A = T[S];
    if (Mf(A)) {
      var O = S in d, Y = S in b, Z = d[S], M = Mf(Z) && !Z.props.in;
      Y && (!O || M) ? T[S] = If(A, {
        onExited: f.bind(null, A),
        in: !0,
        exit: Wu(A, "exit", o),
        enter: Wu(A, "enter", o)
      }) : !Y && O && !M ? T[S] = If(A, {
        in: !1
      }) : Y && O && Mf(Z) && (T[S] = If(A, {
        onExited: f.bind(null, A),
        in: Z.props.in,
        exit: Wu(A, "exit", o),
        enter: Wu(A, "enter", o)
      }));
    }
  }), T;
}
var sv = Object.values || function(o) {
  return Object.keys(o).map(function(d) {
    return o[d];
  });
}, cv = {
  component: "div",
  childFactory: function(d) {
    return d;
  }
}, Nd = /* @__PURE__ */ function(o) {
  rv(d, o);
  function d(b, T) {
    var S;
    S = o.call(this, b, T) || this;
    var A = S.handleExited.bind(ov(S));
    return S.state = {
      contextValue: {
        isMounting: !0
      },
      handleExited: A,
      firstRender: !0
    }, S;
  }
  var f = d.prototype;
  return f.componentDidMount = function() {
    this.mounted = !0, this.setState({
      contextValue: {
        isMounting: !1
      }
    });
  }, f.componentWillUnmount = function() {
    this.mounted = !1;
  }, d.getDerivedStateFromProps = function(T, S) {
    var A = S.children, O = S.handleExited, Y = S.firstRender;
    return {
      children: Y ? iv(T, O) : lv(T, A, O),
      firstRender: !1
    };
  }, f.handleExited = function(T, S) {
    var A = Bd(this.props.children);
    T.key in A || (T.props.onExited && T.props.onExited(S), this.mounted && this.setState(function(O) {
      var Y = xd({}, O.children);
      return delete Y[T.key], {
        children: Y
      };
    }));
  }, f.render = function() {
    var T = this.props, S = T.component, A = T.childFactory, O = tv(T, ["component", "childFactory"]), Y = this.state.contextValue, Z = sv(this.state.children).map(A);
    return delete O.appear, delete O.enter, delete O.exit, S === null ? /* @__PURE__ */ nu.createElement(Oh.Provider, {
      value: Y
    }, Z) : /* @__PURE__ */ nu.createElement(Oh.Provider, {
      value: Y
    }, /* @__PURE__ */ nu.createElement(S, O, Z));
  }, d;
}(nu.Component);
Nd.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * `<TransitionGroup>` renders a `<div>` by default. You can change this
   * behavior by providing a `component` prop.
   * If you use React v16+ and would like to avoid a wrapping `<div>` element
   * you can pass in `component={null}`. This is useful if the wrapping div
   * borks your css styles.
   */
  component: D.any,
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
  children: D.node,
  /**
   * A convenience prop that enables or disables appear animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  appear: D.bool,
  /**
   * A convenience prop that enables or disables enter animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  enter: D.bool,
  /**
   * A convenience prop that enables or disables exit animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  exit: D.bool,
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
  childFactory: D.func
} : {};
Nd.defaultProps = cv;
const uv = [];
function fv(o) {
  rn.useEffect(o, uv);
}
class Ld {
  constructor() {
    sf(this, "currentId", null);
    sf(this, "clear", () => {
      this.currentId !== null && (clearTimeout(this.currentId), this.currentId = null);
    });
    sf(this, "disposeEffect", () => this.clear);
  }
  static create() {
    return new Ld();
  }
  /**
   * Executes `fn` after `delay`, clearing any previously scheduled call.
   */
  start(d, f) {
    this.clear(), this.currentId = setTimeout(() => {
      this.currentId = null, f();
    }, d);
  }
}
function dv() {
  const o = lg(Ld.create).current;
  return fv(o.disposeEffect), o;
}
function sg(o) {
  const {
    className: d,
    classes: f,
    pulsate: b = !1,
    rippleX: T,
    rippleY: S,
    rippleSize: A,
    in: O,
    onExited: Y,
    timeout: Z
  } = o, [M, J] = rn.useState(!1), re = To(d, f.ripple, f.rippleVisible, b && f.ripplePulsate), V = {
    width: A,
    height: A,
    top: -(A / 2) + S,
    left: -(A / 2) + T
  }, _ = To(f.child, M && f.childLeaving, b && f.childPulsate);
  return !O && !M && J(!0), rn.useEffect(() => {
    if (!O && Y != null) {
      const N = setTimeout(Y, Z);
      return () => {
        clearTimeout(N);
      };
    }
  }, [Y, O, Z]), /* @__PURE__ */ ct("span", {
    className: re,
    style: V,
    children: /* @__PURE__ */ ct("span", {
      className: _
    })
  });
}
process.env.NODE_ENV !== "production" && (sg.propTypes = {
  /**
   * Override or extend the styles applied to the component.
   */
  classes: D.object.isRequired,
  className: D.string,
  /**
   * @ignore - injected from TransitionGroup
   */
  in: D.bool,
  /**
   * @ignore - injected from TransitionGroup
   */
  onExited: D.func,
  /**
   * If `true`, the ripple pulsates, typically indicating the keyboard focus state of an element.
   */
  pulsate: D.bool,
  /**
   * Diameter of the ripple.
   */
  rippleSize: D.number,
  /**
   * Horizontal position of the ripple center.
   */
  rippleX: D.number,
  /**
   * Vertical position of the ripple center.
   */
  rippleY: D.number,
  /**
   * exit delay
   */
  timeout: D.number.isRequired
});
const os = Su("MuiTouchRipple", ["root", "ripple", "rippleVisible", "ripplePulsate", "child", "childLeaving", "childPulsate"]), Sd = 550, hv = 80, gv = Tf`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`, bv = Tf`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`, yv = Tf`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`, vv = Xt("span", {
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
}), pv = Xt(sg, {
  name: "MuiTouchRipple",
  slot: "Ripple"
})`
  opacity: 0;
  position: absolute;

  &.${os.rippleVisible} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${gv};
    animation-duration: ${Sd}ms;
    animation-timing-function: ${({
  theme: o
}) => o.transitions.easing.easeInOut};
  }

  &.${os.ripplePulsate} {
    animation-duration: ${({
  theme: o
}) => o.transitions.duration.shorter}ms;
  }

  & .${os.child} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${os.childLeaving} {
    opacity: 0;
    animation-name: ${bv};
    animation-duration: ${Sd}ms;
    animation-timing-function: ${({
  theme: o
}) => o.transitions.easing.easeInOut};
  }

  & .${os.childPulsate} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
    animation-name: ${yv};
    animation-duration: 2500ms;
    animation-timing-function: ${({
  theme: o
}) => o.transitions.easing.easeInOut};
    animation-iteration-count: infinite;
    animation-delay: 200ms;
  }
`, cg = /* @__PURE__ */ rn.forwardRef(function(d, f) {
  const b = Hu({
    props: d,
    name: "MuiTouchRipple"
  }), {
    center: T = !1,
    classes: S = {},
    className: A,
    ...O
  } = b, [Y, Z] = rn.useState([]), M = rn.useRef(0), J = rn.useRef(null);
  rn.useEffect(() => {
    J.current && (J.current(), J.current = null);
  }, [Y]);
  const re = rn.useRef(!1), V = dv(), _ = rn.useRef(null), N = rn.useRef(null), Pe = rn.useCallback((ge) => {
    const {
      pulsate: $,
      rippleX: Xe,
      rippleY: vn,
      rippleSize: un,
      cb: Ke
    } = ge;
    Z((I) => [...I, /* @__PURE__ */ ct(pv, {
      classes: {
        ripple: To(S.ripple, os.ripple),
        rippleVisible: To(S.rippleVisible, os.rippleVisible),
        ripplePulsate: To(S.ripplePulsate, os.ripplePulsate),
        child: To(S.child, os.child),
        childLeaving: To(S.childLeaving, os.childLeaving),
        childPulsate: To(S.childPulsate, os.childPulsate)
      },
      timeout: Sd,
      pulsate: $,
      rippleX: Xe,
      rippleY: vn,
      rippleSize: un
    }, M.current)]), M.current += 1, J.current = Ke;
  }, [S]), Me = rn.useCallback((ge = {}, $ = {}, Xe = () => {
  }) => {
    const {
      pulsate: vn = !1,
      center: un = T || $.pulsate,
      fakeElement: Ke = !1
      // For test purposes
    } = $;
    if ((ge == null ? void 0 : ge.type) === "mousedown" && re.current) {
      re.current = !1;
      return;
    }
    (ge == null ? void 0 : ge.type) === "touchstart" && (re.current = !0);
    const I = Ke ? null : N.current, Oe = I ? I.getBoundingClientRect() : {
      width: 0,
      height: 0,
      left: 0,
      top: 0
    };
    let Be, ye, Le;
    if (un || ge === void 0 || ge.clientX === 0 && ge.clientY === 0 || !ge.clientX && !ge.touches)
      Be = Math.round(Oe.width / 2), ye = Math.round(Oe.height / 2);
    else {
      const {
        clientX: dn,
        clientY: te
      } = ge.touches && ge.touches.length > 0 ? ge.touches[0] : ge;
      Be = Math.round(dn - Oe.left), ye = Math.round(te - Oe.top);
    }
    if (un)
      Le = Math.sqrt((2 * Oe.width ** 2 + Oe.height ** 2) / 3), Le % 2 === 0 && (Le += 1);
    else {
      const dn = Math.max(Math.abs((I ? I.clientWidth : 0) - Be), Be) * 2 + 2, te = Math.max(Math.abs((I ? I.clientHeight : 0) - ye), ye) * 2 + 2;
      Le = Math.sqrt(dn ** 2 + te ** 2);
    }
    ge != null && ge.touches ? _.current === null && (_.current = () => {
      Pe({
        pulsate: vn,
        rippleX: Be,
        rippleY: ye,
        rippleSize: Le,
        cb: Xe
      });
    }, V.start(hv, () => {
      _.current && (_.current(), _.current = null);
    })) : Pe({
      pulsate: vn,
      rippleX: Be,
      rippleY: ye,
      rippleSize: Le,
      cb: Xe
    });
  }, [T, Pe, V]), je = rn.useCallback(() => {
    Me({}, {
      pulsate: !0
    });
  }, [Me]), ke = rn.useCallback((ge, $) => {
    if (V.clear(), (ge == null ? void 0 : ge.type) === "touchend" && _.current) {
      _.current(), _.current = null, V.start(0, () => {
        ke(ge, $);
      });
      return;
    }
    _.current = null, Z((Xe) => Xe.length > 0 ? Xe.slice(1) : Xe), J.current = $;
  }, [V]);
  return rn.useImperativeHandle(f, () => ({
    pulsate: je,
    start: Me,
    stop: ke
  }), [je, Me, ke]), /* @__PURE__ */ ct(vv, {
    className: To(os.root, S.root, A),
    ref: N,
    ...O,
    children: /* @__PURE__ */ ct(Nd, {
      component: null,
      exit: !0,
      children: Y
    })
  });
});
process.env.NODE_ENV !== "production" && (cg.propTypes = {
  /**
   * If `true`, the ripple starts at the center of the component
   * rather than at the point of interaction.
   */
  center: D.bool,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: D.object,
  /**
   * @ignore
   */
  className: D.string
});
function wv(o) {
  return ou("MuiButtonBase", o);
}
const Tv = Su("MuiButtonBase", ["root", "disabled", "focusVisible"]), Cv = (o) => {
  const {
    disabled: d,
    focusVisible: f,
    focusVisibleClassName: b,
    classes: T
  } = o, A = Uu({
    root: ["root", d && "disabled", f && "focusVisible"]
  }, wv, T);
  return f && b && (A.root += ` ${b}`), A;
}, Ev = Xt("button", {
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
  [`&.${Tv.disabled}`]: {
    pointerEvents: "none",
    // Disable link interactions
    cursor: "default"
  },
  "@media print": {
    colorAdjust: "exact"
  }
}), xf = /* @__PURE__ */ rn.forwardRef(function(d, f) {
  const b = Hu({
    props: d,
    name: "MuiButtonBase"
  }), {
    action: T,
    centerRipple: S = !1,
    children: A,
    className: O,
    component: Y = "button",
    disabled: Z = !1,
    disableRipple: M = !1,
    disableTouchRipple: J = !1,
    focusRipple: re = !1,
    focusVisibleClassName: V,
    LinkComponent: _ = "a",
    onBlur: N,
    onClick: Pe,
    onContextMenu: Me,
    onDragLeave: je,
    onFocus: ke,
    onFocusVisible: ge,
    onKeyDown: $,
    onKeyUp: Xe,
    onMouseDown: vn,
    onMouseLeave: un,
    onMouseUp: Ke,
    onTouchEnd: I,
    onTouchMove: Oe,
    onTouchStart: Be,
    tabIndex: ye = 0,
    TouchRippleProps: Le,
    touchRippleRef: dn,
    type: te,
    ...Ce
  } = b, Xn = rn.useRef(null), ze = ev(), q = Ed(ze.ref, dn), [Q, on] = rn.useState(!1);
  Z && Q && on(!1), rn.useImperativeHandle(T, () => ({
    focusVisible: () => {
      on(!0), Xn.current.focus();
    }
  }), []);
  const Qe = ze.shouldMount && !M && !Z;
  rn.useEffect(() => {
    Q && re && !M && ze.pulsate();
  }, [M, re, Q, ze]);
  const Re = $c(ze, "start", vn, J), me = $c(ze, "stop", Me, J), _e = $c(ze, "stop", je, J), $e = $c(ze, "stop", Ke, J), fn = $c(ze, "stop", (xe) => {
    Q && xe.preventDefault(), un && un(xe);
  }, J), Tn = $c(ze, "start", Be, J), Ne = $c(ze, "stop", I, J), He = $c(ze, "stop", Oe, J), de = $c(ze, "stop", (xe) => {
    Ph(xe.target) || on(!1), N && N(xe);
  }, !1), yt = _f((xe) => {
    Xn.current || (Xn.current = xe.currentTarget), Ph(xe.target) && (on(!0), ge && ge(xe)), ke && ke(xe);
  }), to = () => {
    const xe = Xn.current;
    return Y && Y !== "button" && !(xe.tagName === "A" && xe.href);
  }, tt = _f((xe) => {
    re && !xe.repeat && Q && xe.key === " " && ze.stop(xe, () => {
      ze.start(xe);
    }), xe.target === xe.currentTarget && to() && xe.key === " " && xe.preventDefault(), $ && $(xe), xe.target === xe.currentTarget && to() && xe.key === "Enter" && !Z && (xe.preventDefault(), Pe && Pe(xe));
  }), qn = _f((xe) => {
    re && xe.key === " " && Q && !xe.defaultPrevented && ze.stop(xe, () => {
      ze.pulsate(xe);
    }), Xe && Xe(xe), Pe && xe.target === xe.currentTarget && to() && xe.key === " " && !xe.defaultPrevented && Pe(xe);
  });
  let Zt = Y;
  Zt === "button" && (Ce.href || Ce.to) && (Zt = _);
  const _o = {};
  Zt === "button" ? (_o.type = te === void 0 ? "button" : te, _o.disabled = Z) : (!Ce.href && !Ce.to && (_o.role = "button"), Z && (_o["aria-disabled"] = Z));
  const Bi = Ed(f, Xn), Vt = {
    ...b,
    centerRipple: S,
    component: Y,
    disabled: Z,
    disableRipple: M,
    disableTouchRipple: J,
    focusRipple: re,
    tabIndex: ye,
    focusVisible: Q
  }, ut = Cv(Vt);
  return /* @__PURE__ */ wf(Ev, {
    as: Zt,
    className: To(ut.root, O),
    ownerState: Vt,
    onBlur: de,
    onClick: Pe,
    onContextMenu: me,
    onFocus: yt,
    onKeyDown: tt,
    onKeyUp: qn,
    onMouseDown: Re,
    onMouseLeave: fn,
    onMouseUp: $e,
    onDragLeave: _e,
    onTouchEnd: Ne,
    onTouchMove: He,
    onTouchStart: Tn,
    ref: Bi,
    tabIndex: Z ? -1 : ye,
    type: te,
    ..._o,
    ...Ce,
    children: [A, Qe ? /* @__PURE__ */ ct(cg, {
      ref: q,
      center: S,
      ...Le
    }) : null]
  });
});
function $c(o, d, f, b = !1) {
  return _f((T) => (f && f(T), b || o[d](T), !0));
}
process.env.NODE_ENV !== "production" && (xf.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * A ref for imperative actions.
   * It currently only supports `focusVisible()` action.
   */
  action: Dd,
  /**
   * If `true`, the ripples are centered.
   * They won't start at the cursor interaction position.
   * @default false
   */
  centerRipple: D.bool,
  /**
   * The content of the component.
   */
  children: D.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: D.object,
  /**
   * @ignore
   */
  className: D.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: $y,
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: D.bool,
  /**
   * If `true`, the ripple effect is disabled.
   *
   * ⚠️ Without a ripple there is no styling for :focus-visible by default. Be sure
   * to highlight the element by applying separate styles with the `.Mui-focusVisible` class.
   * @default false
   */
  disableRipple: D.bool,
  /**
   * If `true`, the touch ripple effect is disabled.
   * @default false
   */
  disableTouchRipple: D.bool,
  /**
   * If `true`, the base button will have a keyboard focus ripple.
   * @default false
   */
  focusRipple: D.bool,
  /**
   * This prop can help identify which element has keyboard focus.
   * The class name will be applied when the element gains the focus through keyboard interaction.
   * It's a polyfill for the [CSS :focus-visible selector](https://drafts.csswg.org/selectors-4/#the-focus-visible-pseudo).
   * The rationale for using this feature [is explained here](https://github.com/WICG/focus-visible/blob/HEAD/explainer.md).
   * A [polyfill can be used](https://github.com/WICG/focus-visible) to apply a `focus-visible` class to other components
   * if needed.
   */
  focusVisibleClassName: D.string,
  /**
   * @ignore
   */
  href: D.any,
  /**
   * The component used to render a link when the `href` prop is provided.
   * @default 'a'
   */
  LinkComponent: D.elementType,
  /**
   * @ignore
   */
  onBlur: D.func,
  /**
   * @ignore
   */
  onClick: D.func,
  /**
   * @ignore
   */
  onContextMenu: D.func,
  /**
   * @ignore
   */
  onDragLeave: D.func,
  /**
   * @ignore
   */
  onFocus: D.func,
  /**
   * Callback fired when the component is focused with a keyboard.
   * We trigger a `onFocus` callback too.
   */
  onFocusVisible: D.func,
  /**
   * @ignore
   */
  onKeyDown: D.func,
  /**
   * @ignore
   */
  onKeyUp: D.func,
  /**
   * @ignore
   */
  onMouseDown: D.func,
  /**
   * @ignore
   */
  onMouseLeave: D.func,
  /**
   * @ignore
   */
  onMouseUp: D.func,
  /**
   * @ignore
   */
  onTouchEnd: D.func,
  /**
   * @ignore
   */
  onTouchMove: D.func,
  /**
   * @ignore
   */
  onTouchStart: D.func,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: D.oneOfType([D.arrayOf(D.oneOfType([D.func, D.object, D.bool])), D.func, D.object]),
  /**
   * @default 0
   */
  tabIndex: D.number,
  /**
   * Props applied to the `TouchRipple` element.
   */
  TouchRippleProps: D.object,
  /**
   * A ref that points to the `TouchRipple` element.
   */
  touchRippleRef: D.oneOfType([D.func, D.shape({
    current: D.shape({
      pulsate: D.func.isRequired,
      start: D.func.isRequired,
      stop: D.func.isRequired
    })
  })]),
  /**
   * @ignore
   */
  type: D.oneOfType([D.oneOf(["button", "reset", "submit"]), D.string])
});
function xv(o) {
  return typeof o.main == "string";
}
function Rv(o, d = []) {
  if (!xv(o))
    return !1;
  for (const f of d)
    if (!o.hasOwnProperty(f) || typeof o[f] != "string")
      return !1;
  return !0;
}
function ju(o = []) {
  return ([, d]) => d && Rv(d, o);
}
function Sv(o) {
  return ou("MuiCircularProgress", o);
}
Su("MuiCircularProgress", ["root", "determinate", "indeterminate", "colorPrimary", "colorSecondary", "svg", "circle", "circleDeterminate", "circleIndeterminate", "circleDisableShrink"]);
const Tu = 44, kd = Tf`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`, md = Tf`
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
`, kv = typeof kd != "string" ? Uh`
        animation: ${kd} 1.4s linear infinite;
      ` : null, mv = typeof md != "string" ? Uh`
        animation: ${md} 1.4s ease-in-out infinite;
      ` : null, Pv = (o) => {
  const {
    classes: d,
    variant: f,
    color: b,
    disableShrink: T
  } = o, S = {
    root: ["root", f, `color${Nn(b)}`],
    svg: ["svg"],
    circle: ["circle", `circle${Nn(f)}`, T && "circleDisableShrink"]
  };
  return Uu(S, Sv, d);
}, Fv = Xt("span", {
  name: "MuiCircularProgress",
  slot: "Root",
  overridesResolver: (o, d) => {
    const {
      ownerState: f
    } = o;
    return [d.root, d[f.variant], d[`color${Nn(f.color)}`]];
  }
})(is(({
  theme: o
}) => ({
  display: "inline-block",
  variants: [{
    props: {
      variant: "determinate"
    },
    style: {
      transition: o.transitions.create("transform")
    }
  }, {
    props: {
      variant: "indeterminate"
    },
    style: kv || {
      animation: `${kd} 1.4s linear infinite`
    }
  }, ...Object.entries(o.palette).filter(ju()).map(([d]) => ({
    props: {
      color: d
    },
    style: {
      color: (o.vars || o).palette[d].main
    }
  }))]
}))), Ov = Xt("svg", {
  name: "MuiCircularProgress",
  slot: "Svg"
})({
  display: "block"
  // Keeps the progress centered
}), Av = Xt("circle", {
  name: "MuiCircularProgress",
  slot: "Circle",
  overridesResolver: (o, d) => {
    const {
      ownerState: f
    } = o;
    return [d.circle, d[`circle${Nn(f.variant)}`], f.disableShrink && d.circleDisableShrink];
  }
})(is(({
  theme: o
}) => ({
  stroke: "currentColor",
  variants: [{
    props: {
      variant: "determinate"
    },
    style: {
      transition: o.transitions.create("stroke-dashoffset")
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
      ownerState: d
    }) => d.variant === "indeterminate" && !d.disableShrink,
    style: mv || {
      // At runtime for Pigment CSS, `bufferAnimation` will be null and the generated keyframe will be used.
      animation: `${md} 1.4s ease-in-out infinite`
    }
  }]
}))), zd = /* @__PURE__ */ rn.forwardRef(function(d, f) {
  const b = Hu({
    props: d,
    name: "MuiCircularProgress"
  }), {
    className: T,
    color: S = "primary",
    disableShrink: A = !1,
    size: O = 40,
    style: Y,
    thickness: Z = 3.6,
    value: M = 0,
    variant: J = "indeterminate",
    ...re
  } = b, V = {
    ...b,
    color: S,
    disableShrink: A,
    size: O,
    thickness: Z,
    value: M,
    variant: J
  }, _ = Pv(V), N = {}, Pe = {}, Me = {};
  if (J === "determinate") {
    const je = 2 * Math.PI * ((Tu - Z) / 2);
    N.strokeDasharray = je.toFixed(3), Me["aria-valuenow"] = Math.round(M), N.strokeDashoffset = `${((100 - M) / 100 * je).toFixed(3)}px`, Pe.transform = "rotate(-90deg)";
  }
  return /* @__PURE__ */ ct(Fv, {
    className: To(_.root, T),
    style: {
      width: O,
      height: O,
      ...Pe,
      ...Y
    },
    ownerState: V,
    ref: f,
    role: "progressbar",
    ...Me,
    ...re,
    children: /* @__PURE__ */ ct(Ov, {
      className: _.svg,
      ownerState: V,
      viewBox: `${Tu / 2} ${Tu / 2} ${Tu} ${Tu}`,
      children: /* @__PURE__ */ ct(Av, {
        className: _.circle,
        style: N,
        ownerState: V,
        cx: Tu,
        cy: Tu,
        r: (Tu - Z) / 2,
        fill: "none",
        strokeWidth: Z
      })
    })
  });
});
process.env.NODE_ENV !== "production" && (zd.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Override or extend the styles applied to the component.
   */
  classes: D.object,
  /**
   * @ignore
   */
  className: D.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * @default 'primary'
   */
  color: D.oneOfType([D.oneOf(["inherit", "primary", "secondary", "error", "info", "success", "warning"]), D.string]),
  /**
   * If `true`, the shrink animation is disabled.
   * This only works if variant is `indeterminate`.
   * @default false
   */
  disableShrink: _d(D.bool, (o) => o.disableShrink && o.variant && o.variant !== "indeterminate" ? new Error("MUI: You have provided the `disableShrink` prop with a variant other than `indeterminate`. This will have no effect.") : null),
  /**
   * The size of the component.
   * If using a number, the pixel unit is assumed.
   * If using a string, you need to provide the CSS unit, for example '3rem'.
   * @default 40
   */
  size: D.oneOfType([D.number, D.string]),
  /**
   * @ignore
   */
  style: D.object,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: D.oneOfType([D.arrayOf(D.oneOfType([D.func, D.object, D.bool])), D.func, D.object]),
  /**
   * The thickness of the circle.
   * @default 3.6
   */
  thickness: D.number,
  /**
   * The value of the progress indicator for the determinate variant.
   * Value between 0 and 100.
   * @default 0
   */
  value: D.number,
  /**
   * The variant to use.
   * Use indeterminate when there is no progress value.
   * @default 'indeterminate'
   */
  variant: D.oneOf(["determinate", "indeterminate"])
});
function Mv(o) {
  return ou("MuiButton", o);
}
const Nu = Su("MuiButton", ["root", "text", "textInherit", "textPrimary", "textSecondary", "textSuccess", "textError", "textInfo", "textWarning", "outlined", "outlinedInherit", "outlinedPrimary", "outlinedSecondary", "outlinedSuccess", "outlinedError", "outlinedInfo", "outlinedWarning", "contained", "containedInherit", "containedPrimary", "containedSecondary", "containedSuccess", "containedError", "containedInfo", "containedWarning", "disableElevation", "focusVisible", "disabled", "colorInherit", "colorPrimary", "colorSecondary", "colorSuccess", "colorError", "colorInfo", "colorWarning", "textSizeSmall", "textSizeMedium", "textSizeLarge", "outlinedSizeSmall", "outlinedSizeMedium", "outlinedSizeLarge", "containedSizeSmall", "containedSizeMedium", "containedSizeLarge", "sizeMedium", "sizeSmall", "sizeLarge", "fullWidth", "startIcon", "endIcon", "icon", "iconSizeSmall", "iconSizeMedium", "iconSizeLarge", "loading", "loadingWrapper", "loadingIconPlaceholder", "loadingIndicator", "loadingPositionCenter", "loadingPositionStart", "loadingPositionEnd"]), ug = /* @__PURE__ */ rn.createContext({});
process.env.NODE_ENV !== "production" && (ug.displayName = "ButtonGroupContext");
const fg = /* @__PURE__ */ rn.createContext(void 0);
process.env.NODE_ENV !== "production" && (fg.displayName = "ButtonGroupButtonContext");
const Iv = (o) => {
  const {
    color: d,
    disableElevation: f,
    fullWidth: b,
    size: T,
    variant: S,
    loading: A,
    loadingPosition: O,
    classes: Y
  } = o, Z = {
    root: ["root", A && "loading", S, `${S}${Nn(d)}`, `size${Nn(T)}`, `${S}Size${Nn(T)}`, `color${Nn(d)}`, f && "disableElevation", b && "fullWidth", A && `loadingPosition${Nn(O)}`],
    startIcon: ["icon", "startIcon", `iconSize${Nn(T)}`],
    endIcon: ["icon", "endIcon", `iconSize${Nn(T)}`],
    loadingIndicator: ["loadingIndicator"],
    loadingWrapper: ["loadingWrapper"]
  }, M = Uu(Z, Mv, Y);
  return {
    ...Y,
    // forward the focused, disabled, etc. classes to the ButtonBase
    ...M
  };
}, dg = [{
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
}], Dv = Xt(xf, {
  shouldForwardProp: (o) => nd(o) || o === "classes",
  name: "MuiButton",
  slot: "Root",
  overridesResolver: (o, d) => {
    const {
      ownerState: f
    } = o;
    return [d.root, d[f.variant], d[`${f.variant}${Nn(f.color)}`], d[`size${Nn(f.size)}`], d[`${f.variant}Size${Nn(f.size)}`], f.color === "inherit" && d.colorInherit, f.disableElevation && d.disableElevation, f.fullWidth && d.fullWidth, f.loading && d.loading];
  }
})(is(({
  theme: o
}) => {
  const d = o.palette.mode === "light" ? o.palette.grey[300] : o.palette.grey[800], f = o.palette.mode === "light" ? o.palette.grey.A100 : o.palette.grey[700];
  return {
    ...o.typography.button,
    minWidth: 64,
    padding: "6px 16px",
    border: 0,
    borderRadius: (o.vars || o).shape.borderRadius,
    transition: o.transitions.create(["background-color", "box-shadow", "border-color", "color"], {
      duration: o.transitions.duration.short
    }),
    "&:hover": {
      textDecoration: "none"
    },
    [`&.${Nu.disabled}`]: {
      color: (o.vars || o).palette.action.disabled
    },
    variants: [{
      props: {
        variant: "contained"
      },
      style: {
        color: "var(--variant-containedColor)",
        backgroundColor: "var(--variant-containedBg)",
        boxShadow: (o.vars || o).shadows[2],
        "&:hover": {
          boxShadow: (o.vars || o).shadows[4],
          // Reset on touch devices, it doesn't add specificity
          "@media (hover: none)": {
            boxShadow: (o.vars || o).shadows[2]
          }
        },
        "&:active": {
          boxShadow: (o.vars || o).shadows[8]
        },
        [`&.${Nu.focusVisible}`]: {
          boxShadow: (o.vars || o).shadows[6]
        },
        [`&.${Nu.disabled}`]: {
          color: (o.vars || o).palette.action.disabled,
          boxShadow: (o.vars || o).shadows[0],
          backgroundColor: (o.vars || o).palette.action.disabledBackground
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
        [`&.${Nu.disabled}`]: {
          border: `1px solid ${(o.vars || o).palette.action.disabledBackground}`
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
    }, ...Object.entries(o.palette).filter(ju()).map(([b]) => ({
      props: {
        color: b
      },
      style: {
        "--variant-textColor": (o.vars || o).palette[b].main,
        "--variant-outlinedColor": (o.vars || o).palette[b].main,
        "--variant-outlinedBorder": o.vars ? `rgba(${o.vars.palette[b].mainChannel} / 0.5)` : In(o.palette[b].main, 0.5),
        "--variant-containedColor": (o.vars || o).palette[b].contrastText,
        "--variant-containedBg": (o.vars || o).palette[b].main,
        "@media (hover: hover)": {
          "&:hover": {
            "--variant-containedBg": (o.vars || o).palette[b].dark,
            "--variant-textBg": o.vars ? `rgba(${o.vars.palette[b].mainChannel} / ${o.vars.palette.action.hoverOpacity})` : In(o.palette[b].main, o.palette.action.hoverOpacity),
            "--variant-outlinedBorder": (o.vars || o).palette[b].main,
            "--variant-outlinedBg": o.vars ? `rgba(${o.vars.palette[b].mainChannel} / ${o.vars.palette.action.hoverOpacity})` : In(o.palette[b].main, o.palette.action.hoverOpacity)
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
        "--variant-containedBg": o.vars ? o.vars.palette.Button.inheritContainedBg : d,
        "@media (hover: hover)": {
          "&:hover": {
            "--variant-containedBg": o.vars ? o.vars.palette.Button.inheritContainedHoverBg : f,
            "--variant-textBg": o.vars ? `rgba(${o.vars.palette.text.primaryChannel} / ${o.vars.palette.action.hoverOpacity})` : In(o.palette.text.primary, o.palette.action.hoverOpacity),
            "--variant-outlinedBg": o.vars ? `rgba(${o.vars.palette.text.primaryChannel} / ${o.vars.palette.action.hoverOpacity})` : In(o.palette.text.primary, o.palette.action.hoverOpacity)
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
        fontSize: o.typography.pxToRem(13)
      }
    }, {
      props: {
        size: "large",
        variant: "text"
      },
      style: {
        padding: "8px 11px",
        fontSize: o.typography.pxToRem(15)
      }
    }, {
      props: {
        size: "small",
        variant: "outlined"
      },
      style: {
        padding: "3px 9px",
        fontSize: o.typography.pxToRem(13)
      }
    }, {
      props: {
        size: "large",
        variant: "outlined"
      },
      style: {
        padding: "7px 21px",
        fontSize: o.typography.pxToRem(15)
      }
    }, {
      props: {
        size: "small",
        variant: "contained"
      },
      style: {
        padding: "4px 10px",
        fontSize: o.typography.pxToRem(13)
      }
    }, {
      props: {
        size: "large",
        variant: "contained"
      },
      style: {
        padding: "8px 22px",
        fontSize: o.typography.pxToRem(15)
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
        [`&.${Nu.focusVisible}`]: {
          boxShadow: "none"
        },
        "&:active": {
          boxShadow: "none"
        },
        [`&.${Nu.disabled}`]: {
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
        transition: o.transitions.create(["background-color", "box-shadow", "border-color"], {
          duration: o.transitions.duration.short
        }),
        [`&.${Nu.loading}`]: {
          color: "transparent"
        }
      }
    }]
  };
})), _v = Xt("span", {
  name: "MuiButton",
  slot: "StartIcon",
  overridesResolver: (o, d) => {
    const {
      ownerState: f
    } = o;
    return [d.startIcon, f.loading && d.startIconLoadingStart, d[`iconSize${Nn(f.size)}`]];
  }
})(({
  theme: o
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
      transition: o.transitions.create(["opacity"], {
        duration: o.transitions.duration.short
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
  }, ...dg]
})), Bv = Xt("span", {
  name: "MuiButton",
  slot: "EndIcon",
  overridesResolver: (o, d) => {
    const {
      ownerState: f
    } = o;
    return [d.endIcon, f.loading && d.endIconLoadingEnd, d[`iconSize${Nn(f.size)}`]];
  }
})(({
  theme: o
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
      transition: o.transitions.create(["opacity"], {
        duration: o.transitions.duration.short
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
  }, ...dg]
})), Nv = Xt("span", {
  name: "MuiButton",
  slot: "LoadingIndicator"
})(({
  theme: o
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
      color: (o.vars || o).palette.action.disabled
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
})), Ah = Xt("span", {
  name: "MuiButton",
  slot: "LoadingIconPlaceholder"
})({
  display: "inline-block",
  width: "1em",
  height: "1em"
}), hg = /* @__PURE__ */ rn.forwardRef(function(d, f) {
  const b = rn.useContext(ug), T = rn.useContext(fg), S = zf(b, d), A = Hu({
    props: S,
    name: "MuiButton"
  }), {
    children: O,
    color: Y = "primary",
    component: Z = "button",
    className: M,
    disabled: J = !1,
    disableElevation: re = !1,
    disableFocusRipple: V = !1,
    endIcon: _,
    focusVisibleClassName: N,
    fullWidth: Pe = !1,
    id: Me,
    loading: je = null,
    loadingIndicator: ke,
    loadingPosition: ge = "center",
    size: $ = "medium",
    startIcon: Xe,
    type: vn,
    variant: un = "text",
    ...Ke
  } = A, I = ig(Me), Oe = ke ?? /* @__PURE__ */ ct(zd, {
    "aria-labelledby": I,
    color: "inherit",
    size: 16
  }), Be = {
    ...A,
    color: Y,
    component: Z,
    disabled: J,
    disableElevation: re,
    disableFocusRipple: V,
    fullWidth: Pe,
    loading: je,
    loadingIndicator: Oe,
    loadingPosition: ge,
    size: $,
    type: vn,
    variant: un
  }, ye = Iv(Be), Le = (Xe || je && ge === "start") && /* @__PURE__ */ ct(_v, {
    className: ye.startIcon,
    ownerState: Be,
    children: Xe || /* @__PURE__ */ ct(Ah, {
      className: ye.loadingIconPlaceholder,
      ownerState: Be
    })
  }), dn = (_ || je && ge === "end") && /* @__PURE__ */ ct(Bv, {
    className: ye.endIcon,
    ownerState: Be,
    children: _ || /* @__PURE__ */ ct(Ah, {
      className: ye.loadingIconPlaceholder,
      ownerState: Be
    })
  }), te = T || "", Ce = typeof je == "boolean" ? (
    // use plain HTML span to minimize the runtime overhead
    /* @__PURE__ */ ct("span", {
      className: ye.loadingWrapper,
      style: {
        display: "contents"
      },
      children: je && /* @__PURE__ */ ct(Nv, {
        className: ye.loadingIndicator,
        ownerState: Be,
        children: Oe
      })
    })
  ) : null;
  return /* @__PURE__ */ wf(Dv, {
    ownerState: Be,
    className: To(b.className, ye.root, M, te),
    component: Z,
    disabled: J || je,
    focusRipple: !V,
    focusVisibleClassName: To(ye.focusVisible, N),
    ref: f,
    type: vn,
    id: je ? I : Me,
    ...Ke,
    classes: ye,
    children: [Le, ge !== "end" && Ce, O, ge === "end" && Ce, dn]
  });
});
process.env.NODE_ENV !== "production" && (hg.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: D.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: D.object,
  /**
   * @ignore
   */
  className: D.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * @default 'primary'
   */
  color: D.oneOfType([D.oneOf(["inherit", "primary", "secondary", "success", "error", "info", "warning"]), D.string]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: D.elementType,
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: D.bool,
  /**
   * If `true`, no elevation is used.
   * @default false
   */
  disableElevation: D.bool,
  /**
   * If `true`, the  keyboard focus ripple is disabled.
   * @default false
   */
  disableFocusRipple: D.bool,
  /**
   * If `true`, the ripple effect is disabled.
   *
   * ⚠️ Without a ripple there is no styling for :focus-visible by default. Be sure
   * to highlight the element by applying separate styles with the `.Mui-focusVisible` class.
   * @default false
   */
  disableRipple: D.bool,
  /**
   * Element placed after the children.
   */
  endIcon: D.node,
  /**
   * @ignore
   */
  focusVisibleClassName: D.string,
  /**
   * If `true`, the button will take up the full width of its container.
   * @default false
   */
  fullWidth: D.bool,
  /**
   * The URL to link to when the button is clicked.
   * If defined, an `a` element will be used as the root node.
   */
  href: D.string,
  /**
   * @ignore
   */
  id: D.string,
  /**
   * If `true`, the loading indicator is visible and the button is disabled.
   * If `true | false`, the loading wrapper is always rendered before the children to prevent [Google Translation Crash](https://github.com/mui/material-ui/issues/27853).
   * @default null
   */
  loading: D.bool,
  /**
   * Element placed before the children if the button is in loading state.
   * The node should contain an element with `role="progressbar"` with an accessible name.
   * By default, it renders a `CircularProgress` that is labeled by the button itself.
   * @default <CircularProgress color="inherit" size={16} />
   */
  loadingIndicator: D.node,
  /**
   * The loading indicator can be positioned on the start, end, or the center of the button.
   * @default 'center'
   */
  loadingPosition: D.oneOf(["center", "end", "start"]),
  /**
   * The size of the component.
   * `small` is equivalent to the dense button styling.
   * @default 'medium'
   */
  size: D.oneOfType([D.oneOf(["small", "medium", "large"]), D.string]),
  /**
   * Element placed before the children.
   */
  startIcon: D.node,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: D.oneOfType([D.arrayOf(D.oneOfType([D.func, D.object, D.bool])), D.func, D.object]),
  /**
   * @ignore
   */
  type: D.oneOfType([D.oneOf(["button", "reset", "submit"]), D.string]),
  /**
   * The variant to use.
   * @default 'text'
   */
  variant: D.oneOfType([D.oneOf(["contained", "outlined", "text"]), D.string])
});
const Lv = (o, d = "primary") => {
  var T;
  const f = tu[d], b = ((T = o == null ? void 0 : o.palette) == null ? void 0 : T[d]) ?? f;
  return {
    disabledcolor: zu[0],
    filled: {
      borderColor: "transparent",
      bgColor: b.custMain ?? f.custMain,
      //theme傳進來的顏色/fallback的顏色
      fontColor: b.onMain ?? f.onMain,
      overlay: b.onMain ?? f.onMain,
      focusBorderColor: "transparent",
      shadowColor: b.shadow ?? f.shadow
    },
    outlined: {
      borderColor: b.outline ?? f.outline,
      bgColor: "transparent",
      fontColor: b.custMain ?? f.custMain,
      overlay: b.custMain ?? f.custMain,
      focusBorderColor: b.custMain ?? f.custMain,
      shadowColor: "transparent"
    },
    text: {
      borderColor: "transparent",
      bgColor: "transparent",
      fontColor: b.custMain ?? f.custMain,
      overlay: b.custMain ?? f.custMain,
      focusBorderColor: "transparent",
      shadowColor: "transparent"
    },
    elevated: {
      borderColor: "transparent",
      bgColor: b.elevated ?? f.elevated,
      fontColor: b.custMain ?? f.custMain,
      overlay: b.custMain ?? f.custMain,
      focusBorderColor: "transparent",
      shadowColor: b.shadow ?? f.shadow
    },
    tonal: {
      borderColor: "transparent",
      bgColor: b.tonal ?? f.tonal,
      fontColor: b.onTonal ?? f.onTonal,
      overlay: b.onTonal ?? f.onTonal,
      focusBorderColor: "transparent",
      shadowColor: b.shadow ?? f.shadow
    }
  };
}, zv = Xt(hg)(({
  "data-variant": o,
  size: d = "medium",
  theme: f,
  "data-color": b = "primary"
}) => {
  const T = Lv(f, b), A = [
    "filled",
    "outlined",
    "text",
    "elevated",
    "tonal"
  ].includes(
    o
  ) ? o : "filled", O = T[A], Y = {
    small: {},
    medium: {
      fontSize: "14px",
      height: "40px"
    },
    large: {
      fontSize: "20px",
      height: "70px"
    }
  }[d], Z = (M) => ({
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
      backgroundColor: M.overlay,
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
      color: In(T.disabledcolor, 0.38)
    },
    ...Y
  });
  switch (A) {
    case "filled":
      return {
        ...Z(O),
        backgroundColor: O.bgColor,
        color: O.fontColor,
        "&:hover": {
          boxShadow: `0px 1px 3px 1px ${In(O.shadowColor, 0.15)}, 0px 1px 2px 0px ${In(O.shadowColor, 0.3)}`
        },
        "&:active": {
          boxShadow: "none"
        },
        "&.Mui-disabled": {
          backgroundColor: In(T.disabledcolor, 0.12)
        }
      };
    case "outlined":
      return {
        ...Z(O),
        border: `1px solid ${O.borderColor}`,
        color: O.fontColor,
        backgroundColor: O.bgColor,
        "&:focus-visible": {
          border: `1px solid ${O.fontColor}`
        },
        "&:active": {
          border: `1px solid ${O.borderColor}`
        }
      };
    case "text":
      return {
        ...Z(O),
        backgroundColor: O.bgColor,
        color: O.fontColor,
        "&:focus-visible::before": {
          backgroundColor: In(O.overlay, 0.12)
        }
      };
    case "elevated":
      return {
        ...Z(O),
        backgroundColor: O.bgColor,
        color: O.fontColor,
        boxShadow: `0px 1px 3px 1px ${In(O.shadowColor, 0.15)}, 0px 1px 2px 0px ${In(O.shadowColor, 0.3)}`,
        "&:hover": {
          boxShadow: `0px 2px 6px 2px ${In(O.shadowColor, 0.15)}, 0px 1px 2px 0px ${In(O.shadowColor, 0.3)}`
        },
        "&:active, &:focus-visible": {
          boxShadow: `0px 1px 3px 1px ${In(O.shadowColor, 0.15)}, 0px 1px 2px 0px ${In(O.shadowColor, 0.3)}`
        },
        "&.Mui-disabled": {
          backgroundColor: In(T.disabledcolor, 0.12)
        }
      };
    case "tonal":
      return {
        ...Z(O),
        backgroundColor: O.bgColor,
        color: O.fontColor,
        "&:hover": {
          boxShadow: `0px 1px 3px 1px ${In(O.shadowColor, 0.15)}, 0px 1px 2px 0px ${In(O.shadowColor, 0.3)}`
        },
        "&:active": {
          boxShadow: "none"
        },
        "&.Mui-disabled": {
          backgroundColor: In(T.disabledcolor, 0.12)
        }
      };
  }
}), Ap = ({
  variant: o = "filled",
  color: d = "primary",
  ...f
}) => /* @__PURE__ */ ct(
  zv,
  {
    disableElevation: !0,
    disableRipple: !0,
    ...f,
    "data-color": d,
    "data-variant": o
  }
);
function Wv(o) {
  return ou("MuiFab", o);
}
const Mh = Su("MuiFab", ["root", "primary", "secondary", "extended", "circular", "focusVisible", "disabled", "colorInherit", "sizeSmall", "sizeMedium", "sizeLarge", "info", "error", "warning", "success"]), Uv = (o) => {
  const {
    color: d,
    variant: f,
    classes: b,
    size: T
  } = o, S = {
    root: ["root", f, `size${Nn(T)}`, d === "inherit" ? "colorInherit" : d]
  }, A = Uu(S, Wv, b);
  return {
    ...b,
    // forward the focused, disabled, etc. classes to the ButtonBase
    ...A
  };
}, Hv = Xt(xf, {
  name: "MuiFab",
  slot: "Root",
  shouldForwardProp: (o) => nd(o) || o === "classes",
  overridesResolver: (o, d) => {
    const {
      ownerState: f
    } = o;
    return [d.root, d[f.variant], d[`size${Nn(f.size)}`], f.color === "inherit" && d.colorInherit, d[Nn(f.size)], d[f.color]];
  }
})(is(({
  theme: o
}) => {
  var d, f;
  return {
    ...o.typography.button,
    minHeight: 36,
    transition: o.transitions.create(["background-color", "box-shadow", "border-color"], {
      duration: o.transitions.duration.short
    }),
    borderRadius: "50%",
    padding: 0,
    minWidth: 0,
    width: 56,
    height: 56,
    zIndex: (o.vars || o).zIndex.fab,
    boxShadow: (o.vars || o).shadows[6],
    "&:active": {
      boxShadow: (o.vars || o).shadows[12]
    },
    color: o.vars ? o.vars.palette.grey[900] : (f = (d = o.palette).getContrastText) == null ? void 0 : f.call(d, o.palette.grey[300]),
    backgroundColor: (o.vars || o).palette.grey[300],
    "&:hover": {
      backgroundColor: (o.vars || o).palette.grey.A100,
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        backgroundColor: (o.vars || o).palette.grey[300]
      },
      textDecoration: "none"
    },
    [`&.${Mh.focusVisible}`]: {
      boxShadow: (o.vars || o).shadows[6]
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
}), is(({
  theme: o
}) => ({
  variants: [...Object.entries(o.palette).filter(ju(["dark", "contrastText"])).map(([d]) => ({
    props: {
      color: d
    },
    style: {
      color: (o.vars || o).palette[d].contrastText,
      backgroundColor: (o.vars || o).palette[d].main,
      "&:hover": {
        backgroundColor: (o.vars || o).palette[d].dark,
        // Reset on touch devices, it doesn't add specificity
        "@media (hover: none)": {
          backgroundColor: (o.vars || o).palette[d].main
        }
      }
    }
  }))]
})), is(({
  theme: o
}) => ({
  [`&.${Mh.disabled}`]: {
    color: (o.vars || o).palette.action.disabled,
    boxShadow: (o.vars || o).shadows[0],
    backgroundColor: (o.vars || o).palette.action.disabledBackground
  }
}))), gg = /* @__PURE__ */ rn.forwardRef(function(d, f) {
  const b = Hu({
    props: d,
    name: "MuiFab"
  }), {
    children: T,
    className: S,
    color: A = "default",
    component: O = "button",
    disabled: Y = !1,
    disableFocusRipple: Z = !1,
    focusVisibleClassName: M,
    size: J = "large",
    variant: re = "circular",
    ...V
  } = b, _ = {
    ...b,
    color: A,
    component: O,
    disabled: Y,
    disableFocusRipple: Z,
    size: J,
    variant: re
  }, N = Uv(_);
  return /* @__PURE__ */ ct(Hv, {
    className: To(N.root, S),
    component: O,
    disabled: Y,
    focusRipple: !Z,
    focusVisibleClassName: To(N.focusVisible, M),
    ownerState: _,
    ref: f,
    ...V,
    classes: N,
    children: T
  });
});
process.env.NODE_ENV !== "production" && (gg.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: D.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: D.object,
  /**
   * @ignore
   */
  className: D.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * @default 'default'
   */
  color: D.oneOfType([D.oneOf(["default", "error", "info", "inherit", "primary", "secondary", "success", "warning"]), D.string]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: D.elementType,
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: D.bool,
  /**
   * If `true`, the  keyboard focus ripple is disabled.
   * @default false
   */
  disableFocusRipple: D.bool,
  /**
   * If `true`, the ripple effect is disabled.
   */
  disableRipple: D.bool,
  /**
   * @ignore
   */
  focusVisibleClassName: D.string,
  /**
   * The URL to link to when the button is clicked.
   * If defined, an `a` element will be used as the root node.
   */
  href: D.string,
  /**
   * The size of the component.
   * `small` is equivalent to the dense button styling.
   * @default 'large'
   */
  size: D.oneOfType([D.oneOf(["small", "medium", "large"]), D.string]),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: D.oneOfType([D.arrayOf(D.oneOfType([D.func, D.object, D.bool])), D.func, D.object]),
  /**
   * The variant to use.
   * @default 'circular'
   */
  variant: D.oneOfType([D.oneOf(["circular", "extended"]), D.string])
});
const Yv = (o, d = "primary") => {
  var T;
  const f = tu[d], b = ((T = o == null ? void 0 : o.palette) == null ? void 0 : T[d]) ?? f;
  return {
    bgColor: b.fabBg ?? f.fabBg,
    fontColor: b.fabFont ?? f.fabFont,
    overlay: b.fabFont ?? f.fabFont
  };
}, Gv = Xt(gg)(({ "data-color": o, size: d = "medium", variant: f, theme: b }) => {
  const T = Yv(b, o), S = {
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
  }[d], A = f === "extended";
  return {
    fontFamily: "'Noto Sans', 'Noto Sans TC', sans-serif;",
    fontWeight: 500,
    textTransform: "none",
    position: "relative",
    backgroundColor: T.bgColor,
    color: T.fontColor,
    borderRadius: A ? "6px" : "50%",
    ...A ? {} : S,
    "&::before": {
      content: '""',
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      backgroundColor: T.overlay,
      borderRadius: A ? "6px" : "50%",
      opacity: 0,
      transition: "opacity 0.2s ease-in-out"
    },
    "&:hover, &:focus-visible, &:active, &:focus": {
      backgroundColor: T.bgColor
    },
    "&:hover::before": {
      opacity: 0.08
    },
    "&:focus-visible::before, &:active::before": {
      opacity: 0.12
    }
  };
}), Mp = ({ color: o = "surface", ...d }) => /* @__PURE__ */ ct(Gv, { "data-color": o, size: "medium", disableFocusRipple: !0, ...d });
function Xv(o) {
  return ou("MuiIconButton", o);
}
const Ih = Su("MuiIconButton", ["root", "disabled", "colorInherit", "colorPrimary", "colorSecondary", "colorError", "colorInfo", "colorSuccess", "colorWarning", "edgeStart", "edgeEnd", "sizeSmall", "sizeMedium", "sizeLarge", "loading", "loadingIndicator", "loadingWrapper"]), Zv = (o) => {
  const {
    classes: d,
    disabled: f,
    color: b,
    edge: T,
    size: S,
    loading: A
  } = o, O = {
    root: ["root", A && "loading", f && "disabled", b !== "default" && `color${Nn(b)}`, T && `edge${Nn(T)}`, `size${Nn(S)}`],
    loadingIndicator: ["loadingIndicator"],
    loadingWrapper: ["loadingWrapper"]
  };
  return Uu(O, Xv, d);
}, Vv = Xt(xf, {
  name: "MuiIconButton",
  slot: "Root",
  overridesResolver: (o, d) => {
    const {
      ownerState: f
    } = o;
    return [d.root, f.loading && d.loading, f.color !== "default" && d[`color${Nn(f.color)}`], f.edge && d[`edge${Nn(f.edge)}`], d[`size${Nn(f.size)}`]];
  }
})(is(({
  theme: o
}) => ({
  textAlign: "center",
  flex: "0 0 auto",
  fontSize: o.typography.pxToRem(24),
  padding: 8,
  borderRadius: "50%",
  color: (o.vars || o).palette.action.active,
  transition: o.transitions.create("background-color", {
    duration: o.transitions.duration.shortest
  }),
  variants: [{
    props: (d) => !d.disableRipple,
    style: {
      "--IconButton-hoverBg": o.vars ? `rgba(${o.vars.palette.action.activeChannel} / ${o.vars.palette.action.hoverOpacity})` : In(o.palette.action.active, o.palette.action.hoverOpacity),
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
})), is(({
  theme: o
}) => ({
  variants: [{
    props: {
      color: "inherit"
    },
    style: {
      color: "inherit"
    }
  }, ...Object.entries(o.palette).filter(ju()).map(([d]) => ({
    props: {
      color: d
    },
    style: {
      color: (o.vars || o).palette[d].main
    }
  })), ...Object.entries(o.palette).filter(ju()).map(([d]) => ({
    props: {
      color: d
    },
    style: {
      "--IconButton-hoverBg": o.vars ? `rgba(${(o.vars || o).palette[d].mainChannel} / ${o.vars.palette.action.hoverOpacity})` : In((o.vars || o).palette[d].main, o.palette.action.hoverOpacity)
    }
  })), {
    props: {
      size: "small"
    },
    style: {
      padding: 5,
      fontSize: o.typography.pxToRem(18)
    }
  }, {
    props: {
      size: "large"
    },
    style: {
      padding: 12,
      fontSize: o.typography.pxToRem(28)
    }
  }],
  [`&.${Ih.disabled}`]: {
    backgroundColor: "transparent",
    color: (o.vars || o).palette.action.disabled
  },
  [`&.${Ih.loading}`]: {
    color: "transparent"
  }
}))), Qv = Xt("span", {
  name: "MuiIconButton",
  slot: "LoadingIndicator"
})(({
  theme: o
}) => ({
  display: "none",
  position: "absolute",
  visibility: "visible",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  color: (o.vars || o).palette.action.disabled,
  variants: [{
    props: {
      loading: !0
    },
    style: {
      display: "flex"
    }
  }]
})), Wd = /* @__PURE__ */ rn.forwardRef(function(d, f) {
  const b = Hu({
    props: d,
    name: "MuiIconButton"
  }), {
    edge: T = !1,
    children: S,
    className: A,
    color: O = "default",
    disabled: Y = !1,
    disableFocusRipple: Z = !1,
    size: M = "medium",
    id: J,
    loading: re = null,
    loadingIndicator: V,
    ..._
  } = b, N = ig(J), Pe = V ?? /* @__PURE__ */ ct(zd, {
    "aria-labelledby": N,
    color: "inherit",
    size: 16
  }), Me = {
    ...b,
    edge: T,
    color: O,
    disabled: Y,
    disableFocusRipple: Z,
    loading: re,
    loadingIndicator: Pe,
    size: M
  }, je = Zv(Me);
  return /* @__PURE__ */ wf(Vv, {
    id: re ? N : J,
    className: To(je.root, A),
    centerRipple: !0,
    focusRipple: !Z,
    disabled: Y || re,
    ref: f,
    ..._,
    ownerState: Me,
    children: [typeof re == "boolean" && // use plain HTML span to minimize the runtime overhead
    /* @__PURE__ */ ct("span", {
      className: je.loadingWrapper,
      style: {
        display: "contents"
      },
      children: /* @__PURE__ */ ct(Qv, {
        className: je.loadingIndicator,
        ownerState: Me,
        children: re && Pe
      })
    }), S]
  });
});
process.env.NODE_ENV !== "production" && (Wd.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The icon to display.
   */
  children: _d(D.node, (o) => rn.Children.toArray(o.children).some((f) => /* @__PURE__ */ rn.isValidElement(f) && f.props.onClick) ? new Error(["MUI: You are providing an onClick event listener to a child of a button element.", "Prefer applying it to the IconButton directly.", "This guarantees that the whole <button> will be responsive to click events."].join(`
`)) : null),
  /**
   * Override or extend the styles applied to the component.
   */
  classes: D.object,
  /**
   * @ignore
   */
  className: D.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * @default 'default'
   */
  color: D.oneOfType([D.oneOf(["inherit", "default", "primary", "secondary", "error", "info", "success", "warning"]), D.string]),
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: D.bool,
  /**
   * If `true`, the  keyboard focus ripple is disabled.
   * @default false
   */
  disableFocusRipple: D.bool,
  /**
   * If `true`, the ripple effect is disabled.
   *
   * ⚠️ Without a ripple there is no styling for :focus-visible by default. Be sure
   * to highlight the element by applying separate styles with the `.Mui-focusVisible` class.
   * @default false
   */
  disableRipple: D.bool,
  /**
   * If given, uses a negative margin to counteract the padding on one
   * side (this is often helpful for aligning the left or right
   * side of the icon with content above or below, without ruining the border
   * size and shape).
   * @default false
   */
  edge: D.oneOf(["end", "start", !1]),
  /**
   * @ignore
   */
  id: D.string,
  /**
   * If `true`, the loading indicator is visible and the button is disabled.
   * If `true | false`, the loading wrapper is always rendered before the children to prevent [Google Translation Crash](https://github.com/mui/material-ui/issues/27853).
   * @default null
   */
  loading: D.bool,
  /**
   * Element placed before the children if the button is in loading state.
   * The node should contain an element with `role="progressbar"` with an accessible name.
   * By default, it renders a `CircularProgress` that is labeled by the button itself.
   * @default <CircularProgress color="inherit" size={16} />
   */
  loadingIndicator: D.node,
  /**
   * The size of the component.
   * `small` is equivalent to the dense button styling.
   * @default 'medium'
   */
  size: D.oneOfType([D.oneOf(["small", "medium", "large"]), D.string]),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: D.oneOfType([D.arrayOf(D.oneOfType([D.func, D.object, D.bool])), D.func, D.object])
});
const Jv = (o, d = "primary") => {
  var T;
  const f = tu[d], b = ((T = o == null ? void 0 : o.palette) == null ? void 0 : T[d]) ?? f;
  return {
    disabledcolor: zu[0],
    filled: {
      bgColor: b.custMain ?? f.custMain,
      fontColor: b.onMain ?? f.onMain,
      overlay: b.onMain ?? f.onMain,
      borderColor: "transparent"
    },
    standard: {
      bgColor: "transparent",
      fontColor: b.iconFont ?? f.iconFont,
      overlay: b.iconOverlay ?? f.iconOverlay,
      borderColor: "transparent"
    },
    tonal: {
      bgColor: b.tonal ?? f.tonal,
      fontColor: b.iconFont ?? f.iconFont,
      overlay: b.onTonal ?? f.onTonal,
      borderColor: "transparent"
    },
    outlined: {
      bgColor: "transparent",
      fontColor: b.iconFont ?? f.iconFont,
      overlay: b.iconOverlay ?? f.iconOverlay,
      borderColor: b.outline ?? f.outline
    }
  };
}, Kv = (o, d = "primary") => {
  var T;
  const f = tu[d], b = ((T = o == null ? void 0 : o.palette) == null ? void 0 : T[d]) ?? f;
  return {
    disabledcolor: zu[0],
    filled: {
      bgColor: b.surface ?? f.surface,
      fontColor: b.custMain ?? f.custMain,
      overlay: b.custMain ?? f.custMain,
      selectedBgColor: b.custMain ?? f.custMain,
      selectedFontColor: b.onMain ?? f.onMain,
      selectedOverlay: b.onMain ?? f.onMain,
      borderColor: "transparent"
    },
    standard: {
      bgColor: "transparent",
      fontColor: b.custMain ?? f.custMain,
      overlay: b.iconOverlay ?? f.iconOverlay,
      selectedBgColor: "transparent",
      selectedFontColor: b.custMain ?? f.custMain,
      selectedOverlay: b.custMain ?? f.custMain,
      borderColor: "transparent"
    },
    tonal: {
      bgColor: b.surface ?? f.surface,
      fontColor: b.onTonal ?? f.onTonal,
      overlay: b.iconOverlay ?? f.iconOverlay,
      selectedBgColor: b.tonal ?? f.tonal,
      selectedFontColor: b.onTonal ?? f.onTonal,
      selectedOverlay: b.onTonal ?? f.onTonal,
      borderColor: "transparent"
    },
    outlined: {
      bgColor: "transparent",
      fontColor: b.iconFont ?? f.iconFont,
      overlay: b.iconOverlay ?? f.iconOverlay,
      selectedBgColor: b.neutral ?? f.neutral,
      selectedFontColor: b.onMain ?? f.onMain,
      selectedOverlay: b.onMain ?? f.onMain,
      borderColor: b.outline ?? f.outline
    }
  };
}, qv = Xt(Wd)(({
  "data-variant": o,
  "data-color": d,
  size: f = "small",
  theme: b
}) => {
  const T = Jv(b, d), S = ["filled", "standard", "tonal", "outlined"].includes(o) ? o : "filled", A = T[S], O = {
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
  }[f], Y = () => ({
    backgroundColor: A.bgColor,
    color: A.fontColor,
    borderRadius: 6,
    ...O,
    "&::before": {
      content: '""',
      position: "absolute",
      left: 0,
      top: 0,
      width: "100%",
      height: "100%",
      backgroundColor: A.overlay,
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
      backgroundColor: In(T.disabledcolor, 0.08),
      color: In(T.disabledcolor, 0.38)
    },
    "&:hover": {
      backgroundColor: A.bgColor
    },
    "&:hover::before": {
      opacity: 0.08
    },
    "&:active::before, &:focus-visible::before": {
      opacity: 0.12
    }
  });
  switch (S) {
    case "filled":
      return {
        ...Y(),
        "&:hover": {
          backgroundColor: A.bgColor
        }
      };
    case "standard":
      return {
        ...Y(),
        "&.Mui-disabled": {
          backgroundColor: "transparent"
        }
      };
    case "tonal":
      return {
        ...Y(),
        "&:hover": {
          backgroundColor: A.bgColor
        }
      };
    case "outlined":
      return {
        ...Y(),
        border: `1px solid ${A.borderColor}`,
        "&:hover": {
          backgroundColor: A.bgColor,
          border: `1px solid ${A.borderColor}`
        },
        "&.Mui-disabled": {
          backgroundColor: "transparent"
        }
      };
  }
}), jv = Xt(Wd)(({
  "data-variant": o,
  "data-color": d,
  clicked: f,
  size: b = "small",
  theme: T
}) => {
  const S = Kv(T, d), A = ["filled", "standard", "tonal", "outlined"].includes(o) ? o : "filled", O = S[A], Y = {
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
  }[b], Z = () => ({
    backgroundColor: f ? O.selectedBgColor : O.bgColor,
    color: f ? O.selectedFontColor : O.fontColor,
    borderRadius: 6,
    ...Y,
    "&::before": {
      content: '""',
      position: "absolute",
      left: 0,
      top: 0,
      width: "100%",
      height: "100%",
      backgroundColor: f ? O.selectedOverlay : O.overlay,
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
      backgroundColor: In(S.disabledcolor, 0.12),
      color: In(S.disabledcolor, 0.38)
    },
    "&:hover": {
      backgroundColor: f ? O.selectedBgColor : O.bgColor
    },
    "&:hover::before": {
      opacity: 0.08
    },
    "&:active::before, &:focus-visible::before": {
      opacity: 0.12
    }
  });
  switch (A) {
    case "filled":
      return {
        ...Z()
      };
    case "standard":
      return {
        ...Z(),
        "&.Mui-disabled": {
          backgroundColor: "transparent"
        }
      };
    case "tonal":
      return {
        ...Z(),
        "&.Mui-disabled": {
          backgroundColor: In(S.disabledcolor, 0.08),
          color: In(
            f ? O.selectedFontColor : O.fontColor,
            0.38
          )
        }
      };
    case "outlined":
      return {
        ...Z(),
        border: f ? "" : `1px solid ${O.borderColor}`,
        "&.Mui-disabled": {
          backgroundColor: f ? In(S.disabledcolor, 0.12) : "transparent"
        },
        "&:hover": {
          border: f ? "" : `1px solid ${O.borderColor}`
        }
      };
  }
}), Ip = ({
  variant: o,
  toggleIcon: d,
  children: f,
  color: b = "primary",
  ...T
}) => {
  const [S, A] = Cg(!1), O = () => {
    console.log("toggleClick"), A(!S);
  };
  return d ? /* @__PURE__ */ ct(
    jv,
    {
      disableRipple: !0,
      "data-color": b,
      "data-variant": o,
      ...T,
      onClick: O,
      clicked: S,
      children: S ? f : d
    }
  ) : /* @__PURE__ */ ct(
    qv,
    {
      disableRipple: !0,
      "data-color": b,
      "data-variant": o,
      ...T,
      children: f
    }
  );
}, bg = /* @__PURE__ */ rn.createContext(void 0);
process.env.NODE_ENV !== "production" && (bg.displayName = "FormControlContext");
function $v() {
  return rn.useContext(bg);
}
function ep(o) {
  return ou("PrivateSwitchBase", o);
}
Su("PrivateSwitchBase", ["root", "checked", "disabled", "input", "edgeStart", "edgeEnd"]);
function np(o) {
  return typeof o == "string";
}
function tp(o, d, f) {
  return o === void 0 || np(o) ? d : {
    ...d,
    ownerState: {
      ...d.ownerState,
      ...f
    }
  };
}
function rp(o, d, f) {
  return typeof o == "function" ? o(d, f) : o;
}
function op(o, d = []) {
  if (o === void 0)
    return {};
  const f = {};
  return Object.keys(o).filter((b) => b.match(/^on[A-Z]/) && typeof o[b] == "function" && !d.includes(b)).forEach((b) => {
    f[b] = o[b];
  }), f;
}
function Dh(o) {
  if (o === void 0)
    return {};
  const d = {};
  return Object.keys(o).filter((f) => !(f.match(/^on[A-Z]/) && typeof o[f] == "function")).forEach((f) => {
    d[f] = o[f];
  }), d;
}
function ap(o) {
  const {
    getSlotProps: d,
    additionalProps: f,
    externalSlotProps: b,
    externalForwardedProps: T,
    className: S
  } = o;
  if (!d) {
    const V = To(f == null ? void 0 : f.className, S, T == null ? void 0 : T.className, b == null ? void 0 : b.className), _ = {
      ...f == null ? void 0 : f.style,
      ...T == null ? void 0 : T.style,
      ...b == null ? void 0 : b.style
    }, N = {
      ...f,
      ...T,
      ...b
    };
    return V.length > 0 && (N.className = V), Object.keys(_).length > 0 && (N.style = _), {
      props: N,
      internalRef: void 0
    };
  }
  const A = op({
    ...T,
    ...b
  }), O = Dh(b), Y = Dh(T), Z = d(A), M = To(Z == null ? void 0 : Z.className, f == null ? void 0 : f.className, S, T == null ? void 0 : T.className, b == null ? void 0 : b.className), J = {
    ...Z == null ? void 0 : Z.style,
    ...f == null ? void 0 : f.style,
    ...T == null ? void 0 : T.style,
    ...b == null ? void 0 : b.style
  }, re = {
    ...Z,
    ...f,
    ...Y,
    ...O
  };
  return M.length > 0 && (re.className = M), Object.keys(J).length > 0 && (re.style = J), {
    props: re,
    internalRef: Z.ref
  };
}
function vf(o, d) {
  const {
    className: f,
    elementType: b,
    ownerState: T,
    externalForwardedProps: S,
    internalForwardedProps: A,
    shouldForwardComponentProp: O = !1,
    ...Y
  } = d, {
    component: Z,
    slots: M = {
      [o]: void 0
    },
    slotProps: J = {
      [o]: void 0
    },
    ...re
  } = S, V = M[o] || b, _ = rp(J[o], T), {
    props: {
      component: N,
      ...Pe
    },
    internalRef: Me
  } = ap({
    className: f,
    ...Y,
    externalForwardedProps: o === "root" ? re : void 0,
    externalSlotProps: _
  }), je = Ed(Me, _ == null ? void 0 : _.ref, d.ref), ke = o === "root" ? N || Z : N, ge = tp(V, {
    ...o === "root" && !Z && !M[o] && A,
    ...o !== "root" && !M[o] && A,
    ...Pe,
    ...ke && !O && {
      as: ke
    },
    ...ke && O && {
      component: ke
    },
    ref: je
  }, T);
  return [V, ge];
}
const ip = (o) => {
  const {
    classes: d,
    checked: f,
    disabled: b,
    edge: T
  } = o, S = {
    root: ["root", f && "checked", b && "disabled", T && `edge${Nn(T)}`],
    input: ["input"]
  };
  return Uu(S, ep, d);
}, lp = Xt(xf)({
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
      edge: o,
      ownerState: d
    }) => o === "start" && d.size !== "small",
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
      edge: o,
      ownerState: d
    }) => o === "end" && d.size !== "small",
    style: {
      marginRight: -12
    }
  }]
}), sp = Xt("input", {
  shouldForwardProp: nd
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
}), yg = /* @__PURE__ */ rn.forwardRef(function(d, f) {
  const {
    autoFocus: b,
    checked: T,
    checkedIcon: S,
    defaultChecked: A,
    disabled: O,
    disableFocusRipple: Y = !1,
    edge: Z = !1,
    icon: M,
    id: J,
    inputProps: re,
    inputRef: V,
    name: _,
    onBlur: N,
    onChange: Pe,
    onFocus: Me,
    readOnly: je,
    required: ke = !1,
    tabIndex: ge,
    type: $,
    value: Xe,
    slots: vn = {},
    slotProps: un = {},
    ...Ke
  } = d, [I, Oe] = Ky({
    controlled: T,
    default: !!A,
    name: "SwitchBase",
    state: "checked"
  }), Be = $v(), ye = (me) => {
    Me && Me(me), Be && Be.onFocus && Be.onFocus(me);
  }, Le = (me) => {
    N && N(me), Be && Be.onBlur && Be.onBlur(me);
  }, dn = (me) => {
    if (me.nativeEvent.defaultPrevented)
      return;
    const _e = me.target.checked;
    Oe(_e), Pe && Pe(me, _e);
  };
  let te = O;
  Be && typeof te > "u" && (te = Be.disabled);
  const Ce = $ === "checkbox" || $ === "radio", Xn = {
    ...d,
    checked: I,
    disabled: te,
    disableFocusRipple: Y,
    edge: Z
  }, ze = ip(Xn), q = {
    slots: vn,
    slotProps: {
      input: re,
      ...un
    }
  }, [Q, on] = vf("root", {
    ref: f,
    elementType: lp,
    className: ze.root,
    shouldForwardComponentProp: !0,
    externalForwardedProps: {
      ...q,
      component: "span",
      ...Ke
    },
    getSlotProps: (me) => ({
      ...me,
      onFocus: (_e) => {
        var $e;
        ($e = me.onFocus) == null || $e.call(me, _e), ye(_e);
      },
      onBlur: (_e) => {
        var $e;
        ($e = me.onBlur) == null || $e.call(me, _e), Le(_e);
      }
    }),
    ownerState: Xn,
    additionalProps: {
      centerRipple: !0,
      focusRipple: !Y,
      disabled: te,
      role: void 0,
      tabIndex: null
    }
  }), [Qe, Re] = vf("input", {
    ref: V,
    elementType: sp,
    className: ze.input,
    externalForwardedProps: q,
    getSlotProps: (me) => ({
      ...me,
      onChange: (_e) => {
        var $e;
        ($e = me.onChange) == null || $e.call(me, _e), dn(_e);
      }
    }),
    ownerState: Xn,
    additionalProps: {
      autoFocus: b,
      checked: T,
      defaultChecked: A,
      disabled: te,
      id: Ce ? J : void 0,
      name: _,
      readOnly: je,
      required: ke,
      tabIndex: ge,
      type: $,
      ...$ === "checkbox" && Xe === void 0 ? {} : {
        value: Xe
      }
    }
  });
  return /* @__PURE__ */ wf(Q, {
    ...on,
    children: [/* @__PURE__ */ ct(Qe, {
      ...Re
    }), I ? S : M]
  });
});
process.env.NODE_ENV !== "production" && (yg.propTypes = {
  /**
   * If `true`, the `input` element is focused during the first mount.
   */
  autoFocus: D.bool,
  /**
   * If `true`, the component is checked.
   */
  checked: D.bool,
  /**
   * The icon to display when the component is checked.
   */
  checkedIcon: D.node.isRequired,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: D.object,
  /**
   * @ignore
   */
  className: D.string,
  /**
   * @ignore
   */
  defaultChecked: D.bool,
  /**
   * If `true`, the component is disabled.
   */
  disabled: D.bool,
  /**
   * If `true`, the  keyboard focus ripple is disabled.
   * @default false
   */
  disableFocusRipple: D.bool,
  /**
   * If given, uses a negative margin to counteract the padding on one
   * side (this is often helpful for aligning the left or right
   * side of the icon with content above or below, without ruining the border
   * size and shape).
   * @default false
   */
  edge: D.oneOf(["end", "start", !1]),
  /**
   * The icon to display when the component is unchecked.
   */
  icon: D.node.isRequired,
  /**
   * The id of the `input` element.
   */
  id: D.string,
  /**
   * [Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/input#attributes) applied to the `input` element.
   */
  inputProps: D.object,
  /**
   * Pass a ref to the `input` element.
   */
  inputRef: Dd,
  /*
   * @ignore
   */
  name: D.string,
  /**
   * @ignore
   */
  onBlur: D.func,
  /**
   * Callback fired when the state is changed.
   *
   * @param {object} event The event source of the callback.
   * You can pull out the new checked state by accessing `event.target.checked` (boolean).
   */
  onChange: D.func,
  /**
   * @ignore
   */
  onFocus: D.func,
  /**
   * It prevents the user from changing the value of the field
   * (not from interacting with the field).
   */
  readOnly: D.bool,
  /**
   * If `true`, the `input` element is required.
   */
  required: D.bool,
  /**
   * The props used for each slot inside.
   * @default {}
   */
  slotProps: D.shape({
    input: D.oneOfType([D.func, D.object]),
    root: D.oneOfType([D.func, D.object])
  }),
  /**
   * The components used for each slot inside.
   * @default {}
   */
  slots: D.shape({
    input: D.elementType,
    root: D.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: D.object,
  /**
   * @ignore
   */
  tabIndex: D.oneOfType([D.number, D.string]),
  /**
   * The input component prop `type`.
   */
  type: D.string.isRequired,
  /**
   * The value of the component.
   */
  value: D.any
});
function cp(o) {
  return ou("MuiSwitch", o);
}
const Ka = Su("MuiSwitch", ["root", "edgeStart", "edgeEnd", "switchBase", "colorPrimary", "colorSecondary", "sizeSmall", "sizeMedium", "checked", "disabled", "input", "thumb", "track"]), up = (o) => {
  const {
    classes: d,
    edge: f,
    size: b,
    color: T,
    checked: S,
    disabled: A
  } = o, O = {
    root: ["root", f && `edge${Nn(f)}`, `size${Nn(b)}`],
    switchBase: ["switchBase", `color${Nn(T)}`, S && "checked", A && "disabled"],
    thumb: ["thumb"],
    track: ["track"],
    input: ["input"]
  }, Y = Uu(O, cp, d);
  return {
    ...d,
    // forward the disabled and checked classes to the SwitchBase
    ...Y
  };
}, fp = Xt("span", {
  name: "MuiSwitch",
  slot: "Root",
  overridesResolver: (o, d) => {
    const {
      ownerState: f
    } = o;
    return [d.root, f.edge && d[`edge${Nn(f.edge)}`], d[`size${Nn(f.size)}`]];
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
      [`& .${Ka.thumb}`]: {
        width: 16,
        height: 16
      },
      [`& .${Ka.switchBase}`]: {
        padding: 4,
        [`&.${Ka.checked}`]: {
          transform: "translateX(16px)"
        }
      }
    }
  }]
}), dp = Xt(yg, {
  name: "MuiSwitch",
  slot: "SwitchBase",
  overridesResolver: (o, d) => {
    const {
      ownerState: f
    } = o;
    return [d.switchBase, {
      [`& .${Ka.input}`]: d.input
    }, f.color !== "default" && d[`color${Nn(f.color)}`]];
  }
})(is(({
  theme: o
}) => ({
  position: "absolute",
  top: 0,
  left: 0,
  zIndex: 1,
  // Render above the focus ripple.
  color: o.vars ? o.vars.palette.Switch.defaultColor : `${o.palette.mode === "light" ? o.palette.common.white : o.palette.grey[300]}`,
  transition: o.transitions.create(["left", "transform"], {
    duration: o.transitions.duration.shortest
  }),
  [`&.${Ka.checked}`]: {
    transform: "translateX(20px)"
  },
  [`&.${Ka.disabled}`]: {
    color: o.vars ? o.vars.palette.Switch.defaultDisabledColor : `${o.palette.mode === "light" ? o.palette.grey[100] : o.palette.grey[600]}`
  },
  [`&.${Ka.checked} + .${Ka.track}`]: {
    opacity: 0.5
  },
  [`&.${Ka.disabled} + .${Ka.track}`]: {
    opacity: o.vars ? o.vars.opacity.switchTrackDisabled : `${o.palette.mode === "light" ? 0.12 : 0.2}`
  },
  [`& .${Ka.input}`]: {
    left: "-100%",
    width: "300%"
  }
})), is(({
  theme: o
}) => ({
  "&:hover": {
    backgroundColor: o.vars ? `rgba(${o.vars.palette.action.activeChannel} / ${o.vars.palette.action.hoverOpacity})` : In(o.palette.action.active, o.palette.action.hoverOpacity),
    // Reset on touch devices, it doesn't add specificity
    "@media (hover: none)": {
      backgroundColor: "transparent"
    }
  },
  variants: [...Object.entries(o.palette).filter(ju(["light"])).map(([d]) => ({
    props: {
      color: d
    },
    style: {
      [`&.${Ka.checked}`]: {
        color: (o.vars || o).palette[d].main,
        "&:hover": {
          backgroundColor: o.vars ? `rgba(${o.vars.palette[d].mainChannel} / ${o.vars.palette.action.hoverOpacity})` : In(o.palette[d].main, o.palette.action.hoverOpacity),
          "@media (hover: none)": {
            backgroundColor: "transparent"
          }
        },
        [`&.${Ka.disabled}`]: {
          color: o.vars ? o.vars.palette.Switch[`${d}DisabledColor`] : `${o.palette.mode === "light" ? ed(o.palette[d].main, 0.62) : $f(o.palette[d].main, 0.55)}`
        }
      },
      [`&.${Ka.checked} + .${Ka.track}`]: {
        backgroundColor: (o.vars || o).palette[d].main
      }
    }
  }))]
}))), hp = Xt("span", {
  name: "MuiSwitch",
  slot: "Track"
})(is(({
  theme: o
}) => ({
  height: "100%",
  width: "100%",
  borderRadius: 14 / 2,
  zIndex: -1,
  transition: o.transitions.create(["opacity", "background-color"], {
    duration: o.transitions.duration.shortest
  }),
  backgroundColor: o.vars ? o.vars.palette.common.onBackground : `${o.palette.mode === "light" ? o.palette.common.black : o.palette.common.white}`,
  opacity: o.vars ? o.vars.opacity.switchTrack : `${o.palette.mode === "light" ? 0.38 : 0.3}`
}))), gp = Xt("span", {
  name: "MuiSwitch",
  slot: "Thumb"
})(is(({
  theme: o
}) => ({
  boxShadow: (o.vars || o).shadows[1],
  backgroundColor: "currentColor",
  width: 20,
  height: 20,
  borderRadius: "50%"
}))), vg = /* @__PURE__ */ rn.forwardRef(function(d, f) {
  const b = Hu({
    props: d,
    name: "MuiSwitch"
  }), {
    className: T,
    color: S = "primary",
    edge: A = !1,
    size: O = "medium",
    sx: Y,
    slots: Z = {},
    slotProps: M = {},
    ...J
  } = b, re = {
    ...b,
    color: S,
    edge: A,
    size: O
  }, V = up(re), _ = {
    slots: Z,
    slotProps: M
  }, [N, Pe] = vf("root", {
    className: To(V.root, T),
    elementType: fp,
    externalForwardedProps: _,
    ownerState: re,
    additionalProps: {
      sx: Y
    }
  }), [Me, je] = vf("thumb", {
    className: V.thumb,
    elementType: gp,
    externalForwardedProps: _,
    ownerState: re
  }), ke = /* @__PURE__ */ ct(Me, {
    ...je
  }), [ge, $] = vf("track", {
    className: V.track,
    elementType: hp,
    externalForwardedProps: _,
    ownerState: re
  });
  return /* @__PURE__ */ wf(N, {
    ...Pe,
    children: [/* @__PURE__ */ ct(dp, {
      type: "checkbox",
      icon: ke,
      checkedIcon: ke,
      ref: f,
      ownerState: re,
      ...J,
      classes: {
        ...V,
        root: V.switchBase
      },
      slots: {
        ...Z.switchBase && {
          root: Z.switchBase
        },
        ...Z.input && {
          input: Z.input
        }
      },
      slotProps: {
        ...M.switchBase && {
          root: typeof M.switchBase == "function" ? M.switchBase(re) : M.switchBase
        },
        ...M.input && {
          input: typeof M.input == "function" ? M.input(re) : M.input
        }
      }
    }), /* @__PURE__ */ ct(ge, {
      ...$
    })]
  });
});
process.env.NODE_ENV !== "production" && (vg.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * If `true`, the component is checked.
   */
  checked: D.bool,
  /**
   * The icon to display when the component is checked.
   */
  checkedIcon: D.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: D.object,
  /**
   * @ignore
   */
  className: D.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * @default 'primary'
   */
  color: D.oneOfType([D.oneOf(["default", "primary", "secondary", "error", "info", "success", "warning"]), D.string]),
  /**
   * The default checked state. Use when the component is not controlled.
   */
  defaultChecked: D.bool,
  /**
   * If `true`, the component is disabled.
   */
  disabled: D.bool,
  /**
   * If `true`, the ripple effect is disabled.
   * @default false
   */
  disableRipple: D.bool,
  /**
   * If given, uses a negative margin to counteract the padding on one
   * side (this is often helpful for aligning the left or right
   * side of the icon with content above or below, without ruining the border
   * size and shape).
   * @default false
   */
  edge: D.oneOf(["end", "start", !1]),
  /**
   * The icon to display when the component is unchecked.
   */
  icon: D.node,
  /**
   * The id of the `input` element.
   */
  id: D.string,
  /**
   * [Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/input#attributes) applied to the `input` element.
   * @deprecated Use `slotProps.input` instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   */
  inputProps: D.object,
  /**
   * Pass a ref to the `input` element.
   * @deprecated Use `slotProps.input.ref` instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   */
  inputRef: Dd,
  /**
   * Callback fired when the state is changed.
   *
   * @param {React.ChangeEvent<HTMLInputElement>} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value` (string).
   * You can pull out the new checked state by accessing `event.target.checked` (boolean).
   */
  onChange: D.func,
  /**
   * If `true`, the `input` element is required.
   * @default false
   */
  required: D.bool,
  /**
   * The size of the component.
   * `small` is equivalent to the dense switch styling.
   * @default 'medium'
   */
  size: D.oneOfType([D.oneOf(["medium", "small"]), D.string]),
  /**
   * The props used for each slot inside.
   * @default {}
   */
  slotProps: D.shape({
    input: D.oneOfType([D.func, D.object]),
    root: D.oneOfType([D.func, D.object]),
    switchBase: D.oneOfType([D.func, D.object]),
    thumb: D.oneOfType([D.func, D.object]),
    track: D.oneOfType([D.func, D.object])
  }),
  /**
   * The components used for each slot inside.
   * @default {}
   */
  slots: D.shape({
    input: D.elementType,
    root: D.elementType,
    switchBase: D.elementType,
    thumb: D.elementType,
    track: D.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: D.oneOfType([D.arrayOf(D.oneOfType([D.func, D.object, D.bool])), D.func, D.object]),
  /**
   * The value of the component. The DOM API casts this to a string.
   * The browser uses "on" as the default value.
   */
  value: D.any
});
var Lu = {}, uf = {};
/**
 * @license React
 * react-dom-server-legacy.browser.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var _h;
function bp() {
  if (_h) return uf;
  _h = 1;
  var o = nu, d = Uf;
  function f(i) {
    var s = "https://react.dev/errors/" + i;
    if (1 < arguments.length) {
      s += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var g = 2; g < arguments.length; g++)
        s += "&args[]=" + encodeURIComponent(arguments[g]);
    }
    return "Minified React error #" + i + "; visit " + s + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var b = Symbol.for("react.transitional.element"), T = Symbol.for("react.portal"), S = Symbol.for("react.fragment"), A = Symbol.for("react.strict_mode"), O = Symbol.for("react.profiler"), Y = Symbol.for("react.provider"), Z = Symbol.for("react.consumer"), M = Symbol.for("react.context"), J = Symbol.for("react.forward_ref"), re = Symbol.for("react.suspense"), V = Symbol.for("react.suspense_list"), _ = Symbol.for("react.memo"), N = Symbol.for("react.lazy"), Pe = Symbol.for("react.scope"), Me = Symbol.for("react.activity"), je = Symbol.for("react.legacy_hidden"), ke = Symbol.for("react.memo_cache_sentinel"), ge = Symbol.for("react.view_transition"), $ = Symbol.iterator, Xe = Array.isArray;
  function vn(i, s) {
    var g = i.length & 3, p = i.length - g, R = s;
    for (s = 0; s < p; ) {
      var P = i.charCodeAt(s) & 255 | (i.charCodeAt(++s) & 255) << 8 | (i.charCodeAt(++s) & 255) << 16 | (i.charCodeAt(++s) & 255) << 24;
      ++s, P = 3432918353 * (P & 65535) + ((3432918353 * (P >>> 16) & 65535) << 16) & 4294967295, P = P << 15 | P >>> 17, P = 461845907 * (P & 65535) + ((461845907 * (P >>> 16) & 65535) << 16) & 4294967295, R ^= P, R = R << 13 | R >>> 19, R = 5 * (R & 65535) + ((5 * (R >>> 16) & 65535) << 16) & 4294967295, R = (R & 65535) + 27492 + (((R >>> 16) + 58964 & 65535) << 16);
    }
    switch (P = 0, g) {
      case 3:
        P ^= (i.charCodeAt(s + 2) & 255) << 16;
      case 2:
        P ^= (i.charCodeAt(s + 1) & 255) << 8;
      case 1:
        P ^= i.charCodeAt(s) & 255, P = 3432918353 * (P & 65535) + ((3432918353 * (P >>> 16) & 65535) << 16) & 4294967295, P = P << 15 | P >>> 17, R ^= 461845907 * (P & 65535) + ((461845907 * (P >>> 16) & 65535) << 16) & 4294967295;
    }
    return R ^= i.length, R ^= R >>> 16, R = 2246822507 * (R & 65535) + ((2246822507 * (R >>> 16) & 65535) << 16) & 4294967295, R ^= R >>> 13, R = 3266489909 * (R & 65535) + ((3266489909 * (R >>> 16) & 65535) << 16) & 4294967295, (R ^ R >>> 16) >>> 0;
  }
  var un = Object.assign, Ke = Object.prototype.hasOwnProperty, I = RegExp(
    "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
  ), Oe = {}, Be = {};
  function ye(i) {
    return Ke.call(Be, i) ? !0 : Ke.call(Oe, i) ? !1 : I.test(i) ? Be[i] = !0 : (Oe[i] = !0, !1);
  }
  var Le = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  ), dn = /* @__PURE__ */ new Map([
    ["acceptCharset", "accept-charset"],
    ["htmlFor", "for"],
    ["httpEquiv", "http-equiv"],
    ["crossOrigin", "crossorigin"],
    ["accentHeight", "accent-height"],
    ["alignmentBaseline", "alignment-baseline"],
    ["arabicForm", "arabic-form"],
    ["baselineShift", "baseline-shift"],
    ["capHeight", "cap-height"],
    ["clipPath", "clip-path"],
    ["clipRule", "clip-rule"],
    ["colorInterpolation", "color-interpolation"],
    ["colorInterpolationFilters", "color-interpolation-filters"],
    ["colorProfile", "color-profile"],
    ["colorRendering", "color-rendering"],
    ["dominantBaseline", "dominant-baseline"],
    ["enableBackground", "enable-background"],
    ["fillOpacity", "fill-opacity"],
    ["fillRule", "fill-rule"],
    ["floodColor", "flood-color"],
    ["floodOpacity", "flood-opacity"],
    ["fontFamily", "font-family"],
    ["fontSize", "font-size"],
    ["fontSizeAdjust", "font-size-adjust"],
    ["fontStretch", "font-stretch"],
    ["fontStyle", "font-style"],
    ["fontVariant", "font-variant"],
    ["fontWeight", "font-weight"],
    ["glyphName", "glyph-name"],
    ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
    ["glyphOrientationVertical", "glyph-orientation-vertical"],
    ["horizAdvX", "horiz-adv-x"],
    ["horizOriginX", "horiz-origin-x"],
    ["imageRendering", "image-rendering"],
    ["letterSpacing", "letter-spacing"],
    ["lightingColor", "lighting-color"],
    ["markerEnd", "marker-end"],
    ["markerMid", "marker-mid"],
    ["markerStart", "marker-start"],
    ["overlinePosition", "overline-position"],
    ["overlineThickness", "overline-thickness"],
    ["paintOrder", "paint-order"],
    ["panose-1", "panose-1"],
    ["pointerEvents", "pointer-events"],
    ["renderingIntent", "rendering-intent"],
    ["shapeRendering", "shape-rendering"],
    ["stopColor", "stop-color"],
    ["stopOpacity", "stop-opacity"],
    ["strikethroughPosition", "strikethrough-position"],
    ["strikethroughThickness", "strikethrough-thickness"],
    ["strokeDasharray", "stroke-dasharray"],
    ["strokeDashoffset", "stroke-dashoffset"],
    ["strokeLinecap", "stroke-linecap"],
    ["strokeLinejoin", "stroke-linejoin"],
    ["strokeMiterlimit", "stroke-miterlimit"],
    ["strokeOpacity", "stroke-opacity"],
    ["strokeWidth", "stroke-width"],
    ["textAnchor", "text-anchor"],
    ["textDecoration", "text-decoration"],
    ["textRendering", "text-rendering"],
    ["transformOrigin", "transform-origin"],
    ["underlinePosition", "underline-position"],
    ["underlineThickness", "underline-thickness"],
    ["unicodeBidi", "unicode-bidi"],
    ["unicodeRange", "unicode-range"],
    ["unitsPerEm", "units-per-em"],
    ["vAlphabetic", "v-alphabetic"],
    ["vHanging", "v-hanging"],
    ["vIdeographic", "v-ideographic"],
    ["vMathematical", "v-mathematical"],
    ["vectorEffect", "vector-effect"],
    ["vertAdvY", "vert-adv-y"],
    ["vertOriginX", "vert-origin-x"],
    ["vertOriginY", "vert-origin-y"],
    ["wordSpacing", "word-spacing"],
    ["writingMode", "writing-mode"],
    ["xmlnsXlink", "xmlns:xlink"],
    ["xHeight", "x-height"]
  ]), te = /["'&<>]/;
  function Ce(i) {
    if (typeof i == "boolean" || typeof i == "number" || typeof i == "bigint")
      return "" + i;
    i = "" + i;
    var s = te.exec(i);
    if (s) {
      var g = "", p, R = 0;
      for (p = s.index; p < i.length; p++) {
        switch (i.charCodeAt(p)) {
          case 34:
            s = "&quot;";
            break;
          case 38:
            s = "&amp;";
            break;
          case 39:
            s = "&#x27;";
            break;
          case 60:
            s = "&lt;";
            break;
          case 62:
            s = "&gt;";
            break;
          default:
            continue;
        }
        R !== p && (g += i.slice(R, p)), R = p + 1, g += s;
      }
      i = R !== p ? g + i.slice(R, p) : g;
    }
    return i;
  }
  var Xn = /([A-Z])/g, ze = /^ms-/, q = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function Q(i) {
    return q.test("" + i) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : i;
  }
  var on = o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, Qe = d.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, Re = {
    pending: !1,
    data: null,
    method: null,
    action: null
  }, me = Qe.d;
  Qe.d = {
    f: me.f,
    r: me.r,
    D: jo,
    C: au,
    L: Hi,
    m: iu,
    X: ar,
    S: $o,
    M: nc
  };
  var _e = [], $e = /(<\/|<)(s)(cript)/gi;
  function fn(i, s, g, p) {
    return "" + s + (g === "s" ? "\\u0073" : "\\u0053") + p;
  }
  function Tn(i, s, g, p, R) {
    return {
      idPrefix: i === void 0 ? "" : i,
      nextFormID: 0,
      streamingFormat: 0,
      bootstrapScriptContent: g,
      bootstrapScripts: p,
      bootstrapModules: R,
      instructions: 0,
      hasBody: !1,
      hasHtml: !1,
      unknownResources: {},
      dnsResources: {},
      connectResources: { default: {}, anonymous: {}, credentials: {} },
      imageResources: {},
      styleResources: {},
      scriptResources: {},
      moduleUnknownResources: {},
      moduleScriptResources: {}
    };
  }
  function Ne() {
    return {
      htmlChunks: null,
      headChunks: null,
      bodyChunks: null,
      contribution: 0
    };
  }
  function He(i, s, g) {
    return {
      insertionMode: i,
      selectedValue: s,
      tagScope: g
    };
  }
  function de(i, s, g) {
    switch (s) {
      case "noscript":
        return He(2, null, i.tagScope | 1);
      case "select":
        return He(
          2,
          g.value != null ? g.value : g.defaultValue,
          i.tagScope
        );
      case "svg":
        return He(4, null, i.tagScope);
      case "picture":
        return He(2, null, i.tagScope | 2);
      case "math":
        return He(5, null, i.tagScope);
      case "foreignObject":
        return He(2, null, i.tagScope);
      case "table":
        return He(6, null, i.tagScope);
      case "thead":
      case "tbody":
      case "tfoot":
        return He(7, null, i.tagScope);
      case "colgroup":
        return He(9, null, i.tagScope);
      case "tr":
        return He(8, null, i.tagScope);
      case "head":
        if (2 > i.insertionMode)
          return He(3, null, i.tagScope);
        break;
      case "html":
        if (i.insertionMode === 0)
          return He(1, null, i.tagScope);
    }
    return 6 <= i.insertionMode || 2 > i.insertionMode ? He(2, null, i.tagScope) : i;
  }
  var yt = /* @__PURE__ */ new Map();
  function to(i, s) {
    if (typeof s != "object") throw Error(f(62));
    var g = !0, p;
    for (p in s)
      if (Ke.call(s, p)) {
        var R = s[p];
        if (R != null && typeof R != "boolean" && R !== "") {
          if (p.indexOf("--") === 0) {
            var P = Ce(p);
            R = Ce(("" + R).trim());
          } else
            P = yt.get(p), P === void 0 && (P = Ce(
              p.replace(Xn, "-$1").toLowerCase().replace(ze, "-ms-")
            ), yt.set(p, P)), R = typeof R == "number" ? R === 0 || Le.has(p) ? "" + R : R + "px" : Ce(("" + R).trim());
          g ? (g = !1, i.push(' style="', P, ":", R)) : i.push(";", P, ":", R);
        }
      }
    g || i.push('"');
  }
  function tt(i, s, g) {
    g && typeof g != "function" && typeof g != "symbol" && i.push(" ", s, '=""');
  }
  function qn(i, s, g) {
    typeof g != "function" && typeof g != "symbol" && typeof g != "boolean" && i.push(" ", s, '="', Ce(g), '"');
  }
  var Zt = Ce(
    "javascript:throw new Error('React form unexpectedly submitted.')"
  );
  function _o(i, s) {
    this.push('<input type="hidden"'), Bi(i), qn(this, "name", s), qn(this, "value", i), this.push("/>");
  }
  function Bi(i) {
    if (typeof i != "string") throw Error(f(480));
  }
  function Vt(i, s) {
    if (typeof s.$$FORM_ACTION == "function") {
      var g = i.nextFormID++;
      i = i.idPrefix + g;
      try {
        var p = s.$$FORM_ACTION(i);
        if (p) {
          var R = p.data;
          R != null && R.forEach(Bi);
        }
        return p;
      } catch (P) {
        if (typeof P == "object" && P !== null && typeof P.then == "function")
          throw P;
      }
    }
    return null;
  }
  function ut(i, s, g, p, R, P, B, oe) {
    var ee = null;
    if (typeof p == "function") {
      var ie = Vt(s, p);
      ie !== null ? (oe = ie.name, p = ie.action || "", R = ie.encType, P = ie.method, B = ie.target, ee = ie.data) : (i.push(" ", "formAction", '="', Zt, '"'), B = P = R = p = oe = null, ro(s, g));
    }
    return oe != null && xe(i, "name", oe), p != null && xe(i, "formAction", p), R != null && xe(i, "formEncType", R), P != null && xe(i, "formMethod", P), B != null && xe(i, "formTarget", B), ee;
  }
  function xe(i, s, g) {
    switch (s) {
      case "className":
        qn(i, "class", g);
        break;
      case "tabIndex":
        qn(i, "tabindex", g);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        qn(i, s, g);
        break;
      case "style":
        to(i, g);
        break;
      case "src":
      case "href":
        if (g === "") break;
      case "action":
      case "formAction":
        if (g == null || typeof g == "function" || typeof g == "symbol" || typeof g == "boolean")
          break;
        g = Q("" + g), i.push(" ", s, '="', Ce(g), '"');
        break;
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "ref":
        break;
      case "autoFocus":
      case "multiple":
      case "muted":
        tt(i, s.toLowerCase(), g);
        break;
      case "xlinkHref":
        if (typeof g == "function" || typeof g == "symbol" || typeof g == "boolean")
          break;
        g = Q("" + g), i.push(" ", "xlink:href", '="', Ce(g), '"');
        break;
      case "contentEditable":
      case "spellCheck":
      case "draggable":
      case "value":
      case "autoReverse":
      case "externalResourcesRequired":
      case "focusable":
      case "preserveAlpha":
        typeof g != "function" && typeof g != "symbol" && i.push(" ", s, '="', Ce(g), '"');
        break;
      case "inert":
      case "allowFullScreen":
      case "async":
      case "autoPlay":
      case "controls":
      case "default":
      case "defer":
      case "disabled":
      case "disablePictureInPicture":
      case "disableRemotePlayback":
      case "formNoValidate":
      case "hidden":
      case "loop":
      case "noModule":
      case "noValidate":
      case "open":
      case "playsInline":
      case "readOnly":
      case "required":
      case "reversed":
      case "scoped":
      case "seamless":
      case "itemScope":
        g && typeof g != "function" && typeof g != "symbol" && i.push(" ", s, '=""');
        break;
      case "capture":
      case "download":
        g === !0 ? i.push(" ", s, '=""') : g !== !1 && typeof g != "function" && typeof g != "symbol" && i.push(" ", s, '="', Ce(g), '"');
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        typeof g != "function" && typeof g != "symbol" && !isNaN(g) && 1 <= g && i.push(" ", s, '="', Ce(g), '"');
        break;
      case "rowSpan":
      case "start":
        typeof g == "function" || typeof g == "symbol" || isNaN(g) || i.push(" ", s, '="', Ce(g), '"');
        break;
      case "xlinkActuate":
        qn(i, "xlink:actuate", g);
        break;
      case "xlinkArcrole":
        qn(i, "xlink:arcrole", g);
        break;
      case "xlinkRole":
        qn(i, "xlink:role", g);
        break;
      case "xlinkShow":
        qn(i, "xlink:show", g);
        break;
      case "xlinkTitle":
        qn(i, "xlink:title", g);
        break;
      case "xlinkType":
        qn(i, "xlink:type", g);
        break;
      case "xmlBase":
        qn(i, "xml:base", g);
        break;
      case "xmlLang":
        qn(i, "xml:lang", g);
        break;
      case "xmlSpace":
        qn(i, "xml:space", g);
        break;
      default:
        if ((!(2 < s.length) || s[0] !== "o" && s[0] !== "O" || s[1] !== "n" && s[1] !== "N") && (s = dn.get(s) || s, ye(s))) {
          switch (typeof g) {
            case "function":
            case "symbol":
              return;
            case "boolean":
              var p = s.toLowerCase().slice(0, 5);
              if (p !== "data-" && p !== "aria-") return;
          }
          i.push(" ", s, '="', Ce(g), '"');
        }
    }
  }
  function Wr(i, s, g) {
    if (s != null) {
      if (g != null) throw Error(f(60));
      if (typeof s != "object" || !("__html" in s))
        throw Error(f(61));
      s = s.__html, s != null && i.push("" + s);
    }
  }
  function qa(i) {
    var s = "";
    return o.Children.forEach(i, function(g) {
      g != null && (s += g);
    }), s;
  }
  function ro(i, s) {
    (i.instructions & 16) === 0 && (i.instructions |= 16, s.bootstrapChunks.unshift(
      s.startInlineScript,
      `addEventListener("submit",function(a){if(!a.defaultPrevented){var c=a.target,d=a.submitter,e=c.action,b=d;if(d){var f=d.getAttribute("formAction");null!=f&&(e=f,b=null)}"javascript:throw new Error('React form unexpectedly submitted.')"===e&&(a.preventDefault(),b?(a=document.createElement("input"),a.name=b.name,a.value=b.value,b.parentNode.insertBefore(a,b),b=new FormData(c),a.parentNode.removeChild(a)):b=new FormData(c),a=c.ownerDocument||c,(a.$$reactFormReplay=a.$$reactFormReplay||[]).push(c,d,b))}});`,
      "<\/script>"
    ));
  }
  function Qt(i, s) {
    i.push(Rn("link"));
    for (var g in s)
      if (Ke.call(s, g)) {
        var p = s[g];
        if (p != null)
          switch (g) {
            case "children":
            case "dangerouslySetInnerHTML":
              throw Error(f(399, "link"));
            default:
              xe(i, g, p);
          }
      }
    return i.push("/>"), null;
  }
  var Ks = /(<\/|<)(s)(tyle)/gi;
  function qs(i, s, g, p) {
    return "" + s + (g === "s" ? "\\73 " : "\\53 ") + p;
  }
  function Ni(i, s, g) {
    i.push(Rn(g));
    for (var p in s)
      if (Ke.call(s, p)) {
        var R = s[p];
        if (R != null)
          switch (p) {
            case "children":
            case "dangerouslySetInnerHTML":
              throw Error(f(399, g));
            default:
              xe(i, p, R);
          }
      }
    return i.push("/>"), null;
  }
  function js(i, s) {
    i.push(Rn("title"));
    var g = null, p = null, R;
    for (R in s)
      if (Ke.call(s, R)) {
        var P = s[R];
        if (P != null)
          switch (R) {
            case "children":
              g = P;
              break;
            case "dangerouslySetInnerHTML":
              p = P;
              break;
            default:
              xe(i, R, P);
          }
      }
    return i.push(">"), s = Array.isArray(g) ? 2 > g.length ? g[0] : null : g, typeof s != "function" && typeof s != "symbol" && s !== null && s !== void 0 && i.push(Ce("" + s)), Wr(i, p, g), i.push($a("title")), null;
  }
  function ma(i, s) {
    i.push(Rn("script"));
    var g = null, p = null, R;
    for (R in s)
      if (Ke.call(s, R)) {
        var P = s[R];
        if (P != null)
          switch (R) {
            case "children":
              g = P;
              break;
            case "dangerouslySetInnerHTML":
              p = P;
              break;
            default:
              xe(i, R, P);
          }
      }
    return i.push(">"), Wr(i, p, g), typeof g == "string" && i.push(("" + g).replace($e, fn)), i.push($a("script")), null;
  }
  function ja(i, s, g) {
    i.push(Rn(g));
    var p = g = null, R;
    for (R in s)
      if (Ke.call(s, R)) {
        var P = s[R];
        if (P != null)
          switch (R) {
            case "children":
              g = P;
              break;
            case "dangerouslySetInnerHTML":
              p = P;
              break;
            default:
              xe(i, R, P);
          }
      }
    return i.push(">"), Wr(i, p, g), g;
  }
  function ss(i, s, g) {
    i.push(Rn(g));
    var p = g = null, R;
    for (R in s)
      if (Ke.call(s, R)) {
        var P = s[R];
        if (P != null)
          switch (R) {
            case "children":
              g = P;
              break;
            case "dangerouslySetInnerHTML":
              p = P;
              break;
            default:
              xe(i, R, P);
          }
      }
    return i.push(">"), Wr(i, p, g), typeof g == "string" ? (i.push(Ce(g)), null) : g;
  }
  var Rl = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/, Li = /* @__PURE__ */ new Map();
  function Rn(i) {
    var s = Li.get(i);
    if (s === void 0) {
      if (!Rl.test(i))
        throw Error(f(65, i));
      s = "<" + i, Li.set(i, s);
    }
    return s;
  }
  function Ur(i, s, g, p, R, P, B, oe, ee, ie) {
    switch (s) {
      case "div":
      case "span":
      case "svg":
      case "path":
        break;
      case "a":
        i.push(Rn("a"));
        var De = null, pe = null, Ie;
        for (Ie in g)
          if (Ke.call(g, Ie)) {
            var Ue = g[Ie];
            if (Ue != null)
              switch (Ie) {
                case "children":
                  De = Ue;
                  break;
                case "dangerouslySetInnerHTML":
                  pe = Ue;
                  break;
                case "href":
                  Ue === "" ? qn(i, "href", "") : xe(i, Ie, Ue);
                  break;
                default:
                  xe(i, Ie, Ue);
              }
          }
        if (i.push(">"), Wr(i, pe, De), typeof De == "string") {
          i.push(Ce(De));
          var an = null;
        } else an = De;
        return an;
      case "g":
      case "p":
      case "li":
        break;
      case "select":
        i.push(Rn("select"));
        var Ge = null, En = null, On;
        for (On in g)
          if (Ke.call(g, On)) {
            var kn = g[On];
            if (kn != null)
              switch (On) {
                case "children":
                  Ge = kn;
                  break;
                case "dangerouslySetInnerHTML":
                  En = kn;
                  break;
                case "defaultValue":
                case "value":
                  break;
                default:
                  xe(
                    i,
                    On,
                    kn
                  );
              }
          }
        return i.push(">"), Wr(i, En, Ge), Ge;
      case "option":
        var Yn = oe.selectedValue;
        i.push(Rn("option"));
        var Ze = null, yn = null, ln = null, zt = null, fr;
        for (fr in g)
          if (Ke.call(g, fr)) {
            var Je = g[fr];
            if (Je != null)
              switch (fr) {
                case "children":
                  Ze = Je;
                  break;
                case "selected":
                  ln = Je;
                  break;
                case "dangerouslySetInnerHTML":
                  zt = Je;
                  break;
                case "value":
                  yn = Je;
                default:
                  xe(
                    i,
                    fr,
                    Je
                  );
              }
          }
        if (Yn != null) {
          var Dn = yn !== null ? "" + yn : qa(Ze);
          if (Xe(Yn)) {
            for (var pt = 0; pt < Yn.length; pt++)
              if ("" + Yn[pt] === Dn) {
                i.push(' selected=""');
                break;
              }
          } else
            "" + Yn === Dn && i.push(' selected=""');
        } else ln && i.push(' selected=""');
        return i.push(">"), Wr(i, zt, Ze), Ze;
      case "textarea":
        i.push(Rn("textarea"));
        var Ot = null, Ho = null, Ln = null, wt;
        for (wt in g)
          if (Ke.call(g, wt)) {
            var Rr = g[wt];
            if (Rr != null)
              switch (wt) {
                case "children":
                  Ln = Rr;
                  break;
                case "value":
                  Ot = Rr;
                  break;
                case "defaultValue":
                  Ho = Rr;
                  break;
                case "dangerouslySetInnerHTML":
                  throw Error(f(91));
                default:
                  xe(
                    i,
                    wt,
                    Rr
                  );
              }
          }
        if (Ot === null && Ho !== null && (Ot = Ho), i.push(">"), Ln != null) {
          if (Ot != null) throw Error(f(92));
          if (Xe(Ln)) {
            if (1 < Ln.length)
              throw Error(f(93));
            Ot = "" + Ln[0];
          }
          Ot = "" + Ln;
        }
        return typeof Ot == "string" && Ot[0] === `
` && i.push(`
`), Ot !== null && i.push(Ce("" + Ot)), null;
      case "input":
        i.push(Rn("input"));
        var dr = null, Yo = null, hr = null, xo = null, Vr = null, Tt = null, uo = null, Qr = null, Go = null, Ro;
        for (Ro in g)
          if (Ke.call(g, Ro)) {
            var fo = g[Ro];
            if (fo != null)
              switch (Ro) {
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(f(399, "input"));
                case "name":
                  dr = fo;
                  break;
                case "formAction":
                  Yo = fo;
                  break;
                case "formEncType":
                  hr = fo;
                  break;
                case "formMethod":
                  xo = fo;
                  break;
                case "formTarget":
                  Vr = fo;
                  break;
                case "defaultChecked":
                  Go = fo;
                  break;
                case "defaultValue":
                  uo = fo;
                  break;
                case "checked":
                  Qr = fo;
                  break;
                case "value":
                  Tt = fo;
                  break;
                default:
                  xe(
                    i,
                    Ro,
                    fo
                  );
              }
          }
        var uc = ut(
          i,
          p,
          R,
          Yo,
          hr,
          xo,
          Vr,
          dr
        );
        return Qr !== null ? tt(i, "checked", Qr) : Go !== null && tt(i, "checked", Go), Tt !== null ? xe(i, "value", Tt) : uo !== null && xe(i, "value", uo), i.push("/>"), uc != null && uc.forEach(_o, i), null;
      case "button":
        i.push(Rn("button"));
        var Ba = null, Xo = null, Rs = null, Nc = null, $i = null, Lc = null, Wt = null, Sr;
        for (Sr in g)
          if (Ke.call(g, Sr)) {
            var ot = g[Sr];
            if (ot != null)
              switch (Sr) {
                case "children":
                  Ba = ot;
                  break;
                case "dangerouslySetInnerHTML":
                  Xo = ot;
                  break;
                case "name":
                  Rs = ot;
                  break;
                case "formAction":
                  Nc = ot;
                  break;
                case "formEncType":
                  $i = ot;
                  break;
                case "formMethod":
                  Lc = ot;
                  break;
                case "formTarget":
                  Wt = ot;
                  break;
                default:
                  xe(
                    i,
                    Sr,
                    ot
                  );
              }
          }
        var Ss = ut(
          i,
          p,
          R,
          Nc,
          $i,
          Lc,
          Wt,
          Rs
        );
        if (i.push(">"), Ss != null && Ss.forEach(_o, i), Wr(i, Xo, Ba), typeof Ba == "string") {
          i.push(Ce(Ba));
          var Zo = null;
        } else Zo = Ba;
        return Zo;
      case "form":
        i.push(Rn("form"));
        var pi = null, at = null, So = null, Nl = null, Vo = null, Ll = null, el;
        for (el in g)
          if (Ke.call(g, el)) {
            var Na = g[el];
            if (Na != null)
              switch (el) {
                case "children":
                  pi = Na;
                  break;
                case "dangerouslySetInnerHTML":
                  at = Na;
                  break;
                case "action":
                  So = Na;
                  break;
                case "encType":
                  Nl = Na;
                  break;
                case "method":
                  Vo = Na;
                  break;
                case "target":
                  Ll = Na;
                  break;
                default:
                  xe(
                    i,
                    el,
                    Na
                  );
              }
          }
        var At = null, ks = null;
        if (typeof So == "function") {
          var Jr = Vt(
            p,
            So
          );
          Jr !== null ? (So = Jr.action || "", Nl = Jr.encType, Vo = Jr.method, Ll = Jr.target, At = Jr.data, ks = Jr.name) : (i.push(
            " ",
            "action",
            '="',
            Zt,
            '"'
          ), Ll = Vo = Nl = So = null, ro(p, R));
        }
        if (So != null && xe(i, "action", So), Nl != null && xe(i, "encType", Nl), Vo != null && xe(i, "method", Vo), Ll != null && xe(i, "target", Ll), i.push(">"), ks !== null && (i.push('<input type="hidden"'), qn(i, "name", ks), i.push("/>"), At != null && At.forEach(_o, i)), Wr(i, at, pi), typeof pi == "string") {
          i.push(Ce(pi));
          var nl = null;
        } else nl = pi;
        return nl;
      case "menuitem":
        i.push(Rn("menuitem"));
        for (var wi in g)
          if (Ke.call(g, wi)) {
            var ua = g[wi];
            if (ua != null)
              switch (wi) {
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(f(400));
                default:
                  xe(
                    i,
                    wi,
                    ua
                  );
              }
          }
        return i.push(">"), null;
      case "object":
        i.push(Rn("object"));
        var ko = null, Ti = null, gr;
        for (gr in g)
          if (Ke.call(g, gr)) {
            var La = g[gr];
            if (La != null)
              switch (gr) {
                case "children":
                  ko = La;
                  break;
                case "dangerouslySetInnerHTML":
                  Ti = La;
                  break;
                case "data":
                  var zc = Q("" + La);
                  if (zc === "") break;
                  i.push(
                    " ",
                    "data",
                    '="',
                    Ce(zc),
                    '"'
                  );
                  break;
                default:
                  xe(
                    i,
                    gr,
                    La
                  );
              }
          }
        if (i.push(">"), Wr(i, Ti, ko), typeof ko == "string") {
          i.push(Ce(ko));
          var ms = null;
        } else ms = ko;
        return ms;
      case "title":
        if (oe.insertionMode === 4 || oe.tagScope & 1 || g.itemProp != null)
          var zl = js(
            i,
            g
          );
        else
          ie ? zl = null : (js(R.hoistableChunks, g), zl = void 0);
        return zl;
      case "link":
        var fc = g.rel, Ut = g.href, tl = g.precedence;
        if (oe.insertionMode === 4 || oe.tagScope & 1 || g.itemProp != null || typeof fc != "string" || typeof Ut != "string" || Ut === "") {
          Qt(i, g);
          var rl = null;
        } else if (g.rel === "stylesheet")
          if (typeof tl != "string" || g.disabled != null || g.onLoad || g.onError)
            rl = Qt(
              i,
              g
            );
          else {
            var Ci = R.styles.get(tl), Ps = p.styleResources.hasOwnProperty(Ut) ? p.styleResources[Ut] : void 0;
            if (Ps !== null) {
              p.styleResources[Ut] = null, Ci || (Ci = {
                precedence: Ce(tl),
                rules: [],
                hrefs: [],
                sheets: /* @__PURE__ */ new Map()
              }, R.styles.set(tl, Ci));
              var Fs = {
                state: 0,
                props: un({}, g, {
                  "data-precedence": g.precedence,
                  precedence: null
                })
              };
              if (Ps) {
                Ps.length === 2 && No(Fs.props, Ps);
                var ho = R.preloads.stylesheets.get(Ut);
                ho && 0 < ho.length ? ho.length = 0 : Fs.state = 1;
              }
              Ci.sheets.set(Ut, Fs), B && B.stylesheets.add(Fs);
            } else if (Ci) {
              var cu = Ci.sheets.get(Ut);
              cu && B && B.stylesheets.add(cu);
            }
            ee && i.push("<!-- -->"), rl = null;
          }
        else
          g.onLoad || g.onError ? rl = Qt(
            i,
            g
          ) : (ee && i.push("<!-- -->"), rl = ie ? null : Qt(R.hoistableChunks, g));
        return rl;
      case "script":
        var fa = g.async;
        if (typeof g.src != "string" || !g.src || !fa || typeof fa == "function" || typeof fa == "symbol" || g.onLoad || g.onError || oe.insertionMode === 4 || oe.tagScope & 1 || g.itemProp != null)
          var Wc = ma(
            i,
            g
          );
        else {
          var za = g.src;
          if (g.type === "module")
            var Wl = p.moduleScriptResources, Os = R.preloads.moduleScripts;
          else
            Wl = p.scriptResources, Os = R.preloads.scripts;
          var Ei = Wl.hasOwnProperty(za) ? Wl[za] : void 0;
          if (Ei !== null) {
            Wl[za] = null;
            var As = g;
            if (Ei) {
              Ei.length === 2 && (As = un({}, g), No(As, Ei));
              var dc = Os.get(za);
              dc && (dc.length = 0);
            }
            var hc = [];
            R.scripts.add(hc), ma(hc, As);
          }
          ee && i.push("<!-- -->"), Wc = null;
        }
        return Wc;
      case "style":
        var Ms = g.precedence, Qo = g.href;
        if (oe.insertionMode === 4 || oe.tagScope & 1 || g.itemProp != null || typeof Ms != "string" || typeof Qo != "string" || Qo === "") {
          i.push(Rn("style"));
          var Wa = null, Ul = null, ol;
          for (ol in g)
            if (Ke.call(g, ol)) {
              var Is = g[ol];
              if (Is != null)
                switch (ol) {
                  case "children":
                    Wa = Is;
                    break;
                  case "dangerouslySetInnerHTML":
                    Ul = Is;
                    break;
                  default:
                    xe(
                      i,
                      ol,
                      Is
                    );
                }
            }
          i.push(">");
          var Hl = Array.isArray(Wa) ? 2 > Wa.length ? Wa[0] : null : Wa;
          typeof Hl != "function" && typeof Hl != "symbol" && Hl !== null && Hl !== void 0 && i.push(("" + Hl).replace(Ks, qs)), Wr(i, Ul, Wa), i.push($a("style"));
          var xi = null;
        } else {
          var Ri = R.styles.get(Ms);
          if ((p.styleResources.hasOwnProperty(Qo) ? p.styleResources[Qo] : void 0) !== null) {
            p.styleResources[Qo] = null, Ri ? Ri.hrefs.push(
              Ce(Qo)
            ) : (Ri = {
              precedence: Ce(Ms),
              rules: [],
              hrefs: [Ce(Qo)],
              sheets: /* @__PURE__ */ new Map()
            }, R.styles.set(Ms, Ri));
            var Si = Ri.rules, al = null, il = null, Ds;
            for (Ds in g)
              if (Ke.call(g, Ds)) {
                var a = g[Ds];
                if (a != null)
                  switch (Ds) {
                    case "children":
                      al = a;
                      break;
                    case "dangerouslySetInnerHTML":
                      il = a;
                  }
              }
            var l = Array.isArray(al) ? 2 > al.length ? al[0] : null : al;
            typeof l != "function" && typeof l != "symbol" && l !== null && l !== void 0 && Si.push(
              ("" + l).replace(Ks, qs)
            ), Wr(Si, il, al);
          }
          Ri && B && B.styles.add(Ri), ee && i.push("<!-- -->"), xi = void 0;
        }
        return xi;
      case "meta":
        if (oe.insertionMode === 4 || oe.tagScope & 1 || g.itemProp != null)
          var h = Ni(
            i,
            g,
            "meta"
          );
        else
          ee && i.push("<!-- -->"), h = ie ? null : typeof g.charSet == "string" ? Ni(R.charsetChunks, g, "meta") : g.name === "viewport" ? Ni(R.viewportChunks, g, "meta") : Ni(R.hoistableChunks, g, "meta");
        return h;
      case "listing":
      case "pre":
        i.push(Rn(s));
        var w = null, x = null, F;
        for (F in g)
          if (Ke.call(g, F)) {
            var L = g[F];
            if (L != null)
              switch (F) {
                case "children":
                  w = L;
                  break;
                case "dangerouslySetInnerHTML":
                  x = L;
                  break;
                default:
                  xe(
                    i,
                    F,
                    L
                  );
              }
          }
        if (i.push(">"), x != null) {
          if (w != null) throw Error(f(60));
          if (typeof x != "object" || !("__html" in x))
            throw Error(f(61));
          var ne = x.__html;
          ne != null && (typeof ne == "string" && 0 < ne.length && ne[0] === `
` ? i.push(`
`, ne) : i.push("" + ne));
        }
        return typeof w == "string" && w[0] === `
` && i.push(`
`), w;
      case "img":
        var U = g.src, j = g.srcSet;
        if (!(g.loading === "lazy" || !U && !j || typeof U != "string" && U != null || typeof j != "string" && j != null) && g.fetchPriority !== "low" && !(oe.tagScope & 3) && (typeof U != "string" || U[4] !== ":" || U[0] !== "d" && U[0] !== "D" || U[1] !== "a" && U[1] !== "A" || U[2] !== "t" && U[2] !== "T" || U[3] !== "a" && U[3] !== "A") && (typeof j != "string" || j[4] !== ":" || j[0] !== "d" && j[0] !== "D" || j[1] !== "a" && j[1] !== "A" || j[2] !== "t" && j[2] !== "T" || j[3] !== "a" && j[3] !== "A")) {
          var we = typeof g.sizes == "string" ? g.sizes : void 0, ce = j ? j + `
` + (we || "") : U, We = R.preloads.images, Ve = We.get(ce);
          if (Ve)
            (g.fetchPriority === "high" || 10 > R.highImagePreloads.size) && (We.delete(ce), R.highImagePreloads.add(Ve));
          else if (!p.imageResources.hasOwnProperty(ce)) {
            p.imageResources[ce] = _e;
            var en = g.crossOrigin, sn = typeof en == "string" ? en === "use-credentials" ? en : "" : void 0, zn = R.headers, Ct;
            zn && 0 < zn.remainingCapacity && typeof g.srcSet != "string" && (g.fetchPriority === "high" || 500 > zn.highImagePreloads.length) && (Ct = Yr(U, "image", {
              imageSrcSet: g.srcSet,
              imageSizes: g.sizes,
              crossOrigin: sn,
              integrity: g.integrity,
              nonce: g.nonce,
              type: g.type,
              fetchPriority: g.fetchPriority,
              referrerPolicy: g.refererPolicy
            }), 0 <= (zn.remainingCapacity -= Ct.length + 2)) ? (R.resets.image[ce] = _e, zn.highImagePreloads && (zn.highImagePreloads += ", "), zn.highImagePreloads += Ct) : (Ve = [], Qt(Ve, {
              rel: "preload",
              as: "image",
              href: j ? void 0 : U,
              imageSrcSet: j,
              imageSizes: we,
              crossOrigin: sn,
              integrity: g.integrity,
              type: g.type,
              fetchPriority: g.fetchPriority,
              referrerPolicy: g.referrerPolicy
            }), g.fetchPriority === "high" || 10 > R.highImagePreloads.size ? R.highImagePreloads.add(Ve) : (R.bulkPreloads.add(Ve), We.set(ce, Ve)));
          }
        }
        return Ni(i, g, "img");
      case "base":
      case "area":
      case "br":
      case "col":
      case "embed":
      case "hr":
      case "keygen":
      case "param":
      case "source":
      case "track":
      case "wbr":
        return Ni(i, g, s);
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        break;
      case "head":
        if (2 > oe.insertionMode) {
          var Sn = P || R.preamble;
          if (Sn.headChunks)
            throw Error(f(545, "`<head>`"));
          Sn.headChunks = [];
          var kr = ja(
            Sn.headChunks,
            g,
            "head"
          );
        } else
          kr = ss(
            i,
            g,
            "head"
          );
        return kr;
      case "body":
        if (2 > oe.insertionMode) {
          var Et = P || R.preamble;
          if (Et.bodyChunks)
            throw Error(f(545, "`<body>`"));
          Et.bodyChunks = [];
          var Kr = ja(
            Et.bodyChunks,
            g,
            "body"
          );
        } else
          Kr = ss(
            i,
            g,
            "body"
          );
        return Kr;
      case "html":
        if (oe.insertionMode === 0) {
          var br = P || R.preamble;
          if (br.htmlChunks)
            throw Error(f(545, "`<html>`"));
          br.htmlChunks = [""];
          var qt = ja(
            br.htmlChunks,
            g,
            "html"
          );
        } else
          qt = ss(
            i,
            g,
            "html"
          );
        return qt;
      default:
        if (s.indexOf("-") !== -1) {
          i.push(Rn(s));
          var Dr = null, Wn = null, Mt;
          for (Mt in g)
            if (Ke.call(g, Mt)) {
              var it = g[Mt];
              if (it != null) {
                var yr = Mt;
                switch (Mt) {
                  case "children":
                    Dr = it;
                    break;
                  case "dangerouslySetInnerHTML":
                    Wn = it;
                    break;
                  case "style":
                    to(i, it);
                    break;
                  case "suppressContentEditableWarning":
                  case "suppressHydrationWarning":
                  case "ref":
                    break;
                  case "className":
                    yr = "class";
                  default:
                    if (ye(Mt) && typeof it != "function" && typeof it != "symbol" && it !== !1) {
                      if (it === !0) it = "";
                      else if (typeof it == "object") continue;
                      i.push(
                        " ",
                        yr,
                        '="',
                        Ce(it),
                        '"'
                      );
                    }
                }
              }
            }
          return i.push(">"), Wr(i, Wn, Dr), Dr;
        }
    }
    return ss(i, g, s);
  }
  var cs = /* @__PURE__ */ new Map();
  function $a(i) {
    var s = cs.get(i);
    return s === void 0 && (s = "</" + i + ">", cs.set(i, s)), s;
  }
  function Bo(i, s) {
    i = i.preamble, i.htmlChunks === null && s.htmlChunks && (i.htmlChunks = s.htmlChunks, s.contribution |= 1), i.headChunks === null && s.headChunks && (i.headChunks = s.headChunks, s.contribution |= 4), i.bodyChunks === null && s.bodyChunks && (i.bodyChunks = s.bodyChunks, s.contribution |= 2);
  }
  function $s(i, s) {
    s = s.bootstrapChunks;
    for (var g = 0; g < s.length - 1; g++)
      i.push(s[g]);
    return g < s.length ? (g = s[g], s.length = 0, i.push(g)) : !0;
  }
  function Pc(i, s, g) {
    if (i.push('<!--$?--><template id="'), g === null) throw Error(f(395));
    return i.push(s.boundaryPrefix), s = g.toString(16), i.push(s), i.push('"></template>');
  }
  function ec(i, s) {
    s = s.contribution, s !== 0 && (i.push("<!--"), i.push("" + s), i.push("-->"));
  }
  function us(i, s, g, p) {
    switch (g.insertionMode) {
      case 0:
      case 1:
      case 3:
      case 2:
        return i.push('<div hidden id="'), i.push(s.segmentPrefix), s = p.toString(16), i.push(s), i.push('">');
      case 4:
        return i.push('<svg aria-hidden="true" style="display:none" id="'), i.push(s.segmentPrefix), s = p.toString(16), i.push(s), i.push('">');
      case 5:
        return i.push('<math aria-hidden="true" style="display:none" id="'), i.push(s.segmentPrefix), s = p.toString(16), i.push(s), i.push('">');
      case 6:
        return i.push('<table hidden id="'), i.push(s.segmentPrefix), s = p.toString(16), i.push(s), i.push('">');
      case 7:
        return i.push('<table hidden><tbody id="'), i.push(s.segmentPrefix), s = p.toString(16), i.push(s), i.push('">');
      case 8:
        return i.push('<table hidden><tr id="'), i.push(s.segmentPrefix), s = p.toString(16), i.push(s), i.push('">');
      case 9:
        return i.push('<table hidden><colgroup id="'), i.push(s.segmentPrefix), s = p.toString(16), i.push(s), i.push('">');
      default:
        throw Error(f(397));
    }
  }
  function Hn(i, s) {
    switch (s.insertionMode) {
      case 0:
      case 1:
      case 3:
      case 2:
        return i.push("</div>");
      case 4:
        return i.push("</svg>");
      case 5:
        return i.push("</math>");
      case 6:
        return i.push("</table>");
      case 7:
        return i.push("</tbody></table>");
      case 8:
        return i.push("</tr></table>");
      case 9:
        return i.push("</colgroup></table>");
      default:
        throw Error(f(397));
    }
  }
  var ei = /[<\u2028\u2029]/g;
  function Jt(i) {
    return JSON.stringify(i).replace(
      ei,
      function(s) {
        switch (s) {
          case "<":
            return "\\u003c";
          case "\u2028":
            return "\\u2028";
          case "\u2029":
            return "\\u2029";
          default:
            throw Error(
              "escapeJSStringsForInstructionScripts encountered a match it does not know how to replace. this means the match regex and the replacement characters are no longer in sync. This is a bug in React"
            );
        }
      }
    );
  }
  var oo = /[&><\u2028\u2029]/g;
  function Pt(i) {
    return JSON.stringify(i).replace(
      oo,
      function(s) {
        switch (s) {
          case "&":
            return "\\u0026";
          case ">":
            return "\\u003e";
          case "<":
            return "\\u003c";
          case "\u2028":
            return "\\u2028";
          case "\u2029":
            return "\\u2029";
          default:
            throw Error(
              "escapeJSObjectForInstructionScripts encountered a match it does not know how to replace. this means the match regex and the replacement characters are no longer in sync. This is a bug in React"
            );
        }
      }
    );
  }
  var zi = !1, ao = !0;
  function Bt(i) {
    var s = i.rules, g = i.hrefs, p = 0;
    if (g.length) {
      for (this.push('<style media="not all" data-precedence="'), this.push(i.precedence), this.push('" data-href="'); p < g.length - 1; p++)
        this.push(g[p]), this.push(" ");
      for (this.push(g[p]), this.push('">'), p = 0; p < s.length; p++) this.push(s[p]);
      ao = this.push("</style>"), zi = !0, s.length = 0, g.length = 0;
    }
  }
  function Qn(i) {
    return i.state !== 2 ? zi = !0 : !1;
  }
  function ni(i, s, g) {
    return zi = !1, ao = !0, s.styles.forEach(Bt, i), s.stylesheets.forEach(Qn), zi && (g.stylesToHoist = !0), ao;
  }
  function Hr(i) {
    for (var s = 0; s < i.length; s++) this.push(i[s]);
    i.length = 0;
  }
  var io = [];
  function Fc(i) {
    Qt(io, i.props);
    for (var s = 0; s < io.length; s++)
      this.push(io[s]);
    io.length = 0, i.state = 2;
  }
  function Sl(i) {
    var s = 0 < i.sheets.size;
    i.sheets.forEach(Fc, this), i.sheets.clear();
    var g = i.rules, p = i.hrefs;
    if (!s || p.length) {
      if (this.push('<style data-precedence="'), this.push(i.precedence), i = 0, p.length) {
        for (this.push('" data-href="'); i < p.length - 1; i++)
          this.push(p[i]), this.push(" ");
        this.push(p[i]);
      }
      for (this.push('">'), i = 0; i < g.length; i++)
        this.push(g[i]);
      this.push("</style>"), g.length = 0, p.length = 0;
    }
  }
  function Cn(i) {
    if (i.state === 0) {
      i.state = 1;
      var s = i.props;
      for (Qt(io, {
        rel: "preload",
        as: "style",
        href: i.props.href,
        crossOrigin: s.crossOrigin,
        fetchPriority: s.fetchPriority,
        integrity: s.integrity,
        media: s.media,
        hrefLang: s.hrefLang,
        referrerPolicy: s.referrerPolicy
      }), i = 0; i < io.length; i++)
        this.push(io[i]);
      io.length = 0;
    }
  }
  function Zn(i) {
    i.sheets.forEach(Cn, this), i.sheets.clear();
  }
  function Wi(i, s) {
    i.push("[");
    var g = "[";
    s.stylesheets.forEach(function(p) {
      if (p.state !== 2)
        if (p.state === 3)
          i.push(g), p = Pt(
            "" + p.props.href
          ), i.push(p), i.push("]"), g = ",[";
        else {
          i.push(g);
          var R = p.props["data-precedence"], P = p.props, B = Q("" + p.props.href);
          B = Pt(B), i.push(B), R = "" + R, i.push(","), R = Pt(R), i.push(R);
          for (var oe in P)
            if (Ke.call(P, oe) && (R = P[oe], R != null))
              switch (oe) {
                case "href":
                case "rel":
                case "precedence":
                case "data-precedence":
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(f(399, "link"));
                default:
                  or(
                    i,
                    oe,
                    R
                  );
              }
          i.push("]"), g = ",[", p.state = 3;
        }
    }), i.push("]");
  }
  function or(i, s, g) {
    var p = s.toLowerCase();
    switch (typeof g) {
      case "function":
      case "symbol":
        return;
    }
    switch (s) {
      case "innerHTML":
      case "dangerouslySetInnerHTML":
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "style":
      case "ref":
        return;
      case "className":
        p = "class", s = "" + g;
        break;
      case "hidden":
        if (g === !1) return;
        s = "";
        break;
      case "src":
      case "href":
        g = Q(g), s = "" + g;
        break;
      default:
        if (2 < s.length && (s[0] === "o" || s[0] === "O") && (s[1] === "n" || s[1] === "N") || !ye(s))
          return;
        s = "" + g;
    }
    i.push(","), p = Pt(p), i.push(p), i.push(","), p = Pt(s), i.push(p);
  }
  function Ui() {
    return { styles: /* @__PURE__ */ new Set(), stylesheets: /* @__PURE__ */ new Set() };
  }
  function jo(i) {
    var s = ur || null;
    if (s) {
      var g = s.resumableState, p = s.renderState;
      if (typeof i == "string" && i) {
        if (!g.dnsResources.hasOwnProperty(i)) {
          g.dnsResources[i] = null, g = p.headers;
          var R, P;
          (P = g && 0 < g.remainingCapacity) && (P = (R = "<" + ("" + i).replace(
            kl,
            ti
          ) + ">; rel=dns-prefetch", 0 <= (g.remainingCapacity -= R.length + 2))), P ? (p.resets.dns[i] = null, g.preconnects && (g.preconnects += ", "), g.preconnects += R) : (R = [], Qt(R, { href: i, rel: "dns-prefetch" }), p.preconnects.add(R));
        }
        Lt(s);
      }
    } else me.D(i);
  }
  function au(i, s) {
    var g = ur || null;
    if (g) {
      var p = g.resumableState, R = g.renderState;
      if (typeof i == "string" && i) {
        var P = s === "use-credentials" ? "credentials" : typeof s == "string" ? "anonymous" : "default";
        if (!p.connectResources[P].hasOwnProperty(i)) {
          p.connectResources[P][i] = null, p = R.headers;
          var B, oe;
          if (oe = p && 0 < p.remainingCapacity) {
            if (oe = "<" + ("" + i).replace(
              kl,
              ti
            ) + ">; rel=preconnect", typeof s == "string") {
              var ee = ("" + s).replace(
                ea,
                ri
              );
              oe += '; crossorigin="' + ee + '"';
            }
            oe = (B = oe, 0 <= (p.remainingCapacity -= B.length + 2));
          }
          oe ? (R.resets.connect[P][i] = null, p.preconnects && (p.preconnects += ", "), p.preconnects += B) : (P = [], Qt(P, {
            rel: "preconnect",
            href: i,
            crossOrigin: s
          }), R.preconnects.add(P));
        }
        Lt(g);
      }
    } else me.C(i, s);
  }
  function Hi(i, s, g) {
    var p = ur || null;
    if (p) {
      var R = p.resumableState, P = p.renderState;
      if (s && i) {
        switch (s) {
          case "image":
            if (g)
              var B = g.imageSrcSet, oe = g.imageSizes, ee = g.fetchPriority;
            var ie = B ? B + `
` + (oe || "") : i;
            if (R.imageResources.hasOwnProperty(ie)) return;
            R.imageResources[ie] = _e, R = P.headers;
            var De;
            R && 0 < R.remainingCapacity && typeof B != "string" && ee === "high" && (De = Yr(i, s, g), 0 <= (R.remainingCapacity -= De.length + 2)) ? (P.resets.image[ie] = _e, R.highImagePreloads && (R.highImagePreloads += ", "), R.highImagePreloads += De) : (R = [], Qt(
              R,
              un(
                { rel: "preload", href: B ? void 0 : i, as: s },
                g
              )
            ), ee === "high" ? P.highImagePreloads.add(R) : (P.bulkPreloads.add(R), P.preloads.images.set(ie, R)));
            break;
          case "style":
            if (R.styleResources.hasOwnProperty(i)) return;
            B = [], Qt(
              B,
              un({ rel: "preload", href: i, as: s }, g)
            ), R.styleResources[i] = !g || typeof g.crossOrigin != "string" && typeof g.integrity != "string" ? _e : [g.crossOrigin, g.integrity], P.preloads.stylesheets.set(i, B), P.bulkPreloads.add(B);
            break;
          case "script":
            if (R.scriptResources.hasOwnProperty(i)) return;
            B = [], P.preloads.scripts.set(i, B), P.bulkPreloads.add(B), Qt(
              B,
              un({ rel: "preload", href: i, as: s }, g)
            ), R.scriptResources[i] = !g || typeof g.crossOrigin != "string" && typeof g.integrity != "string" ? _e : [g.crossOrigin, g.integrity];
            break;
          default:
            if (R.unknownResources.hasOwnProperty(s)) {
              if (B = R.unknownResources[s], B.hasOwnProperty(i))
                return;
            } else
              B = {}, R.unknownResources[s] = B;
            if (B[i] = _e, (R = P.headers) && 0 < R.remainingCapacity && s === "font" && (ie = Yr(i, s, g), 0 <= (R.remainingCapacity -= ie.length + 2)))
              P.resets.font[i] = _e, R.fontPreloads && (R.fontPreloads += ", "), R.fontPreloads += ie;
            else
              switch (R = [], i = un({ rel: "preload", href: i, as: s }, g), Qt(R, i), s) {
                case "font":
                  P.fontPreloads.add(R);
                  break;
                default:
                  P.bulkPreloads.add(R);
              }
        }
        Lt(p);
      }
    } else me.L(i, s, g);
  }
  function iu(i, s) {
    var g = ur || null;
    if (g) {
      var p = g.resumableState, R = g.renderState;
      if (i) {
        var P = s && typeof s.as == "string" ? s.as : "script";
        switch (P) {
          case "script":
            if (p.moduleScriptResources.hasOwnProperty(i)) return;
            P = [], p.moduleScriptResources[i] = !s || typeof s.crossOrigin != "string" && typeof s.integrity != "string" ? _e : [s.crossOrigin, s.integrity], R.preloads.moduleScripts.set(i, P);
            break;
          default:
            if (p.moduleUnknownResources.hasOwnProperty(P)) {
              var B = p.unknownResources[P];
              if (B.hasOwnProperty(i)) return;
            } else
              B = {}, p.moduleUnknownResources[P] = B;
            P = [], B[i] = _e;
        }
        Qt(P, un({ rel: "modulepreload", href: i }, s)), R.bulkPreloads.add(P), Lt(g);
      }
    } else me.m(i, s);
  }
  function $o(i, s, g) {
    var p = ur || null;
    if (p) {
      var R = p.resumableState, P = p.renderState;
      if (i) {
        s = s || "default";
        var B = P.styles.get(s), oe = R.styleResources.hasOwnProperty(i) ? R.styleResources[i] : void 0;
        oe !== null && (R.styleResources[i] = null, B || (B = {
          precedence: Ce(s),
          rules: [],
          hrefs: [],
          sheets: /* @__PURE__ */ new Map()
        }, P.styles.set(s, B)), s = {
          state: 0,
          props: un(
            { rel: "stylesheet", href: i, "data-precedence": s },
            g
          )
        }, oe && (oe.length === 2 && No(s.props, oe), (P = P.preloads.stylesheets.get(i)) && 0 < P.length ? P.length = 0 : s.state = 1), B.sheets.set(i, s), Lt(p));
      }
    } else me.S(i, s, g);
  }
  function ar(i, s) {
    var g = ur || null;
    if (g) {
      var p = g.resumableState, R = g.renderState;
      if (i) {
        var P = p.scriptResources.hasOwnProperty(i) ? p.scriptResources[i] : void 0;
        P !== null && (p.scriptResources[i] = null, s = un({ src: i, async: !0 }, s), P && (P.length === 2 && No(s, P), i = R.preloads.scripts.get(i)) && (i.length = 0), i = [], R.scripts.add(i), ma(i, s), Lt(g));
      }
    } else me.X(i, s);
  }
  function nc(i, s) {
    var g = ur || null;
    if (g) {
      var p = g.resumableState, R = g.renderState;
      if (i) {
        var P = p.moduleScriptResources.hasOwnProperty(
          i
        ) ? p.moduleScriptResources[i] : void 0;
        P !== null && (p.moduleScriptResources[i] = null, s = un({ src: i, type: "module", async: !0 }, s), P && (P.length === 2 && No(s, P), i = R.preloads.moduleScripts.get(i)) && (i.length = 0), i = [], R.scripts.add(i), ma(i, s), Lt(g));
      }
    } else me.M(i, s);
  }
  function No(i, s) {
    i.crossOrigin == null && (i.crossOrigin = s[0]), i.integrity == null && (i.integrity = s[1]);
  }
  function Yr(i, s, g) {
    i = ("" + i).replace(
      kl,
      ti
    ), s = ("" + s).replace(
      ea,
      ri
    ), s = "<" + i + '>; rel=preload; as="' + s + '"';
    for (var p in g)
      Ke.call(g, p) && (i = g[p], typeof i == "string" && (s += "; " + p.toLowerCase() + '="' + ("" + i).replace(
        ea,
        ri
      ) + '"'));
    return s;
  }
  var kl = /[<>\r\n]/g;
  function ti(i) {
    switch (i) {
      case "<":
        return "%3C";
      case ">":
        return "%3E";
      case `
`:
        return "%0A";
      case "\r":
        return "%0D";
      default:
        throw Error(
          "escapeLinkHrefForHeaderContextReplacer encountered a match it does not know how to replace. this means the match regex and the replacement characters are no longer in sync. This is a bug in React"
        );
    }
  }
  var ea = /["';,\r\n]/g;
  function ri(i) {
    switch (i) {
      case '"':
        return "%22";
      case "'":
        return "%27";
      case ";":
        return "%3B";
      case ",":
        return "%2C";
      case `
`:
        return "%0A";
      case "\r":
        return "%0D";
      default:
        throw Error(
          "escapeStringForLinkHeaderQuotedParamValueContextReplacer encountered a match it does not know how to replace. this means the match regex and the replacement characters are no longer in sync. This is a bug in React"
        );
    }
  }
  function tc(i) {
    this.styles.add(i);
  }
  function lu(i) {
    this.stylesheets.add(i);
  }
  function Pa(i, s) {
    var g = i.idPrefix, p = [], R = i.bootstrapScriptContent, P = i.bootstrapScripts, B = i.bootstrapModules;
    R !== void 0 && p.push(
      "<script>",
      ("" + R).replace($e, fn),
      "<\/script>"
    ), R = g + "P:";
    var oe = g + "S:";
    g += "B:";
    var ee = Ne(), ie = /* @__PURE__ */ new Set(), De = /* @__PURE__ */ new Set(), pe = /* @__PURE__ */ new Set(), Ie = /* @__PURE__ */ new Map(), Ue = /* @__PURE__ */ new Set(), an = /* @__PURE__ */ new Set(), Ge = /* @__PURE__ */ new Set(), En = {
      images: /* @__PURE__ */ new Map(),
      stylesheets: /* @__PURE__ */ new Map(),
      scripts: /* @__PURE__ */ new Map(),
      moduleScripts: /* @__PURE__ */ new Map()
    };
    if (P !== void 0)
      for (var On = 0; On < P.length; On++) {
        var kn = P[On], Yn, Ze = void 0, yn = void 0, ln = {
          rel: "preload",
          as: "script",
          fetchPriority: "low",
          nonce: void 0
        };
        typeof kn == "string" ? ln.href = Yn = kn : (ln.href = Yn = kn.src, ln.integrity = yn = typeof kn.integrity == "string" ? kn.integrity : void 0, ln.crossOrigin = Ze = typeof kn == "string" || kn.crossOrigin == null ? void 0 : kn.crossOrigin === "use-credentials" ? "use-credentials" : ""), kn = i;
        var zt = Yn;
        kn.scriptResources[zt] = null, kn.moduleScriptResources[zt] = null, kn = [], Qt(kn, ln), Ue.add(kn), p.push('<script src="', Ce(Yn)), typeof yn == "string" && p.push('" integrity="', Ce(yn)), typeof Ze == "string" && p.push(
          '" crossorigin="',
          Ce(Ze)
        ), p.push('" async=""><\/script>');
      }
    if (B !== void 0)
      for (P = 0; P < B.length; P++)
        ln = B[P], Ze = Yn = void 0, yn = {
          rel: "modulepreload",
          fetchPriority: "low",
          nonce: void 0
        }, typeof ln == "string" ? yn.href = On = ln : (yn.href = On = ln.src, yn.integrity = Ze = typeof ln.integrity == "string" ? ln.integrity : void 0, yn.crossOrigin = Yn = typeof ln == "string" || ln.crossOrigin == null ? void 0 : ln.crossOrigin === "use-credentials" ? "use-credentials" : ""), ln = i, kn = On, ln.scriptResources[kn] = null, ln.moduleScriptResources[kn] = null, ln = [], Qt(ln, yn), Ue.add(ln), p.push(
          '<script type="module" src="',
          Ce(On)
        ), typeof Ze == "string" && p.push(
          '" integrity="',
          Ce(Ze)
        ), typeof Yn == "string" && p.push('" crossorigin="', Ce(Yn)), p.push('" async=""><\/script>');
    return {
      placeholderPrefix: R,
      segmentPrefix: oe,
      boundaryPrefix: g,
      startInlineScript: "<script>",
      preamble: ee,
      externalRuntimeScript: null,
      bootstrapChunks: p,
      importMapChunks: [],
      onHeaders: void 0,
      headers: null,
      resets: {
        font: {},
        dns: {},
        connect: { default: {}, anonymous: {}, credentials: {} },
        image: {},
        style: {}
      },
      charsetChunks: [],
      viewportChunks: [],
      hoistableChunks: [],
      preconnects: ie,
      fontPreloads: De,
      highImagePreloads: pe,
      styles: Ie,
      bootstrapScripts: Ue,
      scripts: an,
      bulkPreloads: Ge,
      preloads: En,
      stylesToHoist: !1,
      generateStaticMarkup: s
    };
  }
  function jn(i, s, g, p) {
    return g.generateStaticMarkup ? (i.push(Ce(s)), !1) : (s === "" ? i = p : (p && i.push("<!-- -->"), i.push(Ce(s)), i = !0), i);
  }
  function fs(i, s, g, p) {
    s.generateStaticMarkup || g && p && i.push("<!-- -->");
  }
  var Oc = Function.prototype.bind, ml = Symbol.for("react.client.reference");
  function Tr(i) {
    if (i == null) return null;
    if (typeof i == "function")
      return i.$$typeof === ml ? null : i.displayName || i.name || null;
    if (typeof i == "string") return i;
    switch (i) {
      case S:
        return "Fragment";
      case O:
        return "Profiler";
      case A:
        return "StrictMode";
      case re:
        return "Suspense";
      case V:
        return "SuspenseList";
      case Me:
        return "Activity";
    }
    if (typeof i == "object")
      switch (i.$$typeof) {
        case T:
          return "Portal";
        case M:
          return (i.displayName || "Context") + ".Provider";
        case Z:
          return (i._context.displayName || "Context") + ".Consumer";
        case J:
          var s = i.render;
          return i = i.displayName, i || (i = s.displayName || s.name || "", i = i !== "" ? "ForwardRef(" + i + ")" : "ForwardRef"), i;
        case _:
          return s = i.displayName || null, s !== null ? s : Tr(i.type) || "Memo";
        case N:
          s = i._payload, i = i._init;
          try {
            return Tr(i(s));
          } catch {
          }
      }
    return null;
  }
  var Ac = {}, oi = null;
  function Co(i, s) {
    if (i !== s) {
      i.context._currentValue2 = i.parentValue, i = i.parent;
      var g = s.parent;
      if (i === null) {
        if (g !== null) throw Error(f(401));
      } else {
        if (g === null) throw Error(f(401));
        Co(i, g);
      }
      s.context._currentValue2 = s.value;
    }
  }
  function Fa(i) {
    i.context._currentValue2 = i.parentValue, i = i.parent, i !== null && Fa(i);
  }
  function Yi(i) {
    var s = i.parent;
    s !== null && Yi(s), i.context._currentValue2 = i.value;
  }
  function ds(i, s) {
    if (i.context._currentValue2 = i.parentValue, i = i.parent, i === null) throw Error(f(402));
    i.depth === s.depth ? Co(i, s) : ds(i, s);
  }
  function Gi(i, s) {
    var g = s.parent;
    if (g === null) throw Error(f(402));
    i.depth === g.depth ? Co(i, g) : Gi(i, g), s.context._currentValue2 = s.value;
  }
  function lo(i) {
    var s = oi;
    s !== i && (s === null ? Yi(i) : i === null ? Fa(s) : s.depth === i.depth ? Co(s, i) : s.depth > i.depth ? ds(s, i) : Gi(s, i), oi = i);
  }
  var ai = {
    enqueueSetState: function(i, s) {
      i = i._reactInternals, i.queue !== null && i.queue.push(s);
    },
    enqueueReplaceState: function(i, s) {
      i = i._reactInternals, i.replace = !0, i.queue = [s];
    },
    enqueueForceUpdate: function() {
    }
  }, Xi = { id: 1, overflow: "" };
  function Oa(i, s, g) {
    var p = i.id;
    i = i.overflow;
    var R = 32 - na(p) - 1;
    p &= ~(1 << R), g += 1;
    var P = 32 - na(s) + R;
    if (30 < P) {
      var B = R - R % 5;
      return P = (p & (1 << B) - 1).toString(32), p >>= B, R -= B, {
        id: 1 << 32 - na(s) + R | g << R | p,
        overflow: P + i
      };
    }
    return {
      id: 1 << P | g << R | p,
      overflow: i
    };
  }
  var na = Math.clz32 ? Math.clz32 : Mc, ir = Math.log, ta = Math.LN2;
  function Mc(i) {
    return i >>>= 0, i === 0 ? 32 : 31 - (ir(i) / ta | 0) | 0;
  }
  var so = Error(f(460));
  function Aa() {
  }
  function Pl(i, s, g) {
    switch (g = i[g], g === void 0 ? i.push(s) : g !== s && (s.then(Aa, Aa), s = g), s.status) {
      case "fulfilled":
        return s.value;
      case "rejected":
        throw s.reason;
      default:
        switch (typeof s.status == "string" ? s.then(Aa, Aa) : (i = s, i.status = "pending", i.then(
          function(p) {
            if (s.status === "pending") {
              var R = s;
              R.status = "fulfilled", R.value = p;
            }
          },
          function(p) {
            if (s.status === "pending") {
              var R = s;
              R.status = "rejected", R.reason = p;
            }
          }
        )), s.status) {
          case "fulfilled":
            return s.value;
          case "rejected":
            throw s.reason;
        }
        throw ra = s, so;
    }
  }
  var ra = null;
  function vt() {
    if (ra === null) throw Error(f(459));
    var i = ra;
    return ra = null, i;
  }
  function ii(i, s) {
    return i === s && (i !== 0 || 1 / i === 1 / s) || i !== i && s !== s;
  }
  var Mr = typeof Object.is == "function" ? Object.is : ii, Ir = null, hs = null, gs = null, lr = null, Fl = null, Pn = null, sr = !1, li = !1, Ma = 0, oa = 0, aa = -1, Zi = 0, cr = null, ia = null, Ia = 0;
  function Gr() {
    if (Ir === null)
      throw Error(f(321));
    return Ir;
  }
  function Vi() {
    if (0 < Ia) throw Error(f(312));
    return { memoizedState: null, queue: null, next: null };
  }
  function Da() {
    return Pn === null ? Fl === null ? (sr = !1, Fl = Pn = Vi()) : (sr = !0, Pn = Fl) : Pn.next === null ? (sr = !1, Pn = Pn.next = Vi()) : (sr = !0, Pn = Pn.next), Pn;
  }
  function Lo() {
    var i = cr;
    return cr = null, i;
  }
  function la() {
    lr = gs = hs = Ir = null, li = !1, Fl = null, Ia = 0, Pn = ia = null;
  }
  function bs(i, s) {
    return typeof s == "function" ? s(i) : s;
  }
  function Qi(i, s, g) {
    if (Ir = Gr(), Pn = Da(), sr) {
      var p = Pn.queue;
      if (s = p.dispatch, ia !== null && (g = ia.get(p), g !== void 0)) {
        ia.delete(p), p = Pn.memoizedState;
        do
          p = i(p, g.action), g = g.next;
        while (g !== null);
        return Pn.memoizedState = p, [p, s];
      }
      return [Pn.memoizedState, s];
    }
    return i = i === bs ? typeof s == "function" ? s() : s : g !== void 0 ? g(s) : s, Pn.memoizedState = i, i = Pn.queue = { last: null, dispatch: null }, i = i.dispatch = si.bind(
      null,
      Ir,
      i
    ), [Pn.memoizedState, i];
  }
  function rc(i, s) {
    if (Ir = Gr(), Pn = Da(), s = s === void 0 ? null : s, Pn !== null) {
      var g = Pn.memoizedState;
      if (g !== null && s !== null) {
        var p = g[1];
        e: if (p === null) p = !1;
        else {
          for (var R = 0; R < p.length && R < s.length; R++)
            if (!Mr(s[R], p[R])) {
              p = !1;
              break e;
            }
          p = !0;
        }
        if (p) return g[0];
      }
    }
    return i = i(), Pn.memoizedState = [i, s], i;
  }
  function si(i, s, g) {
    if (25 <= Ia) throw Error(f(301));
    if (i === Ir)
      if (li = !0, i = { action: g, next: null }, ia === null && (ia = /* @__PURE__ */ new Map()), g = ia.get(s), g === void 0)
        ia.set(s, i);
      else {
        for (s = g; s.next !== null; ) s = s.next;
        s.next = i;
      }
  }
  function ys() {
    throw Error(f(394));
  }
  function oc() {
    throw Error(f(479));
  }
  function Ol(i, s, g) {
    Gr();
    var p = oa++, R = gs;
    if (typeof i.$$FORM_ACTION == "function") {
      var P = null, B = lr;
      R = R.formState;
      var oe = i.$$IS_SIGNATURE_EQUAL;
      if (R !== null && typeof oe == "function") {
        var ee = R[1];
        oe.call(i, R[2], R[3]) && (P = g !== void 0 ? "p" + g : "k" + vn(
          JSON.stringify([B, null, p]),
          0
        ), ee === P && (aa = p, s = R[0]));
      }
      var ie = i.bind(null, s);
      return i = function(pe) {
        ie(pe);
      }, typeof ie.$$FORM_ACTION == "function" && (i.$$FORM_ACTION = function(pe) {
        pe = ie.$$FORM_ACTION(pe), g !== void 0 && (g += "", pe.action = g);
        var Ie = pe.data;
        return Ie && (P === null && (P = g !== void 0 ? "p" + g : "k" + vn(
          JSON.stringify([
            B,
            null,
            p
          ]),
          0
        )), Ie.append("$ACTION_KEY", P)), pe;
      }), [s, i, !1];
    }
    var De = i.bind(null, s);
    return [
      s,
      function(pe) {
        De(pe);
      },
      !1
    ];
  }
  function vs(i) {
    var s = Zi;
    return Zi += 1, cr === null && (cr = []), Pl(cr, i, s);
  }
  function Ic() {
    throw Error(f(393));
  }
  function Al() {
  }
  var ci = {
    readContext: function(i) {
      return i._currentValue2;
    },
    use: function(i) {
      if (i !== null && typeof i == "object") {
        if (typeof i.then == "function") return vs(i);
        if (i.$$typeof === M)
          return i._currentValue2;
      }
      throw Error(f(438, String(i)));
    },
    useContext: function(i) {
      return Gr(), i._currentValue2;
    },
    useMemo: rc,
    useReducer: Qi,
    useRef: function(i) {
      Ir = Gr(), Pn = Da();
      var s = Pn.memoizedState;
      return s === null ? (i = { current: i }, Pn.memoizedState = i) : s;
    },
    useState: function(i) {
      return Qi(bs, i);
    },
    useInsertionEffect: Al,
    useLayoutEffect: Al,
    useCallback: function(i, s) {
      return rc(function() {
        return i;
      }, s);
    },
    useImperativeHandle: Al,
    useEffect: Al,
    useDebugValue: Al,
    useDeferredValue: function(i, s) {
      return Gr(), s !== void 0 ? s : i;
    },
    useTransition: function() {
      return Gr(), [!1, ys];
    },
    useId: function() {
      var i = hs.treeContext, s = i.overflow;
      i = i.id, i = (i & ~(1 << 32 - na(i) - 1)).toString(32) + s;
      var g = Ji;
      if (g === null) throw Error(f(404));
      return s = Ma++, i = "«" + g.idPrefix + "R" + i, 0 < s && (i += "H" + s.toString(32)), i + "»";
    },
    useSyncExternalStore: function(i, s, g) {
      if (g === void 0)
        throw Error(f(407));
      return g();
    },
    useOptimistic: function(i) {
      return Gr(), [i, oc];
    },
    useActionState: Ol,
    useFormState: Ol,
    useHostTransitionStatus: function() {
      return Gr(), Re;
    },
    useMemoCache: function(i) {
      for (var s = Array(i), g = 0; g < i; g++)
        s[g] = ke;
      return s;
    },
    useCacheRefresh: function() {
      return Ic;
    }
  }, Ji = null, ui = {
    getCacheForType: function() {
      throw Error(f(248));
    }
  }, ps, fi;
  function Ki(i) {
    if (ps === void 0)
      try {
        throw Error();
      } catch (g) {
        var s = g.stack.trim().match(/\n( *(at )?)/);
        ps = s && s[1] || "", fi = -1 < g.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < g.stack.indexOf("@") ? "@unknown:0:0" : "";
      }
    return `
` + ps + i + fi;
  }
  var qi = !1;
  function di(i, s) {
    if (!i || qi) return "";
    qi = !0;
    var g = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var p = {
        DetermineComponentFrameRoot: function() {
          try {
            if (s) {
              var pe = function() {
                throw Error();
              };
              if (Object.defineProperty(pe.prototype, "props", {
                set: function() {
                  throw Error();
                }
              }), typeof Reflect == "object" && Reflect.construct) {
                try {
                  Reflect.construct(pe, []);
                } catch (Ue) {
                  var Ie = Ue;
                }
                Reflect.construct(i, [], pe);
              } else {
                try {
                  pe.call();
                } catch (Ue) {
                  Ie = Ue;
                }
                i.call(pe.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (Ue) {
                Ie = Ue;
              }
              (pe = i()) && typeof pe.catch == "function" && pe.catch(function() {
              });
            }
          } catch (Ue) {
            if (Ue && Ie && typeof Ue.stack == "string")
              return [Ue.stack, Ie.stack];
          }
          return [null, null];
        }
      };
      p.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var R = Object.getOwnPropertyDescriptor(
        p.DetermineComponentFrameRoot,
        "name"
      );
      R && R.configurable && Object.defineProperty(
        p.DetermineComponentFrameRoot,
        "name",
        { value: "DetermineComponentFrameRoot" }
      );
      var P = p.DetermineComponentFrameRoot(), B = P[0], oe = P[1];
      if (B && oe) {
        var ee = B.split(`
`), ie = oe.split(`
`);
        for (R = p = 0; p < ee.length && !ee[p].includes("DetermineComponentFrameRoot"); )
          p++;
        for (; R < ie.length && !ie[R].includes(
          "DetermineComponentFrameRoot"
        ); )
          R++;
        if (p === ee.length || R === ie.length)
          for (p = ee.length - 1, R = ie.length - 1; 1 <= p && 0 <= R && ee[p] !== ie[R]; )
            R--;
        for (; 1 <= p && 0 <= R; p--, R--)
          if (ee[p] !== ie[R]) {
            if (p !== 1 || R !== 1)
              do
                if (p--, R--, 0 > R || ee[p] !== ie[R]) {
                  var De = `
` + ee[p].replace(" at new ", " at ");
                  return i.displayName && De.includes("<anonymous>") && (De = De.replace("<anonymous>", i.displayName)), De;
                }
              while (1 <= p && 0 <= R);
            break;
          }
      }
    } finally {
      qi = !1, Error.prepareStackTrace = g;
    }
    return (g = i ? i.displayName || i.name : "") ? Ki(g) : "";
  }
  function hi(i) {
    if (typeof i == "string") return Ki(i);
    if (typeof i == "function")
      return i.prototype && i.prototype.isReactComponent ? di(i, !0) : di(i, !1);
    if (typeof i == "object" && i !== null) {
      switch (i.$$typeof) {
        case J:
          return di(i.render, !1);
        case _:
          return di(i.type, !1);
        case N:
          var s = i, g = s._payload;
          s = s._init;
          try {
            i = s(g);
          } catch {
            return Ki("Lazy");
          }
          return hi(i);
      }
      if (typeof i.name == "string")
        return g = i.env, Ki(
          i.name + (g ? " [" + g + "]" : "")
        );
    }
    switch (i) {
      case V:
        return Ki("SuspenseList");
      case re:
        return Ki("Suspense");
    }
    return "";
  }
  function zo(i) {
    if (typeof i == "object" && i !== null && typeof i.environmentName == "string") {
      var s = i.environmentName;
      i = [i].slice(0), typeof i[0] == "string" ? i.splice(
        0,
        1,
        "[%s] " + i[0],
        " " + s + " "
      ) : i.splice(0, 0, "[%s] ", " " + s + " "), i.unshift(console), s = Oc.apply(console.error, i), s();
    } else console.error(i);
    return null;
  }
  function sa() {
  }
  function ws(i, s, g, p, R, P, B, oe, ee, ie, De) {
    var pe = /* @__PURE__ */ new Set();
    this.destination = null, this.flushScheduled = !1, this.resumableState = i, this.renderState = s, this.rootFormatContext = g, this.progressiveChunkSize = p === void 0 ? 12800 : p, this.status = 10, this.fatalError = null, this.pendingRootTasks = this.allPendingTasks = this.nextSegmentId = 0, this.completedPreambleSegments = this.completedRootSegment = null, this.abortableTasks = pe, this.pingedTasks = [], this.clientRenderedBoundaries = [], this.completedBoundaries = [], this.partialBoundaries = [], this.trackedPostpones = null, this.onError = R === void 0 ? zo : R, this.onPostpone = ie === void 0 ? sa : ie, this.onAllReady = P === void 0 ? sa : P, this.onShellReady = B === void 0 ? sa : B, this.onShellError = oe === void 0 ? sa : oe, this.onFatalError = ee === void 0 ? sa : ee, this.formState = De === void 0 ? null : De;
  }
  function ji(i, s, g, p, R, P, B, oe, ee, ie, De, pe) {
    return s = new ws(
      s,
      g,
      p,
      R,
      P,
      B,
      oe,
      ee,
      ie,
      De,
      pe
    ), g = Uo(
      s,
      0,
      null,
      p,
      !1,
      !1
    ), g.parentFlushed = !0, i = bi(
      s,
      null,
      i,
      -1,
      null,
      g,
      null,
      null,
      s.abortableTasks,
      null,
      p,
      null,
      Xi,
      null,
      !1
    ), Jn(i), s.pingedTasks.push(i), s;
  }
  var ur = null;
  function gi(i, s) {
    i.pingedTasks.push(s), i.pingedTasks.length === 1 && (i.flushScheduled = i.destination !== null, Dc(i));
  }
  function Wo(i, s, g, p) {
    return {
      status: 0,
      rootSegmentID: -1,
      parentFlushed: !1,
      pendingTasks: 0,
      completedSegments: [],
      byteSize: 0,
      fallbackAbortableTasks: s,
      errorDigest: null,
      contentState: Ui(),
      fallbackState: Ui(),
      contentPreamble: g,
      fallbackPreamble: p,
      trackedContentKeyPath: null,
      trackedFallbackNode: null
    };
  }
  function bi(i, s, g, p, R, P, B, oe, ee, ie, De, pe, Ie, Ue, an) {
    i.allPendingTasks++, R === null ? i.pendingRootTasks++ : R.pendingTasks++;
    var Ge = {
      replay: null,
      node: g,
      childIndex: p,
      ping: function() {
        return gi(i, Ge);
      },
      blockedBoundary: R,
      blockedSegment: P,
      blockedPreamble: B,
      hoistableState: oe,
      abortSet: ee,
      keyPath: ie,
      formatContext: De,
      context: pe,
      treeContext: Ie,
      componentStack: Ue,
      thenableState: s,
      isFallback: an
    };
    return ee.add(Ge), Ge;
  }
  function Ml(i, s, g, p, R, P, B, oe, ee, ie, De, pe, Ie, Ue) {
    i.allPendingTasks++, P === null ? i.pendingRootTasks++ : P.pendingTasks++, g.pendingTasks++;
    var an = {
      replay: g,
      node: p,
      childIndex: R,
      ping: function() {
        return gi(i, an);
      },
      blockedBoundary: P,
      blockedSegment: null,
      blockedPreamble: null,
      hoistableState: B,
      abortSet: oe,
      keyPath: ee,
      formatContext: ie,
      context: De,
      treeContext: pe,
      componentStack: Ie,
      thenableState: s,
      isFallback: Ue
    };
    return oe.add(an), an;
  }
  function Uo(i, s, g, p, R, P) {
    return {
      status: 0,
      parentFlushed: !1,
      id: -1,
      index: s,
      chunks: [],
      children: [],
      preambleChildren: [],
      parentFormatContext: p,
      boundary: g,
      lastPushedText: R,
      textEmbedded: P
    };
  }
  function Jn(i) {
    var s = i.node;
    if (typeof s == "object" && s !== null)
      switch (s.$$typeof) {
        case b:
          i.componentStack = { parent: i.componentStack, type: s.type };
      }
  }
  function Ft(i) {
    var s = {};
    return i && Object.defineProperty(s, "componentStack", {
      configurable: !0,
      enumerable: !0,
      get: function() {
        try {
          var g = "", p = i;
          do
            g += hi(p.type), p = p.parent;
          while (p);
          var R = g;
        } catch (P) {
          R = `
Error generating stack: ` + P.message + `
` + P.stack;
        }
        return Object.defineProperty(s, "componentStack", {
          value: R
        }), R;
      }
    }), s;
  }
  function Xr(i, s, g) {
    if (i = i.onError, s = i(s, g), s == null || typeof s == "string") return s;
  }
  function yi(i, s) {
    var g = i.onShellError, p = i.onFatalError;
    g(s), p(s), i.destination !== null ? (i.status = 14, i.destination.destroy(s)) : (i.status = 13, i.fatalError = s);
  }
  function ft(i, s, g, p, R, P) {
    var B = s.thenableState;
    for (s.thenableState = null, Ir = {}, hs = s, gs = i, lr = g, oa = Ma = 0, aa = -1, Zi = 0, cr = B, i = p(R, P); li; )
      li = !1, oa = Ma = 0, aa = -1, Zi = 0, Ia += 1, Pn = null, i = p(R, P);
    return la(), i;
  }
  function An(i, s, g, p, R, P, B) {
    var oe = !1;
    if (P !== 0 && i.formState !== null) {
      var ee = s.blockedSegment;
      if (ee !== null) {
        oe = !0, ee = ee.chunks;
        for (var ie = 0; ie < P; ie++)
          ie === B ? ee.push("<!--F!-->") : ee.push("<!--F-->");
      }
    }
    P = s.keyPath, s.keyPath = g, R ? (g = s.treeContext, s.treeContext = Oa(g, 1, 0), co(i, s, p, -1), s.treeContext = g) : oe ? co(i, s, p, -1) : Nt(i, s, p, -1), s.keyPath = P;
  }
  function ac(i, s, g, p, R, P) {
    if (typeof p == "function")
      if (p.prototype && p.prototype.isReactComponent) {
        var B = R;
        if ("ref" in R) {
          B = {};
          for (var oe in R)
            oe !== "ref" && (B[oe] = R[oe]);
        }
        var ee = p.defaultProps;
        if (ee) {
          B === R && (B = un({}, B, R));
          for (var ie in ee)
            B[ie] === void 0 && (B[ie] = ee[ie]);
        }
        R = B, B = Ac, ee = p.contextType, typeof ee == "object" && ee !== null && (B = ee._currentValue2), B = new p(R, B);
        var De = B.state !== void 0 ? B.state : null;
        if (B.updater = ai, B.props = R, B.state = De, ee = { queue: [], replace: !1 }, B._reactInternals = ee, P = p.contextType, B.context = typeof P == "object" && P !== null ? P._currentValue2 : Ac, P = p.getDerivedStateFromProps, typeof P == "function" && (P = P(R, De), De = P == null ? De : un({}, De, P), B.state = De), typeof p.getDerivedStateFromProps != "function" && typeof B.getSnapshotBeforeUpdate != "function" && (typeof B.UNSAFE_componentWillMount == "function" || typeof B.componentWillMount == "function"))
          if (p = B.state, typeof B.componentWillMount == "function" && B.componentWillMount(), typeof B.UNSAFE_componentWillMount == "function" && B.UNSAFE_componentWillMount(), p !== B.state && ai.enqueueReplaceState(
            B,
            B.state,
            null
          ), ee.queue !== null && 0 < ee.queue.length)
            if (p = ee.queue, P = ee.replace, ee.queue = null, ee.replace = !1, P && p.length === 1)
              B.state = p[0];
            else {
              for (ee = P ? p[0] : B.state, De = !0, P = P ? 1 : 0; P < p.length; P++)
                ie = p[P], ie = typeof ie == "function" ? ie.call(B, ee, R, void 0) : ie, ie != null && (De ? (De = !1, ee = un({}, ee, ie)) : un(ee, ie));
              B.state = ee;
            }
          else ee.queue = null;
        if (p = B.render(), i.status === 12) throw null;
        R = s.keyPath, s.keyPath = g, Nt(i, s, p, -1), s.keyPath = R;
      } else {
        if (p = ft(i, s, g, p, R, void 0), i.status === 12) throw null;
        An(
          i,
          s,
          g,
          p,
          Ma !== 0,
          oa,
          aa
        );
      }
    else if (typeof p == "string")
      if (B = s.blockedSegment, B === null)
        B = R.children, ee = s.formatContext, De = s.keyPath, s.formatContext = de(ee, p, R), s.keyPath = g, co(i, s, B, -1), s.formatContext = ee, s.keyPath = De;
      else {
        P = Ur(
          B.chunks,
          p,
          R,
          i.resumableState,
          i.renderState,
          s.blockedPreamble,
          s.hoistableState,
          s.formatContext,
          B.lastPushedText,
          s.isFallback
        ), B.lastPushedText = !1, ee = s.formatContext, De = s.keyPath, s.keyPath = g, (s.formatContext = de(ee, p, R)).insertionMode === 3 ? (g = Uo(
          i,
          0,
          null,
          s.formatContext,
          !1,
          !1
        ), B.preambleChildren.push(g), g = bi(
          i,
          null,
          P,
          -1,
          s.blockedBoundary,
          g,
          s.blockedPreamble,
          s.hoistableState,
          i.abortableTasks,
          s.keyPath,
          s.formatContext,
          s.context,
          s.treeContext,
          s.componentStack,
          s.isFallback
        ), Jn(g), i.pingedTasks.push(g)) : co(i, s, P, -1), s.formatContext = ee, s.keyPath = De;
        e: {
          switch (s = B.chunks, i = i.resumableState, p) {
            case "title":
            case "style":
            case "script":
            case "area":
            case "base":
            case "br":
            case "col":
            case "embed":
            case "hr":
            case "img":
            case "input":
            case "keygen":
            case "link":
            case "meta":
            case "param":
            case "source":
            case "track":
            case "wbr":
              break e;
            case "body":
              if (1 >= ee.insertionMode) {
                i.hasBody = !0;
                break e;
              }
              break;
            case "html":
              if (ee.insertionMode === 0) {
                i.hasHtml = !0;
                break e;
              }
              break;
            case "head":
              if (1 >= ee.insertionMode) break e;
          }
          s.push($a(p));
        }
        B.lastPushedText = !1;
      }
    else {
      switch (p) {
        case je:
        case A:
        case O:
        case S:
          p = s.keyPath, s.keyPath = g, Nt(i, s, R.children, -1), s.keyPath = p;
          return;
        case Me:
          R.mode !== "hidden" && (p = s.keyPath, s.keyPath = g, Nt(i, s, R.children, -1), s.keyPath = p);
          return;
        case V:
          p = s.keyPath, s.keyPath = g, Nt(i, s, R.children, -1), s.keyPath = p;
          return;
        case ge:
        case Pe:
          throw Error(f(343));
        case re:
          e: if (s.replay !== null) {
            p = s.keyPath, s.keyPath = g, g = R.children;
            try {
              co(i, s, g, -1);
            } finally {
              s.keyPath = p;
            }
          } else {
            p = s.keyPath;
            var pe = s.blockedBoundary;
            P = s.blockedPreamble;
            var Ie = s.hoistableState;
            ie = s.blockedSegment, oe = R.fallback, R = R.children;
            var Ue = /* @__PURE__ */ new Set(), an = 2 > s.formatContext.insertionMode ? Wo(
              i,
              Ue,
              Ne(),
              Ne()
            ) : Wo(i, Ue, null, null);
            i.trackedPostpones !== null && (an.trackedContentKeyPath = g);
            var Ge = Uo(
              i,
              ie.chunks.length,
              an,
              s.formatContext,
              !1,
              !1
            );
            ie.children.push(Ge), ie.lastPushedText = !1;
            var En = Uo(
              i,
              0,
              null,
              s.formatContext,
              !1,
              !1
            );
            if (En.parentFlushed = !0, i.trackedPostpones !== null) {
              B = [g[0], "Suspense Fallback", g[2]], ee = [B[1], B[2], [], null], i.trackedPostpones.workingMap.set(B, ee), an.trackedFallbackNode = ee, s.blockedSegment = Ge, s.blockedPreamble = an.fallbackPreamble, s.keyPath = B, Ge.status = 6;
              try {
                co(i, s, oe, -1), fs(
                  Ge.chunks,
                  i.renderState,
                  Ge.lastPushedText,
                  Ge.textEmbedded
                ), Ge.status = 1;
              } catch (On) {
                throw Ge.status = i.status === 12 ? 3 : 4, On;
              } finally {
                s.blockedSegment = ie, s.blockedPreamble = P, s.keyPath = p;
              }
              s = bi(
                i,
                null,
                R,
                -1,
                an,
                En,
                an.contentPreamble,
                an.contentState,
                s.abortSet,
                g,
                s.formatContext,
                s.context,
                s.treeContext,
                s.componentStack,
                s.isFallback
              ), Jn(s), i.pingedTasks.push(s);
            } else {
              s.blockedBoundary = an, s.blockedPreamble = an.contentPreamble, s.hoistableState = an.contentState, s.blockedSegment = En, s.keyPath = g, En.status = 6;
              try {
                if (co(i, s, R, -1), fs(
                  En.chunks,
                  i.renderState,
                  En.lastPushedText,
                  En.textEmbedded
                ), En.status = 1, Es(an, En), an.pendingTasks === 0 && an.status === 0) {
                  an.status = 1, i.pendingRootTasks === 0 && s.blockedPreamble && _a(i);
                  break e;
                }
              } catch (On) {
                an.status = 4, i.status === 12 ? (En.status = 3, B = i.fatalError) : (En.status = 4, B = On), ee = Ft(s.componentStack), De = Xr(
                  i,
                  B,
                  ee
                ), an.errorDigest = De, Il(i, an);
              } finally {
                s.blockedBoundary = pe, s.blockedPreamble = P, s.hoistableState = Ie, s.blockedSegment = ie, s.keyPath = p;
              }
              s = bi(
                i,
                null,
                oe,
                -1,
                pe,
                Ge,
                an.fallbackPreamble,
                an.fallbackState,
                Ue,
                [g[0], "Suspense Fallback", g[2]],
                s.formatContext,
                s.context,
                s.treeContext,
                s.componentStack,
                !0
              ), Jn(s), i.pingedTasks.push(s);
            }
          }
          return;
      }
      if (typeof p == "object" && p !== null)
        switch (p.$$typeof) {
          case J:
            if ("ref" in R)
              for (an in B = {}, R)
                an !== "ref" && (B[an] = R[an]);
            else B = R;
            p = ft(
              i,
              s,
              g,
              p.render,
              B,
              P
            ), An(
              i,
              s,
              g,
              p,
              Ma !== 0,
              oa,
              aa
            );
            return;
          case _:
            ac(i, s, g, p.type, R, P);
            return;
          case Y:
          case M:
            if (ee = R.children, B = s.keyPath, R = R.value, De = p._currentValue2, p._currentValue2 = R, P = oi, oi = p = {
              parent: P,
              depth: P === null ? 0 : P.depth + 1,
              context: p,
              parentValue: De,
              value: R
            }, s.context = p, s.keyPath = g, Nt(i, s, ee, -1), i = oi, i === null) throw Error(f(403));
            i.context._currentValue2 = i.parentValue, i = oi = i.parent, s.context = i, s.keyPath = B;
            return;
          case Z:
            R = R.children, p = R(p._context._currentValue2), R = s.keyPath, s.keyPath = g, Nt(i, s, p, -1), s.keyPath = R;
            return;
          case N:
            if (B = p._init, p = B(p._payload), i.status === 12) throw null;
            ac(i, s, g, p, R, P);
            return;
        }
      throw Error(
        f(130, p == null ? p : typeof p, "")
      );
    }
  }
  function Ts(i, s, g, p, R) {
    var P = s.replay, B = s.blockedBoundary, oe = Uo(
      i,
      0,
      null,
      s.formatContext,
      !1,
      !1
    );
    oe.id = g, oe.parentFlushed = !0;
    try {
      s.replay = null, s.blockedSegment = oe, co(i, s, p, R), oe.status = 1, B === null ? i.completedRootSegment = oe : (Es(B, oe), B.parentFlushed && i.partialBoundaries.push(B));
    } finally {
      s.replay = P, s.blockedSegment = null;
    }
  }
  function Nt(i, s, g, p) {
    s.replay !== null && typeof s.replay.slots == "number" ? Ts(i, s, s.replay.slots, g, p) : (s.node = g, s.childIndex = p, g = s.componentStack, Jn(s), ic(i, s), s.componentStack = g);
  }
  function ic(i, s) {
    var g = s.node, p = s.childIndex;
    if (g !== null) {
      if (typeof g == "object") {
        switch (g.$$typeof) {
          case b:
            var R = g.type, P = g.key, B = g.props;
            g = B.ref;
            var oe = g !== void 0 ? g : null, ee = Tr(R), ie = P ?? (p === -1 ? 0 : p);
            if (P = [s.keyPath, ee, ie], s.replay !== null)
              e: {
                var De = s.replay;
                for (p = De.nodes, g = 0; g < p.length; g++) {
                  var pe = p[g];
                  if (ie === pe[1]) {
                    if (pe.length === 4) {
                      if (ee !== null && ee !== pe[0])
                        throw Error(
                          f(490, pe[0], ee)
                        );
                      var Ie = pe[2];
                      ee = pe[3], ie = s.node, s.replay = {
                        nodes: Ie,
                        slots: ee,
                        pendingTasks: 1
                      };
                      try {
                        if (ac(i, s, P, R, B, oe), s.replay.pendingTasks === 1 && 0 < s.replay.nodes.length)
                          throw Error(f(488));
                        s.replay.pendingTasks--;
                      } catch (Ze) {
                        if (typeof Ze == "object" && Ze !== null && (Ze === so || typeof Ze.then == "function"))
                          throw s.node === ie && (s.replay = De), Ze;
                        s.replay.pendingTasks--, B = Ft(s.componentStack), P = s.blockedBoundary, R = Ze, B = Xr(i, R, B), Kt(
                          i,
                          P,
                          Ie,
                          ee,
                          R,
                          B
                        );
                      }
                      s.replay = De;
                    } else {
                      if (R !== re)
                        throw Error(
                          f(
                            490,
                            "Suspense",
                            Tr(R) || "Unknown"
                          )
                        );
                      n: {
                        De = void 0, R = pe[5], oe = pe[2], ee = pe[3], ie = pe[4] === null ? [] : pe[4][2], pe = pe[4] === null ? null : pe[4][3];
                        var Ue = s.keyPath, an = s.replay, Ge = s.blockedBoundary, En = s.hoistableState, On = B.children, kn = B.fallback, Yn = /* @__PURE__ */ new Set();
                        B = 2 > s.formatContext.insertionMode ? Wo(
                          i,
                          Yn,
                          Ne(),
                          Ne()
                        ) : Wo(
                          i,
                          Yn,
                          null,
                          null
                        ), B.parentFlushed = !0, B.rootSegmentID = R, s.blockedBoundary = B, s.hoistableState = B.contentState, s.keyPath = P, s.replay = {
                          nodes: oe,
                          slots: ee,
                          pendingTasks: 1
                        };
                        try {
                          if (co(i, s, On, -1), s.replay.pendingTasks === 1 && 0 < s.replay.nodes.length)
                            throw Error(f(488));
                          if (s.replay.pendingTasks--, B.pendingTasks === 0 && B.status === 0) {
                            B.status = 1, i.completedBoundaries.push(B);
                            break n;
                          }
                        } catch (Ze) {
                          B.status = 4, Ie = Ft(s.componentStack), De = Xr(
                            i,
                            Ze,
                            Ie
                          ), B.errorDigest = De, s.replay.pendingTasks--, i.clientRenderedBoundaries.push(B);
                        } finally {
                          s.blockedBoundary = Ge, s.hoistableState = En, s.replay = an, s.keyPath = Ue;
                        }
                        s = Ml(
                          i,
                          null,
                          {
                            nodes: ie,
                            slots: pe,
                            pendingTasks: 0
                          },
                          kn,
                          -1,
                          Ge,
                          B.fallbackState,
                          Yn,
                          [P[0], "Suspense Fallback", P[2]],
                          s.formatContext,
                          s.context,
                          s.treeContext,
                          s.componentStack,
                          !0
                        ), Jn(s), i.pingedTasks.push(s);
                      }
                    }
                    p.splice(g, 1);
                    break e;
                  }
                }
              }
            else ac(i, s, P, R, B, oe);
            return;
          case T:
            throw Error(f(257));
          case N:
            if (Ie = g._init, g = Ie(g._payload), i.status === 12) throw null;
            Nt(i, s, g, p);
            return;
        }
        if (Xe(g)) {
          lc(i, s, g, p);
          return;
        }
        if (g === null || typeof g != "object" ? Ie = null : (Ie = $ && g[$] || g["@@iterator"], Ie = typeof Ie == "function" ? Ie : null), Ie && (Ie = Ie.call(g))) {
          if (g = Ie.next(), !g.done) {
            B = [];
            do
              B.push(g.value), g = Ie.next();
            while (!g.done);
            lc(i, s, B, p);
          }
          return;
        }
        if (typeof g.then == "function")
          return s.thenableState = null, Nt(i, s, vs(g), p);
        if (g.$$typeof === M)
          return Nt(
            i,
            s,
            g._currentValue2,
            p
          );
        throw p = Object.prototype.toString.call(g), Error(
          f(
            31,
            p === "[object Object]" ? "object with keys {" + Object.keys(g).join(", ") + "}" : p
          )
        );
      }
      typeof g == "string" ? (p = s.blockedSegment, p !== null && (p.lastPushedText = jn(
        p.chunks,
        g,
        i.renderState,
        p.lastPushedText
      ))) : (typeof g == "number" || typeof g == "bigint") && (p = s.blockedSegment, p !== null && (p.lastPushedText = jn(
        p.chunks,
        "" + g,
        i.renderState,
        p.lastPushedText
      )));
    }
  }
  function lc(i, s, g, p) {
    var R = s.keyPath;
    if (p !== -1 && (s.keyPath = [s.keyPath, "Fragment", p], s.replay !== null)) {
      for (var P = s.replay, B = P.nodes, oe = 0; oe < B.length; oe++) {
        var ee = B[oe];
        if (ee[1] === p) {
          p = ee[2], ee = ee[3], s.replay = { nodes: p, slots: ee, pendingTasks: 1 };
          try {
            if (lc(i, s, g, -1), s.replay.pendingTasks === 1 && 0 < s.replay.nodes.length)
              throw Error(f(488));
            s.replay.pendingTasks--;
          } catch (pe) {
            if (typeof pe == "object" && pe !== null && (pe === so || typeof pe.then == "function"))
              throw pe;
            s.replay.pendingTasks--, g = Ft(s.componentStack);
            var ie = s.blockedBoundary, De = pe;
            g = Xr(i, De, g), Kt(
              i,
              ie,
              p,
              ee,
              De,
              g
            );
          }
          s.replay = P, B.splice(oe, 1);
          break;
        }
      }
      s.keyPath = R;
      return;
    }
    if (P = s.treeContext, B = g.length, s.replay !== null && (oe = s.replay.slots, oe !== null && typeof oe == "object")) {
      for (p = 0; p < B; p++)
        ee = g[p], s.treeContext = Oa(P, B, p), ie = oe[p], typeof ie == "number" ? (Ts(i, s, ie, ee, p), delete oe[p]) : co(i, s, ee, p);
      s.treeContext = P, s.keyPath = R;
      return;
    }
    for (oe = 0; oe < B; oe++)
      p = g[oe], s.treeContext = Oa(P, B, oe), co(i, s, p, oe);
    s.treeContext = P, s.keyPath = R;
  }
  function Il(i, s) {
    i = i.trackedPostpones, i !== null && (s = s.trackedContentKeyPath, s !== null && (s = i.workingMap.get(s), s !== void 0 && (s.length = 4, s[2] = [], s[3] = null)));
  }
  function Cs(i, s, g) {
    return Ml(
      i,
      g,
      s.replay,
      s.node,
      s.childIndex,
      s.blockedBoundary,
      s.hoistableState,
      s.abortSet,
      s.keyPath,
      s.formatContext,
      s.context,
      s.treeContext,
      s.componentStack,
      s.isFallback
    );
  }
  function ca(i, s, g) {
    var p = s.blockedSegment, R = Uo(
      i,
      p.chunks.length,
      null,
      s.formatContext,
      p.lastPushedText,
      !0
    );
    return p.children.push(R), p.lastPushedText = !1, bi(
      i,
      g,
      s.node,
      s.childIndex,
      s.blockedBoundary,
      R,
      s.blockedPreamble,
      s.hoistableState,
      s.abortSet,
      s.keyPath,
      s.formatContext,
      s.context,
      s.treeContext,
      s.componentStack,
      s.isFallback
    );
  }
  function co(i, s, g, p) {
    var R = s.formatContext, P = s.context, B = s.keyPath, oe = s.treeContext, ee = s.componentStack, ie = s.blockedSegment;
    if (ie === null)
      try {
        return Nt(i, s, g, p);
      } catch (Ie) {
        if (la(), g = Ie === so ? vt() : Ie, typeof g == "object" && g !== null) {
          if (typeof g.then == "function") {
            p = Lo(), i = Cs(i, s, p).ping, g.then(i, i), s.formatContext = R, s.context = P, s.keyPath = B, s.treeContext = oe, s.componentStack = ee, lo(P);
            return;
          }
          if (g.message === "Maximum call stack size exceeded") {
            g = Lo(), g = Cs(i, s, g), i.pingedTasks.push(g), s.formatContext = R, s.context = P, s.keyPath = B, s.treeContext = oe, s.componentStack = ee, lo(P);
            return;
          }
        }
      }
    else {
      var De = ie.children.length, pe = ie.chunks.length;
      try {
        return Nt(i, s, g, p);
      } catch (Ie) {
        if (la(), ie.children.length = De, ie.chunks.length = pe, g = Ie === so ? vt() : Ie, typeof g == "object" && g !== null) {
          if (typeof g.then == "function") {
            p = Lo(), i = ca(i, s, p).ping, g.then(i, i), s.formatContext = R, s.context = P, s.keyPath = B, s.treeContext = oe, s.componentStack = ee, lo(P);
            return;
          }
          if (g.message === "Maximum call stack size exceeded") {
            g = Lo(), g = ca(i, s, g), i.pingedTasks.push(g), s.formatContext = R, s.context = P, s.keyPath = B, s.treeContext = oe, s.componentStack = ee, lo(P);
            return;
          }
        }
      }
    }
    throw s.formatContext = R, s.context = P, s.keyPath = B, s.treeContext = oe, lo(P), g;
  }
  function su(i) {
    var s = i.blockedBoundary;
    i = i.blockedSegment, i !== null && (i.status = 3, sc(this, s, i));
  }
  function Kt(i, s, g, p, R, P) {
    for (var B = 0; B < g.length; B++) {
      var oe = g[B];
      if (oe.length === 4)
        Kt(
          i,
          s,
          oe[2],
          oe[3],
          R,
          P
        );
      else {
        oe = oe[5];
        var ee = i, ie = P, De = Wo(
          ee,
          /* @__PURE__ */ new Set(),
          null,
          null
        );
        De.parentFlushed = !0, De.rootSegmentID = oe, De.status = 4, De.errorDigest = ie, De.parentFlushed && ee.clientRenderedBoundaries.push(De);
      }
    }
    if (g.length = 0, p !== null) {
      if (s === null) throw Error(f(487));
      if (s.status !== 4 && (s.status = 4, s.errorDigest = P, s.parentFlushed && i.clientRenderedBoundaries.push(s)), typeof p == "object") for (var pe in p) delete p[pe];
    }
  }
  function Cr(i, s, g) {
    var p = i.blockedBoundary, R = i.blockedSegment;
    if (R !== null) {
      if (R.status === 6) return;
      R.status = 3;
    }
    if (R = Ft(i.componentStack), p === null) {
      if (s.status !== 13 && s.status !== 14) {
        if (p = i.replay, p === null) {
          Xr(s, g, R), yi(s, g);
          return;
        }
        p.pendingTasks--, p.pendingTasks === 0 && 0 < p.nodes.length && (i = Xr(s, g, R), Kt(
          s,
          null,
          p.nodes,
          p.slots,
          g,
          i
        )), s.pendingRootTasks--, s.pendingRootTasks === 0 && rt(s);
      }
    } else
      p.pendingTasks--, p.status !== 4 && (p.status = 4, i = Xr(s, g, R), p.status = 4, p.errorDigest = i, Il(s, p), p.parentFlushed && s.clientRenderedBoundaries.push(p)), p.fallbackAbortableTasks.forEach(function(P) {
        return Cr(P, s, g);
      }), p.fallbackAbortableTasks.clear();
    s.allPendingTasks--, s.allPendingTasks === 0 && Fn(s);
  }
  function Er(i, s) {
    try {
      var g = i.renderState, p = g.onHeaders;
      if (p) {
        var R = g.headers;
        if (R) {
          g.headers = null;
          var P = R.preconnects;
          if (R.fontPreloads && (P && (P += ", "), P += R.fontPreloads), R.highImagePreloads && (P && (P += ", "), P += R.highImagePreloads), !s) {
            var B = g.styles.values(), oe = B.next();
            e: for (; 0 < R.remainingCapacity && !oe.done; oe = B.next())
              for (var ee = oe.value.sheets.values(), ie = ee.next(); 0 < R.remainingCapacity && !ie.done; ie = ee.next()) {
                var De = ie.value, pe = De.props, Ie = pe.href, Ue = De.props, an = Yr(Ue.href, "style", {
                  crossOrigin: Ue.crossOrigin,
                  integrity: Ue.integrity,
                  nonce: Ue.nonce,
                  type: Ue.type,
                  fetchPriority: Ue.fetchPriority,
                  referrerPolicy: Ue.referrerPolicy,
                  media: Ue.media
                });
                if (0 <= (R.remainingCapacity -= an.length + 2))
                  g.resets.style[Ie] = _e, P && (P += ", "), P += an, g.resets.style[Ie] = typeof pe.crossOrigin == "string" || typeof pe.integrity == "string" ? [pe.crossOrigin, pe.integrity] : _e;
                else break e;
              }
          }
          p(P ? { Link: P } : {});
        }
      }
    } catch (Ge) {
      Xr(i, Ge, {});
    }
  }
  function rt(i) {
    i.trackedPostpones === null && Er(i, !0), i.trackedPostpones === null && _a(i), i.onShellError = sa, i = i.onShellReady, i();
  }
  function Fn(i) {
    Er(
      i,
      i.trackedPostpones === null ? !0 : i.completedRootSegment === null || i.completedRootSegment.status !== 5
    ), _a(i), i = i.onAllReady, i();
  }
  function Es(i, s) {
    if (s.chunks.length === 0 && s.children.length === 1 && s.children[0].boundary === null && s.children[0].id === -1) {
      var g = s.children[0];
      g.id = s.id, g.parentFlushed = !0, g.status === 1 && Es(i, g);
    } else i.completedSegments.push(s);
  }
  function sc(i, s, g) {
    if (s === null) {
      if (g !== null && g.parentFlushed) {
        if (i.completedRootSegment !== null)
          throw Error(f(389));
        i.completedRootSegment = g;
      }
      i.pendingRootTasks--, i.pendingRootTasks === 0 && rt(i);
    } else
      s.pendingTasks--, s.status !== 4 && (s.pendingTasks === 0 ? (s.status === 0 && (s.status = 1), g !== null && g.parentFlushed && g.status === 1 && Es(s, g), s.parentFlushed && i.completedBoundaries.push(s), s.status === 1 && (s.fallbackAbortableTasks.forEach(su, i), s.fallbackAbortableTasks.clear(), i.pendingRootTasks === 0 && i.trackedPostpones === null && s.contentPreamble !== null && _a(i))) : g !== null && g.parentFlushed && g.status === 1 && (Es(s, g), s.completedSegments.length === 1 && s.parentFlushed && i.partialBoundaries.push(s)));
    i.allPendingTasks--, i.allPendingTasks === 0 && Fn(i);
  }
  function Dc(i) {
    if (i.status !== 14 && i.status !== 13) {
      var s = oi, g = on.H;
      on.H = ci;
      var p = on.A;
      on.A = ui;
      var R = ur;
      ur = i;
      var P = Ji;
      Ji = i.resumableState;
      try {
        var B = i.pingedTasks, oe;
        for (oe = 0; oe < B.length; oe++) {
          var ee = B[oe], ie = i, De = ee.blockedSegment;
          if (De === null) {
            var pe = ie;
            if (ee.replay.pendingTasks !== 0) {
              lo(ee.context);
              try {
                if (typeof ee.replay.slots == "number" ? Ts(
                  pe,
                  ee,
                  ee.replay.slots,
                  ee.node,
                  ee.childIndex
                ) : ic(pe, ee), ee.replay.pendingTasks === 1 && 0 < ee.replay.nodes.length)
                  throw Error(f(488));
                ee.replay.pendingTasks--, ee.abortSet.delete(ee), sc(pe, ee.blockedBoundary, null);
              } catch (Dn) {
                la();
                var Ie = Dn === so ? vt() : Dn;
                if (typeof Ie == "object" && Ie !== null && typeof Ie.then == "function") {
                  var Ue = ee.ping;
                  Ie.then(Ue, Ue), ee.thenableState = Lo();
                } else {
                  ee.replay.pendingTasks--, ee.abortSet.delete(ee);
                  var an = Ft(ee.componentStack);
                  ie = void 0;
                  var Ge = pe, En = ee.blockedBoundary, On = pe.status === 12 ? pe.fatalError : Ie, kn = ee.replay.nodes, Yn = ee.replay.slots;
                  ie = Xr(
                    Ge,
                    On,
                    an
                  ), Kt(
                    Ge,
                    En,
                    kn,
                    Yn,
                    On,
                    ie
                  ), pe.pendingRootTasks--, pe.pendingRootTasks === 0 && rt(pe), pe.allPendingTasks--, pe.allPendingTasks === 0 && Fn(pe);
                }
              } finally {
              }
            }
          } else if (pe = void 0, Ge = De, Ge.status === 0) {
            Ge.status = 6, lo(ee.context);
            var Ze = Ge.children.length, yn = Ge.chunks.length;
            try {
              ic(ie, ee), fs(
                Ge.chunks,
                ie.renderState,
                Ge.lastPushedText,
                Ge.textEmbedded
              ), ee.abortSet.delete(ee), Ge.status = 1, sc(ie, ee.blockedBoundary, Ge);
            } catch (Dn) {
              la(), Ge.children.length = Ze, Ge.chunks.length = yn;
              var ln = Dn === so ? vt() : ie.status === 12 ? ie.fatalError : Dn;
              if (typeof ln == "object" && ln !== null && typeof ln.then == "function") {
                Ge.status = 0, ee.thenableState = Lo();
                var zt = ee.ping;
                ln.then(zt, zt);
              } else {
                var fr = Ft(ee.componentStack);
                ee.abortSet.delete(ee), Ge.status = 4;
                var Je = ee.blockedBoundary;
                pe = Xr(
                  ie,
                  ln,
                  fr
                ), Je === null ? yi(ie, ln) : (Je.pendingTasks--, Je.status !== 4 && (Je.status = 4, Je.errorDigest = pe, Il(ie, Je), Je.parentFlushed && ie.clientRenderedBoundaries.push(Je), ie.pendingRootTasks === 0 && ie.trackedPostpones === null && Je.contentPreamble !== null && _a(ie))), ie.allPendingTasks--, ie.allPendingTasks === 0 && Fn(ie);
              }
            } finally {
            }
          }
        }
        B.splice(0, oe), i.destination !== null && Bl(i, i.destination);
      } catch (Dn) {
        Xr(i, Dn, {}), yi(i, Dn);
      } finally {
        Ji = P, on.H = g, on.A = p, g === ci && lo(s), ur = R;
      }
    }
  }
  function _c(i, s, g) {
    s.preambleChildren.length && g.push(s.preambleChildren);
    for (var p = !1, R = 0; R < s.children.length; R++)
      p = Dl(
        i,
        s.children[R],
        g
      ) || p;
    return p;
  }
  function Dl(i, s, g) {
    var p = s.boundary;
    if (p === null)
      return _c(
        i,
        s,
        g
      );
    var R = p.contentPreamble, P = p.fallbackPreamble;
    if (R === null || P === null) return !1;
    switch (p.status) {
      case 1:
        if (Bo(i.renderState, R), s = p.completedSegments[0], !s) throw Error(f(391));
        return _c(
          i,
          s,
          g
        );
      case 5:
        if (i.trackedPostpones !== null) return !0;
      case 4:
        if (s.status === 1)
          return Bo(i.renderState, P), _c(
            i,
            s,
            g
          );
      default:
        return !0;
    }
  }
  function _a(i) {
    if (i.completedRootSegment && i.completedPreambleSegments === null) {
      var s = [], g = Dl(
        i,
        i.completedRootSegment,
        s
      ), p = i.renderState.preamble;
      (g === !1 || p.headChunks && p.bodyChunks) && (i.completedPreambleSegments = s);
    }
  }
  function Eo(i, s, g, p) {
    switch (g.parentFlushed = !0, g.status) {
      case 0:
        g.id = i.nextSegmentId++;
      case 5:
        return p = g.id, g.lastPushedText = !1, g.textEmbedded = !1, i = i.renderState, s.push('<template id="'), s.push(i.placeholderPrefix), i = p.toString(16), s.push(i), s.push('"></template>');
      case 1:
        g.status = 2;
        var R = !0, P = g.chunks, B = 0;
        g = g.children;
        for (var oe = 0; oe < g.length; oe++) {
          for (R = g[oe]; B < R.index; B++)
            s.push(P[B]);
          R = Zr(i, s, R, p);
        }
        for (; B < P.length - 1; B++)
          s.push(P[B]);
        return B < P.length && (R = s.push(P[B])), R;
      default:
        throw Error(f(390));
    }
  }
  function Zr(i, s, g, p) {
    var R = g.boundary;
    if (R === null)
      return Eo(i, s, g, p);
    if (R.parentFlushed = !0, R.status === 4) {
      if (!i.renderState.generateStaticMarkup) {
        var P = R.errorDigest;
        s.push("<!--$!-->"), s.push("<template"), P && (s.push(' data-dgst="'), P = Ce(P), s.push(P), s.push('"')), s.push("></template>");
      }
      return Eo(i, s, g, p), i.renderState.generateStaticMarkup ? s = !0 : ((i = R.fallbackPreamble) && ec(s, i), s = s.push("<!--/$-->")), s;
    }
    if (R.status !== 1)
      return R.status === 0 && (R.rootSegmentID = i.nextSegmentId++), 0 < R.completedSegments.length && i.partialBoundaries.push(R), Pc(
        s,
        i.renderState,
        R.rootSegmentID
      ), p && (R = R.fallbackState, R.styles.forEach(tc, p), R.stylesheets.forEach(
        lu,
        p
      )), Eo(i, s, g, p), s.push("<!--/$-->");
    if (R.byteSize > i.progressiveChunkSize)
      return R.rootSegmentID = i.nextSegmentId++, i.completedBoundaries.push(R), Pc(
        s,
        i.renderState,
        R.rootSegmentID
      ), Eo(i, s, g, p), s.push("<!--/$-->");
    if (p && (g = R.contentState, g.styles.forEach(tc, p), g.stylesheets.forEach(lu, p)), i.renderState.generateStaticMarkup || s.push("<!--$-->"), g = R.completedSegments, g.length !== 1) throw Error(f(391));
    return Zr(i, s, g[0], p), i.renderState.generateStaticMarkup ? s = !0 : ((i = R.contentPreamble) && ec(s, i), s = s.push("<!--/$-->")), s;
  }
  function _l(i, s, g, p) {
    return us(
      s,
      i.renderState,
      g.parentFormatContext,
      g.id
    ), Zr(i, s, g, p), Hn(s, g.parentFormatContext);
  }
  function xs(i, s, g) {
    for (var p = g.completedSegments, R = 0; R < p.length; R++)
      cc(
        i,
        s,
        g,
        p[R]
      );
    p.length = 0, ni(
      s,
      g.contentState,
      i.renderState
    ), p = i.resumableState, i = i.renderState, R = g.rootSegmentID, g = g.contentState;
    var P = i.stylesToHoist;
    return i.stylesToHoist = !1, s.push(i.startInlineScript), P ? (p.instructions & 2) === 0 ? (p.instructions |= 10, s.push(
      `$RC=function(b,c,e){c=document.getElementById(c);c.parentNode.removeChild(c);var a=document.getElementById(b);if(a){b=a.previousSibling;if(e)b.data="$!",a.setAttribute("data-dgst",e);else{e=b.parentNode;a=b.nextSibling;var f=0;do{if(a&&8===a.nodeType){var d=a.data;if("/$"===d)if(0===f)break;else f--;else"$"!==d&&"$?"!==d&&"$!"!==d||f++}d=a.nextSibling;e.removeChild(a);a=d}while(a);for(;c.firstChild;)e.insertBefore(c.firstChild,a);b.data="$"}b._reactRetry&&b._reactRetry()}};$RM=new Map;
$RR=function(t,u,y){function v(n){this._p=null;n()}for(var w=$RC,p=$RM,q=new Map,r=document,g,b,h=r.querySelectorAll("link[data-precedence],style[data-precedence]"),x=[],k=0;b=h[k++];)"not all"===b.getAttribute("media")?x.push(b):("LINK"===b.tagName&&p.set(b.getAttribute("href"),b),q.set(b.dataset.precedence,g=b));b=0;h=[];var l,a;for(k=!0;;){if(k){var e=y[b++];if(!e){k=!1;b=0;continue}var c=!1,m=0;var d=e[m++];if(a=p.get(d)){var f=a._p;c=!0}else{a=r.createElement("link");a.href=
d;a.rel="stylesheet";for(a.dataset.precedence=l=e[m++];f=e[m++];)a.setAttribute(f,e[m++]);f=a._p=new Promise(function(n,z){a.onload=v.bind(a,n);a.onerror=v.bind(a,z)});p.set(d,a)}d=a.getAttribute("media");!f||d&&!matchMedia(d).matches||h.push(f);if(c)continue}else{a=x[b++];if(!a)break;l=a.getAttribute("data-precedence");a.removeAttribute("media")}c=q.get(l)||g;c===g&&(g=a);q.set(l,a);c?c.parentNode.insertBefore(a,c.nextSibling):(c=r.head,c.insertBefore(a,c.firstChild))}Promise.all(h).then(w.bind(null,
t,u,""),w.bind(null,t,u,"Resource failed to load"))};$RR("`
    )) : (p.instructions & 8) === 0 ? (p.instructions |= 8, s.push(
      `$RM=new Map;
$RR=function(t,u,y){function v(n){this._p=null;n()}for(var w=$RC,p=$RM,q=new Map,r=document,g,b,h=r.querySelectorAll("link[data-precedence],style[data-precedence]"),x=[],k=0;b=h[k++];)"not all"===b.getAttribute("media")?x.push(b):("LINK"===b.tagName&&p.set(b.getAttribute("href"),b),q.set(b.dataset.precedence,g=b));b=0;h=[];var l,a;for(k=!0;;){if(k){var e=y[b++];if(!e){k=!1;b=0;continue}var c=!1,m=0;var d=e[m++];if(a=p.get(d)){var f=a._p;c=!0}else{a=r.createElement("link");a.href=
d;a.rel="stylesheet";for(a.dataset.precedence=l=e[m++];f=e[m++];)a.setAttribute(f,e[m++]);f=a._p=new Promise(function(n,z){a.onload=v.bind(a,n);a.onerror=v.bind(a,z)});p.set(d,a)}d=a.getAttribute("media");!f||d&&!matchMedia(d).matches||h.push(f);if(c)continue}else{a=x[b++];if(!a)break;l=a.getAttribute("data-precedence");a.removeAttribute("media")}c=q.get(l)||g;c===g&&(g=a);q.set(l,a);c?c.parentNode.insertBefore(a,c.nextSibling):(c=r.head,c.insertBefore(a,c.firstChild))}Promise.all(h).then(w.bind(null,
t,u,""),w.bind(null,t,u,"Resource failed to load"))};$RR("`
    )) : s.push('$RR("') : (p.instructions & 2) === 0 ? (p.instructions |= 2, s.push(
      '$RC=function(b,c,e){c=document.getElementById(c);c.parentNode.removeChild(c);var a=document.getElementById(b);if(a){b=a.previousSibling;if(e)b.data="$!",a.setAttribute("data-dgst",e);else{e=b.parentNode;a=b.nextSibling;var f=0;do{if(a&&8===a.nodeType){var d=a.data;if("/$"===d)if(0===f)break;else f--;else"$"!==d&&"$?"!==d&&"$!"!==d||f++}d=a.nextSibling;e.removeChild(a);a=d}while(a);for(;c.firstChild;)e.insertBefore(c.firstChild,a);b.data="$"}b._reactRetry&&b._reactRetry()}};$RC("'
    )) : s.push('$RC("'), p = R.toString(16), s.push(i.boundaryPrefix), s.push(p), s.push('","'), s.push(i.segmentPrefix), s.push(p), P ? (s.push('",'), Wi(s, g)) : s.push('"'), g = s.push(")<\/script>"), $s(s, i) && g;
  }
  function cc(i, s, g, p) {
    if (p.status === 2) return !0;
    var R = g.contentState, P = p.id;
    if (P === -1) {
      if ((p.id = g.rootSegmentID) === -1)
        throw Error(f(392));
      return _l(i, s, p, R);
    }
    return P === g.rootSegmentID ? _l(i, s, p, R) : (_l(i, s, p, R), g = i.resumableState, i = i.renderState, s.push(i.startInlineScript), (g.instructions & 1) === 0 ? (g.instructions |= 1, s.push(
      '$RS=function(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)};$RS("'
    )) : s.push('$RS("'), s.push(i.segmentPrefix), P = P.toString(16), s.push(P), s.push('","'), s.push(i.placeholderPrefix), s.push(P), s = s.push('")<\/script>'), s);
  }
  function Bl(i, s) {
    try {
      if (!(0 < i.pendingRootTasks)) {
        var g, p = i.completedRootSegment;
        if (p !== null) {
          if (p.status === 5) return;
          var R = i.completedPreambleSegments;
          if (R === null) return;
          var P = i.renderState, B = P.preamble, oe = B.htmlChunks, ee = B.headChunks, ie;
          if (oe) {
            for (ie = 0; ie < oe.length; ie++)
              s.push(oe[ie]);
            if (ee)
              for (ie = 0; ie < ee.length; ie++)
                s.push(ee[ie]);
            else {
              var De = Rn("head");
              s.push(De), s.push(">");
            }
          } else if (ee)
            for (ie = 0; ie < ee.length; ie++)
              s.push(ee[ie]);
          var pe = P.charsetChunks;
          for (ie = 0; ie < pe.length; ie++)
            s.push(pe[ie]);
          pe.length = 0, P.preconnects.forEach(Hr, s), P.preconnects.clear();
          var Ie = P.viewportChunks;
          for (ie = 0; ie < Ie.length; ie++)
            s.push(Ie[ie]);
          Ie.length = 0, P.fontPreloads.forEach(Hr, s), P.fontPreloads.clear(), P.highImagePreloads.forEach(Hr, s), P.highImagePreloads.clear(), P.styles.forEach(Sl, s);
          var Ue = P.importMapChunks;
          for (ie = 0; ie < Ue.length; ie++)
            s.push(Ue[ie]);
          Ue.length = 0, P.bootstrapScripts.forEach(Hr, s), P.scripts.forEach(Hr, s), P.scripts.clear(), P.bulkPreloads.forEach(Hr, s), P.bulkPreloads.clear();
          var an = P.hoistableChunks;
          for (ie = 0; ie < an.length; ie++)
            s.push(an[ie]);
          for (P = an.length = 0; P < R.length; P++) {
            var Ge = R[P];
            for (B = 0; B < Ge.length; B++)
              Zr(i, s, Ge[B], null);
          }
          var En = i.renderState.preamble, On = En.headChunks;
          if (En.htmlChunks || On) {
            var kn = $a("head");
            s.push(kn);
          }
          var Yn = En.bodyChunks;
          if (Yn)
            for (R = 0; R < Yn.length; R++)
              s.push(Yn[R]);
          Zr(i, s, p, null), i.completedRootSegment = null, $s(s, i.renderState);
        }
        var Ze = i.renderState;
        p = 0;
        var yn = Ze.viewportChunks;
        for (p = 0; p < yn.length; p++)
          s.push(yn[p]);
        yn.length = 0, Ze.preconnects.forEach(Hr, s), Ze.preconnects.clear(), Ze.fontPreloads.forEach(Hr, s), Ze.fontPreloads.clear(), Ze.highImagePreloads.forEach(
          Hr,
          s
        ), Ze.highImagePreloads.clear(), Ze.styles.forEach(Zn, s), Ze.scripts.forEach(Hr, s), Ze.scripts.clear(), Ze.bulkPreloads.forEach(Hr, s), Ze.bulkPreloads.clear();
        var ln = Ze.hoistableChunks;
        for (p = 0; p < ln.length; p++)
          s.push(ln[p]);
        ln.length = 0;
        var zt = i.clientRenderedBoundaries;
        for (g = 0; g < zt.length; g++) {
          var fr = zt[g];
          Ze = s;
          var Je = i.resumableState, Dn = i.renderState, pt = fr.rootSegmentID, Ot = fr.errorDigest;
          Ze.push(Dn.startInlineScript), (Je.instructions & 4) === 0 ? (Je.instructions |= 4, Ze.push(
            '$RX=function(b,c,d,e,f){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),f&&(a.cstck=f),b._reactRetry&&b._reactRetry())};;$RX("'
          )) : Ze.push('$RX("'), Ze.push(Dn.boundaryPrefix);
          var Ho = pt.toString(16);
          if (Ze.push(Ho), Ze.push('"'), Ot) {
            Ze.push(",");
            var Ln = Jt(
              Ot || ""
            );
            Ze.push(Ln);
          }
          var wt = Ze.push(")<\/script>");
          if (!wt) {
            i.destination = null, g++, zt.splice(0, g);
            return;
          }
        }
        zt.splice(0, g);
        var Rr = i.completedBoundaries;
        for (g = 0; g < Rr.length; g++)
          if (!xs(i, s, Rr[g])) {
            i.destination = null, g++, Rr.splice(0, g);
            return;
          }
        Rr.splice(0, g);
        var dr = i.partialBoundaries;
        for (g = 0; g < dr.length; g++) {
          var Yo = dr[g];
          e: {
            zt = i, fr = s;
            var hr = Yo.completedSegments;
            for (wt = 0; wt < hr.length; wt++)
              if (!cc(
                zt,
                fr,
                Yo,
                hr[wt]
              )) {
                wt++, hr.splice(0, wt);
                var xo = !1;
                break e;
              }
            hr.splice(0, wt), xo = ni(
              fr,
              Yo.contentState,
              zt.renderState
            );
          }
          if (!xo) {
            i.destination = null, g++, dr.splice(0, g);
            return;
          }
        }
        dr.splice(0, g);
        var Vr = i.completedBoundaries;
        for (g = 0; g < Vr.length; g++)
          if (!xs(i, s, Vr[g])) {
            i.destination = null, g++, Vr.splice(0, g);
            return;
          }
        Vr.splice(0, g);
      }
    } finally {
      i.allPendingTasks === 0 && i.pingedTasks.length === 0 && i.clientRenderedBoundaries.length === 0 && i.completedBoundaries.length === 0 && (i.flushScheduled = !1, g = i.resumableState, g.hasBody && (dr = $a("body"), s.push(dr)), g.hasHtml && (g = $a("html"), s.push(g)), i.status = 14, s.push(null), i.destination = null);
    }
  }
  function Lt(i) {
    if (i.flushScheduled === !1 && i.pingedTasks.length === 0 && i.destination !== null) {
      i.flushScheduled = !0;
      var s = i.destination;
      s ? Bl(i, s) : i.flushScheduled = !1;
    }
  }
  function ku(i, s) {
    if (i.status === 13)
      i.status = 14, s.destroy(i.fatalError);
    else if (i.status !== 14 && i.destination === null) {
      i.destination = s;
      try {
        Bl(i, s);
      } catch (g) {
        Xr(i, g, {}), yi(i, g);
      }
    }
  }
  function xr(i, s) {
    (i.status === 11 || i.status === 10) && (i.status = 12);
    try {
      var g = i.abortableTasks;
      if (0 < g.size) {
        var p = s === void 0 ? Error(f(432)) : typeof s == "object" && s !== null && typeof s.then == "function" ? Error(f(530)) : s;
        i.fatalError = p, g.forEach(function(R) {
          return Cr(R, i, p);
        }), g.clear();
      }
      i.destination !== null && Bl(i, i.destination);
    } catch (R) {
      Xr(i, R, {}), yi(i, R);
    }
  }
  function Bc() {
  }
  function vi(i, s, g, p) {
    var R = !1, P = null, B = "", oe = !1;
    if (s = Tn(s ? s.identifierPrefix : void 0), i = ji(
      i,
      s,
      Pa(s, g),
      He(0, null, 0),
      1 / 0,
      Bc,
      void 0,
      function() {
        oe = !0;
      },
      void 0,
      void 0,
      void 0
    ), i.flushScheduled = i.destination !== null, Dc(i), i.status === 10 && (i.status = 11), i.trackedPostpones === null && Er(i, i.pendingRootTasks === 0), xr(i, p), ku(i, {
      push: function(ee) {
        return ee !== null && (B += ee), !0;
      },
      destroy: function(ee) {
        R = !0, P = ee;
      }
    }), R && P !== p) throw P;
    if (!oe) throw Error(f(426));
    return B;
  }
  return uf.renderToStaticMarkup = function(i, s) {
    return vi(
      i,
      s,
      !0,
      'The server used "renderToStaticMarkup" which does not support Suspense. If you intended to have the server wait for the suspended component please switch to "renderToReadableStream" which supports Suspense on the server'
    );
  }, uf.renderToString = function(i, s) {
    return vi(
      i,
      s,
      !1,
      'The server used "renderToString" which does not support Suspense. If you intended for this Suspense boundary to render the fallback content on the server consider throwing an Error somewhere within the Suspense boundary. If you intended to have the server wait for the suspended component please switch to "renderToReadableStream" which supports Suspense on the server'
    );
  }, uf.version = "19.1.0", uf;
}
var ff = {};
/**
 * @license React
 * react-dom-server.browser.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Bh;
function yp() {
  if (Bh) return ff;
  Bh = 1;
  var o = nu, d = Uf;
  function f(a) {
    var l = "https://react.dev/errors/" + a;
    if (1 < arguments.length) {
      l += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var h = 2; h < arguments.length; h++)
        l += "&args[]=" + encodeURIComponent(arguments[h]);
    }
    return "Minified React error #" + a + "; visit " + l + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var b = Symbol.for("react.transitional.element"), T = Symbol.for("react.portal"), S = Symbol.for("react.fragment"), A = Symbol.for("react.strict_mode"), O = Symbol.for("react.profiler"), Y = Symbol.for("react.provider"), Z = Symbol.for("react.consumer"), M = Symbol.for("react.context"), J = Symbol.for("react.forward_ref"), re = Symbol.for("react.suspense"), V = Symbol.for("react.suspense_list"), _ = Symbol.for("react.memo"), N = Symbol.for("react.lazy"), Pe = Symbol.for("react.scope"), Me = Symbol.for("react.activity"), je = Symbol.for("react.legacy_hidden"), ke = Symbol.for("react.memo_cache_sentinel"), ge = Symbol.for("react.view_transition"), $ = Symbol.iterator, Xe = Array.isArray;
  function vn(a, l) {
    var h = a.length & 3, w = a.length - h, x = l;
    for (l = 0; l < w; ) {
      var F = a.charCodeAt(l) & 255 | (a.charCodeAt(++l) & 255) << 8 | (a.charCodeAt(++l) & 255) << 16 | (a.charCodeAt(++l) & 255) << 24;
      ++l, F = 3432918353 * (F & 65535) + ((3432918353 * (F >>> 16) & 65535) << 16) & 4294967295, F = F << 15 | F >>> 17, F = 461845907 * (F & 65535) + ((461845907 * (F >>> 16) & 65535) << 16) & 4294967295, x ^= F, x = x << 13 | x >>> 19, x = 5 * (x & 65535) + ((5 * (x >>> 16) & 65535) << 16) & 4294967295, x = (x & 65535) + 27492 + (((x >>> 16) + 58964 & 65535) << 16);
    }
    switch (F = 0, h) {
      case 3:
        F ^= (a.charCodeAt(l + 2) & 255) << 16;
      case 2:
        F ^= (a.charCodeAt(l + 1) & 255) << 8;
      case 1:
        F ^= a.charCodeAt(l) & 255, F = 3432918353 * (F & 65535) + ((3432918353 * (F >>> 16) & 65535) << 16) & 4294967295, F = F << 15 | F >>> 17, x ^= 461845907 * (F & 65535) + ((461845907 * (F >>> 16) & 65535) << 16) & 4294967295;
    }
    return x ^= a.length, x ^= x >>> 16, x = 2246822507 * (x & 65535) + ((2246822507 * (x >>> 16) & 65535) << 16) & 4294967295, x ^= x >>> 13, x = 3266489909 * (x & 65535) + ((3266489909 * (x >>> 16) & 65535) << 16) & 4294967295, (x ^ x >>> 16) >>> 0;
  }
  var un = new MessageChannel(), Ke = [];
  un.port1.onmessage = function() {
    var a = Ke.shift();
    a && a();
  };
  function I(a) {
    Ke.push(a), un.port2.postMessage(null);
  }
  function Oe(a) {
    setTimeout(function() {
      throw a;
    });
  }
  var Be = Promise, ye = typeof queueMicrotask == "function" ? queueMicrotask : function(a) {
    Be.resolve(null).then(a).catch(Oe);
  }, Le = null, dn = 0;
  function te(a, l) {
    if (l.byteLength !== 0)
      if (2048 < l.byteLength)
        0 < dn && (a.enqueue(
          new Uint8Array(Le.buffer, 0, dn)
        ), Le = new Uint8Array(2048), dn = 0), a.enqueue(l);
      else {
        var h = Le.length - dn;
        h < l.byteLength && (h === 0 ? a.enqueue(Le) : (Le.set(l.subarray(0, h), dn), a.enqueue(Le), l = l.subarray(h)), Le = new Uint8Array(2048), dn = 0), Le.set(l, dn), dn += l.byteLength;
      }
  }
  function Ce(a, l) {
    return te(a, l), !0;
  }
  function Xn(a) {
    Le && 0 < dn && (a.enqueue(new Uint8Array(Le.buffer, 0, dn)), Le = null, dn = 0);
  }
  var ze = new TextEncoder();
  function q(a) {
    return ze.encode(a);
  }
  function Q(a) {
    return ze.encode(a);
  }
  function on(a, l) {
    typeof a.error == "function" ? a.error(l) : a.close();
  }
  var Qe = Object.assign, Re = Object.prototype.hasOwnProperty, me = RegExp(
    "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
  ), _e = {}, $e = {};
  function fn(a) {
    return Re.call($e, a) ? !0 : Re.call(_e, a) ? !1 : me.test(a) ? $e[a] = !0 : (_e[a] = !0, !1);
  }
  var Tn = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  ), Ne = /* @__PURE__ */ new Map([
    ["acceptCharset", "accept-charset"],
    ["htmlFor", "for"],
    ["httpEquiv", "http-equiv"],
    ["crossOrigin", "crossorigin"],
    ["accentHeight", "accent-height"],
    ["alignmentBaseline", "alignment-baseline"],
    ["arabicForm", "arabic-form"],
    ["baselineShift", "baseline-shift"],
    ["capHeight", "cap-height"],
    ["clipPath", "clip-path"],
    ["clipRule", "clip-rule"],
    ["colorInterpolation", "color-interpolation"],
    ["colorInterpolationFilters", "color-interpolation-filters"],
    ["colorProfile", "color-profile"],
    ["colorRendering", "color-rendering"],
    ["dominantBaseline", "dominant-baseline"],
    ["enableBackground", "enable-background"],
    ["fillOpacity", "fill-opacity"],
    ["fillRule", "fill-rule"],
    ["floodColor", "flood-color"],
    ["floodOpacity", "flood-opacity"],
    ["fontFamily", "font-family"],
    ["fontSize", "font-size"],
    ["fontSizeAdjust", "font-size-adjust"],
    ["fontStretch", "font-stretch"],
    ["fontStyle", "font-style"],
    ["fontVariant", "font-variant"],
    ["fontWeight", "font-weight"],
    ["glyphName", "glyph-name"],
    ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
    ["glyphOrientationVertical", "glyph-orientation-vertical"],
    ["horizAdvX", "horiz-adv-x"],
    ["horizOriginX", "horiz-origin-x"],
    ["imageRendering", "image-rendering"],
    ["letterSpacing", "letter-spacing"],
    ["lightingColor", "lighting-color"],
    ["markerEnd", "marker-end"],
    ["markerMid", "marker-mid"],
    ["markerStart", "marker-start"],
    ["overlinePosition", "overline-position"],
    ["overlineThickness", "overline-thickness"],
    ["paintOrder", "paint-order"],
    ["panose-1", "panose-1"],
    ["pointerEvents", "pointer-events"],
    ["renderingIntent", "rendering-intent"],
    ["shapeRendering", "shape-rendering"],
    ["stopColor", "stop-color"],
    ["stopOpacity", "stop-opacity"],
    ["strikethroughPosition", "strikethrough-position"],
    ["strikethroughThickness", "strikethrough-thickness"],
    ["strokeDasharray", "stroke-dasharray"],
    ["strokeDashoffset", "stroke-dashoffset"],
    ["strokeLinecap", "stroke-linecap"],
    ["strokeLinejoin", "stroke-linejoin"],
    ["strokeMiterlimit", "stroke-miterlimit"],
    ["strokeOpacity", "stroke-opacity"],
    ["strokeWidth", "stroke-width"],
    ["textAnchor", "text-anchor"],
    ["textDecoration", "text-decoration"],
    ["textRendering", "text-rendering"],
    ["transformOrigin", "transform-origin"],
    ["underlinePosition", "underline-position"],
    ["underlineThickness", "underline-thickness"],
    ["unicodeBidi", "unicode-bidi"],
    ["unicodeRange", "unicode-range"],
    ["unitsPerEm", "units-per-em"],
    ["vAlphabetic", "v-alphabetic"],
    ["vHanging", "v-hanging"],
    ["vIdeographic", "v-ideographic"],
    ["vMathematical", "v-mathematical"],
    ["vectorEffect", "vector-effect"],
    ["vertAdvY", "vert-adv-y"],
    ["vertOriginX", "vert-origin-x"],
    ["vertOriginY", "vert-origin-y"],
    ["wordSpacing", "word-spacing"],
    ["writingMode", "writing-mode"],
    ["xmlnsXlink", "xmlns:xlink"],
    ["xHeight", "x-height"]
  ]), He = /["'&<>]/;
  function de(a) {
    if (typeof a == "boolean" || typeof a == "number" || typeof a == "bigint")
      return "" + a;
    a = "" + a;
    var l = He.exec(a);
    if (l) {
      var h = "", w, x = 0;
      for (w = l.index; w < a.length; w++) {
        switch (a.charCodeAt(w)) {
          case 34:
            l = "&quot;";
            break;
          case 38:
            l = "&amp;";
            break;
          case 39:
            l = "&#x27;";
            break;
          case 60:
            l = "&lt;";
            break;
          case 62:
            l = "&gt;";
            break;
          default:
            continue;
        }
        x !== w && (h += a.slice(x, w)), x = w + 1, h += l;
      }
      a = x !== w ? h + a.slice(x, w) : h;
    }
    return a;
  }
  var yt = /([A-Z])/g, to = /^ms-/, tt = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function qn(a) {
    return tt.test("" + a) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : a;
  }
  var Zt = o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, _o = d.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, Bi = {
    pending: !1,
    data: null,
    method: null,
    action: null
  }, Vt = _o.d;
  _o.d = {
    f: Vt.f,
    r: Vt.r,
    D: Er,
    C: rt,
    L: Fn,
    m: Es,
    X: Dc,
    S: sc,
    M: _c
  };
  var ut = [];
  Q('"></template>');
  var xe = Q("<script>"), Wr = Q("<\/script>"), qa = Q('<script src="'), ro = Q('<script type="module" src="'), Qt = Q('" nonce="'), Ks = Q('" integrity="'), qs = Q('" crossorigin="'), Ni = Q('" async=""><\/script>'), js = /(<\/|<)(s)(cript)/gi;
  function ma(a, l, h, w) {
    return "" + l + (h === "s" ? "\\u0073" : "\\u0053") + w;
  }
  var ja = Q(
    '<script type="importmap">'
  ), ss = Q("<\/script>");
  function Rl(a, l, h, w, x, F) {
    var L = l === void 0 ? xe : Q(
      '<script nonce="' + de(l) + '">'
    ), ne = a.idPrefix;
    h = [];
    var U = a.bootstrapScriptContent, j = a.bootstrapScripts, we = a.bootstrapModules;
    if (U !== void 0 && h.push(
      L,
      q(
        ("" + U).replace(js, ma)
      ),
      Wr
    ), U = [], w !== void 0 && (U.push(ja), U.push(
      q(
        ("" + JSON.stringify(w)).replace(js, ma)
      )
    ), U.push(ss)), w = x ? {
      preconnects: "",
      fontPreloads: "",
      highImagePreloads: "",
      remainingCapacity: 2 + (typeof F == "number" ? F : 2e3)
    } : null, x = {
      placeholderPrefix: Q(ne + "P:"),
      segmentPrefix: Q(ne + "S:"),
      boundaryPrefix: Q(ne + "B:"),
      startInlineScript: L,
      preamble: Rn(),
      externalRuntimeScript: null,
      bootstrapChunks: h,
      importMapChunks: U,
      onHeaders: x,
      headers: w,
      resets: {
        font: {},
        dns: {},
        connect: { default: {}, anonymous: {}, credentials: {} },
        image: {},
        style: {}
      },
      charsetChunks: [],
      viewportChunks: [],
      hoistableChunks: [],
      preconnects: /* @__PURE__ */ new Set(),
      fontPreloads: /* @__PURE__ */ new Set(),
      highImagePreloads: /* @__PURE__ */ new Set(),
      styles: /* @__PURE__ */ new Map(),
      bootstrapScripts: /* @__PURE__ */ new Set(),
      scripts: /* @__PURE__ */ new Set(),
      bulkPreloads: /* @__PURE__ */ new Set(),
      preloads: {
        images: /* @__PURE__ */ new Map(),
        stylesheets: /* @__PURE__ */ new Map(),
        scripts: /* @__PURE__ */ new Map(),
        moduleScripts: /* @__PURE__ */ new Map()
      },
      nonce: l,
      hoistableState: null,
      stylesToHoist: !1
    }, j !== void 0)
      for (w = 0; w < j.length; w++) {
        var ce = j[w];
        ne = L = void 0, U = {
          rel: "preload",
          as: "script",
          fetchPriority: "low",
          nonce: l
        }, typeof ce == "string" ? U.href = F = ce : (U.href = F = ce.src, U.integrity = ne = typeof ce.integrity == "string" ? ce.integrity : void 0, U.crossOrigin = L = typeof ce == "string" || ce.crossOrigin == null ? void 0 : ce.crossOrigin === "use-credentials" ? "use-credentials" : ""), ce = a;
        var We = F;
        ce.scriptResources[We] = null, ce.moduleScriptResources[We] = null, ce = [], ar(ce, U), x.bootstrapScripts.add(ce), h.push(
          qa,
          q(de(F))
        ), l && h.push(
          Qt,
          q(de(l))
        ), typeof ne == "string" && h.push(
          Ks,
          q(de(ne))
        ), typeof L == "string" && h.push(
          qs,
          q(de(L))
        ), h.push(Ni);
      }
    if (we !== void 0)
      for (j = 0; j < we.length; j++)
        U = we[j], L = F = void 0, ne = {
          rel: "modulepreload",
          fetchPriority: "low",
          nonce: l
        }, typeof U == "string" ? ne.href = w = U : (ne.href = w = U.src, ne.integrity = L = typeof U.integrity == "string" ? U.integrity : void 0, ne.crossOrigin = F = typeof U == "string" || U.crossOrigin == null ? void 0 : U.crossOrigin === "use-credentials" ? "use-credentials" : ""), U = a, ce = w, U.scriptResources[ce] = null, U.moduleScriptResources[ce] = null, U = [], ar(U, ne), x.bootstrapScripts.add(U), h.push(
          ro,
          q(de(w))
        ), l && h.push(
          Qt,
          q(de(l))
        ), typeof L == "string" && h.push(
          Ks,
          q(de(L))
        ), typeof F == "string" && h.push(
          qs,
          q(de(F))
        ), h.push(Ni);
    return x;
  }
  function Li(a, l, h, w, x) {
    return {
      idPrefix: a === void 0 ? "" : a,
      nextFormID: 0,
      streamingFormat: 0,
      bootstrapScriptContent: h,
      bootstrapScripts: w,
      bootstrapModules: x,
      instructions: 0,
      hasBody: !1,
      hasHtml: !1,
      unknownResources: {},
      dnsResources: {},
      connectResources: { default: {}, anonymous: {}, credentials: {} },
      imageResources: {},
      styleResources: {},
      scriptResources: {},
      moduleUnknownResources: {},
      moduleScriptResources: {}
    };
  }
  function Rn() {
    return {
      htmlChunks: null,
      headChunks: null,
      bodyChunks: null,
      contribution: 0
    };
  }
  function Ur(a, l, h) {
    return {
      insertionMode: a,
      selectedValue: l,
      tagScope: h
    };
  }
  function cs(a) {
    return Ur(
      a === "http://www.w3.org/2000/svg" ? 4 : a === "http://www.w3.org/1998/Math/MathML" ? 5 : 0,
      null,
      0
    );
  }
  function $a(a, l, h) {
    switch (l) {
      case "noscript":
        return Ur(2, null, a.tagScope | 1);
      case "select":
        return Ur(
          2,
          h.value != null ? h.value : h.defaultValue,
          a.tagScope
        );
      case "svg":
        return Ur(4, null, a.tagScope);
      case "picture":
        return Ur(2, null, a.tagScope | 2);
      case "math":
        return Ur(5, null, a.tagScope);
      case "foreignObject":
        return Ur(2, null, a.tagScope);
      case "table":
        return Ur(6, null, a.tagScope);
      case "thead":
      case "tbody":
      case "tfoot":
        return Ur(7, null, a.tagScope);
      case "colgroup":
        return Ur(9, null, a.tagScope);
      case "tr":
        return Ur(8, null, a.tagScope);
      case "head":
        if (2 > a.insertionMode)
          return Ur(3, null, a.tagScope);
        break;
      case "html":
        if (a.insertionMode === 0)
          return Ur(1, null, a.tagScope);
    }
    return 6 <= a.insertionMode || 2 > a.insertionMode ? Ur(2, null, a.tagScope) : a;
  }
  var Bo = Q("<!-- -->");
  function $s(a, l, h, w) {
    return l === "" ? w : (w && a.push(Bo), a.push(q(de(l))), !0);
  }
  var Pc = /* @__PURE__ */ new Map(), ec = Q(' style="'), us = Q(":"), Hn = Q(";");
  function ei(a, l) {
    if (typeof l != "object") throw Error(f(62));
    var h = !0, w;
    for (w in l)
      if (Re.call(l, w)) {
        var x = l[w];
        if (x != null && typeof x != "boolean" && x !== "") {
          if (w.indexOf("--") === 0) {
            var F = q(de(w));
            x = q(
              de(("" + x).trim())
            );
          } else
            F = Pc.get(w), F === void 0 && (F = Q(
              de(
                w.replace(yt, "-$1").toLowerCase().replace(to, "-ms-")
              )
            ), Pc.set(w, F)), x = typeof x == "number" ? x === 0 || Tn.has(w) ? q("" + x) : q(x + "px") : q(
              de(("" + x).trim())
            );
          h ? (h = !1, a.push(
            ec,
            F,
            us,
            x
          )) : a.push(Hn, F, us, x);
        }
      }
    h || a.push(Pt);
  }
  var Jt = Q(" "), oo = Q('="'), Pt = Q('"'), zi = Q('=""');
  function ao(a, l, h) {
    h && typeof h != "function" && typeof h != "symbol" && a.push(Jt, q(l), zi);
  }
  function Bt(a, l, h) {
    typeof h != "function" && typeof h != "symbol" && typeof h != "boolean" && a.push(
      Jt,
      q(l),
      oo,
      q(de(h)),
      Pt
    );
  }
  var Qn = Q(
    de(
      "javascript:throw new Error('React form unexpectedly submitted.')"
    )
  ), ni = Q('<input type="hidden"');
  function Hr(a, l) {
    this.push(ni), io(a), Bt(this, "name", l), Bt(this, "value", a), this.push(Wi);
  }
  function io(a) {
    if (typeof a != "string") throw Error(f(480));
  }
  function Fc(a, l) {
    if (typeof l.$$FORM_ACTION == "function") {
      var h = a.nextFormID++;
      a = a.idPrefix + h;
      try {
        var w = l.$$FORM_ACTION(a);
        if (w) {
          var x = w.data;
          x != null && x.forEach(io);
        }
        return w;
      } catch (F) {
        if (typeof F == "object" && F !== null && typeof F.then == "function")
          throw F;
      }
    }
    return null;
  }
  function Sl(a, l, h, w, x, F, L, ne) {
    var U = null;
    if (typeof w == "function") {
      var j = Fc(l, w);
      j !== null ? (ne = j.name, w = j.action || "", x = j.encType, F = j.method, L = j.target, U = j.data) : (a.push(
        Jt,
        q("formAction"),
        oo,
        Qn,
        Pt
      ), L = F = x = w = ne = null, Hi(l, h));
    }
    return ne != null && Cn(a, "name", ne), w != null && Cn(a, "formAction", w), x != null && Cn(a, "formEncType", x), F != null && Cn(a, "formMethod", F), L != null && Cn(a, "formTarget", L), U;
  }
  function Cn(a, l, h) {
    switch (l) {
      case "className":
        Bt(a, "class", h);
        break;
      case "tabIndex":
        Bt(a, "tabindex", h);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        Bt(a, l, h);
        break;
      case "style":
        ei(a, h);
        break;
      case "src":
      case "href":
        if (h === "") break;
      case "action":
      case "formAction":
        if (h == null || typeof h == "function" || typeof h == "symbol" || typeof h == "boolean")
          break;
        h = qn("" + h), a.push(
          Jt,
          q(l),
          oo,
          q(de(h)),
          Pt
        );
        break;
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "ref":
        break;
      case "autoFocus":
      case "multiple":
      case "muted":
        ao(a, l.toLowerCase(), h);
        break;
      case "xlinkHref":
        if (typeof h == "function" || typeof h == "symbol" || typeof h == "boolean")
          break;
        h = qn("" + h), a.push(
          Jt,
          q("xlink:href"),
          oo,
          q(de(h)),
          Pt
        );
        break;
      case "contentEditable":
      case "spellCheck":
      case "draggable":
      case "value":
      case "autoReverse":
      case "externalResourcesRequired":
      case "focusable":
      case "preserveAlpha":
        typeof h != "function" && typeof h != "symbol" && a.push(
          Jt,
          q(l),
          oo,
          q(de(h)),
          Pt
        );
        break;
      case "inert":
      case "allowFullScreen":
      case "async":
      case "autoPlay":
      case "controls":
      case "default":
      case "defer":
      case "disabled":
      case "disablePictureInPicture":
      case "disableRemotePlayback":
      case "formNoValidate":
      case "hidden":
      case "loop":
      case "noModule":
      case "noValidate":
      case "open":
      case "playsInline":
      case "readOnly":
      case "required":
      case "reversed":
      case "scoped":
      case "seamless":
      case "itemScope":
        h && typeof h != "function" && typeof h != "symbol" && a.push(
          Jt,
          q(l),
          zi
        );
        break;
      case "capture":
      case "download":
        h === !0 ? a.push(
          Jt,
          q(l),
          zi
        ) : h !== !1 && typeof h != "function" && typeof h != "symbol" && a.push(
          Jt,
          q(l),
          oo,
          q(de(h)),
          Pt
        );
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        typeof h != "function" && typeof h != "symbol" && !isNaN(h) && 1 <= h && a.push(
          Jt,
          q(l),
          oo,
          q(de(h)),
          Pt
        );
        break;
      case "rowSpan":
      case "start":
        typeof h == "function" || typeof h == "symbol" || isNaN(h) || a.push(
          Jt,
          q(l),
          oo,
          q(de(h)),
          Pt
        );
        break;
      case "xlinkActuate":
        Bt(a, "xlink:actuate", h);
        break;
      case "xlinkArcrole":
        Bt(a, "xlink:arcrole", h);
        break;
      case "xlinkRole":
        Bt(a, "xlink:role", h);
        break;
      case "xlinkShow":
        Bt(a, "xlink:show", h);
        break;
      case "xlinkTitle":
        Bt(a, "xlink:title", h);
        break;
      case "xlinkType":
        Bt(a, "xlink:type", h);
        break;
      case "xmlBase":
        Bt(a, "xml:base", h);
        break;
      case "xmlLang":
        Bt(a, "xml:lang", h);
        break;
      case "xmlSpace":
        Bt(a, "xml:space", h);
        break;
      default:
        if ((!(2 < l.length) || l[0] !== "o" && l[0] !== "O" || l[1] !== "n" && l[1] !== "N") && (l = Ne.get(l) || l, fn(l))) {
          switch (typeof h) {
            case "function":
            case "symbol":
              return;
            case "boolean":
              var w = l.toLowerCase().slice(0, 5);
              if (w !== "data-" && w !== "aria-") return;
          }
          a.push(
            Jt,
            q(l),
            oo,
            q(de(h)),
            Pt
          );
        }
    }
  }
  var Zn = Q(">"), Wi = Q("/>");
  function or(a, l, h) {
    if (l != null) {
      if (h != null) throw Error(f(60));
      if (typeof l != "object" || !("__html" in l))
        throw Error(f(61));
      l = l.__html, l != null && a.push(q("" + l));
    }
  }
  function Ui(a) {
    var l = "";
    return o.Children.forEach(a, function(h) {
      h != null && (l += h);
    }), l;
  }
  var jo = Q(' selected=""'), au = Q(
    `addEventListener("submit",function(a){if(!a.defaultPrevented){var c=a.target,d=a.submitter,e=c.action,b=d;if(d){var f=d.getAttribute("formAction");null!=f&&(e=f,b=null)}"javascript:throw new Error('React form unexpectedly submitted.')"===e&&(a.preventDefault(),b?(a=document.createElement("input"),a.name=b.name,a.value=b.value,b.parentNode.insertBefore(a,b),b=new FormData(c),a.parentNode.removeChild(a)):b=new FormData(c),a=c.ownerDocument||c,(a.$$reactFormReplay=a.$$reactFormReplay||[]).push(c,d,b))}});`
  );
  function Hi(a, l) {
    (a.instructions & 16) === 0 && (a.instructions |= 16, l.bootstrapChunks.unshift(
      l.startInlineScript,
      au,
      Wr
    ));
  }
  var iu = Q("<!--F!-->"), $o = Q("<!--F-->");
  function ar(a, l) {
    a.push(jn("link"));
    for (var h in l)
      if (Re.call(l, h)) {
        var w = l[h];
        if (w != null)
          switch (h) {
            case "children":
            case "dangerouslySetInnerHTML":
              throw Error(f(399, "link"));
            default:
              Cn(a, h, w);
          }
      }
    return a.push(Wi), null;
  }
  var nc = /(<\/|<)(s)(tyle)/gi;
  function No(a, l, h, w) {
    return "" + l + (h === "s" ? "\\73 " : "\\53 ") + w;
  }
  function Yr(a, l, h) {
    a.push(jn(h));
    for (var w in l)
      if (Re.call(l, w)) {
        var x = l[w];
        if (x != null)
          switch (w) {
            case "children":
            case "dangerouslySetInnerHTML":
              throw Error(f(399, h));
            default:
              Cn(a, w, x);
          }
      }
    return a.push(Wi), null;
  }
  function kl(a, l) {
    a.push(jn("title"));
    var h = null, w = null, x;
    for (x in l)
      if (Re.call(l, x)) {
        var F = l[x];
        if (F != null)
          switch (x) {
            case "children":
              h = F;
              break;
            case "dangerouslySetInnerHTML":
              w = F;
              break;
            default:
              Cn(a, x, F);
          }
      }
    return a.push(Zn), l = Array.isArray(h) ? 2 > h.length ? h[0] : null : h, typeof l != "function" && typeof l != "symbol" && l !== null && l !== void 0 && a.push(q(de("" + l))), or(a, w, h), a.push(Tr("title")), null;
  }
  function ti(a, l) {
    a.push(jn("script"));
    var h = null, w = null, x;
    for (x in l)
      if (Re.call(l, x)) {
        var F = l[x];
        if (F != null)
          switch (x) {
            case "children":
              h = F;
              break;
            case "dangerouslySetInnerHTML":
              w = F;
              break;
            default:
              Cn(a, x, F);
          }
      }
    return a.push(Zn), or(a, w, h), typeof h == "string" && a.push(
      q(("" + h).replace(js, ma))
    ), a.push(Tr("script")), null;
  }
  function ea(a, l, h) {
    a.push(jn(h));
    var w = h = null, x;
    for (x in l)
      if (Re.call(l, x)) {
        var F = l[x];
        if (F != null)
          switch (x) {
            case "children":
              h = F;
              break;
            case "dangerouslySetInnerHTML":
              w = F;
              break;
            default:
              Cn(a, x, F);
          }
      }
    return a.push(Zn), or(a, w, h), h;
  }
  function ri(a, l, h) {
    a.push(jn(h));
    var w = h = null, x;
    for (x in l)
      if (Re.call(l, x)) {
        var F = l[x];
        if (F != null)
          switch (x) {
            case "children":
              h = F;
              break;
            case "dangerouslySetInnerHTML":
              w = F;
              break;
            default:
              Cn(a, x, F);
          }
      }
    return a.push(Zn), or(a, w, h), typeof h == "string" ? (a.push(q(de(h))), null) : h;
  }
  var tc = Q(`
`), lu = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/, Pa = /* @__PURE__ */ new Map();
  function jn(a) {
    var l = Pa.get(a);
    if (l === void 0) {
      if (!lu.test(a))
        throw Error(f(65, a));
      l = Q("<" + a), Pa.set(a, l);
    }
    return l;
  }
  var fs = Q("<!DOCTYPE html>");
  function Oc(a, l, h, w, x, F, L, ne, U, j) {
    switch (l) {
      case "div":
      case "span":
      case "svg":
      case "path":
        break;
      case "a":
        a.push(jn("a"));
        var we = null, ce = null, We;
        for (We in h)
          if (Re.call(h, We)) {
            var Ve = h[We];
            if (Ve != null)
              switch (We) {
                case "children":
                  we = Ve;
                  break;
                case "dangerouslySetInnerHTML":
                  ce = Ve;
                  break;
                case "href":
                  Ve === "" ? Bt(a, "href", "") : Cn(a, We, Ve);
                  break;
                default:
                  Cn(a, We, Ve);
              }
          }
        if (a.push(Zn), or(a, ce, we), typeof we == "string") {
          a.push(q(de(we)));
          var en = null;
        } else en = we;
        return en;
      case "g":
      case "p":
      case "li":
        break;
      case "select":
        a.push(jn("select"));
        var sn = null, zn = null, Ct;
        for (Ct in h)
          if (Re.call(h, Ct)) {
            var Sn = h[Ct];
            if (Sn != null)
              switch (Ct) {
                case "children":
                  sn = Sn;
                  break;
                case "dangerouslySetInnerHTML":
                  zn = Sn;
                  break;
                case "defaultValue":
                case "value":
                  break;
                default:
                  Cn(
                    a,
                    Ct,
                    Sn
                  );
              }
          }
        return a.push(Zn), or(a, zn, sn), sn;
      case "option":
        var kr = ne.selectedValue;
        a.push(jn("option"));
        var Et = null, Kr = null, br = null, qt = null, Dr;
        for (Dr in h)
          if (Re.call(h, Dr)) {
            var Wn = h[Dr];
            if (Wn != null)
              switch (Dr) {
                case "children":
                  Et = Wn;
                  break;
                case "selected":
                  br = Wn;
                  break;
                case "dangerouslySetInnerHTML":
                  qt = Wn;
                  break;
                case "value":
                  Kr = Wn;
                default:
                  Cn(
                    a,
                    Dr,
                    Wn
                  );
              }
          }
        if (kr != null) {
          var Mt = Kr !== null ? "" + Kr : Ui(Et);
          if (Xe(kr)) {
            for (var it = 0; it < kr.length; it++)
              if ("" + kr[it] === Mt) {
                a.push(jo);
                break;
              }
          } else
            "" + kr === Mt && a.push(jo);
        } else br && a.push(jo);
        return a.push(Zn), or(a, qt, Et), Et;
      case "textarea":
        a.push(jn("textarea"));
        var yr = null, ll = null, Ua = null, Ha;
        for (Ha in h)
          if (Re.call(h, Ha)) {
            var sl = h[Ha];
            if (sl != null)
              switch (Ha) {
                case "children":
                  Ua = sl;
                  break;
                case "value":
                  yr = sl;
                  break;
                case "defaultValue":
                  ll = sl;
                  break;
                case "dangerouslySetInnerHTML":
                  throw Error(f(91));
                default:
                  Cn(
                    a,
                    Ha,
                    sl
                  );
              }
          }
        if (yr === null && ll !== null && (yr = ll), a.push(Zn), Ua != null) {
          if (yr != null) throw Error(f(92));
          if (Xe(Ua)) {
            if (1 < Ua.length)
              throw Error(f(93));
            yr = "" + Ua[0];
          }
          yr = "" + Ua;
        }
        return typeof yr == "string" && yr[0] === `
` && a.push(tc), yr !== null && a.push(
          q(de("" + yr))
        ), null;
      case "input":
        a.push(jn("input"));
        var Ya = null, Uc = null, ki = null, mu = null, Pu = null, uu = null, gc = null, Fu = null, fu = null, da;
        for (da in h)
          if (Re.call(h, da)) {
            var qr = h[da];
            if (qr != null)
              switch (da) {
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(f(399, "input"));
                case "name":
                  Ya = qr;
                  break;
                case "formAction":
                  Uc = qr;
                  break;
                case "formEncType":
                  ki = qr;
                  break;
                case "formMethod":
                  mu = qr;
                  break;
                case "formTarget":
                  Pu = qr;
                  break;
                case "defaultChecked":
                  fu = qr;
                  break;
                case "defaultValue":
                  gc = qr;
                  break;
                case "checked":
                  Fu = qr;
                  break;
                case "value":
                  uu = qr;
                  break;
                default:
                  Cn(
                    a,
                    da,
                    qr
                  );
              }
          }
        var du = Sl(
          a,
          w,
          x,
          Uc,
          ki,
          mu,
          Pu,
          Ya
        );
        return Fu !== null ? ao(a, "checked", Fu) : fu !== null && ao(a, "checked", fu), uu !== null ? Cn(a, "value", uu) : gc !== null && Cn(a, "value", gc), a.push(Wi), du != null && du.forEach(Hr, a), null;
      case "button":
        a.push(jn("button"));
        var go = null, bc = null, yc = null, Hc = null, Yc = null, Kn = null, vc = null, Yl;
        for (Yl in h)
          if (Re.call(h, Yl)) {
            var It = h[Yl];
            if (It != null)
              switch (Yl) {
                case "children":
                  go = It;
                  break;
                case "dangerouslySetInnerHTML":
                  bc = It;
                  break;
                case "name":
                  yc = It;
                  break;
                case "formAction":
                  Hc = It;
                  break;
                case "formEncType":
                  Yc = It;
                  break;
                case "formMethod":
                  Kn = It;
                  break;
                case "formTarget":
                  vc = It;
                  break;
                default:
                  Cn(
                    a,
                    Yl,
                    It
                  );
              }
          }
        var cl = Sl(
          a,
          w,
          x,
          Hc,
          Yc,
          Kn,
          vc,
          yc
        );
        if (a.push(Zn), cl != null && cl.forEach(Hr, a), or(a, bc, go), typeof go == "string") {
          a.push(
            q(de(go))
          );
          var ha = null;
        } else ha = go;
        return ha;
      case "form":
        a.push(jn("form"));
        var ul = null, Gl = null, bo = null, fl = null, yo = null, mi = null, _s;
        for (_s in h)
          if (Re.call(h, _s)) {
            var ga = h[_s];
            if (ga != null)
              switch (_s) {
                case "children":
                  ul = ga;
                  break;
                case "dangerouslySetInnerHTML":
                  Gl = ga;
                  break;
                case "action":
                  bo = ga;
                  break;
                case "encType":
                  fl = ga;
                  break;
                case "method":
                  yo = ga;
                  break;
                case "target":
                  mi = ga;
                  break;
                default:
                  Cn(
                    a,
                    _s,
                    ga
                  );
              }
          }
        var mo = null, hu = null;
        if (typeof bo == "function") {
          var ba = Fc(
            w,
            bo
          );
          ba !== null ? (bo = ba.action || "", fl = ba.encType, yo = ba.method, mi = ba.target, mo = ba.data, hu = ba.name) : (a.push(
            Jt,
            q("action"),
            oo,
            Qn,
            Pt
          ), mi = yo = fl = bo = null, Hi(w, x));
        }
        if (bo != null && Cn(a, "action", bo), fl != null && Cn(a, "encType", fl), yo != null && Cn(a, "method", yo), mi != null && Cn(a, "target", mi), a.push(Zn), hu !== null && (a.push(ni), Bt(a, "name", hu), a.push(Wi), mo != null && mo.forEach(Hr, a)), or(a, Gl, ul), typeof ul == "string") {
          a.push(
            q(de(ul))
          );
          var gu = null;
        } else gu = ul;
        return gu;
      case "menuitem":
        a.push(jn("menuitem"));
        for (var Gc in h)
          if (Re.call(h, Gc)) {
            var pc = h[Gc];
            if (pc != null)
              switch (Gc) {
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(f(400));
                default:
                  Cn(
                    a,
                    Gc,
                    pc
                  );
              }
          }
        return a.push(Zn), null;
      case "object":
        a.push(jn("object"));
        var wc = null, Ou = null, ya;
        for (ya in h)
          if (Re.call(h, ya)) {
            var dl = h[ya];
            if (dl != null)
              switch (ya) {
                case "children":
                  wc = dl;
                  break;
                case "dangerouslySetInnerHTML":
                  Ou = dl;
                  break;
                case "data":
                  var bu = qn("" + dl);
                  if (bu === "") break;
                  a.push(
                    Jt,
                    q("data"),
                    oo,
                    q(de(bu)),
                    Pt
                  );
                  break;
                default:
                  Cn(
                    a,
                    ya,
                    dl
                  );
              }
          }
        if (a.push(Zn), or(a, Ou, wc), typeof wc == "string") {
          a.push(
            q(de(wc))
          );
          var Ga = null;
        } else Ga = wc;
        return Ga;
      case "title":
        if (ne.insertionMode === 4 || ne.tagScope & 1 || h.itemProp != null)
          var Bs = kl(
            a,
            h
          );
        else
          j ? Bs = null : (kl(x.hoistableChunks, h), Bs = void 0);
        return Bs;
      case "link":
        var Xc = h.rel, Xa = h.href, Ns = h.precedence;
        if (ne.insertionMode === 4 || ne.tagScope & 1 || h.itemProp != null || typeof Xc != "string" || typeof Xa != "string" || Xa === "") {
          ar(a, h);
          var _n = null;
        } else if (h.rel === "stylesheet")
          if (typeof Ns != "string" || h.disabled != null || h.onLoad || h.onError)
            _n = ar(
              a,
              h
            );
          else {
            var Pi = x.styles.get(Ns), Xl = w.styleResources.hasOwnProperty(Xa) ? w.styleResources[Xa] : void 0;
            if (Xl !== null) {
              w.styleResources[Xa] = null, Pi || (Pi = {
                precedence: q(de(Ns)),
                rules: [],
                hrefs: [],
                sheets: /* @__PURE__ */ new Map()
              }, x.styles.set(Ns, Pi));
              var hl = {
                state: 0,
                props: Qe({}, h, {
                  "data-precedence": h.precedence,
                  precedence: null
                })
              };
              if (Xl) {
                Xl.length === 2 && Dl(hl.props, Xl);
                var Zl = x.preloads.stylesheets.get(Xa);
                Zl && 0 < Zl.length ? Zl.length = 0 : hl.state = 1;
              }
              Pi.sheets.set(Xa, hl), L && L.stylesheets.add(hl);
            } else if (Pi) {
              var Tc = Pi.sheets.get(Xa);
              Tc && L && L.stylesheets.add(Tc);
            }
            U && a.push(Bo), _n = null;
          }
        else
          h.onLoad || h.onError ? _n = ar(
            a,
            h
          ) : (U && a.push(Bo), _n = j ? null : ar(x.hoistableChunks, h));
        return _n;
      case "script":
        var Ls = h.async;
        if (typeof h.src != "string" || !h.src || !Ls || typeof Ls == "function" || typeof Ls == "symbol" || h.onLoad || h.onError || ne.insertionMode === 4 || ne.tagScope & 1 || h.itemProp != null)
          var zs = ti(
            a,
            h
          );
        else {
          var xt = h.src;
          if (h.type === "module")
            var vo = w.moduleScriptResources, lt = x.preloads.moduleScripts;
          else
            vo = w.scriptResources, lt = x.preloads.scripts;
          var gl = vo.hasOwnProperty(xt) ? vo[xt] : void 0;
          if (gl !== null) {
            vo[xt] = null;
            var Ws = h;
            if (gl) {
              gl.length === 2 && (Ws = Qe({}, h), Dl(Ws, gl));
              var Fi = lt.get(xt);
              Fi && (Fi.length = 0);
            }
            var Vn = [];
            x.scripts.add(Vn), ti(Vn, Ws);
          }
          U && a.push(Bo), zs = null;
        }
        return zs;
      case "style":
        var Zc = h.precedence, va = h.href;
        if (ne.insertionMode === 4 || ne.tagScope & 1 || h.itemProp != null || typeof Zc != "string" || typeof va != "string" || va === "") {
          a.push(jn("style"));
          var Vl = null, yu = null, Us;
          for (Us in h)
            if (Re.call(h, Us)) {
              var Cc = h[Us];
              if (Cc != null)
                switch (Us) {
                  case "children":
                    Vl = Cc;
                    break;
                  case "dangerouslySetInnerHTML":
                    yu = Cc;
                    break;
                  default:
                    Cn(
                      a,
                      Us,
                      Cc
                    );
                }
            }
          a.push(Zn);
          var Hs = Array.isArray(Vl) ? 2 > Vl.length ? Vl[0] : null : Vl;
          typeof Hs != "function" && typeof Hs != "symbol" && Hs !== null && Hs !== void 0 && a.push(
            q(("" + Hs).replace(nc, No))
          ), or(a, yu, Vl), a.push(Tr("style"));
          var n = null;
        } else {
          var r = x.styles.get(Zc);
          if ((w.styleResources.hasOwnProperty(va) ? w.styleResources[va] : void 0) !== null) {
            w.styleResources[va] = null, r ? r.hrefs.push(
              q(de(va))
            ) : (r = {
              precedence: q(
                de(Zc)
              ),
              rules: [],
              hrefs: [q(de(va))],
              sheets: /* @__PURE__ */ new Map()
            }, x.styles.set(Zc, r));
            var c = r.rules, v = null, E = null, m;
            for (m in h)
              if (Re.call(h, m)) {
                var H = h[m];
                if (H != null)
                  switch (m) {
                    case "children":
                      v = H;
                      break;
                    case "dangerouslySetInnerHTML":
                      E = H;
                  }
              }
            var X = Array.isArray(v) ? 2 > v.length ? v[0] : null : v;
            typeof X != "function" && typeof X != "symbol" && X !== null && X !== void 0 && c.push(
              q(
                ("" + X).replace(nc, No)
              )
            ), or(c, E, v);
          }
          r && L && L.styles.add(r), U && a.push(Bo), n = void 0;
        }
        return n;
      case "meta":
        if (ne.insertionMode === 4 || ne.tagScope & 1 || h.itemProp != null)
          var le = Yr(
            a,
            h,
            "meta"
          );
        else
          U && a.push(Bo), le = j ? null : typeof h.charSet == "string" ? Yr(x.charsetChunks, h, "meta") : h.name === "viewport" ? Yr(x.viewportChunks, h, "meta") : Yr(x.hoistableChunks, h, "meta");
        return le;
      case "listing":
      case "pre":
        a.push(jn(l));
        var K = null, Ee = null, ve;
        for (ve in h)
          if (Re.call(h, ve)) {
            var Fe = h[ve];
            if (Fe != null)
              switch (ve) {
                case "children":
                  K = Fe;
                  break;
                case "dangerouslySetInnerHTML":
                  Ee = Fe;
                  break;
                default:
                  Cn(
                    a,
                    ve,
                    Fe
                  );
              }
          }
        if (a.push(Zn), Ee != null) {
          if (K != null) throw Error(f(60));
          if (typeof Ee != "object" || !("__html" in Ee))
            throw Error(f(61));
          var Ae = Ee.__html;
          Ae != null && (typeof Ae == "string" && 0 < Ae.length && Ae[0] === `
` ? a.push(tc, q(Ae)) : a.push(q("" + Ae)));
        }
        return typeof K == "string" && K[0] === `
` && a.push(tc), K;
      case "img":
        var ue = h.src, nn = h.srcSet;
        if (!(h.loading === "lazy" || !ue && !nn || typeof ue != "string" && ue != null || typeof nn != "string" && nn != null) && h.fetchPriority !== "low" && !(ne.tagScope & 3) && (typeof ue != "string" || ue[4] !== ":" || ue[0] !== "d" && ue[0] !== "D" || ue[1] !== "a" && ue[1] !== "A" || ue[2] !== "t" && ue[2] !== "T" || ue[3] !== "a" && ue[3] !== "A") && (typeof nn != "string" || nn[4] !== ":" || nn[0] !== "d" && nn[0] !== "D" || nn[1] !== "a" && nn[1] !== "A" || nn[2] !== "t" && nn[2] !== "T" || nn[3] !== "a" && nn[3] !== "A")) {
          var bn = typeof h.sizes == "string" ? h.sizes : void 0, tn = nn ? nn + `
` + (bn || "") : ue, cn = x.preloads.images, st = cn.get(tn);
          if (st)
            (h.fetchPriority === "high" || 10 > x.highImagePreloads.size) && (cn.delete(tn), x.highImagePreloads.add(st));
          else if (!w.imageResources.hasOwnProperty(tn)) {
            w.imageResources[tn] = ut;
            var qe = h.crossOrigin, xn = typeof qe == "string" ? qe === "use-credentials" ? qe : "" : void 0, mn = x.headers, vr;
            mn && 0 < mn.remainingCapacity && typeof h.srcSet != "string" && (h.fetchPriority === "high" || 500 > mn.highImagePreloads.length) && (vr = _a(ue, "image", {
              imageSrcSet: h.srcSet,
              imageSizes: h.sizes,
              crossOrigin: xn,
              integrity: h.integrity,
              nonce: h.nonce,
              type: h.type,
              fetchPriority: h.fetchPriority,
              referrerPolicy: h.refererPolicy
            }), 0 <= (mn.remainingCapacity -= vr.length + 2)) ? (x.resets.image[tn] = ut, mn.highImagePreloads && (mn.highImagePreloads += ", "), mn.highImagePreloads += vr) : (st = [], ar(st, {
              rel: "preload",
              as: "image",
              href: nn ? void 0 : ue,
              imageSrcSet: nn,
              imageSizes: bn,
              crossOrigin: xn,
              integrity: h.integrity,
              type: h.type,
              fetchPriority: h.fetchPriority,
              referrerPolicy: h.referrerPolicy
            }), h.fetchPriority === "high" || 10 > x.highImagePreloads.size ? x.highImagePreloads.add(st) : (x.bulkPreloads.add(st), cn.set(tn, st)));
          }
        }
        return Yr(a, h, "img");
      case "base":
      case "area":
      case "br":
      case "col":
      case "embed":
      case "hr":
      case "keygen":
      case "param":
      case "source":
      case "track":
      case "wbr":
        return Yr(a, h, l);
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        break;
      case "head":
        if (2 > ne.insertionMode) {
          var Dt = F || x.preamble;
          if (Dt.headChunks)
            throw Error(f(545, "`<head>`"));
          Dt.headChunks = [];
          var Ht = ea(
            Dt.headChunks,
            h,
            "head"
          );
        } else
          Ht = ri(
            a,
            h,
            "head"
          );
        return Ht;
      case "body":
        if (2 > ne.insertionMode) {
          var dt = F || x.preamble;
          if (dt.bodyChunks)
            throw Error(f(545, "`<body>`"));
          dt.bodyChunks = [];
          var Po = ea(
            dt.bodyChunks,
            h,
            "body"
          );
        } else
          Po = ri(
            a,
            h,
            "body"
          );
        return Po;
      case "html":
        if (ne.insertionMode === 0) {
          var _r = F || x.preamble;
          if (_r.htmlChunks)
            throw Error(f(545, "`<html>`"));
          _r.htmlChunks = [fs];
          var Mn = ea(
            _r.htmlChunks,
            h,
            "html"
          );
        } else
          Mn = ri(
            a,
            h,
            "html"
          );
        return Mn;
      default:
        if (l.indexOf("-") !== -1) {
          a.push(jn(l));
          var e = null, t = null, u;
          for (u in h)
            if (Re.call(h, u)) {
              var y = h[u];
              if (y != null) {
                var C = u;
                switch (u) {
                  case "children":
                    e = y;
                    break;
                  case "dangerouslySetInnerHTML":
                    t = y;
                    break;
                  case "style":
                    ei(a, y);
                    break;
                  case "suppressContentEditableWarning":
                  case "suppressHydrationWarning":
                  case "ref":
                    break;
                  case "className":
                    C = "class";
                  default:
                    if (fn(u) && typeof y != "function" && typeof y != "symbol" && y !== !1) {
                      if (y === !0) y = "";
                      else if (typeof y == "object") continue;
                      a.push(
                        Jt,
                        q(C),
                        oo,
                        q(de(y)),
                        Pt
                      );
                    }
                }
              }
            }
          return a.push(Zn), or(a, t, e), e;
        }
    }
    return ri(a, h, l);
  }
  var ml = /* @__PURE__ */ new Map();
  function Tr(a) {
    var l = ml.get(a);
    return l === void 0 && (l = Q("</" + a + ">"), ml.set(a, l)), l;
  }
  function Ac(a, l) {
    a = a.preamble, a.htmlChunks === null && l.htmlChunks && (a.htmlChunks = l.htmlChunks, l.contribution |= 1), a.headChunks === null && l.headChunks && (a.headChunks = l.headChunks, l.contribution |= 4), a.bodyChunks === null && l.bodyChunks && (a.bodyChunks = l.bodyChunks, l.contribution |= 2);
  }
  function oi(a, l) {
    l = l.bootstrapChunks;
    for (var h = 0; h < l.length - 1; h++)
      te(a, l[h]);
    return h < l.length ? (h = l[h], l.length = 0, Ce(a, h)) : !0;
  }
  var Co = Q('<template id="'), Fa = Q('"></template>'), Yi = Q("<!--$-->"), ds = Q(
    '<!--$?--><template id="'
  ), Gi = Q('"></template>'), lo = Q("<!--$!-->"), ai = Q("<!--/$-->"), Xi = Q("<template"), Oa = Q('"'), na = Q(' data-dgst="');
  Q(' data-msg="'), Q(' data-stck="'), Q(' data-cstck="');
  var ir = Q("></template>");
  function ta(a, l, h) {
    if (te(a, ds), h === null) throw Error(f(395));
    return te(a, l.boundaryPrefix), te(a, q(h.toString(16))), Ce(a, Gi);
  }
  var Mc = Q("<!--"), so = Q("-->");
  function Aa(a, l) {
    l = l.contribution, l !== 0 && (te(a, Mc), te(a, q("" + l)), te(a, so));
  }
  var Pl = Q('<div hidden id="'), ra = Q('">'), vt = Q("</div>"), ii = Q(
    '<svg aria-hidden="true" style="display:none" id="'
  ), Mr = Q('">'), Ir = Q("</svg>"), hs = Q(
    '<math aria-hidden="true" style="display:none" id="'
  ), gs = Q('">'), lr = Q("</math>"), Fl = Q('<table hidden id="'), Pn = Q('">'), sr = Q("</table>"), li = Q('<table hidden><tbody id="'), Ma = Q('">'), oa = Q("</tbody></table>"), aa = Q('<table hidden><tr id="'), Zi = Q('">'), cr = Q("</tr></table>"), ia = Q(
    '<table hidden><colgroup id="'
  ), Ia = Q('">'), Gr = Q("</colgroup></table>");
  function Vi(a, l, h, w) {
    switch (h.insertionMode) {
      case 0:
      case 1:
      case 3:
      case 2:
        return te(a, Pl), te(a, l.segmentPrefix), te(a, q(w.toString(16))), Ce(a, ra);
      case 4:
        return te(a, ii), te(a, l.segmentPrefix), te(a, q(w.toString(16))), Ce(a, Mr);
      case 5:
        return te(a, hs), te(a, l.segmentPrefix), te(a, q(w.toString(16))), Ce(a, gs);
      case 6:
        return te(a, Fl), te(a, l.segmentPrefix), te(a, q(w.toString(16))), Ce(a, Pn);
      case 7:
        return te(a, li), te(a, l.segmentPrefix), te(a, q(w.toString(16))), Ce(a, Ma);
      case 8:
        return te(a, aa), te(a, l.segmentPrefix), te(a, q(w.toString(16))), Ce(a, Zi);
      case 9:
        return te(a, ia), te(a, l.segmentPrefix), te(a, q(w.toString(16))), Ce(a, Ia);
      default:
        throw Error(f(397));
    }
  }
  function Da(a, l) {
    switch (l.insertionMode) {
      case 0:
      case 1:
      case 3:
      case 2:
        return Ce(a, vt);
      case 4:
        return Ce(a, Ir);
      case 5:
        return Ce(a, lr);
      case 6:
        return Ce(a, sr);
      case 7:
        return Ce(a, oa);
      case 8:
        return Ce(a, cr);
      case 9:
        return Ce(a, Gr);
      default:
        throw Error(f(397));
    }
  }
  var Lo = Q(
    '$RS=function(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)};$RS("'
  ), la = Q('$RS("'), bs = Q('","'), Qi = Q('")<\/script>');
  Q('<template data-rsi="" data-sid="'), Q('" data-pid="');
  var rc = Q(
    '$RC=function(b,c,e){c=document.getElementById(c);c.parentNode.removeChild(c);var a=document.getElementById(b);if(a){b=a.previousSibling;if(e)b.data="$!",a.setAttribute("data-dgst",e);else{e=b.parentNode;a=b.nextSibling;var f=0;do{if(a&&8===a.nodeType){var d=a.data;if("/$"===d)if(0===f)break;else f--;else"$"!==d&&"$?"!==d&&"$!"!==d||f++}d=a.nextSibling;e.removeChild(a);a=d}while(a);for(;c.firstChild;)e.insertBefore(c.firstChild,a);b.data="$"}b._reactRetry&&b._reactRetry()}};$RC("'
  ), si = Q('$RC("'), ys = Q(
    `$RC=function(b,c,e){c=document.getElementById(c);c.parentNode.removeChild(c);var a=document.getElementById(b);if(a){b=a.previousSibling;if(e)b.data="$!",a.setAttribute("data-dgst",e);else{e=b.parentNode;a=b.nextSibling;var f=0;do{if(a&&8===a.nodeType){var d=a.data;if("/$"===d)if(0===f)break;else f--;else"$"!==d&&"$?"!==d&&"$!"!==d||f++}d=a.nextSibling;e.removeChild(a);a=d}while(a);for(;c.firstChild;)e.insertBefore(c.firstChild,a);b.data="$"}b._reactRetry&&b._reactRetry()}};$RM=new Map;
$RR=function(t,u,y){function v(n){this._p=null;n()}for(var w=$RC,p=$RM,q=new Map,r=document,g,b,h=r.querySelectorAll("link[data-precedence],style[data-precedence]"),x=[],k=0;b=h[k++];)"not all"===b.getAttribute("media")?x.push(b):("LINK"===b.tagName&&p.set(b.getAttribute("href"),b),q.set(b.dataset.precedence,g=b));b=0;h=[];var l,a;for(k=!0;;){if(k){var e=y[b++];if(!e){k=!1;b=0;continue}var c=!1,m=0;var d=e[m++];if(a=p.get(d)){var f=a._p;c=!0}else{a=r.createElement("link");a.href=
d;a.rel="stylesheet";for(a.dataset.precedence=l=e[m++];f=e[m++];)a.setAttribute(f,e[m++]);f=a._p=new Promise(function(n,z){a.onload=v.bind(a,n);a.onerror=v.bind(a,z)});p.set(d,a)}d=a.getAttribute("media");!f||d&&!matchMedia(d).matches||h.push(f);if(c)continue}else{a=x[b++];if(!a)break;l=a.getAttribute("data-precedence");a.removeAttribute("media")}c=q.get(l)||g;c===g&&(g=a);q.set(l,a);c?c.parentNode.insertBefore(a,c.nextSibling):(c=r.head,c.insertBefore(a,c.firstChild))}Promise.all(h).then(w.bind(null,
t,u,""),w.bind(null,t,u,"Resource failed to load"))};$RR("`
  ), oc = Q(
    `$RM=new Map;
$RR=function(t,u,y){function v(n){this._p=null;n()}for(var w=$RC,p=$RM,q=new Map,r=document,g,b,h=r.querySelectorAll("link[data-precedence],style[data-precedence]"),x=[],k=0;b=h[k++];)"not all"===b.getAttribute("media")?x.push(b):("LINK"===b.tagName&&p.set(b.getAttribute("href"),b),q.set(b.dataset.precedence,g=b));b=0;h=[];var l,a;for(k=!0;;){if(k){var e=y[b++];if(!e){k=!1;b=0;continue}var c=!1,m=0;var d=e[m++];if(a=p.get(d)){var f=a._p;c=!0}else{a=r.createElement("link");a.href=
d;a.rel="stylesheet";for(a.dataset.precedence=l=e[m++];f=e[m++];)a.setAttribute(f,e[m++]);f=a._p=new Promise(function(n,z){a.onload=v.bind(a,n);a.onerror=v.bind(a,z)});p.set(d,a)}d=a.getAttribute("media");!f||d&&!matchMedia(d).matches||h.push(f);if(c)continue}else{a=x[b++];if(!a)break;l=a.getAttribute("data-precedence");a.removeAttribute("media")}c=q.get(l)||g;c===g&&(g=a);q.set(l,a);c?c.parentNode.insertBefore(a,c.nextSibling):(c=r.head,c.insertBefore(a,c.firstChild))}Promise.all(h).then(w.bind(null,
t,u,""),w.bind(null,t,u,"Resource failed to load"))};$RR("`
  ), Ol = Q('$RR("'), vs = Q('","'), Ic = Q('",'), Al = Q('"'), ci = Q(")<\/script>");
  Q('<template data-rci="" data-bid="'), Q('<template data-rri="" data-bid="'), Q('" data-sid="'), Q('" data-sty="');
  var Ji = Q(
    '$RX=function(b,c,d,e,f){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),f&&(a.cstck=f),b._reactRetry&&b._reactRetry())};;$RX("'
  ), ui = Q('$RX("'), ps = Q('"'), fi = Q(","), Ki = Q(")<\/script>");
  Q('<template data-rxi="" data-bid="'), Q('" data-dgst="'), Q('" data-msg="'), Q('" data-stck="'), Q('" data-cstck="');
  var qi = /[<\u2028\u2029]/g;
  function di(a) {
    return JSON.stringify(a).replace(
      qi,
      function(l) {
        switch (l) {
          case "<":
            return "\\u003c";
          case "\u2028":
            return "\\u2028";
          case "\u2029":
            return "\\u2029";
          default:
            throw Error(
              "escapeJSStringsForInstructionScripts encountered a match it does not know how to replace. this means the match regex and the replacement characters are no longer in sync. This is a bug in React"
            );
        }
      }
    );
  }
  var hi = /[&><\u2028\u2029]/g;
  function zo(a) {
    return JSON.stringify(a).replace(
      hi,
      function(l) {
        switch (l) {
          case "&":
            return "\\u0026";
          case ">":
            return "\\u003e";
          case "<":
            return "\\u003c";
          case "\u2028":
            return "\\u2028";
          case "\u2029":
            return "\\u2029";
          default:
            throw Error(
              "escapeJSObjectForInstructionScripts encountered a match it does not know how to replace. this means the match regex and the replacement characters are no longer in sync. This is a bug in React"
            );
        }
      }
    );
  }
  var sa = Q(
    '<style media="not all" data-precedence="'
  ), ws = Q('" data-href="'), ji = Q('">'), ur = Q("</style>"), gi = !1, Wo = !0;
  function bi(a) {
    var l = a.rules, h = a.hrefs, w = 0;
    if (h.length) {
      for (te(this, sa), te(this, a.precedence), te(this, ws); w < h.length - 1; w++)
        te(this, h[w]), te(this, An);
      for (te(this, h[w]), te(this, ji), w = 0; w < l.length; w++) te(this, l[w]);
      Wo = Ce(
        this,
        ur
      ), gi = !0, l.length = 0, h.length = 0;
    }
  }
  function Ml(a) {
    return a.state !== 2 ? gi = !0 : !1;
  }
  function Uo(a, l, h) {
    return gi = !1, Wo = !0, l.styles.forEach(bi, a), l.stylesheets.forEach(Ml), gi && (h.stylesToHoist = !0), Wo;
  }
  function Jn(a) {
    for (var l = 0; l < a.length; l++) te(this, a[l]);
    a.length = 0;
  }
  var Ft = [];
  function Xr(a) {
    ar(Ft, a.props);
    for (var l = 0; l < Ft.length; l++)
      te(this, Ft[l]);
    Ft.length = 0, a.state = 2;
  }
  var yi = Q(
    '<style data-precedence="'
  ), ft = Q('" data-href="'), An = Q(" "), ac = Q('">'), Ts = Q("</style>");
  function Nt(a) {
    var l = 0 < a.sheets.size;
    a.sheets.forEach(Xr, this), a.sheets.clear();
    var h = a.rules, w = a.hrefs;
    if (!l || w.length) {
      if (te(this, yi), te(this, a.precedence), a = 0, w.length) {
        for (te(this, ft); a < w.length - 1; a++)
          te(this, w[a]), te(this, An);
        te(this, w[a]);
      }
      for (te(this, ac), a = 0; a < h.length; a++)
        te(this, h[a]);
      te(this, Ts), h.length = 0, w.length = 0;
    }
  }
  function ic(a) {
    if (a.state === 0) {
      a.state = 1;
      var l = a.props;
      for (ar(Ft, {
        rel: "preload",
        as: "style",
        href: a.props.href,
        crossOrigin: l.crossOrigin,
        fetchPriority: l.fetchPriority,
        integrity: l.integrity,
        media: l.media,
        hrefLang: l.hrefLang,
        referrerPolicy: l.referrerPolicy
      }), a = 0; a < Ft.length; a++)
        te(this, Ft[a]);
      Ft.length = 0;
    }
  }
  function lc(a) {
    a.sheets.forEach(ic, this), a.sheets.clear();
  }
  var Il = Q("["), Cs = Q(",["), ca = Q(","), co = Q("]");
  function su(a, l) {
    te(a, Il);
    var h = Il;
    l.stylesheets.forEach(function(w) {
      if (w.state !== 2)
        if (w.state === 3)
          te(a, h), te(
            a,
            q(
              zo("" + w.props.href)
            )
          ), te(a, co), h = Cs;
        else {
          te(a, h);
          var x = w.props["data-precedence"], F = w.props, L = qn("" + w.props.href);
          te(
            a,
            q(zo(L))
          ), x = "" + x, te(a, ca), te(
            a,
            q(zo(x))
          );
          for (var ne in F)
            if (Re.call(F, ne) && (x = F[ne], x != null))
              switch (ne) {
                case "href":
                case "rel":
                case "precedence":
                case "data-precedence":
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(f(399, "link"));
                default:
                  Kt(
                    a,
                    ne,
                    x
                  );
              }
          te(a, co), h = Cs, w.state = 3;
        }
    }), te(a, co);
  }
  function Kt(a, l, h) {
    var w = l.toLowerCase();
    switch (typeof h) {
      case "function":
      case "symbol":
        return;
    }
    switch (l) {
      case "innerHTML":
      case "dangerouslySetInnerHTML":
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "style":
      case "ref":
        return;
      case "className":
        w = "class", l = "" + h;
        break;
      case "hidden":
        if (h === !1) return;
        l = "";
        break;
      case "src":
      case "href":
        h = qn(h), l = "" + h;
        break;
      default:
        if (2 < l.length && (l[0] === "o" || l[0] === "O") && (l[1] === "n" || l[1] === "N") || !fn(l))
          return;
        l = "" + h;
    }
    te(a, ca), te(
      a,
      q(zo(w))
    ), te(a, ca), te(
      a,
      q(zo(l))
    );
  }
  function Cr() {
    return { styles: /* @__PURE__ */ new Set(), stylesheets: /* @__PURE__ */ new Set() };
  }
  function Er(a) {
    var l = At || null;
    if (l) {
      var h = l.resumableState, w = l.renderState;
      if (typeof a == "string" && a) {
        if (!h.dnsResources.hasOwnProperty(a)) {
          h.dnsResources[a] = null, h = w.headers;
          var x, F;
          (F = h && 0 < h.remainingCapacity) && (F = (x = "<" + ("" + a).replace(
            Eo,
            Zr
          ) + ">; rel=dns-prefetch", 0 <= (h.remainingCapacity -= x.length + 2))), F ? (w.resets.dns[a] = null, h.preconnects && (h.preconnects += ", "), h.preconnects += x) : (x = [], ar(x, { href: a, rel: "dns-prefetch" }), w.preconnects.add(x));
        }
        Si(l);
      }
    } else Vt.D(a);
  }
  function rt(a, l) {
    var h = At || null;
    if (h) {
      var w = h.resumableState, x = h.renderState;
      if (typeof a == "string" && a) {
        var F = l === "use-credentials" ? "credentials" : typeof l == "string" ? "anonymous" : "default";
        if (!w.connectResources[F].hasOwnProperty(a)) {
          w.connectResources[F][a] = null, w = x.headers;
          var L, ne;
          if (ne = w && 0 < w.remainingCapacity) {
            if (ne = "<" + ("" + a).replace(
              Eo,
              Zr
            ) + ">; rel=preconnect", typeof l == "string") {
              var U = ("" + l).replace(
                _l,
                xs
              );
              ne += '; crossorigin="' + U + '"';
            }
            ne = (L = ne, 0 <= (w.remainingCapacity -= L.length + 2));
          }
          ne ? (x.resets.connect[F][a] = null, w.preconnects && (w.preconnects += ", "), w.preconnects += L) : (F = [], ar(F, {
            rel: "preconnect",
            href: a,
            crossOrigin: l
          }), x.preconnects.add(F));
        }
        Si(h);
      }
    } else Vt.C(a, l);
  }
  function Fn(a, l, h) {
    var w = At || null;
    if (w) {
      var x = w.resumableState, F = w.renderState;
      if (l && a) {
        switch (l) {
          case "image":
            if (h)
              var L = h.imageSrcSet, ne = h.imageSizes, U = h.fetchPriority;
            var j = L ? L + `
` + (ne || "") : a;
            if (x.imageResources.hasOwnProperty(j)) return;
            x.imageResources[j] = ut, x = F.headers;
            var we;
            x && 0 < x.remainingCapacity && typeof L != "string" && U === "high" && (we = _a(a, l, h), 0 <= (x.remainingCapacity -= we.length + 2)) ? (F.resets.image[j] = ut, x.highImagePreloads && (x.highImagePreloads += ", "), x.highImagePreloads += we) : (x = [], ar(
              x,
              Qe(
                { rel: "preload", href: L ? void 0 : a, as: l },
                h
              )
            ), U === "high" ? F.highImagePreloads.add(x) : (F.bulkPreloads.add(x), F.preloads.images.set(j, x)));
            break;
          case "style":
            if (x.styleResources.hasOwnProperty(a)) return;
            L = [], ar(
              L,
              Qe({ rel: "preload", href: a, as: l }, h)
            ), x.styleResources[a] = !h || typeof h.crossOrigin != "string" && typeof h.integrity != "string" ? ut : [h.crossOrigin, h.integrity], F.preloads.stylesheets.set(a, L), F.bulkPreloads.add(L);
            break;
          case "script":
            if (x.scriptResources.hasOwnProperty(a)) return;
            L = [], F.preloads.scripts.set(a, L), F.bulkPreloads.add(L), ar(
              L,
              Qe({ rel: "preload", href: a, as: l }, h)
            ), x.scriptResources[a] = !h || typeof h.crossOrigin != "string" && typeof h.integrity != "string" ? ut : [h.crossOrigin, h.integrity];
            break;
          default:
            if (x.unknownResources.hasOwnProperty(l)) {
              if (L = x.unknownResources[l], L.hasOwnProperty(a))
                return;
            } else
              L = {}, x.unknownResources[l] = L;
            if (L[a] = ut, (x = F.headers) && 0 < x.remainingCapacity && l === "font" && (j = _a(a, l, h), 0 <= (x.remainingCapacity -= j.length + 2)))
              F.resets.font[a] = ut, x.fontPreloads && (x.fontPreloads += ", "), x.fontPreloads += j;
            else
              switch (x = [], a = Qe({ rel: "preload", href: a, as: l }, h), ar(x, a), l) {
                case "font":
                  F.fontPreloads.add(x);
                  break;
                default:
                  F.bulkPreloads.add(x);
              }
        }
        Si(w);
      }
    } else Vt.L(a, l, h);
  }
  function Es(a, l) {
    var h = At || null;
    if (h) {
      var w = h.resumableState, x = h.renderState;
      if (a) {
        var F = l && typeof l.as == "string" ? l.as : "script";
        switch (F) {
          case "script":
            if (w.moduleScriptResources.hasOwnProperty(a)) return;
            F = [], w.moduleScriptResources[a] = !l || typeof l.crossOrigin != "string" && typeof l.integrity != "string" ? ut : [l.crossOrigin, l.integrity], x.preloads.moduleScripts.set(a, F);
            break;
          default:
            if (w.moduleUnknownResources.hasOwnProperty(F)) {
              var L = w.unknownResources[F];
              if (L.hasOwnProperty(a)) return;
            } else
              L = {}, w.moduleUnknownResources[F] = L;
            F = [], L[a] = ut;
        }
        ar(F, Qe({ rel: "modulepreload", href: a }, l)), x.bulkPreloads.add(F), Si(h);
      }
    } else Vt.m(a, l);
  }
  function sc(a, l, h) {
    var w = At || null;
    if (w) {
      var x = w.resumableState, F = w.renderState;
      if (a) {
        l = l || "default";
        var L = F.styles.get(l), ne = x.styleResources.hasOwnProperty(a) ? x.styleResources[a] : void 0;
        ne !== null && (x.styleResources[a] = null, L || (L = {
          precedence: q(de(l)),
          rules: [],
          hrefs: [],
          sheets: /* @__PURE__ */ new Map()
        }, F.styles.set(l, L)), l = {
          state: 0,
          props: Qe(
            { rel: "stylesheet", href: a, "data-precedence": l },
            h
          )
        }, ne && (ne.length === 2 && Dl(l.props, ne), (F = F.preloads.stylesheets.get(a)) && 0 < F.length ? F.length = 0 : l.state = 1), L.sheets.set(a, l), Si(w));
      }
    } else Vt.S(a, l, h);
  }
  function Dc(a, l) {
    var h = At || null;
    if (h) {
      var w = h.resumableState, x = h.renderState;
      if (a) {
        var F = w.scriptResources.hasOwnProperty(a) ? w.scriptResources[a] : void 0;
        F !== null && (w.scriptResources[a] = null, l = Qe({ src: a, async: !0 }, l), F && (F.length === 2 && Dl(l, F), a = x.preloads.scripts.get(a)) && (a.length = 0), a = [], x.scripts.add(a), ti(a, l), Si(h));
      }
    } else Vt.X(a, l);
  }
  function _c(a, l) {
    var h = At || null;
    if (h) {
      var w = h.resumableState, x = h.renderState;
      if (a) {
        var F = w.moduleScriptResources.hasOwnProperty(
          a
        ) ? w.moduleScriptResources[a] : void 0;
        F !== null && (w.moduleScriptResources[a] = null, l = Qe({ src: a, type: "module", async: !0 }, l), F && (F.length === 2 && Dl(l, F), a = x.preloads.moduleScripts.get(a)) && (a.length = 0), a = [], x.scripts.add(a), ti(a, l), Si(h));
      }
    } else Vt.M(a, l);
  }
  function Dl(a, l) {
    a.crossOrigin == null && (a.crossOrigin = l[0]), a.integrity == null && (a.integrity = l[1]);
  }
  function _a(a, l, h) {
    a = ("" + a).replace(
      Eo,
      Zr
    ), l = ("" + l).replace(
      _l,
      xs
    ), l = "<" + a + '>; rel=preload; as="' + l + '"';
    for (var w in h)
      Re.call(h, w) && (a = h[w], typeof a == "string" && (l += "; " + w.toLowerCase() + '="' + ("" + a).replace(
        _l,
        xs
      ) + '"'));
    return l;
  }
  var Eo = /[<>\r\n]/g;
  function Zr(a) {
    switch (a) {
      case "<":
        return "%3C";
      case ">":
        return "%3E";
      case `
`:
        return "%0A";
      case "\r":
        return "%0D";
      default:
        throw Error(
          "escapeLinkHrefForHeaderContextReplacer encountered a match it does not know how to replace. this means the match regex and the replacement characters are no longer in sync. This is a bug in React"
        );
    }
  }
  var _l = /["';,\r\n]/g;
  function xs(a) {
    switch (a) {
      case '"':
        return "%22";
      case "'":
        return "%27";
      case ";":
        return "%3B";
      case ",":
        return "%2C";
      case `
`:
        return "%0A";
      case "\r":
        return "%0D";
      default:
        throw Error(
          "escapeStringForLinkHeaderQuotedParamValueContextReplacer encountered a match it does not know how to replace. this means the match regex and the replacement characters are no longer in sync. This is a bug in React"
        );
    }
  }
  function cc(a) {
    this.styles.add(a);
  }
  function Bl(a) {
    this.stylesheets.add(a);
  }
  var Lt = Function.prototype.bind, ku = Symbol.for("react.client.reference");
  function xr(a) {
    if (a == null) return null;
    if (typeof a == "function")
      return a.$$typeof === ku ? null : a.displayName || a.name || null;
    if (typeof a == "string") return a;
    switch (a) {
      case S:
        return "Fragment";
      case O:
        return "Profiler";
      case A:
        return "StrictMode";
      case re:
        return "Suspense";
      case V:
        return "SuspenseList";
      case Me:
        return "Activity";
    }
    if (typeof a == "object")
      switch (a.$$typeof) {
        case T:
          return "Portal";
        case M:
          return (a.displayName || "Context") + ".Provider";
        case Z:
          return (a._context.displayName || "Context") + ".Consumer";
        case J:
          var l = a.render;
          return a = a.displayName, a || (a = l.displayName || l.name || "", a = a !== "" ? "ForwardRef(" + a + ")" : "ForwardRef"), a;
        case _:
          return l = a.displayName || null, l !== null ? l : xr(a.type) || "Memo";
        case N:
          l = a._payload, a = a._init;
          try {
            return xr(a(l));
          } catch {
          }
      }
    return null;
  }
  var Bc = {}, vi = null;
  function i(a, l) {
    if (a !== l) {
      a.context._currentValue = a.parentValue, a = a.parent;
      var h = l.parent;
      if (a === null) {
        if (h !== null) throw Error(f(401));
      } else {
        if (h === null) throw Error(f(401));
        i(a, h);
      }
      l.context._currentValue = l.value;
    }
  }
  function s(a) {
    a.context._currentValue = a.parentValue, a = a.parent, a !== null && s(a);
  }
  function g(a) {
    var l = a.parent;
    l !== null && g(l), a.context._currentValue = a.value;
  }
  function p(a, l) {
    if (a.context._currentValue = a.parentValue, a = a.parent, a === null) throw Error(f(402));
    a.depth === l.depth ? i(a, l) : p(a, l);
  }
  function R(a, l) {
    var h = l.parent;
    if (h === null) throw Error(f(402));
    a.depth === h.depth ? i(a, h) : R(a, h), l.context._currentValue = l.value;
  }
  function P(a) {
    var l = vi;
    l !== a && (l === null ? g(a) : a === null ? s(l) : l.depth === a.depth ? i(l, a) : l.depth > a.depth ? p(l, a) : R(l, a), vi = a);
  }
  var B = {
    enqueueSetState: function(a, l) {
      a = a._reactInternals, a.queue !== null && a.queue.push(l);
    },
    enqueueReplaceState: function(a, l) {
      a = a._reactInternals, a.replace = !0, a.queue = [l];
    },
    enqueueForceUpdate: function() {
    }
  }, oe = { id: 1, overflow: "" };
  function ee(a, l, h) {
    var w = a.id;
    a = a.overflow;
    var x = 32 - ie(w) - 1;
    w &= ~(1 << x), h += 1;
    var F = 32 - ie(l) + x;
    if (30 < F) {
      var L = x - x % 5;
      return F = (w & (1 << L) - 1).toString(32), w >>= L, x -= L, {
        id: 1 << 32 - ie(l) + x | h << x | w,
        overflow: F + a
      };
    }
    return {
      id: 1 << F | h << x | w,
      overflow: a
    };
  }
  var ie = Math.clz32 ? Math.clz32 : Ie, De = Math.log, pe = Math.LN2;
  function Ie(a) {
    return a >>>= 0, a === 0 ? 32 : 31 - (De(a) / pe | 0) | 0;
  }
  var Ue = Error(f(460));
  function an() {
  }
  function Ge(a, l, h) {
    switch (h = a[h], h === void 0 ? a.push(l) : h !== l && (l.then(an, an), l = h), l.status) {
      case "fulfilled":
        return l.value;
      case "rejected":
        throw l.reason;
      default:
        switch (typeof l.status == "string" ? l.then(an, an) : (a = l, a.status = "pending", a.then(
          function(w) {
            if (l.status === "pending") {
              var x = l;
              x.status = "fulfilled", x.value = w;
            }
          },
          function(w) {
            if (l.status === "pending") {
              var x = l;
              x.status = "rejected", x.reason = w;
            }
          }
        )), l.status) {
          case "fulfilled":
            return l.value;
          case "rejected":
            throw l.reason;
        }
        throw En = l, Ue;
    }
  }
  var En = null;
  function On() {
    if (En === null) throw Error(f(459));
    var a = En;
    return En = null, a;
  }
  function kn(a, l) {
    return a === l && (a !== 0 || 1 / a === 1 / l) || a !== a && l !== l;
  }
  var Yn = typeof Object.is == "function" ? Object.is : kn, Ze = null, yn = null, ln = null, zt = null, fr = null, Je = null, Dn = !1, pt = !1, Ot = 0, Ho = 0, Ln = -1, wt = 0, Rr = null, dr = null, Yo = 0;
  function hr() {
    if (Ze === null)
      throw Error(f(321));
    return Ze;
  }
  function xo() {
    if (0 < Yo) throw Error(f(312));
    return { memoizedState: null, queue: null, next: null };
  }
  function Vr() {
    return Je === null ? fr === null ? (Dn = !1, fr = Je = xo()) : (Dn = !0, Je = fr) : Je.next === null ? (Dn = !1, Je = Je.next = xo()) : (Dn = !0, Je = Je.next), Je;
  }
  function Tt() {
    var a = Rr;
    return Rr = null, a;
  }
  function uo() {
    zt = ln = yn = Ze = null, pt = !1, fr = null, Yo = 0, Je = dr = null;
  }
  function Qr(a, l) {
    return typeof l == "function" ? l(a) : l;
  }
  function Go(a, l, h) {
    if (Ze = hr(), Je = Vr(), Dn) {
      var w = Je.queue;
      if (l = w.dispatch, dr !== null && (h = dr.get(w), h !== void 0)) {
        dr.delete(w), w = Je.memoizedState;
        do
          w = a(w, h.action), h = h.next;
        while (h !== null);
        return Je.memoizedState = w, [w, l];
      }
      return [Je.memoizedState, l];
    }
    return a = a === Qr ? typeof l == "function" ? l() : l : h !== void 0 ? h(l) : l, Je.memoizedState = a, a = Je.queue = { last: null, dispatch: null }, a = a.dispatch = fo.bind(
      null,
      Ze,
      a
    ), [Je.memoizedState, a];
  }
  function Ro(a, l) {
    if (Ze = hr(), Je = Vr(), l = l === void 0 ? null : l, Je !== null) {
      var h = Je.memoizedState;
      if (h !== null && l !== null) {
        var w = h[1];
        e: if (w === null) w = !1;
        else {
          for (var x = 0; x < w.length && x < l.length; x++)
            if (!Yn(l[x], w[x])) {
              w = !1;
              break e;
            }
          w = !0;
        }
        if (w) return h[0];
      }
    }
    return a = a(), Je.memoizedState = [a, l], a;
  }
  function fo(a, l, h) {
    if (25 <= Yo) throw Error(f(301));
    if (a === Ze)
      if (pt = !0, a = { action: h, next: null }, dr === null && (dr = /* @__PURE__ */ new Map()), h = dr.get(l), h === void 0)
        dr.set(l, a);
      else {
        for (l = h; l.next !== null; ) l = l.next;
        l.next = a;
      }
  }
  function uc() {
    throw Error(f(394));
  }
  function Ba() {
    throw Error(f(479));
  }
  function Xo(a, l, h) {
    hr();
    var w = Ho++, x = ln;
    if (typeof a.$$FORM_ACTION == "function") {
      var F = null, L = zt;
      x = x.formState;
      var ne = a.$$IS_SIGNATURE_EQUAL;
      if (x !== null && typeof ne == "function") {
        var U = x[1];
        ne.call(a, x[2], x[3]) && (F = h !== void 0 ? "p" + h : "k" + vn(
          JSON.stringify([L, null, w]),
          0
        ), U === F && (Ln = w, l = x[0]));
      }
      var j = a.bind(null, l);
      return a = function(ce) {
        j(ce);
      }, typeof j.$$FORM_ACTION == "function" && (a.$$FORM_ACTION = function(ce) {
        ce = j.$$FORM_ACTION(ce), h !== void 0 && (h += "", ce.action = h);
        var We = ce.data;
        return We && (F === null && (F = h !== void 0 ? "p" + h : "k" + vn(
          JSON.stringify([
            L,
            null,
            w
          ]),
          0
        )), We.append("$ACTION_KEY", F)), ce;
      }), [l, a, !1];
    }
    var we = a.bind(null, l);
    return [
      l,
      function(ce) {
        we(ce);
      },
      !1
    ];
  }
  function Rs(a) {
    var l = wt;
    return wt += 1, Rr === null && (Rr = []), Ge(Rr, a, l);
  }
  function Nc() {
    throw Error(f(393));
  }
  function $i() {
  }
  var Lc = {
    readContext: function(a) {
      return a._currentValue;
    },
    use: function(a) {
      if (a !== null && typeof a == "object") {
        if (typeof a.then == "function") return Rs(a);
        if (a.$$typeof === M) return a._currentValue;
      }
      throw Error(f(438, String(a)));
    },
    useContext: function(a) {
      return hr(), a._currentValue;
    },
    useMemo: Ro,
    useReducer: Go,
    useRef: function(a) {
      Ze = hr(), Je = Vr();
      var l = Je.memoizedState;
      return l === null ? (a = { current: a }, Je.memoizedState = a) : l;
    },
    useState: function(a) {
      return Go(Qr, a);
    },
    useInsertionEffect: $i,
    useLayoutEffect: $i,
    useCallback: function(a, l) {
      return Ro(function() {
        return a;
      }, l);
    },
    useImperativeHandle: $i,
    useEffect: $i,
    useDebugValue: $i,
    useDeferredValue: function(a, l) {
      return hr(), l !== void 0 ? l : a;
    },
    useTransition: function() {
      return hr(), [!1, uc];
    },
    useId: function() {
      var a = yn.treeContext, l = a.overflow;
      a = a.id, a = (a & ~(1 << 32 - ie(a) - 1)).toString(32) + l;
      var h = Wt;
      if (h === null) throw Error(f(404));
      return l = Ot++, a = "«" + h.idPrefix + "R" + a, 0 < l && (a += "H" + l.toString(32)), a + "»";
    },
    useSyncExternalStore: function(a, l, h) {
      if (h === void 0)
        throw Error(f(407));
      return h();
    },
    useOptimistic: function(a) {
      return hr(), [a, Ba];
    },
    useActionState: Xo,
    useFormState: Xo,
    useHostTransitionStatus: function() {
      return hr(), Bi;
    },
    useMemoCache: function(a) {
      for (var l = Array(a), h = 0; h < a; h++)
        l[h] = ke;
      return l;
    },
    useCacheRefresh: function() {
      return Nc;
    }
  }, Wt = null, Sr = {
    getCacheForType: function() {
      throw Error(f(248));
    }
  }, ot, Ss;
  function Zo(a) {
    if (ot === void 0)
      try {
        throw Error();
      } catch (h) {
        var l = h.stack.trim().match(/\n( *(at )?)/);
        ot = l && l[1] || "", Ss = -1 < h.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < h.stack.indexOf("@") ? "@unknown:0:0" : "";
      }
    return `
` + ot + a + Ss;
  }
  var pi = !1;
  function at(a, l) {
    if (!a || pi) return "";
    pi = !0;
    var h = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var w = {
        DetermineComponentFrameRoot: function() {
          try {
            if (l) {
              var ce = function() {
                throw Error();
              };
              if (Object.defineProperty(ce.prototype, "props", {
                set: function() {
                  throw Error();
                }
              }), typeof Reflect == "object" && Reflect.construct) {
                try {
                  Reflect.construct(ce, []);
                } catch (Ve) {
                  var We = Ve;
                }
                Reflect.construct(a, [], ce);
              } else {
                try {
                  ce.call();
                } catch (Ve) {
                  We = Ve;
                }
                a.call(ce.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (Ve) {
                We = Ve;
              }
              (ce = a()) && typeof ce.catch == "function" && ce.catch(function() {
              });
            }
          } catch (Ve) {
            if (Ve && We && typeof Ve.stack == "string")
              return [Ve.stack, We.stack];
          }
          return [null, null];
        }
      };
      w.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var x = Object.getOwnPropertyDescriptor(
        w.DetermineComponentFrameRoot,
        "name"
      );
      x && x.configurable && Object.defineProperty(
        w.DetermineComponentFrameRoot,
        "name",
        { value: "DetermineComponentFrameRoot" }
      );
      var F = w.DetermineComponentFrameRoot(), L = F[0], ne = F[1];
      if (L && ne) {
        var U = L.split(`
`), j = ne.split(`
`);
        for (x = w = 0; w < U.length && !U[w].includes("DetermineComponentFrameRoot"); )
          w++;
        for (; x < j.length && !j[x].includes(
          "DetermineComponentFrameRoot"
        ); )
          x++;
        if (w === U.length || x === j.length)
          for (w = U.length - 1, x = j.length - 1; 1 <= w && 0 <= x && U[w] !== j[x]; )
            x--;
        for (; 1 <= w && 0 <= x; w--, x--)
          if (U[w] !== j[x]) {
            if (w !== 1 || x !== 1)
              do
                if (w--, x--, 0 > x || U[w] !== j[x]) {
                  var we = `
` + U[w].replace(" at new ", " at ");
                  return a.displayName && we.includes("<anonymous>") && (we = we.replace("<anonymous>", a.displayName)), we;
                }
              while (1 <= w && 0 <= x);
            break;
          }
      }
    } finally {
      pi = !1, Error.prepareStackTrace = h;
    }
    return (h = a ? a.displayName || a.name : "") ? Zo(h) : "";
  }
  function So(a) {
    if (typeof a == "string") return Zo(a);
    if (typeof a == "function")
      return a.prototype && a.prototype.isReactComponent ? at(a, !0) : at(a, !1);
    if (typeof a == "object" && a !== null) {
      switch (a.$$typeof) {
        case J:
          return at(a.render, !1);
        case _:
          return at(a.type, !1);
        case N:
          var l = a, h = l._payload;
          l = l._init;
          try {
            a = l(h);
          } catch {
            return Zo("Lazy");
          }
          return So(a);
      }
      if (typeof a.name == "string")
        return h = a.env, Zo(
          a.name + (h ? " [" + h + "]" : "")
        );
    }
    switch (a) {
      case V:
        return Zo("SuspenseList");
      case re:
        return Zo("Suspense");
    }
    return "";
  }
  function Nl(a) {
    if (typeof a == "object" && a !== null && typeof a.environmentName == "string") {
      var l = a.environmentName;
      a = [a].slice(0), typeof a[0] == "string" ? a.splice(
        0,
        1,
        "%c%s%c " + a[0],
        "background: #e6e6e6;background: light-dark(rgba(0,0,0,0.1), rgba(255,255,255,0.25));color: #000000;color: light-dark(#000000, #ffffff);border-radius: 2px",
        " " + l + " ",
        ""
      ) : a.splice(
        0,
        0,
        "%c%s%c ",
        "background: #e6e6e6;background: light-dark(rgba(0,0,0,0.1), rgba(255,255,255,0.25));color: #000000;color: light-dark(#000000, #ffffff);border-radius: 2px",
        " " + l + " ",
        ""
      ), a.unshift(console), l = Lt.apply(console.error, a), l();
    } else console.error(a);
    return null;
  }
  function Vo() {
  }
  function Ll(a, l, h, w, x, F, L, ne, U, j, we) {
    var ce = /* @__PURE__ */ new Set();
    this.destination = null, this.flushScheduled = !1, this.resumableState = a, this.renderState = l, this.rootFormatContext = h, this.progressiveChunkSize = w === void 0 ? 12800 : w, this.status = 10, this.fatalError = null, this.pendingRootTasks = this.allPendingTasks = this.nextSegmentId = 0, this.completedPreambleSegments = this.completedRootSegment = null, this.abortableTasks = ce, this.pingedTasks = [], this.clientRenderedBoundaries = [], this.completedBoundaries = [], this.partialBoundaries = [], this.trackedPostpones = null, this.onError = x === void 0 ? Nl : x, this.onPostpone = j === void 0 ? Vo : j, this.onAllReady = F === void 0 ? Vo : F, this.onShellReady = L === void 0 ? Vo : L, this.onShellError = ne === void 0 ? Vo : ne, this.onFatalError = U === void 0 ? Vo : U, this.formState = we === void 0 ? null : we;
  }
  function el(a, l, h, w, x, F, L, ne, U, j, we, ce) {
    return l = new Ll(
      l,
      h,
      w,
      x,
      F,
      L,
      ne,
      U,
      j,
      we,
      ce
    ), h = ua(
      l,
      0,
      null,
      w,
      !1,
      !1
    ), h.parentFlushed = !0, a = nl(
      l,
      null,
      a,
      -1,
      null,
      h,
      null,
      null,
      l.abortableTasks,
      null,
      w,
      null,
      oe,
      null,
      !1
    ), ko(a), l.pingedTasks.push(a), l;
  }
  function Na(a, l, h, w, x, F, L, ne, U, j, we) {
    return a = el(
      a,
      l,
      h,
      w,
      x,
      F,
      L,
      ne,
      U,
      j,
      we,
      void 0
    ), a.trackedPostpones = {
      workingMap: /* @__PURE__ */ new Map(),
      rootNodes: [],
      rootSlots: null
    }, a;
  }
  var At = null;
  function ks(a, l) {
    a.pingedTasks.push(l), a.pingedTasks.length === 1 && (a.flushScheduled = a.destination !== null, a.trackedPostpones !== null || a.status === 10 ? ye(function() {
      return dc(a);
    }) : I(function() {
      return dc(a);
    }));
  }
  function Jr(a, l, h, w) {
    return {
      status: 0,
      rootSegmentID: -1,
      parentFlushed: !1,
      pendingTasks: 0,
      completedSegments: [],
      byteSize: 0,
      fallbackAbortableTasks: l,
      errorDigest: null,
      contentState: Cr(),
      fallbackState: Cr(),
      contentPreamble: h,
      fallbackPreamble: w,
      trackedContentKeyPath: null,
      trackedFallbackNode: null
    };
  }
  function nl(a, l, h, w, x, F, L, ne, U, j, we, ce, We, Ve, en) {
    a.allPendingTasks++, x === null ? a.pendingRootTasks++ : x.pendingTasks++;
    var sn = {
      replay: null,
      node: h,
      childIndex: w,
      ping: function() {
        return ks(a, sn);
      },
      blockedBoundary: x,
      blockedSegment: F,
      blockedPreamble: L,
      hoistableState: ne,
      abortSet: U,
      keyPath: j,
      formatContext: we,
      context: ce,
      treeContext: We,
      componentStack: Ve,
      thenableState: l,
      isFallback: en
    };
    return U.add(sn), sn;
  }
  function wi(a, l, h, w, x, F, L, ne, U, j, we, ce, We, Ve) {
    a.allPendingTasks++, F === null ? a.pendingRootTasks++ : F.pendingTasks++, h.pendingTasks++;
    var en = {
      replay: h,
      node: w,
      childIndex: x,
      ping: function() {
        return ks(a, en);
      },
      blockedBoundary: F,
      blockedSegment: null,
      blockedPreamble: null,
      hoistableState: L,
      abortSet: ne,
      keyPath: U,
      formatContext: j,
      context: we,
      treeContext: ce,
      componentStack: We,
      thenableState: l,
      isFallback: Ve
    };
    return ne.add(en), en;
  }
  function ua(a, l, h, w, x, F) {
    return {
      status: 0,
      parentFlushed: !1,
      id: -1,
      index: l,
      chunks: [],
      children: [],
      preambleChildren: [],
      parentFormatContext: w,
      boundary: h,
      lastPushedText: x,
      textEmbedded: F
    };
  }
  function ko(a) {
    var l = a.node;
    if (typeof l == "object" && l !== null)
      switch (l.$$typeof) {
        case b:
          a.componentStack = { parent: a.componentStack, type: l.type };
      }
  }
  function Ti(a) {
    var l = {};
    return a && Object.defineProperty(l, "componentStack", {
      configurable: !0,
      enumerable: !0,
      get: function() {
        try {
          var h = "", w = a;
          do
            h += So(w.type), w = w.parent;
          while (w);
          var x = h;
        } catch (F) {
          x = `
Error generating stack: ` + F.message + `
` + F.stack;
        }
        return Object.defineProperty(l, "componentStack", {
          value: x
        }), x;
      }
    }), l;
  }
  function gr(a, l, h) {
    if (a = a.onError, l = a(l, h), l == null || typeof l == "string") return l;
  }
  function La(a, l) {
    var h = a.onShellError, w = a.onFatalError;
    h(l), w(l), a.destination !== null ? (a.status = 14, on(a.destination, l)) : (a.status = 13, a.fatalError = l);
  }
  function zc(a, l, h, w, x, F) {
    var L = l.thenableState;
    for (l.thenableState = null, Ze = {}, yn = l, ln = a, zt = h, Ho = Ot = 0, Ln = -1, wt = 0, Rr = L, a = w(x, F); pt; )
      pt = !1, Ho = Ot = 0, Ln = -1, wt = 0, Yo += 1, Je = null, a = w(x, F);
    return uo(), a;
  }
  function ms(a, l, h, w, x, F, L) {
    var ne = !1;
    if (F !== 0 && a.formState !== null) {
      var U = l.blockedSegment;
      if (U !== null) {
        ne = !0, U = U.chunks;
        for (var j = 0; j < F; j++)
          j === L ? U.push(iu) : U.push($o);
      }
    }
    F = l.keyPath, l.keyPath = h, x ? (h = l.treeContext, l.treeContext = ee(h, 1, 0), ho(a, l, w, -1), l.treeContext = h) : ne ? ho(a, l, w, -1) : Ut(a, l, w, -1), l.keyPath = F;
  }
  function zl(a, l, h, w, x, F) {
    if (typeof w == "function")
      if (w.prototype && w.prototype.isReactComponent) {
        var L = x;
        if ("ref" in x) {
          L = {};
          for (var ne in x)
            ne !== "ref" && (L[ne] = x[ne]);
        }
        var U = w.defaultProps;
        if (U) {
          L === x && (L = Qe({}, L, x));
          for (var j in U)
            L[j] === void 0 && (L[j] = U[j]);
        }
        x = L, L = Bc, U = w.contextType, typeof U == "object" && U !== null && (L = U._currentValue), L = new w(x, L);
        var we = L.state !== void 0 ? L.state : null;
        if (L.updater = B, L.props = x, L.state = we, U = { queue: [], replace: !1 }, L._reactInternals = U, F = w.contextType, L.context = typeof F == "object" && F !== null ? F._currentValue : Bc, F = w.getDerivedStateFromProps, typeof F == "function" && (F = F(x, we), we = F == null ? we : Qe({}, we, F), L.state = we), typeof w.getDerivedStateFromProps != "function" && typeof L.getSnapshotBeforeUpdate != "function" && (typeof L.UNSAFE_componentWillMount == "function" || typeof L.componentWillMount == "function"))
          if (w = L.state, typeof L.componentWillMount == "function" && L.componentWillMount(), typeof L.UNSAFE_componentWillMount == "function" && L.UNSAFE_componentWillMount(), w !== L.state && B.enqueueReplaceState(
            L,
            L.state,
            null
          ), U.queue !== null && 0 < U.queue.length)
            if (w = U.queue, F = U.replace, U.queue = null, U.replace = !1, F && w.length === 1)
              L.state = w[0];
            else {
              for (U = F ? w[0] : L.state, we = !0, F = F ? 1 : 0; F < w.length; F++)
                j = w[F], j = typeof j == "function" ? j.call(L, U, x, void 0) : j, j != null && (we ? (we = !1, U = Qe({}, U, j)) : Qe(U, j));
              L.state = U;
            }
          else U.queue = null;
        if (w = L.render(), a.status === 12) throw null;
        x = l.keyPath, l.keyPath = h, Ut(a, l, w, -1), l.keyPath = x;
      } else {
        if (w = zc(a, l, h, w, x, void 0), a.status === 12) throw null;
        ms(
          a,
          l,
          h,
          w,
          Ot !== 0,
          Ho,
          Ln
        );
      }
    else if (typeof w == "string")
      if (L = l.blockedSegment, L === null)
        L = x.children, U = l.formatContext, we = l.keyPath, l.formatContext = $a(U, w, x), l.keyPath = h, ho(a, l, L, -1), l.formatContext = U, l.keyPath = we;
      else {
        F = Oc(
          L.chunks,
          w,
          x,
          a.resumableState,
          a.renderState,
          l.blockedPreamble,
          l.hoistableState,
          l.formatContext,
          L.lastPushedText,
          l.isFallback
        ), L.lastPushedText = !1, U = l.formatContext, we = l.keyPath, l.keyPath = h, (l.formatContext = $a(U, w, x)).insertionMode === 3 ? (h = ua(
          a,
          0,
          null,
          l.formatContext,
          !1,
          !1
        ), L.preambleChildren.push(h), h = nl(
          a,
          null,
          F,
          -1,
          l.blockedBoundary,
          h,
          l.blockedPreamble,
          l.hoistableState,
          a.abortableTasks,
          l.keyPath,
          l.formatContext,
          l.context,
          l.treeContext,
          l.componentStack,
          l.isFallback
        ), ko(h), a.pingedTasks.push(h)) : ho(a, l, F, -1), l.formatContext = U, l.keyPath = we;
        e: {
          switch (l = L.chunks, a = a.resumableState, w) {
            case "title":
            case "style":
            case "script":
            case "area":
            case "base":
            case "br":
            case "col":
            case "embed":
            case "hr":
            case "img":
            case "input":
            case "keygen":
            case "link":
            case "meta":
            case "param":
            case "source":
            case "track":
            case "wbr":
              break e;
            case "body":
              if (1 >= U.insertionMode) {
                a.hasBody = !0;
                break e;
              }
              break;
            case "html":
              if (U.insertionMode === 0) {
                a.hasHtml = !0;
                break e;
              }
              break;
            case "head":
              if (1 >= U.insertionMode) break e;
          }
          l.push(Tr(w));
        }
        L.lastPushedText = !1;
      }
    else {
      switch (w) {
        case je:
        case A:
        case O:
        case S:
          w = l.keyPath, l.keyPath = h, Ut(a, l, x.children, -1), l.keyPath = w;
          return;
        case Me:
          x.mode !== "hidden" && (w = l.keyPath, l.keyPath = h, Ut(a, l, x.children, -1), l.keyPath = w);
          return;
        case V:
          w = l.keyPath, l.keyPath = h, Ut(a, l, x.children, -1), l.keyPath = w;
          return;
        case ge:
        case Pe:
          throw Error(f(343));
        case re:
          e: if (l.replay !== null) {
            w = l.keyPath, l.keyPath = h, h = x.children;
            try {
              ho(a, l, h, -1);
            } finally {
              l.keyPath = w;
            }
          } else {
            w = l.keyPath;
            var ce = l.blockedBoundary;
            F = l.blockedPreamble;
            var We = l.hoistableState;
            j = l.blockedSegment, ne = x.fallback, x = x.children;
            var Ve = /* @__PURE__ */ new Set(), en = 2 > l.formatContext.insertionMode ? Jr(
              a,
              Ve,
              Rn(),
              Rn()
            ) : Jr(a, Ve, null, null);
            a.trackedPostpones !== null && (en.trackedContentKeyPath = h);
            var sn = ua(
              a,
              j.chunks.length,
              en,
              l.formatContext,
              !1,
              !1
            );
            j.children.push(sn), j.lastPushedText = !1;
            var zn = ua(
              a,
              0,
              null,
              l.formatContext,
              !1,
              !1
            );
            if (zn.parentFlushed = !0, a.trackedPostpones !== null) {
              L = [h[0], "Suspense Fallback", h[2]], U = [L[1], L[2], [], null], a.trackedPostpones.workingMap.set(L, U), en.trackedFallbackNode = U, l.blockedSegment = sn, l.blockedPreamble = en.fallbackPreamble, l.keyPath = L, sn.status = 6;
              try {
                ho(a, l, ne, -1), sn.lastPushedText && sn.textEmbedded && sn.chunks.push(Bo), sn.status = 1;
              } catch (Ct) {
                throw sn.status = a.status === 12 ? 3 : 4, Ct;
              } finally {
                l.blockedSegment = j, l.blockedPreamble = F, l.keyPath = w;
              }
              l = nl(
                a,
                null,
                x,
                -1,
                en,
                zn,
                en.contentPreamble,
                en.contentState,
                l.abortSet,
                h,
                l.formatContext,
                l.context,
                l.treeContext,
                l.componentStack,
                l.isFallback
              ), ko(l), a.pingedTasks.push(l);
            } else {
              l.blockedBoundary = en, l.blockedPreamble = en.contentPreamble, l.hoistableState = en.contentState, l.blockedSegment = zn, l.keyPath = h, zn.status = 6;
              try {
                if (ho(a, l, x, -1), zn.lastPushedText && zn.textEmbedded && zn.chunks.push(Bo), zn.status = 1, Ei(en, zn), en.pendingTasks === 0 && en.status === 0) {
                  en.status = 1, a.pendingRootTasks === 0 && l.blockedPreamble && Qo(a);
                  break e;
                }
              } catch (Ct) {
                en.status = 4, a.status === 12 ? (zn.status = 3, L = a.fatalError) : (zn.status = 4, L = Ct), U = Ti(l.componentStack), we = gr(
                  a,
                  L,
                  U
                ), en.errorDigest = we, Ci(a, en);
              } finally {
                l.blockedBoundary = ce, l.blockedPreamble = F, l.hoistableState = We, l.blockedSegment = j, l.keyPath = w;
              }
              l = nl(
                a,
                null,
                ne,
                -1,
                ce,
                sn,
                en.fallbackPreamble,
                en.fallbackState,
                Ve,
                [h[0], "Suspense Fallback", h[2]],
                l.formatContext,
                l.context,
                l.treeContext,
                l.componentStack,
                !0
              ), ko(l), a.pingedTasks.push(l);
            }
          }
          return;
      }
      if (typeof w == "object" && w !== null)
        switch (w.$$typeof) {
          case J:
            if ("ref" in x)
              for (en in L = {}, x)
                en !== "ref" && (L[en] = x[en]);
            else L = x;
            w = zc(
              a,
              l,
              h,
              w.render,
              L,
              F
            ), ms(
              a,
              l,
              h,
              w,
              Ot !== 0,
              Ho,
              Ln
            );
            return;
          case _:
            zl(a, l, h, w.type, x, F);
            return;
          case Y:
          case M:
            if (U = x.children, L = l.keyPath, x = x.value, we = w._currentValue, w._currentValue = x, F = vi, vi = w = {
              parent: F,
              depth: F === null ? 0 : F.depth + 1,
              context: w,
              parentValue: we,
              value: x
            }, l.context = w, l.keyPath = h, Ut(a, l, U, -1), a = vi, a === null) throw Error(f(403));
            a.context._currentValue = a.parentValue, a = vi = a.parent, l.context = a, l.keyPath = L;
            return;
          case Z:
            x = x.children, w = x(w._context._currentValue), x = l.keyPath, l.keyPath = h, Ut(a, l, w, -1), l.keyPath = x;
            return;
          case N:
            if (L = w._init, w = L(w._payload), a.status === 12) throw null;
            zl(a, l, h, w, x, F);
            return;
        }
      throw Error(
        f(130, w == null ? w : typeof w, "")
      );
    }
  }
  function fc(a, l, h, w, x) {
    var F = l.replay, L = l.blockedBoundary, ne = ua(
      a,
      0,
      null,
      l.formatContext,
      !1,
      !1
    );
    ne.id = h, ne.parentFlushed = !0;
    try {
      l.replay = null, l.blockedSegment = ne, ho(a, l, w, x), ne.status = 1, L === null ? a.completedRootSegment = ne : (Ei(L, ne), L.parentFlushed && a.partialBoundaries.push(L));
    } finally {
      l.replay = F, l.blockedSegment = null;
    }
  }
  function Ut(a, l, h, w) {
    l.replay !== null && typeof l.replay.slots == "number" ? fc(a, l, l.replay.slots, h, w) : (l.node = h, l.childIndex = w, h = l.componentStack, ko(l), tl(a, l), l.componentStack = h);
  }
  function tl(a, l) {
    var h = l.node, w = l.childIndex;
    if (h !== null) {
      if (typeof h == "object") {
        switch (h.$$typeof) {
          case b:
            var x = h.type, F = h.key, L = h.props;
            h = L.ref;
            var ne = h !== void 0 ? h : null, U = xr(x), j = F ?? (w === -1 ? 0 : w);
            if (F = [l.keyPath, U, j], l.replay !== null)
              e: {
                var we = l.replay;
                for (w = we.nodes, h = 0; h < w.length; h++) {
                  var ce = w[h];
                  if (j === ce[1]) {
                    if (ce.length === 4) {
                      if (U !== null && U !== ce[0])
                        throw Error(
                          f(490, ce[0], U)
                        );
                      var We = ce[2];
                      U = ce[3], j = l.node, l.replay = {
                        nodes: We,
                        slots: U,
                        pendingTasks: 1
                      };
                      try {
                        if (zl(a, l, F, x, L, ne), l.replay.pendingTasks === 1 && 0 < l.replay.nodes.length)
                          throw Error(f(488));
                        l.replay.pendingTasks--;
                      } catch (Et) {
                        if (typeof Et == "object" && Et !== null && (Et === Ue || typeof Et.then == "function"))
                          throw l.node === j && (l.replay = we), Et;
                        l.replay.pendingTasks--, L = Ti(l.componentStack), F = l.blockedBoundary, x = Et, L = gr(a, x, L), fa(
                          a,
                          F,
                          We,
                          U,
                          x,
                          L
                        );
                      }
                      l.replay = we;
                    } else {
                      if (x !== re)
                        throw Error(
                          f(
                            490,
                            "Suspense",
                            xr(x) || "Unknown"
                          )
                        );
                      n: {
                        we = void 0, x = ce[5], ne = ce[2], U = ce[3], j = ce[4] === null ? [] : ce[4][2], ce = ce[4] === null ? null : ce[4][3];
                        var Ve = l.keyPath, en = l.replay, sn = l.blockedBoundary, zn = l.hoistableState, Ct = L.children, Sn = L.fallback, kr = /* @__PURE__ */ new Set();
                        L = 2 > l.formatContext.insertionMode ? Jr(
                          a,
                          kr,
                          Rn(),
                          Rn()
                        ) : Jr(
                          a,
                          kr,
                          null,
                          null
                        ), L.parentFlushed = !0, L.rootSegmentID = x, l.blockedBoundary = L, l.hoistableState = L.contentState, l.keyPath = F, l.replay = {
                          nodes: ne,
                          slots: U,
                          pendingTasks: 1
                        };
                        try {
                          if (ho(a, l, Ct, -1), l.replay.pendingTasks === 1 && 0 < l.replay.nodes.length)
                            throw Error(f(488));
                          if (l.replay.pendingTasks--, L.pendingTasks === 0 && L.status === 0) {
                            L.status = 1, a.completedBoundaries.push(L);
                            break n;
                          }
                        } catch (Et) {
                          L.status = 4, We = Ti(l.componentStack), we = gr(
                            a,
                            Et,
                            We
                          ), L.errorDigest = we, l.replay.pendingTasks--, a.clientRenderedBoundaries.push(L);
                        } finally {
                          l.blockedBoundary = sn, l.hoistableState = zn, l.replay = en, l.keyPath = Ve;
                        }
                        l = wi(
                          a,
                          null,
                          {
                            nodes: j,
                            slots: ce,
                            pendingTasks: 0
                          },
                          Sn,
                          -1,
                          sn,
                          L.fallbackState,
                          kr,
                          [F[0], "Suspense Fallback", F[2]],
                          l.formatContext,
                          l.context,
                          l.treeContext,
                          l.componentStack,
                          !0
                        ), ko(l), a.pingedTasks.push(l);
                      }
                    }
                    w.splice(h, 1);
                    break e;
                  }
                }
              }
            else zl(a, l, F, x, L, ne);
            return;
          case T:
            throw Error(f(257));
          case N:
            if (We = h._init, h = We(h._payload), a.status === 12) throw null;
            Ut(a, l, h, w);
            return;
        }
        if (Xe(h)) {
          rl(a, l, h, w);
          return;
        }
        if (h === null || typeof h != "object" ? We = null : (We = $ && h[$] || h["@@iterator"], We = typeof We == "function" ? We : null), We && (We = We.call(h))) {
          if (h = We.next(), !h.done) {
            L = [];
            do
              L.push(h.value), h = We.next();
            while (!h.done);
            rl(a, l, L, w);
          }
          return;
        }
        if (typeof h.then == "function")
          return l.thenableState = null, Ut(a, l, Rs(h), w);
        if (h.$$typeof === M)
          return Ut(
            a,
            l,
            h._currentValue,
            w
          );
        throw w = Object.prototype.toString.call(h), Error(
          f(
            31,
            w === "[object Object]" ? "object with keys {" + Object.keys(h).join(", ") + "}" : w
          )
        );
      }
      typeof h == "string" ? (w = l.blockedSegment, w !== null && (w.lastPushedText = $s(
        w.chunks,
        h,
        a.renderState,
        w.lastPushedText
      ))) : (typeof h == "number" || typeof h == "bigint") && (w = l.blockedSegment, w !== null && (w.lastPushedText = $s(
        w.chunks,
        "" + h,
        a.renderState,
        w.lastPushedText
      )));
    }
  }
  function rl(a, l, h, w) {
    var x = l.keyPath;
    if (w !== -1 && (l.keyPath = [l.keyPath, "Fragment", w], l.replay !== null)) {
      for (var F = l.replay, L = F.nodes, ne = 0; ne < L.length; ne++) {
        var U = L[ne];
        if (U[1] === w) {
          w = U[2], U = U[3], l.replay = { nodes: w, slots: U, pendingTasks: 1 };
          try {
            if (rl(a, l, h, -1), l.replay.pendingTasks === 1 && 0 < l.replay.nodes.length)
              throw Error(f(488));
            l.replay.pendingTasks--;
          } catch (ce) {
            if (typeof ce == "object" && ce !== null && (ce === Ue || typeof ce.then == "function"))
              throw ce;
            l.replay.pendingTasks--, h = Ti(l.componentStack);
            var j = l.blockedBoundary, we = ce;
            h = gr(a, we, h), fa(
              a,
              j,
              w,
              U,
              we,
              h
            );
          }
          l.replay = F, L.splice(ne, 1);
          break;
        }
      }
      l.keyPath = x;
      return;
    }
    if (F = l.treeContext, L = h.length, l.replay !== null && (ne = l.replay.slots, ne !== null && typeof ne == "object")) {
      for (w = 0; w < L; w++)
        U = h[w], l.treeContext = ee(F, L, w), j = ne[w], typeof j == "number" ? (fc(a, l, j, U, w), delete ne[w]) : ho(a, l, U, w);
      l.treeContext = F, l.keyPath = x;
      return;
    }
    for (ne = 0; ne < L; ne++)
      w = h[ne], l.treeContext = ee(F, L, ne), ho(a, l, w, ne);
    l.treeContext = F, l.keyPath = x;
  }
  function Ci(a, l) {
    a = a.trackedPostpones, a !== null && (l = l.trackedContentKeyPath, l !== null && (l = a.workingMap.get(l), l !== void 0 && (l.length = 4, l[2] = [], l[3] = null)));
  }
  function Ps(a, l, h) {
    return wi(
      a,
      h,
      l.replay,
      l.node,
      l.childIndex,
      l.blockedBoundary,
      l.hoistableState,
      l.abortSet,
      l.keyPath,
      l.formatContext,
      l.context,
      l.treeContext,
      l.componentStack,
      l.isFallback
    );
  }
  function Fs(a, l, h) {
    var w = l.blockedSegment, x = ua(
      a,
      w.chunks.length,
      null,
      l.formatContext,
      w.lastPushedText,
      !0
    );
    return w.children.push(x), w.lastPushedText = !1, nl(
      a,
      h,
      l.node,
      l.childIndex,
      l.blockedBoundary,
      x,
      l.blockedPreamble,
      l.hoistableState,
      l.abortSet,
      l.keyPath,
      l.formatContext,
      l.context,
      l.treeContext,
      l.componentStack,
      l.isFallback
    );
  }
  function ho(a, l, h, w) {
    var x = l.formatContext, F = l.context, L = l.keyPath, ne = l.treeContext, U = l.componentStack, j = l.blockedSegment;
    if (j === null)
      try {
        return Ut(a, l, h, w);
      } catch (We) {
        if (uo(), h = We === Ue ? On() : We, typeof h == "object" && h !== null) {
          if (typeof h.then == "function") {
            w = Tt(), a = Ps(a, l, w).ping, h.then(a, a), l.formatContext = x, l.context = F, l.keyPath = L, l.treeContext = ne, l.componentStack = U, P(F);
            return;
          }
          if (h.message === "Maximum call stack size exceeded") {
            h = Tt(), h = Ps(a, l, h), a.pingedTasks.push(h), l.formatContext = x, l.context = F, l.keyPath = L, l.treeContext = ne, l.componentStack = U, P(F);
            return;
          }
        }
      }
    else {
      var we = j.children.length, ce = j.chunks.length;
      try {
        return Ut(a, l, h, w);
      } catch (We) {
        if (uo(), j.children.length = we, j.chunks.length = ce, h = We === Ue ? On() : We, typeof h == "object" && h !== null) {
          if (typeof h.then == "function") {
            w = Tt(), a = Fs(a, l, w).ping, h.then(a, a), l.formatContext = x, l.context = F, l.keyPath = L, l.treeContext = ne, l.componentStack = U, P(F);
            return;
          }
          if (h.message === "Maximum call stack size exceeded") {
            h = Tt(), h = Fs(a, l, h), a.pingedTasks.push(h), l.formatContext = x, l.context = F, l.keyPath = L, l.treeContext = ne, l.componentStack = U, P(F);
            return;
          }
        }
      }
    }
    throw l.formatContext = x, l.context = F, l.keyPath = L, l.treeContext = ne, P(F), h;
  }
  function cu(a) {
    var l = a.blockedBoundary;
    a = a.blockedSegment, a !== null && (a.status = 3, As(this, l, a));
  }
  function fa(a, l, h, w, x, F) {
    for (var L = 0; L < h.length; L++) {
      var ne = h[L];
      if (ne.length === 4)
        fa(
          a,
          l,
          ne[2],
          ne[3],
          x,
          F
        );
      else {
        ne = ne[5];
        var U = a, j = F, we = Jr(
          U,
          /* @__PURE__ */ new Set(),
          null,
          null
        );
        we.parentFlushed = !0, we.rootSegmentID = ne, we.status = 4, we.errorDigest = j, we.parentFlushed && U.clientRenderedBoundaries.push(we);
      }
    }
    if (h.length = 0, w !== null) {
      if (l === null) throw Error(f(487));
      if (l.status !== 4 && (l.status = 4, l.errorDigest = F, l.parentFlushed && a.clientRenderedBoundaries.push(l)), typeof w == "object") for (var ce in w) delete w[ce];
    }
  }
  function Wc(a, l, h) {
    var w = a.blockedBoundary, x = a.blockedSegment;
    if (x !== null) {
      if (x.status === 6) return;
      x.status = 3;
    }
    if (x = Ti(a.componentStack), w === null) {
      if (l.status !== 13 && l.status !== 14) {
        if (w = a.replay, w === null) {
          gr(l, h, x), La(l, h);
          return;
        }
        w.pendingTasks--, w.pendingTasks === 0 && 0 < w.nodes.length && (a = gr(l, h, x), fa(
          l,
          null,
          w.nodes,
          w.slots,
          h,
          a
        )), l.pendingRootTasks--, l.pendingRootTasks === 0 && Wl(l);
      }
    } else
      w.pendingTasks--, w.status !== 4 && (w.status = 4, a = gr(l, h, x), w.status = 4, w.errorDigest = a, Ci(l, w), w.parentFlushed && l.clientRenderedBoundaries.push(w)), w.fallbackAbortableTasks.forEach(function(F) {
        return Wc(F, l, h);
      }), w.fallbackAbortableTasks.clear();
    l.allPendingTasks--, l.allPendingTasks === 0 && Os(l);
  }
  function za(a, l) {
    try {
      var h = a.renderState, w = h.onHeaders;
      if (w) {
        var x = h.headers;
        if (x) {
          h.headers = null;
          var F = x.preconnects;
          if (x.fontPreloads && (F && (F += ", "), F += x.fontPreloads), x.highImagePreloads && (F && (F += ", "), F += x.highImagePreloads), !l) {
            var L = h.styles.values(), ne = L.next();
            e: for (; 0 < x.remainingCapacity && !ne.done; ne = L.next())
              for (var U = ne.value.sheets.values(), j = U.next(); 0 < x.remainingCapacity && !j.done; j = U.next()) {
                var we = j.value, ce = we.props, We = ce.href, Ve = we.props, en = _a(Ve.href, "style", {
                  crossOrigin: Ve.crossOrigin,
                  integrity: Ve.integrity,
                  nonce: Ve.nonce,
                  type: Ve.type,
                  fetchPriority: Ve.fetchPriority,
                  referrerPolicy: Ve.referrerPolicy,
                  media: Ve.media
                });
                if (0 <= (x.remainingCapacity -= en.length + 2))
                  h.resets.style[We] = ut, F && (F += ", "), F += en, h.resets.style[We] = typeof ce.crossOrigin == "string" || typeof ce.integrity == "string" ? [ce.crossOrigin, ce.integrity] : ut;
                else break e;
              }
          }
          w(F ? { Link: F } : {});
        }
      }
    } catch (sn) {
      gr(a, sn, {});
    }
  }
  function Wl(a) {
    a.trackedPostpones === null && za(a, !0), a.trackedPostpones === null && Qo(a), a.onShellError = Vo, a = a.onShellReady, a();
  }
  function Os(a) {
    za(
      a,
      a.trackedPostpones === null ? !0 : a.completedRootSegment === null || a.completedRootSegment.status !== 5
    ), Qo(a), a = a.onAllReady, a();
  }
  function Ei(a, l) {
    if (l.chunks.length === 0 && l.children.length === 1 && l.children[0].boundary === null && l.children[0].id === -1) {
      var h = l.children[0];
      h.id = l.id, h.parentFlushed = !0, h.status === 1 && Ei(a, h);
    } else a.completedSegments.push(l);
  }
  function As(a, l, h) {
    if (l === null) {
      if (h !== null && h.parentFlushed) {
        if (a.completedRootSegment !== null)
          throw Error(f(389));
        a.completedRootSegment = h;
      }
      a.pendingRootTasks--, a.pendingRootTasks === 0 && Wl(a);
    } else
      l.pendingTasks--, l.status !== 4 && (l.pendingTasks === 0 ? (l.status === 0 && (l.status = 1), h !== null && h.parentFlushed && h.status === 1 && Ei(l, h), l.parentFlushed && a.completedBoundaries.push(l), l.status === 1 && (l.fallbackAbortableTasks.forEach(cu, a), l.fallbackAbortableTasks.clear(), a.pendingRootTasks === 0 && a.trackedPostpones === null && l.contentPreamble !== null && Qo(a))) : h !== null && h.parentFlushed && h.status === 1 && (Ei(l, h), l.completedSegments.length === 1 && l.parentFlushed && a.partialBoundaries.push(l)));
    a.allPendingTasks--, a.allPendingTasks === 0 && Os(a);
  }
  function dc(a) {
    if (a.status !== 14 && a.status !== 13) {
      var l = vi, h = Zt.H;
      Zt.H = Lc;
      var w = Zt.A;
      Zt.A = Sr;
      var x = At;
      At = a;
      var F = Wt;
      Wt = a.resumableState;
      try {
        var L = a.pingedTasks, ne;
        for (ne = 0; ne < L.length; ne++) {
          var U = L[ne], j = a, we = U.blockedSegment;
          if (we === null) {
            var ce = j;
            if (U.replay.pendingTasks !== 0) {
              P(U.context);
              try {
                if (typeof U.replay.slots == "number" ? fc(
                  ce,
                  U,
                  U.replay.slots,
                  U.node,
                  U.childIndex
                ) : tl(ce, U), U.replay.pendingTasks === 1 && 0 < U.replay.nodes.length)
                  throw Error(f(488));
                U.replay.pendingTasks--, U.abortSet.delete(U), As(ce, U.blockedBoundary, null);
              } catch (Mt) {
                uo();
                var We = Mt === Ue ? On() : Mt;
                if (typeof We == "object" && We !== null && typeof We.then == "function") {
                  var Ve = U.ping;
                  We.then(Ve, Ve), U.thenableState = Tt();
                } else {
                  U.replay.pendingTasks--, U.abortSet.delete(U);
                  var en = Ti(U.componentStack);
                  j = void 0;
                  var sn = ce, zn = U.blockedBoundary, Ct = ce.status === 12 ? ce.fatalError : We, Sn = U.replay.nodes, kr = U.replay.slots;
                  j = gr(
                    sn,
                    Ct,
                    en
                  ), fa(
                    sn,
                    zn,
                    Sn,
                    kr,
                    Ct,
                    j
                  ), ce.pendingRootTasks--, ce.pendingRootTasks === 0 && Wl(ce), ce.allPendingTasks--, ce.allPendingTasks === 0 && Os(ce);
                }
              } finally {
              }
            }
          } else if (ce = void 0, sn = we, sn.status === 0) {
            sn.status = 6, P(U.context);
            var Et = sn.children.length, Kr = sn.chunks.length;
            try {
              tl(j, U), sn.lastPushedText && sn.textEmbedded && sn.chunks.push(Bo), U.abortSet.delete(U), sn.status = 1, As(j, U.blockedBoundary, sn);
            } catch (Mt) {
              uo(), sn.children.length = Et, sn.chunks.length = Kr;
              var br = Mt === Ue ? On() : j.status === 12 ? j.fatalError : Mt;
              if (typeof br == "object" && br !== null && typeof br.then == "function") {
                sn.status = 0, U.thenableState = Tt();
                var qt = U.ping;
                br.then(qt, qt);
              } else {
                var Dr = Ti(U.componentStack);
                U.abortSet.delete(U), sn.status = 4;
                var Wn = U.blockedBoundary;
                ce = gr(
                  j,
                  br,
                  Dr
                ), Wn === null ? La(j, br) : (Wn.pendingTasks--, Wn.status !== 4 && (Wn.status = 4, Wn.errorDigest = ce, Ci(j, Wn), Wn.parentFlushed && j.clientRenderedBoundaries.push(Wn), j.pendingRootTasks === 0 && j.trackedPostpones === null && Wn.contentPreamble !== null && Qo(j))), j.allPendingTasks--, j.allPendingTasks === 0 && Os(j);
              }
            } finally {
            }
          }
        }
        L.splice(0, ne), a.destination !== null && xi(a, a.destination);
      } catch (Mt) {
        gr(a, Mt, {}), La(a, Mt);
      } finally {
        Wt = F, Zt.H = h, Zt.A = w, h === Lc && P(l), At = x;
      }
    }
  }
  function hc(a, l, h) {
    l.preambleChildren.length && h.push(l.preambleChildren);
    for (var w = !1, x = 0; x < l.children.length; x++)
      w = Ms(
        a,
        l.children[x],
        h
      ) || w;
    return w;
  }
  function Ms(a, l, h) {
    var w = l.boundary;
    if (w === null)
      return hc(
        a,
        l,
        h
      );
    var x = w.contentPreamble, F = w.fallbackPreamble;
    if (x === null || F === null) return !1;
    switch (w.status) {
      case 1:
        if (Ac(a.renderState, x), l = w.completedSegments[0], !l) throw Error(f(391));
        return hc(
          a,
          l,
          h
        );
      case 5:
        if (a.trackedPostpones !== null) return !0;
      case 4:
        if (l.status === 1)
          return Ac(a.renderState, F), hc(
            a,
            l,
            h
          );
      default:
        return !0;
    }
  }
  function Qo(a) {
    if (a.completedRootSegment && a.completedPreambleSegments === null) {
      var l = [], h = Ms(
        a,
        a.completedRootSegment,
        l
      ), w = a.renderState.preamble;
      (h === !1 || w.headChunks && w.bodyChunks) && (a.completedPreambleSegments = l);
    }
  }
  function Wa(a, l, h, w) {
    switch (h.parentFlushed = !0, h.status) {
      case 0:
        h.id = a.nextSegmentId++;
      case 5:
        return w = h.id, h.lastPushedText = !1, h.textEmbedded = !1, a = a.renderState, te(l, Co), te(l, a.placeholderPrefix), a = q(w.toString(16)), te(l, a), Ce(l, Fa);
      case 1:
        h.status = 2;
        var x = !0, F = h.chunks, L = 0;
        h = h.children;
        for (var ne = 0; ne < h.length; ne++) {
          for (x = h[ne]; L < x.index; L++)
            te(l, F[L]);
          x = Ul(a, l, x, w);
        }
        for (; L < F.length - 1; L++)
          te(l, F[L]);
        return L < F.length && (x = Ce(l, F[L])), x;
      default:
        throw Error(f(390));
    }
  }
  function Ul(a, l, h, w) {
    var x = h.boundary;
    if (x === null)
      return Wa(a, l, h, w);
    if (x.parentFlushed = !0, x.status === 4) {
      var F = x.errorDigest;
      return Ce(l, lo), te(l, Xi), F && (te(l, na), te(l, q(de(F))), te(
        l,
        Oa
      )), Ce(l, ir), Wa(a, l, h, w), (a = x.fallbackPreamble) && Aa(l, a), Ce(l, ai);
    }
    if (x.status !== 1)
      return x.status === 0 && (x.rootSegmentID = a.nextSegmentId++), 0 < x.completedSegments.length && a.partialBoundaries.push(x), ta(
        l,
        a.renderState,
        x.rootSegmentID
      ), w && (x = x.fallbackState, x.styles.forEach(cc, w), x.stylesheets.forEach(
        Bl,
        w
      )), Wa(a, l, h, w), Ce(l, ai);
    if (x.byteSize > a.progressiveChunkSize)
      return x.rootSegmentID = a.nextSegmentId++, a.completedBoundaries.push(x), ta(
        l,
        a.renderState,
        x.rootSegmentID
      ), Wa(a, l, h, w), Ce(l, ai);
    if (w && (h = x.contentState, h.styles.forEach(cc, w), h.stylesheets.forEach(Bl, w)), Ce(l, Yi), h = x.completedSegments, h.length !== 1) throw Error(f(391));
    return Ul(a, l, h[0], w), (a = x.contentPreamble) && Aa(l, a), Ce(l, ai);
  }
  function ol(a, l, h, w) {
    return Vi(
      l,
      a.renderState,
      h.parentFormatContext,
      h.id
    ), Ul(a, l, h, w), Da(l, h.parentFormatContext);
  }
  function Is(a, l, h) {
    for (var w = h.completedSegments, x = 0; x < w.length; x++)
      Hl(
        a,
        l,
        h,
        w[x]
      );
    w.length = 0, Uo(
      l,
      h.contentState,
      a.renderState
    ), w = a.resumableState, a = a.renderState, x = h.rootSegmentID, h = h.contentState;
    var F = a.stylesToHoist;
    return a.stylesToHoist = !1, te(l, a.startInlineScript), F ? (w.instructions & 2) === 0 ? (w.instructions |= 10, te(l, ys)) : (w.instructions & 8) === 0 ? (w.instructions |= 8, te(l, oc)) : te(l, Ol) : (w.instructions & 2) === 0 ? (w.instructions |= 2, te(l, rc)) : te(l, si), w = q(x.toString(16)), te(l, a.boundaryPrefix), te(l, w), te(l, vs), te(l, a.segmentPrefix), te(l, w), F ? (te(l, Ic), su(l, h)) : te(l, Al), h = Ce(l, ci), oi(l, a) && h;
  }
  function Hl(a, l, h, w) {
    if (w.status === 2) return !0;
    var x = h.contentState, F = w.id;
    if (F === -1) {
      if ((w.id = h.rootSegmentID) === -1)
        throw Error(f(392));
      return ol(a, l, w, x);
    }
    return F === h.rootSegmentID ? ol(a, l, w, x) : (ol(a, l, w, x), h = a.resumableState, a = a.renderState, te(l, a.startInlineScript), (h.instructions & 1) === 0 ? (h.instructions |= 1, te(l, Lo)) : te(l, la), te(l, a.segmentPrefix), F = q(F.toString(16)), te(l, F), te(l, bs), te(l, a.placeholderPrefix), te(l, F), l = Ce(l, Qi), l);
  }
  function xi(a, l) {
    Le = new Uint8Array(2048), dn = 0;
    try {
      if (!(0 < a.pendingRootTasks)) {
        var h, w = a.completedRootSegment;
        if (w !== null) {
          if (w.status === 5) return;
          var x = a.completedPreambleSegments;
          if (x === null) return;
          var F = a.renderState, L = F.preamble, ne = L.htmlChunks, U = L.headChunks, j;
          if (ne) {
            for (j = 0; j < ne.length; j++)
              te(l, ne[j]);
            if (U)
              for (j = 0; j < U.length; j++)
                te(l, U[j]);
            else
              te(l, jn("head")), te(l, Zn);
          } else if (U)
            for (j = 0; j < U.length; j++)
              te(l, U[j]);
          var we = F.charsetChunks;
          for (j = 0; j < we.length; j++)
            te(l, we[j]);
          we.length = 0, F.preconnects.forEach(Jn, l), F.preconnects.clear();
          var ce = F.viewportChunks;
          for (j = 0; j < ce.length; j++)
            te(l, ce[j]);
          ce.length = 0, F.fontPreloads.forEach(Jn, l), F.fontPreloads.clear(), F.highImagePreloads.forEach(Jn, l), F.highImagePreloads.clear(), F.styles.forEach(Nt, l);
          var We = F.importMapChunks;
          for (j = 0; j < We.length; j++)
            te(l, We[j]);
          We.length = 0, F.bootstrapScripts.forEach(Jn, l), F.scripts.forEach(Jn, l), F.scripts.clear(), F.bulkPreloads.forEach(Jn, l), F.bulkPreloads.clear();
          var Ve = F.hoistableChunks;
          for (j = 0; j < Ve.length; j++)
            te(l, Ve[j]);
          for (F = Ve.length = 0; F < x.length; F++) {
            var en = x[F];
            for (L = 0; L < en.length; L++)
              Ul(a, l, en[L], null);
          }
          var sn = a.renderState.preamble, zn = sn.headChunks;
          (sn.htmlChunks || zn) && te(l, Tr("head"));
          var Ct = sn.bodyChunks;
          if (Ct)
            for (x = 0; x < Ct.length; x++)
              te(l, Ct[x]);
          Ul(a, l, w, null), a.completedRootSegment = null, oi(l, a.renderState);
        }
        var Sn = a.renderState;
        w = 0;
        var kr = Sn.viewportChunks;
        for (w = 0; w < kr.length; w++)
          te(l, kr[w]);
        kr.length = 0, Sn.preconnects.forEach(Jn, l), Sn.preconnects.clear(), Sn.fontPreloads.forEach(Jn, l), Sn.fontPreloads.clear(), Sn.highImagePreloads.forEach(
          Jn,
          l
        ), Sn.highImagePreloads.clear(), Sn.styles.forEach(lc, l), Sn.scripts.forEach(Jn, l), Sn.scripts.clear(), Sn.bulkPreloads.forEach(Jn, l), Sn.bulkPreloads.clear();
        var Et = Sn.hoistableChunks;
        for (w = 0; w < Et.length; w++)
          te(l, Et[w]);
        Et.length = 0;
        var Kr = a.clientRenderedBoundaries;
        for (h = 0; h < Kr.length; h++) {
          var br = Kr[h];
          Sn = l;
          var qt = a.resumableState, Dr = a.renderState, Wn = br.rootSegmentID, Mt = br.errorDigest;
          te(
            Sn,
            Dr.startInlineScript
          ), (qt.instructions & 4) === 0 ? (qt.instructions |= 4, te(Sn, Ji)) : te(Sn, ui), te(Sn, Dr.boundaryPrefix), te(Sn, q(Wn.toString(16))), te(Sn, ps), Mt && (te(
            Sn,
            fi
          ), te(
            Sn,
            q(
              di(Mt || "")
            )
          ));
          var it = Ce(
            Sn,
            Ki
          );
          if (!it) {
            a.destination = null, h++, Kr.splice(0, h);
            return;
          }
        }
        Kr.splice(0, h);
        var yr = a.completedBoundaries;
        for (h = 0; h < yr.length; h++)
          if (!Is(a, l, yr[h])) {
            a.destination = null, h++, yr.splice(0, h);
            return;
          }
        yr.splice(0, h), Xn(l), Le = new Uint8Array(2048), dn = 0;
        var ll = a.partialBoundaries;
        for (h = 0; h < ll.length; h++) {
          var Ua = ll[h];
          e: {
            Kr = a, br = l;
            var Ha = Ua.completedSegments;
            for (it = 0; it < Ha.length; it++)
              if (!Hl(
                Kr,
                br,
                Ua,
                Ha[it]
              )) {
                it++, Ha.splice(0, it);
                var sl = !1;
                break e;
              }
            Ha.splice(0, it), sl = Uo(
              br,
              Ua.contentState,
              Kr.renderState
            );
          }
          if (!sl) {
            a.destination = null, h++, ll.splice(0, h);
            return;
          }
        }
        ll.splice(0, h);
        var Ya = a.completedBoundaries;
        for (h = 0; h < Ya.length; h++)
          if (!Is(a, l, Ya[h])) {
            a.destination = null, h++, Ya.splice(0, h);
            return;
          }
        Ya.splice(0, h);
      }
    } finally {
      a.allPendingTasks === 0 && a.pingedTasks.length === 0 && a.clientRenderedBoundaries.length === 0 && a.completedBoundaries.length === 0 ? (a.flushScheduled = !1, h = a.resumableState, h.hasBody && te(l, Tr("body")), h.hasHtml && te(l, Tr("html")), Xn(l), a.status = 14, l.close(), a.destination = null) : Xn(l);
    }
  }
  function Ri(a) {
    a.flushScheduled = a.destination !== null, ye(function() {
      return dc(a);
    }), I(function() {
      a.status === 10 && (a.status = 11), a.trackedPostpones === null && za(a, a.pendingRootTasks === 0);
    });
  }
  function Si(a) {
    a.flushScheduled === !1 && a.pingedTasks.length === 0 && a.destination !== null && (a.flushScheduled = !0, I(function() {
      var l = a.destination;
      l ? xi(a, l) : a.flushScheduled = !1;
    }));
  }
  function al(a, l) {
    if (a.status === 13)
      a.status = 14, on(l, a.fatalError);
    else if (a.status !== 14 && a.destination === null) {
      a.destination = l;
      try {
        xi(a, l);
      } catch (h) {
        gr(a, h, {}), La(a, h);
      }
    }
  }
  function il(a, l) {
    (a.status === 11 || a.status === 10) && (a.status = 12);
    try {
      var h = a.abortableTasks;
      if (0 < h.size) {
        var w = l === void 0 ? Error(f(432)) : typeof l == "object" && l !== null && typeof l.then == "function" ? Error(f(530)) : l;
        a.fatalError = w, h.forEach(function(x) {
          return Wc(x, a, w);
        }), h.clear();
      }
      a.destination !== null && xi(a, a.destination);
    } catch (x) {
      gr(a, x, {}), La(a, x);
    }
  }
  function Ds() {
    var a = o.version;
    if (a !== "19.1.0")
      throw Error(
        f(
          527,
          a,
          "19.1.0"
        )
      );
  }
  return Ds(), Ds(), ff.prerender = function(a, l) {
    return new Promise(function(h, w) {
      var x = l ? l.onHeaders : void 0, F;
      x && (F = function(we) {
        x(new Headers(we));
      });
      var L = Li(
        l ? l.identifierPrefix : void 0,
        l ? l.unstable_externalRuntimeSrc : void 0,
        l ? l.bootstrapScriptContent : void 0,
        l ? l.bootstrapScripts : void 0,
        l ? l.bootstrapModules : void 0
      ), ne = Na(
        a,
        L,
        Rl(
          L,
          void 0,
          l ? l.unstable_externalRuntimeSrc : void 0,
          l ? l.importMap : void 0,
          F,
          l ? l.maxHeadersLength : void 0
        ),
        cs(l ? l.namespaceURI : void 0),
        l ? l.progressiveChunkSize : void 0,
        l ? l.onError : void 0,
        function() {
          var we = {
            prelude: new ReadableStream(
              {
                type: "bytes",
                pull: function(ce) {
                  al(ne, ce);
                },
                cancel: function(ce) {
                  ne.destination = null, il(ne, ce);
                }
              },
              { highWaterMark: 0 }
            )
          };
          h(we);
        },
        void 0,
        void 0,
        w,
        l ? l.onPostpone : void 0
      );
      if (l && l.signal) {
        var U = l.signal;
        if (U.aborted) il(ne, U.reason);
        else {
          var j = function() {
            il(ne, U.reason), U.removeEventListener("abort", j);
          };
          U.addEventListener("abort", j);
        }
      }
      Ri(ne);
    });
  }, ff.renderToReadableStream = function(a, l) {
    return new Promise(function(h, w) {
      var x, F, L = new Promise(function(Ve, en) {
        F = Ve, x = en;
      }), ne = l ? l.onHeaders : void 0, U;
      ne && (U = function(Ve) {
        ne(new Headers(Ve));
      });
      var j = Li(
        l ? l.identifierPrefix : void 0,
        l ? l.unstable_externalRuntimeSrc : void 0,
        l ? l.bootstrapScriptContent : void 0,
        l ? l.bootstrapScripts : void 0,
        l ? l.bootstrapModules : void 0
      ), we = el(
        a,
        j,
        Rl(
          j,
          l ? l.nonce : void 0,
          l ? l.unstable_externalRuntimeSrc : void 0,
          l ? l.importMap : void 0,
          U,
          l ? l.maxHeadersLength : void 0
        ),
        cs(l ? l.namespaceURI : void 0),
        l ? l.progressiveChunkSize : void 0,
        l ? l.onError : void 0,
        F,
        function() {
          var Ve = new ReadableStream(
            {
              type: "bytes",
              pull: function(en) {
                al(we, en);
              },
              cancel: function(en) {
                we.destination = null, il(we, en);
              }
            },
            { highWaterMark: 0 }
          );
          Ve.allReady = L, h(Ve);
        },
        function(Ve) {
          L.catch(function() {
          }), w(Ve);
        },
        x,
        l ? l.onPostpone : void 0,
        l ? l.formState : void 0
      );
      if (l && l.signal) {
        var ce = l.signal;
        if (ce.aborted) il(we, ce.reason);
        else {
          var We = function() {
            il(we, ce.reason), ce.removeEventListener("abort", We);
          };
          ce.addEventListener("abort", We);
        }
      }
      Ri(we);
    });
  }, ff.version = "19.1.0", ff;
}
var df = {};
/**
 * @license React
 * react-dom-server-legacy.browser.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Nh;
function vp() {
  return Nh || (Nh = 1, process.env.NODE_ENV !== "production" && function() {
    function o(n, r, c, v) {
      return "" + r + (c === "s" ? "\\73 " : "\\53 ") + v;
    }
    function d(n, r, c, v) {
      return "" + r + (c === "s" ? "\\u0073" : "\\u0053") + v;
    }
    function f(n) {
      return Object.prototype.toString.call(n).replace(/^\[object (.*)\]$/, function(r, c) {
        return c;
      });
    }
    function b(n) {
      var r = JSON.stringify(n);
      return '"' + n + '"' === r ? n : r;
    }
    function T(n) {
      switch (typeof n) {
        case "string":
          return JSON.stringify(
            10 >= n.length ? n : n.slice(0, 10) + "..."
          );
        case "object":
          return Jn(n) ? "[...]" : n !== null && n.$$typeof === yi ? "client" : (n = f(n), n === "Object" ? "{...}" : n);
        case "function":
          return n.$$typeof === yi ? "client" : (n = n.displayName || n.name) ? "function " + n : "function";
        default:
          return String(n);
      }
    }
    function S(n) {
      if (typeof n == "string") return n;
      switch (n) {
        case zo:
          return "Suspense";
        case sa:
          return "SuspenseList";
      }
      if (typeof n == "object")
        switch (n.$$typeof) {
          case hi:
            return S(n.render);
          case ws:
            return S(n.type);
          case ji:
            var r = n._payload;
            n = n._init;
            try {
              return S(n(r));
            } catch {
            }
        }
      return "";
    }
    function A(n, r) {
      var c = f(n);
      if (c !== "Object" && c !== "Array") return c;
      var v = -1, E = 0;
      if (Jn(n))
        if (Xr.has(n)) {
          var m = Xr.get(n);
          c = "<" + S(m) + ">";
          for (var H = 0; H < n.length; H++) {
            var X = n[H];
            X = typeof X == "string" ? X : typeof X == "object" && X !== null ? "{" + A(X) + "}" : "{" + T(X) + "}", "" + H === r ? (v = c.length, E = X.length, c += X) : c = 15 > X.length && 40 > c.length + X.length ? c + X : c + "{...}";
          }
          c += "</" + S(m) + ">";
        } else {
          for (c = "[", m = 0; m < n.length; m++)
            0 < m && (c += ", "), H = n[m], H = typeof H == "object" && H !== null ? A(H) : T(H), "" + m === r ? (v = c.length, E = H.length, c += H) : c = 10 > H.length && 40 > c.length + H.length ? c + H : c + "...";
          c += "]";
        }
      else if (n.$$typeof === ci)
        c = "<" + S(n.type) + "/>";
      else {
        if (n.$$typeof === yi) return "client";
        if (Ft.has(n)) {
          for (c = Ft.get(n), c = "<" + (S(c) || "..."), m = Object.keys(n), H = 0; H < m.length; H++) {
            c += " ", X = m[H], c += b(X) + "=";
            var le = n[X], K = X === r && typeof le == "object" && le !== null ? A(le) : T(le);
            typeof le != "string" && (K = "{" + K + "}"), X === r ? (v = c.length, E = K.length, c += K) : c = 10 > K.length && 40 > c.length + K.length ? c + K : c + "...";
          }
          c += ">";
        } else {
          for (c = "{", m = Object.keys(n), H = 0; H < m.length; H++)
            0 < H && (c += ", "), X = m[H], c += b(X) + ": ", le = n[X], le = typeof le == "object" && le !== null ? A(le) : T(le), X === r ? (v = c.length, E = le.length, c += le) : c = 10 > le.length && 40 > c.length + le.length ? c + le : c + "...";
          c += "}";
        }
      }
      return r === void 0 ? c : -1 < v && 0 < E ? (n = " ".repeat(v) + "^".repeat(E), `
  ` + c + `
  ` + n) : `
  ` + c;
    }
    function O(n, r) {
      var c = n.length & 3, v = n.length - c, E = r;
      for (r = 0; r < v; ) {
        var m = n.charCodeAt(r) & 255 | (n.charCodeAt(++r) & 255) << 8 | (n.charCodeAt(++r) & 255) << 16 | (n.charCodeAt(++r) & 255) << 24;
        ++r, m = 3432918353 * (m & 65535) + ((3432918353 * (m >>> 16) & 65535) << 16) & 4294967295, m = m << 15 | m >>> 17, m = 461845907 * (m & 65535) + ((461845907 * (m >>> 16) & 65535) << 16) & 4294967295, E ^= m, E = E << 13 | E >>> 19, E = 5 * (E & 65535) + ((5 * (E >>> 16) & 65535) << 16) & 4294967295, E = (E & 65535) + 27492 + (((E >>> 16) + 58964 & 65535) << 16);
      }
      switch (m = 0, c) {
        case 3:
          m ^= (n.charCodeAt(r + 2) & 255) << 16;
        case 2:
          m ^= (n.charCodeAt(r + 1) & 255) << 8;
        case 1:
          m ^= n.charCodeAt(r) & 255, m = 3432918353 * (m & 65535) + ((3432918353 * (m >>> 16) & 65535) << 16) & 4294967295, m = m << 15 | m >>> 17, E ^= 461845907 * (m & 65535) + ((461845907 * (m >>> 16) & 65535) << 16) & 4294967295;
      }
      return E ^= n.length, E ^= E >>> 16, E = 2246822507 * (E & 65535) + ((2246822507 * (E >>> 16) & 65535) << 16) & 4294967295, E ^= E >>> 13, E = 3266489909 * (E & 65535) + ((3266489909 * (E >>> 16) & 65535) << 16) & 4294967295, (E ^ E >>> 16) >>> 0;
    }
    function Y(n) {
      return typeof Symbol == "function" && Symbol.toStringTag && n[Symbol.toStringTag] || n.constructor.name || "Object";
    }
    function Z(n) {
      try {
        return M(n), !1;
      } catch {
        return !0;
      }
    }
    function M(n) {
      return "" + n;
    }
    function J(n, r) {
      if (Z(n))
        return console.error(
          "The provided `%s` attribute is an unsupported type %s. This value must be coerced to a string before using it here.",
          r,
          Y(n)
        ), M(n);
    }
    function re(n, r) {
      if (Z(n))
        return console.error(
          "The provided `%s` CSS property is an unsupported type %s. This value must be coerced to a string before using it here.",
          r,
          Y(n)
        ), M(n);
    }
    function V(n) {
      if (Z(n))
        return console.error(
          "The provided HTML markup uses a value of unsupported type %s. This value must be coerced to a string before using it here.",
          Y(n)
        ), M(n);
    }
    function _(n) {
      return An.call(Nt, n) ? !0 : An.call(Ts, n) ? !1 : ac.test(n) ? Nt[n] = !0 : (Ts[n] = !0, console.error("Invalid attribute name: `%s`", n), !1);
    }
    function N(n, r) {
      Il[r.type] || r.onChange || r.onInput || r.readOnly || r.disabled || r.value == null || console.error(
        n === "select" ? "You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set `onChange`." : "You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`."
      ), r.onChange || r.readOnly || r.disabled || r.checked == null || console.error(
        "You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`."
      );
    }
    function Pe(n, r) {
      if (An.call(ca, r) && ca[r])
        return !0;
      if (su.test(r)) {
        if (n = "aria-" + r.slice(4).toLowerCase(), n = Cs.hasOwnProperty(n) ? n : null, n == null)
          return console.error(
            "Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.",
            r
          ), ca[r] = !0;
        if (r !== n)
          return console.error(
            "Invalid ARIA attribute `%s`. Did you mean `%s`?",
            r,
            n
          ), ca[r] = !0;
      }
      if (co.test(r)) {
        if (n = r.toLowerCase(), n = Cs.hasOwnProperty(n) ? n : null, n == null) return ca[r] = !0, !1;
        r !== n && (console.error(
          "Unknown ARIA attribute `%s`. Did you mean `%s`?",
          r,
          n
        ), ca[r] = !0);
      }
      return !0;
    }
    function Me(n, r) {
      var c = [], v;
      for (v in r)
        Pe(n, v) || c.push(v);
      r = c.map(function(E) {
        return "`" + E + "`";
      }).join(", "), c.length === 1 ? console.error(
        "Invalid aria prop %s on <%s> tag. For details, see https://react.dev/link/invalid-aria-props",
        r,
        n
      ) : 1 < c.length && console.error(
        "Invalid aria props %s on <%s> tag. For details, see https://react.dev/link/invalid-aria-props",
        r,
        n
      );
    }
    function je(n, r, c, v) {
      if (An.call(Er, r) && Er[r])
        return !0;
      var E = r.toLowerCase();
      if (E === "onfocusin" || E === "onfocusout")
        return console.error(
          "React uses onFocus and onBlur instead of onFocusIn and onFocusOut. All React events are normalized to bubble, so onFocusIn and onFocusOut are not needed/supported by React."
        ), Er[r] = !0;
      if (typeof c == "function" && (n === "form" && r === "action" || n === "input" && r === "formAction" || n === "button" && r === "formAction"))
        return !0;
      if (rt.test(r))
        return Fn.test(r) && console.error(
          "Invalid event handler property `%s`. React events use the camelCase naming convention, for example `onClick`.",
          r
        ), Er[r] = !0;
      if (Es.test(r) || sc.test(r)) return !0;
      if (E === "innerhtml")
        return console.error(
          "Directly setting property `innerHTML` is not permitted. For more information, lookup documentation on `dangerouslySetInnerHTML`."
        ), Er[r] = !0;
      if (E === "aria")
        return console.error(
          "The `aria` attribute is reserved for future use in React. Pass individual `aria-` attributes instead."
        ), Er[r] = !0;
      if (E === "is" && c !== null && c !== void 0 && typeof c != "string")
        return console.error(
          "Received a `%s` for a string attribute `is`. If this is expected, cast the value to a string.",
          typeof c
        ), Er[r] = !0;
      if (typeof c == "number" && isNaN(c))
        return console.error(
          "Received NaN for the `%s` attribute. If this is expected, cast the value to a string.",
          r
        ), Er[r] = !0;
      if (Cr.hasOwnProperty(E)) {
        if (E = Cr[E], E !== r)
          return console.error(
            "Invalid DOM property `%s`. Did you mean `%s`?",
            r,
            E
          ), Er[r] = !0;
      } else if (r !== E)
        return console.error(
          "React does not recognize the `%s` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `%s` instead. If you accidentally passed it from a parent component, remove it from the DOM element.",
          r,
          E
        ), Er[r] = !0;
      switch (r) {
        case "dangerouslySetInnerHTML":
        case "children":
        case "style":
        case "suppressContentEditableWarning":
        case "suppressHydrationWarning":
        case "defaultValue":
        case "defaultChecked":
        case "innerHTML":
        case "ref":
          return !0;
        case "innerText":
        case "textContent":
          return !0;
      }
      switch (typeof c) {
        case "boolean":
          switch (r) {
            case "autoFocus":
            case "checked":
            case "multiple":
            case "muted":
            case "selected":
            case "contentEditable":
            case "spellCheck":
            case "draggable":
            case "value":
            case "autoReverse":
            case "externalResourcesRequired":
            case "focusable":
            case "preserveAlpha":
            case "allowFullScreen":
            case "async":
            case "autoPlay":
            case "controls":
            case "default":
            case "defer":
            case "disabled":
            case "disablePictureInPicture":
            case "disableRemotePlayback":
            case "formNoValidate":
            case "hidden":
            case "loop":
            case "noModule":
            case "noValidate":
            case "open":
            case "playsInline":
            case "readOnly":
            case "required":
            case "reversed":
            case "scoped":
            case "seamless":
            case "itemScope":
            case "capture":
            case "download":
            case "inert":
              return !0;
            default:
              return E = r.toLowerCase().slice(0, 5), E === "data-" || E === "aria-" ? !0 : (c ? console.error(
                'Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.',
                c,
                r,
                r,
                c,
                r
              ) : console.error(
                'Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.',
                c,
                r,
                r,
                c,
                r,
                r,
                r
              ), Er[r] = !0);
          }
        case "function":
        case "symbol":
          return Er[r] = !0, !1;
        case "string":
          if (c === "false" || c === "true") {
            switch (r) {
              case "checked":
              case "selected":
              case "multiple":
              case "muted":
              case "allowFullScreen":
              case "async":
              case "autoPlay":
              case "controls":
              case "default":
              case "defer":
              case "disabled":
              case "disablePictureInPicture":
              case "disableRemotePlayback":
              case "formNoValidate":
              case "hidden":
              case "loop":
              case "noModule":
              case "noValidate":
              case "open":
              case "playsInline":
              case "readOnly":
              case "required":
              case "reversed":
              case "scoped":
              case "seamless":
              case "itemScope":
              case "inert":
                break;
              default:
                return !0;
            }
            console.error(
              "Received the string `%s` for the boolean attribute `%s`. %s Did you mean %s={%s}?",
              c,
              r,
              c === "false" ? "The browser will interpret it as a truthy value." : 'Although this works, it will not work as expected if you pass the string "false".',
              r,
              c
            ), Er[r] = !0;
          }
      }
      return !0;
    }
    function ke(n, r, c) {
      var v = [], E;
      for (E in r)
        je(n, E, r[E]) || v.push(E);
      r = v.map(function(m) {
        return "`" + m + "`";
      }).join(", "), v.length === 1 ? console.error(
        "Invalid value for prop %s on <%s> tag. Either remove it from the element, or pass a string or number value to keep it in the DOM. For details, see https://react.dev/link/attribute-behavior ",
        r,
        n
      ) : 1 < v.length && console.error(
        "Invalid values for props %s on <%s> tag. Either remove them from the element, or pass a string or number value to keep them in the DOM. For details, see https://react.dev/link/attribute-behavior ",
        r,
        n
      );
    }
    function ge(n) {
      return n.replace(Dl, function(r, c) {
        return c.toUpperCase();
      });
    }
    function $(n) {
      if (typeof n == "boolean" || typeof n == "number" || typeof n == "bigint")
        return "" + n;
      V(n), n = "" + n;
      var r = cc.exec(n);
      if (r) {
        var c = "", v, E = 0;
        for (v = r.index; v < n.length; v++) {
          switch (n.charCodeAt(v)) {
            case 34:
              r = "&quot;";
              break;
            case 38:
              r = "&amp;";
              break;
            case 39:
              r = "&#x27;";
              break;
            case 60:
              r = "&lt;";
              break;
            case 62:
              r = "&gt;";
              break;
            default:
              continue;
          }
          E !== v && (c += n.slice(E, v)), E = v + 1, c += r;
        }
        n = E !== v ? c + n.slice(E, v) : c;
      }
      return n;
    }
    function Xe(n) {
      return ku.test("" + n) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : n;
    }
    function vn(n) {
      return V(n), ("" + n).replace(ee, d);
    }
    function un(n, r, c, v, E) {
      return {
        idPrefix: n === void 0 ? "" : n,
        nextFormID: 0,
        streamingFormat: 0,
        bootstrapScriptContent: c,
        bootstrapScripts: v,
        bootstrapModules: E,
        instructions: s,
        hasBody: !1,
        hasHtml: !1,
        unknownResources: {},
        dnsResources: {},
        connectResources: { default: {}, anonymous: {}, credentials: {} },
        imageResources: {},
        styleResources: {},
        scriptResources: {},
        moduleUnknownResources: {},
        moduleScriptResources: {}
      };
    }
    function Ke() {
      return {
        htmlChunks: null,
        headChunks: null,
        bodyChunks: null,
        contribution: De
      };
    }
    function I(n, r, c) {
      return {
        insertionMode: n,
        selectedValue: r,
        tagScope: c
      };
    }
    function Oe(n, r, c) {
      switch (r) {
        case "noscript":
          return I(
            Ue,
            null,
            n.tagScope | 1
          );
        case "select":
          return I(
            Ue,
            c.value != null ? c.value : c.defaultValue,
            n.tagScope
          );
        case "svg":
          return I(Ge, null, n.tagScope);
        case "picture":
          return I(
            Ue,
            null,
            n.tagScope | 2
          );
        case "math":
          return I(En, null, n.tagScope);
        case "foreignObject":
          return I(Ue, null, n.tagScope);
        case "table":
          return I(
            On,
            null,
            n.tagScope
          );
        case "thead":
        case "tbody":
        case "tfoot":
          return I(
            kn,
            null,
            n.tagScope
          );
        case "colgroup":
          return I(
            Ze,
            null,
            n.tagScope
          );
        case "tr":
          return I(
            Yn,
            null,
            n.tagScope
          );
        case "head":
          if (n.insertionMode < Ue)
            return I(
              an,
              null,
              n.tagScope
            );
          break;
        case "html":
          if (n.insertionMode === pe)
            return I(
              Ie,
              null,
              n.tagScope
            );
      }
      return n.insertionMode >= On || n.insertionMode < Ue ? I(Ue, null, n.tagScope) : n;
    }
    function Be(n, r) {
      if (typeof r != "object")
        throw Error(
          "The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX."
        );
      var c = !0, v;
      for (v in r)
        if (An.call(r, v)) {
          var E = r[v];
          if (E != null && typeof E != "boolean" && E !== "") {
            if (v.indexOf("--") === 0) {
              var m = $(v);
              re(E, v), E = $(("" + E).trim());
            } else {
              m = v;
              var H = E;
              if (-1 < m.indexOf("-")) {
                var X = m;
                Eo.hasOwnProperty(X) && Eo[X] || (Eo[X] = !0, console.error(
                  "Unsupported style property %s. Did you mean %s?",
                  X,
                  ge(X.replace(_c, "ms-"))
                ));
              } else if (Dc.test(m))
                X = m, Eo.hasOwnProperty(X) && Eo[X] || (Eo[X] = !0, console.error(
                  "Unsupported vendor-prefixed style property %s. Did you mean %s?",
                  X,
                  X.charAt(0).toUpperCase() + X.slice(1)
                ));
              else if (_a.test(H)) {
                X = m;
                var le = H;
                Zr.hasOwnProperty(le) && Zr[le] || (Zr[le] = !0, console.error(
                  `Style property values shouldn't contain a semicolon. Try "%s: %s" instead.`,
                  X,
                  le.replace(
                    _a,
                    ""
                  )
                ));
              }
              typeof H == "number" && (isNaN(H) ? _l || (_l = !0, console.error(
                "`NaN` is an invalid value for the `%s` css style property.",
                m
              )) : isFinite(H) || xs || (xs = !0, console.error(
                "`Infinity` is an invalid value for the `%s` css style property.",
                m
              ))), m = v, H = yn.get(m), H !== void 0 || (H = $(
                m.replace(Bl, "-$1").toLowerCase().replace(Lt, "-ms-")
              ), yn.set(m, H)), m = H, typeof E == "number" ? E = E === 0 || ic.has(v) ? "" + E : E + "px" : (re(E, v), E = $(
                ("" + E).trim()
              ));
            }
            c ? (c = !1, n.push(
              ln,
              m,
              zt,
              E
            )) : n.push(fr, m, zt, E);
          }
        }
      c || n.push(pt);
    }
    function ye(n, r, c) {
      c && typeof c != "function" && typeof c != "symbol" && n.push(Je, r, Ot);
    }
    function Le(n, r, c) {
      typeof c != "function" && typeof c != "symbol" && typeof c != "boolean" && n.push(
        Je,
        r,
        Dn,
        $(c),
        pt
      );
    }
    function dn(n, r) {
      this.push('<input type="hidden"'), te(n), Le(this, "name", r), Le(this, "value", n), this.push(wt);
    }
    function te(n) {
      if (typeof n != "string")
        throw Error(
          "File/Blob fields are not yet supported in progressive forms. Will fallback to client hydration."
        );
    }
    function Ce(n, r) {
      if (typeof r.$$FORM_ACTION == "function") {
        var c = n.nextFormID++;
        n = n.idPrefix + c;
        try {
          var v = r.$$FORM_ACTION(n);
          if (v) {
            var E = v.data;
            E != null && E.forEach(te);
          }
          return v;
        } catch (m) {
          if (typeof m == "object" && m !== null && typeof m.then == "function")
            throw m;
          console.error(
            `Failed to serialize an action for progressive enhancement:
%s`,
            m
          );
        }
      }
      return null;
    }
    function Xn(n, r, c, v, E, m, H, X) {
      var le = null;
      if (typeof v == "function") {
        X === null || Qr || (Qr = !0, console.error(
          'Cannot specify a "name" prop for a button that specifies a function as a formAction. React needs it to encode which action should be invoked. It will get overridden.'
        )), E === null && m === null || Ro || (Ro = !0, console.error(
          "Cannot specify a formEncType or formMethod for a button that specifies a function as a formAction. React provides those automatically. They will get overridden."
        )), H === null || Go || (Go = !0, console.error(
          "Cannot specify a formTarget for a button that specifies a function as a formAction. The function will always be executed in the same window."
        ));
        var K = Ce(r, v);
        K !== null ? (X = K.name, v = K.action || "", E = K.encType, m = K.method, H = K.target, le = K.data) : (n.push(
          Je,
          "formAction",
          Dn,
          Ho,
          pt
        ), H = m = E = v = X = null, Qe(r, c));
      }
      return X != null && ze(n, "name", X), v != null && ze(n, "formAction", v), E != null && ze(n, "formEncType", E), m != null && ze(n, "formMethod", m), H != null && ze(n, "formTarget", H), le;
    }
    function ze(n, r, c) {
      switch (r) {
        case "className":
          Le(n, "class", c);
          break;
        case "tabIndex":
          Le(n, "tabindex", c);
          break;
        case "dir":
        case "role":
        case "viewBox":
        case "width":
        case "height":
          Le(n, r, c);
          break;
        case "style":
          Be(n, c);
          break;
        case "src":
        case "href":
          if (c === "") {
            console.error(
              r === "src" ? 'An empty string ("") was passed to the %s attribute. This may cause the browser to download the whole page again over the network. To fix this, either do not render the element at all or pass null to %s instead of an empty string.' : 'An empty string ("") was passed to the %s attribute. To fix this, either do not render the element at all or pass null to %s instead of an empty string.',
              r,
              r
            );
            break;
          }
        case "action":
        case "formAction":
          if (c == null || typeof c == "function" || typeof c == "symbol" || typeof c == "boolean")
            break;
          J(c, r), c = Xe("" + c), n.push(
            Je,
            r,
            Dn,
            $(c),
            pt
          );
          break;
        case "defaultValue":
        case "defaultChecked":
        case "innerHTML":
        case "suppressContentEditableWarning":
        case "suppressHydrationWarning":
        case "ref":
          break;
        case "autoFocus":
        case "multiple":
        case "muted":
          ye(n, r.toLowerCase(), c);
          break;
        case "xlinkHref":
          if (typeof c == "function" || typeof c == "symbol" || typeof c == "boolean")
            break;
          J(c, r), c = Xe("" + c), n.push(
            Je,
            "xlink:href",
            Dn,
            $(c),
            pt
          );
          break;
        case "contentEditable":
        case "spellCheck":
        case "draggable":
        case "value":
        case "autoReverse":
        case "externalResourcesRequired":
        case "focusable":
        case "preserveAlpha":
          typeof c != "function" && typeof c != "symbol" && n.push(
            Je,
            r,
            Dn,
            $(c),
            pt
          );
          break;
        case "inert":
          c !== "" || ie[r] || (ie[r] = !0, console.error(
            "Received an empty string for a boolean attribute `%s`. This will treat the attribute as if it were false. Either pass `false` to silence this warning, or pass `true` if you used an empty string in earlier versions of React to indicate this attribute is true.",
            r
          ));
        case "allowFullScreen":
        case "async":
        case "autoPlay":
        case "controls":
        case "default":
        case "defer":
        case "disabled":
        case "disablePictureInPicture":
        case "disableRemotePlayback":
        case "formNoValidate":
        case "hidden":
        case "loop":
        case "noModule":
        case "noValidate":
        case "open":
        case "playsInline":
        case "readOnly":
        case "required":
        case "reversed":
        case "scoped":
        case "seamless":
        case "itemScope":
          c && typeof c != "function" && typeof c != "symbol" && n.push(Je, r, Ot);
          break;
        case "capture":
        case "download":
          c === !0 ? n.push(Je, r, Ot) : c !== !1 && typeof c != "function" && typeof c != "symbol" && n.push(
            Je,
            r,
            Dn,
            $(c),
            pt
          );
          break;
        case "cols":
        case "rows":
        case "size":
        case "span":
          typeof c != "function" && typeof c != "symbol" && !isNaN(c) && 1 <= c && n.push(
            Je,
            r,
            Dn,
            $(c),
            pt
          );
          break;
        case "rowSpan":
        case "start":
          typeof c == "function" || typeof c == "symbol" || isNaN(c) || n.push(
            Je,
            r,
            Dn,
            $(c),
            pt
          );
          break;
        case "xlinkActuate":
          Le(n, "xlink:actuate", c);
          break;
        case "xlinkArcrole":
          Le(n, "xlink:arcrole", c);
          break;
        case "xlinkRole":
          Le(n, "xlink:role", c);
          break;
        case "xlinkShow":
          Le(n, "xlink:show", c);
          break;
        case "xlinkTitle":
          Le(n, "xlink:title", c);
          break;
        case "xlinkType":
          Le(n, "xlink:type", c);
          break;
        case "xmlBase":
          Le(n, "xml:base", c);
          break;
        case "xmlLang":
          Le(n, "xml:lang", c);
          break;
        case "xmlSpace":
          Le(n, "xml:space", c);
          break;
        default:
          if ((!(2 < r.length) || r[0] !== "o" && r[0] !== "O" || r[1] !== "n" && r[1] !== "N") && (r = lc.get(r) || r, _(r))) {
            switch (typeof c) {
              case "function":
              case "symbol":
                return;
              case "boolean":
                var v = r.toLowerCase().slice(0, 5);
                if (v !== "data-" && v !== "aria-") return;
            }
            n.push(
              Je,
              r,
              Dn,
              $(c),
              pt
            );
          }
      }
    }
    function q(n, r, c) {
      if (r != null) {
        if (c != null)
          throw Error(
            "Can only set one of `children` or `props.dangerouslySetInnerHTML`."
          );
        if (typeof r != "object" || !("__html" in r))
          throw Error(
            "`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://react.dev/link/dangerously-set-inner-html for more information."
          );
        r = r.__html, r != null && (V(r), n.push("" + r));
      }
    }
    function Q(n, r) {
      var c = n[r];
      c != null && (c = Jn(c), n.multiple && !c ? console.error(
        "The `%s` prop supplied to <select> must be an array if `multiple` is true.",
        r
      ) : !n.multiple && c && console.error(
        "The `%s` prop supplied to <select> must be a scalar value if `multiple` is false.",
        r
      ));
    }
    function on(n) {
      var r = "";
      return Ic.Children.forEach(n, function(c) {
        c != null && (r += c, xo || typeof c == "string" || typeof c == "number" || typeof c == "bigint" || (xo = !0, console.error(
          "Cannot infer the option value of complex children. Pass a `value` prop or use a plain string as children to <option>."
        )));
      }), r;
    }
    function Qe(n, r) {
      (n.instructions & 16) === s && (n.instructions |= 16, r.bootstrapChunks.unshift(
        r.startInlineScript,
        fo,
        "<\/script>"
      ));
    }
    function Re(n, r) {
      n.push(He("link"));
      for (var c in r)
        if (An.call(r, c)) {
          var v = r[c];
          if (v != null)
            switch (c) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(
                  "link is a self-closing tag and must neither have `children` nor use `dangerouslySetInnerHTML`."
                );
              default:
                ze(n, c, v);
            }
        }
      return n.push(wt), null;
    }
    function me(n) {
      return V(n), ("" + n).replace(uc, o);
    }
    function _e(n, r, c) {
      n.push(He(c));
      for (var v in r)
        if (An.call(r, v)) {
          var E = r[v];
          if (E != null)
            switch (v) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(
                  c + " is a self-closing tag and must neither have `children` nor use `dangerouslySetInnerHTML`."
                );
              default:
                ze(n, v, E);
            }
        }
      return n.push(wt), null;
    }
    function $e(n, r) {
      n.push(He("title"));
      var c = null, v = null, E;
      for (E in r)
        if (An.call(r, E)) {
          var m = r[E];
          if (m != null)
            switch (E) {
              case "children":
                c = m;
                break;
              case "dangerouslySetInnerHTML":
                v = m;
                break;
              default:
                ze(n, E, m);
            }
        }
      return n.push(Ln), r = Array.isArray(c) ? 2 > c.length ? c[0] : null : c, typeof r != "function" && typeof r != "symbol" && r !== null && r !== void 0 && n.push($("" + r)), q(n, v, c), n.push(yt("title")), null;
    }
    function fn(n, r) {
      n.push(He("script"));
      var c = null, v = null, E;
      for (E in r)
        if (An.call(r, E)) {
          var m = r[E];
          if (m != null)
            switch (E) {
              case "children":
                c = m;
                break;
              case "dangerouslySetInnerHTML":
                v = m;
                break;
              default:
                ze(n, E, m);
            }
        }
      return n.push(Ln), c != null && typeof c != "string" && (r = typeof c == "number" ? "a number for children" : Array.isArray(c) ? "an array for children" : "something unexpected for children", console.error(
        "A script element was rendered with %s. If script element has children it must be a single string. Consider using dangerouslySetInnerHTML or passing a plain string as children.",
        r
      )), q(n, v, c), typeof c == "string" && n.push(vn(c)), n.push(yt("script")), null;
    }
    function Tn(n, r, c) {
      n.push(He(c));
      var v = c = null, E;
      for (E in r)
        if (An.call(r, E)) {
          var m = r[E];
          if (m != null)
            switch (E) {
              case "children":
                c = m;
                break;
              case "dangerouslySetInnerHTML":
                v = m;
                break;
              default:
                ze(n, E, m);
            }
        }
      return n.push(Ln), q(n, v, c), c;
    }
    function Ne(n, r, c) {
      n.push(He(c));
      var v = c = null, E;
      for (E in r)
        if (An.call(r, E)) {
          var m = r[E];
          if (m != null)
            switch (E) {
              case "children":
                c = m;
                break;
              case "dangerouslySetInnerHTML":
                v = m;
                break;
              default:
                ze(n, E, m);
            }
        }
      return n.push(Ln), q(n, v, c), typeof c == "string" ? (n.push($(c)), null) : c;
    }
    function He(n) {
      var r = Rs.get(n);
      if (r === void 0) {
        if (!Xo.test(n)) throw Error("Invalid tag: " + n);
        r = "<" + n, Rs.set(n, r);
      }
      return r;
    }
    function de(n, r, c, v, E, m, H, X, le, K) {
      Me(r, c), r !== "input" && r !== "textarea" && r !== "select" || c == null || c.value !== null || Kt || (Kt = !0, r === "select" && c.multiple ? console.error(
        "`value` prop on `%s` should not be null. Consider using an empty array when `multiple` is set to `true` to clear the component or `undefined` for uncontrolled components.",
        r
      ) : console.error(
        "`value` prop on `%s` should not be null. Consider using an empty string to clear the component or `undefined` for uncontrolled components.",
        r
      ));
      e: if (r.indexOf("-") === -1) var Ee = !1;
      else
        switch (r) {
          case "annotation-xml":
          case "color-profile":
          case "font-face":
          case "font-face-src":
          case "font-face-uri":
          case "font-face-format":
          case "font-face-name":
          case "missing-glyph":
            Ee = !1;
            break e;
          default:
            Ee = !0;
        }
      switch (Ee || typeof c.is == "string" || ke(r, c), !c.suppressContentEditableWarning && c.contentEditable && c.children != null && console.error(
        "A component is `contentEditable` and contains `children` managed by React. It is now your responsibility to guarantee that none of those nodes are unexpectedly modified or duplicated. This is probably not intentional."
      ), X.insertionMode !== Ge && X.insertionMode !== En && r.indexOf("-") === -1 && r.toLowerCase() !== r && console.error(
        "<%s /> is using incorrect casing. Use PascalCase for React components, or lowercase for HTML elements.",
        r
      ), r) {
        case "div":
        case "span":
        case "svg":
        case "path":
          break;
        case "a":
          n.push(He("a"));
          var ve = null, Fe = null, Ae;
          for (Ae in c)
            if (An.call(c, Ae)) {
              var ue = c[Ae];
              if (ue != null)
                switch (Ae) {
                  case "children":
                    ve = ue;
                    break;
                  case "dangerouslySetInnerHTML":
                    Fe = ue;
                    break;
                  case "href":
                    ue === "" ? Le(n, "href", "") : ze(n, Ae, ue);
                    break;
                  default:
                    ze(n, Ae, ue);
                }
            }
          if (n.push(Ln), q(n, Fe, ve), typeof ve == "string") {
            n.push($(ve));
            var nn = null;
          } else nn = ve;
          return nn;
        case "g":
        case "p":
        case "li":
          break;
        case "select":
          N("select", c), Q(c, "value"), Q(c, "defaultValue"), c.value === void 0 || c.defaultValue === void 0 || Yo || (console.error(
            "Select elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled select element and remove one of these props. More info: https://react.dev/link/controlled-components"
          ), Yo = !0), n.push(He("select"));
          var bn = null, tn = null, cn;
          for (cn in c)
            if (An.call(c, cn)) {
              var st = c[cn];
              if (st != null)
                switch (cn) {
                  case "children":
                    bn = st;
                    break;
                  case "dangerouslySetInnerHTML":
                    tn = st;
                    break;
                  case "defaultValue":
                  case "value":
                    break;
                  default:
                    ze(
                      n,
                      cn,
                      st
                    );
                }
            }
          return n.push(Ln), q(n, tn, bn), bn;
        case "option":
          var qe = X.selectedValue;
          n.push(He("option"));
          var xn = null, mn = null, vr = null, Dt = null, Ht;
          for (Ht in c)
            if (An.call(c, Ht)) {
              var dt = c[Ht];
              if (dt != null)
                switch (Ht) {
                  case "children":
                    xn = dt;
                    break;
                  case "selected":
                    vr = dt, Tt || (console.error(
                      "Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>."
                    ), Tt = !0);
                    break;
                  case "dangerouslySetInnerHTML":
                    Dt = dt;
                    break;
                  case "value":
                    mn = dt;
                  default:
                    ze(
                      n,
                      Ht,
                      dt
                    );
                }
            }
          if (qe != null) {
            if (mn !== null) {
              J(mn, "value");
              var Po = "" + mn;
            } else
              Dt === null || Vr || (Vr = !0, console.error(
                "Pass a `value` prop if you set dangerouslyInnerHTML so React knows which value should be selected."
              )), Po = on(xn);
            if (Jn(qe)) {
              for (var _r = 0; _r < qe.length; _r++)
                if (J(qe[_r], "value"), "" + qe[_r] === Po) {
                  n.push(' selected=""');
                  break;
                }
            } else
              J(qe, "select.value"), "" + qe === Po && n.push(' selected=""');
          } else vr && n.push(' selected=""');
          return n.push(Ln), q(n, Dt, xn), xn;
        case "textarea":
          N("textarea", c), c.value === void 0 || c.defaultValue === void 0 || hr || (console.error(
            "Textarea elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled textarea and remove one of these props. More info: https://react.dev/link/controlled-components"
          ), hr = !0), n.push(He("textarea"));
          var Mn = null, e = null, t = null, u;
          for (u in c)
            if (An.call(c, u)) {
              var y = c[u];
              if (y != null)
                switch (u) {
                  case "children":
                    t = y;
                    break;
                  case "value":
                    Mn = y;
                    break;
                  case "defaultValue":
                    e = y;
                    break;
                  case "dangerouslySetInnerHTML":
                    throw Error(
                      "`dangerouslySetInnerHTML` does not make sense on <textarea>."
                    );
                  default:
                    ze(
                      n,
                      u,
                      y
                    );
                }
            }
          if (Mn === null && e !== null && (Mn = e), n.push(Ln), t != null) {
            if (console.error(
              "Use the `defaultValue` or `value` props instead of setting children on <textarea>."
            ), Mn != null)
              throw Error(
                "If you supply `defaultValue` on a <textarea>, do not pass children."
              );
            if (Jn(t)) {
              if (1 < t.length)
                throw Error("<textarea> can only have at most one child.");
              V(t[0]), Mn = "" + t[0];
            }
            V(t), Mn = "" + t;
          }
          return typeof Mn == "string" && Mn[0] === `
` && n.push(Ba), Mn !== null && (J(Mn, "value"), n.push($("" + Mn))), null;
        case "input":
          N("input", c), n.push(He("input"));
          var C = null, k = null, z = null, W = null, ae = null, G = null, be = null, he = null, Se = null, Te;
          for (Te in c)
            if (An.call(c, Te)) {
              var fe = c[Te];
              if (fe != null)
                switch (Te) {
                  case "children":
                  case "dangerouslySetInnerHTML":
                    throw Error(
                      "input is a self-closing tag and must neither have `children` nor use `dangerouslySetInnerHTML`."
                    );
                  case "name":
                    C = fe;
                    break;
                  case "formAction":
                    k = fe;
                    break;
                  case "formEncType":
                    z = fe;
                    break;
                  case "formMethod":
                    W = fe;
                    break;
                  case "formTarget":
                    ae = fe;
                    break;
                  case "defaultChecked":
                    Se = fe;
                    break;
                  case "defaultValue":
                    be = fe;
                    break;
                  case "checked":
                    he = fe;
                    break;
                  case "value":
                    G = fe;
                    break;
                  default:
                    ze(
                      n,
                      Te,
                      fe
                    );
                }
            }
          k === null || c.type === "image" || c.type === "submit" || uo || (uo = !0, console.error(
            'An input can only specify a formAction along with type="submit" or type="image".'
          ));
          var pn = Xn(
            n,
            v,
            E,
            k,
            z,
            W,
            ae,
            C
          );
          return he === null || Se === null || dr || (console.error(
            "%s contains an input of type %s with both checked and defaultChecked props. Input elements must be either controlled or uncontrolled (specify either the checked prop, or the defaultChecked prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://react.dev/link/controlled-components",
            "A component",
            c.type
          ), dr = !0), G === null || be === null || Rr || (console.error(
            "%s contains an input of type %s with both value and defaultValue props. Input elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://react.dev/link/controlled-components",
            "A component",
            c.type
          ), Rr = !0), he !== null ? ye(n, "checked", he) : Se !== null && ye(n, "checked", Se), G !== null ? ze(n, "value", G) : be !== null && ze(n, "value", be), n.push(wt), pn != null && pn.forEach(dn, n), null;
        case "button":
          n.push(He("button"));
          var Bn = null, hn = null, Ye = null, _t = null, Gn = null, gn = null, mr = null, jr;
          for (jr in c)
            if (An.call(c, jr)) {
              var Yt = c[jr];
              if (Yt != null)
                switch (jr) {
                  case "children":
                    Bn = Yt;
                    break;
                  case "dangerouslySetInnerHTML":
                    hn = Yt;
                    break;
                  case "name":
                    Ye = Yt;
                    break;
                  case "formAction":
                    _t = Yt;
                    break;
                  case "formEncType":
                    Gn = Yt;
                    break;
                  case "formMethod":
                    gn = Yt;
                    break;
                  case "formTarget":
                    mr = Yt;
                    break;
                  default:
                    ze(
                      n,
                      jr,
                      Yt
                    );
                }
            }
          _t === null || c.type == null || c.type === "submit" || uo || (uo = !0, console.error(
            'A button can only specify a formAction along with type="submit" or no type.'
          ));
          var jt = Xn(
            n,
            v,
            E,
            _t,
            Gn,
            gn,
            mr,
            Ye
          );
          if (n.push(Ln), jt != null && jt.forEach(dn, n), q(n, hn, Bn), typeof Bn == "string") {
            n.push($(Bn));
            var $n = null;
          } else $n = Bn;
          return $n;
        case "form":
          n.push(He("form"));
          var Pr = null, Fr = null, wn = null, ht = null, Un = null, Br = null, Nr;
          for (Nr in c)
            if (An.call(c, Nr)) {
              var $t = c[Nr];
              if ($t != null)
                switch (Nr) {
                  case "children":
                    Pr = $t;
                    break;
                  case "dangerouslySetInnerHTML":
                    Fr = $t;
                    break;
                  case "action":
                    wn = $t;
                    break;
                  case "encType":
                    ht = $t;
                    break;
                  case "method":
                    Un = $t;
                    break;
                  case "target":
                    Br = $t;
                    break;
                  default:
                    ze(
                      n,
                      Nr,
                      $t
                    );
                }
            }
          var pa = null, po = null;
          if (typeof wn == "function") {
            ht === null && Un === null || Ro || (Ro = !0, console.error(
              "Cannot specify a encType or method for a form that specifies a function as the action. React provides those automatically. They will get overridden."
            )), Br === null || Go || (Go = !0, console.error(
              "Cannot specify a target for a form that specifies a function as the action. The function will always be executed in the same window."
            ));
            var wa = Ce(
              v,
              wn
            );
            wa !== null ? (wn = wa.action || "", ht = wa.encType, Un = wa.method, Br = wa.target, pa = wa.data, po = wa.name) : (n.push(
              Je,
              "action",
              Dn,
              Ho,
              pt
            ), Br = Un = ht = wn = null, Qe(v, E));
          }
          if (wn != null && ze(n, "action", wn), ht != null && ze(n, "encType", ht), Un != null && ze(n, "method", Un), Br != null && ze(n, "target", Br), n.push(Ln), po !== null && (n.push('<input type="hidden"'), Le(n, "name", po), n.push(wt), pa != null && pa.forEach(
            dn,
            n
          )), q(n, Fr, Pr), typeof Pr == "string") {
            n.push($(Pr));
            var Ql = null;
          } else Ql = Pr;
          return Ql;
        case "menuitem":
          n.push(He("menuitem"));
          for (var Ta in c)
            if (An.call(c, Ta)) {
              var bl = c[Ta];
              if (bl != null)
                switch (Ta) {
                  case "children":
                  case "dangerouslySetInnerHTML":
                    throw Error(
                      "menuitems cannot have `children` nor `dangerouslySetInnerHTML`."
                    );
                  default:
                    ze(
                      n,
                      Ta,
                      bl
                    );
                }
            }
          return n.push(Ln), null;
        case "object":
          n.push(He("object"));
          var Fo = null, Jl = null, Lr;
          for (Lr in c)
            if (An.call(c, Lr)) {
              var er = c[Lr];
              if (er != null)
                switch (Lr) {
                  case "children":
                    Fo = er;
                    break;
                  case "dangerouslySetInnerHTML":
                    Jl = er;
                    break;
                  case "data":
                    J(er, "data");
                    var Rt = Xe("" + er);
                    if (Rt === "") {
                      console.error(
                        'An empty string ("") was passed to the %s attribute. To fix this, either do not render the element at all or pass null to %s instead of an empty string.',
                        Lr,
                        Lr
                      );
                      break;
                    }
                    n.push(
                      Je,
                      "data",
                      Dn,
                      $(Rt),
                      pt
                    );
                    break;
                  default:
                    ze(
                      n,
                      Lr,
                      er
                    );
                }
            }
          if (n.push(Ln), q(n, Jl, Fo), typeof Fo == "string") {
            n.push($(Fo));
            var $r = null;
          } else $r = Fo;
          return $r;
        case "title":
          var Oo = X.insertionMode, yl = !!(X.tagScope & 1);
          if (An.call(c, "children")) {
            var Ao = c.children, Ca = Array.isArray(Ao) ? 2 > Ao.length ? Ao[0] : null : Ao;
            Array.isArray(Ao) && 1 < Ao.length ? console.error(
              "React expects the `children` prop of <title> tags to be a string, number, bigint, or object with a novel `toString` method but found an Array with length %s instead. Browsers treat all child Nodes of <title> tags as Text content and React expects to be able to convert `children` of <title> tags to a single string value which is why Arrays of length greater than 1 are not supported. When using JSX it can be common to combine text nodes and value nodes. For example: <title>hello {nameOfUser}</title>. While not immediately apparent, `children` in this case is an Array with length 2. If your `children` prop is using this form try rewriting it using a template string: <title>{`hello ${nameOfUser}`}</title>.",
              Ao.length
            ) : typeof Ca == "function" || typeof Ca == "symbol" ? console.error(
              "React expect children of <title> tags to be a string, number, bigint, or object with a novel `toString` method but found %s instead. Browsers treat all child Nodes of <title> tags as Text content and React expects to be able to convert children of <title> tags to a single string value.",
              typeof Ca == "function" ? "a Function" : "a Sybmol"
            ) : Ca && Ca.toString === {}.toString && (Ca.$$typeof != null ? console.error(
              "React expects the `children` prop of <title> tags to be a string, number, bigint, or object with a novel `toString` method but found an object that appears to be a React element which never implements a suitable `toString` method. Browsers treat all child Nodes of <title> tags as Text content and React expects to be able to convert children of <title> tags to a single string value which is why rendering React elements is not supported. If the `children` of <title> is a React Component try moving the <title> tag into that component. If the `children` of <title> is some HTML markup change it to be Text only to be valid HTML."
            ) : console.error(
              "React expects the `children` prop of <title> tags to be a string, number, bigint, or object with a novel `toString` method but found an object that does not implement a suitable `toString` method. Browsers treat all child Nodes of <title> tags as Text content and React expects to be able to convert children of <title> tags to a single string value. Using the default `toString` method available on every object is almost certainly an error. Consider whether the `children` of this <title> is an object in error and change it to a string or number value if so. Otherwise implement a `toString` method that React can use to produce a valid <title>."
            ));
          }
          if (Oo === Ge || yl || c.itemProp != null)
            var Mo = $e(
              n,
              c
            );
          else
            K ? Mo = null : ($e(E.hoistableChunks, c), Mo = void 0);
          return Mo;
        case "link":
          var Ec = c.rel, Gt = c.href, eo = c.precedence;
          if (X.insertionMode === Ge || X.tagScope & 1 || c.itemProp != null || typeof Ec != "string" || typeof Gt != "string" || Gt === "") {
            Ec === "stylesheet" && typeof c.precedence == "string" && (typeof Gt == "string" && Gt || console.error(
              'React encountered a `<link rel="stylesheet" .../>` with a `precedence` prop and expected the `href` prop to be a non-empty string but ecountered %s instead. If your intent was to have React hoist and deduplciate this stylesheet using the `precedence` prop ensure there is a non-empty string `href` prop as well, otherwise remove the `precedence` prop.',
              Gt === null ? "`null`" : Gt === void 0 ? "`undefined`" : Gt === "" ? "an empty string" : 'something with type "' + typeof Gt + '"'
            )), Re(n, c);
            var Za = null;
          } else if (c.rel === "stylesheet")
            if (typeof eo != "string" || c.disabled != null || c.onLoad || c.onError) {
              if (typeof eo == "string") {
                if (c.disabled != null)
                  console.error(
                    'React encountered a `<link rel="stylesheet" .../>` with a `precedence` prop and a `disabled` prop. The presence of the `disabled` prop indicates an intent to manage the stylesheet active state from your from your Component code and React will not hoist or deduplicate this stylesheet. If your intent was to have React hoist and deduplciate this stylesheet using the `precedence` prop remove the `disabled` prop, otherwise remove the `precedence` prop.'
                  );
                else if (c.onLoad || c.onError) {
                  var Va = c.onLoad && c.onError ? "`onLoad` and `onError` props" : c.onLoad ? "`onLoad` prop" : "`onError` prop";
                  console.error(
                    'React encountered a `<link rel="stylesheet" .../>` with a `precedence` prop and %s. The presence of loading and error handlers indicates an intent to manage the stylesheet loading state from your from your Component code and React will not hoist or deduplicate this stylesheet. If your intent was to have React hoist and deduplciate this stylesheet using the `precedence` prop remove the %s, otherwise remove the `precedence` prop.',
                    Va,
                    Va
                  );
                }
              }
              Za = Re(
                n,
                c
              );
            } else {
              var Ea = E.styles.get(eo), vl = v.styleResources.hasOwnProperty(
                Gt
              ) ? v.styleResources[Gt] : void 0;
              if (vl !== B) {
                v.styleResources[Gt] = B, Ea || (Ea = {
                  precedence: $(eo),
                  rules: [],
                  hrefs: [],
                  sheets: /* @__PURE__ */ new Map()
                }, E.styles.set(eo, Ea));
                var Jo = {
                  state: en,
                  props: ft({}, c, {
                    "data-precedence": c.precedence,
                    precedence: null
                  })
                };
                if (vl) {
                  vl.length === 2 && Rl(Jo.props, vl);
                  var Oi = E.preloads.stylesheets.get(Gt);
                  Oi && 0 < Oi.length ? Oi.length = 0 : Jo.state = sn;
                }
                Ea.sheets.set(Gt, Jo), H && H.stylesheets.add(Jo);
              } else if (Ea) {
                var Ai = Ea.sheets.get(Gt);
                Ai && H && H.stylesheets.add(Ai);
              }
              le && n.push("<!-- -->"), Za = null;
            }
          else
            c.onLoad || c.onError ? Za = Re(
              n,
              c
            ) : (le && n.push("<!-- -->"), Za = K ? null : Re(E.hoistableChunks, c));
          return Za;
        case "script":
          var Mi = c.async;
          if (typeof c.src != "string" || !c.src || !Mi || typeof Mi == "function" || typeof Mi == "symbol" || c.onLoad || c.onError || X.insertionMode === Ge || X.tagScope & 1 || c.itemProp != null)
            var Ii = fn(
              n,
              c
            );
          else {
            var Io = c.src;
            if (c.type === "module")
              var xa = v.moduleScriptResources, xc = E.preloads.moduleScripts;
            else
              xa = v.scriptResources, xc = E.preloads.scripts;
            var Ko = xa.hasOwnProperty(Io) ? xa[Io] : void 0;
            if (Ko !== B) {
              xa[Io] = B;
              var Kl = c;
              if (Ko) {
                Ko.length === 2 && (Kl = ft({}, c), Rl(Kl, Ko));
                var ql = xc.get(Io);
                ql && (ql.length = 0);
              }
              var Vc = [];
              E.scripts.add(Vc), fn(Vc, Kl);
            }
            le && n.push("<!-- -->"), Ii = null;
          }
          return Ii;
        case "style":
          var Qa = X.insertionMode, Rc = !!(X.tagScope & 1);
          if (An.call(c, "children")) {
            var wo = c.children, Ra = Array.isArray(wo) ? 2 > wo.length ? wo[0] : null : wo;
            (typeof Ra == "function" || typeof Ra == "symbol" || Array.isArray(Ra)) && console.error(
              "React expect children of <style> tags to be a string, number, or object with a `toString` method but found %s instead. In browsers style Elements can only have `Text` Nodes as children.",
              typeof Ra == "function" ? "a Function" : typeof Ra == "symbol" ? "a Sybmol" : "an Array"
            );
          }
          var St = c.precedence, pr = c.href;
          if (Qa === Ge || Rc || c.itemProp != null || typeof St != "string" || typeof pr != "string" || pr === "") {
            n.push(He("style"));
            var no = null, Qc = null, Sa;
            for (Sa in c)
              if (An.call(c, Sa)) {
                var Di = c[Sa];
                if (Di != null)
                  switch (Sa) {
                    case "children":
                      no = Di;
                      break;
                    case "dangerouslySetInnerHTML":
                      Qc = Di;
                      break;
                    default:
                      ze(
                        n,
                        Sa,
                        Di
                      );
                  }
              }
            n.push(Ln);
            var pl = Array.isArray(no) ? 2 > no.length ? no[0] : null : no;
            typeof pl != "function" && typeof pl != "symbol" && pl !== null && pl !== void 0 && n.push(me(pl)), q(
              n,
              Qc,
              no
            ), n.push(yt("style"));
            var vu = null;
          } else {
            pr.includes(" ") && console.error(
              'React expected the `href` prop for a <style> tag opting into hoisting semantics using the `precedence` prop to not have any spaces but ecountered spaces instead. using spaces in this prop will cause hydration of this style to fail on the client. The href for the <style> where this ocurred is "%s".',
              pr
            );
            var nr = E.styles.get(St), Ys = v.styleResources.hasOwnProperty(pr) ? v.styleResources[pr] : void 0;
            if (Ys !== B) {
              v.styleResources[pr] = B, Ys && console.error(
                'React encountered a hoistable style tag for the same href as a preload: "%s". When using a style tag to inline styles you should not also preload it as a stylsheet.',
                pr
              ), nr ? nr.hrefs.push(
                $(pr)
              ) : (nr = {
                precedence: $(St),
                rules: [],
                hrefs: [$(pr)],
                sheets: /* @__PURE__ */ new Map()
              }, E.styles.set(
                St,
                nr
              ));
              var jl = nr.rules, wl = null, Gs = null, $l;
              for ($l in c)
                if (An.call(c, $l)) {
                  var Sc = c[$l];
                  if (Sc != null)
                    switch ($l) {
                      case "children":
                        wl = Sc;
                        break;
                      case "dangerouslySetInnerHTML":
                        Gs = Sc;
                    }
                }
              var Xs = Array.isArray(wl) ? 2 > wl.length ? wl[0] : null : wl;
              typeof Xs != "function" && typeof Xs != "symbol" && Xs !== null && Xs !== void 0 && jl.push(me(Xs)), q(jl, Gs, wl);
            }
            nr && H && H.styles.add(nr), le && n.push("<!-- -->"), vu = void 0;
          }
          return vu;
        case "meta":
          if (X.insertionMode === Ge || X.tagScope & 1 || c.itemProp != null)
            var Au = _e(
              n,
              c,
              "meta"
            );
          else
            le && n.push("<!-- -->"), Au = K ? null : typeof c.charSet == "string" ? _e(E.charsetChunks, c, "meta") : c.name === "viewport" ? _e(E.viewportChunks, c, "meta") : _e(
              E.hoistableChunks,
              c,
              "meta"
            );
          return Au;
        case "listing":
        case "pre":
          n.push(He(r));
          var Zs = null, es = null, Tl;
          for (Tl in c)
            if (An.call(c, Tl)) {
              var Ja = c[Tl];
              if (Ja != null)
                switch (Tl) {
                  case "children":
                    Zs = Ja;
                    break;
                  case "dangerouslySetInnerHTML":
                    es = Ja;
                    break;
                  default:
                    ze(
                      n,
                      Tl,
                      Ja
                    );
                }
            }
          if (n.push(Ln), es != null) {
            if (Zs != null)
              throw Error(
                "Can only set one of `children` or `props.dangerouslySetInnerHTML`."
              );
            if (typeof es != "object" || !("__html" in es))
              throw Error(
                "`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://react.dev/link/dangerously-set-inner-html for more information."
              );
            var Cl = es.__html;
            Cl != null && (typeof Cl == "string" && 0 < Cl.length && Cl[0] === `
` ? n.push(Ba, Cl) : (V(Cl), n.push("" + Cl)));
          }
          return typeof Zs == "string" && Zs[0] === `
` && n.push(Ba), Zs;
        case "img":
          var wr = c.src, tr = c.srcSet;
          if (!(c.loading === "lazy" || !wr && !tr || typeof wr != "string" && wr != null || typeof tr != "string" && tr != null) && c.fetchPriority !== "low" && !(X.tagScope & 3) && (typeof wr != "string" || wr[4] !== ":" || wr[0] !== "d" && wr[0] !== "D" || wr[1] !== "a" && wr[1] !== "A" || wr[2] !== "t" && wr[2] !== "T" || wr[3] !== "a" && wr[3] !== "A") && (typeof tr != "string" || tr[4] !== ":" || tr[0] !== "d" && tr[0] !== "D" || tr[1] !== "a" && tr[1] !== "A" || tr[2] !== "t" && tr[2] !== "T" || tr[3] !== "a" && tr[3] !== "A")) {
            var Mu = typeof c.sizes == "string" ? c.sizes : void 0, Vs = tr ? tr + `
` + (Mu || "") : wr, Iu = E.preloads.images, ns = Iu.get(Vs);
            if (ns)
              (c.fetchPriority === "high" || 10 > E.highImagePreloads.size) && (Iu.delete(Vs), E.highImagePreloads.add(ns));
            else if (!v.imageResources.hasOwnProperty(Vs)) {
              v.imageResources[Vs] = oe;
              var ts = c.crossOrigin, pu = typeof ts == "string" ? ts === "use-credentials" ? ts : "" : void 0, rs = E.headers, _i;
              rs && 0 < rs.remainingCapacity && typeof c.srcSet != "string" && (c.fetchPriority === "high" || 500 > rs.highImagePreloads.length) && (_i = Li(wr, "image", {
                imageSrcSet: c.srcSet,
                imageSizes: c.sizes,
                crossOrigin: pu,
                integrity: c.integrity,
                nonce: c.nonce,
                type: c.type,
                fetchPriority: c.fetchPriority,
                referrerPolicy: c.refererPolicy
              }), 0 <= (rs.remainingCapacity -= _i.length + 2)) ? (E.resets.image[Vs] = oe, rs.highImagePreloads && (rs.highImagePreloads += ", "), rs.highImagePreloads += _i) : (ns = [], Re(ns, {
                rel: "preload",
                as: "image",
                href: tr ? void 0 : wr,
                imageSrcSet: tr,
                imageSizes: Mu,
                crossOrigin: pu,
                integrity: c.integrity,
                type: c.type,
                fetchPriority: c.fetchPriority,
                referrerPolicy: c.referrerPolicy
              }), c.fetchPriority === "high" || 10 > E.highImagePreloads.size ? E.highImagePreloads.add(ns) : (E.bulkPreloads.add(ns), Iu.set(Vs, ns)));
            }
          }
          return _e(n, c, "img");
        case "base":
        case "area":
        case "br":
        case "col":
        case "embed":
        case "hr":
        case "keygen":
        case "param":
        case "source":
        case "track":
        case "wbr":
          return _e(n, c, r);
        case "annotation-xml":
        case "color-profile":
        case "font-face":
        case "font-face-src":
        case "font-face-uri":
        case "font-face-format":
        case "font-face-name":
        case "missing-glyph":
          break;
        case "head":
          if (X.insertionMode < Ue) {
            var kc = m || E.preamble;
            if (kc.headChunks)
              throw Error("The `<head>` tag may only be rendered once.");
            kc.headChunks = [];
            var $u = Tn(
              kc.headChunks,
              c,
              "head"
            );
          } else
            $u = Ne(
              n,
              c,
              "head"
            );
          return $u;
        case "body":
          if (X.insertionMode < Ue) {
            var Jc = m || E.preamble;
            if (Jc.bodyChunks)
              throw Error("The `<body>` tag may only be rendered once.");
            Jc.bodyChunks = [];
            var Du = Tn(
              Jc.bodyChunks,
              c,
              "body"
            );
          } else
            Du = Ne(
              n,
              c,
              "body"
            );
          return Du;
        case "html":
          if (X.insertionMode === pe) {
            var Kc = m || E.preamble;
            if (Kc.htmlChunks)
              throw Error("The `<html>` tag may only be rendered once.");
            Kc.htmlChunks = [Et];
            var ef = Tn(
              Kc.htmlChunks,
              c,
              "html"
            );
          } else
            ef = Ne(
              n,
              c,
              "html"
            );
          return ef;
        default:
          if (r.indexOf("-") !== -1) {
            n.push(He(r));
            var Qs = null, nf = null, qc;
            for (qc in c)
              if (An.call(c, qc)) {
                var Do = c[qc];
                if (Do != null) {
                  var tf = qc;
                  switch (qc) {
                    case "children":
                      Qs = Do;
                      break;
                    case "dangerouslySetInnerHTML":
                      nf = Do;
                      break;
                    case "style":
                      Be(n, Do);
                      break;
                    case "suppressContentEditableWarning":
                    case "suppressHydrationWarning":
                    case "ref":
                      break;
                    case "className":
                      tf = "class";
                    default:
                      if (_(qc) && typeof Do != "function" && typeof Do != "symbol" && Do !== !1) {
                        if (Do === !0)
                          Do = "";
                        else if (typeof Do == "object")
                          continue;
                        n.push(
                          Je,
                          tf,
                          Dn,
                          $(Do),
                          pt
                        );
                      }
                  }
                }
              }
            return n.push(Ln), q(
              n,
              nf,
              Qs
            ), Qs;
          }
      }
      return Ne(n, c, r);
    }
    function yt(n) {
      var r = Nc.get(n);
      return r === void 0 && (r = "</" + n + ">", Nc.set(n, r)), r;
    }
    function to(n, r) {
      n = n.preamble, n.htmlChunks === null && r.htmlChunks && (n.htmlChunks = r.htmlChunks, r.contribution |= 1), n.headChunks === null && r.headChunks && (n.headChunks = r.headChunks, r.contribution |= 4), n.bodyChunks === null && r.bodyChunks && (n.bodyChunks = r.bodyChunks, r.contribution |= 2);
    }
    function tt(n, r) {
      r = r.bootstrapChunks;
      for (var c = 0; c < r.length - 1; c++)
        n.push(r[c]);
      return c < r.length ? (c = r[c], r.length = 0, n.push(c)) : !0;
    }
    function qn(n, r, c) {
      if (n.push(Sr), c === null)
        throw Error(
          "An ID must have been assigned before we can complete the boundary."
        );
      return n.push(r.boundaryPrefix), r = c.toString(16), n.push(r), n.push(ot);
    }
    function Zt(n, r) {
      r = r.contribution, r !== De && (n.push(Na), n.push("" + r), n.push(At));
    }
    function _o(n, r, c, v) {
      switch (c.insertionMode) {
        case pe:
        case Ie:
        case an:
        case Ue:
          return n.push(ks), n.push(r.segmentPrefix), r = v.toString(16), n.push(r), n.push(Jr);
        case Ge:
          return n.push(wi), n.push(r.segmentPrefix), r = v.toString(16), n.push(r), n.push(ua);
        case En:
          return n.push(Ti), n.push(r.segmentPrefix), r = v.toString(16), n.push(r), n.push(gr);
        case On:
          return n.push(zc), n.push(r.segmentPrefix), r = v.toString(16), n.push(r), n.push(ms);
        case kn:
          return n.push(fc), n.push(r.segmentPrefix), r = v.toString(16), n.push(r), n.push(Ut);
        case Yn:
          return n.push(rl), n.push(r.segmentPrefix), r = v.toString(16), n.push(r), n.push(Ci);
        case Ze:
          return n.push(Fs), n.push(r.segmentPrefix), r = v.toString(16), n.push(r), n.push(ho);
        default:
          throw Error("Unknown insertion mode. This is a bug in React.");
      }
    }
    function Bi(n, r) {
      switch (r.insertionMode) {
        case pe:
        case Ie:
        case an:
        case Ue:
          return n.push(nl);
        case Ge:
          return n.push(ko);
        case En:
          return n.push(La);
        case On:
          return n.push(zl);
        case kn:
          return n.push(tl);
        case Yn:
          return n.push(Ps);
        case Ze:
          return n.push(cu);
        default:
          throw Error("Unknown insertion mode. This is a bug in React.");
      }
    }
    function Vt(n) {
      return JSON.stringify(n).replace(
        Si,
        function(r) {
          switch (r) {
            case "<":
              return "\\u003c";
            case "\u2028":
              return "\\u2028";
            case "\u2029":
              return "\\u2029";
            default:
              throw Error(
                "escapeJSStringsForInstructionScripts encountered a match it does not know how to replace. this means the match regex and the replacement characters are no longer in sync. This is a bug in React"
              );
          }
        }
      );
    }
    function ut(n) {
      return JSON.stringify(n).replace(
        al,
        function(r) {
          switch (r) {
            case "&":
              return "\\u0026";
            case ">":
              return "\\u003e";
            case "<":
              return "\\u003c";
            case "\u2028":
              return "\\u2028";
            case "\u2029":
              return "\\u2029";
            default:
              throw Error(
                "escapeJSObjectForInstructionScripts encountered a match it does not know how to replace. this means the match regex and the replacement characters are no longer in sync. This is a bug in React"
              );
          }
        }
      );
    }
    function xe(n) {
      var r = n.rules, c = n.hrefs;
      0 < r.length && c.length === 0 && console.error(
        "React expected to have at least one href for an a hoistable style but found none. This is a bug in React."
      );
      var v = 0;
      if (c.length) {
        for (this.push(il), this.push(n.precedence), this.push(Ds); v < c.length - 1; v++)
          this.push(c[v]), this.push(ne);
        for (this.push(c[v]), this.push(a), v = 0; v < r.length; v++) this.push(r[v]);
        w = this.push(l), h = !0, r.length = 0, c.length = 0;
      }
    }
    function Wr(n) {
      return n.state !== zn ? h = !0 : !1;
    }
    function qa(n, r, c) {
      return h = !1, w = !0, r.styles.forEach(xe, n), r.stylesheets.forEach(Wr), h && (c.stylesToHoist = !0), w;
    }
    function ro(n) {
      for (var r = 0; r < n.length; r++) this.push(n[r]);
      n.length = 0;
    }
    function Qt(n) {
      Re(x, n.props);
      for (var r = 0; r < x.length; r++)
        this.push(x[r]);
      x.length = 0, n.state = zn;
    }
    function Ks(n) {
      var r = 0 < n.sheets.size;
      n.sheets.forEach(Qt, this), n.sheets.clear();
      var c = n.rules, v = n.hrefs;
      if (!r || v.length) {
        if (this.push(F), this.push(n.precedence), n = 0, v.length) {
          for (this.push(L); n < v.length - 1; n++)
            this.push(v[n]), this.push(ne);
          this.push(v[n]);
        }
        for (this.push(U), n = 0; n < c.length; n++)
          this.push(c[n]);
        this.push(j), c.length = 0, v.length = 0;
      }
    }
    function qs(n) {
      if (n.state === en) {
        n.state = sn;
        var r = n.props;
        for (Re(x, {
          rel: "preload",
          as: "style",
          href: n.props.href,
          crossOrigin: r.crossOrigin,
          fetchPriority: r.fetchPriority,
          integrity: r.integrity,
          media: r.media,
          hrefLang: r.hrefLang,
          referrerPolicy: r.referrerPolicy
        }), n = 0; n < x.length; n++)
          this.push(x[n]);
        x.length = 0;
      }
    }
    function Ni(n) {
      n.sheets.forEach(qs, this), n.sheets.clear();
    }
    function js(n, r) {
      n.push(we);
      var c = we;
      r.stylesheets.forEach(function(v) {
        if (v.state !== zn)
          if (v.state === Ct)
            n.push(c), v = v.props.href, J(v, "href"), v = ut("" + v), n.push(v), n.push(Ve), c = ce;
          else {
            n.push(c);
            var E = v.props["data-precedence"], m = v.props, H = Xe("" + v.props.href);
            H = ut(H), n.push(H), J(E, "precedence"), E = "" + E, n.push(We), E = ut(E), n.push(E);
            for (var X in m)
              if (An.call(m, X) && (E = m[X], E != null))
                switch (X) {
                  case "href":
                  case "rel":
                  case "precedence":
                  case "data-precedence":
                    break;
                  case "children":
                  case "dangerouslySetInnerHTML":
                    throw Error(
                      "link is a self-closing tag and must neither have `children` nor use `dangerouslySetInnerHTML`."
                    );
                  default:
                    ma(
                      n,
                      X,
                      E
                    );
                }
            n.push(Ve), c = ce, v.state = Ct;
          }
      }), n.push(Ve);
    }
    function ma(n, r, c) {
      var v = r.toLowerCase();
      switch (typeof c) {
        case "function":
        case "symbol":
          return;
      }
      switch (r) {
        case "innerHTML":
        case "dangerouslySetInnerHTML":
        case "suppressContentEditableWarning":
        case "suppressHydrationWarning":
        case "style":
        case "ref":
          return;
        case "className":
          v = "class", J(c, v), r = "" + c;
          break;
        case "hidden":
          if (c === !1) return;
          r = "";
          break;
        case "src":
        case "href":
          c = Xe(c), J(c, v), r = "" + c;
          break;
        default:
          if (2 < r.length && (r[0] === "o" || r[0] === "O") && (r[1] === "n" || r[1] === "N") || !_(r))
            return;
          J(c, v), r = "" + c;
      }
      n.push(We), v = ut(v), n.push(v), n.push(We), v = ut(r), n.push(v);
    }
    function ja() {
      return { styles: /* @__PURE__ */ new Set(), stylesheets: /* @__PURE__ */ new Set() };
    }
    function ss(n, r, c, v) {
      (n.scriptResources.hasOwnProperty(c) || n.moduleScriptResources.hasOwnProperty(c)) && console.error(
        'Internal React Error: React expected bootstrap script or module with src "%s" to not have been preloaded already. please file an issue',
        c
      ), n.scriptResources[c] = B, n.moduleScriptResources[c] = B, n = [], Re(n, v), r.bootstrapScripts.add(n);
    }
    function Rl(n, r) {
      n.crossOrigin == null && (n.crossOrigin = r[0]), n.integrity == null && (n.integrity = r[1]);
    }
    function Li(n, r, c) {
      n = Rn(n), r = cs(r, "as"), r = "<" + n + '>; rel=preload; as="' + r + '"';
      for (var v in c)
        An.call(c, v) && (n = c[v], typeof n == "string" && (r += "; " + v.toLowerCase() + '="' + cs(
          n,
          v
        ) + '"'));
      return r;
    }
    function Rn(n) {
      return J(n, "href"), ("" + n).replace(
        Sn,
        Ur
      );
    }
    function Ur(n) {
      switch (n) {
        case "<":
          return "%3C";
        case ">":
          return "%3E";
        case `
`:
          return "%0A";
        case "\r":
          return "%0D";
        default:
          throw Error(
            "escapeLinkHrefForHeaderContextReplacer encountered a match it does not know how to replace. this means the match regex and the replacement characters are no longer in sync. This is a bug in React"
          );
      }
    }
    function cs(n, r) {
      return Z(n) && (console.error(
        "The provided `%s` option is an unsupported type %s. This value must be coerced to a string before using it here.",
        r,
        Y(n)
      ), M(n)), ("" + n).replace(
        kr,
        $a
      );
    }
    function $a(n) {
      switch (n) {
        case '"':
          return "%22";
        case "'":
          return "%27";
        case ";":
          return "%3B";
        case ",":
          return "%2C";
        case `
`:
          return "%0A";
        case "\r":
          return "%0D";
        default:
          throw Error(
            "escapeStringForLinkHeaderQuotedParamValueContextReplacer encountered a match it does not know how to replace. this means the match regex and the replacement characters are no longer in sync. This is a bug in React"
          );
      }
    }
    function Bo(n) {
      this.styles.add(n);
    }
    function $s(n) {
      this.stylesheets.add(n);
    }
    function Pc(n, r) {
      var c = n.idPrefix, v = [], E = n.bootstrapScriptContent, m = n.bootstrapScripts, H = n.bootstrapModules;
      if (E !== void 0 && v.push(
        "<script>",
        vn(E),
        "<\/script>"
      ), c = {
        placeholderPrefix: c + "P:",
        segmentPrefix: c + "S:",
        boundaryPrefix: c + "B:",
        startInlineScript: "<script>",
        preamble: Ke(),
        externalRuntimeScript: null,
        bootstrapChunks: v,
        importMapChunks: [],
        onHeaders: void 0,
        headers: null,
        resets: {
          font: {},
          dns: {},
          connect: { default: {}, anonymous: {}, credentials: {} },
          image: {},
          style: {}
        },
        charsetChunks: [],
        viewportChunks: [],
        hoistableChunks: [],
        preconnects: /* @__PURE__ */ new Set(),
        fontPreloads: /* @__PURE__ */ new Set(),
        highImagePreloads: /* @__PURE__ */ new Set(),
        styles: /* @__PURE__ */ new Map(),
        bootstrapScripts: /* @__PURE__ */ new Set(),
        scripts: /* @__PURE__ */ new Set(),
        bulkPreloads: /* @__PURE__ */ new Set(),
        preloads: {
          images: /* @__PURE__ */ new Map(),
          stylesheets: /* @__PURE__ */ new Map(),
          scripts: /* @__PURE__ */ new Map(),
          moduleScripts: /* @__PURE__ */ new Map()
        },
        nonce: void 0,
        hoistableState: null,
        stylesToHoist: !1
      }, m !== void 0)
        for (E = 0; E < m.length; E++) {
          var X = m[E], le, K = void 0, Ee = void 0, ve = {
            rel: "preload",
            as: "script",
            fetchPriority: "low",
            nonce: void 0
          };
          typeof X == "string" ? ve.href = le = X : (ve.href = le = X.src, ve.integrity = Ee = typeof X.integrity == "string" ? X.integrity : void 0, ve.crossOrigin = K = typeof X == "string" || X.crossOrigin == null ? void 0 : X.crossOrigin === "use-credentials" ? "use-credentials" : ""), ss(n, c, le, ve), v.push('<script src="', $(le)), typeof Ee == "string" && v.push(
            '" integrity="',
            $(Ee)
          ), typeof K == "string" && v.push(
            '" crossorigin="',
            $(K)
          ), v.push('" async=""><\/script>');
        }
      if (H !== void 0)
        for (m = 0; m < H.length; m++)
          E = H[m], K = le = void 0, Ee = {
            rel: "modulepreload",
            fetchPriority: "low",
            nonce: void 0
          }, typeof E == "string" ? Ee.href = X = E : (Ee.href = X = E.src, Ee.integrity = K = typeof E.integrity == "string" ? E.integrity : void 0, Ee.crossOrigin = le = typeof E == "string" || E.crossOrigin == null ? void 0 : E.crossOrigin === "use-credentials" ? "use-credentials" : ""), ss(
            n,
            c,
            X,
            Ee
          ), v.push(
            '<script type="module" src="',
            $(X)
          ), typeof K == "string" && v.push(
            '" integrity="',
            $(K)
          ), typeof le == "string" && v.push(
            '" crossorigin="',
            $(le)
          ), v.push('" async=""><\/script>');
      return {
        placeholderPrefix: c.placeholderPrefix,
        segmentPrefix: c.segmentPrefix,
        boundaryPrefix: c.boundaryPrefix,
        startInlineScript: c.startInlineScript,
        preamble: c.preamble,
        externalRuntimeScript: c.externalRuntimeScript,
        bootstrapChunks: c.bootstrapChunks,
        importMapChunks: c.importMapChunks,
        onHeaders: c.onHeaders,
        headers: c.headers,
        resets: c.resets,
        charsetChunks: c.charsetChunks,
        viewportChunks: c.viewportChunks,
        hoistableChunks: c.hoistableChunks,
        preconnects: c.preconnects,
        fontPreloads: c.fontPreloads,
        highImagePreloads: c.highImagePreloads,
        styles: c.styles,
        bootstrapScripts: c.bootstrapScripts,
        scripts: c.scripts,
        bulkPreloads: c.bulkPreloads,
        preloads: c.preloads,
        stylesToHoist: c.stylesToHoist,
        generateStaticMarkup: r
      };
    }
    function ec(n, r, c, v) {
      return c.generateStaticMarkup ? (n.push($(r)), !1) : (r === "" ? n = v : (v && n.push("<!-- -->"), n.push($(r)), n = !0), n);
    }
    function us(n, r, c, v) {
      r.generateStaticMarkup || c && v && n.push("<!-- -->");
    }
    function Hn(n) {
      if (n == null) return null;
      if (typeof n == "function")
        return n.$$typeof === br ? null : n.displayName || n.name || null;
      if (typeof n == "string") return n;
      switch (n) {
        case ui:
          return "Fragment";
        case fi:
          return "Profiler";
        case ps:
          return "StrictMode";
        case zo:
          return "Suspense";
        case sa:
          return "SuspenseList";
        case gi:
          return "Activity";
      }
      if (typeof n == "object")
        switch (typeof n.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), n.$$typeof) {
          case Ji:
            return "Portal";
          case di:
            return (n.displayName || "Context") + ".Provider";
          case qi:
            return (n._context.displayName || "Context") + ".Consumer";
          case hi:
            var r = n.render;
            return n = n.displayName, n || (n = r.displayName || r.name || "", n = n !== "" ? "ForwardRef(" + n + ")" : "ForwardRef"), n;
          case ws:
            return r = n.displayName || null, r !== null ? r : Hn(n.type) || "Memo";
          case ji:
            r = n._payload, n = n._init;
            try {
              return Hn(n(r));
            } catch {
            }
        }
      return null;
    }
    function ei(n, r) {
      if (n !== r) {
        n.context._currentValue2 = n.parentValue, n = n.parent;
        var c = r.parent;
        if (n === null) {
          if (c !== null)
            throw Error(
              "The stacks must reach the root at the same time. This is a bug in React."
            );
        } else {
          if (c === null)
            throw Error(
              "The stacks must reach the root at the same time. This is a bug in React."
            );
          ei(n, c);
        }
        r.context._currentValue2 = r.value;
      }
    }
    function Jt(n) {
      n.context._currentValue2 = n.parentValue, n = n.parent, n !== null && Jt(n);
    }
    function oo(n) {
      var r = n.parent;
      r !== null && oo(r), n.context._currentValue2 = n.value;
    }
    function Pt(n, r) {
      if (n.context._currentValue2 = n.parentValue, n = n.parent, n === null)
        throw Error(
          "The depth must equal at least at zero before reaching the root. This is a bug in React."
        );
      n.depth === r.depth ? ei(n, r) : Pt(n, r);
    }
    function zi(n, r) {
      var c = r.parent;
      if (c === null)
        throw Error(
          "The depth must equal at least at zero before reaching the root. This is a bug in React."
        );
      n.depth === c.depth ? ei(n, c) : zi(n, c), r.context._currentValue2 = r.value;
    }
    function ao(n) {
      var r = Wn;
      r !== n && (r === null ? oo(n) : n === null ? Jt(r) : r.depth === n.depth ? ei(r, n) : r.depth > n.depth ? Pt(r, n) : zi(r, n), Wn = n);
    }
    function Bt(n) {
      if (n !== null && typeof n != "function") {
        var r = String(n);
        mu.has(r) || (mu.add(r), console.error(
          "Expected the last optional `callback` argument to be a function. Instead received: %s.",
          n
        ));
      }
    }
    function Qn(n, r) {
      n = (n = n.constructor) && Hn(n) || "ReactClass";
      var c = n + "." + r;
      Mt[c] || (console.error(
        `Can only update a mounting component. This usually means you called %s() outside componentWillMount() on the server. This is a no-op.

Please check the code for the %s component.`,
        r,
        n
      ), Mt[c] = !0);
    }
    function ni(n, r, c) {
      var v = n.id;
      n = n.overflow;
      var E = 32 - gc(v) - 1;
      v &= ~(1 << E), c += 1;
      var m = 32 - gc(r) + E;
      if (30 < m) {
        var H = E - E % 5;
        return m = (v & (1 << H) - 1).toString(32), v >>= H, E -= H, {
          id: 1 << 32 - gc(r) + E | c << E | v,
          overflow: m + n
        };
      }
      return {
        id: 1 << m | c << E | v,
        overflow: n
      };
    }
    function Hr(n) {
      return n >>>= 0, n === 0 ? 32 : 31 - (Fu(n) / fu | 0) | 0;
    }
    function io() {
    }
    function Fc(n, r, c) {
      switch (c = n[c], c === void 0 ? n.push(r) : c !== r && (r.then(io, io), r = c), r.status) {
        case "fulfilled":
          return r.value;
        case "rejected":
          throw r.reason;
        default:
          switch (typeof r.status == "string" ? r.then(io, io) : (n = r, n.status = "pending", n.then(
            function(v) {
              if (r.status === "pending") {
                var E = r;
                E.status = "fulfilled", E.value = v;
              }
            },
            function(v) {
              if (r.status === "pending") {
                var E = r;
                E.status = "rejected", E.reason = v;
              }
            }
          )), r.status) {
            case "fulfilled":
              return r.value;
            case "rejected":
              throw r.reason;
          }
          throw qr = r, da;
      }
    }
    function Sl() {
      if (qr === null)
        throw Error(
          "Expected a suspended thenable. This is a bug in React. Please file an issue."
        );
      var n = qr;
      return qr = null, n;
    }
    function Cn(n, r) {
      return n === r && (n !== 0 || 1 / n === 1 / r) || n !== n && r !== r;
    }
    function Zn() {
      if (go === null)
        throw Error(
          `Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://react.dev/link/invalid-hook-call for tips about how to debug and fix this problem.`
        );
      return yo && console.error(
        "Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://react.dev/link/rules-of-hooks"
      ), go;
    }
    function Wi() {
      if (0 < fl)
        throw Error("Rendered more hooks than during the previous render");
      return { memoizedState: null, queue: null, next: null };
    }
    function or() {
      return Kn === null ? Yc === null ? (vc = !1, Yc = Kn = Wi()) : (vc = !0, Kn = Yc) : Kn.next === null ? (vc = !1, Kn = Kn.next = Wi()) : (vc = !0, Kn = Kn.next), Kn;
    }
    function Ui() {
      var n = Gl;
      return Gl = null, n;
    }
    function jo() {
      yo = !1, Hc = yc = bc = go = null, Yl = !1, Yc = null, fl = 0, Kn = bo = null;
    }
    function au(n) {
      return yo && console.error(
        "Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo()."
      ), n._currentValue2;
    }
    function Hi(n, r) {
      return typeof r == "function" ? r(n) : r;
    }
    function iu(n, r, c) {
      if (n !== Hi && (mi = "useReducer"), go = Zn(), Kn = or(), vc) {
        if (c = Kn.queue, r = c.dispatch, bo !== null) {
          var v = bo.get(c);
          if (v !== void 0) {
            bo.delete(c), c = Kn.memoizedState;
            do {
              var E = v.action;
              yo = !0, c = n(c, E), yo = !1, v = v.next;
            } while (v !== null);
            return Kn.memoizedState = c, [c, r];
          }
        }
        return [Kn.memoizedState, r];
      }
      return yo = !0, n = n === Hi ? typeof r == "function" ? r() : r : c !== void 0 ? c(r) : r, yo = !1, Kn.memoizedState = n, n = Kn.queue = { last: null, dispatch: null }, n = n.dispatch = ar.bind(
        null,
        go,
        n
      ), [Kn.memoizedState, n];
    }
    function $o(n, r) {
      if (go = Zn(), Kn = or(), r = r === void 0 ? null : r, Kn !== null) {
        var c = Kn.memoizedState;
        if (c !== null && r !== null) {
          e: {
            var v = c[1];
            if (v === null)
              console.error(
                "%s received a final argument during this render, but not during the previous render. Even though the final argument is optional, its type cannot change between renders.",
                mi
              ), v = !1;
            else {
              r.length !== v.length && console.error(
                `The final argument passed to %s changed size between renders. The order and size of this array must remain constant.

Previous: %s
Incoming: %s`,
                mi,
                "[" + r.join(", ") + "]",
                "[" + v.join(", ") + "]"
              );
              for (var E = 0; E < v.length && E < r.length; E++)
                if (!du(r[E], v[E])) {
                  v = !1;
                  break e;
                }
              v = !0;
            }
          }
          if (v) return c[0];
        }
      }
      return yo = !0, n = n(), yo = !1, Kn.memoizedState = [n, r], n;
    }
    function ar(n, r, c) {
      if (25 <= fl)
        throw Error(
          "Too many re-renders. React limits the number of renders to prevent an infinite loop."
        );
      if (n === go)
        if (Yl = !0, n = { action: c, next: null }, bo === null && (bo = /* @__PURE__ */ new Map()), c = bo.get(r), c === void 0)
          bo.set(r, n);
        else {
          for (r = c; r.next !== null; ) r = r.next;
          r.next = n;
        }
    }
    function nc() {
      throw Error("startTransition cannot be called during server rendering.");
    }
    function No() {
      throw Error("Cannot update optimistic state while rendering.");
    }
    function Yr(n, r, c) {
      Zn();
      var v = cl++, E = yc;
      if (typeof n.$$FORM_ACTION == "function") {
        var m = null, H = Hc;
        E = E.formState;
        var X = n.$$IS_SIGNATURE_EQUAL;
        if (E !== null && typeof X == "function") {
          var le = E[1];
          X.call(n, E[2], E[3]) && (m = c !== void 0 ? "p" + c : "k" + O(
            JSON.stringify([
              H,
              null,
              v
            ]),
            0
          ), le === m && (ha = v, r = E[0]));
        }
        var K = n.bind(null, r);
        return n = function(ve) {
          K(ve);
        }, typeof K.$$FORM_ACTION == "function" && (n.$$FORM_ACTION = function(ve) {
          ve = K.$$FORM_ACTION(ve), c !== void 0 && (J(c, "target"), c += "", ve.action = c);
          var Fe = ve.data;
          return Fe && (m === null && (m = c !== void 0 ? "p" + c : "k" + O(
            JSON.stringify([
              H,
              null,
              v
            ]),
            0
          )), Fe.append("$ACTION_KEY", m)), ve;
        }), [r, n, !1];
      }
      var Ee = n.bind(null, r);
      return [
        r,
        function(ve) {
          Ee(ve);
        },
        !1
      ];
    }
    function kl(n) {
      var r = ul;
      return ul += 1, Gl === null && (Gl = []), Fc(Gl, n, r);
    }
    function ti() {
      throw Error("Cache cannot be refreshed during server rendering.");
    }
    function ea() {
    }
    function ri() {
    }
    function tc() {
      if (ba === 0) {
        gu = console.log, Gc = console.info, pc = console.warn, wc = console.error, Ou = console.group, ya = console.groupCollapsed, dl = console.groupEnd;
        var n = {
          configurable: !0,
          enumerable: !0,
          value: ri,
          writable: !0
        };
        Object.defineProperties(console, {
          info: n,
          log: n,
          warn: n,
          error: n,
          group: n,
          groupCollapsed: n,
          groupEnd: n
        });
      }
      ba++;
    }
    function lu() {
      if (ba--, ba === 0) {
        var n = { configurable: !0, enumerable: !0, writable: !0 };
        Object.defineProperties(console, {
          log: ft({}, n, { value: gu }),
          info: ft({}, n, { value: Gc }),
          warn: ft({}, n, { value: pc }),
          error: ft({}, n, { value: wc }),
          group: ft({}, n, { value: Ou }),
          groupCollapsed: ft({}, n, { value: ya }),
          groupEnd: ft({}, n, { value: dl })
        });
      }
      0 > ba && console.error(
        "disabledDepth fell below zero. This is a bug in React. Please file an issue."
      );
    }
    function Pa(n) {
      if (bu === void 0)
        try {
          throw Error();
        } catch (c) {
          var r = c.stack.trim().match(/\n( *(at )?)/);
          bu = r && r[1] || "", Ga = -1 < c.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < c.stack.indexOf("@") ? "@unknown:0:0" : "";
        }
      return `
` + bu + n + Ga;
    }
    function jn(n, r) {
      if (!n || Bs) return "";
      var c = Xc.get(n);
      if (c !== void 0) return c;
      Bs = !0, c = Error.prepareStackTrace, Error.prepareStackTrace = void 0;
      var v = null;
      v = xr.H, xr.H = null, tc();
      try {
        var E = {
          DetermineComponentFrameRoot: function() {
            try {
              if (r) {
                var Fe = function() {
                  throw Error();
                };
                if (Object.defineProperty(Fe.prototype, "props", {
                  set: function() {
                    throw Error();
                  }
                }), typeof Reflect == "object" && Reflect.construct) {
                  try {
                    Reflect.construct(Fe, []);
                  } catch (ue) {
                    var Ae = ue;
                  }
                  Reflect.construct(n, [], Fe);
                } else {
                  try {
                    Fe.call();
                  } catch (ue) {
                    Ae = ue;
                  }
                  n.call(Fe.prototype);
                }
              } else {
                try {
                  throw Error();
                } catch (ue) {
                  Ae = ue;
                }
                (Fe = n()) && typeof Fe.catch == "function" && Fe.catch(function() {
                });
              }
            } catch (ue) {
              if (ue && Ae && typeof ue.stack == "string")
                return [ue.stack, Ae.stack];
            }
            return [null, null];
          }
        };
        E.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
        var m = Object.getOwnPropertyDescriptor(
          E.DetermineComponentFrameRoot,
          "name"
        );
        m && m.configurable && Object.defineProperty(
          E.DetermineComponentFrameRoot,
          "name",
          { value: "DetermineComponentFrameRoot" }
        );
        var H = E.DetermineComponentFrameRoot(), X = H[0], le = H[1];
        if (X && le) {
          var K = X.split(`
`), Ee = le.split(`
`);
          for (H = m = 0; m < K.length && !K[m].includes(
            "DetermineComponentFrameRoot"
          ); )
            m++;
          for (; H < Ee.length && !Ee[H].includes(
            "DetermineComponentFrameRoot"
          ); )
            H++;
          if (m === K.length || H === Ee.length)
            for (m = K.length - 1, H = Ee.length - 1; 1 <= m && 0 <= H && K[m] !== Ee[H]; )
              H--;
          for (; 1 <= m && 0 <= H; m--, H--)
            if (K[m] !== Ee[H]) {
              if (m !== 1 || H !== 1)
                do
                  if (m--, H--, 0 > H || K[m] !== Ee[H]) {
                    var ve = `
` + K[m].replace(
                      " at new ",
                      " at "
                    );
                    return n.displayName && ve.includes("<anonymous>") && (ve = ve.replace("<anonymous>", n.displayName)), typeof n == "function" && Xc.set(n, ve), ve;
                  }
                while (1 <= m && 0 <= H);
              break;
            }
        }
      } finally {
        Bs = !1, xr.H = v, lu(), Error.prepareStackTrace = c;
      }
      return K = (K = n ? n.displayName || n.name : "") ? Pa(K) : "", typeof n == "function" && Xc.set(n, K), K;
    }
    function fs(n) {
      var r = Error.prepareStackTrace;
      if (Error.prepareStackTrace = void 0, n = n.stack, Error.prepareStackTrace = r, n.startsWith(`Error: react-stack-top-frame
`) && (n = n.slice(29)), r = n.indexOf(`
`), r !== -1 && (n = n.slice(r + 1)), r = n.indexOf("react-stack-bottom-frame"), r !== -1 && (r = n.lastIndexOf(
        `
`,
        r
      )), r !== -1)
        n = n.slice(0, r);
      else return "";
      return n;
    }
    function Oc(n) {
      if (typeof n == "string") return Pa(n);
      if (typeof n == "function")
        return n.prototype && n.prototype.isReactComponent ? jn(n, !0) : jn(n, !1);
      if (typeof n == "object" && n !== null) {
        switch (n.$$typeof) {
          case hi:
            return jn(n.render, !1);
          case ws:
            return jn(n.type, !1);
          case ji:
            var r = n, c = r._payload;
            r = r._init;
            try {
              n = r(c);
            } catch {
              return Pa("Lazy");
            }
            return Oc(n);
        }
        if (typeof n.name == "string")
          return c = n.env, Pa(
            n.name + (c ? " [" + c + "]" : "")
          );
      }
      switch (n) {
        case sa:
          return Pa("SuspenseList");
        case zo:
          return Pa("Suspense");
      }
      return "";
    }
    function ml(n) {
      if (typeof n == "object" && n !== null && typeof n.environmentName == "string") {
        var r = n.environmentName;
        n = [n].slice(0), typeof n[0] == "string" ? n.splice(
          0,
          1,
          "[%s] " + n[0],
          " " + r + " "
        ) : n.splice(0, 0, "[%s] ", " " + r + " "), n.unshift(console), r = Kr.apply(console.error, n), r();
      } else console.error(n);
      return null;
    }
    function Tr() {
    }
    function Ac(n, r, c, v, E, m, H, X, le, K, Ee) {
      var ve = /* @__PURE__ */ new Set();
      this.destination = null, this.flushScheduled = !1, this.resumableState = n, this.renderState = r, this.rootFormatContext = c, this.progressiveChunkSize = v === void 0 ? 12800 : v, this.status = 10, this.fatalError = null, this.pendingRootTasks = this.allPendingTasks = this.nextSegmentId = 0, this.completedPreambleSegments = this.completedRootSegment = null, this.abortableTasks = ve, this.pingedTasks = [], this.clientRenderedBoundaries = [], this.completedBoundaries = [], this.partialBoundaries = [], this.trackedPostpones = null, this.onError = E === void 0 ? ml : E, this.onPostpone = K === void 0 ? Tr : K, this.onAllReady = m === void 0 ? Tr : m, this.onShellReady = H === void 0 ? Tr : H, this.onShellError = X === void 0 ? Tr : X, this.onFatalError = le === void 0 ? Tr : le, this.formState = Ee === void 0 ? null : Ee, this.didWarnForKey = null;
    }
    function oi(n, r, c, v, E, m, H, X, le, K, Ee, ve) {
      var Fe = Ls();
      return 1e3 < Fe - Zl && (xr.recentlyCreatedOwnerStacks = 0, Zl = Fe), r = new Ac(
        r,
        c,
        v,
        E,
        m,
        H,
        X,
        le,
        K,
        Ee,
        ve
      ), c = Gi(
        r,
        0,
        null,
        v,
        !1,
        !1
      ), c.parentFlushed = !0, n = Yi(
        r,
        null,
        n,
        -1,
        null,
        c,
        null,
        null,
        r.abortableTasks,
        null,
        v,
        null,
        uu,
        null,
        !1,
        qt,
        null
      ), Xi(n), r.pingedTasks.push(n), r;
    }
    function Co(n, r) {
      n.pingedTasks.push(r), n.pingedTasks.length === 1 && (n.flushScheduled = n.destination !== null, cr(n));
    }
    function Fa(n, r, c, v) {
      return {
        status: vo,
        rootSegmentID: -1,
        parentFlushed: !1,
        pendingTasks: 0,
        completedSegments: [],
        byteSize: 0,
        fallbackAbortableTasks: r,
        errorDigest: null,
        contentState: ja(),
        fallbackState: ja(),
        contentPreamble: c,
        fallbackPreamble: v,
        trackedContentKeyPath: null,
        trackedFallbackNode: null,
        errorMessage: null,
        errorStack: null,
        errorComponentStack: null
      };
    }
    function Yi(n, r, c, v, E, m, H, X, le, K, Ee, ve, Fe, Ae, ue, nn, bn) {
      n.allPendingTasks++, E === null ? n.pendingRootTasks++ : E.pendingTasks++;
      var tn = {
        replay: null,
        node: c,
        childIndex: v,
        ping: function() {
          return Co(n, tn);
        },
        blockedBoundary: E,
        blockedSegment: m,
        blockedPreamble: H,
        hoistableState: X,
        abortSet: le,
        keyPath: K,
        formatContext: Ee,
        context: ve,
        treeContext: Fe,
        componentStack: Ae,
        thenableState: r,
        isFallback: ue
      };
      return tn.debugTask = bn, le.add(tn), tn;
    }
    function ds(n, r, c, v, E, m, H, X, le, K, Ee, ve, Fe, Ae, ue, nn) {
      n.allPendingTasks++, m === null ? n.pendingRootTasks++ : m.pendingTasks++, c.pendingTasks++;
      var bn = {
        replay: c,
        node: v,
        childIndex: E,
        ping: function() {
          return Co(n, bn);
        },
        blockedBoundary: m,
        blockedSegment: null,
        blockedPreamble: null,
        hoistableState: H,
        abortSet: X,
        keyPath: le,
        formatContext: K,
        context: Ee,
        treeContext: ve,
        componentStack: Fe,
        thenableState: r,
        isFallback: Ae
      };
      return bn.debugTask = nn, X.add(bn), bn;
    }
    function Gi(n, r, c, v, E, m) {
      return {
        status: vo,
        parentFlushed: !1,
        id: -1,
        index: r,
        chunks: [],
        children: [],
        preambleChildren: [],
        parentFormatContext: v,
        boundary: c,
        lastPushedText: E,
        textEmbedded: m
      };
    }
    function lo() {
      if (mo === null || mo.componentStack === null)
        return "";
      var n = mo.componentStack;
      try {
        var r = "";
        if (typeof n.type == "string")
          r += Pa(n.type);
        else if (typeof n.type == "function") {
          if (!n.owner) {
            var c = r, v = n.type, E = v ? v.displayName || v.name : "", m = E ? Pa(E) : "";
            r = c + m;
          }
        } else
          n.owner || (r += Oc(n.type));
        for (; n; )
          c = null, n.debugStack != null ? c = fs(
            n.debugStack
          ) : (m = n, m.stack != null && (c = typeof m.stack != "string" ? m.stack = fs(
            m.stack
          ) : m.stack)), (n = n.owner) && c && (r += `
` + c);
        var H = r;
      } catch (X) {
        H = `
Error generating stack: ` + X.message + `
` + X.stack;
      }
      return H;
    }
    function ai(n, r) {
      if (r != null)
        for (var c = 0; c < r.length; c++) {
          var v = r[c];
          typeof v.name == "string" && v.debugStack !== void 0 && (n.componentStack = {
            parent: n.componentStack,
            type: v,
            owner: v.owner,
            stack: v.debugStack
          }, n.debugTask = v.debugTask);
        }
    }
    function Xi(n) {
      var r = n.node;
      if (typeof r == "object" && r !== null)
        switch (r.$$typeof) {
          case ci:
            var c = r.type, v = r._owner, E = r._debugStack;
            ai(n, r._debugInfo), n.debugTask = r._debugTask, n.componentStack = {
              parent: n.componentStack,
              type: c,
              owner: v,
              stack: E
            };
            break;
          case ji:
            ai(n, r._debugInfo);
            break;
          default:
            typeof r.then == "function" && ai(n, r._debugInfo);
        }
    }
    function Oa(n) {
      var r = {};
      return n && Object.defineProperty(r, "componentStack", {
        configurable: !0,
        enumerable: !0,
        get: function() {
          try {
            var c = "", v = n;
            do
              c += Oc(v.type), v = v.parent;
            while (v);
            var E = c;
          } catch (m) {
            E = `
Error generating stack: ` + m.message + `
` + m.stack;
          }
          return Object.defineProperty(r, "componentStack", {
            value: E
          }), E;
        }
      }), r;
    }
    function na(n, r, c, v, E) {
      n.errorDigest = r, c instanceof Error ? (r = String(c.message), c = String(c.stack)) : (r = typeof c == "object" && c !== null ? A(c) : String(c), c = null), E = E ? `Switched to client rendering because the server rendering aborted due to:

` : `Switched to client rendering because the server rendering errored:

`, n.errorMessage = E + r, n.errorStack = c !== null ? E + c : null, n.errorComponentStack = v.componentStack;
    }
    function ir(n, r, c, v) {
      if (n = n.onError, r = v ? v.run(n.bind(null, r, c)) : n(r, c), r != null && typeof r != "string")
        console.error(
          'onError returned something with a type other than "string". onError should return a string and may return null or undefined but must not return anything else. It received something of type "%s" instead',
          typeof r
        );
      else return r;
    }
    function ta(n, r, c, v) {
      c = n.onShellError;
      var E = n.onFatalError;
      v ? (v.run(c.bind(null, r)), v.run(E.bind(null, r))) : (c(r), E(r)), n.destination !== null ? (n.status = Fi, n.destination.destroy(r)) : (n.status = 13, n.fatalError = r);
    }
    function Mc(n, r, c, v, E, m) {
      var H = r.thenableState;
      for (r.thenableState = null, go = {}, bc = r, yc = n, Hc = c, yo = !1, cl = It = 0, ha = -1, ul = 0, Gl = H, n = Ns(v, E, m); Yl; )
        Yl = !1, cl = It = 0, ha = -1, ul = 0, fl += 1, Kn = null, n = v(E, m);
      return jo(), n;
    }
    function so(n, r, c, v, E, m, H) {
      var X = !1;
      if (m !== 0 && n.formState !== null) {
        var le = r.blockedSegment;
        if (le !== null) {
          X = !0, le = le.chunks;
          for (var K = 0; K < m; K++)
            K === H ? le.push("<!--F!-->") : le.push("<!--F-->");
        }
      }
      m = r.keyPath, r.keyPath = c, E ? (c = r.treeContext, r.treeContext = ni(c, 1, 0), lr(n, r, v, -1), r.treeContext = c) : X ? lr(n, r, v, -1) : vt(n, r, v, -1), r.keyPath = m;
    }
    function Aa(n, r, c, v, E, m) {
      if (typeof v == "function")
        if (v.prototype && v.prototype.isReactComponent) {
          var H = E;
          if ("ref" in E) {
            H = {};
            for (var X in E)
              X !== "ref" && (H[X] = E[X]);
          }
          var le = v.defaultProps;
          if (le) {
            H === E && (H = ft({}, H, E));
            for (var K in le)
              H[K] === void 0 && (H[K] = le[K]);
          }
          var Ee = H, ve = qt, Fe = v.contextType;
          if ("contextType" in v && Fe !== null && (Fe === void 0 || Fe.$$typeof !== di) && !ki.has(v)) {
            ki.add(v);
            var Ae = Fe === void 0 ? " However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file." : typeof Fe != "object" ? " However, it is set to a " + typeof Fe + "." : Fe.$$typeof === qi ? " Did you accidentally pass the Context.Consumer instead?" : " However, it is set to an object with keys {" + Object.keys(Fe).join(", ") + "}.";
            console.error(
              "%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s",
              Hn(v) || "Component",
              Ae
            );
          }
          typeof Fe == "object" && Fe !== null && (ve = Fe._currentValue2);
          var ue = new v(Ee, ve);
          if (typeof v.getDerivedStateFromProps == "function" && (ue.state === null || ue.state === void 0)) {
            var nn = Hn(v) || "Component";
            yr.has(nn) || (yr.add(nn), console.error(
              "`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.",
              nn,
              ue.state === null ? "null" : "undefined",
              nn
            ));
          }
          if (typeof v.getDerivedStateFromProps == "function" || typeof ue.getSnapshotBeforeUpdate == "function") {
            var bn = null, tn = null, cn = null;
            if (typeof ue.componentWillMount == "function" && ue.componentWillMount.__suppressDeprecationWarning !== !0 ? bn = "componentWillMount" : typeof ue.UNSAFE_componentWillMount == "function" && (bn = "UNSAFE_componentWillMount"), typeof ue.componentWillReceiveProps == "function" && ue.componentWillReceiveProps.__suppressDeprecationWarning !== !0 ? tn = "componentWillReceiveProps" : typeof ue.UNSAFE_componentWillReceiveProps == "function" && (tn = "UNSAFE_componentWillReceiveProps"), typeof ue.componentWillUpdate == "function" && ue.componentWillUpdate.__suppressDeprecationWarning !== !0 ? cn = "componentWillUpdate" : typeof ue.UNSAFE_componentWillUpdate == "function" && (cn = "UNSAFE_componentWillUpdate"), bn !== null || tn !== null || cn !== null) {
              var st = Hn(v) || "Component", qe = typeof v.getDerivedStateFromProps == "function" ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
              Ua.has(st) || (Ua.add(
                st
              ), console.error(
                `Unsafe legacy lifecycles will not be called for components using new component APIs.

%s uses %s but also contains the following legacy lifecycles:%s%s%s

The above lifecycles should be removed. Learn more about this warning here:
https://react.dev/link/unsafe-component-lifecycles`,
                st,
                qe,
                bn !== null ? `
  ` + bn : "",
                tn !== null ? `
  ` + tn : "",
                cn !== null ? `
  ` + cn : ""
              ));
            }
          }
          var xn = Hn(v) || "Component";
          ue.render || (v.prototype && typeof v.prototype.render == "function" ? console.error(
            "No `render` method found on the %s instance: did you accidentally return an object from the constructor?",
            xn
          ) : console.error(
            "No `render` method found on the %s instance: you may have forgotten to define `render`.",
            xn
          )), !ue.getInitialState || ue.getInitialState.isReactClassApproved || ue.state || console.error(
            "getInitialState was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Did you mean to define a state property instead?",
            xn
          ), ue.getDefaultProps && !ue.getDefaultProps.isReactClassApproved && console.error(
            "getDefaultProps was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Use a static property to define defaultProps instead.",
            xn
          ), ue.contextType && console.error(
            "contextType was defined as an instance property on %s. Use a static property to define contextType instead.",
            xn
          ), v.childContextTypes && !Uc.has(v) && (Uc.add(v), console.error(
            "%s uses the legacy childContextTypes API which was removed in React 19. Use React.createContext() instead. (https://react.dev/link/legacy-context)",
            xn
          )), v.contextTypes && !Ya.has(v) && (Ya.add(v), console.error(
            "%s uses the legacy contextTypes API which was removed in React 19. Use React.createContext() with static contextType instead. (https://react.dev/link/legacy-context)",
            xn
          )), typeof ue.componentShouldUpdate == "function" && console.error(
            "%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.",
            xn
          ), v.prototype && v.prototype.isPureReactComponent && typeof ue.shouldComponentUpdate < "u" && console.error(
            "%s has a method called shouldComponentUpdate(). shouldComponentUpdate should not be used when extending React.PureComponent. Please extend React.Component if shouldComponentUpdate is used.",
            Hn(v) || "A pure component"
          ), typeof ue.componentDidUnmount == "function" && console.error(
            "%s has a method called componentDidUnmount(). But there is no such lifecycle method. Did you mean componentWillUnmount()?",
            xn
          ), typeof ue.componentDidReceiveProps == "function" && console.error(
            "%s has a method called componentDidReceiveProps(). But there is no such lifecycle method. If you meant to update the state in response to changing props, use componentWillReceiveProps(). If you meant to fetch data or run side-effects or mutations after React has updated the UI, use componentDidUpdate().",
            xn
          ), typeof ue.componentWillRecieveProps == "function" && console.error(
            "%s has a method called componentWillRecieveProps(). Did you mean componentWillReceiveProps()?",
            xn
          ), typeof ue.UNSAFE_componentWillRecieveProps == "function" && console.error(
            "%s has a method called UNSAFE_componentWillRecieveProps(). Did you mean UNSAFE_componentWillReceiveProps()?",
            xn
          );
          var mn = ue.props !== Ee;
          ue.props !== void 0 && mn && console.error(
            "When calling super() in `%s`, make sure to pass up the same props that your component's constructor was passed.",
            xn
          ), ue.defaultProps && console.error(
            "Setting defaultProps as an instance property on %s is not supported and will be ignored. Instead, define defaultProps as a static property on %s.",
            xn,
            xn
          ), typeof ue.getSnapshotBeforeUpdate != "function" || typeof ue.componentDidUpdate == "function" || ll.has(v) || (ll.add(v), console.error(
            "%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). This component defines getSnapshotBeforeUpdate() only.",
            Hn(v)
          )), typeof ue.getDerivedStateFromProps == "function" && console.error(
            "%s: getDerivedStateFromProps() is defined as an instance method and will be ignored. Instead, declare it as a static method.",
            xn
          ), typeof ue.getDerivedStateFromError == "function" && console.error(
            "%s: getDerivedStateFromError() is defined as an instance method and will be ignored. Instead, declare it as a static method.",
            xn
          ), typeof v.getSnapshotBeforeUpdate == "function" && console.error(
            "%s: getSnapshotBeforeUpdate() is defined as a static method and will be ignored. Instead, declare it as an instance method.",
            xn
          );
          var vr = ue.state;
          vr && (typeof vr != "object" || Jn(vr)) && console.error("%s.state: must be set to an object or null", xn), typeof ue.getChildContext == "function" && typeof v.childContextTypes != "object" && console.error(
            "%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().",
            xn
          );
          var Dt = ue.state !== void 0 ? ue.state : null;
          ue.updater = Pu, ue.props = Ee, ue.state = Dt;
          var Ht = { queue: [], replace: !1 };
          ue._reactInternals = Ht;
          var dt = v.contextType;
          if (ue.context = typeof dt == "object" && dt !== null ? dt._currentValue2 : qt, ue.state === Ee) {
            var Po = Hn(v) || "Component";
            Ha.has(
              Po
            ) || (Ha.add(
              Po
            ), console.error(
              "%s: It is not recommended to assign props directly to state because updates to props won't be reflected in state. In most cases, it is better to use props directly.",
              Po
            ));
          }
          var _r = v.getDerivedStateFromProps;
          if (typeof _r == "function") {
            var Mn = _r(
              Ee,
              Dt
            );
            if (Mn === void 0) {
              var e = Hn(v) || "Component";
              sl.has(e) || (sl.add(e), console.error(
                "%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. You have returned undefined.",
                e
              ));
            }
            var t = Mn == null ? Dt : ft({}, Dt, Mn);
            ue.state = t;
          }
          if (typeof v.getDerivedStateFromProps != "function" && typeof ue.getSnapshotBeforeUpdate != "function" && (typeof ue.UNSAFE_componentWillMount == "function" || typeof ue.componentWillMount == "function")) {
            var u = ue.state;
            if (typeof ue.componentWillMount == "function") {
              if (ue.componentWillMount.__suppressDeprecationWarning !== !0) {
                var y = Hn(v) || "Unknown";
                it[y] || (console.warn(
                  `componentWillMount has been renamed, and is not recommended for use. See https://react.dev/link/unsafe-component-lifecycles for details.

* Move code from componentWillMount to componentDidMount (preferred in most cases) or the constructor.

Please update the following components: %s`,
                  y
                ), it[y] = !0);
              }
              ue.componentWillMount();
            }
            if (typeof ue.UNSAFE_componentWillMount == "function" && ue.UNSAFE_componentWillMount(), u !== ue.state && (console.error(
              "%s.componentWillMount(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.",
              Hn(v) || "Component"
            ), Pu.enqueueReplaceState(
              ue,
              ue.state,
              null
            )), Ht.queue !== null && 0 < Ht.queue.length) {
              var C = Ht.queue, k = Ht.replace;
              if (Ht.queue = null, Ht.replace = !1, k && C.length === 1)
                ue.state = C[0];
              else {
                for (var z = k ? C[0] : ue.state, W = !0, ae = k ? 1 : 0; ae < C.length; ae++) {
                  var G = C[ae], be = typeof G == "function" ? G.call(
                    ue,
                    z,
                    Ee,
                    void 0
                  ) : G;
                  be != null && (W ? (W = !1, z = ft(
                    {},
                    z,
                    be
                  )) : ft(z, be));
                }
                ue.state = z;
              }
            } else Ht.queue = null;
          }
          var he = Pi(ue);
          if (n.status === 12) throw null;
          ue.props !== Ee && (Us || console.error(
            "It looks like %s is reassigning its own `this.props` while rendering. This is not supported and can lead to confusing bugs.",
            Hn(v) || "a component"
          ), Us = !0);
          var Se = r.keyPath;
          r.keyPath = c, vt(n, r, he, -1), r.keyPath = Se;
        } else {
          if (v.prototype && typeof v.prototype.render == "function") {
            var Te = Hn(v) || "Unknown";
            Zc[Te] || (console.error(
              "The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.",
              Te,
              Te
            ), Zc[Te] = !0);
          }
          var fe = Mc(
            n,
            r,
            c,
            v,
            E,
            void 0
          );
          if (n.status === 12) throw null;
          var pn = It !== 0, Bn = cl, hn = ha;
          if (v.contextTypes) {
            var Ye = Hn(v) || "Unknown";
            va[Ye] || (va[Ye] = !0, console.error(
              "%s uses the legacy contextTypes API which was removed in React 19. Use React.createContext() with React.useContext() instead. (https://react.dev/link/legacy-context)",
              Ye
            ));
          }
          if (v && v.childContextTypes && console.error(
            `childContextTypes cannot be defined on a function component.
  %s.childContextTypes = ...`,
            v.displayName || v.name || "Component"
          ), typeof v.getDerivedStateFromProps == "function") {
            var _t = Hn(v) || "Unknown";
            yu[_t] || (console.error(
              "%s: Function components do not support getDerivedStateFromProps.",
              _t
            ), yu[_t] = !0);
          }
          if (typeof v.contextType == "object" && v.contextType !== null) {
            var Gn = Hn(v) || "Unknown";
            Vl[Gn] || (console.error(
              "%s: Function components do not support contextType.",
              Gn
            ), Vl[Gn] = !0);
          }
          so(
            n,
            r,
            c,
            fe,
            pn,
            Bn,
            hn
          );
        }
      else if (typeof v == "string") {
        var gn = r.blockedSegment;
        if (gn === null) {
          var mr = E.children, jr = r.formatContext, Yt = r.keyPath;
          r.formatContext = Oe(jr, v, E), r.keyPath = c, lr(n, r, mr, -1), r.formatContext = jr, r.keyPath = Yt;
        } else {
          var jt = de(
            gn.chunks,
            v,
            E,
            n.resumableState,
            n.renderState,
            r.blockedPreamble,
            r.hoistableState,
            r.formatContext,
            gn.lastPushedText,
            r.isFallback
          );
          gn.lastPushedText = !1;
          var $n = r.formatContext, Pr = r.keyPath;
          if (r.keyPath = c, (r.formatContext = Oe(
            $n,
            v,
            E
          )).insertionMode === an) {
            var Fr = Gi(
              n,
              0,
              null,
              r.formatContext,
              !1,
              !1
            );
            gn.preambleChildren.push(Fr);
            var wn = Yi(
              n,
              null,
              jt,
              -1,
              r.blockedBoundary,
              Fr,
              r.blockedPreamble,
              r.hoistableState,
              n.abortableTasks,
              r.keyPath,
              r.formatContext,
              r.context,
              r.treeContext,
              r.componentStack,
              r.isFallback,
              qt,
              r.debugTask
            );
            Xi(wn), n.pingedTasks.push(wn);
          } else lr(n, r, jt, -1);
          r.formatContext = $n, r.keyPath = Pr;
          e: {
            var ht = gn.chunks, Un = n.resumableState;
            switch (v) {
              case "title":
              case "style":
              case "script":
              case "area":
              case "base":
              case "br":
              case "col":
              case "embed":
              case "hr":
              case "img":
              case "input":
              case "keygen":
              case "link":
              case "meta":
              case "param":
              case "source":
              case "track":
              case "wbr":
                break e;
              case "body":
                if ($n.insertionMode <= Ie) {
                  Un.hasBody = !0;
                  break e;
                }
                break;
              case "html":
                if ($n.insertionMode === pe) {
                  Un.hasHtml = !0;
                  break e;
                }
                break;
              case "head":
                if ($n.insertionMode <= Ie) break e;
            }
            ht.push(yt(v));
          }
          gn.lastPushedText = !1;
        }
      } else {
        switch (v) {
          case Wo:
          case ps:
          case fi:
          case ui:
            var Br = r.keyPath;
            r.keyPath = c, vt(n, r, E.children, -1), r.keyPath = Br;
            return;
          case gi:
            if (E.mode !== "hidden") {
              var Nr = r.keyPath;
              r.keyPath = c, vt(n, r, E.children, -1), r.keyPath = Nr;
            }
            return;
          case sa:
            var $t = r.keyPath;
            r.keyPath = c, vt(n, r, E.children, -1), r.keyPath = $t;
            return;
          case Ml:
          case ur:
            throw Error(
              "ReactDOMServer does not yet support scope components."
            );
          case zo:
            e: if (r.replay !== null) {
              var pa = r.keyPath;
              r.keyPath = c;
              var po = E.children;
              try {
                lr(n, r, po, -1);
              } finally {
                r.keyPath = pa;
              }
            } else {
              var wa = r.keyPath, Ql = r.blockedBoundary, Ta = r.blockedPreamble, bl = r.hoistableState, Fo = r.blockedSegment, Jl = E.fallback, Lr = E.children, er = /* @__PURE__ */ new Set(), Rt = r.formatContext.insertionMode < Ue ? Fa(
                n,
                er,
                Ke(),
                Ke()
              ) : Fa(
                n,
                er,
                null,
                null
              );
              n.trackedPostpones !== null && (Rt.trackedContentKeyPath = c);
              var $r = Gi(
                n,
                Fo.chunks.length,
                Rt,
                r.formatContext,
                !1,
                !1
              );
              Fo.children.push($r), Fo.lastPushedText = !1;
              var Oo = Gi(
                n,
                0,
                null,
                r.formatContext,
                !1,
                !1
              );
              if (Oo.parentFlushed = !0, n.trackedPostpones !== null) {
                var yl = [
                  c[0],
                  "Suspense Fallback",
                  c[2]
                ], Ao = [
                  yl[1],
                  yl[2],
                  [],
                  null
                ];
                n.trackedPostpones.workingMap.set(
                  yl,
                  Ao
                ), Rt.trackedFallbackNode = Ao, r.blockedSegment = $r, r.blockedPreamble = Rt.fallbackPreamble, r.keyPath = yl, $r.status = 6;
                try {
                  lr(n, r, Jl, -1), us(
                    $r.chunks,
                    n.renderState,
                    $r.lastPushedText,
                    $r.textEmbedded
                  ), $r.status = lt;
                } catch (wo) {
                  throw $r.status = n.status === 12 ? 3 : 4, wo;
                } finally {
                  r.blockedSegment = Fo, r.blockedPreamble = Ta, r.keyPath = wa;
                }
                var Ca = Yi(
                  n,
                  null,
                  Lr,
                  -1,
                  Rt,
                  Oo,
                  Rt.contentPreamble,
                  Rt.contentState,
                  r.abortSet,
                  c,
                  r.formatContext,
                  r.context,
                  r.treeContext,
                  r.componentStack,
                  r.isFallback,
                  qt,
                  r.debugTask
                );
                Xi(Ca), n.pingedTasks.push(Ca);
              } else {
                r.blockedBoundary = Rt, r.blockedPreamble = Rt.contentPreamble, r.hoistableState = Rt.contentState, r.blockedSegment = Oo, r.keyPath = c, Oo.status = 6;
                try {
                  if (lr(n, r, Lr, -1), us(
                    Oo.chunks,
                    n.renderState,
                    Oo.lastPushedText,
                    Oo.textEmbedded
                  ), Oo.status = lt, aa(Rt, Oo), Rt.pendingTasks === 0 && Rt.status === vo) {
                    Rt.status = lt, n.pendingRootTasks === 0 && r.blockedPreamble && Gr(n);
                    break e;
                  }
                } catch (wo) {
                  if (Rt.status = xt, n.status === 12) {
                    Oo.status = 3;
                    var Mo = n.fatalError;
                  } else
                    Oo.status = 4, Mo = wo;
                  var Ec = Oa(r.componentStack), Gt = ir(
                    n,
                    Mo,
                    Ec,
                    r.debugTask
                  );
                  na(
                    Rt,
                    Gt,
                    Mo,
                    Ec,
                    !1
                  ), Ir(n, Rt);
                } finally {
                  r.blockedBoundary = Ql, r.blockedPreamble = Ta, r.hoistableState = bl, r.blockedSegment = Fo, r.keyPath = wa;
                }
                var eo = Yi(
                  n,
                  null,
                  Jl,
                  -1,
                  Ql,
                  $r,
                  Rt.fallbackPreamble,
                  Rt.fallbackState,
                  er,
                  [c[0], "Suspense Fallback", c[2]],
                  r.formatContext,
                  r.context,
                  r.treeContext,
                  r.componentStack,
                  !0,
                  qt,
                  r.debugTask
                );
                Xi(eo), n.pingedTasks.push(eo);
              }
            }
            return;
        }
        if (typeof v == "object" && v !== null)
          switch (v.$$typeof) {
            case hi:
              if ("ref" in E) {
                var Za = {};
                for (var Va in E)
                  Va !== "ref" && (Za[Va] = E[Va]);
              } else Za = E;
              var Ea = Mc(
                n,
                r,
                c,
                v.render,
                Za,
                m
              );
              so(
                n,
                r,
                c,
                Ea,
                It !== 0,
                cl,
                ha
              );
              return;
            case ws:
              Aa(n, r, c, v.type, E, m);
              return;
            case Ki:
            case di:
              var vl = E.value, Jo = E.children, Oi = r.context, Ai = r.keyPath, Mi = v._currentValue2;
              v._currentValue2 = vl, v._currentRenderer2 !== void 0 && v._currentRenderer2 !== null && v._currentRenderer2 !== Dr && console.error(
                "Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."
              ), v._currentRenderer2 = Dr;
              var Ii = Wn, Io = {
                parent: Ii,
                depth: Ii === null ? 0 : Ii.depth + 1,
                context: v,
                parentValue: Mi,
                value: vl
              };
              Wn = Io, r.context = Io, r.keyPath = c, vt(n, r, Jo, -1);
              var xa = Wn;
              if (xa === null)
                throw Error(
                  "Tried to pop a Context at the root of the app. This is a bug in React."
                );
              xa.context !== v && console.error(
                "The parent context is not the expected context. This is probably a bug in React."
              ), xa.context._currentValue2 = xa.parentValue, v._currentRenderer2 !== void 0 && v._currentRenderer2 !== null && v._currentRenderer2 !== Dr && console.error(
                "Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."
              ), v._currentRenderer2 = Dr;
              var xc = Wn = xa.parent;
              r.context = xc, r.keyPath = Ai, Oi !== r.context && console.error(
                "Popping the context provider did not return back to the original snapshot. This is a bug in React."
              );
              return;
            case qi:
              var Ko = v._context, Kl = E.children;
              typeof Kl != "function" && console.error(
                "A context consumer was rendered with multiple children, or a child that isn't a function. A context consumer expects a single child that is a function. If you did pass a function, make sure there is no trailing or leading whitespace around it."
              );
              var ql = Kl(Ko._currentValue2), Vc = r.keyPath;
              r.keyPath = c, vt(n, r, ql, -1), r.keyPath = Vc;
              return;
            case ji:
              var Qa = hl(v);
              if (n.status === 12) throw null;
              Aa(n, r, c, Qa, E, m);
              return;
          }
        var Rc = "";
        throw (v === void 0 || typeof v == "object" && v !== null && Object.keys(v).length === 0) && (Rc += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports."), Error(
          "Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) but got: " + ((v == null ? v : typeof v) + "." + Rc)
        );
      }
    }
    function Pl(n, r, c, v, E) {
      var m = r.replay, H = r.blockedBoundary, X = Gi(
        n,
        0,
        null,
        r.formatContext,
        !1,
        !1
      );
      X.id = c, X.parentFlushed = !0;
      try {
        r.replay = null, r.blockedSegment = X, lr(n, r, v, E), X.status = lt, H === null ? n.completedRootSegment = X : (aa(H, X), H.parentFlushed && n.partialBoundaries.push(H));
      } finally {
        r.replay = m, r.blockedSegment = null;
      }
    }
    function ra(n, r, c, v, E, m, H, X, le, K) {
      m = K.nodes;
      for (var Ee = 0; Ee < m.length; Ee++) {
        var ve = m[Ee];
        if (E === ve[1]) {
          if (ve.length === 4) {
            if (v !== null && v !== ve[0])
              throw Error(
                "Expected the resume to render <" + ve[0] + "> in this slot but instead it rendered <" + v + ">. The tree doesn't match so React will fallback to client rendering."
              );
            var Fe = ve[2];
            ve = ve[3], v = r.node, r.replay = { nodes: Fe, slots: ve, pendingTasks: 1 };
            try {
              if (Aa(n, r, c, H, X, le), r.replay.pendingTasks === 1 && 0 < r.replay.nodes.length)
                throw Error(
                  "Couldn't find all resumable slots by key/index during replaying. The tree doesn't match so React will fallback to client rendering."
                );
              r.replay.pendingTasks--;
            } catch (qe) {
              if (typeof qe == "object" && qe !== null && (qe === da || typeof qe.then == "function"))
                throw r.node === v && (r.replay = K), qe;
              r.replay.pendingTasks--, H = Oa(r.componentStack), X = n, n = r.blockedBoundary, c = qe, le = ve, ve = ir(X, c, H, r.debugTask), Pn(
                X,
                n,
                Fe,
                le,
                c,
                ve,
                H,
                !1
              );
            }
            r.replay = K;
          } else {
            if (H !== zo)
              throw Error(
                "Expected the resume to render <Suspense> in this slot but instead it rendered <" + (Hn(H) || "Unknown") + ">. The tree doesn't match so React will fallback to client rendering."
              );
            e: {
              K = void 0, H = ve[5], le = ve[2], v = ve[3], E = ve[4] === null ? [] : ve[4][2], ve = ve[4] === null ? null : ve[4][3];
              var Ae = r.keyPath, ue = r.replay, nn = r.blockedBoundary, bn = r.hoistableState, tn = X.children, cn = X.fallback, st = /* @__PURE__ */ new Set();
              X = r.formatContext.insertionMode < Ue ? Fa(
                n,
                st,
                Ke(),
                Ke()
              ) : Fa(
                n,
                st,
                null,
                null
              ), X.parentFlushed = !0, X.rootSegmentID = H, r.blockedBoundary = X, r.hoistableState = X.contentState, r.keyPath = c, r.replay = { nodes: le, slots: v, pendingTasks: 1 };
              try {
                if (lr(n, r, tn, -1), r.replay.pendingTasks === 1 && 0 < r.replay.nodes.length)
                  throw Error(
                    "Couldn't find all resumable slots by key/index during replaying. The tree doesn't match so React will fallback to client rendering."
                  );
                if (r.replay.pendingTasks--, X.pendingTasks === 0 && X.status === vo) {
                  X.status = lt, n.completedBoundaries.push(X);
                  break e;
                }
              } catch (qe) {
                X.status = xt, Fe = Oa(r.componentStack), K = ir(
                  n,
                  qe,
                  Fe,
                  r.debugTask
                ), na(X, K, qe, Fe, !1), r.replay.pendingTasks--, n.clientRenderedBoundaries.push(X);
              } finally {
                r.blockedBoundary = nn, r.hoistableState = bn, r.replay = ue, r.keyPath = Ae;
              }
              X = ds(
                n,
                null,
                { nodes: E, slots: ve, pendingTasks: 0 },
                cn,
                -1,
                nn,
                X.fallbackState,
                st,
                [c[0], "Suspense Fallback", c[2]],
                r.formatContext,
                r.context,
                r.treeContext,
                r.componentStack,
                !0,
                qt,
                r.debugTask
              ), Xi(X), n.pingedTasks.push(X);
            }
          }
          m.splice(Ee, 1);
          break;
        }
      }
    }
    function vt(n, r, c, v) {
      r.replay !== null && typeof r.replay.slots == "number" ? Pl(n, r, r.replay.slots, c, v) : (r.node = c, r.childIndex = v, c = r.componentStack, v = r.debugTask, Xi(r), ii(n, r), r.componentStack = c, r.debugTask = v);
    }
    function ii(n, r) {
      var c = r.node, v = r.childIndex;
      if (c !== null) {
        if (typeof c == "object") {
          switch (c.$$typeof) {
            case ci:
              var E = c.type, m = c.key;
              c = c.props;
              var H = c.ref;
              H = H !== void 0 ? H : null;
              var X = r.debugTask, le = Hn(E);
              m = m ?? (v === -1 ? 0 : v);
              var K = [r.keyPath, le, m];
              r.replay !== null ? X ? X.run(
                ra.bind(
                  null,
                  n,
                  r,
                  K,
                  le,
                  m,
                  v,
                  E,
                  c,
                  H,
                  r.replay
                )
              ) : ra(
                n,
                r,
                K,
                le,
                m,
                v,
                E,
                c,
                H,
                r.replay
              ) : X ? X.run(
                Aa.bind(
                  null,
                  n,
                  r,
                  K,
                  E,
                  c,
                  H
                )
              ) : Aa(n, r, K, E, c, H);
              return;
            case Ji:
              throw Error(
                "Portals are not currently supported by the server renderer. Render them conditionally so that they only appear on the client render."
              );
            case ji:
              if (c = hl(c), n.status === 12) throw null;
              vt(n, r, c, v);
              return;
          }
          if (Jn(c)) {
            Mr(n, r, c, v);
            return;
          }
          if (c === null || typeof c != "object" ? m = null : (E = Uo && c[Uo] || c["@@iterator"], m = typeof E == "function" ? E : null), m && (E = m.call(c))) {
            if (E === c ? (v !== -1 || r.componentStack === null || typeof r.componentStack.type != "function" || Object.prototype.toString.call(r.componentStack.type) !== "[object GeneratorFunction]" || Object.prototype.toString.call(E) !== "[object Generator]") && (Cc || console.error(
              "Using Iterators as children is unsupported and will likely yield unexpected results because enumerating a generator mutates it. You may convert it to an array with `Array.from()` or the `[...spread]` operator before rendering. You can also use an Iterable that can iterate multiple times over the same items."
            ), Cc = !0) : c.entries !== m || Hs || (console.error(
              "Using Maps as children is not supported. Use an array of keyed ReactElements instead."
            ), Hs = !0), c = E.next(), !c.done) {
              m = [];
              do
                m.push(c.value), c = E.next();
              while (!c.done);
              Mr(n, r, m, v);
            }
            return;
          }
          if (typeof c.then == "function")
            return r.thenableState = null, vt(
              n,
              r,
              kl(c),
              v
            );
          if (c.$$typeof === di)
            return vt(
              n,
              r,
              c._currentValue2,
              v
            );
          throw n = Object.prototype.toString.call(c), Error(
            "Objects are not valid as a React child (found: " + (n === "[object Object]" ? "object with keys {" + Object.keys(c).join(", ") + "}" : n) + "). If you meant to render a collection of children, use an array instead."
          );
        }
        typeof c == "string" ? (r = r.blockedSegment, r !== null && (r.lastPushedText = ec(
          r.chunks,
          c,
          n.renderState,
          r.lastPushedText
        ))) : typeof c == "number" || typeof c == "bigint" ? (r = r.blockedSegment, r !== null && (r.lastPushedText = ec(
          r.chunks,
          "" + c,
          n.renderState,
          r.lastPushedText
        ))) : (typeof c == "function" && (n = c.displayName || c.name || "Component", console.error(
          "Functions are not valid as a React child. This may happen if you return %s instead of <%s /> from render. Or maybe you meant to call this function rather than return it.",
          n,
          n
        )), typeof c == "symbol" && console.error(
          `Symbols are not valid as a React child.
  %s`,
          String(c)
        ));
      }
    }
    function Mr(n, r, c, v) {
      var E = r.keyPath, m = r.componentStack, H = r.debugTask;
      if (ai(r, r.node._debugInfo), v !== -1 && (r.keyPath = [r.keyPath, "Fragment", v], r.replay !== null)) {
        for (var X = r.replay, le = X.nodes, K = 0; K < le.length; K++) {
          var Ee = le[K];
          if (Ee[1] === v) {
            v = Ee[2], Ee = Ee[3], r.replay = { nodes: v, slots: Ee, pendingTasks: 1 };
            try {
              if (Mr(n, r, c, -1), r.replay.pendingTasks === 1 && 0 < r.replay.nodes.length)
                throw Error(
                  "Couldn't find all resumable slots by key/index during replaying. The tree doesn't match so React will fallback to client rendering."
                );
              r.replay.pendingTasks--;
            } catch (tn) {
              if (typeof tn == "object" && tn !== null && (tn === da || typeof tn.then == "function"))
                throw tn;
              r.replay.pendingTasks--;
              var ve = Oa(r.componentStack);
              c = r.blockedBoundary;
              var Fe = tn, Ae = Ee;
              Ee = ir(
                n,
                Fe,
                ve,
                r.debugTask
              ), Pn(
                n,
                c,
                v,
                Ae,
                Fe,
                Ee,
                ve,
                !1
              );
            }
            r.replay = X, le.splice(K, 1);
            break;
          }
        }
        r.keyPath = E, r.componentStack = m, r.debugTask = H;
        return;
      }
      if (X = r.treeContext, le = c.length, r.replay !== null && (K = r.replay.slots, K !== null && typeof K == "object")) {
        for (v = 0; v < le; v++)
          Ee = c[v], r.treeContext = ni(
            X,
            le,
            v
          ), Fe = K[v], typeof Fe == "number" ? (Pl(n, r, Fe, Ee, v), delete K[v]) : lr(n, r, Ee, v);
        r.treeContext = X, r.keyPath = E, r.componentStack = m, r.debugTask = H;
        return;
      }
      for (K = 0; K < le; K++) {
        if (v = c[K], Ae = n, Ee = r, Fe = v, Fe !== null && typeof Fe == "object" && (Fe.$$typeof === ci || Fe.$$typeof === Ji) && Fe._store && (!Fe._store.validated && Fe.key == null || Fe._store.validated === 2)) {
          if (typeof Fe._store != "object")
            throw Error(
              "React Component in warnForMissingKey should have a _store. This error is likely caused by a bug in React. Please file an issue."
            );
          if (Fe._store.validated = 1, ve = Ae.didWarnForKey, ve == null && (ve = Ae.didWarnForKey = /* @__PURE__ */ new WeakSet()), Ae = Ee.componentStack, Ae !== null && !ve.has(Ae)) {
            ve.add(Ae);
            var ue = Hn(Fe.type);
            ve = Fe._owner;
            var nn = Ae.owner;
            if (Ae = "", nn && typeof nn.type < "u") {
              var bn = Hn(nn.type);
              bn && (Ae = `

Check the render method of \`` + bn + "`.");
            }
            Ae || ue && (Ae = `

Check the top-level render call using <` + ue + ">."), ue = "", ve != null && nn !== ve && (nn = null, typeof ve.type < "u" ? nn = Hn(ve.type) : typeof ve.name == "string" && (nn = ve.name), nn && (ue = " It was passed a child from " + nn + ".")), ve = Ee.componentStack, Ee.componentStack = {
              parent: Ee.componentStack,
              type: Fe.type,
              owner: Fe._owner,
              stack: Fe._debugStack
            }, console.error(
              'Each child in a list should have a unique "key" prop.%s%s See https://react.dev/link/warning-keys for more information.',
              Ae,
              ue
            ), Ee.componentStack = ve;
          }
        }
        r.treeContext = ni(X, le, K), lr(n, r, v, K);
      }
      r.treeContext = X, r.keyPath = E, r.componentStack = m, r.debugTask = H;
    }
    function Ir(n, r) {
      n = n.trackedPostpones, n !== null && (r = r.trackedContentKeyPath, r !== null && (r = n.workingMap.get(r), r !== void 0 && (r.length = 4, r[2] = [], r[3] = null)));
    }
    function hs(n, r, c) {
      return ds(
        n,
        c,
        r.replay,
        r.node,
        r.childIndex,
        r.blockedBoundary,
        r.hoistableState,
        r.abortSet,
        r.keyPath,
        r.formatContext,
        r.context,
        r.treeContext,
        r.componentStack,
        r.isFallback,
        qt,
        r.debugTask
      );
    }
    function gs(n, r, c) {
      var v = r.blockedSegment, E = Gi(
        n,
        v.chunks.length,
        null,
        r.formatContext,
        v.lastPushedText,
        !0
      );
      return v.children.push(E), v.lastPushedText = !1, Yi(
        n,
        c,
        r.node,
        r.childIndex,
        r.blockedBoundary,
        E,
        r.blockedPreamble,
        r.hoistableState,
        r.abortSet,
        r.keyPath,
        r.formatContext,
        r.context,
        r.treeContext,
        r.componentStack,
        r.isFallback,
        qt,
        r.debugTask
      );
    }
    function lr(n, r, c, v) {
      var E = r.formatContext, m = r.context, H = r.keyPath, X = r.treeContext, le = r.componentStack, K = r.debugTask, Ee = r.blockedSegment;
      if (Ee === null)
        try {
          return vt(n, r, c, v);
        } catch (Ae) {
          if (jo(), c = Ae === da ? Sl() : Ae, typeof c == "object" && c !== null) {
            if (typeof c.then == "function") {
              v = Ui(), n = hs(
                n,
                r,
                v
              ).ping, c.then(n, n), r.formatContext = E, r.context = m, r.keyPath = H, r.treeContext = X, r.componentStack = le, r.debugTask = K, ao(m);
              return;
            }
            if (c.message === "Maximum call stack size exceeded") {
              c = Ui(), c = hs(n, r, c), n.pingedTasks.push(c), r.formatContext = E, r.context = m, r.keyPath = H, r.treeContext = X, r.componentStack = le, r.debugTask = K, ao(m);
              return;
            }
          }
        }
      else {
        var ve = Ee.children.length, Fe = Ee.chunks.length;
        try {
          return vt(n, r, c, v);
        } catch (Ae) {
          if (jo(), Ee.children.length = ve, Ee.chunks.length = Fe, c = Ae === da ? Sl() : Ae, typeof c == "object" && c !== null) {
            if (typeof c.then == "function") {
              v = Ui(), n = gs(
                n,
                r,
                v
              ).ping, c.then(n, n), r.formatContext = E, r.context = m, r.keyPath = H, r.treeContext = X, r.componentStack = le, r.debugTask = K, ao(m);
              return;
            }
            if (c.message === "Maximum call stack size exceeded") {
              c = Ui(), c = gs(n, r, c), n.pingedTasks.push(c), r.formatContext = E, r.context = m, r.keyPath = H, r.treeContext = X, r.componentStack = le, r.debugTask = K, ao(m);
              return;
            }
          }
        }
      }
      throw r.formatContext = E, r.context = m, r.keyPath = H, r.treeContext = X, ao(m), c;
    }
    function Fl(n) {
      var r = n.blockedBoundary;
      n = n.blockedSegment, n !== null && (n.status = 3, Zi(this, r, n));
    }
    function Pn(n, r, c, v, E, m, H, X) {
      for (var le = 0; le < c.length; le++) {
        var K = c[le];
        if (K.length === 4)
          Pn(
            n,
            r,
            K[2],
            K[3],
            E,
            m,
            H,
            X
          );
        else {
          var Ee = n;
          K = K[5];
          var ve = E, Fe = m, Ae = H, ue = X, nn = Fa(
            Ee,
            /* @__PURE__ */ new Set(),
            null,
            null
          );
          nn.parentFlushed = !0, nn.rootSegmentID = K, nn.status = xt, na(
            nn,
            Fe,
            ve,
            Ae,
            ue
          ), nn.parentFlushed && Ee.clientRenderedBoundaries.push(nn);
        }
      }
      if (c.length = 0, v !== null) {
        if (r === null)
          throw Error(
            "We should not have any resumable nodes in the shell. This is a bug in React."
          );
        if (r.status !== xt && (r.status = xt, na(
          r,
          m,
          E,
          H,
          X
        ), r.parentFlushed && n.clientRenderedBoundaries.push(r)), typeof v == "object")
          for (var bn in v) delete v[bn];
      }
    }
    function sr(n, r, c) {
      var v = n.blockedBoundary, E = n.blockedSegment;
      if (E !== null) {
        if (E.status === 6) return;
        E.status = 3;
      }
      if (E = Oa(n.componentStack), v === null) {
        if (r.status !== 13 && r.status !== Fi) {
          if (v = n.replay, v === null) {
            ir(r, c, E, null), ta(r, c, E, null);
            return;
          }
          v.pendingTasks--, v.pendingTasks === 0 && 0 < v.nodes.length && (n = ir(r, c, E, null), Pn(
            r,
            null,
            v.nodes,
            v.slots,
            c,
            n,
            E,
            !0
          )), r.pendingRootTasks--, r.pendingRootTasks === 0 && Ma(r);
        }
      } else
        v.pendingTasks--, v.status !== xt && (v.status = xt, n = ir(r, c, E, null), v.status = xt, na(v, n, c, E, !0), Ir(r, v), v.parentFlushed && r.clientRenderedBoundaries.push(v)), v.fallbackAbortableTasks.forEach(function(m) {
          return sr(m, r, c);
        }), v.fallbackAbortableTasks.clear();
      r.allPendingTasks--, r.allPendingTasks === 0 && oa(r);
    }
    function li(n, r) {
      try {
        var c = n.renderState, v = c.onHeaders;
        if (v) {
          var E = c.headers;
          if (E) {
            c.headers = null;
            var m = E.preconnects;
            if (E.fontPreloads && (m && (m += ", "), m += E.fontPreloads), E.highImagePreloads && (m && (m += ", "), m += E.highImagePreloads), !r) {
              var H = c.styles.values(), X = H.next();
              e: for (; 0 < E.remainingCapacity && !X.done; X = H.next())
                for (var le = X.value.sheets.values(), K = le.next(); 0 < E.remainingCapacity && !K.done; K = le.next()) {
                  var Ee = K.value, ve = Ee.props, Fe = ve.href, Ae = Ee.props, ue = Li(
                    Ae.href,
                    "style",
                    {
                      crossOrigin: Ae.crossOrigin,
                      integrity: Ae.integrity,
                      nonce: Ae.nonce,
                      type: Ae.type,
                      fetchPriority: Ae.fetchPriority,
                      referrerPolicy: Ae.referrerPolicy,
                      media: Ae.media
                    }
                  );
                  if (0 <= (E.remainingCapacity -= ue.length + 2))
                    c.resets.style[Fe] = oe, m && (m += ", "), m += ue, c.resets.style[Fe] = typeof ve.crossOrigin == "string" || typeof ve.integrity == "string" ? [ve.crossOrigin, ve.integrity] : oe;
                  else break e;
                }
            }
            v(m ? { Link: m } : {});
          }
        }
      } catch (nn) {
        ir(n, nn, {}, null);
      }
    }
    function Ma(n) {
      n.trackedPostpones === null && li(n, !0), n.trackedPostpones === null && Gr(n), n.onShellError = Tr, n = n.onShellReady, n();
    }
    function oa(n) {
      li(
        n,
        n.trackedPostpones === null ? !0 : n.completedRootSegment === null || n.completedRootSegment.status !== Ws
      ), Gr(n), n = n.onAllReady, n();
    }
    function aa(n, r) {
      if (r.chunks.length === 0 && r.children.length === 1 && r.children[0].boundary === null && r.children[0].id === -1) {
        var c = r.children[0];
        c.id = r.id, c.parentFlushed = !0, c.status === lt && aa(n, c);
      } else n.completedSegments.push(r);
    }
    function Zi(n, r, c) {
      if (r === null) {
        if (c !== null && c.parentFlushed) {
          if (n.completedRootSegment !== null)
            throw Error(
              "There can only be one root segment. This is a bug in React."
            );
          n.completedRootSegment = c;
        }
        n.pendingRootTasks--, n.pendingRootTasks === 0 && Ma(n);
      } else
        r.pendingTasks--, r.status !== xt && (r.pendingTasks === 0 ? (r.status === vo && (r.status = lt), c !== null && c.parentFlushed && c.status === lt && aa(r, c), r.parentFlushed && n.completedBoundaries.push(r), r.status === lt && (r.fallbackAbortableTasks.forEach(
          Fl,
          n
        ), r.fallbackAbortableTasks.clear(), n.pendingRootTasks === 0 && n.trackedPostpones === null && r.contentPreamble !== null && Gr(n))) : c !== null && c.parentFlushed && c.status === lt && (aa(r, c), r.completedSegments.length === 1 && r.parentFlushed && n.partialBoundaries.push(r)));
      n.allPendingTasks--, n.allPendingTasks === 0 && oa(n);
    }
    function cr(n) {
      if (n.status !== Fi && n.status !== 13) {
        var r = Wn, c = xr.H;
        xr.H = _s;
        var v = xr.A;
        xr.A = hu;
        var E = Vn;
        Vn = n;
        var m = xr.getCurrentStack;
        xr.getCurrentStack = lo;
        var H = ga;
        ga = n.resumableState;
        try {
          var X = n.pingedTasks, le;
          for (le = 0; le < X.length; le++) {
            var K = n, Ee = X[le], ve = Ee.blockedSegment;
            if (ve === null) {
              var Fe = void 0, Ae = K;
              if (K = Ee, K.replay.pendingTasks !== 0) {
                ao(K.context), Fe = mo, mo = K;
                try {
                  if (typeof K.replay.slots == "number" ? Pl(
                    Ae,
                    K,
                    K.replay.slots,
                    K.node,
                    K.childIndex
                  ) : ii(Ae, K), K.replay.pendingTasks === 1 && 0 < K.replay.nodes.length)
                    throw Error(
                      "Couldn't find all resumable slots by key/index during replaying. The tree doesn't match so React will fallback to client rendering."
                    );
                  K.replay.pendingTasks--, K.abortSet.delete(K), Zi(Ae, K.blockedBoundary, null);
                } catch (t) {
                  jo();
                  var ue = t === da ? Sl() : t;
                  if (typeof ue == "object" && ue !== null && typeof ue.then == "function") {
                    var nn = K.ping;
                    ue.then(nn, nn), K.thenableState = Ui();
                  } else {
                    K.replay.pendingTasks--, K.abortSet.delete(K);
                    var bn = Oa(K.componentStack), tn = void 0, cn = Ae, st = K.blockedBoundary, qe = Ae.status === 12 ? Ae.fatalError : ue, xn = bn, mn = K.replay.nodes, vr = K.replay.slots;
                    tn = ir(
                      cn,
                      qe,
                      xn,
                      K.debugTask
                    ), Pn(
                      cn,
                      st,
                      mn,
                      vr,
                      qe,
                      tn,
                      xn,
                      !1
                    ), Ae.pendingRootTasks--, Ae.pendingRootTasks === 0 && Ma(Ae), Ae.allPendingTasks--, Ae.allPendingTasks === 0 && oa(Ae);
                  }
                } finally {
                  mo = Fe;
                }
              }
            } else if (Ae = Fe = void 0, tn = Ee, cn = ve, cn.status === vo) {
              cn.status = 6, ao(tn.context), Ae = mo, mo = tn;
              var Dt = cn.children.length, Ht = cn.chunks.length;
              try {
                ii(K, tn), us(
                  cn.chunks,
                  K.renderState,
                  cn.lastPushedText,
                  cn.textEmbedded
                ), tn.abortSet.delete(tn), cn.status = lt, Zi(
                  K,
                  tn.blockedBoundary,
                  cn
                );
              } catch (t) {
                jo(), cn.children.length = Dt, cn.chunks.length = Ht;
                var dt = t === da ? Sl() : K.status === 12 ? K.fatalError : t;
                if (typeof dt == "object" && dt !== null && typeof dt.then == "function") {
                  cn.status = vo, tn.thenableState = Ui();
                  var Po = tn.ping;
                  dt.then(Po, Po);
                } else {
                  var _r = Oa(
                    tn.componentStack
                  );
                  tn.abortSet.delete(tn), cn.status = 4;
                  var Mn = tn.blockedBoundary, e = tn.debugTask;
                  Fe = ir(
                    K,
                    dt,
                    _r,
                    e
                  ), Mn === null ? ta(
                    K,
                    dt,
                    _r,
                    e
                  ) : (Mn.pendingTasks--, Mn.status !== xt && (Mn.status = xt, na(
                    Mn,
                    Fe,
                    dt,
                    _r,
                    !1
                  ), Ir(K, Mn), Mn.parentFlushed && K.clientRenderedBoundaries.push(
                    Mn
                  ), K.pendingRootTasks === 0 && K.trackedPostpones === null && Mn.contentPreamble !== null && Gr(K))), K.allPendingTasks--, K.allPendingTasks === 0 && oa(K);
                }
              } finally {
                mo = Ae;
              }
            }
          }
          X.splice(0, le), n.destination !== null && Qi(
            n,
            n.destination
          );
        } catch (t) {
          X = {}, ir(n, t, X, null), ta(n, t, X, null);
        } finally {
          ga = H, xr.H = c, xr.A = v, xr.getCurrentStack = m, c === _s && ao(r), Vn = E;
        }
      }
    }
    function ia(n, r, c) {
      r.preambleChildren.length && c.push(r.preambleChildren);
      for (var v = !1, E = 0; E < r.children.length; E++)
        v = Ia(
          n,
          r.children[E],
          c
        ) || v;
      return v;
    }
    function Ia(n, r, c) {
      var v = r.boundary;
      if (v === null)
        return ia(
          n,
          r,
          c
        );
      var E = v.contentPreamble, m = v.fallbackPreamble;
      if (E === null || m === null) return !1;
      switch (v.status) {
        case lt:
          if (to(n.renderState, E), r = v.completedSegments[0], !r)
            throw Error(
              "A previously unvisited boundary must have exactly one root segment. This is a bug in React."
            );
          return ia(
            n,
            r,
            c
          );
        case Ws:
          if (n.trackedPostpones !== null) return !0;
        case xt:
          if (r.status === lt)
            return to(n.renderState, m), ia(
              n,
              r,
              c
            );
        default:
          return !0;
      }
    }
    function Gr(n) {
      if (n.completedRootSegment && n.completedPreambleSegments === null) {
        var r = [], c = Ia(
          n,
          n.completedRootSegment,
          r
        ), v = n.renderState.preamble;
        (c === !1 || v.headChunks && v.bodyChunks) && (n.completedPreambleSegments = r);
      }
    }
    function Vi(n, r, c, v) {
      switch (c.parentFlushed = !0, c.status) {
        case vo:
          c.id = n.nextSegmentId++;
        case Ws:
          return v = c.id, c.lastPushedText = !1, c.textEmbedded = !1, n = n.renderState, r.push($i), r.push(n.placeholderPrefix), n = v.toString(16), r.push(n), r.push(Lc);
        case lt:
          c.status = gl;
          var E = !0, m = c.chunks, H = 0;
          c = c.children;
          for (var X = 0; X < c.length; X++) {
            for (E = c[X]; H < E.index; H++)
              r.push(m[H]);
            E = Da(n, r, E, v);
          }
          for (; H < m.length - 1; H++)
            r.push(m[H]);
          return H < m.length && (E = r.push(m[H])), E;
        default:
          throw Error(
            "Aborted, errored or already flushed boundaries should not be flushed again. This is a bug in React."
          );
      }
    }
    function Da(n, r, c, v) {
      var E = c.boundary;
      if (E === null)
        return Vi(n, r, c, v);
      if (E.parentFlushed = !0, E.status === xt) {
        if (!n.renderState.generateStaticMarkup) {
          var m = E.errorDigest, H = E.errorMessage, X = E.errorStack, le = E.errorComponentStack;
          r.push(Ss), r.push(pi), m && (r.push(So), m = $(m), r.push(m), r.push(
            at
          )), H && (r.push(Nl), H = $(H), r.push(H), r.push(
            at
          )), X && (r.push(Vo), X = $(X), r.push(X), r.push(
            at
          )), le && (r.push(Ll), le = $(le), r.push(le), r.push(
            at
          )), r.push(el);
        }
        return Vi(n, r, c, v), n.renderState.generateStaticMarkup ? r = !0 : ((n = E.fallbackPreamble) && Zt(r, n), r = r.push(Zo)), r;
      }
      if (E.status !== lt)
        return E.status === vo && (E.rootSegmentID = n.nextSegmentId++), 0 < E.completedSegments.length && n.partialBoundaries.push(E), qn(
          r,
          n.renderState,
          E.rootSegmentID
        ), v && (E = E.fallbackState, E.styles.forEach(Bo, v), E.stylesheets.forEach(
          $s,
          v
        )), Vi(n, r, c, v), r.push(Zo);
      if (E.byteSize > n.progressiveChunkSize)
        return E.rootSegmentID = n.nextSegmentId++, n.completedBoundaries.push(E), qn(
          r,
          n.renderState,
          E.rootSegmentID
        ), Vi(n, r, c, v), r.push(Zo);
      if (v && (c = E.contentState, c.styles.forEach(Bo, v), c.stylesheets.forEach($s, v)), n.renderState.generateStaticMarkup || r.push(Wt), c = E.completedSegments, c.length !== 1)
        throw Error(
          "A previously unvisited boundary must have exactly one root segment. This is a bug in React."
        );
      return Da(n, r, c[0], v), n.renderState.generateStaticMarkup ? r = !0 : ((n = E.contentPreamble) && Zt(r, n), r = r.push(Zo)), r;
    }
    function Lo(n, r, c, v) {
      return _o(
        r,
        n.renderState,
        c.parentFormatContext,
        c.id
      ), Da(n, r, c, v), Bi(r, c.parentFormatContext);
    }
    function la(n, r, c) {
      for (var v = c.completedSegments, E = 0; E < v.length; E++)
        bs(
          n,
          r,
          c,
          v[E]
        );
      v.length = 0, qa(
        r,
        c.contentState,
        n.renderState
      ), v = n.resumableState, n = n.renderState, E = c.rootSegmentID, c = c.contentState;
      var m = n.stylesToHoist;
      return n.stylesToHoist = !1, r.push(n.startInlineScript), m ? (v.instructions & p) === s ? (v.instructions = v.instructions | P | p, r.push(As)) : (v.instructions & P) === s ? (v.instructions |= P, r.push(dc)) : r.push(hc) : (v.instructions & p) === s ? (v.instructions |= p, r.push(Os)) : r.push(Ei), v = E.toString(16), r.push(n.boundaryPrefix), r.push(v), r.push(Ms), r.push(n.segmentPrefix), r.push(v), m ? (r.push(Qo), js(r, c)) : r.push(Wa), c = r.push(Ul), tt(r, n) && c;
    }
    function bs(n, r, c, v) {
      if (v.status === gl) return !0;
      var E = c.contentState, m = v.id;
      if (m === -1) {
        if ((v.id = c.rootSegmentID) === -1)
          throw Error(
            "A root segment ID must have been assigned by now. This is a bug in React."
          );
        return Lo(
          n,
          r,
          v,
          E
        );
      }
      return m === c.rootSegmentID ? Lo(
        n,
        r,
        v,
        E
      ) : (Lo(n, r, v, E), c = n.resumableState, n = n.renderState, r.push(n.startInlineScript), (c.instructions & g) === s ? (c.instructions |= g, r.push(fa)) : r.push(Wc), r.push(n.segmentPrefix), m = m.toString(16), r.push(m), r.push(za), r.push(n.placeholderPrefix), r.push(m), r = r.push(Wl), r);
    }
    function Qi(n, r) {
      try {
        if (!(0 < n.pendingRootTasks)) {
          var c, v = n.completedRootSegment;
          if (v !== null) {
            if (v.status === Ws) return;
            var E = n.completedPreambleSegments;
            if (E === null) return;
            var m = n.renderState, H = m.preamble, X = H.htmlChunks, le = H.headChunks, K;
            if (X) {
              for (K = 0; K < X.length; K++)
                r.push(X[K]);
              if (le)
                for (K = 0; K < le.length; K++)
                  r.push(le[K]);
              else {
                var Ee = He("head");
                r.push(Ee), r.push(Ln);
              }
            } else if (le)
              for (K = 0; K < le.length; K++)
                r.push(le[K]);
            var ve = m.charsetChunks;
            for (K = 0; K < ve.length; K++)
              r.push(ve[K]);
            ve.length = 0, m.preconnects.forEach(ro, r), m.preconnects.clear();
            var Fe = m.viewportChunks;
            for (K = 0; K < Fe.length; K++)
              r.push(Fe[K]);
            Fe.length = 0, m.fontPreloads.forEach(ro, r), m.fontPreloads.clear(), m.highImagePreloads.forEach(ro, r), m.highImagePreloads.clear(), m.styles.forEach(Ks, r);
            var Ae = m.importMapChunks;
            for (K = 0; K < Ae.length; K++)
              r.push(Ae[K]);
            Ae.length = 0, m.bootstrapScripts.forEach(ro, r), m.scripts.forEach(ro, r), m.scripts.clear(), m.bulkPreloads.forEach(ro, r), m.bulkPreloads.clear();
            var ue = m.hoistableChunks;
            for (K = 0; K < ue.length; K++)
              r.push(ue[K]);
            for (m = ue.length = 0; m < E.length; m++) {
              var nn = E[m];
              for (H = 0; H < nn.length; H++)
                Da(n, r, nn[H], null);
            }
            var bn = n.renderState.preamble, tn = bn.headChunks;
            if (bn.htmlChunks || tn) {
              var cn = yt("head");
              r.push(cn);
            }
            var st = bn.bodyChunks;
            if (st)
              for (E = 0; E < st.length; E++)
                r.push(st[E]);
            Da(n, r, v, null), n.completedRootSegment = null, tt(r, n.renderState);
          }
          var qe = n.renderState;
          v = 0;
          var xn = qe.viewportChunks;
          for (v = 0; v < xn.length; v++)
            r.push(xn[v]);
          xn.length = 0, qe.preconnects.forEach(ro, r), qe.preconnects.clear(), qe.fontPreloads.forEach(ro, r), qe.fontPreloads.clear(), qe.highImagePreloads.forEach(
            ro,
            r
          ), qe.highImagePreloads.clear(), qe.styles.forEach(Ni, r), qe.scripts.forEach(ro, r), qe.scripts.clear(), qe.bulkPreloads.forEach(ro, r), qe.bulkPreloads.clear();
          var mn = qe.hoistableChunks;
          for (v = 0; v < mn.length; v++)
            r.push(mn[v]);
          mn.length = 0;
          var vr = n.clientRenderedBoundaries;
          for (c = 0; c < vr.length; c++) {
            var Dt = vr[c];
            qe = r;
            var Ht = n.resumableState, dt = n.renderState, Po = Dt.rootSegmentID, _r = Dt.errorDigest, Mn = Dt.errorMessage, e = Dt.errorStack, t = Dt.errorComponentStack;
            qe.push(dt.startInlineScript), (Ht.instructions & R) === s ? (Ht.instructions |= R, qe.push(ol)) : qe.push(Is), qe.push(dt.boundaryPrefix);
            var u = Po.toString(16);
            if (qe.push(u), qe.push(Hl), _r || Mn || e || t) {
              qe.push(xi);
              var y = Vt(
                _r || ""
              );
              qe.push(y);
            }
            if (Mn || e || t) {
              qe.push(xi);
              var C = Vt(
                Mn || ""
              );
              qe.push(C);
            }
            if (e || t) {
              qe.push(xi);
              var k = Vt(
                e || ""
              );
              qe.push(k);
            }
            if (t) {
              qe.push(xi);
              var z = Vt(t);
              qe.push(z);
            }
            var W = qe.push(
              Ri
            );
            if (!W) {
              n.destination = null, c++, vr.splice(0, c);
              return;
            }
          }
          vr.splice(0, c);
          var ae = n.completedBoundaries;
          for (c = 0; c < ae.length; c++)
            if (!la(
              n,
              r,
              ae[c]
            )) {
              n.destination = null, c++, ae.splice(0, c);
              return;
            }
          ae.splice(0, c);
          var G = n.partialBoundaries;
          for (c = 0; c < G.length; c++) {
            e: {
              vr = n, Dt = r;
              var be = G[c], he = be.completedSegments;
              for (W = 0; W < he.length; W++)
                if (!bs(
                  vr,
                  Dt,
                  be,
                  he[W]
                )) {
                  W++, he.splice(0, W);
                  var Se = !1;
                  break e;
                }
              he.splice(0, W), Se = qa(
                Dt,
                be.contentState,
                vr.renderState
              );
            }
            if (!Se) {
              n.destination = null, c++, G.splice(0, c);
              return;
            }
          }
          G.splice(0, c);
          var Te = n.completedBoundaries;
          for (c = 0; c < Te.length; c++)
            if (!la(n, r, Te[c])) {
              n.destination = null, c++, Te.splice(0, c);
              return;
            }
          Te.splice(0, c);
        }
      } finally {
        n.allPendingTasks === 0 && n.pingedTasks.length === 0 && n.clientRenderedBoundaries.length === 0 && n.completedBoundaries.length === 0 && (n.flushScheduled = !1, c = n.resumableState, c.hasBody && (G = yt("body"), r.push(G)), c.hasHtml && (c = yt("html"), r.push(c)), n.abortableTasks.size !== 0 && console.error(
          "There was still abortable task at the root when we closed. This is a bug in React."
        ), n.status = Fi, r.push(null), n.destination = null);
      }
    }
    function rc(n) {
      n.flushScheduled = n.destination !== null, cr(n), n.status === 10 && (n.status = 11), n.trackedPostpones === null && li(n, n.pendingRootTasks === 0);
    }
    function si(n) {
      if (n.flushScheduled === !1 && n.pingedTasks.length === 0 && n.destination !== null) {
        n.flushScheduled = !0;
        var r = n.destination;
        r ? Qi(n, r) : n.flushScheduled = !1;
      }
    }
    function ys(n, r) {
      if (n.status === 13)
        n.status = Fi, r.destroy(n.fatalError);
      else if (n.status !== Fi && n.destination === null) {
        n.destination = r;
        try {
          Qi(n, r);
        } catch (c) {
          r = {}, ir(n, c, r, null), ta(n, c, r, null);
        }
      }
    }
    function oc(n, r) {
      (n.status === 11 || n.status === 10) && (n.status = 12);
      try {
        var c = n.abortableTasks;
        if (0 < c.size) {
          var v = r === void 0 ? Error("The render was aborted by the server without a reason.") : typeof r == "object" && r !== null && typeof r.then == "function" ? Error("The render was aborted by the server with a promise.") : r;
          n.fatalError = v, c.forEach(function(E) {
            return sr(E, n, v);
          }), c.clear();
        }
        n.destination !== null && Qi(n, n.destination);
      } catch (E) {
        r = {}, ir(n, E, r, null), ta(n, E, r, null);
      }
    }
    function Ol() {
    }
    function vs(n, r, c, v) {
      var E = !1, m = null, H = "", X = !1;
      if (r = un(
        r ? r.identifierPrefix : void 0
      ), n = oi(
        n,
        r,
        Pc(r, c),
        I(pe, null, 0),
        1 / 0,
        Ol,
        void 0,
        function() {
          X = !0;
        },
        void 0,
        void 0,
        void 0
      ), rc(n), oc(n, v), ys(n, {
        push: function(le) {
          return le !== null && (H += le), !0;
        },
        destroy: function(le) {
          E = !0, m = le;
        }
      }), E && m !== v) throw m;
      if (!X)
        throw Error(
          "A component suspended while responding to synchronous input. This will cause the UI to be replaced with a loading indicator. To fix, updates that suspend should be wrapped with startTransition."
        );
      return H;
    }
    var Ic = nu, Al = Uf, ci = Symbol.for("react.transitional.element"), Ji = Symbol.for("react.portal"), ui = Symbol.for("react.fragment"), ps = Symbol.for("react.strict_mode"), fi = Symbol.for("react.profiler"), Ki = Symbol.for("react.provider"), qi = Symbol.for("react.consumer"), di = Symbol.for("react.context"), hi = Symbol.for("react.forward_ref"), zo = Symbol.for("react.suspense"), sa = Symbol.for("react.suspense_list"), ws = Symbol.for("react.memo"), ji = Symbol.for("react.lazy"), ur = Symbol.for("react.scope"), gi = Symbol.for("react.activity"), Wo = Symbol.for("react.legacy_hidden"), bi = Symbol.for("react.memo_cache_sentinel"), Ml = Symbol.for("react.view_transition"), Uo = Symbol.iterator, Jn = Array.isArray, Ft = /* @__PURE__ */ new WeakMap(), Xr = /* @__PURE__ */ new WeakMap(), yi = Symbol.for("react.client.reference"), ft = Object.assign, An = Object.prototype.hasOwnProperty, ac = RegExp(
      "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
    ), Ts = {}, Nt = {}, ic = new Set(
      "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
        " "
      )
    ), lc = /* @__PURE__ */ new Map([
      ["acceptCharset", "accept-charset"],
      ["htmlFor", "for"],
      ["httpEquiv", "http-equiv"],
      ["crossOrigin", "crossorigin"],
      ["accentHeight", "accent-height"],
      ["alignmentBaseline", "alignment-baseline"],
      ["arabicForm", "arabic-form"],
      ["baselineShift", "baseline-shift"],
      ["capHeight", "cap-height"],
      ["clipPath", "clip-path"],
      ["clipRule", "clip-rule"],
      ["colorInterpolation", "color-interpolation"],
      ["colorInterpolationFilters", "color-interpolation-filters"],
      ["colorProfile", "color-profile"],
      ["colorRendering", "color-rendering"],
      ["dominantBaseline", "dominant-baseline"],
      ["enableBackground", "enable-background"],
      ["fillOpacity", "fill-opacity"],
      ["fillRule", "fill-rule"],
      ["floodColor", "flood-color"],
      ["floodOpacity", "flood-opacity"],
      ["fontFamily", "font-family"],
      ["fontSize", "font-size"],
      ["fontSizeAdjust", "font-size-adjust"],
      ["fontStretch", "font-stretch"],
      ["fontStyle", "font-style"],
      ["fontVariant", "font-variant"],
      ["fontWeight", "font-weight"],
      ["glyphName", "glyph-name"],
      ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
      ["glyphOrientationVertical", "glyph-orientation-vertical"],
      ["horizAdvX", "horiz-adv-x"],
      ["horizOriginX", "horiz-origin-x"],
      ["imageRendering", "image-rendering"],
      ["letterSpacing", "letter-spacing"],
      ["lightingColor", "lighting-color"],
      ["markerEnd", "marker-end"],
      ["markerMid", "marker-mid"],
      ["markerStart", "marker-start"],
      ["overlinePosition", "overline-position"],
      ["overlineThickness", "overline-thickness"],
      ["paintOrder", "paint-order"],
      ["panose-1", "panose-1"],
      ["pointerEvents", "pointer-events"],
      ["renderingIntent", "rendering-intent"],
      ["shapeRendering", "shape-rendering"],
      ["stopColor", "stop-color"],
      ["stopOpacity", "stop-opacity"],
      ["strikethroughPosition", "strikethrough-position"],
      ["strikethroughThickness", "strikethrough-thickness"],
      ["strokeDasharray", "stroke-dasharray"],
      ["strokeDashoffset", "stroke-dashoffset"],
      ["strokeLinecap", "stroke-linecap"],
      ["strokeLinejoin", "stroke-linejoin"],
      ["strokeMiterlimit", "stroke-miterlimit"],
      ["strokeOpacity", "stroke-opacity"],
      ["strokeWidth", "stroke-width"],
      ["textAnchor", "text-anchor"],
      ["textDecoration", "text-decoration"],
      ["textRendering", "text-rendering"],
      ["transformOrigin", "transform-origin"],
      ["underlinePosition", "underline-position"],
      ["underlineThickness", "underline-thickness"],
      ["unicodeBidi", "unicode-bidi"],
      ["unicodeRange", "unicode-range"],
      ["unitsPerEm", "units-per-em"],
      ["vAlphabetic", "v-alphabetic"],
      ["vHanging", "v-hanging"],
      ["vIdeographic", "v-ideographic"],
      ["vMathematical", "v-mathematical"],
      ["vectorEffect", "vector-effect"],
      ["vertAdvY", "vert-adv-y"],
      ["vertOriginX", "vert-origin-x"],
      ["vertOriginY", "vert-origin-y"],
      ["wordSpacing", "word-spacing"],
      ["writingMode", "writing-mode"],
      ["xmlnsXlink", "xmlns:xlink"],
      ["xHeight", "x-height"]
    ]), Il = {
      button: !0,
      checkbox: !0,
      image: !0,
      hidden: !0,
      radio: !0,
      reset: !0,
      submit: !0
    }, Cs = {
      "aria-current": 0,
      "aria-description": 0,
      "aria-details": 0,
      "aria-disabled": 0,
      "aria-hidden": 0,
      "aria-invalid": 0,
      "aria-keyshortcuts": 0,
      "aria-label": 0,
      "aria-roledescription": 0,
      "aria-autocomplete": 0,
      "aria-checked": 0,
      "aria-expanded": 0,
      "aria-haspopup": 0,
      "aria-level": 0,
      "aria-modal": 0,
      "aria-multiline": 0,
      "aria-multiselectable": 0,
      "aria-orientation": 0,
      "aria-placeholder": 0,
      "aria-pressed": 0,
      "aria-readonly": 0,
      "aria-required": 0,
      "aria-selected": 0,
      "aria-sort": 0,
      "aria-valuemax": 0,
      "aria-valuemin": 0,
      "aria-valuenow": 0,
      "aria-valuetext": 0,
      "aria-atomic": 0,
      "aria-busy": 0,
      "aria-live": 0,
      "aria-relevant": 0,
      "aria-dropeffect": 0,
      "aria-grabbed": 0,
      "aria-activedescendant": 0,
      "aria-colcount": 0,
      "aria-colindex": 0,
      "aria-colspan": 0,
      "aria-controls": 0,
      "aria-describedby": 0,
      "aria-errormessage": 0,
      "aria-flowto": 0,
      "aria-labelledby": 0,
      "aria-owns": 0,
      "aria-posinset": 0,
      "aria-rowcount": 0,
      "aria-rowindex": 0,
      "aria-rowspan": 0,
      "aria-setsize": 0
    }, ca = {}, co = RegExp(
      "^(aria)-[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
    ), su = RegExp(
      "^(aria)[A-Z][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
    ), Kt = !1, Cr = {
      accept: "accept",
      acceptcharset: "acceptCharset",
      "accept-charset": "acceptCharset",
      accesskey: "accessKey",
      action: "action",
      allowfullscreen: "allowFullScreen",
      alt: "alt",
      as: "as",
      async: "async",
      autocapitalize: "autoCapitalize",
      autocomplete: "autoComplete",
      autocorrect: "autoCorrect",
      autofocus: "autoFocus",
      autoplay: "autoPlay",
      autosave: "autoSave",
      capture: "capture",
      cellpadding: "cellPadding",
      cellspacing: "cellSpacing",
      challenge: "challenge",
      charset: "charSet",
      checked: "checked",
      children: "children",
      cite: "cite",
      class: "className",
      classid: "classID",
      classname: "className",
      cols: "cols",
      colspan: "colSpan",
      content: "content",
      contenteditable: "contentEditable",
      contextmenu: "contextMenu",
      controls: "controls",
      controlslist: "controlsList",
      coords: "coords",
      crossorigin: "crossOrigin",
      dangerouslysetinnerhtml: "dangerouslySetInnerHTML",
      data: "data",
      datetime: "dateTime",
      default: "default",
      defaultchecked: "defaultChecked",
      defaultvalue: "defaultValue",
      defer: "defer",
      dir: "dir",
      disabled: "disabled",
      disablepictureinpicture: "disablePictureInPicture",
      disableremoteplayback: "disableRemotePlayback",
      download: "download",
      draggable: "draggable",
      enctype: "encType",
      enterkeyhint: "enterKeyHint",
      fetchpriority: "fetchPriority",
      for: "htmlFor",
      form: "form",
      formmethod: "formMethod",
      formaction: "formAction",
      formenctype: "formEncType",
      formnovalidate: "formNoValidate",
      formtarget: "formTarget",
      frameborder: "frameBorder",
      headers: "headers",
      height: "height",
      hidden: "hidden",
      high: "high",
      href: "href",
      hreflang: "hrefLang",
      htmlfor: "htmlFor",
      httpequiv: "httpEquiv",
      "http-equiv": "httpEquiv",
      icon: "icon",
      id: "id",
      imagesizes: "imageSizes",
      imagesrcset: "imageSrcSet",
      inert: "inert",
      innerhtml: "innerHTML",
      inputmode: "inputMode",
      integrity: "integrity",
      is: "is",
      itemid: "itemID",
      itemprop: "itemProp",
      itemref: "itemRef",
      itemscope: "itemScope",
      itemtype: "itemType",
      keyparams: "keyParams",
      keytype: "keyType",
      kind: "kind",
      label: "label",
      lang: "lang",
      list: "list",
      loop: "loop",
      low: "low",
      manifest: "manifest",
      marginwidth: "marginWidth",
      marginheight: "marginHeight",
      max: "max",
      maxlength: "maxLength",
      media: "media",
      mediagroup: "mediaGroup",
      method: "method",
      min: "min",
      minlength: "minLength",
      multiple: "multiple",
      muted: "muted",
      name: "name",
      nomodule: "noModule",
      nonce: "nonce",
      novalidate: "noValidate",
      open: "open",
      optimum: "optimum",
      pattern: "pattern",
      placeholder: "placeholder",
      playsinline: "playsInline",
      poster: "poster",
      preload: "preload",
      profile: "profile",
      radiogroup: "radioGroup",
      readonly: "readOnly",
      referrerpolicy: "referrerPolicy",
      rel: "rel",
      required: "required",
      reversed: "reversed",
      role: "role",
      rows: "rows",
      rowspan: "rowSpan",
      sandbox: "sandbox",
      scope: "scope",
      scoped: "scoped",
      scrolling: "scrolling",
      seamless: "seamless",
      selected: "selected",
      shape: "shape",
      size: "size",
      sizes: "sizes",
      span: "span",
      spellcheck: "spellCheck",
      src: "src",
      srcdoc: "srcDoc",
      srclang: "srcLang",
      srcset: "srcSet",
      start: "start",
      step: "step",
      style: "style",
      summary: "summary",
      tabindex: "tabIndex",
      target: "target",
      title: "title",
      type: "type",
      usemap: "useMap",
      value: "value",
      width: "width",
      wmode: "wmode",
      wrap: "wrap",
      about: "about",
      accentheight: "accentHeight",
      "accent-height": "accentHeight",
      accumulate: "accumulate",
      additive: "additive",
      alignmentbaseline: "alignmentBaseline",
      "alignment-baseline": "alignmentBaseline",
      allowreorder: "allowReorder",
      alphabetic: "alphabetic",
      amplitude: "amplitude",
      arabicform: "arabicForm",
      "arabic-form": "arabicForm",
      ascent: "ascent",
      attributename: "attributeName",
      attributetype: "attributeType",
      autoreverse: "autoReverse",
      azimuth: "azimuth",
      basefrequency: "baseFrequency",
      baselineshift: "baselineShift",
      "baseline-shift": "baselineShift",
      baseprofile: "baseProfile",
      bbox: "bbox",
      begin: "begin",
      bias: "bias",
      by: "by",
      calcmode: "calcMode",
      capheight: "capHeight",
      "cap-height": "capHeight",
      clip: "clip",
      clippath: "clipPath",
      "clip-path": "clipPath",
      clippathunits: "clipPathUnits",
      cliprule: "clipRule",
      "clip-rule": "clipRule",
      color: "color",
      colorinterpolation: "colorInterpolation",
      "color-interpolation": "colorInterpolation",
      colorinterpolationfilters: "colorInterpolationFilters",
      "color-interpolation-filters": "colorInterpolationFilters",
      colorprofile: "colorProfile",
      "color-profile": "colorProfile",
      colorrendering: "colorRendering",
      "color-rendering": "colorRendering",
      contentscripttype: "contentScriptType",
      contentstyletype: "contentStyleType",
      cursor: "cursor",
      cx: "cx",
      cy: "cy",
      d: "d",
      datatype: "datatype",
      decelerate: "decelerate",
      descent: "descent",
      diffuseconstant: "diffuseConstant",
      direction: "direction",
      display: "display",
      divisor: "divisor",
      dominantbaseline: "dominantBaseline",
      "dominant-baseline": "dominantBaseline",
      dur: "dur",
      dx: "dx",
      dy: "dy",
      edgemode: "edgeMode",
      elevation: "elevation",
      enablebackground: "enableBackground",
      "enable-background": "enableBackground",
      end: "end",
      exponent: "exponent",
      externalresourcesrequired: "externalResourcesRequired",
      fill: "fill",
      fillopacity: "fillOpacity",
      "fill-opacity": "fillOpacity",
      fillrule: "fillRule",
      "fill-rule": "fillRule",
      filter: "filter",
      filterres: "filterRes",
      filterunits: "filterUnits",
      floodopacity: "floodOpacity",
      "flood-opacity": "floodOpacity",
      floodcolor: "floodColor",
      "flood-color": "floodColor",
      focusable: "focusable",
      fontfamily: "fontFamily",
      "font-family": "fontFamily",
      fontsize: "fontSize",
      "font-size": "fontSize",
      fontsizeadjust: "fontSizeAdjust",
      "font-size-adjust": "fontSizeAdjust",
      fontstretch: "fontStretch",
      "font-stretch": "fontStretch",
      fontstyle: "fontStyle",
      "font-style": "fontStyle",
      fontvariant: "fontVariant",
      "font-variant": "fontVariant",
      fontweight: "fontWeight",
      "font-weight": "fontWeight",
      format: "format",
      from: "from",
      fx: "fx",
      fy: "fy",
      g1: "g1",
      g2: "g2",
      glyphname: "glyphName",
      "glyph-name": "glyphName",
      glyphorientationhorizontal: "glyphOrientationHorizontal",
      "glyph-orientation-horizontal": "glyphOrientationHorizontal",
      glyphorientationvertical: "glyphOrientationVertical",
      "glyph-orientation-vertical": "glyphOrientationVertical",
      glyphref: "glyphRef",
      gradienttransform: "gradientTransform",
      gradientunits: "gradientUnits",
      hanging: "hanging",
      horizadvx: "horizAdvX",
      "horiz-adv-x": "horizAdvX",
      horizoriginx: "horizOriginX",
      "horiz-origin-x": "horizOriginX",
      ideographic: "ideographic",
      imagerendering: "imageRendering",
      "image-rendering": "imageRendering",
      in2: "in2",
      in: "in",
      inlist: "inlist",
      intercept: "intercept",
      k1: "k1",
      k2: "k2",
      k3: "k3",
      k4: "k4",
      k: "k",
      kernelmatrix: "kernelMatrix",
      kernelunitlength: "kernelUnitLength",
      kerning: "kerning",
      keypoints: "keyPoints",
      keysplines: "keySplines",
      keytimes: "keyTimes",
      lengthadjust: "lengthAdjust",
      letterspacing: "letterSpacing",
      "letter-spacing": "letterSpacing",
      lightingcolor: "lightingColor",
      "lighting-color": "lightingColor",
      limitingconeangle: "limitingConeAngle",
      local: "local",
      markerend: "markerEnd",
      "marker-end": "markerEnd",
      markerheight: "markerHeight",
      markermid: "markerMid",
      "marker-mid": "markerMid",
      markerstart: "markerStart",
      "marker-start": "markerStart",
      markerunits: "markerUnits",
      markerwidth: "markerWidth",
      mask: "mask",
      maskcontentunits: "maskContentUnits",
      maskunits: "maskUnits",
      mathematical: "mathematical",
      mode: "mode",
      numoctaves: "numOctaves",
      offset: "offset",
      opacity: "opacity",
      operator: "operator",
      order: "order",
      orient: "orient",
      orientation: "orientation",
      origin: "origin",
      overflow: "overflow",
      overlineposition: "overlinePosition",
      "overline-position": "overlinePosition",
      overlinethickness: "overlineThickness",
      "overline-thickness": "overlineThickness",
      paintorder: "paintOrder",
      "paint-order": "paintOrder",
      panose1: "panose1",
      "panose-1": "panose1",
      pathlength: "pathLength",
      patterncontentunits: "patternContentUnits",
      patterntransform: "patternTransform",
      patternunits: "patternUnits",
      pointerevents: "pointerEvents",
      "pointer-events": "pointerEvents",
      points: "points",
      pointsatx: "pointsAtX",
      pointsaty: "pointsAtY",
      pointsatz: "pointsAtZ",
      popover: "popover",
      popovertarget: "popoverTarget",
      popovertargetaction: "popoverTargetAction",
      prefix: "prefix",
      preservealpha: "preserveAlpha",
      preserveaspectratio: "preserveAspectRatio",
      primitiveunits: "primitiveUnits",
      property: "property",
      r: "r",
      radius: "radius",
      refx: "refX",
      refy: "refY",
      renderingintent: "renderingIntent",
      "rendering-intent": "renderingIntent",
      repeatcount: "repeatCount",
      repeatdur: "repeatDur",
      requiredextensions: "requiredExtensions",
      requiredfeatures: "requiredFeatures",
      resource: "resource",
      restart: "restart",
      result: "result",
      results: "results",
      rotate: "rotate",
      rx: "rx",
      ry: "ry",
      scale: "scale",
      security: "security",
      seed: "seed",
      shaperendering: "shapeRendering",
      "shape-rendering": "shapeRendering",
      slope: "slope",
      spacing: "spacing",
      specularconstant: "specularConstant",
      specularexponent: "specularExponent",
      speed: "speed",
      spreadmethod: "spreadMethod",
      startoffset: "startOffset",
      stddeviation: "stdDeviation",
      stemh: "stemh",
      stemv: "stemv",
      stitchtiles: "stitchTiles",
      stopcolor: "stopColor",
      "stop-color": "stopColor",
      stopopacity: "stopOpacity",
      "stop-opacity": "stopOpacity",
      strikethroughposition: "strikethroughPosition",
      "strikethrough-position": "strikethroughPosition",
      strikethroughthickness: "strikethroughThickness",
      "strikethrough-thickness": "strikethroughThickness",
      string: "string",
      stroke: "stroke",
      strokedasharray: "strokeDasharray",
      "stroke-dasharray": "strokeDasharray",
      strokedashoffset: "strokeDashoffset",
      "stroke-dashoffset": "strokeDashoffset",
      strokelinecap: "strokeLinecap",
      "stroke-linecap": "strokeLinecap",
      strokelinejoin: "strokeLinejoin",
      "stroke-linejoin": "strokeLinejoin",
      strokemiterlimit: "strokeMiterlimit",
      "stroke-miterlimit": "strokeMiterlimit",
      strokewidth: "strokeWidth",
      "stroke-width": "strokeWidth",
      strokeopacity: "strokeOpacity",
      "stroke-opacity": "strokeOpacity",
      suppresscontenteditablewarning: "suppressContentEditableWarning",
      suppresshydrationwarning: "suppressHydrationWarning",
      surfacescale: "surfaceScale",
      systemlanguage: "systemLanguage",
      tablevalues: "tableValues",
      targetx: "targetX",
      targety: "targetY",
      textanchor: "textAnchor",
      "text-anchor": "textAnchor",
      textdecoration: "textDecoration",
      "text-decoration": "textDecoration",
      textlength: "textLength",
      textrendering: "textRendering",
      "text-rendering": "textRendering",
      to: "to",
      transform: "transform",
      transformorigin: "transformOrigin",
      "transform-origin": "transformOrigin",
      typeof: "typeof",
      u1: "u1",
      u2: "u2",
      underlineposition: "underlinePosition",
      "underline-position": "underlinePosition",
      underlinethickness: "underlineThickness",
      "underline-thickness": "underlineThickness",
      unicode: "unicode",
      unicodebidi: "unicodeBidi",
      "unicode-bidi": "unicodeBidi",
      unicoderange: "unicodeRange",
      "unicode-range": "unicodeRange",
      unitsperem: "unitsPerEm",
      "units-per-em": "unitsPerEm",
      unselectable: "unselectable",
      valphabetic: "vAlphabetic",
      "v-alphabetic": "vAlphabetic",
      values: "values",
      vectoreffect: "vectorEffect",
      "vector-effect": "vectorEffect",
      version: "version",
      vertadvy: "vertAdvY",
      "vert-adv-y": "vertAdvY",
      vertoriginx: "vertOriginX",
      "vert-origin-x": "vertOriginX",
      vertoriginy: "vertOriginY",
      "vert-origin-y": "vertOriginY",
      vhanging: "vHanging",
      "v-hanging": "vHanging",
      videographic: "vIdeographic",
      "v-ideographic": "vIdeographic",
      viewbox: "viewBox",
      viewtarget: "viewTarget",
      visibility: "visibility",
      vmathematical: "vMathematical",
      "v-mathematical": "vMathematical",
      vocab: "vocab",
      widths: "widths",
      wordspacing: "wordSpacing",
      "word-spacing": "wordSpacing",
      writingmode: "writingMode",
      "writing-mode": "writingMode",
      x1: "x1",
      x2: "x2",
      x: "x",
      xchannelselector: "xChannelSelector",
      xheight: "xHeight",
      "x-height": "xHeight",
      xlinkactuate: "xlinkActuate",
      "xlink:actuate": "xlinkActuate",
      xlinkarcrole: "xlinkArcrole",
      "xlink:arcrole": "xlinkArcrole",
      xlinkhref: "xlinkHref",
      "xlink:href": "xlinkHref",
      xlinkrole: "xlinkRole",
      "xlink:role": "xlinkRole",
      xlinkshow: "xlinkShow",
      "xlink:show": "xlinkShow",
      xlinktitle: "xlinkTitle",
      "xlink:title": "xlinkTitle",
      xlinktype: "xlinkType",
      "xlink:type": "xlinkType",
      xmlbase: "xmlBase",
      "xml:base": "xmlBase",
      xmllang: "xmlLang",
      "xml:lang": "xmlLang",
      xmlns: "xmlns",
      "xml:space": "xmlSpace",
      xmlnsxlink: "xmlnsXlink",
      "xmlns:xlink": "xmlnsXlink",
      xmlspace: "xmlSpace",
      y1: "y1",
      y2: "y2",
      y: "y",
      ychannelselector: "yChannelSelector",
      z: "z",
      zoomandpan: "zoomAndPan"
    }, Er = {}, rt = /^on./, Fn = /^on[^A-Z]/, Es = RegExp(
      "^(aria)-[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
    ), sc = RegExp(
      "^(aria)[A-Z][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
    ), Dc = /^(?:webkit|moz|o)[A-Z]/, _c = /^-ms-/, Dl = /-(.)/g, _a = /;\s*$/, Eo = {}, Zr = {}, _l = !1, xs = !1, cc = /["'&<>]/, Bl = /([A-Z])/g, Lt = /^ms-/, ku = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i, xr = Ic.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, Bc = Al.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, vi = Object.freeze({
      pending: !1,
      data: null,
      method: null,
      action: null
    }), i = Bc.d;
    Bc.d = {
      f: i.f,
      r: i.r,
      D: function(n) {
        var r = Vn || null;
        if (r) {
          var c = r.resumableState, v = r.renderState;
          if (typeof n == "string" && n) {
            if (!c.dnsResources.hasOwnProperty(n)) {
              c.dnsResources[n] = B, c = v.headers;
              var E, m;
              (m = c && 0 < c.remainingCapacity) && (m = (E = "<" + Rn(n) + ">; rel=dns-prefetch", 0 <= (c.remainingCapacity -= E.length + 2))), m ? (v.resets.dns[n] = B, c.preconnects && (c.preconnects += ", "), c.preconnects += E) : (E = [], Re(E, { href: n, rel: "dns-prefetch" }), v.preconnects.add(E));
            }
            si(r);
          }
        } else i.D(n);
      },
      C: function(n, r) {
        var c = Vn || null;
        if (c) {
          var v = c.resumableState, E = c.renderState;
          if (typeof n == "string" && n) {
            var m = r === "use-credentials" ? "credentials" : typeof r == "string" ? "anonymous" : "default";
            if (!v.connectResources[m].hasOwnProperty(n)) {
              v.connectResources[m][n] = B, v = E.headers;
              var H, X;
              if (X = v && 0 < v.remainingCapacity) {
                if (X = "<" + Rn(n) + ">; rel=preconnect", typeof r == "string") {
                  var le = cs(
                    r,
                    "crossOrigin"
                  );
                  X += '; crossorigin="' + le + '"';
                }
                X = (H = X, 0 <= (v.remainingCapacity -= H.length + 2));
              }
              X ? (E.resets.connect[m][n] = B, v.preconnects && (v.preconnects += ", "), v.preconnects += H) : (m = [], Re(m, {
                rel: "preconnect",
                href: n,
                crossOrigin: r
              }), E.preconnects.add(m));
            }
            si(c);
          }
        } else i.C(n, r);
      },
      L: function(n, r, c) {
        var v = Vn || null;
        if (v) {
          var E = v.resumableState, m = v.renderState;
          if (r && n) {
            switch (r) {
              case "image":
                if (c)
                  var H = c.imageSrcSet, X = c.imageSizes, le = c.fetchPriority;
                var K = H ? H + `
` + (X || "") : n;
                if (E.imageResources.hasOwnProperty(K)) return;
                E.imageResources[K] = oe, E = m.headers;
                var Ee;
                E && 0 < E.remainingCapacity && typeof H != "string" && le === "high" && (Ee = Li(n, r, c), 0 <= (E.remainingCapacity -= Ee.length + 2)) ? (m.resets.image[K] = oe, E.highImagePreloads && (E.highImagePreloads += ", "), E.highImagePreloads += Ee) : (E = [], Re(
                  E,
                  ft(
                    {
                      rel: "preload",
                      href: H ? void 0 : n,
                      as: r
                    },
                    c
                  )
                ), le === "high" ? m.highImagePreloads.add(E) : (m.bulkPreloads.add(E), m.preloads.images.set(K, E)));
                break;
              case "style":
                if (E.styleResources.hasOwnProperty(n)) return;
                H = [], Re(
                  H,
                  ft({ rel: "preload", href: n, as: r }, c)
                ), E.styleResources[n] = !c || typeof c.crossOrigin != "string" && typeof c.integrity != "string" ? oe : [c.crossOrigin, c.integrity], m.preloads.stylesheets.set(n, H), m.bulkPreloads.add(H);
                break;
              case "script":
                if (E.scriptResources.hasOwnProperty(n)) return;
                H = [], m.preloads.scripts.set(n, H), m.bulkPreloads.add(H), Re(
                  H,
                  ft({ rel: "preload", href: n, as: r }, c)
                ), E.scriptResources[n] = !c || typeof c.crossOrigin != "string" && typeof c.integrity != "string" ? oe : [c.crossOrigin, c.integrity];
                break;
              default:
                if (E.unknownResources.hasOwnProperty(r)) {
                  if (H = E.unknownResources[r], H.hasOwnProperty(n))
                    return;
                } else
                  H = {}, E.unknownResources[r] = H;
                if (H[n] = oe, (E = m.headers) && 0 < E.remainingCapacity && r === "font" && (K = Li(n, r, c), 0 <= (E.remainingCapacity -= K.length + 2)))
                  m.resets.font[n] = oe, E.fontPreloads && (E.fontPreloads += ", "), E.fontPreloads += K;
                else
                  switch (E = [], n = ft(
                    { rel: "preload", href: n, as: r },
                    c
                  ), Re(E, n), r) {
                    case "font":
                      m.fontPreloads.add(E);
                      break;
                    default:
                      m.bulkPreloads.add(E);
                  }
            }
            si(v);
          }
        } else i.L(n, r, c);
      },
      m: function(n, r) {
        var c = Vn || null;
        if (c) {
          var v = c.resumableState, E = c.renderState;
          if (n) {
            var m = r && typeof r.as == "string" ? r.as : "script";
            switch (m) {
              case "script":
                if (v.moduleScriptResources.hasOwnProperty(n))
                  return;
                m = [], v.moduleScriptResources[n] = !r || typeof r.crossOrigin != "string" && typeof r.integrity != "string" ? oe : [r.crossOrigin, r.integrity], E.preloads.moduleScripts.set(n, m);
                break;
              default:
                if (v.moduleUnknownResources.hasOwnProperty(m)) {
                  var H = v.unknownResources[m];
                  if (H.hasOwnProperty(n)) return;
                } else
                  H = {}, v.moduleUnknownResources[m] = H;
                m = [], H[n] = oe;
            }
            Re(
              m,
              ft({ rel: "modulepreload", href: n }, r)
            ), E.bulkPreloads.add(m), si(c);
          }
        } else i.m(n, r);
      },
      X: function(n, r) {
        var c = Vn || null;
        if (c) {
          var v = c.resumableState, E = c.renderState;
          if (n) {
            var m = v.scriptResources.hasOwnProperty(
              n
            ) ? v.scriptResources[n] : void 0;
            m !== B && (v.scriptResources[n] = B, r = ft({ src: n, async: !0 }, r), m && (m.length === 2 && Rl(r, m), n = E.preloads.scripts.get(n)) && (n.length = 0), n = [], E.scripts.add(n), fn(n, r), si(c));
          }
        } else i.X(n, r);
      },
      S: function(n, r, c) {
        var v = Vn || null;
        if (v) {
          var E = v.resumableState, m = v.renderState;
          if (n) {
            r = r || "default";
            var H = m.styles.get(r), X = E.styleResources.hasOwnProperty(n) ? E.styleResources[n] : void 0;
            X !== B && (E.styleResources[n] = B, H || (H = {
              precedence: $(r),
              rules: [],
              hrefs: [],
              sheets: /* @__PURE__ */ new Map()
            }, m.styles.set(r, H)), r = {
              state: en,
              props: ft(
                {
                  rel: "stylesheet",
                  href: n,
                  "data-precedence": r
                },
                c
              )
            }, X && (X.length === 2 && Rl(r.props, X), (m = m.preloads.stylesheets.get(n)) && 0 < m.length ? m.length = 0 : r.state = sn), H.sheets.set(n, r), si(v));
          }
        } else i.S(n, r, c);
      },
      M: function(n, r) {
        var c = Vn || null;
        if (c) {
          var v = c.resumableState, E = c.renderState;
          if (n) {
            var m = v.moduleScriptResources.hasOwnProperty(n) ? v.moduleScriptResources[n] : void 0;
            m !== B && (v.moduleScriptResources[n] = B, r = ft(
              { src: n, type: "module", async: !0 },
              r
            ), m && (m.length === 2 && Rl(r, m), n = E.preloads.moduleScripts.get(n)) && (n.length = 0), n = [], E.scripts.add(n), fn(n, r), si(c));
          }
        } else i.M(n, r);
      }
    };
    var s = 0, g = 1, p = 2, R = 4, P = 8, B = null, oe = [];
    Object.freeze(oe);
    var ee = /(<\/|<)(s)(cript)/gi, ie = {}, De = 0, pe = 0, Ie = 1, Ue = 2, an = 3, Ge = 4, En = 5, On = 6, kn = 7, Yn = 8, Ze = 9, yn = /* @__PURE__ */ new Map(), ln = ' style="', zt = ":", fr = ";", Je = " ", Dn = '="', pt = '"', Ot = '=""', Ho = $(
      "javascript:throw new Error('React form unexpectedly submitted.')"
    ), Ln = ">", wt = "/>", Rr = !1, dr = !1, Yo = !1, hr = !1, xo = !1, Vr = !1, Tt = !1, uo = !1, Qr = !1, Go = !1, Ro = !1, fo = `addEventListener("submit",function(a){if(!a.defaultPrevented){var c=a.target,d=a.submitter,e=c.action,b=d;if(d){var f=d.getAttribute("formAction");null!=f&&(e=f,b=null)}"javascript:throw new Error('React form unexpectedly submitted.')"===e&&(a.preventDefault(),b?(a=document.createElement("input"),a.name=b.name,a.value=b.value,b.parentNode.insertBefore(a,b),b=new FormData(c),a.parentNode.removeChild(a)):b=new FormData(c),a=c.ownerDocument||c,(a.$$reactFormReplay=a.$$reactFormReplay||[]).push(c,d,b))}});`, uc = /(<\/|<)(s)(tyle)/gi, Ba = `
`, Xo = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/, Rs = /* @__PURE__ */ new Map(), Nc = /* @__PURE__ */ new Map(), $i = '<template id="', Lc = '"></template>', Wt = "<!--$-->", Sr = '<!--$?--><template id="', ot = '"></template>', Ss = "<!--$!-->", Zo = "<!--/$-->", pi = "<template", at = '"', So = ' data-dgst="', Nl = ' data-msg="', Vo = ' data-stck="', Ll = ' data-cstck="', el = "></template>", Na = "<!--", At = "-->", ks = '<div hidden id="', Jr = '">', nl = "</div>", wi = '<svg aria-hidden="true" style="display:none" id="', ua = '">', ko = "</svg>", Ti = '<math aria-hidden="true" style="display:none" id="', gr = '">', La = "</math>", zc = '<table hidden id="', ms = '">', zl = "</table>", fc = '<table hidden><tbody id="', Ut = '">', tl = "</tbody></table>", rl = '<table hidden><tr id="', Ci = '">', Ps = "</tr></table>", Fs = '<table hidden><colgroup id="', ho = '">', cu = "</colgroup></table>", fa = '$RS=function(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)};$RS("', Wc = '$RS("', za = '","', Wl = '")<\/script>', Os = '$RC=function(b,c,e){c=document.getElementById(c);c.parentNode.removeChild(c);var a=document.getElementById(b);if(a){b=a.previousSibling;if(e)b.data="$!",a.setAttribute("data-dgst",e);else{e=b.parentNode;a=b.nextSibling;var f=0;do{if(a&&8===a.nodeType){var d=a.data;if("/$"===d)if(0===f)break;else f--;else"$"!==d&&"$?"!==d&&"$!"!==d||f++}d=a.nextSibling;e.removeChild(a);a=d}while(a);for(;c.firstChild;)e.insertBefore(c.firstChild,a);b.data="$"}b._reactRetry&&b._reactRetry()}};$RC("', Ei = '$RC("', As = `$RC=function(b,c,e){c=document.getElementById(c);c.parentNode.removeChild(c);var a=document.getElementById(b);if(a){b=a.previousSibling;if(e)b.data="$!",a.setAttribute("data-dgst",e);else{e=b.parentNode;a=b.nextSibling;var f=0;do{if(a&&8===a.nodeType){var d=a.data;if("/$"===d)if(0===f)break;else f--;else"$"!==d&&"$?"!==d&&"$!"!==d||f++}d=a.nextSibling;e.removeChild(a);a=d}while(a);for(;c.firstChild;)e.insertBefore(c.firstChild,a);b.data="$"}b._reactRetry&&b._reactRetry()}};$RM=new Map;
$RR=function(t,u,y){function v(n){this._p=null;n()}for(var w=$RC,p=$RM,q=new Map,r=document,g,b,h=r.querySelectorAll("link[data-precedence],style[data-precedence]"),x=[],k=0;b=h[k++];)"not all"===b.getAttribute("media")?x.push(b):("LINK"===b.tagName&&p.set(b.getAttribute("href"),b),q.set(b.dataset.precedence,g=b));b=0;h=[];var l,a;for(k=!0;;){if(k){var e=y[b++];if(!e){k=!1;b=0;continue}var c=!1,m=0;var d=e[m++];if(a=p.get(d)){var f=a._p;c=!0}else{a=r.createElement("link");a.href=
d;a.rel="stylesheet";for(a.dataset.precedence=l=e[m++];f=e[m++];)a.setAttribute(f,e[m++]);f=a._p=new Promise(function(n,z){a.onload=v.bind(a,n);a.onerror=v.bind(a,z)});p.set(d,a)}d=a.getAttribute("media");!f||d&&!matchMedia(d).matches||h.push(f);if(c)continue}else{a=x[b++];if(!a)break;l=a.getAttribute("data-precedence");a.removeAttribute("media")}c=q.get(l)||g;c===g&&(g=a);q.set(l,a);c?c.parentNode.insertBefore(a,c.nextSibling):(c=r.head,c.insertBefore(a,c.firstChild))}Promise.all(h).then(w.bind(null,
t,u,""),w.bind(null,t,u,"Resource failed to load"))};$RR("`, dc = `$RM=new Map;
$RR=function(t,u,y){function v(n){this._p=null;n()}for(var w=$RC,p=$RM,q=new Map,r=document,g,b,h=r.querySelectorAll("link[data-precedence],style[data-precedence]"),x=[],k=0;b=h[k++];)"not all"===b.getAttribute("media")?x.push(b):("LINK"===b.tagName&&p.set(b.getAttribute("href"),b),q.set(b.dataset.precedence,g=b));b=0;h=[];var l,a;for(k=!0;;){if(k){var e=y[b++];if(!e){k=!1;b=0;continue}var c=!1,m=0;var d=e[m++];if(a=p.get(d)){var f=a._p;c=!0}else{a=r.createElement("link");a.href=
d;a.rel="stylesheet";for(a.dataset.precedence=l=e[m++];f=e[m++];)a.setAttribute(f,e[m++]);f=a._p=new Promise(function(n,z){a.onload=v.bind(a,n);a.onerror=v.bind(a,z)});p.set(d,a)}d=a.getAttribute("media");!f||d&&!matchMedia(d).matches||h.push(f);if(c)continue}else{a=x[b++];if(!a)break;l=a.getAttribute("data-precedence");a.removeAttribute("media")}c=q.get(l)||g;c===g&&(g=a);q.set(l,a);c?c.parentNode.insertBefore(a,c.nextSibling):(c=r.head,c.insertBefore(a,c.firstChild))}Promise.all(h).then(w.bind(null,
t,u,""),w.bind(null,t,u,"Resource failed to load"))};$RR("`, hc = '$RR("', Ms = '","', Qo = '",', Wa = '"', Ul = ")<\/script>", ol = '$RX=function(b,c,d,e,f){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),f&&(a.cstck=f),b._reactRetry&&b._reactRetry())};;$RX("', Is = '$RX("', Hl = '"', xi = ",", Ri = ")<\/script>", Si = /[<\u2028\u2029]/g, al = /[&><\u2028\u2029]/g, il = '<style media="not all" data-precedence="', Ds = '" data-href="', a = '">', l = "</style>", h = !1, w = !0, x = [], F = '<style data-precedence="', L = '" data-href="', ne = " ", U = '">', j = "</style>", we = "[", ce = ",[", We = ",", Ve = "]", en = 0, sn = 1, zn = 2, Ct = 3, Sn = /[<>\r\n]/g, kr = /["';,\r\n]/g, Et = "", Kr = Function.prototype.bind, br = Symbol.for("react.client.reference"), qt = {};
    Object.freeze(qt);
    var Dr = {}, Wn = null, Mt = {}, it = {}, yr = /* @__PURE__ */ new Set(), ll = /* @__PURE__ */ new Set(), Ua = /* @__PURE__ */ new Set(), Ha = /* @__PURE__ */ new Set(), sl = /* @__PURE__ */ new Set(), Ya = /* @__PURE__ */ new Set(), Uc = /* @__PURE__ */ new Set(), ki = /* @__PURE__ */ new Set(), mu = /* @__PURE__ */ new Set(), Pu = {
      enqueueSetState: function(n, r, c) {
        var v = n._reactInternals;
        v.queue === null ? Qn(n, "setState") : (v.queue.push(r), c != null && Bt(c));
      },
      enqueueReplaceState: function(n, r, c) {
        n = n._reactInternals, n.replace = !0, n.queue = [r], c != null && Bt(c);
      },
      enqueueForceUpdate: function(n, r) {
        n._reactInternals.queue === null ? Qn(n, "forceUpdate") : r != null && Bt(r);
      }
    }, uu = { id: 1, overflow: "" }, gc = Math.clz32 ? Math.clz32 : Hr, Fu = Math.log, fu = Math.LN2, da = Error(
      "Suspense Exception: This is not a real error! It's an implementation detail of `use` to interrupt the current render. You must either rethrow it immediately, or move the `use` call outside of the `try/catch` block. Capturing without rethrowing will lead to unexpected behavior.\n\nTo handle async errors, wrap your component in an error boundary, or call the promise's `.catch` method and pass the result to `use`."
    ), qr = null, du = typeof Object.is == "function" ? Object.is : Cn, go = null, bc = null, yc = null, Hc = null, Yc = null, Kn = null, vc = !1, Yl = !1, It = 0, cl = 0, ha = -1, ul = 0, Gl = null, bo = null, fl = 0, yo = !1, mi, _s = {
      readContext: au,
      use: function(n) {
        if (n !== null && typeof n == "object") {
          if (typeof n.then == "function")
            return kl(n);
          if (n.$$typeof === di)
            return au(n);
        }
        throw Error(
          "An unsupported type was passed to use(): " + String(n)
        );
      },
      useContext: function(n) {
        return mi = "useContext", Zn(), n._currentValue2;
      },
      useMemo: $o,
      useReducer: iu,
      useRef: function(n) {
        go = Zn(), Kn = or();
        var r = Kn.memoizedState;
        return r === null ? (n = { current: n }, Object.seal(n), Kn.memoizedState = n) : r;
      },
      useState: function(n) {
        return mi = "useState", iu(Hi, n);
      },
      useInsertionEffect: ea,
      useLayoutEffect: ea,
      useCallback: function(n, r) {
        return $o(function() {
          return n;
        }, r);
      },
      useImperativeHandle: ea,
      useEffect: ea,
      useDebugValue: ea,
      useDeferredValue: function(n, r) {
        return Zn(), r !== void 0 ? r : n;
      },
      useTransition: function() {
        return Zn(), [!1, nc];
      },
      useId: function() {
        var n = bc.treeContext, r = n.overflow;
        n = n.id, n = (n & ~(1 << 32 - gc(n) - 1)).toString(32) + r;
        var c = ga;
        if (c === null)
          throw Error(
            "Invalid hook call. Hooks can only be called inside of the body of a function component."
          );
        return r = It++, n = "«" + c.idPrefix + "R" + n, 0 < r && (n += "H" + r.toString(32)), n + "»";
      },
      useSyncExternalStore: function(n, r, c) {
        if (c === void 0)
          throw Error(
            "Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering."
          );
        return c();
      },
      useOptimistic: function(n) {
        return Zn(), [n, No];
      },
      useActionState: Yr,
      useFormState: Yr,
      useHostTransitionStatus: function() {
        return Zn(), vi;
      },
      useMemoCache: function(n) {
        for (var r = Array(n), c = 0; c < n; c++)
          r[c] = bi;
        return r;
      },
      useCacheRefresh: function() {
        return ti;
      }
    }, ga = null, mo = null, hu = {
      getCacheForType: function() {
        throw Error("Not implemented.");
      },
      getOwner: function() {
        return mo === null ? null : mo.componentStack;
      }
    }, ba = 0, gu, Gc, pc, wc, Ou, ya, dl;
    ri.__reactDisabledLog = !0;
    var bu, Ga, Bs = !1, Xc = new (typeof WeakMap == "function" ? WeakMap : Map)(), Xa = {
      "react-stack-bottom-frame": function(n, r, c) {
        return n(r, c);
      }
    }, Ns = Xa["react-stack-bottom-frame"].bind(Xa), _n = {
      "react-stack-bottom-frame": function(n) {
        return n.render();
      }
    }, Pi = _n["react-stack-bottom-frame"].bind(_n), Xl = {
      "react-stack-bottom-frame": function(n) {
        var r = n._init;
        return r(n._payload);
      }
    }, hl = Xl["react-stack-bottom-frame"].bind(Xl), Zl = 0;
    if (typeof performance == "object" && typeof performance.now == "function")
      var Tc = performance, Ls = function() {
        return Tc.now();
      };
    else {
      var zs = Date;
      Ls = function() {
        return zs.now();
      };
    }
    var xt = 4, vo = 0, lt = 1, gl = 2, Ws = 5, Fi = 14, Vn = null, Zc = {}, va = {}, Vl = {}, yu = {}, Us = !1, Cc = !1, Hs = !1;
    df.renderToStaticMarkup = function(n, r) {
      return vs(
        n,
        r,
        !0,
        'The server used "renderToStaticMarkup" which does not support Suspense. If you intended to have the server wait for the suspended component please switch to "renderToReadableStream" which supports Suspense on the server'
      );
    }, df.renderToString = function(n, r) {
      return vs(
        n,
        r,
        !1,
        'The server used "renderToString" which does not support Suspense. If you intended for this Suspense boundary to render the fallback content on the server consider throwing an Error somewhere within the Suspense boundary. If you intended to have the server wait for the suspended component please switch to "renderToReadableStream" which supports Suspense on the server'
      );
    }, df.version = "19.1.0";
  }()), df;
}
var hf = {};
/**
 * @license React
 * react-dom-server.browser.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Lh;
function pp() {
  return Lh || (Lh = 1, process.env.NODE_ENV !== "production" && function() {
    function o(e, t, u, y) {
      return "" + t + (u === "s" ? "\\73 " : "\\53 ") + y;
    }
    function d(e, t, u, y) {
      return "" + t + (u === "s" ? "\\u0073" : "\\u0053") + y;
    }
    function f(e) {
      return Object.prototype.toString.call(e).replace(/^\[object (.*)\]$/, function(t, u) {
        return u;
      });
    }
    function b(e) {
      var t = JSON.stringify(e);
      return '"' + e + '"' === t ? e : t;
    }
    function T(e) {
      switch (typeof e) {
        case "string":
          return JSON.stringify(
            10 >= e.length ? e : e.slice(0, 10) + "..."
          );
        case "object":
          return Nt(e) ? "[...]" : e !== null && e.$$typeof === Il ? "client" : (e = f(e), e === "Object" ? "{...}" : e);
        case "function":
          return e.$$typeof === Il ? "client" : (e = e.displayName || e.name) ? "function " + e : "function";
        default:
          return String(e);
      }
    }
    function S(e) {
      if (typeof e == "string") return e;
      switch (e) {
        case Ml:
          return "Suspense";
        case Uo:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case bi:
            return S(e.render);
          case Jn:
            return S(e.type);
          case Ft:
            var t = e._payload;
            e = e._init;
            try {
              return S(e(t));
            } catch {
            }
        }
      return "";
    }
    function A(e, t) {
      var u = f(e);
      if (u !== "Object" && u !== "Array") return u;
      var y = -1, C = 0;
      if (Nt(e))
        if (lc.has(e)) {
          var k = lc.get(e);
          u = "<" + S(k) + ">";
          for (var z = 0; z < e.length; z++) {
            var W = e[z];
            W = typeof W == "string" ? W : typeof W == "object" && W !== null ? "{" + A(W) + "}" : "{" + T(W) + "}", "" + z === t ? (y = u.length, C = W.length, u += W) : u = 15 > W.length && 40 > u.length + W.length ? u + W : u + "{...}";
          }
          u += "</" + S(k) + ">";
        } else {
          for (u = "[", k = 0; k < e.length; k++)
            0 < k && (u += ", "), z = e[k], z = typeof z == "object" && z !== null ? A(z) : T(z), "" + k === t ? (y = u.length, C = z.length, u += z) : u = 10 > z.length && 40 > u.length + z.length ? u + z : u + "...";
          u += "]";
        }
      else if (e.$$typeof === hi)
        u = "<" + S(e.type) + "/>";
      else {
        if (e.$$typeof === Il) return "client";
        if (ic.has(e)) {
          for (u = ic.get(e), u = "<" + (S(u) || "..."), k = Object.keys(e), z = 0; z < k.length; z++) {
            u += " ", W = k[z], u += b(W) + "=";
            var ae = e[W], G = W === t && typeof ae == "object" && ae !== null ? A(ae) : T(ae);
            typeof ae != "string" && (G = "{" + G + "}"), W === t ? (y = u.length, C = G.length, u += G) : u = 10 > G.length && 40 > u.length + G.length ? u + G : u + "...";
          }
          u += ">";
        } else {
          for (u = "{", k = Object.keys(e), z = 0; z < k.length; z++)
            0 < z && (u += ", "), W = k[z], u += b(W) + ": ", ae = e[W], ae = typeof ae == "object" && ae !== null ? A(ae) : T(ae), W === t ? (y = u.length, C = ae.length, u += ae) : u = 10 > ae.length && 40 > u.length + ae.length ? u + ae : u + "...";
          u += "}";
        }
      }
      return t === void 0 ? u : -1 < y && 0 < C ? (e = " ".repeat(y) + "^".repeat(C), `
  ` + u + `
  ` + e) : `
  ` + u;
    }
    function O(e, t) {
      var u = e.length & 3, y = e.length - u, C = t;
      for (t = 0; t < y; ) {
        var k = e.charCodeAt(t) & 255 | (e.charCodeAt(++t) & 255) << 8 | (e.charCodeAt(++t) & 255) << 16 | (e.charCodeAt(++t) & 255) << 24;
        ++t, k = 3432918353 * (k & 65535) + ((3432918353 * (k >>> 16) & 65535) << 16) & 4294967295, k = k << 15 | k >>> 17, k = 461845907 * (k & 65535) + ((461845907 * (k >>> 16) & 65535) << 16) & 4294967295, C ^= k, C = C << 13 | C >>> 19, C = 5 * (C & 65535) + ((5 * (C >>> 16) & 65535) << 16) & 4294967295, C = (C & 65535) + 27492 + (((C >>> 16) + 58964 & 65535) << 16);
      }
      switch (k = 0, u) {
        case 3:
          k ^= (e.charCodeAt(t + 2) & 255) << 16;
        case 2:
          k ^= (e.charCodeAt(t + 1) & 255) << 8;
        case 1:
          k ^= e.charCodeAt(t) & 255, k = 3432918353 * (k & 65535) + ((3432918353 * (k >>> 16) & 65535) << 16) & 4294967295, k = k << 15 | k >>> 17, C ^= 461845907 * (k & 65535) + ((461845907 * (k >>> 16) & 65535) << 16) & 4294967295;
      }
      return C ^= e.length, C ^= C >>> 16, C = 2246822507 * (C & 65535) + ((2246822507 * (C >>> 16) & 65535) << 16) & 4294967295, C ^= C >>> 13, C = 3266489909 * (C & 65535) + ((3266489909 * (C >>> 16) & 65535) << 16) & 4294967295, (C ^ C >>> 16) >>> 0;
    }
    function Y(e) {
      ca.push(e), Cs.port2.postMessage(null);
    }
    function Z(e) {
      setTimeout(function() {
        throw e;
      });
    }
    function M(e, t) {
      if (t.byteLength !== 0)
        if (2048 < t.byteLength)
          0 < Cr && (e.enqueue(
            new Uint8Array(Kt.buffer, 0, Cr)
          ), Kt = new Uint8Array(2048), Cr = 0), e.enqueue(t);
        else {
          var u = Kt.length - Cr;
          u < t.byteLength && (u === 0 ? e.enqueue(Kt) : (Kt.set(
            t.subarray(0, u),
            Cr
          ), e.enqueue(Kt), t = t.subarray(u)), Kt = new Uint8Array(2048), Cr = 0), Kt.set(t, Cr), Cr += t.byteLength;
        }
    }
    function J(e, t) {
      return M(e, t), !0;
    }
    function re(e) {
      Kt && 0 < Cr && (e.enqueue(
        new Uint8Array(Kt.buffer, 0, Cr)
      ), Kt = null, Cr = 0);
    }
    function V(e) {
      return Er.encode(e);
    }
    function _(e) {
      return e = Er.encode(e), 2048 < e.byteLength && console.error(
        "precomputed chunks must be smaller than the view size configured for this host. This is a bug in React."
      ), e;
    }
    function N(e, t) {
      typeof e.error == "function" ? e.error(t) : e.close();
    }
    function Pe(e) {
      return typeof Symbol == "function" && Symbol.toStringTag && e[Symbol.toStringTag] || e.constructor.name || "Object";
    }
    function Me(e) {
      try {
        return je(e), !1;
      } catch {
        return !0;
      }
    }
    function je(e) {
      return "" + e;
    }
    function ke(e, t) {
      if (Me(e))
        return console.error(
          "The provided `%s` attribute is an unsupported type %s. This value must be coerced to a string before using it here.",
          t,
          Pe(e)
        ), je(e);
    }
    function ge(e, t) {
      if (Me(e))
        return console.error(
          "The provided `%s` CSS property is an unsupported type %s. This value must be coerced to a string before using it here.",
          t,
          Pe(e)
        ), je(e);
    }
    function $(e) {
      if (Me(e))
        return console.error(
          "The provided HTML markup uses a value of unsupported type %s. This value must be coerced to a string before using it here.",
          Pe(e)
        ), je(e);
    }
    function Xe(e) {
      return Fn.call(Dc, e) ? !0 : Fn.call(sc, e) ? !1 : Es.test(e) ? Dc[e] = !0 : (sc[e] = !0, console.error("Invalid attribute name: `%s`", e), !1);
    }
    function vn(e, t) {
      _a[t.type] || t.onChange || t.onInput || t.readOnly || t.disabled || t.value == null || console.error(
        e === "select" ? "You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set `onChange`." : "You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`."
      ), t.onChange || t.readOnly || t.disabled || t.checked == null || console.error(
        "You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`."
      );
    }
    function un(e, t) {
      if (Fn.call(Zr, t) && Zr[t])
        return !0;
      if (xs.test(t)) {
        if (e = "aria-" + t.slice(4).toLowerCase(), e = Eo.hasOwnProperty(e) ? e : null, e == null)
          return console.error(
            "Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.",
            t
          ), Zr[t] = !0;
        if (t !== e)
          return console.error(
            "Invalid ARIA attribute `%s`. Did you mean `%s`?",
            t,
            e
          ), Zr[t] = !0;
      }
      if (_l.test(t)) {
        if (e = t.toLowerCase(), e = Eo.hasOwnProperty(e) ? e : null, e == null) return Zr[t] = !0, !1;
        t !== e && (console.error(
          "Unknown ARIA attribute `%s`. Did you mean `%s`?",
          t,
          e
        ), Zr[t] = !0);
      }
      return !0;
    }
    function Ke(e, t) {
      var u = [], y;
      for (y in t)
        un(e, y) || u.push(y);
      t = u.map(function(C) {
        return "`" + C + "`";
      }).join(", "), u.length === 1 ? console.error(
        "Invalid aria prop %s on <%s> tag. For details, see https://react.dev/link/invalid-aria-props",
        t,
        e
      ) : 1 < u.length && console.error(
        "Invalid aria props %s on <%s> tag. For details, see https://react.dev/link/invalid-aria-props",
        t,
        e
      );
    }
    function I(e, t, u, y) {
      if (Fn.call(Lt, t) && Lt[t])
        return !0;
      var C = t.toLowerCase();
      if (C === "onfocusin" || C === "onfocusout")
        return console.error(
          "React uses onFocus and onBlur instead of onFocusIn and onFocusOut. All React events are normalized to bubble, so onFocusIn and onFocusOut are not needed/supported by React."
        ), Lt[t] = !0;
      if (typeof u == "function" && (e === "form" && t === "action" || e === "input" && t === "formAction" || e === "button" && t === "formAction"))
        return !0;
      if (ku.test(t))
        return xr.test(t) && console.error(
          "Invalid event handler property `%s`. React events use the camelCase naming convention, for example `onClick`.",
          t
        ), Lt[t] = !0;
      if (Bc.test(t) || vi.test(t)) return !0;
      if (C === "innerhtml")
        return console.error(
          "Directly setting property `innerHTML` is not permitted. For more information, lookup documentation on `dangerouslySetInnerHTML`."
        ), Lt[t] = !0;
      if (C === "aria")
        return console.error(
          "The `aria` attribute is reserved for future use in React. Pass individual `aria-` attributes instead."
        ), Lt[t] = !0;
      if (C === "is" && u !== null && u !== void 0 && typeof u != "string")
        return console.error(
          "Received a `%s` for a string attribute `is`. If this is expected, cast the value to a string.",
          typeof u
        ), Lt[t] = !0;
      if (typeof u == "number" && isNaN(u))
        return console.error(
          "Received NaN for the `%s` attribute. If this is expected, cast the value to a string.",
          t
        ), Lt[t] = !0;
      if (Bl.hasOwnProperty(C)) {
        if (C = Bl[C], C !== t)
          return console.error(
            "Invalid DOM property `%s`. Did you mean `%s`?",
            t,
            C
          ), Lt[t] = !0;
      } else if (t !== C)
        return console.error(
          "React does not recognize the `%s` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `%s` instead. If you accidentally passed it from a parent component, remove it from the DOM element.",
          t,
          C
        ), Lt[t] = !0;
      switch (t) {
        case "dangerouslySetInnerHTML":
        case "children":
        case "style":
        case "suppressContentEditableWarning":
        case "suppressHydrationWarning":
        case "defaultValue":
        case "defaultChecked":
        case "innerHTML":
        case "ref":
          return !0;
        case "innerText":
        case "textContent":
          return !0;
      }
      switch (typeof u) {
        case "boolean":
          switch (t) {
            case "autoFocus":
            case "checked":
            case "multiple":
            case "muted":
            case "selected":
            case "contentEditable":
            case "spellCheck":
            case "draggable":
            case "value":
            case "autoReverse":
            case "externalResourcesRequired":
            case "focusable":
            case "preserveAlpha":
            case "allowFullScreen":
            case "async":
            case "autoPlay":
            case "controls":
            case "default":
            case "defer":
            case "disabled":
            case "disablePictureInPicture":
            case "disableRemotePlayback":
            case "formNoValidate":
            case "hidden":
            case "loop":
            case "noModule":
            case "noValidate":
            case "open":
            case "playsInline":
            case "readOnly":
            case "required":
            case "reversed":
            case "scoped":
            case "seamless":
            case "itemScope":
            case "capture":
            case "download":
            case "inert":
              return !0;
            default:
              return C = t.toLowerCase().slice(0, 5), C === "data-" || C === "aria-" ? !0 : (u ? console.error(
                'Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.',
                u,
                t,
                t,
                u,
                t
              ) : console.error(
                'Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.',
                u,
                t,
                t,
                u,
                t,
                t,
                t
              ), Lt[t] = !0);
          }
        case "function":
        case "symbol":
          return Lt[t] = !0, !1;
        case "string":
          if (u === "false" || u === "true") {
            switch (t) {
              case "checked":
              case "selected":
              case "multiple":
              case "muted":
              case "allowFullScreen":
              case "async":
              case "autoPlay":
              case "controls":
              case "default":
              case "defer":
              case "disabled":
              case "disablePictureInPicture":
              case "disableRemotePlayback":
              case "formNoValidate":
              case "hidden":
              case "loop":
              case "noModule":
              case "noValidate":
              case "open":
              case "playsInline":
              case "readOnly":
              case "required":
              case "reversed":
              case "scoped":
              case "seamless":
              case "itemScope":
              case "inert":
                break;
              default:
                return !0;
            }
            console.error(
              "Received the string `%s` for the boolean attribute `%s`. %s Did you mean %s={%s}?",
              u,
              t,
              u === "false" ? "The browser will interpret it as a truthy value." : 'Although this works, it will not work as expected if you pass the string "false".',
              t,
              u
            ), Lt[t] = !0;
          }
      }
      return !0;
    }
    function Oe(e, t, u) {
      var y = [], C;
      for (C in t)
        I(e, C, t[C]) || y.push(C);
      t = y.map(function(k) {
        return "`" + k + "`";
      }).join(", "), y.length === 1 ? console.error(
        "Invalid value for prop %s on <%s> tag. Either remove it from the element, or pass a string or number value to keep it in the DOM. For details, see https://react.dev/link/attribute-behavior ",
        t,
        e
      ) : 1 < y.length && console.error(
        "Invalid values for props %s on <%s> tag. Either remove them from the element, or pass a string or number value to keep them in the DOM. For details, see https://react.dev/link/attribute-behavior ",
        t,
        e
      );
    }
    function Be(e) {
      return e.replace(g, function(t, u) {
        return u.toUpperCase();
      });
    }
    function ye(e) {
      if (typeof e == "boolean" || typeof e == "number" || typeof e == "bigint")
        return "" + e;
      $(e), e = "" + e;
      var t = ee.exec(e);
      if (t) {
        var u = "", y, C = 0;
        for (y = t.index; y < e.length; y++) {
          switch (e.charCodeAt(y)) {
            case 34:
              t = "&quot;";
              break;
            case 38:
              t = "&amp;";
              break;
            case 39:
              t = "&#x27;";
              break;
            case 60:
              t = "&lt;";
              break;
            case 62:
              t = "&gt;";
              break;
            default:
              continue;
          }
          C !== y && (u += e.slice(C, y)), C = y + 1, u += t;
        }
        e = C !== y ? u + e.slice(C, y) : u;
      }
      return e;
    }
    function Le(e) {
      return pe.test("" + e) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : e;
    }
    function dn(e) {
      return $(e), ("" + e).replace(wt, d);
    }
    function te(e, t, u, y, C, k) {
      var z = t === void 0 ? zt : _(
        '<script nonce="' + ye(t) + '">'
      ), W = e.idPrefix;
      u = [];
      var ae = e.bootstrapScriptContent, G = e.bootstrapScripts, be = e.bootstrapModules;
      if (ae !== void 0 && u.push(
        z,
        V(
          dn(ae)
        ),
        fr
      ), ae = [], y !== void 0 && (ae.push(Rr), ae.push(
        V(
          dn(JSON.stringify(y))
        )
      ), ae.push(dr)), C && typeof k == "number" && 0 >= k && console.error(
        "React expected a positive non-zero `maxHeadersLength` option but found %s instead. When using the `onHeaders` option you may supply an optional `maxHeadersLength` option as well however, when setting this value to zero or less no headers will be captured.",
        k === 0 ? "zero" : k
      ), y = C ? {
        preconnects: "",
        fontPreloads: "",
        highImagePreloads: "",
        remainingCapacity: 2 + (typeof k == "number" ? k : 2e3)
      } : null, C = {
        placeholderPrefix: _(W + "P:"),
        segmentPrefix: _(W + "S:"),
        boundaryPrefix: _(W + "B:"),
        startInlineScript: z,
        preamble: Xn(),
        externalRuntimeScript: null,
        bootstrapChunks: u,
        importMapChunks: ae,
        onHeaders: C,
        headers: y,
        resets: {
          font: {},
          dns: {},
          connect: { default: {}, anonymous: {}, credentials: {} },
          image: {},
          style: {}
        },
        charsetChunks: [],
        viewportChunks: [],
        hoistableChunks: [],
        preconnects: /* @__PURE__ */ new Set(),
        fontPreloads: /* @__PURE__ */ new Set(),
        highImagePreloads: /* @__PURE__ */ new Set(),
        styles: /* @__PURE__ */ new Map(),
        bootstrapScripts: /* @__PURE__ */ new Set(),
        scripts: /* @__PURE__ */ new Set(),
        bulkPreloads: /* @__PURE__ */ new Set(),
        preloads: {
          images: /* @__PURE__ */ new Map(),
          stylesheets: /* @__PURE__ */ new Map(),
          scripts: /* @__PURE__ */ new Map(),
          moduleScripts: /* @__PURE__ */ new Map()
        },
        nonce: t,
        hoistableState: null,
        stylesToHoist: !1
      }, G !== void 0)
        for (y = 0; y < G.length; y++) {
          k = G[y], ae = W = void 0;
          var he = {
            rel: "preload",
            as: "script",
            fetchPriority: "low",
            nonce: t
          };
          typeof k == "string" ? he.href = z = k : (he.href = z = k.src, he.integrity = ae = typeof k.integrity == "string" ? k.integrity : void 0, he.crossOrigin = W = typeof k == "string" || k.crossOrigin == null ? void 0 : k.crossOrigin === "use-credentials" ? "use-credentials" : ""), us(
            e,
            C,
            z,
            he
          ), u.push(
            Je,
            V(ye(z))
          ), t && u.push(
            pt,
            V(ye(t))
          ), typeof ae == "string" && u.push(
            Ot,
            V(ye(ae))
          ), typeof W == "string" && u.push(
            Ho,
            V(ye(W))
          ), u.push(Ln);
        }
      if (be !== void 0)
        for (G = 0; G < be.length; G++)
          y = be[G], W = z = void 0, ae = {
            rel: "modulepreload",
            fetchPriority: "low",
            nonce: t
          }, typeof y == "string" ? ae.href = k = y : (ae.href = k = y.src, ae.integrity = W = typeof y.integrity == "string" ? y.integrity : void 0, ae.crossOrigin = z = typeof y == "string" || y.crossOrigin == null ? void 0 : y.crossOrigin === "use-credentials" ? "use-credentials" : ""), us(
            e,
            C,
            k,
            ae
          ), u.push(
            Dn,
            V(ye(k))
          ), t && u.push(
            pt,
            V(ye(t))
          ), typeof W == "string" && u.push(
            Ot,
            V(ye(W))
          ), typeof z == "string" && u.push(
            Ho,
            V(ye(z))
          ), u.push(Ln);
      return C;
    }
    function Ce(e, t, u, y, C) {
      return {
        idPrefix: e === void 0 ? "" : e,
        nextFormID: 0,
        streamingFormat: 0,
        bootstrapScriptContent: u,
        bootstrapScripts: y,
        bootstrapModules: C,
        instructions: En,
        hasBody: !1,
        hasHtml: !1,
        unknownResources: {},
        dnsResources: {},
        connectResources: { default: {}, anonymous: {}, credentials: {} },
        imageResources: {},
        styleResources: {},
        scriptResources: {},
        moduleUnknownResources: {},
        moduleScriptResources: {}
      };
    }
    function Xn() {
      return {
        htmlChunks: null,
        headChunks: null,
        bodyChunks: null,
        contribution: hr
      };
    }
    function ze(e, t, u) {
      return {
        insertionMode: e,
        selectedValue: t,
        tagScope: u
      };
    }
    function q(e) {
      return ze(
        e === "http://www.w3.org/2000/svg" ? Qr : e === "http://www.w3.org/1998/Math/MathML" ? Go : xo,
        null,
        0
      );
    }
    function Q(e, t, u) {
      switch (t) {
        case "noscript":
          return ze(
            Tt,
            null,
            e.tagScope | 1
          );
        case "select":
          return ze(
            Tt,
            u.value != null ? u.value : u.defaultValue,
            e.tagScope
          );
        case "svg":
          return ze(Qr, null, e.tagScope);
        case "picture":
          return ze(
            Tt,
            null,
            e.tagScope | 2
          );
        case "math":
          return ze(Go, null, e.tagScope);
        case "foreignObject":
          return ze(Tt, null, e.tagScope);
        case "table":
          return ze(
            Ro,
            null,
            e.tagScope
          );
        case "thead":
        case "tbody":
        case "tfoot":
          return ze(
            fo,
            null,
            e.tagScope
          );
        case "colgroup":
          return ze(
            Ba,
            null,
            e.tagScope
          );
        case "tr":
          return ze(
            uc,
            null,
            e.tagScope
          );
        case "head":
          if (e.insertionMode < Tt)
            return ze(
              uo,
              null,
              e.tagScope
            );
          break;
        case "html":
          if (e.insertionMode === xo)
            return ze(
              Vr,
              null,
              e.tagScope
            );
      }
      return e.insertionMode >= Ro || e.insertionMode < Tt ? ze(Tt, null, e.tagScope) : e;
    }
    function on(e, t, u, y) {
      return t === "" ? y : (y && e.push(Xo), e.push(V(ye(t))), !0);
    }
    function Qe(e, t) {
      if (typeof t != "object")
        throw Error(
          "The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX."
        );
      var u = !0, y;
      for (y in t)
        if (Fn.call(t, y)) {
          var C = t[y];
          if (C != null && typeof C != "boolean" && C !== "") {
            if (y.indexOf("--") === 0) {
              var k = V(ye(y));
              ge(C, y), C = V(
                ye(("" + C).trim())
              );
            } else {
              k = y;
              var z = C;
              if (-1 < k.indexOf("-")) {
                var W = k;
                R.hasOwnProperty(W) && R[W] || (R[W] = !0, console.error(
                  "Unsupported style property %s. Did you mean %s?",
                  W,
                  Be(W.replace(s, "ms-"))
                ));
              } else if (i.test(k))
                W = k, R.hasOwnProperty(W) && R[W] || (R[W] = !0, console.error(
                  "Unsupported vendor-prefixed style property %s. Did you mean %s?",
                  W,
                  W.charAt(0).toUpperCase() + W.slice(1)
                ));
              else if (p.test(z)) {
                W = k;
                var ae = z;
                P.hasOwnProperty(ae) && P[ae] || (P[ae] = !0, console.error(
                  `Style property values shouldn't contain a semicolon. Try "%s: %s" instead.`,
                  W,
                  ae.replace(
                    p,
                    ""
                  )
                ));
              }
              typeof z == "number" && (isNaN(z) ? B || (B = !0, console.error(
                "`NaN` is an invalid value for the `%s` css style property.",
                k
              )) : isFinite(z) || oe || (oe = !0, console.error(
                "`Infinity` is an invalid value for the `%s` css style property.",
                k
              ))), k = y, z = Rs.get(k), z !== void 0 || (z = _(
                ye(
                  k.replace(ie, "-$1").toLowerCase().replace(De, "-ms-")
                )
              ), Rs.set(k, z)), k = z, typeof C == "number" ? C = C === 0 || _c.has(y) ? V("" + C) : V(C + "px") : (ge(C, y), C = V(
                ye(("" + C).trim())
              ));
            }
            u ? (u = !1, e.push(
              Nc,
              k,
              $i,
              C
            )) : e.push(Lc, k, $i, C);
          }
        }
      u || e.push(ot);
    }
    function Re(e, t, u) {
      u && typeof u != "function" && typeof u != "symbol" && e.push(
        Wt,
        V(t),
        Ss
      );
    }
    function me(e, t, u) {
      typeof u != "function" && typeof u != "symbol" && typeof u != "boolean" && e.push(
        Wt,
        V(t),
        Sr,
        V(ye(u)),
        ot
      );
    }
    function _e(e, t) {
      this.push(pi), $e(e), me(this, "name", t), me(this, "value", e), this.push(So);
    }
    function $e(e) {
      if (typeof e != "string")
        throw Error(
          "File/Blob fields are not yet supported in progressive forms. Will fallback to client hydration."
        );
    }
    function fn(e, t) {
      if (typeof t.$$FORM_ACTION == "function") {
        var u = e.nextFormID++;
        e = e.idPrefix + u;
        try {
          var y = t.$$FORM_ACTION(e);
          if (y) {
            var C = y.data;
            C != null && C.forEach($e);
          }
          return y;
        } catch (k) {
          if (typeof k == "object" && k !== null && typeof k.then == "function")
            throw k;
          console.error(
            `Failed to serialize an action for progressive enhancement:
%s`,
            k
          );
        }
      }
      return null;
    }
    function Tn(e, t, u, y, C, k, z, W) {
      var ae = null;
      if (typeof y == "function") {
        W === null || nl || (nl = !0, console.error(
          'Cannot specify a "name" prop for a button that specifies a function as a formAction. React needs it to encode which action should be invoked. It will get overridden.'
        )), C === null && k === null || ua || (ua = !0, console.error(
          "Cannot specify a formEncType or formMethod for a button that specifies a function as a formAction. React provides those automatically. They will get overridden."
        )), z === null || wi || (wi = !0, console.error(
          "Cannot specify a formTarget for a button that specifies a function as a formAction. The function will always be executed in the same window."
        ));
        var G = fn(t, y);
        G !== null ? (W = G.name, y = G.action || "", C = G.encType, k = G.method, z = G.target, ae = G.data) : (e.push(
          Wt,
          V("formAction"),
          Sr,
          Zo,
          ot
        ), z = k = C = y = W = null, to(t, u));
      }
      return W != null && Ne(e, "name", W), y != null && Ne(e, "formAction", y), C != null && Ne(e, "formEncType", C), k != null && Ne(e, "formMethod", k), z != null && Ne(e, "formTarget", z), ae;
    }
    function Ne(e, t, u) {
      switch (t) {
        case "className":
          me(e, "class", u);
          break;
        case "tabIndex":
          me(e, "tabindex", u);
          break;
        case "dir":
        case "role":
        case "viewBox":
        case "width":
        case "height":
          me(e, t, u);
          break;
        case "style":
          Qe(e, u);
          break;
        case "src":
        case "href":
          if (u === "") {
            console.error(
              t === "src" ? 'An empty string ("") was passed to the %s attribute. This may cause the browser to download the whole page again over the network. To fix this, either do not render the element at all or pass null to %s instead of an empty string.' : 'An empty string ("") was passed to the %s attribute. To fix this, either do not render the element at all or pass null to %s instead of an empty string.',
              t,
              t
            );
            break;
          }
        case "action":
        case "formAction":
          if (u == null || typeof u == "function" || typeof u == "symbol" || typeof u == "boolean")
            break;
          ke(u, t), u = Le("" + u), e.push(
            Wt,
            V(t),
            Sr,
            V(ye(u)),
            ot
          );
          break;
        case "defaultValue":
        case "defaultChecked":
        case "innerHTML":
        case "suppressContentEditableWarning":
        case "suppressHydrationWarning":
        case "ref":
          break;
        case "autoFocus":
        case "multiple":
        case "muted":
          Re(e, t.toLowerCase(), u);
          break;
        case "xlinkHref":
          if (typeof u == "function" || typeof u == "symbol" || typeof u == "boolean")
            break;
          ke(u, t), u = Le("" + u), e.push(
            Wt,
            V("xlink:href"),
            Sr,
            V(ye(u)),
            ot
          );
          break;
        case "contentEditable":
        case "spellCheck":
        case "draggable":
        case "value":
        case "autoReverse":
        case "externalResourcesRequired":
        case "focusable":
        case "preserveAlpha":
          typeof u != "function" && typeof u != "symbol" && e.push(
            Wt,
            V(t),
            Sr,
            V(ye(u)),
            ot
          );
          break;
        case "inert":
          u !== "" || Yo[t] || (Yo[t] = !0, console.error(
            "Received an empty string for a boolean attribute `%s`. This will treat the attribute as if it were false. Either pass `false` to silence this warning, or pass `true` if you used an empty string in earlier versions of React to indicate this attribute is true.",
            t
          ));
        case "allowFullScreen":
        case "async":
        case "autoPlay":
        case "controls":
        case "default":
        case "defer":
        case "disabled":
        case "disablePictureInPicture":
        case "disableRemotePlayback":
        case "formNoValidate":
        case "hidden":
        case "loop":
        case "noModule":
        case "noValidate":
        case "open":
        case "playsInline":
        case "readOnly":
        case "required":
        case "reversed":
        case "scoped":
        case "seamless":
        case "itemScope":
          u && typeof u != "function" && typeof u != "symbol" && e.push(
            Wt,
            V(t),
            Ss
          );
          break;
        case "capture":
        case "download":
          u === !0 ? e.push(
            Wt,
            V(t),
            Ss
          ) : u !== !1 && typeof u != "function" && typeof u != "symbol" && e.push(
            Wt,
            V(t),
            Sr,
            V(ye(u)),
            ot
          );
          break;
        case "cols":
        case "rows":
        case "size":
        case "span":
          typeof u != "function" && typeof u != "symbol" && !isNaN(u) && 1 <= u && e.push(
            Wt,
            V(t),
            Sr,
            V(ye(u)),
            ot
          );
          break;
        case "rowSpan":
        case "start":
          typeof u == "function" || typeof u == "symbol" || isNaN(u) || e.push(
            Wt,
            V(t),
            Sr,
            V(ye(u)),
            ot
          );
          break;
        case "xlinkActuate":
          me(e, "xlink:actuate", u);
          break;
        case "xlinkArcrole":
          me(e, "xlink:arcrole", u);
          break;
        case "xlinkRole":
          me(e, "xlink:role", u);
          break;
        case "xlinkShow":
          me(e, "xlink:show", u);
          break;
        case "xlinkTitle":
          me(e, "xlink:title", u);
          break;
        case "xlinkType":
          me(e, "xlink:type", u);
          break;
        case "xmlBase":
          me(e, "xml:base", u);
          break;
        case "xmlLang":
          me(e, "xml:lang", u);
          break;
        case "xmlSpace":
          me(e, "xml:space", u);
          break;
        default:
          if ((!(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (t = Dl.get(t) || t, Xe(t))) {
            switch (typeof u) {
              case "function":
              case "symbol":
                return;
              case "boolean":
                var y = t.toLowerCase().slice(0, 5);
                if (y !== "data-" && y !== "aria-") return;
            }
            e.push(
              Wt,
              V(t),
              Sr,
              V(ye(u)),
              ot
            );
          }
      }
    }
    function He(e, t, u) {
      if (t != null) {
        if (u != null)
          throw Error(
            "Can only set one of `children` or `props.dangerouslySetInnerHTML`."
          );
        if (typeof t != "object" || !("__html" in t))
          throw Error(
            "`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://react.dev/link/dangerously-set-inner-html for more information."
          );
        t = t.__html, t != null && ($(t), e.push(V("" + t)));
      }
    }
    function de(e, t) {
      var u = e[t];
      u != null && (u = Nt(u), e.multiple && !u ? console.error(
        "The `%s` prop supplied to <select> must be an array if `multiple` is true.",
        t
      ) : !e.multiple && u && console.error(
        "The `%s` prop supplied to <select> must be a scalar value if `multiple` is false.",
        t
      ));
    }
    function yt(e) {
      var t = "";
      return qi.Children.forEach(e, function(u) {
        u != null && (t += u, Na || typeof u == "string" || typeof u == "number" || typeof u == "bigint" || (Na = !0, console.error(
          "Cannot infer the option value of complex children. Pass a `value` prop or use a plain string as children to <option>."
        )));
      }), t;
    }
    function to(e, t) {
      (e.instructions & 16) === En && (e.instructions |= 16, t.bootstrapChunks.unshift(
        t.startInlineScript,
        Ti,
        fr
      ));
    }
    function tt(e, t) {
      e.push(xe("link"));
      for (var u in t)
        if (Fn.call(t, u)) {
          var y = t[u];
          if (y != null)
            switch (u) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(
                  "link is a self-closing tag and must neither have `children` nor use `dangerouslySetInnerHTML`."
                );
              default:
                Ne(e, u, y);
            }
        }
      return e.push(So), null;
    }
    function qn(e) {
      return $(e), ("" + e).replace(zc, o);
    }
    function Zt(e, t, u) {
      e.push(xe(u));
      for (var y in t)
        if (Fn.call(t, y)) {
          var C = t[y];
          if (C != null)
            switch (y) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(
                  u + " is a self-closing tag and must neither have `children` nor use `dangerouslySetInnerHTML`."
                );
              default:
                Ne(e, y, C);
            }
        }
      return e.push(So), null;
    }
    function _o(e, t) {
      e.push(xe("title"));
      var u = null, y = null, C;
      for (C in t)
        if (Fn.call(t, C)) {
          var k = t[C];
          if (k != null)
            switch (C) {
              case "children":
                u = k;
                break;
              case "dangerouslySetInnerHTML":
                y = k;
                break;
              default:
                Ne(e, C, k);
            }
        }
      return e.push(at), t = Array.isArray(u) ? 2 > u.length ? u[0] : null : u, typeof t != "function" && typeof t != "symbol" && t !== null && t !== void 0 && e.push(V(ye("" + t))), He(e, y, u), e.push(qa("title")), null;
    }
    function Bi(e, t) {
      e.push(xe("script"));
      var u = null, y = null, C;
      for (C in t)
        if (Fn.call(t, C)) {
          var k = t[C];
          if (k != null)
            switch (C) {
              case "children":
                u = k;
                break;
              case "dangerouslySetInnerHTML":
                y = k;
                break;
              default:
                Ne(e, C, k);
            }
        }
      return e.push(at), u != null && typeof u != "string" && (t = typeof u == "number" ? "a number for children" : Array.isArray(u) ? "an array for children" : "something unexpected for children", console.error(
        "A script element was rendered with %s. If script element has children it must be a single string. Consider using dangerouslySetInnerHTML or passing a plain string as children.",
        t
      )), He(e, y, u), typeof u == "string" && e.push(V(dn(u))), e.push(qa("script")), null;
    }
    function Vt(e, t, u) {
      e.push(xe(u));
      var y = u = null, C;
      for (C in t)
        if (Fn.call(t, C)) {
          var k = t[C];
          if (k != null)
            switch (C) {
              case "children":
                u = k;
                break;
              case "dangerouslySetInnerHTML":
                y = k;
                break;
              default:
                Ne(e, C, k);
            }
        }
      return e.push(at), He(e, y, u), u;
    }
    function ut(e, t, u) {
      e.push(xe(u));
      var y = u = null, C;
      for (C in t)
        if (Fn.call(t, C)) {
          var k = t[C];
          if (k != null)
            switch (C) {
              case "children":
                u = k;
                break;
              case "dangerouslySetInnerHTML":
                y = k;
                break;
              default:
                Ne(e, C, k);
            }
        }
      return e.push(at), He(e, y, u), typeof u == "string" ? (e.push(V(ye(u))), null) : u;
    }
    function xe(e) {
      var t = fc.get(e);
      if (t === void 0) {
        if (!zl.test(e)) throw Error("Invalid tag: " + e);
        t = _("<" + e), fc.set(e, t);
      }
      return t;
    }
    function Wr(e, t, u, y, C, k, z, W, ae, G) {
      Ke(t, u), t !== "input" && t !== "textarea" && t !== "select" || u == null || u.value !== null || cc || (cc = !0, t === "select" && u.multiple ? console.error(
        "`value` prop on `%s` should not be null. Consider using an empty array when `multiple` is set to `true` to clear the component or `undefined` for uncontrolled components.",
        t
      ) : console.error(
        "`value` prop on `%s` should not be null. Consider using an empty string to clear the component or `undefined` for uncontrolled components.",
        t
      ));
      e: if (t.indexOf("-") === -1) var be = !1;
      else
        switch (t) {
          case "annotation-xml":
          case "color-profile":
          case "font-face":
          case "font-face-src":
          case "font-face-uri":
          case "font-face-format":
          case "font-face-name":
          case "missing-glyph":
            be = !1;
            break e;
          default:
            be = !0;
        }
      switch (be || typeof u.is == "string" || Oe(t, u), !u.suppressContentEditableWarning && u.contentEditable && u.children != null && console.error(
        "A component is `contentEditable` and contains `children` managed by React. It is now your responsibility to guarantee that none of those nodes are unexpectedly modified or duplicated. This is probably not intentional."
      ), W.insertionMode !== Qr && W.insertionMode !== Go && t.indexOf("-") === -1 && t.toLowerCase() !== t && console.error(
        "<%s /> is using incorrect casing. Use PascalCase for React components, or lowercase for HTML elements.",
        t
      ), t) {
        case "div":
        case "span":
        case "svg":
        case "path":
          break;
        case "a":
          e.push(xe("a"));
          var he = null, Se = null, Te;
          for (Te in u)
            if (Fn.call(u, Te)) {
              var fe = u[Te];
              if (fe != null)
                switch (Te) {
                  case "children":
                    he = fe;
                    break;
                  case "dangerouslySetInnerHTML":
                    Se = fe;
                    break;
                  case "href":
                    fe === "" ? me(e, "href", "") : Ne(e, Te, fe);
                    break;
                  default:
                    Ne(e, Te, fe);
                }
            }
          if (e.push(at), He(e, Se, he), typeof he == "string") {
            e.push(V(ye(he)));
            var pn = null;
          } else pn = he;
          return pn;
        case "g":
        case "p":
        case "li":
          break;
        case "select":
          vn("select", u), de(u, "value"), de(u, "defaultValue"), u.value === void 0 || u.defaultValue === void 0 || Ll || (console.error(
            "Select elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled select element and remove one of these props. More info: https://react.dev/link/controlled-components"
          ), Ll = !0), e.push(xe("select"));
          var Bn = null, hn = null, Ye;
          for (Ye in u)
            if (Fn.call(u, Ye)) {
              var _t = u[Ye];
              if (_t != null)
                switch (Ye) {
                  case "children":
                    Bn = _t;
                    break;
                  case "dangerouslySetInnerHTML":
                    hn = _t;
                    break;
                  case "defaultValue":
                  case "value":
                    break;
                  default:
                    Ne(
                      e,
                      Ye,
                      _t
                    );
                }
            }
          return e.push(at), He(e, hn, Bn), Bn;
        case "option":
          var Gn = W.selectedValue;
          e.push(xe("option"));
          var gn = null, mr = null, jr = null, Yt = null, jt;
          for (jt in u)
            if (Fn.call(u, jt)) {
              var $n = u[jt];
              if ($n != null)
                switch (jt) {
                  case "children":
                    gn = $n;
                    break;
                  case "selected":
                    jr = $n, ks || (console.error(
                      "Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>."
                    ), ks = !0);
                    break;
                  case "dangerouslySetInnerHTML":
                    Yt = $n;
                    break;
                  case "value":
                    mr = $n;
                  default:
                    Ne(
                      e,
                      jt,
                      $n
                    );
                }
            }
          if (Gn != null) {
            if (mr !== null) {
              ke(mr, "value");
              var Pr = "" + mr;
            } else
              Yt === null || At || (At = !0, console.error(
                "Pass a `value` prop if you set dangerouslyInnerHTML so React knows which value should be selected."
              )), Pr = yt(gn);
            if (Nt(Gn)) {
              for (var Fr = 0; Fr < Gn.length; Fr++)
                if (ke(Gn[Fr], "value"), "" + Gn[Fr] === Pr) {
                  e.push(ko);
                  break;
                }
            } else
              ke(Gn, "select.value"), "" + Gn === Pr && e.push(ko);
          } else jr && e.push(ko);
          return e.push(at), He(e, Yt, gn), gn;
        case "textarea":
          vn("textarea", u), u.value === void 0 || u.defaultValue === void 0 || el || (console.error(
            "Textarea elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled textarea and remove one of these props. More info: https://react.dev/link/controlled-components"
          ), el = !0), e.push(xe("textarea"));
          var wn = null, ht = null, Un = null, Br;
          for (Br in u)
            if (Fn.call(u, Br)) {
              var Nr = u[Br];
              if (Nr != null)
                switch (Br) {
                  case "children":
                    Un = Nr;
                    break;
                  case "value":
                    wn = Nr;
                    break;
                  case "defaultValue":
                    ht = Nr;
                    break;
                  case "dangerouslySetInnerHTML":
                    throw Error(
                      "`dangerouslySetInnerHTML` does not make sense on <textarea>."
                    );
                  default:
                    Ne(
                      e,
                      Br,
                      Nr
                    );
                }
            }
          if (wn === null && ht !== null && (wn = ht), e.push(at), Un != null) {
            if (console.error(
              "Use the `defaultValue` or `value` props instead of setting children on <textarea>."
            ), wn != null)
              throw Error(
                "If you supply `defaultValue` on a <textarea>, do not pass children."
              );
            if (Nt(Un)) {
              if (1 < Un.length)
                throw Error("<textarea> can only have at most one child.");
              $(Un[0]), wn = "" + Un[0];
            }
            $(Un), wn = "" + Un;
          }
          return typeof wn == "string" && wn[0] === `
` && e.push(ms), wn !== null && (ke(wn, "value"), e.push(
            V(ye("" + wn))
          )), null;
        case "input":
          vn("input", u), e.push(xe("input"));
          var $t = null, pa = null, po = null, wa = null, Ql = null, Ta = null, bl = null, Fo = null, Jl = null, Lr;
          for (Lr in u)
            if (Fn.call(u, Lr)) {
              var er = u[Lr];
              if (er != null)
                switch (Lr) {
                  case "children":
                  case "dangerouslySetInnerHTML":
                    throw Error(
                      "input is a self-closing tag and must neither have `children` nor use `dangerouslySetInnerHTML`."
                    );
                  case "name":
                    $t = er;
                    break;
                  case "formAction":
                    pa = er;
                    break;
                  case "formEncType":
                    po = er;
                    break;
                  case "formMethod":
                    wa = er;
                    break;
                  case "formTarget":
                    Ql = er;
                    break;
                  case "defaultChecked":
                    Jl = er;
                    break;
                  case "defaultValue":
                    bl = er;
                    break;
                  case "checked":
                    Fo = er;
                    break;
                  case "value":
                    Ta = er;
                    break;
                  default:
                    Ne(
                      e,
                      Lr,
                      er
                    );
                }
            }
          pa === null || u.type === "image" || u.type === "submit" || Jr || (Jr = !0, console.error(
            'An input can only specify a formAction along with type="submit" or type="image".'
          ));
          var Rt = Tn(
            e,
            y,
            C,
            pa,
            po,
            wa,
            Ql,
            $t
          );
          return Fo === null || Jl === null || Vo || (console.error(
            "%s contains an input of type %s with both checked and defaultChecked props. Input elements must be either controlled or uncontrolled (specify either the checked prop, or the defaultChecked prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://react.dev/link/controlled-components",
            "A component",
            u.type
          ), Vo = !0), Ta === null || bl === null || Nl || (console.error(
            "%s contains an input of type %s with both value and defaultValue props. Input elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://react.dev/link/controlled-components",
            "A component",
            u.type
          ), Nl = !0), Fo !== null ? Re(e, "checked", Fo) : Jl !== null && Re(e, "checked", Jl), Ta !== null ? Ne(e, "value", Ta) : bl !== null && Ne(e, "value", bl), e.push(So), Rt != null && Rt.forEach(_e, e), null;
        case "button":
          e.push(xe("button"));
          var $r = null, Oo = null, yl = null, Ao = null, Ca = null, Mo = null, Ec = null, Gt;
          for (Gt in u)
            if (Fn.call(u, Gt)) {
              var eo = u[Gt];
              if (eo != null)
                switch (Gt) {
                  case "children":
                    $r = eo;
                    break;
                  case "dangerouslySetInnerHTML":
                    Oo = eo;
                    break;
                  case "name":
                    yl = eo;
                    break;
                  case "formAction":
                    Ao = eo;
                    break;
                  case "formEncType":
                    Ca = eo;
                    break;
                  case "formMethod":
                    Mo = eo;
                    break;
                  case "formTarget":
                    Ec = eo;
                    break;
                  default:
                    Ne(
                      e,
                      Gt,
                      eo
                    );
                }
            }
          Ao === null || u.type == null || u.type === "submit" || Jr || (Jr = !0, console.error(
            'A button can only specify a formAction along with type="submit" or no type.'
          ));
          var Za = Tn(
            e,
            y,
            C,
            Ao,
            Ca,
            Mo,
            Ec,
            yl
          );
          if (e.push(at), Za != null && Za.forEach(_e, e), He(e, Oo, $r), typeof $r == "string") {
            e.push(
              V(ye($r))
            );
            var Va = null;
          } else Va = $r;
          return Va;
        case "form":
          e.push(xe("form"));
          var Ea = null, vl = null, Jo = null, Oi = null, Ai = null, Mi = null, Ii;
          for (Ii in u)
            if (Fn.call(u, Ii)) {
              var Io = u[Ii];
              if (Io != null)
                switch (Ii) {
                  case "children":
                    Ea = Io;
                    break;
                  case "dangerouslySetInnerHTML":
                    vl = Io;
                    break;
                  case "action":
                    Jo = Io;
                    break;
                  case "encType":
                    Oi = Io;
                    break;
                  case "method":
                    Ai = Io;
                    break;
                  case "target":
                    Mi = Io;
                    break;
                  default:
                    Ne(
                      e,
                      Ii,
                      Io
                    );
                }
            }
          var xa = null, xc = null;
          if (typeof Jo == "function") {
            Oi === null && Ai === null || ua || (ua = !0, console.error(
              "Cannot specify a encType or method for a form that specifies a function as the action. React provides those automatically. They will get overridden."
            )), Mi === null || wi || (wi = !0, console.error(
              "Cannot specify a target for a form that specifies a function as the action. The function will always be executed in the same window."
            ));
            var Ko = fn(
              y,
              Jo
            );
            Ko !== null ? (Jo = Ko.action || "", Oi = Ko.encType, Ai = Ko.method, Mi = Ko.target, xa = Ko.data, xc = Ko.name) : (e.push(
              Wt,
              V("action"),
              Sr,
              Zo,
              ot
            ), Mi = Ai = Oi = Jo = null, to(y, C));
          }
          if (Jo != null && Ne(e, "action", Jo), Oi != null && Ne(e, "encType", Oi), Ai != null && Ne(e, "method", Ai), Mi != null && Ne(e, "target", Mi), e.push(at), xc !== null && (e.push(pi), me(e, "name", xc), e.push(So), xa != null && xa.forEach(
            _e,
            e
          )), He(e, vl, Ea), typeof Ea == "string") {
            e.push(
              V(ye(Ea))
            );
            var Kl = null;
          } else Kl = Ea;
          return Kl;
        case "menuitem":
          e.push(xe("menuitem"));
          for (var ql in u)
            if (Fn.call(u, ql)) {
              var Vc = u[ql];
              if (Vc != null)
                switch (ql) {
                  case "children":
                  case "dangerouslySetInnerHTML":
                    throw Error(
                      "menuitems cannot have `children` nor `dangerouslySetInnerHTML`."
                    );
                  default:
                    Ne(
                      e,
                      ql,
                      Vc
                    );
                }
            }
          return e.push(at), null;
        case "object":
          e.push(xe("object"));
          var Qa = null, Rc = null, wo;
          for (wo in u)
            if (Fn.call(u, wo)) {
              var Ra = u[wo];
              if (Ra != null)
                switch (wo) {
                  case "children":
                    Qa = Ra;
                    break;
                  case "dangerouslySetInnerHTML":
                    Rc = Ra;
                    break;
                  case "data":
                    ke(Ra, "data");
                    var St = Le("" + Ra);
                    if (St === "") {
                      console.error(
                        'An empty string ("") was passed to the %s attribute. To fix this, either do not render the element at all or pass null to %s instead of an empty string.',
                        wo,
                        wo
                      );
                      break;
                    }
                    e.push(
                      Wt,
                      V("data"),
                      Sr,
                      V(ye(St)),
                      ot
                    );
                    break;
                  default:
                    Ne(
                      e,
                      wo,
                      Ra
                    );
                }
            }
          if (e.push(at), He(e, Rc, Qa), typeof Qa == "string") {
            e.push(
              V(ye(Qa))
            );
            var pr = null;
          } else pr = Qa;
          return pr;
        case "title":
          var no = W.insertionMode, Qc = !!(W.tagScope & 1);
          if (Fn.call(u, "children")) {
            var Sa = u.children, Di = Array.isArray(Sa) ? 2 > Sa.length ? Sa[0] : null : Sa;
            Array.isArray(Sa) && 1 < Sa.length ? console.error(
              "React expects the `children` prop of <title> tags to be a string, number, bigint, or object with a novel `toString` method but found an Array with length %s instead. Browsers treat all child Nodes of <title> tags as Text content and React expects to be able to convert `children` of <title> tags to a single string value which is why Arrays of length greater than 1 are not supported. When using JSX it can be common to combine text nodes and value nodes. For example: <title>hello {nameOfUser}</title>. While not immediately apparent, `children` in this case is an Array with length 2. If your `children` prop is using this form try rewriting it using a template string: <title>{`hello ${nameOfUser}`}</title>.",
              Sa.length
            ) : typeof Di == "function" || typeof Di == "symbol" ? console.error(
              "React expect children of <title> tags to be a string, number, bigint, or object with a novel `toString` method but found %s instead. Browsers treat all child Nodes of <title> tags as Text content and React expects to be able to convert children of <title> tags to a single string value.",
              typeof Di == "function" ? "a Function" : "a Sybmol"
            ) : Di && Di.toString === {}.toString && (Di.$$typeof != null ? console.error(
              "React expects the `children` prop of <title> tags to be a string, number, bigint, or object with a novel `toString` method but found an object that appears to be a React element which never implements a suitable `toString` method. Browsers treat all child Nodes of <title> tags as Text content and React expects to be able to convert children of <title> tags to a single string value which is why rendering React elements is not supported. If the `children` of <title> is a React Component try moving the <title> tag into that component. If the `children` of <title> is some HTML markup change it to be Text only to be valid HTML."
            ) : console.error(
              "React expects the `children` prop of <title> tags to be a string, number, bigint, or object with a novel `toString` method but found an object that does not implement a suitable `toString` method. Browsers treat all child Nodes of <title> tags as Text content and React expects to be able to convert children of <title> tags to a single string value. Using the default `toString` method available on every object is almost certainly an error. Consider whether the `children` of this <title> is an object in error and change it to a string or number value if so. Otherwise implement a `toString` method that React can use to produce a valid <title>."
            ));
          }
          if (no === Qr || Qc || u.itemProp != null)
            var pl = _o(
              e,
              u
            );
          else
            G ? pl = null : (_o(C.hoistableChunks, u), pl = void 0);
          return pl;
        case "link":
          var vu = u.rel, nr = u.href, Ys = u.precedence;
          if (W.insertionMode === Qr || W.tagScope & 1 || u.itemProp != null || typeof vu != "string" || typeof nr != "string" || nr === "") {
            vu === "stylesheet" && typeof u.precedence == "string" && (typeof nr == "string" && nr || console.error(
              'React encountered a `<link rel="stylesheet" .../>` with a `precedence` prop and expected the `href` prop to be a non-empty string but ecountered %s instead. If your intent was to have React hoist and deduplciate this stylesheet using the `precedence` prop ensure there is a non-empty string `href` prop as well, otherwise remove the `precedence` prop.',
              nr === null ? "`null`" : nr === void 0 ? "`undefined`" : nr === "" ? "an empty string" : 'something with type "' + typeof nr + '"'
            )), tt(e, u);
            var jl = null;
          } else if (u.rel === "stylesheet")
            if (typeof Ys != "string" || u.disabled != null || u.onLoad || u.onError) {
              if (typeof Ys == "string") {
                if (u.disabled != null)
                  console.error(
                    'React encountered a `<link rel="stylesheet" .../>` with a `precedence` prop and a `disabled` prop. The presence of the `disabled` prop indicates an intent to manage the stylesheet active state from your from your Component code and React will not hoist or deduplicate this stylesheet. If your intent was to have React hoist and deduplciate this stylesheet using the `precedence` prop remove the `disabled` prop, otherwise remove the `precedence` prop.'
                  );
                else if (u.onLoad || u.onError) {
                  var wl = u.onLoad && u.onError ? "`onLoad` and `onError` props" : u.onLoad ? "`onLoad` prop" : "`onError` prop";
                  console.error(
                    'React encountered a `<link rel="stylesheet" .../>` with a `precedence` prop and %s. The presence of loading and error handlers indicates an intent to manage the stylesheet loading state from your from your Component code and React will not hoist or deduplicate this stylesheet. If your intent was to have React hoist and deduplciate this stylesheet using the `precedence` prop remove the %s, otherwise remove the `precedence` prop.',
                    wl,
                    wl
                  );
                }
              }
              jl = tt(
                e,
                u
              );
            } else {
              var Gs = C.styles.get(Ys), $l = y.styleResources.hasOwnProperty(
                nr
              ) ? y.styleResources[nr] : void 0;
              if ($l !== yn) {
                y.styleResources[nr] = yn, Gs || (Gs = {
                  precedence: V(ye(Ys)),
                  rules: [],
                  hrefs: [],
                  sheets: /* @__PURE__ */ new Map()
                }, C.styles.set(Ys, Gs));
                var Sc = {
                  state: go,
                  props: rt({}, u, {
                    "data-precedence": u.precedence,
                    precedence: null
                  })
                };
                if ($l) {
                  $l.length === 2 && Hn(Sc.props, $l);
                  var Xs = C.preloads.stylesheets.get(nr);
                  Xs && 0 < Xs.length ? Xs.length = 0 : Sc.state = bc;
                }
                Gs.sheets.set(nr, Sc), z && z.stylesheets.add(Sc);
              } else if (Gs) {
                var Au = Gs.sheets.get(nr);
                Au && z && z.stylesheets.add(Au);
              }
              ae && e.push(Xo), jl = null;
            }
          else
            u.onLoad || u.onError ? jl = tt(
              e,
              u
            ) : (ae && e.push(Xo), jl = G ? null : tt(C.hoistableChunks, u));
          return jl;
        case "script":
          var Zs = u.async;
          if (typeof u.src != "string" || !u.src || !Zs || typeof Zs == "function" || typeof Zs == "symbol" || u.onLoad || u.onError || W.insertionMode === Qr || W.tagScope & 1 || u.itemProp != null)
            var es = Bi(
              e,
              u
            );
          else {
            var Tl = u.src;
            if (u.type === "module")
              var Ja = y.moduleScriptResources, Cl = C.preloads.moduleScripts;
            else
              Ja = y.scriptResources, Cl = C.preloads.scripts;
            var wr = Ja.hasOwnProperty(Tl) ? Ja[Tl] : void 0;
            if (wr !== yn) {
              Ja[Tl] = yn;
              var tr = u;
              if (wr) {
                wr.length === 2 && (tr = rt({}, u), Hn(tr, wr));
                var Mu = Cl.get(Tl);
                Mu && (Mu.length = 0);
              }
              var Vs = [];
              C.scripts.add(Vs), Bi(Vs, tr);
            }
            ae && e.push(Xo), es = null;
          }
          return es;
        case "style":
          var Iu = W.insertionMode, ns = !!(W.tagScope & 1);
          if (Fn.call(u, "children")) {
            var ts = u.children, pu = Array.isArray(ts) ? 2 > ts.length ? ts[0] : null : ts;
            (typeof pu == "function" || typeof pu == "symbol" || Array.isArray(pu)) && console.error(
              "React expect children of <style> tags to be a string, number, or object with a `toString` method but found %s instead. In browsers style Elements can only have `Text` Nodes as children.",
              typeof pu == "function" ? "a Function" : typeof pu == "symbol" ? "a Sybmol" : "an Array"
            );
          }
          var rs = u.precedence, _i = u.href;
          if (Iu === Qr || ns || u.itemProp != null || typeof rs != "string" || typeof _i != "string" || _i === "") {
            e.push(xe("style"));
            var kc = null, $u = null, Jc;
            for (Jc in u)
              if (Fn.call(u, Jc)) {
                var Du = u[Jc];
                if (Du != null)
                  switch (Jc) {
                    case "children":
                      kc = Du;
                      break;
                    case "dangerouslySetInnerHTML":
                      $u = Du;
                      break;
                    default:
                      Ne(
                        e,
                        Jc,
                        Du
                      );
                  }
              }
            e.push(at);
            var Kc = Array.isArray(kc) ? 2 > kc.length ? kc[0] : null : kc;
            typeof Kc != "function" && typeof Kc != "symbol" && Kc !== null && Kc !== void 0 && e.push(
              V(qn(Kc))
            ), He(
              e,
              $u,
              kc
            ), e.push(qa("style"));
            var ef = null;
          } else {
            _i.includes(" ") && console.error(
              'React expected the `href` prop for a <style> tag opting into hoisting semantics using the `precedence` prop to not have any spaces but ecountered spaces instead. using spaces in this prop will cause hydration of this style to fail on the client. The href for the <style> where this ocurred is "%s".',
              _i
            );
            var Qs = C.styles.get(rs), nf = y.styleResources.hasOwnProperty(_i) ? y.styleResources[_i] : void 0;
            if (nf !== yn) {
              y.styleResources[_i] = yn, nf && console.error(
                'React encountered a hoistable style tag for the same href as a preload: "%s". When using a style tag to inline styles you should not also preload it as a stylsheet.',
                _i
              ), Qs ? Qs.hrefs.push(
                V(ye(_i))
              ) : (Qs = {
                precedence: V(
                  ye(rs)
                ),
                rules: [],
                hrefs: [V(ye(_i))],
                sheets: /* @__PURE__ */ new Map()
              }, C.styles.set(
                rs,
                Qs
              ));
              var qc = Qs.rules, Do = null, tf = null, Rf;
              for (Rf in u)
                if (Fn.call(u, Rf)) {
                  var td = u[Rf];
                  if (td != null)
                    switch (Rf) {
                      case "children":
                        Do = td;
                        break;
                      case "dangerouslySetInnerHTML":
                        tf = td;
                    }
                }
              var rf = Array.isArray(Do) ? 2 > Do.length ? Do[0] : null : Do;
              typeof rf != "function" && typeof rf != "symbol" && rf !== null && rf !== void 0 && qc.push(
                V(qn(rf))
              ), He(qc, tf, Do);
            }
            Qs && z && z.styles.add(Qs), ae && e.push(Xo), ef = void 0;
          }
          return ef;
        case "meta":
          if (W.insertionMode === Qr || W.tagScope & 1 || u.itemProp != null)
            var Ud = Zt(
              e,
              u,
              "meta"
            );
          else
            ae && e.push(Xo), Ud = G ? null : typeof u.charSet == "string" ? Zt(C.charsetChunks, u, "meta") : u.name === "viewport" ? Zt(C.viewportChunks, u, "meta") : Zt(
              C.hoistableChunks,
              u,
              "meta"
            );
          return Ud;
        case "listing":
        case "pre":
          e.push(xe(t));
          var of = null, af = null, lf;
          for (lf in u)
            if (Fn.call(u, lf)) {
              var Sf = u[lf];
              if (Sf != null)
                switch (lf) {
                  case "children":
                    of = Sf;
                    break;
                  case "dangerouslySetInnerHTML":
                    af = Sf;
                    break;
                  default:
                    Ne(
                      e,
                      lf,
                      Sf
                    );
                }
            }
          if (e.push(at), af != null) {
            if (of != null)
              throw Error(
                "Can only set one of `children` or `props.dangerouslySetInnerHTML`."
              );
            if (typeof af != "object" || !("__html" in af))
              throw Error(
                "`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://react.dev/link/dangerously-set-inner-html for more information."
              );
            var wu = af.__html;
            wu != null && (typeof wu == "string" && 0 < wu.length && wu[0] === `
` ? e.push(ms, V(wu)) : ($(wu), e.push(V("" + wu))));
          }
          return typeof of == "string" && of[0] === `
` && e.push(ms), of;
        case "img":
          var ka = u.src, qo = u.srcSet;
          if (!(u.loading === "lazy" || !ka && !qo || typeof ka != "string" && ka != null || typeof qo != "string" && qo != null) && u.fetchPriority !== "low" && !(W.tagScope & 3) && (typeof ka != "string" || ka[4] !== ":" || ka[0] !== "d" && ka[0] !== "D" || ka[1] !== "a" && ka[1] !== "A" || ka[2] !== "t" && ka[2] !== "T" || ka[3] !== "a" && ka[3] !== "A") && (typeof qo != "string" || qo[4] !== ":" || qo[0] !== "d" && qo[0] !== "D" || qo[1] !== "a" && qo[1] !== "A" || qo[2] !== "t" && qo[2] !== "T" || qo[3] !== "a" && qo[3] !== "A")) {
            var Hd = typeof u.sizes == "string" ? u.sizes : void 0, Yu = qo ? qo + `
` + (Hd || "") : ka, rd = C.preloads.images, _u = rd.get(Yu);
            if (_u)
              (u.fetchPriority === "high" || 10 > C.highImagePreloads.size) && (rd.delete(Yu), C.highImagePreloads.add(_u));
            else if (!y.imageResources.hasOwnProperty(Yu)) {
              y.imageResources[Yu] = ln;
              var od = u.crossOrigin, Yd = typeof od == "string" ? od === "use-credentials" ? od : "" : void 0, Bu = C.headers, ad;
              Bu && 0 < Bu.remainingCapacity && typeof u.srcSet != "string" && (u.fetchPriority === "high" || 500 > Bu.highImagePreloads.length) && (ad = ei(ka, "image", {
                imageSrcSet: u.srcSet,
                imageSizes: u.sizes,
                crossOrigin: Yd,
                integrity: u.integrity,
                nonce: u.nonce,
                type: u.type,
                fetchPriority: u.fetchPriority,
                referrerPolicy: u.refererPolicy
              }), 0 <= (Bu.remainingCapacity -= ad.length + 2)) ? (C.resets.image[Yu] = ln, Bu.highImagePreloads && (Bu.highImagePreloads += ", "), Bu.highImagePreloads += ad) : (_u = [], tt(_u, {
                rel: "preload",
                as: "image",
                href: qo ? void 0 : ka,
                imageSrcSet: qo,
                imageSizes: Hd,
                crossOrigin: Yd,
                integrity: u.integrity,
                type: u.type,
                fetchPriority: u.fetchPriority,
                referrerPolicy: u.referrerPolicy
              }), u.fetchPriority === "high" || 10 > C.highImagePreloads.size ? C.highImagePreloads.add(_u) : (C.bulkPreloads.add(_u), rd.set(Yu, _u)));
            }
          }
          return Zt(e, u, "img");
        case "base":
        case "area":
        case "br":
        case "col":
        case "embed":
        case "hr":
        case "keygen":
        case "param":
        case "source":
        case "track":
        case "wbr":
          return Zt(e, u, t);
        case "annotation-xml":
        case "color-profile":
        case "font-face":
        case "font-face-src":
        case "font-face-uri":
        case "font-face-format":
        case "font-face-name":
        case "missing-glyph":
          break;
        case "head":
          if (W.insertionMode < Tt) {
            var id = k || C.preamble;
            if (id.headChunks)
              throw Error("The `<head>` tag may only be rendered once.");
            id.headChunks = [];
            var Gd = Vt(
              id.headChunks,
              u,
              "head"
            );
          } else
            Gd = ut(
              e,
              u,
              "head"
            );
          return Gd;
        case "body":
          if (W.insertionMode < Tt) {
            var ld = k || C.preamble;
            if (ld.bodyChunks)
              throw Error("The `<body>` tag may only be rendered once.");
            ld.bodyChunks = [];
            var Xd = Vt(
              ld.bodyChunks,
              u,
              "body"
            );
          } else
            Xd = ut(
              e,
              u,
              "body"
            );
          return Xd;
        case "html":
          if (W.insertionMode === xo) {
            var sd = k || C.preamble;
            if (sd.htmlChunks)
              throw Error("The `<html>` tag may only be rendered once.");
            sd.htmlChunks = [Ut];
            var Zd = Vt(
              sd.htmlChunks,
              u,
              "html"
            );
          } else
            Zd = ut(
              e,
              u,
              "html"
            );
          return Zd;
        default:
          if (t.indexOf("-") !== -1) {
            e.push(xe(t));
            var cd = null, Vd = null, Gu;
            for (Gu in u)
              if (Fn.call(u, Gu)) {
                var Js = u[Gu];
                if (Js != null) {
                  var Qd = Gu;
                  switch (Gu) {
                    case "children":
                      cd = Js;
                      break;
                    case "dangerouslySetInnerHTML":
                      Vd = Js;
                      break;
                    case "style":
                      Qe(e, Js);
                      break;
                    case "suppressContentEditableWarning":
                    case "suppressHydrationWarning":
                    case "ref":
                      break;
                    case "className":
                      Qd = "class";
                    default:
                      if (Xe(Gu) && typeof Js != "function" && typeof Js != "symbol" && Js !== !1) {
                        if (Js === !0)
                          Js = "";
                        else if (typeof Js == "object")
                          continue;
                        e.push(
                          Wt,
                          V(Qd),
                          Sr,
                          V(
                            ye(Js)
                          ),
                          ot
                        );
                      }
                  }
                }
              }
            return e.push(at), He(
              e,
              Vd,
              cd
            ), cd;
          }
      }
      return ut(e, u, t);
    }
    function qa(e) {
      var t = tl.get(e);
      return t === void 0 && (t = _("</" + e + ">"), tl.set(e, t)), t;
    }
    function ro(e, t) {
      e = e.preamble, e.htmlChunks === null && t.htmlChunks && (e.htmlChunks = t.htmlChunks, t.contribution |= 1), e.headChunks === null && t.headChunks && (e.headChunks = t.headChunks, t.contribution |= 4), e.bodyChunks === null && t.bodyChunks && (e.bodyChunks = t.bodyChunks, t.contribution |= 2);
    }
    function Qt(e, t) {
      t = t.bootstrapChunks;
      for (var u = 0; u < t.length - 1; u++)
        M(e, t[u]);
      return u < t.length ? (u = t[u], t.length = 0, J(e, u)) : !0;
    }
    function Ks(e, t, u) {
      if (M(e, Fs), u === null)
        throw Error(
          "An ID must have been assigned before we can complete the boundary."
        );
      return M(e, t.boundaryPrefix), M(e, V(u.toString(16))), J(e, ho);
    }
    function qs(e, t) {
      t = t.contribution, t !== hr && (M(e, hc), M(e, V("" + t)), M(e, Ms));
    }
    function Ni(e, t, u, y) {
      switch (u.insertionMode) {
        case xo:
        case Vr:
        case uo:
        case Tt:
          return M(e, Qo), M(e, t.segmentPrefix), M(e, V(y.toString(16))), J(e, Wa);
        case Qr:
          return M(e, ol), M(e, t.segmentPrefix), M(e, V(y.toString(16))), J(e, Is);
        case Go:
          return M(e, xi), M(e, t.segmentPrefix), M(e, V(y.toString(16))), J(e, Ri);
        case Ro:
          return M(e, al), M(e, t.segmentPrefix), M(e, V(y.toString(16))), J(e, il);
        case fo:
          return M(e, a), M(e, t.segmentPrefix), M(e, V(y.toString(16))), J(e, l);
        case uc:
          return M(e, w), M(e, t.segmentPrefix), M(e, V(y.toString(16))), J(e, x);
        case Ba:
          return M(e, L), M(e, t.segmentPrefix), M(e, V(y.toString(16))), J(e, ne);
        default:
          throw Error("Unknown insertion mode. This is a bug in React.");
      }
    }
    function js(e, t) {
      switch (t.insertionMode) {
        case xo:
        case Vr:
        case uo:
        case Tt:
          return J(e, Ul);
        case Qr:
          return J(e, Hl);
        case Go:
          return J(e, Si);
        case Ro:
          return J(e, Ds);
        case fo:
          return J(e, h);
        case uc:
          return J(e, F);
        case Ba:
          return J(e, U);
        default:
          throw Error("Unknown insertion mode. This is a bug in React.");
      }
    }
    function ma(e) {
      return JSON.stringify(e).replace(
        it,
        function(t) {
          switch (t) {
            case "<":
              return "\\u003c";
            case "\u2028":
              return "\\u2028";
            case "\u2029":
              return "\\u2029";
            default:
              throw Error(
                "escapeJSStringsForInstructionScripts encountered a match it does not know how to replace. this means the match regex and the replacement characters are no longer in sync. This is a bug in React"
              );
          }
        }
      );
    }
    function ja(e) {
      return JSON.stringify(e).replace(
        yr,
        function(t) {
          switch (t) {
            case "&":
              return "\\u0026";
            case ">":
              return "\\u003e";
            case "<":
              return "\\u003c";
            case "\u2028":
              return "\\u2028";
            case "\u2029":
              return "\\u2029";
            default:
              throw Error(
                "escapeJSObjectForInstructionScripts encountered a match it does not know how to replace. this means the match regex and the replacement characters are no longer in sync. This is a bug in React"
              );
          }
        }
      );
    }
    function ss(e) {
      var t = e.rules, u = e.hrefs;
      0 < t.length && u.length === 0 && console.error(
        "React expected to have at least one href for an a hoistable style but found none. This is a bug in React."
      );
      var y = 0;
      if (u.length) {
        for (M(this, ll), M(this, e.precedence), M(this, Ua); y < u.length - 1; y++)
          M(this, u[y]), M(this, uu);
        for (M(this, u[y]), M(this, Ha), y = 0; y < t.length; y++) M(this, t[y]);
        Uc = J(
          this,
          sl
        ), Ya = !0, t.length = 0, u.length = 0;
      }
    }
    function Rl(e) {
      return e.state !== yc ? Ya = !0 : !1;
    }
    function Li(e, t, u) {
      return Ya = !1, Uc = !0, t.styles.forEach(ss, e), t.stylesheets.forEach(Rl), Ya && (u.stylesToHoist = !0), Uc;
    }
    function Rn(e) {
      for (var t = 0; t < e.length; t++) M(this, e[t]);
      e.length = 0;
    }
    function Ur(e) {
      tt(ki, e.props);
      for (var t = 0; t < ki.length; t++)
        M(this, ki[t]);
      ki.length = 0, e.state = yc;
    }
    function cs(e) {
      var t = 0 < e.sheets.size;
      e.sheets.forEach(Ur, this), e.sheets.clear();
      var u = e.rules, y = e.hrefs;
      if (!t || y.length) {
        if (M(this, mu), M(this, e.precedence), e = 0, y.length) {
          for (M(this, Pu); e < y.length - 1; e++)
            M(this, y[e]), M(this, uu);
          M(this, y[e]);
        }
        for (M(this, gc), e = 0; e < u.length; e++)
          M(this, u[e]);
        M(this, Fu), u.length = 0, y.length = 0;
      }
    }
    function $a(e) {
      if (e.state === go) {
        e.state = bc;
        var t = e.props;
        for (tt(ki, {
          rel: "preload",
          as: "style",
          href: e.props.href,
          crossOrigin: t.crossOrigin,
          fetchPriority: t.fetchPriority,
          integrity: t.integrity,
          media: t.media,
          hrefLang: t.hrefLang,
          referrerPolicy: t.referrerPolicy
        }), e = 0; e < ki.length; e++)
          M(this, ki[e]);
        ki.length = 0;
      }
    }
    function Bo(e) {
      e.sheets.forEach($a, this), e.sheets.clear();
    }
    function $s(e, t) {
      M(e, fu);
      var u = fu;
      t.stylesheets.forEach(function(y) {
        if (y.state !== yc)
          if (y.state === Hc)
            M(e, u), y = y.props.href, ke(y, "href"), M(
              e,
              V(
                ja("" + y)
              )
            ), M(e, du), u = da;
          else {
            M(e, u);
            var C = y.props["data-precedence"], k = y.props, z = Le("" + y.props.href);
            M(
              e,
              V(ja(z))
            ), ke(C, "precedence"), C = "" + C, M(e, qr), M(
              e,
              V(ja(C))
            );
            for (var W in k)
              if (Fn.call(k, W) && (C = k[W], C != null))
                switch (W) {
                  case "href":
                  case "rel":
                  case "precedence":
                  case "data-precedence":
                    break;
                  case "children":
                  case "dangerouslySetInnerHTML":
                    throw Error(
                      "link is a self-closing tag and must neither have `children` nor use `dangerouslySetInnerHTML`."
                    );
                  default:
                    Pc(
                      e,
                      W,
                      C
                    );
                }
            M(e, du), u = da, y.state = Hc;
          }
      }), M(e, du);
    }
    function Pc(e, t, u) {
      var y = t.toLowerCase();
      switch (typeof u) {
        case "function":
        case "symbol":
          return;
      }
      switch (t) {
        case "innerHTML":
        case "dangerouslySetInnerHTML":
        case "suppressContentEditableWarning":
        case "suppressHydrationWarning":
        case "style":
        case "ref":
          return;
        case "className":
          y = "class", ke(u, y), t = "" + u;
          break;
        case "hidden":
          if (u === !1) return;
          t = "";
          break;
        case "src":
        case "href":
          u = Le(u), ke(u, y), t = "" + u;
          break;
        default:
          if (2 < t.length && (t[0] === "o" || t[0] === "O") && (t[1] === "n" || t[1] === "N") || !Xe(t))
            return;
          ke(u, y), t = "" + u;
      }
      M(e, qr), M(
        e,
        V(ja(y))
      ), M(e, qr), M(
        e,
        V(ja(t))
      );
    }
    function ec() {
      return { styles: /* @__PURE__ */ new Set(), stylesheets: /* @__PURE__ */ new Set() };
    }
    function us(e, t, u, y) {
      (e.scriptResources.hasOwnProperty(u) || e.moduleScriptResources.hasOwnProperty(u)) && console.error(
        'Internal React Error: React expected bootstrap script or module with src "%s" to not have been preloaded already. please file an issue',
        u
      ), e.scriptResources[u] = yn, e.moduleScriptResources[u] = yn, e = [], tt(e, y), t.bootstrapScripts.add(e);
    }
    function Hn(e, t) {
      e.crossOrigin == null && (e.crossOrigin = t[0]), e.integrity == null && (e.integrity = t[1]);
    }
    function ei(e, t, u) {
      e = Jt(e), t = Pt(t, "as"), t = "<" + e + '>; rel=preload; as="' + t + '"';
      for (var y in u)
        Fn.call(u, y) && (e = u[y], typeof e == "string" && (t += "; " + y.toLowerCase() + '="' + Pt(
          e,
          y
        ) + '"'));
      return t;
    }
    function Jt(e) {
      return ke(e, "href"), ("" + e).replace(
        Yc,
        oo
      );
    }
    function oo(e) {
      switch (e) {
        case "<":
          return "%3C";
        case ">":
          return "%3E";
        case `
`:
          return "%0A";
        case "\r":
          return "%0D";
        default:
          throw Error(
            "escapeLinkHrefForHeaderContextReplacer encountered a match it does not know how to replace. this means the match regex and the replacement characters are no longer in sync. This is a bug in React"
          );
      }
    }
    function Pt(e, t) {
      return Me(e) && (console.error(
        "The provided `%s` option is an unsupported type %s. This value must be coerced to a string before using it here.",
        t,
        Pe(e)
      ), je(e)), ("" + e).replace(
        Kn,
        zi
      );
    }
    function zi(e) {
      switch (e) {
        case '"':
          return "%22";
        case "'":
          return "%27";
        case ";":
          return "%3B";
        case ",":
          return "%2C";
        case `
`:
          return "%0A";
        case "\r":
          return "%0D";
        default:
          throw Error(
            "escapeStringForLinkHeaderQuotedParamValueContextReplacer encountered a match it does not know how to replace. this means the match regex and the replacement characters are no longer in sync. This is a bug in React"
          );
      }
    }
    function ao(e) {
      this.styles.add(e);
    }
    function Bt(e) {
      this.stylesheets.add(e);
    }
    function Qn(e) {
      if (e == null) return null;
      if (typeof e == "function")
        return e.$$typeof === Yl ? null : e.displayName || e.name || null;
      if (typeof e == "string") return e;
      switch (e) {
        case sa:
          return "Fragment";
        case ji:
          return "Profiler";
        case ws:
          return "StrictMode";
        case Ml:
          return "Suspense";
        case Uo:
          return "SuspenseList";
        case yi:
          return "Activity";
      }
      if (typeof e == "object")
        switch (typeof e.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), e.$$typeof) {
          case zo:
            return "Portal";
          case Wo:
            return (e.displayName || "Context") + ".Provider";
          case gi:
            return (e._context.displayName || "Context") + ".Consumer";
          case bi:
            var t = e.render;
            return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
          case Jn:
            return t = e.displayName || null, t !== null ? t : Qn(e.type) || "Memo";
          case Ft:
            t = e._payload, e = e._init;
            try {
              return Qn(e(t));
            } catch {
            }
        }
      return null;
    }
    function ni(e, t) {
      if (e !== t) {
        e.context._currentValue = e.parentValue, e = e.parent;
        var u = t.parent;
        if (e === null) {
          if (u !== null)
            throw Error(
              "The stacks must reach the root at the same time. This is a bug in React."
            );
        } else {
          if (u === null)
            throw Error(
              "The stacks must reach the root at the same time. This is a bug in React."
            );
          ni(e, u);
        }
        t.context._currentValue = t.value;
      }
    }
    function Hr(e) {
      e.context._currentValue = e.parentValue, e = e.parent, e !== null && Hr(e);
    }
    function io(e) {
      var t = e.parent;
      t !== null && io(t), e.context._currentValue = e.value;
    }
    function Fc(e, t) {
      if (e.context._currentValue = e.parentValue, e = e.parent, e === null)
        throw Error(
          "The depth must equal at least at zero before reaching the root. This is a bug in React."
        );
      e.depth === t.depth ? ni(e, t) : Fc(e, t);
    }
    function Sl(e, t) {
      var u = t.parent;
      if (u === null)
        throw Error(
          "The depth must equal at least at zero before reaching the root. This is a bug in React."
        );
      e.depth === u.depth ? ni(e, u) : Sl(e, u), t.context._currentValue = t.value;
    }
    function Cn(e) {
      var t = ha;
      t !== e && (t === null ? io(e) : e === null ? Hr(t) : t.depth === e.depth ? ni(t, e) : t.depth > e.depth ? Fc(t, e) : Sl(t, e), ha = e);
    }
    function Zn(e) {
      if (e !== null && typeof e != "function") {
        var t = String(e);
        ba.has(t) || (ba.add(t), console.error(
          "Expected the last optional `callback` argument to be a function. Instead received: %s.",
          e
        ));
      }
    }
    function Wi(e, t) {
      e = (e = e.constructor) && Qn(e) || "ReactClass";
      var u = e + "." + t;
      ul[u] || (console.error(
        `Can only update a mounting component. This usually means you called %s() outside componentWillMount() on the server. This is a no-op.

Please check the code for the %s component.`,
        t,
        e
      ), ul[u] = !0);
    }
    function or(e, t, u) {
      var y = e.id;
      e = e.overflow;
      var C = 32 - pc(y) - 1;
      y &= ~(1 << C), u += 1;
      var k = 32 - pc(t) + C;
      if (30 < k) {
        var z = C - C % 5;
        return k = (y & (1 << z) - 1).toString(32), y >>= z, C -= z, {
          id: 1 << 32 - pc(t) + C | u << C | y,
          overflow: k + e
        };
      }
      return {
        id: 1 << k | u << C | y,
        overflow: e
      };
    }
    function Ui(e) {
      return e >>>= 0, e === 0 ? 32 : 31 - (wc(e) / Ou | 0) | 0;
    }
    function jo() {
    }
    function au(e, t, u) {
      switch (u = e[u], u === void 0 ? e.push(t) : u !== t && (t.then(jo, jo), t = u), t.status) {
        case "fulfilled":
          return t.value;
        case "rejected":
          throw t.reason;
        default:
          switch (typeof t.status == "string" ? t.then(jo, jo) : (e = t, e.status = "pending", e.then(
            function(y) {
              if (t.status === "pending") {
                var C = t;
                C.status = "fulfilled", C.value = y;
              }
            },
            function(y) {
              if (t.status === "pending") {
                var C = t;
                C.status = "rejected", C.reason = y;
              }
            }
          )), t.status) {
            case "fulfilled":
              return t.value;
            case "rejected":
              throw t.reason;
          }
          throw dl = t, ya;
      }
    }
    function Hi() {
      if (dl === null)
        throw Error(
          "Expected a suspended thenable. This is a bug in React. Please file an issue."
        );
      var e = dl;
      return dl = null, e;
    }
    function iu(e, t) {
      return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
    }
    function $o() {
      if (Ga === null)
        throw Error(
          `Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://react.dev/link/invalid-hook-call for tips about how to debug and fix this problem.`
        );
      return lt && console.error(
        "Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://react.dev/link/rules-of-hooks"
      ), Ga;
    }
    function ar() {
      if (0 < vo)
        throw Error("Rendered more hooks than during the previous render");
      return { memoizedState: null, queue: null, next: null };
    }
    function nc() {
      return _n === null ? Ns === null ? (Pi = !1, Ns = _n = ar()) : (Pi = !0, _n = Ns) : _n.next === null ? (Pi = !1, _n = _n.next = ar()) : (Pi = !0, _n = _n.next), _n;
    }
    function No() {
      var e = zs;
      return zs = null, e;
    }
    function Yr() {
      lt = !1, Xa = Xc = Bs = Ga = null, Xl = !1, Ns = null, vo = 0, _n = xt = null;
    }
    function kl(e) {
      return lt && console.error(
        "Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo()."
      ), e._currentValue;
    }
    function ti(e, t) {
      return typeof t == "function" ? t(e) : t;
    }
    function ea(e, t, u) {
      if (e !== ti && (gl = "useReducer"), Ga = $o(), _n = nc(), Pi) {
        if (u = _n.queue, t = u.dispatch, xt !== null) {
          var y = xt.get(u);
          if (y !== void 0) {
            xt.delete(u), u = _n.memoizedState;
            do {
              var C = y.action;
              lt = !0, u = e(u, C), lt = !1, y = y.next;
            } while (y !== null);
            return _n.memoizedState = u, [u, t];
          }
        }
        return [_n.memoizedState, t];
      }
      return lt = !0, e = e === ti ? typeof t == "function" ? t() : t : u !== void 0 ? u(t) : t, lt = !1, _n.memoizedState = e, e = _n.queue = { last: null, dispatch: null }, e = e.dispatch = tc.bind(
        null,
        Ga,
        e
      ), [_n.memoizedState, e];
    }
    function ri(e, t) {
      if (Ga = $o(), _n = nc(), t = t === void 0 ? null : t, _n !== null) {
        var u = _n.memoizedState;
        if (u !== null && t !== null) {
          e: {
            var y = u[1];
            if (y === null)
              console.error(
                "%s received a final argument during this render, but not during the previous render. Even though the final argument is optional, its type cannot change between renders.",
                gl
              ), y = !1;
            else {
              t.length !== y.length && console.error(
                `The final argument passed to %s changed size between renders. The order and size of this array must remain constant.

Previous: %s
Incoming: %s`,
                gl,
                "[" + t.join(", ") + "]",
                "[" + y.join(", ") + "]"
              );
              for (var C = 0; C < y.length && C < t.length; C++)
                if (!bu(t[C], y[C])) {
                  y = !1;
                  break e;
                }
              y = !0;
            }
          }
          if (y) return u[0];
        }
      }
      return lt = !0, e = e(), lt = !1, _n.memoizedState = [e, t], e;
    }
    function tc(e, t, u) {
      if (25 <= vo)
        throw Error(
          "Too many re-renders. React limits the number of renders to prevent an infinite loop."
        );
      if (e === Ga)
        if (Xl = !0, e = { action: u, next: null }, xt === null && (xt = /* @__PURE__ */ new Map()), u = xt.get(t), u === void 0)
          xt.set(t, e);
        else {
          for (t = u; t.next !== null; ) t = t.next;
          t.next = e;
        }
    }
    function lu() {
      throw Error("startTransition cannot be called during server rendering.");
    }
    function Pa() {
      throw Error("Cannot update optimistic state while rendering.");
    }
    function jn(e, t, u) {
      $o();
      var y = Zl++, C = Xc;
      if (typeof e.$$FORM_ACTION == "function") {
        var k = null, z = Xa;
        C = C.formState;
        var W = e.$$IS_SIGNATURE_EQUAL;
        if (C !== null && typeof W == "function") {
          var ae = C[1];
          W.call(e, C[2], C[3]) && (k = u !== void 0 ? "p" + u : "k" + O(
            JSON.stringify([
              z,
              null,
              y
            ]),
            0
          ), ae === k && (Tc = y, t = C[0]));
        }
        var G = e.bind(null, t);
        return e = function(he) {
          G(he);
        }, typeof G.$$FORM_ACTION == "function" && (e.$$FORM_ACTION = function(he) {
          he = G.$$FORM_ACTION(he), u !== void 0 && (ke(u, "target"), u += "", he.action = u);
          var Se = he.data;
          return Se && (k === null && (k = u !== void 0 ? "p" + u : "k" + O(
            JSON.stringify([
              z,
              null,
              y
            ]),
            0
          )), Se.append("$ACTION_KEY", k)), he;
        }), [t, e, !1];
      }
      var be = e.bind(null, t);
      return [
        t,
        function(he) {
          be(he);
        },
        !1
      ];
    }
    function fs(e) {
      var t = Ls;
      return Ls += 1, zs === null && (zs = []), au(zs, e, t);
    }
    function Oc() {
      throw Error("Cache cannot be refreshed during server rendering.");
    }
    function ml() {
    }
    function Tr() {
    }
    function Ac() {
      if (va === 0) {
        Vl = console.log, yu = console.info, Us = console.warn, Cc = console.error, Hs = console.group, n = console.groupCollapsed, r = console.groupEnd;
        var e = {
          configurable: !0,
          enumerable: !0,
          value: Tr,
          writable: !0
        };
        Object.defineProperties(console, {
          info: e,
          log: e,
          warn: e,
          error: e,
          group: e,
          groupCollapsed: e,
          groupEnd: e
        });
      }
      va++;
    }
    function oi() {
      if (va--, va === 0) {
        var e = { configurable: !0, enumerable: !0, writable: !0 };
        Object.defineProperties(console, {
          log: rt({}, e, { value: Vl }),
          info: rt({}, e, { value: yu }),
          warn: rt({}, e, { value: Us }),
          error: rt({}, e, { value: Cc }),
          group: rt({}, e, { value: Hs }),
          groupCollapsed: rt({}, e, { value: n }),
          groupEnd: rt({}, e, { value: r })
        });
      }
      0 > va && console.error(
        "disabledDepth fell below zero. This is a bug in React. Please file an issue."
      );
    }
    function Co(e) {
      if (c === void 0)
        try {
          throw Error();
        } catch (u) {
          var t = u.stack.trim().match(/\n( *(at )?)/);
          c = t && t[1] || "", v = -1 < u.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < u.stack.indexOf("@") ? "@unknown:0:0" : "";
        }
      return `
` + c + e + v;
    }
    function Fa(e, t) {
      if (!e || E) return "";
      var u = m.get(e);
      if (u !== void 0) return u;
      E = !0, u = Error.prepareStackTrace, Error.prepareStackTrace = void 0;
      var y = null;
      y = Ie.H, Ie.H = null, Ac();
      try {
        var C = {
          DetermineComponentFrameRoot: function() {
            try {
              if (t) {
                var Se = function() {
                  throw Error();
                };
                if (Object.defineProperty(Se.prototype, "props", {
                  set: function() {
                    throw Error();
                  }
                }), typeof Reflect == "object" && Reflect.construct) {
                  try {
                    Reflect.construct(Se, []);
                  } catch (fe) {
                    var Te = fe;
                  }
                  Reflect.construct(e, [], Se);
                } else {
                  try {
                    Se.call();
                  } catch (fe) {
                    Te = fe;
                  }
                  e.call(Se.prototype);
                }
              } else {
                try {
                  throw Error();
                } catch (fe) {
                  Te = fe;
                }
                (Se = e()) && typeof Se.catch == "function" && Se.catch(function() {
                });
              }
            } catch (fe) {
              if (fe && Te && typeof fe.stack == "string")
                return [fe.stack, Te.stack];
            }
            return [null, null];
          }
        };
        C.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
        var k = Object.getOwnPropertyDescriptor(
          C.DetermineComponentFrameRoot,
          "name"
        );
        k && k.configurable && Object.defineProperty(
          C.DetermineComponentFrameRoot,
          "name",
          { value: "DetermineComponentFrameRoot" }
        );
        var z = C.DetermineComponentFrameRoot(), W = z[0], ae = z[1];
        if (W && ae) {
          var G = W.split(`
`), be = ae.split(`
`);
          for (z = k = 0; k < G.length && !G[k].includes(
            "DetermineComponentFrameRoot"
          ); )
            k++;
          for (; z < be.length && !be[z].includes(
            "DetermineComponentFrameRoot"
          ); )
            z++;
          if (k === G.length || z === be.length)
            for (k = G.length - 1, z = be.length - 1; 1 <= k && 0 <= z && G[k] !== be[z]; )
              z--;
          for (; 1 <= k && 0 <= z; k--, z--)
            if (G[k] !== be[z]) {
              if (k !== 1 || z !== 1)
                do
                  if (k--, z--, 0 > z || G[k] !== be[z]) {
                    var he = `
` + G[k].replace(
                      " at new ",
                      " at "
                    );
                    return e.displayName && he.includes("<anonymous>") && (he = he.replace("<anonymous>", e.displayName)), typeof e == "function" && m.set(e, he), he;
                  }
                while (1 <= k && 0 <= z);
              break;
            }
        }
      } finally {
        E = !1, Ie.H = y, oi(), Error.prepareStackTrace = u;
      }
      return G = (G = e ? e.displayName || e.name : "") ? Co(G) : "", typeof e == "function" && m.set(e, G), G;
    }
    function Yi(e) {
      var t = Error.prepareStackTrace;
      if (Error.prepareStackTrace = void 0, e = e.stack, Error.prepareStackTrace = t, e.startsWith(`Error: react-stack-top-frame
`) && (e = e.slice(29)), t = e.indexOf(`
`), t !== -1 && (e = e.slice(t + 1)), t = e.indexOf("react-stack-bottom-frame"), t !== -1 && (t = e.lastIndexOf(
        `
`,
        t
      )), t !== -1)
        e = e.slice(0, t);
      else return "";
      return e;
    }
    function ds(e) {
      if (typeof e == "string") return Co(e);
      if (typeof e == "function")
        return e.prototype && e.prototype.isReactComponent ? Fa(e, !0) : Fa(e, !1);
      if (typeof e == "object" && e !== null) {
        switch (e.$$typeof) {
          case bi:
            return Fa(e.render, !1);
          case Jn:
            return Fa(e.type, !1);
          case Ft:
            var t = e, u = t._payload;
            t = t._init;
            try {
              e = t(u);
            } catch {
              return Co("Lazy");
            }
            return ds(e);
        }
        if (typeof e.name == "string")
          return u = e.env, Co(
            e.name + (u ? " [" + u + "]" : "")
          );
      }
      switch (e) {
        case Uo:
          return Co("SuspenseList");
        case Ml:
          return Co("Suspense");
      }
      return "";
    }
    function Gi(e) {
      if (typeof e == "object" && e !== null && typeof e.environmentName == "string") {
        var t = e.environmentName;
        e = [e].slice(0), typeof e[0] == "string" ? e.splice(
          0,
          1,
          "%c%s%c " + e[0],
          "background: #e6e6e6;background: light-dark(rgba(0,0,0,0.1), rgba(255,255,255,0.25));color: #000000;color: light-dark(#000000, #ffffff);border-radius: 2px",
          " " + t + " ",
          ""
        ) : e.splice(
          0,
          0,
          "%c%s%c ",
          "background: #e6e6e6;background: light-dark(rgba(0,0,0,0.1), rgba(255,255,255,0.25));color: #000000;color: light-dark(#000000, #ffffff);border-radius: 2px",
          " " + t + " ",
          ""
        ), e.unshift(console), t = vc.apply(console.error, e), t();
      } else console.error(e);
      return null;
    }
    function lo() {
    }
    function ai(e, t, u, y, C, k, z, W, ae, G, be) {
      var he = /* @__PURE__ */ new Set();
      this.destination = null, this.flushScheduled = !1, this.resumableState = e, this.renderState = t, this.rootFormatContext = u, this.progressiveChunkSize = y === void 0 ? 12800 : y, this.status = 10, this.fatalError = null, this.pendingRootTasks = this.allPendingTasks = this.nextSegmentId = 0, this.completedPreambleSegments = this.completedRootSegment = null, this.abortableTasks = he, this.pingedTasks = [], this.clientRenderedBoundaries = [], this.completedBoundaries = [], this.partialBoundaries = [], this.trackedPostpones = null, this.onError = C === void 0 ? Gi : C, this.onPostpone = G === void 0 ? lo : G, this.onAllReady = k === void 0 ? lo : k, this.onShellReady = z === void 0 ? lo : z, this.onShellError = W === void 0 ? lo : W, this.onFatalError = ae === void 0 ? lo : ae, this.formState = be === void 0 ? null : be, this.didWarnForKey = null;
    }
    function Xi(e, t, u, y, C, k, z, W, ae, G, be, he) {
      var Se = ue();
      return 1e3 < Se - Fe && (Ie.recentlyCreatedOwnerStacks = 0, Fe = Se), t = new ai(
        t,
        u,
        y,
        C,
        k,
        z,
        W,
        ae,
        G,
        be,
        he
      ), u = so(
        t,
        0,
        null,
        y,
        !1,
        !1
      ), u.parentFlushed = !0, e = ta(
        t,
        null,
        e,
        -1,
        null,
        u,
        null,
        null,
        t.abortableTasks,
        null,
        y,
        null,
        Gc,
        null,
        !1,
        It,
        null
      ), ra(e), t.pingedTasks.push(e), t;
    }
    function Oa(e, t, u, y, C, k, z, W, ae, G, be) {
      return e = Xi(
        e,
        t,
        u,
        y,
        C,
        k,
        z,
        W,
        ae,
        G,
        be,
        void 0
      ), e.trackedPostpones = {
        workingMap: /* @__PURE__ */ new Map(),
        rootNodes: [],
        rootSlots: null
      }, e;
    }
    function na(e, t) {
      e.pingedTasks.push(t), e.pingedTasks.length === 1 && (e.flushScheduled = e.destination !== null, e.trackedPostpones !== null || e.status === 10 ? su(function() {
        return Qi(e);
      }) : Y(function() {
        return Qi(e);
      }));
    }
    function ir(e, t, u, y) {
      return {
        status: tn,
        rootSegmentID: -1,
        parentFlushed: !1,
        pendingTasks: 0,
        completedSegments: [],
        byteSize: 0,
        fallbackAbortableTasks: t,
        errorDigest: null,
        contentState: ec(),
        fallbackState: ec(),
        contentPreamble: u,
        fallbackPreamble: y,
        trackedContentKeyPath: null,
        trackedFallbackNode: null,
        errorMessage: null,
        errorStack: null,
        errorComponentStack: null
      };
    }
    function ta(e, t, u, y, C, k, z, W, ae, G, be, he, Se, Te, fe, pn, Bn) {
      e.allPendingTasks++, C === null ? e.pendingRootTasks++ : C.pendingTasks++;
      var hn = {
        replay: null,
        node: u,
        childIndex: y,
        ping: function() {
          return na(e, hn);
        },
        blockedBoundary: C,
        blockedSegment: k,
        blockedPreamble: z,
        hoistableState: W,
        abortSet: ae,
        keyPath: G,
        formatContext: be,
        context: he,
        treeContext: Se,
        componentStack: Te,
        thenableState: t,
        isFallback: fe
      };
      return hn.debugTask = Bn, ae.add(hn), hn;
    }
    function Mc(e, t, u, y, C, k, z, W, ae, G, be, he, Se, Te, fe, pn) {
      e.allPendingTasks++, k === null ? e.pendingRootTasks++ : k.pendingTasks++, u.pendingTasks++;
      var Bn = {
        replay: u,
        node: y,
        childIndex: C,
        ping: function() {
          return na(e, Bn);
        },
        blockedBoundary: k,
        blockedSegment: null,
        blockedPreamble: null,
        hoistableState: z,
        abortSet: W,
        keyPath: ae,
        formatContext: G,
        context: be,
        treeContext: he,
        componentStack: Se,
        thenableState: t,
        isFallback: Te
      };
      return Bn.debugTask = pn, W.add(Bn), Bn;
    }
    function so(e, t, u, y, C, k) {
      return {
        status: tn,
        parentFlushed: !1,
        id: -1,
        index: t,
        chunks: [],
        children: [],
        preambleChildren: [],
        parentFormatContext: y,
        boundary: u,
        lastPushedText: C,
        textEmbedded: k
      };
    }
    function Aa() {
      if (Vn === null || Vn.componentStack === null)
        return "";
      var e = Vn.componentStack;
      try {
        var t = "";
        if (typeof e.type == "string")
          t += Co(e.type);
        else if (typeof e.type == "function") {
          if (!e.owner) {
            var u = t, y = e.type, C = y ? y.displayName || y.name : "", k = C ? Co(C) : "";
            t = u + k;
          }
        } else
          e.owner || (t += ds(e.type));
        for (; e; )
          u = null, e.debugStack != null ? u = Yi(
            e.debugStack
          ) : (k = e, k.stack != null && (u = typeof k.stack != "string" ? k.stack = Yi(
            k.stack
          ) : k.stack)), (e = e.owner) && u && (t += `
` + u);
        var z = t;
      } catch (W) {
        z = `
Error generating stack: ` + W.message + `
` + W.stack;
      }
      return z;
    }
    function Pl(e, t) {
      if (t != null)
        for (var u = 0; u < t.length; u++) {
          var y = t[u];
          typeof y.name == "string" && y.debugStack !== void 0 && (e.componentStack = {
            parent: e.componentStack,
            type: y,
            owner: y.owner,
            stack: y.debugStack
          }, e.debugTask = y.debugTask);
        }
    }
    function ra(e) {
      var t = e.node;
      if (typeof t == "object" && t !== null)
        switch (t.$$typeof) {
          case hi:
            var u = t.type, y = t._owner, C = t._debugStack;
            Pl(e, t._debugInfo), e.debugTask = t._debugTask, e.componentStack = {
              parent: e.componentStack,
              type: u,
              owner: y,
              stack: C
            };
            break;
          case Ft:
            Pl(e, t._debugInfo);
            break;
          default:
            typeof t.then == "function" && Pl(e, t._debugInfo);
        }
    }
    function vt(e) {
      var t = {};
      return e && Object.defineProperty(t, "componentStack", {
        configurable: !0,
        enumerable: !0,
        get: function() {
          try {
            var u = "", y = e;
            do
              u += ds(y.type), y = y.parent;
            while (y);
            var C = u;
          } catch (k) {
            C = `
Error generating stack: ` + k.message + `
` + k.stack;
          }
          return Object.defineProperty(t, "componentStack", {
            value: C
          }), C;
        }
      }), t;
    }
    function ii(e, t, u, y, C) {
      e.errorDigest = t, u instanceof Error ? (t = String(u.message), u = String(u.stack)) : (t = typeof u == "object" && u !== null ? A(u) : String(u), u = null), C = C ? `Switched to client rendering because the server rendering aborted due to:

` : `Switched to client rendering because the server rendering errored:

`, e.errorMessage = C + t, e.errorStack = u !== null ? C + u : null, e.errorComponentStack = y.componentStack;
    }
    function Mr(e, t, u, y) {
      if (e = e.onError, t = y ? y.run(e.bind(null, t, u)) : e(t, u), t != null && typeof t != "string")
        console.error(
          'onError returned something with a type other than "string". onError should return a string and may return null or undefined but must not return anything else. It received something of type "%s" instead',
          typeof t
        );
      else return t;
    }
    function Ir(e, t, u, y) {
      u = e.onShellError;
      var C = e.onFatalError;
      y ? (y.run(u.bind(null, t)), y.run(C.bind(null, t))) : (u(t), C(t)), e.destination !== null ? (e.status = xn, N(e.destination, t)) : (e.status = 13, e.fatalError = t);
    }
    function hs(e, t, u, y, C, k) {
      var z = t.thenableState;
      for (t.thenableState = null, Ga = {}, Bs = t, Xc = e, Xa = u, lt = !1, Zl = hl = 0, Tc = -1, Ls = 0, zs = z, e = X(y, C, k); Xl; )
        Xl = !1, Zl = hl = 0, Tc = -1, Ls = 0, vo += 1, _n = null, e = y(C, k);
      return Yr(), e;
    }
    function gs(e, t, u, y, C, k, z) {
      var W = !1;
      if (k !== 0 && e.formState !== null) {
        var ae = t.blockedSegment;
        if (ae !== null) {
          W = !0, ae = ae.chunks;
          for (var G = 0; G < k; G++)
            G === z ? ae.push(gr) : ae.push(La);
        }
      }
      k = t.keyPath, t.keyPath = u, C ? (u = t.treeContext, t.treeContext = or(u, 1, 0), cr(e, t, y, -1), t.treeContext = u) : W ? cr(e, t, y, -1) : sr(e, t, y, -1), t.keyPath = k;
    }
    function lr(e, t, u, y, C, k) {
      if (typeof y == "function")
        if (y.prototype && y.prototype.isReactComponent) {
          var z = C;
          if ("ref" in C) {
            z = {};
            for (var W in C)
              W !== "ref" && (z[W] = C[W]);
          }
          var ae = y.defaultProps;
          if (ae) {
            z === C && (z = rt({}, z, C));
            for (var G in ae)
              z[G] === void 0 && (z[G] = ae[G]);
          }
          var be = z, he = It, Se = y.contextType;
          if ("contextType" in y && Se !== null && (Se === void 0 || Se.$$typeof !== Wo) && !hu.has(y)) {
            hu.add(y);
            var Te = Se === void 0 ? " However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file." : typeof Se != "object" ? " However, it is set to a " + typeof Se + "." : Se.$$typeof === gi ? " Did you accidentally pass the Context.Consumer instead?" : " However, it is set to an object with keys {" + Object.keys(Se).join(", ") + "}.";
            console.error(
              "%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s",
              Qn(y) || "Component",
              Te
            );
          }
          typeof Se == "object" && Se !== null && (he = Se._currentValue);
          var fe = new y(be, he);
          if (typeof y.getDerivedStateFromProps == "function" && (fe.state === null || fe.state === void 0)) {
            var pn = Qn(y) || "Component";
            bo.has(pn) || (bo.add(pn), console.error(
              "`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.",
              pn,
              fe.state === null ? "null" : "undefined",
              pn
            ));
          }
          if (typeof y.getDerivedStateFromProps == "function" || typeof fe.getSnapshotBeforeUpdate == "function") {
            var Bn = null, hn = null, Ye = null;
            if (typeof fe.componentWillMount == "function" && fe.componentWillMount.__suppressDeprecationWarning !== !0 ? Bn = "componentWillMount" : typeof fe.UNSAFE_componentWillMount == "function" && (Bn = "UNSAFE_componentWillMount"), typeof fe.componentWillReceiveProps == "function" && fe.componentWillReceiveProps.__suppressDeprecationWarning !== !0 ? hn = "componentWillReceiveProps" : typeof fe.UNSAFE_componentWillReceiveProps == "function" && (hn = "UNSAFE_componentWillReceiveProps"), typeof fe.componentWillUpdate == "function" && fe.componentWillUpdate.__suppressDeprecationWarning !== !0 ? Ye = "componentWillUpdate" : typeof fe.UNSAFE_componentWillUpdate == "function" && (Ye = "UNSAFE_componentWillUpdate"), Bn !== null || hn !== null || Ye !== null) {
              var _t = Qn(y) || "Component", Gn = typeof y.getDerivedStateFromProps == "function" ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
              yo.has(_t) || (yo.add(
                _t
              ), console.error(
                `Unsafe legacy lifecycles will not be called for components using new component APIs.

%s uses %s but also contains the following legacy lifecycles:%s%s%s

The above lifecycles should be removed. Learn more about this warning here:
https://react.dev/link/unsafe-component-lifecycles`,
                _t,
                Gn,
                Bn !== null ? `
  ` + Bn : "",
                hn !== null ? `
  ` + hn : "",
                Ye !== null ? `
  ` + Ye : ""
              ));
            }
          }
          var gn = Qn(y) || "Component";
          fe.render || (y.prototype && typeof y.prototype.render == "function" ? console.error(
            "No `render` method found on the %s instance: did you accidentally return an object from the constructor?",
            gn
          ) : console.error(
            "No `render` method found on the %s instance: you may have forgotten to define `render`.",
            gn
          )), !fe.getInitialState || fe.getInitialState.isReactClassApproved || fe.state || console.error(
            "getInitialState was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Did you mean to define a state property instead?",
            gn
          ), fe.getDefaultProps && !fe.getDefaultProps.isReactClassApproved && console.error(
            "getDefaultProps was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Use a static property to define defaultProps instead.",
            gn
          ), fe.contextType && console.error(
            "contextType was defined as an instance property on %s. Use a static property to define contextType instead.",
            gn
          ), y.childContextTypes && !mo.has(y) && (mo.add(y), console.error(
            "%s uses the legacy childContextTypes API which was removed in React 19. Use React.createContext() instead. (https://react.dev/link/legacy-context)",
            gn
          )), y.contextTypes && !ga.has(y) && (ga.add(y), console.error(
            "%s uses the legacy contextTypes API which was removed in React 19. Use React.createContext() with static contextType instead. (https://react.dev/link/legacy-context)",
            gn
          )), typeof fe.componentShouldUpdate == "function" && console.error(
            "%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.",
            gn
          ), y.prototype && y.prototype.isPureReactComponent && typeof fe.shouldComponentUpdate < "u" && console.error(
            "%s has a method called shouldComponentUpdate(). shouldComponentUpdate should not be used when extending React.PureComponent. Please extend React.Component if shouldComponentUpdate is used.",
            Qn(y) || "A pure component"
          ), typeof fe.componentDidUnmount == "function" && console.error(
            "%s has a method called componentDidUnmount(). But there is no such lifecycle method. Did you mean componentWillUnmount()?",
            gn
          ), typeof fe.componentDidReceiveProps == "function" && console.error(
            "%s has a method called componentDidReceiveProps(). But there is no such lifecycle method. If you meant to update the state in response to changing props, use componentWillReceiveProps(). If you meant to fetch data or run side-effects or mutations after React has updated the UI, use componentDidUpdate().",
            gn
          ), typeof fe.componentWillRecieveProps == "function" && console.error(
            "%s has a method called componentWillRecieveProps(). Did you mean componentWillReceiveProps()?",
            gn
          ), typeof fe.UNSAFE_componentWillRecieveProps == "function" && console.error(
            "%s has a method called UNSAFE_componentWillRecieveProps(). Did you mean UNSAFE_componentWillReceiveProps()?",
            gn
          );
          var mr = fe.props !== be;
          fe.props !== void 0 && mr && console.error(
            "When calling super() in `%s`, make sure to pass up the same props that your component's constructor was passed.",
            gn
          ), fe.defaultProps && console.error(
            "Setting defaultProps as an instance property on %s is not supported and will be ignored. Instead, define defaultProps as a static property on %s.",
            gn,
            gn
          ), typeof fe.getSnapshotBeforeUpdate != "function" || typeof fe.componentDidUpdate == "function" || fl.has(y) || (fl.add(y), console.error(
            "%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). This component defines getSnapshotBeforeUpdate() only.",
            Qn(y)
          )), typeof fe.getDerivedStateFromProps == "function" && console.error(
            "%s: getDerivedStateFromProps() is defined as an instance method and will be ignored. Instead, declare it as a static method.",
            gn
          ), typeof fe.getDerivedStateFromError == "function" && console.error(
            "%s: getDerivedStateFromError() is defined as an instance method and will be ignored. Instead, declare it as a static method.",
            gn
          ), typeof y.getSnapshotBeforeUpdate == "function" && console.error(
            "%s: getSnapshotBeforeUpdate() is defined as a static method and will be ignored. Instead, declare it as an instance method.",
            gn
          );
          var jr = fe.state;
          jr && (typeof jr != "object" || Nt(jr)) && console.error("%s.state: must be set to an object or null", gn), typeof fe.getChildContext == "function" && typeof y.childContextTypes != "object" && console.error(
            "%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().",
            gn
          );
          var Yt = fe.state !== void 0 ? fe.state : null;
          fe.updater = gu, fe.props = be, fe.state = Yt;
          var jt = { queue: [], replace: !1 };
          fe._reactInternals = jt;
          var $n = y.contextType;
          if (fe.context = typeof $n == "object" && $n !== null ? $n._currentValue : It, fe.state === be) {
            var Pr = Qn(y) || "Component";
            mi.has(
              Pr
            ) || (mi.add(
              Pr
            ), console.error(
              "%s: It is not recommended to assign props directly to state because updates to props won't be reflected in state. In most cases, it is better to use props directly.",
              Pr
            ));
          }
          var Fr = y.getDerivedStateFromProps;
          if (typeof Fr == "function") {
            var wn = Fr(
              be,
              Yt
            );
            if (wn === void 0) {
              var ht = Qn(y) || "Component";
              _s.has(ht) || (_s.add(ht), console.error(
                "%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. You have returned undefined.",
                ht
              ));
            }
            var Un = wn == null ? Yt : rt({}, Yt, wn);
            fe.state = Un;
          }
          if (typeof y.getDerivedStateFromProps != "function" && typeof fe.getSnapshotBeforeUpdate != "function" && (typeof fe.UNSAFE_componentWillMount == "function" || typeof fe.componentWillMount == "function")) {
            var Br = fe.state;
            if (typeof fe.componentWillMount == "function") {
              if (fe.componentWillMount.__suppressDeprecationWarning !== !0) {
                var Nr = Qn(y) || "Unknown";
                Gl[Nr] || (console.warn(
                  `componentWillMount has been renamed, and is not recommended for use. See https://react.dev/link/unsafe-component-lifecycles for details.

* Move code from componentWillMount to componentDidMount (preferred in most cases) or the constructor.

Please update the following components: %s`,
                  Nr
                ), Gl[Nr] = !0);
              }
              fe.componentWillMount();
            }
            if (typeof fe.UNSAFE_componentWillMount == "function" && fe.UNSAFE_componentWillMount(), Br !== fe.state && (console.error(
              "%s.componentWillMount(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.",
              Qn(y) || "Component"
            ), gu.enqueueReplaceState(
              fe,
              fe.state,
              null
            )), jt.queue !== null && 0 < jt.queue.length) {
              var $t = jt.queue, pa = jt.replace;
              if (jt.queue = null, jt.replace = !1, pa && $t.length === 1)
                fe.state = $t[0];
              else {
                for (var po = pa ? $t[0] : fe.state, wa = !0, Ql = pa ? 1 : 0; Ql < $t.length; Ql++) {
                  var Ta = $t[Ql], bl = typeof Ta == "function" ? Ta.call(
                    fe,
                    po,
                    be,
                    void 0
                  ) : Ta;
                  bl != null && (wa ? (wa = !1, po = rt(
                    {},
                    po,
                    bl
                  )) : rt(po, bl));
                }
                fe.state = po;
              }
            } else jt.queue = null;
          }
          var Fo = K(fe);
          if (e.status === 12) throw null;
          fe.props !== be && (Po || console.error(
            "It looks like %s is reassigning its own `this.props` while rendering. This is not supported and can lead to confusing bugs.",
            Qn(y) || "a component"
          ), Po = !0);
          var Jl = t.keyPath;
          t.keyPath = u, sr(e, t, Fo, -1), t.keyPath = Jl;
        } else {
          if (y.prototype && typeof y.prototype.render == "function") {
            var Lr = Qn(y) || "Unknown";
            vr[Lr] || (console.error(
              "The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.",
              Lr,
              Lr
            ), vr[Lr] = !0);
          }
          var er = hs(
            e,
            t,
            u,
            y,
            C,
            void 0
          );
          if (e.status === 12) throw null;
          var Rt = hl !== 0, $r = Zl, Oo = Tc;
          if (y.contextTypes) {
            var yl = Qn(y) || "Unknown";
            Dt[yl] || (Dt[yl] = !0, console.error(
              "%s uses the legacy contextTypes API which was removed in React 19. Use React.createContext() with React.useContext() instead. (https://react.dev/link/legacy-context)",
              yl
            ));
          }
          if (y && y.childContextTypes && console.error(
            `childContextTypes cannot be defined on a function component.
  %s.childContextTypes = ...`,
            y.displayName || y.name || "Component"
          ), typeof y.getDerivedStateFromProps == "function") {
            var Ao = Qn(y) || "Unknown";
            dt[Ao] || (console.error(
              "%s: Function components do not support getDerivedStateFromProps.",
              Ao
            ), dt[Ao] = !0);
          }
          if (typeof y.contextType == "object" && y.contextType !== null) {
            var Ca = Qn(y) || "Unknown";
            Ht[Ca] || (console.error(
              "%s: Function components do not support contextType.",
              Ca
            ), Ht[Ca] = !0);
          }
          gs(
            e,
            t,
            u,
            er,
            Rt,
            $r,
            Oo
          );
        }
      else if (typeof y == "string") {
        var Mo = t.blockedSegment;
        if (Mo === null) {
          var Ec = C.children, Gt = t.formatContext, eo = t.keyPath;
          t.formatContext = Q(Gt, y, C), t.keyPath = u, cr(e, t, Ec, -1), t.formatContext = Gt, t.keyPath = eo;
        } else {
          var Za = Wr(
            Mo.chunks,
            y,
            C,
            e.resumableState,
            e.renderState,
            t.blockedPreamble,
            t.hoistableState,
            t.formatContext,
            Mo.lastPushedText,
            t.isFallback
          );
          Mo.lastPushedText = !1;
          var Va = t.formatContext, Ea = t.keyPath;
          if (t.keyPath = u, (t.formatContext = Q(
            Va,
            y,
            C
          )).insertionMode === uo) {
            var vl = so(
              e,
              0,
              null,
              t.formatContext,
              !1,
              !1
            );
            Mo.preambleChildren.push(vl);
            var Jo = ta(
              e,
              null,
              Za,
              -1,
              t.blockedBoundary,
              vl,
              t.blockedPreamble,
              t.hoistableState,
              e.abortableTasks,
              t.keyPath,
              t.formatContext,
              t.context,
              t.treeContext,
              t.componentStack,
              t.isFallback,
              It,
              t.debugTask
            );
            ra(Jo), e.pingedTasks.push(Jo);
          } else cr(e, t, Za, -1);
          t.formatContext = Va, t.keyPath = Ea;
          e: {
            var Oi = Mo.chunks, Ai = e.resumableState;
            switch (y) {
              case "title":
              case "style":
              case "script":
              case "area":
              case "base":
              case "br":
              case "col":
              case "embed":
              case "hr":
              case "img":
              case "input":
              case "keygen":
              case "link":
              case "meta":
              case "param":
              case "source":
              case "track":
              case "wbr":
                break e;
              case "body":
                if (Va.insertionMode <= Vr) {
                  Ai.hasBody = !0;
                  break e;
                }
                break;
              case "html":
                if (Va.insertionMode === xo) {
                  Ai.hasHtml = !0;
                  break e;
                }
                break;
              case "head":
                if (Va.insertionMode <= Vr) break e;
            }
            Oi.push(qa(y));
          }
          Mo.lastPushedText = !1;
        }
      } else {
        switch (y) {
          case ft:
          case ws:
          case ji:
          case sa:
            var Mi = t.keyPath;
            t.keyPath = u, sr(e, t, C.children, -1), t.keyPath = Mi;
            return;
          case yi:
            if (C.mode !== "hidden") {
              var Ii = t.keyPath;
              t.keyPath = u, sr(e, t, C.children, -1), t.keyPath = Ii;
            }
            return;
          case Uo:
            var Io = t.keyPath;
            t.keyPath = u, sr(e, t, C.children, -1), t.keyPath = Io;
            return;
          case ac:
          case Xr:
            throw Error(
              "ReactDOMServer does not yet support scope components."
            );
          case Ml:
            e: if (t.replay !== null) {
              var xa = t.keyPath;
              t.keyPath = u;
              var xc = C.children;
              try {
                cr(e, t, xc, -1);
              } finally {
                t.keyPath = xa;
              }
            } else {
              var Ko = t.keyPath, Kl = t.blockedBoundary, ql = t.blockedPreamble, Vc = t.hoistableState, Qa = t.blockedSegment, Rc = C.fallback, wo = C.children, Ra = /* @__PURE__ */ new Set(), St = t.formatContext.insertionMode < Tt ? ir(
                e,
                Ra,
                Xn(),
                Xn()
              ) : ir(
                e,
                Ra,
                null,
                null
              );
              e.trackedPostpones !== null && (St.trackedContentKeyPath = u);
              var pr = so(
                e,
                Qa.chunks.length,
                St,
                t.formatContext,
                !1,
                !1
              );
              Qa.children.push(pr), Qa.lastPushedText = !1;
              var no = so(
                e,
                0,
                null,
                t.formatContext,
                !1,
                !1
              );
              if (no.parentFlushed = !0, e.trackedPostpones !== null) {
                var Qc = [
                  u[0],
                  "Suspense Fallback",
                  u[2]
                ], Sa = [
                  Qc[1],
                  Qc[2],
                  [],
                  null
                ];
                e.trackedPostpones.workingMap.set(
                  Qc,
                  Sa
                ), St.trackedFallbackNode = Sa, t.blockedSegment = pr, t.blockedPreamble = St.fallbackPreamble, t.keyPath = Qc, pr.status = 6;
                try {
                  cr(e, t, Rc, -1), pr.lastPushedText && pr.textEmbedded && pr.chunks.push(Xo), pr.status = cn;
                } catch (ts) {
                  throw pr.status = e.status === 12 ? 3 : 4, ts;
                } finally {
                  t.blockedSegment = Qa, t.blockedPreamble = ql, t.keyPath = Ko;
                }
                var Di = ta(
                  e,
                  null,
                  wo,
                  -1,
                  St,
                  no,
                  St.contentPreamble,
                  St.contentState,
                  t.abortSet,
                  u,
                  t.formatContext,
                  t.context,
                  t.treeContext,
                  t.componentStack,
                  t.isFallback,
                  It,
                  t.debugTask
                );
                ra(Di), e.pingedTasks.push(Di);
              } else {
                t.blockedBoundary = St, t.blockedPreamble = St.contentPreamble, t.hoistableState = St.contentState, t.blockedSegment = no, t.keyPath = u, no.status = 6;
                try {
                  if (cr(e, t, wo, -1), no.lastPushedText && no.textEmbedded && no.chunks.push(Xo), no.status = cn, la(St, no), St.pendingTasks === 0 && St.status === tn) {
                    St.status = cn, e.pendingRootTasks === 0 && t.blockedPreamble && ys(e);
                    break e;
                  }
                } catch (ts) {
                  if (St.status = bn, e.status === 12) {
                    no.status = 3;
                    var pl = e.fatalError;
                  } else
                    no.status = 4, pl = ts;
                  var vu = vt(t.componentStack), nr = Mr(
                    e,
                    pl,
                    vu,
                    t.debugTask
                  );
                  ii(
                    St,
                    nr,
                    pl,
                    vu,
                    !1
                  ), oa(e, St);
                } finally {
                  t.blockedBoundary = Kl, t.blockedPreamble = ql, t.hoistableState = Vc, t.blockedSegment = Qa, t.keyPath = Ko;
                }
                var Ys = ta(
                  e,
                  null,
                  Rc,
                  -1,
                  Kl,
                  pr,
                  St.fallbackPreamble,
                  St.fallbackState,
                  Ra,
                  [u[0], "Suspense Fallback", u[2]],
                  t.formatContext,
                  t.context,
                  t.treeContext,
                  t.componentStack,
                  !0,
                  It,
                  t.debugTask
                );
                ra(Ys), e.pingedTasks.push(Ys);
              }
            }
            return;
        }
        if (typeof y == "object" && y !== null)
          switch (y.$$typeof) {
            case bi:
              if ("ref" in C) {
                var jl = {};
                for (var wl in C)
                  wl !== "ref" && (jl[wl] = C[wl]);
              } else jl = C;
              var Gs = hs(
                e,
                t,
                u,
                y.render,
                jl,
                k
              );
              gs(
                e,
                t,
                u,
                Gs,
                hl !== 0,
                Zl,
                Tc
              );
              return;
            case Jn:
              lr(e, t, u, y.type, C, k);
              return;
            case ur:
            case Wo:
              var $l = C.value, Sc = C.children, Xs = t.context, Au = t.keyPath, Zs = y._currentValue;
              y._currentValue = $l, y._currentRenderer !== void 0 && y._currentRenderer !== null && y._currentRenderer !== cl && console.error(
                "Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."
              ), y._currentRenderer = cl;
              var es = ha, Tl = {
                parent: es,
                depth: es === null ? 0 : es.depth + 1,
                context: y,
                parentValue: Zs,
                value: $l
              };
              ha = Tl, t.context = Tl, t.keyPath = u, sr(e, t, Sc, -1);
              var Ja = ha;
              if (Ja === null)
                throw Error(
                  "Tried to pop a Context at the root of the app. This is a bug in React."
                );
              Ja.context !== y && console.error(
                "The parent context is not the expected context. This is probably a bug in React."
              ), Ja.context._currentValue = Ja.parentValue, y._currentRenderer !== void 0 && y._currentRenderer !== null && y._currentRenderer !== cl && console.error(
                "Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."
              ), y._currentRenderer = cl;
              var Cl = ha = Ja.parent;
              t.context = Cl, t.keyPath = Au, Xs !== t.context && console.error(
                "Popping the context provider did not return back to the original snapshot. This is a bug in React."
              );
              return;
            case gi:
              var wr = y._context, tr = C.children;
              typeof tr != "function" && console.error(
                "A context consumer was rendered with multiple children, or a child that isn't a function. A context consumer expects a single child that is a function. If you did pass a function, make sure there is no trailing or leading whitespace around it."
              );
              var Mu = tr(wr._currentValue), Vs = t.keyPath;
              t.keyPath = u, sr(e, t, Mu, -1), t.keyPath = Vs;
              return;
            case Ft:
              var Iu = ve(y);
              if (e.status === 12) throw null;
              lr(e, t, u, Iu, C, k);
              return;
          }
        var ns = "";
        throw (y === void 0 || typeof y == "object" && y !== null && Object.keys(y).length === 0) && (ns += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports."), Error(
          "Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) but got: " + ((y == null ? y : typeof y) + "." + ns)
        );
      }
    }
    function Fl(e, t, u, y, C) {
      var k = t.replay, z = t.blockedBoundary, W = so(
        e,
        0,
        null,
        t.formatContext,
        !1,
        !1
      );
      W.id = u, W.parentFlushed = !0;
      try {
        t.replay = null, t.blockedSegment = W, cr(e, t, y, C), W.status = cn, z === null ? e.completedRootSegment = W : (la(z, W), z.parentFlushed && e.partialBoundaries.push(z));
      } finally {
        t.replay = k, t.blockedSegment = null;
      }
    }
    function Pn(e, t, u, y, C, k, z, W, ae, G) {
      k = G.nodes;
      for (var be = 0; be < k.length; be++) {
        var he = k[be];
        if (C === he[1]) {
          if (he.length === 4) {
            if (y !== null && y !== he[0])
              throw Error(
                "Expected the resume to render <" + he[0] + "> in this slot but instead it rendered <" + y + ">. The tree doesn't match so React will fallback to client rendering."
              );
            var Se = he[2];
            he = he[3], y = t.node, t.replay = { nodes: Se, slots: he, pendingTasks: 1 };
            try {
              if (lr(e, t, u, z, W, ae), t.replay.pendingTasks === 1 && 0 < t.replay.nodes.length)
                throw Error(
                  "Couldn't find all resumable slots by key/index during replaying. The tree doesn't match so React will fallback to client rendering."
                );
              t.replay.pendingTasks--;
            } catch (Gn) {
              if (typeof Gn == "object" && Gn !== null && (Gn === ya || typeof Gn.then == "function"))
                throw t.node === y && (t.replay = G), Gn;
              t.replay.pendingTasks--, z = vt(t.componentStack), W = e, e = t.blockedBoundary, u = Gn, ae = he, he = Mr(W, u, z, t.debugTask), Ia(
                W,
                e,
                Se,
                ae,
                u,
                he,
                z,
                !1
              );
            }
            t.replay = G;
          } else {
            if (z !== Ml)
              throw Error(
                "Expected the resume to render <Suspense> in this slot but instead it rendered <" + (Qn(z) || "Unknown") + ">. The tree doesn't match so React will fallback to client rendering."
              );
            e: {
              G = void 0, z = he[5], ae = he[2], y = he[3], C = he[4] === null ? [] : he[4][2], he = he[4] === null ? null : he[4][3];
              var Te = t.keyPath, fe = t.replay, pn = t.blockedBoundary, Bn = t.hoistableState, hn = W.children, Ye = W.fallback, _t = /* @__PURE__ */ new Set();
              W = t.formatContext.insertionMode < Tt ? ir(
                e,
                _t,
                Xn(),
                Xn()
              ) : ir(
                e,
                _t,
                null,
                null
              ), W.parentFlushed = !0, W.rootSegmentID = z, t.blockedBoundary = W, t.hoistableState = W.contentState, t.keyPath = u, t.replay = { nodes: ae, slots: y, pendingTasks: 1 };
              try {
                if (cr(e, t, hn, -1), t.replay.pendingTasks === 1 && 0 < t.replay.nodes.length)
                  throw Error(
                    "Couldn't find all resumable slots by key/index during replaying. The tree doesn't match so React will fallback to client rendering."
                  );
                if (t.replay.pendingTasks--, W.pendingTasks === 0 && W.status === tn) {
                  W.status = cn, e.completedBoundaries.push(W);
                  break e;
                }
              } catch (Gn) {
                W.status = bn, Se = vt(t.componentStack), G = Mr(
                  e,
                  Gn,
                  Se,
                  t.debugTask
                ), ii(W, G, Gn, Se, !1), t.replay.pendingTasks--, e.clientRenderedBoundaries.push(W);
              } finally {
                t.blockedBoundary = pn, t.hoistableState = Bn, t.replay = fe, t.keyPath = Te;
              }
              W = Mc(
                e,
                null,
                { nodes: C, slots: he, pendingTasks: 0 },
                Ye,
                -1,
                pn,
                W.fallbackState,
                _t,
                [u[0], "Suspense Fallback", u[2]],
                t.formatContext,
                t.context,
                t.treeContext,
                t.componentStack,
                !0,
                It,
                t.debugTask
              ), ra(W), e.pingedTasks.push(W);
            }
          }
          k.splice(be, 1);
          break;
        }
      }
    }
    function sr(e, t, u, y) {
      t.replay !== null && typeof t.replay.slots == "number" ? Fl(e, t, t.replay.slots, u, y) : (t.node = u, t.childIndex = y, u = t.componentStack, y = t.debugTask, ra(t), li(e, t), t.componentStack = u, t.debugTask = y);
    }
    function li(e, t) {
      var u = t.node, y = t.childIndex;
      if (u !== null) {
        if (typeof u == "object") {
          switch (u.$$typeof) {
            case hi:
              var C = u.type, k = u.key;
              u = u.props;
              var z = u.ref;
              z = z !== void 0 ? z : null;
              var W = t.debugTask, ae = Qn(C);
              k = k ?? (y === -1 ? 0 : y);
              var G = [t.keyPath, ae, k];
              t.replay !== null ? W ? W.run(
                Pn.bind(
                  null,
                  e,
                  t,
                  G,
                  ae,
                  k,
                  y,
                  C,
                  u,
                  z,
                  t.replay
                )
              ) : Pn(
                e,
                t,
                G,
                ae,
                k,
                y,
                C,
                u,
                z,
                t.replay
              ) : W ? W.run(
                lr.bind(
                  null,
                  e,
                  t,
                  G,
                  C,
                  u,
                  z
                )
              ) : lr(e, t, G, C, u, z);
              return;
            case zo:
              throw Error(
                "Portals are not currently supported by the server renderer. Render them conditionally so that they only appear on the client render."
              );
            case Ft:
              if (u = ve(u), e.status === 12) throw null;
              sr(e, t, u, y);
              return;
          }
          if (Nt(u)) {
            Ma(e, t, u, y);
            return;
          }
          if (u === null || typeof u != "object" ? k = null : (C = Ts && u[Ts] || u["@@iterator"], k = typeof C == "function" ? C : null), k && (C = k.call(u))) {
            if (C === u ? (y !== -1 || t.componentStack === null || typeof t.componentStack.type != "function" || Object.prototype.toString.call(t.componentStack.type) !== "[object GeneratorFunction]" || Object.prototype.toString.call(C) !== "[object Generator]") && (_r || console.error(
              "Using Iterators as children is unsupported and will likely yield unexpected results because enumerating a generator mutates it. You may convert it to an array with `Array.from()` or the `[...spread]` operator before rendering. You can also use an Iterable that can iterate multiple times over the same items."
            ), _r = !0) : u.entries !== k || Mn || (console.error(
              "Using Maps as children is not supported. Use an array of keyed ReactElements instead."
            ), Mn = !0), u = C.next(), !u.done) {
              k = [];
              do
                k.push(u.value), u = C.next();
              while (!u.done);
              Ma(e, t, k, y);
            }
            return;
          }
          if (typeof u.then == "function")
            return t.thenableState = null, sr(
              e,
              t,
              fs(u),
              y
            );
          if (u.$$typeof === Wo)
            return sr(
              e,
              t,
              u._currentValue,
              y
            );
          throw e = Object.prototype.toString.call(u), Error(
            "Objects are not valid as a React child (found: " + (e === "[object Object]" ? "object with keys {" + Object.keys(u).join(", ") + "}" : e) + "). If you meant to render a collection of children, use an array instead."
          );
        }
        typeof u == "string" ? (t = t.blockedSegment, t !== null && (t.lastPushedText = on(
          t.chunks,
          u,
          e.renderState,
          t.lastPushedText
        ))) : typeof u == "number" || typeof u == "bigint" ? (t = t.blockedSegment, t !== null && (t.lastPushedText = on(
          t.chunks,
          "" + u,
          e.renderState,
          t.lastPushedText
        ))) : (typeof u == "function" && (e = u.displayName || u.name || "Component", console.error(
          "Functions are not valid as a React child. This may happen if you return %s instead of <%s /> from render. Or maybe you meant to call this function rather than return it.",
          e,
          e
        )), typeof u == "symbol" && console.error(
          `Symbols are not valid as a React child.
  %s`,
          String(u)
        ));
      }
    }
    function Ma(e, t, u, y) {
      var C = t.keyPath, k = t.componentStack, z = t.debugTask;
      if (Pl(t, t.node._debugInfo), y !== -1 && (t.keyPath = [t.keyPath, "Fragment", y], t.replay !== null)) {
        for (var W = t.replay, ae = W.nodes, G = 0; G < ae.length; G++) {
          var be = ae[G];
          if (be[1] === y) {
            y = be[2], be = be[3], t.replay = { nodes: y, slots: be, pendingTasks: 1 };
            try {
              if (Ma(e, t, u, -1), t.replay.pendingTasks === 1 && 0 < t.replay.nodes.length)
                throw Error(
                  "Couldn't find all resumable slots by key/index during replaying. The tree doesn't match so React will fallback to client rendering."
                );
              t.replay.pendingTasks--;
            } catch (hn) {
              if (typeof hn == "object" && hn !== null && (hn === ya || typeof hn.then == "function"))
                throw hn;
              t.replay.pendingTasks--;
              var he = vt(t.componentStack);
              u = t.blockedBoundary;
              var Se = hn, Te = be;
              be = Mr(
                e,
                Se,
                he,
                t.debugTask
              ), Ia(
                e,
                u,
                y,
                Te,
                Se,
                be,
                he,
                !1
              );
            }
            t.replay = W, ae.splice(G, 1);
            break;
          }
        }
        t.keyPath = C, t.componentStack = k, t.debugTask = z;
        return;
      }
      if (W = t.treeContext, ae = u.length, t.replay !== null && (G = t.replay.slots, G !== null && typeof G == "object")) {
        for (y = 0; y < ae; y++)
          be = u[y], t.treeContext = or(
            W,
            ae,
            y
          ), Se = G[y], typeof Se == "number" ? (Fl(e, t, Se, be, y), delete G[y]) : cr(e, t, be, y);
        t.treeContext = W, t.keyPath = C, t.componentStack = k, t.debugTask = z;
        return;
      }
      for (G = 0; G < ae; G++) {
        if (y = u[G], Te = e, be = t, Se = y, Se !== null && typeof Se == "object" && (Se.$$typeof === hi || Se.$$typeof === zo) && Se._store && (!Se._store.validated && Se.key == null || Se._store.validated === 2)) {
          if (typeof Se._store != "object")
            throw Error(
              "React Component in warnForMissingKey should have a _store. This error is likely caused by a bug in React. Please file an issue."
            );
          if (Se._store.validated = 1, he = Te.didWarnForKey, he == null && (he = Te.didWarnForKey = /* @__PURE__ */ new WeakSet()), Te = be.componentStack, Te !== null && !he.has(Te)) {
            he.add(Te);
            var fe = Qn(Se.type);
            he = Se._owner;
            var pn = Te.owner;
            if (Te = "", pn && typeof pn.type < "u") {
              var Bn = Qn(pn.type);
              Bn && (Te = `

Check the render method of \`` + Bn + "`.");
            }
            Te || fe && (Te = `

Check the top-level render call using <` + fe + ">."), fe = "", he != null && pn !== he && (pn = null, typeof he.type < "u" ? pn = Qn(he.type) : typeof he.name == "string" && (pn = he.name), pn && (fe = " It was passed a child from " + pn + ".")), he = be.componentStack, be.componentStack = {
              parent: be.componentStack,
              type: Se.type,
              owner: Se._owner,
              stack: Se._debugStack
            }, console.error(
              'Each child in a list should have a unique "key" prop.%s%s See https://react.dev/link/warning-keys for more information.',
              Te,
              fe
            ), be.componentStack = he;
          }
        }
        t.treeContext = or(W, ae, G), cr(e, t, y, G);
      }
      t.treeContext = W, t.keyPath = C, t.componentStack = k, t.debugTask = z;
    }
    function oa(e, t) {
      e = e.trackedPostpones, e !== null && (t = t.trackedContentKeyPath, t !== null && (t = e.workingMap.get(t), t !== void 0 && (t.length = 4, t[2] = [], t[3] = null)));
    }
    function aa(e, t, u) {
      return Mc(
        e,
        u,
        t.replay,
        t.node,
        t.childIndex,
        t.blockedBoundary,
        t.hoistableState,
        t.abortSet,
        t.keyPath,
        t.formatContext,
        t.context,
        t.treeContext,
        t.componentStack,
        t.isFallback,
        It,
        t.debugTask
      );
    }
    function Zi(e, t, u) {
      var y = t.blockedSegment, C = so(
        e,
        y.chunks.length,
        null,
        t.formatContext,
        y.lastPushedText,
        !0
      );
      return y.children.push(C), y.lastPushedText = !1, ta(
        e,
        u,
        t.node,
        t.childIndex,
        t.blockedBoundary,
        C,
        t.blockedPreamble,
        t.hoistableState,
        t.abortSet,
        t.keyPath,
        t.formatContext,
        t.context,
        t.treeContext,
        t.componentStack,
        t.isFallback,
        It,
        t.debugTask
      );
    }
    function cr(e, t, u, y) {
      var C = t.formatContext, k = t.context, z = t.keyPath, W = t.treeContext, ae = t.componentStack, G = t.debugTask, be = t.blockedSegment;
      if (be === null)
        try {
          return sr(e, t, u, y);
        } catch (Te) {
          if (Yr(), u = Te === ya ? Hi() : Te, typeof u == "object" && u !== null) {
            if (typeof u.then == "function") {
              y = No(), e = aa(
                e,
                t,
                y
              ).ping, u.then(e, e), t.formatContext = C, t.context = k, t.keyPath = z, t.treeContext = W, t.componentStack = ae, t.debugTask = G, Cn(k);
              return;
            }
            if (u.message === "Maximum call stack size exceeded") {
              u = No(), u = aa(e, t, u), e.pingedTasks.push(u), t.formatContext = C, t.context = k, t.keyPath = z, t.treeContext = W, t.componentStack = ae, t.debugTask = G, Cn(k);
              return;
            }
          }
        }
      else {
        var he = be.children.length, Se = be.chunks.length;
        try {
          return sr(e, t, u, y);
        } catch (Te) {
          if (Yr(), be.children.length = he, be.chunks.length = Se, u = Te === ya ? Hi() : Te, typeof u == "object" && u !== null) {
            if (typeof u.then == "function") {
              y = No(), e = Zi(
                e,
                t,
                y
              ).ping, u.then(e, e), t.formatContext = C, t.context = k, t.keyPath = z, t.treeContext = W, t.componentStack = ae, t.debugTask = G, Cn(k);
              return;
            }
            if (u.message === "Maximum call stack size exceeded") {
              u = No(), u = Zi(e, t, u), e.pingedTasks.push(u), t.formatContext = C, t.context = k, t.keyPath = z, t.treeContext = W, t.componentStack = ae, t.debugTask = G, Cn(k);
              return;
            }
          }
        }
      }
      throw t.formatContext = C, t.context = k, t.keyPath = z, t.treeContext = W, Cn(k), u;
    }
    function ia(e) {
      var t = e.blockedBoundary;
      e = e.blockedSegment, e !== null && (e.status = 3, bs(this, t, e));
    }
    function Ia(e, t, u, y, C, k, z, W) {
      for (var ae = 0; ae < u.length; ae++) {
        var G = u[ae];
        if (G.length === 4)
          Ia(
            e,
            t,
            G[2],
            G[3],
            C,
            k,
            z,
            W
          );
        else {
          var be = e;
          G = G[5];
          var he = C, Se = k, Te = z, fe = W, pn = ir(
            be,
            /* @__PURE__ */ new Set(),
            null,
            null
          );
          pn.parentFlushed = !0, pn.rootSegmentID = G, pn.status = bn, ii(
            pn,
            Se,
            he,
            Te,
            fe
          ), pn.parentFlushed && be.clientRenderedBoundaries.push(pn);
        }
      }
      if (u.length = 0, y !== null) {
        if (t === null)
          throw Error(
            "We should not have any resumable nodes in the shell. This is a bug in React."
          );
        if (t.status !== bn && (t.status = bn, ii(
          t,
          k,
          C,
          z,
          W
        ), t.parentFlushed && e.clientRenderedBoundaries.push(t)), typeof y == "object")
          for (var Bn in y) delete y[Bn];
      }
    }
    function Gr(e, t, u) {
      var y = e.blockedBoundary, C = e.blockedSegment;
      if (C !== null) {
        if (C.status === 6) return;
        C.status = 3;
      }
      if (C = vt(e.componentStack), y === null) {
        if (t.status !== 13 && t.status !== xn) {
          if (y = e.replay, y === null) {
            Mr(t, u, C, null), Ir(t, u, C, null);
            return;
          }
          y.pendingTasks--, y.pendingTasks === 0 && 0 < y.nodes.length && (e = Mr(t, u, C, null), Ia(
            t,
            null,
            y.nodes,
            y.slots,
            u,
            e,
            C,
            !0
          )), t.pendingRootTasks--, t.pendingRootTasks === 0 && Da(t);
        }
      } else
        y.pendingTasks--, y.status !== bn && (y.status = bn, e = Mr(t, u, C, null), y.status = bn, ii(y, e, u, C, !0), oa(t, y), y.parentFlushed && t.clientRenderedBoundaries.push(y)), y.fallbackAbortableTasks.forEach(function(k) {
          return Gr(k, t, u);
        }), y.fallbackAbortableTasks.clear();
      t.allPendingTasks--, t.allPendingTasks === 0 && Lo(t);
    }
    function Vi(e, t) {
      try {
        var u = e.renderState, y = u.onHeaders;
        if (y) {
          var C = u.headers;
          if (C) {
            u.headers = null;
            var k = C.preconnects;
            if (C.fontPreloads && (k && (k += ", "), k += C.fontPreloads), C.highImagePreloads && (k && (k += ", "), k += C.highImagePreloads), !t) {
              var z = u.styles.values(), W = z.next();
              e: for (; 0 < C.remainingCapacity && !W.done; W = z.next())
                for (var ae = W.value.sheets.values(), G = ae.next(); 0 < C.remainingCapacity && !G.done; G = ae.next()) {
                  var be = G.value, he = be.props, Se = he.href, Te = be.props, fe = ei(
                    Te.href,
                    "style",
                    {
                      crossOrigin: Te.crossOrigin,
                      integrity: Te.integrity,
                      nonce: Te.nonce,
                      type: Te.type,
                      fetchPriority: Te.fetchPriority,
                      referrerPolicy: Te.referrerPolicy,
                      media: Te.media
                    }
                  );
                  if (0 <= (C.remainingCapacity -= fe.length + 2))
                    u.resets.style[Se] = ln, k && (k += ", "), k += fe, u.resets.style[Se] = typeof he.crossOrigin == "string" || typeof he.integrity == "string" ? [he.crossOrigin, he.integrity] : ln;
                  else break e;
                }
            }
            y(k ? { Link: k } : {});
          }
        }
      } catch (pn) {
        Mr(e, pn, {}, null);
      }
    }
    function Da(e) {
      e.trackedPostpones === null && Vi(e, !0), e.trackedPostpones === null && ys(e), e.onShellError = lo, e = e.onShellReady, e();
    }
    function Lo(e) {
      Vi(
        e,
        e.trackedPostpones === null ? !0 : e.completedRootSegment === null || e.completedRootSegment.status !== qe
      ), ys(e), e = e.onAllReady, e();
    }
    function la(e, t) {
      if (t.chunks.length === 0 && t.children.length === 1 && t.children[0].boundary === null && t.children[0].id === -1) {
        var u = t.children[0];
        u.id = t.id, u.parentFlushed = !0, u.status === cn && la(e, u);
      } else e.completedSegments.push(t);
    }
    function bs(e, t, u) {
      if (t === null) {
        if (u !== null && u.parentFlushed) {
          if (e.completedRootSegment !== null)
            throw Error(
              "There can only be one root segment. This is a bug in React."
            );
          e.completedRootSegment = u;
        }
        e.pendingRootTasks--, e.pendingRootTasks === 0 && Da(e);
      } else
        t.pendingTasks--, t.status !== bn && (t.pendingTasks === 0 ? (t.status === tn && (t.status = cn), u !== null && u.parentFlushed && u.status === cn && la(t, u), t.parentFlushed && e.completedBoundaries.push(t), t.status === cn && (t.fallbackAbortableTasks.forEach(
          ia,
          e
        ), t.fallbackAbortableTasks.clear(), e.pendingRootTasks === 0 && e.trackedPostpones === null && t.contentPreamble !== null && ys(e))) : u !== null && u.parentFlushed && u.status === cn && (la(t, u), t.completedSegments.length === 1 && t.parentFlushed && e.partialBoundaries.push(t)));
      e.allPendingTasks--, e.allPendingTasks === 0 && Lo(e);
    }
    function Qi(e) {
      if (e.status !== xn && e.status !== 13) {
        var t = ha, u = Ie.H;
        Ie.H = Ws;
        var y = Ie.A;
        Ie.A = Zc;
        var C = mn;
        mn = e;
        var k = Ie.getCurrentStack;
        Ie.getCurrentStack = Aa;
        var z = Fi;
        Fi = e.resumableState;
        try {
          var W = e.pingedTasks, ae;
          for (ae = 0; ae < W.length; ae++) {
            var G = e, be = W[ae], he = be.blockedSegment;
            if (he === null) {
              var Se = void 0, Te = G;
              if (G = be, G.replay.pendingTasks !== 0) {
                Cn(G.context), Se = Vn, Vn = G;
                try {
                  if (typeof G.replay.slots == "number" ? Fl(
                    Te,
                    G,
                    G.replay.slots,
                    G.node,
                    G.childIndex
                  ) : li(Te, G), G.replay.pendingTasks === 1 && 0 < G.replay.nodes.length)
                    throw Error(
                      "Couldn't find all resumable slots by key/index during replaying. The tree doesn't match so React will fallback to client rendering."
                    );
                  G.replay.pendingTasks--, G.abortSet.delete(G), bs(Te, G.blockedBoundary, null);
                } catch (Un) {
                  Yr();
                  var fe = Un === ya ? Hi() : Un;
                  if (typeof fe == "object" && fe !== null && typeof fe.then == "function") {
                    var pn = G.ping;
                    fe.then(pn, pn), G.thenableState = No();
                  } else {
                    G.replay.pendingTasks--, G.abortSet.delete(G);
                    var Bn = vt(G.componentStack), hn = void 0, Ye = Te, _t = G.blockedBoundary, Gn = Te.status === 12 ? Te.fatalError : fe, gn = Bn, mr = G.replay.nodes, jr = G.replay.slots;
                    hn = Mr(
                      Ye,
                      Gn,
                      gn,
                      G.debugTask
                    ), Ia(
                      Ye,
                      _t,
                      mr,
                      jr,
                      Gn,
                      hn,
                      gn,
                      !1
                    ), Te.pendingRootTasks--, Te.pendingRootTasks === 0 && Da(Te), Te.allPendingTasks--, Te.allPendingTasks === 0 && Lo(Te);
                  }
                } finally {
                  Vn = Se;
                }
              }
            } else if (Te = Se = void 0, hn = be, Ye = he, Ye.status === tn) {
              Ye.status = 6, Cn(hn.context), Te = Vn, Vn = hn;
              var Yt = Ye.children.length, jt = Ye.chunks.length;
              try {
                li(G, hn), Ye.lastPushedText && Ye.textEmbedded && Ye.chunks.push(Xo), hn.abortSet.delete(hn), Ye.status = cn, bs(
                  G,
                  hn.blockedBoundary,
                  Ye
                );
              } catch (Un) {
                Yr(), Ye.children.length = Yt, Ye.chunks.length = jt;
                var $n = Un === ya ? Hi() : G.status === 12 ? G.fatalError : Un;
                if (typeof $n == "object" && $n !== null && typeof $n.then == "function") {
                  Ye.status = tn, hn.thenableState = No();
                  var Pr = hn.ping;
                  $n.then(Pr, Pr);
                } else {
                  var Fr = vt(
                    hn.componentStack
                  );
                  hn.abortSet.delete(hn), Ye.status = 4;
                  var wn = hn.blockedBoundary, ht = hn.debugTask;
                  Se = Mr(
                    G,
                    $n,
                    Fr,
                    ht
                  ), wn === null ? Ir(
                    G,
                    $n,
                    Fr,
                    ht
                  ) : (wn.pendingTasks--, wn.status !== bn && (wn.status = bn, ii(
                    wn,
                    Se,
                    $n,
                    Fr,
                    !1
                  ), oa(G, wn), wn.parentFlushed && G.clientRenderedBoundaries.push(
                    wn
                  ), G.pendingRootTasks === 0 && G.trackedPostpones === null && wn.contentPreamble !== null && ys(G))), G.allPendingTasks--, G.allPendingTasks === 0 && Lo(G);
                }
              } finally {
                Vn = Te;
              }
            }
          }
          W.splice(0, ae), e.destination !== null && ci(
            e,
            e.destination
          );
        } catch (Un) {
          W = {}, Mr(e, Un, W, null), Ir(e, Un, W, null);
        } finally {
          Fi = z, Ie.H = u, Ie.A = y, Ie.getCurrentStack = k, u === Ws && Cn(t), mn = C;
        }
      }
    }
    function rc(e, t, u) {
      t.preambleChildren.length && u.push(t.preambleChildren);
      for (var y = !1, C = 0; C < t.children.length; C++)
        y = si(
          e,
          t.children[C],
          u
        ) || y;
      return y;
    }
    function si(e, t, u) {
      var y = t.boundary;
      if (y === null)
        return rc(
          e,
          t,
          u
        );
      var C = y.contentPreamble, k = y.fallbackPreamble;
      if (C === null || k === null) return !1;
      switch (y.status) {
        case cn:
          if (ro(e.renderState, C), t = y.completedSegments[0], !t)
            throw Error(
              "A previously unvisited boundary must have exactly one root segment. This is a bug in React."
            );
          return rc(
            e,
            t,
            u
          );
        case qe:
          if (e.trackedPostpones !== null) return !0;
        case bn:
          if (t.status === cn)
            return ro(e.renderState, k), rc(
              e,
              t,
              u
            );
        default:
          return !0;
      }
    }
    function ys(e) {
      if (e.completedRootSegment && e.completedPreambleSegments === null) {
        var t = [], u = si(
          e,
          e.completedRootSegment,
          t
        ), y = e.renderState.preamble;
        (u === !1 || y.headChunks && y.bodyChunks) && (e.completedPreambleSegments = t);
      }
    }
    function oc(e, t, u, y) {
      switch (u.parentFlushed = !0, u.status) {
        case tn:
          u.id = e.nextSegmentId++;
        case qe:
          return y = u.id, u.lastPushedText = !1, u.textEmbedded = !1, e = e.renderState, M(t, rl), M(t, e.placeholderPrefix), e = V(y.toString(16)), M(t, e), J(t, Ci);
        case cn:
          u.status = st;
          var C = !0, k = u.chunks, z = 0;
          u = u.children;
          for (var W = 0; W < u.length; W++) {
            for (C = u[W]; z < C.index; z++)
              M(t, k[z]);
            C = Ol(e, t, C, y);
          }
          for (; z < k.length - 1; z++)
            M(t, k[z]);
          return z < k.length && (C = J(t, k[z])), C;
        default:
          throw Error(
            "Aborted, errored or already flushed boundaries should not be flushed again. This is a bug in React."
          );
      }
    }
    function Ol(e, t, u, y) {
      var C = u.boundary;
      if (C === null)
        return oc(e, t, u, y);
      if (C.parentFlushed = !0, C.status === bn) {
        var k = C.errorDigest, z = C.errorMessage, W = C.errorStack, ae = C.errorComponentStack;
        return J(t, cu), M(t, Wc), k && (M(t, Wl), M(
          t,
          V(ye(k))
        ), M(
          t,
          za
        )), z && (M(t, Os), M(
          t,
          V(ye(z))
        ), M(
          t,
          za
        )), W && (M(t, Ei), M(
          t,
          V(ye(W))
        ), M(
          t,
          za
        )), ae && (M(t, As), M(
          t,
          V(ye(ae))
        ), M(
          t,
          za
        )), J(t, dc), oc(e, t, u, y), (e = C.fallbackPreamble) && qs(t, e), J(t, fa);
      }
      if (C.status !== cn)
        return C.status === tn && (C.rootSegmentID = e.nextSegmentId++), 0 < C.completedSegments.length && e.partialBoundaries.push(C), Ks(
          t,
          e.renderState,
          C.rootSegmentID
        ), y && (C = C.fallbackState, C.styles.forEach(ao, y), C.stylesheets.forEach(
          Bt,
          y
        )), oc(e, t, u, y), J(t, fa);
      if (C.byteSize > e.progressiveChunkSize)
        return C.rootSegmentID = e.nextSegmentId++, e.completedBoundaries.push(C), Ks(
          t,
          e.renderState,
          C.rootSegmentID
        ), oc(e, t, u, y), J(t, fa);
      if (y && (u = C.contentState, u.styles.forEach(ao, y), u.stylesheets.forEach(Bt, y)), J(t, Ps), u = C.completedSegments, u.length !== 1)
        throw Error(
          "A previously unvisited boundary must have exactly one root segment. This is a bug in React."
        );
      return Ol(e, t, u[0], y), (e = C.contentPreamble) && qs(t, e), J(t, fa);
    }
    function vs(e, t, u, y) {
      return Ni(
        t,
        e.renderState,
        u.parentFormatContext,
        u.id
      ), Ol(e, t, u, y), js(t, u.parentFormatContext);
    }
    function Ic(e, t, u) {
      for (var y = u.completedSegments, C = 0; C < y.length; C++)
        Al(
          e,
          t,
          u,
          y[C]
        );
      y.length = 0, Li(
        t,
        u.contentState,
        e.renderState
      ), y = e.resumableState, e = e.renderState, C = u.rootSegmentID, u = u.contentState;
      var k = e.stylesToHoist;
      return e.stylesToHoist = !1, M(t, e.startInlineScript), k ? (y.instructions & kn) === En ? (y.instructions = y.instructions | Ze | kn, M(t, sn)) : (y.instructions & Ze) === En ? (y.instructions |= Ze, M(
        t,
        zn
      )) : M(t, Ct) : (y.instructions & kn) === En ? (y.instructions |= kn, M(t, Ve)) : M(t, en), y = V(C.toString(16)), M(t, e.boundaryPrefix), M(t, y), M(t, Sn), M(t, e.segmentPrefix), M(t, y), k ? (M(t, kr), $s(t, u)) : M(t, Et), u = J(t, Kr), Qt(t, e) && u;
    }
    function Al(e, t, u, y) {
      if (y.status === st) return !0;
      var C = u.contentState, k = y.id;
      if (k === -1) {
        if ((y.id = u.rootSegmentID) === -1)
          throw Error(
            "A root segment ID must have been assigned by now. This is a bug in React."
          );
        return vs(
          e,
          t,
          y,
          C
        );
      }
      return k === u.rootSegmentID ? vs(
        e,
        t,
        y,
        C
      ) : (vs(e, t, y, C), u = e.resumableState, e = e.renderState, M(t, e.startInlineScript), (u.instructions & On) === En ? (u.instructions |= On, M(t, j)) : M(t, we), M(t, e.segmentPrefix), k = V(k.toString(16)), M(t, k), M(t, ce), M(t, e.placeholderPrefix), M(t, k), t = J(t, We), t);
    }
    function ci(e, t) {
      Kt = new Uint8Array(2048), Cr = 0;
      try {
        if (!(0 < e.pendingRootTasks)) {
          var u, y = e.completedRootSegment;
          if (y !== null) {
            if (y.status === qe) return;
            var C = e.completedPreambleSegments;
            if (C === null) return;
            var k = e.renderState, z = k.preamble, W = z.htmlChunks, ae = z.headChunks, G;
            if (W) {
              for (G = 0; G < W.length; G++)
                M(t, W[G]);
              if (ae)
                for (G = 0; G < ae.length; G++)
                  M(t, ae[G]);
              else
                M(t, xe("head")), M(t, at);
            } else if (ae)
              for (G = 0; G < ae.length; G++)
                M(t, ae[G]);
            var be = k.charsetChunks;
            for (G = 0; G < be.length; G++)
              M(t, be[G]);
            be.length = 0, k.preconnects.forEach(Rn, t), k.preconnects.clear();
            var he = k.viewportChunks;
            for (G = 0; G < he.length; G++)
              M(t, he[G]);
            he.length = 0, k.fontPreloads.forEach(Rn, t), k.fontPreloads.clear(), k.highImagePreloads.forEach(Rn, t), k.highImagePreloads.clear(), k.styles.forEach(cs, t);
            var Se = k.importMapChunks;
            for (G = 0; G < Se.length; G++)
              M(t, Se[G]);
            Se.length = 0, k.bootstrapScripts.forEach(Rn, t), k.scripts.forEach(Rn, t), k.scripts.clear(), k.bulkPreloads.forEach(Rn, t), k.bulkPreloads.clear();
            var Te = k.hoistableChunks;
            for (G = 0; G < Te.length; G++)
              M(t, Te[G]);
            for (k = Te.length = 0; k < C.length; k++) {
              var fe = C[k];
              for (z = 0; z < fe.length; z++)
                Ol(e, t, fe[z], null);
            }
            var pn = e.renderState.preamble, Bn = pn.headChunks;
            (pn.htmlChunks || Bn) && M(t, qa("head"));
            var hn = pn.bodyChunks;
            if (hn)
              for (C = 0; C < hn.length; C++)
                M(t, hn[C]);
            Ol(e, t, y, null), e.completedRootSegment = null, Qt(t, e.renderState);
          }
          var Ye = e.renderState;
          y = 0;
          var _t = Ye.viewportChunks;
          for (y = 0; y < _t.length; y++)
            M(
              t,
              _t[y]
            );
          _t.length = 0, Ye.preconnects.forEach(Rn, t), Ye.preconnects.clear(), Ye.fontPreloads.forEach(Rn, t), Ye.fontPreloads.clear(), Ye.highImagePreloads.forEach(
            Rn,
            t
          ), Ye.highImagePreloads.clear(), Ye.styles.forEach(Bo, t), Ye.scripts.forEach(Rn, t), Ye.scripts.clear(), Ye.bulkPreloads.forEach(Rn, t), Ye.bulkPreloads.clear();
          var Gn = Ye.hoistableChunks;
          for (y = 0; y < Gn.length; y++)
            M(
              t,
              Gn[y]
            );
          Gn.length = 0;
          var gn = e.clientRenderedBoundaries;
          for (u = 0; u < gn.length; u++) {
            var mr = gn[u];
            Ye = t;
            var jr = e.resumableState, Yt = e.renderState, jt = mr.rootSegmentID, $n = mr.errorDigest, Pr = mr.errorMessage, Fr = mr.errorStack, wn = mr.errorComponentStack;
            M(
              Ye,
              Yt.startInlineScript
            ), (jr.instructions & Yn) === En ? (jr.instructions |= Yn, M(Ye, br)) : M(Ye, qt), M(
              Ye,
              Yt.boundaryPrefix
            ), M(Ye, V(jt.toString(16))), M(Ye, Dr), ($n || Pr || Fr || wn) && (M(
              Ye,
              Wn
            ), M(
              Ye,
              V(
                ma($n || "")
              )
            )), (Pr || Fr || wn) && (M(
              Ye,
              Wn
            ), M(
              Ye,
              V(
                ma(Pr || "")
              )
            )), (Fr || wn) && (M(
              Ye,
              Wn
            ), M(
              Ye,
              V(
                ma(Fr || "")
              )
            )), wn && (M(
              Ye,
              Wn
            ), M(
              Ye,
              V(
                ma(wn)
              )
            ));
            var ht = J(
              Ye,
              Mt
            );
            if (!ht) {
              e.destination = null, u++, gn.splice(0, u);
              return;
            }
          }
          gn.splice(0, u);
          var Un = e.completedBoundaries;
          for (u = 0; u < Un.length; u++)
            if (!Ic(
              e,
              t,
              Un[u]
            )) {
              e.destination = null, u++, Un.splice(0, u);
              return;
            }
          Un.splice(0, u), re(t), Kt = new Uint8Array(2048), Cr = 0;
          var Br = e.partialBoundaries;
          for (u = 0; u < Br.length; u++) {
            e: {
              gn = e, mr = t;
              var Nr = Br[u], $t = Nr.completedSegments;
              for (ht = 0; ht < $t.length; ht++)
                if (!Al(
                  gn,
                  mr,
                  Nr,
                  $t[ht]
                )) {
                  ht++, $t.splice(0, ht);
                  var pa = !1;
                  break e;
                }
              $t.splice(0, ht), pa = Li(
                mr,
                Nr.contentState,
                gn.renderState
              );
            }
            if (!pa) {
              e.destination = null, u++, Br.splice(0, u);
              return;
            }
          }
          Br.splice(0, u);
          var po = e.completedBoundaries;
          for (u = 0; u < po.length; u++)
            if (!Ic(e, t, po[u])) {
              e.destination = null, u++, po.splice(0, u);
              return;
            }
          po.splice(0, u);
        }
      } finally {
        e.allPendingTasks === 0 && e.pingedTasks.length === 0 && e.clientRenderedBoundaries.length === 0 && e.completedBoundaries.length === 0 ? (e.flushScheduled = !1, u = e.resumableState, u.hasBody && M(t, qa("body")), u.hasHtml && M(t, qa("html")), re(t), e.abortableTasks.size !== 0 && console.error(
          "There was still abortable task at the root when we closed. This is a bug in React."
        ), e.status = xn, t.close(), e.destination = null) : re(t);
      }
    }
    function Ji(e) {
      e.flushScheduled = e.destination !== null, su(function() {
        return Qi(e);
      }), Y(function() {
        e.status === 10 && (e.status = 11), e.trackedPostpones === null && Vi(e, e.pendingRootTasks === 0);
      });
    }
    function ui(e) {
      e.flushScheduled === !1 && e.pingedTasks.length === 0 && e.destination !== null && (e.flushScheduled = !0, Y(function() {
        var t = e.destination;
        t ? ci(e, t) : e.flushScheduled = !1;
      }));
    }
    function ps(e, t) {
      if (e.status === 13)
        e.status = xn, N(t, e.fatalError);
      else if (e.status !== xn && e.destination === null) {
        e.destination = t;
        try {
          ci(e, t);
        } catch (u) {
          t = {}, Mr(e, u, t, null), Ir(e, u, t, null);
        }
      }
    }
    function fi(e, t) {
      (e.status === 11 || e.status === 10) && (e.status = 12);
      try {
        var u = e.abortableTasks;
        if (0 < u.size) {
          var y = t === void 0 ? Error("The render was aborted by the server without a reason.") : typeof t == "object" && t !== null && typeof t.then == "function" ? Error("The render was aborted by the server with a promise.") : t;
          e.fatalError = y, u.forEach(function(C) {
            return Gr(C, e, y);
          }), u.clear();
        }
        e.destination !== null && ci(e, e.destination);
      } catch (C) {
        t = {}, Mr(e, C, t, null), Ir(e, C, t, null);
      }
    }
    function Ki() {
      var e = qi.version;
      if (e !== "19.1.0")
        throw Error(
          `Incompatible React versions: The "react" and "react-dom" packages must have the exact same version. Instead got:
  - react:      ` + (e + `
  - react-dom:  19.1.0
Learn more: https://react.dev/warnings/version-mismatch`)
        );
    }
    var qi = nu, di = Uf, hi = Symbol.for("react.transitional.element"), zo = Symbol.for("react.portal"), sa = Symbol.for("react.fragment"), ws = Symbol.for("react.strict_mode"), ji = Symbol.for("react.profiler"), ur = Symbol.for("react.provider"), gi = Symbol.for("react.consumer"), Wo = Symbol.for("react.context"), bi = Symbol.for("react.forward_ref"), Ml = Symbol.for("react.suspense"), Uo = Symbol.for("react.suspense_list"), Jn = Symbol.for("react.memo"), Ft = Symbol.for("react.lazy"), Xr = Symbol.for("react.scope"), yi = Symbol.for("react.activity"), ft = Symbol.for("react.legacy_hidden"), An = Symbol.for("react.memo_cache_sentinel"), ac = Symbol.for("react.view_transition"), Ts = Symbol.iterator, Nt = Array.isArray, ic = /* @__PURE__ */ new WeakMap(), lc = /* @__PURE__ */ new WeakMap(), Il = Symbol.for("react.client.reference"), Cs = new MessageChannel(), ca = [];
    Cs.port1.onmessage = function() {
      var e = ca.shift();
      e && e();
    };
    var co = Promise, su = typeof queueMicrotask == "function" ? queueMicrotask : function(e) {
      co.resolve(null).then(e).catch(Z);
    }, Kt = null, Cr = 0, Er = new TextEncoder(), rt = Object.assign, Fn = Object.prototype.hasOwnProperty, Es = RegExp(
      "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
    ), sc = {}, Dc = {}, _c = new Set(
      "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
        " "
      )
    ), Dl = /* @__PURE__ */ new Map([
      ["acceptCharset", "accept-charset"],
      ["htmlFor", "for"],
      ["httpEquiv", "http-equiv"],
      ["crossOrigin", "crossorigin"],
      ["accentHeight", "accent-height"],
      ["alignmentBaseline", "alignment-baseline"],
      ["arabicForm", "arabic-form"],
      ["baselineShift", "baseline-shift"],
      ["capHeight", "cap-height"],
      ["clipPath", "clip-path"],
      ["clipRule", "clip-rule"],
      ["colorInterpolation", "color-interpolation"],
      ["colorInterpolationFilters", "color-interpolation-filters"],
      ["colorProfile", "color-profile"],
      ["colorRendering", "color-rendering"],
      ["dominantBaseline", "dominant-baseline"],
      ["enableBackground", "enable-background"],
      ["fillOpacity", "fill-opacity"],
      ["fillRule", "fill-rule"],
      ["floodColor", "flood-color"],
      ["floodOpacity", "flood-opacity"],
      ["fontFamily", "font-family"],
      ["fontSize", "font-size"],
      ["fontSizeAdjust", "font-size-adjust"],
      ["fontStretch", "font-stretch"],
      ["fontStyle", "font-style"],
      ["fontVariant", "font-variant"],
      ["fontWeight", "font-weight"],
      ["glyphName", "glyph-name"],
      ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
      ["glyphOrientationVertical", "glyph-orientation-vertical"],
      ["horizAdvX", "horiz-adv-x"],
      ["horizOriginX", "horiz-origin-x"],
      ["imageRendering", "image-rendering"],
      ["letterSpacing", "letter-spacing"],
      ["lightingColor", "lighting-color"],
      ["markerEnd", "marker-end"],
      ["markerMid", "marker-mid"],
      ["markerStart", "marker-start"],
      ["overlinePosition", "overline-position"],
      ["overlineThickness", "overline-thickness"],
      ["paintOrder", "paint-order"],
      ["panose-1", "panose-1"],
      ["pointerEvents", "pointer-events"],
      ["renderingIntent", "rendering-intent"],
      ["shapeRendering", "shape-rendering"],
      ["stopColor", "stop-color"],
      ["stopOpacity", "stop-opacity"],
      ["strikethroughPosition", "strikethrough-position"],
      ["strikethroughThickness", "strikethrough-thickness"],
      ["strokeDasharray", "stroke-dasharray"],
      ["strokeDashoffset", "stroke-dashoffset"],
      ["strokeLinecap", "stroke-linecap"],
      ["strokeLinejoin", "stroke-linejoin"],
      ["strokeMiterlimit", "stroke-miterlimit"],
      ["strokeOpacity", "stroke-opacity"],
      ["strokeWidth", "stroke-width"],
      ["textAnchor", "text-anchor"],
      ["textDecoration", "text-decoration"],
      ["textRendering", "text-rendering"],
      ["transformOrigin", "transform-origin"],
      ["underlinePosition", "underline-position"],
      ["underlineThickness", "underline-thickness"],
      ["unicodeBidi", "unicode-bidi"],
      ["unicodeRange", "unicode-range"],
      ["unitsPerEm", "units-per-em"],
      ["vAlphabetic", "v-alphabetic"],
      ["vHanging", "v-hanging"],
      ["vIdeographic", "v-ideographic"],
      ["vMathematical", "v-mathematical"],
      ["vectorEffect", "vector-effect"],
      ["vertAdvY", "vert-adv-y"],
      ["vertOriginX", "vert-origin-x"],
      ["vertOriginY", "vert-origin-y"],
      ["wordSpacing", "word-spacing"],
      ["writingMode", "writing-mode"],
      ["xmlnsXlink", "xmlns:xlink"],
      ["xHeight", "x-height"]
    ]), _a = {
      button: !0,
      checkbox: !0,
      image: !0,
      hidden: !0,
      radio: !0,
      reset: !0,
      submit: !0
    }, Eo = {
      "aria-current": 0,
      "aria-description": 0,
      "aria-details": 0,
      "aria-disabled": 0,
      "aria-hidden": 0,
      "aria-invalid": 0,
      "aria-keyshortcuts": 0,
      "aria-label": 0,
      "aria-roledescription": 0,
      "aria-autocomplete": 0,
      "aria-checked": 0,
      "aria-expanded": 0,
      "aria-haspopup": 0,
      "aria-level": 0,
      "aria-modal": 0,
      "aria-multiline": 0,
      "aria-multiselectable": 0,
      "aria-orientation": 0,
      "aria-placeholder": 0,
      "aria-pressed": 0,
      "aria-readonly": 0,
      "aria-required": 0,
      "aria-selected": 0,
      "aria-sort": 0,
      "aria-valuemax": 0,
      "aria-valuemin": 0,
      "aria-valuenow": 0,
      "aria-valuetext": 0,
      "aria-atomic": 0,
      "aria-busy": 0,
      "aria-live": 0,
      "aria-relevant": 0,
      "aria-dropeffect": 0,
      "aria-grabbed": 0,
      "aria-activedescendant": 0,
      "aria-colcount": 0,
      "aria-colindex": 0,
      "aria-colspan": 0,
      "aria-controls": 0,
      "aria-describedby": 0,
      "aria-errormessage": 0,
      "aria-flowto": 0,
      "aria-labelledby": 0,
      "aria-owns": 0,
      "aria-posinset": 0,
      "aria-rowcount": 0,
      "aria-rowindex": 0,
      "aria-rowspan": 0,
      "aria-setsize": 0
    }, Zr = {}, _l = RegExp(
      "^(aria)-[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
    ), xs = RegExp(
      "^(aria)[A-Z][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
    ), cc = !1, Bl = {
      accept: "accept",
      acceptcharset: "acceptCharset",
      "accept-charset": "acceptCharset",
      accesskey: "accessKey",
      action: "action",
      allowfullscreen: "allowFullScreen",
      alt: "alt",
      as: "as",
      async: "async",
      autocapitalize: "autoCapitalize",
      autocomplete: "autoComplete",
      autocorrect: "autoCorrect",
      autofocus: "autoFocus",
      autoplay: "autoPlay",
      autosave: "autoSave",
      capture: "capture",
      cellpadding: "cellPadding",
      cellspacing: "cellSpacing",
      challenge: "challenge",
      charset: "charSet",
      checked: "checked",
      children: "children",
      cite: "cite",
      class: "className",
      classid: "classID",
      classname: "className",
      cols: "cols",
      colspan: "colSpan",
      content: "content",
      contenteditable: "contentEditable",
      contextmenu: "contextMenu",
      controls: "controls",
      controlslist: "controlsList",
      coords: "coords",
      crossorigin: "crossOrigin",
      dangerouslysetinnerhtml: "dangerouslySetInnerHTML",
      data: "data",
      datetime: "dateTime",
      default: "default",
      defaultchecked: "defaultChecked",
      defaultvalue: "defaultValue",
      defer: "defer",
      dir: "dir",
      disabled: "disabled",
      disablepictureinpicture: "disablePictureInPicture",
      disableremoteplayback: "disableRemotePlayback",
      download: "download",
      draggable: "draggable",
      enctype: "encType",
      enterkeyhint: "enterKeyHint",
      fetchpriority: "fetchPriority",
      for: "htmlFor",
      form: "form",
      formmethod: "formMethod",
      formaction: "formAction",
      formenctype: "formEncType",
      formnovalidate: "formNoValidate",
      formtarget: "formTarget",
      frameborder: "frameBorder",
      headers: "headers",
      height: "height",
      hidden: "hidden",
      high: "high",
      href: "href",
      hreflang: "hrefLang",
      htmlfor: "htmlFor",
      httpequiv: "httpEquiv",
      "http-equiv": "httpEquiv",
      icon: "icon",
      id: "id",
      imagesizes: "imageSizes",
      imagesrcset: "imageSrcSet",
      inert: "inert",
      innerhtml: "innerHTML",
      inputmode: "inputMode",
      integrity: "integrity",
      is: "is",
      itemid: "itemID",
      itemprop: "itemProp",
      itemref: "itemRef",
      itemscope: "itemScope",
      itemtype: "itemType",
      keyparams: "keyParams",
      keytype: "keyType",
      kind: "kind",
      label: "label",
      lang: "lang",
      list: "list",
      loop: "loop",
      low: "low",
      manifest: "manifest",
      marginwidth: "marginWidth",
      marginheight: "marginHeight",
      max: "max",
      maxlength: "maxLength",
      media: "media",
      mediagroup: "mediaGroup",
      method: "method",
      min: "min",
      minlength: "minLength",
      multiple: "multiple",
      muted: "muted",
      name: "name",
      nomodule: "noModule",
      nonce: "nonce",
      novalidate: "noValidate",
      open: "open",
      optimum: "optimum",
      pattern: "pattern",
      placeholder: "placeholder",
      playsinline: "playsInline",
      poster: "poster",
      preload: "preload",
      profile: "profile",
      radiogroup: "radioGroup",
      readonly: "readOnly",
      referrerpolicy: "referrerPolicy",
      rel: "rel",
      required: "required",
      reversed: "reversed",
      role: "role",
      rows: "rows",
      rowspan: "rowSpan",
      sandbox: "sandbox",
      scope: "scope",
      scoped: "scoped",
      scrolling: "scrolling",
      seamless: "seamless",
      selected: "selected",
      shape: "shape",
      size: "size",
      sizes: "sizes",
      span: "span",
      spellcheck: "spellCheck",
      src: "src",
      srcdoc: "srcDoc",
      srclang: "srcLang",
      srcset: "srcSet",
      start: "start",
      step: "step",
      style: "style",
      summary: "summary",
      tabindex: "tabIndex",
      target: "target",
      title: "title",
      type: "type",
      usemap: "useMap",
      value: "value",
      width: "width",
      wmode: "wmode",
      wrap: "wrap",
      about: "about",
      accentheight: "accentHeight",
      "accent-height": "accentHeight",
      accumulate: "accumulate",
      additive: "additive",
      alignmentbaseline: "alignmentBaseline",
      "alignment-baseline": "alignmentBaseline",
      allowreorder: "allowReorder",
      alphabetic: "alphabetic",
      amplitude: "amplitude",
      arabicform: "arabicForm",
      "arabic-form": "arabicForm",
      ascent: "ascent",
      attributename: "attributeName",
      attributetype: "attributeType",
      autoreverse: "autoReverse",
      azimuth: "azimuth",
      basefrequency: "baseFrequency",
      baselineshift: "baselineShift",
      "baseline-shift": "baselineShift",
      baseprofile: "baseProfile",
      bbox: "bbox",
      begin: "begin",
      bias: "bias",
      by: "by",
      calcmode: "calcMode",
      capheight: "capHeight",
      "cap-height": "capHeight",
      clip: "clip",
      clippath: "clipPath",
      "clip-path": "clipPath",
      clippathunits: "clipPathUnits",
      cliprule: "clipRule",
      "clip-rule": "clipRule",
      color: "color",
      colorinterpolation: "colorInterpolation",
      "color-interpolation": "colorInterpolation",
      colorinterpolationfilters: "colorInterpolationFilters",
      "color-interpolation-filters": "colorInterpolationFilters",
      colorprofile: "colorProfile",
      "color-profile": "colorProfile",
      colorrendering: "colorRendering",
      "color-rendering": "colorRendering",
      contentscripttype: "contentScriptType",
      contentstyletype: "contentStyleType",
      cursor: "cursor",
      cx: "cx",
      cy: "cy",
      d: "d",
      datatype: "datatype",
      decelerate: "decelerate",
      descent: "descent",
      diffuseconstant: "diffuseConstant",
      direction: "direction",
      display: "display",
      divisor: "divisor",
      dominantbaseline: "dominantBaseline",
      "dominant-baseline": "dominantBaseline",
      dur: "dur",
      dx: "dx",
      dy: "dy",
      edgemode: "edgeMode",
      elevation: "elevation",
      enablebackground: "enableBackground",
      "enable-background": "enableBackground",
      end: "end",
      exponent: "exponent",
      externalresourcesrequired: "externalResourcesRequired",
      fill: "fill",
      fillopacity: "fillOpacity",
      "fill-opacity": "fillOpacity",
      fillrule: "fillRule",
      "fill-rule": "fillRule",
      filter: "filter",
      filterres: "filterRes",
      filterunits: "filterUnits",
      floodopacity: "floodOpacity",
      "flood-opacity": "floodOpacity",
      floodcolor: "floodColor",
      "flood-color": "floodColor",
      focusable: "focusable",
      fontfamily: "fontFamily",
      "font-family": "fontFamily",
      fontsize: "fontSize",
      "font-size": "fontSize",
      fontsizeadjust: "fontSizeAdjust",
      "font-size-adjust": "fontSizeAdjust",
      fontstretch: "fontStretch",
      "font-stretch": "fontStretch",
      fontstyle: "fontStyle",
      "font-style": "fontStyle",
      fontvariant: "fontVariant",
      "font-variant": "fontVariant",
      fontweight: "fontWeight",
      "font-weight": "fontWeight",
      format: "format",
      from: "from",
      fx: "fx",
      fy: "fy",
      g1: "g1",
      g2: "g2",
      glyphname: "glyphName",
      "glyph-name": "glyphName",
      glyphorientationhorizontal: "glyphOrientationHorizontal",
      "glyph-orientation-horizontal": "glyphOrientationHorizontal",
      glyphorientationvertical: "glyphOrientationVertical",
      "glyph-orientation-vertical": "glyphOrientationVertical",
      glyphref: "glyphRef",
      gradienttransform: "gradientTransform",
      gradientunits: "gradientUnits",
      hanging: "hanging",
      horizadvx: "horizAdvX",
      "horiz-adv-x": "horizAdvX",
      horizoriginx: "horizOriginX",
      "horiz-origin-x": "horizOriginX",
      ideographic: "ideographic",
      imagerendering: "imageRendering",
      "image-rendering": "imageRendering",
      in2: "in2",
      in: "in",
      inlist: "inlist",
      intercept: "intercept",
      k1: "k1",
      k2: "k2",
      k3: "k3",
      k4: "k4",
      k: "k",
      kernelmatrix: "kernelMatrix",
      kernelunitlength: "kernelUnitLength",
      kerning: "kerning",
      keypoints: "keyPoints",
      keysplines: "keySplines",
      keytimes: "keyTimes",
      lengthadjust: "lengthAdjust",
      letterspacing: "letterSpacing",
      "letter-spacing": "letterSpacing",
      lightingcolor: "lightingColor",
      "lighting-color": "lightingColor",
      limitingconeangle: "limitingConeAngle",
      local: "local",
      markerend: "markerEnd",
      "marker-end": "markerEnd",
      markerheight: "markerHeight",
      markermid: "markerMid",
      "marker-mid": "markerMid",
      markerstart: "markerStart",
      "marker-start": "markerStart",
      markerunits: "markerUnits",
      markerwidth: "markerWidth",
      mask: "mask",
      maskcontentunits: "maskContentUnits",
      maskunits: "maskUnits",
      mathematical: "mathematical",
      mode: "mode",
      numoctaves: "numOctaves",
      offset: "offset",
      opacity: "opacity",
      operator: "operator",
      order: "order",
      orient: "orient",
      orientation: "orientation",
      origin: "origin",
      overflow: "overflow",
      overlineposition: "overlinePosition",
      "overline-position": "overlinePosition",
      overlinethickness: "overlineThickness",
      "overline-thickness": "overlineThickness",
      paintorder: "paintOrder",
      "paint-order": "paintOrder",
      panose1: "panose1",
      "panose-1": "panose1",
      pathlength: "pathLength",
      patterncontentunits: "patternContentUnits",
      patterntransform: "patternTransform",
      patternunits: "patternUnits",
      pointerevents: "pointerEvents",
      "pointer-events": "pointerEvents",
      points: "points",
      pointsatx: "pointsAtX",
      pointsaty: "pointsAtY",
      pointsatz: "pointsAtZ",
      popover: "popover",
      popovertarget: "popoverTarget",
      popovertargetaction: "popoverTargetAction",
      prefix: "prefix",
      preservealpha: "preserveAlpha",
      preserveaspectratio: "preserveAspectRatio",
      primitiveunits: "primitiveUnits",
      property: "property",
      r: "r",
      radius: "radius",
      refx: "refX",
      refy: "refY",
      renderingintent: "renderingIntent",
      "rendering-intent": "renderingIntent",
      repeatcount: "repeatCount",
      repeatdur: "repeatDur",
      requiredextensions: "requiredExtensions",
      requiredfeatures: "requiredFeatures",
      resource: "resource",
      restart: "restart",
      result: "result",
      results: "results",
      rotate: "rotate",
      rx: "rx",
      ry: "ry",
      scale: "scale",
      security: "security",
      seed: "seed",
      shaperendering: "shapeRendering",
      "shape-rendering": "shapeRendering",
      slope: "slope",
      spacing: "spacing",
      specularconstant: "specularConstant",
      specularexponent: "specularExponent",
      speed: "speed",
      spreadmethod: "spreadMethod",
      startoffset: "startOffset",
      stddeviation: "stdDeviation",
      stemh: "stemh",
      stemv: "stemv",
      stitchtiles: "stitchTiles",
      stopcolor: "stopColor",
      "stop-color": "stopColor",
      stopopacity: "stopOpacity",
      "stop-opacity": "stopOpacity",
      strikethroughposition: "strikethroughPosition",
      "strikethrough-position": "strikethroughPosition",
      strikethroughthickness: "strikethroughThickness",
      "strikethrough-thickness": "strikethroughThickness",
      string: "string",
      stroke: "stroke",
      strokedasharray: "strokeDasharray",
      "stroke-dasharray": "strokeDasharray",
      strokedashoffset: "strokeDashoffset",
      "stroke-dashoffset": "strokeDashoffset",
      strokelinecap: "strokeLinecap",
      "stroke-linecap": "strokeLinecap",
      strokelinejoin: "strokeLinejoin",
      "stroke-linejoin": "strokeLinejoin",
      strokemiterlimit: "strokeMiterlimit",
      "stroke-miterlimit": "strokeMiterlimit",
      strokewidth: "strokeWidth",
      "stroke-width": "strokeWidth",
      strokeopacity: "strokeOpacity",
      "stroke-opacity": "strokeOpacity",
      suppresscontenteditablewarning: "suppressContentEditableWarning",
      suppresshydrationwarning: "suppressHydrationWarning",
      surfacescale: "surfaceScale",
      systemlanguage: "systemLanguage",
      tablevalues: "tableValues",
      targetx: "targetX",
      targety: "targetY",
      textanchor: "textAnchor",
      "text-anchor": "textAnchor",
      textdecoration: "textDecoration",
      "text-decoration": "textDecoration",
      textlength: "textLength",
      textrendering: "textRendering",
      "text-rendering": "textRendering",
      to: "to",
      transform: "transform",
      transformorigin: "transformOrigin",
      "transform-origin": "transformOrigin",
      typeof: "typeof",
      u1: "u1",
      u2: "u2",
      underlineposition: "underlinePosition",
      "underline-position": "underlinePosition",
      underlinethickness: "underlineThickness",
      "underline-thickness": "underlineThickness",
      unicode: "unicode",
      unicodebidi: "unicodeBidi",
      "unicode-bidi": "unicodeBidi",
      unicoderange: "unicodeRange",
      "unicode-range": "unicodeRange",
      unitsperem: "unitsPerEm",
      "units-per-em": "unitsPerEm",
      unselectable: "unselectable",
      valphabetic: "vAlphabetic",
      "v-alphabetic": "vAlphabetic",
      values: "values",
      vectoreffect: "vectorEffect",
      "vector-effect": "vectorEffect",
      version: "version",
      vertadvy: "vertAdvY",
      "vert-adv-y": "vertAdvY",
      vertoriginx: "vertOriginX",
      "vert-origin-x": "vertOriginX",
      vertoriginy: "vertOriginY",
      "vert-origin-y": "vertOriginY",
      vhanging: "vHanging",
      "v-hanging": "vHanging",
      videographic: "vIdeographic",
      "v-ideographic": "vIdeographic",
      viewbox: "viewBox",
      viewtarget: "viewTarget",
      visibility: "visibility",
      vmathematical: "vMathematical",
      "v-mathematical": "vMathematical",
      vocab: "vocab",
      widths: "widths",
      wordspacing: "wordSpacing",
      "word-spacing": "wordSpacing",
      writingmode: "writingMode",
      "writing-mode": "writingMode",
      x1: "x1",
      x2: "x2",
      x: "x",
      xchannelselector: "xChannelSelector",
      xheight: "xHeight",
      "x-height": "xHeight",
      xlinkactuate: "xlinkActuate",
      "xlink:actuate": "xlinkActuate",
      xlinkarcrole: "xlinkArcrole",
      "xlink:arcrole": "xlinkArcrole",
      xlinkhref: "xlinkHref",
      "xlink:href": "xlinkHref",
      xlinkrole: "xlinkRole",
      "xlink:role": "xlinkRole",
      xlinkshow: "xlinkShow",
      "xlink:show": "xlinkShow",
      xlinktitle: "xlinkTitle",
      "xlink:title": "xlinkTitle",
      xlinktype: "xlinkType",
      "xlink:type": "xlinkType",
      xmlbase: "xmlBase",
      "xml:base": "xmlBase",
      xmllang: "xmlLang",
      "xml:lang": "xmlLang",
      xmlns: "xmlns",
      "xml:space": "xmlSpace",
      xmlnsxlink: "xmlnsXlink",
      "xmlns:xlink": "xmlnsXlink",
      xmlspace: "xmlSpace",
      y1: "y1",
      y2: "y2",
      y: "y",
      ychannelselector: "yChannelSelector",
      z: "z",
      zoomandpan: "zoomAndPan"
    }, Lt = {}, ku = /^on./, xr = /^on[^A-Z]/, Bc = RegExp(
      "^(aria)-[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
    ), vi = RegExp(
      "^(aria)[A-Z][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
    ), i = /^(?:webkit|moz|o)[A-Z]/, s = /^-ms-/, g = /-(.)/g, p = /;\s*$/, R = {}, P = {}, B = !1, oe = !1, ee = /["'&<>]/, ie = /([A-Z])/g, De = /^ms-/, pe = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i, Ie = qi.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, Ue = di.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, an = Object.freeze({
      pending: !1,
      data: null,
      method: null,
      action: null
    }), Ge = Ue.d;
    Ue.d = {
      f: Ge.f,
      r: Ge.r,
      D: function(e) {
        var t = mn || null;
        if (t) {
          var u = t.resumableState, y = t.renderState;
          if (typeof e == "string" && e) {
            if (!u.dnsResources.hasOwnProperty(e)) {
              u.dnsResources[e] = yn, u = y.headers;
              var C, k;
              (k = u && 0 < u.remainingCapacity) && (k = (C = "<" + Jt(e) + ">; rel=dns-prefetch", 0 <= (u.remainingCapacity -= C.length + 2))), k ? (y.resets.dns[e] = yn, u.preconnects && (u.preconnects += ", "), u.preconnects += C) : (C = [], tt(C, { href: e, rel: "dns-prefetch" }), y.preconnects.add(C));
            }
            ui(t);
          }
        } else Ge.D(e);
      },
      C: function(e, t) {
        var u = mn || null;
        if (u) {
          var y = u.resumableState, C = u.renderState;
          if (typeof e == "string" && e) {
            var k = t === "use-credentials" ? "credentials" : typeof t == "string" ? "anonymous" : "default";
            if (!y.connectResources[k].hasOwnProperty(e)) {
              y.connectResources[k][e] = yn, y = C.headers;
              var z, W;
              if (W = y && 0 < y.remainingCapacity) {
                if (W = "<" + Jt(e) + ">; rel=preconnect", typeof t == "string") {
                  var ae = Pt(
                    t,
                    "crossOrigin"
                  );
                  W += '; crossorigin="' + ae + '"';
                }
                W = (z = W, 0 <= (y.remainingCapacity -= z.length + 2));
              }
              W ? (C.resets.connect[k][e] = yn, y.preconnects && (y.preconnects += ", "), y.preconnects += z) : (k = [], tt(k, {
                rel: "preconnect",
                href: e,
                crossOrigin: t
              }), C.preconnects.add(k));
            }
            ui(u);
          }
        } else Ge.C(e, t);
      },
      L: function(e, t, u) {
        var y = mn || null;
        if (y) {
          var C = y.resumableState, k = y.renderState;
          if (t && e) {
            switch (t) {
              case "image":
                if (u)
                  var z = u.imageSrcSet, W = u.imageSizes, ae = u.fetchPriority;
                var G = z ? z + `
` + (W || "") : e;
                if (C.imageResources.hasOwnProperty(G)) return;
                C.imageResources[G] = ln, C = k.headers;
                var be;
                C && 0 < C.remainingCapacity && typeof z != "string" && ae === "high" && (be = ei(e, t, u), 0 <= (C.remainingCapacity -= be.length + 2)) ? (k.resets.image[G] = ln, C.highImagePreloads && (C.highImagePreloads += ", "), C.highImagePreloads += be) : (C = [], tt(
                  C,
                  rt(
                    {
                      rel: "preload",
                      href: z ? void 0 : e,
                      as: t
                    },
                    u
                  )
                ), ae === "high" ? k.highImagePreloads.add(C) : (k.bulkPreloads.add(C), k.preloads.images.set(G, C)));
                break;
              case "style":
                if (C.styleResources.hasOwnProperty(e)) return;
                z = [], tt(
                  z,
                  rt({ rel: "preload", href: e, as: t }, u)
                ), C.styleResources[e] = !u || typeof u.crossOrigin != "string" && typeof u.integrity != "string" ? ln : [u.crossOrigin, u.integrity], k.preloads.stylesheets.set(e, z), k.bulkPreloads.add(z);
                break;
              case "script":
                if (C.scriptResources.hasOwnProperty(e)) return;
                z = [], k.preloads.scripts.set(e, z), k.bulkPreloads.add(z), tt(
                  z,
                  rt({ rel: "preload", href: e, as: t }, u)
                ), C.scriptResources[e] = !u || typeof u.crossOrigin != "string" && typeof u.integrity != "string" ? ln : [u.crossOrigin, u.integrity];
                break;
              default:
                if (C.unknownResources.hasOwnProperty(t)) {
                  if (z = C.unknownResources[t], z.hasOwnProperty(e))
                    return;
                } else
                  z = {}, C.unknownResources[t] = z;
                if (z[e] = ln, (C = k.headers) && 0 < C.remainingCapacity && t === "font" && (G = ei(e, t, u), 0 <= (C.remainingCapacity -= G.length + 2)))
                  k.resets.font[e] = ln, C.fontPreloads && (C.fontPreloads += ", "), C.fontPreloads += G;
                else
                  switch (C = [], e = rt(
                    { rel: "preload", href: e, as: t },
                    u
                  ), tt(C, e), t) {
                    case "font":
                      k.fontPreloads.add(C);
                      break;
                    default:
                      k.bulkPreloads.add(C);
                  }
            }
            ui(y);
          }
        } else Ge.L(e, t, u);
      },
      m: function(e, t) {
        var u = mn || null;
        if (u) {
          var y = u.resumableState, C = u.renderState;
          if (e) {
            var k = t && typeof t.as == "string" ? t.as : "script";
            switch (k) {
              case "script":
                if (y.moduleScriptResources.hasOwnProperty(e))
                  return;
                k = [], y.moduleScriptResources[e] = !t || typeof t.crossOrigin != "string" && typeof t.integrity != "string" ? ln : [t.crossOrigin, t.integrity], C.preloads.moduleScripts.set(e, k);
                break;
              default:
                if (y.moduleUnknownResources.hasOwnProperty(k)) {
                  var z = y.unknownResources[k];
                  if (z.hasOwnProperty(e)) return;
                } else
                  z = {}, y.moduleUnknownResources[k] = z;
                k = [], z[e] = ln;
            }
            tt(
              k,
              rt({ rel: "modulepreload", href: e }, t)
            ), C.bulkPreloads.add(k), ui(u);
          }
        } else Ge.m(e, t);
      },
      X: function(e, t) {
        var u = mn || null;
        if (u) {
          var y = u.resumableState, C = u.renderState;
          if (e) {
            var k = y.scriptResources.hasOwnProperty(
              e
            ) ? y.scriptResources[e] : void 0;
            k !== yn && (y.scriptResources[e] = yn, t = rt({ src: e, async: !0 }, t), k && (k.length === 2 && Hn(t, k), e = C.preloads.scripts.get(e)) && (e.length = 0), e = [], C.scripts.add(e), Bi(e, t), ui(u));
          }
        } else Ge.X(e, t);
      },
      S: function(e, t, u) {
        var y = mn || null;
        if (y) {
          var C = y.resumableState, k = y.renderState;
          if (e) {
            t = t || "default";
            var z = k.styles.get(t), W = C.styleResources.hasOwnProperty(e) ? C.styleResources[e] : void 0;
            W !== yn && (C.styleResources[e] = yn, z || (z = {
              precedence: V(ye(t)),
              rules: [],
              hrefs: [],
              sheets: /* @__PURE__ */ new Map()
            }, k.styles.set(t, z)), t = {
              state: go,
              props: rt(
                {
                  rel: "stylesheet",
                  href: e,
                  "data-precedence": t
                },
                u
              )
            }, W && (W.length === 2 && Hn(t.props, W), (k = k.preloads.stylesheets.get(e)) && 0 < k.length ? k.length = 0 : t.state = bc), z.sheets.set(e, t), ui(y));
          }
        } else Ge.S(e, t, u);
      },
      M: function(e, t) {
        var u = mn || null;
        if (u) {
          var y = u.resumableState, C = u.renderState;
          if (e) {
            var k = y.moduleScriptResources.hasOwnProperty(e) ? y.moduleScriptResources[e] : void 0;
            k !== yn && (y.moduleScriptResources[e] = yn, t = rt(
              { src: e, type: "module", async: !0 },
              t
            ), k && (k.length === 2 && Hn(t, k), e = C.preloads.moduleScripts.get(e)) && (e.length = 0), e = [], C.scripts.add(e), Bi(e, t), ui(u));
          }
        } else Ge.M(e, t);
      }
    };
    var En = 0, On = 1, kn = 2, Yn = 4, Ze = 8, yn = null, ln = [];
    Object.freeze(ln), _('"></template>');
    var zt = _("<script>"), fr = _("<\/script>"), Je = _('<script src="'), Dn = _('<script type="module" src="'), pt = _('" nonce="'), Ot = _('" integrity="'), Ho = _('" crossorigin="'), Ln = _('" async=""><\/script>'), wt = /(<\/|<)(s)(cript)/gi, Rr = _(
      '<script type="importmap">'
    ), dr = _("<\/script>"), Yo = {}, hr = 0, xo = 0, Vr = 1, Tt = 2, uo = 3, Qr = 4, Go = 5, Ro = 6, fo = 7, uc = 8, Ba = 9, Xo = _("<!-- -->"), Rs = /* @__PURE__ */ new Map(), Nc = _(' style="'), $i = _(":"), Lc = _(";"), Wt = _(" "), Sr = _('="'), ot = _('"'), Ss = _('=""'), Zo = _(
      ye(
        "javascript:throw new Error('React form unexpectedly submitted.')"
      )
    ), pi = _('<input type="hidden"'), at = _(">"), So = _("/>"), Nl = !1, Vo = !1, Ll = !1, el = !1, Na = !1, At = !1, ks = !1, Jr = !1, nl = !1, wi = !1, ua = !1, ko = _(' selected=""'), Ti = _(
      `addEventListener("submit",function(a){if(!a.defaultPrevented){var c=a.target,d=a.submitter,e=c.action,b=d;if(d){var f=d.getAttribute("formAction");null!=f&&(e=f,b=null)}"javascript:throw new Error('React form unexpectedly submitted.')"===e&&(a.preventDefault(),b?(a=document.createElement("input"),a.name=b.name,a.value=b.value,b.parentNode.insertBefore(a,b),b=new FormData(c),a.parentNode.removeChild(a)):b=new FormData(c),a=c.ownerDocument||c,(a.$$reactFormReplay=a.$$reactFormReplay||[]).push(c,d,b))}});`
    ), gr = _("<!--F!-->"), La = _("<!--F-->"), zc = /(<\/|<)(s)(tyle)/gi, ms = _(`
`), zl = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/, fc = /* @__PURE__ */ new Map(), Ut = _("<!DOCTYPE html>"), tl = /* @__PURE__ */ new Map(), rl = _('<template id="'), Ci = _('"></template>'), Ps = _("<!--$-->"), Fs = _(
      '<!--$?--><template id="'
    ), ho = _('"></template>'), cu = _("<!--$!-->"), fa = _("<!--/$-->"), Wc = _("<template"), za = _('"'), Wl = _(' data-dgst="'), Os = _(' data-msg="'), Ei = _(' data-stck="'), As = _(' data-cstck="'), dc = _("></template>"), hc = _("<!--"), Ms = _("-->"), Qo = _('<div hidden id="'), Wa = _('">'), Ul = _("</div>"), ol = _(
      '<svg aria-hidden="true" style="display:none" id="'
    ), Is = _('">'), Hl = _("</svg>"), xi = _(
      '<math aria-hidden="true" style="display:none" id="'
    ), Ri = _('">'), Si = _("</math>"), al = _('<table hidden id="'), il = _('">'), Ds = _("</table>"), a = _(
      '<table hidden><tbody id="'
    ), l = _('">'), h = _("</tbody></table>"), w = _('<table hidden><tr id="'), x = _('">'), F = _("</tr></table>"), L = _(
      '<table hidden><colgroup id="'
    ), ne = _('">'), U = _("</colgroup></table>"), j = _(
      '$RS=function(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)};$RS("'
    ), we = _('$RS("'), ce = _('","'), We = _('")<\/script>');
    _('<template data-rsi="" data-sid="'), _('" data-pid="');
    var Ve = _(
      '$RC=function(b,c,e){c=document.getElementById(c);c.parentNode.removeChild(c);var a=document.getElementById(b);if(a){b=a.previousSibling;if(e)b.data="$!",a.setAttribute("data-dgst",e);else{e=b.parentNode;a=b.nextSibling;var f=0;do{if(a&&8===a.nodeType){var d=a.data;if("/$"===d)if(0===f)break;else f--;else"$"!==d&&"$?"!==d&&"$!"!==d||f++}d=a.nextSibling;e.removeChild(a);a=d}while(a);for(;c.firstChild;)e.insertBefore(c.firstChild,a);b.data="$"}b._reactRetry&&b._reactRetry()}};$RC("'
    ), en = _('$RC("'), sn = _(
      `$RC=function(b,c,e){c=document.getElementById(c);c.parentNode.removeChild(c);var a=document.getElementById(b);if(a){b=a.previousSibling;if(e)b.data="$!",a.setAttribute("data-dgst",e);else{e=b.parentNode;a=b.nextSibling;var f=0;do{if(a&&8===a.nodeType){var d=a.data;if("/$"===d)if(0===f)break;else f--;else"$"!==d&&"$?"!==d&&"$!"!==d||f++}d=a.nextSibling;e.removeChild(a);a=d}while(a);for(;c.firstChild;)e.insertBefore(c.firstChild,a);b.data="$"}b._reactRetry&&b._reactRetry()}};$RM=new Map;
$RR=function(t,u,y){function v(n){this._p=null;n()}for(var w=$RC,p=$RM,q=new Map,r=document,g,b,h=r.querySelectorAll("link[data-precedence],style[data-precedence]"),x=[],k=0;b=h[k++];)"not all"===b.getAttribute("media")?x.push(b):("LINK"===b.tagName&&p.set(b.getAttribute("href"),b),q.set(b.dataset.precedence,g=b));b=0;h=[];var l,a;for(k=!0;;){if(k){var e=y[b++];if(!e){k=!1;b=0;continue}var c=!1,m=0;var d=e[m++];if(a=p.get(d)){var f=a._p;c=!0}else{a=r.createElement("link");a.href=
d;a.rel="stylesheet";for(a.dataset.precedence=l=e[m++];f=e[m++];)a.setAttribute(f,e[m++]);f=a._p=new Promise(function(n,z){a.onload=v.bind(a,n);a.onerror=v.bind(a,z)});p.set(d,a)}d=a.getAttribute("media");!f||d&&!matchMedia(d).matches||h.push(f);if(c)continue}else{a=x[b++];if(!a)break;l=a.getAttribute("data-precedence");a.removeAttribute("media")}c=q.get(l)||g;c===g&&(g=a);q.set(l,a);c?c.parentNode.insertBefore(a,c.nextSibling):(c=r.head,c.insertBefore(a,c.firstChild))}Promise.all(h).then(w.bind(null,
t,u,""),w.bind(null,t,u,"Resource failed to load"))};$RR("`
    ), zn = _(
      `$RM=new Map;
$RR=function(t,u,y){function v(n){this._p=null;n()}for(var w=$RC,p=$RM,q=new Map,r=document,g,b,h=r.querySelectorAll("link[data-precedence],style[data-precedence]"),x=[],k=0;b=h[k++];)"not all"===b.getAttribute("media")?x.push(b):("LINK"===b.tagName&&p.set(b.getAttribute("href"),b),q.set(b.dataset.precedence,g=b));b=0;h=[];var l,a;for(k=!0;;){if(k){var e=y[b++];if(!e){k=!1;b=0;continue}var c=!1,m=0;var d=e[m++];if(a=p.get(d)){var f=a._p;c=!0}else{a=r.createElement("link");a.href=
d;a.rel="stylesheet";for(a.dataset.precedence=l=e[m++];f=e[m++];)a.setAttribute(f,e[m++]);f=a._p=new Promise(function(n,z){a.onload=v.bind(a,n);a.onerror=v.bind(a,z)});p.set(d,a)}d=a.getAttribute("media");!f||d&&!matchMedia(d).matches||h.push(f);if(c)continue}else{a=x[b++];if(!a)break;l=a.getAttribute("data-precedence");a.removeAttribute("media")}c=q.get(l)||g;c===g&&(g=a);q.set(l,a);c?c.parentNode.insertBefore(a,c.nextSibling):(c=r.head,c.insertBefore(a,c.firstChild))}Promise.all(h).then(w.bind(null,
t,u,""),w.bind(null,t,u,"Resource failed to load"))};$RR("`
    ), Ct = _('$RR("'), Sn = _('","'), kr = _('",'), Et = _('"'), Kr = _(")<\/script>");
    _('<template data-rci="" data-bid="'), _('<template data-rri="" data-bid="'), _('" data-sid="'), _('" data-sty="');
    var br = _(
      '$RX=function(b,c,d,e,f){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),f&&(a.cstck=f),b._reactRetry&&b._reactRetry())};;$RX("'
    ), qt = _('$RX("'), Dr = _('"'), Wn = _(","), Mt = _(")<\/script>");
    _('<template data-rxi="" data-bid="'), _('" data-dgst="'), _('" data-msg="'), _('" data-stck="'), _('" data-cstck="');
    var it = /[<\u2028\u2029]/g, yr = /[&><\u2028\u2029]/g, ll = _(
      '<style media="not all" data-precedence="'
    ), Ua = _('" data-href="'), Ha = _('">'), sl = _("</style>"), Ya = !1, Uc = !0, ki = [], mu = _(
      '<style data-precedence="'
    ), Pu = _('" data-href="'), uu = _(" "), gc = _('">'), Fu = _("</style>"), fu = _("["), da = _(",["), qr = _(","), du = _("]"), go = 0, bc = 1, yc = 2, Hc = 3, Yc = /[<>\r\n]/g, Kn = /["';,\r\n]/g, vc = Function.prototype.bind, Yl = Symbol.for("react.client.reference"), It = {};
    Object.freeze(It);
    var cl = {}, ha = null, ul = {}, Gl = {}, bo = /* @__PURE__ */ new Set(), fl = /* @__PURE__ */ new Set(), yo = /* @__PURE__ */ new Set(), mi = /* @__PURE__ */ new Set(), _s = /* @__PURE__ */ new Set(), ga = /* @__PURE__ */ new Set(), mo = /* @__PURE__ */ new Set(), hu = /* @__PURE__ */ new Set(), ba = /* @__PURE__ */ new Set(), gu = {
      enqueueSetState: function(e, t, u) {
        var y = e._reactInternals;
        y.queue === null ? Wi(e, "setState") : (y.queue.push(t), u != null && Zn(u));
      },
      enqueueReplaceState: function(e, t, u) {
        e = e._reactInternals, e.replace = !0, e.queue = [t], u != null && Zn(u);
      },
      enqueueForceUpdate: function(e, t) {
        e._reactInternals.queue === null ? Wi(e, "forceUpdate") : t != null && Zn(t);
      }
    }, Gc = { id: 1, overflow: "" }, pc = Math.clz32 ? Math.clz32 : Ui, wc = Math.log, Ou = Math.LN2, ya = Error(
      "Suspense Exception: This is not a real error! It's an implementation detail of `use` to interrupt the current render. You must either rethrow it immediately, or move the `use` call outside of the `try/catch` block. Capturing without rethrowing will lead to unexpected behavior.\n\nTo handle async errors, wrap your component in an error boundary, or call the promise's `.catch` method and pass the result to `use`."
    ), dl = null, bu = typeof Object.is == "function" ? Object.is : iu, Ga = null, Bs = null, Xc = null, Xa = null, Ns = null, _n = null, Pi = !1, Xl = !1, hl = 0, Zl = 0, Tc = -1, Ls = 0, zs = null, xt = null, vo = 0, lt = !1, gl, Ws = {
      readContext: kl,
      use: function(e) {
        if (e !== null && typeof e == "object") {
          if (typeof e.then == "function")
            return fs(e);
          if (e.$$typeof === Wo)
            return kl(e);
        }
        throw Error(
          "An unsupported type was passed to use(): " + String(e)
        );
      },
      useContext: function(e) {
        return gl = "useContext", $o(), e._currentValue;
      },
      useMemo: ri,
      useReducer: ea,
      useRef: function(e) {
        Ga = $o(), _n = nc();
        var t = _n.memoizedState;
        return t === null ? (e = { current: e }, Object.seal(e), _n.memoizedState = e) : t;
      },
      useState: function(e) {
        return gl = "useState", ea(ti, e);
      },
      useInsertionEffect: ml,
      useLayoutEffect: ml,
      useCallback: function(e, t) {
        return ri(function() {
          return e;
        }, t);
      },
      useImperativeHandle: ml,
      useEffect: ml,
      useDebugValue: ml,
      useDeferredValue: function(e, t) {
        return $o(), t !== void 0 ? t : e;
      },
      useTransition: function() {
        return $o(), [!1, lu];
      },
      useId: function() {
        var e = Bs.treeContext, t = e.overflow;
        e = e.id, e = (e & ~(1 << 32 - pc(e) - 1)).toString(32) + t;
        var u = Fi;
        if (u === null)
          throw Error(
            "Invalid hook call. Hooks can only be called inside of the body of a function component."
          );
        return t = hl++, e = "«" + u.idPrefix + "R" + e, 0 < t && (e += "H" + t.toString(32)), e + "»";
      },
      useSyncExternalStore: function(e, t, u) {
        if (u === void 0)
          throw Error(
            "Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering."
          );
        return u();
      },
      useOptimistic: function(e) {
        return $o(), [e, Pa];
      },
      useActionState: jn,
      useFormState: jn,
      useHostTransitionStatus: function() {
        return $o(), an;
      },
      useMemoCache: function(e) {
        for (var t = Array(e), u = 0; u < e; u++)
          t[u] = An;
        return t;
      },
      useCacheRefresh: function() {
        return Oc;
      }
    }, Fi = null, Vn = null, Zc = {
      getCacheForType: function() {
        throw Error("Not implemented.");
      },
      getOwner: function() {
        return Vn === null ? null : Vn.componentStack;
      }
    }, va = 0, Vl, yu, Us, Cc, Hs, n, r;
    Tr.__reactDisabledLog = !0;
    var c, v, E = !1, m = new (typeof WeakMap == "function" ? WeakMap : Map)(), H = {
      "react-stack-bottom-frame": function(e, t, u) {
        return e(t, u);
      }
    }, X = H["react-stack-bottom-frame"].bind(H), le = {
      "react-stack-bottom-frame": function(e) {
        return e.render();
      }
    }, K = le["react-stack-bottom-frame"].bind(le), Ee = {
      "react-stack-bottom-frame": function(e) {
        var t = e._init;
        return t(e._payload);
      }
    }, ve = Ee["react-stack-bottom-frame"].bind(Ee), Fe = 0;
    if (typeof performance == "object" && typeof performance.now == "function")
      var Ae = performance, ue = function() {
        return Ae.now();
      };
    else {
      var nn = Date;
      ue = function() {
        return nn.now();
      };
    }
    var bn = 4, tn = 0, cn = 1, st = 2, qe = 5, xn = 14, mn = null, vr = {}, Dt = {}, Ht = {}, dt = {}, Po = !1, _r = !1, Mn = !1;
    Ki(), Ki(), hf.prerender = function(e, t) {
      return new Promise(function(u, y) {
        var C = t ? t.onHeaders : void 0, k;
        C && (k = function(be) {
          C(new Headers(be));
        });
        var z = Ce(
          t ? t.identifierPrefix : void 0,
          t ? t.unstable_externalRuntimeSrc : void 0,
          t ? t.bootstrapScriptContent : void 0,
          t ? t.bootstrapScripts : void 0,
          t ? t.bootstrapModules : void 0
        ), W = Oa(
          e,
          z,
          te(
            z,
            void 0,
            t ? t.unstable_externalRuntimeSrc : void 0,
            t ? t.importMap : void 0,
            k,
            t ? t.maxHeadersLength : void 0
          ),
          q(t ? t.namespaceURI : void 0),
          t ? t.progressiveChunkSize : void 0,
          t ? t.onError : void 0,
          function() {
            var be = {
              prelude: new ReadableStream(
                {
                  type: "bytes",
                  pull: function(he) {
                    ps(W, he);
                  },
                  cancel: function(he) {
                    W.destination = null, fi(W, he);
                  }
                },
                { highWaterMark: 0 }
              )
            };
            u(be);
          },
          void 0,
          void 0,
          y,
          t ? t.onPostpone : void 0
        );
        if (t && t.signal) {
          var ae = t.signal;
          if (ae.aborted) fi(W, ae.reason);
          else {
            var G = function() {
              fi(W, ae.reason), ae.removeEventListener("abort", G);
            };
            ae.addEventListener("abort", G);
          }
        }
        Ji(W);
      });
    }, hf.renderToReadableStream = function(e, t) {
      return new Promise(function(u, y) {
        var C, k, z = new Promise(function(Te, fe) {
          k = Te, C = fe;
        }), W = t ? t.onHeaders : void 0, ae;
        W && (ae = function(Te) {
          W(new Headers(Te));
        });
        var G = Ce(
          t ? t.identifierPrefix : void 0,
          t ? t.unstable_externalRuntimeSrc : void 0,
          t ? t.bootstrapScriptContent : void 0,
          t ? t.bootstrapScripts : void 0,
          t ? t.bootstrapModules : void 0
        ), be = Xi(
          e,
          G,
          te(
            G,
            t ? t.nonce : void 0,
            t ? t.unstable_externalRuntimeSrc : void 0,
            t ? t.importMap : void 0,
            ae,
            t ? t.maxHeadersLength : void 0
          ),
          q(t ? t.namespaceURI : void 0),
          t ? t.progressiveChunkSize : void 0,
          t ? t.onError : void 0,
          k,
          function() {
            var Te = new ReadableStream(
              {
                type: "bytes",
                pull: function(fe) {
                  ps(be, fe);
                },
                cancel: function(fe) {
                  be.destination = null, fi(be, fe);
                }
              },
              { highWaterMark: 0 }
            );
            Te.allReady = z, u(Te);
          },
          function(Te) {
            z.catch(function() {
            }), y(Te);
          },
          C,
          t ? t.onPostpone : void 0,
          t ? t.formState : void 0
        );
        if (t && t.signal) {
          var he = t.signal;
          if (he.aborted) fi(be, he.reason);
          else {
            var Se = function() {
              fi(be, he.reason), he.removeEventListener("abort", Se);
            };
            he.addEventListener("abort", Se);
          }
        }
        Ji(be);
      });
    }, hf.version = "19.1.0";
  }()), hf;
}
var zh;
function wp() {
  if (zh) return Lu;
  zh = 1;
  var o, d;
  return process.env.NODE_ENV === "production" ? (o = bp(), d = yp()) : (o = vp(), d = pp()), Lu.version = o.version, Lu.renderToString = o.renderToString, Lu.renderToStaticMarkup = o.renderToStaticMarkup, Lu.renderToReadableStream = d.renderToReadableStream, d.resume && (Lu.resume = d.resume), Lu;
}
var Tp = wp();
const Wh = (o, d = "#000000") => {
  if (!o) return;
  let f = Tp.renderToStaticMarkup(o);
  return f = f.replace(/class=".*?"/g, "").replace(/focusable=".*?"/g, "").replace(/aria-hidden=".*?"/g, "").replace(/data-testid=".*?"/g, ""), f.includes("xmlns") || (f = f.replace("<svg", '<svg xmlns="http://www.w3.org/2000/svg"')), f.includes("fill=") || (f = f.replace("<path", '<path fill="' + d + '"')), `url("data:image/svg+xml;utf8,${encodeURIComponent(f)}")`;
}, Cp = (o, d = "primary") => {
  var T;
  const f = tu[d], b = ((T = o == null ? void 0 : o.palette) == null ? void 0 : T[d]) ?? f;
  return {
    bgColor: b.custMain ?? f.custMain,
    thumbColor: b.onMain ?? f.onMain,
    actthumbColor: b.fabBg ?? f.fabBg,
    unselectbgColor: b.surface ?? f.surface,
    unselectColor: b.outline ?? f.outline,
    unselectthumbColor: b.iconFont ?? f.iconFont
  };
}, Ep = {
  small: { w: 40, h: 24 },
  medium: { w: 52, h: 32 },
  // ⇦ 原始 52×32 | thumb24 checked
  large: { w: 80, h: 50 }
}, xp = Xt(vg)(({ theme: o, selectedIcon: d, unselectedIcon: f, size: b = "medium" }) => {
  const T = Cp(o), S = Wh(
    d,
    T.bgColor
  ), A = Wh(
    f,
    T.unselectbgColor
  ), O = Ep[b], Y = O.h - 8;
  return {
    width: O.w,
    height: O.h,
    padding: 0,
    borderRadius: 100,
    overflow: "visible",
    "& .MuiSwitch-thumb": {
      position: "relative",
      margin: f ? (O.h - Y) / 2 : (O.h - O.h / 2) / 2,
      boxShadow: "none",
      width: f ? Y : O.h / 2,
      height: f ? Y : O.h / 2,
      transitionDuration: "300ms",
      color: T.unselectColor,
      "&::before": {
        content: "''",
        position: "absolute",
        width: Y - 8,
        // ✅ 固定寬高
        height: Y - 8,
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundImage: A
      }
    },
    "& .MuiSwitch-track": {
      boxSizing: "border-box",
      borderRadius: 100,
      backgroundColor: T.unselectbgColor,
      border: `2px solid ${T.unselectColor}`,
      opacity: 1
    },
    "& .MuiSwitch-switchBase": {
      padding: 0,
      //   margin: 4,
      transitionDuration: "300ms",
      "&.Mui-disabled": {
        "& .MuiSwitch-thumb": {
          color: In(zu[0], 0.38)
        },
        "& + .MuiSwitch-track": {
          border: `2px solid ${In(zu[0], 0.12)}`,
          opacity: 1
        }
      },
      "&:active": {
        "& .MuiSwitch-thumb": {
          margin: 0,
          width: O.h - 4,
          height: O.h - 4
        }
      },
      "&:hover ": {
        backgroundColor: In(zu[0], 0.08),
        margin: -4,
        width: O.h + 8,
        height: O.h + 8,
        "& .MuiSwitch-thumb": {
          color: T.unselectthumbColor
        }
      },
      "&.Mui-checked": {
        transform: `translateX( ${O.w - O.h}px)`,
        "&:hover ": {
          backgroundColor: In(T.bgColor, 0.08)
        },
        "& .MuiSwitch-thumb": {
          color: T.thumbColor,
          margin: (O.h - Y) / 2,
          width: Y,
          height: Y
        },
        "& .MuiSwitch-thumb:before": {
          backgroundImage: S
        },
        "& + .MuiSwitch-track": {
          backgroundColor: T.bgColor,
          opacity: 1,
          border: 0
        },
        "&.Mui-disabled + .MuiSwitch-track": {
          backgroundColor: zu[0],
          opacity: 0.12
        },
        "&.Mui-focusVisible .MuiSwitch-thumb, &:hover .MuiSwitch-thumb": {
          color: T.actthumbColor
        },
        "&:active": {
          "& .MuiSwitch-thumb": {
            width: O.h - 4,
            height: O.h - 4
          }
        }
      }
    }
  };
}), Dp = ({
  selectedIcon: o,
  unselectedIcon: d,
  size: f,
  ...b
}) => /* @__PURE__ */ ct(
  xp,
  {
    selectedIcon: o,
    unselectedIcon: d,
    ...b
  }
);
export {
  Ap as Button,
  Mp as Fab,
  Ip as IconButton,
  Dp as Switch,
  Op as lemonTheme
};
