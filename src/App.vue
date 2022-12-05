<template>
  <Header titulo="Qatar 2022"/>
  <router-view></router-view>
</template>

<script>
import Header from './components/Header.vue'
import axios from 'axios'
export default {
  name: 'App',
  components: {
    Header,
  },
  data() {
    return {
      
    }
  }
}

export const HTTP = axios.create({
        baseURL: 'https://6308-190-62-20-113.ngrok.io',
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
          'Access-Control-Allow-Headers': 'X-Requested-With, Content-Type, X-Token-Auth, Authorization',
          'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
          'Access-Control-Allow-Origin': 'http://192.168.1.3:8080',
          'Content-Type': 'application/json',
          'Ngrok-Trace-Id':'*'
        }
    })
</script>

<style>

</style>
