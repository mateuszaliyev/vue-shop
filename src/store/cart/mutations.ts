import { MutationTree } from "vuex";

import { CartState } from "@/store/cart/types";
import { SET_CART_ITEMS } from "@/store/cart/mutation-types";

const mutations: MutationTree<CartState> = {
  [SET_CART_ITEMS](state, payload) {
    state.cartItems = payload;
  },
};

export default mutations;
