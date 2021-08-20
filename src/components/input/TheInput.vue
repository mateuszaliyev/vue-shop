<template>
  <input
    class="input"
    @input="$emit('input', $event.target.value)"
    :placeholder="placeholder"
    type="text"
    :value="value"
  />
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class TheInput extends Vue {
  @Prop() placeholder!: string;

  value = "";
}
</script>

<style lang="scss" scoped>
@use "../../styles/colors";
@use "../../styles/fonts";

.input {
  border: 1px solid colors.$gray-200;
  font-family: fonts.$primary;
  font-size: inherit;
  line-height: 1.5;
  padding: 0.8rem;
}
</style>
