export default {
  template: `<div>
    {{no}}번 게시물 상세정보
    <router-link to="/board">목록</router-link>
   </div>`,
  data() {
    return {
      no: 0,
    };
  },
  created() {
    console.dir(this.$router); // 라우터 전체의 정보
    console.dir(this.$route); // 현재 호출된 해당 라우터 정보
    console.log(this.$route.params.no);
    console.log(this.$route.path);
    this.no = this.$route.params.no;
  },
};
