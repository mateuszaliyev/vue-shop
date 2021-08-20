<template>
  <header class="container header">
    <h1 class="heading"><slot></slot></h1>
    <icon-button icon="shopping-cart"></icon-button>
    <icon-button icon="search"></icon-button>
  </header>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

import IconButton from "@/components/input/IconButton.vue";

@Component({
  components: {
    IconButton,
  },
})
export default class HeaderMain extends Vue {}
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
  text-transform: capitalize;
}
</style>
