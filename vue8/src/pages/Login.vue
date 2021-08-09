<template>
<div class="text-center mt-4">
    <h3>Member Area</h3>
</div>
<div class="mt-2 mb-5 p-4 card text-dark container text-md-start" style="max-width: 400px">
    <form @submit.prevent="submitLoginData">
        <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Email address</label>
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" v-model="loginData.email" ref="emailRef">
            <small class="form-text text-danger" v-if="errors.email">{{errors.email}}</small>
        </div>
        <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">Password</label>
            <input type="password" class="form-control" id="exampleInputPassword1" v-model="loginData.password">
            <small class="form-text text-danger" v-if="errors.password">{{errors.password}}</small>
        </div>
        <div class="mb-3 form-check">
            <input type="checkbox" class="form-check-input" id="exampleCheck1" v-model="loginData.rememberMe">
            <label class="form-check-label" for="exampleCheck1">Check me out</label>
        </div>
        <button v-if="!btnLoading" type="submit" class="btn btn-primary">Submit</button>
        <div v-else>
            <div class="spinner-grow text-primary" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
            <div class="spinner-grow text-secondary" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
            <div class="spinner-grow text-success" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
            <div class="spinner-grow text-danger" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
            <div class="spinner-grow text-warning" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
            <div class="spinner-grow text-info" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
            <div class="spinner-grow text-light" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
            <div class="spinner-grow text-dark" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
        </div>
    </form>
</div>
</template>

<script>
export default {
    name: 'Login',
    data() {
        return {
            loginData: {
                email: '',
                password: '',
                rememberMe: ''
            },
            errors: {
                email: '',
                password: ''
            },
            btnLoading: false
        }
    },
    mounted() {
        this.$refs.emailRef.focus();
    },
    methods: {
        async submitLoginData() {
            if (!this.loginData.email)
                this.errors.email = "Email is Required";
            else if (!this.loginData.password)
                this.errors.password = "Password is Required";
            else {
                this.btnLoading = true;
                try {
                    const data = await this.$store.dispatch('LoginWithCredentials', this.loginData);
                    if (data.id) {
                        this.$swal('Logged in Successfully!');
                        this.$router.push({
                            name: "Users"
                        })
                    } else
                        this.$swal('Loged in Failed!');
                } catch (error) {
                    this.$swal(error.message);
                } finally {
                    this.btnLoading = false;
                }
            }

        }
    },

    watch: {
        loginData: {
            handler() {
                this.errors = {}
            },
            deep: true,
        }
    }
}
</script>

<style scoped>

</style>
