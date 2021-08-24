import { MutationTree } from "vuex";

import { ProductState } from "@/store/product/types";
import {
  SET_PRODUCT_ERROR,
  SET_PRODUCT_ITEMS,
  SET_PRODUCT_LOADING,
} from "@/store/product/mutation-types";

const mutations: MutationTree<ProductState> = {
  [SET_PRODUCT_ERROR](state, payload) {
    state.productError = payload;
  },
  [SET_PRODUCT_ITEMS](state, payload) {
    state.productItems = payload;
  },
  [SET_PRODUCT_LOADING](state, payload) {
    state.productLoading = payload;
  },
};

export default mutations;
