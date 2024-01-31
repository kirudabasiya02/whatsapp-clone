/*! Copyright (c) 2024 WhatsApp Inc. All Rights Reserved. */
(self.webpackChunkwhatsapp_web_client = self.webpackChunkwhatsapp_web_client || []).push([
    [7205], {
        621733: (e, t) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e, t) {
                let n;
                if (e.size !== t.size) return !1;
                for (const [a, l] of e)
                    if (n = t.get(a), n !== l || void 0 === n && !t.has(a)) return !1;
                return !0
            }
        },
        809991: (e, t) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.CHANNEL_LINK_SHARE_DIRECTION = void 0;
            const n = Object.freeze({
                WHATSAPP: 1,
                STATUS: 2,
                EXTERNAL: 3
            });
            t.CHANNEL_LINK_SHARE_DIRECTION = n
        },
        476300: (e, t) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.CHANNEL_LINK_SHARE_SCREEN = void 0;
            const n = Object.freeze({
                CONTEXT_CARD: 1,
                CHANNEL_INFO: 2,
                CHANNEL_THREAD: 3,
                SHARE_LINK_SCREEN: 4
            });
            t.CHANNEL_LINK_SHARE_SCREEN = n
        },
        542040: (e, t) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.DISCLOSURE_ACTION = void 0;
            const n = Object.freeze({
                SCREEN_VIEW: 0,
                CLICK_ON_CONTINUE: 1,
                CANCEL: 2,
                BACK_BUTTON_TOOLBAR: 3,
                BACK_BUTTON_SYSTEM: 4,
                DISMISS: 5,
                DISCLOSURE_INFO_VIEW: 6
            });
            t.DISCLOSURE_ACTION = n
        },
        753146: (e, t) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.DISCLOSURE_TYPE = void 0;
            const n = Object.freeze({
                NON_BLOCKING: 0,
                BLOCKING: 1,
                INFO: 2
            });
            t.DISCLOSURE_TYPE = n
        },
        428179: (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.ChannelLinkShareWamEvent = void 0;
            var a = n(901032),
                l = n(809991),
                r = n(836507),
                o = n(476300);
            const {
                STRING: i
            } = a.TYPES, u = (0, a.defineEvents)({
                ChannelLinkShare: [4728, {
                        channelLinkShareDirection: [1, l.CHANNEL_LINK_SHARE_DIRECTION],
                        channelLinkShareEntryPoint: [2, r.CHANNEL_LINK_SHARE_ENTRY_POINT],
                        channelLinkShareScreen: [4, o.CHANNEL_LINK_SHARE_SCREEN],
                        cid: [3, i]
                    },
                    [1, 1, 1], "regular"
                ]
            });
            t.ChannelLinkShareWamEvent = u
        },
        683188: (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.CtwaConsumerDisclosureWamEvent = void 0;
            var a = n(901032),
                l = n(542040),
                r = n(753146);
            const {
                INTEGER: o
            } = a.TYPES, i = (0, a.defineEvents)({
                CtwaConsumerDisclosure: [4406, {
                        ctwaConsumerDisclosureVersion: [3, o],
                        disclosureAction: [1, l.DISCLOSURE_ACTION],
                        disclosureType: [2, r.DISCLOSURE_TYPE]
                    },
                    [1, 1, 1], "private", 0
                ]
            });
            t.CtwaConsumerDisclosureWamEvent = i
        },
        600145: (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.GroupProfilePictureWamEvent = void 0;
            var a = n(901032),
                l = n(970739),
                r = n(900213),
                o = n(978244);
            const {
                BOOLEAN: i,
                STRING: u
            } = a.TYPES, s = (0, a.defineEvents)({
                GroupProfilePicture: [3652, {
                        groupCreationDs: [1, u],
                        groupProfileAction: [7, l.GROUP_PROFILE_ACTION_TYPE],
                        hasProfilePicture: [3, i],
                        isAdmin: [4, i],
                        preciseGroupSizeBucket: [5, r.PRECISE_SIZE_BUCKET],
                        profilePictureType: [6, o.PROFILE_PICTURE_TYPE]
                    },
                    [1, 1, 1], "regular"
                ]
            });
            t.GroupProfilePictureWamEvent = s
        },
        853417: (e, t, n) => {
            "use strict";
            var a = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = s;
            var l = n(464659),
                r = n(180519),
                o = n(548360),
                i = a(n(667294)),
                u = n(655241);

            function s(e) {
                var t;
                let {
                    businessProfile: n
                } = e;
                const {
                    description: a
                } = null !== (t = (0, u.useModelValues)(n, ["description"])) && void 0 !== t ? t : {};
                return null == a ? null : i.default.createElement(l.ChatInfoDrawerSection, {
                    titleTestId: "section-about",
                    title: o.fbt._("About", null, {
                        hk: "1IJ9KC"
                    })
                }, i.default.createElement(r.TextSpan, {
                    theme: "title"
                }, a))
            }
            s.displayName = "BizBot3pInfoAboutSection"
        },
        973366: (e, t, n) => {
            "use strict";
            var a = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = h;
            var l = n(464659),
                r = n(950987),
                o = n(877171),
                i = n(180519),
                u = n(676345),
                s = n(851488),
                c = n(548360),
                d = a(n(667294)),
                f = a(n(156720)),
                p = n(655241);
            const m = {
                command: {
                    borderTopStartRadius: "bbr44loe",
                    borderTopEndRadius: "ooj5yc5b",
                    borderBottomEndRadius: "m8i16etx",
                    borderBottomStartRadius: "cw0ivh8j",
                    backgroundColor: "rnr876i8"
                },
                commands: {
                    display: "p357zi0d",
                    flexDirection: "sap93d0t",
                    flexWrap: "lkhkxwyq"
                }
            };

            function h(e) {
                var t;
                let {
                    businessProfile: n
                } = e;
                const {
                    commands: a,
                    commandsDescription: h
                } = null !== (t = (0, p.useModelValues)(n, ["commands", "commandsDescription"])) && void 0 !== t ? t : {};
                return null != a && a.length ? d.default.createElement(l.ChatInfoDrawerSection, {
                    titleTestId: "section-commands",
                    title: c.fbt._("Commands", null, {
                        hk: "GLKbo"
                    })
                }, Boolean(h) && d.default.createElement(i.TextSpan, {
                    theme: "title"
                }, h), d.default.createElement("div", {
                    className: (0, f.default)(m.commands, u.uiMargin.top8)
                }, a.map((e => {
                    let {
                        name: t,
                        description: n
                    } = e;
                    const a = `/${t} `;
                    return d.default.createElement(r.Clickable, {
                        key: t,
                        title: n,
                        onClick: () => {
                            o.ComposeBoxActions.paste(null, a, {
                                insertLeadingSpace: !0
                            })
                        },
                        xstyle: [m.command, u.uiPadding.vert4, u.uiPadding.horiz10, u.uiMargin.end8, u.uiMargin.vert4]
                    }, d.default.createElement(s.WDSTextSmall, {
                        as: "span",
                        color: "primary"
                    }, a))
                })))) : null
            }
            h.displayName = "BizBotCommandsSection"
        },
        498692: (e, t, n) => {
            "use strict";
            var a = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = d;
            var l = n(169437),
                r = n(464659),
                o = n(660666),
                i = n(180519),
                u = n(548360),
                s = a(n(667294)),
                c = n(379811);

            function d(e) {
                var t;
                let {
                    contact: n
                } = e;
                const [a] = (0, c.useContactValues)(n.id, [o.getId]), d = null === (t = l.BotProfileCollection.get(a)) || void 0 === t ? void 0 : t.description;
                return null == d ? null : s.default.createElement(r.ChatInfoDrawerSection, {
                    titleTestId: "section-about",
                    title: u.fbt._("About", null, {
                        hk: "3eKeST"
                    })
                }, s.default.createElement(i.TextSpan, {
                    theme: "title"
                }, d))
            }
            d.displayName = "BotInfoAboutSection"
        },
        753602: (e, t, n) => {
            "use strict";
            var a = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = h;
            var l = n(653106),
                r = n(188131),
                o = n(328232),
                i = n(496168),
                u = a(n(831269)),
                s = a(n(969358)),
                c = n(690495),
                d = n(676345),
                f = n(548360),
                p = a(n(667294));
            a(n(156720));
            const m = {
                businessAccount: {
                    fontSize: "enbbiyaj"
                },
                iconColour: {
                    color: "n0kqff35"
                }
            };

            function h(e) {
                let {
                    chat: t
                } = e;
                return (0, r.shouldShowConsumerTransparencyDisclosure)(t) ? p.default.createElement(s.default, {
                    xstyle: [m.businessAccount, d.uiMargin.top10]
                }, p.default.createElement(u.default, {
                    testid: "about-business-chat",
                    onClick: o.showConsumerTransparencyModalDialog,
                    side: p.default.createElement(l.ChevronRightAltIcon, {
                        height: 24,
                        width: 10,
                        xstyle: m.iconColour
                    })
                }, p.default.createElement(c.FlexRow, {
                    align: "center"
                }, p.default.createElement(i.DoubleChevronIcon, {
                    height: 24,
                    width: 24,
                    xstyle: [m.iconColour, d.uiMargin.end20]
                }), f.fbt._("About this business chat", null, {
                    hk: "PZHUK"
                })))) : null
            }
            h.displayName = "BusinessContactDisclosureSection"
        },
        328232: (e, t, n) => {
            "use strict";
            var a = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.ConsumerTransparencyModalDialog = S, t.showConsumerTransparencyModalDialog = function() {
                f.ModalManager.open(y.default.createElement(S, null))
            };
            var l = n(560599),
                r = n(103440),
                o = n(683188),
                i = n(496168),
                u = n(753233),
                s = n(258105),
                c = n(690495),
                d = n(118612),
                f = n(114850),
                p = n(629181),
                m = n(180519),
                h = n(676345),
                g = n(376331),
                E = n(542040),
                b = n(753146),
                v = n(548360),
                y = function(e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || "object" != typeof e && "function" != typeof e) return {
                        default: e
                    };
                    var n = M(t);
                    if (n && n.has(e)) return n.get(e);
                    var a = {},
                        l = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var r in e)
                        if ("default" !== r && Object.prototype.hasOwnProperty.call(e, r)) {
                            var o = l ? Object.getOwnPropertyDescriptor(e, r) : null;
                            o && (o.get || o.set) ? Object.defineProperty(a, r, o) : a[r] = e[r]
                        }
                    a.default = e, n && n.set(e, a);
                    return a
                }(n(667294)),
                C = a(n(156720));

            function M(e) {
                if ("function" != typeof WeakMap) return null;
                var t = new WeakMap,
                    n = new WeakMap;
                return (M = function(e) {
                    return e ? n : t
                })(e)
            }
            const w = {
                fullWidth: {
                    width: "ln8gz9je"
                },
                centeredText: {
                    textAlign: "qfejxiq4"
                },
                bulletIconColor: {
                    color: "i5443yhl"
                },
                illustrationWrapper: {
                    color: "bj5r3vhm",
                    backgroundColor: "jd3v83ju",
                    width: "cnprk2g9",
                    height: "j74n1y92",
                    borderTopStartRadius: "g9p5wyxn",
                    borderTopEndRadius: "i0tg5vk9",
                    borderBottomEndRadius: "aoogvgrq",
                    borderBottomStartRadius: "o2zu3hjb",
                    display: "p357zi0d",
                    justifyContent: "ac2vgrno",
                    alignItems: "gndfcl4n"
                }
            };
            const k = () => y.default.createElement(c.FlexColumn, null, y.default.createElement(c.FlexRow, {
                justify: "center",
                xstyle: [w.fullWidth, h.uiMargin.bottom8]
            }, y.default.createElement("div", {
                className: (0, C.default)(w.illustrationWrapper)
            }, y.default.createElement(i.DoubleChevronIcon, {
                width: 66,
                height: 66
            }))), y.default.createElement(m.TextDiv, {
                size: "24",
                color: "dark",
                weight: "medium",
                xstyle: [w.centeredText, h.uiMargin.top36]
            }, v.fbt._("About chats that start from Facebook or Instagram ads", null, {
                hk: "2aZNno"
            })), y.default.createElement(m.TextDiv, {
                size: "14",
                weight: "normal",
                xstyle: [w.centeredText, h.uiMargin.top16]
            }, v.fbt._("When you start a chat with a business after interacting with their ad on Facebook or Instagram, WhatsApp's parent company Meta receives limited info. This helps improve Meta ads and your experience on those apps. {=m2}", [v.fbt._implicitParam("=m2", y.default.createElement(u.ExternalLink, {
                href: (0, s.getConsumerTransparencyHCAUrl)()
            }, v.fbt._("Learn more", null, {
                hk: "1aIT4P"
            })))], {
                hk: "3BDV9F"
            })), y.default.createElement(c.FlexRow, {
                justify: "center",
                align: "center",
                xstyle: h.uiMargin.top36
            }, y.default.createElement(g.VisibilityOffIcon, {
                height: 24,
                width: 24,
                xstyle: w.bulletIconColor
            }), y.default.createElement(m.TextSpan, {
                size: "13",
                color: "dark",
                xstyle: h.uiMargin.start24
            }, v.fbt._("WhatsApp never shares your message content or calls", null, {
                hk: "3F3S6a"
            }))), y.default.createElement(c.FlexRow, {
                justify: "center",
                align: "center",
                xstyle: h.uiMargin.top20
            }, y.default.createElement(l.BusinessDataSharingIcon, {
                height: 24,
                width: 24,
                xstyle: w.bulletIconColor
            }), y.default.createElement(m.TextSpan, {
                size: "13",
                color: "dark",
                xstyle: h.uiMargin.start24
            }, v.fbt._("Info Meta receives may include the number of interactions with a business", null, {
                hk: "47Hbwq"
            }))), y.default.createElement(c.FlexRow, {
                justify: "center",
                align: "center",
                xstyle: h.uiMargin.top20
            }, y.default.createElement(p.SettingsSecurityIcon, {
                height: 24,
                width: 24,
                xstyle: w.bulletIconColor
            }), y.default.createElement(m.TextSpan, {
                size: "13",
                color: "dark",
                xstyle: h.uiMargin.start24
            }, v.fbt._("You can always stop chatting with a business or block them", null, {
                hk: "1dF4Qk"
            }))));

            function S() {
                (0, y.useEffect)((() => {
                    new o.CtwaConsumerDisclosureWamEvent({
                        ctwaConsumerDisclosureVersion: 1,
                        disclosureAction: E.DISCLOSURE_ACTION.SCREEN_VIEW,
                        disclosureType: b.DISCLOSURE_TYPE.INFO
                    }).commit()
                }), []);
                const e = () => f.ModalManager.close();
                return y.default.createElement(r.ConfirmPopup, {
                    testid: "ctwa-consumer-transparency-modal-dialog",
                    type: d.ModalTheme.DataSharing,
                    onOK: e,
                    okText: v.fbt._("Close", null, {
                        hk: "Vnajg"
                    }),
                    onOverlayClick: e
                }, y.default.createElement(k, null))
            }
            S.displayName = "ConsumerTransparencyModalDialog"
        },
        894629: (e, t, n) => {
            "use strict";
            var a = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = C;
            var l = a(n(348926)),
                r = n(328620),
                o = a(n(711367)),
                i = n(63014),
                u = n(780549),
                s = n(172365),
                c = a(n(395767)),
                d = n(751460),
                f = n(390737),
                p = n(269430),
                m = n(548360),
                h = function(e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || "object" != typeof e && "function" != typeof e) return {
                        default: e
                    };
                    var n = v(t);
                    if (n && n.has(e)) return n.get(e);
                    var a = {},
                        l = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var r in e)
                        if ("default" !== r && Object.prototype.hasOwnProperty.call(e, r)) {
                            var o = l ? Object.getOwnPropertyDescriptor(e, r) : null;
                            o && (o.get || o.set) ? Object.defineProperty(a, r, o) : a[r] = e[r]
                        }
                    a.default = e, n && n.set(e, a);
                    return a
                }(n(667294)),
                g = a(n(524578)),
                E = n(808446),
                b = n(655241);

            function v(e) {
                if ("function" != typeof WeakMap) return null;
                var t = new WeakMap,
                    n = new WeakMap;
                return (v = function(e) {
                    return e ? n : t
                })(e)
            }

            function y(e) {
                var t;
                let {
                    chat: n,
                    desc: a = "",
                    adminFunnelLogger: l,
                    setIsEditing: o,
                    toastId: i = (0, r.genId)()
                } = e;
                const u = (0, s.editNewsletterMetadataAction)(n, {
                        editDescription: !0
                    }, {
                        description: a
                    }),
                    d = null === (t = n.newsletterMetadata) || void 0 === t ? void 0 : t.description,
                    g = new r.ActionType(m.fbt._("Changing channel description", null, {
                        hk: "3QNpiW"
                    })),
                    E = u.then((() => {
                        l.logEvent(p.CHANNEL_ADMIN_ACTION.CHANNEL_ADMIN_FLOW_SUCCESS);
                        const e = Boolean(d) ? m.fbt._("Channel description changed", null, {
                            hk: "ATEd7"
                        }) : m.fbt._("Channel description added", null, {
                            hk: "2z54Ca"
                        });
                        return new r.ActionType(e, {
                            actionText: (0, c.default)("Undo"),
                            actionHandler: () => y({
                                chat: n,
                                desc: d,
                                adminFunnelLogger: l,
                                toastId: i
                            })
                        })
                    })).catch((() => (l.logEvent(p.CHANNEL_ADMIN_ACTION.CHANNEL_ADMIN_FLOW_FAILURE), __LOG__(3)
                        `channel:handleEditDescription dropped`, new r.ActionType(m.fbt._("Channel description changed failed", null, {
                            hk: "1We4xJ"
                        }), {
                            actionText: (0, c.default)("Try again"),
                            actionHandler: () => y({
                                chat: n,
                                desc: d,
                                adminFunnelLogger: l,
                                toastId: i
                            })
                        })))).finally((() => {
                        o && o(!1)
                    }));
                return f.ToastManager.open(h.default.createElement(r.ActionToast, {
                    id: i,
                    initialAction: g,
                    pendingAction: E
                })), u
            }

            function C(e) {
                const {
                    adminFunnelLogger: t,
                    focusOnMount: n
                } = e, [a, r] = (0, h.useState)(null != n && n), s = (0, b.useModelValues)(e.chat, ["id", "isNewsletter", "newsletterMetadata"]), c = (0, b.useOptionalModelValues)(s.newsletterMetadata, ["description", "creationTime", "membershipType"]), f = (0, g.default)(c, ["change:description"], (() => (null == c ? void 0 : c.description) || ""));
                (0, E.useListener)(u.Cmd, "edit_newsletter_description", (() => {
                    r(!0)
                }));
                const [v, C] = (0, h.useState)(f), M = (0, h.useRef)(f), w = (0, h.useCallback)((() => {
                    v !== M.current && (M.current = v, t.logEvent(p.CHANNEL_ADMIN_ACTION.CHANNEL_DESCRIPTION_SET))
                }), [t, v]), k = (0, h.useCallback)(function() {
                    var e = (0, l.default)((function*() {
                        let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
                        w(), t.logEvent(p.CHANNEL_ADMIN_ACTION.CHANNEL_ADMIN_FLOW_CONFIRMATION_TAP), yield y({
                            chat: s,
                            desc: e,
                            adminFunnelLogger: t,
                            setIsEditing: r
                        })
                    }));
                    return function() {
                        return e.apply(this, arguments)
                    }
                }(), [s, w, t]);
                if (null == c) return null;
                const S = m.fbt._("Add channel description", null, {
                        hk: "4cBfrw"
                    }),
                    {
                        creationTime: _
                    } = c,
                    P = null != _ ? i.Clock.newsletterDescriptionCreatedStr(c.creationTime) : null;
                return h.default.createElement(o.default, {
                    description: f,
                    bulletPointsEnabled: !1,
                    chat: e.chat,
                    showFullDescription: !1,
                    testid: "newsletter-info-drawer-description-title-input",
                    containerTestId: "newsletter-info-drawer-description-container",
                    emptyValuePlaceholder: S,
                    creationString: P,
                    canSetDescription: (0, d.iAmAdminOrOwner)(c),
                    setDescriptionAction: k,
                    onChange: C,
                    onBlur: () => {
                        w(), r(!1)
                    },
                    setIsEditing: a,
                    focusOnMount: n
                })
            }
            C.displayName = "WAWebNewsletterDescriptionSection"
        },
        751046: (e, t, n) => {
            "use strict";
            var a = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var l = n(775593),
                r = n(34730),
                o = a(n(306007)),
                i = n(464659),
                u = n(780549),
                s = n(949359),
                c = n(312043),
                d = a(n(908081)),
                f = a(n(324093)),
                p = n(626194),
                m = n(114850),
                h = a(n(832897)),
                g = a(n(894629)),
                E = n(73225),
                b = n(280635),
                v = n(683023),
                y = a(n(664531)),
                C = n(751460),
                M = a(n(156636)),
                w = n(620973),
                k = n(349372),
                S = n(617058),
                _ = n(663149),
                P = n(712648),
                O = n(163139),
                I = n(220584),
                N = n(382117),
                T = n(676345),
                A = n(460416),
                x = n(744976),
                L = n(818674),
                D = n(954141),
                R = n(851488),
                B = n(548360),
                j = function(e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || "object" != typeof e && "function" != typeof e) return {
                        default: e
                    };
                    var n = z(t);
                    if (n && n.has(e)) return n.get(e);
                    var a = {},
                        l = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var r in e)
                        if ("default" !== r && Object.prototype.hasOwnProperty.call(e, r)) {
                            var o = l ? Object.getOwnPropertyDescriptor(e, r) : null;
                            o && (o.get || o.set) ? Object.defineProperty(a, r, o) : a[r] = e[r]
                        }
                    a.default = e, n && n.set(e, a);
                    return a
                }(n(667294)),
                W = a(n(156720)),
                F = a(n(524578)),
                G = a(n(637660)),
                H = n(808446),
                V = n(365402),
                U = a(n(321201));

            function z(e) {
                if ("function" != typeof WeakMap) return null;
                var t = new WeakMap,
                    n = new WeakMap;
                return (z = function(e) {
                    return e ? n : t
                })(e)
            }
            const q = {
                flexShrink: "oq44ahr5",
                flexGrow: "tvf2evcx",
                flexBasis: "lb5m6g5c",
                paddingBottom: "s9fl9ege"
            };

            function Y(e, t) {
                const {
                    chat: n,
                    newsletterMetadata: a,
                    onClose: z,
                    onTransferNewsletterOwnership: Y,
                    onDeleteNewsletter: K,
                    onAdminCenter: Z,
                    onSettings: X,
                    onShareLink: Q,
                    onVerification: $,
                    onTransferOwnershipSelection: J,
                    adminFunnelLogger: ee,
                    focusDescriptionOnMount: te
                } = e, ne = (0, U.default)(), ae = (0, j.useRef)(null), le = (0, F.default)(a, ["change:suspended"], (() => !0 === (null == a ? void 0 : a.suspended))), re = (0, F.default)(a, ["change:canBeMuted"], (() => Boolean(null == a ? void 0 : a.canBeMuted) && !le)), oe = (0, V.useNewsletterAdmins)(n);
                (0, H.useListener)(u.Cmd, "edit_newsletter_description", (() => {
                    ae.current && ae.current.scrollTo({
                        top: 0,
                        behavior: "smooth"
                    })
                }));
                const ie = (0, G.default)((() => new N.UiActionWamEvent({
                        uiActionType: x.UI_ACTION_TYPE.CHANNEL_INFO_OPEN,
                        uiActionPreloaded: !0
                    }))),
                    ue = le ? null : j.default.createElement(g.default, {
                        chat: n,
                        adminFunnelLogger: ee,
                        focusOnMount: te
                    }),
                    se = (0, F.default)(a, ["change:membershipType"], (() => (0, C.iAmAdminOrOwner)(e.newsletterMetadata))),
                    ce = re && (!se || oe.length > 0) ? j.default.createElement(i.ChatInfoDrawerSection, {
                        xstyle: T.uiMargin.top10
                    }, j.default.createElement(h.default, {
                        chat: n,
                        mute: n.mute
                    })) : null,
                    de = (0, j.useCallback)((() => {
                        m.ModalManager.open(j.default.createElement(w.NewsletterPhoneNumberNux, null))
                    }), []),
                    fe = (0, j.useCallback)((() => {
                        m.ModalManager.open(j.default.createElement(S.NewsletterPublicChannelPrivacyNux, {
                            chat: n,
                            userRole: null == a ? void 0 : a.membershipType
                        }))
                    }), [n, null == a ? void 0 : a.membershipType]),
                    pe = se && (0, E.isNewsletterReactionSettingsEnabled)() && !le ? j.default.createElement(o.default, {
                        testid: "newsletter-info-channel-settings",
                        title: j.default.createElement(R.WDSTextTitle, null, B.fbt._("Channel settings", null, {
                            hk: "4xHSt"
                        })),
                        icon: j.default.createElement(P.SettingsIcon, {
                            color: I.SvgColorProp.SECONDARY,
                            height: 20
                        }),
                        onClick: X,
                        side: "chevron"
                    }) : null,
                    me = se ? j.default.createElement(o.default, {
                        testid: "newsletter-info-admin-center-row",
                        icon: j.default.createElement(D.WarningIcon, {
                            color: I.SvgColorProp.SECONDARY,
                            height: 16
                        }),
                        onClick: Z,
                        title: j.default.createElement(R.WDSTextTitle, null, B.fbt._("Channel Alerts", null, {
                            hk: "1NYThG"
                        }))
                    }) : null,
                    he = le ? null : j.default.createElement(k.NewsletterPrivacyRow, {
                        onClick: se ? fe : null,
                        title: B.fbt._("Public channel", null, {
                            hk: "1a60HF"
                        }),
                        text: se ? B.fbt._("What you share is visible to anyone, but your phone number isn't. Click to learn more.", null, {
                            hk: "4auNa3"
                        }) : B.fbt._("Anyone can find this channel and see what's been shared.", null, {
                            hk: "1T1Xsg"
                        }),
                        icon: j.default.createElement(r.BusinessWebsiteIcon, {
                            color: I.SvgColorProp.SECONDARY,
                            height: 20
                        })
                    }),
                    ge = le || se ? null : j.default.createElement(k.NewsletterPrivacyRow, {
                        onClick: de,
                        title: B.fbt._("Profile privacy", null, {
                            hk: "fHnmE"
                        }),
                        text: (0, s.getNewsletterProfilePrivacyText)(),
                        icon: j.default.createElement(c.DialpadIcon, {
                            color: I.SvgColorProp.SECONDARY,
                            height: 20
                        })
                    }),
                    Ee = j.default.createElement(i.ChatInfoDrawerSection, {
                        xstyle: T.uiMargin.top10
                    }, he, me, pe, ge),
                    be = j.default.createElement(y.default, {
                        xstyle: T.uiMargin.top10,
                        chat: e.chat,
                        onDeleteNewsletter: K,
                        onTransferNewsletterOwnership: Y
                    }),
                    ve = (0, E.isNewsletterSubscriberListEnabled)() && se && !le ? j.default.createElement(_.NewsletterSubscriberList, {
                        newsletter: n,
                        adminFunnelLogger: ee,
                        onShareLink: Q,
                        onVerification: $,
                        onTransferOwnershipSelection: J
                    }) : null,
                    ye = (0, E.isNewsletterMultiAdminEnabled)() && (0, C.iAmOwner)(a) && !le ? j.default.createElement(M.default, {
                        newsletter: n,
                        onVerification: $
                    }) : null;
                return (0, j.useEffect)((() => {
                    const e = ie.current;
                    e && (e.markUiActionT(), e.commit(), ie.current = void 0), (0, L.logUiActionShadowPrivateStatsTestEvents)(), se && (0, E.isNewsletterAdminMetadataFetchingEnabled)() && (0, b.getIntegrityUpdatesAction)(n.id, l.JOB_PRIORITY.UI_ACTION)
                }), []), j.default.createElement(d.default, {
                    ref: t,
                    key: "newsletter-info-modal",
                    theme: "striped",
                    testid: "chat-info-drawer",
                    tsNavigationData: (0, E.isNewsletterTSLEnabled)() ? {
                        surface: "channel-profile",
                        extras: {
                            threadType: A.THREAD_TYPE.CHANNEL,
                            channelWid: n.id
                        }
                    } : void 0
                }, j.default.createElement(p.DrawerHeader, {
                    title: B.fbt._("Channel info", null, {
                        hk: "2MU3nu"
                    }),
                    type: p.DRAWER_HEADER_TYPE.SMALL,
                    rtlFixIfOnDarwin: !0,
                    onCancel: () => {
                        z ? z() : null == ne || ne.requestDismiss()
                    },
                    testid: "newsletter-info-header"
                }), j.default.createElement(f.default, {
                    ref: ae
                }, j.default.createElement("section", {
                    className: (0, W.default)(q)
                }, j.default.createElement(v.NewsletterInfoTopCard, {
                    chat: (0, O.unproxy)(n),
                    adminFunnelLogger: ee
                }), ue, ce, Ee, ye, ve, be, undefined)))
            }
            var K = (0, j.forwardRef)(Y);
            t.default = K
        },
        988149: (e, t, n) => {
            "use strict";
            var a = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = E;
            var l = a(n(348926)),
                r = n(328620),
                o = n(172365),
                i = a(n(395767)),
                u = a(n(559719)),
                s = n(751460),
                c = n(390737),
                d = n(269430),
                f = n(548360),
                p = function(e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || "object" != typeof e && "function" != typeof e) return {
                        default: e
                    };
                    var n = h(t);
                    if (n && n.has(e)) return n.get(e);
                    var a = {},
                        l = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var r in e)
                        if ("default" !== r && Object.prototype.hasOwnProperty.call(e, r)) {
                            var o = l ? Object.getOwnPropertyDescriptor(e, r) : null;
                            o && (o.get || o.set) ? Object.defineProperty(a, r, o) : a[r] = e[r]
                        }
                    a.default = e, n && n.set(e, a);
                    return a
                }(n(667294)),
                m = n(655241);

            function h(e) {
                if ("function" != typeof WeakMap) return null;
                var t = new WeakMap,
                    n = new WeakMap;
                return (h = function(e) {
                    return e ? n : t
                })(e)
            }

            function g(e, t, n) {
                let a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : (0, r.genId)();
                const l = (0, o.editNewsletterMetadataAction)(e, {
                        editName: !0
                    }, {
                        name: t
                    }),
                    u = e.name,
                    s = new r.ActionType(f.fbt._("Renaming channel", null, {
                        hk: "3xRXjW"
                    })),
                    m = l.then((() => (n.logEvent(d.CHANNEL_ADMIN_ACTION.CHANNEL_ADMIN_FLOW_SUCCESS), new r.ActionType(f.fbt._("Channel renamed to {name}", [f.fbt._param("name", t)], {
                        hk: "JAzRN"
                    }), {
                        actionText: (0, i.default)("Undo"),
                        actionHandler: () => g(e, u, n, a)
                    })))).catch((() => (n.logEvent(d.CHANNEL_ADMIN_ACTION.CHANNEL_ADMIN_FLOW_FAILURE), __LOG__(3)
                        `newsletter:handleEditSubject dropped`, new r.ActionType(f.fbt._("Couldn't rename channel", null, {
                            hk: "3OWiwP"
                        }), {
                            actionText: (0, i.default)("Try again"),
                            actionHandler: () => g(e, t, n, a)
                        }))));
                return c.ToastManager.open(p.default.createElement(r.ActionToast, {
                    id: a,
                    initialAction: s,
                    pendingAction: m
                })), l
            }

            function E(e) {
                let {
                    adminFunnelLogger: t,
                    chat: n
                } = e;
                const a = (0, m.useOptionalModelValues)(n.newsletterMetadata, ["name", "membershipType", "isSuspendedOrTerminated"]),
                    [r, o] = (0, p.useState)(n.formattedTitle),
                    i = (0, p.useRef)(n.formattedTitle),
                    c = (0, p.useCallback)((() => {
                        r !== i.current && (i.current = r, t.logEvent(d.CHANNEL_ADMIN_ACTION.CHANNEL_NAME_SET))
                    }), [t, r]),
                    h = (0, p.useCallback)(function() {
                        var e = (0, l.default)((function*(e) {
                            c(), e !== n.formattedTitle && (t.logEvent(d.CHANNEL_ADMIN_ACTION.CHANNEL_ADMIN_FLOW_CONFIRMATION_TAP), yield g(n, e, t))
                        }));
                        return function() {
                            return e.apply(this, arguments)
                        }
                    }(), [n, c, t]);
                return null == a ? null : p.default.createElement(u.default, {
                    subject: n.formattedTitle,
                    onSave: h,
                    editRestrictionInfo: void 0,
                    editable: (0, s.iAmAdminOrOwner)(a) && !0 !== a.isSuspendedOrTerminated,
                    emptyErrorMessage: f.fbt._("Channel name can't be empty", null, {
                        hk: "2ep6gS"
                    }),
                    onChange: o,
                    onBlur: c,
                    direction: "ltr"
                })
            }
            E.displayName = "NewsletterInfoSubject"
        },
        683023: (e, t, n) => {
            "use strict";
            var a = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.NewsletterInfoTopCard = D;
            var l = a(n(348926)),
                r = n(603869),
                o = n(927531),
                i = n(949359),
                u = n(306703),
                s = a(n(969358)),
                c = n(690495),
                d = n(477603),
                f = a(n(932325)),
                p = n(659356),
                m = n(114850),
                h = a(n(501624)),
                g = a(n(988149)),
                E = n(751460),
                b = n(405473),
                v = n(970910),
                y = n(956113),
                C = n(163139),
                M = n(180519),
                w = n(676345),
                k = n(106645),
                S = a(n(625903)),
                _ = n(874806),
                P = n(476300),
                O = n(548360),
                I = function(e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || "object" != typeof e && "function" != typeof e) return {
                        default: e
                    };
                    var n = x(t);
                    if (n && n.has(e)) return n.get(e);
                    var a = {},
                        l = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var r in e)
                        if ("default" !== r && Object.prototype.hasOwnProperty.call(e, r)) {
                            var o = l ? Object.getOwnPropertyDescriptor(e, r) : null;
                            o && (o.get || o.set) ? Object.defineProperty(a, r, o) : a[r] = e[r]
                        }
                    a.default = e, n && n.set(e, a);
                    return a
                }(n(667294)),
                N = a(n(156720)),
                T = n(655241),
                A = n(671342);

            function x(e) {
                if ("function" != typeof WeakMap) return null;
                var t = new WeakMap,
                    n = new WeakMap;
                return (x = function(e) {
                    return e ? n : t
                })(e)
            }
            const L = {
                newsletterSecondary: {
                    lineHeight: "a4ywakfo",
                    marginTop: "ma4rpf0l",
                    textAlign: "qfejxiq4"
                },
                actionIcon: {
                    color: "fsk8o631"
                },
                infoAction: {
                    flexGrow: "ggj6brxn",
                    color: "fsk8o631",
                    fontWeight: "hnx8ox4h"
                },
                spinner: {
                    stroke: "mqe5ufcr"
                },
                infoActionBtn: {
                    fontSize: "ovllcyds",
                    minWidth: "pwaghgrf"
                }
            };

            function D(e) {
                const {
                    adminFunnelLogger: t
                } = e, n = (0, T.useOptionalModelValues)(e.chat.newsletterMetadata, ["size", "privacy", "terminated", "isSuspendedOrTerminated", "membershipType", "inviteCode"]);
                let a = (null == n ? void 0 : n.privacy) === o.NewsletterPrivacy.Private ? O.fbt._("Private Channel", null, {
                    hk: "4eaPAs"
                }) : O.fbt._("Channel", null, {
                    hk: "26BY5U"
                });
                (null == n ? void 0 : n.terminated) && (a = O.fbt._("Deleted channel", null, {
                    hk: "3S2eSl"
                }));
                const l = null != (null == n ? void 0 : n.size) ? (0, i.getNewsletterFollowersText)(n.size, !0) : null;
                return I.default.createElement(s.default, {
                    theme: "padding-large"
                }, I.default.createElement(c.FlexColumn, {
                    align: "center"
                }, I.default.createElement(h.default, {
                    chat: e.chat,
                    xstyle: w.uiMargin.bottom7,
                    readOnly: !0 === (null == n ? void 0 : n.isSuspendedOrTerminated) || !(0, E.iAmAdminOrOwner)(n),
                    adminFunnelLogger: t,
                    showOutline: !0
                }), I.default.createElement(g.default, {
                    chat: e.chat,
                    adminFunnelLogger: t
                }), I.default.createElement("div", {
                    className: (0, N.default)(L.newsletterSecondary)
                }, I.default.createElement(u.SelectableSpan, {
                    dir: "auto",
                    selectable: !0
                }, I.default.createElement(M.TextSpan, {
                    size: "16",
                    color: "secondary"
                }, a, (null == n ? void 0 : n.isSuspendedOrTerminated) ? null : I.default.createElement(I.default.Fragment, null, f.default.isRTL() ? " - " : " · ", l))))), (null == n ? void 0 : n.isSuspendedOrTerminated) ? null : I.default.createElement(R, {
                    chat: e.chat
                }))
            }

            function R(e) {
                let {
                    chat: t
                } = e;
                const [n, a] = (0, I.useState)(!1), o = t.newsletterMetadata, u = (0, I.useCallback)((0, l.default)((function*() {
                    a(!0), yield(0, b.subscribeToNewsletter)((0, C.unproxy)(t), {
                        eventSurface: _.CHANNEL_EVENT_SURFACE.CHANNEL_PROFILE
                    }), a(!1)
                })), [t]), s = (0, I.useCallback)((() => {
                    m.ModalManager.open(I.default.createElement(k.UnfollowNewsletterConfirmationModal, {
                        chat: t,
                        eventSurface: _.CHANNEL_EVENT_SURFACE.CHANNEL_PROFILE
                    }))
                }), [t]), f = [];
                (0, E.iAmGuest)(o) ? f.push({
                    Icon: v.PlusLargeIcon,
                    onClick: u,
                    testid: "newsletter-info-follow-action",
                    title: O.fbt._("Follow", null, {
                        hk: "1MHfKq"
                    }),
                    isLoading: n
                }): (0, E.iAmSubscriber)(o) && f.push({
                    Icon: r.CheckmarkIcon,
                    onClick: s,
                    testid: "newsletter-info-unfollow-action",
                    title: O.fbt._("Following", null, {
                        hk: "4pSME4"
                    }),
                    isLoading: !1
                });
                const [h, g, M] = (0, A.useNewsletterInviteLink)({
                    chat: t,
                    linkShareLoggingNavigationParams: {
                        linkShareScreen: P.CHANNEL_LINK_SHARE_SCREEN.CHANNEL_INFO
                    }
                });
                return null != h && (f.push({
                    Icon: d.ForwardIcon,
                    onClick: M,
                    testid: "newsletter-info-invite-action",
                    title: (0, i.getForwardNewsletterLinkText)(),
                    isLoading: !1
                }), document.queryCommandSupported("copy") && f.push({
                    Icon: p.LinkIcon,
                    onClick: g,
                    testid: "newsletter-info-copy-link-action",
                    title: (0, i.getCopyLinkText)(),
                    isLoading: !1
                })), I.default.createElement(c.FlexRow, {
                    justify: "center",
                    align: "center",
                    xstyle: [w.uiMargin.top25, w.uiMargin.bottom10]
                }, f.map(((e, t) => {
                    let {
                        testid: a,
                        Icon: l,
                        onClick: r,
                        title: o,
                        isLoading: i
                    } = e;
                    return I.default.createElement(S.default, {
                        key: t,
                        "aria-label": o,
                        testid: a,
                        onClick: r,
                        xstyle: L.infoActionBtn,
                        disabled: n
                    }, I.default.createElement(c.FlexColumn, {
                        align: "center",
                        xstyle: [L.infoAction, w.uiPadding.horiz15]
                    }, i ? I.default.createElement(y.Spinner, {
                        color: L.spinner,
                        size: 32,
                        xstyle: w.uiMargin.bottom15
                    }) : I.default.createElement(l, {
                        xstyle: [L.actionIcon, w.uiMargin.bottom15],
                        width: 24,
                        height: 24
                    }), o))
                })))
            }
            D.displayName = "NewsletterInfoTopCard", R.displayName = "NewsletterInfoActions"
        },
        664531: (e, t, n) => {
            "use strict";
            var a = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                let {
                    chat: t,
                    xstyle: n,
                    onTransferNewsletterOwnership: a,
                    onDeleteNewsletter: r
                } = e;
                const o = M.default.createElement(_, {
                        chat: t
                    }),
                    i = M.default.createElement(S, {
                        chat: t
                    }),
                    u = M.default.createElement(O, {
                        chat: t,
                        onTransferOwnership: a
                    }),
                    s = M.default.createElement(I, {
                        chat: t,
                        onDeleteNewsletter: r
                    }),
                    c = M.default.createElement(P, {
                        chat: t
                    });
                return M.default.createElement(l.ChatInfoDrawerButtonsSection, {
                    xstyle: n
                }, o, c, u, s, i)
            };
            var l = n(464659),
                r = n(949359),
                o = n(177938),
                i = n(431037),
                u = n(36045),
                s = n(850865),
                c = n(998569),
                d = n(114850),
                f = a(n(298486)),
                p = n(73225),
                m = n(751460),
                h = a(n(726619)),
                g = n(453603),
                E = n(519738),
                b = n(824017),
                v = n(106645),
                y = n(874806),
                C = n(548360),
                M = function(e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || "object" != typeof e && "function" != typeof e) return {
                        default: e
                    };
                    var n = k(t);
                    if (n && n.has(e)) return n.get(e);
                    var a = {},
                        l = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var r in e)
                        if ("default" !== r && Object.prototype.hasOwnProperty.call(e, r)) {
                            var o = l ? Object.getOwnPropertyDescriptor(e, r) : null;
                            o && (o.get || o.set) ? Object.defineProperty(a, r, o) : a[r] = e[r]
                        }
                    a.default = e, n && n.set(e, a);
                    return a
                }(n(667294)),
                w = n(655241);

            function k(e) {
                if ("function" != typeof WeakMap) return null;
                var t = new WeakMap,
                    n = new WeakMap;
                return (k = function(e) {
                    return e ? n : t
                })(e)
            }

            function S(e) {
                let {
                    chat: t
                } = e;
                const n = (0, w.useOptionalModelValues)(t.newsletterMetadata, ["suspended", "terminated", "isSuspendedOrTerminated"]);
                if ((null == n ? void 0 : n.isSuspendedOrTerminated) || !(0, p.isNewsletterReportingEnabled)()) return null;
                const a = C.fbt._("Report channel", null, {
                    hk: "121pqy"
                });
                return M.default.createElement(u.DrawerButtonSimple, {
                    testid: "newsletter-integrity-report-button",
                    icon: M.default.createElement(E.ThumbsDownIcon, {
                        directional: !0
                    }),
                    color: "danger",
                    theme: "chat-info",
                    onClick: () => {
                        d.ModalManager.open(M.default.createElement(h.default, {
                            chat: t,
                            spamFlow: g.SpamFlow.NewsletterInfoReport
                        }))
                    }
                }, a)
            }

            function _(e) {
                let {
                    chat: t
                } = e;
                const n = (0, w.useOptionalModelValues)(t.newsletterMetadata, ["membershipType"]),
                    a = C.fbt._("Unfollow", null, {
                        hk: "3NYOtp"
                    }),
                    l = (0, M.useCallback)((() => {
                        d.ModalManager.open(M.default.createElement(v.UnfollowNewsletterConfirmationModal, {
                            chat: t,
                            eventSurface: y.CHANNEL_EVENT_SURFACE.CHANNEL_PROFILE
                        }))
                    }), [t]);
                return (0, m.iAmSubscriber)(n) ? M.default.createElement(u.DrawerButtonSimple, {
                    testid: "li-unfollow-newsletter",
                    icon: M.default.createElement(s.ExitIcon, {
                        directional: !0
                    }),
                    color: "danger",
                    theme: "chat-info",
                    onClick: l
                }, a) : null
            }

            function P(e) {
                let {
                    chat: t
                } = e;
                const n = (0, w.useOptionalModelValues)(t.newsletterMetadata, ["membershipType"]),
                    a = (0, M.useCallback)((() => {
                        const e = o.ContactCollection.getMeContact();
                        null != e && d.ModalManager.open(M.default.createElement(f.default, {
                            newsletter: t,
                            isMe: !0,
                            contact: e
                        }))
                    }), [t]);
                if (!(0, m.iAmAdmin)(n) || !(0, p.isNewsletterMultiAdminEnabled)()) return null;
                const l = C.fbt._("Dismiss yourself as admin", null, {
                    hk: "1tzVPf"
                });
                return M.default.createElement(u.DrawerButtonSimple, {
                    testid: "li-dismiss-youself-as-admin-newsletter",
                    icon: M.default.createElement(c.MinusUserIcon, null),
                    color: "danger",
                    theme: "chat-info",
                    onClick: a
                }, l)
            }

            function O(e) {
                let {
                    chat: t,
                    onTransferOwnership: n
                } = e;
                const a = (0, w.useOptionalModelValues)(t.newsletterMetadata, ["membershipType"]);
                return (0, m.iAmOwner)(a) && (0, p.isNewsletterTransferOwnershipEnabled)() ? M.default.createElement(u.DrawerButtonSimple, {
                    testid: "li-transfer-newsletter-ownership",
                    icon: M.default.createElement(b.TransferOwnershipIcon, {
                        directional: !0
                    }),
                    color: "accentLighter",
                    theme: "chat-info",
                    onClick: n
                }, (0, r.getNewsletterTransferOwnershipText)()) : null
            }

            function I(e) {
                let {
                    chat: t,
                    onDeleteNewsletter: n
                } = e;
                const a = (0, w.useOptionalModelValues)(t.newsletterMetadata, ["membershipType"]);
                return (0, m.iAmOwner)(a) ? M.default.createElement(u.DrawerButtonSimple, {
                    testid: "li-delete-newsletter",
                    icon: M.default.createElement(i.DeleteIcon, {
                        directional: !0
                    }),
                    color: "danger",
                    theme: "chat-info",
                    onClick: n
                }, (0, r.getDeleteChannelText)()) : null
            }
        },
        78668: (e, t, n) => {
            "use strict";
            var a = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var l = n(949359),
                r = a(n(908081)),
                o = n(626194),
                i = function(e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || "object" != typeof e && "function" != typeof e) return {
                        default: e
                    };
                    var n = u(t);
                    if (n && n.has(e)) return n.get(e);
                    var a = {},
                        l = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var r in e)
                        if ("default" !== r && Object.prototype.hasOwnProperty.call(e, r)) {
                            var o = l ? Object.getOwnPropertyDescriptor(e, r) : null;
                            o && (o.get || o.set) ? Object.defineProperty(a, r, o) : a[r] = e[r]
                        }
                    a.default = e, n && n.set(e, a);
                    return a
                }(n(667294));

            function u(e) {
                if ("function" != typeof WeakMap) return null;
                var t = new WeakMap,
                    n = new WeakMap;
                return (u = function(e) {
                    return e ? n : t
                })(e)
            }

            function s(e, t) {
                return i.default.createElement(r.default, {
                    ref: t,
                    testid: "newsletter-delete-drawer"
                }, i.default.createElement(o.DrawerHeader, {
                    title: (0, l.getNewsletterTransferOwnershipText)(),
                    type: o.DRAWER_HEADER_TYPE.SMALL,
                    onBack: e.onBack,
                    onCancel: e.onCancel
                }))
            }
            var c = (0, i.forwardRef)(s);
            t.default = c
        },
        250940: (e, t, n) => {
            "use strict";
            var a = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var l = a(n(557294)),
                r = n(927531),
                o = a(n(908081)),
                i = a(n(324093)),
                u = n(626194),
                s = a(n(969358)),
                c = n(811720),
                d = a(n(395767)),
                f = a(n(570834)),
                p = a(n(932325)),
                m = n(606166),
                h = n(608456),
                g = n(745170),
                E = n(676345),
                b = n(617425),
                v = n(548360),
                y = function(e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || "object" != typeof e && "function" != typeof e) return {
                        default: e
                    };
                    var n = M(t);
                    if (n && n.has(e)) return n.get(e);
                    var a = {},
                        l = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var r in e)
                        if ("default" !== r && Object.prototype.hasOwnProperty.call(e, r)) {
                            var o = l ? Object.getOwnPropertyDescriptor(e, r) : null;
                            o && (o.get || o.set) ? Object.defineProperty(a, r, o) : a[r] = e[r]
                        }
                    a.default = e, n && n.set(e, a);
                    return a
                }(n(667294)),
                C = (a(n(156720)), a(n(261716)));

            function M(e) {
                if ("function" != typeof WeakMap) return null;
                var t = new WeakMap,
                    n = new WeakMap;
                return (M = function(e) {
                    return e ? n : t
                })(e)
            }
            const w = {
                drawer: {
                    backgroundColor: "ihvf49ua"
                }
            };

            function k(e) {
                let {
                    chat: t
                } = e;
                return y.default.createElement("div", null, y.default.createElement(c.Empty, {
                    xstyle: E.uiMargin.top20,
                    text: v.fbt._("Your channel doesn't have any admins. You can only transfer ownership to admins.", null, {
                        hk: "4zI2XI"
                    }),
                    testid: "transfer-ownership-no-admins"
                }, y.default.createElement(b.WDSButtonSimplified, {
                    onClick: () => {
                        (0, m.startAdminInviteFlow)({
                            chat: t
                        })
                    },
                    testid: "newsletter-invite-admins"
                }, v.fbt._("Invite admins", null, {
                    hk: "4DHCbn"
                }))))
            }

            function S(e, t) {
                var n;
                const {
                    chat: a,
                    onTransferOwnershipSelection: c
                } = e, m = (0, y.useRef)(), [E, b] = (0, C.default)(), M = (0, d.default)("Search"), S = (0, y.useMemo)((() => new f.default), []), _ = y.default.createElement(s.default, {
                    shadow: !1,
                    animation: !1,
                    theme: "list-section"
                }, y.default.createElement(g.DrawerSearchInput, {
                    searchInputA11yLabel: M,
                    placeholder: M,
                    onSearch: b,
                    focusOnMount: !1
                })), P = null === (n = a.newsletterMetadata) || void 0 === n ? void 0 : n.subscribers.filter((e => e.membership === r.NewsletterMembershipType.Admin)).map((e => e.contact)), O = (0, y.useCallback)((() => {
                    const e = p.default.accentFold(E),
                        t = (0, h.numberSearch)(e);
                    return (null != P ? P : []).filter((n => !e || e && n.searchMatch(e, t)))
                }), [P, E]), I = (0, y.useCallback)((() => {
                    const e = {
                        contacts: O(),
                        header: v.fbt._("Admins", null, {
                            hk: "12a1VH"
                        })
                    };
                    return y.default.createElement(l.default, {
                        ref: m,
                        contacts: [],
                        flatListController: S,
                        onClick: (e, t) => {
                            c(t)
                        },
                        showMe: !1,
                        showBot: !1,
                        showPersonGroupDivisionHeader: !0,
                        separateContacts: e
                    })
                }), [O, S, c]), N = null == P || 0 === (null == P ? void 0 : P.length) ? y.default.createElement(k, {
                    chat: a
                }) : I();
                return y.default.createElement(o.default, {
                    ref: t,
                    xstyle: w.drawer,
                    testid: "newsletter-delete-drawer"
                }, y.default.createElement(u.DrawerHeader, {
                    title: v.fbt._("Select new owner", null, {
                        hk: "3BUXpS"
                    }),
                    type: u.DRAWER_HEADER_TYPE.SMALL,
                    onBack: e.onBack,
                    onCancel: e.onCancel
                }), _, y.default.createElement(i.default, null, N))
            }
            k.displayName = "NoAdmins";
            var _ = (0, y.forwardRef)(S);
            t.default = _
        },
        671342: (e, t, n) => {
            "use strict";
            var a = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.useNewsletterInviteLink = function(e) {
                let {
                    chat: t,
                    linkShareLoggingNavigationParams: n
                } = e;
                const a = t.formattedTitle,
                    h = (0, m.useOptionalModelValues)(t.newsletterMetadata, ["membershipType", "inviteCode"]),
                    {
                        inviteCode: g
                    } = h || {},
                    E = null != g ? `https://whatsapp.com/channel/${g}` : null,
                    b = (0, p.useCallback)((() => {
                        if (null == E) return;
                        (0, o.logNewsletterLinkShare)({
                            shareDirection: c.CHANNEL_LINK_SHARE_DIRECTION.WHATSAPP,
                            linkShareScreen: n.linkShareScreen,
                            newsletter: (0, d.toNewsletterWid)(t.id),
                            linkShareScreenEntryPoint: n.linkShareScreenEntryPoint
                        });
                        const e = f.fbt._("Follow the {newsletter_name} channel on WhatsApp: {link}", [f.fbt._param("newsletter_name", a), f.fbt._param("link", E)], {
                                hk: "2JUBPH"
                            }),
                            l = f.fbt._("Send channel link to", null, {
                                hk: "1oZ2BE"
                            });
                        r.ModalManager.open(p.default.createElement(i.default, {
                            title: l,
                            text: e.toString(),
                            origin: t.id
                        }), {
                            transition: "modal-flow"
                        })
                    }), [E, n, t.id, a]),
                    v = (0, p.useCallback)((() => {
                        if (null == E) return;
                        (0, l.copyTextToClipboard)(E) ? s.ToastManager.open(p.default.createElement(u.Toast, {
                            msg: f.fbt._("Link copied to clipboard.", null, {
                                hk: "24K2ka"
                            })
                        })): s.ToastManager.open(p.default.createElement(u.Toast, {
                            msg: f.fbt._("Couldn't copy to clipboard.", null, {
                                hk: "2JI7CO"
                            })
                        }))
                    }), [E]);
                return [E, v, b]
            };
            var l = n(985714),
                r = n(114850),
                o = n(215441),
                i = a(n(210002)),
                u = n(625786),
                s = n(390737),
                c = n(809991),
                d = n(669050),
                f = n(548360),
                p = function(e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || "object" != typeof e && "function" != typeof e) return {
                        default: e
                    };
                    var n = h(t);
                    if (n && n.has(e)) return n.get(e);
                    var a = {},
                        l = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var r in e)
                        if ("default" !== r && Object.prototype.hasOwnProperty.call(e, r)) {
                            var o = l ? Object.getOwnPropertyDescriptor(e, r) : null;
                            o && (o.get || o.set) ? Object.defineProperty(a, r, o) : a[r] = e[r]
                        }
                    a.default = e, n && n.set(e, a);
                    return a
                }(n(667294)),
                m = n(655241);

            function h(e) {
                if ("function" != typeof WeakMap) return null;
                var t = new WeakMap,
                    n = new WeakMap;
                return (h = function(e) {
                    return e ? n : t
                })(e)
            }
        },
        215441: (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.logNewsletterLinkShare = function(e) {
                let {
                    shareDirection: t,
                    linkShareScreenEntryPoint: n,
                    linkShareScreen: r,
                    newsletter: o
                } = e;
                if (!(0, l.isNewsletterLinkShareLoggingEnabled)()) return;
                new a.ChannelLinkShareWamEvent({
                    channelLinkShareDirection: t,
                    channelLinkShareEntryPoint: n,
                    channelLinkShareScreen: r,
                    cid: o.user
                }).commit()
            };
            var a = n(428179),
                l = n(73225)
        },
        933655: (e, t, n) => {
            "use strict";
            var a = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.NewsletterEmojiSettings = b;
            var l = n(927531),
                r = n(70354),
                o = a(n(225148)),
                i = n(73225),
                u = n(695431),
                s = n(348538),
                c = n(676345),
                d = n(548360),
                f = a(n(667294)),
                p = a(n(156720));
            const m = {
                title: {
                    color: "i8b0kslj"
                }
            };

            function h() {
                return f.default.createElement("span", null, s.REACTIONS_DEFAULT_SENDING_TRAY.map(((e, t) => {
                    const n = r.EmojiUtil.normalizeEmojiFromString(e),
                        a = t + 1 === s.REACTIONS_DEFAULT_SENDING_TRAY.length ? c.uiMargin.end0 : c.uiMargin.end4;
                    return null != n ? f.default.createElement("span", {
                        className: (0, p.default)(a),
                        key: `newsletter-emoji-container-${t}`
                    }, f.default.createElement(o.default, {
                        key: `newsletter-emoji-${t}`,
                        emoji: n,
                        size: "small",
                        element: "span"
                    })) : null
                })))
            }
            h.displayName = "NewsletterEmojiSettingsEmojiTray";
            const g = [{
                    getLabel: () => d.fbt._("Any emoji", null, {
                        hk: "PwBNc"
                    }),
                    value: l.NewsletterReactionCodesSetting.All
                }, {
                    getLabel: () => d.fbt._("Default only ({reaction-emojis})", [d.fbt._param("reaction-emojis", f.default.createElement(h, null))], {
                        hk: "YnzVd"
                    }),
                    value: l.NewsletterReactionCodesSetting.Basic
                }],
                E = {
                    getLabel: () => d.fbt._("None", null, {
                        hk: "vlKK9"
                    }),
                    value: l.NewsletterReactionCodesSetting.None
                };

            function b(e) {
                let {
                    currentlySelected: t,
                    onClick: n
                } = e;
                const a = f.default.createElement("div", {
                        className: (0, p.default)([m.title, c.uiMargin.bottom15])
                    }, d.fbt._("Which reactions can followers send", null, {
                        hk: "4fwuWS"
                    })),
                    l = (0, i.isNewsletterReactionSettingForNoneEnabled)() ? [...g, E] : g;
                return f.default.createElement(f.default.Fragment, null, a, f.default.createElement(u.RadioGroup, {
                    name: "newsletter-reaction-codes-setting",
                    checkedValue: t,
                    theme: u.RadioWithLabelThemeEnum.LARGE,
                    onChange: n,
                    options: l.map((e => ({
                        value: e.value,
                        label: e.getLabel(),
                        onChange: n,
                        testid: `newsletter-emoji-setting-${e.value}`
                    })))
                }))
            }
            b.displayName = "NewsletterEmojiSettings"
        },
        660508: (e, t, n) => {
            "use strict";
            var a = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var l = a(n(967154)),
                r = a(n(170206)),
                o = n(949359),
                i = n(405283),
                u = n(306703),
                s = n(23641),
                c = a(n(908081)),
                d = n(36045),
                f = n(626194),
                p = n(690495),
                m = n(477603),
                h = n(220584),
                g = n(676345),
                E = n(476300),
                b = n(851488),
                v = n(548360),
                y = function(e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || "object" != typeof e && "function" != typeof e) return {
                        default: e
                    };
                    var n = k(t);
                    if (n && n.has(e)) return n.get(e);
                    var a = {},
                        l = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var r in e)
                        if ("default" !== r && Object.prototype.hasOwnProperty.call(e, r)) {
                            var o = l ? Object.getOwnPropertyDescriptor(e, r) : null;
                            o && (o.get || o.set) ? Object.defineProperty(a, r, o) : a[r] = e[r]
                        }
                    a.default = e, n && n.set(e, a);
                    return a
                }(n(667294)),
                C = a(n(156720)),
                M = n(655241),
                w = n(671342);

            function k(e) {
                if ("function" != typeof WeakMap) return null;
                var t = new WeakMap,
                    n = new WeakMap;
                return (k = function(e) {
                    return e ? n : t
                })(e)
            }
            const S = {
                    drawer: {
                        backgroundColor: "lkjmyc96"
                    },
                    header: {
                        width: "gofbmt1g",
                        borderTopStartRadius: "bbr44loe",
                        borderTopEndRadius: "ooj5yc5b",
                        borderBottomEndRadius: "m8i16etx",
                        borderBottomStartRadius: "cw0ivh8j",
                        backgroundColor: "f6ipylw5",
                        overflowX: "gfz4du6o",
                        overflowY: "r7fjleex"
                    },
                    optionsHeader: {
                        textAlign: "ljrqcn24"
                    },
                    divider: {
                        width: "ln8gz9je",
                        height: "kanlod6e",
                        backgroundColor: "i86xphuw"
                    },
                    mouseCursor: {
                        cursor: "ajgl1lbb"
                    },
                    link: {
                        wordBreak: "m1c2hokz"
                    },
                    newsletterName: {
                        wordBreak: "cw3vfol9",
                        maxHeight: "krcjiuu9"
                    }
                },
                _ = (0, y.forwardRef)(((e, t) => {
                    var n;
                    const a = null !== (n = e.entryPoint) && void 0 !== n ? n : void 0;
                    void 0 === a && (__LOG__(3, void 0, void 0, !0, ["newsletter-logging"])
                        `Encountered null link share screen entry point`, SEND_LOGS("Null link share screen entry point in newsletter link share logging", 1, "newsletter-logging"));
                    const [k, _, P] = (0, w.useNewsletterInviteLink)({
                        chat: e.newsletter,
                        linkShareLoggingNavigationParams: {
                            linkShareScreen: E.CHANNEL_LINK_SHARE_SCREEN.SHARE_LINK_SCREEN,
                            linkShareScreenEntryPoint: a
                        }
                    }), O = (0, M.useOptionalModelValues)(e.newsletter.newsletterMetadata, ["name"]), I = (0, M.useModelValues)(e.newsletter.contact, ["id", "profilePicThumb"]), N = [];
                    null != k && (N.push({
                        Icon: m.ForwardIcon,
                        onClick: P,
                        testid: "newsletter-info-invite-action",
                        title: (0, o.getSendLinkViaWhatsAppText)()
                    }), document.queryCommandSupported("copy") && N.push({
                        Icon: i.CopyIcon,
                        onClick: _,
                        testid: "newsletter-info-copy-link-action",
                        title: (0, o.getCopyLinkText)()
                    }));
                    const T = y.default.createElement("div", {
                            className: (0, C.default)([S.header, g.uiMargin.all15])
                        }, y.default.createElement(r.default, {
                            image: y.default.createElement(s.DetailImage, {
                                id: I.id,
                                size: 56,
                                shape: s.DetailImageShape.Circle,
                                quality: s.DetailImageQuality.High
                            }),
                            primary: y.default.createElement(b.WDSTextTitle, {
                                xstyle: S.newsletterName
                            }, null == O ? void 0 : O.name),
                            secondary: y.default.createElement(u.SelectableLink, {
                                selectable: !0,
                                onClick: _,
                                xstyle: S.mouseCursor
                            }, y.default.createElement(b.WDSTextMuted, {
                                color: "link",
                                textWrap: "wrap",
                                xstyle: S.link,
                                testid: "newsletter-link-drawer-copyable-link"
                            }, k)),
                            theme: "newsletter-link-cell",
                            className: (0, C.default)(g.uiMargin.vert4, g.uiMargin.horiz2)
                        })),
                        A = y.default.createElement(b.WDSTextSectionTitle, {
                            xstyle: S.optionsHeader,
                            marginEnd: 32,
                            marginStart: 32,
                            marginTop: 16,
                            marginBottom: 20,
                            color: "primary"
                        }, (0, o.getChannelLinkInformationText)()),
                        x = y.default.createElement(p.FlexRow, {
                            xstyle: [g.uiMargin.vert4, g.uiMargin.horiz30]
                        }, y.default.createElement("div", {
                            className: (0, C.default)(S.divider)
                        })),
                        L = e.onBack ? {
                            onBack: e.onBack
                        } : {
                            onCancel: e.onClose
                        };
                    return y.default.createElement(c.default, {
                        ref: t,
                        theme: "striped",
                        testid: "newsletter-link-drawer",
                        xstyle: S.drawer
                    }, y.default.createElement(f.DrawerHeader, (0, l.default)({
                        title: v.fbt._("Channel link", null, {
                            hk: "41e9Nh"
                        }),
                        type: f.DRAWER_HEADER_TYPE.SMALL
                    }, L, {
                        rtlFixIfOnDarwin: !0,
                        testid: "newsletter-link-drawer-header"
                    })), T, A, x, N.map(((e, t) => {
                        let {
                            testid: n,
                            Icon: a,
                            onClick: l,
                            title: r
                        } = e;
                        return y.default.createElement(d.DrawerButtonSimple, {
                            key: `${n}-${t}`,
                            testid: n,
                            icon: y.default.createElement(a, {
                                width: 24,
                                height: 24,
                                color: h.SvgColorProp.SECONDARY
                            }),
                            divider: !1,
                            onClick: l
                        }, r)
                    })))
                }));
            _.displayName = "NewsletterLinkDrawer";
            var P = _;
            t.default = P
        },
        156636: (e, t, n) => {
            "use strict";
            var a = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = C;
            var l = n(464659),
                r = a(n(831584)),
                o = n(949359),
                i = a(n(570834)),
                u = a(n(932325)),
                s = n(114850),
                c = n(164406),
                d = n(663149),
                f = n(396802),
                p = n(661991),
                m = a(n(237889)),
                h = n(676345),
                g = n(548360),
                E = a(n(667294)),
                b = a(n(637660)),
                v = n(542534),
                y = n(12579);

            function C(e) {
                let {
                    newsletter: t,
                    onVerification: n
                } = e;
                const a = (0, v.useNewsletterPendingInvites)(t),
                    C = a.length,
                    M = (0, b.default)((() => new i.default)),
                    w = (0, b.default)((() => new m.default([], (e => e.id.toString())))),
                    k = a.slice(0, f.NEWSLETTER_INFO_SUBSCRIBER_DISPLAY_LIMIT).map((e => ({
                        itemKey: `pending-${e.id.toJid()}`,
                        contact: e,
                        height: 68,
                        role: null,
                        isPendingAdmin: !0
                    }))),
                    [S, _] = (0, y.useNewsletterSubscribersContextMenu)({
                        chat: t,
                        isFullModal: !1,
                        onVerification: n,
                        followerInformation: new Map(k.map((e => {
                            var t;
                            return [null === (t = e.contact) || void 0 === t ? void 0 : t.id, {
                                newsletterRole: null
                            }]
                        }))),
                        newsletter: t
                    });
                if (0 === C) return null;
                const P = C > f.NEWSLETTER_INFO_SUBSCRIBER_DISPLAY_LIMIT ? E.default.createElement(r.default, {
                    numMore: C,
                    onClick: () => {
                        s.ModalManager.open(E.default.createElement(p.NewsletterSubscriberListModal, {
                            newsletter: t,
                            initialStep: p.FollowersFlowStep.PendingInvites,
                            onVerification: n
                        }), {
                            transition: "modal-flow"
                        })
                    },
                    fromNewsletter: !0,
                    viewAll: !0
                }) : null;
                return E.default.createElement(E.default.Fragment, null, E.default.createElement(l.ChatInfoDrawerListSection, {
                    testid: "newsletter-info-pending-invites-list",
                    title: (0, o.getAdminInvitesTitleText)(C),
                    xstyle: h.uiMargin.top10
                }, E.default.createElement(c.NavigableFlatList, {
                    ariaLabel: g.fbt._("Pending Invites List: {pending-invites-list-size}", [g.fbt._param("pending-invites-list-size", u.default.n(C))], {
                        hk: "fq0dT"
                    }),
                    flatListController: M.current,
                    listData: k,
                    onRenderItem: e => E.default.createElement(d.NewsletterSubscriber, {
                        subscriberData: e,
                        handleContactClick: () => {},
                        handleContactContextMenu: _,
                        active: w.current
                    }),
                    selection: w.current,
                    rotateList: !0
                }), P), S)
            }
            C.displayName = "NewsletterPendingInvites"
        },
        245272: (e, t, n) => {
            "use strict";
            var a = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var l = a(n(967154)),
                r = a(n(348926)),
                o = n(780549),
                i = n(927531),
                u = a(n(908081)),
                s = a(n(324093)),
                c = n(626194),
                d = n(172365),
                f = n(933655),
                p = n(676345),
                m = n(548360),
                h = function(e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || "object" != typeof e && "function" != typeof e) return {
                        default: e
                    };
                    var n = v(t);
                    if (n && n.has(e)) return n.get(e);
                    var a = {},
                        l = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var r in e)
                        if ("default" !== r && Object.prototype.hasOwnProperty.call(e, r)) {
                            var o = l ? Object.getOwnPropertyDescriptor(e, r) : null;
                            o && (o.get || o.set) ? Object.defineProperty(a, r, o) : a[r] = e[r]
                        }
                    a.default = e, n && n.set(e, a);
                    return a
                }(n(667294)),
                g = a(n(156720)),
                E = n(808446),
                b = n(655241);

            function v(e) {
                if ("function" != typeof WeakMap) return null;
                var t = new WeakMap,
                    n = new WeakMap;
                return (v = function(e) {
                    return e ? n : t
                })(e)
            }

            function y() {
                return (y = (0, r.default)((function*(e, t) {
                    try {
                        return yield(0, d.editNewsletterMetadataAction)(e, {
                            editReactionCodesSetting: !0
                        }, {
                            reactionCodesSetting: t
                        })
                    } catch (t) {
                        __LOG__(4, void 0, new Error, !0, ["reactions", "newsletter"])
                        `[handleReactionCodesSettingChange][editNewsletterMetadataAction] Error editing reaction settings for newsletter ${e.id}`, SEND_LOGS("newsletter-edit-reaction-settings-failed", 1, "reactions", "newsletter")
                    }
                }))).apply(this, arguments)
            }
            const C = {
                    body: {
                        flexShrink: "oq44ahr5",
                        flexGrow: "ggj6brxn",
                        flexBasis: "lb5m6g5c",
                        paddingBottom: "s9fl9ege"
                    },
                    drawer: {
                        backgroundColor: "lkjmyc96"
                    }
                },
                M = (0, h.forwardRef)(((e, t) => {
                    var n, a;
                    const d = (0, h.useCallback)(function() {
                            var t = (0, r.default)((function*(t) {
                                var n;
                                const a = null !== (n = i.NewsletterReactionCodesSetting.cast(Number(t.target.value))) && void 0 !== n ? n : i.NewsletterReactionCodesSetting.Basic;
                                e.adminFunnelLogger.logReactionSetting(a), yield function() {
                                    return y.apply(this, arguments)
                                }(e.newsletter, a)
                            }));
                            return function() {
                                return t.apply(this, arguments)
                            }
                        }(), [e.newsletter, e.adminFunnelLogger]),
                        v = (0, b.useOptionalModelValues)(null === (n = e.newsletter) || void 0 === n ? void 0 : n.newsletterMetadata, ["reactionCodesSetting"]);
                    (0, E.useListener)(o.Cmd, "edit_newsletter_description", (() => e.onBack()));
                    const M = !0 === e.isFirstLevel ? {
                        onCancel: e.onBack
                    } : {
                        onBack: e.onBack
                    };
                    return h.default.createElement(u.default, {
                        ref: t,
                        theme: "striped",
                        testid: "newsletter-settings-drawer",
                        xstyle: C.drawer
                    }, h.default.createElement(c.DrawerHeader, (0, l.default)({
                        title: m.fbt._("Channel settings", null, {
                            hk: "2bWwDX"
                        }),
                        type: c.DRAWER_HEADER_TYPE.SMALL
                    }, M, {
                        rtlFixIfOnDarwin: !0,
                        testid: "newsletter-settings-drawer-header"
                    })), h.default.createElement(s.default, null, h.default.createElement("section", {
                        className: (0, g.default)([C.body, p.uiMargin.horiz30, p.uiMargin.vert30])
                    }, h.default.createElement(f.NewsletterEmojiSettings, {
                        onClick: d,
                        currentlySelected: null !== (a = null == v ? void 0 : v.reactionCodesSetting) && void 0 !== a ? a : i.NewsletterReactionCodesSetting.Basic
                    }))))
                }));
            M.displayName = "NewsletterSettingsDrawer";
            var w = M;
            t.default = w
        },
        355793: (e, t, n) => {
            "use strict";
            var a = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.ExitedGroupQPSurface = c;
            var l = n(312158),
                r = n(690495),
                o = n(959989),
                i = n(753284),
                u = a(n(667294)),
                s = n(179203);

            function c(e) {
                let {
                    group: t
                } = e;
                const n = (0, s.usePrivacyTipQuickPromotion)({
                    surfaceId: l.QP_SURFACE_ID_EXITED_GROUP,
                    group: t
                });
                if (null == n || !(0, i.groupsPrivacyTipsEnabled)()) return;
                const {
                    promotion: a,
                    sanitizedText: c,
                    image: d,
                    dismiss: f,
                    primaryActionClick: p,
                    settingStep: m
                } = n, h = a.promotion.data.primaryAction;
                return u.default.createElement(r.FlexRow, {
                    paddingTop: 8
                }, u.default.createElement(o.PrivacyTipBanner, {
                    text: c,
                    image: d,
                    actionText: null == h ? void 0 : h.text,
                    onDismiss: f,
                    onAction: p,
                    settingStep: m
                }))
            }
            c.displayName = "ExitedGroupQPSurface"
        },
        371125: (e, t, n) => {
            "use strict";
            var a = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                const {
                    stickerPackId: t,
                    onStickerPackView: n,
                    stickerPackViewDelay: a,
                    sticker: h,
                    showViewPackButton: g
                } = e, E = function(e) {
                    (0, p.useEffect)((() => {
                        e && d.StickerPackCollectionMd.fetchStickerPack(e)
                    }), [e]);
                    return (0, m.default)(d.StickerPackCollectionMd, "add remove reset", (() => null != e ? d.StickerPackCollectionMd.get(e) : null))
                }(t);
                let b;
                if (t) {
                    const e = e => {
                        e.stopPropagation(), n && n(), null != a ? self.setTimeout((() => r.Cmd.openStickerPack(t)), a + 150) : r.Cmd.openStickerPack(t)
                    };
                    (0, s.isFavoriteStickersEnabled)() ? null != h && (b = p.default.createElement(u.FlexRow, null, g && p.default.createElement(l.default, {
                        onClick: e,
                        type: "secondary"
                    }, f.fbt._("View Pack", null, {
                        hk: "tAlU3"
                    })), i.FavoriteStickerCollection.get(h.filehash) ? p.default.createElement(l.default, {
                        onClick: () => (0, o.removeStickerFromFavorites)(h),
                        type: "secondary"
                    }, f.fbt._("Remove From Favorites", null, {
                        hk: "3YoUkP"
                    })) : p.default.createElement(l.default, {
                        onClick: () => (0, o.addStickerToFavorites)(h),
                        type: "secondary"
                    }, f.fbt._("Add to Favorites", null, {
                        hk: "3x4EBo"
                    })))): b = g ? p.default.createElement(l.default, {
                        onClick: e,
                        type: "secondary"
                    }, f.fbt._("View Pack", null, {
                        hk: "tAlU3"
                    })) : null
                }
                return p.default.createElement(p.default.Fragment, null, p.default.createElement(c.StickerDetailsStickerPackInfo, {
                    name: null == E ? void 0 : E.name,
                    publisher: null == E ? void 0 : E.publisher,
                    theme: c.Theme.MediaViewer
                }), b)
            };
            var l = a(n(692629)),
                r = n(780549),
                o = n(225446),
                i = n(788788),
                u = n(690495),
                s = n(97858),
                c = n(438543),
                d = n(425192),
                f = n(548360),
                p = function(e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || "object" != typeof e && "function" != typeof e) return {
                        default: e
                    };
                    var n = h(t);
                    if (n && n.has(e)) return n.get(e);
                    var a = {},
                        l = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var r in e)
                        if ("default" !== r && Object.prototype.hasOwnProperty.call(e, r)) {
                            var o = l ? Object.getOwnPropertyDescriptor(e, r) : null;
                            o && (o.get || o.set) ? Object.defineProperty(a, r, o) : a[r] = e[r]
                        }
                    a.default = e, n && n.set(e, a);
                    return a
                }(n(667294)),
                m = a(n(524578));

            function h(e) {
                if ("function" != typeof WeakMap) return null;
                var t = new WeakMap,
                    n = new WeakMap;
                return (h = function(e) {
                    return e ? n : t
                })(e)
            }
        },
        565527: (e, t, n) => {
            "use strict";
            var a = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var l = a(n(348926)),
                r = n(691454),
                o = n(778945),
                i = n(87630),
                u = a(n(908081)),
                s = a(n(324093)),
                c = n(626194),
                d = n(548360),
                f = function(e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || "object" != typeof e && "function" != typeof e) return {
                        default: e
                    };
                    var n = p(t);
                    if (n && n.has(e)) return n.get(e);
                    var a = {},
                        l = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var r in e)
                        if ("default" !== r && Object.prototype.hasOwnProperty.call(e, r)) {
                            var o = l ? Object.getOwnPropertyDescriptor(e, r) : null;
                            o && (o.get || o.set) ? Object.defineProperty(a, r, o) : a[r] = e[r]
                        }
                    a.default = e, n && n.set(e, a);
                    return a
                }(n(667294));

            function p(e) {
                if ("function" != typeof WeakMap) return null;
                var t = new WeakMap,
                    n = new WeakMap;
                return (p = function(e) {
                    return e ? n : t
                })(e)
            }
            const m = (e, t) => {
                const {
                    contactId: n
                } = e, [a, p] = (0, f.useState)(void 0), [m, h] = (0, f.useState)(!0);
                (0, f.useEffect)((() => {
                    (function() {
                        var e = (0, l.default)((function*() {
                            const e = yield o.BusinessProfileCollection.update(n, {
                                getMerchantCompliance: !0
                            }), t = (Array.isArray(e) ? e[0] : e).serialize();
                            t ? (p(t.legalEntityDetails || void 0), h(!1)) : __LOG__(3)
                            `compliance: cannot fetch business details (${n.toString()})`
                        }));
                        return function() {
                            return e.apply(this, arguments)
                        }
                    })()()
                }), []);
                const {
                    entityName: g,
                    customerCareDetails: E,
                    grievanceOfficerDetails: b
                } = null != a ? a : {}, v = (0, r.getEntityTypeText)(a);
                return f.default.createElement(u.default, {
                    ref: t,
                    key: "merchant-details-modal",
                    theme: "striped"
                }, f.default.createElement(c.DrawerHeader, {
                    title: d.fbt._("Business details", null, {
                        hk: "m9xzp"
                    }),
                    type: c.DRAWER_HEADER_TYPE.SMALL,
                    onCancel: e.onClose
                }), f.default.createElement(s.default, {
                    theme: m ? "center-content" : void 0
                }, m ? f.default.createElement(i.ComplianceInfoLoading, null) : f.default.createElement(f.default.Fragment, null, f.default.createElement(i.ComplianceInfoGroup, null, f.default.createElement(i.ComplianceInfoPrimitiveField, {
                    value: g,
                    label: d.fbt._("Legal Name of Business", null, {
                        hk: "2s9jD"
                    })
                }), f.default.createElement(i.ComplianceInfoPrimitiveField, {
                    value: v,
                    label: d.fbt._("Business Type", null, {
                        hk: "48J73B"
                    })
                })), f.default.createElement(i.ComplianceInfoGroup, {
                    title: d.fbt._("Customer Care Information", null, {
                        hk: "qlYos"
                    })
                }, f.default.createElement(i.ComplianceInfoPrimitiveField, {
                    value: null == E ? void 0 : E.mobileNumber,
                    label: d.fbt._("Mobile Phone Number", null, {
                        hk: "PMTTg"
                    }),
                    forceLTR: !0
                }), f.default.createElement(i.ComplianceInfoPrimitiveField, {
                    value: null == E ? void 0 : E.landlineNumber,
                    label: d.fbt._("Landline Phone Number", null, {
                        hk: "tXYaf"
                    }),
                    forceLTR: !0
                }), f.default.createElement(i.ComplianceInfoPrimitiveField, {
                    value: null == E ? void 0 : E.email,
                    label: d.fbt._("Email Address", null, {
                        hk: "2jYxR1"
                    })
                })), f.default.createElement(i.ComplianceInfoGroup, {
                    title: d.fbt._("Grievance Officer Information", null, {
                        hk: "3emd7I"
                    })
                }, f.default.createElement(i.ComplianceInfoPrimitiveField, {
                    value: null == b ? void 0 : b.name,
                    label: d.fbt._("Name", null, {
                        hk: "2vEs6r"
                    })
                }), f.default.createElement(i.ComplianceInfoPrimitiveField, {
                    value: null == b ? void 0 : b.mobileNumber,
                    label: d.fbt._("Mobile Phone Number", null, {
                        hk: "3kk5I"
                    }),
                    forceLTR: !0
                }), f.default.createElement(i.ComplianceInfoPrimitiveField, {
                    value: null == b ? void 0 : b.landlineNumber,
                    label: d.fbt._("Landline Phone Number", null, {
                        hk: "4GBzF0"
                    })
                }), f.default.createElement(i.ComplianceInfoPrimitiveField, {
                    value: null == b ? void 0 : b.email,
                    label: d.fbt._("Email Address", null, {
                        hk: "3SvbLl"
                    })
                })))))
            };
            var h = (0, f.forwardRef)(m);
            t.default = h
        },
        517729: (e, t, n) => {
            "use strict";
            var a = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = P;
            var l = n(240045),
                r = n(817649),
                o = a(n(196554)),
                i = n(103440),
                u = n(445729),
                s = n(660666),
                c = n(305521),
                d = n(753233),
                f = n(258105),
                p = a(n(395767)),
                m = n(97858),
                h = n(114850),
                g = n(945270),
                E = n(180519),
                b = n(676345),
                v = n(493885),
                y = n(403602),
                C = n(548360),
                M = function(e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || "object" != typeof e && "function" != typeof e) return {
                        default: e
                    };
                    var n = S(t);
                    if (n && n.has(e)) return n.get(e);
                    var a = {},
                        l = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var r in e)
                        if ("default" !== r && Object.prototype.hasOwnProperty.call(e, r)) {
                            var o = l ? Object.getOwnPropertyDescriptor(e, r) : null;
                            o && (o.get || o.set) ? Object.defineProperty(a, r, o) : a[r] = e[r]
                        }
                    a.default = e, n && n.set(e, a);
                    return a
                }(n(667294)),
                w = a(n(156720)),
                k = n(379811);

            function S(e) {
                if ("function" != typeof WeakMap) return null;
                var t = new WeakMap,
                    n = new WeakMap;
                return (S = function(e) {
                    return e ? n : t
                })(e)
            }
            const _ = {
                color: "jq3rn4u7"
            };

            function P(e) {
                let {
                    contact: t
                } = e;
                const [n, a] = (0, k.useContactValues)(t.id, [s.getVerifiedLevel, s.getVerifiedName]), S = (0, f.getBusinessFaqUrl)(), P = !u.Conn.isSMB;
                (0, M.useEffect)((() => {
                    P && new l.BannerEventWamEvent({
                        bannerType: y.BANNER_TYPES.CROSS_SELL_PROFILE_INTERSTITIAL,
                        bannerOperation: v.BANNER_OPERATIONS.SHOWN
                    }).commit()
                }), [P]);
                const O = n === r.VERIFIED_LEVEL.HIGH && !(0, m.isBlueEducationEnabled)() ? C.fbt._('WhatsApp has verified that this is the official business account of "{businessName}". This business uses WhatsApp Business, which allows them to add their opening hours, address, website and catalog of products or services.', [C.fbt._param("businessName", a)], {
                    hk: "43yvU"
                }) : C.fbt._("This business uses WhatsApp Business, which allows them to add their opening hours, address, website and catalog of products or services.", null, {
                    hk: "82W5f"
                });
                return M.default.createElement(i.ConfirmPopup, {
                    title: C.fbt._("About WhatsApp Business", null, {
                        hk: "3XF5gx"
                    }),
                    onOK: () => {
                        h.ModalManager.close(), P && new l.BannerEventWamEvent({
                            bannerType: y.BANNER_TYPES.CROSS_SELL_PROFILE_INTERSTITIAL,
                            bannerOperation: v.BANNER_OPERATIONS.DISMISS
                        }).commit()
                    },
                    okText: (0, p.default)("OK")
                }, M.default.createElement(c.EmojiText, {
                    text: O
                }), " ", M.default.createElement(o.default, {
                    href: S,
                    onClick: e => {
                        e.preventDefault(), h.ModalManager.close(), self.setTimeout((() => (0, d.openExternalLink)(S)), 10)
                    }
                }, C.fbt._("Learn more", null, {
                    hk: "1rcCLt"
                })), P && M.default.createElement("div", {
                    className: (0, w.default)(b.uiMargin.top16)
                }, M.default.createElement(E.TextSpan, {
                    theme: "muted",
                    size: "13"
                }, C.fbt._("If you're a business, the free WhatsApp Business app can help.", null, {
                    hk: "14W7ur"
                }), M.default.createElement("br", null), M.default.createElement(o.default, {
                    onClick: e => {
                        e.preventDefault(), h.ModalManager.close(), new l.BannerEventWamEvent({
                            bannerType: y.BANNER_TYPES.CROSS_SELL_PROFILE_INTERSTITIAL,
                            bannerOperation: v.BANNER_OPERATIONS.CLICK
                        }).commit(), self.setTimeout((() => h.ModalManager.open(M.default.createElement(g.SmbAppUpsellModal, null))), 200)
                    },
                    className: (0, w.default)(_)
                }, C.fbt._("Learn about getting the app", null, {
                    hk: "3ncguo"
                })))))
            }
            P.displayName = "BusinessInfoWithUpsellModal"
        },
        945270: (e, t, n) => {
            "use strict";
            var a = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.SmbAppUpsellModal = E, t.WHATSAPP_BUSINESS_URL = void 0;
            var l = n(240045),
                r = a(n(196554)),
                o = n(103440),
                i = n(305521),
                u = n(753233),
                s = a(n(395767)),
                c = n(114850),
                d = a(n(345257)),
                f = n(493885),
                p = n(403602),
                m = n(548360),
                h = a(n(667294));
            const g = "https://www.whatsapp.com/business";

            function E() {
                return h.default.createElement(o.ConfirmPopup, {
                    title: m.fbt._("WhatsApp Business app", null, {
                        hk: "4BfvOl"
                    }),
                    onOK: () => {
                        new l.BannerEventWamEvent({
                            bannerType: p.BANNER_TYPES.CROSS_SELL_PROFILE_INTERSTITIAL,
                            bannerOperation: f.BANNER_OPERATIONS.DISMISS
                        }).commit(), c.ModalManager.close()
                    },
                    okText: (0, s.default)("Close")
                }, h.default.createElement(d.default, null), h.default.createElement("p", null, h.default.createElement(i.EmojiText, {
                    text: m.fbt._("If you're a business, you can benefit from switching to the free WhatsApp Business app. It has tools to connect with customers and manage messages.", null, {
                        hk: "2SAIXH"
                    })
                })), h.default.createElement("br", null), h.default.createElement("p", null, h.default.createElement(i.EmojiText, {
                    text: m.fbt._("Scan this code to get the WhatsApp Business App. Or, you can install it from the App Store or Google Play Store.", null, {
                        hk: "2840mD"
                    })
                }), " ", h.default.createElement(r.default, {
                    href: g,
                    onClick: e => {
                        e.preventDefault(), c.ModalManager.close(), self.setTimeout((() => (0, u.openExternalLink)(g)), 10)
                    }
                }, m.fbt._("Learn more", null, {
                    hk: "1rcCLt"
                }))))
            }
            t.WHATSAPP_BUSINESS_URL = g, E.displayName = "SmbAppUpsellModal"
        },
        345257: (e, t, n) => {
            "use strict";
            var a = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = p;
            var l = n(690495),
                r = n(914368),
                o = n(647781),
                i = n(667738),
                u = n(676345),
                s = function(e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || "object" != typeof e && "function" != typeof e) return {
                        default: e
                    };
                    var n = d(t);
                    if (n && n.has(e)) return n.get(e);
                    var a = {},
                        l = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var r in e)
                        if ("default" !== r && Object.prototype.hasOwnProperty.call(e, r)) {
                            var o = l ? Object.getOwnPropertyDescriptor(e, r) : null;
                            o && (o.get || o.set) ? Object.defineProperty(a, r, o) : a[r] = e[r]
                        }
                    a.default = e, n && n.set(e, a);
                    return a
                }(n(667294)),
                c = a(n(156720));

            function d(e) {
                if ("function" != typeof WeakMap) return null;
                var t = new WeakMap,
                    n = new WeakMap;
                return (d = function(e) {
                    return e ? n : t
                })(e)
            }
            const f = {
                code: {
                    position: "g0rxnol2"
                },
                codeDarkMode: {
                    backgroundColor: "rfib67n1",
                    borderTopStartRadius: "boajuire",
                    borderTopEndRadius: "o93wvyfv",
                    borderBottomEndRadius: "i5w8n1e6",
                    borderBottomStartRadius: "cnpay6qi"
                },
                codeLogo: {
                    position: "lhggkp7q",
                    top: "myeiuhv9",
                    start: "m7kgcvyw",
                    zIndex: "b9fczbqn",
                    width: "tddarlmj",
                    height: "jbxl65f1",
                    color: "ep2u7qgo",
                    userSelect: "rkxvyd19",
                    transform: "qk2y3tb3"
                }
            };

            function p() {
                const {
                    theme: e
                } = (0, s.useContext)(i.ThemeContext);
                return s.default.createElement(l.FlexRow, {
                    align: "center",
                    justify: "center",
                    xstyle: u.uiMargin.vert15
                }, s.default.createElement(o.WAWebQRCode, {
                    data: "https://www.whatsapp.com/business/download",
                    colorDark: "#122e31",
                    size: r.QR_EDGE / 2
                }, (t => s.default.createElement("div", {
                    ref: t,
                    className: (0, c.default)("dark" === e && f.codeDarkMode, f.code, u.uiPadding.all12)
                }, s.default.createElement(m, {
                    theme: e
                })))))
            }

            function m() {
                return s.default.createElement("div", {
                    className: (0, c.default)(f.codeLogo)
                }, s.default.createElement("svg", {
                    width: "100%",
                    viewBox: "0 0 64 64",
                    xmlns: "http://www.w3.org/2000/svg"
                }, s.default.createElement("path", {
                    fill: "#FFF",
                    d: "M6.525 43.936a29.596 29.596 0 0 1-3.039-13.075C3.494 14.568 16.755 1.313 33.05 1.313c7.904.004 15.328 3.082 20.91 8.666 5.581 5.586 8.653 13.01 8.65 20.907-.007 16.294-13.266 29.549-29.558 29.549a29.648 29.648 0 0 1-12.508-2.771L1.391 62.687l5.134-18.751z"
                }), s.default.createElement("g", {
                    transform: "translate(8 6)"
                }, s.default.createElement("path", {
                    d: "M42.6776 42.6779C37.9558 47.3997 31.6777 50.0001 24.9999 50.0001C21.0047 50.0001 17.0541 49.0389 13.5244 47.2141L0.601068 49.3339L2.72832 36.3645C0.941278 32.8647 0 28.9525 0 25.0001C0 18.3223 2.60042 12.0443 7.32229 7.32237C12.0442 2.6005 18.3221 0 24.9999 0C31.6777 0 37.9558 2.6005 42.6776 7.32237C47.3995 12.0443 50 18.3223 50 25.0001C50 31.678 47.3995 37.9558 42.6776 42.6779ZM24.9999 4.33778C13.6067 4.33778 4.33772 13.607 4.33772 25.0001C4.33772 28.4792 5.21935 31.9192 6.8868 34.9487L7.24853 35.6054L5.85915 44.0756L14.2959 42.6918L14.9565 43.0601C18.0107 44.7624 21.4837 45.6622 24.9999 45.6622C36.3932 45.6622 45.6622 36.3933 45.6622 25.0001C45.6622 13.607 36.3932 4.33778 24.9999 4.33778ZM31.1133 24.3614C32.4522 24.9804 34.1536 26.3725 34.1208 29.3117C34.0749 33.4266 31.2191 35.6542 27.2744 35.6542H19.4594H18.3042C17.5079 35.6542 16.8645 35.0053 16.8713 34.2092L17.0344 15.0573C17.041 14.2714 17.6794 13.6377 18.4652 13.6366L27.1493 13.6256C31.4651 13.6256 33.9598 16.039 33.9177 19.8134C33.8903 22.2579 32.2484 23.8355 31.1133 24.3614ZM26.766 17.4622H21.3643L21.3076 22.5361H26.7093C28.5347 22.5361 29.5672 21.5152 29.584 19.9992C29.6009 18.4831 28.5915 17.4622 26.766 17.4622ZM26.9444 26.4035H21.2643L21.2038 31.8178H26.884C28.8333 31.8178 29.7752 30.5802 29.792 29.0952C29.8085 27.6101 28.8939 26.4035 26.9444 26.4035Z",
                    fill: "#123033"
                }))))
            }
            p.displayName = "SMBUpsellQRCode"
        },
        314810: (e, t, n) => {
            "use strict";
            var a = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = u;
            var l = n(822652),
                r = a(n(667294)),
                o = n(655241);
            const i = (0, l.ContactFactory)();

            function u(e) {
                const {
                    active: t,
                    contact: n,
                    onClick: a,
                    contextMenu: l,
                    isPendingParticipant: u = !1,
                    contextEnabled: s,
                    onContext: c,
                    theme: d,
                    showStatusRingAroundProfilePhoto: f,
                    participantCollection: p,
                    elevatedPushNamesEnabled: m
                } = e, h = (0, o.useModelValues)(e.participant, ["isAdmin"]);
                return r.default.createElement(i, {
                    active: t,
                    contact: n,
                    admin: h.isAdmin,
                    onClick: u ? c : a,
                    theme: d || "drawer-list",
                    contextEnabled: () => null != s && s(n),
                    contextMenu: l,
                    onContext: e => null == c ? void 0 : c(e, n),
                    isPendingParticipant: u,
                    showNotifyName: !0,
                    elevatedPushNamesEnabled: m,
                    waitIdle: !0,
                    showStatusRingAroundProfilePhoto: f,
                    participantCollection: p
                })
            }
            u.displayName = "Participant"
        },
        321574: (e, t, n) => {
            "use strict";
            var a = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = E;
            var l = a(n(967154)),
                r = a(n(506479)),
                o = n(163755),
                i = n(217714),
                u = a(n(101760)),
                s = a(n(443461)),
                c = n(548360),
                d = function(e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || "object" != typeof e && "function" != typeof e) return {
                        default: e
                    };
                    var n = g(t);
                    if (n && n.has(e)) return n.get(e);
                    var a = {},
                        l = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var r in e)
                        if ("default" !== r && Object.prototype.hasOwnProperty.call(e, r)) {
                            var o = l ? Object.getOwnPropertyDescriptor(e, r) : null;
                            o && (o.get || o.set) ? Object.defineProperty(a, r, o) : a[r] = e[r]
                        }
                    a.default = e, n && n.set(e, a);
                    return a
                }(n(667294)),
                f = a(n(637660)),
                p = n(808446),
                m = a(n(940630));
            const h = ["docMsgs", "chat", "isFilterEnabled", "filterText"];

            function g(e) {
                if ("function" != typeof WeakMap) return null;
                var t = new WeakMap,
                    n = new WeakMap;
                return (g = function(e) {
                    return e ? n : t
                })(e)
            }

            function E(e) {
                const {
                    docMsgs: t,
                    chat: n,
                    isFilterEnabled: a = !1,
                    filterText: g
                } = e, E = (0, r.default)(e, h), b = (0, m.default)(), v = (0, f.default)((() => new s.default((e => {
                    const t = [],
                        n = (0, o.getText)(e);
                    null != n && t.push(n);
                    const a = e.mediaData.filename;
                    return t.push(a), t.join(" ")
                }))));
                (0, p.useListener)(t, "add", (e => {
                    a && v.current.cacheMessageTokens(e)
                })), (0, p.useListener)(t, "remove", (e => {
                    a && v.current.removeMessageTokensFromCache(e)
                })), (0, p.useListener)(t, "reset", (() => {
                    a && v.current.clearTokensCache()
                })), (0, d.useEffect)((() => {
                    a && t.forEach((e => {
                        v.current.cacheMessageTokens(e)
                    }))
                }), [t, v, a]);
                const y = a ? (e, t) => v.current.filter(e, g, t) : void 0;
                return d.default.createElement(d.default.Fragment, null, d.default.createElement(u.default, (0, l.default)({
                    testid: "doc-gallery",
                    msgsCollection: t,
                    msgsCollectionUpdateEvents: ["add", "remove", "reset", "query_doc_before"],
                    queryCollection: e => {
                        t.hasDocBefore && b((() => {
                            t.queryDocs(n, e)
                        }))
                    },
                    getHasBefore: () => t.hasDocBefore,
                    getQueryBefore: () => t.queryDocBefore,
                    emptyText: c.fbt._("No Docs", null, {
                        hk: "1MvZZl"
                    }),
                    chat: n,
                    filterMessages: y
                }, E)), d.default.createElement(i.HistorySyncGalleryPlaceholder, {
                    chat: n
                }))
            }
            E.displayName = "DocGallery"
        },
        671597: (e, t, n) => {
            "use strict";
            var a = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = M;
            var l = a(n(967154)),
                r = a(n(506479)),
                o = n(356097),
                i = n(163755),
                u = n(217714),
                s = a(n(318787)),
                c = a(n(101760)),
                d = n(787742),
                f = n(44118),
                p = a(n(443461)),
                m = a(n(565644)),
                h = n(548360),
                g = function(e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || "object" != typeof e && "function" != typeof e) return {
                        default: e
                    };
                    var n = C(t);
                    if (n && n.has(e)) return n.get(e);
                    var a = {},
                        l = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var r in e)
                        if ("default" !== r && Object.prototype.hasOwnProperty.call(e, r)) {
                            var o = l ? Object.getOwnPropertyDescriptor(e, r) : null;
                            o && (o.get || o.set) ? Object.defineProperty(a, r, o) : a[r] = e[r]
                        }
                    a.default = e, n && n.set(e, a);
                    return a
                }(n(667294)),
                E = a(n(637660)),
                b = n(808446),
                v = a(n(940630));
            const y = ["linkMsgs", "chat", "filterText", "isFilterEnabled"];

            function C(e) {
                if ("function" != typeof WeakMap) return null;
                var t = new WeakMap,
                    n = new WeakMap;
                return (C = function(e) {
                    return e ? n : t
                })(e)
            }

            function M(e) {
                const {
                    linkMsgs: t,
                    chat: n,
                    selectedMessages: a,
                    selectable: C,
                    onMessageSelect: M,
                    isFilterEnabled: w = !1,
                    filterText: k
                } = e, S = (0, v.default)(), _ = (0, E.default)((() => new p.default((e => (0, i.getText)(e)))));
                (0, b.useListener)(t, "add", (e => {
                    w && _.current.cacheMessageTokens(e)
                })), (0, b.useListener)(t, "remove", (e => {
                    _.current.removeMessageTokensFromCache(e)
                })), (0, b.useListener)(t, "reset", (() => {
                    w && _.current.clearTokensCache()
                })), (0, g.useEffect)((() => {
                    w && t.forEach((e => {
                        _.current.cacheMessageTokens(e)
                    }))
                }), [t, _, w]), (0, b.useListener)(n.msgs, "add bulk_add", (e => {
                    if (!e) return;
                    const n = [],
                        a = Array.isArray(e) ? e : [e];
                    Promise.all(a.map((e => ((0, f.getLinksFromMsg)(e).length && n.push(e), Promise.resolve())))).then((() => {
                        n.length && t.add(n)
                    }))
                }));
                const P = w ? (e, t) => _.current.filter(e, k, t) : void 0,
                    {
                        linkMsgs: O,
                        chat: I,
                        filterText: N,
                        isFilterEnabled: T
                    } = e,
                    A = (0, r.default)(e, y);
                return g.default.createElement(g.default.Fragment, null, g.default.createElement(c.default, (0, l.default)({
                    testid: "link-gallery",
                    msgsCollection: t,
                    msgsCollectionUpdateEvents: ["add", "remove", "reset", "query_doc_before"],
                    queryCollection: e => {
                        t.hasLinkBefore && S((() => {
                            t.queryLinks(n, e)
                        }))
                    },
                    getHasBefore: () => t.hasLinkBefore,
                    getQueryBefore: () => t.queryLinkBefore,
                    messageElements: (e, t) => ((e, t, n, a, l) => {
                        const r = [];
                        return e.forEach((e => {
                            const i = !(0, d.getIsSentByMe)(e) && (0, d.getIsGroupMsg)(e);
                            let u = null;
                            (0, d.getLinkPreview)(e) && (u = g.default.createElement(m.default, {
                                testid: "link-gallery-msg",
                                key: e.id.toString(),
                                msg: e,
                                selectable: n,
                                selectedMessages: l,
                                onMessageSelect: a,
                                displayType: o.DISPLAY_TYPE.GALLERY_LINKS,
                                onClickMsg: t
                            })), (0, f.getGalleryLinks)(e).forEach(((o, c) => {
                                o.href === e.matchedText && null != u || r.push(g.default.createElement(s.default, {
                                    testid: "link-gallery-msg",
                                    key: `${e.id.toString()}-${c}`,
                                    msg: e.safe(),
                                    link: o,
                                    displayAuthor: i,
                                    selectable: n,
                                    selectedMessages: l,
                                    onMessageSelect: a,
                                    onClickMsg: t
                                }))
                            })), null != u && r.push(u)
                        })), r.reverse(), r
                    })(e, t, C, M, a),
                    emptyText: h.fbt._("No Links", null, {
                        hk: "rFshX"
                    }),
                    chat: n,
                    filterMessages: P
                }, A)), g.default.createElement(u.HistorySyncGalleryPlaceholder, {
                    chat: e.chat
                }))
            }
            M.displayName = "LinkGallery"
        },
        318787: (e, t, n) => {
            "use strict";
            var a = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = _;
            var l = n(751349),
                r = n(396574),
                o = n(356097),
                i = n(305521),
                u = n(675886),
                s = n(163755),
                c = a(n(296518)),
                d = a(n(932325)),
                f = a(n(663945)),
                p = a(n(428543)),
                m = a(n(456794)),
                h = a(n(6323)),
                g = n(787742),
                E = n(44118),
                b = n(435711),
                v = n(527530),
                y = a(n(844453)),
                C = n(512873),
                M = function(e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || "object" != typeof e && "function" != typeof e) return {
                        default: e
                    };
                    var n = S(t);
                    if (n && n.has(e)) return n.get(e);
                    var a = {},
                        l = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var r in e)
                        if ("default" !== r && Object.prototype.hasOwnProperty.call(e, r)) {
                            var o = l ? Object.getOwnPropertyDescriptor(e, r) : null;
                            o && (o.get || o.set) ? Object.defineProperty(a, r, o) : a[r] = e[r]
                        }
                    a.default = e, n && n.set(e, a);
                    return a
                }(n(667294)),
                w = n(808446),
                k = n(871210);

            function S(e) {
                if ("function" != typeof WeakMap) return null;
                var t = new WeakMap,
                    n = new WeakMap;
                return (S = function(e) {
                    return e ? n : t
                })(e)
            }

            function _(e) {
                const {
                    msg: t,
                    link: n,
                    displayAuthor: a,
                    selectedMessages: S,
                    onMessageSelect: _,
                    onClickMsg: P,
                    testid: O
                } = e, [I, N, T, A, x, L, D, R, B, j, W, F] = (0, k.useMsgValues)(e.msg.id, [g.getBody, g.getCaption, s.getDir, g.getId, g.getIsSentByMe, s.getMediaData, g.getType, s.getRtl, s.getSenderObj, g.getStar, s.getAsRevoked, g.getIsKept]), [G, H] = (0, M.useState)(!1), [V, U] = (0, M.useState)((() => S.isSelected(t.unsafe())));
                (0, w.useListener)(S, A.toString(), (e => {
                    V !== e && U(e)
                }));
                const z = !0 === e.selectable || G ? M.default.createElement(h.default, {
                        checked: V,
                        onClick: e => {
                            e && e.stopPropagation(), _(t.unsafe(), !V)
                        },
                        msgTheme: "gallery"
                    }) : null,
                    q = (0, u.Conversation)({
                        mentions: t.mentionMap(),
                        groupMentions: t.groupMentionMap(),
                        links: (0, E.getLinksFromMsg)(t.unsafe()),
                        phoneNumbers: (0, v.getPhoneNumbersFromMsg)(t.unsafe()),
                        selectable: true,
                        trusted: (0, b.isTrusted)(t.unsafe()),
                        fromMe: A.fromMe,
                        fromChatWid: A.remote
                    }),
                    Y = I && I.includes(n.url) ? I : N,
                    K = a ? M.default.createElement("div", {
                        className: f.default.author
                    }, M.default.createElement(m.default, {
                        msg: t,
                        contact: B
                    })) : null,
                    Z = (0, E.getSuspiciousLinks)(t.unsafe()).length > 0;
                return M.default.createElement(c.default, {
                    hover: G,
                    onClick: () => {
                        P(t.unsafe(), !V)
                    },
                    onMouseEnter: G ? null : () => {
                        G || H(!0)
                    },
                    onMouseOver: G ? null : () => {
                        G || H(!0)
                    },
                    onMouseLeave: G ? () => {
                        G && H(!1)
                    } : null,
                    testid: O
                }, M.default.createElement("div", {
                    className: f.default.msg
                }, M.default.createElement(y.default, {
                    transitionName: "delay-leave"
                }, z), M.default.createElement(C.MessageContainer, {
                    isSentByMe: x
                }, M.default.createElement("div", {
                    className: (0, r.classnamesConvertMeToStylexPlease)({
                        [f.default.hasAuthor]: a,
                        [f.default.hasSuspiciousLinks]: Z,
                        [f.default.bubble]: !0
                    })
                }, K, M.default.createElement(l.SuspiciousLabel, {
                    link: n,
                    displayType: o.DISPLAY_TYPE.GALLERY
                }), M.default.createElement(p.default, {
                    title: n.url,
                    isSentByMe: x,
                    canonicalUrl: n.domain,
                    displayType: o.DISPLAY_TYPE.GALLERY,
                    star: j,
                    kept: F,
                    isLoading: !1
                }), M.default.createElement(i.EmojiText, {
                    text: Y,
                    selectable: true,
                    className: f.default.text,
                    dirMismatch: R !== d.default.isRTL(),
                    direction: T,
                    formatters: q
                })))))
            }
            _.displayName = "LinkMsg"
        },
        101760: (e, t, n) => {
            "use strict";
            var a = n(530066).default,
                l = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = _;
            var r = l(n(348926)),
                o = n(898817),
                i = n(713105),
                u = n(780549),
                s = n(356097),
                c = n(811720),
                d = l(n(495012)),
                f = n(914368),
                p = n(163755),
                m = l(n(565644)),
                h = n(163139),
                g = function(e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || "object" != typeof e && "function" != typeof e) return {
                        default: e
                    };
                    var n = k(t);
                    if (n && n.has(e)) return n.get(e);
                    var a = {},
                        l = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var r in e)
                        if ("default" !== r && Object.prototype.hasOwnProperty.call(e, r)) {
                            var o = l ? Object.getOwnPropertyDescriptor(e, r) : null;
                            o && (o.get || o.set) ? Object.defineProperty(a, r, o) : a[r] = e[r]
                        }
                    a.default = e, n && n.set(e, a);
                    return a
                }(n(667294)),
                E = l(n(156720)),
                b = l(n(969651)),
                v = n(808446),
                y = l(n(695841)),
                C = l(n(38085)),
                M = l(n(286481)),
                w = l(n(895851));

            function k(e) {
                if ("function" != typeof WeakMap) return null;
                var t = new WeakMap,
                    n = new WeakMap;
                return (k = function(e) {
                    return e ? n : t
                })(e)
            }
            const S = {
                display: "p357zi0d",
                flexDirection: "f8m0rgwh",
                overflowX: "gfz4du6o",
                overflowY: "rpvcun8f",
                flexGrow: "ggj6brxn"
            };

            function _(e) {
                const {
                    getHasBefore: t,
                    getQueryBefore: n,
                    msgsCollection: l,
                    msgsCollectionUpdateEvents: k,
                    emptyText: _,
                    scrollOffset: P = 0,
                    selectable: O,
                    onMessageSelect: I,
                    queryCollection: N,
                    selectedMessages: T,
                    messageElements: A,
                    onProductDetail: x,
                    setScrollOffset: L,
                    filterMessages: D,
                    testid: R
                } = e, B = t(), j = n(), W = (0, g.useRef)(null), F = (0, w.default)(), G = (0, M.default)((e => {
                    B && N(e)
                }), 100), [H, V] = (0, g.useState)((() => l.toArray())), U = (0, M.default)((e => {
                    const t = e.scrollHeight - e.clientHeight - e.scrollTop;
                    B && t < f.SCROLL_FUDGE && G(l.head()), L && L(e.scrollTop)
                }), 100);
                (0, g.useEffect)((() => {
                    B && G();
                    const e = W.current;
                    return e && (e.scrollTop = P), () => {
                        U.cancel()
                    }
                }), []);
                const z = (e, t) => {
                        const n = (0, h.unproxy)(e);
                        !0 === O && void 0 !== t ? I(n, t) : u.Cmd.openChatAt((0, p.getChat)(n), (0, i.getSearchContext)((0, p.getChat)(n), n))
                    },
                    q = (0, g.useRef)(),
                    Y = (0, b.default)(),
                    K = (0, g.useCallback)(function() {
                        var e = (0, r.default)((function*(e) {
                            var t;
                            if (null === (t = q.current) || void 0 === t || t.abort(), null == e) return V(l.toArray()), void Y();
                            q.current = new a;
                            const n = q.current.signal;
                            try {
                                const t = yield e(l, n);
                                n.aborted || F.aborted || (V(t), Y())
                            } catch (e) {
                                if (e.name !== o.ABORT_ERROR) throw e
                            }
                        }));
                        return function() {
                            return e.apply(this, arguments)
                        }
                    }(), [l, Y, F]);
                (0, v.useListener)(l, k, (() => K(D))), (0, g.useEffect)((() => (K(D), () => {
                    var e;
                    return null === (e = q.current) || void 0 === e ? void 0 : e.abort()
                })), [K, D]);
                const [Z, {
                    height: X
                }] = (0, y.default)(), Q = (0, C.default)(Z, W);
                (0, g.useEffect)((() => {
                    null != D && t() && !n() && null != W.current && W.current.scrollHeight < X + f.SCROLL_FUDGE && G(l.head())
                }));
                let $ = null;
                if ($ = A ? A(H, z) : H.map(((e, t) => g.default.createElement(m.default, {
                        key: `${e.id.toString()}_${t}`,
                        msg: e,
                        selectable: O,
                        selectedMessages: T,
                        onMessageSelect: I,
                        displayType: s.DISPLAY_TYPE.GALLERY,
                        onClickMsg: z,
                        onProductClick: x
                    }))).reverse(), j) {
                    if (0 === $.length) return g.default.createElement(c.Loading, null);
                    $.push(g.default.createElement(d.default, {
                        key: -1
                    }))
                }
                return 0 !== $.length || j || B ? g.default.createElement("div", {
                    ref: Q,
                    onScroll: e => {
                        U(e.currentTarget)
                    },
                    className: (0, E.default)(S)
                }, $) : g.default.createElement(c.Empty, {
                    text: _,
                    testid: "no-elements"
                })
            }
            _.displayName = "MessageGallery"
        },
        285192: (e, t, n) => {
            "use strict";
            var a = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = f;
            var l = a(n(967154)),
                r = a(n(506479)),
                o = n(217714),
                i = a(n(101760)),
                u = n(548360),
                s = a(n(667294)),
                c = a(n(940630));
            const d = ["productMsgs", "chat"];

            function f(e) {
                const {
                    productMsgs: t,
                    chat: n
                } = e, a = (0, r.default)(e, d), f = (0, c.default)();
                return s.default.createElement(s.default.Fragment, null, s.default.createElement(i.default, (0, l.default)({
                    msgsCollection: t,
                    msgsCollectionUpdateEvents: ["add", "remove", "reset", "products_loaded"],
                    queryCollection: e => f((() => {
                        t.queryProducts(n, e)
                    })),
                    getHasBefore: () => t.hasProductBefore,
                    getQueryBefore: () => t.hasProductBefore ? Promise.resolve() : null,
                    emptyText: u.fbt._("No products", null, {
                        hk: "8o7dB"
                    }),
                    chat: n
                }, a)), s.default.createElement(o.HistorySyncGalleryPlaceholder, {
                    chat: n
                }))
            }
            f.displayName = "ProductGallery"
        },
        153316: (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.getGeneralChatParticipantListText = function(e) {
                return e ? a.fbt._("New community members will no longer be automatically added to this group because it is full.", null, {
                    hk: "4gQBxr"
                }) : a.fbt._("New community members will be automatically added to this group, until it is full.", null, {
                    hk: "2XFJsD"
                })
            };
            var a = n(548360)
        },
        495346: (e, t, n) => {
            "use strict";
            var a = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                let {
                    onEnd: t
                } = e;
                const [n, a] = (0, i.useFlow)(u.Chats, {
                    transitions: i.FlowTransitions.DrawerLeft,
                    onEnd: t
                });
                if (null == a.step) return null;
                let s;
                switch (a.step) {
                    case u.Chats:
                        s = o.default.createElement(l.default, {
                            settings: r.default,
                            onClose: () => {
                                a.pop()
                            }
                        })
                }
                return o.default.createElement(n, {
                    flow: a
                }, s)
            };
            var l = a(n(854534)),
                r = a(n(634152)),
                o = a(n(667294)),
                i = n(839062);
            const u = n(76672).Mirrored(["Chats"])
        },
        339257: (e, t, n) => {
            "use strict";
            var a = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.InfoFlow = void 0;
            var l = a(n(348926)),
                r = a(n(81109)),
                o = n(898817),
                i = n(418987),
                u = a(n(670983)),
                s = a(n(229922)),
                c = n(72696),
                d = a(n(55423)),
                f = a(n(791865)),
                p = n(374660),
                m = n(780549),
                h = n(927531),
                g = n(473735),
                E = n(260854),
                b = n(355734),
                v = n(355351),
                y = n(103440),
                C = a(n(655237)),
                M = n(834110),
                w = a(n(41493)),
                k = n(568550),
                S = n(900316),
                _ = a(n(365889)),
                P = a(n(649391)),
                O = a(n(395767)),
                I = a(n(941943)),
                N = n(408256),
                T = n(393609),
                A = a(n(596090)),
                x = n(113269),
                L = a(n(422325)),
                D = n(147550),
                R = a(n(302112)),
                B = n(306472),
                j = n(114850),
                W = a(n(550506)),
                F = n(608637),
                G = a(n(720406)),
                H = a(n(58880)),
                V = n(73225),
                U = a(n(751046)),
                z = n(18966),
                q = a(n(660508)),
                Y = a(n(245272)),
                K = a(n(78668)),
                Z = a(n(250940)),
                X = n(95589),
                Q = a(n(386067)),
                $ = n(932523),
                J = n(77548),
                ee = a(n(614058)),
                te = a(n(632289)),
                ne = n(559016),
                ae = a(n(898707)),
                le = n(242677),
                re = a(n(559893)),
                oe = n(977575),
                ie = n(316348),
                ue = n(555622),
                se = n(126592),
                ce = a(n(979588)),
                de = n(470824),
                fe = n(111971),
                pe = n(238669),
                me = n(377773),
                he = a(n(804477)),
                ge = n(684259),
                Ee = n(455915),
                be = n(836507),
                ve = n(901952),
                ye = n(298187),
                Ce = a(n(556869)),
                Me = n(548360),
                we = function(e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || "object" != typeof e && "function" != typeof e) return {
                        default: e
                    };
                    var n = Pe(t);
                    if (n && n.has(e)) return n.get(e);
                    var a = {},
                        l = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var r in e)
                        if ("default" !== r && Object.prototype.hasOwnProperty.call(e, r)) {
                            var o = l ? Object.getOwnPropertyDescriptor(e, r) : null;
                            o && (o.get || o.set) ? Object.defineProperty(a, r, o) : a[r] = e[r]
                        }
                    a.default = e, n && n.set(e, a);
                    return a
                }(n(667294)),
                ke = n(839062),
                Se = a(n(17533)),
                _e = a(n(895851));

            function Pe(e) {
                if ("function" != typeof WeakMap) return null;
                var t = new WeakMap,
                    n = new WeakMap;
                return (Pe = function(e) {
                    return e ? n : t
                })(e)
            }
            const Oe = D.InfoFlowStep,
                Ie = e => {
                    var t;
                    if (e.isGroup) return Oe.GroupInfo;
                    if (e.isBroadcast) return Oe.BroadcastInfo;
                    if (e.isUser) return Oe.ContactInfo;
                    if (e.isNewsletter) return Oe.NewsletterInfo;
                    const n = null !== (t = e.kind) && void 0 !== t ? t : "undefined";
                    throw (0, Ce.default)(`Invalid chat provided of kind ${n}`)
                },
                Ne = (0, we.forwardRef)(((e, t) => {
                    var n;
                    const {
                        chat: a,
                        initialStep: D = Ie(a),
                        showFullGroupDescription: Ce,
                        scrollToParticipantList: Pe,
                        profileEntryPoint: Ne,
                        onEnd: Te,
                        displayName: Ae,
                        sourceGroupChatOrNewsletter: xe,
                        focusNewsletterDescriptionOnMount: Le,
                        newsletterLinkShareScreenEntryPoint: De
                    } = e, Re = (0, we.useRef)(0), Be = (0, Se.default)((e => {
                        Re.current = e
                    })), je = (0, we.useRef)(void 0), We = z.AlertScreen.MULTIPLE_ALERTS_LIST_SCREEN, Fe = (0, we.useContext)(k.DrawerContext), [Ge, He] = (0, ke.useFlow)(D, {
                        transitions: ke.FlowTransitions.DrawerRight,
                        onEnd: Te
                    }), Ve = (0, we.useRef)(new F.NewsletterAdminFunnelLogger(ge.ADMIN_FLOW_TYPE.EDIT)), Ue = (0, we.useRef)(De), [ze, qe] = (0, we.useState)(null), [Ye, Ke] = (0, we.useState)(void 0), [Ze, Xe] = (0, we.useState)(null), [Qe, $e] = (0, we.useState)(null), [Je, et] = (0, we.useState)(null), [tt, nt] = (0, we.useState)(null), [at, lt] = (0, we.useState)(null);
                    (0, we.useEffect)((() => {
                        if (a.isGroup)(0, x.queryAndUpdateGroupMetadataById)(a.id, "interactive");
                        else if (a.isUser) a.contact.isBusiness && (0, c.canSeeBizProfileV3)() && S.DrawerManager.setDrawerContext("right", (0, $.buildProductCatalogContext)(new le.ProductCatalogSession, (0, M.getMaybeBizPlatformForLogging)(a.contact.id.toString()), Ee.CATALOG_ENTRY_POINT.CATALOG_ENTRY_POINT_PROFILE));
                        else if (a.isNewsletter) {
                            var e;
                            (0, se.queryAndUpdateNewsletterMetadataAction)((0, i.toNewsletterJid)(a.id.toString()), {
                                fields: (0, r.default)({
                                    name: !0,
                                    picture: !0,
                                    description: !0,
                                    inviteLink: !0,
                                    handle: !0,
                                    subscribers: !0,
                                    privacy: !0,
                                    verification: !0,
                                    state: !0
                                }, !(null === (e = a.newsletterMetadata) || void 0 === e ? void 0 : e.isPreview) && {
                                    muted: !0,
                                    membership: !0
                                })
                            })
                        }
                    }), []);
                    const rt = (e, t) => {
                            qe(e), Ke(t), He.push(Oe.ProductDetail)
                        },
                        ot = e => {
                            Xe(e), He.push(Oe.ProductCollection)
                        },
                        it = e => {
                            qe(e), He.push(Oe.ProductLink)
                        },
                        ut = e => {
                            qe(e), He.push(Oe.ProductInfo)
                        },
                        st = (e, t) => {
                            $e(e), et(t), He.push(Oe.CatalogLink)
                        },
                        ct = e => {
                            const t = (0, $.getProductCatalogContext)(Fe);
                            (0, d.default)(e, a, t) && (nt(e), He.push(Oe.Cart))
                        },
                        dt = (e, t) => {
                            const n = a.id;
                            ue.QPL.markerStart(ie.QuickLogMarkerId.WHATSAPP_CATALOG_COLLECTIONS_VIEW, {
                                annotations: {
                                    string: {
                                        EntryPoint: t
                                    }
                                }
                            }), (0, J.logCarouselViewMoreClick)({
                                catalogOwnerWid: n,
                                catalogContext: e
                            }), He.push(Oe.Catalog)
                        },
                        ft = () => {
                            j.ModalManager.open(we.default.createElement(y.ConfirmPopup, {
                                onOK: () => j.ModalManager.close(),
                                okText: (0, O.default)("OK")
                            }, Me.fbt._("Only admins can edit this group's info", null, {
                                hk: "1a2ztg"
                            })))
                        },
                        pt = (0, _e.default)(),
                        mt = function() {
                            var t = (0, l.default)((function*(t) {
                                yield(0, s.default)((0, de.setGroupSubject)(e.chat, t), pt).catch((0, o.catchAbort)((() => {}))).catch((() => {
                                    __LOG__(3)
                                    `name_group_modal:onSetSubject failed`
                                })), j.ModalManager.close(), He.push(Oe.GroupInviteLink)
                            }));
                            return function() {
                                return t.apply(this, arguments)
                            }
                        }(),
                        ht = () => {
                            var e;
                            if ((0, p.isInviteGrowthLockedGroup)(a)) {
                                var t;
                                const e = !!(null === (t = a.groupMetadata) || void 0 === t ? void 0 : t.participants.iAmAdmin());
                                (0, T.openGrowthLockedModal)(e, !0)
                            } else if (null === (e = a.groupMetadata) || void 0 === e ? void 0 : e.isUnnamed) {
                                var n, l;
                                const e = Me.fbt._("This group was created without a name. Give it a name to share the group link.", null, {
                                    hk: "1uQedr"
                                });
                                j.ModalManager.open(we.default.createElement(W.default, {
                                    chat: a,
                                    subtext: e,
                                    onCancel: () => j.ModalManager.close(),
                                    onOK: mt,
                                    editable: null === (n = a.groupMetadata) || void 0 === n ? void 0 : n.canSetSubject(),
                                    editRestrictionInfo: (null === (l = a.groupMetadata) || void 0 === l ? void 0 : l.restrict) ? ft : void 0
                                }))
                            } else He.push(Oe.GroupInviteLink)
                        },
                        gt = e => {
                            et(e || a.contact), He.push(Oe.Verification)
                        },
                        Et = () => {
                            (0, me.shouldShowNUX)(X.NUX.EPHEMERAL) ? j.ModalManager.open(we.default.createElement(P.default, {
                                chat: a,
                                fromMe: !0,
                                onOk: () => He.push(Oe.Ephemeral)
                            })): He.push(Oe.Ephemeral)
                        },
                        bt = () => {
                            var e;
                            const t = null === (e = a.groupMetadata) || void 0 === e ? void 0 : e.parentGroup;
                            t && m.Cmd.openCommunityHome(t, !0)
                        },
                        vt = () => {
                            He.end(pe.DismissReason.LIFECYCLE)
                        },
                        yt = () => {
                            je.current = void 0, Re.current = 0, He.push(Oe.MediaGallery)
                        },
                        Ct = () => {
                            je.current = B.GalleryDrawerTabs.PRODUCTS, He.pop()
                        },
                        Mt = e => {
                            et(e), He.push(Oe.NewsletterTransferOwnership)
                        };
                    if (!He.step) return null;
                    const wt = null != xe ? xe : a;
                    let kt;
                    switch (He.step) {
                        case Oe.GroupInfo:
                            if ((0, p.isCommunityAnnouncementGroup)(wt) && !(0, p.isDeactivatedCommunityAnnouncementGroup)(wt) && (null === (n = wt.groupMetadata) || void 0 === n ? void 0 : n.participants.iAmMember())) {
                                var St;
                                const e = null === (St = wt.groupMetadata) || void 0 === St ? void 0 : St.parentGroup;
                                kt = we.default.createElement(E.CommunityFlowLoadable, {
                                    homeTheme: b.CommunityHomeTheme.TabbedInfo,
                                    initialStep: g.CommunityFlowStep.CommunityHome,
                                    initialTab: v.CommunityInfoTabs.Announcements,
                                    jid: e,
                                    onBack: () => He.pop()
                                })
                            } else kt = we.default.createElement(I.default, {
                                chat: wt,
                                showFullGroupDescription: Ce,
                                scrollToParticipantList: Pe,
                                groupMetadata: wt.groupMetadata,
                                contact: wt.contact,
                                profilePicThumb: wt.contact.getProfilePicThumb(),
                                onVerification: gt,
                                onStarred: () => He.push(Oe.Starred),
                                onKept: () => He.push(Oe.Kept),
                                onSentForAdminReview: () => He.push(Oe.SentForAdminReview),
                                onMediaGallery: yt,
                                onAdminSetting: () => He.push(Oe.GroupSettings),
                                onGroupInviteLink: ht,
                                onPendingParticipants: () => He.push(Oe.PendingParticipants),
                                onEphemeral: Et,
                                onCommunityClick: bt,
                                onClose: () => {
                                    xe ? He.end() : He.pop()
                                }
                            });
                            break;
                        case Oe.SentForAdminReview:
                            kt = we.default.createElement(ce.default, {
                                chat: a,
                                ref: t,
                                onClose: () => He.pop()
                            });
                            break;
                        case Oe.BroadcastInfo:
                            kt = we.default.createElement(f.default, {
                                chat: a,
                                contact: a.contact,
                                onStarred: () => He.push(Oe.Starred),
                                onMediaGallery: yt,
                                onClose: () => He.pop()
                            });
                            break;
                        case Oe.ContactInfo:
                            kt = we.default.createElement(C.default, {
                                contact: a.contact,
                                onVerification: gt,
                                onStarred: () => He.push(Oe.Starred),
                                onKept: () => He.push(Oe.Kept),
                                onMediaGallery: yt,
                                onProductCatalog: dt,
                                onProductDetail: rt,
                                onEphemeral: Et,
                                onClose: () => He.pop(),
                                profileEntryPoint: Ne,
                                onBack: xe ? () => {
                                    xe.isNewsletter ? He.push(Oe.NewsletterInfo) : He.push(Oe.GroupInfo)
                                } : null
                            });
                            break;
                        case Oe.NewsletterInfo:
                            (0, V.isNewsletterEnabled)() && (kt = we.default.createElement(U.default, {
                                chat: wt,
                                newsletterMetadata: wt.newsletterMetadata,
                                profilePicThumb: wt.contact.getProfilePicThumb(),
                                adminFunnelLogger: Ve.current,
                                onClose: () => {
                                    He.end()
                                },
                                onTransferNewsletterOwnership: () => He.push(Oe.NewsletterTransferOwnershipSelection),
                                onTransferOwnershipSelection: Mt,
                                onDeleteNewsletter: () => He.push(Oe.DeleteNewsletter),
                                onAdminCenter: () => He.push(Oe.NewsletterAdminCenter),
                                onSettings: () => He.push(Oe.NewsletterSettings),
                                onShareLink: () => {
                                    Ue.current = be.CHANNEL_LINK_SHARE_ENTRY_POINT.CHANNEL_INFO_PAGE, He.push(Oe.NewsletterLink)
                                },
                                onVerification: gt,
                                focusDescriptionOnMount: Le
                            }));
                            break;
                        case Oe.NewsletterSettings:
                            (0, V.isNewsletterReactionSettingsEnabled)() && (kt = we.default.createElement(Y.default, {
                                isFirstLevel: D === Oe.NewsletterSettings,
                                onBack: () => He.pop(),
                                newsletter: a,
                                adminFunnelLogger: Ve.current
                            }));
                            break;
                        case Oe.NewsletterLink:
                            (0, V.isNewsletterChannelLinkPageEnabled)(a) && (kt = we.default.createElement(q.default, {
                                entryPoint: Ue.current,
                                onClose: () => {
                                    He.end()
                                },
                                onBack: He.previousStep === Oe.NewsletterInfo ? () => He.pop() : null,
                                newsletter: a
                            }));
                            break;
                        case Oe.NewsletterTransferOwnershipSelection:
                            (0, V.isNewsletterTransferOwnershipEnabled)() && (kt = we.default.createElement(Z.default, {
                                chat: a,
                                onBack: () => He.pop(),
                                onTransferOwnershipSelection: Mt
                            }));
                            break;
                        case Oe.NewsletterTransferOwnership:
                            (0, V.isNewsletterTransferOwnershipEnabled)() && (kt = we.default.createElement(K.default, {
                                contact: Je,
                                chat: a,
                                onBack: () => He.pop()
                            }));
                            break;
                        case Oe.DeleteNewsletter:
                            kt = we.default.createElement(H.default, {
                                chat: a,
                                onBack: () => He.pop()
                            });
                            break;
                        case Oe.NewsletterAdminCenter:
                            kt = we.default.createElement(G.default, {
                                chat: a,
                                onBack: () => He.pop(),
                                alertScreen: We,
                                entryPoint: h.AlertEntryPoint.INFO_DRAWER
                            });
                            break;
                        case Oe.ProductDetail:
                            kt = we.default.createElement(ee.default, {
                                chat: a,
                                collectionId: Ye,
                                product: (0, u.default)(ze, "product"),
                                onEnd: vt,
                                onBack: Ct,
                                refreshCarousel: !1,
                                onProductLinkClick: it,
                                onProductMoreInformation: ut,
                                onCartClick: ct
                            });
                            break;
                        case Oe.ProductCollection:
                            {
                                const e = a.id;kt = we.default.createElement(oe.CollectionContentDrawer, {
                                    contact: a.contact,
                                    onProductDetail: rt,
                                    catalogId: e,
                                    onBack: () => He.pop(),
                                    onCatalogLinkClick: st,
                                    onCartClick: ct,
                                    collection: (0, u.default)(Ze, "collection")
                                });
                                break
                            }
                        case Oe.ProductLink:
                            kt = we.default.createElement(te.default, {
                                product: (0, u.default)(ze, "product"),
                                onBack: () => He.pop()
                            });
                            break;
                        case Oe.ProductInfo:
                            kt = we.default.createElement(ae.default, {
                                product: (0, u.default)(ze, "product"),
                                onBack: Ct
                            });
                            break;
                        case Oe.CatalogLink:
                            kt = we.default.createElement(Q.default, {
                                catalog: (0, u.default)(Qe, "catalog"),
                                contact: (0, u.default)(Je, "contact"),
                                onBack: () => He.pop()
                            });
                            break;
                        case Oe.Cart:
                            {
                                const e = (0, $.getProductCatalogContext)(Fe),
                                    t = (0, d.default)((0, u.default)(tt, "cartId"), a, e);kt = (0, u.default)(t, "cartFlow");
                                break
                            }
                        case Oe.Catalog:
                            kt = we.default.createElement(re.default, {
                                contact: a.contact,
                                onProductDetail: rt,
                                catalogId: a.id,
                                onBack: () => He.pop(),
                                businessProfile: a.contact.businessProfile,
                                onCatalogLinkClick: st,
                                onCartClick: ct,
                                onCollectionSeeAll: ot
                            });
                            break;
                        case Oe.ProductList:
                            kt = we.default.createElement(ne.ProductListDrawer, {
                                contact: a.contact,
                                onProductDetail: rt,
                                catalogId: a.id,
                                onBack: () => He.pop(),
                                businessProfile: a.contact.businessProfile,
                                onCatalogLinkClick: st,
                                onCartClick: ct
                            });
                            break;
                        case Oe.Starred:
                            kt = we.default.createElement(fe.StarredDrawerLoadable, {
                                chat: a,
                                starredMsgs: a.getStarredMsgs(),
                                onClose: () => He.pop()
                            });
                            break;
                        case Oe.Kept:
                            kt = we.default.createElement(R.default, {
                                chat: a,
                                keptMsgs: a.getKeptMsgs(),
                                onClose: () => He.pop()
                            });
                            break;
                        case Oe.GroupSettings:
                            kt = we.default.createElement(L.default, {
                                chat: a,
                                groupMetadata: a.groupMetadata,
                                onClose: () => He.pop()
                            });
                            break;
                        case Oe.MediaGallery:
                            kt = we.default.createElement(B.MediaGalleryDrawer, {
                                chat: a,
                                onBack: () => He.pop(),
                                onProductDetail: rt,
                                setProductsScrollOffset: Be,
                                initialTab: je.current,
                                productsScrollOffset: Re.current
                            });
                            break;
                        case Oe.GroupInviteLink:
                            kt = we.default.createElement(N.GroupInviteLinkDrawerLoadable, {
                                chat: a,
                                groupMetadata: (0, u.default)(a.groupMetadata, "chat.groupMetadata"),
                                onBack: () => He.pop(),
                                onGroupSettings: () => He.push(Oe.GroupSettings)
                            });
                            break;
                        case Oe.PendingParticipants:
                            kt = we.default.createElement(A.default, {
                                chat: a,
                                onBack: () => He.pop()
                            });
                            break;
                        case Oe.Verification:
                            kt = we.default.createElement(he.default.VerificationDrawerLoadable, {
                                contact: (0, u.default)(Je, "contact"),
                                onClose: () => He.pop(),
                                isFirstLevel: !1
                            });
                            break;
                        case Oe.DefaultEphemerality:
                            kt = we.default.createElement(w.default, {
                                onClose: () => He.pop(),
                                entryPoint: (0, u.default)(at, "defaultEphemeralityEntryPoint")
                            });
                            break;
                        case Oe.Ephemeral:
                            {
                                const e = a.isGroup ? ve.DISAPPEARING_MODE_ENTRY_POINT_TYPE.GROUP_CHAT_DISAPPEARING_MESSAGES_SETTING : ve.DISAPPEARING_MODE_ENTRY_POINT_TYPE.INDIVIDUAL_CHAT_DISAPPEARING_MESSAGES_SETTING;kt = we.default.createElement(_.default, {
                                    chat: a,
                                    showNux: (0, me.shouldShowNUX)(X.NUX.EPHEMERAL),
                                    entryPoint: ye.EPHEMERAL_SETTING_ENTRY_POINT_TYPE.CHAT_INFO,
                                    onClose: () => He.pop(),
                                    onCloseNux: () => He.push(Oe.Ephemeral),
                                    onDDMSettingsClick: () => (lt(e), void He.push(Oe.DefaultEphemerality))
                                });
                                break
                            }
                    }
                    return we.default.createElement(Ge, {
                        ref: t,
                        flow: He,
                        displayName: Ae
                    }, kt)
                }));
            t.InfoFlow = Ne, Ne.displayName = "InfoFlow"
        },
        600788: (e, t, n) => {
            "use strict";
            var a = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = L;
            var l = a(n(953268)),
                r = a(n(670983)),
                o = n(318289),
                i = n(78810),
                u = n(914368),
                s = n(163755),
                c = a(n(932325)),
                d = n(172259),
                f = a(n(933147)),
                p = n(97858),
                m = n(114850),
                h = n(787742),
                g = n(373070),
                E = n(983271),
                b = a(n(266648)),
                v = n(382117),
                y = a(n(330619)),
                C = n(744976),
                M = n(531737),
                w = n(818674),
                k = function(e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || "object" != typeof e && "function" != typeof e) return {
                        default: e
                    };
                    var n = x(t);
                    if (n && n.has(e)) return n.get(e);
                    var a = {},
                        l = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var r in e)
                        if ("default" !== r && Object.prototype.hasOwnProperty.call(e, r)) {
                            var o = l ? Object.getOwnPropertyDescriptor(e, r) : null;
                            o && (o.get || o.set) ? Object.defineProperty(a, r, o) : a[r] = e[r]
                        }
                    a.default = e, n && n.set(e, a);
                    return a
                }(n(667294)),
                S = a(n(969651)),
                _ = a(n(637660)),
                P = n(808446),
                O = a(n(49710)),
                I = a(n(17533)),
                N = a(n(286481)),
                T = a(n(940630)),
                A = a(n(895851));

            function x(e) {
                if ("function" != typeof WeakMap) return null;
                var t = new WeakMap,
                    n = new WeakMap;
                return (x = function(e) {
                    return e ? n : t
                })(e)
            }

            function L(e) {
                var t;
                const {
                    msg: n,
                    highlightedMsgIds: a
                } = e, x = (0, A.default)(), L = (0, T.default)(), R = (0, S.default)(), B = (0, _.default)((() => n.type === g.MSG_TYPE.IMAGE ? new v.UiActionWamEvent({
                    uiActionType: C.UI_ACTION_TYPE.IMAGE_OPEN,
                    uiActionPreloaded: n.mediaData.mediaStage === d.MediaDataStage.RESOLVED
                }) : null)), j = (0, _.default)((() => {
                    let e = n;
                    var t;
                    n.isCarouselCard && (e = null !== (t = (0, o.getParentMsgFromCarouselCard)(n)) && void 0 !== t ? t : n);
                    return (0, i.constructMediaMsgs)((0, s.getChat)(e), e)
                })), W = j.current.length, F = (0, O.default)(W), G = (0, k.useRef)(null), H = (0, k.useRef)(), V = (0, k.useRef)(), U = (0, k.useRef)(null), z = (0, k.useRef)(null), q = (0, k.useRef)(null), [Y, K] = (0, k.useState)(n), [Z, X] = (0, k.useState)(!1), [Q, $] = (0, k.useState)(D(Y)), J = (0, O.default)(Y), ee = function() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                    const t = z.current,
                        n = q.current,
                        a = U.current;
                    if (!t || !n || !a) return;
                    let l = 0;
                    a instanceof HTMLElement && (l = a.clientWidth / 2 - t.clientWidth / 2), (0, y.default)(n, "stop");
                    let r = 0;
                    e && (r = 300), (0, y.default)(a, "scroll", {
                        duration: r,
                        container: n,
                        offset: l,
                        axis: "x",
                        easing: [.1, .82, .25, 1]
                    })
                };
                (0, k.useEffect)((() => {
                    var e;
                    ee(), D(n) && (e = z.current) && (0, y.default)(e, {
                        opacity: [1, 0],
                        translateY: ["0%", "100%"]
                    }, {
                        duration: 300,
                        delay: 100,
                        easing: [.1, .82, .25, 1]
                    }).then((() => {
                        x.aborted || $(!1)
                    }))
                }), []), (0, k.useEffect)((() => {
                    W > (null != F ? F : 0) && ee()
                }));
                const te = e => {
                        L((() => {
                            j.current.loadMoreAroundIfNeeded(e)
                        })), K(e)
                    },
                    ne = e => {
                        if (e && e.stopPropagation(), Z) return;
                        const t = Y;
                        if (!t) return;
                        let a = null;
                        a = j.current.getAfter(t), a ? te(a) : j.current.hasMediaAfter && (H.current || (H.current = j.current.queryMedia({
                            chat: (0, s.getChat)(n),
                            msg: n,
                            direction: "after"
                        }).then((e => {
                            x.aborted || "number" == typeof e.length && e.length > 0 && Y === n && ne()
                        })).catch((() => {
                            __LOG__(3)
                            `query media msgs error: `
                        })).finally((() => {
                            H.current = null
                        }))))
                    },
                    ae = e => {
                        if (e && e.stopPropagation(), Z) return;
                        const t = Y;
                        if (!t) return;
                        let a = null;
                        a = j.current.getBefore(t), a ? te(a) : j.current.hasMediaBefore && (V.current || (V.current = j.current.queryMedia({
                            chat: (0, s.getChat)(n),
                            msg: n,
                            direction: "before"
                        }).then((e => {
                            x.aborted || "number" == typeof e.length && e.length > 0 && Y === n && ae()
                        })).catch((() => {
                            __LOG__(3)
                            `query media msgs error: `
                        })).finally((() => {
                            V.current = null
                        }))))
                    };
                let le = null;
                n.type === g.MSG_TYPE.IMAGE && (le = () => {
                    const e = B.current;
                    var t;
                    e && (Object.assign(e, (0, M.getGroupCountMetricsFromChatWid)(null === (t = (0, s.getChat)(n)) || void 0 === t ? void 0 : t.id)), e.markUiActionT(), e.commit(), B.current = null);
                    (0, w.logUiActionShadowPrivateStatsTestEvents)()
                });
                const re = () => {
                        m.ModalManager.closeMedia()
                    },
                    oe = (0, I.default)((() => {
                        K(null), re()
                    }));
                (0, P.useListener)(D(Y) ? null : Y, "revoked", oe);
                const ie = D(Y) ? j.current : null;
                (0, P.useListener)(ie, "remove", ((e, t, n) => {
                    const a = j.current,
                        l = Y;
                    if (a.includes(e) || null != l && null != l.id && l.id.toString() !== e.id.toString()) return void R();
                    const o = n.index;
                    0 === a.length ? re() : a.length === o ? te((0, r.default)(a.at(o - 1), "mediaMsgs.at(index - 1)")) : te((0, r.default)(a.at(o), "mediaMsgs.at(index)"))
                })), (0, P.useListener)(ie, "reset", (() => {
                    re()
                })), (0, P.useListener)(ie, "query_media_after", (() => {
                    R()
                })), (0, P.useListener)(ie, "query_media_before", (() => {
                    const e = q.current;
                    e && (G.current = e.scrollWidth, e instanceof HTMLElement && R())
                })), (0, P.useListener)(window, "keydown", (e => {
                    if (e.defaultPrevented) return;
                    if (Y && !D(Y)) return;
                    const t = c.default.isRTL();
                    e.keyCode === l.default.LEFT ? t ? ne() : ae() : e.keyCode === l.default.RIGHT && (t ? ae() : ne())
                })), (0, k.useEffect)((() => {
                    L((() => {
                        Y && j.current.loadMoreAroundIfNeeded(Y)
                    }))
                }), [Y, j, L]), (0, k.useEffect)((() => {
                    if (J !== Y) ee(!0);
                    else {
                        const e = q.current;
                        if (!e || null == G.current || 0 === G.current) return;
                        e instanceof HTMLElement && (e.scrollLeft += e.scrollWidth - G.current), G.current = null
                    }
                }), [Y, J]);
                const ue = (0, N.default)(((e, t, n) => {
                    if (0 !== t.length && null != n) {
                        if (t.hasMediaBefore && n < e.clientWidth) {
                            const e = (0, r.default)(t.head(), "mediaMsgs.head()");
                            L((() => {
                                t.queryMedia({
                                    chat: (0, s.getChat)(e),
                                    msg: e
                                }), R()
                            }))
                        }
                        if (t.hasMediaAfter && n + u.SCROLL_FUDGE > e.scrollWidth - 2 * e.clientWidth) {
                            const e = (0, r.default)(t.last(), "mediaMsgs.last()");
                            L((() => {
                                t.queryMedia({
                                    chat: (0, s.getChat)(e),
                                    msg: e,
                                    direction: "after"
                                }), R()
                            }))
                        }
                    }
                }), 100);
                if (!Y) return null;
                if ((0, s.getChat)(n).isSuspendedOrTerminated() && (0, p.isGroupSuspendV2Enabled)()) return void(0, E.openSuspendedGroupMediaDownloadFailureModal)();
                const se = j.current,
                    ce = se.last(),
                    de = se.hasMediaAfter || Y !== ce ? ne : null,
                    fe = se.head(),
                    pe = se.hasMediaBefore || Y !== fe ? ae : null;
                return k.default.createElement("div", {
                    className: Z ? "img-zoomed-in" : null
                }, (0, h.getHasThumbList)(Y) && k.default.createElement(b.default, {
                    activeMsg: Y,
                    mediaMsgs: j.current,
                    highlightedMsgIds: e.highlightedMsgIds,
                    onSelectThumb: te,
                    onSetActiveThumb: e => {
                        U.current = e
                    },
                    onScroll: e => {
                        ue(e.currentTarget, j.current, e.currentTarget.scrollLeft)
                    },
                    setRefThumbsContainer: e => {
                        z.current = e
                    },
                    setRefThumbs: e => {
                        q.current = e
                    }
                }), k.default.createElement(f.default, {
                    msg: Y,
                    mediaData: Y.mediaData,
                    onBack: re,
                    onExitAnimation: () => {
                        var e;
                        D(n) && (e = z.current) && (0, y.default)(e, {
                            opacity: [0, 1],
                            translateY: ["100%", "0%"]
                        }, {
                            duration: 300,
                            easing: [.1, .82, .25, 1]
                        })
                    },
                    onNext: de,
                    onPrev: pe,
                    onImgZoomIn: e => {
                        X(e)
                    },
                    getZoomNode: e.getZoomNode,
                    startTime: e.startTime,
                    isAnimatingThumbs: Q,
                    onImageLoad: le,
                    msgIndexInAlbum: (() => {
                        let e = -1;
                        if (!a || !Y) return e;
                        const t = Y.id.toString();
                        if (!a.has(t)) return e;
                        let n = 0;
                        return a.forEach((a => {
                            a === t && (e = n), n++
                        })), e
                    })(),
                    albumSize: (null === (t = e.highlightedMsgIds) || void 0 === t ? void 0 : t.size) || 0
                }))
            }

            function D(e) {
                return !e || (0, h.getHasThumbList)(e)
            }
            L.displayName = "MediaViewerFlow"
        },
        340576: (e, t, n) => {
            "use strict";
            var a = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.requireBundle = t.SendContactsModalLoadable = void 0;
            var l = a(n(348926)),
                r = a(n(114945)),
                o = a(n(472514)),
                i = a(n(997026)),
                u = a(n(261724)),
                s = n(548360),
                c = a(n(667294));
            const d = (0, i.default)((0, l.default)((function*() {
                const e = yield Promise.all([n.e(5878), n.e(8295), n.e(1702), n.e(9488), n.e(2790), n.e(275)]).then(n.bind(n, 915132));
                return (0, o.default)(e)
            })), "SendContactsModal");
            t.requireBundle = d;
            const f = (0, r.default)({
                loader: d,
                loading: e => c.default.createElement(u.default, {
                    title: s.fbt._("Send contacts", null, {
                        hk: "9ZMyz"
                    }),
                    error: Boolean(e.error)
                })
            });
            t.SendContactsModalLoadable = f
        },
        854534: (e, t, n) => {
            "use strict";
            var a = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var l = n(35234),
                r = n(700071),
                o = n(351053),
                i = n(394164),
                u = n(780549),
                s = n(174834),
                c = n(877171),
                d = a(n(908081)),
                f = a(n(324093)),
                p = n(626194),
                m = n(811720),
                h = n(512938),
                g = a(n(570834)),
                E = a(n(335540)),
                b = n(81644),
                v = n(982845),
                y = a(n(237889)),
                C = n(180519),
                M = n(454905),
                w = n(548360),
                k = function(e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || "object" != typeof e && "function" != typeof e) return {
                        default: e
                    };
                    var n = I(t);
                    if (n && n.has(e)) return n.get(e);
                    var a = {},
                        l = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var r in e)
                        if ("default" !== r && Object.prototype.hasOwnProperty.call(e, r)) {
                            var o = l ? Object.getOwnPropertyDescriptor(e, r) : null;
                            o && (o.get || o.set) ? Object.defineProperty(a, r, o) : a[r] = e[r]
                        }
                    a.default = e, n && n.set(e, a);
                    return a
                }(n(667294)),
                S = a(n(156720)),
                _ = a(n(637660)),
                P = n(808446),
                O = n(437699);

            function I(e) {
                if ("function" != typeof WeakMap) return null;
                var t = new WeakMap,
                    n = new WeakMap;
                return (I = function(e) {
                    return e ? n : t
                })(e)
            }
            const N = {
                    borderBottom: "qmxv8cnq",
                    backgroundColor: "s9raicp8"
                },
                T = {
                    paddingTop: "n1yiu2zv",
                    paddingEnd: "f9ovudaz",
                    paddingBottom: "eb4rp10x",
                    paddingStart: "gx1rr48f"
                },
                A = {
                    paddingTop: "n1yiu2zv",
                    paddingEnd: "h5uqwbaf",
                    paddingBottom: "eb4rp10x",
                    paddingStart: "kjjye8e3",
                    textAlign: "ljrqcn24"
                },
                x = {
                    overflowX: "gfz4du6o",
                    overflowY: "r7fjleex"
                },
                L = {
                    fontWeight: "nbipi2bn"
                },
                D = (0, r.ChatFactory)(),
                R = (0, h.FlatListFactory)();

            function B(e, t) {
                const {
                    onClose: n
                } = e, a = () => o.ChatCollection.filter((e => e.archive && e.shouldAppearInList)), [h, I] = (0, O.useSettingsValues)([v.getShowArchiveV2, v.getArchive]), B = (0, _.default)((() => new g.default)), j = (0, _.default)((() => new y.default([], (e => e.id.toString())))), W = (0, k.useRef)(null), [F, G] = (0, k.useState)(a), H = () => h;
                (0, P.useListener)(o.ChatCollection, [H() ? "sort" : null, "change:archive", "add", "remove"].filter(Boolean), (() => {
                    G(a())
                }));
                const V = e => {
                    j.current.setVal(e, !1)
                };
                (0, P.useListener)(u.Cmd, "close_chat", (e => {
                    e === j.current.getVal() && j.current.unset()
                })), (0, P.useListener)(u.Cmd, "update_chatlist_selection", V);
                (0, k.useEffect)((() => {
                    if (H()) {
                        const e = a(),
                            t = new Map;
                        e.forEach((e => {
                            e.archiveAtMentionViewedInDrawer = !0, t.set(e.id.toString(), !0)
                        })), (0, l.updateChatArchiveDrawer)(t)
                    }
                    W.current && E.default.focus(W.current);
                    const e = o.ChatCollection.toArray().find((e => e.active && e.archive));
                    e && V(e)
                }), []);
                const U = () => {
                        n()
                    },
                    z = (e, t) => {
                        u.Cmd.openChatFromUnread(t).then((e => {
                            e && c.ComposeBoxActions.focus(t)
                        })), I.enabled || U()
                    },
                    q = e => {
                        e.preventDefault(), e.stopPropagation(), j.current.setNext(!0)
                    },
                    Y = e => {
                        e.preventDefault(), e.stopPropagation(), j.current.setPrev(!0)
                    };
                let K, Z;
                if (j.current.init(F, !0), o.ChatCollection.some((e => e.archive))) {
                    const e = w.fbt._("These chats stay archived when new messages are received. To change this experience, go to {=m2} on your phone.", [w.fbt._implicitParam("=m2", k.default.createElement("span", {
                            className: (0, S.default)(L)
                        }, w.fbt._("Settings > Chats", null, {
                            hk: "4uWslk"
                        })))], {
                            hk: "3nZFmD"
                        }),
                        t = w.fbt._("These chats are unarchived when new messages are received. To change this experience, go to {=m2} on your phone.", [w.fbt._implicitParam("=m2", k.default.createElement("span", {
                            className: (0, S.default)(L)
                        }, w.fbt._("Settings > Chats", null, {
                            hk: "2cLx9i"
                        })))], {
                            hk: "pq8Sb"
                        });
                    K = k.default.createElement("div", {
                        className: (0, S.default)(N)
                    }, k.default.createElement("div", {
                        className: (0, S.default)(T)
                    }, k.default.createElement("div", {
                        className: (0, S.default)(A)
                    }, k.default.createElement(C.WDSTextMuted, {
                        as: "p"
                    }, h ? e : t))))
                }
                Z = F.length > 0 ? k.default.createElement(b.HotKeys, {
                    ref: W,
                    handlers: {
                        down: q,
                        up: Y
                    }
                }, K, k.default.createElement(R, {
                    className: (0, S.default)(x),
                    data: F.map((e => ({
                        itemKey: e.id.toString(),
                        chat: e,
                        height: (0, s.shouldShowNewSubgroupIdentity)(e.groupMetadata) ? i.SUBGROUP_V2_CHAT_CELL_HEIGHT : void 0
                    }))),
                    flatListController: B.current,
                    direction: "vertical",
                    renderItem: e => k.default.createElement(D, {
                        chat: e.chat,
                        mode: r.Mode.LAST,
                        active: j.current,
                        onClick: z,
                        hideArchivedIcon: I.enabled,
                        hideMuteIcon: H(),
                        hideMuteOption: H(),
                        ephemeralIcon: "chat-list",
                        showCommunityInfo: !0
                    })
                })) : k.default.createElement(m.Archived, null);
                const X = I.enabled ? w.fbt._("Archived", null, {
                    hk: "3HjzQg"
                }) : w.fbt._("Archived chats", null, {
                    hk: "23HH3O"
                });
                return k.default.createElement(d.default, {
                    ref: t,
                    theme: "archived"
                }, k.default.createElement(p.DrawerHeader, {
                    title: X,
                    onBack: U,
                    type: (0, M.topMenuRedesignEnabled)() ? p.DRAWER_HEADER_TYPE.TAB : p.DRAWER_HEADER_TYPE.LARGE,
                    menu: null
                }), k.default.createElement(f.default, {
                    flatListControllers: [B.current]
                }, Z))
            }
            var j = (0, k.forwardRef)(B);
            t.default = j
        },
        201833: (e, t, n) => {
            "use strict";
            var a = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.ContactInfoBizBot1pSection = h;
            var l = n(970039),
                r = n(461012),
                o = n(693976),
                i = a(n(306007)),
                u = n(753233),
                s = n(258105),
                c = n(114850),
                d = n(220584),
                f = n(180519),
                p = n(548360),
                m = a(n(667294));

            function h() {
                const e = m.default.createElement(f.TextSpan, {
                        theme: "title"
                    }, p.fbt._("AI from Meta", null, {
                        hk: "3vj17i"
                    })),
                    t = m.default.createElement(f.TextDiv, {
                        theme: "muted"
                    }, p.fbt._("AI from Meta receives chats and generates messages for this business. Click to learn more.", null, {
                        hk: "3iYvrS"
                    })),
                    n = m.default.createElement(l.AiSignalIcon, {
                        color: d.SvgColorProp.SECONDARY,
                        width: 20,
                        height: 20
                    }),
                    a = m.default.createElement(f.TextSpan, {
                        theme: "title"
                    }, p.fbt._("Manage AI chats", null, {
                        hk: "36q4IX"
                    })),
                    h = m.default.createElement(f.TextDiv, {
                        theme: "muted"
                    }, p.fbt._("Learn how to download or delete Meta's copy of your AI chats. Click to learn more.", null, {
                        hk: "3itwAo"
                    })),
                    g = m.default.createElement(o.BotDataSharingIcon, {
                        color: d.SvgColorProp.SECONDARY,
                        width: 20,
                        height: 20
                    });
                return m.default.createElement(m.default.Fragment, null, m.default.createElement(i.default, {
                    onClick: () => {
                        c.ModalManager.open(m.default.createElement(r.BizBot1pLearnMore, null))
                    },
                    icon: n,
                    title: e,
                    secondaryTitle: t
                }), m.default.createElement(i.default, {
                    onClick: () => {
                        (0, u.openExternalLink)((0, s.getBizBot1pLearnMoreUrl)())
                    },
                    icon: g,
                    title: a,
                    secondaryTitle: h
                }))
            }
            h.displayName = "ContactInfoBizBot1pSection"
        },
        551181: (e, t, n) => {
            "use strict";
            var a = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.ContactInfoBizBot3pSection = f;
            var l = n(693976),
                r = a(n(306007)),
                o = n(753233),
                i = n(258105),
                u = n(220584),
                s = n(180519),
                c = n(548360),
                d = a(n(667294));

            function f() {
                const e = d.default.createElement(s.TextSpan, {
                        theme: "title"
                    }, c.fbt._("About managing AI chats", null, {
                        hk: "31Ddga"
                    })),
                    t = d.default.createElement(s.TextDiv, {
                        theme: "muted"
                    }, c.fbt._("Learn about how to download and delete chats received by Meta and the developer", null, {
                        hk: "3TpyMa"
                    })),
                    n = d.default.createElement(l.BotDataSharingIcon, {
                        color: u.SvgColorProp.SECONDARY,
                        width: 18,
                        height: 18
                    });
                return d.default.createElement(r.default, {
                    onClick: () => {
                        (0, o.openExternalLink)((0, i.getBizBot3pDataSharingUrl)())
                    },
                    icon: n,
                    title: e,
                    secondaryTitle: t
                })
            }
            f.displayName = "ContactInfoBizBot3pSection"
        },
        302112: (e, t, n) => {
            "use strict";
            var a = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var l = a(n(348926)),
                r = n(698867),
                o = n(751461),
                i = n(356097),
                u = n(811720),
                s = n(978752),
                c = a(n(75531)),
                d = n(281134),
                f = n(982015),
                p = n(280511),
                m = n(548360),
                h = function(e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || "object" != typeof e && "function" != typeof e) return {
                        default: e
                    };
                    var n = E(t);
                    if (n && n.has(e)) return n.get(e);
                    var a = {},
                        l = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var r in e)
                        if ("default" !== r && Object.prototype.hasOwnProperty.call(e, r)) {
                            var o = l ? Object.getOwnPropertyDescriptor(e, r) : null;
                            o && (o.get || o.set) ? Object.defineProperty(a, r, o) : a[r] = e[r]
                        }
                    a.default = e, n && n.set(e, a);
                    return a
                }(n(667294)),
                g = a(n(156720));

            function E(e) {
                if ("function" != typeof WeakMap) return null;
                var t = new WeakMap,
                    n = new WeakMap;
                return (E = function(e) {
                    return e ? n : t
                })(e)
            }
            const b = {
                paddingTop: "s7fqlky6",
                paddingEnd: "iffbo4e8",
                paddingBottom: "q1tx93la",
                paddingStart: "e8k79tju",
                fontSize: "ovllcyds",
                lineHeight: "durt31hz",
                color: "amgz1mtg"
            };

            function v(e, t) {
                const {
                    keptMsgs: n,
                    onClose: a,
                    chat: E
                } = e, [v, y] = (0, s.useKicNux)(E);
                (0, h.useEffect)((() => {
                    v && y(p.TRIGGER_TYPE.KEPT_FOLDER_TAP_FIRST_TIME)
                }), []), (0, h.useEffect)((() => {
                    (0, l.default)((function*() {
                        const e = new o.DisappearingMessageKeepInChatWamEvent({
                            kicActionName: d.KIC_ACTION_NAME_TYPE.VIEW_KEPT_MESSAGES,
                            kicEntryPoint: f.KIC_ENTRY_POINT_TYPE.CHAT_INFO,
                            messagesInFolder: n.length,
                            isAGroup: null == E ? void 0 : E.isGroup
                        });
                        var t;
                        (null == E ? void 0 : E.isGroup) && e.set({
                            isAdmin: null == E || null === (t = E.groupMetadata) || void 0 === t ? void 0 : t.participants.iAmAdmin()
                        });
                        if (E) {
                            const t = yield(0, r.getChatThreadID)(null == E ? void 0 : E.id.toJid());
                            null != t && e.set({
                                threadId: t
                            })
                        }
                        e.commit()
                    }))()
                }), []);
                const C = m.fbt._("Kept messages", null, {
                        hk: "iGco8"
                    }),
                    M = h.default.createElement(u.KeptMsgs, null);
                let w = null;
                var k;
                (null == E ? void 0 : E.isGroup) ? w = (null === (k = E.groupMetadata) || void 0 === k ? void 0 : k.restrict) ? h.default.createElement("div", {
                    className: (0, g.default)(b)
                }, m.fbt._("These messages are kept in the chat for everyone. Only admins can keep or unkeep messages in this group.", null, {
                    hk: "2P8fIj"
                })) : h.default.createElement("div", {
                    className: (0, g.default)(b)
                }, m.fbt._("These messages are kept in the chat for everyone. Everyone can keep or unkeep a message. Group admins can limit this.", null, {
                    hk: "3VYBCh"
                })): w = h.default.createElement("div", {
                    className: (0, g.default)(b)
                }, m.fbt._("These messages are kept in the chat for everyone. Everyone can keep or unkeep a message.", null, {
                    hk: "3sFKOP"
                }));
                return h.default.createElement(c.default, {
                    testid: "kept-drawer",
                    ref: t,
                    msgCollection: n,
                    onClose: a,
                    chat: E,
                    title: C,
                    emptyListText: M,
                    descriptionSection: w,
                    displayType: i.DISPLAY_TYPE.KEPT_MSGS
                })
            }
            var y = (0, h.forwardRef)(v);
            t.default = y
        },
        306472: (e, t, n) => {
            "use strict";
            var a = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.MediaGalleryDrawer = t.GalleryDrawerTabs = void 0;
            var l = a(n(252628)),
                r = n(328620),
                o = a(n(638938)),
                i = n(409623),
                u = a(n(321574)),
                s = a(n(908081)),
                c = a(n(324093)),
                d = n(626194),
                f = a(n(671597)),
                p = a(n(482530)),
                m = n(97858),
                h = n(913257),
                g = a(n(930440)),
                E = a(n(285192)),
                b = a(n(434377)),
                v = n(392632),
                y = a(n(844453)),
                C = n(548360),
                M = function(e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || "object" != typeof e && "function" != typeof e) return {
                        default: e
                    };
                    var n = _(t);
                    if (n && n.has(e)) return n.get(e);
                    var a = {},
                        l = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var r in e)
                        if ("default" !== r && Object.prototype.hasOwnProperty.call(e, r)) {
                            var o = l ? Object.getOwnPropertyDescriptor(e, r) : null;
                            o && (o.get || o.set) ? Object.defineProperty(a, r, o) : a[r] = e[r]
                        }
                    a.default = e, n && n.set(e, a);
                    return a
                }(n(667294)),
                w = a(n(156720)),
                k = a(n(261716)),
                S = a(n(637660));

            function _(e) {
                if ("function" != typeof WeakMap) return null;
                var t = new WeakMap,
                    n = new WeakMap;
                return (_ = function(e) {
                    return e ? n : t
                })(e)
            }
            const P = {
                    display: "p357zi0d",
                    flexGrow: "ggj6brxn",
                    flexShrink: "m0h2a7mj",
                    flexBasis: "rjo8vgbg",
                    flexDirection: "f8m0rgwh",
                    height: "ppled2lx"
                },
                O = {
                    position: "lhggkp7q",
                    top: "qq0sjtgm",
                    start: "tkdu00h0",
                    width: "ln8gz9je",
                    height: "ppled2lx"
                },
                I = n(76672)({
                    MEDIA: "media",
                    DOCS: "docs",
                    LINKS: "links",
                    PRODUCTS: "products"
                });

            function N(e) {
                const {
                    selected: t,
                    onSearch: n
                } = e;
                switch (t) {
                    case I.MEDIA:
                    case I.LINKS:
                    case I.DOCS:
                        return M.default.createElement(i.ListSearch, {
                            onSearch: n,
                            loading: !1,
                            listFilterEnabled: !1,
                            chatlistFilterEnabled: !1,
                            mode: o.default.Chatlist,
                            placeholder: C.fbt._("Search", null, {
                                hk: "418EDN"
                            })
                        });
                    default:
                        return null
                }
            }

            function T(e) {
                switch (e.selectedTab) {
                    case I.MEDIA:
                        return M.default.createElement(p.default, {
                            chat: e.chat,
                            mediaMsgs: e.chat.getMediaMsgs(),
                            selectable: e.selectable,
                            onMessageSelect: e.onMessageSelect,
                            selectedMessages: e.selectedMessages,
                            fullCollection: !0,
                            isFilterEnabled: e.isFilterEnabled,
                            filterText: e.filterText
                        });
                    case I.LINKS:
                        return M.default.createElement(f.default, {
                            chat: e.chat,
                            linkMsgs: e.chat.getLinkMsgs(),
                            selectable: e.selectable,
                            onMessageSelect: e.onMessageSelect,
                            selectedMessages: e.selectedMessages,
                            isFilterEnabled: e.isFilterEnabled,
                            filterText: e.filterText
                        });
                    case I.DOCS:
                        return M.default.createElement(u.default, {
                            chat: e.chat,
                            docMsgs: e.chat.getDocMsgs(),
                            selectable: e.selectable,
                            onMessageSelect: e.onMessageSelect,
                            selectedMessages: e.selectedMessages,
                            isFilterEnabled: e.isFilterEnabled,
                            filterText: e.filterText
                        });
                    case I.PRODUCTS:
                        return M.default.createElement(E.default, {
                            chat: e.chat,
                            productMsgs: e.chat.getProductMsgs(),
                            selectable: e.selectable,
                            onMessageSelect: e.onMessageSelect,
                            selectedMessages: e.selectedMessages,
                            onProductDetail: e.onProductDetail,
                            setScrollOffset: e.setScrollOffset,
                            scrollOffset: e.scrollOffset
                        })
                }
            }
            t.GalleryDrawerTabs = I, N.displayName = "MediaSearch", T.displayName = "GalleryContent";
            const A = (0, M.forwardRef)(((e, t) => {
                const {
                    chat: n,
                    onProductDetail: a,
                    setProductsScrollOffset: o,
                    initialTab: i = I.MEDIA,
                    productsScrollOffset: u = 0
                } = e, [f, p] = (0, M.useState)(i), [E, _] = (0, M.useState)(null), [A, x] = (0, M.useState)(!1), [L, D] = (0, k.default)(), R = (0, m.mediaLinksDocsFilteringEnabled)(), B = (0, S.default)((() => new g.default([], (e => e.id.toString())))), j = () => {
                    A && (B.current.unsetAll(), x(!1))
                }, W = (0, M.useCallback)((e => {
                    const t = I.cast(e);
                    if (null == t) return;
                    const n = (0, l.default)(I).indexOf(f),
                        a = (0, l.default)(I).indexOf(t);
                    n !== a && B.current.unsetAll(), p(t), _(a > n ? "right" : "left"), x(!1)
                }), [B, f]), F = (0, M.useMemo)((() => {
                    const e = [{
                        id: I.MEDIA,
                        title: C.fbt._("Media", null, {
                            hk: "2BqnhF"
                        })
                    }, {
                        id: I.DOCS,
                        title: C.fbt._("Docs", null, {
                            hk: "M40SP"
                        })
                    }, {
                        id: I.LINKS,
                        title: C.fbt._("Links", null, {
                            hk: "3uaiIi"
                        })
                    }];
                    return e.push({
                        id: I.PRODUCTS,
                        title: C.fbt._("Products", null, {
                            hk: "3Ky71N"
                        })
                    }), M.default.createElement(b.default, {
                        tabConfigs: e,
                        selectedId: f,
                        onSelect: W,
                        testIdPrefix: "gallery-tab"
                    })
                }), [f, W]), G = function(e) {
                    switch (e) {
                        case I.MEDIA:
                            return h.MultiSelectBarEntryPoint.MEDIA;
                        case I.DOCS:
                            return h.MultiSelectBarEntryPoint.DOCS;
                        case I.LINKS:
                            return h.MultiSelectBarEntryPoint.LINKS;
                        case I.PRODUCTS:
                            return h.MultiSelectBarEntryPoint.PRODUCTS
                    }
                }(f), H = [I.MEDIA, I.DOCS].includes(f), V = A ? M.default.createElement(v.UIE, {
                    displayName: "MediaMultiSelect",
                    escapable: !0,
                    requestDismiss: j
                }, M.default.createElement(h.MultiSelectBar, {
                    chat: n,
                    noSortOnForward: !0,
                    theme: "mediaGallery",
                    toastPosition: r.ToastPosition.RIGHT,
                    downloadButton: H,
                    selectedMessages: B.current,
                    onCancel: j,
                    entryPoint: G
                })) : null, U = "right" === E ? "slide-forward" : "slide-back";
                return M.default.createElement(s.default, {
                    ref: t,
                    theme: "gallery",
                    testid: "media-gallery-drawer",
                    tsNavigationData: {
                        surface: "media-drawer"
                    }
                }, M.default.createElement(d.DrawerHeader, {
                    title: " ",
                    onBack: e.onBack,
                    rtlFixIfOnDarwin: !0,
                    type: d.DRAWER_HEADER_TYPE.MULTI_MEDIA_GALLERY,
                    focusBackOrCancel: !0
                }), V, F, R ? M.default.createElement(N, {
                    selected: f,
                    onSearch: D
                }) : null, M.default.createElement(c.default, {
                    "data-list-scroll-container": !0
                }, M.default.createElement(y.default, {
                    transitionName: U,
                    className: (0, w.default)(P)
                }, M.default.createElement("div", {
                    className: (0, w.default)(O),
                    key: f
                }, M.default.createElement("div", {
                    className: (0, w.default)(P)
                }, M.default.createElement(T, {
                    chat: n,
                    selectable: A,
                    onMessageSelect: (e, t) => {
                        A || x(!0), B.current.setVal(e, t), 0 === B.current.getSelected().length && j()
                    },
                    selectedMessages: B.current,
                    fullCollection: !0,
                    isFilterEnabled: R,
                    filterText: L,
                    onProductDetail: a,
                    setScrollOffset: o,
                    scrollOffset: u,
                    selectedTab: f,
                    mediaMsgs: n.getMediaMsgs(),
                    linkMsgs: n.getLinkMsgs(),
                    docMsgs: n.getDocMsgs(),
                    productMsgs: n.getProductMsgs()
                }))))))
            }));
            t.MediaGalleryDrawer = A, A.displayName = "MediaGalleryDrawer"
        },
        266466: (e, t, n) => {
            "use strict";
            var a = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = p;
            var l = n(468926),
                r = n(103440),
                o = n(180519),
                i = n(676345),
                u = n(548360),
                s = function(e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || "object" != typeof e && "function" != typeof e) return {
                        default: e
                    };
                    var n = d(t);
                    if (n && n.has(e)) return n.get(e);
                    var a = {},
                        l = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var r in e)
                        if ("default" !== r && Object.prototype.hasOwnProperty.call(e, r)) {
                            var o = l ? Object.getOwnPropertyDescriptor(e, r) : null;
                            o && (o.get || o.set) ? Object.defineProperty(a, r, o) : a[r] = e[r]
                        }
                    a.default = e, n && n.set(e, a);
                    return a
                }(n(667294)),
                c = a(n(156720));

            function d(e) {
                if ("function" != typeof WeakMap) return null;
                var t = new WeakMap,
                    n = new WeakMap;
                return (d = function(e) {
                    return e ? n : t
                })(e)
            }
            const f = {
                section: {
                    marginBottom: "t4zgqcuo"
                },
                checkboxLabel: {
                    marginStart: "fooq7fky"
                },
                border: {
                    paddingBottom: "dledyozo",
                    borderBottom: "j4zbmt6h"
                }
            };

            function p(e) {
                let {
                    isBizBot3p: t,
                    isBusiness: n,
                    isGroup: a,
                    onCancel: d,
                    onReport: p,
                    title: m
                } = e;
                const [h, g] = (0, s.useState)(!1);
                let E, b;
                return n ? (E = u.fbt._("This message will be forwarded to WhatsApp. This business will not be notified.", null, {
                    hk: "1N7YEc"
                }), b = u.fbt._("Block business", null, {
                    hk: "3hFIF3"
                })) : t ? (E = u.fbt._("This message will be forwarded to WhatsApp. This AI will not be notified.", null, {
                    hk: "4uA7zj"
                }), b = u.fbt._("Block AI", null, {
                    hk: "4znwe4"
                })) : (E = u.fbt._("This message will be forwarded to WhatsApp. This contact will not be notified.", null, {
                    hk: "2qS1tP"
                }), b = u.fbt._("Block contact", null, {
                    hk: "41X9mL"
                })), s.default.createElement(r.ConfirmPopup, {
                    onOK: function() {
                        p(h)
                    },
                    okText: u.fbt._("Report", null, {
                        hk: "18ssTb"
                    }),
                    onCancel: d,
                    title: m
                }, s.default.createElement("div", {
                    className: (0, c.default)(f.section, i.uiMargin.top12, i.uiMargin.end0, f.border)
                }, s.default.createElement(l.CheckBox, {
                    onChange: () => g((e => !e)),
                    checked: h,
                    id: "menu-icon-report-spam"
                }), s.default.createElement(o.TextLabel, {
                    xstyle: f.checkboxLabel,
                    htmlFor: "menu-icon-report-spam"
                }, b)), s.default.createElement(o.TextParagraph, {
                    xstyle: f.section,
                    color: "muted"
                }, E))
            }
            p.displayName = "MediaViewerReportSpamPopup"
        },
        755140: (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = h;
            var a = n(351053),
                l = n(103440),
                r = n(543081),
                o = n(114850),
                i = n(942319),
                u = n(163139),
                s = n(334724),
                c = n(1373),
                d = n(262553),
                f = n(548360),
                p = function(e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || "object" != typeof e && "function" != typeof e) return {
                        default: e
                    };
                    var n = m(t);
                    if (n && n.has(e)) return n.get(e);
                    var a = {},
                        l = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var r in e)
                        if ("default" !== r && Object.prototype.hasOwnProperty.call(e, r)) {
                            var o = l ? Object.getOwnPropertyDescriptor(e, r) : null;
                            o && (o.get || o.set) ? Object.defineProperty(a, r, o) : a[r] = e[r]
                        }
                    a.default = e, n && n.set(e, a);
                    return a
                }(n(667294));

            function m(e) {
                if ("function" != typeof WeakMap) return null;
                var t = new WeakMap,
                    n = new WeakMap;
                return (m = function(e) {
                    return e ? n : t
                })(e)
            }

            function h(e) {
                let {
                    entryPoint: t
                } = e;
                const n = a.ChatCollection.getActive();
                (0, p.useEffect)((() => {
                    t && (0, r.logPnhRequestRevealActionHelper)(c.PNH_CHAT_TYPE_TYPE.CTWA, d.PNH_MESSAGE_CHAT_PARTY.BIZ, s.PNH_ACTION_TYPE.REQUEST_DIALOG_APPEAR, t)
                }), [t]);
                const m = f.fbt._("Request phone number?", null, {
                        hk: "1BOtdo"
                    }),
                    h = f.fbt._("This person's phone number is not shared in this chat. You can request for their phone number if you'd like to save them to your contacts.", null, {
                        hk: "3SHZ6I"
                    }),
                    g = f.fbt._("Send Request", null, {
                        hk: "4tsuDY"
                    }),
                    E = f.fbt._("Cancel", null, {
                        hk: "37A1CY"
                    });
                return p.default.createElement(l.ConfirmPopup, {
                    onOK: () => {
                        n && ((0, i.sendRequestPhoneNumber)((0, u.unproxy)(n)), null != t && (0, r.logPnhRequestRevealActionHelper)(c.PNH_CHAT_TYPE_TYPE.CTWA, d.PNH_MESSAGE_CHAT_PARTY.BIZ, s.PNH_ACTION_TYPE.SEND_REQUEST, t)), o.ModalManager.close()
                    },
                    okText: g,
                    onCancel: () => o.ModalManager.close(),
                    cancelText: E,
                    title: m
                }, h)
            }
            h.displayName = "RequestPhoneNumberModal"
        },
        735848: (e, t, n) => {
            "use strict";
            var a = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = C;
            var l = n(970039),
                r = n(103440),
                o = n(753233),
                i = n(258105),
                u = a(n(395767)),
                s = n(690495),
                c = a(n(469733)),
                d = n(114850),
                f = n(425813),
                p = n(524532),
                m = a(n(61476)),
                h = n(220584),
                g = n(676345),
                E = n(219753),
                b = n(851488),
                v = n(548360),
                y = a(n(667294));

            function C() {
                return y.default.createElement(r.ConfirmPopup, {
                    title: v.fbt._("About AI Support Assistant", null, {
                        hk: "13m6JU"
                    }),
                    okText: (0, u.default)("Ok"),
                    onOK: () => d.ModalManager.close(),
                    cancelText: (0, u.default)("Learn more"),
                    onCancel: () => {
                        (0, o.openExternalLink)((0, i.getSagaFaqUrl)())
                    }
                }, y.default.createElement(s.FlexColumn, {
                    align: "stretch"
                }, y.default.createElement(c.default, {
                    xstyle: g.uiMargin.vert10,
                    grow: 1
                }, y.default.createElement(E.WDSCell, {
                    interactive: !1,
                    colorScheme: "lightest",
                    size: "medium",
                    detailLeft: y.default.createElement(f.SagaHelpIcon, {
                        color: h.SvgColorProp.TEAL_LIGHTER
                    }),
                    primary: y.default.createElement(b.WDSTextTitle, null, v.fbt._("AI uses official help content", null, {
                        hk: "gpKd"
                    })),
                    secondary: y.default.createElement(b.WDSTextMuted, {
                        textWrap: "wrap"
                    }, v.fbt._("AI assistant uses WhatsApp help content to generate answers for your questions.", null, {
                        hk: "1iUEXr"
                    }))
                })), y.default.createElement(c.default, {
                    xstyle: g.uiMargin.vert10,
                    grow: 1
                }, y.default.createElement(E.WDSCell, {
                    interactive: !1,
                    colorScheme: "lightest",
                    size: "medium",
                    detailLeft: y.default.createElement(p.SagaMessageIcon, {
                        color: h.SvgColorProp.TEAL_LIGHTER
                    }),
                    primary: y.default.createElement(b.WDSTextTitle, null, v.fbt._("AI chats naturally with you", null, {
                        hk: "1ulA6D"
                    })),
                    secondary: y.default.createElement(b.WDSTextMuted, {
                        textWrap: "wrap"
                    }, v.fbt._("You can simply chat with AI assistant in a natural conversation to get your questions answered.", null, {
                        hk: "3EHsmT"
                    }))
                })), y.default.createElement(c.default, {
                    xstyle: g.uiMargin.top10,
                    grow: 1
                }, y.default.createElement(E.WDSCell, {
                    interactive: !1,
                    colorScheme: "lightest",
                    size: "medium",
                    detailLeft: y.default.createElement(l.AiSignalIcon, {
                        color: h.SvgColorProp.TEAL_LIGHTER,
                        height: 24,
                        width: 24
                    }),
                    primary: y.default.createElement(b.WDSTextTitle, null, v.fbt._("This is a service from Meta", null, {
                        hk: "qUAif"
                    })),
                    secondary: y.default.createElement(b.WDSTextMuted, {
                        textWrap: "wrap"
                    }, v.fbt._("Some messages are generated by AI using a secure service from Meta. They are marked with {icon}.", [v.fbt._param("icon", y.default.createElement(m.default, {
                        height: 16,
                        width: 16
                    }))], {
                        hk: "jNDS3"
                    }))
                }))))
            }
            C.displayName = "SagaModal"
        },
        9729: (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function() {
                return {
                    isVoiceCallEnabled: !1,
                    isVideoCallEnabled: !1,
                    canStartVoiceCall: !1,
                    canStartVideoCall: !1,
                    startVoiceCall: () => {},
                    startVideoCall: () => {}
                }
            };
            n(445729), n(660666), n(667294), n(808446)
        },
        791865: (e, t, n) => {
            "use strict";
            var a = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var l = a(n(896322)),
                r = a(n(35644)),
                o = (a(n(306007)), n(464659)),
                i = a(n(740681)),
                u = n(63014),
                s = n(780549),
                c = n(431037),
                d = a(n(908081)),
                f = a(n(324093)),
                p = n(36045),
                m = n(626194),
                h = a(n(209064)),
                g = n(673509),
                E = n(258105),
                b = a(n(570834)),
                v = n(97858),
                y = n(114850),
                C = n(111367),
                M = a(n(410731)),
                w = (n(128754), n(163139)),
                k = (n(220584), n(180519)),
                S = n(521394),
                _ = n(548360),
                P = function(e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || "object" != typeof e && "function" != typeof e) return {
                        default: e
                    };
                    var n = L(t);
                    if (n && n.has(e)) return n.get(e);
                    var a = {},
                        l = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var r in e)
                        if ("default" !== r && Object.prototype.hasOwnProperty.call(e, r)) {
                            var o = l ? Object.getOwnPropertyDescriptor(e, r) : null;
                            o && (o.get || o.set) ? Object.defineProperty(a, r, o) : a[r] = e[r]
                        }
                    a.default = e, n && n.set(e, a);
                    return a
                }(n(667294)),
                O = a(n(156720)),
                I = a(n(969651)),
                N = a(n(637660)),
                T = n(808446),
                A = n(655241),
                x = a(n(321201));

            function L(e) {
                if ("function" != typeof WeakMap) return null;
                var t = new WeakMap,
                    n = new WeakMap;
                return (L = function(e) {
                    return e ? n : t
                })(e)
            }
            const D = {
                flexGrow: "tvf2evcx",
                flexShrink: "oq44ahr5",
                flexBasis: "lb5m6g5c",
                paddingBottom: "s9fl9ege"
            };

            function R(e, t) {
                var n, a;
                const {
                    onClose: L,
                    onMediaGallery: R
                } = e, B = (0, I.default)(), j = (0, x.default)(), W = (0, N.default)((() => new b.default)), F = (0, A.useModelValues)(e.chat, ["id", "groupMetadata"]);
                (0, T.useListener)(null === (n = F.groupMetadata) || void 0 === n ? void 0 : n.participants, ["add", "remove", "sort", "reset"], B);
                let G = null;
                R && (G = P.default.createElement(i.default, {
                    onMediaGallery: R,
                    chat: (0, w.unproxy)(F)
                }));
                const H = P.default.createElement(o.ChatInfoDrawerButtonsSection, null, P.default.createElement(p.DrawerButtonSimple, {
                    testid: "li-delete-broadcast",
                    icon: P.default.createElement(c.DeleteIcon, null),
                    color: "danger",
                    theme: "chat-info",
                    onClick: () => {
                        s.Cmd.deleteOrExitChat((0, w.unproxy)(F))
                    }
                }, _.fbt._("Delete broadcast list", null, {
                    hk: "3xAxXY"
                })));
                let V;
                (null === (a = F.groupMetadata) || void 0 === a ? void 0 : a.creation) ? (V = u.Clock.createdStr(F.groupMetadata.creation), V = P.default.createElement(k.TextDiv, {
                    theme: "small"
                }, V)) : V = null;
                const U = P.default.createElement(M.default, {
                    highlightSurface: S.PRIVACY_HIGHLIGHT_SURFACE_ENUM.INFO_SCREEN_BROADCAST,
                    onClick: () => {
                        if ((0, v.isPrivacyNarrativeV1Enabled)() && (0, C.shouldShowNewE2eInfoModal)((0, w.unproxy)(F))) {
                            const e = (0, E.getE2EFaqUrl)();
                            y.ModalManager.open(P.default.createElement(g.E2eInfoModalV2, {
                                highlightSurface: S.PRIVACY_HIGHLIGHT_SURFACE_ENUM.INFO_SCREEN_BROADCAST,
                                url: e
                            }))
                        } else y.ModalManager.open(P.default.createElement(h.default, {
                            highlightSurface: S.PRIVACY_HIGHLIGHT_SURFACE_ENUM.INFO_SCREEN_BROADCAST,
                            chatId: F.id,
                            e2eSubtype: "info_encrypted"
                        }))
                    },
                    text: _.fbt._("Messages are end-to-end encrypted. Click to learn more.", null, {
                        hk: "1iarlI"
                    }),
                    header: {
                        type: "encryption"
                    }
                });
                return P.default.createElement(d.default, {
                    ref: t,
                    key: "contact-info-modal",
                    theme: "striped"
                }, P.default.createElement(m.DrawerHeader, {
                    type: m.DRAWER_HEADER_TYPE.SMALL,
                    rtlFixIfOnDarwin: !0,
                    onCancel: () => {
                        L ? L() : null == j || j.requestDismiss()
                    }
                }, P.default.createElement(k.TextDiv, {
                    theme: "title"
                }, _.fbt._("Broadcast list info", null, {
                    hk: "3S4EgV"
                })), V), P.default.createElement(f.default, {
                    flatListControllers: [W.current]
                }, P.default.createElement("div", {
                    className: (0, O.default)(D)
                }, P.default.createElement(r.default, {
                    chat: (0, w.unproxy)(F)
                }), G, undefined, P.default.createElement(o.ChatInfoDrawerSection, null, U), P.default.createElement(l.default, {
                    chat: (0, w.unproxy)(F),
                    flatListController: W.current
                }), H)))
            }
            var B = (0, P.forwardRef)(R);
            t.default = B
        },
        896322: (e, t, n) => {
            "use strict";
            var a = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = b;
            var l = n(822652),
                r = n(464659),
                o = n(780549),
                i = n(877171),
                u = n(177938),
                s = n(581354),
                c = n(512938),
                d = n(459857),
                f = n(548360),
                p = function(e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || "object" != typeof e && "function" != typeof e) return {
                        default: e
                    };
                    var n = g(t);
                    if (n && n.has(e)) return n.get(e);
                    var a = {},
                        l = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var r in e)
                        if ("default" !== r && Object.prototype.hasOwnProperty.call(e, r)) {
                            var o = l ? Object.getOwnPropertyDescriptor(e, r) : null;
                            o && (o.get || o.set) ? Object.defineProperty(a, r, o) : a[r] = e[r]
                        }
                    a.default = e, n && n.set(e, a);
                    return a
                }(n(667294)),
                m = a(n(969651)),
                h = n(808446);

            function g(e) {
                if ("function" != typeof WeakMap) return null;
                var t = new WeakMap,
                    n = new WeakMap;
                return (g = function(e) {
                    return e ? n : t
                })(e)
            }
            const E = (0, c.FlatListFactory)();

            function b(e) {
                var t, n;
                let {
                    chat: a,
                    flatListController: c
                } = e;
                const g = (0, m.default)(),
                    b = null === (t = a.groupMetadata) || void 0 === t ? void 0 : t.participants;
                (0, h.useListener)(b, "add remove reset", g);
                const v = (0, p.useMemo)((() => b ? b.map((e => ({
                        itemKey: e.id.toString(),
                        participant: e,
                        height: 68
                    }))) : []), [b]),
                    y = (e, t) => {
                        (0, d.isMePrimary)(t.id) || (0, s.findChat)(t.id, "broadcastInfoRecipients").then((function(e) {
                            o.Cmd.openChatFromUnread(e).then((t => {
                                t && i.ComposeBoxActions.focus(e)
                            }))
                        }))
                    },
                    C = null !== (n = null == b ? void 0 : b.length) && void 0 !== n ? n : 0,
                    M = f.fbt._({
                        "*": "{count} recipients",
                        _1: "1 recipient"
                    }, [f.fbt._plural(C, "count")], {
                        hk: "3Uwuzx"
                    });
                return p.default.createElement(r.ChatInfoDrawerListSection, {
                    title: M
                }, p.default.createElement(E, {
                    flatListController: c,
                    direction: "vertical",
                    forceConsistentRenderCount: !1,
                    data: v,
                    renderItem: e => {
                        const {
                            participant: t
                        } = e, n = u.ContactCollection.gadd(t.id);
                        return p.default.createElement(l.Contact, {
                            contact: n,
                            theme: "chat-info",
                            admin: !!t.isAdmin,
                            onClick: y,
                            key: t.id.toString(),
                            waitIdle: !0
                        })
                    }
                }))
            }
            b.displayName = "BroadcastInfoRecipientsSection"
        },
        35644: (e, t, n) => {
            "use strict";
            var a = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = b;
            var l = n(306703),
                r = n(23641),
                o = a(n(969358)),
                i = n(690495),
                u = n(21645),
                s = n(180519),
                c = n(548360),
                d = a(n(667294)),
                f = a(n(156720)),
                p = a(n(969651)),
                m = n(808446),
                h = n(655241);
            const g = {
                    display: "p357zi0d",
                    justifyContent: "ac2vgrno",
                    marginBottom: "du8bjn1j"
                },
                E = {
                    lineHeight: "a4ywakfo",
                    marginTop: "g1eqewly"
                };

            function b(e) {
                var t, n;
                let {
                    chat: a
                } = e;
                const b = null === (t = a.groupMetadata) || void 0 === t ? void 0 : t.participants,
                    v = (0, h.useModelValues)(a.contact, ["name"]),
                    y = (0, p.default)();
                (0, m.useListener)(b, "add remove reset", y);
                const C = null !== (n = null == b ? void 0 : b.length) && void 0 !== n ? n : 0,
                    M = c.fbt._("Broadcast List", null, {
                        hk: "46AT9o"
                    }).toString() + " · " + c.fbt._({
                        "*": "{count} recipients",
                        _1: "1 recipient"
                    }, [c.fbt._plural(C, "count")], {
                        hk: "3Uwuzx"
                    }).toString(),
                    w = v.name ? d.default.createElement(u.Name, {
                        contact: a.contact,
                        selectable: !0
                    }) : c.fbt._("Untitled List", null, {
                        hk: "fYALp"
                    });
                return d.default.createElement(o.default, {
                    theme: "padding-large"
                }, d.default.createElement("div", {
                    className: (0, f.default)(g)
                }, d.default.createElement(r.DetailImage, {
                    id: a.id,
                    size: r.DetailImageSize.Large
                })), d.default.createElement(i.FlexColumn, {
                    align: "center"
                }, d.default.createElement(s.TextHeader, {
                    level: "2",
                    size: "24"
                }, w), d.default.createElement("div", {
                    className: (0, f.default)(E)
                }, d.default.createElement(l.SelectableSpan, {
                    dir: "auto",
                    selectable: !0
                }, d.default.createElement(s.TextSpan, {
                    size: "16",
                    color: "secondary"
                }, M)))))
            }
            b.displayName = "BroadcastInfoTopCard"
        },
        988808: (e, t, n) => {
            "use strict";
            var a = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = v;
            var l = n(464659),
                r = a(n(203528)),
                o = a(n(675383)),
                i = n(753233),
                u = n(714574),
                s = n(97858),
                c = n(180519),
                d = n(491805),
                f = n(596328),
                p = a(n(124928)),
                m = n(548360),
                h = a(n(667294)),
                g = (a(n(156720)), n(379811)),
                E = n(655241);
            const b = {
                whatsapp_url: {
                    color: "hafg4y3t"
                }
            };

            function v(e) {
                let {
                    contact: t
                } = e;
                const n = t.getStatus(),
                    {
                        status: a
                    } = (0, E.useModelValues)(n, ["status"]),
                    [v, y, C, M, w] = (0, g.useContactValues)(t.id, [u.getTextStatusString, u.getTextStatusEmoji, u.getTextStatusLastUpdateTime, u.getTextStatusExpiryTs, u.getTextStatusEphemeralDuration]),
                    k = (0, f.shouldDisplayTextStatus)(v, y, C, M, w);
                if (p.default.isPSA(t.id)) {
                    const e = (0, s.isBlueEnabled)() ? m.fbt._("Official chats from WhatsApp will always have a blue verified badge. And we'll never ask for your personal information.", null, {
                        hk: "Q5o0r"
                    }).toString() : m.fbt._('Official chats from WhatsApp will always have a green "verified" checkmark. And we\'ll never ask for your personal information.', null, {
                        hk: "8bwzI"
                    }).toString();
                    return h.default.createElement(l.ChatInfoDrawerSection, {
                        titleTestId: "section-about",
                        title: ""
                    }, h.default.createElement(c.TextSpan, {
                        theme: "title",
                        size: "16"
                    }, m.fbt._("Hi! Welcome to this official WhatsApp chat.", null, {
                        hk: "1fpFwJ"
                    }).toString(), h.default.createElement("br", null), m.fbt._("This is where you can get tips, see announcements, and hear about the newest features. Straight from us.", null, {
                        hk: "4gcJHK"
                    }).toString(), h.default.createElement("br", null), e), h.default.createElement("br", null), h.default.createElement("br", null), h.default.createElement(i.ExternalLink, {
                        href: "https://whatsapp.com/",
                        xstyle: b.whatsapp_url
                    }, "https://whatsapp.com/"))
                }
                if (!(0, d.receiveTextStatusEnabled)() && "" === a) return null;
                let S;
                return (0, d.receiveTextStatusEnabled)() ? !0 === k ? S = m.fbt._("Status", null, {
                    hk: "3Wqwz2"
                }) : (0, f.hasCustomAboutSet)(n) && (S = m.fbt._("About", null, {
                    hk: "4qoAfH"
                })) : S = m.fbt._("About", null, {
                    hk: "4qoAfH"
                }), h.default.createElement(l.ChatInfoDrawerSection, {
                    titleTestId: "section-about",
                    title: S
                }, h.default.createElement(c.TextSpan, {
                    theme: "title",
                    size: "16"
                }, (0, d.receiveTextStatusEnabled)() ? h.default.createElement(o.default, {
                    contactId: t.id
                }) : h.default.createElement(r.default, {
                    id: t.id
                })))
            }
            v.displayName = "ContactInfoAboutSection"
        },
        876588: (e, t, n) => {
            "use strict";
            var a = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = C;
            var l = n(700071),
                r = n(394164),
                o = n(464659),
                i = a(n(831584)),
                u = n(780549),
                s = n(174834),
                c = n(877171),
                d = n(701777),
                f = n(512938),
                p = n(714574),
                m = a(n(556869)),
                h = n(548360),
                g = function(e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || "object" != typeof e && "function" != typeof e) return {
                        default: e
                    };
                    var n = v(t);
                    if (n && n.has(e)) return n.get(e);
                    var a = {},
                        l = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var r in e)
                        if ("default" !== r && Object.prototype.hasOwnProperty.call(e, r)) {
                            var o = l ? Object.getOwnPropertyDescriptor(e, r) : null;
                            o && (o.get || o.set) ? Object.defineProperty(a, r, o) : a[r] = e[r]
                        }
                    a.default = e, n && n.set(e, a);
                    return a
                }(n(667294)),
                E = n(379811),
                b = a(n(524578));

            function v(e) {
                if ("function" != typeof WeakMap) return null;
                var t = new WeakMap,
                    n = new WeakMap;
                return (v = function(e) {
                    return e ? n : t
                })(e)
            }
            const y = (0, f.FlatListFactory)();

            function C(e) {
                let {
                    contact: t,
                    flatListController: n,
                    onClose: a
                } = e;
                const [f] = (0, E.useContactValues)(t.id, [p.getCommonGroups]), [v, C] = (0, g.useState)(!0);
                (0, g.useEffect)((() => {
                    (0, d.findCommonGroups)(t).catch((e => {
                        throw __LOG__(4, !0, new Error, !0)
                        `get from participants table failed`, SEND_LOGS("get from participants table failed when finding common groups: " + e), (0, m.default)("get from participants table failed")
                    }))
                }), []);
                const M = (0, b.default)(f, ["add", "remove"], (() => {
                        if (!f) return [];
                        let e = f;
                        return e.length > o.INFO_DRAWER_MAX_ROWS && v && (e = e.slice(0, o.INFO_DRAWER_MAX_ROWS)), e.map((e => ({
                            itemKey: e.id.toString(),
                            chat: e,
                            height: (0, s.shouldShowNewSubgroupIdentity)(e.groupMetadata) ? r.SUBGROUP_V2_CHAT_CELL_HEIGHT : 68
                        })))
                    }), [v]),
                    w = () => {
                        C(!1)
                    },
                    k = (e, t) => {
                        u.Cmd.openChatFromUnread(t).then((e => {
                            e && c.ComposeBoxActions.focus(t)
                        })), a()
                    };
                if (!f || 0 === f.length) return null;
                let S;
                if (f.length > o.INFO_DRAWER_MAX_ROWS && v) {
                    const e = f.length - o.INFO_DRAWER_MAX_ROWS;
                    S = g.default.createElement(i.default, {
                        numMore: e,
                        onClick: w
                    })
                }
                const _ = h.fbt._({
                    "*": "{number} groups in common",
                    _1: "1 group in common"
                }, [h.fbt._plural(f.length, "number")], {
                    hk: "2bl4a5"
                });
                return g.default.createElement(o.ChatInfoDrawerListSection, {
                    titleTestId: "section-common-groups",
                    title: _
                }, g.default.createElement(y, {
                    flatListController: n,
                    direction: "vertical",
                    forceConsistentRenderCount: !1,
                    data: M,
                    renderItem: e => {
                        const {
                            chat: t
                        } = e;
                        return g.default.createElement(l.Chat, {
                            chat: t,
                            theme: "chat-info",
                            mode: l.Mode.INFO,
                            onClick: k,
                            key: t.id.toString(),
                            showCommunityInfo: !0
                        })
                    }
                }), S)
            }
            C.displayName = "ContactInfoCommonGroupsSection"
        },
        655237: (e, t, n) => {
            "use strict";
            var a = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var l = a(n(967154)),
                r = a(n(81109)),
                o = n(122583),
                i = n(15842),
                u = n(632157),
                s = n(174662),
                c = n(984330),
                d = a(n(853417)),
                f = a(n(973366)),
                p = n(72696),
                m = n(354458),
                h = a(n(498692)),
                g = a(n(983345)),
                E = a(n(463954)),
                b = a(n(753602)),
                v = a(n(906015)),
                y = n(815651),
                C = n(745309),
                M = n(542358),
                w = a(n(718796)),
                k = n(713464),
                S = n(351053),
                _ = n(738501),
                P = a(n(306007)),
                O = n(464659),
                I = a(n(740681)),
                N = n(998123),
                T = n(698867),
                A = n(780549),
                x = n(660666),
                L = a(n(988808)),
                D = n(201833),
                R = n(551181),
                B = a(n(876588)),
                j = a(n(700829)),
                W = a(n(109007)),
                F = a(n(366773)),
                G = a(n(305122)),
                H = a(n(533159)),
                V = a(n(704714)),
                U = a(n(928008)),
                z = n(834110),
                q = n(431037),
                Y = a(n(908081)),
                K = a(n(324093)),
                Z = n(36045),
                X = n(568550),
                Q = n(626194),
                $ = n(900316),
                J = a(n(969358)),
                ee = n(71957),
                te = a(n(570834)),
                ne = n(714574),
                ae = n(20194),
                le = a(n(344460)),
                re = n(917504),
                oe = n(609181),
                ie = n(114850),
                ue = a(n(832897)),
                se = a(n(499717)),
                ce = a(n(213393)),
                de = n(932523),
                fe = n(242677),
                pe = a(n(335748)),
                me = n(10586),
                he = n(163139),
                ge = n(220584),
                Ee = n(180519),
                be = n(625786),
                ve = n(390737),
                ye = n(508228),
                Ce = n(459857),
                Me = n(887222),
                we = n(455915),
                ke = a(n(124928)),
                Se = n(548360),
                _e = function(e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || "object" != typeof e && "function" != typeof e) return {
                        default: e
                    };
                    var n = Ae(t);
                    if (n && n.has(e)) return n.get(e);
                    var a = {},
                        l = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var r in e)
                        if ("default" !== r && Object.prototype.hasOwnProperty.call(e, r)) {
                            var o = l ? Object.getOwnPropertyDescriptor(e, r) : null;
                            o && (o.get || o.set) ? Object.defineProperty(a, r, o) : a[r] = e[r]
                        }
                    a.default = e, n && n.set(e, a);
                    return a
                }(n(667294)),
                Pe = a(n(156720)),
                Oe = n(379811),
                Ie = a(n(637660)),
                Ne = a(n(558532)),
                Te = a(n(321201));

            function Ae(e) {
                if ("function" != typeof WeakMap) return null;
                var t = new WeakMap,
                    n = new WeakMap;
                return (Ae = function(e) {
                    return e ? n : t
                })(e)
            }
            const xe = {
                body: {
                    flexGrow: "tvf2evcx",
                    flexShrink: "oq44ahr5",
                    flexBasis: "lb5m6g5c",
                    paddingBottom: "s9fl9ege"
                },
                lastSectionRow: {
                    marginBottom: "brac1wpa"
                }
            };

            function Le(e) {
                let {
                    catalogContext: t,
                    contact: n,
                    onProductCatalog: a,
                    onProductDetail: l
                } = e;
                const r = k.CatalogCollection.get(n.id);
                if (!r) return null;
                let o = "",
                    i = !1;
                (0, p.canSeeBizProfileV3)() && (o = Se.fbt._("See all", null, {
                    hk: "3dTwyT"
                }), i = !0);
                const {
                    session: u
                } = t;
                return u.isAccidental() ? null : (0, M.hasShop)(n.businessProfile) ? (0, p.bannedShopsEnabled)() && (0, M.isShopBanned)(n.businessProfile) ? null : _e.default.createElement(pe.default, {
                    businessProfile: n.businessProfile,
                    catalog: r,
                    subtitle: o,
                    hideIncompleteRows: i
                }) : _e.default.createElement(ce.default, {
                    onProductDetail: l,
                    onProductCatalog: a,
                    catalog: r,
                    subtitle: o,
                    hideIncompleteRows: i,
                    shouldLog: !0
                })
            }

            function De(e, t) {
                const {
                    contact: n,
                    onVerification: a,
                    onClose: M,
                    onBack: ce,
                    onProductDetail: pe,
                    onProductCatalog: Ae,
                    canLogQpl: De = !0
                } = e, Re = (0, Te.default)(), Be = (0, _e.useContext)(X.DrawerContext), [je, We, Fe, Ge, He, Ve, Ue, ze, qe, Ye, Ke, Ze, Xe, Qe, $e, Je] = (0, Oe.useContactValues)(e.contact.id, [x.getId, ne.getFormattedName, ne.getFormattedUser, ne.getFormattedShortName, x.getIsBusiness, x.getIsEnterprise, x.getIsMyContact, ne.getCommonGroups, x.getShowBusinessCheckmarkAsPrimary, x.getShowBusinessCheckmarkAsSecondary, x.getVerifiedName, x.getVerifiedLevel, x.getName, x.getNotifyName, x.getLabels, ne.getPhoneNumber]), [et, tt, nt, at, lt, rt, ot, it, ut] = (0, Oe.useContactValues)(e.contact.id, [ne.getBusinessCatalog, x.getIsMe, x.getStatusMute, ne.getDisplayName, ne.getShareOwnPn, x.getRequestedPnTimestamp, x.getCanRequestPhoneNumber, x.getIsIAS, x.getIsCAPISupportAccount]), st = (0, Ie.default)((() => new te.default)), ct = (0, _e.useRef)(!1), [dt, ft] = (0, _e.useState)(100), pt = (0, _e.useMemo)((() => S.ChatCollection.get(je)), [je]), mt = (0, ye.useBusinessProfile)(je, ["isBizBot1p", "isBizBot3p", "stale", "isProfileLinked", "coverPhoto"]), ht = (0, m.isBizBot3pEnabled)() && !0 === (null == mt ? void 0 : mt.isBizBot3p), gt = (0, m.isBizBot1pEnabled)() && !0 === (null == mt ? void 0 : mt.isBizBot1p), Et = tt;
                (0, _e.useEffect)((() => {
                    mt && !mt.stale && et && k.CatalogCollection.findCarouselCatalog(je).catch((0, o.filteredCatch)(c.ServerStatusCodeError, (() => {
                        __LOG__(3)
                        `Failed to fetch product catalog in contact drawer from server`
                    }))), (0, me.getFanOutListJob)([je, (0, Ce.assertGetMe)()]).then((e => {
                        (0, re.ensureE2ESessions)(e)
                    }));
                    const {
                        session: t
                    } = (0, de.getProductCatalogContext)(Be);
                    if (t.isAccidental()) $.DrawerManager.setDrawerContext("right", (0, de.buildProductCatalogContext)(new fe.ProductCatalogSession, (0, z.getMaybeBizPlatformForLogging)(je.toString()), we.CATALOG_ENTRY_POINT.CATALOG_ENTRY_POINT_PROFILE));
                    else if (He && (0, p.canSeeBizProfileV3)()) {
                        const t = je === (0, Ce.getMaybeMeUser)(),
                            {
                                profileEntryPoint: n
                            } = e;
                        !t && n && (0, y.logProfileImpression)((0, de.getProductCatalogSessionId)(Be), n, !!(null == mt ? void 0 : mt.isProfileLinked), !!(null == mt ? void 0 : mt.coverPhoto))
                    }
                    De && mt && (0, oe.qplEndProfileView)(i.QuickLogActionType.SUCCESS)
                }), []), (0, _e.useEffect)((() => {
                    if ((0, p.btmThreadsLoggingEnabled)()) {
                        var e;
                        const t = null === (e = (0, Ce.getMaybeMeUser)()) || void 0 === e ? void 0 : e.equals(je),
                            {
                                session: n
                            } = (0, de.getProductCatalogContext)(Be);
                        n.isAccidental() || t || !(null == pt ? void 0 : pt.id) || (0, T.handleActivitiesForChatThreadLogging)([{
                            activityType: "profileViews",
                            ts: (0, u.unixTime)(),
                            chatId: pt.id
                        }])
                    }
                }), []), (0, Ne.default)((() => {
                    const {
                        session: e
                    } = (0, de.getProductCatalogContext)(Be);
                    e.isAccidental() || He && (0, p.canSeeBizProfileV3)() && (0, y.logProfileExit)((0, de.getProductCatalogSessionId)(Be), dt, null == mt ? void 0 : mt.isProfileLinked, !!(null == mt ? void 0 : mt.coverPhoto))
                }));
                const bt = () => {
                        a()
                    },
                    vt = () => {
                        M ? M() : null == Re || Re.requestDismiss()
                    },
                    yt = () => {
                        ce && ce()
                    },
                    Ct = e => {
                        if (!ct.current && !ke.default.isPSA(je)) return void ve.ToastManager.open(_e.default.createElement(be.Toast, {
                            msg: Se.fbt._("No profile photo", null, {
                                hk: "2bdeTO"
                            })
                        }));
                        const t = e.target;
                        ie.ModalManager.openMedia(_e.default.createElement(se.default, {
                            contact: n,
                            profilePicThumb: n.getProfilePicThumb(),
                            animateBorderRadius: !0,
                            getZoomNode: e => {
                                e(t)
                            }
                        }), {
                            transition: "profile-viewer",
                            uim: Re
                        })
                    },
                    Mt = () => {
                        ct.current = !0
                    },
                    wt = e => {
                        (0, Me.qplStartProductView)("ContactInfo"), pe(e)
                    },
                    kt = e => {
                        const t = Math.floor(100 * (1 + e.currentTarget.scrollTop / e.currentTarget.offsetHeight));
                        t > dt && ft(t)
                    },
                    St = Ve ? null : _e.default.createElement(B.default, {
                        contact: n,
                        onClose: vt,
                        flatListController: st.current
                    });
                let _t = null;
                e.onMediaGallery && pt && (_t = _e.default.createElement(I.default, {
                    chat: pt,
                    onMediaGallery: e.onMediaGallery
                }));
                let Pt = null,
                    Ot = null;
                if (n && He && mt && et) {
                    const e = _e.default.createElement(Le, {
                        contact: n,
                        catalogContext: (0, de.getProductCatalogContext)(Be),
                        onProductDetail: wt,
                        onProductCatalog: Ae
                    });
                    (0, p.canSeeBizProfileV3)() ? Ot = e: Pt = e
                }
                const It = pt && pt.mute.canMute() ? _e.default.createElement(ue.default, {
                        chat: pt,
                        mute: pt.mute
                    }) : null,
                    Nt = ut && (0, s.getIsSagaEnabled)() ? _e.default.createElement(H.default, null) : null;
                let Tt, At;
                if (e.onStarred && (Tt = _e.default.createElement(G.default, {
                        onStarred: e.onStarred
                    })), pt && (pt.hasKeptMsgs() || (0, _.isEphemeralSettingOn)(pt))) {
                    const t = _e.default.createElement(Ee.TextSpan, {
                            theme: "title",
                            size: "16"
                        }, Se.fbt._("Kept Messages", null, {
                            hk: "w8m3u"
                        })),
                        n = _e.default.createElement(ae.KeepInChatIcon, {
                            color: ge.SvgColorProp.SECONDARY,
                            height: 20
                        });
                    At = _e.default.createElement(O.ChatInfoDrawerSection, {
                        titleTestId: "section-kept-messages",
                        xstyle: xe.lastSectionRow
                    }, _e.default.createElement(P.default, {
                        testid: "block-kept-messages",
                        side: "chevron",
                        icon: n,
                        onClick: e.onKept,
                        title: t
                    }))
                }
                const xt = pt && (0, _.shouldShowEphemeralSetting)(pt) ? _e.default.createElement(ee.EphemeralSettingRow, {
                    onClick: e.onEphemeral,
                    chat: pt,
                    testid: "contact-info-dm-setting-row"
                }) : null;
                let Lt = null;
                ke.default.isPSA(je) ? Lt = _e.default.createElement(U.default, null) : je.isBot() || ht || (Lt = _e.default.createElement(j.default, {
                    contact: (0, he.unproxy)(n),
                    onVerificationClick: bt
                }));
                const Dt = je.isLid() && null == Je,
                    Rt = je.isLid(),
                    Bt = pt && Rt ? _e.default.createElement(N.PhoneNumberVisibilityIndicator1On1, {
                        chat: pt
                    }) : null;
                let jt;
                gt ? jt = _e.default.createElement(D.ContactInfoBizBot1pSection, null) : ht && (jt = _e.default.createElement(R.ContactInfoBizBot3pSection, null));
                const Wt = _e.default.createElement(O.ChatInfoDrawerSection, null, It, Nt, xt, jt, Lt, Bt),
                    Ft = !He,
                    Gt = Ft || it || ut || je.isBot() || ht ? null : _e.default.createElement(g.default, {
                        contact: (0, he.unproxy)(n)
                    });
                let Ht = null;
                je.isBot() ? Ht = _e.default.createElement(h.default, {
                    contact: (0, he.unproxy)(n)
                }) : Ft && (Ht = _e.default.createElement(L.default, {
                    contact: (0, he.unproxy)(n)
                }));
                let Vt = null;
                ht && mt && (Vt = _e.default.createElement(d.default, {
                    businessProfile: (0, he.unproxy)(mt)
                }));
                let Ut = null;
                (0, m.isBizBot3pEnabled)() && mt && (Ut = _e.default.createElement(f.default, {
                    businessProfile: (0, he.unproxy)(mt)
                }));
                const zt = (0, p.canSeeBizProfileV3)() && He && mt ? _e.default.createElement(w.default, {
                    contact: n,
                    onProfilePicLoad: Mt,
                    onProfilePicClick: Ct,
                    onOpenStatus: () => {
                        (0, y.logStatusClick)((0, de.getProductCatalogSessionId)(Be), null == mt ? void 0 : mt.isProfileLinked, !!(null == mt ? void 0 : mt.coverPhoto))
                    },
                    businessProfile: (0, he.unproxy)(mt),
                    onProductCatalog: Ae,
                    isPhoneNumberHidden: Dt
                }) : _e.default.createElement(V.default, {
                    contact: n,
                    onDetailImageLoad: Mt,
                    onDetailImageClick: Ct,
                    isMessageYourselfChat: Et,
                    isPhoneNumberHidden: Dt
                });
                let qt, Yt, Kt, Zt = null;
                var Xt;
                He && mt && ((0, p.canSeeBizProfileV3)() && mt ? (Zt = je.isBot() ? null : _e.default.createElement(v.default, {
                    businessProfile: (0, he.unproxy)(mt),
                    showDescription: !ht
                }), qt = it || ut ? null : _e.default.createElement(E.default, {
                    contact: n
                }), (null !== (Xt = null == $e ? void 0 : $e.length) && void 0 !== Xt ? Xt : 0) > 0 && (Yt = _e.default.createElement(J.default, {
                    theme: "padding"
                }, _e.default.createElement(le.default, {
                    labels: $e,
                    theme: "standalone"
                }))), Kt = kt) : mt && (Zt = _e.default.createElement(C.BusinessProfile, {
                    contact: n,
                    businessProfile: (0, he.unproxy)(mt)
                })));
                const Qt = {
                    title: Se.fbt._("Contact info", null, {
                        hk: "LUJtH"
                    }),
                    type: Q.DRAWER_HEADER_TYPE.SMALL,
                    rtlFixIfOnDarwin: !0,
                    focusBackOrCancel: !0
                };
                let $t, Jt = {};
                return Jt = ce ? (0, r.default)({
                    onBack: yt
                }, Qt) : (0, r.default)({
                    onCancel: vt
                }, Qt), mt && !0 === mt.isProfileLinked && (0, p.bizLinkedAccountsEnabled)() && (0, p.canViewBizLinkedAccounts)() && ($t = _e.default.createElement(F.default, {
                    businessProfile: (0, he.unproxy)(mt),
                    rowTheme: "linked-account-consumer"
                })), _e.default.createElement(Y.default, {
                    ref: t,
                    key: "contact-info-modal",
                    theme: "striped",
                    testid: "chat-info-drawer",
                    tsNavigationData: {
                        surface: "contact-info-drawer"
                    }
                }, _e.default.createElement(Q.DrawerHeader, (0, l.default)({}, Jt, {
                    testid: "contact-info-header"
                })), _e.default.createElement(K.default, {
                    flatListControllers: [st.current],
                    onScroll: Kt
                }, _e.default.createElement("section", {
                    className: (0, Pe.default)(xe.body)
                }, zt, qt, pt ? _e.default.createElement(b.default, {
                    chat: pt
                }) : null, Vt, Ut, Yt, Ot, Zt, $t, Pt, Ht, _t, Tt, At, Wt, Gt, undefined, !Et && St, !Et && _e.default.createElement(W.default, {
                    contact: n
                }), _e.default.createElement(O.ChatInfoDrawerButtonsSection, null, pt ? _e.default.createElement(Z.DrawerButtonSimple, {
                    testid: "li-delete-chat",
                    icon: _e.default.createElement(q.DeleteIcon, null),
                    color: "danger",
                    onClick: () => {
                        const e = S.ChatCollection.assertGet(je);
                        A.Cmd.deleteOrExitChatFromEntryPoint(e, 12)
                    },
                    theme: "chat-info"
                }, Se.fbt._("Delete chat", null, {
                    hk: "3Vq9G4"
                })) : null))))
            }
            Le.displayName = "ProductCatalogSection";
            var Re = (0, _e.forwardRef)(De);
            t.default = Re
        },
        700829: (e, t, n) => {
            "use strict";
            var a = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = v;
            var l = a(n(143589)),
                r = n(660666),
                o = n(753233),
                i = n(258105),
                u = n(729763),
                s = a(n(606037)),
                c = n(814843),
                d = n(35109),
                f = a(n(410731)),
                p = n(666836),
                m = a(n(637659)),
                h = a(n(571256)),
                g = n(548360),
                E = a(n(667294)),
                b = n(379811);

            function v(e) {
                const {
                    onVerificationClick: t
                } = e, [n, a] = (0, b.useContactValues)(e.contact.id, [r.getId, r.getPrivacyMode]), v = function(e, t) {
                    if ((0, l.default)(t.user)) return (0, c.isDataPrivacyPhase2NonE2eeEnabled)() ? {
                        text: E.default.createElement(m.default, {
                            text: g.fbt._("WhatsApp secures your messages and calls with this account.", null, {
                                hk: "2qouoq"
                            }),
                            handleClick: () => (0, o.openExternalLink)((0, i.getSupportChatSafetyFaqUrl)())
                        }),
                        header: {
                            type: "none"
                        },
                        onClick: () => (0, o.openExternalLink)((0, i.getSupportChatSafetyFaqUrl)())
                    } : {
                        text: g.fbt._("Click to learn how messages and calls are secured.", null, {
                            hk: "1UxhjE"
                        }),
                        header: {
                            type: "security"
                        },
                        onClick: () => {
                            (0, s.default)((0, p.SupportChatSecurityModalText)(), (0, i.getSupportChatSafetyFaqUrl)(), (0, p.SupportChatLearnMoreLinkText)())
                        }
                    };
                    switch (e) {
                        case d.ReducedPrivacyMode.E2EE:
                            return null;
                        case d.ReducedPrivacyMode.BSP:
                            {
                                const e = () => {
                                    (0, s.default)((0, u.formatBspAndFbModalText)(), (0, i.getE2EEnterpriseFaqUrl)())
                                };
                                return {
                                    text: (0, c.isDataPrivacyPhase2NonE2eeEnabled)() ? E.default.createElement(m.default, {
                                        text: g.fbt._("This business works with other companies to manage this chat.", null, {
                                            hk: "EMMPj"
                                        }),
                                        handleClick: e
                                    }) : g.fbt._("This business works with other companies to manage this chat. Click to learn more.", null, {
                                        hk: "VbOOZ"
                                    }),
                                    header: (0, c.isDataPrivacyPhase2NonE2eeEnabled)() ? {
                                        type: "none"
                                    } : {
                                        type: "security"
                                    },
                                    onClick: e
                                }
                            }
                        case d.ReducedPrivacyMode.FB:
                            {
                                let e;e = t.isIAS() ? (0, c.isDataPrivacyPhase2NonE2eeEnabled)() ? g.fbt._("WhatsApp Surveys uses a secure service from Meta to manage this chat.", null, {
                                    hk: "IYq5J"
                                }) : g.fbt._("WhatsApp Surveys uses a secure service from Meta to manage this chat. Click to learn more.", null, {
                                    hk: "49GQ04"
                                }) : (0, c.isDataPrivacyPhase2NonE2eeEnabled)() ? g.fbt._("This business uses a secure service from Meta to manage this chat.", null, {
                                    hk: "15An8Q"
                                }) : g.fbt._("This business uses a secure service from Meta to manage this chat. Click to learn more.", null, {
                                    hk: "3wvGOC"
                                });
                                const n = () => {
                                    (0, s.default)((0, u.formatFbModalText)(t.isIAS()), (0, i.getE2EEnterpriseFaqUrl)())
                                };
                                return {
                                    text: E.default.createElement(m.default, {
                                        text: e,
                                        handleClick: (0, c.isDataPrivacyPhase2NonE2eeEnabled)() ? n : null
                                    }),
                                    header: (0, c.isDataPrivacyPhase2NonE2eeEnabled)() ? {
                                        type: "none"
                                    } : {
                                        type: "security"
                                    },
                                    onClick: n
                                }
                            }
                    }
                }((0, d.getReducedPrivacyMode)(a), n);
                if (v) return E.default.createElement(f.default, {
                    header: v.header,
                    text: v.text,
                    onClick: v.onClick
                });
                const y = h.default.isVoiceCallEnabled() || h.default.isVideoCallEnabled() ? g.fbt._("Messages and calls are end-to-end encrypted. Click to verify.", null, {
                    hk: "GtGQH"
                }) : g.fbt._("Messages are end-to-end encrypted. Click to verify.", null, {
                    hk: "1AqhWR"
                });
                return E.default.createElement(f.default, {
                    onClick: t,
                    text: y,
                    header: {
                        type: "encryption"
                    }
                })
            }
            v.displayName = "ContactInfoEncryptionSection"
        },
        109007: (e, t, n) => {
            "use strict";
            var a = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = I;
            var l = a(n(208423)),
                r = n(547979),
                o = n(923092),
                i = n(400436),
                u = n(351053),
                s = n(464659),
                c = n(103440),
                d = n(660666),
                f = n(36045),
                p = a(n(395767)),
                m = n(714574),
                h = n(114850),
                g = n(21645),
                E = a(n(179197)),
                b = a(n(338695)),
                v = n(383296),
                y = n(949094),
                C = n(453603),
                M = n(519738),
                w = n(508228),
                k = n(369084),
                S = a(n(124928)),
                _ = n(548360),
                P = a(n(667294)),
                O = n(379811);

            function I(e) {
                var t;
                const {
                    contact: n
                } = e, [a, I, N, T, A, x, L] = (0, O.useContactValues)(e.contact.id, [d.getId, m.getDisplayName, d.getIsBusiness, m.getIsContactBlocked, d.getIsIAS, d.getIsMyContact, d.getIsCAPISupportAccount]), D = P.default.createElement(g.Name, {
                    contact: e.contact,
                    skipCheckMark: !0
                }), {
                    isBizBot3p: R = !1
                } = null !== (t = (0, w.useBusinessProfile)(a, ["isBizBot3p"])) && void 0 !== t ? t : {};
                let B = null;
                if (!a.isBot())
                    if (T) {
                        const t = R ? _.fbt._("Unblock AI", null, {
                            hk: "1XpdlR"
                        }) : _.fbt._("Unblock {contact_name}", [_.fbt._param("contact_name", D)], {
                            hk: "1fZZEx"
                        });
                        B = P.default.createElement(f.DrawerButtonSimple, {
                            testid: "li-unblock",
                            color: "success",
                            icon: P.default.createElement(y.SettingsBlockedIcon, {
                                directional: !0
                            }),
                            onClick: () => (0, o.handleUnblock)(e.contact, i.BlockEntryPoint.Profile),
                            theme: "chat-info"
                        }, t)
                    } else {
                        const t = R ? _.fbt._("Block AI", null, {
                            hk: "1YqRKh"
                        }) : _.fbt._("Block {contact_name}", [_.fbt._param("contact_name", D)], {
                            hk: "3lECdx"
                        });
                        B = P.default.createElement(f.DrawerButtonSimple, {
                            testid: "li-block",
                            color: "danger",
                            icon: P.default.createElement(y.SettingsBlockedIcon, {
                                directional: !0
                            }),
                            onClick: () => {
                                const t = () => {
                                    const t = u.ChatCollection.get(a);
                                    if (null == t ? void 0 : t.isPSA) {
                                        const e = t.msgs.last();
                                        (0, k.logChatPSARemove)(e, 1, 1)
                                    }(0, r.blockContact)({
                                        contact: e.contact,
                                        blockEntryPoint: i.BlockEntryPoint.Profile
                                    }), h.ModalManager.close()
                                };
                                let o = P.default.createElement(c.ConfirmPopup, {
                                    onOK: t,
                                    okText: (0, p.default)("Block"),
                                    onCancel: () => h.ModalManager.close(),
                                    title: _.fbt._("Block {contact_name}?", [_.fbt._param("contact_name", D)], {
                                        hk: "26yDKy"
                                    })
                                }, _.fbt._("Blocked contacts will no longer be able to call you or send you messages.", null, {
                                    hk: "3ioCkx"
                                }));
                                S.default.isPSA(a) ? o = P.default.createElement(E.default, {
                                    onBlock: t,
                                    onCancel: () => h.ModalManager.close()
                                }) : N && (o = P.default.createElement(l.default, {
                                    contact: n,
                                    blockEntryPoint: i.BlockEntryPoint.Profile,
                                    withReport: !1
                                })), h.ModalManager.open(o)
                            },
                            theme: "chat-info"
                        }, t)
                    }
                let j = A || L ? _.fbt._("Report", null, {
                    hk: "2SQkZ4"
                }) : _.fbt._("Report business", null, {
                    hk: "2Tvnn8"
                });
                N || (j = _.fbt._("Report {contact_name}", [_.fbt._param("contact_name", D)], {
                    hk: "3Dqyjo"
                })), R && (j = _.fbt._("Report AI", null, {
                    hk: "22W5Ky"
                }));
                const W = S.default.isPSA(a) || a.isBot() ? null : P.default.createElement(f.DrawerButtonSimple, {
                    testid: "li-report-spam",
                    color: "danger",
                    icon: P.default.createElement(M.ThumbsDownIcon, null),
                    onClick: () => {
                        const t = () => {
                                const t = u.ChatCollection.get(e.contact.id);
                                t && (0, v.sendReport)({
                                    chat: t,
                                    spamFlow: C.SpamFlow.AccountInfoReport
                                }), h.ModalManager.close()
                            },
                            n = () => {
                                const t = u.ChatCollection.get(e.contact.id);
                                t && (0, v.sendSpamBlockClear)(t, C.SpamFlow.AccountInfoReport), h.ModalManager.close()
                            };
                        h.ModalManager.open(R ? P.default.createElement(b.default, {
                            isBizBot3p: !0,
                            isMessage: !1,
                            onReport: t,
                            onReportBlockClear: n,
                            onCancel: () => h.ModalManager.close()
                        }) : P.default.createElement(b.default, {
                            isMessage: !1,
                            isBusiness: e.contact.isBusiness,
                            isGroupChat: !1,
                            onReport: t,
                            onReportBlockClear: n,
                            onCancel: () => h.ModalManager.close()
                        }))
                    },
                    theme: "chat-info"
                }, j);
                return P.default.createElement(s.ChatInfoDrawerButtonsSection, null, B, W)
            }
            I.displayName = "ContactInfoIntegritySection"
        },
        305122: (e, t, n) => {
            "use strict";
            var a = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = d;
            var l = a(n(306007)),
                r = n(464659),
                o = n(128754),
                i = n(220584),
                u = n(180519),
                s = n(548360),
                c = a(n(667294));

            function d(e) {
                let {
                    onStarred: t
                } = e;
                const n = c.default.createElement(u.TextSpan, {
                        theme: "title",
                        size: "16"
                    }, s.fbt._("Starred messages", null, {
                        hk: "4wVbNG"
                    })),
                    a = c.default.createElement(o.StarIcon, {
                        color: i.SvgColorProp.SECONDARY,
                        height: 20
                    });
                return c.default.createElement(r.ChatInfoDrawerSection, {
                    titleTestId: "section-starred-messages"
                }, c.default.createElement(l.default, {
                    testid: "block-starred-messages",
                    side: "chevron",
                    icon: a,
                    onClick: t,
                    title: n
                }))
            }
            d.displayName = "ContactInfoMessagesSection"
        },
        836513: (e, t, n) => {
            "use strict";
            var a = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = g;
            var l = a(n(196554)),
                r = n(312043),
                o = n(753233),
                i = n(258105),
                u = n(690495),
                s = n(220584),
                c = n(180519),
                d = n(548360),
                f = a(n(667294));
            a(n(156720));
            const p = f.default.createElement(r.DialpadIcon, {
                    directional: !0,
                    color: s.SvgColorProp.SECONDARY
                }),
                m = () => {
                    const e = (0, i.getPhoneNumberHidingFaqUrl)();
                    (0, o.openExternalLink)(e)
                },
                h = {
                    container: {
                        alignItems: "gndfcl4n",
                        backgroundColor: "f6ipylw5",
                        borderTopStartRadius: "bbr44loe",
                        borderTopEndRadius: "ooj5yc5b",
                        borderBottomEndRadius: "m8i16etx",
                        borderBottomStartRadius: "cw0ivh8j",
                        display: "p357zi0d",
                        marginTop: "fgtikrv0",
                        marginEnd: "k1jo73ug",
                        marginBottom: "iyjcf3gk",
                        marginStart: "isfiuinm",
                        width: "c0boj6n4",
                        height: "q1n4p668",
                        maxWidth: "l2o74p5l",
                        paddingStart: "nu34rnf1",
                        paddingEnd: "ft2m32mm",
                        lineHeight: "erpdyial"
                    },
                    text: {
                        color: "pm5hny62",
                        marginTop: "m3ct2rho",
                        marginEnd: "k1jo73ug",
                        marginBottom: "ec1z5skj",
                        marginStart: "isfiuinm",
                        wordBreak: "cw3vfol9",
                        overflowWrap: "fd365im1"
                    },
                    item: {
                        marginStart: "p3lsiedt",
                        marginEnd: "q471nw87",
                        paddingTop: "qomlamqu",
                        paddingEnd: "lnjlmjd6",
                        paddingBottom: "bxcbqipq",
                        paddingStart: "mc6o24uu"
                    }
                };

            function g() {
                return f.default.createElement(u.FlexRow, {
                    xstyle: h.container
                }, f.default.createElement(u.FlexColumn, {
                    xstyle: h.item
                }, p), f.default.createElement(u.FlexColumn, {
                    xstyle: [h.text, h.item]
                }, f.default.createElement(c.TextSpan, {
                    testid: "contact-info-pnh-info"
                }, d.fbt._("This person's phone number is not shared in this chat. {=m2}", [d.fbt._implicitParam("=m2", f.default.createElement(l.default, {
                    testid: "contact-info-pnh-learn-more",
                    onClick: m
                }, d.fbt._("Learn more", null, {
                    hk: "t6HJf"
                })))], {
                    hk: "3CEKuh"
                }))))
            }
            g.displayName = "ContactInfoPhoneNumberHidden"
        },
        533159: (e, t, n) => {
            "use strict";
            var a = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = f;
            var l = n(970039),
                r = a(n(306007)),
                o = n(114850),
                i = a(n(735848)),
                u = n(220584),
                s = n(180519),
                c = n(548360),
                d = a(n(667294));

            function f() {
                return d.default.createElement(r.default, {
                    onClick: () => o.ModalManager.open(d.default.createElement(i.default, null)),
                    icon: d.default.createElement(l.AiSignalIcon, {
                        color: u.SvgColorProp.SECONDARY,
                        height: 20
                    }),
                    title: d.default.createElement(s.WDSTextTitle, null, c.fbt._("Meta AI", null, {
                        hk: "1xXGQM"
                    })),
                    secondaryTitle: d.default.createElement(s.WDSTextMuted, null, c.fbt._("WhatsApp Support uses Meta AI to generate some messages in this chat.", null, {
                        hk: "ApQaP"
                    }))
                })
            }
            f.displayName = "ContactInfoSagaSection"
        },
        704714: (e, t, n) => {
            "use strict";
            var a = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = H;
            var l = n(287461),
                r = n(152832),
                o = n(351053),
                i = n(553662),
                u = a(n(983098)),
                s = a(n(9729)),
                c = n(891502),
                d = n(780549),
                f = n(877171),
                p = n(177938),
                m = n(614921),
                h = n(660666),
                g = a(n(836513)),
                E = n(215406),
                b = n(306703),
                v = n(23641),
                y = n(805774),
                C = a(n(969358)),
                M = n(581354),
                w = n(690495),
                k = a(n(344460)),
                S = n(114850),
                _ = n(21645),
                P = n(417016),
                O = a(n(755140)),
                I = n(163139),
                N = n(180519),
                T = n(676345),
                A = n(129417),
                x = n(96520),
                L = a(n(961745)),
                D = n(126246),
                R = a(n(124928)),
                B = n(931019),
                j = n(548360),
                W = a(n(667294)),
                F = a(n(156720));
            const G = {
                avatar: {
                    display: "p357zi0d",
                    justifyContent: "ac2vgrno",
                    marginBottom: "pz0xruzv"
                },
                secondaryWrapper: {
                    lineHeight: "a4ywakfo",
                    marginTop: "qt60bha0"
                },
                contactName: {
                    textAlign: "qfejxiq4"
                }
            };

            function H(e) {
                let t, {
                    contact: n,
                    isMessageYourselfChat: a,
                    isPhoneNumberHidden: l,
                    onDetailImageClick: r,
                    onDetailImageLoad: o
                } = e;
                const i = j.fbt._("Official WhatsApp Account", null, {
                        hk: "2cEUzF"
                    }),
                    u = null != n.phoneNumber ? p.ContactCollection.get(n.phoneNumber) : null;
                if (R.default.isPSA(n.id)) t = i;
                else if ((0, h.getIsMyContact)(n)) t = (0, B.widToFormattedUser)(n.id);
                else if (n.id.isLid() && null != u && (0, h.getIsMyContact)(u)) t = (0, B.widToFormattedUser)(n.phoneNumber);
                else {
                    const e = (0, h.getNotifyName)(n);
                    null != e && (t = `~${e}`)
                }
                const s = null != n.username && (n.id.isLid() && null != n.phoneNumber || !n.id.isLid()) ? W.default.createElement("div", {
                    className: (0, F.default)(G.secondaryWrapper)
                }, W.default.createElement(b.SelectableSpan, {
                    dir: "auto",
                    selectable: !0
                }, W.default.createElement(N.TextSpan, {
                    size: "16",
                    color: "secondary"
                }, null != n.username && `@${n.username}`))) : null;
                return W.default.createElement(C.default, {
                    theme: "padding-large"
                }, W.default.createElement("div", {
                    className: (0, F.default)(G.avatar)
                }, W.default.createElement(v.DetailImage, {
                    id: n.id,
                    size: v.DetailImageSize.Large,
                    loader: !0,
                    onLoad: o,
                    onClick: r,
                    quality: v.DetailImageQuality.High
                })), W.default.createElement(w.FlexColumn, {
                    align: "center"
                }, W.default.createElement(N.TextHeader, {
                    level: "2",
                    size: "24",
                    xstyle: G.contactName
                }, W.default.createElement(_.Name, {
                    testid: "contact-info-subtitle",
                    contact: n,
                    showMessageYourselfName: a,
                    selectable: !0,
                    breakWord: !0,
                    checkmarkLarge: !0
                })), null != t && W.default.createElement("div", {
                    className: (0, F.default)(G.secondaryWrapper)
                }, W.default.createElement(b.SelectableSpan, {
                    dir: "auto",
                    selectable: !0
                }, W.default.createElement(N.TextSpan, {
                    size: "16",
                    color: "secondary"
                }, t))), (0, A.usernameDisplayedEnabled)() && s), l && W.default.createElement(g.default, null), !a && W.default.createElement(V, {
                    contact: n,
                    displayRequestPnButton: l
                }), W.default.createElement(k.default, {
                    labels: n.labels
                }))
            }

            function V(e) {
                let {
                    contact: t,
                    displayRequestPnButton: n
                } = e;
                const a = (0, s.default)((0, I.unproxy)(t));
                const p = () => {
                        (0, M.findChat)(t.id, "chatInfoTopCard").then((e => {
                            d.Cmd.openChatFromUnread(e).then((t => {
                                t && f.ComposeBoxActions.focus(e)
                            }))
                        }))
                    },
                    g = () => {
                        (0, m.showEditContactModal)(t)
                    },
                    b = !(!a.isVideoCallEnabled && !a.isVoiceCallEnabled || R.default.isPSA(t.id)) && W.default.createElement(W.default.Fragment, null, W.default.createElement(u.default, {
                        Icon: x.VoiceCallFilledIcon,
                        iconWidth: 19,
                        label: j.fbt._("Audio", null, {
                            hk: "1b375N"
                        }),
                        testid: "contact-action voice-call-button",
                        xstyle: [T.uiMargin.start16, T.uiMargin.end16],
                        disabled: !a.canStartVoiceCall,
                        onClick: () => {
                            const e = t.id.isLid() ? t.phoneNumber : t.id;
                            if ((0, P.shouldDisplayPhoneNumberHidingModal)(t))(0, P.displayPhoneNumberHidingModal)(t, !1);
                            else if (null != e) {
                                var n;
                                null === (n = L.default.Voip) || void 0 === n || n.callStart(e, !1)
                            }
                        }
                    }), W.default.createElement(u.default, {
                        Icon: c.ChatInfoVideoIcon,
                        label: j.fbt._("Video", null, {
                            hk: "3zMUsJ"
                        }),
                        testid: "contact-action video-call-button",
                        xstyle: [T.uiMargin.start16, T.uiMargin.end16],
                        disabled: !a.canStartVideoCall,
                        onClick: () => {
                            const e = t.id.isLid() ? t.phoneNumber : t.id;
                            if ((0, P.shouldDisplayPhoneNumberHidingModal)(t))(0, P.displayPhoneNumberHidingModal)(t, !0);
                            else if (null != e) {
                                var n;
                                null === (n = L.default.Voip) || void 0 === n || n.callStart(e, !0)
                            }
                        }
                    })),
                    v = j.fbt._("Request", null, {
                        hk: "1Qh451"
                    }),
                    C = j.fbt._("Requested", null, {
                        hk: "3GgAXn"
                    }),
                    k = (0, h.getCanRequestPhoneNumber)(t) ? v : C,
                    _ = n && W.default.createElement(u.default, {
                        Icon: y.DialpadSmallIcon,
                        iconWidth: 19,
                        label: k,
                        xstyle: [T.uiMargin.start16, T.uiMargin.end16],
                        disabled: !(0, h.getCanRequestPhoneNumber)(t),
                        onClick: () => {
                            S.ModalManager.open(W.default.createElement(O.default, {
                                entryPoint: D.PNH_ENTRY_POINT_TYPE.CHAT_INFO_REQUEST
                            }))
                        },
                        testid: "request-phone-number-button-consumer"
                    });
                let N = null;
                if ((0, l.getABPropConfigValue)("unified_user_profile_navigation_enabled")) {
                    const e = o.ChatCollection.getActive();
                    N = !(null == e ? void 0 : e.id.equals(t.id)) && W.default.createElement(u.default, {
                        Icon: i.ChatIcon,
                        iconWidth: 19,
                        label: j.fbt._("Message", null, {
                            hk: "4gkjcu"
                        }),
                        testid: "contact-action chat-button",
                        xstyle: [T.uiMargin.start16, T.uiMargin.end16],
                        disabled: !1,
                        onClick: p
                    })
                }
                let A = null;
                if ((0, E.contactManagementEnabled)() && (0, h.getIsWAContact)(t)) {
                    const e = (0, h.getIsMyContact)(t) ? j.fbt._("Edit Contact", null, {
                        hk: "4qsd3x"
                    }) : j.fbt._("Add Contact", null, {
                        hk: "1sCWZy"
                    });
                    A = W.default.createElement(u.default, {
                        Icon: r.AccountBoxIcon,
                        iconWidth: 26,
                        label: e,
                        testid: "contact-action contact-button",
                        xstyle: [T.uiMargin.start16, T.uiMargin.end16],
                        disabled: !1,
                        onClick: g
                    })
                }
                return W.default.createElement(w.FlexRow, {
                    justify: "center",
                    xstyle: [T.uiMargin.top8, T.uiMargin.bottom4]
                }, _, N, A, b)
            }
            H.displayName = "ContactInfoTopCard", V.displayName = "Actions"
        },
        928008: (e, t, n) => {
            "use strict";
            var a = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = f;
            var l = n(258105),
                r = n(729763),
                o = a(n(606037)),
                i = n(814843),
                u = a(n(410731)),
                s = a(n(637659)),
                c = n(548360),
                d = a(n(667294));

            function f() {
                const e = function() {
                    const e = () => {
                            (0, o.default)((0, r.formatWaChatSecurityModalText)(), (0, l.getWAChatFaqUrl)())
                        },
                        t = c.fbt._("This is an official account of WhatsApp", null, {
                            hk: "2Av1mT"
                        });
                    return {
                        text: (0, i.isDataPrivacyPhase2NonE2eeEnabled)() ? d.default.createElement(s.default, {
                            text: t,
                            handleClick: e
                        }) : t,
                        header: (0, i.isDataPrivacyPhase2NonE2eeEnabled)() ? {
                            type: "none"
                        } : {
                            type: "security"
                        },
                        onClick: e
                    }
                }();
                return d.default.createElement(u.default, {
                    header: e.header,
                    text: e.text,
                    onClick: e.onClick
                })
            }
            f.displayName = "ContactInfoSecuritySectionPSA"
        },
        983345: (e, t, n) => {
            "use strict";
            var a = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = E;
            var l = a(n(355858)),
                r = n(464659),
                o = a(n(203528)),
                i = n(660666),
                u = n(306703),
                s = n(714574),
                c = n(180519),
                d = n(931019),
                f = n(548360),
                p = a(n(667294)),
                m = (a(n(156720)), n(379811)),
                h = n(655241);
            const g = {
                container: {
                    paddingBottom: "przvwfww"
                }
            };

            function E(e) {
                let {
                    contact: t
                } = e;
                const n = t.getStatus(),
                    [a, E] = (0, m.useContactValues)(t.id, [i.getId, s.getPhoneNumber]),
                    {
                        status: b
                    } = (0, h.useModelValues)(n, ["status"]),
                    v = "" === b ? null : p.default.createElement(l.default, {
                        multiline: !0
                    }, p.default.createElement(c.TextSpan, {
                        theme: "title"
                    }, p.default.createElement(o.default, {
                        id: a
                    })));
                let y;
                a.isLid() ? null != E && (y = E) : y = a;
                const C = y ? p.default.createElement(l.default, {
                        separator: !0
                    }, p.default.createElement(u.SelectableSpan, {
                        dir: "auto",
                        selectable: !0
                    }, p.default.createElement(c.TextSpan, {
                        theme: "title"
                    }, (0, d.widToFormattedUser)(y)))) : null,
                    M = f.fbt._("About and phone number", null, {
                        hk: "3UEL3W"
                    });
                return p.default.createElement(r.ChatInfoDrawerSection, {
                    xstyle: g.container,
                    titleTestId: "section-about-and-phone-number",
                    title: M
                }, v, C)
            }
            E.displayName = "BusinessAboutSection"
        },
        463954: (e, t, n) => {
            "use strict";
            var a = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = E;
            var l = a(n(210688)),
                r = n(354458),
                o = a(n(341894)),
                i = n(660666),
                u = a(n(831269)),
                s = a(n(969358)),
                c = n(131410),
                d = n(114850),
                f = a(n(517729)),
                p = n(548360),
                m = a(n(667294));
            a(n(156720));
            const h = {
                businessAccount: {
                    borderTop: "mug5vpb7",
                    fontSize: "f8jlpxt4"
                },
                businessTitle: {
                    lineHeight: "hzeshm6i"
                },
                bannerSvgContainer: {
                    marginTop: "b9l0eqez",
                    marginEnd: "jnwc1y2a",
                    marginBottom: "mpdn4nr2",
                    marginStart: "svoq16ka"
                },
                bannerSvg: {
                    color: "jq3rn4u7",
                    width: "dh5rsm73"
                }
            };

            function g(e) {
                let {
                    contact: t,
                    onClick: n
                } = e;
                return m.default.createElement(u.default, {
                    testid: "business-title",
                    xstyle: h.businessTitle,
                    onClick: n,
                    side: m.default.createElement(c.InfoIcon, {
                        xstyle: h.bannerSvgContainer,
                        iconXstyle: h.bannerSvg,
                        displayInline: !0
                    })
                }, function(e) {
                    var t;
                    return (0, r.isBotEnabled)() && (0, i.getId)(e).isBot() ? p.fbt._("Messages are generated by AI from Meta.", null, {
                        hk: "WdHq5"
                    }) : (0, r.isBizBot3pEnabled)() && (null === (t = e.businessProfile) || void 0 === t ? void 0 : t.isBizBot3p) ? p.fbt._("This AI is from a third-party developer.", null, {
                        hk: "1kQkmi"
                    }) : p.fbt._("This is a business account.", null, {
                        hk: "2x8QUJ"
                    })
                }(t))
            }

            function E(e) {
                const {
                    contact: t
                } = e, n = m.default.createElement(g, {
                    contact: t,
                    onClick: function() {
                        var e;
                        (0, r.isBotEnabled)() && (0, i.getId)(t).isBot() ? d.ModalManager.open(m.default.createElement(o.default, {
                            fromInvoke: !1
                        })) : (0, r.isBizBot3pEnabled)() && (null === (e = t.businessProfile) || void 0 === e ? void 0 : e.isBizBot3p) ? d.ModalManager.open(m.default.createElement(l.default, null)) : d.ModalManager.open(m.default.createElement(f.default, {
                            contact: t
                        }))
                    }
                });
                return m.default.createElement(s.default, {
                    xstyle: h.businessAccount
                }, n)
            }
            g.displayName = "BusinessInfoTitle", E.displayName = "BusinessAccountBanner"
        },
        520228: (e, t, n) => {
            "use strict";
            var a = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = q;
            var l = a(n(348926)),
                r = n(632157),
                o = n(287461),
                i = n(152832),
                u = n(72696),
                s = n(815651),
                c = n(817649),
                d = n(542358),
                f = n(312508),
                p = n(351053),
                m = n(553662),
                h = a(n(983098)),
                g = a(n(9729)),
                E = n(950061),
                b = n(698867),
                v = n(780549),
                y = n(877171),
                C = n(614921),
                M = n(660666),
                w = n(215406),
                k = n(805774),
                S = n(568550),
                _ = n(900316),
                P = a(n(395767)),
                O = n(581354),
                I = n(690495),
                N = n(174455),
                T = n(114850),
                A = n(417016),
                x = n(932523),
                L = a(n(755140)),
                D = n(340576),
                R = n(552214),
                B = n(163139),
                j = n(676345),
                W = n(96520),
                F = a(n(961745)),
                G = n(126246),
                H = n(548360),
                V = function(e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || "object" != typeof e && "function" != typeof e) return {
                        default: e
                    };
                    var n = U(t);
                    if (n && n.has(e)) return n.get(e);
                    var a = {},
                        l = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var r in e)
                        if ("default" !== r && Object.prototype.hasOwnProperty.call(e, r)) {
                            var o = l ? Object.getOwnPropertyDescriptor(e, r) : null;
                            o && (o.get || o.set) ? Object.defineProperty(a, r, o) : a[r] = e[r]
                        }
                    a.default = e, n && n.set(e, a);
                    return a
                }(n(667294));
            a(n(156720));

            function U(e) {
                if ("function" != typeof WeakMap) return null;
                var t = new WeakMap,
                    n = new WeakMap;
                return (U = function(e) {
                    return e ? n : t
                })(e)
            }
            const z = {
                actionsRow: {
                    marginTop: "c46o30wg",
                    marginEnd: "bsg2wrd4",
                    marginBottom: "brac1wpa",
                    marginStart: "f459d30t",
                    "@media (min-width: 1300px)": {
                        marginStart: "hfp8519b",
                        marginEnd: "acdu7ris"
                    }
                }
            };

            function q(e) {
                var t, n;
                const {
                    contact: a,
                    onProductCatalog: U
                } = e, q = (0, V.useContext)(S.DrawerContext), Y = (0, x.getProductCatalogSessionId)(q), K = (0, g.default)((0, B.unproxy)(e.contact));

                function Z() {
                    return (Z = (0, l.default)((function*() {
                        const e = yield(0, O.findChat)(a.id, "businessActions");
                        (yield v.Cmd.openChatFromUnread(e)) && (_.DrawerManager.closeDrawerRight(), (0, u.btmThreadsLoggingEnabled)() && y.ComposeBoxActions.addMsgSendingLogAttributes(e, {
                            handleMultiple() {
                                (0, b.handleActivitiesForChatThreadLogging)([{
                                    activityType: "profileReplies",
                                    ts: (0, r.unixTime)(),
                                    chatId: e.id
                                }])
                            }
                        }))
                    }))).apply(this, arguments)
                }
                let X;
                const Q = p.ChatCollection.getActive();
                var $, J;
                (null == Q ? void 0 : Q.id.equals(a.id)) || ((0, s.logMessageClick)(Y, null === ($ = a.businessProfile) || void 0 === $ ? void 0 : $.isProfileLinked, !!(null === (J = a.businessProfile) || void 0 === J ? void 0 : J.coverPhoto)), X = V.default.createElement(h.default, {
                    xstyle: j.uiMargin.horiz12,
                    Icon: (0, o.getABPropConfigValue)("unified_user_profile_navigation_enabled") ? m.ChatIcon : E.ChatMsgIcon,
                    label: (0, P.default)("Message"),
                    onClick: () => {
                        ! function() {
                            Z.apply(this, arguments)
                        }()
                    },
                    testid: "business-action chat"
                }));
                let ee, te, ne;
                if (K.isVoiceCallEnabled && (ee = V.default.createElement(h.default, {
                        xstyle: j.uiMargin.horiz12,
                        Icon: W.VoiceCallFilledIcon,
                        label: H.fbt._("Audio", null, {
                            hk: "rWU8D"
                        }),
                        disabled: !K.canStartVoiceCall,
                        onClick: () => {
                            var e, t;
                            (0, s.logVoiceCallClick)(Y, null === (e = a.businessProfile) || void 0 === e ? void 0 : e.isProfileLinked, !!(null === (t = a.businessProfile) || void 0 === t ? void 0 : t.coverPhoto));
                            const n = a.id.isLid() ? a.phoneNumber : a.id;
                            if ((0, A.shouldDisplayPhoneNumberHidingModal)(a))(0, A.displayPhoneNumberHidingModal)(a, !1);
                            else if (null != n) {
                                var l;
                                null === (l = F.default.Voip) || void 0 === l || l.callStart(n, !1)
                            }
                        },
                        testid: "business-action voice-call"
                    })), (null === (t = a.businessProfile) || void 0 === t || null === (n = t.profileOptions) || void 0 === n ? void 0 : n.commerceExperience) === c.CommerceExperienceTypes.CATALOG && (te = V.default.createElement(h.default, {
                        xstyle: j.uiMargin.horiz12,
                        Icon: f.CatalogFilledIcon,
                        label: H.fbt._("Catalog", null, {
                            hk: "3QDkTE"
                        }),
                        onClick: () => {
                            var e, t;
                            (0, s.logCatalogClick)(Y, null === (e = a.businessProfile) || void 0 === e ? void 0 : e.isProfileLinked, !!(null === (t = a.businessProfile) || void 0 === t ? void 0 : t.coverPhoto)), U((0, x.getProductCatalogContext)(q), "ContactInfo")
                        },
                        testid: "business-action catalog"
                    })), (0, d.hasShop)(a.businessProfile)) {
                    (0, u.bannedShopsEnabled)() && (0, d.isShopBanned)(a.businessProfile) || (ne = V.default.createElement(h.default, {
                        xstyle: j.uiMargin.horiz12,
                        Icon: R.ShopFilledIcon,
                        label: H.fbt._("Shop", null, {
                            hk: "3KsdlE"
                        }),
                        onClick: function() {
                            var e, t;
                            (0, s.logShopsClick)(Y, null === (e = a.businessProfile) || void 0 === e ? void 0 : e.isProfileLinked, !!(null === (t = a.businessProfile) || void 0 === t ? void 0 : t.coverPhoto)), (0, d.goToShop)(a.businessProfile)
                        },
                        testid: "business-action shop"
                    }))
                }
                const ae = !(0, M.getIsIAS)(a) && !(0, M.getId)(a).isBot() && !(0, M.getIsCAPISupportAccount)(a) && V.default.createElement(h.default, {
                        xstyle: j.uiMargin.horiz12,
                        Icon: N.ForwardFilledIcon,
                        label: H.fbt._("Share", null, {
                            hk: "4F3c6E"
                        }).toString(),
                        onClick: function() {
                            var e, t;
                            (0, s.logForwardClick)(Y, null === (e = a.businessProfile) || void 0 === e ? void 0 : e.isProfileLinked, !!(null === (t = a.businessProfile) || void 0 === t ? void 0 : t.coverPhoto)), T.ModalManager.open(V.default.createElement(D.SendContactsModalLoadable, {
                                contacts: [(0, B.unproxy)(a)],
                                onContactsSent: e => {
                                    v.Cmd.openChatFromUnread(e).then((() => {}))
                                }
                            }))
                        },
                        testid: "business-action forward"
                    }),
                    le = H.fbt._("Request", null, {
                        hk: "1Qh451"
                    }),
                    re = H.fbt._("Requested", null, {
                        hk: "3GgAXn"
                    }),
                    oe = (0, M.getCanRequestPhoneNumber)(a) ? le : re,
                    ie = e.displayRequestPnButton && V.default.createElement(h.default, {
                        Icon: k.DialpadSmallIcon,
                        xstyle: j.uiMargin.horiz12,
                        iconWidth: 19,
                        label: oe,
                        disabled: !(0, M.getCanRequestPhoneNumber)(a),
                        onClick: () => {
                            T.ModalManager.open(V.default.createElement(L.default, {
                                entryPoint: G.PNH_ENTRY_POINT_TYPE.CHAT_INFO_REQUEST
                            }))
                        },
                        testid: "request-phone-number-button-business"
                    });
                let ue = null;
                if ((0, w.contactManagementEnabled)() && (0, M.getIsWAContact)(a)) {
                    const e = (0, M.getIsMyContact)(a) ? H.fbt._("Edit Contact", null, {
                        hk: "TQvTA"
                    }) : H.fbt._("Add Contact", null, {
                        hk: "21mEih"
                    });
                    ue = V.default.createElement(h.default, {
                        Icon: i.AccountBoxIcon,
                        iconWidth: 26,
                        label: e,
                        testid: "contact-action contact-button",
                        xstyle: [j.uiMargin.start16, j.uiMargin.end16],
                        disabled: !1,
                        onClick: () => {
                            (0, C.showEditContactModal)(a)
                        }
                    })
                }
                return V.default.createElement(I.FlexRow, {
                    xstyle: z.actionsRow,
                    justify: "center"
                }, ue, ie, X, ee, te, ne, ae)
            }
            q.displayName = "BusinessActions"
        },
        450715: (e, t, n) => {
            "use strict";
            var a = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = b;
            var l = n(815651),
                r = n(542358),
                o = n(774650),
                i = n(568550),
                u = n(305521),
                s = n(932523),
                c = n(341463),
                d = n(676345),
                f = a(n(625903)),
                p = n(548360),
                m = function(e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || "object" != typeof e && "function" != typeof e) return {
                        default: e
                    };
                    var n = g(t);
                    if (n && n.has(e)) return n.get(e);
                    var a = {},
                        l = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var r in e)
                        if ("default" !== r && Object.prototype.hasOwnProperty.call(e, r)) {
                            var o = l ? Object.getOwnPropertyDescriptor(e, r) : null;
                            o && (o.get || o.set) ? Object.defineProperty(a, r, o) : a[r] = e[r]
                        }
                    a.default = e, n && n.set(e, a);
                    return a
                }(n(667294)),
                h = a(n(156720));

            function g(e) {
                if ("function" != typeof WeakMap) return null;
                var t = new WeakMap,
                    n = new WeakMap;
                return (g = function(e) {
                    return e ? n : t
                })(e)
            }
            const E = {
                businessHours: {
                    display: "f804f6gw",
                    width: "ln8gz9je",
                    textAlign: "ljrqcn24"
                },
                businessHoursChevron: {
                    display: "lgkeaz1o",
                    color: "cs9t9or5",
                    verticalAlign: "fewfhwl7"
                },
                businessHoursHours: {
                    display: "lgkeaz1o",
                    width: "ln8gz9je",
                    lineHeight: "r5qsrrlp",
                    textAlign: "e65innqk",
                    whiteSpace: "bbv8nyr4",
                    verticalAlign: "fewfhwl7"
                },
                businessHoursRow: {
                    display: "plrz2mwq",
                    fontSize: "f8jlpxt4",
                    color: "sbs3osm6"
                },
                businessHoursDay: {
                    display: "lgkeaz1o",
                    whiteSpace: "le5p0ye3",
                    verticalAlign: "fewfhwl7"
                },
                firstRow: {
                    fontSize: "enbbiyaj",
                    color: "k2bacm8l"
                },
                flipSvg: {
                    transform: "b5u0g8pm",
                    transformOrigin: "sx61ek5s"
                },
                dayIsOpen: {
                    fontWeight: "hnx8ox4h",
                    color: "j5au4wul"
                }
            };

            function b(e) {
                const {
                    businessHours: t,
                    isProfileLinked: n,
                    hasCoverPhoto: a
                } = e, o = (0, s.getProductCatalogSessionId)((0, m.useContext)(i.DrawerContext)), u = (0, r.getBusinessOpenState)(t), [d, h] = (0, m.useState)(!0);
                if (null == t) return null;
                const g = (0, c.getBusinessHours)(t).map((e => {
                    const {
                        day: t,
                        hours: n,
                        first: a
                    } = e;
                    let l = t,
                        o = n,
                        i = !1;
                    if (a) switch (u.status) {
                        case r.BUSINESS_OPEN_STATUS.OPEN_24H:
                            l = p.fbt._("Open now", null, {
                                hk: "28hpHy"
                            }), o = p.fbt._("Open 24 hours", null, {
                                hk: "1AlfF5"
                            }), i = !0;
                            break;
                        case r.BUSINESS_OPEN_STATUS.OPEN_APPOINTMENT:
                            l = p.fbt._("Open now", null, {
                                hk: "28hpHy"
                            }), o = p.fbt._("Open by appointment only", null, {
                                hk: "1nxH9v"
                            }), i = !0;
                            break;
                        case r.BUSINESS_OPEN_STATUS.OPEN:
                            l = p.fbt._("Open now", null, {
                                hk: "28hpHy"
                            }), i = !0;
                            break;
                        case r.BUSINESS_OPEN_STATUS.CLOSED_TODAY:
                            o = p.fbt._("Closed", null, {
                                hk: "3IRgct"
                            })
                    }
                    return !a && d ? null : m.default.createElement(v, {
                        day: l,
                        dayIsOpen: i,
                        key: t,
                        hours: o,
                        first: a,
                        collapsed: d
                    })
                }));
                return m.default.createElement(f.default, {
                    xstyle: E.businessHours,
                    onClick: () => {
                        (0, l.logHoursClick)(o, n, !!a), h(!d)
                    },
                    testid: "business-hours-expand"
                }, g)
            }

            function v(e) {
                let {
                    collapsed: t,
                    day: n,
                    dayIsOpen: a,
                    first: l,
                    hours: r
                } = e;
                return l ? m.default.createElement("div", {
                    className: (0, h.default)(E.businessHoursRow, l && E.firstRow)
                }, m.default.createElement("div", {
                    className: (0, h.default)(E.businessHoursDay, d.uiPadding.end15, a && E.dayIsOpen)
                }, m.default.createElement(u.EmojiText, {
                    direction: "auto",
                    text: n
                })), m.default.createElement("div", {
                    className: (0, h.default)(E.businessHoursHours, d.uiPadding.end5)
                }, m.default.createElement(u.EmojiText, {
                    direction: "auto",
                    text: r
                })), m.default.createElement("div", {
                    className: (0, h.default)(E.businessHoursChevron, d.uiPadding.top4, d.uiPadding.start4),
                    role: "button"
                }, m.default.createElement(o.ChevronDownAltIcon, {
                    xstyle: !t && E.flipSvg,
                    displayInline: !0
                }))) : m.default.createElement("div", {
                    className: (0, h.default)(E.businessHoursRow)
                }, m.default.createElement("div", {
                    className: (0, h.default)(E.businessHoursDay, d.uiPadding.end15, d.uiPadding.top8)
                }, m.default.createElement(u.EmojiText, {
                    direction: "auto",
                    text: n
                })), m.default.createElement("div", {
                    className: (0, h.default)(E.businessHoursHours, d.uiPadding.end5, d.uiPadding.top8)
                }, m.default.createElement(u.EmojiText, {
                    direction: "auto",
                    text: r
                })))
            }
            b.displayName = "BusinessHours", v.displayName = "BusinessHoursRow"
        },
        906015: (e, t, n) => {
            "use strict";
            var a = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = M;
            var l = a(n(450715)),
                r = n(815651),
                o = n(464659),
                i = a(n(846870)),
                u = n(568550),
                s = n(305521),
                c = n(999649),
                d = n(753233),
                f = a(n(459510)),
                p = n(932523),
                m = n(666836),
                h = n(676345),
                g = a(n(79291)),
                E = function(e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || "object" != typeof e && "function" != typeof e) return {
                        default: e
                    };
                    var n = y(t);
                    if (n && n.has(e)) return n.get(e);
                    var a = {},
                        l = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var r in e)
                        if ("default" !== r && Object.prototype.hasOwnProperty.call(e, r)) {
                            var o = l ? Object.getOwnPropertyDescriptor(e, r) : null;
                            o && (o.get || o.set) ? Object.defineProperty(a, r, o) : a[r] = e[r]
                        }
                    a.default = e, n && n.set(e, a);
                    return a
                }(n(667294)),
                b = a(n(156720)),
                v = n(655241);

            function y(e) {
                if ("function" != typeof WeakMap) return null;
                var t = new WeakMap,
                    n = new WeakMap;
                return (y = function(e) {
                    return e ? n : t
                })(e)
            }
            const C = {
                description: {
                    lineHeight: "pvbam5uh"
                },
                section: {
                    fontSize: "enbbiyaj",
                    lineHeight: "erpdyial",
                    color: "tviruh8d"
                },
                sectionLink: {
                    color: "bsaq4yhm"
                },
                mapContainer: {
                    height: "qkegxuty"
                },
                map: {
                    position: "g0rxnol2",
                    display: "p357zi0d",
                    alignItems: "gndfcl4n",
                    justifyContent: "ac2vgrno",
                    overflowX: "gfz4du6o",
                    overflowY: "r7fjleex"
                }
            };

            function M(e) {
                const {
                    businessProfile: t,
                    showDescription: n = !0
                } = e, {
                    description: a,
                    address: y,
                    latitude: M,
                    longitude: w,
                    website: k,
                    email: S,
                    businessHours: _,
                    isProfileLinked: P,
                    coverPhoto: O
                } = (0, v.useModelValues)(t, ["description", "address", "latitude", "longitude", "website", "email", "businessHours", "isProfileLinked", "coverPhoto"]), I = (0, E.useContext)(u.DrawerContext), N = (0, p.getProductCatalogSessionId)(I);
                let T = a;
                t.id.isCAPISupportAccount() && (T = (0, m.SupportChatDescription)().toString());
                const A = [];
                return n && null != T && A.push(E.default.createElement("div", {
                    className: (0, b.default)(C.section)
                }, E.default.createElement(c.ExpandableText, {
                    text: T,
                    textLimit: i.default.BUSINESS_DESCRIPTION_INFO_PANEL_TRUNC_LENGTH
                }, (e => {
                    let {
                        textLimit: t
                    } = e;
                    return E.default.createElement(s.EmojiText, {
                        className: (0, b.default)(C.description),
                        selectable: !0,
                        direction: "auto",
                        text: T,
                        textLimit: t,
                        ellipsify: !0,
                        multiline: !0,
                        inferLinesDirection: !0
                    })
                })))), null != _ && A.push(E.default.createElement("div", {
                    className: (0, b.default)(C.section)
                }, E.default.createElement(l.default, {
                    businessHours: _,
                    isProfileLinked: P,
                    hasCoverPhoto: !!O
                }))), null != y && A.push(E.default.createElement("div", {
                    className: (0, b.default)(C.section)
                }, E.default.createElement(s.EmojiText, {
                    selectable: !0,
                    direction: "auto",
                    text: y
                }))), null != M && null != w && A.push(E.default.createElement("div", {
                    className: (0, b.default)(C.section, C.map, h.uiMargin.bottom8, C.mapContainer)
                }, E.default.createElement(f.default, {
                    lat: M,
                    lng: w,
                    name: y || "",
                    width: 590,
                    height: 132,
                    onClick: () => (0, r.logLocationClick)(N, P, !!O),
                    testid: "business-info-map"
                }))), null != S && A.push(E.default.createElement("div", {
                    className: (0, b.default)(C.section)
                }, E.default.createElement(d.ExternalLink, {
                    xstyle: C.sectionLink,
                    href: `mailto:${S}`,
                    onClick: () => (0, r.logEmailClick)(N, P, !!O),
                    testid: "business-info-email"
                }, S))), null != k && k.length > 0 && A.push(E.default.createElement("div", {
                    className: (0, b.default)(C.section)
                }, k.map((e => E.default.createElement("div", {
                    key: e
                }, E.default.createElement(d.ExternalLink, {
                    xstyle: C.sectionLink,
                    href: g.default.toMaliciousSiteRedirect(e),
                    onClick: () => (0, r.logWebsiteClick)(N, P, !!O),
                    testid: "business-info-website"
                }, e)))))), 0 === A.length ? null : E.default.createElement(o.ChatInfoDrawerSection, {
                    xstyle: h.uiPadding.vert16
                }, A.map(((e, t) => E.default.createElement("div", {
                    key: t,
                    className: (0, b.default)(0 !== t && h.uiMargin.top24)
                }, e))))
            }
            M.displayName = "BusinessInfo"
        },
        766491: (e, t, n) => {
            "use strict";
            var a = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = v;
            var l = n(970039),
                r = n(354458),
                o = a(n(684625)),
                i = n(243224),
                u = n(660666),
                s = n(305521),
                c = n(97858),
                d = n(114850),
                f = n(21645),
                p = n(666836),
                m = n(676345),
                h = n(548360),
                g = a(n(667294)),
                E = a(n(156720));
            const b = {
                container: {
                    marginTop: "tt8xd2xn",
                    marginEnd: "jnwc1y2a",
                    marginBottom: "ngycyvoj",
                    marginStart: "svoq16ka"
                },
                subtitle: {
                    color: "p6nhtbpp",
                    fontSize: "enbbiyaj",
                    lineHeight: "tkq7s68q",
                    marginTop: "tt8xd2xn",
                    marginEnd: "jnwc1y2a",
                    marginBottom: "inww9tbj",
                    marginStart: "svoq16ka"
                },
                botSubtitle: {
                    color: "i8b0kslj",
                    fontSize: "enbbiyaj",
                    lineHeight: "tkq7s68q",
                    display: "p357zi0d",
                    justifyContent: "ac2vgrno"
                },
                botSubtitleDivider: {
                    fontWeight: "nbipi2bn",
                    lineHeight: "tkq7s68q",
                    color: "tviruh8d"
                },
                botIcon: {
                    color: "i8b0kslj"
                },
                title: {
                    fontSize: "iqrewfee",
                    fontWeight: "sy6s5v3r",
                    marginTop: "tt8xd2xn",
                    marginEnd: "jnwc1y2a",
                    marginBottom: "or9x5nie",
                    marginStart: "svoq16ka"
                }
            };

            function v(e) {
                const {
                    contact: t,
                    businessProfile: n
                } = e, a = (0, r.isBizBot3pEnabled)() && n.isBizBot3p;
                let v, y, C;
                const M = () => {
                    (0, c.isBlueEducationEnabled)() && ((0, i.logClickProfileBadge)(t), d.ModalManager.open(g.default.createElement(o.default, null)))
                };
                null != n.customUrl && (C = g.default.createElement("div", {
                    className: (0, E.default)(b.subtitle)
                }, g.default.createElement(s.EmojiText, {
                    text: n.customUrl,
                    direction: "auto",
                    titlify: !0,
                    breakWord: !0,
                    inlineblock: !0
                })));
                const w = (0, u.getShowBusinessCheckmarkAsPrimary)(t),
                    k = (0, u.getShowBusinessCheckmarkAsSecondary)(t);
                if ((0, u.getIsMe)(t)) v = g.default.createElement(f.Name, {
                    contact: t,
                    showMessageYourselfName: !0,
                    useVerifiedName: !0,
                    breakWord: !0,
                    selectable: !0
                }), t.name !== t.verifiedName && (y = g.default.createElement(f.Name, {
                    contact: t,
                    selectable: !0
                }));
                else if (v = g.default.createElement(f.Name, {
                        contact: t,
                        showBusinessCheckmark: w,
                        onClick: w ? M : null,
                        makeCheckmarkClickable: w,
                        checkmarkLarge: !0,
                        breakWord: !0,
                        selectable: !0
                    }), (0, u.getIsIAS)(t)) y = g.default.createElement("div", {
                    className: (0, E.default)(b.subtitle)
                }, g.default.createElement(s.EmojiText, {
                    text: h.fbt._("Official WhatsApp Account", null, {
                        hk: "4oZMU1"
                    }),
                    direction: "auto",
                    ellipsify: !0,
                    titlify: !0,
                    breakWord: !0,
                    selectable: !0
                }));
                else if ((0, u.getId)(t).isBot() || a) {
                    const e = (0, u.getShowBiz3pBotVerifiedNameAsSecondary)(t);
                    y = g.default.createElement("div", {
                        className: (0, E.default)(b.botSubtitle)
                    }, e && g.default.createElement(g.default.Fragment, null, g.default.createElement(f.Name, {
                        contact: t,
                        showBusinessCheckmark: k,
                        useVerifiedName: !0,
                        breakWord: !0,
                        selectable: !0
                    }), g.default.createElement("span", {
                        className: (0, E.default)(b.botSubtitleDivider, k && m.uiMargin.end8, !k && m.uiMargin.horiz8)
                    }, "·")), g.default.createElement("div", {
                        className: (0, E.default)(b.botSubtitle)
                    }, h.fbt._("AI", null, {
                        hk: "2Mphpa"
                    }), (0, u.getId)(t).isBot() && g.default.createElement(l.AiSignalIcon, {
                        width: 15,
                        height: 15,
                        xstyle: [m.uiMargin.top2, m.uiMargin.start2, b.botIcon]
                    })))
                } else(0, u.getIsCAPISupportAccount)(t) ? y = g.default.createElement("div", {
                    className: (0, E.default)(b.subtitle)
                }, g.default.createElement(s.EmojiText, {
                    text: (0, p.SupportChatSubtitle)(),
                    direction: "auto",
                    ellipsify: !0,
                    titlify: !0,
                    breakWord: !0,
                    selectable: !0
                })) : t.name && t.name !== t.verifiedName && (y = g.default.createElement(f.Name, {
                    contact: t,
                    showBusinessCheckmark: k,
                    onClick: k ? M : null,
                    makeCheckmarkClickable: k,
                    useVerifiedName: !0,
                    breakWord: !0,
                    selectable: !0
                }));
                return g.default.createElement("div", {
                    className: (0, E.default)(b.container)
                }, g.default.createElement("div", {
                    className: (0, E.default)(b.title)
                }, v), y, C)
            }
            v.displayName = "BusinessName"
        },
        449397: (e, t, n) => {
            "use strict";
            var a = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.BusinessOpenHours = p;
            var l = a(n(724843)),
                r = n(542358),
                o = a(n(932325)),
                i = n(548360),
                u = a(n(667294)),
                s = a(n(156720));
            const c = {
                    color: "mvxzr2tb"
                },
                d = {
                    color: "j5au4wul"
                },
                f = {
                    color: "sbs3osm6",
                    fontSize: "f8jlpxt4",
                    marginTop: "tt8xd2xn",
                    marginEnd: "jnwc1y2a",
                    marginBottom: "g105fvfm",
                    marginStart: "svoq16ka"
                };

            function p(e) {
                const {
                    hours: t
                } = e, n = function(e) {
                    switch (e.status) {
                        case r.BUSINESS_OPEN_STATUS.OPEN_24H:
                            return i.fbt._("{open} 24 hours", [i.fbt._param("open", `<span class="${(0,s.default)(d)}">${i.fbt._("Open",null,{hk:"187rvw"}).toString()}</span>`)], {
                                hk: "1aA6f9"
                            });
                        case r.BUSINESS_OPEN_STATUS.OPEN_APPOINTMENT:
                            return i.fbt._("{open} by appointment only", [i.fbt._param("open", `<span class="${(0,s.default)(d)}">${i.fbt._("Open",null,{hk:"187rvw"}).toString()}</span>`)], {
                                hk: "z8CGT"
                            });
                        case r.BUSINESS_OPEN_STATUS.OPEN:
                            if (e.openUntil && e.additionalOpen && e.additionalClose) return i.fbt._("{open} until {time}, {additionalOpenTime} - {additionalCloseTime}", [i.fbt._param("open", `<span class="${(0,s.default)(d)}">${i.fbt._("Open",null,{hk:"187rvw"}).toString()}</span>`), i.fbt._param("time", m(e.openUntil)), i.fbt._param("additionalOpenTime", m(e.additionalOpen)), i.fbt._param("additionalCloseTime", m(e.additionalClose))], {
                                hk: "2dJgLQ"
                            });
                            if (e.openUntil) return i.fbt._("{open} until {time}", [i.fbt._param("open", `<span class="${(0,s.default)(d)}">${i.fbt._("Open",null,{hk:"187rvw"}).toString()}</span>`), i.fbt._param("time", m(e.openUntil))], {
                                hk: "3Dd8an"
                            });
                            break;
                        case r.BUSINESS_OPEN_STATUS.CLOSED:
                            return e.opensAt ? i.fbt._("{closed}, opens at {time}", [i.fbt._param("closed", `<span class="${(0,s.default)(c)}">${i.fbt._("Closed now",null,{hk:"2oDK4r"}).toString()}</span>`), i.fbt._param("time", m(e.opensAt))], {
                                hk: "LvVmY"
                            }) : `<span class="${(0,s.default)(c)}">${i.fbt._("Closed now",null,{hk:"2oDK4r"}).toString()}</span>`;
                        case r.BUSINESS_OPEN_STATUS.CLOSED_TODAY:
                            return `<span class="${(0,s.default)(c)}">${i.fbt._("Closed today",null,{hk:"3uCCvH"}).toString()}</span>`
                    }
                    return null
                }((0, r.getBusinessOpenState)(t));
                if (null == n) return null;
                const a = l.default.sanitize(n.toString());
                return u.default.createElement("div", {
                    className: (0, s.default)(f),
                    dangerouslySetInnerHTML: {
                        __html: a
                    }
                })
            }

            function m(e) {
                return null == e ? "" : e.toLocaleTimeString(o.default.getLocale(), {
                    hour: "numeric",
                    minute: "2-digit"
                })
            }
            p.displayName = "BusinessOpenHours"
        },
        745309: (e, t, n) => {
            "use strict";
            var a = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.BusinessProfile = function(e) {
                const {
                    contact: t
                } = e, [n, a, l, u] = (0, x.useContactValues)(e.contact.id, [p.getId, p.getVerifiedLevel, p.getName, p.getVerifiedName]), s = (0, L.useModelValues)(e.businessProfile, ["description", "categories", "website", "email", "stale", "latitude", "longitude", "businessHours", "structuredAddress"]);
                (0, T.useEffect)((() => {
                    new O.ViewBusinessProfileWamEvent({
                        viewBusinessProfileAction: I.VIEW_BUSINESS_PROFILE_ACTION.ACTION_IMPRESSION
                    }).commit()
                }), []);
                const d = T.default.createElement(B, {
                    contact: t
                });
                let m, y, C, M, w, k;
                const N = s;
                if (N.stale) m = T.default.createElement("div", {
                    className: (0, A.default)(R.contactBusinessInfoSpinner, P.uiMargin.top24, P.uiMargin.bottom12)
                }, T.default.createElement(_.Spinner, {
                    size: 20,
                    stroke: 5
                }));
                else {
                    var D;
                    y = (null === (D = N.categories) || void 0 === D ? void 0 : D.length) ? T.default.createElement(G, {
                        icon: T.default.createElement(r.BusinessCategoryIcon, null)
                    }, T.default.createElement(g.EmojiText, {
                        selectable: !0,
                        direction: "auto",
                        text: (0, v.default)(N.categories.map((e => e.localized_display_name)), v.default.CONJUNCTIONS.NONE, v.default.DELIMITERS.COMMA)
                    })) : null, C = null != N.description && "" !== N.description ? T.default.createElement(G, {
                        icon: T.default.createElement(o.BusinessDescriptionIcon, null)
                    }, T.default.createElement(E.ExpandableText, {
                        text: N.description,
                        textLimit: f.default.BUSINESS_DESCRIPTION_INFO_PANEL_TRUNC_LENGTH
                    }, (e => {
                        let {
                            textLimit: t
                        } = e;
                        return T.default.createElement(g.EmojiText, {
                            selectable: !0,
                            direction: "auto",
                            breakWord: !0,
                            text: N.description,
                            textLimit: t
                        })
                    }))) : null, N.website && Array.isArray(N.website) && N.website.length && (M = N.website.map(((e, t) => {
                        const n = (0, S.getWebsiteLink)(e);
                        return T.default.createElement(G, {
                            icon: T.default.createElement(c.BusinessWebsiteIcon, null),
                            key: t
                        }, T.default.createElement(b.ExternalLink, {
                            href: n
                        }, T.default.createElement(g.EmojiText, {
                            selectable: !0,
                            direction: "auto",
                            text: e
                        })))
                    }))), N.businessHours && (w = T.default.createElement(j, {
                        businessHours: N.businessHours
                    }));
                    const e = N.email;
                    null != e && "" !== e && (k = T.default.createElement(G, {
                        icon: T.default.createElement(i.BusinessEmailIcon, null),
                        dir: "auto"
                    }, T.default.createElement(b.ExternalLink, {
                        href: `mailto:${e}`
                    }, T.default.createElement(g.EmojiText, {
                        selectable: !0,
                        direction: "auto",
                        text: e
                    }))))
                }
                const W = Boolean(void 0 !== N.latitude && void 0 !== N.longitude || N.structuredAddress);
                let H;
                (m || W || y || C || null != w || k || M) && (H = T.default.createElement(h.default, {
                    theme: "padding"
                }, T.default.createElement("div", {
                    className: (0, A.default)(R.contactBusinessInfo)
                }, m, T.default.createElement(F, {
                    contactName: l,
                    latitude: N.latitude,
                    longitude: N.longitude,
                    structuredAddress: N.structuredAddress
                }), y, C, w, k, M)));
                return T.default.createElement(T.default.Fragment, null, T.default.createElement(h.default, null, d), H)
            };
            var l = n(179652),
                r = n(250192),
                o = n(186181),
                i = n(194787),
                u = n(922408),
                s = n(817649),
                c = n(34730),
                d = n(774650),
                f = a(n(846870)),
                p = n(660666),
                m = a(n(831269)),
                h = a(n(969358)),
                g = n(305521),
                E = n(999649),
                b = n(753233),
                v = a(n(125991)),
                y = n(131410),
                C = a(n(459510)),
                M = n(300987),
                w = n(114850),
                k = a(n(517729)),
                S = n(341463),
                _ = n(956113),
                P = n(676345),
                O = n(875302),
                I = n(111540),
                N = n(548360),
                T = function(e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || "object" != typeof e && "function" != typeof e) return {
                        default: e
                    };
                    var n = D(t);
                    if (n && n.has(e)) return n.get(e);
                    var a = {},
                        l = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var r in e)
                        if ("default" !== r && Object.prototype.hasOwnProperty.call(e, r)) {
                            var o = l ? Object.getOwnPropertyDescriptor(e, r) : null;
                            o && (o.get || o.set) ? Object.defineProperty(a, r, o) : a[r] = e[r]
                        }
                    a.default = e, n && n.set(e, a);
                    return a
                }(n(667294)),
                A = a(n(156720)),
                x = n(379811),
                L = n(655241);

            function D(e) {
                if ("function" != typeof WeakMap) return null;
                var t = new WeakMap,
                    n = new WeakMap;
                return (D = function(e) {
                    return e ? n : t
                })(e)
            }
            const R = {
                dataRow: {
                    display: "p357zi0d",
                    alignItems: "r15c9g6i"
                },
                flipSvg: {
                    transform: "b5u0g8pm",
                    transformOrigin: "sx61ek5s"
                },
                infoIcon: {
                    color: "jq3rn4u7"
                },
                contactBusinessInfoSpinner: {
                    display: "p357zi0d",
                    justifyContent: "ac2vgrno"
                },
                contactBusinessInfo: {
                    marginTop: "lx3vef7y",
                    marginStart: "bx0vhl82"
                },
                businessHoursChevron: {
                    display: "lgkeaz1o",
                    color: "cs9t9or5",
                    verticalAlign: "fewfhwl7"
                },
                businessHoursRow: {
                    display: "plrz2mwq"
                },
                businessHoursDay: {
                    display: "lgkeaz1o",
                    paddingEnd: "k3h23tga",
                    whiteSpace: "le5p0ye3",
                    verticalAlign: "fewfhwl7"
                },
                businessHoursHours: {
                    display: "lgkeaz1o",
                    width: "ln8gz9je",
                    whiteSpace: "bbv8nyr4",
                    verticalAlign: "fewfhwl7"
                },
                businessMap: {
                    position: "g0rxnol2",
                    display: "p357zi0d",
                    alignItems: "gndfcl4n",
                    justifyContent: "ac2vgrno",
                    overflowX: "gfz4du6o",
                    overflowY: "r7fjleex"
                },
                dataRowIcon: {
                    flexShrink: "oq44ahr5",
                    width: "i94gqilv",
                    marginEnd: "awqnedpp",
                    color: "cs9t9or5"
                },
                dataRowText: {
                    overflowX: "gfz4du6o",
                    overflowY: "r7fjleex",
                    fontSize: "f8jlpxt4",
                    lineHeight: "r5qsrrlp"
                }
            };

            function B(e) {
                let {
                    contact: t
                } = e;
                const n = t.verifiedLevel === s.VERIFIED_LEVEL.HIGH ? N.fbt._("Official business account", null, {
                    hk: "1KruJ"
                }) : N.fbt._("Business account", null, {
                    hk: "2lzdAg"
                });
                return T.default.createElement(m.default, {
                    testid: "business-title",
                    onClick: () => w.ModalManager.open(T.default.createElement(k.default, {
                        contact: t
                    })),
                    side: T.default.createElement(y.InfoIcon, {
                        xstyle: R.infoIcon,
                        displayInline: !0
                    })
                }, n)
            }

            function j(e) {
                let {
                    businessHours: t
                } = e;
                const [n, a] = (0, T.useState)(!0), l = (0, S.getBusinessHours)(t).map((e => {
                    const {
                        day: t,
                        hours: a,
                        first: l
                    } = e;
                    return !l && n ? null : T.default.createElement(W, {
                        day: t,
                        key: t,
                        hours: a,
                        first: l,
                        collapsed: n
                    })
                }));
                return T.default.createElement(G, {
                    icon: T.default.createElement(u.BusinessHoursIcon, null),
                    onClick: () => a(!n)
                }, l)
            }

            function W(e) {
                let {
                    collapsed: t,
                    day: n,
                    first: a,
                    hours: l
                } = e;
                const r = a ? T.default.createElement("div", {
                    className: (0, A.default)(R.businessHoursChevron, P.uiPadding.top4, P.uiPadding.start4),
                    role: "button"
                }, T.default.createElement(d.ChevronDownAltIcon, {
                    xstyle: t && R.flipSvg,
                    displayInline: !0
                })) : null;
                return T.default.createElement("div", {
                    className: (0, A.default)(R.businessHoursRow)
                }, T.default.createElement("div", {
                    className: (0, A.default)(R.businessHoursDay, !a && P.uiPadding.top8)
                }, T.default.createElement(g.EmojiText, {
                    direction: "auto",
                    text: n
                })), T.default.createElement("div", {
                    className: (0, A.default)(R.businessHoursHours, !a && P.uiPadding.top8)
                }, T.default.createElement(g.EmojiText, {
                    direction: "auto",
                    text: l
                })), r)
            }

            function F(e) {
                let {
                    contactName: t,
                    latitude: n,
                    longitude: a,
                    structuredAddress: r
                } = e;
                const o = r ? function(e) {
                    const {
                        streetAddress: t,
                        localizedCityName: n,
                        zipCode: a
                    } = e;
                    return t && n && a ? N.fbt._("{streetAddress}, {city} {zipCode}", [N.fbt._param("streetAddress", t), N.fbt._param("city", n), N.fbt._param("zipCode", a)], {
                        hk: "1McVXv"
                    }).toString() : t && n ? N.fbt._("{streetAddress}, {city}", [N.fbt._param("streetAddress", t), N.fbt._param("city", n)], {
                        hk: "1zyKhk"
                    }).toString() : t
                }(r) : null;
                let i, u;
                if (null != o && "" !== o) {
                    let e;
                    e = null != n && null != a ? (0, M.getMapUrl)(n, a, o) : (0, M.getSearchUrl)(o), u = T.default.createElement("div", null, T.default.createElement(b.ExternalLink, {
                        href: e
                    }, T.default.createElement(g.EmojiText, {
                        selectable: !0,
                        direction: "auto",
                        text: o
                    })))
                }
                return null != n && null != a && (i = T.default.createElement("div", {
                    style: {
                        height: 150
                    },
                    className: (0, A.default)(R.businessMap, P.uiMargin.bottom8, null != u && P.uiMargin.top8)
                }, T.default.createElement(C.default, {
                    lat: n,
                    lng: a,
                    name: o || t,
                    width: 565,
                    height: 150
                }))), u || i ? T.default.createElement(G, {
                    icon: T.default.createElement(l.BusinessAddressIcon, null)
                }, u, i) : null
            }

            function G(e) {
                let {
                    children: t,
                    dir: n,
                    icon: a,
                    onClick: l,
                    xstyle: r
                } = e;
                return T.default.createElement("div", {
                    className: (0, A.default)(R.dataRow, P.uiMargin.bottom14, r),
                    onClick: l
                }, T.default.createElement("div", {
                    className: (0, A.default)(R.dataRowIcon)
                }, a), T.default.createElement("div", {
                    className: (0, A.default)(R.dataRowText, P.uiPadding.top2)
                }, t))
            }
            B.displayName = "BusinessInfoTitleWithSMBUpsell", j.displayName = "BusinessHours", W.displayName = "BusinessHoursRow", F.displayName = "Address", G.displayName = "DataRow"
        },
        718796: (e, t, n) => {
            "use strict";
            var a = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = b;
            var l = a(n(520228)),
                r = a(n(766491)),
                o = n(449397),
                i = a(n(411019)),
                u = n(660666),
                s = a(n(836513)),
                c = a(n(969358)),
                d = a(n(125991)),
                f = n(129417),
                p = a(n(667294)),
                m = a(n(156720)),
                h = n(655241);
            const g = {
                    textAlign: "qfejxiq4"
                },
                E = {
                    marginTop: "tt8xd2xn",
                    marginEnd: "jnwc1y2a",
                    marginBottom: "brac1wpa",
                    marginStart: "svoq16ka",
                    fontSize: "f8jlpxt4",
                    color: "sbs3osm6",
                    lineHeight: "jgi8eev7"
                };

            function b(e) {
                let {
                    businessProfile: t,
                    contact: n,
                    isPhoneNumberHidden: a,
                    onOpenStatus: b,
                    onProductCatalog: v,
                    onProfilePicClick: y,
                    onProfilePicLoad: C
                } = e;
                const {
                    businessHours: M,
                    categories: w
                } = (0, h.useModelValues)(t, ["businessHours", "categories"]), k = p.default.createElement(r.default, {
                    contact: n,
                    businessProfile: t
                });
                let S;
                (0, u.getIsIAS)(n) || (0, u.getIsCAPISupportAccount)(n) || (0, u.getId)(n).isBot() || t.isBizBot3p || null == w || !(w.length > 0) || (S = p.default.createElement("div", {
                    className: (0, m.default)(E)
                }, (0, d.default)(w.map((e => e.localized_display_name)), d.default.CONJUNCTIONS.NONE, d.default.DELIMITERS.BULLET)));
                const _ = M ? p.default.createElement(o.BusinessOpenHours, {
                        hours: M
                    }) : null,
                    P = n.businessProfile ? p.default.createElement(i.default, {
                        contact: n,
                        businessProfile: n.businessProfile,
                        onClick: y,
                        onOpenStatus: b,
                        onLoad: C
                    }) : null,
                    O = null != n.username && (n.id.isLid() && null != n.phoneNumber || !n.id.isLid()) ? p.default.createElement("div", {
                        className: (0, m.default)(E)
                    }, null != n.username && `@${n.username}`) : null;
                return p.default.createElement(c.default, {
                    theme: "padding-no-margin"
                }, P, p.default.createElement("div", {
                    className: (0, m.default)(g)
                }, k, a && p.default.createElement(s.default, null), (0, f.usernameDisplayedEnabled)() && O, S, _, p.default.createElement(l.default, {
                    contact: n,
                    onProductCatalog: v,
                    displayRequestPnButton: a
                })))
            }
            b.displayName = "BusinessTopCard"
        },
        637659: (e, t, n) => {
            "use strict";
            var a = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                let {
                    text: t,
                    handleClick: n
                } = e;
                return o.default.createElement(o.default.Fragment, null, t, null != n && o.default.createElement(o.default.Fragment, null, " ", o.default.createElement(l.default, {
                    onClick: n
                }, r.fbt._("Learn more", null, {
                    hk: "1rcCLt"
                }))))
            };
            var l = a(n(196554)),
                r = n(548360),
                o = a(n(667294))
        },
        855026: (e, t, n) => {
            "use strict";
            var a = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.ExitedGroupMemberSection = d;
            var l = a(n(969358)),
                r = n(355793),
                o = n(690495),
                i = n(753284),
                u = n(851488),
                s = n(548360),
                c = a(n(667294));

            function d(e) {
                let {
                    group: t
                } = e;
                return (0, i.groupsPrivacyTipsEnabled)() ? c.default.createElement(l.default, null, c.default.createElement(o.FlexColumn, {
                    padding: 16,
                    align: "center"
                }, c.default.createElement(u.WDSTextTitle, null, s.fbt._("You're no longer a participant in this group", null, {
                    hk: "1O1CWh"
                })), c.default.createElement(r.ExitedGroupQPSurface, {
                    group: t
                }))) : null
            }
            d.displayName = "ExitedGroupMemberSection"
        },
        466488: (e, t, n) => {
            "use strict";
            var a = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = v;
            var l = a(n(170206)),
                r = n(394164),
                o = n(653106),
                i = n(23641),
                u = a(n(969358)),
                s = n(305521),
                c = a(n(932325)),
                d = n(510900),
                f = n(220584),
                p = n(180519),
                m = n(548360),
                h = function(e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || "object" != typeof e && "function" != typeof e) return {
                        default: e
                    };
                    var n = b(t);
                    if (n && n.has(e)) return n.get(e);
                    var a = {},
                        l = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var r in e)
                        if ("default" !== r && Object.prototype.hasOwnProperty.call(e, r)) {
                            var o = l ? Object.getOwnPropertyDescriptor(e, r) : null;
                            o && (o.get || o.set) ? Object.defineProperty(a, r, o) : a[r] = e[r]
                        }
                    a.default = e, n && n.set(e, a);
                    return a
                }(n(667294)),
                g = a(n(847116)),
                E = n(655241);

            function b(e) {
                if ("function" != typeof WeakMap) return null;
                var t = new WeakMap,
                    n = new WeakMap;
                return (b = function(e) {
                    return e ? n : t
                })(e)
            }

            function v(e) {
                let {
                    onClick: t,
                    parentGroupChat: n,
                    parentGroupMetadata: a
                } = e;
                const {
                    subgroupCount: b
                } = (0, g.default)(a), {
                    name: v
                } = (0, E.useModelValues)(n.contact, ["name"]), y = (0, r.isIntegritySuspendedCommunity)(n);
                (0, h.useEffect)((() => {
                    (0, d.queryAndUpdateSubgroupsMetadata)(a.id, a.joinedSubgroups)
                }), []);
                const C = m.fbt._("Community", null, {
                    hk: "2P4Qwb"
                });
                return h.default.createElement(u.default, {
                    theme: "no-padding"
                }, h.default.createElement(l.default, {
                    testid: "group-info-community-section",
                    image: h.default.createElement(i.DetailImage, {
                        id: a.id,
                        shape: i.DetailImageShape.Squircle,
                        size: 60
                    }),
                    primary: h.default.createElement(s.EmojiText, {
                        text: v,
                        ellipsify: !0
                    }),
                    onClick: t,
                    theme: "community-home",
                    secondary: h.default.createElement(p.TextSpan, {
                        size: "16",
                        color: "secondary"
                    }, C, y ? null : h.default.createElement(h.default.Fragment, null, c.default.isRTL() ? " - " : " · ", m.fbt._({
                        "*": "{count} Groups",
                        _1: "1 Group"
                    }, [m.fbt._plural(b, "count")], {
                        hk: "38FdVG"
                    }))),
                    detail: h.default.createElement(o.ChevronRightAltIcon, {
                        color: f.SvgColorProp.SECONDARY,
                        directional: !0
                    }),
                    focusable: !0
                }))
            }
            v.displayName = "CommunityHomeSection"
        },
        483828: (e, t, n) => {
            "use strict";
            var a = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = x;
            var l = a(n(348926)),
                r = n(898817),
                o = a(n(229922)),
                i = n(287461),
                u = a(n(170206)),
                s = n(653106),
                c = n(440067),
                d = n(174834),
                f = n(909045),
                p = n(103440),
                m = n(900316),
                h = a(n(969358)),
                g = a(n(395767)),
                E = n(862159),
                b = n(299950),
                v = n(114850),
                y = a(n(550506)),
                C = a(n(834431)),
                M = n(470824),
                w = n(220584),
                k = n(180519),
                S = n(135516),
                _ = n(909588),
                P = n(548360),
                O = a(n(667294)),
                I = (a(n(156720)), a(n(524578))),
                N = n(655241),
                T = a(n(895851));
            const A = {
                communitySquircle: {
                    color: "fsk8o631"
                }
            };

            function x(e) {
                let {
                    chat: t,
                    groupMetadata: n
                } = e;
                const {
                    id: a,
                    parentGroup: x,
                    isUnnamed: L
                } = (0, N.useModelValues)(n, ["id", "parentGroup", "isUnnamed"]), D = (0, I.default)(n.participants, "change:isAdmin", (() => n.participants.iAmAdmin())), R = (0, I.default)(n.participants, ["bulk_add", "bulk_remove", "reset"], (() => n.participants.length)), B = (0, i.getABPropConfigValue)("parent_group_min_participants_for_group_entry_point"), j = (0, T.default)();
                if (!(0, d.communitiesEnabled)() || !D || null != x || R < B || n.groupType === E.GroupType.LINKED_ANNOUNCEMENT_GROUP || !(0, d.communitiesCreationEnabled)()) return null;
                const W = () => {
                        m.DrawerManager.openDrawerLeft(O.default.createElement(C.default, {
                            existingGroups: [a]
                        }), {
                            focusType: b.FocusType.TABBABLE
                        }), c.UiCommunityCreationAction.startSession(_.COMMUNITY_CREATION_ENTRYPOINT_TYPE.GROUP_INFO), c.UiCommunityCreationAction.enter(S.COMMUNITY_CREATION_CURRENT_SCREEN_TYPE.GROUP_INFO)
                    },
                    F = function() {
                        var e = (0, l.default)((function*(e) {
                            yield(0, o.default)((0, M.setGroupSubject)(t, e), j).catch((0, r.catchAbort)((() => {}))).catch((() => {
                                __LOG__(3)
                                `name_group_modal:onSetSubject failed`
                            })), v.ModalManager.close(), W()
                        }));
                        return function() {
                            return e.apply(this, arguments)
                        }
                    }(),
                    G = () => {
                        v.ModalManager.open(O.default.createElement(p.ConfirmPopup, {
                            onOK: () => v.ModalManager.close(),
                            okText: (0, g.default)("OK")
                        }, P.fbt._("Only admins can edit this group's info", null, {
                            hk: "1a2ztg"
                        })))
                    };
                return O.default.createElement(h.default, {
                    theme: "no-padding"
                }, O.default.createElement(u.default, {
                    testid: "group-info-create-community-section",
                    image: O.default.createElement(f.CommunitySquircleIcon, {
                        iconXstyle: A.communitySquircle,
                        width: 40,
                        height: 40
                    }),
                    primary: O.default.createElement(k.TextSpan, {
                        size: "16"
                    }, P.fbt._("Add group to a community", null, {
                        hk: "Izcs6"
                    })),
                    onClick: () => {
                        if (L) {
                            var e, n;
                            const a = P.fbt._("This group was created without a name. Give it a name to create a community.", null, {
                                hk: "2BkS8"
                            });
                            v.ModalManager.open(O.default.createElement(y.default, {
                                chat: t,
                                subtext: a,
                                onCancel: () => v.ModalManager.close(),
                                onOK: F,
                                editable: null === (e = t.groupMetadata) || void 0 === e ? void 0 : e.canSetSubject(),
                                editRestrictionInfo: (null === (n = t.groupMetadata) || void 0 === n ? void 0 : n.restrict) ? G : void 0
                            }))
                        } else W()
                    },
                    theme: "community-create",
                    secondary: O.default.createElement(k.TextSpan, {
                        size: "14",
                        color: "secondary"
                    }, P.fbt._("Bring members together in topic-based groups", null, {
                        hk: "4mplI5"
                    })),
                    detail: O.default.createElement(s.ChevronRightAltIcon, {
                        color: w.SvgColorProp.SECONDARY,
                        directional: !0
                    }),
                    focusable: !0
                }))
            }
            x.displayName = "CreateCommunitySection"
        },
        20864: (e, t, n) => {
            "use strict";
            var a = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = f;
            var l = a(n(707655)),
                r = n(174834),
                o = n(862159),
                i = n(548360),
                u = a(n(667294)),
                s = a(n(156720)),
                c = n(655241);
            const d = {
                color: "tviruh8d",
                fontSize: "enbbiyaj"
            };

            function f(e) {
                const {
                    chat: t
                } = e, n = (0, c.useOptionalModelValues)(t.groupMetadata, ["groupType"]);
                let a;
                return a = (0, r.communitiesEnabled)() && (null == n ? void 0 : n.groupType) === o.GroupType.LINKED_ANNOUNCEMENT_GROUP ? u.default.createElement("div", {
                    className: (0, s.default)(d)
                }, i.fbt._("Get the latest announcements from the admins of this community.", null, {
                    hk: "2CDZai"
                })) : i.fbt._("Add group description", null, {
                    hk: "BVsoQ"
                }), u.default.createElement(l.default, {
                    chat: e.chat,
                    showFullDescription: e.showFullDescription,
                    editRestrictionText: i.fbt._("Only admins can edit this group's info", null, {
                        hk: "1a2ztg"
                    }),
                    testid: "group-info-drawer-description-title-input",
                    containerTestId: "group-info-drawer-description-container",
                    emptyValuePlaceholder: a
                })
            }
            f.displayName = "GroupInfoDescriptionSection"
        },
        941943: (e, t, n) => {
            "use strict";
            var a = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var l = n(287461),
                r = n(738501),
                o = n(374660),
                i = a(n(306007)),
                u = n(464659),
                s = a(n(740681)),
                c = n(998123),
                d = n(174834),
                f = n(359198),
                p = n(692310),
                m = n(660666),
                h = a(n(908081)),
                g = a(n(324093)),
                E = n(626194),
                b = a(n(969358)),
                v = a(n(209064)),
                y = n(71957),
                C = n(855026),
                M = a(n(570834)),
                w = n(714574),
                k = a(n(466488)),
                S = a(n(483828)),
                _ = a(n(20864)),
                P = a(n(299723)),
                O = n(767140),
                I = n(951688),
                N = a(n(453090)),
                T = n(503028),
                A = a(n(483447)),
                x = n(862159),
                L = n(20194),
                D = n(97858),
                R = n(114850),
                B = a(n(832897)),
                j = n(111367),
                W = n(474474),
                F = a(n(410731)),
                G = n(712648),
                H = n(128754),
                V = n(163139),
                U = n(428991),
                z = n(983271),
                q = n(220584),
                Y = n(180519),
                K = n(382117),
                Z = n(676345),
                X = n(402011),
                Q = n(571444),
                $ = n(521394),
                J = n(965927),
                ee = n(744976),
                te = n(869513),
                ne = n(818674),
                ae = n(954141),
                le = n(548360),
                re = function(e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || "object" != typeof e && "function" != typeof e) return {
                        default: e
                    };
                    var n = me(t);
                    if (n && n.has(e)) return n.get(e);
                    var a = {},
                        l = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var r in e)
                        if ("default" !== r && Object.prototype.hasOwnProperty.call(e, r)) {
                            var o = l ? Object.getOwnPropertyDescriptor(e, r) : null;
                            o && (o.get || o.set) ? Object.defineProperty(a, r, o) : a[r] = e[r]
                        }
                    a.default = e, n && n.set(e, a);
                    return a
                }(n(667294)),
                oe = a(n(156720)),
                ie = n(379811),
                ue = a(n(401715)),
                se = a(n(969651)),
                ce = a(n(637660)),
                de = n(808446),
                fe = n(655241),
                pe = a(n(321201));

            function me(e) {
                if ("function" != typeof WeakMap) return null;
                var t = new WeakMap,
                    n = new WeakMap;
                return (me = function(e) {
                    return e ? n : t
                })(e)
            }
            const he = {
                body: {
                    flexShrink: "oq44ahr5",
                    flexGrow: "tvf2evcx",
                    flexBasis: "lb5m6g5c",
                    paddingBottom: "s9fl9ege"
                },
                announcementGroupDisclaimer: {
                    textAlign: "ljrqcn24",
                    paddingTop: "n1yiu2zv",
                    paddingBottom: "jd93c9cp",
                    paddingEnd: "bcymb0na",
                    paddingStart: "e8k79tju",
                    lineHeight: "jgi8eev7",
                    wordBreak: "cw3vfol9"
                },
                lastSectionRow: {
                    marginBottom: "brac1wpa"
                }
            };

            function ge(e, t) {
                var n, a, me;
                const {
                    onVerification: ge,
                    onClose: Ee
                } = e, be = (0, pe.default)(), ve = (0, se.default)(), ye = (0, ue.default)(), Ce = (0, fe.useModelValues)(e.chat, ["mute", "id", "pendingAction", "groupMetadata"]), Me = (0, fe.useModelValues)(e.groupMetadata, ["id", "reportToAdminMode", "cachedDeviceCount", "cachedDeviceSizeBucket", "participants", "parentGroup", "pendingParticipants", "announce", "support", "incognito", "groupType", "restrict", "isIncognitoCag", "defaultSubgroup"]), [we, ke, Se] = (0, ie.useContactValues)(e.contact.id, [m.getName, m.getId, w.getPendingAction]), _e = Me.groupType === x.GroupType.LINKED_ANNOUNCEMENT_GROUP, Pe = (0, ce.default)((() => new K.UiActionWamEvent({
                    uiActionType: _e ? ee.UI_ACTION_TYPE.DEFAULT_SUBGROUP_INFO_OPEN : ee.UI_ACTION_TYPE.GROUP_INFO_OPEN,
                    uiActionPreloaded: !0,
                    isLid: Me.isIncognitoCag
                }))), Oe = (0, ce.default)((() => new M.default)), Ie = (0, ce.default)((() => new M.default)), Ne = (0, re.useRef)(null);
                (0, de.useListener)(Me.participants, ["bulk_add", "bulk_remove", "reset", "sort", "change:isAdmin", "change:isSuperAdmin"], ve), (0, de.useListener)(Me.pendingParticipants, ["add", "remove", "reset"], ve);
                const Te = () => {
                        var e;
                        const t = null === (e = Me.getParentGroupChat()) || void 0 === e ? void 0 : e.formattedTitle;
                        (0, p.groupOpenAddParticipantFlow)(Me, Ce, t)
                    },
                    Ae = () => {
                        R.ModalManager.open(re.default.createElement(v.default, {
                            chat: Ce,
                            chatId: Ce.id,
                            e2eSubtype: "info_encrypted"
                        }))
                    };
                let xe;
                if ((0, re.useEffect)((() => {
                        if ((0, o.isIntegritySuspendedDefaultSubgroup)(Ce) ? (0, U.openTerminatedCommunityModal)() : (0, o.isTerminatedGroupOrNotMember)(Ce) ? (0, o.isSupportGroup)(Ce) || ((0, D.isGroupSuspendV2Enabled)() ? (0, z.openSuspendedGroupModalV2)(Ce) : (0, z.openTerminatedGroupOrNotMemberModal)()) : (0, o.isSuspendedGroup)(Ce) && ((0, D.isGroupSuspendV2Enabled)() ? (0, z.openSuspendedGroupModalV2)(Ce) : (0, z.openSuspendedGroupModal)(!0 === (0, o.shouldIncludeEntityIdInAppealRequest)() ? Me.id.user.toString() : null)), Me.groupType !== x.GroupType.DEFAULT) {
                            new f.CommunityGroupJourneyEvent({
                                action: Q.CHAT_FILTER_ACTION_TYPES.VIEW,
                                surface: J.SURFACE_TYPE.GROUP_INFO,
                                chat: Ce
                            }).commit()
                        }
                    }), []), (0, re.useEffect)((() => {
                        Me.participants.ensureSorted();
                        Me.pendingParticipants.ensureSorted()
                    })), (0, re.useEffect)((() => {
                        const e = Pe.current;
                        if (e) {
                            const t = Me.cachedDeviceSizeBucket;
                            null != t && (e.sizeBucket = t), Object.assign(e, (0, te.getGroupCountMetricsFromGroupMetadata)((0, V.unproxy)(Me)), (0, X.getAddressingModeMetricsFromGroupMetadata)((0, V.unproxy)(Me))), e.markUiActionT(), e.commit(), Pe.current = void 0
                        }(0, ne.logUiActionShadowPrivateStatsTestEvents)()
                    }), []), Me.canSetGroupProperty()) {
                    const t = re.default.createElement(Y.TextSpan, {
                            theme: "title"
                        }, le.fbt._("Group permissions", null, {
                            hk: "2B8bgm"
                        })),
                        n = re.default.createElement(G.SettingsIcon, {
                            color: q.SvgColorProp.SECONDARY,
                            height: 17
                        });
                    xe = re.default.createElement(i.default, {
                        testid: "group-settings-row",
                        side: "chevron",
                        icon: n,
                        onClick: e.onAdminSetting,
                        title: t,
                        spaced: !0
                    })
                }
                let Le = null;
                !(0, o.isSuspendedGroup)(Ce) && e.onMediaGallery && (Le = re.default.createElement(s.default, {
                    onMediaGallery: e.onMediaGallery,
                    chat: (0, V.unproxy)(Ce)
                }));
                const De = Ce && (0, r.shouldShowEphemeralSetting)(Ce) ? re.default.createElement(y.EphemeralSettingRow, {
                    onClick: e.onEphemeral,
                    chat: Ce,
                    groupMetadata: Me,
                    testid: "contact-info-dm-setting-row"
                }) : null;
                let Re = null;
                if ((0, d.communitiesEnabled)() && Ce && Me.parentGroup && Me.participants.iAmMember()) {
                    const t = Me.getParentGroupChat();
                    (null == t ? void 0 : t.groupMetadata) && (Re = re.default.createElement(k.default, {
                        onClick: () => {
                            var t;
                            null === (t = e.onCommunityClick) || void 0 === t || t.call(e)
                        },
                        parentGroupMetadata: t.groupMetadata,
                        parentGroupChat: t
                    }))
                }
                let Be = null;
                Be = re.default.createElement(F.default, {
                    highlightSurface: $.PRIVACY_HIGHLIGHT_SURFACE_ENUM.INFO_SCREEN_GROUP,
                    onClick: () => (0, j.showEncryptionInfoPopup)(Ce),
                    header: {
                        type: "encryption"
                    },
                    text: le.fbt._("Messages are end-to-end encrypted. Click to learn more.", null, {
                        hk: "2MtPh9"
                    }),
                    spaced: !0
                }), (0, o.isSupportGroup)(Ce) && (Be = re.default.createElement(A.default, {
                    onClick: Ae,
                    spaced: !0
                }));
                const je = Ce.mute.canMute() ? re.default.createElement(B.default, {
                    chat: Ce,
                    mute: Ce.mute
                }) : null;
                let We, Fe = null;
                if (!(0, o.isSuspendedGroup)(Ce) && e.onStarred) {
                    const t = re.default.createElement(Y.TextSpan, {
                            theme: "title",
                            size: "16"
                        }, le.fbt._("Starred messages", null, {
                            hk: "4wVbNG"
                        })),
                        n = re.default.createElement(H.StarIcon, {
                            color: q.SvgColorProp.SECONDARY,
                            height: 20
                        });
                    Fe = re.default.createElement(u.ChatInfoDrawerSection, {
                        titleTestId: "section-starred-messages",
                        xstyle: Z.uiPadding.horiz0
                    }, re.default.createElement(i.default, {
                        testid: "block-starred-messages",
                        side: "chevron",
                        icon: n,
                        onClick: e.onStarred,
                        title: t,
                        spaced: !0
                    }))
                }
                if (Ce.hasKeptMsgs() || (0, r.isEphemeralSettingOn)(Ce)) {
                    const t = re.default.createElement(Y.TextSpan, {
                            theme: "title",
                            size: "16"
                        }, le.fbt._("Kept Messages", null, {
                            hk: "41CBIy"
                        })),
                        n = Me.restrict ? re.default.createElement(Y.TextDiv, {
                            theme: "muted"
                        }, le.fbt._("Only admins can keep or unkeep messages in this group.", null, {
                            hk: "2Uhjiy"
                        })) : null,
                        a = re.default.createElement(L.KeepInChatIcon, {
                            color: q.SvgColorProp.SECONDARY,
                            height: 20
                        });
                    We = re.default.createElement(u.ChatInfoDrawerSection, {
                        titleTestId: "section-kept-messages",
                        xstyle: [he.lastSectionRow, Z.uiPadding.horiz0]
                    }, re.default.createElement(i.default, {
                        testid: "block-kept-messages",
                        side: "chevron",
                        icon: a,
                        onClick: e.onKept,
                        title: t,
                        secondaryTitle: n,
                        spaced: !0
                    }))
                }
                const Ge = (0, W.isReactionsEnabledInCAG)(Ce) ? re.default.createElement(c.PhoneNumberVisibilityIndicatorCag, {
                        chat: Ce
                    }) : null,
                    He = (0, l.getABPropConfigValue)("report_to_admin_kill_switch") && Me.reportToAdminMode && Me.canSetGroupProperty() ? re.default.createElement(i.default, {
                        testid: "block-rta-messages",
                        side: "chevron",
                        icon: re.default.createElement(ae.WarningIcon, {
                            color: q.SvgColorProp.SECONDARY,
                            height: 16
                        }),
                        onClick: e.onSentForAdminReview,
                        title: re.default.createElement(Y.TextSpan, {
                            theme: "title",
                            size: "16"
                        }, le.fbt._("Sent for admin review", null, {
                            hk: "2gzsHo"
                        })),
                        spaced: !0
                    }) : null;
                let Ve = null;
                (je || Be || De) && (Ve = re.default.createElement(u.ChatInfoDrawerSection, {
                    xstyle: [he.lastSectionRow, Z.uiPadding.horiz0]
                }, je, He, Be, De, xe, Ge));
                const Ue = re.default.createElement(P.default, {
                        chat: (0, V.unproxy)(Ce)
                    }),
                    ze = {
                        surface: "group-info-drawer",
                        extras: {
                            groupSize: Me.participants.length,
                            typeOfGroup: (0, x.groupTypeToWamEnum)((0, x.getGroupTypeFromGroupMetadata)((0, V.unproxy)(Me)))
                        }
                    },
                    qe = Boolean(null === (n = Ce.groupMetadata) || void 0 === n ? void 0 : n.isIncognitoCag) && !(null === (a = Ce.groupMetadata) || void 0 === a || null === (me = a.participants) || void 0 === me ? void 0 : me.iAmAdmin()) ? re.default.createElement(b.default, {
                        theme: "transparent",
                        shadow: !1
                    }, re.default.createElement(Y.TextParagraph, {
                        xstyle: he.announcementGroupDisclaimer,
                        color: "secondary"
                    }, le.fbt._("Only admins can see all participants in this group", null, {
                        hk: "39jP44"
                    }))) : null;
                return re.default.createElement("div", {
                    role: "complementary",
                    ref: ye,
                    tabIndex: "-1",
                    "aria-label": le.fbt._("Group Info", null, {
                        hk: "3P80cG"
                    })
                }, re.default.createElement(h.default, {
                    ref: t,
                    key: "contact-info-modal",
                    theme: "striped",
                    testid: "chat-info-drawer",
                    tsNavigationData: ze
                }, re.default.createElement(E.DrawerHeader, {
                    title: le.fbt._("Group info", null, {
                        hk: "2SfTUZ"
                    }),
                    type: E.DRAWER_HEADER_TYPE.SMALL,
                    rtlFixIfOnDarwin: !0,
                    onCancel: () => {
                        Ee ? Ee() : null == be || be.requestDismiss()
                    },
                    testid: "group-info-header"
                }), re.default.createElement(g.default, null, re.default.createElement("section", {
                    className: (0, oe.default)(he.body)
                }, re.default.createElement(N.default, {
                    chat: (0, V.unproxy)(Ce),
                    onAdminSetting: e.onAdminSetting,
                    onAddParticipant: Te,
                    onClickParticipantsCount: () => {
                        var e;
                        null === (e = Ne.current) || void 0 === e || e.scrollIntoView()
                    }
                }), Re, re.default.createElement(_.default, {
                    chat: (0, V.unproxy)(Ce),
                    showFullDescription: e.showFullGroupDescription
                }), Le, Fe, We, Ve, undefined, re.default.createElement(S.default, {
                    chat: Ce,
                    groupMetadata: Me
                }), !Me.participants.iAmMember() && re.default.createElement(C.ExitedGroupMemberSection, {
                    group: Ce
                }), re.default.createElement(O.GroupInfoParticipantsSection, {
                    ref: Ne,
                    chat: (0, V.unproxy)(Ce),
                    scrollToParticipantList: e.scrollToParticipantList,
                    flatListController: Oe.current,
                    onAddParticipant: Te,
                    onOpenParticipantSearch: e => {
                        R.ModalManager.open(re.default.createElement(T.GroupParticipantsFlow, {
                            chat: (0, V.unproxy)(Ce),
                            onVerification: ge,
                            initialStep: e
                        }), {
                            transition: "modal-flow"
                        })
                    },
                    onGroupInviteLink: e.onGroupInviteLink,
                    onPendingParticipants: e.onPendingParticipants,
                    onVerification: e.onVerification
                }), qe, re.default.createElement(I.GroupInfoPendingParticipantsSection, {
                    chat: (0, V.unproxy)(Ce),
                    flatListController: Ie.current
                }), Ue))))
            }
            var Ee = (0, re.forwardRef)(ge);
            t.default = Ee
        },
        767140: (e, t, n) => {
            "use strict";
            var a = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.GroupInfoParticipantsSection = void 0;
            var l = a(n(670983)),
                r = n(632157),
                o = n(287461),
                i = n(633757),
                u = n(72696),
                s = a(n(170206)),
                c = n(374660),
                d = n(464659),
                f = a(n(831584)),
                p = a(n(314810)),
                m = n(698867),
                h = n(780549),
                g = n(474103),
                E = n(877171),
                b = n(103440),
                v = n(660666),
                y = n(465113),
                C = n(675085),
                M = n(235630),
                w = n(305521),
                k = n(581354),
                S = n(512938),
                _ = n(714574),
                P = n(503028),
                O = n(862159),
                I = a(n(932325)),
                N = n(659356),
                T = n(963950),
                A = n(114850),
                x = n(33014),
                L = n(164406),
                D = n(197988),
                R = n(507877),
                B = n(981058),
                j = a(n(671401)),
                W = a(n(802211)),
                F = n(578872),
                G = a(n(237889)),
                H = n(163139),
                V = n(220584),
                U = n(533426),
                z = n(392632),
                q = a(n(37875)),
                Y = n(459857),
                K = n(788271),
                Z = a(n(124928)),
                X = n(548360),
                Q = function(e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || "object" != typeof e && "function" != typeof e) return {
                        default: e
                    };
                    var n = le(t);
                    if (n && n.has(e)) return n.get(e);
                    var a = {},
                        l = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var r in e)
                        if ("default" !== r && Object.prototype.hasOwnProperty.call(e, r)) {
                            var o = l ? Object.getOwnPropertyDescriptor(e, r) : null;
                            o && (o.get || o.set) ? Object.defineProperty(a, r, o) : a[r] = e[r]
                        }
                    a.default = e, n && n.set(e, a);
                    return a
                }(n(667294)),
                $ = (a(n(156720)), a(n(524578))),
                J = a(n(969651)),
                ee = a(n(426872)),
                te = a(n(637660)),
                ne = n(808446),
                ae = n(655241);

            function le(e) {
                if ("function" != typeof WeakMap) return null;
                var t = new WeakMap,
                    n = new WeakMap;
                return (le = function(e) {
                    return e ? n : t
                })(e)
            }
            const re = {
                pendingParticipantsIcon: {
                    backgroundColor: "k6px2m13",
                    color: "cwwc04gk"
                }
            };

            function oe(e) {
                let {
                    active: t,
                    contextMenu: n,
                    data: a,
                    elevatedPushNamesEnabled: l = !1,
                    handleParticipantClick: r,
                    handleParticipantMenu: o,
                    menuEnabled: i,
                    participants: u
                } = e;
                const {
                    id: s
                } = a, c = u.get(s);
                if (!c) throw new S.UnknownDataError(a);
                const d = c.contact,
                    f = !!n && Z.default.equals(d.id, n.contactId);
                return Q.default.createElement(p.default, {
                    active: t,
                    contact: d,
                    participant: c,
                    key: c.id.toString(),
                    onClick: r,
                    contextEnabled: () => i(d),
                    contextMenu: f,
                    onContext: e => o(e, d),
                    theme: "chat-info",
                    showNotifyName: !0,
                    waitIdle: !0,
                    showStatusRingAroundProfilePhoto: !0,
                    participantCollection: u,
                    elevatedPushNamesEnabled: l
                })
            }
            oe.displayName = "ParticipantItem";
            const ie = (0, Q.forwardRef)(((e, t) => {
                var n;
                const a = (0, ae.useModelValues)((0, l.default)(e.chat.groupMetadata, "props.chat.groupMetadata"), ["support", "size", "id", "membershipApprovalMode", "membershipApprovalRequests", "isUnnamed", "isLidAddressingMode", "participants"]),
                    {
                        membershipApprovalMode: p,
                        membershipApprovalRequests: S
                    } = a,
                    Z = (0, te.default)((() => new G.default([], (e => e.id.toString())))),
                    le = (0, l.default)(e.chat.groupMetadata, "props.chat.groupMetadata").participants;
                let ie = le.toArray();
                (0, g.hideCagMaskedParticipants)() && !0 !== a.isLidAddressingMode && (ie = le.filter((e => {
                    let {
                        id: t
                    } = e;
                    return (0, Y.isMeAccount)(t) || !t.isLid()
                })));
                const se = (0, c.getGroupParticipantsCount)(a),
                    ce = (0, J.default)();
                (0, ne.useListener)(le, "bulk_add bulk_remove reset sort change:isAdmin change:isSuperAdmin", ce);
                const [de, fe] = (0, Q.useState)(!0), pe = (0, Q.useRef)(), [me, he] = (0, Q.useState)(), ge = (0, c.isCommunityAnnouncementGroup)(e.chat);
                (0, Q.useEffect)((() => {
                    e.scrollToParticipantList && pe.current && (0, y.scrollIntoViewIfNeeded)(pe.current, !1)
                }), [e.scrollToParticipantList]), (0, Q.useImperativeHandle)(t, (() => ({
                    scrollIntoView() {
                        var e;
                        null === (e = pe.current) || void 0 === e || e.scrollIntoView()
                    }
                })));
                const [Ee, be] = (0, ee.default)(a), ve = (0, $.default)(S, ["add", "remove", "reset"], (() => S.length)), ye = (0, K.useShowPastParticipants)(e.chat), Ce = (0, Q.useMemo)((() => {
                    let e;
                    const t = [],
                        n = [];
                    ie.forEach((a => {
                        (0, v.getIsMe)(a.contact) ? e = a: a.isAdmin ? t.push(a) : n.push(a)
                    }));
                    let a = [];
                    return e && a.push(e), a = a.concat(t, n), ue(ie) && de && (a = a.slice(0, d.INFO_DRAWER_MAX_ROWS)), Z.current.init(a.map((e => e.contact))), a.map((e => ({
                        itemKey: e.id.toString(),
                        id: e.id,
                        height: 68
                    })))
                }), [de, ie]);
                if (a.isSuspendedOrTerminated()) return null;
                const Me = Q.default.createElement(F.SearchIcon, {
                    color: V.SvgColorProp.SECONDARY
                });
                let we, ke, Se, _e;
                if (Ee && !a.support) {
                    const t = Q.default.createElement(W.default, {
                        theme: "compact"
                    }, Q.default.createElement(i.AddUserIcon, {
                        directional: !0
                    }));
                    we = Q.default.createElement(s.default, {
                        testid: "add-user",
                        image: t,
                        theme: "chat-info",
                        primary: X.fbt._("Add member", null, {
                            hk: "43EiHe"
                        }),
                        onClick: e.onAddParticipant,
                        focusable: !0
                    })
                }
                if (le.iAmAdmin() && e.onGroupInviteLink && !a.support) {
                    const t = Q.default.createElement(W.default, {
                        theme: "compact"
                    }, Q.default.createElement(N.LinkIcon, null));
                    ke = Q.default.createElement(s.default, {
                        image: t,
                        theme: "chat-info",
                        primary: X.fbt._("Invite to group via link", null, {
                            hk: "3vDtFL"
                        }),
                        onClick: e.onGroupInviteLink,
                        focusable: !0
                    })
                }
                if (p && ve > 0 && (0, o.getABPropConfigValue)("group_join_request_m2") && ((0, o.getABPropConfigValue)("web_anyone_can_add_group_setting_enabled") && be || le.iAmAdmin()) && (Se = Q.default.createElement(s.default, {
                        image: Q.default.createElement(W.default, {
                            xstyle: re.pendingParticipantsIcon,
                            theme: "compact"
                        }, Q.default.createElement(B.PendingParticipantsIcon, null)),
                        theme: "chat-info",
                        primary: (0, o.getABPropConfigValue)("group_join_request_m3") ? X.fbt._("Pending requests", null, {
                            hk: "33VEuS"
                        }) : X.fbt._("Pending members", null, {
                            hk: "4ihDNY"
                        }),
                        primaryDetail: Q.default.createElement(U.Tag, {
                            round: !0
                        }, ve),
                        onClick: e.onPendingParticipants,
                        focusable: !0
                    })), ue(ie) && de) {
                    const t = ie.length <= 20,
                        n = ie.length - d.INFO_DRAWER_MAX_ROWS;
                    _e = Q.default.createElement(f.default, {
                        numMore: n,
                        onClick: () => {
                            t ? fe(!1) : e.onOpenParticipantSearch(P.ParticipantsFlowStep.Participants)
                        },
                        viewAll: !t
                    })
                } else ye && (_e = Q.default.createElement(T.ListButton, {
                    onClick: () => {
                        e.onOpenParticipantSearch(P.ParticipantsFlowStep.PastParticipants)
                    },
                    testid: "row-past-participants"
                }, X.fbt._("View past members", null, {
                    hk: "4xycZf"
                })));
                const Pe = e => {
                        const t = le.get(e.id);
                        return !!t && (le.canPromote(t) || le.canDemote(t) || le.canRemove(t) || le.canVerifyIdentity(t))
                    },
                    Oe = (t, n) => {
                        const a = le.assertGet(n.id);
                        if (!Pe(n)) return;
                        const l = [];
                        if (le.canPromote(a)) {
                            const t = () => {
                                const t = X.fbt._('Make {member} an admin for "{subject}" group?', [X.fbt._param("member", (0, _.getFormattedName)(a.contact)), X.fbt._param("subject", e.chat.contact.name)], {
                                    hk: "1toNN7"
                                });
                                A.ModalManager.open(Q.default.createElement(b.ConfirmPopup, {
                                    onOK: () => {
                                        return t = !0, a.isAdmin || (a.contact.pendingAction++, (0, x.promoteParticipants)(e.chat, [a]).finally((() => {
                                            a.contact.pendingAction--
                                        }))), void(t && A.ModalManager.close());
                                        var t
                                    },
                                    okText: X.fbt._("Make group admin", null, {
                                        hk: "3SZmiM"
                                    }),
                                    onCancel: () => A.ModalManager.close(),
                                    cancelText: X.fbt._("Cancel", null, {
                                        hk: "H0gNq"
                                    })
                                }, Q.default.createElement(w.EmojiText, {
                                    text: t
                                })))
                            };
                            let n;
                            if (ge) {
                                var r;
                                n = X.fbt._("Make admin", null, {
                                    hk: "1cHVQ6"
                                });
                                const t = null === (r = e.chat.groupMetadata) || void 0 === r ? void 0 : r.getParentGroupChat();
                                l.push(Q.default.createElement(C.DropdownItem, {
                                    testid: "mi-grp-promote-community-admin",
                                    key: "promote",
                                    action: () => {
                                        (0, R.openCommunityParticipantPromoteConfirmation)(t, a, le, a.contact)
                                    }
                                }, n))
                            } else n = X.fbt._("Make group admin", null, {
                                hk: "oCC4C"
                            }), l.push(Q.default.createElement(C.DropdownItem, {
                                testid: "mi-grp-promote-admin",
                                key: "promote",
                                action: t
                            }, n))
                        }
                        if (le.canRemove(a)) {
                            let t;
                            t = !0 === ge ? X.fbt._("Remove from community", null, {
                                hk: "WikVd"
                            }) : X.fbt._("Remove", null, {
                                hk: "2Z8i6g"
                            }), l.push(Q.default.createElement(C.DropdownItem, {
                                testid: "mi-grp-remove-participant",
                                key: "remove",
                                action: () => {
                                    var t;
                                    const l = null === (t = e.chat.groupMetadata) || void 0 === t ? void 0 : t.getParentGroupChat();
                                    if (!0 === ge && null != l) return void A.ModalManager.open(Q.default.createElement(j.default, {
                                        contact: n,
                                        parentGroupChat: l
                                    }));
                                    const r = X.fbt._('Remove {member} from "{subject}" group?', [X.fbt._param("member", (0, _.getFormattedName)(a.contact)), X.fbt._param("subject", e.chat.contact.name)], {
                                        hk: "223j9n"
                                    });
                                    A.ModalManager.open(Q.default.createElement(b.ConfirmPopup, {
                                        onOK: () => {
                                            return t = !0, a.contact.pendingAction++, (0, x.removeParticipants)(e.chat, [a]).finally((() => {
                                                a.contact.pendingAction--
                                            })), void(t && A.ModalManager.close());
                                            var t
                                        },
                                        okText: X.fbt._("Remove", null, {
                                            hk: "2GRvdl"
                                        }),
                                        onCancel: () => A.ModalManager.close(),
                                        cancelText: X.fbt._("Cancel", null, {
                                            hk: "H0gNq"
                                        })
                                    }, Q.default.createElement(w.EmojiText, {
                                        text: r
                                    })))
                                }
                            }, t))
                        }
                        if (le.canDemote(a)) {
                            const t = () => {
                                    a.isAdmin && (a.contact.pendingAction++, (0, x.demoteParticipants)(e.chat, [a]).finally((() => {
                                        a.contact.pendingAction--
                                    })))
                                },
                                n = X.fbt._("Dismiss as admin", null, {
                                    hk: "2YfmwL"
                                });
                            if (ge) {
                                var o;
                                const t = null === (o = e.chat.groupMetadata) || void 0 === o ? void 0 : o.getParentGroupChat();
                                l.push(Q.default.createElement(C.DropdownItem, {
                                    testid: "mi-grp-community-demote",
                                    key: "demote-admin",
                                    action: () => (0, D.openCommunityParticipantDemoteConfirmation)(a, t)
                                }, n))
                            } else l.push(Q.default.createElement(C.DropdownItem, {
                                testid: "mi-grp-demote",
                                key: "demote-admin",
                                action: t
                            }, n))
                        }
                        if (le.canVerifyIdentity(a)) {
                            const t = X.fbt._("Verify Security Code", null, {
                                hk: "1vTVgt"
                            });
                            l.push(Q.default.createElement(C.DropdownItem, {
                                testid: "mi-grp-verify-identify",
                                key: "verify-identity",
                                action: () => {
                                    e.onVerification && e.onVerification(a.contact)
                                }
                            }, t))
                        }
                        he({
                            contactId: n.id,
                            menu: l,
                            anchor: t.anchor,
                            event: t.event
                        })
                    },
                    Ie = (t, n) => {
                        const a = (0, c.getOneToOneContactFromGroupContact)(n.id);
                        (0, k.findChat)(a, "groupInfoParticipants").then((t => {
                            (0, o.getABPropConfigValue)("unified_user_profile_navigation_enabled") ? h.Cmd.chatInfoDrawer(t, {
                                showFullGroupDescription: !1,
                                scrollToParticipantList: !1,
                                sourceGroupChatOrNewsletter: (0, H.unproxy)(e.chat)
                            }): h.Cmd.openChatFromUnread(t).then((e => {
                                e && ((0, u.btmThreadsLoggingEnabled)() && E.ComposeBoxActions.addMsgSendingLogAttributes(t, {
                                    handleMultiple() {
                                        (0, m.handleActivitiesForChatThreadLogging)([{
                                            activityType: "groupMembershipReplies",
                                            ts: (0, r.unixTime)(),
                                            chatId: t.id
                                        }])
                                    }
                                }), E.ComposeBoxActions.focus(t))
                            }))
                        }))
                    },
                    Ne = (0, M.elevatedPushNamesM2Enabled)(e.chat),
                    Te = (null === (n = e.chat.groupMetadata) || void 0 === n ? void 0 : n.groupType) === O.GroupType.LINKED_ANNOUNCEMENT_GROUP ? se : le.length,
                    Ae = X.fbt._({
                        "*": "Members list: {group-participants} members",
                        _1: "Members list: 1 member"
                    }, [X.fbt._plural(Te, "group-participants")], {
                        hk: "3zW2fH"
                    }),
                    xe = I.default.n(Te),
                    Le = le.length ? Q.default.createElement(d.ChatInfoDrawerListSection, {
                        ref: pe,
                        titleTestId: "section-participants",
                        testid: "group-info-participants-section",
                        title: X.fbt._({
                            "*": "{number-of-participants} members",
                            _1: "{number-of-participants} member"
                        }, [X.fbt._plural(Te), X.fbt._param("number-of-participants", xe)], {
                            hk: "2SJ8yz"
                        }),
                        titleOnClick: () => {
                            e.onOpenParticipantSearch(P.ParticipantsFlowStep.Participants)
                        },
                        subtitle: Me
                    }, we, ke, Se, Q.default.createElement(L.NavigableFlatList, {
                        ariaLabel: Ae,
                        flatListController: e.flatListController,
                        listData: Ce,
                        onRenderItem: e => Q.default.createElement(oe, {
                            active: Z.current,
                            data: e,
                            participants: le,
                            handleParticipantClick: Ie,
                            menuEnabled: Pe,
                            handleParticipantMenu: Oe,
                            contextMenu: me,
                            elevatedPushNamesEnabled: Ne
                        }),
                        selection: Z.current,
                        rotateList: !0
                    }), _e) : null,
                    De = () => {
                        he(null)
                    };
                let Re;
                return me && (Re = Q.default.createElement(z.UIE, {
                    displayName: "ChatContextMenu",
                    escapable: !0,
                    popable: !0,
                    dismissOnWindowResize: !0,
                    requestDismiss: De
                }, Q.default.createElement(q.default, {
                    contextMenu: me
                }))), Q.default.createElement(Q.default.Fragment, null, Le, Re)
            }));

            function ue(e) {
                return e.length > d.INFO_DRAWER_MAX_ROWS_IN_COLLAPSED_LIST
            }
            t.GroupInfoParticipantsSection = ie, ie.displayName = "GroupInfoParticipantsSection"
        },
        951688: (e, t, n) => {
            "use strict";
            var a = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.GroupInfoPendingParticipantsSection = I, t.PendingParticipantItem = O;
            var l = a(n(348926)),
                r = a(n(670983)),
                o = n(464659),
                i = a(n(831584)),
                u = a(n(314810)),
                s = n(103440),
                c = n(675085),
                d = n(305521),
                f = n(512938),
                p = n(714574),
                m = n(114850),
                h = n(164406),
                g = a(n(237889)),
                E = n(625786),
                b = n(390737),
                v = n(392632),
                y = a(n(37875)),
                C = n(548360),
                M = function(e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || "object" != typeof e && "function" != typeof e) return {
                        default: e
                    };
                    var n = P(t);
                    if (n && n.has(e)) return n.get(e);
                    var a = {},
                        l = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var r in e)
                        if ("default" !== r && Object.prototype.hasOwnProperty.call(e, r)) {
                            var o = l ? Object.getOwnPropertyDescriptor(e, r) : null;
                            o && (o.get || o.set) ? Object.defineProperty(a, r, o) : a[r] = e[r]
                        }
                    a.default = e, n && n.set(e, a);
                    return a
                }(n(667294)),
                w = a(n(802145)),
                k = a(n(969651)),
                S = a(n(637660)),
                _ = n(808446);

            function P(e) {
                if ("function" != typeof WeakMap) return null;
                var t = new WeakMap,
                    n = new WeakMap;
                return (P = function(e) {
                    return e ? n : t
                })(e)
            }

            function O(e) {
                let {
                    active: t,
                    data: n,
                    groupMetadata: a,
                    onContextMenu: l,
                    pendingParticipants: r
                } = e;
                const {
                    id: o
                } = n, i = r.get(o);
                if (!i) throw new f.UnknownDataError(n);
                return M.default.createElement(u.default, {
                    active: t,
                    contact: i.contact,
                    participant: i,
                    key: i.id.toString(),
                    contextEnabled: () => !1,
                    contextMenu: !0,
                    onContext: e => (e => {
                        const t = [M.default.createElement(c.DropdownItem, {
                            testid: "mi-grp-promote-admin",
                            key: "promote",
                            action: () => {
                                m.ModalManager.open(M.default.createElement(s.ConfirmPopup, {
                                    onOK: () => {
                                        m.ModalManager.close(), a.revokeGroupsV4AddInvite([i.id]).then((() => {
                                            b.ToastManager.open(M.default.createElement(E.Toast, {
                                                msg: C.fbt._("Invite reset", null, {
                                                    hk: "MgErr"
                                                })
                                            }))
                                        }))
                                    },
                                    okText: C.fbt._("Reset link", null, {
                                        hk: "2Zb3R4"
                                    }),
                                    onCancel: () => m.ModalManager.close(),
                                    cancelText: C.fbt._("Cancel", null, {
                                        hk: "H0gNq"
                                    })
                                }, M.default.createElement(d.EmojiText, {
                                    text: C.fbt._("Reset invite for {member}? If you reset the invite, {member} won't be able to use it to join this group.", [C.fbt._param("member", (0, p.getFormattedName)(i.contact))], {
                                        hk: "2ShikS"
                                    })
                                })))
                            }
                        }, C.fbt._("Revoke invite", null, {
                            hk: "4on28q"
                        }))];
                        l(t, e, i.contact)
                    })(e),
                    theme: "chat-info",
                    showNotifyName: !0,
                    isPendingParticipant: !0,
                    waitIdle: !0,
                    showStatusRingAroundProfilePhoto: !0
                })
            }

            function I(e) {
                var t, n;
                let {
                    chat: a,
                    flatListController: u
                } = e;
                const s = (0, r.default)(a.groupMetadata, "chat.groupMetadata"),
                    c = (0, r.default)(null === (t = a.groupMetadata) || void 0 === t ? void 0 : t.participants, "chat.groupMetadata?.participants"),
                    d = (0, r.default)(null === (n = a.groupMetadata) || void 0 === n ? void 0 : n.pendingParticipants, "chat.groupMetadata?.pendingParticipants"),
                    f = d.toArray(),
                    p = (0, k.default)();
                (0, _.useListener)(c, "change:isAdmin change:isSuperAdmin", p), (0, _.useListener)(d, "add remove reset", p);
                const [m, E] = (0, M.useState)(N(d)), b = (0, S.default)((() => new g.default([], (e => e.id.toString())))), [P, I] = (0, M.useState)();
                (0, w.default)((0, l.default)((function*() {
                    yield s.queryGroupsV4PendingInvite(), E(N(s.pendingParticipants))
                })), [s]);
                const T = (0, M.useMemo)((() => {
                    let e = f;
                    return N(f) && m && (e = e.slice(0, o.INFO_DRAWER_MAX_ROWS)), b.current.init(e.map((e => e.contact))), e.map((e => ({
                        itemKey: e.id.toString(),
                        id: e.id,
                        height: 68
                    })))
                }), [m, f]);
                if (s.isSuspendedOrTerminated()) return M.default.createElement(M.default.Fragment, null);
                const A = (e, t, n) => {
                        const a = "click" === t.type ? void 0 : t.target;
                        I({
                            contactId: n.id,
                            menu: e,
                            anchor: a,
                            event: t.anchor ? void 0 : t
                        })
                    },
                    x = C.fbt._({
                        "*": "Invited members list: {group-participants} members",
                        _1: "Invited members list: 1 member"
                    }, [C.fbt._plural(d.length, "group-participants")], {
                        hk: "2QQhyt"
                    });
                let L, D, R;
                if (d.length > 0 && (L = M.default.createElement(h.NavigableFlatList, {
                        ariaLabel: x,
                        flatListController: u,
                        listData: T,
                        onRenderItem: e => M.default.createElement(O, {
                            active: b.current,
                            data: e,
                            onContextMenu: A,
                            pendingParticipants: d,
                            groupMetadata: s
                        }),
                        selection: b.current,
                        rotateList: !0
                    })), N(d) && m) {
                    const e = d.length - o.INFO_DRAWER_MAX_ROWS;
                    D = M.default.createElement(i.default, {
                        numMore: e,
                        onClick: () => {
                            E(!1)
                        }
                    })
                }
                c.iAmAdmin() && d.length > 0 && (R = M.default.createElement(o.ChatInfoDrawerListSection, {
                    titleTestId: "section-participants",
                    title: C.fbt._("{number} invited", [C.fbt._param("number", d.length)], {
                        hk: "2x0c1D"
                    })
                }, L, D));
                const B = () => {
                    I(null)
                };
                let j;
                return P && (j = M.default.createElement(v.UIE, {
                    displayName: "ChatContextMenu",
                    escapable: !0,
                    popable: !0,
                    dismissOnWindowResize: !0,
                    requestDismiss: B
                }, M.default.createElement(y.default, {
                    contextMenu: P
                }))), M.default.createElement(M.default.Fragment, null, R, j)
            }

            function N(e) {
                return e.length > o.INFO_DRAWER_MAX_ROWS_IN_COLLAPSED_LIST
            }
            O.displayName = "PendingParticipantItem", I.displayName = "GroupInfoPendingParticipantsSection"
        },
        453090: (e, t, n) => {
            "use strict";
            var a = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = V;
            var l = a(n(348926)),
                r = n(898817),
                o = n(122583),
                i = a(n(670983)),
                u = a(n(229922)),
                s = n(287461),
                c = n(374660),
                d = n(174834),
                f = n(103440),
                p = n(306703),
                m = a(n(969358)),
                h = a(n(395767)),
                g = n(690495),
                E = a(n(559719)),
                b = n(600145),
                v = n(862159),
                y = a(n(932325)),
                C = a(n(344460)),
                M = G(n(288057)),
                w = n(114850),
                k = n(21645),
                S = n(843337),
                _ = n(588792),
                P = n(511696),
                O = n(849550),
                I = n(470824),
                N = n(180519),
                T = a(n(625903)),
                A = n(802027),
                x = n(548360),
                L = G(n(667294)),
                D = a(n(156720)),
                R = a(n(969651)),
                B = n(808446),
                j = n(655241),
                W = a(n(895851));

            function F(e) {
                if ("function" != typeof WeakMap) return null;
                var t = new WeakMap,
                    n = new WeakMap;
                return (F = function(e) {
                    return e ? n : t
                })(e)
            }

            function G(e, t) {
                if (!t && e && e.__esModule) return e;
                if (null === e || "object" != typeof e && "function" != typeof e) return {
                    default: e
                };
                var n = F(t);
                if (n && n.has(e)) return n.get(e);
                var a = {},
                    l = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for (var r in e)
                    if ("default" !== r && Object.prototype.hasOwnProperty.call(e, r)) {
                        var o = l ? Object.getOwnPropertyDescriptor(e, r) : null;
                        o && (o.get || o.set) ? Object.defineProperty(a, r, o) : a[r] = e[r]
                    }
                return a.default = e, n && n.set(e, a), a
            }
            const H = {
                photo: {
                    marginBottom: "njub1g37"
                },
                groupSecondary: {
                    lineHeight: "a4ywakfo",
                    marginTop: "ma4rpf0l",
                    textAlign: "qfejxiq4"
                }
            };

            function V(e) {
                var t, n, a, l;
                let {
                    chat: r,
                    onAddParticipant: o,
                    onAdminSetting: i,
                    onClickParticipantsCount: u
                } = e;
                const s = (0, j.useModelValues)(r, ["labels"]),
                    c = (0, j.useOptionalModelValues)(r.groupMetadata, ["size", "creation"]),
                    d = null === (t = r.groupMetadata) || void 0 === t ? void 0 : t.groupType,
                    f = null === (n = r.groupMetadata) || void 0 === n ? void 0 : n.participants,
                    h = (0, R.default)();
                (0, B.useListener)(f, "bulk_add bulk_remove reset sort change:isAdmin change:isSuperAdmin", h);
                const E = null !== (a = null == f ? void 0 : f.length) && void 0 !== a ? a : 0,
                    M = null !== (l = null == c ? void 0 : c.size) && void 0 !== l ? l : 0,
                    w = (null == f ? void 0 : f.iAmAdmin()) ? E : M;
                let k = x.fbt._("Group", null, {
                    hk: "DNiv2"
                });
                d === v.GroupType.LINKED_ANNOUNCEMENT_GROUP && (k = x.fbt._("Announcements", null, {
                    hk: "GNIKa"
                }));
                const S = x.fbt._({
                    "*": "{number} members",
                    _1: "1 member"
                }, [x.fbt._plural(d === v.GroupType.LINKED_ANNOUNCEMENT_GROUP ? w : E, "number")], {
                    hk: "16da9S"
                });
                return L.default.createElement(m.default, {
                    theme: "padding-large"
                }, L.default.createElement(g.FlexColumn, {
                    align: "center"
                }, L.default.createElement(U, {
                    chat: r,
                    xstyle: H.photo,
                    sendGroupProfilePictureLoggingEvent: (e, t, n) => {
                        var a, l;
                        const o = null == r || null === (a = r.groupMetadata) || void 0 === a ? void 0 : a.creation,
                            i = new Date(1e3 * (null != o ? o : 0)),
                            u = new Intl.DateTimeFormat("en", {
                                year: "numeric"
                            }).format(i),
                            s = new Intl.DateTimeFormat("en", {
                                month: "2-digit"
                            }).format(i),
                            c = new Intl.DateTimeFormat("en", {
                                day: "2-digit"
                            }).format(i),
                            d = null != o ? `${u}-${s}-${c}` : "",
                            p = (0, A.numberToPreciseSizeBucket)(w),
                            m = null !== (l = null == f ? void 0 : f.iAmAdmin()) && void 0 !== l && l;
                        new b.GroupProfilePictureWamEvent({
                            groupCreationDs: d,
                            groupProfileAction: e,
                            preciseGroupSizeBucket: p,
                            isAdmin: m,
                            hasProfilePicture: t,
                            profilePictureType: n
                        }).commit()
                    }
                }), L.default.createElement(q, {
                    chat: r
                }), L.default.createElement("div", {
                    className: (0, D.default)(H.groupSecondary)
                }, L.default.createElement(p.SelectableSpan, {
                    dir: "auto",
                    selectable: !0
                }, L.default.createElement(N.TextSpan, {
                    size: "16",
                    color: "secondary"
                }, k, (null == c ? void 0 : c.isSuspendedOrTerminated()) ? null : L.default.createElement(L.default.Fragment, null, y.default.isRTL() ? " - " : " · ", L.default.createElement(T.default, {
                    onClick: u
                }, S))))), L.default.createElement(C.default, {
                    labels: s.labels
                })))
            }

            function U(e) {
                let {
                    chat: t,
                    sendGroupProfilePictureLoggingEvent: n,
                    xstyle: a
                } = e;
                const l = (0, j.useModelValues)(t, ["isReadOnly"]),
                    s = (0, j.useModelValues)(t.contact, ["id", "profilePicThumb"]),
                    f = (0, j.useModelValues)(t.contact.profilePicThumb, ["imgFull"]),
                    p = (0, j.useModelValues)((0, i.default)(t.groupMetadata, "chatProp.groupMetadata"), ["groupType"]),
                    [m, h] = (0, L.useState)(!1),
                    [g, E] = (0, L.useState)(!1),
                    b = (0, W.default)(),
                    y = p.groupType === v.GroupType.LINKED_ANNOUNCEMENT_GROUP;
                let C = _.PhotoPickerType.GROUP;
                (0, d.communitiesEnabled)() && (y ? C = _.PhotoPickerType.DEFAULT_ANNOUNCEMENT_GROUP : p.groupType === v.GroupType.LINKED_GENERAL_GROUP && (0, d.communityGeneralChatUIEnabled)() && (C = _.PhotoPickerType.GENERAL_GROUP));
                const w = l.isReadOnly || !f.canDelete() && !f.canSet() || (0, c.isSupportGroup)(l) || y || p.isSuspendedOrTerminated();
                return L.default.createElement("div", {
                    className: (0, D.default)(a)
                }, L.default.createElement(P.PhotoPickerLoadable, {
                    key: String(m),
                    type: C,
                    id: s.id,
                    attachToChat: !0,
                    pending: g,
                    startImage: f.imgFull,
                    readOnly: w,
                    onImageSet: (e, t) => {
                        let n;
                        E(!0), n = e && t ? (0, O.setProfilePic)(f, e, t) : (0, O.deleteProfilePic)(f), (0, u.default)(n, b).catch((0, r.catchAbort)((() => {}))).catch((0, o.filteredCatch)(M.ActionError, (() => {
                            __LOG__(3)
                            `GroupInfoDrawer: failed to set/delete group image`, h(!m)
                        }))).finally((() => {
                            E(!1)
                        }))
                    },
                    sendGroupProfilePictureLoggingEvent: n
                }))
            }
            V.displayName = "GroupInfoTopCard", U.displayName = "GroupInfoPhoto";
            const z = {
                marginTop: "hymafltn",
                marginEnd: "jnwc1y2a",
                marginBottom: "ngycyvoj",
                marginStart: "svoq16ka"
            };

            function q(e) {
                let {
                    chat: t
                } = e;
                const n = (0, j.useModelValues)(t.contact, ["name"]),
                    a = (0, j.useModelValues)((0, i.default)(t.groupMetadata, "chat.groupMetadata"), ["creation", "restrict", "support", "isUnnamed", "participants"]),
                    o = (0, W.default)(),
                    c = function() {
                        var e = (0, l.default)((function*(e) {
                            const a = e;
                            a !== n.name && (yield(0, u.default)((0, I.setGroupSubject)(t, a), o).catch((0, r.catchAbort)((() => {}))).catch((() => {
                                __LOG__(3)
                                `group_info_drawer:onSetSubject failed`
                            })))
                        }));
                        return function() {
                            return e.apply(this, arguments)
                        }
                    }(),
                    d = () => {
                        w.ModalManager.open(L.default.createElement(f.ConfirmPopup, {
                            onOK: () => w.ModalManager.close(),
                            okText: (0, h.default)("OK")
                        }, x.fbt._("Only admins can edit this group's info", null, {
                            hk: "1a2ztg"
                        })))
                    };
                return a.support ? L.default.createElement(N.TextHeader, {
                    className: (0, D.default)(z),
                    level: "2",
                    theme: "large"
                }, L.default.createElement(k.GroupName, {
                    chat: t,
                    groupMetadata: a,
                    breakWord: !0,
                    checkmarkLarge: !0
                })) : a.isUnnamed && (0, s.getABPropConfigValue)("ugr_enabled") ? L.default.createElement(E.default, {
                    subject: (0, S.calculateUnnamedGroupParticipantsList)(a).toLocaleString(),
                    onSave: c,
                    editable: a.canSetSubject(),
                    editRestrictionInfo: a.restrict ? d : void 0
                }) : L.default.createElement(E.default, {
                    subject: n.name || t.formattedTitle,
                    onSave: c,
                    editable: a.canSetSubject(),
                    editRestrictionInfo: a.restrict ? d : void 0
                })
            }
            q.displayName = "GroupInfoSubject"
        },
        795767: (e, t, n) => {
            "use strict";
            var a = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var l = a(n(670983)),
                r = n(374660),
                o = n(780549),
                i = n(474103),
                u = n(174834),
                s = n(153316),
                c = a(n(402085)),
                d = n(675085),
                f = n(235630),
                p = n(305521),
                m = n(581354),
                h = n(714574),
                g = n(862159),
                E = n(114850),
                b = n(33014),
                v = n(197988),
                y = n(507877),
                C = n(392632),
                M = a(n(37875)),
                w = n(676345),
                k = n(459857),
                S = n(788271),
                _ = n(851488),
                P = n(548360),
                O = function(e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || "object" != typeof e && "function" != typeof e) return {
                        default: e
                    };
                    var n = A(t);
                    if (n && n.has(e)) return n.get(e);
                    var a = {},
                        l = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var r in e)
                        if ("default" !== r && Object.prototype.hasOwnProperty.call(e, r)) {
                            var o = l ? Object.getOwnPropertyDescriptor(e, r) : null;
                            o && (o.get || o.set) ? Object.defineProperty(a, r, o) : a[r] = e[r]
                        }
                    a.default = e, n && n.set(e, a);
                    return a
                }(n(667294)),
                I = a(n(156720)),
                N = a(n(969651)),
                T = n(808446);

            function A(e) {
                if ("function" != typeof WeakMap) return null;
                var t = new WeakMap,
                    n = new WeakMap;
                return (A = function(e) {
                    return e ? n : t
                })(e)
            }
            const x = {
                dropdownText: {
                    display: "p357zi0d",
                    alignItems: "gndfcl4n"
                },
                generalChatContainer: {
                    backgroundColor: "ihvf49ua"
                }
            };

            function L(e, t) {
                var n, a;
                const {
                    chat: o,
                    onVerification: m,
                    onPastParticipants: A
                } = e, [L, R] = function(e, t) {
                    const [n, a] = (0, O.useState)(null), o = (t, n) => {
                        t.isAdmin || (t.contact.pendingAction++, (0, b.promoteParticipants)(e, [t]).finally((() => {
                            t.contact.pendingAction--
                        }))), n && E.ModalManager.close()
                    }, i = (t, n) => {
                        t.contact.pendingAction++, (0, b.removeParticipants)(e, [t]).finally((() => {
                            t.contact.pendingAction--
                        })), n && E.ModalManager.close()
                    }, u = t => {
                        t.isAdmin && (t.contact.pendingAction++, (0, b.demoteParticipants)(e, [t]).finally((() => {
                            t.contact.pendingAction--
                        })))
                    }, s = () => {
                        a(null)
                    };
                    let c;
                    n && (c = O.default.createElement(C.UIE, {
                        displayName: "ChatContextMenu",
                        escapable: !0,
                        popable: !0,
                        dismissOnWindowResize: !0,
                        requestDismiss: s
                    }, O.default.createElement(M.default, {
                        contextMenu: n
                    })));
                    return [c, (n, s) => {
                        const c = (0, l.default)(e.groupMetadata, "chat.groupMetadata").participants,
                            f = c.assertGet(s.id.toString()),
                            m = [],
                            g = (0, r.isCommunityAnnouncementGroup)(e);
                        if (c.canPromote(f)) {
                            let t;
                            if (g) {
                                var b;
                                t = P.fbt._("Make admin", null, {
                                    hk: "1cHVQ6"
                                });
                                const n = null === (b = e.groupMetadata) || void 0 === b ? void 0 : b.getParentGroupChat();
                                m.push(O.default.createElement(d.DropdownItem, {
                                    testid: "mi-grp-promote-community-admin",
                                    key: "promote",
                                    action: () => {
                                        (0, y.openCommunityParticipantPromoteConfirmation)(n, f, c, f.contact)
                                    }
                                }, t))
                            } else t = P.fbt._("Make group admin", null, {
                                hk: "3SZmiM"
                            }), m.push(O.default.createElement(d.DropdownItem, {
                                testid: "mi-grp-promote-admin",
                                key: "promote",
                                action: () => o(f, !1)
                            }, t))
                        }
                        if (c.canRemove(f)) {
                            const e = P.fbt._("Remove", null, {
                                hk: "2Z8i6g"
                            });
                            m.push(O.default.createElement(d.DropdownItem, {
                                testid: "mi-grp-remove-participant",
                                key: "remove",
                                action: () => i(f, !1)
                            }, e))
                        }
                        if (c.canDemote(f)) {
                            const t = () => u(f),
                                n = P.fbt._("Dismiss as admin", null, {
                                    hk: "243sNl"
                                });
                            if (g) {
                                var C;
                                const t = null === (C = e.groupMetadata) || void 0 === C ? void 0 : C.getParentGroupChat();
                                m.push(O.default.createElement(d.DropdownItem, {
                                    testid: "mi-grp-community-demote",
                                    key: "demote-admin",
                                    action: () => (0, v.openCommunityParticipantDemoteConfirmation)(f, t)
                                }, n))
                            } else m.push(O.default.createElement(d.DropdownItem, {
                                testid: "mi-grp-demote",
                                key: "demote-admin",
                                action: t
                            }, n))
                        }
                        if (c.canVerifyIdentity(f)) {
                            const e = P.fbt._("Verify Security Code", null, {
                                hk: "1vTVgt"
                            });
                            m.push(O.default.createElement(d.DropdownItem, {
                                testid: "mi-grp-verify-identify",
                                key: "verify-identity",
                                action: () => {
                                    E.ModalManager.close(), null == t || t(f.contact)
                                }
                            }, e))
                        }
                        const M = (0, k.isMeAccount)(f.contact.id) ? P.fbt._("Message yourself", null, {
                            hk: "LDbjA"
                        }) : P.fbt._("Message {author}", [P.fbt._param("author", (0, h.getFormattedShortName)(f.contact))], {
                            hk: "1kM7Cg"
                        });
                        m.push(O.default.createElement(d.DropdownItem, {
                            key: "message author",
                            ariaLabel: M,
                            action: D.bind(null, f.contact.id),
                            addSpacing: !0
                        }, O.default.createElement(p.EmojiText, {
                            text: M,
                            xstyle: x.dropdownText
                        })));
                        const w = "click" === n.type ? void 0 : n.target;
                        a({
                            contactId: s.id,
                            menu: m,
                            anchor: w,
                            event: n.anchor ? void 0 : n
                        })
                    }]
                }(o, m), B = (0, N.default)(), j = null === (n = o.groupMetadata) || void 0 === n ? void 0 : n.participants;
                (0, T.useListener)(j, ["bulk_add", "bulk_remove", "reset"], B);
                const W = (0, S.useShowPastParticipants)(o),
                    F = (0, i.hideCagMaskedParticipants)(),
                    G = null == j ? void 0 : j.map((e => e.contact));
                let H;
                W && (H = {
                    text: P.fbt._("View past members", null, {
                        hk: "7PBaH"
                    }),
                    onClick: A
                });
                let V = null;
                if ((null === (a = o.groupMetadata) || void 0 === a ? void 0 : a.groupType) === g.GroupType.LINKED_GENERAL_GROUP && (0, u.communityGeneralChatUIEnabled)()) {
                    var U;
                    const e = !!(null === (U = o.groupMetadata) || void 0 === U ? void 0 : U.generalChatAutoAddDisabled);
                    V = O.default.createElement("div", {
                        className: (0, I.default)([x.generalChatContainer, w.uiPadding.vert12, w.uiPadding.horiz30])
                    }, O.default.createElement(_.WDSTextMuted, null, (0, s.getGeneralChatParticipantListText)(e)))
                }
                return O.default.createElement(O.default.Fragment, null, O.default.createElement(c.default, {
                    ref: t,
                    title: P.fbt._("Search members", null, {
                        hk: "48a8jn"
                    }),
                    filter: e => {
                        var t;
                        const n = null == j ? void 0 : j.get(e.id.toString());
                        return null != n && (!F || !1 !== (null === (t = o.groupMetadata) || void 0 === t ? void 0 : t.isLidAddressingMode) || ((0, k.isMeAccount)(n.id) || !n.id.isLid()))
                    },
                    onCancel: () => {
                        E.ModalManager.close()
                    },
                    openContextOnClick: !0,
                    contextEnabled: () => !1,
                    contextMenu: e => !(0, k.isMeAccount)(e),
                    onContext: R,
                    showNotifyName: !0,
                    elevatedPushNamesEnabled: (0, f.elevatedPushNamesM2Enabled)(o),
                    listenForAdminChange: !0,
                    participantCollection: (0, l.default)(j, "participants"),
                    contacts: G,
                    button: H,
                    showStatusRingAroundProfilePhoto: !0,
                    firstRows: [V]
                }), L)
            }
            const D = e => {
                const t = (0, r.getOneToOneContactFromGroupContact)(e);
                (0, m.findChat)(t, "groupParticipantSearch").then((e => {
                    E.ModalManager.close(), o.Cmd.openChatFromUnread(e)
                }))
            };
            var R = (0, O.forwardRef)(L);
            t.default = R
        },
        503028: (e, t, n) => {
            "use strict";
            var a = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.GroupParticipantsFlow = s, t.ParticipantsFlowStep = void 0;
            var l = a(n(795767)),
                r = a(n(795367)),
                o = a(n(667294)),
                i = n(839062);
            const u = n(76672).Mirrored(["Participants", "PastParticipants"]);

            function s(e) {
                const {
                    chat: t,
                    onVerification: n,
                    initialStep: a
                } = e, [s, c] = (0, i.useFlow)(a);
                if (!c.step) return null;
                let d;
                switch (c.step) {
                    case u.Participants:
                        d = o.default.createElement(l.default, {
                            chat: t,
                            onVerification: n,
                            onPastParticipants: () => c.push(u.PastParticipants)
                        });
                        break;
                    case u.PastParticipants:
                        {
                            const e = () => c.pop();d = c.stackSize() > 1 ? o.default.createElement(r.default, {
                                chat: t,
                                onBack: e
                            }) : o.default.createElement(r.default, {
                                chat: t,
                                onClose: e
                            });
                            break
                        }
                }
                return o.default.createElement(s, {
                    flow: c
                }, d)
            }
            t.ParticipantsFlowStep = u, s.displayName = "GroupParticipantsFlow"
        },
        176809: (e, t, n) => {
            "use strict";
            var a = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = g;
            var l = a(n(170206)),
                r = n(63014),
                o = n(660666),
                i = n(23641),
                u = n(235630),
                s = n(714574),
                c = n(687352),
                d = n(21645),
                f = n(459857),
                p = n(548360),
                m = a(n(667294)),
                h = n(379811);

            function g(e) {
                const {
                    participant: t,
                    elevatedPushNamesEnabled: n = !1
                } = e, {
                    contact: a
                } = t, [g, E, b, v, y, C, M] = (0, h.useContactValues)(a.id, [o.getId, o.getShowBusinessCheckmarkAsPrimary, o.getName, o.getPushname, o.getNotifyName, s.getFormattedName, s.getFormattedPhone]), w = m.default.createElement(d.Name, {
                    contact: a,
                    showBusinessCheckmark: E,
                    showLabel: !0,
                    titlify: !0,
                    ellipsify: !0,
                    you: !0,
                    showNotifyName: n,
                    elevatedPushNamesEnabled: n
                }), k = r.Clock.pastParticipantOnDateAtTime(t.leaveTs, function(e) {
                    const t = e.id.equals((0, f.getMeUser)());
                    if (e.leaveReason === c.LeaveReason.Left) return t ? p.fbt._("Left", null, {
                        hk: "3R2igg"
                    }) : p.fbt._("Left", null, {
                        hk: "3kbdqU"
                    });
                    return t ? p.fbt._("Removed", null, {
                        hk: "4vPnHl"
                    }) : p.fbt._("Removed", null, {
                        hk: "3LiTU6"
                    })
                }(t)), S = (0, u.pushNameCanBeUsed)(a) && n ? M : null;
                return m.default.createElement(l.default, {
                    image: m.default.createElement(i.DetailImage, {
                        id: g
                    }),
                    primary: w,
                    secondary: k,
                    secondaryDetail: S
                })
            }
            g.displayName = "PastParticipant"
        },
        795367: (e, t, n) => {
            "use strict";
            var a = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var l = n(474103),
                r = n(235630),
                o = n(753233),
                i = n(258105),
                u = a(n(395767)),
                s = n(512938),
                c = n(690495),
                d = a(n(176809)),
                f = a(n(932325)),
                p = n(417696),
                m = n(608456),
                h = a(n(772549)),
                g = n(676345),
                E = n(459857),
                b = n(548360),
                v = function(e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || "object" != typeof e && "function" != typeof e) return {
                        default: e
                    };
                    var n = M(t);
                    if (n && n.has(e)) return n.get(e);
                    var a = {},
                        l = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var r in e)
                        if ("default" !== r && Object.prototype.hasOwnProperty.call(e, r)) {
                            var o = l ? Object.getOwnPropertyDescriptor(e, r) : null;
                            o && (o.get || o.set) ? Object.defineProperty(a, r, o) : a[r] = e[r]
                        }
                    a.default = e, n && n.set(e, a);
                    return a
                }(n(667294)),
                y = (a(n(156720)), a(n(261716))),
                C = a(n(524578));

            function M(e) {
                if ("function" != typeof WeakMap) return null;
                var t = new WeakMap,
                    n = new WeakMap;
                return (M = function(e) {
                    return e ? n : t
                })(e)
            }
            const w = "HEADER",
                k = "ROW",
                S = "DISCLAIMER",
                _ = (0, p.ListModalFactory)();

            function P(e, t) {
                var n;
                const {
                    chat: a,
                    onBack: o,
                    onClose: i
                } = e, u = null === (n = a.groupMetadata) || void 0 === n ? void 0 : n.pastParticipants, [s, c] = (0, y.default)(), d = (0, C.default)(u, ["buld_add", "bulk_remove", "reset"], (() => {
                    var e;
                    const t = f.default.accentFold(s),
                        n = (0, m.numberSearch)(t),
                        a = null !== (e = null == u ? void 0 : u.getValidRecords().filter((e => {
                            const a = !t || e.contact.searchMatch(t, n);
                            return (0, l.hideCagMaskedParticipants)() ? ((0, E.isMeAccount)(e.id) || !e.id.isLid()) && a : a
                        }))) && void 0 !== e ? e : [];
                    if (!a.length) return [];
                    const r = [];
                    return r.push({
                        type: w,
                        header: b.fbt._("Past members", null, {
                            hk: "1FVwkx"
                        }),
                        itemKey: "list_header"
                    }), a.forEach(((e, t) => r.push({
                        type: k,
                        participant: e,
                        itemKey: `${e.id.toString()}_${t}`
                    }))), r.push({
                        type: S
                    }), r
                }), [s]);
                return v.default.createElement(_, {
                    ref: t,
                    title: b.fbt._("Search past members", null, {
                        hk: "3zbQgT"
                    }),
                    data: d,
                    renderItem: e => v.default.createElement(O, {
                        data: e,
                        elevatedPushNamesEnabled: (0, r.elevatedPushNamesM2Enabled)(a)
                    }),
                    emptyState: v.default.createElement(T, null),
                    onSearch: c,
                    searchPlaceholder: b.fbt._("Search contacts", null, {
                        hk: "3gUOKZ"
                    }),
                    onBack: o,
                    onCancel: i
                })
            }

            function O(e) {
                var t;
                let {
                    data: n,
                    elevatedPushNamesEnabled: a
                } = e;
                switch (n.type) {
                    case w:
                        return v.default.createElement(h.default, {
                            header: null !== (t = n.header) && void 0 !== t ? t : "",
                            uppercase: !1
                        });
                    case k:
                        return v.default.createElement(d.default, {
                            participant: n.participant,
                            elevatedPushNamesEnabled: a
                        });
                    case S:
                        return v.default.createElement(N, null);
                    default:
                        throw new s.UnknownDataError(n)
                }
            }
            O.displayName = "Item";
            const I = {
                row: {
                    height: "graaj7av",
                    backgroundColor: "ihvf49ua"
                },
                disclaimer: {
                    fontSize: "f8jlpxt4",
                    color: "pm5hny62"
                },
                empty: {
                    fontSize: "enbbiyaj",
                    color: "eruf1vka"
                }
            };

            function N() {
                return v.default.createElement(c.FlexRow, {
                    xstyle: [I.row, I.disclaimer, g.uiPadding.horiz15],
                    align: "center",
                    justify: "center"
                }, v.default.createElement("span", null, b.fbt._("People who left or were removed in the last 60 days. {=m2}", [b.fbt._implicitParam("=m2", v.default.createElement(o.ExternalLink, {
                    href: (0, i.getHowToExitAndDeleteGroupsFaq)()
                }, b.fbt._("Learn More", null, {
                    hk: "44tT41"
                })))], {
                    hk: "gdXOy"
                })))
            }

            function T() {
                return v.default.createElement(v.default.Fragment, null, v.default.createElement(h.default, {
                    header: b.fbt._("Past members", null, {
                        hk: "1FVwkx"
                    }),
                    uppercase: !1
                }), v.default.createElement(c.FlexRow, {
                    xstyle: [I.row, I.empty],
                    align: "center",
                    justify: "center"
                }, v.default.createElement("span", null, (0, u.default)("No results found"))), v.default.createElement(N, null))
            }
            N.displayName = "Disclaimer", T.displayName = "Empty";
            var A = (0, v.forwardRef)(P);
            t.default = A
        },
        483447: (e, t, n) => {
            "use strict";
            var a = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = c;
            var l = a(n(306007)),
                r = n(496799),
                o = n(220584),
                i = n(180519),
                u = n(548360),
                s = a(n(667294));

            function c(e) {
                const {
                    onClick: t,
                    spaced: n
                } = e, a = s.default.createElement(i.TextSpan, {
                    theme: "title"
                }, u.fbt._("Security", null, {
                    hk: "2BYJDI"
                })), c = s.default.createElement(i.TextDiv, {
                    theme: "muted"
                }, u.fbt._("Click to learn how messages and calls are secured.", null, {
                    hk: "1UxhjE"
                })), d = s.default.createElement(r.LockIcon, {
                    color: o.SvgColorProp.SECONDARY,
                    height: 20
                });
                return s.default.createElement(l.default, {
                    icon: d,
                    onClick: t,
                    title: a,
                    secondaryTitle: c,
                    spaced: n
                })
            }
            c.displayName = "SupportSecurityDrawerSection"
        },
        788271: (e, t, n) => {
            "use strict";
            var a = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.useShowPastParticipants = function(e) {
                const t = (0, o.useOptionalModelValues)(e.groupMetadata, ["participants", "pastParticipants", "groupType"]),
                    n = null == t ? void 0 : t.pastParticipants;
                if (!(0, r.default)(n, ["bulk_add", "bulk_remove", "reset"], (() => Boolean(null == n ? void 0 : n.getValidRecords().length)))) return !1;
                if ((null == t ? void 0 : t.groupType) === l.GroupType.LINKED_ANNOUNCEMENT_GROUP) return Boolean(null == t ? void 0 : t.participants.iAmAdmin());
                return !0
            };
            var l = n(862159),
                r = a(n(524578)),
                o = n(655241)
        },
        883537: (e, t, n) => {
            "use strict";
            var a = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = m;
            var l = n(396574),
                r = a(n(936027)),
                o = a(n(674465)),
                i = n(782173),
                u = n(548360),
                s = a(n(667294)),
                c = n(655241);
            const d = e => {
                e.stopPropagation()
            };

            function f(e) {
                let {
                    msg: t,
                    url: n
                } = e;
                return s.default.createElement(i.AudioTag, {
                    url: n,
                    className: r.default.mediaViewerAudio,
                    onClick: d,
                    autoPlay: !0,
                    msg: t,
                    controls: !0,
                    testId: "media-audio"
                }, u.fbt._("Your browser doesn't support audio playback.", null, {
                    hk: "hvWWG"
                }))
            }

            function p() {
                return s.default.createElement("div", {
                    className: (0, l.classnamesConvertMeToStylexPlease)(r.default.imageAudio, r.default.mediaViewerPlaceholder),
                    onClick: d
                })
            }

            function m(e) {
                let {
                    mediaData: t,
                    msg: n
                } = e;
                const a = (0, c.useModelValues)(t, ["mediaStage", "renderableUrl"]);
                return s.default.createElement(o.default, {
                    mediaData: a,
                    placeholderRenderer: p
                }, (e => s.default.createElement(f, {
                    url: e,
                    msg: n
                })))
            }
            f.displayName = "AudioTagWrapper", m.displayName = "MediaAudio"
        },
        548290: (e, t, n) => {
            "use strict";
            var a = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = Oe;
            var l = n(8304),
                r = n(702837),
                o = a(n(170206)),
                i = n(713105),
                u = n(63014),
                s = n(780549),
                c = n(385798),
                d = n(877171),
                f = n(103440),
                p = n(431037),
                m = a(n(804418)),
                h = n(23641),
                g = n(202298),
                E = n(900316),
                b = n(664149),
                v = n(675085),
                y = n(305521),
                C = a(n(395767)),
                M = n(821130),
                w = n(690495),
                k = n(477603),
                S = n(361483),
                _ = n(163755),
                P = n(501532),
                O = n(23672),
                I = a(n(423359)),
                N = n(172259),
                T = n(69315),
                A = a(n(266466)),
                x = n(526795),
                L = n(459912),
                D = n(789955),
                R = n(97858),
                B = n(114850),
                j = n(939716),
                W = n(787742),
                F = n(722119),
                G = n(373070),
                H = n(905797),
                V = n(73225),
                U = n(352740),
                z = n(774235),
                q = n(533494),
                Y = n(313384),
                K = n(400874),
                Z = n(474474),
                X = n(812065),
                Q = a(n(313014)),
                $ = a(n(467201)),
                J = n(774401),
                ee = a(n(774396)),
                te = n(923743),
                ne = n(594149),
                ae = n(948101),
                le = n(708127),
                re = n(383296),
                oe = n(453603),
                ie = n(406404),
                ue = n(163139),
                se = n(392632),
                ce = a(n(37875)),
                de = n(909882),
                fe = n(332681),
                pe = n(720895),
                me = n(706215),
                he = n(982015),
                ge = n(459192),
                Ee = n(548360),
                be = function(e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || "object" != typeof e && "function" != typeof e) return {
                        default: e
                    };
                    var n = ke(t);
                    if (n && n.has(e)) return n.get(e);
                    var a = {},
                        l = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var r in e)
                        if ("default" !== r && Object.prototype.hasOwnProperty.call(e, r)) {
                            var o = l ? Object.getOwnPropertyDescriptor(e, r) : null;
                            o && (o.get || o.set) ? Object.defineProperty(a, r, o) : a[r] = e[r]
                        }
                    a.default = e, n && n.set(e, a);
                    return a
                }(n(667294)),
                ve = a(n(135179)),
                ye = n(808446),
                Ce = n(655241),
                Me = n(871210),
                we = a(n(17533));

            function ke(e) {
                if ("function" != typeof WeakMap) return null;
                var t = new WeakMap,
                    n = new WeakMap;
                return (ke = function(e) {
                    return e ? n : t
                })(e)
            }
            const Se = n(76672).Mirrored(["MenuBar", "Dropdown"]);

            function _e(e) {
                const t = (0, _.getChat)(e);
                t.composeQuotedMsg = e, d.ComposeBoxActions.focus(t)
            }

            function Pe(e) {
                return Ee.fbt._("Report {contact_name}", [Ee.fbt._param("contact_name", e.displayName())], {
                    hk: "3Dqyjo"
                })
            }

            function Oe(e) {
                var t;
                const {
                    msg: n,
                    onHightlightCloseEnd: a,
                    msgIndexInAlbum: l,
                    onViewOnceInfoClick: r,
                    onClose: i
                } = e, s = (0, be.useRef)(null), [c, d, f, p, m, g, E, v, M, k, S, P, O, T, A, L] = (0, Me.useMsgValues)(e.msg.id, [W.getId, W.getStar, W.getIsGroupMsg, W.getType, W.getIsGif, W.getIsViewOnce, W.getSender, _.getSenderObj, W.getT, W.getIsSentByMe, W.getIsStickerMsg, W.getBroadcastId, _.getIsUnsentMedia, W.getIsKept, W.getMessageSecret, W.getIsCarouselCard]), R = (0, H.useWAWebLocalizedViewCount)(n.id), B = (0, _.getChat)(n), F = (0, Ce.useModelValues)(e.mediaData, ["filehash", "mediaStage", "renderableUrl"]), [G, U] = (0, be.useState)(null), [z, q] = (0, be.useState)(null), Y = (0, be.useRef)(null), X = () => {
                    U(null)
                }, Q = () => {
                    q(null)
                }, $ = (0, we.default)((e => {
                    (0, Z.canReactToMessage)(e) && q({
                        dirY: b.DirY.BOTTOM,
                        dirX: b.DirX.CENTER,
                        type: b.MenuType.ReactionPicker,
                        menu: be.default.createElement(K.ReactionsPanel, {
                            msgId: e.id.toString(),
                            onSelection: t => {
                                (0, ne.sendReactionToMsg)(e, t).catch((() => {})), Q()
                            }
                        }),
                        flipOnRTL: !0,
                        anchor: Y.current
                    })
                }));
                (0, ye.useListener)(s.current, "animationend", (() => {
                    a()
                }));
                let J = n.displayName({
                    showShortName: !0,
                    withPushName: !0
                });
                f && (J += " @ " + B.title());
                const ee = be.default.createElement(ge.XViewerIcon, {
                    className_DONOTUSE: e.isHighlightClose ? I.default.highlightClose : null,
                    containerRef: s
                });
                let te;
                G ? te = be.default.createElement(se.UIE, {
                    displayName: "MsgReaction",
                    escapable: !0,
                    popable: !0,
                    dismissOnWindowResize: !0,
                    requestDismiss: X
                }, be.default.createElement(ce.default, {
                    contextMenu: G
                })) : z && (te = be.default.createElement(se.UIE, {
                    displayName: "MsgReactionPicker",
                    escapable: !0,
                    popable: !0,
                    dismissOnWindowResize: !0,
                    requestDismiss: Q
                }, be.default.createElement(ce.default, {
                    contextMenu: z
                })));
                const re = (0, V.isNewsletterViewCountEnabled)(null == B || null === (t = B.newsletterMetadata) || void 0 === t ? void 0 : t.membershipType) && null != R ? be.default.createElement(w.FlexRow, {
                    className: I.default.viewCount
                }, u.Clock.relativeDateAndTimeStr(M), be.default.createElement(D.MetaBullet, null), be.default.createElement("span", null, R)) : be.default.createElement(be.default.Fragment, null, u.Clock.relativeDateAndTimeStr(M));
                return be.default.createElement("div", {
                    className: I.default.mediaPanelHeader
                }, be.default.createElement("div", {
                    className: I.default.info
                }, be.default.createElement(o.default, {
                    idle: !0,
                    image: be.default.createElement(h.DetailImage, {
                        id: E,
                        size: 40
                    }),
                    primary: be.default.createElement(y.EmojiText, {
                        ellipsify: !0,
                        text: J
                    }),
                    secondary: re,
                    theme: "media"
                })), be.default.createElement("div", {
                    className: I.default.mediaPanelTools
                }, be.default.createElement(x.MenuBar, {
                    key: "media-panel-header",
                    theme: "strong"
                }, be.default.createElement(Ve, {
                    isMediaDownloadable: () => !g && (!!(0, j.canDownloadMsg)(n) && (!!F.renderableUrl || F.mediaStage === N.MediaDataStage.RESOLVED)),
                    msg: n,
                    msgIndexInAlbum: l,
                    onClose: i,
                    onViewOnceInfoClick: r,
                    openReactionTray: () => {
                        if (!(0, Z.canReactToMessage)(n)) return;
                        const e = {
                            dirY: b.DirY.BOTTOM,
                            dirX: b.DirX.CENTER,
                            type: b.MenuType.ReactionSendTray,
                            menu: be.default.createElement(le.SendReactionsTrayContainer, {
                                msg: n,
                                selectedCallback: e => {
                                    e !== ae.MORE_REACTIONS ? (0, ne.sendReactionToMsg)(n, e).catch((() => {})) : self.setTimeout((() => {
                                        $(n)
                                    }), 150), X()
                                }
                            }),
                            flipOnRTL: !1,
                            anchor: Y.current
                        };
                        U(e)
                    },
                    sendReactionButtonRef: Y
                }), be.default.createElement(x.MenuBarItem, {
                    testid: "btn-close",
                    icon: ee,
                    title: (0, C.default)("Close"),
                    onClick: e.onClose
                }))), te)
            }

            function Ie(e) {
                let {
                    isMediaDownloadable: t,
                    msg: n,
                    onClose: a,
                    openReactionTray: l,
                    sendReactionButtonRef: r
                } = e;
                return be.default.createElement(be.default.Fragment, null, (0, F.canReplyMsg)(n) ? be.default.createElement(Ae, {
                    msg: n,
                    onClose: a
                }) : null, (0, j.canStarMsg)(n) ? be.default.createElement(Be, {
                    msg: n
                }) : null, n.canShowKeepOrUnkeepOption() ? be.default.createElement(Re, {
                    msg: n
                }) : null, (0, j.canPinMsg)(n) ? be.default.createElement(je, {
                    msg: n
                }) : null, (0, Z.canReactToMessage)(n) ? be.default.createElement(De, {
                    msg: n,
                    openReactionTray: l,
                    sendReactionButtonRef: r
                }) : null, be.default.createElement(xe, {
                    msg: n,
                    onClose: a
                }), (0, j.canForwardMsg)(n) ? be.default.createElement(We, {
                    msg: n
                }) : null, be.default.createElement(Ue, {
                    isMediaDownloadable: t,
                    isAlbumMedia: !0,
                    msg: n,
                    onClose: a
                }))
            }

            function Ne(e) {
                let {
                    isMediaDownloadable: t,
                    msg: n,
                    onClose: a,
                    openReactionTray: l,
                    sendReactionButtonRef: r
                } = e;
                return be.default.createElement(be.default.Fragment, null, (0, W.getIsStickerMsg)(n) || (0, W.getIsCarouselCard)(n) ? null : be.default.createElement(Te, {
                    msg: n,
                    type: Se.MenuBar,
                    onClose: a
                }), !(0, W.getIsStickerMsg)(n) || (0, W.getIsCarouselCard)(n) || (0, W.getIsNewsletterMsg)(n) ? null : be.default.createElement(Ae, {
                    msg: n,
                    onClose: a
                }), (0, j.canStarMsg)(n) ? be.default.createElement(Be, {
                    msg: n
                }) : null, (0, j.canPinMsg)(n) ? be.default.createElement(je, {
                    msg: n
                }) : null, n.canShowKeepOrUnkeepOption() ? be.default.createElement(Re, {
                    msg: n
                }) : null, (0, W.getIsStickerMsg)(n) ? be.default.createElement(xe, {
                    msg: n,
                    onClose: a
                }) : null, (0, Z.canReactToMessage)(n) ? be.default.createElement(De, {
                    msg: n,
                    openReactionTray: l,
                    sendReactionButtonRef: r
                }) : null, (0, j.canForwardMsg)(n) ? be.default.createElement(We, {
                    msg: n
                }) : null, (0, W.getIsStickerMsg)(n) ? null : be.default.createElement(Le, {
                    isMediaDownloadable: t,
                    msg: n,
                    type: Se.MenuBar
                }), (0, j.canReportMsg)(n) && (0, R.messageLevelReportingEnabled)() ? be.default.createElement(Ue, {
                    isMediaDownloadable: t,
                    isAlbumMedia: !1,
                    msg: n,
                    onClose: a
                }) : null)
            }

            function Te(e) {
                let {
                    msg: t,
                    onClose: n,
                    type: a
                } = e;
                const l = e => {
                    e.stopPropagation(), n(), E.DrawerManager.existsDrawerRight((e => {
                        e && 2 === c.Column.column && E.DrawerManager.closeDrawerRight()
                    }));
                    const a = (0, i.getSearchContext)((0, _.getChat)(t), (0, ue.unproxy)(t));
                    s.Cmd.openChatAt((0, _.getChat)(t), a).then((e => {
                        e && d.ComposeBoxActions.focus((0, _.getChat)(t))
                    }))
                };
                return a === Se.Dropdown ? be.default.createElement(v.DropdownItem, {
                    action: l
                }, Ee.fbt._("Go to message", null, {
                    hk: "B1anG"
                })) : be.default.createElement(x.MenuBarItem, {
                    icon: be.default.createElement(r.BubbleIcon, null),
                    title: Ee.fbt._("Go to message", null, {
                        hk: "B1anG"
                    }),
                    onClick: l
                })
            }

            function Ae(e) {
                let {
                    msg: t,
                    onClose: n
                } = e;
                return be.default.createElement(x.MenuBarItem, {
                    icon: be.default.createElement(X.ReplyIcon, null),
                    title: Ee.fbt._("Reply", null, {
                        hk: "1C7DPa"
                    }),
                    onClick: () => {
                        n(), (0, l.delayMs)(T.CLOSE_ANIMATION_DURATION).then(_e.bind(null, (0, ue.unproxy)(t)))
                    }
                })
            }

            function xe(e) {
                let {
                    msg: t,
                    onClose: n
                } = e;
                return be.default.createElement(x.MenuBarItem, {
                    icon: be.default.createElement(p.DeleteIcon, null),
                    title: Ee.fbt._("Delete", null, {
                        hk: "2KhPUX"
                    }),
                    onClick: () => {
                        B.ModalManager.open(be.default.createElement(m.default, {
                            chat: (0, _.getChat)(t),
                            msgList: [(0, ue.unproxy)(t)],
                            onDelete: n
                        })), J.UiRevokeActionHelper.startSession(), J.UiRevokeActionHelper.messageSelected()
                    }
                })
            }

            function Le(e) {
                let {
                    isMediaDownloadable: t,
                    msg: n,
                    type: a
                } = e;
                const l = e => {
                    e.stopPropagation(), M.FileSaver.initDownload((0, ue.unproxy)(n))
                };
                return t() ? a === Se.Dropdown ? be.default.createElement(v.DropdownItem, {
                    action: l,
                    disabled: !t()
                }, Ee.fbt._("Download", null, {
                    hk: "1g5Jix"
                })) : be.default.createElement(x.MenuBarItem, {
                    icon: be.default.createElement(g.DownloadIcon, null),
                    title: Ee.fbt._("Download", null, {
                        hk: "1g5Jix"
                    }),
                    disabled: !t(),
                    onClick: l
                }) : null
            }

            function De(e) {
                let {
                    msg: t,
                    openReactionTray: n,
                    sendReactionButtonRef: a
                } = e;
                return t.type === G.MSG_TYPE.STICKER ? null : be.default.createElement(x.MenuBarItem, {
                    testid: "reaction-entry-point",
                    icon: be.default.createElement(Y.ReactionsMediaIcon, {
                        containerRef: a,
                        width: 20
                    }),
                    title: Ee.fbt._("React", null, {
                        hk: "1mI4Nl"
                    }),
                    onClick: () => {
                        n()
                    }
                })
            }

            function Re(e) {
                let t, n, a, {
                    msg: l
                } = e;
                const r = e => {
                        e.stopPropagation(), (0, P.runKeepInChatUX)((0, ue.unproxy)(l), he.KIC_ENTRY_POINT_TYPE.MEDIA)
                    },
                    o = e => {
                        e.stopPropagation(), (0, P.runUndoKeepInChatUX)((0, ue.unproxy)(l), he.KIC_ENTRY_POINT_TYPE.MEDIA)
                    };
                if ((0, W.getIsKept)(l) && l.canShowUnkeepOption()) t = be.default.createElement(de.UndoKeepInChatMediaIcon, null), n = o, a = Ee.fbt._("Unkeep", null, {
                    hk: "1eGZng"
                });
                else {
                    if ((0, W.getIsKept)(l) || !l.canShowKeepOption()) return null;
                    t = be.default.createElement(O.KeepInChatMediaIcon, null), n = r, a = Ee.fbt._("Keep", null, {
                        hk: "1a48ae"
                    })
                }
                return be.default.createElement(x.MenuBarItem, {
                    key: t,
                    icon: t,
                    title: a,
                    onClick: n
                })
            }

            function Be(e) {
                let t, n, a, {
                    msg: l
                } = e;
                return l.star ? (t = e => {
                    e.stopPropagation(), s.Cmd.sendUnstarMsgs((0, _.getChat)(l), [(0, ue.unproxy)(l)])
                }, n = be.default.createElement(pe.UnstarBtnIcon, null), a = Ee.fbt._({
                    "*": "Unstar messages",
                    _1: "Unstar message"
                }, [Ee.fbt._plural(1)], {
                    hk: "2BbE65"
                })) : (t = e => {
                    e.stopPropagation(), s.Cmd.sendStarMsgs((0, _.getChat)(l), [(0, ue.unproxy)(l)])
                }, n = be.default.createElement(ie.StarBtnIcon, null), a = Ee.fbt._({
                    "*": "Star",
                    _1: "Star"
                }, [Ee.fbt._plural(1)], {
                    hk: "1ljru3"
                })), be.default.createElement(x.MenuBarItem, {
                    key: a,
                    icon: n,
                    title: a,
                    onClick: t
                })
            }

            function je(e) {
                let t, n, a, {
                    msg: l
                } = e;
                return (0, ve.default)(l.id) ? (t = e => {
                    e.stopPropagation(), (0, te.sendPinInChatMsg)(l, q.Message$PinInChatMessage$Type.UNPIN_FOR_ALL).catch((e => {
                        __LOG__(4, void 0, new Error)
                        `Error while unpinning a message: ${e}`
                    }))
                }, n = be.default.createElement(fe.UnpinnedIcon, null), a = Ee.fbt._("Unpin", null, {
                    hk: "3oWx14"
                })) : (t = e => {
                    e.stopPropagation(), B.ModalManager.open(be.default.createElement(U.PinMessageModal, {
                        msg: l
                    }))
                }, n = be.default.createElement(z.Pinned3Icon, null), a = Ee.fbt._("Pin", null, {
                    hk: "23jUX3"
                })), be.default.createElement(x.MenuBarItem, {
                    key: a,
                    icon: n,
                    title: a,
                    onClick: t
                })
            }

            function We(e) {
                let {
                    msg: t
                } = e;
                return be.default.createElement(x.MenuBarItem, {
                    icon: be.default.createElement(k.ForwardIcon, null),
                    title: Ee.fbt._("Forward", null, {
                        hk: "2T1QOm"
                    }),
                    onClick: e => {
                        e.stopPropagation(), (0, _.getIsUnsentMedia)(t) ? B.ModalManager.open(be.default.createElement(f.ConfirmPopup, {
                            title: Ee.fbt._("Can't Forward", null, {
                                hk: "3fgR0v"
                            }),
                            onOK: () => B.ModalManager.close(),
                            okText: (0, C.default)("OK")
                        }, Ee.fbt._({
                            "*": "Wait until the messages finish sending and displays a checkmark before forwarding.",
                            _1: "Wait until the message finishes sending and displays a checkmark before forwarding."
                        }, [Ee.fbt._plural(1)], {
                            hk: "Q1oiD"
                        }))) : B.ModalManager.open(be.default.createElement(S.ForwardMessageModalLoadable, {
                            msgs: [(0, ue.unproxy)(t)],
                            onClose: () => B.ModalManager.close()
                        }), {
                            transition: "modal-flow"
                        })
                    }
                })
            }

            function Fe(e) {
                let {
                    msg: t
                } = e;
                return be.default.createElement(v.DropdownItem, {
                    testid: "mi-msg-reply",
                    action: () => {
                        (0, Q.default)(t)
                    }
                }, Ee.fbt._("Reply privately", null, {
                    hk: "1XQeK2"
                }))
            }

            function Ge(e) {
                let {
                    msg: t
                } = e;
                const n = e => {
                    e ? (0, re.sendMessageReportBlock)(t, oe.SpamFlow.MediaViewer) : (0, re.sendMessageReport)(t, oe.SpamFlow.MediaViewer), B.ModalManager.close()
                };
                return be.default.createElement(v.DropdownItem, {
                    action: () => {
                        var e, a;
                        B.ModalManager.open(be.default.createElement(A.default, {
                            isBusiness: t.senderObj.isBusiness,
                            isGroup: (0, _.getChat)(t).isGroup,
                            isBizBot3p: null !== (e = null === (a = (0, _.getChat)(t).contact.businessProfile) || void 0 === a ? void 0 : a.isBizBot3p) && void 0 !== e && e,
                            onReport: n,
                            onCancel: () => B.ModalManager.close(),
                            title: Pe(t)
                        }))
                    }
                }, Pe(t))
            }

            function He(e) {
                let {
                    msg: t,
                    onClose: n
                } = e;
                return be.default.createElement(v.DropdownItem, {
                    action: () => {
                        n(), (0, l.delayMs)(T.CLOSE_ANIMATION_DURATION + 250).then(s.Cmd.msgInfoDrawer.bind(s.Cmd, (0, ue.unproxy)(t)))
                    }
                }, Ee.fbt._("Message info", null, {
                    hk: "2h2aKZ"
                }))
            }

            function Ve(e) {
                let {
                    isMediaDownloadable: t,
                    msg: n,
                    msgIndexInAlbum: a,
                    onClose: l,
                    onViewOnceInfoClick: r,
                    openReactionTray: o,
                    sendReactionButtonRef: i
                } = e;
                return n.isViewOnce ? be.default.createElement(ze, {
                    isMediaDownloadable: t,
                    msg: n,
                    onClose: l,
                    onViewOnceInfoClick: r
                }) : a >= 0 ? be.default.createElement(Ie, {
                    isMediaDownloadable: t,
                    msg: n,
                    onClose: l,
                    openReactionTray: o,
                    sendReactionButtonRef: i
                }) : be.default.createElement(Ne, {
                    isMediaDownloadable: t,
                    msg: n,
                    onClose: l,
                    openReactionTray: o,
                    sendReactionButtonRef: i
                })
            }

            function Ue(e) {
                let {
                    isAlbumMedia: t,
                    isMediaDownloadable: n,
                    msg: a,
                    onClose: l
                } = e;
                const r = [],
                    o = (0, _.getChat)(a);
                ((0, F.canPrivateReply)(a) || (0, F.canPrivateReplyInRestrictedGrp)(a)) && r.push(be.default.createElement(Fe, {
                    key: "private_reply",
                    msg: a
                })), t && ((0, W.getIsSentByMe)(a) && r.push(be.default.createElement(He, {
                    key: "dropdownMsgInfo",
                    msg: a,
                    onClose: l
                })), r.push(be.default.createElement(Te, {
                    key: "dropdownGoToMsg",
                    msg: a,
                    type: Se.Dropdown,
                    onClose: l
                }), be.default.createElement(Le, {
                    key: "dropdownDownload",
                    isMediaDownloadable: n,
                    msg: a,
                    type: Se.Dropdown
                })));
                const i = !o.isNewsletter && (a.isViewOnce || (0, j.canReportMsg)(a) && (0, R.messageLevelReportingEnabled)());
                return o.isNewsletter && (0, j.canReportMsg)(a) && (0, V.isNewsletterReportingEnabled)() ? r.push(be.default.createElement($.default, {
                    key: "reportSpam",
                    msg: a
                })) : i && r.push(be.default.createElement(Ge, {
                    key: "reportSpam",
                    msg: a
                })), (0, j.canReportToAdmin)(a) && r.push(be.default.createElement(ee.default, {
                    key: "report_to_admin",
                    msg: a
                })), be.default.createElement(x.MenuBarItem, {
                    icon: be.default.createElement(L.MenuIcon, null),
                    title: Ee.fbt._("Menu", null, {
                        hk: "H0fkV"
                    })
                }, be.default.createElement(b.Dropdown, {
                    type: b.MenuType.DropdownMenu,
                    flipOnRTL: !0,
                    dirX: b.DirX.LEFT
                }, r))
            }

            function ze(e) {
                let {
                    isMediaDownloadable: t,
                    msg: n,
                    onClose: a,
                    onViewOnceInfoClick: l
                } = e;
                return be.default.createElement(be.default.Fragment, null, be.default.createElement(x.MenuBarItem, {
                    icon: be.default.createElement(me.ViewOnceIcon, {
                        className_DONOTUSE: I.default.voIcon
                    }),
                    title: Ee.fbt._("View once info", null, {
                        hk: "47XkZ4"
                    }),
                    onClick: l
                }), be.default.createElement(Ue, {
                    isMediaDownloadable: t,
                    isAlbumMedia: !1,
                    msg: n,
                    onClose: a
                }))
            }
            Oe.displayName = "MediaPanelHeader", Ie.displayName = "AlbumMediaMenuBtns", Ne.displayName = "NonAlbumMediaMenuBtns", Te.displayName = "GoToButton", Ae.displayName = "ReplyButton", xe.displayName = "DeleteButton", Le.displayName = "DownloadButton", De.displayName = "SendReactionButton", Re.displayName = "KeepInChatButton", Be.displayName = "StarButton", je.displayName = "PinButton", We.displayName = "ForwardButton", Fe.displayName = "PrivateReplyButton", Ge.displayName = "ReportSpamButton", He.displayName = "MsgInfoButton", Ve.displayName = "MenuBtns", Ue.displayName = "DropdownButton", ze.displayName = "ViewOnceMediaMenuBtns"
        },
        777361: (e, t, n) => {
            "use strict";
            var a = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var l = a(n(371125)),
                r = n(690495),
                o = a(n(488922)),
                i = a(n(947733)),
                u = n(104280),
                s = a(n(674465)),
                c = a(n(996513)),
                d = a(n(708126)),
                f = a(n(358533)),
                p = n(751460),
                m = n(438543),
                h = a(n(529727)),
                g = n(164832),
                E = n(792566),
                b = n(885313),
                v = function(e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || "object" != typeof e && "function" != typeof e) return {
                        default: e
                    };
                    var n = w(t);
                    if (n && n.has(e)) return n.get(e);
                    var a = {},
                        l = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var r in e)
                        if ("default" !== r && Object.prototype.hasOwnProperty.call(e, r)) {
                            var o = l ? Object.getOwnPropertyDescriptor(e, r) : null;
                            o && (o.get || o.set) ? Object.defineProperty(a, r, o) : a[r] = e[r]
                        }
                    a.default = e, n && n.set(e, a);
                    return a
                }(n(667294)),
                y = a(n(156720)),
                C = a(n(38085)),
                M = n(655241);

            function w(e) {
                if ("function" != typeof WeakMap) return null;
                var t = new WeakMap,
                    n = new WeakMap;
                return (w = function(e) {
                    return e ? n : t
                })(e)
            }
            const k = {
                    container: {
                        width: "ln8gz9je",
                        height: "ppled2lx"
                    },
                    stickerContainer: {
                        maxWidth: "mx6rw3sv",
                        maxHeight: "trnfqnf9",
                        marginBottom: "r2u2pyhj",
                        zIndex: "thghmljt"
                    }
                },
                S = (e, t) => {
                    const {
                        msg: n
                    } = e, a = (0, M.useModelValues)(e.mediaData, ["encFilehash", "directPath", "filehash", "mediaKey", "mediaKeyTimestamp", "mediaStage", "mimetype", "fullWidth", "fullHeight", "isFirstParty", "isAvatar", "stickerPackId", "stickerPackName", "stickerPackPublisher", "extractedLottieSticker"]), w = (0, v.useRef)(null), S = (0, C.default)(t, w), _ = e => {
                        var t;
                        null === (t = w.current) || void 0 === t || t.onClick(e)
                    }, P = () => null == n ? void 0 : n.downloadMedia({
                        downloadEvenIfExpensive: !1,
                        rmrReason: b.WEBC_RMR_REASON_CODE.MEDIA_VIEWER,
                        isUserInitiated: !1
                    }), O = f.default.getActive(), I = (0, p.iAmAdminOrOwner)(null == O ? void 0 : O.newsletterMetadata), N = a.isFirstParty ? v.default.createElement(l.default, {
                        stickerPackId: a.stickerPackId,
                        onStickerPackView: e.onStickerPackView,
                        stickerPackViewDelay: e.stickerPackViewDelay,
                        showViewPackButton: null != O ? !0 !== a.isAvatar && I : !0 !== a.isAvatar,
                        sticker: new g.StickerModel({
                            id: a.filehash,
                            mimetype: a.mimetype,
                            width: a.fullWidth,
                            height: a.fullHeight,
                            filehash: a.filehash,
                            encFilehash: a.encFilehash,
                            directPath: a.directPath,
                            mediaKey: a.mediaKey,
                            mediaKeyTimestamp: a.mediaKeyTimestamp
                        })
                    }) : v.default.createElement(m.StickerDetailsStickerPackInfo, {
                        name: a.stickerPackName,
                        publisher: a.stickerPackPublisher,
                        theme: m.Theme.MediaViewer,
                        sticker: new g.StickerModel({
                            id: a.filehash,
                            mimetype: a.mimetype,
                            width: a.fullWidth,
                            height: a.fullHeight,
                            filehash: a.filehash,
                            encFilehash: a.encFilehash,
                            directPath: a.directPath,
                            mediaKey: a.mediaKey,
                            mediaKeyTimestamp: a.mediaKeyTimestamp
                        })
                    });
                    return v.default.createElement(r.FlexColumn, {
                        align: "center",
                        justify: "center",
                        xstyle: k.container
                    }, v.default.createElement("div", {
                        className: (0, y.default)(k.container, k.stickerContainer)
                    }, v.default.createElement(d.default, {
                        ref: S,
                        width: a.fullWidth,
                        height: a.fullHeight,
                        onZoomIn: e.onImgZoomIn,
                        msg: n
                    }, (0, E.getStickerFileType)(a.mimetype) === E.StickerFileType.LOTTIE && (0, u.isLottieStickerReceivingEnabled)() ? v.default.createElement(i.default, {
                        className: "",
                        mediaData: a,
                        startAnimation: !0,
                        onClick: _,
                        placeholderRenderer: () => null,
                        downloadMedia: P
                    }) : v.default.createElement(s.default, {
                        mediaData: a,
                        placeholderRenderer: () => v.default.createElement(h.default, {
                            size: 376
                        }),
                        downloadMedia: P
                    }, (t => v.default.createElement(o.default, {
                        className: (0, y.default)(c.default.content),
                        onClick: _,
                        src: t,
                        onLoad: e.onLoad
                    }))))), N)
                };
            var _ = (0, v.forwardRef)(S);
            t.default = _
        },
        177046: (e, t, n) => {
            "use strict";
            var a = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var l = a(n(190643)),
                r = n(980518),
                o = a(n(66985)),
                i = a(n(49677)),
                u = n(845582),
                s = n(172259),
                c = a(n(996513)),
                d = n(787742),
                f = a(n(821384)),
                p = n(728),
                m = n(31900),
                h = n(277037),
                g = n(541345),
                E = n(474474),
                b = a(n(439114)),
                v = n(885313),
                y = n(548360),
                C = n(113189),
                M = function(e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || "object" != typeof e && "function" != typeof e) return {
                        default: e
                    };
                    var n = S(t);
                    if (n && n.has(e)) return n.get(e);
                    var a = {},
                        l = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var r in e)
                        if ("default" !== r && Object.prototype.hasOwnProperty.call(e, r)) {
                            var o = l ? Object.getOwnPropertyDescriptor(e, r) : null;
                            o && (o.get || o.set) ? Object.defineProperty(a, r, o) : a[r] = e[r]
                        }
                    a.default = e, n && n.set(e, a);
                    return a
                }(n(667294)),
                w = a(n(156720)),
                k = n(655241);

            function S(e) {
                if ("function" != typeof WeakMap) return null;
                var t = new WeakMap,
                    n = new WeakMap;
                return (S = function(e) {
                    return e ? n : t
                })(e)
            }

            function _(e, t) {
                var n;
                const {
                    autoPlay: a,
                    msg: S,
                    onLoad: _,
                    onClose: P,
                    onLoadedData: I,
                    startTime: N = 0
                } = e, T = (0, k.useModelValues)(e.mediaData, ["mediaStage", "fullWidth", "fullHeight", "isGif", "isViewOnce", "preview", "renderableUrl", "streamable"]), [A, x] = (0, M.useState)(!1), [L, D] = (0, M.useState)(!0), R = (0, M.useRef)(), B = (0, M.useMemo)((() => (T.mediaStage === s.MediaDataStage.RESOLVED || T.streamable && T.isStreamable()) && (0, C.isNonZeroNumber)(T.fullWidth) && (0, C.isNonZeroNumber)(T.fullHeight) ? function(e) {
                    if (e.isGif) {
                        const t = 330;
                        return e.fullWidth >= t ? {
                            width: e.fullWidth,
                            height: e.fullHeight
                        } : {
                            width: t,
                            height: e.fullHeight * t / e.fullWidth
                        }
                    }
                    if (e.fullWidth >= m.MIN_WIDTH) return {
                        width: e.fullWidth,
                        height: e.fullHeight
                    };
                    return {
                        width: m.MIN_WIDTH,
                        height: e.fullHeight
                    }
                }(T) : {
                    width: 0,
                    height: 0
                }), [T]);
                (0, M.useEffect)((() => {
                    if (!T.isStreamable()) return S.downloadMedia({
                        downloadEvenIfExpensive: !0,
                        rmrReason: v.WEBC_RMR_REASON_CODE.MEDIA_VIEWER,
                        isUserInitiated: !0
                    }), () => {
                        S.mediaObject && S.cancelDownload()
                    }
                }), []);
                const j = e => {
                    x(e)
                };
                (0, M.useImperativeHandle)(t, (() => ({
                    getContainerElement: () => R.current,
                    closingMedia() {
                        D(!1)
                    }
                })));
                const W = T.isGif;
                let F = T.mediaStage === s.MediaDataStage.RESOLVED || T.streamable && T.isStreamable();
                F = F || S.isForcingRMR();
                let G = null;
                const H = (0, u.getDisplayType)(S),
                    V = r.AddOnBubbleType.MEDIA_VIEWER;
                if (S && (0, E.shouldShowReactionBubble)(S, V) && (G = M.default.createElement(l.default, {
                        isOutgoingMsg: (0, d.getIsSentByMe)(S),
                        displayType: H,
                        bubbleType: V
                    }, M.default.createElement(g.ReactionBubbleContainer, {
                        msgIds: [S.id.toString()],
                        isOutgoingMsg: (0, d.getIsSentByMe)(S),
                        displayType: H,
                        reactionBubbleType: V,
                        reactionBubbleVisible: L
                    }))), F) {
                    const e = y.fbt._("Your browser doesn't support video playback.", null, {
                        hk: "2nHZKq"
                    });
                    let t, n;
                    return !A && (null == S ? void 0 : S.interactiveAnnotations) && S.interactiveAnnotations.length > 0 && (t = M.default.createElement(o.default, {
                        annotations: S.interactiveAnnotations
                    })), n = W ? M.default.createElement("div", {
                        className: (0, w.default)(c.default.content),
                        ref: R
                    }, M.default.createElement(b.default, {
                        src: T.renderableUrl,
                        onClick: O,
                        autoPlay: !0,
                        loop: !0,
                        onLoadedData: I
                    }, e), t) : M.default.createElement("div", {
                        ref: R,
                        className: (0, w.default)(c.default.content),
                        onClick: O
                    }, M.default.createElement(h.WrappedMsgVideoPlayer, {
                        msg: S,
                        mediaData: T,
                        startTime: N,
                        onClose: P,
                        onError: () => {},
                        onFullscreenToggle: j,
                        autoPlay: a,
                        type: p.PlayerType.MEDIA_VIEWER,
                        overlays: t,
                        noPip: S.isViewOnce,
                        onLoadedData: I
                    })), M.default.createElement(f.default, {
                        type: "scaleDown",
                        position: "relative",
                        objectPosition: "relative",
                        size: B,
                        onObjectLoad: _
                    }, n, G)
                }
                return M.default.createElement(f.default, {
                    type: "scaleDown",
                    position: "relative",
                    objectPosition: "relative",
                    size: {
                        width: T.fullWidth,
                        height: T.fullHeight
                    }
                }, M.default.createElement(i.default, {
                    altText: null !== (n = S.caption) && void 0 !== n ? n : "",
                    mediaData: T
                }), G)
            }
            var P = (0, M.forwardRef)(_);

            function O(e) {
                e.stopPropagation()
            }
            t.default = P
        },
        933147: (e, t, n) => {
            "use strict";
            var a = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                const {
                    msg: t,
                    onImageLoad: n,
                    isAnimatingThumbs: a,
                    onImgZoomIn: r,
                    onExitAnimation: I,
                    onBack: H
                } = e, [V, z, Y, K, Z, X, Q, $, J, ee] = (0, W.useMsgValues)(e.msg.id, [S.getId, S.getStar, c.getIsUnsentMedia, S.getIsViewOnce, S.getIsStickerMsg, S.getHasThumbList, S.getCaption, S.getInteractiveAnnotations, S.getType, S.getMessageSecret]), te = (0, c.getChat)(t), ne = (0, j.useModelValues)(e.mediaData, ["mediaStage", "type", "isGif"]), ae = (0, B.useRef)(null), le = (0, B.useRef)(null), re = (0, B.useRef)(null), oe = (0, B.useRef)(null), ie = (0, B.useRef)(), ue = (0, B.useRef)(!1), se = (0, B.useRef)(!1), ce = (0, B.useRef)(!1), [de, fe] = (0, F.default)(O.NUX.EPHEMERAL_VIEW_ONCE_RECEIVER), pe = K && de, [me] = (0, B.useState)((() => ne.mediaStage === y.MediaDataStage.RESOLVED && e.getZoomNode ? e.getZoomNode(V) : null)), [he, ge] = (0, B.useState)(!1), [Ee, be] = (0, B.useState)(!1), ve = [h.default.TYPE.IMAGE, h.default.TYPE.STICKER].includes(ne.type), [ye, Ce] = (0, B.useState)(ve), [Me, we] = (0, B.useState)(!e.isAnimatingThumbs && !ye), [ke, Se] = (0, B.useState)(!1), [_e, Pe] = (0, B.useState)(!1), Oe = () => {
                    const e = B.default.createElement(D.default, {
                        isPhoto: ne.type === h.default.TYPE.IMAGE,
                        onOkClick: () => {
                            fe(), k.ModalManager.close()
                        }
                    });
                    k.ModalManager.open(e)
                }, Ie = (0, G.default)(((e, t) => {
                    if (Ee) return;
                    const n = ae.current;
                    if (!n) return;
                    const a = n.getInsideContainer();
                    if (!(a && a instanceof HTMLElement)) return;
                    const l = n.getOutsideContainer();
                    if (!(l && l instanceof HTMLElement)) return;
                    const {
                        translateX: r,
                        translateY: o
                    } = n.getTranslatePosition(l, e, t);
                    (0, L.default)(a, "stop"), (0, L.default)(a, {
                        translateX: r,
                        translateY: o,
                        scale: C.ZOOM_IN_FACTOR
                    }, {
                        duration: 0
                    })
                }));
                (0, B.useEffect)((() => (__LOG__(2)
                    `MediaViewerModal: Opened`, pe && Oe(), u.default.focus(oe.current), () => {
                        __LOG__(2)
                        `MediaViewerModal: Closed`, Ie.cancel()
                    })), []);
                const Ne = () => {
                        K && (0, p.canMarkPlayed)(t) && (0, p.markPlayed)(t)
                    },
                    Te = e => {
                        Ne(), n && n();
                        const t = me,
                            a = e.target;
                        t && a && a instanceof HTMLElement && (ce.current || (ce.current = !0, ((e, t) => {
                            var n;
                            const a = t.getBoundingClientRect(),
                                l = e.getBoundingClientRect();
                            let r = l.top - a.top,
                                o = l.left - a.left;
                            const i = e.clientWidth / t.clientWidth;
                            r -= (t.clientHeight - e.clientHeight) / 2, o -= (t.clientWidth - e.clientWidth) / 2, (0, L.default)(t, {
                                opacity: [1, 0],
                                translateX: [0, o],
                                translateY: [0, r],
                                scale: [1, i]
                            }, {
                                duration: C.ANIMATION_DURATION,
                                easing: [.1, .82, .25, 1]
                            }).then((() => Ce(!1)));
                            const u = null === (n = re.current) || void 0 === n ? void 0 : n.getElement();
                            u && (0, L.default)(u, {
                                opacity: [1, 0]
                            }, {
                                duration: C.ANIMATION_DURATION
                            })
                        })(t, a)))
                    },
                    Ae = () => {
                        var t;
                        if (ue.current) return;
                        ue.current = !0, (0, l.isFunction)(I) && I();
                        const n = e.getZoomNode && e.getZoomNode(V);
                        if (!n) return H();
                        let a;
                        var r;
                        if (ve && ae.current) a = ae.current.getInsideContainer(), null === (r = ae.current) || void 0 === r || r.closingMediaZoomable();
                        else if (ne.isGif && le.current) {
                            var o;
                            a = le.current.getContainerElement(), null === (o = le.current) || void 0 === o || o.closingMedia()
                        }
                        if (!a) return H();
                        const i = a,
                            u = a.getBoundingClientRect(),
                            s = n.getBoundingClientRect();
                        let c = s.top - u.top,
                            d = s.left - u.left;
                        const f = n.clientWidth / i.clientWidth;
                        c -= (i.clientHeight - n.clientHeight) / 2, d -= (i.clientWidth - n.clientWidth) / 2, (0, L.default)(a, {
                            translateX: [d, 0],
                            translateY: [c, 0],
                            scale: [f, 1]
                        }, {
                            duration: C.CLOSE_ANIMATION_DURATION,
                            easing: [.1, .82, .25, 1]
                        }).then((() => {
                            H()
                        }));
                        const p = null === (t = re.current) || void 0 === t ? void 0 : t.getElement();
                        p && (0, L.default)(p, {
                            opacity: [0, 1]
                        }, {
                            duration: C.CLOSE_ANIMATION_DURATION,
                            easing: [.1, .82, .25, 1]
                        })
                    },
                    xe = e => {
                        const t = ae.current;
                        e && t && (se.current = t.getHeightOverflow() > 0 || t.getWidthOverflow() > 0), ge(e), r(e)
                    },
                    Le = e => {
                        var t;
                        const n = null === (t = ae.current) || void 0 === t ? void 0 : t.getInsideContainer(),
                            l = Boolean(null == n ? void 0 : n.contains(document.activeElement));
                        if (a || ye || !l) return;
                        Ie.cancel();
                        const r = ae.current;
                        null != r && r.onKeyboardZoom(e)
                    },
                    De = () => {
                        Pe(!0)
                    },
                    Re = () => {
                        be(!0)
                    },
                    Be = () => {
                        be(!1)
                    },
                    je = e => {
                        e.stopPropagation(), Se(!ke)
                    };
                let We, Fe;
                switch ((0, B.useEffect)((() => {
                    Me || a || ye || we(!0)
                }), [a, Me, ye]), (0, T.useTsNavigation)({
                    surface: "media-viewer"
                }), ne.type) {
                    case h.default.TYPE.IMAGE:
                        We = B.default.createElement(g.default, {
                            key: V.toString(),
                            msg: t,
                            mediaData: ne,
                            onLoad: Te,
                            onImgZoomIn: xe,
                            onAnnotationTooltipDisplay: Re,
                            onAnnotationTooltipDismiss: Be,
                            preventDownload: K,
                            ref: ae
                        });
                        break;
                    case h.default.TYPE.STICKER:
                        We = B.default.createElement(v.default, {
                            key: V.toString(),
                            msg: t,
                            mediaData: ne,
                            onLoad: Te,
                            onImgZoomIn: xe,
                            onStickerPackView: Ae,
                            stickerPackViewDelay: C.CLOSE_ANIMATION_DURATION,
                            ref: ae
                        });
                        break;
                    case h.default.TYPE.VIDEO:
                        We = B.default.createElement(M.default, {
                            key: V.toString(),
                            autoPlay: !pe,
                            msg: t,
                            mediaData: ne,
                            onLoadedData: ne.isGif ? Te : Ne,
                            startTime: e.startTime,
                            onClose: Ae,
                            ref: le
                        });
                        break;
                    case h.default.TYPE.AUDIO:
                        We = B.default.createElement(m.default, {
                            mediaData: ne,
                            key: V.toString(),
                            msg: t
                        });
                        break;
                    default:
                        __LOG__(4, void 0, new Error, !0)
                        `type: ${ne.type}`, SEND_LOGS("MediaViewerModal: unexpected media type")
                }
                const Ge = e.msgIndexInAlbum >= 0 && e.albumSize >= 0;
                if (Q || Ge) {
                    let n;
                    Ge && (n = R.fbt._("{number} of {totalNumber}", [R.fbt._param("number", e.msgIndexInAlbum + 1), R.fbt._param("totalNumber", e.albumSize)], {
                        hk: "1hO6rM"
                    }));
                    const a = s.Conversation({
                            mentions: t.mentionMap(),
                            groupMentions: t.groupMentionMap(),
                            phoneNumbers: (0, P.getPhoneNumbersFromMsg)(t),
                            links: (0, _.getLinksFromMsg)(t),
                            trusted: !0,
                            fromMe: V.fromMe,
                            fromChatWid: V.remote
                        }),
                        l = ne.type === h.default.TYPE.IMAGE && !K,
                        r = !Me && (ne.isGif || l);
                    Fe = B.default.createElement(B.default.Fragment, null, B.default.createElement("p", {
                        className: (0, o.classnamesConvertMeToStylexPlease)({
                            [w.default.captionWrapperExpandable]: !0 === ie.current,
                            [w.default.captionWrapper]: !0
                        }),
                        onClick: ie.current ? je : void 0,
                        title: ie.current ? R.fbt._("Read more", null, {
                            hk: "2DvSvh"
                        }) : void 0,
                        "aria-hidden": ke || void 0
                    }, B.default.createElement(i.EmojiText, {
                        className: (0, o.classnamesConvertMeToStylexPlease)({
                            [w.default.captionHidden]: r,
                            [w.default.expanded]: ke,
                            [w.default.mediaCaption]: !0
                        }),
                        formatters: a,
                        ref: e => {
                            re.current = e
                        },
                        text: Q || n
                    }), ie.current && B.default.createElement(x.default, {
                        xstyle: [U.captionReadMoreBtn, ke && U.captionReadMoreBtnExpanded, he && U.captionReadMoreBtnZoomed],
                        onClick: je
                    }, B.default.createElement(N.TextSpan, null, R.fbt._("Read more", null, {
                        hk: "2DvSvh"
                    })))), ke && B.default.createElement("p", {
                        className: (0, o.classnamesConvertMeToStylexPlease)(w.default.captionWrapper, w.default.captionWrapperExpandable, w.default.captionExpanded),
                        onClick: je
                    }, B.default.createElement(i.EmojiText, {
                        className: (0, o.classnamesConvertMeToStylexPlease)(w.default.mediaCaption, w.default.mediaCaptionExpanded),
                        formatters: a,
                        text: Q
                    })))
                }
                const He = (0, o.classnamesConvertMeToStylexPlease)({
                        [w.default.mediaWithCaption]: !!Fe,
                        [w.default.media]: !0
                    }),
                    Ve = (0, o.classnamesConvertMeToStylexPlease)({
                        [w.default.noThumbnails]: !X,
                        [w.default.mediaViewerAnimate]: ye || a,
                        [w.default.cursorZoomOut]: he,
                        overlay: !0,
                        [w.default.mediaViewer]: !0
                    }),
                    Ue = he && se.current ? e => {
                        Ie(e.pageX, e.pageY)
                    } : null,
                    ze = he ? e => {
                        Ie.cancel();
                        const t = ae.current;
                        t && he && t.onClick(e)
                    } : null;
                let qe = he ? null : Ae;
                null != qe && K && (qe = De);
                return B.default.createElement(A.UIE, {
                    displayName: "MediaViewer",
                    escapable: !0,
                    requestDismiss: Ae
                }, B.default.createElement(f.HotKeys, {
                    handlers: {
                        space: Le,
                        enter: Le
                    },
                    ref: oe
                }, B.default.createElement("div", {
                    className: Ve,
                    "data-animate-media-viewer": !0,
                    onClick: ze,
                    onMouseMove: Ue
                }, B.default.createElement(E.default, {
                    isHighlightClose: _e,
                    msg: t,
                    mediaData: ne,
                    onClose: Ae,
                    onHightlightCloseEnd: () => {
                        Pe(!1)
                    },
                    onViewOnceInfoClick: () => {
                        Oe()
                    },
                    msgIndexInAlbum: e.msgIndexInAlbum
                }), B.default.createElement("div", {
                    className: (0, o.classnamesConvertMeToStylexPlease)({
                        [w.default.sticker]: Z,
                        [w.default.mediaContent]: !0
                    }),
                    onClick: qe
                }, B.default.createElement(q, {
                    hasNavigationButtons: X,
                    onNext: e.onNext,
                    onPrev: e.onPrev,
                    imgZoomed: he
                }, B.default.createElement("div", {
                    className: He
                }, B.default.createElement(b.default, {
                    msg: t,
                    mediaData: ne
                }), We, B.default.createElement(d.default.Provider, {
                    value: te.groupMetadata
                }, Fe)))))))
            };
            var l = n(724976),
                r = n(305989),
                o = n(396574),
                i = n(305521),
                u = a(n(335540)),
                s = V(n(675886)),
                c = n(163755),
                d = a(n(462824)),
                f = n(81644),
                p = n(711735),
                m = a(n(883537)),
                h = a(n(116253)),
                g = a(n(142958)),
                E = a(n(548290)),
                b = a(n(36886)),
                v = a(n(777361)),
                y = n(172259),
                C = n(69315),
                M = a(n(177046)),
                w = a(n(192639)),
                k = n(114850),
                S = n(787742),
                _ = n(44118),
                P = n(527530),
                O = n(95589),
                I = n(435595),
                N = n(180519),
                T = n(717089),
                A = n(392632),
                x = a(n(625903)),
                L = a(n(330619)),
                D = a(n(25683)),
                R = n(548360),
                B = V(n(667294)),
                j = (a(n(156720)), n(655241)),
                W = n(871210),
                F = a(n(157558)),
                G = a(n(286481));

            function H(e) {
                if ("function" != typeof WeakMap) return null;
                var t = new WeakMap,
                    n = new WeakMap;
                return (H = function(e) {
                    return e ? n : t
                })(e)
            }

            function V(e, t) {
                if (!t && e && e.__esModule) return e;
                if (null === e || "object" != typeof e && "function" != typeof e) return {
                    default: e
                };
                var n = H(t);
                if (n && n.has(e)) return n.get(e);
                var a = {},
                    l = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for (var r in e)
                    if ("default" !== r && Object.prototype.hasOwnProperty.call(e, r)) {
                        var o = l ? Object.getOwnPropertyDescriptor(e, r) : null;
                        o && (o.get || o.set) ? Object.defineProperty(a, r, o) : a[r] = e[r]
                    }
                return a.default = e, n && n.set(e, a), a
            }
            const U = {
                captionReadMoreBtn: {
                    position: "lhggkp7q",
                    end: "h223g3sc",
                    bottom: "jxacihee",
                    paddingTop: "ppypbuwx",
                    paddingEnd: "f9ovudaz",
                    paddingBottom: "przvwfww",
                    paddingStart: "nu34rnf1",
                    backgroundColor: "idmi9oma",
                    borderTopStartRadius: "ho9ovbg7",
                    borderTopEndRadius: "tcg15ap9",
                    borderBottomEndRadius: "c5wy1lv0",
                    borderBottomStartRadius: "bqysl6j9",
                    boxShadow: "a95fzlb5"
                },
                captionReadMoreBtnExpanded: {
                    visibility: "kojwoqec"
                },
                captionReadMoreBtnZoomed: {
                    visibility: "kqpkm0zi",
                    opacity: "lxctpz5v"
                }
            };

            function z(e) {
                null == e || e.stopPropagation()
            }

            function q(e) {
                var t, n, a, l;
                return B.default.createElement(B.default.Fragment, null, e.hasNavigationButtons && B.default.createElement("div", {
                    className: (0, o.classnamesConvertMeToStylexPlease)(w.default.btnMediaPrev)
                }, B.default.createElement("div", {
                    onClick: e.onPrev ? null : z
                }, B.default.createElement(r.ChevronButton, {
                    type: r.ButtonType.Prev,
                    onClick: null !== (t = e.onPrev) && void 0 !== t ? t : void 0,
                    onKeyDown: null !== (n = e.onPrev) && void 0 !== n ? n : void 0,
                    disabled: !e.onPrev || e.imgZoomed,
                    theme: I.RoundTheme.Default
                }))), e.children, e.hasNavigationButtons && B.default.createElement("div", {
                    className: (0, o.classnamesConvertMeToStylexPlease)(w.default.btnMediaNext)
                }, B.default.createElement("div", {
                    onClick: e.onPrev ? null : z
                }, B.default.createElement(r.ChevronButton, {
                    type: r.ButtonType.Next,
                    onClick: null !== (a = e.onNext) && void 0 !== a ? a : void 0,
                    onKeyDown: null !== (l = e.onNext) && void 0 !== l ? l : void 0,
                    disabled: !e.onNext || e.imgZoomed,
                    theme: I.RoundTheme.Default
                }))))
            }
        },
        467201: (e, t, n) => {
            "use strict";
            var a = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = d;
            var l = n(675085),
                r = n(163755),
                o = n(114850),
                i = a(n(207511)),
                u = n(453603),
                s = n(548360),
                c = a(n(667294));

            function d(e) {
                const {
                    msg: t
                } = e, n = (0, r.getChat)(t);
                return c.default.createElement(l.DropdownItem, {
                    action: () => {
                        o.ModalManager.open(c.default.createElement(i.default, {
                            chat: n,
                            msg: t,
                            spamFlow: u.SpamFlow.MediaViewer
                        }))
                    }
                }, s.fbt._("Report", null, {
                    hk: "GPSDP"
                }))
            }
            d.displayName = "WAWebReportNewsletterPostSpamButton"
        },
        774396: (e, t, n) => {
            "use strict";
            var a = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = f;
            var l = n(675085),
                r = n(163755),
                o = n(114850),
                i = n(554800),
                u = a(n(286391)),
                s = n(328340),
                c = n(548360),
                d = a(n(667294));

            function f(e) {
                const {
                    msg: t
                } = e;
                return d.default.createElement(l.DropdownItem, {
                    action: () => {
                        (0, i.logRTAReportingEvent)({
                            reportToAdminInteraction: s.REPORT_TO_ADMIN_INTERACTION.CLICK_SEND_FOR_ADMIN_REVIEW,
                            groupId: (0, r.getChat)(t).id.user
                        }), o.ModalManager.open(d.default.createElement(u.default, {
                            msg: t
                        }))
                    }
                }, c.fbt._("Send for admin review", null, {
                    hk: "4ouSa6"
                }))
            }
            f.displayName = "WAWebSendForAdminReviewButton"
        },
        266648: (e, t, n) => {
            "use strict";
            var a = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = E;
            var l = a(n(621733)),
                r = a(n(335540)),
                o = n(125922),
                i = n(787742),
                u = n(956113),
                s = a(n(572028)),
                c = n(548360),
                d = function(e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || "object" != typeof e && "function" != typeof e) return {
                        default: e
                    };
                    var n = m(t);
                    if (n && n.has(e)) return n.get(e);
                    var a = {},
                        l = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var r in e)
                        if ("default" !== r && Object.prototype.hasOwnProperty.call(e, r)) {
                            var o = l ? Object.getOwnPropertyDescriptor(e, r) : null;
                            o && (o.get || o.set) ? Object.defineProperty(a, r, o) : a[r] = e[r]
                        }
                    a.default = e, n && n.set(e, a);
                    return a
                }(n(667294)),
                f = a(n(49710)),
                p = a(n(286481));

            function m(e) {
                if ("function" != typeof WeakMap) return null;
                var t = new WeakMap,
                    n = new WeakMap;
                return (m = function(e) {
                    return e ? n : t
                })(e)
            }

            function h(e, t) {
                let {
                    mediaMsgs: n,
                    highlightedMsgIds: a,
                    activeMsg: l,
                    onSetActiveThumb: c,
                    onSelectThumb: f,
                    msgIdToPreferPreview: p
                } = e;
                const m = (0, d.useRef)({}),
                    h = () => {
                        const e = l.id.toString(),
                            t = m.current[e];
                        t && r.default.focus(t)
                    };
                (0, d.useImperativeHandle)(t, (() => ({
                    focusOnActive: h
                })));
                const g = a && a.size > 0 && a.has(l.id.toString()),
                    E = [];
                return n.forEach((e => {
                    if (null == e.mediaData) {
                        const t = l;
                        return void __LOG__(3, !0)
                        `MediaViewerFlow: attempted to render a msg without mediaData: ${JSON.stringify({type:e.type,isMedia:(0,i.getIsMedia)(e),startMsgType:t.type,startMsgIsMedia:(0,i.getIsMedia)(t)})}`
                    }
                    const t = g && a && !a.has(e.id.toString()) ? "viewerFlowTransparent" : "viewerFlow";
                    E.push(d.default.createElement(o.MediaThumb, {
                        theme: t,
                        active: e === l,
                        msg: e,
                        containerRef: t => {
                            ((e, t) => {
                                m.current[t] = e
                            })(t, e.id.toString()), e === l && c(t)
                        },
                        key: `media-${e.id.id}`,
                        onClick: () => {
                            f(e)
                        },
                        preferPreview: !!p.get(e.id.toString()),
                        showTooltip: (0, i.getIsGroupMsg)(e)
                    }))
                })), E.push(d.default.createElement("div", {
                    className: s.default.mediaThumb,
                    key: "spinner-right"
                }, n.queryMediaAfter ? d.default.createElement(u.Spinner, {
                    stroke: 6,
                    size: 24
                }) : null)), E.unshift(d.default.createElement("div", {
                    className: s.default.mediaThumb,
                    key: "spinner-left"
                }, n.queryMediaBefore ? d.default.createElement(u.Spinner, {
                    stroke: 6,
                    size: 24
                }) : null)), E.push(d.default.createElement("div", {
                    className: s.default.thumbPadding,
                    key: "padding-right"
                })), E.unshift(d.default.createElement("div", {
                    className: s.default.thumbPadding,
                    key: "padding-left"
                })), d.default.createElement(d.default.Fragment, null, E)
            }
            const g = (0, d.forwardRef)(h);

            function E(e) {
                const {
                    mediaMsgs: t,
                    onScroll: n,
                    activeMsg: a
                } = e, r = (0, d.useRef)({}), o = (0, d.useRef)(null), i = (0, d.useRef)(null), u = (0, f.default)(a.id), m = () => {
                    var e;
                    null === (e = o.current) || void 0 === e || e.focusOnActive()
                };
                (0, d.useEffect)((() => {
                    var e;
                    (null === (e = i.current) || void 0 === e ? void 0 : e.contains(document.activeElement)) && !a.id.equals(u) && m()
                }), [a, u]);
                const h = () => {
                        const e = new Map;
                        return t.forEach((t => {
                            const n = t.id.toString();
                            e.set(n, (e => {
                                const t = r.current[e];
                                if (!t) return !1;
                                const n = t.getBoundingClientRect(),
                                    a = (n.left + n.right) / 2;
                                return !(a > -1 * window.innerWidth && a < 2 * window.innerWidth)
                            })(n))
                        })), e
                    },
                    [E, b] = (0, d.useState)(h),
                    v = (0, p.default)((() => {
                        const e = h();
                        (0, l.default)(E, e) || b(e)
                    }), 100);
                return d.default.createElement("div", {
                    className: s.default.thumbsContainer,
                    ref: e.setRefThumbsContainer
                }, d.default.createElement("div", {
                    ref: i,
                    className: s.default.scrollContainer,
                    dir: "ltr"
                }, d.default.createElement("div", {
                    role: "list",
                    "aria-label": c.fbt._("Media List", null, {
                        hk: "3dsEfq"
                    }),
                    tabIndex: 1,
                    onFocus: () => {
                        m()
                    },
                    onScroll: e => {
                        v(), n(e)
                    },
                    className: s.default.viewerThumbs,
                    ref: e.setRefThumbs
                }, d.default.createElement(g, {
                    ref: o,
                    mediaMsgs: t,
                    highlightedMsgIds: e.highlightedMsgIds,
                    activeMsg: e.activeMsg,
                    onSetActiveThumb: e.onSetActiveThumb,
                    onSelectThumb: e.onSelectThumb,
                    msgIdToPreferPreview: E
                }))))
            }
            g.displayName = "MediaThumbs", E.displayName = "MediaViewerThumbList"
        },
        25683: (e, t, n) => {
            "use strict";
            var a = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = m;
            var l = n(103440),
                r = n(753233),
                o = n(258105),
                i = n(690495),
                u = a(n(469733)),
                s = n(180519),
                c = n(113084),
                d = n(548360),
                f = a(n(667294));
            a(n(156720));
            const p = {
                graphic: {
                    marginBottom: "t4zgqcuo"
                }
            };

            function m(e) {
                const {
                    onOkClick: t
                } = e;
                return f.default.createElement(l.ConfirmPopup, {
                    onOK: t,
                    cancelText: d.fbt._("Learn more", null, {
                        hk: "1rcCLt"
                    }),
                    onCancel: () => {
                        (0, r.openExternalLink)((0, o.getViewOnceFaqUrl)())
                    }
                }, f.default.createElement(i.FlexColumn, null, f.default.createElement(u.default, {
                    xstyle: p.graphic,
                    align: "center"
                }, f.default.createElement(c.ViewOnceSenderNuxIcon, {
                    width: 195,
                    height: 177
                })), f.default.createElement(s.WDSTextLarge, null, e.isPhoto ? d.fbt._("This photo is set to view once", null, {
                    hk: "2H7aHc"
                }) : d.fbt._("This video is set to view once", null, {
                    hk: "1w8WFf"
                })), f.default.createElement(s.WDSTextMuted, null, e.isPhoto ? d.fbt._("For more privacy, this photo will disappear after you close it.", null, {
                    hk: "1XZPqi"
                }) : d.fbt._("For more privacy, this video will disappear after you close it.", null, {
                    hk: "3YgUHE"
                }))))
            }
            m.displayName = "MediaViewerViewOnceNux"
        },
        693976: (e, t, n) => {
            "use strict";
            var a = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.BotDataSharingIcon = function(e) {
                var t;
                const {
                    iconXstyle: n,
                    height: a,
                    width: d,
                    viewBox: f
                } = e, p = (0, r.default)(e, s);
                let m;
                if (f) {
                    const {
                        x: e = 0,
                        y: t = 0,
                        width: n = 0,
                        height: a = 0
                    } = f;
                    m = [e, t, n, a].join(" ")
                }
                let h = 24,
                    g = 24;
                null == a && null == d || (h = a, g = d);
                return u.default.createElement(o.BaseSvgSpan, (0, l.default)({
                    name: c
                }, p), u.default.createElement("svg", {
                    viewBox: null !== (t = m) && void 0 !== t ? t : "0 0 24 24",
                    height: h,
                    width: g,
                    preserveAspectRatio: "xMidYMid meet",
                    className: (0, i.default)(n),
                    fill: "none"
                }, u.default.createElement("title", null, c), u.default.createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M5.081 12.9c.44 2.98 2.87 5.41 5.86 5.84 2.22.33 4.26-.38 5.73-1.72.5-.45 1.22-.56 1.8-.22.87.5 1 1.71.26 2.39-2.09 1.92-4.99 2.95-8.13 2.53-4.38-.59-7.92-4.13-8.51-8.51a10.02 10.02 0 0 1 6.98-10.96c.96-.29 1.93.44 1.93 1.44v.02c0 .67-.45 1.24-1.09 1.43a6.996 6.996 0 0 0-4.83 7.76Zm7.92-9.19v-.02c0-1 .97-1.73 1.92-1.44 4.1 1.25 7.08 5.07 7.08 9.57 0 .76-.09 1.51-.26 2.23-.23.96-1.35 1.41-2.21.91l-.01-.01c-.57-.34-.83-1-.69-1.64.11-.48.17-.97.17-1.49 0-3.14-2.07-5.79-4.92-6.68-.63-.2-1.08-.76-1.08-1.43Z",
                    fill: "#8696A0"
                })))
            };
            var l = a(n(967154)),
                r = a(n(506479)),
                o = n(220584),
                i = a(n(156720)),
                u = a(n(667294));
            const s = ["iconXstyle", "height", "width", "viewBox"],
                c = "bot-data-sharing"
        },
        891502: (e, t, n) => {
            "use strict";
            var a = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.ChatInfoVideoIcon = function(e) {
                var t;
                const {
                    iconXstyle: n,
                    height: a,
                    width: d,
                    viewBox: f
                } = e, p = (0, r.default)(e, s);
                let m;
                if (f) {
                    const {
                        x: e = 0,
                        y: t = 0,
                        width: n = 0,
                        height: a = 0
                    } = f;
                    m = [e, t, n, a].join(" ")
                }
                let h = 13,
                    g = 21;
                null == a && null == d || (h = a, g = d);
                return u.default.createElement(o.BaseSvgSpan, (0, l.default)({
                    name: c
                }, p), u.default.createElement("svg", {
                    viewBox: null !== (t = m) && void 0 !== t ? t : "0 0 21 13",
                    height: h,
                    width: g,
                    preserveAspectRatio: "xMidYMid meet",
                    className: (0, i.default)(n),
                    fill: "none"
                }, u.default.createElement("title", null, c), u.default.createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M13.17.5c1.11 0 2.009.9 2.009 2.009v8.482c0 1.11-.9 2.009-2.01 2.009H2.01C.899 13 0 12.1 0 10.991V2.51C0 1.399.9.5 2.009.5h11.16Zm7.17 1.746a.893.893 0 0 1 .196.558v7.892a.893.893 0 0 1-1.45.697l-3.015-2.41V4.517l3.014-2.411a.893.893 0 0 1 1.255.14Z",
                    fill: "#00A884"
                })))
            };
            var l = a(n(967154)),
                r = a(n(506479)),
                o = n(220584),
                i = a(n(156720)),
                u = a(n(667294));
            const s = ["iconXstyle", "height", "width", "viewBox"],
                c = "chat-info-video"
        },
        496168: (e, t, n) => {
            "use strict";
            var a = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.DoubleChevronIcon = function(e) {
                var t;
                const {
                    iconXstyle: n,
                    height: a,
                    width: d,
                    viewBox: f
                } = e, p = (0, r.default)(e, s);
                let m;
                if (f) {
                    const {
                        x: e = 0,
                        y: t = 0,
                        width: n = 0,
                        height: a = 0
                    } = f;
                    m = [e, t, n, a].join(" ")
                }
                let h = 66,
                    g = 66;
                null == a && null == d || (h = a, g = d);
                return u.default.createElement(o.BaseSvgSpan, (0, l.default)({
                    name: c
                }, p), u.default.createElement("svg", {
                    viewBox: null !== (t = m) && void 0 !== t ? t : "0 0 66 66",
                    height: h,
                    width: g,
                    preserveAspectRatio: "xMidYMid meet",
                    className: (0, i.default)(n),
                    fill: "none"
                }, u.default.createElement("title", null, c), u.default.createElement("path", {
                    d: "M52.1731 31.43L41.2382 16.1374C40.3179 14.8382 38.8292 14.0532 37.2323 14.0532C33.1994 14.0532 30.8716 18.6004 33.1994 21.8755L41.1299 32.9999L33.1994 44.1243C30.8446 47.3994 33.1994 51.9466 37.2323 51.9466C38.8292 51.9466 40.345 51.1616 41.2652 49.8624L52.2002 34.5698C52.8498 33.6224 52.8498 32.3774 52.1731 31.43Z",
                    fill: "currentColor"
                }), u.default.createElement("path", {
                    d: "M33.2264 31.43L22.3186 16.1374C21.3712 14.8382 19.8826 14.0532 18.2856 14.0532C14.2527 14.0532 11.8979 18.6004 14.2527 21.8755L22.1832 32.9999L14.2527 44.1243C11.8979 47.3994 14.2527 51.9466 18.2856 51.9466C19.8826 51.9466 21.3983 51.1616 22.3186 49.8624L33.2535 34.5698C33.9031 33.6224 33.9031 32.3774 33.2264 31.43Z",
                    fill: "currentColor"
                })))
            };
            var l = a(n(967154)),
                r = a(n(506479)),
                o = n(220584),
                i = a(n(156720)),
                u = a(n(667294));
            const s = ["iconXstyle", "height", "width", "viewBox"],
                c = "double-chevron"
        },
        174455: (e, t, n) => {
            "use strict";
            var a = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.ForwardFilledIcon = function(e) {
                var t;
                const {
                    iconXstyle: n,
                    height: a,
                    width: d,
                    viewBox: f
                } = e, p = (0, r.default)(e, s);
                let m;
                if (f) {
                    const {
                        x: e = 0,
                        y: t = 0,
                        width: n = 0,
                        height: a = 0
                    } = f;
                    m = [e, t, n, a].join(" ")
                }
                let h = 16,
                    g = 21;
                null == a && null == d || (h = a, g = d);
                return u.default.createElement(o.BaseSvgSpan, (0, l.default)({
                    name: c
                }, p), u.default.createElement("svg", {
                    viewBox: null !== (t = m) && void 0 !== t ? t : "0 0 21 16",
                    height: h,
                    width: g,
                    preserveAspectRatio: "xMidYMid meet",
                    className: (0, i.default)(n),
                    fill: "none"
                }, u.default.createElement("title", null, c), u.default.createElement("path", {
                    d: "M12.778 1.31318C12.778 0.590175 13.651 0.228175 14.161 0.739175L20.206 6.79017C20.2813 6.8654 20.341 6.95472 20.3817 7.05304C20.4225 7.15136 20.4435 7.25675 20.4435 7.36317C20.4435 7.4696 20.4225 7.57499 20.3817 7.67331C20.341 7.77163 20.2813 7.86095 20.206 7.93617L14.161 13.9872C14.0476 14.1006 13.9032 14.1779 13.7459 14.2091C13.5886 14.2404 13.4256 14.2243 13.2775 14.1628C13.1294 14.1013 13.0028 13.9973 12.9139 13.8638C12.825 13.7304 12.7777 13.5735 12.778 13.4132V10.6812C7.68197 10.6812 3.94897 12.1362 1.17397 15.2922C0.927967 15.5712 0.471967 15.3342 0.571967 14.9762C2.00197 9.80317 5.49697 4.97218 12.778 3.93118V1.31318Z",
                    fill: "currentColor"
                })))
            };
            var l = a(n(967154)),
                r = a(n(506479)),
                o = n(220584),
                i = a(n(156720)),
                u = a(n(667294));
            const s = ["iconXstyle", "height", "width", "viewBox"],
                c = "forward-filled"
        },
        23672: (e, t, n) => {
            "use strict";
            var a = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.KeepInChatMediaIcon = function(e) {
                var t;
                const {
                    iconXstyle: n,
                    height: a,
                    width: d,
                    viewBox: f
                } = e, p = (0, r.default)(e, s);
                let m;
                if (f) {
                    const {
                        x: e = 0,
                        y: t = 0,
                        width: n = 0,
                        height: a = 0
                    } = f;
                    m = [e, t, n, a].join(" ")
                }
                let h = 24,
                    g = 24;
                null == a && null == d || (h = a, g = d);
                return u.default.createElement(o.BaseSvgSpan, (0, l.default)({
                    name: c
                }, p), u.default.createElement("svg", {
                    viewBox: null !== (t = m) && void 0 !== t ? t : "0 0 24 24",
                    height: h,
                    width: g,
                    preserveAspectRatio: "xMidYMid meet",
                    className: (0, i.default)(n),
                    fill: "none"
                }, u.default.createElement("title", null, c), u.default.createElement("path", {
                    d: "m17 3h-10c-1.1 0-1.99.9-1.99 2l-.01 16 7-3 7 3v-16c0-1.1-.9-2-2-2z",
                    fill: "currentColor"
                })))
            };
            var l = a(n(967154)),
                r = a(n(506479)),
                o = n(220584),
                i = a(n(156720)),
                u = a(n(667294));
            const s = ["iconXstyle", "height", "width", "viewBox"],
                c = "keep-in-chat-media"
        },
        998569: (e, t, n) => {
            "use strict";
            var a = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.MinusUserIcon = function(e) {
                var t;
                const {
                    iconXstyle: n,
                    height: a,
                    width: d,
                    viewBox: f
                } = e, p = (0, r.default)(e, s);
                let m;
                if (f) {
                    const {
                        x: e = 0,
                        y: t = 0,
                        width: n = 0,
                        height: a = 0
                    } = f;
                    m = [e, t, n, a].join(" ")
                }
                let h = 24,
                    g = 24;
                null == a && null == d || (h = a, g = d);
                return u.default.createElement(o.BaseSvgSpan, (0, l.default)({
                    name: c
                }, p), u.default.createElement("svg", {
                    viewBox: null !== (t = m) && void 0 !== t ? t : "0 0 24 24",
                    height: h,
                    width: g,
                    preserveAspectRatio: "xMidYMid meet",
                    className: (0, i.default)(n),
                    fill: "none"
                }, u.default.createElement("title", null, c), u.default.createElement("path", {
                    d: "M17 9H21C21.2833 9 21.5208 9.09583 21.7125 9.2875C21.9042 9.47917 22 9.71667 22 10C22 10.2833 21.9042 10.5208 21.7125 10.7125C21.5208 10.9042 21.2833 11 21 11H17C16.7167 11 16.4792 10.9042 16.2875 10.7125C16.0958 10.5208 16 10.2833 16 10C16 9.71667 16.0958 9.47917 16.2875 9.2875C16.4792 9.09583 16.7167 9 17 9ZM9 12C7.9 12 6.95833 11.6083 6.175 10.825C5.39167 10.0417 5 9.1 5 8C5 6.9 5.39167 5.95833 6.175 5.175C6.95833 4.39167 7.9 4 9 4C10.1 4 11.0417 4.39167 11.825 5.175C12.6083 5.95833 13 6.9 13 8C13 9.1 12.6083 10.0417 11.825 10.825C11.0417 11.6083 10.1 12 9 12ZM1 18V17.2C1 16.6333 1.14583 16.1125 1.4375 15.6375C1.72917 15.1625 2.11667 14.8 2.6 14.55C3.63333 14.0333 4.68333 13.6458 5.75 13.3875C6.81667 13.1292 7.9 13 9 13C10.1 13 11.1833 13.1292 12.25 13.3875C13.3167 13.6458 14.3667 14.0333 15.4 14.55C15.8833 14.8 16.2708 15.1625 16.5625 15.6375C16.8542 16.1125 17 16.6333 17 17.2V18C17 18.55 16.8042 19.0208 16.4125 19.4125C16.0208 19.8042 15.55 20 15 20H3C2.45 20 1.97917 19.8042 1.5875 19.4125C1.19583 19.0208 1 18.55 1 18Z",
                    fill: "currentColor"
                })))
            };
            var l = a(n(967154)),
                r = a(n(506479)),
                o = n(220584),
                i = a(n(156720)),
                u = a(n(667294));
            const s = ["iconXstyle", "height", "width", "viewBox"],
                c = "minus-user"
        },
        313384: (e, t, n) => {
            "use strict";
            var a = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.ReactionsMediaIcon = function(e) {
                var t;
                const {
                    iconXstyle: n,
                    height: a,
                    width: d,
                    viewBox: f
                } = e, p = (0, r.default)(e, s);
                let m;
                if (f) {
                    const {
                        x: e = 0,
                        y: t = 0,
                        width: n = 0,
                        height: a = 0
                    } = f;
                    m = [e, t, n, a].join(" ")
                }
                let h = 15,
                    g = 15;
                null == a && null == d || (h = a, g = d);
                return u.default.createElement(o.BaseSvgSpan, (0, l.default)({
                    name: c
                }, p), u.default.createElement("svg", {
                    viewBox: null !== (t = m) && void 0 !== t ? t : "0 0 15 15",
                    height: h,
                    width: g,
                    preserveAspectRatio: "xMidYMid meet",
                    className: (0, i.default)(n),
                    fill: "none"
                }, u.default.createElement("title", null, c), u.default.createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M0 7.5C0 11.6305 3.36946 15 7.5 15C11.6527 15 15 11.6305 15 7.5C15 3.36946 11.6305 0 7.5 0C3.36946 0 0 3.36946 0 7.5ZM10.995 8.69333C11.1128 8.67863 11.2219 8.66503 11.3211 8.65309C11.61 8.63028 11.8076 8.91918 11.6784 9.13965C10.8573 10.6374 9.29116 11.793 7.50455 11.793C5.71794 11.793 4.15181 10.6602 3.33072 9.16246C3.18628 8.91918 3.37634 8.63028 3.66524 8.65309C3.79123 8.66749 3.93521 8.68511 4.09426 8.70457C4.94292 8.80842 6.22074 8.96479 7.48174 8.96479C8.81855 8.96479 10.1378 8.80025 10.995 8.69333ZM5.41405 7.37207C6.05761 7.37207 6.60923 6.72851 6.60923 6.02978C6.60923 5.30348 6.05761 4.6875 5.41405 4.6875C4.77048 4.6875 4.21886 5.33106 4.21886 6.02978C4.20967 6.75609 4.77048 7.37207 5.41405 7.37207ZM10.7807 6.05619C10.7807 6.74114 10.24 7.37201 9.60912 7.37201C8.97825 7.37201 8.4375 6.76818 8.4375 6.05619C8.4375 5.37124 8.97825 4.74037 9.60912 4.74037C10.24 4.74037 10.7807 5.34421 10.7807 6.05619Z",
                    fill: "currentColor"
                })))
            };
            var l = a(n(967154)),
                r = a(n(506479)),
                o = n(220584),
                i = a(n(156720)),
                u = a(n(667294));
            const s = ["iconXstyle", "height", "width", "viewBox"],
                c = "reactions-media"
        },
        425813: (e, t, n) => {
            "use strict";
            var a = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.SagaHelpIcon = function(e) {
                var t;
                const {
                    iconXstyle: n,
                    height: a,
                    width: d,
                    viewBox: f
                } = e, p = (0, r.default)(e, s);
                let m;
                if (f) {
                    const {
                        x: e = 0,
                        y: t = 0,
                        width: n = 0,
                        height: a = 0
                    } = f;
                    m = [e, t, n, a].join(" ")
                }
                let h = 24,
                    g = 24;
                null == a && null == d || (h = a, g = d);
                return u.default.createElement(o.BaseSvgSpan, (0, l.default)({
                    name: c
                }, p), u.default.createElement("svg", {
                    viewBox: null !== (t = m) && void 0 !== t ? t : "0 0 24 24",
                    height: h,
                    width: g,
                    preserveAspectRatio: "xMidYMid meet",
                    className: (0, i.default)(n),
                    fill: "none"
                }, u.default.createElement("title", null, c), u.default.createElement("path", {
                    d: "M10.9501 18C11.3001 18 11.596 17.8792 11.8376 17.6375C12.0793 17.3958 12.2001 17.1 12.2001 16.75C12.2001 16.4 12.0793 16.1042 11.8376 15.8625C11.596 15.6208 11.3001 15.5 10.9501 15.5C10.6001 15.5 10.3043 15.6208 10.0626 15.8625C9.82097 16.1042 9.70014 16.4 9.70014 16.75C9.70014 17.1 9.82097 17.3958 10.0626 17.6375C10.3043 17.8792 10.6001 18 10.9501 18ZM11.1001 7.7C11.5168 7.7 11.8793 7.83333 12.1876 8.1C12.496 8.36667 12.6501 8.7 12.6501 9.1C12.6501 9.46667 12.5376 9.79167 12.3126 10.075C12.0876 10.3583 11.8335 10.625 11.5501 10.875C11.1668 11.2083 10.8293 11.575 10.5376 11.975C10.246 12.375 10.1001 12.825 10.1001 13.325C10.1001 13.5583 10.1876 13.7542 10.3626 13.9125C10.5376 14.0708 10.7418 14.15 10.9751 14.15C11.2251 14.15 11.4376 14.0667 11.6126 13.9C11.7876 13.7333 11.9001 13.525 11.9501 13.275C12.0168 12.925 12.1668 12.6125 12.4001 12.3375C12.6335 12.0625 12.8835 11.8 13.1501 11.55C13.5335 11.1833 13.8626 10.7833 14.1376 10.35C14.4126 9.91667 14.5501 9.43333 14.5501 8.9C14.5501 8.05 14.2043 7.35417 13.5126 6.8125C12.821 6.27083 12.0168 6 11.1001 6C10.4668 6 9.86264 6.13333 9.28764 6.4C8.71264 6.66667 8.27514 7.075 7.97514 7.625C7.85847 7.825 7.82097 8.0375 7.86264 8.2625C7.90431 8.4875 8.01681 8.65833 8.20014 8.775C8.43347 8.90833 8.67514 8.95 8.92514 8.9C9.17514 8.85 9.38347 8.70833 9.55014 8.475C9.73347 8.225 9.96264 8.03333 10.2376 7.9C10.5126 7.76667 10.8001 7.7 11.1001 7.7Z",
                    fill: "currentColor"
                }), u.default.createElement("path", {
                    d: "M15 3.93552C13.795 3.33671 12.4368 3 11 3C6.02944 3 2 7.02944 2 12C2 16.9706 6.02944 21 11 21C15.2832 21 18.8675 18.008 19.777 14",
                    strokeWidth: 2,
                    strokeLinecap: "round",
                    stroke: "currentColor"
                }), u.default.createElement("path", {
                    d: "M18.7259 3.85006C18.9265 3.38331 19.5899 3.38331 19.7904 3.85006L20.5568 5.63334C20.6154 5.7697 20.7242 5.87828 20.861 5.93673L22.649 6.70102C23.117 6.90103 23.117 7.56268 22.649 7.76269L20.861 8.52698C20.7242 8.58543 20.6154 8.69401 20.5568 8.83037L19.7749 10.65C19.5767 11.1112 18.9236 11.1183 18.7154 10.6615L17.8755 8.81882C17.8166 8.6895 17.7119 8.58635 17.5816 8.52917L15.8459 7.76749C15.3823 7.56407 15.3854 6.90698 15.851 6.70795L17.6554 5.93673C17.7921 5.87828 17.901 5.7697 17.9596 5.63334L18.7259 3.85006Z",
                    fill: "currentColor"
                })))
            };
            var l = a(n(967154)),
                r = a(n(506479)),
                o = n(220584),
                i = a(n(156720)),
                u = a(n(667294));
            const s = ["iconXstyle", "height", "width", "viewBox"],
                c = "saga-help"
        },
        524532: (e, t, n) => {
            "use strict";
            var a = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.SagaMessageIcon = function(e) {
                var t;
                const {
                    iconXstyle: n,
                    height: a,
                    width: d,
                    viewBox: f
                } = e, p = (0, r.default)(e, s);
                let m;
                if (f) {
                    const {
                        x: e = 0,
                        y: t = 0,
                        width: n = 0,
                        height: a = 0
                    } = f;
                    m = [e, t, n, a].join(" ")
                }
                let h = 24,
                    g = 24;
                null == a && null == d || (h = a, g = d);
                return u.default.createElement(o.BaseSvgSpan, (0, l.default)({
                    name: c
                }, p), u.default.createElement("svg", {
                    viewBox: null !== (t = m) && void 0 !== t ? t : "0 0 24 24",
                    height: h,
                    width: g,
                    preserveAspectRatio: "xMidYMid meet",
                    className: (0, i.default)(n),
                    fill: "none"
                }, u.default.createElement("title", null, c), u.default.createElement("path", {
                    d: "M21.9969 12V17.3333C21.9969 18.8061 20.803 20 19.3303 20H5.6636C4.19084 20 2.99693 18.8061 2.99693 17.3333V8.84848L0.941246 5.52617C0.529037 4.85997 1.00821 4 1.79162 4H13.9968C14.5491 4 14.9968 4.44772 14.9968 5C14.9968 5.55228 14.5491 6 13.9968 6H3.58632L4.99693 8.27977V17.3333C4.99693 17.7015 5.2954 18 5.6636 18H19.3303C19.6985 18 19.9969 17.7015 19.9969 17.3333V12.0158L19.9968 12C19.9968 11.4477 20.4445 11 20.9968 11C21.5491 11 21.9969 11.4477 21.9969 12Z",
                    fill: "currentColor"
                }), u.default.createElement("path", {
                    d: "M18.7872 4.35006C18.5867 3.88331 17.9233 3.88331 17.7227 4.35006L16.9564 6.13334C16.8978 6.2697 16.7889 6.37828 16.6522 6.43673L14.8478 7.20795C14.3823 7.40698 14.3791 8.06407 14.8427 8.26749L16.5784 9.02917C16.7087 9.08635 16.8134 9.1895 16.8723 9.31882L17.7122 11.1615C17.9204 11.6183 18.5735 11.6112 18.7717 11.15L19.5536 9.33037C19.6122 9.19401 19.721 9.08543 19.8578 9.02698L21.6458 8.26269C22.1138 8.06268 22.1138 7.40103 21.6458 7.20102L19.8578 6.43673C19.721 6.37828 19.6122 6.2697 19.5536 6.13334L18.7872 4.35006Z",
                    fill: "currentColor"
                })))
            };
            var l = a(n(967154)),
                r = a(n(506479)),
                o = n(220584),
                i = a(n(156720)),
                u = a(n(667294));
            const s = ["iconXstyle", "height", "width", "viewBox"],
                c = "saga-message"
        },
        824017: (e, t, n) => {
            "use strict";
            var a = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.TransferOwnershipIcon = function(e) {
                var t;
                const {
                    iconXstyle: n,
                    height: a,
                    width: d,
                    viewBox: f
                } = e, p = (0, r.default)(e, s);
                let m;
                if (f) {
                    const {
                        x: e = 0,
                        y: t = 0,
                        width: n = 0,
                        height: a = 0
                    } = f;
                    m = [e, t, n, a].join(" ")
                }
                let h = 24,
                    g = 24;
                null == a && null == d || (h = a, g = d);
                return u.default.createElement(o.BaseSvgSpan, (0, l.default)({
                    name: c
                }, p), u.default.createElement("svg", {
                    viewBox: null !== (t = m) && void 0 !== t ? t : "0 0 24 24",
                    height: h,
                    width: g,
                    preserveAspectRatio: "xMidYMid meet",
                    className: (0, i.default)(n),
                    fill: "none"
                }, u.default.createElement("title", null, c), u.default.createElement("path", {
                    d: "M9.175 10.825C9.95833 11.6083 10.9 12 12 12C13.1 12 14.0417 11.6083 14.825 10.825C15.6083 10.0417 16 9.1 16 8C16 6.9 15.6083 5.95833 14.825 5.175C14.0417 4.39167 13.1 4 12 4C10.9 4 9.95833 4.39167 9.175 5.175C8.39167 5.95833 8 6.9 8 8C8 9.1 8.39167 10.0417 9.175 10.825Z",
                    fill: "currentColor"
                }), u.default.createElement("path", {
                    d: "M4 17.2V18C4 18.55 4.19583 19.0208 4.5875 19.4125C4.97917 19.8042 5.45 20 6 20H13.1669C13.0587 19.6876 13 19.3506 13 18.998C13 17.3226 14.3245 15.998 16 15.998H16.0481C16.1308 15.3673 16.41 14.7595 16.8858 14.2837C16.9852 14.1843 17.0904 14.0935 17.2004 14.0112C16.5566 13.7544 15.9064 13.5465 15.25 13.3875C14.1833 13.1292 13.1 13 12 13C10.9 13 9.81667 13.1292 8.75 13.3875C7.68333 13.6458 6.63333 14.0333 5.6 14.55C5.11667 14.8 4.72917 15.1625 4.4375 15.6375C4.14583 16.1125 4 16.6333 4 17.2Z",
                    fill: "currentColor"
                }), u.default.createElement("path", {
                    d: "M19.2 19.998H16C15.4295 19.998 15 19.5691 15 18.998C15 18.4271 15.4291 17.998 16 17.998H19.2L18.3 17.098C17.9294 16.7273 17.9294 16.0686 18.3 15.698C18.6706 15.3273 19.3294 15.3274 19.7 15.698L22.3 18.298C22.7029 18.7009 22.7026 19.2953 22.3 19.698L19.7 22.298C19.3293 22.6686 18.6707 22.6686 18.3 22.298C17.9293 21.9271 17.9295 21.2684 18.3 20.898L19.2 19.998Z",
                    fill: "currentColor"
                })))
            };
            var l = a(n(967154)),
                r = a(n(506479)),
                o = n(220584),
                i = a(n(156720)),
                u = a(n(667294));
            const s = ["iconXstyle", "height", "width", "viewBox"],
                c = "transfer-ownership"
        },
        909882: (e, t, n) => {
            "use strict";
            var a = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.UndoKeepInChatMediaIcon = function(e) {
                var t;
                const {
                    iconXstyle: n,
                    height: a,
                    width: d,
                    viewBox: f
                } = e, p = (0, r.default)(e, s);
                let m;
                if (f) {
                    const {
                        x: e = 0,
                        y: t = 0,
                        width: n = 0,
                        height: a = 0
                    } = f;
                    m = [e, t, n, a].join(" ")
                }
                let h = 24,
                    g = 25;
                null == a && null == d || (h = a, g = d);
                return u.default.createElement(o.BaseSvgSpan, (0, l.default)({
                    name: c
                }, p), u.default.createElement("svg", {
                    viewBox: null !== (t = m) && void 0 !== t ? t : "0 0 25 24",
                    height: h,
                    width: g,
                    preserveAspectRatio: "xMidYMid meet",
                    className: (0, i.default)(n),
                    fill: "none"
                }, u.default.createElement("title", null, c), u.default.createElement("path", {
                    clipRule: "evenodd",
                    d: "m18 3h-10.00003c-1.1 0-1.99.9-1.99 2l-.0005.79529 13.99053 8.04121v-8.8365c0-1.1-.9-2-2-2zm2 14.9115 3.8749 2.2272.9967-1.734-22.97977-13.20787-.996627 1.73399 5.111727 2.93802-.00696 11.13116 7.00003-3 7 3z",
                    fill: "currentColor",
                    fillRule: "evenodd"
                })))
            };
            var l = a(n(967154)),
                r = a(n(506479)),
                o = n(220584),
                i = a(n(156720)),
                u = a(n(667294));
            const s = ["iconXstyle", "height", "width", "viewBox"],
                c = "undo-keep-in-chat-media"
        },
        332681: (e, t, n) => {
            "use strict";
            var a = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.UnpinnedIcon = function(e) {
                var t;
                const {
                    iconXstyle: n,
                    height: a,
                    width: d,
                    viewBox: f
                } = e, p = (0, r.default)(e, s);
                let m;
                if (f) {
                    const {
                        x: e = 0,
                        y: t = 0,
                        width: n = 0,
                        height: a = 0
                    } = f;
                    m = [e, t, n, a].join(" ")
                }
                let h = 24,
                    g = 24;
                null == a && null == d || (h = a, g = d);
                return u.default.createElement(o.BaseSvgSpan, (0, l.default)({
                    name: c
                }, p), u.default.createElement("svg", {
                    viewBox: null !== (t = m) && void 0 !== t ? t : "0 0 24 24",
                    height: h,
                    width: g,
                    preserveAspectRatio: "xMidYMid meet",
                    className: (0, i.default)(n),
                    fill: "none"
                }, u.default.createElement("title", null, c), u.default.createElement("path", {
                    d: "M15.9984 10.6491V4.28906H16.9984V2.28906H7.64844L15.9984 10.6491Z",
                    fill: "currentColor"
                }), u.default.createElement("path", {
                    d: "M16 11.7291V4.28906H17V2.28906H7V2.71906L16 11.7291Z",
                    fill: "currentColor"
                }), u.default.createElement("path", {
                    d: "M21.21 19.7395L4.23 2.73945C4.03 2.53945 3.79 2.43945 3.52 2.43945C3.25 2.43945 3.01 2.53945 2.81 2.73945C2.61 2.93945 2.51 3.17945 2.5 3.44945C2.5 3.71945 2.59 3.95945 2.79 4.15945L8.01 9.36945V11.2795L6.00999 13.2795V15.2795H11.01V21.2795L12.01 22.2795L13.01 21.2795V15.2795H13.93L19.79 21.1295C19.99 21.3295 20.23 21.4295 20.5 21.4295C20.77 21.4295 21.01 21.3295 21.21 21.1295C21.41 20.9295 21.51 20.6995 21.51 20.4295C21.51 20.1595 21.41 19.9295 21.21 19.7295V19.7395Z",
                    fill: "currentColor"
                }), u.default.createElement("path", {
                    d: "M21.21 19.7395L4.23 2.73945C4.03 2.53945 3.79 2.43945 3.52 2.43945C3.25 2.43945 3.01 2.53945 2.81 2.73945C2.61 2.93945 2.51 3.17945 2.5 3.44945C2.5 3.71945 2.59 3.95945 2.79 4.15945L8.01 9.36945V11.2795L6.00999 13.2795V15.2795H11.01V21.2795L12.01 22.2795L13.01 21.2795V15.2795H13.93L19.79 21.1295C19.99 21.3295 20.23 21.4295 20.5 21.4295C20.77 21.4295 21.01 21.3295 21.21 21.1295C21.41 20.9295 21.51 20.6995 21.51 20.4295C21.51 20.1595 21.41 19.9295 21.21 19.7295V19.7395Z",
                    fill: "currentColor"
                })))
            };
            var l = a(n(967154)),
                r = a(n(506479)),
                o = n(220584),
                i = a(n(156720)),
                u = a(n(667294));
            const s = ["iconXstyle", "height", "width", "viewBox"],
                c = "unpinned"
        },
        113084: (e, t, n) => {
            "use strict";
            var a = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.ViewOnceSenderNuxIcon = function(e) {
                var t;
                const {
                    iconXstyle: n,
                    height: a,
                    width: d,
                    viewBox: f
                } = e, p = (0, r.default)(e, s);
                let m;
                if (f) {
                    const {
                        x: e = 0,
                        y: t = 0,
                        width: n = 0,
                        height: a = 0
                    } = f;
                    m = [e, t, n, a].join(" ")
                }
                let h = 168,
                    g = 198;
                null == a && null == d || (h = a, g = d);
                return u.default.createElement(o.BaseSvgSpan, (0, l.default)({
                    name: c
                }, p), u.default.createElement("svg", {
                    viewBox: null !== (t = m) && void 0 !== t ? t : "0 0 198 168",
                    height: h,
                    width: g,
                    preserveAspectRatio: "xMidYMid meet",
                    className: (0, i.default)(n),
                    fill: "none"
                }, u.default.createElement("title", null, c), u.default.createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M182.166 57.7255C175.603 64.6681 166.307 69 156 69C139.711 69 125.949 58.1818 121.506 43.3383C112.644 40.1443 102.78 34.6399 86.1179 25.3418C84.3675 24.3651 82.5421 23.3465 80.635 22.2843C51.9895 6.3297 6.00593 19.7651 2.23678 73.9266C-0.243988 109.575 17.0718 134.232 39.9408 142.968C62.0404 151.411 110.667 158.989 162.477 140.97C190.944 131.069 198.637 111.677 196.725 89.4613C195.454 74.6999 189.899 64.4184 182.166 57.7255Z",
                    fill: "#CCEFEB"
                }), u.default.createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M134.277 61.7099C125.603 55.1366 120 44.7226 120 33C120 29.0037 120.651 25.1594 121.853 21.5676L80.2307 15.7179C73.8904 14.8269 68.016 19.3544 67.11 25.8304L50.5682 144.067C49.6622 150.543 54.0676 156.515 60.4079 157.406L108.242 164.129C114.583 165.02 120.457 160.493 121.363 154.016L134.277 61.7099Z",
                    fill: "#42CBA5"
                }), u.default.createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M122.943 18.7215L80.4885 12.755C73.9412 11.8348 67.8737 16.5197 66.9365 23.219L49.8245 145.531C48.8872 152.231 53.4351 158.407 59.9824 159.327L109.378 166.27C115.925 167.19 121.993 162.505 122.93 155.806L135.929 62.8902C135.129 62.3519 134.352 61.7824 133.599 61.1834L120.411 155.452C119.673 160.727 114.895 164.417 109.739 163.692L60.343 156.75C55.187 156.025 51.6056 151.161 52.3437 145.885L69.4557 23.573C70.1938 18.2974 74.9719 14.608 80.1279 15.3326L121.974 21.2137C122.266 20.3682 122.59 19.537 122.943 18.7215Z",
                    fill: "#316474"
                }), u.default.createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M135.032 62.2669C125.93 55.7339 120 45.0594 120 33C120 27.0332 121.452 21.4055 124.021 16.4507L82.3684 10.5968C76.0897 9.71436 70.2654 14.2484 69.3594 20.7238L52.8193 138.948C51.9134 145.424 56.2689 151.388 62.5476 152.271L109.917 158.928C116.196 159.81 122.02 155.276 122.926 148.801L135.032 62.2669Z",
                    fill: "white"
                }), u.default.createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M124.376 15.7826L80.8832 9.67008C74.3203 8.74772 68.2607 13.2841 67.3488 19.8023L50.6993 138.809C49.7874 145.327 54.3684 151.359 60.9313 152.281L110.445 159.24C117.008 160.162 123.067 155.626 123.979 149.108L136.032 62.959C135.229 62.4232 134.45 61.856 133.695 61.2591L121.454 148.753C120.736 153.886 115.964 157.458 110.796 156.732L61.2822 149.773C56.1139 149.047 52.5063 144.297 53.2245 139.164L69.874 20.1572C70.5921 15.0241 75.364 11.4517 80.5323 12.1781L123.186 18.1726C123.554 17.3594 123.951 16.5623 124.376 15.7826Z",
                    fill: "#316474"
                }), u.default.createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M121.759 21.8546L119.225 21.5025L88.5269 17.2367L81.6788 16.2851C76.9838 15.6327 72.6359 18.9334 71.9674 23.6575L56.0988 135.806C55.4304 140.53 58.6946 144.888 63.3896 145.541L107.784 151.71C112.479 152.362 116.827 149.061 117.495 144.337L129.762 57.6491C123.708 51.2078 120 42.5372 120 33.0005C120 29.1102 120.617 25.364 121.759 21.8546Z",
                    fill: "#EEFEFA"
                }), u.default.createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M131.411 59.2946L119.092 146.356C118.408 151.187 113.925 154.558 109.079 153.885L63.2521 147.516C58.4056 146.843 55.031 142.38 55.7146 137.549L71.9439 22.852C72.6275 18.0206 77.1105 14.6499 81.957 15.3233L122.084 20.8994C121.801 21.6938 121.545 22.501 121.316 23.32L81.6063 17.802C78.133 17.3193 74.9202 19.735 74.4302 23.1975L58.201 137.895C57.711 141.357 60.1295 144.555 63.6028 145.038L109.429 151.406C112.903 151.889 116.116 149.473 116.605 146.01L129.195 57.0327C129.901 57.8186 130.64 58.5733 131.411 59.2946Z",
                    fill: "#316474"
                }), u.default.createElement("path", {
                    d: "M76.7691 93.7377C76.4214 96.1974 78.1329 98.4706 80.5929 98.8163L111.741 103.194C114.202 103.54 116.481 101.824 116.83 99.3627L119.073 83.5207C119.421 81.0608 117.709 78.787 115.249 78.4413L73.6586 72.5961C73.183 72.5293 72.895 73.106 73.2346 73.4451L76.5525 76.7581C77.9966 78.2 78.6778 80.2374 78.3919 82.2594L76.7691 93.7377Z",
                    fill: "white",
                    stroke: "#00B39B",
                    strokeWidth: 3
                }), u.default.createElement("path", {
                    d: "M107.679 93.8443L87.8798 91.0618C87.0681 90.9477 86.7049 90.084 87.2785 89.5941L91.8745 85.6237C92.3348 85.2215 93.1268 85.3328 93.4584 85.8463L96.5327 90.5489L102.507 85.389C102.968 84.9869 103.76 85.0982 104.091 85.6116L108.661 92.5992C109.078 93.2283 108.491 93.9584 107.679 93.8443Z",
                    fill: "white"
                }), u.default.createElement("path", {
                    d: "M96.7971 88.6689L94.5062 85.1645C93.7607 84.0152 92.0887 83.7802 91.0553 84.6795L86.4635 88.6463C85.7435 89.2636 85.5901 90.1864 85.9046 90.9467C86.205 91.6728 86.8893 92.1848 87.7059 92.2996L107.505 95.0822C108.321 95.1969 109.12 94.8933 109.609 94.2782C110.121 93.6341 110.228 92.7048 109.706 91.913C109.705 91.9118 109.705 91.9106 109.704 91.9094L105.141 84.9334C105.14 84.9321 105.14 84.9309 105.139 84.9296C104.393 83.7805 102.721 83.5456 101.688 84.4449L96.7971 88.6689Z",
                    stroke: "#42CBA5",
                    strokeOpacity: .5,
                    strokeWidth: 2.5
                }), u.default.createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M81 22.999C80.4477 22.999 80 23.4467 80 23.999C80 24.5513 80.4477 24.999 81 24.999C81.5523 24.999 82 24.5513 82 23.999C82 23.4467 81.5523 22.999 81 22.999ZM78 23.999C78 22.3422 79.3431 20.999 81 20.999C82.6569 20.999 84 22.3422 84 23.999C84 25.6559 82.6569 26.999 81 26.999C79.3431 26.999 78 25.6559 78 23.999Z",
                    fill: "#316474"
                }), u.default.createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M155.502 62C156.019 62 156.532 61.9866 157.043 61.9603C158.421 61.8892 159.482 60.7138 159.41 59.3349C159.339 57.956 158.164 56.8958 156.785 56.967C156.36 56.9889 155.933 57 155.502 57V62ZM155.502 8C155.933 8.00003 156.36 8.01114 156.785 8.03304C158.164 8.10415 159.339 7.044 159.41 5.66512C159.482 4.28624 158.421 3.11079 157.043 3.03968C156.532 3.01336 156.019 3.00003 155.502 3V8ZM168.898 6.21114C167.668 5.58332 166.162 6.07124 165.534 7.30096C164.906 8.53067 165.394 10.0365 166.624 10.6643C167.388 11.0543 168.128 11.4832 168.844 11.9485C170.001 12.7016 171.549 12.3739 172.303 11.2167C173.056 10.0594 172.728 8.51077 171.571 7.75771C170.71 7.19753 169.818 6.68094 168.898 6.21114ZM180.243 16.4297C179.49 15.2724 177.941 14.9447 176.784 15.6978C175.626 16.4509 175.299 17.9995 176.052 19.1568C176.517 19.8719 176.946 20.6126 177.336 21.3764C177.964 22.6061 179.47 23.094 180.699 22.4662C181.929 21.8384 182.417 20.3325 181.789 19.1028C181.319 18.1826 180.803 17.2905 180.243 16.4297ZM184.961 30.9578C184.89 29.5789 183.714 28.5188 182.335 28.5899C180.956 28.661 179.896 29.8365 179.967 31.2153C179.989 31.6406 180 32.0689 180 32.5C180 32.9311 179.989 33.3594 179.967 33.7847C179.896 35.1635 180.956 36.339 182.335 36.4101C183.714 36.4812 184.89 35.4211 184.961 34.0422C184.987 33.5312 185 33.0171 185 32.5C185 31.9829 184.987 31.4688 184.961 30.9578ZM181.789 45.8972C182.417 44.6675 181.929 43.1616 180.699 42.5338C179.47 41.906 177.964 42.3939 177.336 43.6236C176.946 44.3874 176.517 45.1281 176.052 45.8432C175.299 47.0005 175.626 48.5491 176.784 49.3022C177.941 50.0553 179.49 49.7276 180.243 48.5703C180.803 47.7095 181.319 46.8174 181.789 45.8972ZM171.571 57.2423C172.728 56.4892 173.056 54.9406 172.303 53.7833C171.549 52.6261 170.001 52.2984 168.844 53.0515C168.128 53.5168 167.388 53.9457 166.624 54.3357C165.394 54.9635 164.906 56.4693 165.534 57.699C166.162 58.9288 167.668 59.4167 168.898 58.7889C169.818 58.3191 170.71 57.8025 171.571 57.2423Z",
                    fill: "#00B39B"
                }), u.default.createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M155.501 3C155.5 3 155.5 3 155.5 3C139.208 3 126 16.2076 126 32.5C126 48.7924 139.208 62 155.5 62C155.5 62 155.5 62 155.501 62V57C155.5 57 155.5 57 155.5 57C141.969 57 131 46.031 131 32.5C131 18.969 141.969 8 155.5 8C155.5 8 155.5 8 155.501 8V3Z",
                    fill: "#00B39B"
                }), u.default.createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M151.57 18.499C149.875 18.499 148.501 19.8727 148.501 21.5672C148.501 23.2617 149.875 24.6354 151.57 24.6354H154.502V42.499C154.502 44.1559 155.845 45.499 157.502 45.499C159.158 45.499 160.502 44.1559 160.502 42.499V21.499C160.502 19.8422 159.158 18.499 157.502 18.499C157.49 18.499 157.479 18.4991 157.468 18.4992C157.456 18.4991 157.445 18.499 157.433 18.499H151.57Z",
                    fill: "#00B39B"
                })))
            };
            var l = a(n(967154)),
                r = a(n(506479)),
                o = n(220584),
                i = a(n(156720)),
                u = a(n(667294));
            const s = ["iconXstyle", "height", "width", "viewBox"],
                c = "view-once-sender-nux"
        },
        96520: (e, t, n) => {
            "use strict";
            var a = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.VoiceCallFilledIcon = function(e) {
                var t;
                const {
                    iconXstyle: n,
                    height: a,
                    width: d,
                    viewBox: f
                } = e, p = (0, r.default)(e, s);
                let m;
                if (f) {
                    const {
                        x: e = 0,
                        y: t = 0,
                        width: n = 0,
                        height: a = 0
                    } = f;
                    m = [e, t, n, a].join(" ")
                }
                let h = 22,
                    g = 22;
                null == a && null == d || (h = a, g = d);
                return u.default.createElement(o.BaseSvgSpan, (0, l.default)({
                    name: c
                }, p), u.default.createElement("svg", {
                    viewBox: null !== (t = m) && void 0 !== t ? t : "0 0 22 22",
                    height: h,
                    width: g,
                    preserveAspectRatio: "xMidYMid meet",
                    className: (0, i.default)(n),
                    fill: "none"
                }, u.default.createElement("title", null, c), u.default.createElement("path", {
                    d: "M19.685 14.3869L16.7217 14.0486C16.0101 13.9669 15.3101 14.2119 14.8084 14.7136L12.6617 16.8602C9.36005 15.1802 6.65338 12.4852 4.97338 9.17188L7.13172 7.01355C7.63338 6.51188 7.87838 5.81188 7.79672 5.10022L7.45838 2.16022C7.31838 0.981882 6.32672 0.0952148 5.13672 0.0952148H3.11838C1.80005 0.0952148 0.703381 1.19188 0.785047 2.51022C1.40338 12.4736 9.37172 20.4302 19.3234 21.0486C20.6417 21.1302 21.7384 20.0336 21.7384 18.7152V16.6969C21.75 15.5186 20.8634 14.5269 19.685 14.3869Z",
                    fill: "currentColor"
                })))
            };
            var l = a(n(967154)),
                r = a(n(506479)),
                o = n(220584),
                i = a(n(156720)),
                u = a(n(667294));
            const s = ["iconXstyle", "height", "width", "viewBox"],
                c = "voice-call-filled"
        },
        663945: (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                default: () => a
            });
            const a = {
                msg: "_7Upvn",
                text: "_3Q6VG",
                bubble: "_3cupO",
                author: "LldYr",
                hasSuspiciousLinks: "_1BEFs",
                hasAuthor: "_28v58",
                suspiciousLabel: "_1kBNA"
            }
        },
        936027: (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                default: () => a
            });
            const a = {
                mediaViewerPlaceholder: "_2qUle",
                imageAudio: "_1leJw",
                mediaViewerAudio: "_17zHt"
            }
        },
        572028: (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                default: () => a
            });
            const a = {
                thumbsContainer: "_3GUJh",
                scrollContainer: "_27n9o",
                viewerThumbs: "_1P0Vh",
                mediaThumb: "_2nI8K",
                thumbPadding: "_1s0h2"
            }
        }
    }
]);
//# sourceMappingURL=https://web.whatsapp.com/lazy_loaded_high_priority_components.7e369cbb39d36d176e7e.js.map