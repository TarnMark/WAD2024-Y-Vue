<template>
    <div class="ix-mainbars">
        <aside></aside>
        <main>
            <button id="logout-button" v-if="authResult" @click="Logout">Logout</button>
            <getPosts />
        </main>
        <aside></aside>
    </div>
</template>

<script>
import getPosts from "@/components/Posts.vue";
import auth from "@/auth";

export default {
    name: "HomePage",
    components: { getPosts },
    data: function () {
        return {
            posts: [],
            authResult: auth.authenticated()
        }
    },
    methods: {
        Logout() {
            fetch("http://localhost:3000/auth/logout", {
                credentials: 'include'
            })
                .then((response) => response.json())
                .then((data) => {
                    console.log(data);
                    console.log('jwt removed');
                    this.$router.push("/login");
                })
                .catch((e) => {
                    console.log(e);
                    console.log("error logout");
                });
        },
    }

}

</script>

<style scoped>
.ix-mainbars {
    /* height: 100vh; */
    flex-grow: 1;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
}

.ix-mainbars>aside {
    flex-grow: 2;
    background-color: gainsboro;
    margin: 4px;
    margin-top: 0px;
}

.ix-mainbars>aside:nth-child(1) {
    order: 1;
}

.ix-mainbars>main:nth-child(2) {
    order: 2;
}

.ix-mainbars>aside:nth-child(3) {
    order: 3;
}

.ix-mainbars>main {
    flex-grow: 4;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    min-height: 75vh;
    overflow: scroll;
}

#logout-button {
    width: 97%;
    padding: 10px;
    align-self: center;
    background-color: #55aac6;
    color: white;
    border: none;
    margin: 10px;
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;
}

#logout-button:hover {
    background-color: #387083;
}

@media (max-width: 600px) {
    .ix-mainbars {
        flex-direction: column;
    }

    .ix-mainbars>aside:nth-child(1) {
        order: 1;
    }

    .ix-mainbars>main:nth-child(2) {
        order: 3;
    }

    .ix-mainbars>aside:nth-child(3) {
        order: 1;
    }
}
</style>