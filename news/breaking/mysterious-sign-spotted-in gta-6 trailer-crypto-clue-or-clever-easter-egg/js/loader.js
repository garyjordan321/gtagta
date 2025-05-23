/**
 * @id5io/id5-api.js
 * @version v1.0.75
 * @link https://id5.io/
 * @license Apache-2.0
 */
!(function () {
  'use strict';
  function r(t, e) {
    var i,
      r = Object.keys(t);
    return (
      Object.getOwnPropertySymbols &&
        ((i = Object.getOwnPropertySymbols(t)),
        e &&
          (i = i.filter(function (e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable;
          })),
        r.push.apply(r, i)),
      r
    );
  }
  function h(t) {
    for (var e = 1; e < arguments.length; e++) {
      var i = null != arguments[e] ? arguments[e] : {};
      e % 2
        ? r(Object(i), !0).forEach(function (e) {
            d(t, e, i[e]);
          })
        : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i))
          : r(Object(i)).forEach(function (e) {
              Object.defineProperty(
                t,
                e,
                Object.getOwnPropertyDescriptor(i, e)
              );
            });
    }
    return t;
  }
  function c(e, t, i, r, s, n, o) {
    try {
      var a = e[n](o),
        c = a.value;
    } catch (e) {
      return void i(e);
    }
    a.done ? t(c) : Promise.resolve(c).then(r, s);
  }
  function s(a) {
    return function () {
      var e = this,
        o = arguments;
      return new Promise(function (t, i) {
        var r = a.apply(e, o);
        function s(e) {
          c(r, t, i, s, n, 'next', e);
        }
        function n(e) {
          c(r, t, i, s, n, 'throw', e);
        }
        s(void 0);
      });
    };
  }
  function d(e, t, i) {
    return (
      (t = (function (e) {
        e = (function (e, t) {
          if ('object' != typeof e || null === e) return e;
          var i = e[Symbol.toPrimitive];
          if (void 0 === i) return ('string' === t ? String : Number)(e);
          t = i.call(e, t || 'default');
          if ('object' != typeof t) return t;
          throw new TypeError('@@toPrimitive must return a primitive value.');
        })(e, 'string');
        return 'symbol' == typeof e ? e : String(e);
      })(t)) in e
        ? Object.defineProperty(e, t, {
            value: i,
            enumerable: !0,
            configurable: !0,
            writable: !0
          })
        : (e[t] = i),
      e
    );
  }
  function u() {
    return (u = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var i,
              r = arguments[t];
            for (i in r)
              Object.prototype.hasOwnProperty.call(r, i) && (e[i] = r[i]);
          }
          return e;
        }).apply(this, arguments);
  }
  function t(e, t) {
    if (null == e) return {};
    var i,
      r = (function (e, t) {
        if (null == e) return {};
        for (var i, r = {}, s = Object.keys(e), n = 0; n < s.length; n++)
          (i = s[n]), 0 <= t.indexOf(i) || (r[i] = e[i]);
        return r;
      })(e, t);
    if (Object.getOwnPropertySymbols)
      for (var s = Object.getOwnPropertySymbols(e), n = 0; n < s.length; n++)
        (i = s[n]),
          0 <= t.indexOf(i) ||
            (Object.prototype.propertyIsEnumerable.call(e, i) && (r[i] = e[i]));
    return r;
  }
  function l(e, t) {
    return (
      (function (e) {
        if (Array.isArray(e)) return e;
      })(e) ||
      (function (e, t) {
        var i =
          null == e
            ? null
            : ('undefined' != typeof Symbol && e[Symbol.iterator]) ||
              e['@@iterator'];
        if (null != i) {
          var r,
            s,
            n,
            o,
            a = [],
            c = !0,
            l = !1;
          try {
            if (((n = (i = i.call(e)).next), 0 === t)) {
              if (Object(i) !== i) return;
              c = !1;
            } else
              for (
                ;
                !(c = (r = n.call(i)).done) &&
                (a.push(r.value), a.length !== t);
                c = !0
              );
          } catch (e) {
            (l = !0), (s = e);
          } finally {
            try {
              if (!c && null != i.return && ((o = i.return()), Object(o) !== o))
                return;
            } finally {
              if (l) throw s;
            }
          }
          return a;
        }
      })(e, t) ||
      a(e, t) ||
      (function () {
        throw new TypeError(
          'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
        );
      })()
    );
  }
  function a(e, t) {
    if (e) {
      if ('string' == typeof e) return n(e, t);
      var i = Object.prototype.toString.call(e).slice(8, -1);
      return 'Map' ===
        (i = 'Object' === i && e.constructor ? e.constructor.name : i) ||
        'Set' === i
        ? Array.from(e)
        : 'Arguments' === i ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)
          ? n(e, t)
          : void 0;
    }
  }
  function n(e, t) {
    (null == t || t > e.length) && (t = e.length);
    for (var i = 0, r = new Array(t); i < t; i++) r[i] = e[i];
    return r;
  }
  function f(e, t) {
    var i =
      ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
    if (!i) {
      if (
        Array.isArray(e) ||
        (i = a(e)) ||
        (t && e && 'number' == typeof e.length)
      ) {
        i && (e = i);
        var r = 0,
          t = function () {};
        return {
          s: t,
          n: function () {
            return r >= e.length ? { done: !0 } : { done: !1, value: e[r++] };
          },
          e: function (e) {
            throw e;
          },
          f: t
        };
      }
      throw new TypeError(
        'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
      );
    }
    var s,
      n = !0,
      o = !1;
    return {
      s: function () {
        i = i.call(e);
      },
      n: function () {
        var e = i.next();
        return (n = e.done), e;
      },
      e: function (e) {
        (o = !0), (s = e);
      },
      f: function () {
        try {
          n || null == i.return || i.return();
        } finally {
          if (o) throw s;
        }
      }
    };
  }
  class e {
    debug() {}
    info() {}
    warn() {}
    error() {}
  }
  const g = new e();
  class p extends e {
    constructor(e, t) {
      super(), (this._prefix = e), (this._delegate = t);
    }
    debug() {
      for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++)
        t[i] = arguments[i];
      this._delegate.debug(new Date().toISOString(), this._prefix, ...t);
    }
    info() {
      for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++)
        t[i] = arguments[i];
      this._delegate.info(new Date().toISOString(), this._prefix, ...t);
    }
    warn() {
      for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++)
        t[i] = arguments[i];
      this._delegate.warn(new Date().toISOString(), this._prefix, ...t);
    }
    error() {
      for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++)
        t[i] = arguments[i];
      this._delegate.error(new Date().toISOString(), this._prefix, ...t);
    }
  }
  const o = '*',
    _ = void 0;
  class v {
    constructor(e, t, i, r, s, n) {
      var o =
        6 < arguments.length && void 0 !== arguments[6] ? arguments[6] : void 0;
      d(this, '_isId5Message', !0),
        d(this, 'id', void 0),
        d(this, 'timestamp', void 0),
        d(this, 'type', void 0),
        d(this, 'src', void 0),
        d(this, 'dst', void 0),
        d(this, 'request', void 0),
        d(this, 'payload', void 0),
        (this.id = r),
        (this.timestamp = e),
        (this.src = t),
        (this.dst = i),
        (this.type = n),
        (this.request = o),
        (this.payload = s);
    }
  }
  class m {
    constructor(e) {
      d(this, '_senderId', void 0),
        d(this, '_messageSeqNb', 0),
        (this._senderId = e),
        (this._messageSeqNb = 0);
    }
    createBroadcastMessage(e) {
      var t =
        1 < arguments.length && void 0 !== arguments[1]
          ? arguments[1]
          : e.constructor.name;
      return new v(
        Date.now(),
        this._senderId,
        _,
        ++this._messageSeqNb,
        e,
        t || e.constructor.name
      );
    }
    createResponse(e, t) {
      var i =
        2 < arguments.length && void 0 !== arguments[2]
          ? arguments[2]
          : t.constructor.name;
      return new v(
        Date.now(),
        this._senderId,
        e.src,
        ++this._messageSeqNb,
        t,
        i || t.constructor.name,
        e
      );
    }
    createUnicastMessage(e, t) {
      var i =
        2 < arguments.length && void 0 !== arguments[2]
          ? arguments[2]
          : t.constructor.name;
      return new v(
        Date.now(),
        this._senderId,
        e,
        ++this._messageSeqNb,
        t,
        i || t.constructor.name
      );
    }
  }
  class I {
    constructor(e) {
      var t = 1 < arguments.length && void 0 !== arguments[1] && arguments[1],
        i =
          2 < arguments.length && void 0 !== arguments[2]
            ? arguments[2]
            : void 0;
      d(this, 'instance', void 0),
        d(this, 'instanceState', void 0),
        d(this, 'isResponse', void 0),
        (this.instance = e),
        (this.instanceState = i),
        (this.isResponse = t);
    }
  }
  d(I, 'TYPE', 'HelloMessage');
  const i = Object.freeze({
    LEADER: 'leader',
    FOLLOWER: 'follower',
    STORAGE: 'storage'
  });
  class C {
    constructor(e, t, i) {
      d(this, 'target', void 0),
        d(this, 'methodName', void 0),
        d(this, 'methodArguments', void 0),
        (this.target = e),
        (this.methodName = t),
        (this.methodArguments = i);
    }
  }
  d(C, 'TYPE', 'RemoteMethodCallMessage');
  class w {
    constructor() {
      var e =
        0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : g;
      d(this, '_targets', {}), d(this, '_log', void 0), (this._log = e);
    }
    registerTarget(e, t) {
      return (this._targets[e] = t), this;
    }
    _handle(t) {
      const e = this._targets[t.target];
      if (e)
        try {
          e[t.methodName](...t.methodArguments);
        } catch (e) {
          this._log.error('Error while handling method call ', t, e);
        }
    }
  }
  class y {
    constructor(e, t) {
      var i =
          2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : g,
        r = 3 < arguments.length ? arguments[3] : void 0;
      d(this, '_id', void 0),
        d(this, '_messageFactory', void 0),
        d(this, '_log', void 0),
        d(this, '_metrics', void 0),
        d(this, '_onMessageCallBackFunction', void 0),
        (this._id = e),
        (this._messageFactory = new m(this._id)),
        (this._log = i),
        (this._window = t),
        (this._handlers = {}),
        (this._metrics = r),
        this._register();
    }
    _register() {
      const s = this;
      s._abortController =
        'undefined' != typeof AbortController ? new AbortController() : void 0;
      var e =
        null === (e = s._abortController) || void 0 === e ? void 0 : e.signal;
      s._window.addEventListener(
        'message',
        (i) => {
          let r = i.data;
          if (
            void 0 !== i.data &&
            i.data._isId5Message &&
            i.data.src !== s._id &&
            (void 0 === i.data.dst || i.data.dst === s._id)
          )
            try {
              [o, r.type].forEach((e) => {
                let t = s._handlers[e];
                t && t.forEach((e) => e(r, i.source));
              });
            } catch (e) {
              s._log.error('Error while handling message', r, e);
            }
        },
        { capture: !1, signal: e }
      );
    }
    unregister() {
      this._abortController && this._abortController.abort();
    }
    onAnyMessage(e) {
      return this.onMessage(o, e);
    }
    onMessage(e, t) {
      const i = this._handlers[e];
      return i ? i.push(t) : (this._handlers[e] = [t]), this;
    }
    broadcastMessage(e, t) {
      this._log.debug('Broadcasting message', t, e),
        this._postMessage(this._messageFactory.createBroadcastMessage(e, t));
    }
    sendResponseMessage(e, t) {
      var i =
        2 < arguments.length && void 0 !== arguments[2]
          ? arguments[2]
          : t.constructor.name;
      this._log.debug('Sending response message', e, i, t),
        this._postMessage(this._messageFactory.createResponse(e, t, i));
    }
    unicastMessage(e, t) {
      var i =
        2 < arguments.length && void 0 !== arguments[2]
          ? arguments[2]
          : t.constructor.name;
      this._log.debug('Sending message to', e, i, t),
        this._postMessage(this._messageFactory.createUnicastMessage(e, t, i));
    }
    _postToWindow(e, t) {
      try {
        e.postMessage(t, '*');
      } catch (e) {
        this._log.error('Could not post message to window', e);
      }
    }
    _postMessage(r) {
      let s = this;
      (function t(e) {
        try {
          s._postToWindow(e, r);
          var i = e.frames;
          if (i) for (let e = 0; e < i.length; e++) t(i[e]);
        } catch (e) {
          s._log.error('Could not broadcast message', e);
        }
      })(s._window.top);
    }
    callProxyMethod(e, t, i, r) {
      this._log.info('Calling ProxyMethodCall', {
        target: t,
        name: i,
        args: r
      }),
        this.unicastMessage(e, new C(t, i, r), C.TYPE);
    }
    onProxyMethodCall(t) {
      return this.onMessage(C.TYPE, (e) =>
        void 0 === e.dst
          ? (this._countInvalidMessage(e, 'no-destination-proxy'),
            void this._log.error(
              'Received invalid RemoteMethodCallMessage message',
              JSON.stringify(e),
              'Ignoring it....'
            ))
          : void t._handle(u(new C(), e.payload))
      );
    }
    _countInvalidMessage(e, t) {
      var i,
        r = (e) => null != e;
      void 0 !==
        (null === (i = this._metrics) || void 0 === i
          ? void 0
          : i.instanceInvalidMsgCounter) &&
        this._metrics
          .instanceInvalidMsgCounter({
            reason: t,
            hasDestination: r(e.dst),
            hasSource: r(e.src),
            hasPayload: r(e.payload),
            hasRequest: r(e.request),
            hasTimestamp: r(e.timestamp)
          })
          .inc();
    }
  }
  function S(e, t) {
    var i = '^\\d+(\\.\\d+(\\.\\d+){0,1}){0,1}$';
    if (e.match(i) && t.match(i)) {
      var r = e.split('.'),
        s = t.split('.'),
        i = (e) => parseInt(e) || 0,
        e = (e, t) => {
          t = e - t;
          return 0 == t ? 0 : t < 0 ? -1 : 1;
        },
        t = e(i(r[0]), i(s[0]));
      if (0 !== t) return t;
      t = e(i(r[1]), i(s[1]));
      return 0 === t ? e(i(r[2]), i(s[2])) : t;
    }
  }
  const b = 'Array',
    D = 'String',
    E = 'Function',
    T = Object.prototype.toString;
  function A(e, t) {
    return T.call(e) === '[object ' + t + ']';
  }
  function P(e) {
    return A(e, E);
  }
  function O(e) {
    return A(e, D);
  }
  function R(e) {
    return A(e, b);
  }
  function x(e) {
    return A(e, 'Number');
  }
  function N(e) {
    return A(e, 'Object');
  }
  function L(e) {
    return void 0 !== e;
  }
  function U(t, i) {
    if (
      !(function (e) {
        if (!e) return 1;
        if (R(e) || O(e)) return !(0 < e.length);
        for (var t in e) if (hasOwnProperty.call(e, t)) return;
        return 1;
      })(t)
    ) {
      if (P(t.forEach)) return t.forEach(i, this);
      let e = 0;
      var r = t.length;
      if (0 < r) for (; e < r; e++) i(t[e], e, t);
      else for (e in t) hasOwnProperty.call(t, e) && i.call(this, t[e], e);
    }
  }
  function F(e, t) {
    let i = document.createElement('a');
    t && 'noDecodeWholeURL' in t && t.noDecodeWholeURL
      ? (i.href = e)
      : (i.href = decodeURIComponent(e));
    t = t && 'decodeSearchAsString' in t && t.decodeSearchAsString;
    return {
      href: i.href,
      protocol: (i.protocol || '').replace(/:$/, ''),
      hostname: i.hostname,
      port: +i.port,
      pathname: i.pathname.replace(/^(?!\/)/, '/'),
      search: t
        ? i.search
        : (t = i.search || '')
          ? t
              .replace(/^\?/, '')
              .split('&')
              .reduce((e, t) => {
                let i = t.split('='),
                  r = l(i, 2),
                  s = r[0],
                  n = r[1];
                return (
                  /\[\]$/.test(s)
                    ? ((s = s.replace('[]', '')),
                      (e[s] = e[s] || []),
                      e[s].push(n))
                    : (e[s] = n || ''),
                  e
                );
              }, {})
          : {},
      hash: (i.hash || '').replace(/^#/, ''),
      host: i.host || window.location.host
    };
  }
  function k(e) {
    return (
      (e.protocol || 'http') +
      '://' +
      (e.host || e.hostname + (e.port ? ':'.concat(e.port) : '')) +
      (e.pathname || '') +
      (e.search
        ? '?'.concat(
            ((i = e.search || ''),
            Object.keys(i)
              .map((t) =>
                Array.isArray(i[t])
                  ? i[t].map((e) => ''.concat(t, '[]=').concat(e)).join('&')
                  : ''.concat(t, '=').concat(i[t])
              )
              .join('&'))
          )
        : '') +
      (e.hash ? '#'.concat(e.hash) : '')
    );
    var i;
  }
  function M(i, e) {
    function r(e, t) {
      if (P(Math.imul)) return Math.imul(e, t);
      var i = (4194303 & e) * (t |= 0);
      return 4290772992 & e && (i += ((4290772992 & e) * t) | 0), 0 | i;
    }
    e = 1 < arguments.length && void 0 !== e ? e : 0;
    let s = 3735928559 ^ e,
      n = 1103547991 ^ e;
    for (let e = 0, t; e < i.length; e++)
      (t = i.charCodeAt(e)),
        (s = r(s ^ t, 2654435761)),
        (n = r(n ^ t, 1597334677));
    return (
      (s = r(s ^ (s >>> 16), 2246822507) ^ r(n ^ (n >>> 13), 3266489909)),
      (n = r(n ^ (n >>> 16), 2246822507) ^ r(s ^ (s >>> 13), 3266489909)),
      (4294967296 * (2097151 & n) + (s >>> 0)).toString()
    );
  }
  const V = Object.freeze({ cmp: 'cmp', partner: 'partner', prebid: 'prebid' }),
    G = ['localStoragePurposeConsent', 'ccpaString'],
    j = Object.freeze({
      NONE: 'none',
      TCF_V1: 'TCFv1',
      TCF_V2: 'TCFv2',
      USP_V1: 'USPv1',
      ID5_ALLOWED_VENDORS: 'ID5',
      PREBID: 'PBJS',
      GPP_V1_0: 'GPPv1.0',
      GPP_V1_1: 'GPPv1.1'
    });
  class W {
    constructor() {
      var e =
          0 < arguments.length && void 0 !== arguments[0]
            ? arguments[0]
            : void 0,
        t =
          1 < arguments.length && void 0 !== arguments[1]
            ? arguments[1]
            : void 0,
        i =
          2 < arguments.length && void 0 !== arguments[2]
            ? arguments[2]
            : void 0,
        r =
          3 < arguments.length && void 0 !== arguments[3]
            ? arguments[3]
            : void 0,
        s =
          4 < arguments.length && void 0 !== arguments[4]
            ? arguments[4]
            : void 0;
      d(this, 'version', void 0),
        d(this, 'localStoragePurposeConsent', void 0),
        d(this, 'applicableSections', void 0),
        d(this, 'gppString', void 0),
        d(this, 'vendorsConsentForId5Granted', void 0),
        (this.version = e),
        (this.localStoragePurposeConsent = t),
        (this.applicableSections = r),
        (this.gppString = s),
        (this.vendorsConsentForId5Granted = i);
    }
    isGranted() {
      return (
        !this.applicableSections.includes(2) ||
        (!0 === this.localStoragePurposeConsent &&
          !1 !== this.vendorsConsentForId5Granted)
      );
    }
  }
  class q {
    constructor() {
      d(this, 'apiTypes', void 0),
        d(this, 'gdprApplies', void 0),
        d(this, 'consentString', void 0),
        d(this, 'localStoragePurposeConsent', void 0),
        d(this, 'allowedVendors', void 0),
        d(this, 'ccpaString', void 0),
        d(this, 'forcedGrantByConfig', void 0),
        d(this, 'gppData', void 0),
        d(this, 'source', void 0),
        d(this, 'vendorsConsentForId5Granted', void 0),
        (this.apiTypes = []),
        (this.gdprApplies = !1),
        (this.consentString = void 0),
        (this.localStoragePurposeConsent = !1),
        (this.ccpaString = void 0),
        (this.allowedVendors = void 0),
        (this.forcedGrantByConfig = !1),
        (this.gppData = void 0);
    }
    localStorageGrant() {
      return !0 === this.forcedGrantByConfig
        ? new J(!0, H.FORCE_ALLOWED_BY_CONFIG)
        : 0 === this.apiTypes.length
          ? new J(!0, H.PROVISIONAL)
          : this._getLocalStorageGrantFromApi();
    }
    _getLocalStorageGrantFromApi() {
      const e = this.apiTypes,
        t = {};
      var i = {};
      e.includes(j.TCF_V1) &&
        ((t[j.TCF_V1] = this._isGranted()),
        this._addToDebugInfo(j.TCF_V1, this, i)),
        e.includes(j.TCF_V2) &&
          ((t[j.TCF_V2] = this._isGranted()),
          this._addToDebugInfo(j.TCF_V2, this, i)),
        e.includes(j.ID5_ALLOWED_VENDORS) &&
          (t[j.ID5_ALLOWED_VENDORS] = this.allowedVendors.includes('131')),
        e.includes(j.USP_V1) && (t[j.USP_V1] = !0),
        e.includes(j.GPP_V1_0) &&
          ((t[j.GPP_V1_0] = this.gppData.isGranted()),
          this._addToDebugInfo(j.GPP_V1_0, this.gppData, i)),
        e.includes(j.GPP_V1_1) &&
          ((t[j.GPP_V1_1] = this.gppData.isGranted()),
          this._addToDebugInfo(j.GPP_V1_1, this.gppData, i));
      var r = Object.keys(t)
        .map((e) => t[e])
        .reduce((e, t) => e && t, !0);
      return new J(r, H.CONSENT_API, t, i);
    }
    _addToDebugInfo(e, t, i) {
      return (
        void 0 !== t.localStoragePurposeConsent &&
          (i[e + '-localStoragePurposeConsent'] = t.localStoragePurposeConsent),
        void 0 !== t.vendorsConsentForId5Granted &&
          (i[e + '-vendorsConsentForId5Granted'] =
            t.vendorsConsentForId5Granted),
        i
      );
    }
    _isGranted() {
      return (
        !1 === this.gdprApplies ||
        (!0 === this.localStoragePurposeConsent &&
          !1 !== this.vendorsConsentForId5Granted)
      );
    }
    hashCode() {
      this.localStoragePurposeConsent, this.ccpaString;
      var e = t(this, G);
      return M(JSON.stringify(e));
    }
    static createFrom(e) {
      const t = u(new q(), e);
      return (
        L(t.api) &&
          ((t.apiTypes = (function (e) {
            var t = e.api;
            if (t === j.NONE) return [];
            if (t !== j.PREBID) return [t];
            {
              const i = [];
              return (
                (L(e.gdprApplies) || L(e.consentString)) && i.push(j.TCF_V2),
                L(e.ccpaString) && i.push(j.USP_V1),
                L(e.gppData) &&
                  L(e.gppData.version) &&
                  i.push(e.gppData.version),
                i
              );
            }
          })(e)),
          (t.api = void 0)),
        N(t.gppData) && (t.gppData = u(new W(), t.gppData)),
        t
      );
    }
    getApiTypeData(e) {
      if (this.apiTypes.includes(e)) {
        if (e === j.USP_V1) return { ccpaString: this.ccpaString };
        if (e === j.TCF_V2)
          return {
            consentString: this.consentString,
            gdprApplies: this.gdprApplies,
            localStoragePurposeConsent: this.localStoragePurposeConsent
          };
        if (e === j.GPP_V1_1 || e === j.GPP_V1_0) return this.gppData;
        if (e === j.ID5_ALLOWED_VENDORS)
          return { allowedVendors: this.allowedVendors };
      }
    }
  }
  const H = Object.freeze({
    FORCE_ALLOWED_BY_CONFIG: 'force_allowed_by_config',
    ID5_CONSENT: 'id5_consent',
    PROVISIONAL: 'provisional',
    JURISDICTION: 'jurisdiction',
    CONSENT_API: 'consent_api'
  });
  class J {
    constructor(e, t) {
      var i =
          2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {},
        r = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : {};
      d(this, 'allowed', !1),
        d(this, 'grantType', H.NONE),
        d(this, 'api', {}),
        d(this, '_debugInfo', {}),
        (this.allowed = e),
        (this.grantType = t),
        (this.api = i),
        (this._debugInfo = r);
    }
    isDefinitivelyAllowed() {
      return this.allowed && this.grantType !== H.PROVISIONAL;
    }
  }
  var B = Object.freeze({
    STORAGE_CONFIG: {
      ID5: { name: 'id5id', expiresDays: 90 },
      ID5_V2: { name: 'id5id_v2', expiresDays: 15 },
      LAST: { name: 'id5id_last', expiresDays: 90 },
      CONSENT_DATA: { name: 'id5id_cached_consent_data', expiresDays: 30 },
      PRIVACY: { name: 'id5id_privacy', expiresDays: 30 },
      EXTENSIONS: { name: 'id5id_extensions', expiresDays: 8 / 24 }
    },
    LEGACY_COOKIE_NAMES: ['id5.1st', 'id5id.1st'],
    PRIVACY: { JURISDICTIONS: { gdpr: !0, ccpa: !1, lgpd: !0, other: !1 } },
    ID5_EIDS_SOURCE: 'id5-sync.com'
  });
  class z {
    constructor(e, t) {
      (this.name = e), (this.expiresDays = t);
    }
    withNameSuffixed() {
      let e = this.name;
      for (var t = arguments.length, i = new Array(t), r = 0; r < t; r++)
        i[r] = arguments[r];
      for (var s = 0, n = i; s < n.length; s++) {
        var o = n[s];
        e += '_'.concat(o);
      }
      return new z(e, this.expiresDays);
    }
  }
  class K {
    constructor() {
      let i =
        0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : void 0;
      function e(e) {
        var t = void 0 !== i ? Math.max(1, i) : e.expiresDays;
        return new z(e.name, t);
      }
      var t = B.STORAGE_CONFIG;
      (this.ID5 = e(t.ID5)),
        (this.ID5_V2 = e(t.ID5_V2)),
        (this.LAST = e(t.LAST)),
        (this.CONSENT_DATA = e(t.CONSENT_DATA)),
        (this.PRIVACY = e(t.PRIVACY)),
        (this.EXTENSIONS = new z(t.EXTENSIONS.name, t.EXTENSIONS.expiresDays));
    }
  }
  d(K, 'DEFAULT', new K());
  class Y {
    constructor(e, t) {
      d(this, '_clientStore', void 0),
        d(this, '_trueLinkAdapter', void 0),
        (this._clientStore = e),
        (this._trueLinkAdapter = t);
    }
    hasConsentChanged(e) {
      return e && !this._clientStore.storedConsentDataMatchesConsentData(e);
    }
    storeConsent(e) {
      this._clientStore.putHashedConsentData(e);
    }
    incNb(e) {
      this._clientStore.incNbV2(
        e,
        1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 1
      );
    }
    updateNbs(e) {
      var t,
        i = f(e);
      try {
        for (i.s(); !(t = i.n()).done; ) {
          var r = l(t.value, 2),
            s = r[0],
            n = r[1],
            o = null == n ? void 0 : n.nb;
          0 < o && this.incNb(s, -o);
        }
      } catch (e) {
        i.e(e);
      } finally {
        i.f();
      }
    }
    storeResponse(e, i) {
      this._clientStore.putResponseV1(i.getGenericResponse()),
        this._clientStore.setResponseDateTimeV1(
          new Date(i.timestamp).toUTCString()
        );
      const r = new Set();
      e.forEach((e) => {
        var t = e.cacheId;
        r.has(t) ||
          ((e = i.getResponseFor(e.integrationId)) &&
            (this._clientStore.storeResponseV2(t, e, i.timestamp), r.add(t)));
      }),
        this._trueLinkAdapter.setPrivacy(
          null === (e = i.getGenericResponse()) || void 0 === e
            ? void 0
            : e.privacy
        );
    }
    clearAll(e) {
      this._clientStore.clearResponse(),
        this._clientStore.clearDateTime(),
        e.forEach((e) => {
          e = e.cacheId;
          this._clientStore.clearResponseV2(e);
        }),
        this._clientStore.clearHashedConsentData(),
        this._trueLinkAdapter.clearPrivacy(),
        this._clientStore.clearExtensions();
    }
    getCachedResponse(e) {
      e = this._clientStore.getStoredResponseV2(e);
      if (e) return new X(e.response, e.responseTimestamp, e.nb);
    }
    getCachedExtensions() {
      return this._clientStore.getExtensions();
    }
    storeExtensions(e) {
      var t = x(e.ttl) ? e.ttl / 86400 : K.DEFAULT.EXTENSIONS.expiresDays,
        t = new z(K.DEFAULT.EXTENSIONS.name, t);
      return this._clientStore.storeExtensions(e, t);
    }
  }
  class X {
    constructor(e, t) {
      var i =
        2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : 0;
      d(this, 'response', void 0),
        d(this, 'timestamp', void 0),
        d(this, 'nb', void 0),
        (this.response = e),
        (this.timestamp = t),
        (this.nb = i);
    }
    isExpired() {
      var e = this.getMaxAge();
      return !(x(e) && 0 < e) || this._isOlderThanSec(e);
    }
    _isOlderThanSec(e) {
      return this.timestamp <= 0 || this.getAgeSec() > e;
    }
    isStale() {
      return !this.timestamp || this._isOlderThanSec(1209600);
    }
    isResponseComplete() {
      return (
        N(this.response) &&
        O(this.response.universal_uid) &&
        O(this.response.signature)
      );
    }
    isValid() {
      return this.isResponseComplete() && !this.isStale();
    }
    getMaxAge() {
      var e, t;
      return null === (e = this.response) ||
        void 0 === e ||
        null === (t = e.cache_control) ||
        void 0 === t
        ? void 0
        : t.max_age_sec;
    }
    getAgeSec() {
      return ((Date.now() - this.timestamp) / 1e3) | 0;
    }
  }
  const Q = '_exp';
  class $ {
    constructor(e) {
      var t =
        1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : g;
      d(this, 'storage', void 0),
        d(this, '_log', void 0),
        (this.storage = e),
        (this._log = t);
    }
    getItem(e) {
      try {
        return this.storage.getItem(e);
      } catch (e) {}
    }
    setItem(e, t) {
      try {
        this.storage.setItem(e, t);
      } catch (e) {}
    }
    removeItem(e) {
      try {
        this.storage.removeItem(e);
      } catch (e) {}
    }
    removeExpiredObjectWithPrefix(t) {
      var i = 1 < arguments.length && void 0 !== arguments[1] && arguments[1];
      this._log.info('Check, prefix', t);
      try {
        var r = this.storage.getKeysWithPrefix(t);
        let e = 0;
        var s,
          n = f(r);
        try {
          for (n.s(); !(s = n.n()).done; ) {
            var o,
              a,
              c = s.value;
            i
              ? (this._log.info('Found', c, ' remove it'), this.removeItem(c))
              : (a =
                  null == (o = this.getObjectWithExpiration({ name: c }))
                    ? void 0
                    : o.expireAt) &&
                a < Date.now() &&
                (this._log.info(
                  'Found expired object',
                  c,
                  'expiration time',
                  a,
                  'It will be removed'
                ),
                this.removeItem(c),
                (e += 1));
          }
        } catch (e) {
          n.e(e);
        } finally {
          n.f();
        }
        return { all: r.length, expired: e };
      } catch (e) {}
    }
    getItemWithExpiration(e) {
      var t = e.name,
        e = this.getItem(t + Q);
      return !e || new Date(e).getTime() - Date.now() <= 0
        ? (this.removeItemWithExpiration({ name: t }), null)
        : this.getItem(t);
    }
    setItemWithExpiration(e, t) {
      var i = e.name,
        e = e.expiresDays,
        e = Date.now() + 864e5 * e,
        e = new Date(e).toUTCString();
      this.setItem(i + Q, e), this.setItem(i, t);
    }
    removeItemWithExpiration(e) {
      e = e.name;
      this.removeItem(e), this.removeItem(e + Q);
    }
    setObjectWithExpiration(e, t) {
      var i = e.name,
        e = e.expiresDays,
        e = Date.now() + 864e5 * e;
      this.setItem(i, JSON.stringify({ data: t, expireAt: e }));
    }
    getObjectWithExpiration(t) {
      t = t.name;
      try {
        var e = JSON.parse(this.getItem(t));
        if (null != e && e.expireAt && 0 < e.expireAt - Date.now())
          return e.data;
        null != e && e.expireAt && this.removeItem(t);
      } catch (e) {
        this._log.error('Error while getting ', t, 'object from storage', e);
      }
    }
    updateObjectWithExpiration(e, t) {
      var i = e.name,
        e = e.expiresDays;
      try {
        var r = t(this.getObjectWithExpiration({ name: i }));
        return this.setObjectWithExpiration({ name: i, expiresDays: e }, r), r;
      } catch (e) {
        this._log.error('Error while updating object with ', i, e);
      }
    }
  }
  class Z {
    getItem() {}
    removeItem() {}
    setItem() {}
    getKeysWithPrefix() {
      return [];
    }
  }
  const ee = new Z();
  class te extends Z {
    constructor(e) {
      var t =
        !(1 < arguments.length && void 0 !== arguments[1]) || arguments[1];
      super(),
        d(this, '_writingEnabled', void 0),
        d(this, '_underlying', void 0),
        (this._writingEnabled = t);
      try {
        this._underlying = e.localStorage;
      } catch (e) {}
    }
    getItem(e) {
      try {
        return this._underlying.getItem(e);
      } catch (e) {}
    }
    removeItem(e) {
      try {
        this._underlying.removeItem(e);
      } catch (e) {}
    }
    setItem(e, t) {
      try {
        this._writingEnabled && this._underlying.setItem(e, t);
      } catch (e) {}
    }
    getKeysWithPrefix(t) {
      try {
        var i = this._underlying.length;
        if (this._writingEnabled) {
          const r = [];
          for (let e = 0; e < i; e++) {
            const s = this._underlying.key(e);
            s && s.startsWith(t) && r.push(s);
          }
          return r;
        }
      } catch (e) {}
    }
    static checkIfAccessible() {
      var e = '__id5test';
      try {
        return (
          window.localStorage.setItem(e, e),
          window.localStorage.removeItem(e),
          !0
        );
      } catch (e) {
        return !1;
      }
    }
  }
  class ie {
    constructor(e) {
      d(this, '_replicas', []),
        d(this, '_lastKeyOperation', {}),
        d(this, '_primaryStorage', void 0),
        (this._primaryStorage = e);
    }
    getItem(e) {
      return this._primaryStorage.getItem(e);
    }
    removeItem(t) {
      this._primaryStorage.removeItem(t);
      var e = (e) => {
        e.removeItem(t);
      };
      this._replicas.forEach(e), (this._lastKeyOperation[t] = e);
    }
    setItem(t, i) {
      this._primaryStorage.setItem(t, i);
      var e = (e) => {
        e.setItem(t, i);
      };
      this._replicas.forEach(e), (this._lastKeyOperation[t] = e);
    }
    addReplica(t) {
      Object.values(this._lastKeyOperation).forEach((e) => e(t)),
        this._replicas.push(t);
    }
    getKeysWithPrefix(e) {
      return this._primaryStorage.getKeysWithPrefix(e);
    }
  }
  const re = 'undefined' != typeof Promise && 'undefined' != typeof fetch;
  class se {
    constructor(e) {
      var t =
        1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : void 0;
      (this.url = e || 'https://diagnostics.id5-sync.com/measurements'),
        (this._metadata = t);
    }
    publish(e) {
      var t =
        1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : void 0;
      return e && 0 < e.length
        ? (e.forEach((e) =>
            (function (i) {
              Object.keys(i).forEach(function (e) {
                var t = i[e];
                t &&
                  (t instanceof Object
                    ? (i[e] = JSON.stringify(t))
                    : (i[e] = ''.concat(t)));
              });
            })(e.tags)
          ),
          fetch(this.url, {
            method: 'POST',
            headers: { 'Content-Type': 'text/plain' },
            mode: 'no-cors',
            body: JSON.stringify({
              metadata: h(h({}, this._metadata), t),
              measurements: e
            })
          }))
        : Promise.resolve();
    }
  }
  const ne = Object.freeze({});
  var oe,
    ae = {
      EMPTY: ne,
      from: function (e) {
        return e ? (e instanceof Map ? Object.fromEntries(e) : e) : ne;
      },
      toString: function (e) {
        return Array.from(Object.entries(e), (e) => {
          var t = l(e, 2),
            e = t[0],
            t = t[1];
          return ''.concat(e, '=').concat(t);
        })
          .sort()
          .toString();
      }
    };
  const ce = Object.freeze({
    TIMER: 'TIMER',
    SUMMARY: 'SUMMARY',
    COUNTER: 'COUNTER'
  });
  class le {
    constructor(e, t, i) {
      d(this, 'name', void 0),
        d(this, 'tags', void 0),
        d(this, 'values', void 0),
        (this.name = e),
        (this.tags = ae.from(t)),
        (this.type = i),
        (this.values = []);
    }
    reset() {
      this.values = [];
    }
  }
  class de extends le {
    constructor(e) {
      super(
        e,
        1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : void 0,
        ce.TIMER
      );
    }
    startMeasurement() {
      try {
        return new he(this);
      } catch (e) {
        return;
      }
    }
    record(e) {
      try {
        isNaN(e) || this.values.push({ value: e, timestamp: Date.now() });
      } catch (e) {}
    }
    recordNow() {
      try {
        var e;
        this.record(
          0 | (null === (e = performance) || void 0 === e ? void 0 : e.now())
        );
      } catch (e) {}
    }
  }
  class he {
    constructor() {
      (this.timer =
        0 < arguments.length && void 0 !== arguments[0]
          ? arguments[0]
          : void 0),
        (this.startTime = performance.now());
    }
    record() {
      var t =
        0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : void 0;
      try {
        var i = (performance.now() - this.startTime) | 0;
        let e = t || this.timer;
        return e && e.record(i), i;
      } catch (e) {
        return;
      }
    }
  }
  class ue extends le {
    constructor(e) {
      super(
        e,
        1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : void 0,
        ce.COUNTER
      );
    }
    inc() {
      var e =
        0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : 1;
      try {
        return (
          0 === this.values.length
            ? this.values.push({ value: e, timestamp: Date.now() })
            : ((this.values[0].value += e),
              (this.values[0].timestamp = Date.now())),
          this.values[0].value
        );
      } catch (e) {}
    }
  }
  class ge extends le {
    constructor(e) {
      super(
        e,
        1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : void 0,
        ce.SUMMARY
      );
    }
    record(e) {
      try {
        this.values.push({ value: e, timestamp: Date.now() });
      } catch (e) {}
    }
  }
  class pe {
    has(e) {
      return void 0 !== this[e];
    }
    set(e, t) {
      return (this[e] = t), this;
    }
    get(e) {
      return this[e];
    }
    values() {
      return Object.entries(this).map((e) => {
        return l(e, 2)[1];
      });
    }
  }
  function _e() {
    return new he();
  }
  function ve(e) {
    return { partner: e };
  }
  class fe extends class {
    constructor() {
      var e =
          0 < arguments.length && void 0 !== arguments[0]
            ? arguments[0]
            : void 0,
        t =
          1 < arguments.length && void 0 !== arguments[1]
            ? arguments[1]
            : void 0;
      d(this, '_registry', void 0),
        d(this, 'commonTags', void 0),
        d(this, '_scheduled', void 0),
        (this._registry = new pe()),
        (this.commonTags = ae.from(e)),
        (this.commonPrefix = t);
    }
    getOrCreate(e, t, i) {
      var r = h(h({}, t), this.commonTags),
        t = this.commonPrefix ? this.commonPrefix + '.' + e : e,
        e = ''.concat(t, '[').concat(ae.toString(r), ']');
      return (
        this._registry.has(e) || this._registry.set(e, i(t, r)),
        this._registry.get(e)
      );
    }
    getAllMeasurements() {
      return this._registry
        .values()
        .map((e) => ({
          name: e.name,
          type: e.type,
          tags: e.tags,
          values: e.values
        }))
        .filter(function (e) {
          return e.values && 0 < e.values.length;
        });
    }
    reset() {
      Array.from(this._registry.values()).forEach((e) => e.reset());
    }
    addCommonTags(e) {
      this.commonTags = h(h({}, this.commonTags), ae.from(e));
    }
    timer(e) {
      return this.getOrCreate(
        e,
        1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {},
        (e, t) => new de(e, t)
      );
    }
    counter(e) {
      return this.getOrCreate(
        e,
        1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {},
        (e, t) => new ue(e, t)
      );
    }
    summary(e) {
      return this.getOrCreate(
        e,
        1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {},
        (e, t) => new ge(e, t)
      );
    }
    publish() {
      let t =
          0 < arguments.length && void 0 !== arguments[0]
            ? arguments[0]
            : (e) => e,
        i =
          1 < arguments.length && void 0 !== arguments[1]
            ? arguments[1]
            : void 0;
      return Promise.resolve(this.getAllMeasurements())
        .then((e) => t(e, i))
        .then(() => this.reset());
    }
    schedulePublishAfterMsec(t, i) {
      if (!this._scheduled) {
        let e = this;
        setTimeout(
          () => (
            (e._scheduled = !1),
            e.publish(i, { trigger: 'fixed-time', fixed_time_msec: t })
          ),
          t
        ),
          (this._scheduled = !0);
      }
      return this;
    }
    schedulePublishBeforeUnload(e) {
      const t = this,
        i =
          'undefined' != typeof AbortController
            ? new AbortController()
            : void 0;
      return (
        i &&
          ((i.publisher = e),
          addEventListener(
            'beforeunload',
            () => t.publish(e, { trigger: 'beforeunload' }),
            { capture: !1, signal: i.signal }
          ),
          (this._onUnloadPublishAbortController = i)),
        this
      );
    }
    unregister() {
      const e = this._onUnloadPublishAbortController;
      if (e)
        return e.abort(), this.publish(e.publisher, { trigger: 'unregister' });
    }
  } {
    constructor(e, t) {
      var i =
          2 < arguments.length && void 0 !== arguments[2]
            ? arguments[2]
            : void 0,
        r =
          3 < arguments.length && void 0 !== arguments[3]
            ? arguments[3]
            : void 0;
      super(h(h({ source: e, version: t }, ve(i)), r), 'id5.api');
    }
    loadDelayTimer() {
      return this.timer(
        'instance.load.delay',
        0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {}
      );
    }
    fetchCallTimer(e) {
      return this.timer(
        'fetch.call.time',
        h(
          { status: e },
          1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {}
        )
      );
    }
    fetchFailureCallTimer() {
      return this.fetchCallTimer(
        'fail',
        0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {}
      );
    }
    fetchSuccessfulCallTimer() {
      return this.fetchCallTimer(
        'success',
        0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {}
      );
    }
    extensionsCallTimer(e, t) {
      return this.timer(
        'extensions.call.time',
        h(
          { extensionType: e, status: t ? 'success' : 'fail' },
          2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {}
        )
      );
    }
    consentRequestTimer(e) {
      return this.timer(
        'consent.request.time',
        h(
          { requestType: e },
          1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {}
        )
      );
    }
    invocationCountSummary() {
      return this.summary(
        'invocation.count',
        0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {}
      );
    }
    instanceCounter(e) {
      return this.counter(
        'instance.count',
        h(
          { instanceId: e },
          1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {}
        )
      );
    }
    instanceUniqueDomainsCounter(e) {
      return this.counter(
        'instance.domains.count',
        h(
          { instanceId: e },
          1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {}
        )
      );
    }
    instanceUniqWindowsCounter(e) {
      return this.counter(
        'instance.windows.count',
        h(
          { instanceId: e },
          1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {}
        )
      );
    }
    instanceUniqPartnersCounter(e) {
      return this.counter(
        'instance.partners.count',
        h(
          { instanceId: e },
          1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {}
        )
      );
    }
    instanceJoinDelayTimer() {
      return this.timer(
        'instance.join.delay.time',
        0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {}
      );
    }
    instanceLateJoinCounter(e) {
      return this.counter(
        'instance.lateJoin.count',
        h(
          { instanceId: e },
          1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {}
        )
      );
    }
    instanceLateJoinDelayTimer() {
      return this.timer(
        'instance.lateJoin.delay',
        h(
          {},
          0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {}
        )
      );
    }
    instanceLastJoinDelayTimer() {
      return this.timer(
        'instance.lastJoin.delay',
        h(
          {},
          0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {}
        )
      );
    }
    instanceMsgDeliveryTimer() {
      return this.timer(
        'instance.message.delivery.time',
        0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {}
      );
    }
    instanceInvalidMsgCounter() {
      return this.counter(
        'instance.message.invalid.count',
        0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {}
      );
    }
    userIdProvisioningDelayTimer(e) {
      return this.timer(
        'userid.provisioning.delay',
        h(
          { cachedResponseUsed: e },
          1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {}
        )
      );
    }
    userIdNotificationDeliveryDelayTimer() {
      return this.timer(
        'userid.provisioning.delivery.delay',
        h(
          {},
          0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {}
        )
      );
    }
    userIdProvisioningDuplicateTimer() {
      return this.timer(
        'userid.provisioning.duplicate',
        h(
          {},
          0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {}
        )
      );
    }
    cachedUserIdAge() {
      return this.summary(
        'userid.cached.age',
        h(
          {},
          0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {}
        )
      );
    }
    consentChangeCounter() {
      return this.counter(
        'leader.consent.change.count',
        0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {}
      );
    }
    consentIgnoreCounter() {
      return this.counter(
        'leader.consent.ignore.count',
        0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {}
      );
    }
    storageAllKeysCounter() {
      return this.summary(
        'storage.keys.all.count',
        0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {}
      );
    }
    storageExpiredKeysCounter() {
      return this.summary(
        'storage.keys.expired.count',
        0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {}
      );
    }
    instanceSurvivalTime() {
      return this.timer(
        'instance.survival.time',
        0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {}
      );
    }
    localStorageGrantCounter() {
      return this.counter(
        'consent.lsg.count',
        0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {}
      );
    }
    consentDiscrepancyCounter() {
      return this.counter(
        'consent.discrepancy.count',
        0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {}
      );
    }
    refreshCallCounter(e) {
      return this.counter(
        'refresh.call.count',
        h(
          { target: e },
          1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {}
        )
      );
    }
  }
  class me {
    constructor(e) {
      var t =
        1 < arguments.length && void 0 !== arguments[1]
          ? arguments[1]
          : Date.now();
      d(this, 'timestamp', void 0),
        d(this, 'response', void 0),
        (this.response = e),
        (this.timestamp = t);
    }
    getGenericResponse() {
      return this.response.generic;
    }
    getResponseFor(e) {
      var t, i;
      if (
        null !== (t = this.response) &&
        void 0 !== t &&
        t.responses &&
        null !== (i = this.response) &&
        void 0 !== i &&
        i.responses[e]
      )
        return h(h({}, this.response.generic), this.response.responses[e]);
    }
  }
  class Ie {
    constructor(e, t, i) {
      d(this, '_extensionsProvider', void 0),
        d(this, '_metrics', void 0),
        d(this, '_log', void 0),
        (this._extensionsProvider = i),
        (this._metrics = e),
        (this._log = t);
    }
    fetchId(e, l, d) {
      return this._extensionsProvider.gather(e).then((n) => {
        const s = e.map((e) => {
            const t = e.cacheData;
            var i =
                null === t ||
                void 0 === t ||
                null === (s = t.response) ||
                void 0 === s
                  ? void 0
                  : s.signature,
              r = null === t || void 0 === t ? void 0 : t.nb,
              s = null === t || void 0 === t ? void 0 : t.getMaxAge();
            return this._createRequest(l, e, i, r, s, n, d);
          }),
          o = this._log,
          a = this._metrics,
          c = this;
        return new Promise((t, i) => {
          const r = _e();
          var e = ''.concat('https://id5-sync.com').concat('/gm/v3');
          o.info('Fetching ID5 ID from:', e, s),
            (function (r, s, n, o, e) {
              o = 3 < arguments.length && void 0 !== o ? o : {};
              let a = 4 < arguments.length && void 0 !== e ? e : g;
              try {
                let i;
                var c,
                  l = o.method || (n ? 'POST' : 'GET');
                let e = document.createElement('a');
                e.href = r;
                let t =
                  'object' == typeof s && null !== s
                    ? s
                    : {
                        success: function () {
                          a.info('ajax', 'xhr success');
                        },
                        error: function (e) {
                          a.error('ajax', 'xhr error', null, e);
                        }
                      };
                'function' == typeof s && (t.success = s),
                  (i = new window.XMLHttpRequest()),
                  (i.onreadystatechange = function () {
                    var e;
                    4 === i.readyState &&
                      ((200 <= (e = i.status) && e < 300) || 304 === e
                        ? t.success(i.responseText, i)
                        : t.error(i.statusText, i));
                  }),
                  (i.ontimeout = function () {
                    a.error('ajax', 'xhr timeout after ', i.timeout, 'ms');
                  }),
                  'GET' === l && n && (u((c = F(r, o)).search, n), (r = k(c))),
                  i.open(l, r, !0),
                  o.withCredentials && (i.withCredentials = !0),
                  U(o.customHeaders, (e, t) => {
                    i.setRequestHeader(t, e);
                  }),
                  o.preflight &&
                    i.setRequestHeader('X-Requested-With', 'XMLHttpRequest'),
                  i.setRequestHeader(
                    'Content-Type',
                    o.contentType || 'text/plain'
                  ),
                  'POST' === l && n ? i.send(n) : i.send();
              } catch (e) {
                a.error('ajax', 'xhr construction', e);
              }
            })(
              e,
              {
                success: function (e) {
                  o.info('Success at fetch call:', e),
                    r.record(
                      null === a || void 0 === a
                        ? void 0
                        : a.fetchSuccessfulCallTimer()
                    );
                  try {
                    t(new me(c._validateResponse(e)));
                  } catch (e) {
                    i(e);
                  }
                },
                error: function (e) {
                  r.record(
                    null === a || void 0 === a
                      ? void 0
                      : a.fetchFailureCallTimer()
                  ),
                    i(e);
                }
              },
              JSON.stringify({ requests: s }),
              { method: 'POST', withCredentials: !0 },
              o
            );
        });
      });
    }
    _validateResponse(e) {
      if (!e || !O(e) || e.length < 1)
        throw new Error(
          'Empty fetch response from ID5 servers: "'.concat(e, '"')
        );
      var t = JSON.parse(e);
      if (!N(t.generic))
        throw new Error('Server response failed to validate: '.concat(e));
      return this._log.info('Valid json response from ID5 received', t), t;
    }
    _createRequest(e, i, t, r, s, n, o) {
      this._log.info('Create request data for', {
        fetchIdData: i,
        consentData: e,
        signature: t,
        nbValue: r,
        refreshInSecondUsed: s,
        extensions: n
      });
      var a = i.partnerId;
      const c = {
        requestId: i.integrationId,
        requestCount: i.requestCount,
        role: i.role,
        cacheId: i.cacheId,
        refresh: i.refresh,
        source: i.source,
        sourceVersion: i.sourceVersion,
        partner: a,
        v: i.originVersion,
        o: i.origin,
        tml:
          null === (a = i.refererInfo) || void 0 === a
            ? void 0
            : a.topmostLocation,
        ref: null === (a = i.refererInfo) || void 0 === a ? void 0 : a.ref,
        cu:
          null === (a = i.refererInfo) || void 0 === a
            ? void 0
            : a.canonicalUrl,
        u:
          (null === (a = i.refererInfo) || void 0 === a
            ? void 0
            : a.stack[0]) || window.location.href,
        top:
          null !== (a = i.refererInfo) && void 0 !== a && a.reachedTop ? 1 : 0,
        localStorage: !0 === o ? 1 : 0,
        nbPage: r,
        id5cdn: i.isUsingCdn,
        ua: window.navigator.userAgent,
        att: i.att
      };
      r = e.gdprApplies;
      L(r) && (c.gdpr = r ? 1 : 0);
      r = e.consentString;
      L(r) && (c.gdpr_consent = r),
        L(i.allowedVendors)
          ? (c.allowed_vendors = i.allowedVendors)
          : L(e.allowedVendors) && (c.allowed_vendors = e.allowedVendors),
        L(e.gppData) &&
          ((c.gpp_string = e.gppData.gppString),
          (c.gpp_sid = e.gppData.applicableSections.join(','))),
        L(t) && (c.s = t);
      t = i.uaHints;
      L(t) && (c.ua_hints = t),
        L(e.ccpaString) && '' !== e.ccpaString && (c.us_privacy = e.ccpaString),
        (function (e) {
          var t = Object.keys(e);
          let i = t.length,
            r = new Array(i);
          for (; i--; ) r[i] = [t[i], e[t[i]]];
          return r;
        })({
          pd: 'pd',
          partnerUserId: 'puid',
          provider: 'provider',
          segments: 'segments',
          trueLink: 'true_link'
        }).forEach((e) => {
          var t = l(e, 2),
            e = t[0],
            t = t[1];
          L(i[e]) && (c[t] = i[e]);
        });
      e = i.abTesting;
      e &&
        !0 === e.enabled &&
        (c.ab_testing = { enabled: !0, control_group_pct: e.controlGroupPct });
      e = i.invalidSegmentsCount;
      return (
        e && 0 < e && (c._invalid_segments = e),
        i.trace && (c._trace = !0),
        (c.provided_options = {
          refresh_in_seconds: i.providedRefreshInSeconds
        }),
        (c.used_refresh_in_seconds = s),
        (c.extensions = n),
        c
      );
    }
  }
  const Ce = Object.freeze({
      CONSENT_UPDATED: 'consent_updated',
      USER_ID_READY: 'user_id_ready',
      CASCADE_NEEDED: 'fire_sync_pixel',
      USER_ID_FETCH_CANCELED: 'user_id_fetch_canceled',
      USER_ID_FETCH_FAILED: 'user_id_fetch_failed'
    }),
    we = Object.freeze({
      ID5_MESSAGE_RECEIVED: 'message',
      ID5_INSTANCE_JOINED: 'instance-joined',
      ID5_LEADER_ELECTED: 'leader-elected'
    }),
    ye = Object.freeze([...Object.values(we), ...Object.values(Ce)]);
  class Se {
    constructor() {
      var e =
        0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : g;
      d(this, '_handlers', void 0),
        d(this, '_log', void 0),
        (this._log = e),
        (this._handlers = {});
    }
    _dispatch(t) {
      var e = this._handlers[t];
      if (e) {
        for (
          var i = arguments.length, r = new Array(1 < i ? i - 1 : 0), s = 1;
          s < i;
          s++
        )
          r[s - 1] = arguments[s];
        var n,
          o = f(e);
        try {
          for (o.s(); !(n = o.n()).done; ) {
            const a = n.value;
            try {
              a(...r);
            } catch (e) {
              this._log.error(
                'Event '.concat(t, ' handler execution failed.'),
                e
              );
            }
          }
        } catch (e) {
          o.e(e);
        } finally {
          o.f();
        }
      }
    }
    emit(e) {
      if (void 0 !== e && ye.includes(e)) {
        for (
          var t = arguments.length, i = new Array(1 < t ? t - 1 : 0), r = 1;
          r < t;
          r++
        )
          i[r - 1] = arguments[r];
        this._dispatch(e, ...i);
      } else this._log.warn('Unsupported event', e);
    }
    on(e, t) {
      void 0 !== e && ye.includes(e)
        ? (this._handlers[e] || (this._handlers[e] = []),
          this._handlers[e].push(t))
        : this._log.warn('Unsupported event', e);
    }
  }
  const be = Object.freeze({
    DIRECT_METHOD: 'direct_method',
    POST_MESSAGE: 'post_message'
  });
  class De {
    constructor(e, t, i) {
      var r =
        3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : g;
      d(this, '_instanceProperties', void 0),
        d(this, '_log', void 0),
        d(this, 'callType', void 0),
        d(this, '_instanceWindow', void 0),
        (this._instanceWindow = t),
        (this._instanceProperties = i),
        (this._log = r),
        (this.callType = e);
    }
    getId() {
      return this._instanceProperties.id;
    }
    getFetchIdData() {
      return this._instanceProperties.fetchIdData;
    }
    updateFetchIdData(e) {
      u(this._instanceProperties.fetchIdData, e);
    }
    getCacheId() {
      var e = this._instanceProperties.fetchIdData,
        e = {
          partnerId: e.partnerId,
          att: e.att,
          pd: e.pd,
          provider: e.provider,
          abTesting: e.abTesting,
          segments: JSON.stringify(e.segments),
          providedRefresh: e.providedRefreshInSeconds,
          trueLink: null === (e = e.trueLink) || void 0 === e ? void 0 : e.id
        };
      return M(JSON.stringify(e));
    }
    getDeclaredConsentSource() {
      return this._instanceProperties.fetchIdData.consentSource || V.cmp;
    }
    getSourceVersion() {
      return this._instanceProperties.sourceVersion;
    }
    getSource() {
      return this._instanceProperties.source;
    }
    notifyUidReady() {}
    notifyFetchUidCanceled() {}
    notifyCascadeNeeded() {}
    canDoCascade() {
      return !0 === this._instanceProperties.canDoCascade;
    }
    getStorage() {
      return ee;
    }
    getWindow() {
      return this._instanceWindow;
    }
  }
  class Ee extends De {
    constructor(e, t, i) {
      var r =
          3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : g,
        s = 4 < arguments.length ? arguments[4] : void 0;
      super(be.DIRECT_METHOD, e, t, r),
        d(this, '_dispatcher', void 0),
        d(this, '_provisionedUids', void 0),
        d(this, '_metrics', void 0),
        (this._dispatcher = i),
        (this._metrics = s),
        (this._provisionedUids = new Map());
    }
    notifyUidReady(e, t) {
      var i,
        r =
          null == e || null === (i = e.responseObj) || void 0 === i
            ? void 0
            : i.universal_uid;
      r &&
        (this._provisionedUids.has(r)
          ? ((i = this._provisionedUids.get(r)),
            this._metrics
              .userIdProvisioningDuplicateTimer({
                provisioner: t.provisioner,
                firstProvisioner: i.provisioner
              })
              .record(performance.now() - i.time))
          : (this._provisionedUids.set(r, {
              provisioner: t.provisioner,
              time: performance.now()
            }),
            this._dispatcher.emit(Ce.USER_ID_READY, e, t)));
    }
    notifyFetchUidCanceled(e) {
      this._dispatcher.emit(Ce.USER_ID_FETCH_CANCELED, e);
    }
    notifyCascadeNeeded(e) {
      this._dispatcher.emit(Ce.CASCADE_NEEDED, e);
    }
  }
  class Te extends Z {
    constructor(e, t) {
      super(),
        d(this, '_messenger', void 0),
        d(this, '_destinationId', void 0),
        (this._messanger = e),
        (this._destinationId = t);
    }
    getItem() {}
    removeItem(e) {
      this._remoteCall('removeItem', [e]);
    }
    setItem(e, t) {
      this._remoteCall('setItem', [e, t]);
    }
    _remoteCall(e, t) {
      this._messanger.callProxyMethod(this._destinationId, i.STORAGE, e, t);
    }
  }
  class Ae extends De {
    constructor(e, t) {
      var i =
        2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : g;
      super(be.POST_MESSAGE, e.getWindow(), e.properties, i),
        d(this, '_messenger', void 0),
        (this._messenger = t);
    }
    _callProxy(e, t) {
      this._messenger.callProxyMethod(this.getId(), i.FOLLOWER, e, t);
    }
    notifyUidReady(e, t) {
      this._callProxy('notifyUidReady', [e, t]);
    }
    notifyFetchUidCanceled(e) {
      this._callProxy('notifyFetchUidCanceled', [e]);
    }
    notifyCascadeNeeded(e) {
      this._callProxy('notifyCascadeNeeded', [e]);
    }
    getStorage() {
      return new Te(this._messenger, this.getId());
    }
  }
  class Pe {
    constructor(e, t, i, r) {
      d(this, '_store', void 0),
        d(this, '_log', void 0),
        d(this, '_provisioner', void 0),
        d(this, '_meter', void 0),
        (this._provisioner = e),
        (this._store = t),
        (this._log = i),
        (this._meter = r);
    }
    provisionFromCache(t) {
      var i =
        1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : void 0;
      try {
        const o = this._log;
        var r = t.getCacheId();
        const a = this._store.getCachedResponse(r);
        var s,
          n = !a || !a.isValid() || a.isExpired();
        let e = !1;
        return (
          a &&
            ((s = a.getAgeSec()),
            this._meter
              .cachedUserIdAge({
                expired: a.isExpired(),
                valid: a.isValid(),
                provisioner: this._provisioner,
                maxAge: a.getMaxAge()
              })
              .record(isNaN(s) ? 0 : s)),
          a && a.isValid()
            ? (o.info(
                'Found valid cached response for instance ',
                JSON.stringify({
                  id: t.getId(),
                  cacheId: t.getCacheId(),
                  provisioner: this._provisioner,
                  responseFromCache: a
                })
              ),
              t.notifyUidReady(
                {
                  timestamp: a.timestamp,
                  responseObj: a.response,
                  isFromCache: !0,
                  willBeRefreshed: !!n
                },
                {
                  timestamp: Date.now(),
                  provisioner: this._provisioner,
                  tags: h({ callType: t.callType }, i)
                }
              ),
              (e = !0))
            : o.info("Couldn't find response for cacheId", t.getCacheId()),
          {
            cacheId: r,
            responseFromCache: a,
            refreshRequired: n,
            provisioned: e
          }
        );
      } catch (e) {
        return (
          this._log.error('Cached UserId provisioning failure', e),
          { refreshRequired: !0, provisioned: !1 }
        );
      }
    }
  }
  class Oe {
    constructor() {
      var e = 0 < arguments.length && void 0 !== arguments[0] && arguments[0],
        t = 1 < arguments.length && void 0 !== arguments[1] && arguments[1];
      d(this, 'lateJoiner', !1),
        d(this, 'uniqueLateJoiner', !1),
        (this.lateJoiner = e),
        (this.uniqueLateJoiner = t);
    }
  }
  class Re {
    updateConsent() {}
    updateFetchIdData() {}
    refreshUid() {}
    addFollower() {}
    getProperties() {}
  }
  class xe extends Re {
    constructor(e, t, i, r, s, n) {
      var o =
          6 < arguments.length && void 0 !== arguments[6] ? arguments[6] : g,
        a = 7 < arguments.length ? arguments[7] : void 0;
      super(),
        d(this, '_followers', void 0),
        d(this, '_followersRequests', {}),
        d(this, '_refreshRequired', {}),
        d(this, '_fetcher', void 0),
        d(this, '_log', void 0),
        d(this, '_consentManager', void 0),
        d(this, '_inProgressFetch', void 0),
        d(this, '_queuedRefreshArgs', void 0),
        d(this, '_lastConsentDataSet', void 0),
        d(this, '_metrics', void 0),
        d(this, '_leaderStorage', void 0),
        d(this, '_store', void 0),
        (this._followers = []),
        (this._fetcher = a),
        (this._properties = t),
        (this._consentManager = s),
        (this._metrics = n),
        (this._window = e),
        (this._leaderStorage = i),
        (this._log = o),
        (this._store = r),
        (this._firstFetchTriggered = !1),
        (this._cachedIdProvider = new Pe(
          'leader',
          this._store,
          this._log,
          this._metrics
        ));
    }
    _handleRefreshResult(e, t, i, r) {
      const s = this._log,
        n = this._consentManager,
        o = this._store;
      if (void 0 !== r) {
        var a;
        n.setStoredPrivacy(
          null === (a = r.getGenericResponse()) || void 0 === a
            ? void 0
            : a.privacy
        );
        const p = n.localStorageGrant('fetcher-after-response');
        p.isDefinitivelyAllowed()
          ? (s.info('Storing ID and request hashes in cache'),
            o.updateNbs(t),
            o.storeResponse(e, r))
          : (s.info('Cannot use local storage to cache ID', p), o.clearAll(e));
        var c,
          l = f(e);
        try {
          for (l.s(); !(c = l.n()).done; ) {
            var d = c.value.integrationId;
            this._followersRequests[d] = (this._followersRequests[d] || 0) + 1;
          }
        } catch (e) {
          l.e(e);
        } finally {
          l.f();
        }
        const _ = [];
        var h,
          u = f(this._followers);
        try {
          for (u.s(); !(h = u.n()).done; ) {
            const v = h.value;
            var g = r.getResponseFor(v.getId());
            void 0 !== g &&
              (this._log.debug(
                'Notify uid ready.',
                'Follower:',
                v.getId(),
                'Uid:',
                g
              ),
              (this._refreshRequired[v.getId()] = !1),
              this._notifyUidReady(v, {
                timestamp: r.timestamp,
                responseObj: g,
                isFromCache: !1
              }),
              !0 === g.cascade_needed && _.push(v.getId()));
          }
        } catch (e) {
          u.e(e);
        } finally {
          u.f();
        }
        void 0 !== i &&
          0 < _.length &&
          this._consentManager
            .localStorageGrant('leader-before-cascade')
            .isDefinitivelyAllowed() &&
          this._handleCascade(_, r, i);
      }
    }
    _notifyUidReady(e, t) {
      var i = {
        timestamp: Date.now(),
        provisioner: 'leader',
        tags: { callType: e.callType }
      };
      e.notifyUidReady(t, i);
    }
    _handleCascade(e, t, i) {
      var r,
        s = this._followers
          .filter(
            (t) => void 0 !== e.find((e) => t.getId() === e) && t.canDoCascade()
          )
          .sort((e, t) => {
            function i(e) {
              var t;
              return (
                (null === (e = e.getFetchIdData().refererInfo) ||
                void 0 === e ||
                null === (t = e.stack) ||
                void 0 === t
                  ? void 0
                  : t.length) || Number.MAX_SAFE_INTEGER
              );
            }
            return i(e) - i(t);
          });
      if (0 < s.length) {
        const n = s[0];
        n.notifyCascadeNeeded({
          partnerId: n.getFetchIdData().partnerId,
          userId: t.getResponseFor(n.getId()).universal_uid,
          gdprApplies: i.gdprApplies,
          consentString: i.consentString,
          gppString:
            null === (t = i.gppData) || void 0 === t ? void 0 : t.gppString,
          gppSid:
            null === (i = i.gppData) ||
            void 0 === i ||
            null === (r = i.applicableSections) ||
            void 0 === r
              ? void 0
              : r.join(',')
        });
      } else this._log.error("Couldn't find cascade eligible follower");
    }
    _handleCancel(e) {
      var t,
        i = f(this._followers);
      try {
        for (i.s(); !(t = i.n()).done; ) {
          const r = t.value;
          r.notifyFetchUidCanceled({ reason: e });
        }
      } catch (e) {
        i.e(e);
      } finally {
        i.f();
      }
    }
    _getId() {
      let n = 0 < arguments.length && void 0 !== arguments[0] && arguments[0];
      const o = this._log;
      this._waitForConsent().then((t) => {
        const e = this._consentManager.localStorageGrant(
          'fetch-before-request'
        );
        if ((o.info('Local storage grant', e), e.allowed)) {
          var i = this._store.hasConsentChanged(t);
          e.isDefinitivelyAllowed() && this._store.storeConsent(t);
          var r = te.checkIfAccessible();
          const c = new Map();
          let a = n;
          const s = this._followers.map((e) => {
            var t = e.getId(),
              i = (this._followersRequests[t] || 0) + 1,
              r = this._properties.id,
              s = !0 === this._refreshRequired[e.getId()];
            a = a || s;
            var n,
              o = e.getCacheId();
            return (
              c.has(o) ||
                ((n = this._store.getCachedResponse(o)) && c.set(o, n)),
              h(
                h({}, e.getFetchIdData()),
                {},
                {
                  integrationId: t,
                  requestCount: i,
                  refresh: s,
                  role: r === e.getId() ? 'leader' : 'follower',
                  cacheId: o,
                  cacheData: c.get(o),
                  sourceVersion: e.getSourceVersion(),
                  source: e.getSource()
                }
              )
            );
          });
          i || a
            ? (o.info('Decided to fetch a fresh ID5 ID', {
                consentHasChanged: i,
                shouldRefresh: a
              }),
              o.info('Fetching ID5 ID (forceFetch:'.concat(n, ')')),
              (this._inProgressFetch = !0),
              (this._firstFetchTriggered = !0),
              this._fetcher
                .fetchId(s, t, r)
                .then((e) => {
                  this._handleRefreshResult(s, c, t, e),
                    this._handleFetchCompleted();
                })
                .catch((e) => {
                  this._handleFailed(e), this._handleFetchCompleted();
                }))
            : (o.info('Not decided to refresh ID5 ID', {
                consentHasChanged: i,
                shouldRefresh: a
              }),
              this._handleFetchCompleted());
        } else
          o.info('No legal basis to use ID5', t),
            this._store.clearAll(
              this._followers.map((e) => ({ cacheId: e.getCacheId() }))
            ),
            this._handleCancel('No legal basis to use ID5');
      });
    }
    _waitForConsent() {
      const t = this._log,
        e = this._consentManager,
        i = this._metrics;
      t.info('Waiting for consent');
      const r = i.timer('fetch.consent.wait.time');
      return e
        .getConsentData()
        .then((e) => (t.info('Consent received', e), r && r.recordNow(), e));
    }
    start() {
      !0 !== this._started && (this._getId(!1), (this._started = !0));
    }
    refreshUid() {
      var e =
        0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
      let t = 1 < arguments.length ? arguments[1] : void 0;
      var i = !0 === e.forceFetch;
      t &&
        (i
          ? (this._refreshRequired[t] = !0)
          : (i = this._followers.find((e) => e.getId() === t)) &&
            this._provisionFromCache(i)),
        this._metrics
          .refreshCallCounter('leader', {
            overwrites: void 0 === this._queuedRefreshArgs
          })
          .inc(),
        this._callRefresh(e, t);
    }
    _callRefresh() {
      var e =
          0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {},
        t = 1 < arguments.length ? arguments[1] : void 0;
      this._inProgressFetch
        ? (this._queuedRefreshArgs = [e, t])
        : (!0 === e.resetConsent &&
            (this._consentManager.resetConsentData(
              !0 === e.forceAllowLocalStorageGrant
            ),
            (this._awaitedConsentFrom = t)),
          this._getId(!0 === e.forceFetch));
    }
    updateConsent(e, t) {
      if (this._consentManager.hasConsentSet())
        this._handleIgnoredConsentUpdate(e);
      else {
        const s = new Set(
          this._followers.map((e) => e.getDeclaredConsentSource())
        );
        var i = e.source || V.cmp,
          r = 1 === s.size && s.has(V.partner);
        this._awaitedConsentFrom
          ? this._awaitedConsentFrom === t
            ? (this._consentManager.setConsentData(e),
              (this._awaitedConsentFrom = void 0))
            : this._handleIgnoredConsent(e, 'awaited')
          : i !== V.partner || r
            ? this._consentManager.setConsentData(e)
            : this._handleIgnoredConsent(e, 'partner');
      }
    }
    _handleIgnoredConsentUpdate(e) {
      try {
        const r = this._consentManager._consentDataHolder.getValue();
        if (r) {
          const s = {},
            n = q.createFrom(e);
          Object.values(j).forEach((e) => {
            var t, i;
            n.apiTypes.includes(e) && r.apiTypes.includes(e)
              ? ((t = JSON.stringify(r.getApiTypeData(e))),
                (i = JSON.stringify(n.getApiTypeData(e))),
                (s[e] = t === i ? 'same' : 'different'))
              : n.apiTypes.includes(e)
                ? (s[e] = 'added')
                : r.apiTypes.includes(e) && (s[e] = 'missed');
          }),
            this._metrics.consentChangeCounter(s).inc();
        }
      } catch (e) {
        this._log.error(e);
      }
    }
    _handleIgnoredConsent(e, t) {
      try {
        const i = { reason: t, source: e.source };
        e.apiTypes.forEach((e) => (i[e] = !0)),
          this._metrics.consentIgnoreCounter(i);
      } catch (e) {
        this._log.error(e);
      }
    }
    updateFetchIdData(t, e) {
      const i = this._followers.find((e) => e.getId() === t);
      var r = i.getCacheId();
      i.updateFetchIdData(e);
      e = i.getCacheId();
      e !== r &&
        (this._log.info(
          'Follower',
          i.getId(),
          'cacheId changed from',
          r,
          ' to',
          e,
          'required refresh'
        ),
        (this._refreshRequired[i.getId()] = !0));
    }
    addFollower(t) {
      const e = this._log;
      var i =
        void 0 ===
        this._followers.find((e) => e.getCacheId() === t.getCacheId());
      this._followers.push(t),
        e.info('Added follower', t.getId(), 'cacheId', t.getCacheId()),
        this._window !== t.getWindow() &&
          ((r = t.getStorage()),
          e.info("Adding follower's", t.getId(), 'storage as replica'),
          this._leaderStorage.addReplica(r));
      var r = this._provisionFromCache(t);
      let s = new Oe();
      return (
        !0 === this._firstFetchTriggered &&
          ((s.lateJoiner = !0),
          (s.uniqueLateJoiner = i),
          r && this._callRefresh({ forceFetch: !0 })),
        s
      );
    }
    _provisionFromCache(e) {
      var t = this._cachedIdProvider.provisionFromCache(e);
      return (
        (this._refreshRequired[e.getId()] = t.refreshRequired),
        t.provisioned && this._store.incNb(t.cacheId),
        t.refreshRequired
      );
    }
    getProperties() {
      return this._properties;
    }
    _handleFetchCompleted() {
      (this._inProgressFetch = void 0),
        this._queuedRefreshArgs &&
          (this._callRefresh(...this._queuedRefreshArgs),
          (this._queuedRefreshArgs = void 0));
    }
    _handleFailed(e) {
      this._log.error('Fetch id failed', e);
      var t,
        i = f(this._followers);
      try {
        for (i.s(); !(t = i.n()).done; ) {
          const r = t.value;
          r.notifyFetchUidCanceled({ reason: 'error' });
        }
      } catch (e) {
        i.e(e);
      } finally {
        i.f();
      }
    }
  }
  class Ne extends Re {
    constructor(e, t) {
      super(),
        d(this, '_messenger', void 0),
        d(this, '_leaderInstanceProperties', void 0),
        (this._messenger = e),
        (this._leaderInstanceProperties = t);
    }
    _sendToLeader(e, t) {
      this._messenger.callProxyMethod(
        this._leaderInstanceProperties.id,
        i.LEADER,
        e,
        t
      );
    }
    updateConsent(e, t) {
      this._sendToLeader('updateConsent', [e, t]);
    }
    refreshUid(e, t) {
      this._sendToLeader('refreshUid', [e, t]);
    }
    updateFetchIdData(e, t) {
      this._sendToLeader('updateFetchIdData', [e, t]);
    }
    getProperties() {
      return this._leaderInstanceProperties;
    }
  }
  class Le extends Re {
    constructor() {
      super(...arguments),
        d(this, '_callsQueue', []),
        d(this, '_assignedLeader', void 0);
    }
    updateConsent(e, t) {
      this._callOrBuffer('updateConsent', [e, t]);
    }
    updateFetchIdData(e, t) {
      this._callOrBuffer('updateFetchIdData', [e, t]);
    }
    refreshUid(e, t) {
      this._callOrBuffer('refreshUid', [e, t]);
    }
    addFollower(e) {
      return this._callOrBuffer('addFollower', [e]);
    }
    getProperties() {
      if (this._assignedLeader) return this._assignedLeader.getProperties();
    }
    assignLeader(e) {
      this._assignedLeader = e;
      var t,
        i = f(this._callsQueue);
      try {
        for (i.s(); !(t = i.n()).done; ) {
          var r = t.value;
          this._callAssignedLeader(r.name, r.args);
        }
      } catch (e) {
        i.e(e);
      } finally {
        i.f();
      }
      this._callsQueue = [];
    }
    _callOrBuffer(e, t) {
      if (this._assignedLeader) return this._callAssignedLeader(e, t);
      this._callsQueue.push({ name: e, args: t });
    }
    _callAssignedLeader(e, t) {
      return this._assignedLeader[e](...t);
    }
  }
  class Ue {
    constructor() {
      d(this, '_valuePromise', void 0),
        d(this, '_value', void 0),
        d(this, '_resolve', void 0),
        d(this, '_hasValue', void 0),
        this.reset();
    }
    reset() {
      (this._value = void 0),
        (this._hasValue = !1),
        (this._valuePromise = new Promise((e) => {
          this._resolve = e;
        }));
    }
    set(e) {
      this._hasValue
        ? (this._valuePromise = Promise.resolve(e))
        : ((this._hasValue = !0), this._resolve(e)),
        (this._value = e);
    }
    getValuePromise() {
      return this._valuePromise;
    }
    hasValue() {
      return this._hasValue;
    }
    getValue() {
      return this._value;
    }
  }
  class Fe extends class {
    getConsentData() {}
    localStorageGrant() {}
    setStoredPrivacy() {}
  } {
    constructor(e, t, i, r, s) {
      super(),
        d(this, '_consentDataHolder', void 0),
        d(this, 'storedPrivacyData', void 0),
        d(this, 'localStorage', void 0),
        d(this, '_forceAllowLocalStorageGrant', void 0),
        (this._log = r),
        (this.localStorage = e),
        (this.storageConfig = t),
        (this._consentDataHolder = new Ue()),
        (this._forceAllowLocalStorageGrant = i),
        (this._metrics = s);
    }
    isForceAllowLocalStorageGrant() {
      return this._forceAllowLocalStorageGrant;
    }
    resetConsentData(e) {
      this._consentDataHolder.reset(),
        (this.storedPrivacyData = void 0),
        (this._forceAllowLocalStorageGrant = e);
    }
    localStorageGrant() {
      var e,
        t =
          0 < arguments.length && void 0 !== arguments[0]
            ? arguments[0]
            : 'unknown',
        i = this._getLocalStorageGrant();
      return (
        null === (e = this._metrics) ||
          void 0 === e ||
          (null !==
            (t = e.localStorageGrantCounter(
              h(
                h(
                  {
                    allowed: i.allowed,
                    grantType: i.grantType,
                    lsgContext: t,
                    consentSet:
                      null === (t = this._consentDataHolder) || void 0 === t
                        ? void 0
                        : t.hasValue()
                  },
                  i.api
                ),
                i._debugInfo
              )
            )) &&
            void 0 !== t &&
            t.inc()),
        i
      );
    }
    _getLocalStorageGrant() {
      const e = this._log;
      if (!0 === this._forceAllowLocalStorageGrant)
        return (
          e.warn(
            'cmpApi: Local storage access granted by configuration override, consent will not be checked'
          ),
          new J(!0, H.FORCE_ALLOWED_BY_CONFIG)
        );
      if (
        this._consentDataHolder.hasValue() &&
        0 !== this._consentDataHolder.getValue().apiTypes.length
      )
        return this._consentDataHolder.getValue().localStorageGrant();
      if (
        (N(this.storedPrivacyData) ||
          ((t = this.localStorage.getItemWithExpiration(
            this.storageConfig.PRIVACY
          )),
          (this.storedPrivacyData = t && JSON.parse(t)),
          e.info(
            'cmpApi: Loaded stored privacy data from local storage',
            this.storedPrivacyData
          )),
        this.storedPrivacyData && !0 === this.storedPrivacyData.id5_consent)
      )
        return new J(!0, H.ID5_CONSENT);
      if (!this.storedPrivacyData || !L(this.storedPrivacyData.jurisdiction))
        return new J(!0, H.PROVISIONAL);
      var t = this.storedPrivacyData.jurisdiction,
        t = t in B.PRIVACY.JURISDICTIONS && B.PRIVACY.JURISDICTIONS[t];
      return new J(!1 === t, H.JURISDICTION);
    }
    setStoredPrivacy(e) {
      const t = this._log;
      try {
        N(e)
          ? ((this.storedPrivacyData = e),
            this.localStorage.setItemWithExpiration(
              this.storageConfig.PRIVACY,
              JSON.stringify(e)
            ))
          : t.error(
              'cmpApi: Cannot store privacy data if it is not an object',
              e
            );
      } catch (e) {
        t.error('cmpApi: Error while storing privacy data', e);
      }
    }
    setConsentData(e) {
      this._log.debug('Set consent data', e);
      e = q.createFrom(e);
      this._consentDataHolder.set(e);
    }
    getConsentData() {
      return this._consentDataHolder.getValuePromise();
    }
    hasConsentSet() {
      return this._consentDataHolder.hasValue();
    }
  }
  class ke {
    constructor(e, t, i, r) {
      d(this, 'localStorageGrantChecker', void 0),
        d(this, 'localStorage', void 0),
        d(this, '_log', void 0),
        (this.localStorageGrantChecker = e),
        (this.localStorage = t),
        (this.storageConfig = i),
        (this._log = r);
    }
    get(e) {
      const t = this._log;
      try {
        const r = this.localStorageGrant();
        if (r.isDefinitivelyAllowed()) {
          var i = this.localStorage.getItemWithExpiration(e);
          return (
            t.info(
              'Local storage get key='.concat(e.name, ' value=').concat(i)
            ),
            i
          );
        }
        t.warn('clientStore.get() has been called without definitive grant', r);
      } catch (e) {
        t.error(e);
      }
    }
    _getObject(e) {
      const t = this._log;
      try {
        const r = this.localStorageGrant();
        if (r.isDefinitivelyAllowed()) {
          var i = this.localStorage.getObjectWithExpiration(e);
          return (
            t.info(
              'Local storage get key='.concat(e.name, ' value=').concat(i)
            ),
            i
          );
        }
        t.warn('clientStore.get() has been called without definitive grant', r);
      } catch (e) {
        t.error(e);
      }
    }
    clear(e) {
      const t = this._log;
      try {
        this.localStorage.removeItemWithExpiration(e);
      } catch (e) {
        t.error(e);
      }
    }
    scheduleGC(t) {
      const i = this.localStorageGrant(),
        r = this.localStorage,
        s = this.storageConfig.ID5_V2.name;
      setTimeout(function () {
        var e;
        i.isDefinitivelyAllowed() &&
          ((e = r.removeExpiredObjectWithPrefix(s)),
          t.storageAllKeysCounter().record((null == e ? void 0 : e.all) || 0),
          t
            .storageExpiredKeysCounter()
            .record((null == e ? void 0 : e.expired) || 0));
      }, 0);
    }
    _clearObject(e) {
      const t = this._log;
      try {
        this.localStorage.removeItem(e.name);
      } catch (e) {
        t.error(e);
      }
    }
    _put(e, t) {
      const i = this._log;
      try {
        const r = this.localStorageGrant();
        r.isDefinitivelyAllowed()
          ? (i.info(
              'Local storage put key='.concat(e.name, ' value=').concat(t)
            ),
            this.localStorage.setItemWithExpiration(e, t))
          : i.warn(
              'clientStore._put() has been called without definitive grant',
              r
            );
      } catch (e) {
        i.error(e);
      }
    }
    _updateObject(e, t) {
      const i = this._log;
      try {
        const r = this.localStorageGrant();
        if (r.isDefinitivelyAllowed())
          return this.localStorage.updateObjectWithExpiration(e, t);
        i.warn(
          'clientStore._updateObject() has been called without definitive grant',
          r
        );
      } catch (e) {
        i.error(e);
      }
    }
    localStorageGrant() {
      return this.localStorageGrantChecker();
    }
    getResponse() {
      var e = this.get(this.storageConfig.ID5);
      return e && JSON.parse(decodeURIComponent(e));
    }
    clearResponse() {
      this.clear(this.storageConfig.ID5);
    }
    clearResponseV2(e) {
      this._clearObject(this.storageConfig.ID5_V2.withNameSuffixed(e));
    }
    putResponseV1(e) {
      this._put(
        this.storageConfig.ID5,
        encodeURIComponent(O(e) ? e : JSON.stringify(e))
      );
    }
    getHashedConsentData() {
      return this.get(this.storageConfig.CONSENT_DATA);
    }
    clearHashedConsentData() {
      this.clear(this.storageConfig.CONSENT_DATA);
    }
    putHashedConsentData(e) {
      e !== new q() && this._put(this.storageConfig.CONSENT_DATA, e.hashCode());
    }
    clearDateTime() {
      this.clear(this.storageConfig.LAST);
    }
    setResponseDateTimeV1(e) {
      this._put(this.storageConfig.LAST, e);
    }
    storeResponseV2(e, t) {
      let i =
        2 < arguments.length && void 0 !== arguments[2]
          ? arguments[2]
          : Date.now();
      return this._updateObject(
        this.storageConfig.ID5_V2.withNameSuffixed(e),
        (e) => h(h({}, e), {}, { response: t, responseTimestamp: i })
      );
    }
    getStoredResponseV2(e) {
      return this._getObject(this.storageConfig.ID5_V2.withNameSuffixed(e));
    }
    incNbV2(e) {
      let i =
        1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 1;
      return this._updateObject(
        this.storageConfig.ID5_V2.withNameSuffixed(e),
        (e) => {
          var t = Math.max(
            0,
            x(null == e ? void 0 : e.nb) ? Math.round(e.nb) + i : i
          );
          return h(h({}, e), {}, { nb: t });
        }
      );
    }
    static storedDataMatchesCurrentData(e, t) {
      return null == e || e === t;
    }
    storedConsentDataMatchesConsentData(e) {
      return ke.storedDataMatchesCurrentData(
        this.getHashedConsentData(),
        e.hashCode()
      );
    }
    getExtensions() {
      return this._getObject(this.storageConfig.EXTENSIONS);
    }
    storeExtensions(e, t) {
      return this._updateObject(t, () => e);
    }
    clearExtensions() {
      return this.clear(this.storageConfig.EXTENSIONS);
    }
  }
  class Me {
    constructor(e, t, i) {
      d(this, '_metrics', void 0),
        d(this, '_log', void 0),
        d(this, '_store', void 0),
        (this._metrics = e),
        (this._log = t),
        (this._store = i);
    }
    static getChunkUrl(e, t) {
      return 'https://d'.concat(e, '.eu-').concat(t, '-id5-sync.com');
    }
    submitExtensionCall(t, i) {
      var e =
        2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : void 0;
      let r = _e();
      return fetch(t, e)
        .then((e) => {
          if (e.ok)
            return r.record(this._metrics.extensionsCallTimer(i, !0)), e.json();
          r.record(this._metrics.extensionsCallTimer(i, !1));
          e = 'The call to get extensions at '
            .concat(t, ' was not ok, status: ')
            .concat(e.status, ', statusText: ')
            .concat(e.statusText);
          return this._log.warn(e), Promise.reject(new Error(e));
        })
        .catch(
          (e) => (
            r.record(this._metrics.extensionsCallTimer(i, !1)),
            this._log.warn('Got error from '.concat(t, ' endpoint'), e),
            {}
          )
        );
    }
    gatherChunks(e, i) {
      if (e) {
        let t = _e();
        return Promise.all(
          Array.from({ length: i.length }, (e, t) => {
            t = Me.getChunkUrl(t, i.urlVersion);
            return fetch(t).then((e) => {
              if (e.ok) return e.text();
              throw new Error(
                'The call to get '
                  .concat(i.name, ' was not ok, status: ')
                  .concat(e.status, ', statusText: ')
                  .concat(e.statusText)
              );
            });
          })
        )
          .then(
            (e) => (
              t.record(this._metrics.extensionsCallTimer(i.name, !0)),
              { [i.name]: e, [i.name + 'Version']: ''.concat(i.version) }
            )
          )
          .catch(
            (e) => (
              t.record(this._metrics.extensionsCallTimer(i.name, !1)),
              this._log.warn('Got error when getting '.concat(i.name), e),
              {}
            )
          );
      }
      return Promise.resolve({});
    }
    gather(e) {
      var t = this._store.getCachedExtensions();
      if (void 0 !== t) return Promise.resolve(t);
      let i = _e(),
        r = this._submitBounce(e);
      return this.submitExtensionCall(
        'https://lb.eu-1-id5-sync.com/lb/v1',
        'lb'
      )
        .then((e) => {
          var t = this.getChunksEnabled(e);
          return Promise.allSettled([
            Promise.resolve(e),
            this.gatherChunks(t, Me.CHUNKS_CONFIGS.devChunks),
            this.gatherChunks(t, Me.CHUNKS_CONFIGS.groupChunks),
            r
          ]);
        })
        .then((e) => {
          i.record(this._metrics.extensionsCallTimer('all', !0));
          let t = Me.DEFAULT_RESPONSE;
          return (
            e.forEach((e) => {
              e.value && (t = h(h({}, t), e.value));
            }),
            this._store.storeExtensions(t),
            t
          );
        })
        .catch(
          (e) => (
            i.record(this._metrics.extensionsCallTimer('all', !1)),
            this._log.error(
              'Got error '.concat(e, ' when gathering extensions data')
            ),
            Me.DEFAULT_RESPONSE
          )
        );
    }
    _submitBounce(e) {
      return e.some((e) => {
        return L(
          null === (e = e.cacheData) || void 0 === e ? void 0 : e.signature
        );
      })
        ? Promise.resolve({})
        : this.submitExtensionCall('https://id5-sync.com/bounce', 'bounce', {
            credentials: 'include'
          });
    }
    getChunksEnabled(e) {
      e = null == e ? void 0 : e.chunks;
      return 0 !== e && e;
    }
  }
  d(
    Me,
    'CHUNKS_CONFIGS',
    Object.freeze({
      devChunks: { name: 'devChunks', urlVersion: 3, length: 8, version: 4 },
      groupChunks: { name: 'groupChunks', urlVersion: 4, length: 8, version: 4 }
    })
  ),
    d(Me, 'DEFAULT_RESPONSE', { lbCDN: '%%LB_CDN%%' });
  const Ve = {
      createExtensions: function (e, t, i) {
        return new Me(e, t, i);
      }
    },
    Ge = Object.freeze({
      UNKNOWN: 'unknown',
      LEADER: 'leader',
      FOLLOWER: 'follower'
    }),
    je = Object.freeze({
      MULTIPLEXING: 'multiplexing',
      SINGLETON: 'singleton'
    }),
    We = Object.freeze({
      AWAITING_SCHEDULE: 'awaiting_schedule',
      SKIPPED: 'skipped',
      SCHEDULED: 'scheduled',
      COMPLETED: 'completed',
      CANCELED: 'canceled'
    });
  class qe {
    constructor(e, t, i) {
      d(this, 'properties', void 0),
        d(this, 'knownState', void 0),
        d(this, '_joinTime', void 0),
        d(this, '_window', void 0),
        (this.properties = e),
        (this.knownState = t),
        (this._window = i),
        (this._joinTime = performance.now());
    }
    getId() {
      return this.properties.id;
    }
    isMultiplexingPartyAllowed() {
      var e;
      return (
        (null === (e = this.knownState) || void 0 === e
          ? void 0
          : e.operatingMode) === je.MULTIPLEXING
      );
    }
    getInstanceMultiplexingLeader() {
      var e, t;
      if (
        (null === (e = this.knownState) || void 0 === e
          ? void 0
          : e.operatingMode) === je.MULTIPLEXING
      )
        return null === (e = this.knownState) ||
          void 0 === e ||
          null === (t = e.multiplexing) ||
          void 0 === t
          ? void 0
          : t.leader;
    }
    getWindow() {
      return this._window;
    }
  }
  class He {
    constructor(e) {
      d(this, '_knownValues', []),
        d(this, '_counter', void 0),
        (this._counter = e);
    }
    add(e) {
      e &&
        -1 === this._knownValues.indexOf(e) &&
        (this._counter.inc(), this._knownValues.push(e));
    }
  }
  class Je {
    constructor(e, t) {
      d(this, '_instancesCounter', void 0),
        d(this, '_domainsCounter', void 0),
        d(this, '_windowsCounter', void 0),
        d(this, '_partnersCounter', void 0);
      var i = t.id;
      (this._instancesCounter = e.instanceCounter(t.id)),
        (this._windowsCounter = new He(e.instanceUniqWindowsCounter(i))),
        (this._partnersCounter = new He(e.instanceUniqPartnersCounter(i))),
        (this._domainsCounter = new He(e.instanceUniqueDomainsCounter(i)));
    }
    addInstance(e) {
      var t, i, r;
      this._instancesCounter.inc(),
        this._partnersCounter.add(
          (null == e || null === (t = e.fetchIdData) || void 0 === t
            ? void 0
            : t.partnerId) |
            (null == e ||
            null === (i = e.sourceConfiguration) ||
            void 0 === i ||
            null === (r = i.options) ||
            void 0 === r
              ? void 0
              : r.partnerId)
        ),
        this._domainsCounter.add(null == e ? void 0 : e.domain),
        this._windowsCounter.add(null == e ? void 0 : e.href);
    }
  }
  class Be {
    constructor(e) {
      d(this, '_scheduleTime', void 0),
        d(this, '_closeTime', void 0),
        d(this, '_timeoutId', void 0),
        d(this, '_state', We.AWAITING_SCHEDULE),
        d(this, '_delayMs', void 0),
        d(this, '_instance', void 0),
        (this._instance = e);
    }
    schedule(e) {
      const t = this;
      (t._delayMs = e),
        (this._timeoutId = setTimeout(() => {
          t._timeoutId &&
            ((t._timeoutId = void 0),
            t._instance._doElection(),
            t._closeWithState(We.COMPLETED));
        }, t._delayMs)),
        (t._state = We.SCHEDULED),
        (t._scheduleTime = performance.now());
    }
    skip() {
      this._closeWithState(We.SKIPPED);
    }
    cancel() {
      this._timeoutId &&
        (clearTimeout(this._timeoutId), (this._timeoutId = void 0)),
        this._closeWithState(We.CANCELED);
    }
    _closeWithState(e) {
      (this._state = e), (this._closeTime = performance.now());
    }
  }
  class ze {
    constructor(e, t, i, r, s, n, o) {
      d(this, 'properties', void 0),
        d(this, '_messenger', void 0),
        d(this, '_knownInstances', new Map()),
        d(this, '_lastJoinedInstance', void 0),
        d(this, 'role', void 0),
        d(this, '_leader', void 0),
        d(this, '_mode', void 0),
        d(this, '_metrics', void 0),
        d(this, '_logger', void 0),
        d(this, '_instanceCounters', void 0),
        d(this, '_election', void 0),
        d(this, '_window', void 0),
        d(this, '_storage', void 0),
        d(this, '_trueLinkAdapter', void 0),
        d(this, '_cachedIdProvider', void 0);
      var a =
        L(globalThis) && L(globalThis.crypto) && P(globalThis.crypto.randomUUID)
          ? globalThis.crypto.randomUUID()
          : ''.concat((1e6 * Math.random()) | 0);
      (this.properties = u(
        {
          id: a,
          version: '1.0.33',
          href: null === (a = e.location) || void 0 === a ? void 0 : a.href,
          domain:
            null === (a = e.location) || void 0 === a ? void 0 : a.hostname
        },
        t
      )),
        (this.role = Ge.UNKNOWN),
        (this._metrics = r),
        (this._instanceCounters = new Je(r, this.properties)),
        (this._loadTime = performance.now()),
        (this._logger = new Ke(s, this)),
        (this._window = e),
        (this._dispatcher = new Se(this._logger)),
        (this._leader = new Le()),
        (this._followerRole = new Ee(
          this._window,
          this.properties,
          this._dispatcher,
          this._logger,
          this._metrics
        )),
        (this._election = new Be(this)),
        (this._storage = i),
        (this._trueLinkAdapter = n),
        (this._cachedIdProvider = new Pe(
          'self',
          new Y(o, n),
          this._logger,
          this._metrics
        ));
    }
    updateConfig(e) {
      u(this.properties, e);
    }
    init() {
      var e =
        0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : 500;
      let r = this,
        s = r._window;
      (r._mode =
        !0 === r.properties.singletonMode ? je.SINGLETON : je.MULTIPLEXING),
        r._instanceCounters.addInstance(r.properties),
        (function (i) {
          const r = i._metrics;
          [100, 200, 500, 1e3, 2e3, 3e3, 5e3].forEach((t) => {
            setTimeout(() => {
              var e =
                ((null === (e = i._knownInstances) || void 0 === e
                  ? void 0
                  : e.size) || 0) + 1;
              r.summary('instance.partySize', {
                after: t,
                electionState: i._election._state
              }).record(e);
            }, t);
          });
        })(r),
        (r._messenger = new y(r.properties.id, s, r._logger, r._metrics)),
        r._messenger
          .onAnyMessage((e, t) => {
            var i = (Date.now() - e.timestamp) | 0;
            r._metrics
              .instanceMsgDeliveryTimer({
                messageType: e.type,
                sameWindow: s === t
              })
              .record(i),
              r._logger.debug('Message received', e),
              r._doFireEvent(we.ID5_MESSAGE_RECEIVED, e);
          })
          .onMessage(I.TYPE, (e, t) => {
            let i = u(new I(), e.payload);
            void 0 === i.isResponse && (i.isResponse = e.dst !== _),
              r._handleHelloMessage(i, e, t);
          })
          .onProxyMethodCall(
            new w(this._logger)
              .registerTarget(i.LEADER, r._leader)
              .registerTarget(i.FOLLOWER, r._followerRole)
              .registerTarget(i.STORAGE, r._storage)
          ),
        r._mode === je.SINGLETON
          ? (r._election.skip(), r._onLeaderElected(r.properties))
          : r._mode === je.MULTIPLEXING && r._election.schedule(e),
        r._messenger.broadcastMessage(r._createHelloMessage(!1), I.TYPE);
    }
    register(e) {
      try {
        this.updateConfig(e), this.init();
      } catch (e) {
        this._logger.error('Failed to register integration instance', e);
      }
      return this;
    }
    _handleHelloMessage(e, t, i) {
      this._joinInstance(e, t, i);
    }
    unregister() {
      this._logger.info('Unregistering'),
        this._messenger && this._messenger.unregister();
    }
    on(e, t) {
      return this._dispatcher.on(e, t), this;
    }
    _joinInstance(e, t, i) {
      var r = e.isResponse;
      const s = new qe(e.instance, e.instanceState, i);
      this._knownInstances.get(s.getId())
        ? this._logger.debug('Instance already known', s.getId())
        : (this._knownInstances.set(s.getId(), s),
          (this._lastJoinedInstance = s),
          this._instanceCounters.addInstance(s.properties),
          this._metrics
            .instanceJoinDelayTimer({ election: this._election._state })
            .record((performance.now() - this._loadTime) | 0),
          r
            ? ((r = s.getInstanceMultiplexingLeader()),
              this._mode === je.MULTIPLEXING &&
                this.role === Ge.UNKNOWN &&
                void 0 !== r &&
                (this._logger.info('Joined late, elected leader is', r),
                this._election.cancel(),
                this._onLeaderElected(r)))
            : (this._messenger.sendResponseMessage(
                t,
                this._createHelloMessage(!0),
                I.TYPE
              ),
              this._mode === je.MULTIPLEXING &&
                this.role !== Ge.UNKNOWN &&
                this._handleLateJoiner(s)),
          this._logger.debug('Instance joined', s.getId()),
          this._doFireEvent(we.ID5_INSTANCE_JOINED, s.properties));
    }
    _createHelloMessage() {
      var e,
        t = 0 < arguments.length && void 0 !== arguments[0] && arguments[0];
      let i = {
        operatingMode: this._mode,
        knownInstances: Array.from(this._knownInstances.values()).map(
          (e) => e.properties
        )
      };
      return (
        this._mode === je.MULTIPLEXING &&
          (i.multiplexing = {
            role: this.role,
            electionState:
              null === (e = this._election) || void 0 === e ? void 0 : e._state,
            leader: this._leader.getProperties()
          }),
        new I(this.properties, t, i)
      );
    }
    _handleLateJoiner(e) {
      this._logger.info('Late joiner detected', e.properties);
      var t = this._metrics
        .instanceLateJoinCounter(this.properties.id, { scope: 'party' })
        .inc();
      this._metrics
        .instanceLateJoinDelayTimer({
          election: this._election._state,
          isFirst: 1 === t
        })
        .record(performance.now() - this._election._closeTime),
        !e.isMultiplexingPartyAllowed() ||
          this.role !== Ge.LEADER ||
          (!0 ===
            (null ==
            (e = this._leader.addFollower(
              new Ae(e, this._messenger, this._logger)
            ))
              ? void 0
              : e.lateJoiner) &&
            this._metrics
              .instanceLateJoinCounter(this.properties.id, {
                scope: 'leader',
                unique: !0 === (null == e ? void 0 : e.uniqueLateJoiner)
              })
              .inc());
    }
    _doFireEvent(e) {
      for (
        var t = arguments.length, i = new Array(1 < t ? t - 1 : 0), r = 1;
        r < t;
        r++
      )
        i[r - 1] = arguments[r];
      this._dispatcher.emit(e, ...i);
    }
    _actAsLeader() {
      var e = this.properties;
      const t = this._logger;
      var i = this._metrics,
        r = new ie(this._storage),
        s = new $(r),
        n = new K(e.storageExpirationDays);
      const o = new Fe(s, n, e.forceAllowLocalStorageGrant, t, i);
      (s = new Y(
        new ke(() => o.localStorageGrant('client-store'), s, n, t),
        this._trueLinkAdapter
      )),
        (n = new Ie(i, t, Ve.createExtensions(i, t, s)));
      const a = new xe(this._window, e, r, s, o, i, t, n);
      a.addFollower(this._followerRole),
        this._leader.assignLeader(a),
        this._mode === je.MULTIPLEXING &&
          Array.from(this._knownInstances.values())
            .filter((e) => e.isMultiplexingPartyAllowed())
            .map((e) => a.addFollower(new Ae(e, this._messenger, t))),
        a.start();
    }
    _followRemoteLeader(e) {
      this._leader.assignLeader(new Ne(this._messenger, e)),
        this._logger.info('Following remote leader ', e);
    }
    updateConsent(e) {
      this._leader.updateConsent(e, this.properties.id);
    }
    updateFetchIdData(e) {
      this._leader.updateFetchIdData(this.properties.id, e),
        u(this.properties.fetchIdData, e);
    }
    refreshUid(e) {
      this._leader.refreshUid(e, this.properties.id);
    }
    _doElection() {
      var e = this._election;
      const t = this._knownInstances;
      let i = Array.from(t.values())
        .filter((e) => e.isMultiplexingPartyAllowed())
        .map((e) => e.properties);
      i.push(this.properties),
        this._onLeaderElected(
          (function (e) {
            if (!e || 0 === e.length) return;
            e = e.sort((e, t) => {
              let i = -(0 | S(e.version, t.version));
              var r, s, n;
              return (
                0 === i &&
                  ((i = e.source.localeCompare(t.source)),
                  0 === i && (i = -(0 | S(e.sourceVersion, t.sourceVersion))),
                  0 === i &&
                    ((s =
                      (null === (s = e.fetchIdData) ||
                      void 0 === s ||
                      null === (r = s.refererInfo) ||
                      void 0 === r
                        ? void 0
                        : r.numIframes) || Number.MAX_SAFE_INTEGER),
                    (n =
                      (null === (r = t.fetchIdData) ||
                      void 0 === r ||
                      null === (n = r.refererInfo) ||
                      void 0 === n
                        ? void 0
                        : n.numIframes) || Number.MAX_SAFE_INTEGER),
                    (i = s - n)),
                  0 === i && (i = e.id.localeCompare(t.id))),
                i
              );
            });
            return e[0];
          })(i)
        );
      var r = this._lastJoinedInstance;
      r &&
        this._metrics
          .instanceLastJoinDelayTimer()
          .record(Math.max(r._joinTime - e._scheduleTime, 0));
    }
    _onLeaderElected(e) {
      var t = this;
      (t.role = e.id === t.properties.id ? Ge.LEADER : Ge.FOLLOWER),
        t.role === Ge.LEADER
          ? t._actAsLeader()
          : t.role === Ge.FOLLOWER && t._followRemoteLeader(e),
        t._logger.debug('Leader elected', e.id, 'my role', t.role),
        t._doFireEvent(
          we.ID5_LEADER_ELECTED,
          t.role,
          t._leader.getProperties()
        );
    }
    getId() {
      return this.properties.id;
    }
    lookupForCachedId() {
      return (
        this._logger.info('Self lookup for cachedId triggered'),
        this._cachedIdProvider.provisionFromCache(this._followerRole)
      );
    }
  }
  class Ke extends e {
    constructor(e, t) {
      super(),
        d(this, '_instance', void 0),
        (this._delegate = e || g),
        (this._instance = t);
    }
    _prefix() {
      return 'Instance(id='
        .concat(this._instance.getId(), ', role=')
        .concat(this._instance.role, ')');
    }
    debug() {
      for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++)
        t[i] = arguments[i];
      this._delegate.debug(new Date().toISOString(), this._prefix(), ...t);
    }
    info() {
      for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++)
        t[i] = arguments[i];
      this._delegate.info(new Date().toISOString(), this._prefix(), ...t);
    }
    warn() {
      for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++)
        t[i] = arguments[i];
      this._delegate.warn(new Date().toISOString(), this._prefix(), ...t);
    }
    error() {
      for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++)
        t[i] = arguments[i];
      this._delegate.error(new Date().toISOString(), this._prefix(), ...t);
    }
  }
  const Ye = new (class {
      createInstance(e, t, i, r, s, n) {
        return new ze(e, {}, r, i, t, s, n);
      }
    })(),
    Xe = 'TRUE' === rt('id5_debug').toUpperCase(),
    Qe = 'TRACE' === rt('id5_debug').toUpperCase(),
    $e = Boolean(window.console);
  let Ze = !1;
  function et(e, t, i, r, s) {
    tt() &&
      $e &&
      e &&
      e.apply(
        console,
        [
          '%cID5 - '.concat(t, '#').concat(i),
          'color: #fff; background: #1c307e; padding: 1px 4px; border-radius: 3px;',
          r
        ].concat(s)
      );
  }
  function tt() {
    return Xe || Qe || Ze;
  }
  class it extends e {
    constructor(e, t) {
      super(),
        d(this, '_invocationId', void 0),
        d(this, '_origin', void 0),
        (this._invocationId = t),
        (this._origin = e);
    }
    debug() {
      for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++)
        t[i] = arguments[i];
      !(function (e, t) {
        for (
          var i = arguments.length, r = new Array(2 < i ? i - 2 : 0), s = 2;
          s < i;
          s++
        )
          r[s - 2] = arguments[s];
        et(console.info, e, t, 'DEBUG', r);
      })(this._origin, this._invocationId, ...t);
    }
    info() {
      for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++)
        t[i] = arguments[i];
      !(function (e, t) {
        for (
          var i = arguments.length, r = new Array(2 < i ? i - 2 : 0), s = 2;
          s < i;
          s++
        )
          r[s - 2] = arguments[s];
        et(console.info, e, t, 'INFO', r);
      })(this._origin, this._invocationId, ...t);
    }
    warn() {
      for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++)
        t[i] = arguments[i];
      !(function (e, t) {
        for (
          var i = arguments.length, r = new Array(2 < i ? i - 2 : 0), s = 2;
          s < i;
          s++
        )
          r[s - 2] = arguments[s];
        et(console.warn, e, t, 'WARNING', r);
      })(this._origin, this._invocationId, ...t);
    }
    error() {
      for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++)
        t[i] = arguments[i];
      !(function (e, t) {
        for (
          var i = arguments.length, r = new Array(2 < i ? i - 2 : 0), s = 2;
          s < i;
          s++
        )
          r[s - 2] = arguments[s];
        et(console.error, e, t, 'ERROR', r);
      })(this._origin, this._invocationId, ...t);
    }
  }
  function rt(e) {
    const t = new RegExp('[\\?&]' + e + '=([^&#]*)'),
      i = t.exec(window.location.search);
    return null === i ? '' : decodeURIComponent(i[1].replace(/\+/g, ' '));
  }
  const st = A,
    nt = P,
    ot = O,
    at = R,
    ct = x,
    lt = N,
    dt = function (e) {
      return A(e, 'Boolean');
    },
    ht = L;
  function ut(e) {
    let t = new Image();
    t.src = e;
  }
  function gt(e, t, i, r, s) {
    for (t = t.split ? t.split('.') : t, r = 0; r < t.length; r++)
      e = e ? e[t[r]] : s;
    return e === s ? i : e;
  }
  new it('ajax');
  const pt = (e) => null != e && 'object' == typeof e;
  const _t =
    ((oe = window),
    function () {
      try {
        var i = vt(),
          r = i.length - 1,
          s = null !== i[r].location || (0 < r && null !== i[r - 1].referrer),
          n = (function (e) {
            let t = [];
            var i,
              r = null;
            let s = null,
              n = null,
              o = null,
              a = null,
              c;
            for (c = e.length - 1; 0 <= c; c--) {
              try {
                s = e[c].location;
              } catch (e) {}
              if (s) t.push(s), (a = a || s);
              else if (0 !== c) {
                i = e[c - 1];
                try {
                  (n = i.referrer), (o = i.ancestor);
                } catch (e) {}
                n
                  ? (t.push(n), (a = a || n))
                  : o
                    ? (t.push(o), (a = a || o))
                    : t.push(r);
              } else t.push(r);
            }
            return { stack: t, detectedRefererUrl: a };
          })(i);
        let e, t;
        i[i.length - 1].canonicalUrl && (e = i[i.length - 1].canonicalUrl);
        try {
          t = oe.top.document.referrer;
        } catch (e) {}
        return {
          topmostLocation: n.detectedRefererUrl,
          ref: t || null,
          reachedTop: s,
          numIframes: r,
          stack: n.stack,
          canonicalUrl: e
        };
      } catch (e) {}
    });
  function vt() {
    let i = (function () {
      let t = [],
        i;
      do {
        try {
          i = i ? i.parent : oe;
          try {
            var r = i === oe.top;
            let e = {
              referrer: i.document.referrer || null,
              location: i.location.href || null,
              isTop: r
            };
            r &&
              (e = u(e, {
                canonicalUrl: (function (e) {
                  try {
                    var t = e.querySelector("link[rel='canonical']");
                    if (null !== t) return t.href;
                  } catch (e) {}
                  return null;
                })(i.document)
              })),
              t.push(e);
          } catch (e) {
            t.push({ referrer: null, location: null, isTop: i === oe.top });
          }
        } catch (e) {
          return t.push({ referrer: null, location: null, isTop: !1 }), t;
        }
      } while (i !== oe.top);
      return t;
    })();
    var r = (function () {
      try {
        return oe.location.ancestorOrigins
          ? oe.location.ancestorOrigins
          : void 0;
      } catch (e) {}
    })();
    if (r) for (let e = 0, t = r.length; e < t; e++) i[e].ancestor = r[e];
    return i;
  }
  const ft = {
    A: 0,
    B: 1,
    C: 2,
    D: 3,
    E: 4,
    F: 5,
    G: 6,
    H: 7,
    I: 8,
    J: 9,
    K: 10,
    L: 11,
    M: 12,
    N: 13,
    O: 14,
    P: 15,
    Q: 16,
    R: 17,
    S: 18,
    T: 19,
    U: 20,
    V: 21,
    W: 22,
    X: 23,
    Y: 24,
    Z: 25,
    a: 26,
    b: 27,
    c: 28,
    d: 29,
    e: 30,
    f: 31,
    g: 32,
    h: 33,
    i: 34,
    j: 35,
    k: 36,
    l: 37,
    m: 38,
    n: 39,
    o: 40,
    p: 41,
    q: 42,
    r: 43,
    s: 44,
    t: 45,
    u: 46,
    v: 47,
    w: 48,
    x: 49,
    y: 50,
    z: 51,
    0: 52,
    1: 53,
    2: 54,
    3: 55,
    4: 56,
    5: 57,
    6: 58,
    7: 59,
    8: 60,
    9: 61,
    '-': 62,
    _: 63,
    '+': 62,
    '/': 63
  };
  const mt = Object.freeze({
      tcfv2: {
        objName: '__tcfapiCall',
        objKeys: ['command', 'version'],
        returnObjName: '__tcfapiReturn'
      },
      uspv1: {
        objName: '__uspapiCall',
        objKeys: ['command', 'version'],
        returnObjName: '__uspapiReturn'
      },
      gppv1: {
        objName: '__gppCall',
        objKeys: ['command', 'parameter'],
        returnObjName: '__gppReturn'
      }
    }),
    It = Object.freeze({ TCF: 0, USP: 1, GPP: 2 });
  class Ct {
    constructor(e, t) {
      d(this, 'direct', void 0),
        d(this, 'version', void 0),
        (this.direct = e),
        (this.version = t);
    }
    getConsentData() {
      var e = this;
      return s(function* () {
        return e.getClientConsentData();
      })();
    }
    static create(a) {
      return s(function* () {
        var e = bt._findCmpApi('__gpp'),
          t = e.cmpApiFrame,
          e = e.cmpApiFunction;
        let i,
          r = !1;
        if (!t)
          return (
            a.warn('cmpApi: GPP not found! Using defaults.'), Promise.resolve()
          );
        if (nt(e))
          (r = !0),
            a.info(
              'cmpApi: Detected GPP is directly accessible, calling it now.'
            ),
            (i = e);
        else {
          a.info(
            'cmpApi: Detected GPP is outside the current iframe. Using message passing.'
          );
          const o = bt._buildCmpSurrogate(mt.gppv1, t);
          i = function (e, t, i) {
            o(e, i, t);
          };
        }
        var s = yield new Promise((t) => {
          var e = i('ping', function (e) {
            t(e);
          });
          e && t(e);
        });
        switch (s.gppVersion) {
          case wt.version:
            return new wt(s, i, r);
          case St.version:
            return new St(s, i, r);
          default:
            var n = 'Unsupported version of gpp: '.concat(s.gppVersion);
            return a.warn(n), Promise.reject(n);
        }
      })();
    }
    static tcfDataHasLocalStorageGrant(e) {
      return at(e.PurposeConsent) && !0 === e.PurposeConsent[0];
    }
    static tcfDataHasID5VendorConsented(e) {
      return (
        0 <=
        (null === (e = e.VendorConsent) || void 0 === e
          ? void 0
          : e.indexOf('131'))
      );
    }
    static getTcfData(e) {
      e = null == e ? void 0 : e.tcfeuv2;
      let t = void 0;
      return at(e) && lt(e[0]) ? (t = e[0]) : lt(e) && (t = e), t;
    }
  }
  class wt extends Ct {
    constructor(e, t, i) {
      super(i, wt.version),
        d(this, 'gppFn', void 0),
        d(this, 'ready', void 0),
        (this.gppFn = t),
        (this.ready = this.isReady(e));
    }
    isReady(e) {
      return 'loaded' === e.cmpStatus && 'visible' !== e.cmpDisplayStatus;
    }
    getClientConsentData() {
      var r = this;
      return s(function* () {
        r.ready ||
          (r.ready = yield new Promise((t) => {
            r.gppFn(
              'addEventListener',
              (e) => !!r.isReady(e.pingData) && void t(!0)
            );
          }));
        var e = new Promise((t) => {
            r.gppFn('getGPPData', (e) => {
              t(e);
            });
          }),
          t = new Promise((t) => {
            r.gppFn(
              'getSection',
              (e) => {
                t(e);
              },
              'tcfeuv2'
            );
          }),
          e = l(yield Promise.all([e, t]), 2),
          t = e[0],
          e = e[1];
        const i = new W();
        return (
          (i.version = j.GPP_V1_0),
          (i.gppString = t.gppString),
          (i.applicableSections = t.applicableSections),
          e &&
            ((i.localStoragePurposeConsent = Ct.tcfDataHasLocalStorageGrant(e)),
            (i.vendorsConsentForId5Granted =
              Ct.tcfDataHasID5VendorConsented(e))),
          i
        );
      })();
    }
  }
  function yt(e, t, i) {
    i && (e.apiTypes.push(t), u(e, i));
  }
  d(wt, 'version', '1.0');
  class St extends Ct {
    constructor(e, t, i) {
      super(i, St.version),
        d(this, 'gppFn', void 0),
        d(this, 'readyPingData', void 0),
        (this.gppFn = t),
        'ready' === e.signalStatus && (this.readyPingData = e);
    }
    getClientConsentData() {
      var i = this;
      return s(function* () {
        return new Promise((t) => {
          i.readyPingData
            ? t(i.parsePingData(i.readyPingData))
            : i.gppFn(
                'addEventListener',
                (e) =>
                  'ready' === e.pingData.signalStatus &&
                  void t(i.parsePingData(e.pingData))
              );
        });
      })();
    }
    parsePingData(e) {
      const t = new W();
      (t.gppString = e.gppString),
        (t.version = j.GPP_V1_1),
        (t.applicableSections = e.applicableSections);
      e = Ct.getTcfData(e.parsedSections);
      return (
        e &&
          ((t.localStoragePurposeConsent = Ct.tcfDataHasLocalStorageGrant(e)),
          (t.vendorsConsentForId5Granted = Ct.tcfDataHasID5VendorConsented(e))),
        t
      );
    }
  }
  d(St, 'version', '1.1');
  class bt {
    constructor(e) {
      var t =
        1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : g;
      d(this, '_lookupInProgress', void 0),
        d(this, '_log', void 0),
        d(this, '_metrics', void 0),
        d(this, '_consentDataPromise', void 0),
        (this._metrics = e),
        (this._log = t);
    }
    refreshConsentData(e, t, i) {
      const r = this;
      return (
        r._lookupInProgress ||
          ((r._lookupInProgress = !0),
          (r._consentDataPromise = this._lookupConsentData(e, t, i).finally(
            () => {
              r._lookupInProgress = !1;
            }
          ))),
        this._consentDataPromise
      );
    }
    _lookupConsentData(e, t, i) {
      if (e) {
        this._log.warn(
          'cmpApi: ID5 is operating in forced consent mode and will not retrieve any consent signals from the CMP'
        );
        let e = new q();
        return (
          (e.forcedGrantByConfig = !0),
          (e.source = V.partner),
          Promise.resolve(e)
        );
      }
      switch (t) {
        case 'static':
          return new Promise((e) => {
            this._parseStaticConsentData(i, e);
          });
        case 'iab':
          return new Promise((e) => {
            this._lookupIabConsent(e);
          });
        default:
          return (
            this._log.error('cmpApi: Unknown consent API: '.concat(t)),
            Promise.reject(new Error('Unknown consent API: '.concat(t)))
          );
      }
    }
    _parseStaticConsentData(e, t) {
      e = e || {};
      let i = new q();
      if (((i.source = V.partner), lt(e.getTCData))) {
        const r = this._parseTcfData(e.getTCData);
        yt(i, j.TCF_V2, r);
        try {
          const s = this._metrics;
          this._lookupTcf((e) => {
            s.consentDiscrepancyCounter({
              apiType: j.TCF_V2,
              sameString:
                (null == e ? void 0 : e.consentString) ===
                (null === r || void 0 === r ? void 0 : r.consentString),
              sameLSPC:
                (null == e ? void 0 : e.localStoragePurposeConsent) ===
                (null === r || void 0 === r
                  ? void 0
                  : r.localStoragePurposeConsent),
              sameGdpr:
                (null == e ? void 0 : e.gdprApplies) ===
                (null === r || void 0 === r ? void 0 : r.gdprApplies)
            }).inc();
          });
        } catch (e) {}
      }
      if (
        (at(e.allowedVendors) &&
          yt(i, j.ID5_ALLOWED_VENDORS, {
            allowedVendors: e.allowedVendors.map((e) => e.toString()),
            gdprApplies: !0
          }),
        lt(e.getUSPData))
      ) {
        const n = this._parseUspData(e.getUSPData);
        yt(i, j.USP_V1, n);
        try {
          const o = this._metrics;
          this._lookupUsp((e) => {
            o.consentDiscrepancyCounter({
              apiType: j.USP_V1,
              sameString:
                (null == e ? void 0 : e.ccpaString) ===
                (null === n || void 0 === n ? void 0 : n.ccpaString)
            }).inc();
          });
        } catch (e) {}
      }
      0 === i.apiTypes.length &&
        this._log.warn(
          'cmpApi: No static consent data detected! Using defaults.'
        ),
        this._log.info(
          "cmpApi: Detected APIs '".concat(
            i.apiTypes,
            "' from static consent data"
          ),
          e
        ),
        t(i);
    }
    _lookupIabConsent(r) {
      const s = [];
      let n = new q();
      n.source = V.cmp;
      var e = (i) => (
          (s[i] = 0),
          (e, t) => {
            s[i] ||
              ((s[i] = Date.now()),
              e && yt(n, t, e),
              s.every((e) => 0 < e) && r(n));
          }
        ),
        t = e(It.TCF),
        i = e(It.USP),
        e = e(It.GPP);
      this._lookupGpp(e), this._lookupTcf(t), this._lookupUsp(i);
    }
    _lookupUsp(i) {
      var e = bt._findCmpApi('__uspapi'),
        t = e.cmpApiFrame,
        e = e.cmpApiFunction;
      let r;
      if (!t)
        return (
          this._log.warn('cmpApi: USP not found! Using defaults for CCPA.'),
          void i()
        );
      r = nt(e)
        ? (this._log.info(
            'cmpApi: Detected USP is directly accessible, calling it now.'
          ),
          e)
        : (this._log.info(
            'cmpApi: Detected USP is outside the current iframe. Using message passing.'
          ),
          bt._buildCmpSurrogate(mt.uspv1, t));
      r('getUSPData', 1, (e, t) => {
        t
          ? i(this._parseUspData(e), j.USP_V1)
          : (this._log.error(
              'cmpApi: USP callback not successful. Using defaults for CCPA.'
            ),
            i());
      });
    }
    _lookupGpp(n) {
      var o = this;
      return s(function* () {
        var t = Date.now();
        try {
          let e = yield Ct.create(o._log);
          if (e) {
            var i = { gppVersion: e.version, directCmp: e.direct };
            try {
              var r = yield e.getConsentData();
              n({ gppData: r }, r.version);
              var s = Date.now();
              o._metrics.timer('gpp.delay', i).record(s - t);
            } catch (e) {
              o._metrics
                .counter('gpp.failure', u({ type: 'CONSENT' }, i))
                .inc(),
                o._log.error(
                  'cmpApi: getting GPP consent not successful. Using defaults for Gpp.'
                ),
                n();
            }
          } else n();
        } catch (e) {
          o._metrics.counter('gpp.failure', { type: 'CLIENT' }).inc(),
            o._log.error(
              'cmpApi: creating GPP client not successful. Using defaults for Gpp.'
            ),
            n();
        }
      })();
    }
    static _buildCmpSurrogate(a, c) {
      return (e, t, i) => {
        const r = Math.random() + '',
          s = {},
          n = {};
        (n[a.objKeys[0]] = e),
          (n[a.objKeys[1]] = t),
          (n.callId = r),
          (s[a.objName] = n);
        const o = (e) => {
          e = gt(e, 'data.'.concat(a.returnObjName));
          e &&
            e.callId === r &&
            ((void 0 !== (e = i(e.returnValue, e.success)) && !0 !== e) ||
              window.removeEventListener('message', o));
        };
        window.addEventListener('message', o, !1), c.postMessage(s, '*');
      };
    }
    _lookupTcf(e) {
      var t = bt._findTCF(),
        i = t.cmpFrame,
        t = t.cmpFunction;
      if (!i)
        return (
          this._log.warn('cmpApi: TCF not found! Using defaults for GDPR.'),
          void e()
        );
      nt(t)
        ? this._lookupDirectTcf(t, e)
        : (this._log.info(
            'cmpApi: Detected TCF is outside the current iframe. Using message passing.'
          ),
          this._lookupMessageTcf(i, e));
    }
    _lookupMessageTcf(e, t) {
      e = bt._buildCmpSurrogate(mt.tcfv2, e);
      this._lookupDirectTcf(e, t);
    }
    _lookupDirectTcf(e, s) {
      const n = this._log;
      e('addEventListener', 2, (e, t) => {
        var i, r;
        return (
          (i = 'event'),
          (r = e),
          n.info('cmpApi: TCFv2 - Received a call back: '.concat(i), r),
          t
            ? !(
                !e ||
                (!1 !== e.gdprApplies &&
                  'tcloaded' !== e.eventStatus &&
                  'useractioncomplete' !== e.eventStatus)
              ) && void s(this._parseTcfData(e), j.TCF_V2)
            : (n.error(
                'cmpApi: TCFv2 - Received insuccess: '.concat(
                  'addEventListener',
                  '. Please check your CMP setup. Using defaults for GDPR.'
                )
              ),
              void s())
        );
      });
    }
    _parseUspData(e) {
      if (lt(e) && ot(e.uspString)) return { ccpaString: e.uspString };
      this._log.error(
        'cmpApi: No or malformed USP data. Using defaults for CCPA.'
      );
    }
    _parseTcfData(e) {
      let t = this._log,
        i,
        r;
      if (((i = bt._isValidV2ConsentObject), (r = bt._normalizeV2Data), i(e)))
        return r(e);
      t.error('cmpApi: Invalid CMP data. Using defaults for GDPR.', e);
    }
    static _isValidV2ConsentObject(e) {
      var t = e && e.gdprApplies,
        e = e && e.tcString;
      return !1 === t || ot(e);
    }
    static _tcfDataHasID5VendorConsented(e) {
      var t, i;
      return (
        !0 ===
        (null == e ||
        null === (t = e.vendor) ||
        void 0 === t ||
        null === (i = t.consents) ||
        void 0 === i
          ? void 0
          : i[131])
      );
    }
    static _normalizeV2Data(e) {
      let t = gt(e, 'purpose.consents.1');
      dt(t) ||
        (t = (function (e, t) {
          var i = 152 + t - 1,
            t = ~~(i / 6);
          if (e && 'C' === e.charAt(0) && !(e.length <= t)) {
            (t = e.charAt(t)), (t = ft[t]);
            if (void 0 !== t) return 0 != (t & (1 << (6 - (i % 6) - 1)));
          }
        })(e.tcString, 1));
      var i = bt._tcfDataHasID5VendorConsented(e);
      return {
        consentString: e.tcString,
        localStoragePurposeConsent: t,
        gdprApplies: e.gdprApplies,
        vendorsConsentForId5Granted: i
      };
    }
    static _findTCF() {
      let e = window,
        t,
        i;
      for (; !t; ) {
        try {
          if ('function' == typeof e.__tcfapi) {
            (i = e.__tcfapi), (t = e);
            break;
          }
        } catch (e) {}
        try {
          if (e.frames.__tcfapiLocator) {
            t = e;
            break;
          }
        } catch (e) {}
        if (e === window.top) break;
        e = e.parent;
      }
      return { cmpFrame: t, cmpFunction: i };
    }
    static _findCmpApi(e) {
      let t = window,
        i,
        r;
      for (; !i; ) {
        try {
          if ('function' == typeof t[e]) {
            (r = t[e]), (i = t);
            break;
          }
        } catch (e) {}
        try {
          if (t.frames[''.concat(e, 'Locator')]) {
            i = t;
            break;
          }
        } catch (e) {}
        if (t === window.top) break;
        t = t.parent;
      }
      return { cmpApiFrame: i, cmpApiFunction: r };
    }
  }
  const Dt = '1.0.75';
  class Et {
    static gatherUaHints(e, t) {
      return s(function* () {
        if (L(window.navigator.userAgentData) && !e) {
          let e;
          try {
            e = yield window.navigator.userAgentData.getHighEntropyValues([
              'architecture',
              'fullVersionList',
              'model',
              'platformVersion'
            ]);
          } catch (e) {
            return void t.error(
              'Error while calling navigator.userAgentData.getHighEntropyValues()',
              e
            );
          }
          return Et.filterUaHints(e);
        }
      })();
    }
    static filterUaHints(e) {
      if (L(e)) {
        const t = /[()-.:;=?_/]/g;
        return (
          R(e.brands) &&
            (e.brands = e.brands.filter(
              (e) => O(e.brand) && e.brand.search(t) < 0
            )),
          R(e.fullVersionList) &&
            (e.fullVersionList = e.fullVersionList.filter(
              (e) => O(e.brand) && e.brand.search(t) < 0
            )),
          e
        );
      }
    }
  }
  const Tt = Object.freeze({
      NEVER: 'never',
      AFTER_UID_SET: 'after-uid-set',
      ASAP: 'asap'
    }),
    At = Object.freeze({ allowGCReclaim: Object.values(Tt) });
  class Pt {
    constructor(e) {
      var t =
        1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : g;
      if (
        (d(this, 'invocationId', void 0),
        d(this, 'options', void 0),
        d(this, 'providedOptions', void 0),
        d(this, 'invalidSegments', void 0),
        (this._log = t),
        (this.options = {
          debugBypassConsent: !1,
          allowLocalStorageWithoutConsentApi: !1,
          cmpApi: 'iab',
          consentData: {},
          refreshInSeconds: 7200,
          partnerId: void 0,
          partnerUserId: void 0,
          callbackOnAvailable: void 0,
          callbackOnUpdates: void 0,
          callbackTimeoutInMs: void 0,
          pd: void 0,
          abTesting: { enabled: !1, controlGroupPct: 0 },
          provider: void 0,
          maxCascades: 8,
          applyCreativeRestrictions: !1,
          acr: !1,
          segments: void 0,
          disableUaHints: !1,
          storageExpirationDays: void 0,
          att: void 0,
          diagnostics: {
            publishingDisabled: !1,
            publishAfterLoadInMsec: 3e4,
            publishBeforeWindowUnload: !0,
            publishingSampleRatio: 0.01
          },
          multiplexing: { _disabled: !1 },
          allowGCReclaim: Tt.AFTER_UID_SET
        }),
        (this.providedOptions = {}),
        !ct(e.partnerId) && !ot(e.partnerId))
      )
        throw new Error(
          'partnerId is required and must be a number or a string'
        );
      (this.invalidSegments = 0),
        this.updOptions(e),
        (this.storageConfig = new K(e.storageExpirationDays));
    }
    getOptions() {
      return this.options;
    }
    getProvidedOptions() {
      return this.providedOptions;
    }
    getInvalidSegments() {
      return this.invalidSegments;
    }
    hasCreativeRestrictions() {
      return this.options.applyCreativeRestrictions || this.options.acr;
    }
    updOptions(a) {
      const c = this,
        l = c._log;
      if (lt(a)) {
        this.setPartnerId(a.partnerId);
        const d = (e, t) => {
          (this.options[e] = t), (this.providedOptions[e] = t);
        };
        Object.keys(a).forEach((e) => {
          if ('segments' === e) {
            const r = a[e],
              s = [];
            L(r) &&
              (at(r)
                ? (r.forEach((e, t) => {
                    t = 'segments['.concat(t, ']');
                    return at(e.ids) &&
                      (function (e, t) {
                        let i = !0;
                        return U(e, (e) => (i = i && t(e))), i;
                      })(e.ids, ot)
                      ? e.ids.length < 1
                        ? (l.error(
                            'Config option '.concat(
                              t,
                              '.ids should contain at least one segment ID'
                            )
                          ),
                          void (c.invalidSegments += 1))
                        : ot(e.destination)
                          ? void s.push(e)
                          : (Ot(
                              l,
                              ''.concat(t, '.destination'),
                              'String',
                              e.destination
                            ),
                            void (c.invalidSegments += 1))
                      : (Ot(l, ''.concat(t, '.ids'), 'Array of String', e.ids),
                        void (c.invalidSegments += 1));
                  }),
                  d(e, s))
                : Ot(l, e, 'Array', r));
          } else if ('diagnostics' === e) {
            const n = this.options.diagnostics,
              o = a.diagnostics;
            if (st(o, Pt.configTypes.diagnostics)) {
              let t = h({}, n);
              Object.keys(o).forEach((e) => {
                void 0 !== n[e] && typeof n[e] == typeof o[e] && (t[e] = o[e]);
              }),
                (this.options[e] = t);
            }
            this.providedOptions[e] = a[e];
          } else {
            var t, i;
            void 0 !== At[e]
              ? (i = a[e]) && At[e].includes(i) && d(e, i)
              : 'partnerId' !== e &&
                ((t = Pt.configTypes[e]),
                L((i = a[e])) && (st(i, t) ? d(e, i) : Ot(l, e, t, i)));
          }
        });
      } else l.error('Config options must be an object');
    }
    setPartnerId(e) {
      let t;
      if (ot(e)) {
        if (((t = parseInt(e)), isNaN(t) || t < 0))
          throw new Error(
            'partnerId is required and must parse to a positive integer'
          );
      } else ct(e) && (t = e);
      if (ct(t)) {
        if (ct(this.options.partnerId) && t !== this.options.partnerId)
          throw new Error('Cannot update config with a different partnerId');
        (this.options.partnerId = t), (this.providedOptions.partnerId = e);
      }
    }
  }
  function Ot(e, t, i, r) {
    e.error(
      'Config option '
        .concat(t, ' must be of type ')
        .concat(i, ' but was ')
        .concat(toString.call(r), '. Ignoring...')
    );
  }
  d(Pt, 'configTypes', {
    debugBypassConsent: 'Boolean',
    allowLocalStorageWithoutConsentApi: 'Boolean',
    cmpApi: 'String',
    consentData: 'Object',
    refreshInSeconds: 'Number',
    partnerUserId: 'String',
    callbackOnAvailable: 'Function',
    callbackOnUpdates: 'Function',
    callbackTimeoutInMs: 'Number',
    pd: 'String',
    abTesting: 'Object',
    provider: 'String',
    maxCascades: 'Number',
    applyCreativeRestrictions: 'Boolean',
    acr: 'Boolean',
    disableUaHints: 'Boolean',
    storageExpirationDays: 'Number',
    att: 'Number',
    diagnostics: 'Object',
    multiplexing: 'Object',
    dynamicConfig: 'Object',
    allowGCReclaim: 'String'
  });
  class Rt {
    constructor(e, t, i, r, s, n, o) {
      d(this, '_called', void 0),
        d(this, '_callbackFn', void 0),
        d(this, '_callbackArgs', void 0),
        d(this, '_beforeTrigger', void 0),
        d(this, '_watchdog', void 0),
        d(this, '_log', void 0),
        d(this, '_metrics', void 0),
        d(this, '_callbackName', void 0),
        (this._callbackName = e),
        (this._log = t),
        (this._metrics = i),
        (this._callbackFn = r);
      for (
        var a = arguments.length, c = new Array(7 < a ? a - 7 : 0), l = 7;
        l < a;
        l++
      )
        c[l - 7] = arguments[l];
      (this._callbackArgs = c),
        (this._beforeTrigger = o),
        (this._called = !1),
        (this._callbackTriggerTimer = _e()),
        (this._timeout = s),
        n
          ? (this._watchdog = setTimeout(() => this._trigger('immediate'), 0))
          : 0 < s &&
            (this._watchdog = setTimeout(() => this._trigger('timeout'), s));
    }
    _trigger() {
      let e =
        0 < arguments.length && void 0 !== arguments[0]
          ? arguments[0]
          : 'unknown';
      this._watchdog = void 0;
      let t = this._callbackTriggerTimer.record(
        this._metrics.timer('callback.trigger.time', {
          trigger: e,
          callbackName: this._callbackName,
          timeout: this._timeout
        })
      );
      this._called ||
        ((this._called = !0),
        setTimeout(() => {
          this._log.debug(
            'Firing '
              .concat(this._callbackName, ' callback after ')
              .concat(t, 'ms. Triggered by ')
              .concat(e, ', configured timeoutMs=')
              .concat(this._timeout)
          ),
            this._beforeTrigger(),
            this._callbackFn.call(globalThis, ...this._callbackArgs);
        }, 0));
    }
    triggerNow() {
      var e =
        0 < arguments.length && void 0 !== arguments[0]
          ? arguments[0]
          : 'eventOccurred';
      this.disableWatchdog(), this._trigger(e);
    }
    disableWatchdog() {
      this._watchdog &&
        (clearTimeout(this._watchdog), (this._watchdog = void 0));
    }
  }
  class xt {
    constructor(e, t, i) {
      d(this, 'refererInfo', void 0),
        d(this, 'apiVersion', void 0),
        d(this, 'isUsingCdn', void 0),
        (this.refererInfo = e),
        (this.apiVersion = t),
        (this.isUsingCdn = i);
    }
  }
  class Nt {
    constructor(e, t) {
      d(this, '_targets', void 0),
        d(this, '_metrics', void 0),
        d(this, '_survivalTimer', void 0),
        (this._targets = [e, t]),
        (this._metrics = t),
        (this._survivalTimer = _e());
    }
    unregister(e) {
      this._survivalTimer &&
        this._metrics &&
        this._survivalTimer.record(
          this._metrics.instanceSurvivalTime({ unregisterTrigger: e })
        ),
        this._targets.forEach((e) => {
          try {
            ht(e) && nt(e.unregister) && e.unregister();
          } catch (e) {}
        });
    }
  }
  globalThis.__id5_finalization_registry ||
    (globalThis.__id5_finalization_registry = new (class {
      constructor() {
        d(this, '_finalizationRegistry', void 0),
          d(this, '_instancesHolder', void 0),
          (this._instancesHolder = new Set());
        try {
          this._finalizationRegistry = new FinalizationRegistry((e) => {
            try {
              ht(e) && nt(e.unregister) && e.unregister('gc-reclaim');
            } catch (e) {}
          });
        } catch (e) {}
      }
      register(e) {
        try {
          e.getOptions().allowGCReclaim !== Tt.ASAP &&
            this._instancesHolder.add(e),
            this._finalizationRegistry.register(e, e._unregisterTargets, e);
        } catch (e) {}
      }
      unregister(e) {
        try {
          this.releaseInstance(e, !0), this._finalizationRegistry.unregister(e);
        } catch (e) {}
      }
      releaseInstance(e) {
        var t = 1 < arguments.length && void 0 !== arguments[1] && arguments[1];
        (!e.getOptions().allowGCReclaim === Tt.NEVER && !t) ||
          this._instancesHolder.delete(e);
      }
    })());
  const Lt = globalThis.__id5_finalization_registry;
  class Ut {
    constructor(e) {
      d(this, '_ref', void 0), (this._ref = e);
    }
    deref() {
      return this._ref;
    }
  }
  class Ft {
    getOptions() {
      return this.config.getOptions();
    }
    getProvidedOptions() {
      return this.config.getProvidedOptions();
    }
    getInvalidSegments() {
      return this.config.getInvalidSegments();
    }
    getUserId() {
      return !1 === this._isExposed ? '0' : this._userId;
    }
    getGpId() {
      return !1 === this._isExposed ? void 0 : this._gpId;
    }
    getLinkType() {
      return !1 === this._isExposed ? 0 : this.getExt().linkType;
    }
    getExt() {
      var e = !1 === this._isExposed ? {} : this._ext;
      return u({ abTestingControlGroup: !this.exposeUserId() }, e);
    }
    getPublisherTrueLinkId() {
      return !1 === this._isExposed ? void 0 : this._publisherTrueLinkId;
    }
    isFromCache() {
      return this._fromCache;
    }
    exposeUserId() {
      return this._isExposed;
    }
    getUserIdAsEid() {
      return {
        source: B.ID5_EIDS_SOURCE,
        uids: [{ atype: 1, id: this.getUserId(), ext: this.getExt() }]
      };
    }
    onAvailable(e, t) {
      if (!nt(e)) throw new Error('onAvailable expects a function');
      return (
        this._availableCallback
          ? this._log.warn('onAvailable was already called, ignoring')
          : (this._availableCallback = new Rt(
              'onAvailable',
              this._log,
              this._metrics,
              e,
              t,
              this._userIdAvailable,
              () => {},
              this
            )),
        this
      );
    }
    onUpdate(e) {
      if (!nt(e)) throw new Error('onUpdate expects a function');
      return (
        (this._updateCallback = e),
        this._userIdAvailable && this._fireOnUpdate(),
        this
      );
    }
    onRefresh(e, t) {
      if (!nt(e)) throw new Error('onRefresh expects a function');
      this._refreshCallback && this._refreshCallback.disableWatchdog();
      var i =
        !0 === this._isRefreshing &&
        !1 === this._isRefreshingWithFetch &&
        this._userIdAvailable;
      return (
        (this._refreshCallback = new Rt(
          'onRefresh',
          this._log,
          this._metrics,
          e,
          t,
          i,
          () => {
            (this._isRefreshing = !1), (this._isRefreshingWithFetch = !1);
          },
          this
        )),
        this
      );
    }
    unregister() {
      try {
        this._unregisterTargets.unregister('api-call'), Lt.unregister(this);
      } catch (e) {}
    }
    collectEvent(t, i) {
      const r = (e) => {
        e = new Request('https://id5-sync.com/event', {
          method: 'POST',
          mode: 'no-cors',
          body: JSON.stringify({
            partnerId: this.config.getOptions().partnerId,
            id5id: e,
            eventType: t,
            metadata: i
          })
        });
        return (
          this._log.info('Sending event', e),
          fetch(e).catch((e) =>
            this._log.error('Error while sending event to ID5 of type ' + t, e)
          )
        );
      };
      return this._userIdAvailable
        ? r(this._userId)
        : this._userIdAvailablePromise.then((e) => r(e));
    }
    constructor(e, t, i, r, s, n, o, a, c, l) {
      d(this, '_availableCallback', void 0),
        d(this, '_updateCallback', void 0),
        d(this, '_refreshCallback', void 0),
        d(this, '_isExposed', void 0),
        d(this, '_fromCache', void 0),
        d(this, '_isRefreshing', !1),
        d(this, '_isRefreshingWithFetch', !1),
        d(this, '_userId', void 0),
        d(this, '_ext', void 0),
        d(this, '_userIdAvailable', !1),
        d(this, '_userIdAvailablePromise', void 0),
        d(this, '_userIdAvailablePromiseResolver', void 0),
        d(this, 'invocationId', void 0),
        d(this, 'config', void 0),
        d(this, 'clientStore', void 0),
        d(this, 'consentManagement', void 0),
        d(this, '_consentDataProvider', void 0),
        d(this, '_metrics', void 0),
        d(this, '_log', void 0),
        d(this, '_multiplexingInstance', void 0),
        d(this, '_pageLevelInfo', void 0),
        d(this, '_trueLinkAdapter', void 0),
        d(this, '_publisherTrueLinkId', void 0),
        d(this, '_gpId', void 0),
        d(this, '_origin', void 0),
        (this.config = e),
        (this.clientStore = t),
        (this.consentManagement = i),
        (this._metrics = r),
        (this._consentDataProvider = s),
        (this._log = new p('Id5Instance:', n)),
        (this._multiplexingInstance = o),
        (this._userIdAvailablePromise = new Promise((e) => {
          this._userIdAvailablePromiseResolver = e;
        })),
        (this._pageLevelInfo = a),
        (this._unregisterTargets = new Nt(
          this._multiplexingInstance,
          this._metrics
        )),
        (this._trueLinkAdapter = c),
        (this._origin = l || 'api'),
        Lt.register(this);
    }
    bootstrap() {
      const n = _e();
      var e = this.config.getOptions();
      const o = this._ref();
      this._multiplexingInstance
        .on(Ce.CASCADE_NEEDED, (e) => {
          const t = o.deref();
          t && t._doCascade(e);
        })
        .on(Ce.USER_ID_READY, (e, t) => {
          const i = o.deref();
          if (i) {
            try {
              var r = null != t && t.tags ? h({}, t.tags) : {};
              const s = i._metrics;
              null != t &&
                t.timestamp &&
                s
                  .userIdNotificationDeliveryDelayTimer(r)
                  .record(Date.now() - t.timestamp),
                n.record(
                  s.userIdProvisioningDelayTimer(
                    e.isFromCache,
                    h(
                      h({}, r),
                      {},
                      {
                        isUpdate: i._userIdAvailable,
                        hasOnAvailable: void 0 !== i._availableCallback,
                        hasOnRefresh: void 0 !== i._refreshCallback,
                        hasOnUpdate: void 0 !== i._updateCallback,
                        provisioner:
                          (null == t ? void 0 : t.provisioner) || 'leader',
                        hasChanged: i._userId !== e.responseObj.universal_uid
                      }
                    )
                  )
                );
            } catch (e) {
              i._log.error('Failed to measure provisioning metrics', e);
            }
            i._setUserId(e.responseObj, e.isFromCache, e.willBeRefreshed);
          }
        })
        .on(Ce.USER_ID_FETCH_CANCELED, (e) => {
          const t = o.deref();
          t && t._log.info('ID5 User ID fetch canceled:', e.reason);
        }),
        this._log.info(
          'bootstrapped for partner '
            .concat(e.partnerId, ' with referer ')
            .concat(this._refererInfo, ' and options'),
          this.getProvidedOptions()
        );
    }
    firstFetch() {
      const i = this.config.getOptions(),
        e = this._gatherFetchIdData().then((e) => {
          var t;
          this._multiplexingInstance.register({
            source: this._origin,
            sourceVersion: Dt,
            sourceConfiguration: { options: i },
            fetchIdData: e,
            singletonMode:
              !0 ===
              (null === i ||
              void 0 === i ||
              null === (t = i.multiplexing) ||
              void 0 === t
                ? void 0
                : t._disabled),
            canDoCascade: !this.config.hasCreativeRestrictions(),
            forceAllowLocalStorageGrant:
              this.consentManagement.isForceAllowLocalStorageGrant(),
            storageExpirationDays: i.storageExpirationDays
          });
        }),
        t = this._submitRefreshConsent().then((e) => {
          e && this.consentManagement.setConsentData(e);
        });
      return (
        e.then(() => {
          this._multiplexingInstance.lookupForCachedId().provisioned ||
            (this._log.info(
              "Couldn't find cached userId. Will try again when consent is resolved"
            ),
            t.then(() => {
              this._log.info('Consent resolved. Looking for cached id again'),
                this._multiplexingInstance.lookupForCachedId();
            }));
        }),
        Promise.allSettled([e, t])
      );
    }
    refreshId(t, e) {
      let i, r;
      this._log.info(
        'ID refresh requested (force='.concat(t, ') with additional options '),
        e
      );
      try {
        (this._isRefreshing = !0),
          (this._isRefreshingWithFetch = t),
          this.config.updOptions(e);
        var s = this.config.getOptions();
        const n = s.allowLocalStorageWithoutConsentApi || s.debugBypassConsent;
        (i = this._gatherFetchIdData().then((e) => {
          this._multiplexingInstance.updateFetchIdData(e),
            this._multiplexingInstance.refreshUid({
              resetConsent: !0,
              forceAllowLocalStorageGrant: n,
              forceFetch: t
            }),
            (r = this._submitRefreshConsent());
        })),
          this._metrics.refreshCallCounter('public-api').inc();
      } catch (e) {
        return (
          this._log.error('Exception caught from refreshId()', e),
          Promise.reject(e)
        );
      }
      return Promise.allSettled([i, r]);
    }
    _doCascade(e) {
      var t,
        i = this.config.getOptions();
      if (
        e.partnerId === i.partnerId &&
        0 <= i.maxCascades &&
        !this.config.hasCreativeRestrictions()
      ) {
        var r = i.partnerUserId && 0 < i.partnerUserId.length,
          s = new URL(
            '/'
              .concat(r ? 's' : 'i', '/')
              .concat(i.partnerId, '/')
              .concat(i.maxCascades, '.gif'),
            'https://id5-sync.com'
          );
        const n = s.searchParams;
        n.set('o', 'api'),
          n.set('id5id', e.userId),
          n.set('gdpr_consent', e.consentString),
          n.set('gdpr', e.gdprApplies),
          e.gppString &&
            (n.set('gpp', e.gppString), n.set('gpp_sid', e.gppSid)),
          r && n.set('puid', i.partnerUserId),
          this._log.info('Opportunities to cascade available', s.href),
          (t = s.href),
          'loading' !== document.readyState
            ? ut(t)
            : document.addEventListener('DOMContentLoaded', function () {
                ut(t);
              });
      }
    }
    _gatherFetchIdData() {
      var i = this;
      return s(function* () {
        var e = i.config.getOptions(),
          t = yield Et.gatherUaHints(e.disableUaHints, i._log);
        return {
          partnerId: e.partnerId,
          refererInfo: i._pageLevelInfo.refererInfo,
          origin: i._origin,
          originVersion: i._pageLevelInfo.apiVersion,
          isUsingCdn: i._pageLevelInfo.isUsingCdn,
          att: e.att,
          uaHints: t,
          abTesting: e.abTesting,
          segments: e.segments,
          invalidSegmentsCount: i.getInvalidSegments(),
          provider: e.provider,
          pd: e.pd,
          partnerUserId: e.partnerUserId,
          refreshInSeconds: e.refreshInSeconds,
          providedRefreshInSeconds: i.getProvidedOptions().refreshInSeconds,
          trace: Qe,
          allowedVendors:
            null === (t = e.consentData) || void 0 === t
              ? void 0
              : t.allowedVendors,
          consentSource:
            'iab' === e.cmpApi && !0 !== e.debugBypassConsent
              ? V.cmp
              : V.partner,
          trueLink: i._trueLinkAdapter.getTrueLink()
        };
      })();
    }
    _ref() {
      return new ('undefined' != typeof WeakRef ? WeakRef : Ut)(this);
    }
    _submitRefreshConsent() {
      var n = this;
      return s(function* () {
        var e = n.config.getOptions();
        let t = _e();
        var i = e.debugBypassConsent ? 'bypass' : e.cmpApi;
        let r;
        try {
          r = yield n._consentDataProvider.refreshConsentData(
            e.debugBypassConsent,
            e.cmpApi,
            e.consentData
          );
          const s = {};
          r.apiTypes.forEach((e) => (s[e] = !0)),
            t.record(n._metrics.consentRequestTimer(i, h({ success: !0 }, s))),
            n._multiplexingInstance.updateConsent(r);
        } catch (e) {
          n._log.error("Couldn't get consent data", e),
            t.record(
              n._metrics.consentRequestTimer(i, {
                success: !1,
                error: e.message
              })
            );
        }
        return r;
      })();
    }
    _setUserId(e, t) {
      var i = 2 < arguments.length && void 0 !== arguments[2] && arguments[2],
        r = e.universal_uid;
      if (((this._isExposed = !0), lt(e.ab_testing)))
        switch (e.ab_testing.result) {
          case 'normal':
            break;
          default:
          case 'error':
            this._log.error(
              'There was an error with A/B Testing. Make sure controlGroupRatio is a number >= 0 and <= 1'
            );
            break;
          case 'control':
            (this._isExposed = !1), this._log.info('User is in control group!');
        }
      var s =
        this._userId !== r ||
        !1 ===
          (function e(t, i) {
            if (!pt(t) || !pt(i)) return t === i;
            var r = Object.keys(t),
              s = Object.keys(i);
            if (r.length !== s.length) return !1;
            for (var n = 0, o = r; n < o.length; n++) {
              var a = o[n];
              if (!e(t[a], i[a])) return !1;
            }
            return !0;
          })(this._ext, e.ext);
      (this._userIdAvailable = !0),
        (this._userId = r),
        (this._gpId = e.gp),
        this._userIdAvailablePromiseResolver(r),
        (this._ext = e.ext),
        (this._publisherTrueLinkId = e.publisherTrueLinkId),
        (this._fromCache = t),
        this._log.info('User id updated', { hasChanged: s, fromCache: t }),
        this._availableCallback && this._availableCallback.triggerNow(),
        this._isRefreshing &&
          this._refreshCallback &&
          (!1 === t || !1 === this._isRefreshingWithFetch) &&
          this._refreshCallback.triggerNow(),
        s && this._fireOnUpdate(),
        this.getOptions().allowGCReclaim !== Tt.AFTER_UID_SET ||
          (t && i) ||
          Lt.releaseInstance(this);
    }
    _fireOnUpdate() {
      setTimeout(() => {
        nt(this._updateCallback) &&
          (this._log.debug('Firing onUpdate'), this._updateCallback(this));
      }, 0);
    }
    localStorageGrant() {
      return this.clientStore.localStorageGrant();
    }
  }
  class kt {
    isBooted() {
      return N(window.id5Bootstrap);
    }
    getTrueLink() {
      return this.isBooted()
        ? window.id5Bootstrap.getTrueLinkInfo()
        : { booted: !1 };
    }
    setPrivacy(e) {
      this.isBooted() &&
        window.id5Bootstrap.setPrivacy &&
        window.id5Bootstrap.setPrivacy(e);
    }
    clearPrivacy() {
      this.setPrivacy(void 0);
    }
  }
  class Mt {
    set debug(e) {
      (e = e), (Ze = !!e);
    }
    get debug() {
      return tt();
    }
    constructor() {
      var e =
        0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : 'api';
      d(this, 'origin', void 0),
        d(this, 'loaded', !1),
        d(this, '_isUsingCdn', !1),
        d(this, '_referer', !1),
        d(this, '_version', Dt),
        d(this, 'versions', {}),
        d(this, 'invocationId', 0),
        (this.loaded = !0),
        (this._isUsingCdn = !!(
          document &&
          document.currentScript &&
          document.currentScript.src &&
          0 === document.currentScript.src.indexOf('https://cdn.id5-sync.com')
        )),
        (this._referer = _t()),
        (this.versions[Dt] = !0),
        (this.origin = e);
    }
    init(e) {
      this.invocationId += 1;
      const t = new it(this.origin, this.invocationId);
      try {
        t.info(
          'ID5 API version '.concat(this._version, '. Invoking init()'),
          e
        );
        const d = new Pt(e, t);
        var i = d.getOptions();
        const h = this._configureDiagnostics(i, t);
        h &&
          (h.loadDelayTimer().recordNow(),
          h.invocationCountSummary().record(this.invocationId, {
            fenced:
              'function' == typeof window.Fence &&
              window.fence instanceof window.Fence
          }));
        var r = new te(window, !d.hasCreativeRestrictions()),
          s = new $(r, t),
          n = i.allowLocalStorageWithoutConsentApi || i.debugBypassConsent;
        const u = new Fe(s, d.storageConfig, n, t, h);
        const g = new ke(() => u.localStorageGrant(), s, d.storageConfig, t);
        var o = new kt(),
          a = Ye.createInstance(window, t, h, r, o, g),
          c = new bt(h, t),
          l = new xt(this._referer, this._version, this._isUsingCdn);
        const p = new Ft(d, g, u, h, c, t, a, l, o, this.origin);
        return p.bootstrap(), p.firstFetch(), g.scheduleGC(h), p;
      } catch (e) {
        t.error('Exception caught during init()', e);
      }
    }
    refreshId(e) {
      var t = 1 < arguments.length && void 0 !== arguments[1] && arguments[1],
        i = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {};
      if (!dt(t))
        throw new Error(
          'Invalid usage of refreshId(): second parameter must be a boolean'
        );
      return e.refreshId(t, i), e;
    }
    _configureDiagnostics(e, t) {
      try {
        var i = e.partnerId;
        const a = new fe(this.origin, Dt);
        var r,
          s = e.diagnostics;
        return (
          a.addCommonTags(
            h(
              h({}, ve(i)),
              {},
              {
                tml: this._referer.topmostLocation,
                provider: e.provider || 'default'
              }
            )
          ),
          (null != s && s.publishingDisabled) ||
            ((n = s.publishingSampleRatio),
            (r =
              Math.random() < n && re
                ? (e, t) => new se(o, { sampling: n }).publish(e, t)
                : (e) => e),
            null != s &&
              s.publishAfterLoadInMsec &&
              0 < s.publishAfterLoadInMsec &&
              a.schedulePublishAfterMsec(s.publishAfterLoadInMsec, r),
            null != s &&
              s.publishBeforeWindowUnload &&
              a.schedulePublishBeforeUnload(r)),
          a
        );
      } catch (e) {
        return void t.error('Failed to configure diagnostics', e);
      }
      var n, o;
    }
  }
  new Mt();
  (window.ID5 && 'api' === window.ID5.origin) || (window.ID5 = new Mt('api'));
})();

var cmpChecker = (function () {
  // ver 174 - inf scroll ready - dbg ext ready - refactored cmp - keywords sending - crypto-det - id5 - uids sync
  var CDN_SERVER = 'https://cdn.adx.ws';
  var API_URL = 'https://req.adx.ws';
  var AD_SERVER_URL = API_URL + '/ad';

  var cmpData = {
    tcfeu: '',
    gpp: '',
    usp: ''
  };

  var treeChangeDetected = false;
  var prereqRefreshFlag = null;
  var refreshParamsParsed = false;
  var isWindowFocused = true;
  var inventoryId = null;

  var loadedZones = {};
  var calledViewable = [];
  var calledImpressions = [];
  var zoneStatus = {};
  var secondsZone = {};
  var loadedAds = [];
  var doNotRefresh = [];
  var cmpProvider = null;
  var requestDataStore = [];
  var isCookieSynced = false;
  var pageKeywords = [];
  var alreadyPushed = [];
  var sevioDebugActive = false;
  var urlSearchParams = new URLSearchParams(window.location.search);
  var sevioDebug = urlSearchParams.get('sevioDebug');
  var sevioDebugLS = localStorage.getItem('sevioDebug');
  var hasWallet = 0;
  var sessionRandomString = '?rand=' + Math.random().toString(36).substr(2, 10);

  if (sevioDebug === 'true' || sevioDebugLS === 'true') sevioDebugActive = true;

  setInterval(function () {
    alreadyPushed.length = 0; // reset to allow force push
  }, 10000);

  var deleteLocalStorageRefreshParams = function () {
    var sevioadsLS = JSON.parse(localStorage.getItem('sevioads') || '{}');

    Object.keys(sevioadsLS).forEach(function (key) {
      if (key.startsWith('refreshParams_')) {
        delete sevioadsLS[key];
      }
    });

    localStorage.setItem('sevioads', JSON.stringify(sevioadsLS));
  };

  var updateLocalStorageKey = function (options) {
    var key = options.key;
    var nestedKey = options.nestedKey;
    var value = options.value;
    var settings = JSON.parse(localStorage.getItem(key)) || {};
    settings[nestedKey] = value;
    localStorage.setItem(key, JSON.stringify(settings));
  };

  var readLocalStorageKey = function (options) {
    var key = options.key;
    var nestedKey = options.nestedKey;
    var settings = JSON.parse(localStorage.getItem(key)) || {};
    if (nestedKey) {
      return settings[nestedKey];
    }
    return settings;
  };

  var getZoneRefreshParam = function (adDataZone, lookupParam) {
    var storeData = readLocalStorageKey({
      key: 'sevioads',
      nestedKey: 'refreshParams_' + adDataZone
    });

    return storeData !== undefined && storeData !== null
      ? storeData[lookupParam]
      : null;
  };

  var howManyLoaded = function (searchString) {
    var countLoaded = 0;
    for (var key in loadedZones) {
      if (
        loadedZones.hasOwnProperty(key) &&
        key.indexOf('adZone_' + searchString) === 0
      ) {
        countLoaded++;
      }
    }
    return countLoaded;
  };

  var detectWalletsPresence = function () {
    const _wallets = [
      'ethereum',
      'web3',
      'cardano',
      'BinanceChain',
      'solana',
      'tron',
      'tronLink',
      'tronWeb',
      'tronLink',
      'starknet_argentX',
      'walletLinkExtension',
      'coinbaseWalletExtension',
      '__venom',
      'martian',
      'razor',
      'razorWallet',
      'ic', // plug wallet,
      'cosmos',
      'ronin',
      'starknet_braavos',
      'XverseProviders',
      'compass',
      'solflare',
      'solflareWalletStandardInitialized',
      'sender',
      'rainbow'
    ];
    return _wallets.some((prop) => typeof window[prop] !== 'undefined') ? 1 : 0;
  };

  var postCmpActionCalled = false;
  var postCmpAction = function (cmpData) {
    if (!postCmpActionCalled) {
      postCmpActionCalled = true;

      sevioads.cookieSyncing(requestDataStore);
    }
  };

  var isCookieYesScriptPresent = function () {
    var scripts = document.getElementsByTagName('script');
    for (var i = 0; i < scripts.length; i++) {
      if (scripts[i].src.indexOf('cookieyes.com') !== -1) {
        return true;
      }
    }
    return false;
  };

  var injectCMP = function () {
    if (cmpProvider && cmpProvider['provider'] === 'cookieyes') {
      var script = document.createElement('script');
      script.src =
        'https://cdn-cookieyes.com/client_data/' +
        cmpProvider['id'] +
        '/script.js';
      if (!isCookieYesScriptPresent()) {
        document.getElementsByTagName('head')[0].appendChild(script);
      }
    }
  };

  var cbAfterExecution = function () {
    injectCMP();

    waitForTcfApi(function () {
      console.log('sevioads: __tcfapi is now available.');
      var checkCMP = function () {
        if (typeof __gpp !== 'undefined' && typeof __gpp === 'function') {
          try {
            var gppData = __gpp('ping');
            cmpData.gpp = gppData.gppString || '';
            postCmpAction(cmpData);
          } catch (e) {}
        }

        if (typeof __uspapi !== 'undefined' && typeof __uspapi === 'function') {
          try {
            __uspapi('getUSPData', 1, function (uspData, success) {
              if (success) {
                cmpData.usp = uspData.uspString || '';
                postCmpAction(cmpData);
              }
            });
          } catch (e) {}
        }

        if (typeof __tcfapi !== 'undefined' && typeof __tcfapi === 'function') {
          try {
            __tcfapi('addEventListener', 2, function (tcData, success) {
              if (success && tcData.eventStatus === 'tcloaded') {
                cmpData.tcfeu = tcData.tcString;
                cmpData.state = 'tcloaded';
                postCmpAction(cmpData);
              } else if (
                success &&
                tcData.eventStatus === 'useractioncomplete'
              ) {
                console.log('completed the action');
                cmpData.tcfeu = tcData.tcString;
                cmpData.state = 'useractioncomplete';
                postCmpAction(cmpData);
              } else {
                // console.log("sevioads: TCF not loaded");
                __tcfapi('ping', 2, (responsePing) => {
                  if (
                    responsePing.cmpLoaded &&
                    responsePing.displayStatus === 'disabled' &&
                    !responsePing.gdprApplies
                  ) {
                    postCmpAction(cmpData);
                  }
                });
              }
            });
          } catch (e) {
            console.log('sevioads: TCF error:', e);
          }
        } else {
          cmpData.state = 'UNKNOWN';
          postCmpAction(cmpData);
        }
      };
      checkCMP();
    });
  };

  var detectHeaderKeywords = function () {
    var metaTags = document.getElementsByTagName('meta');

    for (var i = 0; i < metaTags.length; i++) {
      var metaTag = metaTags[i];

      if (metaTag.getAttribute('name') === 'keywords') {
        var keywords = metaTag.getAttribute('content');
        if (keywords) {
          return keywords.split(',').map(function (keyword) {
            return keyword.trim();
          });
        } else {
          return [];
        }
      }
    }

    return [];
  };

  var detectJsonLdKeywords = function () {
    var scriptTags = document.querySelectorAll(
      'script[type="application/ld+json"]'
    );
    var keywords = [];

    for (var i = 0; i < scriptTags.length; i++) {
      var scriptTag = scriptTags[i];

      try {
        var jsonData = JSON.parse(scriptTag.textContent);
        var jsonObjects = Array.isArray(jsonData) ? jsonData : [jsonData];

        for (var j = 0; j < jsonObjects.length; j++) {
          var jsonObject = jsonObjects[j];

          if (jsonObject.keywords) {
            if (typeof jsonObject.keywords === 'string') {
              keywords = keywords.concat(
                jsonObject.keywords
                  .split(',')
                  .map(function (keyword) {
                    return keyword.trim();
                  })
                  .filter(function (keyword) {
                    return keyword.length > 0;
                  })
              );
            }
          }
        }
      } catch (error) {
        console.error('Error parsing JSON-LD:', error);
      }
    }

    return keywords;
  };

  var detectTitleAndH1AndUrl = function () {
    var keywords = [];

    try {
      var titleTag = document.getElementsByTagName('title')[0];
      if (titleTag) {
        var titleContent = titleTag.textContent.trim();
      }
      var h1Tag = document.getElementsByTagName('h1')[0];
      if (h1Tag) {
        var h1Content = h1Tag.textContent.trim();
      }
    } catch (error) {
      console.error('An error occurred while extracting keywords:', error);
    }
    keywords[0] = titleContent + ' ' + h1Content + ' ' + window.location.href;
    return keywords;
  };

  window.sevioads = (function () {
    var refreshTimerInitialized = false;
    var remoteParamUrls = [];
    var groupedRefresh = {};
    var initialPath = window.location.pathname;

    if (window.sevioadsInitialized) {
      return window.sevioads;
    }
    window.sevioadsInitialized = true;

    hasWallet = detectWalletsPresence();

    // Run keyword detection only once
    var keywordsJson = detectJsonLdKeywords();
    if (keywordsJson.length) {
      pageKeywords = keywordsJson;
    } else {
      var keywordsHeader = detectHeaderKeywords();
      if (keywordsHeader.length) {
        pageKeywords = keywordsHeader;
      } else {
        // TODO: Activate this when BE decides the format to receive !
        // var titleH1AndUrl = detectTitleAndH1AndUrl();
        // pageKeywords = titleH1AndUrl;
        pageKeywords = [];
      }
    }

    var sevioads = {
      push: function (args) {
        window.sevioadsData = window.sevioadsData || [];
        if (Array.isArray(args)) {
          var zoneIdsToMatch = [];

          for (var i = 0; i < args.length; i++) {
            var cntAdsLoaded = howManyLoaded(args[i].zone);
            args[i].placeholderId = args[i].zone + '_id_' + cntAdsLoaded;
            args[i].loaded = true;
            inventoryId = args[i].inventoryId;
            window.sevioadsData.push(args[i]);
            zoneIdsToMatch.push(args[i].zone);

            var elByDataZone = document.querySelectorAll(
              '[data-zone="' + args[i].zone + '"]'
            );
            loadedZones['adZone_' + args[i].zone + '_id_' + cntAdsLoaded] =
              args[i];

            updateLocalStorageKey({
              key: 'sevioads',
              nestedKey: 'adZone_' + args[i].zone + '_id_' + cntAdsLoaded,
              value: args[i]
            });

            var initialAdStart = readLocalStorageKey({
              key: 'sevioads',
              nestedKey:
                'initialStartTime_' + args[i].zone + '_id_' + cntAdsLoaded
            });
            if (!initialAdStart) {
              updateLocalStorageKey({
                key: 'sevioads',
                nestedKey:
                  'initialStartTime_' + args[i].zone + '_id_' + cntAdsLoaded,
                value: Date.now()
              });
            }
            zoneStatus[args[i].zone + '_id_' + cntAdsLoaded] = 'stopped';

            var elNumber = 0;
            if (elByDataZone && elByDataZone.length > 0) {
              for (var j = 0; j < elByDataZone.length; j++) {
                elByDataZone[j].setAttribute(
                  'id',
                  args[i].zone + '_id_' + elNumber++
                );
              }
            }
          }

          var adPlaceholders = document.querySelectorAll('.sevioads');
          var sevioadsArray = [];
          for (var j = 0; j < adPlaceholders.length; j++) {
            sevioadsArray.push(adPlaceholders[j]);
          }

          var filteredElements = [];
          for (var k = 0; k < sevioadsArray.length; k++) {
            var element = sevioadsArray[k];
            var dataZoneValue = element.getAttribute('data-zone');
            if (
              zoneIdsToMatch.indexOf(dataZoneValue) !== -1 &&
              alreadyPushed.indexOf(element) === -1
            ) {
              filteredElements.push(element);
              alreadyPushed.push(element);
            }
          }
        }

        sevioads.loadingRequest({ foundAds: filteredElements }); // main loading

        loadBannerAd['initialized'] = function (args) {
          return new this(args);
        };
        loadBannerAd['initialized'](args);
      },

      cookieSyncing: function () {
        sevioads.loadServerUrl({
          serverUrl: API_URL + '/uids',
          cFunction: function (response) {
            if (
              response.xhttp.readyState === 4 &&
              response.xhttp.status === 200
            ) {
              var bidderItems = JSON.parse(response.xhttp.responseText);

              // id5 calls
              if (bidderItems.hasOwnProperty('eids')) {
                var eids = bidderItems.eids;
                sevioads.processID5Request(eids);
              }

              sevioads.biddersHandler(bidderItems.bidders, function () {
                sevioads.processQueuedAds();
              });
            } else {
              sevioads.processQueuedAds();
            }
            isCookieSynced = true;
            if (!refreshInterval) {
              refreshInterval = setInterval(refreshMain, 1000);
            }
          },
          serverMethod: 'POST',
          cType: 'application/json',
          data: JSON.stringify({
            inventoryId: inventoryId,
            wdb: hasWallet,
            tcfeu: cmpData.tcfeu,
            usp: cmpData.usp,
            gpp: cmpData.gpp
          })
        });
      },

      loadSyncItem: function (bidderItem, callback) {
        if (bidderItem.userSyncMethod === 'REDIRECT') {
          var img = new Image();
          img.onload = function () {
            callback();
          };

          img.onerror = function () {
            callback();
          };
          img.src = bidderItem.url;
          img.style.display = 'none';
          document.body.appendChild(img);
        }
        if (bidderItem.userSyncMethod === 'IFRAME') {
          var iframeSync = document.createElement('iframe');
          iframeSync.style.display = 'none';

          iframeSync.onload = function () {
            callback();
            document.body.removeChild(iframeSync);
          };

          iframeSync.onerror = function () {
            callback();
            document.body.removeChild(iframeSync);
          };

          iframeSync.src = bidderItem.url;
          document.body.appendChild(iframeSync);
          callback();
        }
      },

      processID5Request: function (eidsItems) {
        if (sevioDebugActive) ID5.debug = true;

        ID5.init({
          partnerId: 1741,
          cmpApi: 'iab',
          pd: ''
        }).onUpdate(function (status) {
          if (status.getUserId()) {
            for (var i = 0; i < eidsItems.length; i++) {
              if (eidsItems[i].hasOwnProperty('url')) {
                eidsItems[i].url = eidsItems[i].url.replace(
                  '$%UID_PLACEHOLDER%$',
                  status.getUserId()
                );

                sevioads.loadServerUrl({
                  serverUrl: eidsItems[i].url,
                  cFunction: function () {},
                  serverMethod: 'GET',
                  cType: 'application/json',
                  data: JSON.stringify({})
                });
                if (sevioDebugActive) {
                  console.log('Debug_sevio_url:', eidsItems[i].url);
                  console.log('Debug_sevio_id5:', status.getUserId());
                }
              }
            }
          }
        });
      },

      biddersHandler: function (bidderItems, allItemsLoadedCallback) {
        var loadedCount = 0;
        if (bidderItems && bidderItems.length > 0) {
          function checkCompletion() {
            loadedCount++;

            if (loadedCount === bidderItems.length) {
              allItemsLoadedCallback();
            }
          }
          for (var i = 0; i < bidderItems.length; i++) {
            this.loadSyncItem(bidderItems[i], checkCompletion);
          }
        } else {
          allItemsLoadedCallback();
        }
      },

      processQueuedAds: function () {
        var nonce = sevioads.getNonce();

        for (var x = 0; x < requestDataStore.length; x++) {
          sevioads.loadServerUrl({
            serverUrl: AD_SERVER_URL + '?t=' + Date.now(),
            cFunction: sevioads.fetchServerData,
            serverMethod: 'POST',
            cType: 'application/json',
            xNonce: nonce,
            data: JSON.stringify(requestDataStore[x])
          });
        }
      },

      renderAds: function (response) {
        var objKeys = Object.keys(response.winningBidsByTagId);
        for (var i = 0; i < objKeys.length; i++) {
          var adData = response.winningBidsByTagId[objKeys[i]];

          for (var k = 0; k < adData.referenceIDs.length; k++) {
            this.associateViewableIdToZone({
              referenceId: adData.referenceIDs[k],
              viewableURL: adData.viewableURL
            });

            var index = calledViewable.indexOf(adData.viewableURL);
            if (index !== -1) calledViewable.splice(index, 1);
            var indexImp = calledImpressions.indexOf(adData.impURL);
            if (indexImp !== -1) calledImpressions.splice(indexImp, 1);

            var adPlaceholder = document.getElementById(adData.referenceIDs[k]);

            var adRenderParams = this.getParamsById(objKeys[i]);
            if (adRenderParams.adType === 'native') {
              var adDataDecoded = adData.adm;
              var adDecoded = JSON.parse(adDataDecoded);
              var defaultVarsUrl = sevioDebugActive
                ? adDecoded.link.ext.defaults + sessionRandomString
                : adDecoded.link.ext.defaults;

              var htmlNativeTemplateUrl = sevioDebugActive
                ? adDecoded.link.ext.template + sessionRandomString
                : adDecoded.link.ext.template;
              var nativeLanding = {
                name: 'clickURL',
                type: 'TEXT',
                value: adDecoded.link.url
              };

              sevioads.loadServerUrl({
                serverUrl: defaultVarsUrl,
                cFunction: function (cdnDefResponse) {
                  if (
                    cdnDefResponse.xhttp.readyState === 4 &&
                    cdnDefResponse.xhttp.status === 200
                  ) {
                    var defaultItemVars = JSON.parse(
                      cdnDefResponse.xhttp.responseText
                    );
                    var formattedValues = sevioads.formatUsingDefaultValues({
                      defaultItemVars,
                      assets: cdnDefResponse.settings.assets
                    });

                    formattedValues.push(cdnDefResponse.settings.nativeLanding);

                    sevioads.loadServerUrl({
                      serverUrl: cdnDefResponse.settings.htmlNativeTemplateUrl,
                      cFunction: function (htmlResponse) {
                        if (
                          htmlResponse.xhttp.readyState === 4 &&
                          htmlResponse.xhttp.status === 200
                        ) {
                          var htmlNativeTemplate =
                            htmlResponse.xhttp.responseText;
                          var resNativeTemplate = sevioads.replaceNativeVars({
                            htmlNativeTemplate: htmlNativeTemplate,
                            formattedValues: formattedValues
                          });
                          cdnDefResponse.settings.adPlaceholder.innerHTML =
                            resNativeTemplate;

                          // native ad render successfully
                          // console.log(
                          //   '%cZONE_placeholder' +
                          //     adData.referenceIDs[0] +
                          //     ' sentImpURL:' +
                          //     adData.impURL,
                          //   'color: green'
                          // );

                          sevioads.loadServerUrl({
                            serverUrl: adData.impURL,
                            cFunction: sevioads.onRender,
                            serverMethod: 'GET',
                            cType: 'text/html',
                            eventTrackerType: 1,
                            eventTrackers: adData.eventTrackers
                          });
                          sevioads.markLoadedAd(objKeys[i]);
                        }
                      },
                      serverMethod: 'GET',
                      cType: 'text/html',
                      settings: 'read-native-template'
                    });
                  }
                },
                serverMethod: 'GET',
                cType: 'application/json',
                settings: {
                  htmlNativeTemplateUrl: htmlNativeTemplateUrl,
                  adPlaceholder: adPlaceholder,
                  nativeLanding: nativeLanding,
                  assets: adDecoded.assets
                }
              });

              adPlaceholder.setAttribute('data-rendered', 'true');
              if (adData.eventTrackers) {
                adPlaceholder.setAttribute(
                  'data-event-trackers',
                  JSON.stringify(adData.eventTrackers)
                );
              }
              observer.unobserve(adPlaceholder);
              observer.observe(adPlaceholder);
              continue;
            }

            adPlaceholder.setAttribute('data-rendered', 'true');
            if (adData.eventTrackers) {
              adPlaceholder.setAttribute(
                'data-event-trackers',
                JSON.stringify(adData.eventTrackers)
              );
            }

            var isDynAd = adData.widthUnit === '%' || adData.heightUnit === '%';
            var maxWidthAndHeight = '';
            var tbAdDiv = document.createElement('div');
            tbAdDiv.id =
              'sevio_iframe_markup_' + adData.width + 'x' + adData.height;
            tbAdDiv.setAttribute('data-rendered', 'true');

            try {
              if (adData.render === 'r') {
                doNotRefresh.push(objKeys[i]); // adsense
                adPlaceholder.setAttribute(
                  'style',
                  'display: inline-block; width: inherit; height: inherit;'
                );
                tbAdDiv.setAttribute(
                  'style',
                  'display: inline-block; width: inherit; height: inherit;'
                );
                sevioads.loadServerUrl({
                  serverUrl: adData.admURL,
                  cFunction: function (cdnScript) {
                    if (
                      cdnScript.xhttp.readyState === 4 &&
                      cdnScript.xhttp.status === 200
                    ) {
                      var scriptContent =
                        'var adContainer = (function() { ' +
                        cdnScript.xhttp.responseText +
                        '  return container; })();';
                      try {
                        eval.call(tbAdDiv, scriptContent);
                      } catch (e) {
                        console.log('Error on external script execution.');
                      }
                      if (typeof adContainer !== 'undefined') {
                        tbAdDiv.appendChild(adContainer);
                      }
                    }
                  },
                  serverMethod: 'GET',
                  cType: 'application/json',
                  settings: {}
                });
              } else {
                if (isDynAd) {
                  adPlaceholder.setAttribute(
                    'style',
                    'display: inline-block; width: inherit; height: inherit; max-height: inherit; max-width: inherit;'
                  );
                  tbAdDiv.setAttribute(
                    'style',
                    'display: inline-block; width: inherit; height: inherit; max-height: inherit; max-width: inherit;'
                  );
                } else {
                  adPlaceholder.setAttribute(
                    'style',
                    'max-width:' +
                      adData.width +
                      'px; width:' +
                      adData.width +
                      'px; height:' +
                      adData.height +
                      'px; display: inline-block;'
                  );
                  tbAdDiv.setAttribute(
                    'style',
                    'max-width: ' +
                      adData.width +
                      'px; width:' +
                      adData.width +
                      'px; height:' +
                      adData.height +
                      'px; display: inline-block;'
                  );
                }

                var iFrame = document.createElement('iframe');
                if (adData.admURL) {
                  iFrame.src = adData.admURL;
                }
                iFrame.setAttribute('scrolling', 'no');

                if (isDynAd) {
                  maxWidthAndHeight =
                    'max-height: inherit; max-width: inherit;';
                } else {
                  maxWidthAndHeight = 'max-height: ' + adData.height + 'px;';
                }
                iFrame.setAttribute(
                  'style',
                  'border: 0; overflow: hidden; margin:0 auto; width: 100%; max-width: ' +
                    adData.width +
                    'px;height: 100%;' +
                    maxWidthAndHeight
                );
                iFrame.setAttribute('frameborder', '0');
                iFrame.setAttribute('allowtransparency', 'true');
                tbAdDiv.appendChild(iFrame);
              }
            } catch (e) {
              console.log('Error during ad rendering:', e);
            }

            adPlaceholder.innerHTML = '';
            adPlaceholder.appendChild(tbAdDiv);
            if (adData.eventTrackers) {
              adPlaceholder.setAttribute(
                'data-event-trackers',
                JSON.stringify(adData.eventTrackers)
              );
            }

            var isImpLinkUsed = calledImpressions.indexOf(adData.impURL) !== -1;

            if (!isImpLinkUsed) {
              // console.log(
              //   '%cZONE_placeholder' +
              //     adData.referenceIDs[k] +
              //     ' sentImpURL:' +
              //     adData.impURL,
              //   'color: green'
              // );
              sevioads.loadServerUrl({
                serverUrl: adData.impURL,
                cFunction: sevioads.onRender,
                serverMethod: 'GET',
                cType: 'text/html',
                eventTrackerType: 1,
                eventTrackers: adData.eventTrackers
              });
              calledImpressions.push(adData.impURL);
              sevioads.markLoadedAd(objKeys[i]);

              observer.unobserve(adPlaceholder);
              observer.observe(adPlaceholder);
            }
          }
        }
      },
      markLoadedAd: function (adData) {
        window.sevioadsData.map(function (adItem) {
          if (adItem.zone === adData) {
            adItem.loaded = true;
          }
          return adItem;
        });
      },
      onUrlChange: function () {
        console.log('Called onUrlChange');
      },
      associateViewableIdToZone: function (props) {
        try {
          var referenceId = props.referenceId;
          var viewableURL = props.viewableURL;
          if (sevioadsData.length) {
            for (var i = 0; i < sevioadsData.length; i++) {
              if (sevioadsData[i].placeholderId === referenceId)
                sevioadsData[i].viewableURL = viewableURL;
            }
          }
        } catch (e) {
          console.log('Error: ', e);
        }
      },
      refresh: function () {},
      onRender: function (gParams) {
        if (gParams.xhttp.readyState === 4 && gParams.xhttp.status === 200) {
          try {
          } catch (e) {
            console.log('Error onRender:' + e);
          }
        }
      },

      formatUsingDefaultValues: function ({ defaultItemVars, assets }) {
        if (defaultItemVars.length) {
          for (var i = 0; i < defaultItemVars.length; i++) {
            for (var j = 0; j < assets.length; j++) {
              if (
                defaultItemVars[i].name === assets[j].name &&
                assets[j].value !== null
              ) {
                defaultItemVars[i] = assets[j];
              }
            }
          }
        }
        return defaultItemVars;
      },

      replaceNativeVars: function (replElements) {
        var formattedValues = replElements.formattedValues;
        var htmlNativeTemplate = replElements.htmlNativeTemplate;

        var regex = /"?\[%([^%]+)%\]"?/g;

        var replTemplate = htmlNativeTemplate.replace(
          regex,
          function (match, p1) {
            for (var i = 0; i < formattedValues.length; i++) {
              if (formattedValues[i].name === p1) {
                if (match[0] === '[' && match[match.length - 1] === ']') {
                  return formattedValues[i].value;
                } else {
                  var loadedAsset =
                    formattedValues[i].type === 'IMAGE' && sevioDebugActive
                      ? formattedValues[i].value + sessionRandomString
                      : formattedValues[i].value;
                  return match[0] + loadedAsset + match[match.length - 1];
                }
              }
            }
            return match;
          }
        );

        return replTemplate;
      },
      fetchServerData: function (sParams) {
        if (sParams.xhttp.readyState === 4 && sParams.xhttp.status === 200) {
          try {
            var jsonResponse = JSON.parse(sParams.xhttp.responseText);
            if (sParams.settings === 'refresh') {
              sevioads.reRenderAds(jsonResponse);
            } else {
              sevioads.renderAds(jsonResponse);
            }
          } catch (e) {
            console.log('Error loading ad' + e);
          }
        }
        if (sParams.xhttp.readyState === 4 && sParams.xhttp.status === 204) {
          var event = new CustomEvent('sevio:empty', {
            detail: {
              message: 'No ad was served',
              time: new Date(),
              postParams: sParams.data
            }
          });
          window.dispatchEvent(event);

          try {
            if (sParams.data) {
              var adJsonParams = JSON.parse(sParams.data);
              if (adJsonParams && adJsonParams.ads) {
                refAdKey = adJsonParams.ads[0].referenceId;
                for (var i = 0; i < adJsonParams.ads.length; i++) {
                  loadedZones[
                    'adZone_' + adJsonParams.ads[i].referenceId
                  ].empty();
                }
              }
            }
          } catch {}
        }
      },
      getNonce: function () {
        return Math.floor(Math.random() * 1000000000000) + new Date().getTime();
      },

      loadingRequest: function (loadingProps) {
        var foundAds = loadingProps.foundAds;

        var requestData = { ads: [] };
        if (!foundAds) return;

        for (var i = 0; i < foundAds.length; i++) {
          var myElement = foundAds[i];
          var requestDataAdElement = {};
          var adZone = myElement.getAttribute('data-zone');
          var placeholderId = foundAds[i].getAttribute('id');
          var zoneParams = sevioads.getParamsById(adZone);

          requestDataAdElement.type = zoneParams.adType.toUpperCase();
          requestDataAdElement.tagId = adZone;
          requestDataAdElement.referenceId = placeholderId;

          if (sevioDebugActive) console.log('AdParams:', zoneParams);

          // flag placeholder as loaded

          var cdnPath =
            CDN_SERVER +
            '/' +
            zoneParams.accountId +
            '/inventories/' +
            zoneParams.inventoryId +
            '.json';
          if (
            zoneParams.hasOwnProperty('inventoryId') &&
            zoneParams.hasOwnProperty('accountId') &&
            !(remoteParamUrls.indexOf(cdnPath) !== -1)
          ) {
            remoteParamUrls.push(cdnPath);
          }

          if (
            zoneParams.adType.toLowerCase() === 'banner' &&
            zoneParams.width &&
            zoneParams.height
          ) {
            requestDataAdElement.sizes = [
              {
                width: zoneParams.width,
                height: zoneParams.height
              }
            ];
          }
          var adSizes = document.querySelector(
            '[data-zone="' + zoneParams.zone + '"]'
          );
          requestDataAdElement.maxSize = {
            width: adSizes.parentNode.offsetWidth,
            height: adSizes.parentNode.offsetHeight
          };

          loadedAds.push(placeholderId);
          requestDataAdElement.referenceId = placeholderId;
          requestData.ads.push(requestDataAdElement);
          // break; // - uncomment will load only one ad per push - left commented allows bulk push
        }

        requestData.privacy = cmpData;
        requestData.keywords = {};
        requestData.keywords.tokens = pageKeywords;
        requestData.wdb = hasWallet;
        requestData.xPageUrl = window.location.href;

        if (sevioDebugActive) {
          console.log('RequestDATA:', requestData);
        }

        if (requestData.ads.length > 0) {
          if (prereqRefreshFlag === null) {
            prereqRefreshFlag = 1;
            sevioads.prereqRefresh(cbAfterExecution);
          }

          requestDataStore.push(requestData);

          // ! - Normal loading - this has changed due to cmp - reactive
          if (isCookieSynced) {
            var nonce = sevioads.getNonce();

            sevioads.loadServerUrl({
              serverUrl: AD_SERVER_URL + '?t=' + Date.now(),
              cFunction: sevioads.fetchServerData,
              serverMethod: 'POST',
              cType: 'application/json',
              xNonce: nonce,
              data: JSON.stringify(requestData)
            });
          }
        }
      },
      fetchJsonParams: function (sParams) {
        deleteLocalStorageRefreshParams();
        if (sParams.xhttp.readyState === 4 && sParams.xhttp.status === 200) {
          try {
            for (var key in zoneStatus) {
              if (zoneStatus.hasOwnProperty(key)) {
                zoneStatus[key] = 'stopped';
              }
            }

            var jsonResponse = JSON.parse(sParams.xhttp.response);
            var jsonResponseZones = {};

            if (
              jsonResponse.hasOwnProperty('zones') &&
              jsonResponse['zones'] !== undefined
            ) {
              jsonResponseZones = jsonResponse['zones'];
              cmpProvider = jsonResponse['cmp'];
            } else {
              jsonResponseZones = jsonResponse;
            }

            var zoneItems = Object.keys(jsonResponseZones);
            for (var i = 0; i < zoneItems.length; i++) {
              updateLocalStorageKey({
                key: 'sevioads',
                nestedKey: 'refreshParams_' + zoneItems[i],
                value: jsonResponseZones[zoneItems[i]]
              });

              if (sevioads.getParamsById(zoneItems[i])) {
                var refreshKey =
                  'rRate_' +
                  jsonResponseZones[zoneItems[i]].refreshRate +
                  '_rMaxTimes_' +
                  jsonResponseZones[zoneItems[i]].refreshMaxTimes +
                  '_rCounterInterval_' +
                  jsonResponseZones[zoneItems[i]].refreshCounterInterval;
                if (groupedRefresh.hasOwnProperty(refreshKey)) {
                  groupedRefresh[refreshKey].zones.push(zoneItems[i]);
                } else {
                  groupedRefresh[refreshKey] = {
                    refreshParams: jsonResponseZones[zoneItems[i]],
                    zones: [zoneItems[i]]
                  };
                }
              }
            }
            sParams.settings();
          } catch (e) {
            console.log('Error parsing remote params' + e);
          }
        }
      },
      isAdInViewport: function (zoneId) {
        var adElement = document.getElementById(zoneId);

        if (!adElement) {
          return false;
        }

        var adRect = adElement.getBoundingClientRect();
        var adTop = adRect.top;
        var adBottom = adRect.bottom;
        var adLeft = adRect.left;
        var adRight = adRect.right;
        var windowHeight =
          window.innerHeight || document.documentElement.clientHeight;
        var windowWidth =
          window.innerWidth || document.documentElement.clientWidth;

        return (
          adBottom > 0.5 * adRect.height &&
          adTop < windowHeight - 0.5 * adRect.height &&
          adRight > 0 &&
          adLeft < windowWidth
        );
      },
      prereqRefresh: function (callback) {
        if (remoteParamUrls.length) {
          var completedRequests = 1;

          function checkAndResolve() {
            completedRequests++;

            if (completedRequests >= remoteParamUrls.length) {
              refreshParamsParsed = true;
              callback();
            }
          }

          var nonce = sevioads.getNonce();

          for (var i = 0; i < remoteParamUrls.length; i++) {
            sevioads.loadServerUrl({
              serverUrl: remoteParamUrls[i],
              cFunction: function () {
                sevioads.fetchJsonParams.apply(this, arguments);
                checkAndResolve();
              },
              serverMethod: 'GET',
              cType: 'application/json',
              xNonce: nonce,
              settings: function () {}
            });
          }
        }
      },
      reRenderAds: function (response) {
        var objRespKeys = Object.keys(response.winningBidsByTagId);
        for (var i = 0; i < objRespKeys.length; i++) {
          for (
            var k = 0;
            k < response.winningBidsByTagId[objRespKeys[i]].referenceIDs.length;
            k++
          ) {
            var adPlaceholder = document.getElementById(
              response.winningBidsByTagId[objRespKeys[i]].referenceIDs[k]
            );
            if (adPlaceholder) {
              adPlaceholder.innerHTML = '';
              observer.unobserve(adPlaceholder);
              observer.observe(adPlaceholder);
            }
          }
        }
        sevioads.renderAds(response);
      },
      getParamsByElementId: function (elementId) {
        var keyIdParams = readLocalStorageKey({
          key: 'sevioads',
          nestedKey: 'adZone_' + elementId
        });
        return keyIdParams;
      },
      getParamsById: function (elZone) {
        var paramsFound = window.sevioadsData.filter(function (obj) {
          return obj.zone === elZone;
        })[0];
        return paramsFound;
      },

      prepareRefreshRequest: function (rData) {
        var requestDataRefresh = { ads: [] };
        requestDataRefresh.privacy = cmpData;

        for (var i = 0; i < rData.length; i++) {
          var reqDataAdItemRefresh = {};
          var refreshAdParams = this.getParamsByElementId(rData[i]);

          reqDataAdItemRefresh.referenceId = refreshAdParams.placeholderId;
          reqDataAdItemRefresh.type = refreshAdParams.adType.toUpperCase();
          reqDataAdItemRefresh.tagId = refreshAdParams.zone;
          if (
            refreshAdParams.adType.toLowerCase() === 'banner' &&
            refreshAdParams.width &&
            refreshAdParams.height
          ) {
            requestDataAdElement.sizes = [
              {
                width: refreshAdParams.width,
                height: refreshAdParams.height
              }
            ];
          }
          var adSizesRefresh = document.getElementById(rData[i]);
          reqDataAdItemRefresh.maxSize = {
            width: adSizesRefresh.parentNode.offsetWidth,
            height: adSizesRefresh.parentNode.offsetHeight
          };
          requestDataRefresh.ads.push(reqDataAdItemRefresh);
        }

        requestDataRefresh.ads = requestDataRefresh.ads.filter(function (ad) {
          return doNotRefresh.indexOf(ad.tagId) === -1;
        });

        if (requestDataRefresh.ads.length > 0) {
          var nonce = sevioads.getNonce();

          requestDataRefresh.privacy = cmpData;
          requestDataRefresh.keywords = {};
          requestDataRefresh.keywords.tokens = pageKeywords;
          requestDataRefresh.wdb = hasWallet;
          requestDataRefresh.xPageUrl = window.location.href;

          sevioads.loadServerUrl({
            serverUrl: AD_SERVER_URL + '?t=' + Date.now() + '&refresh=true',
            cFunction: sevioads.fetchServerData,
            serverMethod: 'POST',
            cType: 'application/json',
            xNonce: nonce,
            data: JSON.stringify(requestDataRefresh),
            settings: 'refresh'
          });
        }
      },

      loadServerUrl: function (loadParams) {
        if (!loadParams.serverUrl) return false;

        var xhttp = new XMLHttpRequest();
        xhttp.onload = function () {
          loadParams.cFunction({
            xhttp: this,
            data: loadParams.data,
            settings: loadParams.settings
          });
        };
        xhttp.open(loadParams.serverMethod, loadParams.serverUrl);
        if (loadParams.cType) {
          xhttp.setRequestHeader('Content-Type', loadParams.cType);
        }
        if (loadParams.xNonce) {
          xhttp.setRequestHeader('X-Nonce', loadParams.xNonce);
        }

        if (loadParams.eventTrackers && loadParams.eventTrackers.length > 0) {
          var filteredEventTrackers = loadParams.eventTrackers.filter(
            function (et) {
              return et.type === loadParams.eventTrackerType;
            }
          );

          if (filteredEventTrackers.length > 0) {
            for (var index = 0; index < filteredEventTrackers.length; index++) {
              xhttp.setRequestHeader(
                'TB-Event-Tracker' + index,
                filteredEventTrackers[index].url
              );
            }
          }
        }

        if (loadParams.data) {
          xhttp.send(loadParams.data);
        } else {
          xhttp.send();
        }
      },

      onHideDocument: function () {
        for (var key in zoneStatus) {
          if (zoneStatus.hasOwnProperty(key)) {
            zoneStatus[key] = 'stopped';
            var adPlaceholder = document.getElementById(key);
            if (adPlaceholder) {
              observer.unobserve(adPlaceholder);
            }
          }
        }
      },
      onDocumentVisible: function () {
        for (var key in zoneStatus) {
          if (zoneStatus.hasOwnProperty(key)) {
            var adPlaceholder = document.getElementById(key);
            if (adPlaceholder) {
              observer.observe(adPlaceholder);
            }
          }
        }
      },
      getViewableURLById: function (placeholderId) {
        var foundViewableURL = '';
        if (sevioadsData.length) {
          for (var i = 0; i < sevioadsData.length; i++) {
            if (sevioadsData[i].placeholderId === placeholderId) {
              foundViewableURL = sevioadsData[i].viewableURL;
            }
          }
        }
        return foundViewableURL;
      },
      adInViewport: function (adItem) {
        setTimeout(function () {
          treeChangeDetected = false;
        }, 1000);
        var adZn = adItem.getAttribute('data-zone');
        var adDataZoneId = adItem.getAttribute('id');
        var viewableLink = this.getViewableURLById(adDataZoneId);

        var isFoundExternal = doNotRefresh.indexOf(adZn) !== -1;

        if (isFoundExternal) {
          zoneStatus[adDataZoneId] = 'stopped';
        } else {
          zoneStatus[adDataZoneId] = 'started';
        }

        var isViewableLinkUsed = calledViewable.indexOf(viewableLink) !== -1;
        if (!isViewableLinkUsed) {
          var eventTrackers = JSON.parse(
            adItem.getAttribute('data-event-trackers')
          );

          var targetInViewport = sevioads.isAdInViewport(adDataZoneId);
          if (!targetInViewport) {
            return;
          }

          // console.log(
          //   '%cZONE_placeholder' +
          //     adDataZoneId +
          //     ' sentviewableURL:' +
          //     viewableLink,
          //   'color: orange'
          // );

          sevioads.loadServerUrl({
            serverUrl: viewableLink,
            cFunction: function () {
              calledViewable.push(viewableLink);
            },
            serverMethod: 'GET',
            cType: 'text/html',
            eventTrackerType: 2,
            eventTrackers: eventTrackers
          });
        }
      }
    };

    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          var isIntersecting =
            entry.isIntersecting && entry.intersectionRatio >= 0.5;
          if (sevioDebugActive) {
            console.log('Entries:', entries);
            console.log('OBSERVER initialized');
          }

          if (isIntersecting) {
            setTimeout(function () {
              if (isIntersecting) {
                if (!document.hidden) {
                  var computedStyle = window.getComputedStyle(entry.target);
                  var visibilityStyle =
                    computedStyle.getPropertyValue('visibility');

                  if (visibilityStyle === 'visible') {
                    if (sevioDebugActive) {
                      console.log(
                        'Ad in viewport',
                        entry.target.getAttribute('data-zone')
                      );
                      console.log(
                        'Intersection ratio:',
                        entry.intersectionRatio
                      );
                    }

                    sevioads.adInViewport(entry.target);
                  }
                }
              }
            }, 1000);
          } else {
            var adDataZone = entry.target.getAttribute('data-zone');

            setTimeout(function () {
              if (sevioDebugActive) {
                console.log(
                  'Intersection ratio OUTofViewport:',
                  entry.intersectionRatio
                );
                console.log('Ad not in viewport:', adDataZone);
              }
              zoneStatus[entry.target.getAttribute('id')] = 'stopped';
            }, 1000);
          }
        });
      },
      { threshold: 0.5 }
    );

    var loadBannerAd = function (args) {
      this.construct(args);
    };

    loadBannerAd.prototype.construct = function (props) {
      this.props = props;
    };

    if (typeof window.sevioads !== 'undefined') {
      for (var i = 0; i < window.sevioads.length; i++) {
        sevioads.push(window.sevioads[i]);
      }
    }

    function handleVisibilityChange() {
      if (document.hidden) {
        sevioads.onHideDocument(); // stop all statuses when document looses visibility
      } else {
        sevioads.onDocumentVisible();
      }
    }
    document.addEventListener('visibilitychange', handleVisibilityChange);

    function handleStyleChanges(mutationsList) {
      mutationsList.forEach(function (mutation) {
        var sevioadsElements = mutation.target.querySelectorAll('.sevioads');

        sevioadsElements.forEach(function (sevioadsElement) {
          var computedStyle = window.getComputedStyle(sevioadsElement);
          var visibilityStyle = computedStyle.getPropertyValue('visibility');
          var displayStyle = computedStyle.getPropertyValue('display');
          var opacityValue = computedStyle.getPropertyValue('opacity');

          if (
            visibilityStyle === 'hidden' &&
            displayStyle === 'block' &&
            parseInt(opacityValue) === 1
          ) {
            if (sevioDebugActive) {
              console.log(
                'Child Element with class "sevioads" is visible and has changed display:',
                sevioadsElement
              );
            }

            if (
              !treeChangeDetected &&
              initialPath === window.location.pathname
            ) {
              sevioads.adInViewport(sevioadsElement);
              treeChangeDetected = true;
            }
          } else {
            var outOfVpId = sevioadsElement.getAttribute('id');
            zoneStatus[outOfVpId] = 'stopped';
          }
        });
      });
    }

    var rootElement = document.documentElement;
    var mutationObserver = new MutationObserver(handleStyleChanges);
    mutationObserver.observe(rootElement, {
      attributes: true,
      subtree: true,
      attributeFilter: ['style', 'class']
    });

    return sevioads;
  })();

  var waitForTcfApiCalled = false; // Flag to track if waitForTcfApi has been called
  function waitForTcfApi(callback, interval, maxAttempts) {
    // If waitForTcfApi has been called before, return early
    if (waitForTcfApiCalled) {
      console.log('waitForTcfApi already called. Skipping.');
      return;
    }

    // Use default values for interval and maxAttempts if not provided
    interval = interval || 100;
    maxAttempts = maxAttempts || 10;

    var attempts = 0;

    function checkTcfApi() {
      attempts++;

      if (typeof window.__tcfapi !== 'undefined') {
        callback();
        waitForTcfApiCalled = true; // Set the flag to true after calling waitForTcfApi
      } else if (attempts < maxAttempts) {
        setTimeout(checkTcfApi, interval);
      } else {
        console.log('sevioads: Max attempts reached. __tcfapi not found.');
        postCmpAction(cmpData);
        waitForTcfApiCalled = true; // Set the flag to true after reaching max attempts
      }
    }

    checkTcfApi();
  }

  if (typeof window.loaderJsExecuted === 'undefined') {
    window.loaderJsExecuted = true;

    var cnt = 0;

    var refreshMain = function () {
      var schedRefresh = [];
      // debug status
      // if (sevioDebugActive) {
      //   console.log("---- zoneStatus ----");
      //   for (var key in zoneStatus) {
      //     if (zoneStatus.hasOwnProperty(key)) {
      //       console.log("zone " + key + ": " + zoneStatus[key]);
      //     }
      //   }
      // }

      if (isWindowFocused === false || isCookieSynced === false) {
        clearInterval(refreshInterval);
        refreshInterval = null;
      }
      // debug for seconds for each zone
      if (sevioDebugActive) {
        // console.log('Is window focused:', isWindowFocused);
        console.log('---- secondsZone: ----');
        console.table(secondsZone);

        // get refresh rate for each zone
        var refreshToZone = {};
        var counterToZone = {};
        var initialStartInfo = {};
        var counterIntervalToZone = {};
        var refreshMaxTimesToZone = {};

        var entriesSecZone = Object.keys(secondsZone);
        entriesSecZone.forEach(function (key) {
          var firstPartZone = key.split('_')[0];
          var refreshRateZone = getZoneRefreshParam(
            firstPartZone,
            'refreshRate'
          );
          var parsedRefreshMaxTimes = getZoneRefreshParam(
            firstPartZone,
            'refreshMaxTimes'
          );
          refreshMaxTimesToZone[key] = parsedRefreshMaxTimes;

          var parsedCounterIntervalZone = getZoneRefreshParam(
            firstPartZone,
            'refreshCounterInterval'
          );
          counterIntervalToZone[key] = parsedCounterIntervalZone;

          counterToZone[key] = readLocalStorageKey({
            key: 'sevioads',
            nestedKey: 'counterZone_' + key
          });

          initialStartInfo[key] = readLocalStorageKey({
            key: 'sevioads',
            nestedKey: 'initialStartTime_' + key
          });

          // this is sent further as event to SevioDebugPanel
          refreshToZone[key] = refreshRateZone;
        });

        const eventDebugZone = new CustomEvent('sevioDebugForward', {
          detail: {
            secondsZone: secondsZone,
            refreshToZone: refreshToZone,
            counterToZone: counterToZone,
            zoneStatus: zoneStatus,
            initialStartInfo: initialStartInfo,
            counterIntervalToZone: counterIntervalToZone,
            refreshMaxTimesToZone: refreshMaxTimesToZone
          }
        });

        window.dispatchEvent(eventDebugZone);
      }

      // get all elements from the DOM that have sevioads class
      var refreshElements = document.querySelectorAll('.sevioads');

      // populate with zeros on first tick
      for (var i = 0; i < refreshElements.length; i++) {
        var idKey = refreshElements[i].getAttribute('id');
        if (idKey && secondsZone[idKey] === undefined) {
          secondsZone[idKey] = 0;
          // Also if there aren't yet any local storage entries for the counter set them to zeros
          var existingCounter = readLocalStorageKey({
            key: 'sevioads',
            nestedKey: 'counterZone_' + idKey
          });
          if (
            typeof existingCounter === 'undefined' ||
            existingCounter === 'null'
          ) {
            updateLocalStorageKey({
              key: 'sevioads',
              nestedKey: 'counterZone_' + idKey,
              value: 0
            });
          }
        }
      }

      for (var i = 0; i < refreshElements.length; i++) {
        // check if the ad is in the VP
        if (
          typeof window.sevioads !== 'undefined' &&
          typeof sevioads.isAdInViewport === 'function' &&
          sevioads.isAdInViewport(refreshElements[i].getAttribute('id'))
        ) {
          var idRefreshEl = refreshElements[i].getAttribute('id');
          var lsZoneData = readLocalStorageKey({
            key: 'sevioads',
            nestedKey: 'adZone_' + refreshElements[i].getAttribute('id')
          });
          if (lsZoneData) {
            var refreshRate = getZoneRefreshParam(
              lsZoneData.zone,
              'refreshRate'
            );
            var refreshMaxTimes = getZoneRefreshParam(
              lsZoneData.zone,
              'refreshMaxTimes'
            );
            var refreshCounterInterval = getZoneRefreshParam(
              lsZoneData.zone,
              'refreshCounterInterval'
            );

            var timeStampZn = parseInt(
              readLocalStorageKey({
                key: 'sevioads',
                nestedKey: 'initialStartTime_' + idRefreshEl
              })
            );
            var intervalDiff = (Date.now() - timeStampZn) / 1000;

            if (intervalDiff >= refreshCounterInterval) {
              updateLocalStorageKey({
                key: 'sevioads',
                nestedKey: 'counterZone_' + idRefreshEl,
                value: 0
              });
              updateLocalStorageKey({
                key: 'sevioads',
                nestedKey: 'initialStartTime_' + idRefreshEl,
                value: Date.now()
              });
            }

            // increase couter in secondsZone object for each id
            if (secondsZone[idRefreshEl] === refreshRate) {
              // increase the counter in local storage
              var lastCounter = readLocalStorageKey({
                key: 'sevioads',
                nestedKey: 'counterZone_' + idRefreshEl
              });

              var isFoundDNR = doNotRefresh.indexOf(lsZoneData.zone) !== -1;

              if (!isFoundDNR) {
                var newCounter = lastCounter + 1;
              } else {
                var newCounter = lastCounter;
              }

              if (newCounter > refreshMaxTimes) {
                newCounter = refreshMaxTimes;
              } else {
                schedRefresh.push(idRefreshEl);
              }
              // when the counter exceeds the refreshCounterInterval we reset - the counter
              if (
                intervalDiff >= refreshCounterInterval &&
                newCounter >= refreshMaxTimes
              ) {
                newCounter = 0;
                updateLocalStorageKey({
                  key: 'sevioads',
                  nestedKey: 'initialStartTime_' + idRefreshEl,
                  value: Date.now()
                });
              }

              // end reseting - the counter
              updateLocalStorageKey({
                key: 'sevioads',
                nestedKey: 'counterZone_' + idRefreshEl,
                value: newCounter
              });
              secondsZone[idRefreshEl] = 0;
            } else {
              secondsZone[idRefreshEl]++;
            }

            // console.log("RefreshRate:", refreshRate);
            // console.log('refreshMaxTimes:', refreshMaxTimes);
            // console.log('refreshCounterInterval:', refreshCounterInterval);

            // get refreshRate - number of sec after a refresh is made
            // get refreshMaxTimes value for the adID
            // get refreshCounterInterval - which is the interval for refresh cycle reinitialization
            // console.log("El:", refreshElements[i].getAttribute("id"));
          }
        }
      }

      hasWallet = detectWalletsPresence();
      // Executing the refresh - prepare refresh data
      if (
        typeof sevioads.prepareRefreshRequest !== 'undefined' &&
        typeof sevioads.prepareRefreshRequest === 'function'
      )
        sevioads.prepareRefreshRequest(schedRefresh);

      schedRefresh = []; // reseting scheduled refresh items
    };
    var refreshInterval = setInterval(refreshMain, 1000);

    function handleDocVisibility() {
      if (document.hidden) {
        clearInterval(refreshInterval);
        refreshInterval = null;
      } else {
        if (!refreshInterval) {
          refreshInterval = setInterval(refreshMain, 1000);
        }
      }
    }
    document.addEventListener('visibilitychange', handleDocVisibility);
  }

  function handleBeforeUnload() {
    localStorage.removeItem('refreshTB');
    localStorage.removeItem('refreshStoreTB');

    window.removeEventListener('beforeunload', handleBeforeUnload);
  }

  window.addEventListener('beforeunload', function (event) {
    setTimeout(handleBeforeUnload, 0);
  });

  // Uncomment below code to reintroduce the counter stop when the window looses the focus
  // window.addEventListener('blur', () => {
  //   isWindowFocused = false;
  //   clearInterval(refreshInterval);
  //   refreshInterval = null;
  //   if (sevioDebugActive) {
  //     console.log('Is window focused:', isWindowFocused);
  //   }
  // });

  window.addEventListener('focus', () => {
    isWindowFocused = true;
    if (!refreshInterval) {
      refreshInterval = setInterval(refreshMain, 1000);
    }
  });

  window.addEventListener('load', function () {
    for (var i = 0; i < localStorage.length; i++) {
      var key = localStorage.key(i);
      if (key.indexOf('remainingTime_') === 0) {
        localStorage.removeItem(key);
      }
    }
  });
})();
