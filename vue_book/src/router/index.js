import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Book from "../views/Book.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    name: "book",
    path: "/book",
    component: Book,
    // 중첩 route 설정.
    children: [
      {
        path: "",
        name: "book-list",
        component: () => import("@/components/book/BookList.vue")
      },
      {
        path: "create",
        name: "book-create",
        component: () => import("@/components/book/BookCreate.vue")
      },
      {
        path: "view/:isbn",
        name: "book-view",
        component: () => import("@/components/book/BookView.vue")
      },
      {
        path: "modify/:isbn",
        name: "book-modify",
        component: () => import("@/components/book/BookModify.vue")
      }
    ],
    redirect: () => {
      return "/book";
    }
  },
  {
    path: "/about",
    name: "About",
    component: () => import("../views/About.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
