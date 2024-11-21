import { createRouter, createWebHashHistory } from "vue-router";
import HomePage from "../views/HomePage.vue";
import SignupPage from "../views/SignupPage.vue";

const routes = [{
        path: "/",
        name: "home",
        component: HomePage,
    },
    {
        path: "/signup",
        name: "signup",
        component: SignupPage,
    },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;