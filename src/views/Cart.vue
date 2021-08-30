<template>
  <div v-frag>
    <the-header>Cart</the-header>
    <div class="container">
      <the-stepper class="stepper" :currentStep="0" :steps="steps" />
    </div>
    <shopping-cart />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

import ShoppingCart from "@/components/cart/ShoppingCart.vue";
import TheHeader from "@/components/TheHeader.vue";
import TheStepper from "@/components/TheStepper.vue";

import { CHECKOUT_STEPS } from "@/lib/constants";
import { Step } from "@/lib/types";

@Component({
  components: {
    ShoppingCart,
    TheHeader,
    TheStepper,
  },
})
export default class Cart extends Vue {
  get steps(): ReadonlyArray<Step> {
    return CHECKOUT_STEPS;
  }
}
</script>

<style lang="scss" scoped>
.stepper {
  margin: 1.6rem 0;
}
</style>
