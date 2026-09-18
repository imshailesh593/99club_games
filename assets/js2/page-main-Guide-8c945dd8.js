import {
    G as a,
    R as i,
    r,
    C as c,
    H as d,
    I as l,
    Q as _,
    O as u,
    J as p,
    N as f
} from "./common.modules-5cfe2cf4.js";
import {
    A as m,
    c3 as v,
    _ as g
} from "./page-activity-ActivityDetail-a58ec568.js";
import "./page-turntable-assets-d6267459.js";
import "./native/index-2ac88fb8.js";
import "./en-cfd26acf.js";
const x = {
        class: "guide-container"
    },
    k = ["innerHTML"],
    w = a({
        __name: "index",
        setup(y) {
            const o = i(),
                t = r();
            return c(async () => {
                const e = await m(v());
                e && (t.value = e.data.playingGuide)
            }), (e, n) => {
                const s = d("NavBar");
                return f(), l("div", x, [_(s, {
                    title: e.$t("guideTitle"),
                    "left-arrow": "",
                    onClickLeft: n[0] || (n[0] = B => u(o).go(-1))
                }, null, 8, ["title"]), p("div", {
                    class: "guide-container-content",
                    innerHTML: t.value
                }, null, 8, k)])
            }
        }
    });
const R = g(w, [
    ["__scopeId", "data-v-99f1dd99"],
    ["__file", "/usr/local/jenkins-prod/workspace/AR048-Pages-india-91club/src/views/main/Guide/index.vue"]
]);
export {
    R as
    default
};