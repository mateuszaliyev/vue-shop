import { Module } from "vuex";

import { RootState } from "@/store/types";

import actions from "@/store/cart/actions";
import getters from "@/store/cart/getters";
import mutations from "@/store/cart/mutations";
import { CartState } from "@/store/cart/types";

const state: CartState = {
  cartItems: [],
};

const product: Module<CartState, RootState> = {
  state,
  actions,
  getters,
  mutations,
};

export default product;
