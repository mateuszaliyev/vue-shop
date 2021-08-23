<template>
  <div v-frag>
    <nav class="nav" :class="classes">
      <div class="logo">
        LOGO
        <icon-button
          class="close"
          @click="handleClose"
          icon="times"
        ></icon-button>
      </div>
      <ul class="categories">
        <the-sidebar-item href="/shirts" title="Shirts"></the-sidebar-item>
        <the-sidebar-item href="/dresses" title="Dresses"></the-sidebar-item>
        <the-sidebar-item title="Jeans">
          <ul class="subcategories">
            <the-sidebar-item
              href="/jeans/skinny"
              title="Skinny"
            ></the-sidebar-item>
            <the-sidebar-item
              href="/jeans/relaxed"
              title="Relaxed"
            ></the-sidebar-item>
            <the-sidebar-item
              href="/jeans/bootcut"
              title="Bootcut"
            ></the-sidebar-item>
            <the-sidebar-item
              href="/jeans/straight"
              title="Straight"
            ></the-sidebar-item>
          </ul>
        </the-sidebar-item>
        <the-sidebar-item href="/jackets" title="Jackets"></the-sidebar-item>
        <the-sidebar-item href="/gymwear" title="Gymwear"></the-sidebar-item>
        <the-sidebar-item href="/blazers" title="Blazers"></the-sidebar-item>
        <the-sidebar-item href="/shoes" title="Shoes"></the-sidebar-item>
      </ul>
      <ul class="useful">
        <li class="useful__item">
          <a class="useful__link" href="#footer">Contact</a>
        </li>
        <li class="useful__item">
          <a
            class="useful__link"
            @click="handleNewsletterOpen"
            href="javascript:void(0)"
            >Newsletter</a
          >
        </li>
        <li class="useful__item">
          <a class="useful__link" href="#subscribe">Subscribe</a>
        </li>
      </ul>
    </nav>
    <the-modal
      @close="handleNewsletterClose"
      :open="newsletterOpen"
      title="Newsletter"
    >
      <form class="newsletter" @submit.prevent="handleNewsletterSubmit">
        <p class="newsletter__text">
          Join our mailing list to receive updates on new arrivals and special
          offers.
        </p>
        <the-input
          class="newsletter__input"
          placeholder="Enter e-mail"
          required
          type="email"
          v-model="newsletterEmail"
        />
        <the-button class="newsletter__button" color="primary"
          >Subscribe</the-button
        >
      </form>
    </the-modal>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from "vue-property-decorator";

import IconButton from "@/components/input/IconButton.vue";
import TheButton from "@/components/input/TheButton.vue";
import TheInput from "@/components/input/TheInput.vue";
import TheModal from "@/components/TheModal.vue";
import TheSidebarItem from "@/components/layout/TheSidebarItem.vue";

@Component({
  components: {
    IconButton,
    TheButton,
    TheInput,
    TheModal,
    TheSidebarItem,
  },
})
export default class TheSidebar extends Vue {
  extended = false;
  newsletterEmail = "";
  newsletterOpen = false;

  handleClose(): void {
    this.$store.dispatch("toggleSidebar");
  }

  handleNewsletterClose(): void {
    this.newsletterOpen = false;
  }

  handleNewsletterOpen(): void {
    this.newsletterOpen = true;
  }

  handleNewsletterSubmit(): void {
    console.log(this.newsletterEmail);
    this.newsletterOpen = false;
  }

  @Watch("$route")
  onRouteChange(): void {
    this.$store.dispatch("hideSidebar");
  }

  @Watch("sidebarVisibility", { immediate: true })
  onSidebarVisibilityChange(value: boolean): void {
    this.extended = value;
  }

  get classes(): { [key: string]: boolean } {
    return {
      "nav--extended": this.extended,
    };
  }

  get sidebarVisibility(): boolean {
    return this.$store.getters.getSidebarVisibility;
  }
}
</script>

<style lang="scss" scoped>
@use "../../styles/breakpoints";
@use "../../styles/colors";
@use "../../styles/fonts";

.categories {
  color: colors.$gray-600;
  font-family: fonts.$secondary;
  font-size: 1.8rem;
  font-weight: 700;
  list-style-type: none;
  padding: 6.4rem 0;
}

.close {
  font-size: 1.5rem;
  padding: 0.8rem 1.6rem;
  position: absolute;
  right: 0;
  top: 0;

  &:hover {
    background-color: colors.$gray-200;
  }

  @include breakpoints.respond-to("lg") {
    display: none;
  }
}

.logo {
  font-size: 2.4rem;
  font-weight: 700;
  letter-spacing: 0.168em;
  padding: 2.6rem 1.6rem;
  text-transform: uppercase;
}

.nav {
  background-color: colors.$background;
  display: none;
  height: 100%;
  overflow-y: auto;
  width: 25rem;
  z-index: 3;

  @include breakpoints.respond-to("lg") {
    display: block;
    position: fixed;
  }

  &--extended {
    background: colors.$background;
    display: block;
    left: 0;
    height: 100%;
    position: fixed;
    top: 0;

    @include breakpoints.respond-to("lg") {
      left: unset;
    }
  }
}

.newsletter {
  align-items: center;
  display: flex;
  flex-direction: column;
  font-size: 1.5rem;
  gap: 1.5rem;
  padding: 1.2rem 0 1.6rem;

  &__button {
    padding: 1.2rem 2.4rem;
  }

  &__input {
    align-self: stretch;
  }

  &__text {
    text-align: center;
  }
}

.subcategories {
  font-size: 1.5rem;
  list-style-type: none;
  padding: 1.2rem 2.4rem;
}

.useful {
  list-style-type: none;

  &__link {
    color: colors.$text-primary;
    display: block;
    font-family: fonts.$secondary;
    font-size: 1.5rem;
    padding: 0.8rem 1.6rem;
    text-decoration: none;

    &:hover {
      background: colors.$gray-200;
      color: colors.$text-primary;
    }
  }
}
</style>
