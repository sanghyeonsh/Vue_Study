export default {
  template: `
    <div class="regist">
        <h1 class="underline">SSAFY 글 목록</h1>
        <div style="text-align: right">
            <button @click="movePage">글 등록</button>
        </div>
        <div v-if="articles.length">
            <table id="book-list">
                <colgroup>
                    <col style="width: 5%" />
                    <col style="width: 45%" />
                    <col style="width: 25%" />
                    <col style="width: 25%" />
                </colgroup>
                <thead>
                <tr>
                    <th>글번호</th>
                    <th>제목</th>
                    <th>작성자</th>
                    <th>작성일</th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="(article, index) in articles" :key="index">
                    <td>{{article.articleno}}</td>
                    <td><router-link :to="'view?articleno=' + article.articleno">{{article.subject}}</router-link></td>
                    <td>{{article.userid}}</td>
                    <td>{{article.regtime}}</td>
                </tr>
                </tbody>
            </table>
        </div>
        <div v-else class="text-center">게시글이 없습니다.</div>
    </div>
    `,
  data() {
    return {
      articles: [],
    };
  },
  created() {
    axios.get("http://localhost:9999/vue/board").then(({ data }) => {
      this.articles = data;
    });
  },
  methods: {
    movePage() {
      this.$router.push("/register");
    },
  },
};
