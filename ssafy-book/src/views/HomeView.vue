<template>
  <div class="home">
    <main-content :msg="msg" />
  </div>
</template>

<script>
// @ is an alias to /src
import MainContent from "@/components/MainContent.vue";

export default {
  name: "HomeView",
  components: {
    MainContent,
  },
  data() {
    return {
      msg: "SSAFY에 오신걸 환영합니다.",
    };
  },
};
</script>
