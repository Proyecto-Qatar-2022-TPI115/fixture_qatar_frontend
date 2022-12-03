<template>
    <div class="container-fluid">
        <table class="tablafinal">
                    <thead>
                    <tr>
                        <th colspan="3">OCTAVOS</th>
                        <th colspan="3">CUARTOS</th>
                        <th colspan="3">SEMIFINAL</th>
                        <th colspan="6">FINAL</th>
                        <th colspan="3">SEMIFINAL</th>
                        <th colspan="3">CUARTOS</th>
                        <th colspan="3">OCTAVOS</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td v-for = "(fase_final) in fase_final.slice(0,1)">{{fase_final.nombre}}</td>
                        <td>A1</td>
                        <td>#</td>
                        <td colspan="18"></td>
                        <td>#</td>
                        <td>B1</td>
                        <td v-for = "(fase_final) in fase_final.slice(4,5)">{{fase_final.nombre}}</td>
                    </tr>
                    <tr>
                        <td colspan="3"></td>
                        <td>A1</td>
                        <td>#</td>
                        <td>#</td>
                        <td colspan="12"></td>
                        <td>#</td>
                        <td>#</td>
                        <td>B1</td>
                    </tr>
                    <tr>
                        <td v-for="(fase_final) in fase_final.slice(5,6)">{{fase_final.nombre}}</td>
                        <td>B2</td>
                        <td>#</td>
                        <td colspan="18"></td>
                        <td>#</td>
                        <td>A2</td>
                        <td v-for="(fase_final) in fase_final.slice(1,2)">{{fase_final.nombre}}</td>
                    </tr>
                    <tr>
                        <td colspan="3"></td>
                    </tr>
                    <tr>
                        <td colspan="6"></td>
                        <td>C1</td>
                        <td>#</td>
                        <td>#</td>
                        <td colspan="6"></td>
                        <td>#</td>
                        <td>#</td>
                        <td>D1</td>
                    </tr>
                    <tr>
                        <td colspan="3"></td>
                    </tr>
                    <tr>
                        <td v-for="(fase_final) in fase_final.slice(8,9)">{{fase_final.nombre}}</td>
                        <td>C1</td>
                        <td>#</td>
                        <td colspan="18"></td>
                        <td>#</td>
                        <td>D1</td>
                        <td v-for="(fase_final) in fase_final.slice(12,13)">{{fase_final.nombre}}</td>
                    </tr>
                    <tr>
                        <td colspan="3"></td>
                        <td>C1</td>
                        <td>#</td>
                        <td>#</td>
                        <td colspan="12"></td>
                        <td>#</td>
                        <td>#</td>
                        <td>D1</td>
                    </tr>
                    <tr>
                        <td v-for="(fase_final) in fase_final.slice(13,14)">{{fase_final.nombre}}</td>
                        <td>D2</td>
                        <td>#</td>
                        <td colspan="18"></td>
                        <td>#</td>
                        <td>C2</td>
                        <td v-for="(fase_final) in fase_final.slice(9,10)">{{fase_final.nombre}}</td>
                    </tr>
                    <tr>
                        <td colspan="3"></td>
                    </tr>
                    <tr>
                        <td colspan="9"></td>
                        <td>C1</td>
                        <td>#</td>
                        <td>#</td>
                        <td>#</td>
                        <td>#</td>
                        <td>E2</td>
                    </tr>
                    <tr>
                        <td colspan="3"></td>
                    </tr>
                    <tr>
                        <td v-for="(fase_final) in fase_final.slice(16,17)">{{fase_final.nombre}}</td>
                        <td>E1</td>
                        <td>#</td>
                        <td colspan="18"></td>
                        <td>#</td>
                        <td>F1</td>
                        <td v-for="(fase_final) in fase_final.slice(20,21)">{{fase_final.nombre}}</td>
                    </tr>
                    <tr>
                        <td colspan="3"></td>
                        <td>E1</td>
                        <td>#</td>
                        <td>#</td>
                        <td colspan="12"></td>
                        <td>#</td>
                        <td>#</td>
                        <td>E2</td>
                    </tr>
                    <tr>
                        <td v-for="(fase_final) in fase_final.slice(21,22)">{{fase_final.nombre}}</td>
                        <td>F2</td>
                        <td>#</td>
                        <td colspan="18"></td>
                        <td>#</td>
                        <td>E2</td>
                        <td v-for="(fase_final) in fase_final.slice(17,18)">{{fase_final.nombre}}</td>
                    </tr>
                    <tr>
                        <td colspan="3"></td>
                    </tr>
                    <tr>
                        <td colspan="6"></td>
                        <td>G1</td>
                        <td>#</td>
                        <td>#</td>
                        <td colspan="6"></td>
                        <td>#</td>
                        <td>#</td>
                        <td>E2</td>
                    </tr>
                    <tr>
                        <td colspan="3"></td>
                    </tr>
                    <tr>
                        <td v-for="(fase_final) in fase_final.slice(24,25)">{{fase_final.nombre}}</td>
                        <td>G1</td>
                        <td>#</td>
                        <td colspan="18"></td>
                        <td>#</td>
                        <td>H1</td>
                        <td v-for="(fase_final) in fase_final.slice(28,29)">{{fase_final.nombre}}</td>
                    </tr>
                    <tr>
                        <td colspan="3"></td>
                        <td>G1</td>
                        <td>#</td>
                        <td>#</td>
                        <td colspan="12"></td>
                        <td>#</td>
                        <td>#</td>
                        <td>H1</td>
                    </tr>
                    <tr>
                        <td v-for="(fase_final) in fase_final.slice(29,30)">{{fase_final.nombre}}</td>
                        <td>H2</td>
                        <td>#</td>
                        <td colspan="18"></td>
                        <td>#</td>
                        <td>G2</td>
                        <td v-for="(fase_final) in fase_final.slice(25,26)">{{fase_final.nombre}}</td>
                    </tr>
                </tbody>
            </table>
        </div>    
    <div class="iconoImagen">
        <img src="https://hiraoka.com.pe/media/mageplaza/blog/post/t/a/tabla_de_posiciones-qatar_2022.jpg" style="width: 900px">
    </div>
</template>
<script>
    import axios from 'axios'

    export default{
        name:'fase_final',
        data(){
            return {
                fase_final: Array,
            }
            },
        created(){
                this.getFinal()
            },
        methods:{
                async getFinal(){
                    let url='http://fixture_qatar_backend.test/api/tabla-posiciones'
                    await axios.get(url).then(response=>{
                        this.fase_final=response.data
                        console.log(this.fase_final)
                    }).catch(error=>{
                        console.log(error)
                    })
                }
            },
        computed:{
                
            }            
        }
    
</script>
<style scoped>
    @import '../assets/css/estilos.css';
</style>