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

.page-body {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 90vh;
    background-color: #f0f0f0;
    margin-left: 4px;
    margin-right: 4px;
}

.form {
  width: 300px;
  margin: 30px auto;
  background: #e6f7e8;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  text-align: center;
}

.form-group {
    margin-bottom: 15px;
    text-align: left;
}

.buttons-container {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  gap: 10px;
  padding: 10px;
}

.hidden {
    display: none;
}
</style>
