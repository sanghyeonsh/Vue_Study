<template>
  <b-container class="bv-example-row mt-3">
    <b-row>
      <b-col>
        <h3 class="underline">도서정보보기</h3>
      </b-col>
    </b-row>
    <b-row class="mb-1">
      <b-col class="text-left">
        <b-button variant="outline-primary" class="w-30" @click="listBook"
          >목록</b-button
        >
      </b-col>
      <b-col class="text-right">
        <b-button
          variant="outline-info"
          size="sm"
          class="w-30 mr-2"
          @click="moveModifyBook"
          >글수정</b-button
        >
        <b-button
          variant="outline-danger"
          size="sm"
          class="w-30"
          @click="deleteBook"
          >글삭제</b-button
        >
      </b-col>
    </b-row>
    <!-- 도서정보 상세보기 Component -->
    <view-detail :book="book" />
    <comment-write :isbn="this.isbn" />
    <comment-write
      v-if="isModifyShow && this.modifyComment != null"
      :modifyComment="this.modifyComment"
      @modify-comment-cancel="onModifyCommentCancel"
    />
    <comment
      v-for="(comment, index) in comments"
      :key="index"
      :comment="comment"
      @modify-comment="onModifyComment"
    />
  </b-container>
</template>

<script>
import { mapGetters } from "vuex";
import ViewDetail from "@/components/book/include/ViewDetail.vue";
import CommentWrite from "@/components/book/include/comment/CommentWrite.vue";
import Comment from "@/components/book/include/comment/Comment.vue";
import http from "@/util/http-common";

export default {
  name: "bookview",
  data() {
    return {
      isbn: "",
      isModifyShow: false,
      modifyComment: Object,
    };
  },
  computed: {
    // vuex의 getters에 등록된 함수 얻기.
    ...mapGetters(["book", "comments"]),
  },
  components: {
    ViewDetail,
    CommentWrite,
    Comment,
  },
  created() {
    // url이 query에서 isbn 얻기.
    this.isbn = this.$route.query.isbn;

    // 도서 정보 얻기.
    this.$store.dispatch("getBook", `/book/${this.isbn}`);

    // 도서평(댓글) 얻기.
    this.$store.dispatch("getComments", `/comment/${this.isbn}`);
  },
  methods: {
    listBook() {
      this.$router.push("/book");
    },
    moveModifyBook() {
      this.$router.push(`/book/modify/${this.isbn}`);
    },
    deleteBook() {
      if (confirm("정말로 삭제?")) {
        http.delete(`/book/${this.isbn}`).then(({ data }) => {
          let msg = "삭제 처리시 문제가 발생했습니다.";
          if (data === "success") {
            msg = "삭제가 완료되었습니다.";
          }
          alert(msg);
          this.$router.push("/book");
        });
      }
    },
    onModifyComment(comment) {
      this.modifyComment = comment;
      this.isModifyShow = true;
    },
    onModifyCommentCancel(isShow) {
      this.isModifyShow = isShow;
    },
  },
};
</script>
