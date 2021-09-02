import {
  Formable,
  HelperText,
  Validation,
  ValidationDateOptions,
  ValidationError,
  ValidationMessage,
  ValidationMessageAction,
  ValidationOptions,
  ValidationResult,
  ValidationValueType,
} from "@/lib/validation/types";
import { REGEX } from "../constants";

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

export function includes<T>(
  array: T[],
  value: T,
  caseInsensitive = false
): boolean {
  if (caseInsensitive && typeof value === "string") {
    for (let i = 0; i < array.length; i++) {
      if (
        typeof array[i] === "string" &&
        (array[i] as unknown as string).toLowerCase() === value.toLowerCase()
      ) {
        return true;
      }
    }
    return false;
  }
  return array.includes(value);
}

export function validate<T extends ValidationValueType>(
  value: T,
  options: ValidationOptions
): ValidationResult<ValidationError> {
  const result: ValidationResult<ValidationError> = {
    error: false,
    message: [],
  };

  if (!Object.keys(options).length) {
    result.message = [ValidationError.OptionsNotProvided];
    return result;
  }

  const caseInsensitive = options.caseInsensitive ?? false;

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
      !includes(Object.keys(options.isEntryOf), value, caseInsensitive) &&
      !includes(Object.values(options.isEntryOf), value, caseInsensitive)
    ) {
      result.error = true;
      result.message.push(ValidationError.StringNotAnEntry);
    }

    if (
      options.isKeyOf &&
      !includes(Object.keys(options.isKeyOf), value, caseInsensitive)
    ) {
      result.error = true;
      result.message.push(ValidationError.StringNotAKey);
    }

    if (
      options.isValueOf &&
      !includes(Object.values(options.isValueOf), value, caseInsensitive)
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

export function validateDate(
  value: Date,
  options: ValidationDateOptions
): ValidationResult<ValidationError> {
  const result: ValidationResult<ValidationError> = {
    error: false,
    message: [],
  };

  if (!Object.keys(options).length) {
    result.message = [ValidationError.OptionsNotProvided];
    return result;
  }

  if (options.after && options.after >= value) {
    result.error = true;
    result.message.push(ValidationError.DateMinValueExceeded);
  }

  if (options.before && options.before <= value) {
    result.error = true;
    result.message.push(ValidationError.DateMaxValueExceeded);
  }

  return result;
}

export function validateExpiryDate(
  value: string
): ValidationResult<ValidationMessage> {
  const result: ValidationResult<ValidationMessage> = {
    error: false,
    message: [],
  };

  const stringValidation = validate(value, {
    min: 1,
    test: REGEX.expiryDate,
  });

  if (
    stringValidation.message.includes(ValidationError.StringMinValueExceeded)
  ) {
    result.error = true;
    result.message.push(validationMessage("enter", "expiry date"));
  } else if (stringValidation.error) {
    result.error = true;
    result.message.push(validationMessage("check", "expiry date"));
  } else {
    const [mm, yy] = value.split("/");
    const expiryDate = new Date(parseInt(`20${yy}`), parseInt(mm) - 1);
    const today = new Date();
    const december = today.getMonth() === 11;
    const nextMonth = new Date(
      december ? today.getFullYear() + 1 : today.getFullYear(),
      december ? 0 : today.getMonth() + 1
    );
    const dateValidation = validateDate(expiryDate, {
      after: nextMonth,
    });

    if (dateValidation.error) {
      result.error = true;
      result.message.push(validationMessage("check", "expiry date"));
    }
  }

  return result;
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

export function validateRequireWithOptions(
  value: string,
  name: string,
  options?: ValidationOptions
): ValidationResult<ValidationMessage> {
  const { error, message } = validate(value, {
    min: 1,
    ...options,
  });

  const extendedMessage: ValidationMessage[] = [];

  if (message.includes(ValidationError.StringMinValueExceeded)) {
    extendedMessage.push(validationMessage("enter", name));
  } else if (error) {
    extendedMessage.push(validationMessage("check", name));
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
