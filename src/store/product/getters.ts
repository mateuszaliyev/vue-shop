import { GetterTree } from "vuex";

import { RootState } from "@/store/types";
import { ProductState } from "@/store/product/types";

const getters: GetterTree<ProductState, RootState> = {
  getProductError(state) {
    return state.productError;
  },

  getProductItemCount(state) {
    return state.productItems.length;
  },

  getProductItems(state) {
    return state.productItems;
  },

  getProductLoading(state) {
    return state.productLoading;
  },
};

export default getters;
