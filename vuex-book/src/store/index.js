import Vue from "vue";
import Vuex from "vuex";
import http from "@/util/http-common";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    books: [],
    book: null,
    comments: [],
  },
  getters: {
    books(state) {
      // 도서목록
      return state.books;
    },
    book(state) {
      // 도서정보
      return state.book;
    },
    comments(state) {
      // 도서평 목록
      return state.comments;
    },
  },
  mutations: {
    setBooks(state, payload) {
      // state의 books에 서버에서 얻어온 도서목록 세팅.
      state.books = payload;
    },
    setBook(state, payload) {
      // state의 book에 서버에서 얻어온 도서정보 세팅.
      state.book = payload;
    },
    setComments(state, payload) {
      // state의 comments에 서버에서 얻어온 도서평 목록 세팅.
      state.comments = payload;
    },
  },
  actions: {
    // 서버에서 도서목록을 얻고 mutation의 setBooks를 호출한다.
    getBooks(context) {
      http
        .get("/book")
        .then(({ data }) => {
          context.commit("setBooks", data);
        })
        .catch(() => {
          alert("에러발생!");
        });
    },
    // 서버에서 isbn에 해당하는 도서정보 얻고 mutation의 setBook을 호출한다.
    getBook(context, payload) {
      http.get(payload).then(({ data }) => {
        context.commit("setBook", data);
      });
    },
    // 서버에서 isbn에 해당하는 도서평을 얻고 mutation의 setComments를 호출한다.
    getComments(context, payload) {
      http.get(payload).then(({ data }) => {
        context.commit("setComments", data);
      });
    },
  },
});
