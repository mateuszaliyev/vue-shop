<template>
  <div class="wrapper">
    <input
      :autocomplete="autocomplete"
      class="input"
      :class="inputClasses"
      :id="id"
      @input="handleInput"
      :max="max"
      :min="min"
      :name="name"
      :placeholder="placeholder"
      :required="required"
      :type="type"
      :value="value"
    />
    <p class="text" :class="textClasses" v-show="helperText">
      {{ helperText }}
    </p>
  </div>
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

  @Prop({ default: "", required: false, type: String })
  protected readonly helperText!: string;

  @Prop({ required: false, type: [String] })
  protected readonly id!: string;

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

  @Prop({ default: "", required: true, type: [Number, String] })
  protected readonly value!: InputType;

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
    this.$emit("change");
  }

  protected get inputClasses(): { [key: string]: boolean } {
    return {
      "input--error": this.error,
    };
  }

  protected get textClasses(): { [key: string]: boolean } {
    return {
      "text--error": this.error,
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
  width: 100%;

  &--error {
    border-color: colors.$primary;
  }
}

.text {
  color: colors.$gray-600;
  margin-left: 0.9rem;
  margin-top: 0.4rem;
  min-height: 2.4rem;

  &--error {
    color: colors.$primary;
    font-weight: 700;
  }
}

.wrapper {
  display: flex;
  flex-direction: column;
}
</style>
