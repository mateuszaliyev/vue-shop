<template>
  <li class="item">
    <router-link class="link" :class="classes" :to="href" v-if="href">
      <font-awesome-icon
        class="caret-right"
        icon="caret-right"
        v-if="currentSubcategory"
      ></font-awesome-icon>
      {{ title }}
    </router-link>
    <span class="link" :class="classes" @click="handleClick" v-else
      >{{ title }} <font-awesome-icon icon="caret-down"></font-awesome-icon
    ></span>
    <slot v-if="open"></slot>
  </li>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class TheSidebarItem extends Vue {
  @Prop() href!: string;
  @Prop() title!: string;

  open = false;

  handleClick(): void {
    this.open = !this.open;
  }

  get classes(): { [key: string]: boolean } {
    return {
      "link--category": this.currentCategory,
      "link--subcategory": this.currentSubcategory,
    };
  }

  get currentCategory(): boolean {
    return this.$route.params.category === this.title.toLowerCase();
  }

  get currentSubcategory(): boolean {
    return this.$route.params.subcategory === this.title.toLowerCase();
  }

  mounted(): void {
    if (this.currentCategory || this.currentSubcategory) {
      this.open = true;
    }
  }
}
</script>

<style lang="scss" scoped>
@use "../../styles/colors";
@use "../../styles/fonts";

.caret-right {
  margin-right: 1.6rem;
}

.link {
  cursor: pointer;
  display: block;
  padding: 0.8rem 1.6rem;
  text-decoration: none;

  &:hover {
    background: colors.$gray-200;
    color: colors.$text-primary;
  }

  &--category {
    color: colors.$text-primary;
  }

  &--subcategory {
    background: colors.$gray-100;
    color: colors.$text-primary;
  }
}
</style>
