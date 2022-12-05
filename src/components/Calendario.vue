<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col"></div>
            <div class="col-8">
                <h1>Calendario</h1>

                <table class="table table-hover">
                    <thead>
                        <tr>
                            <th scope="col">Fecha</th>
                            <th scope="col">Hora</th>
                            <th scope="col">Local</th>
                            <th scope="col">Visita</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="table-secondary" v-for="partido in calendario" :key="partido.id">
                            <th scope="col">{{ partido.fecha }}</th>
                            <th scope="col">{{ partido.hora }}</th>
                            <th scope="col">{{ partido.local }}</th>
                            <th scope="col">{{ partido.visita }}</th>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div class="col"></div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios'

    /*export default {
        name: 'Calendario',
        data() {
                return {
                    calendario: Array
                }
            },
            created() {
                this.getCalendario()
            }, 
            methods: {
                async getCalendario() {
                    let url = 'https://6308-190-62-20-113.ngrok.io/api/calendario'
                    await axios.get(url).then(response =>{
                        this.calendario = response.data.calendario
                        console.log(this.calendario)
                    }).catch(error => {
                        console.log(error)
                    })
                }
            },
    }*/
    import {HTTP} from "../App.vue"

    export default {
            data() {
                return {
                    calendario: [],
                    errors: [],
                };
            },
    
            // Pulls posts when the component is created.

            created() {
                HTTP
                    .get('https://6308-190-62-20-113.ngrok.io/api/calendario')
                    .then((response) => {
                        // JSON responses are automatically parsed.
                        this.calendario = response.data.calendario;
                    })
                    .catch((e) => {
                        this.errors.push(e);
                    });
                    
            }
        };
        

</script>


<style scoped>
    @import '../assets/css/Partidos.css';
</style>