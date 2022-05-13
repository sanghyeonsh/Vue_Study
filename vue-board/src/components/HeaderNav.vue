<template>
  <div class="header">
    <router-link to="/"
      ><img src="@/assets/ssafy_logo.png" class="ssafy_logo"
    /></router-link>
    <b-navbar-nav>
      <b-nav-item><router-link to="/login">로그인</router-link> </b-nav-item>
      <b-nav-item
        ><router-link :to="{ name: 'board' }">게시판</router-link></b-nav-item
      >
    </b-navbar-nav>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
