<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-2">
                <img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgoTlod0Ezhx9TL8p365Q7iGmG_EqwaWcJ_Ot-S6vhxLgqax_Z72ryWMUEQ5SWahwIgkWywgiD21LwRqkoU9eg-5v8mjPYwi8u6rsIJnYnq4u2Grxr7B9rBwMVJE82vZVvZi8Z-Y4SfPGM2n9oBB1FZDxXa2ST5ywafBpMlI1EWiSEYdVsjMusCML9X/s1600/Qatar2022256x.png" class="img-thumbnail" >
            </div>
            <div class="col-7" >
                <!--<form>-->
                    <div class="input-group mb-3">
                        <span class="input-group-text" id="nombre">Nombre:</span>
                        <input type="text" class="form-control" id="nombreText" v-bind:value="users.nombre" sele>
                    </div>
                    <div class="input-group mb-3">
                        <span class="input-group-text" id="apellido">Apellido:</span>
                        <input type="text" class="form-control" id="apellidoText" v-bind:value="users.apellido">
                    </div>
                    <div class="input-group mb-3">
                        <span class="input-group-text" id="nickname">Nickname:</span>
                        <input type="text" class="form-control" id="nicknameText" v-bind:value="users.nickname">
                    </div>
                    <div class="input-group mb-3" >
                        <span class="input-group-text" id="selecciones">Selecciones favoritas:</span>
                        <select class="form-select-lg" id="seleccionesSelect" >                       
                                <option v-for="pais in paises" :key="paises.nombre">{{pais.nombre}}</option>
                        </select>
                        <textarea class="form-floating" id="seleccionesText"></textarea>
                    </div>
                    <div class="input-group mb-3">
                        <span class="input-group-text" id="pronostico">Pronostico del campeón:</span>
                        <select class="form-select-lg" id="pronosticoSelect">
                            <option  v-for="pais in paises" :key="paises.nombre">{{pais.nombre}}</option>
                        </select>
                        <textarea class="form-floating" id="pronosticoText"></textarea>
                    </div>
                    <div class="input-group mb-3">
                        <span class="input-group-text" id="infoadicional">Información adicional:</span>
                        <textarea class="form-floating p-5" id="infoadicionalText"></textarea>
                    </div>
                    <div class="input-group mb-3">
                        <button type="button" class="btn btn-dark">Guardar</button>
                        <button type="button" class="btn btn-danger">Cancelar</button>
                    </div>
                </div>
            <!--</form>-->
        </div>
    </div>
</template>
<script>
    import axios from 'axios'
    import PantallaPerfil from './PantallaPerfil.vue';

    export default{
        name: 'EditarPerfil',
        data(){
            return{
                paises:Array,
                users:Array
            }
        },
        created(){
            this.getPaises()
            this.getUsers()
        },
        methods:{
            async getPaises(){
                let url = 'http://fixture_qatar_backend.test/api/tabla-posiciones'
                await axios.get(url).then(response =>{
                    this.paises = response.data
                    console.log(this.paises)
                    //console.log(this.users.nombre)
                }).catch(error => {
                    console.log(error)
                })
            },
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