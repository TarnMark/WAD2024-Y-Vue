<template>
    <header class="main-header">
        <nav>
            <router-link to="/">Home</router-link>
            <router-link to="/signup">Sign Up</router-link>
        </nav>
    </header>
</template>

<style scoped>
nav {
    padding: 8px;
    background-color: lightgray;
    display: flex;
    justify-content: center;
    margin: 4px;
}

nav>a {
    padding: 10px;
    margin-inline: 10px;
    font-weight: bold;
    color: #2c3e50;
    /* text-shadow: 1px 1px slategray; */
    /* background-color: gray; */
}
a:hover {
    color: cornflowerblue;
}
</style>