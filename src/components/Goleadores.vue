<template>
    <div class="container-fluid">
        <section class="u-align-center u-clearfix u-image u-image-tiles u-shading u-section-1" id="carousel_0faa"
        data-image-width="454" data-image-height="476">
        <div class="u-clearfix u-sheet u-sheet-1">
        <h2 class="u-custom-font u-font-source-sans-pro u-text u-text-1">Maximos Goleadores:</h2>
        <p class="u-text u-text-2">Lista de los maximos goleadores del mundial Qatar 2022
        </p>
        <img class="u-image u-image-default u-image-1" src="https://cloud10.todocoleccion.online/cromos-futbol/tc/2022/09/09/20/360199190.jpg
" alt="" data-image-width="720"
            data-image-height="998">
        <div class="u-table u-table-responsive u-table-1">
            <table class="u-table-entity">
            <colgroup>
                <col width="24.54%">
                <col width="23.5%">
                <col width="22.06%">
                <col width="3.79%">
                <col width="26.11%">
            </colgroup>
            <thead class="u-palette-5-dark-3 u-table-header u-table-header-1">
                <tr style="height: 74px;">
                <th
                    class="u-border-2 u-border-no-left u-border-no-right u-border-no-top u-border-palette-5-dark-1 u-table-cell u-table-cell-1">
                    Nombre</th>
                <th
                    class="u-border-2 u-border-no-left u-border-no-right u-border-no-top u-border-palette-5-dark-1 u-table-cell u-table-cell-2">
                    Apellido</th>
                <th
                    class="u-border-2 u-border-no-left u-border-no-right u-border-no-top u-border-palette-5-dark-1 u-table-cell u-table-cell-3">
                    País</th>
                <th
                    class="u-border-2 u-border-no-left u-border-no-right u-border-no-top u-border-palette-5-dark-1 u-table-cell u-table-cell-4">
                    Goles</th>
                <th
                    class="u-border-2 u-border-no-left u-border-no-right u-border-no-top u-border-palette-5-dark-1 u-table-cell u-table-cell-5">
                    Foto</th>
                </tr>
            </thead>
            <tbody class="u-black u-table-body u-table-body-1">
                <tr v-for="goleador in goleadores" :key="goleador.id" style="height: 140px;">
                    <th class="u-border-1 u-border-palette-5-dark-1 u-table-cell u-table-cell-6">
                        <br>{{goleador.nombre}}
                    </th>
                    <th class="u-border-1 u-border-palette-5-dark-1 u-table-cell u-table-cell-6">
                        <br>{{goleador.apellido}}
                    </th>
                    <th class="u-border-1 u-border-palette-5-dark-1 u-table-cell u-table-cell-7">{{goleador.pais}}</th>
                    <th class="u-border-1 u-border-palette-5-dark-1 u-table-cell u-table-cell-8">{{goleador.cantidad}}</th>
                    <th class="u-border-1 u-border-palette-5-dark-1 u-table-cell u-table-cell-10"></th>
                </tr>
            </tbody>
            </table>
        </div>
        
        <img class="u-image u-image-round u-radius-30 u-image-2"
            src="http://heavy.com/wp-content/uploads/2014/06/miroslavfact3.jpg"
            alt="" data-image-width="918" data-image-height="1390">
        <img class="u-image u-image-round u-radius-29 u-image-3" src="https://media.tycsports.com/files/2020/05/19/99598/ronaldo.jpg" alt=""
            data-image-width="1066" data-image-height="1600">
        <img class="u-image u-image-round u-radius-29 u-image-4" src="https://pbs.twimg.com/media/DfvV8X6UEAQNShl.jpg:large" alt=""
            data-image-width="1080" data-image-height="1498">
        <img class="u-image u-image-round u-radius-30 u-image-5" src="https://i.pinimg.com/originals/a2/fd/9e/a2fd9eb98dced8e6b5d4c957aac4db7e.jpg" alt=""
            data-image-width="918" data-image-height="1230">
        </div>
    </section>
    </div>
    <div class="container-fluid">
        <section class="u-align-center u-clearfix u-image u-image-tiles u-shading u-section-1" id="carousel_0faa"
        data-image-width="454" data-image-height="476">
        <div class="u-clearfix u-sheet u-sheet-1">
        <h2 class="u-custom-font u-font-source-sans-pro u-text u-text-1">Maximos Asistidores:</h2>
        <p class="u-text u-text-2">Lista de los maximos asistidores mundial Qatar 2022</p>
        <img class="u-image u-image-default u-image-1" src="https://cloud10.todocoleccion.online/cromos-futbol/tc/2022/09/09/20/360199190.jpg
" alt="" data-image-width="720"
            data-image-height="998">
        <div class="u-table u-table-responsive u-table-1">
            <table class="u-table-entity">
            <colgroup>
                <col width="24.54%">
                <col width="23.5%">
                <col width="22.06%">
                <col width="3.79%">
                <col width="26.11%">
            </colgroup>
            <thead class="u-palette-5-dark-3 u-table-header u-table-header-1">
                <tr style="height: 74px;">
                <th
                    class="u-border-2 u-border-no-left u-border-no-right u-border-no-top u-border-palette-5-dark-1 u-table-cell u-table-cell-1">
                    Nombre</th>
                <th
                    class="u-border-2 u-border-no-left u-border-no-right u-border-no-top u-border-palette-5-dark-1 u-table-cell u-table-cell-2">
                    Apellido</th>
                <th
                    class="u-border-2 u-border-no-left u-border-no-right u-border-no-top u-border-palette-5-dark-1 u-table-cell u-table-cell-3">
                    País</th>
                <th
                    class="u-border-2 u-border-no-left u-border-no-right u-border-no-top u-border-palette-5-dark-1 u-table-cell u-table-cell-4">
                    Asistencias</th>
                <th
                    class="u-border-2 u-border-no-left u-border-no-right u-border-no-top u-border-palette-5-dark-1 u-table-cell u-table-cell-5">
                    Foto</th>
                </tr>
            </thead>
            <tbody class="u-black u-table-body u-table-body-1">
                <tr v-for="asistidor in asistidores" :key="asistidor.id" style="height: 140px;">
                    <th class="u-border-1 u-border-palette-5-dark-1 u-table-cell u-table-cell-6">
                        <br>{{asistidor.nombre}}
                    </th>
                    <th class="u-border-1 u-border-palette-5-dark-1 u-table-cell u-table-cell-6">
                        <br>{{asistidor.apellido}}
                    </th>
                    <th class="u-border-1 u-border-palette-5-dark-1 u-table-cell u-table-cell-7">{{asistidor.pais}}</th>
                    <th class="u-border-1 u-border-palette-5-dark-1 u-table-cell u-table-cell-8">{{asistidor.cantidad}}</th>
                    <th class="u-border-1 u-border-palette-5-dark-1 u-table-cell u-table-cell-10"></th>
                </tr>
            </tbody>
            </table>
        </div>
        
        <img class="u-image u-image-round u-radius-30 u-image-2"
            src="https://static01.nyt.com/images/2020/12/01/opinion/04rotulo-ES-1/01rotulo-01-mobileMasterAt3x.jpg"
            alt="" data-image-width="918" data-image-height="1390">
        <img class="u-image u-image-round u-radius-29 u-image-3" src="https://www.agon-sportsworld.de/media/image/6b/ba/7f/BC2063_600x600.jpg" alt=""
            data-image-width="1066" data-image-height="1600">
        <img class="u-image u-image-round u-radius-29 u-image-4" src="https://1.bp.blogspot.com/-TSZoh57AoLo/WsqWYZW68RI/AAAAAAAACG4/BZcTSat76dcOYervGEMoCWjeb59zsbCigCLcBGAs/s1600/3dyb.jpg" alt=""
            data-image-width="1080" data-image-height="1498">
        <img class="u-image u-image-round u-radius-30 u-image-5" src="https://cdn.vox-cdn.com/thumbor/cEi_rkyKXNRUjDHYgG9lPJtqbhs=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/22914936/1345738164.jpg" alt=""
            data-image-width="918" data-image-height="1230">        
        </div>
    </section>
    </div>
</template>

<script>
    import axios from 'axios'

    export default {
        name: 'Goleadores',
        name1: 'Asistidores',
        data() {
            return {
                goleadores: Array,
                asistidores: Array
            }
        },
        created() {
            this.getGoleadores()
            this.getAsistidores()
        }, 
        methods: {
            async getGoleadores() {
                let url = 'http://fixture_qatar_backend.test/api/maximos-goleadores'
                await axios.get(url).then(response =>{
                    this.goleadores = response.data.goleadores
                    console.log(this.goleadores)
                }).catch(error => {
                    console.log(error)
                })
            },

            async getAsistidores() {
                let url = 'http://fixture_qatar_backend.test/api/maximos-asistidores'
                await axios.get(url).then(response =>{
                    this.asistidores = response.data.asistidores
                    console.log(this.asistidores)
                }).catch(error => {
                    console.log(error)
                })
            }
        },
        mounted() {

        }

    }
</script>
<style scoped>
    @import '../assets/css/Goleadores.css';
</style>