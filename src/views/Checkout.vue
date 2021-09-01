<template>
  <div v-frag>
    <the-header>Checkout</the-header>
    <section class="container">
      <the-stepper class="stepper" :currentStep="1" :steps="steps" />
    </section>
    <form class="form" @submit.prevent="handleSubmit">
      <section class="container form__container">
        <h2 class="headline">Shipping address</h2>
        <div class="row">
          <v-input
            autocomplete="shipping given-name"
            @change="
              handleValidation(
                'shippingAddress',
                'firstName',
                shippingAddress.validation.firstName(shippingAddress.firstName)
              )
            "
            class="field"
            :error="Boolean(shippingAddress.helperText.firstName)"
            :helper-text="shippingAddress.helperText.firstName"
            name="fname"
            placeholder="First name"
            required
            v-model="shippingAddress.firstName"
          />
          <v-input
            autocomplete="shipping family-name"
            @change="
              handleValidation(
                'shippingAddress',
                'lastName',
                shippingAddress.validation.lastName(shippingAddress.lastName)
              )
            "
            class="field"
            :error="Boolean(shippingAddress.helperText.lastName)"
            :helper-text="shippingAddress.helperText.lastName"
            name="lname"
            placeholder="Last name"
            required
            v-model="shippingAddress.lastName"
          />
        </div>
        <v-input
          autocomplete="shipping street-address"
          @change="
            handleValidation(
              'shippingAddress',
              'address',
              shippingAddress.validation.address(shippingAddress.address)
            )
          "
          class="field"
          :error="Boolean(shippingAddress.helperText.address)"
          :helper-text="shippingAddress.helperText.address"
          name="address"
          placeholder="Address"
          required
          v-model="shippingAddress.address"
        />
        <div class="row">
          <v-input
            autocomplete="shipping address-level2"
            @change="
              handleValidation(
                'shippingAddress',
                'city',
                shippingAddress.validation.city(shippingAddress.city)
              )
            "
            class="field"
            :error="Boolean(shippingAddress.helperText.city)"
            :helper-text="shippingAddress.helperText.city"
            name="city"
            placeholder="City"
            required
            v-model="shippingAddress.city"
          />
          <v-input
            autocomplete="shipping address-level1"
            @change="
              handleValidation(
                'shippingAddress',
                'state',
                shippingAddress.validation.state(shippingAddress.state)
              )
            "
            class="field"
            :error="Boolean(shippingAddress.helperText.state)"
            :helper-text="shippingAddress.helperText.state"
            name="state"
            placeholder="State"
            required
            v-model="shippingAddress.state"
          />
        </div>
        <div class="row">
          <v-input
            autocomplete="shipping postal-code"
            @change="
              handleValidation(
                'shippingAddress',
                'postalCode',
                shippingAddress.validation.postalCode(
                  shippingAddress.postalCode
                )
              )
            "
            class="field"
            :error="Boolean(shippingAddress.helperText.postalCode)"
            :helper-text="shippingAddress.helperText.postalCode"
            name="postal"
            placeholder="Postal code"
            required
            v-model="shippingAddress.postalCode"
          />
          <v-input
            autocomplete="shipping country"
            @change="
              handleValidation(
                'shippingAddress',
                'country',
                shippingAddress.validation.country(shippingAddress.country)
              )
            "
            class="field"
            :error="Boolean(shippingAddress.helperText.country)"
            :helper-text="shippingAddress.helperText.country"
            name="country"
            placeholder="Country"
            required
            v-model="shippingAddress.country"
          />
        </div>
        <div class="row">
          <v-input
            autocomplete="shipping email"
            @change="
              handleValidation(
                'shippingAddress',
                'email',
                shippingAddress.validation.email(shippingAddress.email)
              )
            "
            class="field"
            :error="Boolean(shippingAddress.helperText.email)"
            :helper-text="shippingAddress.helperText.email"
            name="email"
            placeholder="Email"
            required
            type="email"
            v-model="shippingAddress.email"
          />
          <v-input
            autocomplete="shipping phone"
            @change="
              handleValidation(
                'shippingAddress',
                'phoneNumber',
                shippingAddress.validation.phoneNumber(
                  shippingAddress.phoneNumber
                )
              )
            "
            class="field"
            :error="Boolean(shippingAddress.helperText.phoneNumber)"
            :helper-text="shippingAddress.helperText.phoneNumber"
            name="country"
            placeholder="Phone number"
            required
            type="tel"
            v-model="shippingAddress.phoneNumber"
          />
        </div>
        <div class="checkbox">
          <v-checkbox id="billing" v-model="billing" />
          <label class="label" for="billing">
            My billing and delivery information are different.
          </label>
        </div>
      </section>
      <section class="container form__container" v-if="billing">
        <h2 class="headline">Billing Address</h2>
        <div class="row">
          <v-input
            autocomplete="billing given-name"
            @change="
              handleValidation(
                'billingAddress',
                'firstName',
                billingAddress.validation.firstName(billingAddress.firstName)
              )
            "
            class="field"
            :error="Boolean(billingAddress.helperText.firstName)"
            :helper-text="billingAddress.helperText.firstName"
            name="fname"
            placeholder="First name"
            :required="billing"
            v-model="billingAddress.firstName"
          />
          <v-input
            autocomplete="billing family-name"
            @change="
              handleValidation(
                'billingAddress',
                'lastName',
                billingAddress.validation.lastName(billingAddress.lastName)
              )
            "
            class="field"
            :error="Boolean(billingAddress.helperText.lastName)"
            :helper-text="billingAddress.helperText.lastName"
            name="lname"
            placeholder="Last name"
            :required="billing"
            v-model="billingAddress.lastName"
          />
        </div>
        <v-input
          autocomplete="billing street-address"
          @change="
            handleValidation(
              'billingAddress',
              'address',
              billingAddress.validation.address(billingAddress.address)
            )
          "
          class="field"
          :error="Boolean(billingAddress.helperText.address)"
          :helper-text="billingAddress.helperText.address"
          name="address"
          placeholder="Address"
          :required="billing"
          v-model="billingAddress.address"
        />
        <div class="row">
          <v-input
            autocomplete="billing address-level2"
            @change="
              handleValidation(
                'billingAddress',
                'city',
                billingAddress.validation.city(billingAddress.city)
              )
            "
            class="field"
            :error="Boolean(billingAddress.helperText.city)"
            :helper-text="billingAddress.helperText.city"
            name="city"
            placeholder="City"
            :required="billing"
            v-model="billingAddress.city"
          />
          <v-input
            autocomplete="billing address-level1"
            @change="
              handleValidation(
                'billingAddress',
                'state',
                billingAddress.validation.state(billingAddress.state)
              )
            "
            class="field"
            :error="Boolean(billingAddress.helperText.state)"
            :helper-text="billingAddress.helperText.state"
            name="state"
            placeholder="State"
            :required="billing"
            v-model="billingAddress.state"
          />
        </div>
        <div class="row">
          <v-input
            autocomplete="billing postal-code"
            @change="
              handleValidation(
                'billingAddress',
                'postalCode',
                billingAddress.validation.postalCode(billingAddress.postalCode)
              )
            "
            class="field"
            :error="Boolean(billingAddress.helperText.postalCode)"
            :helper-text="billingAddress.helperText.postalCode"
            name="postal"
            placeholder="Postal code"
            :required="billing"
            v-model="billingAddress.postalCode"
          />
          <v-input
            autocomplete="billing country"
            @change="
              handleValidation(
                'billingAddress',
                'country',
                billingAddress.validation.country(billingAddress.country)
              )
            "
            class="field"
            :error="Boolean(billingAddress.helperText.country)"
            :helper-text="billingAddress.helperText.country"
            name="country"
            placeholder="Country"
            :required="billing"
            v-model="billingAddress.country"
          />
        </div>
        <v-input
          autocomplete="billing phone"
          @change="
            handleValidation(
              'billingAddress',
              'phoneNumber',
              billingAddress.validation.phoneNumber(billingAddress.phoneNumber)
            )
          "
          class="field"
          :error="Boolean(billingAddress.helperText.phoneNumber)"
          :helper-text="billingAddress.helperText.phoneNumber"
          name="country"
          placeholder="Phone number"
          type="tel"
          :required="billing"
          v-model="billingAddress.phoneNumber"
        />
      </section>
      <section class="container form__container">
        <h2 class="headline">Payment method</h2>
        <div class="row">
          <v-radio
            @change="handlePaymentMethodChange(paymentMethodCreditCard)"
            :checked="payment.method === paymentMethodCreditCard"
            :id="paymentMethodCreditCard"
          />
          <label class="label" :for="paymentMethodCreditCard"
            >Credit/Debit card</label
          >
        </div>
        <template v-if="payment.method === paymentMethodCreditCard">
          <v-input
            autocomplete="payment cc-number"
            @change="
              handleValidation(
                'payment',
                'cardNumber',
                payment.validation.cardNumber(payment.cardNumber)
              )
            "
            class="field"
            :error="Boolean(payment.helperText.cardNumber)"
            :helper-text="payment.helperText.cardNumber"
            name="cardnumber"
            placeholder="Card number"
            :required="payment.method === paymentMethodCreditCard"
            v-model="payment.cardNumber"
          />
          <v-input
            autocomplete="payment cc-name"
            class="field"
            name="ccname"
            placeholder="Name on card"
            :required="payment.method === paymentMethodCreditCard"
            v-model="payment.name"
          />
          <div class="row">
            <v-input
              autocomplete="payment cc-exp"
              class="field"
              name="exp-date"
              placeholder="Expiry date (MM / YY)"
              :required="payment.method === paymentMethodCreditCard"
              v-model="payment.expiryDate"
            />
            <v-input
              autocomplete="payment cc-csc"
              class="field"
              name="cvc"
              placeholder="Security code (CVV)"
              :required="payment.method === paymentMethodCreditCard"
              v-model="payment.securityCode"
            />
          </div>
        </template>
        <div class="row">
          <v-radio
            @change="handlePaymentMethodChange(paymentMethodBankTransfer)"
            :checked="payment.method === paymentMethodBankTransfer"
            :id="paymentMethodBankTransfer"
          />
          <label class="label" :for="paymentMethodBankTransfer"
            >Bank transfer</label
          >
        </div>
      </section>
      <section class="container form__container">
        <div class="checkbox">
          <v-checkbox id="consent" required v-model="consent" />
          <label class="label" for="consent"> I'm 13+ years old. </label>
        </div>
        <div class="checkbox">
          <v-checkbox id="newsletter" v-model="newsletter" />
          <label class="label" for="newsletter">
            I'd like to receive emails about exclusive sales and more
          </label>
        </div>
      </section>
      <section class="container form__container">
        <v-button>Place order</v-button>
      </section>
    </form>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

import VButton from "@/components/input/VButton.vue";
import VCheckbox from "@/components/input/VCheckbox.vue";
import TheHeader from "@/components/TheHeader.vue";
import VInput from "@/components/input/VInput.vue";
import VRadio from "@/components/input/VRadio.vue";
import TheStepper from "@/components/TheStepper.vue";

import { CHECKOUT_STEPS } from "@/lib/constants";
import {
  asFormable,
  validateCountry,
  validateEmail,
  validatePhoneNumber,
  validatePostalCode,
  validateRequire,
} from "@/lib/validation";
import {
  addressValidation,
  paymentValidation,
} from "@/lib/validation/checkout";
import {
  FormType,
  ValidationMessage,
  ValidationResult,
} from "@/lib/validation/types";
import { Step } from "@/lib/types";

import {
  Address,
  ADDRESS_DEFAULT,
  Payment,
  PaymentMethod,
  PAYMENT_DEFAULT,
} from "@/store/checkout/types";

@Component({
  components: {
    TheHeader,
    TheStepper,
    VButton,
    VCheckbox,
    VInput,
    VRadio,
  },
  methods: {
    validateCountry,
    validateEmail,
    validatePhoneNumber,
    validatePostalCode,
    validateRequire,
  },
})
export default class Checkout extends Vue {
  protected billing = false;
  protected billingAddress = asFormable(ADDRESS_DEFAULT, addressValidation);

  protected consent = false;
  protected newsletter = false;
  protected payment = asFormable(PAYMENT_DEFAULT, paymentValidation);

  protected shippingAddress = asFormable(ADDRESS_DEFAULT, addressValidation);

  protected handlePaymentMethodChange(method: PaymentMethod): void {
    this.payment.method = method;
  }

  protected handleSubmit(): void {
    console.log(this.shippingAddress.firstName);
  }

  protected handleValidation(
    formType: FormType,
    field: string,
    result: ValidationResult<ValidationMessage>
  ): void {
    const { error, message } = result;

    const failure = error && Boolean(message.length);

    switch (formType) {
      case "billingAddress":
        this.billingAddress.helperText[field as keyof Address] = failure
          ? message[0]
          : "";
        break;
      case "payment":
        this.payment.helperText[field as keyof Payment] = failure
          ? message[0]
          : "";
        break;
      case "shippingAddress":
        this.shippingAddress.helperText[field as keyof Address] = failure
          ? message[0]
          : "";
        break;
    }
  }

  protected mounted(): void {
    if (!this.$store.getters.getCart.length) {
      this.$router.replace("/");
    }
  }

  protected get currentStep(): number {
    return this.$store.getters.getCurrentStep;
  }

  protected get paymentMethodBankTransfer(): PaymentMethod {
    return PaymentMethod.BankTransfer;
  }

  protected get paymentMethodCreditCard(): PaymentMethod {
    return PaymentMethod.CreditCard;
  }

  protected get steps(): ReadonlyArray<Step> {
    return CHECKOUT_STEPS;
  }
}
</script>

<style lang="scss" scoped>
.checkbox {
  display: flex;
  gap: 1.6rem;
  margin: 1.6rem 0;
}

.field {
  width: 100%;
}

.form {
  &__container {
    display: flex;
    flex-direction: column;
    gap: 1.6rem;
    margin: 1.6rem 0;
  }
}

.headline {
  font-size: 2.4rem;
  font-weight: 400;
}

.label {
  cursor: pointer;
}

.row {
  display: flex;
  flex: 1 1 0px;
  gap: 1.6rem;
}

.stepper {
  margin: 1.6rem 0;
}
</style>
