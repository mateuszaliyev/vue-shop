import { Product } from "@/store/product/types";

export interface CartItem extends Product {
  quantity: number;
}

export interface CartState {
  cartItems: CartItem[];
}
