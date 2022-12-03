<template>
  <Header title="Qatar 2022"/>
  <router-view></router-view>
</template>

<script>
import Header from './components/Header.vue'

export default {
  name: 'App',
  components: {
    Header,
  }
}
</script>

<style>

</style>
