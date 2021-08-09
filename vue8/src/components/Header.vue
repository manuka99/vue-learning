<template>
<header class="mb-auto">
    <div>
        <h3 class="float-md-start mb-0">Feed Manager</h3>
        <nav class="nav nav-masthead justify-content-center float-md-end">
            <router-link :to="{name: 'Landing'}" active-class="active" :class="'nav-link'">
                Home
            </router-link>
            <router-link :to="{name: 'Posts'}" active-class="active" :class="'nav-link'">
                Posts
            </router-link>
            <template v-if="!isLoggedIn">

                <router-link :to="{name: 'Login'}" active-class="active" :class="'nav-link'">
                    Login
                </router-link>
            </template>
            <template v-else>
                <router-link :to="{name: 'Users'}" active-class="active" :class="'nav-link'">
                    Users
                </router-link>
                <router-link :to="{name: 'UserProfile'}" active-class="active" :class="'nav-link'">
                    {{$store.state.user.name}}
                </router-link>
                <a @click="Logout" :class="['nav-link', 'link-danger']" style="color: red">
                    Logout
                </a>
            </template>
        </nav>
    </div>
</header>
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
.nav-masthead .nav-link {
    padding: .25rem 0;
    font-weight: 700;
    color: rgba(255, 255, 255, .5);
    background-color: transparent;
    border-bottom: .25rem solid transparent;
}

.nav-masthead .nav-link:hover,
.nav-masthead .nav-link:focus {
    border-bottom-color: rgba(255, 255, 255, .25);
}

.nav-masthead .nav-link+.nav-link {
    margin-left: 1rem;
}

.nav-masthead .active {
    color: #fff;
    border-bottom-color: #fff;
}
</style>
