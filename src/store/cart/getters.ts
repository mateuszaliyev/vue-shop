import { GetterTree } from "vuex";

import { CartItem, CartState } from "@/store/cart/types";
import { RootState } from "@/store/types";

const getters: GetterTree<CartState, RootState> = {
  getCartItems(state) {
    return state.cartItems;
  },
  getCartItemQuantity: (state) => (item: CartItem) => {
    return (
      state.cartItems.find((cartItem) => cartItem.id === item.id)?.quantity ?? 0
    );
  },
};

export default getters;
