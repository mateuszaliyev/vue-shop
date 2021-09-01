import {
  COUNTRIES,
  CREDIT_CARD_REGEX,
  EMAIL_REGEX,
  PHONE_REGEX,
  POSTAL_CODE_REGEX,
} from "@/lib/constants";

import {
  Formable,
  HelperText,
  Validation,
  ValidationError,
  ValidationMessage,
  ValidationMessageAction,
  ValidationOptions,
  ValidationResult,
  ValidationValueType,
} from "@/lib/validation/types";

export function asFormable<T extends Record<string, unknown>>(
  obj: T,
  validation: Validation<T>
): Formable<T> {
  const keys = Object.keys({ ...obj }) as (keyof T)[];

  const entries = keys.map((key) => [key, ""]);

  const helperText: HelperText<T> = Object.fromEntries(
    entries
  ) as HelperText<T>;

  return {
    ...obj,
    helperText,
    validation,
  };
}

export function validate<T extends ValidationValueType>(
  value: T,
  options?: ValidationOptions
): ValidationResult<ValidationError> {
  const result: ValidationResult<ValidationError> = {
    error: false,
    message: [],
  };

  if (!options || options === {}) {
    result.message = [ValidationError.OptionsNotProvided];
    return result;
  }

  if (typeof value === "number") {
    if (options.max && value > options.max) {
      result.error = true;
      result.message.push(ValidationError.NumberMaxValueExceeded);
    }

    if (options.min && value < options.min) {
      result.error = true;
      result.message.push(ValidationError.NumberMinValueExceeded);
    }
  }

  if (typeof value === "string") {
    if (
      options.isEntryOf &&
      !Object.keys(options.isEntryOf).includes(value) &&
      !Object.values(options.isEntryOf).includes(value)
    ) {
      result.error = true;
      result.message.push(ValidationError.StringNotAnEntry);
    }

    if (options.isKeyOf && !Object.keys(options.isKeyOf).includes(value)) {
      result.error = true;
      result.message.push(ValidationError.StringNotAKey);
    }

    if (
      options.isValueOf &&
      !Object.values(options.isValueOf).includes(value)
    ) {
      result.error = true;
      result.message.push(ValidationError.StringNotAValue);
    }

    if (options.max && value.length > options.max) {
      result.error = true;
      result.message.push(ValidationError.StringMaxValueExceeded);
    }

    if (options.min && value.length < options.min) {
      result.error = true;
      result.message.push(ValidationError.StringMinValueExceeded);
    }

    if (options.test && !options.test.test(value)) {
      result.error = true;
      result.message.push(ValidationError.StringRegExpNotMatched);
    }
  }

  return result;
}

export function validateCountry(
  country: string
): ValidationResult<ValidationMessage> {
  const { error, message } = validate(country, {
    isEntryOf: COUNTRIES,
    min: 1,
  });

  const extendedMessage: ValidationMessage[] = [];

  if (message.includes(ValidationError.StringMinValueExceeded)) {
    extendedMessage.push(validationMessage("enter", "country"));
  } else if (error) {
    extendedMessage.push(validationMessage("check", "country"));
  }

  return {
    error,
    message: extendedMessage,
  };
}

export function validateCardNumber(
  number: string
): ValidationResult<ValidationMessage> {
  const { error, message } = validate(number.replace(/\D/g, ""), {
    min: 1,
    test: CREDIT_CARD_REGEX,
  });

  const extendedMessage: ValidationMessage[] = [];

  if (message.includes(ValidationError.StringMinValueExceeded)) {
    extendedMessage.push(validationMessage("enter", "credit card"));
  } else if (error) {
    extendedMessage.push(validationMessage("check", "credit card"));
  }

  return {
    error,
    message: extendedMessage,
  };
}

export function validateEmail(
  email: string
): ValidationResult<ValidationMessage> {
  const { error, message } = validate(email, { min: 1, test: EMAIL_REGEX });

  const extendedMessage: ValidationMessage[] = [];

  if (message.includes(ValidationError.StringMinValueExceeded)) {
    extendedMessage.push(validationMessage("enter", "email address"));
  } else if (error) {
    extendedMessage.push(validationMessage("check", "email address"));
  }

  return {
    error,
    message: extendedMessage,
  };
}

export function validatePhoneNumber(
  phone: string
): ValidationResult<ValidationMessage> {
  const { error, message } = validate(phone, { min: 1, test: PHONE_REGEX });

  const extendedMessage: ValidationMessage[] = [];

  if (message.includes(ValidationError.StringMinValueExceeded)) {
    extendedMessage.push(validationMessage("enter", "phone number"));
  } else if (error) {
    extendedMessage.push(validationMessage("check", "phone number"));
  }

  return {
    error,
    message: extendedMessage,
  };
}

export function validatePostalCode(
  postalCode: string
): ValidationResult<ValidationMessage> {
  const { error, message } = validate(postalCode, {
    min: 1,
    test: POSTAL_CODE_REGEX,
  });

  const extendedMessage: ValidationMessage[] = [];

  if (message.includes(ValidationError.StringMinValueExceeded)) {
    extendedMessage.push(validationMessage("enter", "postal code"));
  } else if (error) {
    extendedMessage.push(validationMessage("check", "postal code"));
  }

  return {
    error,
    message: extendedMessage,
  };
}

export function validateRequire(
  value: string,
  name: string
): ValidationResult<ValidationMessage> {
  const { error, message } = validate(value, {
    min: 1,
  });

  const extendedMessage: ValidationMessage[] = [];

  if (message.includes(ValidationError.StringMinValueExceeded)) {
    extendedMessage.push(validationMessage("enter", name));
  }

  return {
    error,
    message: extendedMessage,
  };
}

function validationMessage(
  action: ValidationMessageAction,
  value: string
): ValidationMessage {
  return `Please ${action} your ${value}.` as ValidationMessage;
}
