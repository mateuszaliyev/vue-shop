<template>
  <div class="list">
    <product-list-item
      :alt="product.productName"
      :button="!isProductInACart(product)"
      @buttonClick="addProductToACart(product)"
      :href="productPath(product)"
      :key="product.id"
      :price="product.price"
      :src="product.image"
      :title="product.productName"
      v-for="product in products"
    />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

import ProductListItem from "@/components/product/ProductListItem.vue";

import { CartItem } from "@/store/cart/types";
import { Product, productDefault } from "@/store/product/types";

@Component({
  components: {
    ProductListItem,
  },
})
export default class ProductList extends Vue {
  @Prop({ default: productDefault, required: true, type: Array })
  protected readonly products!: Product[];

  protected addProductToACart(product: Product): void {
    this.$store.dispatch("addProductToACart", { product });
  }

  protected isProductInACart(product: Product): boolean {
    return this.cart.some((item) => item.id === product.id);
  }

  protected productPath(product: Product): string {
    return `/products/${product.id}`;
  }

  protected get cart(): CartItem[] {
    return this.$store.getters.getCartItems;
  }
}
</script>

<style lang="scss" scoped>
@use "../../styles/breakpoints";

.list {
  column-gap: 3.2rem;
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));

  @include breakpoints.respond-to("lg") {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }
}
</style>
