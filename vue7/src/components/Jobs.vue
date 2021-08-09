<template>
<p>Jobs</p>
<u>
    <li v-for="job in jobs" :key="job.id">
        <router-link :to="{name: 'jobDetails', params: {id: job.id}}">
            {{job.title}}
        </router-link>
    </li>
</u>
</template>

<script>
export default {
    name: 'About',
    data() {
        return {
            jobs: [{
                    id: 1,
                    title: "job 1"
                },
                {
                    id: 2,
                    title: "job 2"
                },
                {
                    id: 3,
                    title: "job 3"
                },
            ]
        }
    }
}
</script>

<style scoped>

</style>
