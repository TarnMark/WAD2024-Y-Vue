<template>
    <span class="posts-options"> 
        <button class="option-button" id="add-post-button" @click="addPost">Add Post</button> 
        <button class="option-button" id="delete-all-button" @click="deleteAll">Delete All</button> 
    </span>

    <div class="post-list">
        <article class="post" v-for="post in posts" :key="post.id">
            <!-- TODO: add "A Post" (editing) page here -->
            <a class="post-link" href="">
            <header class="postheader">
                <b> {{ post.title }} </b> <b>{{ new Date(post.date).toDateString() }} </b>
            </header>
            <div class="post-body">
                <p>{{ post.body }}</p>
            </div>
            </a>
        </article>
    </div>
</template>

<script>
export default {
    name: "getPosts",
    data: function () {
        return {
            posts:[ ]
        }
    },
    // computed: {
    //     posts() {
    //         return this.posts
    //     }
    // },
    methods: {
        fetchPosts() {
            fetch(`http://localhost:3000/api/posts/`)
            .then((response) => response.json())
            .then((data) => (this.posts = data, this.posts.reverse()))
            .catch((err) => console.log(err.message));
        },
        deleteAll() {
            console.log("Deleting all posts")
            for (let post of this.posts){
                //console.log(post.title)
                fetch(`http://localhost:3000/api/posts/${post.id}`, {
                method: "DELETE",
                headers: { "Content-Type": "application/json" },
                })
                .catch((e) => {
                    console.log(e);
                });
            }
            this.fetchPosts()
        },
        addPost() {
            console.log("Adding new post")
            // TODO: add routing to the AddPost page
        }
    },
    mounted() {
        this.fetchPosts();
        console.log("mounted");
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

.post-link {
    color: #2c3e50;
}

.post-link:visited {
    color: #2c3e50;
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

.posts-options {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
}

.option-button {
    width: 50%;
    padding: 10px;
    align-self: center;
    color: white;
    border: none;
    margin: 10px;
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;
}

#add-post-button {
    background-color: #14b57d;
}

#add-post-button:hover {
    background-color: #0d7d56;
}

#delete-all-button {
    background-color: #ff005d;
}

#delete-all-button:hover {
    background-color: #bd0045;
}
</style>