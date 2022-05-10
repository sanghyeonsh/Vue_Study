// 라우트 컴포넌트
import Main from './components/Main.js';
import Board from './components/Board.js';
import QnA from './components/QnA.js';
import Gallery from './components/Gallery.js';
// import NotFound from './components/NotFound.js';
import BoardView from './components/board/BoardView.js';
import BoardUpdate from './components/board/BoardUpdate.js';
import BoardWrite from './components/board/BoardWrite.js';
import BoardList from './components/board/BoardList.js';

// 라우터 객체 생성
const router = new VueRouter({
  mode: 'history',
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
      redirect: '/board/list',
      children: [
        {
          path: 'list',
          name: 'boardlist',
          component: BoardList,
        },
        {
          path: 'write',
          name: 'boardwrite',
          component: BoardWrite,
        },
        {
          path: 'detail/:no',
          name: 'boardview',
          component: BoardView,
        },
        {
          path: 'update/:no',
          name: 'boardupdate',
          component: BoardUpdate,
        },
      ],
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
    // {
    //   path: '/404',
    //   name: 'notFound',
    //   component: NotFound,
    // },
    // {
    //   path: '*',
    //   redirect: '/404',
    //   // component: NotFond
    // },
  ],
});

// Vue 인스턴트 라우터 주입
const app = new Vue({
  el: '#app',
  router,
});
