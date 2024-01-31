/*! Copyright (c) 2024 WhatsApp Inc. All Rights Reserved. */
(self.webpackChunkwhatsapp_web_client = self.webpackChunkwhatsapp_web_client || []).push([
    [9488], {
        282627: (e, t, o) => {
            "use strict";
            var n = o(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.verifyPostcode = function(e, t) {
                return a.default.verifyAndSavePostcode(e, t)
            };
            var a = n(o(418950))
        },
        531737: (e, t, o) => {
            "use strict";
            var n = o(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.getGroupCountMetricsFromChatWid = function(e) {
                if (null != e && e.isGroup()) {
                    const t = function(e) {
                        if (e.isGroup()) return (0, a.default)(o(667845)).get(e);
                        return null
                    }(e);
                    if (null != t) return (0, l.getGroupCountMetricsFromGroupMetadata)(t)
                }
            };
            var a = n(o(472514)),
                l = o(869513)
        },
        970739: (e, t) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.GROUP_PROFILE_ACTION_TYPE = void 0;
            const o = Object.freeze({
                CHANGE_PROFILE_PHOTO: 1,
                TAP_ACTION_ITEM_TAKE_PHOTO: 2,
                TAP_ACTION_ITEM_VIEW_PHOTO: 3,
                TAP_ACTION_ITEM_EMOJI_STICKER: 4,
                TAP_ACTION_ITEM_UPLOAD_PHOTO: 5,
                TAP_ACTION_ITEM_REMOVE_PHOTO: 6,
                TAP_ACTION_ITEM_WEB_SEARCH: 7,
                EMOJI_PANEL_OPEN: 8,
                STICKER_PANEL_OPEN: 9,
                PROFILE_PIC_UPDATED: 10
            });
            t.GROUP_PROFILE_ACTION_TYPE = o
        },
        978244: (e, t) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.PROFILE_PICTURE_TYPE = void 0;
            const o = Object.freeze({
                PHOTO_CAMERA: 1,
                PHOTO_UPLOAD: 2,
                WEB_SEARCH: 3,
                EMOJI: 4,
                STICKER: 5,
                REMOVE_PHOTO: 6
            });
            t.PROFILE_PICTURE_TYPE = o
        },
        438543: (e, t, o) => {
            "use strict";
            var n = o(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.StickerDetailsStickerPackInfo = m, t.Theme = void 0;
            var a = n(o(692629)),
                l = o(305521),
                r = o(225446),
                i = o(788788),
                c = o(97858),
                d = o(180519),
                u = o(548360),
                s = n(o(667294));
            n(o(156720));
            const f = {
                    container: {
                        color: "hp667wtd",
                        fontSize: "f8jlpxt4",
                        lineHeight: "jgi8eev7",
                        textAlign: "qfejxiq4"
                    },
                    stickerStore: {
                        marginBottom: "e2xccmyv"
                    },
                    mediaViewer: {
                        marginBottom: "r2u2pyhj"
                    },
                    name: {
                        fontSize: "enbbiyaj",
                        lineHeight: "l85iiqla",
                        color: "tl2vja3b"
                    }
                },
                p = o(76672).Mirrored(["StickerStore", "MediaViewer"]);

            function m(e) {
                const {
                    name: t,
                    publisher: o,
                    theme: n,
                    sticker: m
                } = e;
                let g;
                return (0, c.isFavoriteStickersEnabled)() && null != m && (g = i.FavoriteStickerCollection.get(m.filehash) ? s.default.createElement(a.default, {
                    onClick: () => (0, r.removeStickerFromFavorites)(m),
                    type: "secondary"
                }, u.fbt._("Remove From Favorites", null, {
                    hk: "3YoUkP"
                })) : s.default.createElement(a.default, {
                    onClick: () => (0, r.addStickerToFavorites)(m),
                    type: "secondary"
                }, u.fbt._("Add to Favorites", null, {
                    hk: "3x4EBo"
                }))), s.default.createElement(s.default.Fragment, null, s.default.createElement(d.TextDiv, {
                    theme: "plain",
                    xstyle: [f.container, n === p.StickerStore && f.stickerStore, n === p.MediaViewer && f.mediaViewer]
                }, t && s.default.createElement(l.EmojiText, {
                    xstyle: f.name,
                    text: t
                }), t && o && s.default.createElement(l.EmojiText, {
                    text: " • "
                }), o && s.default.createElement(l.EmojiText, {
                    text: o
                })), g)
            }
            t.Theme = p, m.displayName = "StickerDetailsStickerPackInfo"
        },
        946477: (e, t, o) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.verifyPostcode = void 0;
            var n = o(282627);
            t.verifyPostcode = (e, t) => (0, n.verifyPostcode)(e, t)
        },
        934668: (e, t, o) => {
            "use strict";
            var n = o(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = i;
            var a = o(312140),
                l = n(o(667294));
            n(o(156720));
            const r = {
                cartIcon: {
                    color: "svlsagor"
                },
                inheritColor: {
                    color: "gtscxtjd"
                }
            };

            function i(e) {
                let {
                    theme: t
                } = e;
                return l.default.createElement(a.ShoppingCartIcon, {
                    xstyle: [r.cartIcon, "inherit-color" === t && r.inheritColor]
                })
            }
            i.displayName = "CartIcon"
        },
        263755: (e, t, o) => {
            "use strict";
            var n = o(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.CartIconMenuBarItem = void 0;
            var a = n(o(934668)),
                l = o(957256),
                r = o(568550),
                i = o(526795),
                c = o(932523),
                d = o(548360),
                u = function(e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || "object" != typeof e && "function" != typeof e) return {
                        default: e
                    };
                    var o = s(t);
                    if (o && o.has(e)) return o.get(e);
                    var n = {},
                        a = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var l in e)
                        if ("default" !== l && Object.prototype.hasOwnProperty.call(e, l)) {
                            var r = a ? Object.getOwnPropertyDescriptor(e, l) : null;
                            r && (r.get || r.set) ? Object.defineProperty(n, l, r) : n[l] = e[l]
                        }
                    n.default = e, o && o.set(e, n);
                    return n
                }(o(667294));

            function s(e) {
                if ("function" != typeof WeakMap) return null;
                var t = new WeakMap,
                    o = new WeakMap;
                return (s = function(e) {
                    return e ? o : t
                })(e)
            }
            const f = (0, u.forwardRef)(((e, t) => {
                const {
                    cartIconTheme: o,
                    onClick: n,
                    cartCountText: s,
                    testid: f = "menu-bar-cart-link",
                    catalogOwnerJid: p
                } = e, m = (0, u.useContext)(r.DrawerContext);
                return u.default.createElement(i.MenuBarItem, {
                    ref: t,
                    testid: f,
                    icon: u.default.createElement(a.default, {
                        theme: o
                    }),
                    text: s,
                    title: d.fbt._("Your cart", null, {
                        hk: "Sn66V"
                    }),
                    onClick: (0, l.getOnCartClickWithLog)(n, p, (0, c.getProductCatalogContext)(m))
                })
            }));
            t.CartIconMenuBarItem = f, f.displayName = "CartIconMenuBarItem"
        },
        145302: (e, t, o) => {
            "use strict";
            var n = o(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = d;
            var a = o(22323),
                l = n(o(210002)),
                r = o(459857),
                i = o(548360),
                c = n(o(667294));

            function d(e) {
                const {
                    catalog: t,
                    onSend: o
                } = e, n = (0, a.createCatalogLink)(t.id.user), d = t.id.equals((0, r.getMaybeMeUser)()) ? `${i.fbt._("Follow this link to view our catalog on WhatsApp:",null,{hk:"1bmMoC"}).toString()} ${n}` : n;
                return c.default.createElement(l.default, {
                    text: d,
                    onSend: o
                })
            }
            d.displayName = "SendProductLinkFlow"
        },
        688023: (e, t, o) => {
            "use strict";
            var n = o(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = d;
            var a = o(22323),
                l = n(o(210002)),
                r = o(459857),
                i = o(548360),
                c = n(o(667294));

            function d(e) {
                const {
                    product: t,
                    onSend: o
                } = e, n = (0, a.createProductLink)(t.catalogWid.user, t.id.toString()), d = (0, r.isMeAccount)(t.catalogWid) ? `${i.fbt._("Follow this link to view our item on WhatsApp:",null,{hk:"H5KuN"}).toString()} ${n}` : n;
                return c.default.createElement(l.default, {
                    text: d,
                    onSend: o
                })
            }
            d.displayName = "SendProductLinkFlow"
        },
        344460: (e, t, o) => {
            "use strict";
            var n = o(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = s;
            var a = o(72696),
                l = o(129363),
                r = o(676345),
                i = n(o(667294)),
                c = n(o(156720));
            const d = {
                labelRow: {
                    display: "l7jjieqr",
                    fontSize: "f8jlpxt4"
                },
                standaloneLabelRow: {
                    fontSize: "dsh4tgtl",
                    lineHeight: "i30vgaoj"
                },
                standaloneLabelRowIcon: {
                    width: "a2hqsskl",
                    height: "qgpfrw6h"
                },
                labelContainer: {
                    flexWrap: "lkhkxwyq"
                }
            };

            function u(e) {
                let {
                    labelId: t,
                    isStandalone: o
                } = e;
                return i.default.createElement("div", {
                    className: (0, c.default)(d.labelRow, r.uiPadding.top5, r.uiPadding.end5, r.uiPadding.bottom5, r.uiPadding.start0, r.uiMargin.end10, o && d.standaloneLabelRow, o && r.uiPadding.top8, o && r.uiPadding.end14, o && r.uiPadding.bottom8, o && r.uiPadding.start0)
                }, i.default.createElement(l.Labels, {
                    labels: [t],
                    showName: !0,
                    iconXstyle: [d.standaloneLabelRowIcon, r.uiPadding.top1]
                }))
            }

            function s(e) {
                const {
                    labels: t,
                    theme: o
                } = e;
                if (!t || !(0, a.canDisplayLabel)()) return null;
                const n = "standalone" === o;
                return i.default.createElement("div", {
                    className: (0, c.default)(d.labelContainer, r.uiMargin.top3, n && r.uiMargin.top0)
                }, t.map(((e, t) => i.default.createElement(u, {
                    key: t,
                    labelId: e,
                    isStandalone: n
                }))))
            }
            s.displayName = "InfoDrawerLabelWell"
        },
        464624: (e, t, o) => {
            "use strict";
            var n = o(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = v;
            var a = o(122583),
                l = o(15842),
                r = o(984330),
                i = o(103440),
                c = n(o(846870)),
                d = o(753233),
                u = o(491606),
                s = o(114850),
                f = o(316348),
                p = o(555622),
                m = o(202391),
                g = o(180519),
                _ = o(625786),
                h = o(390737),
                C = o(548360),
                y = function(e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || "object" != typeof e && "function" != typeof e) return {
                        default: e
                    };
                    var o = b(t);
                    if (o && o.has(e)) return o.get(e);
                    var n = {},
                        a = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var l in e)
                        if ("default" !== l && Object.prototype.hasOwnProperty.call(e, l)) {
                            var r = a ? Object.getOwnPropertyDescriptor(e, l) : null;
                            r && (r.get || r.set) ? Object.defineProperty(n, l, r) : n[l] = e[l]
                        }
                    n.default = e, o && o.set(e, n);
                    return n
                }(o(667294));

            function b(e) {
                if ("function" != typeof WeakMap) return null;
                var t = new WeakMap,
                    o = new WeakMap;
                return (b = function(e) {
                    return e ? o : t
                })(e)
            }

            function v(e) {
                const {
                    collection: t
                } = e, [o, n] = (0, y.useState)(!1), [b, v] = (0, y.useState)(!1), [E, k] = (0, y.useState)(""), P = () => {
                    s.ModalManager.close()
                };
                if (b) return y.default.createElement(i.ConfirmPopup, {
                    title: C.fbt._("Request review", null, {
                        hk: "1Rp2pL"
                    }),
                    onOK: P
                }, y.default.createElement(g.TextDiv, null, C.fbt._("We will review the collection and if it meets our guidelines, it will be added to your catalog.", null, {
                    hk: "y5vML"
                })));
                const O = E.length < 1 || o;
                return y.default.createElement(i.ConfirmPopup, {
                    title: C.fbt._("Request review", null, {
                        hk: "1Rp2pL"
                    }),
                    onOK: () => {
                        n(!0);
                        let e = !0;
                        p.QPL.markerStart(f.QuickLogMarkerId.WHATSAPP_COLLECTION_APPEAL), (0, u.handleCollectionAppeal)(t, E).then((() => {
                            n(!1), v(!0), e = !1, p.QPL.markerEnd(f.QuickLogMarkerId.WHATSAPP_COLLECTION_APPEAL, l.QuickLogActionType.SUCCESS)
                        })).catch((0, a.filteredCatch)(r.ServerStatusCodeError, (() => {
                            h.ToastManager.open(y.default.createElement(_.Toast, {
                                msg: C.fbt._("Something went wrong and your request wasn't submitted. Try again.", null, {
                                    hk: "3sAwQH"
                                }),
                                id: (0, _.genId)("catalog_collection_appeal_submission_failed")
                            })), n(!1)
                        }))).finally((() => {
                            e && p.QPL.markerEnd(f.QuickLogMarkerId.WHATSAPP_COLLECTION_APPEAL, l.QuickLogActionType.FAIL)
                        }))
                    },
                    onCancel: P,
                    okDisabled: O
                }, y.default.createElement("form", null, y.default.createElement(m.RichTextField, {
                    testid: "confirm-popup-text-input",
                    placeholder: C.fbt._("Enter reason for this request...", null, {
                        hk: "3U5nE7"
                    }),
                    onChange: e => {
                        let {
                            text: t
                        } = e;
                        k(t)
                    },
                    value: E,
                    maxLength: 1e3
                }), y.default.createElement(d.ExternalLink, {
                    href: c.default.WA_COMMERCE_POLICY_URL
                }, C.fbt._("Learn More", null, {
                    hk: "FZuUT"
                }))))
            }
            v.displayName = "AppealCollectionPopup"
        },
        534885: (e, t, o) => {
            "use strict";
            var n = o(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = d;
            var a = o(36045),
                l = o(477603),
                r = o(548360),
                i = n(o(667294));
            n(o(156720));
            const c = {
                icon: {
                    color: "rahkaw8d"
                }
            };

            function d(e) {
                let {
                    onClick: t
                } = e;
                return i.default.createElement(a.DrawerButtonSimple, {
                    testid: "li-share-link",
                    icon: i.default.createElement(l.ForwardIcon, {
                        xstyle: c.icon
                    }),
                    onClick: t
                }, r.fbt._("Send product", null, {
                    hk: "1wkzue"
                }))
            }
            d.displayName = "SendProductButton"
        },
        487011: (e, t, o) => {
            "use strict";
            var n = o(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = s;
            var a = o(713464),
                l = n(o(838536)),
                r = n(o(502742)),
                i = o(459857),
                c = function(e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || "object" != typeof e && "function" != typeof e) return {
                        default: e
                    };
                    var o = u(t);
                    if (o && o.has(e)) return o.get(e);
                    var n = {},
                        a = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var l in e)
                        if ("default" !== l && Object.prototype.hasOwnProperty.call(e, l)) {
                            var r = a ? Object.getOwnPropertyDescriptor(e, l) : null;
                            r && (r.get || r.set) ? Object.defineProperty(n, l, r) : n[l] = e[l]
                        }
                    n.default = e, o && o.set(e, n);
                    return n
                }(o(667294)),
                d = o(808446);

            function u(e) {
                if ("function" != typeof WeakMap) return null;
                var t = new WeakMap,
                    o = new WeakMap;
                return (u = function(e) {
                    return e ? o : t
                })(e)
            }

            function s(e) {
                let {
                    onOpenCollections: t
                } = e;
                const [o, n] = (0, c.useState)(!1), u = a.CatalogCollection.get((0, i.getMeUser)());
                return (0, d.useListener)(null == u ? void 0 : u.collections, "change", (() => {
                    n(!0)
                })), o && c.default.createElement(l.default, null, c.default.createElement(r.default, {
                    onClick: t
                }))
            }
            s.displayName = "CatalogNuxBanners"
        },
        786399: (e, t, o) => {
            "use strict";
            var n = o(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function() {
                const e = new u.CoolOffNux(_, {
                    COOL_OFF_START_STORAGE_KEY: d.CoolOffPeriodKeys.CATALOG,
                    MAX_VIEWS_IN_DAYS: 1,
                    COOL_OFF_DURATION_IN_DAYS: 1,
                    metricField: C
                });
                if (e.shouldShow()) {
                    const t = m.default.createElement(l.ConfirmPopup, {
                        onOK: () => {
                            e.dismiss(), c.ModalManager.close()
                        }
                    }, m.default.createElement(r.FlexColumn, {
                        align: "center"
                    }, m.default.createElement(i.default, {
                        xstyle: h.graphic
                    }, m.default.createElement(a.CartInterstitialGraphicIcon, null)), m.default.createElement(s.TextHeader, {
                        theme: "popupTitle"
                    }, p.fbt._("New: Add to Cart", null, {
                        hk: "34ysyY"
                    })), m.default.createElement(s.TextParagraph, {
                        color: "secondary",
                        className: (0, g.default)(h.description)
                    }, p.fbt._("Simpler for you to keep track of order inquiries, manage requests, and close sales.", null, {
                        hk: "25ZM2y"
                    }))));
                    c.ModalManager.open(t), e.show(), e.startCoolOffToday()
                }
            };
            var a = o(609694),
                l = o(103440),
                r = o(690495),
                i = n(o(469733)),
                c = o(114850),
                d = o(95589),
                u = o(316488),
                s = o(180519),
                f = o(403602),
                p = o(548360),
                m = n(o(667294)),
                g = n(o(156720));
            const _ = d.NuxKeyTypes.COOL_OFF_NUX.CART_INTERSTITIAL,
                h = {
                    graphic: {
                        marginTop: "nylzjxre",
                        marginEnd: "lfum0007",
                        marginBottom: "bvhm1occ",
                        marginStart: "r6x3u63k",
                        color: "bc38n4nm"
                    },
                    description: {
                        marginTop: "opp68qpq",
                        textAlign: "qfejxiq4"
                    }
                },
                C = f.BANNER_TYPES.SMB_CATALOG_CART_INTERSTITIAL
        },
        502742: (e, t, o) => {
            "use strict";
            var n = o(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var a = o(287461),
                l = o(713464),
                r = o(445729),
                i = n(o(760932)),
                c = o(95589),
                d = o(182908),
                u = o(316488),
                s = o(459857),
                f = o(403602),
                p = o(548360),
                m = function(e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || "object" != typeof e && "function" != typeof e) return {
                        default: e
                    };
                    var o = _(t);
                    if (o && o.has(e)) return o.get(e);
                    var n = {},
                        a = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var l in e)
                        if ("default" !== l && Object.prototype.hasOwnProperty.call(e, l)) {
                            var r = a ? Object.getOwnPropertyDescriptor(e, l) : null;
                            r && (r.get || r.set) ? Object.defineProperty(n, l, r) : n[l] = e[l]
                        }
                    n.default = e, o && o.set(e, n);
                    return n
                }(o(667294)),
                g = n(o(156720));

            function _(e) {
                if ("function" != typeof WeakMap) return null;
                var t = new WeakMap,
                    o = new WeakMap;
                return (_ = function(e) {
                    return e ? o : t
                })(e)
            }
            const h = {
                    color: "o0rubyzf"
                },
                C = c.NuxKeyTypes.COOL_OFF_NUX.COLLECTIONS,
                y = {
                    COOL_OFF_DURATION_IN_DAYS: 2,
                    VIEWS_BEFORE_COOL_OFF_IN_DAYS: 1,
                    CLICKS_BEFORE_COOL_OFF: 1,
                    MAX_VIEWS_IN_DAYS: 2,
                    COOL_OFF_START_STORAGE_KEY: c.CoolOffPeriodKeys.CATALOG,
                    metricField: f.BANNER_TYPES.SMB_COLLECTION_CREATION
                };
            class b extends d.NuxBanner {
                constructor() {
                    super(...arguments), this._refContainer = (0, m.createRef)(), this.getElement = () => this._refContainer.current
                }
                render() {
                    const {
                        onClick: e
                    } = this.props, t = new u.CoolOffNux(C, y), o = m.default.createElement("span", {
                        className: (0, g.default)(h)
                    }, p.fbt._("Get started", null, {
                        hk: "m7Zf5"
                    }));
                    return m.default.createElement(i.default, {
                        ref: this._refContainer,
                        title: p.fbt._("Create new collection", null, {
                            hk: "19zBCQ"
                        }),
                        subtitle: p.fbt._("Group items into collections to stay organized.", null, {
                            hk: "1sDPK6"
                        }),
                        actionText: o,
                        onClick: e,
                        nuxManager: t,
                        theme: "nuxBlue"
                    })
                }
                static shouldShow() {
                    return (0, a.getABPropConfigValue)("web_abprop_collections_nux_banner") && r.Conn.isSMB && function() {
                        const e = l.CatalogCollection.get((0, s.getMeUser)());
                        if (null == e || null == e.collections) return !1;
                        const t = e.collections.getCollectionModels(!0);
                        return e.productCollection.getProductModels(!0).some((e => !e.isHidden && "REJECTED" !== e.reviewStatus)) && 0 === t.length
                    }() && (0, u.shouldShowNUX)(C, y)
                }
            }
            t.default = b, b.displayName = "CollectionsBanner"
        },
        795068: (e, t, o) => {
            "use strict";
            var n = o(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.getCatalogDrawerMenu = function(e) {
                const {
                    onCartClick: t,
                    cartCount: o,
                    catalogId: n,
                    canManageCatalog: l,
                    onSendCatalog: i,
                    onOpenCollections: c,
                    onOpenMerchantDetailsForm: d,
                    onOpenSettings: u,
                    cartIconTheme: s
                } = e, f = t && null != n ? m.default.createElement(r.CartIconMenuBarItem, {
                    cartCountText: (0, a.isNumber)(o) && o > 0 ? o.toString() : void 0,
                    onClick: t,
                    catalogOwnerJid: n,
                    cartIconTheme: s
                }) : null;
                return [f, m.default.createElement(_, {
                    canManageCatalog: l,
                    onSendCatalog: i,
                    onOpenCollections: c,
                    onOpenMerchantDetailsForm: d,
                    onOpenSettings: u
                })]
            };
            var a = o(724976),
                l = o(72696),
                r = o(263755),
                i = o(664149),
                c = o(675085),
                d = o(526795),
                u = o(459912),
                s = n(o(500210)),
                f = o(459857),
                p = o(548360),
                m = function(e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || "object" != typeof e && "function" != typeof e) return {
                        default: e
                    };
                    var o = g(t);
                    if (o && o.has(e)) return o.get(e);
                    var n = {},
                        a = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var l in e)
                        if ("default" !== l && Object.prototype.hasOwnProperty.call(e, l)) {
                            var r = a ? Object.getOwnPropertyDescriptor(e, l) : null;
                            r && (r.get || r.set) ? Object.defineProperty(n, l, r) : n[l] = e[l]
                        }
                    n.default = e, o && o.set(e, n);
                    return n
                }(o(667294));

            function g(e) {
                if ("function" != typeof WeakMap) return null;
                var t = new WeakMap,
                    o = new WeakMap;
                return (g = function(e) {
                    return e ? o : t
                })(e)
            }
            const _ = (0, m.forwardRef)(((e, t) => {
                let {
                    canManageCatalog: o,
                    onSendCatalog: n,
                    onOpenCollections: a,
                    onOpenMerchantDetailsForm: r,
                    onOpenSettings: g
                } = e;
                return o ? m.default.createElement(d.MenuBarItem, {
                    ref: t,
                    testid: "menu-bar-menu",
                    icon: m.default.createElement(u.MenuIcon, null),
                    title: p.fbt._("Menu", null, {
                        hk: "H0fkV"
                    })
                }, m.default.createElement(i.Dropdown, {
                    type: i.MenuType.DropdownMenu,
                    flipOnRTL: !0,
                    key: "CatalogDetailHeader",
                    dirX: i.DirX.LEFT
                }, m.default.createElement(c.DropdownItem, {
                    testid: "mi-foward menu-item",
                    action: n
                }, p.fbt._("Forward", null, {
                    hk: "2T1QOm"
                })), a && m.default.createElement(c.DropdownItem, {
                    testid: "mi-collections menu-item",
                    action: a
                }, p.fbt._("Collections", null, {
                    hk: "1VWu7A"
                })), (0, l.canSeeECommerceComplianceIndiaCountryOriginExemptBusinessJourney)((0, f.getMeUser)()) && r && m.default.createElement(c.DropdownItem, {
                    key: "merchantDetails",
                    testid: "merchant-details",
                    action: r
                }, p.fbt._("Business details", null, {
                    hk: "m9xzp"
                })), g && m.default.createElement(c.DropdownItem, {
                    testid: "mi-settings menu-item",
                    action: g
                }, p.fbt._("Settings", null, {
                    hk: "2RmHUB"
                })))) : m.default.createElement(d.MenuBarItem, {
                    ref: t,
                    testid: "menu-bar-catalog-link",
                    icon: m.default.createElement(s.default, null),
                    title: p.fbt._("Catalog link", null, {
                        hk: "M36Dw"
                    }),
                    onClick: n
                })
            }));
            _.displayName = "MenuItems"
        },
        386067: (e, t, o) => {
            "use strict";
            var n = o(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var a = n(o(145302)),
                l = o(22323),
                r = n(o(170206)),
                i = n(o(745699)),
                c = o(23641),
                d = n(o(908081)),
                u = n(o(324093)),
                s = o(568550),
                f = o(626194),
                p = o(114850),
                m = o(21645),
                g = o(932523),
                _ = n(o(244381)),
                h = o(77548),
                C = n(o(338931)),
                y = o(548360),
                b = function(e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || "object" != typeof e && "function" != typeof e) return {
                        default: e
                    };
                    var o = E(t);
                    if (o && o.has(e)) return o.get(e);
                    var n = {},
                        a = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var l in e)
                        if ("default" !== l && Object.prototype.hasOwnProperty.call(e, l)) {
                            var r = a ? Object.getOwnPropertyDescriptor(e, l) : null;
                            r && (r.get || r.set) ? Object.defineProperty(n, l, r) : n[l] = e[l]
                        }
                    n.default = e, o && o.set(e, n);
                    return n
                }(o(667294)),
                v = n(o(156720));

            function E(e) {
                if ("function" != typeof WeakMap) return null;
                var t = new WeakMap,
                    o = new WeakMap;
                return (E = function(e) {
                    return e ? o : t
                })(e)
            }
            const k = {
                    paddingTop: "i5tg98hk",
                    paddingEnd: "iffbo4e8",
                    paddingBottom: "aiput80m",
                    paddingStart: "khscay3k",
                    lineHeight: "qg52vu03"
                },
                P = "catalog-link-anchor";

            function O(e, t) {
                const {
                    onBack: o,
                    onCancel: n,
                    catalog: E,
                    contact: O,
                    prompt: S,
                    centerDrawer: T,
                    onSend: w
                } = e, M = (0, b.useContext)(s.DrawerContext), I = () => {
                    p.ModalManager.open(b.default.createElement(a.default, {
                        catalog: E,
                        onSend: w
                    }), {
                        transition: "modal-flow"
                    }), (0, h.logShareCatalogViaWALinkClick)({
                        catalogOwnerWid: E.id,
                        catalogContext: (0, g.getProductCatalogContext)(M)
                    })
                }, A = b.default.createElement(c.DetailImage, {
                    id: O.id,
                    size: 82,
                    quality: c.DetailImageQuality.High
                });
                let j, L;
                return T && (j = "labels", L = "center-column"), b.default.createElement(d.default, {
                    ref: t,
                    key: "catalog-link-drawer",
                    theme: j
                }, b.default.createElement(f.DrawerHeader, {
                    testid: "catalog-link-title",
                    title: y.fbt._("Catalog link", null, {
                        hk: "M36Dw"
                    }),
                    onBack: o,
                    onCancel: n,
                    type: f.DRAWER_HEADER_TYPE.SMALL
                }), b.default.createElement(u.default, {
                    theme: L
                }, b.default.createElement("div", {
                    className: (0, v.default)(k)
                }, S), b.default.createElement(r.default, {
                    image: A,
                    primary: b.default.createElement(m.Name, {
                        contact: O,
                        useVerifiedName: !0
                    }),
                    theme: "identity",
                    secondary: b.default.createElement(_.default, {
                        id: P,
                        href: (0, l.createCatalogLink)(E.id.user),
                        onClick: e => {
                            e.preventDefault(), I()
                        },
                        noHandle: !0
                    })
                }), b.default.createElement(C.default, {
                    onClick: I
                }), b.default.createElement(i.default, {
                    elementId: P,
                    onClick: () => {
                        (0, h.logShareCatalogCopyLinkClick)({
                            catalogOwnerWid: E.id,
                            catalogContext: (0, g.getProductCatalogContext)(M)
                        })
                    }
                })))
            }
            var S = (0, b.forwardRef)(O);
            t.default = S
        },
        819543: (e, t, o) => {
            "use strict";
            var n = o(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function() {
                return r.apply(this, arguments)
            };
            var a = n(o(348926)),
                l = o(778945);

            function r() {
                return (r = (0, a.default)((function*(e) {
                    var t;
                    let o = l.BusinessProfileCollection.get(e);
                    if (!o || o.stale) {
                        const t = yield l.BusinessProfileCollection.update(e);
                        o = Array.isArray(t) ? t[0] : t
                    }
                    return (null === (t = o.profileOptions) || void 0 === t ? void 0 : t.cartEnabled) || !1
                }))).apply(this, arguments)
            }
        },
        324480: (e, t, o) => {
            "use strict";
            var n = o(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.getDetailDrawerMenu = function(e) {
                const {
                    contactId: t,
                    onSendProduct: o,
                    onReportProduct: n,
                    onProductLinkClick: m,
                    onProductMoreInformation: g,
                    onCartClick: _,
                    cartCount: h,
                    catalogId: C
                } = e;
                return [_ && null != C ? p.default.createElement(r.CartIconMenuBarItem, {
                    cartCountText: (0, a.isNumber)(h) && h > 0 ? h.toString() : void 0,
                    onClick: _,
                    catalogOwnerJid: C
                }) : null, p.default.createElement(d.MenuBarItem, {
                    key: "link",
                    testid: "menu-bar-product-link",
                    icon: p.default.createElement(s.default, null),
                    title: f.fbt._("Product link", null, {
                        hk: "1RIlvV"
                    }),
                    onClick: m
                }), p.default.createElement(d.MenuBarItem, {
                    key: "dropdown",
                    testid: "menu-bar-menu",
                    icon: p.default.createElement(u.MenuIcon, null),
                    title: f.fbt._("Menu", null, {
                        hk: "H0fkV"
                    })
                }, p.default.createElement(i.Dropdown, {
                    type: i.MenuType.DropdownMenu,
                    flipOnRTL: !0,
                    key: "ProductDetailHeader",
                    dirX: i.DirX.LEFT
                }, p.default.createElement(c.DropdownItem, {
                    testid: "mi-send menu-item",
                    action: o
                }, f.fbt._("Send product", null, {
                    hk: "1wkzue"
                })), (0, l.canSeeECommerceComplianceIndiaSoftEnforcement)(t) && p.default.createElement(c.DropdownItem, {
                    testid: "mi-send menu-item",
                    action: g
                }, f.fbt._("More information", null, {
                    hk: "2JHvi1"
                })), p.default.createElement(c.DropdownItem, {
                    testid: "mi-report menu-item",
                    action: n
                }, f.fbt._("Report product", null, {
                    hk: "1jgCyX"
                }))))]
            };
            var a = o(724976),
                l = o(72696),
                r = o(263755),
                i = o(664149),
                c = o(675085),
                d = o(526795),
                u = o(459912),
                s = n(o(500210)),
                f = o(548360),
                p = n(o(667294))
        },
        227604: (e, t, o) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.parseErrorState = function(e, t) {
                if (e instanceof a.Unmount);
                else {
                    if (!(e instanceof n.ServerStatusCodeError)) throw t("ERROR"), e;
                    "not_found" === e.status || 404 === e.status ? t("NOT_FOUND") : (t("ERROR"), __LOG__(3)
                        `parseErrorState:Failed to fetch from server`)
                }
            };
            var n = o(984330),
                a = function(e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || "object" != typeof e && "function" != typeof e) return {
                        default: e
                    };
                    var o = l(t);
                    if (o && o.has(e)) return o.get(e);
                    var n = {},
                        a = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var r in e)
                        if ("default" !== r && Object.prototype.hasOwnProperty.call(e, r)) {
                            var i = a ? Object.getOwnPropertyDescriptor(e, r) : null;
                            i && (i.get || i.set) ? Object.defineProperty(n, r, i) : n[r] = e[r]
                        }
                    n.default = e, o && o.set(e, n);
                    return n
                }(o(288057));

            function l(e) {
                if ("function" != typeof WeakMap) return null;
                var t = new WeakMap,
                    o = new WeakMap;
                return (l = function(e) {
                    return e ? o : t
                })(e)
            }
        },
        568414: (e, t, o) => {
            "use strict";
            var n = o(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = p;
            var a = o(956113),
                l = o(180519),
                r = n(o(556869)),
                i = o(548360),
                c = n(o(667294)),
                d = n(o(156720));
            const u = {
                    position: "lhggkp7q",
                    zIndex: "nbczt5ty",
                    boxSizing: "cm280p3y",
                    display: "p357zi0d",
                    alignItems: "gndfcl4n",
                    justifyContent: "ac2vgrno",
                    width: "ln8gz9je",
                    paddingTop: "fbgy3m38",
                    paddingEnd: "ft2m32mm",
                    paddingBottom: "oq31bsqd",
                    paddingStart: "nu34rnf1",
                    backgroundColor: "ihvf49ua",
                    boxShadow: "g07l9dru",
                    opacity: "bs7a17vp",
                    transitionDelay: "kji9i36c",
                    transitionTimingFunction: "bkifpc9x"
                },
                s = {
                    marginTop: "tt8xd2xn",
                    marginEnd: "spjzgwxb",
                    marginBottom: "mpdn4nr2",
                    marginStart: "a3oefunm",
                    fontWeight: "hnx8ox4h"
                },
                f = {
                    color: "evzurl1e"
                };

            function p(e) {
                let {
                    fetchState: t
                } = e;
                switch (t) {
                    case "NONE":
                    case "SUCCESS":
                        return null;
                    case "PENDING":
                        return c.default.createElement("div", {
                            className: (0, d.default)(u)
                        }, c.default.createElement(a.Spinner, {
                            size: 14,
                            color: "highlight"
                        }), c.default.createElement(l.TextSpan, {
                            className: (0, d.default)(s, f),
                            theme: "small"
                        }, i.fbt._("Waiting for network", null, {
                            hk: "3I2DtN"
                        })));
                    case "NOT_FOUND":
                    case "ERROR":
                        return c.default.createElement("div", {
                            className: (0, d.default)(u)
                        }, c.default.createElement(l.TextSpan, {
                            className: (0, d.default)(s),
                            theme: "small",
                            color: "danger"
                        }, "NOT_FOUND" === t ? i.fbt._("This product or service has been removed", null, {
                            hk: "3mE1ld"
                        }) : i.fbt._("Something went wrong", null, {
                            hk: "7C9hw"
                        })));
                    default:
                        throw (0, r.default)(`invalid fetchState ${t}`)
                }
            }
            p.displayName = "FetchStateTopBar"
        },
        500210: (e, t, o) => {
            "use strict";
            var n = o(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = i;
            var a = o(659356),
                l = n(o(667294));
            n(o(156720));
            const r = {
                linkIcon: {
                    color: "svlsagor"
                },
                inheritColor: {
                    color: "gtscxtjd"
                }
            };

            function i(e) {
                let {
                    theme: t
                } = e;
                return l.default.createElement(a.LinkIcon, {
                    xstyle: [r.linkIcon, "inherit-color" === t && r.inheritColor]
                })
            }
            i.displayName = "LinkIcon"
        },
        244381: (e, t, o) => {
            "use strict";
            var n = o(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = d;
            var a = o(306703),
                l = n(o(667294)),
                r = n(o(156720));
            const i = {
                    wordWrap: "b6f1x6w7",
                    whiteSpace: "hmy10g0s"
                },
                c = {
                    color: "e1vllz7m"
                };

            function d(e) {
                let {
                    href: t,
                    id: o,
                    noHandle: n,
                    onClick: d
                } = e;
                return l.default.createElement("span", {
                    className: (0, r.default)(i)
                }, l.default.createElement(a.SelectableLink, {
                    id: o,
                    href: t,
                    className: (0, r.default)(c),
                    selectable: !0,
                    onClick: d,
                    "data-nohandle": n
                }, t))
            }
            d.displayName = "LinkText"
        },
        525897: (e, t, o) => {
            "use strict";
            var n = o(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = y;
            var a = o(568550),
                l = o(900316),
                r = o(512938),
                i = n(o(964223)),
                c = o(390185),
                d = o(491606),
                u = o(899841),
                s = o(932523),
                f = n(o(698690)),
                p = o(77548),
                m = o(163139),
                g = function(e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || "object" != typeof e && "function" != typeof e) return {
                        default: e
                    };
                    var o = h(t);
                    if (o && o.has(e)) return o.get(e);
                    var n = {},
                        a = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var l in e)
                        if ("default" !== l && Object.prototype.hasOwnProperty.call(e, l)) {
                            var r = a ? Object.getOwnPropertyDescriptor(e, l) : null;
                            r && (r.get || r.set) ? Object.defineProperty(n, l, r) : n[l] = e[l]
                        }
                    n.default = e, o && o.set(e, n);
                    return n
                }(o(667294)),
                _ = o(655241);

            function h(e) {
                if ("function" != typeof WeakMap) return null;
                var t = new WeakMap,
                    o = new WeakMap;
                return (h = function(e) {
                    return e ? o : t
                })(e)
            }
            const C = (0, r.FlatListFactory)();

            function y(e) {
                const {
                    onProductDetail: t,
                    onProductShare: o,
                    onCartOpen: n,
                    shareLinks: r,
                    canManageCatalog: h
                } = e, [y, b] = (0, g.useState)(void 0), v = (0, _.useModelValues)(e.catalog, ["productCollection", "afterCursor", "id", "index"]), E = e => {
                    o && o(e)
                };
                return v.productCollection && v.productCollection.getProductModels(e.canManageCatalog).length ? g.default.createElement(i.default, {
                    flatListControllers: [e.flatListController]
                }, g.default.createElement(C, {
                    flatListController: e.flatListController,
                    direction: "vertical",
                    forceConsistentRenderCount: !1,
                    data: (() => {
                        const e = void 0 !== n;
                        return v.productCollection.getProductModels(h).map((t => ({
                            itemKey: `${t.id.toString()}_${e.toString()}`,
                            product: t
                        })))
                    })(),
                    renderItem: e => {
                        let {
                            product: o
                        } = e;
                        return g.default.createElement(a.DrawerContext.Consumer, null, (e => {
                            const a = (0, s.getProductCatalogContext)(e);
                            return g.default.createElement(f.default, {
                                product: o,
                                onCartOpen: n,
                                onClick: () => ((e, o) => ((0, p.logCatalogListDetailClick)({
                                    product: (0, m.unproxy)(e),
                                    catalogContext: o
                                }), b(e.id.toString()), t(e)))(o, a),
                                onProductShare: r ? E : null,
                                onProductDelete: e => ((e, t) => {
                                    (0, d.handleProductDelete)(v, e, t, "Catalog").then((() => {
                                        e.id === y && (l.DrawerManager.closeDrawerMid(), b(void 0))
                                    }))
                                })(e, a),
                                onProductHideShow: e => ((e, t) => {
                                    (0, d.handleProductVisibilityChange)(v, e, t, "Catalog")
                                })(e, a),
                                canManageCatalog: h
                            })
                        }))
                    },
                    defaultItemHeight: u.PRODUCT_LIST_ITEM_HEIGHT,
                    keyOrder: c.KeyOrder.INVERSE
                })) : null
            }
            y.displayName = "ProductCatalogList"
        },
        614058: (e, t, o) => {
            "use strict";
            var n = o(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var a = o(898817),
                l = o(122583),
                r = o(15842),
                i = o(632157),
                c = o(984330),
                d = o(72696),
                u = o(739071),
                s = o(778945),
                f = o(542358),
                p = o(290895),
                m = o(713464),
                g = o(698867),
                _ = o(780549),
                h = o(103440),
                C = o(263079),
                y = n(o(908081)),
                b = n(o(324093)),
                v = o(568550),
                E = o(626194),
                k = n(o(395767)),
                P = o(114850),
                O = n(o(213393)),
                S = n(o(819543)),
                T = o(932523),
                w = o(324480),
                M = o(77548),
                I = n(o(791724)),
                A = o(366179),
                j = n(o(557575)),
                L = n(o(237375)),
                D = o(530485),
                x = o(694630),
                N = o(956113),
                R = o(163139),
                W = o(180519),
                B = o(459857),
                H = o(887222),
                F = o(548360),
                z = function(e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || "object" != typeof e && "function" != typeof e) return {
                        default: e
                    };
                    var o = X(t);
                    if (o && o.has(e)) return o.get(e);
                    var n = {},
                        a = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var l in e)
                        if ("default" !== l && Object.prototype.hasOwnProperty.call(e, l)) {
                            var r = a ? Object.getOwnPropertyDescriptor(e, l) : null;
                            r && (r.get || r.set) ? Object.defineProperty(n, l, r) : n[l] = e[l]
                        }
                    n.default = e, o && o.set(e, n);
                    return n
                }(o(667294)),
                U = n(o(156720)),
                q = n(o(969651)),
                V = n(o(637660)),
                G = o(808446),
                Q = o(655241),
                Y = n(o(895851));

            function X(e) {
                if ("function" != typeof WeakMap) return null;
                var t = new WeakMap,
                    o = new WeakMap;
                return (X = function(e) {
                    return e ? o : t
                })(e)
            }
            const K = {
                availabilityBanner: {
                    display: "p357zi0d",
                    paddingTop: "a71rq12o",
                    paddingEnd: "bcymb0na",
                    paddingBottom: "pcbmd69e",
                    paddingStart: "e8k79tju",
                    marginBottom: "mpdn4nr2",
                    lineHeight: "r5qsrrlp",
                    backgroundColor: "ronsgs3n"
                },
                text: {
                    marginTop: "tt8xd2xn",
                    marginEnd: "spjzgwxb",
                    marginBottom: "mpdn4nr2",
                    marginStart: "a3oefunm",
                    fontWeight: "hnx8ox4h"
                },
                loadingText: {
                    color: "evzurl1e"
                },
                loadingContainer: {
                    position: "lhggkp7q",
                    zIndex: "nbczt5ty",
                    boxSizing: "cm280p3y",
                    display: "p357zi0d",
                    alignItems: "gndfcl4n",
                    justifyContent: "ac2vgrno",
                    width: "ln8gz9je",
                    paddingTop: "fbgy3m38",
                    paddingEnd: "ft2m32mm",
                    paddingBottom: "oq31bsqd",
                    paddingStart: "nu34rnf1",
                    background: "kqm7f4gm",
                    boxShadow: "g07l9dru",
                    opacity: "bs7a17vp",
                    transitionProperty: "fx1ldmn8",
                    transitionDuration: "grkbsjmy",
                    transitionTimingFunction: "bkifpc9x"
                },
                shiftUp: {
                    position: "lhggkp7q",
                    zIndex: "pcpjcif5",
                    display: "p357zi0d",
                    alignItems: "gndfcl4n",
                    justifyContent: "ac2vgrno",
                    width: "ln8gz9je",
                    paddingTop: "fbgy3m38",
                    paddingEnd: "ft2m32mm",
                    paddingBottom: "oq31bsqd",
                    paddingStart: "nu34rnf1",
                    background: "kqm7f4gm",
                    boxShadow: "g07l9dru",
                    transitionProperty: "fx1ldmn8",
                    transitionDuration: "pa888v5w",
                    transitionTimingFunction: "bkifpc9x",
                    transform: "sihoqmp4"
                },
                body: {
                    flex: "kk3akd72",
                    paddingBottom: "s9fl9ege"
                }
            };

            function J(e) {
                let t, {
                    isAvailable: o,
                    productCatalogFetchState: n,
                    productFetchState: a
                } = e;
                t = "ERROR" === a ? z.default.createElement(W.TextSpan, {
                    className: (0, U.default)(K.text),
                    theme: "small",
                    color: "danger"
                }, F.fbt._("Something went wrong", null, {
                    hk: "7C9hw"
                })) : o ? [z.default.createElement(N.Spinner, {
                    size: 14,
                    color: "highlight",
                    key: "DetailDrawer-loadingBar-spinner"
                }), z.default.createElement(W.TextSpan, {
                    className: (0, U.default)(K.text, K.loadingText),
                    theme: "small",
                    key: "DetailDrawer-loadingBar-msg"
                }, F.fbt._("Waiting for network", null, {
                    hk: "3I2DtN"
                }))] : z.default.createElement(W.TextSpan, {
                    className: (0, U.default)(K.text),
                    theme: "small",
                    color: "danger"
                }, F.fbt._("This product or service has been removed", null, {
                    hk: "3mE1ld"
                }));
                const l = "PENDING" === a || "PENDING" === n || !o;
                return z.default.createElement("div", {
                    className: (0, U.default)(l && K.loadingContainer, !l && K.shiftUp)
                }, t)
            }

            function Z(e) {
                let {
                    handleBack: t,
                    menu: o
                } = e;
                return z.default.createElement(E.DrawerHeader, {
                    title: F.fbt._("Details", null, {
                        hk: "1hLRT1"
                    }),
                    onBack: t,
                    type: E.DRAWER_HEADER_TYPE.SMALL,
                    menu: o
                })
            }

            function $(e, t) {
                var o;
                const {
                    collectionId: n,
                    onCartClick: E,
                    onProductLinkClick: N,
                    onProductMoreInformation: W,
                    onBack: X,
                    onProductCatalog: $,
                    onProductDetail: ee,
                    refreshCarousel: te,
                    chat: oe,
                    isPushed: ne = !0
                } = e, ae = (0, q.default)(), le = (0, Y.default)(), re = (0, z.useContext)(v.DrawerContext), ie = (0, Q.useModelValues)(e.product, ["id", "catalogWid", "productImageCollection", "fetchedFromServer", "name", "availability", "reviewStatus"]), [ce, de] = (0, z.useState)(null), [ue, se] = (0, z.useState)(!1), [fe, pe] = (0, z.useState)(null), [me, ge] = (0, z.useState)("NONE"), [_e, he] = (0, z.useState)("NONE"), Ce = (0, V.default)((() => p.CartCollection.findCart(ie.catalogWid.toString())));
                (0, G.useListener)(Ce.current, "change:cartItemCollection", ae);
                const ye = () => {
                        if (X) return X()
                    },
                    be = () => {
                        const e = ie.catalogWid,
                            t = ie.id.toString();
                        return m.CatalogCollection.findProduct({
                            catalogWid: e,
                            productId: t,
                            productMsgMediaData: (0, R.unproxy)(ie).productMsgMediaData,
                            canLogQpl: ne
                        })
                    },
                    ve = () => {
                        const e = ie.catalogWid,
                            t = be(),
                            o = s.BusinessProfileCollection.find(e);
                        let n = !0;
                        return Promise.all([o, t]).then((e => {
                            let [t] = e;
                            if (le.aborted) throw new a.AbortError;
                            return n = !1, ne && (0, H.qplEndProductView)(r.QuickLogActionType.SUCCESS), de(t), ge("SUCCESS"), t
                        })).then((e => {
                            he((t => {
                                if ("PENDING" === t) {
                                    if (!(0, f.hasCatalog)(e)) return "NONE";
                                    (() => {
                                        const e = ie.catalogWid;
                                        m.CatalogCollection.findCarouselCatalog(e).then((e => {
                                            if (le.aborted) return;
                                            const t = Array.isArray(e) ? e[0] : e;
                                            pe(t || null), he(t ? "SUCCESS" : "NONE")
                                        })).catch((0, l.filteredCatch)(c.ServerStatusCodeError, (e => {
                                            "not_found" === e.status || 404 === e.status ? (pe(null), he("NOT_FOUND")) : (pe(null), he("ERROR"), __LOG__(3)
                                                `Failed to fetch product catalog from server`)
                                        })))
                                    })()
                                }
                                return t
                            }))
                        })).catch((0, a.catchAbort)((() => {}))).catch((0, l.filteredCatch)(c.E404, (() => {
                            ye(), P.ModalManager.open(z.default.createElement(h.ConfirmPopup, {
                                onOK: () => {
                                    P.ModalManager.close()
                                },
                                okText: (0, k.default)("OK")
                            }, F.fbt._("This product or service has been removed", null, {
                                hk: "3mE1ld"
                            }))), ge("NOT_FOUND"), n = !1, (0, H.qplDropProductView)()
                        }))).catch((0, l.filteredCatch)(c.ServerStatusCodeError, (() => {
                            ge("ERROR"), __LOG__(3)
                            `Failed to fetch product from server`
                        }))).finally((() => {
                            ne && n && (0, H.qplEndProductView)(r.QuickLogActionType.FAIL)
                        }))
                    };
                (0, z.useEffect)((() => {
                    if ((0, d.commerceThreadsLoggingEnabled)() && oe && (0, g.handleActivitiesForChatThreadLogging)([{
                            activityType: "pdpViews",
                            ts: (0, i.unixTime)(),
                            chatId: oe.id
                        }]), te) {
                        const e = m.CatalogCollection.get(ie.catalogWid);
                        (null == e ? void 0 : e.productCollection) && e.fetchedFromServer ? he("SUCCESS") : he("PENDING")
                    }
                    const e = (0, B.getMaybeMeUser)();
                    ne && (0, H.qplAnnotateProductView)(!(null == e ? void 0 : e.equals(ie.catalogWid)));
                    const t = ie.catalogWid,
                        o = ie.id.toString();
                    if (t && o) return ve(), (0, S.default)(t).then((e => {
                        se(e), (0, M.logProductDetailView)({
                            product: (0, R.unproxy)(ie),
                            catalogContext: (0, T.getProductCatalogContext)(re),
                            cartToggle: e,
                            collectionId: n
                        })
                    })), () => {
                        const e = ie.catalogWid,
                            t = ie.id.toString();
                        if (!e || !t) return;
                        const o = m.CatalogCollection.get(e),
                            n = o && o.msgProductCollection.get(t);
                        (null == n ? void 0 : n.fetchedFromServer) && o && o.msgProductCollection.remove(n)
                    };
                    (0, H.qplDropProductView)()
                }), []);
                const Ee = () => {
                        (0, H.qplStartCartView)("Product"), null == E || E(ie.catalogWid.toString())
                    },
                    ke = () => {
                        P.ModalManager.open(z.default.createElement(L.default, {
                            product: ie,
                            sessionId: (0, T.getProductCatalogSessionId)(re)
                        }))
                    },
                    Pe = () => {
                        (0, M.logProductShareLinkClick)({
                            product: ie,
                            catalogContext: (0, T.getProductCatalogContext)(re)
                        }), N(ie)
                    },
                    Oe = function(e) {
                        let t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
                        (0, d.commerceThreadsLoggingEnabled)() && oe && (0, g.handleActivitiesForChatThreadLogging)([{
                            activityType: e,
                            ts: (0, i.unixTime)(),
                            chatId: oe.id,
                            boolValue: t
                        }])
                    },
                    Se = () => {
                        const e = ie,
                            {
                                catalogWid: t
                            } = e,
                            o = m.CatalogCollection.get(t);
                        if (!o) return;
                        const n = o.productCollection.get(e.id);
                        _.Cmd.attachProduct({
                            product: n ? (0, R.unproxy)(n) : (0, R.unproxy)(e)
                        })
                    },
                    Te = () => {
                        W(ie)
                    },
                    we = () => "ERROR" !== me && "NOT_FOUND" !== me && !(() => {
                        const {
                            reviewStatus: e
                        } = ie;
                        return e === D.PRODUCT_REVIEW_STATUS.REJECTED
                    })(),
                    Me = we(),
                    Ie = (0, f.hasCatalog)(ce),
                    Ae = () => {
                        be().then((() => {
                            const e = m.CatalogCollection.get(ie.catalogWid);
                            e && (e.stale = !0)
                        }))
                    };
                let je;
                return we() && (je = (0, w.getDetailDrawerMenu)({
                    onSendProduct: Se,
                    onReportProduct: ke,
                    onProductLinkClick: Pe,
                    onProductMoreInformation: Te,
                    onCartClick: ue ? Ee : void 0,
                    cartCount: Ce.current.itemCount,
                    catalogId: ie.catalogWid.toString(),
                    contactId: null == oe ? void 0 : oe.contact.id
                })), z.default.createElement(y.default, {
                    ref: t,
                    onDrop: ye,
                    theme: "striped",
                    key: "product-details-drawer"
                }, z.default.createElement(Z, {
                    handleBack: ye,
                    menu: je
                }), z.default.createElement(b.default, null, z.default.createElement("div", {
                    className: (0, U.default)(K.body)
                }, z.default.createElement(J, {
                    productFetchState: me,
                    productCatalogFetchState: _e,
                    isAvailable: Me
                }), z.default.createElement(j.default, {
                    product: ie,
                    isAvailable: Me,
                    fetching: "PENDING" === me
                }), x.PRODUCT_AVAILABILITY_UNAVAILABLE_VALUES.includes(ie.availability) ? z.default.createElement("div", {
                    className: (0, U.default)(K.availabilityBanner)
                }, ie.availability === x.ProductAvailability.OUT_OF_STOCK ? F.fbt._("This item is out of stock.", null, {
                    hk: "4gOwiz"
                }) : null, ie.availability === x.ProductAvailability.AVAILABLE_FOR_ANOTHER_POSTCODE && (0, C.enablePostcodeInCatalog)() ? z.default.createElement(A.ProductPostcodeChangeBanner, {
                    catalogWid: ie.catalogWid,
                    postcodeChangeSuccess: Ae
                }) : null) : null, z.default.createElement(I.default, {
                    product: ie,
                    collectionId: n,
                    onSendChat: () => {
                        const e = m.CatalogCollection.get(ie.catalogWid);
                        (0, u.sendProductToChat)(ie, e, (0, T.getProductCatalogContext)(re)), Oe("isCtaOnPdpClicked"), (0, M.logProductMessageBusinessClick)(ie, (0, T.getProductCatalogContext)(re))
                    },
                    onAddToCart: () => {
                        Oe("isCartAddClicked")
                    },
                    isAvailable: Me,
                    hideRetailerID: null === (o = e.chat) || void 0 === o ? void 0 : o.contact.isEnterprise
                }), Ie && fe ? z.default.createElement(O.default, {
                    catalog: fe,
                    onProductCatalog: () => {
                        $ && $(ie.catalogWid, (0, T.getProductCatalogContext)(re))
                    },
                    onProductDetail: e => {
                        if ((0, H.qplStartProductView)("Product"), ee) return ee(e)
                    },
                    filterProductId: ie.id.toString(),
                    title: F.fbt._("More", null, {
                        hk: "2A3GqV"
                    }),
                    animation: !1
                }) : null)))
            }
            J.displayName = "TopBar", Z.displayName = "DetailsDrawerHeader";
            var ee = (0, z.forwardRef)($);
            t.default = ee
        },
        791724: (e, t, o) => {
            "use strict";
            var n = o(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = B;
            var a = n(o(327820)),
                l = o(72696),
                r = n(o(539925)),
                i = n(o(692629)),
                c = n(o(894138)),
                d = n(o(846870)),
                u = o(568550),
                s = n(o(969358)),
                f = o(305521),
                p = o(753233),
                m = L(o(675886)),
                g = L(o(446303)),
                _ = o(758121),
                h = n(o(819543)),
                C = o(932523),
                y = o(77548),
                b = n(o(269261)),
                v = o(530485),
                E = o(694630),
                k = o(316348),
                P = o(555622),
                O = o(163139),
                S = o(180519),
                T = o(548360),
                w = L(o(667294)),
                M = n(o(156720)),
                I = n(o(478636)),
                A = o(655241);

            function j(e) {
                if ("function" != typeof WeakMap) return null;
                var t = new WeakMap,
                    o = new WeakMap;
                return (j = function(e) {
                    return e ? o : t
                })(e)
            }

            function L(e, t) {
                if (!t && e && e.__esModule) return e;
                if (null === e || "object" != typeof e && "function" != typeof e) return {
                    default: e
                };
                var o = j(t);
                if (o && o.has(e)) return o.get(e);
                var n = {},
                    a = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for (var l in e)
                    if ("default" !== l && Object.prototype.hasOwnProperty.call(e, l)) {
                        var r = a ? Object.getOwnPropertyDescriptor(e, l) : null;
                        r && (r.get || r.set) ? Object.defineProperty(n, l, r) : n[l] = e[l]
                    }
                return n.default = e, o && o.set(e, n), n
            }
            const D = {
                addToCartIconDisabled: {
                    color: "baku5n5n",
                    ":hover": {
                        color: "k3zau70k"
                    }
                },
                addToCartIcon: {
                    color: "o2v2jkg7",
                    ":hover": {
                        color: "oehg7oif"
                    }
                },
                addToCartBtnHoverIcon: {
                    color: "jk96mlgm",
                    ":hover": {
                        color: "dul83ws3"
                    }
                },
                buttonContainer: {
                    display: "p357zi0d",
                    marginBottom: "or9x5nie",
                    textAlign: "qfejxiq4"
                },
                addToCartContainer: {
                    display: "p357zi0d",
                    alignItems: "gndfcl4n",
                    justifyItems: "g3ty6e9x"
                },
                addToCartContainerWithIcon: {
                    marginTop: "kv6wexeh",
                    marginEnd: "jnwc1y2a",
                    marginBottom: "rkx9gk34",
                    marginStart: "svoq16ka"
                },
                more: {
                    color: "o0rubyzf"
                },
                description: {
                    marginBottom: "du8bjn1j",
                    overflowX: "gfz4du6o",
                    overflowY: "r7fjleex",
                    wordWrap: "b6f1x6w7"
                },
                name: {
                    marginBottom: "t4zgqcuo",
                    fontWeight: "hnx8ox4h",
                    wordWrap: "b6f1x6w7"
                },
                price: {
                    marginBottom: "t4zgqcuo"
                },
                quantityControls: {
                    justifyContent: "ac2vgrno",
                    marginTop: "kmqqq083",
                    marginBottom: "mpdn4nr2"
                }
            };

            function x(e) {
                let {
                    isAvailable: t,
                    onSendChat: o,
                    product: n
                } = e;
                if (!o || !n.fetchedFromServer || !t || n.reviewStatus !== v.PRODUCT_REVIEW_STATUS.APPROVED) return null;
                const a = T.fbt._("Message Business", null, {
                    hk: "3jgAJS"
                });
                return w.default.createElement("div", {
                    className: (0, M.default)(D.buttonContainer),
                    title: a
                }, w.default.createElement(i.default, {
                    testid: "product-message-business-btn",
                    onClick: o,
                    type: "secondary",
                    stretch: !0
                }, a))
            }

            function N(e) {
                let {
                    cartEnabled: t,
                    collectionId: o,
                    context: n,
                    isAvailable: d,
                    onClick: u,
                    product: s
                } = e;
                const {
                    isHovered: f,
                    onMouseEnter: p,
                    onMouseLeave: m
                } = (0, I.default)();
                if (!t || !s.fetchedFromServer || !d || s.reviewStatus !== v.PRODUCT_REVIEW_STATUS.APPROVED) return null;
                const g = (0, l.isQuantityControlsFeatureEnabled)(),
                    _ = T.fbt._("Add to cart", null, {
                        hk: "2qbS08"
                    }),
                    h = E.PRODUCT_AVAILABILITY_UNAVAILABLE_VALUES.includes(s.availability);
                let C = null;
                C = h ? D.addToCartIconDisabled : f ? D.addToCartBtnHoverIcon : D.addToCartIcon;
                const y = (0, r.default)(s.id, s.catalogWid),
                    b = g ? null : w.default.createElement(a.default, {
                        colorXStyle: C
                    }),
                    k = g && y > 0 ? w.default.createElement(c.default, {
                        product: s,
                        context: n,
                        collectionId: o || ""
                    }) : w.default.createElement(i.default, {
                        testid: "add-to-cart-btn",
                        onClick: u,
                        type: "secondary",
                        disabled: h,
                        stretch: !0
                    }, w.default.createElement("span", {
                        className: (0, M.default)(D.addToCartContainer, b && D.addToCartContainerWithIcon)
                    }, b, _));
                return w.default.createElement("div", {
                    className: (0, M.default)(D.buttonContainer, g && D.quantityControls),
                    title: _,
                    onMouseEnter: p,
                    onMouseLeave: m
                }, k)
            }

            function R(e) {
                let {
                    isAvailable: t,
                    onClick: o,
                    product: n
                } = e;
                const {
                    url: a
                } = n;
                if (!n.fetchedFromServer || !a || !t) return null;
                const l = m.TrustedGroupDesc({
                    links: g.findLinks(a)
                });
                return w.default.createElement("div", null, w.default.createElement(f.EmojiText, {
                    selectable: !0,
                    formatters: l,
                    text: a,
                    onClick: e => o(e, a)
                }))
            }

            function W(e) {
                let {
                    hideRetailerID: t,
                    isAvailable: o,
                    isDescExpanded: n,
                    onClickUrl: a,
                    onReadMore: l,
                    product: r
                } = e;
                if (!r.description && !r.url && !r.retailerId) return null;
                const i = !!r.description && r.description.length > d.default.GROUP_DESCRIPTION_INFO_PANEL_TRUNC_LENGTH;
                let c;
                return r.description && (c = w.default.createElement("div", null, w.default.createElement(f.EmojiText, {
                    selectable: !0,
                    multiline: !0,
                    text: r.description,
                    textLimit: n ? 1 / 0 : d.default.GROUP_DESCRIPTION_INFO_PANEL_TRUNC_LENGTH
                }), i && !n ? w.default.createElement("span", {
                    className: (0, M.default)(D.more),
                    role: "button",
                    onClick: l
                }, " ", T.fbt._("Read more", null, {
                    hk: "2DvSvh"
                })) : null)), w.default.createElement(S.TextDiv, {
                    theme: "plain",
                    className: (0, M.default)(D.description)
                }, c, w.default.createElement(R, {
                    isAvailable: o,
                    product: r,
                    onClick: a
                }), r.retailerId && !t ? w.default.createElement("div", null, w.default.createElement(f.EmojiText, {
                    text: r.retailerId,
                    selectable: !0,
                    direction: "inherit"
                })) : null)
            }

            function B(e) {
                const {
                    collectionId: t,
                    onSendChat: o,
                    onAddToCart: n,
                    isAvailable: a
                } = e, l = (0, w.useContext)(u.DrawerContext), r = (0, A.useModelValues)(e.product, ["name", "url", "description", "availability", "currency", "priceAmount1000", "salePriceAmount1000", "salePriceStartDate", "salePriceEndDate", "fetchedFromServer", "retailerId", "catalogWid", "productImageCollection", "imageHash", "reviewStatus", "imageCdnUrl", "id", "maxAvailable"]), [i, c] = (0, w.useState)(!1), [d, m] = (0, w.useState)(!1);
                return (0, w.useEffect)((() => {
                    (0, h.default)(r.catalogWid).then((e => {
                        m(e)
                    }))
                }), []), w.default.createElement(s.default, {
                    theme: "padding-product",
                    animation: !1
                }, w.default.createElement(S.TextDiv, {
                    theme: "title",
                    className: (0, M.default)(D.name)
                }, w.default.createElement(f.EmojiText, {
                    text: r.name,
                    selectable: !0
                })), null != r.priceAmount1000 ? w.default.createElement(S.TextDiv, {
                    className: (0, M.default)(D.price),
                    color: "dark",
                    theme: "plain"
                }, w.default.createElement(b.default, {
                    product: r,
                    selectable: !0,
                    direction: "inherit"
                })) : null, w.default.createElement(W, {
                    product: r,
                    isAvailable: a,
                    isDescExpanded: i,
                    hideRetailerID: e.hideRetailerID,
                    onReadMore: () => {
                        c(!0)
                    },
                    onClickUrl: (e, t) => {
                        e.stopPropagation(), (0, y.logDetailLinkClick)({
                            product: (0, O.unproxy)(r),
                            catalogContext: (0, C.getProductCatalogContext)(l)
                        });
                        const o = t && g.findLink(t);
                        o && (0, p.openExternalLink)(o.url)
                    }
                }), w.default.createElement(x, {
                    onSendChat: () => {
                        null == o || o()
                    },
                    isAvailable: a,
                    product: r
                }), w.default.createElement(N, {
                    collectionId: t,
                    cartEnabled: d,
                    isAvailable: a,
                    product: r,
                    onClick: e => {
                        P.QPL.markerStart(k.QuickLogMarkerId.WHATSAPP_CART_ADD, {
                            annotations: {
                                string: {
                                    EntryPoint: "Product"
                                }
                            }
                        }), (0, _.addToCart)(r, (0, C.getProductCatalogContext)(l), t), null == n || n(), e.stopPropagation()
                    },
                    context: l
                }))
            }
            x.displayName = "MessageBusinessButton", N.displayName = "AddToCartButton", R.displayName = "Link", W.displayName = "Description", B.displayName = "ProductDetailsInfo"
        },
        632289: (e, t, o) => {
            "use strict";
            var n = o(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var a = n(o(534885)),
                l = n(o(688023)),
                r = o(22323),
                i = n(o(170206)),
                c = o(780549),
                d = n(o(745699)),
                u = n(o(908081)),
                s = n(o(324093)),
                f = o(568550),
                p = o(626194),
                m = o(305521),
                g = o(114850),
                _ = o(932523),
                h = n(o(244381)),
                C = o(77548),
                y = o(493770),
                b = n(o(338931)),
                v = o(163139),
                E = o(676345),
                k = o(548360),
                P = function(e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || "object" != typeof e && "function" != typeof e) return {
                        default: e
                    };
                    var o = S(t);
                    if (o && o.has(e)) return o.get(e);
                    var n = {},
                        a = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var l in e)
                        if ("default" !== l && Object.prototype.hasOwnProperty.call(e, l)) {
                            var r = a ? Object.getOwnPropertyDescriptor(e, l) : null;
                            r && (r.get || r.set) ? Object.defineProperty(n, l, r) : n[l] = e[l]
                        }
                    n.default = e, o && o.set(e, n);
                    return n
                }(o(667294)),
                O = n(o(156720));

            function S(e) {
                if ("function" != typeof WeakMap) return null;
                var t = new WeakMap,
                    o = new WeakMap;
                return (S = function(e) {
                    return e ? o : t
                })(e)
            }
            const T = {
                    prompt: {
                        lineHeight: "qg52vu03"
                    },
                    productImageContainer: {
                        width: "pk8kl0dy",
                        height: "e0pgnxzj"
                    },
                    productThumbContainer: {
                        position: "pug16e72",
                        backgroundColor: "sjyhwr5o"
                    }
                },
                w = "product-link-anchor";

            function M(e) {
                const t = e.getProductImageCollectionHead();
                return t ? P.default.createElement(y.ProductThumb, {
                    xstyle: T.productImageContainer,
                    mediaData: t.mediaData
                }) : P.default.createElement(y.ProductThumbPlaceholder, {
                    xstyle: T.productThumbContainer
                })
            }

            function I(e, t) {
                const {
                    onBack: o,
                    onCancel: n,
                    product: y,
                    prompt: S,
                    centerDrawer: I,
                    sendProductMsg: A,
                    onSend: j
                } = e, L = (0, P.useContext)(f.DrawerContext), D = () => {
                    g.ModalManager.open(P.default.createElement(l.default, {
                        product: y,
                        onSend: j
                    }), {
                        transition: "modal-flow"
                    }), (0, C.logShareProductViaWALinkClick)({
                        product: y,
                        catalogContext: (0, _.getProductCatalogContext)(L)
                    })
                }, x = () => {
                    c.Cmd.attachProduct({
                        product: (0, v.unproxy)(y),
                        onSend: j
                    })
                }, N = (0, r.createProductLink)(y.catalogWid.user, y.id.toString());
                let R, W, B;
                return I && (R = "labels", W = "center-column"), B = null != A ? P.default.createElement(a.default, {
                    onClick: x
                }) : P.default.createElement(b.default, {
                    onClick: D
                }), P.default.createElement(u.default, {
                    ref: t,
                    key: "product-link-drawer",
                    theme: R
                }, P.default.createElement(p.DrawerHeader, {
                    testid: "product-link-title",
                    title: k.fbt._("Product link", null, {
                        hk: "1RIlvV"
                    }),
                    onBack: o,
                    onCancel: n,
                    type: p.DRAWER_HEADER_TYPE.SMALL,
                    focusBackOrCancel: !0
                }), P.default.createElement(s.default, {
                    theme: W
                }, P.default.createElement("div", {
                    className: (0, O.default)(T.prompt, E.uiPadding.horiz20, E.uiPadding.bottom10)
                }, " ", S, " "), P.default.createElement(i.default, {
                    image: M(y),
                    primary: P.default.createElement(m.EmojiText, {
                        text: y.name,
                        direction: "auto"
                    }),
                    theme: "identity",
                    secondary: P.default.createElement(h.default, {
                        id: w,
                        href: N,
                        onClick: e => {
                            e.preventDefault(), D()
                        },
                        noHandle: !0
                    })
                }), B, P.default.createElement(d.default, {
                    elementId: w,
                    onClick: () => {
                        (0, C.logShareProductCopyLinkClick)({
                            product: y,
                            catalogContext: (0, _.getProductCatalogContext)(L)
                        })
                    }
                })))
            }
            var A = (0, P.forwardRef)(I);
            t.default = A
        },
        559016: (e, t, o) => {
            "use strict";
            var n = o(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.ProductListDrawer = void 0;
            var a = o(122583),
                l = o(724976),
                r = o(287461),
                i = o(984330),
                c = o(290895),
                d = o(713464),
                u = o(263755),
                s = o(660666),
                f = n(o(908081)),
                p = n(o(324093)),
                m = o(568550),
                g = o(626194),
                _ = o(664149),
                h = o(675085),
                C = n(o(570834)),
                y = n(o(495012)),
                b = o(914368),
                v = n(o(468601)),
                E = o(526795),
                k = o(459912),
                P = n(o(786399)),
                O = o(899841),
                S = n(o(819543)),
                T = o(932523),
                w = o(227604),
                M = n(o(568414)),
                I = n(o(500210)),
                A = n(o(525897)),
                j = o(77548),
                L = n(o(944045)),
                D = o(548360),
                x = function(e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || "object" != typeof e && "function" != typeof e) return {
                        default: e
                    };
                    var o = q(t);
                    if (o && o.has(e)) return o.get(e);
                    var n = {},
                        a = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var l in e)
                        if ("default" !== l && Object.prototype.hasOwnProperty.call(e, l)) {
                            var r = a ? Object.getOwnPropertyDescriptor(e, l) : null;
                            r && (r.get || r.set) ? Object.defineProperty(n, l, r) : n[l] = e[l]
                        }
                    n.default = e, o && o.set(e, n);
                    return n
                }(o(667294)),
                N = n(o(156720)),
                R = o(379811),
                W = n(o(710629)),
                B = n(o(969651)),
                H = n(o(637660)),
                F = o(808446),
                z = n(o(286481)),
                U = n(o(895851));

            function q(e) {
                if ("function" != typeof WeakMap) return null;
                var t = new WeakMap,
                    o = new WeakMap;
                return (q = function(e) {
                    return e ? o : t
                })(e)
            }
            const V = {
                header: {
                    flex: "kk3akd72"
                },
                list: {
                    flex: "kk3akd72",
                    paddingBottom: "oq31bsqd",
                    overflowX: "gfz4du6o",
                    overflowY: "r7fjleex"
                },
                listMarginTop: {
                    marginTop: "dj1c3cmq"
                }
            };

            function G(e) {
                let t, {
                    businessProfile: o,
                    canManageCatalog: n,
                    contact: a,
                    loadingMore: l,
                    onAddProduct: r,
                    productCatalogList: i
                } = e;
                return n && r && (t = x.default.createElement(v.default, {
                    onClick: () => r(),
                    theme: "in-list",
                    testid: "add-item"
                })), x.default.createElement(x.default.Fragment, null, o && x.default.createElement("div", {
                    className: (0, N.default)(V.header)
                }, x.default.createElement(L.default, {
                    profilePicThumb: a.getProfilePicThumb(),
                    contact: a,
                    businessProfile: o
                })), x.default.createElement("div", {
                    className: (0, N.default)(V.list, o && V.listMarginTop)
                }, t, i, l && x.default.createElement(y.default, null)))
            }
            G.displayName = "DrawerContent";
            const Q = (0, x.forwardRef)(((e, t) => {
                const {
                    contact: o,
                    catalogId: n,
                    canManageCatalog: y,
                    setScrollOffset: v,
                    onCartClick: L,
                    onCatalogLinkClick: N,
                    autoUpdate: q = !1,
                    businessProfile: V,
                    onAddProduct: Q,
                    onProductDetail: Y,
                    onProductShare: X,
                    headerType: K,
                    onOpenSettings: J,
                    blockCartInterstitialFn: Z = (() => !1)
                } = e, $ = (0, U.default)(), ee = (0, x.useContext)(m.DrawerContext), te = (0, B.default)(), oe = (0, W.default)(te, 100), [ne] = (0, R.useContactValues)(o.id, [s.getId]), ae = (0, H.default)((() => new C.default)), le = () => {
                    const e = d.CatalogCollection.get(n);
                    return !e || e.stale ? null : e
                }, re = (0, x.useMemo)((() => c.CartCollection.findCart(ne.toString())), [ne]), [ie, ce] = (0, x.useState)(!1), [de, ue] = (0, x.useState)(0), [se, fe] = (0, x.useState)(!1), [pe, me] = (0, x.useState)(!1), [ge, _e] = (0, x.useState)(le), [he, Ce] = (0, x.useState)((() => re.itemCount)), [ye, be] = (0, x.useState)((() => le() ? "SUCCESS" : "NONE"));
                (0, F.useListener)(re, "all", (() => {
                    const e = re.itemCount;
                    he !== e && Ce(e)
                }));
                const ve = () => {
                        if (se) return;
                        const e = d.CatalogCollection.assertGet(n);
                        if (!e.afterCursor) return;
                        const t = e.productCollection.getProductModels().length;
                        ce(!0), ue(t), d.CatalogCollection.update(n).then((e => {
                            if ($.aborted) return;
                            ce(!1);
                            (Array.isArray(e) ? e[0] : e).productCollection.getProductModels().length === de && fe(!0), t * O.PRODUCT_LIST_ITEM_HEIGHT < window.innerHeight && ve()
                        })).catch((() => {
                            ce(!1), fe(!0)
                        }))
                    },
                    Ee = (0, W.default)((() => {
                        var t;
                        null === (t = e.onRemoveProduct) || void 0 === t || t.call(e), te()
                    }), 100),
                    ke = q ? null == ge ? void 0 : ge.productCollection : null;
                (0, F.useListener)(ke, "add", oe), (0, F.useListener)(ke, "remove", Ee);
                (0, x.useEffect)((() => {
                    ge ? ve() : d.CatalogCollection.find(n).then((e => {
                        _e(e), be("SUCCESS"), ve()
                    })).catch((0, a.filteredCatch)(i.ServerStatusCodeError, (e => {
                        403 !== e.status && 404 !== e.status || (_e(null), be("NOT_FOUND"))
                    }))).catch((e => {
                        (0, w.parseErrorState)(e, (e => be(e)))
                    })), (0, S.default)(n).then((e => {
                        me(e), (0, j.logCatalogListView)({
                            catalogOwnerWid: n,
                            catalogContext: (0, T.getProductCatalogContext)(ee),
                            cartToggle: e
                        }), y && pe && !Z() && (0, r.getABPropConfigValue)("web_abprop_nux_cart_interstitial") && (0, P.default)()
                    }))
                }), []);
                const Pe = (0, z.default)((e => {
                        ie || e.scrollTop + b.SCROLL_FUDGE > e.scrollHeight - e.clientHeight && ve()
                    }), 100),
                    Oe = () => {
                        null == L || L(ne.toString())
                    },
                    Se = pe && L ? Oe : void 0,
                    Te = ge ? x.default.createElement(G, {
                        canManageCatalog: y,
                        onAddProduct: Q,
                        businessProfile: V,
                        contact: o,
                        loadingMore: ie,
                        productCatalogList: x.default.createElement(A.default, {
                            onCartOpen: Se,
                            onProductDetail: Y,
                            flatListController: ae.current,
                            catalog: ge,
                            canManageCatalog: y,
                            shareLinks: y,
                            onProductShare: X
                        })
                    }) : x.default.createElement(M.default, {
                        fetchState: ye
                    }),
                    we = function(e) {
                        let {
                            canManageCatalog: t,
                            onOpenSettings: o,
                            headerType: n,
                            onCartClick: a,
                            catalogId: r,
                            handleCatalogLinkClick: i,
                            handleCartClick: c,
                            cartEnabled: d,
                            cartCount: s
                        } = e;
                        const f = t ? x.default.createElement(E.MenuBarItem, {
                            testid: "menu-bar-menu",
                            icon: x.default.createElement(k.MenuIcon, null),
                            title: D.fbt._("Menu", null, {
                                hk: "H0fkV"
                            })
                        }, x.default.createElement(_.Dropdown, {
                            type: _.MenuType.DropdownMenu,
                            flipOnRTL: !0,
                            key: "CatalogDetailHeader",
                            dirX: _.DirX.LEFT
                        }, x.default.createElement(h.DropdownItem, {
                            testid: "mi-foward menu-item",
                            action: i
                        }, D.fbt._("Forward", null, {
                            hk: "2T1QOm"
                        })), o && x.default.createElement(h.DropdownItem, {
                            testid: "mi-settings menu-item",
                            action: o
                        }, D.fbt._("Settings", null, {
                            hk: "2RmHUB"
                        })))) : x.default.createElement(E.MenuBarItem, {
                            testid: "menu-bar-catalog-link",
                            icon: x.default.createElement(I.default, {
                                theme: n === g.DRAWER_HEADER_TYPE.LARGE ? "inherit-color" : null
                            }),
                            title: D.fbt._("Catalog link", null, {
                                hk: "M36Dw"
                            }),
                            onClick: i
                        });
                        return [d && a ? x.default.createElement(u.CartIconMenuBarItem, {
                            cartIconTheme: n === g.DRAWER_HEADER_TYPE.LARGE ? "inherit-color" : null,
                            cartCountText: (0, l.isNumber)(s) && s > 0 ? s.toString() : void 0,
                            onClick: c,
                            catalogOwnerJid: r.toString()
                        }) : null, f]
                    }({
                        canManageCatalog: y,
                        handleCatalogLinkClick: () => {
                            ge && (N(ge, o), (0, j.logCatalogShareLinkClick)({
                                catalogOwnerWid: n,
                                catalogContext: (0, T.getProductCatalogContext)(ee)
                            }))
                        },
                        onOpenSettings: J,
                        headerType: K,
                        cartEnabled: pe,
                        onCartClick: L,
                        cartCount: he,
                        handleCartClick: Oe,
                        catalogId: n
                    });
                return x.default.createElement(f.default, {
                    ref: t,
                    theme: "products",
                    onDrop: e.onBack
                }, x.default.createElement(g.DrawerHeader, {
                    title: D.fbt._("Catalog", null, {
                        hk: "3YVOSV"
                    }),
                    type: e.headerType || g.DRAWER_HEADER_TYPE.SMALL,
                    onBack: e.onBack,
                    menu: we,
                    focusBackOrCancel: !0
                }), x.default.createElement(p.default, {
                    onScroll: e => {
                        var t, o;
                        e.currentTarget && Pe(e.currentTarget), null == v || v(null !== (t = null === (o = e.currentTarget) || void 0 === o ? void 0 : o.scrollTop) && void 0 !== t ? t : 0)
                    },
                    flatListControllers: [ae.current],
                    scrollOffset: e.scrollOffset
                }, Te))
            }));
            t.ProductListDrawer = Q, Q.displayName = "ProductListDrawer"
        },
        944045: (e, t, o) => {
            "use strict";
            var n = o(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = h;
            var a = o(660666),
                l = o(23641),
                r = o(305521),
                i = o(21645),
                c = o(180519),
                d = o(676345),
                u = n(o(667294)),
                s = n(o(156720)),
                f = o(379811),
                p = o(655241);
            const m = {
                description: {
                    display: "c32ccnay",
                    maxHeight: "ih8khgda",
                    overflowX: "gfz4du6o",
                    overflowY: "r7fjleex",
                    lineHeight: "r5qsrrlp",
                    color: "k17s6i4e",
                    wordBreak: "cw3vfol9",
                    WebkitLineClamp: "s7u03v8d",
                    WebkitBoxOrient: "aoi073rw"
                },
                photo: {
                    position: "g0rxnol2",
                    zIndex: "jnl3jror",
                    display: "p357zi0d",
                    alignItems: "gndfcl4n",
                    justifyContent: "ac2vgrno",
                    width: "ln8gz9je",
                    height: "ppled2lx",
                    "::after": {
                        position: "tkubpkrc",
                        top: "m2ribxjb",
                        start: "ayog92vv",
                        zIndex: "a2vs0op0",
                        width: "dmpvfhqh",
                        height: "f2fkal8o",
                        content: "lw9p9708",
                        backgroundColor: "cbpgb5wy"
                    }
                },
                photoIcon: {
                    width: "gbtdc75f",
                    height: "fe3aadhc"
                },
                header: {
                    position: "g0rxnol2",
                    height: "m6k4hpz6",
                    overflowX: "gfz4du6o",
                    overflowY: "r7fjleex",
                    backgroundColor: "fr2082sw"
                },
                text: {
                    position: "lhggkp7q",
                    top: "qq0sjtgm",
                    end: "ebjesfe0",
                    bottom: "jxacihee",
                    start: "tkdu00h0",
                    zIndex: "mb8var44",
                    display: "p357zi0d",
                    flexDirection: "f8m0rgwh",
                    alignItems: "gndfcl4n",
                    justifyContent: "ac2vgrno",
                    textAlign: "qfejxiq4"
                },
                name: {
                    fontWeight: "hnx8ox4h",
                    color: "k17s6i4e"
                },
                spinner: {
                    borderTopStartRadius: "bi2mdrpt",
                    borderTopEndRadius: "hsk1pqkj",
                    borderBottomEndRadius: "e3yfz9gx",
                    borderBottomStartRadius: "a0vc5f8u"
                },
                img: {
                    height: "bvcnfjzh",
                    borderTopStartRadius: "bi2mdrpt",
                    borderTopEndRadius: "hsk1pqkj",
                    borderBottomEndRadius: "e3yfz9gx",
                    borderBottomStartRadius: "a0vc5f8u"
                }
            };

            function g(e) {
                let {
                    businessProfile: t
                } = e;
                const o = (0, p.useOptionalModelValues)(t, ["description"]);
                return o && o.description ? u.default.createElement("div", {
                    className: (0, s.default)(m.description, d.uiMargin.top12)
                }, u.default.createElement(r.EmojiText, {
                    text: o.description,
                    direction: "auto",
                    selectable: !0,
                    titlify: !0
                })) : null
            }

            function _(e) {
                let {
                    contact: t,
                    profilePicThumb: o
                } = e;
                const n = (0, p.useOptionalModelValues)(o, ["imgFull"]),
                    [r] = (0, f.useContactValues)(t.id, [a.getId, a.getIsMe]);
                if (!n) return null;
                const i = u.default.createElement(l.DefaultIcon, {
                    id: r,
                    xstyle: m.photoIcon
                });
                return u.default.createElement("div", {
                    className: (0, s.default)(m.photo)
                }, u.default.createElement(l.DetailImageCommon, {
                    profilePicThumb: n,
                    loader: !0,
                    defaultIcon: i,
                    profilePicThumbImg: n.imgFull,
                    spinnerXstyle: m.spinner,
                    spinnerSize: 100,
                    imgXstyle: m.img,
                    theme: "business",
                    shape: l.DetailImageShape.Square
                }))
            }

            function h(e) {
                const {
                    profilePicThumb: t,
                    contact: o,
                    businessProfile: n
                } = e;
                return u.default.createElement("div", {
                    className: (0, s.default)(m.header)
                }, u.default.createElement(_, {
                    profilePicThumb: t,
                    contact: o
                }), u.default.createElement("div", {
                    className: (0, s.default)(m.text, d.uiPadding.horiz30)
                }, u.default.createElement(c.TextDiv, {
                    className: (0, s.default)(m.name),
                    theme: "large"
                }, u.default.createElement(i.Name, {
                    contact: o,
                    selectable: !0,
                    useVerifiedName: !0
                })), u.default.createElement(g, {
                    businessProfile: n
                })))
            }
            g.displayName = "Description", _.displayName = "Picture", h.displayName = "ProductListDrawerHeader"
        },
        898707: (e, t, o) => {
            "use strict";
            var n = o(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var a = n(o(81109)),
                l = n(o(348926)),
                r = n(o(670983)),
                i = o(713464),
                c = o(676594),
                d = o(87630),
                u = o(537469),
                s = n(o(908081)),
                f = n(o(324093)),
                p = o(626194),
                m = o(163139),
                g = o(741703),
                _ = o(548360),
                h = function(e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || "object" != typeof e && "function" != typeof e) return {
                        default: e
                    };
                    var o = b(t);
                    if (o && o.has(e)) return o.get(e);
                    var n = {},
                        a = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var l in e)
                        if ("default" !== l && Object.prototype.hasOwnProperty.call(e, l)) {
                            var r = a ? Object.getOwnPropertyDescriptor(e, l) : null;
                            r && (r.get || r.set) ? Object.defineProperty(n, l, r) : n[l] = e[l]
                        }
                    n.default = e, o && o.set(e, n);
                    return n
                }(o(667294)),
                C = n(o(156720)),
                y = o(655241);

            function b(e) {
                if ("function" != typeof WeakMap) return null;
                var t = new WeakMap,
                    o = new WeakMap;
                return (b = function(e) {
                    return e ? o : t
                })(e)
            }
            const v = {
                marginBottom: "ngycyvoj"
            };

            function E(e, t) {
                const {
                    onBack: o
                } = e, n = (0, y.useModelValues)(e.product, ["id", "catalogWid"]), [b, E] = (0, h.useState)({}), [k, P] = (0, h.useState)(""), [O, S] = (0, h.useState)(""), [T, w] = (0, h.useState)(!0), M = e => {
                    var t, o;
                    return (null === (t = e.complianceInfo) || void 0 === t ? void 0 : t.countryCodeOrigin) === String(g.SyntheticCountryCode.NotApplicable) ? Promise.resolve(h.default.createElement("div", null, h.default.createElement("div", {
                        className: (0, C.default)(v)
                    }, _.fbt._("Not Applicable", null, {
                        hk: "2k1klN"
                    })), h.default.createElement("div", null, _.fbt._("Item is a service or non-physical good", null, {
                        hk: "3uDBY7"
                    })))) : (0, u.getCountryName)(null === (o = e.complianceInfo) || void 0 === o ? void 0 : o.countryCodeOrigin, u.COUNTRY_FILTER_TYPE.META_RECOGNIZED)
                };
                (0, h.useEffect)((() => {
                    function e() {
                        return (e = (0, l.default)((function*() {
                            yield i.CatalogCollection.findProduct({
                                catalogWid: n.catalogWid,
                                productId: n.id.toString(),
                                productMsgMediaData: (0, m.unproxy)(n).productMsgMediaData,
                                shouldFetchComplianceFields: !0
                            });
                            const e = i.CatalogCollection.get(n.catalogWid),
                                t = (0, r.default)(e, "catalog").productCollection.get(n.id);
                            if (t) {
                                var o, a, l, c, d, s, f, p, g, _, h, C, y, b;
                                const e = yield M(t), n = yield(0, u.getCountryName)(null === (o = t.complianceInfo) || void 0 === o || null === (a = o.importerAddress) || void 0 === a ? void 0 : a.countryCode, u.COUNTRY_FILTER_TYPE.META_RECOGNIZED), r = {
                                    importerName: (null === (l = t.complianceInfo) || void 0 === l ? void 0 : l.importerName) || "",
                                    countryCodeOrigin: (null === (c = t.complianceInfo) || void 0 === c ? void 0 : c.countryCodeOrigin) || "",
                                    importerAddress: {
                                        street1: (null === (d = t.complianceInfo) || void 0 === d || null === (s = d.importerAddress) || void 0 === s ? void 0 : s.street1) || "",
                                        street2: (null === (f = t.complianceInfo) || void 0 === f || null === (p = f.importerAddress) || void 0 === p ? void 0 : p.street2) || "",
                                        city: (null === (g = t.complianceInfo) || void 0 === g || null === (_ = g.importerAddress) || void 0 === _ ? void 0 : _.city) || "",
                                        region: (null === (h = t.complianceInfo) || void 0 === h || null === (C = h.importerAddress) || void 0 === C ? void 0 : C.region) || "",
                                        postalCode: (null === (y = t.complianceInfo) || void 0 === y || null === (b = y.importerAddress) || void 0 === b ? void 0 : b.postalCode) || ""
                                    }
                                };
                                E(r), w(!1), P(e), S(n)
                            } else __LOG__(3)
                            `Unable to fetch compliance for product: ${n.id}`
                        }))).apply(this, arguments)
                    }! function() {
                        e.apply(this, arguments)
                    }()
                }), []);
                const I = () => {
                        if (o) return o()
                    },
                    {
                        countryCodeOrigin: A,
                        importerName: j,
                        importerAddress: L
                    } = b;
                return h.default.createElement(s.default, {
                    ref: t,
                    onDrop: I,
                    theme: "striped",
                    key: "product-details-drawer"
                }, h.default.createElement(p.DrawerHeader, {
                    testid: "drawer-title-profile",
                    title: _.fbt._("More information", null, {
                        hk: "2JHvi1"
                    }),
                    onBack: I,
                    type: p.DRAWER_HEADER_TYPE.SMALL
                }), h.default.createElement(f.default, {
                    theme: T ? "center-content" : void 0
                }, T ? h.default.createElement(d.ComplianceInfoLoading, null) : h.default.createElement(d.ComplianceInfoGroup, null, h.default.createElement(d.ComplianceInfoPrimitiveField, {
                    value: k,
                    label: _.fbt._("Country of Origin", null, {
                        hk: "2yl0F7"
                    })
                }), A && ![c.COMPLIANCE_INFO_CODES.INDIA, g.SyntheticCountryCode.NotApplicable].includes(A) ? h.default.createElement(h.default.Fragment, null, h.default.createElement(d.ComplianceInfoPrimitiveField, {
                    value: j,
                    label: _.fbt._("Name of Importer", null, {
                        hk: "3gfW35"
                    })
                }), h.default.createElement(d.ComplianceInfoStructuralField, {
                    valuesMap: (0, a.default)({
                        importerAddressCountryNameOrigin: O
                    }, L),
                    keys: ["street1", "street2", "city", "region", "postalCode", "importerAddressCountryNameOrigin"],
                    label: _.fbt._("Address of Importer", null, {
                        hk: "Kxo8I"
                    })
                })) : null)))
            }
            var k = (0, h.forwardRef)(E);
            t.default = k
        },
        366179: (e, t, o) => {
            "use strict";
            var n = o(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.ProductPostcodeChangeBanner = h;
            var a = n(o(348926)),
                l = n(o(418950)),
                r = n(o(196554)),
                i = o(114850),
                c = n(o(803209)),
                d = o(548360),
                u = function(e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || "object" != typeof e && "function" != typeof e) return {
                        default: e
                    };
                    var o = m(t);
                    if (o && o.has(e)) return o.get(e);
                    var n = {},
                        a = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var l in e)
                        if ("default" !== l && Object.prototype.hasOwnProperty.call(e, l)) {
                            var r = a ? Object.getOwnPropertyDescriptor(e, l) : null;
                            r && (r.get || r.set) ? Object.defineProperty(n, l, r) : n[l] = e[l]
                        }
                    n.default = e, o && o.set(e, n);
                    return n
                }(o(667294)),
                s = n(o(505447)),
                f = o(655241),
                p = n(o(895851));

            function m(e) {
                if ("function" != typeof WeakMap) return null;
                var t = new WeakMap,
                    o = new WeakMap;
                return (m = function(e) {
                    return e ? o : t
                })(e)
            }

            function g(e) {
                let {
                    postcode: t,
                    catalogWid: o,
                    postcodeChangeSuccess: n
                } = e;
                return u.default.createElement(r.default, {
                    onClick: () => {
                        i.ModalManager.open(u.default.createElement(c.default, {
                            existingPostcode: t,
                            catalogId: o,
                            onCancel: () => i.ModalManager.close(),
                            onSuccess: () => {
                                i.ModalManager.close(), n()
                            }
                        }))
                    }
                }, d.fbt._("Change", null, {
                    hk: "3d8zl4"
                }))
            }

            function _(e) {
                let {
                    businessDirectConnection: t,
                    catalogWid: o,
                    postcodeChangeSuccess: n
                } = e;
                const {
                    postcode: a
                } = (0, f.useModelValues)(t, ["postcode"]);
                return null == a ? null : u.default.createElement(u.default.Fragment, null, d.fbt._("Not available in {area-postcode}.", [d.fbt._param("area-postcode", a)], {
                    hk: "4tHAo0"
                }), " ", u.default.createElement(g, {
                    postcode: a,
                    catalogWid: o,
                    postcodeChangeSuccess: n
                }))
            }

            function h(e) {
                const {
                    catalogWid: t,
                    postcodeChangeSuccess: o
                } = e, [n, r] = (0, u.useState)(null), {
                    value: i,
                    set: c
                } = (0, s.default)(!0), d = (0, p.default)();
                return (0, u.useEffect)((() => {
                    (function() {
                        var e = (0, a.default)((function*() {
                            try {
                                const e = yield l.default.getCypher(t);
                                if (d.aborted) return;
                                r(e)
                            } catch (e) {
                                __LOG__(4, !0, new Error, !0)
                                `[direct-connection] Setting cypher failed in PDP ${e}`, SEND_LOGS("direct-connection-setting-cypher-failed-in-pdp")
                            }
                            d.aborted || c(!1)
                        }));
                        return function() {
                            return e.apply(this, arguments)
                        }
                    })()()
                }), [t, c, d]), i || null == n ? null : u.default.createElement(_, {
                    businessDirectConnection: n,
                    catalogWid: t,
                    postcodeChangeSuccess: o
                })
            }
            g.displayName = "PostcodeChangeButton", _.displayName = "ProductPostcodeChangeBannerHelper", h.displayName = "ProductPostcodeChangeBanner"
        },
        557575: (e, t, o) => {
            "use strict";
            var n = o(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = g;
            var a = o(780549),
                l = o(568550),
                r = n(o(760157)),
                i = o(932523),
                c = o(77548),
                d = o(163139),
                u = function(e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || "object" != typeof e && "function" != typeof e) return {
                        default: e
                    };
                    var o = p(t);
                    if (o && o.has(e)) return o.get(e);
                    var n = {},
                        a = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var l in e)
                        if ("default" !== l && Object.prototype.hasOwnProperty.call(e, l)) {
                            var r = a ? Object.getOwnPropertyDescriptor(e, l) : null;
                            r && (r.get || r.set) ? Object.defineProperty(n, l, r) : n[l] = e[l]
                        }
                    n.default = e, o && o.set(e, n);
                    return n
                }(o(667294)),
                s = n(o(156720)),
                f = o(655241);

            function p(e) {
                if ("function" != typeof WeakMap) return null;
                var t = new WeakMap,
                    o = new WeakMap;
                return (p = function(e) {
                    return e ? o : t
                })(e)
            }
            const m = {
                width: "ln8gz9je"
            };

            function g(e) {
                const {
                    isAvailable: t,
                    fetching: o
                } = e, n = (0, u.useContext)(l.DrawerContext), p = (0, f.useModelValues)(e.product, ["productImageCollection", "productMsgMediaData", "catalogWid", "imageCdnUrl"]), g = p.lazyloadProductImageCollection().toArray();
                return u.default.createElement("div", {
                    className: (0, s.default)(m)
                }, u.default.createElement(r.default, {
                    images: g,
                    fetching: o,
                    onClick: t ? (e, t) => {
                        (0, c.logDetailImageClick)({
                            product: (0, d.unproxy)(p),
                            catalogContext: (0, i.getProductCatalogContext)(n)
                        });
                        const o = {
                            activeProductImage: t,
                            productImageCollection: p.lazyloadProductImageCollection(),
                            getZoomNode: () => e,
                            product: p
                        };
                        a.Cmd.productImageViewerModal(o, (0, i.getProductCatalogSessionId)(n))
                    } : null,
                    renderFallback: !t,
                    fallbackMediaData: p.productMsgMediaData
                }))
            }
            g.displayName = "ProductTile"
        },
        112155: (e, t, o) => {
            "use strict";
            var n = o(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var a = n(o(692629)),
                l = o(81644),
                r = o(118612),
                i = o(548360),
                c = function(e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || "object" != typeof e && "function" != typeof e) return {
                        default: e
                    };
                    var o = u(t);
                    if (o && o.has(e)) return o.get(e);
                    var n = {},
                        a = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var l in e)
                        if ("default" !== l && Object.prototype.hasOwnProperty.call(e, l)) {
                            var r = a ? Object.getOwnPropertyDescriptor(e, l) : null;
                            r && (r.get || r.set) ? Object.defineProperty(n, l, r) : n[l] = e[l]
                        }
                    n.default = e, o && o.set(e, n);
                    return n
                }(o(667294)),
                d = n(o(156720));

            function u(e) {
                if ("function" != typeof WeakMap) return null;
                var t = new WeakMap,
                    o = new WeakMap;
                return (u = function(e) {
                    return e ? o : t
                })(e)
            }
            const s = {
                    display: "p357zi0d",
                    flexDirection: "f8m0rgwh"
                },
                f = {
                    marginTop: "qt60bha0"
                };

            function p(e, t) {
                const {
                    onPopupCancel: o,
                    onReport: n
                } = e, u = i.fbt._("Report this product?", null, {
                    hk: "3IDG0p"
                }), p = c.default.createElement("div", {
                    key: "ReportProductChoicePopup-desc"
                }, i.fbt._("We will review the product and if it does not meet our guidelines, it will be removed.", null, {
                    hk: "2CRdfl"
                })), m = c.default.createElement(a.default, {
                    testid: "popup-controls-report",
                    type: "secondary",
                    onClick: () => n(),
                    key: "ReportProductChoicePopup-reportBtn"
                }, i.fbt._("Report Product", null, {
                    hk: "3XLjyb"
                })), g = c.default.createElement(a.default, {
                    type: "secondary",
                    onClick: o,
                    key: 0
                }, i.fbt._("Cancel", null, {
                    hk: "H0gNq"
                })), _ = c.default.createElement("div", {
                    className: (0, d.default)(s)
                }, c.default.createElement("div", {
                    className: (0, d.default)(f)
                }, m), c.default.createElement("div", {
                    className: (0, d.default)(f)
                }, g));
                return c.default.createElement(l.HotKeys, {
                    ref: t,
                    handlers: {
                        escape: o
                    }
                }, c.default.createElement(r.Modal, {
                    title: u,
                    actions: _,
                    children: p
                }))
            }
            var m = (0, c.forwardRef)(p);
            t.default = m
        },
        237375: (e, t, o) => {
            "use strict";
            var n = o(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var a = o(15842),
                l = o(328620),
                r = o(739071),
                i = n(o(329982)),
                c = o(77548),
                d = n(o(112155)),
                u = n(o(484375)),
                s = o(316348),
                f = o(555622),
                p = o(163139),
                m = o(390737),
                g = o(548360),
                _ = n(o(667294));
            class h extends i.default {
                constructor() {
                    var e;
                    super(...arguments), e = this, this._submitReason = e => {
                        const {
                            product: t
                        } = this.props;
                        return (0, r.reportProduct)(t.catalogWid, t.id.toString(), e)
                    }, this._handleDelete = () => {
                        this.end()
                    }, this._handleTellUsMoreSubmit = e => {
                        f.QPL.markerStart(s.QuickLogMarkerId.WHATSAPP_PRODUCT_REPORT), this._handleShowSubmittedToast(e)
                    }, this._handleReport = () => {
                        this.push(_.default.createElement(u.default, {
                            onTellUsMoreSubmit: this._handleTellUsMoreSubmit,
                            onCancel: this._handleCancel
                        }), "none")
                    }, this._handlePopupCancel = () => {
                        this.end()
                    }, this._handleCancel = () => {
                        this.end()
                    }, this._handleReportSubmitted = () => {
                        this.end()
                    }, this._handleShowSubmittedToast = function(t) {
                        let o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : (0, l.genId)();
                        const {
                            product: n,
                            sessionId: r
                        } = e.props, i = e._submitReason(t), d = new l.ActionType(g.fbt._("Reporting product", null, {
                            hk: "4qusYv"
                        })), u = i.then((() => ((0, c.logReportProductSuccess)({
                            product: (0, p.unproxy)(n),
                            catalogSessionId: r,
                            reason: t || ""
                        }), f.QPL.markerEnd(s.QuickLogMarkerId.WHATSAPP_PRODUCT_REPORT, a.QuickLogActionType.SUCCESS), new l.ActionType(g.fbt._("Thanks for your feedback", null, {
                            hk: "1vRsPv"
                        }).toString() + ". " + g.fbt._("Your report has now been submitted.", null, {
                            hk: "40tL3T"
                        }).toString())))).catch((() => ((0, c.logReportProductFailure)({
                                product: (0, p.unproxy)(n),
                                catalogSessionId: r,
                                reason: t || ""
                            }), f.QPL.markerEnd(s.QuickLogMarkerId.WHATSAPP_PRODUCT_REPORT, a.QuickLogActionType.FAIL), __LOG__(3)
                            `error submitting product report`, new l.ActionType(g.fbt._("Couldn't report product", null, {
                                hk: "11JN2U"
                            }), {
                                actionText: g.fbt._("Retry", null, {
                                    hk: "2jS9Tg"
                                }),
                                actionHandler: () => e._handleShowSubmittedToast(t, o)
                            }))));
                        return m.ToastManager.open(_.default.createElement(l.ActionToast, {
                            id: o,
                            initialAction: d,
                            pendingAction: u
                        })), e._handleReportSubmitted(), i
                    }
                }
                componentDidMount() {
                    this.push(_.default.createElement(d.default, {
                        onReport: this._handleReport,
                        onPopupCancel: this._handlePopupCancel,
                        onCancel: this._handleCancel
                    }))
                }
            }
            t.default = h
        },
        484375: (e, t, o) => {
            "use strict";
            var n = o(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var a = n(o(692629)),
                l = o(81644),
                r = o(118612),
                i = o(695431),
                c = o(625786),
                d = o(390737),
                u = o(548360),
                s = function(e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || "object" != typeof e && "function" != typeof e) return {
                        default: e
                    };
                    var o = p(t);
                    if (o && o.has(e)) return o.get(e);
                    var n = {},
                        a = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var l in e)
                        if ("default" !== l && Object.prototype.hasOwnProperty.call(e, l)) {
                            var r = a ? Object.getOwnPropertyDescriptor(e, l) : null;
                            r && (r.get || r.set) ? Object.defineProperty(n, l, r) : n[l] = e[l]
                        }
                    n.default = e, o && o.set(e, n);
                    return n
                }(o(667294)),
                f = n(o(156720));

            function p(e) {
                if ("function" != typeof WeakMap) return null;
                var t = new WeakMap,
                    o = new WeakMap;
                return (p = function(e) {
                    return e ? o : t
                })(e)
            }
            const m = {
                    display: "p357zi0d"
                },
                g = {
                    position: "g0rxnol2",
                    flex: "a1m9qzja"
                },
                _ = {
                    display: "l7jjieqr"
                },
                h = ["NO_MATCH", "SPAM", "ILLEGAL", "SCAM", "KNOCKOFF", "OTHER"];

            function C(e, t) {
                const {
                    onCancel: o,
                    onTellUsMoreSubmit: n
                } = e, [p, C] = (0, s.useState)(null), b = () => {
                    null == o || o()
                }, v = u.fbt._("Tell us more", null, {
                    hk: "2fZHoO"
                }), E = s.default.createElement("div", {
                    className: (0, f.default)(m)
                }, s.default.createElement("ul", {
                    className: (0, f.default)(g)
                }, h.map((e => s.default.createElement("li", {
                    key: `ReportProductReasonPopup-${e}-option`
                }, s.default.createElement(i.RadioWithLabel, {
                    name: e,
                    value: e,
                    label: s.default.createElement(y, {
                        reason: e
                    }),
                    checked: p === e,
                    onChange: () => {
                        C(e)
                    }
                })))))), k = s.default.createElement(a.default, {
                    testid: "popup-controls-submit",
                    type: "primary",
                    onClick: () => {
                        p ? n(p) : d.ToastManager.open(s.default.createElement(c.Toast, {
                            msg: u.fbt._("Please select a reason.", null, {
                                hk: "3UgUaa"
                            })
                        }))
                    },
                    key: "ReportProductReasonPopup-submitButton",
                    disabled: !p
                }, u.fbt._("Submit", null, {
                    hk: "3npRPm"
                })), P = s.default.createElement(a.default, {
                    type: "secondary",
                    testid: "popup-controls-cancel",
                    onClick: b,
                    key: "ReportProductReasonPopup-cancelButton"
                }, u.fbt._("Cancel", null, {
                    hk: "H0gNq"
                })), O = s.default.createElement("div", {
                    className: (0, f.default)(_)
                }, P, k);
                return s.default.createElement(l.HotKeys, {
                    ref: t,
                    handlers: {
                        escape: b
                    }
                }, s.default.createElement(r.Modal, {
                    title: v,
                    actions: O,
                    children: E
                }))
            }

            function y(e) {
                const {
                    reason: t
                } = e;
                switch (t) {
                    case "NO_MATCH":
                        return u.fbt._("The pictures or descriptions don't match the item", null, {
                            hk: "2ifaot"
                        });
                    case "SPAM":
                        return u.fbt._("This is spam", null, {
                            hk: "hjxQJ"
                        });
                    case "ILLEGAL":
                        return u.fbt._("This is abusive, harmful or illegal", null, {
                            hk: "3xz9jr"
                        });
                    case "SCAM":
                        return u.fbt._("This is fraud or a scam", null, {
                            hk: "2iFRd8"
                        });
                    case "KNOCKOFF":
                        return u.fbt._("This appears to be a knockoff or counterfeit item", null, {
                            hk: "UiFcs"
                        });
                    case "OTHER":
                        return u.fbt._("Other", null, {
                            hk: "1Kn4LY"
                        })
                }
            }
            y.displayName = "RadioLabelText";
            var b = (0, s.forwardRef)(C);
            t.default = b
        },
        491606: (e, t, o) => {
            "use strict";
            var n = o(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.handleCollectionAppeal = function() {
                return T.apply(this, arguments)
            }, t.handleCollectionDelete = function(e, t, o) {
                return new Promise(((n, a) => {
                    p.ModalManager.open(k.default.createElement(u.ConfirmPopup, {
                        title: E.fbt._("Delete Collection", null, {
                            hk: "2y3JZ4"
                        }),
                        okText: (0, s.default)("OK"),
                        cancelText: E.fbt._("Cancel", null, {
                            hk: "H0gNq"
                        }),
                        onOK: () => {
                            p.ModalManager.close(),
                                function() {
                                    return S.apply(this, arguments)
                                }(e, t, o).then((e => n(e))).catch((e => a(e)))
                        },
                        onCancel: () => {
                            p.ModalManager.close(), n(!1)
                        }
                    }, k.default.createElement("div", null, E.fbt._("When you delete this collection, items in the collection will not be deleted.", null, {
                        hk: "192Jcv"
                    }))))
                }))
            }, t.handleCollectionReorder = function() {
                return I.apply(this, arguments)
            }, t.handleCollectionSave = function(e, t, o, n, a, l) {
                let r;
                y.QPL.markerPoint(C.QuickLogMarkerId.WHATSAPP_COLLECTION_EDIT, "datasource_start"), r = t ? (0, h.editCollection)(t.id.toString() || "", o === t.name ? void 0 : o, !1, n.map((e => e.id.toString())), a.map((e => e.id.toString())), l.session.toString()).then((l => (y.QPL.markerPoint(C.QuickLogMarkerId.WHATSAPP_COLLECTION_EDIT, "datasource_end"), t.name = o, t.reviewStatus = l.reviewStatus, e.collections.replaceId(t.id, l.id), 0 === n.length && 0 === a.length || (t.productCollection.reset(), t.afterCursor = void 0, e.collections.reset(), e.collections.afterCursor = ""), !0))) : (0, h.createCollection)(o, n.map((e => e.id.toString())), l.session.toString()).then((t => (y.QPL.markerPoint(C.QuickLogMarkerId.WHATSAPP_COLLECTION_EDIT, "datasource_end"), (0, _.logCollectionCreated)({
                    catalogContext: l,
                    collectionId: t.id,
                    productCount: n.length
                }), e.collections.reset(), e.collections.afterCursor = "", !0)));
                return r.catch((e => {
                    const t = e => {
                        v.ToastManager.open(k.default.createElement(b.Toast, {
                            msg: e,
                            id: (0, b.genId)("catalog_save_collection_failed")
                        }))
                    };
                    let o = E.fbt._("Failed to save collection", null, {
                        hk: "3Chwhp"
                    });
                    if ("not-acceptable" === e.text) return "products" === e.fieldName && "duplicate" === e.fieldReason && (o = E.fbt._("You already have a collection with this group of items. Add or delete items to make a different group.", null, {
                        hk: "1fZXaY"
                    })), "collection" === e.fieldName && "empty" === e.fieldReason && (o = E.fbt._("A collection must have at least one item in it", null, {
                        hk: "39rLHR"
                    })), t(o), !1;
                    throw __LOG__(4, !0, new Error, !0)
                    `Failed to save collection, error: ${e}`, SEND_LOGS("Saving collection failed"), t(o), e
                }))
            }, t.handleProductDelete = function(e, t, o, n) {
                return (0, m.logDeleteProductClick)(t, 1, o), new Promise(((a, l) => {
                    p.ModalManager.open(k.default.createElement(u.ConfirmPopup, {
                        title: E.fbt._("Delete Item", null, {
                            hk: "20DBg1"
                        }),
                        okText: (0, s.default)("OK"),
                        cancelText: E.fbt._("Cancel", null, {
                            hk: "H0gNq"
                        }),
                        onOK: () => {
                            p.ModalManager.close(), y.QPL.markerStart(C.QuickLogMarkerId.WHATSAPP_PRODUCT_DELETE, {
                                    annotations: {
                                        string: {
                                            EntryPoint: n
                                        }
                                    }
                                }),
                                function() {
                                    return P.apply(this, arguments)
                                }(e, t, o).then((e => {
                                    y.QPL.markerEnd(C.QuickLogMarkerId.WHATSAPP_PRODUCT_DELETE, r.QuickLogActionType.SUCCESS), a(e)
                                })).catch((e => {
                                    y.QPL.markerEnd(C.QuickLogMarkerId.WHATSAPP_PRODUCT_DELETE, r.QuickLogActionType.FAIL), l(e)
                                }))
                        },
                        onCancel: () => {
                            p.ModalManager.close(), a(!1)
                        }
                    }, k.default.createElement("div", null, E.fbt._("Are you sure you want to delete this item from your catalog?", null, {
                        hk: "2WwNSA"
                    }))))
                }))
            }, t.handleProductVisibilityChange = function(e, t, o, n) {
                const a = t.id.toString(),
                    l = !t.isHidden;
                l ? (0, m.logCatalogProductHideClick)(a, o) : (0, m.logCatalogProductShowClick)(a, o);
                return new Promise(((i, c) => {
                    const d = t.isHidden ? E.fbt._("Show item in your catalog?", null, {
                        hk: "VfDKM"
                    }) : E.fbt._("Hide item in your catalog?", null, {
                        hk: "1KmslI"
                    });
                    p.ModalManager.open(k.default.createElement(u.ConfirmPopup, {
                        okText: (0, s.default)("OK"),
                        cancelText: E.fbt._("Cancel", null, {
                            hk: "H0gNq"
                        }),
                        onOK: () => {
                            y.QPL.markerStart(C.QuickLogMarkerId.WHATSAPP_PRODUCT_SET_VISIBLE, {
                                    annotations: {
                                        string: {
                                            EntryPoint: n
                                        }
                                    }
                                }), p.ModalManager.close(),
                                function() {
                                    return O.apply(this, arguments)
                                }(e, t).then((() => {
                                    y.QPL.markerEnd(C.QuickLogMarkerId.WHATSAPP_PRODUCT_SET_VISIBLE, r.QuickLogActionType.SUCCESS), l ? (0, m.logCatalogProductHideSuccess)(a, o) : (0, m.logCatalogProductShowSuccess)(a, o), i(!0)
                                })).catch((e => {
                                    y.QPL.markerEnd(C.QuickLogMarkerId.WHATSAPP_PRODUCT_SET_VISIBLE, r.QuickLogActionType.FAIL), l ? (0, m.logCatalogProductHideFailed)(a, o) : (0, m.logCatalogProductShowFailed)(a, o), c(e)
                                }))
                        },
                        onCancel: () => {
                            p.ModalManager.close(), l ? (0, m.logCatalogProductHideCancelled)(a, o) : (0, m.logCatalogProductShowCancelled)(a, o), i(!1)
                        }
                    }, k.default.createElement("div", null, d)))
                }))
            };
            var a = n(o(348926)),
                l = o(122583),
                r = o(15842),
                i = o(984330),
                c = o(739071),
                d = o(172949),
                u = o(103440),
                s = n(o(395767)),
                f = o(791357),
                p = o(114850),
                m = o(77548),
                g = o(530485),
                _ = o(854682),
                h = o(535190),
                C = o(316348),
                y = o(555622),
                b = o(625786),
                v = o(390737),
                E = o(548360),
                k = n(o(667294));

            function P() {
                return (P = (0, a.default)((function*(e, t, o) {
                    try {
                        return yield(0, c.deleteProducts)([t.id.toString()]), (0, m.logDeleteProductSuccess)(t, 1, o), e.productCollection.evictImagesFromCache(t.id.toString()), e.productCollection.remove(t.id.toString()), e.collections && e.collections.forEach((e => e.productCollection.remove(t.id.toString()))), !0
                    } catch (e) {
                        return (0, l.filteredCatch)(i.ServerStatusCodeError, (e => ((0, m.logDeleteProductFailed)(t, 1, o, e.statusCode), v.ToastManager.open(k.default.createElement(b.Toast, {
                            msg: E.fbt._("Failed to delete product", null, {
                                hk: "18E03X"
                            }),
                            id: (0, b.genId)("catalog_delete_product_failed")
                        })), !1)))(e)
                    }
                }))).apply(this, arguments)
            }

            function O() {
                return (O = (0, a.default)((function*(e, t) {
                    yield(0, d.productVisibilitySet)([{
                        productId: t.id.toString(),
                        isHidden: !t.isHidden
                    }]), t.isHidden = !t.isHidden;
                    [e.productCollection, ...(e.collections || []).map((e => e.productCollection))].forEach((e => {
                        const o = e.get(t.id);
                        o && (o.isHidden = t.isHidden)
                    }))
                }))).apply(this, arguments)
            }

            function S() {
                return (S = (0, a.default)((function*(e, t, o) {
                    try {
                        return yield(0, h.deleteCollection)(t.id.toString(), o.session.sessionId.toString()), e.collections.remove(t.id.toString()), (0, _.logCollectionDeleted)({
                            catalogContext: o,
                            collectionId: t.id
                        }), !0
                    } catch (e) {
                        return (0, l.filteredCatch)(i.ServerStatusCodeError, (e => (__LOG__(4, !0, new Error, !0)
                            `Failed to delete collection, error: ${e}`, SEND_LOGS("Deleteing collection failed"), v.ToastManager.open(k.default.createElement(b.Toast, {
                                msg: E.fbt._("Failed to delete collection", null, {
                                    hk: "S7UrR"
                                }),
                                id: (0, b.genId)("catalog_delete_product_failed")
                            })), !1)))(e)
                    }
                }))).apply(this, arguments)
            }

            function T() {
                return (T = (0, a.default)((function*(e, t) {
                    y.QPL.markerPoint(C.QuickLogMarkerId.WHATSAPP_COLLECTION_APPEAL, "datasource_start"), yield(0, h.appealCollection)(e.id.toString(), t), e.set({
                        canAppeal: !1,
                        reviewStatus: g.PRODUCT_REVIEW_STATUS.PENDING
                    }), y.QPL.markerPoint(C.QuickLogMarkerId.WHATSAPP_COLLECTION_APPEAL, "datasource_end")
                }))).apply(this, arguments)
            }
            const w = {
                    OUT_OF_SYNC: {
                        getTitle: () => E.fbt._("Changes cannot be saved", null, {
                            hk: "2N3tQ7"
                        }),
                        getDescription: () => E.fbt._("Please refresh and try again.", null, {
                            hk: "3gfRqz"
                        }),
                        getOkText: () => E.fbt._("Reload", null, {
                            hk: "3hzNTy"
                        })
                    },
                    SERVER_ERROR: {
                        getTitle: () => E.fbt._("Error", null, {
                            hk: "1jfaqb"
                        }),
                        getDescription: () => E.fbt._("Something went wrong. Please try again.", null, {
                            hk: "CZwf"
                        }),
                        getOkText: () => E.fbt._("OK", null, {
                            hk: "2jkNuT"
                        })
                    },
                    HTTP_NETWORK_ERROR: {
                        getTitle: () => E.fbt._("No internet connection", null, {
                            hk: "4psTpe"
                        }),
                        getDescription: () => E.fbt._("Check your internet connection and try again.", null, {
                            hk: "2QcT2T"
                        }),
                        getOkText: () => E.fbt._("OK", null, {
                            hk: "3si9C7"
                        })
                    }
                },
                M = e => e instanceof f.HttpNetworkError ? w.HTTP_NETWORK_ERROR : e instanceof h.CollectionReorderError ? w.OUT_OF_SYNC : w.SERVER_ERROR;

            function I() {
                return (I = (0, a.default)((function*(e, t) {
                    try {
                        const o = yield(0, h.reorderCollection)(e);
                        return o && (0, _.logCollectionReorder)({
                            catalogContext: t,
                            movesCount: e.length
                        }), o
                    } catch (e) {
                        const {
                            getTitle: t,
                            getDescription: o,
                            getOkText: n
                        } = M(e);
                        return new Promise(((a, l) => {
                            p.ModalManager.open(k.default.createElement(u.ConfirmPopup, {
                                title: t(),
                                okText: n(),
                                onOK: () => {
                                    p.ModalManager.close(), e instanceof f.HttpNetworkError ? l(e) : a(!1)
                                }
                            }, k.default.createElement("div", null, o())), {
                                blockClose: !0
                            })
                        }))
                    }
                }))).apply(this, arguments)
            }
        },
        468601: (e, t, o) => {
            "use strict";
            var n = o(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = u;
            var a = n(o(170206)),
                l = n(o(625903)),
                r = o(548360),
                i = n(o(667294)),
                c = n(o(156720));
            const d = {
                addIcon: {
                    position: "g0rxnol2",
                    width: "o22r6p4i",
                    height: "dng4fqht",
                    borderTopWidth: "o6maxiec",
                    borderEndWidth: "gmqjtjz9",
                    borderBottomWidth: "po2rmeaw",
                    borderStartWidth: "ri1nbnxe",
                    borderTopStyle: "d1poss59",
                    borderEndStyle: "gyj32ejw",
                    borderBottomStyle: "cmcp1to6",
                    borderStartStyle: "eg0col54",
                    borderTopColor: "q5jrd1my",
                    borderEndColor: "lwdq4m0b",
                    borderBottomColor: "gd4xq4n8",
                    borderStartColor: "cx1c15pr",
                    borderTopStartRadius: "l147y7tb",
                    borderTopEndRadius: "mjscftrx",
                    borderBottomEndRadius: "fqwk616h",
                    borderBottomStartRadius: "pkud3j3x",
                    ":focus": {
                        borderTopStartRadius: "mmjxyicr",
                        borderTopEndRadius: "r1jx4bdh",
                        borderBottomEndRadius: "f9yclydc",
                        borderBottomStartRadius: "mtzt60z0",
                        boxShadow: "esbo3we0"
                    },
                    "::before": {
                        position: "jiaumjzp",
                        top: "iu8zqbur",
                        left: "c4kjmepz",
                        display: "chh99fau",
                        width: "ln1ej6zg",
                        height: "i0a739jv",
                        content: "ckfn5qle",
                        backgroundColor: "t4c1fkc8",
                        transform: "bsbo06yw"
                    },
                    "::after": {
                        position: "tkubpkrc",
                        top: "khfyavfg",
                        left: "nly7wueh",
                        display: "l1wvjj35",
                        width: "dbiwaw4z",
                        height: "l9a7srmz",
                        content: "lw9p9708",
                        backgroundColor: "sadoqatt",
                        transform: "n2obx7p9"
                    }
                },
                addItemButton: {
                    borderTop: "q4zabkcz"
                },
                themeDefault: {
                    paddingTop: "pxvlsfnc",
                    paddingEnd: "f9ovudaz",
                    paddingBottom: "n3bptxsn",
                    paddingStart: "gx1rr48f",
                    marginTop: "dj1c3cmq",
                    marginEnd: "jnwc1y2a",
                    marginBottom: "mpdn4nr2",
                    marginStart: "svoq16ka"
                },
                themeInList: {
                    paddingTop: "fbgy3m38",
                    paddingEnd: "kyc7k6mt",
                    paddingBottom: "oq31bsqd",
                    paddingStart: "f78eapp6"
                },
                themeCollections: {
                    paddingTop: "fbgy3m38",
                    paddingEnd: "kyc7k6mt",
                    paddingBottom: "oq31bsqd",
                    paddingStart: "f78eapp6",
                    marginBottom: "inogquss",
                    borderTop: "q4zabkcz",
                    borderBottom: "qmxv8cnq"
                }
            };

            function u(e) {
                const {
                    onClick: t,
                    testid: o = "add-item"
                } = e, n = (0, c.default)(d.addItemButton, "default" === e.theme && d.themeDefault, "in-list" === e.theme && d.themeInList, "collections" === e.theme && d.themeCollections), u = i.default.createElement(l.default, {
                    title: r.fbt._("Add new item", null, {
                        hk: "2Tc6p3"
                    }),
                    onClick: () => {},
                    xstyle: d.addIcon
                }, i.default.createElement(i.default.Fragment, null));
                return i.default.createElement(a.default, {
                    theme: "add-item",
                    image: u,
                    customImage: !0,
                    primary: e.title || r.fbt._("Add new item", null, {
                        hk: "2Tc6p3"
                    }),
                    className: n,
                    onClick: t,
                    idle: e.idle,
                    testid: o
                })
            }
            u.displayName = "AddItemCta"
        },
        211185: (e, t, o) => {
            "use strict";
            var n = o(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.CollectionIntegrityBanner = b, t.getCollectionIntegrityHeight = function(e) {
                return (0, l.canAppealCollections)() && e.reviewStatus === u.PRODUCT_REVIEW_STATUS.REJECTED ? 2 * d.PRODUCT_LIST_ITEM_HEIGHT + 10 : d.PRODUCT_LIST_ITEM_HEIGHT + 10
            };
            var a = n(o(464624)),
                l = o(72696),
                r = n(o(196554)),
                i = o(131410),
                c = o(114850),
                d = o(899841),
                u = o(530485),
                s = o(737106),
                f = o(667738),
                p = o(548360),
                m = n(o(667294)),
                g = n(o(156720));
            const _ = {
                iconContainerRejected: {
                    position: "lhggkp7q",
                    end: "h223g3sc",
                    color: "mvxzr2tb",
                    wordBreak: "cw3vfol9"
                },
                iconContainerRejectedWithAppeal: {
                    end: "ku3lw4j3"
                },
                rejectedBanner: {
                    display: "p357zi0d",
                    alignItems: "gndfcl4n",
                    height: "m9lpqg3r",
                    minHeight: "gc15jzxb",
                    paddingTop: "i5tg98hk",
                    paddingEnd: "rmnzjp8r",
                    paddingBottom: "przvwfww",
                    paddingStart: "khscay3k",
                    marginTop: "o9i7y497",
                    marginBottom: "brac1wpa",
                    overflowX: "gfz4du6o",
                    overflowY: "r7fjleex",
                    fontSize: "dsh4tgtl",
                    lineHeight: "erpdyial",
                    color: "e7al1772",
                    backgroundColor: "io9pg0pp"
                },
                rejectedBannerWithAppeal: {
                    display: "p357zi0d",
                    flexDirection: "f8m0rgwh",
                    justifyContent: "ac2vgrno",
                    height: "g4tbm4ed",
                    minHeight: "gc15jzxb",
                    paddingTop: "i5tg98hk",
                    paddingEnd: "sjajxv0r",
                    paddingBottom: "przvwfww",
                    paddingStart: "khscay3k",
                    marginTop: "o9i7y497",
                    marginBottom: "brac1wpa",
                    overflowX: "gfz4du6o",
                    overflowY: "r7fjleex",
                    fontSize: "dsh4tgtl",
                    lineHeight: "erpdyial",
                    color: "e7al1772",
                    backgroundColor: "io9pg0pp"
                },
                rejectedBannerDarkBackground: {
                    backgroundColor: "og7unhan"
                },
                pendingBanner: {
                    display: "p357zi0d",
                    alignItems: "gndfcl4n",
                    height: "m9lpqg3r",
                    minHeight: "gc15jzxb",
                    paddingTop: "i5tg98hk",
                    paddingEnd: "rmnzjp8r",
                    paddingBottom: "przvwfww",
                    paddingStart: "khscay3k",
                    marginTop: "o9i7y497",
                    overflowX: "gfz4du6o",
                    overflowY: "r7fjleex",
                    fontSize: "dsh4tgtl",
                    lineHeight: "erpdyial",
                    color: "e7al1772",
                    wordBreak: "cw3vfol9",
                    backgroundColor: "a5fn8qve"
                },
                iconContainerPending: {
                    position: "lhggkp7q",
                    end: "h223g3sc"
                }
            };

            function h(e) {
                let {
                    withAppeal: t
                } = e;
                return m.default.createElement("div", {
                    className: (0, g.default)(_.iconContainerRejected, t && _.iconContainerRejectedWithAppeal)
                }, m.default.createElement(i.InfoIcon, null))
            }

            function C(e) {
                let {
                    onRename: t
                } = e;
                const o = (0, f.useIsDarkTheme)();
                return m.default.createElement("div", {
                    className: (0, g.default)(_.rejectedBanner, o && _.rejectedBannerDarkBackground)
                }, p.fbt._("This collection wasn't approved because it doesn't follow our guidelines.", null, {
                    hk: "1321OC"
                }), m.default.createElement(r.default, {
                    onClick: t
                }, p.fbt._("Rename", null, {
                    hk: "2U6ctb"
                })), m.default.createElement(h, {
                    withAppeal: !1
                }))
            }

            function y(e) {
                let {
                    collection: t,
                    onAppeal: o,
                    onRename: n
                } = e;
                const a = (t.rejectReason || "other_violation").toLowerCase(),
                    l = (0, s.getRejectedCollectionCopy)(a, t.commerceUrl),
                    i = (0, f.useIsDarkTheme)(),
                    c = m.default.createElement(r.default, {
                        onClick: n
                    }, p.fbt._("rename the collection", null, {
                        hk: "2j5eIB"
                    }));
                if (t.canAppeal) {
                    const e = m.default.createElement(r.default, {
                            onClick: o
                        }, p.fbt._("request another review", null, {
                            hk: "2BSEoy"
                        })),
                        t = p.fbt._("You can {rename_collection_link} or {request_another_review_link}.", [p.fbt._param("rename_collection_link", c), p.fbt._param("request_another_review_link", e)], {
                            hk: "49Nar9"
                        });
                    return m.default.createElement("div", {
                        className: (0, g.default)(_.rejectedBannerWithAppeal, i && _.rejectedBannerDarkBackground)
                    }, l.first, m.default.createElement("br", null), t, m.default.createElement(h, {
                        withAppeal: !0
                    }))
                }
                const d = p.fbt._("You can {rename_collection_link}.", [p.fbt._param("rename_collection_link", c)], {
                    hk: "33lrOJ"
                });
                return m.default.createElement("div", {
                    className: (0, g.default)(_.rejectedBannerWithAppeal, i && _.rejectedBannerDarkBackground)
                }, l.second, m.default.createElement("br", null), d, m.default.createElement(h, {
                    withAppeal: !0
                }))
            }

            function b(e) {
                const {
                    collection: t,
                    onEditCollection: o
                } = e, n = () => {
                    null == o || o(t)
                }, r = () => {
                    c.ModalManager.open(m.default.createElement(a.default, {
                        collection: t
                    }))
                };
                switch (t.reviewStatus) {
                    case u.PRODUCT_REVIEW_STATUS.PENDING:
                        return m.default.createElement("div", {
                            className: (0, g.default)(_.pendingBanner)
                        }, p.fbt._("This collection is being reviewed. Once it's approved, your customers will see it in your catalog.", null, {
                            hk: "47RxvH"
                        }), m.default.createElement("div", {
                            className: (0, g.default)(_.iconContainerPending)
                        }, m.default.createElement(i.InfoIcon, null)));
                    case u.PRODUCT_REVIEW_STATUS.REJECTED:
                        return (0, l.canAppealCollections)() ? m.default.createElement(y, {
                            collection: t,
                            onRename: n,
                            onAppeal: r
                        }) : m.default.createElement(C, {
                            onRename: n
                        });
                    default:
                        return null
                }
            }
            h.displayName = "RejectedIcon", C.displayName = "RejectedBanner", y.displayName = "RejectedBannerWithAppeal", b.displayName = "CollectionIntegrityBanner"
        },
        472234: (e, t, o) => {
            "use strict";
            var n = o(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.CatalogCategoriesBanner = f;
            var a = o(172949),
                l = o(180519),
                r = o(676345),
                i = o(548360),
                c = function(e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || "object" != typeof e && "function" != typeof e) return {
                        default: e
                    };
                    var o = u(t);
                    if (o && o.has(e)) return o.get(e);
                    var n = {},
                        a = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var l in e)
                        if ("default" !== l && Object.prototype.hasOwnProperty.call(e, l)) {
                            var r = a ? Object.getOwnPropertyDescriptor(e, l) : null;
                            r && (r.get || r.set) ? Object.defineProperty(n, l, r) : n[l] = e[l]
                        }
                    n.default = e, o && o.set(e, n);
                    return n
                }(o(667294)),
                d = (n(o(156720)), o(655241));

            function u(e) {
                if ("function" != typeof WeakMap) return null;
                var t = new WeakMap,
                    o = new WeakMap;
                return (u = function(e) {
                    return e ? o : t
                })(e)
            }
            const s = {
                banner: {
                    backgroundColor: "se2m7z6i",
                    display: "p357zi0d",
                    alignItems: "gndfcl4n",
                    borderBottom: "daad4uqs"
                }
            };

            function f(e) {
                let {
                    catalog: t
                } = e;
                const {
                    id: o,
                    hasCatalogCategories: n
                } = (0, d.useModelValues)(t, ["id", "hasCatalogCategories"]);
                return (0, c.useEffect)((() => {
                    null == n && (0, a.queryCatalogHasCategories)(o).then((e => {
                        t.set({
                            hasCatalogCategories: e
                        })
                    }))
                }), [n, o, t]), !1 === n || null == n ? null : c.default.createElement(l.TextDiv, {
                    xstyle: [s.banner, r.uiPadding.all16],
                    size: "13",
                    color: "dark"
                }, i.fbt._("Use WhatsApp on your phone to browse product categories.", null, {
                    hk: "7z4dS"
                }))
            }
            f.displayName = "CatalogCategoriesBanner"
        },
        803209: (e, t, o) => {
            "use strict";
            var n = o(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = C;
            var a = n(o(348926)),
                l = o(946477),
                r = o(103440),
                i = o(753233),
                c = o(258105),
                d = n(o(395767)),
                u = o(202391),
                s = o(180519),
                f = o(548360),
                p = function(e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || "object" != typeof e && "function" != typeof e) return {
                        default: e
                    };
                    var o = g(t);
                    if (o && o.has(e)) return o.get(e);
                    var n = {},
                        a = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var l in e)
                        if ("default" !== l && Object.prototype.hasOwnProperty.call(e, l)) {
                            var r = a ? Object.getOwnPropertyDescriptor(e, l) : null;
                            r && (r.get || r.set) ? Object.defineProperty(n, l, r) : n[l] = e[l]
                        }
                    n.default = e, o && o.set(e, n);
                    return n
                }(o(667294)),
                m = (n(o(156720)), n(o(895851)));

            function g(e) {
                if ("function" != typeof WeakMap) return null;
                var t = new WeakMap,
                    o = new WeakMap;
                return (g = function(e) {
                    return e ? o : t
                })(e)
            }
            const _ = o(76672).Mirrored(["NOT_STARTED", "COMPLETED", "FAILED", "IN_PROGRESS"]),
                h = {
                    infoText: {
                        fontSize: "enbbiyaj",
                        lineHeight: "erpdyial",
                        marginBottom: "t4zgqcuo"
                    },
                    privacyText: {
                        fontSize: "f8jlpxt4",
                        lineHeight: "q5jc98e4",
                        marginTop: "iy2cu22y"
                    }
                };

            function C(e) {
                var t, o;
                let {
                    catalogId: n,
                    existingPostcode: g,
                    onCancel: C,
                    onSuccess: y
                } = e;
                const b = (0, m.default)(),
                    [v, E] = (0, p.useState)({
                        state: _.NOT_STARTED
                    }),
                    [k, P] = (0, p.useState)(g),
                    O = function() {
                        var e = (0, a.default)((function*() {
                            if ("string" == typeof k) {
                                E({
                                    state: _.IN_PROGRESS
                                });
                                try {
                                    const e = yield(0, l.verifyPostcode)(n, k);
                                    b.aborted || E({
                                        state: _.COMPLETED,
                                        data: e
                                    }), "success" === (null == e ? void 0 : e.resultCode) && y()
                                } catch (e) {
                                    if (__LOG__(4, !0, new Error, !0)
                                        `[direct-connection] Updating postcode failed ${e}`, SEND_LOGS("[direct-connection] Updating postcode failed"), b.aborted) return;
                                    E({
                                        state: _.FAILED
                                    })
                                }
                            }
                        }));
                        return function() {
                            return e.apply(this, arguments)
                        }
                    }(),
                    S = (0, p.useCallback)((() => E({
                        state: _.NOT_STARTED
                    })), []),
                    T = "unserviceable_location" === (null === (t = v.data) || void 0 === t ? void 0 : t.resultCode);
                let w = null;
                const M = f.fbt._("Enter a valid Pincode.", null, {
                    hk: "21I4U6"
                });
                ("invalid_postcode" === (null === (o = v.data) || void 0 === o ? void 0 : o.resultCode) || "string" != typeof k || 0 === k.length || 0 !== k.search("^[0-9]{6}$")) && (w = M);
                const I = v.state === _.IN_PROGRESS,
                    A = I || null != w || g === k,
                    j = () => {
                        A || (T ? S() : O())
                    };
                return p.default.createElement(r.ConfirmPopup, {
                    onOK: j,
                    title: T ? null : f.fbt._("Change Pincode", null, {
                        hk: "3R9hJZ"
                    }),
                    okDisabled: A,
                    okSpinner: I,
                    okText: T ? (0, d.default)("OK") : f.fbt._("CONTINUE", null, {
                        hk: "3HQEmh"
                    }),
                    onCancel: T ? null : C,
                    cancelDisabled: I
                }, T ? p.default.createElement(s.Text, {
                    as: "p",
                    testid: "catalog_postcode_change_modal__unservicable-alert"
                }, f.fbt._("JioMart doesn't have items available in that area. You can try a different Pincode.", null, {
                    hk: "40eEp7"
                })) : p.default.createElement(p.default.Fragment, null, p.default.createElement(s.Text, {
                    as: "p",
                    xstyle: h.infoText
                }, f.fbt._("To see JioMart items available in a different area, enter the area's Pincode.", null, {
                    hk: "3u35ZR"
                })), p.default.createElement(u.RichTextField, {
                    testid: "catalog_postcode_change_modal__input",
                    onChange: e => {
                        let {
                            text: t
                        } = e;
                        return o = t, S(), void P(o);
                        var o
                    },
                    value: k,
                    managed: !0,
                    editable: !I,
                    managedError: !0,
                    selectOnMount: !0,
                    focusOnMount: !0,
                    error: w,
                    onEnter: () => {
                        j()
                    }
                }), p.default.createElement(s.Text, {
                    as: "p",
                    theme: "muted",
                    xstyle: h.privacyText
                }, f.fbt._("By continuing, you agree to share your Pincode and phone number with JioMart. Only JioMart can see your Pincode.", null, {
                    hk: "2XMhtN"
                }), " ", p.default.createElement(i.ExternalLink, {
                    href: (0, c.getJioMartPostcodeChangeLearnMoreLink)()
                }, f.fbt._("Learn More", null, {
                    hk: "27Rbeo"
                })))))
            }
            C.displayName = "CatalogPostcodeChangeModal"
        },
        453241: (e, t, o) => {
            "use strict";
            var n = o(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.CatalogPostcodeMenu = S, t.MAX_TIMES_POSTCODE_CHANGE_TOOLTIP_TO_SHOW = t.MAX_TIMES_POSTCODE_CHANGE_MODAL_AUTO_OPEN = void 0;
            var a = n(o(967154)),
                l = o(8304),
                r = o(464520),
                i = o(179652),
                c = o(263079),
                d = o(664149),
                u = o(690495),
                s = o(114850),
                f = n(o(803209)),
                p = o(740043),
                m = o(180519),
                g = o(392632),
                _ = n(o(733712)),
                h = o(757453),
                C = o(548360),
                y = function(e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || "object" != typeof e && "function" != typeof e) return {
                        default: e
                    };
                    var o = P(t);
                    if (o && o.has(e)) return o.get(e);
                    var n = {},
                        a = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var l in e)
                        if ("default" !== l && Object.prototype.hasOwnProperty.call(e, l)) {
                            var r = a ? Object.getOwnPropertyDescriptor(e, l) : null;
                            r && (r.get || r.set) ? Object.defineProperty(n, l, r) : n[l] = e[l]
                        }
                    n.default = e, o && o.set(e, n);
                    return n
                }(o(667294)),
                b = n(o(156720)),
                v = o(655241),
                E = n(o(558532)),
                k = o(441673);

            function P(e) {
                if ("function" != typeof WeakMap) return null;
                var t = new WeakMap,
                    o = new WeakMap;
                return (P = function(e) {
                    return e ? o : t
                })(e)
            }
            const O = {
                container: {
                    display: "p357zi0d",
                    alignItems: "gndfcl4n",
                    backgroundColor: "ihvf49ua",
                    position: "cca4rwve",
                    top: "qq0sjtgm",
                    zIndex: "l355kaf8",
                    boxShadow: "i35u2c65",
                    ":hover": {
                        backgroundColor: "os03hap6"
                    }
                },
                svgWrapper: {
                    paddingTop: "nlnf8xo7",
                    paddingBottom: "r219jyu0",
                    paddingStart: "nntdgyy8",
                    paddingEnd: "igb3k0ri",
                    width: "i94gqilv",
                    color: "kv0r5hzt"
                },
                postcodeDescription: {
                    lineHeight: "erpdyial",
                    fontSize: "enbbiyaj"
                },
                postcodeLocationName: {
                    lineHeight: "r5qsrrlp",
                    fontSize: "f8jlpxt4"
                }
            };
            t.MAX_TIMES_POSTCODE_CHANGE_MODAL_AUTO_OPEN = 2;
            t.MAX_TIMES_POSTCODE_CHANGE_TOOLTIP_TO_SHOW = 5;

            function S(e) {
                let {
                    businessDirectConnection: t,
                    catalog: o,
                    postcodeChangeSuccess: n
                } = e;
                const {
                    postcode: P,
                    postcodeLocationName: S,
                    postcodeSetByUser: T
                } = (0, v.useModelValues)(t, ["postcode", "postcodeLocationName", "postcodeSetByUser"]), {
                    id: w,
                    hasCatalogCategories: M
                } = (0, v.useModelValues)(o, ["id", "hasCatalogCategories"]), I = !0 === T, [A, j] = (0, y.useState)(!1), L = () => {
                    s.ModalManager.close(), j(!1)
                }, D = () => {
                    s.ModalManager.open(y.default.createElement(f.default, {
                        existingPostcode: null != P ? P : "",
                        catalogId: w,
                        onCancel: L,
                        onSuccess: () => {
                            L(), n()
                        }
                    })), j(!0)
                }, x = function() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                    (0, l.delayMs)(e ? p.CATALOG_POSTCODE_CHANGE_MODAL_OPEN_DELAY : 0).then(D)
                }, [N, R] = (0, y.useState)(null), W = (0, y.useRef)(null), B = (0, y.useRef)(null), H = (0, y.useCallback)((() => R(null)), []), [F] = (0, k.useTimeout)(H, p.CATALOG_POSTCODE_MENU_TOOLTIP_DURATION), z = (0, y.useCallback)((() => {
                    const e = B.current ? 3 * B.current.offsetWidth / 4 : null;
                    R({
                        menu: y.default.createElement("div", {
                            style: "number" == typeof e ? {
                                maxWidth: `${e}px`
                            } : null
                        }, y.default.createElement(m.Text, {
                            as: "p"
                        }, C.fbt._("Click to change pincode to see items available in your area", null, {
                            hk: "2p5qlf"
                        }))),
                        anchor: W.current,
                        dirY: d.DirY.TOP,
                        type: d.MenuType.Tooltip,
                        horizontal: !0,
                        tooltipColorScheme: d.TooltipColorScheme.Highlight
                    })
                }), []), [U] = (0, k.useTimeout)((() => {
                    W.current ? (z(), F()) : __LOG__(3)
                    `[direct-connection] change postcode tooltip is not shown`
                }), p.CATALOG_POSTCODE_MENU_TOOLTIP_DELAY);
                (0, y.useEffect)((() => {
                    I || ((0, c.editPostcodeByDefaultEnabled)() ? (0, h.getPostcodeAutoOpenChangePostcodeDone)() || (0, h.getPostcodeAutoOpenChangePostcodeCount)() >= 2 || (x(!0), (0, h.setPostcodeAutoOpenChangePostcodeDone)(!0), (() => {
                        const e = (0, h.getPostcodeAutoOpenChangePostcodeCount)();
                        (0, h.setPostcodeAutoOpenChangePostcodeCount)(e + 1)
                    })()) : (0, h.getPostcodeTooltipViewedInSession)() || (0, h.getPostcodeTooltipViewCount)() >= 5 || ((() => {
                        const e = (0, h.getPostcodeTooltipViewCount)();
                        (0, h.setPostcodeTooltipViewCount)(e + 1)
                    })(), (0, h.setPostcodeTooltipViewedInSession)(!0), U()))
                }), []), (0, E.default)((() => {
                    A && L()
                }));
                const [q, V] = (0, y.useState)(0);
                (0, y.useEffect)((() => {
                    !0 === M && V((e => e + 1))
                }), [M]);
                const G = N ? y.default.createElement(g.UIE, {
                    key: q,
                    displayName: "CatalogPostcodeTooltip",
                    popable: !0,
                    escapable: !0,
                    requestDismiss: H,
                    dismissOnWindowResize: !0
                }, y.default.createElement(_.default, {
                    tooltip: N
                })) : null;
                return y.default.createElement("div", (0, a.default)({
                    className: (0, b.default)(O.container)
                }, (0, r.accessibleClickableButtonProps)({
                    onClick: x
                }), {
                    ref: B
                }), y.default.createElement("span", {
                    className: (0, b.default)(O.svgWrapper)
                }, y.default.createElement(i.BusinessAddressIcon, null)), y.default.createElement(u.FlexColumn, {
                    ref: W
                }, y.default.createElement(m.Text, {
                    as: "p",
                    xstyle: O.postcodeDescription
                }, C.fbt._("Deliver to {postcode-of-a-geographic-area}", [C.fbt._param("postcode-of-a-geographic-area", P)], {
                    hk: "1dDn6Y"
                })), y.default.createElement(m.Text, {
                    as: "p",
                    xstyle: O.postcodeLocationName,
                    theme: "muted"
                }, I ? S : C.fbt._("Click to change Pincode", null, {
                    hk: "37HAka"
                })), G))
            }
            S.displayName = "CatalogPostcodeMenu"
        },
        740043: (e, t) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.CATALOG_POSTCODE_MENU_TOOLTIP_DURATION = t.CATALOG_POSTCODE_MENU_TOOLTIP_DELAY = t.CATALOG_POSTCODE_CHANGE_MODAL_OPEN_DELAY = void 0;
            t.CATALOG_POSTCODE_CHANGE_MODAL_OPEN_DELAY = 500;
            t.CATALOG_POSTCODE_MENU_TOOLTIP_DELAY = 500;
            t.CATALOG_POSTCODE_MENU_TOOLTIP_DURATION = 3500
        },
        559893: (e, t, o) => {
            "use strict";
            var n = o(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var a = n(o(348926)),
                l = o(15842),
                r = o(287461),
                i = o(477627),
                c = o(72696),
                d = n(o(418950)),
                u = o(937356),
                s = o(290895),
                f = o(713464),
                p = n(o(487011)),
                m = o(660666),
                g = o(263079),
                _ = n(o(908081)),
                h = n(o(324093)),
                C = o(568550),
                y = o(626194),
                b = n(o(570834)),
                v = n(o(495012)),
                E = n(o(468601)),
                k = n(o(786399)),
                P = o(899841),
                O = o(795068),
                S = n(o(819543)),
                T = o(932523),
                w = o(227604),
                M = n(o(568414)),
                I = o(77548),
                A = n(o(944045)),
                j = o(472234),
                L = o(453241),
                D = n(o(567105)),
                x = o(316348),
                N = o(555622),
                R = o(887222),
                W = o(548360),
                B = function(e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || "object" != typeof e && "function" != typeof e) return {
                        default: e
                    };
                    var o = Q(t);
                    if (o && o.has(e)) return o.get(e);
                    var n = {},
                        a = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var l in e)
                        if ("default" !== l && Object.prototype.hasOwnProperty.call(e, l)) {
                            var r = a ? Object.getOwnPropertyDescriptor(e, l) : null;
                            r && (r.get || r.set) ? Object.defineProperty(n, l, r) : n[l] = e[l]
                        }
                    n.default = e, o && o.set(e, n);
                    return n
                }(o(667294)),
                H = n(o(156720)),
                F = o(379811),
                z = n(o(710629)),
                U = n(o(969651)),
                q = n(o(637660)),
                V = n(o(286481)),
                G = n(o(895851));

            function Q(e) {
                if ("function" != typeof WeakMap) return null;
                var t = new WeakMap,
                    o = new WeakMap;
                return (Q = function(e) {
                    return e ? o : t
                })(e)
            }
            const Y = {
                header: {
                    flex: "kk3akd72"
                },
                list: {
                    flex: "kk3akd72",
                    paddingBottom: "oq31bsqd",
                    overflowX: "gfz4du6o",
                    overflowY: "r7fjleex"
                },
                listTopMargin: {
                    marginTop: "dj1c3cmq"
                }
            };

            function X(e) {
                var t;
                const {
                    cartEnabled: o,
                    contact: n,
                    catalog: a,
                    dataSource: l,
                    handleCartClick: i,
                    onCartClick: d,
                    canManageCatalog: u,
                    businessProfile: s,
                    blockCartInterstitialFn: f,
                    onAddProduct: m,
                    onProductDetail: g,
                    onProductShare: _,
                    onCollectionSeeAll: h,
                    onEditCollection: C,
                    onOpenCollections: y,
                    catalogFlatListControllerRef: b,
                    catalogFetchState: P,
                    directConnectionPostcodeEnabled: O,
                    loadingDirectConnectionInfo: S,
                    businessDirectConnection: T,
                    loadingMore: w,
                    postcodeChangeSuccess: I
                } = e, x = o && d ? i : void 0;
                let N, R, F, z;
                if (u && m && (N = B.default.createElement(E.default, {
                        onClick: () => m(),
                        theme: "collections",
                        testid: "add-item"
                    })), a && u && C) {
                    R = a.productCollection.getProductModels(!0).some((e => !e.isHidden && "REJECTED" !== e.reviewStatus)) ? B.default.createElement(E.default, {
                        onClick: () => {
                            C(null)
                        },
                        theme: "collections",
                        title: W.fbt._("Add new collection", null, {
                            hk: "1DddmB"
                        }),
                        testid: "add-collection"
                    }) : null
                }
                return a && l ? (F = B.default.createElement(D.default, {
                    onCartOpen: x,
                    onProductDetail: g,
                    flatListController: b.current,
                    catalog: a,
                    canManageCatalog: u,
                    shareLinks: u,
                    onProductShare: _,
                    onCollectionSeeAll: h,
                    data: l.getData(),
                    onEditCollection: C
                }), u && ((0, r.getABPropConfigValue)("web_abprop_nux_cart_interstitial") && o && !f() && (0, k.default)(), z = B.default.createElement(p.default, {
                    onOpenCollections: y
                }))) : F = B.default.createElement(M.default, {
                    fetchState: P
                }), B.default.createElement(B.default.Fragment, null, s && B.default.createElement(B.default.Fragment, null, B.default.createElement("div", {
                    className: (0, H.default)(Y.header)
                }, B.default.createElement(A.default, {
                    profilePicThumb: n.getProfilePicThumb(),
                    contact: n,
                    businessProfile: s
                })), a && (0, c.catalogCategoriesEnabled)() && (null === (t = s.directConnection) || void 0 === t ? void 0 : t.enabled) ? B.default.createElement(j.CatalogCategoriesBanner, {
                    catalog: a
                }) : null, a && O && !S && T && B.default.createElement(L.CatalogPostcodeMenu, {
                    catalog: a,
                    businessDirectConnection: T,
                    postcodeChangeSuccess: I
                })), B.default.createElement("div", {
                    className: (0, H.default)(Y.list, s && Y.listTopMargin)
                }, z, N, R, F, w && B.default.createElement(v.default, null)))
            }

            function K(e, t) {
                const {
                    contact: o,
                    catalogId: n,
                    setScrollOffset: r,
                    onCartClick: c,
                    onCatalogLinkClick: p,
                    canManageCatalog: v,
                    canLogQpl: E = !0,
                    isPushed: k = !0,
                    scrollOffset: M,
                    autoUpdate: A,
                    businessProfile: j,
                    blockCartInterstitialFn: L = (() => !1),
                    onAddProduct: D,
                    onProductDetail: H,
                    onProductShare: Q,
                    onCollectionSeeAll: Y,
                    onEditCollection: K,
                    onOpenCollections: J,
                    onRemoveProduct: Z,
                    onOpenSettings: $,
                    onOpenMerchantDetailsForm: ee
                } = e, te = (0, B.useContext)(C.DrawerContext), oe = (0, g.enablePostcodeInCatalog)() && !!j && (0, u.businessSupportsPostcode)(j), ne = (0, G.default)(), ae = (0, U.default)(), le = (0, z.default)(ae, 100), re = (0, q.default)((() => new b.default)), [ie] = (0, F.useContactValues)(o.id, [m.getId]), ce = (0, B.useMemo)((() => s.CartCollection.findCart(ie.toString())), [ie]), [de, ue] = (0, B.useState)(!1), [se, fe] = (0, B.useState)(null), [pe, me] = (0, B.useState)(ce.itemCount), [ge, _e] = (0, B.useState)("NONE"), [he, Ce] = (0, B.useState)(null), [ye, be] = (0, B.useState)(null), [ve, Ee] = (0, B.useState)(!0), ke = function() {
                    var e = (0, a.default)((function*(e) {
                        yield null == e ? void 0 : e.loadInitialItems(), Ee(!1)
                    }));
                    return function() {
                        return e.apply(this, arguments)
                    }
                }(), Pe = (0, z.default)((() => {
                    ae(), null == Z || Z()
                }), 100), [Oe, Se] = (0, B.useState)(), [Te, we] = (0, B.useState)(!1), Me = () => {
                    const e = E && k,
                        t = e ? x.QuickLogMarkerId.WHATSAPP_CATALOG_COLLECTIONS_VIEW : void 0;
                    f.CatalogCollection.find(n, {
                        markerId: t
                    }).then((t => {
                        if (ne.aborted) return;
                        const o = new i.CatalogWithCollectionsDataSource(t, v || !1, P.PRODUCT_LIST_ITEM_HEIGHT, e),
                            n = new i.CatalogListItemScrollHelper(o);
                        fe(t), Ce(o), be(n), _e("SUCCESS"), ke(o).then((() => {
                            e && N.QPL.markerEnd(x.QuickLogMarkerId.WHATSAPP_CATALOG_COLLECTIONS_VIEW, l.QuickLogActionType.SUCCESS)
                        })).catch((() => {
                            e && N.QPL.markerEnd(x.QuickLogMarkerId.WHATSAPP_CATALOG_COLLECTIONS_VIEW, l.QuickLogActionType.FAIL)
                        })), (e => {
                            A && null != e && (e.productCollection.on("add", le), e.productCollection.on("remove", Pe), e.collections.on("add", le), e.collections.on("remove", le))
                        })(t), void 0 !== M && re.current.setScrollFromStart(M)
                    })).catch((t => {
                        e && N.QPL.markerEnd(x.QuickLogMarkerId.WHATSAPP_CATALOG_COLLECTIONS_VIEW, l.QuickLogActionType.FAIL), (0, w.parseErrorState)(t, (e => {
                            _e(e), Ee(!1)
                        }))
                    }))
                }, Ie = () => {
                    oe ? (we(!0), d.default.getCypher(n).then((e => {
                        Se(e), we(!1), Me()
                    }))) : Me()
                };
                (0, B.useEffect)((() => {
                    Ie(), (0, S.default)(n).then((e => {
                        ue(e), e && ce.on("change:cartItemCollection", (() => me(ce.itemCount))), (0, I.logCatalogListView)({
                            catalogOwnerWid: n,
                            catalogContext: (0, T.getProductCatalogContext)(te),
                            cartToggle: e
                        })
                    }))
                }), []);
                const Ae = (0, V.default)(((e, t) => {
                        null == r || r(t.scrollTop), (null == ye ? void 0 : ye.willLoadMore(t)) && Ee(!0), null == ye || ye.onScroll(e, t).then((e => {
                            e && Ee(!1)
                        })).catch((e => {
                            throw Ee(!1), e
                        }))
                    }), 100),
                    je = () => {
                        (0, R.qplStartCartView)("Catalog"), null == c || c(ie.toString())
                    },
                    Le = (0, O.getCatalogDrawerMenu)({
                        onSendCatalog: () => {
                            se && (p(se, o), (0, I.logCatalogShareLinkClick)({
                                catalogOwnerWid: n,
                                catalogContext: (0, T.getProductCatalogContext)(te)
                            }))
                        },
                        onCartClick: de ? je : void 0,
                        cartCount: pe,
                        catalogId: n.toString(),
                        canManageCatalog: v,
                        onOpenCollections: J,
                        onOpenMerchantDetailsForm: ee,
                        onOpenSettings: $,
                        cartIconTheme: e.headerType === y.DRAWER_HEADER_TYPE.LARGE ? "inherit-color" : null
                    });
                return B.default.createElement(_.default, {
                    ref: t,
                    theme: "products",
                    onDrop: e.onBack
                }, B.default.createElement(y.DrawerHeader, {
                    title: W.fbt._("Catalog", null, {
                        hk: "3YVOSV"
                    }),
                    type: e.headerType || y.DRAWER_HEADER_TYPE.SMALL,
                    onBack: e.onBack,
                    menu: Le,
                    focusBackOrCancel: !0
                }), B.default.createElement(h.default, {
                    onScroll: e => {
                        Ae(e, e.currentTarget)
                    },
                    flatListControllers: [re.current]
                }, B.default.createElement(X, {
                    cartEnabled: de,
                    contact: o,
                    handleCartClick: je,
                    onProductDetail: H,
                    onCartClick: c,
                    catalog: se,
                    dataSource: he,
                    businessProfile: j,
                    canManageCatalog: v,
                    onAddProduct: D,
                    onProductShare: Q,
                    onCollectionSeeAll: Y,
                    onOpenCollections: J,
                    onEditCollection: K,
                    blockCartInterstitialFn: L,
                    catalogFlatListControllerRef: re,
                    catalogFetchState: ge,
                    directConnectionPostcodeEnabled: oe,
                    loadingDirectConnectionInfo: Te,
                    businessDirectConnection: Oe,
                    loadingMore: ve,
                    postcodeChangeSuccess: () => {
                        f.CatalogCollection.removeCatalog(n), fe(null), Ce(null), be(null), _e("NONE"), Ee(!0), Ie()
                    }
                })))
            }
            X.displayName = "CatalogDrawerContent";
            var J = (0, B.forwardRef)(K);
            t.default = J
        },
        977575: (e, t, o) => {
            "use strict";
            var n = o(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.CollectionContentDrawer = void 0;
            var a = n(o(348926)),
                l = o(15842),
                r = o(477627),
                i = o(290895),
                c = o(713464),
                d = o(660666),
                u = n(o(908081)),
                s = n(o(324093)),
                f = o(568550),
                p = o(626194),
                m = n(o(570834)),
                g = n(o(495012)),
                _ = n(o(468601)),
                h = o(211185),
                C = o(899841),
                y = o(795068),
                b = n(o(819543)),
                v = o(932523),
                E = o(227604),
                k = n(o(568414)),
                P = o(854682),
                O = n(o(567105)),
                S = o(316348),
                T = o(555622),
                w = o(887222),
                M = o(548360),
                I = function(e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || "object" != typeof e && "function" != typeof e) return {
                        default: e
                    };
                    var o = W(t);
                    if (o && o.has(e)) return o.get(e);
                    var n = {},
                        a = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var l in e)
                        if ("default" !== l && Object.prototype.hasOwnProperty.call(e, l)) {
                            var r = a ? Object.getOwnPropertyDescriptor(e, l) : null;
                            r && (r.get || r.set) ? Object.defineProperty(n, l, r) : n[l] = e[l]
                        }
                    n.default = e, o && o.set(e, n);
                    return n
                }(o(667294)),
                A = n(o(156720)),
                j = o(379811),
                L = n(o(710629)),
                D = n(o(969651)),
                x = n(o(637660)),
                N = o(808446),
                R = n(o(895851));

            function W(e) {
                if ("function" != typeof WeakMap) return null;
                var t = new WeakMap,
                    o = new WeakMap;
                return (W = function(e) {
                    return e ? o : t
                })(e)
            }
            const B = {
                    flex: "kk3akd72",
                    paddingBottom: "oq31bsqd",
                    overflowX: "gfz4du6o",
                    overflowY: "r7fjleex"
                },
                H = {
                    paddingTop: "pxvlsfnc",
                    paddingEnd: "kyc7k6mt",
                    paddingBottom: "n3bptxsn",
                    paddingStart: "f78eapp6",
                    lineHeight: "qg52vu03"
                };

            function F(e) {
                const {
                    cartEnabled: t,
                    catalogFetchState: o,
                    collectionFlatListController: n,
                    loadingMore: a,
                    catalog: l,
                    dataSource: r,
                    canManageCatalog: i,
                    collection: c,
                    handleCartClick: d,
                    onProductDetail: u,
                    onCartClick: s,
                    onProductShare: f,
                    onEditCollection: p
                } = e, m = t && s ? d : void 0;
                if (!l || !r) return I.default.createElement(k.default, {
                    fetchState: o
                });
                const C = r.getData();
                if (0 === C.length && !a && i && c) return I.default.createElement("div", {
                    className: (0, A.default)(B)
                }, I.default.createElement(_.default, {
                    theme: "collections",
                    onClick: () => {
                        null == p || p(c)
                    },
                    testid: "add-collection"
                }), I.default.createElement("div", {
                    className: (0, A.default)(H)
                }, M.fbt._("This collection won't be visible to customers until you add at least 1 item", null, {
                    hk: "3XWBzM"
                })));
                const y = I.default.createElement(O.default, {
                        onCartOpen: m,
                        onProductDetail: u,
                        flatListController: n,
                        catalog: l,
                        canManageCatalog: i,
                        shareLinks: i,
                        onProductShare: f,
                        collectionId: null == c ? void 0 : c.id.toString(),
                        data: C
                    }),
                    b = c ? I.default.createElement(h.CollectionIntegrityBanner, {
                        collection: c,
                        onEditCollection: p
                    }) : void 0;
                return I.default.createElement("div", {
                    className: (0, A.default)(B)
                }, b, y, a && I.default.createElement(g.default, null))
            }
            F.displayName = "CollectionDrawerContent";
            const z = (0, I.forwardRef)(((e, t) => {
                var o;
                const {
                    contact: n,
                    catalogId: g,
                    onCartClick: _,
                    onCatalogLinkClick: h,
                    setScrollOffset: k,
                    canManageCatalog: O,
                    scrollOffset: A,
                    collection: W,
                    onProductDetail: B,
                    onProductShare: H,
                    onEditCollection: z
                } = e, U = (0, D.default)(), q = (0, R.default)(), V = (0, I.useContext)(f.DrawerContext), [G] = (0, j.useContactValues)(n.id, [d.getId]), Q = (0, I.useMemo)((() => i.CartCollection.findCart(G.toString())), [G]), Y = (0, x.default)((() => new m.default)), [X, K] = (0, I.useState)(!1), [J, Z] = (0, I.useState)(null), [$, ee] = (0, I.useState)(Q.itemCount), [te, oe] = (0, I.useState)("NONE"), [ne, ae] = (0, I.useState)(null), [le, re] = (0, I.useState)(null), [ie, ce] = (0, I.useState)(!0);
                (0, N.useListener)(null == W ? void 0 : W.productCollection, ["add", "remove"], U), (0, N.useListener)(null == J ? void 0 : J.productCollection, ["add", "remove"], U), (0, N.useListener)(null == J ? void 0 : J.collections, ["add", "remove"], U), (0, N.useListener)(W, ["change:reviewStatus", "canAppeal"], U);
                const de = function() {
                        var e = (0, a.default)((function*(e) {
                            yield null == e ? void 0 : e.loadInitialItems(), ce(!1), (0, P.logCollectionSeeAllView)({
                                catalogOwnerJid: g.toString(),
                                catalogContext: (0, v.getProductCatalogContext)(V),
                                collectionId: null == e ? void 0 : e.collectionId
                            })
                        }));
                        return function() {
                            return e.apply(this, arguments)
                        }
                    }(),
                    ue = () => {
                        const e = Q.itemCount;
                        $ !== e && ee(e)
                    };
                (0, I.useEffect)((() => {
                    c.CatalogCollection.find(g).then((e => {
                        if (q.aborted) return;
                        Z(e), oe("SUCCESS");
                        const t = new r.SingleCollectionDataSource(e, null == W ? void 0 : W.id.toString(), O || !1, C.PRODUCT_LIST_ITEM_HEIGHT),
                            o = new r.CatalogListItemScrollHelper(t);
                        ae(t), re(o), de(t).then((() => {
                            T.QPL.markerEnd(S.QuickLogMarkerId.WHATSAPP_COLLECTION_VIEW_ALL, l.QuickLogActionType.SUCCESS)
                        })).catch((() => {
                            T.QPL.markerEnd(S.QuickLogMarkerId.WHATSAPP_COLLECTION_VIEW_ALL, l.QuickLogActionType.FAIL)
                        })), void 0 !== A && Y.current.setScrollFromStart(A)
                    })).catch((e => {
                        T.QPL.markerEnd(S.QuickLogMarkerId.WHATSAPP_COLLECTION_VIEW_ALL, l.QuickLogActionType.FAIL), (0, E.parseErrorState)(e, (e => {
                            oe(e), ce(!1)
                        }))
                    })), (0, b.default)(g).then((e => {
                        K(e), e && Q.on("all", ue)
                    }))
                }), []);
                const se = () => {
                        (0, w.qplStartCartView)("Collection"), null == _ || _(G.toString())
                    },
                    fe = (0, L.default)(((e, t) => {
                        null == k || k(t.scrollTop), (null == le ? void 0 : le.willLoadMore(t)) && ce(!0), null == le || le.onScroll(e, t).then((e => {
                            e && ce(!1)
                        })).catch((e => {
                            throw ce(!1), e
                        }))
                    }), 100),
                    pe = (0, y.getCatalogDrawerMenu)({
                        onSendCatalog: () => {
                            J && h(J, n)
                        },
                        onCartClick: X ? se : void 0,
                        cartCount: Q.itemCount,
                        catalogId: g.toString(),
                        canManageCatalog: O,
                        cartIconTheme: "inherit-color"
                    }),
                    me = (null === (o = e.collection) || void 0 === o ? void 0 : o.name) || M.fbt._("All Items", null, {
                        hk: "2x8dE2"
                    });
                return I.default.createElement(u.default, {
                    ref: t,
                    theme: "products",
                    onDrop: e.onBack
                }, I.default.createElement(p.DrawerHeader, {
                    title: me,
                    type: e.headerType || p.DRAWER_HEADER_TYPE.SMALL,
                    onBack: e.onBack,
                    menu: pe
                }), I.default.createElement(s.default, {
                    flatListControllers: [Y.current],
                    onScroll: e => {
                        fe(e, e.currentTarget)
                    }
                }, I.default.createElement(F, {
                    cartEnabled: X,
                    onCartClick: _,
                    handleCartClick: se,
                    catalog: J,
                    dataSource: ne,
                    catalogFetchState: te,
                    loadingMore: ie,
                    canManageCatalog: O,
                    collection: W,
                    onProductDetail: B,
                    onProductShare: H,
                    onEditCollection: z,
                    collectionFlatListController: Y.current
                })))
            }));
            t.CollectionContentDrawer = z, z.displayName = "CollectionContentDrawer"
        },
        73665: (e, t, o) => {
            "use strict";
            var n = o(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = y;
            var a = n(o(170206)),
                l = n(o(196554)),
                r = o(305521),
                i = o(530485),
                c = o(414493),
                d = o(180519),
                u = o(887222),
                s = o(548360),
                f = n(o(667294)),
                p = n(o(156720));
            const m = {
                    lineHeight: "erpdyial"
                },
                g = {
                    lineHeight: "erpdyial"
                },
                _ = {
                    color: "mvxzr2tb"
                },
                h = {
                    paddingStart: "f78eapp6",
                    marginTop: "o9i7y497",
                    borderTop: "swyb62mu"
                };

            function C(e) {
                let {
                    name: t,
                    onClick: o
                } = e;
                return f.default.createElement(l.default, {
                    onClick: o,
                    className: (0, p.default)(g),
                    title: s.fbt._("Collection {collectionName}, see all", [s.fbt._param("collectionName", t)], {
                        hk: "1kqerQ"
                    }),
                    tabIndex: 0
                }, s.fbt._("See all", null, {
                    hk: "UPjou"
                }))
            }

            function y(e) {
                const {
                    collection: t,
                    onSeeAll: o,
                    allItems: n
                } = e;
                let l, g;
                t ? ({
                    name: l,
                    id: g
                } = t) : n && (l = s.fbt._("All Items", null, {
                    hk: "2x8dE2"
                }));
                const y = f.default.createElement(d.TextDiv, {
                    className: (0, p.default)(m),
                    theme: "title"
                }, f.default.createElement(r.EmojiText, {
                    text: l,
                    ellipsify: !0,
                    titlify: !0
                }));
                let b;
                if (t) switch (t.reviewStatus) {
                    case i.PRODUCT_REVIEW_STATUS.REJECTED:
                        b = f.default.createElement("span", {
                            className: (0, p.default)(_)
                        }, s.fbt._("rejected", null, {
                            hk: "3f3H8P"
                        }))
                }
                return f.default.createElement(a.default, {
                    key: g,
                    primary: y,
                    secondary: b,
                    detail: f.default.createElement(C, {
                        name: l,
                        onClick: function(e) {
                            (0, c.stopEvent)(e), (0, u.qplStartCollectionViewAll)("Catalog"), o && t ? o(t) : o && o()
                        }
                    }),
                    theme: "collection-header",
                    idle: !0,
                    className: (0, p.default)(h)
                })
            }
            C.displayName = "CollectionListItemAction", y.displayName = "CollectionListItem"
        },
        737106: (e, t, o) => {
            "use strict";
            var n = o(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.getRejectedCollectionCopy = function(e, t) {
                let o;
                switch (e) {
                    case "drugs":
                        return o = i.fbt._("WhatsApp's Commerce Policy for prescription, recreational, or other types of Drugs", null, {
                            hk: "B27ED"
                        }), {
                            first: i.fbt._("This collection wasn't approved because its name violates {collections_rejected_policy_drugs}", [i.fbt._param("collections_rejected_policy_drugs", d(o, t))], {
                                hk: "1ZU364"
                            }),
                            second: i.fbt._("We reviewed this collection again and confirmed its name violates {collections_rejected_policy_drugs}.", [i.fbt._param("collections_rejected_policy_drugs", d(o, t))], {
                                hk: "4pJPwW"
                            })
                        };
                    case "weapons":
                        return o = i.fbt._("WhatsApp's Commerce Policy for Weapons, ammunition, or explosives", null, {
                            hk: "1X972I"
                        }), {
                            first: i.fbt._("This collection wasn't approved because its name violates {collections_rejected_policy_weapons}", [i.fbt._param("collections_rejected_policy_weapons", d(o, t))], {
                                hk: "1RUS3E"
                            }),
                            second: i.fbt._("We reviewed this collection again and confirmed its name violates {collections_rejected_policy_weapons}.", [i.fbt._param("collections_rejected_policy_weapons", d(o, t))], {
                                hk: "4caF44"
                            })
                        };
                    case "animals":
                        return o = i.fbt._("WhatsApp's Commerce Policy for Animals", null, {
                            hk: "3hxXr8"
                        }), {
                            first: i.fbt._("This collection wasn't approved because its name violates {collections_rejected_policy_animals}", [i.fbt._param("collections_rejected_policy_animals", d(o, t))], {
                                hk: "3pIJQl"
                            }),
                            second: i.fbt._("We reviewed this collection again and confirmed its name violates {collections_rejected_policy_animals}.", [i.fbt._param("collections_rejected_policy_animals", d(o, t))], {
                                hk: "jmRZD"
                            })
                        };
                    case "alcohol":
                        return o = i.fbt._("WhatsApp's Commerce Policy for Alcohol", null, {
                            hk: "1G8YGL"
                        }), {
                            first: i.fbt._("This collection wasn't approved because its name violates {collections_rejected_policy_alcohol}", [i.fbt._param("collections_rejected_policy_alcohol", d(o, t))], {
                                hk: "1K5gKG"
                            }),
                            second: i.fbt._("We reviewed this collection again and confirmed its name violates {collections_rejected_policy_alcohol}.", [i.fbt._param("collections_rejected_policy_alcohol", d(o, t))], {
                                hk: "1BLaYk"
                            })
                        };
                    case "gambling":
                        return o = i.fbt._("WhatsApp's Commerce Policy for Real money gambling services", null, {
                            hk: "1zQIeM"
                        }), {
                            first: i.fbt._("This collection wasn't approved because its name violates {collections_rejected_policy_gambling}", [i.fbt._param("collections_rejected_policy_gambling", d(o, t))], {
                                hk: "2sjwfv"
                            }),
                            second: i.fbt._("We reviewed this collection again and confirmed its name violates {collections_rejected_policy_gambling}.", [i.fbt._param("collections_rejected_policy_gambling", d(o, t))], {
                                hk: "2N7wJa"
                            })
                        };
                    case "tobacco":
                        return o = i.fbt._("WhatsApp's Commerce Policy for Tobacco items and related paraphernalia", null, {
                            hk: "EAQLL"
                        }), {
                            first: i.fbt._("This collection wasn't approved because its name violates {collections_rejected_policy_tobacco}", [i.fbt._param("collections_rejected_policy_tobacco", d(o, t))], {
                                hk: "49kjok"
                            }),
                            second: i.fbt._("We reviewed this collection again and confirmed its name violates {collections_rejected_policy_tobacco}.", [i.fbt._param("collections_rejected_policy_tobacco", d(o, t))], {
                                hk: "1hYXEJ"
                            })
                        };
                    case "overtly_sexualized_positioning":
                        return o = i.fbt._("WhatsApp's Commerce Policy for Overtly sexualized positioning", null, {
                            hk: "1oaFbX"
                        }), {
                            first: i.fbt._("This collection wasn't approved because its name violates {collections_rejected_policy_overtly_sexualized_positioning}", [i.fbt._param("collections_rejected_policy_overtly_sexualized_positioning", d(o, t))], {
                                hk: "2imNEe"
                            }),
                            second: i.fbt._("We reviewed this collection again and confirmed its name violates {collections_rejected_policy_overtly_sexualized_positioning}.", [i.fbt._param("collections_rejected_policy_overtly_sexualized_positioning", d(o, t))], {
                                hk: "2Bi73E"
                            })
                        };
                    case "adult":
                        return o = i.fbt._("WhatsApp's Commerce Policy for Adult products or service", null, {
                            hk: "Wf7q5"
                        }), {
                            first: i.fbt._("This collection wasn't approved because its name violates {collections_rejected_policy_adult}", [i.fbt._param("collections_rejected_policy_adult", d(o, t))], {
                                hk: "2sWh94"
                            }),
                            second: i.fbt._("We reviewed this collection again and confirmed its name violates {collections_rejected_policy_adult}.", [i.fbt._param("collections_rejected_policy_adult", d(o, t))], {
                                hk: "4Fv5xc"
                            })
                        };
                    case "supplements":
                        return o = i.fbt._("WhatsApp's Commerce Policy for Unsafe ingestible supplements", null, {
                            hk: "9a4Y2"
                        }), {
                            first: i.fbt._("This collection wasn't approved because its name violates {collections_rejected_policy_supplements}", [i.fbt._param("collections_rejected_policy_supplements", d(o, t))], {
                                hk: "3m5ayk"
                            }),
                            second: i.fbt._("We reviewed this collection again and confirmed its name violates {collections_rejected_policy_supplements}.", [i.fbt._param("collections_rejected_policy_supplements", d(o, t))], {
                                hk: "4g93H8"
                            })
                        };
                    case "body_parts_fluids":
                        return o = i.fbt._("WhatsApp's Commerce Policy for Body parts and fluids", null, {
                            hk: "2EAd21"
                        }), {
                            first: i.fbt._("This collection wasn't approved because its name violates {collections_rejected_policy_body_parts_fluids}", [i.fbt._param("collections_rejected_policy_body_parts_fluids", d(o, t))], {
                                hk: "1fH8mf"
                            }),
                            second: i.fbt._("We reviewed this collection again and confirmed its name violates {collections_rejected_policy_body_parts_fluids}.", [i.fbt._param("collections_rejected_policy_body_parts_fluids", d(o, t))], {
                                hk: "2HB7OE"
                            })
                        };
                    case "healthcare":
                        return o = i.fbt._("WhatsApp's Commerce Policy for Medical and healthcare products", null, {
                            hk: "3vvgOF"
                        }), {
                            first: i.fbt._("This collection wasn't approved because its name violates {collections_rejected_policy_healthcare}", [i.fbt._param("collections_rejected_policy_healthcare", d(o, t))], {
                                hk: "1o5Y8p"
                            }),
                            second: i.fbt._("We reviewed this collection again and confirmed its name violates {collections_rejected_policy_healthcare}.", [i.fbt._param("collections_rejected_policy_healthcare", d(o, t))], {
                                hk: "18tOqv"
                            })
                        };
                    case "misleading":
                        return o = i.fbt._("WhatsApp's Commerce Policy for Business models, goods, items, or services that may be or are fraudulent, misleading, offensive, or deceptive, or may be or are exploitative, inappropriate, or exert undue pressure on targeted groups", null, {
                            hk: "3TyOB"
                        }), {
                            first: i.fbt._("This collection wasn't approved because its name violates {collections_rejected_policy_misleading}", [i.fbt._param("collections_rejected_policy_misleading", d(o, t))], {
                                hk: "1icG7s"
                            }),
                            second: i.fbt._("We reviewed this collection again and confirmed its name violates {collections_rejected_policy_misleading}.", [i.fbt._param("collections_rejected_policy_misleading", d(o, t))], {
                                hk: "4gURah"
                            })
                        };
                    case "real_fake_currency":
                        return o = i.fbt._("WhatsApp's Commerce Policy for Real, virtual, or fake currency", null, {
                            hk: "2XnVq2"
                        }), {
                            first: i.fbt._("This collection wasn't approved because its name violates {collections_rejected_policy_real_fake_currency}", [i.fbt._param("collections_rejected_policy_real_fake_currency", d(o, t))], {
                                hk: "2F8xUp"
                            }),
                            second: i.fbt._("We reviewed this collection again and confirmed its name violates {collections_rejected_policy_real_fake_currency}.", [i.fbt._param("collections_rejected_policy_real_fake_currency", d(o, t))], {
                                hk: "3mr0Qt"
                            })
                        };
                    case "digital_services_products":
                        return o = i.fbt._("WhatsApp's Commerce Policy for Digital and subscription services", null, {
                            hk: "2mvwqB"
                        }), {
                            first: i.fbt._("This collection wasn't approved because its name violates {collections_rejected_policy_digital_services_products}", [i.fbt._param("collections_rejected_policy_digital_services_products", d(o, t))], {
                                hk: "W6Ct0"
                            }),
                            second: i.fbt._("We reviewed this collection again and confirmed its name violates {collections_rejected_policy_digital_services_products}.", [i.fbt._param("collections_rejected_policy_digital_services_products", d(o, t))], {
                                hk: "4gcYAt"
                            })
                        };
                    case "thrid_party_infringements":
                        return o = i.fbt._("WhatsApp's Commerce Policy for Third-Party Infringement", null, {
                            hk: "48SSD"
                        }), {
                            first: i.fbt._("This collection wasn't approved because its name violates {collections_rejected_policy_thrid_party_infringements}", [i.fbt._param("collections_rejected_policy_thrid_party_infringements", d(o, t))], {
                                hk: "2S7xKD"
                            }),
                            second: i.fbt._("We reviewed this collection again and confirmed its name violates {collections_rejected_policy_thrid_party_infringements}.", [i.fbt._param("collections_rejected_policy_thrid_party_infringements", d(o, t))], {
                                hk: "1UXaIr"
                            })
                        };
                    case "unauthorized_media":
                        return o = i.fbt._("WhatsApp's Commerce Policy for Products or items that facilitate or encourage unauthorized access to digital media", null, {
                            hk: "2ldhoF"
                        }), {
                            first: i.fbt._("This collection wasn't approved because its name violates {collections_rejected_policy_unauthorized_media}", [i.fbt._param("collections_rejected_policy_unauthorized_media", d(o, t))], {
                                hk: "2oPAST"
                            }),
                            second: i.fbt._("We reviewed this collection again and confirmed its name violates {collections_rejected_policy_unauthorized_media}.", [i.fbt._param("collections_rejected_policy_unauthorized_media", d(o, t))], {
                                hk: "NVM4H"
                            })
                        };
                    case "illegal_products":
                        return o = i.fbt._("WhatsApp's Commerce Policy for Illegal products or services", null, {
                            hk: "c5Zjc"
                        }), {
                            first: i.fbt._("This collection wasn't approved because its name violates {collections_rejected_policy_illegal_products}", [i.fbt._param("collections_rejected_policy_illegal_products", d(o, t))], {
                                hk: "41Oqb6"
                            }),
                            second: i.fbt._("We reviewed this collection again and confirmed its name violates {collections_rejected_policy_illegal_products}.", [i.fbt._param("collections_rejected_policy_illegal_products", d(o, t))], {
                                hk: "46TgAV"
                            })
                        };
                    case "hazardous_goods_and_materials":
                        return o = i.fbt._("WhatsApp's Commerce Policy for Business models, goods, items, or services that may be or are fraudulent, misleading, offensive, or deceptive, or may be or are exploitative, inappropriate, or exert undue pressure on targeted groups", null, {
                            hk: "3TyOB"
                        }), {
                            first: i.fbt._("This collection wasn't approved because its name violates {collections_rejected_policy_hazardous_goods_and_materials}", [i.fbt._param("collections_rejected_policy_hazardous_goods_and_materials", d(o, t))], {
                                hk: "smMcx"
                            }),
                            second: i.fbt._("We reviewed this collection again and confirmed its name violates {collections_rejected_policy_hazardous_goods_and_materials}.", [i.fbt._param("collections_rejected_policy_hazardous_goods_and_materials", d(o, t))], {
                                hk: "SdRo5"
                            })
                        };
                    case "stolen_goods":
                        return o = i.fbt._("WhatsApp's Commerce Policy", null, {
                            hk: "1kuvvN"
                        }), {
                            first: i.fbt._("This collection wasn't approved because its name violates {collections_rejected_policy_stolen_goods}", [i.fbt._param("collections_rejected_policy_stolen_goods", d(o, t))], {
                                hk: "4mvVou"
                            }),
                            second: i.fbt._("We reviewed this collection again and confirmed its name violates {collections_rejected_policy_stolen_goods}.", [i.fbt._param("collections_rejected_policy_stolen_goods", d(o, t))], {
                                hk: "1Zd6PC"
                            })
                        };
                    case "human_exploitation_and_sexual_services":
                        return o = i.fbt._("WhatsApp's Commerce Policy", null, {
                            hk: "1kuvvN"
                        }), {
                            first: i.fbt._("This collection wasn't approved because its name violates {collections_rejected_policy_human_exploitation_and_sexual_services}", [i.fbt._param("collections_rejected_policy_human_exploitation_and_sexual_services", d(o, t))], {
                                hk: "4yXqyf"
                            }),
                            second: i.fbt._("We reviewed this collection again and confirmed its name violates {collections_rejected_policy_human_exploitation_and_sexual_services}.", [i.fbt._param("collections_rejected_policy_human_exploitation_and_sexual_services", d(o, t))], {
                                hk: "3XImZQ"
                            })
                        };
                    case "community_standards":
                        return o = i.fbt._("WhatsApp's Business Terms", null, {
                            hk: "1x5ZqO"
                        }), {
                            first: i.fbt._("This collection wasn't approved because its name violates {collections_rejected_policy_community_standards}", [i.fbt._param("collections_rejected_policy_community_standards", d(o, t))], {
                                hk: "2AoLET"
                            }),
                            second: i.fbt._("We reviewed this collection again and confirmed its name violates {collections_rejected_policy_community_standards}.", [i.fbt._param("collections_rejected_policy_community_standards", d(o, t))], {
                                hk: "apmZF"
                            })
                        };
                    case "discrimination":
                        return o = i.fbt._("WhatsApp's Business Terms", null, {
                            hk: "1x5ZqO"
                        }), {
                            first: i.fbt._("This collection wasn't approved because its name violates {collections_rejected_policy_discrimination}", [i.fbt._param("collections_rejected_policy_discrimination", d(o, t))], {
                                hk: "4gmrAW"
                            }),
                            second: i.fbt._("We reviewed this collection again and confirmed its name violates {collections_rejected_policy_discrimination}.", [i.fbt._param("collections_rejected_policy_discrimination", d(o, t))], {
                                hk: "3j6FXO"
                            })
                        };
                    default:
                        return o = i.fbt._("WhatsApp's Commerce Policy", null, {
                            hk: "1kuvvN"
                        }), {
                            first: i.fbt._("This collection wasn't approved because its name violates {collections_rejected_policy_other_violation}", [i.fbt._param("collections_rejected_policy_other_violation", d(o, t))], {
                                hk: "3AiJjt"
                            }),
                            second: i.fbt._("We reviewed this collection again and confirmed its name violates {collections_rejected_policy_other_violation}.", [i.fbt._param("collections_rejected_policy_other_violation", d(o, t))], {
                                hk: "A2Pf5"
                            })
                        }
                }
            };
            var a = n(o(196554)),
                l = n(o(846870)),
                r = o(753233),
                i = o(548360),
                c = n(o(667294));

            function d(e, t) {
                const o = t || l.default.WA_COMMERCE_POLICY_URL;
                return c.default.createElement(a.default, {
                    href: o,
                    onClick: e => {
                        e.preventDefault(), (0, r.openExternalLink)(o)
                    }
                }, e)
            }
        },
        854682: (e, t, o) => {
            "use strict";
            var n = o(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.logCollectionCreateClicked = function(e) {
                new r.CatalogBizWamEvent({
                    catalogBizAction: d.CATALOG_BIZ_ACTION.ACTION_COLLECTION_CREATE_CLICKED,
                    catalogEntryPoint: e.entryPoint,
                    catalogSessionId: e.session.toString()
                }).commit()
            }, t.logCollectionCreated = function(e) {
                let {
                    catalogContext: t,
                    collectionId: o,
                    productCount: n
                } = e;
                new r.CatalogBizWamEvent({
                    catalogBizAction: d.CATALOG_BIZ_ACTION.ACTION_COLLECTION_CREATED,
                    catalogEntryPoint: t.entryPoint,
                    catalogSessionId: t.session.toString(),
                    productCount: n
                }).commit()
            }, t.logCollectionDeleted = function(e) {
                let {
                    catalogContext: t,
                    collectionId: o
                } = e;
                new r.CatalogBizWamEvent({
                    catalogBizAction: d.CATALOG_BIZ_ACTION.ACTION_COLLECTION_DELETED,
                    catalogEntryPoint: t.entryPoint,
                    catalogSessionId: t.session.toString(),
                    collectionId: o
                }).commit()
            }, t.logCollectionItemsAssignment = function(e) {
                let {
                    catalogContext: t,
                    collectionId: o,
                    addedCount: n,
                    removedCount: a
                } = e;
                n > 0 && new r.CatalogBizWamEvent({
                    catalogBizAction: d.CATALOG_BIZ_ACTION.ACTION_COLLECTION_ASSIGN_ITEMS,
                    catalogEntryPoint: t.entryPoint,
                    catalogSessionId: t.session.toString(),
                    productCount: n,
                    collectionId: o
                }).commit();
                a > 0 && new r.CatalogBizWamEvent({
                    catalogBizAction: d.CATALOG_BIZ_ACTION.ACTION_COLLECTION_UNASSIGN_ITEMS,
                    catalogEntryPoint: t.entryPoint,
                    catalogSessionId: t.session.toString(),
                    productCount: a,
                    collectionId: o
                }).commit()
            }, t.logCollectionMenuClicked = function(e) {
                new r.CatalogBizWamEvent({
                    catalogBizAction: d.CATALOG_BIZ_ACTION.ACTION_MENU_COLLECTIONS_CLICK,
                    catalogEntryPoint: e.entryPoint,
                    catalogSessionId: e.session.toString()
                }).commit()
            }, t.logCollectionRenamed = function(e) {
                let {
                    catalogContext: t,
                    collectionId: o
                } = e;
                new r.CatalogBizWamEvent({
                    catalogBizAction: d.CATALOG_BIZ_ACTION.ACTION_COLLECTION_DELETED,
                    catalogEntryPoint: t.entryPoint,
                    catalogSessionId: t.session.toString(),
                    collectionId: o
                }).commit()
            }, t.logCollectionReorder = function(e) {
                let {
                    catalogContext: t,
                    movesCount: o
                } = e;
                new r.CatalogBizWamEvent({
                    catalogBizAction: d.CATALOG_BIZ_ACTION.ACTION_COLLECTION_CHANGE_ORDER,
                    catalogEntryPoint: t.entryPoint,
                    catalogSessionId: t.session.toString(),
                    productCount: o
                }).commit()
            }, t.logCollectionSeeAllView = function(e) {
                let {
                    catalogOwnerJid: t,
                    catalogContext: o,
                    collectionId: n
                } = e;
                const r = (0, l.getProductStatsInFetched)(t, n),
                    d = null == r ? void 0 : r.productIndex,
                    u = null == r ? void 0 : r.collectionIndex;
                (0, c.logCatalogViewOrBizEvent)((0, a.default)((0, a.default)({
                    isOwner: (0, c.isCatalogOwner)({
                        catalogOwnerJid: t
                    }),
                    productIndex: d,
                    collectionIndex: u
                }, (0, i.toDataForCatalogViewEvents)(o)), {}, {
                    catalogOwnerJid: t
                }))
            };
            var a = n(o(81109)),
                l = o(477627),
                r = o(104209),
                i = o(932523),
                c = o(537066),
                d = o(937789)
        },
        567105: (e, t, o) => {
            "use strict";
            var n = o(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = S;
            var a = o(568550),
                l = o(512938),
                r = n(o(964223)),
                i = n(o(570834)),
                c = o(390185),
                d = o(491606),
                u = o(211185),
                s = o(899841),
                f = o(932523),
                p = n(o(698690)),
                m = o(77548),
                g = o(530485),
                _ = n(o(73665)),
                h = o(163139),
                C = o(887222),
                y = function(e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || "object" != typeof e && "function" != typeof e) return {
                        default: e
                    };
                    var o = P(t);
                    if (o && o.has(e)) return o.get(e);
                    var n = {},
                        a = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var l in e)
                        if ("default" !== l && Object.prototype.hasOwnProperty.call(e, l)) {
                            var r = a ? Object.getOwnPropertyDescriptor(e, l) : null;
                            r && (r.get || r.set) ? Object.defineProperty(n, l, r) : n[l] = e[l]
                        }
                    n.default = e, o && o.set(e, n);
                    return n
                }(o(667294)),
                b = n(o(969651)),
                v = n(o(637660)),
                E = o(808446),
                k = o(655241);

            function P(e) {
                if ("function" != typeof WeakMap) return null;
                var t = new WeakMap,
                    o = new WeakMap;
                return (P = function(e) {
                    return e ? o : t
                })(e)
            }
            const O = (0, l.FlatListFactory)();

            function S(e) {
                const {
                    onProductDetail: t,
                    onProductShare: o,
                    onCartOpen: n,
                    shareLinks: l = !1,
                    onEditCollection: P,
                    onCollectionSeeAll: S,
                    canManageCatalog: T
                } = e, w = (0, b.default)(), M = (0, k.useModelValues)(e.catalog, ["productCollection", "collections", "afterCursor", "id", "index"]), I = (0, y.useContext)(a.DrawerContext), A = (0, v.default)((() => new Set)), j = (0, v.default)((() => new i.default)), L = e => {
                    null == o || o(e)
                }, D = e => {
                    (0, d.handleProductDelete)(M, e, (0, f.getProductCatalogContext)(I), "Collection")
                }, x = e => {
                    (0, d.handleProductVisibilityChange)(M, e, (0, f.getProductCatalogContext)(I), "Collections")
                };
                return (0, E.useListeners)(Array.from(A.current).map((e => ({
                    source: e,
                    eventOrEvents: ["change:reviewStatus", "canAppeal"],
                    callback: w
                })))), y.default.createElement(r.default, {
                    flatListControllers: [j.current]
                }, y.default.createElement(O, {
                    flatListController: j.current,
                    direction: "vertical",
                    forceConsistentRenderCount: !1,
                    data: (() => {
                        const t = void 0 !== n,
                            o = e.data || [],
                            a = [];
                        return o.forEach((o => {
                            const n = o.collection,
                                l = o.product,
                                r = o.allItems;
                            if (n && l) {
                                const e = n.id;
                                a.push({
                                    itemKey: `${e.toString()}_${l.id.toString()}_${t.toString()}`,
                                    product: l,
                                    collectionId: e
                                })
                            } else if (n) A.current.has(n) || A.current.add(n), a.push({
                                itemKey: `${n.id.toString()}_${n.reviewStatus.toString()}`,
                                collection: n
                            }), n.reviewStatus !== g.PRODUCT_REVIEW_STATUS.PENDING && n.reviewStatus !== g.PRODUCT_REVIEW_STATUS.REJECTED || a.push({
                                itemKey: `${n.id.toString()}_reviewBanner`,
                                collection: n,
                                height: (0, u.getCollectionIntegrityHeight)(n),
                                reviewBanner: !0
                            });
                            else if (r) a.push({
                                itemKey: "view_all",
                                allItems: r
                            });
                            else if (l) {
                                const o = e.collectionId || void 0;
                                a.push({
                                    itemKey: `${l.id.toString()}_${t.toString()}`,
                                    product: l,
                                    collectionId: o
                                })
                            }
                        })), a
                    })(),
                    renderItem: e => {
                        let {
                            collection: o,
                            product: a,
                            allItems: r,
                            reviewBanner: i = !1,
                            collectionId: c
                        } = e;
                        return o ? i ? y.default.createElement(u.CollectionIntegrityBanner, {
                            collection: o,
                            onEditCollection: P
                        }) : y.default.createElement(_.default, {
                            collection: o,
                            onSeeAll: S
                        }) : r ? y.default.createElement(_.default, {
                            allItems: r,
                            onSeeAll: S
                        }) : a ? y.default.createElement(p.default, {
                            collectionId: c,
                            product: a,
                            onCartOpen: n,
                            onClick: () => ((e, o) => ((0, C.qplStartProductView)("Collection"), (0, m.logCatalogListDetailClick)({
                                product: (0, h.unproxy)(e),
                                catalogContext: (0, f.getProductCatalogContext)(I)
                            }), t(e, o)))(a, c),
                            onProductShare: l ? L : null,
                            onProductDelete: D,
                            onProductHideShow: x,
                            theme: "product-of-collection",
                            canManageCatalog: T
                        }) : null
                    },
                    defaultItemHeight: s.PRODUCT_LIST_ITEM_HEIGHT,
                    keyOrder: c.KeyOrder.INVERSE
                }))
            }
            S.displayName = "ProductCollectionsList"
        },
        760157: (e, t, o) => {
            "use strict";
            var n = o(530066).default,
                a = o(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = C;
            var l = o(898817),
                r = a(o(229922)),
                i = o(305989),
                c = o(396574),
                d = a(o(851713)),
                u = a(o(585760)),
                s = o(172259),
                f = a(o(929796)),
                p = o(435595),
                m = o(956113),
                g = a(o(330619)),
                _ = function(e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || "object" != typeof e && "function" != typeof e) return {
                        default: e
                    };
                    var o = h(t);
                    if (o && o.has(e)) return o.get(e);
                    var n = {},
                        a = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var l in e)
                        if ("default" !== l && Object.prototype.hasOwnProperty.call(e, l)) {
                            var r = a ? Object.getOwnPropertyDescriptor(e, l) : null;
                            r && (r.get || r.set) ? Object.defineProperty(n, l, r) : n[l] = e[l]
                        }
                    n.default = e, o && o.set(e, n);
                    return n
                }(o(667294));

            function h(e) {
                if ("function" != typeof WeakMap) return null;
                var t = new WeakMap,
                    o = new WeakMap;
                return (h = function(e) {
                    return e ? o : t
                })(e)
            }

            function C(e) {
                const {
                    images: t,
                    renderFallback: o,
                    fallbackMediaData: a,
                    fetching: h,
                    onClick: C
                } = e, y = (0, _.useRef)(null), b = (0, _.useRef)(null), v = (0, _.useRef)(null), E = (0, _.useRef)(null), k = (0, _.useRef)(null), [P, O] = (0, _.useState)(null), [S, T] = (0, _.useState)(t.filter((e => e.mediaData.mediaStage === s.MediaDataStage.RESOLVED)).length), [w, M] = (0, _.useState)(!1), I = S === t.length, A = () => T((e => e + 1));
                (0, _.useEffect)((() => {
                    let e = null;
                    if (!I && !o) {
                        var t, a;
                        const o = b.current;
                        if (!o) return;
                        null === (t = v.current) || void 0 === t || t.controller.abort(), e = new n;
                        const i = e.signal,
                            c = ((null === (a = v.current) || void 0 === a ? void 0 : a.promise) || Promise.resolve()).then((() => (0, g.default)(o, {
                                opacity: [1, 0]
                            }, {
                                delay: 75,
                                duration: 50
                            }))),
                            d = (0, r.default)(c, i).then((() => {
                                if (i.aborted) throw new l.AbortError;
                                M(!0)
                            })).catch((0, l.catchAbort)((() => {
                                (0, g.default)(o, "stop", !0)
                            }))).finally((() => {
                                v.current = null
                            }));
                        v.current = {
                            promise: d,
                            controller: e
                        }
                    }
                    return () => {
                        var t;
                        null === (t = e) || void 0 === t || t.abort()
                    }
                }), [I, o]);
                const j = () => {
                    var e;
                    return (null === (e = y.current) || void 0 === e ? void 0 : e.children) ? y.current.scrollWidth === y.current.offsetWidth ? null : 0 === y.current.scrollLeft ? "next" : y.current.scrollWidth - 1 <= y.current.scrollLeft + y.current.offsetWidth ? "prev" : "both" : null
                };
                if ((0, _.useEffect)((() => {
                        O(j())
                    }), [I]), o && 0 === t.length) return _.default.createElement("div", {
                    className: d.default.carousel,
                    dir: "ltr"
                }, _.default.createElement("div", {
                    className: (0, c.classnamesConvertMeToStylexPlease)(d.default.contentContainer, d.default.slidesContainer)
                }, a && _.default.createElement(u.default, {
                    altText: "",
                    mediaData: a,
                    renderFallback: !0,
                    singleSlide: !0
                })));
                let L, D, x;
                const N = () => {
                    E.current = null;
                    const e = j();
                    P !== e && O(e)
                };
                if (t.length > 1) {
                    const e = () => {
                            const e = y.current;
                            if (null != e && ("prev" === P || "both" === P)) {
                                const t = e.scrollLeft + e.offsetWidth / 2;
                                let o = 0,
                                    n = e.lastElementChild;
                                for (; n instanceof HTMLElement && 0 === o;) {
                                    const e = n.offsetLeft + n.offsetWidth / 2;
                                    e < t && (o = Math.floor(e - t)), n = n.previousElementSibling
                                }
                                0 !== o && e.scrollBy({
                                    left: o,
                                    behavior: "smooth"
                                })
                            }
                        },
                        t = () => {
                            const e = y.current;
                            if (null != e && ("next" === P || "both" === P)) {
                                const t = e.scrollLeft + e.offsetWidth / 2;
                                let o = 0,
                                    n = e.firstElementChild;
                                for (; n instanceof HTMLElement && 0 === o;) {
                                    const e = n.offsetLeft + n.offsetWidth / 2;
                                    t < e && (o = Math.floor(e - t)), n = n.nextElementSibling
                                }
                                0 !== o && e.scrollBy({
                                    left: o,
                                    behavior: "smooth"
                                })
                            }
                        },
                        o = () => {
                            k.current = null;
                            const e = j();
                            P !== e && O(e)
                        };
                    x = () => {
                        null == k.current && (k.current = window.requestAnimationFrame(o))
                    }, I && null != P && (L = _.default.createElement(i.ChevronButton, {
                        type: i.ButtonType.Prev,
                        onClick: e,
                        onKeyDown: e,
                        disabled: "prev" !== P && "both" !== P,
                        theme: p.RoundTheme.Small,
                        overMedia: !0
                    }), D = _.default.createElement(i.ChevronButton, {
                        type: i.ButtonType.Next,
                        onClick: t,
                        onKeyDown: t,
                        disabled: "next" !== P && "both" !== P,
                        theme: p.RoundTheme.Small,
                        overMedia: !0
                    }))
                }
                const R = 1 === t.length,
                    W = t.map(((e, t) => _.default.createElement(u.default, {
                        key: t,
                        altText: "",
                        image: e,
                        singleSlide: R,
                        mediaData: e.mediaData,
                        onClick: C,
                        onLoad: A
                    }))),
                    B = I ? null : _.default.createElement("div", {
                        className: (0, c.classnamesConvertMeToStylexPlease)(d.default.contentContainer, d.default.spinnerContainer)
                    }, _.default.createElement("div", {
                        className: d.default.spinner,
                        ref: b
                    }, _.default.createElement(m.Spinner, {
                        color: "default",
                        size: 50,
                        stroke: 4
                    }))),
                    H = (0, c.classnamesConvertMeToStylexPlease)({
                        [d.default.loaded]: !h && I,
                        [d.default.fadeIn]: w,
                        [d.default.carousel]: !0
                    });
                return _.default.createElement("div", {
                    className: H,
                    dir: "ltr"
                }, B, _.default.createElement("div", {
                    ref: y,
                    className: (0, c.classnamesConvertMeToStylexPlease)(d.default.contentContainer, d.default.slidesContainer),
                    onScroll: x
                }, W), L, D, _.default.createElement(f.default, {
                    onResize: () => {
                        null == E.current && (E.current = window.requestAnimationFrame(N))
                    }
                }))
            }
            a(o(730523)).default.polyfill(), C.displayName = "ImageCarousel"
        },
        585760: (e, t, o) => {
            "use strict";
            var n = o(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = d;
            var a = n(o(897679)),
                l = o(172259),
                r = function(e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || "object" != typeof e && "function" != typeof e) return {
                        default: e
                    };
                    var o = c(t);
                    if (o && o.has(e)) return o.get(e);
                    var n = {},
                        a = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var l in e)
                        if ("default" !== l && Object.prototype.hasOwnProperty.call(e, l)) {
                            var r = a ? Object.getOwnPropertyDescriptor(e, l) : null;
                            r && (r.get || r.set) ? Object.defineProperty(n, l, r) : n[l] = e[l]
                        }
                    n.default = e, o && o.set(e, n);
                    return n
                }(o(667294)),
                i = o(655241);

            function c(e) {
                if ("function" != typeof WeakMap) return null;
                var t = new WeakMap,
                    o = new WeakMap;
                return (c = function(e) {
                    return e ? o : t
                })(e)
            }

            function d(e) {
                let {
                    altText: t,
                    forwardRef: o,
                    image: n,
                    mediaData: c,
                    onClick: d,
                    onLoad: u,
                    renderFallback: s,
                    singleSlide: f
                } = e;
                const {
                    fullHeight: p,
                    fullWidth: m,
                    mediaStage: g,
                    renderableUrl: _
                } = (0, i.useModelValues)(c, ["fullHeight", "fullWidth", "mediaStage", "renderableUrl"]), h = (0, r.useRef)(null), C = (0, r.useRef)(g === l.MediaDataStage.RESOLVED);
                (0, r.useEffect)((() => {
                    !u || C.current || s || g !== l.MediaDataStage.RESOLVED || (u(), C.current = !0)
                }), [u, s, g]);
                const y = !!f;
                let b = m && p ? m / p : .8;
                b < .8 && (b = .8), b > 1.91 && (b = 1.91), b > 1 && !y && (b = 1);
                const v = {
                        width: y && b < 1 ? 100 * b + "%" : 1 !== b || f ? null : "100%"
                    },
                    E = {
                        paddingTop: `${Math.floor(100/b)}%`
                    },
                    k = {
                        cursor: "" + (d ? "pointer" : "auto")
                    };
                return r.default.createElement("div", {
                    ref: o ? e => o(e) : null,
                    className: a.default.slide,
                    style: v
                }, r.default.createElement("div", {
                    className: a.default.slideInnerContainer,
                    style: E
                }, r.default.createElement("img", {
                    ref: h,
                    alt: t,
                    src: _,
                    className: a.default.image,
                    style: k,
                    draggable: "false",
                    onClick: () => {
                        d && h.current && n && d(h.current, n)
                    }
                })))
            }
            d.displayName = "ImageSlide"
        },
        210002: (e, t, o) => {
            "use strict";
            var n = o(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = k;
            var a = n(o(348926)),
                l = o(632157),
                r = o(547979),
                i = o(780549),
                c = o(877171),
                d = o(900316),
                u = o(914368),
                s = o(73225),
                f = o(61740),
                p = o(792882),
                m = o(498703),
                g = o(962260),
                _ = n(o(155105)),
                h = n(o(124928)),
                C = o(548360),
                y = function(e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || "object" != typeof e && "function" != typeof e) return {
                        default: e
                    };
                    var o = v(t);
                    if (o && o.has(e)) return o.get(e);
                    var n = {},
                        a = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var l in e)
                        if ("default" !== l && Object.prototype.hasOwnProperty.call(e, l)) {
                            var r = a ? Object.getOwnPropertyDescriptor(e, l) : null;
                            r && (r.get || r.set) ? Object.defineProperty(n, l, r) : n[l] = e[l]
                        }
                    n.default = e, o && o.set(e, n);
                    return n
                }(o(667294)),
                b = o(839062);

            function v(e) {
                if ("function" != typeof WeakMap) return null;
                var t = new WeakMap,
                    o = new WeakMap;
                return (v = function(e) {
                    return e ? o : t
                })(e)
            }
            const E = o(76672).Mirrored(["Select", "TextMessage"]);

            function k(e) {
                let {
                    onSend: t,
                    origin: o,
                    text: n,
                    title: v
                } = e;
                const [k, P] = (0, b.useFlow)(E.Select), O = (0, y.useRef)([]), S = (0, y.useRef)([]), T = function() {
                    var e = (0, a.default)((function*(e) {
                        e.isUser && e.contact.isContactBlocked && (yield(0, r.unblockContact)(e.contact))
                    }));
                    return function() {
                        return e.apply(this, arguments)
                    }
                }();
                if (null == P.step) return null;
                let w;
                switch (P.step) {
                    case E.Select:
                        {
                            const e = function() {
                                    var e = (0, a.default)((function*(e, t) {
                                        yield T(e), e.active ? c.ComposeBoxActions.paste(e, t) : (e.setComposeContents({
                                            text: t,
                                            timestamp: (0, l.unixTime)()
                                        }), i.Cmd.openChatFromUnread(e).then((t => {
                                            t && c.ComposeBoxActions.focus(e)
                                        })))
                                    }));
                                    return function() {
                                        return e.apply(this, arguments)
                                    }
                                }(),
                                r = function() {
                                    var o = (0, a.default)((function*(o) {
                                        if (S.current = o, 1 === o.length) {
                                            const t = o[0];
                                            yield e(t, n), P.end(), window.innerWidth <= u.LAYOUT_2COLUMNS_MAX_WIDTH && d.DrawerManager.closeDrawerRight()
                                        } else P.push(E.TextMessage);
                                        t && t()
                                    }));
                                    return function() {
                                        return o.apply(this, arguments)
                                    }
                                }();w = y.default.createElement(f.SelectModal, {
                                title: null != v ? v : C.fbt._("Send message to", null, {
                                    hk: "2kkuQs"
                                }),
                                tsNavigationData: h.default.isNewsletter(o) && (0, s.isNewsletterTSLEnabled)() ? {
                                    surface: "channel-forward",
                                    extras: {
                                        channelWid: o
                                    }
                                } : void 0,
                                listType: f.ListType.ChatSelectModal,
                                getInitialItems: () => O.current,
                                maxItems: g.MULTICAST_LIMIT_GLOBAL,
                                onConfirm: r,
                                onCancel: () => P.end(),
                                onSelectionChanged: (e, t, o) => {
                                    O.current = o
                                },
                                singleSelectionFooterType: p.FooterType.NEXT,
                                multipleSelectionFooterType: p.FooterType.NEXT
                            });
                            break
                        }
                    case E.TextMessage:
                        {
                            const e = (e, t, o) => {
                                e.forEach(function() {
                                    var e = (0, a.default)((function*(e) {
                                        yield T(e), i.Cmd.once("ui_idle", (() => {
                                            (0, m.sendTextMsgToChat)(e, t, {
                                                linkPreview: o
                                            })
                                        }))
                                    }));
                                    return function() {
                                        return e.apply(this, arguments)
                                    }
                                }()), P.end()
                            };w = y.default.createElement(_.default, {
                                defaultText: n,
                                title: null != v ? v : C.fbt._("Send message to", null, {
                                    hk: "2kkuQs"
                                }),
                                onSend: (t, o) => e(S.current, t, o),
                                onBack: () => P.pop()
                            });
                            break
                        }
                }
                return y.default.createElement(k, {
                    flow: P
                }, w)
            }
            k.displayName = "SendTextFlow"
        },
        550506: (e, t, o) => {
            "use strict";
            var n = o(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = g;
            var a = n(o(348926)),
                l = n(o(670983)),
                r = n(o(692629)),
                i = o(118612),
                c = o(202391),
                d = o(937001),
                u = o(617425),
                s = o(548360),
                f = function(e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || "object" != typeof e && "function" != typeof e) return {
                        default: e
                    };
                    var o = m(t);
                    if (o && o.has(e)) return o.get(e);
                    var n = {},
                        a = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var l in e)
                        if ("default" !== l && Object.prototype.hasOwnProperty.call(e, l)) {
                            var r = a ? Object.getOwnPropertyDescriptor(e, l) : null;
                            r && (r.get || r.set) ? Object.defineProperty(n, l, r) : n[l] = e[l]
                        }
                    n.default = e, o && o.set(e, n);
                    return n
                }(o(667294)),
                p = o(655241);

            function m(e) {
                if ("function" != typeof WeakMap) return null;
                var t = new WeakMap,
                    o = new WeakMap;
                return (m = function(e) {
                    return e ? o : t
                })(e)
            }

            function g(e) {
                let {
                    chat: t,
                    editable: o,
                    editRestrictionInfo: n,
                    onCancel: m,
                    onOK: g,
                    subtext: _
                } = e;
                const h = (0, p.useModelValues)((0, l.default)(t.groupMetadata, "chat.groupMetadata"), ["subject"]),
                    [C, y] = (0, f.useState)(h.subject),
                    b = function() {
                        var e = (0, a.default)((function*(e) {
                            e.stopPropagation(), e.preventDefault();
                            try {
                                yield g(C, t)
                            } finally {
                                y("")
                            }
                        }));
                        return function() {
                            return e.apply(this, arguments)
                        }
                    }(),
                    v = C.trim().length > 0,
                    E = g ? f.default.createElement(r.default, {
                        testid: "popup-controls-ok",
                        type: "primary",
                        onClick: b,
                        disabled: !v
                    }, s.fbt._("Save", null, {
                        hk: "3wTUdX"
                    })) : null,
                    k = m ? f.default.createElement(r.default, {
                        testid: "popup-controls-cancel",
                        type: "secondary",
                        onClick: e => {
                            e.stopPropagation(), e.preventDefault(), null == m || m()
                        }
                    }, s.fbt._("Cancel", null, {
                        hk: "H0gNq"
                    })) : null,
                    P = f.default.createElement(u.ButtonGroup, {
                        direction: "horizontal",
                        align: "end"
                    }, k, E),
                    O = f.default.createElement(c.RichTextField, {
                        testid: "text-message-modal-text-unput",
                        value: C,
                        maxLength: d.ServerProps.maxSubject,
                        onChange: e => {
                            let {
                                text: t
                            } = e;
                            y(t)
                        },
                        validate: e => !(!e || !e.trim()),
                        supportsEmoji: !0,
                        multiline: !0,
                        spellCheck: !0,
                        showRemaining: !0,
                        focusOnMount: !0,
                        theme: "small",
                        textFormatEnabled: !0,
                        editable: o,
                        editRestrictionInfo: n
                    });
                return f.default.createElement(i.Modal, {
                    title: s.fbt._("Name Your Group", null, {
                        hk: "23gkmL"
                    }),
                    actions: P
                }, _, O)
            }
            g.displayName = "NameGroupModal"
        },
        499717: (e, t, o) => {
            "use strict";
            var n = o(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = w;
            var a = n(o(670983)),
                l = n(o(170206)),
                r = o(396574),
                i = o(660666),
                c = o(23641),
                d = n(o(395767)),
                u = o(714574),
                s = n(o(488922)),
                f = o(526795),
                p = o(114850),
                m = o(21645),
                g = n(o(821384)),
                _ = n(o(949980)),
                h = o(392632),
                C = n(o(330619)),
                y = o(581177),
                b = n(o(124928)),
                v = o(459192),
                E = function(e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || "object" != typeof e && "function" != typeof e) return {
                        default: e
                    };
                    var o = S(t);
                    if (o && o.has(e)) return o.get(e);
                    var n = {},
                        a = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var l in e)
                        if ("default" !== l && Object.prototype.hasOwnProperty.call(e, l)) {
                            var r = a ? Object.getOwnPropertyDescriptor(e, l) : null;
                            r && (r.get || r.set) ? Object.defineProperty(n, l, r) : n[l] = e[l]
                        }
                    n.default = e, o && o.set(e, n);
                    return n
                }(o(667294)),
                k = (n(o(156720)), o(379811)),
                P = o(655241),
                O = n(o(17533));

            function S(e) {
                if ("function" != typeof WeakMap) return null;
                var t = new WeakMap,
                    o = new WeakMap;
                return (S = function(e) {
                    return e ? o : t
                })(e)
            }
            const T = {
                avatarDefaultPSASmall: {
                    borderTopStartRadius: "g9p5wyxn",
                    borderTopEndRadius: "i0tg5vk9",
                    borderBottomEndRadius: "aoogvgrq",
                    borderBottomStartRadius: "o2zu3hjb",
                    width: "qssinsw9",
                    height: "lniyxyh2"
                },
                avatarDefaultPSALarge: {
                    width: "tfhkdmxh",
                    height: "gw1xhhb9"
                }
            };

            function w(e) {
                const {
                    contact: t,
                    getZoomNode: o,
                    animateBorderRadius: n,
                    animateSquircle: S = !1
                } = e, [w, M] = (0, k.useContactValues)(e.contact.id, [u.getFormattedUser, i.getId]), I = (0, P.useModelValues)(e.profilePicThumb, ["imgFull"]).imgFull, [A, j] = (0, E.useState)(I);
                null != I && A !== I && j(I);
                const [L, D] = (0, E.useState)((() => b.default.isPSA(e.contact.id) ? {
                    visibility: "visible",
                    transform: "translateX(0px) translateY(0px) scale(1)",
                    borderRadius: "0%",
                    transition: "transform 500ms cubic-bezier(.1,.82,.25,1),\n                  border-radius 500ms cubic-bezier(.1,.82,.25,1)"
                } : {
                    visibility: "hidden"
                })), [x, N] = (0, E.useState)((() => b.default.isPSA(e.contact.id) ? {
                    width: 640,
                    height: 641
                } : null)), R = (0, E.useRef)(!1), W = (0, E.useRef)(), B = (0, E.useRef)();
                (0, E.useEffect)((() => {
                    const e = B.current;
                    B.current = null, null == e || e()
                }));
                const H = e => {
                        const t = e.currentTarget;
                        N({
                            width: t.naturalWidth,
                            height: t.naturalHeight
                        }), B.current = () => o((e => {
                            const o = t.getBoundingClientRect(),
                                a = e.getBoundingClientRect(),
                                l = a.top - o.top,
                                r = {
                                    visibility: "hidden",
                                    transform: `translateX(${a.left-o.left}px) translateY(${l}px) scale(${e.clientWidth/t.clientWidth})`,
                                    transition: "transform 0s",
                                    borderRadius: void 0
                                };
                            n && (r.borderRadius = "50%"), D(r), B.current = () => {
                                let e = {
                                    transform: "translateX(0px) translateY(0px) scale(1)",
                                    transition: "transform 500ms cubic-bezier(.1,.82,.25,1)"
                                };
                                n && (e = {
                                    transform: "translateX(0px) translateY(0px) scale(1)",
                                    borderRadius: "0%",
                                    transition: "transform 500ms cubic-bezier(.1,.82,.25,1),\n                                       border-radius 500ms cubic-bezier(.1,.82,.25,1)"
                                }), D(e)
                            }
                        }))
                    },
                    F = (0, O.default)((() => {
                        if (R.current) return;
                        let e;
                        if (R.current = !0, o((t => {
                                e = t
                            })), !e) return p.ModalManager.closeMedia();
                        const t = W.current;
                        if (t) {
                            (n || S) && (t.style.transition = (S ? "clip-path" : "border-radius") + " 500ms cubic-bezier(.1,.82,.25,1)", S ? t.style.clipPath = "var(--squircle-polygon)" : t.style.borderRadius = "50%");
                            const o = (0, a.default)(e, "start"),
                                l = t.getBoundingClientRect(),
                                r = o.getBoundingClientRect(),
                                i = r.top - l.top,
                                c = r.left - l.left,
                                d = o.clientWidth / t.clientWidth;
                            (0, C.default)(t, {
                                translateX: [c, 0],
                                translateY: [i, 0],
                                scale: [d, 1]
                            }, {
                                duration: 200,
                                easing: [.1, .82, .25, 1]
                            }).then((() => {
                                p.ModalManager.closeMedia()
                            }))
                        }
                    }));
                let z, U;
                return (0, E.useEffect)((() => {
                    null != I && "" !== I || b.default.isPSA(M) || F()
                }), [I, F, M]), b.default.isPSA(M) ? (z = E.default.createElement(y.WaChatPsaIcon, {
                    iconXstyle: T.avatarDefaultPSALarge
                }), U = E.default.createElement(y.WaChatPsaIcon, {
                    iconXstyle: T.avatarDefaultPSASmall
                })) : A && (z = E.default.createElement(s.default, {
                    src: A,
                    hasPrivacyChecks: !0,
                    onLoad: H,
                    crossOrigin: !1,
                    className: _.default.profileViewerImg
                }), U = E.default.createElement(c.DetailImage, {
                    id: M,
                    size: 40,
                    shape: S ? c.DetailImageShape.Squircle : null
                })), E.default.createElement(h.UIE, {
                    displayName: "PhotoViewer",
                    escapable: !0,
                    requestDismiss: F
                }, E.default.createElement("div", {
                    className: (0, r.classnamesConvertMeToStylexPlease)("overlay", _.default.container),
                    onWheel: e => {
                        Math.abs(e.deltaY) > 3 && F()
                    },
                    onClick: F
                }, E.default.createElement("div", {
                    className: _.default.headerContainer
                }, E.default.createElement("div", {
                    className: _.default.profileThumb
                }, E.default.createElement(l.default, {
                    image: U,
                    theme: "plain",
                    primary: E.default.createElement(m.Name, {
                        contact: t,
                        selectable: !0
                    })
                })), E.default.createElement("div", {
                    className: _.default.mediaPanelTools
                }, E.default.createElement(f.MenuBar, {
                    key: "media-panel-header",
                    theme: "strong"
                }, E.default.createElement(f.MenuBarItem, {
                    testid: "btn-close",
                    icon: E.default.createElement(v.XViewerIcon, null),
                    title: (0, d.default)("Close"),
                    onClick: F
                })))), E.default.createElement("div", {
                    className: _.default.profileContainer,
                    dir: "ltr"
                }, E.default.createElement("div", {
                    className: _.default.media
                }, E.default.createElement(g.default, {
                    type: "scaleDown",
                    size: x
                }, E.default.createElement("div", {
                    className: _.default.profileViewer,
                    ref: W,
                    style: L
                }, z))))))
            }
            w.displayName = "PhotoViewerModal"
        },
        155105: (e, t, o) => {
            "use strict";
            var n = o(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var a = n(o(330383)),
                l = n(o(846870)),
                r = n(o(908081)),
                i = n(o(324093)),
                c = o(626194),
                d = o(305521),
                u = o(81644),
                s = n(o(428543)),
                f = o(118612),
                p = o(202391),
                m = o(435595),
                g = o(634401),
                _ = o(392632),
                h = function(e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || "object" != typeof e && "function" != typeof e) return {
                        default: e
                    };
                    var o = b(t);
                    if (o && o.has(e)) return o.get(e);
                    var n = {},
                        a = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var l in e)
                        if ("default" !== l && Object.prototype.hasOwnProperty.call(e, l)) {
                            var r = a ? Object.getOwnPropertyDescriptor(e, l) : null;
                            r && (r.get || r.set) ? Object.defineProperty(n, l, r) : n[l] = e[l]
                        }
                    n.default = e, o && o.set(e, n);
                    return n
                }(o(667294)),
                C = n(o(156720)),
                y = o(253155);

            function b(e) {
                if ("function" != typeof WeakMap) return null;
                var t = new WeakMap,
                    o = new WeakMap;
                return (b = function(e) {
                    return e ? o : t
                })(e)
            }
            const v = {
                    display: "p357zi0d",
                    flexDirection: "f8m0rgwh",
                    height: "cctpw5f5",
                    paddingBottom: "bxcbqipq",
                    overflowX: "gfz4du6o",
                    overflowY: "r7fjleex",
                    backgroundColor: "rv6u8h8g"
                },
                E = {
                    flexGrow: "ggj6brxn",
                    paddingTop: "mw9hwy0h",
                    paddingEnd: "lk91ofgv",
                    paddingBottom: "bxcbqipq",
                    paddingStart: "s9xya5d7",
                    overflowX: "i44ccddp",
                    overflowY: "ag5g9lrv",
                    backgroundColor: "rv6u8h8g"
                },
                k = {
                    position: "g0rxnol2",
                    zIndex: "nbczt5ty",
                    height: "noboit18",
                    backgroundColor: "gulicvea"
                },
                P = {
                    position: "lhggkp7q",
                    end: "druapeav",
                    bottom: "k2umuq2k"
                },
                O = (e, t) => {
                    const {
                        defaultText: o,
                        title: n,
                        onSend: b,
                        onBack: O
                    } = e, [S, T] = (0, h.useState)(o), w = (0, y.findFirstWebLink)(S), {
                        linkPreview: M,
                        clearLinkPreview: I
                    } = (0, y.useLinkPreview)(w), A = n ? h.default.createElement(d.EmojiText, {
                        text: n,
                        direction: "auto",
                        titlify: !0,
                        ellipsify: !0
                    }) : null, {
                        title: j,
                        canonicalUrl: L,
                        description: D,
                        thumbnail: x
                    } = M || {}, N = M ? h.default.createElement(_.UIE, {
                        displayName: "ComposeBoxLinkPreview",
                        escapable: !0,
                        requestDismiss: I
                    }, h.default.createElement(a.default, {
                        onOmit: I
                    }, h.default.createElement(s.default, {
                        title: j,
                        compose: !0,
                        canonicalUrl: L,
                        description: D,
                        thumbnailJpeg: x,
                        isLoading: !1
                    }))) : null;
                    return h.default.createElement(f.Modal, {
                        ref: t,
                        type: f.ModalTheme.Box
                    }, h.default.createElement(r.default, null, h.default.createElement(c.DrawerHeader, {
                        type: c.DRAWER_HEADER_TYPE.POPUP,
                        onBack: O
                    }, A), h.default.createElement(i.default, null, h.default.createElement(u.HotKeys, {
                        className: (0, C.default)(v)
                    }, h.default.createElement("div", {
                        className: (0, C.default)(E)
                    }, h.default.createElement(p.RichTextField, {
                        testid: "text-message-modal-text-unput",
                        value: S,
                        maxLength: l.default.MAX_TXT_MSG_SIZE,
                        onChange: e => {
                            let {
                                text: t
                            } = e;
                            T(t)
                        },
                        supportsEmoji: !0,
                        multiline: !0,
                        spellCheck: !0,
                        showRemaining: !0,
                        focusOnMount: !0,
                        theme: "small",
                        textFormatEnabled: !0
                    })), N)), h.default.createElement("div", {
                        className: (0, C.default)(k)
                    }, h.default.createElement("div", {
                        className: (0, C.default)(P)
                    }, h.default.createElement(m.Round, {
                        large: !0,
                        onClick: () => {
                            S.length && b(S, M)
                        }
                    }, h.default.createElement(g.SendIcon, {
                        directional: !0
                    }))))))
                };
            var S = (0, h.forwardRef)(O);
            t.default = S
        },
        983098: (e, t, o) => {
            "use strict";
            var n = o(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = s;
            var a = o(435595),
                l = o(220584),
                r = n(o(625903)),
                i = function(e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || "object" != typeof e && "function" != typeof e) return {
                        default: e
                    };
                    var o = d(t);
                    if (o && o.has(e)) return o.get(e);
                    var n = {},
                        a = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var l in e)
                        if ("default" !== l && Object.prototype.hasOwnProperty.call(e, l)) {
                            var r = a ? Object.getOwnPropertyDescriptor(e, l) : null;
                            r && (r.get || r.set) ? Object.defineProperty(n, l, r) : n[l] = e[l]
                        }
                    n.default = e, o && o.set(e, n);
                    return n
                }(o(667294)),
                c = n(o(156720));

            function d(e) {
                if ("function" != typeof WeakMap) return null;
                var t = new WeakMap,
                    o = new WeakMap;
                return (d = function(e) {
                    return e ? o : t
                })(e)
            }
            const u = {
                button: {
                    textAlign: "qfejxiq4"
                },
                label: {
                    marginEnd: "jnwc1y2a",
                    marginBottom: "mpdn4nr2",
                    marginStart: "svoq16ka",
                    fontSize: "ovllcyds",
                    marginTop: "qt60bha0",
                    color: "jq3rn4u7"
                },
                disabled: {
                    opacity: "ge6flnsz"
                }
            };

            function s(e) {
                let {
                    Icon: t,
                    disabled: o,
                    iconHeight: n,
                    iconWidth: d,
                    label: s,
                    onClick: f,
                    testid: p,
                    xstyle: m
                } = e;
                const {
                    isHovered: g,
                    onMouseEnter: _,
                    onMouseLeave: h
                } = function() {
                    const [e, t] = (0, i.useState)(!1), o = (0, i.useCallback)((() => {
                        t(!0)
                    }), []), n = (0, i.useCallback)((() => {
                        t(!1)
                    }), []);
                    return {
                        isHovered: e,
                        onMouseEnter: o,
                        onMouseLeave: n
                    }
                }(), C = i.default.createElement(t, {
                    directional: !0,
                    color: l.SvgColorProp.TEAL,
                    width: d,
                    height: n
                });
                return i.default.createElement("div", {
                    className: (0, c.default)(u.button, o && u.disabled, m),
                    onMouseEnter: _,
                    onMouseLeave: h
                }, i.default.createElement(a.Round, {
                    inverted: !0,
                    onClick: f,
                    disabled: o,
                    testid: p,
                    hideBackground: o || !g
                }, C), i.default.createElement(r.default, {
                    xstyle: u.label,
                    disabled: o,
                    testid: p,
                    onClick: f
                }, s))
            }
            s.displayName = "ActionButton"
        },
        609694: (e, t, o) => {
            "use strict";
            var n = o(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.CartInterstitialGraphicIcon = function(e) {
                var t;
                const {
                    iconXstyle: o,
                    height: n,
                    width: s,
                    viewBox: f
                } = e, p = (0, l.default)(e, d);
                let m;
                if (f) {
                    const {
                        x: e = 0,
                        y: t = 0,
                        width: o = 0,
                        height: n = 0
                    } = f;
                    m = [e, t, o, n].join(" ")
                }
                let g = 116,
                    _ = 117;
                null == n && null == s || (g = n, _ = s);
                return c.default.createElement(r.BaseSvgSpan, (0, a.default)({
                    name: u
                }, p), c.default.createElement("svg", {
                    viewBox: null !== (t = m) && void 0 !== t ? t : "0 0 117 116",
                    height: g,
                    width: _,
                    preserveAspectRatio: "xMidYMid meet",
                    className: (0, i.default)(o),
                    fill: "none"
                }, c.default.createElement("title", null, u), c.default.createElement("path", {
                    opacity: .15,
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M10.7538 28.8194L1.11733 25.7279L10.7538 22.6365L13.8452 13L16.9367 22.6365L26.5732 25.7279L16.9367 28.8194L13.8453 38.4558L10.7538 28.8194Z",
                    fill: "currentColor"
                }), c.default.createElement("path", {
                    opacity: .6,
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M85.568 105.137L78.0729 102.733L85.568 100.329L87.9724 92.8335L90.3769 100.329L97.8719 102.733L90.3769 105.137L87.9724 112.632L85.568 105.137Z",
                    fill: "currentColor"
                }), c.default.createElement("path", {
                    opacity: .38,
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M18.1989 86.9097L13.3807 85.364L18.1989 83.8182L19.7447 79L21.2904 83.8182L26.1086 85.364L21.2904 86.9097L19.7447 91.7279L18.1989 86.9097Z",
                    fill: "currentColor"
                }), c.default.createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M94.8452 58C94.8452 77.8823 78.7274 94 58.8452 94C38.9629 94 22.8452 77.8823 22.8452 58C22.8452 38.1177 38.9629 22 58.8452 22C66.1124 22 72.8767 24.1533 78.5348 27.8568C77.4618 29.6538 76.8452 31.7549 76.8452 34C76.8452 40.6274 82.2178 46 88.8452 46C90.1496 46 91.4054 45.7919 92.5812 45.407C94.0449 49.3267 94.8452 53.5699 94.8452 58ZM95 32.5H90.5V28H87.5V32.5H83V35.5H87.5V40H90.5V35.5H95V32.5ZM48.3602 70C48.3602 68.35 49.6952 67 51.3452 67C52.9952 67 54.3452 68.35 54.3452 70C54.3452 71.65 52.9952 73 51.3452 73C49.6952 73 48.3602 71.65 48.3602 70ZM42.3452 46V43H47.2502L48.6602 46H70.8452C71.6702 46 72.3452 46.675 72.3452 47.5C72.3452 47.755 72.2852 48.01 72.1652 48.22L66.7952 57.955C66.2852 58.885 65.2952 59.5 64.1702 59.5H52.9952L51.6452 61.945L51.6002 62.125C51.6002 62.335 51.7652 62.5 51.9752 62.5H69.3452V65.5H51.3452C49.6952 65.5 48.3452 64.15 48.3452 62.5C48.3452 61.975 48.4802 61.48 48.7202 61.06L50.7452 57.385L45.3452 46H42.3452ZM63.3602 70C63.3602 68.35 64.6952 67 66.3452 67C67.9952 67 69.3452 68.35 69.3452 70C69.3452 71.65 67.9952 73 66.3452 73C64.6952 73 63.3602 71.65 63.3602 70Z",
                    fill: "currentColor"
                })))
            };
            var a = n(o(967154)),
                l = n(o(506479)),
                r = o(220584),
                i = n(o(156720)),
                c = n(o(667294));
            const d = ["iconXstyle", "height", "width", "viewBox"],
                u = "cart-interstitial-graphic"
        },
        851713: (e, t, o) => {
            "use strict";
            o.r(t), o.d(t, {
                default: () => n
            });
            const n = {
                carousel: "Zk5oU",
                contentContainer: "_2WuMQ",
                slidesContainer: "_3wjDO",
                loaded: "_2mJIF",
                fadeIn: "_1L5pR",
                spinnerContainer: "_2T83U",
                spinner: "_1AH7f"
            }
        },
        897679: (e, t, o) => {
            "use strict";
            o.r(t), o.d(t, {
                default: () => n
            });
            const n = {
                slide: "_1Z_Af",
                slideInnerContainer: "_1pPlm",
                image: "_3CLBm"
            }
        },
        949980: (e, t, o) => {
            "use strict";
            o.r(t), o.d(t, {
                default: () => n
            });
            const n = {
                mediaPanelTools: "_2oUO5",
                profileThumb: "_21bjq",
                profileContainer: "_21YBx",
                media: "_2cf2X",
                profileViewer: "QIsaf",
                profileViewerImg: "_1cXba",
                container: "_3_NRW",
                "media-viewer-animate": "MqTIU",
                mediaViewerAnimate: "MqTIU",
                headerContainer: "_Qn3D"
            }
        }
    }
]);
//# sourceMappingURL=https://web.whatsapp.com/lazy_loaded_high_priority_components~lazy_loaded_low_priority_components.5761e81faaa5d77e473d.js.map