<template>
  <b-row v-if="this.modifyComment != null" class="mb-3 mt-2">
    <b-col cols="10">
      <b-form-textarea
        id="comment"
        placeholder="도서평 입력..."
        v-model="modifyComment.comment"
        rows="2"
      ></b-form-textarea>
    </b-col>
    <b-col>
      <b-button variant="outline-info" class="mr-2 h-100" @click="updateComment"
        >수정</b-button
      >
      <b-button
        variant="outline-danger"
        class="h-100"
        @click="updateCommentCancel"
        >취소</b-button
      >
    </b-col>
  </b-row>
  <b-row v-else class="mb-3 mt-2">
    <b-col cols="11">
      <b-form-textarea
        id="comment"
        placeholder="도서평 입력..."
        v-model="comment"
        rows="2"
      ></b-form-textarea>
    </b-col>
    <b-col
      ><b-button variant="dark" class="h-100" @click="registComment"
        >등록</b-button
      ></b-col
    >
  </b-row>
</template>

<script>
import http from "@/util/http-common";

export default {
  name: "commentwrite",
  data() {
    return {
      // 차후 작성자 이름은 로그인 구현후 로그인한 사용자로 바꾼다.
      user_name: "안효인",
      comment: "",
    };
  },
  props: {
    isbn: { type: String },
    modifyComment: { type: Object },
  },
  methods: {
    registComment() {
      http
        .post("/comment/", {
          user_name: this.user_name,
          comment: this.comment,
          isbn: this.isbn,
        })
        .then(({ data }) => {
          let msg = "등록 처리시 문제가 발생했습니다.";
          if (data === "success") {
            msg = "등록이 완료되었습니다.";
          }
          alert(msg);

          // 작성글 지우기
          this.comment = "";

          // 도서평(댓글) 얻기.
          this.$store.dispatch("getComments", `/comment/${this.isbn}`);
        });
    },
    updateComment() {
      http
        .put(`/comment`, {
          comment_no: this.modifyComment.comment_no,
          comment: this.modifyComment.comment,
        })
        .then(({ data }) => {
          let msg = "수정 처리시 문제가 발생했습니다.";
          if (data === "success") {
            msg = "수정이 완료되었습니다.";
          }
          alert(msg);

          // 도서평(댓글) 얻기.
          this.$store.dispatch(
            "getComments",
            // eslint-disable-next-line prettier/prettier
            `/comment/${this.modifyComment.isbn}`
          );
          this.$emit("modify-comment-cancel", false);
        });
    },
    updateCommentCancel() {
      this.$emit("modify-comment-cancel", false);
    },
  },
};
</script>
