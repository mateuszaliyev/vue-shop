import { GetterTree } from "vuex";

import { RootState } from "@/store/types";
import { ProductState } from "@/store/product/types";

const getters: GetterTree<ProductState, RootState> = {
  getError(state) {
    return state.error;
  },

  getItemCount(state) {
    return state.items.length;
  },

  getItems(state) {
    return state.items;
  },

  getLoading(state) {
    return state.loading;
  },
};

export default getters;
