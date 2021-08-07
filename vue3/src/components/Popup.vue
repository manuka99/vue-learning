<template>
    <div>
        <input type="text" v-model="name">
        <button @click="$emit('close', name)">Close popup</button>
    </div>
</template>

<script>
    export default {
        name: 'Popup',
        data(){
            return {
                name: ''
            }
        },
        // emits: ['close']
        emits: {
            close: (name) => !name ? false : true
        }
    }
</script>

<style scoped>

</style>