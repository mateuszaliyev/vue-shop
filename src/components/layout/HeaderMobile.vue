<template>
  <header class="dark header">
    <div class="logo">Logo</div>
    <icon-button class="button" @click="handleClick" icon="bars"></icon-button>
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
    this.$store.dispatch("toggleSidebar");
  }
}
</script>

<style lang="scss" scoped>
@use "../../styles/breakpoints";
@use "../../styles/colors";

.button {
  padding: 2.4rem 1.6rem;

  &:hover {
    background-color: colors.$gray-200;
    color: colors.$text-primary;
  }
}

.header {
  display: flex;
  font-size: 2.4rem;
  justify-content: space-between;
  left: 0;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1;

  @include breakpoints.respond-to("lg") {
    display: none;
  }
}

.logo {
  letter-spacing: 0.162em;
  padding: 2.4rem 1.6rem;
  text-transform: uppercase;
}
</style>
