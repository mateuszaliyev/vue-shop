<template>
  <div v-frag>
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
        <product-list />
      </section>
    </template>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

import ProductList from "@/components/product/ProductList.vue";
import TheJumbotron from "@/components/TheJumbotron.vue";

@Component({
  components: {
    ProductList,
    TheJumbotron,
  },
})
export default class Home extends Vue {
  get itemCount(): number {
    return this.$store.getters.getItemCount;
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
