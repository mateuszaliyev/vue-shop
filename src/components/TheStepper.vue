<template v-if="steps.length > 1">
  <div class="stepper">
    <div
      class="step"
      :class="stepClasses(index)"
      :key="step.title"
      v-for="(step, index) in steps"
    >
      <span
        class="connector"
        :class="connectorClasses(index)"
        v-if="index > 0"
      ></span>
      <div class="icon">
        <font-awesome-icon :icon="step.icon"></font-awesome-icon>
      </div>
      <span class="text">
        {{ step.title }}
      </span>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

export interface Step {
  icon: string;
  title: string;
}

@Component
export default class TheStepper extends Vue {
  @Prop({ default: 0, required: true, type: Number })
  protected readonly currentStep!: number;

  @Prop({ default: [], required: true, type: Array })
  protected readonly steps!: Step[];

  protected connectorClasses(index: number): { [key: string]: boolean } {
    return {
      "connector--done": this.currentStep >= index,
    };
  }

  protected stepClasses(index: number): { [key: string]: boolean } {
    return {
      "step--done": this.currentStep >= index,
    };
  }
}
</script>

<style lang="scss" scoped>
@use "../styles/colors";
@use "../styles/z";

.connector {
  background-color: colors.$gray-200;
  display: block;
  height: 0.4rem;
  left: -50%;
  right: 50%;
  transform: translateY(-50%);
  position: absolute;
  top: 2.4rem;
  width: 100%;

  &--done {
    background-color: colors.$primary;
  }
}

.icon {
  background-color: colors.$gray-200;
  border-radius: 50%;
  color: colors.$text-primary-i;
  display: grid;
  height: 4.8rem;
  place-items: center;
  position: relative;
  width: 4.8rem;

  @include z.index(foreground);
}

.step {
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  position: relative;
  width: 100%;

  &--done {
    .icon {
      background-color: colors.$primary;
    }

    .text {
      color: colors.$text-primary;
      font-weight: 700;
    }
  }
}

.stepper {
  display: flex;
  flex: 1 1 0px;
}

.text {
  color: colors.$gray-600;
  font-weight: 400;
  text-align: center;
}
</style>
