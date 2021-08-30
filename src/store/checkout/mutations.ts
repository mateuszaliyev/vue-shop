import { MutationTree } from "vuex";

import { CheckoutState } from "@/store/checkout/types";
import {
  SET_CART,
  SET_SHIPPING_ADDRESS,
} from "@/store/checkout/mutation-types";

const mutations: MutationTree<CheckoutState> = {
  [SET_CART](state, payload) {
    state.cart = payload;
  },

  [SET_SHIPPING_ADDRESS](state, payload) {
    state.shippingAddress = payload;
  },
};

export default mutations;
