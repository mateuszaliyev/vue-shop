<template>
  <input
    :autocomplete="autocomplete"
    class="input"
    :class="classes"
    @input="handleInput"
    :max="max"
    :min="min"
    :name="name"
    :placeholder="placeholder"
    :required="required"
    :type="type"
    :value="value"
  />
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

export type InputType = "email" | "number" | "tel" | "text";

@Component
export default class VInput extends Vue {
  @Prop({ default: "", required: false, type: String })
  protected readonly autocomplete!: string;

  @Prop({ default: false, required: false, type: Boolean })
  protected readonly error!: boolean;

  @Prop({ default: 0, required: false, type: Number })
  protected readonly max!: number;

  @Prop({ default: 0, required: false, type: Number })
  protected readonly min!: number;

  @Prop({ default: "", required: false, type: String })
  protected readonly name!: string;

  @Prop({ default: "", required: false, type: String })
  protected readonly placeholder!: string;

  @Prop({ default: false, required: false, type: Boolean })
  protected readonly required!: boolean;

  @Prop({ default: "text", required: false, type: String })
  protected readonly type!: InputType;

  protected value = "";

  protected handleInput(event: Event): void {
    const target: HTMLInputElement = event.target as HTMLInputElement;

    if (this.type === "number") {
      let value: number = parseFloat(target.value);

      if (!target.validity.valid) {
        value = this.min;
        target.value = `${value}`;
      }

      this.$emit("input", value);
    } else {
      this.$emit("input", target.value);
    }
  }

  protected get classes(): { [key: string]: boolean } {
    return {
      "input--error": this.error,
    };
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

  &--error {
    border-color: colors.$primary;
  }
}
</style>
