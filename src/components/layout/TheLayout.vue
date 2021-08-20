<template>
  <!-- Sidebar -->
  <div v-frag>
    <header-mobile />
    <main class="main">
      <header-main>Jeans</header-main>
      <slot></slot>
      <subscribe-section />
      <the-footer />
      <section class="dark powered">
        Powered by <a href="https://www.vuejs.org/">Vue.js</a>
      </section>
    </main>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import HeaderMain from "@/components/layout/HeaderMain.vue";
import HeaderMobile from "@/components/layout/HeaderMobile.vue";
import SubscribeSection from "@/components/layout/SubscribeSection.vue";
import TheFooter from "@/components/layout/TheFooter.vue";

@Component({
  components: {
    HeaderMain,
    HeaderMobile,
    SubscribeSection,
    TheFooter,
  },
})
export default class TheLayout extends Vue {}
</script>

<style lang="scss" scoped>
@use "../../styles/breakpoints";

.main {
  @include breakpoints.respond-to("lg") {
    margin-left: 250px;
  }
}

.powered {
  font-size: 1.5rem;
  padding: 2.4rem;
  text-align: center;
}
</style>
