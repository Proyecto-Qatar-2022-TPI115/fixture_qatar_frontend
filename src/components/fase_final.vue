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
                    <td>A1</td>
                    <td>{{fase_final(0).nombre}}</td>
                    <td>#</td>
                    <td colspan="18"></td>
                    <td>#</td>
                    <td>{{fase_final(4).nombre}}</td>
                    <td>B1</td>
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
                    <td>B2</td>
                    <td>{{fase_final(5).nombre}}</td>
                    <td>#</td>
                    <td colspan="18"></td>
                    <td>#</td>
                    <td>{{fase_final(1).nombre}}</td>
                    <td>A2</td>
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
                    <td>C1</td>
                    <td>{{fase_final(8).nombre}}</td>
                    <td>#</td>
                    <td colspan="18"></td>
                    <td>#</td>
                    <td>{{fase_final(12).nombre}}</td>
                    <td>D1</td>
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
                    <td>D2</td>
                    <td>{{fase_final(13).nombre}}</td>
                    <td>#</td>
                    <td colspan="18"></td>
                    <td>#</td>
                    <td>{{fase_final(9).nombre}}</td>
                    <td>C2</td>
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
                    <td>E1</td>
                    <td>{{fase_final(16).nombre}}</td>
                    <td>#</td>
                    <td colspan="18"></td>
                    <td>#</td>
                    <td>{{fase_final(20).nombre}}</td>
                    <td>F1</td>
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
                    <td>F2</td>
                    <td>{{fase_final(21).nombre}}</td>
                    <td>#</td>
                    <td colspan="18"></td>
                    <td>#</td>
                    <td>{{fase_final(17).nombre}}</td>
                    <td>E2</td>
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
                    <td>G1</td>
                    <td>{{fase_final(24).nombre}}</td>
                    <td>#</td>
                    <td colspan="18"></td>
                    <td>#</td>
                    <td>{{fase_final(28).nombre}}</td>
                    <td>H1</td>
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
                    <td>H2</td>
                    <td>{{fase_final(29).nombre}}</td>
                    <td>#</td>
                    <td colspan="18"></td>
                    <td>#</td>
                    <td>{{fase_final(25).nombre}}</td>
                    <td>G2</td>
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
               return {fase_final: Array 
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
            }            
            
        }
    
</script>
<style scoped>
    @import '../assets/css/estilos.css';
</style>