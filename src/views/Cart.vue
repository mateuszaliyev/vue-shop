<template>
  <div v-frag>
    <the-header>Cart</the-header>
    <shopping-cart />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

import ShoppingCart from "@/components/cart/ShoppingCart.vue";
import TheHeader from "@/components/TheHeader.vue";

@Component({
  components: {
    ShoppingCart,
    TheHeader,
  },
})
export default class Cart extends Vue {}
</script>

<style lang="scss" scoped></style>
