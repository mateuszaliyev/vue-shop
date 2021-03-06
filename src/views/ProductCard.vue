<template>
  <div v-frag>
    <template v-if="!loading">
      <the-header cart search>{{ product.company }}</the-header>
      <section class="container product">
        <h1 class="title--mobile">{{ product.productName }}</h1>
        <p class="price--mobile">{{ price }}</p>
        <div class="image__container">
          <img :alt="product.productName" class="image" :src="product.image" />
        </div>
        <div class="details">
          <h1 class="title--desktop">{{ product.productName }}</h1>
          <p class="price--desktop">{{ price }}</p>
          <div class="quantity">
            <label :for="`q-${product.id}`">Quantity:</label>
            <v-input :max="100" :min="1" type="number" v-model="quantity" />
          </div>
          <v-button @click="addProductToACart">Add to cart</v-button>
          <p class="description">{{ product.description }}</p>
        </div>
      </section>
    </template>
    <template v-else> Loading... </template>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

import VButton from "@/components/input/VButton.vue";
import VInput from "@/components/input/VInput.vue";
import TheHeader from "@/components/TheHeader.vue";

import { Product } from "@/store/product/types";

@Component({
  components: {
    VButton,
    VInput,
    TheHeader,
  },
})
export default class ProductCard extends Vue {
  protected quantity = 1;

  protected addProductToACart(): void {
    this.$store.dispatch("addProductToACart", {
      product: this.product,
      quantity: this.quantity,
    });
    this.$router.back();
  }

  protected get loading(): boolean {
    return this.$store.getters.getProductLoading;
  }

  protected get price(): string {
    if (this.product) {
      return `$${(
        parseFloat(this.product.price.slice(1)) * this.quantity
      ).toFixed(2)}`;
    }
    return `${(0).toFixed(2)}`;
  }

  protected get product(): Product | null {
    return (
      this.products.find(
        (item) => item.id === parseInt(this.$route.params.id)
      ) ?? null
    );
  }

  protected get products(): Product[] {
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
