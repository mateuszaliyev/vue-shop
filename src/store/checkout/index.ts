import { Module } from "vuex";

import { RootState } from "@/store/types";

import actions from "@/store/checkout/actions";
import getters from "@/store/checkout/getters";
import mutations from "@/store/checkout/mutations";
import {
  ADDRESS_DEFAULT,
  CheckoutState,
  PAYMENT_DEFAULT,
} from "@/store/checkout/types";

const state: CheckoutState = {
  billingAddress: ADDRESS_DEFAULT,
  cart: [],
  payment: PAYMENT_DEFAULT,
  shippingAddress: ADDRESS_DEFAULT,
};

const checkout: Module<CheckoutState, RootState> = {
  state,
  actions,
  getters,
  mutations,
};

export default checkout;
