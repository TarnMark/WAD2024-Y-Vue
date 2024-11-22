<template>
    <div class="post-list" v-for="post in posts" :key="post.id">
        <!-- :key="post.index"> -->
        <article class="post">
            <header class="postheader">
                <img class="profile-picture" src="@/assets/male-icon.png" alt="GallantWorm profile picture">
                <span class="post-date">{{ post.postDate }}</span>
            </header>
            <div class="post-body">
                <!-- <img src={{post.posptImg}} alt="user photo"> -->
                <p>{{ post.postText }}</p>
            </div>
            <footer class="post-footer">
                <button class="like" @click="this.$store.dispatch('incrementLikes', post)"></button>
                <span class=" like-count">{{ post.likes }}</span>
            </footer>

            <!-- <div class=" post"> -->
            <!-- </div> -->
        </article>
    </div>
</template>

<script>
export default {
    name: "getPosts",
    data: function () {
        return {}
    },
    computed: {
        posts() {
            return this.$store.state.posts
        }
    }
}
</script>

<style scoped>
.post {
    margin: 4px;
    padding: 8px;
    background-color: ghostwhite;
    text-align: left;
    /* display: block;
    unicode-bidi: isolate; */
}

header.postheader {
    min-height: 24px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 8px;
}

.post-body {
    margin: 4px;
    min-height: 36px;
}

button.like {
    background-image: url("@/assets/thumbs-up-black-icon.svg");
    background-repeat: no-repeat;
    min-width: 24px;
    height: 24px;
    border: none;
}

.post-footer {
    display: flex;
    align-items: center;
}

.like-count {
    display: inline;
    margin-left: 8px;
    font-size: large;
}
</style>