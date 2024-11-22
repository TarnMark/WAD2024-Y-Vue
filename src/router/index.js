import { createRouter, createWebHashHistory } from "vue-router";
import HomePage from "../views/HomePage.vue";
import SignupPage from "../views/SignupPage.vue";

const routes = [{
        path: "/",
        name: "home",
        meta: {
            title: "Home"
        },
        component: HomePage,
    },
    {
        path: "/signup",
        name: "signup",
        meta: {
            title: "Sign Up"
        },
        component: SignupPage,
    },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

router.beforeEach((to) => {
    document.title = to.meta?.title ?? 'App'
})

export default router;