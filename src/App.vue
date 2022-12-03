<template>
  <Header title="Qatar 2022"/>
  <router-view></router-view>
</template>

<script>
import Header from './components/Header.vue'
import fase_final from './components/fase_final.vue';

export default {
  name: 'App',
  components: {
    Header,
    fase_final
  }
}
</script>

<style>

</style>
