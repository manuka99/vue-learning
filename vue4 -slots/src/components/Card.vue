<template>
    <div class="card">
        <slot>
            Default content
        </slot>
    </div>
</template>

<script>
    export default {
        name: 'Card',
    }
</script>

<style scoped>
.card {
    background-color: aquamarine;
    margin: "10px";
}
</style>