<template>
  <section class="container dark subscribe">
    <h1 class="heading">Subscribe</h1>
    <p class="paragraph">To get special offers and VIP treatment:</p>
    <form @submit.prevent="handleSubmit">
      <the-input class="input" placeholder="Enter e-mail" v-model="email" />
      <the-button class="button" color="primary">Subscribe</the-button>
    </form>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

import TheButton from "@/components/input/TheButton.vue";
import TheInput from "@/components/input/TheInput.vue";

@Component({
  components: {
    TheButton,
    TheInput,
  },
})
export default class SubscribeSection extends Vue {
  email = "";

  handleSubmit(): void {
    console.log(this.email);
  }
}
</script>

<style lang="scss" scoped>
.button {
  font-size: 1.5rem;
  margin: 1.5rem 0 1.6rem;
}

.heading {
  font-size: 3.6rem;
  font-weight: 400;
  margin: 1rem 0;
}

.input {
  font-size: 1.5rem;
  width: 100%;
}

.paragraph {
  font-size: 1.5rem;
  margin: 1.5rem 0;
}

.subscribe {
  padding-bottom: 3.2rem;
  padding-top: 3.2rem;
}
</style>
