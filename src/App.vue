<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  /* margin-top: 20px; */
  padding: 20px;
  height: 100%;
}
.title {
  margin: 0 0 10px;
  border-bottom: 1px solid #ccc;
  padding: 5px 0;
  height: 24px;
  line-height: 24px;
  font-size: 24px;
}

.btnList {
  margin-bottom: 10px;
}
</style>
