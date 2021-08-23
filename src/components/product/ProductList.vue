<template>
  <div class="list">
    <router-link
      class="link"
      :key="product.id"
      :to="productPath(product)"
      v-for="product in products"
    >
      <product-list-item
        :alt="product.productName"
        :price="product.price"
        :src="product.image"
        :title="product.productName"
      />
    </router-link>
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

.link {
  text-decoration: none;
}

.list {
  column-gap: 3.2rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  @include breakpoints.respond-to("lg") {
    grid-template-columns: repeat(4, 1fr);
  }
}
</style>
