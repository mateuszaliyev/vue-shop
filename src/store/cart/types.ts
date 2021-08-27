import { Product } from "@/store/product/types";

export interface CartItem extends Product {
  quantity: number;
}

export interface CartState {
  cartItems: CartItem[];
}

export const cartItemDefault: CartItem = {
  company: "",
  description: "",
  id: 0,
  image: "",
  price: "$0.00",
  productName: "",
  shortDescription: "",
  quantity: 0,
};
