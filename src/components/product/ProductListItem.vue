<template>
  <figure class="item">
    <div class="image__container">
      <router-link class="link" :to="href">
        <img :alt="alt" class="image" :src="src" />
      </router-link>
      <span class="dark tag" v-if="tag">{{ tag }}</span>
      <the-button class="button" @click="handleClick" v-show="button">
        Buy now <font-awesome-icon icon="shopping-cart" />
      </the-button>
    </div>
    <router-link class="link" :to="href">
      <figcaption class="caption">
        {{ title }}
        <br />
        <strong :class="priceClasses">{{ price }}</strong>
      </figcaption>
    </router-link>
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
  @Prop(Boolean) button!: boolean;
  @Prop() href!: string;
  @Prop() price!: string;
  @Prop() src!: string;
  @Prop() tag!: string;
  @Prop() title!: string;

  handleClick(): void {
    this.$emit("buttonClick");
  }

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
