import { Product, PRODUCT_DEFAULT } from "@/store/product/types";

export interface Address {
  address: string;
  city: string;
  country: string;
  email: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  postalCode: string;
  state: string;
}

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

export type Payment = PaymentBankTransfer | PaymentCreditCard;

export interface PaymentBankTransfer {
  data: unknown;
  method: PaymentMethod.BankTransfer;
}

export interface PaymentCreditCard {
  data: {
    cardNumber: string;
    expiryDate: string;
    name: string;
    securityCode: string;
  };
  method: PaymentMethod.CreditCard;
}

export enum PaymentMethod {
  BankTransfer = "BANK_TRANSFER",
  CreditCard = "CREDIT_CARD",
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
  state: "",
};

export const PAYMENT_DEFAULT: Payment = {
  data: {
    cardNumber: "",
    expiryDate: "",
    name: "",
    securityCode: "000",
  },
  method: PaymentMethod.CreditCard,
};
