<template>
<p>LifecycleParent</p>
<button @click="showChild = !showChild">Show/Hide LifecycleChild</button>
    <template v-if="showChild">
        <LifecycleChild />
    </template>
</template>

<script>
import LifecycleChild from "./LifecycleChild";

export default {
    name: 'LifecycleParent',
    components: {
        LifecycleChild
    },
    data() {
        return {
            showChild: false,
        }
    },
    beforeCreate() {
        console.log('Lifecycle Parent: beforeCreate');
    },
    created() {
        console.log('Lifecycle Parent: created');
    },
    beforeMount() {
        console.log('Lifecycle Parent: beforeMount');
    },
    mounted() {
        console.log('Lifecycle Parent: mounted');
    },
    beforeUpdate() {
        console.log('Lifecycle Parent: beforeUpdate');
    },
    updated() {
        console.log('Lifecycle Parent: updated');
    },
    beforeUnmount() {
        console.log('Lifecycle Parent: beforeUnmount');
    },
    unmounted() {
        console.log('Lifecycle Parent: unmounted');
    },
}
</script>

<style scoped>

</style>
