<template>
  <div class="page-body">
    <div class="form">
      <h3>Add a post</h3>
      <label for="body">Body: </label>
      <input name="body" type="text" id="body" placeholder="Dear diary..." required v-model="post.body" />
      
      <div class="buttons-container">
        <button @click="addPost" class="addPost">Add Post</button>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "AddPost",
  data() {
    return {
      post: {
        body: "",
        // date: "" // the date is set by server when receiving post so noone can spoof their current date #securyty
        // urllink: "",
      },
    };
  },
  methods: {
    addPost() {
      fetch(`http://localhost:3000/api/posts`, {
        method: "POST",
        credentials: "include",
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

</style>