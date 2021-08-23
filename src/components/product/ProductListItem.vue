<template>
  <figure class="item">
    <div class="image__container">
      <img :alt="alt" class="image" :src="src" />
      <span class="dark tag" v-if="tag">{{ tag }}</span>
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

@Component
export default class ProductListItem extends Vue {
  @Prop() alt!: string;
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

.caption {
  font-size: 1.5rem;
  margin: 1.5rem 0;
}

.image {
  object-fit: cover;
  vertical-align: middle;
  width: 100%;
}

.item {
  position: relative;
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
