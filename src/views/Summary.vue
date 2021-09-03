<template>
  <div v-frag>
    <the-header>Summary</the-header>
    <section class="container">
      <the-stepper class="stepper" :currentStep="2" :steps="steps" />
    </section>
    <section class="container summary__container">
      <h2 class="headline">Order summary</h2>
      <ul class="table">
        <li class="table__item">
          <span
            >{{ totalQuantity }} item{{ totalQuantity === 1 ? "" : "s" }}</span
          >
          <span>{{ `$${totalPrice.toFixed(2)}` }}</span>
        </li>
        <li class="table__item">
          <span>Delivery</span>
          <span>{{ `$${delivery.toFixed(2)}` }}</span>
        </li>
        <li class="table__item total">
          <span>Total</span>
          <span>{{ `$${total.toFixed(2)}` }}</span>
        </li>
      </ul>
    </section>
    <section class="container summary__container">
      <h2 class="headline">Order details</h2>
      <ul class="cart">
        <li class="item" :key="index" v-for="(item, index) in cart">
          <div class="image__container">
            <img :alt="item.productName" class="image" :src="item.image" />
          </div>
          <div class="item__details">
            <p class="item__detail">{{ item.productName }}</p>
            <p class="item__detail">Quantity: {{ item.quantity }}</p>
            <p class="item__detail">{{ getItemPrice(item) }}</p>
          </div>
        </li>
      </ul>
    </section>
    <section class="container summary__container">
      <h2 class="headline">Shipping address</h2>
      <ul class="details">
        <li class="details__item">
          <span>Name</span>
          <span>{{
            `${shippingAddress.firstName} ${shippingAddress.lastName}`
          }}</span>
        </li>
        <li class="details__item">
          <span>Address</span>
          <span>{{ shippingAddress.address }}</span>
        </li>
        <li class="details__item">
          <span></span>
          <span>{{
            `${shippingAddress.city}, ${shippingAddress.postalCode}, ${shippingAddress.country}`
          }}</span>
        </li>
        <li class="details__item">
          <span>Phone number</span>
          <span>{{ shippingAddress.phoneNumber }}</span>
        </li>
        <li class="details__item">
          <span>Email</span>
          <span>{{ shippingAddress.email }}</span>
        </li>
      </ul>
    </section>
    <section class="container summary__container" v-if="billing">
      <h2 class="headline">Billing address</h2>
      <ul class="details">
        <li class="details__item">
          <span>Name</span>
          <span>{{
            `${billingAddress.firstName} ${billingAddress.lastName}`
          }}</span>
        </li>
        <li class="details__item">
          <span>Address</span>
          <span>{{ billingAddress.address }}</span>
        </li>
        <li class="details__item">
          <span></span>
          <span>{{
            `${billingAddress.city}, ${billingAddress.postalCode}, ${billingAddress.country}`
          }}</span>
        </li>
        <li class="details__item">
          <span>Phone number</span>
          <span>{{ billingAddress.phoneNumber }}</span>
        </li>
      </ul>
    </section>
    <section class="container summary__container">
      <h2 class="headline">Payment details</h2>
      <template v-if="payment.method === paymentMethodCreditCard">
        <ul class="details">
          <li class="details__item">
            <span>Payment method</span>
            <span>{{ payment.method }}</span>
          </li>
          <li class="details__item">
            <span>Card number</span>
            <span>{{ censoredCardNumber }}</span>
          </li>
          <li class="details__item">
            <span>Card name</span>
            <span>{{ payment.cardName }}</span>
          </li>
        </ul>
      </template>
      <template v-if="payment.method === paymentMethodBankTransfer">
        <ul class="details">
          <li class="details__item">
            <span>Name</span>
            <span>LOGO Vue (UK) Ltd.</span>
          </li>
          <li class="details__item">
            <span>Bank name</span>
            <span>Barclays PLC</span>
          </li>
          <li class="details__item">
            <span>IBAN</span>
            <span>GB 13 BUKB 601613 31926819</span>
          </li>
          <li class="details__item">
            <span>Address</span>
            <span>Fulham Rd, London SW6 1HS, United Kingdom</span>
          </li>
        </ul>
      </template>
    </section>
    <section class="container summary__container">
      <v-button @click="handleModalOpen">Place order</v-button>
    </section>
    <v-modal @close="handleModalClose" :open="modalOpen" title="Order complete">
      <div class="modal__content">
        <p>You will receive a confirmation email with details of your order</p>
        <v-button
          class="modal__button"
          @click="handleModalClose"
          color="primary"
          >Browse more products</v-button
        >
      </div>
    </v-modal>
  </div>
</template>

<script lang="ts">
import {
  Address,
  ADDRESS_DEFAULT,
  CartItem,
  Payment,
  PaymentMethod,
  PAYMENT_DEFAULT,
} from "@/store/checkout/types";
import { Component, Vue } from "vue-property-decorator";

import TheHeader from "@/components/TheHeader.vue";
import TheStepper from "@/components/TheStepper.vue";
import VButton from "@/components/input/VButton.vue";
import VModal from "@/components/VModal.vue";

import { CHECKOUT_STEPS } from "@/lib/constants";
import { Step } from "@/lib/types";

@Component({
  components: {
    TheHeader,
    TheStepper,
    VButton,
    VModal,
  },
})
export default class Summary extends Vue {
  protected modalOpen = false;

  protected getItemPrice(item: CartItem): string {
    const priceAsNumber = parseFloat(item.price.slice(1));
    return `$${(priceAsNumber * item.quantity).toFixed(2)}`;
  }

  protected handleModalClose(): void {
    this.$store.dispatch("deleteOrder");
    this.$router.replace("/shirts");
    this.modalOpen = false;
  }

  protected handleModalOpen(): void {
    this.modalOpen = true;
  }

  protected mounted(): void {
    if (
      this.$store.getters.getBillingAddress === ADDRESS_DEFAULT ||
      this.$store.getters.getPayment === PAYMENT_DEFAULT ||
      this.$store.getters.getShippingAddress === ADDRESS_DEFAULT
    ) {
      this.$router.replace("/checkout");
    }
  }

  protected get billing(): boolean {
    return this.$store.getters.getBilling;
  }

  protected get billingAddress(): Address {
    return this.$store.getters.getBillingAddress;
  }

  protected get cart(): CartItem[] {
    return this.$store.getters.getCart;
  }

  protected get censoredCardNumber(): string {
    if (this.payment.method === this.paymentMethodCreditCard) {
      return this.payment.cardNumber
        .split("")
        .reduce(
          (prev, curr, index, arr) =>
            `${prev}${index >= arr.length - 4 ? curr : "*"}`,
          ""
        );
    }
    return "";
  }

  protected get delivery(): number {
    return this.$store.getters.getDeliveryPrice;
  }

  protected get payment(): Payment {
    return this.$store.getters.getPayment;
  }

  protected get paymentMethodBankTransfer(): PaymentMethod {
    return PaymentMethod.BankTransfer;
  }

  protected get paymentMethodCreditCard(): PaymentMethod {
    return PaymentMethod.CreditCard;
  }

  protected get shippingAddress(): Address {
    return this.$store.getters.getShippingAddress;
  }

  protected get steps(): ReadonlyArray<Step> {
    return CHECKOUT_STEPS;
  }

  protected get total(): number {
    return this.$store.getters.getTotal;
  }

  protected get totalPrice(): number {
    return this.$store.getters.getTotalPrice;
  }

  protected get totalQuantity(): number {
    return this.$store.getters.getTotalQuantity;
  }
}
</script>

<style lang="scss" scoped>
@use "../styles/breakpoints";
@use "../styles/colors";

.cart {
  display: grid;
  gap: 1.6rem;
  grid-template-columns: minmax(0, 1fr);
  list-style-type: none;

  @include breakpoints.respond-to("md") {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

.details {
  background: colors.$gray-100;
  list-style-type: none;

  &__item {
    display: flex;
    flex-wrap: wrap;
    padding: 1.6rem;

    & > span {
      display: block;
      width: 100%;

      &:first-child {
        display: none;
      }

      @include breakpoints.respond-to("sm") {
        width: 50%;
        &:first-child {
          display: unset;
        }
      }
    }
  }
}

.headline {
  font-size: 2.4rem;
  font-weight: 400;
}

.image {
  height: 100%;
  object-fit: cover;
  width: 100%;

  &__container {
    flex-shrink: 0;
    height: 12rem;
    position: relative;
    width: 9.6rem;
  }
}

.item {
  background-color: colors.$gray-100;
  display: flex;

  &__detail {
    max-width: calc(100vw - 18rem);
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;

    @include breakpoints.respond-to("md") {
      max-width: calc(0.5 * (100vw - 32rem));
    }

    @include breakpoints.respond-to("lg") {
      max-width: calc(0.5 * (100vw - 56rem));
    }

    @include breakpoints.respond-to("xl") {
      max-width: 32rem;
    }

    &s {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      padding: 0.8rem 1.6rem;
      flex-grow: 1;
    }
  }
}

.modal {
  &__button {
    font-size: 1.5rem;
    padding: 1.2rem 2.4rem;
  }

  &__content {
    align-items: center;
    display: flex;
    flex-direction: column;
    gap: 2.4rem;
    padding-top: 1.6rem;
    text-align: center;
  }
}

.stepper {
  margin: 1.6rem 0;
}

.summary__container {
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  margin: 1.6rem 0;
}

.table {
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  list-style-type: none;

  &__item {
    display: flex;
    justify-content: space-between;

    & > span {
      display: block;
    }
  }
}

.total {
  border-top: 1px solid colors.$text-primary;
  padding-top: 1.6rem;
  font-weight: 700;
}
</style>
