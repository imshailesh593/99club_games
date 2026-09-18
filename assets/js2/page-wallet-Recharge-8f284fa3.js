import {G as oe, z as Re, r as G, $ as Le, q as Ue, a4 as Wt, H as B, N as s, I as n, J as t, ao as o, K as j, M as x, ap as V, O as e, P as a, aB as k, Q as _, aC as Me, aD as Ee, u as Ce, B as ne, R as We, C as ye, aA as Ve, ax as Y, au as J, ay as qt, av as D, Z as ce, aF as ht, E as qe, a$ as Q, t as jt, by as Ne, F as Ft, aK as Gt} from "./common.modules-5cfe2cf4.js";
import {u as Ae, I as Ht} from "./page-wallet-OtherPay-5429905a.js";
import {a5 as Te, dM as de, a9 as gt, _ as re, y as Ie, g as se, b as ue, c as ee, bc as mt, dF as Kt, aj as zt, a1 as Xt, cD as ft, bS as vt, bT as _t, A as Qt, dN as Jt, L as De, al as Zt} from "./page-activity-ActivityDetail-a58ec568.js";
import {A as yt} from "./page-main-index.vue_vue_type_script_setup_true_lang.ts-510823be.js";
import {E as Yt} from "./page-activity-Bonus-3c16c86d.js";
import {D as Be} from "./page-activity-Championship-4e6c587b.js";
const $t = S => (Me("data-v-4f3d8608"),
S = S(),
Ee(),
S)
  , xt = {
    class: "Recharge__container-tabcard"
}
  , ea = ["onClick"]
  , ta = {
    class: "centers"
}
  , aa = {
    key: 0,
    class: "gift"
}
  , sa = {
    key: 0
}
  , na = {
    key: 1
}
  , oa = {
    key: 2,
    class: "small"
}
  , ra = {
    class: "Recharge__container-tabcard__top"
}
  , ia = ["src"]
  , la = {
    class: "Recharge__container-tabcard__bot"
}
  , ca = {
    key: 0
}
  , da = {
    class: "left"
}
  , ua = {
    class: "right"
}
  , pa = {
    class: "ar_wallet"
}
  , va = {
    class: "info"
}
  , _a = ["src"]
  , ha = {
    key: 0,
    class: "tit"
}
  , ga = {
    key: 1,
    class: "tip"
}
  , ma = {
    key: 2,
    class: "wallet_amount"
}
  , fa = $t( () => t("span", null, "ARB", -1))
  , ya = {
    key: 1
}
  , $a = {
    class: "ar_wallet"
}
  , ka = {
    class: "info"
}
  , wa = ["src"]
  , ba = {
    key: 0,
    class: "tip"
}
  , Ra = {
    class: "tit"
}
  , Ca = {
    class: "wallet_amount"
}
  , Aa = $t( () => t("em", null, "rsn", -1))
  , Ta = oe({
    __name: "RechargeMenu",
    setup(S) {
        const {store: v, handleChangeMenu: i, getPayTabList: h, arPay: R, currentPayId: g, rnsPay: $} = Ae()
          , {isArWalletActive: w, arWallet: L, onTradRule: X, getInfo: m, goWallet: f, goActive: I, activeBind: P} = Te()
          , {t: T} = Re()
          , E = G(!1)
          , te = O => {
            console.log("进来数据", O),
            P(O, "wallet/recharge"),
            E.value = !1
        }
          , Z = async () => {
            Ue({
                message: T("loading") + "...",
                forbidClick: !0
            });
            const O = {
                returnUrl: "https://" + window.location.host + "/#/main"
            }
              , y = await gt(O);
            if ((y == null ? void 0 : y.code) === 1)
                return (y == null ? void 0 : y.msgCode) === 1010 && (E.value = !0),
                Ce(y == null ? void 0 : y.msg);
            if ((y == null ? void 0 : y.code) === 0) {
                const {walletActivationPageUrl: W, memberId: H, merchantCode: U, timestamp: K} = (y == null ? void 0 : y.data) || {};
                window.location.href = W + "&memberId=" + H + "&merchantCode=" + U + "&timestamp=" + K
            }
        }
          , F = O => {
            O === "RSN" ? v.rsnInfo.walletActivationStatus === 0 ? I("wallet/recharge", "RSN") : f("wallet/recharge", "RSN") : w.value ? f("wallet/recharge") : Z()
        }
        ;
        return Le( () => g.value, async O => {
            O === 21 && (Ue({
                message: T("loading") + "...",
                forbidClick: !0
            }),
            await m(),
            v.arPayInfo = L.value,
            Wt())
        }
        , {
            immediate: !0
        }),
        (O, y) => {
            var U, K;
            const W = B("svg-icon")
              , H = B("van-icon");
            return s(),
            n(j, null, [t("div", null, [o('		<div class="new_upi" v-if="arUpiPay" :class="{ upi_active: store.currentMenu === -3 }" @click="handleChangeMenu(-3)">'), o('			<img :src="arUpiPay.payNameUrl" alt="" />'), o('			<div class="upi_item rns_item">'), o('				<div class="title">{{ arUpiPay.payName }}</div>'), o('				<div v-if="arUpiPay.maxRechargeRifts" class="upi_image">+{{ arUpiPay?.maxRechargeRifts * 100 }}%</div>'), o("			</div>"), o("		</div>"), o('		<div class="new_upi" v-if="arPay" :class="{ upi_active: store.currentMenu === -1 }" @click="handleChangeMenu(-1)">'), o('			<img :src="arPay.payNameUrl" alt="" />'), o('			<div class="upi_item">'), o('				<div class="title">{{ arPay.payName }}</div>'), o('				<div v-if="arPay?.maxRechargeRifts" class="upi_image">+{{ arPay?.maxRechargeRifts * 100 }}%</div>'), o('				<div class="gift" v-if="arPay.maxRechargeRifts">'), o("					{{ t('arGift', [accMul(arPay.maxRechargeRifts || 0, 100) + '%']) }}"), o("				</div>"), o('				<div v-if="arPay?.maxRechargeRifts" class="upi_image">+{{ arPay?.maxRechargeRifts * 100 }}%</div>'), o("			</div>"), o("		</div>"), o('		<div class="new_upi" v-if="rnsPay" :class="{ upi_active: store.currentMenu === -2 }" @click="handleChangeMenu(-2)">'), o('			<img :src="rnsPay.payNameUrl" alt="" />'), o('			<div class="upi_item rns_item">'), o('				<div class="title">{{ rnsPay.payName }}</div>'), o('				<div v-if="rnsPay.maxRechargeRifts" class="upi_image">+{{ rnsPay?.maxRechargeRifts * 100 }}%</div>'), o("			</div>"), o("		</div>"), t("div", xt, [(s(!0),
            n(j, null, x(e(h), (C, z) => (s(),
            n("div", {
                key: z,
                class: V(["Recharge__container-tabcard__items", {
                    active: z === e(v).currentMenu
                }]),
                onClick: ie => e(i)(z)
            }, [t("div", ta, [(C.maxRechargeRifts ?? 0) > 0 || (C.vipRechargeRate ?? 0) > 0 ? (s(),
            n("div", aa, [(C.maxRechargeRifts ?? 0) > 0 && (C.vipRechargeRate ?? 0) === 0 ? (s(),
            n("span", sa, " +" + a(e(de)(C.maxRechargeRifts * 100)) + "% ", 1)) : (C.vipRechargeRate ?? 0) > 0 && (C.maxRechargeRifts ?? 0) === 0 ? (s(),
            n("span", na, " +" + a(e(de)(C.vipRechargeRate * 100)) + "% ", 1)) : (s(),
            n("span", oa, a(e(de)(C.maxRechargeRifts * 100)) + "%+" + a(e(de)(C.vipRechargeRate * 100)) + "% ", 1))])) : o("v-if", !0), t("div", ra, [t("img", {
                class: "img",
                src: z === e(v).currentMenu ? C.payNameUrl2 : C.payNameUrl,
                alt: ""
            }, null, 8, ia)]), t("div", la, [k(a(C.payName) + " ", 1), o(' <span v-if="item.maxRechargeRifts && item.maxRechargeRifts > 0">{{ item?.maxRechargeRifts * 100 }}%</span> ')])])], 10, ea))), 128))]), e(R) && e(v).currentPayId === 21 ? (s(),
            n("div", ca, [t("div", {
                class: "rule",
                onClick: y[0] || (y[0] = C => e(X)())
            }, [t("div", da, [_(W, {
                name: "arpay1"
            }), t("p", null, a(O.$t("arbTip1")), 1)]), t("div", ua, [k(a(O.$t("checkOver")), 1), _(H, {
                name: "arrow"
            })])]), t("div", pa, [t("div", va, [t("img", {
                src: e(R).payNameUrl,
                alt: ""
            }, null, 8, _a), t("div", null, [e(w) ? (s(),
            n("div", ha, a(e(T)("arbTip13")), 1)) : o("v-if", !0), e(w) ? (s(),
            n("div", ma, [k(a(((U = e(L)) == null ? void 0 : U.balance) || 0), 1), fa])) : (s(),
            n("div", ga, a(O.$t("arNoActive")), 1))])]), t("div", {
                class: "ar_btn",
                onClick: F
            }, a(e(w) ? e(T)("comminWallet") : e(T)("arActive")), 1)]), o(` <div class="ar_wallet_tip">{{ $t('arTip') }}</div> `)])) : o("v-if", !0), e($) && e(v).currentPayId === 22 ? (s(),
            n("div", ya, [t("div", $a, [t("div", ka, [t("img", {
                src: e($).payNameUrl,
                alt: ""
            }, null, 8, wa), t("div", null, [e(v).rsnInfo.walletActivationStatus === 0 ? (s(),
            n("div", ba, a(O.$t("rnsNoActive")), 1)) : (s(),
            n(j, {
                key: 1
            }, [t("div", Ra, a(e(T)("RSNTip")), 1), t("div", Ca, [t("em", null, a(e(T)("balance")) + ":", 1), k(" " + a(((K = e(v).rsnInfo) == null ? void 0 : K.balance) || 0) + " ", 1), Aa])], 64))])]), t("div", {
                class: "ar_btn",
                onClick: y[1] || (y[1] = C => F("RSN"))
            }, a(e(v).rsnInfo.walletActivationStatus === 0 ? e(T)("RNSActive") : e(T)("comminWallet")), 1)]), o(` <div class="ar_wallet_tip">{{ $t('arTip') }}</div> `)])) : o("v-if", !0)]), o("激活绑定验证"), _(yt, {
                isVisible: E.value,
                onOnConfirm: te,
                onOnCancel: y[2] || (y[2] = C => E.value = !1)
            }, null, 8, ["isVisible"])], 64)
        }
    }
});
const Ia = re(Ta, [["__scopeId", "data-v-4f3d8608"], ["__file", "/usr/local/jenkins-prod/workspace/AR048-Pages-india-91club/src/components/Wallet/Recharge/RechargeMenu.vue"]])
  , Sa = {
    key: 0,
    class: "arCard"
}
  , Pa = {
    class: "left"
}
  , Oa = ["src"]
  , Na = {
    class: "features"
}
  , Da = {
    class: "title"
}
  , Ba = {
    class: "t1"
}
  , Ua = {
    class: "t3"
}
  , Va = ["innerHTML"]
  , La = ["innerHTML"]
  , Ma = oe({
    __name: "noActivate",
    props: {
        pageType: {
            type: String,
            required: !0
        }
    },
    setup(S) {
        const v = S
          , {t: i} = Re()
          , {goActive: h, activeBind: R, onTradRule: g} = Te()
          , $ = ne( () => Ie().getProjectName)
          , w = G(!1)
          , L = async () => {
            Ue({
                message: i("loading") + "...",
                forbidClick: !0
            });
            const m = {
                returnUrl: "https://" + window.location.host + "/#/main"
            }
              , f = await gt(m);
            if ((f == null ? void 0 : f.code) === 1)
                return (f == null ? void 0 : f.msgCode) === 1010 && (w.value = !0),
                Ce(f == null ? void 0 : f.msg);
            if ((f == null ? void 0 : f.code) === 0) {
                const {walletActivationPageUrl: I, memberId: P, merchantCode: T, timestamp: E} = (f == null ? void 0 : f.data) || {};
                window.location.href = I + "&memberId=" + P + "&merchantCode=" + T + "&timestamp=" + E
            }
        }
          , X = m => {
            console.log("进来数据", m),
            R(m, v.pageType),
            w.value = !1
        }
        ;
        return (m, f) => {
            const I = B("svg-icon")
              , P = B("van-icon");
            return s(),
            n(j, null, [m.pageType !== "wallet/recharge" ? (s(),
            n("div", Sa, [t("div", Pa, [t("img", {
                src: e(se)("wallet/withdrawType", "21")
            }, null, 8, Oa), k(" " + a(m.$t("arbTip3")), 1)]), o(`<div class="right" @click="goActive(pageType)">{{$t('arbActive')}}</div>`), t("div", {
                class: "right",
                onClick: L
            }, a(m.$t("arbActive")), 1)])) : o("v-if", !0), t("div", Na, [t("div", Da, [_(I, {
                name: "arpay2"
            }), k(" " + a(m.$t("arbTip4")), 1)]), t("p", null, a(m.$t("arbTip5")), 1), t("p", Ba, a(m.$t("arbTip6")), 1), t("p", {
                class: "t2",
                onClick: f[0] || (f[0] = T => e(g)())
            }, [k(a(m.$t("arbTip7")), 1), _(P, {
                name: "arrow"
            })]), t("p", Ua, a(m.$t("arbTip8")), 1), t("p", {
                innerHTML: m.$t("abbTip9", [$.value])
            }, null, 8, Va), t("p", {
                innerHTML: m.$t("arbTip10", [$.value])
            }, null, 8, La), t("p", null, a(m.$t("arbTip11")), 1), t("p", null, a(m.$t("arbTip12")), 1), o(`<div class="toActive" @click="goActive(pageType)">{{$t('arActive')}}</div>`), t("div", {
                class: "toActive",
                onClick: L
            }, a(m.$t("arActive")), 1)]), o("激活绑定验证"), _(yt, {
                isVisible: w.value,
                onOnConfirm: X,
                onOnCancel: f[1] || (f[1] = T => w.value = !1)
            }, null, 8, ["isVisible"])], 64)
        }
    }
});
const Ea = re(Ma, [["__scopeId", "data-v-e7d19060"], ["__file", "/usr/local/jenkins-prod/workspace/AR048-Pages-india-91club/src/components/Wallet/Withdraw/Ar/noActivate.vue"]])
  , $e = S => (Me("data-v-9e03166f"),
S = S(),
Ee(),
S)
  , Wa = {
    class: "Recharge__content"
}
  , qa = {
    key: 0,
    class: "Recharge__content-quickInfo boxStyle"
}
  , ja = {
    class: "Recharge__content-quickInfo__title"
}
  , Fa = {
    class: "title"
}
  , Ga = ["onClick"]
  , Ha = {
    key: 0,
    class: "other"
}
  , Ka = {
    key: 0,
    class: "bouns"
}
  , za = {
    key: 0
}
  , Xa = {
    key: 1,
    class: "usdt_icon"
}
  , Qa = ["src"]
  , Ja = {
    key: 0,
    class: "bouns"
}
  , Za = {
    key: 0
}
  , Ya = {
    key: 1,
    class: "other_bank"
}
  , xa = {
    class: "select_bank_tit"
}
  , es = {
    key: 2,
    class: "transfer boxStyle"
}
  , ts = {
    class: "title"
}
  , as = {
    class: "transfer_list"
}
  , ss = ["src"]
  , ns = ["src"]
  , os = {
    key: 3,
    class: "bank_list"
}
  , rs = ["onClick"]
  , is = ["data-img"]
  , ls = {
    key: 5,
    class: "Recharge__content-paymoney boxStyle"
}
  , cs = {
    class: "Recharge__content-paymoney__title"
}
  , ds = ["src"]
  , us = {
    key: 2
}
  , ps = {
    key: 3
}
  , vs = {
    class: "Recharge__content-paymoney__money-list"
}
  , _s = ["onClick"]
  , hs = ["src"]
  , gs = {
    key: 1
}
  , ms = {
    key: 0,
    class: "ar_gift"
}
  , fs = ["src"]
  , ys = {
    class: "place-div"
}
  , $s = {
    key: 2,
    class: "unit"
}
  , ks = ["src"]
  , ws = {
    key: 2,
    class: "recharge_tip"
}
  , bs = {
    class: "Recharge__content-waitPay boxStyle"
}
  , Rs = ["src"]
  , Cs = {
    class: "wait_text"
}
  , As = $e( () => t("span", null, "3", -1))
  , Ts = $e( () => t("span", null, "0", -1))
  , Is = $e( () => t("span", null, ":", -1))
  , Ss = $e( () => t("span", null, "0", -1))
  , Ps = $e( () => t("span", null, "0", -1))
  , Os = [As, Ts, Is, Ss, Ps]
  , Ns = {
    key: 6,
    class: "Recharge__content-fixed"
}
  , Ds = {
    class: "Recharge__content-fixed-box"
}
  , Bs = {
    class: "showAmountError"
}
  , Us = {
    class: "title1"
}
  , Vs = {
    class: "title2"
}
  , Ls = {
    class: "title2 red"
}
  , Ms = {
    class: "button"
}
  , Es = {
    class: "arupiAmount"
}
  , Ws = {
    class: "title1"
}
  , qs = {
    class: "title2"
}
  , js = ["onClick"]
  , Fs = {
    class: "button column"
}
  , Gs = {
    class: "goBuy"
}
  , Hs = {
    class: "clance"
}
  , Ks = {
    class: "arupiAmount"
}
  , zs = {
    class: "title1"
}
  , Xs = {
    class: "title2"
}
  , Qs = {
    class: "button"
}
  , Js = {
    class: "arupiAmount"
}
  , Zs = {
    class: "title1 arupi-header"
}
  , Ys = {
    key: 0,
    class: "title2"
}
  , xs = {
    key: 1,
    class: "title2"
}
  , en = {
    key: 2,
    class: "title2"
}
  , tn = {
    class: "title1"
}
  , an = {
    class: "button column"
}
  , sn = {
    class: "text"
}
  , nn = {
    class: "reason pr16 pb16 pl16 pt16"
}
  , on = {
    class: "title mb16 x-row x-row-middle-center"
}
  , rn = {
    class: "pl25 mt10"
}
  , ln = ["placeholder"]
  , cn = {
    class: "arupiAmount"
}
  , dn = {
    class: "title1"
}
  , un = {
    class: "title2"
}
  , pn = {
    class: "button"
}
  , vn = oe({
    __name: "RechargeContainer",
    setup(S) {
        const v = G()
          , {store: i, currentPayId: h, isLocakBank: R, isArpay: g, isNumberPay: $, isHaveOrder: w, currentPayTypeId: L, placeholder: X, showArupiAmount: m, arupiAmountList: f, arupiAmount: I, cancelOrder: P, amountType: T, onCancelRechargeOrder: E, handleSelectPayType: te, goArapiPayToOrderDetail: Z, numberKeyObj: F, handleQuickSelect: O, handleInput: y, getC2CunitAmount: W, handleClearInput: H, formatNum: U, setCountdownRef: K, getElwallett: C, isSplitLocalEWallet: z, handleSelectBank: ie, IsShowRechargeBankList: c, showOtherSelect: b, confirmOtherSelectBank: p, isOtherRecharge: A, currentOtherThirdBankList: le, getTransferBankList: pe, transfer: r, handleRecharge: N, onJumpArUpi: ke, goToOrderAppeal: kt, gotoBanklist: wt, showAmountError: we, isRsnpay: Se, isArUpiPay: bt, reasonList: Rt, from: ae, getCancellationReasonList: Ct} = Ae()
          , {t: At} = Re()
          , {arWallet: Tt, isArWalletActive: je, goWallet: Fe} = Te()
          , ve = We()
          , _e = ne( () => Ie().getDollarSign)
          , It = ne( () => g.value ? "arActive" : "active")
          , be = G(!1)
          , St = async () => {
            try {
                await Ct()
            } catch {} finally {
                i.reasonShow = !0
            }
        }
          , Pt = u => {
            u.target.value && (ae.checked = -1)
        }
          , Ot = u => {
            u > -1 && (ae.text = "")
        }
          , Nt = () => {
            var d, q;
            if (!(((d = i.goingOrder) == null ? void 0 : d.paymentPageExpire) == 0 && ((q = i.goingOrder) == null ? void 0 : q.utrSubmitSuccess) == 0)) {
                Ge();
                return
            }
            be.value = !0,
            i.reasonShow = !1
        }
          , Ge = async () => {
            var q, he;
            const {checked: u, text: d} = ae;
            if (u === -1 && !d)
                return Ce(At("addCancelDes"));
            i.reasonShow = !1,
            i.goingOrder && await E(((q = i.goingOrder) == null ? void 0 : q.paymentPageExpire) == 0 && ((he = i.goingOrder) == null ? void 0 : he.utrSubmitSuccess) == 0)
        }
        ;
        Le( () => i.goingOrder, () => {
            i.goingOrder || (be.value = !1)
        }
        ),
        ye( () => {
            K(v.value)
        }
        );
        const Dt = () => {
            i.amount = 1e3,
            i.currentQuickIndex = -1
        }
          , Bt = ne( () => g.value || Se.value ? !!(je.value || i.rsnInfo.walletActivationStatus === 1) : !w.value)
          , Ut = async () => {
            var d, q;
            let u = h.value === 18 ? C() : i.currentPayType.payTypeID;
            if (h.value === 21) {
                if ((d = i.isArPayOrder) != null && d.includes("&GroupID=")) {
                    const ge = new URL((q = i.isArPayOrder) == null ? void 0 : q.replaceAll("/#", "")).searchParams.get("GroupID");
                    if ((Number(ge) & 512) === 512) {
                        await Fe();
                        return
                    }
                }
                window.location.href = i.isArPayOrder;
                return
            }
            if (h.value === 26) {
                ke(i.isArUpiPayOrder || "");
                return
            }
            if (h.value === 12)
                return ve.push({
                    name: "OtherPay",
                    query: {
                        type: "upi"
                    }
                });
            if (h.value === 19)
                return ve.push({
                    name: "RechargeUsdt",
                    query: {
                        amount: i.numberPayAmount
                    }
                });
            ve.push({
                name: "RechargeDetail",
                query: {
                    currentPayId: h.value,
                    payTypeId: u,
                    amount: i.amount
                }
            })
        }
          , Vt = () => {
            Fe("wallet/recharge")
        }
        ;
        return (u, d) => {
            var ze, Xe, Qe;
            const q = B("svg-icon")
              , he = B("van-icon")
              , ge = B("van-field")
              , He = B("van-picker")
              , Ke = B("van-popup")
              , me = B("van-dialog")
              , Lt = B("van-radio")
              , Mt = B("van-radio-group")
              , Et = Ve("lazy")
              , Pe = Ve("throttle-click");
            return s(),
            n(j, null, [t("div", Wa, [o("  选择通道  "), !e(R) && !e(g) && !e(Se) && !e(w) && e(h) !== 10 ? (s(),
            n("div", qa, [t("div", ja, [t("div", Fa, [_(q, {
                name: "quickpay2"
            }), t("p", null, a(u.$t("RCTXT1")), 1)])]), t("div", {
                class: V(["rechargeTypes_list", {
                    numberPay: e($)
                }])
            }, [(s(!0),
            n(j, null, x(e(i).rechargeTypes, (l, M) => (s(),
            n("div", {
                class: V(["Recharge__content-quickInfo__item", {
                    item_active: e(L) === l.payTypeID
                }]),
                key: l.payTypeID,
                onClick: fe => e(te)(M)
            }, [e(h) !== 11 ? (s(),
            n("div", Ha, [t("div", null, a(l.payName), 1), t("div", null, a(u.$t("RCTXT2")) + a(l.miniPrice) + " - " + a(e(U)(l.maxPrice)), 1), l.rechargeRifts > 0 ? (s(),
            n("div", Ka, [k(a(e(de)(l.rechargeRifts * 100)) + "% ", 1), l.delayedRewardDays > 0 ? (s(),
            n("span", za, a(l.delayedRewardDays) + " days", 1)) : o("v-if", !0), k(" bonus")])) : o("v-if", !0)])) : (s(),
            n("div", Xa, [t("img", {
                src: e(se)("wallet", "usdt"),
                alt: ""
            }, null, 8, Qa), t("div", null, [t("div", null, a(l.payName), 1), t("div", null, a(u.$t("RCTXT2")) + a(l.miniPrice) + " - " + a(e(U)(l.maxPrice)), 1), l.rechargeRifts > 0 ? (s(),
            n("div", Ja, [k(a(e(de)(l.rechargeRifts * 100)) + "% ", 1), l.delayedRewardDays > 0 ? (s(),
            n("span", Za, a(l.delayedRewardDays) + " days", 1)) : o("v-if", !0), k(" bonus")])) : o("v-if", !0)])]))], 10, Ga))), 128))], 2)])) : o("v-if", !0), e(A) && e(i).thirdPayBankList.length > 0 && e(le).length > 0 ? (s(),
            n("div", Ya, [t("div", xa, [_(q, {
                name: "bank"
            }), k(a(u.$t("selectBank")), 1)]), t("div", {
                class: "bank_name",
                onClick: d[0] || (d[0] = l => b.value = !0)
            }, [k(a((ze = e(i).selectOtherBank) == null ? void 0 : ze.bankName) + " ", 1), _(he, {
                name: "arrow",
                class: "right_arrow"
            })])])) : o("v-if", !0), o(" 孟加拉的转账类型选择 "), _e.value === "৳" && !e(w) && e(h) === 9 ? (s(),
            n("div", es, [t("div", ts, [_(q, {
                name: "transf_amount"
            }), k(" " + a(u.$t("transferType")), 1)]), t("div", as, [t("div", {
                class: V(["item", {
                    transfer_active: e(r) === 1
                }]),
                onClick: d[1] || (d[1] = l => r.value = 1)
            }, [t("img", {
                src: e(ue)("wallet/recharge", "banktobank"),
                alt: ""
            }, null, 8, ss), k(" " + a(u.$t("banktobank")), 1)], 2), t("div", {
                class: V(["item", {
                    transfer_active: e(r) === 2
                }]),
                onClick: d[2] || (d[2] = l => r.value = 2)
            }, [t("img", {
                src: e(ue)("wallet/recharge", "wallettobank"),
                alt: ""
            }, null, 8, ns), k(" " + a(u.$t("wallettobank")), 1)], 2)])])) : o("v-if", !0), o(" 银行列表 "), e(R) && e(z) && e(c) && !e(w) ? (s(),
            n("div", os, [(s(!0),
            n(j, null, x(_e.value === "৳" ? e(pe) : e(i).bankList, (l, M) => (s(),
            n("div", {
                class: V(["bank_item", {
                    bank_item_active: e(i).currentBankIndex === M
                }]),
                onClick: fe => e(ie)(M)
            }, [Y(t("img", {
                alt: "",
                "data-img": e(se)("wallet", "slot_wallet")
            }, null, 8, is), [[Et, l.bankLogo]]), k(" " + a(l.bankName), 1)], 10, rs))), 256))])) : o("v-if", !0), !e(je) && e(g) ? (s(),
            J(Ea, {
                key: 4,
                "page-type": "wallet/recharge"
            })) : o("v-if", !0), o(` <div class="toActive" @click="goActive('wallet/recharge', 'RSN')" v-if="store.rsnInfo.walletActivationStatus === 0 && isRsnpay">
			{{$t('RNSActive')}}
		</div> `), o(" 充值金额选择 "), Bt.value ? (s(),
            n("div", ls, [t("div", cs, [e($) ? (s(),
            n("img", {
                key: 1,
                src: e(se)("wallet", e(F)[e(h)].icon),
                alt: ""
            }, null, 8, ds)) : (s(),
            J(q, {
                key: 0,
                name: "saveWallet"
            })), e($) ? (s(),
            n("p", ps, a(((Xe = e(F)[e(h)]) == null ? void 0 : Xe.selectText) || ""), 1)) : (s(),
            n("p", us, a(e(g) ? u.$t("arbRecharge") : e(Se) ? u.$t("rsnRecharge") : u.$t("rechageAmount")), 1))]), t("div", vs, [(s(!0),
            n(j, null, x(e(i).quickList, (l, M) => (s(),
            n("div", {
                class: V(["Recharge__content-paymoney__money-list__item", e(i).currentQuickIndex === M ? It.value : ""]),
                key: M,
                onClick: fe => e(O)(M)
            }, [t("div", {
                class: V(["amount", {
                    arAmount: e(g)
                }])
            }, [e($) ? (s(),
            n("img", {
                key: 0,
                src: e(se)("wallet", e(F)[e(h)].icon),
                alt: "",
                class: "usdt"
            }, null, 8, hs)) : o("v-if", !0), !e($) && !e(g) ? (s(),
            n("span", gs, a(_e.value), 1)) : o("v-if", !0), k(" " + a(e(g) ? "₹" + e(U)(Number(l.rechargeAmount)) : e(U)(Number(l.rechargeAmount))), 1)], 2), l.giftAmount > 0 ? (s(),
            n("div", ms, [k(a(u.$t("k3WarningTip4")) + " + " + a(_e.value) + " ", 1), t("span", null, a(e(U)(Number(l.giftAmount))), 1)])) : o("v-if", !0)], 10, _s))), 128))]), e($) ? (s(),
            n("div", {
                key: 0,
                class: V(["Recharge__content-paymoney__money-input", {
                    radius: e($)
                }])
            }, [t("div", {
                class: V(["place-div", e(F)[e(h)].icon])
            }, null, 2), _(ge, {
                modelValue: e(i).numberPayAmount,
                "onUpdate:modelValue": d[3] || (d[3] = l => e(i).numberPayAmount = l),
                modelModifiers: {
                    number: !0
                },
                type: "digit",
                autocomplete: "new-password",
                placeholder: e(F)[e(h)].placeholder,
                class: "amount-input",
                onInput: d[4] || (d[4] = l => e(y)(l))
            }, null, 8, ["modelValue", "placeholder"]), t("div", {
                class: "place-right",
                onClick: d[5] || (d[5] = l => e(H)())
            }, [t("img", {
                src: e(ue)("wallet/recharge", "clean"),
                alt: ""
            }, null, 8, fs)])], 2)) : o("v-if", !0), e(h) != 6 ? (s(),
            n("div", {
                key: 1,
                class: V(["Recharge__content-paymoney__money-input", {
                    radius: e($)
                }])
            }, [t("div", ys, a(_e.value), 1), e($) ? (s(),
            J(ge, {
                key: 0,
                disabled: e($),
                modelValue: e(i).numberExchangeRate,
                "onUpdate:modelValue": d[6] || (d[6] = l => e(i).numberExchangeRate = l),
                modelModifiers: {
                    number: !0
                },
                type: "digit",
                autocomplete: "new-password",
                placeholder: u.$t("enterAmount"),
                class: "amount-input",
                onInput: d[7] || (d[7] = l => e(y)(l))
            }, null, 8, ["disabled", "modelValue", "placeholder"])) : (s(),
            J(ge, {
                key: 1,
                modelValue: e(i).amount,
                "onUpdate:modelValue": d[8] || (d[8] = l => e(i).amount = l),
                modelModifiers: {
                    number: !0
                },
                type: "digit",
                autocomplete: "new-password",
                placeholder: e(X),
                class: "amount-input",
                onInput: d[9] || (d[9] = l => e(y)(l))
            }, null, 8, ["modelValue", "placeholder"])), e(h) === 20 ? (s(),
            n("div", $s, a(e(W)), 1)) : o("v-if", !0), !e($) && !e(g) ? (s(),
            n("div", {
                key: 3,
                class: "place-right",
                onClick: d[10] || (d[10] = l => e(H)())
            }, [t("img", {
                src: e(ue)("wallet/recharge", "clean"),
                alt: ""
            }, null, 8, ks)])) : o("v-if", !0), e(g) ? (s(),
            n("div", {
                key: 4,
                class: "ar_all",
                onClick: Dt
            }, a(u.$t("withdrawStatem1")), 1)) : o("v-if", !0)], 2)) : o("v-if", !0), e(i).validateAmount ? (s(),
            n("div", ws, a(e(i).validateAmount), 1)) : o("v-if", !0)])) : o("v-if", !0), Y(t("div", bs, [t("img", {
                src: e(se)("wallet", "tip"),
                alt: ""
            }, null, 8, Rs), t("div", Cs, a(u.$t("RCTXT3")), 1), !e(g) && !e(bt) ? (s(),
            n("div", {
                key: 0,
                class: "Recharge__content-waitPay__countdown",
                ref_key: "countdownRef",
                ref: v
            }, Os, 512)) : o("v-if", !0), t("div", {
                class: "go_pay",
                onClick: Ut
            }, a(u.$t("RCTXT4")), 1)], 512), [[qt, e(w)]]), !e(w) || e(A) ? (s(),
            n("div", Ns, [t("div", Ds, [t("div", null, [t("p", null, a(u.$t("rechargeMethod")) + ":", 1), t("h2", null, a((Qe = e(i).currentPayType) == null ? void 0 : Qe.payName), 1)]), Y((s(),
            n("div", {
                class: V(["Recharge__container-rechageBtn", e(i).rechargeSubmitBtnStatus ? "rechage_active" : ""])
            }, [k(a(u.$t("recharge")) + " " + a(e(ee)(e(i).amount)), 1)], 2)), [[Pe, {
                handler: e(N),
                wait: 2e3
            }]])])])) : o("v-if", !0), _(Ke, {
                show: e(b),
                "onUpdate:show": d[12] || (d[12] = l => ce(b) ? b.value = l : null),
                round: "",
                position: "bottom"
            }, {
                default: D( () => [_(He, {
                    "columns-field-names": {
                        text: "bankName",
                        value: "bankCode",
                        children: "children"
                    },
                    columns: e(le),
                    onCancel: d[11] || (d[11] = l => b.value = !1),
                    onConfirm: e(p)
                }, null, 8, ["columns", "onConfirm"])]),
                _: 1
            }, 8, ["show"])]), _(me, {
                show: e(we),
                "onUpdate:show": d[14] || (d[14] = l => ce(we) ? we.value = l : null),
                "show-confirm-button": !1,
                width: 327
            }, {
                default: D( () => {
                    var l;
                    return [t("div", Bs, [t("div", Us, a(u.$t("arb1")), 1), t("div", Vs, a(u.$t("arb2")), 1), t("div", Ls, a(u.$t("arb3", [((l = e(Tt)) == null ? void 0 : l.withdrawalRewardRatio) || 0])), 1), t("div", Ms, [t("div", {
                        class: "clance",
                        onClick: d[13] || (d[13] = M => we.value = !1)
                    }, a(u.$t("cancel")), 1), t("div", {
                        class: "goBuy",
                        onClick: Vt
                    }, a(u.$t("arb4")), 1)])])]
                }
                ),
                _: 1
            }, 8, ["show"]), _(me, {
                class: "arupiAmount-dialog",
                show: e(m),
                "onUpdate:show": d[15] || (d[15] = l => ce(m) ? m.value = l : null),
                closeOnClickOverlay: !1,
                "show-confirm-button": !1,
                width: 327
            }, {
                default: D( () => [t("div", Es, [t("div", Ws, a(u.$t("recommendedA")), 1), t("div", qs, a(u.$t("arupiPayTip")), 1), t("ul", null, [(s(!0),
                n(j, null, x(e(f), l => (s(),
                n("li", {
                    class: V({
                        active: e(I) === l
                    }),
                    key: l,
                    onClick: () => {
                        I.value = l
                    }
                }, a(e(ee)(l)), 11, js))), 128))]), t("div", Fs, [Y((s(),
                n("div", Gs, [k(a(u.$t("recharge")) + " " + a(u.$t("recommendedA")), 1)])), [[Pe, {
                    handler: () => {
                        e(i).amount = e(I),
                        T.value = 3,
                        m.value = !1,
                        e(N)()
                    }
                    ,
                    wait: 2e3
                }]]), Y((s(),
                n("div", Hs, [k(a(u.$t("c2cRechargeUpiSheet4")) + " " + a(e(ee)(e(i).amount)), 1)])), [[Pe, {
                    handler: () => {
                        T.value = 3,
                        m.value = !1,
                        e(N)()
                    }
                    ,
                    wait: 2e3
                }]])])])]),
                _: 1
            }, 8, ["show"]), _(me, {
                class: "arupiAmount-dialog",
                closeOnClickOverlay: !1,
                show: e(P),
                "onUpdate:show": d[18] || (d[18] = l => ce(P) ? P.value = l : null),
                "show-confirm-button": !1,
                width: 327
            }, {
                default: D( () => [t("div", Ks, [t("div", zs, a(u.$t("tips")), 1), t("div", Xs, a(u.$t("arupiOrderTip")), 1), t("div", Qs, [t("div", {
                    class: "goBuy",
                    onClick: d[16] || (d[16] = (...l) => e(E) && e(E)(...l))
                }, a(u.$t("confirmCancel")), 1), t("div", {
                    class: "clance",
                    onClick: d[17] || (d[17] = l => P.value = !1)
                }, a(u.$t("cancel")), 1)])])]),
                _: 1
            }, 8, ["show"]), _(me, {
                class: "arupiAmount-dialog",
                closeOnClickOverlay: !1,
                show: e(i).arupiGoingOrder,
                "onUpdate:show": d[23] || (d[23] = l => e(i).arupiGoingOrder = l),
                "show-confirm-button": !1,
                width: 327
            }, {
                default: D( () => {
                    var l, M, fe, Je, Ze, Ye, xe, et, tt, at, st, nt, ot, rt, it, lt, ct, dt, ut;
                    return [t("div", Js, [t("div", Zs, a(u.$t("orderNotCompleted")), 1), ((l = e(i).goingOrder) == null ? void 0 : l.paymentPageExpire) == 0 && ((M = e(i).goingOrder) == null ? void 0 : M.utrSubmitSuccess) == 0 ? (s(),
                    n("div", Ys, a(u.$t("arupiOrderTip2")), 1)) : ((fe = e(i).goingOrder) == null ? void 0 : fe.paymentPageExpire) == 1 && ((Je = e(i).goingOrder) == null ? void 0 : Je.utrSubmitSuccess) == 0 && ((Ze = e(i).goingOrder) == null ? void 0 : Ze.kycConfirmOrderStatus) == 4 ? (s(),
                    n("div", xs, a(u.$t("arupiOrderTip3")), 1)) : ((Ye = e(i).goingOrder) == null ? void 0 : Ye.paymentPageExpire) == 1 && ((xe = e(i).goingOrder) == null ? void 0 : xe.utrSubmitSuccess) == 0 && ((et = e(i).goingOrder) == null ? void 0 : et.kycConfirmOrderStatus) == 0 ? (s(),
                    n("div", en, a(u.$t("arupiOrderTip4")), 1)) : o("v-if", !0), t("div", tn, a(u.$t("rechageAmount")) + "：" + a(e(ee)((tt = e(i).goingOrder) == null ? void 0 : tt.orderAmount)), 1), t("div", an, [((at = e(i).goingOrder) == null ? void 0 : at.paymentPageExpire) == 0 && ((st = e(i).goingOrder) == null ? void 0 : st.utrSubmitSuccess) == 0 ? (s(),
                    n("div", {
                        key: 0,
                        class: "goBuy",
                        onClick: d[19] || (d[19] = Oe => e(Z)("arupi"))
                    }, [t("h3", null, a(u.$t("c2cRechargeUpiSheet4")), 1), t("p", null, a(u.$t("continuePurchase")), 1)])) : ((nt = e(i).goingOrder) == null ? void 0 : nt.paymentPageExpire) == 1 && ((ot = e(i).goingOrder) == null ? void 0 : ot.utrSubmitSuccess) == 0 && ((rt = e(i).goingOrder) == null ? void 0 : rt.kycConfirmOrderStatus) == 4 ? (s(),
                    n("div", {
                        key: 1,
                        class: "goBuy",
                        onClick: d[20] || (d[20] = Oe => e(kt)(e(i).goingOrder))
                    }, [t("h3", null, a(u.$t("Appeal")), 1)])) : ((it = e(i).goingOrder) == null ? void 0 : it.paymentPageExpire) == 1 && ((lt = e(i).goingOrder) == null ? void 0 : lt.utrSubmitSuccess) == 0 && ((ct = e(i).goingOrder) == null ? void 0 : ct.kycConfirmOrderStatus) == 0 ? (s(),
                    n("div", {
                        key: 2,
                        class: "goBuy",
                        onClick: d[21] || (d[21] = Oe => {
                            var pt;
                            return e(wt)({
                                rechargeNumber: (pt = e(i).goingOrder) == null ? void 0 : pt.merchantOrderNo
                            })
                        }
                        )
                    }, [t("h3", null, a(u.$t("arupiBank")), 1)])) : o("v-if", !0), ((dt = e(i).goingOrder) == null ? void 0 : dt.paymentPageExpire) == 0 && ((ut = e(i).goingOrder) == null ? void 0 : ut.utrSubmitSuccess) == 0 ? (s(),
                    n("div", {
                        key: 3,
                        class: "clance",
                        onClick: d[22] || (d[22] = Oe => e(ve).push({
                            name: "arupi",
                            query: {
                                type: 4
                            }
                        }))
                    }, [t("h3", null, a(u.$t("subutr")), 1), t("p", null, a(u.$t("transferredOrder")), 1)])) : o("v-if", !0)]), t("p", sn, [k(a(u.$t("utrpay")) + " ", 1), t("span", {
                        onClick: St
                    }, a(u.$t("concelOrder")), 1)])])]
                }
                ),
                _: 1
            }, 8, ["show"]), _(Ke, {
                position: "bottom",
                show: e(i).reasonShow,
                "onUpdate:show": d[26] || (d[26] = l => e(i).reasonShow = l),
                "z-index": 3e3
            }, {
                default: D( () => [t("div", nn, [t("div", on, a(u.$t("cancelOrder")), 1), _(Mt, {
                    "icon-size": "16px",
                    modelValue: e(ae).checked,
                    "onUpdate:modelValue": d[24] || (d[24] = l => e(ae).checked = l),
                    "checked-color": "#EE4D4D",
                    onChange: Ot
                }, {
                    default: D( () => [(s(!0),
                    n(j, null, x(e(Rt), (l, M) => (s(),
                    J(Lt, {
                        name: M,
                        class: "item",
                        key: M
                    }, {
                        default: D( () => [k(a(l.reason), 1)]),
                        _: 2
                    }, 1032, ["name"]))), 128)), o(` <van-radio name="2" class="item">UPI账号错误</van-radio>
						<van-radio name="3" class="item">银行系统维护</van-radio>
						<van-radio name="4" class="item">其他</van-radio> `)]),
                    _: 1
                }, 8, ["modelValue"]), t("div", rn, [Y(t("textarea", {
                    class: "row",
                    "onUpdate:modelValue": d[25] || (d[25] = l => e(ae).text = l),
                    rows: "4",
                    placeholder: u.$t("sellTip18"),
                    onInput: Pt
                }, null, 40, ln), [[ht, e(ae).text]])]), t("div", {
                    class: "btn x-row x-row-middle-center",
                    onClick: Nt
                }, a(u.$t("confirmCancel")), 1)])]),
                _: 1
            }, 8, ["show"]), _(me, {
                class: "arupiAmount-dialog",
                closeOnClickOverlay: !1,
                show: be.value,
                "onUpdate:show": d[28] || (d[28] = l => be.value = l),
                "show-confirm-button": !1,
                width: 327
            }, {
                default: D( () => [t("div", cn, [t("div", dn, a(u.$t("cancelDeal")), 1), t("div", un, a(u.$t("paymeConfirm")), 1), t("div", pn, [t("div", {
                    class: "clance",
                    onClick: d[27] || (d[27] = l => e(ve).push({
                        name: "arupi",
                        query: {
                            type: 4
                        }
                    }))
                }, a(u.$t("payme")), 1), t("div", {
                    class: "goBuy",
                    onClick: Ge
                }, a(u.$t("confirmCancel")), 1)])])]),
                _: 1
            }, 8, ["show"])], 64)
        }
    }
});
const _n = re(vn, [["__scopeId", "data-v-9e03166f"], ["__file", "/usr/local/jenkins-prod/workspace/AR048-Pages-india-91club/src/components/Wallet/Recharge/RechargeContainer.vue"]])
  , hn = {
    class: "balanceAssets"
}
  , gn = {
    class: "balanceAssets__header"
}
  , mn = {
    class: "balanceAssets__header__left"
}
  , fn = ["src"]
  , yn = {
    class: "balanceAssets__main"
}
  , $n = ["src"]
  , kn = oe({
    __name: "BalanceAssets",
    setup(S) {
        const v = mt()
          , i = Ie();
        async function h() {
            i.getIsSwitchSaasBalance ? v.GetARGameAndPlatWallets(!0) : v.resetData(!1, !1)
        }
        return ye( () => {
            i.getIsSwitchSaasBalance ? v.GetARGameAndPlatWallets(!1) : v.resetData(!0, !1)
        }
        ),
        (R, g) => {
            const $ = Ve("throttle-click");
            return s(),
            n("div", hn, [t("div", gn, [t("div", mn, [t("img", {
                src: e(se)("wallet", "balance")
            }, null, 8, fn), k(" " + a(R.$t("balance")), 1)])]), t("div", yn, [t("p", null, a(e(ee)(e(v).getAmount)), 1), Y(t("img", {
                src: e(ue)("wallet/recharge", "refresh"),
                alt: ""
            }, null, 8, $n), [[$, {
                handler: h,
                wait: 3e3
            }]])])])
        }
    }
});
const wn = re(kn, [["__scopeId", "data-v-98c90f53"], ["__file", "/usr/local/jenkins-prod/workspace/AR048-Pages-india-91club/src/components/Wallet/BalanceAssets.vue"]])
  , bn = oe({
    __name: "CountDownTimer",
    props: {
        startTime: {
            type: String,
            required: !0
        },
        endTime: {
            type: String,
            required: !0
        },
        className: {
            type: String,
            required: !1
        }
    },
    setup(S) {
        const v = S
          , i = G()
          , h = G("00:00");
        return ye( () => {
            let R = v.startTime
              , g = v.endTime
              , $ = new Date(R.replace(/-/g, "/")).getTime()
              , w = new Date(g.replace(/-/g, "/")).getTime()
              , L = $ - w;
            i.value = setInterval( () => {
                L -= 1e3,
                h.value = Kt(L, "mm:ss"),
                L < 0 && (clearInterval(i.value),
                h.value = "00:00",
                console.log("Countdown finished!"))
            }
            , 1e3)
        }
        ),
        qe( () => {
            clearInterval(i.value)
        }
        ),
        (R, g) => (s(),
        n("span", {
            class: V([R.className, "count_timer"])
        }, a(h.value), 3))
    }
});
const Rn = re(bn, [["__scopeId", "data-v-b3f8911c"], ["__file", "/usr/local/jenkins-prod/workspace/AR048-Pages-india-91club/src/components/Wallet/Recharge/CountDownTimer.vue"]])
  , Cn = S => (Me("data-v-9f5f4114"),
S = S(),
Ee(),
S)
  , An = {
    class: "record__main"
}
  , Tn = {
    class: "record__main-title"
}
  , In = {
    key: 1
}
  , Sn = ["onClick"]
  , Pn = {
    class: "record__main-info__title flex_between"
}
  , On = {
    class: "recharge_text"
}
  , Nn = {
    class: "flex_between"
}
  , Dn = ["src"]
  , Bn = {
    key: 0,
    class: "record__main-info__money item flex_between"
}
  , Un = {
    key: 1,
    class: "record__main-info__money item flex_between"
}
  , Vn = {
    key: 2,
    class: "record__main-info__type item flex_between"
}
  , Ln = {
    key: 3,
    class: "record__main-info__type item flex_between"
}
  , Mn = Cn( () => t("span", null, "UTR", -1))
  , En = {
    key: 4,
    class: "record__main-info__time item flex_between"
}
  , Wn = {
    key: 5,
    class: "record__main-info__time item flex_between"
}
  , qn = {
    key: 6,
    class: "record__main-info__orderNumber item flex_between"
}
  , jn = {
    style: {
        color: "red"
    }
}
  , Fn = {
    key: 7,
    class: "record__main-info__orderNumber item flex_between"
}
  , Gn = {
    key: 8,
    class: "record__main-info__orderNumber item flex_between"
}
  , Hn = {
    key: 9,
    class: "record__main-info__orderNumber item flex_between"
}
  , Kn = ["onClick"]
  , zn = ["onClick"]
  , Xn = ["onClick"]
  , Qn = ["onClick"]
  , Jn = ["onClick"]
  , Zn = {
    class: "rechargeh__header"
}
  , Yn = {
    class: "record__main-info"
}
  , xn = {
    class: "record__main-info__money item flex_between"
}
  , eo = {
    class: "record__main-info__money item flex_between"
}
  , to = {
    class: "price"
}
  , ao = {
    class: "record__main-info__money item flex_between"
}
  , so = {
    class: "record__main-info__money item flex_between"
}
  , no = {
    class: "record__main-info__orderNumber item flex_between"
}
  , oo = oe({
    __name: "RechargeRecord",
    setup(S, {expose: v}) {
        const i = ft()
          , {t: h} = Re()
          , {store: R, historyToDetail: g, getRecordList: $, RechargeRList: w, goToOrderAppeal: L, gotoBanklist: X} = Ae()
          , {handleOpen: m} = zt({
            type: 3
        })
          , f = G(!1)
          , I = G({})
          , P = G()
          , T = G(!1)
          , E = ne( () => w.value.length >= 5)
          , te = We()
          , {goToTictek: Z, isCenterServer: F} = Xt({
            ServerType: 2
        })
          , O = c => {
            if ((c.groupID & 2048) === 2048 && (c.groupID & 1024) === 1024)
                return jt({
                    title: h("tips"),
                    message: () => Ne("p", [Ne("span", h("submitUtrtip") + " "), Ne("span", {
                        style: {
                            color: "red"
                        },
                        onClick: m
                    }, h("pServer"))]),
                    theme: "round-button"
                });
            I.value = c,
            f.value = !0
        }
          , y = async () => {
            if (!P.value || `${P.value}`.length < 12)
                return Ce("UTR format is incorrect!");
            if (!T.value)
                try {
                    T.value = !0,
                    await Qt(Jt({
                        orderNumber: I.value.rechargeNumber,
                        utr: P.value
                    })) && (Ft(h("submitSuccess")),
                    f.value = !1,
                    P.value = "",
                    $())
                } catch {} finally {
                    T.value = !1
                }
        }
          , W = c => {
            if (![26e3, 26001].includes(c.payTypeId))
                return !1;
            if ((c.groupID & 1) === 1 || (c.groupID & 2) === 2 || (c.groupID & 4) === 4)
                return !0
        }
          , H = c => {
            if ((c.groupID & 1) === 1)
                return h("arupiBank");
            if ((c.groupID & 2) === 2)
                return h("arupiKycTip");
            if ((c.groupID & 4) === 4)
                return h("arupiKyc")
        }
          , U = c => [26e3, 26001].includes(c.payTypeId) ? (c.groupID & 2048) === 2048 || (c.groupID & 8192) === 8192 : !1
          , K = c => [26e3, 26001].includes(c.payTypeId) ? (c.groupID & 32) === 32 || (c.groupID & 64) === 64 || (c.groupID & 4096) === 4096 && (c.groupID & 16384) !== 16384 : !1
          , C = c => {
            let b = "";
            switch (c.state) {
            case 0:
                b = "recharge";
                break;
            case 1:
                b = "check";
                break;
            case 2:
                b = "timeout";
                break;
            case 3:
                b = "representation";
                break;
            case 4:
                b = "success";
                break;
            case 5:
                b = "fail";
                break;
            case 6:
                b = "cancel";
                break;
            default:
                b = "#FFB800";
                break
            }
            return b
        }
          , z = async c => {
            g(c.payID || c.category, c.type, c.price, c.state, c.id)
        }
          , ie = () => {
            i.emit("changeKeepAliveKey"),
            te.push({
                name: "RechargeHistory"
            })
        }
        ;
        return ye( () => {
            i.on("getRecordList", () => {
                $()
            }
            ),
            $()
        }
        ),
        qe( () => {
            i.off("getRecordList")
        }
        ),
        v({
            getRecordList: $
        }),
        (c, b) => {
            const p = B("svg-icon")
              , A = B("van-button")
              , le = B("van-field")
              , pe = B("van-popup");
            return s(),
            n("div", An, [t("div", Tn, [_(p, {
                name: "historyHead"
            }), t("span", null, a(e(R).currentPayId === 20 ? "C2C" + c.$t("rechargeRecords") : c.$t("rechargeRecords")), 1)]), e(w).length < 1 ? (s(),
            J(Yt, {
                key: 0,
                class: "mgt40"
            })) : o("v-if", !0), e(w).length > 0 ? (s(),
            n("div", In, [(s(!0),
            n(j, null, x(e(w), r => (s(),
            n("div", {
                class: "record__main-info",
                key: r.rechargeNumber + r.state,
                onClick: N => z(r)
            }, [t("div", Pn, [t("div", On, a(c.$t("recharge")), 1), t("div", Nn, [e(R).currentPayId !== 20 ? (s(),
            n("div", {
                key: 0,
                class: V({
                    danger: r.state === 0,
                    success: r.state === 1,
                    rechargeFail: r.state === 2,
                    cancel: r.state === 6
                })
            }, a(c.$t(e(vt)(e(_t).RechargeState, r.state))), 3)) : (s(),
            n("div", {
                key: 1,
                class: V(C(r))
            }, [k(a(e(vt)(e(_t).RechargeC2CState, r.state)) + " ", 1), r.state === 1 || r.state === 0 ? (s(),
            J(Rn, {
                "start-time": r.endTime,
                "end-time": r.serviceTime,
                "class-name": C(r),
                key: r.id
            }, null, 8, ["start-time", "end-time", "class-name"])) : o("v-if", !0)], 2)), r.state !== 2 ? (s(),
            n("img", {
                key: 2,
                src: e(ue)("wallet/recharge", "left_arrow"),
                alt: ""
            }, null, 8, Dn)) : o("v-if", !0)])]), e(R).currentPayId !== 20 ? (s(),
            n("div", Bn, [t("span", null, a(c.$t("amount")), 1), t("span", null, a(e(ee)(r == null ? void 0 : r.price)), 1)])) : (s(),
            n("div", Un, [t("span", null, a(c.$t("amount")), 1), t("span", null, a(e(ee)(r == null ? void 0 : r.orderAmount)), 1)])), e(R).currentPayId !== 20 ? (s(),
            n("div", Vn, [t("span", null, a(c.$t("type")), 1), t("span", null, a(r == null ? void 0 : r.payName), 1)])) : (s(),
            n("div", Ln, [Mn, t("div", null, [t("span", null, a(r.transactionNo || "-"), 1), _(p, {
                name: "copy",
                alt: "",
                onClick: Q(N => e(De)(r.transactionNo), ["stop"])
            }, null, 8, ["onClick"])])])), e(R).currentPayId !== 20 ? (s(),
            n("div", En, [t("span", null, a(c.$t("time")), 1), t("span", null, a(r.addTime), 1)])) : (s(),
            n("div", Wn, [t("span", null, a(c.$t("time")), 1), t("span", null, a(r.createTime), 1)])), [0, 2].includes(r.state) && [26e3, 26001].includes(r.payTypeId) && (r.groupID & 16384) === 16384 ? (s(),
            n("div", qn, [t("span", null, a(c.$t("remarksContent")), 1), t("div", null, [t("span", jn, a(c.$t("arupiRemark")), 1)])])) : o("v-if", !0), e(R).currentPayId !== 20 ? (s(),
            n("div", Fn, [t("span", null, a(c.$t("orderNo")), 1), t("div", null, [t("span", null, a(r == null ? void 0 : r.rechargeNumber), 1), _(p, {
                name: "copy",
                alt: "",
                onClick: Q(N => e(De)(r.rechargeNumber), ["stop"])
            }, null, 8, ["onClick"])])])) : (s(),
            n("div", Gn, [t("span", null, a(c.$t("orderNo")), 1), t("div", null, [t("span", null, a(r.orderNo), 1), _(p, {
                "name-": "copy",
                alt: "",
                onClick: Q(N => e(De)(r.orderNo), ["stop"])
            }, null, 8, ["onClick"])])])), [0, 2].includes(r.state) && [26e3, 26001].includes(r.payTypeId) && (r.groupID & 16384) === 16384 ? (s(),
            n("div", Hn, [t("span", null, a(c.$t("remarksContent")), 1), t("div", null, [t("span", null, a(c.$t("arupiRemark")), 1)])])) : o("v-if", !0), [0, 2].includes(r.state) ? (s(),
            n(j, {
                key: 10
            }, [U(r) ? (s(),
            n("div", {
                key: 0,
                class: "report",
                style: {
                    "margin-bottom": "10px"
                },
                onClick: Q(N => O(r), ["stop"])
            }, a(c.$t("submitUtr")), 9, Kn)) : o("v-if", !0), (r.groupID & 16384) === 16384 || [21].includes(r.payID) ? (s(),
            n("div", {
                key: 1,
                class: "report report-b",
                onClick: b[0] || (b[0] = Q( (...N) => e(m) && e(m)(...N), ["stop"]))
            }, a(c.$t("contactServicer")), 1)) : o("v-if", !0), W(r) ? (s(),
            n("div", {
                key: 2,
                class: "report report-b",
                onClick: Q(N => e(X)(r), ["stop"])
            }, a(H(r)), 9, zn)) : o("v-if", !0), K(r) ? (s(),
            n("div", {
                key: 3,
                class: "report",
                onClick: Q(N => e(L)(r), ["stop"])
            }, a([32, 544, 4096].includes(r.groupID) ? c.$t("appeal") : c.$t("compDetails")), 9, Xn)) : ![26e3, 26001].includes(r.payTypeId) && e(F) ? (s(),
            n("div", {
                key: 4,
                class: "report",
                onClick: Q(N => e(Z)(r, c.isC2C), ["stop"])
            }, a(c.$t("report")), 9, Qn)) : o("v-if", !0)], 64)) : o("v-if", !0)], 8, Sn))), 128)), E.value ? (s(),
            n("div", {
                key: 0,
                class: "record__main-more",
                onClick: Q(ie, ["stop"])
            }, a(c.$t("allRecords")), 9, Jn)) : o("v-if", !0)])) : o("v-if", !0), _(pe, {
                show: f.value,
                "onUpdate:show": b[3] || (b[3] = r => f.value = r),
                position: "bottom",
                style: {
                    height: "30%"
                }
            }, {
                default: D( () => {
                    var r;
                    return [t("div", Zn, [_(A, {
                        round: "",
                        size: "small",
                        onClick: b[1] || (b[1] = () => {
                            f.value = !1,
                            P.value = ""
                        }
                        )
                    }, {
                        default: D( () => [k(a(c.$t("cancel")), 1)]),
                        _: 1
                    }), t("span", null, a(c.$t("submitUtr")), 1), _(A, {
                        round: "",
                        size: "small",
                        loading: T.value,
                        "loading-text": c.$t("submit"),
                        type: "primary",
                        onClick: y
                    }, {
                        default: D( () => [k(a(c.$t("submit")), 1)]),
                        _: 1
                    }, 8, ["loading", "loading-text"])]), t("div", Yn, [t("div", xn, [t("span", null, a(c.$t("utr")), 1), _(le, {
                        modelValue: P.value,
                        "onUpdate:modelValue": b[2] || (b[2] = N => P.value = N),
                        placeholder: "Input 12 digits here",
                        clearable: !0,
                        maxlength: 12,
                        type: "digit",
                        autocomplete: "off"
                    }, null, 8, ["modelValue"])]), t("div", eo, [t("span", null, a(c.$t("amount")), 1), t("span", to, a(e(ee)(I.value.price)), 1)]), t("div", ao, [t("span", null, a(c.$t("type")), 1), t("span", null, a((r = I.value) == null ? void 0 : r.payName), 1)]), t("div", so, [t("span", null, a(c.$t("time")), 1), t("span", null, a(I.value.addTime), 1)]), t("div", no, [t("span", null, a(c.$t("orderNo")), 1), t("div", null, [t("span", null, a(I.value.rechargeNumber), 1)])])])]
                }
                ),
                _: 1
            }, 8, ["show"])])
        }
    }
});
const ro = re(oo, [["__scopeId", "data-v-9f5f4114"], ["__file", "/usr/local/jenkins-prod/workspace/AR048-Pages-india-91club/src/components/Wallet/Recharge/RechargeRecord.vue"]])
  , io = {
    class: "Recharge__box"
}
  , lo = {
    class: "Recharge__container"
}
  , co = {
    class: "cancen_model_cnt"
}
  , uo = {
    class: "promptHeader"
}
  , po = {
    key: 0,
    class: "promptTip"
}
  , vo = {
    class: "promptContent"
}
  , _o = {
    class: "input_item"
}
  , ho = ["maxlength", "onUpdate:modelValue", "placeholder", "onInput"]
  , go = {
    key: 0,
    class: "tip"
}
  , mo = {
    key: 1,
    class: "tip"
}
  , fo = {
    key: 2,
    class: "promptBox"
}
  , yo = {
    class: "footer_btn"
}
  , $o = {
    class: "forbidden_tip"
}
  , ko = {
    class: "forbidden1"
}
  , wo = {
    class: "forbidden2"
}
  , bo = {
    class: "forbidden3"
}
  , Ro = {
    class: "cancen_model_cnt"
}
  , Co = oe({
    __name: "index",
    setup(S) {
        const {store: v, C2CforbiddenShow: i, ErrorCount: h, RemainingLimitTime: R, currentPayId: g, validateBankForm: $, localBankRecharge: w, getRechargeTypeName: L, getAmountList: X, stratPollingQuick: m, otherRecharge: f, isFirstPixRecharge: I, isArpay: P, needPixInfo: T, isRsnpay: E, recordRef: te, isArUpiPay: Z} = Ae()
          , {pageView: F, pageLeve: O} = Zt()
          , {isArWalletActive: y} = Te()
          , W = We();
        mt();
        const H = ft()
          , U = G(!1)
          , K = ne( () => Ie().getDollarSign)
          , C = ne( () => P.value || E.value ? !y.value || v.rsnInfo.walletActivationStatus === 1 : !1)
          , z = () => {
            H.emit("changeKeepAliveKey"),
            W.push({
                name: "RechargeHistory"
            })
        }
        ;
        function ie() {
            var p;
            ((p = W.currentRoute.value.query) == null ? void 0 : p.type) === "Add" ? W.go(-2) : W.push({
                name: "main"
            })
        }
        const c = () => {
            I.value = !1,
            T.value && W.push({
                name: "Withdraw-AddPIX",
                query: {
                    fromV: "Recharge"
                }
            })
        }
          , b = () => {
            X(),
            U.value = !1,
            console.log("继续充值")
        }
        ;
        return Le( () => v.currentPayType, () => {
            Z.value ? (F("recharge", v.currentPayType.payTypeID),
            m()) : m(!0)
        }
        ),
        ye(async () => {
            L()
        }
        ),
        qe( () => {
            m(!0)
        }
        ),
        Gt( () => {
            m(!0),
            Z.value && O("recharge", v.currentPayType.payTypeID)
        }
        ),
        (p, A) => {
            const le = B("NavBar")
              , pe = B("van-dialog");
            return s(),
            n("div", io, [t("div", lo, [_(le, {
                class: "white",
                title: p.$t("recharge"),
                placeholder: !1,
                "left-arrow": "",
                onClickLeft: ie
            }, {
                right: D( () => [t("div", {
                    class: "title",
                    onClick: z
                }, a(p.$t("rechargeRecords")), 1)]),
                _: 1
            }, 8, ["title"]), o(" 余额组件 "), _(wn), o(" 支付方式选择菜单 "), _(Ia), o(" 支付方式组件 "), _(_n), o(` <div
				v-if="!isHaveOrder || isOtherRecharge"
				class="Recharge__container-rechageBtn"
				:class="store.rechargeSubmitBtnStatus ? 'rechage_active' : ''"
				v-throttle-click="{ handler: handleRecharge, wait: 2000 }"
			>
				{{ $t('recharge') }}
			</div> `), o(" 充值说明组件 "), e(g) && !C.value ? (s(),
            J(Ht, {
                key: 0,
                "show-type": e(g),
                isShowHead: !0,
                rechargeInfo: e(v).currentPayType
            }, null, 8, ["show-type", "rechargeInfo"])) : o("v-if", !0), e(g) && !C.value ? (s(),
            J(ro, {
                ref_key: "recordRef",
                ref: te,
                payID: e(g),
                key: e(g)
            }, null, 8, ["payID"])) : o("v-if", !0)]), o(" <RechargeUpiSheet /> "), _(Be, {
                show: U.value,
                "onUpdate:show": A[0] || (A[0] = r => U.value = r),
                onConfirm: b,
                "show-cancel-btn": !0,
                confirmText: "OK",
                title: p.$t("c2cLapseOfAmount")
            }, {
                content: D( () => [t("div", co, a(p.$t("c2cPCAAmount")), 1)]),
                _: 1
            }, 8, ["show", "title"]), _(pe, {
                show: e(v).rechargeDialogVisible,
                "onUpdate:show": A[4] || (A[4] = r => e(v).rechargeDialogVisible = r),
                "confirm-button-text": p.$t("confirm")
            }, {
                footer: D( () => []),
                default: D( () => [t("div", uo, a(p.$t("prompt")), 1), [14].includes(e(g)) ? (s(),
                n("div", po, [t("p", null, a(p.$t("payNameTip")), 1), t("p", null, a(p.$t("payPrivacy")), 1)])) : o("v-if", !0), t("div", vo, [(s(!0),
                n(j, null, x(e(v).bank_local, (r, N) => (s(),
                n("div", _o, [t("div", null, a(r.split(",")[0]), 1), Y(t("input", {
                    class: "input_bank",
                    maxlength: N === 0 ? 50 : 30,
                    "onUpdate:modelValue": ke => e(v).bankInfo[r.split(",")[1]] = ke,
                    placeholder: `${p.$t("requiredFaild")} ${r.split(",")[0]}`,
                    onInput: ke => e($)(e(v).bankInfo[r.split(",")[1]], N, r.split(",")[1])
                }, null, 40, ho), [[ht, e(v).bankInfo[r.split(",")[1]], void 0, {
                    trim: !0
                }]])]))), 256)), K.value === "৳" ? (s(),
                n("div", go, a(p.$t("rechargeBankVailte2")), 1)) : [9, 10].includes(e(g)) ? (s(),
                n("div", mo, a(e(g) === 9 || e(g) === 10 ? p.$t("rechargeBankVailte1") : p.$t("rechargeBankVailte")), 1)) : [14].includes(e(g)) ? (s(),
                n("div", fo, [t("h3", null, a(p.$t("payNameErrorHint")), 1), t("p", null, "1." + a(p.$t("payOrderFail")), 1), t("p", null, "2." + a(p.$t("payCallbackFail")), 1), t("p", null, "3." + a(p.$t("payManualDelay")), 1), t("p", null, "4." + a(p.$t("payRecheck")), 1)])) : o("v-if", !0), t("div", yo, [e(v).isRechargeInputDialog && ![19, 14].includes(e(g)) || [10, 18].includes(e(g)) ? (s(),
                n("div", {
                    key: 0,
                    onClick: A[1] || (A[1] = (...r) => e(w) && e(w)(...r))
                }, a(p.$t("confirm")), 1)) : [14].includes(e(g)) ? (s(),
                n("div", {
                    key: 1,
                    onClick: A[2] || (A[2] = (...r) => e(f) && e(f)(...r))
                }, a(p.$t("confirm")), 1)) : o("v-if", !0), t("div", {
                    onClick: A[3] || (A[3] = r => e(v).rechargeDialogVisible = !1)
                }, a(p.$t("cancel")), 1)])])]),
                _: 1
            }, 8, ["show", "confirm-button-text"]), _(Be, {
                show: e(i),
                "onUpdate:show": A[5] || (A[5] = r => ce(i) ? i.value = r : null),
                title: p.$t("C2Cforbidden", [e(R)]),
                "img-url": "forbhidden",
                showCancelBtn: !1,
                onConfirm: A[6] || (A[6] = r => i.value = !1),
                "cancel-text": p.$t("close"),
                "confirm-text": p.$t("sure")
            }, {
                content: D( () => [t("div", $o, a(p.$t("C2Cforbidden1", [e(R)])), 1), t("div", ko, a(p.$t("C2Cforbidden2", [e(h)])), 1), t("div", wo, a(p.$t("C2Cforbidden3", [e(R)])), 1), t("div", bo, a(p.$t("C2Cforbidden4")), 1)]),
                _: 1
            }, 8, ["show", "title", "cancel-text", "confirm-text"]), _(Be, {
                show: e(I),
                "onUpdate:show": A[7] || (A[7] = r => ce(I) ? I.value = r : null),
                onConfirm: A[8] || (A[8] = r => c()),
                "show-cancel-btn": !1,
                confirmText: p.$t("confirm"),
                cancelText: p.$t("cancel"),
                title: p.$t("safetyTips")
            }, {
                content: D( () => [t("div", Ro, a(p.$t("safetyTips1")), 1)]),
                _: 1
            }, 8, ["show", "confirmText", "cancelText", "title"])])
        }
    }
});
const Ao = re(Co, [["__scopeId", "data-v-36cc3380"], ["__file", "/usr/local/jenkins-prod/workspace/AR048-Pages-india-91club/src/views/wallet/Recharge/index.vue"]])
  , Do = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: Ao
}, Symbol.toStringTag, {
    value: "Module"
}));
export {Rn as C, Ea as N, Do as i};
