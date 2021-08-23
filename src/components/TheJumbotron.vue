<template>
  <figure class="jumbotron">
    <img :alt="alt" class="image" :src="src" />
    <div class="content">
      <figcaption class="title">{{ title }}</figcaption>
      <router-link :to="href">
        <the-button class="button">Shop Now</the-button>
      </router-link>
    </div>
  </figure>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

import TheButton from "@/components/input/TheButton.vue";

@Component({
  components: {
    TheButton,
  },
})
export default class TheJumbotron extends Vue {
  @Prop() alt!: string;
  @Prop() href!: string;
  @Prop() src!: string;
  @Prop() title!: string;
}
</script>

<style lang="scss" scoped>
@use "../styles/colors";

.button {
  font-size: 1.8rem;
  margin: 0.5rem 0 0;
  padding: 1.2rem 2.4rem;
  text-transform: uppercase;
}

.content {
  left: 0;
  padding: 2.4rem 3.2rem;
  position: absolute;
  top: 0;
}

.jumbotron {
  position: relative;
}

.image {
  vertical-align: middle;
  width: 100%;
}

.title {
  color: colors.$text-primary-i;
  font-size: 3.6rem;
  margin: 1rem 0;
}
</style>
