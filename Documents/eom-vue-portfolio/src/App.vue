<template>
  <navbar>
  </navbar>
  <router-view/>
  <footerCom/>
</template>
<script>
import navbar from './components/navbar.vue'
import footerCom from './components/footerCom.vue'
export default {
  name: 'App',
  components: {
    navbar,
    footerCom,
  }
}

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

::-webkit-scrollbar {
  display: none;
}
</style>
