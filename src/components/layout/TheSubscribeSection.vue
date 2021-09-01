<template>
  <section class="container dark subscribe" id="subscribe">
    <h1 class="heading">Subscribe</h1>
    <p class="paragraph">To get special offers and VIP treatment:</p>
    <form @submit.prevent="handleSubmit">
      <v-input
        autocomplete="email"
        class="field"
        name="email"
        placeholder="Enter e-mail"
        required
        type="email"
        v-model="email"
      />
      <v-button class="button" color="primary">Subscribe</v-button>
    </form>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

import VButton from "@/components/input/VButton.vue";
import VInput from "@/components/input/VInput.vue";

@Component({
  components: {
    VButton,
    VInput,
  },
})
export default class TheSubscribeSection extends Vue {
  protected email = "";

  protected handleSubmit(): void {
    console.log(this.email);
  }
}
</script>

<style lang="scss" scoped>
.button {
  font-size: 1.5rem;
  margin: 1.5rem 0 1.6rem;
}

.field {
  font-size: 1.5rem;
  width: 100%;
}

.heading {
  font-size: 3.6rem;
  font-weight: 400;
  margin: 1rem 0;
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
