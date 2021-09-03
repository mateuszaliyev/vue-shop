import { GetterTree } from "vuex";

import { Address, CartItem, CheckoutState } from "@/store/checkout/types";
import { RootState } from "@/store/types";

const getters: GetterTree<CheckoutState, RootState> = {
  getBilling(state) {
    for (const key of Object.keys(state.billingAddress)) {
      if (state.billingAddress[key as keyof Address] !== "") {
        return true;
      }
    }
    return false;
  },

  getBillingAddress(state) {
    return state.billingAddress;
  },

  getCart(state) {
    return state.cart;
  },

  getCartItemQuantity: (state) => (item: CartItem) => {
    return (
      state.cart.find((cartItem) => cartItem.id === item.id)?.quantity ?? 0
    );
  },

  getDeliveryPrice(state) {
    return state.cart.reduce(
      (prev, item) =>
        prev +
        parseFloat(item.price.slice(1)) * 0.05 +
        parseFloat(item.price.slice(1)) * item.quantity * 0.01,
      0
    );
  },

  getPayment(state) {
    return state.payment;
  },

  getShippingAddress(state) {
    return state.shippingAddress;
  },

  getTotal(state, getters) {
    return getters.getDeliveryPrice + getters.getTotalPrice;
  },

  getTotalPrice(state) {
    return state.cart.reduce(
      (prev, item) => prev + parseFloat(item.price.slice(1)) * item.quantity,
      0
    );
  },

  getTotalQuantity(state) {
    return state.cart.reduce((prev, item) => prev + item.quantity, 0);
  },
};

export default getters;
