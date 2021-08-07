<template>
<p v-for="(name, index) in names" :key="index">
    <slot :firstName="name.firstName" :lastName="name.lastName"></slot>
</p>
</template>

<script>
export default {
    name: 'NameList',
    data() {
        return {
            names: [{
                    firstName: '55ccx',
                    lastName: 'vvvv2',
                },
                {
                    firstName: 'asasas',
                    lastName: 'sdsd32323',
                },
                {
                    firstName: 'as',
                    lastName: '2323fds',
                },
            ]
        }
    }
}
</script>

<style scoped>

</style>
