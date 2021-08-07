<template>
    <div class="container-header">
        <slot name="header"></slot>
    </div>
    <div class="container-body">
        <slot></slot>
    </div>
    <div class="container-footer">
        <slot name="footer"></slot>
    </div>
</template>

<script>
    export default {
        name: 'Container'
    }
</script>

<style scoped>
.container-header {
    background-color: red;
}
.container-body {
    background-color: yellow;
}
.container-footer {
    background-color: blue;
}
</style>