import Vue from "vue";
import Vuex from "vuex";
import router from "@/router";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    users: [],
    searchUsers: [],
    user: null,
    loginUser: null,
    randomUser: null,
  },
  getters: {
    userCnt: function (state) {
      return state.users.length;
    },
    searchUserCnt: function (state) {
      return state.searchUsers.length > 0 ? state.searchUsers.length : null;
    },
  },
  mutations: {
    CREATE_USER: function (state, user) {
      state.users.push(user);
    },
    SET_USERS: function (state, users) {
      state.users = users;
    },
    SET_USER: function (state, user) {
      state.user = user;
    },
    SEARCH_NAME: function (state, users) {
      state.searchUsers = users;
    },
    SET_LOGIN_USER: function (state, user) {
      state.loginUser = user;
    },
    LOGOUT: function (state) {
      state.loginUser = null;
    },
    SET_RANDOM_USER: function (state, user) {
      state.randomUser = user;
    },
  },
  actions: {
    // 사용자 등록
    createUser: function ({ commit }, user) {
      const API_URL = `http://localhost:8080/user/`;
      axios({
        url: API_URL,
        method: "POST",
        params: user,
      })
        .then(() => {
          // mutation
          commit("CREATE_USER", user);
          alert("등록되었습니다.");
          router.push("/user");
        })
        .catch((err) => {
          console.log(err);
        });
    },
    // 전체 사용자 목록 가져오기
    setUsers: function ({ commit }) {
      const API_URL = `http://localhost:8080/user/`;
      axios({
        url: API_URL,
        method: "GET",
      })
        .then((res) => {
          commit("SET_USERS", res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    // 사용자 수정
    updateUser: function ({ users }, user) {
      const API_URL = `http://localhost:8080/user/`;
      axios({
        url: API_URL,
        method: "PUT",
        data: user,
      })
        .then(() => {
          alert("수정 완료!");
          let index;
          for (let i = 0; i < users.length; i++) {
            if ((users[i].id = user.id)) {
              index = i;
            }
          }
          this.$set(users, index, user);
          router.push("/user");
        })
        .catch((err) => {
          console.log(err);
        });
    },
    // 사용자 삭제
    deleteUser: function ({ users }, id) {
      const API_URL = `http://localhost:8080/user/`;
      axios({
        url: API_URL,
        method: "DELETE",
      })
        .then(() => {
          alert("삭제 완료!");
          let index;
          for (let i = 0; i < users.length; i++) {
            if (users[i].id === id) {
              index = i;
            }
          }
          users.splice(index, 1);
          router.push("/user");
        })
        .catch((err) => {
          console.log(err);
        });
    },
    // 사용자 상세보기
    setUser: function ({ commit }, id) {
      const API_URL = `http://localhost:8080/user/${id}`;
      axios({
        url: API_URL,
        method: "GET",
      })
        .then((res) => {
          commit("SET_USER", res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    // 사용자 이름 검색
    searchName: function ({ commit }, name) {
      const API_URL = `http://localhost:8080/user/`;
      axios({
        url: API_URL,
        method: "GET",
        params: {
          name,
        },
      })
        .then((res) => {
          commit("SEARCH_NAME", res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    // 사용자 로그인 정보
    setLoginUser: function ({ commit }, user) {
      const API_URL = `http://localhost:8080/user/`;
      axios({
        url: API_URL,
        method: "GET",
      })
        .then((res) => {
          let resUser = res.data;
          if (resUser.id === user.id && resUser.password === user.password) {
            commit("SET_LOGIN_USER", res.data);
            router.push("/");
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    // RANDOM API
    setRandomUser: async function ({ commit }) {
      const API_URL = `https://random-data-api.com/api/users/random_user`;

      try {
        const res = await axios.get(API_URL);
        let user = {
          id: res.data.username,
          password: res.data.password,
          name: res.data.first_name,
          email: res.data.email,
          age: Math.floor(Math.random() * (99 - 20)) + 20,
        };
        commit("SET_RANDOM_USER", user);
      } catch (err) {
        console.log(err);
      }
    },
  },
  modules: {},
});
