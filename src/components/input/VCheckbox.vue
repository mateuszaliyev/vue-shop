<template>
  <label class="label" :class="classes" :for="customId">
    <input
      @change="handleChange($event)"
      class="input"
      :id="customId"
      :name="name"
      :required="required"
      type="checkbox"
      v-model="checked"
    />
    <span class="checkmark">
      <font-awesome-icon icon="check" v-show="checked"></font-awesome-icon>
    </span>
  </label>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from "vue-property-decorator";

@Component
export default class VCheckbox extends Vue {
  @Prop({ default: "", required: false, type: String })
  protected readonly id!: string;

  @Prop({ default: "", required: false, type: String })
  protected readonly name!: string;

  @Prop({ default: false, required: false, type: Boolean })
  protected readonly required!: boolean;

  @Watch("id")
  onIdChange(value: string): void {
    if (value) {
      this.customId = value;
    } else {
      this.customId = this.generateId();
    }
  }

  checked = false;
  customId = this.id;

  generateId(): string {
    return `${Date.now().toString(36)}${Math.floor(
      Math.random() * 1000
    ).toString(36)}`;
  }

  handleChange(event: Event): void {
    const target: HTMLInputElement = event.target as HTMLInputElement;
    this.checked = target.checked;
    this.$emit("input", this.checked);
  }

  mounted(): void {
    this.customId = this.id || this.generateId();
  }

  get classes(): { [key: string]: boolean } {
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
  color: colors.$text-primary-i;
  display: grid;
  left: 0;
  place-items: center;
  position: absolute;
  right: 0;
  top: 0;
}

.input {
  left: 50%;
  opacity: 0;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
}

.label {
  border: 2px solid colors.$text-primary;
  cursor: pointer;
  display: block;
  flex-shrink: 0;
  height: 2.4rem;
  position: relative;
  width: 2.4rem;

  &--checked {
    .checkmark {
      background: colors.$background-i;
    }
  }
}
</style>
