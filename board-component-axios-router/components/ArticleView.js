export default {
  template: `
    <div class="regist">
        <h1 class="underline">SSAFY 글 정보</h1>
        <div class="regist_form">
          <label for="articleno">글번호</label>
          <div class="view">{{article.articleno}}</div>
          <label for="subject">제목</label>
          <div class="view">{{article.subject}}</div>
          <label for="userid">작성자</label>
          <div class="view">{{article.userid}}</div>
          <label for="price">작성일</label>
          <div class="view">{{article.regtime}}</div>
          <label for="content">내용</label>
          <div class="view" v-html="article.content"></div>
          <div style="padding-top: 15px">
          <router-link :to="'./modify?articleno=' + article.articleno" class="btn">수정</router-link>
          <router-link :to="'./delete?articleno=' + article.articleno" class="btn">삭제</router-link>
          <router-link to="/list" class="btn">목록</router-link>
          </div>
        </div>
    </div>
    `,
  data: function () {
    return {
      article: {},
    };
  },
  created() {
    axios
      .get(`http://localhost:9999/vue/board/${this.$route.query.articleno}`)
      .then(({ data }) => {
        this.article = data;
        console.log("글보기 완료!!!");
      });
  },
  methods: {},
};
