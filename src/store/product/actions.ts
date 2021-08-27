import { ActionTree } from "vuex";

import { APIProduct, Product, ProductState } from "@/store/product/types";
import { RootState } from "@/store/types";
import {
  SET_PRODUCT_ERROR,
  SET_PRODUCT_ITEMS,
  SET_PRODUCT_LOADING,
} from "@/store/product/mutation-types";

const actions: ActionTree<ProductState, RootState> = {
  async fetchProducts({ commit }) {
    commit(SET_PRODUCT_LOADING, true);

    try {
      const res = await fetch(
        "http://www.mocky.io/v2/5ab0d1882e0000e60ae8b7a6"
      );

      if (!res.ok) {
        commit(SET_PRODUCT_LOADING, false);
        commit(SET_PRODUCT_ERROR, "Couldn't reach the API.");
      }

      const data: APIProduct[] = await res.json();

      if (!data || !data.length) {
        commit(SET_PRODUCT_LOADING, false);
        commit(SET_PRODUCT_ERROR, "Received data is empty");
      }

      const items: Product[] = data.map((item) => {
        const { product_name, short_description, ...other } = item;

        return {
          ...other,
          productName: product_name,
          shortDescription: short_description,
        };
      });

      commit(SET_PRODUCT_LOADING, false);
      commit(SET_PRODUCT_ERROR, null);
      commit(SET_PRODUCT_ITEMS, items);
    } catch (error) {
      console.error(error);
      commit(SET_PRODUCT_LOADING, false);
      commit(SET_PRODUCT_ERROR, "Internal Server Error");
    }
  },
};

export default actions;
