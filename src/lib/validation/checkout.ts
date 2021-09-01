import {
  validateCardNumber,
  validateCountry,
  validateEmail,
  validatePhoneNumber,
  validatePostalCode,
  validateRequire,
} from "@/lib/validation";
import { Validation } from "@/lib/validation/types";

import { Address, Payment } from "@/store/checkout/types";

export const addressValidation: Validation<Address> = {
  address: (value) => validateRequire(value as string, "address"),
  city: (value) => validateRequire(value as string, "city"),
  country: (value) => validateCountry(value as string),
  email: (value) => validateEmail(value as string),
  firstName: (value) => validateRequire(value as string, "first name"),
  lastName: (value) => validateRequire(value as string, "last name"),
  phoneNumber: (value) => validatePhoneNumber(value as string),
  postalCode: (value) => validatePostalCode(value as string),
  state: (value) => validateRequire(value as string, "state"),
};

export const paymentValidation: Validation<Payment> = {
  cardNumber: (value) => validateCardNumber(value as string),
  data: (value) => validateRequire(value as string, "data"),
  expiryDate: (value) => validateRequire(value as string, "expiry dat"),
  name: (value) => validateRequire(value as string, "name"),
  securityCode: (value) => validateRequire(value as string, "security code"),
};
