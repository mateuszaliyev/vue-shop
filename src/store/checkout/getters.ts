import { GetterTree } from "vuex";

import { CartItem, CheckoutState } from "@/store/checkout/types";
import { RootState } from "@/store/types";

const getters: GetterTree<CheckoutState, RootState> = {
  getCart(state) {
    return state.cart;
  },

  getCartItemQuantity: (state) => (item: CartItem) => {
    return (
      state.cart.find((cartItem) => cartItem.id === item.id)?.quantity ?? 0
    );
  },

  getShippingAddress(state) {
    return state.shippingAddress;
  },
};

export default getters;
