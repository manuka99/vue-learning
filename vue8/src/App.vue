<template>
<div class="d-flex h-100 text-center text-white bg-dark">
    <div class="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">

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
    </div>
</div>
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
        document.title = "Feed Manager";
    },
    components: {
        Header,
        Footer
    }
}
</script>

<style>
.bd-placeholder-img {
    font-size: 1.125rem;
    text-anchor: middle;
    -webkit-user-select: none;
    -moz-user-select: none;
    user-select: none;
}

@media (min-width: 768px) {
    .bd-placeholder-img-lg {
        font-size: 3.5rem;
    }
}

/* Custom default button */
.btn-secondary,
.btn-secondary:hover,
.btn-secondary:focus {
    color: #333;
    text-shadow: none;
    /* Prevent inheritance from `body` */
}

/*
 * Base structure
 */

body {
    text-shadow: 0 .05rem .1rem rgba(0, 0, 0, .5);
    box-shadow: inset 0 0 5rem rgba(0, 0, 0, .5);
}

.cover-container {
    max-width: 90%;
}
</style>
