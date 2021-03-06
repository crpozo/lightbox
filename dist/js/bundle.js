"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*! For license information please see bundle.js.LICENSE.txt */
(function () {
  var t = {
    169: function _(t, e, o) {
      "use strict";

      o.r(e), o.d(e, {
        Alert: function Alert() {
          return ye;
        },
        Button: function Button() {
          return Ee;
        },
        Carousel: function Carousel() {
          return qe;
        },
        Collapse: function Collapse() {
          return Ge;
        },
        Dropdown: function Dropdown() {
          return Eo;
        },
        Modal: function Modal() {
          return Uo;
        },
        Popover: function Popover() {
          return ur;
        },
        ScrollSpy: function ScrollSpy() {
          return _r;
        },
        Tab: function Tab() {
          return Cr;
        },
        Toast: function Toast() {
          return Hr;
        },
        Tooltip: function Tooltip() {
          return dr;
        }
      });
      var r = {};
      o.r(r), o.d(r, {
        afterMain: function afterMain() {
          return _;
        },
        afterRead: function afterRead() {
          return w;
        },
        afterWrite: function afterWrite() {
          return A;
        },
        applyStyles: function applyStyles() {
          return D;
        },
        arrow: function arrow() {
          return $;
        },
        auto: function auto() {
          return d;
        },
        basePlacements: function basePlacements() {
          return s;
        },
        beforeMain: function beforeMain() {
          return y;
        },
        beforeRead: function beforeRead() {
          return x;
        },
        beforeWrite: function beforeWrite() {
          return E;
        },
        bottom: function bottom() {
          return i;
        },
        clippingParents: function clippingParents() {
          return p;
        },
        computeStyles: function computeStyles() {
          return G;
        },
        createPopper: function createPopper() {
          return Ct;
        },
        createPopperBase: function createPopperBase() {
          return Lt;
        },
        createPopperLite: function createPopperLite() {
          return Ot;
        },
        detectOverflow: function detectOverflow() {
          return bt;
        },
        end: function end() {
          return c;
        },
        eventListeners: function eventListeners() {
          return et;
        },
        flip: function flip() {
          return ht;
        },
        hide: function hide() {
          return wt;
        },
        left: function left() {
          return l;
        },
        main: function main() {
          return k;
        },
        modifierPhases: function modifierPhases() {
          return z;
        },
        offset: function offset() {
          return yt;
        },
        placements: function placements() {
          return h;
        },
        popper: function popper() {
          return f;
        },
        popperGenerator: function popperGenerator() {
          return jt;
        },
        popperOffsets: function popperOffsets() {
          return kt;
        },
        preventOverflow: function preventOverflow() {
          return _t;
        },
        read: function read() {
          return v;
        },
        reference: function reference() {
          return u;
        },
        right: function right() {
          return a;
        },
        start: function start() {
          return m;
        },
        top: function top() {
          return n;
        },
        variationPlacements: function variationPlacements() {
          return b;
        },
        viewport: function viewport() {
          return g;
        },
        write: function write() {
          return T;
        }
      });
      var n = "top",
          i = "bottom",
          a = "right",
          l = "left",
          d = "auto",
          s = [n, i, a, l],
          m = "start",
          c = "end",
          p = "clippingParents",
          g = "viewport",
          f = "popper",
          u = "reference",
          b = s.reduce(function (t, e) {
        return t.concat([e + "-" + m, e + "-" + c]);
      }, []),
          h = [].concat(s, [d]).reduce(function (t, e) {
        return t.concat([e, e + "-" + m, e + "-" + c]);
      }, []),
          x = "beforeRead",
          v = "read",
          w = "afterRead",
          y = "beforeMain",
          k = "main",
          _ = "afterMain",
          E = "beforeWrite",
          T = "write",
          A = "afterWrite",
          z = [x, v, w, y, k, _, E, T, A];

      function j(t) {
        return t ? (t.nodeName || "").toLowerCase() : null;
      }

      function L(t) {
        if ("[object Window]" !== t.toString()) {
          var e = t.ownerDocument;
          return e && e.defaultView || window;
        }

        return t;
      }

      function C(t) {
        return t instanceof L(t).Element || t instanceof Element;
      }

      function O(t) {
        return t instanceof L(t).HTMLElement || t instanceof HTMLElement;
      }

      function S(t) {
        return "undefined" != typeof ShadowRoot && (t instanceof L(t).ShadowRoot || t instanceof ShadowRoot);
      }

      var D = {
        name: "applyStyles",
        enabled: !0,
        phase: "write",
        fn: function fn(t) {
          var e = t.state;
          Object.keys(e.elements).forEach(function (t) {
            var o = e.styles[t] || {},
                r = e.attributes[t] || {},
                n = e.elements[t];
            O(n) && j(n) && (Object.assign(n.style, o), Object.keys(r).forEach(function (t) {
              var e = r[t];
              !1 === e ? n.removeAttribute(t) : n.setAttribute(t, !0 === e ? "" : e);
            }));
          });
        },
        effect: function effect(t) {
          var e = t.state,
              o = {
            popper: {
              position: e.options.strategy,
              left: "0",
              top: "0",
              margin: "0"
            },
            arrow: {
              position: "absolute"
            },
            reference: {}
          };
          return Object.assign(e.elements.popper.style, o.popper), e.styles = o, e.elements.arrow && Object.assign(e.elements.arrow.style, o.arrow), function () {
            Object.keys(e.elements).forEach(function (t) {
              var r = e.elements[t],
                  n = e.attributes[t] || {},
                  i = Object.keys(e.styles.hasOwnProperty(t) ? e.styles[t] : o[t]).reduce(function (t, e) {
                return t[e] = "", t;
              }, {});
              O(r) && j(r) && (Object.assign(r.style, i), Object.keys(n).forEach(function (t) {
                r.removeAttribute(t);
              }));
            });
          };
        },
        requires: ["computeStyles"]
      };

      function N(t) {
        return t.split("-")[0];
      }

      function M(t) {
        return {
          x: t.offsetLeft,
          y: t.offsetTop,
          width: t.offsetWidth,
          height: t.offsetHeight
        };
      }

      function P(t, e) {
        var o = e.getRootNode && e.getRootNode();
        if (t.contains(e)) return !0;

        if (o && S(o)) {
          var r = e;

          do {
            if (r && t.isSameNode(r)) return !0;
            r = r.parentNode || r.host;
          } while (r);
        }

        return !1;
      }

      function I(t) {
        return L(t).getComputedStyle(t);
      }

      function B(t) {
        return ["table", "td", "th"].indexOf(j(t)) >= 0;
      }

      function H(t) {
        return ((C(t) ? t.ownerDocument : t.document) || window.document).documentElement;
      }

      function R(t) {
        return "html" === j(t) ? t : t.assignedSlot || t.parentNode || (S(t) ? t.host : null) || H(t);
      }

      function W(t) {
        return O(t) && "fixed" !== I(t).position ? t.offsetParent : null;
      }

      function q(t) {
        for (var e = L(t), o = W(t); o && B(o) && "static" === I(o).position;) {
          o = W(o);
        }

        return o && ("html" === j(o) || "body" === j(o) && "static" === I(o).position) ? e : o || function (t) {
          for (var e = navigator.userAgent.toLowerCase().includes("firefox"), o = R(t); O(o) && ["html", "body"].indexOf(j(o)) < 0;) {
            var r = I(o);
            if ("none" !== r.transform || "none" !== r.perspective || "paint" === r.contain || ["transform", "perspective"].includes(r.willChange) || e && "filter" === r.willChange || e && r.filter && "none" !== r.filter) return o;
            o = o.parentNode;
          }

          return null;
        }(t) || e;
      }

      function U(t) {
        return ["top", "bottom"].indexOf(t) >= 0 ? "x" : "y";
      }

      var K = Math.max,
          F = Math.min,
          Y = Math.round;

      function X(t, e, o) {
        return K(t, F(e, o));
      }

      function V(t) {
        return Object.assign({}, {
          top: 0,
          right: 0,
          bottom: 0,
          left: 0
        }, t);
      }

      function Q(t, e) {
        return e.reduce(function (e, o) {
          return e[o] = t, e;
        }, {});
      }

      var $ = {
        name: "arrow",
        enabled: !0,
        phase: "main",
        fn: function fn(t) {
          var e,
              o = t.state,
              r = t.name,
              d = t.options,
              m = o.elements.arrow,
              c = o.modifiersData.popperOffsets,
              p = N(o.placement),
              g = U(p),
              f = [l, a].indexOf(p) >= 0 ? "height" : "width";

          if (m && c) {
            var u = function (t, e) {
              return V("number" != typeof (t = "function" == typeof t ? t(Object.assign({}, e.rects, {
                placement: e.placement
              })) : t) ? t : Q(t, s));
            }(d.padding, o),
                b = M(m),
                h = "y" === g ? n : l,
                x = "y" === g ? i : a,
                v = o.rects.reference[f] + o.rects.reference[g] - c[g] - o.rects.popper[f],
                w = c[g] - o.rects.reference[g],
                y = q(m),
                k = y ? "y" === g ? y.clientHeight || 0 : y.clientWidth || 0 : 0,
                _ = v / 2 - w / 2,
                E = u[h],
                T = k - b[f] - u[x],
                A = k / 2 - b[f] / 2 + _,
                z = X(E, A, T),
                j = g;

            o.modifiersData[r] = ((e = {})[j] = z, e.centerOffset = z - A, e);
          }
        },
        effect: function effect(t) {
          var e = t.state,
              o = t.options.element,
              r = void 0 === o ? "[data-popper-arrow]" : o;
          null != r && ("string" != typeof r || (r = e.elements.popper.querySelector(r))) && P(e.elements.popper, r) && (e.elements.arrow = r);
        },
        requires: ["popperOffsets"],
        requiresIfExists: ["preventOverflow"]
      };
      var Z = {
        top: "auto",
        right: "auto",
        bottom: "auto",
        left: "auto"
      };

      function J(t) {
        var e,
            o = t.popper,
            r = t.popperRect,
            d = t.placement,
            s = t.offsets,
            m = t.position,
            c = t.gpuAcceleration,
            p = t.adaptive,
            g = t.roundOffsets,
            f = !0 === g ? function (t) {
          var e = t.x,
              o = t.y,
              r = window.devicePixelRatio || 1;
          return {
            x: Y(Y(e * r) / r) || 0,
            y: Y(Y(o * r) / r) || 0
          };
        }(s) : "function" == typeof g ? g(s) : s,
            u = f.x,
            b = void 0 === u ? 0 : u,
            h = f.y,
            x = void 0 === h ? 0 : h,
            v = s.hasOwnProperty("x"),
            w = s.hasOwnProperty("y"),
            y = l,
            k = n,
            _ = window;

        if (p) {
          var E = q(o),
              T = "clientHeight",
              A = "clientWidth";
          E === L(o) && "static" !== I(E = H(o)).position && (T = "scrollHeight", A = "scrollWidth"), d === n && (k = i, x -= E[T] - r.height, x *= c ? 1 : -1), d === l && (y = a, b -= E[A] - r.width, b *= c ? 1 : -1);
        }

        var z,
            j = Object.assign({
          position: m
        }, p && Z);
        return c ? Object.assign({}, j, ((z = {})[k] = w ? "0" : "", z[y] = v ? "0" : "", z.transform = (_.devicePixelRatio || 1) < 2 ? "translate(" + b + "px, " + x + "px)" : "translate3d(" + b + "px, " + x + "px, 0)", z)) : Object.assign({}, j, ((e = {})[k] = w ? x + "px" : "", e[y] = v ? b + "px" : "", e.transform = "", e));
      }

      var G = {
        name: "computeStyles",
        enabled: !0,
        phase: "beforeWrite",
        fn: function fn(t) {
          var e = t.state,
              o = t.options,
              r = o.gpuAcceleration,
              n = void 0 === r || r,
              i = o.adaptive,
              a = void 0 === i || i,
              l = o.roundOffsets,
              d = void 0 === l || l,
              s = {
            placement: N(e.placement),
            popper: e.elements.popper,
            popperRect: e.rects.popper,
            gpuAcceleration: n
          };
          null != e.modifiersData.popperOffsets && (e.styles.popper = Object.assign({}, e.styles.popper, J(Object.assign({}, s, {
            offsets: e.modifiersData.popperOffsets,
            position: e.options.strategy,
            adaptive: a,
            roundOffsets: d
          })))), null != e.modifiersData.arrow && (e.styles.arrow = Object.assign({}, e.styles.arrow, J(Object.assign({}, s, {
            offsets: e.modifiersData.arrow,
            position: "absolute",
            adaptive: !1,
            roundOffsets: d
          })))), e.attributes.popper = Object.assign({}, e.attributes.popper, {
            "data-popper-placement": e.placement
          });
        },
        data: {}
      };
      var tt = {
        passive: !0
      };
      var et = {
        name: "eventListeners",
        enabled: !0,
        phase: "write",
        fn: function fn() {},
        effect: function effect(t) {
          var e = t.state,
              o = t.instance,
              r = t.options,
              n = r.scroll,
              i = void 0 === n || n,
              a = r.resize,
              l = void 0 === a || a,
              d = L(e.elements.popper),
              s = [].concat(e.scrollParents.reference, e.scrollParents.popper);
          return i && s.forEach(function (t) {
            t.addEventListener("scroll", o.update, tt);
          }), l && d.addEventListener("resize", o.update, tt), function () {
            i && s.forEach(function (t) {
              t.removeEventListener("scroll", o.update, tt);
            }), l && d.removeEventListener("resize", o.update, tt);
          };
        },
        data: {}
      };
      var ot = {
        left: "right",
        right: "left",
        bottom: "top",
        top: "bottom"
      };

      function rt(t) {
        return t.replace(/left|right|bottom|top/g, function (t) {
          return ot[t];
        });
      }

      var nt = {
        start: "end",
        end: "start"
      };

      function it(t) {
        return t.replace(/start|end/g, function (t) {
          return nt[t];
        });
      }

      function at(t) {
        var e = t.getBoundingClientRect();
        return {
          width: e.width,
          height: e.height,
          top: e.top,
          right: e.right,
          bottom: e.bottom,
          left: e.left,
          x: e.left,
          y: e.top
        };
      }

      function lt(t) {
        var e = L(t);
        return {
          scrollLeft: e.pageXOffset,
          scrollTop: e.pageYOffset
        };
      }

      function dt(t) {
        return at(H(t)).left + lt(t).scrollLeft;
      }

      function st(t) {
        var e = I(t),
            o = e.overflow,
            r = e.overflowX,
            n = e.overflowY;
        return /auto|scroll|overlay|hidden/.test(o + n + r);
      }

      function mt(t) {
        return ["html", "body", "#document"].indexOf(j(t)) >= 0 ? t.ownerDocument.body : O(t) && st(t) ? t : mt(R(t));
      }

      function ct(t, e) {
        var o;
        void 0 === e && (e = []);
        var r = mt(t),
            n = r === (null == (o = t.ownerDocument) ? void 0 : o.body),
            i = L(r),
            a = n ? [i].concat(i.visualViewport || [], st(r) ? r : []) : r,
            l = e.concat(a);
        return n ? l : l.concat(ct(R(a)));
      }

      function pt(t) {
        return Object.assign({}, t, {
          left: t.x,
          top: t.y,
          right: t.x + t.width,
          bottom: t.y + t.height
        });
      }

      function gt(t, e) {
        return e === g ? pt(function (t) {
          var e = L(t),
              o = H(t),
              r = e.visualViewport,
              n = o.clientWidth,
              i = o.clientHeight,
              a = 0,
              l = 0;
          return r && (n = r.width, i = r.height, /^((?!chrome|android).)*safari/i.test(navigator.userAgent) || (a = r.offsetLeft, l = r.offsetTop)), {
            width: n,
            height: i,
            x: a + dt(t),
            y: l
          };
        }(t)) : O(e) ? function (t) {
          var e = at(t);
          return e.top = e.top + t.clientTop, e.left = e.left + t.clientLeft, e.bottom = e.top + t.clientHeight, e.right = e.left + t.clientWidth, e.width = t.clientWidth, e.height = t.clientHeight, e.x = e.left, e.y = e.top, e;
        }(e) : pt(function (t) {
          var e,
              o = H(t),
              r = lt(t),
              n = null == (e = t.ownerDocument) ? void 0 : e.body,
              i = K(o.scrollWidth, o.clientWidth, n ? n.scrollWidth : 0, n ? n.clientWidth : 0),
              a = K(o.scrollHeight, o.clientHeight, n ? n.scrollHeight : 0, n ? n.clientHeight : 0),
              l = -r.scrollLeft + dt(t),
              d = -r.scrollTop;
          return "rtl" === I(n || o).direction && (l += K(o.clientWidth, n ? n.clientWidth : 0) - i), {
            width: i,
            height: a,
            x: l,
            y: d
          };
        }(H(t)));
      }

      function ft(t) {
        return t.split("-")[1];
      }

      function ut(t) {
        var e,
            o = t.reference,
            r = t.element,
            d = t.placement,
            s = d ? N(d) : null,
            p = d ? ft(d) : null,
            g = o.x + o.width / 2 - r.width / 2,
            f = o.y + o.height / 2 - r.height / 2;

        switch (s) {
          case n:
            e = {
              x: g,
              y: o.y - r.height
            };
            break;

          case i:
            e = {
              x: g,
              y: o.y + o.height
            };
            break;

          case a:
            e = {
              x: o.x + o.width,
              y: f
            };
            break;

          case l:
            e = {
              x: o.x - r.width,
              y: f
            };
            break;

          default:
            e = {
              x: o.x,
              y: o.y
            };
        }

        var u = s ? U(s) : null;

        if (null != u) {
          var b = "y" === u ? "height" : "width";

          switch (p) {
            case m:
              e[u] = e[u] - (o[b] / 2 - r[b] / 2);
              break;

            case c:
              e[u] = e[u] + (o[b] / 2 - r[b] / 2);
          }
        }

        return e;
      }

      function bt(t, e) {
        void 0 === e && (e = {});

        var o = e,
            r = o.placement,
            l = void 0 === r ? t.placement : r,
            d = o.boundary,
            m = void 0 === d ? p : d,
            c = o.rootBoundary,
            b = void 0 === c ? g : c,
            h = o.elementContext,
            x = void 0 === h ? f : h,
            v = o.altBoundary,
            w = void 0 !== v && v,
            y = o.padding,
            k = void 0 === y ? 0 : y,
            _ = V("number" != typeof k ? k : Q(k, s)),
            E = x === f ? u : f,
            T = t.elements.reference,
            A = t.rects.popper,
            z = t.elements[w ? E : x],
            L = function (t, e, o) {
          var r = "clippingParents" === e ? function (t) {
            var e = ct(R(t)),
                o = ["absolute", "fixed"].indexOf(I(t).position) >= 0 && O(t) ? q(t) : t;
            return C(o) ? e.filter(function (t) {
              return C(t) && P(t, o) && "body" !== j(t);
            }) : [];
          }(t) : [].concat(e),
              n = [].concat(r, [o]),
              i = n[0],
              a = n.reduce(function (e, o) {
            var r = gt(t, o);
            return e.top = K(r.top, e.top), e.right = F(r.right, e.right), e.bottom = F(r.bottom, e.bottom), e.left = K(r.left, e.left), e;
          }, gt(t, i));
          return a.width = a.right - a.left, a.height = a.bottom - a.top, a.x = a.left, a.y = a.top, a;
        }(C(z) ? z : z.contextElement || H(t.elements.popper), m, b),
            S = at(T),
            D = ut({
          reference: S,
          element: A,
          strategy: "absolute",
          placement: l
        }),
            N = pt(Object.assign({}, A, D)),
            M = x === f ? N : S,
            B = {
          top: L.top - M.top + _.top,
          bottom: M.bottom - L.bottom + _.bottom,
          left: L.left - M.left + _.left,
          right: M.right - L.right + _.right
        },
            W = t.modifiersData.offset;

        if (x === f && W) {
          var U = W[l];
          Object.keys(B).forEach(function (t) {
            var e = [a, i].indexOf(t) >= 0 ? 1 : -1,
                o = [n, i].indexOf(t) >= 0 ? "y" : "x";
            B[t] += U[o] * e;
          });
        }

        return B;
      }

      var ht = {
        name: "flip",
        enabled: !0,
        phase: "main",
        fn: function fn(t) {
          var e = t.state,
              o = t.options,
              r = t.name;

          if (!e.modifiersData[r]._skip) {
            for (var c = o.mainAxis, p = void 0 === c || c, g = o.altAxis, f = void 0 === g || g, u = o.fallbackPlacements, x = o.padding, v = o.boundary, w = o.rootBoundary, y = o.altBoundary, k = o.flipVariations, _ = void 0 === k || k, E = o.allowedAutoPlacements, T = e.options.placement, A = N(T), z = u || (A !== T && _ ? function (t) {
              if (N(t) === d) return [];
              var e = rt(t);
              return [it(t), e, it(e)];
            }(T) : [rt(T)]), j = [T].concat(z).reduce(function (t, o) {
              return t.concat(N(o) === d ? function (t, e) {
                void 0 === e && (e = {});
                var o = e,
                    r = o.placement,
                    n = o.boundary,
                    i = o.rootBoundary,
                    a = o.padding,
                    l = o.flipVariations,
                    d = o.allowedAutoPlacements,
                    m = void 0 === d ? h : d,
                    c = ft(r),
                    p = c ? l ? b : b.filter(function (t) {
                  return ft(t) === c;
                }) : s,
                    g = p.filter(function (t) {
                  return m.indexOf(t) >= 0;
                });
                0 === g.length && (g = p);
                var f = g.reduce(function (e, o) {
                  return e[o] = bt(t, {
                    placement: o,
                    boundary: n,
                    rootBoundary: i,
                    padding: a
                  })[N(o)], e;
                }, {});
                return Object.keys(f).sort(function (t, e) {
                  return f[t] - f[e];
                });
              }(e, {
                placement: o,
                boundary: v,
                rootBoundary: w,
                padding: x,
                flipVariations: _,
                allowedAutoPlacements: E
              }) : o);
            }, []), L = e.rects.reference, C = e.rects.popper, O = new Map(), S = !0, D = j[0], M = 0; M < j.length; M++) {
              var P = j[M],
                  I = N(P),
                  B = ft(P) === m,
                  H = [n, i].indexOf(I) >= 0,
                  R = H ? "width" : "height",
                  W = bt(e, {
                placement: P,
                boundary: v,
                rootBoundary: w,
                altBoundary: y,
                padding: x
              }),
                  q = H ? B ? a : l : B ? i : n;
              L[R] > C[R] && (q = rt(q));
              var U = rt(q),
                  K = [];

              if (p && K.push(W[I] <= 0), f && K.push(W[q] <= 0, W[U] <= 0), K.every(function (t) {
                return t;
              })) {
                D = P, S = !1;
                break;
              }

              O.set(P, K);
            }

            if (S) for (var F = function F(t) {
              var e = j.find(function (e) {
                var o = O.get(e);
                if (o) return o.slice(0, t).every(function (t) {
                  return t;
                });
              });
              if (e) return D = e, "break";
            }, Y = _ ? 3 : 1; Y > 0 && "break" !== F(Y); Y--) {
              ;
            }
            e.placement !== D && (e.modifiersData[r]._skip = !0, e.placement = D, e.reset = !0);
          }
        },
        requiresIfExists: ["offset"],
        data: {
          _skip: !1
        }
      };

      function xt(t, e, o) {
        return void 0 === o && (o = {
          x: 0,
          y: 0
        }), {
          top: t.top - e.height - o.y,
          right: t.right - e.width + o.x,
          bottom: t.bottom - e.height + o.y,
          left: t.left - e.width - o.x
        };
      }

      function vt(t) {
        return [n, a, i, l].some(function (e) {
          return t[e] >= 0;
        });
      }

      var wt = {
        name: "hide",
        enabled: !0,
        phase: "main",
        requiresIfExists: ["preventOverflow"],
        fn: function fn(t) {
          var e = t.state,
              o = t.name,
              r = e.rects.reference,
              n = e.rects.popper,
              i = e.modifiersData.preventOverflow,
              a = bt(e, {
            elementContext: "reference"
          }),
              l = bt(e, {
            altBoundary: !0
          }),
              d = xt(a, r),
              s = xt(l, n, i),
              m = vt(d),
              c = vt(s);
          e.modifiersData[o] = {
            referenceClippingOffsets: d,
            popperEscapeOffsets: s,
            isReferenceHidden: m,
            hasPopperEscaped: c
          }, e.attributes.popper = Object.assign({}, e.attributes.popper, {
            "data-popper-reference-hidden": m,
            "data-popper-escaped": c
          });
        }
      },
          yt = {
        name: "offset",
        enabled: !0,
        phase: "main",
        requires: ["popperOffsets"],
        fn: function fn(t) {
          var e = t.state,
              o = t.options,
              r = t.name,
              i = o.offset,
              d = void 0 === i ? [0, 0] : i,
              s = h.reduce(function (t, o) {
            return t[o] = function (t, e, o) {
              var r = N(t),
                  i = [l, n].indexOf(r) >= 0 ? -1 : 1,
                  d = "function" == typeof o ? o(Object.assign({}, e, {
                placement: t
              })) : o,
                  s = d[0],
                  m = d[1];
              return s = s || 0, m = (m || 0) * i, [l, a].indexOf(r) >= 0 ? {
                x: m,
                y: s
              } : {
                x: s,
                y: m
              };
            }(o, e.rects, d), t;
          }, {}),
              m = s[e.placement],
              c = m.x,
              p = m.y;
          null != e.modifiersData.popperOffsets && (e.modifiersData.popperOffsets.x += c, e.modifiersData.popperOffsets.y += p), e.modifiersData[r] = s;
        }
      },
          kt = {
        name: "popperOffsets",
        enabled: !0,
        phase: "read",
        fn: function fn(t) {
          var e = t.state,
              o = t.name;
          e.modifiersData[o] = ut({
            reference: e.rects.reference,
            element: e.rects.popper,
            strategy: "absolute",
            placement: e.placement
          });
        },
        data: {}
      },
          _t = {
        name: "preventOverflow",
        enabled: !0,
        phase: "main",
        fn: function fn(t) {
          var e = t.state,
              o = t.options,
              r = t.name,
              d = o.mainAxis,
              s = void 0 === d || d,
              c = o.altAxis,
              p = void 0 !== c && c,
              g = o.boundary,
              f = o.rootBoundary,
              u = o.altBoundary,
              b = o.padding,
              h = o.tether,
              x = void 0 === h || h,
              v = o.tetherOffset,
              w = void 0 === v ? 0 : v,
              y = bt(e, {
            boundary: g,
            rootBoundary: f,
            padding: b,
            altBoundary: u
          }),
              k = N(e.placement),
              _ = ft(e.placement),
              E = !_,
              T = U(k),
              A = "x" === T ? "y" : "x",
              z = e.modifiersData.popperOffsets,
              j = e.rects.reference,
              L = e.rects.popper,
              C = "function" == typeof w ? w(Object.assign({}, e.rects, {
            placement: e.placement
          })) : w,
              O = {
            x: 0,
            y: 0
          };

          if (z) {
            if (s || p) {
              var S = "y" === T ? n : l,
                  D = "y" === T ? i : a,
                  P = "y" === T ? "height" : "width",
                  I = z[T],
                  B = z[T] + y[S],
                  H = z[T] - y[D],
                  R = x ? -L[P] / 2 : 0,
                  W = _ === m ? j[P] : L[P],
                  Y = _ === m ? -L[P] : -j[P],
                  V = e.elements.arrow,
                  Q = x && V ? M(V) : {
                width: 0,
                height: 0
              },
                  $ = e.modifiersData["arrow#persistent"] ? e.modifiersData["arrow#persistent"].padding : {
                top: 0,
                right: 0,
                bottom: 0,
                left: 0
              },
                  Z = $[S],
                  J = $[D],
                  G = X(0, j[P], Q[P]),
                  tt = E ? j[P] / 2 - R - G - Z - C : W - G - Z - C,
                  et = E ? -j[P] / 2 + R + G + J + C : Y + G + J + C,
                  ot = e.elements.arrow && q(e.elements.arrow),
                  rt = ot ? "y" === T ? ot.clientTop || 0 : ot.clientLeft || 0 : 0,
                  nt = e.modifiersData.offset ? e.modifiersData.offset[e.placement][T] : 0,
                  it = z[T] + tt - nt - rt,
                  at = z[T] + et - nt;

              if (s) {
                var lt = X(x ? F(B, it) : B, I, x ? K(H, at) : H);
                z[T] = lt, O[T] = lt - I;
              }

              if (p) {
                var dt = "x" === T ? n : l,
                    st = "x" === T ? i : a,
                    mt = z[A],
                    ct = mt + y[dt],
                    pt = mt - y[st],
                    gt = X(x ? F(ct, it) : ct, mt, x ? K(pt, at) : pt);
                z[A] = gt, O[A] = gt - mt;
              }
            }

            e.modifiersData[r] = O;
          }
        },
        requiresIfExists: ["offset"]
      };

      function Et(t, e, o) {
        void 0 === o && (o = !1);
        var r,
            n,
            i = H(e),
            a = at(t),
            l = O(e),
            d = {
          scrollLeft: 0,
          scrollTop: 0
        },
            s = {
          x: 0,
          y: 0
        };
        return (l || !l && !o) && (("body" !== j(e) || st(i)) && (d = (r = e) !== L(r) && O(r) ? {
          scrollLeft: (n = r).scrollLeft,
          scrollTop: n.scrollTop
        } : lt(r)), O(e) ? ((s = at(e)).x += e.clientLeft, s.y += e.clientTop) : i && (s.x = dt(i))), {
          x: a.left + d.scrollLeft - s.x,
          y: a.top + d.scrollTop - s.y,
          width: a.width,
          height: a.height
        };
      }

      function Tt(t) {
        var e = new Map(),
            o = new Set(),
            r = [];

        function n(t) {
          o.add(t.name), [].concat(t.requires || [], t.requiresIfExists || []).forEach(function (t) {
            if (!o.has(t)) {
              var r = e.get(t);
              r && n(r);
            }
          }), r.push(t);
        }

        return t.forEach(function (t) {
          e.set(t.name, t);
        }), t.forEach(function (t) {
          o.has(t.name) || n(t);
        }), r;
      }

      var At = {
        placement: "bottom",
        modifiers: [],
        strategy: "absolute"
      };

      function zt() {
        for (var t = arguments.length, e = new Array(t), o = 0; o < t; o++) {
          e[o] = arguments[o];
        }

        return !e.some(function (t) {
          return !(t && "function" == typeof t.getBoundingClientRect);
        });
      }

      function jt(t) {
        void 0 === t && (t = {});
        var e = t,
            o = e.defaultModifiers,
            r = void 0 === o ? [] : o,
            n = e.defaultOptions,
            i = void 0 === n ? At : n;
        return function (t, e, o) {
          void 0 === o && (o = i);
          var n,
              a,
              l = {
            placement: "bottom",
            orderedModifiers: [],
            options: Object.assign({}, At, i),
            modifiersData: {},
            elements: {
              reference: t,
              popper: e
            },
            attributes: {},
            styles: {}
          },
              d = [],
              s = !1,
              m = {
            state: l,
            setOptions: function setOptions(o) {
              c(), l.options = Object.assign({}, i, l.options, o), l.scrollParents = {
                reference: C(t) ? ct(t) : t.contextElement ? ct(t.contextElement) : [],
                popper: ct(e)
              };

              var n,
                  a,
                  s = function (t) {
                var e = Tt(t);
                return z.reduce(function (t, o) {
                  return t.concat(e.filter(function (t) {
                    return t.phase === o;
                  }));
                }, []);
              }((n = [].concat(r, l.options.modifiers), a = n.reduce(function (t, e) {
                var o = t[e.name];
                return t[e.name] = o ? Object.assign({}, o, e, {
                  options: Object.assign({}, o.options, e.options),
                  data: Object.assign({}, o.data, e.data)
                }) : e, t;
              }, {}), Object.keys(a).map(function (t) {
                return a[t];
              })));

              return l.orderedModifiers = s.filter(function (t) {
                return t.enabled;
              }), l.orderedModifiers.forEach(function (t) {
                var e = t.name,
                    o = t.options,
                    r = void 0 === o ? {} : o,
                    n = t.effect;

                if ("function" == typeof n) {
                  var i = n({
                    state: l,
                    name: e,
                    instance: m,
                    options: r
                  });
                  d.push(i || function () {});
                }
              }), m.update();
            },
            forceUpdate: function forceUpdate() {
              if (!s) {
                var t = l.elements,
                    e = t.reference,
                    o = t.popper;

                if (zt(e, o)) {
                  l.rects = {
                    reference: Et(e, q(o), "fixed" === l.options.strategy),
                    popper: M(o)
                  }, l.reset = !1, l.placement = l.options.placement, l.orderedModifiers.forEach(function (t) {
                    return l.modifiersData[t.name] = Object.assign({}, t.data);
                  });

                  for (var r = 0; r < l.orderedModifiers.length; r++) {
                    if (!0 !== l.reset) {
                      var n = l.orderedModifiers[r],
                          i = n.fn,
                          a = n.options,
                          d = void 0 === a ? {} : a,
                          c = n.name;
                      "function" == typeof i && (l = i({
                        state: l,
                        options: d,
                        name: c,
                        instance: m
                      }) || l);
                    } else l.reset = !1, r = -1;
                  }
                }
              }
            },
            update: (n = function n() {
              return new Promise(function (t) {
                m.forceUpdate(), t(l);
              });
            }, function () {
              return a || (a = new Promise(function (t) {
                Promise.resolve().then(function () {
                  a = void 0, t(n());
                });
              })), a;
            }),
            destroy: function destroy() {
              c(), s = !0;
            }
          };
          if (!zt(t, e)) return m;

          function c() {
            d.forEach(function (t) {
              return t();
            }), d = [];
          }

          return m.setOptions(o).then(function (t) {
            !s && o.onFirstUpdate && o.onFirstUpdate(t);
          }), m;
        };
      }

      var Lt = jt(),
          Ct = jt({
        defaultModifiers: [et, kt, G, D, yt, ht, _t, $, wt]
      }),
          Ot = jt({
        defaultModifiers: [et, kt, G, D]
      });

      function St(t, e) {
        for (var o = 0; o < e.length; o++) {
          var r = e[o];
          r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r);
        }
      }

      function Dt(t, e, o) {
        return e && St(t.prototype, e), o && St(t, o), t;
      }

      function Nt() {
        return (Nt = Object.assign || function (t) {
          for (var e = 1; e < arguments.length; e++) {
            var o = arguments[e];

            for (var r in o) {
              Object.prototype.hasOwnProperty.call(o, r) && (t[r] = o[r]);
            }
          }

          return t;
        }).apply(this, arguments);
      }

      function Mt(t, e) {
        t.prototype = Object.create(e.prototype), t.prototype.constructor = t, Pt(t, e);
      }

      function Pt(t, e) {
        return (Pt = Object.setPrototypeOf || function (t, e) {
          return t.__proto__ = e, t;
        })(t, e);
      }

      var It,
          Bt,
          Ht = "transitionend",
          Rt = function Rt(t) {
        do {
          t += Math.floor(1e6 * Math.random());
        } while (document.getElementById(t));

        return t;
      },
          Wt = function Wt(t) {
        var e = t.getAttribute("data-bs-target");

        if (!e || "#" === e) {
          var o = t.getAttribute("href");
          if (!o || !o.includes("#") && !o.startsWith(".")) return null;
          o.includes("#") && !o.startsWith("#") && (o = "#" + o.split("#")[1]), e = o && "#" !== o ? o.trim() : null;
        }

        return e;
      },
          qt = function qt(t) {
        var e = Wt(t);
        return e && document.querySelector(e) ? e : null;
      },
          Ut = function Ut(t) {
        var e = Wt(t);
        return e ? document.querySelector(e) : null;
      },
          Kt = function Kt(t) {
        if (!t) return 0;
        var e = window.getComputedStyle(t),
            o = e.transitionDuration,
            r = e.transitionDelay,
            n = Number.parseFloat(o),
            i = Number.parseFloat(r);
        return n || i ? (o = o.split(",")[0], r = r.split(",")[0], 1e3 * (Number.parseFloat(o) + Number.parseFloat(r))) : 0;
      },
          Ft = function Ft(t) {
        t.dispatchEvent(new Event(Ht));
      },
          Yt = function Yt(t) {
        return (t[0] || t).nodeType;
      },
          Xt = function Xt(t, e) {
        var o = !1,
            r = e + 5;
        t.addEventListener(Ht, function e() {
          o = !0, t.removeEventListener(Ht, e);
        }), setTimeout(function () {
          o || Ft(t);
        }, r);
      },
          Vt = function Vt(t, e, o) {
        Object.keys(o).forEach(function (r) {
          var n,
              i = o[r],
              a = e[r],
              l = a && Yt(a) ? "element" : null == (n = a) ? "" + n : {}.toString.call(n).match(/\s([a-z]+)/i)[1].toLowerCase();
          if (!new RegExp(i).test(l)) throw new TypeError(t.toUpperCase() + ': Option "' + r + '" provided type "' + l + '" but expected type "' + i + '".');
        });
      },
          Qt = function Qt(t) {
        if (!t) return !1;

        if (t.style && t.parentNode && t.parentNode.style) {
          var e = getComputedStyle(t),
              o = getComputedStyle(t.parentNode);
          return "none" !== e.display && "none" !== o.display && "hidden" !== e.visibility;
        }

        return !1;
      },
          $t = function t(e) {
        if (!document.documentElement.attachShadow) return null;

        if ("function" == typeof e.getRootNode) {
          var o = e.getRootNode();
          return o instanceof ShadowRoot ? o : null;
        }

        return e instanceof ShadowRoot ? e : e.parentNode ? t(e.parentNode) : null;
      },
          Zt = function Zt() {
        return function () {};
      },
          Jt = function Jt(t) {
        return t.offsetHeight;
      },
          Gt = function Gt() {
        var t = window.jQuery;
        return t && !document.body.hasAttribute("data-bs-no-jquery") ? t : null;
      },
          te = "rtl" === document.documentElement.dir,
          ee = function ee(t, e) {
        var o;
        o = function o() {
          var o = Gt();

          if (o) {
            var r = o.fn[t];
            o.fn[t] = e.jQueryInterface, o.fn[t].Constructor = e, o.fn[t].noConflict = function () {
              return o.fn[t] = r, e.jQueryInterface;
            };
          }
        }, "loading" === document.readyState ? document.addEventListener("DOMContentLoaded", o) : o();
      },
          oe = (It = {}, Bt = 1, {
        set: function set(t, e, o) {
          void 0 === t.bsKey && (t.bsKey = {
            key: e,
            id: Bt
          }, Bt++), It[t.bsKey.id] = o;
        },
        get: function get(t, e) {
          if (!t || void 0 === t.bsKey) return null;
          var o = t.bsKey;
          return o.key === e ? It[o.id] : null;
        },
        "delete": function _delete(t, e) {
          if (void 0 !== t.bsKey) {
            var o = t.bsKey;
            o.key === e && (delete It[o.id], delete t.bsKey);
          }
        }
      }),
          re = function re(t, e, o) {
        oe.set(t, e, o);
      },
          ne = function ne(t, e) {
        return oe.get(t, e);
      },
          ie = /[^.]*(?=\..*)\.|.*/,
          ae = /\..*/,
          le = /::\d+$/,
          de = {},
          se = 1,
          me = {
        mouseenter: "mouseover",
        mouseleave: "mouseout"
      },
          ce = new Set(["click", "dblclick", "mouseup", "mousedown", "contextmenu", "mousewheel", "DOMMouseScroll", "mouseover", "mouseout", "mousemove", "selectstart", "selectend", "keydown", "keypress", "keyup", "orientationchange", "touchstart", "touchmove", "touchend", "touchcancel", "pointerdown", "pointermove", "pointerup", "pointerleave", "pointercancel", "gesturestart", "gesturechange", "gestureend", "focus", "blur", "change", "reset", "select", "submit", "focusin", "focusout", "load", "unload", "beforeunload", "resize", "move", "DOMContentLoaded", "readystatechange", "error", "abort", "scroll"]);

      function pe(t, e) {
        return e && e + "::" + se++ || t.uidEvent || se++;
      }

      function ge(t) {
        var e = pe(t);
        return t.uidEvent = e, de[e] = de[e] || {}, de[e];
      }

      function fe(t, e, o) {
        void 0 === o && (o = null);

        for (var r = Object.keys(t), n = 0, i = r.length; n < i; n++) {
          var a = t[r[n]];
          if (a.originalHandler === e && a.delegationSelector === o) return a;
        }

        return null;
      }

      function ue(t, e, o) {
        var r = "string" == typeof e,
            n = r ? o : e,
            i = t.replace(ae, ""),
            a = me[i];
        return a && (i = a), ce.has(i) || (i = t), [r, n, i];
      }

      function be(t, e, o, r, n) {
        if ("string" == typeof e && t) {
          o || (o = r, r = null);
          var i = ue(e, o, r),
              a = i[0],
              l = i[1],
              d = i[2],
              s = ge(t),
              m = s[d] || (s[d] = {}),
              c = fe(m, l, a ? o : null);
          if (c) c.oneOff = c.oneOff && n;else {
            var p = pe(l, e.replace(ie, "")),
                g = a ? function (t, e, o) {
              return function r(n) {
                for (var i = t.querySelectorAll(e), a = n.target; a && a !== this; a = a.parentNode) {
                  for (var l = i.length; l--;) {
                    if (i[l] === a) return n.delegateTarget = a, r.oneOff && xe.off(t, n.type, o), o.apply(a, [n]);
                  }
                }

                return null;
              };
            }(t, o, r) : function (t, e) {
              return function o(r) {
                return r.delegateTarget = t, o.oneOff && xe.off(t, r.type, e), e.apply(t, [r]);
              };
            }(t, o);
            g.delegationSelector = a ? o : null, g.originalHandler = l, g.oneOff = n, g.uidEvent = p, m[p] = g, t.addEventListener(d, g, a);
          }
        }
      }

      function he(t, e, o, r, n) {
        var i = fe(e[o], r, n);
        i && (t.removeEventListener(o, i, Boolean(n)), delete e[o][i.uidEvent]);
      }

      var xe = {
        on: function on(t, e, o, r) {
          be(t, e, o, r, !1);
        },
        one: function one(t, e, o, r) {
          be(t, e, o, r, !0);
        },
        off: function off(t, e, o, r) {
          if ("string" == typeof e && t) {
            var n = ue(e, o, r),
                i = n[0],
                a = n[1],
                l = n[2],
                d = l !== e,
                s = ge(t),
                m = e.startsWith(".");

            if (void 0 === a) {
              m && Object.keys(s).forEach(function (o) {
                !function (t, e, o, r) {
                  var n = e[o] || {};
                  Object.keys(n).forEach(function (i) {
                    if (i.includes(r)) {
                      var a = n[i];
                      he(t, e, o, a.originalHandler, a.delegationSelector);
                    }
                  });
                }(t, s, o, e.slice(1));
              });
              var c = s[l] || {};
              Object.keys(c).forEach(function (o) {
                var r = o.replace(le, "");

                if (!d || e.includes(r)) {
                  var n = c[o];
                  he(t, s, l, n.originalHandler, n.delegationSelector);
                }
              });
            } else {
              if (!s || !s[l]) return;
              he(t, s, l, a, i ? o : null);
            }
          }
        },
        trigger: function trigger(t, e, o) {
          if ("string" != typeof e || !t) return null;
          var r,
              n = Gt(),
              i = e.replace(ae, ""),
              a = e !== i,
              l = ce.has(i),
              d = !0,
              s = !0,
              m = !1,
              c = null;
          return a && n && (r = n.Event(e, o), n(t).trigger(r), d = !r.isPropagationStopped(), s = !r.isImmediatePropagationStopped(), m = r.isDefaultPrevented()), l ? (c = document.createEvent("HTMLEvents")).initEvent(i, d, !0) : c = new CustomEvent(e, {
            bubbles: d,
            cancelable: !0
          }), void 0 !== o && Object.keys(o).forEach(function (t) {
            Object.defineProperty(c, t, {
              get: function get() {
                return o[t];
              }
            });
          }), m && c.preventDefault(), s && t.dispatchEvent(c), c.defaultPrevented && void 0 !== r && r.preventDefault(), c;
        }
      },
          ve = function () {
        function t(t) {
          t && (this._element = t, re(t, this.constructor.DATA_KEY, this));
        }

        return t.prototype.dispose = function () {
          var t, e;
          t = this._element, e = this.constructor.DATA_KEY, oe["delete"](t, e), this._element = null;
        }, t.getInstance = function (t) {
          return ne(t, this.DATA_KEY);
        }, Dt(t, null, [{
          key: "VERSION",
          get: function get() {
            return "5.0.0-beta2";
          }
        }]), t;
      }(),
          we = "bs.alert",
          ye = function (t) {
        function e() {
          return t.apply(this, arguments) || this;
        }

        Mt(e, t);
        var o = e.prototype;
        return o.close = function (t) {
          var e = t ? this._getRootElement(t) : this._element,
              o = this._triggerCloseEvent(e);

          null === o || o.defaultPrevented || this._removeElement(e);
        }, o._getRootElement = function (t) {
          return Ut(t) || t.closest(".alert");
        }, o._triggerCloseEvent = function (t) {
          return xe.trigger(t, "close.bs.alert");
        }, o._removeElement = function (t) {
          var e = this;

          if (t.classList.remove("show"), t.classList.contains("fade")) {
            var o = Kt(t);
            xe.one(t, "transitionend", function () {
              return e._destroyElement(t);
            }), Xt(t, o);
          } else this._destroyElement(t);
        }, o._destroyElement = function (t) {
          t.parentNode && t.parentNode.removeChild(t), xe.trigger(t, "closed.bs.alert");
        }, e.jQueryInterface = function (t) {
          return this.each(function () {
            var o = ne(this, we);
            o || (o = new e(this)), "close" === t && o[t](this);
          });
        }, e.handleDismiss = function (t) {
          return function (e) {
            e && e.preventDefault(), t.close(this);
          };
        }, Dt(e, null, [{
          key: "DATA_KEY",
          get: function get() {
            return we;
          }
        }]), e;
      }(ve);

      xe.on(document, "click.bs.alert.data-api", '[data-bs-dismiss="alert"]', ye.handleDismiss(new ye())), ee("alert", ye);

      var ke = "bs.button",
          _e = '[data-bs-toggle="button"]',
          Ee = function (t) {
        function e() {
          return t.apply(this, arguments) || this;
        }

        return Mt(e, t), e.prototype.toggle = function () {
          this._element.setAttribute("aria-pressed", this._element.classList.toggle("active"));
        }, e.jQueryInterface = function (t) {
          return this.each(function () {
            var o = ne(this, ke);
            o || (o = new e(this)), "toggle" === t && o[t]();
          });
        }, Dt(e, null, [{
          key: "DATA_KEY",
          get: function get() {
            return ke;
          }
        }]), e;
      }(ve);

      function Te(t) {
        return "true" === t || "false" !== t && (t === Number(t).toString() ? Number(t) : "" === t || "null" === t ? null : t);
      }

      function Ae(t) {
        return t.replace(/[A-Z]/g, function (t) {
          return "-" + t.toLowerCase();
        });
      }

      xe.on(document, "click.bs.button.data-api", _e, function (t) {
        t.preventDefault();
        var e = t.target.closest(_e),
            o = ne(e, ke);
        o || (o = new Ee(e)), o.toggle();
      }), ee("button", Ee);

      var ze = {
        setDataAttribute: function setDataAttribute(t, e, o) {
          t.setAttribute("data-bs-" + Ae(e), o);
        },
        removeDataAttribute: function removeDataAttribute(t, e) {
          t.removeAttribute("data-bs-" + Ae(e));
        },
        getDataAttributes: function getDataAttributes(t) {
          if (!t) return {};
          var e = {};
          return Object.keys(t.dataset).filter(function (t) {
            return t.startsWith("bs");
          }).forEach(function (o) {
            var r = o.replace(/^bs/, "");
            r = r.charAt(0).toLowerCase() + r.slice(1, r.length), e[r] = Te(t.dataset[o]);
          }), e;
        },
        getDataAttribute: function getDataAttribute(t, e) {
          return Te(t.getAttribute("data-bs-" + Ae(e)));
        },
        offset: function offset(t) {
          var e = t.getBoundingClientRect();
          return {
            top: e.top + document.body.scrollTop,
            left: e.left + document.body.scrollLeft
          };
        },
        position: function position(t) {
          return {
            top: t.offsetTop,
            left: t.offsetLeft
          };
        }
      },
          je = function je(t, e) {
        var o;
        return void 0 === e && (e = document.documentElement), (o = []).concat.apply(o, Element.prototype.querySelectorAll.call(e, t));
      },
          Le = function Le(t, e) {
        return void 0 === e && (e = document.documentElement), Element.prototype.querySelector.call(e, t);
      },
          Ce = function Ce(t, e) {
        var o;
        return (o = []).concat.apply(o, t.children).filter(function (t) {
          return t.matches(e);
        });
      },
          Oe = function Oe(t, e) {
        for (var o = t.previousElementSibling; o;) {
          if (o.matches(e)) return [o];
          o = o.previousElementSibling;
        }

        return [];
      },
          Se = "carousel",
          De = "bs.carousel",
          Ne = {
        interval: 5e3,
        keyboard: !0,
        slide: !1,
        pause: "hover",
        wrap: !0,
        touch: !0
      },
          Me = {
        interval: "(number|boolean)",
        keyboard: "boolean",
        slide: "(boolean|string)",
        pause: "(string|boolean)",
        wrap: "boolean",
        touch: "boolean"
      },
          Pe = "next",
          Ie = "prev",
          Be = "slid.bs.carousel",
          He = "active",
          Re = ".active.carousel-item",
          We = "touch",
          qe = function (t) {
        function e(e, o) {
          var r;
          return (r = t.call(this, e) || this)._items = null, r._interval = null, r._activeElement = null, r._isPaused = !1, r._isSliding = !1, r.touchTimeout = null, r.touchStartX = 0, r.touchDeltaX = 0, r._config = r._getConfig(o), r._indicatorsElement = Le(".carousel-indicators", r._element), r._touchSupported = "ontouchstart" in document.documentElement || navigator.maxTouchPoints > 0, r._pointerEvent = Boolean(window.PointerEvent), r._addEventListeners(), r;
        }

        Mt(e, t);
        var o = e.prototype;
        return o.next = function () {
          this._isSliding || this._slide(Pe);
        }, o.nextWhenVisible = function () {
          !document.hidden && Qt(this._element) && this.next();
        }, o.prev = function () {
          this._isSliding || this._slide(Ie);
        }, o.pause = function (t) {
          t || (this._isPaused = !0), Le(".carousel-item-next, .carousel-item-prev", this._element) && (Ft(this._element), this.cycle(!0)), clearInterval(this._interval), this._interval = null;
        }, o.cycle = function (t) {
          t || (this._isPaused = !1), this._interval && (clearInterval(this._interval), this._interval = null), this._config && this._config.interval && !this._isPaused && (this._updateInterval(), this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval));
        }, o.to = function (t) {
          var e = this;
          this._activeElement = Le(Re, this._element);

          var o = this._getItemIndex(this._activeElement);

          if (!(t > this._items.length - 1 || t < 0)) if (this._isSliding) xe.one(this._element, Be, function () {
            return e.to(t);
          });else {
            if (o === t) return this.pause(), void this.cycle();
            var r = t > o ? Pe : Ie;

            this._slide(r, this._items[t]);
          }
        }, o.dispose = function () {
          t.prototype.dispose.call(this), xe.off(this._element, ".bs.carousel"), this._items = null, this._config = null, this._interval = null, this._isPaused = null, this._isSliding = null, this._activeElement = null, this._indicatorsElement = null;
        }, o._getConfig = function (t) {
          return t = Nt({}, Ne, t), Vt(Se, t, Me), t;
        }, o._handleSwipe = function () {
          var t = Math.abs(this.touchDeltaX);

          if (!(t <= 40)) {
            var e = t / this.touchDeltaX;
            this.touchDeltaX = 0, e > 0 && (te ? this.next() : this.prev()), e < 0 && (te ? this.prev() : this.next());
          }
        }, o._addEventListeners = function () {
          var t = this;
          this._config.keyboard && xe.on(this._element, "keydown.bs.carousel", function (e) {
            return t._keydown(e);
          }), "hover" === this._config.pause && (xe.on(this._element, "mouseenter.bs.carousel", function (e) {
            return t.pause(e);
          }), xe.on(this._element, "mouseleave.bs.carousel", function (e) {
            return t.cycle(e);
          })), this._config.touch && this._touchSupported && this._addTouchEventListeners();
        }, o._addTouchEventListeners = function () {
          var t = this,
              e = function e(_e2) {
            !t._pointerEvent || "pen" !== _e2.pointerType && _e2.pointerType !== We ? t._pointerEvent || (t.touchStartX = _e2.touches[0].clientX) : t.touchStartX = _e2.clientX;
          },
              o = function o(e) {
            !t._pointerEvent || "pen" !== e.pointerType && e.pointerType !== We || (t.touchDeltaX = e.clientX - t.touchStartX), t._handleSwipe(), "hover" === t._config.pause && (t.pause(), t.touchTimeout && clearTimeout(t.touchTimeout), t.touchTimeout = setTimeout(function (e) {
              return t.cycle(e);
            }, 500 + t._config.interval));
          };

          je(".carousel-item img", this._element).forEach(function (t) {
            xe.on(t, "dragstart.bs.carousel", function (t) {
              return t.preventDefault();
            });
          }), this._pointerEvent ? (xe.on(this._element, "pointerdown.bs.carousel", function (t) {
            return e(t);
          }), xe.on(this._element, "pointerup.bs.carousel", function (t) {
            return o(t);
          }), this._element.classList.add("pointer-event")) : (xe.on(this._element, "touchstart.bs.carousel", function (t) {
            return e(t);
          }), xe.on(this._element, "touchmove.bs.carousel", function (e) {
            return function (e) {
              e.touches && e.touches.length > 1 ? t.touchDeltaX = 0 : t.touchDeltaX = e.touches[0].clientX - t.touchStartX;
            }(e);
          }), xe.on(this._element, "touchend.bs.carousel", function (t) {
            return o(t);
          }));
        }, o._keydown = function (t) {
          /input|textarea/i.test(t.target.tagName) || ("ArrowLeft" === t.key ? (t.preventDefault(), te ? this.next() : this.prev()) : "ArrowRight" === t.key && (t.preventDefault(), te ? this.prev() : this.next()));
        }, o._getItemIndex = function (t) {
          return this._items = t && t.parentNode ? je(".carousel-item", t.parentNode) : [], this._items.indexOf(t);
        }, o._getItemByDirection = function (t, e) {
          var o = t === Pe,
              r = t === Ie,
              n = this._getItemIndex(e),
              i = this._items.length - 1;

          if ((r && 0 === n || o && n === i) && !this._config.wrap) return e;
          var a = (n + (t === Ie ? -1 : 1)) % this._items.length;
          return -1 === a ? this._items[this._items.length - 1] : this._items[a];
        }, o._triggerSlideEvent = function (t, e) {
          var o = this._getItemIndex(t),
              r = this._getItemIndex(Le(Re, this._element));

          return xe.trigger(this._element, "slide.bs.carousel", {
            relatedTarget: t,
            direction: e,
            from: r,
            to: o
          });
        }, o._setActiveIndicatorElement = function (t) {
          if (this._indicatorsElement) {
            var e = Le(".active", this._indicatorsElement);
            e.classList.remove(He), e.removeAttribute("aria-current");

            for (var o = je("[data-bs-target]", this._indicatorsElement), r = 0; r < o.length; r++) {
              if (Number.parseInt(o[r].getAttribute("data-bs-slide-to"), 10) === this._getItemIndex(t)) {
                o[r].classList.add(He), o[r].setAttribute("aria-current", "true");
                break;
              }
            }
          }
        }, o._updateInterval = function () {
          var t = this._activeElement || Le(Re, this._element);

          if (t) {
            var e = Number.parseInt(t.getAttribute("data-bs-interval"), 10);
            e ? (this._config.defaultInterval = this._config.defaultInterval || this._config.interval, this._config.interval = e) : this._config.interval = this._config.defaultInterval || this._config.interval;
          }
        }, o._slide = function (t, e) {
          var o = this,
              r = Le(Re, this._element),
              n = this._getItemIndex(r),
              i = e || r && this._getItemByDirection(t, r),
              a = this._getItemIndex(i),
              l = Boolean(this._interval),
              d = t === Pe ? "carousel-item-start" : "carousel-item-end",
              s = t === Pe ? "carousel-item-next" : "carousel-item-prev",
              m = t === Pe ? "left" : "right";

          if (i && i.classList.contains(He)) this._isSliding = !1;else if (!this._triggerSlideEvent(i, m).defaultPrevented && r && i) {
            if (this._isSliding = !0, l && this.pause(), this._setActiveIndicatorElement(i), this._activeElement = i, this._element.classList.contains("slide")) {
              i.classList.add(s), Jt(i), r.classList.add(d), i.classList.add(d);
              var c = Kt(r);
              xe.one(r, "transitionend", function () {
                i.classList.remove(d, s), i.classList.add(He), r.classList.remove(He, s, d), o._isSliding = !1, setTimeout(function () {
                  xe.trigger(o._element, Be, {
                    relatedTarget: i,
                    direction: m,
                    from: n,
                    to: a
                  });
                }, 0);
              }), Xt(r, c);
            } else r.classList.remove(He), i.classList.add(He), this._isSliding = !1, xe.trigger(this._element, Be, {
              relatedTarget: i,
              direction: m,
              from: n,
              to: a
            });

            l && this.cycle();
          }
        }, e.carouselInterface = function (t, o) {
          var r = ne(t, De),
              n = Nt({}, Ne, ze.getDataAttributes(t));
          "object" == _typeof(o) && (n = Nt({}, n, o));
          var i = "string" == typeof o ? o : n.slide;
          if (r || (r = new e(t, n)), "number" == typeof o) r.to(o);else if ("string" == typeof i) {
            if (void 0 === r[i]) throw new TypeError('No method named "' + i + '"');
            r[i]();
          } else n.interval && n.ride && (r.pause(), r.cycle());
        }, e.jQueryInterface = function (t) {
          return this.each(function () {
            e.carouselInterface(this, t);
          });
        }, e.dataApiClickHandler = function (t) {
          var o = Ut(this);

          if (o && o.classList.contains("carousel")) {
            var r = Nt({}, ze.getDataAttributes(o), ze.getDataAttributes(this)),
                n = this.getAttribute("data-bs-slide-to");
            n && (r.interval = !1), e.carouselInterface(o, r), n && ne(o, De).to(n), t.preventDefault();
          }
        }, Dt(e, null, [{
          key: "Default",
          get: function get() {
            return Ne;
          }
        }, {
          key: "DATA_KEY",
          get: function get() {
            return De;
          }
        }]), e;
      }(ve);

      xe.on(document, "click.bs.carousel.data-api", "[data-bs-slide], [data-bs-slide-to]", qe.dataApiClickHandler), xe.on(window, "load.bs.carousel.data-api", function () {
        for (var t = je('[data-bs-ride="carousel"]'), e = 0, o = t.length; e < o; e++) {
          qe.carouselInterface(t[e], ne(t[e], De));
        }
      }), ee(Se, qe);

      var Ue = "collapse",
          Ke = "bs.collapse",
          Fe = {
        toggle: !0,
        parent: ""
      },
          Ye = {
        toggle: "boolean",
        parent: "(string|element)"
      },
          Xe = "show",
          Ve = "collapse",
          Qe = "collapsing",
          $e = "collapsed",
          Ze = "width",
          Je = '[data-bs-toggle="collapse"]',
          Ge = function (t) {
        function e(e, o) {
          var r;
          (r = t.call(this, e) || this)._isTransitioning = !1, r._config = r._getConfig(o), r._triggerArray = je(Je + '[href="#' + e.id + '"],' + Je + '[data-bs-target="#' + e.id + '"]');

          for (var n = je(Je), i = 0, a = n.length; i < a; i++) {
            var l = n[i],
                d = qt(l),
                s = je(d).filter(function (t) {
              return t === e;
            });
            null !== d && s.length && (r._selector = d, r._triggerArray.push(l));
          }

          return r._parent = r._config.parent ? r._getParent() : null, r._config.parent || r._addAriaAndCollapsedClass(r._element, r._triggerArray), r._config.toggle && r.toggle(), r;
        }

        Mt(e, t);
        var o = e.prototype;
        return o.toggle = function () {
          this._element.classList.contains(Xe) ? this.hide() : this.show();
        }, o.show = function () {
          var t = this;

          if (!this._isTransitioning && !this._element.classList.contains(Xe)) {
            var o, r;
            this._parent && 0 === (o = je(".show, .collapsing", this._parent).filter(function (e) {
              return "string" == typeof t._config.parent ? e.getAttribute("data-bs-parent") === t._config.parent : e.classList.contains(Ve);
            })).length && (o = null);
            var n = Le(this._selector);

            if (o) {
              var i = o.find(function (t) {
                return n !== t;
              });
              if ((r = i ? ne(i, Ke) : null) && r._isTransitioning) return;
            }

            if (!xe.trigger(this._element, "show.bs.collapse").defaultPrevented) {
              o && o.forEach(function (t) {
                n !== t && e.collapseInterface(t, "hide"), r || re(t, Ke, null);
              });

              var a = this._getDimension();

              this._element.classList.remove(Ve), this._element.classList.add(Qe), this._element.style[a] = 0, this._triggerArray.length && this._triggerArray.forEach(function (t) {
                t.classList.remove($e), t.setAttribute("aria-expanded", !0);
              }), this.setTransitioning(!0);
              var l = "scroll" + (a[0].toUpperCase() + a.slice(1)),
                  d = Kt(this._element);
              xe.one(this._element, "transitionend", function () {
                t._element.classList.remove(Qe), t._element.classList.add(Ve, Xe), t._element.style[a] = "", t.setTransitioning(!1), xe.trigger(t._element, "shown.bs.collapse");
              }), Xt(this._element, d), this._element.style[a] = this._element[l] + "px";
            }
          }
        }, o.hide = function () {
          var t = this;

          if (!this._isTransitioning && this._element.classList.contains(Xe) && !xe.trigger(this._element, "hide.bs.collapse").defaultPrevented) {
            var e = this._getDimension();

            this._element.style[e] = this._element.getBoundingClientRect()[e] + "px", Jt(this._element), this._element.classList.add(Qe), this._element.classList.remove(Ve, Xe);
            var o = this._triggerArray.length;
            if (o > 0) for (var r = 0; r < o; r++) {
              var n = this._triggerArray[r],
                  i = Ut(n);
              i && !i.classList.contains(Xe) && (n.classList.add($e), n.setAttribute("aria-expanded", !1));
            }
            this.setTransitioning(!0), this._element.style[e] = "";
            var a = Kt(this._element);
            xe.one(this._element, "transitionend", function () {
              t.setTransitioning(!1), t._element.classList.remove(Qe), t._element.classList.add(Ve), xe.trigger(t._element, "hidden.bs.collapse");
            }), Xt(this._element, a);
          }
        }, o.setTransitioning = function (t) {
          this._isTransitioning = t;
        }, o.dispose = function () {
          t.prototype.dispose.call(this), this._config = null, this._parent = null, this._triggerArray = null, this._isTransitioning = null;
        }, o._getConfig = function (t) {
          return (t = Nt({}, Fe, t)).toggle = Boolean(t.toggle), Vt(Ue, t, Ye), t;
        }, o._getDimension = function () {
          return this._element.classList.contains(Ze) ? Ze : "height";
        }, o._getParent = function () {
          var t = this,
              e = this._config.parent;
          return Yt(e) ? void 0 === e.jquery && void 0 === e[0] || (e = e[0]) : e = Le(e), je(Je + '[data-bs-parent="' + e + '"]', e).forEach(function (e) {
            var o = Ut(e);

            t._addAriaAndCollapsedClass(o, [e]);
          }), e;
        }, o._addAriaAndCollapsedClass = function (t, e) {
          if (t && e.length) {
            var o = t.classList.contains(Xe);
            e.forEach(function (t) {
              o ? t.classList.remove($e) : t.classList.add($e), t.setAttribute("aria-expanded", o);
            });
          }
        }, e.collapseInterface = function (t, o) {
          var r = ne(t, Ke),
              n = Nt({}, Fe, ze.getDataAttributes(t), "object" == _typeof(o) && o ? o : {});

          if (!r && n.toggle && "string" == typeof o && /show|hide/.test(o) && (n.toggle = !1), r || (r = new e(t, n)), "string" == typeof o) {
            if (void 0 === r[o]) throw new TypeError('No method named "' + o + '"');
            r[o]();
          }
        }, e.jQueryInterface = function (t) {
          return this.each(function () {
            e.collapseInterface(this, t);
          });
        }, Dt(e, null, [{
          key: "Default",
          get: function get() {
            return Fe;
          }
        }, {
          key: "DATA_KEY",
          get: function get() {
            return Ke;
          }
        }]), e;
      }(ve);

      xe.on(document, "click.bs.collapse.data-api", Je, function (t) {
        ("A" === t.target.tagName || t.delegateTarget && "A" === t.delegateTarget.tagName) && t.preventDefault();
        var e = ze.getDataAttributes(this),
            o = qt(this);
        je(o).forEach(function (t) {
          var o,
              r = ne(t, Ke);
          r ? (null === r._parent && "string" == typeof e.parent && (r._config.parent = e.parent, r._parent = r._getParent()), o = "toggle") : o = e, Ge.collapseInterface(t, o);
        });
      }), ee(Ue, Ge);

      var to = "dropdown",
          eo = "bs.dropdown",
          oo = "Escape",
          ro = "Space",
          no = "ArrowUp",
          io = "ArrowDown",
          ao = new RegExp("ArrowUp|ArrowDown|Escape"),
          lo = "hide.bs.dropdown",
          so = "hidden.bs.dropdown",
          mo = "click.bs.dropdown.data-api",
          co = "keydown.bs.dropdown.data-api",
          po = "disabled",
          go = "show",
          fo = '[data-bs-toggle="dropdown"]',
          uo = ".dropdown-menu",
          bo = te ? "top-end" : "top-start",
          ho = te ? "top-start" : "top-end",
          xo = te ? "bottom-end" : "bottom-start",
          vo = te ? "bottom-start" : "bottom-end",
          wo = te ? "left-start" : "right-start",
          yo = te ? "right-start" : "left-start",
          ko = {
        offset: [0, 2],
        flip: !0,
        boundary: "clippingParents",
        reference: "toggle",
        display: "dynamic",
        popperConfig: null
      },
          _o = {
        offset: "(array|string|function)",
        flip: "boolean",
        boundary: "(string|element)",
        reference: "(string|element|object)",
        display: "string",
        popperConfig: "(null|object|function)"
      },
          Eo = function (t) {
        function e(e, o) {
          var r;
          return (r = t.call(this, e) || this)._popper = null, r._config = r._getConfig(o), r._menu = r._getMenuElement(), r._inNavbar = r._detectNavbar(), r._addEventListeners(), r;
        }

        Mt(e, t);
        var o = e.prototype;
        return o.toggle = function () {
          if (!this._element.disabled && !this._element.classList.contains(po)) {
            var t = this._element.classList.contains(go);

            e.clearMenus(), t || this.show();
          }
        }, o.show = function () {
          if (!(this._element.disabled || this._element.classList.contains(po) || this._menu.classList.contains(go))) {
            var t = e.getParentFromElement(this._element),
                o = {
              relatedTarget: this._element
            };

            if (!xe.trigger(this._element, "show.bs.dropdown", o).defaultPrevented) {
              if (this._inNavbar) ze.setDataAttribute(this._menu, "popper", "none");else {
                if (void 0 === r) throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)");
                var n = this._element;
                "parent" === this._config.reference ? n = t : Yt(this._config.reference) ? (n = this._config.reference, void 0 !== this._config.reference.jquery && (n = this._config.reference[0])) : "object" == _typeof(this._config.reference) && (n = this._config.reference);

                var i = this._getPopperConfig(),
                    a = i.modifiers.find(function (t) {
                  return "applyStyles" === t.name && !1 === t.enabled;
                });

                this._popper = Ct(n, this._menu, i), a && ze.setDataAttribute(this._menu, "popper", "static");
              }
              var l;
              "ontouchstart" in document.documentElement && !t.closest(".navbar-nav") && (l = []).concat.apply(l, document.body.children).forEach(function (t) {
                return xe.on(t, "mouseover", null, function () {});
              }), this._element.focus(), this._element.setAttribute("aria-expanded", !0), this._menu.classList.toggle(go), this._element.classList.toggle(go), xe.trigger(this._element, "shown.bs.dropdown", o);
            }
          }
        }, o.hide = function () {
          if (!this._element.disabled && !this._element.classList.contains(po) && this._menu.classList.contains(go)) {
            var t = {
              relatedTarget: this._element
            };
            xe.trigger(this._element, lo, t).defaultPrevented || (this._popper && this._popper.destroy(), this._menu.classList.toggle(go), this._element.classList.toggle(go), ze.removeDataAttribute(this._menu, "popper"), xe.trigger(this._element, so, t));
          }
        }, o.dispose = function () {
          t.prototype.dispose.call(this), xe.off(this._element, ".bs.dropdown"), this._menu = null, this._popper && (this._popper.destroy(), this._popper = null);
        }, o.update = function () {
          this._inNavbar = this._detectNavbar(), this._popper && this._popper.update();
        }, o._addEventListeners = function () {
          var t = this;
          xe.on(this._element, "click.bs.dropdown", function (e) {
            e.preventDefault(), e.stopPropagation(), t.toggle();
          });
        }, o._getConfig = function (t) {
          if (t = Nt({}, this.constructor.Default, ze.getDataAttributes(this._element), t), Vt(to, t, this.constructor.DefaultType), "object" == _typeof(t.reference) && !Yt(t.reference) && "function" != typeof t.reference.getBoundingClientRect) throw new TypeError(to.toUpperCase() + ': Option "reference" provided type "object" without a required "getBoundingClientRect" method.');
          return t;
        }, o._getMenuElement = function () {
          return function (t, e) {
            for (var o = t.nextElementSibling; o;) {
              if (o.matches(e)) return [o];
              o = o.nextElementSibling;
            }

            return [];
          }(this._element, uo)[0];
        }, o._getPlacement = function () {
          var t = this._element.parentNode;
          if (t.classList.contains("dropend")) return wo;
          if (t.classList.contains("dropstart")) return yo;
          var e = "end" === getComputedStyle(this._menu).getPropertyValue("--bs-position").trim();
          return t.classList.contains("dropup") ? e ? ho : bo : e ? vo : xo;
        }, o._detectNavbar = function () {
          return null !== this._element.closest(".navbar");
        }, o._getOffset = function () {
          var t = this,
              e = this._config.offset;
          return "string" == typeof e ? e.split(",").map(function (t) {
            return Number.parseInt(t, 10);
          }) : "function" == typeof e ? function (o) {
            return e(o, t._element);
          } : e;
        }, o._getPopperConfig = function () {
          var t = {
            placement: this._getPlacement(),
            modifiers: [{
              name: "preventOverflow",
              options: {
                altBoundary: this._config.flip,
                boundary: this._config.boundary
              }
            }, {
              name: "offset",
              options: {
                offset: this._getOffset()
              }
            }]
          };
          return "static" === this._config.display && (t.modifiers = [{
            name: "applyStyles",
            enabled: !1
          }]), Nt({}, t, "function" == typeof this._config.popperConfig ? this._config.popperConfig(t) : this._config.popperConfig);
        }, e.dropdownInterface = function (t, o) {
          var r = ne(t, eo);

          if (r || (r = new e(t, "object" == _typeof(o) ? o : null)), "string" == typeof o) {
            if (void 0 === r[o]) throw new TypeError('No method named "' + o + '"');
            r[o]();
          }
        }, e.jQueryInterface = function (t) {
          return this.each(function () {
            e.dropdownInterface(this, t);
          });
        }, e.clearMenus = function (t) {
          if (!t || 2 !== t.button && ("keyup" !== t.type || "Tab" === t.key)) for (var e = je(fo), o = 0, r = e.length; o < r; o++) {
            var n = ne(e[o], eo),
                i = {
              relatedTarget: e[o]
            };

            if (t && "click" === t.type && (i.clickEvent = t), n) {
              var a,
                  l = n._menu;
              if (e[o].classList.contains(go) && !(t && ("click" === t.type && /input|textarea/i.test(t.target.tagName) || "keyup" === t.type && "Tab" === t.key) && l.contains(t.target) || xe.trigger(e[o], lo, i).defaultPrevented)) "ontouchstart" in document.documentElement && (a = []).concat.apply(a, document.body.children).forEach(function (t) {
                return xe.off(t, "mouseover", null, function () {});
              }), e[o].setAttribute("aria-expanded", "false"), n._popper && n._popper.destroy(), l.classList.remove(go), e[o].classList.remove(go), ze.removeDataAttribute(l, "popper"), xe.trigger(e[o], so, i);
            }
          }
        }, e.getParentFromElement = function (t) {
          return Ut(t) || t.parentNode;
        }, e.dataApiKeydownHandler = function (t) {
          if (!(/input|textarea/i.test(t.target.tagName) ? t.key === ro || t.key !== oo && (t.key !== io && t.key !== no || t.target.closest(uo)) : !ao.test(t.key)) && (t.preventDefault(), t.stopPropagation(), !this.disabled && !this.classList.contains(po))) {
            var o = e.getParentFromElement(this),
                r = this.classList.contains(go);
            if (t.key === oo) return (this.matches(fo) ? this : Oe(this, fo)[0]).focus(), void e.clearMenus();
            if (r || t.key !== no && t.key !== io) {
              if (r && t.key !== ro) {
                var n = je(".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)", o).filter(Qt);

                if (n.length) {
                  var i = n.indexOf(t.target);
                  t.key === no && i > 0 && i--, t.key === io && i < n.length - 1 && i++, n[i = -1 === i ? 0 : i].focus();
                }
              } else e.clearMenus();
            } else (this.matches(fo) ? this : Oe(this, fo)[0]).click();
          }
        }, Dt(e, null, [{
          key: "Default",
          get: function get() {
            return ko;
          }
        }, {
          key: "DefaultType",
          get: function get() {
            return _o;
          }
        }, {
          key: "DATA_KEY",
          get: function get() {
            return eo;
          }
        }]), e;
      }(ve);

      xe.on(document, co, fo, Eo.dataApiKeydownHandler), xe.on(document, co, uo, Eo.dataApiKeydownHandler), xe.on(document, mo, Eo.clearMenus), xe.on(document, "keyup.bs.dropdown.data-api", Eo.clearMenus), xe.on(document, mo, fo, function (t) {
        t.preventDefault(), t.stopPropagation(), Eo.dropdownInterface(this, "toggle");
      }), xe.on(document, mo, ".dropdown form", function (t) {
        return t.stopPropagation();
      }), ee(to, Eo);

      var To = "modal",
          Ao = "bs.modal",
          zo = "Escape",
          jo = {
        backdrop: !0,
        keyboard: !0,
        focus: !0
      },
          Lo = {
        backdrop: "(boolean|string)",
        keyboard: "boolean",
        focus: "boolean"
      },
          Co = "hidden.bs.modal",
          Oo = "show.bs.modal",
          So = "focusin.bs.modal",
          Do = "resize.bs.modal",
          No = "click.dismiss.bs.modal",
          Mo = "keydown.dismiss.bs.modal",
          Po = "mousedown.dismiss.bs.modal",
          Io = "modal-open",
          Bo = "fade",
          Ho = "show",
          Ro = "modal-static",
          Wo = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
          qo = ".sticky-top",
          Uo = function (t) {
        function e(e, o) {
          var r;
          return (r = t.call(this, e) || this)._config = r._getConfig(o), r._dialog = Le(".modal-dialog", e), r._backdrop = null, r._isShown = !1, r._isBodyOverflowing = !1, r._ignoreBackdropClick = !1, r._isTransitioning = !1, r._scrollbarWidth = 0, r;
        }

        Mt(e, t);
        var o = e.prototype;
        return o.toggle = function (t) {
          return this._isShown ? this.hide() : this.show(t);
        }, o.show = function (t) {
          var e = this;

          if (!this._isShown && !this._isTransitioning) {
            this._element.classList.contains(Bo) && (this._isTransitioning = !0);
            var o = xe.trigger(this._element, Oo, {
              relatedTarget: t
            });
            this._isShown || o.defaultPrevented || (this._isShown = !0, this._checkScrollbar(), this._setScrollbar(), this._adjustDialog(), this._setEscapeEvent(), this._setResizeEvent(), xe.on(this._element, No, '[data-bs-dismiss="modal"]', function (t) {
              return e.hide(t);
            }), xe.on(this._dialog, Po, function () {
              xe.one(e._element, "mouseup.dismiss.bs.modal", function (t) {
                t.target === e._element && (e._ignoreBackdropClick = !0);
              });
            }), this._showBackdrop(function () {
              return e._showElement(t);
            }));
          }
        }, o.hide = function (t) {
          var e = this;

          if (t && t.preventDefault(), this._isShown && !this._isTransitioning && !xe.trigger(this._element, "hide.bs.modal").defaultPrevented) {
            this._isShown = !1;

            var o = this._element.classList.contains(Bo);

            if (o && (this._isTransitioning = !0), this._setEscapeEvent(), this._setResizeEvent(), xe.off(document, So), this._element.classList.remove(Ho), xe.off(this._element, No), xe.off(this._dialog, Po), o) {
              var r = Kt(this._element);
              xe.one(this._element, "transitionend", function (t) {
                return e._hideModal(t);
              }), Xt(this._element, r);
            } else this._hideModal();
          }
        }, o.dispose = function () {
          [window, this._element, this._dialog].forEach(function (t) {
            return xe.off(t, ".bs.modal");
          }), t.prototype.dispose.call(this), xe.off(document, So), this._config = null, this._dialog = null, this._backdrop = null, this._isShown = null, this._isBodyOverflowing = null, this._ignoreBackdropClick = null, this._isTransitioning = null, this._scrollbarWidth = null;
        }, o.handleUpdate = function () {
          this._adjustDialog();
        }, o._getConfig = function (t) {
          return t = Nt({}, jo, t), Vt(To, t, Lo), t;
        }, o._showElement = function (t) {
          var e = this,
              o = this._element.classList.contains(Bo),
              r = Le(".modal-body", this._dialog);

          this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE || document.body.appendChild(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.setAttribute("aria-modal", !0), this._element.setAttribute("role", "dialog"), this._element.scrollTop = 0, r && (r.scrollTop = 0), o && Jt(this._element), this._element.classList.add(Ho), this._config.focus && this._enforceFocus();

          var n = function n() {
            e._config.focus && e._element.focus(), e._isTransitioning = !1, xe.trigger(e._element, "shown.bs.modal", {
              relatedTarget: t
            });
          };

          if (o) {
            var i = Kt(this._dialog);
            xe.one(this._dialog, "transitionend", n), Xt(this._dialog, i);
          } else n();
        }, o._enforceFocus = function () {
          var t = this;
          xe.off(document, So), xe.on(document, So, function (e) {
            document === e.target || t._element === e.target || t._element.contains(e.target) || t._element.focus();
          });
        }, o._setEscapeEvent = function () {
          var t = this;
          this._isShown ? xe.on(this._element, Mo, function (e) {
            t._config.keyboard && e.key === zo ? (e.preventDefault(), t.hide()) : t._config.keyboard || e.key !== zo || t._triggerBackdropTransition();
          }) : xe.off(this._element, Mo);
        }, o._setResizeEvent = function () {
          var t = this;
          this._isShown ? xe.on(window, Do, function () {
            return t._adjustDialog();
          }) : xe.off(window, Do);
        }, o._hideModal = function () {
          var t = this;
          this._element.style.display = "none", this._element.setAttribute("aria-hidden", !0), this._element.removeAttribute("aria-modal"), this._element.removeAttribute("role"), this._isTransitioning = !1, this._showBackdrop(function () {
            document.body.classList.remove(Io), t._resetAdjustments(), t._resetScrollbar(), xe.trigger(t._element, Co);
          });
        }, o._removeBackdrop = function () {
          this._backdrop.parentNode.removeChild(this._backdrop), this._backdrop = null;
        }, o._showBackdrop = function (t) {
          var e = this,
              o = this._element.classList.contains(Bo) ? Bo : "";

          if (this._isShown && this._config.backdrop) {
            if (this._backdrop = document.createElement("div"), this._backdrop.className = "modal-backdrop", o && this._backdrop.classList.add(o), document.body.appendChild(this._backdrop), xe.on(this._element, No, function (t) {
              e._ignoreBackdropClick ? e._ignoreBackdropClick = !1 : t.target === t.currentTarget && ("static" === e._config.backdrop ? e._triggerBackdropTransition() : e.hide());
            }), o && Jt(this._backdrop), this._backdrop.classList.add(Ho), !o) return void t();
            var r = Kt(this._backdrop);
            xe.one(this._backdrop, "transitionend", t), Xt(this._backdrop, r);
          } else if (!this._isShown && this._backdrop) {
            this._backdrop.classList.remove(Ho);

            var n = function n() {
              e._removeBackdrop(), t();
            };

            if (this._element.classList.contains(Bo)) {
              var i = Kt(this._backdrop);
              xe.one(this._backdrop, "transitionend", n), Xt(this._backdrop, i);
            } else n();
          } else t();
        }, o._triggerBackdropTransition = function () {
          var t = this;

          if (!xe.trigger(this._element, "hidePrevented.bs.modal").defaultPrevented) {
            var e = this._element.scrollHeight > document.documentElement.clientHeight;
            e || (this._element.style.overflowY = "hidden"), this._element.classList.add(Ro);
            var o = Kt(this._dialog);
            xe.off(this._element, "transitionend"), xe.one(this._element, "transitionend", function () {
              t._element.classList.remove(Ro), e || (xe.one(t._element, "transitionend", function () {
                t._element.style.overflowY = "";
              }), Xt(t._element, o));
            }), Xt(this._element, o), this._element.focus();
          }
        }, o._adjustDialog = function () {
          var t = this._element.scrollHeight > document.documentElement.clientHeight;
          (!this._isBodyOverflowing && t && !te || this._isBodyOverflowing && !t && te) && (this._element.style.paddingLeft = this._scrollbarWidth + "px"), (this._isBodyOverflowing && !t && !te || !this._isBodyOverflowing && t && te) && (this._element.style.paddingRight = this._scrollbarWidth + "px");
        }, o._resetAdjustments = function () {
          this._element.style.paddingLeft = "", this._element.style.paddingRight = "";
        }, o._checkScrollbar = function () {
          var t = document.body.getBoundingClientRect();
          this._isBodyOverflowing = Math.round(t.left + t.right) < window.innerWidth, this._scrollbarWidth = this._getScrollbarWidth();
        }, o._setScrollbar = function () {
          var t = this;
          this._isBodyOverflowing && (this._setElementAttributes(Wo, "paddingRight", function (e) {
            return e + t._scrollbarWidth;
          }), this._setElementAttributes(qo, "marginRight", function (e) {
            return e - t._scrollbarWidth;
          }), this._setElementAttributes("body", "paddingRight", function (e) {
            return e + t._scrollbarWidth;
          })), document.body.classList.add(Io);
        }, o._setElementAttributes = function (t, e, o) {
          je(t).forEach(function (t) {
            var r = t.style[e],
                n = window.getComputedStyle(t)[e];
            ze.setDataAttribute(t, e, r), t.style[e] = o(Number.parseFloat(n)) + "px";
          });
        }, o._resetScrollbar = function () {
          this._resetElementAttributes(Wo, "paddingRight"), this._resetElementAttributes(qo, "marginRight"), this._resetElementAttributes("body", "paddingRight");
        }, o._resetElementAttributes = function (t, e) {
          je(t).forEach(function (t) {
            var o = ze.getDataAttribute(t, e);
            void 0 === o && t === document.body ? t.style[e] = "" : (ze.removeDataAttribute(t, e), t.style[e] = o);
          });
        }, o._getScrollbarWidth = function () {
          var t = document.createElement("div");
          t.className = "modal-scrollbar-measure", document.body.appendChild(t);
          var e = t.getBoundingClientRect().width - t.clientWidth;
          return document.body.removeChild(t), e;
        }, e.jQueryInterface = function (t, o) {
          return this.each(function () {
            var r = ne(this, Ao),
                n = Nt({}, jo, ze.getDataAttributes(this), "object" == _typeof(t) && t ? t : {});

            if (r || (r = new e(this, n)), "string" == typeof t) {
              if (void 0 === r[t]) throw new TypeError('No method named "' + t + '"');
              r[t](o);
            }
          });
        }, Dt(e, null, [{
          key: "Default",
          get: function get() {
            return jo;
          }
        }, {
          key: "DATA_KEY",
          get: function get() {
            return Ao;
          }
        }]), e;
      }(ve);

      xe.on(document, "click.bs.modal.data-api", '[data-bs-toggle="modal"]', function (t) {
        var e = this,
            o = Ut(this);
        "A" !== this.tagName && "AREA" !== this.tagName || t.preventDefault(), xe.one(o, Oo, function (t) {
          t.defaultPrevented || xe.one(o, Co, function () {
            Qt(e) && e.focus();
          });
        });
        var r = ne(o, Ao);

        if (!r) {
          var n = Nt({}, ze.getDataAttributes(o), ze.getDataAttributes(this));
          r = new Uo(o, n);
        }

        r.toggle(this);
      }), ee(To, Uo);
      var Ko = new Set(["background", "cite", "href", "itemtype", "longdesc", "poster", "src", "xlink:href"]),
          Fo = /^(?:(?:https?|mailto|ftp|tel|file):|[^#&/:?]*(?:[#/?]|$))/gi,
          Yo = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i;

      function Xo(t, e, o) {
        var r;
        if (!t.length) return t;
        if (o && "function" == typeof o) return o(t);

        for (var n = new window.DOMParser().parseFromString(t, "text/html"), i = Object.keys(e), a = (r = []).concat.apply(r, n.body.querySelectorAll("*")), l = function l(t, o) {
          var r,
              n = a[t],
              l = n.nodeName.toLowerCase();
          if (!i.includes(l)) return n.parentNode.removeChild(n), "continue";
          var d = (r = []).concat.apply(r, n.attributes),
              s = [].concat(e["*"] || [], e[l] || []);
          d.forEach(function (t) {
            (function (t, e) {
              var o = t.nodeName.toLowerCase();
              if (e.includes(o)) return !Ko.has(o) || Boolean(Fo.test(t.nodeValue) || Yo.test(t.nodeValue));

              for (var r = e.filter(function (t) {
                return t instanceof RegExp;
              }), n = 0, i = r.length; n < i; n++) {
                if (r[n].test(o)) return !0;
              }

              return !1;
            })(t, s) || n.removeAttribute(t.nodeName);
          });
        }, d = 0, s = a.length; d < s; d++) {
          l(d);
        }

        return n.body.innerHTML;
      }

      var Vo = "tooltip",
          Qo = "bs.tooltip",
          $o = new RegExp("(^|\\s)bs-tooltip\\S+", "g"),
          Zo = new Set(["sanitize", "allowList", "sanitizeFn"]),
          Jo = {
        animation: "boolean",
        template: "string",
        title: "(string|element|function)",
        trigger: "string",
        delay: "(number|object)",
        html: "boolean",
        selector: "(string|boolean)",
        placement: "(string|function)",
        offset: "(array|string|function)",
        container: "(string|element|boolean)",
        fallbackPlacements: "array",
        boundary: "(string|element)",
        customClass: "(string|function)",
        sanitize: "boolean",
        sanitizeFn: "(null|function)",
        allowList: "object",
        popperConfig: "(null|object|function)"
      },
          Go = {
        AUTO: "auto",
        TOP: "top",
        RIGHT: te ? "left" : "right",
        BOTTOM: "bottom",
        LEFT: te ? "right" : "left"
      },
          tr = {
        animation: !0,
        template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
        trigger: "hover focus",
        title: "",
        delay: 0,
        html: !1,
        selector: !1,
        placement: "top",
        offset: [0, 0],
        container: !1,
        fallbackPlacements: ["top", "right", "bottom", "left"],
        boundary: "clippingParents",
        customClass: "",
        sanitize: !0,
        sanitizeFn: null,
        allowList: {
          "*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i],
          a: ["target", "href", "title", "rel"],
          area: [],
          b: [],
          br: [],
          col: [],
          code: [],
          div: [],
          em: [],
          hr: [],
          h1: [],
          h2: [],
          h3: [],
          h4: [],
          h5: [],
          h6: [],
          i: [],
          img: ["src", "srcset", "alt", "title", "width", "height"],
          li: [],
          ol: [],
          p: [],
          pre: [],
          s: [],
          small: [],
          span: [],
          sub: [],
          sup: [],
          strong: [],
          u: [],
          ul: []
        },
        popperConfig: null
      },
          er = {
        HIDE: "hide.bs.tooltip",
        HIDDEN: "hidden.bs.tooltip",
        SHOW: "show.bs.tooltip",
        SHOWN: "shown.bs.tooltip",
        INSERTED: "inserted.bs.tooltip",
        CLICK: "click.bs.tooltip",
        FOCUSIN: "focusin.bs.tooltip",
        FOCUSOUT: "focusout.bs.tooltip",
        MOUSEENTER: "mouseenter.bs.tooltip",
        MOUSELEAVE: "mouseleave.bs.tooltip"
      },
          or = "fade",
          rr = "show",
          nr = "show",
          ir = "out",
          ar = "hover",
          lr = "focus",
          dr = function (t) {
        function e(e, o) {
          var n;
          if (void 0 === r) throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)");
          return (n = t.call(this, e) || this)._isEnabled = !0, n._timeout = 0, n._hoverState = "", n._activeTrigger = {}, n._popper = null, n.config = n._getConfig(o), n.tip = null, n._setListeners(), n;
        }

        Mt(e, t);
        var o = e.prototype;
        return o.enable = function () {
          this._isEnabled = !0;
        }, o.disable = function () {
          this._isEnabled = !1;
        }, o.toggleEnabled = function () {
          this._isEnabled = !this._isEnabled;
        }, o.toggle = function (t) {
          if (this._isEnabled) if (t) {
            var e = this._initializeOnDelegatedTarget(t);

            e._activeTrigger.click = !e._activeTrigger.click, e._isWithActiveTrigger() ? e._enter(null, e) : e._leave(null, e);
          } else {
            if (this.getTipElement().classList.contains(rr)) return void this._leave(null, this);

            this._enter(null, this);
          }
        }, o.dispose = function () {
          clearTimeout(this._timeout), xe.off(this._element, this.constructor.EVENT_KEY), xe.off(this._element.closest(".modal"), "hide.bs.modal", this._hideModalHandler), this.tip && this.tip.parentNode && this.tip.parentNode.removeChild(this.tip), this._isEnabled = null, this._timeout = null, this._hoverState = null, this._activeTrigger = null, this._popper && this._popper.destroy(), this._popper = null, this.config = null, this.tip = null, t.prototype.dispose.call(this);
        }, o.show = function () {
          var t = this;
          if ("none" === this._element.style.display) throw new Error("Please use show on visible elements");

          if (this.isWithContent() && this._isEnabled) {
            var e = xe.trigger(this._element, this.constructor.Event.SHOW),
                o = $t(this._element),
                r = null === o ? this._element.ownerDocument.documentElement.contains(this._element) : o.contains(this._element);

            if (!e.defaultPrevented && r) {
              var n = this.getTipElement(),
                  i = Rt(this.constructor.NAME);
              n.setAttribute("id", i), this._element.setAttribute("aria-describedby", i), this.setContent(), this.config.animation && n.classList.add(or);

              var a = "function" == typeof this.config.placement ? this.config.placement.call(this, n, this._element) : this.config.placement,
                  l = this._getAttachment(a);

              this._addAttachmentClass(l);

              var d = this._getContainer();

              re(n, this.constructor.DATA_KEY, this), this._element.ownerDocument.documentElement.contains(this.tip) || d.appendChild(n), xe.trigger(this._element, this.constructor.Event.INSERTED), this._popper = Ct(this._element, n, this._getPopperConfig(l)), n.classList.add(rr);
              var s,
                  m,
                  c = "function" == typeof this.config.customClass ? this.config.customClass() : this.config.customClass;
              c && (s = n.classList).add.apply(s, c.split(" ")), "ontouchstart" in document.documentElement && (m = []).concat.apply(m, document.body.children).forEach(function (t) {
                xe.on(t, "mouseover", function () {});
              });

              var p = function p() {
                var e = t._hoverState;
                t._hoverState = null, xe.trigger(t._element, t.constructor.Event.SHOWN), e === ir && t._leave(null, t);
              };

              if (this.tip.classList.contains(or)) {
                var g = Kt(this.tip);
                xe.one(this.tip, "transitionend", p), Xt(this.tip, g);
              } else p();
            }
          }
        }, o.hide = function () {
          var t = this;

          if (this._popper) {
            var e = this.getTipElement(),
                o = function o() {
              t._hoverState !== nr && e.parentNode && e.parentNode.removeChild(e), t._cleanTipClass(), t._element.removeAttribute("aria-describedby"), xe.trigger(t._element, t.constructor.Event.HIDDEN), t._popper && (t._popper.destroy(), t._popper = null);
            };

            if (!xe.trigger(this._element, this.constructor.Event.HIDE).defaultPrevented) {
              var r;

              if (e.classList.remove(rr), "ontouchstart" in document.documentElement && (r = []).concat.apply(r, document.body.children).forEach(function (t) {
                return xe.off(t, "mouseover", Zt);
              }), this._activeTrigger.click = !1, this._activeTrigger.focus = !1, this._activeTrigger.hover = !1, this.tip.classList.contains(or)) {
                var n = Kt(e);
                xe.one(e, "transitionend", o), Xt(e, n);
              } else o();

              this._hoverState = "";
            }
          }
        }, o.update = function () {
          null !== this._popper && this._popper.update();
        }, o.isWithContent = function () {
          return Boolean(this.getTitle());
        }, o.getTipElement = function () {
          if (this.tip) return this.tip;
          var t = document.createElement("div");
          return t.innerHTML = this.config.template, this.tip = t.children[0], this.tip;
        }, o.setContent = function () {
          var t = this.getTipElement();
          this.setElementContent(Le(".tooltip-inner", t), this.getTitle()), t.classList.remove(or, rr);
        }, o.setElementContent = function (t, e) {
          if (null !== t) return "object" == _typeof(e) && Yt(e) ? (e.jquery && (e = e[0]), void (this.config.html ? e.parentNode !== t && (t.innerHTML = "", t.appendChild(e)) : t.textContent = e.textContent)) : void (this.config.html ? (this.config.sanitize && (e = Xo(e, this.config.allowList, this.config.sanitizeFn)), t.innerHTML = e) : t.textContent = e);
        }, o.getTitle = function () {
          var t = this._element.getAttribute("data-bs-original-title");

          return t || (t = "function" == typeof this.config.title ? this.config.title.call(this._element) : this.config.title), t;
        }, o.updateAttachment = function (t) {
          return "right" === t ? "end" : "left" === t ? "start" : t;
        }, o._initializeOnDelegatedTarget = function (t, e) {
          var o = this.constructor.DATA_KEY;
          return (e = e || ne(t.delegateTarget, o)) || (e = new this.constructor(t.delegateTarget, this._getDelegateConfig()), re(t.delegateTarget, o, e)), e;
        }, o._getOffset = function () {
          var t = this,
              e = this.config.offset;
          return "string" == typeof e ? e.split(",").map(function (t) {
            return Number.parseInt(t, 10);
          }) : "function" == typeof e ? function (o) {
            return e(o, t._element);
          } : e;
        }, o._getPopperConfig = function (t) {
          var e = this,
              o = {
            placement: t,
            modifiers: [{
              name: "flip",
              options: {
                altBoundary: !0,
                fallbackPlacements: this.config.fallbackPlacements
              }
            }, {
              name: "offset",
              options: {
                offset: this._getOffset()
              }
            }, {
              name: "preventOverflow",
              options: {
                boundary: this.config.boundary
              }
            }, {
              name: "arrow",
              options: {
                element: "." + this.constructor.NAME + "-arrow"
              }
            }, {
              name: "onChange",
              enabled: !0,
              phase: "afterWrite",
              fn: function fn(t) {
                return e._handlePopperPlacementChange(t);
              }
            }],
            onFirstUpdate: function onFirstUpdate(t) {
              t.options.placement !== t.placement && e._handlePopperPlacementChange(t);
            }
          };
          return Nt({}, o, "function" == typeof this.config.popperConfig ? this.config.popperConfig(o) : this.config.popperConfig);
        }, o._addAttachmentClass = function (t) {
          this.getTipElement().classList.add("bs-tooltip-" + this.updateAttachment(t));
        }, o._getContainer = function () {
          return !1 === this.config.container ? document.body : Yt(this.config.container) ? this.config.container : Le(this.config.container);
        }, o._getAttachment = function (t) {
          return Go[t.toUpperCase()];
        }, o._setListeners = function () {
          var t = this;
          this.config.trigger.split(" ").forEach(function (e) {
            if ("click" === e) xe.on(t._element, t.constructor.Event.CLICK, t.config.selector, function (e) {
              return t.toggle(e);
            });else if ("manual" !== e) {
              var o = e === ar ? t.constructor.Event.MOUSEENTER : t.constructor.Event.FOCUSIN,
                  r = e === ar ? t.constructor.Event.MOUSELEAVE : t.constructor.Event.FOCUSOUT;
              xe.on(t._element, o, t.config.selector, function (e) {
                return t._enter(e);
              }), xe.on(t._element, r, t.config.selector, function (e) {
                return t._leave(e);
              });
            }
          }), this._hideModalHandler = function () {
            t._element && t.hide();
          }, xe.on(this._element.closest(".modal"), "hide.bs.modal", this._hideModalHandler), this.config.selector ? this.config = Nt({}, this.config, {
            trigger: "manual",
            selector: ""
          }) : this._fixTitle();
        }, o._fixTitle = function () {
          var t = this._element.getAttribute("title"),
              e = _typeof(this._element.getAttribute("data-bs-original-title"));

          (t || "string" !== e) && (this._element.setAttribute("data-bs-original-title", t || ""), !t || this._element.getAttribute("aria-label") || this._element.textContent || this._element.setAttribute("aria-label", t), this._element.setAttribute("title", ""));
        }, o._enter = function (t, e) {
          e = this._initializeOnDelegatedTarget(t, e), t && (e._activeTrigger["focusin" === t.type ? lr : ar] = !0), e.getTipElement().classList.contains(rr) || e._hoverState === nr ? e._hoverState = nr : (clearTimeout(e._timeout), e._hoverState = nr, e.config.delay && e.config.delay.show ? e._timeout = setTimeout(function () {
            e._hoverState === nr && e.show();
          }, e.config.delay.show) : e.show());
        }, o._leave = function (t, e) {
          e = this._initializeOnDelegatedTarget(t, e), t && (e._activeTrigger["focusout" === t.type ? lr : ar] = !1), e._isWithActiveTrigger() || (clearTimeout(e._timeout), e._hoverState = ir, e.config.delay && e.config.delay.hide ? e._timeout = setTimeout(function () {
            e._hoverState === ir && e.hide();
          }, e.config.delay.hide) : e.hide());
        }, o._isWithActiveTrigger = function () {
          for (var t in this._activeTrigger) {
            if (this._activeTrigger[t]) return !0;
          }

          return !1;
        }, o._getConfig = function (t) {
          var e = ze.getDataAttributes(this._element);
          return Object.keys(e).forEach(function (t) {
            Zo.has(t) && delete e[t];
          }), t && "object" == _typeof(t.container) && t.container.jquery && (t.container = t.container[0]), "number" == typeof (t = Nt({}, this.constructor.Default, e, "object" == _typeof(t) && t ? t : {})).delay && (t.delay = {
            show: t.delay,
            hide: t.delay
          }), "number" == typeof t.title && (t.title = t.title.toString()), "number" == typeof t.content && (t.content = t.content.toString()), Vt(Vo, t, this.constructor.DefaultType), t.sanitize && (t.template = Xo(t.template, t.allowList, t.sanitizeFn)), t;
        }, o._getDelegateConfig = function () {
          var t = {};
          if (this.config) for (var e in this.config) {
            this.constructor.Default[e] !== this.config[e] && (t[e] = this.config[e]);
          }
          return t;
        }, o._cleanTipClass = function () {
          var t = this.getTipElement(),
              e = t.getAttribute("class").match($o);
          null !== e && e.length > 0 && e.map(function (t) {
            return t.trim();
          }).forEach(function (e) {
            return t.classList.remove(e);
          });
        }, o._handlePopperPlacementChange = function (t) {
          var e = t.state;
          e && (this.tip = e.elements.popper, this._cleanTipClass(), this._addAttachmentClass(this._getAttachment(e.placement)));
        }, e.jQueryInterface = function (t) {
          return this.each(function () {
            var o = ne(this, Qo),
                r = "object" == _typeof(t) && t;

            if ((o || !/dispose|hide/.test(t)) && (o || (o = new e(this, r)), "string" == typeof t)) {
              if (void 0 === o[t]) throw new TypeError('No method named "' + t + '"');
              o[t]();
            }
          });
        }, Dt(e, null, [{
          key: "Default",
          get: function get() {
            return tr;
          }
        }, {
          key: "NAME",
          get: function get() {
            return Vo;
          }
        }, {
          key: "DATA_KEY",
          get: function get() {
            return Qo;
          }
        }, {
          key: "Event",
          get: function get() {
            return er;
          }
        }, {
          key: "EVENT_KEY",
          get: function get() {
            return ".bs.tooltip";
          }
        }, {
          key: "DefaultType",
          get: function get() {
            return Jo;
          }
        }]), e;
      }(ve);

      ee(Vo, dr);

      var sr = "popover",
          mr = "bs.popover",
          cr = new RegExp("(^|\\s)bs-popover\\S+", "g"),
          pr = Nt({}, dr.Default, {
        placement: "right",
        offset: [0, 8],
        trigger: "click",
        content: "",
        template: '<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'
      }),
          gr = Nt({}, dr.DefaultType, {
        content: "(string|element|function)"
      }),
          fr = {
        HIDE: "hide.bs.popover",
        HIDDEN: "hidden.bs.popover",
        SHOW: "show.bs.popover",
        SHOWN: "shown.bs.popover",
        INSERTED: "inserted.bs.popover",
        CLICK: "click.bs.popover",
        FOCUSIN: "focusin.bs.popover",
        FOCUSOUT: "focusout.bs.popover",
        MOUSEENTER: "mouseenter.bs.popover",
        MOUSELEAVE: "mouseleave.bs.popover"
      },
          ur = function (t) {
        function e() {
          return t.apply(this, arguments) || this;
        }

        Mt(e, t);
        var o = e.prototype;
        return o.isWithContent = function () {
          return this.getTitle() || this._getContent();
        }, o.setContent = function () {
          var t = this.getTipElement();
          this.setElementContent(Le(".popover-header", t), this.getTitle());

          var e = this._getContent();

          "function" == typeof e && (e = e.call(this._element)), this.setElementContent(Le(".popover-body", t), e), t.classList.remove("fade", "show");
        }, o._addAttachmentClass = function (t) {
          this.getTipElement().classList.add("bs-popover-" + this.updateAttachment(t));
        }, o._getContent = function () {
          return this._element.getAttribute("data-bs-content") || this.config.content;
        }, o._cleanTipClass = function () {
          var t = this.getTipElement(),
              e = t.getAttribute("class").match(cr);
          null !== e && e.length > 0 && e.map(function (t) {
            return t.trim();
          }).forEach(function (e) {
            return t.classList.remove(e);
          });
        }, e.jQueryInterface = function (t) {
          return this.each(function () {
            var o = ne(this, mr),
                r = "object" == _typeof(t) ? t : null;

            if ((o || !/dispose|hide/.test(t)) && (o || (o = new e(this, r), re(this, mr, o)), "string" == typeof t)) {
              if (void 0 === o[t]) throw new TypeError('No method named "' + t + '"');
              o[t]();
            }
          });
        }, Dt(e, null, [{
          key: "Default",
          get: function get() {
            return pr;
          }
        }, {
          key: "NAME",
          get: function get() {
            return sr;
          }
        }, {
          key: "DATA_KEY",
          get: function get() {
            return mr;
          }
        }, {
          key: "Event",
          get: function get() {
            return fr;
          }
        }, {
          key: "EVENT_KEY",
          get: function get() {
            return ".bs.popover";
          }
        }, {
          key: "DefaultType",
          get: function get() {
            return gr;
          }
        }]), e;
      }(dr);

      ee(sr, ur);

      var br = "scrollspy",
          hr = "bs.scrollspy",
          xr = {
        offset: 10,
        method: "auto",
        target: ""
      },
          vr = {
        offset: "number",
        method: "string",
        target: "(string|element)"
      },
          wr = "dropdown-item",
          yr = "active",
          kr = "position",
          _r = function (t) {
        function e(e, o) {
          var r;
          return (r = t.call(this, e) || this)._scrollElement = "BODY" === e.tagName ? window : e, r._config = r._getConfig(o), r._selector = r._config.target + " .nav-link, " + r._config.target + " .list-group-item, " + r._config.target + " ." + wr, r._offsets = [], r._targets = [], r._activeTarget = null, r._scrollHeight = 0, xe.on(r._scrollElement, "scroll.bs.scrollspy", function () {
            return r._process();
          }), r.refresh(), r._process(), r;
        }

        Mt(e, t);
        var o = e.prototype;
        return o.refresh = function () {
          var t = this,
              e = this._scrollElement === this._scrollElement.window ? "offset" : kr,
              o = "auto" === this._config.method ? e : this._config.method,
              r = o === kr ? this._getScrollTop() : 0;
          this._offsets = [], this._targets = [], this._scrollHeight = this._getScrollHeight(), je(this._selector).map(function (t) {
            var e = qt(t),
                n = e ? Le(e) : null;

            if (n) {
              var i = n.getBoundingClientRect();
              if (i.width || i.height) return [ze[o](n).top + r, e];
            }

            return null;
          }).filter(function (t) {
            return t;
          }).sort(function (t, e) {
            return t[0] - e[0];
          }).forEach(function (e) {
            t._offsets.push(e[0]), t._targets.push(e[1]);
          });
        }, o.dispose = function () {
          t.prototype.dispose.call(this), xe.off(this._scrollElement, ".bs.scrollspy"), this._scrollElement = null, this._config = null, this._selector = null, this._offsets = null, this._targets = null, this._activeTarget = null, this._scrollHeight = null;
        }, o._getConfig = function (t) {
          if ("string" != typeof (t = Nt({}, xr, "object" == _typeof(t) && t ? t : {})).target && Yt(t.target)) {
            var e = t.target.id;
            e || (e = Rt(br), t.target.id = e), t.target = "#" + e;
          }

          return Vt(br, t, vr), t;
        }, o._getScrollTop = function () {
          return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop;
        }, o._getScrollHeight = function () {
          return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);
        }, o._getOffsetHeight = function () {
          return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height;
        }, o._process = function () {
          var t = this._getScrollTop() + this._config.offset,
              e = this._getScrollHeight(),
              o = this._config.offset + e - this._getOffsetHeight();

          if (this._scrollHeight !== e && this.refresh(), t >= o) {
            var r = this._targets[this._targets.length - 1];
            this._activeTarget !== r && this._activate(r);
          } else {
            if (this._activeTarget && t < this._offsets[0] && this._offsets[0] > 0) return this._activeTarget = null, void this._clear();

            for (var n = this._offsets.length; n--;) {
              this._activeTarget !== this._targets[n] && t >= this._offsets[n] && (void 0 === this._offsets[n + 1] || t < this._offsets[n + 1]) && this._activate(this._targets[n]);
            }
          }
        }, o._activate = function (t) {
          this._activeTarget = t, this._clear();

          var e = this._selector.split(",").map(function (e) {
            return e + '[data-bs-target="' + t + '"],' + e + '[href="' + t + '"]';
          }),
              o = Le(e.join(","));

          o.classList.contains(wr) ? (Le(".dropdown-toggle", o.closest(".dropdown")).classList.add(yr), o.classList.add(yr)) : (o.classList.add(yr), function (t, e) {
            for (var o = [], r = t.parentNode; r && r.nodeType === Node.ELEMENT_NODE && 3 !== r.nodeType;) {
              r.matches(e) && o.push(r), r = r.parentNode;
            }

            return o;
          }(o, ".nav, .list-group").forEach(function (t) {
            Oe(t, ".nav-link, .list-group-item").forEach(function (t) {
              return t.classList.add(yr);
            }), Oe(t, ".nav-item").forEach(function (t) {
              Ce(t, ".nav-link").forEach(function (t) {
                return t.classList.add(yr);
              });
            });
          })), xe.trigger(this._scrollElement, "activate.bs.scrollspy", {
            relatedTarget: t
          });
        }, o._clear = function () {
          je(this._selector).filter(function (t) {
            return t.classList.contains(yr);
          }).forEach(function (t) {
            return t.classList.remove(yr);
          });
        }, e.jQueryInterface = function (t) {
          return this.each(function () {
            var o = ne(this, hr);

            if (o || (o = new e(this, "object" == _typeof(t) && t)), "string" == typeof t) {
              if (void 0 === o[t]) throw new TypeError('No method named "' + t + '"');
              o[t]();
            }
          });
        }, Dt(e, null, [{
          key: "Default",
          get: function get() {
            return xr;
          }
        }, {
          key: "DATA_KEY",
          get: function get() {
            return hr;
          }
        }]), e;
      }(ve);

      xe.on(window, "load.bs.scrollspy.data-api", function () {
        je('[data-bs-spy="scroll"]').forEach(function (t) {
          return new _r(t, ze.getDataAttributes(t));
        });
      }), ee(br, _r);

      var Er = "bs.tab",
          Tr = "active",
          Ar = "fade",
          zr = "show",
          jr = ".active",
          Lr = ":scope > li > .active",
          Cr = function (t) {
        function e() {
          return t.apply(this, arguments) || this;
        }

        Mt(e, t);
        var o = e.prototype;
        return o.show = function () {
          var t = this;

          if (!(this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && this._element.classList.contains(Tr) || this._element.classList.contains("disabled"))) {
            var e,
                o = Ut(this._element),
                r = this._element.closest(".nav, .list-group");

            if (r) {
              var n = "UL" === r.nodeName || "OL" === r.nodeName ? Lr : jr;
              e = (e = je(n, r))[e.length - 1];
            }

            var i = e ? xe.trigger(e, "hide.bs.tab", {
              relatedTarget: this._element
            }) : null;

            if (!(xe.trigger(this._element, "show.bs.tab", {
              relatedTarget: e
            }).defaultPrevented || null !== i && i.defaultPrevented)) {
              this._activate(this._element, r);

              var a = function a() {
                xe.trigger(e, "hidden.bs.tab", {
                  relatedTarget: t._element
                }), xe.trigger(t._element, "shown.bs.tab", {
                  relatedTarget: e
                });
              };

              o ? this._activate(o, o.parentNode, a) : a();
            }
          }
        }, o._activate = function (t, e, o) {
          var r = this,
              n = (!e || "UL" !== e.nodeName && "OL" !== e.nodeName ? Ce(e, jr) : je(Lr, e))[0],
              i = o && n && n.classList.contains(Ar),
              a = function a() {
            return r._transitionComplete(t, n, o);
          };

          if (n && i) {
            var l = Kt(n);
            n.classList.remove(zr), xe.one(n, "transitionend", a), Xt(n, l);
          } else a();
        }, o._transitionComplete = function (t, e, o) {
          if (e) {
            e.classList.remove(Tr);
            var r = Le(":scope > .dropdown-menu .active", e.parentNode);
            r && r.classList.remove(Tr), "tab" === e.getAttribute("role") && e.setAttribute("aria-selected", !1);
          }

          t.classList.add(Tr), "tab" === t.getAttribute("role") && t.setAttribute("aria-selected", !0), Jt(t), t.classList.contains(Ar) && t.classList.add(zr), t.parentNode && t.parentNode.classList.contains("dropdown-menu") && (t.closest(".dropdown") && je(".dropdown-toggle").forEach(function (t) {
            return t.classList.add(Tr);
          }), t.setAttribute("aria-expanded", !0)), o && o();
        }, e.jQueryInterface = function (t) {
          return this.each(function () {
            var o = ne(this, Er) || new e(this);

            if ("string" == typeof t) {
              if (void 0 === o[t]) throw new TypeError('No method named "' + t + '"');
              o[t]();
            }
          });
        }, Dt(e, null, [{
          key: "DATA_KEY",
          get: function get() {
            return Er;
          }
        }]), e;
      }(ve);

      xe.on(document, "click.bs.tab.data-api", '[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]', function (t) {
        t.preventDefault(), (ne(this, Er) || new Cr(this)).show();
      }), ee("tab", Cr);

      var Or = "toast",
          Sr = "bs.toast",
          Dr = "click.dismiss.bs.toast",
          Nr = "hide",
          Mr = "show",
          Pr = "showing",
          Ir = {
        animation: "boolean",
        autohide: "boolean",
        delay: "number"
      },
          Br = {
        animation: !0,
        autohide: !0,
        delay: 5e3
      },
          Hr = function (t) {
        function e(e, o) {
          var r;
          return (r = t.call(this, e) || this)._config = r._getConfig(o), r._timeout = null, r._setListeners(), r;
        }

        Mt(e, t);
        var o = e.prototype;
        return o.show = function () {
          var t = this;

          if (!xe.trigger(this._element, "show.bs.toast").defaultPrevented) {
            this._clearTimeout(), this._config.animation && this._element.classList.add("fade");

            var e = function e() {
              t._element.classList.remove(Pr), t._element.classList.add(Mr), xe.trigger(t._element, "shown.bs.toast"), t._config.autohide && (t._timeout = setTimeout(function () {
                t.hide();
              }, t._config.delay));
            };

            if (this._element.classList.remove(Nr), Jt(this._element), this._element.classList.add(Pr), this._config.animation) {
              var o = Kt(this._element);
              xe.one(this._element, "transitionend", e), Xt(this._element, o);
            } else e();
          }
        }, o.hide = function () {
          var t = this;

          if (this._element.classList.contains(Mr) && !xe.trigger(this._element, "hide.bs.toast").defaultPrevented) {
            var e = function e() {
              t._element.classList.add(Nr), xe.trigger(t._element, "hidden.bs.toast");
            };

            if (this._element.classList.remove(Mr), this._config.animation) {
              var o = Kt(this._element);
              xe.one(this._element, "transitionend", e), Xt(this._element, o);
            } else e();
          }
        }, o.dispose = function () {
          this._clearTimeout(), this._element.classList.contains(Mr) && this._element.classList.remove(Mr), xe.off(this._element, Dr), t.prototype.dispose.call(this), this._config = null;
        }, o._getConfig = function (t) {
          return t = Nt({}, Br, ze.getDataAttributes(this._element), "object" == _typeof(t) && t ? t : {}), Vt(Or, t, this.constructor.DefaultType), t;
        }, o._setListeners = function () {
          var t = this;
          xe.on(this._element, Dr, '[data-bs-dismiss="toast"]', function () {
            return t.hide();
          });
        }, o._clearTimeout = function () {
          clearTimeout(this._timeout), this._timeout = null;
        }, e.jQueryInterface = function (t) {
          return this.each(function () {
            var o = ne(this, Sr);

            if (o || (o = new e(this, "object" == _typeof(t) && t)), "string" == typeof t) {
              if (void 0 === o[t]) throw new TypeError('No method named "' + t + '"');
              o[t](this);
            }
          });
        }, Dt(e, null, [{
          key: "DefaultType",
          get: function get() {
            return Ir;
          }
        }, {
          key: "Default",
          get: function get() {
            return Br;
          }
        }, {
          key: "DATA_KEY",
          get: function get() {
            return Sr;
          }
        }]), e;
      }(ve);

      ee(Or, Hr);
    },
    807: function _(t, e, o) {
      "use strict";

      o.d(e, {
        Z: function Z() {
          return i;
        }
      });
      var r = o(645),
          n = o.n(r)()(function (t) {
        return t[1];
      });
      n.push([t.id, "/*!\n * Bootstrap v5.0.0-beta2 (https://getbootstrap.com/)\n * Copyright 2011-2021 The Bootstrap Authors\n * Copyright 2011-2021 Twitter, Inc.\n * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)\n */:root{--bs-blue: #0d6efd;--bs-indigo: #6610f2;--bs-purple: #6f42c1;--bs-pink: #d63384;--bs-red: #dc3545;--bs-orange: #fd7e14;--bs-yellow: #ffc107;--bs-green: #198754;--bs-teal: #20c997;--bs-cyan: #0dcaf0;--bs-white: #fff;--bs-gray: #6c757d;--bs-gray-dark: #343a40;--bs-primary: #0d6efd;--bs-secondary: #6c757d;--bs-success: #198754;--bs-info: #0dcaf0;--bs-warning: #ffc107;--bs-danger: #dc3545;--bs-light: #f8f9fa;--bs-dark: #212529;--bs-font-sans-serif: system-ui, -apple-system, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", \"Liberation Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\";--bs-font-monospace: SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace;--bs-gradient: linear-gradient(180deg, rgba(255,255,255,0.15), rgba(255,255,255,0))}*,*::before,*::after{box-sizing:border-box}@media (prefers-reduced-motion: no-preference){:root{scroll-behavior:smooth}}body{margin:0;font-family:var(--bs-font-sans-serif);font-size:1rem;font-weight:400;line-height:1.5;color:#212529;background-color:#fff;-webkit-text-size-adjust:100%;-webkit-tap-highlight-color:rgba(0,0,0,0)}[tabindex=\"-1\"]:focus:not(:focus-visible){outline:0 !important}hr{margin:1rem 0;color:inherit;background-color:currentColor;border:0;opacity:.25}hr:not([size]){height:1px}h1,.h1,h2,.h2,h3,.h3,h4,.h4,h5,.h5,h6,.h6{margin-top:0;margin-bottom:.5rem;font-weight:500;line-height:1.2}h1,.h1{font-size:calc(1.375rem + 1.5vw)}@media (min-width: 1200px){h1,.h1{font-size:2.5rem}}h2,.h2{font-size:calc(1.325rem + .9vw)}@media (min-width: 1200px){h2,.h2{font-size:2rem}}h3,.h3{font-size:calc(1.3rem + .6vw)}@media (min-width: 1200px){h3,.h3{font-size:1.75rem}}h4,.h4{font-size:calc(1.275rem + .3vw)}@media (min-width: 1200px){h4,.h4{font-size:1.5rem}}h5,.h5{font-size:1.25rem}h6,.h6{font-size:1rem}p{margin-top:0;margin-bottom:1rem}abbr[title],abbr[data-bs-original-title]{text-decoration:underline;text-decoration:underline dotted;cursor:help;text-decoration-skip-ink:none}address{margin-bottom:1rem;font-style:normal;line-height:inherit}ol,ul{padding-left:2rem}ol,ul,dl{margin-top:0;margin-bottom:1rem}ol ol,ul ul,ol ul,ul ol{margin-bottom:0}dt{font-weight:700}dd{margin-bottom:.5rem;margin-left:0}blockquote{margin:0 0 1rem}b,strong{font-weight:bolder}small,.small{font-size:.875em}mark,.mark{padding:.2em;background-color:#fcf8e3}sub,sup{position:relative;font-size:.75em;line-height:0;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}a{color:#0d6efd;text-decoration:underline}a:hover{color:#0a58ca}a:not([href]):not([class]),a:not([href]):not([class]):hover{color:inherit;text-decoration:none}pre,code,kbd,samp{font-family:var(--bs-font-monospace);font-size:1em;direction:ltr /* rtl:ignore */;unicode-bidi:bidi-override}pre{display:block;margin-top:0;margin-bottom:1rem;overflow:auto;font-size:.875em}pre code{font-size:inherit;color:inherit;word-break:normal}code{font-size:.875em;color:#d63384;word-wrap:break-word}a>code{color:inherit}kbd{padding:.2rem .4rem;font-size:.875em;color:#fff;background-color:#212529;border-radius:.2rem}kbd kbd{padding:0;font-size:1em;font-weight:700}figure{margin:0 0 1rem}img,svg{vertical-align:middle}table{caption-side:bottom;border-collapse:collapse}caption{padding-top:.5rem;padding-bottom:.5rem;color:#6c757d;text-align:left}th{text-align:inherit;text-align:-webkit-match-parent}thead,tbody,tfoot,tr,td,th{border-color:inherit;border-style:solid;border-width:0}label{display:inline-block}button{border-radius:0}button:focus:not(:focus-visible){outline:0}input,button,select,optgroup,textarea{margin:0;font-family:inherit;font-size:inherit;line-height:inherit}button,select{text-transform:none}[role=\"button\"]{cursor:pointer}select{word-wrap:normal}[list]::-webkit-calendar-picker-indicator{display:none}button,[type=\"button\"],[type=\"reset\"],[type=\"submit\"]{-webkit-appearance:button}button:not(:disabled),[type=\"button\"]:not(:disabled),[type=\"reset\"]:not(:disabled),[type=\"submit\"]:not(:disabled){cursor:pointer}::-moz-focus-inner{padding:0;border-style:none}textarea{resize:vertical}fieldset{min-width:0;padding:0;margin:0;border:0}legend{float:left;width:100%;padding:0;margin-bottom:.5rem;font-size:calc(1.275rem + .3vw);line-height:inherit}@media (min-width: 1200px){legend{font-size:1.5rem}}legend+*{clear:left}::-webkit-datetime-edit-fields-wrapper,::-webkit-datetime-edit-text,::-webkit-datetime-edit-minute,::-webkit-datetime-edit-hour-field,::-webkit-datetime-edit-day-field,::-webkit-datetime-edit-month-field,::-webkit-datetime-edit-year-field{padding:0}::-webkit-inner-spin-button{height:auto}[type=\"search\"]{outline-offset:-2px;-webkit-appearance:textfield}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-color-swatch-wrapper{padding:0}::file-selector-button{font:inherit}::-webkit-file-upload-button{font:inherit;-webkit-appearance:button}output{display:inline-block}iframe{border:0}summary{display:list-item;cursor:pointer}progress{vertical-align:baseline}[hidden]{display:none !important}.lead{font-size:1.25rem;font-weight:300}.display-1{font-size:calc(1.625rem + 4.5vw);font-weight:300;line-height:1.2}@media (min-width: 1200px){.display-1{font-size:5rem}}.display-2{font-size:calc(1.575rem + 3.9vw);font-weight:300;line-height:1.2}@media (min-width: 1200px){.display-2{font-size:4.5rem}}.display-3{font-size:calc(1.525rem + 3.3vw);font-weight:300;line-height:1.2}@media (min-width: 1200px){.display-3{font-size:4rem}}.display-4{font-size:calc(1.475rem + 2.7vw);font-weight:300;line-height:1.2}@media (min-width: 1200px){.display-4{font-size:3.5rem}}.display-5{font-size:calc(1.425rem + 2.1vw);font-weight:300;line-height:1.2}@media (min-width: 1200px){.display-5{font-size:3rem}}.display-6{font-size:calc(1.375rem + 1.5vw);font-weight:300;line-height:1.2}@media (min-width: 1200px){.display-6{font-size:2.5rem}}.list-unstyled{padding-left:0;list-style:none}.list-inline{padding-left:0;list-style:none}.list-inline-item{display:inline-block}.list-inline-item:not(:last-child){margin-right:.5rem}.initialism{font-size:.875em;text-transform:uppercase}.blockquote{margin-bottom:1rem;font-size:1.25rem}.blockquote>:last-child{margin-bottom:0}.blockquote-footer{margin-top:-1rem;margin-bottom:1rem;font-size:.875em;color:#6c757d}.blockquote-footer::before{content:\"\\2014\\00A0\"}.img-fluid{max-width:100%;height:auto}.img-thumbnail{padding:.25rem;background-color:#fff;border:1px solid #dee2e6;border-radius:.25rem;max-width:100%;height:auto}.figure{display:inline-block}.figure-img{margin-bottom:.5rem;line-height:1}.figure-caption{font-size:.875em;color:#6c757d}.container,.container-fluid,.container-sm,.container-md,.container-lg,.container-xl,.container-xxl{width:100%;padding-right:var(--bs-gutter-x, .75rem);padding-left:var(--bs-gutter-x, .75rem);margin-right:auto;margin-left:auto}@media (min-width: 576px){.container,.container-sm{max-width:540px}}@media (min-width: 768px){.container,.container-sm,.container-md{max-width:720px}}@media (min-width: 992px){.container,.container-sm,.container-md,.container-lg{max-width:960px}}@media (min-width: 1200px){.container,.container-sm,.container-md,.container-lg,.container-xl{max-width:1140px}}@media (min-width: 1400px){.container,.container-sm,.container-md,.container-lg,.container-xl,.container-xxl{max-width:1320px}}.row{--bs-gutter-x: 1.5rem;--bs-gutter-y: 0;display:flex;flex-wrap:wrap;margin-top:calc(var(--bs-gutter-y) * -1);margin-right:calc(var(--bs-gutter-x) / -2);margin-left:calc(var(--bs-gutter-x) / -2)}.row>*{flex-shrink:0;width:100%;max-width:100%;padding-right:calc(var(--bs-gutter-x) / 2);padding-left:calc(var(--bs-gutter-x) / 2);margin-top:var(--bs-gutter-y)}.col{flex:1 0 0%}.row-cols-auto>*{flex:0 0 auto;width:auto}.row-cols-1>*{flex:0 0 auto;width:100%}.row-cols-2>*{flex:0 0 auto;width:50%}.row-cols-3>*{flex:0 0 auto;width:33.33333%}.row-cols-4>*{flex:0 0 auto;width:25%}.row-cols-5>*{flex:0 0 auto;width:20%}.row-cols-6>*{flex:0 0 auto;width:16.66667%}.col-auto{flex:0 0 auto;width:auto}.col-1{flex:0 0 auto;width:8.33333%}.col-2{flex:0 0 auto;width:16.66667%}.col-3{flex:0 0 auto;width:25%}.col-4{flex:0 0 auto;width:33.33333%}.col-5{flex:0 0 auto;width:41.66667%}.col-6{flex:0 0 auto;width:50%}.col-7{flex:0 0 auto;width:58.33333%}.col-8{flex:0 0 auto;width:66.66667%}.col-9{flex:0 0 auto;width:75%}.col-10{flex:0 0 auto;width:83.33333%}.col-11{flex:0 0 auto;width:91.66667%}.col-12{flex:0 0 auto;width:100%}.offset-1{margin-left:8.33333%}.offset-2{margin-left:16.66667%}.offset-3{margin-left:25%}.offset-4{margin-left:33.33333%}.offset-5{margin-left:41.66667%}.offset-6{margin-left:50%}.offset-7{margin-left:58.33333%}.offset-8{margin-left:66.66667%}.offset-9{margin-left:75%}.offset-10{margin-left:83.33333%}.offset-11{margin-left:91.66667%}.g-0,.gx-0{--bs-gutter-x: 0}.g-0,.gy-0{--bs-gutter-y: 0}.g-1,.gx-1{--bs-gutter-x: .25rem}.g-1,.gy-1{--bs-gutter-y: .25rem}.g-2,.gx-2{--bs-gutter-x: .5rem}.g-2,.gy-2{--bs-gutter-y: .5rem}.g-3,.gx-3{--bs-gutter-x: 1rem}.g-3,.gy-3{--bs-gutter-y: 1rem}.g-4,.gx-4{--bs-gutter-x: 1.5rem}.g-4,.gy-4{--bs-gutter-y: 1.5rem}.g-5,.gx-5{--bs-gutter-x: 3rem}.g-5,.gy-5{--bs-gutter-y: 3rem}@media (min-width: 576px){.col-sm{flex:1 0 0%}.row-cols-sm-auto>*{flex:0 0 auto;width:auto}.row-cols-sm-1>*{flex:0 0 auto;width:100%}.row-cols-sm-2>*{flex:0 0 auto;width:50%}.row-cols-sm-3>*{flex:0 0 auto;width:33.33333%}.row-cols-sm-4>*{flex:0 0 auto;width:25%}.row-cols-sm-5>*{flex:0 0 auto;width:20%}.row-cols-sm-6>*{flex:0 0 auto;width:16.66667%}.col-sm-auto{flex:0 0 auto;width:auto}.col-sm-1{flex:0 0 auto;width:8.33333%}.col-sm-2{flex:0 0 auto;width:16.66667%}.col-sm-3{flex:0 0 auto;width:25%}.col-sm-4{flex:0 0 auto;width:33.33333%}.col-sm-5{flex:0 0 auto;width:41.66667%}.col-sm-6{flex:0 0 auto;width:50%}.col-sm-7{flex:0 0 auto;width:58.33333%}.col-sm-8{flex:0 0 auto;width:66.66667%}.col-sm-9{flex:0 0 auto;width:75%}.col-sm-10{flex:0 0 auto;width:83.33333%}.col-sm-11{flex:0 0 auto;width:91.66667%}.col-sm-12{flex:0 0 auto;width:100%}.offset-sm-0{margin-left:0}.offset-sm-1{margin-left:8.33333%}.offset-sm-2{margin-left:16.66667%}.offset-sm-3{margin-left:25%}.offset-sm-4{margin-left:33.33333%}.offset-sm-5{margin-left:41.66667%}.offset-sm-6{margin-left:50%}.offset-sm-7{margin-left:58.33333%}.offset-sm-8{margin-left:66.66667%}.offset-sm-9{margin-left:75%}.offset-sm-10{margin-left:83.33333%}.offset-sm-11{margin-left:91.66667%}.g-sm-0,.gx-sm-0{--bs-gutter-x: 0}.g-sm-0,.gy-sm-0{--bs-gutter-y: 0}.g-sm-1,.gx-sm-1{--bs-gutter-x: .25rem}.g-sm-1,.gy-sm-1{--bs-gutter-y: .25rem}.g-sm-2,.gx-sm-2{--bs-gutter-x: .5rem}.g-sm-2,.gy-sm-2{--bs-gutter-y: .5rem}.g-sm-3,.gx-sm-3{--bs-gutter-x: 1rem}.g-sm-3,.gy-sm-3{--bs-gutter-y: 1rem}.g-sm-4,.gx-sm-4{--bs-gutter-x: 1.5rem}.g-sm-4,.gy-sm-4{--bs-gutter-y: 1.5rem}.g-sm-5,.gx-sm-5{--bs-gutter-x: 3rem}.g-sm-5,.gy-sm-5{--bs-gutter-y: 3rem}}@media (min-width: 768px){.col-md{flex:1 0 0%}.row-cols-md-auto>*{flex:0 0 auto;width:auto}.row-cols-md-1>*{flex:0 0 auto;width:100%}.row-cols-md-2>*{flex:0 0 auto;width:50%}.row-cols-md-3>*{flex:0 0 auto;width:33.33333%}.row-cols-md-4>*{flex:0 0 auto;width:25%}.row-cols-md-5>*{flex:0 0 auto;width:20%}.row-cols-md-6>*{flex:0 0 auto;width:16.66667%}.col-md-auto{flex:0 0 auto;width:auto}.col-md-1{flex:0 0 auto;width:8.33333%}.col-md-2{flex:0 0 auto;width:16.66667%}.col-md-3{flex:0 0 auto;width:25%}.col-md-4{flex:0 0 auto;width:33.33333%}.col-md-5{flex:0 0 auto;width:41.66667%}.col-md-6{flex:0 0 auto;width:50%}.col-md-7{flex:0 0 auto;width:58.33333%}.col-md-8{flex:0 0 auto;width:66.66667%}.col-md-9{flex:0 0 auto;width:75%}.col-md-10{flex:0 0 auto;width:83.33333%}.col-md-11{flex:0 0 auto;width:91.66667%}.col-md-12{flex:0 0 auto;width:100%}.offset-md-0{margin-left:0}.offset-md-1{margin-left:8.33333%}.offset-md-2{margin-left:16.66667%}.offset-md-3{margin-left:25%}.offset-md-4{margin-left:33.33333%}.offset-md-5{margin-left:41.66667%}.offset-md-6{margin-left:50%}.offset-md-7{margin-left:58.33333%}.offset-md-8{margin-left:66.66667%}.offset-md-9{margin-left:75%}.offset-md-10{margin-left:83.33333%}.offset-md-11{margin-left:91.66667%}.g-md-0,.gx-md-0{--bs-gutter-x: 0}.g-md-0,.gy-md-0{--bs-gutter-y: 0}.g-md-1,.gx-md-1{--bs-gutter-x: .25rem}.g-md-1,.gy-md-1{--bs-gutter-y: .25rem}.g-md-2,.gx-md-2{--bs-gutter-x: .5rem}.g-md-2,.gy-md-2{--bs-gutter-y: .5rem}.g-md-3,.gx-md-3{--bs-gutter-x: 1rem}.g-md-3,.gy-md-3{--bs-gutter-y: 1rem}.g-md-4,.gx-md-4{--bs-gutter-x: 1.5rem}.g-md-4,.gy-md-4{--bs-gutter-y: 1.5rem}.g-md-5,.gx-md-5{--bs-gutter-x: 3rem}.g-md-5,.gy-md-5{--bs-gutter-y: 3rem}}@media (min-width: 992px){.col-lg{flex:1 0 0%}.row-cols-lg-auto>*{flex:0 0 auto;width:auto}.row-cols-lg-1>*{flex:0 0 auto;width:100%}.row-cols-lg-2>*{flex:0 0 auto;width:50%}.row-cols-lg-3>*{flex:0 0 auto;width:33.33333%}.row-cols-lg-4>*{flex:0 0 auto;width:25%}.row-cols-lg-5>*{flex:0 0 auto;width:20%}.row-cols-lg-6>*{flex:0 0 auto;width:16.66667%}.col-lg-auto{flex:0 0 auto;width:auto}.col-lg-1{flex:0 0 auto;width:8.33333%}.col-lg-2{flex:0 0 auto;width:16.66667%}.col-lg-3{flex:0 0 auto;width:25%}.col-lg-4{flex:0 0 auto;width:33.33333%}.col-lg-5{flex:0 0 auto;width:41.66667%}.col-lg-6{flex:0 0 auto;width:50%}.col-lg-7{flex:0 0 auto;width:58.33333%}.col-lg-8{flex:0 0 auto;width:66.66667%}.col-lg-9{flex:0 0 auto;width:75%}.col-lg-10{flex:0 0 auto;width:83.33333%}.col-lg-11{flex:0 0 auto;width:91.66667%}.col-lg-12{flex:0 0 auto;width:100%}.offset-lg-0{margin-left:0}.offset-lg-1{margin-left:8.33333%}.offset-lg-2{margin-left:16.66667%}.offset-lg-3{margin-left:25%}.offset-lg-4{margin-left:33.33333%}.offset-lg-5{margin-left:41.66667%}.offset-lg-6{margin-left:50%}.offset-lg-7{margin-left:58.33333%}.offset-lg-8{margin-left:66.66667%}.offset-lg-9{margin-left:75%}.offset-lg-10{margin-left:83.33333%}.offset-lg-11{margin-left:91.66667%}.g-lg-0,.gx-lg-0{--bs-gutter-x: 0}.g-lg-0,.gy-lg-0{--bs-gutter-y: 0}.g-lg-1,.gx-lg-1{--bs-gutter-x: .25rem}.g-lg-1,.gy-lg-1{--bs-gutter-y: .25rem}.g-lg-2,.gx-lg-2{--bs-gutter-x: .5rem}.g-lg-2,.gy-lg-2{--bs-gutter-y: .5rem}.g-lg-3,.gx-lg-3{--bs-gutter-x: 1rem}.g-lg-3,.gy-lg-3{--bs-gutter-y: 1rem}.g-lg-4,.gx-lg-4{--bs-gutter-x: 1.5rem}.g-lg-4,.gy-lg-4{--bs-gutter-y: 1.5rem}.g-lg-5,.gx-lg-5{--bs-gutter-x: 3rem}.g-lg-5,.gy-lg-5{--bs-gutter-y: 3rem}}@media (min-width: 1200px){.col-xl{flex:1 0 0%}.row-cols-xl-auto>*{flex:0 0 auto;width:auto}.row-cols-xl-1>*{flex:0 0 auto;width:100%}.row-cols-xl-2>*{flex:0 0 auto;width:50%}.row-cols-xl-3>*{flex:0 0 auto;width:33.33333%}.row-cols-xl-4>*{flex:0 0 auto;width:25%}.row-cols-xl-5>*{flex:0 0 auto;width:20%}.row-cols-xl-6>*{flex:0 0 auto;width:16.66667%}.col-xl-auto{flex:0 0 auto;width:auto}.col-xl-1{flex:0 0 auto;width:8.33333%}.col-xl-2{flex:0 0 auto;width:16.66667%}.col-xl-3{flex:0 0 auto;width:25%}.col-xl-4{flex:0 0 auto;width:33.33333%}.col-xl-5{flex:0 0 auto;width:41.66667%}.col-xl-6{flex:0 0 auto;width:50%}.col-xl-7{flex:0 0 auto;width:58.33333%}.col-xl-8{flex:0 0 auto;width:66.66667%}.col-xl-9{flex:0 0 auto;width:75%}.col-xl-10{flex:0 0 auto;width:83.33333%}.col-xl-11{flex:0 0 auto;width:91.66667%}.col-xl-12{flex:0 0 auto;width:100%}.offset-xl-0{margin-left:0}.offset-xl-1{margin-left:8.33333%}.offset-xl-2{margin-left:16.66667%}.offset-xl-3{margin-left:25%}.offset-xl-4{margin-left:33.33333%}.offset-xl-5{margin-left:41.66667%}.offset-xl-6{margin-left:50%}.offset-xl-7{margin-left:58.33333%}.offset-xl-8{margin-left:66.66667%}.offset-xl-9{margin-left:75%}.offset-xl-10{margin-left:83.33333%}.offset-xl-11{margin-left:91.66667%}.g-xl-0,.gx-xl-0{--bs-gutter-x: 0}.g-xl-0,.gy-xl-0{--bs-gutter-y: 0}.g-xl-1,.gx-xl-1{--bs-gutter-x: .25rem}.g-xl-1,.gy-xl-1{--bs-gutter-y: .25rem}.g-xl-2,.gx-xl-2{--bs-gutter-x: .5rem}.g-xl-2,.gy-xl-2{--bs-gutter-y: .5rem}.g-xl-3,.gx-xl-3{--bs-gutter-x: 1rem}.g-xl-3,.gy-xl-3{--bs-gutter-y: 1rem}.g-xl-4,.gx-xl-4{--bs-gutter-x: 1.5rem}.g-xl-4,.gy-xl-4{--bs-gutter-y: 1.5rem}.g-xl-5,.gx-xl-5{--bs-gutter-x: 3rem}.g-xl-5,.gy-xl-5{--bs-gutter-y: 3rem}}@media (min-width: 1400px){.col-xxl{flex:1 0 0%}.row-cols-xxl-auto>*{flex:0 0 auto;width:auto}.row-cols-xxl-1>*{flex:0 0 auto;width:100%}.row-cols-xxl-2>*{flex:0 0 auto;width:50%}.row-cols-xxl-3>*{flex:0 0 auto;width:33.33333%}.row-cols-xxl-4>*{flex:0 0 auto;width:25%}.row-cols-xxl-5>*{flex:0 0 auto;width:20%}.row-cols-xxl-6>*{flex:0 0 auto;width:16.66667%}.col-xxl-auto{flex:0 0 auto;width:auto}.col-xxl-1{flex:0 0 auto;width:8.33333%}.col-xxl-2{flex:0 0 auto;width:16.66667%}.col-xxl-3{flex:0 0 auto;width:25%}.col-xxl-4{flex:0 0 auto;width:33.33333%}.col-xxl-5{flex:0 0 auto;width:41.66667%}.col-xxl-6{flex:0 0 auto;width:50%}.col-xxl-7{flex:0 0 auto;width:58.33333%}.col-xxl-8{flex:0 0 auto;width:66.66667%}.col-xxl-9{flex:0 0 auto;width:75%}.col-xxl-10{flex:0 0 auto;width:83.33333%}.col-xxl-11{flex:0 0 auto;width:91.66667%}.col-xxl-12{flex:0 0 auto;width:100%}.offset-xxl-0{margin-left:0}.offset-xxl-1{margin-left:8.33333%}.offset-xxl-2{margin-left:16.66667%}.offset-xxl-3{margin-left:25%}.offset-xxl-4{margin-left:33.33333%}.offset-xxl-5{margin-left:41.66667%}.offset-xxl-6{margin-left:50%}.offset-xxl-7{margin-left:58.33333%}.offset-xxl-8{margin-left:66.66667%}.offset-xxl-9{margin-left:75%}.offset-xxl-10{margin-left:83.33333%}.offset-xxl-11{margin-left:91.66667%}.g-xxl-0,.gx-xxl-0{--bs-gutter-x: 0}.g-xxl-0,.gy-xxl-0{--bs-gutter-y: 0}.g-xxl-1,.gx-xxl-1{--bs-gutter-x: .25rem}.g-xxl-1,.gy-xxl-1{--bs-gutter-y: .25rem}.g-xxl-2,.gx-xxl-2{--bs-gutter-x: .5rem}.g-xxl-2,.gy-xxl-2{--bs-gutter-y: .5rem}.g-xxl-3,.gx-xxl-3{--bs-gutter-x: 1rem}.g-xxl-3,.gy-xxl-3{--bs-gutter-y: 1rem}.g-xxl-4,.gx-xxl-4{--bs-gutter-x: 1.5rem}.g-xxl-4,.gy-xxl-4{--bs-gutter-y: 1.5rem}.g-xxl-5,.gx-xxl-5{--bs-gutter-x: 3rem}.g-xxl-5,.gy-xxl-5{--bs-gutter-y: 3rem}}.table{--bs-table-bg: rgba(0,0,0,0);--bs-table-striped-color: #212529;--bs-table-striped-bg: rgba(0,0,0,0.05);--bs-table-active-color: #212529;--bs-table-active-bg: rgba(0,0,0,0.1);--bs-table-hover-color: #212529;--bs-table-hover-bg: rgba(0,0,0,0.075);width:100%;margin-bottom:1rem;color:#212529;vertical-align:top;border-color:#dee2e6}.table>:not(caption)>*>*{padding:.5rem .5rem;background-color:var(--bs-table-bg);border-bottom-width:1px;box-shadow:inset 0 0 0 9999px var(--bs-table-accent-bg)}.table>tbody{vertical-align:inherit}.table>thead{vertical-align:bottom}.table>:not(:last-child)>:last-child>*{border-bottom-color:currentColor}.caption-top{caption-side:top}.table-sm>:not(caption)>*>*{padding:.25rem .25rem}.table-bordered>:not(caption)>*{border-width:1px 0}.table-bordered>:not(caption)>*>*{border-width:0 1px}.table-borderless>:not(caption)>*>*{border-bottom-width:0}.table-striped>tbody>tr:nth-of-type(odd){--bs-table-accent-bg: var(--bs-table-striped-bg);color:var(--bs-table-striped-color)}.table-active{--bs-table-accent-bg: var(--bs-table-active-bg);color:var(--bs-table-active-color)}.table-hover>tbody>tr:hover{--bs-table-accent-bg: var(--bs-table-hover-bg);color:var(--bs-table-hover-color)}.table-primary{--bs-table-bg: #cfe2ff;--bs-table-striped-bg: #c5d7f2;--bs-table-striped-color: #000;--bs-table-active-bg: #bacbe6;--bs-table-active-color: #000;--bs-table-hover-bg: #bfd1ec;--bs-table-hover-color: #000;color:#000;border-color:#bacbe6}.table-secondary{--bs-table-bg: #e2e3e5;--bs-table-striped-bg: #d7d8da;--bs-table-striped-color: #000;--bs-table-active-bg: #cbccce;--bs-table-active-color: #000;--bs-table-hover-bg: #d1d2d4;--bs-table-hover-color: #000;color:#000;border-color:#cbccce}.table-success{--bs-table-bg: #d1e7dd;--bs-table-striped-bg: #c7dbd2;--bs-table-striped-color: #000;--bs-table-active-bg: #bcd0c7;--bs-table-active-color: #000;--bs-table-hover-bg: #c1d6cc;--bs-table-hover-color: #000;color:#000;border-color:#bcd0c7}.table-info{--bs-table-bg: #cff4fc;--bs-table-striped-bg: #c5e8ef;--bs-table-striped-color: #000;--bs-table-active-bg: #badce3;--bs-table-active-color: #000;--bs-table-hover-bg: #bfe2e9;--bs-table-hover-color: #000;color:#000;border-color:#badce3}.table-warning{--bs-table-bg: #fff3cd;--bs-table-striped-bg: #f2e7c3;--bs-table-striped-color: #000;--bs-table-active-bg: #e6dbb9;--bs-table-active-color: #000;--bs-table-hover-bg: #ece1be;--bs-table-hover-color: #000;color:#000;border-color:#e6dbb9}.table-danger{--bs-table-bg: #f8d7da;--bs-table-striped-bg: #eccccf;--bs-table-striped-color: #000;--bs-table-active-bg: #dfc2c4;--bs-table-active-color: #000;--bs-table-hover-bg: #e5c7ca;--bs-table-hover-color: #000;color:#000;border-color:#dfc2c4}.table-light{--bs-table-bg: #f8f9fa;--bs-table-striped-bg: #ecedee;--bs-table-striped-color: #000;--bs-table-active-bg: #dfe0e1;--bs-table-active-color: #000;--bs-table-hover-bg: #e5e6e7;--bs-table-hover-color: #000;color:#000;border-color:#dfe0e1}.table-dark{--bs-table-bg: #212529;--bs-table-striped-bg: #2c3034;--bs-table-striped-color: #fff;--bs-table-active-bg: #373b3e;--bs-table-active-color: #fff;--bs-table-hover-bg: #323539;--bs-table-hover-color: #fff;color:#fff;border-color:#373b3e}.table-responsive{overflow-x:auto;-webkit-overflow-scrolling:touch}@media (max-width: 575.98px){.table-responsive-sm{overflow-x:auto;-webkit-overflow-scrolling:touch}}@media (max-width: 767.98px){.table-responsive-md{overflow-x:auto;-webkit-overflow-scrolling:touch}}@media (max-width: 991.98px){.table-responsive-lg{overflow-x:auto;-webkit-overflow-scrolling:touch}}@media (max-width: 1199.98px){.table-responsive-xl{overflow-x:auto;-webkit-overflow-scrolling:touch}}@media (max-width: 1399.98px){.table-responsive-xxl{overflow-x:auto;-webkit-overflow-scrolling:touch}}.form-label{margin-bottom:.5rem}.col-form-label{padding-top:calc(.375rem + 1px);padding-bottom:calc(.375rem + 1px);margin-bottom:0;font-size:inherit;line-height:1.5}.col-form-label-lg{padding-top:calc(.5rem + 1px);padding-bottom:calc(.5rem + 1px);font-size:1.25rem}.col-form-label-sm{padding-top:calc(.25rem + 1px);padding-bottom:calc(.25rem + 1px);font-size:.875rem}.form-text{margin-top:.25rem;font-size:.875em;color:#6c757d}.form-control{display:block;width:100%;padding:.375rem .75rem;font-size:1rem;font-weight:400;line-height:1.5;color:#212529;background-color:#fff;background-clip:padding-box;border:1px solid #ced4da;appearance:none;border-radius:.25rem;transition:border-color 0.15s ease-in-out,box-shadow 0.15s ease-in-out}@media (prefers-reduced-motion: reduce){.form-control{transition:none}}.form-control[type=\"file\"]{overflow:hidden}.form-control[type=\"file\"]:not(:disabled):not([readonly]){cursor:pointer}.form-control:focus{color:#212529;background-color:#fff;border-color:#86b7fe;outline:0;box-shadow:0 0 0 .25rem rgba(13,110,253,0.25)}.form-control::-webkit-date-and-time-value{height:1.5em}.form-control::placeholder{color:#6c757d;opacity:1}.form-control:disabled,.form-control[readonly]{background-color:#e9ecef;opacity:1}.form-control::file-selector-button{padding:.375rem .75rem;margin:-.375rem -.75rem;margin-inline-end:.75rem;color:#212529;background-color:#e9ecef;pointer-events:none;border-color:inherit;border-style:solid;border-width:0;border-inline-end-width:1px;border-radius:0;transition:color 0.15s ease-in-out,background-color 0.15s ease-in-out,border-color 0.15s ease-in-out,box-shadow 0.15s ease-in-out}@media (prefers-reduced-motion: reduce){.form-control::file-selector-button{transition:none}}.form-control:hover:not(:disabled):not([readonly])::file-selector-button{background-color:#dde0e3}.form-control::-webkit-file-upload-button{padding:.375rem .75rem;margin:-.375rem -.75rem;margin-inline-end:.75rem;color:#212529;background-color:#e9ecef;pointer-events:none;border-color:inherit;border-style:solid;border-width:0;border-inline-end-width:1px;border-radius:0;transition:color 0.15s ease-in-out,background-color 0.15s ease-in-out,border-color 0.15s ease-in-out,box-shadow 0.15s ease-in-out}@media (prefers-reduced-motion: reduce){.form-control::-webkit-file-upload-button{transition:none}}.form-control:hover:not(:disabled):not([readonly])::-webkit-file-upload-button{background-color:#dde0e3}.form-control-plaintext{display:block;width:100%;padding:.375rem 0;margin-bottom:0;line-height:1.5;color:#212529;background-color:transparent;border:solid transparent;border-width:1px 0}.form-control-plaintext.form-control-sm,.form-control-plaintext.form-control-lg{padding-right:0;padding-left:0}.form-control-sm{min-height:calc(1.5em + .5rem + 2px);padding:.25rem .5rem;font-size:.875rem;border-radius:.2rem}.form-control-sm::file-selector-button{padding:.25rem .5rem;margin:-.25rem -.5rem;margin-inline-end:.5rem}.form-control-sm::-webkit-file-upload-button{padding:.25rem .5rem;margin:-.25rem -.5rem;margin-inline-end:.5rem}.form-control-lg{min-height:calc(1.5em + 1rem + 2px);padding:.5rem 1rem;font-size:1.25rem;border-radius:.3rem}.form-control-lg::file-selector-button{padding:.5rem 1rem;margin:-.5rem -1rem;margin-inline-end:1rem}.form-control-lg::-webkit-file-upload-button{padding:.5rem 1rem;margin:-.5rem -1rem;margin-inline-end:1rem}textarea.form-control{min-height:calc(1.5em + .75rem + 2px)}textarea.form-control-sm{min-height:calc(1.5em + .5rem + 2px)}textarea.form-control-lg{min-height:calc(1.5em + 1rem + 2px)}.form-control-color{max-width:3rem;height:auto;padding:.375rem}.form-control-color:not(:disabled):not([readonly]){cursor:pointer}.form-control-color::-moz-color-swatch{height:1.5em;border-radius:.25rem}.form-control-color::-webkit-color-swatch{height:1.5em;border-radius:.25rem}.form-select{display:block;width:100%;padding:.375rem 2.25rem .375rem .75rem;font-size:1rem;font-weight:400;line-height:1.5;color:#212529;background-color:#fff;background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='%23343a40' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M2 5l6 6 6-6'/%3e%3c/svg%3e\");background-repeat:no-repeat;background-position:right .75rem center;background-size:16px 12px;border:1px solid #ced4da;border-radius:.25rem;appearance:none}.form-select:focus{border-color:#86b7fe;outline:0;box-shadow:0 0 0 .25rem rgba(13,110,253,0.25)}.form-select[multiple],.form-select[size]:not([size=\"1\"]){padding-right:.75rem;background-image:none}.form-select:disabled{color:#6c757d;background-color:#e9ecef}.form-select:-moz-focusring{color:transparent;text-shadow:0 0 0 #212529}.form-select-sm{padding-top:.25rem;padding-bottom:.25rem;padding-left:.5rem;font-size:.875rem}.form-select-lg{padding-top:.5rem;padding-bottom:.5rem;padding-left:1rem;font-size:1.25rem}.form-check{display:block;min-height:1.5rem;padding-left:1.5em;margin-bottom:.125rem}.form-check .form-check-input{float:left;margin-left:-1.5em}.form-check-input{width:1em;height:1em;margin-top:.25em;vertical-align:top;background-color:#fff;background-repeat:no-repeat;background-position:center;background-size:contain;border:1px solid rgba(0,0,0,0.25);appearance:none;color-adjust:exact}.form-check-input[type=\"checkbox\"]{border-radius:.25em}.form-check-input[type=\"radio\"]{border-radius:50%}.form-check-input:active{filter:brightness(90%)}.form-check-input:focus{border-color:#86b7fe;outline:0;box-shadow:0 0 0 .25rem rgba(13,110,253,0.25)}.form-check-input:checked{background-color:#0d6efd;border-color:#0d6efd}.form-check-input:checked[type=\"checkbox\"]{background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3e%3cpath fill='none' stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='3' d='M6 10l3 3l6-6'/%3e%3c/svg%3e\")}.form-check-input:checked[type=\"radio\"]{background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='2' fill='%23fff'/%3e%3c/svg%3e\")}.form-check-input[type=\"checkbox\"]:indeterminate{background-color:#0d6efd;border-color:#0d6efd;background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3e%3cpath fill='none' stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='3' d='M6 10h8'/%3e%3c/svg%3e\")}.form-check-input:disabled{pointer-events:none;filter:none;opacity:.5}.form-check-input[disabled] ~ .form-check-label,.form-check-input:disabled ~ .form-check-label{opacity:.5}.form-switch{padding-left:2.5em}.form-switch .form-check-input{width:2em;margin-left:-2.5em;background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='rgba%280,0,0,0.25%29'/%3e%3c/svg%3e\");background-position:left center;border-radius:2em;transition:background-position 0.15s ease-in-out}@media (prefers-reduced-motion: reduce){.form-switch .form-check-input{transition:none}}.form-switch .form-check-input:focus{background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='%2386b7fe'/%3e%3c/svg%3e\")}.form-switch .form-check-input:checked{background-position:right center;background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='%23fff'/%3e%3c/svg%3e\")}.form-check-inline{display:inline-block;margin-right:1rem}.btn-check{position:absolute;clip:rect(0, 0, 0, 0);pointer-events:none}.btn-check[disabled]+.btn,.btn-check:disabled+.btn{pointer-events:none;filter:none;opacity:.65}.form-range{width:100%;height:1.5rem;padding:0;background-color:transparent;appearance:none}.form-range:focus{outline:0}.form-range:focus::-webkit-slider-thumb{box-shadow:0 0 0 1px #fff,0 0 0 .25rem rgba(13,110,253,0.25)}.form-range:focus::-moz-range-thumb{box-shadow:0 0 0 1px #fff,0 0 0 .25rem rgba(13,110,253,0.25)}.form-range::-moz-focus-outer{border:0}.form-range::-webkit-slider-thumb{width:1rem;height:1rem;margin-top:-.25rem;background-color:#0d6efd;border:0;border-radius:1rem;transition:background-color 0.15s ease-in-out,border-color 0.15s ease-in-out,box-shadow 0.15s ease-in-out;appearance:none}@media (prefers-reduced-motion: reduce){.form-range::-webkit-slider-thumb{transition:none}}.form-range::-webkit-slider-thumb:active{background-color:#b6d4fe}.form-range::-webkit-slider-runnable-track{width:100%;height:.5rem;color:transparent;cursor:pointer;background-color:#dee2e6;border-color:transparent;border-radius:1rem}.form-range::-moz-range-thumb{width:1rem;height:1rem;background-color:#0d6efd;border:0;border-radius:1rem;transition:background-color 0.15s ease-in-out,border-color 0.15s ease-in-out,box-shadow 0.15s ease-in-out;appearance:none}@media (prefers-reduced-motion: reduce){.form-range::-moz-range-thumb{transition:none}}.form-range::-moz-range-thumb:active{background-color:#b6d4fe}.form-range::-moz-range-track{width:100%;height:.5rem;color:transparent;cursor:pointer;background-color:#dee2e6;border-color:transparent;border-radius:1rem}.form-range:disabled{pointer-events:none}.form-range:disabled::-webkit-slider-thumb{background-color:#adb5bd}.form-range:disabled::-moz-range-thumb{background-color:#adb5bd}.form-floating{position:relative}.form-floating>.form-control,.form-floating>.form-select{height:calc(3.5rem + 2px);padding:1rem .75rem}.form-floating>label{position:absolute;top:0;left:0;height:100%;padding:1rem .75rem;pointer-events:none;border:1px solid transparent;transform-origin:0 0;transition:opacity 0.1s ease-in-out,transform 0.1s ease-in-out}@media (prefers-reduced-motion: reduce){.form-floating>label{transition:none}}.form-floating>.form-control::placeholder{color:transparent}.form-floating>.form-control:focus,.form-floating>.form-control:not(:placeholder-shown){padding-top:1.625rem;padding-bottom:.625rem}.form-floating>.form-control:-webkit-autofill{padding-top:1.625rem;padding-bottom:.625rem}.form-floating>.form-select{padding-top:1.625rem;padding-bottom:.625rem}.form-floating>.form-control:focus ~ label,.form-floating>.form-control:not(:placeholder-shown) ~ label,.form-floating>.form-select ~ label{opacity:.65;transform:scale(0.85) translateY(-0.5rem) translateX(0.15rem)}.form-floating>.form-control:-webkit-autofill ~ label{opacity:.65;transform:scale(0.85) translateY(-0.5rem) translateX(0.15rem)}.input-group{position:relative;display:flex;flex-wrap:wrap;align-items:stretch;width:100%}.input-group>.form-control,.input-group>.form-select{position:relative;flex:1 1 auto;width:1%;min-width:0}.input-group>.form-control:focus,.input-group>.form-select:focus{z-index:3}.input-group .btn{position:relative;z-index:2}.input-group .btn:focus{z-index:3}.input-group-text{display:flex;align-items:center;padding:.375rem .75rem;font-size:1rem;font-weight:400;line-height:1.5;color:#212529;text-align:center;white-space:nowrap;background-color:#e9ecef;border:1px solid #ced4da;border-radius:.25rem}.input-group-lg>.form-control,.input-group-lg>.form-select,.input-group-lg>.input-group-text,.input-group-lg>.btn{padding:.5rem 1rem;font-size:1.25rem;border-radius:.3rem}.input-group-sm>.form-control,.input-group-sm>.form-select,.input-group-sm>.input-group-text,.input-group-sm>.btn{padding:.25rem .5rem;font-size:.875rem;border-radius:.2rem}.input-group-lg>.form-select,.input-group-sm>.form-select{padding-right:3rem}.input-group:not(.has-validation)>:not(:last-child):not(.dropdown-toggle):not(.dropdown-menu),.input-group:not(.has-validation)>.dropdown-toggle:nth-last-child(n+3){border-top-right-radius:0;border-bottom-right-radius:0}.input-group.has-validation>:nth-last-child(n+3):not(.dropdown-toggle):not(.dropdown-menu),.input-group.has-validation>.dropdown-toggle:nth-last-child(n+4){border-top-right-radius:0;border-bottom-right-radius:0}.input-group>:not(:first-child):not(.dropdown-menu):not(.valid-tooltip):not(.valid-feedback):not(.invalid-tooltip):not(.invalid-feedback){margin-left:-1px;border-top-left-radius:0;border-bottom-left-radius:0}.valid-feedback{display:none;width:100%;margin-top:.25rem;font-size:.875em;color:#198754}.valid-tooltip{position:absolute;top:100%;z-index:5;display:none;max-width:100%;padding:.25rem .5rem;margin-top:.1rem;font-size:.875rem;color:#fff;background-color:rgba(25,135,84,0.9);border-radius:.25rem}.was-validated :valid ~ .valid-feedback,.was-validated :valid ~ .valid-tooltip,.is-valid ~ .valid-feedback,.is-valid ~ .valid-tooltip{display:block}.was-validated .form-control:valid,.form-control.is-valid{border-color:#198754;padding-right:calc(1.5em + .75rem);background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3e%3cpath fill='%23198754' d='M2.3 6.73L.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1z'/%3e%3c/svg%3e\");background-repeat:no-repeat;background-position:right calc(.375em + .1875rem) center;background-size:calc(.75em + .375rem) calc(.75em + .375rem)}.was-validated .form-control:valid:focus,.form-control.is-valid:focus{border-color:#198754;box-shadow:0 0 0 .25rem rgba(25,135,84,0.25)}.was-validated textarea.form-control:valid,textarea.form-control.is-valid{padding-right:calc(1.5em + .75rem);background-position:top calc(.375em + .1875rem) right calc(.375em + .1875rem)}.was-validated .form-select:valid,.form-select.is-valid{border-color:#198754;padding-right:4.125rem;background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='%23343a40' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M2 5l6 6 6-6'/%3e%3c/svg%3e\"),url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3e%3cpath fill='%23198754' d='M2.3 6.73L.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1z'/%3e%3c/svg%3e\");background-position:right .75rem center,center right 2.25rem;background-size:16px 12px,calc(.75em + .375rem) calc(.75em + .375rem)}.was-validated .form-select:valid:focus,.form-select.is-valid:focus{border-color:#198754;box-shadow:0 0 0 .25rem rgba(25,135,84,0.25)}.was-validated .form-check-input:valid,.form-check-input.is-valid{border-color:#198754}.was-validated .form-check-input:valid:checked,.form-check-input.is-valid:checked{background-color:#198754}.was-validated .form-check-input:valid:focus,.form-check-input.is-valid:focus{box-shadow:0 0 0 .25rem rgba(25,135,84,0.25)}.was-validated .form-check-input:valid ~ .form-check-label,.form-check-input.is-valid ~ .form-check-label{color:#198754}.form-check-inline .form-check-input ~ .valid-feedback{margin-left:.5em}.invalid-feedback{display:none;width:100%;margin-top:.25rem;font-size:.875em;color:#dc3545}.invalid-tooltip{position:absolute;top:100%;z-index:5;display:none;max-width:100%;padding:.25rem .5rem;margin-top:.1rem;font-size:.875rem;color:#fff;background-color:rgba(220,53,69,0.9);border-radius:.25rem}.was-validated :invalid ~ .invalid-feedback,.was-validated :invalid ~ .invalid-tooltip,.is-invalid ~ .invalid-feedback,.is-invalid ~ .invalid-tooltip{display:block}.was-validated .form-control:invalid,.form-control.is-invalid{border-color:#dc3545;padding-right:calc(1.5em + .75rem);background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 12' width='12' height='12' fill='none' stroke='%23dc3545'%3e%3ccircle cx='6' cy='6' r='4.5'/%3e%3cpath stroke-linejoin='round' d='M5.8 3.6h.4L6 6.5z'/%3e%3ccircle cx='6' cy='8.2' r='.6' fill='%23dc3545' stroke='none'/%3e%3c/svg%3e\");background-repeat:no-repeat;background-position:right calc(.375em + .1875rem) center;background-size:calc(.75em + .375rem) calc(.75em + .375rem)}.was-validated .form-control:invalid:focus,.form-control.is-invalid:focus{border-color:#dc3545;box-shadow:0 0 0 .25rem rgba(220,53,69,0.25)}.was-validated textarea.form-control:invalid,textarea.form-control.is-invalid{padding-right:calc(1.5em + .75rem);background-position:top calc(.375em + .1875rem) right calc(.375em + .1875rem)}.was-validated .form-select:invalid,.form-select.is-invalid{border-color:#dc3545;padding-right:4.125rem;background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='%23343a40' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M2 5l6 6 6-6'/%3e%3c/svg%3e\"),url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 12' width='12' height='12' fill='none' stroke='%23dc3545'%3e%3ccircle cx='6' cy='6' r='4.5'/%3e%3cpath stroke-linejoin='round' d='M5.8 3.6h.4L6 6.5z'/%3e%3ccircle cx='6' cy='8.2' r='.6' fill='%23dc3545' stroke='none'/%3e%3c/svg%3e\");background-position:right .75rem center,center right 2.25rem;background-size:16px 12px,calc(.75em + .375rem) calc(.75em + .375rem)}.was-validated .form-select:invalid:focus,.form-select.is-invalid:focus{border-color:#dc3545;box-shadow:0 0 0 .25rem rgba(220,53,69,0.25)}.was-validated .form-check-input:invalid,.form-check-input.is-invalid{border-color:#dc3545}.was-validated .form-check-input:invalid:checked,.form-check-input.is-invalid:checked{background-color:#dc3545}.was-validated .form-check-input:invalid:focus,.form-check-input.is-invalid:focus{box-shadow:0 0 0 .25rem rgba(220,53,69,0.25)}.was-validated .form-check-input:invalid ~ .form-check-label,.form-check-input.is-invalid ~ .form-check-label{color:#dc3545}.form-check-inline .form-check-input ~ .invalid-feedback{margin-left:.5em}.btn{display:inline-block;font-weight:400;line-height:1.5;color:#212529;text-align:center;text-decoration:none;vertical-align:middle;cursor:pointer;user-select:none;background-color:transparent;border:1px solid transparent;padding:.375rem .75rem;font-size:1rem;border-radius:.25rem;transition:color 0.15s ease-in-out,background-color 0.15s ease-in-out,border-color 0.15s ease-in-out,box-shadow 0.15s ease-in-out}@media (prefers-reduced-motion: reduce){.btn{transition:none}}.btn:hover{color:#212529}.btn-check:focus+.btn,.btn:focus{outline:0;box-shadow:0 0 0 .25rem rgba(13,110,253,0.25)}.btn:disabled,.btn.disabled,fieldset:disabled .btn{pointer-events:none;opacity:.65}.btn-primary{color:#fff;background-color:#0d6efd;border-color:#0d6efd}.btn-primary:hover{color:#fff;background-color:#0b5ed7;border-color:#0a58ca}.btn-check:focus+.btn-primary,.btn-primary:focus{color:#fff;background-color:#0b5ed7;border-color:#0a58ca;box-shadow:0 0 0 .25rem rgba(49,132,253,0.5)}.btn-check:checked+.btn-primary,.btn-check:active+.btn-primary,.btn-primary:active,.btn-primary.active,.show>.btn-primary.dropdown-toggle{color:#fff;background-color:#0a58ca;border-color:#0a53be}.btn-check:checked+.btn-primary:focus,.btn-check:active+.btn-primary:focus,.btn-primary:active:focus,.btn-primary.active:focus,.show>.btn-primary.dropdown-toggle:focus{box-shadow:0 0 0 .25rem rgba(49,132,253,0.5)}.btn-primary:disabled,.btn-primary.disabled{color:#fff;background-color:#0d6efd;border-color:#0d6efd}.btn-secondary{color:#fff;background-color:#6c757d;border-color:#6c757d}.btn-secondary:hover{color:#fff;background-color:#5c636a;border-color:#565e64}.btn-check:focus+.btn-secondary,.btn-secondary:focus{color:#fff;background-color:#5c636a;border-color:#565e64;box-shadow:0 0 0 .25rem rgba(130,138,145,0.5)}.btn-check:checked+.btn-secondary,.btn-check:active+.btn-secondary,.btn-secondary:active,.btn-secondary.active,.show>.btn-secondary.dropdown-toggle{color:#fff;background-color:#565e64;border-color:#51585e}.btn-check:checked+.btn-secondary:focus,.btn-check:active+.btn-secondary:focus,.btn-secondary:active:focus,.btn-secondary.active:focus,.show>.btn-secondary.dropdown-toggle:focus{box-shadow:0 0 0 .25rem rgba(130,138,145,0.5)}.btn-secondary:disabled,.btn-secondary.disabled{color:#fff;background-color:#6c757d;border-color:#6c757d}.btn-success{color:#fff;background-color:#198754;border-color:#198754}.btn-success:hover{color:#fff;background-color:#157347;border-color:#146c43}.btn-check:focus+.btn-success,.btn-success:focus{color:#fff;background-color:#157347;border-color:#146c43;box-shadow:0 0 0 .25rem rgba(60,153,110,0.5)}.btn-check:checked+.btn-success,.btn-check:active+.btn-success,.btn-success:active,.btn-success.active,.show>.btn-success.dropdown-toggle{color:#fff;background-color:#146c43;border-color:#13653f}.btn-check:checked+.btn-success:focus,.btn-check:active+.btn-success:focus,.btn-success:active:focus,.btn-success.active:focus,.show>.btn-success.dropdown-toggle:focus{box-shadow:0 0 0 .25rem rgba(60,153,110,0.5)}.btn-success:disabled,.btn-success.disabled{color:#fff;background-color:#198754;border-color:#198754}.btn-info{color:#000;background-color:#0dcaf0;border-color:#0dcaf0}.btn-info:hover{color:#000;background-color:#31d2f2;border-color:#25cff2}.btn-check:focus+.btn-info,.btn-info:focus{color:#000;background-color:#31d2f2;border-color:#25cff2;box-shadow:0 0 0 .25rem rgba(11,172,204,0.5)}.btn-check:checked+.btn-info,.btn-check:active+.btn-info,.btn-info:active,.btn-info.active,.show>.btn-info.dropdown-toggle{color:#000;background-color:#3dd5f3;border-color:#25cff2}.btn-check:checked+.btn-info:focus,.btn-check:active+.btn-info:focus,.btn-info:active:focus,.btn-info.active:focus,.show>.btn-info.dropdown-toggle:focus{box-shadow:0 0 0 .25rem rgba(11,172,204,0.5)}.btn-info:disabled,.btn-info.disabled{color:#000;background-color:#0dcaf0;border-color:#0dcaf0}.btn-warning{color:#000;background-color:#ffc107;border-color:#ffc107}.btn-warning:hover{color:#000;background-color:#ffca2c;border-color:#ffc720}.btn-check:focus+.btn-warning,.btn-warning:focus{color:#000;background-color:#ffca2c;border-color:#ffc720;box-shadow:0 0 0 .25rem rgba(217,164,6,0.5)}.btn-check:checked+.btn-warning,.btn-check:active+.btn-warning,.btn-warning:active,.btn-warning.active,.show>.btn-warning.dropdown-toggle{color:#000;background-color:#ffcd39;border-color:#ffc720}.btn-check:checked+.btn-warning:focus,.btn-check:active+.btn-warning:focus,.btn-warning:active:focus,.btn-warning.active:focus,.show>.btn-warning.dropdown-toggle:focus{box-shadow:0 0 0 .25rem rgba(217,164,6,0.5)}.btn-warning:disabled,.btn-warning.disabled{color:#000;background-color:#ffc107;border-color:#ffc107}.btn-danger{color:#fff;background-color:#dc3545;border-color:#dc3545}.btn-danger:hover{color:#fff;background-color:#bb2d3b;border-color:#b02a37}.btn-check:focus+.btn-danger,.btn-danger:focus{color:#fff;background-color:#bb2d3b;border-color:#b02a37;box-shadow:0 0 0 .25rem rgba(225,83,97,0.5)}.btn-check:checked+.btn-danger,.btn-check:active+.btn-danger,.btn-danger:active,.btn-danger.active,.show>.btn-danger.dropdown-toggle{color:#fff;background-color:#b02a37;border-color:#a52834}.btn-check:checked+.btn-danger:focus,.btn-check:active+.btn-danger:focus,.btn-danger:active:focus,.btn-danger.active:focus,.show>.btn-danger.dropdown-toggle:focus{box-shadow:0 0 0 .25rem rgba(225,83,97,0.5)}.btn-danger:disabled,.btn-danger.disabled{color:#fff;background-color:#dc3545;border-color:#dc3545}.btn-light{color:#000;background-color:#f8f9fa;border-color:#f8f9fa}.btn-light:hover{color:#000;background-color:#f9fafb;border-color:#f9fafb}.btn-check:focus+.btn-light,.btn-light:focus{color:#000;background-color:#f9fafb;border-color:#f9fafb;box-shadow:0 0 0 .25rem rgba(211,212,213,0.5)}.btn-check:checked+.btn-light,.btn-check:active+.btn-light,.btn-light:active,.btn-light.active,.show>.btn-light.dropdown-toggle{color:#000;background-color:#f9fafb;border-color:#f9fafb}.btn-check:checked+.btn-light:focus,.btn-check:active+.btn-light:focus,.btn-light:active:focus,.btn-light.active:focus,.show>.btn-light.dropdown-toggle:focus{box-shadow:0 0 0 .25rem rgba(211,212,213,0.5)}.btn-light:disabled,.btn-light.disabled{color:#000;background-color:#f8f9fa;border-color:#f8f9fa}.btn-dark{color:#fff;background-color:#212529;border-color:#212529}.btn-dark:hover{color:#fff;background-color:#1c1f23;border-color:#1a1e21}.btn-check:focus+.btn-dark,.btn-dark:focus{color:#fff;background-color:#1c1f23;border-color:#1a1e21;box-shadow:0 0 0 .25rem rgba(66,70,73,0.5)}.btn-check:checked+.btn-dark,.btn-check:active+.btn-dark,.btn-dark:active,.btn-dark.active,.show>.btn-dark.dropdown-toggle{color:#fff;background-color:#1a1e21;border-color:#191c1f}.btn-check:checked+.btn-dark:focus,.btn-check:active+.btn-dark:focus,.btn-dark:active:focus,.btn-dark.active:focus,.show>.btn-dark.dropdown-toggle:focus{box-shadow:0 0 0 .25rem rgba(66,70,73,0.5)}.btn-dark:disabled,.btn-dark.disabled{color:#fff;background-color:#212529;border-color:#212529}.btn-outline-primary{color:#0d6efd;border-color:#0d6efd}.btn-outline-primary:hover{color:#fff;background-color:#0d6efd;border-color:#0d6efd}.btn-check:focus+.btn-outline-primary,.btn-outline-primary:focus{box-shadow:0 0 0 .25rem rgba(13,110,253,0.5)}.btn-check:checked+.btn-outline-primary,.btn-check:active+.btn-outline-primary,.btn-outline-primary:active,.btn-outline-primary.active,.btn-outline-primary.dropdown-toggle.show{color:#fff;background-color:#0d6efd;border-color:#0d6efd}.btn-check:checked+.btn-outline-primary:focus,.btn-check:active+.btn-outline-primary:focus,.btn-outline-primary:active:focus,.btn-outline-primary.active:focus,.btn-outline-primary.dropdown-toggle.show:focus{box-shadow:0 0 0 .25rem rgba(13,110,253,0.5)}.btn-outline-primary:disabled,.btn-outline-primary.disabled{color:#0d6efd;background-color:transparent}.btn-outline-secondary{color:#6c757d;border-color:#6c757d}.btn-outline-secondary:hover{color:#fff;background-color:#6c757d;border-color:#6c757d}.btn-check:focus+.btn-outline-secondary,.btn-outline-secondary:focus{box-shadow:0 0 0 .25rem rgba(108,117,125,0.5)}.btn-check:checked+.btn-outline-secondary,.btn-check:active+.btn-outline-secondary,.btn-outline-secondary:active,.btn-outline-secondary.active,.btn-outline-secondary.dropdown-toggle.show{color:#fff;background-color:#6c757d;border-color:#6c757d}.btn-check:checked+.btn-outline-secondary:focus,.btn-check:active+.btn-outline-secondary:focus,.btn-outline-secondary:active:focus,.btn-outline-secondary.active:focus,.btn-outline-secondary.dropdown-toggle.show:focus{box-shadow:0 0 0 .25rem rgba(108,117,125,0.5)}.btn-outline-secondary:disabled,.btn-outline-secondary.disabled{color:#6c757d;background-color:transparent}.btn-outline-success{color:#198754;border-color:#198754}.btn-outline-success:hover{color:#fff;background-color:#198754;border-color:#198754}.btn-check:focus+.btn-outline-success,.btn-outline-success:focus{box-shadow:0 0 0 .25rem rgba(25,135,84,0.5)}.btn-check:checked+.btn-outline-success,.btn-check:active+.btn-outline-success,.btn-outline-success:active,.btn-outline-success.active,.btn-outline-success.dropdown-toggle.show{color:#fff;background-color:#198754;border-color:#198754}.btn-check:checked+.btn-outline-success:focus,.btn-check:active+.btn-outline-success:focus,.btn-outline-success:active:focus,.btn-outline-success.active:focus,.btn-outline-success.dropdown-toggle.show:focus{box-shadow:0 0 0 .25rem rgba(25,135,84,0.5)}.btn-outline-success:disabled,.btn-outline-success.disabled{color:#198754;background-color:transparent}.btn-outline-info{color:#0dcaf0;border-color:#0dcaf0}.btn-outline-info:hover{color:#000;background-color:#0dcaf0;border-color:#0dcaf0}.btn-check:focus+.btn-outline-info,.btn-outline-info:focus{box-shadow:0 0 0 .25rem rgba(13,202,240,0.5)}.btn-check:checked+.btn-outline-info,.btn-check:active+.btn-outline-info,.btn-outline-info:active,.btn-outline-info.active,.btn-outline-info.dropdown-toggle.show{color:#000;background-color:#0dcaf0;border-color:#0dcaf0}.btn-check:checked+.btn-outline-info:focus,.btn-check:active+.btn-outline-info:focus,.btn-outline-info:active:focus,.btn-outline-info.active:focus,.btn-outline-info.dropdown-toggle.show:focus{box-shadow:0 0 0 .25rem rgba(13,202,240,0.5)}.btn-outline-info:disabled,.btn-outline-info.disabled{color:#0dcaf0;background-color:transparent}.btn-outline-warning{color:#ffc107;border-color:#ffc107}.btn-outline-warning:hover{color:#000;background-color:#ffc107;border-color:#ffc107}.btn-check:focus+.btn-outline-warning,.btn-outline-warning:focus{box-shadow:0 0 0 .25rem rgba(255,193,7,0.5)}.btn-check:checked+.btn-outline-warning,.btn-check:active+.btn-outline-warning,.btn-outline-warning:active,.btn-outline-warning.active,.btn-outline-warning.dropdown-toggle.show{color:#000;background-color:#ffc107;border-color:#ffc107}.btn-check:checked+.btn-outline-warning:focus,.btn-check:active+.btn-outline-warning:focus,.btn-outline-warning:active:focus,.btn-outline-warning.active:focus,.btn-outline-warning.dropdown-toggle.show:focus{box-shadow:0 0 0 .25rem rgba(255,193,7,0.5)}.btn-outline-warning:disabled,.btn-outline-warning.disabled{color:#ffc107;background-color:transparent}.btn-outline-danger{color:#dc3545;border-color:#dc3545}.btn-outline-danger:hover{color:#fff;background-color:#dc3545;border-color:#dc3545}.btn-check:focus+.btn-outline-danger,.btn-outline-danger:focus{box-shadow:0 0 0 .25rem rgba(220,53,69,0.5)}.btn-check:checked+.btn-outline-danger,.btn-check:active+.btn-outline-danger,.btn-outline-danger:active,.btn-outline-danger.active,.btn-outline-danger.dropdown-toggle.show{color:#fff;background-color:#dc3545;border-color:#dc3545}.btn-check:checked+.btn-outline-danger:focus,.btn-check:active+.btn-outline-danger:focus,.btn-outline-danger:active:focus,.btn-outline-danger.active:focus,.btn-outline-danger.dropdown-toggle.show:focus{box-shadow:0 0 0 .25rem rgba(220,53,69,0.5)}.btn-outline-danger:disabled,.btn-outline-danger.disabled{color:#dc3545;background-color:transparent}.btn-outline-light{color:#f8f9fa;border-color:#f8f9fa}.btn-outline-light:hover{color:#000;background-color:#f8f9fa;border-color:#f8f9fa}.btn-check:focus+.btn-outline-light,.btn-outline-light:focus{box-shadow:0 0 0 .25rem rgba(248,249,250,0.5)}.btn-check:checked+.btn-outline-light,.btn-check:active+.btn-outline-light,.btn-outline-light:active,.btn-outline-light.active,.btn-outline-light.dropdown-toggle.show{color:#000;background-color:#f8f9fa;border-color:#f8f9fa}.btn-check:checked+.btn-outline-light:focus,.btn-check:active+.btn-outline-light:focus,.btn-outline-light:active:focus,.btn-outline-light.active:focus,.btn-outline-light.dropdown-toggle.show:focus{box-shadow:0 0 0 .25rem rgba(248,249,250,0.5)}.btn-outline-light:disabled,.btn-outline-light.disabled{color:#f8f9fa;background-color:transparent}.btn-outline-dark{color:#212529;border-color:#212529}.btn-outline-dark:hover{color:#fff;background-color:#212529;border-color:#212529}.btn-check:focus+.btn-outline-dark,.btn-outline-dark:focus{box-shadow:0 0 0 .25rem rgba(33,37,41,0.5)}.btn-check:checked+.btn-outline-dark,.btn-check:active+.btn-outline-dark,.btn-outline-dark:active,.btn-outline-dark.active,.btn-outline-dark.dropdown-toggle.show{color:#fff;background-color:#212529;border-color:#212529}.btn-check:checked+.btn-outline-dark:focus,.btn-check:active+.btn-outline-dark:focus,.btn-outline-dark:active:focus,.btn-outline-dark.active:focus,.btn-outline-dark.dropdown-toggle.show:focus{box-shadow:0 0 0 .25rem rgba(33,37,41,0.5)}.btn-outline-dark:disabled,.btn-outline-dark.disabled{color:#212529;background-color:transparent}.btn-link{font-weight:400;color:#0d6efd;text-decoration:underline}.btn-link:hover{color:#0a58ca}.btn-link:disabled,.btn-link.disabled{color:#6c757d}.btn-lg,.btn-group-lg>.btn{padding:.5rem 1rem;font-size:1.25rem;border-radius:.3rem}.btn-sm,.btn-group-sm>.btn{padding:.25rem .5rem;font-size:.875rem;border-radius:.2rem}.fade{transition:opacity 0.15s linear}@media (prefers-reduced-motion: reduce){.fade{transition:none}}.fade:not(.show){opacity:0}.collapse:not(.show){display:none}.collapsing{height:0;overflow:hidden;transition:height 0.35s ease}@media (prefers-reduced-motion: reduce){.collapsing{transition:none}}.dropup,.dropend,.dropdown,.dropstart{position:relative}.dropdown-toggle{white-space:nowrap}.dropdown-toggle::after{display:inline-block;margin-left:.255em;vertical-align:.255em;content:\"\";border-top:.3em solid;border-right:.3em solid transparent;border-bottom:0;border-left:.3em solid transparent}.dropdown-toggle:empty::after{margin-left:0}.dropdown-menu{position:absolute;top:100%;z-index:1000;display:none;min-width:10rem;padding:.5rem 0;margin:0;font-size:1rem;color:#212529;text-align:left;list-style:none;background-color:#fff;background-clip:padding-box;border:1px solid rgba(0,0,0,0.15);border-radius:.25rem}.dropdown-menu[data-bs-popper]{left:0;margin-top:.125rem}.dropdown-menu-start{--bs-position: start}.dropdown-menu-start[data-bs-popper]{right:auto /* rtl:ignore */;left:0 /* rtl:ignore */}.dropdown-menu-end{--bs-position: end}.dropdown-menu-end[data-bs-popper]{right:0 /* rtl:ignore */;left:auto /* rtl:ignore */}@media (min-width: 576px){.dropdown-menu-sm-start{--bs-position: start}.dropdown-menu-sm-start[data-bs-popper]{right:auto /* rtl:ignore */;left:0 /* rtl:ignore */}.dropdown-menu-sm-end{--bs-position: end}.dropdown-menu-sm-end[data-bs-popper]{right:0 /* rtl:ignore */;left:auto /* rtl:ignore */}}@media (min-width: 768px){.dropdown-menu-md-start{--bs-position: start}.dropdown-menu-md-start[data-bs-popper]{right:auto /* rtl:ignore */;left:0 /* rtl:ignore */}.dropdown-menu-md-end{--bs-position: end}.dropdown-menu-md-end[data-bs-popper]{right:0 /* rtl:ignore */;left:auto /* rtl:ignore */}}@media (min-width: 992px){.dropdown-menu-lg-start{--bs-position: start}.dropdown-menu-lg-start[data-bs-popper]{right:auto /* rtl:ignore */;left:0 /* rtl:ignore */}.dropdown-menu-lg-end{--bs-position: end}.dropdown-menu-lg-end[data-bs-popper]{right:0 /* rtl:ignore */;left:auto /* rtl:ignore */}}@media (min-width: 1200px){.dropdown-menu-xl-start{--bs-position: start}.dropdown-menu-xl-start[data-bs-popper]{right:auto /* rtl:ignore */;left:0 /* rtl:ignore */}.dropdown-menu-xl-end{--bs-position: end}.dropdown-menu-xl-end[data-bs-popper]{right:0 /* rtl:ignore */;left:auto /* rtl:ignore */}}@media (min-width: 1400px){.dropdown-menu-xxl-start{--bs-position: start}.dropdown-menu-xxl-start[data-bs-popper]{right:auto /* rtl:ignore */;left:0 /* rtl:ignore */}.dropdown-menu-xxl-end{--bs-position: end}.dropdown-menu-xxl-end[data-bs-popper]{right:0 /* rtl:ignore */;left:auto /* rtl:ignore */}}.dropup .dropdown-menu{top:auto;bottom:100%}.dropup .dropdown-menu[data-bs-popper]{margin-top:0;margin-bottom:.125rem}.dropup .dropdown-toggle::after{display:inline-block;margin-left:.255em;vertical-align:.255em;content:\"\";border-top:0;border-right:.3em solid transparent;border-bottom:.3em solid;border-left:.3em solid transparent}.dropup .dropdown-toggle:empty::after{margin-left:0}.dropend .dropdown-menu{top:0;right:auto;left:100%}.dropend .dropdown-menu[data-bs-popper]{margin-top:0;margin-left:.125rem}.dropend .dropdown-toggle::after{display:inline-block;margin-left:.255em;vertical-align:.255em;content:\"\";border-top:.3em solid transparent;border-right:0;border-bottom:.3em solid transparent;border-left:.3em solid}.dropend .dropdown-toggle:empty::after{margin-left:0}.dropend .dropdown-toggle::after{vertical-align:0}.dropstart .dropdown-menu{top:0;right:100%;left:auto}.dropstart .dropdown-menu[data-bs-popper]{margin-top:0;margin-right:.125rem}.dropstart .dropdown-toggle::after{display:inline-block;margin-left:.255em;vertical-align:.255em;content:\"\"}.dropstart .dropdown-toggle::after{display:none}.dropstart .dropdown-toggle::before{display:inline-block;margin-right:.255em;vertical-align:.255em;content:\"\";border-top:.3em solid transparent;border-right:.3em solid;border-bottom:.3em solid transparent}.dropstart .dropdown-toggle:empty::after{margin-left:0}.dropstart .dropdown-toggle::before{vertical-align:0}.dropdown-divider{height:0;margin:.5rem 0;overflow:hidden;border-top:1px solid rgba(0,0,0,0.15)}.dropdown-item{display:block;width:100%;padding:.25rem 1rem;clear:both;font-weight:400;color:#212529;text-align:inherit;text-decoration:none;white-space:nowrap;background-color:transparent;border:0}.dropdown-item:hover,.dropdown-item:focus{color:#1e2125;background-color:#e9ecef}.dropdown-item.active,.dropdown-item:active{color:#fff;text-decoration:none;background-color:#0d6efd}.dropdown-item.disabled,.dropdown-item:disabled{color:#adb5bd;pointer-events:none;background-color:transparent}.dropdown-menu.show{display:block}.dropdown-header{display:block;padding:.5rem 1rem;margin-bottom:0;font-size:.875rem;color:#6c757d;white-space:nowrap}.dropdown-item-text{display:block;padding:.25rem 1rem;color:#212529}.dropdown-menu-dark{color:#dee2e6;background-color:#343a40;border-color:rgba(0,0,0,0.15)}.dropdown-menu-dark .dropdown-item{color:#dee2e6}.dropdown-menu-dark .dropdown-item:hover,.dropdown-menu-dark .dropdown-item:focus{color:#fff;background-color:rgba(255,255,255,0.15)}.dropdown-menu-dark .dropdown-item.active,.dropdown-menu-dark .dropdown-item:active{color:#fff;background-color:#0d6efd}.dropdown-menu-dark .dropdown-item.disabled,.dropdown-menu-dark .dropdown-item:disabled{color:#adb5bd}.dropdown-menu-dark .dropdown-divider{border-color:rgba(0,0,0,0.15)}.dropdown-menu-dark .dropdown-item-text{color:#dee2e6}.dropdown-menu-dark .dropdown-header{color:#adb5bd}.btn-group,.btn-group-vertical{position:relative;display:inline-flex;vertical-align:middle}.btn-group>.btn,.btn-group-vertical>.btn{position:relative;flex:1 1 auto}.btn-group>.btn-check:checked+.btn,.btn-group>.btn-check:focus+.btn,.btn-group>.btn:hover,.btn-group>.btn:focus,.btn-group>.btn:active,.btn-group>.btn.active,.btn-group-vertical>.btn-check:checked+.btn,.btn-group-vertical>.btn-check:focus+.btn,.btn-group-vertical>.btn:hover,.btn-group-vertical>.btn:focus,.btn-group-vertical>.btn:active,.btn-group-vertical>.btn.active{z-index:1}.btn-toolbar{display:flex;flex-wrap:wrap;justify-content:flex-start}.btn-toolbar .input-group{width:auto}.btn-group>.btn:not(:first-child),.btn-group>.btn-group:not(:first-child){margin-left:-1px}.btn-group>.btn:not(:last-child):not(.dropdown-toggle),.btn-group>.btn-group:not(:last-child)>.btn{border-top-right-radius:0;border-bottom-right-radius:0}.btn-group>.btn:nth-child(n+3),.btn-group>:not(.btn-check)+.btn,.btn-group>.btn-group:not(:first-child)>.btn{border-top-left-radius:0;border-bottom-left-radius:0}.dropdown-toggle-split{padding-right:.5625rem;padding-left:.5625rem}.dropdown-toggle-split::after,.dropup .dropdown-toggle-split::after,.dropend .dropdown-toggle-split::after{margin-left:0}.dropstart .dropdown-toggle-split::before{margin-right:0}.btn-sm+.dropdown-toggle-split,.btn-group-sm>.btn+.dropdown-toggle-split{padding-right:.375rem;padding-left:.375rem}.btn-lg+.dropdown-toggle-split,.btn-group-lg>.btn+.dropdown-toggle-split{padding-right:.75rem;padding-left:.75rem}.btn-group-vertical{flex-direction:column;align-items:flex-start;justify-content:center}.btn-group-vertical>.btn,.btn-group-vertical>.btn-group{width:100%}.btn-group-vertical>.btn:not(:first-child),.btn-group-vertical>.btn-group:not(:first-child){margin-top:-1px}.btn-group-vertical>.btn:not(:last-child):not(.dropdown-toggle),.btn-group-vertical>.btn-group:not(:last-child)>.btn{border-bottom-right-radius:0;border-bottom-left-radius:0}.btn-group-vertical>.btn ~ .btn,.btn-group-vertical>.btn-group:not(:first-child)>.btn{border-top-left-radius:0;border-top-right-radius:0}.nav{display:flex;flex-wrap:wrap;padding-left:0;margin-bottom:0;list-style:none}.nav-link{display:block;padding:.5rem 1rem;text-decoration:none;transition:color 0.15s ease-in-out,background-color 0.15s ease-in-out,border-color 0.15s ease-in-out}@media (prefers-reduced-motion: reduce){.nav-link{transition:none}}.nav-link.disabled{color:#6c757d;pointer-events:none;cursor:default}.nav-tabs{border-bottom:1px solid #dee2e6}.nav-tabs .nav-link{margin-bottom:-1px;background:none;border:1px solid transparent;border-top-left-radius:.25rem;border-top-right-radius:.25rem}.nav-tabs .nav-link:hover,.nav-tabs .nav-link:focus{border-color:#e9ecef #e9ecef #dee2e6;isolation:isolate}.nav-tabs .nav-link.disabled{color:#6c757d;background-color:transparent;border-color:transparent}.nav-tabs .nav-link.active,.nav-tabs .nav-item.show .nav-link{color:#495057;background-color:#fff;border-color:#dee2e6 #dee2e6 #fff}.nav-tabs .dropdown-menu{margin-top:-1px;border-top-left-radius:0;border-top-right-radius:0}.nav-pills .nav-link{background:none;border:0;border-radius:.25rem}.nav-pills .nav-link.active,.nav-pills .show>.nav-link{color:#fff;background-color:#0d6efd}.nav-fill>.nav-link,.nav-fill .nav-item{flex:1 1 auto;text-align:center}.nav-justified>.nav-link,.nav-justified .nav-item{flex-basis:0;flex-grow:1;text-align:center}.tab-content>.tab-pane{display:none}.tab-content>.active{display:block}.navbar{position:relative;display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;padding-top:.5rem;padding-bottom:.5rem}.navbar>.container,.navbar>.container-fluid,.navbar>.container-sm,.navbar>.container-md,.navbar>.container-lg,.navbar>.container-xl,.navbar>.container-xxl{display:flex;flex-wrap:inherit;align-items:center;justify-content:space-between}.navbar-brand{padding-top:.3125rem;padding-bottom:.3125rem;margin-right:1rem;font-size:1.25rem;text-decoration:none;white-space:nowrap}.navbar-nav{display:flex;flex-direction:column;padding-left:0;margin-bottom:0;list-style:none}.navbar-nav .nav-link{padding-right:0;padding-left:0}.navbar-nav .dropdown-menu{position:static}.navbar-text{padding-top:.5rem;padding-bottom:.5rem}.navbar-collapse{flex-basis:100%;flex-grow:1;align-items:center}.navbar-toggler{padding:.25rem .75rem;font-size:1.25rem;line-height:1;background-color:transparent;border:1px solid transparent;border-radius:.25rem;transition:box-shadow 0.15s ease-in-out}@media (prefers-reduced-motion: reduce){.navbar-toggler{transition:none}}.navbar-toggler:hover{text-decoration:none}.navbar-toggler:focus{text-decoration:none;outline:0;box-shadow:0 0 0 .25rem}.navbar-toggler-icon{display:inline-block;width:1.5em;height:1.5em;vertical-align:middle;background-repeat:no-repeat;background-position:center;background-size:100%}.navbar-nav-scroll{max-height:var(--bs-scroll-height, 75vh);overflow-y:auto}@media (min-width: 576px){.navbar-expand-sm{flex-wrap:nowrap;justify-content:flex-start}.navbar-expand-sm .navbar-nav{flex-direction:row}.navbar-expand-sm .navbar-nav .dropdown-menu{position:absolute}.navbar-expand-sm .navbar-nav .nav-link{padding-right:.5rem;padding-left:.5rem}.navbar-expand-sm .navbar-nav-scroll{overflow:visible}.navbar-expand-sm .navbar-collapse{display:flex !important;flex-basis:auto}.navbar-expand-sm .navbar-toggler{display:none}}@media (min-width: 768px){.navbar-expand-md{flex-wrap:nowrap;justify-content:flex-start}.navbar-expand-md .navbar-nav{flex-direction:row}.navbar-expand-md .navbar-nav .dropdown-menu{position:absolute}.navbar-expand-md .navbar-nav .nav-link{padding-right:.5rem;padding-left:.5rem}.navbar-expand-md .navbar-nav-scroll{overflow:visible}.navbar-expand-md .navbar-collapse{display:flex !important;flex-basis:auto}.navbar-expand-md .navbar-toggler{display:none}}@media (min-width: 992px){.navbar-expand-lg{flex-wrap:nowrap;justify-content:flex-start}.navbar-expand-lg .navbar-nav{flex-direction:row}.navbar-expand-lg .navbar-nav .dropdown-menu{position:absolute}.navbar-expand-lg .navbar-nav .nav-link{padding-right:.5rem;padding-left:.5rem}.navbar-expand-lg .navbar-nav-scroll{overflow:visible}.navbar-expand-lg .navbar-collapse{display:flex !important;flex-basis:auto}.navbar-expand-lg .navbar-toggler{display:none}}@media (min-width: 1200px){.navbar-expand-xl{flex-wrap:nowrap;justify-content:flex-start}.navbar-expand-xl .navbar-nav{flex-direction:row}.navbar-expand-xl .navbar-nav .dropdown-menu{position:absolute}.navbar-expand-xl .navbar-nav .nav-link{padding-right:.5rem;padding-left:.5rem}.navbar-expand-xl .navbar-nav-scroll{overflow:visible}.navbar-expand-xl .navbar-collapse{display:flex !important;flex-basis:auto}.navbar-expand-xl .navbar-toggler{display:none}}@media (min-width: 1400px){.navbar-expand-xxl{flex-wrap:nowrap;justify-content:flex-start}.navbar-expand-xxl .navbar-nav{flex-direction:row}.navbar-expand-xxl .navbar-nav .dropdown-menu{position:absolute}.navbar-expand-xxl .navbar-nav .nav-link{padding-right:.5rem;padding-left:.5rem}.navbar-expand-xxl .navbar-nav-scroll{overflow:visible}.navbar-expand-xxl .navbar-collapse{display:flex !important;flex-basis:auto}.navbar-expand-xxl .navbar-toggler{display:none}}.navbar-expand{flex-wrap:nowrap;justify-content:flex-start}.navbar-expand .navbar-nav{flex-direction:row}.navbar-expand .navbar-nav .dropdown-menu{position:absolute}.navbar-expand .navbar-nav .nav-link{padding-right:.5rem;padding-left:.5rem}.navbar-expand .navbar-nav-scroll{overflow:visible}.navbar-expand .navbar-collapse{display:flex !important;flex-basis:auto}.navbar-expand .navbar-toggler{display:none}.navbar-light .navbar-brand{color:rgba(0,0,0,0.9)}.navbar-light .navbar-brand:hover,.navbar-light .navbar-brand:focus{color:rgba(0,0,0,0.9)}.navbar-light .navbar-nav .nav-link{color:rgba(0,0,0,0.55)}.navbar-light .navbar-nav .nav-link:hover,.navbar-light .navbar-nav .nav-link:focus{color:rgba(0,0,0,0.7)}.navbar-light .navbar-nav .nav-link.disabled{color:rgba(0,0,0,0.3)}.navbar-light .navbar-nav .show>.nav-link,.navbar-light .navbar-nav .nav-link.active{color:rgba(0,0,0,0.9)}.navbar-light .navbar-toggler{color:rgba(0,0,0,0.55);border-color:rgba(0,0,0,0.1)}.navbar-light .navbar-toggler-icon{background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='rgba%280,0,0,0.55%29' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e\")}.navbar-light .navbar-text{color:rgba(0,0,0,0.55)}.navbar-light .navbar-text a,.navbar-light .navbar-text a:hover,.navbar-light .navbar-text a:focus{color:rgba(0,0,0,0.9)}.navbar-dark .navbar-brand{color:#fff}.navbar-dark .navbar-brand:hover,.navbar-dark .navbar-brand:focus{color:#fff}.navbar-dark .navbar-nav .nav-link{color:rgba(255,255,255,0.55)}.navbar-dark .navbar-nav .nav-link:hover,.navbar-dark .navbar-nav .nav-link:focus{color:rgba(255,255,255,0.75)}.navbar-dark .navbar-nav .nav-link.disabled{color:rgba(255,255,255,0.25)}.navbar-dark .navbar-nav .show>.nav-link,.navbar-dark .navbar-nav .nav-link.active{color:#fff}.navbar-dark .navbar-toggler{color:rgba(255,255,255,0.55);border-color:rgba(255,255,255,0.1)}.navbar-dark .navbar-toggler-icon{background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='rgba%28255,255,255,0.55%29' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e\")}.navbar-dark .navbar-text{color:rgba(255,255,255,0.55)}.navbar-dark .navbar-text a,.navbar-dark .navbar-text a:hover,.navbar-dark .navbar-text a:focus{color:#fff}.card{position:relative;display:flex;flex-direction:column;min-width:0;word-wrap:break-word;background-color:#fff;background-clip:border-box;border:1px solid rgba(0,0,0,0.125);border-radius:.25rem}.card>hr{margin-right:0;margin-left:0}.card>.list-group{border-top:inherit;border-bottom:inherit}.card>.list-group:first-child{border-top-width:0;border-top-left-radius:calc(.25rem - 1px);border-top-right-radius:calc(.25rem - 1px)}.card>.list-group:last-child{border-bottom-width:0;border-bottom-right-radius:calc(.25rem - 1px);border-bottom-left-radius:calc(.25rem - 1px)}.card>.card-header+.list-group,.card>.list-group+.card-footer{border-top:0}.card-body{flex:1 1 auto;padding:1rem 1rem}.card-title{margin-bottom:.5rem}.card-subtitle{margin-top:-.25rem;margin-bottom:0}.card-text:last-child{margin-bottom:0}.card-link:hover{text-decoration:none}.card-link+.card-link{margin-left:1rem /* rtl:ignore */}.card-header{padding:.5rem 1rem;margin-bottom:0;background-color:rgba(0,0,0,0.03);border-bottom:1px solid rgba(0,0,0,0.125)}.card-header:first-child{border-radius:calc(.25rem - 1px) calc(.25rem - 1px) 0 0}.card-footer{padding:.5rem 1rem;background-color:rgba(0,0,0,0.03);border-top:1px solid rgba(0,0,0,0.125)}.card-footer:last-child{border-radius:0 0 calc(.25rem - 1px) calc(.25rem - 1px)}.card-header-tabs{margin-right:-.5rem;margin-bottom:-.5rem;margin-left:-.5rem;border-bottom:0}.card-header-pills{margin-right:-.5rem;margin-left:-.5rem}.card-img-overlay{position:absolute;top:0;right:0;bottom:0;left:0;padding:1rem;border-radius:calc(.25rem - 1px)}.card-img,.card-img-top,.card-img-bottom{width:100%}.card-img,.card-img-top{border-top-left-radius:calc(.25rem - 1px);border-top-right-radius:calc(.25rem - 1px)}.card-img,.card-img-bottom{border-bottom-right-radius:calc(.25rem - 1px);border-bottom-left-radius:calc(.25rem - 1px)}.card-group>.card{margin-bottom:.75rem}@media (min-width: 576px){.card-group{display:flex;flex-flow:row wrap}.card-group>.card{flex:1 0 0%;margin-bottom:0}.card-group>.card+.card{margin-left:0;border-left:0}.card-group>.card:not(:last-child){border-top-right-radius:0;border-bottom-right-radius:0}.card-group>.card:not(:last-child) .card-img-top,.card-group>.card:not(:last-child) .card-header{border-top-right-radius:0}.card-group>.card:not(:last-child) .card-img-bottom,.card-group>.card:not(:last-child) .card-footer{border-bottom-right-radius:0}.card-group>.card:not(:first-child){border-top-left-radius:0;border-bottom-left-radius:0}.card-group>.card:not(:first-child) .card-img-top,.card-group>.card:not(:first-child) .card-header{border-top-left-radius:0}.card-group>.card:not(:first-child) .card-img-bottom,.card-group>.card:not(:first-child) .card-footer{border-bottom-left-radius:0}}.accordion-button{position:relative;display:flex;align-items:center;width:100%;padding:1rem 1.25rem;font-size:1rem;color:#212529;text-align:left;background-color:rgba(0,0,0,0);border:1px solid rgba(0,0,0,0.125);border-radius:0;overflow-anchor:none;transition:color 0.15s ease-in-out,background-color 0.15s ease-in-out,border-color 0.15s ease-in-out,box-shadow 0.15s ease-in-out,border-radius 0.15s ease}@media (prefers-reduced-motion: reduce){.accordion-button{transition:none}}.accordion-button.collapsed{border-bottom-width:0}.accordion-button:not(.collapsed){color:#0c63e4;background-color:#e7f1ff}.accordion-button:not(.collapsed)::after{background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%230c63e4'%3e%3cpath fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/%3e%3c/svg%3e\");transform:rotate(180deg)}.accordion-button::after{flex-shrink:0;width:1.25rem;height:1.25rem;margin-left:auto;content:\"\";background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23212529'%3e%3cpath fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/%3e%3c/svg%3e\");background-repeat:no-repeat;background-size:1.25rem;transition:transform 0.2s ease-in-out}@media (prefers-reduced-motion: reduce){.accordion-button::after{transition:none}}.accordion-button:hover{z-index:2}.accordion-button:focus{z-index:3;border-color:#86b7fe;outline:0;box-shadow:0 0 0 .25rem rgba(13,110,253,0.25)}.accordion-header{margin-bottom:0}.accordion-item:first-of-type .accordion-button{border-top-left-radius:.25rem;border-top-right-radius:.25rem}.accordion-item:last-of-type .accordion-button.collapsed{border-bottom-width:1px;border-bottom-right-radius:.25rem;border-bottom-left-radius:.25rem}.accordion-item:last-of-type .accordion-collapse{border-bottom-width:1px;border-bottom-right-radius:.25rem;border-bottom-left-radius:.25rem}.accordion-collapse{border:solid rgba(0,0,0,0.125);border-width:0 1px}.accordion-body{padding:1rem 1.25rem}.accordion-flush .accordion-button{border-right:0;border-left:0;border-radius:0}.accordion-flush .accordion-collapse{border-width:0}.accordion-flush .accordion-item:first-of-type .accordion-button{border-top-width:0;border-top-left-radius:0;border-top-right-radius:0}.accordion-flush .accordion-item:last-of-type .accordion-button.collapsed{border-bottom-width:0;border-bottom-right-radius:0;border-bottom-left-radius:0}.breadcrumb{display:flex;flex-wrap:wrap;padding:0 0;margin-bottom:1rem;list-style:none}.breadcrumb-item+.breadcrumb-item{padding-left:.5rem}.breadcrumb-item+.breadcrumb-item::before{float:left;padding-right:.5rem;color:#6c757d;content:var(--bs-breadcrumb-divider, \"/\") /* rtl: var(--bs-breadcrumb-divider, \"/\") */}.breadcrumb-item.active{color:#6c757d}.pagination{display:flex;padding-left:0;list-style:none}.page-link{position:relative;display:block;color:#0d6efd;text-decoration:none;background-color:#fff;border:1px solid #dee2e6;transition:color 0.15s ease-in-out,background-color 0.15s ease-in-out,border-color 0.15s ease-in-out,box-shadow 0.15s ease-in-out}@media (prefers-reduced-motion: reduce){.page-link{transition:none}}.page-link:hover{z-index:2;color:#0a58ca;background-color:#e9ecef;border-color:#dee2e6}.page-link:focus{z-index:3;color:#0a58ca;background-color:#e9ecef;outline:0;box-shadow:0 0 0 .25rem rgba(13,110,253,0.25)}.page-item:not(:first-child) .page-link{margin-left:-1px}.page-item.active .page-link{z-index:3;color:#fff;background-color:#0d6efd;border-color:#0d6efd}.page-item.disabled .page-link{color:#6c757d;pointer-events:none;background-color:#fff;border-color:#dee2e6}.page-link{padding:.375rem .75rem}.page-item:first-child .page-link{border-top-left-radius:.25rem;border-bottom-left-radius:.25rem}.page-item:last-child .page-link{border-top-right-radius:.25rem;border-bottom-right-radius:.25rem}.pagination-lg .page-link{padding:.75rem 1.5rem;font-size:1.25rem}.pagination-lg .page-item:first-child .page-link{border-top-left-radius:.3rem;border-bottom-left-radius:.3rem}.pagination-lg .page-item:last-child .page-link{border-top-right-radius:.3rem;border-bottom-right-radius:.3rem}.pagination-sm .page-link{padding:.25rem .5rem;font-size:.875rem}.pagination-sm .page-item:first-child .page-link{border-top-left-radius:.2rem;border-bottom-left-radius:.2rem}.pagination-sm .page-item:last-child .page-link{border-top-right-radius:.2rem;border-bottom-right-radius:.2rem}.badge{display:inline-block;padding:.35em .65em;font-size:.75em;font-weight:700;line-height:1;color:#fff;text-align:center;white-space:nowrap;vertical-align:baseline;border-radius:.25rem}.badge:empty{display:none}.btn .badge{position:relative;top:-1px}.alert{position:relative;padding:1rem 1rem;margin-bottom:1rem;border:1px solid transparent;border-radius:.25rem}.alert-heading{color:inherit}.alert-link{font-weight:700}.alert-dismissible{padding-right:3rem}.alert-dismissible .btn-close{position:absolute;top:0;right:0;z-index:2;padding:1.25rem 1rem}.alert-primary{color:#084298;background-color:#cfe2ff;border-color:#b6d4fe}.alert-primary .alert-link{color:#06357a}.alert-secondary{color:#41464b;background-color:#e2e3e5;border-color:#d3d6d8}.alert-secondary .alert-link{color:#34383c}.alert-success{color:#0f5132;background-color:#d1e7dd;border-color:#badbcc}.alert-success .alert-link{color:#0c4128}.alert-info{color:#055160;background-color:#cff4fc;border-color:#b6effb}.alert-info .alert-link{color:#04414d}.alert-warning{color:#664d03;background-color:#fff3cd;border-color:#ffecb5}.alert-warning .alert-link{color:#523e02}.alert-danger{color:#842029;background-color:#f8d7da;border-color:#f5c2c7}.alert-danger .alert-link{color:#6a1a21}.alert-light{color:#636464;background-color:#fefefe;border-color:#fdfdfe}.alert-light .alert-link{color:#4f5050}.alert-dark{color:#141619;background-color:#d3d3d4;border-color:#bcbebf}.alert-dark .alert-link{color:#101214}@keyframes progress-bar-stripes{0%{background-position-x:1rem}}.progress{display:flex;height:1rem;overflow:hidden;font-size:.75rem;background-color:#e9ecef;border-radius:.25rem}.progress-bar{display:flex;flex-direction:column;justify-content:center;overflow:hidden;color:#fff;text-align:center;white-space:nowrap;background-color:#0d6efd;transition:width 0.6s ease}@media (prefers-reduced-motion: reduce){.progress-bar{transition:none}}.progress-bar-striped{background-image:linear-gradient(45deg, rgba(255,255,255,0.15) 25%, transparent 25%, transparent 50%, rgba(255,255,255,0.15) 50%, rgba(255,255,255,0.15) 75%, transparent 75%, transparent);background-size:1rem 1rem}.progress-bar-animated{animation:1s linear infinite progress-bar-stripes}@media (prefers-reduced-motion: reduce){.progress-bar-animated{animation:none}}.list-group{display:flex;flex-direction:column;padding-left:0;margin-bottom:0;border-radius:.25rem}.list-group-item-action{width:100%;color:#495057;text-align:inherit}.list-group-item-action:hover,.list-group-item-action:focus{z-index:1;color:#495057;text-decoration:none;background-color:#f8f9fa}.list-group-item-action:active{color:#212529;background-color:#e9ecef}.list-group-item{position:relative;display:block;padding:.5rem 1rem;text-decoration:none;background-color:#fff;border:1px solid rgba(0,0,0,0.125)}.list-group-item:first-child{border-top-left-radius:inherit;border-top-right-radius:inherit}.list-group-item:last-child{border-bottom-right-radius:inherit;border-bottom-left-radius:inherit}.list-group-item.disabled,.list-group-item:disabled{color:#6c757d;pointer-events:none;background-color:#fff}.list-group-item.active{z-index:2;color:#fff;background-color:#0d6efd;border-color:#0d6efd}.list-group-item+.list-group-item{border-top-width:0}.list-group-item+.list-group-item.active{margin-top:-1px;border-top-width:1px}.list-group-horizontal{flex-direction:row}.list-group-horizontal>.list-group-item:first-child{border-bottom-left-radius:.25rem;border-top-right-radius:0}.list-group-horizontal>.list-group-item:last-child{border-top-right-radius:.25rem;border-bottom-left-radius:0}.list-group-horizontal>.list-group-item.active{margin-top:0}.list-group-horizontal>.list-group-item+.list-group-item{border-top-width:1px;border-left-width:0}.list-group-horizontal>.list-group-item+.list-group-item.active{margin-left:-1px;border-left-width:1px}@media (min-width: 576px){.list-group-horizontal-sm{flex-direction:row}.list-group-horizontal-sm>.list-group-item:first-child{border-bottom-left-radius:.25rem;border-top-right-radius:0}.list-group-horizontal-sm>.list-group-item:last-child{border-top-right-radius:.25rem;border-bottom-left-radius:0}.list-group-horizontal-sm>.list-group-item.active{margin-top:0}.list-group-horizontal-sm>.list-group-item+.list-group-item{border-top-width:1px;border-left-width:0}.list-group-horizontal-sm>.list-group-item+.list-group-item.active{margin-left:-1px;border-left-width:1px}}@media (min-width: 768px){.list-group-horizontal-md{flex-direction:row}.list-group-horizontal-md>.list-group-item:first-child{border-bottom-left-radius:.25rem;border-top-right-radius:0}.list-group-horizontal-md>.list-group-item:last-child{border-top-right-radius:.25rem;border-bottom-left-radius:0}.list-group-horizontal-md>.list-group-item.active{margin-top:0}.list-group-horizontal-md>.list-group-item+.list-group-item{border-top-width:1px;border-left-width:0}.list-group-horizontal-md>.list-group-item+.list-group-item.active{margin-left:-1px;border-left-width:1px}}@media (min-width: 992px){.list-group-horizontal-lg{flex-direction:row}.list-group-horizontal-lg>.list-group-item:first-child{border-bottom-left-radius:.25rem;border-top-right-radius:0}.list-group-horizontal-lg>.list-group-item:last-child{border-top-right-radius:.25rem;border-bottom-left-radius:0}.list-group-horizontal-lg>.list-group-item.active{margin-top:0}.list-group-horizontal-lg>.list-group-item+.list-group-item{border-top-width:1px;border-left-width:0}.list-group-horizontal-lg>.list-group-item+.list-group-item.active{margin-left:-1px;border-left-width:1px}}@media (min-width: 1200px){.list-group-horizontal-xl{flex-direction:row}.list-group-horizontal-xl>.list-group-item:first-child{border-bottom-left-radius:.25rem;border-top-right-radius:0}.list-group-horizontal-xl>.list-group-item:last-child{border-top-right-radius:.25rem;border-bottom-left-radius:0}.list-group-horizontal-xl>.list-group-item.active{margin-top:0}.list-group-horizontal-xl>.list-group-item+.list-group-item{border-top-width:1px;border-left-width:0}.list-group-horizontal-xl>.list-group-item+.list-group-item.active{margin-left:-1px;border-left-width:1px}}@media (min-width: 1400px){.list-group-horizontal-xxl{flex-direction:row}.list-group-horizontal-xxl>.list-group-item:first-child{border-bottom-left-radius:.25rem;border-top-right-radius:0}.list-group-horizontal-xxl>.list-group-item:last-child{border-top-right-radius:.25rem;border-bottom-left-radius:0}.list-group-horizontal-xxl>.list-group-item.active{margin-top:0}.list-group-horizontal-xxl>.list-group-item+.list-group-item{border-top-width:1px;border-left-width:0}.list-group-horizontal-xxl>.list-group-item+.list-group-item.active{margin-left:-1px;border-left-width:1px}}.list-group-flush{border-radius:0}.list-group-flush>.list-group-item{border-width:0 0 1px}.list-group-flush>.list-group-item:last-child{border-bottom-width:0}.list-group-item-primary{color:#084298;background-color:#cfe2ff}.list-group-item-primary.list-group-item-action:hover,.list-group-item-primary.list-group-item-action:focus{color:#084298;background-color:#bacbe6}.list-group-item-primary.list-group-item-action.active{color:#fff;background-color:#084298;border-color:#084298}.list-group-item-secondary{color:#41464b;background-color:#e2e3e5}.list-group-item-secondary.list-group-item-action:hover,.list-group-item-secondary.list-group-item-action:focus{color:#41464b;background-color:#cbccce}.list-group-item-secondary.list-group-item-action.active{color:#fff;background-color:#41464b;border-color:#41464b}.list-group-item-success{color:#0f5132;background-color:#d1e7dd}.list-group-item-success.list-group-item-action:hover,.list-group-item-success.list-group-item-action:focus{color:#0f5132;background-color:#bcd0c7}.list-group-item-success.list-group-item-action.active{color:#fff;background-color:#0f5132;border-color:#0f5132}.list-group-item-info{color:#055160;background-color:#cff4fc}.list-group-item-info.list-group-item-action:hover,.list-group-item-info.list-group-item-action:focus{color:#055160;background-color:#badce3}.list-group-item-info.list-group-item-action.active{color:#fff;background-color:#055160;border-color:#055160}.list-group-item-warning{color:#664d03;background-color:#fff3cd}.list-group-item-warning.list-group-item-action:hover,.list-group-item-warning.list-group-item-action:focus{color:#664d03;background-color:#e6dbb9}.list-group-item-warning.list-group-item-action.active{color:#fff;background-color:#664d03;border-color:#664d03}.list-group-item-danger{color:#842029;background-color:#f8d7da}.list-group-item-danger.list-group-item-action:hover,.list-group-item-danger.list-group-item-action:focus{color:#842029;background-color:#dfc2c4}.list-group-item-danger.list-group-item-action.active{color:#fff;background-color:#842029;border-color:#842029}.list-group-item-light{color:#636464;background-color:#fefefe}.list-group-item-light.list-group-item-action:hover,.list-group-item-light.list-group-item-action:focus{color:#636464;background-color:#e5e5e5}.list-group-item-light.list-group-item-action.active{color:#fff;background-color:#636464;border-color:#636464}.list-group-item-dark{color:#141619;background-color:#d3d3d4}.list-group-item-dark.list-group-item-action:hover,.list-group-item-dark.list-group-item-action:focus{color:#141619;background-color:#bebebf}.list-group-item-dark.list-group-item-action.active{color:#fff;background-color:#141619;border-color:#141619}.btn-close{box-sizing:content-box;width:1em;height:1em;padding:.25em .25em;color:#000;background:transparent url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23000'%3e%3cpath d='M.293.293a1 1 0 011.414 0L8 6.586 14.293.293a1 1 0 111.414 1.414L9.414 8l6.293 6.293a1 1 0 01-1.414 1.414L8 9.414l-6.293 6.293a1 1 0 01-1.414-1.414L6.586 8 .293 1.707a1 1 0 010-1.414z'/%3e%3c/svg%3e\") center/1em auto no-repeat;border:0;border-radius:.25rem;opacity:.5}.btn-close:hover{color:#000;text-decoration:none;opacity:.75}.btn-close:focus{outline:0;box-shadow:0 0 0 .25rem rgba(13,110,253,0.25);opacity:1}.btn-close:disabled,.btn-close.disabled{pointer-events:none;user-select:none;opacity:.25}.btn-close-white{filter:invert(1) grayscale(100%) brightness(200%)}.toast{width:350px;max-width:100%;font-size:.875rem;pointer-events:auto;background-color:rgba(255,255,255,0.85);background-clip:padding-box;border:1px solid rgba(0,0,0,0.1);box-shadow:0 0.5rem 1rem rgba(0,0,0,0.15);border-radius:.25rem}.toast:not(.showing):not(.show){opacity:0}.toast.hide{display:none}.toast-container{width:max-content;max-width:100%;pointer-events:none}.toast-container>:not(:last-child){margin-bottom:.75rem}.toast-header{display:flex;align-items:center;padding:.5rem .75rem;color:#6c757d;background-color:rgba(255,255,255,0.85);background-clip:padding-box;border-bottom:1px solid rgba(0,0,0,0.05);border-top-left-radius:calc(.25rem - 1px);border-top-right-radius:calc(.25rem - 1px)}.toast-header .btn-close{margin-right:-.375rem;margin-left:.75rem}.toast-body{padding:.75rem;word-wrap:break-word}.modal-open{overflow:hidden}.modal-open .modal{overflow-x:hidden;overflow-y:auto}.modal{position:fixed;top:0;left:0;z-index:1050;display:none;width:100%;height:100%;overflow:hidden;outline:0}.modal-dialog{position:relative;width:auto;margin:.5rem;pointer-events:none}.modal.fade .modal-dialog{transition:transform 0.3s ease-out;transform:translate(0, -50px)}@media (prefers-reduced-motion: reduce){.modal.fade .modal-dialog{transition:none}}.modal.show .modal-dialog{transform:none}.modal.modal-static .modal-dialog{transform:scale(1.02)}.modal-dialog-scrollable{height:calc(100% - 1rem)}.modal-dialog-scrollable .modal-content{max-height:100%;overflow:hidden}.modal-dialog-scrollable .modal-body{overflow-y:auto}.modal-dialog-centered{display:flex;align-items:center;min-height:calc(100% - 1rem)}.modal-content{position:relative;display:flex;flex-direction:column;width:100%;pointer-events:auto;background-color:#fff;background-clip:padding-box;border:1px solid rgba(0,0,0,0.2);border-radius:.3rem;outline:0}.modal-backdrop{position:fixed;top:0;left:0;z-index:1040;width:100vw;height:100vh;background-color:#000}.modal-backdrop.fade{opacity:0}.modal-backdrop.show{opacity:.5}.modal-header{display:flex;flex-shrink:0;align-items:center;justify-content:space-between;padding:1rem 1rem;border-bottom:1px solid #dee2e6;border-top-left-radius:calc(.3rem - 1px);border-top-right-radius:calc(.3rem - 1px)}.modal-header .btn-close{padding:.5rem .5rem;margin:-.5rem -.5rem -.5rem auto}.modal-title{margin-bottom:0;line-height:1.5}.modal-body{position:relative;flex:1 1 auto;padding:1rem}.modal-footer{display:flex;flex-wrap:wrap;flex-shrink:0;align-items:center;justify-content:flex-end;padding:.75rem;border-top:1px solid #dee2e6;border-bottom-right-radius:calc(.3rem - 1px);border-bottom-left-radius:calc(.3rem - 1px)}.modal-footer>*{margin:.25rem}.modal-scrollbar-measure{position:absolute;top:-9999px;width:50px;height:50px;overflow:scroll}@media (min-width: 576px){.modal-dialog{max-width:500px;margin:1.75rem auto}.modal-dialog-scrollable{height:calc(100% - 3.5rem)}.modal-dialog-centered{min-height:calc(100% - 3.5rem)}.modal-sm{max-width:300px}}@media (min-width: 992px){.modal-lg,.modal-xl{max-width:800px}}@media (min-width: 1200px){.modal-xl{max-width:1140px}}.modal-fullscreen{width:100vw;max-width:none;height:100%;margin:0}.modal-fullscreen .modal-content{height:100%;border:0;border-radius:0}.modal-fullscreen .modal-header{border-radius:0}.modal-fullscreen .modal-body{overflow-y:auto}.modal-fullscreen .modal-footer{border-radius:0}@media (max-width: 575.98px){.modal-fullscreen-sm-down{width:100vw;max-width:none;height:100%;margin:0}.modal-fullscreen-sm-down .modal-content{height:100%;border:0;border-radius:0}.modal-fullscreen-sm-down .modal-header{border-radius:0}.modal-fullscreen-sm-down .modal-body{overflow-y:auto}.modal-fullscreen-sm-down .modal-footer{border-radius:0}}@media (max-width: 767.98px){.modal-fullscreen-md-down{width:100vw;max-width:none;height:100%;margin:0}.modal-fullscreen-md-down .modal-content{height:100%;border:0;border-radius:0}.modal-fullscreen-md-down .modal-header{border-radius:0}.modal-fullscreen-md-down .modal-body{overflow-y:auto}.modal-fullscreen-md-down .modal-footer{border-radius:0}}@media (max-width: 991.98px){.modal-fullscreen-lg-down{width:100vw;max-width:none;height:100%;margin:0}.modal-fullscreen-lg-down .modal-content{height:100%;border:0;border-radius:0}.modal-fullscreen-lg-down .modal-header{border-radius:0}.modal-fullscreen-lg-down .modal-body{overflow-y:auto}.modal-fullscreen-lg-down .modal-footer{border-radius:0}}@media (max-width: 1199.98px){.modal-fullscreen-xl-down{width:100vw;max-width:none;height:100%;margin:0}.modal-fullscreen-xl-down .modal-content{height:100%;border:0;border-radius:0}.modal-fullscreen-xl-down .modal-header{border-radius:0}.modal-fullscreen-xl-down .modal-body{overflow-y:auto}.modal-fullscreen-xl-down .modal-footer{border-radius:0}}@media (max-width: 1399.98px){.modal-fullscreen-xxl-down{width:100vw;max-width:none;height:100%;margin:0}.modal-fullscreen-xxl-down .modal-content{height:100%;border:0;border-radius:0}.modal-fullscreen-xxl-down .modal-header{border-radius:0}.modal-fullscreen-xxl-down .modal-body{overflow-y:auto}.modal-fullscreen-xxl-down .modal-footer{border-radius:0}}.tooltip{position:absolute;z-index:1070;display:block;margin:0;font-family:var(--bs-font-sans-serif);font-style:normal;font-weight:400;line-height:1.5;text-align:left;text-align:start;text-decoration:none;text-shadow:none;text-transform:none;letter-spacing:normal;word-break:normal;word-spacing:normal;white-space:normal;line-break:auto;font-size:.875rem;word-wrap:break-word;opacity:0}.tooltip.show{opacity:.9}.tooltip .tooltip-arrow{position:absolute;display:block;width:.8rem;height:.4rem}.tooltip .tooltip-arrow::before{position:absolute;content:\"\";border-color:transparent;border-style:solid}.bs-tooltip-top,.bs-tooltip-auto[data-popper-placement^=\"top\"]{padding:.4rem 0}.bs-tooltip-top .tooltip-arrow,.bs-tooltip-auto[data-popper-placement^=\"top\"] .tooltip-arrow{bottom:0}.bs-tooltip-top .tooltip-arrow::before,.bs-tooltip-auto[data-popper-placement^=\"top\"] .tooltip-arrow::before{top:-1px;border-width:.4rem .4rem 0;border-top-color:#000}.bs-tooltip-end,.bs-tooltip-auto[data-popper-placement^=\"right\"]{padding:0 .4rem}.bs-tooltip-end .tooltip-arrow,.bs-tooltip-auto[data-popper-placement^=\"right\"] .tooltip-arrow{left:0;width:.4rem;height:.8rem}.bs-tooltip-end .tooltip-arrow::before,.bs-tooltip-auto[data-popper-placement^=\"right\"] .tooltip-arrow::before{right:-1px;border-width:.4rem .4rem .4rem 0;border-right-color:#000}.bs-tooltip-bottom,.bs-tooltip-auto[data-popper-placement^=\"bottom\"]{padding:.4rem 0}.bs-tooltip-bottom .tooltip-arrow,.bs-tooltip-auto[data-popper-placement^=\"bottom\"] .tooltip-arrow{top:0}.bs-tooltip-bottom .tooltip-arrow::before,.bs-tooltip-auto[data-popper-placement^=\"bottom\"] .tooltip-arrow::before{bottom:-1px;border-width:0 .4rem .4rem;border-bottom-color:#000}.bs-tooltip-start,.bs-tooltip-auto[data-popper-placement^=\"left\"]{padding:0 .4rem}.bs-tooltip-start .tooltip-arrow,.bs-tooltip-auto[data-popper-placement^=\"left\"] .tooltip-arrow{right:0;width:.4rem;height:.8rem}.bs-tooltip-start .tooltip-arrow::before,.bs-tooltip-auto[data-popper-placement^=\"left\"] .tooltip-arrow::before{left:-1px;border-width:.4rem 0 .4rem .4rem;border-left-color:#000}.tooltip-inner{max-width:200px;padding:.25rem .5rem;color:#fff;text-align:center;background-color:#000;border-radius:.25rem}.popover{position:absolute;top:0;left:0 /* rtl:ignore */;z-index:1060;display:block;max-width:276px;font-family:var(--bs-font-sans-serif);font-style:normal;font-weight:400;line-height:1.5;text-align:left;text-align:start;text-decoration:none;text-shadow:none;text-transform:none;letter-spacing:normal;word-break:normal;word-spacing:normal;white-space:normal;line-break:auto;font-size:.875rem;word-wrap:break-word;background-color:#fff;background-clip:padding-box;border:1px solid rgba(0,0,0,0.2);border-radius:.3rem}.popover .popover-arrow{position:absolute;display:block;width:1rem;height:.5rem}.popover .popover-arrow::before,.popover .popover-arrow::after{position:absolute;display:block;content:\"\";border-color:transparent;border-style:solid}.bs-popover-top>.popover-arrow,.bs-popover-auto[data-popper-placement^=\"top\"]>.popover-arrow{bottom:calc(-.5rem - 1px)}.bs-popover-top>.popover-arrow::before,.bs-popover-auto[data-popper-placement^=\"top\"]>.popover-arrow::before{bottom:0;border-width:.5rem .5rem 0;border-top-color:rgba(0,0,0,0.25)}.bs-popover-top>.popover-arrow::after,.bs-popover-auto[data-popper-placement^=\"top\"]>.popover-arrow::after{bottom:1px;border-width:.5rem .5rem 0;border-top-color:#fff}.bs-popover-end>.popover-arrow,.bs-popover-auto[data-popper-placement^=\"right\"]>.popover-arrow{left:calc(-.5rem - 1px);width:.5rem;height:1rem}.bs-popover-end>.popover-arrow::before,.bs-popover-auto[data-popper-placement^=\"right\"]>.popover-arrow::before{left:0;border-width:.5rem .5rem .5rem 0;border-right-color:rgba(0,0,0,0.25)}.bs-popover-end>.popover-arrow::after,.bs-popover-auto[data-popper-placement^=\"right\"]>.popover-arrow::after{left:1px;border-width:.5rem .5rem .5rem 0;border-right-color:#fff}.bs-popover-bottom>.popover-arrow,.bs-popover-auto[data-popper-placement^=\"bottom\"]>.popover-arrow{top:calc(-.5rem - 1px)}.bs-popover-bottom>.popover-arrow::before,.bs-popover-auto[data-popper-placement^=\"bottom\"]>.popover-arrow::before{top:0;border-width:0 .5rem .5rem .5rem;border-bottom-color:rgba(0,0,0,0.25)}.bs-popover-bottom>.popover-arrow::after,.bs-popover-auto[data-popper-placement^=\"bottom\"]>.popover-arrow::after{top:1px;border-width:0 .5rem .5rem .5rem;border-bottom-color:#fff}.bs-popover-bottom .popover-header::before,.bs-popover-auto[data-popper-placement^=\"bottom\"] .popover-header::before{position:absolute;top:0;left:50%;display:block;width:1rem;margin-left:-.5rem;content:\"\";border-bottom:1px solid #f0f0f0}.bs-popover-start>.popover-arrow,.bs-popover-auto[data-popper-placement^=\"left\"]>.popover-arrow{right:calc(-.5rem - 1px);width:.5rem;height:1rem}.bs-popover-start>.popover-arrow::before,.bs-popover-auto[data-popper-placement^=\"left\"]>.popover-arrow::before{right:0;border-width:.5rem 0 .5rem .5rem;border-left-color:rgba(0,0,0,0.25)}.bs-popover-start>.popover-arrow::after,.bs-popover-auto[data-popper-placement^=\"left\"]>.popover-arrow::after{right:1px;border-width:.5rem 0 .5rem .5rem;border-left-color:#fff}.popover-header{padding:.5rem 1rem;margin-bottom:0;font-size:1rem;background-color:#f0f0f0;border-bottom:1px solid #d8d8d8;border-top-left-radius:calc(.3rem - 1px);border-top-right-radius:calc(.3rem - 1px)}.popover-header:empty{display:none}.popover-body{padding:1rem 1rem;color:#212529}.carousel{position:relative}.carousel.pointer-event{touch-action:pan-y}.carousel-inner{position:relative;width:100%;overflow:hidden}.carousel-inner::after{display:block;clear:both;content:\"\"}.carousel-item{position:relative;display:none;float:left;width:100%;margin-right:-100%;backface-visibility:hidden;transition:transform .6s ease-in-out}@media (prefers-reduced-motion: reduce){.carousel-item{transition:none}}.carousel-item.active,.carousel-item-next,.carousel-item-prev{display:block}.carousel-item-next:not(.carousel-item-start),.active.carousel-item-end{transform:translateX(100%)}.carousel-item-prev:not(.carousel-item-end),.active.carousel-item-start{transform:translateX(-100%)}.carousel-fade .carousel-item{opacity:0;transition-property:opacity;transform:none}.carousel-fade .carousel-item.active,.carousel-fade .carousel-item-next.carousel-item-start,.carousel-fade .carousel-item-prev.carousel-item-end{z-index:1;opacity:1}.carousel-fade .active.carousel-item-start,.carousel-fade .active.carousel-item-end{z-index:0;opacity:0;transition:opacity 0s .6s}@media (prefers-reduced-motion: reduce){.carousel-fade .active.carousel-item-start,.carousel-fade .active.carousel-item-end{transition:none}}.carousel-control-prev,.carousel-control-next{position:absolute;top:0;bottom:0;z-index:1;display:flex;align-items:center;justify-content:center;width:15%;padding:0;color:#fff;text-align:center;background:none;border:0;opacity:.5;transition:opacity 0.15s ease}@media (prefers-reduced-motion: reduce){.carousel-control-prev,.carousel-control-next{transition:none}}.carousel-control-prev:hover,.carousel-control-prev:focus,.carousel-control-next:hover,.carousel-control-next:focus{color:#fff;text-decoration:none;outline:0;opacity:.9}.carousel-control-prev{left:0}.carousel-control-next{right:0}.carousel-control-prev-icon,.carousel-control-next-icon{display:inline-block;width:2rem;height:2rem;background-repeat:no-repeat;background-position:50%;background-size:100% 100%}.carousel-control-prev-icon{background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23fff'%3e%3cpath d='M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z'/%3e%3c/svg%3e\")}.carousel-control-next-icon{background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23fff'%3e%3cpath d='M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z'/%3e%3c/svg%3e\")}.carousel-indicators{position:absolute;right:0;bottom:0;left:0;z-index:2;display:flex;justify-content:center;padding:0;margin-right:15%;margin-bottom:1rem;margin-left:15%;list-style:none}.carousel-indicators [data-bs-target]{box-sizing:content-box;flex:0 1 auto;width:30px;height:3px;padding:0;margin-right:3px;margin-left:3px;text-indent:-999px;cursor:pointer;background-color:#fff;background-clip:padding-box;border:0;border-top:10px solid transparent;border-bottom:10px solid transparent;opacity:.5;transition:opacity 0.6s ease}@media (prefers-reduced-motion: reduce){.carousel-indicators [data-bs-target]{transition:none}}.carousel-indicators .active{opacity:1}.carousel-caption{position:absolute;right:15%;bottom:1.25rem;left:15%;padding-top:1.25rem;padding-bottom:1.25rem;color:#fff;text-align:center}.carousel-dark .carousel-control-prev-icon,.carousel-dark .carousel-control-next-icon{filter:invert(1) grayscale(100)}.carousel-dark .carousel-indicators [data-bs-target]{background-color:#000}.carousel-dark .carousel-caption{color:#000}@keyframes spinner-border{to{transform:rotate(360deg) /* rtl:ignore */}}.spinner-border{display:inline-block;width:2rem;height:2rem;vertical-align:text-bottom;border:.25em solid currentColor;border-right-color:transparent;border-radius:50%;animation:.75s linear infinite spinner-border}.spinner-border-sm{width:1rem;height:1rem;border-width:.2em}@keyframes spinner-grow{0%{transform:scale(0)}50%{opacity:1;transform:none}}.spinner-grow{display:inline-block;width:2rem;height:2rem;vertical-align:text-bottom;background-color:currentColor;border-radius:50%;opacity:0;animation:.75s linear infinite spinner-grow}.spinner-grow-sm{width:1rem;height:1rem}@media (prefers-reduced-motion: reduce){.spinner-border,.spinner-grow{animation-duration:1.5s}}.clearfix::after{display:block;clear:both;content:\"\"}.link-primary{color:#0d6efd}.link-primary:hover,.link-primary:focus{color:#0a58ca}.link-secondary{color:#6c757d}.link-secondary:hover,.link-secondary:focus{color:#565e64}.link-success{color:#198754}.link-success:hover,.link-success:focus{color:#146c43}.link-info{color:#0dcaf0}.link-info:hover,.link-info:focus{color:#3dd5f3}.link-warning{color:#ffc107}.link-warning:hover,.link-warning:focus{color:#ffcd39}.link-danger{color:#dc3545}.link-danger:hover,.link-danger:focus{color:#b02a37}.link-light{color:#f8f9fa}.link-light:hover,.link-light:focus{color:#f9fafb}.link-dark{color:#212529}.link-dark:hover,.link-dark:focus{color:#1a1e21}.ratio{position:relative;width:100%}.ratio::before{display:block;padding-top:var(--bs-aspect-ratio);content:\"\"}.ratio>*{position:absolute;top:0;left:0;width:100%;height:100%}.ratio-1x1{--bs-aspect-ratio: 100%}.ratio-4x3{--bs-aspect-ratio: calc(3 / 4 * 100%)}.ratio-16x9{--bs-aspect-ratio: calc(9 / 16 * 100%)}.ratio-21x9{--bs-aspect-ratio: calc(9 / 21 * 100%)}.fixed-top{position:fixed;top:0;right:0;left:0;z-index:1030}.fixed-bottom{position:fixed;right:0;bottom:0;left:0;z-index:1030}.sticky-top{position:sticky;top:0;z-index:1020}@media (min-width: 576px){.sticky-sm-top{position:sticky;top:0;z-index:1020}}@media (min-width: 768px){.sticky-md-top{position:sticky;top:0;z-index:1020}}@media (min-width: 992px){.sticky-lg-top{position:sticky;top:0;z-index:1020}}@media (min-width: 1200px){.sticky-xl-top{position:sticky;top:0;z-index:1020}}@media (min-width: 1400px){.sticky-xxl-top{position:sticky;top:0;z-index:1020}}.visually-hidden,.visually-hidden-focusable:not(:focus):not(:focus-within){position:absolute !important;width:1px !important;height:1px !important;padding:0 !important;margin:-1px !important;overflow:hidden !important;clip:rect(0, 0, 0, 0) !important;white-space:nowrap !important;border:0 !important}.stretched-link::after{position:absolute;top:0;right:0;bottom:0;left:0;z-index:1;content:\"\"}.text-truncate{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.align-baseline{vertical-align:baseline !important}.align-top{vertical-align:top !important}.align-middle{vertical-align:middle !important}.align-bottom{vertical-align:bottom !important}.align-text-bottom{vertical-align:text-bottom !important}.align-text-top{vertical-align:text-top !important}.float-start{float:left !important}.float-end{float:right !important}.float-none{float:none !important}.overflow-auto{overflow:auto !important}.overflow-hidden{overflow:hidden !important}.overflow-visible{overflow:visible !important}.overflow-scroll{overflow:scroll !important}.d-inline{display:inline !important}.d-inline-block{display:inline-block !important}.d-block{display:block !important}.d-grid{display:grid !important}.d-table{display:table !important}.d-table-row{display:table-row !important}.d-table-cell{display:table-cell !important}.d-flex{display:flex !important}.d-inline-flex{display:inline-flex !important}.d-none{display:none !important}.shadow{box-shadow:0 0.5rem 1rem rgba(0,0,0,0.15) !important}.shadow-sm{box-shadow:0 0.125rem 0.25rem rgba(0,0,0,0.075) !important}.shadow-lg{box-shadow:0 1rem 3rem rgba(0,0,0,0.175) !important}.shadow-none{box-shadow:none !important}.position-static{position:static !important}.position-relative{position:relative !important}.position-absolute{position:absolute !important}.position-fixed{position:fixed !important}.position-sticky{position:sticky !important}.top-0{top:0 !important}.top-50{top:50% !important}.top-100{top:100% !important}.bottom-0{bottom:0 !important}.bottom-50{bottom:50% !important}.bottom-100{bottom:100% !important}.start-0{left:0 !important}.start-50{left:50% !important}.start-100{left:100% !important}.end-0{right:0 !important}.end-50{right:50% !important}.end-100{right:100% !important}.translate-middle{transform:translate(-50%, -50%) !important}.translate-middle-x{transform:translateX(-50%) !important}.translate-middle-y{transform:translateY(-50%) !important}.border{border:1px solid #dee2e6 !important}.border-0{border:0 !important}.border-top{border-top:1px solid #dee2e6 !important}.border-top-0{border-top:0 !important}.border-end{border-right:1px solid #dee2e6 !important}.border-end-0{border-right:0 !important}.border-bottom{border-bottom:1px solid #dee2e6 !important}.border-bottom-0{border-bottom:0 !important}.border-start{border-left:1px solid #dee2e6 !important}.border-start-0{border-left:0 !important}.border-primary{border-color:#0d6efd !important}.border-secondary{border-color:#6c757d !important}.border-success{border-color:#198754 !important}.border-info{border-color:#0dcaf0 !important}.border-warning{border-color:#ffc107 !important}.border-danger{border-color:#dc3545 !important}.border-light{border-color:#f8f9fa !important}.border-dark{border-color:#212529 !important}.border-white{border-color:#fff !important}.border-0{border-width:0 !important}.border-1{border-width:1px !important}.border-2{border-width:2px !important}.border-3{border-width:3px !important}.border-4{border-width:4px !important}.border-5{border-width:5px !important}.w-25{width:25% !important}.w-50{width:50% !important}.w-75{width:75% !important}.w-100{width:100% !important}.w-auto{width:auto !important}.mw-100{max-width:100% !important}.vw-100{width:100vw !important}.min-vw-100{min-width:100vw !important}.h-25{height:25% !important}.h-50{height:50% !important}.h-75{height:75% !important}.h-100{height:100% !important}.h-auto{height:auto !important}.mh-100{max-height:100% !important}.vh-100{height:100vh !important}.min-vh-100{min-height:100vh !important}.flex-fill{flex:1 1 auto !important}.flex-row{flex-direction:row !important}.flex-column{flex-direction:column !important}.flex-row-reverse{flex-direction:row-reverse !important}.flex-column-reverse{flex-direction:column-reverse !important}.flex-grow-0{flex-grow:0 !important}.flex-grow-1{flex-grow:1 !important}.flex-shrink-0{flex-shrink:0 !important}.flex-shrink-1{flex-shrink:1 !important}.flex-wrap{flex-wrap:wrap !important}.flex-nowrap{flex-wrap:nowrap !important}.flex-wrap-reverse{flex-wrap:wrap-reverse !important}.gap-0{gap:0 !important}.gap-1{gap:.25rem !important}.gap-2{gap:.5rem !important}.gap-3{gap:1rem !important}.gap-4{gap:1.5rem !important}.gap-5{gap:3rem !important}.justify-content-start{justify-content:flex-start !important}.justify-content-end{justify-content:flex-end !important}.justify-content-center{justify-content:center !important}.justify-content-between{justify-content:space-between !important}.justify-content-around{justify-content:space-around !important}.justify-content-evenly{justify-content:space-evenly !important}.align-items-start{align-items:flex-start !important}.align-items-end{align-items:flex-end !important}.align-items-center{align-items:center !important}.align-items-baseline{align-items:baseline !important}.align-items-stretch{align-items:stretch !important}.align-content-start{align-content:flex-start !important}.align-content-end{align-content:flex-end !important}.align-content-center{align-content:center !important}.align-content-between{align-content:space-between !important}.align-content-around{align-content:space-around !important}.align-content-stretch{align-content:stretch !important}.align-self-auto{align-self:auto !important}.align-self-start{align-self:flex-start !important}.align-self-end{align-self:flex-end !important}.align-self-center{align-self:center !important}.align-self-baseline{align-self:baseline !important}.align-self-stretch{align-self:stretch !important}.order-first{order:-1 !important}.order-0{order:0 !important}.order-1{order:1 !important}.order-2{order:2 !important}.order-3{order:3 !important}.order-4{order:4 !important}.order-5{order:5 !important}.order-last{order:6 !important}.m-0{margin:0 !important}.m-1{margin:.25rem !important}.m-2{margin:.5rem !important}.m-3{margin:1rem !important}.m-4{margin:1.5rem !important}.m-5{margin:3rem !important}.m-auto{margin:auto !important}.mx-0{margin-right:0 !important;margin-left:0 !important}.mx-1{margin-right:.25rem !important;margin-left:.25rem !important}.mx-2{margin-right:.5rem !important;margin-left:.5rem !important}.mx-3{margin-right:1rem !important;margin-left:1rem !important}.mx-4{margin-right:1.5rem !important;margin-left:1.5rem !important}.mx-5{margin-right:3rem !important;margin-left:3rem !important}.mx-auto{margin-right:auto !important;margin-left:auto !important}.my-0{margin-top:0 !important;margin-bottom:0 !important}.my-1{margin-top:.25rem !important;margin-bottom:.25rem !important}.my-2{margin-top:.5rem !important;margin-bottom:.5rem !important}.my-3{margin-top:1rem !important;margin-bottom:1rem !important}.my-4{margin-top:1.5rem !important;margin-bottom:1.5rem !important}.my-5{margin-top:3rem !important;margin-bottom:3rem !important}.my-auto{margin-top:auto !important;margin-bottom:auto !important}.mt-0{margin-top:0 !important}.mt-1{margin-top:.25rem !important}.mt-2{margin-top:.5rem !important}.mt-3{margin-top:1rem !important}.mt-4{margin-top:1.5rem !important}.mt-5{margin-top:3rem !important}.mt-auto{margin-top:auto !important}.me-0{margin-right:0 !important}.me-1{margin-right:.25rem !important}.me-2{margin-right:.5rem !important}.me-3{margin-right:1rem !important}.me-4{margin-right:1.5rem !important}.me-5{margin-right:3rem !important}.me-auto{margin-right:auto !important}.mb-0{margin-bottom:0 !important}.mb-1{margin-bottom:.25rem !important}.mb-2{margin-bottom:.5rem !important}.mb-3{margin-bottom:1rem !important}.mb-4{margin-bottom:1.5rem !important}.mb-5{margin-bottom:3rem !important}.mb-auto{margin-bottom:auto !important}.ms-0{margin-left:0 !important}.ms-1{margin-left:.25rem !important}.ms-2{margin-left:.5rem !important}.ms-3{margin-left:1rem !important}.ms-4{margin-left:1.5rem !important}.ms-5{margin-left:3rem !important}.ms-auto{margin-left:auto !important}.p-0{padding:0 !important}.p-1{padding:.25rem !important}.p-2{padding:.5rem !important}.p-3{padding:1rem !important}.p-4{padding:1.5rem !important}.p-5{padding:3rem !important}.px-0{padding-right:0 !important;padding-left:0 !important}.px-1{padding-right:.25rem !important;padding-left:.25rem !important}.px-2{padding-right:.5rem !important;padding-left:.5rem !important}.px-3{padding-right:1rem !important;padding-left:1rem !important}.px-4{padding-right:1.5rem !important;padding-left:1.5rem !important}.px-5{padding-right:3rem !important;padding-left:3rem !important}.py-0{padding-top:0 !important;padding-bottom:0 !important}.py-1{padding-top:.25rem !important;padding-bottom:.25rem !important}.py-2{padding-top:.5rem !important;padding-bottom:.5rem !important}.py-3{padding-top:1rem !important;padding-bottom:1rem !important}.py-4{padding-top:1.5rem !important;padding-bottom:1.5rem !important}.py-5{padding-top:3rem !important;padding-bottom:3rem !important}.pt-0{padding-top:0 !important}.pt-1{padding-top:.25rem !important}.pt-2{padding-top:.5rem !important}.pt-3{padding-top:1rem !important}.pt-4{padding-top:1.5rem !important}.pt-5{padding-top:3rem !important}.pe-0{padding-right:0 !important}.pe-1{padding-right:.25rem !important}.pe-2{padding-right:.5rem !important}.pe-3{padding-right:1rem !important}.pe-4{padding-right:1.5rem !important}.pe-5{padding-right:3rem !important}.pb-0{padding-bottom:0 !important}.pb-1{padding-bottom:.25rem !important}.pb-2{padding-bottom:.5rem !important}.pb-3{padding-bottom:1rem !important}.pb-4{padding-bottom:1.5rem !important}.pb-5{padding-bottom:3rem !important}.ps-0{padding-left:0 !important}.ps-1{padding-left:.25rem !important}.ps-2{padding-left:.5rem !important}.ps-3{padding-left:1rem !important}.ps-4{padding-left:1.5rem !important}.ps-5{padding-left:3rem !important}.fs-1{font-size:calc(1.375rem + 1.5vw) !important}.fs-2{font-size:calc(1.325rem + .9vw) !important}.fs-3{font-size:calc(1.3rem + .6vw) !important}.fs-4{font-size:calc(1.275rem + .3vw) !important}.fs-5{font-size:1.25rem !important}.fs-6{font-size:1rem !important}.fst-italic{font-style:italic !important}.fst-normal{font-style:normal !important}.fw-light{font-weight:300 !important}.fw-lighter{font-weight:lighter !important}.fw-normal{font-weight:400 !important}.fw-bold{font-weight:700 !important}.fw-bolder{font-weight:bolder !important}.text-lowercase{text-transform:lowercase !important}.text-uppercase{text-transform:uppercase !important}.text-capitalize{text-transform:capitalize !important}.text-start{text-align:left !important}.text-end{text-align:right !important}.text-center{text-align:center !important}.text-primary{color:#0d6efd !important}.text-secondary{color:#6c757d !important}.text-success{color:#198754 !important}.text-info{color:#0dcaf0 !important}.text-warning{color:#ffc107 !important}.text-danger{color:#dc3545 !important}.text-light{color:#f8f9fa !important}.text-dark{color:#212529 !important}.text-white{color:#fff !important}.text-body{color:#212529 !important}.text-muted{color:#6c757d !important}.text-black-50{color:rgba(0,0,0,0.5) !important}.text-white-50{color:rgba(255,255,255,0.5) !important}.text-reset{color:inherit !important}.lh-1{line-height:1 !important}.lh-sm{line-height:1.25 !important}.lh-base{line-height:1.5 !important}.lh-lg{line-height:2 !important}.bg-primary{background-color:#0d6efd !important}.bg-secondary{background-color:#6c757d !important}.bg-success{background-color:#198754 !important}.bg-info{background-color:#0dcaf0 !important}.bg-warning{background-color:#ffc107 !important}.bg-danger{background-color:#dc3545 !important}.bg-light{background-color:#f8f9fa !important}.bg-dark{background-color:#212529 !important}.bg-body{background-color:#fff !important}.bg-white{background-color:#fff !important}.bg-transparent{background-color:rgba(0,0,0,0) !important}.bg-gradient{background-image:var(--bs-gradient) !important}.text-wrap{white-space:normal !important}.text-nowrap{white-space:nowrap !important}.text-decoration-none{text-decoration:none !important}.text-decoration-underline{text-decoration:underline !important}.text-decoration-line-through{text-decoration:line-through !important}.text-break{word-wrap:break-word !important;word-break:break-word !important}.font-monospace{font-family:var(--bs-font-monospace) !important}.user-select-all{user-select:all !important}.user-select-auto{user-select:auto !important}.user-select-none{user-select:none !important}.pe-none{pointer-events:none !important}.pe-auto{pointer-events:auto !important}.rounded{border-radius:.25rem !important}.rounded-0{border-radius:0 !important}.rounded-1{border-radius:.2rem !important}.rounded-2{border-radius:.25rem !important}.rounded-3{border-radius:.3rem !important}.rounded-circle{border-radius:50% !important}.rounded-pill{border-radius:50rem !important}.rounded-top{border-top-left-radius:.25rem !important;border-top-right-radius:.25rem !important}.rounded-end{border-top-right-radius:.25rem !important;border-bottom-right-radius:.25rem !important}.rounded-bottom{border-bottom-right-radius:.25rem !important;border-bottom-left-radius:.25rem !important}.rounded-start{border-bottom-left-radius:.25rem !important;border-top-left-radius:.25rem !important}.visible{visibility:visible !important}.invisible{visibility:hidden !important}@media (min-width: 576px){.float-sm-start{float:left !important}.float-sm-end{float:right !important}.float-sm-none{float:none !important}.d-sm-inline{display:inline !important}.d-sm-inline-block{display:inline-block !important}.d-sm-block{display:block !important}.d-sm-grid{display:grid !important}.d-sm-table{display:table !important}.d-sm-table-row{display:table-row !important}.d-sm-table-cell{display:table-cell !important}.d-sm-flex{display:flex !important}.d-sm-inline-flex{display:inline-flex !important}.d-sm-none{display:none !important}.flex-sm-fill{flex:1 1 auto !important}.flex-sm-row{flex-direction:row !important}.flex-sm-column{flex-direction:column !important}.flex-sm-row-reverse{flex-direction:row-reverse !important}.flex-sm-column-reverse{flex-direction:column-reverse !important}.flex-sm-grow-0{flex-grow:0 !important}.flex-sm-grow-1{flex-grow:1 !important}.flex-sm-shrink-0{flex-shrink:0 !important}.flex-sm-shrink-1{flex-shrink:1 !important}.flex-sm-wrap{flex-wrap:wrap !important}.flex-sm-nowrap{flex-wrap:nowrap !important}.flex-sm-wrap-reverse{flex-wrap:wrap-reverse !important}.gap-sm-0{gap:0 !important}.gap-sm-1{gap:.25rem !important}.gap-sm-2{gap:.5rem !important}.gap-sm-3{gap:1rem !important}.gap-sm-4{gap:1.5rem !important}.gap-sm-5{gap:3rem !important}.justify-content-sm-start{justify-content:flex-start !important}.justify-content-sm-end{justify-content:flex-end !important}.justify-content-sm-center{justify-content:center !important}.justify-content-sm-between{justify-content:space-between !important}.justify-content-sm-around{justify-content:space-around !important}.justify-content-sm-evenly{justify-content:space-evenly !important}.align-items-sm-start{align-items:flex-start !important}.align-items-sm-end{align-items:flex-end !important}.align-items-sm-center{align-items:center !important}.align-items-sm-baseline{align-items:baseline !important}.align-items-sm-stretch{align-items:stretch !important}.align-content-sm-start{align-content:flex-start !important}.align-content-sm-end{align-content:flex-end !important}.align-content-sm-center{align-content:center !important}.align-content-sm-between{align-content:space-between !important}.align-content-sm-around{align-content:space-around !important}.align-content-sm-stretch{align-content:stretch !important}.align-self-sm-auto{align-self:auto !important}.align-self-sm-start{align-self:flex-start !important}.align-self-sm-end{align-self:flex-end !important}.align-self-sm-center{align-self:center !important}.align-self-sm-baseline{align-self:baseline !important}.align-self-sm-stretch{align-self:stretch !important}.order-sm-first{order:-1 !important}.order-sm-0{order:0 !important}.order-sm-1{order:1 !important}.order-sm-2{order:2 !important}.order-sm-3{order:3 !important}.order-sm-4{order:4 !important}.order-sm-5{order:5 !important}.order-sm-last{order:6 !important}.m-sm-0{margin:0 !important}.m-sm-1{margin:.25rem !important}.m-sm-2{margin:.5rem !important}.m-sm-3{margin:1rem !important}.m-sm-4{margin:1.5rem !important}.m-sm-5{margin:3rem !important}.m-sm-auto{margin:auto !important}.mx-sm-0{margin-right:0 !important;margin-left:0 !important}.mx-sm-1{margin-right:.25rem !important;margin-left:.25rem !important}.mx-sm-2{margin-right:.5rem !important;margin-left:.5rem !important}.mx-sm-3{margin-right:1rem !important;margin-left:1rem !important}.mx-sm-4{margin-right:1.5rem !important;margin-left:1.5rem !important}.mx-sm-5{margin-right:3rem !important;margin-left:3rem !important}.mx-sm-auto{margin-right:auto !important;margin-left:auto !important}.my-sm-0{margin-top:0 !important;margin-bottom:0 !important}.my-sm-1{margin-top:.25rem !important;margin-bottom:.25rem !important}.my-sm-2{margin-top:.5rem !important;margin-bottom:.5rem !important}.my-sm-3{margin-top:1rem !important;margin-bottom:1rem !important}.my-sm-4{margin-top:1.5rem !important;margin-bottom:1.5rem !important}.my-sm-5{margin-top:3rem !important;margin-bottom:3rem !important}.my-sm-auto{margin-top:auto !important;margin-bottom:auto !important}.mt-sm-0{margin-top:0 !important}.mt-sm-1{margin-top:.25rem !important}.mt-sm-2{margin-top:.5rem !important}.mt-sm-3{margin-top:1rem !important}.mt-sm-4{margin-top:1.5rem !important}.mt-sm-5{margin-top:3rem !important}.mt-sm-auto{margin-top:auto !important}.me-sm-0{margin-right:0 !important}.me-sm-1{margin-right:.25rem !important}.me-sm-2{margin-right:.5rem !important}.me-sm-3{margin-right:1rem !important}.me-sm-4{margin-right:1.5rem !important}.me-sm-5{margin-right:3rem !important}.me-sm-auto{margin-right:auto !important}.mb-sm-0{margin-bottom:0 !important}.mb-sm-1{margin-bottom:.25rem !important}.mb-sm-2{margin-bottom:.5rem !important}.mb-sm-3{margin-bottom:1rem !important}.mb-sm-4{margin-bottom:1.5rem !important}.mb-sm-5{margin-bottom:3rem !important}.mb-sm-auto{margin-bottom:auto !important}.ms-sm-0{margin-left:0 !important}.ms-sm-1{margin-left:.25rem !important}.ms-sm-2{margin-left:.5rem !important}.ms-sm-3{margin-left:1rem !important}.ms-sm-4{margin-left:1.5rem !important}.ms-sm-5{margin-left:3rem !important}.ms-sm-auto{margin-left:auto !important}.p-sm-0{padding:0 !important}.p-sm-1{padding:.25rem !important}.p-sm-2{padding:.5rem !important}.p-sm-3{padding:1rem !important}.p-sm-4{padding:1.5rem !important}.p-sm-5{padding:3rem !important}.px-sm-0{padding-right:0 !important;padding-left:0 !important}.px-sm-1{padding-right:.25rem !important;padding-left:.25rem !important}.px-sm-2{padding-right:.5rem !important;padding-left:.5rem !important}.px-sm-3{padding-right:1rem !important;padding-left:1rem !important}.px-sm-4{padding-right:1.5rem !important;padding-left:1.5rem !important}.px-sm-5{padding-right:3rem !important;padding-left:3rem !important}.py-sm-0{padding-top:0 !important;padding-bottom:0 !important}.py-sm-1{padding-top:.25rem !important;padding-bottom:.25rem !important}.py-sm-2{padding-top:.5rem !important;padding-bottom:.5rem !important}.py-sm-3{padding-top:1rem !important;padding-bottom:1rem !important}.py-sm-4{padding-top:1.5rem !important;padding-bottom:1.5rem !important}.py-sm-5{padding-top:3rem !important;padding-bottom:3rem !important}.pt-sm-0{padding-top:0 !important}.pt-sm-1{padding-top:.25rem !important}.pt-sm-2{padding-top:.5rem !important}.pt-sm-3{padding-top:1rem !important}.pt-sm-4{padding-top:1.5rem !important}.pt-sm-5{padding-top:3rem !important}.pe-sm-0{padding-right:0 !important}.pe-sm-1{padding-right:.25rem !important}.pe-sm-2{padding-right:.5rem !important}.pe-sm-3{padding-right:1rem !important}.pe-sm-4{padding-right:1.5rem !important}.pe-sm-5{padding-right:3rem !important}.pb-sm-0{padding-bottom:0 !important}.pb-sm-1{padding-bottom:.25rem !important}.pb-sm-2{padding-bottom:.5rem !important}.pb-sm-3{padding-bottom:1rem !important}.pb-sm-4{padding-bottom:1.5rem !important}.pb-sm-5{padding-bottom:3rem !important}.ps-sm-0{padding-left:0 !important}.ps-sm-1{padding-left:.25rem !important}.ps-sm-2{padding-left:.5rem !important}.ps-sm-3{padding-left:1rem !important}.ps-sm-4{padding-left:1.5rem !important}.ps-sm-5{padding-left:3rem !important}.text-sm-start{text-align:left !important}.text-sm-end{text-align:right !important}.text-sm-center{text-align:center !important}}@media (min-width: 768px){.float-md-start{float:left !important}.float-md-end{float:right !important}.float-md-none{float:none !important}.d-md-inline{display:inline !important}.d-md-inline-block{display:inline-block !important}.d-md-block{display:block !important}.d-md-grid{display:grid !important}.d-md-table{display:table !important}.d-md-table-row{display:table-row !important}.d-md-table-cell{display:table-cell !important}.d-md-flex{display:flex !important}.d-md-inline-flex{display:inline-flex !important}.d-md-none{display:none !important}.flex-md-fill{flex:1 1 auto !important}.flex-md-row{flex-direction:row !important}.flex-md-column{flex-direction:column !important}.flex-md-row-reverse{flex-direction:row-reverse !important}.flex-md-column-reverse{flex-direction:column-reverse !important}.flex-md-grow-0{flex-grow:0 !important}.flex-md-grow-1{flex-grow:1 !important}.flex-md-shrink-0{flex-shrink:0 !important}.flex-md-shrink-1{flex-shrink:1 !important}.flex-md-wrap{flex-wrap:wrap !important}.flex-md-nowrap{flex-wrap:nowrap !important}.flex-md-wrap-reverse{flex-wrap:wrap-reverse !important}.gap-md-0{gap:0 !important}.gap-md-1{gap:.25rem !important}.gap-md-2{gap:.5rem !important}.gap-md-3{gap:1rem !important}.gap-md-4{gap:1.5rem !important}.gap-md-5{gap:3rem !important}.justify-content-md-start{justify-content:flex-start !important}.justify-content-md-end{justify-content:flex-end !important}.justify-content-md-center{justify-content:center !important}.justify-content-md-between{justify-content:space-between !important}.justify-content-md-around{justify-content:space-around !important}.justify-content-md-evenly{justify-content:space-evenly !important}.align-items-md-start{align-items:flex-start !important}.align-items-md-end{align-items:flex-end !important}.align-items-md-center{align-items:center !important}.align-items-md-baseline{align-items:baseline !important}.align-items-md-stretch{align-items:stretch !important}.align-content-md-start{align-content:flex-start !important}.align-content-md-end{align-content:flex-end !important}.align-content-md-center{align-content:center !important}.align-content-md-between{align-content:space-between !important}.align-content-md-around{align-content:space-around !important}.align-content-md-stretch{align-content:stretch !important}.align-self-md-auto{align-self:auto !important}.align-self-md-start{align-self:flex-start !important}.align-self-md-end{align-self:flex-end !important}.align-self-md-center{align-self:center !important}.align-self-md-baseline{align-self:baseline !important}.align-self-md-stretch{align-self:stretch !important}.order-md-first{order:-1 !important}.order-md-0{order:0 !important}.order-md-1{order:1 !important}.order-md-2{order:2 !important}.order-md-3{order:3 !important}.order-md-4{order:4 !important}.order-md-5{order:5 !important}.order-md-last{order:6 !important}.m-md-0{margin:0 !important}.m-md-1{margin:.25rem !important}.m-md-2{margin:.5rem !important}.m-md-3{margin:1rem !important}.m-md-4{margin:1.5rem !important}.m-md-5{margin:3rem !important}.m-md-auto{margin:auto !important}.mx-md-0{margin-right:0 !important;margin-left:0 !important}.mx-md-1{margin-right:.25rem !important;margin-left:.25rem !important}.mx-md-2{margin-right:.5rem !important;margin-left:.5rem !important}.mx-md-3{margin-right:1rem !important;margin-left:1rem !important}.mx-md-4{margin-right:1.5rem !important;margin-left:1.5rem !important}.mx-md-5{margin-right:3rem !important;margin-left:3rem !important}.mx-md-auto{margin-right:auto !important;margin-left:auto !important}.my-md-0{margin-top:0 !important;margin-bottom:0 !important}.my-md-1{margin-top:.25rem !important;margin-bottom:.25rem !important}.my-md-2{margin-top:.5rem !important;margin-bottom:.5rem !important}.my-md-3{margin-top:1rem !important;margin-bottom:1rem !important}.my-md-4{margin-top:1.5rem !important;margin-bottom:1.5rem !important}.my-md-5{margin-top:3rem !important;margin-bottom:3rem !important}.my-md-auto{margin-top:auto !important;margin-bottom:auto !important}.mt-md-0{margin-top:0 !important}.mt-md-1{margin-top:.25rem !important}.mt-md-2{margin-top:.5rem !important}.mt-md-3{margin-top:1rem !important}.mt-md-4{margin-top:1.5rem !important}.mt-md-5{margin-top:3rem !important}.mt-md-auto{margin-top:auto !important}.me-md-0{margin-right:0 !important}.me-md-1{margin-right:.25rem !important}.me-md-2{margin-right:.5rem !important}.me-md-3{margin-right:1rem !important}.me-md-4{margin-right:1.5rem !important}.me-md-5{margin-right:3rem !important}.me-md-auto{margin-right:auto !important}.mb-md-0{margin-bottom:0 !important}.mb-md-1{margin-bottom:.25rem !important}.mb-md-2{margin-bottom:.5rem !important}.mb-md-3{margin-bottom:1rem !important}.mb-md-4{margin-bottom:1.5rem !important}.mb-md-5{margin-bottom:3rem !important}.mb-md-auto{margin-bottom:auto !important}.ms-md-0{margin-left:0 !important}.ms-md-1{margin-left:.25rem !important}.ms-md-2{margin-left:.5rem !important}.ms-md-3{margin-left:1rem !important}.ms-md-4{margin-left:1.5rem !important}.ms-md-5{margin-left:3rem !important}.ms-md-auto{margin-left:auto !important}.p-md-0{padding:0 !important}.p-md-1{padding:.25rem !important}.p-md-2{padding:.5rem !important}.p-md-3{padding:1rem !important}.p-md-4{padding:1.5rem !important}.p-md-5{padding:3rem !important}.px-md-0{padding-right:0 !important;padding-left:0 !important}.px-md-1{padding-right:.25rem !important;padding-left:.25rem !important}.px-md-2{padding-right:.5rem !important;padding-left:.5rem !important}.px-md-3{padding-right:1rem !important;padding-left:1rem !important}.px-md-4{padding-right:1.5rem !important;padding-left:1.5rem !important}.px-md-5{padding-right:3rem !important;padding-left:3rem !important}.py-md-0{padding-top:0 !important;padding-bottom:0 !important}.py-md-1{padding-top:.25rem !important;padding-bottom:.25rem !important}.py-md-2{padding-top:.5rem !important;padding-bottom:.5rem !important}.py-md-3{padding-top:1rem !important;padding-bottom:1rem !important}.py-md-4{padding-top:1.5rem !important;padding-bottom:1.5rem !important}.py-md-5{padding-top:3rem !important;padding-bottom:3rem !important}.pt-md-0{padding-top:0 !important}.pt-md-1{padding-top:.25rem !important}.pt-md-2{padding-top:.5rem !important}.pt-md-3{padding-top:1rem !important}.pt-md-4{padding-top:1.5rem !important}.pt-md-5{padding-top:3rem !important}.pe-md-0{padding-right:0 !important}.pe-md-1{padding-right:.25rem !important}.pe-md-2{padding-right:.5rem !important}.pe-md-3{padding-right:1rem !important}.pe-md-4{padding-right:1.5rem !important}.pe-md-5{padding-right:3rem !important}.pb-md-0{padding-bottom:0 !important}.pb-md-1{padding-bottom:.25rem !important}.pb-md-2{padding-bottom:.5rem !important}.pb-md-3{padding-bottom:1rem !important}.pb-md-4{padding-bottom:1.5rem !important}.pb-md-5{padding-bottom:3rem !important}.ps-md-0{padding-left:0 !important}.ps-md-1{padding-left:.25rem !important}.ps-md-2{padding-left:.5rem !important}.ps-md-3{padding-left:1rem !important}.ps-md-4{padding-left:1.5rem !important}.ps-md-5{padding-left:3rem !important}.text-md-start{text-align:left !important}.text-md-end{text-align:right !important}.text-md-center{text-align:center !important}}@media (min-width: 992px){.float-lg-start{float:left !important}.float-lg-end{float:right !important}.float-lg-none{float:none !important}.d-lg-inline{display:inline !important}.d-lg-inline-block{display:inline-block !important}.d-lg-block{display:block !important}.d-lg-grid{display:grid !important}.d-lg-table{display:table !important}.d-lg-table-row{display:table-row !important}.d-lg-table-cell{display:table-cell !important}.d-lg-flex{display:flex !important}.d-lg-inline-flex{display:inline-flex !important}.d-lg-none{display:none !important}.flex-lg-fill{flex:1 1 auto !important}.flex-lg-row{flex-direction:row !important}.flex-lg-column{flex-direction:column !important}.flex-lg-row-reverse{flex-direction:row-reverse !important}.flex-lg-column-reverse{flex-direction:column-reverse !important}.flex-lg-grow-0{flex-grow:0 !important}.flex-lg-grow-1{flex-grow:1 !important}.flex-lg-shrink-0{flex-shrink:0 !important}.flex-lg-shrink-1{flex-shrink:1 !important}.flex-lg-wrap{flex-wrap:wrap !important}.flex-lg-nowrap{flex-wrap:nowrap !important}.flex-lg-wrap-reverse{flex-wrap:wrap-reverse !important}.gap-lg-0{gap:0 !important}.gap-lg-1{gap:.25rem !important}.gap-lg-2{gap:.5rem !important}.gap-lg-3{gap:1rem !important}.gap-lg-4{gap:1.5rem !important}.gap-lg-5{gap:3rem !important}.justify-content-lg-start{justify-content:flex-start !important}.justify-content-lg-end{justify-content:flex-end !important}.justify-content-lg-center{justify-content:center !important}.justify-content-lg-between{justify-content:space-between !important}.justify-content-lg-around{justify-content:space-around !important}.justify-content-lg-evenly{justify-content:space-evenly !important}.align-items-lg-start{align-items:flex-start !important}.align-items-lg-end{align-items:flex-end !important}.align-items-lg-center{align-items:center !important}.align-items-lg-baseline{align-items:baseline !important}.align-items-lg-stretch{align-items:stretch !important}.align-content-lg-start{align-content:flex-start !important}.align-content-lg-end{align-content:flex-end !important}.align-content-lg-center{align-content:center !important}.align-content-lg-between{align-content:space-between !important}.align-content-lg-around{align-content:space-around !important}.align-content-lg-stretch{align-content:stretch !important}.align-self-lg-auto{align-self:auto !important}.align-self-lg-start{align-self:flex-start !important}.align-self-lg-end{align-self:flex-end !important}.align-self-lg-center{align-self:center !important}.align-self-lg-baseline{align-self:baseline !important}.align-self-lg-stretch{align-self:stretch !important}.order-lg-first{order:-1 !important}.order-lg-0{order:0 !important}.order-lg-1{order:1 !important}.order-lg-2{order:2 !important}.order-lg-3{order:3 !important}.order-lg-4{order:4 !important}.order-lg-5{order:5 !important}.order-lg-last{order:6 !important}.m-lg-0{margin:0 !important}.m-lg-1{margin:.25rem !important}.m-lg-2{margin:.5rem !important}.m-lg-3{margin:1rem !important}.m-lg-4{margin:1.5rem !important}.m-lg-5{margin:3rem !important}.m-lg-auto{margin:auto !important}.mx-lg-0{margin-right:0 !important;margin-left:0 !important}.mx-lg-1{margin-right:.25rem !important;margin-left:.25rem !important}.mx-lg-2{margin-right:.5rem !important;margin-left:.5rem !important}.mx-lg-3{margin-right:1rem !important;margin-left:1rem !important}.mx-lg-4{margin-right:1.5rem !important;margin-left:1.5rem !important}.mx-lg-5{margin-right:3rem !important;margin-left:3rem !important}.mx-lg-auto{margin-right:auto !important;margin-left:auto !important}.my-lg-0{margin-top:0 !important;margin-bottom:0 !important}.my-lg-1{margin-top:.25rem !important;margin-bottom:.25rem !important}.my-lg-2{margin-top:.5rem !important;margin-bottom:.5rem !important}.my-lg-3{margin-top:1rem !important;margin-bottom:1rem !important}.my-lg-4{margin-top:1.5rem !important;margin-bottom:1.5rem !important}.my-lg-5{margin-top:3rem !important;margin-bottom:3rem !important}.my-lg-auto{margin-top:auto !important;margin-bottom:auto !important}.mt-lg-0{margin-top:0 !important}.mt-lg-1{margin-top:.25rem !important}.mt-lg-2{margin-top:.5rem !important}.mt-lg-3{margin-top:1rem !important}.mt-lg-4{margin-top:1.5rem !important}.mt-lg-5{margin-top:3rem !important}.mt-lg-auto{margin-top:auto !important}.me-lg-0{margin-right:0 !important}.me-lg-1{margin-right:.25rem !important}.me-lg-2{margin-right:.5rem !important}.me-lg-3{margin-right:1rem !important}.me-lg-4{margin-right:1.5rem !important}.me-lg-5{margin-right:3rem !important}.me-lg-auto{margin-right:auto !important}.mb-lg-0{margin-bottom:0 !important}.mb-lg-1{margin-bottom:.25rem !important}.mb-lg-2{margin-bottom:.5rem !important}.mb-lg-3{margin-bottom:1rem !important}.mb-lg-4{margin-bottom:1.5rem !important}.mb-lg-5{margin-bottom:3rem !important}.mb-lg-auto{margin-bottom:auto !important}.ms-lg-0{margin-left:0 !important}.ms-lg-1{margin-left:.25rem !important}.ms-lg-2{margin-left:.5rem !important}.ms-lg-3{margin-left:1rem !important}.ms-lg-4{margin-left:1.5rem !important}.ms-lg-5{margin-left:3rem !important}.ms-lg-auto{margin-left:auto !important}.p-lg-0{padding:0 !important}.p-lg-1{padding:.25rem !important}.p-lg-2{padding:.5rem !important}.p-lg-3{padding:1rem !important}.p-lg-4{padding:1.5rem !important}.p-lg-5{padding:3rem !important}.px-lg-0{padding-right:0 !important;padding-left:0 !important}.px-lg-1{padding-right:.25rem !important;padding-left:.25rem !important}.px-lg-2{padding-right:.5rem !important;padding-left:.5rem !important}.px-lg-3{padding-right:1rem !important;padding-left:1rem !important}.px-lg-4{padding-right:1.5rem !important;padding-left:1.5rem !important}.px-lg-5{padding-right:3rem !important;padding-left:3rem !important}.py-lg-0{padding-top:0 !important;padding-bottom:0 !important}.py-lg-1{padding-top:.25rem !important;padding-bottom:.25rem !important}.py-lg-2{padding-top:.5rem !important;padding-bottom:.5rem !important}.py-lg-3{padding-top:1rem !important;padding-bottom:1rem !important}.py-lg-4{padding-top:1.5rem !important;padding-bottom:1.5rem !important}.py-lg-5{padding-top:3rem !important;padding-bottom:3rem !important}.pt-lg-0{padding-top:0 !important}.pt-lg-1{padding-top:.25rem !important}.pt-lg-2{padding-top:.5rem !important}.pt-lg-3{padding-top:1rem !important}.pt-lg-4{padding-top:1.5rem !important}.pt-lg-5{padding-top:3rem !important}.pe-lg-0{padding-right:0 !important}.pe-lg-1{padding-right:.25rem !important}.pe-lg-2{padding-right:.5rem !important}.pe-lg-3{padding-right:1rem !important}.pe-lg-4{padding-right:1.5rem !important}.pe-lg-5{padding-right:3rem !important}.pb-lg-0{padding-bottom:0 !important}.pb-lg-1{padding-bottom:.25rem !important}.pb-lg-2{padding-bottom:.5rem !important}.pb-lg-3{padding-bottom:1rem !important}.pb-lg-4{padding-bottom:1.5rem !important}.pb-lg-5{padding-bottom:3rem !important}.ps-lg-0{padding-left:0 !important}.ps-lg-1{padding-left:.25rem !important}.ps-lg-2{padding-left:.5rem !important}.ps-lg-3{padding-left:1rem !important}.ps-lg-4{padding-left:1.5rem !important}.ps-lg-5{padding-left:3rem !important}.text-lg-start{text-align:left !important}.text-lg-end{text-align:right !important}.text-lg-center{text-align:center !important}}@media (min-width: 1200px){.float-xl-start{float:left !important}.float-xl-end{float:right !important}.float-xl-none{float:none !important}.d-xl-inline{display:inline !important}.d-xl-inline-block{display:inline-block !important}.d-xl-block{display:block !important}.d-xl-grid{display:grid !important}.d-xl-table{display:table !important}.d-xl-table-row{display:table-row !important}.d-xl-table-cell{display:table-cell !important}.d-xl-flex{display:flex !important}.d-xl-inline-flex{display:inline-flex !important}.d-xl-none{display:none !important}.flex-xl-fill{flex:1 1 auto !important}.flex-xl-row{flex-direction:row !important}.flex-xl-column{flex-direction:column !important}.flex-xl-row-reverse{flex-direction:row-reverse !important}.flex-xl-column-reverse{flex-direction:column-reverse !important}.flex-xl-grow-0{flex-grow:0 !important}.flex-xl-grow-1{flex-grow:1 !important}.flex-xl-shrink-0{flex-shrink:0 !important}.flex-xl-shrink-1{flex-shrink:1 !important}.flex-xl-wrap{flex-wrap:wrap !important}.flex-xl-nowrap{flex-wrap:nowrap !important}.flex-xl-wrap-reverse{flex-wrap:wrap-reverse !important}.gap-xl-0{gap:0 !important}.gap-xl-1{gap:.25rem !important}.gap-xl-2{gap:.5rem !important}.gap-xl-3{gap:1rem !important}.gap-xl-4{gap:1.5rem !important}.gap-xl-5{gap:3rem !important}.justify-content-xl-start{justify-content:flex-start !important}.justify-content-xl-end{justify-content:flex-end !important}.justify-content-xl-center{justify-content:center !important}.justify-content-xl-between{justify-content:space-between !important}.justify-content-xl-around{justify-content:space-around !important}.justify-content-xl-evenly{justify-content:space-evenly !important}.align-items-xl-start{align-items:flex-start !important}.align-items-xl-end{align-items:flex-end !important}.align-items-xl-center{align-items:center !important}.align-items-xl-baseline{align-items:baseline !important}.align-items-xl-stretch{align-items:stretch !important}.align-content-xl-start{align-content:flex-start !important}.align-content-xl-end{align-content:flex-end !important}.align-content-xl-center{align-content:center !important}.align-content-xl-between{align-content:space-between !important}.align-content-xl-around{align-content:space-around !important}.align-content-xl-stretch{align-content:stretch !important}.align-self-xl-auto{align-self:auto !important}.align-self-xl-start{align-self:flex-start !important}.align-self-xl-end{align-self:flex-end !important}.align-self-xl-center{align-self:center !important}.align-self-xl-baseline{align-self:baseline !important}.align-self-xl-stretch{align-self:stretch !important}.order-xl-first{order:-1 !important}.order-xl-0{order:0 !important}.order-xl-1{order:1 !important}.order-xl-2{order:2 !important}.order-xl-3{order:3 !important}.order-xl-4{order:4 !important}.order-xl-5{order:5 !important}.order-xl-last{order:6 !important}.m-xl-0{margin:0 !important}.m-xl-1{margin:.25rem !important}.m-xl-2{margin:.5rem !important}.m-xl-3{margin:1rem !important}.m-xl-4{margin:1.5rem !important}.m-xl-5{margin:3rem !important}.m-xl-auto{margin:auto !important}.mx-xl-0{margin-right:0 !important;margin-left:0 !important}.mx-xl-1{margin-right:.25rem !important;margin-left:.25rem !important}.mx-xl-2{margin-right:.5rem !important;margin-left:.5rem !important}.mx-xl-3{margin-right:1rem !important;margin-left:1rem !important}.mx-xl-4{margin-right:1.5rem !important;margin-left:1.5rem !important}.mx-xl-5{margin-right:3rem !important;margin-left:3rem !important}.mx-xl-auto{margin-right:auto !important;margin-left:auto !important}.my-xl-0{margin-top:0 !important;margin-bottom:0 !important}.my-xl-1{margin-top:.25rem !important;margin-bottom:.25rem !important}.my-xl-2{margin-top:.5rem !important;margin-bottom:.5rem !important}.my-xl-3{margin-top:1rem !important;margin-bottom:1rem !important}.my-xl-4{margin-top:1.5rem !important;margin-bottom:1.5rem !important}.my-xl-5{margin-top:3rem !important;margin-bottom:3rem !important}.my-xl-auto{margin-top:auto !important;margin-bottom:auto !important}.mt-xl-0{margin-top:0 !important}.mt-xl-1{margin-top:.25rem !important}.mt-xl-2{margin-top:.5rem !important}.mt-xl-3{margin-top:1rem !important}.mt-xl-4{margin-top:1.5rem !important}.mt-xl-5{margin-top:3rem !important}.mt-xl-auto{margin-top:auto !important}.me-xl-0{margin-right:0 !important}.me-xl-1{margin-right:.25rem !important}.me-xl-2{margin-right:.5rem !important}.me-xl-3{margin-right:1rem !important}.me-xl-4{margin-right:1.5rem !important}.me-xl-5{margin-right:3rem !important}.me-xl-auto{margin-right:auto !important}.mb-xl-0{margin-bottom:0 !important}.mb-xl-1{margin-bottom:.25rem !important}.mb-xl-2{margin-bottom:.5rem !important}.mb-xl-3{margin-bottom:1rem !important}.mb-xl-4{margin-bottom:1.5rem !important}.mb-xl-5{margin-bottom:3rem !important}.mb-xl-auto{margin-bottom:auto !important}.ms-xl-0{margin-left:0 !important}.ms-xl-1{margin-left:.25rem !important}.ms-xl-2{margin-left:.5rem !important}.ms-xl-3{margin-left:1rem !important}.ms-xl-4{margin-left:1.5rem !important}.ms-xl-5{margin-left:3rem !important}.ms-xl-auto{margin-left:auto !important}.p-xl-0{padding:0 !important}.p-xl-1{padding:.25rem !important}.p-xl-2{padding:.5rem !important}.p-xl-3{padding:1rem !important}.p-xl-4{padding:1.5rem !important}.p-xl-5{padding:3rem !important}.px-xl-0{padding-right:0 !important;padding-left:0 !important}.px-xl-1{padding-right:.25rem !important;padding-left:.25rem !important}.px-xl-2{padding-right:.5rem !important;padding-left:.5rem !important}.px-xl-3{padding-right:1rem !important;padding-left:1rem !important}.px-xl-4{padding-right:1.5rem !important;padding-left:1.5rem !important}.px-xl-5{padding-right:3rem !important;padding-left:3rem !important}.py-xl-0{padding-top:0 !important;padding-bottom:0 !important}.py-xl-1{padding-top:.25rem !important;padding-bottom:.25rem !important}.py-xl-2{padding-top:.5rem !important;padding-bottom:.5rem !important}.py-xl-3{padding-top:1rem !important;padding-bottom:1rem !important}.py-xl-4{padding-top:1.5rem !important;padding-bottom:1.5rem !important}.py-xl-5{padding-top:3rem !important;padding-bottom:3rem !important}.pt-xl-0{padding-top:0 !important}.pt-xl-1{padding-top:.25rem !important}.pt-xl-2{padding-top:.5rem !important}.pt-xl-3{padding-top:1rem !important}.pt-xl-4{padding-top:1.5rem !important}.pt-xl-5{padding-top:3rem !important}.pe-xl-0{padding-right:0 !important}.pe-xl-1{padding-right:.25rem !important}.pe-xl-2{padding-right:.5rem !important}.pe-xl-3{padding-right:1rem !important}.pe-xl-4{padding-right:1.5rem !important}.pe-xl-5{padding-right:3rem !important}.pb-xl-0{padding-bottom:0 !important}.pb-xl-1{padding-bottom:.25rem !important}.pb-xl-2{padding-bottom:.5rem !important}.pb-xl-3{padding-bottom:1rem !important}.pb-xl-4{padding-bottom:1.5rem !important}.pb-xl-5{padding-bottom:3rem !important}.ps-xl-0{padding-left:0 !important}.ps-xl-1{padding-left:.25rem !important}.ps-xl-2{padding-left:.5rem !important}.ps-xl-3{padding-left:1rem !important}.ps-xl-4{padding-left:1.5rem !important}.ps-xl-5{padding-left:3rem !important}.text-xl-start{text-align:left !important}.text-xl-end{text-align:right !important}.text-xl-center{text-align:center !important}}@media (min-width: 1400px){.float-xxl-start{float:left !important}.float-xxl-end{float:right !important}.float-xxl-none{float:none !important}.d-xxl-inline{display:inline !important}.d-xxl-inline-block{display:inline-block !important}.d-xxl-block{display:block !important}.d-xxl-grid{display:grid !important}.d-xxl-table{display:table !important}.d-xxl-table-row{display:table-row !important}.d-xxl-table-cell{display:table-cell !important}.d-xxl-flex{display:flex !important}.d-xxl-inline-flex{display:inline-flex !important}.d-xxl-none{display:none !important}.flex-xxl-fill{flex:1 1 auto !important}.flex-xxl-row{flex-direction:row !important}.flex-xxl-column{flex-direction:column !important}.flex-xxl-row-reverse{flex-direction:row-reverse !important}.flex-xxl-column-reverse{flex-direction:column-reverse !important}.flex-xxl-grow-0{flex-grow:0 !important}.flex-xxl-grow-1{flex-grow:1 !important}.flex-xxl-shrink-0{flex-shrink:0 !important}.flex-xxl-shrink-1{flex-shrink:1 !important}.flex-xxl-wrap{flex-wrap:wrap !important}.flex-xxl-nowrap{flex-wrap:nowrap !important}.flex-xxl-wrap-reverse{flex-wrap:wrap-reverse !important}.gap-xxl-0{gap:0 !important}.gap-xxl-1{gap:.25rem !important}.gap-xxl-2{gap:.5rem !important}.gap-xxl-3{gap:1rem !important}.gap-xxl-4{gap:1.5rem !important}.gap-xxl-5{gap:3rem !important}.justify-content-xxl-start{justify-content:flex-start !important}.justify-content-xxl-end{justify-content:flex-end !important}.justify-content-xxl-center{justify-content:center !important}.justify-content-xxl-between{justify-content:space-between !important}.justify-content-xxl-around{justify-content:space-around !important}.justify-content-xxl-evenly{justify-content:space-evenly !important}.align-items-xxl-start{align-items:flex-start !important}.align-items-xxl-end{align-items:flex-end !important}.align-items-xxl-center{align-items:center !important}.align-items-xxl-baseline{align-items:baseline !important}.align-items-xxl-stretch{align-items:stretch !important}.align-content-xxl-start{align-content:flex-start !important}.align-content-xxl-end{align-content:flex-end !important}.align-content-xxl-center{align-content:center !important}.align-content-xxl-between{align-content:space-between !important}.align-content-xxl-around{align-content:space-around !important}.align-content-xxl-stretch{align-content:stretch !important}.align-self-xxl-auto{align-self:auto !important}.align-self-xxl-start{align-self:flex-start !important}.align-self-xxl-end{align-self:flex-end !important}.align-self-xxl-center{align-self:center !important}.align-self-xxl-baseline{align-self:baseline !important}.align-self-xxl-stretch{align-self:stretch !important}.order-xxl-first{order:-1 !important}.order-xxl-0{order:0 !important}.order-xxl-1{order:1 !important}.order-xxl-2{order:2 !important}.order-xxl-3{order:3 !important}.order-xxl-4{order:4 !important}.order-xxl-5{order:5 !important}.order-xxl-last{order:6 !important}.m-xxl-0{margin:0 !important}.m-xxl-1{margin:.25rem !important}.m-xxl-2{margin:.5rem !important}.m-xxl-3{margin:1rem !important}.m-xxl-4{margin:1.5rem !important}.m-xxl-5{margin:3rem !important}.m-xxl-auto{margin:auto !important}.mx-xxl-0{margin-right:0 !important;margin-left:0 !important}.mx-xxl-1{margin-right:.25rem !important;margin-left:.25rem !important}.mx-xxl-2{margin-right:.5rem !important;margin-left:.5rem !important}.mx-xxl-3{margin-right:1rem !important;margin-left:1rem !important}.mx-xxl-4{margin-right:1.5rem !important;margin-left:1.5rem !important}.mx-xxl-5{margin-right:3rem !important;margin-left:3rem !important}.mx-xxl-auto{margin-right:auto !important;margin-left:auto !important}.my-xxl-0{margin-top:0 !important;margin-bottom:0 !important}.my-xxl-1{margin-top:.25rem !important;margin-bottom:.25rem !important}.my-xxl-2{margin-top:.5rem !important;margin-bottom:.5rem !important}.my-xxl-3{margin-top:1rem !important;margin-bottom:1rem !important}.my-xxl-4{margin-top:1.5rem !important;margin-bottom:1.5rem !important}.my-xxl-5{margin-top:3rem !important;margin-bottom:3rem !important}.my-xxl-auto{margin-top:auto !important;margin-bottom:auto !important}.mt-xxl-0{margin-top:0 !important}.mt-xxl-1{margin-top:.25rem !important}.mt-xxl-2{margin-top:.5rem !important}.mt-xxl-3{margin-top:1rem !important}.mt-xxl-4{margin-top:1.5rem !important}.mt-xxl-5{margin-top:3rem !important}.mt-xxl-auto{margin-top:auto !important}.me-xxl-0{margin-right:0 !important}.me-xxl-1{margin-right:.25rem !important}.me-xxl-2{margin-right:.5rem !important}.me-xxl-3{margin-right:1rem !important}.me-xxl-4{margin-right:1.5rem !important}.me-xxl-5{margin-right:3rem !important}.me-xxl-auto{margin-right:auto !important}.mb-xxl-0{margin-bottom:0 !important}.mb-xxl-1{margin-bottom:.25rem !important}.mb-xxl-2{margin-bottom:.5rem !important}.mb-xxl-3{margin-bottom:1rem !important}.mb-xxl-4{margin-bottom:1.5rem !important}.mb-xxl-5{margin-bottom:3rem !important}.mb-xxl-auto{margin-bottom:auto !important}.ms-xxl-0{margin-left:0 !important}.ms-xxl-1{margin-left:.25rem !important}.ms-xxl-2{margin-left:.5rem !important}.ms-xxl-3{margin-left:1rem !important}.ms-xxl-4{margin-left:1.5rem !important}.ms-xxl-5{margin-left:3rem !important}.ms-xxl-auto{margin-left:auto !important}.p-xxl-0{padding:0 !important}.p-xxl-1{padding:.25rem !important}.p-xxl-2{padding:.5rem !important}.p-xxl-3{padding:1rem !important}.p-xxl-4{padding:1.5rem !important}.p-xxl-5{padding:3rem !important}.px-xxl-0{padding-right:0 !important;padding-left:0 !important}.px-xxl-1{padding-right:.25rem !important;padding-left:.25rem !important}.px-xxl-2{padding-right:.5rem !important;padding-left:.5rem !important}.px-xxl-3{padding-right:1rem !important;padding-left:1rem !important}.px-xxl-4{padding-right:1.5rem !important;padding-left:1.5rem !important}.px-xxl-5{padding-right:3rem !important;padding-left:3rem !important}.py-xxl-0{padding-top:0 !important;padding-bottom:0 !important}.py-xxl-1{padding-top:.25rem !important;padding-bottom:.25rem !important}.py-xxl-2{padding-top:.5rem !important;padding-bottom:.5rem !important}.py-xxl-3{padding-top:1rem !important;padding-bottom:1rem !important}.py-xxl-4{padding-top:1.5rem !important;padding-bottom:1.5rem !important}.py-xxl-5{padding-top:3rem !important;padding-bottom:3rem !important}.pt-xxl-0{padding-top:0 !important}.pt-xxl-1{padding-top:.25rem !important}.pt-xxl-2{padding-top:.5rem !important}.pt-xxl-3{padding-top:1rem !important}.pt-xxl-4{padding-top:1.5rem !important}.pt-xxl-5{padding-top:3rem !important}.pe-xxl-0{padding-right:0 !important}.pe-xxl-1{padding-right:.25rem !important}.pe-xxl-2{padding-right:.5rem !important}.pe-xxl-3{padding-right:1rem !important}.pe-xxl-4{padding-right:1.5rem !important}.pe-xxl-5{padding-right:3rem !important}.pb-xxl-0{padding-bottom:0 !important}.pb-xxl-1{padding-bottom:.25rem !important}.pb-xxl-2{padding-bottom:.5rem !important}.pb-xxl-3{padding-bottom:1rem !important}.pb-xxl-4{padding-bottom:1.5rem !important}.pb-xxl-5{padding-bottom:3rem !important}.ps-xxl-0{padding-left:0 !important}.ps-xxl-1{padding-left:.25rem !important}.ps-xxl-2{padding-left:.5rem !important}.ps-xxl-3{padding-left:1rem !important}.ps-xxl-4{padding-left:1.5rem !important}.ps-xxl-5{padding-left:3rem !important}.text-xxl-start{text-align:left !important}.text-xxl-end{text-align:right !important}.text-xxl-center{text-align:center !important}}@media (min-width: 1200px){.fs-1{font-size:2.5rem !important}.fs-2{font-size:2rem !important}.fs-3{font-size:1.75rem !important}.fs-4{font-size:1.5rem !important}}@media print{.d-print-inline{display:inline !important}.d-print-inline-block{display:inline-block !important}.d-print-block{display:block !important}.d-print-grid{display:grid !important}.d-print-table{display:table !important}.d-print-table-row{display:table-row !important}.d-print-table-cell{display:table-cell !important}.d-print-flex{display:flex !important}.d-print-inline-flex{display:inline-flex !important}.d-print-none{display:none !important}}.container{padding:50px}.row{margin-bottom:20px}.modal-dialog.modal-dialog-centered{max-width:900px}.lightbox-bootstrap{cursor:pointer}.lightbox-bootstrap:hover{transform:scale(1.03);transition:transform  0.5s ease-out}@media only screen and (max-width: 730px){.carousel-item img{height:200px}}\n", ""]);
      var i = n;
    },
    645: function _(t) {
      "use strict";

      t.exports = function (t) {
        var e = [];
        return e.toString = function () {
          return this.map(function (e) {
            var o = t(e);
            return e[2] ? "@media ".concat(e[2], " {").concat(o, "}") : o;
          }).join("");
        }, e.i = function (t, o, r) {
          "string" == typeof t && (t = [[null, t, ""]]);
          var n = {};
          if (r) for (var i = 0; i < this.length; i++) {
            var a = this[i][0];
            null != a && (n[a] = !0);
          }

          for (var l = 0; l < t.length; l++) {
            var d = [].concat(t[l]);
            r && n[d[0]] || (o && (d[2] ? d[2] = "".concat(o, " and ").concat(d[2]) : d[2] = o), e.push(d));
          }
        }, e;
      };
    },
    607: function _(t, e, o) {
      "use strict";

      o.r(e), o.d(e, {
        "default": function _default() {
          return a;
        }
      });
      var r = o(379),
          n = o.n(r),
          i = o(807);
      n()(i.Z, {
        insert: "head",
        singleton: !1
      });
      var a = i.Z.locals || {};
    },
    379: function _(t, e, o) {
      "use strict";

      var r,
          n = function () {
        var t = {};
        return function (e) {
          if (void 0 === t[e]) {
            var o = document.querySelector(e);
            if (window.HTMLIFrameElement && o instanceof window.HTMLIFrameElement) try {
              o = o.contentDocument.head;
            } catch (t) {
              o = null;
            }
            t[e] = o;
          }

          return t[e];
        };
      }(),
          i = [];

      function a(t) {
        for (var e = -1, o = 0; o < i.length; o++) {
          if (i[o].identifier === t) {
            e = o;
            break;
          }
        }

        return e;
      }

      function l(t, e) {
        for (var o = {}, r = [], n = 0; n < t.length; n++) {
          var l = t[n],
              d = e.base ? l[0] + e.base : l[0],
              s = o[d] || 0,
              m = "".concat(d, " ").concat(s);
          o[d] = s + 1;
          var c = a(m),
              p = {
            css: l[1],
            media: l[2],
            sourceMap: l[3]
          };
          -1 !== c ? (i[c].references++, i[c].updater(p)) : i.push({
            identifier: m,
            updater: u(p, e),
            references: 1
          }), r.push(m);
        }

        return r;
      }

      function d(t) {
        var e = document.createElement("style"),
            r = t.attributes || {};

        if (void 0 === r.nonce) {
          var i = o.nc;
          i && (r.nonce = i);
        }

        if (Object.keys(r).forEach(function (t) {
          e.setAttribute(t, r[t]);
        }), "function" == typeof t.insert) t.insert(e);else {
          var a = n(t.insert || "head");
          if (!a) throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
          a.appendChild(e);
        }
        return e;
      }

      var s,
          m = (s = [], function (t, e) {
        return s[t] = e, s.filter(Boolean).join("\n");
      });

      function c(t, e, o, r) {
        var n = o ? "" : r.media ? "@media ".concat(r.media, " {").concat(r.css, "}") : r.css;
        if (t.styleSheet) t.styleSheet.cssText = m(e, n);else {
          var i = document.createTextNode(n),
              a = t.childNodes;
          a[e] && t.removeChild(a[e]), a.length ? t.insertBefore(i, a[e]) : t.appendChild(i);
        }
      }

      function p(t, e, o) {
        var r = o.css,
            n = o.media,
            i = o.sourceMap;
        if (n ? t.setAttribute("media", n) : t.removeAttribute("media"), i && "undefined" != typeof btoa && (r += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i)))), " */")), t.styleSheet) t.styleSheet.cssText = r;else {
          for (; t.firstChild;) {
            t.removeChild(t.firstChild);
          }

          t.appendChild(document.createTextNode(r));
        }
      }

      var g = null,
          f = 0;

      function u(t, e) {
        var o, r, n;

        if (e.singleton) {
          var i = f++;
          o = g || (g = d(e)), r = c.bind(null, o, i, !1), n = c.bind(null, o, i, !0);
        } else o = d(e), r = p.bind(null, o, e), n = function n() {
          !function (t) {
            if (null === t.parentNode) return !1;
            t.parentNode.removeChild(t);
          }(o);
        };

        return r(t), function (e) {
          if (e) {
            if (e.css === t.css && e.media === t.media && e.sourceMap === t.sourceMap) return;
            r(t = e);
          } else n();
        };
      }

      t.exports = function (t, e) {
        (e = e || {}).singleton || "boolean" == typeof e.singleton || (e.singleton = (void 0 === r && (r = Boolean(window && document && document.all && !window.atob)), r));
        var o = l(t = t || [], e);
        return function (t) {
          if (t = t || [], "[object Array]" === Object.prototype.toString.call(t)) {
            for (var r = 0; r < o.length; r++) {
              var n = a(o[r]);
              i[n].references--;
            }

            for (var d = l(t, e), s = 0; s < o.length; s++) {
              var m = a(o[s]);
              0 === i[m].references && (i[m].updater(), i.splice(m, 1));
            }

            o = d;
          }
        };
      };
    },
    748: function _(t, e, o) {
      function r(t, e) {
        var o = document.createElement("div");
        o.innerHTML = "\n    <button class=\"carousel-control-prev\" type=\"button\" data-bs-target=\"#".concat(e, "\"  data-bs-slide=\"prev\">\n    <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\n    <span class=\"visually-hidden\">Previous</span>\n    </button>\n    <button class=\"carousel-control-next\" type=\"button\" data-bs-target=\"#").concat(e, "\"  data-bs-slide=\"next\">\n        <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\n        <span class=\"visually-hidden\">Next</span>\n    </button>\n    "), t.appendChild(o);
      }

      function n(t) {
        var e = document.createElement("div");
        e.setAttribute("class", "modal fade"), e.setAttribute("id", "exampleModal"), e.innerHTML = '\n        <div class="modal-dialog modal-dialog-centered">\n            <div class="modal-content">\n                <div id="modal-lightbox" class="modal-body">\n                </div>\n            </div>\n        </div>\n    ', t.appendChild(e);
      }

      o(169), o(607), t.exports.J = function (t) {
        var e = document.querySelectorAll('[data-toggle="lightbox"]');
        if (e.length <= 0) console.log("Doesn't exist");else {
          for (var o = 0; o < e.length; o++) {
            e[o].setAttribute("data-toggle", "lightbox-container-v" + o);
            var l = document.querySelectorAll("[data-toggle=\"lightbox-container-v".concat(o, "\"] .lightbox-bootstrap"));
            var i = void 0;
            (i = document.createElement("div")).setAttribute("id", "carouselExampleControls-" + o), "fade" === t.effect_type ? i.setAttribute("class", "carousel slide carousel-fade") : i.setAttribute("class", "carousel slide");
            var a = void 0;
            (a = document.createElement("div")).setAttribute("class", "carousel-inner");

            for (var _t2 = 0; _t2 < l.length; _t2++) {
              var _e3 = l[_t2].cloneNode();

              _e3.setAttribute("class", "d-block w-100"), _e3.setAttribute("height", "600"), l[_t2].setAttribute("data-bs-toggle", "modal"), l[_t2].setAttribute("data-bs-target", "#exampleModal");

              var _o2 = document.createElement("div");

              _o2.setAttribute("class", "carousel-item"), _o2.appendChild(_e3), a.appendChild(_o2);
            }

            i.appendChild(a), 0 == o && n(e[o].parentNode), document.getElementById("modal-lightbox").appendChild(i), document.querySelectorAll("[data-toggle=\"lightbox-container-v".concat(o, "\"][data-arrow=\"true\"]")).length > 0 && r(a, i.id), document.querySelectorAll("[data-toggle=\"lightbox-container-v".concat(o, "\"][data-ride]")).length > 0 && i.setAttribute("data-bs-ride", document.querySelectorAll("[data-toggle=\"lightbox-container-v".concat(o, "\"][data-ride]"))[0].attributes.getNamedItem("data-ride").nodeValue), document.querySelectorAll("[data-toggle=\"lightbox-container-v".concat(o, "\"][data-interval]")).length > 0 && i.setAttribute("data-bs-interval", document.querySelectorAll("[data-toggle=\"lightbox-container-v".concat(o, "\"][data-interval]"))[0].attributes.getNamedItem("data-interval").nodeValue);
          }

          document.querySelectorAll(".lightbox-bootstrap").forEach(function (t) {
            t.addEventListener("click", function (e) {
              var o = document.querySelectorAll(".carousel-item img[src]");

              for (var r = 0; r < o.length; r++) {
                if (o[r].currentSrc == t.src) {
                  document.querySelectorAll(".carousel-item").forEach(function (t) {
                    t.classList.remove("active");
                  }), o[r].parentNode.setAttribute("class", "carousel-item active");
                  break;
                }
              }
            });
          }), document.getElementById("exampleModal").addEventListener("hidden.bs.modal", function (t) {
            document.querySelectorAll(".carousel-item").forEach(function (t) {
              t.classList.remove("active");
            });
          });
        }
      };
    }
  },
      e = {};

  function o(r) {
    if (e[r]) return e[r].exports;
    var n = e[r] = {
      id: r,
      exports: {}
    };
    return t[r](n, n.exports, o), n.exports;
  }

  o.n = function (t) {
    var e = t && t.__esModule ? function () {
      return t["default"];
    } : function () {
      return t;
    };
    return o.d(e, {
      a: e
    }), e;
  }, o.d = function (t, e) {
    for (var r in e) {
      o.o(e, r) && !o.o(t, r) && Object.defineProperty(t, r, {
        enumerable: !0,
        get: e[r]
      });
    }
  }, o.o = function (t, e) {
    return Object.prototype.hasOwnProperty.call(t, e);
  }, o.r = function (t) {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(t, "__esModule", {
      value: !0
    });
  }, function () {
    "use strict";

    (0, o(748).J)({
      interval_time: 5e3,
      arrow_mode: !0,
      effect_type: "fade"
    });
  }();
})();
