import { ActionTree } from "vuex";

import { CartItem, CartState } from "@/store/cart/types";
import { RootState } from "@/store/types";
import { SET_CART_ITEMS } from "@/store/cart/mutation-types";

import { Product } from "@/store/product/types";

const actions: ActionTree<CartState, RootState> = {
  addProductToACart(
    { commit, dispatch, state },
    payload: { product: Product; quantity?: number }
  ) {
    const existingItem = state.cartItems.find(
      (item) => item.id === payload.product.id
    );

    if (existingItem) {
      const newCart: CartItem[] = state.cartItems.map((item) => ({
        ...item,
        quantity: item.quantity + (payload.quantity ?? 1),
      }));

      commit(SET_CART_ITEMS, newCart);
      dispatch("storeCart");
    } else {
      const newCart: CartItem[] = [
        ...state.cartItems,
        { ...payload.product, quantity: payload.quantity ?? 1 },
      ];

      commit(SET_CART_ITEMS, newCart);
      dispatch("storeCart");
    }
  },

  deleteCart({ commit, dispatch }) {
    commit(SET_CART_ITEMS, []);
    dispatch("storeCart");
  },

  fetchCart({ commit, state }) {
    const localStorageCart: CartItem[] = localStorage.cart
      ? JSON.parse(localStorage.cart)
      : [];

    if (!state.cartItems.length && localStorageCart.length) {
      commit(SET_CART_ITEMS, localStorageCart);
    }
  },

  removeProductFromACart({ commit, dispatch, state }, payload: Product) {
    commit(
      SET_CART_ITEMS,
      state.cartItems.filter((item) => item.id !== payload.id)
    );
    dispatch("storeCart");
  },

  setCartItemQuantity(
    { commit, dispatch, state },
    payload: { item: Product; quantity: number }
  ) {
    const newCart = [...state.cartItems];
    const itemIndex = newCart.findIndex((item) => item.id === payload.item.id);
    newCart[itemIndex].quantity = payload.quantity;

    commit(SET_CART_ITEMS, newCart);
    dispatch("storeCart");
  },

  storeCart({ state }) {
    localStorage.cart = JSON.stringify(state.cartItems);
  },
};

export default actions;
