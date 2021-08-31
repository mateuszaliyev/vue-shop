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
            class="input"
            name="fname"
            placeholder="First name"
            required
            v-model="shippingAddress.firstName"
          />
          <v-input
            autocomplete="shipping family-name"
            class="input"
            name="lname"
            placeholder="Last name"
            required
            v-model="shippingAddress.lastName"
          />
        </div>
        <v-input
          autocomplete="shipping street-address"
          class="input"
          name="address"
          placeholder="Address"
          required
          v-model="shippingAddress.address"
        />
        <div class="row">
          <v-input
            autocomplete="shipping address-level2"
            class="input"
            name="city"
            placeholder="City"
            required
            v-model="shippingAddress.city"
          />
          <v-input
            autocomplete="shipping address-level1"
            class="input"
            name="state"
            placeholder="State"
            required
            v-model="shippingAddress.state"
          />
        </div>
        <div class="row">
          <v-input
            autocomplete="shipping postal-code"
            class="input"
            name="postal"
            placeholder="Postal code"
            required
            v-model="shippingAddress.postalCode"
          />
          <v-input
            autocomplete="shipping country"
            class="input"
            name="country"
            placeholder="Country"
            required
            v-model="shippingAddress.country"
          />
        </div>
        <div class="row">
          <v-input
            autocomplete="shipping email"
            class="input"
            name="email"
            placeholder="Email"
            required
            type="email"
            v-model="shippingAddress.email"
          />
          <v-input
            autocomplete="shipping phone"
            class="input"
            name="country"
            placeholder="Phone number"
            required
            type="tel"
            v-model="shippingAddress.phone"
          />
        </div>
        <div class="checkbox">
          <v-checkbox id="billing" v-model="billing" />
          <label for="billing">
            My billing and delivery information are different.
          </label>
        </div>
      </section>
      <section class="container form__container" v-if="billing">
        <h2 class="headline">Billing Address</h2>
        <div class="row">
          <v-input
            autocomplete="billing given-name"
            class="input"
            name="fname"
            placeholder="First name"
            :required="billing"
            v-model="billingAddress.firstName"
          />
          <v-input
            autocomplete="billing family-name"
            class="input"
            name="lname"
            placeholder="Last name"
            :required="billing"
            v-model="billingAddress.lastName"
          />
        </div>
        <v-input
          autocomplete="billing street-address"
          class="input"
          name="address"
          placeholder="Address"
          :required="billing"
          v-model="billingAddress.address"
        />
        <div class="row">
          <v-input
            autocomplete="billing address-level2"
            class="input"
            name="city"
            placeholder="City"
            :required="billing"
            v-model="billingAddress.city"
          />
          <v-input
            autocomplete="billing address-level1"
            class="input"
            name="state"
            placeholder="State"
            :required="billing"
            v-model="billingAddress.state"
          />
        </div>
        <div class="row">
          <v-input
            autocomplete="billing postal-code"
            class="input"
            name="postal"
            placeholder="Postal code"
            :required="billing"
            v-model="billingAddress.postalCode"
          />
          <v-input
            autocomplete="billing country"
            class="input"
            name="country"
            placeholder="Country"
            :required="billing"
            v-model="billingAddress.country"
          />
        </div>
        <v-input
          autocomplete="billing phone"
          class="input"
          name="country"
          placeholder="Phone number"
          type="tel"
          :required="billing"
          v-model="billingAddress.phone"
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
          <label :for="paymentMethodCreditCard">Credit/Debit card</label>
        </div>
        <template v-if="payment.method === paymentMethodCreditCard">
          <v-input
            autocomplete="payment cc-number"
            class="input"
            name="cardnumber"
            placeholder="Card number"
            :required="payment.method === paymentMethodCreditCard"
            v-model="payment.cardNumber"
          />
          <v-input
            autocomplete="payment cc-name"
            class="input"
            name="ccname"
            placeholder="Name on card"
            :required="payment.method === paymentMethodCreditCard"
            v-model="payment.name"
          />
          <div class="row">
            <v-input
              autocomplete="payment cc-exp"
              class="input"
              name="exp-date"
              placeholder="Expiry date (MM / YY)"
              :required="payment.method === paymentMethodCreditCard"
              v-model="payment.expiryDate"
            />
            <v-input
              autocomplete="payment cc-csc"
              class="input"
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
          <label :for="paymentMethodBankTransfer">Bank transfer</label>
        </div>
      </section>
      <section class="container form__container">
        <div class="checkbox">
          <v-checkbox id="consent" required v-model="consent" />
          <label for="consent"> I'm 13+ years old. </label>
        </div>
        <div class="checkbox">
          <v-checkbox id="newsletter" v-model="newsletter" />
          <label for="newsletter">
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
    VButton,
    VCheckbox,
    TheHeader,
    VInput,
    VRadio,
    TheStepper,
  },
})
export default class Checkout extends Vue {
  protected billing = false;
  protected billingAddress: Address = ADDRESS_DEFAULT;
  protected consent = false;
  protected newsletter = false;
  protected payment: Payment = PAYMENT_DEFAULT;
  protected shippingAddress: Address = ADDRESS_DEFAULT;

  protected handlePaymentMethodChange(method: PaymentMethod): void {
    this.payment.method = method;
  }

  protected handleSubmit(): void {
    console.log(this.shippingAddress.firstName);
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

.input {
  width: 100%;
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
