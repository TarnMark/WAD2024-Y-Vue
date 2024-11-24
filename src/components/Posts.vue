<template>
    <div class="post-list">
        <article class="post" v-for="post in posts" :key="post.id">
            <header class="postheader">
                <img class="profile-picture" :src="post.profilePic" :alt="post.authorName" />
                <span class="post-date">{{ post.postDate }}</span>
            </header>
            <div class="post-body">
                <img :src=post.postImg v-if="post.postImg">
                <p>{{ post.postText }}</p>
            </div>
            <footer class="post-footer">
                <button class="like" @click="likePost(post)"></button>
                <span class=" like-count">{{ post.likes }}</span>
            </footer>
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
    },
    methods: {
        likePost(post) {
            this.$store.dispatch('incrementLikes', post);
        }
    }
}
</script>

<style scoped>
.post {
    margin: 4px;
    padding: 8px;
    background-color: white;
    text-align: left;
    box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.277);
    border-radius: 4px;
}

.profile-picture {
    background-color: cadetblue;
    max-width: 32px;
    max-height: 32px;
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
    margin-left: 0px;
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