<template>
    <div>
        <p>Article</p>
    {{title}} {{likes}}
    <p v-bind="$attrs">has non prop attributes</p>
    </div>
</template>

<script>
    export default {
        name: 'Article',
        props: {
            title: {
                type: String,
                required: true,
                default: "This title is Default"
            },
            likes: Number
        },
        inheritAttrs: false,
    }
</script>

<style scoped>

</style>