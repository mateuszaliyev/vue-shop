<template>
  <!-- Sidebar -->
  <div v-frag>
    <header-mobile />
    <main class="main">
      <header-main>Jeans</header-main>
      <slot></slot>
      <subscribe-section />
    </main>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import HeaderMain from "@/components/layout/HeaderMain.vue";
import HeaderMobile from "@/components/layout/HeaderMobile.vue";
import SubscribeSection from "@/components/layout/SubscribeSection.vue";

@Component({
  components: {
    HeaderMain,
    HeaderMobile,
    SubscribeSection,
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
</style>
