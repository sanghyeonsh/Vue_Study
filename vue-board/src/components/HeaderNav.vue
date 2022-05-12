<template>
  <div class="header">
    <router-link to="/"
      ><img src="@/assets/ssafy_logo.png" class="ssafy_logo"
    /></router-link>
    <router-link to="/login">로그인</router-link>
    <router-link :to="{ name: 'board' }">게시판</router-link>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
