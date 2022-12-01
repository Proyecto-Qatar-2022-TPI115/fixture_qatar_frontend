<template>
    
</template>

<script>
import axios from 'axios'

    export default {
        name: 'Login',
        data() {
        },
        created() {
            this.login()
        }, 
        methods: {
            async login() {
                let url = 'http://fixture_qatar_backend.test/api/auth/login'
                await axios.post(url, {
                    email: 'admin@email.com',
                    password: 'admin'
                })
                .then(function (response) {
                    console.log(response);
                })
            }
        },
        mounted() {

        }
    }
</script>