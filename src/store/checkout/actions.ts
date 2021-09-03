import { ActionTree } from "vuex";

import {
  Address,
  ADDRESS_DEFAULT,
  CartItem,
  CheckoutState,
  Payment,
  PAYMENT_DEFAULT,
} from "@/store/checkout/types";
import { Product } from "@/store/product/types";
import { RootState } from "@/store/types";
import {
  SET_BILLING_ADDRESS,
  SET_CART,
  SET_PAYMENT,
  SET_SHIPPING_ADDRESS,
} from "@/store/checkout/mutation-types";

const actions: ActionTree<CheckoutState, RootState> = {
  addProductToACart(
    { commit, dispatch, state },
    payload: { product: Product; quantity?: number }
  ) {
    const existingItem = state.cart.find(
      (item) => item.id === payload.product.id
    );

    if (existingItem) {
      const newCart: CartItem[] = state.cart.map((item) => {
        if (existingItem.id === item.id) {
          return {
            ...item,
            quantity: item.quantity + (payload.quantity ?? 1),
          };
        }

        return item;
      });

      commit(SET_CART, newCart);
      dispatch("storeCart");
    } else {
      const newCart: CartItem[] = [
        ...state.cart,
        { ...payload.product, quantity: payload.quantity ?? 1 },
      ];

      commit(SET_CART, newCart);
      dispatch("storeCart");
    }
  },

  deleteCart({ commit, dispatch }) {
    commit(SET_CART, []);
    dispatch("storeCart");
  },

  deleteOrder({ commit, dispatch }) {
    dispatch("deleteCart");
    commit(SET_BILLING_ADDRESS, ADDRESS_DEFAULT);
    commit(SET_PAYMENT, PAYMENT_DEFAULT);
    commit(SET_SHIPPING_ADDRESS, ADDRESS_DEFAULT);
  },

  fetchCart({ commit, state }) {
    const localStorageCart: CartItem[] = localStorage.cart
      ? JSON.parse(localStorage.cart)
      : [];

    if (!state.cart.length && localStorageCart.length) {
      commit(SET_CART, localStorageCart);
    }
  },

  removeProductFromACart({ commit, dispatch, state }, payload: Product) {
    commit(
      SET_CART,
      state.cart.filter((item) => item.id !== payload.id)
    );
    dispatch("storeCart");
  },

  setCartItemQuantity(
    { commit, dispatch, state },
    payload: { item: Product; quantity: number }
  ) {
    const newCart = [...state.cart];
    const itemIndex = newCart.findIndex((item) => item.id === payload.item.id);
    newCart[itemIndex].quantity = payload.quantity;

    commit(SET_CART, newCart);
    dispatch("storeCart");
  },

  setCheckoutData(
    { commit },
    payload: {
      billingAddress: Address;
      payment: Payment;
      shippingAddress: Address;
    }
  ) {
    const { billingAddress, payment, shippingAddress } = payload;
    commit(SET_BILLING_ADDRESS, billingAddress);
    commit(SET_PAYMENT, payment);
    commit(SET_SHIPPING_ADDRESS, shippingAddress);
  },

  storeCart({ state }) {
    localStorage.cart = JSON.stringify(state.cart);
  },
};

export default actions;
