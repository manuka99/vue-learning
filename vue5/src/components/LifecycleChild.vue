<template>
<p>LifecycleChild</p>
</template>

<script>
export default {
    name: 'LifecycleChild',
    beforeCreate() {
        console.log('Lifecycle Child: beforeCreate');
    },
    created() {
        console.log('Lifecycle Child: created');
    },
    beforeMount() {
        console.log('Lifecycle Child: beforeMount');
    },
    mounted() {
        console.log('Lifecycle Child: mounted');
    },
    beforeUpdate() {
        console.log('Lifecycle Child: beforeUpdate');
    },
    updated() {
        console.log('Lifecycle Child: updated');
    },
    beforeUnmount() {
        console.log('Lifecycle Child: beforeUnmount');
    },
    unmounted() {
        console.log('Lifecycle Child: unmounted');
    },
}
</script>

<style scoped>

</style>
