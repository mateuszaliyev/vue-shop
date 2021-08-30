<template>
  <div v-frag>
    <section class="container">
      <ul class="cart">
        <shopping-cart-item :item="item" :key="item.id" v-for="item in cart" />
      </ul>
    </section>
    <section class="container summary">
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
      <the-button @click="handleSubmit" v-if="this.cart.length"
        >Checkout</the-button
      >
    </section>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

import ShoppingCartItem from "@/components/cart/ShoppingCartItem.vue";
import TheButton from "@/components/input/TheButton.vue";
import TheModal from "@/components/TheModal.vue";

import { CartItem } from "@/store/checkout/types";

@Component({
  components: {
    ShoppingCartItem,
    TheButton,
    TheModal,
  },
})
export default class ShoppingCart extends Vue {
  protected handleSubmit(): void {
    this.$store.dispatch("setCurrentStep", 1);
    this.$router.push("/checkout");
  }

  protected get cart(): CartItem[] {
    return this.$store.getters.getCart;
  }

  protected get delivery(): number {
    return this.cart.reduce(
      (prev, item) =>
        prev +
        parseFloat(item.price.slice(1)) * 0.05 +
        parseFloat(item.price.slice(1)) * item.quantity * 0.01,
      0
    );
  }

  protected get total(): number {
    return this.delivery + this.totalPrice;
  }

  protected get totalPrice(): number {
    return this.cart.reduce(
      (prev, item) => prev + parseFloat(item.price.slice(1)) * item.quantity,
      0
    );
  }

  protected get totalQuantity(): number {
    return this.cart.reduce((prev, item) => prev + item.quantity, 0);
  }
}
</script>

<style lang="scss" scoped>
@use "../../styles/colors";

.cart {
  display: flex;
  flex-direction: column;
  gap: 3.6rem;
  list-style-type: none;
}

.headline {
  font-weight: 400;
  font-size: 2.4rem;
  width: 100%;
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

.summary {
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
  padding-bottom: 2.4rem;
  padding-top: 2.4rem;
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
