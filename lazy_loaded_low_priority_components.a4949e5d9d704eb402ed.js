/*! Copyright (c) 2024 WhatsApp Inc. All Rights Reserved. */
(self.webpackChunkwhatsapp_web_client = self.webpackChunkwhatsapp_web_client || []).push([
    [2790], {
        340639: (e, t) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.ORDER_SIGNAL_TYPE = void 0;
            const a = Object.freeze({
                CREATED: 0,
                UPDATED: 1
            });
            t.ORDER_SIGNAL_TYPE = a
        },
        94153: (e, t) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.ORDER_STATUS = void 0;
            const a = Object.freeze({
                PROCESSING: 0,
                SHIPPED: 1,
                COMPLETED: 2,
                CANCELLED: 3,
                PENDING: 4,
                PARTIALLY_SHIPPED: 5
            });
            t.ORDER_STATUS = a
        },
        628264: (e, t, a) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.CtwaOrderSignalWamEvent = void 0;
            var r = a(901032),
                n = a(340639),
                l = a(94153);
            const {
                BOOLEAN: o,
                INTEGER: i,
                STRING: u
            } = r.TYPES, d = (0, r.defineEvents)({
                CtwaOrderSignal: [4264, {
                        ctwaOrderSignalVersion: [1, i],
                        deepLinkConversionData: [2, u],
                        deepLinkConversionSource: [3, u],
                        eventSharingSettingEnabled: [4, o],
                        globalSharingSettingEnabled: [5, o],
                        orderPaid: [8, o],
                        orderSignalType: [6, n.ORDER_SIGNAL_TYPE],
                        orderStatus: [7, l.ORDER_STATUS]
                    },
                    [1, 1, 1], "regular"
                ]
            });
            t.CtwaOrderSignalWamEvent = d
        },
        682212: (e, t, a) => {
            "use strict";
            var r = a(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var n = r(a(81109)),
                l = a(887341),
                o = a(72696),
                i = r(a(883891)),
                u = a(317285),
                d = a(628264),
                s = a(620982),
                c = a(340639),
                f = a(94153);
            const m = e => {
                const t = u.CTWADataSharingModel.getValue();
                let a;
                return a = t === l.ENUM_FALSE_NOTSET_TRUE.true ? {
                    globalSharingSettingEnabled: !0,
                    eventSharingSettingEnabled: e
                } : t === l.ENUM_FALSE_NOTSET_TRUE.false ? {
                    globalSharingSettingEnabled: !1
                } : null, a
            };
            var p = {
                markOrderAsUpdatedStatusAction: (e, t, a, r) => {
                    const l = (e => {
                        switch (e) {
                            case s.OrderStatus.Processing:
                                return f.ORDER_STATUS.PROCESSING;
                            case s.OrderStatus.Shipped:
                                return f.ORDER_STATUS.SHIPPED;
                            case s.OrderStatus.Complete:
                                return f.ORDER_STATUS.COMPLETED;
                            case s.OrderStatus.Canceled:
                                return f.ORDER_STATUS.CANCELLED;
                            case s.OrderStatus.Pending:
                            case s.OrderStatus.PartiallyShipped:
                            case s.OrderStatus.PreparingToShip:
                            case s.OrderStatus.PaymentRequested:
                            case s.OrderStatus.Delivered:
                                return null
                        }
                    })(a);
                    if (null == l) return;
                    const u = i.default.getCTWAEligibilityFromChat(e);
                    if (null == u || !(0, o.smbDataSharingConsentEnabled)()) return;
                    const p = {
                        ctwaOrderSignalVersion: 1,
                        deepLinkConversionData: u.data,
                        deepLinkConversionSource: u.source,
                        orderPaid: r,
                        orderSignalType: c.ORDER_SIGNAL_TYPE.UPDATED,
                        orderStatus: l
                    };
                    new d.CtwaOrderSignalWamEvent((0, n.default)((0, n.default)({}, p), m(t))).commit()
                },
                markOrderAsCreatedAction: (e, t) => {
                    const a = i.default.getCTWAEligibilityFromChat(e);
                    if (null == a || !(0, o.smbDataSharingConsentEnabled)()) return;
                    const r = {
                        ctwaOrderSignalVersion: 1,
                        deepLinkConversionData: a.data,
                        deepLinkConversionSource: a.source,
                        orderPaid: !1,
                        orderSignalType: c.ORDER_SIGNAL_TYPE.CREATED,
                        orderStatus: f.ORDER_STATUS.PROCESSING
                    };
                    new d.CtwaOrderSignalWamEvent((0, n.default)((0, n.default)({}, r), m(t))).commit()
                }
            };
            t.default = p
        },
        936734: (e, t, a) => {
            "use strict";
            var r = a(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = C;
            var n = a(887341),
                l = a(468926),
                o = a(306703),
                i = a(317285),
                u = r(a(298188)),
                d = a(900316),
                s = a(690495),
                c = a(114850),
                f = r(a(203293)),
                m = a(64123),
                p = a(180519),
                g = a(676345),
                h = a(773693),
                b = a(548360),
                y = function(e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || "object" != typeof e && "function" != typeof e) return {
                        default: e
                    };
                    var a = v(t);
                    if (a && a.has(e)) return a.get(e);
                    var r = {},
                        n = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var l in e)
                        if ("default" !== l && Object.prototype.hasOwnProperty.call(e, l)) {
                            var o = n ? Object.getOwnPropertyDescriptor(e, l) : null;
                            o && (o.get || o.set) ? Object.defineProperty(r, l, o) : r[l] = e[l]
                        }
                    r.default = e, a && a.set(e, r);
                    return r
                }(a(667294)),
                E = r(a(156720)),
                S = r(a(895851));

            function v(e) {
                if ("function" != typeof WeakMap) return null;
                var t = new WeakMap,
                    a = new WeakMap;
                return (v = function(e) {
                    return e ? a : t
                })(e)
            }
            const _ = {
                upsell: {
                    lineHeight: "togicx6b",
                    overflowX: "gfz4du6o",
                    overflowY: "r7fjleex",
                    wordWrap: "b6f1x6w7"
                },
                learnMore: {
                    cursor: "ajgl1lbb"
                },
                themeOrderCreate: {
                    backgroundColor: "f6ipylw5"
                },
                themeLabelsOptOut: {
                    borderTopWidth: "gofg5ll1",
                    borderTopStyle: "d1poss59",
                    borderTopColor: "gclmp953"
                }
            };

            function O(e) {
                let {
                    children: t,
                    entryPoint: a
                } = e;
                return y.default.createElement(o.SelectableLink, {
                    className: (0, E.default)(_.learnMore),
                    id: "data-sharing-learn-more-link",
                    selectable: !0,
                    onClick: () => (e => {
                        c.ModalManager.close(), d.DrawerManager.openDrawerLeft(y.default.createElement(f.default, {
                            onClose: () => d.DrawerManager.closeDrawerLeft(),
                            entrypoint: e
                        }))
                    })(a)
                }, t)
            }

            function C(e) {
                let {
                    checkboxValue: t,
                    onCheckboxToggle: a,
                    theme: r
                } = e;
                const o = (0, S.default)(),
                    [d, c] = (0, y.useState)(null);
                if ((0, y.useEffect)((() => ((0, m.getSMBDataSharingSettingAction)().then((e => {
                        o.aborted || (c(e), i.CTWADataSharingModel.subscribeForUpdates(c))
                    })), () => {
                        i.CTWADataSharingModel.unsubscribeFromUpdates(c)
                    })), [o.aborted]), null == d || d === n.ENUM_FALSE_NOTSET_TRUE.notset) return null;
                let f;
                "order-create" === r ? f = [_.themeOrderCreate, g.uiPadding.start16, g.uiPadding.top16, g.uiPadding.bottom32] : "order-update" === r ? f = [g.uiPadding.start28, g.uiPadding.top48, g.uiPadding.bottom16] : "labels-opt-out" === r && (f = [_.themeLabelsOptOut, g.uiMargin.top24, g.uiPadding.top12, g.uiPadding.start30]);
                const E = d === n.ENUM_FALSE_NOTSET_TRUE.true,
                    v = d === n.ENUM_FALSE_NOTSET_TRUE.false && u.default.isUpsellEnabled();
                let C;
                C = "labels-opt-out" === r ? h.SMB_DATA_SHARING_CONSENT_SETTING_ENTRY_POINT.ENTRY_POINT_LABELS_SCREEN : h.SMB_DATA_SHARING_CONSENT_SETTING_ENTRY_POINT.ENTRY_POINT_ORDER_SCREEN;
                const P = "labels-opt-out" === r ? b.fbt._("Share this label update with Meta. {=m1}", [b.fbt._implicitParam("=m1", y.default.createElement(O, {
                    entryPoint: C
                }, b.fbt._("Learn more", null, {
                    hk: "3DEWAO"
                })))], {
                    hk: "3m5DxC"
                }) : b.fbt._("Share this order status with Meta. {=m1}", [b.fbt._implicitParam("=m1", y.default.createElement(O, {
                    entryPoint: C
                }, b.fbt._("Learn more", null, {
                    hk: "ScE4C"
                })))], {
                    hk: "2JjUWa"
                });
                return y.default.createElement(s.FlexRow, {
                    align: "center",
                    xstyle: f
                }, v ? y.default.createElement(p.TextDiv, {
                    size: "12",
                    color: "muted",
                    xstyle: [g.uiMargin.bottom8, _.upsell]
                }, b.fbt._("Enabling Ads Data Sharing can help you reach the right audience on Facebook and Instagram. {=m1}", [b.fbt._implicitParam("=m1", y.default.createElement(O, {
                    entryPoint: C
                }, b.fbt._("Go to settings", null, {
                    hk: "Wi75v"
                })))], {
                    hk: "d6FtL"
                })) : null, E ? y.default.createElement(y.default.Fragment, null, y.default.createElement(l.CheckBox, {
                    checked: t,
                    onChange: a
                }), y.default.createElement(p.TextDiv, {
                    size: "12",
                    color: "muted",
                    xstyle: g.uiMargin.start16
                }, P)) : null)
            }
            O.displayName = "OpenSettingsLinkText", C.displayName = "OrderDataSharingOptOutOrUpsell"
        },
        919175: (e, t, a) => {
            "use strict";
            var r = a(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.sendOrderDetailsMessageAsMerchant = function() {
                return w.apply(this, arguments)
            }, t.sendOrderPaymentMethodUpdate = function() {
                return A.apply(this, arguments)
            }, t.sendOrderPaymentStatusMessageAsMerchant = function() {
                return I.apply(this, arguments)
            }, t.sendOrderStatusMessageAsMerchant = function() {
                return x.apply(this, arguments)
            };
            var n = r(a(81109)),
                l = r(a(348926)),
                o = a(632157),
                i = a(402994),
                u = a(28039),
                d = function(e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || "object" != typeof e && "function" != typeof e) return {
                        default: e
                    };
                    var a = P(t);
                    if (a && a.has(e)) return a.get(e);
                    var r = {},
                        n = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var l in e)
                        if ("default" !== l && Object.prototype.hasOwnProperty.call(e, l)) {
                            var o = n ? Object.getOwnPropertyDescriptor(e, l) : null;
                            o && (o.get || o.set) ? Object.defineProperty(r, l, o) : r[l] = e[l]
                        }
                    r.default = e, a && a.set(e, r);
                    return r
                }(a(395557)),
                s = r(a(873969)),
                c = a(713464),
                f = r(a(753110)),
                m = r(a(182394)),
                p = r(a(756680)),
                g = r(a(565754)),
                h = a(373070),
                b = a(620982),
                y = a(918602),
                E = a(693741),
                S = r(a(369138)),
                v = a(459857),
                _ = r(a(724996)),
                O = a(669050),
                C = r(a(556869));

            function P(e) {
                if ("function" != typeof WeakMap) return null;
                var t = new WeakMap,
                    a = new WeakMap;
                return (P = function(e) {
                    return e ? a : t
                })(e)
            }

            function T(e, t) {
                var a, r;
                if (null == t) return "";
                const n = c.CatalogCollection.get((0, O.createWid)(e)),
                    l = null == n ? void 0 : n.productCollection.get(t),
                    o = null == l || null === (a = l.getProductImageCollectionHead()) || void 0 === a ? void 0 : a.mediaData.preview;
                return o instanceof p.default && null !== (r = o.getBase64()) && void 0 !== r ? r : ""
            }

            function M() {
                return k.apply(this, arguments)
            }

            function k() {
                return (k = (0, l.default)((function*(e) {
                    const {
                        caption: t,
                        chat: a,
                        nativeFlowName: r,
                        buttonParamsJson: l,
                        errorMessage: u,
                        thumbnail: d,
                        buttonName: s,
                        contextInfo: c
                    } = e, f = (0, v.getMaybeMeUser)(), p = d ? {
                        title: void 0,
                        subtitle: void 0,
                        mediaType: void 0,
                        hasMediaAttachment: !1,
                        thumbnail: d
                    } : void 0, b = (0, n.default)({
                        type: h.MSG_TYPE.INTERACTIVE,
                        ack: i.ACK.CLOCK,
                        from: f,
                        id: new g.default({
                            from: f,
                            to: a.id,
                            id: yield g.default.newId(), participant: void 0, selfDir: "out"
                        }),
                        local: !0,
                        isNewMsg: !0,
                        self: "out",
                        t: (0, o.unixTime)(),
                        to: a.id,
                        caption: t,
                        nativeFlowName: r,
                        interactiveHeader: p,
                        interactiveType: m.default.NATIVE_FLOW,
                        interactivePayload: {
                            buttons: [{
                                name: s,
                                buttonParamsJson: l
                            }],
                            messageVersion: 1
                        }
                    }, c);
                    if ((0, v.isMeAccount)(a.id)) try {
                        return void(yield(0, y.addAndSendMsgToChat)(a, b)[0])
                    } catch (e) {
                        throw __LOG__(3)
                        `${u}: ${e}`, e
                    }
                    try {
                        const e = yield(0, y.addAndSendMsgToChat)(a, b)[1];
                        if (!e || e.messageSendResult !== E.SendMsgResult.OK) throw (0, C.default)("Order message SendMsgResult failure status")
                    } catch (e) {
                        throw __LOG__(3)
                        `${u}: ${e}`, e
                    }
                }))).apply(this, arguments)
            }

            function w() {
                return (w = (0, l.default)((function*(e) {
                    var t;
                    const {
                        order: a,
                        chat: r,
                        orderNote: l,
                        discount: o,
                        shipping: i,
                        tax: c,
                        total: m,
                        offset: p
                    } = e, g = null === (t = a.orderItemCollection.head()) || void 0 === t ? void 0 : t.id, h = T(a.sellerJid, g), y = a.orderItemCollection.map((e => ({
                        retailer_id: e.id,
                        name: e.name,
                        amount: {
                            value: e.price,
                            offset: p
                        },
                        quantity: e.quantity,
                        isCustomItem: e.isCustomItem,
                        isQuantitySet: e.isQuantitySet
                    })));
                    let E = {
                        reference_id: (0, s.default)(),
                        type: "physical-goods",
                        payment_configuration: "merchant_categorization_code",
                        currency: a.currency,
                        total_amount: {
                            value: m,
                            offset: p
                        },
                        order_request_id: a.id,
                        order: {
                            status: (0, b.getDefaultOrderStatus)(),
                            items: y,
                            subtotal: {
                                value: Number(a.subtotal),
                                offset: p
                            },
                            tax: null == c ? void 0 : {
                                value: c,
                                offset: p
                            },
                            shipping: null == i ? void 0 : {
                                value: i,
                                offset: p
                            },
                            discount: null == o ? void 0 : {
                                value: o,
                                offset: p
                            }
                        }
                    };
                    if ((0, u.isOrderDetailsPaymentInstructionsSyncEnabled)() && _.default.isCPIInfoValid()) {
                        const e = _.default.getCPIInfo();
                        E = (0, n.default)((0, n.default)({}, E), {}, {
                            external_payment_configurations: [{
                                type: "payment_instruction",
                                payment_instruction: e
                            }]
                        })
                    }
                    if ((0, u.isCustomPaymentMethodsSyncEnabled)()) {
                        const e = S.default.getPIX();
                        null != e && (E = (0, n.default)((0, n.default)({}, E), {}, {
                            payment_settings: [{
                                type: d.PaymentSettingType.PIX_STATIC_CODE,
                                [d.PaymentSettingType.PIX_STATIC_CODE]: {
                                    merchant_name: e.display_name,
                                    key: e.key,
                                    key_type: e.key_type
                                }
                            }]
                        }))
                    }
                    yield M({
                        caption: l,
                        chat: r,
                        nativeFlowName: f.default.ORDER_DETAILS,
                        buttonParamsJson: d.stringify(E),
                        errorMessage: "Order message send to chat failure",
                        thumbnail: h,
                        buttonName: "review_and_pay"
                    })
                }))).apply(this, arguments)
            }

            function x() {
                return (x = (0, l.default)((function*(e) {
                    const {
                        chat: t,
                        sellerJid: a,
                        orderInfo: r,
                        orderNote: n,
                        orderStatus: l,
                        offset: o,
                        paymentStatus: i,
                        paymentMethod: u
                    } = e, s = r.items, c = r.referenceId, m = T(a, s[0].id), p = D(r, l, c, o, i, u), g = (0, b.findOrderDetailsMessage)(t, c), h = null == g ? void 0 : g.msgContextInfo(t.id);
                    yield M({
                        caption: n,
                        chat: t,
                        nativeFlowName: f.default.ORDER_STATUS,
                        buttonParamsJson: d.stringifyPaymentStatus(p),
                        errorMessage: "Order message sent to chat failure",
                        thumbnail: m,
                        buttonName: "review_order",
                        contextInfo: h
                    })
                }))).apply(this, arguments)
            }
            const D = (e, t, a, r, l, i) => {
                const u = e.items.map((e => {
                    var t;
                    return {
                        retailer_id: e.id,
                        name: e.name,
                        amount: {
                            value: null !== (t = e.amount) && void 0 !== t ? t : 0,
                            offset: r
                        },
                        quantity: e.quantity,
                        isCustomItem: e.isCustomItem,
                        isQuantitySet: e.isQuantitySet
                    }
                }));
                let d = {
                    reference_id: a,
                    payment_timestamp: (0, o.unixTime)(),
                    currency: e.currency,
                    payment_status: l,
                    total_amount: {
                        value: e.totalAmount,
                        offset: r
                    },
                    order: {
                        status: t,
                        items: u,
                        subtotal: {
                            value: Number(e.subtotal),
                            offset: r
                        },
                        tax: null == e.tax ? void 0 : {
                            value: e.tax,
                            offset: r
                        },
                        shipping: null == e.shipping ? void 0 : {
                            value: e.shipping,
                            offset: r
                        },
                        discount: null == e.discount ? void 0 : {
                            value: e.discount,
                            offset: r
                        }
                    }
                };
                return null != i && (d = (0, n.default)((0, n.default)({}, d), {}, {
                    payment_method: i
                })), d
            };

            function I() {
                return (I = (0, l.default)((function*(e) {
                    var t;
                    const {
                        chat: a,
                        orderInfo: r,
                        orderStatus: n,
                        sellerJid: l,
                        offset: o,
                        orderNote: i,
                        paymentStatus: u,
                        paymentMethod: s
                    } = e, c = r.referenceId, m = T(l, null === (t = r.items.at(0)) || void 0 === t ? void 0 : t.id), p = D(r, n, c, o, u, s), g = (0, b.findOrderDetailsMessage)(a, c), h = null == g ? void 0 : g.msgContextInfo(a.id);
                    yield M({
                        caption: i,
                        chat: a,
                        nativeFlowName: f.default.PAYMENT_STATUS,
                        buttonParamsJson: d.stringifyPaymentStatus(p),
                        errorMessage: "Order message send to chat failure",
                        thumbnail: m,
                        buttonName: "payment_status",
                        contextInfo: h
                    })
                }))).apply(this, arguments)
            }

            function A() {
                return (A = (0, l.default)((function*(e) {
                    var t;
                    const {
                        chat: a,
                        orderInfo: r,
                        orderStatus: n,
                        sellerJid: l,
                        offset: o,
                        paymentMethod: i,
                        paymentStatus: u
                    } = e, s = r.referenceId, c = T(l, null === (t = r.items.at(0)) || void 0 === t ? void 0 : t.id), m = D(r, n, s, o, u, i), p = (0, b.findOrderDetailsMessage)(a, s), g = null == p ? void 0 : p.msgContextInfo(a.id);
                    yield M({
                        chat: a,
                        caption: null,
                        nativeFlowName: f.default.PAYMENT_METHOD,
                        buttonParamsJson: d.stringifyPaymentStatus(m),
                        errorMessage: "Order message send to chat failure",
                        thumbnail: c,
                        buttonName: "payment_method",
                        contextInfo: g
                    })
                }))).apply(this, arguments)
            }
        },
        305160: (e, t, a) => {
            "use strict";
            var r = a(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = d;
            var n = a(431037),
                l = r(a(397778)),
                o = a(548360),
                i = r(a(667294));
            r(a(156720));
            const u = {
                deleteIcon: {
                    color: "svlsagor",
                    ":hover": {
                        color: "kbf8aj4n"
                    }
                }
            };

            function d(e) {
                let {
                    onClick: t
                } = e;
                return i.default.createElement(l.default, {
                    "aria-label": o.fbt._("Remove from cart", null, {
                        hk: "9voCj"
                    }),
                    Icon: n.DeleteIcon,
                    title: o.fbt._("Remove from cart", null, {
                        hk: "9voCj"
                    }),
                    xstyle: u.deleteIcon,
                    onClick: t
                })
            }
            d.displayName = "DeleteIcon"
        },
        359162: (e, t, a) => {
            "use strict";
            var r = a(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.AddOrderItem = i;
            var n = r(a(170206)),
                l = a(114459),
                o = r(a(667294));

            function i(e) {
                let {
                    onClick: t,
                    title: a
                } = e;
                return o.default.createElement(n.default, {
                    testid: "add-order-item-button",
                    image: o.default.createElement(l.AddItemIcon, null),
                    primary: a,
                    theme: "add-order-item",
                    onClick: t
                })
            }
            i.displayName = "AddOrderItem"
        },
        730952: (e, t, a) => {
            "use strict";
            var r = a(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.CatalogProductPrice = m, t.PriceStage = void 0;
            var n = a(27578),
                l = a(690495),
                o = r(a(169256)),
                i = r(a(496254)),
                u = a(676345),
                d = a(548360),
                s = r(a(667294)),
                c = r(a(156720));
            const f = a(76672).Mirrored(["Readonly", "EditableBlank", "EditableFilled", "Editing"]);

            function m(e) {
                let {
                    currency: t,
                    onEnter: a,
                    onPriceChange: r,
                    onPriceStageChange: m,
                    orderItem: p,
                    price: g,
                    priceStage: h
                } = e;
                switch (h) {
                    case f.Editing:
                        return s.default.createElement("div", {
                            role: "textbox",
                            onClick: e => e.stopPropagation()
                        }, s.default.createElement(l.FlexRow, {
                            align: "center"
                        }, s.default.createElement("span", {
                            className: (0, c.default)(u.uiPadding.end3)
                        }, (0, n.formatAmount1000ToParts)(t, 0).symbol), s.default.createElement(o.default, {
                            currency: t,
                            value: null != g ? String(g / 1e3) : "",
                            onSave: e => {
                                m(f.EditableFilled), r((0, n.valueFromString)(t, e))
                            },
                            onCancel: () => {
                                m(null == g ? f.EditableBlank : f.EditableFilled)
                            }
                        })));
                    case f.EditableFilled:
                        return s.default.createElement("div", {
                            role: "button",
                            className: (0, c.default)(i.default.clickableText),
                            onClick: e => {
                                m(f.Editing), e.stopPropagation()
                            }
                        }, (0, n.formatAmount1000)(t, Number(g)));
                    case f.EditableBlank:
                        return s.default.createElement("span", {
                            role: "button",
                            className: (0, c.default)(i.default.clickableText),
                            onClick: e => {
                                m(f.Editing), e.stopPropagation()
                            }
                        }, d.fbt._("Enter price", null, {
                            hk: "1Bd2B6"
                        }));
                    default:
                        return s.default.createElement("div", null, (0, n.formatAmount1000)(t, p.price))
                }
            }
            t.PriceStage = f, m.displayName = "CatalogProductPrice"
        },
        169256: (e, t, a) => {
            "use strict";
            var r = a(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = p;
            var n = a(27578),
                l = a(353950),
                o = a(238977),
                i = a(202391),
                u = a(548360),
                d = function(e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || "object" != typeof e && "function" != typeof e) return {
                        default: e
                    };
                    var a = c(t);
                    if (a && a.has(e)) return a.get(e);
                    var r = {},
                        n = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var l in e)
                        if ("default" !== l && Object.prototype.hasOwnProperty.call(e, l)) {
                            var o = n ? Object.getOwnPropertyDescriptor(e, l) : null;
                            o && (o.get || o.set) ? Object.defineProperty(r, l, o) : r[l] = e[l]
                        }
                    r.default = e, a && a.set(e, r);
                    return r
                }(a(667294)),
                s = r(a(156720));

            function c(e) {
                if ("function" != typeof WeakMap) return null;
                var t = new WeakMap,
                    a = new WeakMap;
                return (c = function(e) {
                    return e ? a : t
                })(e)
            }

            function f(e, t) {
                if (null == e || !e.length || !(0, n.validatePriceString)(t, e)) return u.fbt._("Enter a valid price", null, {
                    hk: "1WZB7p"
                });
                return (0, n.valueFromString)(t, e) / o.DEFAULT_OFFSET < 0 ? u.fbt._("Enter a positive price", null, {
                    hk: "1goGAM"
                }) : void 0
            }
            const m = {
                textAlign: "ljrqcn24",
                width: "h4dw90qs",
                overflowX: "gfz4du6o",
                overflowY: "r7fjleex",
                marginTop: "obt84bhp",
                paddingEnd: "fhfm09ip"
            };

            function p(e) {
                let {
                    currency: t,
                    onCancel: a,
                    onSave: r,
                    value: n
                } = e;
                const [o, c] = (0, d.useState)(null), [p, g] = (0, d.useState)(n);
                return (0, l.useShowToastErrors)({
                    productPriceError: o
                }), d.default.createElement("div", {
                    className: (0, s.default)(m)
                }, d.default.createElement(i.RichTextField, {
                    managed: !0,
                    constrainedWidth: !0,
                    hideFloatingLabel: !0,
                    focusOnMount: !0,
                    editable: !0,
                    lockable: !0,
                    startActive: !0,
                    placeholder: u.fbt._("Price", null, {
                        hk: "3OsKht"
                    }),
                    value: p,
                    theme: "default",
                    maxLength: 12,
                    customStyleThemes: ["disabledLabel", "noErrorInfo"],
                    testid: "order-detail-amount-input",
                    validate: e => {
                        const a = f(e, t);
                        return c(a), !a
                    },
                    onChange: e => {
                        const a = e.text;
                        g(a), c(f(a, t))
                    },
                    onSave: () => {
                        r(p)
                    },
                    onCancel: a,
                    error: o
                }))
            }
            p.displayName = "OrderDetailAmountInput"
        },
        353950: (e, t, a) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.additionalChargeErrorHandler = function(e) {
                let {
                    label: t,
                    currency: a,
                    fieldType: o,
                    maxFlatValue: i,
                    enablePercentValueCheck: u,
                    value: d
                } = e;
                if (!(0, n.validatePriceString)(a, d)) return c();
                const s = (0, n.valueFromString)(a, d) / l.DEFAULT_OFFSET;
                if (s < 0) return f();
                if (o === l.PERCENTAGE_SYMBOL) {
                    if (Boolean(u) && s > 100) return m(null != t ? t : "")
                } else if ((0, r.isNumber)(i) && s > i) return p(null != t ? t : "");
                return ""
            }, t.errorMessageBigPercentageValue = t.errorMessageBigFlatValue = void 0, t.getOrderDetailInvalidNumberErrorMessage = c, t.getOrderDetailNegativeNumberErrorMessage = f, t.useShowToastErrors = function(e) {
                (0, d.useEffect)((() => {
                    for (const t in e) {
                        const a = e[t];
                        null != a && i.ToastManager.open(d.default.createElement(o.Toast, {
                            duration: 1e4,
                            id: t + a.toString(),
                            msg: a,
                            action: {
                                actionText: u.fbt._("OKAY", null, {
                                    hk: "3RIrWh"
                                }),
                                dismiss: !0,
                                theme: "success"
                            }
                        }))
                    }
                }), [e])
            };
            var r = a(724976),
                n = a(27578),
                l = a(238977),
                o = a(625786),
                i = a(390737),
                u = a(548360),
                d = function(e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || "object" != typeof e && "function" != typeof e) return {
                        default: e
                    };
                    var a = s(t);
                    if (a && a.has(e)) return a.get(e);
                    var r = {},
                        n = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var l in e)
                        if ("default" !== l && Object.prototype.hasOwnProperty.call(e, l)) {
                            var o = n ? Object.getOwnPropertyDescriptor(e, l) : null;
                            o && (o.get || o.set) ? Object.defineProperty(r, l, o) : r[l] = e[l]
                        }
                    r.default = e, a && a.set(e, r);
                    return r
                }(a(667294));

            function s(e) {
                if ("function" != typeof WeakMap) return null;
                var t = new WeakMap,
                    a = new WeakMap;
                return (s = function(e) {
                    return e ? a : t
                })(e)
            }

            function c() {
                return u.fbt._("Enter a valid number", null, {
                    hk: "34R7Hv"
                })
            }

            function f() {
                return u.fbt._("Enter a positive number", null, {
                    hk: "3UMjdw"
                })
            }
            const m = e => u.fbt._("{input_label} cannot be more than 100%", [u.fbt._param("input_label", e)], {
                hk: "1WMDbw"
            });
            t.errorMessageBigPercentageValue = m;
            const p = e => u.fbt._("{input_label} cannot be more than subtotal", [u.fbt._param("input_label", e)], {
                hk: "3IRSWP"
            });
            t.errorMessageBigFlatValue = p
        },
        453823: (e, t, a) => {
            "use strict";
            var r = a(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = O;
            var n = r(a(967154)),
                l = r(a(81109)),
                o = a(72696),
                i = r(a(305160)),
                u = r(a(170206)),
                d = r(a(763879)),
                s = a(103440),
                c = a(690495),
                f = a(114850),
                m = a(359162),
                p = a(730952),
                g = a(114459),
                h = a(255695),
                b = a(676345),
                y = a(548360),
                E = function(e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || "object" != typeof e && "function" != typeof e) return {
                        default: e
                    };
                    var a = v(t);
                    if (a && a.has(e)) return a.get(e);
                    var r = {},
                        n = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var l in e)
                        if ("default" !== l && Object.prototype.hasOwnProperty.call(e, l)) {
                            var o = n ? Object.getOwnPropertyDescriptor(e, l) : null;
                            o && (o.get || o.set) ? Object.defineProperty(r, l, o) : r[l] = e[l]
                        }
                    r.default = e, a && a.set(e, r);
                    return r
                }(a(667294)),
                S = r(a(156720));

            function v(e) {
                if ("function" != typeof WeakMap) return null;
                var t = new WeakMap,
                    a = new WeakMap;
                return (v = function(e) {
                    return e ? a : t
                })(e)
            }
            const _ = {
                orderItemsContainer: {
                    marginTop: "jdreu547",
                    marginEnd: "jnwc1y2a",
                    marginBottom: "n5a6z3tu",
                    marginStart: "svoq16ka"
                },
                orderItemName: {
                    color: "tviruh8d",
                    whiteSpace: "le5p0ye3",
                    overflowX: "gfz4du6o",
                    overflowY: "r7fjleex",
                    textOverflow: "lhj4utae"
                },
                productDeleteWrapper: {
                    display: "p357zi0d",
                    alignItems: "gndfcl4n"
                }
            };

            function O(e) {
                let {
                    currency: t,
                    details: a,
                    items: r,
                    onAddItem: v,
                    onDeleteItem: O,
                    onItemQuantityChange: C,
                    onPriceChange: P,
                    priceMap: T
                } = e;
                const [M, k] = (0, E.useState)(null), [w, x] = (0, E.useState)({}), D = (0, E.useCallback)((e => null != e.price ? p.PriceStage.Readonly : null != (null == T ? void 0 : T[e.id]) ? p.PriceStage.EditableFilled : p.PriceStage.EditableBlank), [T]), I = (0, E.useCallback)(((e, t) => {
                    x((a => (0, l.default)((0, l.default)({}, a), {}, {
                        [t.id]: e
                    })))
                }), []), A = Boolean(a), N = (e, a) => {
                    var r, n;
                    return E.default.createElement("div", {
                        className: (0, S.default)(_.productDeleteWrapper)
                    }, E.default.createElement(p.CatalogProductPrice, {
                        price: null !== (r = null == T ? void 0 : T[e.id]) && void 0 !== r ? r : null,
                        priceStage: null !== (n = w[e.id]) && void 0 !== n ? n : D(e),
                        currency: t,
                        orderItem: e,
                        onPriceChange: t => null == P ? void 0 : P(t, e.id),
                        onPriceStageChange: t => {
                            I(t, e)
                        },
                        onEnter: () => {
                            k(null)
                        }
                    }), a === M && E.default.createElement("div", {
                        className: (0, S.default)(b.uiMargin.start5)
                    }, E.default.createElement(i.default, {
                        onClick: t => {
                            var r, n;
                            t.stopPropagation(), r = () => null == O ? void 0 : O(a), n = e.name, f.ModalManager.open(E.default.createElement(s.ConfirmPopup, {
                                title: y.fbt._("Delete {order_item_name} from order?", [y.fbt._param("order_item_name", n)], {
                                    hk: "2Na2JW"
                                }),
                                okText: y.fbt._("Delete", null, {
                                    hk: "4m6dzv"
                                }),
                                onOK: () => {
                                    null == r || r(), f.ModalManager.close()
                                },
                                cancelText: y.fbt._("Cancel", null, {
                                    hk: "15AkJV"
                                }),
                                onCancel: () => {
                                    f.ModalManager.close()
                                }
                            }))
                        }
                    })))
                };
                return E.default.createElement(c.FlexColumn, {
                    align: "stretch",
                    xstyle: _.orderItemsContainer
                }, !A && ((0, o.orderDetailsFromCatalogEnabled)() || (0, o.orderDetailsCustomItemEnabled)()) && E.default.createElement(m.AddOrderItem, {
                    title: y.fbt._("Add items", null, {
                        hk: "M4YqU"
                    }),
                    onClick: () => null == v ? void 0 : v()
                }), r.map(((e, t) => {
                    const a = y.fbt._("Quantity {item-quantity}", [y.fbt._param("item-quantity", e.quantity)], {
                        hk: "3ESE8k"
                    });
                    return E.default.createElement(u.default, (0, n.default)({
                        key: t,
                        testid: "order-item-cell",
                        className: (0, S.default)(t > 0 && b.uiPadding.top10),
                        disabled: !0,
                        image: E.default.createElement(g.OrderItemIcon, {
                            mediaData: e.thumbnailUrl ? (0, h.getMediaData)(e) : null,
                            useCustomIcon: e.isCustomItem
                        }),
                        primary: E.default.createElement("span", {
                            className: (0, S.default)(_.orderItemName),
                            title: e.name
                        }, e.name),
                        secondary: A ? a : E.default.createElement(d.default, {
                            quantity: e.quantity,
                            onAddOneClick: () => null == C ? void 0 : C(t, e.quantity + 1),
                            onRemoveOneClick: () => null == C ? void 0 : C(t, e.quantity - 1)
                        }),
                        theme: "add-order-item",
                        detail: N(e, t)
                    }, A ? void 0 : {
                        onMouseEnter: () => k(t),
                        onMouseLeave: () => k(null)
                    }))
                })))
            }
            O.displayName = "OrderDetailItems"
        },
        238977: (e, t, a) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.PERCENTAGE_SYMBOL = t.DEFAULT_OFFSET = void 0, t.calculateFlatAmounts = function(e) {
                let {
                    orderSubtotal: t,
                    discountType: a,
                    discountText: r,
                    taxType: i,
                    taxText: u,
                    shippingText: d
                } = e;
                const s = o({
                        type: a,
                        value: r,
                        total: t
                    }),
                    c = o({
                        type: i,
                        value: u,
                        total: t - (null != s ? s : 0)
                    }),
                    f = l(d),
                    m = t - (null != s ? s : 0) + (null != f ? f : 0) + (null != c ? c : 0);
                return {
                    total: Math.trunc(m * n),
                    tax: null == c ? null : Math.trunc(c * n),
                    shipping: null == f ? null : Math.trunc(f * n),
                    discount: null == s ? null : Math.trunc(s * n)
                }
            };
            var r = a(27578);
            t.PERCENTAGE_SYMBOL = "%";
            const n = 1e3;

            function l(e) {
                if ("" === e) return null;
                const t = (0, r.valueFromString)("USD", e) / n;
                return Number.isNaN(t) ? 0 : t
            }

            function o(e) {
                let {
                    type: t,
                    value: a,
                    total: r
                } = e;
                const n = l(a);
                return null == n ? null : "%" === t ? n / 100 * r : n
            }
            t.DEFAULT_OFFSET = n
        },
        535407: (e, t, a) => {
            "use strict";
            var r = a(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = d;
            var n = a(690495),
                l = function(e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || "object" != typeof e && "function" != typeof e) return {
                        default: e
                    };
                    var a = i(t);
                    if (a && a.has(e)) return a.get(e);
                    var r = {},
                        n = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var l in e)
                        if ("default" !== l && Object.prototype.hasOwnProperty.call(e, l)) {
                            var o = n ? Object.getOwnPropertyDescriptor(e, l) : null;
                            o && (o.get || o.set) ? Object.defineProperty(r, l, o) : r[l] = e[l]
                        }
                    r.default = e, a && a.set(e, r);
                    return r
                }(a(667294)),
                o = r(a(156720));

            function i(e) {
                if ("function" != typeof WeakMap) return null;
                var t = new WeakMap,
                    a = new WeakMap;
                return (i = function(e) {
                    return e ? a : t
                })(e)
            }
            const u = {
                container: {
                    gap: "mqqyhd6v"
                },
                separator: {
                    height: "bbl9m3t3",
                    borderTop: "iupwfssi"
                }
            };

            function d(e) {
                let {
                    children: t
                } = e;
                return l.default.createElement(n.FlexColumn, {
                    xstyle: u.container,
                    align: "stretch"
                }, l.Children.map(t, ((e, t) => l.default.createElement(l.default.Fragment, null, 0 !== t ? l.default.createElement("div", {
                    className: (0, o.default)(u.separator)
                }) : null, e))))
            }
            d.displayName = "OrderDetailSectionContainer"
        },
        210762: (e, t, a) => {
            "use strict";
            var r = a(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = g;
            var n = a(72696),
                l = a(177938),
                o = a(23641),
                i = a(690495),
                u = a(21645),
                d = a(180519),
                s = a(676345),
                c = a(548360),
                f = r(a(667294)),
                m = r(a(156720));
            const p = {
                container: {
                    gap: "nypubj7v"
                },
                uppercase: {
                    textTransform: "ofejerhi"
                },
                sellerName: {
                    fontSize: "p9fp32ui",
                    lineHeight: "tkq7s68q",
                    fontWeight: "hnx8ox4h",
                    color: "tl2vja3b"
                }
            };

            function g(e) {
                let {
                    orderId: t,
                    orderStatus: a,
                    sellerWid: r,
                    testid: g
                } = e;
                const h = l.ContactCollection.get(r),
                    b = h ? f.default.createElement(f.default.Fragment, null, f.default.createElement(i.FlexRow, null, f.default.createElement(o.DetailImage, {
                        id: r,
                        size: 48
                    })), f.default.createElement(i.FlexColumn, {
                        align: "center"
                    }, f.default.createElement(u.Name, {
                        className: (0, m.default)(p.sellerName),
                        useDisplayName: !0,
                        contact: h
                    }), null != t ? f.default.createElement(d.TextDiv, {
                        color: "secondary",
                        weight: "medium",
                        className: (0, m.default)(p.uppercase, s.uiMargin.top4)
                    }, (0, n.isOrderContentOptimizationEnabled)() ? c.fbt._("charge #{order-id}", [c.fbt._param("order-id", t)], {
                        hk: "1lJzZv"
                    }) : c.fbt._("order #{order-id}", [c.fbt._param("order-id", t)], {
                        hk: "1JaZPw"
                    })) : null)) : null;
                return f.default.createElement(i.FlexColumn, {
                    align: "center",
                    xstyle: [p.container, s.uiPadding.horiz16],
                    testid: g
                }, b, a)
            }
            g.displayName = "OrderDetailSellerProfile"
        },
        496254: (e, t, a) => {
            "use strict";
            var r = a(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            r(a(156720));
            t.default = {
                clickableText: {
                    color: "o0rubyzf",
                    cursor: "ajgl1lbb",
                    fontWeight: "m1e7cby3",
                    lineHeight: "iq0m558w",
                    letterSpacing: "ysae3w6m",
                    ":hover": {
                        textDecoration: "edeob0r2"
                    }
                }
            }
        },
        697944: (e, t, a) => {
            "use strict";
            var r = a(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = p;
            var n = a(466224),
                l = a(522993),
                o = a(325942),
                i = a(620982),
                u = a(525366),
                d = a(180519),
                s = a(548360),
                c = r(a(667294));
            r(a(156720));
            const f = {
                container: {
                    backgroundColor: "i16jpgpt",
                    display: "i86elurf",
                    alignItems: "gndfcl4n",
                    fontSize: "dsh4tgtl",
                    paddingTop: "i5tg98hk",
                    paddingEnd: "ft2m32mm",
                    paddingBottom: "przvwfww",
                    paddingStart: "k4wy2cgb",
                    borderTopStartRadius: "g130k69c",
                    borderTopEndRadius: "k1a7joe8",
                    borderBottomEndRadius: "dc5qina8",
                    borderBottomStartRadius: "kfr1vweg"
                },
                icon: {
                    marginEnd: "mw4yctpw"
                },
                iconCipherText: {
                    marginTop: "dwvzf427"
                }
            };

            function m(e) {
                switch (e) {
                    case i.OrderStatus.Pending:
                    case i.OrderStatus.Processing:
                    case i.OrderStatus.PartiallyShipped:
                    case i.OrderStatus.Shipped:
                    case i.OrderStatus.PreparingToShip:
                    case i.OrderStatus.PaymentRequested:
                        return;
                    case i.OrderStatus.Canceled:
                        return "danger";
                    case i.OrderStatus.Complete:
                    case i.OrderStatus.Delivered:
                        return "success"
                }
            }

            function p(e) {
                let {
                    orderStatus: t = (0, i.getDefaultOrderStatus)()
                } = e;
                return c.default.createElement(d.TextDiv, {
                    color: m(t),
                    theme: "small",
                    xstyle: f.container
                }, function(e) {
                    switch (e) {
                        case i.OrderStatus.Pending:
                        case i.OrderStatus.Processing:
                        case i.OrderStatus.PreparingToShip:
                        case i.OrderStatus.PaymentRequested:
                            return c.default.createElement(u.StatusClockIcon, {
                                width: 12,
                                displayInline: !0,
                                xstyle: [f.icon, f.iconCipherText]
                            });
                        case i.OrderStatus.PartiallyShipped:
                        case i.OrderStatus.Shipped:
                            return c.default.createElement(o.LocalShippingIcon, {
                                width: 12,
                                displayInline: !0,
                                xstyle: f.icon
                            });
                        case i.OrderStatus.Canceled:
                            return c.default.createElement(l.AlertErrorIcon, {
                                width: 12,
                                displayInline: !0,
                                xstyle: f.icon
                            });
                        case i.OrderStatus.Complete:
                        case i.OrderStatus.Delivered:
                            return c.default.createElement(n.ActionCheckCircleIcon, {
                                width: 12,
                                displayInline: !0,
                                xstyle: f.icon
                            })
                    }
                }(t), function(e) {
                    switch (e) {
                        case i.OrderStatus.Pending:
                            return s.fbt._("Pending", null, {
                                hk: "2djOp6"
                            });
                        case i.OrderStatus.Processing:
                            return s.fbt._("Processing", null, {
                                hk: "1YWzCh"
                            });
                        case i.OrderStatus.PartiallyShipped:
                            return s.fbt._("Partially shipped", null, {
                                hk: "1uyPMt"
                            });
                        case i.OrderStatus.Shipped:
                            return s.fbt._("Shipped", null, {
                                hk: "4jvcHU"
                            });
                        case i.OrderStatus.Canceled:
                            return s.fbt._("Canceled", null, {
                                hk: "NFaHh"
                            });
                        case i.OrderStatus.Complete:
                            return s.fbt._("Complete", null, {
                                hk: "3ZHRbN"
                            });
                        case i.OrderStatus.PreparingToShip:
                            return s.fbt._("Preparing to ship", null, {
                                hk: "2Tq816"
                            });
                        case i.OrderStatus.PaymentRequested:
                            return s.fbt._("Payment requested", null, {
                                hk: "2lBzyf"
                            });
                        case i.OrderStatus.Delivered:
                            return s.fbt._("Delivered", null, {
                                hk: "2GwOKM"
                            })
                    }
                }(t))
            }
            p.displayName = "OrderDetailStatusPill"
        },
        392432: (e, t, a) => {
            "use strict";
            var r = a(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = b;
            var n = a(468926),
                l = a(103440),
                o = a(714574),
                i = a(114850),
                u = a(180519),
                d = a(94872),
                s = r(a(53575)),
                c = a(548360),
                f = function(e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || "object" != typeof e && "function" != typeof e) return {
                        default: e
                    };
                    var a = p(t);
                    if (a && a.has(e)) return a.get(e);
                    var r = {},
                        n = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var l in e)
                        if ("default" !== l && Object.prototype.hasOwnProperty.call(e, l)) {
                            var o = n ? Object.getOwnPropertyDescriptor(e, l) : null;
                            o && (o.get || o.set) ? Object.defineProperty(r, l, o) : r[l] = e[l]
                        }
                    r.default = e, a && a.set(e, r);
                    return r
                }(a(667294)),
                m = r(a(156720));

            function p(e) {
                if ("function" != typeof WeakMap) return null;
                var t = new WeakMap,
                    a = new WeakMap;
                return (p = function(e) {
                    return e ? a : t
                })(e)
            }
            const g = {
                    paddingTop: "n1yiu2zv",
                    paddingEnd: "f9ovudaz",
                    paddingBottom: "eb4rp10x",
                    paddingStart: "gx1rr48f"
                },
                h = {
                    marginStart: "fooq7fky"
                };

            function b(e) {
                let {
                    chat: t,
                    onSubmit: a
                } = e;
                const r = (0, o.getFormattedUser)(t.contact),
                    [p, b] = (0, f.useState)(!1);
                return f.default.createElement(l.ConfirmPopup, {
                    testid: "order-ephemeral-exemption-confirm-popup",
                    title: c.fbt._("Disappearing messages are turned on", null, {
                        hk: "22mxJR"
                    }),
                    onOK: () => {
                        p && s.default.set(d.KEYS.DISAPPEARING_MSG_DISCLAIMER_DIMISSED, !0), i.ModalManager.close(), a()
                    },
                    onCancel: () => {
                        i.ModalManager.close()
                    }
                }, f.default.createElement(u.WDSTextSectionTitle, null, c.fbt._("Disappearing messages are turned on in your chat with {contact-name}, but this order will not disappear.", [c.fbt._param("contact-name", r)], {
                    hk: "4kgj97"
                })), f.default.createElement("div", null, f.default.createElement("div", {
                    className: (0, m.default)(g)
                }, f.default.createElement(n.CheckBox, {
                    testid: "order-ephemeral-exemption-popup-skip-checkbox",
                    id: "order-ephemeral-exemption-popup-skip-checkbox-id",
                    checked: p,
                    onChange: () => {
                        b(!p)
                    }
                }), f.default.createElement("label", {
                    htmlFor: "order-ephemeral-exemption-popup-skip-checkbox-id",
                    className: (0, m.default)(h)
                }, c.fbt._("Don't show me this again", null, {
                    hk: "2g9ZnR"
                })))))
            }
            b.displayName = "OrderEphemeralExemptionPopup"
        },
        114459: (e, t, a) => {
            "use strict";
            var r = a(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.AddItemIcon = c, t.OrderItemIcon = f;
            var n = a(865014),
                l = a(170516),
                o = a(493770),
                i = r(a(667294)),
                u = r(a(156720));
            const d = {
                iconContainer: {
                    display: "p357zi0d",
                    alignItems: "gndfcl4n",
                    width: "dyxdk6fi",
                    height: "m3o1wsh7",
                    borderTopStartRadius: "bbr44loe",
                    borderTopEndRadius: "ooj5yc5b",
                    borderBottomEndRadius: "m8i16etx",
                    borderBottomStartRadius: "cw0ivh8j",
                    backgroundColor: "osuelnrh",
                    boxShadow: "gnkxn0la"
                },
                customItemSVG: {
                    marginTop: "m3ct2rho",
                    marginEnd: "k1jo73ug",
                    marginBottom: "ec1z5skj",
                    marginStart: "isfiuinm",
                    color: "s4recxw2"
                },
                addItemSVG: {
                    marginTop: "m3ct2rho",
                    marginEnd: "k1jo73ug",
                    marginBottom: "ec1z5skj",
                    marginStart: "isfiuinm",
                    color: "s4recxw2"
                }
            };

            function s() {
                return i.default.createElement("div", {
                    className: (0, u.default)(d.iconContainer)
                }, i.default.createElement(l.ListMsgIconIcon, {
                    xstyle: d.customItemSVG
                }))
            }

            function c() {
                return i.default.createElement("div", {
                    className: (0, u.default)(d.iconContainer)
                }, i.default.createElement(n.AddItemIcon, {
                    xstyle: d.addItemSVG
                }))
            }

            function f(e) {
                let {
                    mediaData: t,
                    useCustomIcon: a
                } = e;
                return a || null == t ? i.default.createElement(s, null) : i.default.createElement(o.ProductThumb, {
                    mediaData: t,
                    theme: "orderSquareThumb"
                })
            }
            s.displayName = "CustomItemIcon", c.displayName = "AddItemIcon", f.displayName = "OrderItemIcon"
        },
        832545: (e, t, a) => {
            "use strict";
            var r = a(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.OrderSummaryDrawer = V, t.OrderValues = B, t.maybeShowDialogOnSubmit = t.getErrorLabel = t.getDataSharing = void 0;
            var n = a(887341),
                l = a(72696),
                o = a(738501),
                i = r(a(196554)),
                u = r(a(883891)),
                d = a(317285),
                s = a(27578),
                c = r(a(908081)),
                f = r(a(324093)),
                m = a(626194),
                p = r(a(969358)),
                g = a(690495),
                h = a(114850),
                b = r(a(936734)),
                y = r(a(453823)),
                E = a(238977),
                S = r(a(535407)),
                v = r(a(210762)),
                _ = r(a(496254)),
                O = r(a(697944)),
                C = r(a(392432)),
                P = r(a(207992)),
                T = a(716903),
                M = a(208160),
                k = r(a(682212)),
                w = a(180519),
                x = a(676345),
                D = a(94872),
                I = a(459857),
                A = r(a(53575)),
                N = a(548360),
                j = function(e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || "object" != typeof e && "function" != typeof e) return {
                        default: e
                    };
                    var a = F(t);
                    if (a && a.has(e)) return a.get(e);
                    var r = {},
                        n = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var l in e)
                        if ("default" !== l && Object.prototype.hasOwnProperty.call(e, l)) {
                            var o = n ? Object.getOwnPropertyDescriptor(e, l) : null;
                            o && (o.get || o.set) ? Object.defineProperty(r, l, o) : r[l] = e[l]
                        }
                    r.default = e, a && a.set(e, r);
                    return r
                }(a(667294)),
                R = r(a(156720));

            function F(e) {
                if ("function" != typeof WeakMap) return null;
                var t = new WeakMap,
                    a = new WeakMap;
                return (F = function(e) {
                    return e ? a : t
                })(e)
            }
            const L = {
                    orderFieldsContainer: {
                        gap: "sxkbojvh"
                    },
                    orderItemsContainer: {
                        flexShrink: "m0h2a7mj",
                        overflowY: "ag5g9lrv"
                    }
                },
                W = (e, t, a, r) => {
                    if (!e) return N.fbt._("Items must all have a price", null, {
                        hk: "1PvX8G"
                    }).toString();
                    const n = 1e3 * (0, l.orderDetailsTotalOrderMinimumValue)(),
                        o = 1e3 * (0, l.orderDetailsTotalMaxValue)(r);
                    return t < n ? N.fbt._("Total cannot be less than {order_min_allowed_amount}", [N.fbt._param("order_min_allowed_amount", (0, s.formatAmount1000)(a, n))], {
                        hk: "3rfjSw"
                    }).toString() : t > o ? N.fbt._("Total cannot be more than {order_max_allowed_amount}", [N.fbt._param("order_max_allowed_amount", (0, s.formatAmount1000)(a, o))], {
                        hk: "2eOboQ"
                    }).toString() : null
                };

            function B(e) {
                let {
                    additionalCharges: t,
                    canChangeAdditionalCharges: a,
                    canDisplayAdditionalCharges: r,
                    currency: n,
                    discount: l,
                    onAdditionalCharges: o,
                    shipping: u,
                    subtotal: d,
                    tax: c
                } = e;
                const f = (null == t ? void 0 : t.discountText) && t.discountType === E.PERCENTAGE_SYMBOL ? N.fbt._("{discount_percent}% off", [N.fbt._param("discount_percent", t.discountText)], {
                        hk: "4yt64k"
                    }) : null,
                    m = (null == t ? void 0 : t.taxText) && t.taxType === E.PERCENTAGE_SYMBOL ? N.fbt._("({tax_percent}%)", [N.fbt._param("tax_percent", t.taxText)], {
                        hk: "WGDBi"
                    }) : null;
                return j.default.createElement(g.FlexColumn, {
                    align: "stretch",
                    xstyle: [L.orderFieldsContainer, x.uiPadding.horiz16, x.uiPadding.bottom20]
                }, j.default.createElement(g.FlexRow, {
                    justify: "all",
                    testid: "order-details-subtotal-row"
                }, j.default.createElement(w.TextSpan, {
                    color: "secondary",
                    size: "16"
                }, N.fbt._("Subtotal", null, {
                    hk: "3XD55n"
                })), j.default.createElement(w.TextSpan, {
                    color: "secondary",
                    size: "16"
                }, (0, s.formatAmount1000)(n, d))), Boolean(r) && j.default.createElement(j.default.Fragment, null, null != l && j.default.createElement(g.FlexRow, {
                    justify: "all",
                    testid: "order-details-discount-row"
                }, j.default.createElement(w.TextSpan, {
                    color: "secondary",
                    size: "16"
                }, N.fbt._("Discount", null, {
                    hk: "1ZzkHY"
                }), " ", f), j.default.createElement(w.TextSpan, {
                    color: "secondary",
                    size: "16"
                }, (0, s.formatAmount1000)(n, -l))), null != u && j.default.createElement(g.FlexRow, {
                    justify: "all",
                    testid: "order-details-shipping-row"
                }, j.default.createElement(w.TextSpan, {
                    color: "secondary",
                    size: "16"
                }, N.fbt._("Shipping", null, {
                    hk: "1pvvuy"
                })), j.default.createElement(w.TextSpan, {
                    color: "secondary",
                    size: "16"
                }, (0, s.formatAmount1000)(n, u))), null != c && j.default.createElement(g.FlexRow, {
                    justify: "all",
                    testid: "order-details-tax-row"
                }, j.default.createElement(w.TextSpan, {
                    color: "secondary",
                    size: "16"
                }, N.fbt._("Tax", null, {
                    hk: "OjxE4"
                }), " ", m), j.default.createElement(w.TextSpan, {
                    color: "secondary",
                    size: "16"
                }, (0, s.formatAmount1000)(n, c))), Boolean(a) && j.default.createElement(g.FlexRow, {
                    justify: "all",
                    align: "center"
                }, j.default.createElement(i.default, {
                    onClick: () => null == o ? void 0 : o(),
                    testid: "order-details-additional-charges-button",
                    className: (0, R.default)(_.default.clickableText, x.uiMargin.bottom0)
                }, j.default.createElement("span", null, N.fbt._("Add discount, shipping or tax", null, {
                    hk: "3GTNs0"
                }))))))
            }
            t.getErrorLabel = W, B.displayName = "OrderValues";
            const U = (e, t, a, r) => {
                if (u.default.shouldDisplayDataSharingOrderOptOutOrUpsell(e, "order-create", t)) return j.default.createElement(b.default, {
                    checkboxValue: a,
                    onCheckboxToggle: r,
                    theme: "order-create"
                })
            };
            t.getDataSharing = U;
            const z = () => d.CTWADataSharingModel.getValue() === n.ENUM_FALSE_NOTSET_TRUE.true,
                G = (e, t, a) => {
                    if (!(!(0, T.isOrderExpansionEnabled)() && (0, T.isSellerCountrySameAsBuyer)(e) || (0, T.isContactCountrySupported)(e))) return void h.ModalManager.open(j.default.createElement(P.default, {
                        chat: e
                    }));
                    const r = () => {
                        k.default.markOrderAsCreatedAction(e, t), a()
                    };
                    !0 !== A.default.get(D.KEYS.DISAPPEARING_MSG_DISCLAIMER_DIMISSED) && (0, l.inOrderMessagesEphemeralExceptionEnabled)() && (0, o.isEphemeralSettingOn)(e) ? h.ModalManager.open(j.default.createElement(C.default, {
                        chat: e,
                        onSubmit: r
                    })) : r()
                };

            function V(e) {
                let {
                    additionalCharges: t,
                    chat: a,
                    currency: r,
                    entryPoint: o = null,
                    flatAmounts: i,
                    onAddItem: u,
                    onAdditionalCharges: g,
                    onBack: h,
                    onDeclineOrder: b = null,
                    onDeleteItem: E,
                    onItemQuantityChange: _,
                    onPriceChange: C,
                    onSubmit: P,
                    orderItems: T,
                    orderSubtotal: k,
                    priceMap: w
                } = e;
                const [D, A] = (0, j.useState)(z);
                (0, j.useEffect)((() => {
                    const e = () => {
                        const e = d.CTWADataSharingModel.getValue() === n.ENUM_FALSE_NOTSET_TRUE.true;
                        A(e)
                    };
                    return d.CTWADataSharingModel.subscribeForUpdates(e), () => {
                        d.CTWADataSharingModel.unsubscribeFromUpdates(e)
                    }
                }), []);
                const R = T.every((e => {
                        var t;
                        return Number.isInteger(null !== (t = e.price) && void 0 !== t ? t : w[e.id])
                    })),
                    F = 0 !== T.length;
                return j.default.createElement(c.default, null, j.default.createElement(m.DrawerHeader, {
                    title: (0, l.isOrderContentOptimizationEnabled)() ? N.fbt._("Charge buyer", null, {
                        hk: "35xdGE"
                    }) : N.fbt._("Create order", null, {
                        hk: "3snLWG"
                    }),
                    onBack: h,
                    type: m.DRAWER_HEADER_TYPE.SMALL
                }), j.default.createElement(f.default, null, j.default.createElement(p.default, {
                    xstyle: [L.orderItemsContainer, x.uiPadding.top20, x.uiMargin.bottom0],
                    theme: "refresh-padding-title"
                }, j.default.createElement(S.default, null, j.default.createElement(v.default, {
                    sellerWid: (0, I.getMeUser)(),
                    orderStatus: j.default.createElement(O.default, null)
                }), j.default.createElement(y.default, {
                    currency: r,
                    priceMap: w,
                    items: T,
                    onDeleteItem: E,
                    onPriceChange: C,
                    onAddItem: u,
                    onItemQuantityChange: _
                }), j.default.createElement(B, {
                    tax: i.tax,
                    discount: i.discount,
                    shipping: i.shipping,
                    currency: r,
                    subtotal: k,
                    additionalCharges: t,
                    canDisplayAdditionalCharges: F,
                    canChangeAdditionalCharges: F,
                    onAdditionalCharges: g
                })), U(a, T.length, D, (() => A(!D)))), j.default.createElement(p.default, null, j.default.createElement(M.OrderTotalPrice, {
                    xstyle: x.uiPadding.all16,
                    visible: F,
                    disabled: !R,
                    testid: "send-order-button",
                    totalPrice: (0, s.formatAmount1000)(r, i.total),
                    title: N.fbt._("Total", null, {
                        hk: "qKqct"
                    }),
                    onConfirm: () => G(a, D, P),
                    confirmTitle: (0, l.isOrderContentOptimizationEnabled)() ? N.fbt._("Charge buyer", null, {
                        hk: "3H9vTK"
                    }) : N.fbt._("Send Order", null, {
                        hk: "dGwCV"
                    }),
                    error: W(R, i.total, r, a),
                    entryPoint: o,
                    onDeclineOrder: b
                }))))
            }
            t.maybeShowDialogOnSubmit = G, V.displayName = "OrderSummaryDrawer"
        },
        208160: (e, t, a) => {
            "use strict";
            var r = a(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.OrderApplyChangesButton = m, t.OrderDeclineButton = p, t.OrderTotalPrice = g;
            var n = r(a(120162)),
                l = r(a(692629)),
                o = a(716903),
                i = a(180519),
                u = a(676345),
                d = a(548360),
                s = r(a(667294)),
                c = r(a(156720));
            const f = {
                buttonWrapper: {
                    display: "p357zi0d",
                    flexDirection: "f8m0rgwh",
                    alignItems: "gndfcl4n"
                },
                priceContainer: {
                    display: "p357zi0d",
                    flexDirection: "sap93d0t",
                    justifyContent: "o4u7okr9",
                    fontWeight: "nbipi2bn"
                },
                errorLabel: {
                    textAlign: "qfejxiq4"
                }
            };

            function m(e) {
                let {
                    disabled: t,
                    onClick: a,
                    testid: r,
                    title: n
                } = e;
                return s.default.createElement("div", {
                    className: (0, c.default)(f.buttonWrapper, u.uiMargin.top16)
                }, s.default.createElement(l.default, {
                    type: "primary",
                    disabled: t,
                    onClick: a,
                    testid: r
                }, n))
            }

            function p(e) {
                let {
                    entryPoint: t = null,
                    onClick: a = null
                } = e;
                return t === n.default.FROM_CART && null != a && (0, o.isOrderExpansionEnabled)() ? s.default.createElement("div", {
                    className: (0, c.default)(f.buttonWrapper, u.uiMargin.top16)
                }, s.default.createElement(l.default, {
                    type: "secondary",
                    onClick: a,
                    testid: "decline-cart-order-button"
                }, d.fbt._("Decline cart", null, {
                    hk: "4dIEiB"
                }))) : null
            }

            function g(e) {
                let {
                    confirmTitle: t,
                    disabled: a,
                    entryPoint: r = null,
                    error: n = null,
                    onConfirm: l,
                    onDeclineOrder: o = null,
                    testid: u,
                    title: d,
                    totalPrice: g,
                    visible: h,
                    xstyle: b
                } = e;
                return h ? s.default.createElement(i.TextDiv, {
                    xstyle: b
                }, null == n ? s.default.createElement("div", {
                    className: (0, c.default)(f.priceContainer)
                }, d, s.default.createElement("p", null, g)) : s.default.createElement(i.TextDiv, {
                    color: "danger",
                    size: "16",
                    xstyle: f.errorLabel
                }, n), s.default.createElement(m, {
                    title: t,
                    onClick: l,
                    disabled: a || Boolean(n),
                    testid: u
                }), s.default.createElement(p, {
                    entryPoint: r,
                    onClick: o
                })) : null
            }
            m.displayName = "OrderApplyChangesButton", p.displayName = "OrderDeclineButton", g.displayName = "OrderTotalPrice"
        },
        865014: (e, t, a) => {
            "use strict";
            var r = a(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.AddItemIcon = function(e) {
                var t;
                const {
                    iconXstyle: a,
                    height: r,
                    width: c,
                    viewBox: f
                } = e, m = (0, l.default)(e, d);
                let p;
                if (f) {
                    const {
                        x: e = 0,
                        y: t = 0,
                        width: a = 0,
                        height: r = 0
                    } = f;
                    p = [e, t, a, r].join(" ")
                }
                let g = 20,
                    h = 20;
                null == r && null == c || (g = r, h = c);
                return u.default.createElement(o.BaseSvgSpan, (0, n.default)({
                    name: s
                }, m), u.default.createElement("svg", {
                    viewBox: null !== (t = p) && void 0 !== t ? t : "0 0 20 20",
                    height: g,
                    width: h,
                    preserveAspectRatio: "xMidYMid meet",
                    className: (0, i.default)(a),
                    version: "1.1",
                    x: "0px",
                    y: "0px",
                    enableBackground: "new 0 0 24 24"
                }, u.default.createElement("title", null, s), u.default.createElement("path", {
                    fill: "currentColor",
                    d: "M10 5C9.45 5 9 5.45 9 6V9H6C5.45 9 5 9.45 5 10C5 10.55 5.45 11 6 11H9V14C9     14.55 9.45 15 10 15C10.55 15 11 14.55 11 14V11H14C14.55 11 15 10.55 15 10C15 9.45 14.55 9 14     9H11V6C11 5.45 10.55 5 10 5ZM10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52     20 10C20 4.48 15.52 0 10 0ZM10 18C5.59 18 2 14.41 2 10C2 5.59 5.59 2 10 2C14.41 2 18 5.59 18     10C18 14.41 14.41 18 10 18Z"
                })))
            };
            var n = r(a(967154)),
                l = r(a(506479)),
                o = a(220584),
                i = r(a(156720)),
                u = r(a(667294));
            const d = ["iconXstyle", "height", "width", "viewBox"],
                s = "add-item"
        },
        325942: (e, t, a) => {
            "use strict";
            var r = a(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.LocalShippingIcon = function(e) {
                var t;
                const {
                    iconXstyle: a,
                    height: r,
                    width: c,
                    viewBox: f
                } = e, m = (0, l.default)(e, d);
                let p;
                if (f) {
                    const {
                        x: e = 0,
                        y: t = 0,
                        width: a = 0,
                        height: r = 0
                    } = f;
                    p = [e, t, a, r].join(" ")
                }
                let g = 8,
                    h = 12;
                null == r && null == c || (g = r, h = c);
                return u.default.createElement(o.BaseSvgSpan, (0, n.default)({
                    name: s
                }, m), u.default.createElement("svg", {
                    viewBox: null !== (t = p) && void 0 !== t ? t : "0 0 12 8",
                    height: g,
                    width: h,
                    preserveAspectRatio: "xMidYMid meet",
                    className: (0, i.default)(a),
                    fill: "none"
                }, u.default.createElement("title", null, s), u.default.createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M8.5 2H9.75C9.905 2 10.055 2.075 10.15 2.2L11.3 3.735C11.43 3.91 11.5 4.12 11.5 4.335V6C11.5 6.275 11.275 6.5 11 6.5H10.5C10.5 7.33 9.83 8 9 8C8.17 8 7.5 7.33 7.5 6.5H4.5C4.5 7.33 3.83 8 3 8C2.17 8 1.5 7.33 1.5 6.5C0.95 6.5 0.5 6.05 0.5 5.5V1C0.5 0.45 0.95 0 1.5 0H7.5C8.05 0 8.5 0.45 8.5 1V2ZM2.5 6.5C2.5 6.775 2.725 7 3 7C3.275 7 3.5 6.775 3.5 6.5C3.5 6.225 3.275 6 3 6C2.725 6 2.5 6.225 2.5 6.5ZM9.75 2.75L10.73 4H8.5V2.75H9.75ZM8.5 6.5C8.5 6.775 8.725 7 9 7C9.275 7 9.5 6.775 9.5 6.5C9.5 6.225 9.275 6 9 6C8.725 6 8.5 6.225 8.5 6.5Z",
                    fill: "#667781"
                })))
            };
            var n = r(a(967154)),
                l = r(a(506479)),
                o = a(220584),
                i = r(a(156720)),
                u = r(a(667294));
            const d = ["iconXstyle", "height", "width", "viewBox"],
                s = "local-shipping"
        }
    }
]);
//# sourceMappingURL=https://web.whatsapp.com/lazy_loaded_low_priority_components~.a4949e5d9d704eb402ed.js.map