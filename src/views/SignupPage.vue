<template>
    <div class="signup-page">
        <main>
            <div class="form-container">
                <h2>Sign Up</h2>
                <form @submit.prevent="handleSignup">
                    <!-- Email -->
                    <div class="form-group">
                        <label for="email">Email:</label>
                        <input v-model="email" id="email" type="email" placeholder="Email" required />
                    </div>

                    <!-- Password -->
                    <div class="form-group">
                        <label for="password">Password:</label>
                        <input
                            v-model="password"
                            id="password"
                            type="password"
                            placeholder="Password"
                            @input="validatePassword"
                            required
                        />
                    </div>

                    <!-- Validation Errors -->
                    <div v-if="passwordErrors.length">
                        <p class="error">The password is not valid:</p>
                        <ul>
                            <li v-for="(error, index) in passwordErrors" :key="index" class="error">
                                {{ error }}
                            </li>
                        </ul>
                    </div>

                    <!-- Signup Button -->
                    <button
                        @click="SignUp"
                        type="submit"
                        class="signup-button"
                        :disabled="passwordErrors.length > 0 || loading"
                    >
                        {{ loading ? "Signing up..." : "Signup" }}
                    </button>

                    <!-- Success or Error Messages -->
                    <p v-if="successMessage" class="success">{{ successMessage }}</p>
                    <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
                </form>
            </div>
        </main>
    </div>
</template>

<script>
export default {
    data() {
        return {
            email: "",
            password: "",
            passwordErrors: [],
            loading: false,
            successMessage: "",
            errorMessage: "",
        };
    },
    methods: {
        validatePassword() {
            this.passwordErrors = [];
            const password = this.password;

            if (password.length < 8 || password.length > 15) {
                this.passwordErrors.push("Must be 8-15 characters long.");
            }
            if (!/[A-Z]/.test(password)) {
                this.passwordErrors.push("Must include at least one uppercase letter.");
            }
            if (!/[a-z].*[a-z]/.test(password)) {
                this.passwordErrors.push("Must include at least two lowercase letters.");
            }
            if (!/\d/.test(password)) {
                this.passwordErrors.push("Must include at least one numeric value.");
            }
            if (!/^([A-Z])/.test(password)) {
                this.passwordErrors.push("Must start with an uppercase letter.");
            }
            if (!/_/.test(password)) {
                this.passwordErrors.push("Must include the character '_'.");
            }
        },
        handleSignup() {
            if (this.passwordErrors.length > 0) {
                this.errorMessage = "Please resolve the password errors before signing up.";
                return;
            }
            this.errorMessage = "";
            alert(`Signed up with email: ${this.email}`);
        },
        SignUp() {
            if (!this.email || !this.password) {
                this.errorMessage = "Please fill in all fields.";
                return;
            }

            this.loading = true;
            this.successMessage = "";
            this.errorMessage = "";

            const data = {
                email: this.email,
                password: this.password,
            };

            fetch("http://localhost:3000/auth/signup", {
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
                            throw new Error(err.error || "Signup failed.");
                        });
                    }
                    return response.json();
                })
                .then(() => {
                    this.successMessage = "Signup successful! Redirecting...";
                    setTimeout(() => this.$router.push("/"), 1500); // Redirect after 1.5 seconds
                })
                .catch((error) => {
                    this.errorMessage = error.message || "An error occurred during signup.";
                })
                .finally(() => {
                    this.loading = false;
                });
        },
    },
};
</script>

<style scoped>
.signup-page {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #f0f0f0;
    margin-left: 12px;
    margin-right: 12px;
}

.form-container {
    background-color: #e6f7e8;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    text-align: center;
    width: 300px;
}

h2 {
    margin-bottom: 20px;
}

.form-group {
    margin-bottom: 15px;
    text-align: left;
}

label {
    display: block;
    margin-bottom: 5px;
    font-weight: bold;
}

input {
    width: 94%;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 14px;
}

input:focus {
    border-color: #007bff;
    outline: none;
}

.error {
    color: red;
    font-size: 12px;
    margin-top: 5px;
    text-align: left;
}

.success {
    color: green;
    font-size: 12px;
    margin-top: 10px;
    text-align: center;
}

.signup-button {
    width: 100%;
    padding: 10px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;
}

.signup-button:disabled {
    background-color: grey;
    cursor: not-allowed;
}

ul {
    padding-left: 20px;
    text-align: left;
}
</style>
