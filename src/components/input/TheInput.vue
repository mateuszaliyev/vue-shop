<template>
  <input
    class="input"
    @input="handleInput"
    :max="max"
    :min="min"
    :placeholder="placeholder"
    :required="required"
    :type="type"
    :value="value"
  />
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class TheInput extends Vue {
  @Prop() max!: number;
  @Prop() min!: number;
  @Prop() placeholder!: string;
  @Prop() required!: boolean;
  @Prop({ default: "text" }) type!: "number" | "text";

  value = "";

  handleInput(event: Event): void {
    const target = event.target as HTMLInputElement;

    if (this.type === "number") {
      let value = parseFloat(target.value);

      if (!target.validity.valid) {
        console.log("hi");
        value = this.min;
        target.value = `${value}`;
      }

      this.$emit("input", value);
    } else {
      this.$emit("input", target.value);
    }
  }
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
