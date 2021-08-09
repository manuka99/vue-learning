<template>
<div id="nav">
    <h1>Hello App!</h1>
    <p>
        <router-link to="/" >Home</router-link> <br/>
        <router-link to="/about">About</router-link> <br/>
        <router-link to="/jobs">Jobs</router-link>
    </p>
    <router-view />
</div>
</template>

<script>
export default {
    name: 'App',
    components: {

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
    margin-top: 60px;
}
</style>
