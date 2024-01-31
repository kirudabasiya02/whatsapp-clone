/*! Copyright (c) 2024 WhatsApp Inc. All Rights Reserved. */
(self.webpackChunkwhatsapp_web_client = self.webpackChunkwhatsapp_web_client || []).push([
    [6933], {
        418472: (e, n, t) => {
            "use strict";
            var u = t(595318);
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.default = function() {
                return i.apply(this, arguments)
            };
            var l = u(t(348926)),
                s = u(t(828003)),
                a = t(508247);

            function f() {
                return "undefined" == typeof fetch ? null : fetch(a.WEB_PUBLIC_PATH + "emoji_suggestions/en.json?v=" + a.VERSION_STR).then((e => e.json()))
            }

            function i() {
                return (i = (0, l.default)((function*() {
                    return [s.default, null, yield f()]
                }))).apply(this, arguments)
            }
        }
    }
]);