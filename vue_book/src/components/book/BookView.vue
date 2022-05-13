<template>
  <div class="regist">
    <h1 class="underline">SSAFY 도서 정보</h1>
    <div class="regist_form">
      <label for="isbn">도서번호</label>
      <div class="view">{{ book.isbn }}</div>
      <label for="title">도서명</label>
      <div class="view">{{ book.title }}</div>
      <label for="author">저자</label>
      <div class="view">{{ book.author }}</div>
      <label for="price">가격</label>
      <div class="view">{{ numberWithCommas(book.price) }}원</div>
      <label for="content">설명</label>
      <div class="view" v-html="enterToBr(book.content)"></div>
      <div style="padding-top: 15px">
        <router-link :to="`/book/modify/${book.isbn}`" class="btn">수정</router-link>
        <a href="#" class="btn" @click="deleteBook">삭제</a>
        <router-link to="/book" class="btn">목록</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      book: {}
    };
  },
  created() {
    // axios의 get을 이용하여 비동기방식으로 서버와 통신.
    axios.get(`http://localhost:9999/vuews/book/${this.$route.params.isbn}`).then(({ data }) => {
      this.book = data;
    });
  },
  methods: {
    deleteBook() {
      if (confirm("정말로 삭제?")) {
        // axios의 delete를 이용하여 비동기방식으로 서버와 통신.
        axios.delete(`http://localhost:9999/vuews/book/${this.book.isbn}`).then(({ data }) => {
          let msg = "삭제 처리시 문제가 발생했습니다.";
          if (data === "success") {
            msg = "삭제가 완료되었습니다.";
          }
          alert(msg);
          this.$router.push("/book");
        });
      }
    },
    numberWithCommas(x) {
      if (x) return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    },
    enterToBr(str) {
      if (str) return str.replace(/(?:\r\n|\r|\n)/g, "<br />");
    }
  }
};
</script>

<style scoped>
.regist {
  padding: 10px;
}
.regist_form {
  text-align: left;
  border-radius: 5px;
  background-color: #f2f2f2;
  padding: 20px;
}
input,
textarea,
.view {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  color: #787878;
  font-size: medium;
}
</style>
