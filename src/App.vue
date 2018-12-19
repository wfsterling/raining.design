<template>
  <div id="app">
    <Home msg="Raining Design :: William Sterling"/>
  </div>
</template>

<script>
import Home from './components/Home.vue'

export default {
  name: 'app',
  components: {
    Home
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Open+Sans+Condensed:300|Source+Sans+Pro:300,300i,400,400i,700');
#app {
  font-family: 'Source Sans Pro', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
li.lh {
  font-weight: bold;
}
</style>
