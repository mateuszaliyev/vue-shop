<template>
  <button class="button" :class="classes" @click="handleClick">
    <slot></slot>
  </button>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

import { TheButtonColor } from "@/components/input/types";

@Component
export default class TheButton extends Vue {
  @Prop() color!: TheButtonColor;

  handleClick(): void {
    this.$emit("click");
  }

  get classes(): { [key: string]: boolean } {
    return {
      [this.color ? `button--${this.color}` : "button--default"]: true,
    };
  }
}
</script>

<style lang="scss" scoped>
@use "../../styles/colors";
@use "../../styles/fonts";

.button {
  background: transparent;
  border: none;
  color: inherit;
  cursor: pointer;
  font-family: fonts.$primary;
  font-size: inherit;
  line-height: 1.5;
  outline: none;
  padding: 0.8rem 1.6rem;

  &:hover {
    background: colors.$gray-200;
    color: colors.$text-primary;
  }

  &--default {
    background: colors.$text-primary;
    color: colors.$text-primary-i;
  }

  &--primary {
    background: colors.$primary;
    color: colors.$text-primary-i;
  }
}
</style>
