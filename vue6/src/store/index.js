import { createStore } from "vuex";

export const store = createStore({
  state() {
    return {
      posts: [
        {
          id: 1,
          title:
            "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        },
        {
          id: 2,
          title: "qui est esse",
        },
        {
          id: 3,
          title: "ea molestias quasi exercitationem repellat qui ipsa sit aut",
        },
      ],
    };
  },
  getters: {
    featurePosts: (state) =>
      state.posts.map((post) => {
        return {
          ...post,
          title: `Featured - ${post.title}`,
        };
      }),
  },
  mutations: {
    incrementID(state, n) {
      state.posts.forEach((post) => (post.id += n));
    },
  },
  actions: {
    incrementIDAsync: function(context, payload) {
      setTimeout(() => {
        context.commit("incrementID", payload);
      }, 2000);
    },
  },
});
