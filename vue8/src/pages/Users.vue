<template>
<div class="container mt-4 mb-4">
    <h1>User List</h1>
    <template v-if="users.length > 0">
        <table class="table table-dark">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Body</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="user in users" :key="user.id">
                    <th scope="row">{{user.id}}</th>
                    <td>{{user.name}}</td>
                    <td>{{user.email}}</td>
                    <td>{{user.website}}</td>
                </tr>
            </tbody>
        </table>
    </template>
    <div v-else class="alert alert-danger" role="alert">
        No Users to display
    </div>
</div>
</template>

<script>
export default {
    name: 'Users',
    beforeCreate() {
        this.$store.dispatch('fetchUsers');
    },
    computed: {
        users() {
            return this.$store.state.users;
        }
    }
}
</script>

<style scoped>

</style>
