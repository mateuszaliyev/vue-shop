<template>
  <div id="app">
    <the-layout>
      <router-view />
    </the-layout>
  </div>
</template>

<script lang="ts">
import "@fontsource/montserrat";
import "@fontsource/roboto";

import { Component, Vue } from "vue-property-decorator";
import TheLayout from "@/components/layout/TheLayout.vue";

@Component({
  components: {
    TheLayout,
  },
})
export default class App extends Vue {
  mounted(): void {
    this.$store.dispatch("fetchCart");
    this.$store.dispatch("fetchProducts");
  }
}
</script>

<style lang="scss">
@use "styles/animations";
@use "styles/breakpoints";
@use "styles/colors";
@use "styles/global";
@use "styles/fonts";
</style>
