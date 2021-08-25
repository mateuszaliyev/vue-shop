<template>
  <header class="container header">
    <h1 class="heading"><slot></slot></h1>
    <router-link to="/cart" v-if="cart">
      <icon-button icon="shopping-cart"></icon-button>
    </router-link>
    <icon-button icon="search" v-if="search"></icon-button>
  </header>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

import IconButton from "@/components/input/IconButton.vue";

@Component({
  components: {
    IconButton,
  },
})
export default class TheHeader extends Vue {
  @Prop(Boolean) cart!: boolean;
  @Prop(Boolean) search!: boolean;
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
