import { MutationTree } from "vuex";

import { CheckoutState } from "@/store/checkout/types";
import {
  SET_BILLING_ADDRESS,
  SET_CART,
  SET_PAYMENT,
  SET_SHIPPING_ADDRESS,
} from "@/store/checkout/mutation-types";

const mutations: MutationTree<CheckoutState> = {
  [SET_BILLING_ADDRESS](state, payload) {
    state.billingAddress = payload;
  },

  [SET_CART](state, payload) {
    state.cart = payload;
  },

  [SET_PAYMENT](state, payload) {
    state.payment = payload;
  },

  [SET_SHIPPING_ADDRESS](state, payload) {
    state.shippingAddress = payload;
  },
};

export default mutations;
