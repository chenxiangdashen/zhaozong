/**
 * Created by a on 2019/5/10.
 */
!function ($) {
    $.fn.easyAudioEffects = function (e) {
        function o() {
            switch (a.playType) {
                case"loop":
                    c.currentTime = 0, c.loop = !0, c.play();
                    break;
                case"gate":
                    c.currentTime = 0, c.play();
                    break;
                case"oneShotMonophonic":
                    c.currentTime = 0, c.play();
                    break;
                case"oneShotPolyphonic":
                default:
                    "" != s && (t[u] = new Audio(s), t[u].play(), t[u].addEventListener("ended", function () {
                        t[u] = null
                    }), u++)
            }
        }

        function n() {
            switch (a.playType) {
                case"loop":
                    c.pause();
                    break;
                case"gate":
                    c.pause();
                    break;
                case"oneShotMonophonic":
                    break;
                case"oneShotPolyphonic":
            }
        }

        var a = $.extend(!0, {}, $.fn.easyAudioEffects.defaults, e), l = $(this), c, t = [], u = 0, s = "", p = {};
        p = {ogg: a.ogg, mp3: a.mp3};
        try {
            if (c = new Audio(""), !c.canPlayType)throw"canPlayType method does not exist";
            var i = "" != c.canPlayType("audio/ogg"), y = "" != c.canPlayType("audio/mpeg");
            if (i && null != p.ogg) s = p.ogg, c.src = s; else {
                if (!y || null == p.mp3)throw null == p.ogg || null == p.mp3 ? "Please specify an audio source" : "Also ogg and mp3 also does not support";
                s = p.mp3, c.src = s
            }
        } catch (f) {
            console.log(f), c = null
        }
        if (null != c)switch (a.eventType) {
            case"click":
                l.on("mousedown", function () {
                    o()
                }).on("mouseup", function () {
                    n()
                });
                break;
            case"hover":
            default:
                l.on({
                    mouseenter: function () {
                        o()
                    }, mouseleave: function () {
                        n()
                    }
                })
        }
    }, $.fn.easyAudioEffects.defaults = {ogg: null, mp3: null, eventType: "hover", playType: "oneShotPolyphonic"}
}(jQuery);