<template>
  <Header v-if="isLogin" titulo="Qatar 2022"/>
  <router-view></router-view>
</template>

<script>
import Header from './components/Header.vue'

export default {
  name: 'App',
  components: {
    Header,
  },
  data() {
    return {
      isLogin: true
    }
  }
}
</script>

<style>

</style>
