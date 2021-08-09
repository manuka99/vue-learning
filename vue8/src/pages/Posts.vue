<template>
<div class="container mt-4 mb-4">
    <h1>Post List</h1>
    <template v-if="posts.length > 0">
        <table class="table table-dark">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">User ID</th>
                    <th scope="col">Title</th>
                    <th scope="col">Body</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="post in posts" :key="post.id">
                    <th scope="row">{{post.id}}</th>
                    <td>{{post.userId}}</td>
                    <td>{{post.title}}</td>
                    <td>{{post.body}}</td>
                </tr>
            </tbody>
        </table>
    </template>
    <div v-else class="alert alert-danger" role="alert">
        No posts to display
    </div>
</div>
</template>

<script>
export default {
    name: 'Posts',
    beforeCreate() {
        this.$store.dispatch('fetchPosts');
    },
    computed: {
        posts() {
            return this.$store.state.posts;
        }
    }
}
</script>

<style scoped>

</style>
