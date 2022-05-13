import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import LoginView from "../views/LoginView.vue";
import BookView from "../views/BookView.vue";
import BoardView from "../views/BoardView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    name: "book",
    path: "/book",
    component: BookView,
    redirect: "/book",
    // 중첩 route 설정.
    children: [
      {
        path: "",
        name: "book-list",
        component: () => import("@/components/book/BookList.vue"),
      },
      {
        path: "create",
        name: "book-create",
        component: () => import("@/components/book/BookCreate.vue"),
      },
      {
        path: "view/:isbn",
        name: "book-view",
        component: () => import("@/components/book/BookView.vue"),
      },
      {
        path: "modify/:isbn",
        name: "book-modify",
        component: () => import("@/components/book/BookModify.vue"),
      },
    ],
  },
  {
    path: "/login",
    name: "login",
    component: LoginView,
  },
  {
    path: "/board",
    name: "board",
    component: BoardView,
    redirect: "/board/list",
    children: [
      {
        path: "list",
        name: "list",
        component: () => import("@/components/board/BoardList.vue"),
      },
      {
        path: "write",
        name: "write",
        component: () => import("@/components/board/BoardWrite.vue"),
      },
      {
        path: "detail/:articleno",
        name: "detail",
        component: () => import("@/components/board/BoardDetail.vue"),
      },
      {
        path: "modify/:articleno",
        name: "modify",
        component: () => import("@/components/board/BoardModify.vue"),
      },
      {
        path: "delete/:articleno",
        name: "delete",
        component: () => import("@/components/board/BoardDelete.vue"),
      },
    ],
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
