import { Module } from "vuex";

import { RootState } from "@/store/types";

import actions from "@/store/product/actions";
import getters from "@/store/product/getters";
import mutations from "@/store/product/mutations";
import { ProductState } from "@/store/product/types";

const state: ProductState = {
  productError: null,
  productItems: [],
  productLoading: false,
};

const product: Module<ProductState, RootState> = {
  state,
  getters,
  mutations,
  actions,
};

export default product;
