<template>
<p>PostList</p>
<button @click="incrementID()">Increment ID</button>
<button @click="incrementIDAsync(2)">Increment ID Helper</button>
<p v-for="post in featurePosts" :key="post.id">
    {{post.id}} {{post.title}}
</p>
</template>

<script>
import {
    mapGetters,
    mapActions
} from "vuex";

export default {
    name: 'PostList',
    computed: {
        posts() {
            return this.$store.state.posts;
        },
        // featurePosts() {
        //     return this.$store.getters.featurePosts;
        // }

        // mapping getters
        ...mapGetters(['featurePosts'])
    },
    methods: {
        incrementID() {
            // mutation
            // this.$store.commit('incrementID', 2); 

            // action
            this.$store.dispatch('incrementIDAsync', 2);
        },

        // mapping actions
        ...mapActions(['incrementIDAsync'])
    },

}
</script>

<style scoped>

</style>
