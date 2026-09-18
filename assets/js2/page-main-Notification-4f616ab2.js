import {
    G as v,
    R as g,
    r as c,
    H as l,
    I as o,
    Q as i,
    O as _,
    av as x,
    N as a,
    K as k,
    M as y,
    J as s,
    P as r
} from "./common.modules-5cfe2cf4.js";
import {
    b3 as N,
    _ as L
} from "./page-activity-ActivityDetail-a58ec568.js";
import {
    L as B
} from "./page-activity-DailySignIn-543fff66.js";
import "./page-turntable-assets-d6267459.js";
import "./native/index-2ac88fb8.js";
import "./en-cfd26acf.js";
import "./page-activity-Bonus-3c16c86d.js";
const C = {
        class: "notification-container"
    },
    R = {
        class: "notification-container-content-title"
    },
    w = {
        class: "notification-container-content-desc"
    },
    M = v({
        __name: "index",
        setup(I) {
            const p = g(),
                n = c({
                    list: [],
                    pageNo: 0,
                    totalPage: 0,
                    totalCount: 0
                }),
                d = c();
            return (u, e) => {
                const f = l("NavBar"),
                    m = l("svg-icon");
                return a(), o("div", C, [i(f, {
                    title: u.$t("notification"),
                    "left-arrow": "",
                    onClickLeft: e[0] || (e[0] = t => _(p).go(-1))
                }, null, 8, ["title"]), i(B, {
                    class: "sysMessage__container-msgWrapper",
                    list: n.value.list,
                    "onUpdate:list": e[1] || (e[1] = t => n.value.list = t),
                    "page-query": {},
                    isAutoLoad: !0,
                    api: _(N),
                    distance: 250,
                    ref_key: "listRef",
                    ref: d
                }, {
                    content: x(() => [(a(!0), o(k, null, y(n.value.list, t => (a(), o("div", {
                        class: "notification-container-content",
                        key: t.title
                    }, [s("div", R, [i(m, {
                        name: "notificationIcon"
                    }), s("span", null, r(t.title), 1)]), s("div", w, r(t.siteMessage), 1), s("h5", null, r(t.addtime), 1)]))), 128))]),
                    _: 1
                }, 8, ["list", "api"])])
            }
        }
    });
const $ = L(M, [
    ["__scopeId", "data-v-00f99608"],
    ["__file", "/usr/local/jenkins-prod/workspace/AR048-Pages-india-91club/src/views/main/Notification/index.vue"]
]);
export {
    $ as
    default
};