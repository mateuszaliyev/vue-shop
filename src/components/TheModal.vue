<template>
  <div class="modal" :class="classes" v-show="open">
    <div class="content">
      <div class="headline">
        <h2 class="title">{{ title }}</h2>
        <icon-button class="close" @click="handleClose" icon="times" />
      </div>
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

import IconButton from "@/components/input/IconButton.vue";

@Component({
  components: {
    IconButton,
  },
})
export default class TheModal extends Vue {
  @Prop({ default: false }) open!: boolean;
  @Prop() title!: string;

  handleClose(): void {
    this.$emit("close");
  }

  get classes(): { [key: string]: boolean } {
    return {
      "modal--open": this.open,
    };
  }
}
</script>

<style lang="scss" scoped>
@use "../styles/colors";

.close {
  font-size: 3.6rem;
  padding: 0.8rem 1.6rem;
  position: absolute;
  right: 0;
  top: 0;

  &:hover {
    background-color: colors.$gray-200;
  }
}

.content {
  animation: animatezoom 0.6s;
  background-color: colors.$background;
  margin: 0 1rem;
  padding: 3.2rem 4.8rem;
}

.headline {
  align-items: center;
  display: flex;
  height: 5.8rem;
  position: relative;
}

.modal {
  background-color: rgba(colors.$background-i, 0.4);
  bottom: 0;
  display: none;
  left: 0;
  padding-top: 5rem;
  position: fixed;
  right: 0;
  top: 0;

  &--open {
    display: block;
  }
}

.title {
  font-size: 3rem;
  font-weight: 400;
  letter-spacing: 0.135em;
  text-align: center;
  text-transform: uppercase;
  width: 100%;
}
</style>
