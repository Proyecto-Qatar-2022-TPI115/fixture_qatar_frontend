<template>
  <Header title="Qatar 2022"/>
  <router-view></router-view>
</template>

<script>
import Header from './components/Header.vue'
import Goleadores from './components/Goleadores.vue'

export default {
  name: 'App',
  components: {
    Header
  }
}
</script>

<style>

</style>
