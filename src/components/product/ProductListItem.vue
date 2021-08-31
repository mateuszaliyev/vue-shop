<template>
  <figure class="item">
    <div class="image__container">
      <router-link class="link" :to="productPath">
        <img :alt="product.productName" class="image" :src="product.image" />
      </router-link>
      <span class="dark tag" v-if="tag">{{ tag }}</span>
      <v-button
        class="button"
        @click="addProductToACart"
        v-show="!productInACart"
      >
        Buy now <font-awesome-icon icon="shopping-cart" />
      </v-button>
    </div>
    <router-link class="link" :to="productPath">
      <figcaption class="caption">
        {{ product.productName }}
        <br />
        <strong :class="priceClasses">{{ product.price }}</strong>
      </figcaption>
    </router-link>
  </figure>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

import VButton from "@/components/input/VButton.vue";

import { Product, PRODUCT_DEFAULT } from "@/store/product/types";
import { CartItem } from "@/store/checkout/types";

@Component({
  components: {
    VButton,
  },
})
export default class ProductListItem extends Vue {
  @Prop({ default: PRODUCT_DEFAULT, required: true, type: Object })
  protected readonly product!: Product;

  @Prop({ default: "", required: false, type: String })
  protected readonly tag!: string;

  protected addProductToACart(): void {
    this.$store.dispatch("addProductToACart", { product: this.product });
  }

  protected handleClick(): void {
    this.$emit("buttonClick");
  }

  protected get cart(): CartItem[] {
    return this.$store.getters.getCart;
  }

  protected get priceClasses(): { [key: string]: boolean } {
    return {
      "price--sale":
        this.tag !== undefined && this.tag.toLowerCase() === "sale",
    };
  }

  protected get productInACart(): boolean {
    return this.cart.some((item) => item.id === this.product.id);
  }

  protected get productPath(): string {
    return `/products/${this.product.id}`;
  }
}
</script>

<style lang="scss" scoped>
@use "../../styles/colors";

.button {
  display: none;
  font-size: 1.5rem;
  left: 50%;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  white-space: nowrap;

  &:hover {
    display: block;
  }
}

.caption {
  font-size: 1.5rem;
  margin: 1.5rem 0;
  overflow-wrap: break-word;
}

.image {
  object-fit: cover;
  vertical-align: middle;
  width: 100%;

  &__container {
    position: relative;

    &:hover .button {
      display: block;
    }
  }
}

.item {
  position: relative;
}

.link {
  text-decoration: none;
}

.price {
  &--sale {
    color: colors.$primary;
  }
}

.tag {
  font-size: 1.5rem;
  left: 0;
  padding: 0 0.8rem;
  position: absolute;
  text-transform: capitalize;
  top: 0;
}
</style>
