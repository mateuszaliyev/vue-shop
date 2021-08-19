<template>
  <input class="input" :placeholder="placeholder" type="text" />
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class TheInput extends Vue {
  @Prop() placeholder!: string;
}
</script>

<style lang="scss" scoped>
@use "../../styles/colors";
@use "../../styles/fonts";

.input {
  border: 1px solid colors.$gray-200;
  font-family: fonts.$primary;
  font-size: 1.5rem;
  line-height: 1.5;
  padding: 0.8rem;
}
</style>
