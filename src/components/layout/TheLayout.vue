<template>
  <div v-frag>
    <the-header-mobile />
    <the-overlay />
    <the-sidebar />
    <main class="main">
      <slot></slot>
      <the-subscribe-section />
      <the-footer />
      <section class="dark powered">
        Powered by <a href="https://www.vuejs.org/">Vue.js</a>
      </section>
    </main>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import TheFooter from "@/components/layout/TheFooter.vue";
import TheHeaderMobile from "@/components/layout/TheHeaderMobile.vue";
import TheOverlay from "@/components/layout/TheOverlay.vue";
import TheSidebar from "@/components/layout/TheSidebar.vue";
import TheSubscribeSection from "@/components/layout/TheSubscribeSection.vue";

@Component({
  components: {
    TheFooter,
    TheHeaderMobile,
    TheOverlay,
    TheSidebar,
    TheSubscribeSection,
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
