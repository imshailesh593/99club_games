import {G as U, r as H, C as J, H as z, I as o, Q as k, J as t, P as l, ao as f, ar as oe, N as s, z as se, R as X, aA as q, K as D, M as N, ax as x, O as e, aq as ke, $ as ue, aB as V, B as G, av as R, au as W, aG as de, aH as _e, aC as pe, aD as ve, aT as ae, ap as te, a6 as Ce, A as be, X as me, aX as we, aI as $e, b0 as Ie, b1 as Se, b2 as Le, a$ as Te, ay as Ae} from "./common.modules-5cfe2cf4.js";
import {G as ne, A as ie, b3 as Ge, _ as j, y as Y, g as Be, b4 as He, i as E, b5 as ee, b as P, aL as Q, c as F, b6 as ge, m as De, aD as Re, aI as ce, aH as xe, b7 as he, n as le, b8 as fe, b9 as Pe, ba as Ne, bb as Me, a1 as Ue, bc as je} from "./page-activity-ActivityDetail-a58ec568.js";
import "./page-turntable-assets-d6267459.js";
import "./native/index-2ac88fb8.js";
import "./en-cfd26acf.js";
const We = {
    class: "notice_91"
}
  , ze = {
    class: "notice_91-body"
}
  , Oe = {
    key: 0,
    class: "notice_91-body-text"
}
  , Fe = U({
    __name: "index2",
    props: {
        color: {
            type: String,
            required: !0,
            default: "red"
        }
    },
    setup(S) {
        const d = ne()
          , v = H(null)
          , n = H(d.messageList)
          , r = async () => {
            const m = await ie(Ge({
                pageNo: 1,
                pageSize: 5
            }));
            if (m) {
                if (d.setMessage(m.data.list),
                n.value = m.data.list,
                !n.value.length)
                    return;
                v.value && clearInterval(v.value),
                v.value = setInterval( () => {
                    n.value.push(n.value.shift())
                }
                , 7e3)
            }
        }
        ;
        return J( () => {
            n.value || setTimeout( () => {
                r()
            }
            , 1e3)
        }
        ),
        (m, p) => {
            var g;
            const h = z("svg-icon");
            return s(),
            o("div", We, [k(h, {
                name: "91-notice",
                class: "notice"
            }), t("div", ze, [n.value && n.value[0] && n.value[0].siteMessage ? (s(),
            o("div", Oe, l((g = n.value[0]) == null ? void 0 : g.siteMessage), 1)) : f("v-if", !0)]), oe(m.$slots, "default", {}, void 0, !0)])
        }
    }
});
const Ve = j(Fe, [["__scopeId", "data-v-20e1659b"], ["__file", "/usr/local/jenkins-prod/workspace/AR048-Pages-india-91club/src/components/Home/NoticeBar/index2.vue"]])
  , Je = {
    class: "terms"
}
  , qe = {
    class: "terms-logo"
}
  , Ee = ke('<span class="terms-logo-service" data-v-a46ec9fd><svg width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-a46ec9fd><circle cx="35" cy="35" r="33" stroke="url(#paint0_linear_84_6311)" stroke-width="4" data-v-a46ec9fd></circle><path d="M25.3809 33.7041V36.8906H12.7109V33.7041H25.3809ZM20.7852 28.6895V42.1465H17.3193V28.6895H20.7852ZM36.3496 25.4775V44H32.6934V29.6924L28.3008 31.0889V28.207L35.9561 25.4775H36.3496ZM54.8213 38.9346C54.8213 40.0941 54.5505 41.0716 54.0088 41.8672C53.4671 42.6543 52.7223 43.251 51.7744 43.6572C50.835 44.055 49.7686 44.2539 48.5752 44.2539C47.3818 44.2539 46.3112 44.055 45.3633 43.6572C44.4154 43.251 43.6663 42.6543 43.1162 41.8672C42.5661 41.0716 42.291 40.0941 42.291 38.9346C42.291 38.1559 42.4476 37.4535 42.7607 36.8271C43.0739 36.1924 43.5098 35.6507 44.0684 35.2021C44.6354 34.7451 45.2998 34.3981 46.0615 34.1611C46.8232 33.9157 47.6527 33.793 48.5498 33.793C49.7516 33.793 50.8265 34.0046 51.7744 34.4277C52.7223 34.8509 53.4671 35.4476 54.0088 36.2178C54.5505 36.988 54.8213 37.8936 54.8213 38.9346ZM51.1396 38.6934C51.1396 38.1263 51.0296 37.6396 50.8096 37.2334C50.598 36.8187 50.2975 36.5013 49.9082 36.2812C49.5189 36.0612 49.0661 35.9512 48.5498 35.9512C48.0335 35.9512 47.5807 36.0612 47.1914 36.2812C46.8021 36.5013 46.4974 36.8187 46.2773 37.2334C46.0658 37.6396 45.96 38.1263 45.96 38.6934C45.96 39.252 46.0658 39.7344 46.2773 40.1406C46.4974 40.5469 46.8021 40.86 47.1914 41.0801C47.5892 41.2917 48.0505 41.3975 48.5752 41.3975C49.0999 41.3975 49.5527 41.2917 49.9336 41.0801C50.3229 40.86 50.6191 40.5469 50.8223 40.1406C51.0339 39.7344 51.1396 39.252 51.1396 38.6934ZM54.4277 30.416C54.4277 31.3555 54.1781 32.1891 53.6787 32.917C53.1794 33.6364 52.4854 34.1992 51.5967 34.6055C50.7165 35.0117 49.7093 35.2148 48.5752 35.2148C47.4326 35.2148 46.417 35.0117 45.5283 34.6055C44.6396 34.1992 43.9456 33.6364 43.4463 32.917C42.9469 32.1891 42.6973 31.3555 42.6973 30.416C42.6973 29.2988 42.9469 28.3594 43.4463 27.5977C43.9541 26.8275 44.6481 26.2435 45.5283 25.8457C46.417 25.4479 47.4242 25.249 48.5498 25.249C49.6924 25.249 50.7038 25.4479 51.584 25.8457C52.4727 26.2435 53.1667 26.8275 53.666 27.5977C54.1738 28.3594 54.4277 29.2988 54.4277 30.416ZM50.7715 30.5811C50.7715 30.0817 50.6826 29.6501 50.5049 29.2861C50.3271 28.9137 50.0732 28.626 49.7432 28.4229C49.4215 28.2197 49.0238 28.1182 48.5498 28.1182C48.0928 28.1182 47.6992 28.2155 47.3691 28.4102C47.0475 28.6048 46.7979 28.8883 46.6201 29.2607C46.4508 29.6247 46.3662 30.0648 46.3662 30.5811C46.3662 31.0804 46.4508 31.5205 46.6201 31.9014C46.7979 32.2738 47.0518 32.5658 47.3818 32.7773C47.7119 32.9889 48.1097 33.0947 48.5752 33.0947C49.0407 33.0947 49.4342 32.9889 49.7559 32.7773C50.0859 32.5658 50.3356 32.2738 50.5049 31.9014C50.6826 31.5205 50.7715 31.0804 50.7715 30.5811Z" fill="url(#paint1_linear_84_6311)" data-v-a46ec9fd></path><defs data-v-a46ec9fd><linearGradient id="paint0_linear_84_6311" x1="35" y1="0" x2="35" y2="70" gradientUnits="userSpaceOnUse" data-v-a46ec9fd><stop stop-color="#FA2221" data-v-a46ec9fd></stop><stop offset="1" stop-color="#FA5121" data-v-a46ec9fd></stop></linearGradient><linearGradient id="paint1_linear_84_6311" x1="34.5" y1="20" x2="34.5" y2="50" gradientUnits="userSpaceOnUse" data-v-a46ec9fd><stop stop-color="#FA2221" data-v-a46ec9fd></stop><stop offset="1" stop-color="#FA5121" data-v-a46ec9fd></stop></linearGradient></defs></svg></span>', 1)
  , Ze = ["onClick"]
  , Xe = {
    alt: ""
}
  , Ke = {
    class: "terms-rule"
}
  , Qe = {
    class: "terms-rule"
}
  , Ye = {
    class: "terms-rule"
}
  , et = {
    class: "terms-tips"
}
  , tt = {
    class: "terms-tips"
}
  , st = U({
    __name: "team",
    setup(S) {
        const {t: d} = se()
          , v = X()
          , n = Y();
        let r = H([]);
        function m(h) {
            v.push({
                name: "CustomerService-ServiceCollection",
                state: {
                    itemId: h
                }
            })
        }
        const p = async () => {
            const h = await ie(He());
            h && (r.value = h.data || [])
        }
        ;
        return J( () => {
            p()
        }
        ),
        (h, g) => {
            const c = z("svg-icon")
              , _ = q("lazy");
            return s(),
            o("div", Je, [t("div", qe, [Ee, (s(!0),
            o(D, null, N(e(r), (i, T) => (s(),
            o("span", {
                class: "terms-logo-service",
                key: T,
                onClick: I => m(i.typeID)
            }, [x(t("img", Xe, null, 512), [[_, e(Be)("main", `CStype${i.typeID}`)]])], 8, Ze))), 128))]), t("p", Ke, [k(c, {
                name: "91-point"
            }), t("span", null, l(e(d)("damanRule").replace("Daman", e(n).getProjectName)), 1)]), t("p", Qe, [k(c, {
                name: "91-point"
            }), t("span", null, l(e(d)("damanRule2").replace("Daman", e(n).getProjectName)), 1)]), t("p", Ye, [k(c, {
                name: "91-point"
            }), t("span", null, l(e(d)("damanRule3").replace("Daman", e(n).getProjectName)), 1)]), t("p", et, l(e(d)("damanWarn").replace("Daman", e(n).getProjectName)), 1), t("p", tt, l(e(d)("damanWarn2").replace("Daman", e(n).getProjectName)), 1)])
        }
    }
});
const nt = j(st, [["__scopeId", "data-v-a46ec9fd"], ["__file", "/usr/local/jenkins-prod/workspace/AR048-Pages-india-91club/src/components/Home/club91Home/team.vue"]])
  , ot = {
    class: "rank"
}
  , at = {
    class: "title"
}
  , it = {
    class: "rank_c"
}
  , lt = {
    class: "rank_c-topThree"
}
  , rt = {
    class: "r2"
}
  , ct = ["data-img"]
  , ut = ["data-img"]
  , dt = {
    class: "name"
}
  , _t = {
    class: "money"
}
  , pt = {
    class: "r1"
}
  , vt = ["data-img"]
  , mt = ["data-img"]
  , gt = {
    class: "name"
}
  , ht = {
    class: "money"
}
  , ft = {
    class: "r3"
}
  , yt = ["data-img"]
  , kt = ["data-img"]
  , Ct = {
    class: "name"
}
  , bt = {
    class: "money"
}
  , wt = {
    class: "rank_c-list"
}
  , $t = {
    class: "left-rank"
}
  , It = ["src"]
  , St = ["data-img"]
  , Lt = {
    class: "middle-name"
}
  , Tt = {
    class: "right-box"
}
  , At = U({
    __name: "rank",
    setup(S) {
        const {t: d} = se()
          , {homeState: v} = E()
          , n = {
            nickName: d("noData"),
            userPhoto: "",
            price: 0,
            time: "",
            typeName: ""
        };
        ue( () => v.rankList, p => {
            r.value.splice(0, p.length, ...p.sort( (h, g) => g.price - h.price).slice(0, 3)),
            m.value.splice(0, p.length, ...p.sort( (h, g) => g.price - h.price).slice(3, 10))
        }
        );
        const r = H([n, n, n])
          , m = H([]);
        return (p, h) => {
            const g = z("svg-icon")
              , c = q("lazy");
            return s(),
            o("div", ot, [t("div", at, [k(g, {
                name: "91-rank"
            }), V(l(p.$t("earningsRankingToday")), 1)]), t("div", it, [t("div", lt, [t("div", rt, [e(ee)(r.value[1].userPhoto) ? x((s(),
            o("img", {
                key: 1,
                "data-img": e(P)("home", "avatar")
            }, null, 8, ut)), [[c, e(P)("main/Avatar", r.value[1].userPhoto)]]) : x((s(),
            o("img", {
                key: 0,
                "data-img": e(P)("home", "avatar")
            }, null, 8, ct)), [[c, e(P)("home", "avatar")]]), t("div", dt, l(e(Q)(r.value[1].nickName)), 1), t("div", _t, l(e(F)(r.value[1].price)), 1)]), t("div", pt, [e(ee)(r.value[0].userPhoto) ? x((s(),
            o("img", {
                key: 1,
                "data-img": e(P)("home", "avatar")
            }, null, 8, mt)), [[c, e(P)("main/Avatar", r.value[0].userPhoto)]]) : x((s(),
            o("img", {
                key: 0,
                "data-img": e(P)("home", "avatar")
            }, null, 8, vt)), [[c, e(P)("home", "avatar")]]), t("div", gt, l(e(Q)(r.value[0].nickName)), 1), t("div", ht, l(e(F)(r.value[0].price)), 1)]), t("div", ft, [e(ee)(r.value[2].userPhoto) ? x((s(),
            o("img", {
                key: 1,
                "data-img": e(P)("home", "avatar")
            }, null, 8, kt)), [[c, e(P)("main/Avatar", r.value[2].userPhoto)]]) : x((s(),
            o("img", {
                key: 0,
                "data-img": e(P)("home", "avatar")
            }, null, 8, yt)), [[c, e(P)("home", "avatar")]]), t("div", Ct, l(e(Q)(r.value[2].nickName)), 1), t("div", bt, l(e(F)(r.value[2].price)), 1)])]), t("div", wt, [(s(!0),
            o(D, null, N(m.value, (_, i) => (s(),
            o("div", {
                class: "rank_c-list__item",
                key: i
            }, [t("span", $t, l(i + 4), 1), e(ee)(_.userPhoto) ? x((s(),
            o("img", {
                key: 1,
                "data-img": e(P)("home", "avatar")
            }, null, 8, St)), [[c, e(P)("main/Avatar", _.userPhoto)]]) : (s(),
            o("img", {
                key: 0,
                src: e(P)("home", "avatar")
            }, null, 8, It)), t("span", Lt, l(e(Q)(_.nickName)), 1), f(' <span class="middle-name">{{ formatString(item.nickName, 10) }}</span> '), t("span", Tt, l(e(F)(_.price)), 1)]))), 128))])])])
        }
    }
});
const Gt = j(At, [["__scopeId", "data-v-7f6671cd"], ["__file", "/usr/local/jenkins-prod/workspace/AR048-Pages-india-91club/src/components/Home/club91Home/rank.vue"]])
  , Bt = {
    class: "lobbyItem"
}
  , Ht = {
    class: "h"
}
  , Dt = {
    class: "t"
}
  , Rt = {
    key: 0,
    class: "d"
}
  , xt = {
    class: "b"
}
  , Pt = ["onClick"]
  , Nt = U({
    __name: "lobbyItem",
    props: {
        listData: {
            type: Array,
            required: !0
        },
        isMore: {
            type: Boolean,
            required: !1,
            default: !0
        },
        isLeft: {
            type: Boolean,
            required: !1,
            default: !0
        }
    },
    emits: ["item-click", "more-click"],
    setup(S, {emit: d}) {
        const v = S
          , n = H(0)
          , r = H()
          , m = _ => {
            n.value = _
        }
          , p = G( () => ge(v.listData || [], 3));
        function h(_) {
            d("item-click", _)
        }
        const g = () => {
            d("more-click")
        }
        ;
        H(null),
        H([]);
        const c = _ => {
            var i, T;
            _ === "left" ? (i = r.value) == null || i.prev() : (T = r.value) == null || T.next()
        }
        ;
        return (_, i) => {
            const T = z("Maintain")
              , I = q("lazy");
            return s(),
            o("div", Bt, [t("div", Ht, [t("div", Dt, [oe(_.$slots, "head", {}, void 0, !0)]), _.isLeft ? (s(),
            o("div", Rt, [_.isMore ? (s(),
            o("div", {
                key: 0,
                onClick: g,
                class: "more"
            }, l(_.$t("more")), 1)) : f("v-if", !0), t("div", {
                class: "left",
                onClick: i[0] || (i[0] = w => c("left"))
            }), t("div", {
                class: "right",
                onClick: i[1] || (i[1] = w => c("right"))
            })])) : f("v-if", !0)]), k(e(_e), {
                class: "my-swipe",
                ref_key: "swipeRef",
                ref: r,
                autoplay: 3e3,
                onChange: m,
                "lazy-render": !1,
                "show-indicators": !1
            }, {
                default: R( () => [(s(!0),
                o(D, null, N(p.value, (w, L) => (s(),
                W(e(de), {
                    key: L
                }, {
                    default: R( () => [t("div", xt, [(s(!0),
                    o(D, null, N(w, (y, $) => (s(),
                    o("div", {
                        class: "b-item",
                        key: $,
                        onClick: M => h(y)
                    }, [x(t("img", null, null, 512), [[I, y.img]]), k(T, {
                        item: y
                    }, null, 8, ["item"])], 8, Pt))), 128))])]),
                    _: 2
                }, 1024))), 128))]),
                _: 1
            }, 512), oe(_.$slots, "default", {}, void 0, !0)])
        }
    }
});
const Z = j(Nt, [["__scopeId", "data-v-08b9f980"], ["__file", "/usr/local/jenkins-prod/workspace/AR048-Pages-india-91club/src/components/Home/club91Home/lobbyItem.vue"]])
  , Mt = S => (pe("data-v-a0c8d129"),
S = S(),
ve(),
S)
  , Ut = {
    key: 0,
    class: "homeNav"
}
  , jt = {
    class: "title"
}
  , Wt = Mt( () => t("div", {
    class: "right_btn"
}, null, -1))
  , zt = {
    class: "tip"
}
  , Ot = {
    class: "picContainer"
}
  , Ft = {
    class: "multiple"
}
  , Vt = {
    class: "gameName"
}
  , Jt = {
    class: "bonusAmount"
}
  , qt = U({
    __name: "bigaward",
    setup(S) {
        const {ActiveSotre: d, getActive: v} = De()
          , {homeState: n} = E()
          , r = ne()
          , m = Y()
          , p = H(0)
          , h = H()
          , g = G( () => {
            var i;
            return ge(((i = n.allGameList) == null ? void 0 : i.awardrecordlist) || [], 3)
        }
        )
          , c = i => {
            p.value = i
        }
          , _ = () => {
            Re.push({
                name: "SuperJackpot"
            })
        }
        ;
        return J(async () => {
            r.token && await v()
        }
        ),
        (i, T) => {
            const I = q("lazy");
            return e(r).token && e(d).isOpenJackpotReward == 1 ? (s(),
            o("div", Ut, [t("div", jt, [t("div", null, l(i.$t("superjackpot")), 1), Wt]), t("div", zt, [V(l(i.$t("bigAward")) + l(i.$t("cpsTip4")) + " ", 1), t("span", null, l(e(F)(e(m).jackportMaxReswadAmount)), 1)]), k(e(_e), {
                class: "my-swipe",
                ref_key: "swipeRef",
                ref: h,
                autoplay: 3e3,
                onChange: c,
                "lazy-render": !1,
                "show-indicators": !1
            }, {
                default: R( () => [(s(!0),
                o(D, null, N(g.value, (w, L) => (s(),
                W(e(de), {
                    key: L
                }, {
                    default: R( () => [t("div", Ot, [(s(!0),
                    o(D, null, N(w, (y, $) => x((s(),
                    o("div", {
                        alt: "",
                        key: $
                    }, [t("div", Ft, l(y.multiple) + "X", 1), x(t("img", null, null, 512), [[I, y.imgUrl]]), t("div", Vt, l(y.gameName), 1), t("div", Jt, l(e(F)(y.bonusAmount)), 1)])), [[I, y.imgUrl]])), 128))])]),
                    _: 2
                }, 1024))), 128))]),
                _: 1
            }, 512), e(r).token ? (s(),
            o("div", {
                key: 0,
                class: "btn",
                onClick: _
            }, l(i.$t("lookBigAward")), 1)) : f("v-if", !0)])) : f("v-if", !0)
        }
    }
});
const Et = j(qt, [["__scopeId", "data-v-a0c8d129"], ["__file", "/usr/local/jenkins-prod/workspace/AR048-Pages-india-91club/src/components/Home/club91Home/bigaward.vue"]])
  , Zt = S => (pe("data-v-657212e7"),
S = S(),
ve(),
S)
  , Xt = {
    class: "lobby"
}
  , Kt = {
    class: "title pop"
}
  , Qt = {
    key: 0,
    class: "lottery"
}
  , Yt = {
    class: "h"
}
  , es = {
    class: "t"
}
  , ts = {
    class: "d"
}
  , ss = {
    class: "b"
}
  , ns = ["src", "onClick"]
  , os = Zt( () => t("div", {
    class: "miniGame"
}, null, -1))
  , as = {
    class: "title slot"
}
  , is = {
    class: "title chess"
}
  , ls = {
    class: "title fishing"
}
  , rs = {
    class: "title live"
}
  , cs = {
    class: "title sport"
}
  , us = U({
    __name: "lobby",
    emits: ["change-type"],
    setup(S, {emit: d}) {
        const v = ae("useHomeHook")
          , {homeState: n, isAlowGame: r, onItemClick: m, isSassLotteryGame: p, openThirdGame: h, checkMaintain: g} = v
          , c = X()
          , _ = [{
            value: 1,
            path: "WinGo"
        }, {
            value: 3,
            path: "5D"
        }, {
            value: 2,
            path: "K3"
        }, {
            value: 4,
            path: "WinTrx"
        }, {
            value: 5,
            path: "XoSo"
        }, {
            value: 6,
            path: "XoSo"
        }, {
            value: 7,
            path: "Binguo"
        }, {
            value: 8,
            path: "4D"
        }, {
            value: 9,
            path: "MotoRace"
        }, {
            value: 10,
            path: "VideoWinGo"
        }]
          , i = G( () => {
            var u;
            return n.gameTypeList.findIndex(a => a.categoryCode === "Lottery") === -1 ? [] : ((u = n.allGameList) == null ? void 0 : u.lottery) || []
        }
        )
          , T = G( () => {
            var u;
            return n.gameTypeList.findIndex(a => a.categoryCode === "Flash") === -1 ? [] : ((u = n.allGameList) == null ? void 0 : u.flash) || []
        }
        )
          , I = G( () => {
            var u, a;
            return n.gameTypeList.findIndex(A => A.categoryCode === "Popular") === -1 ? [] : ((a = (u = n.allGameList) == null ? void 0 : u.popular) == null ? void 0 : a.platformList.map(A => (A.img = A.imgUrl,
            A))) || []
        }
        )
          , w = G( () => {
            var u;
            return n.gameTypeList.findIndex(a => a.categoryCode === "Slot") === -1 ? [] : ((u = n.allGameList) == null ? void 0 : u.slot.map(a => (a.img = a.vendorImg,
            a))) || []
        }
        )
          , L = G( () => {
            var u;
            return n.gameTypeList.findIndex(a => a.categoryCode === "Chess") === -1 ? [] : ((u = n.allGameList) == null ? void 0 : u.chess.map(a => (a.img = a.vendorImg,
            a))) || []
        }
        )
          , y = G( () => {
            var u;
            return n.gameTypeList.findIndex(a => a.categoryCode === "Fish") === -1 ? [] : ((u = n.allGameList) == null ? void 0 : u.fish) || []
        }
        );
        G( () => {
            var u;
            return n.gameTypeList.findIndex(a => a.categoryCode === "BigAward") === -1 ? [] : ((u = n.allGameList) == null ? void 0 : u.awardrecordlist.map(a => (a.img = a.imgUrl,
            a))) || []
        }
        );
        const $ = G( () => {
            var u;
            return n.gameTypeList.findIndex(a => a.categoryCode === "Video") === -1 ? [] : ((u = n.allGameList) == null ? void 0 : u.video.map(a => (a.img = a.vendorImg,
            a))) || []
        }
        )
          , M = G( () => {
            var u;
            return n.gameTypeList.findIndex(a => a.categoryCode === "Sport") === -1 ? [] : ((u = n.allGameList) == null ? void 0 : u.sport.map(a => (a.img = a.vendorImg,
            a))) || []
        }
        )
          , C = u => {
            if (p(u))
                return h({
                    ...u,
                    vendorCode: "ARLottery"
                });
            c.push({
                name: "AllLotteryGames-" + _[_.findIndex(a => a.value === u.id)].path,
                query: {
                    id: u.id
                }
            })
        }
          , b = u => {
            d("change-type", u)
        }
          , B = (u, a) => {
            g(u) || (sessionStorage.setItem("slotGamesList", JSON.stringify(n.allGameList[a])),
            sessionStorage.setItem("gameType", JSON.stringify(a)),
            sessionStorage.setItem("clickedItem", JSON.stringify(u)),
            c.push({
                name: "AllOnlineGames"
            }))
        }
        ;
        return (u, a) => (s(),
        o("div", Xt, [k(Z, {
            listData: I.value,
            isMore: !1,
            onItemClick: e(m)
        }, {
            head: R( () => [t("div", Kt, l(u.$t("popularTitle")), 1)]),
            _: 1
        }, 8, ["listData", "onItemClick"]), i.value.length ? (s(),
        o("div", Qt, [t("div", Yt, [t("div", es, l(u.$t("lottery")), 1), t("div", ts, l(u.$t("flashText")), 1)]), t("div", ss, [(s(!0),
        o(D, null, N(i.value, (A, K) => (s(),
        o("img", {
            key: K,
            src: A.categoryImg,
            onClick: O => e(r)(A, C)
        }, null, 8, ns))), 128))])])) : f("v-if", !0), T.value.length ? (s(),
        W(Z, {
            key: 1,
            listData: T.value,
            onMoreClick: a[0] || (a[0] = A => b("Flash")),
            onItemClick: e(m)
        }, {
            head: R( () => [os]),
            _: 1
        }, 8, ["listData", "onItemClick"])) : f("v-if", !0), w.value.length ? (s(),
        W(Z, {
            key: 2,
            listData: w.value,
            onMoreClick: a[1] || (a[1] = A => b("Slot")),
            onItemClick: a[2] || (a[2] = A => B(A, "slot"))
        }, {
            head: R( () => [t("div", as, l(u.$t("electronicGame")), 1)]),
            _: 1
        }, 8, ["listData"])) : f("v-if", !0), L.value.length ? (s(),
        W(Z, {
            key: 3,
            listData: L.value,
            onMoreClick: a[3] || (a[3] = A => b("Chess")),
            onItemClick: a[4] || (a[4] = A => B(A, "chess"))
        }, {
            head: R( () => [t("div", is, l(u.$t("chess")), 1)]),
            _: 1
        }, 8, ["listData"])) : f("v-if", !0), y.value.length ? (s(),
        W(Z, {
            key: 4,
            listData: y.value,
            onMoreClick: a[5] || (a[5] = A => b("Fish")),
            onItemClick: e(m)
        }, {
            head: R( () => [t("div", ls, l(u.$t("fishing")), 1)]),
            _: 1
        }, 8, ["listData", "onItemClick"])) : f("v-if", !0), $.value.length ? (s(),
        W(Z, {
            key: 5,
            listData: $.value,
            onMoreClick: a[6] || (a[6] = A => b("Video")),
            onItemClick: e(m)
        }, {
            head: R( () => [t("div", rs, l(u.$t("live")), 1)]),
            _: 1
        }, 8, ["listData", "onItemClick"])) : f("v-if", !0), M.value.length ? (s(),
        W(Z, {
            key: 6,
            listData: M.value,
            onMoreClick: a[7] || (a[7] = A => b("Sport")),
            onItemClick: e(m)
        }, {
            head: R( () => [t("div", cs, l(u.$t("sport")), 1)]),
            _: 1
        }, 8, ["listData", "onItemClick"])) : f("v-if", !0), k(Et)]))
    }
});
const ds = j(us, [["__scopeId", "data-v-657212e7"], ["__file", "/usr/local/jenkins-prod/workspace/AR048-Pages-india-91club/src/components/Home/club91Home/lobby.vue"]])
  , _s = {
    class: "allGame"
}
  , ps = ["onClick"]
  , vs = U({
    __name: "gameList",
    props: {
        activeType: {
            type: String,
            required: !0
        }
    },
    setup(S) {
        const d = S
          , v = ae("useHomeHook")
          , {homeState: n, onItemClick: r} = v
          , m = G( () => n.allGameList[d.activeType.toLocaleLowerCase()] || []);
        return (p, h) => {
            const g = z("Maintain")
              , c = q("lazy");
            return s(),
            o("div", _s, [(s(!0),
            o(D, null, N(m.value, (_, i) => (s(),
            o("div", {
                class: "allGame-item",
                key: i,
                onClick: T => e(r)(_)
            }, [x(t("img", null, null, 512), [[c, _.img]]), k(g, {
                item: _
            }, null, 8, ["item"])], 8, ps))), 128))])
        }
    }
});
const ms = j(vs, [["__scopeId", "data-v-1e6f54c5"], ["__file", "/usr/local/jenkins-prod/workspace/AR048-Pages-india-91club/src/components/Home/club91Home/gameList.vue"]])
  , gs = {
    class: "allGame"
}
  , hs = {
    class: "body"
}
  , fs = ["onClick"]
  , ys = {
    class: "list"
}
  , ks = ["onClick"]
  , Cs = U({
    __name: "seachGame",
    props: {
        activeType: {
            type: String,
            required: !0
        }
    },
    setup(S) {
        const d = S
          , v = ae("useHomeHook")
          , {homeState: n, onItemClick: r} = v
          , m = X()
          , p = H(!1)
          , h = H([])
          , g = G( () => n.allGameList[d.activeType.toLocaleLowerCase()] || [])
          , c = async I => {
            const w = await ie(xe({
                type: I
            }));
            w && (h.value = w.data.gameLists || []),
            i.value = g.value.find(L => L.vendorId == I)
        }
          , _ = I => {
            p.value = !1,
            c(I.vendorId)
        }
        ;
        ue( () => d.activeType, I => {
            g.value[0] && c(g.value[0].vendorId)
        }
        , {
            immediate: !0
        });
        const i = H({})
          , T = I => {
            sessionStorage.setItem("slotGamesList", JSON.stringify(g.value)),
            sessionStorage.setItem("gameType", JSON.stringify(d.activeType.toLocaleLowerCase())),
            sessionStorage.setItem("clickedItem", JSON.stringify(i.value)),
            m.push({
                name: "AllOnlineGames"
            })
        }
        ;
        return J( () => {
            c(g.value[0].vendorId)
        }
        ),
        (I, w) => {
            const L = z("Maintain")
              , y = z("svg-icon")
              , $ = z("van-popup")
              , M = q("lazy");
            return s(),
            o(D, null, [t("div", gs, [t("div", {
                class: "head",
                onClick: w[0] || (w[0] = C => p.value = !0)
            }, l(e(ce)(i.value.slotsName)), 1), t("div", hs, [(s(!0),
            o(D, null, N(h.value, (C, b) => (s(),
            o("div", {
                class: "body-item",
                key: b,
                onClick: B => e(r)(C)
            }, [x(t("img", null, null, 512), [[M, C.img]]), k(L, {
                item: C
            }, null, 8, ["item"])], 8, fs))), 128))]), t("div", {
                class: "btn",
                onClick: T
            }, l(I.$t("viewAll")), 1)]), k($, {
                show: p.value,
                "onUpdate:show": w[1] || (w[1] = C => p.value = C),
                round: "",
                position: "bottom"
            }, {
                default: R( () => [t("div", ys, [(s(!0),
                o(D, null, N(g.value, (C, b) => (s(),
                o("div", {
                    key: b,
                    class: te([i.value.vendorId == C.vendorId && "active"]),
                    onClick: B => _(C)
                }, [t("div", null, l(e(ce)(C.slotsName)), 1), k(y, {
                    name: C.slotsName,
                    class: "gameIcon"
                }, null, 8, ["name"])], 10, ks))), 128))])]),
                _: 1
            }, 8, ["show"])], 64)
        }
    }
});
const bs = j(Cs, [["__scopeId", "data-v-e9f45d50"], ["__file", "/usr/local/jenkins-prod/workspace/AR048-Pages-india-91club/src/components/Home/club91Home/seachGame.vue"]])
  , ws = {
    class: "game"
}
  , $s = {
    key: 0,
    class: "sticky nav"
}
  , Is = ["onClick"]
  , Ss = ["onClick"]
  , Ls = U({
    __name: "game",
    setup(S) {
        const d = H([{
            type: "",
            label: "Lobby",
            icon: "lobby"
        }, {
            type: "Flash",
            label: "",
            icon: "miniGame"
        }, {
            type: "Slot",
            label: "Slots",
            icon: "slots"
        }, {
            type: "Chess",
            label: "Card",
            icon: "card"
        }, {
            type: "Fish",
            label: "Fishing",
            icon: "fishing"
        }, {
            type: "Video",
            label: "Casino",
            icon: "casino"
        }, {
            type: "Sport",
            label: "Sports",
            icon: "sports"
        }])
          , v = ["Flash", "Fish", "Video", "Sport"]
          , n = ["Slot", "Chess"]
          , r = E();
        Ce("useHomeHook", r);
        const {t: m} = se()
          , {getGameType: p, homeState: h, getAllGame: g} = r
          , c = H("")
          , _ = be([])
          , i = H(null)
          , T = async () => {
            if (await p(),
            h.gameTypeList.length > 0) {
                h.gameTypeList.forEach(b => {
                    b.state === 1 && _.push({
                        isShow: b.state === 1,
                        title: m("code" + b.typeNameCode),
                        img: b.categoryImg,
                        key: b.categoryCode.toLocaleLowerCase()
                    })
                }
                );
                const $ = h.gameTypeList.filter(b => b.state === 1).sort( (b, B) => B.sort - b.sort)
                  , M = d.value.filter(b => $.some(B => B.categoryCode === b.type))
                  , C = {
                    type: "",
                    label: "Lobby",
                    icon: "lobby"
                };
                d.value = [C, ...M],
                sessionStorage.setItem("gameMenu", JSON.stringify(_))
            }
        }
        ;
        function I($, M, C=!1) {
            c.value = $;
            const b = M.currentTarget;
            if (i.value) {
                const B = i.value
                  , u = B.offsetWidth
                  , a = b.offsetLeft - B.offsetLeft
                  , A = b.offsetWidth;
                console.log("容器，目标左，目标宽", u, a, A);
                const K = Math.max(0, a - (u - A) / 2);
                B.scrollTo({
                    left: K / 2,
                    behavior: "smooth"
                })
            }
            C && i.value && window.scrollTo({
                top: i.value.offsetTop - 10,
                behavior: "smooth"
            })
        }
        const w = $ => {
            c.value = $
        }
          , L = H(!1)
          , y = () => {
            if (i.value) {
                const $ = i.value.getBoundingClientRect().top - 40;
                L.value = $ <= 0
            }
        }
        ;
        return J( () => {
            window.addEventListener("scroll", y)
        }
        ),
        me( () => {
            window.removeEventListener("scroll", y)
        }
        ),
        T(),
        g(),
        ($, M) => (s(),
        o(D, null, [t("div", ws, [L.value ? (s(),
        o("div", $s, [(s(!0),
        o(D, null, N(d.value, C => (s(),
        o("div", {
            key: C.type,
            class: te([c.value === C.type && "active", C.icon]),
            onClick: b => I(C.type, b, !0)
        }, l(C.label), 11, Is))), 128))])) : f("v-if", !0), t("div", {
            class: "nav",
            ref_key: "navRef",
            ref: i
        }, [(s(!0),
        o(D, null, N(d.value, C => (s(),
        o("div", {
            key: C.type,
            class: te([c.value === C.type && "active", C.icon]),
            onClick: b => I(C.type, b)
        }, l(C.label), 11, Ss))), 128))], 512)]), c.value == "" ? (s(),
        W(ds, {
            key: 0,
            onChangeType: w
        })) : f("v-if", !0), v.includes(c.value) ? (s(),
        W(ms, {
            key: 1,
            activeType: c.value
        }, null, 8, ["activeType"])) : f("v-if", !0), n.includes(c.value) ? (s(),
        W(bs, {
            key: 2,
            activeType: c.value
        }, null, 8, ["activeType"])) : f("v-if", !0)], 64))
    }
});
const Ts = j(Ls, [["__scopeId", "data-v-6f952d30"], ["__file", "/usr/local/jenkins-prod/workspace/AR048-Pages-india-91club/src/components/Home/club91Home/game.vue"]])
  , As = {
    class: "winner_91"
}
  , Gs = {
    class: "title"
}
  , Bs = {
    class: "winner_91-wrapper"
}
  , Hs = {
    class: "head"
}
  , Ds = {
    class: "game"
}
  , Rs = {
    class: "name"
}
  , xs = {
    class: "amount"
}
  , Ps = U({
    __name: "winner",
    setup(S) {
        const {homeState: d, getWinInfoDetail: v, getWinInfo: n} = E()
          , r = H(null)
          , m = H(null);
        return J(async () => {
            await v(),
            we(m.value),
            d.winInfoList.length > 0 && (r.value = setInterval(async () => {
                d.winInfoList.unshift(d.winInfoList.pop())
            }
            , 3e3))
        }
        ),
        me( () => {
            clearInterval(r.value)
        }
        ),
        (p, h) => {
            const g = z("svg-icon");
            return s(),
            o("div", As, [t("div", Gs, [k(g, {
                name: "91-winner"
            }), V(l(p.$t("winningDetal")), 1)]), t("div", Bs, [t("div", Hs, [t("div", null, l(p.$t("game")), 1), t("div", null, l(p.$t("winner")), 1), t("div", null, l(p.$t("winningAmount")), 1)]), t("div", {
                class: "body",
                ref_key: "wrapperRef",
                ref: m
            }, [(s(!0),
            o(D, null, N(e(n).slice(0, 10), c => (s(),
            o("div", {
                class: "winner_91-wrapper__item",
                key: JSON.stringify(c)
            }, [t("div", Ds, [k(g, {
                name: "91-winner"
            }), V(l(c.typeName.replace("_", " ")), 1)]), t("div", Rs, l(e(Q)(c.nickName)), 1), t("div", xs, l(e(F)(c.amount || 0)), 1)]))), 128))], 512)])])
        }
    }
});
const Ns = j(Ps, [["__scopeId", "data-v-f58322f8"], ["__file", "/usr/local/jenkins-prod/workspace/AR048-Pages-india-91club/src/components/Home/club91Home/winner.vue"]])
  , Ms = ["src"]
  , Us = {
    class: "bonus-con"
}
  , js = {
    class: "bonus"
}
  , Ws = {
    class: "text"
}
  , zs = ["src"]
  , Os = {
    class: "text"
}
  , Fs = U({
    __name: "DownloadPWA",
    setup(S) {
        const d = he()
          , {t: v} = se()
          , n = Y()
          , {onDown: r} = E()
          , {store: m} = le();
        console.log("当前下载奖励金额", m.downAppRewardBonusAmount),
        G( () => n.isOpenDownAppRewardSwitch);
        const p = G( () => (n == null ? void 0 : n.downAppBonusAmount) ?? 0)
          , h = G( () => n.isShowDownAppBonusAmountSwitch);
        return (g, c) => e(d).apk.value != e(fe).FullApk ? (s(),
        o(D, {
            key: 0
        }, [h.value ? (s(),
        o("div", {
            key: 0,
            class: "btn pwa-btn",
            onClick: c[0] || (c[0] = (..._) => e(r) && e(r)(..._))
        }, [t("img", {
            class: "icon",
            src: e(n).getWebIco
        }, null, 8, Ms), t("div", Us, [t("div", js, l(e(v)("getMoney", [e(F)(p.value, "", 0)])), 1), t("div", Ws, l(e(v)("addToDesktop")), 1)])])) : (s(),
        o("div", {
            key: 1,
            class: "btn pwa-btn",
            onClick: c[1] || (c[1] = (..._) => e(r) && e(r)(..._))
        }, [t("img", {
            class: "icon",
            src: e(n).getWebIco
        }, null, 8, zs), t("div", Os, l(e(v)("addToDesktop")), 1)]))], 64)) : f("v-if", !0)
    }
});
const Vs = j(Fs, [["__scopeId", "data-v-b3bd7e49"], ["__file", "/usr/local/jenkins-prod/workspace/AR048-Pages-india-91club/src/components/common/DownloadPWA.vue"]])
  , Js = "/assets/png/reBenefits-c784b658.png"
  , qs = "/assets/png/rewardCenter-f8f2277a.png"
  , Es = "/assets/png/tg_bg-8a7ff21e.png"
  , Zs = "/assets/png/turntable_icon-9b14cf81.png"
  , Xs = "/assets/png/turntable-4464ae2e.png"
  , Ks = {
    class: "float"
}
  , Qs = {
    class: "downText"
}
  , Ys = {
    class: "time"
}
  , en = U({
    __name: "Turntable",
    setup(S) {
        $e(O => ({
            "d9cf7d89-reBenefitBgUrl": b.value,
            "d9cf7d89-rewardCenterBgUrl": B.value,
            "d9cf7d89-bigTurntableBgUrl": a.value,
            "d9cf7d89-homeBigTurntableBgUrl": A.value,
            "d9cf7d89-telegramBgUrl": u.value,
            "d9cf7d89-changlongIconUrl": K.value
        }));
        const d = X()
          , v = H()
          , n = Y()
          , {store: r, onReturnReBenefit: m} = le()
          , p = ne()
          , {isAlowGame: h, goChangLong: g, showChanglong: c} = E()
          , {onTriggerGoogle: _} = Me()
          , {formattedTime: i, activityStatus: T} = Pe()
          , I = G( () => r.reBenefit && T.value === "IN_PROGRESS")
          , w = async () => {
            if (!p.token) {
                d.push({
                    name: "login"
                });
                return
            }
            await h("", g)
        }
          , L = () => {
            if (!p.token) {
                d.push({
                    name: "login"
                });
                return
            }
            d.push({
                name: "turntable"
            })
        }
          , y = () => {
            if (!p.token) {
                d.push({
                    name: "login"
                });
                return
            }
            d.push({
                name: "Turntable"
            })
        }
          , $ = () => {
            if (!p.token) {
                d.push({
                    name: "login"
                });
                return
            }
            r.rewardCenter = !0,
            _("reward_center_click")
        }
          , M = () => {
            if (!p.token) {
                d.push({
                    name: "login"
                });
                return
            }
            m(),
            r.isShowReBenefit = !0
        }
          , C = O => {
            O && window.open(O)
        }
          , b = G( () => `url('${Js}')`)
          , B = G( () => `url('${n.getBonusCenterImgUrl || qs}')`)
          , u = G( () => `url('${n.getTelegramImgUrl || Es}')`)
          , a = G( () => `url('${n.getBigTurntableImgUrl || Zs}')`)
          , A = G( () => `url('${n.getHomeBigTurntableImgUrl || Xs}')`)
          , K = G( () => `url('${n.getLotteryDragonIcon || Ne}')`);
        return (O, re) => {
            const ye = q("scrollhide");
            return x((s(),
            o("div", Ks, [f(" 会员回归奖励 "), I.value ? (s(),
            o("div", {
                key: 0,
                class: "reBenefit float-entry",
                onClick: M
            }, [t("div", Qs, [t("span", Ys, l(e(i)), 1)])])) : f("v-if", !0), f(" 奖金弹窗 "), e(n).getIsShowRewardCenter ? (s(),
            o("div", {
                key: 1,
                class: "rewardCenter float-entry",
                onClick: $
            })) : f("v-if", !0), f(" 邀请转盘组件 "), e(n).getIsOpenInvitedWheel ? (s(),
            o("div", {
                key: 2,
                class: "turntable-lottery float-entry",
                onClick: L
            })) : f("v-if", !0), f(" 大转盘组件 "), e(n).getHomeBigTurntableSwitch ? (s(),
            o("div", {
                key: 3,
                ref_key: "turntableId",
                ref: v,
                class: "big-turntable float-entry",
                onClick: y
            }, null, 512)) : f("v-if", !0), f(" Telegram组件 "), e(n).getTelegramExternalLink ? (s(),
            o("div", {
                key: 4,
                class: "turntable-telegram float-entry",
                onClick: re[0] || (re[0] = Cn => C(e(n).getTelegramExternalLink))
            })) : f("v-if", !0), f(" 长龙组件 "), e(c) ? (s(),
            o("div", {
                key: 5,
                class: "changlongEnter float-entry",
                onClick: w
            })) : f("v-if", !0)])), [[ye]])
        }
    }
});
const tn = j(en, [["__file", "/usr/local/jenkins-prod/workspace/AR048-Pages-india-91club/src/components/common/Turntable.vue"]])
  , sn = {
    class: "swiper_box"
}
  , nn = ["onClick"]
  , on = {
    key: 0,
    class: "swiper-button"
}
  , an = U({
    __name: "index",
    props: {
        isShowButton: {
            type: Boolean,
            default: !1
        }
    },
    setup(S) {
        const d = X()
          , {getBannerApi: v, getBanner: n, openThirdGame: r} = E()
          , {getSelfCustomerServiceLink: m} = Ue({
            ServerType: 2
        })
          , p = H(0)
          , h = [Le]
          , g = i => {
            i.activeIndex >= n.value.length ? p.value = i.activeIndex - n.value.length : p.value = i.activeIndex
        }
          , c = {
            0: "slot",
            1: "video",
            2: "sport",
            3: "lottery",
            4: "chess"
        }
          , _ = i => {
            if (i.jumpLinkType == 1) {
                if (!i.gameCode) {
                    if ([0, 4].includes(i.categoryType) && i.vendorCode) {
                        d.push({
                            name: "AllOnlineGames",
                            query: {
                                game: i.categoryType == 0 ? "slot" : "chess",
                                vendorCode: i.vendorCode || ""
                            }
                        });
                        return
                    }
                    if ([1, 2].includes(i.categoryType) && i.vendorCode)
                        return r(i);
                    const I = c[i.categoryType] || "";
                    d.push({
                        name: "AllGames",
                        query: {
                            type: I
                        }
                    });
                    return
                }
                r(i);
                return
            } else if (i.jumpLinkType == 2) {
                m();
                return
            }
            const T = i.url;
            T && (window.location.href = T)
        }
        ;
        return J(async () => {
            await v()
        }
        ),
        (i, T) => {
            const I = q("lazy");
            return s(),
            o("div", sn, [k(e(Se), {
                class: "my-swipe",
                "slides-per-view": 1,
                "space-between": 20,
                onSlideChange: g,
                autoplay: {
                    delay: 5e3,
                    disableOnInteraction: !1
                },
                modules: h,
                loop: !0
            }, {
                default: R( () => [(s(!0),
                o(D, null, N(e(n), (w, L) => (s(),
                W(e(Ie), {
                    key: L
                }, {
                    default: R( () => [x(t("img", {
                        onClick: y => _(w)
                    }, null, 8, nn), [[I, w.bannerUrl]])]),
                    _: 2
                }, 1024))), 128))]),
                _: 1
            }), e(n).length > 1 && S.isShowButton ? (s(),
            o("div", on, [(s(!0),
            o(D, null, N(e(n).length, w => (s(),
            o("span", {
                key: w,
                class: te({
                    active: p.value === w - 1
                })
            }, null, 2))), 128))])) : f("v-if", !0)])
        }
    }
});
const ln = j(an, [["__scopeId", "data-v-3ad7aed7"], ["__file", "/usr/local/jenkins-prod/workspace/AR048-Pages-india-91club/src/components/Home/Swiper/index.vue"]])
  , rn = ["src"]
  , cn = {
    key: 0,
    class: "nav-right"
}
  , un = {
    key: 1,
    class: "nav-right"
}
  , dn = {
    class: "club91"
}
  , _n = {
    class: "h"
}
  , pn = {
    key: 0,
    class: "amount"
}
  , vn = {
    class: "a1"
}
  , mn = {
    class: "title"
}
  , gn = {
    class: "a"
}
  , hn = {
    class: "wv"
}
  , fn = {
    class: "promptHeader"
}
  , yn = ["innerHTML"]
  , kn = U({
    __name: "91club",
    setup(S) {
        const d = ne()
          , v = X()
          , {projectIcon: n, isRead: r, onDown: m} = E()
          , {closePrompt: p, store: h, promptContent: g, beforeClosePrompt: c} = le()
          , _ = je()
          , i = Y()
          , T = he()
          , I = async () => {
            _.resetData(!1, !0)
        }
          , w = () => {
            v.push({
                name: "Messages"
            })
        }
        ;
        return J( () => {
            d.getToken && (i.getIsSwitchSaasBalance ? _.GetARGameAndPlatWallets(!1) : _.resetData(!0, !1))
        }
        ),
        (L, y) => {
            const $ = z("svg-icon")
              , M = z("NavBar")
              , C = z("Point")
              , b = z("van-dialog");
            return s(),
            o(D, null, [k(M, null, {
                left: R( () => [t("img", {
                    src: e(n),
                    alt: ""
                }, null, 8, rn)]),
                right: R( () => [e(d).getToken ? (s(),
                o("div", un, [e(T).apk.value != e(fe).FullApk ? (s(),
                W($, {
                    key: 0,
                    class: "downIcon",
                    name: "91-homeDown",
                    onClick: Te(e(m), ["stop"])
                }, null, 8, ["onClick"])) : f("v-if", !0)])) : (s(),
                o("div", cn, [t("div", {
                    class: "nav-btn login",
                    onClick: y[0] || (y[0] = B => e(v).push({
                        name: "login"
                    }))
                }, l(L.$t("login")), 1), t("div", {
                    class: "nav-btn",
                    onClick: y[1] || (y[1] = B => e(v).push({
                        name: "register"
                    }))
                }, l(L.$t("register")), 1)]))]),
                _: 1
            }), t("div", dn, [t("div", _n, [k(Ve, null, {
                default: R( () => [t("div", {
                    class: "message",
                    onClick: w
                }, [k($, {
                    name: "91-message_notice"
                }), x(k(C, {
                    class: "point"
                }, null, 512), [[Ae, !e(r)]])])]),
                _: 1
            }), k(ln, {
                class: "nop"
            }), e(d).getToken ? (s(),
            o("div", pn, [t("div", vn, [t("div", mn, [k($, {
                name: "91-gold"
            }), V(" " + l(L.$t("walletBalance")), 1)]), t("div", gn, [V(l(e(F)(e(_).getAmount)), 1), k($, {
                name: "91-refresh",
                onClick: I
            })])]), t("div", {
                class: "a2",
                onClick: y[2] || (y[2] = B => e(v).push({
                    name: "Withdraw"
                }))
            }, [k($, {
                name: "91-up"
            }), V(l(L.$t("withdraw")), 1)]), t("div", {
                class: "a2",
                onClick: y[3] || (y[3] = B => e(v).push({
                    name: "Recharge"
                }))
            }, [k($, {
                name: "91-down"
            }), V(l(L.$t("recharge")), 1)])])) : f("v-if", !0), t("div", hn, [k($, {
                name: "91-turntable",
                onClick: y[4] || (y[4] = B => e(v).push({
                    name: "Turntable"
                }))
            }), k($, {
                name: "91-vip",
                onClick: y[5] || (y[5] = B => e(v).push({
                    name: "vip"
                }))
            })])]), k(Ts), k(Ns), k(Gt), k(nt), k(b, {
                show: e(h).prompt,
                "onUpdate:show": y[6] || (y[6] = B => e(h).prompt = B),
                "confirm-button-text": L.$t("confirm"),
                onConfirm: e(p),
                "before-close": e(c)
            }, {
                default: R( () => [t("div", fn, l(e(g).title), 1), t("div", {
                    class: "promptContent",
                    innerHTML: e(g).siteMessage
                }, null, 8, yn)]),
                _: 1
            }, 8, ["show", "confirm-button-text", "onConfirm", "before-close"]), k(tn)]), f("下载PWA应用"), k(Vs), f(" 邀请转盘 "), f(" <InviteTurntable /> ")], 64)
        }
    }
});
const Ln = j(kn, [["__scopeId", "data-v-d78763b5"], ["__file", "/usr/local/jenkins-prod/workspace/AR048-Pages-india-91club/src/views/home/other/91club.vue"]]);
export {Ln as default};
