export type Formable<T> = T & {
  helperText: HelperText<T>;
  validation: Validation<T>;
};

export type FormType = "billingAddress" | "payment" | "shippingAddress";

export type HelperText<T> = Partial<Record<keyof T, string>>;

export type Validation<T> = Partial<Record<keyof T, Validator>>;

export enum ValidationError {
  DateMaxValueExceeded = "DATE_MAX_VALUE_EXCEEDED",
  DateMinValueExceeded = "DATE_MIN_VALUE_EXCEEDED",
  NumberMaxValueExceeded = "NUMBER_MAX_VALUE_EXCEEDED",
  NumberMinValueExceeded = "NUMBER_MIN_VALUE_EXCEEDED",
  OptionsNotProvided = "OPTIONS_NOT_PROVIDED",
  StringMaxValueExceeded = "STRING_MAX_VALUE_EXCEEDED",
  StringMinValueExceeded = "STRING_MIN_VALUE_EXCEEDED",
  StringNotAKey = "STRING_NOT_A_KEY",
  StringNotAnEntry = "STRING_NOT_AN_ENTRY",
  StringNotAValue = "STRING_NOT_A_VALUE",
  StringRegExpNotMatched = "STRING_REG_EXP_NOT_MATCHED",
}

export type ValidationMessage =
  `Please ${ValidationMessageAction} your ${string}.`;

export type ValidationMessageAction = "check" | "enter";

export interface ValidationOptions extends Record<string, unknown> {
  caseInsensitive?: boolean;
  isEntryOf?: Record<string, unknown>;
  isKeyOf?: Record<string, unknown>;
  max?: number;
  min?: number;
  test?: RegExp;
  isValueOf?: Record<string, unknown>;
}

export interface ValidationDateOptions {
  after?: Date;
  before?: Date;
}

export interface ValidationResult<T> {
  error: boolean;
  message: T[];
}

export type ValidationValueType = number | string;

export type Validator = (value: unknown) => ValidationResult<ValidationMessage>;
