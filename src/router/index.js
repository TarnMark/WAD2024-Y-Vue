import { createRouter, createWebHashHistory } from "vue-router";
import HomePage from "../views/HomePage.vue";
// import ... from "../views/...";

const routes = [{
        path: "/",
        name: "home",
        component: HomePage,
    }
    // {
    //     path: "/signup",
    //     name: "signup",
    //     component: ...,
    // },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;