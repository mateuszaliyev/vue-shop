import { Product, productDefault } from "@/store/product/types";

export interface CartItem extends Product {
  quantity: number;
}

export interface CartState {
  cartItems: CartItem[];
}

export const cartItemDefault: CartItem = {
  ...productDefault,
  quantity: 0,
};
