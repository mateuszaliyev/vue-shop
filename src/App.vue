<template>
  <div id="app">
    <Header />
    <router-view />
  </div>
</template>

<script lang="ts">
import "@fontsource/montserrat";
import "@fontsource/roboto";

import { Component, Vue } from "vue-property-decorator";
import Header from "@/components/Header.vue";

@Component({
  components: {
    Header,
  },
})
export default class App extends Vue {
  mounted(): void {
    this.$store.dispatch("fetchProducts");
  }
}
</script>

<style lang="scss">
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

html,
body {
  background: colors.$background;
  color: colors.$text-primary;
  font-family: fonts.$primary;
  font-size: 1.6rem;
  line-height: 1.5;
}
</style>
