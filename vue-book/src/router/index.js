import Vue from "vue";
import VueRouter from "vue-router";
import BookList from "../components/BookList.vue";
import BookView from "../components/BookView.vue";
import BookModify from "../components/BookModify.vue";
import BookDelete from "../components/BookDelete.vue";


Vue.use(VueRouter);

const routes = [

  {
    path: "/list",
    name: "list",
    component: BookList
  },
  {
    path: "/create",
    name: "create",
    component: BookCreate
  },
  {
    path: "/view",
    name: "view",
    component: BookView
  },
  {
    path: "/modify",
    name: "modify",
    component: BookModify
  },
  {
    path: "/delete",
    name: "delete",
    component: BookDelete
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
