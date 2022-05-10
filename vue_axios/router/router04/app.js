// 라우트 컴포넌트
import Main from './components/Main.js';
import Board from './components/Board.js';
import QnA from './components/QnA.js';
import Gallery from './components/Gallery.js';
import BoardView from './components/BoardView.js';

// 라우터 객체 생성
const router = new VueRouter({
  routes: [
    {
      path: '/',
      name: 'main',
      component: Main,
    },
    {
      path: '/board',
      name: 'board',
      component: Board,
    },
    {
      path: '/board/:no',
      name: 'boardview',
      component: BoardView,
    },
    {
      path: '/qna',
      name: 'qna',
      component: QnA,
    },
    {
      path: '/gallery',
      name: 'gallery',
      component: Gallery,
    },
  ],
});

// Vue 인스턴트 라우터 주입
const app = new Vue({
  el: '#app',
  router,
});
