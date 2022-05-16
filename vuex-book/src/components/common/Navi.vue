<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="dark">
      <b-navbar-brand href="#">
        <router-link to="/">
          <img
            src="@/assets/ssafy_logo.png"
            class="d-inline-block align-middle"
            width="90px"
            alt="Kitten"
          />
        </router-link>
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item href="#"
            ><router-link to="/" class="link">HOME</router-link></b-nav-item
          >
          <b-nav-item href="#"
            ><router-link to="/book" class="link"
              >도서목록</router-link
            ></b-nav-item
          >
          <b-nav-item href="#"
            ><router-link to="/about" class="link"
              >About</router-link
            ></b-nav-item
          >
        </b-navbar-nav>

        <b-navbar-nav class="ml-auto">
          <b-nav-item-dropdown right>
            <template #button-content>
              <b-icon icon="camera" font-scale="3"></b-icon>
            </template>
            <b-dropdown-item href="#">회원가입</b-dropdown-item>
            <b-dropdown-item href="#">로그인</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.link {
  color: azure;
}

.link:hover {
  color: rgba(27, 177, 231, 1);
  text-decoration-line: none;
}
</style>
