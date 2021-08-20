import { MutationTree } from "vuex";

import { ProductState } from "@/store/product/types";
import {
  SET_ERROR,
  SET_ITEMS,
  SET_LOADING,
} from "@/store/product/mutation-types";

const mutations: MutationTree<ProductState> = {
  [SET_ERROR](state, payload) {
    state.error = payload;
  },
  [SET_ITEMS](state, payload) {
    state.items = payload;
  },
  [SET_LOADING](state, payload) {
    state.loading = payload;
  },
};

export default mutations;
