<template>
  <!-- Sidebar -->
  <div v-frag>
    <header-mobile />
    <the-overlay />
    <the-sidebar />
    <main class="main">
      <header-main>{{ this.$route.params.category }}</header-main>
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
import TheOverlay from "@/components/layout/TheOverlay.vue";
import TheSidebar from "@/components/layout/TheSidebar.vue";

@Component({
  components: {
    HeaderMain,
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
  min-height: 100%;
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
