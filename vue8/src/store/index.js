import { createStore } from "vuex";
import Api from "../api/Api";
import { APP_USER_TOKEN } from "../config";

const Store = createStore({
  state() {
    return {
      posts: [],
      users: [],
      user: {
        // id: 1,
        // name: "Leanne Graham",
        // email: "Sincere@april.biz",
      },
      isUserRequested: false, //load initial user from endpoint using localstorage token on page load
    };
  },
  getters: {
    isLoggedIn: (state) => (state.user && state.user.id ? true : false),
  },
  mutations: {
    setUser: function(state, user) {
      state.user = user;
      user
        ? localStorage.setItem(APP_USER_TOKEN, user.id)
        : localStorage.removeItem(APP_USER_TOKEN);
    },
    setIsUserRequested: function(state, status) {
      state.isUserRequested = status;
    },
    setPosts: function(state, posts) {
      state.posts = posts;
    },
    setUsers: function(state, users) {
      state.users = users;
    },
  },
  actions: {
    LoginWithCredentials: (context, payload) => {
      console.log(JSON.stringify(payload));
      return new Promise((resolve, reject) => {
        Api(true)
          .get("/users/10")
          .then((res) => {
            context.commit("setUser", res.data);
            resolve(res.data);
          })
          .catch((e) => {
            console.log(e);
            reject(e);
          });
      });
    },
    LoadUserDetailsOnPageLoad: (context) => {
      const userID = localStorage.getItem(APP_USER_TOKEN);
      context.commit("setIsUserRequested", false);
      return new Promise((resolve) => {
        Api(true)
          .get(`/users/${userID}`)
          .then((res) => context.commit("setUser", res.data))
          .catch(() => context.commit("setUser", {}))
          .finally(() => {
            context.commit("setIsUserRequested", true);
            resolve(context.state.isUserRequested);
          });
      });
    },
    fetchPosts: (context) => {
      Api(true)
        .get(`/posts`)
        .then((res) => context.commit("setPosts", res.data))
        .catch((e) => console.log(e));
    },
    fetchUsers: (context) => {
      Api(true)
        .get(`/users`)
        .then((res) => context.commit("setUsers", res.data))
        .catch((e) => console.log(e));
    },
  },
});

export default Store;
