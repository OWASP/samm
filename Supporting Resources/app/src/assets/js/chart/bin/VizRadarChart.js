/*! Vizuly2 07-06-2019 */

var t, e;
t = this, e = function(e) {
    "use strict";
    var vizuly6 = {
        version: "2.2.78",
        loadD3: function(t) {
            vizuly6.d3 = t
        }
    };
    void 0 !== window.d3v4 ? vizuly6.d3 = window.d3v4 : "undefined" != typeof d3 ? vizuly6.d3 = d3 : void 0 !== window.d3 && (vizuly6.d3 = window.d3), vizuly6.d3 ? Number(vizuly6.d3.version.substr(0, 1)) < 4 && console.log("WARNING - Your D3 Library v" + vizuly6.d3.version + " is not compatible with this version of Vizuly.   Please use D3 v4.0.0 or higher.") : console.log("WARNING - No D3 library found for vizuly6!  Please load D3 library before instantiating a component."), vizuly6.core = {}, vizuly6.viz = {}, vizuly6.viz.layout = {}, vizuly6.viz.layout.CLUSTERED = "CLUSTERED", vizuly6.viz.layout.STACKED = "STACKED", vizuly6.viz.layout.OVERLAP = "OVERLAP", vizuly6.viz.layout.STREAM = "STREAM", vizuly6.svg = {}, vizuly6.ui = {}, vizuly6.assets = {}, vizuly6.core.component = function(t, p) {
        var a, r, d3 = vizuly6.d3,
            n = 50;
        "string" == typeof t && (t = d3.select(t).node()), p.parent = t, p.id = vizuly6.util.guid(), p.selection = d3.select(t).append("div").attr("id", "div_" + p.id).style("width", "100%").style("height", "100%"), p.initialized = !1, p.size = null, p.styles;
        var i = {},
            l = ["dataTipRenderer"],
            o = ["initialized", "validated", "measured", "updated", "styled"];

        function s() {
            null == a && (r = r || p.selection.node().getBoundingClientRect(), a = setTimeout(function() {
                var t = p.selection.node().getBoundingClientRect();
                if (f.update && (t.width != r.width || t.height != r.height)) {
                    if (f.duration) {
                        var e = f.duration();
                        f.duration(0).update().duration(e)
                    } else f.update();
                    p.dispatch
                }
                r = t, a = null
            }, n))
        }
        Object.getOwnPropertyNames(p.properties).forEach(function(t, e, a) {
            o.push(t + "_change")
        }), p.events && 0 < p.events.length && p.events.forEach(function(t) {
            o.push(t)
        }), p.dispatch = d3.dispatch.apply(this, o);
        var f = function() {
            var r, n, i;
            return r = f, i = (n = p).properties, Object.getOwnPropertyNames(i).forEach(function(a, t, e) {
                void 0 === n[a] && (n[a] = i[a], r[a] = function(t) {
                    if (!arguments.length) return n[a];
                    var e = n[a];
                    return n[a] = t, n[a] !== e && n.dispatch.apply(a + "_change", this, [n[a], e]), r
                })
            }), f
        };
        return p.dispatch.component = f(), f.id = function() {
            return p.id
        }, f.selection = function() {
            return p.selection
        }, f.style = function(t, e) {
            return arguments.length < 2 ? i[t] ? i[t] : p.styles[t] ? p.styles[t] : null : (i[t] = e, f)
        }, f.applyStyles = function(e) {
            return Object.keys(p.styles).forEach(function(t) {
                f.style(t, e[t])
            }), f
        }, f.clearStyles = function() {
            return Object.keys(p.styles).forEach(function(t) {
                f.style(t, null)
            }), f
        }, f.getStyle = function(t, e) {
            return null != i[t] ? "function" == typeof i[t] ? i[t].apply(f, e) : i[t] : null != p.styles[t] ? "function" == typeof p.styles[t] ? p.styles[t].apply(f, e) : p.styles[t] : null
        }, f.on = function(t, e) {
            return p.dispatch.on(t, e), f
        }, f.onChange = function(t, e) {
            var a = t.split("."),
                r = a[0] + "_change" + (1 < a.length ? "." + a[1] : "");
            return p.dispatch.on(r, e), f
        }, f.validate = function() {
            if (0 == p.initialized && p.initialize && (p.initialize(), p.initialized = !0), !e) {
                var e = [];
                if (Object.getOwnPropertyNames(p.properties).forEach(function(t) {
                        !p[t] && Number(0 != p[t]) && l.indexOf(t) < 0 && e.push(t)
                    }), 0 < e.length) throw new Error("vizuly6.util.component.validate(): " + e.concat() + " need to be declared");
                p.dispatch.apply("validated", this)
            }
        }, f.applyCallbacks = function(t) {
            t.forEach(function(t) {
                p.dispatch.on(t.on, t.callback)
            })
        }, f.showDataTip = function(t, e, a, r) {
            if (p.dataTipRenderer && null != p.dataTipRenderer) {
                var n, i, l = t.getBoundingClientRect(),
                    o = d3.select("body").append("div").attr("class", "vz-data-tip").style("display", "none"),
                    s = l.left,
                    c = l.top + window.pageYOffset,
                    u = p.dataTipRenderer.apply(f, [o, t, e, a, r, s, c]);
                if (0 != u) {
                    u && "object" == typeof u && u.constructor === Array && (s = u[0], c = u[1]);
                    var d = o.nodes()[0].getBoundingClientRect();
                    n = d.width, i = d.height, o.style("left", s ? s + "px" : l.left + l.width / 2 - n / 2 + "px").style("top", c ? c + "px" : l.top + window.pageYOffset - i - 10 + "px"), o.style("display", "block")
                    o.style("display", "block"),
                    o.style("position","absolute"),
                    o.style("border-radius", "4px"),
                    o.style("border",'1px solid black'),
                    o.style("padding", "5px"),
                   // o.style("width", "175px"),
                    o.style("background", "rgba(0,0,0,.8)"),
                    o.style("box-shadow", "0px 2px 3px 2px rgba(0, 0, 0, .25)"),
                    o.style("pointer-events", "none");
                }
            }
        }, f.removeDataTip = function() {
            d3.select(".vz-data-tip").remove()
        }, f.parent = function() {
            return p.parent
        }, f.size = function() {
            return p.size
        }, f.updateOnResize = function(t, e) {
            return !0 === t ? (d3.select(window).on("resize.component_" + p.id, s), e && (n = e)) : (d3.select(window).on("resize.component_" + p.id, null), n = 50), f
        }, f.destroy = function() {
            p.selection.remove(), p.selection = null, o.forEach(function(t) {
                p.dispatch.on(t, null)
            }), p.dispatch = null, p = null
        }, p.dispatch.component
    }, vizuly6.util = {}, vizuly6.util.getRelativeWidth = function(t, e) {
        if ("string" != typeof t || "%" != t.substr(t.length - 1)) return Number(t);
        var a = Math.min(Number(t.substr(0, t.length - 1)), 100) / 100;
        return Math.round(e.getBoundingClientRect().width * a)
    }, vizuly6.util.getRelativeHeight = function(t, e) {
        if ("string" != typeof t || "%" != t.substr(t.length - 1)) return Number(t);
        var a = Math.min(Number(t.substr(0, t.length - 1)), 100) / 100;
        return Math.round(e.getBoundingClientRect().height * a)
    }, vizuly6.util.size = function(t, e, a, r) {
        var n = {};
        return r && (e = vizuly6.util.getRelativeWidth(e, r), a = vizuly6.util.getRelativeHeight(a, r)), n.measuredWidth = e, n.measuredHeight = a, n.width = e - vizuly6.util.measure(t.left, e) - vizuly6.util.measure(t.right, e), n.height = a - vizuly6.util.measure(t.top, a) - vizuly6.util.measure(t.bottom, a), n.top = vizuly6.util.measure(t.top, a), n.left = vizuly6.util.measure(t.left, e), n.bottom = vizuly6.util.measure(t.bottom, a), n.right = vizuly6.util.measure(t.right, e), n
    }, vizuly6.util.getTypedScale = function(t) {
        return "string" == typeof t ? vizuly6.d3.scaleBand() : t instanceof Date ? vizuly6.d3.scaleTime() : vizuly6.d3.scaleLinear()
    }, vizuly6.util.measure = function(t, e) {
        if ("string" != typeof t || "%" != t.substr(t.length - 1)) return Number(t);
        var a = Math.min(Number(t.substr(0, t.length - 1)), 100) / 100;
        return Math.round(e * a)
    }, vizuly6.util.guid = function() {
        return "vzxxxxxxxx".replace(/[xy]/g, function(t) {
            var e = 16 * Math.random() | 0;
            return ("x" === t ? e : 3 & e | 8).toString(16)
        })
    }, vizuly6.util.getDefs = function(t) {
        var e = t.selection().selectAll("svg defs");
        return e.nodes() && e.nodes().length < 1 && (e = t.selection().select("svg").append("defs")), e
    }, vizuly6.util.createCSSKey = function(t) {
        return "css" + vizuly6.util.cleanString(t)
    }, vizuly6.util.cleanString = function(t) {
        var e = String(t).replace(",", "_");
        return (e = e.replace(/[\s+,'+,\.,\(,\),\',\&,\/]/g, "")).toUpperCase()
    }, vizuly6.util.aggregateNest = function(t, s, c) {
        for (var e = t[0]; e.values;) e = e.values[0];
        var n = [];

        function u(t, e) {
            if (e)
                for (var a = 0; a < n.length; a++) {
                    var r = n[a];
                    null != t[r] && (t["childProp_" + r] = t[r]), e["childProp_" + r] = t["childProp_" + r] ? t["childProp_" + r] : t[r]
                }
        }
        Object.getOwnPropertyNames(e).forEach(function(t) {
                n.push(t)
            }),
            function t(e, a) {
                for (var r = 0; r < e.length; r++) {
                    var n = e[r];
                    if (n.values) {
                        t(n.values, n);
                        for (var i = 0; i < n.values.length; i++)
                            for (var l = n.values[i], o = 0; o < s.length; o++) isNaN(n["agg_" + s[o]]) && (n["agg_" + s[o]] = 0), n["agg_" + s[o]] = c(n["agg_" + s[o]], l["agg_" + s[o]])
                    } else
                        for (o = 0; o < s.length; o++) n["agg_" + s[o]] = Number(n[s[o]]), isNaN(n["agg_" + s[o]]) && (n["agg_" + s[o]] = 0);
                    u(n, a)
                }
            }(t)
    }, vizuly6.util.format_YEAR_Mon_MonDay = function(t) {
        var e = vizuly6.d3.timeFormat(".%L"),
            a = vizuly6.d3.timeFormat(":%S"),
            r = vizuly6.d3.timeFormat("%I:%M"),
            n = vizuly6.d3.timeFormat("%I %p"),
            i = vizuly6.d3.timeFormat("%a %d"),
            l = vizuly6.d3.timeFormat("%b %d"),
            o = vizuly6.d3.timeFormat("%b"),
            s = vizuly6.d3.timeFormat("%Y");
        return (vizuly6.d3.timeSecond(t) < t ? e : vizuly6.d3.timeMinute(t) < t ? a : vizuly6.d3.timeHour(t) < t ? r : vizuly6.d3.timeDay(t) < t ? n : vizuly6.d3.timeMonth(t) < t ? vizuly6.d3.timeWeek(t) < t ? i : l : vizuly6.d3.timeYear(t) < t ? o : s)(t)
    }, vizuly6.util.stackOffsetBaseline = function(t, e) {
        if (1 < (a = t.length)) {
            var a, r = 1,
                n = t[e[0]];
            for (n.length; r < a; ++r) n = t[e[r]]
        }
    }, vizuly6.util.rgbToHex = function(t) {
        var e = String(t).match(/^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i);
        return e && 4 === e.length ? "#" + ("0" + parseInt(e[1], 10).toString(16)).slice(-2) + ("0" + parseInt(e[2], 10).toString(16)).slice(-2) + ("0" + parseInt(e[3], 10).toString(16)).slice(-2) : ""
    }, vizuly6.util.transitionOnEnd = function(t, e) {
        var a = 0;
        t.on("start", function() {
            a++
        }).on("end", function() {
            0 == --a && e()
        })
    }, vizuly6.util.colorBrightness = function(t) {
        return (299 * t.r + 587 * t.g + 114 * t.b) / 1e3
    }, vizuly6.util.scaleRadial = function() {
        var e = vizuly6.d3.scaleLinear();

        function a(t) {
            return Math.sqrt(e(t))
        }
        return a.domain = function(t) {
            return arguments.length ? (e.domain(t), a) : e.domain()
        }, a.nice = function(t) {
            return e.nice(t), a
        }, a.range = function(t) {
            return arguments.length ? (e.range(t.map(function(t) {
                return t * t
            })), a) : e.range().map(Math.sqrt)
        }, a.ticks = e.ticks, a.tickFormat = e.tickFormat, a
    }, vizuly6.svg.filter = {}, vizuly6.svg.filter.dropShadow = function(t, e, a, r) {
        var n = Math.round(100 * e) + "_" + Math.round(100 * a) + "_" + Math.round(100 * r),
            i = t.id(),
            l = vizuly6.util.getDefs(t).selectAll("#vz_filter_" + i + "_" + n).data([n]).enter().append("filter").attr("id", "vz_filter_" + i + "_" + n).attr("class", "vz-svg-filter-dropShadow").attr("width", "300%").attr("height", "300%");
        l.append("feGaussianBlur").attr("in", "SourceAlpha").attr("stdDeviation", r), l.append("feOffset").attr("dx", e).attr("dy", a), l.append("feComponentTransfer").append("feFuncA").attr("type", "linear").attr("slope", .2);
        var o = l.append("feMerge");
        return o.append("feMergeNode"), o.append("feMergeNode").attr("in", "SourceGraphic"), "#vz_filter_" + i + "_" + n
    }, vizuly6.svg.gradient = {}, vizuly6.svg.gradient.blend = function(t, e, a, r) {
        var n, i, l, o, s = String(e).replace("#", "") + String(a).replace("#", ""),
            c = "vz_gradient_blend_" + t.id() + "_" + s;
        o = "horizontal" == r ? (n = "100%", l = i = "0%") : (l = "100%", i = n = "0%");
        var u = vizuly6.util.getDefs(t),
            d = u.selectAll("#" + c).data([s]);
        return (d = d.enter().append("linearGradient").attr("id", c).attr("class", "vz-svg-gradient-blend").attr("x1", n).attr("x2", i).attr("y1", l).attr("y2", o)).append("stop").attr("offset", "0%").attr("stop-color", e), d.append("stop").attr("offset", "100%").attr("stop-color", a), u.selectAll("#" + c)
    }, vizuly6.svg.gradient.blendMultiple = function(t, e, a, r) {
        var n = "";
        e.forEach(function(t) {
            n += String(t).replace("#", "") + "_"
        });
        var i, l, o, s, c = "vz_gradient_blend_" + t.id() + "_" + n;
        s = "horizontal" == r.toLowerCase() ? (i = "100%", o = l = "0%") : (o = "100%", l = i = "0%");
        var u = vizuly6.util.getDefs(t),
            d = u.selectAll("#" + c).data([n]);
        return d = d.enter().append("linearGradient").attr("id", c).attr("class", "vz-svg-gradient-blend").attr("x1", i).attr("x2", l).attr("y1", o).attr("y2", s), e.forEach(function(t, e) {
            d.append("stop").attr("offset", 100 * a[e] + "%").attr("stop-color", t)
        }), d = u.selectAll("#" + c)
    }, vizuly6.svg.gradient.radialBlend = function(t, e, a, r, n, i, l, o, s) {
        var c = String(r).replace("#", "") + String(n).replace("#", "") + String(i).replace("%", "") + String(l).replace("%", ""),
            u = "vz_gradient_radial_blend_" + t.id() + "_" + c,
            d = vizuly6.util.getDefs(t),
            p = d.selectAll("#" + u).data([c]);
        return (p = p.enter().append("radialGradient").attr("id", u).attr("class", "vz-svg-gradient-radial-blend").attr("cx", e).attr("cy", a)).append("stop").attr("offset", i).attr("stop-color", r).attr("stop-opacity", void 0 === o ? 1 : o), p.append("stop").attr("offset", l).attr("stop-color", n).attr("stop-opacity", void 0 === s ? 1 : s), d.selectAll("#" + u)
    }, vizuly6.svg.gradient.fade = function(t, e, a, r, n) {
        n || (n = [0, 1]), r || (r = [.75, .9]);
        var i, l, o, s, c = String(e).replace("#", ""),
            u = "vz_gradient_fade_" + t.id() + "_" + c;
        s = "horizontal" == a.toLowerCase() ? (l = "100%", o = i = "0%") : (o = "100%", l = i = "0%");
        var d = vizuly6.util.getDefs(t),
            p = d.selectAll("#" + u).data([c]).enter().append("linearGradient").attr("id", u).attr("class", "vz-svg-gradient-fade").attr("x1", i).attr("x2", l).attr("y1", o).attr("y2", s);
        return p.append("stop").attr("offset", 100 * n[0] + "%").attr("stop-color", e).attr("stop-opacity", r[0]), p.append("stop").attr("offset", 100 * n[1] + "%").attr("stop-color", e).attr("stop-opacity", r[1]), d.selectAll("#" + u)
    }, vizuly6.svg.gradient.radialFade = function(t, e, a, r) {
        r || (r = [0, 1]), a || (a = [.75, .9]);
        var n = String(e).replace("#", ""),
            i = "vz_gradient_radial_fade" + t.id() + "_" + n,
            l = vizuly6.util.getDefs(t),
            o = l.selectAll("#" + i).data([n]).enter().append("radialGradient").attr("id", i).attr("class", "vz-svg-gradient-radial-fade");
        return o.append("stop").attr("offset", 100 * r[0] + "%").attr("stop-color", e).attr("stop-opacity", a[0]), o.append("stop").attr("offset", 100 * r[1] + "%").attr("stop-color", e).attr("stop-opacity", a[1]), l.selectAll("#" + i)
    }, vizuly6.svg.gradient.darker = function(t, e, a) {
        var r, n, i, l, o = String(e).replace("#", ""),
            s = "vz_gradient_darker_" + t.id() + "_" + o;
        l = "horizontal" == a.toLowerCase() ? (r = "100%", i = n = "0%") : (i = "100%", n = r = "0%");
        var c = vizuly6.util.getDefs(t),
            u = c.selectAll("#" + s).data([o]).enter().append("linearGradient").attr("class", "vz-gradient-darker").attr("id", s).attr("x1", r).attr("x2", n).attr("y1", i).attr("y2", l);
        return u.append("stop").attr("offset", "0%").attr("stop-color", e).attr("stop-opacity", .75), u.append("stop").attr("offset", "100%").attr("stop-color", vizuly6.d3.rgb(e).darker()).attr("stop-opacity", .9), c.selectAll("#" + s)
    }, vizuly6.svg.text = {}, vizuly6.svg.text.textArcPath = function(t, e) {
        var a = {};
        a.angle = e, a.startAngle = a.angle - 179 * .0174533, a.endAngle = a.angle + 179 * .0174533;
        var r = d3.arc().innerRadius(t).outerRadius(t)(a),
            n = /[Mm][\d\.\-e,\s]+[Aa][\d\.\-e,\s]+/.exec(r);
        return n && (n = n[0]), n
    }, vizuly6.svg.text.wrap = function(t, c, u, d) {
        var p = t.attr("x"),
            e = t.attr("y");
        p = !p || isNaN(p) ? 0 : p, e = !e || isNaN(e) ? 0 : e;
        var f = d / 3;
        t.each(function() {
            var t, e = d3.select(this),
                a = c.split(/\s+/).reverse(),
                r = [],
                n = 0,
                i = d,
                l = e.attr("y"),
                o = 1.1 * parseFloat(d / 2) + f;
            isNaN(o) && (o = 0);
            for (var s = e.text(null).append("tspan").attr("x", p).attr("y", l).attr("y", o).style("font-size", d + "px"); t = a.pop();) r.push(t), s.text(r.join(" ")), s.node().getComputedTextLength() > u && (r.pop(), s.text(r.join(" ")), r = [t], s = e.append("tspan").attr("x", p).attr("y", ++n * i + o + l).text(t).style("font-size", d + "px"))
        })
    };
    var n = {};

    function i(e, a, r) {
        return function() {
            var t = r.apply(a, arguments);
            return t === a ? e : t
        }
    }

    function p(t, e) {
        for (var a = [t], r = []; null != (t = a.pop());)
            if (r.push(t), (i = t.children) && (n = i.length))
                for (var n, i, l = -1; ++l < n;) a.push(i[l]);
        for (; null != (t = r.pop());) e(t)
    }

    function t(t) {
        return t.children
    }

    function a(t) {
        return t.value
    }

    function r(t, e) {
        return e.value - t.value
    }

    function l(t) {
        return n.merge(t.map(function(e) {
            return (e.children || []).map(function(t) {
                return {
                    source: e,
                    target: t
                }
            })
        }))
    }

    function o(t, e) {
        return t.value - e.value
    }

    function z(t, e) {
        var a = t._pack_next;
        (t._pack_next = e)._pack_prev = t, (e._pack_next = a)._pack_prev = e
    }

    function k(t, e) {
        (t._pack_next = e)._pack_prev = t
    }

    function _(t, e) {
        var a = e.x - t.x,
            r = e.y - t.y,
            n = t.r + e.r;
        return a * a + r * r < .999 * n * n
    }

    function f(t) {
        if ((e = t.children) && (s = e.length)) {
            var e, a, r, n, i, l, o, s, c = 1 / 0,
                u = -1 / 0,
                d = 1 / 0,
                p = -1 / 0;
            if (e.forEach(S), (a = e[0]).x = -a.r, a.y = 0, m(a), 1 < s && ((r = e[1]).x = r.r, r.y = 0, m(r), 2 < s))
                for (A(a, r, n = e[2]), m(n), z(a, n), z(a._pack_prev = n, r), r = a._pack_next, i = 3; i < s; i++) {
                    A(a, r, n = e[i]);
                    var f = 0,
                        y = 1,
                        v = 1;
                    for (l = r._pack_next; l !== r; l = l._pack_next, y++)
                        if (_(l, n)) {
                            f = 1;
                            break
                        }
                    if (1 == f)
                        for (o = a._pack_prev; o !== l._pack_prev && !_(o, n); o = o._pack_prev, v++);
                    f ? (y < v || y == v && r.r < a.r ? k(a, r = l) : k(a = o, r), i--) : (z(a, n), m(r = n))
                }
            var h = (c + u) / 2,
                g = (d + p) / 2,
                x = 0;
            for (i = 0; i < s; i++)(n = e[i]).x -= h, n.y -= g, x = Math.max(x, n.r + Math.sqrt(n.x * n.x + n.y * n.y));
            t.r = x, e.forEach(b)
        }

        function m(t) {
            c = Math.min(t.x - t.r, c), u = Math.max(t.x + t.r, u), d = Math.min(t.y - t.r, d), p = Math.max(t.y + t.r, p)
        }
    }

    function S(t) {
        t._pack_next = t._pack_prev = t
    }

    function b(t) {
        delete t._pack_next, delete t._pack_prev
    }

    function A(t, e, a) {
        var r = t.r + a.r,
            n = e.x - t.x,
            i = e.y - t.y;
        if (r && (n || i)) {
            var l = e.r + a.r,
                o = n * n + i * i,
                s = .5 + ((r *= r) - (l *= l)) / (2 * o),
                c = Math.sqrt(Math.max(0, 2 * l * (r + o) - (r -= o) * r - l * l)) / (2 * o);
            a.x = t.x + s * n + c * i, a.y = t.y + s * i - c * n
        } else a.x = t.x + r, a.y = t.y
    }
    n.layout = {}, n.svg = {}, n.functor = function(t) {
        return "function" == typeof t ? t : function() {
            return t
        }
    }, n.merge = function(t) {
        for (var e, a, r, n = t.length, i = -1, l = 0; ++i < n;) l += t[i].length;
        for (a = new Array(l); 0 <= --n;)
            for (e = (r = t[n]).length; 0 <= --e;) a[--l] = r[e];
        return a
    }, n.rebind = function(t, e) {
        for (var a, r = 1, n = arguments.length; ++r < n;) t[a = arguments[r]] = i(t, e, e[a]);
        return t
    }, n.layout.hierarchy = function() {
        var o = r,
            s = t,
            c = a;

        function u(t) {
            var e, a = [t],
                r = [];
            for (t.depth = 0; null != (e = a.pop());)
                if (r.push(e), (i = s.call(u, e, e.depth)) && (n = i.length)) {
                    for (var n, i, l; 0 <= --n;) a.push(l = i[n]), l.parent = e, l.depth = e.depth + 1;
                    c && (e.value = 0), e.children = i
                } else c && (e.value = +c.call(u, e, e.depth) || 0), delete e.children;
            return p(t, function(t) {
                var e, a;
                o && (e = t.children) && e.sort(o), c && (a = t.parent) && (a.value += t.value)
            }), r
        }
        return u.sort = function(t) {
            return arguments.length ? (o = t, u) : o
        }, u.children = function(t) {
            return arguments.length ? (s = t, u) : s
        }, u.value = function(t) {
            return arguments.length ? (c = t, u) : c
        }, u.revalue = function(t) {
            return c && (function(t, e) {
                for (var a, r = [t]; null != (t = r.pop());)
                    if ((a = t).children && (a.value = 0), (i = t.children) && (n = i.length))
                        for (var n, i; 0 <= --n;) r.push(i[n])
            }(t), p(t, function(t) {
                var e;
                t.children || (t.value = +c.call(u, t, t.depth) || 0), (e = t.parent) && (e.value += t.value)
            })), t
        }, u
    }, n.layout.pack = function() {
        var s, t, e, c = n.layout.hierarchy().sort(o),
            u = 0,
            d = [1, 1];

        function a(t, e) {
            var a = c.call(this, t, e),
                r = a[0],
                n = d[0],
                i = d[1],
                l = null == s ? Math.sqrt : "function" == typeof s ? s : function() {
                    return s
                };
            if (r.x = r.y = 0, p(r, function(t) {
                    t.r = +l(t.value)
                }), p(r, f), u) {
                var o = u * (s ? 1 : Math.max(2 * r.r / n, 2 * r.r / i)) / 2;
                p(r, function(t) {
                    t.r += o
                }), p(r, f), p(r, function(t) {
                    t.r -= o
                })
            }
            return function t(e, a, r, n) {
                var i = e.children;
                if (e.x = a += n * e.x, e.y = r += n * e.y, e.r *= n, i)
                    for (var l = -1, o = i.length; ++l < o;) t(i[l], a, r, n)
            }(r, n / 2, i / 2, s ? 1 : 1 / Math.max(2 * r.r / n, 2 * r.r / i)), a
        }
        return a.size = function(t) {
            return arguments.length ? (d = t, a) : d
        }, a.radius = function(t) {
            return arguments.length ? (s = null == t || "function" == typeof t ? t : +t, a) : s
        }, a.padding = function(t) {
            return arguments.length ? (u = +t, a) : u
        }, t = a, e = c, n.rebind(t, e, "sort", "children", "value"), (t.nodes = t).links = l, t
    }, n.svg.diagonal = function() {
        var l = function(t) {
                return t.source
            },
            o = function(t) {
                return t.target
            },
            s = function(t) {
                return [t.x, t.y]
            };

        function e(t, e) {
            var a = l.call(this, t, e),
                r = o.call(this, t, e),
                n = (a.y + r.y) / 2,
                i = [a, {
                    x: a.x,
                    y: n
                }, {
                    x: r.x,
                    y: n
                }, r];
            return "M" + (i = i.map(s))[0] + "C" + i[1] + " " + i[2] + " " + i[3]
        }
        return e.source = function(t) {
            return arguments.length ? (l = n.functor(t), e) : l
        }, e.target = function(t) {
            return arguments.length ? (o = n.functor(t), e) : o
        }, e.projection = function(t) {
            return arguments.length ? (s = t, e) : s
        }, e
    }, n.svg.diagonal.radial = function() {
        var t = n.svg.diagonal(),
            r = function(t) {
                return [t.x, t.y]
            },
            e = t.projection;
        return t.projection = function(t) {
            return arguments.length ? e(function(t) {
                return r = t,
                    function() {
                        var t = r.apply(this, arguments),
                            e = t[0],
                            a = t[1] - halfπ;
                        return [e * Math.cos(a), e * Math.sin(a)]
                    }
            }) : r
        }, t
    }, vizuly6.d3v3 = n, Object.keys(vizuly6).forEach(function(t) {
        e[t] = vizuly6[t]
    }), Object.defineProperty(e, "__esModule", {
        value: !0
    })
}, "object" == typeof exports && "undefined" != typeof module ? e(exports) : "function" == typeof define && define.amd ? define(["exports"], e) : e(t.vizuly6 = t.vizuly6 || {}), vizuly6.viz.RadarChart = function(t) {
    var d3 = vizuly6.d3,
        e = {
            data: null,
            width: 600,
            height: 600,
            margin: {
                top: "10%",
                bottom: "10%",
                left: "15%",
                right: "15%"
            },
            duration: 500,
            dataTipRenderer: function(t, e, a, r, n, i, l) {
                var o = e.getBoundingClientRect(),
                    s = d3.event.pageX;
                o.left;
                var c = d3.event.pageY;
                o.top;
                var u, d, p,
                f = '<div class="vz-tip-header1" style="color:gray;text-align:center"> HEADER1 </div>' +
                '<div class="vz-tip-header-rule" style="height:0px;margin:1px auto 3px;margin-top:7px;margin-bottom:7px;background:gray;width:125px;"></div>' +
                '<div class="vz-tip-header2" style="color:gray;text-align:center"> HEADER2 </div>';
                "vz-radar-area" == d3.select(e).attr("class") ? (p = u = " ", d = y.seriesLabel(y.data[r][0]), t.style("height", "50px")) : (u = y.seriesLabel(a), d = y.y(a), p = y.x(a), t.style("height", "80px"));
                f = (f = (f = f.replace("HEADER1", u)).replace("HEADER2", d)).replace("HEADER3", p), t.html(f), "vz-radar-area" == d3.select(e).attr("class") && t.selectAll(".vz-tip-header2").style("color", function() {
                    return v.getStyle("area-fill", [y.data[r], r])
                });
                return [s - 100, c - 120]
            },
            labelRadiusPercent: 1.15,
            yScale: d3.scaleLinear(),
            x: null,
            y: null,
            seriesLabel: function(t) {
                return t.series
            },
            xAxis: d3.axisBottom(),
            yAxis: d3.axisLeft(),
            xScale: "undefined",
            yTickFormat: function(t) {
                return t
            },
            xTickFormat: function(t) {
                return t
            },
            curve: d3.curveLinearClosed
        },
        a = {
            "background-opacity": 1,
            "background-color-top": "#FFF",
            "background-color-bottom": "#EEE",
            "label-color": "#000",
            "line-stroke": function(t, e) {
                return d3.interpolateViridis(e / y.data.length)
            },
            "line-stroke-over": function(t, e) {
                return d3.hsl(d3.interpolateViridis(e / y.data.length)).darker()
            },
            "line-stroke-opacity": .8,
            "area-fill": function(t, e) {
                return d3.interpolateViridis(e / y.data.length)
            },
            "area-fill-opacity": .5,
            "area-fill-opacity-over": .8,
            "x-axis-font-weight": "normal",
            "x-axis-line-stroke": "#777",
            "x-axis-line-opacity": .5,
            "y-axis-line-stroke": "#777",
            "y-axis-line-opacity": .15,
            "y-axis-fill": "#777",
            "y-axis-fill-opacity": .05,
            "x-axis-font-size": function(t, e) {
                return Math.max(11, Math.round(p / 22))
            }
        },
        y = {
            initialize: function() {
                r = y.selection.append("svg").attr("id", y.id).style("overflow", "visible").attr("class", "vizuly"), h = r.append("rect").attr("class", "vz-background"), m = vizuly6.util.getDefs(v), n = r.append("g").attr("class", "vz-radar-chart"), l = n.append("g").attr("class", "vz-xAxis-plot"), i = n.append("g").attr("class", "vz-yAxis-plot"), f = n.append("g").attr("class", "vz-plot").attr("clip-path", "url(#" + y.id + "_plotClipPath)"), g = f.append("rect").attr("class", "vz-plot-background"), x = f.append("g").attr("class", "vz-series"), z = n.append("g").attr("class", "vz-point-areas"), y.yAxis.tickFormat(y.yTickFormat), y.xAxis.tickFormat(y.xTickFormat), y.dispatch.apply("initialized", v)
            }
        };
    y.properties = e, y.styles = a, y.events = ["mouseover", "mouseout", "click", "vertex_mouseover", "vertex_mouseout"];
    var o, s, c, u, d, p, v = vizuly6.core.component(t, y);
    v.version = "2.1.219";
    var r, n, l, i, f, h, g, x, m, z, k = d3.radialLine(),
        _ = d3.radialArea();

    function S(t) {
        return d3.max(t, function(t) {
            return t[1]
        })
    }

    function b(t) {
        return d3.min(t, function(t) {
            return t[0]
        })
    }

    function A() {
        ! function() {
            v.validate(), o = vizuly6.util.size(y.margin, y.width, y.height, y.parent), d = [];
            var a = [];
            y.data.forEach(function(t, e) {
                a.push("series" + e)
            });
            for (var r = 0; r < y.data[0].length; r++) {
                var n = {};
                n.x = y.x(y.data[0][r]), y.data.forEach(function(t, e) {
                    n["series" + e] = y.y(t[r])
                }), d.push(n)
            }
            var t, e = vizuly6.util.stackOffsetBaseline,
                i = d3.stackOrderAscending;
            u = d3.stack().keys(a).order(i).offset(e), d = u(d), "undefined" == y.xScale && ("string" == typeof v.x()(y.data[0][0]) ? (t = d3.scaleBand()).range([0, 2 * Math.PI]) : v.x()(y.data[0][0]) instanceof Date ? (t = d3.scaleTime()).range([0, 2 * Math.PI]) : (t = d3.scaleLinear()).range([0, 2 * Math.PI]), y.xScale = t), "string" == typeof v.x()(y.data[0][0]) ? y.xScale.domain(y.data[0].map(function(t) {
                return y.x(t)
            })) : y.xScale.domain([d3.min(y.data[0], function(t) {
                return y.x(t)
            }), d3.max(y.data[0], function(t) {
                return y.x(t)
            })]), p = Math.round(Math.min(o.width, o.height) / 2), 0, y.yScale.range([0, p]), y.yScale.domain([d3.min(d, b), d3.max(d, S)]), _.curve(y.curve).angle(function(t) {
                return y.xScale(t.data.x)
            }).innerRadius(function(t, e) {
                return y.yScale(t[0])
            }).outerRadius(function(t, e) {
                return y.yScale(t[1])
            }), k.curve(y.curve).angle(function(t) {
                return y.xScale(t.data.x)
            }).radius(function(t, e) {
                return y.yScale(t[1])
            });
            var l = y.xScale.domain().length;
            y.yAxis.scale(y.yScale), y.yAxis.tickSize(p).ticks(4), y.xAxis.scale(y.xScale).tickSize(p), Math.round(d[0].length / l), c = y.xScale.domain(), s = Math.min(o.width / 50, o.height / 50), y.size = o, y.dispatch.apply("measured", v)
        }(), r.attr("width", o.measuredWidth).attr("height", o.measuredHeight), h.attr("width", o.measuredWidth).attr("height", o.measuredHeight), f.style("width", o.width).style("height", o.height).attr("transform", "translate(" + (o.left + o.width / 2) + "," + (o.top + o.height / 2) + ")"), z.style("width", o.width).style("height", o.height).attr("transform", "translate(" + o.left + "," + o.top + ")"), l.attr("transform", "translate(" + (o.left + o.width / 2) + "," + (o.height / 2 + o.top) + ")"), i.attr("transform", "translate(" + (o.left + o.width / 2) + "," + (o.height / 2 + o.top) + ")"), g.attr("width", o.width).attr("height", o.height);
        var t = x.selectAll(".vz-radar-area").data(d);
        t.exit().remove(), (t = t.enter().append("path").attr("class", "vz-radar-area").on("mouseover", function(t, e) {
            y.dispatch.apply("mouseover", v, [this, t, e])
        }).on("mouseout", function(t, e) {
            y.dispatch.apply("mouseout", v, [this, t, e])
        }).on("click", function(t, e) {
            y.dispatch.apply("click", v, [this, t, e])
        }).merge(t)).transition().duration(y.duration).attr("d", _), z.selectAll(".vz-tip").remove(), d.forEach(function(t, a) {
            z.selectAll("vz-tip").data(t).enter().append("g").attr("class", "vz-tip series_" + a).attr("transform", function(t, e) {
                var a, r, n, i, l = (a = t[1], r = t.data.x, n = y.yScale(a), i = y.xScale(r) - Math.PI / 2, a = n * Math.cos(i) + o.width / 2, r = n * Math.sin(i) + o.height / 2, {
                    x: a,
                    y: r
                });
                return "translate(" + l.x + "," + l.y + ")"
            }).on("mouseover", function(t, e) {
                y.dispatch.apply("vertex_mouseover", v, [this, y.data[a][e], e, a])
            }).on("mouseout", function(t, e) {
                y.dispatch.apply("vertex_mouseout", v, [this, y.data[a][e], e, a])
            }).each(function() {
                d3.select(this).append("circle").attr("class", "vz-hit-circle").style("fill", "#FFF").style("stroke", null).style("opacity", .001).transition().attr("r", s)
            })
        }), l.selectAll(".vz-radar-x-axis-tick").remove();
        var e = l.selectAll(".vz-radar-x-axis-tick").data(c).enter().append("g").attr("class", "vz-radar-x-axis-tick");
        e.append("circle").attr("r", Math.round(.6 * s)).attr("cx", function(t, e) {
            return p * Math.cos(y.xScale(t) - Math.PI / 2)
        }).attr("cy", function(t, e) {
            return p * Math.sin(y.xScale(t) - Math.PI / 2)
        }).style("stroke", "#EEE"), e.append("line").attr("x1", 0).attr("x2", function(t, e) {
            return p * Math.cos(y.xScale(t) - Math.PI / 2)
        }).attr("y1", 0).attr("y2", function(t, e) {
            return p * Math.sin(y.xScale(t) - Math.PI / 2)
        }).style("stroke", "#FFF"), e.append("text").attr("class", "vz-radar-x-axis-label").attr("x", function(t, e) {
            return (p + s) * y.labelRadiusPercent * Math.cos(y.xScale(t) - Math.PI / 2)
        }).attr("y", function(t, e) {
            return (p + s) * y.labelRadiusPercent * Math.sin(y.xScale(t) - Math.PI / 2)
        }).attr("dy", function(t, e) {
            return 1.2 * v.getStyle("x-axis-font-size", arguments) + "px"
        }).style("font-size", function(t, e) {
            return v.getStyle("x-axis-font-size", arguments) + "px"
        }).text(function(t, e) {
            return y.xTickFormat(t)
        }).style("text-anchor", "middle").call(w, p / 4), i.selectAll(".vz-label-ticks").remove(), i.append("g").attr("class", "vz-label-ticks").style("display", "none").call(y.yAxis), i.selectAll(".vz-y-axis-tick").remove();
        var a = i.selectAll(".tick").nodes().map(function(t) {
            return d3.select(t).datum()
        });
        i.selectAll(".vz-y-axis-tick").data(a).enter().append("circle").attr("class", "vz-y-axis-tick").attr("cx", 0).attr("cy", 0).attr("r", function(t) {
            return y.yScale(t)
        }).style("fill", "none"), m.selectAll(".vz-y-axis-arc-path").remove(), i.selectAll(".vz-y-axis-tick-label").remove(), a.forEach(function(t, a) {
            m.append("path").attr("class", "vz-y-axis-arc-path").attr("id", function(t, e) {
                return y.id + "_y_text_arc_" + a + "_" + e
            }).attr("d", function() {
                return vizuly6.svg.text.textArcPath(1.02 * y.yScale(t), 0)
            }), i.append("text").attr("class", "vz-y-axis-tick-label").append("textPath").attr("text-anchor", "middle").attr("startOffset", "50%").style("overflow", "visible").attr("xlink:href", function(t, e) {
                return "#" + y.id + "_y_text_arc_" + a + "_" + e
            }).text(function() {
                return y.yTickFormat(t)
            })
        }), y.dispatch.apply("updated", v)
    }

    function w(t, u) {
        t.each(function() {
            for (var t, e = d3.select(this), a = e.text().split(/\s+/).reverse(), r = [], n = 0, i = e.attr("x"), l = parseFloat(e.attr("dy")), o = e.attr("y") - l, s = l, c = e.text(null).append("tspan").attr("x", i).attr("y", o).attr("dy", l + "px"); t = a.pop();) r.push(t), c.text(r.join(" ")), c.node().getComputedTextLength() > u && 1 < a.length && (r.pop(), c.text(r.join(" ")), r = [t], c = e.append("tspan").attr("x", i).attr("y", o).attr("dy", ++n * s + l + "px").text(t));
            e.selectAll("tspan").attr("y", o - n * l)
        })
    }
    v.update = function() {
        return A(), v
    };
    var M = [{
        on: "updated.styles",
        callback: function() {
            if (!y.styles || null == y.styles) return;
            var t = y.selection,
                e = vizuly6.svg.gradient.blend(v, v.getStyle("background-color-bottom"), v.getStyle("background-color-top"));
            t.selectAll(".vz-background").style("fill", function() {
                return "url(#" + e.attr("id") + ")"
            }).style("opacity", v.getStyle("background-opacity")), t.selectAll(".vz-plot-background").style("opacity", 0), t.selectAll(".vz-radar-area").style("fill", function(t, e) {
                return v.getStyle("area-fill", arguments)
            }).style("fill-opacity", function(t, e) {
                return v.getStyle("area-fill-opacity", arguments)
            }).style("stroke", function(t, e) {
                return v.getStyle("line-stroke", arguments)
            }).style("stroke-opacity", function(t, e) {
                return v.getStyle("line-stroke-opacity", arguments)
            }), t.selectAll(".vz-data-point").style("opacity", 0), t.selectAll(".vz-radar-x-axis-tick").style("font-weight", function(t, e) {
                return v.getStyle("x-axis-font-weight", arguments)
            }).style("fill", function(t, e) {
                return v.getStyle("label-color", arguments)
            }).style("font-size", Math.max(8, Math.round(p / 25)) + "px"), t.selectAll(".vz-radar-x-axis-tick line").style("stroke", function(t, e) {
                return v.getStyle("x-axis-line-stroke", arguments)
            }).style("stroke-width", 1).style("opacity", function(t, e) {
                return v.getStyle("x-axis-line-opacity", arguments)
            }), t.selectAll(".vz-radar-x-axis-tick circle").style("fill", function(t, e) {
                return v.getStyle("x-axis-line-stroke", arguments)
            }).style("opacity", function(t, e) {
                return v.getStyle("x-axis-line-opacity", arguments)
            }), t.selectAll(".vz-y-axis-tick").style("stroke", function(t, e) {
                return v.getStyle("y-axis-line-stroke", arguments)
            }).style("stroke-width", 1).style("stroke-opacity", function(t, e) {
                return v.getStyle("y-axis-line-opacity", arguments)
            }).style("fill", function(t, e) {
                return v.getStyle("y-axis-fill", arguments)
            }).style("fill-opacity", function(t, e) {
                return v.getStyle("y-axis-fill-opacity", arguments)
            }), t.selectAll(".vz-y-axis-tick-label").style("font-size", Math.max(8, Math.round(p / 30)) + "px").style("fill", function(t, e) {
                return v.getStyle("label-color", arguments)
            }), y.dispatch.apply("styled", v)
        }
    }, {
        on: "mouseover.styles",
        callback: function(t, e, a) {
            f.selectAll(".vz-radar-area").transition("styles_mouseover").style("fill-opacity", function(t, e) {
                return a == e ? v.getStyle("area-fill-opacity-over", arguments) : .2
            }).style("stroke-opacity", function(t, e) {
                return a == e ? v.getStyle("area-fill-opacity-over", arguments) : .2
            }), z.selectAll(".vz-point-tip").remove(), z.selectAll(".vz-tip.series_" + a).each(function(t, e) {
                d3.select(this).append("circle").attr("class", "vz-point-tip").attr("r", 4).style("fill", "#000").style("stroke", "#FFF").style("stroke-width", 2).style("pointer-events", "none")
            }), v.showDataTip(t, e, a)
        }
    }, {
        on: "mouseout.styles",
        callback: function(t, e, a) {
            f.selectAll(".vz-radar-area").transition("styles_mouseover").style("fill-opacity", function(t, e) {
                return v.getStyle("area-fill-opacity", arguments)
            }).style("stroke-opacity", function(t, e) {
                return v.getStyle("area-fill-opacity", arguments)
            }), z.selectAll(".vz-point-tip").remove(), v.removeDataTip()
        }
    }, {
        on: "vertex_mouseover.styles",
        callback: function(t, e, a, r) {
            var n = y.selection,
                i = d[r][a];
            n.selectAll(".vz-radar-area").transition("styles_mouseover").style("fill-opacity", function(t, e) {
                return e == r ? v.getStyle("area-fill-opacity-over", arguments) : .2
            }).style("stroke-opacity", function(t, e) {
                return a == r ? v.getStyle("area-fill-opacity-over", arguments) : .2
            }), f.append("circle").attr("class", "vz-y-axis-mouseover").attr("cx", 0).attr("cy", 0).attr("r", function() {
                return y.yScale(i[1])
            }).style("stroke", v.getStyle("x-axis-line-stroke")).style("fill", "none").style("stroke-dasharray", function() {
                return p / 80 + "," + p / 80
            }), n.selectAll(".vz-point-tip").remove(), d3.select(t).append("circle").attr("class", "vz-point-tip").attr("r", 4).style("fill", "#000").style("stroke", "#FFF").style("stroke-width", 2).style("pointer-events", "none"), l.selectAll(".vz-radar-x-axis-label").filter(function(t, e) {
                return e == a
            }).transition().style("font-size", 1.25 * v.getStyle("x-axis-font-size") + "px").style("font-weight", "bold"), l.selectAll(".vz-radar-x-axis-tick line").filter(function(t, e) {
                return e == a
            }).style("opacity", 1), l.selectAll(".vz-radar-x-axis-tick circle").filter(function(t, e) {
                return e == a
            }).style("opacity", 1), v.showDataTip(t, e, a)
        }
    }, {
        on: "vertex_mouseout.styles",
        callback: function(t, e, a, r) {
            var n = y.selection;
            n.selectAll(".vz-radar-area").transition("styles_mouseover").style("fill-opacity", function(t, e) {
                return v.getStyle("area-fill-opacity", arguments)
            }).style("stroke-opacity", function(t, e) {
                return v.getStyle("area-fill-opacity", arguments)
            }), n.selectAll(".vz-y-axis-mouseover").remove(), n.selectAll(".vz-point-tip").remove(), l.selectAll(".vz-radar-x-axis-label").transition().style("font-size", v.getStyle("x-axis-font-size") + "px").style("font-weight", "normal"), l.selectAll(".vz-radar-x-axis-tick line, circle").style("opacity", v.getStyle("x-axis-line-opacity")), v.removeDataTip()
        }
    }];
    return v.applyCallbacks(M), v
};
