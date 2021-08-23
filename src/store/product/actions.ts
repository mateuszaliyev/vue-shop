import { ActionTree } from "vuex";

import { APIProduct, Product, ProductState } from "@/store/product/types";
import { RootState } from "@/store/types";
import {
  SET_ERROR,
  SET_ITEMS,
  SET_LOADING,
} from "@/store/product/mutation-types";

const actions: ActionTree<ProductState, RootState> = {
  async fetchProducts({ commit }) {
    commit(SET_LOADING, true);

    try {
      const res = await fetch(
        "http://www.mocky.io/v2/5ab0d1882e0000e60ae8b7a6"
      );

      if (!res.ok) {
        commit(SET_LOADING, false);
        commit(SET_ERROR, "Couldn't reach the API.");
      }

      const data: Array<APIProduct> = await res.json();

      if (!data || !data.length) {
        commit(SET_LOADING, false);
        commit(SET_ERROR, "Received data is empty");
      }

      const items: Array<Product> = data.map((item) => {
        const { product_name, short_description, ...other } = item;

        return {
          ...other,
          productName: product_name,
          shortDescription: short_description,
        };
      });

      commit(SET_LOADING, false);
      commit(SET_ERROR, null);
      commit(SET_ITEMS, items);
      console.log(items);
    } catch (error) {
      console.error(error);
      commit(SET_LOADING, false);
      commit(SET_ERROR, "Internal Server Error");
    }
  },
};

export default actions;
