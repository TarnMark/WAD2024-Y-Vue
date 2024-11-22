<template>

    <head>
        <title>
            Homepage
        </title>
    </head>
    <div>
        <header class="main-header">
            <nav>
                <router-link to="/">Home</router-link>
                <router-link to="/signup">Sign Up</router-link>
            </nav>
            <!-- <img id="profile-picture" class="profile-picture" src="@/assets/male-icon.png" alt="profile picture"> -->
            <router-view />
        </header>
        <button @click="this.$store.dispatch('resetLikes')" class="reset-likes">Reset Likes</button>
        <!-- <home-page /> -->
        <footer class="main-footer">
            <p>Web page developed by Aksel, Mark and Tõnis</p>
        </footer>
    </div>

</template>

<script>
import HomePage from '@/views/HomePage.vue'

export default {
    name: 'App',
    Components: {
        HomePage
    }
}
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}

/* * {
    padding: 0;
    margin: 0;
} */

html {
    font-family: sans-serif;
}

body {
    background-color: white;
    display: flex;
    flex-direction: column;
    height: 100vh;
}

nav {
    padding: 8px;
    background-color: lightgray;
    display: flex;
    justify-content: center;
    margin: 4px;
}

nav>a {
    padding: 10px;
    font-weight: bold;
    text-shadow: 1px 1px slategray;
}

menu.main-menu {
    display: flex;
    flex-direction: row;
    justify-content: left;
    list-style-type: none;
}

menu.main-menu>li {
    background-color: grey;
    margin: 2px;
    padding: 6px;
}

menu.main-menu>li:has(a:hover) {
    background-color: cornflowerblue;
}

a {
    text-decoration: none;
    color: white;
}

menu.main-menu a:hover {
    text-decoration: underline;
    color: aliceblue;
}

.profile-picture {
    background-color: cadetblue;
    max-width: 32px;
    cursor: pointer;
}

.dropdown-parent {
    position: absolute;
    right: 0;
    top: 48px;
}

.dropdown-menu {
    background-color: ghostwhite;
    border-radius: 6px;
    bottom: auto;
    box-shadow: 0 3px 10px 0 #0003;
    display: block;
    left: 0;
    left: auto;
    margin: 0;
    padding: 8px;
    position: relative;
    right: auto;
    top: auto;
    width: 200px
}

.dropdown-menu>.logout>a {
    color: #0056b3;
}

footer.main-footer {
    padding: 8px;
    margin: 4px;
    margin-top: 0;
    display: flex;
    justify-content: center;
    background-color: gray;
}

.container {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: center;
    background-color: #dcdcdc;
    border-radius: 10px;
    max-width: 50%;
    min-width: 200px;
    margin: 5% auto;
    padding: 10px;
}

.submitButton {
    width: 100%;
    padding: 10px;
    background-color: #007BFF;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}

.submitButton:hover {
    background-color: #0056b3;
}

.reset-likes {
    width: 10%;
    padding: 10px;
    background-color: #ff005d;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;
}

.reset-likes:hover {
    background-color: #ff5090;
}

label+textarea {
    vertical-align: top;
    resize: none;
}

.hidden {
    display: none;
}
</style>
