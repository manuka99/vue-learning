<template>
    <div>
        <button @click="incrementCounter">Clicked {{count}} times</button>
    </div>
</template>

<script>
    import counter from "../mixins/counter";
    export default {
        name: 'ClickCounter',
        mixins: [counter]
    }
</script>

<style scoped>

</style>