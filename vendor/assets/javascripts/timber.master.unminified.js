/*
 SCRIPTS MADE BY THEMEMOUNTAIN: Swipe It, Timber, Avalanche Slider, Summit Lightbox, Snowbridge Parallax, Horizon, Retinize, Equalize, Counter
 THESE PLUGINS ARE LICENSED UNDER ENVATO'S REGULAR/EXTENDED LICENSE SEPCIFICALLY FOR USE IN OUR PRODUCTS. REDISTRIBUTON PROHIBITED!
 For individual licenses please visit thememountain.com.
 */
/**
 *	Swipe Plugin
 *	Version: 1.0
 */
! function(t) {
    "use strict";
    t.fn.swipeIt = function(i) {
        var e = t.extend({
                swipeThreshold: 40,
                scrollThreshold: 10,
                draggable: !1,
                preventTouchOn: "",
                onSwipeMove: null,
                onSwipeEnd: null
            }, i),
            a = this,
            n = 0,
            s = 0,
            o = e.swipeThreshold,
            r = "ontouchend" in document,
            d = r ? "touchstart" : "pointerdown",
            c = r ? "touchmove" : "pointermove",
            l = r ? "touchend" : "pointermove",
            u = function(t) {
                t.stopPropagation(), n = t.originalEvent.touches ? t.originalEvent.touches[0].pageX : t, a.on(c, h)
            },
            h = function(i) {
                if (!t(i.target).closest(e.preventTouchOn).length || "" === e.preventTouchOn) {
                    if (s = i.originalEvent.touches ? i.originalEvent.touches[0].pageX : i, Math.abs(n - s) > e.scrollThreshold && i.preventDefault(), e.draggable) {
                        var o;
                        o = -(n - s), e.onSwipeMove(o)
                    }
                    if (s === n) return !1;
                    a.on(l, p)
                }
            },
            p = function() {
                var t;
                Math.abs(s - n) > o && (t = s > n ? "left" : "right", e.onSwipeEnd(t)), a.off(c, h), a.off(l, p)
            };
        return a.on(d, u), this
    }
}(jQuery);
/**
 *	Timber
 *	Version: 1.0.9
 */
$(document).ready(function() {
    "use strict";
    var t, i = ai ? "touchstart" : "click",
        e = ".wrapper",
        a = ".element-reveal-left",
        n = ".element-reveal-right",
        s = ".side-navigation-wrapper",
        o = ".side-nav-show, a.side-nav-show",
        r = ".side-nav-hide a",
        c = ".no-scroll",
        l = ".element-show-left",
        d = ".element-show-right",
        u = "easeInOutQuint",
        v = {
            init: function() {
                if (!$(s).length) return !1;
                $("body").data("aux-nav", !1);
                var t = $(s).data("animation") ? $(s).data("animation") : "no-transition",
                    h = $(s).is("[data-no-scrollbar]") ? "no-scrollbar" : "scrollbar";
                "no-transition" === t && $(e).addClass(t + "-reset"), $(e).addClass("reveal-side-navigation"), $(s).addClass(t + "-reset " + h);
                var f = $(s).hasClass("enter-right") ? "right" : "left";
                Z ? m = "left" === f ? a : n : (m = "left" === f ? l : d, $(s).addClass("hide"));
                var m = m.split(".").join("");
                c = c.split(".").join(""), $(o).on(i, function(a) {
                    if (a.preventDefault(), $(s).hasClass("active")) v.closeNav(m, t);
                    else {
                        I.state(!0), k.state(!0), $("body").data("aux-nav", !0), $("html, body").addClass(c);
                        var n = $(window).scrollTop();
                        ai || $(".header-inner").css({
                            top: n + "px"
                        }), Z ? ($(e).addClass(m + " inactive " + t).css({
                            transitionTimingFunction: ei[u]
                        }), $(s).addClass("active " + t).css({
                            transitionTimingFunction: ei[u]
                        })) : ($(e).addClass(m), $(s).removeClass("hide").addClass("active")), $(e).on(ii, function(e) {
                            return e.target !== $(this)[0] ? !1 : (e.stopPropagation(), $(this).off(ii), void $(".reveal-side-navigation").on(i, function() {
                                $(".reveal-side-navigation").off(i), v.closeNav(m, t)
                            }))
                        })
                    }
                }), $(r).on(i, function(e) {
                    e.preventDefault(), $(".reveal-side-navigation").off(i), v.closeNav(m, t)
                }), $(window).on("resize", function() {
                    k.state($("body").data("aux-nav") ? !0 : !1)
                })
            },
            closeNav: function(t, i) {
                Z ? (I.state(!0), $(e).removeClass(t + " " + i), $(s).removeClass(i), "no-transition" === i && ($("html, body").removeClass(c), $(e).removeClass("inactive"), $(s).removeClass("active")), $(e).on(ii, function(t) {
                    return t.target !== $(this)[0] ? !1 : (t.stopPropagation(), k.state(!1), $(this).off(ii), $("html, body").removeClass(c), $(e).removeClass("inactive"), $(s).removeClass("active"), void(ai || $(".header-inner").css({
                        top: 0
                    })))
                })) : ($(e).removeClass(t + " " + i), $(s).addClass("hide").removeClass("active")), $("body").data("aux-nav", !1)
            }
        },
        h = ".overlay-navigation-wrapper",
        f = ".overlay-navigation-inner",
        m = ".overlay-nav-show a, a.overlay-nav-show",
        b = ".overlay-nav-hide a",
        g = ".no-scroll",
        p = "easeInOutQuint",
        C = {
            init: function() {
                if (!$(h).length) return !1;
                var t = $(h).data("animation") ? $(h).data("animation") : "no-transition",
                    e = $(h).is("[data-no-scrollbar]") ? "no-scrollbar" : "scrollbar";
                $(h).addClass(t + "-reset " + e), g = g.split(".").join(""), $(m).on(i, function(i) {
                    i.preventDefault(), $(h).hasClass("active") ? C.closeNav(t) : ($("body").data("aux-nav", !0), $("html, body").addClass(g), Z ? $(h).addClass("active " + t).css({
                        transitionTimingFunction: ei[p]
                    }) : $(h).addClass("active"), $(h).on(ii, function(t) {
                        return t.target !== $(this)[0] ? !1 : (t.stopPropagation(), k.state(!0), void $(this).off(ii))
                    }))
                }), $(f).on(i, function(i) {
                    i.target === this && C.closeNav(t)
                }), $(b).on(i, function(i) {
                    i.preventDefault(), C.closeNav(t)
                }), $(window).on("resize", function() {
                    k.state($("body").data("aux-nav") ? !0 : !1)
                })
            },
            closeNav: function(t) {
                Z ? ($(h).removeClass(t), "no-transition" === t && ($("html, body").removeClass(g), $(h).removeClass("active")), $(h).on(ii, function(t) {
                    return t.target !== $(this)[0] ? !1 : (t.stopPropagation(), k.state(!1), $(this).off(ii), $("html, body").removeClass(g), void $(h).removeClass("active"))
                })) : $(h).removeClass("active").css({
                    top: "-100%"
                }), $("body").data("aux-nav", !1)
            }
        },
        y = ".side-navigation-wrapper, .overlay-navigation-wrapper",
        w = ".sub-menu",
        z = ".contains-sub-menu",
        T = {
            init: function() {
                $(y).find(z).each(function() {
                    $(this).on(i, function(t) {
                        t.preventDefault(), $(this).parent().hasClass("current") ? $(y).find("nav").children("ul").children().removeClass("current") : ($(y).find("nav").children("ul").children().removeClass("current"), $(this).parent().addClass("current")), I.state(!0);
                        var i = $(this).siblings(w).children(),
                            e = 0;
                        i.each(function() {
                            e += $(this).outerHeight()
                        }), $(this).siblings(w).hasClass("open") ? $(this).closest(y).find(w).css({
                            height: 0
                        }).removeClass("open") : ($(this).closest(y).find(w).css({
                            height: 0
                        }).removeClass("open"), $(this).siblings(w).css({
                            height: e + "px"
                        }), $(this).siblings(w).addClass("open"))
                    })
                })
            }
        },
        k = {
            state: function(t) {
                ai ? t ? $("body").addClass("aux-navigation-active") : $("body").removeClass("aux-navigation-active") : t ? $("body").addClass("aux-navigation-active") : $("body").data("aux-nav") || $("body").removeClass("aux-navigation-active")
            }
        },
        O = ".header, .header-inner, .logo, .logo a, .header .navigation",
        I = {
            init: function() {
                ai || $(window).on("scroll", function() {
                    I.state(!0)
                }), $(window).on("resize", function() {
                    I.state(!1)
                })
            },
            state: function(t) {
                t ? $(O).removeClass("no-transition") : $(O).addClass("no-transition")
            }
        },
        x = 300,
        N = ".scroll-to-top",
        E = 600,
        D = {
            init: function() {
                $(window).on("scroll", function() {
                    return $(N).is("[data-no-hide]") ? !1 : void($(this).scrollTop() > x ? $(N).fadeIn(E) : $(N).fadeOut(E))
                }), $(N).on(i, function(t) {
                    t.preventDefault(), D.scrollUp()
                })
            },
            scrollUp: function() {
                $("html, body").animate({
                    scrollTop: 0
                }, E)
            }
        },
        Q = ".header",
        B = ".tabs",
        P = ".tab-trigger-click",
        A = ".accordion",
        F = "icon-plus",
        H = "icon-minus",
        M = ".accordion-content",
        S = ".accordion-trigger-click",
        W = ".box.dismissable",
        j = 300,
        L = "swing",
        R = ".dropdown",
        U = ".thumbnail",
        q = ".overlay-info, img",
        G = ".overlay-info",
        J = 400,
        K = "easeInOutQuint",
        V = {
            init: function() {
                V.tabs(), V.accordions(), V.dismissable(), V.dropdown(), V.rollovers(), V.thumbnailRatio()
            },
            tabs: function() {
                $(B).each(function() {
                    var t = $(this).find("li > a");
                    $(this).find(".tab-panes .active").addClass("fade-in"), t.each(function() {
                        $(this).on(i, function() {
                            var t = $(this).attr("href"),
                                i = $(this).closest(".tabs").find(t);
                            $(this).closest(".tab-nav").find(".active").removeClass("active"), $(this).parent().addClass("active"), $(this).closest(".tabs").find(".tab-panes .active").removeClass("active fade-in"), i.addClass("active");
                            var e = null;
                            return clearTimeout(e), e = setTimeout(function() {
                                i.addClass("fade-in")
                            }, 50), !1
                        }), $(this).parent().hasClass("active") && $(this).closest(".tabs").find($(this).attr("href")).addClass("active")
                    })
                }), $(P).each(function() {
                    $(this).on("click", function() {
                        var t = $(this).data("target-tab");
                        return $(B).find(t).trigger("click"), !1
                    })
                })
            },
            accordions: function() {
                $(A).each(function() {
                    var t = $(this).find("li > a");
                    t.each(function() {
                        $(this).closest(A).is("[data-toggle-icon]") && ($(this).find("span").length || $(this).parent().hasClass("active") ? !$(this).find("span").length && $(this).parent().hasClass("active") && $(this).prepend('<span class="' + H + '" />') : $(this).prepend('<span class="' + F + '" />')), $(this).on(i, function() {
                            var t = $(this),
                                i = t.attr("href"),
                                e = t.closest(A).find(i),
                                a = t.closest(A).find("li > div");
                            t.closest(A).find("li.active > div").each(function() {
                                var t = $(this).children().outerHeight();
                                $(this).addClass("no-transition").css({
                                    height: t + "px"
                                })
                            });
                            var n = null;
                            return clearTimeout(n), n = t.parent().hasClass("active") ? setTimeout(function() {
                                t.closest(A).is("[data-toggle-multiple]") ? t.siblings(e).removeClass("no-transition").css({
                                    height: 0
                                }) : t.closest(A).find("li.active > div").removeClass("no-transition").css({
                                    height: 0
                                }), t.parent().removeClass("active")
                            }, 50) : setTimeout(function() {
                                var i = t.siblings(e).find(M).outerHeight();
                                t.closest(A).is("[data-toggle-multiple]") || (a.removeClass("no-transition").css({
                                    height: 0
                                }), t.closest(A).find("li").removeClass("active")), t.parent().addClass("active"), t.siblings(e).removeClass("no-transition").css({
                                    height: i + "px"
                                })
                            }, 50), t.find("." + H).length ? t.find("." + H).removeClass(H).addClass(F) : t.find("." + F).length && (t.closest(A).is("[data-toggle-multiple]") || t.closest("ul").find("." + H).removeClass(H).addClass(F), t.find("." + F).removeClass(F).addClass(H)), !1
                        })
                    }), $(S).each(function() {
                        $(this).on("click", function() {
                            var t = $(this).data("target-accordion");
                            return $(A).find(t).trigger("click"), !1
                        })
                    }), $(window).on("resize", function() {
                        $(A).each(function() {
                            $(this).find("li.active > div").addClass("no-transition").css({
                                height: "auto"
                            })
                        })
                    })
                })
            },
            dismissable: function() {
                $(W).each(function() {
                    $(this).find(".close").length || $(this).prepend('<a href="" class="close icon-cancel" />'), $(this).find(".close").on(i, function(t) {
                        t.preventDefault(), Z ? $(this).parent().css({
                            transitionProperty: "opacity",
                            opacity: 0,
                            transitionDuration: j + "ms",
                            transitionTimingFunction: ei[L]
                        }).on(ii, function(t) {
                            return t.stopPropagation(), t.target !== $(this)[0] ? !1 : void $(this).remove()
                        }) : $(this).parent().animate({
                            opacity: 0
                        }, J, L, function() {
                            $(this).remove()
                        })
                    })
                })
            },
            dropdown: function() {
                $(R).each(function() {
                    $(this).children(".button, button").not().each(function() {
                        $(this).on(i, function(i) {
                            i.preventDefault(), $(R).children(".button, button").removeClass("active");
                            var e = $(this).parent().children(".dropdown-list");
                            return $(this).parent().hasClass("disabled") ? !1 : ($(".dropdown-list").not($(e)).removeClass("active"), $(e).hasClass("active") ? ($(e).removeClass("active"), $(this).removeClass("active")) : ($(e).addClass("active"), $(this).addClass("active")), void $(document).on("click.closeDropdown", function(i) {
                                $(i.target).closest(R).length || t()
                            }))
                        }), $(this).parent().children(".dropdown-list").find("li a").on(i, function(t) {
                            t.preventDefault(), $(".dropdown-list").removeClass("active"), $(this).removeClass("active")
                        }), ai || $(window).on("scroll", function() {
                            t()
                        }), $(Q).find(".navigation > ul > li > a").mouseenter(function() {
                            t()
                        });
                        var t = function() {
                            $(R).each(function() {
                                $(this).find(".button, button").removeClass("active"), $(this).find(".dropdown-list").removeClass("active")
                            }), $(document).off("click.closeDropdown")
                        }
                    })
                })
            },
            rollovers: function() {
                Z ? $(U).each(function() {
                    var t, i = $(this).data("hover-speed") ? $(this).data("hover-speed") : J,
                        e = $(this).data("hover-easing") ? $(this).data("hover-easing") : K,
                        a = $(this).data("hover-bkg-opacity") ? $(this).data("hover-bkg-opacity") : 1;
                    if ($(this).data("hover-bkg-color")) {
                        var n = $(this).data("hover-bkg-color");
                        n = n.replace("#", "");
                        var s = parseInt(n.substring(0, 2), 16),
                            o = parseInt(n.substring(2, 4), 16),
                            r = parseInt(n.substring(4, 6), 16);
                        t = "rgba( " + s + "," + o + "," + r + "," + a / 1 + " )"
                    } else t = $(this).find(G).css("background-color");
                    $(this).find(q).css({
                        transitionDuration: i + "ms",
                        transitionTimingFunction: ei[e]
                    }), $(this).find(G).css({
                        backgroundColor: t
                    })
                }) : $(U).find(".overlay-link").mouseenter(function() {
                    $(this).find(G).css({
                        opacity: 0
                    }).stop().animate({
                        opacity: 1
                    }, J, K)
                }).mouseleave(function() {
                    $(this).find(G).stop().animate({
                        opacity: 0
                    }, J, K)
                })
            },
            thumbnailRatio: function() {
                $(window).on("resize", function() {
                    $(U).each(function() {
                        if ($(this).find(".caption-over-outer").length) {
                            var t = $(this).find("img"),
                                i = t.attr("width"),
                                e = t.attr("height"),
                                a = $(this).find("img").width(),
                                n = e > i ? e / i : i / e,
                                s = e > i ? a * n : a / n;
                            $(this).find(".caption-over-outer").css({
                                opacity: 1
                            }), $(this).css({
                                height: s + "px"
                            })
                        }
                    })
                }).resize()
            }
        },
        X = document.body || document.documentElement,
        Y = X.style,
        Z = void 0 !== Y.transition || void 0 !== Y.WebkitTransition || void 0 !== Y.MozTransition || void 0 !== Y.MsTransition || void 0 !== Y.OTransition,
        _ = ["WebkitTransform", "MozTransform", "OTransform", "msTransform"];
    for (var ti in _) void 0 !== Y[_[ti]] && (t = "-" + _[ti].replace("Transform", "").toLowerCase());
    var ii = "webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend";
    Z && (document.getElementsByTagName("body")[0].className += " transition-support");
    var ei = {
        linear: "cubic-bezier(0, 0, 1, 1)",
        swing: "cubic-bezier(0.42, 0, 0.58, 1)",
        easeOutCubic: "cubic-bezier(.215,.61,.355,1)",
        easeInOutCubic: "cubic-bezier(.645,.045,.355,1)",
        easeInCirc: "cubic-bezier(.6,.04,.98,.335)",
        easeOutCirc: "cubic-bezier(.075,.82,.165,1)",
        easeInOutCirc: "cubic-bezier(.785,.135,.15,.86)",
        easeInExpo: "cubic-bezier(.95,.05,.795,.035)",
        easeOutExpo: "cubic-bezier(.19,1,.22,1)",
        easeInOutExpo: "cubic-bezier(1,0,0,1)",
        easeInQuad: "cubic-bezier(.55,.085,.68,.53)",
        easeOutQuad: "cubic-bezier(.25,.46,.45,.94)",
        easeInOutQuad: "cubic-bezier(.455,.03,.515,.955)",
        easeInQuart: "cubic-bezier(.895,.03,.685,.22)",
        easeOutQuart: "cubic-bezier(.165,.84,.44,1)",
        easeInOutQuart: "cubic-bezier(.77,0,.175,1)",
        easeInQuint: "cubic-bezier(.755,.05,.855,.06)",
        easeOutQuint: "cubic-bezier(.23,1,.32,1)",
        easeInOutQuint: "cubic-bezier(.86,0,.07,1)",
        easeInSine: "cubic-bezier(.47,0,.745,.715)",
        easeOutSine: "cubic-bezier(.39,.575,.565,1)",
        easeInOutSine: "cubic-bezier(.445,.05,.55,.95)",
        easeInBack: "cubic-bezier(.6,-.28,.735,.045)",
        easeOutBack: "cubic-bezier(.175, .885,.32,1.275)",
        easeInOutBack: "cubic-bezier(.68,-.55,.265,1.55)"
    };
    window.onpageshow = function(t) {
        t.persisted && $("body").addClass("page-fade-reset").removeClass("page-fade-out")
    };
    var ai = !1;
    (navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/BlackBerry/i) || navigator.userAgent.match(/Windows Phone/i)) && (ai = !0, document.getElementsByTagName("body")[0].className += " mobile");
    var ni = "WebkitAppearance" in document.documentElement.style;
    ni && (document.getElementsByTagName("body")[0].className += " webkit");
    var si = /constructor/i.test(window.HTMLElement);
    si && (document.getElementsByTagName("body")[0].className += " safari-browser");
    var oi = document.all && document.addEventListener || "-ms-scroll-limit" in document.documentElement.style && "-ms-ime-align" in document.documentElement.style;
    oi && (document.getElementsByTagName("body")[0].className += " ie-browser"), v.init(), C.init(), T.init(), I.init(), D.init(), V.init()
});
/**
 *	Avalanche Slider
 *	Version: 1.10
 */
! function(a, e, t, i) {
    "use strict";

    function s(e) {
        e.find(".tms-caption").each(function() {
            var e = a(this),
                t = (e.data("animate-in") + "").split(";");
            e.addClass(e.is("[data-no-scale]") ? "no-scale" : "scale"), a.each(t, function(a, t) {
                t = t.split(":");
                var i = t[0],
                    s = t[1];
                "opacity" === i && e.data("o", s), "scale" === i && e.data("s", s), "easing" === i && e.data("e", s), "transX" === i && e.data("tx", parseFloat(s)), "transY" === i && e.data("ty", parseFloat(s)), "transZ" === i && e.data("tz", parseFloat(s)), "rotateX" === i && e.data("rx", parseFloat(s)), "rotateY" === i && e.data("ry", parseFloat(s)), "rotateZ" === i && e.data("rz", parseFloat(s)), "duration" === i && e.data("du", parseFloat(s)), "delay" === i && e.data("de", parseFloat(s))
            }), e.data("w", parseFloat(e.css("width"))), e.data("h", parseFloat(e.css("height"))), e.data("fs", parseFloat(e.css("font-size"))), e.data("lh", parseFloat(e.css("line-height"))), e.data("pt", parseFloat(e.css("padding-top"))), e.data("pr", parseFloat(e.css("padding-right"))), e.data("pb", parseFloat(e.css("padding-bottom"))), e.data("pl", parseFloat(e.css("padding-left"))), e.data("mt", parseFloat(e.css("margin-top"))), e.data("mr", parseFloat(e.css("margin-right"))), e.data("mb", parseFloat(e.css("margin-bottom"))), e.data("ml", parseFloat(e.css("margin-left"))), e.data("bt", parseFloat(e.css("border-top-width"))), e.data("br", parseFloat(e.css("border-right-width"))), e.data("bb", parseFloat(e.css("border-bottom-width"))), e.data("bl", parseFloat(e.css("border-left-width")))
        })
    }

    function n(e, i, s) {
        var n = e.find(".tms-slide"),
            o = 0;
        n.each(function() {
            {
                var n = a(this),
                    d = n.find("img").length,
                    l = n.find("iframe, video").length;
                n.children(".tms-caption").length
            }
            w(n, i);
            var c = a('<div class="tm-loader"><div id="circle" /></div>');
            if (d > 0 && (i.lazyLoad ? c.appendTo(n) : e.find(c).length || c.appendTo(e)), l) {
                E && n.is("[data-video-bkg]") && n.children("video").css({
                    display: "none"
                });
                var u = n.find("iframe, video");
                T(u, i), g(n, i), m(e, i)
            }
            d ? n.find("img").each(function(e, l) {
                l = a(this).data("src");
                var c = l.substr(l.lastIndexOf("."));
                if ((t.isRetinaDevice() && i.retinaSupport || t.isRetinaDevice() && a(this).is("[data-retina]")) && (!E && !i.retinaSupportMobile || E && i.retinaSupportMobile) && (l.match(/\.(svg)/i) || (l = a(this).data("src").replace(c, i.retinaSuffix + c))), n.data("overlay-bkg-color") && !n.find(".tms-overlay").length) var u = n.data("overlay-bkg-color").replace("#", ""),
                    h = n.data("overlay-bkg-opacity") ? n.data("overlay-bkg-opacity") : .5,
                    p = parseInt(u.substring(0, 2), 16),
                    f = parseInt(u.substring(2, 4), 16),
                    v = parseInt(u.substring(4, 6), 16),
                    m = "rgba( " + p + "," + f + "," + v + "," + h / 1 + " )",
                    g = a('<div class="tms-overlay" />').css({
                        backgroundColor: m,
                        opacity: 0
                    }).appendTo(n);
                a(this).css({
                    opacity: 0
                }).attr("src", l).on("load", function() {
                    if (!this.complete)
                        return;
                    a(this).data("loaded", !0).css({
                        opacity: 1
                    }), n.find(g).css({
                        opacity: 1
                    }), e++, e === d && (o++, r(n, o, i, s))
                }).one("error", function() {
                    console.log("Error src:" + l)
                })
            }) : (o++, m(e, i), r(n, o, i, s))
        })
    }

    function r(a, e, t, i) {
        var s = a.closest(".tm-slider-container"),
            n = s.find(".tms-slides"),
            r = s.find("li.active"),
            o = null,
            d = null;
        if (a.find(".no-transition").css({
                visibility: "visible"
            }), s.data("setup", !0), s.data("first-load", !1), 0 === s.height() && !s.data("height") && a.hasClass("active")) {
            r.children("img").css({
                maxHeight: "none"
            });
            var l = r.children("img").height();
            s.data("refH", l), s.css({
                height: l + "px"
            }), r.children("img").css({
                maxHeight: "100%"
            })
        }
        if (g(a, t), m(s, t), t.carousel && !t.lazyLoad && (n.children().css({
                opacity: 1
            }), n.css({
                opacity: 0
            })), s.find("iframe, video").css({
                opacity: 1
            }), e === n.children().length && t.onLoadEnd && t.onLoadEnd(), t.lazyLoad || e !== n.children().length ? t.lazyLoad && 1 === e && (s.data("loaded", !0), t.autoAdvance && i.initSlideshow()) : (s.data("loaded", !0), t.autoAdvance && i.initSlideshow()), t.lazyLoad) {
            if (a.find(".tm-loader").length && a.find(".tm-loader").remove(), (a.is(r) || t.carouselVisible > 1) && a.find(".tms-caption").show(), !a.hasClass("active")) return !1;
            A ? (r.css({
                transition: "none",
                opacity: 0
            }), clearTimeout(d), d = setTimeout(function() {
                r.css({
                    transitionProperty: "opacity",
                    transitionDuration: "700ms",
                    opacity: 1
                })
            }, 50)) : a.animate({
                opacity: 1
            }), clearTimeout(o), o = setTimeout(function() {
                p(r, t)
            }, 300)
        } else e === n.children().length && (s.find(".tm-loader").length && s.find(".tm-loader").remove(), r.find(".tms-caption").show(), t.carouselVisible > 1 && s.find(".tms-caption").show(), A ? t.carousel ? n.css({
            transitionProperty: "opacity",
            transitionDuration: "700ms",
            opacity: 1
        }) : r.css({
            transitionProperty: "opacity",
            transitionDuration: "700ms",
            opacity: 1
        }) : t.carousel ? n.animate({
            opacity: 1
        }) : r.animate({
            opacity: 1
        }), clearTimeout(o), o = setTimeout(function() {
            p(r, t)
        }, 300), s.find(".tms-arrow-nav, .tms-pagination").css({
            display: "block"
        }))
    }
    var o = function(r, o) {
            var c = a.extend({}, a.fn.avalancheSlider.tmsOpts, o),
                p = a(r),
                b = this,
                y = c.fulscreen ? a(t).width() : c.fullwidth ? c.scaleUnder : parseFloat(p.data("width") ? p.data("width") : p.css("width")),
                x = c.fulscreen ? a(t).height() : parseFloat(p.data("height") ? p.data("height") : p.css("height")),
                S = p.find(".tms-slides"),
                F = S.children("li:first-child").addClass("active"),
                T = [];
            if (S.children(".tms-slide").each(function(e) {
                    e++, a(this).attr("id", "tms-slide-" + e), T.push(a(this).attr("id")), c.carousel || a(this).not(".active").css(A ? {
                        transition: "none",
                        transform: "translate3d( 100%, 0, 0)"
                    } : {
                        left: "100%"
                    }), (c.forceFit || a(this).is("[data-force-fit]")) && a(this).addClass("tms-forcefit")
                }), c.lazyLoad || F.css({
                    opacity: 0
                }), c.scaleUnder = p.data("scale-under") ? p.data("scale-under") : c.scaleUnder, c.scaleMinHeight = p.data("scale-min-height") ? p.data("scale-min-height") : c.scaleMinHeight, c.animation = p.data("animation") ? p.data("animation") : c.animation, c.easing = p.data("easing") ? p.data("easing") : c.easing, c.speed = p.data("speed") ? p.data("speed") : c.speed, c.carousel = p.data("carousel") ? p.data("carousel") : c.carousel, c.carouselVisible = p.data("carousel-visible-slides") ? p.data("carousel-visible-slides") : c.carouselVisible, c.showProgressBar = p.is('[data-progress-bar="false"]') ? !1 : c.showProgressBar, c.autoAdvance = p.is("[data-auto-advance]") ? !0 : c.autoAdvance, c.interval = p.data("auto-advance-interval") ? p.data("auto-advance-interval") : c.interval, c.pauseOnHover = p.is("[data-pause-on-hover=false]") ? !1 : c.pauseOnHover, c.navArrows = p.is("[data-nav-arrows=false]") ? !1 : c.navArrows, c.navPagination = p.is("[data-nav-pagination=false]") ? !1 : c.navPagination, c.navShowOnHover = p.is("[data-nav-show-on-hover=false]") ? !1 : c.navShowOnHover, F.is("[data-nav-dark]") && (p.addClass("tms-nav-dark"), p.is("[data-featured-slider]") && a("header").addClass("nav-dark")), c.fullscreen && (p.css({
                    top: 0,
                    left: 0
                }).addClass("tms-fullscreen"), c.carouselVisible = 1, c.fsUseHeightOf = c.fsUseHeightOf || p.data("fs-use-height") ? c.fsUseHeightOf && !p.data("fs-use-height") ? c.fsUseHeightOf : p.data("fs-use-height") : "", c.fsUseHeightOf = c.fsUseHeightOf ? "parent" === c.fsUseHeightOf ? p.parent() : p.closest("." + c.fsUseHeightOf) : ""), c.parallax = p.is("[data-parallax]") ? !0 : c.parallax, c.parallaxSpeed = p.data("parallax-speed") ? p.data("parallax-speed") : c.parallaxSpeed, c.parallaxScaleOut = p.is("[data-parallax-scale-out]") ? !0 : c.parallaxScaleOut, c.parallaxFadeOut = p.is("[data-parallax-fade-out]") ? !0 : c.parallaxFadeOut, c.captionScaling || p.addClass("tms-caption-no-scaling"), !c.carousel && c.carouselVisible && (c.carouselVisible = 1), c.carouselVisible > 1 && (c.animation = "slide"), c.carousel && p.addClass("tms-carousel"), c.carouselScaleHeight && p.addClass("tms-scalable-height"), E && (c.autoPlay = !1, c.useVideoAPI = !1), c.navShowOnHover && p.addClass("show-on-hover"), c.navArrows && S.children().length > 1) {
                var z = a('<a href="#" />').attr("id", "tms-prev").addClass("tms-arrow-nav").appendTo(p),
                    C = a('<a href="#" />').attr("id", "tms-next").addClass("tms-arrow-nav").appendTo(p);
                z.each(function() {
                    a(this).on("click", function(a) {
                        a.preventDefault(), c.autoAdvance && p.data("loaded") && b.resetSlideshow(), b.prevSlide()
                    })
                }), C.each(function() {
                    a(this).on("click", function(a) {
                        a.preventDefault(), c.autoAdvance && p.data("loaded") && b.resetSlideshow(), b.nextSlide()
                    })
                }), c.lazyLoad && p.find(".tms-arrow-nav").css({
                    display: "block"
                })
            }
            if (c.navPagination && S.children().length > 1) {
                for (var H = a("<div>").addClass("tms-pagination").appendTo(p), k = 1; k < S.children().length + 1; k++) p.find(H).append('<a href="#" id="tms-pagination-' + k + '" data-index="' + k + '" class="tms-bullet-nav" />');
                var P = p.find("bullets" === c.paginationType ? ".tms-bullet-nav" : ".tms-thumb-nav");
                P.each(function() {
                    a(this).on("click", function() {
                        return F = p.find("li.active"), a(this).hasClass("active") ? !1 : (c.autoAdvance && p.data("loaded") && b.resetSlideshow(), parseFloat(a(this).data("index")) > parseFloat(H.find(".active").data("index")) ? b.slideTo(a(this).data("index"), "next") : b.slideTo(a(this).data("index"), "prev"), !1)
                    })
                }), H.find(".tms-bullet-nav:first-child").addClass("active"), c.lazyLoad && H.css({
                    display: "block"
                })
            }
            if (c.navKeyboard && S.children().length > 1) {
                var V = [];
                a(e).on("keydown", function(a) {
                    return V[a.keyCode] = !0, V[37] && V[39] ? !1 : (V[37] ? (c.autoAdvance && p.data("loaded") && b.resetSlideshow(), c.lazyLoad ? b.prevSlide() : p.data("loaded") && b.prevSlide()) : V[39] && (c.autoAdvance && p.data("loaded") && b.resetSlideshow(), c.lazyLoad ? b.nextSlide() : p.data("loaded") && b.nextSlide()), i)
                }).on("keyup", function(a) {
                    V[a.keyCode] = !1
                })
            }
            p.swipeIt({
                draggable: !1,
                onSwipeMove: function() {},
                onSwipeEnd: function(a) {
                    "left" === a ? b.prevSlide() : b.nextSlide()
                }
            }), a(t).on("resize", function() {
                p.data("first-load") && (y = c.fulscreen ? a(t).width() : c.fullwidth ? c.scaleUnder : parseFloat(p.data("width") ? p.data("width") : p.css("width")), x = c.fulscreen ? a(t).height() : parseFloat(p.data("height") ? p.data("height") : p.css("height")), p.data("refW", y).data("refH", x).data("carousel-height", x));
                var e = p.find("li.active, li.target");
                c.carousel && c.carouselVisible > 1 ? S.children(".tms-slide").each(function() {
                    g(a(this), c)
                }) : g(e, c), m(p, c), p.addClass("resizing"), O(function() {
                    p.removeClass("resizing")
                }, 300, "resize")
            }), p.parent().hasClass("tm-slider-parallax-container") && c.parallax ? (a(t).on("scroll", function() {
                d(p, c)
            }), l(p, c)) : !p.parent().hasClass("tm-slider-parallax-container") && c.parallax && console.log("Add the class tm-slider-parallax-container to slider parent"), p.data("setup", !1).data("loaded", !1).data("first-load", !0).data("transitioning", !1).data("refW", y).data("refH", x).data("carousel-height", x), s(p), m(p, c), c.onSetup && c.onSetup();
            var I, B, D, L, U, W, R, Q = null,
                q = null;
            b.initSlideshow = function() {
                return I || S.children().length < 2 ? !1 : (c.autoAdvance = !0, !E && c.pauseOnHover && (S.on("mouseleave ", b.resumeSlideshow), S.on("mouseenter ", b.pauseSlideshow)), c.showProgressBar && (R = a("<div>").addClass("tms-progress-bar").appendTo(p)), b.startSlideshow(), N(c.interval), B = (new Date).getTime(), U = c.interval, c.onSlideshowStart && c.onSlideshowStart(), i)
            }, b.startSlideshow = function(a) {
                a = a ? L : c.interval, I = setInterval(function() {
                    a !== c.interval && (clearInterval(I), a = c.interval, U = c.interval, b.startSlideshow()), B = (new Date).getTime(), i !== R && R.css({
                        transition: "none",
                        width: "0px"
                    }), N(c.interval), b.nextSlide()
                }, a)
            }, b.pauseSlideshow = function() {
                return W || !I ? !1 : (clearInterval(I), D = (new Date).getTime(), L = 50 > U - (D - B) ? 50 : U - (D - B), U = 0 === U ? c.interval : L, i !== R && R.stop().css({
                    width: R.width() + "px"
                }), W = !0, c.onSlideshowPause && c.onSlideshowPause(), i)
            }, b.resumeSlideshow = function() {
                return W ? (clearInterval(I), p.data("ssPaused", !1), B = (new Date).getTime(), N(L), b.startSlideshow(L), W = !1, i) : !1
            }, b.resetSlideshow = function() {
                return I ? (clearInterval(I), i !== R && R.css({
                    transition: "none",
                    width: "0px"
                }), N(c.interval), B = (new Date).getTime(), L = c.interval, U = c.interval, b.startSlideshow(c.interval), i) : !1
            }, b.endSlideshow = function() {
                return I ? (clearInterval(I), I = "", W = !1, !E && c.pauseOnHover && (S.off("mouseleave ", b.resumeSlideshow), S.off("mouseenter ", b.pauseSlideshow)), i !== R && R.remove(), c.onSlideshowEnd && c.onSlideshowEnd(), i) : !1
            };
            var N = function(a) {
                return i === R ? !1 : (A ? (clearTimeout(Q), Q = setTimeout(function() {
                    R.css({
                        transitionProperty: "width",
                        width: "100%",
                        transitionDuration: a + "ms",
                        transitionTimingFunction: "ease"
                    })
                }, 50)) : R.stop(!0, !0).animate({
                    width: "100%"
                }, a), i)
            };
            b.nextSlide = function() {
                if (p.data("transitioning")) return !1;
                var e;
                F = p.find("li.active");
                var t = T[a.inArray(F.attr("id"), T) + 1];
                if (e = a.inArray(t, T) + 1 === 0 ? 1 : a.inArray(t, T) + 1, c.carousel && c.carouselVisible > 1) {
                    var i = v(p, c);
                    1 !== i && (e = e === S.children().length - (i - 2) ? 1 : a.inArray(t, T) + 1)
                }
                this.slideTo(e, "next")
            }, b.prevSlide = function() {
                if (p.data("transitioning")) return !1;
                var e;
                F = p.find("li.active");
                var t = T[a.inArray(F.attr("id"), T) - 1];
                if (e = a.inArray(t, T) + 1 === 0 ? S.children().length : a.inArray(t, T) + 1, c.carousel && c.carouselVisible > 1) {
                    var i = v(p, c);
                    e = e === S.children().length ? S.children().length - (i - 1) : a.inArray(t, T) + 1
                }
                this.slideTo(e, "prev")
            }, b.slideTo = function(e, t) {
                if (p.data("first-load", !1), t || (F = p.find("li.active")), p.data("transitioning") || e === a.inArray(F.attr("id"), T) + 1) return !1;
                f(p, e);
                var i = p.width(),
                    s = "slide" === c.animation ? i : 0;
                s *= c.carousel ? e - 1 : 1;
                var n = p.find("#tms-slide-" + e);
                n.addClass("target").css({
                    zIndex: 2,
                    opacity: 0 === s ? 0 : 1
                }), F.css({
                    zIndex: 1
                }), p.removeClass("tms-nav-dark"), a("header").removeClass("nav-dark"), n.is("[data-nav-dark]") && (p.addClass("tms-nav-dark"), p.is("[data-featured-slider]") && a("header").addClass("nav-dark")), w(n, c), (n.children("img").data("loaded") || !n.children("img").length) && g(n, c), m(p, c, n), t || (t = "next"), t = c.carousel ? 1 : "next" === t ? 1 : -1;
                var r = v(p, c);
                A ? c.carousel ? u(S, 1, -(s / r) * t, 0, 0, 0, 0, 0, 1, c.speed, 0, M[c.easing], c) : (n.css({
                    transition: "none",
                    transform: "translate3d(" + s * t + "px, 0, 0)"
                }), clearTimeout(q), q = setTimeout(function() {
                    u(F, 1, -s * t, 0, 0, 0, 0, 0, 1, c.speed, 0, M[c.easing], c), u(n, 1, 0, 0, 0, 0, 0, 0, 1, c.speed, 0, M[c.easing], c)
                }, 50)) : c.carousel ? (p.data("transitioning", !0), S.animate({
                    opacity: 1,
                    left: -(s / r) * t + "px"
                }, c.speed, c.easingFallback, function() {
                    h(p, c)
                })) : (p.data("transitioning", !0), n.css({
                    left: i * t + "px",
                    visibility: "visible"
                }).animate({
                    opacity: 1,
                    left: "0px"
                }, c.speed, c.easingFallback, function() {
                    h(p, c)
                }), F.animate({
                    left: -i * t + "px"
                }, c.speed, c.easingFallback))
            }, n(p, c, b)
        },
        d = function(e, i) {
            var s = a(t);
            s.data("animating") || (s.data("animating", !0), t.requestAnimationFrame(function() {
                l(e, i), s.data("animating", !1)
            }))
        },
        l = function(e, i) {
            var s = a(t),
                n = s.scrollTop(),
                r = (s.height(), e.parent().height() + e.parent().offset().top - n),
                o = n * i.parallaxSpeed,
                d = i.parallaxScaleOut ? 2 - r / e.parent().height() : 1;
            d = 1 > d ? 1 : d;
            var l = i.parallaxFadeOut ? r / e.parent().height() : 1;
            !E && A && c(e.parent()) && e.css({
                transform: "translate3d( 0, " + -o + "px, 0) scale3d( " + d + "," + d + ", 1 )",
                opacity: l.toFixed(2)
            })
        },
        c = function(e) {
            var i = a(t).scrollTop(),
                s = i + a(t).height(),
                n = e.offset().top,
                r = n + e.outerHeight();
            return s >= n && r >= i
        },
        u = function(e, t, i, s, n, r, o, d, l, c, u, p, f) {
            var v = e.closest(".tm-slider-container");
            (e.hasClass("active") || e.hasClass("target") || e.hasClass("tms-slides")) && (v.data("transitioning", !0), f.onSlideBefore && f.onSlideBefore());
            var m = {};
            m.transform = "translate3d(" + i + "px, " + s + "px, " + n + "px)rotate3d( 1, 0, 0, " + r + "deg)rotate3d( 0, 1, 0, " + o + "deg)rotate3d( 0, 0, 1, " + d + "deg)scale3d(" + l + ", " + l + ", " + l + ")", m.transitionProperty = V + ", opacity", m.transitionDuration = c + "ms", m.transitionDelay = u + "ms", m.transitionTimingFunction = p, m.visibility = "visible", m.opacity = t, e.css(m).on(I, function(e) {
                e.stopPropagation(), a(this).off(I), (a(this).hasClass("target") || a(this).hasClass("tms-slides")) && h(v, f), a(this).hasClass("tms-caption") && a(this).css({
                    transition: ""
                })
            })
        },
        h = function(a, e) {
            a.data("transitioning", !1), e.onSlideAfter && e.onSlideAfter();
            var t = a.find("li.active"),
                s = a.find("li.target");
            return y(t, "pause", e), 1 === e.carouselVisible && t.find(".tms-caption").not(".no-transition").css({
                display: "none",
                visibility: "hidden"
            }), e.carousel || t.css({
                visibility: "hidden"
            }), t.removeClass("active"), s.removeClass("target").addClass("active"), t = s, y(t, "play", e), e.carouselVisible > 1 ? !1 : (p(t, e), i)
        },
        p = function(e, t) {
            e.find(".tms-caption").not(".no-transition").show().each(function() {
                var e = a(this),
                    i = a(this).data("du") ? e.data("du") : t.speed,
                    s = a(this).data("de") ? e.data("de") : 0,
                    n = a(this).data("e") ? M[e.data("e")] : M[t.easing],
                    r = null;
                A ? (clearTimeout(r), r = setTimeout(function() {
                    u(e, 1, 0, 0, 0, 0, 0, 0, 1, i, s, n)
                }, 500)) : (n = t.easingFallback, e.delay(s).css({
                    visibility: "visible"
                }).animate({
                    opacity: 1
                }, i, n))
            })
        },
        f = function(a, e) {
            var t = a.find(".tms-pagination");
            t.find(".active").removeClass("active"), t.find("#tms-pagination-" + e).addClass("active")
        },
        v = function(e, i) {
            var s;
            return s = a(t).width() < 768 || a(t).width() > 959 || i.carouselVisible <= 3 ? a(t).width() < 480 || a(t).width() > 767 || i.carouselVisible <= 2 ? a(t).width() > 479 ? i.carouselVisible : 1 : 2 : 3
        },
        m = function(e, t) {
            if (!t.carousel) return !1;
            var i, s, n = e.find(".tms-slides"),
                r = e.find("li.active"),
                o = r.index(),
                d = e.find(".tms-pagination"),
                l = n.children().length,
                c = v(e, t),
                u = e.width() / c,
                h = 0,
                p = null;
            n.css({
                overflow: "visible"
            }).children().each(function(e) {
                t.carouselVisible = 0 === t.carouselVisible ? 1 : t.carouselVisible, 1 === t.carouselVisible ? (a(this).css(A ? {
                    width: u + "px",
                    opacity: 1,
                    visibility: "visible",
                    transform: "translate3d(" + u * e + "px, 0, 0)"
                } : {
                    width: u + "px",
                    opacity: 1,
                    visibility: "visible",
                    left: u * e + "px"
                }), e++) : a(this).css({
                    width: u + "px",
                    opacity: 1,
                    visibility: "visible",
                    "float": "left",
                    position: "relative"
                }), h = h > a(this).outerHeight() ? h : a(this).outerHeight()
            }), 2 === c && o > n.children().length - 2 ? (i = n.children().length - 1, s = !0) : 3 === c && o > n.children().length - 3 ? (i = n.children().length - 2, s = !0) : o > n.children().length - c ? (i = n.children().length - c + 1, s = !0) : (i = o, s = !1), d.children().hide().slice(0, n.children().length - c + 1).show(), s && (r.removeClass("active"), n.find("li:nth-child(" + i + ")").addClass("active"), f(e, i)), A ? (e.data("transitioning") || n.css({
                width: u * l + "px",
                transition: "none",
                transform: "translate3d(" + -(u * i) + "px, 0, 0)"
            }), clearTimeout(p), p = setTimeout(function() {
                n.css({
                    transitionProperty: "opacity, " + V,
                    transitionDuration: t.speed + "ms"
                })
            }, 50)) : n.css({
                width: u * l + "px",
                left: -(u * i) + "px"
            })
        },
        g = function(e, i) {
            var s = e.closest(".tm-slider-container, .featured-media"),
                n = s.parent().width(),
                r = i.fsUseHeightOf ? i.fsUseHeightOf.height() : a(t).height(),
                o = s.data("refW"),
                d = s.data("refH"),
                l = i.fullscreen ? a(t).width() / r : o / d,
                c = s.data("external-padding") ? parseFloat(s.data("external-padding")) : i.externalPadding,
                u = i.fullscreen || i.fullwidth ? a(t).width() - c : n,
                h = i.fullscreen ? r - c : i.carousel && i.carouselVisible > 1 && !i.carouselScaleHeight ? d : i.fullwidth && n / l > d ? d - c : n / l - c,
                p = h > i.scaleMinHeight ? !1 : !0,
                f = p ? u / i.scaleMinHeight : u / h,
                v = i.carouselScaleHeight && 1 === i.carouselVisible ? !0 : !1,
                m = i.forceFit || e.is("[data-force-fit]");
            if (s.data("newSW", u), s.data("newSH", h), i.carousel ? s.css({
                    width: Math.round(u) + "px",
                    height: s.data("first-load") && v ? s.find("li:first-child").find(".tms-content-scalable, img").outerHeight() + "px" : !s.data("first-load") && v ? e.find(".tms-content-scalable, img").outerHeight() : "auto"
                }) : (s.css({
                    width: Math.round(u) + "px",
                    height: h > i.scaleMinHeight || "auto" === i.scaleMinHeight ? Math.round(h) + "px" : i.scaleMinHeight + "px"
                }), i.parallax && s.parent().css({
                    height: s.height() + "px"
                }), h = h > i.scaleMinHeight || "auto" === i.scaleMinHeight ? h : i.scaleMinHeight, s.data("newSH", h)), !s.data("setup") || i.carousel && i.carouselVisible > 1) return !1;
            var g = e.is("[data-image]") ? "image" : "video",
                w = e.is("[data-video-bkg]") ? !0 : !1,
                y = e.is("[data-video-ratio]") ? parseFloat(e.data("video-ratio")) : 1.778;
            e.find("img, iframe, video, .mejs-container").not(".tms-caption img, .tms-caption iframe, .tms-caption video").each(function() {
                var t, s, n;
                if ("image" === g ? (t = a(this).width(), s = a(this).height()) : "video" === g && ((!i.respectRatio && !w || i.fullscreen && !w) && e.addClass("tms-video-no-ratio"), w ? (t = i.fullwidth ? h * y : u, s = i.fullwidth ? h : u / y) : (t = a(this).attr("width") && u > a(this).attr("width") ? a(this).attr("width") : u, s = t / y)), n = t / s, "image" === g && i.fullscreen || m || "video" === g && w) {
                    if (a(this).is("img") && !a(this).data("loaded")) return !1;
                    console.log("image: " + this.src + " loaded: " + this.complete + " width: " + this.width + " height: " + this.height
                        + " naturalWidth: " + this.naturalWidth + " naturalHeight: " + this.naturalHeight);
                    console.log("img: width: " + u + " ratio: " + t + "/" + s + " = " + n);
                    a(this).css(f > n ? {
                        width: i.fullwidth && !m ? "auto" : u + "px",
                        height: Math.round(u / n) + "px",
                        top: Math.round(-((u / n - h) / 2)) + "px",
                        left: 0
                    } : {
                        width: !i.fullwidth || m || w ? Math.round(h * n) + "px" : "auto",
                        height: h + "px",
                        top: 0,
                        left: Math.round(-((h * n - u) / 2)) + "px"
                    })
                } else "video" === g && a(this).css({
                    width: Math.floor(t) + "px",
                    height: Math.floor(s) + "px",
                    top: Math.floor((h - s) / 2) + "px",
                    left: Math.floor((u - t) / 2) + "px"
                })
            }), b(e, i)
        },
        b = function(e, t) {
            var s = e.closest(".tm-slider-container"),
                n = s.data("newSW"),
                r = s.data("newSH"),
                o = s.data("refW"),
                d = s.data("refH");
            return !t.captionScaling || t.carouselVisible > 1 ? !1 : (e.find(".tms-caption").each(function() {
                if (!a(this).is("[data-no-scale]")) {
                    var e = a(this),
                        i = e.data("x"),
                        s = e.data("y"),
                        l = e.data("w"),
                        c = e.data("pt"),
                        u = e.data("pr"),
                        h = e.data("pb"),
                        p = e.data("pl"),
                        f = e.data("mt"),
                        v = e.data("mr"),
                        m = e.data("mb"),
                        g = e.data("ml"),
                        b = e.data("bt"),
                        w = e.data("br"),
                        y = e.data("bb"),
                        x = e.data("bl"),
                        S = e.data("fs"),
                        F = 0 === e.data("lh") ? S : e.data("lh"),
                        T = e.is("[data-offsetx]") ? parseFloat(e.data("offsetx")) : 0,
                        O = e.is("[data-offsety]") ? parseFloat(e.data("offsety")) : 0,
                        z = 0 > n * (T / o) ? n * (T / o) : n * (T / o) > T ? T : n * (T / o),
                        C = 0 > r * (O / d) ? n * (O / o) : n * (O / o) > O ? O : r * (O / d);
                    t.fullwidth && O > C && 0 > C && (C = O);
                    var H;
                    e.find("img, iframe, video").length && (H = n * (l / o) > l ? l : n * (l / o) > n ? n : n * (l / o)), e.css(e.find("img").length || e.find("iframe, video").length ? {
                        width: H + "px",
                        height: e.children("iframe, video").length ? H / 1.778 + "px" : "auto"
                    } : {
                        fontSize: n * (S / o) > S ? S : n * (S / o) + "px",
                        lineHeight: n * (F / o) > F ? F + "px" : n * (F / o) + "px",
                        paddingTop: n * (c / o) > c ? c : n * (c / o) + "px",
                        paddingRight: n * (u / o) > u ? u : n * (u / o) + "px",
                        paddingBottom: n * (h / o) > h ? h : n * (h / o) + "px",
                        paddingLeft: n * (p / o) > p ? p : n * (p / o) + "px",
                        marginTop: n * (f / o) > f ? f : n * (f / o) + "px",
                        marginRight: n * (v / o) > v ? v : n * (v / o) + "px",
                        marginBottom: n * (m / o) > m ? m : n * (m / o) + "px",
                        marginLeft: n * (g / o) > g ? g : n * (g / o) + "px",
                        borderTopWidth: n * (b / o) > b ? b : Math.ceil(n * (b / o)) + "px",
                        borderRightWidth: n * (w / o) > w ? w : Math.ceil(n * (w / o)) + "px",
                        borderBottomWidth: n * (y / o) > y ? y : Math.ceil(n * (y / o)) + "px",
                        borderLeftWidth: n * (x / o) > x ? x : Math.ceil(n * (x / o)) + "px",
                        whiteSpace: "nowrap"
                    }), e.css({
                        top: "top" === s ? 0 + C : "bottom" === s ? r - e.outerHeight() - C : (r - e.outerHeight()) / 2 + C + "px",
                        left: "left" === i ? 0 + z : "right" === i ? n - e.outerWidth() - z : (n - e.outerWidth()) / 2 + z + "px"
                    })
                }
            }), i)
        },
        w = function(e, t) {
            return t.carouselVisible > 1 ? !1 : (e.find(".tms-caption").not(".no-transition").each(function() {
                var e = a(this),
                    t = e.data("o") ? parseFloat(e.data("o")) : 0,
                    i = e.data("tx") ? parseFloat(e.data("tx")) : 0,
                    s = e.data("ty") ? parseFloat(e.data("ty")) : 0,
                    n = e.data("tz") ? parseFloat(e.data("tz")) : 0,
                    r = e.data("rx") ? parseFloat(e.data("rx")) : 0,
                    o = e.data("ry") ? parseFloat(e.data("ry")) : 0,
                    d = e.data("rz") ? parseFloat(e.data("rz")) : 0,
                    l = e.data("s") ? parseFloat(e.data("s")) : 1;
                e.css(A ? {
                    transition: "none",
                    transform: "translate3d(" + i + "px, " + s + "px, " + n + "px)rotate3d( 1, 0, 0, " + r + "deg)rotate3d( 0, 1, 0, " + o + "deg)rotate3d( 0, 0, 1, " + d + "deg)scale3d(" + l + ", " + l + ", " + l + ")",
                    opacity: t
                } : {
                    opacity: 0
                })
            }), i)
        },
        y = function(e, t, s) {
            if (!s.useVideoAPI || s.carouselVisible > 1) return !1;
            var n;
            try {
                if (e.find("iframe").length) {
                    n = "#" + e.find("iframe").attr("id");
                    var r = a(n).attr("src");
                    i !== r && r.indexOf("vimeo") > -1 ? (n = $f(a(n)[0]), n.api("play" === t && s.autoPlay ? "play" : "pause")) : i !== r && r.indexOf("youtu") > -1 && (n = n.replace("#", ""), "play" === t && s.autoPlay ? x[n].playVideo() : x[n].stopVideo())
                } else e.find("video").length && (n = "#" + e.find("video").attr("id"), "play" === t && s.autoPlay ? a(n)[0].play() : a(n)[0].pause())
            } catch (o) {}
        },
        x = {},
        S = !1,
        F = !1,
        T = function(s, n) {
            if (!n.useVideoAPI || n.carouselVisible > 1) return !1;
            var r = s.attr("src"),
                o = new Date;
            if (s.attr("id", "video-" + o.getTime()), i !== r && r.indexOf("vimeo") > -1) {
                if (s.attr("src", s.attr("src") + "&player_id=" + s.attr("id")).addClass("vimeo"), !S) {
                    S = !0;
                    var d = e.createElement("script");
                    d.src = "http://a.vimeocdn.com/js/froogaloop2.min.js";
                    var l = e.getElementsByTagName("script")[0];
                    l.parentNode.insertBefore(d, l)
                }
                s.on("load", function() {
                    var e = "#" + a(this).attr("id"),
                        t = $f(a(e)[0]),
                        i = a(this).closest("li").is(":first-child") ? !0 : !1;
                    t.addEvent("ready", function() {
                        i && n.autoPlay && t.api("play"), t.addEvent("finish", function() {
                            n.replayOnEnd && t.api("play")
                        })
                    })
                })
            } else if (i !== r && r.indexOf("youtu") > -1) {
                if (s.addClass("youtube"), !F) {
                    F = !0;
                    var c = e.createElement("script");
                    c.src = "http://www.youtube.com/player_api";
                    var u = e.getElementsByTagName("script")[0];
                    u.parentNode.insertBefore(c, u)
                }
                var h = function() {
                    a(".youtube").each(function() {
                        var e = a(this).attr("id"),
                            t = a(this).closest("li").is(":first-child") ? !0 : !1;
                        x[e] = new YT.Player(e, {
                            events: {
                                onStateChange: function(a) {
                                    a.data === YT.PlayerState.ENDED && n.replayOnEnd && x[e].playVideo()
                                },
                                onReady: function() {
                                    t && n.autoPlay && x[e].playVideo()
                                }
                            }
                        })
                    })
                };
                t.onYouTubePlayerAPIReady = function() {
                    h()
                }
            } else if (s.is("video")) {
                var p = e.getElementById(s.attr("id")),
                    f = s.closest("li").is(":first-child") ? !0 : !1;
                f && n.autoPlay && (p.load(), p.autoplay = !0), s.parent().is("[data-video-bkg]") && (p.muted = n.muteBkgVideo), n.replayOnEnd && (p.loop = !0)
            }
        },
        O = function() {
            var a = {};
            return function(e, t, i) {
                i || (i = "id"), a[i] && clearTimeout(a[i]), a[i] = setTimeout(e, t)
            }
        }();
    t.isRetinaDevice = function() {
        var a = "(-webkit-min-device-pixel-ratio: 1.5), (min--moz-device-pixel-ratio: 1.5), (-o-min-device-pixel-ratio: 3/2), (min-resolution: 1.5dppx)";
        return this.devicePixelRatio > 1 || this.matchMedia && this.matchMedia(a).matches ? !0 : !1
    };
    var z, C = e.body || e.documentElement,
        H = C.style,
        A = H.transition !== i || H.WebkitTransition !== i || H.MozTransition !== i || H.MsTransition !== i || H.OTransition !== i,
        k = ["WebkitTransform", "MozTransform", "OTransform", "msTransform"];
    for (var P in k) H[k[P]] !== i && (z = "-" + k[P].replace("Transform", "").toLowerCase());
    var V = z + "-transform",
        I = "webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend",
        M = {
            linear: "cubic-bezier(0, 0, 1, 1)",
            swing: "cubic-bezier(0.42, 0, 0.58, 1)",
            easeOutCubic: "cubic-bezier(.215,.61,.355,1)",
            easeInOutCubic: "cubic-bezier(.645,.045,.355,1)",
            easeInCirc: "cubic-bezier(.6,.04,.98,.335)",
            easeOutCirc: "cubic-bezier(.075,.82,.165,1)",
            easeInOutCirc: "cubic-bezier(.785,.135,.15,.86)",
            easeInExpo: "cubic-bezier(.95,.05,.795,.035)",
            easeOutExpo: "cubic-bezier(.19,1,.22,1)",
            easeInOutExpo: "cubic-bezier(1,0,0,1)",
            easeInQuad: "cubic-bezier(.55,.085,.68,.53)",
            easeOutQuad: "cubic-bezier(.25,.46,.45,.94)",
            easeInOutQuad: "cubic-bezier(.455,.03,.515,.955)",
            easeInQuart: "cubic-bezier(.895,.03,.685,.22)",
            easeOutQuart: "cubic-bezier(.165,.84,.44,1)",
            easeInOutQuart: "cubic-bezier(.77,0,.175,1)",
            easeInQuint: "cubic-bezier(.755,.05,.855,.06)",
            easeOutQuint: "cubic-bezier(.23,1,.32,1)",
            easeInOutQuint: "cubic-bezier(.86,0,.07,1)",
            easeInSine: "cubic-bezier(.47,0,.745,.715)",
            easeOutSine: "cubic-bezier(.39,.575,.565,1)",
            easeInOutSine: "cubic-bezier(.445,.05,.55,.95)",
            easeInBack: "cubic-bezier(.6,-.28,.735,.045)",
            easeOutBack: "cubic-bezier(.175, .885,.32,1.275)",
            easeInOutBack: "cubic-bezier(.68,-.55,.265,1.55)",
            easeFastSlow: "cubic-bezier(.11,.69,.66,1.01)",
            easeBounceBack: "cubic-bezier(.18,1.92,.59,1.33)",
            easeBounceBackHard: "cubic-bezier(.8,1.91,0,.94)",
            easeHickUp: "cubic-bezier(.28,1.78,.01,0)"
        },
        E = !1;
    (navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/BlackBerry/i) || navigator.userAgent.match(/Windows Phone/i)) && (E = !0),
        function() {
            for (var a = 0, e = ["ms", "moz", "webkit", "o"], i = 0; i < e.length && !t.requestAnimationFrame; ++i) t.requestAnimationFrame = t[e[i] + "RequestAnimationFrame"], t.cancelAnimationFrame = t[e[i] + "CancelAnimationFrame"] || t[e[i] + "CancelRequestAnimationFrame"];
            t.requestAnimationFrame || (t.requestAnimationFrame = function(e) {
                var i = (new Date).getTime(),
                    s = Math.max(0, 16 - (i - a)),
                    n = t.setTimeout(function() {
                        e(i + s)
                    }, s);
                return a = i + s, n
            }), t.cancelAnimationFrame || (t.cancelAnimationFrame = function(a) {
                clearTimeout(a)
            })
        }(), a.fn.avalancheSlider = function(e) {
        return this.each(function() {
            var t = a(this);
            if (!t.data("avalancheSlider")) {
                var i = new o(this, e);
                t.data("avalancheSlider", i)
            }
        })
    }, a.fn.avalancheSlider.tmsOpts = {
        animation: "slide",
        parallax: !1,
        easing: "easeInOutQuint",
        easingFallback: "easeInOutQuint",
        speed: 700,
        parallaxSpeed: .2,
        parallaxScaleOut: !1,
        parallaxFadeOut: !1,
        navArrows: !0,
        navPagination: !0,
        navShowOnHover: !0,
        paginationType: "bullets",
        navKeyboard: !0,
        forceFit: !1,
        fullwidth: !1,
        fullscreen: !1,
        fsUseHeightOf: "",
        externalPadding: 0,
        scaleUnder: 1140,
        scaleMinHeight: 214,
        captionScaling: !0,
        carousel: !1,
        carouselVisible: 1,
        carouselScaleHeight: !1,
        autoAdvance: !0,
        showProgressBar: !0,
        interval: 6e3,
        pauseOnHover: !0,
        useVideoAPI: !0,
        autoPlay: !0,
        replayOnEnd: !0,
        respectRatio: !0,
        muteBkgVideo: !1,
        lazyLoad: !0,
        retinaSupport: !0,
        retinaSupportMobile: !1,
        retinaSuffix: "@2x",
        onSetup: null,
        onLoadEnd: null,
        onSlideBefore: null,
        onSlideAfter: null,
        onSlideshowStart: null,
        onSlideshowPause: null,
        onSlideshowEnd: null
    }
}(jQuery, document, window);
/**
 *	Summit Lightbox
 *	Version: 1.0.3
 */
! function(t, i, e, a) {
    "use strict";
    var n = function(i, a) {
            var n = t.extend({}, t.fn.summitLightbox.tmlOpts, a),
                c = t(i),
                d = this,
                p = [];
            c.on("click", function(i) {
                i.preventDefault(), t(c).data("group") && (p = o(c)), t(this).addClass("tml-active"), n.lightboxAnimation = t(this).data("lightbox-animation") ? t(this).data("lightbox-animation") : n.lightboxAnimation, n.contentAnimation = t(this).data("content-animation") ? t(this).data("content-animation") : n.contentAnimation, l(p, n, c, d)
            }), t(e).on("resize", function() {
                m(n)
            }), d.nextContent = function() {
                var i = t("#tml-content");
                if (i.data("loading")) return !1;
                h(0, n);
                var e = t(".tml-active"),
                    a = o(e),
                    r = a[t.inArray(e.attr("id"), a) + 1];
                r = t.inArray(r, a) + 1 === 0 ? a[0] : r, e.removeClass("tml-active"), r = t("#" + r).addClass("tml-active"), s(r, "next", n), a.length = 0
            }, d.prevContent = function() {
                var i = t("#tml-content");
                if (i.data("loading")) return !1;
                h(0, n);
                var e = t(".tml-active"),
                    a = o(e),
                    r = a[t.inArray(e.attr("id"), a) - 1];
                r = t.inArray(r, a) + 1 === 0 ? a[a.length - 1] : r, e.removeClass("tml-active"), r = t("#" + r).addClass("tml-active"), s(r, "prev", n), a.length = 0
            }, d.destroyLightbox = function() {
                var i = t("#tm-lightbox"),
                    e = t("#tml-content"),
                    a = null;
                t("body").removeClass("modal-open");
                var o = r(i, n);
                if (b) {
                    if (i.data("transitioning")) return !1;
                    i.children().css({
                        transition: "none"
                    }), e.css({
                        transition: "none"
                    }), i.one(w, function() {
                        clearTimeout(a), a = setTimeout(function() {
                            i.find("iframe").attr("src", ""), i.remove(), i = null
                        }, 50)
                    }), u(i, 0, o.x, o.y, n)
                } else {
                    if (i.is(":animated")) return !1;
                    e.remove(), i.animate({
                        opacity: 0,
                        left: o.x + "px",
                        top: o.y + "px"
                    }, n.speed, n.easing, function() {
                        i.find("iframe").attr("src", ""), i.remove(), i = null
                    })
                }
                p.length = 0, t(".tml-active").removeClass("tml-active"), n.onExit && n.onExit()
            }
        },
        o = function(i) {
            if (t(i).is("[data-group]")) {
                var e = t(i).data("group"),
                    a = [];
                return t('[data-group="' + e + '"]').each(function(i) {
                    i++, t(this).attr("id") ? a.push(t(this).attr("id")) : (t(this).attr("id", e + "-tml-thumb-" + i), a.push(t(this).attr("id")))
                }), a
            }
        },
        r = function(i, a) {
            var n = a.lightboxAnimation,
                o = "slideInLeft" === n || "slideInTop" === n ? -1 : "slideInRight" === n || "slideInBottom" === n ? 1 : 0,
                r = "slideInLeft" === n || "slideInRight" === n ? t(e).width() * o : 0,
                l = "slideInTop" === n || "slideInBottom" === n ? t(e).height() * o : 0;
            return {
                x: r,
                y: l
            }
        },
        l = function(a, n, o, l) {
            if (t("#tm-lightbox").length) return !1;
            t("body").append('<div id="tm-lightbox" class="tm-lightbox"><div id="tml-content-wrapper" ><div id="tml-content" /></div><div id="tml-caption" /></div>');
            var s = t("#tm-lightbox"),
                d = t("#tml-content-wrapper"),
                h = t("#tml-content"),
                p = null;
            o.is("[data-modal-mode]") && (s.addClass("tml-modal-mode"), h.addClass("modal-dialog"), t("body").addClass("modal-open"), o.data("modal-width") && s.data("modal-width", o.data("modal-width")), o.data("modal-height") && s.data("modal-height", o.data("modal-height"))), s.data("initLoad", !0);
            var f = n.contentMargin;
            if (d.css({
                    top: f + "%",
                    right: f + "%",
                    bottom: f + "%",
                    left: f + "%"
                }), a.length < 2 || h.swipeIt({
                    preventTouchOn: ".scrollable-content",
                    onSwipeMove: function(t) {
                        h.css({
                            left: t + "px"
                        })
                    },
                    onSwipeEnd: function(t) {
                        "left" === t ? l.prevContent() : l.nextContent()
                    }
                }), n.overlay || s.css({
                    background: "none"
                }), n.navArrows && a.length >= 2) {
                var v = t('<a href="#" />').attr("id", "tml-prev").addClass("tml-nav").appendTo(s),
                    g = t('<a href="#" />').attr("id", "tml-next").addClass("tml-nav").appendTo(s);
                v.on("click", function(t) {
                    t.preventDefault(), l.prevContent()
                }), g.on("click", function(t) {
                    t.preventDefault(), l.nextContent()
                })
            }
            if (n.navExit) {
                var x;
                x = t('<a href="" id="tml-exit" class="tml-nav" />').appendTo(s.hasClass("tml-modal-mode") ? h : s), x.on("click", function(t) {
                    t.preventDefault(), l.destroyLightbox()
                })
            }
            if (n.navToolbar) {
                var y, C, z, k = 600,
                    T = 400,
                    A = t(e).height() / 2 - T / 2,
                    I = t(e).width() / 2 - k / 2,
                    S = t(location).attr("href"),
                    O = t('<div id="tml-tool-bar" />').appendTo(s),
                    L = (o.data("toolbar") + "").split(";");
                if (n.navZoom = o.is("[data-toolbar]") ? t.inArray("zoom", L) > -1 ? !0 : !1 : n.navZoom, n.navShare = o.is("[data-toolbar]") ? t.inArray("share", L) > -1 ? !0 : !1 : n.navShare, n.navZoom && (C = t('<a id="tml-zoom" class="tml-nav" href="#" title="Zoom"></a>').appendTo(O), C.on("click", function(t) {
                        t.preventDefault(), d.toggleClass("zoomed"), m(n)
                    })), n.navShare) {
                    var M = o.is("[data-list-vertical]") ? "list-vertical" : "list-horizontal";
                    z = t('<div id="tml-share-wrapper"><a id="tml-share" class="tml-nav" href="#" title="Share"></a><ul class="tml-social-list ' + M + '" /></div>').appendTo(O);
                    var E = o.data("networks") ? (o.data("networks") + "").split(";") : n.navNetworks.split(",");
                    t.each(E, function(t, i) {
                        z.find("ul").append("<li><a data-" + i + ' class="tml-nav" href="#">' + i + "</a></li>")
                    }), z.children("a").on("click", function(t) {
                        t.preventDefault(), z.children("ul").toggleClass("active")
                    }), z.find("ul a").on("click", function(i) {
                        i.preventDefault();
                        var a = o.data("caption"),
                            n = o.data("twitter-user") ? o.data("twitter-user") : "",
                            r = o.data("image-url") ? o.data("image-url") : o.attr("href");
                        return t(this).is("[data-facebook]") ? y = "https://www.facebook.com/sharer/sharer.php?u=" + S + ",sharer" : t(this).is("[data-twitter]") ? y = "https://twitter.com/intent/tweet?url=" + r + "&amp;via=" + n : t(this).is("[data-pinterest]") && (y = "http://pinterest.com/pin/create/button/?url=" + S + "&amp;media=" + r + "&amp;description=" + a), e.open(y, "popup", "width=" + k + ",height=" + T + ", scrollbars=yes, top=" + A + ",left=" + I), !1
                    })
                }
            }
            n.navKeyboard && t(i).on("keyup", function(t) {
                37 != t.keyCode || a.length < 2 ? 39 != t.keyCode || a.length < 2 ? 27 == t.keyCode && l.destroyLightbox() : l.nextContent() : l.prevContent()
            }), n.overlayClickClose && s.on("click", function(t) {
                (t.target === this || "tml-content-wrapper" === t.target.id) && l.destroyLightbox()
            });
            var D = r(s, n);
            if (b) {
                if (s.css({
                        transition: "none",
                        transform: "translate3d(" + D.x + "px, " + D.y + "px, 0px)"
                    }), s.data("transitioning")) return !1;
                clearTimeout(p), p = setTimeout(function() {
                    s.one(w, function() {
                        c(t(".tml-active"), "next", n)
                    }), u(s, 1, 0, 0, n)
                }, 50)
            } else s.css({
                left: D.x + "px",
                top: D.y + "px"
            }), s.animate({
                opacity: 1,
                left: 0,
                top: 0
            }, n.speed, n.easing, function() {
                c(t(".tml-active"), "next", n)
            })
        },
        s = function(i, e, a) {
            var n = (t("#tm-lightbox"), t("#tml-content"));
            n.data("loading", !0);
            var o = "fade" === a.contentAnimation ? 0 : a.slideAmount;
            if (e = "next" === e ? 1 : -1, b) n.one(w, function() {
                t(this).css({
                    visibility: "hidden"
                }), c(i, e, a)
            }), u(n, 0, -o * e, 0, a);
            else {
                var r = n.position().left;
                n.animate({
                    opacity: 0,
                    left: r - o * e + "px"
                }, a.speed, a.easing, function() {
                    t(this).css({
                        visibility: "hidden"
                    }), c(i, e, a)
                })
            }
        },
        c = function(i, a, n) {
            var o = t("#tm-lightbox"),
                r = t("#tml-content"),
                l = t("#tml-exit").clone(!0),
                s = o.hasClass("tml-modal-mode") ? !0 : !1;
            r.find("iframe").attr("src", ""), r.removeClass("tml-error scrollable-content").data("type", "").html("");
            var c = i.attr("href"),
                m = c.match(/\.(jpeg|jpg|png|gif)/i),
                u = c.match(/(vimeo\.com|youtu(be\.com|\.be))\/(watch\?v=)?([A-Za-z0-9._%-]*)(\&\S+)?/),
                h = i.is('[data-content="inline"]'),
                p = i.is('[data-content="iframe"]'),
                f = i.is('[data-content="ajax"]');
            if (t("#tml-loader").length && t("#tml-loader").remove(), o.append('<div id="tml-loader" class="tm-loader"><div id="circle" /></div>'), m) {
                var v = c.substr(c.lastIndexOf("."));
                (e.isRetinaDevice() && n.retinaSupport || e.isRetinaDevice() && i.is("[data-retina]")) && (!z && !n.retinaSupportMobile || z && n.retinaSupportMobile) && (c = c.replace(v, n.retinaSuffix + v)), r.data("type", "img"), t("<img />").addClass("tml-image").attr("src", c).one("load", function() {
                    r.html(t(this)), d(!0, a, n)
                }).each(function() {
                    this.complete && t(this).trigger("load")
                }).on("error", function() {
                    d(!1, a, n)
                })
            }
            if (u) {
                r.data("type", "video");
                var b = t('<iframe src="' + c + '" wmode="opaque" frameborder="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen />');
                r.html(b), b.one("load", function() {
                    d(!0, a, n)
                })
            }
            if (h)
                if (r.addClass("scrollable-content").data("type", "inline"), t(c).length) {
                    var g = t(c).clone(!0).addClass("show").css({
                        visibility: "visible",
                        opacity: 1
                    });
                    r.html(g), d(!0, a, n)
                } else d(!1, a, n);
            if (p) {
                r.addClass("scrollable-content").data("type", "iframe");
                var x = t('<iframe src="' + c + '" frameborder="0" scrolling="auto" />');
                r.html(x), x.one("load", function() {
                    d(!0, a, n)
                })
            }
            if (f) {
                r.addClass("scrollable-content").data("type", "ajax");
                var y = i.data("target-container");
                t.ajax({
                    url: c,
                    cache: !1,
                    success: function(i) {
                        r.html(t(i).find(y).length ? t(i).find(y) : i), d(!0, a, n)
                    },
                    error: function() {
                        d(!1, a, n)
                    }
                })
            }
            s && r.append(l)
        },
        d = function(i, e, a) {
            var n = t("#tm-lightbox"),
                o = t("#tml-content"),
                r = null;
            if (m(a), n.find("#tml-loader").remove(), i) {
                var l = "fade" === a.contentAnimation ? 0 : a.slideAmount;
                if (b) o.css({
                    transition: "none",
                    opacity: 0,
                    transform: "translate3d(" + l * e + "px, 0, 0)"
                }), clearTimeout(r), r = setTimeout(function() {
                    o.one(w, function() {
                        o.data("loading", !1)
                    }), u(o, 1, 0, 0, a)
                }, 50);
                else {
                    var s = o.position().left,
                        c = n.data("initLoad") ? s : 1 === e ? s + 2 * l : s - 2 * l;
                    o.css({
                        visibility: "visible",
                        left: c + "px"
                    }).animate({
                        opacity: 1,
                        left: s + "px"
                    }, a.speed, a.easing, function() {
                        o.data("loading", !1)
                    })
                }
                h(1, a), a.onLoaded && a.onLoaded()
            } else {
                var d = "";
                a.showErrorSrc && (d = ": " + t(".tml-active").attr("href")), o.css({
                    width: "100%",
                    height: "auto",
                    top: "50%",
                    left: 0,
                    transition: "none",
                    transform: "translate3d( 0, 0, 0)"
                }).addClass("tml-error").html(a.errorMessage + d), b ? (clearTimeout(r), r = setTimeout(function() {
                    o.one(w, function() {
                        o.data("loading", !1)
                    }), u(o, 1, 0, 0, a)
                }, 50)) : o.css({
                    visibility: "visible"
                }).animate({
                    opacity: 1
                }, function() {
                    o.data("loading", !1)
                })
            }
            n.data("initLoad", !1)
        },
        m = function(i) {
            var e = t("#tm-lightbox"),
                a = e.hasClass("tml-modal-mode") ? !0 : !1,
                n = t("#tml-content-wrapper").width(),
                o = t("#tml-content-wrapper").height(),
                r = e.data("modal-width"),
                l = e.data("modal-height"),
                s = t("#tml-content"),
                c = s.data("type"),
                d = 0,
                m = 0,
                u = 0,
                h = 0,
                p = 0;
            if (s.not(".tml-error").css({
                    height: "auto",
                    width: "auto",
                    top: "",
                    left: ""
                }), "img" === c) m = s.find("img").width(), u = s.find("img").height();
            else if ("video" === c) m = i.maxWidth, u = m / 1.778;
            else if ("iframe" === c) m = n < i.maxWidth ? n : i.maxWidth, u = o;
            else {
                var f = (s.children().outerWidth(), s.children().outerHeight());
                m = a ? r > n ? n : r : n, u = a && l ? l : a && !l ? f : o > f ? f : o
            }("img" === c || "video" === c) && (d = m / u > n / o ? m / n : u / o, m = m / d > m ? m : m / d, u = u / d > u ? u : u / d), p = (n - m) / 2, h = o > u ? (o - u) / 2 : 0, s.css({
                width: Math.round(m) + "px",
                height: Math.round(u) + "px",
                top: Math.round(h) + "px",
                left: Math.round(p) + "px"
            })
        },
        u = function(i, e, a, n, o) {
            {
                var r = t("#tm-lightbox");
                t("#tml-content")
            }
            "tm-lightbox" === i.attr("id") && r.data("transitioning", !0);
            var l = {};
            l.transform = "translate3d(" + a + "px, " + n + "px, 0px)", l.transitionProperty = y + ", opacity", l.transitionDuration = o.speed + "ms", l.transitionTimingFunction = C[o.easing], l.visibility = "visible", l.opacity = e, i.css(l).one(w, function(e) {
                e.stopPropagation(), t(this).off(w), "tm-lightbox" === i.attr("id") && r.data("transitioning", !1)
            })
        },
        h = function(i, e) {
            var a = t("#tml-caption"),
                n = t(".tml-active").data("caption");
            n ? (a.html(t("<span />").text(n)), b ? u(t("#tml-caption"), i, 0, 0, e) : t("#tml-caption").animate({
                opacity: i
            })) : a.html("")
        };
    e.isRetinaDevice = function() {
        var t = "(-webkit-min-device-pixel-ratio: 1.5), (min--moz-device-pixel-ratio: 1.5), (-o-min-device-pixel-ratio: 3/2), (min-resolution: 1.5dppx)";
        return this.devicePixelRatio > 1 || this.matchMedia && this.matchMedia(t).matches ? !0 : !1
    };
    var p, f = i.body || i.documentElement,
        v = f.style,
        b = v.transition !== a || v.WebkitTransition !== a || v.MozTransition !== a || v.MsTransition !== a || v.OTransition !== a,
        g = ["WebkitTransform", "MozTransform", "OTransform", "msTransform"];
    for (var x in g) v[g[x]] !== a && (p = "-" + g[x].replace("Transform", "").toLowerCase());
    var y = p + "-transform",
        w = "webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend",
        C = {
            linear: "cubic-bezier(0, 0, 1, 1)",
            swing: "cubic-bezier(0.42, 0, 0.58, 1)",
            easeOutCubic: "cubic-bezier(.215,.61,.355,1)",
            easeInOutCubic: "cubic-bezier(.645,.045,.355,1)",
            easeInCirc: "cubic-bezier(.6,.04,.98,.335)",
            easeOutCirc: "cubic-bezier(.075,.82,.165,1)",
            easeInOutCirc: "cubic-bezier(.785,.135,.15,.86)",
            easeInExpo: "cubic-bezier(.95,.05,.795,.035)",
            easeOutExpo: "cubic-bezier(.19,1,.22,1)",
            easeInOutExpo: "cubic-bezier(1,0,0,1)",
            easeInQuad: "cubic-bezier(.55,.085,.68,.53)",
            easeOutQuad: "cubic-bezier(.25,.46,.45,.94)",
            easeInOutQuad: "cubic-bezier(.455,.03,.515,.955)",
            easeInQuart: "cubic-bezier(.895,.03,.685,.22)",
            easeOutQuart: "cubic-bezier(.165,.84,.44,1)",
            easeInOutQuart: "cubic-bezier(.77,0,.175,1)",
            easeInQuint: "cubic-bezier(.755,.05,.855,.06)",
            easeOutQuint: "cubic-bezier(.23,1,.32,1)",
            easeInOutQuint: "cubic-bezier(.86,0,.07,1)",
            easeInSine: "cubic-bezier(.47,0,.745,.715)",
            easeOutSine: "cubic-bezier(.39,.575,.565,1)",
            easeInOutSine: "cubic-bezier(.445,.05,.55,.95)",
            easeInBack: "cubic-bezier(.6,-.28,.735,.045)",
            easeOutBack: "cubic-bezier(.175, .885,.32,1.275)",
            easeInOutBack: "cubic-bezier(.68,-.55,.265,1.55)"
        },
        z = !1;
    (navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/BlackBerry/i) || navigator.userAgent.match(/Windows Phone/i)) && (z = !0), t.fn.summitLightbox = function(i) {
        return this.each(function() {
            var e = t(this);
            if (!e.data("summitLightbox")) {
                var a = new n(this, i);
                e.data("summitLightbox", a)
            }
        })
    }, t.fn.summitLightbox.tmlOpts = {
        lightboxAnimation: "fade",
        contentAnimation: "slide",
        slideAmount: 100,
        easing: "swing",
        speed: 350,
        overlay: !0,
        maxWidth: 1140,
        contentMargin: 15,
        navArrows: !0,
        navKeyboard: !0,
        navExit: !0,
        navToolbar: !0,
        navZoom: !0,
        navShare: !0,
        navNetworks: "facebook,twitter,pinterest",
        overlayClickClose: !0,
        retinaSupport: !1,
        retinaSupportMobile: !1,
        retinaSuffix: "@2x",
        errorMessage: "Please Check",
        showErrorSrc: !0,
        onSetup: null,
        onLoaded: null,
        onDestroy: null
    }
}(jQuery, document, window);
/**
 *	Snowbridge Parallax
 *	Version: 1.0.1
 */
! function(t, a, i, e) {
    "use strict";

    function n(a, e) {
        var n = t('<div class="tm-parallax" />').prependTo(t(a));
        g && n.css({
            height: ""
        }).addClass("tmp-mobile");
        var o = t('<div class="tm-loader"><div id="circle" /></div>');
        o.appendTo(n);
        var s = a.data("src"),
            c = s.substr(s.lastIndexOf("."));
        (i.isRetinaDevice() && e.retinaSupport || i.isRetinaDevice() && a.is("[data-retina]")) && (!g && !e.retinaSupportMobile || g && e.retinaSupportMobile) && (s = a.data("src").replace(c, e.retinaSuffix + c)), t('<img class="tmp-media"/>').attr("src", s).one("load", function() {
            t(this).attr("src", s).appendTo(n), n.find(".tm-loader").remove(), r(a, e)
        }).on("error", function() {
            console.log("Error src:" + s)
        })
    }

    function r(a, e) {
        var n = a.find(".tmp-media");
        n.data("refW", n.width()).data("refH", n.height()), n.css({
            opacity: 0
        }), c(a, e), l(a, e), m && d(a) ? n.css({
            visibility: "visible",
            transitionProperty: "opacity",
            transitionDuration: "1000ms",
            opacity: 1
        }) : n.css({
            visibility: "visible"
        }).animate({
            opacity: 1
        }), t(i).on("resize", function() {
            c(a, e), s(a, e)
        }), t(i).on("scroll", function() {
            s(a, e)
        }), e.onLoaded && e.onLoaded()
    }
    var o = function(a, i) {
            var e = t.extend({}, t.fn.snowBridge.tmpOpts, i),
                r = t(a),
                o = e.scaleContainer ? e.scaleUnder : r.width();
            r.data("animating", !1).data("setup", !1).data("refW", o).data("refH", r.height()), c(r, e), e.fullscreen && (e.scaleContainer = !0), e.parallaxFactor > 1 && (e.parallaxFactor = 1), r.data("setup", !0), n(r, e)
        },
        s = function(t, a) {
            t.data("animating") || (i.requestAnimationFrame(function() {
                l(t, a)
            }), t.data("animating", !0))
        },
        c = function(a, e) {
            var n = t(i).width(),
                r = t(i).height(),
                o = a.data("refW"),
                s = a.data("refH"),
                c = e.fullscreen ? n / r : o / s,
                l = e.fullscreen ? r : n / c > s ? s : n / c;
            if ((e.fullscreen || e.scaleContainer) && (a.css({
                    width: n + "px",
                    height: Math.round(l) > e.scaleMinHeight ? Math.round(l) + "px" : e.scaleMinHeight + "px"
                }), l = Math.round(l) > e.scaleMinHeight ? l : e.scaleMinHeight), !a.data("setup")) return !1;
            var d = a.find(".tmp-media"),
                h = d.data("refW"),
                p = d.data("refH"),
                u = h / p,
                m = e.fullscreen ? r + r * e.parallaxFactor : e.scaleContainer ? l + l * e.parallaxFactor : s + s * e.parallaxFactor,
                f = m * u,
                v = r + l,
                x = g ? -((m - l) / 2) : 0;
            d.css(e.fullscreen || e.scaleContainer ? f > n ? {
                width: Math.round(f) + "px",
                height: Math.round(m) + "px",
                left: -Math.round((f - n) / 2) + "px",
                top: x + "px"
            } : {
                width: n + "px",
                height: Math.round(n / u) + "px",
                left: 0,
                top: x + "px"
            } : f > n ? {
                width: Math.round(m * u) + "px",
                height: Math.round(m) + "px",
                left: -Math.round((m * u - n) / 2) + "px",
                top: x + "px"
            } : {
                width: n + "px",
                height: Math.round(n / u) + "px",
                left: 0,
                top: x + "px"
            }), a.data("scrollDistContainer", v)
        },
        l = function(a, e) {
            var n = a.find(".tmp-media");
            if (d(a)) {
                if (g) return !1;
                var r = a.height() + a.offset().top - t(i).scrollTop(),
                    o = a.offset().top - t(i).scrollTop(),
                    s = 0 - n.height() / 2,
                    c = s * (r / a.data("scrollDistContainer")) * e.parallaxFactor;
                if (n.css(m ? {
                        transform: "translate3d( 0px, " + c + "px, 0px)",
                        visibility: "visible"
                    } : {
                        top: c + "px",
                        visibility: "visible"
                    }), e.fadeInOut) {
                    var l, h = t(i).height(),
                        p = e.fadeThreshold > 1 ? .5 * a.height() : a.height() * e.fadeThreshold;
                    o > p || (l = Math.abs(r / p) > 1 ? 1 : Math.abs(r / p)), o > h || h - p > o || (l = (h - o) / p > 1 ? 1 : (h - o) / p), n.parent().css({
                        opacity: (Math.ceil(100 * l) / 100).toFixed(2)
                    })
                }
            } else g || n.css({
                visibility: "hidden"
            });
            a.data("animating", !1)
        },
        d = function(a) {
            var e = t(i).scrollTop(),
                n = e + t(i).height(),
                r = a.offset().top,
                o = r + a.outerHeight();
            return n >= r && o >= e
        };
    i.isRetinaDevice = function() {
        var t = "(-webkit-min-device-pixel-ratio: 1.5), (min--moz-device-pixel-ratio: 1.5), (-o-min-device-pixel-ratio: 3/2), (min-resolution: 1.5dppx)";
        return this.devicePixelRatio > 1 || this.matchMedia && this.matchMedia(t).matches ? !0 : !1
    };
    var h, p = a.body || a.documentElement,
        u = p.style,
        m = u.transition !== e || u.WebkitTransition !== e || u.MozTransition !== e || u.MsTransition !== e || u.OTransition !== e,
        f = ["WebkitTransform", "MozTransform", "OTransform", "msTransform"];
    for (var v in f) u[f[v]] !== e && (h = "-" + f[v].replace("Transform", "").toLowerCase());
    var g = !1;
    (navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/BlackBerry/i) || navigator.userAgent.match(/Windows Phone/i)) && (g = !0),
        function() {
            for (var t = 0, a = ["ms", "moz", "webkit", "o"], e = 0; e < a.length && !i.requestAnimationFrame; ++e) i.requestAnimationFrame = i[a[e] + "RequestAnimationFrame"], i.cancelAnimationFrame = i[a[e] + "CancelAnimationFrame"] || i[a[e] + "CancelRequestAnimationFrame"];
            i.requestAnimationFrame || (i.requestAnimationFrame = function(a) {
                var e = (new Date).getTime(),
                    n = Math.max(0, 16 - (e - t)),
                    r = i.setTimeout(function() {
                        a(e + n)
                    }, n);
                return t = e + n, r
            }), i.cancelAnimationFrame || (i.cancelAnimationFrame = function(t) {
                clearTimeout(t)
            })
        }(), t.fn.snowBridge = function(a) {
        return this.each(function() {
            var i = t(this);
            if (!i.data("snowBridge")) {
                var e = new o(this, a);
                i.data("snowBridge", e)
            }
        })
    }, t.fn.snowBridge.tmpOpts = {
        fullscreen: !1,
        parallaxFactor: .7,
        fadeInOut: !0,
        fadeThreshold: .5,
        scaleContainer: !0,
        scaleUnder: 1140,
        scaleMinHeight: 250,
        retinaSupport: !0,
        retinaSupportMobile: !1,
        retinaSuffix: "@2x",
        onLoaded: null
    }
}(jQuery, document, window);
/**
 *	Horizon
 *	Version: 1.0.2
 */
! function(a, e, t, i) {
    "use strict";
    var n, r = function(e, i) {
            var n = a.extend({}, a.fn.horizon.tmhOpts, i);
            e = a(e), F && e.css({
                opacity: 1,
                visibility: "visible"
            }), e.data("scrolling", !1).css("-webkit-backface-visibility", "hidden");
            var r = (e.data("animate-in") + "").split(";");
            a.each(r, function(a, t) {
                t = t.split(":");
                var i = t[0],
                    n = t[1];
                "opacity" === i && e.data("o", n), "scale" === i && e.data("s", n), "easing" === i && e.data("e", n), "transX" === i && e.data("tx", parseFloat(n)), "transY" === i && e.data("ty", parseFloat(n)), "transZ" === i && e.data("tz", parseFloat(n)), "rotateX" === i && e.data("rx", parseFloat(n)), "rotateY" === i && e.data("ry", parseFloat(n)), "rotateZ" === i && e.data("rz", parseFloat(n)), "duration" === i && e.data("du", parseFloat(n)), "delay" === i && e.data("de", parseFloat(n))
            }), a(t).on("scroll", function() {
                o(e, n)
            }), a(t).on("resize", function() {
                o(e, n)
            }), u(e, n), o(e, n)
        },
        o = function(a, e) {
            a.data("scrolling") || (requestAnimationFrame(function() {
                s(a, e)
            }), a.data("scrolling", !0))
        },
        s = function(a, e) {
            if (c(a, e)) {
                var t = a.data("du") ? a.data("du") : e.speed,
                    i = a.data("de") ? a.data("de") : 0,
                    n = a.data("e") ? h[a.data("e")] : h[e.easing];
                m ? d(a, 1, 0, 0, 0, 0, 0, 0, 1, t, i, n, e) : a.css({
                    visibility: "visible"
                }).stop().animate({
                    opacity: 1
                }, e.speed, e.easingFallback, function() {
                    e.inView && e.inView()
                })
            }
            a.data("scrolling", !1)
        },
        c = function(e, i) {
            var n = a(t).scrollTop(),
                r = n + a(t).height(),
                o = e.data("threshold") ? parseFloat(e.data("threshold")) : i.threshold,
                s = e.data("ty") ? parseFloat(e.data("ty")) : 0,
                c = e.offset().top,
                d = e.offset().top - s,
                b = d + e.outerHeight() - e.outerHeight() * o,
                l = d + e.outerHeight() * o;
            return (c - n > a(t).height() || c - n < -e.outerHeight()) && (i.recurring && u(e, i), i.outOfView && i.outOfView()), r >= l && b >= n
        },
        u = function(a) {
            if (F) return !1;
            var e = a.data("o") ? parseFloat(a.data("o")) : 0,
                t = a.data("tx") ? parseFloat(a.data("tx")) : 0,
                i = a.data("ty") ? parseFloat(a.data("ty")) : 0,
                n = a.data("tz") ? parseFloat(a.data("tz")) : 0,
                r = a.data("rx") ? parseFloat(a.data("rx")) : 0,
                o = a.data("ry") ? parseFloat(a.data("ry")) : 0,
                s = a.data("rz") ? parseFloat(a.data("rz")) : 0,
                c = a.data("s") ? parseFloat(a.data("s")) : 1;
            a.css(m ? {
                transition: "none",
                transform: "translate3d(" + t + "px, " + i + "px, " + n + "px)rotate3d( 1, 0, 0, " + r + "deg )rotate3d( 0, 1, 0, " + o + "deg )rotate3d( 0, 0, 1, " + s + "deg )scale3d(" + c + ", " + c + ", " + c + ")",
                opacity: e,
                visibility: "hidden"
            } : {
                opacity: 0
            })
        },
        d = function(e, t, i, n, r, o, s, c, u, d, b, l, m) {
            var p = {};
            p.transform = "translate3d(" + i + "px, " + n + "px, " + r + "px)rotate3d( 1, 0, 0, " + o + "deg)rotate3d( 0, 1, 0, " + s + "deg)rotate3d( 0, 0, 1, " + c + "deg)scale3d(" + u + ", " + u + ", " + u + ")", p.transitionProperty = g + ", opacity", p.transitionDuration = d + "ms", p.transitionDelay = b + "ms", p.transitionTimingFunction = l, p.visibility = "visible", p.opacity = t, e.css(p).on(z, function(e) {
                e.stopPropagation(), a(this).off(z), m.inView && m.inView()
            })
        },
        b = e.body || e.documentElement,
        l = b.style,
        m = l.transition !== i || l.WebkitTransition !== i || l.MozTransition !== i || l.MsTransition !== i || l.OTransition !== i,
        p = ["WebkitTransform", "MozTransform", "OTransform", "msTransform"];
    for (var f in p) l[p[f]] !== i && (n = "-" + p[f].replace("Transform", "").toLowerCase());
    var g = n + "-transform",
        z = "webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend",
        h = {
            linear: "cubic-bezier(0, 0, 1, 1)",
            swing: "cubic-bezier(0.42, 0, 0.58, 1)",
            easeOutCubic: "cubic-bezier(.215,.61,.355,1)",
            easeInOutCubic: "cubic-bezier(.645,.045,.355,1)",
            easeInCirc: "cubic-bezier(.6,.04,.98,.335)",
            easeOutCirc: "cubic-bezier(.075,.82,.165,1)",
            easeInOutCirc: "cubic-bezier(.785,.135,.15,.86)",
            easeInExpo: "cubic-bezier(.95,.05,.795,.035)",
            easeOutExpo: "cubic-bezier(.19,1,.22,1)",
            easeInOutExpo: "cubic-bezier(1,0,0,1)",
            easeInQuad: "cubic-bezier(.55,.085,.68,.53)",
            easeOutQuad: "cubic-bezier(.25,.46,.45,.94)",
            easeInOutQuad: "cubic-bezier(.455,.03,.515,.955)",
            easeInQuart: "cubic-bezier(.895,.03,.685,.22)",
            easeOutQuart: "cubic-bezier(.165,.84,.44,1)",
            easeInOutQuart: "cubic-bezier(.77,0,.175,1)",
            easeInQuint: "cubic-bezier(.755,.05,.855,.06)",
            easeOutQuint: "cubic-bezier(.23,1,.32,1)",
            easeInOutQuint: "cubic-bezier(.86,0,.07,1)",
            easeInSine: "cubic-bezier(.47,0,.745,.715)",
            easeOutSine: "cubic-bezier(.39,.575,.565,1)",
            easeInOutSine: "cubic-bezier(.445,.05,.55,.95)",
            easeInBack: "cubic-bezier(.6,-.28,.735,.045)",
            easeOutBack: "cubic-bezier(.175, .885,.32,1.275)",
            easeInOutBack: "cubic-bezier(.68,-.55,.265,1.55)",
            easeFastSlow: "cubic-bezier(.11,.69,.66,1.01)",
            easeBounceBack: "cubic-bezier(.18,1.92,.59,1.33)",
            easeBounceBackHard: "cubic-bezier(.8,1.91,0,.94)",
            easeHickUp: "cubic-bezier(.28,1.78,.01,0)"
        },
        F = !1;
    (navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/BlackBerry/i) || navigator.userAgent.match(/Windows Phone/i)) && (F = !0),
        function() {
            for (var a = 0, e = ["ms", "moz", "webkit", "o"], i = 0; i < e.length && !t.requestAnimationFrame; ++i) t.requestAnimationFrame = t[e[i] + "RequestAnimationFrame"], t.cancelAnimationFrame = t[e[i] + "CancelAnimationFrame"] || t[e[i] + "CancelRequestAnimationFrame"];
            t.requestAnimationFrame || (t.requestAnimationFrame = function(e) {
                var i = (new Date).getTime(),
                    n = Math.max(0, 16 - (i - a)),
                    r = t.setTimeout(function() {
                        e(i + n)
                    }, n);
                return a = i + n, r
            }), t.cancelAnimationFrame || (t.cancelAnimationFrame = function(a) {
                clearTimeout(a)
            })
        }(), a.fn.horizon = function(e) {
        return this.each(function() {
            var t = a(this);
            if (!t.data("horizon")) {
                var i = new r(this, e);
                t.data("horizon", i)
            }
        })
    }, a.fn.horizon.tmhOpts = {
        easing: "swing",
        easingFallback: "swing",
        speed: 500,
        threshold: 1,
        recurring: !0,
        inView: null,
        outOfView: null
    }
}(jQuery, document, window);
/**
 *	Retina replacement Plugin
 *	Version: 1.0
 */
! function(i) {
    "use strict";
    i.fn.retinizeImages = function(e) {
        var t = i.extend({
                retinaSupportMobile: !1,
                retinaSuffix: "@2x"
            }, e),
            a = function() {
                var e, a = i(this);
                if (a.is("img")) e = a.attr("src");
                else if ("none" !== a.css("background-image")) e = a.css("background-image").replace(/^url\(["']?/, "").replace(/["']?\)$/, "");
                else {
                    if (!a.is("[data-2x]")) return !1;
                    e = a.data("2x")
                }
                if (n && !t.retinaSupportMobile && !a.is("[data-retina-mobile]") || a.is("[data-no-retina]") || e.match(/\.(svg)/i) || e.indexOf(t.retinaSuffix) >= 0) return !1;
                if (window.isRetinaDevice()) {
                    var r = e.substr(e.lastIndexOf("."));
                    e = e.replace(r, t.retinaSuffix + r), i.ajax({
                        type: "GET",
                        url: e,
                        success: function() {
                            i("<img/>").attr("src", e).one("load", function() {
                                a.is("img") ? a.attr("src", e) : a.css("background-image", "url(" + e + ")")
                            })
                        }
                    })
                }
            };
        window.isRetinaDevice = function() {
            var i = "(-webkit-min-device-pixel-ratio: 1.5), (min--moz-device-pixel-ratio: 1.5), (-o-min-device-pixel-ratio: 3/2), (min-resolution: 1.5dppx)";
            return this.devicePixelRatio > 1 || this.matchMedia && this.matchMedia(i).matches ? !0 : !1
        };
        var n = !1;
        return (navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/BlackBerry/i) || navigator.userAgent.match(/Windows Phone/i)) && (n = !0), this.each(a)
    }
}(jQuery);
/**
 *	Equalize
 *	Version: 1.0
 */
! function(e) {
    "use strict";
    var t = function(t, i) {
        var s = e.extend({}, e.fn.equalizeHeights.tmeOpts, i),
            a = e(t),
            h = this,
            u = 0,
            n = 0,
            o = 0,
            r = [],
            c = 0,
            d = a.children(),
            g = a.data("leader"),
            l = e('[data-follow="' + g + '"]');
        h.updateHeights = function() {
            o = 0, s.equalizeByGroup ? d.each(function() {
                n = e(this).position().top, e(this).attr("class", function(e, t) {
                    return t.replace(/row-\d+/, "")
                }).css({
                    height: "auto"
                }), n !== u && (o++, c = 0, r.length = 0), 0 === o && (o = 1, c = 0), r.push(e(this)), c = c > e(this).outerHeight() ? c : e(this).outerHeight(), e.each(r, function(e) {
                    r[e].addClass("row-" + o).css({
                        height: c + "px"
                    })
                }), u = n
            }) : (e(this).css({
                height: "auto"
            }), c = 0, c = a.outerHeight(), l.css({
                height: c + "px"
            }))
        }, h.clearHeights = function() {
            s.equalizeByGroup ? d.css({
                height: "auto"
            }) : l.css({
                height: "auto"
            })
        }, e(window).on("resize", function() {
            return s.updateOnResize ? void(e(window).width() > s.clearUnder ? h.updateHeights() : h.clearHeights()) : !1
        }), h.updateHeights()
    };
    e.fn.equalizeHeights = function(i) {
        return this.each(function() {
            var s = e(this);
            if (!s.data("equalizeHeights")) {
                var a = new t(this, i);
                s.data("equalizeHeights", a)
            }
        })
    }, e.fn.equalizeHeights.tmeOpts = {
        equalizeByGroup: !0,
        updateOnResize: !0,
        clearUnder: 479
    }
}(jQuery);
/**
 *	Counter
 *	Version: 1.0
 */
! function(t) {
    "use strict";
    var a = function(a, n) {
        function o(t) {
            return ("" + t).replace(/(\d)(?=(\d{3})+$)/g, "$1,")
        }
        var r, e = t.extend({}, t.fn.counter.tmcOpts, n),
            u = t(a),
            c = this;
        c.startCounter = function() {
            c.clearCounter();
            var t = u.data("count-from") ? parseFloat(u.data("count-from")) : e.from,
                a = u.data("count-to") ? parseFloat(u.data("count-to")) : e.to,
                n = u.data("count-interval") ? parseFloat(u.data("count-interval")) : e.interval,
                l = t > a ? "down" : "up";
            r = setInterval(function() {
                (t === a || isNaN(t) || isNaN(a)) && (clearInterval(r), e.onComplete && e.onComplete()), u.text(o(t)), "up" === l ? t++ : t--
            }, n)
        }, c.clearCounter = function() {
            clearInterval(r);
            var t = u.data("count-from") ? parseFloat(u.data("count-from")) : e.from;
            u.html(t)
        }, e.autoStart && c.startCounter()
    };
    t.fn.counter = function(n) {
        return this.each(function() {
            var o = t(this);
            if (!o.data("counter")) {
                var r = new a(this, n);
                o.data("counter", r)
            }
        })
    }, t.fn.counter.tmcOpts = {
        autoStart: !0,
        from: 500,
        to: 100,
        interval: 20,
        onComplete: null
    }
}(jQuery);

/* THIRD PARTY PLUGINS */
/*! jQuery UI - v1.11.4 - 2015-03-19
 * http://jqueryui.com
 * Includes: effect.js
 * Copyright 2015 jQuery Foundation and other contributors; Licensed MIT */
(function(e) {
    "function" == typeof define && define.amd ? define(["jquery"], e) : e(jQuery)
})(function(e) {
    var t = "ui-effects-",
        i = e;
    e.effects = {
        effect: {}
    },
        function(e, t) {
            function i(e, t, i) {
                var s = d[t.type] || {};
                return null == e ? i || !t.def ? null : t.def : (e = s.floor ? ~~e : parseFloat(e), isNaN(e) ? t.def : s.mod ? (e + s.mod) % s.mod : 0 > e ? 0 : e > s.max ? s.max : e)
            }

            function s(i) {
                var s = l(),
                    n = s._rgba = [];
                return i = i.toLowerCase(), f(h, function(e, a) {
                    var o, r = a.re.exec(i),
                        h = r && a.parse(r),
                        l = a.space || "rgba";
                    return h ? (o = s[l](h), s[u[l].cache] = o[u[l].cache], n = s._rgba = o._rgba, !1) : t
                }), n.length ? ("0,0,0,0" === n.join() && e.extend(n, a.transparent), s) : a[i]
            }

            function n(e, t, i) {
                return i = (i + 1) % 1, 1 > 6 * i ? e + 6 * (t - e) * i : 1 > 2 * i ? t : 2 > 3 * i ? e + 6 * (t - e) * (2 / 3 - i) : e
            }
            var a, o = "backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor",
                r = /^([\-+])=\s*(\d+\.?\d*)/,
                h = [{
                    re: /rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
                    parse: function(e) {
                        return [e[1], e[2], e[3], e[4]]
                    }
                }, {
                    re: /rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
                    parse: function(e) {
                        return [2.55 * e[1], 2.55 * e[2], 2.55 * e[3], e[4]]
                    }
                }, {
                    re: /#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/,
                    parse: function(e) {
                        return [parseInt(e[1], 16), parseInt(e[2], 16), parseInt(e[3], 16)]
                    }
                }, {
                    re: /#([a-f0-9])([a-f0-9])([a-f0-9])/,
                    parse: function(e) {
                        return [parseInt(e[1] + e[1], 16), parseInt(e[2] + e[2], 16), parseInt(e[3] + e[3], 16)]
                    }
                }, {
                    re: /hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
                    space: "hsla",
                    parse: function(e) {
                        return [e[1], e[2] / 100, e[3] / 100, e[4]]
                    }
                }],
                l = e.Color = function(t, i, s, n) {
                    return new e.Color.fn.parse(t, i, s, n)
                },
                u = {
                    rgba: {
                        props: {
                            red: {
                                idx: 0,
                                type: "byte"
                            },
                            green: {
                                idx: 1,
                                type: "byte"
                            },
                            blue: {
                                idx: 2,
                                type: "byte"
                            }
                        }
                    },
                    hsla: {
                        props: {
                            hue: {
                                idx: 0,
                                type: "degrees"
                            },
                            saturation: {
                                idx: 1,
                                type: "percent"
                            },
                            lightness: {
                                idx: 2,
                                type: "percent"
                            }
                        }
                    }
                },
                d = {
                    "byte": {
                        floor: !0,
                        max: 255
                    },
                    percent: {
                        max: 1
                    },
                    degrees: {
                        mod: 360,
                        floor: !0
                    }
                },
                c = l.support = {},
                p = e("<p>")[0],
                f = e.each;
            p.style.cssText = "background-color:rgba(1,1,1,.5)", c.rgba = p.style.backgroundColor.indexOf("rgba") > -1, f(u, function(e, t) {
                t.cache = "_" + e, t.props.alpha = {
                    idx: 3,
                    type: "percent",
                    def: 1
                }
            }), l.fn = e.extend(l.prototype, {
                parse: function(n, o, r, h) {
                    if (n === t) return this._rgba = [null, null, null, null], this;
                    (n.jquery || n.nodeType) && (n = e(n).css(o), o = t);
                    var d = this,
                        c = e.type(n),
                        p = this._rgba = [];
                    return o !== t && (n = [n, o, r, h], c = "array"), "string" === c ? this.parse(s(n) || a._default) : "array" === c ? (f(u.rgba.props, function(e, t) {
                        p[t.idx] = i(n[t.idx], t)
                    }), this) : "object" === c ? (n instanceof l ? f(u, function(e, t) {
                        n[t.cache] && (d[t.cache] = n[t.cache].slice())
                    }) : f(u, function(t, s) {
                        var a = s.cache;
                        f(s.props, function(e, t) {
                            if (!d[a] && s.to) {
                                if ("alpha" === e || null == n[e]) return;
                                d[a] = s.to(d._rgba)
                            }
                            d[a][t.idx] = i(n[e], t, !0)
                        }), d[a] && 0 > e.inArray(null, d[a].slice(0, 3)) && (d[a][3] = 1, s.from && (d._rgba = s.from(d[a])))
                    }), this) : t
                },
                is: function(e) {
                    var i = l(e),
                        s = !0,
                        n = this;
                    return f(u, function(e, a) {
                        var o, r = i[a.cache];
                        return r && (o = n[a.cache] || a.to && a.to(n._rgba) || [], f(a.props, function(e, i) {
                            return null != r[i.idx] ? s = r[i.idx] === o[i.idx] : t
                        })), s
                    }), s
                },
                _space: function() {
                    var e = [],
                        t = this;
                    return f(u, function(i, s) {
                        t[s.cache] && e.push(i)
                    }), e.pop()
                },
                transition: function(e, t) {
                    var s = l(e),
                        n = s._space(),
                        a = u[n],
                        o = 0 === this.alpha() ? l("transparent") : this,
                        r = o[a.cache] || a.to(o._rgba),
                        h = r.slice();
                    return s = s[a.cache], f(a.props, function(e, n) {
                        var a = n.idx,
                            o = r[a],
                            l = s[a],
                            u = d[n.type] || {};
                        null !== l && (null === o ? h[a] = l : (u.mod && (l - o > u.mod / 2 ? o += u.mod : o - l > u.mod / 2 && (o -= u.mod)), h[a] = i((l - o) * t + o, n)))
                    }), this[n](h)
                },
                blend: function(t) {
                    if (1 === this._rgba[3]) return this;
                    var i = this._rgba.slice(),
                        s = i.pop(),
                        n = l(t)._rgba;
                    return l(e.map(i, function(e, t) {
                        return (1 - s) * n[t] + s * e
                    }))
                },
                toRgbaString: function() {
                    var t = "rgba(",
                        i = e.map(this._rgba, function(e, t) {
                            return null == e ? t > 2 ? 1 : 0 : e
                        });
                    return 1 === i[3] && (i.pop(), t = "rgb("), t + i.join() + ")"
                },
                toHslaString: function() {
                    var t = "hsla(",
                        i = e.map(this.hsla(), function(e, t) {
                            return null == e && (e = t > 2 ? 1 : 0), t && 3 > t && (e = Math.round(100 * e) + "%"), e
                        });
                    return 1 === i[3] && (i.pop(), t = "hsl("), t + i.join() + ")"
                },
                toHexString: function(t) {
                    var i = this._rgba.slice(),
                        s = i.pop();
                    return t && i.push(~~(255 * s)), "#" + e.map(i, function(e) {
                        return e = (e || 0).toString(16), 1 === e.length ? "0" + e : e
                    }).join("")
                },
                toString: function() {
                    return 0 === this._rgba[3] ? "transparent" : this.toRgbaString()
                }
            }), l.fn.parse.prototype = l.fn, u.hsla.to = function(e) {
                if (null == e[0] || null == e[1] || null == e[2]) return [null, null, null, e[3]];
                var t, i, s = e[0] / 255,
                    n = e[1] / 255,
                    a = e[2] / 255,
                    o = e[3],
                    r = Math.max(s, n, a),
                    h = Math.min(s, n, a),
                    l = r - h,
                    u = r + h,
                    d = .5 * u;
                return t = h === r ? 0 : s === r ? 60 * (n - a) / l + 360 : n === r ? 60 * (a - s) / l + 120 : 60 * (s - n) / l + 240, i = 0 === l ? 0 : .5 >= d ? l / u : l / (2 - u), [Math.round(t) % 360, i, d, null == o ? 1 : o]
            }, u.hsla.from = function(e) {
                if (null == e[0] || null == e[1] || null == e[2]) return [null, null, null, e[3]];
                var t = e[0] / 360,
                    i = e[1],
                    s = e[2],
                    a = e[3],
                    o = .5 >= s ? s * (1 + i) : s + i - s * i,
                    r = 2 * s - o;
                return [Math.round(255 * n(r, o, t + 1 / 3)), Math.round(255 * n(r, o, t)), Math.round(255 * n(r, o, t - 1 / 3)), a]
            }, f(u, function(s, n) {
                var a = n.props,
                    o = n.cache,
                    h = n.to,
                    u = n.from;
                l.fn[s] = function(s) {
                    if (h && !this[o] && (this[o] = h(this._rgba)), s === t) return this[o].slice();
                    var n, r = e.type(s),
                        d = "array" === r || "object" === r ? s : arguments,
                        c = this[o].slice();
                    return f(a, function(e, t) {
                        var s = d["object" === r ? e : t.idx];
                        null == s && (s = c[t.idx]), c[t.idx] = i(s, t)
                    }), u ? (n = l(u(c)), n[o] = c, n) : l(c)
                }, f(a, function(t, i) {
                    l.fn[t] || (l.fn[t] = function(n) {
                        var a, o = e.type(n),
                            h = "alpha" === t ? this._hsla ? "hsla" : "rgba" : s,
                            l = this[h](),
                            u = l[i.idx];
                        return "undefined" === o ? u : ("function" === o && (n = n.call(this, u), o = e.type(n)), null == n && i.empty ? this : ("string" === o && (a = r.exec(n), a && (n = u + parseFloat(a[2]) * ("+" === a[1] ? 1 : -1))), l[i.idx] = n, this[h](l)))
                    })
                })
            }), l.hook = function(t) {
                var i = t.split(" ");
                f(i, function(t, i) {
                    e.cssHooks[i] = {
                        set: function(t, n) {
                            var a, o, r = "";
                            if ("transparent" !== n && ("string" !== e.type(n) || (a = s(n)))) {
                                if (n = l(a || n), !c.rgba && 1 !== n._rgba[3]) {
                                    for (o = "backgroundColor" === i ? t.parentNode : t;
                                         ("" === r || "transparent" === r) && o && o.style;) try {
                                        r = e.css(o, "backgroundColor"), o = o.parentNode
                                    } catch (h) {}
                                    n = n.blend(r && "transparent" !== r ? r : "_default")
                                }
                                n = n.toRgbaString()
                            }
                            try {
                                t.style[i] = n
                            } catch (h) {}
                        }
                    }, e.fx.step[i] = function(t) {
                        t.colorInit || (t.start = l(t.elem, i), t.end = l(t.end), t.colorInit = !0), e.cssHooks[i].set(t.elem, t.start.transition(t.end, t.pos))
                    }
                })
            }, l.hook(o), e.cssHooks.borderColor = {
                expand: function(e) {
                    var t = {};
                    return f(["Top", "Right", "Bottom", "Left"], function(i, s) {
                        t["border" + s + "Color"] = e
                    }), t
                }
            }, a = e.Color.names = {
                aqua: "#00ffff",
                black: "#000000",
                blue: "#0000ff",
                fuchsia: "#ff00ff",
                gray: "#808080",
                green: "#008000",
                lime: "#00ff00",
                maroon: "#800000",
                navy: "#000080",
                olive: "#808000",
                purple: "#800080",
                red: "#ff0000",
                silver: "#c0c0c0",
                teal: "#008080",
                white: "#ffffff",
                yellow: "#ffff00",
                transparent: [null, null, null, 0],
                _default: "#ffffff"
            }
        }(i),
        function() {
            function t(t) {
                var i, s, n = t.ownerDocument.defaultView ? t.ownerDocument.defaultView.getComputedStyle(t, null) : t.currentStyle,
                    a = {};
                if (n && n.length && n[0] && n[n[0]])
                    for (s = n.length; s--;) i = n[s], "string" == typeof n[i] && (a[e.camelCase(i)] = n[i]);
                else
                    for (i in n) "string" == typeof n[i] && (a[i] = n[i]);
                return a
            }

            function s(t, i) {
                var s, n, o = {};
                for (s in i) n = i[s], t[s] !== n && (a[s] || (e.fx.step[s] || !isNaN(parseFloat(n))) && (o[s] = n));
                return o
            }
            var n = ["add", "remove", "toggle"],
                a = {
                    border: 1,
                    borderBottom: 1,
                    borderColor: 1,
                    borderLeft: 1,
                    borderRight: 1,
                    borderTop: 1,
                    borderWidth: 1,
                    margin: 1,
                    padding: 1
                };
            e.each(["borderLeftStyle", "borderRightStyle", "borderBottomStyle", "borderTopStyle"], function(t, s) {
                e.fx.step[s] = function(e) {
                    ("none" !== e.end && !e.setAttr || 1 === e.pos && !e.setAttr) && (i.style(e.elem, s, e.end), e.setAttr = !0)
                }
            }), e.fn.addBack || (e.fn.addBack = function(e) {
                return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
            }), e.effects.animateClass = function(i, a, o, r) {
                var h = e.speed(a, o, r);
                return this.queue(function() {
                    var a, o = e(this),
                        r = o.attr("class") || "",
                        l = h.children ? o.find("*").addBack() : o;
                    l = l.map(function() {
                        var i = e(this);
                        return {
                            el: i,
                            start: t(this)
                        }
                    }), a = function() {
                        e.each(n, function(e, t) {
                            i[t] && o[t + "Class"](i[t])
                        })
                    }, a(), l = l.map(function() {
                        return this.end = t(this.el[0]), this.diff = s(this.start, this.end), this
                    }), o.attr("class", r), l = l.map(function() {
                        var t = this,
                            i = e.Deferred(),
                            s = e.extend({}, h, {
                                queue: !1,
                                complete: function() {
                                    i.resolve(t)
                                }
                            });
                        return this.el.animate(this.diff, s), i.promise()
                    }), e.when.apply(e, l.get()).done(function() {
                        a(), e.each(arguments, function() {
                            var t = this.el;
                            e.each(this.diff, function(e) {
                                t.css(e, "")
                            })
                        }), h.complete.call(o[0])
                    })
                })
            }, e.fn.extend({
                addClass: function(t) {
                    return function(i, s, n, a) {
                        return s ? e.effects.animateClass.call(this, {
                            add: i
                        }, s, n, a) : t.apply(this, arguments)
                    }
                }(e.fn.addClass),
                removeClass: function(t) {
                    return function(i, s, n, a) {
                        return arguments.length > 1 ? e.effects.animateClass.call(this, {
                            remove: i
                        }, s, n, a) : t.apply(this, arguments)
                    }
                }(e.fn.removeClass),
                toggleClass: function(t) {
                    return function(i, s, n, a, o) {
                        return "boolean" == typeof s || void 0 === s ? n ? e.effects.animateClass.call(this, s ? {
                            add: i
                        } : {
                            remove: i
                        }, n, a, o) : t.apply(this, arguments) : e.effects.animateClass.call(this, {
                            toggle: i
                        }, s, n, a)
                    }
                }(e.fn.toggleClass),
                switchClass: function(t, i, s, n, a) {
                    return e.effects.animateClass.call(this, {
                        add: i,
                        remove: t
                    }, s, n, a)
                }
            })
        }(),
        function() {
            function i(t, i, s, n) {
                return e.isPlainObject(t) && (i = t, t = t.effect), t = {
                    effect: t
                }, null == i && (i = {}), e.isFunction(i) && (n = i, s = null, i = {}), ("number" == typeof i || e.fx.speeds[i]) && (n = s, s = i, i = {}), e.isFunction(s) && (n = s, s = null), i && e.extend(t, i), s = s || i.duration, t.duration = e.fx.off ? 0 : "number" == typeof s ? s : s in e.fx.speeds ? e.fx.speeds[s] : e.fx.speeds._default, t.complete = n || i.complete, t
            }

            function s(t) {
                return !t || "number" == typeof t || e.fx.speeds[t] ? !0 : "string" != typeof t || e.effects.effect[t] ? e.isFunction(t) ? !0 : "object" != typeof t || t.effect ? !1 : !0 : !0
            }
            e.extend(e.effects, {
                version: "1.11.4",
                save: function(e, i) {
                    for (var s = 0; i.length > s; s++) null !== i[s] && e.data(t + i[s], e[0].style[i[s]])
                },
                restore: function(e, i) {
                    var s, n;
                    for (n = 0; i.length > n; n++) null !== i[n] && (s = e.data(t + i[n]), void 0 === s && (s = ""), e.css(i[n], s))
                },
                setMode: function(e, t) {
                    return "toggle" === t && (t = e.is(":hidden") ? "show" : "hide"), t
                },
                getBaseline: function(e, t) {
                    var i, s;
                    switch (e[0]) {
                        case "top":
                            i = 0;
                            break;
                        case "middle":
                            i = .5;
                            break;
                        case "bottom":
                            i = 1;
                            break;
                        default:
                            i = e[0] / t.height
                    }
                    switch (e[1]) {
                        case "left":
                            s = 0;
                            break;
                        case "center":
                            s = .5;
                            break;
                        case "right":
                            s = 1;
                            break;
                        default:
                            s = e[1] / t.width
                    }
                    return {
                        x: s,
                        y: i
                    }
                },
                createWrapper: function(t) {
                    if (t.parent().is(".ui-effects-wrapper")) return t.parent();
                    var i = {
                            width: t.outerWidth(!0),
                            height: t.outerHeight(!0),
                            "float": t.css("float")
                        },
                        s = e("<div></div>").addClass("ui-effects-wrapper").css({
                            fontSize: "100%",
                            background: "transparent",
                            border: "none",
                            margin: 0,
                            padding: 0
                        }),
                        n = {
                            width: t.width(),
                            height: t.height()
                        },
                        a = document.activeElement;
                    try {
                        a.id
                    } catch (o) {
                        a = document.body
                    }
                    return t.wrap(s), (t[0] === a || e.contains(t[0], a)) && e(a).focus(), s = t.parent(), "static" === t.css("position") ? (s.css({
                        position: "relative"
                    }), t.css({
                        position: "relative"
                    })) : (e.extend(i, {
                        position: t.css("position"),
                        zIndex: t.css("z-index")
                    }), e.each(["top", "left", "bottom", "right"], function(e, s) {
                        i[s] = t.css(s), isNaN(parseInt(i[s], 10)) && (i[s] = "auto")
                    }), t.css({
                        position: "relative",
                        top: 0,
                        left: 0,
                        right: "auto",
                        bottom: "auto"
                    })), t.css(n), s.css(i).show()
                },
                removeWrapper: function(t) {
                    var i = document.activeElement;
                    return t.parent().is(".ui-effects-wrapper") && (t.parent().replaceWith(t), (t[0] === i || e.contains(t[0], i)) && e(i).focus()), t
                },
                setTransition: function(t, i, s, n) {
                    return n = n || {}, e.each(i, function(e, i) {
                        var a = t.cssUnit(i);
                        a[0] > 0 && (n[i] = a[0] * s + a[1])
                    }), n
                }
            }), e.fn.extend({
                effect: function() {
                    function t(t) {
                        function i() {
                            e.isFunction(a) && a.call(n[0]), e.isFunction(t) && t()
                        }
                        var n = e(this),
                            a = s.complete,
                            r = s.mode;
                        (n.is(":hidden") ? "hide" === r : "show" === r) ? (n[r](), i()) : o.call(n[0], s, i)
                    }
                    var s = i.apply(this, arguments),
                        n = s.mode,
                        a = s.queue,
                        o = e.effects.effect[s.effect];
                    return e.fx.off || !o ? n ? this[n](s.duration, s.complete) : this.each(function() {
                        s.complete && s.complete.call(this)
                    }) : a === !1 ? this.each(t) : this.queue(a || "fx", t)
                },
                show: function(e) {
                    return function(t) {
                        if (s(t)) return e.apply(this, arguments);
                        var n = i.apply(this, arguments);
                        return n.mode = "show", this.effect.call(this, n)
                    }
                }(e.fn.show),
                hide: function(e) {
                    return function(t) {
                        if (s(t)) return e.apply(this, arguments);
                        var n = i.apply(this, arguments);
                        return n.mode = "hide", this.effect.call(this, n)
                    }
                }(e.fn.hide),
                toggle: function(e) {
                    return function(t) {
                        if (s(t) || "boolean" == typeof t) return e.apply(this, arguments);
                        var n = i.apply(this, arguments);
                        return n.mode = "toggle", this.effect.call(this, n)
                    }
                }(e.fn.toggle),
                cssUnit: function(t) {
                    var i = this.css(t),
                        s = [];
                    return e.each(["em", "px", "%", "pt"], function(e, t) {
                        i.indexOf(t) > 0 && (s = [parseFloat(i), t])
                    }), s
                }
            })
        }(),
        function() {
            var t = {};
            e.each(["Quad", "Cubic", "Quart", "Quint", "Expo"], function(e, i) {
                t[i] = function(t) {
                    return Math.pow(t, e + 2)
                }
            }), e.extend(t, {
                Sine: function(e) {
                    return 1 - Math.cos(e * Math.PI / 2)
                },
                Circ: function(e) {
                    return 1 - Math.sqrt(1 - e * e)
                },
                Elastic: function(e) {
                    return 0 === e || 1 === e ? e : -Math.pow(2, 8 * (e - 1)) * Math.sin((80 * (e - 1) - 7.5) * Math.PI / 15)
                },
                Back: function(e) {
                    return e * e * (3 * e - 2)
                },
                Bounce: function(e) {
                    for (var t, i = 4;
                         ((t = Math.pow(2, --i)) - 1) / 11 > e;);
                    return 1 / Math.pow(4, 3 - i) - 7.5625 * Math.pow((3 * t - 2) / 22 - e, 2)
                }
            }), e.each(t, function(t, i) {
                e.easing["easeIn" + t] = i, e.easing["easeOut" + t] = function(e) {
                    return 1 - i(1 - e)
                }, e.easing["easeInOut" + t] = function(e) {
                    return .5 > e ? i(2 * e) / 2 : 1 - i(-2 * e + 2) / 2
                }
            })
        }(), e.effects
});
/*!
 * imagesLoaded PACKAGED v3.1.8
 * JavaScript is all like "You images are done yet or what?"
 * MIT License
 */
(function() {
    function e() {}

    function t(e, t) {
        for (var n = e.length; n--;)
            if (e[n].listener === t) return n;
        return -1
    }

    function n(e) {
        return function() {
            return this[e].apply(this, arguments)
        }
    }
    var i = e.prototype,
        r = this,
        o = r.EventEmitter;
    i.getListeners = function(e) {
        var t, n, i = this._getEvents();
        if ("object" == typeof e) {
            t = {};
            for (n in i) i.hasOwnProperty(n) && e.test(n) && (t[n] = i[n])
        } else t = i[e] || (i[e] = []);
        return t
    }, i.flattenListeners = function(e) {
        var t, n = [];
        for (t = 0; e.length > t; t += 1) n.push(e[t].listener);
        return n
    }, i.getListenersAsObject = function(e) {
        var t, n = this.getListeners(e);
        return n instanceof Array && (t = {}, t[e] = n), t || n
    }, i.addListener = function(e, n) {
        var i, r = this.getListenersAsObject(e),
            o = "object" == typeof n;
        for (i in r) r.hasOwnProperty(i) && -1 === t(r[i], n) && r[i].push(o ? n : {
            listener: n,
            once: !1
        });
        return this
    }, i.on = n("addListener"), i.addOnceListener = function(e, t) {
        return this.addListener(e, {
            listener: t,
            once: !0
        })
    }, i.once = n("addOnceListener"), i.defineEvent = function(e) {
        return this.getListeners(e), this
    }, i.defineEvents = function(e) {
        for (var t = 0; e.length > t; t += 1) this.defineEvent(e[t]);
        return this
    }, i.removeListener = function(e, n) {
        var i, r, o = this.getListenersAsObject(e);
        for (r in o) o.hasOwnProperty(r) && (i = t(o[r], n), -1 !== i && o[r].splice(i, 1));
        return this
    }, i.off = n("removeListener"), i.addListeners = function(e, t) {
        return this.manipulateListeners(!1, e, t)
    }, i.removeListeners = function(e, t) {
        return this.manipulateListeners(!0, e, t)
    }, i.manipulateListeners = function(e, t, n) {
        var i, r, o = e ? this.removeListener : this.addListener,
            s = e ? this.removeListeners : this.addListeners;
        if ("object" != typeof t || t instanceof RegExp)
            for (i = n.length; i--;) o.call(this, t, n[i]);
        else
            for (i in t) t.hasOwnProperty(i) && (r = t[i]) && ("function" == typeof r ? o.call(this, i, r) : s.call(this, i, r));
        return this
    }, i.removeEvent = function(e) {
        var t, n = typeof e,
            i = this._getEvents();
        if ("string" === n) delete i[e];
        else if ("object" === n)
            for (t in i) i.hasOwnProperty(t) && e.test(t) && delete i[t];
        else delete this._events;
        return this
    }, i.removeAllListeners = n("removeEvent"), i.emitEvent = function(e, t) {
        var n, i, r, o, s = this.getListenersAsObject(e);
        for (r in s)
            if (s.hasOwnProperty(r))
                for (i = s[r].length; i--;) n = s[r][i], n.once === !0 && this.removeListener(e, n.listener), o = n.listener.apply(this, t || []), o === this._getOnceReturnValue() && this.removeListener(e, n.listener);
        return this
    }, i.trigger = n("emitEvent"), i.emit = function(e) {
        var t = Array.prototype.slice.call(arguments, 1);
        return this.emitEvent(e, t)
    }, i.setOnceReturnValue = function(e) {
        return this._onceReturnValue = e, this
    }, i._getOnceReturnValue = function() {
        return this.hasOwnProperty("_onceReturnValue") ? this._onceReturnValue : !0
    }, i._getEvents = function() {
        return this._events || (this._events = {})
    }, e.noConflict = function() {
        return r.EventEmitter = o, e
    }, "function" == typeof define && define.amd ? define("eventEmitter/EventEmitter", [], function() {
        return e
    }) : "object" == typeof module && module.exports ? module.exports = e : this.EventEmitter = e
}).call(this),
    function(e) {
        function t(t) {
            var n = e.event;
            return n.target = n.target || n.srcElement || t, n
        }
        var n = document.documentElement,
            i = function() {};
        n.addEventListener ? i = function(e, t, n) {
            e.addEventListener(t, n, !1)
        } : n.attachEvent && (i = function(e, n, i) {
            e[n + i] = i.handleEvent ? function() {
                var n = t(e);
                i.handleEvent.call(i, n)
            } : function() {
                var n = t(e);
                i.call(e, n)
            }, e.attachEvent("on" + n, e[n + i])
        });
        var r = function() {};
        n.removeEventListener ? r = function(e, t, n) {
            e.removeEventListener(t, n, !1)
        } : n.detachEvent && (r = function(e, t, n) {
            e.detachEvent("on" + t, e[t + n]);
            try {
                delete e[t + n]
            } catch (i) {
                e[t + n] = void 0
            }
        });
        var o = {
            bind: i,
            unbind: r
        };
        "function" == typeof define && define.amd ? define("eventie/eventie", o) : e.eventie = o
    }(this),
    function(e, t) {
        "function" == typeof define && define.amd ? define(["eventEmitter/EventEmitter", "eventie/eventie"], function(n, i) {
            return t(e, n, i)
        }) : "object" == typeof exports ? module.exports = t(e, require("wolfy87-eventemitter"), require("eventie")) : e.imagesLoaded = t(e, e.EventEmitter, e.eventie)
    }(window, function(e, t, n) {
        function i(e, t) {
            for (var n in t) e[n] = t[n];
            return e
        }

        function r(e) {
            return "[object Array]" === d.call(e)
        }

        function o(e) {
            var t = [];
            if (r(e)) t = e;
            else if ("number" == typeof e.length)
                for (var n = 0, i = e.length; i > n; n++) t.push(e[n]);
            else t.push(e);
            return t
        }

        function s(e, t, n) {
            if (!(this instanceof s)) return new s(e, t);
            "string" == typeof e && (e = document.querySelectorAll(e)), this.elements = o(e), this.options = i({}, this.options), "function" == typeof t ? n = t : i(this.options, t), n && this.on("always", n), this.getImages(), a && (this.jqDeferred = new a.Deferred);
            var r = this;
            setTimeout(function() {
                r.check()
            })
        }

        function f(e) {
            this.img = e
        }

        function c(e) {
            this.src = e, v[e] = this
        }
        var a = e.jQuery,
            u = e.console,
            h = u !== void 0,
            d = Object.prototype.toString;
        s.prototype = new t, s.prototype.options = {}, s.prototype.getImages = function() {
            this.images = [];
            for (var e = 0, t = this.elements.length; t > e; e++) {
                var n = this.elements[e];
                "IMG" === n.nodeName && this.addImage(n);
                var i = n.nodeType;
                if (i && (1 === i || 9 === i || 11 === i))
                    for (var r = n.querySelectorAll("img"), o = 0, s = r.length; s > o; o++) {
                        var f = r[o];
                        this.addImage(f)
                    }
            }
        }, s.prototype.addImage = function(e) {
            var t = new f(e);
            this.images.push(t)
        }, s.prototype.check = function() {
            function e(e, r) {
                return t.options.debug && h && u.log("confirm", e, r), t.progress(e), n++, n === i && t.complete(), !0
            }
            var t = this,
                n = 0,
                i = this.images.length;
            if (this.hasAnyBroken = !1, !i) return this.complete(), void 0;
            for (var r = 0; i > r; r++) {
                var o = this.images[r];
                o.on("confirm", e), o.check()
            }
        }, s.prototype.progress = function(e) {
            this.hasAnyBroken = this.hasAnyBroken || !e.isLoaded;
            var t = this;
            setTimeout(function() {
                t.emit("progress", t, e), t.jqDeferred && t.jqDeferred.notify && t.jqDeferred.notify(t, e)
            })
        }, s.prototype.complete = function() {
            var e = this.hasAnyBroken ? "fail" : "done";
            this.isComplete = !0;
            var t = this;
            setTimeout(function() {
                if (t.emit(e, t), t.emit("always", t), t.jqDeferred) {
                    var n = t.hasAnyBroken ? "reject" : "resolve";
                    t.jqDeferred[n](t)
                }
            })
        }, a && (a.fn.imagesLoaded = function(e, t) {
            var n = new s(this, e, t);
            return n.jqDeferred.promise(a(this))
        }), f.prototype = new t, f.prototype.check = function() {
            var e = v[this.img.src] || new c(this.img.src);
            if (e.isConfirmed) return this.confirm(e.isLoaded, "cached was confirmed"), void 0;
            if (this.img.complete && void 0 !== this.img.naturalWidth) return this.confirm(0 !== this.img.naturalWidth, "naturalWidth"), void 0;
            var t = this;
            e.on("confirm", function(e, n) {
                return t.confirm(e.isLoaded, n), !0
            }), e.check()
        }, f.prototype.confirm = function(e, t) {
            this.isLoaded = e, this.emit("confirm", this, t)
        };
        var v = {};
        return c.prototype = new t, c.prototype.check = function() {
            if (!this.isChecked) {
                var e = new Image;
                n.bind(e, "load", this), n.bind(e, "error", this), e.src = this.src, this.isChecked = !0
            }
        }, c.prototype.handleEvent = function(e) {
            var t = "on" + e.type;
            this[t] && this[t](e)
        }, c.prototype.onload = function(e) {
            this.confirm(!0, "onload"), this.unbindProxyEvents(e)
        }, c.prototype.onerror = function(e) {
            this.confirm(!1, "onerror"), this.unbindProxyEvents(e)
        }, c.prototype.confirm = function(e, t) {
            this.isConfirmed = !0, this.isLoaded = e, this.emit("confirm", this, t)
        }, c.prototype.unbindProxyEvents = function(e) {
            n.unbind(e.target, "load", this), n.unbind(e.target, "error", this)
        }, s
    });
/*!
 * Isotope PACKAGED v2.0.0
 * Filter & sort magical layouts
 * http://isotope.metafizzy.co
 */
(function(t) {
    function e() {}

    function i(t) {
        function i(e) {
            e.prototype.option || (e.prototype.option = function(e) {
                t.isPlainObject(e) && (this.options = t.extend(!0, this.options, e))
            })
        }

        function n(e, i) {
            t.fn[e] = function(n) {
                if ("string" == typeof n) {
                    for (var s = o.call(arguments, 1), a = 0, u = this.length; u > a; a++) {
                        var p = this[a],
                            h = t.data(p, e);
                        if (h)
                            if (t.isFunction(h[n]) && "_" !== n.charAt(0)) {
                                var f = h[n].apply(h, s);
                                if (void 0 !== f) return f
                            } else r("no such method '" + n + "' for " + e + " instance");
                        else r("cannot call methods on " + e + " prior to initialization; " + "attempted to call '" + n + "'")
                    }
                    return this
                }
                return this.each(function() {
                    var o = t.data(this, e);
                    o ? (o.option(n), o._init()) : (o = new i(this, n), t.data(this, e, o))
                })
            }
        }
        if (t) {
            var r = "undefined" == typeof console ? e : function(t) {
                console.error(t)
            };
            return t.bridget = function(t, e) {
                i(e), n(t, e)
            }, t.bridget
        }
    }
    var o = Array.prototype.slice;
    "function" == typeof define && define.amd ? define("jquery-bridget/jquery.bridget", ["jquery"], i) : i(t.jQuery)
})(window),
    function(t) {
        function e(e) {
            var i = t.event;
            return i.target = i.target || i.srcElement || e, i
        }
        var i = document.documentElement,
            o = function() {};
        i.addEventListener ? o = function(t, e, i) {
            t.addEventListener(e, i, !1)
        } : i.attachEvent && (o = function(t, i, o) {
            t[i + o] = o.handleEvent ? function() {
                var i = e(t);
                o.handleEvent.call(o, i)
            } : function() {
                var i = e(t);
                o.call(t, i)
            }, t.attachEvent("on" + i, t[i + o])
        });
        var n = function() {};
        i.removeEventListener ? n = function(t, e, i) {
            t.removeEventListener(e, i, !1)
        } : i.detachEvent && (n = function(t, e, i) {
            t.detachEvent("on" + e, t[e + i]);
            try {
                delete t[e + i]
            } catch (o) {
                t[e + i] = void 0
            }
        });
        var r = {
            bind: o,
            unbind: n
        };
        "function" == typeof define && define.amd ? define("eventie/eventie", r) : "object" == typeof exports ? module.exports = r : t.eventie = r
    }(this),
    function(t) {
        function e(t) {
            "function" == typeof t && (e.isReady ? t() : r.push(t))
        }

        function i(t) {
            var i = "readystatechange" === t.type && "complete" !== n.readyState;
            if (!e.isReady && !i) {
                e.isReady = !0;
                for (var o = 0, s = r.length; s > o; o++) {
                    var a = r[o];
                    a()
                }
            }
        }

        function o(o) {
            return o.bind(n, "DOMContentLoaded", i), o.bind(n, "readystatechange", i), o.bind(t, "load", i), e
        }
        var n = t.document,
            r = [];
        e.isReady = !1, "function" == typeof define && define.amd ? (e.isReady = "function" == typeof requirejs, define("doc-ready/doc-ready", ["eventie/eventie"], o)) : t.docReady = o(t.eventie)
    }(this),
    function() {
        function t() {}

        function e(t, e) {
            for (var i = t.length; i--;)
                if (t[i].listener === e) return i;
            return -1
        }

        function i(t) {
            return function() {
                return this[t].apply(this, arguments)
            }
        }
        var o = t.prototype,
            n = this,
            r = n.EventEmitter;
        o.getListeners = function(t) {
            var e, i, o = this._getEvents();
            if (t instanceof RegExp) {
                e = {};
                for (i in o) o.hasOwnProperty(i) && t.test(i) && (e[i] = o[i])
            } else e = o[t] || (o[t] = []);
            return e
        }, o.flattenListeners = function(t) {
            var e, i = [];
            for (e = 0; t.length > e; e += 1) i.push(t[e].listener);
            return i
        }, o.getListenersAsObject = function(t) {
            var e, i = this.getListeners(t);
            return i instanceof Array && (e = {}, e[t] = i), e || i
        }, o.addListener = function(t, i) {
            var o, n = this.getListenersAsObject(t),
                r = "object" == typeof i;
            for (o in n) n.hasOwnProperty(o) && -1 === e(n[o], i) && n[o].push(r ? i : {
                listener: i,
                once: !1
            });
            return this
        }, o.on = i("addListener"), o.addOnceListener = function(t, e) {
            return this.addListener(t, {
                listener: e,
                once: !0
            })
        }, o.once = i("addOnceListener"), o.defineEvent = function(t) {
            return this.getListeners(t), this
        }, o.defineEvents = function(t) {
            for (var e = 0; t.length > e; e += 1) this.defineEvent(t[e]);
            return this
        }, o.removeListener = function(t, i) {
            var o, n, r = this.getListenersAsObject(t);
            for (n in r) r.hasOwnProperty(n) && (o = e(r[n], i), -1 !== o && r[n].splice(o, 1));
            return this
        }, o.off = i("removeListener"), o.addListeners = function(t, e) {
            return this.manipulateListeners(!1, t, e)
        }, o.removeListeners = function(t, e) {
            return this.manipulateListeners(!0, t, e)
        }, o.manipulateListeners = function(t, e, i) {
            var o, n, r = t ? this.removeListener : this.addListener,
                s = t ? this.removeListeners : this.addListeners;
            if ("object" != typeof e || e instanceof RegExp)
                for (o = i.length; o--;) r.call(this, e, i[o]);
            else
                for (o in e) e.hasOwnProperty(o) && (n = e[o]) && ("function" == typeof n ? r.call(this, o, n) : s.call(this, o, n));
            return this
        }, o.removeEvent = function(t) {
            var e, i = typeof t,
                o = this._getEvents();
            if ("string" === i) delete o[t];
            else if (t instanceof RegExp)
                for (e in o) o.hasOwnProperty(e) && t.test(e) && delete o[e];
            else delete this._events;
            return this
        }, o.removeAllListeners = i("removeEvent"), o.emitEvent = function(t, e) {
            var i, o, n, r, s = this.getListenersAsObject(t);
            for (n in s)
                if (s.hasOwnProperty(n))
                    for (o = s[n].length; o--;) i = s[n][o], i.once === !0 && this.removeListener(t, i.listener), r = i.listener.apply(this, e || []), r === this._getOnceReturnValue() && this.removeListener(t, i.listener);
            return this
        }, o.trigger = i("emitEvent"), o.emit = function(t) {
            var e = Array.prototype.slice.call(arguments, 1);
            return this.emitEvent(t, e)
        }, o.setOnceReturnValue = function(t) {
            return this._onceReturnValue = t, this
        }, o._getOnceReturnValue = function() {
            return this.hasOwnProperty("_onceReturnValue") ? this._onceReturnValue : !0
        }, o._getEvents = function() {
            return this._events || (this._events = {})
        }, t.noConflict = function() {
            return n.EventEmitter = r, t
        }, "function" == typeof define && define.amd ? define("eventEmitter/EventEmitter", [], function() {
            return t
        }) : "object" == typeof module && module.exports ? module.exports = t : this.EventEmitter = t
    }.call(this),
    function(t) {
        function e(t) {
            if (t) {
                if ("string" == typeof o[t]) return t;
                t = t.charAt(0).toUpperCase() + t.slice(1);
                for (var e, n = 0, r = i.length; r > n; n++)
                    if (e = i[n] + t, "string" == typeof o[e]) return e
            }
        }
        var i = "Webkit Moz ms Ms O".split(" "),
            o = document.documentElement.style;
        "function" == typeof define && define.amd ? define("get-style-property/get-style-property", [], function() {
            return e
        }) : "object" == typeof exports ? module.exports = e : t.getStyleProperty = e
    }(window),
    function(t) {
        function e(t) {
            var e = parseFloat(t),
                i = -1 === t.indexOf("%") && !isNaN(e);
            return i && e
        }

        function i() {
            for (var t = {
                width: 0,
                height: 0,
                innerWidth: 0,
                innerHeight: 0,
                outerWidth: 0,
                outerHeight: 0
            }, e = 0, i = s.length; i > e; e++) {
                var o = s[e];
                t[o] = 0
            }
            return t
        }

        function o(t) {
            function o(t) {
                if ("string" == typeof t && (t = document.querySelector(t)), t && "object" == typeof t && t.nodeType) {
                    var o = r(t);
                    if ("none" === o.display) return i();
                    var n = {};
                    n.width = t.offsetWidth, n.height = t.offsetHeight;
                    for (var h = n.isBorderBox = !(!p || !o[p] || "border-box" !== o[p]), f = 0, c = s.length; c > f; f++) {
                        var d = s[f],
                            l = o[d];
                        l = a(t, l);
                        var y = parseFloat(l);
                        n[d] = isNaN(y) ? 0 : y
                    }
                    var m = n.paddingLeft + n.paddingRight,
                        g = n.paddingTop + n.paddingBottom,
                        v = n.marginLeft + n.marginRight,
                        _ = n.marginTop + n.marginBottom,
                        I = n.borderLeftWidth + n.borderRightWidth,
                        L = n.borderTopWidth + n.borderBottomWidth,
                        z = h && u,
                        S = e(o.width);
                    S !== !1 && (n.width = S + (z ? 0 : m + I));
                    var b = e(o.height);
                    return b !== !1 && (n.height = b + (z ? 0 : g + L)), n.innerWidth = n.width - (m + I), n.innerHeight = n.height - (g + L), n.outerWidth = n.width + v, n.outerHeight = n.height + _, n
                }
            }

            function a(t, e) {
                if (n || -1 === e.indexOf("%")) return e;
                var i = t.style,
                    o = i.left,
                    r = t.runtimeStyle,
                    s = r && r.left;
                return s && (r.left = t.currentStyle.left), i.left = e, e = i.pixelLeft, i.left = o, s && (r.left = s), e
            }
            var u, p = t("boxSizing");
            return function() {
                if (p) {
                    var t = document.createElement("div");
                    t.style.width = "200px", t.style.padding = "1px 2px 3px 4px", t.style.borderStyle = "solid", t.style.borderWidth = "1px 2px 3px 4px", t.style[p] = "border-box";
                    var i = document.body || document.documentElement;
                    i.appendChild(t);
                    var o = r(t);
                    u = 200 === e(o.width), i.removeChild(t)
                }
            }(), o
        }
        var n = t.getComputedStyle,
            r = n ? function(t) {
                return n(t, null)
            } : function(t) {
                return t.currentStyle
            },
            s = ["paddingLeft", "paddingRight", "paddingTop", "paddingBottom", "marginLeft", "marginRight", "marginTop", "marginBottom", "borderLeftWidth", "borderRightWidth", "borderTopWidth", "borderBottomWidth"];
        "function" == typeof define && define.amd ? define("get-size/get-size", ["get-style-property/get-style-property"], o) : "object" == typeof exports ? module.exports = o(require("get-style-property")) : t.getSize = o(t.getStyleProperty)
    }(window),
    function(t, e) {
        function i(t, e) {
            return t[a](e)
        }

        function o(t) {
            if (!t.parentNode) {
                var e = document.createDocumentFragment();
                e.appendChild(t)
            }
        }

        function n(t, e) {
            o(t);
            for (var i = t.parentNode.querySelectorAll(e), n = 0, r = i.length; r > n; n++)
                if (i[n] === t) return !0;
            return !1
        }

        function r(t, e) {
            return o(t), i(t, e)
        }
        var s, a = function() {
            if (e.matchesSelector) return "matchesSelector";
            for (var t = ["webkit", "moz", "ms", "o"], i = 0, o = t.length; o > i; i++) {
                var n = t[i],
                    r = n + "MatchesSelector";
                if (e[r]) return r
            }
        }();
        if (a) {
            var u = document.createElement("div"),
                p = i(u, "div");
            s = p ? i : r
        } else s = n;
        "function" == typeof define && define.amd ? define("matches-selector/matches-selector", [], function() {
            return s
        }) : window.matchesSelector = s
    }(this, Element.prototype),
    function(t) {
        function e(t, e) {
            for (var i in e) t[i] = e[i];
            return t
        }

        function i(t) {
            for (var e in t) return !1;
            return e = null, !0
        }

        function o(t) {
            return t.replace(/([A-Z])/g, function(t) {
                return "-" + t.toLowerCase()
            })
        }

        function n(t, n, r) {
            function a(t, e) {
                t && (this.element = t, this.layout = e, this.position = {
                    x: 0,
                    y: 0
                }, this._create())
            }
            var u = r("transition"),
                p = r("transform"),
                h = u && p,
                f = !!r("perspective"),
                c = {
                    WebkitTransition: "webkitTransitionEnd",
                    MozTransition: "transitionend",
                    OTransition: "otransitionend",
                    transition: "transitionend"
                }[u],
                d = ["transform", "transition", "transitionDuration", "transitionProperty"],
                l = function() {
                    for (var t = {}, e = 0, i = d.length; i > e; e++) {
                        var o = d[e],
                            n = r(o);
                        n && n !== o && (t[o] = n)
                    }
                    return t
                }();
            e(a.prototype, t.prototype), a.prototype._create = function() {
                this._transn = {
                    ingProperties: {},
                    clean: {},
                    onEnd: {}
                }, this.css({
                    position: "absolute"
                })
            }, a.prototype.handleEvent = function(t) {
                var e = "on" + t.type;
                this[e] && this[e](t)
            }, a.prototype.getSize = function() {
                this.size = n(this.element)
            }, a.prototype.css = function(t) {
                var e = this.element.style;
                for (var i in t) {
                    var o = l[i] || i;
                    e[o] = t[i]
                }
            }, a.prototype.getPosition = function() {
                var t = s(this.element),
                    e = this.layout.options,
                    i = e.isOriginLeft,
                    o = e.isOriginTop,
                    n = parseInt(t[i ? "left" : "right"], 10),
                    r = parseInt(t[o ? "top" : "bottom"], 10);
                n = isNaN(n) ? 0 : n, r = isNaN(r) ? 0 : r;
                var a = this.layout.size;
                n -= i ? a.paddingLeft : a.paddingRight, r -= o ? a.paddingTop : a.paddingBottom, this.position.x = n, this.position.y = r
            }, a.prototype.layoutPosition = function() {
                var t = this.layout.size,
                    e = this.layout.options,
                    i = {};
                e.isOriginLeft ? (i.left = this.position.x + t.paddingLeft + "px", i.right = "") : (i.right = this.position.x + t.paddingRight + "px", i.left = ""), e.isOriginTop ? (i.top = this.position.y + t.paddingTop + "px", i.bottom = "") : (i.bottom = this.position.y + t.paddingBottom + "px", i.top = ""), this.css(i), this.emitEvent("layout", [this])
            };
            var y = f ? function(t, e) {
                return "translate3d(" + t + "px, " + e + "px, 0)"
            } : function(t, e) {
                return "translate(" + t + "px, " + e + "px)"
            };
            a.prototype._transitionTo = function(t, e) {
                this.getPosition();
                var i = this.position.x,
                    o = this.position.y,
                    n = parseInt(t, 10),
                    r = parseInt(e, 10),
                    s = n === this.position.x && r === this.position.y;
                if (this.setPosition(t, e), s && !this.isTransitioning) return this.layoutPosition(), void 0;
                var a = t - i,
                    u = e - o,
                    p = {},
                    h = this.layout.options;
                a = h.isOriginLeft ? a : -a, u = h.isOriginTop ? u : -u, p.transform = y(a, u), this.transition({
                    to: p,
                    onTransitionEnd: {
                        transform: this.layoutPosition
                    },
                    isCleaning: !0
                })
            }, a.prototype.goTo = function(t, e) {
                this.setPosition(t, e), this.layoutPosition()
            }, a.prototype.moveTo = h ? a.prototype._transitionTo : a.prototype.goTo, a.prototype.setPosition = function(t, e) {
                this.position.x = parseInt(t, 10), this.position.y = parseInt(e, 10)
            }, a.prototype._nonTransition = function(t) {
                this.css(t.to), t.isCleaning && this._removeStyles(t.to);
                for (var e in t.onTransitionEnd) t.onTransitionEnd[e].call(this)
            }, a.prototype._transition = function(t) {
                if (!parseFloat(this.layout.options.transitionDuration)) return this._nonTransition(t), void 0;
                var e = this._transn;
                for (var i in t.onTransitionEnd) e.onEnd[i] = t.onTransitionEnd[i];
                for (i in t.to) e.ingProperties[i] = !0, t.isCleaning && (e.clean[i] = !0);
                if (t.from) {
                    this.css(t.from);
                    var o = this.element.offsetHeight;
                    o = null
                }
                this.enableTransition(t.to), this.css(t.to), this.isTransitioning = !0
            };
            var m = p && o(p) + ",opacity";
            a.prototype.enableTransition = function() {
                this.isTransitioning || (this.css({
                    transitionProperty: m,
                    transitionDuration: this.layout.options.transitionDuration
                }), this.element.addEventListener(c, this, !1))
            }, a.prototype.transition = a.prototype[u ? "_transition" : "_nonTransition"], a.prototype.onwebkitTransitionEnd = function(t) {
                this.ontransitionend(t)
            }, a.prototype.onotransitionend = function(t) {
                this.ontransitionend(t)
            };
            var g = {
                "-webkit-transform": "transform",
                "-moz-transform": "transform",
                "-o-transform": "transform"
            };
            a.prototype.ontransitionend = function(t) {
                if (t.target === this.element) {
                    var e = this._transn,
                        o = g[t.propertyName] || t.propertyName;
                    if (delete e.ingProperties[o], i(e.ingProperties) && this.disableTransition(), o in e.clean && (this.element.style[t.propertyName] = "", delete e.clean[o]), o in e.onEnd) {
                        var n = e.onEnd[o];
                        n.call(this), delete e.onEnd[o]
                    }
                    this.emitEvent("transitionEnd", [this])
                }
            }, a.prototype.disableTransition = function() {
                this.removeTransitionStyles(), this.element.removeEventListener(c, this, !1), this.isTransitioning = !1
            }, a.prototype._removeStyles = function(t) {
                var e = {};
                for (var i in t) e[i] = "";
                this.css(e)
            };
            var v = {
                transitionProperty: "",
                transitionDuration: ""
            };
            return a.prototype.removeTransitionStyles = function() {
                this.css(v)
            }, a.prototype.removeElem = function() {
                this.element.parentNode.removeChild(this.element), this.emitEvent("remove", [this])
            }, a.prototype.remove = function() {
                if (!u || !parseFloat(this.layout.options.transitionDuration)) return this.removeElem(), void 0;
                var t = this;
                this.on("transitionEnd", function() {
                    return t.removeElem(), !0
                }), this.hide()
            }, a.prototype.reveal = function() {
                delete this.isHidden, this.css({
                    display: ""
                });
                var t = this.layout.options;
                this.transition({
                    from: t.hiddenStyle,
                    to: t.visibleStyle,
                    isCleaning: !0
                })
            }, a.prototype.hide = function() {
                this.isHidden = !0, this.css({
                    display: ""
                });
                var t = this.layout.options;
                this.transition({
                    from: t.visibleStyle,
                    to: t.hiddenStyle,
                    isCleaning: !0,
                    onTransitionEnd: {
                        opacity: function() {
                            this.isHidden && this.css({
                                display: "none"
                            })
                        }
                    }
                })
            }, a.prototype.destroy = function() {
                this.css({
                    position: "",
                    left: "",
                    right: "",
                    top: "",
                    bottom: "",
                    transition: "",
                    transform: ""
                })
            }, a
        }
        var r = t.getComputedStyle,
            s = r ? function(t) {
                return r(t, null)
            } : function(t) {
                return t.currentStyle
            };
        "function" == typeof define && define.amd ? define("outlayer/item", ["eventEmitter/EventEmitter", "get-size/get-size", "get-style-property/get-style-property"], n) : (t.Outlayer = {}, t.Outlayer.Item = n(t.EventEmitter, t.getSize, t.getStyleProperty))
    }(window),
    function(t) {
        function e(t, e) {
            for (var i in e) t[i] = e[i];
            return t
        }

        function i(t) {
            return "[object Array]" === f.call(t)
        }

        function o(t) {
            var e = [];
            if (i(t)) e = t;
            else if (t && "number" == typeof t.length)
                for (var o = 0, n = t.length; n > o; o++) e.push(t[o]);
            else e.push(t);
            return e
        }

        function n(t, e) {
            var i = d(e, t); - 1 !== i && e.splice(i, 1)
        }

        function r(t) {
            return t.replace(/(.)([A-Z])/g, function(t, e, i) {
                return e + "-" + i
            }).toLowerCase()
        }

        function s(i, s, f, d, l, y) {
            function m(t, i) {
                if ("string" == typeof t && (t = a.querySelector(t)), !t || !c(t)) return u && u.error("Bad " + this.constructor.namespace + " element: " + t), void 0;
                this.element = t, this.options = e({}, this.constructor.defaults), this.option(i);
                var o = ++g;
                this.element.outlayerGUID = o, v[o] = this, this._create(), this.options.isInitLayout && this.layout()
            }
            var g = 0,
                v = {};
            return m.namespace = "outlayer", m.Item = y, m.defaults = {
                containerStyle: {
                    position: "relative"
                },
                isInitLayout: !0,
                isOriginLeft: !0,
                isOriginTop: !0,
                isResizeBound: !0,
                isResizingContainer: !0,
                transitionDuration: "0.4s",
                hiddenStyle: {
                    opacity: 0,
                    transform: "scale(0.001)"
                },
                visibleStyle: {
                    opacity: 1,
                    transform: "scale(1)"
                }
            }, e(m.prototype, f.prototype), m.prototype.option = function(t) {
                e(this.options, t)
            }, m.prototype._create = function() {
                this.reloadItems(), this.stamps = [], this.stamp(this.options.stamp), e(this.element.style, this.options.containerStyle), this.options.isResizeBound && this.bindResize()
            }, m.prototype.reloadItems = function() {
                this.items = this._itemize(this.element.children)
            }, m.prototype._itemize = function(t) {
                for (var e = this._filterFindItemElements(t), i = this.constructor.Item, o = [], n = 0, r = e.length; r > n; n++) {
                    var s = e[n],
                        a = new i(s, this);
                    o.push(a)
                }
                return o
            }, m.prototype._filterFindItemElements = function(t) {
                t = o(t);
                for (var e = this.options.itemSelector, i = [], n = 0, r = t.length; r > n; n++) {
                    var s = t[n];
                    if (c(s))
                        if (e) {
                            l(s, e) && i.push(s);
                            for (var a = s.querySelectorAll(e), u = 0, p = a.length; p > u; u++) i.push(a[u])
                        } else i.push(s)
                }
                return i
            }, m.prototype.getItemElements = function() {
                for (var t = [], e = 0, i = this.items.length; i > e; e++) t.push(this.items[e].element);
                return t
            }, m.prototype.layout = function() {
                this._resetLayout(), this._manageStamps();
                var t = void 0 !== this.options.isLayoutInstant ? this.options.isLayoutInstant : !this._isLayoutInited;
                this.layoutItems(this.items, t), this._isLayoutInited = !0
            }, m.prototype._init = m.prototype.layout, m.prototype._resetLayout = function() {
                this.getSize()
            }, m.prototype.getSize = function() {
                this.size = d(this.element)
            }, m.prototype._getMeasurement = function(t, e) {
                var i, o = this.options[t];
                o ? ("string" == typeof o ? i = this.element.querySelector(o) : c(o) && (i = o), this[t] = i ? d(i)[e] : o) : this[t] = 0
            }, m.prototype.layoutItems = function(t, e) {
                t = this._getItemsForLayout(t), this._layoutItems(t, e), this._postLayout()
            }, m.prototype._getItemsForLayout = function(t) {
                for (var e = [], i = 0, o = t.length; o > i; i++) {
                    var n = t[i];
                    n.isIgnored || e.push(n)
                }
                return e
            }, m.prototype._layoutItems = function(t, e) {
                function i() {
                    o.emitEvent("layoutComplete", [o, t])
                }
                var o = this;
                if (!t || !t.length) return i(), void 0;
                this._itemsOn(t, "layout", i);
                for (var n = [], r = 0, s = t.length; s > r; r++) {
                    var a = t[r],
                        u = this._getItemLayoutPosition(a);
                    u.item = a, u.isInstant = e || a.isLayoutInstant, n.push(u)
                }
                this._processLayoutQueue(n)
            }, m.prototype._getItemLayoutPosition = function() {
                return {
                    x: 0,
                    y: 0
                }
            }, m.prototype._processLayoutQueue = function(t) {
                for (var e = 0, i = t.length; i > e; e++) {
                    var o = t[e];
                    this._positionItem(o.item, o.x, o.y, o.isInstant)
                }
            }, m.prototype._positionItem = function(t, e, i, o) {
                o ? t.goTo(e, i) : t.moveTo(e, i)
            }, m.prototype._postLayout = function() {
                this.resizeContainer()
            }, m.prototype.resizeContainer = function() {
                if (this.options.isResizingContainer) {
                    var t = this._getContainerSize();
                    t && (this._setContainerMeasure(t.width, !0), this._setContainerMeasure(t.height, !1))
                }
            }, m.prototype._getContainerSize = h, m.prototype._setContainerMeasure = function(t, e) {
                if (void 0 !== t) {
                    var i = this.size;
                    i.isBorderBox && (t += e ? i.paddingLeft + i.paddingRight + i.borderLeftWidth + i.borderRightWidth : i.paddingBottom + i.paddingTop + i.borderTopWidth + i.borderBottomWidth), t = Math.max(t, 0), this.element.style[e ? "width" : "height"] = t + "px"
                }
            }, m.prototype._itemsOn = function(t, e, i) {
                function o() {
                    return n++, n === r && i.call(s), !0
                }
                for (var n = 0, r = t.length, s = this, a = 0, u = t.length; u > a; a++) {
                    var p = t[a];
                    p.on(e, o)
                }
            }, m.prototype.ignore = function(t) {
                var e = this.getItem(t);
                e && (e.isIgnored = !0)
            }, m.prototype.unignore = function(t) {
                var e = this.getItem(t);
                e && delete e.isIgnored
            }, m.prototype.stamp = function(t) {
                if (t = this._find(t)) {
                    this.stamps = this.stamps.concat(t);
                    for (var e = 0, i = t.length; i > e; e++) {
                        var o = t[e];
                        this.ignore(o)
                    }
                }
            }, m.prototype.unstamp = function(t) {
                if (t = this._find(t))
                    for (var e = 0, i = t.length; i > e; e++) {
                        var o = t[e];
                        n(o, this.stamps), this.unignore(o)
                    }
            }, m.prototype._find = function(t) {
                return t ? ("string" == typeof t && (t = this.element.querySelectorAll(t)), t = o(t)) : void 0
            }, m.prototype._manageStamps = function() {
                if (this.stamps && this.stamps.length) {
                    this._getBoundingRect();
                    for (var t = 0, e = this.stamps.length; e > t; t++) {
                        var i = this.stamps[t];
                        this._manageStamp(i)
                    }
                }
            }, m.prototype._getBoundingRect = function() {
                var t = this.element.getBoundingClientRect(),
                    e = this.size;
                this._boundingRect = {
                    left: t.left + e.paddingLeft + e.borderLeftWidth,
                    top: t.top + e.paddingTop + e.borderTopWidth,
                    right: t.right - (e.paddingRight + e.borderRightWidth),
                    bottom: t.bottom - (e.paddingBottom + e.borderBottomWidth)
                }
            }, m.prototype._manageStamp = h, m.prototype._getElementOffset = function(t) {
                var e = t.getBoundingClientRect(),
                    i = this._boundingRect,
                    o = d(t),
                    n = {
                        left: e.left - i.left - o.marginLeft,
                        top: e.top - i.top - o.marginTop,
                        right: i.right - e.right - o.marginRight,
                        bottom: i.bottom - e.bottom - o.marginBottom
                    };
                return n
            }, m.prototype.handleEvent = function(t) {
                var e = "on" + t.type;
                this[e] && this[e](t)
            }, m.prototype.bindResize = function() {
                this.isResizeBound || (i.bind(t, "resize", this), this.isResizeBound = !0)
            }, m.prototype.unbindResize = function() {
                this.isResizeBound && i.unbind(t, "resize", this), this.isResizeBound = !1
            }, m.prototype.onresize = function() {
                function t() {
                    e.resize(), delete e.resizeTimeout
                }
                this.resizeTimeout && clearTimeout(this.resizeTimeout);
                var e = this;
                this.resizeTimeout = setTimeout(t, 100)
            }, m.prototype.resize = function() {
                this.isResizeBound && this.needsResizeLayout() && this.layout()
            }, m.prototype.needsResizeLayout = function() {
                var t = d(this.element),
                    e = this.size && t;
                return e && t.innerWidth !== this.size.innerWidth
            }, m.prototype.addItems = function(t) {
                var e = this._itemize(t);
                return e.length && (this.items = this.items.concat(e)), e
            }, m.prototype.appended = function(t) {
                var e = this.addItems(t);
                e.length && (this.layoutItems(e, !0), this.reveal(e))
            }, m.prototype.prepended = function(t) {
                var e = this._itemize(t);
                if (e.length) {
                    var i = this.items.slice(0);
                    this.items = e.concat(i), this._resetLayout(), this._manageStamps(), this.layoutItems(e, !0), this.reveal(e), this.layoutItems(i)
                }
            }, m.prototype.reveal = function(t) {
                var e = t && t.length;
                if (e)
                    for (var i = 0; e > i; i++) {
                        var o = t[i];
                        o.reveal()
                    }
            }, m.prototype.hide = function(t) {
                var e = t && t.length;
                if (e)
                    for (var i = 0; e > i; i++) {
                        var o = t[i];
                        o.hide()
                    }
            }, m.prototype.getItem = function(t) {
                for (var e = 0, i = this.items.length; i > e; e++) {
                    var o = this.items[e];
                    if (o.element === t) return o
                }
            }, m.prototype.getItems = function(t) {
                if (t && t.length) {
                    for (var e = [], i = 0, o = t.length; o > i; i++) {
                        var n = t[i],
                            r = this.getItem(n);
                        r && e.push(r)
                    }
                    return e
                }
            }, m.prototype.remove = function(t) {
                t = o(t);
                var e = this.getItems(t);
                if (e && e.length) {
                    this._itemsOn(e, "remove", function() {
                        this.emitEvent("removeComplete", [this, e])
                    });
                    for (var i = 0, r = e.length; r > i; i++) {
                        var s = e[i];
                        s.remove(), n(s, this.items)
                    }
                }
            }, m.prototype.destroy = function() {
                var t = this.element.style;
                t.height = "", t.position = "", t.width = "";
                for (var e = 0, i = this.items.length; i > e; e++) {
                    var o = this.items[e];
                    o.destroy()
                }
                this.unbindResize(), delete this.element.outlayerGUID, p && p.removeData(this.element, this.constructor.namespace)
            }, m.data = function(t) {
                var e = t && t.outlayerGUID;
                return e && v[e]
            }, m.create = function(t, i) {
                function o() {
                    m.apply(this, arguments)
                }
                return Object.create ? o.prototype = Object.create(m.prototype) : e(o.prototype, m.prototype), o.prototype.constructor = o, o.defaults = e({}, m.defaults), e(o.defaults, i), o.prototype.settings = {}, o.namespace = t, o.data = m.data, o.Item = function() {
                    y.apply(this, arguments)
                }, o.Item.prototype = new y, s(function() {
                    for (var e = r(t), i = a.querySelectorAll(".js-" + e), n = "data-" + e + "-options", s = 0, h = i.length; h > s; s++) {
                        var f, c = i[s],
                            d = c.getAttribute(n);
                        try {
                            f = d && JSON.parse(d)
                        } catch (l) {
                            u && u.error("Error parsing " + n + " on " + c.nodeName.toLowerCase() + (c.id ? "#" + c.id : "") + ": " + l);
                            continue
                        }
                        var y = new o(c, f);
                        p && p.data(c, t, y)
                    }
                }), p && p.bridget && p.bridget(t, o), o
            }, m.Item = y, m
        }
        var a = t.document,
            u = t.console,
            p = t.jQuery,
            h = function() {},
            f = Object.prototype.toString,
            c = "object" == typeof HTMLElement ? function(t) {
                return t instanceof HTMLElement
            } : function(t) {
                return t && "object" == typeof t && 1 === t.nodeType && "string" == typeof t.nodeName
            },
            d = Array.prototype.indexOf ? function(t, e) {
                return t.indexOf(e)
            } : function(t, e) {
                for (var i = 0, o = t.length; o > i; i++)
                    if (t[i] === e) return i;
                return -1
            };
        "function" == typeof define && define.amd ? define("outlayer/outlayer", ["eventie/eventie", "doc-ready/doc-ready", "eventEmitter/EventEmitter", "get-size/get-size", "matches-selector/matches-selector", "./item"], s) : t.Outlayer = s(t.eventie, t.docReady, t.EventEmitter, t.getSize, t.matchesSelector, t.Outlayer.Item)
    }(window),
    function(t) {
        function e(t) {
            function e() {
                t.Item.apply(this, arguments)
            }
            return e.prototype = new t.Item, e.prototype._create = function() {
                this.id = this.layout.itemGUID++, t.Item.prototype._create.call(this), this.sortData = {}
            }, e.prototype.updateSortData = function() {
                if (!this.isIgnored) {
                    this.sortData.id = this.id, this.sortData["original-order"] = this.id, this.sortData.random = Math.random();
                    var t = this.layout.options.getSortData,
                        e = this.layout._sorters;
                    for (var i in t) {
                        var o = e[i];
                        this.sortData[i] = o(this.element, this)
                    }
                }
            }, e
        }
        "function" == typeof define && define.amd ? define("isotope/js/item", ["outlayer/outlayer"], e) : (t.Isotope = t.Isotope || {}, t.Isotope.Item = e(t.Outlayer))
    }(window),
    function(t) {
        function e(t, e) {
            function i(t) {
                this.isotope = t, t && (this.options = t.options[this.namespace], this.element = t.element, this.items = t.filteredItems, this.size = t.size)
            }
            return function() {
                function t(t) {
                    return function() {
                        return e.prototype[t].apply(this.isotope, arguments)
                    }
                }
                for (var o = ["_resetLayout", "_getItemLayoutPosition", "_manageStamp", "_getContainerSize", "_getElementOffset", "needsResizeLayout"], n = 0, r = o.length; r > n; n++) {
                    var s = o[n];
                    i.prototype[s] = t(s)
                }
            }(), i.prototype.needsVerticalResizeLayout = function() {
                var e = t(this.isotope.element),
                    i = this.isotope.size && e;
                return i && e.innerHeight !== this.isotope.size.innerHeight
            }, i.prototype._getMeasurement = function() {
                this.isotope._getMeasurement.apply(this, arguments)
            }, i.prototype.getColumnWidth = function() {
                this.getSegmentSize("column", "Width")
            }, i.prototype.getRowHeight = function() {
                this.getSegmentSize("row", "Height")
            }, i.prototype.getSegmentSize = function(t, e) {
                var i = t + e,
                    o = "outer" + e;
                if (this._getMeasurement(i, o), !this[i]) {
                    var n = this.getFirstItemSize();
                    this[i] = n && n[o] || this.isotope.size["inner" + e]
                }
            }, i.prototype.getFirstItemSize = function() {
                var e = this.isotope.filteredItems[0];
                return e && e.element && t(e.element)
            }, i.prototype.layout = function() {
                this.isotope.layout.apply(this.isotope, arguments)
            }, i.prototype.getSize = function() {
                this.isotope.getSize(), this.size = this.isotope.size
            }, i.modes = {}, i.create = function(t, e) {
                function o() {
                    i.apply(this, arguments)
                }
                return o.prototype = new i, e && (o.options = e), o.prototype.namespace = t, i.modes[t] = o, o
            }, i
        }
        "function" == typeof define && define.amd ? define("isotope/js/layout-mode", ["get-size/get-size", "outlayer/outlayer"], e) : (t.Isotope = t.Isotope || {}, t.Isotope.LayoutMode = e(t.getSize, t.Outlayer))
    }(window),
    function(t) {
        function e(t, e) {
            var o = t.create("masonry");
            return o.prototype._resetLayout = function() {
                this.getSize(), this._getMeasurement("columnWidth", "outerWidth"), this._getMeasurement("gutter", "outerWidth"), this.measureColumns();
                var t = this.cols;
                for (this.colYs = []; t--;) this.colYs.push(0);
                this.maxY = 0
            }, o.prototype.measureColumns = function() {
                if (this.getContainerWidth(), !this.columnWidth) {
                    var t = this.items[0],
                        i = t && t.element;
                    this.columnWidth = i && e(i).outerWidth || this.containerWidth
                }
                this.columnWidth += this.gutter, this.cols = Math.floor((this.containerWidth + this.gutter) / this.columnWidth), this.cols = Math.max(this.cols, 1)
            }, o.prototype.getContainerWidth = function() {
                var t = this.options.isFitWidth ? this.element.parentNode : this.element,
                    i = e(t);
                this.containerWidth = i && i.innerWidth
            }, o.prototype._getItemLayoutPosition = function(t) {
                t.getSize();
                var e = t.size.outerWidth % this.columnWidth,
                    o = e && 1 > e ? "round" : "ceil",
                    n = Math[o](t.size.outerWidth / this.columnWidth);
                n = Math.min(n, this.cols);
                for (var r = this._getColGroup(n), s = Math.min.apply(Math, r), a = i(r, s), u = {
                    x: this.columnWidth * a,
                    y: s
                }, p = s + t.size.outerHeight, h = this.cols + 1 - r.length, f = 0; h > f; f++) this.colYs[a + f] = p;
                return u
            }, o.prototype._getColGroup = function(t) {
                if (2 > t) return this.colYs;
                for (var e = [], i = this.cols + 1 - t, o = 0; i > o; o++) {
                    var n = this.colYs.slice(o, o + t);
                    e[o] = Math.max.apply(Math, n)
                }
                return e
            }, o.prototype._manageStamp = function(t) {
                var i = e(t),
                    o = this._getElementOffset(t),
                    n = this.options.isOriginLeft ? o.left : o.right,
                    r = n + i.outerWidth,
                    s = Math.floor(n / this.columnWidth);
                s = Math.max(0, s);
                var a = Math.floor(r / this.columnWidth);
                a -= r % this.columnWidth ? 0 : 1, a = Math.min(this.cols - 1, a);
                for (var u = (this.options.isOriginTop ? o.top : o.bottom) + i.outerHeight, p = s; a >= p; p++) this.colYs[p] = Math.max(u, this.colYs[p])
            }, o.prototype._getContainerSize = function() {
                this.maxY = Math.max.apply(Math, this.colYs);
                var t = {
                    height: this.maxY
                };
                return this.options.isFitWidth && (t.width = this._getContainerFitWidth()), t
            }, o.prototype._getContainerFitWidth = function() {
                for (var t = 0, e = this.cols; --e && 0 === this.colYs[e];) t++;
                return (this.cols - t) * this.columnWidth - this.gutter
            }, o.prototype.needsResizeLayout = function() {
                var t = this.containerWidth;
                return this.getContainerWidth(), t !== this.containerWidth
            }, o
        }
        var i = Array.prototype.indexOf ? function(t, e) {
            return t.indexOf(e)
        } : function(t, e) {
            for (var i = 0, o = t.length; o > i; i++) {
                var n = t[i];
                if (n === e) return i
            }
            return -1
        };
        "function" == typeof define && define.amd ? define("masonry/masonry", ["outlayer/outlayer", "get-size/get-size"], e) : t.Masonry = e(t.Outlayer, t.getSize)
    }(window),
    function(t) {
        function e(t, e) {
            for (var i in e) t[i] = e[i];
            return t
        }

        function i(t, i) {
            var o = t.create("masonry"),
                n = o.prototype._getElementOffset,
                r = o.prototype.layout,
                s = o.prototype._getMeasurement;
            e(o.prototype, i.prototype), o.prototype._getElementOffset = n, o.prototype.layout = r, o.prototype._getMeasurement = s;
            var a = o.prototype.measureColumns;
            o.prototype.measureColumns = function() {
                this.items = this.isotope.filteredItems, a.call(this)
            };
            var u = o.prototype._manageStamp;
            return o.prototype._manageStamp = function() {
                this.options.isOriginLeft = this.isotope.options.isOriginLeft, this.options.isOriginTop = this.isotope.options.isOriginTop, u.apply(this, arguments)
            }, o
        }
        "function" == typeof define && define.amd ? define("isotope/js/layout-modes/masonry", ["../layout-mode", "masonry/masonry"], i) : i(t.Isotope.LayoutMode, t.Masonry)
    }(window),
    function(t) {
        function e(t) {
            var e = t.create("fitRows");
            return e.prototype._resetLayout = function() {
                this.x = 0, this.y = 0, this.maxY = 0
            }, e.prototype._getItemLayoutPosition = function(t) {
                t.getSize(), 0 !== this.x && t.size.outerWidth + this.x > this.isotope.size.innerWidth && (this.x = 0, this.y = this.maxY);
                var e = {
                    x: this.x,
                    y: this.y
                };
                return this.maxY = Math.max(this.maxY, this.y + t.size.outerHeight), this.x += t.size.outerWidth, e
            }, e.prototype._getContainerSize = function() {
                return {
                    height: this.maxY
                }
            }, e
        }
        "function" == typeof define && define.amd ? define("isotope/js/layout-modes/fit-rows", ["../layout-mode"], e) : e(t.Isotope.LayoutMode)
    }(window),
    function(t) {
        function e(t) {
            var e = t.create("vertical", {
                horizontalAlignment: 0
            });
            return e.prototype._resetLayout = function() {
                this.y = 0
            }, e.prototype._getItemLayoutPosition = function(t) {
                t.getSize();
                var e = (this.isotope.size.innerWidth - t.size.outerWidth) * this.options.horizontalAlignment,
                    i = this.y;
                return this.y += t.size.outerHeight, {
                    x: e,
                    y: i
                }
            }, e.prototype._getContainerSize = function() {
                return {
                    height: this.y
                }
            }, e
        }
        "function" == typeof define && define.amd ? define("isotope/js/layout-modes/vertical", ["../layout-mode"], e) : e(t.Isotope.LayoutMode)
    }(window),
    function(t) {
        function e(t, e) {
            for (var i in e) t[i] = e[i];
            return t
        }

        function i(t) {
            return "[object Array]" === h.call(t)
        }

        function o(t) {
            var e = [];
            if (i(t)) e = t;
            else if (t && "number" == typeof t.length)
                for (var o = 0, n = t.length; n > o; o++) e.push(t[o]);
            else e.push(t);
            return e
        }

        function n(t, e) {
            var i = f(e, t); - 1 !== i && e.splice(i, 1)
        }

        function r(t, i, r, u, h) {
            function f(t, e) {
                return function(i, o) {
                    for (var n = 0, r = t.length; r > n; n++) {
                        var s = t[n],
                            a = i.sortData[s],
                            u = o.sortData[s];
                        if (a > u || u > a) {
                            var p = void 0 !== e[s] ? e[s] : e,
                                h = p ? 1 : -1;
                            return (a > u ? 1 : -1) * h
                        }
                    }
                    return 0
                }
            }
            var c = t.create("isotope", {
                layoutMode: "masonry",
                isJQueryFiltering: !0,
                sortAscending: !0
            });
            c.Item = u, c.LayoutMode = h, c.prototype._create = function() {
                this.itemGUID = 0, this._sorters = {}, this._getSorters(), t.prototype._create.call(this), this.modes = {}, this.filteredItems = this.items, this.sortHistory = ["original-order"];
                for (var e in h.modes) this._initLayoutMode(e)
            }, c.prototype.reloadItems = function() {
                this.itemGUID = 0, t.prototype.reloadItems.call(this)
            }, c.prototype._itemize = function() {
                for (var e = t.prototype._itemize.apply(this, arguments), i = 0, o = e.length; o > i; i++) {
                    var n = e[i];
                    n.id = this.itemGUID++
                }
                return this._updateItemsSortData(e), e
            }, c.prototype._initLayoutMode = function(t) {
                var i = h.modes[t],
                    o = this.options[t] || {};
                this.options[t] = i.options ? e(i.options, o) : o, this.modes[t] = new i(this)
            }, c.prototype.layout = function() {
                return !this._isLayoutInited && this.options.isInitLayout ? (this.arrange(), void 0) : (this._layout(), void 0)
            }, c.prototype._layout = function() {
                var t = this._getIsInstant();
                this._resetLayout(), this._manageStamps(), this.layoutItems(this.filteredItems, t), this._isLayoutInited = !0
            }, c.prototype.arrange = function(t) {
                this.option(t), this._getIsInstant(), this.filteredItems = this._filter(this.items), this._sort(), this._layout()
            }, c.prototype._init = c.prototype.arrange, c.prototype._getIsInstant = function() {
                var t = void 0 !== this.options.isLayoutInstant ? this.options.isLayoutInstant : !this._isLayoutInited;
                return this._isInstant = t, t
            }, c.prototype._filter = function(t) {
                function e() {
                    f.reveal(n), f.hide(r)
                }
                var i = this.options.filter;
                i = i || "*";
                for (var o = [], n = [], r = [], s = this._getFilterTest(i), a = 0, u = t.length; u > a; a++) {
                    var p = t[a];
                    if (!p.isIgnored) {
                        var h = s(p);
                        h && o.push(p), h && p.isHidden ? n.push(p) : h || p.isHidden || r.push(p)
                    }
                }
                var f = this;
                return this._isInstant ? this._noTransition(e) : e(), o
            }, c.prototype._getFilterTest = function(t) {
                return s && this.options.isJQueryFiltering ? function(e) {
                    return s(e.element).is(t)
                } : "function" == typeof t ? function(e) {
                    return t(e.element)
                } : function(e) {
                    return r(e.element, t)
                }
            }, c.prototype.updateSortData = function(t) {
                this._getSorters(), t = o(t);
                var e = this.getItems(t);
                e = e.length ? e : this.items, this._updateItemsSortData(e)
            }, c.prototype._getSorters = function() {
                var t = this.options.getSortData;
                for (var e in t) {
                    var i = t[e];
                    this._sorters[e] = d(i)
                }
            }, c.prototype._updateItemsSortData = function(t) {
                for (var e = 0, i = t.length; i > e; e++) {
                    var o = t[e];
                    o.updateSortData()
                }
            };
            var d = function() {
                function t(t) {
                    if ("string" != typeof t) return t;
                    var i = a(t).split(" "),
                        o = i[0],
                        n = o.match(/^\[(.+)\]$/),
                        r = n && n[1],
                        s = e(r, o),
                        u = c.sortDataParsers[i[1]];
                    return t = u ? function(t) {
                        return t && u(s(t))
                    } : function(t) {
                        return t && s(t)
                    }
                }

                function e(t, e) {
                    var i;
                    return i = t ? function(e) {
                        return e.getAttribute(t)
                    } : function(t) {
                        var i = t.querySelector(e);
                        return i && p(i)
                    }
                }
                return t
            }();
            c.sortDataParsers = {
                parseInt: function(t) {
                    return parseInt(t, 10)
                },
                parseFloat: function(t) {
                    return parseFloat(t)
                }
            }, c.prototype._sort = function() {
                var t = this.options.sortBy;
                if (t) {
                    var e = [].concat.apply(t, this.sortHistory),
                        i = f(e, this.options.sortAscending);
                    this.filteredItems.sort(i), t !== this.sortHistory[0] && this.sortHistory.unshift(t)
                }
            }, c.prototype._mode = function() {
                var t = this.options.layoutMode,
                    e = this.modes[t];
                if (!e) throw Error("No layout mode: " + t);
                return e.options = this.options[t], e
            }, c.prototype._resetLayout = function() {
                t.prototype._resetLayout.call(this), this._mode()._resetLayout()
            }, c.prototype._getItemLayoutPosition = function(t) {
                return this._mode()._getItemLayoutPosition(t)
            }, c.prototype._manageStamp = function(t) {
                this._mode()._manageStamp(t)
            }, c.prototype._getContainerSize = function() {
                return this._mode()._getContainerSize()
            }, c.prototype.needsResizeLayout = function() {
                return this._mode().needsResizeLayout()
            }, c.prototype.appended = function(t) {
                var e = this.addItems(t);
                if (e.length) {
                    var i = this._filterRevealAdded(e);
                    this.filteredItems = this.filteredItems.concat(i)
                }
            }, c.prototype.prepended = function(t) {
                var e = this._itemize(t);
                if (e.length) {
                    var i = this.items.slice(0);
                    this.items = e.concat(i), this._resetLayout(), this._manageStamps();
                    var o = this._filterRevealAdded(e);
                    this.layoutItems(i), this.filteredItems = o.concat(this.filteredItems)
                }
            }, c.prototype._filterRevealAdded = function(t) {
                var e = this._noTransition(function() {
                    return this._filter(t)
                });
                return this.layoutItems(e, !0), this.reveal(e), t
            }, c.prototype.insert = function(t) {
                var e = this.addItems(t);
                if (e.length) {
                    var i, o, n = e.length;
                    for (i = 0; n > i; i++) o = e[i], this.element.appendChild(o.element);
                    var r = this._filter(e);
                    for (this._noTransition(function() {
                        this.hide(r)
                    }), i = 0; n > i; i++) e[i].isLayoutInstant = !0;
                    for (this.arrange(), i = 0; n > i; i++) delete e[i].isLayoutInstant;
                    this.reveal(r)
                }
            };
            var l = c.prototype.remove;
            return c.prototype.remove = function(t) {
                t = o(t);
                var e = this.getItems(t);
                if (l.call(this, t), e && e.length)
                    for (var i = 0, r = e.length; r > i; i++) {
                        var s = e[i];
                        n(s, this.filteredItems)
                    }
            }, c.prototype._noTransition = function(t) {
                var e = this.options.transitionDuration;
                this.options.transitionDuration = 0;
                var i = t.call(this);
                return this.options.transitionDuration = e, i
            }, c
        }
        var s = t.jQuery,
            a = String.prototype.trim ? function(t) {
                return t.trim()
            } : function(t) {
                return t.replace(/^\s+|\s+$/g, "")
            },
            u = document.documentElement,
            p = u.textContent ? function(t) {
                return t.textContent
            } : function(t) {
                return t.innerText
            },
            h = Object.prototype.toString,
            f = Array.prototype.indexOf ? function(t, e) {
                return t.indexOf(e)
            } : function(t, e) {
                for (var i = 0, o = t.length; o > i; i++)
                    if (t[i] === e) return i;
                return -1
            };
        "function" == typeof define && define.amd ? define(["outlayer/outlayer", "get-size/get-size", "matches-selector/matches-selector", "isotope/js/item", "isotope/js/layout-mode", "isotope/js/layout-modes/masonry", "isotope/js/layout-modes/fit-rows", "isotope/js/layout-modes/vertical"], r) : t.Isotope = r(t.Outlayer, t.getSize, t.matchesSelector, t.Isotope.Item, t.Isotope.LayoutMode)
    }(window);
/*! fluidvids.js v2.4.1 | (c) 2014 @toddmotto | https://github.com/toddmotto/fluidvids */
! function(e, t) {
    "function" == typeof define && define.amd ? define(t) : "object" == typeof exports ? module.exports = t : e.fluidvids = t()
}(this, function() {
    "use strict";

    function e(e) {
        return new RegExp("^(https?:)?//(?:" + d.players.join("|") + ").*$", "i").test(e)
    }

    function t(e, t) {
        return parseInt(e, 10) / parseInt(t, 10) * 100 + "%"
    }

    function i(i) {
        if (e(i.src) && !i.getAttribute("data-fluidvids")) {
            var n = document.createElement("div");
            i.parentNode.insertBefore(n, i), i.className += (i.className ? " " : "") + "fluidvids-item", i.setAttribute("data-fluidvids", "loaded"), n.className += "fluidvids", n.style.paddingTop = t(i.height, i.width), n.appendChild(i)
        }
    }

    function n() {
        var e = document.createElement("div");
        e.innerHTML = "<p>x</p><style>" + o + "</style>", r.appendChild(e.childNodes[1])
    }
    var d = {
            selector: ["iframe"],
            players: ["www.youtube.com", "player.vimeo.com"]
        },
        o = [".fluidvids {", "width: 100%; max-width: 100%; position: relative;", "}", ".fluidvids-item {", "position: absolute; top: 0px; left: 0px; width: 100%; height: 100%;", "}"].join(""),
        r = document.head || document.getElementsByTagName("head")[0];
    return d.render = function() {
        for (var e = document.querySelectorAll(d.selector.join()), t = e.length; t--;) i(e[t])
    }, d.init = function(e) {
        for (var t in e) d[t] = e[t];
        d.render(), n()
    }, d
});
/*! http://mths.be/placeholder v2.0.8 by @mathias */
/*! http://mths.be/placeholder v2.0.8 by @mathias */
! function(e, a, t) {
    function l(e) {
        var a = {},
            l = /^jQuery\d+$/;
        return t.each(e.attributes, function(e, t) {
            t.specified && !l.test(t.name) && (a[t.name] = t.value)
        }), a
    }

    function r(e, a) {
        var l = this,
            r = t(l);
        if (l.value == r.attr("placeholder") && r.hasClass("placeholder"))
            if (r.data("placeholder-password")) {
                if (r = r.hide().next().show().attr("id", r.removeAttr("id").data("placeholder-id")), e === !0) return r[0].value = a;
                r.focus()
            } else l.value = "", r.removeClass("placeholder"), l == d() && l.select()
    }

    function o() {
        var e, a = this,
            o = t(a),
            d = this.id;
        if ("" == a.value) {
            if ("password" == a.type) {
                if (!o.data("placeholder-textinput")) {
                    try {
                        e = o.clone().attr({
                            type: "text"
                        })
                    } catch (c) {
                        e = t("<input>").attr(t.extend(l(this), {
                            type: "text"
                        }))
                    }
                    e.removeAttr("name").data({
                        "placeholder-password": o,
                        "placeholder-id": d
                    }).bind("focus.placeholder", r), o.data({
                        "placeholder-textinput": e,
                        "placeholder-id": d
                    }).before(e)
                }
                o = o.removeAttr("id").hide().prev().attr("id", d).show()
            }
            o.addClass("placeholder"), o[0].value = o.attr("placeholder")
        } else o.removeClass("placeholder")
    }

    function d() {
        try {
            return a.activeElement
        } catch (e) {}
    }
    var c, n, i = "[object OperaMini]" == Object.prototype.toString.call(e.operamini),
        p = "placeholder" in a.createElement("input") && !i,
        u = "placeholder" in a.createElement("textarea") && !i,
        h = t.fn,
        s = t.valHooks,
        v = t.propHooks;
    p && u ? (n = h.placeholder = function() {
        return this
    }, n.input = n.textarea = !0) : (n = h.placeholder = function() {
        var e = this;
        return e.filter((p ? "textarea" : ":input") + "[placeholder]").not(".placeholder").bind({
            "focus.placeholder": r,
            "blur.placeholder": o
        }).data("placeholder-enabled", !0).trigger("blur.placeholder"), e
    }, n.input = p, n.textarea = u, c = {
        get: function(e) {
            var a = t(e),
                l = a.data("placeholder-password");
            return l ? l[0].value : a.data("placeholder-enabled") && a.hasClass("placeholder") ? "" : e.value
        },
        set: function(e, a) {
            var l = t(e),
                c = l.data("placeholder-password");
            return c ? c[0].value = a : l.data("placeholder-enabled") ? ("" == a ? (e.value = a, e != d() && o.call(e)) : l.hasClass("placeholder") ? r.call(e, !0, a) || (e.value = a) : e.value = a, l) : e.value = a
        }
    }, p || (s.input = c, v.value = c), u || (s.textarea = c, v.value = c), t(function() {
        t(a).delegate("form", "submit.placeholder", function() {
            var e = t(".placeholder", this).each(r);
            setTimeout(function() {
                e.each(o)
            }, 10)
        })
    }), t(e).bind("beforeunload.placeholder", function() {
        t(".placeholder").each(function() {
            this.value = ""
        })
    }))
}(this, document, jQuery);
/*!
 * MediaElement.js
 * HTML5 <video> and <audio> shim and player
 * http://mediaelementjs.com/
 *
 * Creates a JavaScript object that mimics HTML5 MediaElement API
 * for browsers that don't understand HTML5 or can't play the provided codec
 * Can play MP4 (H.264), Ogg, WebM, FLV, WMV, WMA, ACC, and MP3
 *
 * Copyright 2010-2014, John Dyer (http://j.hn)
 * License: MIT
 *
 */
var mejs = mejs || {};
mejs.version = "2.14.2";
mejs.meIndex = 0;
mejs.plugins = {
    silverlight: [{
        version: [3, 0],
        types: ["video/mp4", "video/m4v", "video/mov", "video/wmv", "audio/wma", "audio/m4a", "audio/mp3", "audio/wav", "audio/mpeg"]
    }],
    flash: [{
        version: [9, 0, 124],
        types: ["video/mp4", "video/m4v", "video/mov", "video/flv", "video/rtmp", "video/x-flv", "audio/flv", "audio/x-flv", "audio/mp3", "audio/m4a", "audio/mpeg", "video/youtube", "video/x-youtube"]
    }],
    youtube: [{
        version: null,
        types: ["video/youtube", "video/x-youtube", "audio/youtube", "audio/x-youtube"]
    }],
    vimeo: [{
        version: null,
        types: ["video/vimeo",
            "video/x-vimeo"
        ]
    }]
};
mejs.Utility = {
    encodeUrl: function(a) {
        return encodeURIComponent(a)
    },
    escapeHTML: function(a) {
        return a.toString().split("&").join("&amp;").split("<").join("&lt;").split('"').join("&quot;")
    },
    absolutizeUrl: function(a) {
        var b = document.createElement("div");
        b.innerHTML = '<a href="' + this.escapeHTML(a) + '">x</a>';
        return b.firstChild.href
    },
    getScriptPath: function(a) {
        for (var b = 0, c, d = "", e = "", g, f, i = document.getElementsByTagName("script"), k = i.length, h = a.length; b < k; b++) {
            g = i[b].src;
            c = g.lastIndexOf("/");
            if (c > -1) {
                f = g.substring(c +
                    1);
                g = g.substring(0, c + 1)
            } else {
                f = g;
                g = ""
            }
            for (c = 0; c < h; c++) {
                e = a[c];
                e = f.indexOf(e);
                if (e > -1) {
                    d = g;
                    break
                }
            }
            if (d !== "") break
        }
        return d
    },
    secondsToTimeCode: function(a, b, c, d) {
        if (typeof c == "undefined") c = false;
        else if (typeof d == "undefined") d = 25;
        var e = Math.floor(a / 3600) % 24,
            g = Math.floor(a / 60) % 60,
            f = Math.floor(a % 60);
        a = Math.floor((a % 1 * d).toFixed(3));
        return (b || e > 0 ? (e < 10 ? "0" + e : e) + ":" : "") + (g < 10 ? "0" + g : g) + ":" + (f < 10 ? "0" + f : f) + (c ? ":" + (a < 10 ? "0" + a : a) : "")
    },
    timeCodeToSeconds: function(a, b, c, d) {
        if (typeof c == "undefined") c = false;
        else if (typeof d ==
            "undefined") d = 25;
        a = a.split(":");
        b = parseInt(a[0], 10);
        var e = parseInt(a[1], 10),
            g = parseInt(a[2], 10),
            f = 0,
            i = 0;
        if (c) f = parseInt(a[3]) / d;
        return i = b * 3600 + e * 60 + g + f
    },
    convertSMPTEtoSeconds: function(a) {
        if (typeof a != "string") return false;
        a = a.replace(",", ".");
        var b = 0,
            c = a.indexOf(".") != -1 ? a.split(".")[1].length : 0,
            d = 1;
        a = a.split(":").reverse();
        for (var e = 0; e < a.length; e++) {
            d = 1;
            if (e > 0) d = Math.pow(60, e);
            b += Number(a[e]) * d
        }
        return Number(b.toFixed(c))
    },
    removeSwf: function(a) {
        var b = document.getElementById(a);
        if (b && /object|embed/i.test(b.nodeName))
            if (mejs.MediaFeatures.isIE) {
                b.style.display =
                    "none";
                (function() {
                    b.readyState == 4 ? mejs.Utility.removeObjectInIE(a) : setTimeout(arguments.callee, 10)
                })()
            } else b.parentNode.removeChild(b)
    },
    removeObjectInIE: function(a) {
        if (a = document.getElementById(a)) {
            for (var b in a)
                if (typeof a[b] == "function") a[b] = null;
            a.parentNode.removeChild(a)
        }
    }
};
mejs.PluginDetector = {
    hasPluginVersion: function(a, b) {
        var c = this.plugins[a];
        b[1] = b[1] || 0;
        b[2] = b[2] || 0;
        return c[0] > b[0] || c[0] == b[0] && c[1] > b[1] || c[0] == b[0] && c[1] == b[1] && c[2] >= b[2] ? true : false
    },
    nav: window.navigator,
    ua: window.navigator.userAgent.toLowerCase(),
    plugins: [],
    addPlugin: function(a, b, c, d, e) {
        this.plugins[a] = this.detectPlugin(b, c, d, e)
    },
    detectPlugin: function(a, b, c, d) {
        var e = [0, 0, 0],
            g;
        if (typeof this.nav.plugins != "undefined" && typeof this.nav.plugins[a] == "object") {
            if ((c = this.nav.plugins[a].description) &&
                !(typeof this.nav.mimeTypes != "undefined" && this.nav.mimeTypes[b] && !this.nav.mimeTypes[b].enabledPlugin)) {
                e = c.replace(a, "").replace(/^\s+/, "").replace(/\sr/gi, ".").split(".");
                for (a = 0; a < e.length; a++) e[a] = parseInt(e[a].match(/\d+/), 10)
            }
        } else if (typeof window.ActiveXObject != "undefined") try {
            if (g = new ActiveXObject(c)) e = d(g)
        } catch (f) {}
        return e
    }
};
mejs.PluginDetector.addPlugin("flash", "Shockwave Flash", "application/x-shockwave-flash", "ShockwaveFlash.ShockwaveFlash", function(a) {
    var b = [];
    if (a = a.GetVariable("$version")) {
        a = a.split(" ")[1].split(",");
        b = [parseInt(a[0], 10), parseInt(a[1], 10), parseInt(a[2], 10)]
    }
    return b
});
mejs.PluginDetector.addPlugin("silverlight", "Silverlight Plug-In", "application/x-silverlight-2", "AgControl.AgControl", function(a) {
    var b = [0, 0, 0, 0],
        c = function(d, e, g, f) {
            for (; d.isVersionSupported(e[0] + "." + e[1] + "." + e[2] + "." + e[3]);) e[g] += f;
            e[g] -= f
        };
    c(a, b, 0, 1);
    c(a, b, 1, 1);
    c(a, b, 2, 1E4);
    c(a, b, 2, 1E3);
    c(a, b, 2, 100);
    c(a, b, 2, 10);
    c(a, b, 2, 1);
    c(a, b, 3, 1);
    return b
});
mejs.MediaFeatures = {
    init: function() {
        var a = this,
            b = document,
            c = mejs.PluginDetector.nav,
            d = mejs.PluginDetector.ua.toLowerCase(),
            e, g = ["source", "track", "audio", "video"];
        a.isiPad = d.match(/ipad/i) !== null;
        a.isiPhone = d.match(/iphone/i) !== null;
        a.isiOS = a.isiPhone || a.isiPad;
        a.isAndroid = d.match(/android/i) !== null;
        a.isBustedAndroid = d.match(/android 2\.[12]/) !== null;
        a.isBustedNativeHTTPS = location.protocol === "https:" && (d.match(/android [12]\./) !== null || d.match(/macintosh.* version.* safari/) !== null);
        a.isIE = c.appName.toLowerCase().indexOf("microsoft") !=
            -1 || c.appName.toLowerCase().match(/trident/gi) !== null;
        a.isChrome = d.match(/chrome/gi) !== null;
        a.isFirefox = d.match(/firefox/gi) !== null;
        a.isWebkit = d.match(/webkit/gi) !== null;
        a.isGecko = d.match(/gecko/gi) !== null && !a.isWebkit && !a.isIE;
        a.isOpera = d.match(/opera/gi) !== null;
        a.hasTouch = "ontouchstart" in window;
        a.svg = !!document.createElementNS && !!document.createElementNS("http://www.w3.org/2000/svg", "svg").createSVGRect;
        for (c = 0; c < g.length; c++) e = document.createElement(g[c]);
        a.supportsMediaTag = typeof e.canPlayType !==
            "undefined" || a.isBustedAndroid;
        try {
            e.canPlayType("video/mp4")
        } catch (f) {
            a.supportsMediaTag = false
        }
        a.hasSemiNativeFullScreen = typeof e.webkitEnterFullscreen !== "undefined";
        a.hasNativeFullscreen = typeof e.requestFullscreen !== "undefined";
        a.hasWebkitNativeFullScreen = typeof e.webkitRequestFullScreen !== "undefined";
        a.hasMozNativeFullScreen = typeof e.mozRequestFullScreen !== "undefined";
        a.hasMsNativeFullScreen = typeof e.msRequestFullscreen !== "undefined";
        a.hasTrueNativeFullScreen = a.hasWebkitNativeFullScreen || a.hasMozNativeFullScreen ||
            a.hasMsNativeFullScreen;
        a.nativeFullScreenEnabled = a.hasTrueNativeFullScreen;
        if (a.hasMozNativeFullScreen) a.nativeFullScreenEnabled = document.mozFullScreenEnabled;
        else if (a.hasMsNativeFullScreen) a.nativeFullScreenEnabled = document.msFullscreenEnabled;
        if (a.isChrome) a.hasSemiNativeFullScreen = false;
        if (a.hasTrueNativeFullScreen) {
            a.fullScreenEventName = "";
            if (a.hasWebkitNativeFullScreen) a.fullScreenEventName = "webkitfullscreenchange";
            else if (a.hasMozNativeFullScreen) a.fullScreenEventName = "mozfullscreenchange";
            else if (a.hasMsNativeFullScreen) a.fullScreenEventName = "MSFullscreenChange";
            a.isFullScreen = function() {
                if (e.mozRequestFullScreen) return b.mozFullScreen;
                else if (e.webkitRequestFullScreen) return b.webkitIsFullScreen;
                else if (e.hasMsNativeFullScreen) return b.msFullscreenElement !== null
            };
            a.requestFullScreen = function(i) {
                if (a.hasWebkitNativeFullScreen) i.webkitRequestFullScreen();
                else if (a.hasMozNativeFullScreen) i.mozRequestFullScreen();
                else a.hasMsNativeFullScreen && i.msRequestFullscreen()
            };
            a.cancelFullScreen =
                function() {
                    if (a.hasWebkitNativeFullScreen) document.webkitCancelFullScreen();
                    else if (a.hasMozNativeFullScreen) document.mozCancelFullScreen();
                    else a.hasMsNativeFullScreen && document.msExitFullscreen()
                }
        }
        if (a.hasSemiNativeFullScreen && d.match(/mac os x 10_5/i)) {
            a.hasNativeFullScreen = false;
            a.hasSemiNativeFullScreen = false
        }
    }
};
mejs.MediaFeatures.init();
mejs.HtmlMediaElement = {
    pluginType: "native",
    isFullScreen: false,
    setCurrentTime: function(a) {
        this.currentTime = a
    },
    setMuted: function(a) {
        this.muted = a
    },
    setVolume: function(a) {
        this.volume = a
    },
    stop: function() {
        this.pause()
    },
    setSrc: function(a) {
        for (var b = this.getElementsByTagName("source"); b.length > 0;) this.removeChild(b[0]);
        if (typeof a == "string") this.src = a;
        else {
            var c;
            for (b = 0; b < a.length; b++) {
                c = a[b];
                if (this.canPlayType(c.type)) {
                    this.src = c.src;
                    break
                }
            }
        }
    },
    setVideoSize: function(a, b) {
        this.width = a;
        this.height = b
    }
};
mejs.PluginMediaElement = function(a, b, c) {
    this.id = a;
    this.pluginType = b;
    this.src = c;
    this.events = {};
    this.attributes = {}
};
mejs.PluginMediaElement.prototype = {
    pluginElement: null,
    pluginType: "",
    isFullScreen: false,
    playbackRate: -1,
    defaultPlaybackRate: -1,
    seekable: [],
    played: [],
    paused: true,
    ended: false,
    seeking: false,
    duration: 0,
    error: null,
    tagName: "",
    muted: false,
    volume: 1,
    currentTime: 0,
    play: function() {
        if (this.pluginApi != null) {
            this.pluginType == "youtube" || this.pluginType == "vimeo" ? this.pluginApi.playVideo() : this.pluginApi.playMedia();
            this.paused = false
        }
    },
    load: function() {
        if (this.pluginApi != null) {
            this.pluginType == "youtube" || this.pluginType ==
            "vimeo" || this.pluginApi.loadMedia();
            this.paused = false
        }
    },
    pause: function() {
        if (this.pluginApi != null) {
            this.pluginType == "youtube" || this.pluginType == "vimeo" ? this.pluginApi.pauseVideo() : this.pluginApi.pauseMedia();
            this.paused = true
        }
    },
    stop: function() {
        if (this.pluginApi != null) {
            this.pluginType == "youtube" || this.pluginType == "vimeo" ? this.pluginApi.stopVideo() : this.pluginApi.stopMedia();
            this.paused = true
        }
    },
    canPlayType: function(a) {
        var b, c, d, e = mejs.plugins[this.pluginType];
        for (b = 0; b < e.length; b++) {
            d = e[b];
            if (mejs.PluginDetector.hasPluginVersion(this.pluginType,
                    d.version))
                for (c = 0; c < d.types.length; c++)
                    if (a == d.types[c]) return "probably"
        }
        return ""
    },
    positionFullscreenButton: function(a, b, c) {
        this.pluginApi != null && this.pluginApi.positionFullscreenButton && this.pluginApi.positionFullscreenButton(Math.floor(a), Math.floor(b), c)
    },
    hideFullscreenButton: function() {
        this.pluginApi != null && this.pluginApi.hideFullscreenButton && this.pluginApi.hideFullscreenButton()
    },
    setSrc: function(a) {
        if (typeof a == "string") {
            this.pluginApi.setSrc(mejs.Utility.absolutizeUrl(a));
            this.src = mejs.Utility.absolutizeUrl(a)
        } else {
            var b,
                c;
            for (b = 0; b < a.length; b++) {
                c = a[b];
                if (this.canPlayType(c.type)) {
                    this.pluginApi.setSrc(mejs.Utility.absolutizeUrl(c.src));
                    this.src = mejs.Utility.absolutizeUrl(a);
                    break
                }
            }
        }
    },
    setCurrentTime: function(a) {
        if (this.pluginApi != null) {
            this.pluginType == "youtube" || this.pluginType == "vimeo" ? this.pluginApi.seekTo(a) : this.pluginApi.setCurrentTime(a);
            this.currentTime = a
        }
    },
    setVolume: function(a) {
        if (this.pluginApi != null) {
            this.pluginType == "youtube" || this.pluginType == "vimeo" ? this.pluginApi.setVolume(a * 100) : this.pluginApi.setVolume(a);
            this.volume = a
        }
    },
    setMuted: function(a) {
        if (this.pluginApi != null) {
            if (this.pluginType == "youtube" || this.pluginType == "vimeo") {
                a ? this.pluginApi.mute() : this.pluginApi.unMute();
                this.muted = a;
                this.dispatchEvent("volumechange")
            } else this.pluginApi.setMuted(a);
            this.muted = a
        }
    },
    setVideoSize: function(a, b) {
        if (this.pluginElement.style) {
            this.pluginElement.style.width = a + "px";
            this.pluginElement.style.height = b + "px"
        }
        this.pluginApi != null && this.pluginApi.setVideoSize && this.pluginApi.setVideoSize(a, b)
    },
    setFullscreen: function(a) {
        this.pluginApi !=
        null && this.pluginApi.setFullscreen && this.pluginApi.setFullscreen(a)
    },
    enterFullScreen: function() {
        this.pluginApi != null && this.pluginApi.setFullscreen && this.setFullscreen(true)
    },
    exitFullScreen: function() {
        this.pluginApi != null && this.pluginApi.setFullscreen && this.setFullscreen(false)
    },
    addEventListener: function(a, b) {
        this.events[a] = this.events[a] || [];
        this.events[a].push(b)
    },
    removeEventListener: function(a, b) {
        if (!a) {
            this.events = {};
            return true
        }
        var c = this.events[a];
        if (!c) return true;
        if (!b) {
            this.events[a] = [];
            return true
        }
        for (var d =
            0; d < c.length; d++)
            if (c[d] === b) {
                this.events[a].splice(d, 1);
                return true
            }
        return false
    },
    dispatchEvent: function(a) {
        var b, c, d = this.events[a];
        if (d) {
            c = Array.prototype.slice.call(arguments, 1);
            for (b = 0; b < d.length; b++) d[b].apply(null, c)
        }
    },
    hasAttribute: function(a) {
        return a in this.attributes
    },
    removeAttribute: function(a) {
        delete this.attributes[a]
    },
    getAttribute: function(a) {
        if (this.hasAttribute(a)) return this.attributes[a];
        return ""
    },
    setAttribute: function(a, b) {
        this.attributes[a] = b
    },
    remove: function() {
        mejs.Utility.removeSwf(this.pluginElement.id);
        mejs.MediaPluginBridge.unregisterPluginElement(this.pluginElement.id)
    }
};
mejs.MediaPluginBridge = {
    pluginMediaElements: {},
    htmlMediaElements: {},
    registerPluginElement: function(a, b, c) {
        this.pluginMediaElements[a] = b;
        this.htmlMediaElements[a] = c
    },
    unregisterPluginElement: function(a) {
        delete this.pluginMediaElements[a];
        delete this.htmlMediaElements[a]
    },
    initPlugin: function(a) {
        var b = this.pluginMediaElements[a],
            c = this.htmlMediaElements[a];
        if (b) {
            switch (b.pluginType) {
                case "flash":
                    b.pluginElement = b.pluginApi = document.getElementById(a);
                    break;
                case "silverlight":
                    b.pluginElement = document.getElementById(b.id);
                    b.pluginApi = b.pluginElement.Content.MediaElementJS
            }
            b.pluginApi != null && b.success && b.success(b, c)
        }
    },
    fireEvent: function(a, b, c) {
        var d, e;
        if (a = this.pluginMediaElements[a]) {
            b = {
                type: b,
                target: a
            };
            for (d in c) {
                a[d] = c[d];
                b[d] = c[d]
            }
            e = c.bufferedTime || 0;
            b.target.buffered = b.buffered = {
                start: function() {
                    return 0
                },
                end: function() {
                    return e
                },
                length: 1
            };
            a.dispatchEvent(b.type, b)
        }
    }
};
mejs.MediaElementDefaults = {
    mode: "auto",
    plugins: ["flash", "silverlight", "youtube", "vimeo"],
    enablePluginDebug: false,
    httpsBasicAuthSite: false,
    type: "",
    pluginPath: mejs.Utility.getScriptPath(["mediaelement.js", "mediaelement.min.js", "mediaelement-and-player.js", "mediaelement-and-player.min.js"]),
    flashName: "flashmediaelement.swf",
    flashStreamer: "",
    enablePluginSmoothing: false,
    enablePseudoStreaming: false,
    pseudoStreamingStartQueryParam: "start",
    silverlightName: "silverlightmediaelement.xap",
    defaultVideoWidth: 480,
    defaultVideoHeight: 270,
    pluginWidth: -1,
    pluginHeight: -1,
    pluginVars: [],
    timerRate: 250,
    startVolume: 0.8,
    success: function() {},
    error: function() {}
};
mejs.MediaElement = function(a, b) {
    return mejs.HtmlMediaElementShim.create(a, b)
};
mejs.HtmlMediaElementShim = {
    create: function(a, b) {
        var c = mejs.MediaElementDefaults,
            d = typeof a == "string" ? document.getElementById(a) : a,
            e = d.tagName.toLowerCase(),
            g = e === "audio" || e === "video",
            f = g ? d.getAttribute("src") : d.getAttribute("href");
        e = d.getAttribute("poster");
        var i = d.getAttribute("autoplay"),
            k = d.getAttribute("preload"),
            h = d.getAttribute("controls"),
            j;
        for (j in b) c[j] = b[j];
        f = typeof f == "undefined" || f === null || f == "" ? null : f;
        e = typeof e == "undefined" || e === null ? "" : e;
        k = typeof k == "undefined" || k === null || k === "false" ?
            "none" : k;
        i = !(typeof i == "undefined" || i === null || i === "false");
        h = !(typeof h == "undefined" || h === null || h === "false");
        j = this.determinePlayback(d, c, mejs.MediaFeatures.supportsMediaTag, g, f);
        j.url = j.url !== null ? mejs.Utility.absolutizeUrl(j.url) : "";
        if (j.method == "native") {
            if (mejs.MediaFeatures.isBustedAndroid) {
                d.src = j.url;
                d.addEventListener("click", function() {
                    d.play()
                }, false)
            }
            return this.updateNative(j, c, i, k)
        } else if (j.method !== "") return this.createPlugin(j, c, e, i, k, h);
        else {
            this.createErrorMessage(j, c, e);
            return this
        }
    },
    determinePlayback: function(a, b, c, d, e) {
        var g = [],
            f, i, k, h = {
                method: "",
                url: "",
                htmlMediaElement: a,
                isVideo: a.tagName.toLowerCase() != "audio"
            },
            j;
        if (typeof b.type != "undefined" && b.type !== "")
            if (typeof b.type == "string") g.push({
                type: b.type,
                url: e
            });
            else
                for (f = 0; f < b.type.length; f++) g.push({
                    type: b.type[f],
                    url: e
                });
        else if (e !== null) {
            k = this.formatType(e, a.getAttribute("type"));
            g.push({
                type: k,
                url: e
            })
        } else
            for (f = 0; f < a.childNodes.length; f++) {
                i = a.childNodes[f];
                if (i.nodeType == 1 && i.tagName.toLowerCase() == "source") {
                    e = i.getAttribute("src");
                    k = this.formatType(e, i.getAttribute("type"));
                    i = i.getAttribute("media");
                    if (!i || !window.matchMedia || window.matchMedia && window.matchMedia(i).matches) g.push({
                        type: k,
                        url: e
                    })
                }
            }
        if (!d && g.length > 0 && g[0].url !== null && this.getTypeFromFile(g[0].url).indexOf("audio") > -1) h.isVideo = false;
        if (mejs.MediaFeatures.isBustedAndroid) a.canPlayType = function(m) {
            return m.match(/video\/(mp4|m4v)/gi) !== null ? "maybe" : ""
        };
        if (c && (b.mode === "auto" || b.mode === "auto_plugin" || b.mode === "native") && !(mejs.MediaFeatures.isBustedNativeHTTPS &&
            b.httpsBasicAuthSite === true)) {
            if (!d) {
                f = document.createElement(h.isVideo ? "video" : "audio");
                a.parentNode.insertBefore(f, a);
                a.style.display = "none";
                h.htmlMediaElement = a = f
            }
            for (f = 0; f < g.length; f++)
                if (a.canPlayType(g[f].type).replace(/no/, "") !== "" || a.canPlayType(g[f].type.replace(/mp3/, "mpeg")).replace(/no/, "") !== "" || a.canPlayType(g[f].type.replace(/m4a/, "mp4")).replace(/no/, "") !== "") {
                    h.method = "native";
                    h.url = g[f].url;
                    break
                }
            if (h.method === "native") {
                if (h.url !== null) a.src = h.url;
                if (b.mode !== "auto_plugin") return h
            }
        }
        if (b.mode ===
            "auto" || b.mode === "auto_plugin" || b.mode === "shim")
            for (f = 0; f < g.length; f++) {
                k = g[f].type;
                for (a = 0; a < b.plugins.length; a++) {
                    e = b.plugins[a];
                    i = mejs.plugins[e];
                    for (c = 0; c < i.length; c++) {
                        j = i[c];
                        if (j.version == null || mejs.PluginDetector.hasPluginVersion(e, j.version))
                            for (d = 0; d < j.types.length; d++)
                                if (k == j.types[d]) {
                                    h.method = e;
                                    h.url = g[f].url;
                                    return h
                                }
                    }
                }
            }
        if (b.mode === "auto_plugin" && h.method === "native") return h;
        if (h.method === "" && g.length > 0) h.url = g[0].url;
        return h
    },
    formatType: function(a, b) {
        return a && !b ? this.getTypeFromFile(a) :
            b && ~b.indexOf(";") ? b.substr(0, b.indexOf(";")) : b
    },
    getTypeFromFile: function(a) {
        a = a.split("?")[0];
        a = a.substring(a.lastIndexOf(".") + 1).toLowerCase();
        return (/(mp4|m4v|ogg|ogv|webm|webmv|flv|wmv|mpeg|mov)/gi.test(a) ? "video" : "audio") + "/" + this.getTypeFromExtension(a)
    },
    getTypeFromExtension: function(a) {
        switch (a) {
            case "mp4":
            case "m4v":
            case "m4a":
                return "mp4";
            case "webm":
            case "webma":
            case "webmv":
                return "webm";
            case "ogg":
            case "oga":
            case "ogv":
                return "ogg";
            default:
                return a
        }
    },
    createErrorMessage: function(a, b, c) {
        var d =
                a.htmlMediaElement,
            e = document.createElement("div");
        e.className = "me-cannotplay";
        try {
            e.style.width = d.width + "px";
            e.style.height = d.height + "px"
        } catch (g) {}
        e.innerHTML = b.customError ? b.customError : c !== "" ? '<a href="' + a.url + '"><img src="' + c + '" width="100%" height="100%" /></a>' : '<a href="' + a.url + '"><span>' + mejs.i18n.t("Download File") + "</span></a>";
        d.parentNode.insertBefore(e, d);
        d.style.display = "none";
        b.error(d)
    },
    createPlugin: function(a, b, c, d, e, g) {
        c = a.htmlMediaElement;
        var f = 1,
            i = 1,
            k = "me_" + a.method + "_" + mejs.meIndex++,
            h = new mejs.PluginMediaElement(k, a.method, a.url),
            j = document.createElement("div"),
            m;
        h.tagName = c.tagName;
        for (m = 0; m < c.attributes.length; m++) {
            var q = c.attributes[m];
            q.specified == true && h.setAttribute(q.name, q.value)
        }
        for (m = c.parentNode; m !== null && m.tagName.toLowerCase() !== "body" && m.parentNode != null;) {
            if (m.parentNode.tagName.toLowerCase() === "p") {
                m.parentNode.parentNode.insertBefore(m, m.parentNode);
                break
            }
            m = m.parentNode
        }
        if (a.isVideo) {
            f = b.pluginWidth > 0 ? b.pluginWidth : b.videoWidth > 0 ? b.videoWidth : c.getAttribute("width") !==
            null ? c.getAttribute("width") : b.defaultVideoWidth;
            i = b.pluginHeight > 0 ? b.pluginHeight : b.videoHeight > 0 ? b.videoHeight : c.getAttribute("height") !== null ? c.getAttribute("height") : b.defaultVideoHeight;
            f = mejs.Utility.encodeUrl(f);
            i = mejs.Utility.encodeUrl(i)
        } else if (b.enablePluginDebug) {
            f = 320;
            i = 240
        }
        h.success = b.success;
        mejs.MediaPluginBridge.registerPluginElement(k, h, c);
        j.className = "me-plugin";
        j.id = k + "_container";
        a.isVideo ? c.parentNode.insertBefore(j, c) : document.body.insertBefore(j, document.body.childNodes[0]);
        d = ["id=" + k, "isvideo=" + (a.isVideo ? "true" : "false"), "autoplay=" + (d ? "true" : "false"), "preload=" + e, "width=" + f, "startvolume=" + b.startVolume, "timerrate=" + b.timerRate, "flashstreamer=" + b.flashStreamer, "height=" + i, "pseudostreamstart=" + b.pseudoStreamingStartQueryParam];
        if (a.url !== null) a.method == "flash" ? d.push("file=" + mejs.Utility.encodeUrl(a.url)) : d.push("file=" + a.url);
        b.enablePluginDebug && d.push("debug=true");
        b.enablePluginSmoothing && d.push("smoothing=true");
        b.enablePseudoStreaming && d.push("pseudostreaming=true");
        g && d.push("controls=true");
        if (b.pluginVars) d = d.concat(b.pluginVars);
        switch (a.method) {
            case "silverlight":
                j.innerHTML = '<object data="data:application/x-silverlight-2," type="application/x-silverlight-2" id="' + k + '" name="' + k + '" width="' + f + '" height="' + i + '" class="mejs-shim"><param name="initParams" value="' + d.join(",") + '" /><param name="windowless" value="true" /><param name="background" value="black" /><param name="minRuntimeVersion" value="3.0.0.0" /><param name="autoUpgrade" value="true" /><param name="source" value="' +
                    b.pluginPath + b.silverlightName + '" /></object>';
                break;
            case "flash":
                if (mejs.MediaFeatures.isIE) {
                    a = document.createElement("div");
                    j.appendChild(a);
                    a.outerHTML = '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="//download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab" id="' + k + '" width="' + f + '" height="' + i + '" class="mejs-shim"><param name="movie" value="' + b.pluginPath + b.flashName + "?x=" + new Date + '" /><param name="flashvars" value="' + d.join("&amp;") + '" /><param name="quality" value="high" /><param name="bgcolor" value="#000000" /><param name="wmode" value="transparent" /><param name="allowScriptAccess" value="always" /><param name="allowFullScreen" value="true" /><param name="scale" value="default" /></object>'
                } else j.innerHTML =
                    '<embed id="' + k + '" name="' + k + '" play="true" loop="false" quality="high" bgcolor="#000000" wmode="transparent" allowScriptAccess="always" allowFullScreen="true" type="application/x-shockwave-flash" pluginspage="//www.macromedia.com/go/getflashplayer" src="' + b.pluginPath + b.flashName + '" flashvars="' + d.join("&") + '" width="' + f + '" height="' + i + '" scale="default"class="mejs-shim"></embed>';
                break;
            case "youtube":
                if (a.url.lastIndexOf("youtu.be") != -1) {
                    a = a.url.substr(a.url.lastIndexOf("/") + 1);
                    if (a.indexOf("?") !=
                        -1) a = a.substr(0, a.indexOf("?"))
                } else a = a.url.substr(a.url.lastIndexOf("=") + 1);
                youtubeSettings = {
                    container: j,
                    containerId: j.id,
                    pluginMediaElement: h,
                    pluginId: k,
                    videoId: a,
                    height: i,
                    width: f
                };
                mejs.PluginDetector.hasPluginVersion("flash", [10, 0, 0]) ? mejs.YouTubeApi.createFlash(youtubeSettings) : mejs.YouTubeApi.enqueueIframe(youtubeSettings);
                break;
            case "vimeo":
                b = k + "_player";
                h.vimeoid = a.url.substr(a.url.lastIndexOf("/") + 1);
                j.innerHTML = '<iframe src="//player.vimeo.com/video/' + h.vimeoid + "?api=1&portrait=0&byline=0&title=0&player_id=" +
                    b + '" width="' + f + '" height="' + i + '" frameborder="0" class="mejs-shim" id="' + b + '"></iframe>';
                if (typeof $f == "function") {
                    var l = $f(j.childNodes[0]);
                    l.addEvent("ready", function() {
                        function o(n, p, r, s) {
                            n = {
                                type: r,
                                target: p
                            };
                            if (r == "timeupdate") {
                                p.currentTime = n.currentTime = s.seconds;
                                p.duration = n.duration = s.duration
                            }
                            p.dispatchEvent(n.type, n)
                        }
                        l.playVideo = function() {
                            l.api("play")
                        };
                        l.pauseVideo = function() {
                            l.api("pause")
                        };
                        l.seekTo = function(n) {
                            l.api("seekTo", n)
                        };
                        l.addEvent("play", function() {
                            o(l, h, "play");
                            o(l, h, "playing")
                        });
                        l.addEvent("pause", function() {
                            o(l, h, "pause")
                        });
                        l.addEvent("finish", function() {
                            o(l, h, "ended")
                        });
                        l.addEvent("playProgress", function(n) {
                            o(l, h, "timeupdate", n)
                        });
                        h.pluginApi = l;
                        mejs.MediaPluginBridge.initPlugin(k)
                    })
                } else console.warn("You need to include froogaloop for vimeo to work")
        }
        c.style.display = "none";
        c.removeAttribute("autoplay");
        return h
    },
    updateNative: function(a, b) {
        var c = a.htmlMediaElement,
            d;
        for (d in mejs.HtmlMediaElement) c[d] = mejs.HtmlMediaElement[d];
        b.success(c, c);
        return c
    }
};
mejs.YouTubeApi = {
    isIframeStarted: false,
    isIframeLoaded: false,
    loadIframeApi: function() {
        if (!this.isIframeStarted) {
            var a = document.createElement("script");
            a.src = "//www.youtube.com/player_api";
            var b = document.getElementsByTagName("script")[0];
            b.parentNode.insertBefore(a, b);
            this.isIframeStarted = true
        }
    },
    iframeQueue: [],
    enqueueIframe: function(a) {
        if (this.isLoaded) this.createIframe(a);
        else {
            this.loadIframeApi();
            this.iframeQueue.push(a)
        }
    },
    createIframe: function(a) {
        var b = a.pluginMediaElement,
            c = new YT.Player(a.containerId, {
                height: a.height,
                width: a.width,
                videoId: a.videoId,
                playerVars: {
                    controls: 0
                },
                events: {
                    onReady: function() {
                        a.pluginMediaElement.pluginApi = c;
                        mejs.MediaPluginBridge.initPlugin(a.pluginId);
                        setInterval(function() {
                            mejs.YouTubeApi.createEvent(c, b, "timeupdate")
                        }, 250)
                    },
                    onStateChange: function(d) {
                        mejs.YouTubeApi.handleStateChange(d.data, c, b)
                    }
                }
            })
    },
    createEvent: function(a, b, c) {
        c = {
            type: c,
            target: b
        };
        if (a && a.getDuration) {
            b.currentTime = c.currentTime = a.getCurrentTime();
            b.duration = c.duration = a.getDuration();
            c.paused = b.paused;
            c.ended = b.ended;
            c.muted = a.isMuted();
            c.volume = a.getVolume() / 100;
            c.bytesTotal = a.getVideoBytesTotal();
            c.bufferedBytes = a.getVideoBytesLoaded();
            var d = c.bufferedBytes / c.bytesTotal * c.duration;
            c.target.buffered = c.buffered = {
                start: function() {
                    return 0
                },
                end: function() {
                    return d
                },
                length: 1
            }
        }
        b.dispatchEvent(c.type, c)
    },
    iFrameReady: function() {
        for (this.isIframeLoaded = this.isLoaded = true; this.iframeQueue.length > 0;) this.createIframe(this.iframeQueue.pop())
    },
    flashPlayers: {},
    createFlash: function(a) {
        this.flashPlayers[a.pluginId] =
            a;
        var b, c = "//www.youtube.com/apiplayer?enablejsapi=1&amp;playerapiid=" + a.pluginId + "&amp;version=3&amp;autoplay=0&amp;controls=0&amp;modestbranding=1&loop=0";
        if (mejs.MediaFeatures.isIE) {
            b = document.createElement("div");
            a.container.appendChild(b);
            b.outerHTML = '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="//download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab" id="' + a.pluginId + '" width="' + a.width + '" height="' + a.height + '" class="mejs-shim"><param name="movie" value="' +
                c + '" /><param name="wmode" value="transparent" /><param name="allowScriptAccess" value="always" /><param name="allowFullScreen" value="true" /></object>'
        } else a.container.innerHTML = '<object type="application/x-shockwave-flash" id="' + a.pluginId + '" data="' + c + '" width="' + a.width + '" height="' + a.height + '" style="visibility: visible; " class="mejs-shim"><param name="allowScriptAccess" value="always"><param name="wmode" value="transparent"></object>'
    },
    flashReady: function(a) {
        var b = this.flashPlayers[a],
            c =
                document.getElementById(a),
            d = b.pluginMediaElement;
        d.pluginApi = d.pluginElement = c;
        mejs.MediaPluginBridge.initPlugin(a);
        c.cueVideoById(b.videoId);
        a = b.containerId + "_callback";
        window[a] = function(e) {
            mejs.YouTubeApi.handleStateChange(e, c, d)
        };
        c.addEventListener("onStateChange", a);
        setInterval(function() {
            mejs.YouTubeApi.createEvent(c, d, "timeupdate")
        }, 250)
    },
    handleStateChange: function(a, b, c) {
        switch (a) {
            case -1:
                c.paused = true;
                c.ended = true;
                mejs.YouTubeApi.createEvent(b, c, "loadedmetadata");
                break;
            case 0:
                c.paused = false;
                c.ended = true;
                mejs.YouTubeApi.createEvent(b, c, "ended");
                break;
            case 1:
                c.paused = false;
                c.ended = false;
                mejs.YouTubeApi.createEvent(b, c, "play");
                mejs.YouTubeApi.createEvent(b, c, "playing");
                break;
            case 2:
                c.paused = true;
                c.ended = false;
                mejs.YouTubeApi.createEvent(b, c, "pause");
                break;
            case 3:
                mejs.YouTubeApi.createEvent(b, c, "progress")
        }
    }
};

function onYouTubePlayerAPIReady() {
    mejs.YouTubeApi.iFrameReady()
}

function onYouTubePlayerReady(a) {
    mejs.YouTubeApi.flashReady(a)
}
window.mejs = mejs;
window.MediaElement = mejs.MediaElement;
(function(a, b) {
    var c = {
        locale: {
            language: "",
            strings: {}
        },
        methods: {}
    };
    c.getLanguage = function() {
        return (c.locale.language || window.navigator.userLanguage || window.navigator.language).substr(0, 2).toLowerCase()
    };
    if (typeof mejsL10n != "undefined") c.locale.language = mejsL10n.language;
    c.methods.checkPlain = function(d) {
        var e, g, f = {
            "&": "&amp;",
            '"': "&quot;",
            "<": "&lt;",
            ">": "&gt;"
        };
        d = String(d);
        for (e in f)
            if (f.hasOwnProperty(e)) {
                g = RegExp(e, "g");
                d = d.replace(g, f[e])
            }
        return d
    };
    c.methods.t = function(d, e) {
        if (c.locale.strings &&
            c.locale.strings[e.context] && c.locale.strings[e.context][d]) d = c.locale.strings[e.context][d];
        return c.methods.checkPlain(d)
    };
    c.t = function(d, e) {
        if (typeof d === "string" && d.length > 0) {
            var g = c.getLanguage();
            e = e || {
                    context: g
                };
            return c.methods.t(d, e)
        } else throw {
            name: "InvalidArgumentException",
            message: "First argument is either not a string or empty."
        };
    };
    b.i18n = c
})(document, mejs);
(function(a) {
    if (typeof mejsL10n != "undefined") a[mejsL10n.language] = mejsL10n.strings
})(mejs.i18n.locale.strings);
(function(a) {
    if (typeof a.de === "undefined") a.de = {
        Fullscreen: "Vollbild",
        "Go Fullscreen": "Vollbild an",
        "Turn off Fullscreen": "Vollbild aus",
        Close: "Schlie\u00dfen"
    }
})(mejs.i18n.locale.strings);
(function(a) {
    if (typeof a.zh === "undefined") a.zh = {
        Fullscreen: "\u5168\u87a2\u5e55",
        "Go Fullscreen": "\u5168\u5c4f\u6a21\u5f0f",
        "Turn off Fullscreen": "\u9000\u51fa\u5168\u5c4f\u6a21\u5f0f",
        Close: "\u95dc\u9589"
    }
})(mejs.i18n.locale.strings);
/*!
 * MediaElementPlayer
 * http://mediaelementjs.com/
 *
 * Creates a controller bar for HTML5 <video> add <audio> tags
 * using jQuery and MediaElement.js (HTML5 Flash/Silverlight wrapper)
 *
 * Copyright 2010-2013, John Dyer (http://j.hn/)
 * License: MIT
 *
 */
if (typeof jQuery != "undefined") mejs.$ = jQuery;
else if (typeof ender != "undefined") mejs.$ = ender;
(function(f) {
    mejs.MepDefaults = {
        poster: "",
        showPosterWhenEnded: false,
        defaultVideoWidth: 480,
        defaultVideoHeight: 270,
        videoWidth: -1,
        videoHeight: -1,
        defaultAudioWidth: 400,
        defaultAudioHeight: 30,
        defaultSeekBackwardInterval: function(a) {
            return a.duration * 0.05
        },
        defaultSeekForwardInterval: function(a) {
            return a.duration * 0.05
        },
        audioWidth: -1,
        audioHeight: -1,
        startVolume: 0.8,
        loop: false,
        autoRewind: true,
        enableAutosize: true,
        alwaysShowHours: false,
        showTimecodeFrameCount: false,
        framesPerSecond: 25,
        autosizeProgress: true,
        alwaysShowControls: false,
        hideVideoControlsOnLoad: false,
        clickToPlayPause: true,
        iPadUseNativeControls: false,
        iPhoneUseNativeControls: false,
        AndroidUseNativeControls: false,
        features: ["playpause", "current", "progress", "duration", "tracks", "volume", "fullscreen"],
        isVideo: true,
        enableKeyboard: true,
        pauseOtherPlayers: true,
        keyActions: [{
            keys: [32, 179],
            action: function(a, b) {
                b.paused || b.ended ? a.play() : a.pause()
            }
        }, {
            keys: [38],
            action: function(a, b) {
                b.setVolume(Math.min(b.volume + 0.1, 1))
            }
        }, {
            keys: [40],
            action: function(a, b) {
                b.setVolume(Math.max(b.volume -
                    0.1, 0))
            }
        }, {
            keys: [37, 227],
            action: function(a, b) {
                if (!isNaN(b.duration) && b.duration > 0) {
                    if (a.isVideo) {
                        a.showControls();
                        a.startControlsTimer()
                    }
                    var c = Math.max(b.currentTime - a.options.defaultSeekBackwardInterval(b), 0);
                    b.setCurrentTime(c)
                }
            }
        }, {
            keys: [39, 228],
            action: function(a, b) {
                if (!isNaN(b.duration) && b.duration > 0) {
                    if (a.isVideo) {
                        a.showControls();
                        a.startControlsTimer()
                    }
                    var c = Math.min(b.currentTime + a.options.defaultSeekForwardInterval(b), b.duration);
                    b.setCurrentTime(c)
                }
            }
        }, {
            keys: [70],
            action: function(a) {
                if (typeof a.enterFullScreen !=
                    "undefined") a.isFullScreen ? a.exitFullScreen() : a.enterFullScreen()
            }
        }]
    };
    mejs.mepIndex = 0;
    mejs.players = {};
    mejs.MediaElementPlayer = function(a, b) {
        if (!(this instanceof mejs.MediaElementPlayer)) return new mejs.MediaElementPlayer(a, b);
        this.$media = this.$node = f(a);
        this.node = this.media = this.$media[0];
        if (typeof this.node.player != "undefined") return this.node.player;
        else this.node.player = this;
        if (typeof b == "undefined") b = this.$node.data("mejsoptions");
        this.options = f.extend({}, mejs.MepDefaults, b);
        this.id = "mep_" + mejs.mepIndex++;
        mejs.players[this.id] = this;
        this.init();
        return this
    };
    mejs.MediaElementPlayer.prototype = {
        hasFocus: false,
        controlsAreVisible: true,
        init: function() {
            var a = this,
                b = mejs.MediaFeatures,
                c = f.extend(true, {}, a.options, {
                    success: function(d, g) {
                        a.meReady(d, g)
                    },
                    error: function(d) {
                        a.handleError(d)
                    }
                }),
                e = a.media.tagName.toLowerCase();
            a.isDynamic = e !== "audio" && e !== "video";
            a.isVideo = a.isDynamic ? a.options.isVideo : e !== "audio" && a.options.isVideo;
            if (b.isiPad && a.options.iPadUseNativeControls || b.isiPhone && a.options.iPhoneUseNativeControls) {
                a.$media.attr("controls",
                    "controls");
                b.isiPad && a.media.getAttribute("autoplay") !== null && a.play()
            } else if (!(b.isAndroid && a.options.AndroidUseNativeControls)) {
                a.$media.removeAttr("controls");
                a.container = f('<div id="' + a.id + '" class="mejs-container ' + (mejs.MediaFeatures.svg ? "svg" : "no-svg") + '"><div class="mejs-inner"><div class="mejs-mediaelement"></div><div class="mejs-layers"></div><div class="mejs-controls"></div><div class="mejs-clear"></div></div></div>').addClass(a.$media[0].className).insertBefore(a.$media);
                a.container.addClass((b.isAndroid ?
                        "mejs-android " : "") + (b.isiOS ? "mejs-ios " : "") + (b.isiPad ? "mejs-ipad " : "") + (b.isiPhone ? "mejs-iphone " : "") + (a.isVideo ? "mejs-video " : "mejs-audio "));
                if (b.isiOS) {
                    b = a.$media.clone();
                    a.container.find(".mejs-mediaelement").append(b);
                    a.$media.remove();
                    a.$node = a.$media = b;
                    a.node = a.media = b[0]
                } else a.container.find(".mejs-mediaelement").append(a.$media);
                a.controls = a.container.find(".mejs-controls");
                a.layers = a.container.find(".mejs-layers");
                b = a.isVideo ? "video" : "audio";
                e = b.substring(0, 1).toUpperCase() + b.substring(1);
                a.width = a.options[b + "Width"] > 0 || a.options[b + "Width"].toString().indexOf("%") > -1 ? a.options[b + "Width"] : a.media.style.width !== "" && a.media.style.width !== null ? a.media.style.width : a.media.getAttribute("width") !== null ? a.$media.attr("width") : a.options["default" + e + "Width"];
                a.height = a.options[b + "Height"] > 0 || a.options[b + "Height"].toString().indexOf("%") > -1 ? a.options[b + "Height"] : a.media.style.height !== "" && a.media.style.height !== null ? a.media.style.height : a.$media[0].getAttribute("height") !== null ? a.$media.attr("height") :
                    a.options["default" + e + "Height"];
                a.setPlayerSize(a.width, a.height);
                c.pluginWidth = a.width;
                c.pluginHeight = a.height
            }
            mejs.MediaElement(a.$media[0], c);
            typeof a.container != "undefined" && a.controlsAreVisible && a.container.trigger("controlsshown")
        },
        showControls: function(a) {
            var b = this;
            a = typeof a == "undefined" || a;
            if (!b.controlsAreVisible) {
                if (a) {
                    b.controls.css("visibility", "visible").stop(true, true).fadeIn(200, function() {
                        b.controlsAreVisible = true;
                        b.container.trigger("controlsshown")
                    });
                    b.container.find(".mejs-control").css("visibility",
                        "visible").stop(true, true).fadeIn(200, function() {
                        b.controlsAreVisible = true
                    })
                } else {
                    b.controls.css("visibility", "visible").css("display", "block");
                    b.container.find(".mejs-control").css("visibility", "visible").css("display", "block");
                    b.controlsAreVisible = true;
                    b.container.trigger("controlsshown")
                }
                b.setControlsSize()
            }
        },
        hideControls: function(a) {
            var b = this;
            a = typeof a == "undefined" || a;
            if (!(!b.controlsAreVisible || b.options.alwaysShowControls))
                if (a) {
                    b.controls.stop(true, true).fadeOut(200, function() {
                        f(this).css("visibility",
                            "hidden").css("display", "block");
                        b.controlsAreVisible = false;
                        b.container.trigger("controlshidden")
                    });
                    b.container.find(".mejs-control").stop(true, true).fadeOut(200, function() {
                        f(this).css("visibility", "hidden").css("display", "block")
                    })
                } else {
                    b.controls.css("visibility", "hidden").css("display", "block");
                    b.container.find(".mejs-control").css("visibility", "hidden").css("display", "block");
                    b.controlsAreVisible = false;
                    b.container.trigger("controlshidden")
                }
        },
        controlsTimer: null,
        startControlsTimer: function(a) {
            var b =
                this;
            a = typeof a != "undefined" ? a : 1500;
            b.killControlsTimer("start");
            b.controlsTimer = setTimeout(function() {
                b.hideControls();
                b.killControlsTimer("hide")
            }, a)
        },
        killControlsTimer: function() {
            if (this.controlsTimer !== null) {
                clearTimeout(this.controlsTimer);
                delete this.controlsTimer;
                this.controlsTimer = null
            }
        },
        controlsEnabled: true,
        disableControls: function() {
            this.killControlsTimer();
            this.hideControls(false);
            this.controlsEnabled = false
        },
        enableControls: function() {
            this.showControls(false);
            this.controlsEnabled = true
        },
        meReady: function(a, b) {
            var c = this,
                e = mejs.MediaFeatures,
                d = b.getAttribute("autoplay");
            d = !(typeof d == "undefined" || d === null || d === "false");
            var g;
            if (!c.created) {
                c.created = true;
                c.media = a;
                c.domNode = b;
                if (!(e.isAndroid && c.options.AndroidUseNativeControls) && !(e.isiPad && c.options.iPadUseNativeControls) && !(e.isiPhone && c.options.iPhoneUseNativeControls)) {
                    c.buildposter(c, c.controls, c.layers, c.media);
                    c.buildkeyboard(c, c.controls, c.layers, c.media);
                    c.buildoverlays(c, c.controls, c.layers, c.media);
                    c.findTracks();
                    for (g in c.options.features) {
                        e =
                            c.options.features[g];
                        if (c["build" + e]) try {
                            c["build" + e](c, c.controls, c.layers, c.media)
                        } catch (k) {}
                    }
                    c.container.trigger("controlsready");
                    c.setPlayerSize(c.width, c.height);
                    c.setControlsSize();
                    if (c.isVideo) {
                        if (mejs.MediaFeatures.hasTouch) c.$media.bind("touchstart", function() {
                            if (c.controlsAreVisible) c.hideControls(false);
                            else c.controlsEnabled && c.showControls(false)
                        });
                        else {
                            c.clickToPlayPauseCallback = function() {
                                if (c.options.clickToPlayPause) c.media.paused ? c.play() : c.pause()
                            };
                            c.media.addEventListener("click",
                                c.clickToPlayPauseCallback, false);
                            c.container.bind("mouseenter mouseover", function() {
                                if (c.controlsEnabled)
                                    if (!c.options.alwaysShowControls) {
                                        c.killControlsTimer("enter");
                                        c.showControls();
                                        c.startControlsTimer(2500)
                                    }
                            }).bind("mousemove", function() {
                                if (c.controlsEnabled) {
                                    c.controlsAreVisible || c.showControls();
                                    c.options.alwaysShowControls || c.startControlsTimer(2500)
                                }
                            }).bind("mouseleave", function() {
                                c.controlsEnabled && !c.media.paused && !c.options.alwaysShowControls && c.startControlsTimer(1E3)
                            })
                        }
                        c.options.hideVideoControlsOnLoad &&
                        c.hideControls(false);
                        d && !c.options.alwaysShowControls && c.hideControls();
                        c.options.enableAutosize && c.media.addEventListener("loadedmetadata", function(j) {
                            if (c.options.videoHeight <= 0 && c.domNode.getAttribute("height") === null && !isNaN(j.target.videoHeight)) {
                                c.setPlayerSize(j.target.videoWidth, j.target.videoHeight);
                                c.setControlsSize();
                                c.media.setVideoSize(j.target.videoWidth, j.target.videoHeight)
                            }
                        }, false)
                    }
                    a.addEventListener("play", function() {
                        for (var j in mejs.players) {
                            var m = mejs.players[j];
                            m.id != c.id &&
                            c.options.pauseOtherPlayers && !m.paused && !m.ended && m.pause();
                            m.hasFocus = false
                        }
                        c.hasFocus = true
                    }, false);
                    c.media.addEventListener("ended", function() {
                        if (c.options.autoRewind) try {
                            c.media.setCurrentTime(0)
                        } catch (j) {}
                        c.media.pause();
                        c.setProgressRail && c.setProgressRail();
                        c.setCurrentRail && c.setCurrentRail();
                        if (c.options.loop) c.play();
                        else !c.options.alwaysShowControls && c.controlsEnabled && c.showControls()
                    }, false);
                    c.media.addEventListener("loadedmetadata", function() {
                        c.updateDuration && c.updateDuration();
                        c.updateCurrent &&
                        c.updateCurrent();
                        if (!c.isFullScreen) {
                            c.setPlayerSize(c.width, c.height);
                            c.setControlsSize()
                        }
                    }, false);
                    setTimeout(function() {
                        c.setPlayerSize(c.width, c.height);
                        c.setControlsSize()
                    }, 50);
                    c.globalBind("resize", function() {
                        c.isFullScreen || mejs.MediaFeatures.hasTrueNativeFullScreen && document.webkitIsFullScreen || c.setPlayerSize(c.width, c.height);
                        c.setControlsSize()
                    });
                    c.media.pluginType == "youtube" && c.container.find(".mejs-overlay-play").hide()
                }
                d && a.pluginType == "native" && c.play();
                if (c.options.success) typeof c.options.success ==
                "string" ? window[c.options.success](c.media, c.domNode, c) : c.options.success(c.media, c.domNode, c)
            }
        },
        handleError: function(a) {
            this.controls.hide();
            this.options.error && this.options.error(a)
        },
        setPlayerSize: function(a, b) {
            if (typeof a != "undefined") this.width = a;
            if (typeof b != "undefined") this.height = b;
            if (this.height.toString().indexOf("%") > 0 || this.$node.css("max-width") === "100%" || parseInt(this.$node.css("max-width").replace(/px/, ""), 10) / this.$node.offsetParent().width() === 1 || this.$node[0].currentStyle && this.$node[0].currentStyle.maxWidth ===
                "100%") {
                var c = this.isVideo ? this.media.videoWidth && this.media.videoWidth > 0 ? this.media.videoWidth : this.options.defaultVideoWidth : this.options.defaultAudioWidth,
                    e = this.isVideo ? this.media.videoHeight && this.media.videoHeight > 0 ? this.media.videoHeight : this.options.defaultVideoHeight : this.options.defaultAudioHeight,
                    d = this.container.parent().closest(":visible").width();
                c = this.isVideo || !this.options.autosizeProgress ? parseInt(d * e / c, 10) : e;
                if (isNaN(c)) c = this.container.parent().closest(":visible").height();
                if (this.container.parent()[0].tagName.toLowerCase() ===
                    "body") {
                    d = f(window).width();
                    c = f(window).height()
                }
                if (c != 0 && d != 0) {
                    this.container.width(d).height(c);
                    this.$media.add(this.container.find(".mejs-shim")).width("100%").height("100%");
                    this.isVideo && this.media.setVideoSize && this.media.setVideoSize(d, c);
                    this.layers.children(".mejs-layer").width("100%").height("100%")
                }
            } else {
                this.container.width(this.width).height(this.height);
                this.layers.children(".mejs-layer").width(this.width).height(this.height)
            }
            d = this.layers.find(".mejs-overlay-play");
            c = d.find(".mejs-overlay-button");
            d.height(this.container.height() - this.controls.height());
            c.css("margin-top", "-" + (c.height() / 2 - this.controls.height() / 2).toString() + "px")
        },
        setControlsSize: function() {
            var a = 0,
                b = 0,
                c = this.controls.find(".mejs-time-rail"),
                e = this.controls.find(".mejs-time-total");
            this.controls.find(".mejs-time-current");
            this.controls.find(".mejs-time-loaded");
            var d = c.siblings(),
                g = d.last(),
                k = null;
            if (!(!this.container.is(":visible") || !c.length || !c.is(":visible"))) {
                if (this.options && !this.options.autosizeProgress) b = parseInt(c.css("width"));
                if (b === 0 || !b) {
                    d.each(function() {
                        var j = f(this);
                        if (j.css("position") != "absolute" && j.is(":visible")) a += f(this).outerWidth(true)
                    });
                    b = this.controls.width() - a - (c.outerWidth(true) - c.width())
                }
                do {
                    c.width(b);
                    e.width(b - (e.outerWidth(true) - e.width()));
                    if (g.css("position") != "absolute") {
                        k = g.position();
                        b--
                    }
                } while (k != null && k.top > 0 && b > 0);
                this.setProgressRail && this.setProgressRail();
                this.setCurrentRail && this.setCurrentRail()
            }
        },
        buildposter: function(a, b, c, e) {
            var d = f('<div class="mejs-poster mejs-layer"></div>').appendTo(c);
            b = a.$media.attr("poster");
            if (a.options.poster !== "") b = a.options.poster;
            b !== "" && b != null ? this.setPoster(b) : d.hide();
            e.addEventListener("play", function() {
                d.hide()
            }, false);
            a.options.showPosterWhenEnded && a.options.autoRewind && e.addEventListener("ended", function() {
                d.show()
            }, false)
        },
        setPoster: function(a) {
            var b = this.container.find(".mejs-poster"),
                c = b.find("img");
            if (c.length == 0) c = f('<img width="100%" height="100%" />').appendTo(b);
            c.attr("src", a);
            b.css({
                "background-image": "url(" + a + ")"
            })
        },
        buildoverlays: function(a,
                                b, c, e) {
            var d = this;
            if (a.isVideo) {
                var g = f('<div class="mejs-overlay mejs-layer"><div class="mejs-overlay-loading"><span></span></div></div>').hide().appendTo(c),
                    k = f('<div class="mejs-overlay mejs-layer"><div class="mejs-overlay-error"></div></div>').hide().appendTo(c),
                    j = f('<div class="mejs-overlay mejs-layer mejs-overlay-play"><div class="mejs-overlay-button"></div></div>').appendTo(c).bind("click touchstart", function() {
                        d.options.clickToPlayPause && e.paused && e.play()
                    });
                e.addEventListener("play", function() {
                    j.hide();
                    g.hide();
                    b.find(".mejs-time-buffering").hide();
                    k.hide()
                }, false);
                e.addEventListener("playing", function() {
                    j.hide();
                    g.hide();
                    b.find(".mejs-time-buffering").hide();
                    k.hide()
                }, false);
                e.addEventListener("seeking", function() {
                    g.show();
                    b.find(".mejs-time-buffering").show()
                }, false);
                e.addEventListener("seeked", function() {
                    g.hide();
                    b.find(".mejs-time-buffering").hide()
                }, false);
                e.addEventListener("pause", function() {
                    mejs.MediaFeatures.isiPhone || j.show()
                }, false);
                e.addEventListener("waiting", function() {
                        g.show();
                        b.find(".mejs-time-buffering").show()
                    },
                    false);
                e.addEventListener("loadeddata", function() {
                    g.show();
                    b.find(".mejs-time-buffering").show()
                }, false);
                e.addEventListener("canplay", function() {
                    g.hide();
                    b.find(".mejs-time-buffering").hide()
                }, false);
                e.addEventListener("error", function() {
                    g.hide();
                    b.find(".mejs-time-buffering").hide();
                    k.show();
                    k.find("mejs-overlay-error").html("Error loading this resource")
                }, false)
            }
        },
        buildkeyboard: function(a, b, c, e) {
            this.globalBind("keydown", function(d) {
                if (a.hasFocus && a.options.enableKeyboard)
                    for (var g = 0, k = a.options.keyActions.length; g <
                    k; g++)
                        for (var j = a.options.keyActions[g], m = 0, q = j.keys.length; m < q; m++)
                            if (d.keyCode == j.keys[m]) {
                                d.preventDefault();
                                j.action(a, e, d.keyCode);
                                return false
                            }
                return true
            });
            this.globalBind("click", function(d) {
                a.hasFocus = f(d.target).closest(".mejs-container").length != 0
            })
        },
        findTracks: function() {
            var a = this,
                b = a.$media.find("track");
            a.tracks = [];
            b.each(function(c, e) {
                e = f(e);
                a.tracks.push({
                    srclang: e.attr("srclang") ? e.attr("srclang").toLowerCase() : "",
                    src: e.attr("src"),
                    kind: e.attr("kind"),
                    label: e.attr("label") || "",
                    entries: [],
                    isLoaded: false
                })
            })
        },
        changeSkin: function(a) {
            this.container[0].className = "mejs-container " + a;
            this.setPlayerSize(this.width, this.height);
            this.setControlsSize()
        },
        play: function() {
            this.load();
            this.media.play()
        },
        pause: function() {
            try {
                this.media.pause()
            } catch (a) {}
        },
        load: function() {
            this.isLoaded || this.media.load();
            this.isLoaded = true
        },
        setMuted: function(a) {
            this.media.setMuted(a)
        },
        setCurrentTime: function(a) {
            this.media.setCurrentTime(a)
        },
        getCurrentTime: function() {
            return this.media.currentTime
        },
        setVolume: function(a) {
            this.media.setVolume(a)
        },
        getVolume: function() {
            return this.media.volume
        },
        setSrc: function(a) {
            this.media.setSrc(a)
        },
        remove: function() {
            var a, b;
            for (a in this.options.features) {
                b = this.options.features[a];
                if (this["clean" + b]) try {
                    this["clean" + b](this)
                } catch (c) {}
            }
            if (this.isDynamic) this.$node.insertBefore(this.container);
            else {
                this.$media.prop("controls", true);
                this.$node.clone().show().insertBefore(this.container);
                this.$node.remove()
            }
            this.media.pluginType !== "native" && this.media.remove();
            delete mejs.players[this.id];
            typeof this.container ==
            "object" && this.container.remove();
            this.globalUnbind();
            delete this.node.player
        }
    };
    (function() {
        function a(c, e) {
            var d = {
                d: [],
                w: []
            };
            f.each((c || "").split(" "), function(g, k) {
                var j = k + "." + e;
                if (j.indexOf(".") === 0) {
                    d.d.push(j);
                    d.w.push(j)
                } else d[b.test(k) ? "w" : "d"].push(j)
            });
            d.d = d.d.join(" ");
            d.w = d.w.join(" ");
            return d
        }
        var b = /^((after|before)print|(before)?unload|hashchange|message|o(ff|n)line|page(hide|show)|popstate|resize|storage)\b/;
        mejs.MediaElementPlayer.prototype.globalBind = function(c, e, d) {
            c = a(c, this.id);
            c.d && f(document).bind(c.d, e, d);
            c.w && f(window).bind(c.w, e, d)
        };
        mejs.MediaElementPlayer.prototype.globalUnbind = function(c, e) {
            c = a(c, this.id);
            c.d && f(document).unbind(c.d, e);
            c.w && f(window).unbind(c.w, e)
        }
    })();
    if (typeof jQuery != "undefined") jQuery.fn.mediaelementplayer = function(a) {
        a === false ? this.each(function() {
            var b = jQuery(this).data("mediaelementplayer");
            b && b.remove();
            jQuery(this).removeData("mediaelementplayer")
        }) : this.each(function() {
            jQuery(this).data("mediaelementplayer", new mejs.MediaElementPlayer(this,
                a))
        });
        return this
    };
    f(document).ready(function() {
        f(".mejs-player").mediaelementplayer()
    });
    window.MediaElementPlayer = mejs.MediaElementPlayer
})(mejs.$);
(function(f) {
    f.extend(mejs.MepDefaults, {
        playpauseText: mejs.i18n.t("Play/Pause")
    });
    f.extend(MediaElementPlayer.prototype, {
        buildplaypause: function(a, b, c, e) {
            var d = f('<div class="mejs-button mejs-playpause-button mejs-play" ><button type="button" aria-controls="' + this.id + '" title="' + this.options.playpauseText + '" aria-label="' + this.options.playpauseText + '"></button></div>').appendTo(b).click(function(g) {
                g.preventDefault();
                e.paused ? e.play() : e.pause();
                return false
            });
            e.addEventListener("play", function() {
                    d.removeClass("mejs-play").addClass("mejs-pause")
                },
                false);
            e.addEventListener("playing", function() {
                d.removeClass("mejs-play").addClass("mejs-pause")
            }, false);
            e.addEventListener("pause", function() {
                d.removeClass("mejs-pause").addClass("mejs-play")
            }, false);
            e.addEventListener("paused", function() {
                d.removeClass("mejs-pause").addClass("mejs-play")
            }, false)
        }
    })
})(mejs.$);
(function(f) {
    f.extend(mejs.MepDefaults, {
        stopText: "Stop"
    });
    f.extend(MediaElementPlayer.prototype, {
        buildstop: function(a, b, c, e) {
            f('<div class="mejs-button mejs-stop-button mejs-stop"><button type="button" aria-controls="' + this.id + '" title="' + this.options.stopText + '" aria-label="' + this.options.stopText + '"></button></div>').appendTo(b).click(function() {
                e.paused || e.pause();
                if (e.currentTime > 0) {
                    e.setCurrentTime(0);
                    e.pause();
                    b.find(".mejs-time-current").width("0px");
                    b.find(".mejs-time-handle").css("left",
                        "0px");
                    b.find(".mejs-time-float-current").html(mejs.Utility.secondsToTimeCode(0));
                    b.find(".mejs-currenttime").html(mejs.Utility.secondsToTimeCode(0));
                    c.find(".mejs-poster").show()
                }
            })
        }
    })
})(mejs.$);
(function(f) {
    f.extend(MediaElementPlayer.prototype, {
        buildprogress: function(a, b, c, e) {
            f('<div class="mejs-time-rail"><span class="mejs-time-total"><span class="mejs-time-buffering"></span><span class="mejs-time-loaded"></span><span class="mejs-time-current"></span><span class="mejs-time-handle"></span><span class="mejs-time-float"><span class="mejs-time-float-current">00:00</span><span class="mejs-time-float-corner"></span></span></span></div>').appendTo(b);
            b.find(".mejs-time-buffering").hide();
            var d =
                    this,
                g = b.find(".mejs-time-total");
            c = b.find(".mejs-time-loaded");
            var k = b.find(".mejs-time-current"),
                j = b.find(".mejs-time-handle"),
                m = b.find(".mejs-time-float"),
                q = b.find(".mejs-time-float-current"),
                p = function(h) {
                    h = h.originalEvent.changedTouches ? h.originalEvent.changedTouches[0].pageX : h.pageX;
                    var l = g.offset(),
                        r = g.outerWidth(true),
                        n = 0,
                        o = n = 0;
                    if (e.duration) {
                        if (h < l.left) h = l.left;
                        else if (h > r + l.left) h = r + l.left;
                        o = h - l.left;
                        n = o / r;
                        n = n <= 0.02 ? 0 : n * e.duration;
                        t && n !== e.currentTime && e.setCurrentTime(n);
                        if (!mejs.MediaFeatures.hasTouch) {
                            m.css("left",
                                o);
                            q.html(mejs.Utility.secondsToTimeCode(n));
                            m.show()
                        }
                    }
                },
                t = false;
            g.bind("mousedown touchstart", function(h) {
                if (h.which === 1 || h.which === 0) {
                    t = true;
                    p(h);
                    d.globalBind("mousemove.dur touchmove.dur", function(l) {
                        p(l)
                    });
                    d.globalBind("mouseup.dur touchend.dur", function() {
                        t = false;
                        m.hide();
                        d.globalUnbind(".dur")
                    });
                    return false
                }
            }).bind("mouseenter", function() {
                d.globalBind("mousemove.dur", function(h) {
                    p(h)
                });
                mejs.MediaFeatures.hasTouch || m.show()
            }).bind("mouseleave", function() {
                if (!t) {
                    d.globalUnbind(".dur");
                    m.hide()
                }
            });
            e.addEventListener("progress", function(h) {
                a.setProgressRail(h);
                a.setCurrentRail(h)
            }, false);
            e.addEventListener("timeupdate", function(h) {
                a.setProgressRail(h);
                a.setCurrentRail(h)
            }, false);
            d.loaded = c;
            d.total = g;
            d.current = k;
            d.handle = j
        },
        setProgressRail: function(a) {
            var b = a != undefined ? a.target : this.media,
                c = null;
            if (b && b.buffered && b.buffered.length > 0 && b.buffered.end && b.duration) c = b.buffered.end(0) / b.duration;
            else if (b && b.bytesTotal != undefined && b.bytesTotal > 0 && b.bufferedBytes != undefined) c = b.bufferedBytes / b.bytesTotal;
            else if (a && a.lengthComputable && a.total != 0) c = a.loaded / a.total;
            if (c !== null) {
                c = Math.min(1, Math.max(0, c));
                this.loaded && this.total && this.loaded.width(this.total.width() * c)
            }
        },
        setCurrentRail: function() {
            if (this.media.currentTime != undefined && this.media.duration)
                if (this.total && this.handle) {
                    var a = Math.round(this.total.width() * this.media.currentTime / this.media.duration),
                        b = a - Math.round(this.handle.outerWidth(true) / 2);
                    this.current.width(a);
                    this.handle.css("left", b)
                }
        }
    })
})(mejs.$);
(function(f) {
    f.extend(mejs.MepDefaults, {
        duration: -1,
        timeAndDurationSeparator: "<span> | </span>"
    });
    f.extend(MediaElementPlayer.prototype, {
        buildcurrent: function(a, b, c, e) {
            f('<div class="mejs-time"><span class="mejs-currenttime">' + (a.options.alwaysShowHours ? "00:" : "") + (a.options.showTimecodeFrameCount ? "00:00:00" : "00:00") + "</span></div>").appendTo(b);
            this.currenttime = this.controls.find(".mejs-currenttime");
            e.addEventListener("timeupdate", function() {
                a.updateCurrent()
            }, false)
        },
        buildduration: function(a, b,
                                c, e) {
            if (b.children().last().find(".mejs-currenttime").length > 0) f(this.options.timeAndDurationSeparator + '<span class="mejs-duration">' + (this.options.duration > 0 ? mejs.Utility.secondsToTimeCode(this.options.duration, this.options.alwaysShowHours || this.media.duration > 3600, this.options.showTimecodeFrameCount, this.options.framesPerSecond || 25) : (a.options.alwaysShowHours ? "00:" : "") + (a.options.showTimecodeFrameCount ? "00:00:00" : "00:00")) + "</span>").appendTo(b.find(".mejs-time"));
            else {
                b.find(".mejs-currenttime").parent().addClass("mejs-currenttime-container");
                f('<div class="mejs-time mejs-duration-container"><span class="mejs-duration">' + (this.options.duration > 0 ? mejs.Utility.secondsToTimeCode(this.options.duration, this.options.alwaysShowHours || this.media.duration > 3600, this.options.showTimecodeFrameCount, this.options.framesPerSecond || 25) : (a.options.alwaysShowHours ? "00:" : "") + (a.options.showTimecodeFrameCount ? "00:00:00" : "00:00")) + "</span></div>").appendTo(b)
            }
            this.durationD = this.controls.find(".mejs-duration");
            e.addEventListener("timeupdate", function() {
                    a.updateDuration()
                },
                false)
        },
        updateCurrent: function() {
            if (this.currenttime) this.currenttime.html(mejs.Utility.secondsToTimeCode(this.media.currentTime, this.options.alwaysShowHours || this.media.duration > 3600, this.options.showTimecodeFrameCount, this.options.framesPerSecond || 25))
        },
        updateDuration: function() {
            this.container.toggleClass("mejs-long-video", this.media.duration > 3600);
            if (this.durationD && (this.options.duration > 0 || this.media.duration)) this.durationD.html(mejs.Utility.secondsToTimeCode(this.options.duration > 0 ? this.options.duration :
                this.media.duration, this.options.alwaysShowHours, this.options.showTimecodeFrameCount, this.options.framesPerSecond || 25))
        }
    })
})(mejs.$);
(function(f) {
    f.extend(mejs.MepDefaults, {
        muteText: mejs.i18n.t("Mute Toggle"),
        hideVolumeOnTouchDevices: true,
        audioVolume: "horizontal",
        videoVolume: "vertical"
    });
    f.extend(MediaElementPlayer.prototype, {
        buildvolume: function(a, b, c, e) {
            if (!((mejs.MediaFeatures.isAndroid || mejs.MediaFeatures.isiOS) && this.options.hideVolumeOnTouchDevices)) {
                var d = this,
                    g = d.isVideo ? d.options.videoVolume : d.options.audioVolume,
                    k = g == "horizontal" ? f('<div class="mejs-button mejs-volume-button mejs-mute"><button type="button" aria-controls="' +
                        d.id + '" title="' + d.options.muteText + '" aria-label="' + d.options.muteText + '"></button></div><div class="mejs-horizontal-volume-slider"><div class="mejs-horizontal-volume-total"></div><div class="mejs-horizontal-volume-current"></div><div class="mejs-horizontal-volume-handle"></div></div>').appendTo(b) : f('<div class="mejs-button mejs-volume-button mejs-mute"><button type="button" aria-controls="' + d.id + '" title="' + d.options.muteText + '" aria-label="' + d.options.muteText + '"></button><div class="mejs-volume-slider"><div class="mejs-volume-total"></div><div class="mejs-volume-current"></div><div class="mejs-volume-handle"></div></div></div>').appendTo(b),
                    j = d.container.find(".mejs-volume-slider, .mejs-horizontal-volume-slider"),
                    m = d.container.find(".mejs-volume-total, .mejs-horizontal-volume-total"),
                    q = d.container.find(".mejs-volume-current, .mejs-horizontal-volume-current"),
                    p = d.container.find(".mejs-volume-handle, .mejs-horizontal-volume-handle"),
                    t = function(n, o) {
                        if (!j.is(":visible") && typeof o == "undefined") {
                            j.show();
                            t(n, true);
                            j.hide()
                        } else {
                            n = Math.max(0, n);
                            n = Math.min(n, 1);
                            n == 0 ? k.removeClass("mejs-mute").addClass("mejs-unmute") : k.removeClass("mejs-unmute").addClass("mejs-mute");
                            if (g == "vertical") {
                                var s = m.height(),
                                    u = m.position(),
                                    v = s - s * n;
                                p.css("top", Math.round(u.top + v - p.height() / 2));
                                q.height(s - v);
                                q.css("top", u.top + v)
                            } else {
                                s = m.width();
                                u = m.position();
                                s = s * n;
                                p.css("left", Math.round(u.left + s - p.width() / 2));
                                q.width(Math.round(s))
                            }
                        }
                    },
                    h = function(n) {
                        var o = null,
                            s = m.offset();
                        if (g == "vertical") {
                            o = m.height();
                            parseInt(m.css("top").replace(/px/, ""), 10);
                            o = (o - (n.pageY - s.top)) / o;
                            if (s.top == 0 || s.left == 0) return
                        } else {
                            o = m.width();
                            o = (n.pageX - s.left) / o
                        }
                        o = Math.max(0, o);
                        o = Math.min(o, 1);
                        t(o);
                        o == 0 ? e.setMuted(true) :
                            e.setMuted(false);
                        e.setVolume(o)
                    },
                    l = false,
                    r = false;
                k.hover(function() {
                    j.show();
                    r = true
                }, function() {
                    r = false;
                    !l && g == "vertical" && j.hide()
                });
                j.bind("mouseover", function() {
                    r = true
                }).bind("mousedown", function(n) {
                    h(n);
                    d.globalBind("mousemove.vol", function(o) {
                        h(o)
                    });
                    d.globalBind("mouseup.vol", function() {
                        l = false;
                        d.globalUnbind(".vol");
                        !r && g == "vertical" && j.hide()
                    });
                    l = true;
                    return false
                });
                k.find("button").click(function() {
                    e.setMuted(!e.muted)
                });
                e.addEventListener("volumechange", function() {
                    if (!l)
                        if (e.muted) {
                            t(0);
                            k.removeClass("mejs-mute").addClass("mejs-unmute")
                        } else {
                            t(e.volume);
                            k.removeClass("mejs-unmute").addClass("mejs-mute")
                        }
                }, false);
                if (d.container.is(":visible")) {
                    t(a.options.startVolume);
                    a.options.startVolume === 0 && e.setMuted(true);
                    e.pluginType === "native" && e.setVolume(a.options.startVolume)
                }
            }
        }
    })
})(mejs.$);
(function(f) {
    f.extend(mejs.MepDefaults, {
        usePluginFullScreen: true,
        newWindowCallback: function() {
            return ""
        },
        fullscreenText: mejs.i18n.t("Fullscreen")
    });
    f.extend(MediaElementPlayer.prototype, {
        isFullScreen: false,
        isNativeFullScreen: false,
        isInIframe: false,
        buildfullscreen: function(a, b, c, e) {
            if (a.isVideo) {
                a.isInIframe = window.location != window.parent.location;
                if (mejs.MediaFeatures.hasTrueNativeFullScreen) {
                    c = function() {
                        if (a.isFullScreen)
                            if (mejs.MediaFeatures.isFullScreen()) {
                                a.isNativeFullScreen = true;
                                a.setControlsSize()
                            } else {
                                a.isNativeFullScreen =
                                    false;
                                a.exitFullScreen()
                            }
                    };
                    mejs.MediaFeatures.hasMozNativeFullScreen ? a.globalBind(mejs.MediaFeatures.fullScreenEventName, c) : a.container.bind(mejs.MediaFeatures.fullScreenEventName, c)
                }
                var d = this,
                    g = f('<div class="mejs-button mejs-fullscreen-button"><button type="button" aria-controls="' + d.id + '" title="' + d.options.fullscreenText + '" aria-label="' + d.options.fullscreenText + '"></button></div>').appendTo(b);
                if (d.media.pluginType === "native" || !d.options.usePluginFullScreen && !mejs.MediaFeatures.isFirefox) g.click(function() {
                    mejs.MediaFeatures.hasTrueNativeFullScreen &&
                    mejs.MediaFeatures.isFullScreen() || a.isFullScreen ? a.exitFullScreen() : a.enterFullScreen()
                });
                else {
                    var k = null;
                    if (function() {
                            var h = document.createElement("x"),
                                l = document.documentElement,
                                r = window.getComputedStyle;
                            if (!("pointerEvents" in h.style)) return false;
                            h.style.pointerEvents = "auto";
                            h.style.pointerEvents = "x";
                            l.appendChild(h);
                            r = r && r(h, "").pointerEvents === "auto";
                            l.removeChild(h);
                            return !!r
                        }() && !mejs.MediaFeatures.isOpera) {
                        var j = false,
                            m = function() {
                                if (j) {
                                    for (var h in q) q[h].hide();
                                    g.css("pointer-events",
                                        "");
                                    d.controls.css("pointer-events", "");
                                    d.media.removeEventListener("click", d.clickToPlayPauseCallback);
                                    j = false
                                }
                            },
                            q = {};
                        b = ["top", "left", "right", "bottom"];
                        var p, t = function() {
                            var h = g.offset().left - d.container.offset().left,
                                l = g.offset().top - d.container.offset().top,
                                r = g.outerWidth(true),
                                n = g.outerHeight(true),
                                o = d.container.width(),
                                s = d.container.height();
                            for (p in q) q[p].css({
                                position: "absolute",
                                top: 0,
                                left: 0
                            });
                            q.top.width(o).height(l);
                            q.left.width(h).height(n).css({
                                top: l
                            });
                            q.right.width(o - h - r).height(n).css({
                                top: l,
                                left: h + r
                            });
                            q.bottom.width(o).height(s - n - l).css({
                                top: l + n
                            })
                        };
                        d.globalBind("resize", function() {
                            t()
                        });
                        p = 0;
                        for (c = b.length; p < c; p++) q[b[p]] = f('<div class="mejs-fullscreen-hover" />').appendTo(d.container).mouseover(m).hide();
                        g.on("mouseover", function() {
                            if (!d.isFullScreen) {
                                var h = g.offset(),
                                    l = a.container.offset();
                                e.positionFullscreenButton(h.left - l.left, h.top - l.top, false);
                                g.css("pointer-events", "none");
                                d.controls.css("pointer-events", "none");
                                d.media.addEventListener("click", d.clickToPlayPauseCallback);
                                for (p in q) q[p].show();
                                t();
                                j = true
                            }
                        });
                        e.addEventListener("fullscreenchange", function() {
                            d.isFullScreen = !d.isFullScreen;
                            d.isFullScreen ? d.media.removeEventListener("click", d.clickToPlayPauseCallback) : d.media.addEventListener("click", d.clickToPlayPauseCallback);
                            m()
                        });
                        d.globalBind("mousemove", function(h) {
                            if (j) {
                                var l = g.offset();
                                if (h.pageY < l.top || h.pageY > l.top + g.outerHeight(true) || h.pageX < l.left || h.pageX > l.left + g.outerWidth(true)) {
                                    g.css("pointer-events", "");
                                    d.controls.css("pointer-events", "");
                                    j = false
                                }
                            }
                        })
                    } else g.on("mouseover",
                        function() {
                            if (k !== null) {
                                clearTimeout(k);
                                delete k
                            }
                            var h = g.offset(),
                                l = a.container.offset();
                            e.positionFullscreenButton(h.left - l.left, h.top - l.top, true)
                        }).on("mouseout", function() {
                        if (k !== null) {
                            clearTimeout(k);
                            delete k
                        }
                        k = setTimeout(function() {
                            e.hideFullscreenButton()
                        }, 1500)
                    })
                }
                a.fullscreenBtn = g;
                d.globalBind("keydown", function(h) {
                    if ((mejs.MediaFeatures.hasTrueNativeFullScreen && mejs.MediaFeatures.isFullScreen() || d.isFullScreen) && h.keyCode == 27) a.exitFullScreen()
                })
            }
        },
        cleanfullscreen: function(a) {
            a.exitFullScreen()
        },
        containerSizeTimeout: null,
        enterFullScreen: function() {
            var a = this;
            if (!(a.media.pluginType !== "native" && (mejs.MediaFeatures.isFirefox || a.options.usePluginFullScreen))) {
                f(document.documentElement).addClass("mejs-fullscreen");
                normalHeight = a.container.height();
                normalWidth = a.container.width();
                if (a.media.pluginType === "native")
                    if (mejs.MediaFeatures.hasTrueNativeFullScreen) {
                        mejs.MediaFeatures.requestFullScreen(a.container[0]);
                        a.isInIframe && setTimeout(function c() {
                            if (a.isNativeFullScreen) {
                                var e = (window.devicePixelRatio ||
                                        1) * f(window).width(),
                                    d = screen.width;
                                Math.abs(d - e) > d * 0.0020 ? a.exitFullScreen() : setTimeout(c, 500)
                            }
                        }, 500)
                    } else if (mejs.MediaFeatures.hasSemiNativeFullScreen) {
                        a.media.webkitEnterFullscreen();
                        return
                    }
                if (a.isInIframe) {
                    var b = a.options.newWindowCallback(this);
                    if (b !== "")
                        if (mejs.MediaFeatures.hasTrueNativeFullScreen) setTimeout(function() {
                                if (!a.isNativeFullScreen) {
                                    a.pause();
                                    window.open(b, a.id, "top=0,left=0,width=" + screen.availWidth + ",height=" + screen.availHeight + ",resizable=yes,scrollbars=no,status=no,toolbar=no")
                                }
                            },
                            250);
                        else {
                            a.pause();
                            window.open(b, a.id, "top=0,left=0,width=" + screen.availWidth + ",height=" + screen.availHeight + ",resizable=yes,scrollbars=no,status=no,toolbar=no");
                            return
                        }
                }
                a.container.addClass("mejs-container-fullscreen").width("100%").height("100%");
                a.containerSizeTimeout = setTimeout(function() {
                    a.container.css({
                        width: "100%",
                        height: "100%"
                    });
                    a.setControlsSize()
                }, 500);
                if (a.media.pluginType === "native") a.$media.width("100%").height("100%");
                else {
                    a.container.find(".mejs-shim").width("100%").height("100%");
                    a.media.setVideoSize(f(window).width(), f(window).height())
                }
                a.layers.children("div").width("100%").height("100%");
                a.fullscreenBtn && a.fullscreenBtn.removeClass("mejs-fullscreen").addClass("mejs-unfullscreen");
                a.setControlsSize();
                a.isFullScreen = true
            }
        },
        exitFullScreen: function() {
            clearTimeout(this.containerSizeTimeout);
            if (this.media.pluginType !== "native" && mejs.MediaFeatures.isFirefox) this.media.setFullscreen(false);
            else {
                if (mejs.MediaFeatures.hasTrueNativeFullScreen && (mejs.MediaFeatures.isFullScreen() ||
                    this.isFullScreen)) mejs.MediaFeatures.cancelFullScreen();
                f(document.documentElement).removeClass("mejs-fullscreen");
                this.container.removeClass("mejs-container-fullscreen").width(normalWidth).height(normalHeight);
                if (this.media.pluginType === "native") this.$media.width(normalWidth).height(normalHeight);
                else {
                    this.container.find(".mejs-shim").width(normalWidth).height(normalHeight);
                    this.media.setVideoSize(normalWidth, normalHeight)
                }
                this.layers.children("div").width(normalWidth).height(normalHeight);
                this.fullscreenBtn.removeClass("mejs-unfullscreen").addClass("mejs-fullscreen");
                this.setControlsSize();
                this.isFullScreen = false
            }
        }
    })
})(mejs.$);
(function(f) {
    f.extend(mejs.MepDefaults, {
        startLanguage: "",
        tracksText: mejs.i18n.t("Captions/Subtitles"),
        hideCaptionsButtonWhenEmpty: true,
        toggleCaptionsButtonWhenOnlyOne: false,
        slidesSelector: ""
    });
    f.extend(MediaElementPlayer.prototype, {
        hasChapters: false,
        buildtracks: function(a, b, c, e) {
            if (a.tracks.length != 0) {
                var d;
                if (this.domNode.textTracks)
                    for (d = this.domNode.textTracks.length - 1; d >= 0; d--) this.domNode.textTracks[d].mode = "hidden";
                a.chapters = f('<div class="mejs-chapters mejs-layer"></div>').prependTo(c).hide();
                a.captions =
                    f('<div class="mejs-captions-layer mejs-layer"><div class="mejs-captions-position mejs-captions-position-hover"><span class="mejs-captions-text"></span></div></div>').prependTo(c).hide();
                a.captionsText = a.captions.find(".mejs-captions-text");
                a.captionsButton = f('<div class="mejs-button mejs-captions-button"><button type="button" aria-controls="' + this.id + '" title="' + this.options.tracksText + '" aria-label="' + this.options.tracksText + '"></button><div class="mejs-captions-selector"><ul><li><input type="radio" name="' +
                    a.id + '_captions" id="' + a.id + '_captions_none" value="none" checked="checked" /><label for="' + a.id + '_captions_none">' + mejs.i18n.t("None") + "</label></li></ul></div></div>").appendTo(b);
                for (d = b = 0; d < a.tracks.length; d++) a.tracks[d].kind == "subtitles" && b++;
                this.options.toggleCaptionsButtonWhenOnlyOne && b == 1 ? a.captionsButton.on("click", function() {
                    a.setTrack(a.selectedTrack == null ? a.tracks[0].srclang : "none")
                }) : a.captionsButton.hover(function() {
                        f(this).find(".mejs-captions-selector").css("visibility", "visible")
                    },
                    function() {
                        f(this).find(".mejs-captions-selector").css("visibility", "hidden")
                    }).on("click", "input[type=radio]", function() {
                    lang = this.value;
                    a.setTrack(lang)
                });
                a.options.alwaysShowControls ? a.container.find(".mejs-captions-position").addClass("mejs-captions-position-hover") : a.container.bind("controlsshown", function() {
                    a.container.find(".mejs-captions-position").addClass("mejs-captions-position-hover")
                }).bind("controlshidden", function() {
                    e.paused || a.container.find(".mejs-captions-position").removeClass("mejs-captions-position-hover")
                });
                a.trackToLoad = -1;
                a.selectedTrack = null;
                a.isLoadingTrack = false;
                for (d = 0; d < a.tracks.length; d++) a.tracks[d].kind == "subtitles" && a.addTrackButton(a.tracks[d].srclang, a.tracks[d].label);
                a.loadNextTrack();
                e.addEventListener("timeupdate", function() {
                    a.displayCaptions()
                }, false);
                if (a.options.slidesSelector != "") {
                    a.slidesContainer = f(a.options.slidesSelector);
                    e.addEventListener("timeupdate", function() {
                        a.displaySlides()
                    }, false)
                }
                e.addEventListener("loadedmetadata", function() {
                    a.displayChapters()
                }, false);
                a.container.hover(function() {
                    if (a.hasChapters) {
                        a.chapters.css("visibility",
                            "visible");
                        a.chapters.fadeIn(200).height(a.chapters.find(".mejs-chapter").outerHeight())
                    }
                }, function() {
                    a.hasChapters && !e.paused && a.chapters.fadeOut(200, function() {
                        f(this).css("visibility", "hidden");
                        f(this).css("display", "block")
                    })
                });
                a.node.getAttribute("autoplay") !== null && a.chapters.css("visibility", "hidden")
            }
        },
        setTrack: function(a) {
            var b;
            if (a == "none") {
                this.selectedTrack = null;
                this.captionsButton.removeClass("mejs-captions-enabled")
            } else
                for (b = 0; b < this.tracks.length; b++)
                    if (this.tracks[b].srclang == a) {
                        this.selectedTrack ==
                        null && this.captionsButton.addClass("mejs-captions-enabled");
                        this.selectedTrack = this.tracks[b];
                        this.captions.attr("lang", this.selectedTrack.srclang);
                        this.displayCaptions();
                        break
                    }
        },
        loadNextTrack: function() {
            this.trackToLoad++;
            if (this.trackToLoad < this.tracks.length) {
                this.isLoadingTrack = true;
                this.loadTrack(this.trackToLoad)
            } else {
                this.isLoadingTrack = false;
                this.checkForTracks()
            }
        },
        loadTrack: function(a) {
            var b = this,
                c = b.tracks[a];
            f.ajax({
                url: c.src,
                dataType: "text",
                success: function(e) {
                    c.entries = typeof e == "string" &&
                    /<tt\s+xml/ig.exec(e) ? mejs.TrackFormatParser.dfxp.parse(e) : mejs.TrackFormatParser.webvvt.parse(e);
                    c.isLoaded = true;
                    b.enableTrackButton(c.srclang, c.label);
                    b.loadNextTrack();
                    c.kind == "chapters" && b.media.addEventListener("play", function() {
                        b.media.duration > 0 && b.displayChapters(c)
                    }, false);
                    c.kind == "slides" && b.setupSlides(c)
                },
                error: function() {
                    b.loadNextTrack()
                }
            })
        },
        enableTrackButton: function(a, b) {
            if (b === "") b = mejs.language.codes[a] || a;
            this.captionsButton.find("input[value=" + a + "]").prop("disabled", false).siblings("label").html(b);
            this.options.startLanguage == a && f("#" + this.id + "_captions_" + a).click();
            this.adjustLanguageBox()
        },
        addTrackButton: function(a, b) {
            if (b === "") b = mejs.language.codes[a] || a;
            this.captionsButton.find("ul").append(f('<li><input type="radio" name="' + this.id + '_captions" id="' + this.id + "_captions_" + a + '" value="' + a + '" disabled="disabled" /><label for="' + this.id + "_captions_" + a + '">' + b + " (loading)</label></li>"));
            this.adjustLanguageBox();
            this.container.find(".mejs-captions-translations option[value=" + a + "]").remove()
        },
        adjustLanguageBox: function() {
            this.captionsButton.find(".mejs-captions-selector").height(this.captionsButton.find(".mejs-captions-selector ul").outerHeight(true) + this.captionsButton.find(".mejs-captions-translations").outerHeight(true))
        },
        checkForTracks: function() {
            var a = false;
            if (this.options.hideCaptionsButtonWhenEmpty) {
                for (i = 0; i < this.tracks.length; i++)
                    if (this.tracks[i].kind == "subtitles") {
                        a = true;
                        break
                    }
                if (!a) {
                    this.captionsButton.hide();
                    this.setControlsSize()
                }
            }
        },
        displayCaptions: function() {
            if (typeof this.tracks !=
                "undefined") {
                var a, b = this.selectedTrack;
                if (b != null && b.isLoaded)
                    for (a = 0; a < b.entries.times.length; a++)
                        if (this.media.currentTime >= b.entries.times[a].start && this.media.currentTime <= b.entries.times[a].stop) {
                            this.captionsText.html(b.entries.text[a]);
                            this.captions.show().height(0);
                            return
                        }
                this.captions.hide()
            }
        },
        setupSlides: function(a) {
            this.slides = a;
            this.slides.entries.imgs = [this.slides.entries.text.length];
            this.showSlide(0)
        },
        showSlide: function(a) {
            if (!(typeof this.tracks == "undefined" || typeof this.slidesContainer ==
                "undefined")) {
                var b = this,
                    c = b.slides.entries.text[a],
                    e = b.slides.entries.imgs[a];
                if (typeof e == "undefined" || typeof e.fadeIn == "undefined") b.slides.entries.imgs[a] = e = f('<img src="' + c + '">').on("load", function() {
                    e.appendTo(b.slidesContainer).hide().fadeIn().siblings(":visible").fadeOut()
                });
                else !e.is(":visible") && !e.is(":animated") && e.fadeIn().siblings(":visible").fadeOut()
            }
        },
        displaySlides: function() {
            if (typeof this.slides != "undefined") {
                var a = this.slides,
                    b;
                for (b = 0; b < a.entries.times.length; b++)
                    if (this.media.currentTime >=
                        a.entries.times[b].start && this.media.currentTime <= a.entries.times[b].stop) {
                        this.showSlide(b);
                        break
                    }
            }
        },
        displayChapters: function() {
            var a;
            for (a = 0; a < this.tracks.length; a++)
                if (this.tracks[a].kind == "chapters" && this.tracks[a].isLoaded) {
                    this.drawChapters(this.tracks[a]);
                    this.hasChapters = true;
                    break
                }
        },
        drawChapters: function(a) {
            var b = this,
                c, e, d = e = 0;
            b.chapters.empty();
            for (c = 0; c < a.entries.times.length; c++) {
                e = a.entries.times[c].stop - a.entries.times[c].start;
                e = Math.floor(e / b.media.duration * 100);
                if (e + d > 100 || c == a.entries.times.length -
                    1 && e + d < 100) e = 100 - d;
                b.chapters.append(f('<div class="mejs-chapter" rel="' + a.entries.times[c].start + '" style="left: ' + d.toString() + "%;width: " + e.toString() + '%;"><div class="mejs-chapter-block' + (c == a.entries.times.length - 1 ? " mejs-chapter-block-last" : "") + '"><span class="ch-title">' + a.entries.text[c] + '</span><span class="ch-time">' + mejs.Utility.secondsToTimeCode(a.entries.times[c].start) + "&ndash;" + mejs.Utility.secondsToTimeCode(a.entries.times[c].stop) + "</span></div></div>"));
                d += e
            }
            b.chapters.find("div.mejs-chapter").click(function() {
                b.media.setCurrentTime(parseFloat(f(this).attr("rel")));
                b.media.paused && b.media.play()
            });
            b.chapters.show()
        }
    });
    mejs.language = {
        codes: {
            af: "Afrikaans",
            sq: "Albanian",
            ar: "Arabic",
            be: "Belarusian",
            bg: "Bulgarian",
            ca: "Catalan",
            zh: "Chinese",
            "zh-cn": "Chinese Simplified",
            "zh-tw": "Chinese Traditional",
            hr: "Croatian",
            cs: "Czech",
            da: "Danish",
            nl: "Dutch",
            en: "English",
            et: "Estonian",
            tl: "Filipino",
            fi: "Finnish",
            fr: "French",
            gl: "Galician",
            de: "German",
            el: "Greek",
            ht: "Haitian Creole",
            iw: "Hebrew",
            hi: "Hindi",
            hu: "Hungarian",
            is: "Icelandic",
            id: "Indonesian",
            ga: "Irish",
            it: "Italian",
            ja: "Japanese",
            ko: "Korean",
            lv: "Latvian",
            lt: "Lithuanian",
            mk: "Macedonian",
            ms: "Malay",
            mt: "Maltese",
            no: "Norwegian",
            fa: "Persian",
            pl: "Polish",
            pt: "Portuguese",
            ro: "Romanian",
            ru: "Russian",
            sr: "Serbian",
            sk: "Slovak",
            sl: "Slovenian",
            es: "Spanish",
            sw: "Swahili",
            sv: "Swedish",
            tl: "Tagalog",
            th: "Thai",
            tr: "Turkish",
            uk: "Ukrainian",
            vi: "Vietnamese",
            cy: "Welsh",
            yi: "Yiddish"
        }
    };
    mejs.TrackFormatParser = {
        webvvt: {
            pattern_identifier: /^([a-zA-z]+-)?[0-9]+$/,
            pattern_timecode: /^([0-9]{2}:[0-9]{2}:[0-9]{2}([,.][0-9]{1,3})?) --\> ([0-9]{2}:[0-9]{2}:[0-9]{2}([,.][0-9]{3})?)(.*)$/,
            parse: function(a) {
                var b = 0;
                a = mejs.TrackFormatParser.split2(a, /\r?\n/);
                for (var c = {
                    text: [],
                    times: []
                }, e, d; b < a.length; b++)
                    if (this.pattern_identifier.exec(a[b])) {
                        b++;
                        if ((e = this.pattern_timecode.exec(a[b])) && b < a.length) {
                            b++;
                            d = a[b];
                            for (b++; a[b] !== "" && b < a.length;) {
                                d = d + "\n" + a[b];
                                b++
                            }
                            d = f.trim(d).replace(/(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig, "<a href='$1' target='_blank'>$1</a>");
                            c.text.push(d);
                            c.times.push({
                                start: mejs.Utility.convertSMPTEtoSeconds(e[1]) == 0 ? 0.2 : mejs.Utility.convertSMPTEtoSeconds(e[1]),
                                stop: mejs.Utility.convertSMPTEtoSeconds(e[3]),
                                settings: e[5]
                            })
                        }
                    }
                return c
            }
        },
        dfxp: {
            parse: function(a) {
                a = f(a).filter("tt");
                var b = 0;
                b = a.children("div").eq(0);
                var c = b.find("p");
                b = a.find("#" + b.attr("style"));
                var e, d;
                a = {
                    text: [],
                    times: []
                };
                if (b.length) {
                    d = b.removeAttr("id").get(0).attributes;
                    if (d.length) {
                        e = {};
                        for (b = 0; b < d.length; b++) e[d[b].name.split(":")[1]] = d[b].value
                    }
                }
                for (b = 0; b < c.length; b++) {
                    var g;
                    d = {
                        start: null,
                        stop: null,
                        style: null
                    };
                    if (c.eq(b).attr("begin")) d.start = mejs.Utility.convertSMPTEtoSeconds(c.eq(b).attr("begin"));
                    if (!d.start && c.eq(b - 1).attr("end")) d.start = mejs.Utility.convertSMPTEtoSeconds(c.eq(b - 1).attr("end"));
                    if (c.eq(b).attr("end")) d.stop = mejs.Utility.convertSMPTEtoSeconds(c.eq(b).attr("end"));
                    if (!d.stop && c.eq(b + 1).attr("begin")) d.stop = mejs.Utility.convertSMPTEtoSeconds(c.eq(b + 1).attr("begin"));
                    if (e) {
                        g = "";
                        for (var k in e) g += k + ":" + e[k] + ";"
                    }
                    if (g) d.style = g;
                    if (d.start == 0) d.start = 0.2;
                    a.times.push(d);
                    d = f.trim(c.eq(b).html()).replace(/(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig,
                        "<a href='$1' target='_blank'>$1</a>");
                    a.text.push(d);
                    if (a.times.start == 0) a.times.start = 2
                }
                return a
            }
        },
        split2: function(a, b) {
            return a.split(b)
        }
    };
    if ("x\n\ny".split(/\n/gi).length != 3) mejs.TrackFormatParser.split2 = function(a, b) {
        var c = [],
            e = "",
            d;
        for (d = 0; d < a.length; d++) {
            e += a.substring(d, d + 1);
            if (b.test(e)) {
                c.push(e.replace(b, ""));
                e = ""
            }
        }
        c.push(e);
        return c
    }
})(mejs.$);
(function(f) {
    f.extend(mejs.MepDefaults, {
        contextMenuItems: [{
            render: function(a) {
                if (typeof a.enterFullScreen == "undefined") return null;
                return a.isFullScreen ? mejs.i18n.t("Turn off Fullscreen") : mejs.i18n.t("Go Fullscreen")
            },
            click: function(a) {
                a.isFullScreen ? a.exitFullScreen() : a.enterFullScreen()
            }
        }, {
            render: function(a) {
                return a.media.muted ? mejs.i18n.t("Unmute") : mejs.i18n.t("Mute")
            },
            click: function(a) {
                a.media.muted ? a.setMuted(false) : a.setMuted(true)
            }
        }, {
            isSeparator: true
        }, {
            render: function() {
                return mejs.i18n.t("Download Video")
            },
            click: function(a) {
                window.location.href = a.media.currentSrc
            }
        }]
    });
    f.extend(MediaElementPlayer.prototype, {
        buildcontextmenu: function(a) {
            a.contextMenu = f('<div class="mejs-contextmenu"></div>').appendTo(f("body")).hide();
            a.container.bind("contextmenu", function(b) {
                if (a.isContextMenuEnabled) {
                    b.preventDefault();
                    a.renderContextMenu(b.clientX - 1, b.clientY - 1);
                    return false
                }
            });
            a.container.bind("click", function() {
                a.contextMenu.hide()
            });
            a.contextMenu.bind("mouseleave", function() {
                a.startContextMenuTimer()
            })
        },
        cleancontextmenu: function(a) {
            a.contextMenu.remove()
        },
        isContextMenuEnabled: true,
        enableContextMenu: function() {
            this.isContextMenuEnabled = true
        },
        disableContextMenu: function() {
            this.isContextMenuEnabled = false
        },
        contextMenuTimeout: null,
        startContextMenuTimer: function() {
            var a = this;
            a.killContextMenuTimer();
            a.contextMenuTimer = setTimeout(function() {
                a.hideContextMenu();
                a.killContextMenuTimer()
            }, 750)
        },
        killContextMenuTimer: function() {
            var a = this.contextMenuTimer;
            if (a != null) {
                clearTimeout(a);
                delete a
            }
        },
        hideContextMenu: function() {
            this.contextMenu.hide()
        },
        renderContextMenu: function(a,
                                    b) {
            for (var c = this, e = "", d = c.options.contextMenuItems, g = 0, k = d.length; g < k; g++)
                if (d[g].isSeparator) e += '<div class="mejs-contextmenu-separator"></div>';
                else {
                    var j = d[g].render(c);
                    if (j != null) e += '<div class="mejs-contextmenu-item" data-itemindex="' + g + '" id="element-' + Math.random() * 1E6 + '">' + j + "</div>"
                }
            c.contextMenu.empty().append(f(e)).css({
                top: b,
                left: a
            }).show();
            c.contextMenu.find(".mejs-contextmenu-item").each(function() {
                var m = f(this),
                    q = parseInt(m.data("itemindex"), 10),
                    p = c.options.contextMenuItems[q];
                typeof p.show !=
                "undefined" && p.show(m, c);
                m.click(function() {
                    typeof p.click != "undefined" && p.click(c);
                    c.contextMenu.hide()
                })
            });
            setTimeout(function() {
                c.killControlsTimer("rev3")
            }, 100)
        }
    })
})(mejs.$);
(function(f) {
    f.extend(mejs.MepDefaults, {
        postrollCloseText: mejs.i18n.t("Close")
    });
    f.extend(MediaElementPlayer.prototype, {
        buildpostroll: function(a, b, c) {
            var e = this.container.find('link[rel="postroll"]').attr("href");
            if (typeof e !== "undefined") {
                a.postroll = f('<div class="mejs-postroll-layer mejs-layer"><a class="mejs-postroll-close" onclick="$(this).parent().hide();return false;">' + this.options.postrollCloseText + '</a><div class="mejs-postroll-layer-content"></div></div>').prependTo(c).hide();
                this.media.addEventListener("ended",
                    function() {
                        f.ajax({
                            dataType: "html",
                            url: e,
                            success: function(d) {
                                c.find(".mejs-postroll-layer-content").html(d)
                            }
                        });
                        a.postroll.show()
                    }, false)
            }
        }
    })
})(mejs.$);
/**
 *	Template Functions
 *	Version: 1.0.9
 */
$(document).ready(function() {
    "use strict";
    var e = ".header",
        i = ".header-animated",
        o = ".header-sticky",
        a = ".header-background",
        t = ".header-compact",
        n = ".header-in",
        s = ".header-out",
        r = ".header-positioned",
        l = "#bkg-retina-img, #retina-img, [data-2x]",
        d = ".equalize",
        c = ".fullscreen-sections-wrapper",
        h = ".fullscreen-section",
        u = ".scroll-link",
        f = 1e3,
        p = "easeInOutQuart",
        g = .6,
        m = ".grid-container",
        v = ".grid-item, .masonry-stamp",
        w = ".grid-filter-menu",
        y = "0.7s",
        C = "0.7s",
        x = !1,
        b = [".video-container iframe", ".video-container object"],
        S = ["www.youtube.com", "player.vimeo.com"],
        T = ".mejs-container audio, .mejs-container video",
        z = ".carousel-slider",
        k = ".content-slider",
        P = ".tm-slider-container.fullscreen",
        O = ".full-width-slider",
        A = ".logo-slider",
        M = ".hero-slider",
        H = ".testimonial-slider",
        I = ".previous-testimonial-slider",
        F = ".next-testimonial-slider",
        E = ".team-slider",
        L = ".previous-team-slider",
        W = ".next-team-slider",
        D = ".portfolio-recent-slider",
        V = ".previous-portfolio-recent-slider",
        j = ".next-portfolio-recent-slider",
        q = "#tm-lightbox",
        Q = ".lightbox-link",
        R = ".form-element",
        _ = ".form-response",
        N = ".form-honeypot",
        B = ".form-submit",
        U = ".signup-form",
        Z = ".required-field",
        Y = "Please wait.",
        G = "Sending...",
        X = "You have been added to our list!",
        J = "Oh boy an error occurred, please try again.",
        K = "Please fill out required fields.",
        ei = "Please enter a valid email address.",
        ii = ".contact-form",
        oi = ".required-field",
        ai = "Please wait.",
        ti = "Sending...",
        ni = "Thank you, your email has been received!",
        si = "Oh boy an error occurred, please try again.",
        ri = "Please fill out required fields.",
        li = "Please enter a valid email address.",
        di = ".map-container",
        ci = ["images/assets/map-marker.png", "images/assets/map-marker-2.png"],
        hi = [
            [40.723301, -74.002988],
            [40.691052, -73.925457]
        ],
        ui = ["Downtown New York Office<br>44 St. West 32", "The Brooklyn Office<br>East Village 55th St."],
        fi = 45,
        pi = 53,
        gi = 12,
        mi = !1,
        vi = !1,
        $i = !1,
        wi = !0,
        yi = !0,
        Ci = !1,
        xi = !0,
        bi = !0,
        Si = "body",
        Ti = ".fade-location, .logo a, .footer-logo a, .navigation a, .side-navigation a, .overlay-navigation a, .grid .overlay-link, .post-media .overlay-link, .post-title a, .post-read-more a, .pagination-previous, .pagination-next",
        zi = ".no-page-fade, .mail-link, .lightbox-link, .contains-sub-menu, .blog .pagination-previous, .blog .pagination-next, .disabled, .scroll-link, .navigation-show a, a.navigation-show",
        ki = "webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend",
        Pi = {
            init: function() {
                Pi.siteHeader(), Pi.retinize(), Pi.equalize(768), Pi.parallax(".parallax.fixed-height", !0, !1, !0), Pi.parallax(".parallax.fullscreen", !0, !0, !0), Pi.fullScreenSection(), Pi.masonry(), Pi.logoSlider(), Pi.heroSlider(), Pi.testimonialSlider(), Pi.teamSlider(), Pi.portfolioSlider(), Pi.carouselSlider(), Pi.contentSlider(), Pi.fullScreenSlider(), Pi.fullWidthSlider(), Pi.lightbox(), Pi.counter(".stat", ".stat-counter", !1), Pi.horizon(".horizon", ".parallax .horizon", "easeInOutQuint", !1, 1), Pi.videos(), Pi.mediaElement(), Pi.signupForm(), Pi.contactForm(), Pi.enablePlaceHolder(), document.getElementById("map-canvas") && google.maps.event.addDomListener(window, "load", Pi.googleMap), Pi.pageFade(), Pi.scrollToSection()
            },
            retinize: function() {
                $(l).retinizeImages()
            },
            equalize: function(e) {
                imagesLoaded($(d), function() {
                    $(d).equalizeHeights({
                        clearUnder: e
                    })
                })
            },
            parallax: function(e, i, o, a) {
                $(e).snowBridge({
                    scaleContainer: i,
                    scaleUnder: 960,
                    scaleMinHeight: 400,
                    fullscreen: o,
                    fadeInOut: a,
                    fadeThreshold: .5,
                    retinaSupport: !1,
                    parallaxFactor: .6,
                    onLoaded: function() {
                        Pi.horizon(".horizon", "", "easeInOutQuint", !1, 1)
                    }
                })
            },
            horizon: function(e, i, o, a, t) {
                $(e).not(i).horizon({
                    easing: o,
                    recurring: a,
                    threshold: t
                })
            },
            counter: function(e, i, o) {
                $(i).counter({
                    autoStart: !1
                }), $(e).each(function() {
                    var e = $(this);
                    e.horizon({
                        recurring: o,
                        inView: function() {
                            return e.find(i).data("counting") ? !1 : void e.find(i).each(function() {
                                e.find(i).data("counting", !0);
                                var o = $(this).data("counter");
                                o.startCounter()
                            })
                        },
                        outOfView: function() {
                            return o && e.find(i).data("counting") ? void e.find(i).each(function() {
                                e.find(i).data("counting", !1);
                                var o = $(this).data("counter");
                                o.clearCounter()
                            }) : !1
                        }
                    })
                })
            },
            carouselSlider: function() {
                $(z).avalancheSlider({
                    animation: "slide",
                    easing: "easeInOutQuart",
                    speed: 700,
                    autoAdvance: !1,
                    forceFit: !1,
                    scaleMinHeight: "auto",
                    carousel: !0,
                    carouselVisible: 3,
                    lazyLoad: !1,
                    navArrows: !1,
                    navPagination: !0,
                    navShowOnHover: !1,
                    retinaSupport: !1
                })
            },
            contentSlider: function() {
                $(k).avalancheSlider({
                    animation: "slide",
                    easing: "easeInOutQuart",
                    speed: 700,
                    autoAdvance: !1,
                    forceFit: !1,
                    scaleMinHeight: "auto",
                    lazyLoad: !0,
                    navArrows: !0,
                    navPagination: !0,
                    navShowOnHover: !1,
                    retinaSupport: !1
                })
            },
            fullScreenSlider: function() {
                $(P).avalancheSlider({
                    animation: "slide",
                    easing: "easeInOutQuart",
                    speed: 700,
                    autoAdvance: !1,
                    fullscreen: !0,
                    captionScaling: !1,
                    lazyLoad: !0,
                    navArrows: !0,
                    navPagination: !0,
                    navShowOnHover: !0,
                    respectRatio: !1,
                    retinaSupport: !1
                })
            },
            fullWidthSlider: function() {
                $(O).avalancheSlider({
                    animation: "slide",
                    easing: "easeInOutQuart",
                    speed: 700,
                    autoAdvance: !1,
                    forceFit: !1,
                    fullwidth: !0,
                    scaleUnder: 960,
                    scaleMinHeight: 400,
                    captionScaling: !0,
                    lazyLoad: !0,
                    navArrows: !0,
                    navPagination: !0,
                    navShowOnHover: !0,
                    respectRatio: !1,
                    retinaSupport: !1
                })
            },
            logoSlider: function() {
                $(A).avalancheSlider({
                    animation: "slide",
                    easing: "easeInOutQuart",
                    speed: 700,
                    autoAdvance: !0,
                    carousel: !0,
                    carouselVisible: 5,
                    carouselScaleHeight: !0,
                    navArrows: !1,
                    navPagination: !0,
                    showProgressBar: !1,
                    navShowOnHover: !1,
                    retinaSupport: !1
                })
            },
            heroSlider: function() {
                $(M).avalancheSlider({
                    animation: "slide",
                    easing: "easeInOutQuart",
                    speed: 700,
                    autoAdvance: !1,
                    carousel: !0,
                    carouselVisible: 1,
                    captionScaling: !1,
                    forceFit: !0,
                    scaleUnder: 480,
                    scaleMinHeight: 480,
                    fullwidth: !0,
                    navArrows: !1,
                    navPagination: !0,
                    retinaSupport: !0
                })
            },
            testimonialSlider: function() {
                $(H).avalancheSlider({
                    animation: "slide",
                    easing: "easeInOutQuart",
                    speed: 900,
                    autoAdvance: !1,
                    scaleMinHeight: "auto",
                    carousel: !0,
                    carouselVisible: 1,
                    carouselScaleHeight: !0,
                    lazyLoad: !1,
                    navArrows: !1,
                    navPagination: !0,
                    navShowOnHover: !1,
                    retinaSupport: !1
                });
                var e = $(H).data("avalancheSlider");
                $(I).on("click", function(i) {
                    i.preventDefault(), e.prevSlide()
                }), $(F).on("click", function(i) {
                    i.preventDefault(), e.nextSlide()
                })
            },
            teamSlider: function() {
                $(E).avalancheSlider({
                    animation: "slide",
                    easing: "easeInOutQuart",
                    speed: 900,
                    autoAdvance: !1,
                    carousel: !0,
                    carouselVisible: 3,
                    carouselScaleHeight: !0,
                    lazyLoad: !1,
                    navArrows: !1,
                    navPagination: !0,
                    navShowOnHover: !1,
                    retinaSupport: !1
                });
                var e = $(E).data("avalancheSlider");
                $(L).on("click", function(i) {
                    i.preventDefault(), e.prevSlide()
                }), $(W).on("click", function(i) {
                    i.preventDefault(), e.nextSlide()
                })
            },
            portfolioSlider: function() {
                $(D).avalancheSlider({
                    animation: "slide",
                    easing: "easeInOutQuart",
                    speed: 900,
                    autoAdvance: !1,
                    carousel: !0,
                    carouselVisible: 3,
                    carouselScaleHeight: !0,
                    lazyLoad: !0,
                    navArrows: !1,
                    navPagination: !1,
                    navShowOnHover: !1,
                    retinaSupport: !1
                });
                var e = $(D).data("avalancheSlider");
                $(V).on("click", function(i) {
                    i.preventDefault(), e.prevSlide()
                }), $(j).on("click", function(i) {
                    i.preventDefault(), e.nextSlide()
                })
            },
            lightbox: function() {
                $(Q).summitLightbox({
                    lightboxAnimation: "slideInTop",
                    contentAnimation: "slide",
                    slideAmount: 100,
                    easing: "swing",
                    speed: 350,
                    onLoaded: function() {
                        var e = $(q).find(".tml-aux-exit");
                        if (0 === e.length) return !1;
                        var i = $(Q).data("summitLightbox");
                        e.on("click", function(e) {
                            e.preventDefault(), $(this).css({
                                transition: "none"
                            }), i.destroyLightbox()
                        })
                    }
                })
            },
            videos: function() {
                fluidvids.init({
                    selector: b,
                    players: S
                })
            },
            mediaElement: function() {
                $(T).each(function() {
                    var e = !1;
                    $(this).is("audio") && (e = !0), $(this).mediaelementplayer({
                        features: e ? ["playpause", "progress", "volume", "fullscreen"] : ["playpause", "progress", "current", "duration", "tracks", "volume", "fullscreen"],
                        videoWidth: "100%",
                        videoHeight: "100%",
                        audioWidth: "100%",
                        videoVolume: "vertical",
                        audioVolume: "horizontal"
                    })
                })
            },
            siteHeader: function() {
                function l() {
                    d = $(window).width(), c = $(window).height(), h = Math.ceil(C.outerHeight()), u = "window-height" === C.data("bkg-threshold") ? c - h : C.data("bkg-threshold"), f = "window-height" === C.data("compact-threshold") ? c - h : C.data("compact-threshold"), p = "window-height" === C.data("sticky-threshold") ? c - h : C.data("sticky-threshold"), g = C.data("helper-in-threshold"), m = C.data("helper-out-threshold")
                }
                var d, c, h, u, f, p, g, m, v, w = 0,
                    y = 960,
                    C = $(e),
                    x = C.is("[data-sticky-threshold]") ? !0 : !1;
                i = i.split(".").join(""), o = o.split(".").join(""), a = a.split(".").join(""), t = t.split(".").join(""), n = n.split(".").join(""), s = s.split(".").join(""), r = r.split(".").join("");
                var b = function(i) {
                        return $("body").hasClass("mobile") || y > d ? !1 : (p && $(i).scrollTop() >= p || 0 === p ? ($(e).addClass(o), g && m && $(e).addClass(r)) : ($(e).removeClass(o), g && m && $(e).removeClass(r)), u && $(i).scrollTop() >= u ? $(e).addClass(a) : $(e).removeClass(a), f && $(i).scrollTop() >= f ? $(e).addClass(t) : $(e).removeClass(t), v = $(i).scrollTop(), v > w ? (g && $(i).scrollTop() >= g && $(e).addClass(n), $(e).removeClass(s)) : w > v && (g && $(i).scrollTop() <= g && ($(e).removeClass(n), $(e).removeClass(s)), !g || $(i).scrollTop() < g || $(i).scrollTop() > m || ($(e).addClass(s), $(s).on(ki, function(o) {
                            return o.stopPropagation(), o.target !== $(i)[0] ? !1 : void $(e).removeClass(s)
                        }))), void(w = v))
                    },
                    S = function() {
                        return l(), $("body").hasClass("mobile") ? !1 : (d > y && x && C.css({
                            height: C.outerHeight() + "px"
                        }), d > y && $(window).scrollTop() >= p ? ($(e).addClass(o), g && m && $(e).addClass(r)) : ($(e).removeClass(o), g && m && $(e).removeClass(r)), d > y && $(window).scrollTop() < u ? $(e).removeClass(a) : d > y && $(window).scrollTop() > u && $(e).addClass(a), d > y && $(window).scrollTop() < f ? $(e).removeClass(t) : d > y && $(window).scrollTop() > f && $(e).addClass(t), void(y > d && $(e).removeClass(t)))
                    };
                $(window).on("scroll", function() {
                    b($(this))
                }), $(window).on("resize", function() {
                    S()
                }), $("body").hasClass("mobile") || $(window).one("load", function() {
                    l(), b($(this)), d > y && x && C.css({
                        height: h + "px"
                    }), $(e).addClass(i)
                })
            },
            fullScreenSection: function() {
                var e = function() {
                        var e;
                        if ($(c).find(h).length > 1) {
                            if ($("body").hasClass("mobile")) return !1;
                            var i, o = $(c).hasClass("no-navigation") ? !1 : !0;
                            if (o) {
                                i = $("<div>").addClass("fs-pagination").appendTo($(c));
                                for (var a = 1; a < $(c).children().length; a++) e = $(c).children().eq(a - 1).attr("id"), $(c).find("#" + e).data("index", a), $(c).find(i).append('<a href="#' + e + '" id="fs-pagination-' + a + '" data-index="' + a + '" class="fs-bullet-nav" />');
                                $(window).on("resize", function() {
                                    t()
                                });
                                var t = function() {
                                    $(i).css({
                                        marginTop: -$(i).outerHeight() / 2 + "px",
                                        opacity: 1
                                    })
                                };
                                t();
                                var n = $(c).find(".fs-bullet-nav");
                                n.each(function() {
                                    $(this).on("click", function(i) {
                                        if (i.preventDefault(), $(this).hasClass("active")) return !1;
                                        parseFloat($(this).data("index"));
                                        e = $(this).attr("href"), Pi.scrollPage(e, 0)
                                    })
                                })
                            }
                            $(window).on("scroll", function() {
                                $(c).find(h).each(function() {
                                    s($(this))
                                })
                            });
                            var s = function(e) {
                                    e.data("fs-scrolling") || (window.requestAnimationFrame(function() {
                                        r(e)
                                    }), e.data("fs-scrolling", !0))
                                },
                                r = function(e) {
                                    if (Pi.isElementVisible(e, g) && o) {
                                        $(i).css({
                                            opacity: 1
                                        });
                                        var a = $(c).find(e).data("index");
                                        i.find(".active").removeClass("active"), i.find("#fs-pagination-" + a).addClass("active"), e.hasClass("nav-dark") ? i.addClass("nav-dark") : i.removeClass("nav-dark")
                                    }
                                    $(i).css(o && Pi.isElementVisible($(c), g) ? {
                                        opacity: 1,
                                        visibility: "visible"
                                    } : {
                                        opacity: 0,
                                        visibility: "hidden"
                                    }), e.data("fs-scrolling", !1)
                                };
                            $(c).find(h).each(function() {
                                s($(this))
                            })
                        }
                    },
                    i = function() {
                        $(h).each(function() {
                            var e = $(this),
                                i = e.find(".background-image, .background-slider-wrapper");
                            if ($(this).is("[data-width],[data-height]"))
                                if ($("body").hasClass("mobile") || 768 >= o) {
                                    e.addClass("fs-image-scale content-below-on-mobile");
                                    var t = e.data("width"),
                                        n = e.data("height"),
                                        s = e.data("min-height"),
                                        r = e.width(),
                                        l = n > t ? n / t : t / n,
                                        d = n > t ? r * l : r / l;
                                    d = s && s >= d ? s : d, e.css({
                                        height: "auto"
                                    }), i.css({
                                        height: d + "px",
                                        minHeight: d + "px"
                                    })
                                } else e.removeClass("fs-image-scale"), e.css({
                                    height: ""
                                }), i.css({
                                    height: "",
                                    minHeight: ""
                                });
                            else $("body").hasClass("mobile") || 768 >= o ? i.css({
                                height: a + "px"
                            }) : (e.removeClass("fs-image-scale"), e.css({
                                height: ""
                            }), i.css({
                                height: "",
                                minHeight: ""
                            }))
                        })
                    },
                    o = $(window).width(),
                    a = $(window).height();
                $(window).on("resize", function() {
                    o = $(window).width(), a = $(this).height(), i()
                }).resize(), e()
            },
            scrollToSection: function() {
                var e = [];
                $(u).each(function() {
                    e.push($(this).attr("href")), $(this).on("click", function(e) {
                        e.preventDefault();
                        var i = $(this).attr("href"),
                            o = $(this).data("offset") ? $(this).data("offset") : 0;
                        Pi.scrollPage(i, o)
                    })
                }), $(window).one("load", function() {
                    $.each(e, function(e, o) {
                        i($(o))
                    })
                }), $(window).on("scroll", function() {
                    $.each(e, function(e, o) {
                        i($(o))
                    })
                });
                var i = function(e) {
                        e.data("section-scrolling") || (window.requestAnimationFrame(function() {
                            o(e)
                        }), e.data("section-scrolling", !0))
                    },
                    o = function(e) {
                        if (Pi.isElementVisible(e, g)) {
                            var i = e.attr("id"),
                                o = $('a[href="#' + i + '"]').closest("header, .side-navigation-wrapper, .overlay-navigation-wrapper");
                            o && ($('a[href="#' + i + '"]').closest("header, .side-navigation-wrapper, .overlay-navigation-wrapper").find(u).parent().removeClass("current"), $('a[href="#' + i + '"]').parent().addClass("current"))
                        }
                        e.data("section-scrolling", !1)
                    }
            },
            isElementVisible: function(e, i) {
                if (i = e.is("[data-visible-threshold]") ? e.data("visible-threshold") : g, void 0 === e.offset()) return console.log("template-functions.js@isElementVisible: " + e.selector + " cannot be found in your html page."), !1;
                var o = $(window).height(),
                    a = $(window).scrollTop(),
                    t = a + $(window).height(),
                    n = e.offset().top,
                    s = (e.height(), n + e.outerHeight() - o * i),
                    r = n + o * i;
                return e.is($(c)) || (r > t || a > s ? e.removeClass("in-view") : e.addClass("in-view")), t >= r && s >= a
            },
            scrollPage: function(e, i) {
                $("html, body").animate({
                    scrollTop: $(e).offset().top + i
                }, f, p)
            },
            masonry: function() {
                $(m).each(function() {
                    var e, i, o = $(this),
                        a = $(this).find(".grid");
                    if (o.data("layout-mode")) {
                        e = o.data("layout-mode") ? o.data("layout-mode") : "masonry", o.is("[data-layout-mode]") && o.addClass("masonry"), o.is("[data-set-dimensions]") && o.addClass("masonry-set-dimensions"), x = o.is("[data-animate-resize]") ? !0 : !1, C = o.is("[data-animate-resize-duration]") ? o.data("animate-resize-duration") + "s" : C, o.is(".masonry-set-dimensions, .masonry-set-dimensions-2") ? (o.is(".full-width.no-margins") && Pi.masonryWrapperWidth(o, a), i = Pi.masonryColWidth(o, a), Pi.masonryThumbSizes(o, a, Pi.masonryColWidth(o, a))) : i = ".grid-sizer";
                        var t = $('<div class="tm-loader"><div id="circle" /></div>');
                        t.appendTo(o), imagesLoaded(a, function() {
                            a.isotope({
                                filter: "*",
                                itemSelector: ".grid-item",
                                isResizeBound: x ? !0 : !1,
                                transitionDuration: y,
                                layoutMode: e,
                                stamp: ".masonry-stamp",
                                masonry: {
                                    columnWidth: i
                                }
                            }), o.find(t).remove(), a.css({
                                visibility: "visible",
                                minHeight: "initial"
                            });
                            var n = a.children().length - 1;
                            $("body").hasClass("transition-support") || o.removeClass("fade-in-progressively"), a.children().each(function(e) {
                                $(this).delay(100 * e).animate({
                                    opacity: 1
                                }, 500, "easeInOutQuart", function() {
                                    e === n && o.removeClass("fade-in-progressively")
                                })
                            }), $(window).on("resize", function() {
                                o.is(".full-width.no-margins") && Pi.masonryWrapperWidth(o, a), Pi.masonryThumbSizes(o, a, Pi.masonryColWidth(o, a)), x ? a.isotope({
                                    transitionDuration: C,
                                    masonry: {
                                        columnWidth: ".grid-sizer" !== i ? Pi.masonryColWidth(o, a) : ".grid-sizer"
                                    }
                                }) : (a.removeClass("filtering"), a.isotope({
                                    transitionDuration: 0,
                                    masonry: {
                                        columnWidth: ".grid-sizer" !== i ? Pi.masonryColWidth(o, a) : ".grid-sizer"
                                    }
                                }).isotope("layout").isotope({
                                    transitionDuration: C
                                }))
                            })
                        })
                    } else a.css({
                        visibility: "visible"
                    })
                }), $(w).each(function() {
                    $(this).find("a").on("click", function(e) {
                        e.preventDefault(), $(this).closest(w).find(".active").removeClass("active"), $(this).addClass("active");
                        var i = $(this).closest(w).data("target-grid") ? $(this).closest(w).data("target-grid") : m;
                        i = $(i).find(".grid"), y = i.is("[data-animate-filter-duration]") ? i.data("animate-filter-duration") + "s" : y, i.isotope({
                            transitionDuration: y
                        });
                        var o = $(this).attr("data-filter");
                        $(i).addClass("filtering").isotope({
                            filter: o
                        })
                    })
                })
            },
            masonryWrapperWidth: function(e, i) {
                var o = Math.ceil(1.001 * e.width());
                i.css({
                    maxWidth: o + "px",
                    width: o + "px"
                })
            },
            masonryColWidth: function(e, i) {
                var o, a = $(window).width(),
                    t = Math.ceil(e.width()),
                    n = e.is(".full-width.no-margins") ? Math.ceil(1.001 * t) : i.width();
                return e.is(".full-width.small-margins, .full-width.no-margins") ? (i.hasClass("content-grid-2") && (o = 480 > a ? n / 1 : n / 2), i.hasClass("content-grid-3") && (o = a > 768 ? n / 3 : 768 >= a && a > 480 ? n / 2 : n / 1), i.hasClass("content-grid-4") && (o = a > 1140 ? n / 4 : 1140 >= a && a > 768 ? n / 3 : 768 >= a && a > 480 ? n / 2 : n / 1), i.hasClass("content-grid-5") && (o = a > 1300 ? n / 5 : 1300 >= a && a > 1140 ? n / 4 : a > 1140 || 768 > a ? 768 >= a && a > 480 ? n / 2 : n / 1 : n / 3), i.hasClass("content-grid-6") && (o = a > 1300 ? n / 6 : 1300 >= a && a > 1140 ? n / 4 : a > 1140 || 768 > a ? 768 >= a && a > 480 ? n / 2 : n / 1 : n / 3)) : (i.hasClass("content-grid-2") && (o = 600 > a ? n / 1 : n / 2), i.hasClass("content-grid-3") && (o = a > 960 ? n / 3 : 960 >= a && a > 600 ? n / 2 : n / 1), i.hasClass("content-grid-4") && (o = a > 1140 ? n / 4 : 1140 >= a && a > 960 ? n / 3 : 960 >= a && a > 600 ? n / 2 : n / 1), i.hasClass("content-grid-5") && (o = a > 1300 ? n / 5 : 1300 >= a && a > 1140 ? n / 4 : 1140 >= a && a > 960 ? n / 3 : 960 >= a && a > 600 ? n / 2 : n / 1), i.hasClass("content-grid-6") && (o = a > 1300 ? n / 6 : 1300 >= a && a > 1140 ? n / 4 : 1140 >= a && a > 960 ? n / 3 : 960 >= a && a > 600 ? n / 2 : n / 1)), o = Math.floor(o)
            },
            masonryThumbSizes: function(e, i, o) {
                var a, t = $(window).width(),
                    n = 2,
                    s = $(".masonry-set-dimensions").hasClass("no-margins") ? 0 : parseFloat(i.find(".grid-item").css("padding-left")),
                    r = e.is(".masonry-set-dimensions") ? e.is("[data-grid-ratio]") ? parseFloat(e.data("grid-ratio")) : 1.5 : 1;
                if (a = Math.floor((o - s) / r + s), e.is(".masonry-set-dimensions")) {
                    var l = e.is(".full-width.small-margins, .full-width.no-margins") ? 480 : 600;
                    i.find(v).each(function() {
                        $(this).css($(this).is(".large, .masonry-stamp.large") ? $(this).is(".portrait, .masonry-stamp.portrait") ? {
                            width: t > l ? Math.floor(o * n) + "px" : o + "px",
                            height: t > l ? Math.floor(2 * a * n) + "px" : 2 * a + "px"
                        } : {
                            width: t > l ? Math.floor(o * n) + "px" : o + "px",
                            height: t > l ? Math.floor(a * n) + "px" : a + "px"
                        } : $(this).is(".wide, .masonry-stamp.wide") ? {
                            width: t > l ? Math.floor(o * n) + "px" : o + "px",
                            height: t > l ? a + "px" : a / 2 + "px"
                        } : $(this).is(".portrait, .masonry-stamp.portrait") ? {
                            width: o + "px",
                            height: Math.floor(a * n) + "px"
                        } : {
                            width: o + "px",
                            height: a + "px"
                        })
                    })
                }
                e.is(".masonry-set-dimensions-2") && i.find(v).each(t > 600 ? function() {
                    $(this).hasClass("horizontal") ? $(this).hasClass("two-third") ? $(this).children(".item-description").length ? $(this).css({
                        width: Math.floor(o * (n + 1)) + "px",
                        height: Math.floor(a) + "px"
                    }) : $(this).addClass("no-description").css({
                        width: Math.floor(o * n) + "px",
                        height: Math.floor(a) + "px"
                    }) : $(this).css({
                        width: Math.floor(o * n) + "px",
                        height: Math.floor(a) + "px"
                    }) : $(this).css($(this).hasClass("vertical") ? $(this).hasClass("two-third") ? $(this).children(".item-description").length ? {
                        width: o + "px",
                        height: Math.floor(o * (n + 1)) + "px"
                    } : {
                        width: o + "px",
                        height: Math.floor(a * n) + "px"
                    } : {
                        width: o + "px",
                        height: Math.floor(a * n) + "px"
                    } : {
                        width: o + "px",
                        height: Math.floor(a) + "px"
                    })
                } : function() {
                    $(this).css($(this).find("iframe, video, .tm-slider-container").length ? {
                        width: o + "px",
                        height: a + "px"
                    } : {
                        width: "",
                        height: ""
                    })
                })
            },
            signupForm: function() {
                $(U).submit(function(e) {
                    e.preventDefault();
                    var i = $(this),
                        o = i.parent().find(_),
                        a = i.find(R),
                        t = i.find('input[type="email"]'),
                        n = i.find(N),
                        s = i.find(B),
                        r = i.attr("action"),
                        l = i.attr("method"),
                        d = i.serialize(),
                        c = !1,
                        h = !1,
                        u = !1;
                    if (Z = Z.split(".").join(""), a.removeClass(Z), a.each(function() {
                            $(this).attr("required") && ($(this).val() || (c = !0, $(this).addClass(Z), o.hide().text(K).fadeIn(200)))
                        }), c || (h = !0), t.val() && !Pi.isValidEmail(t.val()) ? (o.hide().text(ei).fadeIn(200), t.addClass(Z)) : u = !0, "" !== n.val()) return !1;
                    if (c && t.val() && !Pi.isValidEmail(t.val()) && o.hide().text(K + " " + ei).fadeIn(200), h && u) {
                        var f = $(s).val();
                        $(s).css({
                            width: $(s).outerWidth() + "px"
                        }).val(G).attr("disabled", !0), o.hide().text(Y).fadeIn(200), $.ajax({
                            url: r,
                            type: l,
                            data: d,
                            dataType: "json"
                        }).done(function(e) {
                            try {
                                e.response === !0 ? (o.text(X), o.delay(1500).fadeOut(200), a.val("")) : o.hide().text(e.json.error_message).fadeIn(200)
                            } catch (i) {
                                console.log("error in parsing returned ajax data: " + i), o.hide().text("Error occurred. Please see the console for details.").fadeIn(200)
                            }
                        }).fail(function(e, i, a) {
                            console.log("Error occured in processing your request:"), console.log(e), console.log("Text status"), console.log(i), console.log("Error thrown"), console.log(a), console.log("Servre response"), console.log(e.status), console.log("Response Text may contain error output from PHP"), console.log(e.responseText), o.hide().text(J + i + " (" + a + ")").fadeIn(200)
                        }).always(function() {
                            $(s).css({
                                width: ""
                            }).val(f).attr("disabled", !1)
                        })
                    }
                })
            },
            contactForm: function() {
                $(ii).submit(function(e) {
                    e.preventDefault();
                    var i = $(this),
                        o = i.parent().find(_),
                        a = i.find(R),
                        t = i.find('input[type="email"]'),
                        n = i.find(N),
                        s = i.find(B),
                        r = i.attr("action"),
                        l = i.attr("method"),
                        d = i.serialize(),
                        c = !1,
                        h = !1,
                        u = !1;
                    if (oi = oi.split(".").join(""), a.removeClass(oi), a.each(function() {
                            $(this).attr("required") && ($(this).val() || (c = !0, $(this).addClass(oi), o.hide().text(ri).fadeIn(200)))
                        }), c || (h = !0), t.val() && !Pi.isValidEmail(t.val()) ? (o.hide().text(li).fadeIn(200), t.addClass(oi)) : u = !0, "" !== n.val()) return !1;
                    if (c && t.val() && !Pi.isValidEmail(t.val()) && o.hide().text(ri + " " + li).fadeIn(200), h && u) {
                        var f = $(s).val();
                        $(s).css({
                            width: $(s).outerWidth() + "px"
                        }).val(ti).attr("disabled", !0), o.hide().text(ai).fadeIn(200), $.ajax({
                            url: r,
                            type: l,
                            data: d,
                            dataType: "json"
                        }).done(function(e) {
                            try {
                                if (e.response === !0) o.text(ni), o.delay(1500).fadeOut(200), a.val("");
                                else {
                                    var i = void 0 === e.json.error_message ? "There is a possibility that your message was not sent. Please check up the server or script configuration." : e.json.error_message;
                                    o.hide().text(si + " " + i).fadeIn(200)
                                }
                            } catch (t) {
                                console.log("error in parsing returned ajax data: " + t), console.log(e), o.hide().text("Error occurred. Please see the console for details.").fadeIn(200)
                            }
                        }).fail(function(e, i, a) {
                            console.log("Error occured in processing your request:"), console.log(e), console.log("Text status"), console.log(i), console.log("Error thrown"), console.log(a), console.log("Servre response"), console.log(e.status), console.log("Response Text may contain error output from PHP"), console.log(qXHR.responseText), o.hide().text(si + " (Please see the console for error details.)").fadeIn(200)
                        }).always(function() {
                            $(s).css({
                                width: ""
                            }).val(f).attr("disabled", !1)
                        })
                    }
                })
            },
            isValidEmail: function(e) {
                var i = RegExp(/^[_\.0-9a-zA-Z-]+@([0-9a-zA-Z][0-9a-zA-Z-]+\.)+[a-zA-Z]{2,6}$/i);
                return i.test(e)
            },
            enablePlaceHolder: function() {
                $("input, textarea").placeholder()
            },
            googleMap: function() {
                ci = $(di).data("icon") ? JSON.parse("[" + $(di).data("icon") + "]") : ci, hi = $(di).data("coordinates") ? $(di).data("coordinates") : hi, ui = $(di).data("info") ? JSON.parse("[" + $(di).data("info") + "]") : ui, gi = $(di).data("zoom-level") ? parseFloat($(di).data("zoom-level")) : gi, xi = $(di).data("style") && "greyscale" === $(di).data("style") ? !0 : !1;
                for (var e, i, o = xi ? -100 : 0, a = $("body").hasClass("mobile") ? !1 : !0, t = {
                    draggable: a,
                    zoom: gi,
                    center: new google.maps.LatLng(hi[0][0], hi[0][1]),
                    mapTypeControl: vi,
                    mapTypeControlOptions: {
                        style: google.maps.MapTypeControlStyle.DROPDOWN_MENU,
                        position: google.maps.ControlPosition.TOP_RIGHT
                    },
                    panControl: $i,
                    panControlOptions: {
                        position: google.maps.ControlPosition.TOP_LEFT
                    },
                    zoomControl: wi,
                    zoomControlOptions: {
                        style: google.maps.ZoomControlStyle.SMALL,
                        position: google.maps.ControlPosition.LEFT_TOP
                    },
                    scrollwheel: mi,
                    scaleControl: yi,
                    streetViewControl: Ci,
                    streetViewControlOptions: {
                        position: google.maps.ControlPosition.LEFT_TOP
                    },
                    styles: [{
                        stylers: [{
                            saturation: o
                        }]
                    }]
                }, n = new google.maps.Map(document.getElementById("map-canvas"), t), s = 0, r = 0; r < hi.length; r++) e = new google.maps.Marker({
                    position: new google.maps.LatLng(hi[r][0], hi[r][1]),
                    map: n,
                    icon: new google.maps.MarkerImage(ci[s], null, null, null, new google.maps.Size(fi, pi))
                }), i = new google.maps.InfoWindow({
                    content: ui[r]
                }), google.maps.event.addListener(e, "click", function(e, o) {
                    return function() {
                        i.setContent(ui[o]), i.open(n, e)
                    }
                }(e, r)), s++;
                google.maps.event.addDomListener(window, "resize", function() {
                    var e = n.getCenter();
                    google.maps.event.trigger(n, "resize"), n.setCenter(e)
                })
            },
            pageFade: function() {
                return bi ? void $(Ti).not(zi).on("click", function(e) {
                    e.preventDefault();
                    var i = this.href;
                    $("body").hasClass("transition-support") ? $(Si).addClass("page-fade-out").on(ki, function(e) {
                        return e.stopPropagation(), e.target !== $(this)[0] ? !1 : void Pi.goToNewPage(i)
                    }) : Pi.goToNewPage(i)
                }) : !1
            },
            goToNewPage: function(e) {
                window.location = e
            }
        };
    ! function() {
        for (var e = 0, i = ["ms", "moz", "webkit", "o"], o = 0; o < i.length && !window.requestAnimationFrame; ++o) window.requestAnimationFrame = window[i[o] + "RequestAnimationFrame"], window.cancelAnimationFrame = window[i[o] + "CancelAnimationFrame"] || window[i[o] + "CancelRequestAnimationFrame"];
        window.requestAnimationFrame || (window.requestAnimationFrame = function(i) {
            var o = (new Date).getTime(),
                a = Math.max(0, 16 - (o - e)),
                t = window.setTimeout(function() {
                    i(o + a)
                }, a);
            return e = o + a, t
        }), window.cancelAnimationFrame || (window.cancelAnimationFrame = function(e) {
            clearTimeout(e)
        })
    }(), Pi.init()
});