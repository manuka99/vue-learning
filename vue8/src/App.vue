<template>
<Header />
<router-view v-if="this.$store.state.isUserRequested" v-slot="{ Component }">
    <transition name="fade">
        <component :is="Component" />
    </transition>
</router-view>

<div v-else class="text-center">
    <div class="spinner-border" role="status">
        <span class="visually-hidden">Loading...</span>
    </div>
</div>

<Footer />
</template>

<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";

export default {
    name: 'App',
    data() {
        return {
            // dataLoaded: this.$store.state.isUserRequested
        }
    },
    beforeCreate() {
        this.$store.dispatch('LoadUserDetailsOnPageLoad');
    },
    components: {
        Header,
        Footer
    }
}
</script>

<style>

</style>
