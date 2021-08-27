<template>
  <div v-frag>
    <the-header cart search>{{ this.$route.params.category }}</the-header>
    <section class="container">
      <the-jumbotron
        alt="Jeans"
        href="#products"
        src="https://www.w3schools.com/w3images/jeans.jpg"
        subtitle="Collection 2016"
        title="New arrivals"
      />
    </section>
    <template v-if="itemCount > 0">
      <section class="container" id="products">
        <p class="count">{{ itemCount }} items</p>
      </section>
      <section class="container">
        <product-list :products="products" />
      </section>
    </template>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

import ProductList from "@/components/product/ProductList.vue";
import TheHeader from "@/components/TheHeader.vue";
import TheJumbotron from "@/components/TheJumbotron.vue";

import { Product } from "@/store/product/types";

@Component({
  components: {
    TheHeader,
    ProductList,
    TheJumbotron,
  },
})
export default class Home extends Vue {
  protected get itemCount(): number {
    return this.$store.getters.getProductItemCount;
  }

  protected get products(): Product[] {
    return this.$store.getters.getProductItems;
  }
}
</script>

<style lang="scss" scoped>
@use "../styles/colors";

.count {
  color: colors.$gray-600;
  font-size: 1.5rem;
  margin: 1.5rem 0;
}
</style>
