export default {
  template: `<div>
    {{no}}번 게시물 상세정보
    <a href="#board" @click="$router.push('/board')">게시판</a>
   </div>`,
  data() {
    return {
      no: 0,
    };
  },
  created() {
    console.dir(this.$route); // 현재 호출된 해당 라우터 정보
    this.no = this.$route.params.no;
  },
};
