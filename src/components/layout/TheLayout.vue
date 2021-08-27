<template>
  <div v-frag>
    <header-mobile />
    <the-overlay />
    <the-sidebar />
    <main class="main">
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
import HeaderMobile from "@/components/layout/HeaderMobile.vue";
import SubscribeSection from "@/components/layout/SubscribeSection.vue";
import TheFooter from "@/components/layout/TheFooter.vue";
import TheOverlay from "@/components/layout/TheOverlay.vue";
import TheSidebar from "@/components/layout/TheSidebar.vue";

@Component({
  components: {
    HeaderMobile,
    SubscribeSection,
    TheFooter,
    TheOverlay,
    TheSidebar,
  },
})
export default class TheLayout extends Vue {}
</script>

<style lang="scss" scoped>
@use "../../styles/breakpoints";

.main {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  margin-top: 8.3rem;
  min-height: 100%;

  @include breakpoints.respond-to("lg") {
    margin-left: 25rem;
    margin-top: 0;
  }
}

.powered {
  font-size: 1.5rem;
  padding: 2.4rem;
  text-align: center;

  & > a:hover {
    opacity: 0.6;
  }
}
</style>
