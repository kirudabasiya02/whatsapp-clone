/*! Copyright (c) 2024 WhatsApp Inc. All Rights Reserved. */
(self.webpackChunkwhatsapp_web_client = self.webpackChunkwhatsapp_web_client || []).push([
    [4106], {
        273925: (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.JobBuilder = void 0, t.definePersistedJob = function() {
                return new i([])
            };
            var s = n(811158),
                r = n(632157);
            class i {
                constructor(e) {
                    this.steps = e
                }
                step(e, t) {
                    return this._stepWithOptions(e, "function" == typeof t ? {
                        code: t
                    } : t)
                }
                _stepWithOptions(e, t) {
                    const {
                        stopRetryIf: n,
                        requirements: d,
                        code: l
                    } = t;
                    let u = a(d, l, n);
                    if (n) {
                        const {
                            timePassedSeconds: e,
                            appCrashed: t,
                            onStopRetry: i
                        } = n, d = a(null, function(e) {
                            return (t, n, r) => Promise.resolve(e(t, n, r)).then((e => e instanceof s.InterruptJob ? e : new s.InterruptJob(e)))
                        }(i), n);
                        null != e && (u = o(((t, n, s) => {
                            let {
                                jobStartTime: i
                            } = s;
                            return (0, r.happenedWithin)(i, e)
                        }), u, d)), t && (u = o(((e, t, n) => {
                            let {
                                afterCrash: s
                            } = n;
                            return !s
                        }), u, d))
                    }
                    return new i([...this.steps, {
                        stepName: e,
                        info: u
                    }])
                }
                finalStep(e, t) {
                    const n = this.step(e, t);
                    return {
                        end: () => n.steps
                    }
                }
            }

            function o(e, t, n) {
                return (s, r, i) => e(s, r, i) ? t(s, r, i) : n(s, r, i)
            }

            function a(e, t, n) {
                const s = {
                    requirements: e,
                    code: t,
                    stopRetryIf: n
                };
                return () => s
            }
            t.JobBuilder = i
        },
        193182: (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.defineWebPersistedJob = function() {
                return (0, s.definePersistedJob)()
            };
            var s = n(273925)
        },
        254106: (e, t, n) => {
            "use strict";
            var s = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.deleteReactionsV2 = t.deleteAddOns = void 0;
            var r = s(n(348926)),
                i = n(183381),
                o = n(69056),
                a = n(364622),
                d = n(384766),
                l = n(646218),
                u = n(193182),
                c = n(198602),
                f = s(n(565754)),
                p = n(591800);
            const y = (0, u.defineWebPersistedJob)().finalStep("deleteAddOns", function() {
                var e = (0, r.default)((function*(e) {
                    let {
                        chatId: t,
                        parentMsgKeys: n
                    } = e;
                    const s = yield Promise.allSettled([_({
                        chatId: t,
                        parentMsgKeys: n
                    }), v({
                        chatId: t,
                        parentMsgKeys: n
                    }), M({
                        chatId: t,
                        parentMsgKeys: n
                    })]);
                    for (const e of s)
                        if ("rejected" === e.status) throw e.reason
                }));
                return function() {
                    return e.apply(this, arguments)
                }
            }()).end();
            t.deleteAddOns = y;
            const h = (0, u.defineWebPersistedJob)().finalStep("deleteReactionsV2", (e => {
                let {
                    chatId: t,
                    parentMsgKeys: n
                } = e;
                return _({
                    chatId: t,
                    parentMsgKeys: n
                })
            })).end();

            function _() {
                return g.apply(this, arguments)
            }

            function g() {
                return (g = (0, r.default)((function*(e) {
                    let {
                        chatId: t,
                        parentMsgKeys: n
                    } = e;
                    __LOG__(2)
                    `Persisted: deleteReactionsV2 persisted job started for ${t}`;
                    const s = yield(0, a.getAllReactionsFromParentMsgs)(n), r = s.map((e => e.msgKey));
                    if (0 === r.length) return void __LOG__(2)
                    `Persisted: deleteReactionsV2 finished, no reactionsMsgKeys`;
                    const i = [];
                    r.forEach((e => {
                        f.default.fromString(e).fromMe && i.push(e)
                    })), i.length > 0 && (yield(0, d.removeMessagesFromHistory)(i));
                    const l = s.map((e => [e.parentMsgKey, e.senderUserJid]));
                    yield(0, o.deleteReactionsByRecords)(l), yield(0, c.deleteLastAddOnsPreview)(n), __LOG__(2)
                    `Persisted: deleteReactionsV2 finished`
                }))).apply(this, arguments)
            }

            function v() {
                return P.apply(this, arguments)
            }

            function P() {
                return (P = (0, r.default)((function*(e) {
                    let {
                        chatId: t,
                        parentMsgKeys: n
                    } = e;
                    __LOG__(2)
                    `Persisted: deletePollVotes job started for ${t}`, yield(0, l.deleteVotesByParentMsgKeys)(n), __LOG__(2)
                    `Persisted: deletePollVotes job finished for ${t}`
                }))).apply(this, arguments)
            }

            function M() {
                return b.apply(this, arguments)
            }

            function b() {
                return (b = (0, r.default)((function*(e) {
                    let {
                        chatId: t,
                        parentMsgKeys: n
                    } = e;
                    (0, p.isPinnedMessagesM1ReceiverEnabled)() && (__LOG__(2)
                        `Persisted deletePins persisted job started for ${t}`, yield(0, i.removePinInChatByParentMsgKeys)(n), __LOG__(2)
                        `Persisted: deletePins finished`)
                }))).apply(this, arguments)
            }
            t.deleteReactionsV2 = h
        },
        198602: (e, t, n) => {
            "use strict";
            var s = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.deleteLastAddOnsPreview = function() {
                return d.apply(this, arguments)
            };
            var r = s(n(348926)),
                i = n(35234),
                o = s(n(565754)),
                a = n(696859);

            function d() {
                return (d = (0, r.default)((function*(e) {
                    const t = new Set(e.map((e => o.default.fromString(e).remote.toString()))),
                        n = yield(0, a.bulkGetChatLastAddOnPreviewMap)(Array.from(t)), s = new Map;
                    n.forEach(((t, n) => {
                        e.includes(null == t ? void 0 : t.parentMsgKey) && s.set(n, void 0)
                    })), yield(0, i.bulkUpdateChatLastAddOnPreview)(s)
                }))).apply(this, arguments)
            }
        },
        646218: (e, t, n) => {
            "use strict";
            var s = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.deleteVotesByParentMsgKeys = function() {
                return a.apply(this, arguments)
            };
            var r = s(n(348926)),
                i = n(384766),
                o = n(941322);

            function a() {
                return (a = (0, r.default)((function*(e) {
                    const t = yield(0, o.getTable)().anyOf(["parentMsgKey"], e);
                    if (0 === t.length) return;
                    const n = t.map((e => e.msgKey)),
                        s = t.map((e => [e.parentMsgKey, e.sender])),
                        r = yield Promise.allSettled([(0, i.removeMessagesFromHistory)(n), (0, o.getTable)().bulkRemove(s)]);
                    for (const e of r)
                        if ("rejected" === e.status) throw e.reason
                }))).apply(this, arguments)
            }
        },
        69056: (e, t, n) => {
            "use strict";
            var s = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.deleteReactionsByParentMessageKey = function(e) {
                const t = [];
                return (0, i.getStorage)().lock(["reactions"], function() {
                    var n = (0, r.default)((function*(n) {
                        let [s] = n;
                        return (yield s.equals(["parentMsgKey"], e)).forEach((e => t.push([e.parentMsgKey, e.senderUserJid]))), s.bulkRemove(t)
                    }));
                    return function() {
                        return n.apply(this, arguments)
                    }
                }())
            }, t.deleteReactionsByParentMessageKeys = function(e) {
                const t = [];
                return (0, i.getStorage)().lock(["reactions"], function() {
                    var n = (0, r.default)((function*(n) {
                        let [s] = n;
                        const r = yield s.anyOf(["parentMsgKey"], e);
                        return r.forEach((e => t.push([e.parentMsgKey, e.senderUserJid]))), yield s.bulkRemove(t), r.map((e => e.msgKey))
                    }));
                    return function() {
                        return n.apply(this, arguments)
                    }
                }())
            }, t.deleteReactionsByRecords = function(e) {
                return (0, i.getStorage)().lock(["reactions"], function() {
                    var t = (0, r.default)((function*(t) {
                        let [n] = t;
                        yield n.bulkRemove(e)
                    }));
                    return function() {
                        return t.apply(this, arguments)
                    }
                }())
            };
            var r = s(n(348926)),
                i = n(732011)
        }
    }
]);
//# sourceMappingURL=https://web.whatsapp.com/4106.74443b2ebb21dadef080.js.map