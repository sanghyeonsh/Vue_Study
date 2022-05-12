<template>
  <div id="app">
    <header-navi></header-navi>
    <!-- 현재 route에 맞는 component가 렌더링된다. -->
    <router-view></router-view>

  </div>
</template>

<script>
import HeaderNavi from "./components/common/HeaderNavi.vue";

export default {
  name: "app",
  component:{
    HeaderNavi,
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

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
