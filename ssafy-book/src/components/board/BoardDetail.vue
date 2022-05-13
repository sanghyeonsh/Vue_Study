<template>
  <div class="regist">
    <h1 class="underline">SSAFY 글 정보</h1>
    <div class="regist_form">
      <label for="articleno">글번호</label>
      <div class="view">{{ article.articleno }}</div>
      <label for="subject">제목</label>
      <div class="view">{{ article.subject }}</div>
      <label for="userid">작성자</label>
      <div class="view">{{ article.userid }}</div>
      <label for="price">작성일</label>
      <div class="view">{{ article.regtime }}</div>
      <label for="content">내용</label>
      <div class="view" v-html="article.content"></div>
      <div style="padding-top: 15px">
        <router-link
          :to="{ name: 'modify', params: { articleno: article.articleno } }"
          class="btn"
          >수정</router-link
        >
        <router-link
          :to="{ name: 'delete', params: { articleno: article.articleno } }"
          class="btn"
          >삭제</router-link
        >
        <router-link to="/board/list" class="btn">목록</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import http, { BOARD_URL } from "@/util/http-common";
export default {
  name: "BoardDetail",
  data: function () {
    return {
      article: {},
    };
  },
  created() {
    http
      .get(BOARD_URL + `/board/${this.$route.params.articleno}`)
      .then(({ data }) => {
        this.article = data;
      });
  },
};
</script>

<style></style>
