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
          <span>{{ totalPrice | price }}</span>
        </li>
        <li class="table__item">
          <span>Delivery</span>
          <span>{{ delivery | price }}</span>
        </li>
        <li class="table__item total">
          <span>Total</span>
          <span>{{ total | price }}</span>
        </li>
      </ul>
      <v-button @click="handleSubmit" v-if="this.cart.length"
        >Checkout</v-button
      >
    </section>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

import ShoppingCartItem from "@/components/cart/ShoppingCartItem.vue";
import VButton from "@/components/input/VButton.vue";
import VModal from "@/components/VModal.vue";

import { CartItem } from "@/store/checkout/types";

@Component({
  components: {
    ShoppingCartItem,
    VButton,
    VModal,
  },
})
export default class ShoppingCart extends Vue {
  protected handleSubmit(): void {
    this.$router.push("/checkout");
  }

  protected get cart(): CartItem[] {
    return this.$store.getters.getCart;
  }

  protected get delivery(): number {
    return this.$store.getters.getDeliveryPrice;
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
