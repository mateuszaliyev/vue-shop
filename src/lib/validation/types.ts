export type Formable<T> = T & {
  helperText: HelperText<T>;
  validation: Validation<T>;
};

export type FormType = "billingAddress" | "payment" | "shippingAddress";

export type HelperText<T> = Partial<Record<keyof T, string>>;

export type Validation<T> = Partial<Record<keyof T, Validator>>;

export enum ValidationError {
  NumberMaxValueExceeded,
  NumberMinValueExceeded,
  OptionsNotProvided,
  StringMaxValueExceeded,
  StringMinValueExceeded,
  StringNotAKey,
  StringNotAnEntry,
  StringNotAValue,
  StringRegExpNotMatched,
}

export type ValidationMessage =
  `Please ${ValidationMessageAction} your ${string}.`;

export type ValidationMessageAction = "check" | "enter";

export interface ValidationOptions {
  isEntryOf?: Record<string, unknown>;
  isKeyOf?: Record<string, unknown>;
  isValueOf?: Record<string, unknown>;
  max?: number;
  min?: number;
  test?: RegExp;
}

export interface ValidationResult<T> {
  error: boolean;
  message: T[];
}

export type ValidationValueType = number | string;

export type Validator = (
  value: unknown,
  ...args: unknown[]
) => ValidationResult<ValidationMessage>;
