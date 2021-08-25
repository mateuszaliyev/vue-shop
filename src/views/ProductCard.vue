<template>
  <div v-frag>
    <template v-if="!loading">
      <the-header cart search>{{ product.company }}</the-header>
      <section class="container product">
        <h1 class="title--mobile">{{ product.productName }}</h1>
        <p class="price--mobile">{{ product.price }}</p>
        <div class="image__container">
          <img :alt="product.productName" class="image" :src="product.image" />
        </div>
        <div class="details">
          <h1 class="title--desktop">{{ product.productName }}</h1>
          <p class="price--desktop">{{ product.price }}</p>
          <div class="quantity">
            <label :for="`q-${product.id}`">Quantity:</label>
            <the-input :max="100" :min="1" type="number" v-model="quantity" />
          </div>
          <the-button @click="addProductToACart">Add to cart</the-button>
          <p class="description">{{ product.description }}</p>
        </div>
      </section>
    </template>
    <template v-else> Loading... </template>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

import TheButton from "@/components/input/TheButton.vue";
import TheInput from "@/components/input/TheInput.vue";
import TheHeader from "@/components/TheHeader.vue";

import { Product } from "@/store/product/types";

@Component({
  components: {
    TheButton,
    TheInput,
    TheHeader,
  },
})
export default class ProductCard extends Vue {
  quantity = 1;

  addProductToACart(): void {
    this.$store.dispatch("addProductToACart", {
      product: this.product,
      quantity: this.quantity,
    });
    this.$router.back();
  }

  get loading(): boolean {
    return this.$store.getters.getProductLoading;
  }

  get product(): Product | null {
    return (
      this.products.find(
        (item) => item.id === parseInt(this.$route.params.id)
      ) ?? null
    );
  }

  get products(): Product[] {
    return this.$store.getters.getProductItems;
  }
}
</script>

<style lang="scss" scoped>
@use "sass:math";

@use "../styles/breakpoints";
@use "../styles/colors";

.description {
  color: colors.$gray-600;
}

.details {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  gap: 1.6rem;
}

.image {
  object-fit: cover;
  vertical-align: middle;
  width: 100%;

  &__container {
    flex-shrink: 0;
    width: 100%;

    @include breakpoints.respond-to("md") {
      height: 50rem;
      width: 40rem;
    }
  }
}

.price,
.title {
  &--desktop {
    display: none;

    @include breakpoints.respond-to("md") {
      display: block;
    }
  }

  &--mobile {
    display: block;

    @include breakpoints.respond-to("md") {
      display: none;
    }
  }
}

.product {
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  padding-bottom: 1.6rem;

  @include breakpoints.respond-to("md") {
    flex-direction: row;
  }
}

.quantity {
  align-items: center;
  display: flex;
  justify-content: space-between;
}
</style>
