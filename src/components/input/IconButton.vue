<template>
  <button class="button" @click="handleClick">
    <font-awesome-icon :icon="icon"></font-awesome-icon>
  </button>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class IconButton extends Vue {
  @Prop() icon!: string;

  handleClick(): void {
    this.$emit("click");
  }
}
</script>

<style lang="scss" scoped>
.button {
  background: transparent;
  border: none;
  color: inherit;
  cursor: pointer;
  font-size: inherit;
  outline: none;
}
</style>
