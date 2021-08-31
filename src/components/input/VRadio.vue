<template>
  <label class="label" :class="classes" @click="handleChange" :for="customId">
    <input :checked="checked" class="input" :id="customId" type="radio" />
    <span class="checkmark"></span>
  </label>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from "vue-property-decorator";

@Component
export default class VRadio extends Vue {
  @Prop({ default: false, required: true, type: Boolean })
  protected readonly checked!: boolean;

  @Prop({ default: "", required: false, type: String })
  protected readonly id!: string;

  @Watch("id")
  onIdChange(value: string): void {
    if (value) {
      this.customId = value;
    } else {
      this.customId = this.generateId();
    }
  }

  protected customId = this.id;

  protected generateId(): string {
    return `${Date.now().toString(36)}${Math.floor(
      Math.random() * 1000
    ).toString(36)}`;
  }

  protected handleChange(): void {
    this.$emit("change");
  }

  protected get classes(): { [key: string]: boolean } {
    return {
      "label--checked": this.checked,
    };
  }
}
</script>

<style lang="scss" scoped>
@use "../../styles/colors";

.checkmark {
  bottom: 0;
  border-radius: 50%;
  color: colors.$text-primary-i;
  display: grid;
  left: 0;
  place-items: center;
  position: absolute;
  right: 0;
  top: 0;
}

.input {
  display: none;
}

.label {
  border: 2px solid colors.$text-primary;
  border-radius: 50%;
  cursor: pointer;
  display: block;
  height: 2.4rem;
  position: relative;
  width: 2.4rem;

  &--checked {
    .checkmark {
      border: 6px solid colors.$text-primary;
    }
  }
}
</style>
