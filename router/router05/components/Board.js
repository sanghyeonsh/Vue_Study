export default {
  template: `<div>
    자유 게시판
    <ul>
      <li v-for="i in 5">
        <a :href="'#' + i" @click="$router.push({name: 'boardview', params: {no: i}})">{{i}}번 게시글</a>
      </li>
    </ul>
  </div>`,
};
