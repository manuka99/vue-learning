<template>
<input type="text" ref="inputRef" />
<PostList ref="postListRef" />
</template>

<script>
import PostList from "./PostList.vue";
export default {
    name: 'TemplateRef',
    components: {
        PostList
    },
    mounted() {
        this.$refs.inputRef.focus();
        // console.log(this.$refs.postListRef);
    }
}
</script>

<style scoped>

</style>
