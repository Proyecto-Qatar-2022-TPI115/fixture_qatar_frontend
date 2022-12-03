<template>
    <section class="form-login">
        <h5>Iniciar sesion</h5>
        <form @submit.prevent="login">
            <input class="controls" type="text" name="User" value="" placeholder="Correo" >
            <input class="controls" type="password" name="Password" value="" placeholder="password">
            <input class="buttons" type="submit" name="" value="Acceder">
        </form>
        <p><a href="#">olvide la contra</a> </p>
        <p><a href="#">Crear una cuenta </a> </p>
    </section>
</template>

<script>
import axios from 'axios'

export default {
    name: 'Login',
    data() {
    },
    created() {
        //this.login()
    },
    methods: {
        async login() {
            let url = 'http://fixture_qatar_backend.test/api/auth/login'
            await axios.post(url, {
                email: 'admin@email.com',
                password: 'admin',
                token: ""
            })
            .then(response => {
                console.log(response);
            })
            .catch(error => {
                    console.log(error)
                })
        }
    },
    mounted() {

    }
}
</script>
<style scoped>
    @import '../assets/css/estilosSesion.css';
</style>