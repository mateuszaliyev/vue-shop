import Vue from "vue";
import Vuex, { StoreOptions } from "vuex";

import product from "@/store/product";
import { RootState } from "@/store/types";

Vue.use(Vuex);

const store: StoreOptions<RootState> = {
  state: {},
  mutations: {},
  actions: {},
  modules: {
    product,
  },
};

export default new Vuex.Store(store);
