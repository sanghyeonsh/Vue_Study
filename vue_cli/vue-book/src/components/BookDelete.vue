<template>
  <div>
    <h1>SSAFY 도서 삭세</h1>
    <div>삭제중...</div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  created() {
    // axios의 delete를 이용하여 서버와 비동기 통신.
    axios
      .delete(`http://localhost:9999/vuews/book/${this.$route.query.isbn}`)
      .then(({ data }) => {
        let msg = "삭제 처리시 문제가 발생했습니다.";
        if (data === "success") {
          msg = "삭제가 완료되었습니다.";
        }
        alert(msg);
        // 현재 route를 /list로 변경.
        this.$router.push("/list");
      });
  },
};
</script>

<style></style>
