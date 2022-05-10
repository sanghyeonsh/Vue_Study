export default {
  template: `<div>
    {{no}}번 게시물 상세정보
    <hr>
    
    <div>
      <router-link :to="{name: 'boardlist'}">목록</router-link>
      <router-link :to="'/board/update/' + no">수정</router-link>
    </div>
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
