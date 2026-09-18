import {
    G as L,
    z as B,
    r as g,
    R as N,
    C as P,
    H as b,
    I as p,
    Q as d,
    O as i,
    av as j,
    N as r,
    K as G,
    M as U,
    J as e,
    ao as C,
    P as l,
    a0 as T,
    au as h,
    aY as M,
    aE as R,
    n as A
} from "./common.modules-5cfe2cf4.js";
import {
    a4 as V,
    G as z,
    aW as $,
    aX as Q,
    B as q,
    aY as H,
    A as Y,
    aZ as x,
    _ as E,
    a3 as F
} from "./page-activity-ActivityDetail-a58ec568.js";
import {
    L as J
} from "./page-activity-DailySignIn-543fff66.js";
const K = {
        class: "sysMessage__container"
    },
    X = {
        class: "sysMessage__container-msgWrapper__item-title"
    },
    Z = {
        class: "sysMessage__container-msgWrapper__item-time"
    },
    ee = {
        class: "sysMessage__container-msgWrapper__item-content"
    },
    se = L({
        __name: "index",
        setup(O) {
            const {
                t: n
            } = B(), {
                setLoading: c
            } = V(), _ = g(), s = z(), v = N(), f = g(!1), o = g([]), D = $(), y = g({
                pageSize: 25
            });

            function S() {
                v.back()
            }
            async function I() {
                const u = $();
                await Q({
                    state: 1
                }).then(t => {
                    t && u.setReadState(!0)
                }).catch(t => {})
            }

            function W(u) {
                T({
                    title: n("warning"),
                    message: n("warningTxt1")
                }).then(async () => {
                    if (await Y(x({
                            messageID: u.messageID,
                            state: 2
                        }))) {
                        let k = o.value;
                        o.value = k.filter(m => m.messageID !== u.messageID)
                    }
                })
            }
            const w = s.getUserInfo;
            return P(async () => {
                c(!0), await I(), c(!1), _.value.resetRefresh(), w.unRead = 0, s.setUserInfo({ ...w
                }), D.setReadState(!0)
            }), (u, t) => {
                const k = b("NavBar"),
                    m = b("svg-icon");
                return r(), p("div", K, [d(k, {
                    title: i(n)("notifications"),
                    backgroundColor: "#f7f8ff",
                    "left-arrow": "",
                    onClickLeft: S
                }, null, 8, ["title"]), d(J, {
                    ref_key: "msgWrapperRef",
                    ref: _,
                    list: o.value,
                    "onUpdate:list": t[0] || (t[0] = a => o.value = a),
                    "page-query": y.value,
                    "onUpdate:pageQuery": t[1] || (t[1] = a => y.value = a),
                    api: i(H),
                    distance: 100,
                    isAutoLoad: f.value
                }, {
                    content: j(() => [(r(!0), p(G, null, U(o.value, a => (r(), p("div", {
                        class: "sysMessage__container-msgWrapper__item",
                        key: a.messageID
                    }, [e("div", X, [C(' <component :is="item.state === 0 ? icons.messageIconRed : icons.messageIconIsRead" /> '), e("div", null, [d(m, {
                        class: "svg",
                        name: a.state === 0 ? "messageIconRed" : "notification"
                    }, null, 8, ["name"]), e("span", null, l(i(q)(a.title, 20)), 1)]), d(m, {
                        class: "svg",
                        name: "messageGarbage",
                        onClick: ce => W(a)
                    }, null, 8, ["onClick"]), C(` <component
							:is="icons.messageGarbage"
							@click="($event: Event) => { $event.stopPropagation(); onDeleteClick(item) }"
						/> `)]), e("div", Z, l(a.addTime), 1), e("div", ee, l(a.messages), 1)]))), 128))]),
                    _: 1
                }, 8, ["list", "page-query", "api", "isAutoLoad"])])
            }
        }
    });
const ae = E(se, [
        ["__scopeId", "data-v-8084bf25"],
        ["__file", "/usr/local/jenkins-prod/workspace/AR048-Pages-india-91club/src/views/home/Messages/index.vue"]
    ]),
    de = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: ae
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    te = {
        class: "messageDetail__container content"
    },
    ne = {
        class: "messageDetail__container-wrapper"
    },
    oe = {
        class: "messageDetail__container-title"
    },
    ie = {
        class: "messageDetail__container-content"
    },
    re = L({
        __name: "index",
        setup(O) {
            const {
                t: n
            } = B(), c = F(), _ = N(), s = g({}), v = R(() => A(() =>
                import ("./messageIconNoDot-54a19e6f.js"), ["assets/js/messageIconNoDot-54a19e6f.js", "assets/js/common.modules-5cfe2cf4.js", "assets/css/common-05d2aa17.css", "assets/js/page-activity-ActivityDetail-a58ec568.js", "assets/js/page-turntable-assets-d6267459.js", "assets/js/native/index-2ac88fb8.js", "assets/js/en-cfd26acf.js", "assets/css/page-activity-ActivityDetail-a597c4a3.css"])), f = R(() => A(() =>
                import ("./messageGarbage-721f6382.js"), ["assets/js/messageGarbage-721f6382.js", "assets/js/common.modules-5cfe2cf4.js", "assets/css/common-05d2aa17.css", "assets/js/page-activity-ActivityDetail-a58ec568.js", "assets/js/page-turntable-assets-d6267459.js", "assets/js/native/index-2ac88fb8.js", "assets/js/en-cfd26acf.js", "assets/css/page-activity-ActivityDetail-a597c4a3.css"]));

            function o() {
                _.back()
            }

            function D() {
                T({
                    title: n("warning"),
                    message: n("warningTxt1")
                }).then(() => {
                    x({
                        messageID: s.value.messageID,
                        state: 2
                    }), _.back()
                })
            }
            return P(async () => {
                s.value = c.getMessagesDetail, s.value.state !== 1 && (await x({
                    messageID: s.value.messageID,
                    state: 1
                }), c.setMessageDetail({ ...s.value,
                    state: 1
                }))
            }), (y, S) => {
                const I = b("NavBar");
                return r(), p("div", te, [d(I, {
                    "left-arrow": "",
                    onClickLeft: o,
                    title: i(n)("notificationDetails")
                }, null, 8, ["title"]), e("div", ne, [e("div", oe, [e("div", null, [e("div", null, [(r(), h(M(i(v)))), e("span", null, l(s.value.title), 1)]), e("span", null, l(s.value.addTime), 1)]), (r(), h(M(i(f)), {
                    onClick: D
                }))]), e("div", ie, l(s.value.messages), 1)])])
            }
        }
    });
const le = E(re, [
        ["__scopeId", "data-v-e5380132"],
        ["__file", "/usr/local/jenkins-prod/workspace/AR048-Pages-india-91club/src/views/home/Messages/MessageDetail/index.vue"]
    ]),
    me = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: le
    }, Symbol.toStringTag, {
        value: "Module"
    }));
export {
    me as a, de as i
};