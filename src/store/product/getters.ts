import { GetterTree } from "vuex";

import { RootState } from "@/store/types";
import { ProductState } from "@/store/product/types";

const getters: GetterTree<ProductState, RootState> = {
  getError(state) {
    return state.error;
  },

  getLoading(state) {
    return state.loading;
  },

  getItems(state) {
    return state.items;
  },
};

export default getters;
