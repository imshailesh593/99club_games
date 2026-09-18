import {
    G as p,
    C as u,
    H as m,
    aA as f,
    I as y,
    J as t,
    Q as o,
    O as e,
    ax as g,
    N as k,
    A as L
} from "./common.modules-5cfe2cf4.js";
import {
    a1 as x,
    _ as h
} from "./page-activity-ActivityDetail-a58ec568.js";
const $ = {
        class: "customer-container"
    },
    B = {
        class: "customer-container-header"
    },
    O = {
        class: "customer-container-header-belly"
    },
    I = {
        alt: ""
    },
    w = p({
        __name: "index",
        setup(C) {
            const {
                onItemClick: s,
                goBack: n,
                getIcons: i,
                getList: c,
                ContactList: r,
                List: a
            } = x({
                ServerType: 1
            });
            return u(() => {
                c()
            }), (l, d) => {
                const _ = m("NavBar"),
                    v = f("lazy");
                return k(), y("div", $, [t("div", B, [o(_, {
                    title: l.$t("poxyServer"),
                    class: "main",
                    "left-arrow": "",
                    onClickLeft: e(n)
                }, null, 8, ["title", "onClickLeft"]), t("div", O, [g(t("img", I, null, 512), [
                    [v, e(i)("promotion", "serverbg")]
                ])])]), o(e(a), {
                    list: e(r),
                    onOnClick: e(s)
                }, null, 8, ["list", "onOnClick"])])
            }
        }
    });
const N = h(w, [
        ["__scopeId", "data-v-63a4fda1"],
        ["__file", "/usr/local/jenkins-prod/workspace/AR048-Pages-india-91club/src/views/promotion/Server/index.vue"]
    ]),
    V = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: N
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    j = {
        class: "customer-container"
    },
    z = {
        class: "customer-container-header"
    },
    T = {
        class: "customer-container-header-belly"
    },
    A = {
        alt: ""
    },
    P = p({
        __name: "index",
        setup(C) {
            const {
                goBack: s,
                onClickUrl: n,
                CollectionList: i,
                getServiceList: c,
                getIcons: r,
                List: a
            } = x({
                ServerType: 1
            }), l = history.state.itemId, d = L({
                typeId: l
            });
            return u(async () => {
                c(d)
            }), (_, v) => {
                const b = m("NavBar"),
                    S = f("lazy");
                return k(), y("div", j, [t("div", z, [o(b, {
                    title: _.$t("poxyServer"),
                    class: "main",
                    "left-arrow": "",
                    onClickLeft: e(s)
                }, null, 8, ["title", "onClickLeft"]), t("div", T, [g(t("img", A, null, 512), [
                    [S, e(r)("promotion", "serverbg")]
                ])])]), o(e(a), {
                    list: e(i),
                    onOnClick: e(n)
                }, null, 8, ["list", "onOnClick"])])
            }
        }
    });
const M = h(P, [
        ["__scopeId", "data-v-49bd7182"],
        ["__file", "/usr/local/jenkins-prod/workspace/AR048-Pages-india-91club/src/views/promotion/Server/ServiceCollection/index.vue"]
    ]),
    E = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: M
    }, Symbol.toStringTag, {
        value: "Module"
    }));
export {
    E as a, V as i
};