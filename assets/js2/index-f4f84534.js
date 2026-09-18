var Re = Object.defineProperty;
var Le = (s, t, o) => t in s ? Re(s, t, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: o
}) : s[t] = o;
var re = (s, t, o) => (Le(s, typeof t != "symbol" ? t + "" : t, o),
o);
import {R as ve, B as U, G as E, aI as se, O as i, T as K, H as M, N as r, I as m, K as G, M as ee, J as e, au as N, ao as w, Q as B, P as l, ap as te, aB as j, C as z, E as ye, r as y, aA as de, ax as O, aC as oe, aD as ne, w as Pe, af as De, $ as H, av as R, z as we, bI as fe, bJ as ue, bH as Ue, bm as xe, aY as ge, bK as Ne, a5 as Ve, ar as Z, az as Oe, ay as Q, aq as Me, n as $e, bD as Ee, o as je, bL as ze, bM as Ge, bN as He, bO as Fe, bP as We, bQ as Ke, bR as Ye, bS as qe, bi as Xe, bT as Je, bg as Qe, bU as Ze, bV as et, bW as tt, bX as st, bY as ot, bZ as nt, b_ as at, bh as it, b$ as lt, c0 as ct, c1 as rt, c2 as ut, c3 as dt, c4 as vt, c5 as _t, bl as pt, c6 as mt, c7 as ft, c8 as gt, c9 as ht, ca as bt, cb as yt, cc as wt, cd as $t, ce as kt, cf as St, cg as Ct, ch as At, ci as It, cj as Tt, ck as Bt, cl as Rt} from "./common.modules-5cfe2cf4.js";
import {y as ae, b as ke, c as X, _ as V, G as ie, a1 as Se, g as W, n as J, m as Ce, cR as Lt, ek as Pt, u as Dt, b9 as Ut, el as xt, em as Nt, a3 as Vt, a4 as Ot, en as Mt, eo as Et, a6 as jt, ep as zt, eq as Gt, a$ as Ht, aS as Ft, er as Wt, es as Kt, et as Yt, eu as qt, bA as Xt, cD as Jt, bB as Qt, bD as Zt, N as Ae, i as es, ev as ts, aI as ss, ew as os, ex as he, ey as ns, aD as Ie} from "./page-activity-ActivityDetail-a58ec568.js";
import {f as as} from "./page-activity-FirstRecharge-4cdf7b09.js";
import {B as is} from "./page-activity-Bonus-3c16c86d.js";
import "./page-turntable-assets-d6267459.js";
import "./native/index-2ac88fb8.js";
import "./en-cfd26acf.js";
import "./page-activity-DailySignIn-543fff66.js";
window.getBuildInfo = function() {
    return {
        buildTime: "3/12/2026, 8:20:24 PM",
        branch: " commitId:3065f80024ab2c076f38b11e498aa7c9aae6370d"
    }
}
;
(function() {
    const t = document.createElement("link").relList;
    if (t && t.supports && t.supports("modulepreload"))
        return;
    for (const a of document.querySelectorAll('link[rel="modulepreload"]'))
        n(a);
    new MutationObserver(a => {
        for (const d of a)
            if (d.type === "childList")
                for (const v of d.addedNodes)
                    v.tagName === "LINK" && v.rel === "modulepreload" && n(v)
    }
    ).observe(document, {
        childList: !0,
        subtree: !0
    });
    function o(a) {
        const d = {};
        return a.integrity && (d.integrity = a.integrity),
        a.referrerPolicy && (d.referrerPolicy = a.referrerPolicy),
        a.crossOrigin === "use-credentials" ? d.credentials = "include" : a.crossOrigin === "anonymous" ? d.credentials = "omit" : d.credentials = "same-origin",
        d
    }
    function n(a) {
        if (a.ep)
            return;
        a.ep = !0;
        const d = o(a);
        fetch(a.href, d)
    }
}
)();
const ls = [{
    name: "home"
}, {
    name: "activity"
}, {
    name: "turntable"
}, {
    name: "promotion"
}, {
    name: "main"
}]
  , cs = () => {
    const s = ve();
    async function t(v) {
        await s.push({
            name: v
        })
    }
    const o = ae()
      , n = U( () => `url(${o.getInvitedWheelImgUrl ? o.getInvitedWheelImgUrl : ke("common", "wheel")})`)
      , a = U( () => o.getInvitedWheelTotalPrizeAmount);
    return {
        isTurntable: U( () => o.getIsOpenInvitedWheel),
        getInvitedWheelImgUrl: n,
        getInvitedWheelTotalPrizeAmount: a,
        handleClick: t
    }
}
  , rs = {
    key: 0,
    class: "tabbar__container"
}
  , us = ["onClick"]
  , ds = {
    key: 1,
    class: "promotionBg"
}
  , vs = {
    key: 2
}
  , _s = {
    key: 1,
    class: "tabbar__container"
}
  , ps = ["onClick"]
  , ms = {
    key: 0,
    class: "turntableBg"
}
  , fs = {
    key: 1,
    class: "turntable-text"
}
  , gs = {
    key: 2
}
  , hs = E({
    __name: "91club",
    setup(s) {
        se(_ => ({
            "60defda3-getInvitedWheelImgUrl": i(n)
        }));
        const t = K()
          , {isTurntable: o, getInvitedWheelImgUrl: n, getInvitedWheelTotalPrizeAmount: a, handleClick: d} = cs()
          , v = [{
            name: "promotion"
        }, {
            name: "activity"
        }, {
            name: "home"
        }, {
            name: "wallet"
        }, {
            name: "main"
        }];
        return (_, b) => {
            const c = M("svg-icon");
            return i(o) ? (r(),
            m("div", _s, [(r(!0),
            m(G, null, ee(i(ls), (p, S) => (r(),
            m("div", {
                class: te(["tabbar__container-item", {
                    active: p.name === i(t).name
                }]),
                key: p + "" + S,
                onClick: k => i(d)(p.name)
            }, [B(c, {
                name: p.name === "promotion" ? "promotion2" : p.name
            }, null, 8, ["name"]), p.name === "turntable" ? (r(),
            m("div", ms)) : w("v-if", !0), p.name === "turntable" ? (r(),
            m("span", fs, [w(" {{ $t('invitedWheel') }} "), j(" " + l(_.$t("getMoney", [i(X)(i(a), "", 0)])), 1)])) : (r(),
            m("span", gs, l(_.$t(p.name)), 1))], 10, ps))), 128))])) : (r(),
            m("div", rs, [(r(),
            m(G, null, ee(v, (p, S) => e("div", {
                class: te(["tabbar__container-item", {
                    active: p.name === i(t).name
                }]),
                key: p + "" + S,
                onClick: k => i(d)(p.name)
            }, [S !== 2 ? (r(),
            N(c, {
                key: 0,
                name: p.name === i(t).name ? `p3_${p.name}_a` : `p3_${p.name}`
            }, null, 8, ["name"])) : w("v-if", !0), S == 2 ? (r(),
            m("div", ds, [B(c, {
                name: `p3_${p.name}`
            }, null, 8, ["name"])])) : (r(),
            m("span", vs, l(_.$t(p.name)), 1))], 10, us)), 64))]))
        }
    }
});
const bs = V(hs, [["__scopeId", "data-v-60defda3"], ["__file", "/usr/local/jenkins-prod/workspace/AR048-Pages-india-91club/src/components/TabBar/91club.vue"]]);
function ys() {
    const s = ie()
      , t = () => {
        document.visibilityState === "visible" ? s.setvisibility() : s.setvisibility(0)
    }
    ;
    z( () => {
        document.addEventListener("visibilitychange", t)
    }
    ),
    ye( () => {
        document.removeEventListener("visibilitychange", t)
    }
    )
}
const ws = E({
    __name: "Customer",
    setup(s) {
        se(T => ({
            "f6a705e1-currentFontFamily": q.value
        }));
        const t = "redHome"
          , o = K()
          , {getSelfCustomerServiceLink: n} = Se({
            ServerType: 2
        })
          , a = y(!1)
          , d = y({
            x: 0,
            y: 0
        })
          , v = y(0)
          , _ = y(0)
          , b = y(0)
          , c = y(0)
          , p = y(0)
          , S = y(0)
          , k = y();
        let h, A, $, g;
        const u = U( () => ["electronic", "blackGoldHome"].includes(t) ? !1 : !["/wallet/Withdraw/C2cDetail", "/wallet/RechargeHistory/RechargeUpiDetail", "/wallet/Withdraw/Upi", "/wallet/Withdraw/AddUpi", "/wallet/Withdraw/c2cCancelWithdrawal/index.vue", "/wallet/otherPay?type=C2C", "/home/game", "/installApp"].includes(o.path));
        function f() {
            Y(h, A, $, g) || n()
        }
        z( () => {
            k.value = document.getElementById("customerId")
        }
        );
        function D(T) {
            a.value = !0;
            var C;
            T.touches ? C = T.touches[0] : C = T,
            d.value.x = C.clientX,
            d.value.y = C.clientY,
            v.value = k.value.offsetLeft,
            _.value = k.value.offsetTop,
            h = T.clientX,
            A = T.clientY
        }
        function L(T) {
            if (a.value) {
                var C, P = document.getElementById("customerId"), x = P.clientWidth, F = P.clientHeight, pe = document.documentElement.clientHeight, me = document.documentElement.clientWidth;
                T.touches ? C = T.touches[0] : C = T,
                b.value = C.clientX - d.value.x,
                c.value = C.clientY - d.value.y,
                p.value = v.value + b.value,
                S.value = _.value + c.value,
                p.value <= 0 && (p.value = 0),
                S.value <= 0 && (S.value = 0),
                p.value >= me - x && (p.value = me - x),
                S.value >= pe - F && (S.value = pe - F),
                k.value.style.left = p.value + "px",
                k.value.style.top = S.value + "px",
                document.addEventListener("touchmove", function() {
                    T.preventDefault()
                }, !1)
            }
            T.stopPropagation(),
            T.preventDefault()
        }
        function I(T) {
            a.value = !1,
            $ = T.clientX,
            g = T.clientY
        }
        function Y(T, C, P, x) {
            return !(Math.sqrt((T - P) * (T - P) + (C - x) * (C - x)) <= 1)
        }
        const q = y("bahnschrift");
        return (T, C) => {
            const P = de("lazy")
              , x = de("scrollhide");
            return u.value ? O((r(),
            m("div", {
                key: 0,
                class: "customer",
                onClick: f,
                onMousedown: D,
                onTouchstart: D,
                onMousemove: L,
                onTouchmove: L,
                onMouseup: I,
                id: "customerId"
            }, [O(e("img", null, null, 512), [[P, i(W)("home", "icon_sevice")]])], 32)), [[x]]) : w("v-if", !0)
        }
    }
});
const $s = V(ws, [["__file", "/usr/local/jenkins-prod/workspace/AR048-Pages-india-91club/src/components/common/Customer.vue"]])
  , ks = "/assets/png/logo-f7e29255.png";
const Ss = {}
  , Te = s => (oe("data-v-5eb72be7"),
s = s(),
ne(),
s)
  , Cs = {
    class: "start-page"
}
  , As = Te( () => e("div", {
    class: "dice"
}, null, -1))
  , Is = Te( () => e("img", {
    class: "logo",
    src: ks
}, null, -1));
function Ts(s, t) {
    return r(),
    m("div", Cs, [e("div", null, [As, e("p", null, l(s.$t("fairAndSafe")), 1), Is])])
}
const Bs = V(Ss, [["render", Ts], ["__scopeId", "data-v-5eb72be7"], ["__file", "/usr/local/jenkins-prod/workspace/AR048-Pages-india-91club/entrance/ar048/StartPage.vue"]])
  , Rs = {
    class: "header"
}
  , Ls = {
    class: "title"
}
  , Ps = {
    class: "tip"
}
  , Ds = {
    class: "container"
}
  , Us = {
    class: "footer"
}
  , xs = E({
    __name: "dialog",
    setup(s) {
        const t = ve()
          , o = K()
          , n = y(!1)
          , {closeFirstSave: a} = J()
          , {ActiveSotre: d, getFirstRechargeList: v} = Ce()
          , _ = Pe(new Date).format("YYYY-MM-DD")
          , b = De("firstSave", null)
          , c = U( () => b.value == _)
          , p = () => {
            c.value ? (b.value = "",
            localStorage.removeItem("firstSave")) : b.value = _
        }
          , S = () => {
            n.value = !1,
            a()
        }
          , k = ["activity", "home", "main", "wallet", "promotion"];
        H( () => o.name, g => {
            k.includes(o.name) && h()
        }
        );
        const h = () => {
            if (b.value == _)
                return a();
            v().then(g => {
                if (!g.length) {
                    n.value = !1,
                    a();
                    return
                }
                const u = g.find(f => f.isFinshed);
                u && (d.value.isShowFirstSaveDialog = !1),
                u || (n.value = !0)
            }
            )
        }
          , A = () => {
            n.value = !1,
            a(!0),
            t.push({
                name: "FirstRecharge"
            })
        }
          , $ = () => {
            n.value = !1,
            a(!0),
            t.push({
                name: "Recharge"
            })
        }
        ;
        return z( () => {
            k.includes(o.name) && h()
        }
        ),
        (g, u) => {
            const f = M("van-checkbox")
              , D = M("van-dialog");
            return r(),
            N(D, {
                show: n.value,
                "onUpdate:show": u[1] || (u[1] = L => n.value = L),
                className: "firstSaveDialog"
            }, {
                title: R( () => [e("div", Rs, [e("div", Ls, l(g.$t("firstDialogH")), 1), e("div", Ps, l(g.$t("firstDialogTip")), 1)])]),
                footer: R( () => [e("div", Us, [w(` <div class="active" :class="{ a: isActive}" @click="changeActive"><svg-icon name="active" />{{ $t('noTipToday') }}</div> `), e("div", {
                    class: te(["active", {
                        a: c.value
                    }]),
                    onClick: p
                }, [B(f, {
                    modelValue: c.value,
                    "onUpdate:modelValue": u[0] || (u[0] = L => c.value = L)
                }, null, 8, ["modelValue"]), j(l(g.$t("noTipToday")), 1)], 2), e("div", {
                    class: "btn",
                    onClick: A
                }, l(g.$t("activity")), 1)])]),
                default: R( () => [e("div", Ds, [B(as, {
                    list: i(d).FirstRechargeList,
                    onGorecharge: $
                }, null, 8, ["list"])]), e("div", {
                    class: "close",
                    onClick: S
                })]),
                _: 1
            }, 8, ["show"])
        }
    }
});
const Ns = V(xs, [["__scopeId", "data-v-9cd12fb2"], ["__file", "/usr/local/jenkins-prod/workspace/AR048-Pages-india-91club/src/components/Activity/FirstRecharge/dialog.vue"]])
  , Vs = s => (oe("data-v-7dee72bf"),
s = s(),
ne(),
s)
  , Os = {
    key: 0,
    class: "second-verification"
}
  , Ms = {
    class: "head"
}
  , Es = {
    key: 0,
    class: "tip"
}
  , js = {
    key: 1,
    class: "tip"
}
  , zs = {
    key: 2,
    class: "errorText"
}
  , Gs = {
    class: "pin-wrapper"
}
  , Hs = {
    class: "pin-input"
}
  , Fs = {
    class: "numeric-keypad"
}
  , Ws = ["onClick"]
  , Ks = Vs( () => e("div", {
    class: "key key--placeholder"
}, null, -1))
  , Ys = E({
    __name: "secondVerification",
    setup(s) {
        const {t} = we()
          , o = y(!0)
          , n = y(!0)
          , a = y([])
          , d = y("")
          , v = y(0)
          , _ = y("")
          , b = y("")
          , c = y(0)
          , p = async $ => {
            const g = await ue.genSalt(10);
            return await ue.hash($, g)
        }
          , S = async ($, g) => await ue.compare($, g)
          , k = async $ => {
            if (!(a.value.length >= 6) && (a.value.push($),
            a.value.length === 6))
                if (n.value) {
                    if (v.value === 0) {
                        v.value = 1,
                        d.value = a.value.join(""),
                        a.value = [];
                        return
                    }
                    if (v.value === 1) {
                        const g = a.value.join("");
                        g === d.value ? (_.value = await p(g),
                        Pt("appLock", _.value).then( () => {
                            a.value = [],
                            v.value = 0,
                            d.value = "",
                            o.value = !1,
                            n.value = !1
                        }
                        )) : (b.value = t("registerTip4"),
                        a.value = [],
                        v.value = 0,
                        d.value = "")
                    }
                } else {
                    const g = a.value.join("")
                      , u = await S(g, _.value);
                    console.log("verify", u),
                    u ? (o.value = !1,
                    a.value = []) : (a.value = [],
                    c.value += 1,
                    b.value = t("idlockTip1", [c.value]),
                    c.value >= 3 && A())
                }
        }
          , h = () => {
            a.value.pop()
        }
          , A = () => {
            localStorage.clear(),
            sessionStorage.clear(),
            fe.exitApp()
        }
        ;
        return z(async () => {
            let $ = await Lt(["appLock"]);
            _.value = ($ == null ? void 0 : $.appLock) || "",
            n.value = !_.value,
            fe.addListener("appStateChange", ({isActive: g}) => {
                g ? (console.log("App 被唤起（从后台回来或直接启动）"),
                o.value = !0) : console.log("App 进入后台")
            }
            )
        }
        ),
        ($, g) => o.value ? (r(),
        m("div", Os, [e("div", Ms, [j(l($.$t("loginPSW")) + " ", 1), e("div", {
            class: "out",
            onClick: A
        }, l($.$t("logout")), 1)]), n.value ? (r(),
        m("div", Es, l(v.value === 0 ? $.$t("newPSWRest") : $.$t("newPSWconfirm")), 1)) : (r(),
        m("div", js, l($.$t("registerTip2")), 1)), b.value ? (r(),
        m("div", zs, l(b.value), 1)) : w("v-if", !0), e("div", Gs, [w(" 6 位输入框 "), e("div", Hs, [(r(),
        m(G, null, ee(6, u => e("div", {
            key: u,
            class: te(["pin-box", a.value.length >= u && "a"])
        }, null, 2)), 64))]), w(" 数字键盘 "), e("div", Fs, [(r(),
        m(G, null, ee(9, u => e("button", {
            key: u,
            class: "key",
            type: "button",
            onClick: f => k(String(u))
        }, l(u), 9, Ws)), 64)), w(" 占位 "), Ks, w(" 0 "), e("button", {
            class: "key",
            type: "button",
            onClick: g[0] || (g[0] = u => k("0"))
        }, "0"), w(" 删除 "), e("button", {
            class: "key key--danger",
            type: "button",
            onClick: h
        }, "←")])])])) : w("v-if", !0)
    }
});
const qs = V(Ys, [["__scopeId", "data-v-7dee72bf"], ["__file", "/usr/local/jenkins-prod/workspace/AR048-Pages-india-91club/src/components/common/secondVerification.vue"]])
  , Xs = {
    class: "title"
}
  , Js = {
    class: "container"
}
  , Qs = E({
    __name: "index",
    setup(s) {
        const {store: t} = J()
          , {getRewards: o, list: n, query: a, onBonusPack: d} = Dt();
        return H( () => t.rewardCenter, v => {
            v && o()
        }
        ),
        (v, _) => {
            const b = M("van-dialog");
            return r(),
            N(b, {
                show: i(t).rewardCenter,
                "onUpdate:show": _[1] || (_[1] = c => i(t).rewardCenter = c),
                className: "reward-dialog",
                "show-confirm-button": !1
            }, {
                title: R( () => [e("div", Xs, l(v.$t("bonusCollection")), 1)]),
                footer: R( () => [e("div", {
                    class: "close",
                    onClick: _[0] || (_[0] = c => i(t).rewardCenter = !1)
                })]),
                default: R( () => [e("div", Js, [(r(!0),
                m(G, null, ee(i(n), c => (r(),
                N(is, {
                    key: c.activityId,
                    item: c,
                    state: i(a).receiveState,
                    time: !1,
                    onPack: i(d)
                }, null, 8, ["item", "state", "onPack"]))), 128))])]),
                _: 1
            }, 8, ["show"])
        }
    }
});
const Zs = V(Qs, [["__scopeId", "data-v-35a27ba7"], ["__file", "/usr/local/jenkins-prod/workspace/AR048-Pages-india-91club/src/components/Activity/Bonus/index.vue"]])
  , eo = "/assets/png/reBenefits_bg-7f0892df.png"
  , to = "/assets/png/reBenefits_bg2-c1e03141.png"
  , le = s => (oe("data-v-2c97c46a"),
s = s(),
ne(),
s)
  , so = {
    class: "container"
}
  , oo = {
    class: "benefit-box"
}
  , no = {
    class: "benefit-title"
}
  , ao = le( () => e("br", null, null, -1))
  , io = {
    key: 0,
    class: "isBenefit-subtitle"
}
  , lo = {
    key: 1,
    class: "benefit-subtitle"
}
  , co = {
    key: 2,
    class: "isBenefit-bonus"
}
  , ro = {
    key: 3,
    class: "bonus-box"
}
  , uo = {
    class: "limtend limtend1"
}
  , vo = {
    class: "limtend limtend2"
}
  , _o = {
    class: "bonus-details details1"
}
  , po = {
    class: "bonus-percentage"
}
  , mo = {
    class: "bonus-description"
}
  , fo = {
    class: "bonus-details details2"
}
  , go = {
    class: "bonus-percentage"
}
  , ho = {
    class: "bonus-description"
}
  , bo = {
    class: "countdown-box"
}
  , yo = {
    class: "time-remaining"
}
  , wo = {
    key: 0,
    class: "bonus-amount"
}
  , $o = {
    key: 1,
    class: "time-box"
}
  , ko = {
    class: "time-item"
}
  , So = le( () => e("span", {
    class: "colon"
}, ":", -1))
  , Co = {
    class: "time-item"
}
  , Ao = le( () => e("span", {
    class: "colon"
}, ":", -1))
  , Io = {
    class: "time-item"
}
  , To = {
    key: 4,
    class: "benefit-button-box"
}
  , Bo = {
    key: 5,
    class: "benefit-button-box"
}
  , Ro = {
    key: 6,
    class: "position_click"
}
  , Lo = le( () => e("div", {
    class: "click_area"
}, null, -1))
  , Po = [Lo]
  , Do = E({
    __name: "index",
    setup(s) {
        se(c => ({
            "2c97c46a-reBenefitBgUrl": _.value
        }));
        const t = ve()
          , {store: o} = J()
          , {timeUnits: n, reBenefitObj: a} = Ut()
          , d = U( () => sessionStorage.getItem("dollarSign") || "")
          , v = U( () => {
            var c;
            return ((c = a.value) == null ? void 0 : c.isFinish) || !1
        }
        )
          , _ = U( () => `url('${v.value ? to : eo}')`)
          , b = () => {
            o.isShowReBenefit = !1,
            t.push("/wallet/Recharge")
        }
        ;
        return (c, p) => {
            const S = M("van-dialog");
            return r(),
            N(S, {
                show: i(o).isShowReBenefit,
                "onUpdate:show": p[2] || (p[2] = k => i(o).isShowReBenefit = k),
                className: "reBenefit-dialog",
                "show-confirm-button": !1
            }, Ue({
                default: R( () => {
                    var k, h, A;
                    return [e("div", so, [e("div", oo, [e("div", no, [j(l(c.$t("reBenefits10")) + " ", 1), ao, j(l(c.$t("reBenefits1")), 1)]), v.value ? (r(),
                    m("div", io, l(c.$t("reBenefits3")), 1)) : (r(),
                    m("div", lo, l(c.$t("reBenefits2")), 1)), v.value ? (r(),
                    m("div", co, l(c.$t("reBenefits6")), 1)) : (r(),
                    m("div", ro, [e("div", uo, l(c.$t("reBenefits10")), 1), e("div", vo, l(c.$t("reBenefits10")), 1), e("div", _o, [e("p", po, l((k = i(a)) == null ? void 0 : k.bonusAmountRate) + "%", 1), e("p", mo, l(c.$t("reBenefits4")), 1)]), e("div", fo, [e("p", go, l((h = i(a)) == null ? void 0 : h.bonusAmountLimit), 1), e("p", ho, l(c.$t("reBenefits5")), 1)])])), e("div", bo, [e("p", yo, l(v.value ? c.$t("reBenefits8") : c.$t("reBenefits7")), 1), v.value ? (r(),
                    m("div", wo, l(d.value) + l(((A = i(a)) == null ? void 0 : A.rewardAmount) || 0), 1)) : (r(),
                    m("div", $o, [e("div", ko, [e("span", null, l(i(n).hours[0]), 1), e("span", null, l(i(n).hours[1]), 1)]), So, e("div", Co, [e("span", null, l(i(n).minutes[0]), 1), e("span", null, l(i(n).minutes[1]), 1)]), Ao, e("div", Io, [e("span", null, l(i(n).seconds[0]), 1), e("span", null, l(i(n).seconds[1]), 1)])]))]), v.value ? (r(),
                    m("div", To, [e("div", {
                        class: "button-benefit",
                        onClick: p[0] || (p[0] = $ => i(o).isShowReBenefit = !1)
                    }, l(c.$t("iKonw")), 1)])) : (r(),
                    m("div", Bo, [e("div", {
                        class: "button-benefit",
                        onClick: b
                    }, l(c.$t("reBenefits9")), 1)])), v.value ? w("v-if", !0) : (r(),
                    m("div", Ro, Po))])])]
                }
                ),
                _: 2
            }, [v.value ? void 0 : {
                name: "footer",
                fn: R( () => [e("div", {
                    class: "close",
                    onClick: p[1] || (p[1] = k => i(o).isShowReBenefit = !1)
                })]),
                key: "0"
            }]), 1032, ["show"])
        }
    }
});
const Uo = V(Do, [["__scopeId", "data-v-2c97c46a"], ["__file", "/usr/local/jenkins-prod/workspace/AR048-Pages-india-91club/src/components/Activity/ReBenefits/index.vue"]])
  , ce = s => (oe("data-v-425062e0"),
s = s(),
ne(),
s)
  , xo = {
    class: "container"
}
  , No = {
    key: 0,
    class: "title"
}
  , Vo = {
    key: 1,
    class: "title"
}
  , Oo = {
    key: 2,
    class: "subtitle"
}
  , Mo = {
    key: 3,
    class: "subtitle"
}
  , Eo = {
    class: "rewards"
}
  , jo = {
    class: "get-reward-animation",
    ref: "animation"
}
  , zo = {
    key: 0
}
  , Go = ce( () => e("div", {
    class: "box_bg_light"
}, null, -1))
  , Ho = ce( () => e("div", {
    class: "box_closed"
}, null, -1))
  , Fo = [Go, Ho]
  , Wo = {
    key: 1
}
  , Ko = ce( () => e("div", {
    class: "box_open"
}, null, -1))
  , Yo = ce( () => e("div", {
    class: "box_front_light"
}, null, -1))
  , qo = {
    class: "reward_item"
}
  , Xo = {
    class: "button-box"
}
  , Jo = E({
    __name: "index",
    setup(s) {
        const t = ie()
          , {store: o} = J()
          , {currentChest: n, rewardAmount: a, openChest: d, closeCurrentChest: v, initTreasureChest: _} = xt();
        y(!0);
        const b = y(!1)
          , c = K()
          , p = async () => {
            await d(),
            b.value = !0
        }
          , S = () => {
            b.value = !1,
            v()
        }
          , k = ["home", "main"]
          , h = () => !!t.token && !!t.userInfo && Object.keys(t.userInfo).length > 0;
        return H( () => c.name, A => {
            c.name && k.includes(c.name) && h() && _()
        }
        ),
        z( () => {
            c.name && k.includes(c.name) && h() && _()
        }
        ),
        (A, $) => {
            const g = M("van-dialog");
            return r(),
            N(g, {
                show: i(o).isShowTreasureChest,
                "onUpdate:show": $[0] || ($[0] = u => i(o).isShowTreasureChest = u),
                className: "treasureChest-dialog",
                "show-confirm-button": !1
            }, {
                default: R( () => {
                    var u, f, D, L, I, Y, q, T;
                    return [e("div", xo, [((u = i(n)) == null ? void 0 : u.taskType) == 1 ? (r(),
                    m("div", No, l(A.$t("treasureChest1", {
                        task: ((f = i(n)) == null ? void 0 : f.taskTitle) || ""
                    })), 1)) : (r(),
                    m("div", Vo, l(A.$t("treasureChest1", {
                        task: ((D = i(n)) == null ? void 0 : D.taskTitle) || ""
                    })), 1)), !((L = i(n)) != null && L.minRewardAmount) || !((I = i(n)) != null && I.maxRewardAmount) ? (r(),
                    m("div", Oo, l(A.$t("treasureChest2", {
                        amount: ((Y = i(n)) == null ? void 0 : Y.rewardAmount) || 0
                    })), 1)) : (r(),
                    m("div", Mo, l(A.$t("treasureChest2", {
                        amount: `${((q = i(n)) == null ? void 0 : q.minRewardAmount) || 0}~${((T = i(n)) == null ? void 0 : T.maxRewardAmount) || 0}`
                    })), 1)), e("div", Eo, [e("div", jo, [b.value ? (r(),
                    m("div", Wo, [Ko, Yo, e("div", qo, l(A.$t("treasureChest4", {
                        amount: i(a) || 0
                    })), 1)])) : (r(),
                    m("div", zo, Fo))], 512)]), e("div", Xo, [b.value ? (r(),
                    m("div", {
                        key: 0,
                        class: "btn btn-close-chest",
                        onClick: S
                    }, l(A.$t("confirm")), 1)) : (r(),
                    m("div", {
                        key: 1,
                        class: "btn btn-open-chest",
                        onClick: p
                    }, l(A.$t("treasureChest3")), 1))])])]
                }
                ),
                _: 1
            }, 8, ["show"])
        }
    }
});
const Qo = V(Jo, [["__scopeId", "data-v-425062e0"], ["__file", "/usr/local/jenkins-prod/workspace/AR048-Pages-india-91club/src/components/Activity/TreasureChest/index.vue"]])
  , Zo = {
    class: "dialog-window"
}
  , en = {
    class: "dialog-wrapper"
}
  , tn = {
    class: "dialog-title"
}
  , sn = {
    class: "dialog-content"
}
  , on = {
    class: "dialog-window"
}
  , nn = {
    class: "dialog-wrapper"
}
  , an = {
    class: "dialog-title"
}
  , ln = {
    class: "dialog-tips"
}
  , cn = {
    class: "dialog-content"
}
  , rn = {
    class: "dialog-tips",
    style: {
        "margin-bottom": "0"
    }
}
  , un = {
    class: "dialog-window"
}
  , dn = {
    class: "dialog-wrapper"
}
  , vn = {
    class: "dialog-tips",
    style: {
        "margin-top": "10px"
    }
}
  , _n = {
    class: "dialog-title",
    style: {
        "margin-top": "0"
    }
}
  , pn = {
    class: "dialog-tips"
}
  , mn = {
    class: "dialog-content"
}
  , fn = {
    class: "dialog-window"
}
  , gn = {
    class: "dialog-wrapper"
}
  , hn = {
    class: "dialog-tips",
    style: {
        "margin-top": "10px"
    }
}
  , bn = {
    class: "dialog-title",
    style: {
        "margin-top": "0"
    }
}
  , yn = {
    class: "dialog-tips"
}
  , wn = {
    class: "dialog-content"
}
  , $n = {
    class: "dialog-window"
}
  , kn = {
    class: "dialog-wrapper"
}
  , Sn = {
    class: "dialog-receive"
}
  , Cn = {
    class: "dialog-title"
}
  , An = {
    class: "dialog-tips"
}
  , In = {
    class: "dialog-content"
}
  , Tn = {
    class: "dialog-18"
}
  , Bn = {
    class: "tip_txt"
}
  , Rn = {
    class: "dialog-footer"
}
  , Ln = {
    class: "dialog-18"
}
  , Pn = {
    class: "dialog-footer"
}
  , Dn = E({
    __name: "AllPageDialog",
    setup(s) {
        const {ActiveSotre: t} = Ce()
          , {store: o, closeInvite: n, showFirstSave: a, onReturnAwards: d, onAppDownloadAwards: v, onRegisterGift: _} = J()
          , b = K()
          , c = y(!1)
          , p = y(!1)
          , S = localStorage.getItem("is18") || void 0
          , k = ae()
          , h = ["poppg", "POP888", "POP555", "pop", "POP678"]
          , A = y(Nt())
          , $ = U( () => h.includes(k.projectName))
          , g = u => {
            u ? (localStorage.setItem("is18", "1"),
            c.value = !1) : p.value = !0
        }
        ;
        return H( () => $.value, u => {
            u && (c.value = !(S && S === "1"))
        }
        , {
            immediate: !0
        }),
        H( () => b.path, u => {
            o.rewardCenter = !1
        }
        ),
        (u, f) => {
            const D = M("van-dialog")
              , L = de("lazy");
            return r(),
            m(G, null, [i(a) ? (r(),
            N(Ns, {
                key: 0
            })) : w("v-if", !0), B(D, {
                show: i(t).showReceiveDialog,
                "onUpdate:show": f[1] || (f[1] = I => i(t).showReceiveDialog = I),
                "show-confirm-button": !1,
                className: "noOverHidden"
            }, {
                default: R( () => [e("div", Zo, [e("div", en, [O(e("img", null, null, 512), [[L, i(W)("public", "succeed")]]), e("div", tn, l(u.$t("awardsReceived")), 1), e("div", sn, [O(e("img", null, null, 512), [[L, i(W)("activity/DailyTask", "amountIcon")]]), e("span", null, l(i(X)(i(t).receiveAmount)), 1)]), e("div", {
                    class: "dialog-btn",
                    onClick: f[0] || (f[0] = I => i(t).showReceiveDialog = !1)
                }, l(u.$t("confirm")), 1)])])]),
                _: 1
            }, 8, ["show"]), B(D, {
                show: i(o).invite,
                "onUpdate:show": f[3] || (f[3] = I => i(o).invite = I),
                "show-confirm-button": !1,
                className: "noOverHidden"
            }, {
                default: R( () => [e("div", on, [e("div", nn, [O(e("img", null, null, 512), [[L, i(W)("public", "succeed")]]), e("div", an, l(u.$t("inviteTips")), 1), e("p", ln, l(u.$t("inviteAmount")), 1), e("div", cn, [e("span", rn, l(u.$t("commissionAmount")), 1), e("span", null, l(i(X)(i(o).rebateAmount)), 1)]), e("div", {
                    class: "dialog-btn",
                    onClick: f[2] || (f[2] = I => i(n)())
                }, l(u.$t("receive")), 1)])])]),
                _: 1
            }, 8, ["show"]), w("老会员回归"), B(D, {
                show: i(o).oldUser,
                "onUpdate:show": f[5] || (f[5] = I => i(o).oldUser = I),
                "show-confirm-button": !1,
                "close-on-click-overlay": !0,
                className: "noOverHidden"
            }, {
                default: R( () => [e("div", un, [e("div", dn, [O(e("img", null, null, 512), [[L, i(W)("public", "succeed")]]), e("p", vn, l(u.$t("oldPromptTip")), 1), e("div", _n, l(u.$t("oldPrompt")), 1), e("p", pn, l(u.$t("oldPromptGift")), 1), e("div", mn, [e("span", null, l(i(X)(i(o).returnAwards)), 1)]), e("div", {
                    class: "dialog-btn",
                    onClick: f[4] || (f[4] = I => i(d)())
                }, l(u.$t("receive")), 1)])])]),
                _: 1
            }, 8, ["show"]), w("注册登陆送彩金"), B(D, {
                show: i(o).registerGift,
                "show-confirm-button": !1,
                "close-on-click-overlay": !0,
                className: "noOverHidden"
            }, {
                default: R( () => [e("div", fn, [e("div", gn, [O(e("img", null, null, 512), [[L, i(W)("public", "succeed")]]), e("p", hn, l(u.$t("newRegisterTip")), 1), e("div", bn, l(u.$t("newRegisterPrompt")), 1), e("p", yn, l(u.$t("newRegisterGift", [i(ie)().getUserInfo.channelAmountofCode])), 1), e("div", wn, [e("span", null, l(i(X)(i(o).registerGiftAmount)), 1)]), e("div", {
                    class: "dialog-btn",
                    onClick: f[6] || (f[6] = I => i(_)())
                }, l(u.$t("receive")), 1)])])]),
                _: 1
            }, 8, ["show"]), w("下载充值送彩金奖励"), B(D, {
                show: i(o).appDownload,
                "onUpdate:show": f[8] || (f[8] = I => i(o).appDownload = I),
                "show-confirm-button": !1,
                "close-on-click-overlay": !0,
                className: "noOverHidden"
            }, {
                default: R( () => [e("div", $n, [e("div", kn, [O(e("img", null, null, 512), [[L, i(W)("public", "succeed")]]), e("p", Sn, l(u.$t("downReceiveText1")), 1), e("div", Cn, l(u.$t("downReceiveText2")), 1), e("p", An, l(u.$t("downReceiveText3")), 1), e("div", In, [e("span", null, l(i(X)(i(o).downAppRewardBonusAmount)), 1)]), e("div", {
                    class: "dialog-btn",
                    onClick: f[7] || (f[7] = I => i(v)())
                }, l(u.$t("receive")), 1)])])]),
                _: 1
            }, 8, ["show"]), B(D, {
                show: c.value,
                "onUpdate:show": f[11] || (f[11] = I => c.value = I),
                className: "custom18dialog noOverHidden",
                "show-confirm-button": !1,
                "close-on-click-overlay": !1
            }, {
                default: R( () => [e("div", Tn, [e("div", null, [e("span", null, l(u.$t("loginTips", [i(k).projectName])), 1), e("div", Bn, l(u.$t("brazildialog1")), 1)]), e("div", Rn, [e("div", {
                    class: "btn-cnf dialog-btn",
                    onClick: f[9] || (f[9] = I => g(!0))
                }, l(u.$t("brazildialog2")), 1), e("div", {
                    class: "btn-cancel dialog-btn",
                    onClick: f[10] || (f[10] = I => g(!1))
                }, l(u.$t("brazildialog3")), 1)])])]),
                _: 1
            }, 8, ["show"]), B(D, {
                show: p.value,
                "onUpdate:show": f[13] || (f[13] = I => p.value = I),
                className: "custom18dialog noAge",
                "show-confirm-button": !1,
                "close-on-click-overlay": !1
            }, {
                default: R( () => [e("div", Ln, [e("div", null, [e("span", null, l(u.$t("brazildialog4")), 1)]), e("div", Pn, [e("div", {
                    class: "btn-cancel dialog-btn no-btn",
                    onClick: f[12] || (f[12] = I => p.value = !1)
                }, l(u.$t("confirm")), 1)])])]),
                _: 1
            }, 8, ["show"]), B(Zs), w(" 会员回归充值奖励 "), B(Uo), A.value ? (r(),
            N(qs, {
                key: 1
            })) : w("v-if", !0), w(" 宝箱弹窗 "), B(Qo)], 64)
        }
    }
});
const Un = V(Dn, [["__scopeId", "data-v-3d4fafbb"], ["__file", "/usr/local/jenkins-prod/workspace/AR048-Pages-india-91club/src/components/common/AllPageDialog.vue"]])
  , xn = E({
    __name: "App",
    setup(s) {
        se(C => ({
            "f13b4d11-currentFontFamily": f.value
        }));
        const {openAll: t} = J()
          , o = Jt()
          , n = y(!1)
          , a = y(!1)
          , d = K()
          , v = Vt()
          , _ = ae()
          , {locale: b} = we()
          , c = ie()
          , p = y(!1)
          , S = U( () => d.meta.tabBar)
          , k = y(0)
          , h = y(Math.floor(Math.random() * 1e4))
          , A = U( () => d.name + h.value)
          , $ = () => {
            o.on("changeKeepAliveKey", () => {
                h.value = Math.floor(Math.random() * 1e4)
            }
            )
        }
        ;
        sessionStorage.getItem("isload") ? n.value = !1 : (a.value = !0,
        sessionStorage.setItem("isload", a.value.toString()),
        n.value = !0),
        _.getHomeSetting(),
        H( () => _.getAreacode, C => {
            C && v.setNumberType(C.substring(1))
        }
        ),
        H( () => _.getDL, C => {
            b.value = C,
            c.updateLanguage(C),
            Qt(C),
            Zt(Ae.global.t)
        }
        ),
        setTimeout( () => {
            n.value = !1
        }
        , 2e3);
        const g = y(!1)
          , u = Ot();
        u.$subscribe( (C, P) => {
            g.value = P.isLoading,
            u.setLoading(g.value)
        }
        );
        const f = y("bahnschrift");
        let D = Mt()
          , L = _.getLanguage
          , I = Et(D, L);
        const Y = async C => {
            const P = [{
                title: "vi",
                fontStyle: "bahnschrift"
            }, {
                title: "else",
                fontStyle: "'Roboto', 'Inter', sans-serif"
            }]
              , x = P.findIndex(F => F.title == I);
            x >= 0 ? f.value = P[x].fontStyle : f.value = P[P.length - 1].fontStyle
        }
          , q = () => {
            o.on("keyChange", () => {
                console.log(222),
                k.value++
            }
            ),
            o.on("changeIsGame", () => {
                p.value = !p.value,
                g.value = !g.value
            }
            )
        }
          , T = () => {
            o.off("keyChange"),
            o.off("changeKeepAliveKey"),
            o.off("changeIsGame")
        }
        ;
        return v.setNumberType(_.getAreacode.substring(1)),
        Y(),
        z(async () => {
            const C = await jt()
              , P = await zt()
              , x = Gt();
            Ht && C === 3 && !x.result && !P.isOpenBrowserConsoleDebug || Ft && C === 0 && !x.result && !P.isOpenBrowserConsoleDebug ? Wt() : Kt.stop()
        }
        ),
        z( () => {
            Yt() && qt(),
            t(),
            T(),
            q(),
            $(),
            localStorage.getItem("language") && Xt(localStorage.getItem("language"))
        }
        ),
        ys(),
        (C, P) => {
            const x = M("LoadingView");
            return r(),
            m(G, null, [B(x, {
                loading: g.value,
                type: "loading",
                isGame: p.value
            }, {
                default: R( () => [(r(),
                N(i(Ne), {
                    key: k.value
                }, {
                    default: R( ({Component: F}) => [(r(),
                    N(xe, {
                        max: 1
                    }, [i(d).meta.keepAlive ? (r(),
                    N(ge(F), {
                        key: A.value
                    })) : w("v-if", !0)], 1024)), i(d).meta.keepAlive ? w("v-if", !0) : (r(),
                    N(ge(F), {
                        key: 0
                    }))]),
                    _: 1
                })), w("online custom service"), B($s), S.value ? (r(),
                N(bs, {
                    key: 0
                })) : w("v-if", !0)]),
                _: 1
            }, 8, ["loading", "isGame"]), n.value ? (r(),
            N(Bs, {
                key: 0
            })) : w("v-if", !0), B(Un)], 64)
        }
    }
});
const Nn = V(xn, [["__file", "/usr/local/jenkins-prod/workspace/AR048-Pages-india-91club/entrance/ar048/App.vue"]]);
const Vn = {
    mounted(s, t) {
        if (typeof t.value[0] != "function" || typeof t.value[1] != "number")
            throw new Error("v-debounce: value must be an array that includes a function and a number");
        let o = null;
        const n = t.value[0]
          , a = t.value[1];
        s.__handleClick__ = function() {
            o && clearTimeout(o),
            o = setTimeout( () => {
                n()
            }
            , a || 500)
        }
        ,
        s.addEventListener("click", s.__handleClick__)
    },
    beforeUnmount(s) {
        s.removeEventListener("click", s.__handleClick__)
    }
}
  , On = {
    mounted(s, t) {
        if (typeof t.value[0] != "function" || typeof t.value[1] != "number")
            throw new Error("v-throttle: value must be an array that includes a function and a number");
        let o = null;
        const n = t.value[0]
          , a = t.value[1];
        s.__handleClick__ = function() {
            o && clearTimeout(o),
            s.disabled || (s.disabled = !0,
            n(),
            o = setTimeout( () => {
                s.disabled = !1
            }
            , a || 500))
        }
        ,
        s.addEventListener("click", s.__handleClick__)
    },
    beforeUnmount(s) {
        s.removeEventListener("click", s.__handleClick__)
    }
}
  , Mn = {
    mounted(s, t) {
        s.addEventListener("input", o => {
            const a = s.value.replace(/\D+/g, "");
            s.value = a,
            t.value = a
        }
        )
    }
}
  , En = s => ({
    beforeMount: (t, o) => {
        t.classList.add("ar-lazyload");
        const {value: n} = o;
        t.dataset.origin = n,
        s.observe(t)
    }
    ,
    updated(t, o) {
        t.dataset.origin = o.value,
        s.observe(t)
    },
    unmounted(t, o) {
        s.unobserve(t)
    },
    mounted(t, o) {
        s.observe(t)
    }
})
  , jn = {
    mounted(s, t) {
        let o = 0;
        const n = t.value && t.value.wait ? t.value.wait : 3e3
          , a = d => {
            const v = Date.now();
            v - o >= n && (o = v,
            t.value && t.value.handler && t.value.handler(d))
        }
        ;
        s.addEventListener("click", a),
        s._throttleClickCleanup = () => {
            s.removeEventListener("click", a)
        }
    },
    unmounted(s) {
        s._throttleClickCleanup && s._throttleClickCleanup(),
        delete s._throttleClickCleanup
    }
}
  , zn = {
    mounted(s, t) {
        const {value: o} = t;
        let n = Ve("permission", null);
        n.value === null || !o || (n && (n = JSON.parse(n.value)),
        n && n[o] === !1 && (s.style.display = "none"))
    }
};
class Gn {
    constructor(t) {
        re(this, "timer");
        re(this, "el");
        this.el || (this.el = t,
        this.el.style.transition = "all .3s",
        this.setTransformStyle("none"))
    }
    foldUp() {
        if (this.el) {
            const t = window.innerWidth
              , o = window.innerHeight
              , n = this.el.getBoundingClientRect()
              , a = n.top < 0 ? 0 : n.top
              , d = n.left < 0 ? 0 : n.left
              , v = t - n.right < 0 ? 0 : t - n.right
              , _ = o - n.bottom < 0 ? 0 : o - n.bottom
              , b = Math.min(a, d, v, _);
            if (b === a) {
                const c = n.height * .8 + a;
                this.setTransformStyle(`translate(0, -${c}px)`)
            } else if (b === d) {
                const c = -1 * n.width * .8 - d;
                this.setTransformStyle(`translate(${c}px, 0)`)
            } else if (b === v) {
                const c = n.width * .8 + v;
                this.setTransformStyle(`translate(${c}px, 0)`)
            } else if (b === _) {
                const c = n.height * .8 + _;
                this.setTransformStyle(`translate(0, ${c}px)`)
            }
        }
    }
    expand() {
        this.el && this.setTransformStyle("none")
    }
    setTransformStyle(t) {
        if (this.el) {
            const o = Hn(this.el).transform ?? "none";
            o == "none" && t != o ? this.el.style.transform = t : t == "none" && t != o && (this.el.style.transform = t)
        }
    }
}
function Hn(s) {
    return window.getComputedStyle ? window.getComputedStyle(s, null) : document.defaultView && document.defaultView.getComputedStyle ? document.defaultView.getComputedStyle(s, null) : s.style
}
document.addEventListener("touchmove", () => {
    var s;
    (s = window.hiddenAn) == null || s.map(t => {
        var o;
        (o = t.AnimationScroll) == null || o.foldUp(),
        t.AnimationScroll && (clearTimeout(t.AnimationScroll.timer),
        t.AnimationScroll.timer = setTimeout( () => {
            var n;
            t && t.AnimationScroll && (clearTimeout(t.AnimationScroll.timer),
            (n = t.AnimationScroll) == null || n.expand())
        }
        , 1500))
    }
    )
}
);
const Fn = {
    mounted(s, t) {
        s.AnimationScroll = new Gn(s),
        window.hiddenAn && Array.isArray(window.hiddenAn) ? window.hiddenAn.push(s) : window.hiddenAn = [s]
    },
    unmounted(s) {
        s.AnimationScroll && (Array.isArray(window.hiddenAn) && (window.hiddenAn = window.hiddenAn.filter(t => t != s)),
        s.AnimationScroll = void 0)
    }
}
  , be = {
    debounce: Vn,
    throttle: On,
    onlyNum: Mn,
    throttleClick: jn,
    haspermission: zn,
    scrollhide: Fn
}
  , Wn = {
    install: function(s) {
        Object.keys(be).forEach(o => {
            s.directive(o, be[o])
        }
        );
        const t = new IntersectionObserver(o => {
            o.forEach(n => {
                if (n.isIntersecting) {
                    const a = n.target
                      , d = ke("images", "avatar")
                      , v = a.dataset.origin;
                    a.src = v || d,
                    a.onerror = () => {
                        t.unobserve(a);
                        let _ = a.dataset.img || d;
                        if (!_ || _ != null && _.includes("undefined")) {
                            a.onerror = null;
                            return
                        }
                        v !== _ && (a.src = _,
                        a.style.objectFit = "contain"),
                        a.onerror = null
                    }
                    ,
                    a.classList.remove("ar-lazyload"),
                    t.unobserve(a)
                }
            }
            )
        }
        ,{
            rootMargin: "0px 0px -50px 0px"
        });
        s.directive("lazy", En(t))
    }
}
  , Kn = {
    class: "navbar-fixed"
}
  , Yn = {
    class: "navbar__content"
}
  , qn = {
    class: "navbar__content-center"
}
  , Xn = {
    class: "navbar__content-title"
}
  , Jn = E({
    __name: "NavBar",
    props: {
        title: {
            type: String,
            default: ""
        },
        placeholder: {
            type: Boolean,
            default: !0
        },
        leftArrow: {
            type: Boolean,
            default: !1
        },
        backgroundColor: {
            type: String,
            default: "#f7f8ff"
        },
        classN: {
            type: String,
            default: ""
        },
        headLogo: {
            type: Boolean,
            default: !1
        },
        headerUrl: {
            type: String,
            default: ""
        }
    },
    emits: ["click-left", "click-right"],
    setup(s, {emit: t}) {
        const o = y()
          , n = ae()
          , a = U( () => n.getHeadLogo)
          , d = () => {
            t("click-left")
        }
          , v = () => {
            t("click-right")
        }
        ;
        return z( () => {}
        ),
        (_, b) => {
            const c = M("van-icon");
            return r(),
            m("div", {
                class: "navbar",
                ref_key: "navbar",
                ref: o
            }, [e("div", Kn, [e("div", Yn, [e("div", {
                class: "navbar__content-left",
                onClick: d
            }, [Z(_.$slots, "left", {}, () => [s.leftArrow ? (r(),
            N(c, {
                key: 0,
                name: "arrow-left"
            })) : w("v-if", !0)], !0)]), e("div", qn, [s.headLogo ? (r(),
            m("div", {
                key: 0,
                class: "headLogo",
                style: Oe({
                    backgroundImage: "url(" + (s.headerUrl || a.value) + ")"
                })
            }, null, 4)) : w("v-if", !0), Z(_.$slots, "center", {}, () => [e("div", Xn, l(s.title), 1)], !0)]), e("div", {
                class: "navbar__content-right",
                onClick: v
            }, [Z(_.$slots, "right", {}, void 0, !0)])])])], 512)
        }
    }
});
const Qn = V(Jn, [["__scopeId", "data-v-12a80a3e"], ["__file", "/usr/local/jenkins-prod/workspace/AR048-Pages-india-91club/src/components/common/NavBar.vue"]])
  , Zn = {
    class: "ar-loading-view"
}
  , ea = {
    class: "loading-wrapper"
}
  , ta = {
    class: "com__box"
}
  , sa = Me('<div class="loading" data-v-647954c7><div class="shape shape-1" data-v-647954c7></div><div class="shape shape-2" data-v-647954c7></div><div class="shape shape-3" data-v-647954c7></div><div class="shape shape-4" data-v-647954c7></div></div>', 1)
  , oa = {
    class: "skeleton-wrapper"
}
  , na = {
    class: "iosDialog"
}
  , aa = {
    class: "title"
}
  , ia = {
    class: "websit_info"
}
  , la = ["src"]
  , ca = {
    class: "link"
}
  , ra = {
    class: "text"
}
  , ua = {
    class: "text"
}
  , da = {
    class: "text"
}
  , va = ["src"]
  , _a = E({
    __name: "LoadingView",
    props: {
        loading: {
            type: Boolean,
            required: !0
        },
        type: {
            type: String,
            required: !0
        },
        isGame: {
            type: Boolean,
            required: !0
        }
    },
    setup(s) {
        const t = s
          , o = y();
        let n = null;
        const {homeState: a, downloadIcon: d} = es()
          , v = K()
          , {getSelfCustomerServiceLink: _} = Se({
            ServerType: 2
        })
          , b = window.location.href
          , c = U( () => location.origin || "")
          , p = U( () => v.name === "game")
          , S = y(!1)
          , k = ts( () => $e( () => import("./lottie_light-261c6129.js").then(h => h.l), ["assets/js/lottie_light-261c6129.js", "assets/js/common.modules-5cfe2cf4.js", "assets/css/common-05d2aa17.css"]));
        return z(async () => {
            if (b.includes("?")) {
                const h = new URLSearchParams(b.split("?")[1]);
                h.size && h.get("goTo") === "worktraking" && _("worktraking")
            }
        }
        ),
        H( () => t.loading, async () => {
            t.type === "loading" && !t.isGame && (!n && !S.value && (S.value = !0,
            n = (await k()).loadAnimation({
                container: o.value,
                renderer: "svg",
                loop: !0,
                autoplay: !0,
                path: "/data.json"
            }),
            S.value = !1),
            t.loading ? n && n.play() : n && n.stop())
        }
        ),
        ye( () => {
            n && n.destroy(),
            n = null
        }
        ),
        (h, A) => {
            const $ = M("VanSkeleton")
              , g = M("svg-icon")
              , u = M("van-popup");
            return r(),
            m(G, null, [O(e("div", Zn, [Z(h.$slots, "template", {}, () => [O(e("div", ea, [w(" <VanLoading /> "), O(e("div", {
                ref_key: "element",
                ref: o,
                class: "loading-animat"
            }, null, 512), [[Q, !h.isGame]]), O(e("div", ta, [w(" loading "), sa, w(" 说明：组件名 ")], 512), [[Q, h.isGame]]), w(' <div class="animation"></div> ')], 512), [[Q, h.type === "loading"]]), O(e("div", oa, [B($, {
                row: 10
            }), B($, {
                title: "",
                avatar: "",
                row: 5
            }), B($, {
                title: "",
                row: 5
            })], 512), [[Q, h.type === "skeleton"]])], !0)], 512), [[Q, h.loading && !p.value]]), Z(h.$slots, "default", {}, void 0, !0), B(u, {
                show: i(a).iosDialog,
                "onUpdate:show": A[0] || (A[0] = f => i(a).iosDialog = f),
                round: "",
                closeable: "",
                position: "bottom",
                style: {
                    height: "40%"
                }
            }, {
                default: R( () => [e("div", na, [e("div", aa, l(h.$t("pwaInstall")), 1), e("div", ia, [e("img", {
                    class: "icon",
                    src: i(d)
                }, null, 8, la), e("div", ca, [e("div", null, l(c.value.split("://")[1]), 1), e("div", null, l(c.value), 1)])]), e("div", ra, [j("1. " + l(h.$t("pwaText1")) + " ", 1), B(g, {
                    name: "share"
                })]), e("div", ua, [j("2. " + l(h.$t("pwaText2")) + " ", 1), e("span", null, [j(l(h.$t("pwaText3")) + " ", 1), B(g, {
                    name: "add_icon"
                })])]), e("div", da, [j("3. " + l(h.$t("pwaText4")) + " ", 1), e("img", {
                    class: "icon",
                    src: i(d)
                }, null, 8, va)])])]),
                _: 1
            }, 8, ["show"])], 64)
        }
    }
});
const pa = V(_a, [["__scopeId", "data-v-647954c7"], ["__file", "/usr/local/jenkins-prod/workspace/AR048-Pages-india-91club/src/components/common/LoadingView.vue"]]);
const ma = ["xlink:href"]
  , fa = {
    __name: "svgIcons",
    props: {
        name: {
            type: String,
            required: !0
        },
        color: {
            type: String,
            default: ""
        }
    },
    setup(s) {
        const t = s
          , o = U( () => `#icon-${t.name}`)
          , n = U( () => t.name ? `svg-icon icon-${t.name}` : "svg-icon");
        return (a, d) => (r(),
        m("svg", Ee({
            class: n.value
        }, a.$attrs, {
            style: {
                color: s.color
            }
        }), [e("use", {
            "xlink:href": o.value
        }, null, 8, ma)], 16))
    }
}
  , ga = V(fa, [["__file", "/usr/local/jenkins-prod/workspace/AR048-Pages-india-91club/src/components/common/svgIcons.vue"]])
  , ha = {
    class: "ar-searchbar__selector"
}
  , ba = {
    class: "ar-searchbar__selector-default"
}
  , ya = E({
    __name: "ArSelect",
    props: {
        selectName: {
            type: String,
            default: ""
        }
    },
    emits: ["click-select"],
    setup(s, {emit: t}) {
        const o = () => {
            t("click-select")
        }
        ;
        return (n, a) => {
            const d = M("van-icon");
            return r(),
            m("div", ha, [e("div", {
                onClick: o
            }, [e("span", ba, l(i(ss)(s.selectName)), 1), B(d, {
                name: "arrow-down"
            })])])
        }
    }
});
const wa = V(ya, [["__scopeId", "data-v-fa757a88"], ["__file", "/usr/local/jenkins-prod/workspace/AR048-Pages-india-91club/src/components/common/ArSelect.vue"]])
  , $a = "/assets/png/saasMaintain-0cece951.png"
  , ka = "/assets/png/maintain-0a66a6f6.png"
  , Sa = {
    key: 0,
    class: "maintain"
}
  , Ca = {
    key: 0,
    src: $a,
    alt: ""
}
  , Aa = {
    key: 1,
    src: ka,
    alt: ""
}
  , Ia = E({
    __name: "Maintain",
    props: {
        item: {
            type: Object,
            default: () => ({})
        },
        size: {
            type: Boolean,
            default: !1
        }
    },
    setup(s) {
        const t = s
          , o = U( () => t.item.isMaintain === 1 ? 1 : t.item.isGameSaasMaintain === 1 ? 2 : 0);
        return (n, a) => o.value ? (r(),
        m("div", Sa, [o.value === 2 ? (r(),
        m("img", Ca)) : w("v-if", !0), o.value === 1 ? (r(),
        m("img", Aa)) : w("v-if", !0), e("p", {
            class: te({
                maintainSize: s.size
            })
        }, l(n.$t("GameMaintenance")), 3)])) : w("v-if", !0)
    }
});
const Ta = V(Ia, [["__scopeId", "data-v-102796dc"], ["__file", "/usr/local/jenkins-prod/workspace/AR048-Pages-india-91club/src/components/common/Maintain.vue"]]);
je({
    duration: 3500,
    zIndex: 4e3
});
os();
const Ba = s => {
    s.component("NavBar", Qn),
    s.component("LoadingView", pa),
    s.component("ArSelect", wa),
    s.component("svg-icon", ga),
    s.component("Maintain", Ta),
    s.use(ze).use(Ge).use(He).use(Fe).use(We).use(Ke).use(Ye).use(qe).use(Xe).use(Je).use(Qe).use(Ze).use(et).use(tt).use(st).use(ot).use(nt).use(at).use(it).use(lt).use(ct).use(rt).use(ut).use(dt).use(vt).use(_t).use(pt).use(mt).use(ft).use(gt).use(ht).use(bt).use(yt).use(wt).use($t).use(kt).use(St).use(Ae).use(Wn).use(Ct).use(At).use(It);
    let t = s.config.globalProperties
      , o = {};
    o.TopHeight = 38,
    Object.keys(he.refiter).forEach(n => {
        o[n] = he.refiter[n]
    }
    ),
    t.$u = o
}
;
ns["91club"]();
Ie.addRoute({
    path: "/",
    name: "home",
    component: () => $e( () => import("./page-home-other-66b56127.js"), ["assets/js/page-home-other-66b56127.js", "assets/js/common.modules-5cfe2cf4.js", "assets/css/common-05d2aa17.css", "assets/js/page-activity-ActivityDetail-a58ec568.js", "assets/js/page-turntable-assets-d6267459.js", "assets/js/native/index-2ac88fb8.js", "assets/js/en-cfd26acf.js", "assets/css/page-activity-ActivityDetail-a597c4a3.css", "assets/css/91club-29e6e7f6.css"]),
    meta: {
        title: "home",
        tabBar: !0,
        keepAlive: !1
    }
});
const _e = Tt(Nn)
  , Be = Bt();
Ba(_e);
Be.use(Rt);
_e.use(Ie).use(Be);
_e.mount("#app");
