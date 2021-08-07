<template>
    <div>
        <p>{{username}}</p>
        <p>{{familyName}}</p>
    </div>
</template>

<script>
    export default {
        name: 'ChildCom',
        inject: ['username', 'familyName']
    }
</script>

<style scoped>

</style>