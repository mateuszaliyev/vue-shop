<template>
  <div class="list">
    <product-list-item
      :key="index"
      :product="product"
      v-for="(product, index) in products"
    />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

import ProductListItem from "@/components/product/ProductListItem.vue";

import { Product, PRODUCT_DEFAULT } from "@/store/product/types";

@Component({
  components: {
    ProductListItem,
  },
})
export default class ProductList extends Vue {
  @Prop({ default: PRODUCT_DEFAULT, required: true, type: Array })
  protected readonly products!: Product[];
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
