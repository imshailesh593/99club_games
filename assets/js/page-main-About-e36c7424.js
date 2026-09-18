import {
    G as b,
    R as f,
    H as l,
    aA as k,
    I as g,
    J as t,
    Q as s,
    O as d,
    ax as $,
    P as v,
    N as x,
    z as A,
    r as p,
    C as w
} from "./common.modules-5cfe2cf4.js";
import {
    b as h,
    _ as y,
    A as m,
    bL as B,
    bM as C
} from "./page-activity-ActivityDetail-a58ec568.js";
const z = {
        class: "about-container"
    },
    I = {
        class: "about-container-header"
    },
    L = {
        class: "about-container-header-belly"
    },
    M = {
        alt: ""
    },
    N = {
        class: "about-container-content"
    },
    j = {
        class: "about-container-content-item-title"
    },
    T = {
        class: "about-container-content-item-title"
    },
    D = b({
        __name: "index",
        setup(P) {
            const a = f();

            function i(o) {
                a.push({
                    name: "About-AboutDetail",
                    state: {
                        paramValue: o
                    }
                })
            }
            return (o, e) => {
                const r = l("NavBar"),
                    n = l("svg-icon"),
                    c = l("van-icon"),
                    _ = k("lazy");
                return x(), g("div", z, [t("div", I, [s(r, {
                    title: `${o.$t("aboutTitle")}`,
                    class: "main",
                    "left-arrow": "",
                    onClickLeft: e[0] || (e[0] = u => d(a).go(-1))
                }, null, 8, ["title"]), t("div", L, [$(t("img", M, null, 512), [
                    [_, d(h)("main", "aboutBg")]
                ])])]), t("div", N, [t("div", {
                    class: "about-container-content-item ar-1px-b",
                    onClick: e[1] || (e[1] = u => i("Protocols"))
                }, [t("div", j, [s(n, {
                    name: "privacyIcon"
                }), t("span", null, v(o.$t("pravicyProtocal")), 1)]), s(c, {
                    name: "arrow",
                    size: "18px",
                    color: "var(--text_color_L2)"
                })]), t("div", {
                    class: "about-container-content-item ar-1px-b",
                    onClick: e[2] || (e[2] = u => i("Agreement"))
                }, [t("div", T, [s(n, {
                    name: "riskProtocal"
                }), t("span", null, v(o.$t("riskProtocal")), 1)]), s(c, {
                    name: "arrow",
                    size: "18px",
                    color: "var(--text_color_L2)"
                })])])])
            }
        }
    });
const O = y(D, [
        ["__scopeId", "data-v-6616fdfe"],
        ["__file", "/usr/local/jenkins-prod/workspace/AR048-Pages-india-91club/src/views/main/About/index.vue"]
    ]),
    J = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: O
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    R = {
        class: "about-container"
    },
    S = ["innerHTML"],
    G = b({
        __name: "index",
        setup(P) {
            const {
                t: a
            } = A(), i = p(a("pravicyProtocal")), o = f(), e = history.state.paramValue, r = p();
            return w(async () => {
                i.value = a(e === "Protocols" ? "pravicyProtocal" : "riskProtocal");
                const n = e === "Protocols" ? await m(B()) : await m(C());
                n && (r.value = e === "Protocols" ? n.data.protocols : n.data.agreement)
            }), (n, c) => {
                const _ = l("NavBar");
                return x(), g("div", R, [s(_, {
                    title: i.value,
                    "left-arrow": "",
                    onClickLeft: c[0] || (c[0] = u => d(o).go(-1))
                }, null, 8, ["title"]), t("div", {
                    class: "about-container-content",
                    innerHTML: r.value
                }, null, 8, S)])
            }
        }
    });
const H = y(G, [
        ["__scopeId", "data-v-19d4c048"],
        ["__file", "/usr/local/jenkins-prod/workspace/AR048-Pages-india-91club/src/views/main/About/AboutDetail/index.vue"]
    ]),
    Q = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: H
    }, Symbol.toStringTag, {
        value: "Module"
    }));
export {
    Q as a, J as i
};