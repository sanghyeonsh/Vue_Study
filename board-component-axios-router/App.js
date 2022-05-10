import MainContent from "./components/MainContent.js";
import ArticleRegister from "./components/ArticleRegister.js";
import ArticleList from "./components/ArticleList.js";
import ArticleView from "./components/ArticleView.js";
import ArticleModify from "./components/ArticleModify.js";
import ArticleDelete from "./components/ArticleDelete.js";

Vue.use(VueRouter);
export default new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "main",
      component: MainContent
    },
    {
      path: "/list",
      name: "list",
      component: ArticleList
    },
    {
      path: "/register",
      name: "register",
      component: ArticleRegister
    },
    {
      path: "/view",
      name: "view",
      component: ArticleView
    },
    {
      path: "/modify",
      name: "modify",
      component: ArticleModify
    },
    {
      path: "/delete",
      name: "delete",
      component: ArticleDelete
    }
  ]
});
