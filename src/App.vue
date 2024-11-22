<template>
    <page-header />
    <div>
        <router-view />
    </div>
    <page-footer />
</template>

<script>
import PageHeader from '@/components/PageHeader.vue';
import PageFooter from '@/components/PageFooter.vue';

export default {
    components: { PageHeader, PageFooter },
    name: 'App'
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

body {
    background-color: white;
    display: flex;
    flex-direction: column;
    /* height: 100vh; */
}

a {
    text-decoration: none;
    color: white;
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

.hidden {
    display: none;
}
</style>
