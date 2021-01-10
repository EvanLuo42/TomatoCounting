<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <h1>{{msg}}</h1>
    <router-link to="/helloworld">Go to helloworld</router-link>
    <router-link to="/vue">Go to vue</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      msg: 'Welcome!'
    }
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
  margin-top: 60px;
}
</style>
