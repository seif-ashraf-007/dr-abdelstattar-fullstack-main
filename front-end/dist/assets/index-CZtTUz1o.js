function Wd(e, t) {
  for (var n = 0; n < t.length; n++) {
    const r = t[n];
    if (typeof r != "string" && !Array.isArray(r)) {
      for (const i in r)
        if (i !== "default" && !(i in e)) {
          const l = Object.getOwnPropertyDescriptor(r, i);
          l &&
            Object.defineProperty(
              e,
              i,
              l.get ? l : { enumerable: !0, get: () => r[i] }
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" })
  );
}
(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const i of document.querySelectorAll('link[rel="modulepreload"]')) r(i);
  new MutationObserver((i) => {
    for (const l of i)
      if (l.type === "childList")
        for (const o of l.addedNodes)
          o.tagName === "LINK" && o.rel === "modulepreload" && r(o);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(i) {
    const l = {};
    return (
      i.integrity && (l.integrity = i.integrity),
      i.referrerPolicy && (l.referrerPolicy = i.referrerPolicy),
      i.crossOrigin === "use-credentials"
        ? (l.credentials = "include")
        : i.crossOrigin === "anonymous"
        ? (l.credentials = "omit")
        : (l.credentials = "same-origin"),
      l
    );
  }
  function r(i) {
    if (i.ep) return;
    i.ep = !0;
    const l = n(i);
    fetch(i.href, l);
  }
})();
var yr =
  typeof globalThis < "u"
    ? globalThis
    : typeof window < "u"
    ? window
    : typeof global < "u"
    ? global
    : typeof self < "u"
    ? self
    : {};
function Ti(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
function Qd(e) {
  if (e.__esModule) return e;
  var t = e.default;
  if (typeof t == "function") {
    var n = function r() {
      return this instanceof r
        ? Reflect.construct(t, arguments, this.constructor)
        : t.apply(this, arguments);
    };
    n.prototype = t.prototype;
  } else n = {};
  return (
    Object.defineProperty(n, "__esModule", { value: !0 }),
    Object.keys(e).forEach(function (r) {
      var i = Object.getOwnPropertyDescriptor(e, r);
      Object.defineProperty(
        n,
        r,
        i.get
          ? i
          : {
              enumerable: !0,
              get: function () {
                return e[r];
              },
            }
      );
    }),
    n
  );
}
var cu = { exports: {} },
  Li = {},
  du = { exports: {} },
  R = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var dr = Symbol.for("react.element"),
  Kd = Symbol.for("react.portal"),
  Gd = Symbol.for("react.fragment"),
  Yd = Symbol.for("react.strict_mode"),
  Xd = Symbol.for("react.profiler"),
  Zd = Symbol.for("react.provider"),
  Jd = Symbol.for("react.context"),
  qd = Symbol.for("react.forward_ref"),
  bd = Symbol.for("react.suspense"),
  ef = Symbol.for("react.memo"),
  tf = Symbol.for("react.lazy"),
  Ts = Symbol.iterator;
function nf(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Ts && e[Ts]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var fu = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  pu = Object.assign,
  hu = {};
function xn(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = hu),
    (this.updater = n || fu);
}
xn.prototype.isReactComponent = {};
xn.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
xn.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function mu() {}
mu.prototype = xn.prototype;
function _o(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = hu),
    (this.updater = n || fu);
}
var Oo = (_o.prototype = new mu());
Oo.constructor = _o;
pu(Oo, xn.prototype);
Oo.isPureReactComponent = !0;
var Ls = Array.isArray,
  vu = Object.prototype.hasOwnProperty,
  To = { current: null },
  gu = { key: !0, ref: !0, __self: !0, __source: !0 };
function yu(e, t, n) {
  var r,
    i = {},
    l = null,
    o = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (o = t.ref),
    t.key !== void 0 && (l = "" + t.key),
    t))
      vu.call(t, r) && !gu.hasOwnProperty(r) && (i[r] = t[r]);
  var s = arguments.length - 2;
  if (s === 1) i.children = n;
  else if (1 < s) {
    for (var a = Array(s), u = 0; u < s; u++) a[u] = arguments[u + 2];
    i.children = a;
  }
  if (e && e.defaultProps)
    for (r in ((s = e.defaultProps), s)) i[r] === void 0 && (i[r] = s[r]);
  return {
    $$typeof: dr,
    type: e,
    key: l,
    ref: o,
    props: i,
    _owner: To.current,
  };
}
function rf(e, t) {
  return {
    $$typeof: dr,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function Lo(e) {
  return typeof e == "object" && e !== null && e.$$typeof === dr;
}
function lf(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var zs = /\/+/g;
function bi(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? lf("" + e.key)
    : t.toString(36);
}
function Ur(e, t, n, r, i) {
  var l = typeof e;
  (l === "undefined" || l === "boolean") && (e = null);
  var o = !1;
  if (e === null) o = !0;
  else
    switch (l) {
      case "string":
      case "number":
        o = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case dr:
          case Kd:
            o = !0;
        }
    }
  if (o)
    return (
      (o = e),
      (i = i(o)),
      (e = r === "" ? "." + bi(o, 0) : r),
      Ls(i)
        ? ((n = ""),
          e != null && (n = e.replace(zs, "$&/") + "/"),
          Ur(i, t, n, "", function (u) {
            return u;
          }))
        : i != null &&
          (Lo(i) &&
            (i = rf(
              i,
              n +
                (!i.key || (o && o.key === i.key)
                  ? ""
                  : ("" + i.key).replace(zs, "$&/") + "/") +
                e
            )),
          t.push(i)),
      1
    );
  if (((o = 0), (r = r === "" ? "." : r + ":"), Ls(e)))
    for (var s = 0; s < e.length; s++) {
      l = e[s];
      var a = r + bi(l, s);
      o += Ur(l, t, n, a, i);
    }
  else if (((a = nf(e)), typeof a == "function"))
    for (e = a.call(e), s = 0; !(l = e.next()).done; )
      (l = l.value), (a = r + bi(l, s++)), (o += Ur(l, t, n, a, i));
  else if (l === "object")
    throw (
      ((t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : t) +
          "). If you meant to render a collection of children, use an array instead."
      ))
    );
  return o;
}
function xr(e, t, n) {
  if (e == null) return e;
  var r = [],
    i = 0;
  return (
    Ur(e, r, "", "", function (l) {
      return t.call(n, l, i++);
    }),
    r
  );
}
function of(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n));
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var fe = { current: null },
  Ar = { transition: null },
  sf = {
    ReactCurrentDispatcher: fe,
    ReactCurrentBatchConfig: Ar,
    ReactCurrentOwner: To,
  };
function xu() {
  throw Error("act(...) is not supported in production builds of React.");
}
R.Children = {
  map: xr,
  forEach: function (e, t, n) {
    xr(
      e,
      function () {
        t.apply(this, arguments);
      },
      n
    );
  },
  count: function (e) {
    var t = 0;
    return (
      xr(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      xr(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!Lo(e))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return e;
  },
};
R.Component = xn;
R.Fragment = Gd;
R.Profiler = Xd;
R.PureComponent = _o;
R.StrictMode = Yd;
R.Suspense = bd;
R.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = sf;
R.act = xu;
R.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        "."
    );
  var r = pu({}, e.props),
    i = e.key,
    l = e.ref,
    o = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((l = t.ref), (o = To.current)),
      t.key !== void 0 && (i = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var s = e.type.defaultProps;
    for (a in t)
      vu.call(t, a) &&
        !gu.hasOwnProperty(a) &&
        (r[a] = t[a] === void 0 && s !== void 0 ? s[a] : t[a]);
  }
  var a = arguments.length - 2;
  if (a === 1) r.children = n;
  else if (1 < a) {
    s = Array(a);
    for (var u = 0; u < a; u++) s[u] = arguments[u + 2];
    r.children = s;
  }
  return { $$typeof: dr, type: e.type, key: i, ref: l, props: r, _owner: o };
};
R.createContext = function (e) {
  return (
    (e = {
      $$typeof: Jd,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: Zd, _context: e }),
    (e.Consumer = e)
  );
};
R.createElement = yu;
R.createFactory = function (e) {
  var t = yu.bind(null, e);
  return (t.type = e), t;
};
R.createRef = function () {
  return { current: null };
};
R.forwardRef = function (e) {
  return { $$typeof: qd, render: e };
};
R.isValidElement = Lo;
R.lazy = function (e) {
  return { $$typeof: tf, _payload: { _status: -1, _result: e }, _init: of };
};
R.memo = function (e, t) {
  return { $$typeof: ef, type: e, compare: t === void 0 ? null : t };
};
R.startTransition = function (e) {
  var t = Ar.transition;
  Ar.transition = {};
  try {
    e();
  } finally {
    Ar.transition = t;
  }
};
R.unstable_act = xu;
R.useCallback = function (e, t) {
  return fe.current.useCallback(e, t);
};
R.useContext = function (e) {
  return fe.current.useContext(e);
};
R.useDebugValue = function () {};
R.useDeferredValue = function (e) {
  return fe.current.useDeferredValue(e);
};
R.useEffect = function (e, t) {
  return fe.current.useEffect(e, t);
};
R.useId = function () {
  return fe.current.useId();
};
R.useImperativeHandle = function (e, t, n) {
  return fe.current.useImperativeHandle(e, t, n);
};
R.useInsertionEffect = function (e, t) {
  return fe.current.useInsertionEffect(e, t);
};
R.useLayoutEffect = function (e, t) {
  return fe.current.useLayoutEffect(e, t);
};
R.useMemo = function (e, t) {
  return fe.current.useMemo(e, t);
};
R.useReducer = function (e, t, n) {
  return fe.current.useReducer(e, t, n);
};
R.useRef = function (e) {
  return fe.current.useRef(e);
};
R.useState = function (e) {
  return fe.current.useState(e);
};
R.useSyncExternalStore = function (e, t, n) {
  return fe.current.useSyncExternalStore(e, t, n);
};
R.useTransition = function () {
  return fe.current.useTransition();
};
R.version = "18.3.1";
du.exports = R;
var O = du.exports;
const D = Ti(O),
  af = Wd({ __proto__: null, default: D }, [O]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var uf = O,
  cf = Symbol.for("react.element"),
  df = Symbol.for("react.fragment"),
  ff = Object.prototype.hasOwnProperty,
  pf = uf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  hf = { key: !0, ref: !0, __self: !0, __source: !0 };
function wu(e, t, n) {
  var r,
    i = {},
    l = null,
    o = null;
  n !== void 0 && (l = "" + n),
    t.key !== void 0 && (l = "" + t.key),
    t.ref !== void 0 && (o = t.ref);
  for (r in t) ff.call(t, r) && !hf.hasOwnProperty(r) && (i[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) i[r] === void 0 && (i[r] = t[r]);
  return {
    $$typeof: cf,
    type: e,
    key: l,
    ref: o,
    props: i,
    _owner: pf.current,
  };
}
Li.Fragment = df;
Li.jsx = wu;
Li.jsxs = wu;
cu.exports = Li;
var c = cu.exports,
  Su = { exports: {} },
  Ce = {},
  Eu = { exports: {} },
  ku = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(P, L) {
    var z = P.length;
    P.push(L);
    e: for (; 0 < z; ) {
      var K = (z - 1) >>> 1,
        J = P[K];
      if (0 < i(J, L)) (P[K] = L), (P[z] = J), (z = K);
      else break e;
    }
  }
  function n(P) {
    return P.length === 0 ? null : P[0];
  }
  function r(P) {
    if (P.length === 0) return null;
    var L = P[0],
      z = P.pop();
    if (z !== L) {
      P[0] = z;
      e: for (var K = 0, J = P.length, vr = J >>> 1; K < vr; ) {
        var Nt = 2 * (K + 1) - 1,
          qi = P[Nt],
          Pt = Nt + 1,
          gr = P[Pt];
        if (0 > i(qi, z))
          Pt < J && 0 > i(gr, qi)
            ? ((P[K] = gr), (P[Pt] = z), (K = Pt))
            : ((P[K] = qi), (P[Nt] = z), (K = Nt));
        else if (Pt < J && 0 > i(gr, z)) (P[K] = gr), (P[Pt] = z), (K = Pt);
        else break e;
      }
    }
    return L;
  }
  function i(P, L) {
    var z = P.sortIndex - L.sortIndex;
    return z !== 0 ? z : P.id - L.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var l = performance;
    e.unstable_now = function () {
      return l.now();
    };
  } else {
    var o = Date,
      s = o.now();
    e.unstable_now = function () {
      return o.now() - s;
    };
  }
  var a = [],
    u = [],
    m = 1,
    p = null,
    v = 3,
    g = !1,
    x = !1,
    w = !1,
    E = typeof setTimeout == "function" ? setTimeout : null,
    f = typeof clearTimeout == "function" ? clearTimeout : null,
    d = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function h(P) {
    for (var L = n(u); L !== null; ) {
      if (L.callback === null) r(u);
      else if (L.startTime <= P)
        r(u), (L.sortIndex = L.expirationTime), t(a, L);
      else break;
      L = n(u);
    }
  }
  function y(P) {
    if (((w = !1), h(P), !x))
      if (n(a) !== null) (x = !0), Zi(k);
      else {
        var L = n(u);
        L !== null && Ji(y, L.startTime - P);
      }
  }
  function k(P, L) {
    (x = !1), w && ((w = !1), f(_), (_ = -1)), (g = !0);
    var z = v;
    try {
      for (
        h(L), p = n(a);
        p !== null && (!(p.expirationTime > L) || (P && !le()));

      ) {
        var K = p.callback;
        if (typeof K == "function") {
          (p.callback = null), (v = p.priorityLevel);
          var J = K(p.expirationTime <= L);
          (L = e.unstable_now()),
            typeof J == "function" ? (p.callback = J) : p === n(a) && r(a),
            h(L);
        } else r(a);
        p = n(a);
      }
      if (p !== null) var vr = !0;
      else {
        var Nt = n(u);
        Nt !== null && Ji(y, Nt.startTime - L), (vr = !1);
      }
      return vr;
    } finally {
      (p = null), (v = z), (g = !1);
    }
  }
  var C = !1,
    j = null,
    _ = -1,
    M = 5,
    T = -1;
  function le() {
    return !(e.unstable_now() - T < M);
  }
  function En() {
    if (j !== null) {
      var P = e.unstable_now();
      T = P;
      var L = !0;
      try {
        L = j(!0, P);
      } finally {
        L ? kn() : ((C = !1), (j = null));
      }
    } else C = !1;
  }
  var kn;
  if (typeof d == "function")
    kn = function () {
      d(En);
    };
  else if (typeof MessageChannel < "u") {
    var Os = new MessageChannel(),
      Hd = Os.port2;
    (Os.port1.onmessage = En),
      (kn = function () {
        Hd.postMessage(null);
      });
  } else
    kn = function () {
      E(En, 0);
    };
  function Zi(P) {
    (j = P), C || ((C = !0), kn());
  }
  function Ji(P, L) {
    _ = E(function () {
      P(e.unstable_now());
    }, L);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (P) {
      P.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      x || g || ((x = !0), Zi(k));
    }),
    (e.unstable_forceFrameRate = function (P) {
      0 > P || 125 < P
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : (M = 0 < P ? Math.floor(1e3 / P) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return v;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(a);
    }),
    (e.unstable_next = function (P) {
      switch (v) {
        case 1:
        case 2:
        case 3:
          var L = 3;
          break;
        default:
          L = v;
      }
      var z = v;
      v = L;
      try {
        return P();
      } finally {
        v = z;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (P, L) {
      switch (P) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          P = 3;
      }
      var z = v;
      v = P;
      try {
        return L();
      } finally {
        v = z;
      }
    }),
    (e.unstable_scheduleCallback = function (P, L, z) {
      var K = e.unstable_now();
      switch (
        (typeof z == "object" && z !== null
          ? ((z = z.delay), (z = typeof z == "number" && 0 < z ? K + z : K))
          : (z = K),
        P)
      ) {
        case 1:
          var J = -1;
          break;
        case 2:
          J = 250;
          break;
        case 5:
          J = 1073741823;
          break;
        case 4:
          J = 1e4;
          break;
        default:
          J = 5e3;
      }
      return (
        (J = z + J),
        (P = {
          id: m++,
          callback: L,
          priorityLevel: P,
          startTime: z,
          expirationTime: J,
          sortIndex: -1,
        }),
        z > K
          ? ((P.sortIndex = z),
            t(u, P),
            n(a) === null &&
              P === n(u) &&
              (w ? (f(_), (_ = -1)) : (w = !0), Ji(y, z - K)))
          : ((P.sortIndex = J), t(a, P), x || g || ((x = !0), Zi(k))),
        P
      );
    }),
    (e.unstable_shouldYield = le),
    (e.unstable_wrapCallback = function (P) {
      var L = v;
      return function () {
        var z = v;
        v = L;
        try {
          return P.apply(this, arguments);
        } finally {
          v = z;
        }
      };
    });
})(ku);
Eu.exports = ku;
var mf = Eu.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var vf = O,
  ke = mf;
function S(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1;
    n < arguments.length;
    n++
  )
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var Cu = new Set(),
  Gn = {};
function $t(e, t) {
  dn(e, t), dn(e + "Capture", t);
}
function dn(e, t) {
  for (Gn[e] = t, e = 0; e < t.length; e++) Cu.add(t[e]);
}
var be = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  _l = Object.prototype.hasOwnProperty,
  gf =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  Rs = {},
  Ms = {};
function yf(e) {
  return _l.call(Ms, e)
    ? !0
    : _l.call(Rs, e)
    ? !1
    : gf.test(e)
    ? (Ms[e] = !0)
    : ((Rs[e] = !0), !1);
}
function xf(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r
        ? !1
        : n !== null
        ? !n.acceptsBooleans
        : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function wf(e, t, n, r) {
  if (t === null || typeof t > "u" || xf(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function pe(e, t, n, r, i, l, o) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = i),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = l),
    (this.removeEmptyString = o);
}
var re = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    re[e] = new pe(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  re[t] = new pe(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  re[e] = new pe(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  re[e] = new pe(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    re[e] = new pe(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  re[e] = new pe(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  re[e] = new pe(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  re[e] = new pe(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  re[e] = new pe(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var zo = /[\-:]([a-z])/g;
function Ro(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(zo, Ro);
    re[t] = new pe(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(zo, Ro);
    re[t] = new pe(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(zo, Ro);
  re[t] = new pe(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  re[e] = new pe(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
re.xlinkHref = new pe(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (e) {
  re[e] = new pe(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Mo(e, t, n, r) {
  var i = re.hasOwnProperty(t) ? re[t] : null;
  (i !== null
    ? i.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (wf(t, n, i, r) && (n = null),
    r || i === null
      ? yf(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : i.mustUseProperty
      ? (e[i.propertyName] = n === null ? (i.type === 3 ? !1 : "") : n)
      : ((t = i.attributeName),
        (r = i.attributeNamespace),
        n === null
          ? e.removeAttribute(t)
          : ((i = i.type),
            (n = i === 3 || (i === 4 && n === !0) ? "" : "" + n),
            r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var rt = vf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  wr = Symbol.for("react.element"),
  Qt = Symbol.for("react.portal"),
  Kt = Symbol.for("react.fragment"),
  Io = Symbol.for("react.strict_mode"),
  Ol = Symbol.for("react.profiler"),
  ju = Symbol.for("react.provider"),
  Nu = Symbol.for("react.context"),
  Do = Symbol.for("react.forward_ref"),
  Tl = Symbol.for("react.suspense"),
  Ll = Symbol.for("react.suspense_list"),
  Fo = Symbol.for("react.memo"),
  ot = Symbol.for("react.lazy"),
  Pu = Symbol.for("react.offscreen"),
  Is = Symbol.iterator;
function Cn(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Is && e[Is]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var W = Object.assign,
  el;
function zn(e) {
  if (el === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      el = (t && t[1]) || "";
    }
  return (
    `
` +
    el +
    e
  );
}
var tl = !1;
function nl(e, t) {
  if (!e || tl) return "";
  tl = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (u) {
          var r = u;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (u) {
          r = u;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (u) {
        r = u;
      }
      e();
    }
  } catch (u) {
    if (u && r && typeof u.stack == "string") {
      for (
        var i = u.stack.split(`
`),
          l = r.stack.split(`
`),
          o = i.length - 1,
          s = l.length - 1;
        1 <= o && 0 <= s && i[o] !== l[s];

      )
        s--;
      for (; 1 <= o && 0 <= s; o--, s--)
        if (i[o] !== l[s]) {
          if (o !== 1 || s !== 1)
            do
              if ((o--, s--, 0 > s || i[o] !== l[s])) {
                var a =
                  `
` + i[o].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    a.includes("<anonymous>") &&
                    (a = a.replace("<anonymous>", e.displayName)),
                  a
                );
              }
            while (1 <= o && 0 <= s);
          break;
        }
    }
  } finally {
    (tl = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? zn(e) : "";
}
function Sf(e) {
  switch (e.tag) {
    case 5:
      return zn(e.type);
    case 16:
      return zn("Lazy");
    case 13:
      return zn("Suspense");
    case 19:
      return zn("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = nl(e.type, !1)), e;
    case 11:
      return (e = nl(e.type.render, !1)), e;
    case 1:
      return (e = nl(e.type, !0)), e;
    default:
      return "";
  }
}
function zl(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case Kt:
      return "Fragment";
    case Qt:
      return "Portal";
    case Ol:
      return "Profiler";
    case Io:
      return "StrictMode";
    case Tl:
      return "Suspense";
    case Ll:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case Nu:
        return (e.displayName || "Context") + ".Consumer";
      case ju:
        return (e._context.displayName || "Context") + ".Provider";
      case Do:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case Fo:
        return (
          (t = e.displayName || null), t !== null ? t : zl(e.type) || "Memo"
        );
      case ot:
        (t = e._payload), (e = e._init);
        try {
          return zl(e(t));
        } catch {}
    }
  return null;
}
function Ef(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ""),
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
      );
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return zl(t);
    case 8:
      return t === Io ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function St(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function _u(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function kf(e) {
  var t = _u(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var i = n.get,
      l = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return i.call(this);
        },
        set: function (o) {
          (r = "" + o), l.call(this, o);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (o) {
          r = "" + o;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function Sr(e) {
  e._valueTracker || (e._valueTracker = kf(e));
}
function Ou(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = _u(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function qr(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Rl(e, t) {
  var n = t.checked;
  return W({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function Ds(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = St(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function Tu(e, t) {
  (t = t.checked), t != null && Mo(e, "checked", t, !1);
}
function Ml(e, t) {
  Tu(e, t);
  var n = St(t.value),
    r = t.type;
  if (n != null)
    r === "number"
      ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
      : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value")
    ? Il(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && Il(e, t.type, St(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function Fs(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (
      !(
        (r !== "submit" && r !== "reset") ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    (t = "" + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (n = e.name),
    n !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== "" && (e.name = n);
}
function Il(e, t, n) {
  (t !== "number" || qr(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var Rn = Array.isArray;
function rn(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var i = 0; i < n.length; i++) t["$" + n[i]] = !0;
    for (n = 0; n < e.length; n++)
      (i = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== i && (e[n].selected = i),
        i && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + St(n), t = null, i = 0; i < e.length; i++) {
      if (e[i].value === n) {
        (e[i].selected = !0), r && (e[i].defaultSelected = !0);
        return;
      }
      t !== null || e[i].disabled || (t = e[i]);
    }
    t !== null && (t.selected = !0);
  }
}
function Dl(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(S(91));
  return W({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function Vs(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(S(92));
      if (Rn(n)) {
        if (1 < n.length) throw Error(S(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: St(n) };
}
function Lu(e, t) {
  var n = St(t.value),
    r = St(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r);
}
function Us(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function zu(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function Fl(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? zu(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var Er,
  Ru = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, i) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, i);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        Er = Er || document.createElement("div"),
          Er.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = Er.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function Yn(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var Vn = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  Cf = ["Webkit", "ms", "Moz", "O"];
Object.keys(Vn).forEach(function (e) {
  Cf.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Vn[t] = Vn[e]);
  });
});
function Mu(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (Vn.hasOwnProperty(e) && Vn[e])
    ? ("" + t).trim()
    : t + "px";
}
function Iu(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        i = Mu(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, i) : (e[n] = i);
    }
}
var jf = W(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  }
);
function Vl(e, t) {
  if (t) {
    if (jf[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(S(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(S(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(S(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(S(62));
  }
}
function Ul(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var Al = null;
function Vo(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var $l = null,
  ln = null,
  on = null;
function As(e) {
  if ((e = hr(e))) {
    if (typeof $l != "function") throw Error(S(280));
    var t = e.stateNode;
    t && ((t = Di(t)), $l(e.stateNode, e.type, t));
  }
}
function Du(e) {
  ln ? (on ? on.push(e) : (on = [e])) : (ln = e);
}
function Fu() {
  if (ln) {
    var e = ln,
      t = on;
    if (((on = ln = null), As(e), t)) for (e = 0; e < t.length; e++) As(t[e]);
  }
}
function Vu(e, t) {
  return e(t);
}
function Uu() {}
var rl = !1;
function Au(e, t, n) {
  if (rl) return e(t, n);
  rl = !0;
  try {
    return Vu(e, t, n);
  } finally {
    (rl = !1), (ln !== null || on !== null) && (Uu(), Fu());
  }
}
function Xn(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = Di(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      (r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(S(231, t, typeof n));
  return n;
}
var Bl = !1;
if (be)
  try {
    var jn = {};
    Object.defineProperty(jn, "passive", {
      get: function () {
        Bl = !0;
      },
    }),
      window.addEventListener("test", jn, jn),
      window.removeEventListener("test", jn, jn);
  } catch {
    Bl = !1;
  }
function Nf(e, t, n, r, i, l, o, s, a) {
  var u = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, u);
  } catch (m) {
    this.onError(m);
  }
}
var Un = !1,
  br = null,
  ei = !1,
  Hl = null,
  Pf = {
    onError: function (e) {
      (Un = !0), (br = e);
    },
  };
function _f(e, t, n, r, i, l, o, s, a) {
  (Un = !1), (br = null), Nf.apply(Pf, arguments);
}
function Of(e, t, n, r, i, l, o, s, a) {
  if ((_f.apply(this, arguments), Un)) {
    if (Un) {
      var u = br;
      (Un = !1), (br = null);
    } else throw Error(S(198));
    ei || ((ei = !0), (Hl = u));
  }
}
function Bt(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function $u(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function $s(e) {
  if (Bt(e) !== e) throw Error(S(188));
}
function Tf(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = Bt(e)), t === null)) throw Error(S(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var i = n.return;
    if (i === null) break;
    var l = i.alternate;
    if (l === null) {
      if (((r = i.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (i.child === l.child) {
      for (l = i.child; l; ) {
        if (l === n) return $s(i), e;
        if (l === r) return $s(i), t;
        l = l.sibling;
      }
      throw Error(S(188));
    }
    if (n.return !== r.return) (n = i), (r = l);
    else {
      for (var o = !1, s = i.child; s; ) {
        if (s === n) {
          (o = !0), (n = i), (r = l);
          break;
        }
        if (s === r) {
          (o = !0), (r = i), (n = l);
          break;
        }
        s = s.sibling;
      }
      if (!o) {
        for (s = l.child; s; ) {
          if (s === n) {
            (o = !0), (n = l), (r = i);
            break;
          }
          if (s === r) {
            (o = !0), (r = l), (n = i);
            break;
          }
          s = s.sibling;
        }
        if (!o) throw Error(S(189));
      }
    }
    if (n.alternate !== r) throw Error(S(190));
  }
  if (n.tag !== 3) throw Error(S(188));
  return n.stateNode.current === n ? e : t;
}
function Bu(e) {
  return (e = Tf(e)), e !== null ? Hu(e) : null;
}
function Hu(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = Hu(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var Wu = ke.unstable_scheduleCallback,
  Bs = ke.unstable_cancelCallback,
  Lf = ke.unstable_shouldYield,
  zf = ke.unstable_requestPaint,
  G = ke.unstable_now,
  Rf = ke.unstable_getCurrentPriorityLevel,
  Uo = ke.unstable_ImmediatePriority,
  Qu = ke.unstable_UserBlockingPriority,
  ti = ke.unstable_NormalPriority,
  Mf = ke.unstable_LowPriority,
  Ku = ke.unstable_IdlePriority,
  zi = null,
  Ke = null;
function If(e) {
  if (Ke && typeof Ke.onCommitFiberRoot == "function")
    try {
      Ke.onCommitFiberRoot(zi, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var Ue = Math.clz32 ? Math.clz32 : Vf,
  Df = Math.log,
  Ff = Math.LN2;
function Vf(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((Df(e) / Ff) | 0)) | 0;
}
var kr = 64,
  Cr = 4194304;
function Mn(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function ni(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    i = e.suspendedLanes,
    l = e.pingedLanes,
    o = n & 268435455;
  if (o !== 0) {
    var s = o & ~i;
    s !== 0 ? (r = Mn(s)) : ((l &= o), l !== 0 && (r = Mn(l)));
  } else (o = n & ~i), o !== 0 ? (r = Mn(o)) : l !== 0 && (r = Mn(l));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & i) &&
    ((i = r & -r), (l = t & -t), i >= l || (i === 16 && (l & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - Ue(t)), (i = 1 << n), (r |= e[n]), (t &= ~i);
  return r;
}
function Uf(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function Af(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      i = e.expirationTimes,
      l = e.pendingLanes;
    0 < l;

  ) {
    var o = 31 - Ue(l),
      s = 1 << o,
      a = i[o];
    a === -1
      ? (!(s & n) || s & r) && (i[o] = Uf(s, t))
      : a <= t && (e.expiredLanes |= s),
      (l &= ~s);
  }
}
function Wl(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function Gu() {
  var e = kr;
  return (kr <<= 1), !(kr & 4194240) && (kr = 64), e;
}
function il(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function fr(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - Ue(t)),
    (e[t] = n);
}
function $f(e, t) {
  var n = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var i = 31 - Ue(n),
      l = 1 << i;
    (t[i] = 0), (r[i] = -1), (e[i] = -1), (n &= ~l);
  }
}
function Ao(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - Ue(n),
      i = 1 << r;
    (i & t) | (e[r] & t) && (e[r] |= t), (n &= ~i);
  }
}
var F = 0;
function Yu(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var Xu,
  $o,
  Zu,
  Ju,
  qu,
  Ql = !1,
  jr = [],
  pt = null,
  ht = null,
  mt = null,
  Zn = new Map(),
  Jn = new Map(),
  at = [],
  Bf =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function Hs(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      pt = null;
      break;
    case "dragenter":
    case "dragleave":
      ht = null;
      break;
    case "mouseover":
    case "mouseout":
      mt = null;
      break;
    case "pointerover":
    case "pointerout":
      Zn.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Jn.delete(t.pointerId);
  }
}
function Nn(e, t, n, r, i, l) {
  return e === null || e.nativeEvent !== l
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: l,
        targetContainers: [i],
      }),
      t !== null && ((t = hr(t)), t !== null && $o(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      i !== null && t.indexOf(i) === -1 && t.push(i),
      e);
}
function Hf(e, t, n, r, i) {
  switch (t) {
    case "focusin":
      return (pt = Nn(pt, e, t, n, r, i)), !0;
    case "dragenter":
      return (ht = Nn(ht, e, t, n, r, i)), !0;
    case "mouseover":
      return (mt = Nn(mt, e, t, n, r, i)), !0;
    case "pointerover":
      var l = i.pointerId;
      return Zn.set(l, Nn(Zn.get(l) || null, e, t, n, r, i)), !0;
    case "gotpointercapture":
      return (
        (l = i.pointerId), Jn.set(l, Nn(Jn.get(l) || null, e, t, n, r, i)), !0
      );
  }
  return !1;
}
function bu(e) {
  var t = Lt(e.target);
  if (t !== null) {
    var n = Bt(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = $u(n)), t !== null)) {
          (e.blockedOn = t),
            qu(e.priority, function () {
              Zu(n);
            });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function $r(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = Kl(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (Al = r), n.target.dispatchEvent(r), (Al = null);
    } else return (t = hr(n)), t !== null && $o(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function Ws(e, t, n) {
  $r(e) && n.delete(t);
}
function Wf() {
  (Ql = !1),
    pt !== null && $r(pt) && (pt = null),
    ht !== null && $r(ht) && (ht = null),
    mt !== null && $r(mt) && (mt = null),
    Zn.forEach(Ws),
    Jn.forEach(Ws);
}
function Pn(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    Ql ||
      ((Ql = !0),
      ke.unstable_scheduleCallback(ke.unstable_NormalPriority, Wf)));
}
function qn(e) {
  function t(i) {
    return Pn(i, e);
  }
  if (0 < jr.length) {
    Pn(jr[0], e);
    for (var n = 1; n < jr.length; n++) {
      var r = jr[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    pt !== null && Pn(pt, e),
      ht !== null && Pn(ht, e),
      mt !== null && Pn(mt, e),
      Zn.forEach(t),
      Jn.forEach(t),
      n = 0;
    n < at.length;
    n++
  )
    (r = at[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < at.length && ((n = at[0]), n.blockedOn === null); )
    bu(n), n.blockedOn === null && at.shift();
}
var sn = rt.ReactCurrentBatchConfig,
  ri = !0;
function Qf(e, t, n, r) {
  var i = F,
    l = sn.transition;
  sn.transition = null;
  try {
    (F = 1), Bo(e, t, n, r);
  } finally {
    (F = i), (sn.transition = l);
  }
}
function Kf(e, t, n, r) {
  var i = F,
    l = sn.transition;
  sn.transition = null;
  try {
    (F = 4), Bo(e, t, n, r);
  } finally {
    (F = i), (sn.transition = l);
  }
}
function Bo(e, t, n, r) {
  if (ri) {
    var i = Kl(e, t, n, r);
    if (i === null) hl(e, t, r, ii, n), Hs(e, r);
    else if (Hf(i, e, t, n, r)) r.stopPropagation();
    else if ((Hs(e, r), t & 4 && -1 < Bf.indexOf(e))) {
      for (; i !== null; ) {
        var l = hr(i);
        if (
          (l !== null && Xu(l),
          (l = Kl(e, t, n, r)),
          l === null && hl(e, t, r, ii, n),
          l === i)
        )
          break;
        i = l;
      }
      i !== null && r.stopPropagation();
    } else hl(e, t, r, null, n);
  }
}
var ii = null;
function Kl(e, t, n, r) {
  if (((ii = null), (e = Vo(r)), (e = Lt(e)), e !== null))
    if (((t = Bt(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = $u(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (ii = e), null;
}
function ec(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (Rf()) {
        case Uo:
          return 1;
        case Qu:
          return 4;
        case ti:
        case Mf:
          return 16;
        case Ku:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var ct = null,
  Ho = null,
  Br = null;
function tc() {
  if (Br) return Br;
  var e,
    t = Ho,
    n = t.length,
    r,
    i = "value" in ct ? ct.value : ct.textContent,
    l = i.length;
  for (e = 0; e < n && t[e] === i[e]; e++);
  var o = n - e;
  for (r = 1; r <= o && t[n - r] === i[l - r]; r++);
  return (Br = i.slice(e, 1 < r ? 1 - r : void 0));
}
function Hr(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function Nr() {
  return !0;
}
function Qs() {
  return !1;
}
function je(e) {
  function t(n, r, i, l, o) {
    (this._reactName = n),
      (this._targetInst = i),
      (this.type = r),
      (this.nativeEvent = l),
      (this.target = o),
      (this.currentTarget = null);
    for (var s in e)
      e.hasOwnProperty(s) && ((n = e[s]), (this[s] = n ? n(l) : l[s]));
    return (
      (this.isDefaultPrevented = (
        l.defaultPrevented != null ? l.defaultPrevented : l.returnValue === !1
      )
        ? Nr
        : Qs),
      (this.isPropagationStopped = Qs),
      this
    );
  }
  return (
    W(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = Nr));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = Nr));
      },
      persist: function () {},
      isPersistent: Nr,
    }),
    t
  );
}
var wn = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  Wo = je(wn),
  pr = W({}, wn, { view: 0, detail: 0 }),
  Gf = je(pr),
  ll,
  ol,
  _n,
  Ri = W({}, pr, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: Qo,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return "movementX" in e
        ? e.movementX
        : (e !== _n &&
            (_n && e.type === "mousemove"
              ? ((ll = e.screenX - _n.screenX), (ol = e.screenY - _n.screenY))
              : (ol = ll = 0),
            (_n = e)),
          ll);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : ol;
    },
  }),
  Ks = je(Ri),
  Yf = W({}, Ri, { dataTransfer: 0 }),
  Xf = je(Yf),
  Zf = W({}, pr, { relatedTarget: 0 }),
  sl = je(Zf),
  Jf = W({}, wn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  qf = je(Jf),
  bf = W({}, wn, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  ep = je(bf),
  tp = W({}, wn, { data: 0 }),
  Gs = je(tp),
  np = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified",
  },
  rp = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta",
  },
  ip = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function lp(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = ip[e]) ? !!t[e] : !1;
}
function Qo() {
  return lp;
}
var op = W({}, pr, {
    key: function (e) {
      if (e.key) {
        var t = np[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = Hr(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? rp[e.keyCode] || "Unidentified"
        : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Qo,
    charCode: function (e) {
      return e.type === "keypress" ? Hr(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? Hr(e)
        : e.type === "keydown" || e.type === "keyup"
        ? e.keyCode
        : 0;
    },
  }),
  sp = je(op),
  ap = W({}, Ri, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  Ys = je(ap),
  up = W({}, pr, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Qo,
  }),
  cp = je(up),
  dp = W({}, wn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  fp = je(dp),
  pp = W({}, Ri, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return "deltaY" in e
        ? e.deltaY
        : "wheelDeltaY" in e
        ? -e.wheelDeltaY
        : "wheelDelta" in e
        ? -e.wheelDelta
        : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  hp = je(pp),
  mp = [9, 13, 27, 32],
  Ko = be && "CompositionEvent" in window,
  An = null;
be && "documentMode" in document && (An = document.documentMode);
var vp = be && "TextEvent" in window && !An,
  nc = be && (!Ko || (An && 8 < An && 11 >= An)),
  Xs = " ",
  Zs = !1;
function rc(e, t) {
  switch (e) {
    case "keyup":
      return mp.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function ic(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var Gt = !1;
function gp(e, t) {
  switch (e) {
    case "compositionend":
      return ic(t);
    case "keypress":
      return t.which !== 32 ? null : ((Zs = !0), Xs);
    case "textInput":
      return (e = t.data), e === Xs && Zs ? null : e;
    default:
      return null;
  }
}
function yp(e, t) {
  if (Gt)
    return e === "compositionend" || (!Ko && rc(e, t))
      ? ((e = tc()), (Br = Ho = ct = null), (Gt = !1), e)
      : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return nc && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var xp = {
  color: !0,
  date: !0,
  datetime: !0,
  "datetime-local": !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function Js(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!xp[e.type] : t === "textarea";
}
function lc(e, t, n, r) {
  Du(r),
    (t = li(t, "onChange")),
    0 < t.length &&
      ((n = new Wo("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t }));
}
var $n = null,
  bn = null;
function wp(e) {
  vc(e, 0);
}
function Mi(e) {
  var t = Zt(e);
  if (Ou(t)) return e;
}
function Sp(e, t) {
  if (e === "change") return t;
}
var oc = !1;
if (be) {
  var al;
  if (be) {
    var ul = "oninput" in document;
    if (!ul) {
      var qs = document.createElement("div");
      qs.setAttribute("oninput", "return;"),
        (ul = typeof qs.oninput == "function");
    }
    al = ul;
  } else al = !1;
  oc = al && (!document.documentMode || 9 < document.documentMode);
}
function bs() {
  $n && ($n.detachEvent("onpropertychange", sc), (bn = $n = null));
}
function sc(e) {
  if (e.propertyName === "value" && Mi(bn)) {
    var t = [];
    lc(t, bn, e, Vo(e)), Au(wp, t);
  }
}
function Ep(e, t, n) {
  e === "focusin"
    ? (bs(), ($n = t), (bn = n), $n.attachEvent("onpropertychange", sc))
    : e === "focusout" && bs();
}
function kp(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return Mi(bn);
}
function Cp(e, t) {
  if (e === "click") return Mi(t);
}
function jp(e, t) {
  if (e === "input" || e === "change") return Mi(t);
}
function Np(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var $e = typeof Object.is == "function" ? Object.is : Np;
function er(e, t) {
  if ($e(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var i = n[r];
    if (!_l.call(t, i) || !$e(e[i], t[i])) return !1;
  }
  return !0;
}
function ea(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function ta(e, t) {
  var n = ea(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = ea(n);
  }
}
function ac(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? ac(e, t.parentNode)
      : "contains" in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function uc() {
  for (var e = window, t = qr(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = qr(e.document);
  }
  return t;
}
function Go(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === "input" &&
      (e.type === "text" ||
        e.type === "search" ||
        e.type === "tel" ||
        e.type === "url" ||
        e.type === "password")) ||
      t === "textarea" ||
      e.contentEditable === "true")
  );
}
function Pp(e) {
  var t = uc(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    ac(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && Go(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        "selectionStart" in n)
      )
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var i = n.textContent.length,
          l = Math.min(r.start, i);
        (r = r.end === void 0 ? l : Math.min(r.end, i)),
          !e.extend && l > r && ((i = r), (r = l), (l = i)),
          (i = ta(n, l));
        var o = ta(n, r);
        i &&
          o &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== i.node ||
            e.anchorOffset !== i.offset ||
            e.focusNode !== o.node ||
            e.focusOffset !== o.offset) &&
          ((t = t.createRange()),
          t.setStart(i.node, i.offset),
          e.removeAllRanges(),
          l > r
            ? (e.addRange(t), e.extend(o.node, o.offset))
            : (t.setEnd(o.node, o.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var _p = be && "documentMode" in document && 11 >= document.documentMode,
  Yt = null,
  Gl = null,
  Bn = null,
  Yl = !1;
function na(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Yl ||
    Yt == null ||
    Yt !== qr(r) ||
    ((r = Yt),
    "selectionStart" in r && Go(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (Bn && er(Bn, r)) ||
      ((Bn = r),
      (r = li(Gl, "onSelect")),
      0 < r.length &&
        ((t = new Wo("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = Yt))));
}
function Pr(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var Xt = {
    animationend: Pr("Animation", "AnimationEnd"),
    animationiteration: Pr("Animation", "AnimationIteration"),
    animationstart: Pr("Animation", "AnimationStart"),
    transitionend: Pr("Transition", "TransitionEnd"),
  },
  cl = {},
  cc = {};
be &&
  ((cc = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete Xt.animationend.animation,
    delete Xt.animationiteration.animation,
    delete Xt.animationstart.animation),
  "TransitionEvent" in window || delete Xt.transitionend.transition);
function Ii(e) {
  if (cl[e]) return cl[e];
  if (!Xt[e]) return e;
  var t = Xt[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in cc) return (cl[e] = t[n]);
  return e;
}
var dc = Ii("animationend"),
  fc = Ii("animationiteration"),
  pc = Ii("animationstart"),
  hc = Ii("transitionend"),
  mc = new Map(),
  ra =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function kt(e, t) {
  mc.set(e, t), $t(t, [e]);
}
for (var dl = 0; dl < ra.length; dl++) {
  var fl = ra[dl],
    Op = fl.toLowerCase(),
    Tp = fl[0].toUpperCase() + fl.slice(1);
  kt(Op, "on" + Tp);
}
kt(dc, "onAnimationEnd");
kt(fc, "onAnimationIteration");
kt(pc, "onAnimationStart");
kt("dblclick", "onDoubleClick");
kt("focusin", "onFocus");
kt("focusout", "onBlur");
kt(hc, "onTransitionEnd");
dn("onMouseEnter", ["mouseout", "mouseover"]);
dn("onMouseLeave", ["mouseout", "mouseover"]);
dn("onPointerEnter", ["pointerout", "pointerover"]);
dn("onPointerLeave", ["pointerout", "pointerover"]);
$t(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
$t(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
$t("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
$t(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
$t(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
$t(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var In =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  Lp = new Set("cancel close invalid load scroll toggle".split(" ").concat(In));
function ia(e, t, n) {
  var r = e.type || "unknown-event";
  (e.currentTarget = n), Of(r, t, void 0, e), (e.currentTarget = null);
}
function vc(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      i = r.event;
    r = r.listeners;
    e: {
      var l = void 0;
      if (t)
        for (var o = r.length - 1; 0 <= o; o--) {
          var s = r[o],
            a = s.instance,
            u = s.currentTarget;
          if (((s = s.listener), a !== l && i.isPropagationStopped())) break e;
          ia(i, s, u), (l = a);
        }
      else
        for (o = 0; o < r.length; o++) {
          if (
            ((s = r[o]),
            (a = s.instance),
            (u = s.currentTarget),
            (s = s.listener),
            a !== l && i.isPropagationStopped())
          )
            break e;
          ia(i, s, u), (l = a);
        }
    }
  }
  if (ei) throw ((e = Hl), (ei = !1), (Hl = null), e);
}
function U(e, t) {
  var n = t[bl];
  n === void 0 && (n = t[bl] = new Set());
  var r = e + "__bubble";
  n.has(r) || (gc(t, e, 2, !1), n.add(r));
}
function pl(e, t, n) {
  var r = 0;
  t && (r |= 4), gc(n, e, r, t);
}
var _r = "_reactListening" + Math.random().toString(36).slice(2);
function tr(e) {
  if (!e[_r]) {
    (e[_r] = !0),
      Cu.forEach(function (n) {
        n !== "selectionchange" && (Lp.has(n) || pl(n, !1, e), pl(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[_r] || ((t[_r] = !0), pl("selectionchange", !1, t));
  }
}
function gc(e, t, n, r) {
  switch (ec(t)) {
    case 1:
      var i = Qf;
      break;
    case 4:
      i = Kf;
      break;
    default:
      i = Bo;
  }
  (n = i.bind(null, t, n, e)),
    (i = void 0),
    !Bl ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (i = !0),
    r
      ? i !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: i })
        : e.addEventListener(t, n, !0)
      : i !== void 0
      ? e.addEventListener(t, n, { passive: i })
      : e.addEventListener(t, n, !1);
}
function hl(e, t, n, r, i) {
  var l = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var o = r.tag;
      if (o === 3 || o === 4) {
        var s = r.stateNode.containerInfo;
        if (s === i || (s.nodeType === 8 && s.parentNode === i)) break;
        if (o === 4)
          for (o = r.return; o !== null; ) {
            var a = o.tag;
            if (
              (a === 3 || a === 4) &&
              ((a = o.stateNode.containerInfo),
              a === i || (a.nodeType === 8 && a.parentNode === i))
            )
              return;
            o = o.return;
          }
        for (; s !== null; ) {
          if (((o = Lt(s)), o === null)) return;
          if (((a = o.tag), a === 5 || a === 6)) {
            r = l = o;
            continue e;
          }
          s = s.parentNode;
        }
      }
      r = r.return;
    }
  Au(function () {
    var u = l,
      m = Vo(n),
      p = [];
    e: {
      var v = mc.get(e);
      if (v !== void 0) {
        var g = Wo,
          x = e;
        switch (e) {
          case "keypress":
            if (Hr(n) === 0) break e;
          case "keydown":
          case "keyup":
            g = sp;
            break;
          case "focusin":
            (x = "focus"), (g = sl);
            break;
          case "focusout":
            (x = "blur"), (g = sl);
            break;
          case "beforeblur":
          case "afterblur":
            g = sl;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            g = Ks;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            g = Xf;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            g = cp;
            break;
          case dc:
          case fc:
          case pc:
            g = qf;
            break;
          case hc:
            g = fp;
            break;
          case "scroll":
            g = Gf;
            break;
          case "wheel":
            g = hp;
            break;
          case "copy":
          case "cut":
          case "paste":
            g = ep;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            g = Ys;
        }
        var w = (t & 4) !== 0,
          E = !w && e === "scroll",
          f = w ? (v !== null ? v + "Capture" : null) : v;
        w = [];
        for (var d = u, h; d !== null; ) {
          h = d;
          var y = h.stateNode;
          if (
            (h.tag === 5 &&
              y !== null &&
              ((h = y),
              f !== null && ((y = Xn(d, f)), y != null && w.push(nr(d, y, h)))),
            E)
          )
            break;
          d = d.return;
        }
        0 < w.length &&
          ((v = new g(v, x, null, n, m)), p.push({ event: v, listeners: w }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((v = e === "mouseover" || e === "pointerover"),
          (g = e === "mouseout" || e === "pointerout"),
          v &&
            n !== Al &&
            (x = n.relatedTarget || n.fromElement) &&
            (Lt(x) || x[et]))
        )
          break e;
        if (
          (g || v) &&
          ((v =
            m.window === m
              ? m
              : (v = m.ownerDocument)
              ? v.defaultView || v.parentWindow
              : window),
          g
            ? ((x = n.relatedTarget || n.toElement),
              (g = u),
              (x = x ? Lt(x) : null),
              x !== null &&
                ((E = Bt(x)), x !== E || (x.tag !== 5 && x.tag !== 6)) &&
                (x = null))
            : ((g = null), (x = u)),
          g !== x)
        ) {
          if (
            ((w = Ks),
            (y = "onMouseLeave"),
            (f = "onMouseEnter"),
            (d = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((w = Ys),
              (y = "onPointerLeave"),
              (f = "onPointerEnter"),
              (d = "pointer")),
            (E = g == null ? v : Zt(g)),
            (h = x == null ? v : Zt(x)),
            (v = new w(y, d + "leave", g, n, m)),
            (v.target = E),
            (v.relatedTarget = h),
            (y = null),
            Lt(m) === u &&
              ((w = new w(f, d + "enter", x, n, m)),
              (w.target = h),
              (w.relatedTarget = E),
              (y = w)),
            (E = y),
            g && x)
          )
            t: {
              for (w = g, f = x, d = 0, h = w; h; h = Ht(h)) d++;
              for (h = 0, y = f; y; y = Ht(y)) h++;
              for (; 0 < d - h; ) (w = Ht(w)), d--;
              for (; 0 < h - d; ) (f = Ht(f)), h--;
              for (; d--; ) {
                if (w === f || (f !== null && w === f.alternate)) break t;
                (w = Ht(w)), (f = Ht(f));
              }
              w = null;
            }
          else w = null;
          g !== null && la(p, v, g, w, !1),
            x !== null && E !== null && la(p, E, x, w, !0);
        }
      }
      e: {
        if (
          ((v = u ? Zt(u) : window),
          (g = v.nodeName && v.nodeName.toLowerCase()),
          g === "select" || (g === "input" && v.type === "file"))
        )
          var k = Sp;
        else if (Js(v))
          if (oc) k = jp;
          else {
            k = kp;
            var C = Ep;
          }
        else
          (g = v.nodeName) &&
            g.toLowerCase() === "input" &&
            (v.type === "checkbox" || v.type === "radio") &&
            (k = Cp);
        if (k && (k = k(e, u))) {
          lc(p, k, n, m);
          break e;
        }
        C && C(e, v, u),
          e === "focusout" &&
            (C = v._wrapperState) &&
            C.controlled &&
            v.type === "number" &&
            Il(v, "number", v.value);
      }
      switch (((C = u ? Zt(u) : window), e)) {
        case "focusin":
          (Js(C) || C.contentEditable === "true") &&
            ((Yt = C), (Gl = u), (Bn = null));
          break;
        case "focusout":
          Bn = Gl = Yt = null;
          break;
        case "mousedown":
          Yl = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (Yl = !1), na(p, n, m);
          break;
        case "selectionchange":
          if (_p) break;
        case "keydown":
        case "keyup":
          na(p, n, m);
      }
      var j;
      if (Ko)
        e: {
          switch (e) {
            case "compositionstart":
              var _ = "onCompositionStart";
              break e;
            case "compositionend":
              _ = "onCompositionEnd";
              break e;
            case "compositionupdate":
              _ = "onCompositionUpdate";
              break e;
          }
          _ = void 0;
        }
      else
        Gt
          ? rc(e, n) && (_ = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (_ = "onCompositionStart");
      _ &&
        (nc &&
          n.locale !== "ko" &&
          (Gt || _ !== "onCompositionStart"
            ? _ === "onCompositionEnd" && Gt && (j = tc())
            : ((ct = m),
              (Ho = "value" in ct ? ct.value : ct.textContent),
              (Gt = !0))),
        (C = li(u, _)),
        0 < C.length &&
          ((_ = new Gs(_, e, null, n, m)),
          p.push({ event: _, listeners: C }),
          j ? (_.data = j) : ((j = ic(n)), j !== null && (_.data = j)))),
        (j = vp ? gp(e, n) : yp(e, n)) &&
          ((u = li(u, "onBeforeInput")),
          0 < u.length &&
            ((m = new Gs("onBeforeInput", "beforeinput", null, n, m)),
            p.push({ event: m, listeners: u }),
            (m.data = j)));
    }
    vc(p, t);
  });
}
function nr(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function li(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var i = e,
      l = i.stateNode;
    i.tag === 5 &&
      l !== null &&
      ((i = l),
      (l = Xn(e, n)),
      l != null && r.unshift(nr(e, l, i)),
      (l = Xn(e, t)),
      l != null && r.push(nr(e, l, i))),
      (e = e.return);
  }
  return r;
}
function Ht(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function la(e, t, n, r, i) {
  for (var l = t._reactName, o = []; n !== null && n !== r; ) {
    var s = n,
      a = s.alternate,
      u = s.stateNode;
    if (a !== null && a === r) break;
    s.tag === 5 &&
      u !== null &&
      ((s = u),
      i
        ? ((a = Xn(n, l)), a != null && o.unshift(nr(n, a, s)))
        : i || ((a = Xn(n, l)), a != null && o.push(nr(n, a, s)))),
      (n = n.return);
  }
  o.length !== 0 && e.push({ event: t, listeners: o });
}
var zp = /\r\n?/g,
  Rp = /\u0000|\uFFFD/g;
function oa(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      zp,
      `
`
    )
    .replace(Rp, "");
}
function Or(e, t, n) {
  if (((t = oa(t)), oa(e) !== t && n)) throw Error(S(425));
}
function oi() {}
var Xl = null,
  Zl = null;
function Jl(e, t) {
  return (
    e === "textarea" ||
    e === "noscript" ||
    typeof t.children == "string" ||
    typeof t.children == "number" ||
    (typeof t.dangerouslySetInnerHTML == "object" &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var ql = typeof setTimeout == "function" ? setTimeout : void 0,
  Mp = typeof clearTimeout == "function" ? clearTimeout : void 0,
  sa = typeof Promise == "function" ? Promise : void 0,
  Ip =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof sa < "u"
      ? function (e) {
          return sa.resolve(null).then(e).catch(Dp);
        }
      : ql;
function Dp(e) {
  setTimeout(function () {
    throw e;
  });
}
function ml(e, t) {
  var n = t,
    r = 0;
  do {
    var i = n.nextSibling;
    if ((e.removeChild(n), i && i.nodeType === 8))
      if (((n = i.data), n === "/$")) {
        if (r === 0) {
          e.removeChild(i), qn(t);
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = i;
  } while (n);
  qn(t);
}
function vt(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function aa(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var Sn = Math.random().toString(36).slice(2),
  We = "__reactFiber$" + Sn,
  rr = "__reactProps$" + Sn,
  et = "__reactContainer$" + Sn,
  bl = "__reactEvents$" + Sn,
  Fp = "__reactListeners$" + Sn,
  Vp = "__reactHandles$" + Sn;
function Lt(e) {
  var t = e[We];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[et] || n[We])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = aa(e); e !== null; ) {
          if ((n = e[We])) return n;
          e = aa(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function hr(e) {
  return (
    (e = e[We] || e[et]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function Zt(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(S(33));
}
function Di(e) {
  return e[rr] || null;
}
var eo = [],
  Jt = -1;
function Ct(e) {
  return { current: e };
}
function A(e) {
  0 > Jt || ((e.current = eo[Jt]), (eo[Jt] = null), Jt--);
}
function V(e, t) {
  Jt++, (eo[Jt] = e.current), (e.current = t);
}
var Et = {},
  ue = Ct(Et),
  ve = Ct(!1),
  Dt = Et;
function fn(e, t) {
  var n = e.type.contextTypes;
  if (!n) return Et;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var i = {},
    l;
  for (l in n) i[l] = t[l];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    i
  );
}
function ge(e) {
  return (e = e.childContextTypes), e != null;
}
function si() {
  A(ve), A(ue);
}
function ua(e, t, n) {
  if (ue.current !== Et) throw Error(S(168));
  V(ue, t), V(ve, n);
}
function yc(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var i in r) if (!(i in t)) throw Error(S(108, Ef(e) || "Unknown", i));
  return W({}, n, r);
}
function ai(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || Et),
    (Dt = ue.current),
    V(ue, e),
    V(ve, ve.current),
    !0
  );
}
function ca(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(S(169));
  n
    ? ((e = yc(e, t, Dt)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      A(ve),
      A(ue),
      V(ue, e))
    : A(ve),
    V(ve, n);
}
var Xe = null,
  Fi = !1,
  vl = !1;
function xc(e) {
  Xe === null ? (Xe = [e]) : Xe.push(e);
}
function Up(e) {
  (Fi = !0), xc(e);
}
function jt() {
  if (!vl && Xe !== null) {
    vl = !0;
    var e = 0,
      t = F;
    try {
      var n = Xe;
      for (F = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (Xe = null), (Fi = !1);
    } catch (i) {
      throw (Xe !== null && (Xe = Xe.slice(e + 1)), Wu(Uo, jt), i);
    } finally {
      (F = t), (vl = !1);
    }
  }
  return null;
}
var qt = [],
  bt = 0,
  ui = null,
  ci = 0,
  Pe = [],
  _e = 0,
  Ft = null,
  Ze = 1,
  Je = "";
function _t(e, t) {
  (qt[bt++] = ci), (qt[bt++] = ui), (ui = e), (ci = t);
}
function wc(e, t, n) {
  (Pe[_e++] = Ze), (Pe[_e++] = Je), (Pe[_e++] = Ft), (Ft = e);
  var r = Ze;
  e = Je;
  var i = 32 - Ue(r) - 1;
  (r &= ~(1 << i)), (n += 1);
  var l = 32 - Ue(t) + i;
  if (30 < l) {
    var o = i - (i % 5);
    (l = (r & ((1 << o) - 1)).toString(32)),
      (r >>= o),
      (i -= o),
      (Ze = (1 << (32 - Ue(t) + i)) | (n << i) | r),
      (Je = l + e);
  } else (Ze = (1 << l) | (n << i) | r), (Je = e);
}
function Yo(e) {
  e.return !== null && (_t(e, 1), wc(e, 1, 0));
}
function Xo(e) {
  for (; e === ui; )
    (ui = qt[--bt]), (qt[bt] = null), (ci = qt[--bt]), (qt[bt] = null);
  for (; e === Ft; )
    (Ft = Pe[--_e]),
      (Pe[_e] = null),
      (Je = Pe[--_e]),
      (Pe[_e] = null),
      (Ze = Pe[--_e]),
      (Pe[_e] = null);
}
var Ee = null,
  Se = null,
  $ = !1,
  Ve = null;
function Sc(e, t) {
  var n = Te(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function da(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (Ee = e), (Se = vt(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (Ee = e), (Se = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = Ft !== null ? { id: Ze, overflow: Je } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = Te(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (Ee = e),
            (Se = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function to(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function no(e) {
  if ($) {
    var t = Se;
    if (t) {
      var n = t;
      if (!da(e, t)) {
        if (to(e)) throw Error(S(418));
        t = vt(n.nextSibling);
        var r = Ee;
        t && da(e, t)
          ? Sc(r, n)
          : ((e.flags = (e.flags & -4097) | 2), ($ = !1), (Ee = e));
      }
    } else {
      if (to(e)) throw Error(S(418));
      (e.flags = (e.flags & -4097) | 2), ($ = !1), (Ee = e);
    }
  }
}
function fa(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  Ee = e;
}
function Tr(e) {
  if (e !== Ee) return !1;
  if (!$) return fa(e), ($ = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !Jl(e.type, e.memoizedProps))),
    t && (t = Se))
  ) {
    if (to(e)) throw (Ec(), Error(S(418)));
    for (; t; ) Sc(e, t), (t = vt(t.nextSibling));
  }
  if ((fa(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(S(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              Se = vt(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      Se = null;
    }
  } else Se = Ee ? vt(e.stateNode.nextSibling) : null;
  return !0;
}
function Ec() {
  for (var e = Se; e; ) e = vt(e.nextSibling);
}
function pn() {
  (Se = Ee = null), ($ = !1);
}
function Zo(e) {
  Ve === null ? (Ve = [e]) : Ve.push(e);
}
var Ap = rt.ReactCurrentBatchConfig;
function On(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(S(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(S(147, e));
      var i = r,
        l = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === l
        ? t.ref
        : ((t = function (o) {
            var s = i.refs;
            o === null ? delete s[l] : (s[l] = o);
          }),
          (t._stringRef = l),
          t);
    }
    if (typeof e != "string") throw Error(S(284));
    if (!n._owner) throw Error(S(290, e));
  }
  return e;
}
function Lr(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      S(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e
      )
    ))
  );
}
function pa(e) {
  var t = e._init;
  return t(e._payload);
}
function kc(e) {
  function t(f, d) {
    if (e) {
      var h = f.deletions;
      h === null ? ((f.deletions = [d]), (f.flags |= 16)) : h.push(d);
    }
  }
  function n(f, d) {
    if (!e) return null;
    for (; d !== null; ) t(f, d), (d = d.sibling);
    return null;
  }
  function r(f, d) {
    for (f = new Map(); d !== null; )
      d.key !== null ? f.set(d.key, d) : f.set(d.index, d), (d = d.sibling);
    return f;
  }
  function i(f, d) {
    return (f = wt(f, d)), (f.index = 0), (f.sibling = null), f;
  }
  function l(f, d, h) {
    return (
      (f.index = h),
      e
        ? ((h = f.alternate),
          h !== null
            ? ((h = h.index), h < d ? ((f.flags |= 2), d) : h)
            : ((f.flags |= 2), d))
        : ((f.flags |= 1048576), d)
    );
  }
  function o(f) {
    return e && f.alternate === null && (f.flags |= 2), f;
  }
  function s(f, d, h, y) {
    return d === null || d.tag !== 6
      ? ((d = kl(h, f.mode, y)), (d.return = f), d)
      : ((d = i(d, h)), (d.return = f), d);
  }
  function a(f, d, h, y) {
    var k = h.type;
    return k === Kt
      ? m(f, d, h.props.children, y, h.key)
      : d !== null &&
        (d.elementType === k ||
          (typeof k == "object" &&
            k !== null &&
            k.$$typeof === ot &&
            pa(k) === d.type))
      ? ((y = i(d, h.props)), (y.ref = On(f, d, h)), (y.return = f), y)
      : ((y = Zr(h.type, h.key, h.props, null, f.mode, y)),
        (y.ref = On(f, d, h)),
        (y.return = f),
        y);
  }
  function u(f, d, h, y) {
    return d === null ||
      d.tag !== 4 ||
      d.stateNode.containerInfo !== h.containerInfo ||
      d.stateNode.implementation !== h.implementation
      ? ((d = Cl(h, f.mode, y)), (d.return = f), d)
      : ((d = i(d, h.children || [])), (d.return = f), d);
  }
  function m(f, d, h, y, k) {
    return d === null || d.tag !== 7
      ? ((d = It(h, f.mode, y, k)), (d.return = f), d)
      : ((d = i(d, h)), (d.return = f), d);
  }
  function p(f, d, h) {
    if ((typeof d == "string" && d !== "") || typeof d == "number")
      return (d = kl("" + d, f.mode, h)), (d.return = f), d;
    if (typeof d == "object" && d !== null) {
      switch (d.$$typeof) {
        case wr:
          return (
            (h = Zr(d.type, d.key, d.props, null, f.mode, h)),
            (h.ref = On(f, null, d)),
            (h.return = f),
            h
          );
        case Qt:
          return (d = Cl(d, f.mode, h)), (d.return = f), d;
        case ot:
          var y = d._init;
          return p(f, y(d._payload), h);
      }
      if (Rn(d) || Cn(d))
        return (d = It(d, f.mode, h, null)), (d.return = f), d;
      Lr(f, d);
    }
    return null;
  }
  function v(f, d, h, y) {
    var k = d !== null ? d.key : null;
    if ((typeof h == "string" && h !== "") || typeof h == "number")
      return k !== null ? null : s(f, d, "" + h, y);
    if (typeof h == "object" && h !== null) {
      switch (h.$$typeof) {
        case wr:
          return h.key === k ? a(f, d, h, y) : null;
        case Qt:
          return h.key === k ? u(f, d, h, y) : null;
        case ot:
          return (k = h._init), v(f, d, k(h._payload), y);
      }
      if (Rn(h) || Cn(h)) return k !== null ? null : m(f, d, h, y, null);
      Lr(f, h);
    }
    return null;
  }
  function g(f, d, h, y, k) {
    if ((typeof y == "string" && y !== "") || typeof y == "number")
      return (f = f.get(h) || null), s(d, f, "" + y, k);
    if (typeof y == "object" && y !== null) {
      switch (y.$$typeof) {
        case wr:
          return (f = f.get(y.key === null ? h : y.key) || null), a(d, f, y, k);
        case Qt:
          return (f = f.get(y.key === null ? h : y.key) || null), u(d, f, y, k);
        case ot:
          var C = y._init;
          return g(f, d, h, C(y._payload), k);
      }
      if (Rn(y) || Cn(y)) return (f = f.get(h) || null), m(d, f, y, k, null);
      Lr(d, y);
    }
    return null;
  }
  function x(f, d, h, y) {
    for (
      var k = null, C = null, j = d, _ = (d = 0), M = null;
      j !== null && _ < h.length;
      _++
    ) {
      j.index > _ ? ((M = j), (j = null)) : (M = j.sibling);
      var T = v(f, j, h[_], y);
      if (T === null) {
        j === null && (j = M);
        break;
      }
      e && j && T.alternate === null && t(f, j),
        (d = l(T, d, _)),
        C === null ? (k = T) : (C.sibling = T),
        (C = T),
        (j = M);
    }
    if (_ === h.length) return n(f, j), $ && _t(f, _), k;
    if (j === null) {
      for (; _ < h.length; _++)
        (j = p(f, h[_], y)),
          j !== null &&
            ((d = l(j, d, _)), C === null ? (k = j) : (C.sibling = j), (C = j));
      return $ && _t(f, _), k;
    }
    for (j = r(f, j); _ < h.length; _++)
      (M = g(j, f, _, h[_], y)),
        M !== null &&
          (e && M.alternate !== null && j.delete(M.key === null ? _ : M.key),
          (d = l(M, d, _)),
          C === null ? (k = M) : (C.sibling = M),
          (C = M));
    return (
      e &&
        j.forEach(function (le) {
          return t(f, le);
        }),
      $ && _t(f, _),
      k
    );
  }
  function w(f, d, h, y) {
    var k = Cn(h);
    if (typeof k != "function") throw Error(S(150));
    if (((h = k.call(h)), h == null)) throw Error(S(151));
    for (
      var C = (k = null), j = d, _ = (d = 0), M = null, T = h.next();
      j !== null && !T.done;
      _++, T = h.next()
    ) {
      j.index > _ ? ((M = j), (j = null)) : (M = j.sibling);
      var le = v(f, j, T.value, y);
      if (le === null) {
        j === null && (j = M);
        break;
      }
      e && j && le.alternate === null && t(f, j),
        (d = l(le, d, _)),
        C === null ? (k = le) : (C.sibling = le),
        (C = le),
        (j = M);
    }
    if (T.done) return n(f, j), $ && _t(f, _), k;
    if (j === null) {
      for (; !T.done; _++, T = h.next())
        (T = p(f, T.value, y)),
          T !== null &&
            ((d = l(T, d, _)), C === null ? (k = T) : (C.sibling = T), (C = T));
      return $ && _t(f, _), k;
    }
    for (j = r(f, j); !T.done; _++, T = h.next())
      (T = g(j, f, _, T.value, y)),
        T !== null &&
          (e && T.alternate !== null && j.delete(T.key === null ? _ : T.key),
          (d = l(T, d, _)),
          C === null ? (k = T) : (C.sibling = T),
          (C = T));
    return (
      e &&
        j.forEach(function (En) {
          return t(f, En);
        }),
      $ && _t(f, _),
      k
    );
  }
  function E(f, d, h, y) {
    if (
      (typeof h == "object" &&
        h !== null &&
        h.type === Kt &&
        h.key === null &&
        (h = h.props.children),
      typeof h == "object" && h !== null)
    ) {
      switch (h.$$typeof) {
        case wr:
          e: {
            for (var k = h.key, C = d; C !== null; ) {
              if (C.key === k) {
                if (((k = h.type), k === Kt)) {
                  if (C.tag === 7) {
                    n(f, C.sibling),
                      (d = i(C, h.props.children)),
                      (d.return = f),
                      (f = d);
                    break e;
                  }
                } else if (
                  C.elementType === k ||
                  (typeof k == "object" &&
                    k !== null &&
                    k.$$typeof === ot &&
                    pa(k) === C.type)
                ) {
                  n(f, C.sibling),
                    (d = i(C, h.props)),
                    (d.ref = On(f, C, h)),
                    (d.return = f),
                    (f = d);
                  break e;
                }
                n(f, C);
                break;
              } else t(f, C);
              C = C.sibling;
            }
            h.type === Kt
              ? ((d = It(h.props.children, f.mode, y, h.key)),
                (d.return = f),
                (f = d))
              : ((y = Zr(h.type, h.key, h.props, null, f.mode, y)),
                (y.ref = On(f, d, h)),
                (y.return = f),
                (f = y));
          }
          return o(f);
        case Qt:
          e: {
            for (C = h.key; d !== null; ) {
              if (d.key === C)
                if (
                  d.tag === 4 &&
                  d.stateNode.containerInfo === h.containerInfo &&
                  d.stateNode.implementation === h.implementation
                ) {
                  n(f, d.sibling),
                    (d = i(d, h.children || [])),
                    (d.return = f),
                    (f = d);
                  break e;
                } else {
                  n(f, d);
                  break;
                }
              else t(f, d);
              d = d.sibling;
            }
            (d = Cl(h, f.mode, y)), (d.return = f), (f = d);
          }
          return o(f);
        case ot:
          return (C = h._init), E(f, d, C(h._payload), y);
      }
      if (Rn(h)) return x(f, d, h, y);
      if (Cn(h)) return w(f, d, h, y);
      Lr(f, h);
    }
    return (typeof h == "string" && h !== "") || typeof h == "number"
      ? ((h = "" + h),
        d !== null && d.tag === 6
          ? (n(f, d.sibling), (d = i(d, h)), (d.return = f), (f = d))
          : (n(f, d), (d = kl(h, f.mode, y)), (d.return = f), (f = d)),
        o(f))
      : n(f, d);
  }
  return E;
}
var hn = kc(!0),
  Cc = kc(!1),
  di = Ct(null),
  fi = null,
  en = null,
  Jo = null;
function qo() {
  Jo = en = fi = null;
}
function bo(e) {
  var t = di.current;
  A(di), (e._currentValue = t);
}
function ro(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function an(e, t) {
  (fi = e),
    (Jo = en = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (me = !0), (e.firstContext = null));
}
function ze(e) {
  var t = e._currentValue;
  if (Jo !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), en === null)) {
      if (fi === null) throw Error(S(308));
      (en = e), (fi.dependencies = { lanes: 0, firstContext: e });
    } else en = en.next = e;
  return t;
}
var zt = null;
function es(e) {
  zt === null ? (zt = [e]) : zt.push(e);
}
function jc(e, t, n, r) {
  var i = t.interleaved;
  return (
    i === null ? ((n.next = n), es(t)) : ((n.next = i.next), (i.next = n)),
    (t.interleaved = n),
    tt(e, r)
  );
}
function tt(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return);
  return n.tag === 3 ? n.stateNode : null;
}
var st = !1;
function ts(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function Nc(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function qe(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function gt(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), I & 2)) {
    var i = r.pending;
    return (
      i === null ? (t.next = t) : ((t.next = i.next), (i.next = t)),
      (r.pending = t),
      tt(e, n)
    );
  }
  return (
    (i = r.interleaved),
    i === null ? ((t.next = t), es(r)) : ((t.next = i.next), (i.next = t)),
    (r.interleaved = t),
    tt(e, n)
  );
}
function Wr(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Ao(e, n);
  }
}
function ha(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var i = null,
      l = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var o = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        l === null ? (i = l = o) : (l = l.next = o), (n = n.next);
      } while (n !== null);
      l === null ? (i = l = t) : (l = l.next = t);
    } else i = l = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: i,
      lastBaseUpdate: l,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n);
    return;
  }
  (e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t);
}
function pi(e, t, n, r) {
  var i = e.updateQueue;
  st = !1;
  var l = i.firstBaseUpdate,
    o = i.lastBaseUpdate,
    s = i.shared.pending;
  if (s !== null) {
    i.shared.pending = null;
    var a = s,
      u = a.next;
    (a.next = null), o === null ? (l = u) : (o.next = u), (o = a);
    var m = e.alternate;
    m !== null &&
      ((m = m.updateQueue),
      (s = m.lastBaseUpdate),
      s !== o &&
        (s === null ? (m.firstBaseUpdate = u) : (s.next = u),
        (m.lastBaseUpdate = a)));
  }
  if (l !== null) {
    var p = i.baseState;
    (o = 0), (m = u = a = null), (s = l);
    do {
      var v = s.lane,
        g = s.eventTime;
      if ((r & v) === v) {
        m !== null &&
          (m = m.next =
            {
              eventTime: g,
              lane: 0,
              tag: s.tag,
              payload: s.payload,
              callback: s.callback,
              next: null,
            });
        e: {
          var x = e,
            w = s;
          switch (((v = t), (g = n), w.tag)) {
            case 1:
              if (((x = w.payload), typeof x == "function")) {
                p = x.call(g, p, v);
                break e;
              }
              p = x;
              break e;
            case 3:
              x.flags = (x.flags & -65537) | 128;
            case 0:
              if (
                ((x = w.payload),
                (v = typeof x == "function" ? x.call(g, p, v) : x),
                v == null)
              )
                break e;
              p = W({}, p, v);
              break e;
            case 2:
              st = !0;
          }
        }
        s.callback !== null &&
          s.lane !== 0 &&
          ((e.flags |= 64),
          (v = i.effects),
          v === null ? (i.effects = [s]) : v.push(s));
      } else
        (g = {
          eventTime: g,
          lane: v,
          tag: s.tag,
          payload: s.payload,
          callback: s.callback,
          next: null,
        }),
          m === null ? ((u = m = g), (a = p)) : (m = m.next = g),
          (o |= v);
      if (((s = s.next), s === null)) {
        if (((s = i.shared.pending), s === null)) break;
        (v = s),
          (s = v.next),
          (v.next = null),
          (i.lastBaseUpdate = v),
          (i.shared.pending = null);
      }
    } while (!0);
    if (
      (m === null && (a = p),
      (i.baseState = a),
      (i.firstBaseUpdate = u),
      (i.lastBaseUpdate = m),
      (t = i.shared.interleaved),
      t !== null)
    ) {
      i = t;
      do (o |= i.lane), (i = i.next);
      while (i !== t);
    } else l === null && (i.shared.lanes = 0);
    (Ut |= o), (e.lanes = o), (e.memoizedState = p);
  }
}
function ma(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        i = r.callback;
      if (i !== null) {
        if (((r.callback = null), (r = n), typeof i != "function"))
          throw Error(S(191, i));
        i.call(r);
      }
    }
}
var mr = {},
  Ge = Ct(mr),
  ir = Ct(mr),
  lr = Ct(mr);
function Rt(e) {
  if (e === mr) throw Error(S(174));
  return e;
}
function ns(e, t) {
  switch ((V(lr, t), V(ir, e), V(Ge, mr), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Fl(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = Fl(t, e));
  }
  A(Ge), V(Ge, t);
}
function mn() {
  A(Ge), A(ir), A(lr);
}
function Pc(e) {
  Rt(lr.current);
  var t = Rt(Ge.current),
    n = Fl(t, e.type);
  t !== n && (V(ir, e), V(Ge, n));
}
function rs(e) {
  ir.current === e && (A(Ge), A(ir));
}
var B = Ct(0);
function hi(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var gl = [];
function is() {
  for (var e = 0; e < gl.length; e++)
    gl[e]._workInProgressVersionPrimary = null;
  gl.length = 0;
}
var Qr = rt.ReactCurrentDispatcher,
  yl = rt.ReactCurrentBatchConfig,
  Vt = 0,
  H = null,
  X = null,
  q = null,
  mi = !1,
  Hn = !1,
  or = 0,
  $p = 0;
function oe() {
  throw Error(S(321));
}
function ls(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!$e(e[n], t[n])) return !1;
  return !0;
}
function os(e, t, n, r, i, l) {
  if (
    ((Vt = l),
    (H = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (Qr.current = e === null || e.memoizedState === null ? Qp : Kp),
    (e = n(r, i)),
    Hn)
  ) {
    l = 0;
    do {
      if (((Hn = !1), (or = 0), 25 <= l)) throw Error(S(301));
      (l += 1),
        (q = X = null),
        (t.updateQueue = null),
        (Qr.current = Gp),
        (e = n(r, i));
    } while (Hn);
  }
  if (
    ((Qr.current = vi),
    (t = X !== null && X.next !== null),
    (Vt = 0),
    (q = X = H = null),
    (mi = !1),
    t)
  )
    throw Error(S(300));
  return e;
}
function ss() {
  var e = or !== 0;
  return (or = 0), e;
}
function He() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return q === null ? (H.memoizedState = q = e) : (q = q.next = e), q;
}
function Re() {
  if (X === null) {
    var e = H.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = X.next;
  var t = q === null ? H.memoizedState : q.next;
  if (t !== null) (q = t), (X = e);
  else {
    if (e === null) throw Error(S(310));
    (X = e),
      (e = {
        memoizedState: X.memoizedState,
        baseState: X.baseState,
        baseQueue: X.baseQueue,
        queue: X.queue,
        next: null,
      }),
      q === null ? (H.memoizedState = q = e) : (q = q.next = e);
  }
  return q;
}
function sr(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function xl(e) {
  var t = Re(),
    n = t.queue;
  if (n === null) throw Error(S(311));
  n.lastRenderedReducer = e;
  var r = X,
    i = r.baseQueue,
    l = n.pending;
  if (l !== null) {
    if (i !== null) {
      var o = i.next;
      (i.next = l.next), (l.next = o);
    }
    (r.baseQueue = i = l), (n.pending = null);
  }
  if (i !== null) {
    (l = i.next), (r = r.baseState);
    var s = (o = null),
      a = null,
      u = l;
    do {
      var m = u.lane;
      if ((Vt & m) === m)
        a !== null &&
          (a = a.next =
            {
              lane: 0,
              action: u.action,
              hasEagerState: u.hasEagerState,
              eagerState: u.eagerState,
              next: null,
            }),
          (r = u.hasEagerState ? u.eagerState : e(r, u.action));
      else {
        var p = {
          lane: m,
          action: u.action,
          hasEagerState: u.hasEagerState,
          eagerState: u.eagerState,
          next: null,
        };
        a === null ? ((s = a = p), (o = r)) : (a = a.next = p),
          (H.lanes |= m),
          (Ut |= m);
      }
      u = u.next;
    } while (u !== null && u !== l);
    a === null ? (o = r) : (a.next = s),
      $e(r, t.memoizedState) || (me = !0),
      (t.memoizedState = r),
      (t.baseState = o),
      (t.baseQueue = a),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    i = e;
    do (l = i.lane), (H.lanes |= l), (Ut |= l), (i = i.next);
    while (i !== e);
  } else i === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function wl(e) {
  var t = Re(),
    n = t.queue;
  if (n === null) throw Error(S(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    i = n.pending,
    l = t.memoizedState;
  if (i !== null) {
    n.pending = null;
    var o = (i = i.next);
    do (l = e(l, o.action)), (o = o.next);
    while (o !== i);
    $e(l, t.memoizedState) || (me = !0),
      (t.memoizedState = l),
      t.baseQueue === null && (t.baseState = l),
      (n.lastRenderedState = l);
  }
  return [l, r];
}
function _c() {}
function Oc(e, t) {
  var n = H,
    r = Re(),
    i = t(),
    l = !$e(r.memoizedState, i);
  if (
    (l && ((r.memoizedState = i), (me = !0)),
    (r = r.queue),
    as(zc.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || l || (q !== null && q.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      ar(9, Lc.bind(null, n, r, i, t), void 0, null),
      ee === null)
    )
      throw Error(S(349));
    Vt & 30 || Tc(n, t, i);
  }
  return i;
}
function Tc(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = H.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (H.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function Lc(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), Rc(t) && Mc(e);
}
function zc(e, t, n) {
  return n(function () {
    Rc(t) && Mc(e);
  });
}
function Rc(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !$e(e, n);
  } catch {
    return !0;
  }
}
function Mc(e) {
  var t = tt(e, 1);
  t !== null && Ae(t, e, 1, -1);
}
function va(e) {
  var t = He();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: sr,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = Wp.bind(null, H, e)),
    [t.memoizedState, e]
  );
}
function ar(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = H.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (H.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function Ic() {
  return Re().memoizedState;
}
function Kr(e, t, n, r) {
  var i = He();
  (H.flags |= e),
    (i.memoizedState = ar(1 | t, n, void 0, r === void 0 ? null : r));
}
function Vi(e, t, n, r) {
  var i = Re();
  r = r === void 0 ? null : r;
  var l = void 0;
  if (X !== null) {
    var o = X.memoizedState;
    if (((l = o.destroy), r !== null && ls(r, o.deps))) {
      i.memoizedState = ar(t, n, l, r);
      return;
    }
  }
  (H.flags |= e), (i.memoizedState = ar(1 | t, n, l, r));
}
function ga(e, t) {
  return Kr(8390656, 8, e, t);
}
function as(e, t) {
  return Vi(2048, 8, e, t);
}
function Dc(e, t) {
  return Vi(4, 2, e, t);
}
function Fc(e, t) {
  return Vi(4, 4, e, t);
}
function Vc(e, t) {
  if (typeof t == "function")
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function Uc(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), Vi(4, 4, Vc.bind(null, t, e), n)
  );
}
function us() {}
function Ac(e, t) {
  var n = Re();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && ls(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function $c(e, t) {
  var n = Re();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && ls(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function Bc(e, t, n) {
  return Vt & 21
    ? ($e(n, t) || ((n = Gu()), (H.lanes |= n), (Ut |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (me = !0)), (e.memoizedState = n));
}
function Bp(e, t) {
  var n = F;
  (F = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = yl.transition;
  yl.transition = {};
  try {
    e(!1), t();
  } finally {
    (F = n), (yl.transition = r);
  }
}
function Hc() {
  return Re().memoizedState;
}
function Hp(e, t, n) {
  var r = xt(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    Wc(e))
  )
    Qc(t, n);
  else if (((n = jc(e, t, n, r)), n !== null)) {
    var i = de();
    Ae(n, e, r, i), Kc(n, t, r);
  }
}
function Wp(e, t, n) {
  var r = xt(e),
    i = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (Wc(e)) Qc(t, i);
  else {
    var l = e.alternate;
    if (
      e.lanes === 0 &&
      (l === null || l.lanes === 0) &&
      ((l = t.lastRenderedReducer), l !== null)
    )
      try {
        var o = t.lastRenderedState,
          s = l(o, n);
        if (((i.hasEagerState = !0), (i.eagerState = s), $e(s, o))) {
          var a = t.interleaved;
          a === null
            ? ((i.next = i), es(t))
            : ((i.next = a.next), (a.next = i)),
            (t.interleaved = i);
          return;
        }
      } catch {
      } finally {
      }
    (n = jc(e, t, i, r)),
      n !== null && ((i = de()), Ae(n, e, r, i), Kc(n, t, r));
  }
}
function Wc(e) {
  var t = e.alternate;
  return e === H || (t !== null && t === H);
}
function Qc(e, t) {
  Hn = mi = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function Kc(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Ao(e, n);
  }
}
var vi = {
    readContext: ze,
    useCallback: oe,
    useContext: oe,
    useEffect: oe,
    useImperativeHandle: oe,
    useInsertionEffect: oe,
    useLayoutEffect: oe,
    useMemo: oe,
    useReducer: oe,
    useRef: oe,
    useState: oe,
    useDebugValue: oe,
    useDeferredValue: oe,
    useTransition: oe,
    useMutableSource: oe,
    useSyncExternalStore: oe,
    useId: oe,
    unstable_isNewReconciler: !1,
  },
  Qp = {
    readContext: ze,
    useCallback: function (e, t) {
      return (He().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: ze,
    useEffect: ga,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        Kr(4194308, 4, Vc.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return Kr(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return Kr(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = He();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = He();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = Hp.bind(null, H, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = He();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: va,
    useDebugValue: us,
    useDeferredValue: function (e) {
      return (He().memoizedState = e);
    },
    useTransition: function () {
      var e = va(!1),
        t = e[0];
      return (e = Bp.bind(null, e[1])), (He().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = H,
        i = He();
      if ($) {
        if (n === void 0) throw Error(S(407));
        n = n();
      } else {
        if (((n = t()), ee === null)) throw Error(S(349));
        Vt & 30 || Tc(r, t, n);
      }
      i.memoizedState = n;
      var l = { value: n, getSnapshot: t };
      return (
        (i.queue = l),
        ga(zc.bind(null, r, l, e), [e]),
        (r.flags |= 2048),
        ar(9, Lc.bind(null, r, l, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = He(),
        t = ee.identifierPrefix;
      if ($) {
        var n = Je,
          r = Ze;
        (n = (r & ~(1 << (32 - Ue(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = or++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = $p++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  Kp = {
    readContext: ze,
    useCallback: Ac,
    useContext: ze,
    useEffect: as,
    useImperativeHandle: Uc,
    useInsertionEffect: Dc,
    useLayoutEffect: Fc,
    useMemo: $c,
    useReducer: xl,
    useRef: Ic,
    useState: function () {
      return xl(sr);
    },
    useDebugValue: us,
    useDeferredValue: function (e) {
      var t = Re();
      return Bc(t, X.memoizedState, e);
    },
    useTransition: function () {
      var e = xl(sr)[0],
        t = Re().memoizedState;
      return [e, t];
    },
    useMutableSource: _c,
    useSyncExternalStore: Oc,
    useId: Hc,
    unstable_isNewReconciler: !1,
  },
  Gp = {
    readContext: ze,
    useCallback: Ac,
    useContext: ze,
    useEffect: as,
    useImperativeHandle: Uc,
    useInsertionEffect: Dc,
    useLayoutEffect: Fc,
    useMemo: $c,
    useReducer: wl,
    useRef: Ic,
    useState: function () {
      return wl(sr);
    },
    useDebugValue: us,
    useDeferredValue: function (e) {
      var t = Re();
      return X === null ? (t.memoizedState = e) : Bc(t, X.memoizedState, e);
    },
    useTransition: function () {
      var e = wl(sr)[0],
        t = Re().memoizedState;
      return [e, t];
    },
    useMutableSource: _c,
    useSyncExternalStore: Oc,
    useId: Hc,
    unstable_isNewReconciler: !1,
  };
function Ie(e, t) {
  if (e && e.defaultProps) {
    (t = W({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function io(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : W({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var Ui = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? Bt(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = de(),
      i = xt(e),
      l = qe(r, i);
    (l.payload = t),
      n != null && (l.callback = n),
      (t = gt(e, l, i)),
      t !== null && (Ae(t, e, i, r), Wr(t, e, i));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = de(),
      i = xt(e),
      l = qe(r, i);
    (l.tag = 1),
      (l.payload = t),
      n != null && (l.callback = n),
      (t = gt(e, l, i)),
      t !== null && (Ae(t, e, i, r), Wr(t, e, i));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = de(),
      r = xt(e),
      i = qe(n, r);
    (i.tag = 2),
      t != null && (i.callback = t),
      (t = gt(e, i, r)),
      t !== null && (Ae(t, e, r, n), Wr(t, e, r));
  },
};
function ya(e, t, n, r, i, l, o) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, l, o)
      : t.prototype && t.prototype.isPureReactComponent
      ? !er(n, r) || !er(i, l)
      : !0
  );
}
function Gc(e, t, n) {
  var r = !1,
    i = Et,
    l = t.contextType;
  return (
    typeof l == "object" && l !== null
      ? (l = ze(l))
      : ((i = ge(t) ? Dt : ue.current),
        (r = t.contextTypes),
        (l = (r = r != null) ? fn(e, i) : Et)),
    (t = new t(n, l)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = Ui),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = i),
      (e.__reactInternalMemoizedMaskedChildContext = l)),
    t
  );
}
function xa(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && Ui.enqueueReplaceState(t, t.state, null);
}
function lo(e, t, n, r) {
  var i = e.stateNode;
  (i.props = n), (i.state = e.memoizedState), (i.refs = {}), ts(e);
  var l = t.contextType;
  typeof l == "object" && l !== null
    ? (i.context = ze(l))
    : ((l = ge(t) ? Dt : ue.current), (i.context = fn(e, l))),
    (i.state = e.memoizedState),
    (l = t.getDerivedStateFromProps),
    typeof l == "function" && (io(e, t, l, n), (i.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof i.getSnapshotBeforeUpdate == "function" ||
      (typeof i.UNSAFE_componentWillMount != "function" &&
        typeof i.componentWillMount != "function") ||
      ((t = i.state),
      typeof i.componentWillMount == "function" && i.componentWillMount(),
      typeof i.UNSAFE_componentWillMount == "function" &&
        i.UNSAFE_componentWillMount(),
      t !== i.state && Ui.enqueueReplaceState(i, i.state, null),
      pi(e, n, i, r),
      (i.state = e.memoizedState)),
    typeof i.componentDidMount == "function" && (e.flags |= 4194308);
}
function vn(e, t) {
  try {
    var n = "",
      r = t;
    do (n += Sf(r)), (r = r.return);
    while (r);
    var i = n;
  } catch (l) {
    i =
      `
Error generating stack: ` +
      l.message +
      `
` +
      l.stack;
  }
  return { value: e, source: t, stack: i, digest: null };
}
function Sl(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function oo(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var Yp = typeof WeakMap == "function" ? WeakMap : Map;
function Yc(e, t, n) {
  (n = qe(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      yi || ((yi = !0), (go = r)), oo(e, t);
    }),
    n
  );
}
function Xc(e, t, n) {
  (n = qe(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var i = t.value;
    (n.payload = function () {
      return r(i);
    }),
      (n.callback = function () {
        oo(e, t);
      });
  }
  var l = e.stateNode;
  return (
    l !== null &&
      typeof l.componentDidCatch == "function" &&
      (n.callback = function () {
        oo(e, t),
          typeof r != "function" &&
            (yt === null ? (yt = new Set([this])) : yt.add(this));
        var o = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: o !== null ? o : "",
        });
      }),
    n
  );
}
function wa(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new Yp();
    var i = new Set();
    r.set(t, i);
  } else (i = r.get(t)), i === void 0 && ((i = new Set()), r.set(t, i));
  i.has(n) || (i.add(n), (e = ah.bind(null, e, t, n)), t.then(e, e));
}
function Sa(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function Ea(e, t, n, r, i) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = i), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = qe(-1, 1)), (t.tag = 2), gt(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var Xp = rt.ReactCurrentOwner,
  me = !1;
function ce(e, t, n, r) {
  t.child = e === null ? Cc(t, null, n, r) : hn(t, e.child, n, r);
}
function ka(e, t, n, r, i) {
  n = n.render;
  var l = t.ref;
  return (
    an(t, i),
    (r = os(e, t, n, r, l, i)),
    (n = ss()),
    e !== null && !me
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~i),
        nt(e, t, i))
      : ($ && n && Yo(t), (t.flags |= 1), ce(e, t, r, i), t.child)
  );
}
function Ca(e, t, n, r, i) {
  if (e === null) {
    var l = n.type;
    return typeof l == "function" &&
      !gs(l) &&
      l.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = l), Zc(e, t, l, r, i))
      : ((e = Zr(n.type, null, r, t, t.mode, i)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((l = e.child), !(e.lanes & i))) {
    var o = l.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : er), n(o, r) && e.ref === t.ref)
    )
      return nt(e, t, i);
  }
  return (
    (t.flags |= 1),
    (e = wt(l, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function Zc(e, t, n, r, i) {
  if (e !== null) {
    var l = e.memoizedProps;
    if (er(l, r) && e.ref === t.ref)
      if (((me = !1), (t.pendingProps = r = l), (e.lanes & i) !== 0))
        e.flags & 131072 && (me = !0);
      else return (t.lanes = e.lanes), nt(e, t, i);
  }
  return so(e, t, n, r, i);
}
function Jc(e, t, n) {
  var r = t.pendingProps,
    i = r.children,
    l = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        V(nn, we),
        (we |= n);
    else {
      if (!(n & 1073741824))
        return (
          (e = l !== null ? l.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          V(nn, we),
          (we |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = l !== null ? l.baseLanes : n),
        V(nn, we),
        (we |= r);
    }
  else
    l !== null ? ((r = l.baseLanes | n), (t.memoizedState = null)) : (r = n),
      V(nn, we),
      (we |= r);
  return ce(e, t, i, n), t.child;
}
function qc(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function so(e, t, n, r, i) {
  var l = ge(n) ? Dt : ue.current;
  return (
    (l = fn(t, l)),
    an(t, i),
    (n = os(e, t, n, r, l, i)),
    (r = ss()),
    e !== null && !me
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~i),
        nt(e, t, i))
      : ($ && r && Yo(t), (t.flags |= 1), ce(e, t, n, i), t.child)
  );
}
function ja(e, t, n, r, i) {
  if (ge(n)) {
    var l = !0;
    ai(t);
  } else l = !1;
  if ((an(t, i), t.stateNode === null))
    Gr(e, t), Gc(t, n, r), lo(t, n, r, i), (r = !0);
  else if (e === null) {
    var o = t.stateNode,
      s = t.memoizedProps;
    o.props = s;
    var a = o.context,
      u = n.contextType;
    typeof u == "object" && u !== null
      ? (u = ze(u))
      : ((u = ge(n) ? Dt : ue.current), (u = fn(t, u)));
    var m = n.getDerivedStateFromProps,
      p =
        typeof m == "function" ||
        typeof o.getSnapshotBeforeUpdate == "function";
    p ||
      (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
        typeof o.componentWillReceiveProps != "function") ||
      ((s !== r || a !== u) && xa(t, o, r, u)),
      (st = !1);
    var v = t.memoizedState;
    (o.state = v),
      pi(t, r, o, i),
      (a = t.memoizedState),
      s !== r || v !== a || ve.current || st
        ? (typeof m == "function" && (io(t, n, m, r), (a = t.memoizedState)),
          (s = st || ya(t, n, s, r, v, a, u))
            ? (p ||
                (typeof o.UNSAFE_componentWillMount != "function" &&
                  typeof o.componentWillMount != "function") ||
                (typeof o.componentWillMount == "function" &&
                  o.componentWillMount(),
                typeof o.UNSAFE_componentWillMount == "function" &&
                  o.UNSAFE_componentWillMount()),
              typeof o.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof o.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = a)),
          (o.props = r),
          (o.state = a),
          (o.context = u),
          (r = s))
        : (typeof o.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1));
  } else {
    (o = t.stateNode),
      Nc(e, t),
      (s = t.memoizedProps),
      (u = t.type === t.elementType ? s : Ie(t.type, s)),
      (o.props = u),
      (p = t.pendingProps),
      (v = o.context),
      (a = n.contextType),
      typeof a == "object" && a !== null
        ? (a = ze(a))
        : ((a = ge(n) ? Dt : ue.current), (a = fn(t, a)));
    var g = n.getDerivedStateFromProps;
    (m =
      typeof g == "function" ||
      typeof o.getSnapshotBeforeUpdate == "function") ||
      (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
        typeof o.componentWillReceiveProps != "function") ||
      ((s !== p || v !== a) && xa(t, o, r, a)),
      (st = !1),
      (v = t.memoizedState),
      (o.state = v),
      pi(t, r, o, i);
    var x = t.memoizedState;
    s !== p || v !== x || ve.current || st
      ? (typeof g == "function" && (io(t, n, g, r), (x = t.memoizedState)),
        (u = st || ya(t, n, u, r, v, x, a) || !1)
          ? (m ||
              (typeof o.UNSAFE_componentWillUpdate != "function" &&
                typeof o.componentWillUpdate != "function") ||
              (typeof o.componentWillUpdate == "function" &&
                o.componentWillUpdate(r, x, a),
              typeof o.UNSAFE_componentWillUpdate == "function" &&
                o.UNSAFE_componentWillUpdate(r, x, a)),
            typeof o.componentDidUpdate == "function" && (t.flags |= 4),
            typeof o.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof o.componentDidUpdate != "function" ||
              (s === e.memoizedProps && v === e.memoizedState) ||
              (t.flags |= 4),
            typeof o.getSnapshotBeforeUpdate != "function" ||
              (s === e.memoizedProps && v === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = x)),
        (o.props = r),
        (o.state = x),
        (o.context = a),
        (r = u))
      : (typeof o.componentDidUpdate != "function" ||
          (s === e.memoizedProps && v === e.memoizedState) ||
          (t.flags |= 4),
        typeof o.getSnapshotBeforeUpdate != "function" ||
          (s === e.memoizedProps && v === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return ao(e, t, n, r, l, i);
}
function ao(e, t, n, r, i, l) {
  qc(e, t);
  var o = (t.flags & 128) !== 0;
  if (!r && !o) return i && ca(t, n, !1), nt(e, t, l);
  (r = t.stateNode), (Xp.current = t);
  var s =
    o && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && o
      ? ((t.child = hn(t, e.child, null, l)), (t.child = hn(t, null, s, l)))
      : ce(e, t, s, l),
    (t.memoizedState = r.state),
    i && ca(t, n, !0),
    t.child
  );
}
function bc(e) {
  var t = e.stateNode;
  t.pendingContext
    ? ua(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && ua(e, t.context, !1),
    ns(e, t.containerInfo);
}
function Na(e, t, n, r, i) {
  return pn(), Zo(i), (t.flags |= 256), ce(e, t, n, r), t.child;
}
var uo = { dehydrated: null, treeContext: null, retryLane: 0 };
function co(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function ed(e, t, n) {
  var r = t.pendingProps,
    i = B.current,
    l = !1,
    o = (t.flags & 128) !== 0,
    s;
  if (
    ((s = o) ||
      (s = e !== null && e.memoizedState === null ? !1 : (i & 2) !== 0),
    s
      ? ((l = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (i |= 1),
    V(B, i & 1),
    e === null)
  )
    return (
      no(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((o = r.children),
          (e = r.fallback),
          l
            ? ((r = t.mode),
              (l = t.child),
              (o = { mode: "hidden", children: o }),
              !(r & 1) && l !== null
                ? ((l.childLanes = 0), (l.pendingProps = o))
                : (l = Bi(o, r, 0, null)),
              (e = It(e, r, n, null)),
              (l.return = t),
              (e.return = t),
              (l.sibling = e),
              (t.child = l),
              (t.child.memoizedState = co(n)),
              (t.memoizedState = uo),
              e)
            : cs(t, o))
    );
  if (((i = e.memoizedState), i !== null && ((s = i.dehydrated), s !== null)))
    return Zp(e, t, o, r, s, i, n);
  if (l) {
    (l = r.fallback), (o = t.mode), (i = e.child), (s = i.sibling);
    var a = { mode: "hidden", children: r.children };
    return (
      !(o & 1) && t.child !== i
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = a),
          (t.deletions = null))
        : ((r = wt(i, a)), (r.subtreeFlags = i.subtreeFlags & 14680064)),
      s !== null ? (l = wt(s, l)) : ((l = It(l, o, n, null)), (l.flags |= 2)),
      (l.return = t),
      (r.return = t),
      (r.sibling = l),
      (t.child = r),
      (r = l),
      (l = t.child),
      (o = e.child.memoizedState),
      (o =
        o === null
          ? co(n)
          : {
              baseLanes: o.baseLanes | n,
              cachePool: null,
              transitions: o.transitions,
            }),
      (l.memoizedState = o),
      (l.childLanes = e.childLanes & ~n),
      (t.memoizedState = uo),
      r
    );
  }
  return (
    (l = e.child),
    (e = l.sibling),
    (r = wt(l, { mode: "visible", children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function cs(e, t) {
  return (
    (t = Bi({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function zr(e, t, n, r) {
  return (
    r !== null && Zo(r),
    hn(t, e.child, null, n),
    (e = cs(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function Zp(e, t, n, r, i, l, o) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = Sl(Error(S(422)))), zr(e, t, o, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((l = r.fallback),
        (i = t.mode),
        (r = Bi({ mode: "visible", children: r.children }, i, 0, null)),
        (l = It(l, i, o, null)),
        (l.flags |= 2),
        (r.return = t),
        (l.return = t),
        (r.sibling = l),
        (t.child = r),
        t.mode & 1 && hn(t, e.child, null, o),
        (t.child.memoizedState = co(o)),
        (t.memoizedState = uo),
        l);
  if (!(t.mode & 1)) return zr(e, t, o, null);
  if (i.data === "$!") {
    if (((r = i.nextSibling && i.nextSibling.dataset), r)) var s = r.dgst;
    return (r = s), (l = Error(S(419))), (r = Sl(l, r, void 0)), zr(e, t, o, r);
  }
  if (((s = (o & e.childLanes) !== 0), me || s)) {
    if (((r = ee), r !== null)) {
      switch (o & -o) {
        case 4:
          i = 2;
          break;
        case 16:
          i = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          i = 32;
          break;
        case 536870912:
          i = 268435456;
          break;
        default:
          i = 0;
      }
      (i = i & (r.suspendedLanes | o) ? 0 : i),
        i !== 0 &&
          i !== l.retryLane &&
          ((l.retryLane = i), tt(e, i), Ae(r, e, i, -1));
    }
    return vs(), (r = Sl(Error(S(421)))), zr(e, t, o, r);
  }
  return i.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = uh.bind(null, e)),
      (i._reactRetry = t),
      null)
    : ((e = l.treeContext),
      (Se = vt(i.nextSibling)),
      (Ee = t),
      ($ = !0),
      (Ve = null),
      e !== null &&
        ((Pe[_e++] = Ze),
        (Pe[_e++] = Je),
        (Pe[_e++] = Ft),
        (Ze = e.id),
        (Je = e.overflow),
        (Ft = t)),
      (t = cs(t, r.children)),
      (t.flags |= 4096),
      t);
}
function Pa(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), ro(e.return, t, n);
}
function El(e, t, n, r, i) {
  var l = e.memoizedState;
  l === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: i,
      })
    : ((l.isBackwards = t),
      (l.rendering = null),
      (l.renderingStartTime = 0),
      (l.last = r),
      (l.tail = n),
      (l.tailMode = i));
}
function td(e, t, n) {
  var r = t.pendingProps,
    i = r.revealOrder,
    l = r.tail;
  if ((ce(e, t, r.children, n), (r = B.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && Pa(e, n, t);
        else if (e.tag === 19) Pa(e, n, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    r &= 1;
  }
  if ((V(B, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (i) {
      case "forwards":
        for (n = t.child, i = null; n !== null; )
          (e = n.alternate),
            e !== null && hi(e) === null && (i = n),
            (n = n.sibling);
        (n = i),
          n === null
            ? ((i = t.child), (t.child = null))
            : ((i = n.sibling), (n.sibling = null)),
          El(t, !1, i, n, l);
        break;
      case "backwards":
        for (n = null, i = t.child, t.child = null; i !== null; ) {
          if (((e = i.alternate), e !== null && hi(e) === null)) {
            t.child = i;
            break;
          }
          (e = i.sibling), (i.sibling = n), (n = i), (i = e);
        }
        El(t, !0, n, null, l);
        break;
      case "together":
        El(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function Gr(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function nt(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (Ut |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(S(153));
  if (t.child !== null) {
    for (
      e = t.child, n = wt(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = wt(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function Jp(e, t, n) {
  switch (t.tag) {
    case 3:
      bc(t), pn();
      break;
    case 5:
      Pc(t);
      break;
    case 1:
      ge(t.type) && ai(t);
      break;
    case 4:
      ns(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        i = t.memoizedProps.value;
      V(di, r._currentValue), (r._currentValue = i);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (V(B, B.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? ed(e, t, n)
          : (V(B, B.current & 1),
            (e = nt(e, t, n)),
            e !== null ? e.sibling : null);
      V(B, B.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return td(e, t, n);
        t.flags |= 128;
      }
      if (
        ((i = t.memoizedState),
        i !== null &&
          ((i.rendering = null), (i.tail = null), (i.lastEffect = null)),
        V(B, B.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), Jc(e, t, n);
  }
  return nt(e, t, n);
}
var nd, fo, rd, id;
nd = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
fo = function () {};
rd = function (e, t, n, r) {
  var i = e.memoizedProps;
  if (i !== r) {
    (e = t.stateNode), Rt(Ge.current);
    var l = null;
    switch (n) {
      case "input":
        (i = Rl(e, i)), (r = Rl(e, r)), (l = []);
        break;
      case "select":
        (i = W({}, i, { value: void 0 })),
          (r = W({}, r, { value: void 0 })),
          (l = []);
        break;
      case "textarea":
        (i = Dl(e, i)), (r = Dl(e, r)), (l = []);
        break;
      default:
        typeof i.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = oi);
    }
    Vl(n, r);
    var o;
    n = null;
    for (u in i)
      if (!r.hasOwnProperty(u) && i.hasOwnProperty(u) && i[u] != null)
        if (u === "style") {
          var s = i[u];
          for (o in s) s.hasOwnProperty(o) && (n || (n = {}), (n[o] = ""));
        } else
          u !== "dangerouslySetInnerHTML" &&
            u !== "children" &&
            u !== "suppressContentEditableWarning" &&
            u !== "suppressHydrationWarning" &&
            u !== "autoFocus" &&
            (Gn.hasOwnProperty(u)
              ? l || (l = [])
              : (l = l || []).push(u, null));
    for (u in r) {
      var a = r[u];
      if (
        ((s = i != null ? i[u] : void 0),
        r.hasOwnProperty(u) && a !== s && (a != null || s != null))
      )
        if (u === "style")
          if (s) {
            for (o in s)
              !s.hasOwnProperty(o) ||
                (a && a.hasOwnProperty(o)) ||
                (n || (n = {}), (n[o] = ""));
            for (o in a)
              a.hasOwnProperty(o) &&
                s[o] !== a[o] &&
                (n || (n = {}), (n[o] = a[o]));
          } else n || (l || (l = []), l.push(u, n)), (n = a);
        else
          u === "dangerouslySetInnerHTML"
            ? ((a = a ? a.__html : void 0),
              (s = s ? s.__html : void 0),
              a != null && s !== a && (l = l || []).push(u, a))
            : u === "children"
            ? (typeof a != "string" && typeof a != "number") ||
              (l = l || []).push(u, "" + a)
            : u !== "suppressContentEditableWarning" &&
              u !== "suppressHydrationWarning" &&
              (Gn.hasOwnProperty(u)
                ? (a != null && u === "onScroll" && U("scroll", e),
                  l || s === a || (l = []))
                : (l = l || []).push(u, a));
    }
    n && (l = l || []).push("style", n);
    var u = l;
    (t.updateQueue = u) && (t.flags |= 4);
  }
};
id = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function Tn(e, t) {
  if (!$)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), (n = n.sibling);
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function se(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var i = e.child; i !== null; )
      (n |= i.lanes | i.childLanes),
        (r |= i.subtreeFlags & 14680064),
        (r |= i.flags & 14680064),
        (i.return = e),
        (i = i.sibling);
  else
    for (i = e.child; i !== null; )
      (n |= i.lanes | i.childLanes),
        (r |= i.subtreeFlags),
        (r |= i.flags),
        (i.return = e),
        (i = i.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function qp(e, t, n) {
  var r = t.pendingProps;
  switch ((Xo(t), t.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return se(t), null;
    case 1:
      return ge(t.type) && si(), se(t), null;
    case 3:
      return (
        (r = t.stateNode),
        mn(),
        A(ve),
        A(ue),
        is(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (Tr(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), Ve !== null && (wo(Ve), (Ve = null)))),
        fo(e, t),
        se(t),
        null
      );
    case 5:
      rs(t);
      var i = Rt(lr.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        rd(e, t, n, r, i),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(S(166));
          return se(t), null;
        }
        if (((e = Rt(Ge.current)), Tr(t))) {
          (r = t.stateNode), (n = t.type);
          var l = t.memoizedProps;
          switch (((r[We] = t), (r[rr] = l), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              U("cancel", r), U("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              U("load", r);
              break;
            case "video":
            case "audio":
              for (i = 0; i < In.length; i++) U(In[i], r);
              break;
            case "source":
              U("error", r);
              break;
            case "img":
            case "image":
            case "link":
              U("error", r), U("load", r);
              break;
            case "details":
              U("toggle", r);
              break;
            case "input":
              Ds(r, l), U("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!l.multiple }),
                U("invalid", r);
              break;
            case "textarea":
              Vs(r, l), U("invalid", r);
          }
          Vl(n, l), (i = null);
          for (var o in l)
            if (l.hasOwnProperty(o)) {
              var s = l[o];
              o === "children"
                ? typeof s == "string"
                  ? r.textContent !== s &&
                    (l.suppressHydrationWarning !== !0 &&
                      Or(r.textContent, s, e),
                    (i = ["children", s]))
                  : typeof s == "number" &&
                    r.textContent !== "" + s &&
                    (l.suppressHydrationWarning !== !0 &&
                      Or(r.textContent, s, e),
                    (i = ["children", "" + s]))
                : Gn.hasOwnProperty(o) &&
                  s != null &&
                  o === "onScroll" &&
                  U("scroll", r);
            }
          switch (n) {
            case "input":
              Sr(r), Fs(r, l, !0);
              break;
            case "textarea":
              Sr(r), Us(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof l.onClick == "function" && (r.onclick = oi);
          }
          (r = i), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (o = i.nodeType === 9 ? i : i.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = zu(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = o.createElement("div")),
                  (e.innerHTML = "<script></script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                ? (e = o.createElement(n, { is: r.is }))
                : ((e = o.createElement(n)),
                  n === "select" &&
                    ((o = e),
                    r.multiple
                      ? (o.multiple = !0)
                      : r.size && (o.size = r.size)))
              : (e = o.createElementNS(e, n)),
            (e[We] = t),
            (e[rr] = r),
            nd(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((o = Ul(n, r)), n)) {
              case "dialog":
                U("cancel", e), U("close", e), (i = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                U("load", e), (i = r);
                break;
              case "video":
              case "audio":
                for (i = 0; i < In.length; i++) U(In[i], e);
                i = r;
                break;
              case "source":
                U("error", e), (i = r);
                break;
              case "img":
              case "image":
              case "link":
                U("error", e), U("load", e), (i = r);
                break;
              case "details":
                U("toggle", e), (i = r);
                break;
              case "input":
                Ds(e, r), (i = Rl(e, r)), U("invalid", e);
                break;
              case "option":
                i = r;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (i = W({}, r, { value: void 0 })),
                  U("invalid", e);
                break;
              case "textarea":
                Vs(e, r), (i = Dl(e, r)), U("invalid", e);
                break;
              default:
                i = r;
            }
            Vl(n, i), (s = i);
            for (l in s)
              if (s.hasOwnProperty(l)) {
                var a = s[l];
                l === "style"
                  ? Iu(e, a)
                  : l === "dangerouslySetInnerHTML"
                  ? ((a = a ? a.__html : void 0), a != null && Ru(e, a))
                  : l === "children"
                  ? typeof a == "string"
                    ? (n !== "textarea" || a !== "") && Yn(e, a)
                    : typeof a == "number" && Yn(e, "" + a)
                  : l !== "suppressContentEditableWarning" &&
                    l !== "suppressHydrationWarning" &&
                    l !== "autoFocus" &&
                    (Gn.hasOwnProperty(l)
                      ? a != null && l === "onScroll" && U("scroll", e)
                      : a != null && Mo(e, l, a, o));
              }
            switch (n) {
              case "input":
                Sr(e), Fs(e, r, !1);
                break;
              case "textarea":
                Sr(e), Us(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + St(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  (l = r.value),
                  l != null
                    ? rn(e, !!r.multiple, l, !1)
                    : r.defaultValue != null &&
                      rn(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof i.onClick == "function" && (e.onclick = oi);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return se(t), null;
    case 6:
      if (e && t.stateNode != null) id(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(S(166));
        if (((n = Rt(lr.current)), Rt(Ge.current), Tr(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[We] = t),
            (l = r.nodeValue !== n) && ((e = Ee), e !== null))
          )
            switch (e.tag) {
              case 3:
                Or(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  Or(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          l && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[We] = t),
            (t.stateNode = r);
      }
      return se(t), null;
    case 13:
      if (
        (A(B),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if ($ && Se !== null && t.mode & 1 && !(t.flags & 128))
          Ec(), pn(), (t.flags |= 98560), (l = !1);
        else if (((l = Tr(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!l) throw Error(S(318));
            if (
              ((l = t.memoizedState),
              (l = l !== null ? l.dehydrated : null),
              !l)
            )
              throw Error(S(317));
            l[We] = t;
          } else
            pn(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          se(t), (l = !1);
        } else Ve !== null && (wo(Ve), (Ve = null)), (l = !0);
        if (!l) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || B.current & 1 ? Z === 0 && (Z = 3) : vs())),
          t.updateQueue !== null && (t.flags |= 4),
          se(t),
          null);
    case 4:
      return (
        mn(), fo(e, t), e === null && tr(t.stateNode.containerInfo), se(t), null
      );
    case 10:
      return bo(t.type._context), se(t), null;
    case 17:
      return ge(t.type) && si(), se(t), null;
    case 19:
      if ((A(B), (l = t.memoizedState), l === null)) return se(t), null;
      if (((r = (t.flags & 128) !== 0), (o = l.rendering), o === null))
        if (r) Tn(l, !1);
        else {
          if (Z !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((o = hi(e)), o !== null)) {
                for (
                  t.flags |= 128,
                    Tn(l, !1),
                    r = o.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (l = n),
                    (e = r),
                    (l.flags &= 14680066),
                    (o = l.alternate),
                    o === null
                      ? ((l.childLanes = 0),
                        (l.lanes = e),
                        (l.child = null),
                        (l.subtreeFlags = 0),
                        (l.memoizedProps = null),
                        (l.memoizedState = null),
                        (l.updateQueue = null),
                        (l.dependencies = null),
                        (l.stateNode = null))
                      : ((l.childLanes = o.childLanes),
                        (l.lanes = o.lanes),
                        (l.child = o.child),
                        (l.subtreeFlags = 0),
                        (l.deletions = null),
                        (l.memoizedProps = o.memoizedProps),
                        (l.memoizedState = o.memoizedState),
                        (l.updateQueue = o.updateQueue),
                        (l.type = o.type),
                        (e = o.dependencies),
                        (l.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return V(B, (B.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          l.tail !== null &&
            G() > gn &&
            ((t.flags |= 128), (r = !0), Tn(l, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = hi(o)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              Tn(l, !0),
              l.tail === null && l.tailMode === "hidden" && !o.alternate && !$)
            )
              return se(t), null;
          } else
            2 * G() - l.renderingStartTime > gn &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), Tn(l, !1), (t.lanes = 4194304));
        l.isBackwards
          ? ((o.sibling = t.child), (t.child = o))
          : ((n = l.last),
            n !== null ? (n.sibling = o) : (t.child = o),
            (l.last = o));
      }
      return l.tail !== null
        ? ((t = l.tail),
          (l.rendering = t),
          (l.tail = t.sibling),
          (l.renderingStartTime = G()),
          (t.sibling = null),
          (n = B.current),
          V(B, r ? (n & 1) | 2 : n & 1),
          t)
        : (se(t), null);
    case 22:
    case 23:
      return (
        ms(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? we & 1073741824 && (se(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : se(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(S(156, t.tag));
}
function bp(e, t) {
  switch ((Xo(t), t.tag)) {
    case 1:
      return (
        ge(t.type) && si(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        mn(),
        A(ve),
        A(ue),
        is(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return rs(t), null;
    case 13:
      if ((A(B), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
        if (t.alternate === null) throw Error(S(340));
        pn();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return A(B), null;
    case 4:
      return mn(), null;
    case 10:
      return bo(t.type._context), null;
    case 22:
    case 23:
      return ms(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Rr = !1,
  ae = !1,
  eh = typeof WeakSet == "function" ? WeakSet : Set,
  N = null;
function tn(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        Q(e, t, r);
      }
    else n.current = null;
}
function po(e, t, n) {
  try {
    n();
  } catch (r) {
    Q(e, t, r);
  }
}
var _a = !1;
function th(e, t) {
  if (((Xl = ri), (e = uc()), Go(e))) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var i = r.anchorOffset,
            l = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, l.nodeType;
          } catch {
            n = null;
            break e;
          }
          var o = 0,
            s = -1,
            a = -1,
            u = 0,
            m = 0,
            p = e,
            v = null;
          t: for (;;) {
            for (
              var g;
              p !== n || (i !== 0 && p.nodeType !== 3) || (s = o + i),
                p !== l || (r !== 0 && p.nodeType !== 3) || (a = o + r),
                p.nodeType === 3 && (o += p.nodeValue.length),
                (g = p.firstChild) !== null;

            )
              (v = p), (p = g);
            for (;;) {
              if (p === e) break t;
              if (
                (v === n && ++u === i && (s = o),
                v === l && ++m === r && (a = o),
                (g = p.nextSibling) !== null)
              )
                break;
              (p = v), (v = p.parentNode);
            }
            p = g;
          }
          n = s === -1 || a === -1 ? null : { start: s, end: a };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (Zl = { focusedElem: e, selectionRange: n }, ri = !1, N = t; N !== null; )
    if (((t = N), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (N = e);
    else
      for (; N !== null; ) {
        t = N;
        try {
          var x = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (x !== null) {
                  var w = x.memoizedProps,
                    E = x.memoizedState,
                    f = t.stateNode,
                    d = f.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? w : Ie(t.type, w),
                      E
                    );
                  f.__reactInternalSnapshotBeforeUpdate = d;
                }
                break;
              case 3:
                var h = t.stateNode.containerInfo;
                h.nodeType === 1
                  ? (h.textContent = "")
                  : h.nodeType === 9 &&
                    h.documentElement &&
                    h.removeChild(h.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(S(163));
            }
        } catch (y) {
          Q(t, t.return, y);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (N = e);
          break;
        }
        N = t.return;
      }
  return (x = _a), (_a = !1), x;
}
function Wn(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var i = (r = r.next);
    do {
      if ((i.tag & e) === e) {
        var l = i.destroy;
        (i.destroy = void 0), l !== void 0 && po(t, n, l);
      }
      i = i.next;
    } while (i !== r);
  }
}
function Ai(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function ho(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : (t.current = e);
  }
}
function ld(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), ld(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[We], delete t[rr], delete t[bl], delete t[Fp], delete t[Vp])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function od(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Oa(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || od(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function mo(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = oi));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (mo(e, t, n), e = e.sibling; e !== null; ) mo(e, t, n), (e = e.sibling);
}
function vo(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (vo(e, t, n), e = e.sibling; e !== null; ) vo(e, t, n), (e = e.sibling);
}
var te = null,
  Fe = !1;
function lt(e, t, n) {
  for (n = n.child; n !== null; ) sd(e, t, n), (n = n.sibling);
}
function sd(e, t, n) {
  if (Ke && typeof Ke.onCommitFiberUnmount == "function")
    try {
      Ke.onCommitFiberUnmount(zi, n);
    } catch {}
  switch (n.tag) {
    case 5:
      ae || tn(n, t);
    case 6:
      var r = te,
        i = Fe;
      (te = null),
        lt(e, t, n),
        (te = r),
        (Fe = i),
        te !== null &&
          (Fe
            ? ((e = te),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : te.removeChild(n.stateNode));
      break;
    case 18:
      te !== null &&
        (Fe
          ? ((e = te),
            (n = n.stateNode),
            e.nodeType === 8
              ? ml(e.parentNode, n)
              : e.nodeType === 1 && ml(e, n),
            qn(e))
          : ml(te, n.stateNode));
      break;
    case 4:
      (r = te),
        (i = Fe),
        (te = n.stateNode.containerInfo),
        (Fe = !0),
        lt(e, t, n),
        (te = r),
        (Fe = i);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !ae &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        i = r = r.next;
        do {
          var l = i,
            o = l.destroy;
          (l = l.tag),
            o !== void 0 && (l & 2 || l & 4) && po(n, t, o),
            (i = i.next);
        } while (i !== r);
      }
      lt(e, t, n);
      break;
    case 1:
      if (
        !ae &&
        (tn(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (s) {
          Q(n, t, s);
        }
      lt(e, t, n);
      break;
    case 21:
      lt(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((ae = (r = ae) || n.memoizedState !== null), lt(e, t, n), (ae = r))
        : lt(e, t, n);
      break;
    default:
      lt(e, t, n);
  }
}
function Ta(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new eh()),
      t.forEach(function (r) {
        var i = ch.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(i, i));
      });
  }
}
function Me(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var i = n[r];
      try {
        var l = e,
          o = t,
          s = o;
        e: for (; s !== null; ) {
          switch (s.tag) {
            case 5:
              (te = s.stateNode), (Fe = !1);
              break e;
            case 3:
              (te = s.stateNode.containerInfo), (Fe = !0);
              break e;
            case 4:
              (te = s.stateNode.containerInfo), (Fe = !0);
              break e;
          }
          s = s.return;
        }
        if (te === null) throw Error(S(160));
        sd(l, o, i), (te = null), (Fe = !1);
        var a = i.alternate;
        a !== null && (a.return = null), (i.return = null);
      } catch (u) {
        Q(i, t, u);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) ad(t, e), (t = t.sibling);
}
function ad(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((Me(t, e), Be(e), r & 4)) {
        try {
          Wn(3, e, e.return), Ai(3, e);
        } catch (w) {
          Q(e, e.return, w);
        }
        try {
          Wn(5, e, e.return);
        } catch (w) {
          Q(e, e.return, w);
        }
      }
      break;
    case 1:
      Me(t, e), Be(e), r & 512 && n !== null && tn(n, n.return);
      break;
    case 5:
      if (
        (Me(t, e),
        Be(e),
        r & 512 && n !== null && tn(n, n.return),
        e.flags & 32)
      ) {
        var i = e.stateNode;
        try {
          Yn(i, "");
        } catch (w) {
          Q(e, e.return, w);
        }
      }
      if (r & 4 && ((i = e.stateNode), i != null)) {
        var l = e.memoizedProps,
          o = n !== null ? n.memoizedProps : l,
          s = e.type,
          a = e.updateQueue;
        if (((e.updateQueue = null), a !== null))
          try {
            s === "input" && l.type === "radio" && l.name != null && Tu(i, l),
              Ul(s, o);
            var u = Ul(s, l);
            for (o = 0; o < a.length; o += 2) {
              var m = a[o],
                p = a[o + 1];
              m === "style"
                ? Iu(i, p)
                : m === "dangerouslySetInnerHTML"
                ? Ru(i, p)
                : m === "children"
                ? Yn(i, p)
                : Mo(i, m, p, u);
            }
            switch (s) {
              case "input":
                Ml(i, l);
                break;
              case "textarea":
                Lu(i, l);
                break;
              case "select":
                var v = i._wrapperState.wasMultiple;
                i._wrapperState.wasMultiple = !!l.multiple;
                var g = l.value;
                g != null
                  ? rn(i, !!l.multiple, g, !1)
                  : v !== !!l.multiple &&
                    (l.defaultValue != null
                      ? rn(i, !!l.multiple, l.defaultValue, !0)
                      : rn(i, !!l.multiple, l.multiple ? [] : "", !1));
            }
            i[rr] = l;
          } catch (w) {
            Q(e, e.return, w);
          }
      }
      break;
    case 6:
      if ((Me(t, e), Be(e), r & 4)) {
        if (e.stateNode === null) throw Error(S(162));
        (i = e.stateNode), (l = e.memoizedProps);
        try {
          i.nodeValue = l;
        } catch (w) {
          Q(e, e.return, w);
        }
      }
      break;
    case 3:
      if (
        (Me(t, e), Be(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          qn(t.containerInfo);
        } catch (w) {
          Q(e, e.return, w);
        }
      break;
    case 4:
      Me(t, e), Be(e);
      break;
    case 13:
      Me(t, e),
        Be(e),
        (i = e.child),
        i.flags & 8192 &&
          ((l = i.memoizedState !== null),
          (i.stateNode.isHidden = l),
          !l ||
            (i.alternate !== null && i.alternate.memoizedState !== null) ||
            (ps = G())),
        r & 4 && Ta(e);
      break;
    case 22:
      if (
        ((m = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((ae = (u = ae) || m), Me(t, e), (ae = u)) : Me(t, e),
        Be(e),
        r & 8192)
      ) {
        if (
          ((u = e.memoizedState !== null),
          (e.stateNode.isHidden = u) && !m && e.mode & 1)
        )
          for (N = e, m = e.child; m !== null; ) {
            for (p = N = m; N !== null; ) {
              switch (((v = N), (g = v.child), v.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Wn(4, v, v.return);
                  break;
                case 1:
                  tn(v, v.return);
                  var x = v.stateNode;
                  if (typeof x.componentWillUnmount == "function") {
                    (r = v), (n = v.return);
                    try {
                      (t = r),
                        (x.props = t.memoizedProps),
                        (x.state = t.memoizedState),
                        x.componentWillUnmount();
                    } catch (w) {
                      Q(r, n, w);
                    }
                  }
                  break;
                case 5:
                  tn(v, v.return);
                  break;
                case 22:
                  if (v.memoizedState !== null) {
                    za(p);
                    continue;
                  }
              }
              g !== null ? ((g.return = v), (N = g)) : za(p);
            }
            m = m.sibling;
          }
        e: for (m = null, p = e; ; ) {
          if (p.tag === 5) {
            if (m === null) {
              m = p;
              try {
                (i = p.stateNode),
                  u
                    ? ((l = i.style),
                      typeof l.setProperty == "function"
                        ? l.setProperty("display", "none", "important")
                        : (l.display = "none"))
                    : ((s = p.stateNode),
                      (a = p.memoizedProps.style),
                      (o =
                        a != null && a.hasOwnProperty("display")
                          ? a.display
                          : null),
                      (s.style.display = Mu("display", o)));
              } catch (w) {
                Q(e, e.return, w);
              }
            }
          } else if (p.tag === 6) {
            if (m === null)
              try {
                p.stateNode.nodeValue = u ? "" : p.memoizedProps;
              } catch (w) {
                Q(e, e.return, w);
              }
          } else if (
            ((p.tag !== 22 && p.tag !== 23) ||
              p.memoizedState === null ||
              p === e) &&
            p.child !== null
          ) {
            (p.child.return = p), (p = p.child);
            continue;
          }
          if (p === e) break e;
          for (; p.sibling === null; ) {
            if (p.return === null || p.return === e) break e;
            m === p && (m = null), (p = p.return);
          }
          m === p && (m = null), (p.sibling.return = p.return), (p = p.sibling);
        }
      }
      break;
    case 19:
      Me(t, e), Be(e), r & 4 && Ta(e);
      break;
    case 21:
      break;
    default:
      Me(t, e), Be(e);
  }
}
function Be(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (od(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(S(160));
      }
      switch (r.tag) {
        case 5:
          var i = r.stateNode;
          r.flags & 32 && (Yn(i, ""), (r.flags &= -33));
          var l = Oa(e);
          vo(e, l, i);
          break;
        case 3:
        case 4:
          var o = r.stateNode.containerInfo,
            s = Oa(e);
          mo(e, s, o);
          break;
        default:
          throw Error(S(161));
      }
    } catch (a) {
      Q(e, e.return, a);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function nh(e, t, n) {
  (N = e), ud(e);
}
function ud(e, t, n) {
  for (var r = (e.mode & 1) !== 0; N !== null; ) {
    var i = N,
      l = i.child;
    if (i.tag === 22 && r) {
      var o = i.memoizedState !== null || Rr;
      if (!o) {
        var s = i.alternate,
          a = (s !== null && s.memoizedState !== null) || ae;
        s = Rr;
        var u = ae;
        if (((Rr = o), (ae = a) && !u))
          for (N = i; N !== null; )
            (o = N),
              (a = o.child),
              o.tag === 22 && o.memoizedState !== null
                ? Ra(i)
                : a !== null
                ? ((a.return = o), (N = a))
                : Ra(i);
        for (; l !== null; ) (N = l), ud(l), (l = l.sibling);
        (N = i), (Rr = s), (ae = u);
      }
      La(e);
    } else
      i.subtreeFlags & 8772 && l !== null ? ((l.return = i), (N = l)) : La(e);
  }
}
function La(e) {
  for (; N !== null; ) {
    var t = N;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              ae || Ai(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !ae)
                if (n === null) r.componentDidMount();
                else {
                  var i =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : Ie(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    i,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var l = t.updateQueue;
              l !== null && ma(t, l, r);
              break;
            case 3:
              var o = t.updateQueue;
              if (o !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                ma(t, o, n);
              }
              break;
            case 5:
              var s = t.stateNode;
              if (n === null && t.flags & 4) {
                n = s;
                var a = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    a.autoFocus && n.focus();
                    break;
                  case "img":
                    a.src && (n.src = a.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var u = t.alternate;
                if (u !== null) {
                  var m = u.memoizedState;
                  if (m !== null) {
                    var p = m.dehydrated;
                    p !== null && qn(p);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(S(163));
          }
        ae || (t.flags & 512 && ho(t));
      } catch (v) {
        Q(t, t.return, v);
      }
    }
    if (t === e) {
      N = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (N = n);
      break;
    }
    N = t.return;
  }
}
function za(e) {
  for (; N !== null; ) {
    var t = N;
    if (t === e) {
      N = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (N = n);
      break;
    }
    N = t.return;
  }
}
function Ra(e) {
  for (; N !== null; ) {
    var t = N;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            Ai(4, t);
          } catch (a) {
            Q(t, n, a);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var i = t.return;
            try {
              r.componentDidMount();
            } catch (a) {
              Q(t, i, a);
            }
          }
          var l = t.return;
          try {
            ho(t);
          } catch (a) {
            Q(t, l, a);
          }
          break;
        case 5:
          var o = t.return;
          try {
            ho(t);
          } catch (a) {
            Q(t, o, a);
          }
      }
    } catch (a) {
      Q(t, t.return, a);
    }
    if (t === e) {
      N = null;
      break;
    }
    var s = t.sibling;
    if (s !== null) {
      (s.return = t.return), (N = s);
      break;
    }
    N = t.return;
  }
}
var rh = Math.ceil,
  gi = rt.ReactCurrentDispatcher,
  ds = rt.ReactCurrentOwner,
  Le = rt.ReactCurrentBatchConfig,
  I = 0,
  ee = null,
  Y = null,
  ne = 0,
  we = 0,
  nn = Ct(0),
  Z = 0,
  ur = null,
  Ut = 0,
  $i = 0,
  fs = 0,
  Qn = null,
  he = null,
  ps = 0,
  gn = 1 / 0,
  Ye = null,
  yi = !1,
  go = null,
  yt = null,
  Mr = !1,
  dt = null,
  xi = 0,
  Kn = 0,
  yo = null,
  Yr = -1,
  Xr = 0;
function de() {
  return I & 6 ? G() : Yr !== -1 ? Yr : (Yr = G());
}
function xt(e) {
  return e.mode & 1
    ? I & 2 && ne !== 0
      ? ne & -ne
      : Ap.transition !== null
      ? (Xr === 0 && (Xr = Gu()), Xr)
      : ((e = F),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : ec(e.type))),
        e)
    : 1;
}
function Ae(e, t, n, r) {
  if (50 < Kn) throw ((Kn = 0), (yo = null), Error(S(185)));
  fr(e, n, r),
    (!(I & 2) || e !== ee) &&
      (e === ee && (!(I & 2) && ($i |= n), Z === 4 && ut(e, ne)),
      ye(e, r),
      n === 1 && I === 0 && !(t.mode & 1) && ((gn = G() + 500), Fi && jt()));
}
function ye(e, t) {
  var n = e.callbackNode;
  Af(e, t);
  var r = ni(e, e === ee ? ne : 0);
  if (r === 0)
    n !== null && Bs(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && Bs(n), t === 1))
      e.tag === 0 ? Up(Ma.bind(null, e)) : xc(Ma.bind(null, e)),
        Ip(function () {
          !(I & 6) && jt();
        }),
        (n = null);
    else {
      switch (Yu(r)) {
        case 1:
          n = Uo;
          break;
        case 4:
          n = Qu;
          break;
        case 16:
          n = ti;
          break;
        case 536870912:
          n = Ku;
          break;
        default:
          n = ti;
      }
      n = gd(n, cd.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function cd(e, t) {
  if (((Yr = -1), (Xr = 0), I & 6)) throw Error(S(327));
  var n = e.callbackNode;
  if (un() && e.callbackNode !== n) return null;
  var r = ni(e, e === ee ? ne : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = wi(e, r);
  else {
    t = r;
    var i = I;
    I |= 2;
    var l = fd();
    (ee !== e || ne !== t) && ((Ye = null), (gn = G() + 500), Mt(e, t));
    do
      try {
        oh();
        break;
      } catch (s) {
        dd(e, s);
      }
    while (!0);
    qo(),
      (gi.current = l),
      (I = i),
      Y !== null ? (t = 0) : ((ee = null), (ne = 0), (t = Z));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((i = Wl(e)), i !== 0 && ((r = i), (t = xo(e, i)))), t === 1)
    )
      throw ((n = ur), Mt(e, 0), ut(e, r), ye(e, G()), n);
    if (t === 6) ut(e, r);
    else {
      if (
        ((i = e.current.alternate),
        !(r & 30) &&
          !ih(i) &&
          ((t = wi(e, r)),
          t === 2 && ((l = Wl(e)), l !== 0 && ((r = l), (t = xo(e, l)))),
          t === 1))
      )
        throw ((n = ur), Mt(e, 0), ut(e, r), ye(e, G()), n);
      switch (((e.finishedWork = i), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(S(345));
        case 2:
          Ot(e, he, Ye);
          break;
        case 3:
          if (
            (ut(e, r), (r & 130023424) === r && ((t = ps + 500 - G()), 10 < t))
          ) {
            if (ni(e, 0) !== 0) break;
            if (((i = e.suspendedLanes), (i & r) !== r)) {
              de(), (e.pingedLanes |= e.suspendedLanes & i);
              break;
            }
            e.timeoutHandle = ql(Ot.bind(null, e, he, Ye), t);
            break;
          }
          Ot(e, he, Ye);
          break;
        case 4:
          if ((ut(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, i = -1; 0 < r; ) {
            var o = 31 - Ue(r);
            (l = 1 << o), (o = t[o]), o > i && (i = o), (r &= ~l);
          }
          if (
            ((r = i),
            (r = G() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                ? 480
                : 1080 > r
                ? 1080
                : 1920 > r
                ? 1920
                : 3e3 > r
                ? 3e3
                : 4320 > r
                ? 4320
                : 1960 * rh(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = ql(Ot.bind(null, e, he, Ye), r);
            break;
          }
          Ot(e, he, Ye);
          break;
        case 5:
          Ot(e, he, Ye);
          break;
        default:
          throw Error(S(329));
      }
    }
  }
  return ye(e, G()), e.callbackNode === n ? cd.bind(null, e) : null;
}
function xo(e, t) {
  var n = Qn;
  return (
    e.current.memoizedState.isDehydrated && (Mt(e, t).flags |= 256),
    (e = wi(e, t)),
    e !== 2 && ((t = he), (he = n), t !== null && wo(t)),
    e
  );
}
function wo(e) {
  he === null ? (he = e) : he.push.apply(he, e);
}
function ih(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var i = n[r],
            l = i.getSnapshot;
          i = i.value;
          try {
            if (!$e(l(), i)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      (n.return = t), (t = n);
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return !0;
}
function ut(e, t) {
  for (
    t &= ~fs,
      t &= ~$i,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - Ue(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function Ma(e) {
  if (I & 6) throw Error(S(327));
  un();
  var t = ni(e, 0);
  if (!(t & 1)) return ye(e, G()), null;
  var n = wi(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = Wl(e);
    r !== 0 && ((t = r), (n = xo(e, r)));
  }
  if (n === 1) throw ((n = ur), Mt(e, 0), ut(e, t), ye(e, G()), n);
  if (n === 6) throw Error(S(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    Ot(e, he, Ye),
    ye(e, G()),
    null
  );
}
function hs(e, t) {
  var n = I;
  I |= 1;
  try {
    return e(t);
  } finally {
    (I = n), I === 0 && ((gn = G() + 500), Fi && jt());
  }
}
function At(e) {
  dt !== null && dt.tag === 0 && !(I & 6) && un();
  var t = I;
  I |= 1;
  var n = Le.transition,
    r = F;
  try {
    if (((Le.transition = null), (F = 1), e)) return e();
  } finally {
    (F = r), (Le.transition = n), (I = t), !(I & 6) && jt();
  }
}
function ms() {
  (we = nn.current), A(nn);
}
function Mt(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), Mp(n)), Y !== null))
    for (n = Y.return; n !== null; ) {
      var r = n;
      switch ((Xo(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && si();
          break;
        case 3:
          mn(), A(ve), A(ue), is();
          break;
        case 5:
          rs(r);
          break;
        case 4:
          mn();
          break;
        case 13:
          A(B);
          break;
        case 19:
          A(B);
          break;
        case 10:
          bo(r.type._context);
          break;
        case 22:
        case 23:
          ms();
      }
      n = n.return;
    }
  if (
    ((ee = e),
    (Y = e = wt(e.current, null)),
    (ne = we = t),
    (Z = 0),
    (ur = null),
    (fs = $i = Ut = 0),
    (he = Qn = null),
    zt !== null)
  ) {
    for (t = 0; t < zt.length; t++)
      if (((n = zt[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var i = r.next,
          l = n.pending;
        if (l !== null) {
          var o = l.next;
          (l.next = i), (r.next = o);
        }
        n.pending = r;
      }
    zt = null;
  }
  return e;
}
function dd(e, t) {
  do {
    var n = Y;
    try {
      if ((qo(), (Qr.current = vi), mi)) {
        for (var r = H.memoizedState; r !== null; ) {
          var i = r.queue;
          i !== null && (i.pending = null), (r = r.next);
        }
        mi = !1;
      }
      if (
        ((Vt = 0),
        (q = X = H = null),
        (Hn = !1),
        (or = 0),
        (ds.current = null),
        n === null || n.return === null)
      ) {
        (Z = 1), (ur = t), (Y = null);
        break;
      }
      e: {
        var l = e,
          o = n.return,
          s = n,
          a = t;
        if (
          ((t = ne),
          (s.flags |= 32768),
          a !== null && typeof a == "object" && typeof a.then == "function")
        ) {
          var u = a,
            m = s,
            p = m.tag;
          if (!(m.mode & 1) && (p === 0 || p === 11 || p === 15)) {
            var v = m.alternate;
            v
              ? ((m.updateQueue = v.updateQueue),
                (m.memoizedState = v.memoizedState),
                (m.lanes = v.lanes))
              : ((m.updateQueue = null), (m.memoizedState = null));
          }
          var g = Sa(o);
          if (g !== null) {
            (g.flags &= -257),
              Ea(g, o, s, l, t),
              g.mode & 1 && wa(l, u, t),
              (t = g),
              (a = u);
            var x = t.updateQueue;
            if (x === null) {
              var w = new Set();
              w.add(a), (t.updateQueue = w);
            } else x.add(a);
            break e;
          } else {
            if (!(t & 1)) {
              wa(l, u, t), vs();
              break e;
            }
            a = Error(S(426));
          }
        } else if ($ && s.mode & 1) {
          var E = Sa(o);
          if (E !== null) {
            !(E.flags & 65536) && (E.flags |= 256),
              Ea(E, o, s, l, t),
              Zo(vn(a, s));
            break e;
          }
        }
        (l = a = vn(a, s)),
          Z !== 4 && (Z = 2),
          Qn === null ? (Qn = [l]) : Qn.push(l),
          (l = o);
        do {
          switch (l.tag) {
            case 3:
              (l.flags |= 65536), (t &= -t), (l.lanes |= t);
              var f = Yc(l, a, t);
              ha(l, f);
              break e;
            case 1:
              s = a;
              var d = l.type,
                h = l.stateNode;
              if (
                !(l.flags & 128) &&
                (typeof d.getDerivedStateFromError == "function" ||
                  (h !== null &&
                    typeof h.componentDidCatch == "function" &&
                    (yt === null || !yt.has(h))))
              ) {
                (l.flags |= 65536), (t &= -t), (l.lanes |= t);
                var y = Xc(l, s, t);
                ha(l, y);
                break e;
              }
          }
          l = l.return;
        } while (l !== null);
      }
      hd(n);
    } catch (k) {
      (t = k), Y === n && n !== null && (Y = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function fd() {
  var e = gi.current;
  return (gi.current = vi), e === null ? vi : e;
}
function vs() {
  (Z === 0 || Z === 3 || Z === 2) && (Z = 4),
    ee === null || (!(Ut & 268435455) && !($i & 268435455)) || ut(ee, ne);
}
function wi(e, t) {
  var n = I;
  I |= 2;
  var r = fd();
  (ee !== e || ne !== t) && ((Ye = null), Mt(e, t));
  do
    try {
      lh();
      break;
    } catch (i) {
      dd(e, i);
    }
  while (!0);
  if ((qo(), (I = n), (gi.current = r), Y !== null)) throw Error(S(261));
  return (ee = null), (ne = 0), Z;
}
function lh() {
  for (; Y !== null; ) pd(Y);
}
function oh() {
  for (; Y !== null && !Lf(); ) pd(Y);
}
function pd(e) {
  var t = vd(e.alternate, e, we);
  (e.memoizedProps = e.pendingProps),
    t === null ? hd(e) : (Y = t),
    (ds.current = null);
}
function hd(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = bp(n, t)), n !== null)) {
        (n.flags &= 32767), (Y = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (Z = 6), (Y = null);
        return;
      }
    } else if (((n = qp(n, t, we)), n !== null)) {
      Y = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      Y = t;
      return;
    }
    Y = t = e;
  } while (t !== null);
  Z === 0 && (Z = 5);
}
function Ot(e, t, n) {
  var r = F,
    i = Le.transition;
  try {
    (Le.transition = null), (F = 1), sh(e, t, n, r);
  } finally {
    (Le.transition = i), (F = r);
  }
  return null;
}
function sh(e, t, n, r) {
  do un();
  while (dt !== null);
  if (I & 6) throw Error(S(327));
  n = e.finishedWork;
  var i = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(S(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var l = n.lanes | n.childLanes;
  if (
    ($f(e, l),
    e === ee && ((Y = ee = null), (ne = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      Mr ||
      ((Mr = !0),
      gd(ti, function () {
        return un(), null;
      })),
    (l = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || l)
  ) {
    (l = Le.transition), (Le.transition = null);
    var o = F;
    F = 1;
    var s = I;
    (I |= 4),
      (ds.current = null),
      th(e, n),
      ad(n, e),
      Pp(Zl),
      (ri = !!Xl),
      (Zl = Xl = null),
      (e.current = n),
      nh(n),
      zf(),
      (I = s),
      (F = o),
      (Le.transition = l);
  } else e.current = n;
  if (
    (Mr && ((Mr = !1), (dt = e), (xi = i)),
    (l = e.pendingLanes),
    l === 0 && (yt = null),
    If(n.stateNode),
    ye(e, G()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (i = t[n]), r(i.value, { componentStack: i.stack, digest: i.digest });
  if (yi) throw ((yi = !1), (e = go), (go = null), e);
  return (
    xi & 1 && e.tag !== 0 && un(),
    (l = e.pendingLanes),
    l & 1 ? (e === yo ? Kn++ : ((Kn = 0), (yo = e))) : (Kn = 0),
    jt(),
    null
  );
}
function un() {
  if (dt !== null) {
    var e = Yu(xi),
      t = Le.transition,
      n = F;
    try {
      if (((Le.transition = null), (F = 16 > e ? 16 : e), dt === null))
        var r = !1;
      else {
        if (((e = dt), (dt = null), (xi = 0), I & 6)) throw Error(S(331));
        var i = I;
        for (I |= 4, N = e.current; N !== null; ) {
          var l = N,
            o = l.child;
          if (N.flags & 16) {
            var s = l.deletions;
            if (s !== null) {
              for (var a = 0; a < s.length; a++) {
                var u = s[a];
                for (N = u; N !== null; ) {
                  var m = N;
                  switch (m.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Wn(8, m, l);
                  }
                  var p = m.child;
                  if (p !== null) (p.return = m), (N = p);
                  else
                    for (; N !== null; ) {
                      m = N;
                      var v = m.sibling,
                        g = m.return;
                      if ((ld(m), m === u)) {
                        N = null;
                        break;
                      }
                      if (v !== null) {
                        (v.return = g), (N = v);
                        break;
                      }
                      N = g;
                    }
                }
              }
              var x = l.alternate;
              if (x !== null) {
                var w = x.child;
                if (w !== null) {
                  x.child = null;
                  do {
                    var E = w.sibling;
                    (w.sibling = null), (w = E);
                  } while (w !== null);
                }
              }
              N = l;
            }
          }
          if (l.subtreeFlags & 2064 && o !== null) (o.return = l), (N = o);
          else
            e: for (; N !== null; ) {
              if (((l = N), l.flags & 2048))
                switch (l.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Wn(9, l, l.return);
                }
              var f = l.sibling;
              if (f !== null) {
                (f.return = l.return), (N = f);
                break e;
              }
              N = l.return;
            }
        }
        var d = e.current;
        for (N = d; N !== null; ) {
          o = N;
          var h = o.child;
          if (o.subtreeFlags & 2064 && h !== null) (h.return = o), (N = h);
          else
            e: for (o = d; N !== null; ) {
              if (((s = N), s.flags & 2048))
                try {
                  switch (s.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Ai(9, s);
                  }
                } catch (k) {
                  Q(s, s.return, k);
                }
              if (s === o) {
                N = null;
                break e;
              }
              var y = s.sibling;
              if (y !== null) {
                (y.return = s.return), (N = y);
                break e;
              }
              N = s.return;
            }
        }
        if (
          ((I = i), jt(), Ke && typeof Ke.onPostCommitFiberRoot == "function")
        )
          try {
            Ke.onPostCommitFiberRoot(zi, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (F = n), (Le.transition = t);
    }
  }
  return !1;
}
function Ia(e, t, n) {
  (t = vn(n, t)),
    (t = Yc(e, t, 1)),
    (e = gt(e, t, 1)),
    (t = de()),
    e !== null && (fr(e, 1, t), ye(e, t));
}
function Q(e, t, n) {
  if (e.tag === 3) Ia(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        Ia(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (yt === null || !yt.has(r)))
        ) {
          (e = vn(n, e)),
            (e = Xc(t, e, 1)),
            (t = gt(t, e, 1)),
            (e = de()),
            t !== null && (fr(t, 1, e), ye(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function ah(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = de()),
    (e.pingedLanes |= e.suspendedLanes & n),
    ee === e &&
      (ne & n) === n &&
      (Z === 4 || (Z === 3 && (ne & 130023424) === ne && 500 > G() - ps)
        ? Mt(e, 0)
        : (fs |= n)),
    ye(e, t);
}
function md(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = Cr), (Cr <<= 1), !(Cr & 130023424) && (Cr = 4194304))
      : (t = 1));
  var n = de();
  (e = tt(e, t)), e !== null && (fr(e, t, n), ye(e, n));
}
function uh(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), md(e, n);
}
function ch(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        i = e.memoizedState;
      i !== null && (n = i.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(S(314));
  }
  r !== null && r.delete(t), md(e, n);
}
var vd;
vd = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || ve.current) me = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (me = !1), Jp(e, t, n);
      me = !!(e.flags & 131072);
    }
  else (me = !1), $ && t.flags & 1048576 && wc(t, ci, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      Gr(e, t), (e = t.pendingProps);
      var i = fn(t, ue.current);
      an(t, n), (i = os(null, t, r, e, i, n));
      var l = ss();
      return (
        (t.flags |= 1),
        typeof i == "object" &&
        i !== null &&
        typeof i.render == "function" &&
        i.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            ge(r) ? ((l = !0), ai(t)) : (l = !1),
            (t.memoizedState =
              i.state !== null && i.state !== void 0 ? i.state : null),
            ts(t),
            (i.updater = Ui),
            (t.stateNode = i),
            (i._reactInternals = t),
            lo(t, r, e, n),
            (t = ao(null, t, r, !0, l, n)))
          : ((t.tag = 0), $ && l && Yo(t), ce(null, t, i, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (Gr(e, t),
          (e = t.pendingProps),
          (i = r._init),
          (r = i(r._payload)),
          (t.type = r),
          (i = t.tag = fh(r)),
          (e = Ie(r, e)),
          i)
        ) {
          case 0:
            t = so(null, t, r, e, n);
            break e;
          case 1:
            t = ja(null, t, r, e, n);
            break e;
          case 11:
            t = ka(null, t, r, e, n);
            break e;
          case 14:
            t = Ca(null, t, r, Ie(r.type, e), n);
            break e;
        }
        throw Error(S(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : Ie(r, i)),
        so(e, t, r, i, n)
      );
    case 1:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : Ie(r, i)),
        ja(e, t, r, i, n)
      );
    case 3:
      e: {
        if ((bc(t), e === null)) throw Error(S(387));
        (r = t.pendingProps),
          (l = t.memoizedState),
          (i = l.element),
          Nc(e, t),
          pi(t, r, null, n);
        var o = t.memoizedState;
        if (((r = o.element), l.isDehydrated))
          if (
            ((l = {
              element: r,
              isDehydrated: !1,
              cache: o.cache,
              pendingSuspenseBoundaries: o.pendingSuspenseBoundaries,
              transitions: o.transitions,
            }),
            (t.updateQueue.baseState = l),
            (t.memoizedState = l),
            t.flags & 256)
          ) {
            (i = vn(Error(S(423)), t)), (t = Na(e, t, r, n, i));
            break e;
          } else if (r !== i) {
            (i = vn(Error(S(424)), t)), (t = Na(e, t, r, n, i));
            break e;
          } else
            for (
              Se = vt(t.stateNode.containerInfo.firstChild),
                Ee = t,
                $ = !0,
                Ve = null,
                n = Cc(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((pn(), r === i)) {
            t = nt(e, t, n);
            break e;
          }
          ce(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        Pc(t),
        e === null && no(t),
        (r = t.type),
        (i = t.pendingProps),
        (l = e !== null ? e.memoizedProps : null),
        (o = i.children),
        Jl(r, i) ? (o = null) : l !== null && Jl(r, l) && (t.flags |= 32),
        qc(e, t),
        ce(e, t, o, n),
        t.child
      );
    case 6:
      return e === null && no(t), null;
    case 13:
      return ed(e, t, n);
    case 4:
      return (
        ns(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = hn(t, null, r, n)) : ce(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : Ie(r, i)),
        ka(e, t, r, i, n)
      );
    case 7:
      return ce(e, t, t.pendingProps, n), t.child;
    case 8:
      return ce(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return ce(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (i = t.pendingProps),
          (l = t.memoizedProps),
          (o = i.value),
          V(di, r._currentValue),
          (r._currentValue = o),
          l !== null)
        )
          if ($e(l.value, o)) {
            if (l.children === i.children && !ve.current) {
              t = nt(e, t, n);
              break e;
            }
          } else
            for (l = t.child, l !== null && (l.return = t); l !== null; ) {
              var s = l.dependencies;
              if (s !== null) {
                o = l.child;
                for (var a = s.firstContext; a !== null; ) {
                  if (a.context === r) {
                    if (l.tag === 1) {
                      (a = qe(-1, n & -n)), (a.tag = 2);
                      var u = l.updateQueue;
                      if (u !== null) {
                        u = u.shared;
                        var m = u.pending;
                        m === null
                          ? (a.next = a)
                          : ((a.next = m.next), (m.next = a)),
                          (u.pending = a);
                      }
                    }
                    (l.lanes |= n),
                      (a = l.alternate),
                      a !== null && (a.lanes |= n),
                      ro(l.return, n, t),
                      (s.lanes |= n);
                    break;
                  }
                  a = a.next;
                }
              } else if (l.tag === 10) o = l.type === t.type ? null : l.child;
              else if (l.tag === 18) {
                if (((o = l.return), o === null)) throw Error(S(341));
                (o.lanes |= n),
                  (s = o.alternate),
                  s !== null && (s.lanes |= n),
                  ro(o, n, t),
                  (o = l.sibling);
              } else o = l.child;
              if (o !== null) o.return = l;
              else
                for (o = l; o !== null; ) {
                  if (o === t) {
                    o = null;
                    break;
                  }
                  if (((l = o.sibling), l !== null)) {
                    (l.return = o.return), (o = l);
                    break;
                  }
                  o = o.return;
                }
              l = o;
            }
        ce(e, t, i.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (i = t.type),
        (r = t.pendingProps.children),
        an(t, n),
        (i = ze(i)),
        (r = r(i)),
        (t.flags |= 1),
        ce(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (i = Ie(r, t.pendingProps)),
        (i = Ie(r.type, i)),
        Ca(e, t, r, i, n)
      );
    case 15:
      return Zc(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : Ie(r, i)),
        Gr(e, t),
        (t.tag = 1),
        ge(r) ? ((e = !0), ai(t)) : (e = !1),
        an(t, n),
        Gc(t, r, i),
        lo(t, r, i, n),
        ao(null, t, r, !0, e, n)
      );
    case 19:
      return td(e, t, n);
    case 22:
      return Jc(e, t, n);
  }
  throw Error(S(156, t.tag));
};
function gd(e, t) {
  return Wu(e, t);
}
function dh(e, t, n, r) {
  (this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function Te(e, t, n, r) {
  return new dh(e, t, n, r);
}
function gs(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function fh(e) {
  if (typeof e == "function") return gs(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === Do)) return 11;
    if (e === Fo) return 14;
  }
  return 2;
}
function wt(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = Te(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function Zr(e, t, n, r, i, l) {
  var o = 2;
  if (((r = e), typeof e == "function")) gs(e) && (o = 1);
  else if (typeof e == "string") o = 5;
  else
    e: switch (e) {
      case Kt:
        return It(n.children, i, l, t);
      case Io:
        (o = 8), (i |= 8);
        break;
      case Ol:
        return (
          (e = Te(12, n, t, i | 2)), (e.elementType = Ol), (e.lanes = l), e
        );
      case Tl:
        return (e = Te(13, n, t, i)), (e.elementType = Tl), (e.lanes = l), e;
      case Ll:
        return (e = Te(19, n, t, i)), (e.elementType = Ll), (e.lanes = l), e;
      case Pu:
        return Bi(n, i, l, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case ju:
              o = 10;
              break e;
            case Nu:
              o = 9;
              break e;
            case Do:
              o = 11;
              break e;
            case Fo:
              o = 14;
              break e;
            case ot:
              (o = 16), (r = null);
              break e;
          }
        throw Error(S(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = Te(o, n, t, i)), (t.elementType = e), (t.type = r), (t.lanes = l), t
  );
}
function It(e, t, n, r) {
  return (e = Te(7, e, r, t)), (e.lanes = n), e;
}
function Bi(e, t, n, r) {
  return (
    (e = Te(22, e, r, t)),
    (e.elementType = Pu),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function kl(e, t, n) {
  return (e = Te(6, e, null, t)), (e.lanes = n), e;
}
function Cl(e, t, n) {
  return (
    (t = Te(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function ph(e, t, n, r, i) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = il(0)),
    (this.expirationTimes = il(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = il(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = i),
    (this.mutableSourceEagerHydrationData = null);
}
function ys(e, t, n, r, i, l, o, s, a) {
  return (
    (e = new ph(e, t, n, s, a)),
    t === 1 ? ((t = 1), l === !0 && (t |= 8)) : (t = 0),
    (l = Te(3, null, null, t)),
    (e.current = l),
    (l.stateNode = e),
    (l.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    ts(l),
    e
  );
}
function hh(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: Qt,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function yd(e) {
  if (!e) return Et;
  e = e._reactInternals;
  e: {
    if (Bt(e) !== e || e.tag !== 1) throw Error(S(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (ge(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(S(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (ge(n)) return yc(e, n, t);
  }
  return t;
}
function xd(e, t, n, r, i, l, o, s, a) {
  return (
    (e = ys(n, r, !0, e, i, l, o, s, a)),
    (e.context = yd(null)),
    (n = e.current),
    (r = de()),
    (i = xt(n)),
    (l = qe(r, i)),
    (l.callback = t ?? null),
    gt(n, l, i),
    (e.current.lanes = i),
    fr(e, i, r),
    ye(e, r),
    e
  );
}
function Hi(e, t, n, r) {
  var i = t.current,
    l = de(),
    o = xt(i);
  return (
    (n = yd(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = qe(l, o)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = gt(i, t, o)),
    e !== null && (Ae(e, i, o, l), Wr(e, i, o)),
    o
  );
}
function Si(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function Da(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function xs(e, t) {
  Da(e, t), (e = e.alternate) && Da(e, t);
}
function mh() {
  return null;
}
var wd =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function ws(e) {
  this._internalRoot = e;
}
Wi.prototype.render = ws.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(S(409));
  Hi(e, t, null, null);
};
Wi.prototype.unmount = ws.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    At(function () {
      Hi(null, e, null, null);
    }),
      (t[et] = null);
  }
};
function Wi(e) {
  this._internalRoot = e;
}
Wi.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = Ju();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < at.length && t !== 0 && t < at[n].priority; n++);
    at.splice(n, 0, e), n === 0 && bu(e);
  }
};
function Ss(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function Qi(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function Fa() {}
function vh(e, t, n, r, i) {
  if (i) {
    if (typeof r == "function") {
      var l = r;
      r = function () {
        var u = Si(o);
        l.call(u);
      };
    }
    var o = xd(t, r, e, 0, null, !1, !1, "", Fa);
    return (
      (e._reactRootContainer = o),
      (e[et] = o.current),
      tr(e.nodeType === 8 ? e.parentNode : e),
      At(),
      o
    );
  }
  for (; (i = e.lastChild); ) e.removeChild(i);
  if (typeof r == "function") {
    var s = r;
    r = function () {
      var u = Si(a);
      s.call(u);
    };
  }
  var a = ys(e, 0, !1, null, null, !1, !1, "", Fa);
  return (
    (e._reactRootContainer = a),
    (e[et] = a.current),
    tr(e.nodeType === 8 ? e.parentNode : e),
    At(function () {
      Hi(t, a, n, r);
    }),
    a
  );
}
function Ki(e, t, n, r, i) {
  var l = n._reactRootContainer;
  if (l) {
    var o = l;
    if (typeof i == "function") {
      var s = i;
      i = function () {
        var a = Si(o);
        s.call(a);
      };
    }
    Hi(t, o, e, i);
  } else o = vh(n, t, e, i, r);
  return Si(o);
}
Xu = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Mn(t.pendingLanes);
        n !== 0 &&
          (Ao(t, n | 1), ye(t, G()), !(I & 6) && ((gn = G() + 500), jt()));
      }
      break;
    case 13:
      At(function () {
        var r = tt(e, 1);
        if (r !== null) {
          var i = de();
          Ae(r, e, 1, i);
        }
      }),
        xs(e, 1);
  }
};
$o = function (e) {
  if (e.tag === 13) {
    var t = tt(e, 134217728);
    if (t !== null) {
      var n = de();
      Ae(t, e, 134217728, n);
    }
    xs(e, 134217728);
  }
};
Zu = function (e) {
  if (e.tag === 13) {
    var t = xt(e),
      n = tt(e, t);
    if (n !== null) {
      var r = de();
      Ae(n, e, t, r);
    }
    xs(e, t);
  }
};
Ju = function () {
  return F;
};
qu = function (e, t) {
  var n = F;
  try {
    return (F = e), t();
  } finally {
    F = n;
  }
};
$l = function (e, t, n) {
  switch (t) {
    case "input":
      if ((Ml(e, n), (t = n.name), n.type === "radio" && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var i = Di(r);
            if (!i) throw Error(S(90));
            Ou(r), Ml(r, i);
          }
        }
      }
      break;
    case "textarea":
      Lu(e, n);
      break;
    case "select":
      (t = n.value), t != null && rn(e, !!n.multiple, t, !1);
  }
};
Vu = hs;
Uu = At;
var gh = { usingClientEntryPoint: !1, Events: [hr, Zt, Di, Du, Fu, hs] },
  Ln = {
    findFiberByHostInstance: Lt,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom",
  },
  yh = {
    bundleType: Ln.bundleType,
    version: Ln.version,
    rendererPackageName: Ln.rendererPackageName,
    rendererConfig: Ln.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: rt.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = Bu(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: Ln.findFiberByHostInstance || mh,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Ir = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Ir.isDisabled && Ir.supportsFiber)
    try {
      (zi = Ir.inject(yh)), (Ke = Ir);
    } catch {}
}
Ce.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = gh;
Ce.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Ss(t)) throw Error(S(200));
  return hh(e, t, null, n);
};
Ce.createRoot = function (e, t) {
  if (!Ss(e)) throw Error(S(299));
  var n = !1,
    r = "",
    i = wd;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (i = t.onRecoverableError)),
    (t = ys(e, 1, !1, null, null, n, !1, r, i)),
    (e[et] = t.current),
    tr(e.nodeType === 8 ? e.parentNode : e),
    new ws(t)
  );
};
Ce.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(S(188))
      : ((e = Object.keys(e).join(",")), Error(S(268, e)));
  return (e = Bu(t)), (e = e === null ? null : e.stateNode), e;
};
Ce.flushSync = function (e) {
  return At(e);
};
Ce.hydrate = function (e, t, n) {
  if (!Qi(t)) throw Error(S(200));
  return Ki(null, e, t, !0, n);
};
Ce.hydrateRoot = function (e, t, n) {
  if (!Ss(e)) throw Error(S(405));
  var r = (n != null && n.hydratedSources) || null,
    i = !1,
    l = "",
    o = wd;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (i = !0),
      n.identifierPrefix !== void 0 && (l = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (o = n.onRecoverableError)),
    (t = xd(t, null, e, 1, n ?? null, i, !1, l, o)),
    (e[et] = t.current),
    tr(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (i = n._getVersion),
        (i = i(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, i])
          : t.mutableSourceEagerHydrationData.push(n, i);
  return new Wi(t);
};
Ce.render = function (e, t, n) {
  if (!Qi(t)) throw Error(S(200));
  return Ki(null, e, t, !1, n);
};
Ce.unmountComponentAtNode = function (e) {
  if (!Qi(e)) throw Error(S(40));
  return e._reactRootContainer
    ? (At(function () {
        Ki(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[et] = null);
        });
      }),
      !0)
    : !1;
};
Ce.unstable_batchedUpdates = hs;
Ce.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!Qi(n)) throw Error(S(200));
  if (e == null || e._reactInternals === void 0) throw Error(S(38));
  return Ki(e, t, n, !1, r);
};
Ce.version = "18.3.1-next-f1338f8080-20240426";
function Sd() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Sd);
    } catch (e) {
      console.error(e);
    }
}
Sd(), (Su.exports = Ce);
var Ed = Su.exports;
const Dn = Ti(Ed);
var kd,
  Va = Ed;
(kd = Va.createRoot), Va.hydrateRoot;
var Cd = {
    color: void 0,
    size: void 0,
    className: void 0,
    style: void 0,
    attr: void 0,
  },
  Ua = D.createContext && D.createContext(Cd),
  xh = ["attr", "size", "title"];
function wh(e, t) {
  if (e == null) return {};
  var n = Sh(e, t),
    r,
    i;
  if (Object.getOwnPropertySymbols) {
    var l = Object.getOwnPropertySymbols(e);
    for (i = 0; i < l.length; i++)
      (r = l[i]),
        !(t.indexOf(r) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(e, r) &&
          (n[r] = e[r]);
  }
  return n;
}
function Sh(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if (Object.prototype.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) >= 0) continue;
      n[r] = e[r];
    }
  return n;
}
function Ei() {
  return (
    (Ei = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Ei.apply(this, arguments)
  );
}
function Aa(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t &&
      (r = r.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      n.push.apply(n, r);
  }
  return n;
}
function ki(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Aa(Object(n), !0).forEach(function (r) {
          Eh(e, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
      : Aa(Object(n)).forEach(function (r) {
          Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
        });
  }
  return e;
}
function Eh(e, t, n) {
  return (
    (t = kh(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
function kh(e) {
  var t = Ch(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function Ch(e, t) {
  if (typeof e != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || "default");
    if (typeof r != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function jd(e) {
  return (
    e &&
    e.map((t, n) => D.createElement(t.tag, ki({ key: n }, t.attr), jd(t.child)))
  );
}
function ie(e) {
  return (t) =>
    D.createElement(jh, Ei({ attr: ki({}, e.attr) }, t), jd(e.child));
}
function jh(e) {
  var t = (n) => {
    var { attr: r, size: i, title: l } = e,
      o = wh(e, xh),
      s = i || n.size || "1em",
      a;
    return (
      n.className && (a = n.className),
      e.className && (a = (a ? a + " " : "") + e.className),
      D.createElement(
        "svg",
        Ei(
          { stroke: "currentColor", fill: "currentColor", strokeWidth: "0" },
          n.attr,
          r,
          o,
          {
            className: a,
            style: ki(ki({ color: e.color || n.color }, n.style), e.style),
            height: s,
            width: s,
            xmlns: "http://www.w3.org/2000/svg",
          }
        ),
        l && D.createElement("title", null, l),
        e.children
      )
    );
  };
  return Ua !== void 0
    ? D.createElement(Ua.Consumer, null, (n) => t(n))
    : t(Cd);
}
function Nh(e) {
  return ie({
    tag: "svg",
    attr: { viewBox: "0 0 448 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-96 55.2C54 332.9 0 401.3 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7c0-81-54-149.4-128-171.1V362c27.6 7.1 48 32.2 48 62v40c0 8.8-7.2 16-16 16H336c-8.8 0-16-7.2-16-16s7.2-16 16-16V424c0-17.7-14.3-32-32-32s-32 14.3-32 32v24c8.8 0 16 7.2 16 16s-7.2 16-16 16H256c-8.8 0-16-7.2-16-16V424c0-29.8 20.4-54.9 48-62V304.9c-6-.6-12.1-.9-18.3-.9H178.3c-6.2 0-12.3 .3-18.3 .9v65.4c23.1 6.9 40 28.3 40 53.7c0 30.9-25.1 56-56 56s-56-25.1-56-56c0-25.4 16.9-46.8 40-53.7V311.2zM144 448a24 24 0 1 0 0-48 24 24 0 1 0 0 48z",
        },
        child: [],
      },
    ],
  })(e);
}
function Ph(e) {
  return ie({
    tag: "svg",
    attr: { viewBox: "0 0 512 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M294.1 256L167 129c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.3 34 0L345 239c9.1 9.1 9.3 23.7.7 33.1L201.1 417c-4.7 4.7-10.9 7-17 7s-12.3-2.3-17-7c-9.4-9.4-9.4-24.6 0-33.9l127-127.1z",
        },
        child: [],
      },
    ],
  })(e);
}
const _h = "/assets/hero_banner1-CfLeZrMe.jpg",
  Oh = "/assets/hero_banner2-hy_42XTy.jpg",
  Th = "/assets/hero_banner3-Bk-iq7si.jpg",
  Lh = "/assets/hero_banner4-BsaMfrgo.jpg",
  $a = [_h, Oh, Th, Lh];
function zh() {
  const [e, t] = O.useState(0);
  return (
    O.useEffect(() => {
      const n = setInterval(() => {
        t((r) => (r + 1) % $a.length);
      }, 5e3);
      return () => clearInterval(n);
    }, []),
    c.jsxs("div", {
      className: "hero-container",
      children: [
        c.jsxs("div", {
          className: "hero-content",
          children: [
            c.jsx("h1", { children: "Dr Abdelsattar Ahmed Nasr" }),
            c.jsxs("div", {
              className: "paragraph",
              children: [
                c.jsx("div", { className: "line" }),
                c.jsx("p", {
                  children: "Interventional Cardiovascular Specialist",
                }),
              ],
            }),
          ],
        }),
        c.jsx("div", {
          className: "hero-image",
          children: $a.map((n, r) =>
            c.jsx(
              "img",
              {
                src: n,
                alt: `Hero banner ${r + 1}`,
                style: {
                  opacity: r === e ? 1 : 0,
                  transition: "opacity 0.5s ease-in-out",
                },
              },
              r
            )
          ),
        }),
        c.jsx("div", {
          className: "overlay-boxes",
          children: [1, 2, 3].map((n) =>
            c.jsxs(
              "div",
              {
                className: `box ${n === 2 ? "b2" : ""}`,
                children: [
                  c.jsxs("div", {
                    className: "box-title",
                    children: [
                      c.jsx(Nh, { className: "box-icon" }),
                      c.jsx("h2", { children: "Title" }),
                    ],
                  }),
                  c.jsx("p", {
                    children:
                      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere, corporis beatae. Unde a quas iste qui vitae eligendi sequi laudantium.",
                  }),
                  c.jsxs("div", {
                    className: "box-btn",
                    children: [
                      c.jsx("a", { href: "#", children: "More Info" }),
                      c.jsx("button", {
                        className: "btn-arrow",
                        children: c.jsx(Ph, {}),
                      }),
                    ],
                  }),
                ],
              },
              n
            )
          ),
        }),
      ],
    })
  );
}
const Rh = "/assets/1-ClIapiWk.png",
  Mh = "/assets/2-j-1BVSIa.png",
  Ih = "/assets/3-yOlPfQlU.png",
  Dh = "/assets/4-dBLtwRBm.png",
  Fh = "/assets/5-BhdjnFC3.png",
  Vh = "/assets/6-CjK6CAdF.png",
  Uh = "/assets/7-p8x3qh-o.png",
  Ah = "/assets/8-BT0mK85Y.png",
  $h = "/assets/9-C5CehDOv.png",
  Bh = "/assets/10-CGnUoRmR.png",
  Hh = "/assets/1-LTo43L5H.jpg",
  Wh = "/assets/2-D0SSJgY9.jpg",
  Qh = "/assets/3-BybLgUs4.jpg",
  Kh = "/assets/4-Dvyou0vz.jpg",
  Gh = "/assets/5-C0QiazrD.jpg",
  Yh = "/assets/6-CVXF3xp0.jpg",
  Xh = "/assets/7-7a_ne1i4.jpg";
function Zh() {
  const e = [Rh, Mh, Ih, Dh, Fh, Vh, Uh, Ah, $h, Bh],
    t = [Hh, Wh, Qh, Kh, Gh, Yh, Xh],
    [n, r] = O.useState(0),
    [i, l] = O.useState(0);
  return (
    O.useEffect(() => {
      const o = setInterval(() => {
        r((s) => (s + 1) % e.length);
      }, 5e3);
      return () => clearInterval(o);
    }, [e.length]),
    O.useEffect(() => {
      const o = setInterval(() => {
        l((s) => (s + 1) % t.length);
      }, 5e3);
      return () => clearInterval(o);
    }, [t.length]),
    c.jsxs("section", {
      className: "info-container",
      id: "certificates",
      children: [
        c.jsxs("section", {
          className: "info-section",
          children: [
            c.jsxs("div", {
              className: "info-content",
              children: [
                c.jsx("h2", {
                  className: "info-title",
                  children: "My Dear Mentors",
                }),
                c.jsx("p", {
                  className: "info-text",
                  children:
                    "My journey in the field of interventional cardiology has been shaped by the guidance and wisdom of extraordinary mentors. Each of them has played a pivotal role in honing my skills, deepening my understanding, and inspiring my commitment to advancing cardiovascular care. Their relentless pursuit of excellence and dedication to patient outcomes have left an indelible mark on my practice. This section is a tribute to those who have guided me through the complex pathways of cardiovascular interventions, ensuring that every patient receives the highest standard of care.",
                }),
              ],
            }),
            c.jsx("div", {
              className: "image-slider top-img",
              children: c.jsx("div", {
                className: "slider-container",
                style: { transform: `translateX(-${n * 100}%)` },
                children: e.map((o, s) =>
                  c.jsx(
                    "img",
                    {
                      src: o,
                      alt: `Mentor ${s + 1}`,
                      className: "slider-image",
                    },
                    s
                  )
                ),
              }),
            }),
          ],
        }),
        c.jsxs("section", {
          className: "info-section opposite-section",
          children: [
            c.jsx("div", {
              className: "image-slider",
              children: c.jsx("div", {
                className: "slider-container",
                style: { transform: `translateX(-${i * 100}%)` },
                children: t.map((o, s) =>
                  c.jsx(
                    "img",
                    {
                      src: o,
                      alt: `Certificate ${s + 1}`,
                      className: "slider-image",
                    },
                    s
                  )
                ),
              }),
            }),
            c.jsxs("div", {
              className: "info-content",
              children: [
                c.jsx("h2", {
                  className: "info-title",
                  children: "Certificates",
                }),
                c.jsx("p", {
                  className: "info-text",
                  children:
                    "My professional journey is marked by a steadfast commitment to continuous learning and excellence in interventional cardiology. The certifications I have earned are not just milestones, but a testament to my dedication to staying at the forefront of medical advancements. Each certificate represents rigorous training, advanced skills, and the relentless pursuit of knowledge. They are a reflection of my ongoing effort to provide the most effective and innovative cardiovascular treatments, ensuring that my patients receive the best possible care.",
                }),
              ],
            }),
          ],
        }),
      ],
    })
  );
}
function Jh() {
  return c.jsxs(c.Fragment, {
    children: [
      c.jsxs("div", {
        className: "about-container",
        id: "about",
        children: [
          c.jsxs("div", {
            className: "about-title",
            children: [
              c.jsx("h2", { children: "ABOUT" }),
              c.jsx("h1", { children: "Leading the Way in Heart Health" }),
              c.jsx("p", { children: "- We take care of you -" }),
            ],
          }),
          c.jsxs("div", {
            className: "cards",
            children: [
              c.jsxs("div", {
                children: [
                  c.jsx("img", {
                    src: "https://placehold.co/320x350",
                    alt: "",
                  }),
                  c.jsx("h2", { children: "01" }),
                  c.jsx("div", {
                    className: "card-body",
                    children: c.jsxs("div", {
                      children: [
                        c.jsx("h5", { children: "Comprehensive Heart Care" }),
                        c.jsx("p", {
                          children:
                            "Our clinic offers extensive cardiovascular services, ranging from routine check-ups to advanced diagnostics. We focus on personalized care to ensure every patient gets the attention they deserve.",
                        }),
                      ],
                    }),
                  }),
                ],
              }),
              c.jsxs("div", {
                className: "mid-card",
                children: [
                  c.jsx("img", {
                    src: "https://placehold.co/320x350",
                    alt: "",
                  }),
                  c.jsx("h2", { children: "02" }),
                  c.jsx("div", {
                    className: "card-body",
                    children: c.jsxs("div", {
                      children: [
                        c.jsx("h5", { children: "Cutting-Edge Technology" }),
                        c.jsx("p", {
                          children:
                            "We use the latest advancements in medical technology to provide precise diagnostics and effective treatments. Our state-of-the-art equipment ensures you receive the highest quality care available.",
                        }),
                      ],
                    }),
                  }),
                ],
              }),
              c.jsxs("div", {
                children: [
                  c.jsx("img", {
                    src: "https://placehold.co/320x350",
                    alt: "",
                  }),
                  c.jsx("h2", { children: "03" }),
                  c.jsx("div", {
                    className: "card-body",
                    children: c.jsxs("div", {
                      children: [
                        c.jsx("h5", { children: "Patient-Centered Care" }),
                        c.jsx("p", {
                          children:
                            "We believe in a holistic approach to cardiovascular health, keeping the patient at the core of everything we do. Our team collaborates with you to develop a plan tailored to your specific needs.",
                        }),
                      ],
                    }),
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
      c.jsx(Zh, {}),
    ],
  });
}
var Es = {},
  Ci = function () {
    return (
      (Ci =
        Object.assign ||
        function (e) {
          for (var t, n = 1, r = arguments.length; n < r; n++)
            for (var i in (t = arguments[n]))
              Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
          return e;
        }),
      Ci.apply(this, arguments)
    );
  },
  qh = (function () {
    function e(t, n, r) {
      var i = this;
      (this.endVal = n),
        (this.options = r),
        (this.version = "2.8.0"),
        (this.defaults = {
          startVal: 0,
          decimalPlaces: 0,
          duration: 2,
          useEasing: !0,
          useGrouping: !0,
          useIndianSeparators: !1,
          smartEasingThreshold: 999,
          smartEasingAmount: 333,
          separator: ",",
          decimal: ".",
          prefix: "",
          suffix: "",
          enableScrollSpy: !1,
          scrollSpyDelay: 200,
          scrollSpyOnce: !1,
        }),
        (this.finalEndVal = null),
        (this.useEasing = !0),
        (this.countDown = !1),
        (this.error = ""),
        (this.startVal = 0),
        (this.paused = !0),
        (this.once = !1),
        (this.count = function (l) {
          i.startTime || (i.startTime = l);
          var o = l - i.startTime;
          (i.remaining = i.duration - o),
            i.useEasing
              ? i.countDown
                ? (i.frameVal =
                    i.startVal -
                    i.easingFn(o, 0, i.startVal - i.endVal, i.duration))
                : (i.frameVal = i.easingFn(
                    o,
                    i.startVal,
                    i.endVal - i.startVal,
                    i.duration
                  ))
              : (i.frameVal =
                  i.startVal + (i.endVal - i.startVal) * (o / i.duration));
          var s = i.countDown ? i.frameVal < i.endVal : i.frameVal > i.endVal;
          (i.frameVal = s ? i.endVal : i.frameVal),
            (i.frameVal = Number(i.frameVal.toFixed(i.options.decimalPlaces))),
            i.printValue(i.frameVal),
            o < i.duration
              ? (i.rAF = requestAnimationFrame(i.count))
              : i.finalEndVal !== null
              ? i.update(i.finalEndVal)
              : i.options.onCompleteCallback && i.options.onCompleteCallback();
        }),
        (this.formatNumber = function (l) {
          var o,
            s,
            a,
            u,
            m = l < 0 ? "-" : "";
          o = Math.abs(l).toFixed(i.options.decimalPlaces);
          var p = (o += "").split(".");
          if (
            ((s = p[0]),
            (a = p.length > 1 ? i.options.decimal + p[1] : ""),
            i.options.useGrouping)
          ) {
            u = "";
            for (var v = 3, g = 0, x = 0, w = s.length; x < w; ++x)
              i.options.useIndianSeparators && x === 4 && ((v = 2), (g = 1)),
                x !== 0 && g % v == 0 && (u = i.options.separator + u),
                g++,
                (u = s[w - x - 1] + u);
            s = u;
          }
          return (
            i.options.numerals &&
              i.options.numerals.length &&
              ((s = s.replace(/[0-9]/g, function (E) {
                return i.options.numerals[+E];
              })),
              (a = a.replace(/[0-9]/g, function (E) {
                return i.options.numerals[+E];
              }))),
            m + i.options.prefix + s + a + i.options.suffix
          );
        }),
        (this.easeOutExpo = function (l, o, s, a) {
          return (s * (1 - Math.pow(2, (-10 * l) / a)) * 1024) / 1023 + o;
        }),
        (this.options = Ci(Ci({}, this.defaults), r)),
        (this.formattingFn = this.options.formattingFn
          ? this.options.formattingFn
          : this.formatNumber),
        (this.easingFn = this.options.easingFn
          ? this.options.easingFn
          : this.easeOutExpo),
        (this.startVal = this.validateValue(this.options.startVal)),
        (this.frameVal = this.startVal),
        (this.endVal = this.validateValue(n)),
        (this.options.decimalPlaces = Math.max(this.options.decimalPlaces)),
        this.resetDuration(),
        (this.options.separator = String(this.options.separator)),
        (this.useEasing = this.options.useEasing),
        this.options.separator === "" && (this.options.useGrouping = !1),
        (this.el = typeof t == "string" ? document.getElementById(t) : t),
        this.el
          ? this.printValue(this.startVal)
          : (this.error = "[CountUp] target is null or undefined"),
        typeof window < "u" &&
          this.options.enableScrollSpy &&
          (this.error
            ? console.error(this.error, t)
            : ((window.onScrollFns = window.onScrollFns || []),
              window.onScrollFns.push(function () {
                return i.handleScroll(i);
              }),
              (window.onscroll = function () {
                window.onScrollFns.forEach(function (l) {
                  return l();
                });
              }),
              this.handleScroll(this)));
    }
    return (
      (e.prototype.handleScroll = function (t) {
        if (t && window && !t.once) {
          var n = window.innerHeight + window.scrollY,
            r = t.el.getBoundingClientRect(),
            i = r.top + window.pageYOffset,
            l = r.top + r.height + window.pageYOffset;
          l < n && l > window.scrollY && t.paused
            ? ((t.paused = !1),
              setTimeout(function () {
                return t.start();
              }, t.options.scrollSpyDelay),
              t.options.scrollSpyOnce && (t.once = !0))
            : (window.scrollY > l || i > n) && !t.paused && t.reset();
        }
      }),
      (e.prototype.determineDirectionAndSmartEasing = function () {
        var t = this.finalEndVal ? this.finalEndVal : this.endVal;
        this.countDown = this.startVal > t;
        var n = t - this.startVal;
        if (
          Math.abs(n) > this.options.smartEasingThreshold &&
          this.options.useEasing
        ) {
          this.finalEndVal = t;
          var r = this.countDown ? 1 : -1;
          (this.endVal = t + r * this.options.smartEasingAmount),
            (this.duration = this.duration / 2);
        } else (this.endVal = t), (this.finalEndVal = null);
        this.finalEndVal !== null
          ? (this.useEasing = !1)
          : (this.useEasing = this.options.useEasing);
      }),
      (e.prototype.start = function (t) {
        this.error ||
          (this.options.onStartCallback && this.options.onStartCallback(),
          t && (this.options.onCompleteCallback = t),
          this.duration > 0
            ? (this.determineDirectionAndSmartEasing(),
              (this.paused = !1),
              (this.rAF = requestAnimationFrame(this.count)))
            : this.printValue(this.endVal));
      }),
      (e.prototype.pauseResume = function () {
        this.paused
          ? ((this.startTime = null),
            (this.duration = this.remaining),
            (this.startVal = this.frameVal),
            this.determineDirectionAndSmartEasing(),
            (this.rAF = requestAnimationFrame(this.count)))
          : cancelAnimationFrame(this.rAF),
          (this.paused = !this.paused);
      }),
      (e.prototype.reset = function () {
        cancelAnimationFrame(this.rAF),
          (this.paused = !0),
          this.resetDuration(),
          (this.startVal = this.validateValue(this.options.startVal)),
          (this.frameVal = this.startVal),
          this.printValue(this.startVal);
      }),
      (e.prototype.update = function (t) {
        cancelAnimationFrame(this.rAF),
          (this.startTime = null),
          (this.endVal = this.validateValue(t)),
          this.endVal !== this.frameVal &&
            ((this.startVal = this.frameVal),
            this.finalEndVal == null && this.resetDuration(),
            (this.finalEndVal = null),
            this.determineDirectionAndSmartEasing(),
            (this.rAF = requestAnimationFrame(this.count)));
      }),
      (e.prototype.printValue = function (t) {
        var n;
        if (this.el) {
          var r = this.formattingFn(t);
          !((n = this.options.plugin) === null || n === void 0) && n.render
            ? this.options.plugin.render(this.el, r)
            : this.el.tagName === "INPUT"
            ? (this.el.value = r)
            : this.el.tagName === "text" || this.el.tagName === "tspan"
            ? (this.el.textContent = r)
            : (this.el.innerHTML = r);
        }
      }),
      (e.prototype.ensureNumber = function (t) {
        return typeof t == "number" && !isNaN(t);
      }),
      (e.prototype.validateValue = function (t) {
        var n = Number(t);
        return this.ensureNumber(n)
          ? n
          : ((this.error = "[CountUp] invalid start or end value: ".concat(t)),
            null);
      }),
      (e.prototype.resetDuration = function () {
        (this.startTime = null),
          (this.duration = 1e3 * Number(this.options.duration)),
          (this.remaining = this.duration);
      }),
      e
    );
  })();
const bh = Object.freeze(
    Object.defineProperty(
      { __proto__: null, CountUp: qh },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  em = Qd(bh);
Object.defineProperty(Es, "__esModule", { value: !0 });
var b = O,
  tm = em;
function nm(e, t) {
  var n =
    e == null
      ? null
      : (typeof Symbol < "u" && e[Symbol.iterator]) || e["@@iterator"];
  if (n != null) {
    var r,
      i,
      l,
      o,
      s = [],
      a = !0,
      u = !1;
    try {
      if (((l = (n = n.call(e)).next), t !== 0))
        for (
          ;
          !(a = (r = l.call(n)).done) && (s.push(r.value), s.length !== t);
          a = !0
        );
    } catch (m) {
      (u = !0), (i = m);
    } finally {
      try {
        if (!a && n.return != null && ((o = n.return()), Object(o) !== o))
          return;
      } finally {
        if (u) throw i;
      }
    }
    return s;
  }
}
function Ba(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t &&
      (r = r.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      n.push.apply(n, r);
  }
  return n;
}
function ji(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Ba(Object(n), !0).forEach(function (r) {
          lm(e, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
      : Ba(Object(n)).forEach(function (r) {
          Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
        });
  }
  return e;
}
function rm(e, t) {
  if (typeof e != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || "default");
    if (typeof r != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function im(e) {
  var t = rm(e, "string");
  return typeof t == "symbol" ? t : String(t);
}
function lm(e, t, n) {
  return (
    (t = im(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
function So() {
  return (
    (So = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    So.apply(this, arguments)
  );
}
function om(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    i,
    l;
  for (l = 0; l < r.length; l++)
    (i = r[l]), !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n;
}
function Nd(e, t) {
  if (e == null) return {};
  var n = om(e, t),
    r,
    i;
  if (Object.getOwnPropertySymbols) {
    var l = Object.getOwnPropertySymbols(e);
    for (i = 0; i < l.length; i++)
      (r = l[i]),
        !(t.indexOf(r) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(e, r) &&
          (n[r] = e[r]);
  }
  return n;
}
function sm(e, t) {
  return am(e) || nm(e, t) || um(e, t) || cm();
}
function am(e) {
  if (Array.isArray(e)) return e;
}
function um(e, t) {
  if (e) {
    if (typeof e == "string") return Ha(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (
      (n === "Object" && e.constructor && (n = e.constructor.name),
      n === "Map" || n === "Set")
    )
      return Array.from(e);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return Ha(e, t);
  }
}
function Ha(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function cm() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
var dm =
  typeof window < "u" &&
  typeof window.document < "u" &&
  typeof window.document.createElement < "u"
    ? b.useLayoutEffect
    : b.useEffect;
function De(e) {
  var t = b.useRef(e);
  return (
    dm(function () {
      t.current = e;
    }),
    b.useCallback(function () {
      for (var n = arguments.length, r = new Array(n), i = 0; i < n; i++)
        r[i] = arguments[i];
      return t.current.apply(void 0, r);
    }, [])
  );
}
var fm = function (t, n) {
    var r = n.decimal,
      i = n.decimals,
      l = n.duration,
      o = n.easingFn,
      s = n.end,
      a = n.formattingFn,
      u = n.numerals,
      m = n.prefix,
      p = n.separator,
      v = n.start,
      g = n.suffix,
      x = n.useEasing,
      w = n.useGrouping,
      E = n.useIndianSeparators,
      f = n.enableScrollSpy,
      d = n.scrollSpyDelay,
      h = n.scrollSpyOnce,
      y = n.plugin;
    return new tm.CountUp(t, s, {
      startVal: v,
      duration: l,
      decimal: r,
      decimalPlaces: i,
      easingFn: o,
      formattingFn: a,
      numerals: u,
      separator: p,
      prefix: m,
      suffix: g,
      plugin: y,
      useEasing: x,
      useIndianSeparators: E,
      useGrouping: w,
      enableScrollSpy: f,
      scrollSpyDelay: d,
      scrollSpyOnce: h,
    });
  },
  pm = [
    "ref",
    "startOnMount",
    "enableReinitialize",
    "delay",
    "onEnd",
    "onStart",
    "onPauseResume",
    "onReset",
    "onUpdate",
  ],
  hm = {
    decimal: ".",
    separator: ",",
    delay: null,
    prefix: "",
    suffix: "",
    duration: 2,
    start: 0,
    decimals: 0,
    startOnMount: !0,
    enableReinitialize: !0,
    useEasing: !0,
    useGrouping: !0,
    useIndianSeparators: !1,
  },
  Pd = function (t) {
    var n = Object.fromEntries(
        Object.entries(t).filter(function (M) {
          var T = sm(M, 2),
            le = T[1];
          return le !== void 0;
        })
      ),
      r = b.useMemo(
        function () {
          return ji(ji({}, hm), n);
        },
        [t]
      ),
      i = r.ref,
      l = r.startOnMount,
      o = r.enableReinitialize,
      s = r.delay,
      a = r.onEnd,
      u = r.onStart,
      m = r.onPauseResume,
      p = r.onReset,
      v = r.onUpdate,
      g = Nd(r, pm),
      x = b.useRef(),
      w = b.useRef(),
      E = b.useRef(!1),
      f = De(function () {
        return fm(typeof i == "string" ? i : i.current, g);
      }),
      d = De(function (M) {
        var T = x.current;
        if (T && !M) return T;
        var le = f();
        return (x.current = le), le;
      }),
      h = De(function () {
        var M = function () {
          return d(!0).start(function () {
            a == null || a({ pauseResume: y, reset: k, start: j, update: C });
          });
        };
        s && s > 0 ? (w.current = setTimeout(M, s * 1e3)) : M(),
          u == null || u({ pauseResume: y, reset: k, update: C });
      }),
      y = De(function () {
        d().pauseResume(), m == null || m({ reset: k, start: j, update: C });
      }),
      k = De(function () {
        d().el &&
          (w.current && clearTimeout(w.current),
          d().reset(),
          p == null || p({ pauseResume: y, start: j, update: C }));
      }),
      C = De(function (M) {
        d().update(M), v == null || v({ pauseResume: y, reset: k, start: j });
      }),
      j = De(function () {
        k(), h();
      }),
      _ = De(function (M) {
        l && (M && k(), h());
      });
    return (
      b.useEffect(
        function () {
          E.current ? o && _(!0) : ((E.current = !0), _());
        },
        [
          o,
          E,
          _,
          s,
          t.start,
          t.suffix,
          t.prefix,
          t.duration,
          t.separator,
          t.decimals,
          t.decimal,
          t.formattingFn,
        ]
      ),
      b.useEffect(
        function () {
          return function () {
            k();
          };
        },
        [k]
      ),
      { start: j, pauseResume: y, reset: k, update: C, getCountUp: d }
    );
  },
  mm = ["className", "redraw", "containerProps", "children", "style"],
  vm = function (t) {
    var n = t.className,
      r = t.redraw,
      i = t.containerProps,
      l = t.children,
      o = t.style,
      s = Nd(t, mm),
      a = b.useRef(null),
      u = b.useRef(!1),
      m = Pd(
        ji(
          ji({}, s),
          {},
          {
            ref: a,
            startOnMount: typeof l != "function" || t.delay === 0,
            enableReinitialize: !1,
          }
        )
      ),
      p = m.start,
      v = m.reset,
      g = m.update,
      x = m.pauseResume,
      w = m.getCountUp,
      E = De(function () {
        p();
      }),
      f = De(function (y) {
        t.preserveValue || v(), g(y);
      }),
      d = De(function () {
        if (
          typeof t.children == "function" &&
          !(a.current instanceof Element)
        ) {
          console.error(
            `Couldn't find attached element to hook the CountUp instance into! Try to attach "containerRef" from the render prop to a an Element, eg. <span ref={containerRef} />.`
          );
          return;
        }
        w();
      });
    b.useEffect(
      function () {
        d();
      },
      [d]
    ),
      b.useEffect(
        function () {
          u.current && f(t.end);
        },
        [t.end, f]
      );
    var h = r && t;
    return (
      b.useEffect(
        function () {
          r && u.current && E();
        },
        [E, r, h]
      ),
      b.useEffect(
        function () {
          !r && u.current && E();
        },
        [
          E,
          r,
          t.start,
          t.suffix,
          t.prefix,
          t.duration,
          t.separator,
          t.decimals,
          t.decimal,
          t.className,
          t.formattingFn,
        ]
      ),
      b.useEffect(function () {
        u.current = !0;
      }, []),
      typeof l == "function"
        ? l({
            countUpRef: a,
            start: p,
            reset: v,
            update: g,
            pauseResume: x,
            getCountUp: w,
          })
        : b.createElement(
            "span",
            So({ className: n, ref: a, style: o }, i),
            typeof t.start < "u" ? w().formattingFn(t.start) : ""
          )
    );
  },
  gm = (Es.default = vm);
Es.useCountUp = Pd;
var _d = { exports: {} },
  ym = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",
  xm = ym,
  wm = xm;
function Od() {}
function Td() {}
Td.resetWarningCache = Od;
var Sm = function () {
  function e(r, i, l, o, s, a) {
    if (a !== wm) {
      var u = new Error(
        "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
      );
      throw ((u.name = "Invariant Violation"), u);
    }
  }
  e.isRequired = e;
  function t() {
    return e;
  }
  var n = {
    array: e,
    bigint: e,
    bool: e,
    func: e,
    number: e,
    object: e,
    string: e,
    symbol: e,
    any: e,
    arrayOf: t,
    element: e,
    elementType: e,
    instanceOf: t,
    node: e,
    objectOf: t,
    oneOf: t,
    oneOfType: t,
    shape: t,
    exact: t,
    checkPropTypes: Td,
    resetWarningCache: Od,
  };
  return (n.PropTypes = n), n;
};
_d.exports = Sm();
var Em = _d.exports;
const Ne = Ti(Em);
var Ld = "Expected a function",
  Wa = NaN,
  km = "[object Symbol]",
  Cm = /^\s+|\s+$/g,
  jm = /^[-+]0x[0-9a-f]+$/i,
  Nm = /^0b[01]+$/i,
  Pm = /^0o[0-7]+$/i,
  _m = parseInt,
  Om = typeof yr == "object" && yr && yr.Object === Object && yr,
  Tm = typeof self == "object" && self && self.Object === Object && self,
  Lm = Om || Tm || Function("return this")(),
  zm = Object.prototype,
  Rm = zm.toString,
  Mm = Math.max,
  Im = Math.min,
  jl = function () {
    return Lm.Date.now();
  };
function Dm(e, t, n) {
  var r,
    i,
    l,
    o,
    s,
    a,
    u = 0,
    m = !1,
    p = !1,
    v = !0;
  if (typeof e != "function") throw new TypeError(Ld);
  (t = Qa(t) || 0),
    Ni(n) &&
      ((m = !!n.leading),
      (p = "maxWait" in n),
      (l = p ? Mm(Qa(n.maxWait) || 0, t) : l),
      (v = "trailing" in n ? !!n.trailing : v));
  function g(C) {
    var j = r,
      _ = i;
    return (r = i = void 0), (u = C), (o = e.apply(_, j)), o;
  }
  function x(C) {
    return (u = C), (s = setTimeout(f, t)), m ? g(C) : o;
  }
  function w(C) {
    var j = C - a,
      _ = C - u,
      M = t - j;
    return p ? Im(M, l - _) : M;
  }
  function E(C) {
    var j = C - a,
      _ = C - u;
    return a === void 0 || j >= t || j < 0 || (p && _ >= l);
  }
  function f() {
    var C = jl();
    if (E(C)) return d(C);
    s = setTimeout(f, w(C));
  }
  function d(C) {
    return (s = void 0), v && r ? g(C) : ((r = i = void 0), o);
  }
  function h() {
    s !== void 0 && clearTimeout(s), (u = 0), (r = a = i = s = void 0);
  }
  function y() {
    return s === void 0 ? o : d(jl());
  }
  function k() {
    var C = jl(),
      j = E(C);
    if (((r = arguments), (i = this), (a = C), j)) {
      if (s === void 0) return x(a);
      if (p) return (s = setTimeout(f, t)), g(a);
    }
    return s === void 0 && (s = setTimeout(f, t)), o;
  }
  return (k.cancel = h), (k.flush = y), k;
}
function Fm(e, t, n) {
  var r = !0,
    i = !0;
  if (typeof e != "function") throw new TypeError(Ld);
  return (
    Ni(n) &&
      ((r = "leading" in n ? !!n.leading : r),
      (i = "trailing" in n ? !!n.trailing : i)),
    Dm(e, t, { leading: r, maxWait: t, trailing: i })
  );
}
function Ni(e) {
  var t = typeof e;
  return !!e && (t == "object" || t == "function");
}
function Vm(e) {
  return !!e && typeof e == "object";
}
function Um(e) {
  return typeof e == "symbol" || (Vm(e) && Rm.call(e) == km);
}
function Qa(e) {
  if (typeof e == "number") return e;
  if (Um(e)) return Wa;
  if (Ni(e)) {
    var t = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = Ni(t) ? t + "" : t;
  }
  if (typeof e != "string") return e === 0 ? e : +e;
  e = e.replace(Cm, "");
  var n = Nm.test(e);
  return n || Pm.test(e) ? _m(e.slice(2), n ? 2 : 8) : jm.test(e) ? Wa : +e;
}
var Am = Fm;
const Dr = Ti(Am);
var $m = [
    "accept",
    "acceptCharset",
    "accessKey",
    "action",
    "allowFullScreen",
    "allowTransparency",
    "alt",
    "async",
    "autoComplete",
    "autoFocus",
    "autoPlay",
    "capture",
    "cellPadding",
    "cellSpacing",
    "challenge",
    "charSet",
    "checked",
    "cite",
    "classID",
    "className",
    "colSpan",
    "cols",
    "content",
    "contentEditable",
    "contextMenu",
    "controls",
    "controlsList",
    "coords",
    "crossOrigin",
    "data",
    "dateTime",
    "default",
    "defer",
    "dir",
    "disabled",
    "download",
    "draggable",
    "encType",
    "form",
    "formAction",
    "formEncType",
    "formMethod",
    "formNoValidate",
    "formTarget",
    "frameBorder",
    "headers",
    "height",
    "hidden",
    "high",
    "href",
    "hrefLang",
    "htmlFor",
    "httpEquiv",
    "icon",
    "id",
    "inputMode",
    "integrity",
    "is",
    "keyParams",
    "keyType",
    "kind",
    "label",
    "lang",
    "list",
    "loop",
    "low",
    "manifest",
    "marginHeight",
    "marginWidth",
    "max",
    "maxLength",
    "media",
    "mediaGroup",
    "method",
    "min",
    "minLength",
    "multiple",
    "muted",
    "name",
    "noValidate",
    "nonce",
    "open",
    "optimum",
    "pattern",
    "placeholder",
    "poster",
    "preload",
    "profile",
    "radioGroup",
    "readOnly",
    "rel",
    "required",
    "reversed",
    "role",
    "rowSpan",
    "rows",
    "sandbox",
    "scope",
    "scoped",
    "scrolling",
    "seamless",
    "selected",
    "shape",
    "size",
    "sizes",
    "span",
    "spellCheck",
    "src",
    "srcDoc",
    "srcLang",
    "srcSet",
    "start",
    "step",
    "style",
    "summary",
    "tabIndex",
    "target",
    "title",
    "type",
    "useMap",
    "value",
    "width",
    "wmode",
    "wrap",
  ],
  Bm = [
    "about",
    "datatype",
    "inlist",
    "prefix",
    "property",
    "resource",
    "typeof",
    "vocab",
  ],
  Hm = [
    "onCopy",
    "onCut",
    "onPaste",
    "onCompositionEnd",
    "onCompositionStart",
    "onCompositionUpdate",
    "onKeyDown",
    "onKeyPress",
    "onKeyUp",
    "onFocus",
    "onBlur",
    "onChange",
    "onInput",
    "onInvalid",
    "onReset",
    "onSubmit",
    "onClick",
    "onContextMenu",
    "onDoubleClick",
    "onDrag",
    "onDragEnd",
    "onDragEnter",
    "onDragExit",
    "onDragLeave",
    "onDragOver",
    "onDragStart",
    "onDrop",
    "onMouseDown",
    "onMouseEnter",
    "onMouseLeave",
    "onMouseMove",
    "onMouseOut",
    "onMouseOver",
    "onMouseUp",
    "onPointerDown",
    "onPointerMove",
    "onPointerUp",
    "onPointerCancel",
    "onGotPointerCapture",
    "onLostPointerCapture",
    "onPointerEnter",
    "onPointerLeave",
    "onPointerOver",
    "onPointerOut",
    "onSelect",
    "onTouchCancel",
    "onTouchEnd",
    "onTouchMove",
    "onTouchStart",
    "onScroll",
    "onWheel",
    "onAbort",
    "onCanPlay",
    "onCanPlayThrough",
    "onDurationChange",
    "onEmptied",
    "onEncrypted",
    "onEnded",
    "onError",
    "onLoadedData",
    "onLoadedMetadata",
    "onLoadStart",
    "onPause",
    "onPlay",
    "onPlaying",
    "onProgress",
    "onRateChange",
    "onSeeked",
    "onSeeking",
    "onStalled",
    "onSuspend",
    "onTimeUpdate",
    "onVolumeChange",
    "onWaiting",
    "onLoad",
    "onError",
    "onAnimationStart",
    "onAnimationEnd",
    "onAnimationIteration",
    "onTransitionEnd",
    "onToggle",
  ],
  Wm = /data-([a-zA-Z0-9\-]*)/,
  Qm = /aria-([a-zA-Z0-9\-]*)/,
  Km = function (t, n, r) {
    t === void 0 && (t = {}),
      n === void 0 && (n = []),
      r === void 0 && (r = []);
    var i = Object.assign({}, t),
      l = Object.keys(i).filter(function (o) {
        return n.indexOf(o) !== -1
          ? !1
          : !!(
              r.indexOf(o) > -1 ||
              $m.indexOf(o) !== -1 ||
              Bm.indexOf(o) !== -1 ||
              Wm.test(o) ||
              Qm.test(o) ||
              Hm.indexOf(o) !== -1
            );
      });
    return (
      Object.keys(i).forEach(function (o) {
        l.indexOf(o) === -1 && delete i[o];
      }),
      i
    );
  };
function Ka(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t &&
      (r = r.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      n.push.apply(n, r);
  }
  return n;
}
function Ga(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Ka(Object(n), !0).forEach(function (r) {
          Gm(e, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
      : Ka(Object(n)).forEach(function (r) {
          Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
        });
  }
  return e;
}
function Gm(e, t, n) {
  return (
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
function Ya(e) {
  if (e === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return e;
}
function Ym(e, t) {
  (e.prototype = Object.create(t.prototype)),
    (e.prototype.constructor = e),
    Eo(e, t);
}
function Eo(e, t) {
  return (
    (Eo =
      Object.setPrototypeOf ||
      function (r, i) {
        return (r.__proto__ = i), r;
      }),
    Eo(e, t)
  );
}
var ks = (function (e) {
  Ym(t, e);
  function t(r) {
    var i;
    return (
      (i = e.call(this, r) || this),
      (i.onScrollThrottled = Dr(i.onScroll.bind(Ya(i)), r.throttleScroll, {
        trailing: !1,
      })),
      (i.onResizeThrottled = Dr(i.onResize.bind(Ya(i)), r.throttleResize, {
        trailing: !1,
      })),
      (i.state = {
        inViewport: !1,
        progress: 0,
        lastScrollPosition: null,
        lastScrollTime: null,
      }),
      i
    );
  }
  var n = t.prototype;
  return (
    (n.componentDidMount = function () {
      addEventListener("resize", this.onResizeThrottled),
        addEventListener("scroll", this.onScrollThrottled),
        this.props.triggerOnLoad && this.checkStatus();
    }),
    (n.componentDidUpdate = function (i, l) {
      i.throttleScroll !== this.props.throttleScroll &&
        (removeEventListener("scroll", this.onScrollThrottled),
        (this.onScrollThrottled = Dr(
          this.onScroll.bind(this),
          this.props.throttleScroll,
          { trailing: !1 }
        )),
        addEventListener("scroll", this.onScrollThrottled)),
        i.throttleResize !== this.props.throttleResize &&
          (removeEventListener("resize", this.onResizeThrottled),
          (this.onResizeThrottled = Dr(
            this.onResize.bind(this),
            this.props.throttleResize,
            { trailing: !1 }
          )),
          addEventListener("resize", this.onResizeThrottled));
    }),
    (n.componentWillUnmount = function () {
      removeEventListener("resize", this.onResizeThrottled),
        removeEventListener("scroll", this.onScrollThrottled);
    }),
    (n.onResize = function () {
      this.checkStatus();
    }),
    (n.onScroll = function () {
      this.checkStatus();
    }),
    (n.checkStatus = function () {
      var i = this.props,
        l = i.containerRef,
        o = i.onEnter,
        s = i.onExit,
        a = i.onProgress,
        u = this.state,
        m = u.lastScrollPosition,
        p = u.lastScrollTime,
        v = Dn.findDOMNode(this.element),
        g = v.getBoundingClientRect(),
        x = 0,
        w = typeof l == "string" ? document.querySelector(l) : l,
        E =
          l === document.documentElement
            ? Math.max(l.clientHeight, window.innerHeight || 0)
            : w.clientHeight,
        f = g.top <= E && g.bottom >= x,
        d = window.scrollY,
        h = m && p ? Math.abs((m - d) / (p - Date.now())) : null;
      if (f) {
        var y = Math.max(0, Math.min(1, 1 - g.bottom / (E + g.height)));
        this.state.inViewport ||
          (this.setState({ inViewport: f }),
          o({ progress: y, velocity: h }, this)),
          a({ progress: y, velocity: h }, this),
          this.setState({ lastScrollPosition: d, lastScrollTime: Date.now() });
        return;
      }
      if (this.state.inViewport) {
        var k = g.top <= E ? 1 : 0;
        this.setState({
          lastScrollPosition: d,
          lastScrollTime: Date.now(),
          inViewport: f,
          progress: k,
        }),
          a({ progress: k, velocity: h }, this),
          s({ progress: k, velocity: h }, this);
      }
    }),
    (n.render = function () {
      var i = this,
        l = this.props,
        o = l.children,
        s = l.component,
        a = D.isValidElement(s) ? "cloneElement" : "createElement";
      return D[a](
        s,
        Ga(
          Ga({}, Km(this.props, ["onProgress"])),
          {},
          {
            ref: function (m) {
              i.element = m;
            },
          }
        ),
        o
      );
    }),
    t
  );
})(O.Component);
ks.propTypes = {
  component: Ne.oneOfType([Ne.element, Ne.node]),
  containerRef: Ne.oneOfType([Ne.object, Ne.string]),
  throttleResize: Ne.number,
  throttleScroll: Ne.number,
  triggerOnLoad: Ne.bool,
  onEnter: Ne.func,
  onExit: Ne.func,
  onProgress: Ne.func,
};
ks.defaultProps = {
  component: "div",
  containerRef: typeof document < "u" ? document.documentElement : "html",
  throttleResize: 100,
  throttleScroll: 100,
  triggerOnLoad: !0,
  onEnter: function () {},
  onExit: function () {},
  onProgress: function () {},
};
function Xm() {
  const [e, t] = O.useState(!1),
    n = [
      { data: "5124", title: "Coronary Intervention" },
      { data: "548", title: "Cardiac Device Implantation" },
      { data: "10037", title: "Heart Failure Patient Management" },
    ];
  return c.jsx("section", {
    className: "stats-section",
    children: c.jsxs("div", {
      className: "container",
      children: [
        c.jsxs("div", {
          className: "content",
          children: [
            c.jsx("h3", {
              className: "title",
              children: "Dedicated to Advancing Cardiovascular Care",
            }),
            c.jsx("p", {
              className: "description",
              children:
                "As an Interventional Cardiovascular Specialist, we are committed to providing cutting-edge treatments and personalized care to improve heart health and save lives.",
            }),
          ],
        }),
        c.jsx("div", {
          className: "stats-container",
          children: c.jsx(ks, {
            onEnter: () => t(!0),
            onExit: () => t(!1),
            children: c.jsx("ul", {
              className: "stats-list",
              children: n.map((r, i) =>
                c.jsxs(
                  "li",
                  {
                    className: "stats-item",
                    children: [
                      c.jsxs("h4", {
                        className: "stats-number",
                        children: [
                          e && c.jsx(gm, { start: 0, end: r.data }),
                          "+",
                        ],
                      }),
                      c.jsx("p", {
                        className: "stats-title",
                        children: r.title,
                      }),
                    ],
                  },
                  i
                )
              ),
            }),
          }),
        }),
      ],
    }),
  });
}
function Zm() {
  const e = [
    {
      avatar: "https://api.uifaces.co/our-content/donated/xZ4wg2Xj.jpg",
      name: "John Smith",
      quote:
        "Dr. Abdelsattar's expertise and care transformed my life. I’m now healthier and more active than ever. His dedication is truly remarkable.",
    },
    {
      avatar: "https://randomuser.me/api/portraits/women/41.jpg",
      name: "Emily Davis",
      quote:
        "Dr. Abdelsattar provided exceptional care throughout my treatment. I felt supported every step of the way, and the results speak for themselves.",
    },
    {
      avatar: "https://randomuser.me/api/portraits/men/86.jpg",
      name: "Michael Lee",
      quote:
        "Despite my initial nerves, Dr. Abdelsattar and his team were fantastic. Their professionalism and attention to detail were outstanding.",
    },
  ];
  return c.jsxs("section", {
    className: "relative py-14",
    id: "testmonials",
    children: [
      c.jsxs("div", {
        className: "relative z-10 max-w-screen-xl px-4 mx-auto md:px-8",
        children: [
          c.jsxs("div", {
            className: "max-w-xl sm:text-center md:mx-auto",
            children: [
              c.jsx("h3", {
                className: "text-3xl font-semibold text-gray-800 sm:text-4xl",
                children: "Hear from Our Patients",
              }),
              c.jsx("p", {
                className: "mt-3 text-gray-600",
                children:
                  "Discover how our specialized cardiovascular treatments have made a difference in the lives of our patients. Our commitment to exceptional care and innovative procedures is reflected in their experiences.",
              }),
            ],
          }),
          c.jsx("div", {
            className: "mt-12",
            children: c.jsx("ul", {
              className:
                "grid items-center gap-6 sm:grid-cols-2 lg:grid-cols-3",
              children: e.map((t, n) =>
                c.jsxs(
                  "li",
                  {
                    className: "bg-white border shadow-md rounded-xl",
                    children: [
                      c.jsx("div", {
                        className: "p-4",
                        children: c.jsx("i", {
                          className: "text-2xl fa-solid fa-quote-left",
                        }),
                      }),
                      c.jsxs("figure", {
                        children: [
                          c.jsx("blockquote", {
                            children: c.jsx("p", {
                              className: "px-4 py-1 text-lg text-gray-800",
                              children: t.quote,
                            }),
                          }),
                          c.jsxs("div", {
                            className: "flex items-center p-4 mt-6 gap-x-4",
                            style: {
                              background:
                                "linear-gradient(152.92deg, rgba(19, 108, 157, 0.2) 4.54%, rgba(19, 108, 157, 0.17) 34.2%, rgba(45, 54, 101, 0.1) 77.55%)",
                            },
                            children: [
                              c.jsx("img", {
                                src: t.avatar,
                                className:
                                  "w-16 h-16 border-2 border-[#2d3665] rounded-full",
                              }),
                              c.jsx("div", {
                                children: c.jsx("span", {
                                  className:
                                    "block font-semibold text-gray-800",
                                  children: t.name,
                                }),
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  },
                  n
                )
              ),
            }),
          }),
        ],
      }),
      c.jsx("div", {
        className: "absolute top-0 w-full h-[350px]",
        style: {
          background:
            "linear-gradient(152.92deg, rgba(19, 108, 157, 0.2) 4.54%, rgba(19, 108, 157, 0.17) 34.2%, rgba(45, 54, 101, 0.1) 77.55%)",
        },
      }),
    ],
  });
}
function Jm() {
  return c.jsxs(c.Fragment, {
    children: [c.jsx(zh, {}), c.jsx(Jh, {}), c.jsx(Xm, {}), c.jsx(Zm, {})],
  });
}
function ko() {
  return (
    (ko = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    ko.apply(null, arguments)
  );
}
function zd(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if ({}.hasOwnProperty.call(e, r)) {
      if (t.includes(r)) continue;
      n[r] = e[r];
    }
  return n;
}
function Co(e, t) {
  return (
    (Co = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (n, r) {
          return (n.__proto__ = r), n;
        }),
    Co(e, t)
  );
}
function Cs(e, t) {
  (e.prototype = Object.create(t.prototype)),
    (e.prototype.constructor = e),
    Co(e, t);
}
function qm(e, t) {
  return e.classList
    ? !!t && e.classList.contains(t)
    : (" " + (e.className.baseVal || e.className) + " ").indexOf(
        " " + t + " "
      ) !== -1;
}
function bm(e, t) {
  e.classList
    ? e.classList.add(t)
    : qm(e, t) ||
      (typeof e.className == "string"
        ? (e.className = e.className + " " + t)
        : e.setAttribute(
            "class",
            ((e.className && e.className.baseVal) || "") + " " + t
          ));
}
function Xa(e, t) {
  return e
    .replace(new RegExp("(^|\\s)" + t + "(?:\\s|$)", "g"), "$1")
    .replace(/\s+/g, " ")
    .replace(/^\s*|\s*$/g, "");
}
function e1(e, t) {
  e.classList
    ? e.classList.remove(t)
    : typeof e.className == "string"
    ? (e.className = Xa(e.className, t))
    : e.setAttribute(
        "class",
        Xa((e.className && e.className.baseVal) || "", t)
      );
}
const Za = { disabled: !1 },
  js = D.createContext(null);
var Rd = function (t) {
    return t.scrollTop;
  },
  Fn = "unmounted",
  Tt = "exited",
  Oe = "entering",
  Qe = "entered",
  cr = "exiting",
  it = (function (e) {
    Cs(t, e);
    function t(r, i) {
      var l;
      l = e.call(this, r, i) || this;
      var o = i,
        s = o && !o.isMounting ? r.enter : r.appear,
        a;
      return (
        (l.appearStatus = null),
        r.in
          ? s
            ? ((a = Tt), (l.appearStatus = Oe))
            : (a = Qe)
          : r.unmountOnExit || r.mountOnEnter
          ? (a = Fn)
          : (a = Tt),
        (l.state = { status: a }),
        (l.nextCallback = null),
        l
      );
    }
    t.getDerivedStateFromProps = function (i, l) {
      var o = i.in;
      return o && l.status === Fn ? { status: Tt } : null;
    };
    var n = t.prototype;
    return (
      (n.componentDidMount = function () {
        this.updateStatus(!0, this.appearStatus);
      }),
      (n.componentDidUpdate = function (i) {
        var l = null;
        if (i !== this.props) {
          var o = this.state.status;
          this.props.in
            ? o !== Oe && o !== Qe && (l = Oe)
            : (o === Oe || o === Qe) && (l = cr);
        }
        this.updateStatus(!1, l);
      }),
      (n.componentWillUnmount = function () {
        this.cancelNextCallback();
      }),
      (n.getTimeouts = function () {
        var i = this.props.timeout,
          l,
          o,
          s;
        return (
          (l = o = s = i),
          i != null &&
            typeof i != "number" &&
            ((l = i.exit),
            (o = i.enter),
            (s = i.appear !== void 0 ? i.appear : o)),
          { exit: l, enter: o, appear: s }
        );
      }),
      (n.updateStatus = function (i, l) {
        if ((i === void 0 && (i = !1), l !== null))
          if ((this.cancelNextCallback(), l === Oe)) {
            if (this.props.unmountOnExit || this.props.mountOnEnter) {
              var o = this.props.nodeRef
                ? this.props.nodeRef.current
                : Dn.findDOMNode(this);
              o && Rd(o);
            }
            this.performEnter(i);
          } else this.performExit();
        else
          this.props.unmountOnExit &&
            this.state.status === Tt &&
            this.setState({ status: Fn });
      }),
      (n.performEnter = function (i) {
        var l = this,
          o = this.props.enter,
          s = this.context ? this.context.isMounting : i,
          a = this.props.nodeRef ? [s] : [Dn.findDOMNode(this), s],
          u = a[0],
          m = a[1],
          p = this.getTimeouts(),
          v = s ? p.appear : p.enter;
        if ((!i && !o) || Za.disabled) {
          this.safeSetState({ status: Qe }, function () {
            l.props.onEntered(u);
          });
          return;
        }
        this.props.onEnter(u, m),
          this.safeSetState({ status: Oe }, function () {
            l.props.onEntering(u, m),
              l.onTransitionEnd(v, function () {
                l.safeSetState({ status: Qe }, function () {
                  l.props.onEntered(u, m);
                });
              });
          });
      }),
      (n.performExit = function () {
        var i = this,
          l = this.props.exit,
          o = this.getTimeouts(),
          s = this.props.nodeRef ? void 0 : Dn.findDOMNode(this);
        if (!l || Za.disabled) {
          this.safeSetState({ status: Tt }, function () {
            i.props.onExited(s);
          });
          return;
        }
        this.props.onExit(s),
          this.safeSetState({ status: cr }, function () {
            i.props.onExiting(s),
              i.onTransitionEnd(o.exit, function () {
                i.safeSetState({ status: Tt }, function () {
                  i.props.onExited(s);
                });
              });
          });
      }),
      (n.cancelNextCallback = function () {
        this.nextCallback !== null &&
          (this.nextCallback.cancel(), (this.nextCallback = null));
      }),
      (n.safeSetState = function (i, l) {
        (l = this.setNextCallback(l)), this.setState(i, l);
      }),
      (n.setNextCallback = function (i) {
        var l = this,
          o = !0;
        return (
          (this.nextCallback = function (s) {
            o && ((o = !1), (l.nextCallback = null), i(s));
          }),
          (this.nextCallback.cancel = function () {
            o = !1;
          }),
          this.nextCallback
        );
      }),
      (n.onTransitionEnd = function (i, l) {
        this.setNextCallback(l);
        var o = this.props.nodeRef
            ? this.props.nodeRef.current
            : Dn.findDOMNode(this),
          s = i == null && !this.props.addEndListener;
        if (!o || s) {
          setTimeout(this.nextCallback, 0);
          return;
        }
        if (this.props.addEndListener) {
          var a = this.props.nodeRef
              ? [this.nextCallback]
              : [o, this.nextCallback],
            u = a[0],
            m = a[1];
          this.props.addEndListener(u, m);
        }
        i != null && setTimeout(this.nextCallback, i);
      }),
      (n.render = function () {
        var i = this.state.status;
        if (i === Fn) return null;
        var l = this.props,
          o = l.children;
        l.in,
          l.mountOnEnter,
          l.unmountOnExit,
          l.appear,
          l.enter,
          l.exit,
          l.timeout,
          l.addEndListener,
          l.onEnter,
          l.onEntering,
          l.onEntered,
          l.onExit,
          l.onExiting,
          l.onExited,
          l.nodeRef;
        var s = zd(l, [
          "children",
          "in",
          "mountOnEnter",
          "unmountOnExit",
          "appear",
          "enter",
          "exit",
          "timeout",
          "addEndListener",
          "onEnter",
          "onEntering",
          "onEntered",
          "onExit",
          "onExiting",
          "onExited",
          "nodeRef",
        ]);
        return D.createElement(
          js.Provider,
          { value: null },
          typeof o == "function"
            ? o(i, s)
            : D.cloneElement(D.Children.only(o), s)
        );
      }),
      t
    );
  })(D.Component);
it.contextType = js;
it.propTypes = {};
function Wt() {}
it.defaultProps = {
  in: !1,
  mountOnEnter: !1,
  unmountOnExit: !1,
  appear: !1,
  enter: !0,
  exit: !0,
  onEnter: Wt,
  onEntering: Wt,
  onEntered: Wt,
  onExit: Wt,
  onExiting: Wt,
  onExited: Wt,
};
it.UNMOUNTED = Fn;
it.EXITED = Tt;
it.ENTERING = Oe;
it.ENTERED = Qe;
it.EXITING = cr;
var t1 = function (t, n) {
    return (
      t &&
      n &&
      n.split(" ").forEach(function (r) {
        return bm(t, r);
      })
    );
  },
  Nl = function (t, n) {
    return (
      t &&
      n &&
      n.split(" ").forEach(function (r) {
        return e1(t, r);
      })
    );
  },
  Ns = (function (e) {
    Cs(t, e);
    function t() {
      for (var r, i = arguments.length, l = new Array(i), o = 0; o < i; o++)
        l[o] = arguments[o];
      return (
        (r = e.call.apply(e, [this].concat(l)) || this),
        (r.appliedClasses = { appear: {}, enter: {}, exit: {} }),
        (r.onEnter = function (s, a) {
          var u = r.resolveArguments(s, a),
            m = u[0],
            p = u[1];
          r.removeClasses(m, "exit"),
            r.addClass(m, p ? "appear" : "enter", "base"),
            r.props.onEnter && r.props.onEnter(s, a);
        }),
        (r.onEntering = function (s, a) {
          var u = r.resolveArguments(s, a),
            m = u[0],
            p = u[1],
            v = p ? "appear" : "enter";
          r.addClass(m, v, "active"),
            r.props.onEntering && r.props.onEntering(s, a);
        }),
        (r.onEntered = function (s, a) {
          var u = r.resolveArguments(s, a),
            m = u[0],
            p = u[1],
            v = p ? "appear" : "enter";
          r.removeClasses(m, v),
            r.addClass(m, v, "done"),
            r.props.onEntered && r.props.onEntered(s, a);
        }),
        (r.onExit = function (s) {
          var a = r.resolveArguments(s),
            u = a[0];
          r.removeClasses(u, "appear"),
            r.removeClasses(u, "enter"),
            r.addClass(u, "exit", "base"),
            r.props.onExit && r.props.onExit(s);
        }),
        (r.onExiting = function (s) {
          var a = r.resolveArguments(s),
            u = a[0];
          r.addClass(u, "exit", "active"),
            r.props.onExiting && r.props.onExiting(s);
        }),
        (r.onExited = function (s) {
          var a = r.resolveArguments(s),
            u = a[0];
          r.removeClasses(u, "exit"),
            r.addClass(u, "exit", "done"),
            r.props.onExited && r.props.onExited(s);
        }),
        (r.resolveArguments = function (s, a) {
          return r.props.nodeRef ? [r.props.nodeRef.current, s] : [s, a];
        }),
        (r.getClassNames = function (s) {
          var a = r.props.classNames,
            u = typeof a == "string",
            m = u && a ? a + "-" : "",
            p = u ? "" + m + s : a[s],
            v = u ? p + "-active" : a[s + "Active"],
            g = u ? p + "-done" : a[s + "Done"];
          return { baseClassName: p, activeClassName: v, doneClassName: g };
        }),
        r
      );
    }
    var n = t.prototype;
    return (
      (n.addClass = function (i, l, o) {
        var s = this.getClassNames(l)[o + "ClassName"],
          a = this.getClassNames("enter"),
          u = a.doneClassName;
        l === "appear" && o === "done" && u && (s += " " + u),
          o === "active" && i && Rd(i),
          s && ((this.appliedClasses[l][o] = s), t1(i, s));
      }),
      (n.removeClasses = function (i, l) {
        var o = this.appliedClasses[l],
          s = o.base,
          a = o.active,
          u = o.done;
        (this.appliedClasses[l] = {}),
          s && Nl(i, s),
          a && Nl(i, a),
          u && Nl(i, u);
      }),
      (n.render = function () {
        var i = this.props;
        i.classNames;
        var l = zd(i, ["classNames"]);
        return D.createElement(
          it,
          ko({}, l, {
            onEnter: this.onEnter,
            onEntered: this.onEntered,
            onEntering: this.onEntering,
            onExit: this.onExit,
            onExiting: this.onExiting,
            onExited: this.onExited,
          })
        );
      }),
      t
    );
  })(D.Component);
Ns.defaultProps = { classNames: "" };
Ns.propTypes = {};
var Fr, Vr;
function n1(e, t) {
  return !(
    e === t ||
    (D.isValidElement(e) &&
      D.isValidElement(t) &&
      e.key != null &&
      e.key === t.key)
  );
}
var yn = { out: "out-in", in: "in-out" },
  Pi = function (t, n, r) {
    return function () {
      var i;
      t.props[n] && (i = t.props)[n].apply(i, arguments), r();
    };
  },
  r1 =
    ((Fr = {}),
    (Fr[yn.out] = function (e) {
      var t = e.current,
        n = e.changeState;
      return D.cloneElement(t, {
        in: !1,
        onExited: Pi(t, "onExited", function () {
          n(Oe, null);
        }),
      });
    }),
    (Fr[yn.in] = function (e) {
      var t = e.current,
        n = e.changeState,
        r = e.children;
      return [
        t,
        D.cloneElement(r, {
          in: !0,
          onEntered: Pi(r, "onEntered", function () {
            n(Oe);
          }),
        }),
      ];
    }),
    Fr),
  i1 =
    ((Vr = {}),
    (Vr[yn.out] = function (e) {
      var t = e.children,
        n = e.changeState;
      return D.cloneElement(t, {
        in: !0,
        onEntered: Pi(t, "onEntered", function () {
          n(Qe, D.cloneElement(t, { in: !0 }));
        }),
      });
    }),
    (Vr[yn.in] = function (e) {
      var t = e.current,
        n = e.children,
        r = e.changeState;
      return [
        D.cloneElement(t, {
          in: !1,
          onExited: Pi(t, "onExited", function () {
            r(Qe, D.cloneElement(n, { in: !0 }));
          }),
        }),
        D.cloneElement(n, { in: !0 }),
      ];
    }),
    Vr),
  Ps = (function (e) {
    Cs(t, e);
    function t() {
      for (var r, i = arguments.length, l = new Array(i), o = 0; o < i; o++)
        l[o] = arguments[o];
      return (
        (r = e.call.apply(e, [this].concat(l)) || this),
        (r.state = { status: Qe, current: null }),
        (r.appeared = !1),
        (r.changeState = function (s, a) {
          a === void 0 && (a = r.state.current),
            r.setState({ status: s, current: a });
        }),
        r
      );
    }
    var n = t.prototype;
    return (
      (n.componentDidMount = function () {
        this.appeared = !0;
      }),
      (t.getDerivedStateFromProps = function (i, l) {
        return i.children == null
          ? { current: null }
          : l.status === Oe && i.mode === yn.in
          ? { status: Oe }
          : l.current && n1(l.current, i.children)
          ? { status: cr }
          : { current: D.cloneElement(i.children, { in: !0 }) };
      }),
      (n.render = function () {
        var i = this.props,
          l = i.children,
          o = i.mode,
          s = this.state,
          a = s.status,
          u = s.current,
          m = {
            children: l,
            current: u,
            changeState: this.changeState,
            status: a,
          },
          p;
        switch (a) {
          case Oe:
            p = i1[o](m);
            break;
          case cr:
            p = r1[o](m);
            break;
          case Qe:
            p = u;
        }
        return D.createElement(
          js.Provider,
          { value: { isMounting: !this.appeared } },
          p
        );
      }),
      t
    );
  })(D.Component);
Ps.propTypes = {};
Ps.defaultProps = { mode: yn.out };
function Pl(e) {
  return ie({
    tag: "svg",
    attr: { viewBox: "0 0 512 512" },
    child: [
      {
        tag: "path",
        attr: {
          fill: "none",
          strokeMiterlimit: "10",
          strokeWidth: "32",
          d: "M451 374c-15.88-16-54.34-39.35-73-48.76-24.3-12.24-26.3-13.24-45.4.95-12.74 9.47-21.21 17.93-36.12 14.75s-47.31-21.11-75.68-49.39-47.34-61.62-50.53-76.48 5.41-23.23 14.79-36c13.22-18 12.22-21 .92-45.3-8.81-18.9-32.84-57-48.9-72.8C119.9 44 119.9 47 108.83 51.6A160.15 160.15 0 0 0 83 65.37C67 76 58.12 84.83 51.91 98.1s-9 44.38 23.07 102.64 54.57 88.05 101.14 134.49S258.5 406.64 310.85 436c64.76 36.27 89.6 29.2 102.91 23s22.18-15 32.83-31a159.09 159.09 0 0 0 13.8-25.8C465 391.17 468 391.17 451 374z",
        },
        child: [],
      },
    ],
  })(e);
}
function l1(e) {
  return ie({
    tag: "svg",
    attr: { viewBox: "0 0 512 512" },
    child: [
      {
        tag: "path",
        attr: {
          fill: "none",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: "32",
          d: "M368 368 144 144m224 0L144 368",
        },
        child: [],
      },
    ],
  })(e);
}
function Ja(e) {
  return ie({
    tag: "svg",
    attr: { viewBox: "0 0 512 512" },
    child: [
      {
        tag: "path",
        attr: {
          fill: "none",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: "32",
          d: "M80 212v236a16 16 0 0 0 16 16h96V328a24 24 0 0 1 24-24h80a24 24 0 0 1 24 24v136h96a16 16 0 0 0 16-16V212",
        },
        child: [],
      },
      {
        tag: "path",
        attr: {
          fill: "none",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: "32",
          d: "M480 256 266.89 52c-5-5.28-16.69-5.34-21.78 0L32 256m368-77V64h-48v69",
        },
        child: [],
      },
    ],
  })(e);
}
function qa(e) {
  return ie({
    tag: "svg",
    attr: { viewBox: "0 0 512 512" },
    child: [
      {
        tag: "path",
        attr: {
          fill: "none",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: "32",
          d: "M256 48c-79.5 0-144 61.39-144 137 0 87 96 224.87 131.25 272.49a15.77 15.77 0 0 0 25.5 0C304 409.89 400 272.07 400 185c0-75.61-64.5-137-144-137z",
        },
        child: [],
      },
      {
        tag: "circle",
        attr: {
          cx: "256",
          cy: "192",
          r: "48",
          fill: "none",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: "32",
        },
        child: [],
      },
    ],
  })(e);
}
function ba(e) {
  return ie({
    tag: "svg",
    attr: { viewBox: "0 0 24 24" },
    child: [
      {
        tag: "g",
        attr: { id: "Clock_2" },
        child: [
          {
            tag: "g",
            attr: {},
            child: [
              {
                tag: "path",
                attr: {
                  d: "M12,21.933A9.933,9.933,0,1,1,21.933,12,9.944,9.944,0,0,1,12,21.933ZM12,3.067A8.933,8.933,0,1,0,20.933,12,8.943,8.943,0,0,0,12,3.067Z",
                },
                child: [],
              },
              {
                tag: "path",
                attr: {
                  d: "M18,12.5H12a.429.429,0,0,1-.34-.14c-.01,0-.01-.01-.02-.02A.429.429,0,0,1,11.5,12V6a.5.5,0,0,1,1,0v5.5H18A.5.5,0,0,1,18,12.5Z",
                },
                child: [],
              },
            ],
          },
        ],
      },
    ],
  })(e);
}
function eu(e) {
  return ie({
    tag: "svg",
    attr: { viewBox: "0 0 256 256", fill: "currentColor" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M128,20A108,108,0,1,0,236,128,108.12,108.12,0,0,0,128,20Zm0,192a84,84,0,1,1,84-84A84.09,84.09,0,0,1,128,212Zm-12-80V80a12,12,0,0,1,24,0v52a12,12,0,0,1-24,0Zm28,40a16,16,0,1,1-16-16A16,16,0,0,1,144,172Z",
        },
        child: [],
      },
    ],
  })(e);
}
function tu(e) {
  return ie({
    tag: "svg",
    attr: { viewBox: "0 0 24 24", fill: "currentColor" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M17 9.2L22.2133 5.55071C22.4395 5.39235 22.7513 5.44737 22.9096 5.6736C22.9684 5.75764 23 5.85774 23 5.96033V18.0397C23 18.3158 22.7761 18.5397 22.5 18.5397C22.3974 18.5397 22.2973 18.5081 22.2133 18.4493L17 14.8V19C17 19.5523 16.5523 20 16 20H2C1.44772 20 1 19.5523 1 19V5C1 4.44772 1.44772 4 2 4H16C16.5523 4 17 4.44772 17 5V9.2ZM17 12.3587L21 15.1587V8.84131L17 11.6413V12.3587ZM3 6V18H15V6H3ZM5 8H7V10H5V8Z",
        },
        child: [],
      },
    ],
  })(e);
}
function o1(e) {
  return ie({
    tag: "svg",
    attr: { viewBox: "0 0 512 512" },
    child: [
      {
        tag: "path",
        attr: { d: "M376 211H256V16L136 301h120v195z" },
        child: [],
      },
    ],
  })(e);
}
function s1(e) {
  return ie({
    tag: "svg",
    attr: { viewBox: "0 0 24 24" },
    child: [
      { tag: "path", attr: { fill: "none", d: "M0 0h24v24H0z" }, child: [] },
      { tag: "path", attr: { d: "M10 8v6l4.7 2.9.8-1.2-4-2.4V8z" }, child: [] },
      {
        tag: "path",
        attr: {
          d: "M17.92 12A6.957 6.957 0 0 1 11 20c-3.9 0-7-3.1-7-7s3.1-7 7-7c.7 0 1.37.1 2 .29V4.23c-.64-.15-1.31-.23-2-.23-5 0-9 4-9 9s4 9 9 9a8.963 8.963 0 0 0 8.94-10h-2.02z",
        },
        child: [],
      },
      { tag: "path", attr: { d: "M20 5V2h-2v3h-3v2h3v3h2V7h3V5z" }, child: [] },
    ],
  })(e);
}
function a1(e) {
  return ie({
    tag: "svg",
    attr: { viewBox: "0 0 24 24" },
    child: [
      { tag: "path", attr: { fill: "none", d: "M0 0h24v24H0z" }, child: [] },
      {
        tag: "path",
        attr: {
          d: "M15.11 12.45 14 10.24l-3.11 6.21c-.16.34-.51.55-.89.55s-.73-.21-.89-.55L7.38 13H2v5c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2v-5h-6c-.38 0-.73-.21-.89-.55z",
        },
        child: [],
      },
      {
        tag: "path",
        attr: {
          d: "M20 4H4c-1.1 0-2 .9-2 2v5h6c.38 0 .73.21.89.55L10 13.76l3.11-6.21c.34-.68 1.45-.68 1.79 0L16.62 11H22V6c0-1.1-.9-2-2-2z",
        },
        child: [],
      },
    ],
  })(e);
}
function u1(e) {
  return ie({
    tag: "svg",
    attr: { viewBox: "0 0 24 24" },
    child: [
      { tag: "path", attr: { fill: "none", d: "M0 0h24v24H0z" }, child: [] },
      {
        tag: "path",
        attr: {
          d: "M10.5 13H8v-3h2.5V7.5h3V10H16v3h-2.5v2.5h-3V13zM12 2 4 5v6.09c0 5.05 3.41 9.76 8 10.91 4.59-1.15 8-5.86 8-10.91V5l-8-3zm6 9.09c0 4-2.55 7.7-6 8.83-3.45-1.13-6-4.82-6-8.83v-4.7l6-2.25 6 2.25v4.7z",
        },
        child: [],
      },
    ],
  })(e);
}
function c1(e) {
  return ie({
    tag: "svg",
    attr: {
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round",
    },
    child: [
      {
        tag: "path",
        attr: {
          d: "M20 3h-2a2 2 0 0 0 -2 2v14a2 2 0 0 0 2 2h2a2 2 0 0 0 2 -2v-14a2 2 0 0 0 -2 -2z",
        },
        child: [],
      },
      {
        tag: "path",
        attr: { d: "M16 4h-11a3 3 0 0 0 -3 3v10a3 3 0 0 0 3 3h11" },
        child: [],
      },
      { tag: "path", attr: { d: "M12 8h-6v3h6z" }, child: [] },
      { tag: "path", attr: { d: "M12 14v.01" }, child: [] },
      { tag: "path", attr: { d: "M9 14v.01" }, child: [] },
      { tag: "path", attr: { d: "M6 14v.01" }, child: [] },
      { tag: "path", attr: { d: "M12 17v.01" }, child: [] },
      { tag: "path", attr: { d: "M9 17v.01" }, child: [] },
      { tag: "path", attr: { d: "M6 17v.01" }, child: [] },
    ],
  })(e);
}
function d1(e) {
  return ie({
    tag: "svg",
    attr: { viewBox: "0 0 512 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z",
        },
        child: [],
      },
    ],
  })(e);
}
function f1(e) {
  return ie({
    tag: "svg",
    attr: { viewBox: "0 0 448 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z",
        },
        child: [],
      },
    ],
  })(e);
}
function p1(e) {
  return ie({
    tag: "svg",
    attr: { viewBox: "0 0 448 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z",
        },
        child: [],
      },
    ],
  })(e);
}
function h1() {
  const [e, t] = O.useState("location1"),
    n = () =>
      c.jsxs("div", {
        className: "loc2-container",
        children: [
          c.jsxs("div", {
            className: "tele",
            children: [
              c.jsxs("h1", {
                children: [
                  c.jsx(tu, { className: "feat-icon section-icon" }),
                  " Telemedicine Service",
                ],
              }),
              c.jsxs("p", {
                className: "subtitle",
                children: [
                  "You can book an appointment with Dr. Abd Al Sattar through our video call service ",
                  c.jsx("span", {
                    className: "cus-span",
                    children: "(Telemedicine)",
                  }),
                  ".",
                ],
              }),
              c.jsxs("p", {
                className: "sub-paragraph",
                children: [
                  "Our services include clinical examination, ECG, and echocardiography. Telemedicine is an approved method by the ",
                  c.jsx("a", {
                    href: "https://www.heart.org/en/professional/telehealth",
                    target: "_blank",
                    children: c.jsx("span", {
                      className: "cus-span link-span",
                      children: "American Heart Association",
                    }),
                  }),
                  " to help you follow your treatment plan.",
                ],
              }),
              c.jsx("br", {}),
              c.jsx("a", {
                href: "https://www.facebook.com/share/p/QEt9wGVNbnzZTVaw/",
                target: "_blank",
                className: "read-btn",
                children: "Read more",
              }),
            ],
          }),
          c.jsx("hr", {}),
          c.jsxs("div", {
            className: "home",
            children: [
              c.jsxs("h1", {
                children: [
                  c.jsx(Ja, { className: "feat-icon section-icon" }),
                  " Home Visit Service",
                ],
              }),
              c.jsx("p", {
                className: "subtitle",
                children:
                  "Dr. Abd Al Sattar also offers home visits for those who prefer the comfort and privacy of their own home for medical consultations and check-ups.",
              }),
              c.jsx("p", {
                className: "sub-paragraph",
                children:
                  "The home visit service includes a full clinical examination, ECG, echocardiography, and other necessary tests to ensure you receive the best care possible without leaving your home. With the convenience of home visits, following up on your treatment plan has never been easier.",
              }),
            ],
          }),
          c.jsx("hr", {}),
          c.jsxs("div", {
            className: "contact-icons",
            children: [
              c.jsx("a", {
                target: "_blank",
                href: `https://api.whatsapp.com/send?phone=%2B201143410534&context=ARBoWH2bcXRLE46eap1ChI_\r
        JrR_F4ildQ9NVo4FJNRSVVu042bjoLfU_HTuC_zyOVqYLX1eECUNYu4cQPOEjSFtHnuEHDTbpyFLXjLf_uMTsoHFP1zq3pAPiuGkMmZ9LWPIZPOs8bPkYI_rqx-Ipw6qnxQ`,
                children: c.jsx(f1, { className: "contact-icon whatsapp" }),
              }),
              c.jsx("a", {
                href: "tel:+2010043410534",
                children: c.jsx(Pl, { className: "contact-icon call" }),
              }),
              c.jsx("a", {
                target: "_blank",
                href: "https://www.facebook.com/dr.abdelsattarnasr",
                children: c.jsx(d1, { className: "contact-icon facebook" }),
              }),
            ],
          }),
        ],
      });
  return c.jsx(c.Fragment, {
    children: c.jsxs("div", {
      className: "locations-container",
      children: [
        c.jsxs("div", {
          className: "title-banner",
          children: [
            c.jsxs("div", {
              className: "content",
              children: [
                c.jsx("div", { className: "title", children: "Locations" }),
                c.jsx("div", {
                  className: "paragraph",
                  children:
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore illo impedit voluptatum cupiditate asperiores iusto sapiente nesciunt corporis tenetur rerum!",
                }),
              ],
            }),
            c.jsxs("div", {
              className: "features",
              children: [
                c.jsx(tu, { className: "feat-icon" }),
                c.jsx(Ja, { className: "feat-icon" }),
                c.jsx(o1, { className: "feat-icon" }),
                c.jsx(u1, { className: "feat-icon" }),
                c.jsx(s1, { className: "feat-icon" }),
                c.jsx(a1, { className: "feat-icon" }),
              ],
            }),
          ],
        }),
        c.jsxs("div", {
          className: "container",
          children: [
            c.jsxs("div", {
              className: "button-group",
              children: [
                c.jsx("button", {
                  className: `location-button ${
                    e === "location2" ? "active" : ""
                  }`,
                  onClick: () => t("location2"),
                  children: "Telemedicine - Home Visit",
                }),
                c.jsx("button", {
                  className: `location-button ${
                    e === "location1" ? "active" : ""
                  }`,
                  onClick: () => t("location1"),
                  children: "كفر شكر, القليوبية",
                }),
                c.jsx("button", {
                  className: `location-button ${
                    e === "location3" ? "active" : ""
                  }`,
                  onClick: () => t("location3"),
                  children: "كورنيش النيل, القاهرة",
                }),
              ],
            }),
            c.jsx(Ps, {
              mode: "out-in",
              children: c.jsx(
                Ns,
                {
                  timeout: 300,
                  classNames: "info-fade",
                  children: c.jsxs("div", {
                    className: "location-info",
                    children: [
                      e === "location1" &&
                        c.jsxs("div", {
                          className: "info-text",
                          dir: "rtl",
                          children: [
                            c.jsx("h2", { children: "كفر شكر, القليوبية" }),
                            c.jsxs("p", {
                              children: [
                                c.jsx(qa, { className: "icon" }),
                                " مستشفى كيان التخصصي - طريق المنصورة بنها - اسنيت - بجوار مسجد الشعراوي",
                              ],
                            }),
                            c.jsxs("p", {
                              children: [
                                c.jsx(Pl, { className: "icon" }),
                                " 201143818340+",
                              ],
                            }),
                            c.jsxs("p", {
                              children: [
                                c.jsx(ba, { className: "icon" }),
                                " يوميا ٩ مساء ما عدا الأربعاء",
                              ],
                            }),
                            c.jsxs("p", {
                              children: [
                                c.jsx(eu, { className: "icon warn" }),
                                " ‎مع مراعاة المتابعة مع سكرتيرة العيادة يوم الاحد لاحتمالية تأخير العيادة نظرا لعمليات الطبيب",
                              ],
                            }),
                            c.jsx("hr", { className: "divider" }),
                            c.jsxs("div", {
                              className: "info-note",
                              children: [
                                c.jsx("h5", {
                                  children: "عيادة الموجات الصوتية على القلب",
                                }),
                                c.jsx("h6", {
                                  children: "مركز أ. د. حمادة خاطر للأشعة",
                                }),
                                c.jsx("p", {
                                  className: "paragprah",
                                  children:
                                    "متواجد يومياً ما عدا الأربعاء بحجز مسبق",
                                }),
                                c.jsxs("p", {
                                  children: [
                                    c.jsx(c1, { className: "icon" }),
                                    " 0132517017",
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                      e === "location2" && c.jsx(n, {}),
                      e === "location3" &&
                        c.jsxs("div", {
                          className: "info-text",
                          dir: "rtl",
                          children: [
                            c.jsx("h2", { children: "كورنيش النيل, القاهرة" }),
                            c.jsxs("p", {
                              children: [
                                c.jsx(qa, { className: "icon" }),
                                " ‎١٢ أبراج أغاخان - بجوار معهد ناصر - أمام ماكدونالدز ولابوار",
                              ],
                            }),
                            c.jsxs("p", {
                              children: [
                                c.jsx(Pl, { className: "icon" }),
                                " 201006730022+",
                              ],
                            }),
                            c.jsxs("p", {
                              children: [
                                c.jsx(ba, { className: "icon" }),
                                " أحد وثلاثاء وخميس - من الساعة 3 مساء",
                              ],
                            }),
                            c.jsxs("p", {
                              children: [
                                c.jsx(eu, { className: "icon warn" }),
                                " ‎مع مراعاة المتابعة مع سكرتيرة العيادة",
                              ],
                            }),
                          ],
                        }),
                      e !== "location2" &&
                        c.jsx("div", {
                          className: "map-container",
                          children: c.jsx("iframe", {
                            src:
                              e === "location1"
                                ? "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3893.2462739316984!2d31.242094675572297!3d30.526786974684224!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzDCsDMxJzM2LjQiTiAzMcKwMTQnNDAuOCJF!5e1!3m2!1sen!2seg!4v1725347939856!5m2!1sen!2seg"
                                : e === "location3"
                                ? "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3910.2027116500285!2d31.238620875555945!3d30.100911574895125!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzDCsDA2JzAzLjMiTiAzMcKwMTQnMjguMyJF!5e1!3m2!1sen!2seg!4v1725347882583!5m2!1sen!2seg"
                                : "",
                            allowFullScreen: "",
                            "aria-hidden": "false",
                            tabIndex: "0",
                          }),
                        }),
                    ],
                  }),
                },
                e
              ),
            }),
          ],
        }),
      ],
    }),
  });
}
function m1() {
  return c.jsx(c.Fragment, { children: c.jsx(h1, {}) });
}
function v1() {
  return c.jsx("div", { children: "Book" });
}
function g1() {
  return c.jsx(c.Fragment, { children: c.jsx(v1, {}) });
}
const Md = "/assets/logo_main-BtwYLvwz.png";
function y1() {
  const [e, t] = O.useState("EN"),
    [n, r] = O.useState(!1),
    i = () => {
      t((o) => (o === "EN" ? "AR" : "EN"));
    },
    l = () => {
      r(!n);
    };
  return c.jsxs("header", {
    className: "bg-white",
    children: [
      c.jsxs("div", {
        className:
          "max-w-[100%] m-[0 auto] p-[0 1rem] flex h-[4rem] justify-around items-center header-container",
        children: [
          c.jsx("div", {
            children: c.jsx("a", {
              href: "/",
              children: c.jsx("img", {
                src: Md,
                className: "h-[4rem] logo-img",
                alt: "Logo",
              }),
            }),
          }),
          c.jsx("nav", {
            className: `navbar ${n ? "open" : ""}`,
            children: c.jsxs("ul", {
              className:
                "flex items-center no-underline list-none gap-[1.8rem]",
              children: [
                c.jsx("li", {
                  children: c.jsx("a", {
                    className:
                      "text-black hover:text-[#136c9d] text-[1.1rem] transition duration-[0.3s] no-underline",
                    href: "/",
                    children: " Home ",
                  }),
                }),
                c.jsx("li", {
                  children: c.jsx("a", {
                    className:
                      "text-black hover:text-[#136c9d] text-[1.1rem] transition duration-[0.3s] no-underline",
                    href: "/#certificates",
                    children: " Certificates ",
                  }),
                }),
                c.jsx("li", {
                  children: c.jsx("a", {
                    className:
                      "text-black hover:text-[#136c9d] text-[1.1rem] transition duration-[0.3s] no-underline",
                    href: "#testmonials",
                    children: " Testmonials ",
                  }),
                }),
                c.jsx("li", {
                  children: c.jsx("a", {
                    className:
                      "text-black hover:text-[#136c9d] text-[1.1rem] transition duration-[0.3s] no-underline",
                    href: "/locations",
                    children: " Locations ",
                  }),
                }),
                c.jsx("li", {
                  children: c.jsx("a", {
                    className:
                      "text-black hover:text-[#136c9d] text-[1.1rem] transition duration-[0.3s] no-underline",
                    href: "/book",
                    children: " Book ",
                  }),
                }),
              ],
            }),
          }),
          c.jsxs("div", {
            className: "flex items-center right-section",
            children: [
              c.jsxs("div", {
                className: "flex items-center lang-btn",
                children: [
                  c.jsx("span", {
                    onClick: i,
                    className:
                      "cursor-pointer text-[#136c9d] text-[0.875rem] mr-2",
                    children: e,
                  }),
                  c.jsx("button", {
                    onClick: i,
                    className: "bg-transparent border-none cursor-pointer",
                    children: c.jsx("i", {
                      className: "fa-solid fa-globe text-[#136c9d]",
                    }),
                  }),
                ],
              }),
              c.jsx("div", {
                className: "z-10 hidden mr-3 text-xl mobile-menu-btn",
                children: n
                  ? c.jsx(l1, {
                      onClick: l,
                      className: "text-[#136c9d] cursor-pointer",
                    })
                  : c.jsx(p1, {
                      onClick: l,
                      className: "text-[#136c9d] cursor-pointer",
                    }),
              }),
            ],
          }),
        ],
      }),
      c.jsx("nav", {
        className: `z-10 mobile-navbar ${n ? "open" : "closed"}`,
        children: c.jsxs("ul", {
          className: "flex flex-col items-center gap-4 no-underline list-none",
          children: [
            c.jsx("li", {
              children: c.jsx("a", {
                className:
                  "text-black text-[0.875rem] transition duration-[0.3s] no-underline",
                href: "#",
                children: " Home ",
              }),
            }),
            c.jsx("li", {
              children: c.jsx("a", {
                className:
                  "text-black text-[0.875rem] transition duration-[0.3s] no-underline",
                href: "#certificates",
                children: " Certificates ",
              }),
            }),
            c.jsx("li", {
              children: c.jsx("a", {
                className:
                  "text-black text-[0.875rem] transition duration-[0.3s] no-underline",
                href: "#testmonials",
                children: " Testmonials ",
              }),
            }),
            c.jsx("li", {
              children: c.jsx("a", {
                className:
                  "text-black text-[0.875rem] transition duration-[0.3s] no-underline",
                href: "#",
                children: " Locations ",
              }),
            }),
            c.jsx("li", {
              children: c.jsx("a", {
                className:
                  "text-black text-[0.875rem] transition duration-[0.3s] no-underline",
                href: "#",
                children: " Book ",
              }),
            }),
          ],
        }),
      }),
    ],
  });
}
function x1() {
  return c.jsx("footer", {
    className: "bg-gray-100",
    children: c.jsxs("div", {
      className: "max-w-5xl px-4 py-16 mx-auto sm:px-6 lg:px-8",
      children: [
        c.jsx("div", {
          className: "flex justify-center text-teal-600",
          children: c.jsx("img", { src: Md, alt: "", className: "h-[6rem]" }),
        }),
        c.jsx("p", {
          className:
            "max-w-md mx-auto mt-6 leading-relaxed text-center text-gray-500",
          children:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt consequuntur amet culpa cum itaque neque.",
        }),
        c.jsxs("ul", {
          className:
            "flex flex-wrap justify-center gap-6 mt-12 md:gap-8 lg:gap-12",
          children: [
            c.jsx("li", {
              children: c.jsx("a", {
                className: "text-gray-700 transition hover:text-gray-700/75",
                href: "#about",
                children: " About ",
              }),
            }),
            c.jsx("li", {
              children: c.jsx("a", {
                className: "text-gray-700 transition hover:text-gray-700/75",
                href: "#certificates",
                children: " Certificates ",
              }),
            }),
            c.jsx("li", {
              children: c.jsx("a", {
                className: "text-gray-700 transition hover:text-gray-700/75",
                href: "#testmonials",
                children: " Testmonials ",
              }),
            }),
            c.jsx("li", {
              children: c.jsx("a", {
                className: "text-gray-700 transition hover:text-gray-700/75",
                href: "/book",
                children: " Book ",
              }),
            }),
          ],
        }),
        c.jsxs("ul", {
          className: "flex justify-center gap-6 mt-12 md:gap-8",
          children: [
            c.jsx("li", {
              children: c.jsxs("a", {
                href: "#",
                rel: "noreferrer",
                target: "_blank",
                className: "text-gray-700 transition hover:text-gray-700/75",
                children: [
                  c.jsx("span", { className: "sr-only", children: "Facebook" }),
                  c.jsx("svg", {
                    className: "size-6",
                    fill: "currentColor",
                    viewBox: "0 0 24 24",
                    "aria-hidden": "true",
                    children: c.jsx("path", {
                      fillRule: "evenodd",
                      d: "M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z",
                      clipRule: "evenodd",
                    }),
                  }),
                ],
              }),
            }),
            c.jsx("li", {
              children: c.jsxs("a", {
                href: "#",
                rel: "noreferrer",
                target: "_blank",
                className: "text-gray-700 transition hover:text-gray-700/75",
                children: [
                  c.jsx("span", {
                    className: "sr-only",
                    children: "Instagram",
                  }),
                  c.jsx("svg", {
                    className: "size-6",
                    fill: "currentColor",
                    viewBox: "0 0 24 24",
                    "aria-hidden": "true",
                    children: c.jsx("path", {
                      fillRule: "evenodd",
                      d: "M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z",
                      clipRule: "evenodd",
                    }),
                  }),
                ],
              }),
            }),
            c.jsx("li", {
              children: c.jsxs("a", {
                href: "#",
                rel: "noreferrer",
                target: "_blank",
                className: "text-gray-700 transition hover:text-gray-700/75",
                children: [
                  c.jsx("span", { className: "sr-only", children: "Twitter" }),
                  c.jsx("svg", {
                    className: "size-6",
                    fill: "currentColor",
                    viewBox: "0 0 24 24",
                    "aria-hidden": "true",
                    children: c.jsx("path", {
                      d: "M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84",
                    }),
                  }),
                ],
              }),
            }),
          ],
        }),
      ],
    }),
  });
}
/**
 * @remix-run/router v1.19.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function _i() {
  return (
    (_i = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    _i.apply(this, arguments)
  );
}
var ft;
(function (e) {
  (e.Pop = "POP"), (e.Push = "PUSH"), (e.Replace = "REPLACE");
})(ft || (ft = {}));
const nu = "popstate";
function w1(e) {
  e === void 0 && (e = {});
  function t(r, i) {
    let { pathname: l, search: o, hash: s } = r.location;
    return jo(
      "",
      { pathname: l, search: o, hash: s },
      (i.state && i.state.usr) || null,
      (i.state && i.state.key) || "default"
    );
  }
  function n(r, i) {
    return typeof i == "string" ? i : Dd(i);
  }
  return E1(t, n, null, e);
}
function xe(e, t) {
  if (e === !1 || e === null || typeof e > "u") throw new Error(t);
}
function Id(e, t) {
  if (!e) {
    typeof console < "u" && console.warn(t);
    try {
      throw new Error(t);
    } catch {}
  }
}
function S1() {
  return Math.random().toString(36).substr(2, 8);
}
function ru(e, t) {
  return { usr: e.state, key: e.key, idx: t };
}
function jo(e, t, n, r) {
  return (
    n === void 0 && (n = null),
    _i(
      { pathname: typeof e == "string" ? e : e.pathname, search: "", hash: "" },
      typeof t == "string" ? Gi(t) : t,
      { state: n, key: (t && t.key) || r || S1() }
    )
  );
}
function Dd(e) {
  let { pathname: t = "/", search: n = "", hash: r = "" } = e;
  return (
    n && n !== "?" && (t += n.charAt(0) === "?" ? n : "?" + n),
    r && r !== "#" && (t += r.charAt(0) === "#" ? r : "#" + r),
    t
  );
}
function Gi(e) {
  let t = {};
  if (e) {
    let n = e.indexOf("#");
    n >= 0 && ((t.hash = e.substr(n)), (e = e.substr(0, n)));
    let r = e.indexOf("?");
    r >= 0 && ((t.search = e.substr(r)), (e = e.substr(0, r))),
      e && (t.pathname = e);
  }
  return t;
}
function E1(e, t, n, r) {
  r === void 0 && (r = {});
  let { window: i = document.defaultView, v5Compat: l = !1 } = r,
    o = i.history,
    s = ft.Pop,
    a = null,
    u = m();
  u == null && ((u = 0), o.replaceState(_i({}, o.state, { idx: u }), ""));
  function m() {
    return (o.state || { idx: null }).idx;
  }
  function p() {
    s = ft.Pop;
    let E = m(),
      f = E == null ? null : E - u;
    (u = E), a && a({ action: s, location: w.location, delta: f });
  }
  function v(E, f) {
    s = ft.Push;
    let d = jo(w.location, E, f);
    u = m() + 1;
    let h = ru(d, u),
      y = w.createHref(d);
    try {
      o.pushState(h, "", y);
    } catch (k) {
      if (k instanceof DOMException && k.name === "DataCloneError") throw k;
      i.location.assign(y);
    }
    l && a && a({ action: s, location: w.location, delta: 1 });
  }
  function g(E, f) {
    s = ft.Replace;
    let d = jo(w.location, E, f);
    u = m();
    let h = ru(d, u),
      y = w.createHref(d);
    o.replaceState(h, "", y),
      l && a && a({ action: s, location: w.location, delta: 0 });
  }
  function x(E) {
    let f = i.location.origin !== "null" ? i.location.origin : i.location.href,
      d = typeof E == "string" ? E : Dd(E);
    return (
      (d = d.replace(/ $/, "%20")),
      xe(
        f,
        "No window.location.(origin|href) available to create URL for href: " +
          d
      ),
      new URL(d, f)
    );
  }
  let w = {
    get action() {
      return s;
    },
    get location() {
      return e(i, o);
    },
    listen(E) {
      if (a) throw new Error("A history only accepts one active listener");
      return (
        i.addEventListener(nu, p),
        (a = E),
        () => {
          i.removeEventListener(nu, p), (a = null);
        }
      );
    },
    createHref(E) {
      return t(i, E);
    },
    createURL: x,
    encodeLocation(E) {
      let f = x(E);
      return { pathname: f.pathname, search: f.search, hash: f.hash };
    },
    push: v,
    replace: g,
    go(E) {
      return o.go(E);
    },
  };
  return w;
}
var iu;
(function (e) {
  (e.data = "data"),
    (e.deferred = "deferred"),
    (e.redirect = "redirect"),
    (e.error = "error");
})(iu || (iu = {}));
function k1(e, t, n) {
  return n === void 0 && (n = "/"), C1(e, t, n, !1);
}
function C1(e, t, n, r) {
  let i = typeof t == "string" ? Gi(t) : t,
    l = Ud(i.pathname || "/", n);
  if (l == null) return null;
  let o = Fd(e);
  j1(o);
  let s = null;
  for (let a = 0; s == null && a < o.length; ++a) {
    let u = D1(l);
    s = M1(o[a], u, r);
  }
  return s;
}
function Fd(e, t, n, r) {
  t === void 0 && (t = []), n === void 0 && (n = []), r === void 0 && (r = "");
  let i = (l, o, s) => {
    let a = {
      relativePath: s === void 0 ? l.path || "" : s,
      caseSensitive: l.caseSensitive === !0,
      childrenIndex: o,
      route: l,
    };
    a.relativePath.startsWith("/") &&
      (xe(
        a.relativePath.startsWith(r),
        'Absolute route path "' +
          a.relativePath +
          '" nested under path ' +
          ('"' + r + '" is not valid. An absolute child route path ') +
          "must start with the combined path of all its parent routes."
      ),
      (a.relativePath = a.relativePath.slice(r.length)));
    let u = cn([r, a.relativePath]),
      m = n.concat(a);
    l.children &&
      l.children.length > 0 &&
      (xe(
        l.index !== !0,
        "Index routes must not have child routes. Please remove " +
          ('all child routes from route path "' + u + '".')
      ),
      Fd(l.children, t, m, u)),
      !(l.path == null && !l.index) &&
        t.push({ path: u, score: z1(u, l.index), routesMeta: m });
  };
  return (
    e.forEach((l, o) => {
      var s;
      if (l.path === "" || !((s = l.path) != null && s.includes("?"))) i(l, o);
      else for (let a of Vd(l.path)) i(l, o, a);
    }),
    t
  );
}
function Vd(e) {
  let t = e.split("/");
  if (t.length === 0) return [];
  let [n, ...r] = t,
    i = n.endsWith("?"),
    l = n.replace(/\?$/, "");
  if (r.length === 0) return i ? [l, ""] : [l];
  let o = Vd(r.join("/")),
    s = [];
  return (
    s.push(...o.map((a) => (a === "" ? l : [l, a].join("/")))),
    i && s.push(...o),
    s.map((a) => (e.startsWith("/") && a === "" ? "/" : a))
  );
}
function j1(e) {
  e.sort((t, n) =>
    t.score !== n.score
      ? n.score - t.score
      : R1(
          t.routesMeta.map((r) => r.childrenIndex),
          n.routesMeta.map((r) => r.childrenIndex)
        )
  );
}
const N1 = /^:[\w-]+$/,
  P1 = 3,
  _1 = 2,
  O1 = 1,
  T1 = 10,
  L1 = -2,
  lu = (e) => e === "*";
function z1(e, t) {
  let n = e.split("/"),
    r = n.length;
  return (
    n.some(lu) && (r += L1),
    t && (r += _1),
    n
      .filter((i) => !lu(i))
      .reduce((i, l) => i + (N1.test(l) ? P1 : l === "" ? O1 : T1), r)
  );
}
function R1(e, t) {
  return e.length === t.length && e.slice(0, -1).every((r, i) => r === t[i])
    ? e[e.length - 1] - t[t.length - 1]
    : 0;
}
function M1(e, t, n) {
  let { routesMeta: r } = e,
    i = {},
    l = "/",
    o = [];
  for (let s = 0; s < r.length; ++s) {
    let a = r[s],
      u = s === r.length - 1,
      m = l === "/" ? t : t.slice(l.length) || "/",
      p = ou(
        { path: a.relativePath, caseSensitive: a.caseSensitive, end: u },
        m
      ),
      v = a.route;
    if (
      (!p &&
        u &&
        n &&
        !r[r.length - 1].route.index &&
        (p = ou(
          { path: a.relativePath, caseSensitive: a.caseSensitive, end: !1 },
          m
        )),
      !p)
    )
      return null;
    Object.assign(i, p.params),
      o.push({
        params: i,
        pathname: cn([l, p.pathname]),
        pathnameBase: F1(cn([l, p.pathnameBase])),
        route: v,
      }),
      p.pathnameBase !== "/" && (l = cn([l, p.pathnameBase]));
  }
  return o;
}
function ou(e, t) {
  typeof e == "string" && (e = { path: e, caseSensitive: !1, end: !0 });
  let [n, r] = I1(e.path, e.caseSensitive, e.end),
    i = t.match(n);
  if (!i) return null;
  let l = i[0],
    o = l.replace(/(.)\/+$/, "$1"),
    s = i.slice(1);
  return {
    params: r.reduce((u, m, p) => {
      let { paramName: v, isOptional: g } = m;
      if (v === "*") {
        let w = s[p] || "";
        o = l.slice(0, l.length - w.length).replace(/(.)\/+$/, "$1");
      }
      const x = s[p];
      return (
        g && !x ? (u[v] = void 0) : (u[v] = (x || "").replace(/%2F/g, "/")), u
      );
    }, {}),
    pathname: l,
    pathnameBase: o,
    pattern: e,
  };
}
function I1(e, t, n) {
  t === void 0 && (t = !1),
    n === void 0 && (n = !0),
    Id(
      e === "*" || !e.endsWith("*") || e.endsWith("/*"),
      'Route path "' +
        e +
        '" will be treated as if it were ' +
        ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') +
        "always follow a `/` in the pattern. To get rid of this warning, " +
        ('please change the route path to "' + e.replace(/\*$/, "/*") + '".')
    );
  let r = [],
    i =
      "^" +
      e
        .replace(/\/*\*?$/, "")
        .replace(/^\/*/, "/")
        .replace(/[\\.*+^${}|()[\]]/g, "\\$&")
        .replace(
          /\/:([\w-]+)(\?)?/g,
          (o, s, a) => (
            r.push({ paramName: s, isOptional: a != null }),
            a ? "/?([^\\/]+)?" : "/([^\\/]+)"
          )
        );
  return (
    e.endsWith("*")
      ? (r.push({ paramName: "*" }),
        (i += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
      : n
      ? (i += "\\/*$")
      : e !== "" && e !== "/" && (i += "(?:(?=\\/|$))"),
    [new RegExp(i, t ? void 0 : "i"), r]
  );
}
function D1(e) {
  try {
    return e
      .split("/")
      .map((t) => decodeURIComponent(t).replace(/\//g, "%2F"))
      .join("/");
  } catch (t) {
    return (
      Id(
        !1,
        'The URL path "' +
          e +
          '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' +
          ("encoding (" + t + ").")
      ),
      e
    );
  }
}
function Ud(e, t) {
  if (t === "/") return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
  let n = t.endsWith("/") ? t.length - 1 : t.length,
    r = e.charAt(n);
  return r && r !== "/" ? null : e.slice(n) || "/";
}
const cn = (e) => e.join("/").replace(/\/\/+/g, "/"),
  F1 = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/");
function V1(e) {
  return (
    e != null &&
    typeof e.status == "number" &&
    typeof e.statusText == "string" &&
    typeof e.internal == "boolean" &&
    "data" in e
  );
}
const Ad = ["post", "put", "patch", "delete"];
new Set(Ad);
const U1 = ["get", ...Ad];
new Set(U1);
/**
 * React Router v6.26.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Oi() {
  return (
    (Oi = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Oi.apply(this, arguments)
  );
}
const A1 = O.createContext(null),
  $1 = O.createContext(null),
  $d = O.createContext(null),
  Yi = O.createContext(null),
  Xi = O.createContext({ outlet: null, matches: [], isDataRoute: !1 }),
  Bd = O.createContext(null);
function _s() {
  return O.useContext(Yi) != null;
}
function B1() {
  return _s() || xe(!1), O.useContext(Yi).location;
}
function H1(e, t) {
  return W1(e, t);
}
function W1(e, t, n, r) {
  _s() || xe(!1);
  let { navigator: i } = O.useContext($d),
    { matches: l } = O.useContext(Xi),
    o = l[l.length - 1],
    s = o ? o.params : {};
  o && o.pathname;
  let a = o ? o.pathnameBase : "/";
  o && o.route;
  let u = B1(),
    m;
  if (t) {
    var p;
    let E = typeof t == "string" ? Gi(t) : t;
    a === "/" || ((p = E.pathname) != null && p.startsWith(a)) || xe(!1),
      (m = E);
  } else m = u;
  let v = m.pathname || "/",
    g = v;
  if (a !== "/") {
    let E = a.replace(/^\//, "").split("/");
    g = "/" + v.replace(/^\//, "").split("/").slice(E.length).join("/");
  }
  let x = k1(e, { pathname: g }),
    w = X1(
      x &&
        x.map((E) =>
          Object.assign({}, E, {
            params: Object.assign({}, s, E.params),
            pathname: cn([
              a,
              i.encodeLocation
                ? i.encodeLocation(E.pathname).pathname
                : E.pathname,
            ]),
            pathnameBase:
              E.pathnameBase === "/"
                ? a
                : cn([
                    a,
                    i.encodeLocation
                      ? i.encodeLocation(E.pathnameBase).pathname
                      : E.pathnameBase,
                  ]),
          })
        ),
      l,
      n,
      r
    );
  return t && w
    ? O.createElement(
        Yi.Provider,
        {
          value: {
            location: Oi(
              {
                pathname: "/",
                search: "",
                hash: "",
                state: null,
                key: "default",
              },
              m
            ),
            navigationType: ft.Pop,
          },
        },
        w
      )
    : w;
}
function Q1() {
  let e = b1(),
    t = V1(e)
      ? e.status + " " + e.statusText
      : e instanceof Error
      ? e.message
      : JSON.stringify(e),
    n = e instanceof Error ? e.stack : null,
    i = { padding: "0.5rem", backgroundColor: "rgba(200,200,200, 0.5)" };
  return O.createElement(
    O.Fragment,
    null,
    O.createElement("h2", null, "Unexpected Application Error!"),
    O.createElement("h3", { style: { fontStyle: "italic" } }, t),
    n ? O.createElement("pre", { style: i }, n) : null,
    null
  );
}
const K1 = O.createElement(Q1, null);
class G1 extends O.Component {
  constructor(t) {
    super(t),
      (this.state = {
        location: t.location,
        revalidation: t.revalidation,
        error: t.error,
      });
  }
  static getDerivedStateFromError(t) {
    return { error: t };
  }
  static getDerivedStateFromProps(t, n) {
    return n.location !== t.location ||
      (n.revalidation !== "idle" && t.revalidation === "idle")
      ? { error: t.error, location: t.location, revalidation: t.revalidation }
      : {
          error: t.error !== void 0 ? t.error : n.error,
          location: n.location,
          revalidation: t.revalidation || n.revalidation,
        };
  }
  componentDidCatch(t, n) {
    console.error(
      "React Router caught the following error during render",
      t,
      n
    );
  }
  render() {
    return this.state.error !== void 0
      ? O.createElement(
          Xi.Provider,
          { value: this.props.routeContext },
          O.createElement(Bd.Provider, {
            value: this.state.error,
            children: this.props.component,
          })
        )
      : this.props.children;
  }
}
function Y1(e) {
  let { routeContext: t, match: n, children: r } = e,
    i = O.useContext(A1);
  return (
    i &&
      i.static &&
      i.staticContext &&
      (n.route.errorElement || n.route.ErrorBoundary) &&
      (i.staticContext._deepestRenderedBoundaryId = n.route.id),
    O.createElement(Xi.Provider, { value: t }, r)
  );
}
function X1(e, t, n, r) {
  var i;
  if (
    (t === void 0 && (t = []),
    n === void 0 && (n = null),
    r === void 0 && (r = null),
    e == null)
  ) {
    var l;
    if (!n) return null;
    if (n.errors) e = n.matches;
    else if (
      (l = r) != null &&
      l.v7_partialHydration &&
      t.length === 0 &&
      !n.initialized &&
      n.matches.length > 0
    )
      e = n.matches;
    else return null;
  }
  let o = e,
    s = (i = n) == null ? void 0 : i.errors;
  if (s != null) {
    let m = o.findIndex(
      (p) => p.route.id && (s == null ? void 0 : s[p.route.id]) !== void 0
    );
    m >= 0 || xe(!1), (o = o.slice(0, Math.min(o.length, m + 1)));
  }
  let a = !1,
    u = -1;
  if (n && r && r.v7_partialHydration)
    for (let m = 0; m < o.length; m++) {
      let p = o[m];
      if (
        ((p.route.HydrateFallback || p.route.hydrateFallbackElement) && (u = m),
        p.route.id)
      ) {
        let { loaderData: v, errors: g } = n,
          x =
            p.route.loader &&
            v[p.route.id] === void 0 &&
            (!g || g[p.route.id] === void 0);
        if (p.route.lazy || x) {
          (a = !0), u >= 0 ? (o = o.slice(0, u + 1)) : (o = [o[0]]);
          break;
        }
      }
    }
  return o.reduceRight((m, p, v) => {
    let g,
      x = !1,
      w = null,
      E = null;
    n &&
      ((g = s && p.route.id ? s[p.route.id] : void 0),
      (w = p.route.errorElement || K1),
      a &&
        (u < 0 && v === 0
          ? ((x = !0), (E = null))
          : u === v &&
            ((x = !0), (E = p.route.hydrateFallbackElement || null))));
    let f = t.concat(o.slice(0, v + 1)),
      d = () => {
        let h;
        return (
          g
            ? (h = w)
            : x
            ? (h = E)
            : p.route.Component
            ? (h = O.createElement(p.route.Component, null))
            : p.route.element
            ? (h = p.route.element)
            : (h = m),
          O.createElement(Y1, {
            match: p,
            routeContext: { outlet: m, matches: f, isDataRoute: n != null },
            children: h,
          })
        );
      };
    return n && (p.route.ErrorBoundary || p.route.errorElement || v === 0)
      ? O.createElement(G1, {
          location: n.location,
          revalidation: n.revalidation,
          component: w,
          error: g,
          children: d(),
          routeContext: { outlet: null, matches: f, isDataRoute: !0 },
        })
      : d();
  }, null);
}
var No = (function (e) {
  return (
    (e.UseBlocker = "useBlocker"),
    (e.UseLoaderData = "useLoaderData"),
    (e.UseActionData = "useActionData"),
    (e.UseRouteError = "useRouteError"),
    (e.UseNavigation = "useNavigation"),
    (e.UseRouteLoaderData = "useRouteLoaderData"),
    (e.UseMatches = "useMatches"),
    (e.UseRevalidator = "useRevalidator"),
    (e.UseNavigateStable = "useNavigate"),
    (e.UseRouteId = "useRouteId"),
    e
  );
})(No || {});
function Z1(e) {
  let t = O.useContext($1);
  return t || xe(!1), t;
}
function J1(e) {
  let t = O.useContext(Xi);
  return t || xe(!1), t;
}
function q1(e) {
  let t = J1(),
    n = t.matches[t.matches.length - 1];
  return n.route.id || xe(!1), n.route.id;
}
function b1() {
  var e;
  let t = O.useContext(Bd),
    n = Z1(No.UseRouteError),
    r = q1(No.UseRouteError);
  return t !== void 0 ? t : (e = n.errors) == null ? void 0 : e[r];
}
function Jr(e) {
  xe(!1);
}
function e0(e) {
  let {
    basename: t = "/",
    children: n = null,
    location: r,
    navigationType: i = ft.Pop,
    navigator: l,
    static: o = !1,
    future: s,
  } = e;
  _s() && xe(!1);
  let a = t.replace(/^\/*/, "/"),
    u = O.useMemo(
      () => ({
        basename: a,
        navigator: l,
        static: o,
        future: Oi({ v7_relativeSplatPath: !1 }, s),
      }),
      [a, s, l, o]
    );
  typeof r == "string" && (r = Gi(r));
  let {
      pathname: m = "/",
      search: p = "",
      hash: v = "",
      state: g = null,
      key: x = "default",
    } = r,
    w = O.useMemo(() => {
      let E = Ud(m, a);
      return E == null
        ? null
        : {
            location: { pathname: E, search: p, hash: v, state: g, key: x },
            navigationType: i,
          };
    }, [a, m, p, v, g, x, i]);
  return w == null
    ? null
    : O.createElement(
        $d.Provider,
        { value: u },
        O.createElement(Yi.Provider, { children: n, value: w })
      );
}
function t0(e) {
  let { children: t, location: n } = e;
  return H1(Po(t), n);
}
new Promise(() => {});
function Po(e, t) {
  t === void 0 && (t = []);
  let n = [];
  return (
    O.Children.forEach(e, (r, i) => {
      if (!O.isValidElement(r)) return;
      let l = [...t, i];
      if (r.type === O.Fragment) {
        n.push.apply(n, Po(r.props.children, l));
        return;
      }
      r.type !== Jr && xe(!1), !r.props.index || !r.props.children || xe(!1);
      let o = {
        id: r.props.id || l.join("-"),
        caseSensitive: r.props.caseSensitive,
        element: r.props.element,
        Component: r.props.Component,
        index: r.props.index,
        path: r.props.path,
        loader: r.props.loader,
        action: r.props.action,
        errorElement: r.props.errorElement,
        ErrorBoundary: r.props.ErrorBoundary,
        hasErrorBoundary:
          r.props.ErrorBoundary != null || r.props.errorElement != null,
        shouldRevalidate: r.props.shouldRevalidate,
        handle: r.props.handle,
        lazy: r.props.lazy,
      };
      r.props.children && (o.children = Po(r.props.children, l)), n.push(o);
    }),
    n
  );
}
/**
 * React Router DOM v6.26.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ const n0 = "6";
try {
  window.__reactRouterVersion = n0;
} catch {}
const r0 = "startTransition",
  su = af[r0];
function i0(e) {
  let { basename: t, children: n, future: r, window: i } = e,
    l = O.useRef();
  l.current == null && (l.current = w1({ window: i, v5Compat: !0 }));
  let o = l.current,
    [s, a] = O.useState({ action: o.action, location: o.location }),
    { v7_startTransition: u } = r || {},
    m = O.useCallback(
      (p) => {
        u && su ? su(() => a(p)) : a(p);
      },
      [a, u]
    );
  return (
    O.useLayoutEffect(() => o.listen(m), [o, m]),
    O.createElement(e0, {
      basename: t,
      children: n,
      location: s.location,
      navigationType: s.action,
      navigator: o,
      future: r,
    })
  );
}
var au;
(function (e) {
  (e.UseScrollRestoration = "useScrollRestoration"),
    (e.UseSubmit = "useSubmit"),
    (e.UseSubmitFetcher = "useSubmitFetcher"),
    (e.UseFetcher = "useFetcher"),
    (e.useViewTransitionState = "useViewTransitionState");
})(au || (au = {}));
var uu;
(function (e) {
  (e.UseFetcher = "useFetcher"),
    (e.UseFetchers = "useFetchers"),
    (e.UseScrollRestoration = "useScrollRestoration");
})(uu || (uu = {}));
function l0() {
  return c.jsxs(i0, {
    children: [
      c.jsx(y1, {}),
      c.jsxs(t0, {
        children: [
          c.jsx(Jr, { path: "/", element: c.jsx(Jm, {}) }),
          c.jsx(Jr, { path: "/locations", element: c.jsx(m1, {}) }),
          c.jsx(Jr, { path: "/book", element: c.jsx(g1, {}) }),
        ],
      }),
      c.jsx(x1, {}),
    ],
  });
}
kd(document.getElementById("root")).render(
  c.jsx(O.StrictMode, { children: c.jsx(l0, {}) })
);
