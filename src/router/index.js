import { createRouter, createWebHashHistory } from "vue-router";
import HomePage from "../views/HomePage.vue";
import SignupPage from "../views/SignupPage.vue";
import LogIn from "../views/LogIn.vue";
import auth from "../auth";

const routes = [
    {
        path: "/",
        name: "home",
        meta: {
            title: "Home"
        },
        component: HomePage,
        beforeEnter: verifyAuth
    },
    {
        path: "/signup",
        name: "signup",
        meta: {
            title: "Sign Up"
        },
        component: SignupPage,
    },
    {
        path: "/login",
        name: "LogIn",
        meta: {
            title: "Log In"
        },
        component: LogIn,
    },
    {
        path: "/contacts",
        name: "contacts",
        meta: {
            title: "Contacts"
        },
        component: () =>
            import("../views/ContactsView.vue"),
    },
    {
        path: "/addpost",
        name: "addpost",
        meta: {
            title: "Add Post"
        },
        component: () => import("../views/AddPost.vue"),
        beforeEnter: verifyAuth
    },
    {
        path: "/apost/:id",
        name: "apost",
        meta: {
            title: "A Post"
        },
        component: () => import("../views/APost.vue"),
        beforeEnter: verifyAuth
    }
];

async function verifyAuth(to, from, next) {
    let authResult = await auth.authenticated();
    if (!authResult) {
        next('/login')
    } else {
        next();
    }
}

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

router.beforeEach((to) => {
    document.title = to.meta?.title ?? 'App'
})

export default router;