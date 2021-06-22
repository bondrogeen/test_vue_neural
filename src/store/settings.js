export default {
  namespaced: true,
  state: () => ({
    app: {
      name: "Test",
      version: "0.0.1",
    },
    menus: [
      { title: "Home", icon: "mdi-view-dashboard", path: "/" },
      { title: "Datasets", icon: "mdi-account-multiple", path: "/datasets" },
      { title: "Layers", icon: "mdi-help-box", path: "/layers" },
    ],
    drawer: false,
  }),
  mutations: {
    SET_DRAWER(state, value) {
      state.drawer = value;
    },
  },
  actions: {
    setDrawer({ commit }, data) {
      commit("SET_DRAWER", data);
    },
  },
  getters: {
    isMobile() {
      return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
    },
    getDrawer(state) {
      return state.drawer;
    },
    getMenus(state) {
      return state.menus;
    },
    getApp(state) {
      return state.app;
    },
  },
};
