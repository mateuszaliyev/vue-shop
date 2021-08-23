<template>
  <div class="list">
    <product-list-item
      :alt="product.productName"
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
import { Component, Vue } from "vue-property-decorator";

import ProductListItem from "@/components/product/ProductListItem.vue";

import { Product } from "@/store/product/types";

@Component({
  components: {
    ProductListItem,
  },
})
export default class ProductList extends Vue {
  productPath(product: Product): string {
    return `/products/${product.id}`;
  }

  get products(): Product[] {
    return this.$store.getters.getItems;
  }
}
</script>

<style lang="scss" scoped>
@use "../../styles/breakpoints";

.list {
  column-gap: 3.2rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  @include breakpoints.respond-to("lg") {
    grid-template-columns: repeat(4, 1fr);
  }
}
</style>
