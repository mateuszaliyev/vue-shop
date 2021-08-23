<template>
  <div class="overlay dark" :class="classes" @click="handleClick"></div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from "vue-property-decorator";

@Component
export default class TheOverlay extends Vue {
  visible = this.$store.getters.getSidebarVisibility;

  @Watch("sidebarVisibility", { immediate: true })
  onSidebarVisibilityChange(value: boolean): void {
    this.visible = value;

    if (this.visible) {
      document.querySelector("body")?.classList.add("overflow-hidden");
    } else {
      document.querySelector("body")?.classList.remove("overflow-hidden");
    }
  }

  handleClick(): void {
    this.$store.dispatch("toggleSidebar");
  }

  get classes(): { [key: string]: boolean } {
    return {
      "overlay--visible": this.visible,
    };
  }

  get sidebarVisibility(): boolean {
    return this.$store.getters.getSidebarVisibility;
  }
}
</script>

<style lang="scss" scoped>
@use "../../styles/breakpoints";

.overlay {
  bottom: 0;
  cursor: pointer;
  display: none;
  left: 0;
  opacity: 0.5;
  position: fixed;
  right: 0;
  top: 0;
  z-index: 2;

  &--visible {
    display: block;

    @include breakpoints.respond-to("lg") {
      display: none;
    }
  }
}
</style>
