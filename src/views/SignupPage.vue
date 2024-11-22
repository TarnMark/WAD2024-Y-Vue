<template>
    <div class="signup-page">
        <main>
            <div class="form-container">
                <h2>Sign Up</h2>
                <form @submit.prevent="handleSignup">
                    <!-- E-post -->
                    <div class="form-group">
                        <label for="email">Email:</label>
                        <input v-model="email" id="email" type="email" placeholder="Email" required />
                    </div>

                    <!-- Parool -->
                    <div class="form-group">
                        <label for="password">Password:</label>
                        <input v-model="password" id="password" type="password" placeholder="Password"
                            @input="validatePassword" required />
                    </div>

                    <!-- Veateated -->
                    <div v-if="passwordErrors.length">
                        <p class="error">The password is not valid:</p>
                        <ul>
                            <li v-for="(error, index) in passwordErrors" :key="index" class="error">
                                {{ error }}
                            </li>
                        </ul>
                    </div>

                    <!-- Registreerimise nupp -->
                    <button type="submit" class="signup-button" :disabled="passwordErrors.length > 0">
                        Signup
                    </button>
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
            alert(`Signed up with email: ${this.email}`);
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
    /* hack */
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