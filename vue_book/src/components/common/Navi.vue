<template>
  <div>
    <div class="header">
      <div id="nav">
        <router-link to="/">Home</router-link> | <router-link to="/book">도서목록</router-link> |
        <router-link to="/about">About</router-link>
      </div>
      <router-link to="/">
        <img src="@/assets/ssafy_logo.png" class="ssafy_logo" />
      </router-link>
      <p class="logo">도서관리</p>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.ssafy_logo {
  width: 150px;
}
.header {
  text-align: center;
  box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.3);
}
.header img {
  vertical-align: middle;
}
.logo {
  display: inline-block;
  font-size: 30pt;
  font-weight: bold;
}
</style>
