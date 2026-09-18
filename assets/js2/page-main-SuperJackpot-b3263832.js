import {
    G as N,
    R as B,
    H as w,
    aA as O,
    I as u,
    Q as r,
    O as t,
    J as e,
    P as s,
    ap as D,
    ao as R,
    av as g,
    Z as j,
    N as l,
    K as P,
    M as z,
    aB as b,
    ax as M,
    au as L,
    aC as U,
    aD as q,
    C as K,
    r as W,
    A as H
} from "./common.modules-5cfe2cf4.js";
import {
    y as Z,
    cz as E,
    c as C,
    cA as Y,
    _ as I,
    b as J,
    aL as ee,
    cB as se
} from "./page-activity-ActivityDetail-a58ec568.js";
import {
    D as te
} from "./page-activity-Championship-4e6c587b.js";
import {
    L as G,
    E as oe
} from "./page-activity-Bonus-3c16c86d.js";
const ne = p => (U("data-v-6243ef37"), p = p(), q(), p),
    ie = {
        class: "Xg-page"
    },
    ae = {
        class: "Xg-info"
    },
    le = {
        class: "tit"
    },
    ce = {
        class: "tip"
    },
    re = {
        class: "txt"
    },
    de = {
        class: "Xg-page-wrap"
    },
    ue = {
        class: "tab"
    },
    _e = {
        class: "Xg-list"
    },
    pe = {
        class: "header c-row c-row-between"
    },
    ve = {
        class: "time"
    },
    me = {
        key: 0,
        class: "red"
    },
    ge = {
        class: "c-row body c-row-middle"
    },
    $e = {
        class: "img"
    },
    he = {
        class: "info"
    },
    ye = {
        class: "name"
    },
    be = {
        class: "lab"
    },
    ke = ne(() => e("div", {
        class: "line"
    }, null, -1)),
    we = {
        class: "numbox"
    },
    fe = {
        class: "citem"
    },
    Re = {
        class: "num"
    },
    Ce = {
        class: "txt"
    },
    Ae = {
        class: "citem"
    },
    Se = {
        class: "num red"
    },
    Te = {
        class: "txt"
    },
    je = {
        class: "box"
    },
    Le = {
        class: "Laundry-Con"
    },
    Ne = {
        key: 0,
        class: "Laundry-Con_tip"
    },
    Be = {
        key: 1,
        class: "Laundry-Con_tip"
    },
    Pe = {
        key: 2
    },
    ze = N({
        __name: "index",
        setup(p) {
            const {
                getRewardValidityTime: f
            } = Z(), {
                goRule: m,
                goStar: $,
                RewardsRecordPageList: d,
                listRef: _,
                DialogShow: h,
                pageQuery: a,
                recivedAll: i,
                isRecived: y,
                onLaundy: k,
                onRecived: v,
                goBack: A,
                onRecivedAll: X
            } = E(), Q = B();
            return (n, c) => {
                const V = w("NavBar"),
                    S = w("svg-icon"),
                    T = w("van-button"),
                    F = O("lazy");
                return l(), u("div", ie, [r(V, {
                    title: n.$t("superjackpot"),
                    "left-arrow": "",
                    onClickLeft: t(A)
                }, null, 8, ["title", "onClickLeft"]), e("div", ae, [e("div", null, [e("h3", le, s(n.$t("superjackpot")), 1), e("p", ce, s(n.$t("tip") + n.$t("txt")), 1), e("p", re, s(n.$t("superJackpotTxt", [t(f)])), 1)])]), e("div", de, [e("div", {
                    class: D(["receive-all", {
                        "no-receive": t(y)
                    }]),
                    onClick: c[0] || (c[0] = (...o) => t(X) && t(X)(...o))
                }, [r(S, {
                    class: "icon",
                    name: "super_no"
                }), R(` <svg-icon class="icon" v-else  name='super_1' /> `), e("span", null, s(n.$t("receiveAll")), 1)], 2), e("ul", ue, [e("li", {
                    class: "tab-item",
                    onClick: c[1] || (c[1] = (...o) => t(m) && t(m)(...o))
                }, [r(S, {
                    name: "rule"
                }), e("span", null, s(n.$t("ruleillustrate")), 1)]), e("li", {
                    class: "tab-item",
                    onClick: c[2] || (c[2] = (...o) => t($) && t($)(...o))
                }, [r(S, {
                    name: "winningStar"
                }), e("span", null, s(n.$t("winningstar")), 1)])]), R(" 列表 "), r(G, {
                    api: t(Y),
                    list: t(d),
                    "onUpdate:list": c[3] || (c[3] = o => j(d) ? d.value = o : null),
                    "page-query": t(a),
                    "onUpdate:pageQuery": c[4] || (c[4] = o => j(a) ? a.value = o : null),
                    ref_key: "listRef",
                    ref: _
                }, {
                    content: g(() => [e("div", _e, [(l(!0), u(P, null, z(t(d), (o, x) => (l(), u("div", {
                        class: "item m-b-20",
                        key: x
                    }, [e("div", pe, [e("div", {
                        class: D(["tit", {
                            action: o.isReceive == 0,
                            action2: o.isReceive == 2
                        }])
                    }, s(o.isReceive == 1 ? n.$t("received") : o.isReceive == 2 ? n.$t("rewardExpired") : n.$t("unaccalimed")), 3), e("div", ve, [e("div", null, s(o.createTime), 1), o.expirationFormatTime ? (l(), u("div", me, [b(s(o.expirationFormatTime), 1), e("span", null, s(n.$t("expiredTime")), 1)])) : R("v-if", !0)])]), e("div", ge, [R(` <img class="img" :src="require('@/assets/images/game/1.png')" /> `), M(e("img", $e, null, 512), [
                        [F, o.imgUrl]
                    ]), e("div", he, [e("p", ye, s(o.gameName), 1), e("p", be, [e("span", null, s(o.orderNo), 1)])])]), ke, e("div", we, [e("div", fe, [e("p", Re, s(o.multiple) + "X", 1), e("span", Ce, s(n.$t("Winningmultiple")), 1)]), e("div", Ae, [e("p", Se, s(t(C)(o.bonusAmount)), 1), e("span", Te, s(n.$t("Additionalrewards")), 1)])]), e("div", je, [o.isReceive === 0 ? (l(), L(T, {
                        key: 0,
                        class: "Xg-btn",
                        round: "",
                        type: "primary",
                        block: "",
                        onClick: $s => t(v)(o.orderId)
                    }, {
                        default: g(() => [b(s(n.$t("receive")), 1)]),
                        _: 2
                    }, 1032, ["onClick"])) : o.isReceive === 1 ? (l(), L(T, {
                        key: 1,
                        class: "Xg-btn-received",
                        round: "",
                        type: "primary",
                        block: ""
                    }, {
                        default: g(() => [b(s(n.$t("received")), 1)]),
                        _: 1
                    })) : (l(), L(T, {
                        key: 2,
                        class: "Xg-btn-expired",
                        round: "",
                        block: ""
                    }, {
                        default: g(() => [b(s(n.$t("rewardExpiredTime")), 1)]),
                        _: 1
                    }))])]))), 128))])]),
                    empty: g(() => [r(oe, null, {
                        text: g(() => [e("p", null, s(n.$t("notAmegaJackpot")), 1)]),
                        _: 1
                    })]),
                    _: 1
                }, 8, ["api", "list", "page-query"]), e("div", {
                    class: "go-bet",
                    onClick: c[5] || (c[5] = o => t(Q).push("/"))
                }, s(n.$t("goBetting")), 1)]), r(te, {
                    show: t(h),
                    "onUpdate:show": c[6] || (c[6] = o => j(h) ? h.value = o : null),
                    "img-url": "succeed",
                    onConfirm: t(k),
                    "show-cancel-btn": !1,
                    confirmText: "OK",
                    title: n.$t("succTip1")
                }, {
                    content: g(() => [e("div", Le, [t(i).type == -1 ? (l(), u("div", Ne, s(n.$t("succTip2")), 1)) : (l(), u("div", Be, s(n.$t("receiveAllSuccess")), 1)), t(i).type == 1 ? (l(), u("ul", Pe, [e("li", null, [e("h3", null, s(t(i).orderCount), 1), e("p", null, s(n.$t("awardCount")), 1)]), e("li", null, [e("h3", null, s(t(C)(t(i).totalReceiveAmount)), 1), e("p", null, s(n.$t("awardAmount")), 1)])])) : R("v-if", !0)])]),
                    _: 1
                }, 8, ["show", "onConfirm", "title"])])
            }
        }
    });
const Ie = I(ze, [
        ["__scopeId", "data-v-6243ef37"],
        ["__file", "/usr/local/jenkins-prod/workspace/AR048-Pages-india-91club/src/views/main/SuperJackpot/index.vue"]
    ]),
    ws = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: Ie
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    Xe = {
        class: "jackpot-rule"
    },
    De = {
        class: "rule-bannerMain"
    },
    Je = {
        class: "rule-content"
    },
    Oe = {
        class: "rule-content-top"
    },
    Me = {
        class: "rule-content-top-right"
    },
    Ue = {
        class: "rule-content-tip"
    },
    qe = {
        class: "jackpot-rule-wrap"
    },
    Ee = {
        class: "title"
    },
    Ge = {
        class: "table-container"
    },
    Qe = {
        class: "table-title"
    },
    Ve = {
        class: "jackpot-rule-owener"
    },
    Fe = N({
        __name: "index",
        setup(p) {
            const f = B(),
                {
                    getRuleList: m,
                    ruleList: $,
                    gotoCustom: d
                } = E(),
                _ = sessionStorage.getItem("dollarSign"),
                h = a => {
                    const [i, y] = a.split("-");
                    return `${i}X-${y}X`
                };
            return K(() => m()), (a, i) => {
                const y = w("NavBar"),
                    k = w("svg-icon");
                return l(), u("div", Xe, [r(y, {
                    title: a.$t("ruleillustrate"),
                    "left-arrow": "",
                    onClickLeft: i[0] || (i[0] = v => t(f).go(-1))
                }, null, 8, ["title"]), e("div", De, [e("div", Je, [e("div", Oe, [e("div", Me, [e("h3", null, s(a.$t("superjackpot")), 1), e("p", null, s(a.$t("ruleillustrate1")), 1)])]), e("div", Ue, [r(k, {
                    name: "warningTriangle"
                }), e("p", null, s(a.$t("ruleillustrate2")), 1)])])]), e("div", qe, [e("div", Ee, [r(k, {
                    name: "superJackpotRule"
                }), b(" " + s(a.$t("winTips5")), 1)]), e("div", Ge, [e("div", Qe, [e("div", null, s(a.$t("winningrate")), 1), e("div", null, s(a.$t("betAmounts")), 1), e("div", null, s(a.$t("winTips5")), 1)]), (l(!0), u(P, null, z(t($), (v, A) => (l(), u("div", {
                    class: "table-content",
                    key: A
                }, [e("div", null, s(h(v.multipleName)), 1), e("div", null, s(t(_)) + s(v.betAmountName.split("-")[0] + "-" + t(_) + v.betAmountName.split("-")[1]), 1), e("div", null, s(t(C)(v.awardAmount)), 1)]))), 128))]), e("div", Ve, [r(k, {
                    name: "rightTriangle"
                }), b(" " + s(a.$t("ruleillustaate3")), 1)]), e("div", {
                    class: "jackpot-rule-custom",
                    onClick: i[1] || (i[1] = (...v) => t(d) && t(d)(...v))
                }, [r(k, {
                    name: "customerPublic"
                }), b(" " + s(a.$t("withdrawDialogDesc5")), 1)])])])
            }
        }
    });
const xe = I(Fe, [
        ["__scopeId", "data-v-bc9939e5"],
        ["__file", "/usr/local/jenkins-prod/workspace/AR048-Pages-india-91club/src/views/main/SuperJackpot/rule/index.vue"]
    ]),
    fs = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: xe
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    Ke = p => (U("data-v-7c5c25a2"), p = p(), q(), p),
    We = {
        class: "jackpot-star"
    },
    He = {
        class: "jackpot-star-list"
    },
    Ze = {
        class: "starheader"
    },
    Ye = ["data-img"],
    es = {
        class: "nickname"
    },
    ss = Ke(() => e("div", {
        class: "solidline"
    }, null, -1)),
    ts = {
        class: "starcontent"
    },
    os = {
        class: "rowcontent"
    },
    ns = {
        class: "label"
    },
    is = {
        class: "name"
    },
    as = {
        class: "rowcontent"
    },
    ls = {
        class: "label"
    },
    cs = {
        class: "multiple"
    },
    rs = {
        class: "rowcontent"
    },
    ds = {
        class: "label"
    },
    us = {
        class: "money"
    },
    _s = {
        class: "rowcontent"
    },
    ps = {
        class: "label"
    },
    vs = {
        class: "time"
    },
    ms = N({
        __name: "index",
        setup(p) {
            const f = B(),
                m = W([]),
                $ = H({
                    pageSize: 10,
                    isAll: !0
                });
            return (d, _) => {
                const h = w("NavBar"),
                    a = O("lazy");
                return l(), u("div", We, [r(h, {
                    title: d.$t("winningstar"),
                    "left-arrow": "",
                    onClickLeft: _[0] || (_[0] = i => t(f).go(-1))
                }, null, 8, ["title"]), r(G, {
                    api: t(se),
                    list: m.value,
                    "onUpdate:list": _[1] || (_[1] = i => m.value = i),
                    "page-query": $,
                    "onUpdate:pageQuery": _[2] || (_[2] = i => $ = i)
                }, {
                    content: g(() => [e("div", He, [(l(!0), u(P, null, z(m.value, (i, y) => (l(), u("div", {
                        class: "star-item",
                        key: y
                    }, [e("div", Ze, [M(e("img", {
                        "data-img": t(J)("main/Avatar", "1")
                    }, null, 8, Ye), [
                        [a, t(J)("main/Avatar", i.userPhoto)]
                    ]), e("div", es, s(t(ee)(i.userName)), 1)]), ss, e("div", ts, [e("div", os, [e("div", ns, s(d.$t("gamename")), 1), e("div", is, s(i.gameName), 1)]), e("div", as, [e("div", ls, s(d.$t("Winningmultiple")), 1), e("div", cs, s(i.multiple + "X"), 1)]), e("div", rs, [e("div", ds, s(d.$t("winTips5")), 1), e("div", us, s(t(C)(i.bonusAmount)), 1)]), e("div", _s, [e("div", ps, s(d.$t("winningtime")), 1), e("div", vs, s(i.createTime), 1)])])]))), 128))])]),
                    _: 1
                }, 8, ["api", "list", "page-query"])])
            }
        }
    });
const gs = I(ms, [
        ["__scopeId", "data-v-7c5c25a2"],
        ["__file", "/usr/local/jenkins-prod/workspace/AR048-Pages-india-91club/src/views/main/SuperJackpot/star/index.vue"]
    ]),
    Rs = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: gs
    }, Symbol.toStringTag, {
        value: "Module"
    }));
export {
    fs as a, Rs as b, ws as i
};