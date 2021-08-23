<template>
  <figure class="item">
    <div class="image__container">
      <img :alt="alt" class="image" :src="src" />
      <span class="dark tag" v-if="tag">{{ tag }}</span>
      <router-link class="link" :to="href">
        <the-button class="button">
          Buy now <font-awesome-icon icon="shopping-cart" />
        </the-button>
      </router-link>
    </div>
    <figcaption class="caption">
      {{ title }}
      <br />
      <strong :class="priceClasses">{{ price }}</strong>
    </figcaption>
  </figure>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

import TheButton from "@/components/input/TheButton.vue";

@Component({
  components: {
    TheButton,
  },
})
export default class ProductListItem extends Vue {
  @Prop() alt!: string;
  @Prop() href!: string;
  @Prop() price!: string;
  @Prop() src!: string;
  @Prop() tag!: string;
  @Prop() title!: string;

  get priceClasses(): { [key: string]: boolean } {
    return {
      "price--sale":
        this.tag !== undefined && this.tag.toLowerCase() === "sale",
    };
  }
}
</script>

<style lang="scss" scoped>
@use "../../styles/colors";

.button {
  font-size: 1.5rem;
  white-space: nowrap;
}

.caption {
  font-size: 1.5rem;
  margin: 1.5rem 0;
}

.image {
  object-fit: cover;
  vertical-align: middle;
  width: 100%;

  &:hover + .link {
    display: block;
  }

  &__container {
    position: relative;
  }
}

.item {
  position: relative;
}

.link {
  display: none;
  left: 50%;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);

  &:hover {
    display: block;
  }
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
