<template>
  <div v-frag>
    <section class="container">
      <the-jumbotron
        alt="Jeans"
        href="#footer"
        src="https://www.w3schools.com/w3images/jeans.jpg"
        title="New arrivals"
      />
    </section>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

import TheJumbotron from "@/components/TheJumbotron.vue";

@Component({
  components: {
    TheJumbotron,
  },
})
export default class Home extends Vue {}
</script>

<style lang="scss" scoped></style>
