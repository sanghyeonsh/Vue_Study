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
        <router-link :to="'./modify?isbn=' + book.isbn" class="btn"
          >수정</router-link
        >
        <router-link :to="'./delete?isbn=' + book.isbn" class="btn"
          >삭제</router-link
        >
        <router-link to="/list" class="btn">목록</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: function () {
    return {
      book: {},
    };
  },
  created() {
    // axios의 get을 이용하여 서버와 비동기 통신.
    axios
      .get(`http://localhost:9999/vuews/book/${this.$route.query.isbn}`)
      .then(({ data }) => {
        this.book = data;
        console.log("책보기 완료!!!");
      });
  },
  methods: {
    async numberWithCommas(x) {
      console.log("숫자 컴마!!!");
      return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    },
    enterToBr(str) {
      return str.replace(/(?:\r\n|\r|\n)/g, "<br />");
    },
  },
};
</script>

<style></style>
