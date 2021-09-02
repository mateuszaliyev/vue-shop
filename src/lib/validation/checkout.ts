import { COUNTRIES, REGEX } from "@/lib/constants";
import {
  validateExpiryDate,
  validateRequire,
  validateRequireWithOptions,
} from "@/lib/validation";
import { Validation } from "@/lib/validation/types";

import { Address, Payment } from "@/store/checkout/types";

export const addressValidation: Validation<Address> = {
  address: (value) => validateRequire(value as string, "address"),
  city: (value) => validateRequire(value as string, "city"),
  country: (value) =>
    validateRequireWithOptions(value as string, "country", {
      caseInsensitive: true,
      isEntryOf: COUNTRIES,
    }),
  email: (value) =>
    validateRequireWithOptions(value as string, "email", { test: REGEX.email }),
  firstName: (value) => validateRequire(value as string, "first name"),
  lastName: (value) => validateRequire(value as string, "last name"),
  phoneNumber: (value) =>
    validateRequireWithOptions(
      (value as string).replace(REGEX.phoneNumberReplace, ""),
      "phone number",
      { test: REGEX.phoneNumber }
    ),
  postalCode: (value) =>
    validateRequireWithOptions(value as string, "postal code", {
      test: REGEX.postalCode,
    }),
  state: (value) => validateRequire(value as string, "state"),
};

export const paymentValidation: Validation<Payment> = {
  cardName: (value) => validateRequire(value as string, "name"),
  cardNumber: (value) =>
    validateRequireWithOptions(
      (value as string).replace(/\s/g, ""),
      "credit card",
      { test: REGEX.creditCard }
    ),
  expiryDate: (value) =>
    validateExpiryDate((value as string).replace(REGEX.expiryDateReplace, "")),
  securityCode: (value) =>
    validateRequireWithOptions(value as string, "security code", {
      test: REGEX.securityCode,
    }),
};
