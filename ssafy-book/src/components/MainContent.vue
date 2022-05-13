<template>
  <div>
    <h2>{{ msg }}</h2>
    <p>Main 화면입니다.</p>
  </div>
</template>

<script>
export default {
  name: "MainContent",
  props: {
    msg: String,
  },
};
</script>

<style></style>
