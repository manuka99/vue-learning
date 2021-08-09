<template>
<div class="container card mt-4 mb-4">
    <ul class="m-2 nav nav-pills">
        <li class="nav-item">
            <router-link :to="{name: 'Landing'}" active-class="active" :class="'nav-link'">
                Home
            </router-link>
        </li>
        <li class="nav-item">
            <router-link :to="{name: 'Posts'}" active-class="active" :class="'nav-link'">
                Posts
            </router-link>
        </li>
        <li class="nav-item" v-if="!isLoggedIn">
            <router-link :to="{name: 'Login'}" active-class="active" :class="'nav-link'">
                Login
            </router-link>
        </li>
        <template v-else>
            <li class="nav-item">
                <router-link :to="{name: 'Users'}" active-class="active" :class="'nav-link'">
                    Users
                </router-link>
            </li>
            <li class="nav-item">
                <router-link :to="{name: 'UserProfile'}" active-class="active" :class="'nav-link'">
                    Profile - {{$store.state.user.name}}
                </router-link>
            </li>
            <li class="nav-item">
                <button @click="Logout" class="btn btn-danger">
                    Logout
                </button>
            </li>
        </template>
    </ul>
</div>
</template>

<script>
import {
    mapGetters
} from "vuex";

import {
    APP_USER_TOKEN
} from "../config";

export default {
    name: 'Header',
    computed: {
        ...mapGetters(['isLoggedIn'])
    },
    methods: {
        Logout: function () {
            localStorage.removeItem(APP_USER_TOKEN);
            this.$store.commit('setUser', {});
            this.$router.push({
                name: 'Login'
            })
        }
    }
}
</script>

<style scoped>

</style>
