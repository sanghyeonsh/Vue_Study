export default {
  template: `<div>
    자유 게시판
    <ul>
      <li v-for="i in 5">
        <router-link :to="'/board/' + i">{{i}}번 게시글</router-link>
      </li>
    </ul>
  </div>`,
};
