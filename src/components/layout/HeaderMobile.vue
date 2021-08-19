<template>
  <header class="container dark header">
    <div class="logo">Logo</div>
    <icon-button @click="handleClick" icon="bars"></icon-button>
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
export default class TheHeader extends Vue {
  handleClick(): void {
    console.log("clicked");
  }
}
</script>

<style lang="scss" scoped>
@use "../../styles/breakpoints";
@use "../../styles/colors";

.header {
  display: flex;
  font-size: 2.4rem;
  justify-content: space-between;
  padding-bottom: 2.4rem;
  padding-top: 2.4rem;

  @include breakpoints.respond-to("lg") {
    display: none;
  }
}

.logo {
  letter-spacing: 0.162em;
  text-transform: uppercase;
}
</style>
