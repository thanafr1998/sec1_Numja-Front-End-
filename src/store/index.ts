import Vue from "vue";
import Vuex from "vuex";
import VuexPersistence from "vuex-persist";
import chat from "@/store/modules/chat";
import login from "@/store/modules/login";
import snackbar from "@/store/modules/snackbar";
import suspendUser from "@/store/modules/maintenance/suspend";
import { LoginState } from "@/types";

Vue.use(Vuex);

const vuexLocal = new VuexPersistence<LoginState>({
  storage: window.localStorage,
  modules: ["login"]
});

export default new Vuex.Store<any>({
  modules: {
    chat,
    login,
    snackbar,
    suspendUser
  },
  plugins: [vuexLocal.plugin]
});
