<template>
  <figure class="jumbotron">
    <img :alt="alt" class="image" :src="src" />
    <div class="content">
      <figcaption class="caption">
        <h1 class="title">{{ title }}</h1>
        <h2 class="subtitle">{{ subtitle }}</h2>
      </figcaption>
      <router-link :to="href">
        <v-button class="button">Shop Now</v-button>
      </router-link>
    </div>
  </figure>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

import VButton from "@/components/input/VButton.vue";

@Component({
  components: {
    VButton,
  },
})
export default class TheJumbotron extends Vue {
  @Prop({ default: "", required: false, type: String })
  protected readonly alt!: string;
  @Prop({ default: "", required: true, type: String })
  protected readonly href!: string;
  @Prop({ default: "", required: true, type: String })
  protected readonly src!: string;
  @Prop({ default: "", required: true, type: String })
  protected readonly subtitle!: string;
  @Prop({ default: "", required: true, type: String })
  protected readonly title!: string;
}
</script>

<style lang="scss" scoped>
@use "../styles/breakpoints";
@use "../styles/colors";

.button {
  font-size: 1.8rem;
  margin: 0.5rem 0 0;
  padding: 1.2rem 2.4rem;
  text-transform: uppercase;
}

.caption {
  color: colors.$text-primary-i;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin: 1rem 0;
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

.subtitle {
  display: none;
  font-weight: 400;
  font-size: 3.6rem;
  text-transform: uppercase;

  @include breakpoints.respond-to("sm") {
    display: block;
  }
}

.title {
  font-size: 3.6rem;
  font-weight: 400;

  @include breakpoints.respond-to("sm") {
    font-size: 6.4rem;
  }
}
</style>
