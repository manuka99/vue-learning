<template>
  <h1>1. Vue X</h1>
  <h3>a. state - data</h3>
  <h3>b. Getters - Computed</h3>
  <h3>c. mutations - methods</h3>
  <h3>d. actions - async mutations</h3>
  <h3>d. Helpers - map getters and actions</h3>
  <PostsList />
</template>

<script>
import PostsList from "./components/PostsList.vue";

export default {
  name: 'App',
  components: {
    PostsList
  }
}
</script>

<style>

</style>
