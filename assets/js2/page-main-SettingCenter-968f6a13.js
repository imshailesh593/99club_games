import {
    G as X,
    R as oe,
    r as u,
    C as me,
    H as j,
    aA as _e,
    I as v,
    ax as w,
    ay as N,
    Q as l,
    J as e,
    P as s,
    O as n,
    ap as ve,
    ao as T,
    av as K,
    aC as ge,
    aD as we,
    N as d,
    aF as Se,
    z as se,
    a7 as Ce,
    B as pe,
    au as ye,
    aB as fe,
    K as Pe,
    F as te,
    $ as Ne,
    ar as ae,
    u as A,
    A as be,
    p as Te
} from "./common.modules-5cfe2cf4.js";
import {
    a as Be,
    E as Ee,
    b as Ie,
    v as Z,
    c as ee,
    P as ue,
    d as Ve,
    V as Me
} from "./page-login-index.vue_vue_type_script_setup_true_lang.ts-f69c0404.js";
import {
    G as re,
    a4 as Ue,
    A as O,
    cf as Le,
    b as ie,
    cg as xe,
    L as he,
    _ as Y,
    a3 as ce,
    c0 as De,
    ch as Re,
    g as Q,
    J as Ae,
    c as le,
    bJ as Oe,
    ci as je,
    bK as Fe,
    bF as ne,
    cj as Ge,
    ck as ze,
    b$ as ke,
    cl as qe,
    cm as He,
    cn as We,
    co as Je,
    bE as Ke
} from "./page-activity-ActivityDetail-a58ec568.js";
import {
    D as Qe
} from "./page-main-GoogleVerify-da1d6e81.js";
import {
    D as Xe
} from "./page-activity-Championship-4e6c587b.js";
const de = y => (ge("data-v-5bd44e74"), y = y(), we(), y),
    Ye = {
        class: "userInfo__container-content"
    },
    Ze = {
        class: "userInfo__container-content-wrapper"
    },
    en = ["src"],
    nn = {
        class: "userInfo__container-content__name"
    },
    tn = {
        class: "userInfo__container-content-nickname"
    },
    on = ["src"],
    sn = {
        class: "userInfo__container-content-uid"
    },
    an = de(() => e("span", null, "UID", -1)),
    ln = de(() => e("span", null, "|", -1)),
    rn = {
        class: "userInfo__container-content-logintime"
    },
    cn = {
        class: "userInfo__container-content-logintime"
    },
    dn = de(() => e("span", null, " ", -1)),
    un = [dn],
    vn = {
        class: "userInfo__container-setting-center"
    },
    mn = {
        class: "userInfo__container-content__avatar"
    },
    _n = ["data-img"],
    pn = {
        class: "userInfo__container-setting-center-content"
    },
    fn = de(() => e("h5", null, "UID", -1)),
    hn = {
        class: "info-dialog-content-title"
    },
    gn = ["placeholder"],
    wn = X({
        __name: "index",
        props: {
            userInfo: {
                type: null,
                required: !0
            }
        },
        setup(y) {
            const o = y,
                k = re(),
                c = k.getUserInfo,
                {
                    setLoading: D
                } = Ue(),
                t = oe(),
                a = u(!1),
                m = u(!1);

            function B(f) {
                a.value = f
            }

            function $(f) {
                t.push({
                    name: "Avatar"
                })
            }
            me(() => {
                t.currentRoute.value.name === "SettingCenter" ? m.value = !0 : (m.value = !1, p())
            });
            const _ = u(!1),
                g = u();
            async function p() {
                D(!0);
                const f = await O(Le());
                f && (g.value = f.data), D(!1)
            }
            async function E() {
                if (o.userInfo.nickName.trim() === "") return _.value = !0, a.value = !0, !1;
                if (o.userInfo.nickName.trim().length > 12) return _.value = !0, a.value = !0, !1;
                _.value = !1, a.value = !1, await O(xe({
                    nikeName: o.userInfo.nickName
                })) && k.setUserInfo({ ...o.userInfo
                })
            }

            function S() {
                t.go(-1)
            }
            const R = (f, r) => {
                    f = ie("images", "avatar1");
                    let C = document.querySelector(`.${r}`);
                    C.src = f
                },
                U = u(ie("main/Avatar", o.userInfo.userPhoto));
            return (f, r) => {
                var F, G;
                const C = j("NavBar"),
                    i = j("svg-icon"),
                    L = j("van-icon"),
                    I = _e("lazy");
                return d(), v("div", {
                    class: ve(["userInfo__container", {
                        "setting-page-container": m.value
                    }])
                }, [w(l(C, {
                    title: f.$t("settingCenter"),
                    class: "main",
                    placeholder: !1,
                    "left-arrow": "",
                    onClickLeft: S
                }, null, 8, ["title"]), [
                    [N, m.value]
                ]), w(e("div", Ye, [e("div", Ze, [e("div", {
                    class: "userInfo__container-content__avatar",
                    onClick: r[1] || (r[1] = b => $())
                }, [e("img", {
                    src: U.value,
                    class: "userAvatar",
                    onError: r[0] || (r[0] = b => R(U.value, "userAvatar"))
                }, null, 40, en)]), e("div", nn, [e("div", tn, [e("h3", null, s((F = n(c).nickName) == null ? void 0 : F.toUpperCase()), 1), e("div", {
                    class: ve(["n" + ((G = g.value) == null ? void 0 : G.vipLevel)])
                }, null, 2), w(e("img", {
                    class: "editPencil",
                    onClick: r[2] || (r[2] = b => B(!0)),
                    src: n(ie)("main", "editPencil")
                }, null, 8, on), [
                    [N, m.value]
                ])]), e("div", sn, [an, ln, e("span", null, s(n(c).userId), 1), l(i, {
                    onClick: r[3] || (r[3] = b => n(he)(n(c).userId.toString())),
                    name: "copy"
                })]), w(e("div", rn, [e("span", null, s(f.$t("lastLoginTime")) + " ", 1), w(e("span", null, s(n(c).userLoginDate), 513), [
                    [N, n(c).userLoginDate]
                ])], 512), [
                    [N, !m.value]
                ]), w(e("div", cn, un, 512), [
                    [N, m.value]
                ])])]), T(` <div v-show="!isSettingPage" class="userInfo__container-content-right">
				<img v-lazy="getIcons('main', 'myCoin')" alt="" />
				<span>我的金币</span>
			</div> `), w(e("div", {
                    class: "userInfo__container-content-right",
                    onClick: r[4] || (r[4] = b => $())
                }, [e("h5", null, s(f.$t("changeAvatar")), 1)], 512), [
                    [N, m.value]
                ])], 512), [
                    [N, !m.value]
                ]), w(e("div", vn, [e("div", {
                    class: "userInfo__container-setting-center-header",
                    onClick: r[6] || (r[6] = b => $())
                }, [e("div", mn, [w(e("img", {
                    "data-img": n(ie)("images", "avatar1")
                }, null, 8, _n), [
                    [I, U.value]
                ])]), e("div", {
                    class: "userInfo__container-setting-center-header-edit",
                    onClick: r[5] || (r[5] = b => $())
                }, [e("span", null, s(f.$t("changeAvatar")), 1), l(L, {
                    name: "arrow",
                    color: "#888"
                })])]), e("div", {
                    class: "userInfo__container-setting-center-content ar-1px-b",
                    onClick: r[9] || (r[9] = b => B(!0))
                }, [e("h5", null, s(f.$t("nickName")), 1), e("div", {
                    onClick: r[8] || (r[8] = b => B(!0))
                }, [e("span", null, s(n(c).nickName), 1), l(L, {
                    name: "arrow",
                    color: "#888",
                    onClick: r[7] || (r[7] = b => B(!0))
                })])]), e("div", pn, [fn, e("div", null, [e("span", null, s(n(c).userId), 1), l(i, {
                    name: "copy",
                    onClick: r[10] || (r[10] = b => n(he)(n(c).userId.toString()))
                })])])], 512), [
                    [N, m.value]
                ]), l(Qe, {
                    show: a.value,
                    "onUpdate:show": r[12] || (r[12] = b => a.value = b),
                    onConfirm: E,
                    title: f.$t("editNickname")
                }, {
                    content: K(() => [e("div", hn, [l(i, {
                        name: "dialogNickname"
                    }), e("span", null, s(f.$t("nickName")), 1)]), w(e("input", {
                        type: "text",
                        "auto-complete": "new-password",
                        autocomplete: "off",
                        name: "username",
                        "onUpdate:modelValue": r[11] || (r[11] = b => n(c).nickName = b),
                        placeholder: f.$t("tipEnterNickname")
                    }, null, 8, gn), [
                        [Se, n(c).nickName]
                    ]), w(e("h4", null, s(f.$t("tipDoNotEnterUnvalideNickname")), 513), [
                        [N, _.value]
                    ])]),
                    _: 1
                }, 8, ["show", "title"])], 2)
            }
        }
    });
const yn = Y(wn, [
        ["__scopeId", "data-v-5bd44e74"],
        ["__file", "/usr/local/jenkins-prod/workspace/AR048-Pages-india-91club/src/components/Main/UserInformation/index.vue"]
    ]),
    bn = y => (ge("data-v-6af1b9df"), y = y(), we(), y),
    kn = {
        class: "content setting-wrapper"
    },
    $n = {
        class: "setting-items-wrapper"
    },
    Sn = {
        class: "content-sub_title"
    },
    Cn = {
        class: "phone_container"
    },
    Pn = {
        class: "phone_container-item-left"
    },
    Nn = {
        class: "icon"
    },
    Tn = {
        class: "phone_container-item-right"
    },
    Bn = {
        class: "setting_container"
    },
    En = {
        key: 0,
        class: "phone_container-item-left"
    },
    In = ["src"],
    Vn = {
        key: 1,
        class: "phone_container-item-left"
    },
    Mn = ["src"],
    Un = {
        key: 2,
        class: "phone_container-item-right"
    },
    Ln = {
        key: 3,
        class: "phone_container-item-right"
    },
    xn = {
        key: 0,
        class: "phoneright"
    },
    Dn = {
        key: 1,
        class: "phoneright"
    },
    Rn = {
        key: 0,
        class: "phone_container-item-left"
    },
    An = {
        class: "icon email"
    },
    On = {
        key: 1,
        class: "phone_container-item-left"
    },
    jn = {
        class: "icon email"
    },
    Fn = {
        key: 2,
        class: "phone_container-item-right"
    },
    Gn = {
        key: 0,
        class: "emailright"
    },
    zn = {
        key: 1,
        class: "emailright"
    },
    qn = {
        key: 3,
        class: "phone_container-item-right"
    },
    Hn = {
        class: "icon"
    },
    Wn = {
        key: 0,
        class: "green"
    },
    Jn = {
        key: 1
    },
    Kn = {
        class: "setting_container_item"
    },
    Qn = {
        class: "icon"
    },
    Xn = bn(() => e("h5", null, "1.0.9", -1)),
    Yn = ["src"],
    Zn = {
        class: "setting-records-modal"
    },
    et = {
        class: "idlockTip"
    },
    nt = X({
        __name: "index",
        setup(y) {
            const {
                t: o
            } = se(), k = Ce(Re, 500), c = oe(), D = ce(), t = re();
            D.getUserInfo({
                signature: t.token
            });
            const a = t.getUserInfo,
                m = u(!1);

            function B() {
                localStorage.setItem("toPath", "ResetPassword"), c.push({
                    name: "SettingCenter-LoginPassword"
                })
            }
            const $ = pe(() => {
                    var C;
                    return (C = a == null ? void 0 : a.verifyMethods) == null ? void 0 : C.email
                }),
                _ = pe(() => {
                    var C;
                    return (C = a == null ? void 0 : a.verifyMethods) == null ? void 0 : C.mobile
                }),
                g = !!a.googleVerify,
                p = u(!1),
                E = () => {
                    a.googleVerify === 1 ? p.value = !0 : c.push({
                        name: "GoogleVerify"
                    })
                },
                S = C => {
                    R(C)
                },
                R = async C => {
                    var L, I;
                    const i = await O(De({
                        verifyCode: C,
                        verifyType: 3
                    }));
                    (L = i == null ? void 0 : i.data) != null && L.secret && c.push({
                        name: "GoogleVerify-BindGoogle",
                        query: {
                            secret: (I = i.data) == null ? void 0 : I.secret,
                            type: 1
                        }
                    })
                },
                U = u(!1),
                f = () => {
                    U.value = !0
                },
                r = async () => {
                    (await O(je())).code == 0 && (U.value = !1, te(o("delete") + o("success")))
                };
            return (C, i) => {
                var b, z, q, H, V, M, P, h, W, x;
                const L = j("svg-icon"),
                    I = j("van-icon"),
                    F = j("van-button"),
                    G = _e("haspermission");
                return d(), v(Pe, null, [l(yn, {
                    userInfo: n(a)
                }, null, 8, ["userInfo"]), e("div", kn, [e("div", $n, [e("div", Sn, [e("div", null, s(n(o)("securityInfo")), 1)]), e("div", Cn, [e("div", {
                    class: "phone_container-item",
                    onClick: B
                }, [e("div", Pn, [e("figure", Nn, [l(L, {
                    name: "editIcon"
                })]), e("span", null, s(n(o)("loginPSW")), 1)]), e("div", Tn, [e("span", null, s(n(o)("edit")), 1), l(I, {
                    name: "arrow",
                    color: "#888"
                })])])]), e("div", Bn, [((b = n(a)) == null ? void 0 : b.regType) == 2 ? (d(), v("div", {
                    key: 0,
                    class: "phone_container-item setting_container_item ar-1px-b",
                    onClick: i[0] || (i[0] = J => n(c).push({
                        name: "SettingCenter-UpdatePhone"
                    }))
                }, [_.value == "" ? (d(), v("div", En, [e("img", {
                    src: n(Q)("main", "editPhoneIcon")
                }, null, 8, In), e("span", null, s(n(o)("bindPhone")), 1)])) : T("v-if", !0), _.value != "" ? (d(), v("div", Vn, [e("img", {
                    src: n(Q)("main", "editPhoneIcon")
                }, null, 8, Mn), e("span", null, s(n(o)("changephone")), 1)])) : T("v-if", !0), _.value != "" ? (d(), v("div", Un, [e("span", null, s(n(Ae)((q = (z = n(a)) == null ? void 0 : z.verifyMethods) == null ? void 0 : q.mobile)), 1), l(I, {
                    name: "arrow",
                    color: "#888"
                })])) : T("v-if", !0), _.value == "" ? (d(), v("div", Ln, [((H = n(a)) == null ? void 0 : H.bindReward) > 0 ? (d(), v("div", xn, [e("div", null, s(n(o)("award")), 1), e("div", null, s(n(le)((V = n(a)) == null ? void 0 : V.bindReward)), 1)])) : (d(), v("div", Dn, [e("div", null, s(n(o)("tobind")), 1)])), l(I, {
                    name: "arrow",
                    color: "#888"
                })])) : T("v-if", !0)])) : T("v-if", !0), ((M = n(a)) == null ? void 0 : M.regType) == 1 ? (d(), v("div", {
                    key: 1,
                    class: "phone_container-item setting_container_item",
                    onClick: i[1] || (i[1] = J => n(c).push({
                        name: "SettingCenter-BindEmail"
                    }))
                }, [$.value == "" ? (d(), v("div", Rn, [e("figure", An, [l(L, {
                    name: "messageIcon"
                })]), e("span", null, s(n(o)("bindEmail")), 1)])) : T("v-if", !0), $.value != "" ? (d(), v("div", On, [e("figure", jn, [l(L, {
                    name: "email"
                })]), e("span", null, s(n(o)("email")), 1)])) : T("v-if", !0), $.value == "" ? (d(), v("div", Fn, [((P = n(a)) == null ? void 0 : P.bindReward) > 0 ? (d(), v("div", Gn, [e("div", null, s(n(o)("award")), 1), e("div", null, s(n(le)((h = n(a)) == null ? void 0 : h.bindReward)), 1)])) : (d(), v("div", zn, [e("div", null, s(n(o)("tobind")), 1)])), l(I, {
                    name: "arrow",
                    color: "#888"
                })])) : T("v-if", !0), $.value != "" ? (d(), v("div", qn, [e("span", null, s(n(Oe)((x = (W = n(a)) == null ? void 0 : W.verifyMethods) == null ? void 0 : x.email)), 1), l(I, {
                    name: "arrow",
                    color: "#888"
                })])) : T("v-if", !0)])) : T("v-if", !0), w(e("div", {
                    class: "setting_container_item",
                    onClick: E
                }, [e("div", null, [e("figure", Hn, [l(L, {
                    name: "googleIcon"
                })]), e("span", null, s(n(o)("googleVerify")), 1)]), e("div", null, [n(g) ? (d(), v("span", Wn, s(n(o)("turnedOn")), 1)) : (d(), v("span", Jn, s(n(o)("unopened")), 1)), l(I, {
                    name: "arrow",
                    color: "#888"
                })])], 512), [
                    [N, n(a).isGoogle === "1"]
                ]), e("div", Kn, [e("div", null, [e("figure", Qn, [l(L, {
                    name: "versionUpdateIcon"
                })]), e("span", null, s(n(o)("updateNewVersion")), 1)]), e("div", null, [Xn, l(I, {
                    name: "arrow",
                    color: "var(--text_color_L2)"
                })])])]), m.value ? (d(), ye(F, {
                    key: 0,
                    class: "cg-default",
                    block: "",
                    round: "",
                    size: "large",
                    color: "var(--main_gradient-color2)",
                    onClick: n(k)
                }, {
                    icon: K(() => [e("img", {
                        src: n(Q)("main", "clear")
                    }, null, 8, Yn)]),
                    default: K(() => [fe(" " + s(n(o)("clearcache")), 1)]),
                    _: 1
                }, 8, ["onClick"])) : T("v-if", !0)])]), w((d(), v("div", {
                    class: "delAllRq",
                    onClick: f
                }, [fe(s(n(o)("delAllBtn")), 1)])), [
                    [G, 19]
                ]), T(" 验证弹窗 "), l(Be, {
                    showPopup: p.value,
                    onOnConfirm: S,
                    onOnBack: i[2] || (i[2] = J => p.value = !1)
                }, null, 8, ["showPopup"]), e("div", Zn, [l(Xe, {
                    show: U.value,
                    "onUpdate:show": i[4] || (i[4] = J => U.value = J),
                    "show-cancel-btn": !0,
                    title: n(o)("delAllTip1")
                }, {
                    content: K(() => [e("div", et, s(n(o)("delAllTip2")), 1)]),
                    footer: K(() => [e("div", {
                        class: "dialogBtn",
                        onClick: r
                    }, s(n(o)("confirmDelete")), 1), e("div", {
                        class: "dialogBtn",
                        onClick: i[3] || (i[3] = J => U.value = !1)
                    }, s(n(o)("cancel")), 1)]),
                    _: 1
                }, 8, ["show", "title"])])], 64)
            }
        }
    });
const tt = Y(nt, [
        ["__scopeId", "data-v-6af1b9df"],
        ["__file", "/usr/local/jenkins-prod/workspace/AR048-Pages-india-91club/src/views/main/SettingCenter/index.vue"]
    ]),
    Ot = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: tt
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    ot = {
        class: "dialog__container",
        role: "dialog",
        tabindex: "0"
    },
    st = {
        class: "dialog__container-img"
    },
    at = {
        alt: ""
    },
    it = {
        class: "dialog__container-title"
    },
    lt = {
        class: "dialog__container-content"
    },
    rt = {
        class: "dialog__container-footer"
    },
    ct = X({
        __name: "HomeDialog",
        props: {
            show: {
                type: Boolean,
                default: !1
            },
            title: {
                type: String,
                default: ""
            },
            confirmText: {
                type: String,
                default: "comfirm"
            },
            showCancelBtn: {
                type: Boolean,
                default: !0
            },
            cancelText: {
                type: String,
                default: "cancel"
            },
            clickOutSide: {
                type: Boolean,
                default: !1
            },
            picname: {
                type: String,
                default: () => Q("public", "superjackpotHome")
            }
        },
        emits: ["update:show", "confirm"],
        setup(y, {
            emit: o
        }) {
            const k = y,
                {
                    t: c
                } = se();
            Ne(() => k.show, a => {
                a ? window.addEventListener("touchmove", t, {
                    passive: !1
                }) : window.removeEventListener("touchmove", t)
            });

            function D(a) {
                k.clickOutSide && o("update:show", !1)
            }
            const t = a => {
                k.show && a.preventDefault()
            };
            return (a, m) => {
                const B = _e("lazy");
                return d(), v("div", {
                    class: ve(["dialog", {
                        active: y.show,
                        inactive: !y.show
                    }])
                }, [e("div", ot, [e("div", st, [ae(a.$slots, "header", {}, () => [w(e("img", at, null, 512), [
                    [B, y.picname]
                ])], !0)]), e("div", it, [ae(a.$slots, "title", {}, () => [e("h1", null, s(n(c)(y.title)), 1)], !0)]), e("div", lt, [ae(a.$slots, "content", {}, void 0, !0)]), e("div", rt, [ae(a.$slots, "footer", {}, () => [y.showCancelBtn ? (d(), v("button", {
                    key: 0,
                    onClick: m[0] || (m[0] = () => {
                        o("update:show", !1)
                    })
                }, s(a.$t(y.cancelText)), 1)) : T("v-if", !0), e("button", {
                    onClick: m[1] || (m[1] = () => {
                        o("confirm")
                    })
                }, s(a.$t(y.confirmText)), 1)], !0)])]), e("div", {
                    class: "dialog__outside",
                    onClick: D
                })], 2)
            }
        }
    });
const $e = Y(ct, [
        ["__scopeId", "data-v-c0caae78"],
        ["__file", "/usr/local/jenkins-prod/workspace/AR048-Pages-india-91club/src/components/common/HomeDialog.vue"]
    ]),
    dt = {
        class: "bind-container"
    },
    ut = {
        class: "email-container"
    },
    vt = {
        class: "updateP-container-tips"
    },
    mt = {
        class: "bind-button"
    },
    _t = {
        key: 0,
        class: "Laundry-Con"
    },
    pt = {
        class: "Laundry-Con_tip"
    },
    ft = {
        class: "reward"
    },
    ht = {
        class: "money"
    },
    gt = X({
        __name: "index",
        setup(y) {
            var F, G, b, z, q, H;
            const {
                t: o
            } = se(), k = oe(), c = ce(), t = re().getUserInfo, a = u("bindemail"), m = u(!0), B = u(!1), $ = u(!1), _ = u("");
            _.value = ((F = t == null ? void 0 : t.verifyMethods) == null ? void 0 : F.email) != "" ? "updateEmail" : "bindEmail";
            const g = u("");
            g.value = ((G = t == null ? void 0 : t.verifyMethods) == null ? void 0 : G.email) != "" ? o("safetyVerification") : o("bindEmail");
            const p = {
                    email: ""
                },
                E = u("");
            p.email = (b = t == null ? void 0 : t.verifyMethods) == null ? void 0 : b.email;
            const S = u(!1);
            S.value = ((z = t == null ? void 0 : t.verifyMethods) == null ? void 0 : z.email) == "";
            const R = u(!0);
            R.value = ((q = t == null ? void 0 : t.verifyMethods) == null ? void 0 : q.email) != "";
            const U = u(!1);
            U.value = ((H = t == null ? void 0 : t.verifyMethods) == null ? void 0 : H.email) == "";
            const f = () => {
                    k.go(-1)
                },
                r = V => {
                    p.email = V
                },
                C = async () => {
                    var M;
                    if (_.value == "bindEmail") {
                        if (!Z.email1.test(p.email)) return c.setCountEmailDown(0), A({
                            message: o(ee.email),
                            wordBreak: "break-word"
                        })
                    } else if (!Z.email1.test((M = t == null ? void 0 : t.verifyMethods) == null ? void 0 : M.email)) return c.setCountEmailDown(0), A({
                        message: o(ee.email),
                        wordBreak: "break-word"
                    });
                    await O(Fe({
                        email: p.email,
                        emailType: S.value ? ne.bindEmailMmobile : ne.resetEmailMmobile
                    })) ? te(o("sendSuccess")) : c.setCountEmailDown(0)
                },
                i = async () => {
                    if (!Z.email1.test(p.email)) return A({
                        message: o(ee.email),
                        wordBreak: "break-word"
                    });
                    if (!E.value.trim()) return A({
                        message: o("noVerifyCodeFound"),
                        wordBreak: "break-word"
                    });
                    await O(Ge({
                        email: p.email,
                        code: E.value,
                        type: ne.resetEmailMmobile
                    })) && (_.value = "bindEmail", g.value = o("bindEmail"), R.value = !1, B.value = !1, S.value = !0, m.value = !1, U.value = !0, E.value = "", p.email = "", c.setCountEmailDown(0)), B.value = !1
                },
                L = async () => {
                    var M;
                    if (!Z.email1.test(p.email)) return A({
                        message: o(ee.email),
                        wordBreak: "break-word"
                    });
                    if (!E.value.trim()) return A({
                        message: o("noVerifyCodeFound"),
                        wordBreak: "break-word"
                    });
                    await O(ze({
                        email: p.email,
                        emailvCode: E.value
                    })) && (((M = t == null ? void 0 : t.verifyMethods) == null ? void 0 : M.email) != "" ? (te(o("rpdsucceed")), k.push({
                        name: "main"
                    })) : $.value = !0)
                },
                I = () => {
                    k.push({
                        name: "main"
                    }), $.value = !1
                };
            return me(() => {
                c.setCountEmailDown(0)
            }), (V, M) => {
                const P = j("NavBar");
                return d(), v("div", dt, [l(P, {
                    title: g.value,
                    class: "white",
                    "left-arrow": "",
                    onClickLeft: f
                }, null, 8, ["title"]), e("div", ut, [w(e("div", null, [l(Ee, {
                    ref: "email",
                    type: a.value,
                    email: p.email,
                    onChangeN: r
                }, null, 8, ["type", "email"])], 512), [
                    [N, S.value]
                ]), l(Ie, {
                    value: E.value,
                    "onUpdate:value": M[0] || (M[0] = h => E.value = h),
                    isShowVerifyT: m.value,
                    typeP: _.value,
                    sendFunc: C,
                    email: p.email
                }, null, 8, ["value", "isShowVerifyT", "typeP", "email"]), w(e("div", vt, [e("span", null, s(V.$t("tipVerifyCodeRequired")), 1)], 512), [
                    [N, B.value]
                ]), e("div", mt, [w(e("button", {
                    onClick: i
                }, s(V.$t("nextStep")), 513), [
                    [N, R.value]
                ]), w(e("button", {
                    onClick: L
                }, s(V.$t("toBind")), 513), [
                    [N, U.value]
                ])])]), l($e, {
                    show: $.value,
                    "onUpdate:show": M[1] || (M[1] = h => $.value = h),
                    onConfirm: I,
                    "show-cancel-btn": !1,
                    confirmText: "confirm",
                    picname: n(Q)("public", "succeed"),
                    title: V.$t("bindsuccess")
                }, {
                    content: K(() => {
                        var h, W;
                        return [((h = n(t)) == null ? void 0 : h.bindReward) > 0 ? (d(), v("div", _t, [e("div", pt, [e("div", ft, s(V.$t("award")), 1), e("div", ht, s(n(le)((W = n(t)) == null ? void 0 : W.bindReward)), 1)])])) : T("v-if", !0)]
                    }),
                    _: 1
                }, 8, ["show", "picname", "title"])])
            }
        }
    });
const wt = Y(gt, [
        ["__scopeId", "data-v-eca8202a"],
        ["__file", "/usr/local/jenkins-prod/workspace/AR048-Pages-india-91club/src/views/main/SettingCenter/BindEmail/index.vue"]
    ]),
    jt = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: wt
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    yt = {
        class: "LoginP-container"
    },
    bt = {
        class: "LoginP-container-form"
    },
    kt = {
        class: "LoginP-container-tips"
    },
    $t = {
        class: "LoginP-container-button"
    },
    St = X({
        __name: "index",
        setup(y) {
            let o = be({
                oldPwd: "",
                newPwd: "",
                confirmNewPwd: ""
            });
            const k = ce();
            k.getRegisterState();
            const {
                t: c
            } = se(), D = u(!1), t = oe();
            async function a() {
                if (!Z.passReg3.test(o.newPwd)) return A({
                    message: c(ee.passReg2),
                    wordBreak: "break-word"
                });
                if (o.newPwd !== o.confirmNewPwd) {
                    D.value = !0;
                    return
                } else D.value = !1;
                await O(qe(o)) && (Te(c("rpdsucceed")), localStorage.clear(), t.push("/login"))
            }

            function m() {
                t.push({
                    name: "rpwd"
                })
            }
            const {
                isSmSForgetPasswordState: B,
                registerState: $
            } = ke();
            return $(), (_, g) => {
                const p = j("NavBar"),
                    E = j("van-icon");
                return d(), v("div", yt, [l(p, {
                    title: _.$t("titleEditPsw"),
                    class: "white",
                    "left-arrow": "",
                    onClickLeft: g[0] || (g[0] = S => n(t).go(-1))
                }, null, 8, ["title"]), e("div", bt, [l(ue, {
                    value: n(o).oldPwd,
                    "onUpdate:value": g[1] || (g[1] = S => n(o).oldPwd = S),
                    label: _.$t("oldPSW"),
                    maxlength: 32
                }, null, 8, ["value", "label"]), l(ue, {
                    value: n(o).newPwd,
                    "onUpdate:value": g[2] || (g[2] = S => n(o).newPwd = S),
                    label: _.$t("newPSW")
                }, null, 8, ["value", "label"]), l(ue, {
                    class: "mgb48",
                    value: n(o).confirmNewPwd,
                    "onUpdate:value": g[3] || (g[3] = S => n(o).confirmNewPwd = S),
                    label: _.$t("confirmPSW")
                }, null, 8, ["value", "label"]), w(e("div", kt, [e("span", null, s(_.$t("tipUnmatchPsw")), 1)], 512), [
                    [N, D.value]
                ]), T(`
				功能暂时不可用且跳转 重置密码页有bug
			`), n(k).isOpenForgetPasswordEmailState || n(k).isOpenForgetPasswordSMSState ? (d(), v("div", {
                    key: 0,
                    class: "LoginP-container-remember",
                    onClick: m
                }, [e("span", null, s(_.$t("forgotOldPSW")), 1), l(E, {
                    name: "arrow",
                    color: "var(--text_color_L2)"
                })])) : (d(), v("div", {
                    key: 1,
                    class: "LoginP-container-remember",
                    onClick: g[4] || (g[4] = S => n(t).push({
                        name: "CustomerService"
                    }))
                }, [e("span", null, s(_.$t("contactServicer")), 1), l(E, {
                    name: "arrow",
                    color: "var(--text_color_L2)"
                })])), e("div", $t, [e("button", {
                    onClick: a
                }, s(_.$t("saveChanges")), 1)])])])
            }
        }
    });
const Ct = Y(St, [
        ["__scopeId", "data-v-5beab1ae"],
        ["__file", "/usr/local/jenkins-prod/workspace/AR048-Pages-india-91club/src/views/main/SettingCenter/LoginPassword/index.vue"]
    ]),
    Ft = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: Ct
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    Pt = {
        class: "updateP-container"
    },
    Nt = {
        class: "updateP-container-tips"
    },
    Tt = {
        class: "updateP-container-button"
    },
    Bt = {
        key: 0,
        class: "Laundry-Con"
    },
    Et = {
        class: "Laundry-Con_tip"
    },
    It = {
        class: "reward"
    },
    Vt = {
        class: "money"
    },
    Mt = X({
        __name: "index",
        setup(y) {
            var z, q, H, V, M;
            const {
                t: o
            } = se(), k = oe(), c = ce(), t = re().getUserInfo, a = u(!1);
            a.value = ((z = t == null ? void 0 : t.verifyMethods) == null ? void 0 : z.mobile) == "";
            const m = u(!1),
                B = u(!1);
            B.value = ((q = t == null ? void 0 : t.verifyMethods) == null ? void 0 : q.mobile) != "";
            const $ = u(!1);
            $.value = ((H = t == null ? void 0 : t.verifyMethods) == null ? void 0 : H.mobile) == "";
            const _ = u(!0),
                g = u(!1),
                p = u(""),
                E = u(!1),
                S = u("");
            S.value = ((V = t == null ? void 0 : t.verifyMethods) == null ? void 0 : V.mobile) != "" ? o("safetyVerification") : o("bindPhone");
            const R = u("");
            R.value = ((M = t == null ? void 0 : t.verifyMethods) == null ? void 0 : M.mobile) != "" ? "updatePhone" : "bindPhone", u("succeed");
            const U = () => {
                    k.go(-1)
                },
                {
                    isShowSMS: f,
                    registerState: r
                } = ke();
            r();
            async function C() {
                var h;
                if (!p.value.trim()) return A({
                    message: o("noVerifyCodeFound"),
                    wordBreak: "break-word"
                });
                await O(He({
                    userName: ((h = t == null ? void 0 : t.verifyMethods) == null ? void 0 : h.mobile) || localStorage.getItem("numberType") + localStorage.getItem("number"),
                    smsvCode: p.value
                })) && (S.value = o("bindPhone"), R.value = "bindPhone", B.value = !1, g.value = !1, a.value = !0, _.value = !1, $.value = !0, p.value = "", i.PhoneNumber = "", c.setCountDown(0)), g.value = !1
            }
            const i = be({
                PhoneNumber: "",
                numberType: localStorage.getItem("numberType")
            });
            async function L() {
                var h;
                if (!p.value.trim()) return A({
                    message: o("noVerifyCodeFound"),
                    wordBreak: "break-word"
                });
                if (!We(i.numberType, i.PhoneNumber.trim().length)) return A({
                    message: o("wrongTel"),
                    wordBreak: "break-word"
                });
                await O(Je({
                    phone: i.numberType + i.PhoneNumber,
                    smsvCode: p.value
                })) && (((h = t == null ? void 0 : t.verifyMethods) == null ? void 0 : h.mobile) != "" ? (te(o("rpdsucceed")), k.push({
                    name: "main"
                })) : m.value = !0)
            }
            const I = P => {
                    i.numberType = P
                },
                F = P => {
                    i.PhoneNumber = P
                },
                G = async () => {
                    var x;
                    let P = a.value ? i.numberType.replace("+", "") + i.PhoneNumber : (x = t == null ? void 0 : t.verifyMethods) == null ? void 0 : x.mobile;
                    const h = P.length;
                    if (h < 10 || h > 14) return A({
                        message: o("wrongTel"),
                        wordBreak: "break-word"
                    });
                    if (await O(Ke({
                            phone: P,
                            codeType: a.value ? ne.bindEmailMmobile : ne.resetEmailMmobile
                        }))) te(o("sendSuccess"));
                    else return -1
                },
                b = () => {
                    k.push({
                        name: "main"
                    }), m.value = !1
                };
            return me(() => {
                c.setCountDown(0)
            }), (P, h) => {
                const W = j("NavBar");
                return d(), v("div", Pt, [l(W, {
                    title: S.value,
                    class: "white",
                    "left-arrow": "",
                    onClickLeft: U
                }, null, 8, ["title"]), w(e("div", null, [l(Ve, {
                    "show-validate": E.value,
                    "onUpdate:showValidate": h[0] || (h[0] = x => E.value = x),
                    typeP: R.value,
                    number: i.PhoneNumber,
                    "number-type": i.numberType,
                    onChangeT: I,
                    onChangeN: F
                }, null, 8, ["show-validate", "typeP", "number", "number-type"])], 512), [
                    [N, a.value]
                ]), n(f) ? (d(), ye(Me, {
                    key: 0,
                    value: p.value,
                    "onUpdate:value": h[1] || (h[1] = x => p.value = x),
                    typeP: R.value,
                    isShowVerifyT: _.value,
                    sendFunc: G,
                    number: i.PhoneNumber,
                    numberType: i.numberType
                }, null, 8, ["value", "typeP", "isShowVerifyT", "number", "numberType"])) : T("v-if", !0), w(e("div", Nt, [e("span", null, s(P.$t("tipVerifyCodeRequired")), 1)], 512), [
                    [N, g.value]
                ]), e("div", Tt, [w(e("button", {
                    onClick: C
                }, s(P.$t("nextStep")), 513), [
                    [N, B.value]
                ]), w(e("button", {
                    onClick: L
                }, s(P.$t("complete")), 513), [
                    [N, $.value]
                ])]), l($e, {
                    show: m.value,
                    "onUpdate:show": h[2] || (h[2] = x => m.value = x),
                    onConfirm: b,
                    "show-cancel-btn": !1,
                    confirmText: "confirm",
                    picname: n(Q)("public", "succeed"),
                    title: P.$t("bindsuccess")
                }, {
                    content: K(() => {
                        var x, J;
                        return [((x = n(t)) == null ? void 0 : x.bindReward) > 0 ? (d(), v("div", Bt, [e("div", Et, [e("div", It, s(P.$t("award")), 1), e("div", Vt, s(n(le)((J = n(t)) == null ? void 0 : J.bindReward)), 1)])])) : T("v-if", !0)]
                    }),
                    _: 1
                }, 8, ["show", "picname", "title"])])
            }
        }
    });
const Ut = Y(Mt, [
        ["__scopeId", "data-v-90d7db2e"],
        ["__file", "/usr/local/jenkins-prod/workspace/AR048-Pages-india-91club/src/views/main/SettingCenter/UpdatePhone/index.vue"]
    ]),
    Gt = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: Ut
    }, Symbol.toStringTag, {
        value: "Module"
    }));
export {
    yn as U, jt as a, Ft as b, Gt as c, Ot as i
};