<template>
  <div class="page-body">
    <div class="form">
      <h3>Edit the post</h3>
      <label for="body">Body: </label>
      <input name="body" type="text" id="body" required v-model="post.body" />

      <div class="buttons-container">
        <button @click="updatePost" class="updatePost">Update Post</button>
        <button @click="deletePost" class="deletePost">Delete Post</button>
      </div>

    </div>
  </div>
</template>


<script>
export default {
  name: "APost",
  data() {
    return {
      post: {
        id: "",
        body: "",
        date: ""
        // urllink: "",
      },
    };
  },
  methods: {
    fetchAPost(id) {
      fetch(`http://localhost:3000/api/posts/${id}`, { credentials: "include" })
        .then((response) => response.json())
        .then((data) => (this.post = data))
        .catch((err) => console.log(err.message));
    },
    updatePost() {
      fetch(`http://localhost:3000/api/posts/${this.post.id}`, {
        credentials: "include",
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(this.post),
      })
        .then((response) => {
          console.log(response.data);
          this.$router.push("/");
        })
        .catch((e) => {
          console.log(e);
        });
    },
    deletePost() {
      fetch(`http://localhost:3000/api/posts/${this.post.id}`, {
        credentials: "include",
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
      })
        .then((response) => {
          console.log(response.data);
          this.$router.push("/");
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
  mounted() {
    this.fetchAPost(this.$route.params.id);
  },
};
</script>

<style scoped>
h3 {
  text-align: center;
  color: rgb(8, 110, 110);
}

label {
  color: rgb(8, 110, 110);
  display: inline-block;
  margin: 25px 0 15px;
  font-size: 0.8em;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: bold;
}

input {
  display: block;
  padding: 10px 6px;
  width: 100%;
  box-sizing: border-box;
  border: none;
  border-bottom: 1px solid white;
  /* color: blue; */
}

button {
  background: rgb(8, 110, 110);
  border: 0;
  padding: 10px 20px;
  margin-top: 20px;
  color: white;
  border-radius: 20px;
}

button:hover {
  background: rgb(20, 200, 200);
}

.deletePost {
    background-color: #ff2727;
}

.deletePost:hover {
    background-color: #bd0000;
}
</style>