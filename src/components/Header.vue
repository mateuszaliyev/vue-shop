<template>
  <header class="container">
    <div class="logo">Logo</div>
    <icon-button class="button" @click="handleClick" icon="bars"></icon-button>
  </header>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

import IconButton from "@/components/IconButton.vue";

@Component({
  components: {
    IconButton,
  },
})
export default class Header extends Vue {
  handleClick(): void {
    console.log("clicked");
  }
}
</script>

<style lang="scss" scoped>
@use "../styles/colors";

.button {
  padding: 2.4rem 1.6rem;
}

.container {
  background: colors.$background-i;
  color: colors.$text-primary-i;
  display: flex;
  font-size: 2.4rem;
  justify-content: space-between;
}

.logo {
  letter-spacing: 0.162em;
  padding: 2.4rem 1.6rem;
  text-transform: uppercase;
}
</style>
