<template>
  <header class="container header">
    <h1 class="heading"><slot></slot></h1>
    <router-link to="/cart" v-if="cart">
      <v-button-icon icon="shopping-cart"></v-button-icon>
    </router-link>
    <router-link to="/search" v-if="search">
      <v-button-icon icon="search"></v-button-icon>
    </router-link>
  </header>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

import VButtonIcon from "@/components/input/VButtonIcon.vue";

@Component({
  components: {
    VButtonIcon,
  },
})
export default class TheHeader extends Vue {
  @Prop({ default: false, required: false, type: Boolean })
  protected readonly cart!: boolean;

  @Prop({ default: false, required: false, type: Boolean })
  protected readonly search!: boolean;
}
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  font-size: 2.4rem;
  gap: 1.6rem;
  padding-bottom: 2.4rem;
  padding-top: 2.4rem;
}

.heading {
  font-size: inherit;
  font-weight: 400;
  margin-right: auto;
  overflow: hidden;
  text-overflow: ellipsis;
  text-transform: capitalize;
  white-space: nowrap;
  max-width: calc(70vw - 3.2rem);
}
</style>
