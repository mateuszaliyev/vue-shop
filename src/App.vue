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
    this.$store.dispatch("fetchProducts");
  }
}
</script>

<style lang="scss">
@use "styles/breakpoints";
@use "styles/colors";
@use "styles/fonts";

:root {
  font-size: 62.5%;
}

*,
*::after,
*::before {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

a {
  color: inherit;
  text-decoration: underline;
}

html,
body {
  background: colors.$background;
  color: colors.$text-primary;
  font-family: fonts.$primary;
  font-size: 1.6rem;
  line-height: 1.5;
  scroll-behavior: smooth;
}

#app {
  display: flex;
  margin: 0 auto;
  max-width: breakpoints.breakpoint("xl");
  min-height: 100vh;
}

.container {
  @include breakpoints.container;
}

.dark {
  background: colors.$background-i;
  color: colors.$text-primary-i;
}

.light {
  background: colors.$gray-100;
  color: colors.$text-primary;
}

.overflow-hidden {
  overflow: hidden;
}
</style>
