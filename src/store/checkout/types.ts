import { Product, PRODUCT_DEFAULT } from "@/store/product/types";

export type Address = {
  address: string;
  city: string;
  country: string;
  email: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  postalCode: string;
};

export interface CartItem extends Product {
  quantity: number;
}

export const CART_DEFAULT: CartItem = {
  ...PRODUCT_DEFAULT,
  quantity: 0,
};

export interface CheckoutState {
  billingAddress: Address;
  cart: CartItem[];
  payment: Payment;
  shippingAddress: Address;
}

export type Payment = {
  cardName: string;
  cardNumber: string;
  expiryDate: string;
  method: PaymentMethod;
  securityCode: string;
};

export enum PaymentMethod {
  BankTransfer = "Bank transfer",
  CreditCard = "Credit card",
}

export const ADDRESS_DEFAULT: Address = {
  address: "",
  city: "",
  country: "",
  email: "",
  firstName: "",
  lastName: "",
  phoneNumber: "",
  postalCode: "",
};

export const PAYMENT_DEFAULT: Payment = {
  cardName: "",
  cardNumber: "",
  expiryDate: "",
  method: PaymentMethod.CreditCard,
  securityCode: "",
};
