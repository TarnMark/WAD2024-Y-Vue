<template>
  <div class="form">
    <h3>LogIn</h3>
    <label for="email">Email</label>
    <input type="email" name="email" required v-model="email">
    <label for="password">Password</label>
    <input type="password" name="password" required v-model="password">

    <div v-if="loading" class="spinner"></div>

    <div class="container">
      <button @click="LogIn" :disabled="loading">LogIn</button>
      <button @click='this.$router.push("/signup")'>Signup</button>
    </div>

    <div v-if="errorMessage" class="error">{{ errorMessage }}</div>
  </div>
</template>

<script>
export default {
  name: "LogIn",

  data() {
    return {
      email: "",
      password: "",
      loading: false,
      errorMessage: "",
    };
  },

  methods: {
    LogIn() {
      if (!this.validateForm()) return;

      this.loading = true;
      this.errorMessage = "";

      const data = {
        email: this.email,
        password: this.password,
      };

      fetch("http://localhost:3000/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(data),
      })
        .then((response) => {
          if (!response.ok) {
            return response.json().then((err) => {
              throw new Error(err.error || "Login failed");
            });
          }
          return response.json();
        })
        .then((data) => {
          console.log(data);
          this.$router.push("/");
        })
        .catch((err) => {
          console.error(err);
          this.errorMessage = err.message;
        })
        .finally(() => {
          this.loading = false;
        });
    },

    validateForm() {
      if (!this.email || !this.password) {
        this.errorMessage = "Please fill in all fields.";
        return false;
      }
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(this.email)) {
        this.errorMessage = "Please enter a valid email address.";
        return false;
      }
      return true;
    },
  },
};
</script>

<style scoped>
.form {
  max-width: 300px;
  margin: 30px auto;
  background: rgb(230, 247, 232);
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  text-align: center;
}

h3 {
  color: rgb(8, 110, 110);
  margin-bottom: 20px;
}

label {
  color: rgb(8, 110, 110);
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
  font-size: 14px;
}

input {
  width: 94%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 14px;
  margin-bottom: 15px;
}

input:focus {
  border-color: #007bff;
  outline: none;
}

.container {
  display: flex;
  justify-content: space-around;
  gap: 10px;
  padding: 10px 0;
}

button {
  flex: 1;
  max-width: 45%;
  padding: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  text-align: center;
}

button:disabled {
  background-color: grey;
  cursor: not-allowed;
}

.center {
  margin: auto;
  border: 0;
  padding: 10px 20px;
  margin-top: 20px;
  width: 30%;
}

.spinner {
  border: 4px solid rgba(0, 0, 0, 0.1);
  border-left-color: #09f;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  animation: spin 1s linear infinite;
  margin: 10px auto;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

.error {
  color: red;
  text-align: center;
  margin-top: 10px;
  font-size: 0.9em;
}

.success {
  color: green;
  text-align: center;
  margin-top: 10px;
  font-size: 0.9em;
}
</style>