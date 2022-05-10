export default {
  template: `<div>
      {{no}}번 게시물 수정폼
      <hr>
      <router-link :to="{name: 'boardlist'}">목록</router-link>
   </div>`,
  data() {
    return {
      no: 0,
    };
  },
  created() {
    this.no = this.$route.params.no;
  },
};
