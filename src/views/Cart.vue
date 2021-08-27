<template>
  <div v-frag>
    <the-header>Cart</the-header>
    <div class="container">
      <the-stepper class="stepper" :currentStep="currentStep" :steps="steps" />
    </div>
    <shopping-cart />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

import ShoppingCart from "@/components/cart/ShoppingCart.vue";
import TheHeader from "@/components/TheHeader.vue";
import TheStepper, { Step } from "@/components/TheStepper.vue";

@Component({
  components: {
    ShoppingCart,
    TheHeader,
    TheStepper,
  },
})
export default class Cart extends Vue {
  currentStep = 0;

  steps: Step[] = [
    {
      icon: "shopping-cart",
      title: "Order details",
    },
    {
      icon: "address-card",
      title: "Personal details",
    },
    {
      icon: "clipboard-list",
      title: "Summary",
    },
  ];
}
</script>

<style lang="scss" scoped>
.stepper {
  margin: 1.6rem 0;
}
</style>
