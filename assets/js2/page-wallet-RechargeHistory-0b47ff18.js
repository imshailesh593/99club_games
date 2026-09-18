import {
    G as ne,
    r as m,
    H as R,
    N as u,
    I as d,
    J as e,
    P as a,
    Q as f,
    ao as g,
    O as c,
    K as le,
    z as ge,
    R as ye,
    A as Me,
    B,
    $ as ke,
    av as F,
    ap as E,
    au as pe,
    M as $e,
    a$ as q,
    aB as Q,
    t as Be,
    by as ce,
    u as Ve,
    F as je,
    aC as Ce,
    aD as be,
    w as fe,
    C as qe,
    X as He,
    p as Le,
    bF as me
} from "./common.modules-5cfe2cf4.js";
import {
    d as Ye,
    _ as oe,
    aj as Fe,
    a1 as ze,
    bT as ue,
    dJ as Je,
    dI as Ee,
    bS as Ge,
    c as G,
    L as W,
    A as de,
    dN as Ke,
    b as N,
    aD as Qe,
    y as We,
    de as Xe,
    dO as xe,
    g as Ze
} from "./page-activity-ActivityDetail-a58ec568.js";
import {
    L as et
} from "./page-activity-DailySignIn-543fff66.js";
import {
    N as tt
} from "./page-home-AllGames-47ed4658.js";
import {
    u as at,
    C as st
} from "./page-wallet-OtherPay-5429905a.js";
import {
    C as lt
} from "./page-wallet-Recharge-8f284fa3.js";
const nt = {
        class: "ar-searchbar__selector"
    },
    ot = {
        key: 0,
        class: "noSelect"
    },
    rt = {
        key: 1,
        class: "ar-searchbar__selector-default"
    },
    it = ne({
        __name: "Calendar",
        emits: ["confirm"],
        setup(I, {
            expose: _,
            emit: p
        }) {
            const {
                minDate: s,
                maxDate: h
            } = Ye(), k = m(""), y = m(""), $ = m(!1), U = b => `${b.getFullYear()}-${b.getMonth()+1}-${b.getDate()}`, v = async b => {
                $.value = !1;
                const [D, w] = b;
                k.value = U(D), y.value = U(w), p("confirm")
            };

            function C() {
                $.value = !0
            }
            return _({
                startDateValue: k,
                endDateValue: y
            }), (b, D) => {
                const w = R("van-icon"),
                    A = R("van-calendar");
                return u(), d(le, null, [e("div", nt, [e("div", {
                    onClick: C
                }, [k.value === "" || y.value === "" ? (u(), d("span", ot, a(b.$t("datePick")), 1)) : (u(), d("span", rt, a(k.value) + "/" + a(y.value), 1)), f(w, {
                    name: "arrow-down"
                })])]), g(`<ArSelect @click-select="onClickSelectT" :selectName="$t('datePick')|| (startDateValue / endDateValue )"></ArSelect>`), g(' <van-popup v-model:show="showDataPick" round position="bottom"> '), f(A, {
                    show: $.value,
                    "onUpdate:show": D[0] || (D[0] = P => $.value = P),
                    type: "range",
                    onConfirm: v,
                    "min-date": c(s),
                    "max-date": c(h),
                    teleport: "body"
                }, null, 8, ["show", "min-date", "max-date"]), g(" </van-popup> ")], 64)
            }
        }
    }),
    ct = oe(it, [
        ["__file", "/usr/local/jenkins-prod/workspace/AR048-Pages-india-91club/src/components/common/Calendar.vue"]
    ]),
    ut = I => (Ce("data-v-f851bd18"), I = I(), be(), I),
    dt = {
        class: "rechargeh__container"
    },
    pt = {
        class: "rechargeh__header_box"
    },
    vt = ["src"],
    _t = {
        key: 0,
        class: "state_box"
    },
    ht = {
        class: "query_select"
    },
    ft = {
        class: "ar-searchbar__selector"
    },
    mt = {
        class: "ar-searchbar__selector-default"
    },
    gt = {
        class: "rechargeh__container-content"
    },
    yt = ["onClick"],
    kt = {
        class: "rechargeh__container-content__item-header"
    },
    $t = {
        class: "recharge_tit"
    },
    Ct = {
        key: 0,
        class: "rechargeh__container-content__item-body"
    },
    bt = {
        class: "price"
    },
    wt = ut(() => e("span", null, "UTR", -1)),
    Dt = {
        class: "order"
    },
    Tt = {
        key: 1,
        class: "rechargeh__container-content__item-body"
    },
    It = {
        class: "price"
    },
    St = {
        key: 0
    },
    Nt = {
        style: {
            color: "red"
        }
    },
    Rt = {
        class: "order"
    },
    At = ["onClick"],
    Ut = ["onClick"],
    Pt = ["onClick"],
    Ot = ["onClick"],
    Mt = {
        class: "rechargeh__header"
    },
    Bt = {
        class: "rechargeh__container-content__item-body"
    },
    Vt = {
        class: "price"
    },
    jt = {
        class: "order"
    },
    qt = ne({
        __name: "index",
        setup(I) {
            const {
                t: _
            } = ge(), {
                store: p,
                getRechargeTypeName: s,
                currentPayId: h,
                historyToDetail: k,
                goToOrderAppeal: y,
                gotoBanklist: $
            } = at(), {
                handleOpen: U
            } = Fe({
                type: 3
            });
            p.currentPayId = 0, s(!0);
            const v = ye();

            function C() {
                v.currentRoute.value.query.type ? v.replace({
                    name: "Recharge"
                }) : v.back()
            }
            const {
                goToTictek: b,
                isCenterServer: D
            } = ze({
                ServerType: 2
            }), w = m(!1), A = m(_("all")), P = m(!1), H = m(!1), n = m(1), o = m(), r = Me({
                startDate: "",
                endDate: "",
                state: -1,
                payId: -1,
                payTypeId: -1
            }), T = m(!1), V = m({}), O = m(), L = m(!1), X = B(() => {
                if (!M.value) return ue.RechargeState;
                let t = [{
                        key: _("all"),
                        value: -1
                    }],
                    i = ue.RechargeC2CState;
                return n.value === 1 ? t.concat(i.slice(0, 4)) : t.concat(i.slice(4, 7))
            }), M = B(() => {
                var t;
                return ((t = p.rechargeType[p.currentMenu]) == null ? void 0 : t.payID) === 20 || !1
            }), x = t => {
                if (![26e3, 26001].includes(t.payTypeId)) return !1;
                if ((t.groupID & 1) === 1 || (t.groupID & 2) === 2 || (t.groupID & 4) === 4) return !0
            }, Z = t => {
                if ((t.groupID & 1) === 1) return _("arupiBank");
                if ((t.groupID & 2) === 2) return _("arupiKycTip");
                if ((t.groupID & 4) === 4) return _("arupiKyc")
            }, ee = t => [26e3, 26001].includes(t.payTypeId) ? (t.groupID & 2048) === 2048 || (t.groupID & 8192) === 8192 : !1, te = t => [26e3, 26001].includes(t.payTypeId) ? (t.groupID & 32) === 32 || (t.groupID & 64) === 64 || (t.groupID & 4096) === 4096 && (t.groupID & 16384) !== 16384 : !1, K = t => {
                t !== n.value && (A.value = _("all"), r.state = -1, n.value = t, r.type = t, z.value.resetRefresh())
            }, ae = async ({
                selectedOptions: t
            }) => {
                w.value = !1, A.value = t[0].key, r.state = t[0].value, z.value.resetRefresh()
            };

            function se() {
                w.value = !0, P.value = !0
            }
            async function Y() {
                let t = o.value.endDateValue !== "" ? `${o.value.endDateValue} 23:59:59` : "";
                r.startDate = fe(o.value.startDateValue).format("YYYY-MM-DD HH:mm:ss"), r.endDate = fe(t).format("YYYY-MM-DD HH:mm:ss"), z.value.resetRefresh()
            }
            const S = m([]),
                z = m(),
                ve = B(() => p.currentMenu === 0 || !M.value ? (r.category && delete r.category, r) : { ...r
                }),
                we = t => {},
                De = async t => {
                    k(t.payID || t.category, t.type, t.price, t.state, t.id)
                },
                Te = B(() => M.value ? Ee : Je),
                Ie = t => {
                    let i = "";
                    switch (t.state) {
                        case 0:
                            i = "recharge";
                            break;
                        case 1:
                            h.value !== 20 ? i = "success" : i = "check";
                            break;
                        case 2:
                            h.value !== 20 ? i = "fail" : i = "timeout";
                            break;
                        case 3:
                            i = "representation";
                            break;
                        case 4:
                            i = "success";
                            break;
                        case 5:
                            i = "fail";
                            break;
                        case 6:
                            i = "cancel";
                            break;
                        case 7:
                            i = "timeout";
                            break;
                        default:
                            i = "#FFB800";
                            break
                    }
                    return i
                },
                Se = t => {
                    if ((t.groupID & 2048) === 2048 && (t.groupID & 1024) === 1024) return Be({
                        title: _("tips"),
                        message: () => ce("p", [ce("span", _("submitUtrtip") + " "), ce("span", {
                            style: {
                                color: "red"
                            },
                            onClick: U
                        }, _("pServer"))]),
                        theme: "round-button"
                    });
                    V.value = t, T.value = !0
                },
                Ne = async () => {
                    if (!O.value || `${O.value}`.length < 12) return Ve("UTR format is incorrect!");
                    if (!L.value) try {
                        L.value = !0, await de(Ke({
                            orderNumber: V.value.rechargeNumber,
                            utr: O.value
                        })) && (je(_("submitSuccess")), T.value = !1, O.value = "", z.value.resetRefresh())
                    } catch {} finally {
                        L.value = !1
                    }
                };
            return ke(() => p.currentMenu, async () => {
                p.currentMenu === 0 && (p.currentPayId = 0), A.value = _("all"), r.state = -1, H.value = !1, M.value ? (r.type = 1, r.category = -1, delete r.payTypeId, delete r.payId) : (delete r.type, r.payId = p.rechargeType[p.currentMenu].payID, r.payTypeId = p.rechargeType[p.currentMenu].payTypeID), await z.value.resetRefresh()
            }), (t, i) => {
                const Re = R("NavBar"),
                    ie = R("svg-icon"),
                    Ae = R("van-icon"),
                    Ue = R("van-picker"),
                    _e = R("van-popup"),
                    Pe = R("van-divider"),
                    he = R("van-button"),
                    Oe = R("van-field");
                return u(), d("div", dt, [f(Re, {
                    class: "white",
                    title: t.$t("rechargeRecords"),
                    "left-arrow": "",
                    onClickLeft: C
                }, null, 8, ["title"]), e("div", pt, [f(tt, {
                    list: c(p).rechargeType,
                    "is-auto-load": !0,
                    active: c(p).currentMenu,
                    "onUpdate:active": i[0] || (i[0] = l => c(p).currentMenu = l),
                    tabClassName: "tabs",
                    activeClassName: "tab_active",
                    ref: "tabRefs",
                    tabItemClassName: "funtab_item"
                }, {
                    default: F(({
                        item: l,
                        index: J
                    }) => [e("div", {
                        class: E(["tab_item", {
                            tab_active: J === c(p).currentMenu
                        }])
                    }, [l.payID == -1 ? (u(), pe(ie, {
                        key: 0,
                        name: "all"
                    })) : (u(), d("img", {
                        key: 1,
                        src: c(p).currentMenu === J ? l.payNameUrl2 : l.payNameUrl,
                        alt: ""
                    }, null, 8, vt)), e("span", null, a(l.typeName), 1)], 2)]),
                    _: 1
                }, 8, ["list", "active"]), M.value ? (u(), d("div", _t, [e("div", {
                    class: E(["state_item", {
                        state_item_active: n.value === 1
                    }]),
                    onClick: i[1] || (i[1] = l => K(1))
                }, a(t.$t("inTransaction")), 3), e("div", {
                    class: E(["state_item", {
                        state_item_active: n.value === 2
                    }]),
                    onClick: i[2] || (i[2] = l => K(2))
                }, a(t.$t("completed")), 3)])) : g("v-if", !0), e("div", ht, [e("div", ft, [e("div", {
                    onClick: se,
                    class: E({
                        selectorA: !P.value
                    })
                }, [e("span", mt, a(A.value), 1), f(Ae, {
                    name: "arrow-down"
                })], 2)]), g("日期选择组件"), f(ct, {
                    ref_key: "calendar",
                    ref: o,
                    onConfirm: Y
                }, null, 512)])]), f(_e, {
                    show: w.value,
                    "onUpdate:show": i[4] || (i[4] = l => w.value = l),
                    round: "",
                    position: "bottom"
                }, {
                    default: F(() => [f(Ue, {
                        "columns-field-names": {
                            text: "key",
                            value: "value",
                            children: "children"
                        },
                        columns: X.value,
                        onCancel: i[3] || (i[3] = l => w.value = !1),
                        onConfirm: ae
                    }, null, 8, ["columns"])]),
                    _: 1
                }, 8, ["show"]), f(et, {
                    list: S.value,
                    "onUpdate:list": i[6] || (i[6] = l => S.value = l),
                    "page-query": ve.value,
                    "onUpdate:pageQuery": i[7] || (i[7] = l => ve.value = l),
                    api: Te.value,
                    distance: 100,
                    ref_key: "listRef",
                    ref: z,
                    onPageChange: we,
                    isAutoLoad: !0
                }, {
                    content: F(() => [e("div", gt, [(u(!0), d(le, null, $e(S.value, (l, J) => (u(), d("div", {
                        class: "rechargeh__container-content__item",
                        key: J,
                        onClick: q(j => De(l), ["stop"])
                    }, [e("div", kt, [e("span", $t, a(t.$t("recharge")), 1), e("div", {
                        class: E(["recharge_right", Ie(l)])
                    }, a(c(Ge)(c(ue).RechargeState, l.state)), 3)]), f(Pe, {
                        class: "divier"
                    }), M.value ? (u(), d("div", Ct, [e("div", null, [e("span", null, a(t.$t("amount")), 1), e("span", bt, a(c(G)(l.orderAmount)), 1)]), e("div", null, [wt, e("span", null, a(l.transactionNo || "-"), 1)]), e("div", null, [e("span", null, a(t.$t("time")), 1), e("span", null, a(l.createTime), 1)]), e("div", null, [e("span", null, a(t.$t("orderNo")), 1), e("div", Dt, [e("span", null, a(l.orderNo), 1), f(ie, {
                        name: "copy",
                        onClick: q(j => c(W)(l.orderNo), ["stop"])
                    }, null, 8, ["onClick"])])])])) : (u(), d("div", Tt, [e("div", null, [e("span", null, a(t.$t("amount")), 1), e("span", It, a(c(G)(l.price)), 1)]), e("div", null, [e("span", null, a(t.$t("type")), 1), e("span", null, a(l == null ? void 0 : l.payName), 1)]), e("div", null, [e("span", null, a(t.$t("time")), 1), e("span", null, a(l.addTime), 1)]), [0, 2].includes(l.state) && [26e3, 26001].includes(l.payTypeId) && (l.groupID & 16384) === 16384 ? (u(), d("div", St, [e("span", null, a(t.$t("remarksContent")), 1), e("span", Nt, a(t.$t("arupiRemark")), 1)])) : g("v-if", !0), e("div", null, [e("span", null, a(t.$t("orderNo")), 1), e("div", Rt, [e("span", null, a(l.rechargeNumber), 1), f(ie, {
                        name: "copy",
                        onClick: q(j => c(W)(l.rechargeNumber), ["stop"])
                    }, null, 8, ["onClick"])])])])), g(` GroupID :
                    未申诉 = 32,
                    申诉中 = 64,
                    申诉失败 = 128,
                    申诉成功 = 256
                    提交utr = 512,
                    补单成功 = 1024,
                    超时取消= 2048,
                    可以申诉：4096
                    补提UTR = 8192,
                    联系客服 = 16384,
                     `), [0, 2].includes(l.state) ? (u(), d(le, {
                        key: 2
                    }, [ee(l) ? (u(), d("div", {
                        key: 0,
                        class: "report",
                        style: {
                            "margin-bottom": "10px"
                        },
                        onClick: q(j => Se(l), ["stop"])
                    }, a(t.$t("submitUtr")), 9, At)) : g("v-if", !0), (l.groupID & 16384) === 16384 || [21].includes(l.payID) ? (u(), d("div", {
                        key: 1,
                        class: "report report-b",
                        onClick: i[5] || (i[5] = q((...j) => c(U) && c(U)(...j), ["stop"]))
                    }, a(t.$t("contactServicer")), 1)) : g("v-if", !0), x(l) ? (u(), d("div", {
                        key: 2,
                        class: "report report-b",
                        onClick: q(j => c($)(l), ["stop"])
                    }, a(Z(l)), 9, Ut)) : g("v-if", !0), te(l) ? (u(), d("div", {
                        key: 3,
                        class: "report",
                        onClick: q(j => c(y)(l), ["stop"])
                    }, a([32, 544, 4096].includes(l.groupID) ? t.$t("appeal") : t.$t("compDetails")), 9, Pt)) : ![26e3, 26001].includes(l.payTypeId) && c(D) ? (u(), d("div", {
                        key: 4,
                        class: "report",
                        onClick: q(j => c(b)(l, M.value), ["stop"])
                    }, a(t.$t("report")), 9, Ot)) : g("v-if", !0)], 64)) : g("v-if", !0)], 8, yt))), 128))])]),
                    _: 1
                }, 8, ["list", "page-query", "api"]), f(_e, {
                    show: T.value,
                    "onUpdate:show": i[10] || (i[10] = l => T.value = l),
                    position: "bottom",
                    style: {
                        height: "30%"
                    }
                }, {
                    default: F(() => {
                        var l;
                        return [e("div", Mt, [f(he, {
                            round: "",
                            size: "small",
                            onClick: i[8] || (i[8] = () => {
                                T.value = !1, O.value = ""
                            })
                        }, {
                            default: F(() => [Q(a(t.$t("cancel")), 1)]),
                            _: 1
                        }), e("span", null, a(t.$t("submitUtr")), 1), f(he, {
                            round: "",
                            size: "small",
                            loading: L.value,
                            "loading-text": t.$t("submit"),
                            type: "primary",
                            onClick: Ne
                        }, {
                            default: F(() => [Q(a(t.$t("submit")), 1)]),
                            _: 1
                        }, 8, ["loading", "loading-text"])]), e("div", Bt, [e("div", null, [e("span", null, a(t.$t("utr")), 1), f(Oe, {
                            modelValue: O.value,
                            "onUpdate:modelValue": i[9] || (i[9] = J => O.value = J),
                            placeholder: "Input 12 digits here",
                            clearable: !0,
                            maxlength: 12,
                            type: "digit",
                            autocomplete: "off"
                        }, null, 8, ["modelValue"])]), e("div", null, [e("span", null, a(t.$t("amount")), 1), e("span", Vt, a(c(G)(V.value.price)), 1)]), e("div", null, [e("span", null, a(t.$t("type")), 1), e("span", null, a((l = V.value) == null ? void 0 : l.payName), 1)]), e("div", null, [e("span", null, a(t.$t("time")), 1), e("span", null, a(V.value.addTime), 1)]), e("div", null, [e("span", null, a(t.$t("orderNo")), 1), e("div", jt, [e("span", null, a(V.value.rechargeNumber), 1)])])])]
                    }),
                    _: 1
                }, 8, ["show"])])
            }
        }
    });
const Ht = oe(qt, [
        ["__scopeId", "data-v-f851bd18"],
        ["__file", "/usr/local/jenkins-prod/workspace/AR048-Pages-india-91club/src/views/wallet/RechargeHistory/index.vue"]
    ]),
    ts = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: Ht
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    Lt = {
        key: 0
    },
    Yt = {
        class: "info"
    },
    Ft = {
        class: "state_txt"
    },
    zt = {
        class: "tip"
    },
    Jt = ["src"],
    Et = {
        class: "btn_group"
    },
    Gt = ["src"],
    Kt = ["src"],
    Qt = ne({
        __name: "RechargeDetailHeader",
        props: {
            state: {
                type: Number,
                required: !0
            },
            info: {
                type: null,
                required: !0
            }
        },
        emits: ["onClickRight", "appeal", "appealAdmin"],
        setup(I, {
            emit: _
        }) {
            const p = I,
                {
                    t: s
                } = ge(),
                h = B(() => y.value.find(v => v.state === p.state)),
                k = B(() => {
                    var v;
                    return (v = y.value.find(C => C.state === p.state)) == null ? void 0 : v.state
                }),
                y = m([{
                    state: 1,
                    text: s("rechargeState0"),
                    tip: s("rdhTip1"),
                    tip2: s("tipPlaWaitPaciently"),
                    icon: N("wallet/recharge", "wait"),
                    className: "wait"
                }, {
                    state: 4,
                    text: s("completed"),
                    tip: s("c2cTip7"),
                    tip2: s("c2cTip8"),
                    icon: N("wallet/recharge", "success"),
                    className: "success"
                }, {
                    state: 5,
                    text: s("rechargeState4"),
                    tip: s("rdhTip2"),
                    tip2: s("rdhTip3"),
                    icon: N("wallet/recharge", "fail"),
                    className: "fail"
                }, {
                    state: 7,
                    text: s("rechargeState1"),
                    tip: s("rdhTip4"),
                    tip2: s("rdhTip5"),
                    icon: N("wallet/recharge", "timeout"),
                    className: "timeout"
                }, {
                    state: 6,
                    text: s("cancelled"),
                    tip: "",
                    icon: N("wallet/recharge", "cancel"),
                    className: "cancel"
                }, {
                    state: 3,
                    text: s("c2cState3"),
                    tip: s("c2cTip5"),
                    tip2: s("c2cTip6"),
                    icon: N("wallet/recharge", "appeal"),
                    className: "appeal"
                }, {
                    state: 8,
                    text: s("c2cState14"),
                    tip: s("amountError1"),
                    tip2: s("c2cTip33"),
                    icon: N("wallet/recharge", "amount_error"),
                    className: "appeal"
                }]),
                $ = () => {
                    _("onClickRight"), console.log("handleClickRight")
                },
                U = () => {
                    Qe.go(-1)
                };
            return ke(() => p.info, v => {
                p.state === 6 && (y.value[4].tip = v == null ? void 0 : v.cancelReason)
            }, {
                immediate: !0
            }), (v, C) => {
                var D, w, A, P, H, n, o, r, T;
                const b = R("NavBar");
                return u(), d("div", {
                    class: E(["upi_detail_header", (D = h.value) == null ? void 0 : D.className])
                }, [f(b, {
                    title: "",
                    "left-arrow": "",
                    onClickLeft: U,
                    onClickRight: $
                }, {
                    right: F(() => [y.value === 3 ? (u(), d("div", Lt, a(v.$t("concelOrder")), 1)) : g("v-if", !0)]),
                    _: 1
                }), e("div", Yt, [e("div", Ft, [Q(a((w = h.value) == null ? void 0 : w.text) + " ", 1), ((A = v.info) == null ? void 0 : A.state) === 1 ? (u(), pe(lt, {
                    "start-time": (P = v.info) == null ? void 0 : P.endTime,
                    "end-time": (H = v.info) == null ? void 0 : H.serviceTime,
                    "class-name": "state_txt",
                    key: (n = v.info) == null ? void 0 : n.id
                }, null, 8, ["start-time", "end-time"])) : g("v-if", !0)]), e("div", zt, [e("div", null, a((o = h.value) == null ? void 0 : o.tip), 1), e("div", null, a((r = h.value) == null ? void 0 : r.tip2), 1)])]), e("img", {
                    src: (T = h.value) == null ? void 0 : T.icon,
                    class: "state_img",
                    alt: ""
                }, null, 8, Jt), e("div", Et, [k.value === 7 ? (u(), d("div", {
                    key: 0,
                    class: "appeal",
                    onClick: C[0] || (C[0] = () => {
                        _("appeal")
                    })
                }, [e("img", {
                    src: c(N)("wallet/recharge/detail", "appeal"),
                    alt: ""
                }, null, 8, Gt), Q(" " + a(v.$t("appeal")), 1)])) : g("v-if", !0), k.value === 3 ? (u(), d("div", {
                    key: 1,
                    class: "appeal_admin",
                    onClick: C[1] || (C[1] = () => {
                        _("appealAdmin")
                    })
                }, a(v.$t("AppealsAdmin")), 1)) : g("v-if", !0), k.value === 7 || k.value === 3 || k.value === 1 ? (u(), d("div", {
                    key: 2,
                    class: "cancel",
                    onClick: C[2] || (C[2] = () => {
                        _("onClickRight")
                    })
                }, [e("img", {
                    src: c(N)("common", "close"),
                    alt: ""
                }, null, 8, Kt), Q(" " + a(v.$t("concelOrder")), 1)])) : g("v-if", !0)])], 2)
            }
        }
    });
const Wt = oe(Qt, [
        ["__scopeId", "data-v-fb8ab76f"],
        ["__file", "/usr/local/jenkins-prod/workspace/AR048-Pages-india-91club/src/components/Wallet/Recharge/RechargeDetailHeader.vue"]
    ]),
    re = I => (Ce("data-v-f3187262"), I = I(), be(), I),
    Xt = {
        key: 0,
        style: {
            padding: "20px 16px 0"
        }
    },
    xt = {
        class: "order_info"
    },
    Zt = {
        class: "title"
    },
    ea = ["src"],
    ta = re(() => e("div", {
        class: "dir"
    }, null, -1)),
    aa = {
        class: "order_info_box"
    },
    sa = {
        class: "order_info_item"
    },
    la = {
        class: "title"
    },
    na = {
        class: "amount"
    },
    oa = {
        class: "order_info_item"
    },
    ra = {
        class: "title"
    },
    ia = {
        class: "order_info_item"
    },
    ca = {
        class: "title"
    },
    ua = {
        class: "order_info_item"
    },
    da = {
        class: "title"
    },
    pa = {
        class: "time"
    },
    va = {
        key: 0,
        class: "order_info_item"
    },
    _a = {
        class: "title"
    },
    ha = {
        class: "time"
    },
    fa = re(() => e("div", {
        class: "divider"
    }, null, -1)),
    ma = {
        class: "order_info_box"
    },
    ga = {
        class: "order_info_item"
    },
    ya = re(() => e("div", {
        class: "title"
    }, "UTR", -1)),
    ka = {
        class: "order_num"
    },
    $a = ["src"],
    Ca = {
        class: "order_info_item"
    },
    ba = {
        class: "title"
    },
    wa = {
        class: "order_num"
    },
    Da = ["src"],
    Ta = {
        class: "order_info_item"
    },
    Ia = {
        class: "title"
    },
    Sa = {
        class: "time"
    },
    Na = {
        class: "upi_info"
    },
    Ra = {
        class: "upi_title"
    },
    Aa = {
        class: "order_info_box"
    },
    Ua = {
        class: "order_info_item"
    },
    Pa = re(() => e("div", {
        class: "title"
    }, "UPI", -1)),
    Oa = {
        class: "order_num"
    },
    Ma = ["src"],
    Ba = {
        key: 1,
        class: "upi_info"
    },
    Va = {
        class: "upi_title"
    },
    ja = ["src"],
    qa = {
        key: 2
    },
    Ha = {
        class: "upi_info"
    },
    La = {
        class: "upi_title tit_img"
    },
    Ya = ["src", "onClick"],
    Fa = {
        key: 0,
        class: "upi_info"
    },
    za = {
        class: "upi_title tit_video"
    },
    Ja = {
        style: {
            width: "100%"
        },
        controls: ""
    },
    Ea = ["src"],
    Ga = ne({
        __name: "index",
        setup(I) {
            const _ = ye(),
                p = m(3),
                s = m(),
                h = m(-1),
                k = m(),
                y = m(),
                $ = We(),
                U = B(() => {
                    var o, r;
                    return !!((o = s.value) != null && o.isAppealCompleted || [4, 3, 7, 1].includes((r = s.value) == null ? void 0 : r.state))
                }),
                v = B(() => {
                    var n, o, r;
                    if ((n = s.value) != null && n.ossUrls) return console.log(JSON.parse((o = s.value) == null ? void 0 : o.ossUrls)[0].fileUrl, $.getOSSUrl), $.getOSSUrl + "/" + JSON.parse(((r = s.value) == null ? void 0 : r.ossUrls) || "[]")[0].fileUrl || ""
                }),
                C = B(() => {
                    var n, o;
                    return (n = s.value) != null && n.withdrawOssUrls ? JSON.parse((o = s.value) == null ? void 0 : o.withdrawOssUrls).filter(r => r.fileType === 1) : []
                }),
                b = B(() => {
                    var n, o, r;
                    return (n = s.value) != null && n.withdrawOssUrls ? (r = JSON.parse((o = s.value) == null ? void 0 : o.withdrawOssUrls).filter(T => T.fileType === 2)[0]) == null ? void 0 : r.fileUrl : []
                }),
                D = async n => {
                    const o = await de(Xe({
                        orderId: n
                    }));
                    o && (s.value = o.data, k.value = o.data, h.value = o.data.state, s.value.state === 4 && (p.value = 4), s.value.state === 5 && s.value.isAppealCompleted && (p.value = 4), h.value !== 1 && y.value && clearInterval(y.value), (h.value === 3 || h.value === 7) && H())
                },
                w = () => {
                    var n;
                    _.push({
                        name: "CancelRecharge",
                        query: {
                            orderNo: (n = s.value) == null ? void 0 : n.id
                        }
                    })
                },
                A = async () => {
                    var n, o, r;
                    try {
                        await de(xe({
                            orderId: (n = s.value) == null ? void 0 : n.id
                        })), await D((o = s.value) == null ? void 0 : o.id), Le({
                            message: "申诉成功",
                            type: "success"
                        }), P(), h.value = (r = s.value) == null ? void 0 : r.state
                    } catch {}
                },
                P = () => {
                    var n;
                    Tawk_API.toggle(), window.Tawk_API.setAttributes({
                        order: (n = s.value) == null ? void 0 : n.id,
                        store: "recharge"
                    }, function(o) {
                        console.log("error", o)
                    })
                },
                H = () => {
                    let n = "https://embed.tawk.to/6452138631ebfa0fe7fbb175/1hb0ug9qm";
                    if (!document.getElementById("tawk-chatjs")) {
                        let o = document.createElement("script");
                        o.id = "tawk-chatjs", o.async = !0, o.src = n, document.head.appendChild(o)
                    }
                };
            return qe(() => {
                h.value = Number(_.currentRoute.value.query.state);
                const n = Number(_.currentRoute.value.query.orderNo) || -1;
                D(n), h.value === 1 ? y.value = setInterval(() => {
                    D(n)
                }, 5e3) : clearInterval(y.value), (h.value === 3 || h.value === 7) && H()
            }), He(() => {
                y.value && clearInterval(y.value)
            }), (n, o) => {
                var T, V, O, L, X, M, x, Z, ee, te, K, ae, se;
                const r = R("van-divider");
                return u(), d("div", null, [(u(), pe(Wt, {
                    state: h.value,
                    info: k.value,
                    onOnClickRight: w,
                    onAppeal: A,
                    onAppealAdmin: P,
                    key: h.value
                }, null, 8, ["state", "info"])), U.value ? (u(), d("div", Xt, [f(st, {
                    state: p.value,
                    type: (T = s.value) != null && T.isAppealCompleted || ((V = s.value) == null ? void 0 : V.state) === 3 ? 2 : 1
                }, null, 8, ["state", "type"])])) : g("v-if", !0), e("div", xt, [e("div", Zt, [e("img", {
                    src: c(Ze)("wallet", "upi"),
                    alt: ""
                }, null, 8, ea), e("span", null, "New UPI " + a(n.$t("recharge")), 1)]), ta, e("div", aa, [e("div", sa, [e("div", la, a(n.$t("orderAmount")), 1), e("span", na, a(c(G)((O = s.value) == null ? void 0 : O.orderAmount)), 1)]), e("div", oa, [e("div", ra, a(n.$t("actualAmount")), 1), e("span", null, a(c(G)((L = s.value) == null ? void 0 : L.finalAmount)), 1)]), e("div", ia, [e("div", ca, a(n.$t("award")), 1), e("span", null, a(c(G)((X = s.value) == null ? void 0 : X.discountAmount)), 1)]), e("div", ua, [e("div", da, a(n.$t("orderTime")), 1), e("span", pa, a((M = s.value) == null ? void 0 : M.createTime), 1)]), ((x = s.value) == null ? void 0 : x.state) === 8 ? (u(), d("div", va, [e("div", _a, a(n.$t("c2cTip47")), 1), e("span", ha, a((Z = s.value) == null ? void 0 : Z.lastUpdateTime), 1)])) : g("v-if", !0)]), fa, e("div", ma, [e("div", ga, [ya, e("div", ka, [e("span", null, a((ee = s.value) == null ? void 0 : ee.transactionNo), 1), e("img", {
                    src: c(N)("wallet/recharge", "copy1"),
                    alt: "",
                    onClick: o[0] || (o[0] = Y => {
                        var S;
                        return c(W)(((S = s.value) == null ? void 0 : S.transactionNo) || "-")
                    })
                }, null, 8, $a)])]), e("div", Ca, [e("div", ba, a(n.$t("orderNo")), 1), e("div", wa, [e("span", null, a((te = s.value) == null ? void 0 : te.orderNo), 1), e("img", {
                    src: c(N)("wallet/recharge", "copy1"),
                    alt: "",
                    onClick: o[1] || (o[1] = Y => {
                        var S;
                        return c(W)(((S = s.value) == null ? void 0 : S.orderNo) || "-")
                    })
                }, null, 8, Da)])]), e("div", Ta, [e("div", Ia, a(n.$t("PaymentTime")), 1), e("span", Sa, a((K = s.value) == null ? void 0 : K.confrimBeginTime), 1)])])]), e("div", Na, [e("div", Ra, a(n.$t("information")), 1), f(r), e("div", Aa, [e("div", Ua, [Pa, e("div", Oa, [e("span", null, a(((ae = s.value) == null ? void 0 : ae.sellerAccountNo) || "--"), 1), e("img", {
                    src: c(N)("wallet/recharge", "copy1"),
                    alt: "",
                    onClick: o[2] || (o[2] = Y => {
                        var S;
                        return c(W)(((S = s.value) == null ? void 0 : S.sellerAccountNo) || "-")
                    })
                }, null, 8, Ma)])])])]), ((se = s.value) == null ? void 0 : se.state) !== 8 ? (u(), d("div", Ba, [e("div", Va, a(n.$t("c2cTip50")), 1), f(r), e("img", {
                    src: v.value,
                    class: "pay_img",
                    alt: "",
                    onClick: o[3] || (o[3] = () => {
                        c(me)({
                            images: [v.value || ""],
                            closeable: !0
                        })
                    })
                }, null, 8, ja)])) : (u(), d("div", qa, [e("div", Ha, [e("div", La, a(n.$t("c2cTip48")), 1), f(r), (u(!0), d(le, null, $e(C.value, Y => (u(), d("img", {
                    src: c($).getOSSUrl + "/" + Y.fileUrl,
                    class: "withdraw_img",
                    alt: "",
                    onClick: () => {
                        c(me)({
                            images: [c($).getOSSUrl + "/" + Y.fileUrl],
                            closeable: !0
                        })
                    }
                }, null, 8, Ya))), 256))]), b.value ? (u(), d("div", Fa, [e("div", za, a(n.$t("c2cTip49")), 1), f(r), e("video", Ja, [e("source", {
                    src: c($).getOSSUrl + "/" + b.value
                }, null, 8, Ea)])])) : g("v-if", !0)])), g(` <div class="btn_group">
			<div class="appeal" v-if="orderDetail?.state === 7" @click="handleAppeal">{{ $t('appeal') }}</div>
			<div class="appeal_admin" v-if="orderDetail?.state === 3" @click="handleAppealAdmin">{{ $t('AppealsAdmin') }}</div>
			<div
				class="cancel"
				@click="handleCancelOrder"
				v-if="orderDetail?.state === 7 || orderDetail?.state === 3 || orderDetail?.state === 1"
			>
				{{ $t('concelOrder') }}
			</div>
		</div> `)])
            }
        }
    });
const Ka = oe(Ga, [
        ["__scopeId", "data-v-f3187262"],
        ["__file", "/usr/local/jenkins-prod/workspace/AR048-Pages-india-91club/src/views/wallet/RechargeHistory/RechargeUpiDetail/index.vue"]
    ]),
    as = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: Ka
    }, Symbol.toStringTag, {
        value: "Module"
    }));
export {
    ct as C, as as a, ts as i
};