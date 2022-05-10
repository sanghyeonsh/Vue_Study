export default {
  template: `<div>
    <ul>
      <li v-for="i in 5">
        <router-link :to="'/board/detail/' + i">{{i}}번 게시글</router-link>
      </li>
    </ul>
    <router-link to="/board/write">등록</router-link>
  </div>`,
};
