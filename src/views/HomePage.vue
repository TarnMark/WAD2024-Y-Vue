<template>
<body>
    <div class="ix-mainbars">
        <aside></aside>
        <main>
            <getPosts/>
            <button @click="this.$store.dispatch('resetLikes')" class="reset-likes">Reset Likes</button>
        </main>
        <aside></aside>
    </div>
</body>
</template>

<script>
import getPosts from "@/components/Posts.vue"; 

export default {
    name: "HomePage",
    components: {getPosts}
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
    /* max-height: 85vh; hard coded */
    overflow: scroll;
}

.reset-likes {
    width: 20%;
    padding: 10px;
    align-self: center;
    background-color: #ff005d;
    color: white;
    border: none;
    margin: 10px;
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;
}

.reset-likes:hover {
    background-color: #ff5090;
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