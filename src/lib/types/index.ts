export type Countries = {
  [key: string]: string;
};

export type RegExpKey =
  | "creditCard"
  | "email"
  | "expiryDate"
  | "expiryDateReplace"
  | "phoneNumber"
  | "phoneNumberReplace"
  | "postalCode"
  | "securityCode";

export type Step = {
  href: string;
  icon: string;
  title: string;
};
