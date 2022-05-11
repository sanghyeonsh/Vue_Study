import MainContent from "./components/MainContent.js";
import BookCreate from "./components/BookCreate.js";
import BookList from "./components/BookList.js";
import BookView from "./components/BookView.js";
import BookModify from "./components/BookModify.js";
import BookDelete from "./components/BookDelete.js";

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
  ]
});
