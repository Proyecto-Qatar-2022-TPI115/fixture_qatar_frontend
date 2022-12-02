<template>
     <div class="container">
        <div class="mb-5"></div>
        <div class="row justify-content-center">
            <div class="col-2">
                <div class="mb-3">
                    <img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgoTlod0Ezhx9TL8p365Q7iGmG_EqwaWcJ_Ot-S6vhxLgqax_Z72ryWMUEQ5SWahwIgkWywgiD21LwRqkoU9eg-5v8mjPYwi8u6rsIJnYnq4u2Grxr7B9rBwMVJE82vZVvZi8Z-Y4SfPGM2n9oBB1FZDxXa2ST5ywafBpMlI1EWiSEYdVsjMusCML9X/s1600/Qatar2022256x.png"
                    id="imagenPerfil" class="img-thumbnail">
                </div>  
                <div class="mb-3">
                        <button type="button" class="btn btn-dark">Editar perfil</button>
                </div>
            </div>
            <div class="col-7" >
                <div class="input-group mb-3">
                    <span class="input-group-text" id="nombre">Nombre:</span>
                    <input type="text" class="form-control" id="nombreText" v-bind:placeholder="users.nombre" disabled>
                </div>
                <div class="input-group mb-3">
                    <span class="input-group-text" id="nombre">Apellido:</span>
                    <input type="text" class="form-control" id="nombreText" v-bind:placeholder="users.apellido" disabled>
                </div>
                <div class="input-group mb-3">
                    <span class="input-group-text" id="nombre">Pais:</span>
                    <input type="text" class="form-control" id="nombreText" v-bind:placeholder="users.email" disabled>
                </div>
                <div class="input-group mb-3">
                    <span class="input-group-text" id="nombre">Nickname:</span>
                    <input type="text" class="form-control" id="nombreText" v-bind:placeholder="users.nickname" disabled>
                </div>
                <div class="input-group mb-3">
                    <span class="input-group-text" id="nombre">Seleciones favoritas:</span>
                    <textarea class="form-floating" id="seleccionesText" disabled>{{users.apellido}}</textarea>
                </div>
                <div class="input-group mb-3">
                    <span class="input-group-text" id="nombre">Pronóstico de campeón:</span>
                    <textarea class="form-floating" id="pronosticoText" disabled>{{users.email}}</textarea>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import axios from 'axios'

    export default{
        name: 'PantallaPerfil',
        data(){
            return{
                users: Array
            }

        },
        created(){
            this.getUsers()
        },
        methods:{
            async getUsers(){
                let url = 'http://fixture_qatar_backend.test/api/users/1'
                await axios.get(url).then(response =>{
                    this.users = response.data.users
                    console.log(this.users)
                    console.log(this.users.nombre)
                }).catch(error => {
                    console.log(error)
                })
            }
        },
    }
</script>