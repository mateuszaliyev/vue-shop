<template>
  <li class="item">
    <div class="image__container">
      <router-link class="link" :to="itemPath">
        <img :alt="item.productName" class="image" :src="item.image" />
      </router-link>
      <span class="dark tag" v-if="tag">{{ tag }}</span>
      <the-button class="remove__button" @click="handleRemove">
        Remove <font-awesome-icon icon="trash" />
      </the-button>
    </div>
    <div class="details">
      <icon-button
        class="remove__icon"
        @click="handleRemove"
        icon="times"
      ></icon-button>
      <p class="title">
        <router-link class="link" :to="itemPath">
          {{ item.productName }}
        </router-link>
      </p>
      <p class="company">{{ item.company }}</p>
      <div class="figures">
        <div class="price">
          <strong>{{ price }}</strong>
        </div>
        <div class="quantity">
          <label class="quantity--desktop" :for="`q-${item.id}`"
            >Quantity:
          </label>
          <label class="quantity--mobile" :for="`q-${item.id}`">Qty: </label>
          <the-input
            class="input"
            :id="`q-${item.id}`"
            :max="100"
            :min="1"
            type="number"
            v-model.number="quantity"
          />
        </div>
      </div>
    </div>
  </li>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

import IconButton from "@/components/input/IconButton.vue";
import TheButton from "@/components/input/TheButton.vue";
import TheInput from "@/components/input/TheInput.vue";

import { CartItem, CART_DEFAULT } from "@/store/checkout/types";

@Component({
  components: {
    IconButton,
    TheButton,
    TheInput,
  },
})
export default class ShoppingCartItem extends Vue {
  @Prop({ default: CART_DEFAULT, required: true, type: Object })
  protected readonly item!: CartItem;

  @Prop({ default: "", required: false, type: String })
  protected readonly tag!: string;

  protected handleRemove(): void {
    this.$store.dispatch("removeProductFromACart", this.item);
  }

  protected get cart(): CartItem[] {
    return this.$store.getters.getCart;
  }

  protected get itemPath(): string {
    return `/products/${this.item.id}`;
  }

  protected get price(): string {
    const priceAsNumber = parseFloat(this.item.price.slice(1));
    return `$${(priceAsNumber * this.item.quantity).toFixed(2)}`;
  }

  protected get quantity(): number {
    return this.$store.getters.getCartItemQuantity(this.item);
  }

  protected set quantity(value: number) {
    this.$store.dispatch("setCartItemQuantity", {
      item: this.item,
      quantity: value || 0,
    });
  }
}
</script>

<style lang="scss" scoped>
@use "../../styles/breakpoints";
@use "../../styles/colors";

.company {
  color: colors.$gray-600;
}

.company,
.title {
  max-width: 50vw;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.details {
  align-self: stretch;
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  width: 100%;

  @include breakpoints.respond-to("md") {
    padding: 1.6rem 0;
  }
}

.figures {
  align-items: center;
  display: flex;
  font-weight: 700;
  justify-content: space-between;
  margin-top: auto;
}

.image {
  height: 100%;
  object-fit: cover;
  vertical-align: middle;
  width: 100%;

  &__container {
    flex-shrink: 0;
    height: 31.25vw;
    position: relative;
    width: 25vw;

    @include breakpoints.respond-to("md") {
      height: 24rem;
      width: 19.2rem;
    }

    &:hover .button {
      display: block;
    }
  }
}

.input {
  font-weight: 700;
  width: 6.4rem;

  @include breakpoints.respond-to("md") {
    width: 8rem;
  }
}

.item {
  align-items: center;
  display: flex;
  gap: 1.6rem;
  position: relative;

  @include breakpoints.respond-to("md") {
    border: 1px solid colors.$text-primary;
  }
}

.link {
  text-decoration: none;
}

.price {
  @include breakpoints.respond-to("md") {
    position: absolute;
    right: 4.8rem;
    top: 1.6rem;
  }
}

.quantity {
  &--desktop {
    display: none;

    @include breakpoints.respond-to("md") {
      display: unset;
    }
  }

  &--mobile {
    @include breakpoints.respond-to("md") {
      display: none;
    }
  }
}

.remove {
  &__button {
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

  &__icon {
    display: block;
    position: absolute;
    right: 0;
    top: 0;

    @include breakpoints.respond-to("md") {
      right: 1.6rem;
      top: 2rem;
    }
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
