import Vue from "vue";
import Vuex, { StoreOptions } from "vuex";

import actions from "@/store/actions";
import getters from "@/store/getters";
import mutations from "@/store/mutations";

import checkout from "@/store/checkout";
import product from "@/store/product";
import { RootState } from "@/store/types";

Vue.use(Vuex);

const state: RootState = {
  sidebarVisibility: false,
};

const store: StoreOptions<RootState> = {
  state: state,
  getters: getters,
  mutations: mutations,
  actions: actions,
  modules: {
    checkout,
    product,
  },
};

export default new Vuex.Store(store);
