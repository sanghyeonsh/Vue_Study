<template>
  <div id="app">
    <navi />
    <router-view />
  </div>
</template>

<script>
import Navi from "@/components/common/Navi";

export default {
  name: "home",
  components: {
    Navi,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.underline {
  display: inline-block;
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0) 70%,
    rgba(27, 177, 231, 1) 40%
  );
}
</style>
