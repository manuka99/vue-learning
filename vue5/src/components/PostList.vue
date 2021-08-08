<template>
<p>PostList</p>
<button @click="getPosts()">Get Posts</button>
<!-- <div v-for="post in posts" :key="post.id">
    <h5>{{post.title}}</h5>
</div> -->
    <h5>{{post.title}}</h5>
</template>

<script>
import axios from "axios";
export default {
    name: 'PostList',
    data() {
        return {
            post: {}
        }
    },
    created() {
        this.getPosts();
    },
    methods: {
        getPosts() {
            axios.get("https://jsonplaceholder.typicode.com/posts/1").then(res =>
                this.post = res.data
            ).catch(e => console.log(e))
        }
    }
}
</script>

<style scoped>

</style>
