<template>
  <div v-frag>
    <the-header cart>Search</the-header>
    <section class="container">
      <the-input
        class="input"
        @input="handleInput"
        placeholder="Type at least 3 characters..."
        v-model="query"
      />
    </section>
    <section class="container results">
      <product-list :products="results" />
      <div class="placeholder" v-show="!ready">
        <font-awesome-icon class="icon" icon="search"></font-awesome-icon>
        <h2 class="empty__title">Search</h2>
        <p class="empty__description">
          Try searching by product name or brand.
        </p>
      </div>
      <div class="placeholder" v-show="empty">
        <font-awesome-icon class="icon" icon="times"></font-awesome-icon>
        <h2 class="empty__title">No results found</h2>
        <p class="empty__description">Try adjusting your search query.</p>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

import IconButton from "@/components/input/IconButton.vue";
import ProductList from "@/components/product/ProductList.vue";
import TheHeader from "@/components/TheHeader.vue";
import TheInput from "@/components/input/TheInput.vue";

import { Product } from "@/store/product/types";

@Component({
  components: {
    IconButton,
    ProductList,
    TheHeader,
    TheInput,
  },
})
export default class Search extends Vue {
  protected query = "";

  protected handleInput(): void {
    if (this.ready) {
      this.$router.replace({ name: "Search", params: { query: this.query } });
    }
  }

  protected mounted(): void {
    if (this.$route.params.query) {
      this.query = this.$route.params.query;
    }
  }

  protected get empty(): boolean {
    return this.ready && Boolean(!this.results.length);
  }

  protected get ready(): boolean {
    return Boolean(this.query) && this.query.length >= 3;
  }

  protected get results(): Product[] {
    if (!this.query || this.query.length < 3) {
      return [];
    }

    const items: Product[] = this.$store.getters.getProductItems;

    const results = items.filter(
      (item) =>
        item.company.toLowerCase().includes(this.query.toLowerCase()) ||
        item.productName.toLowerCase().includes(this.query.toLowerCase())
    );

    return results;
  }
}
</script>

<style lang="scss" scoped>
@use "../styles/breakpoints";
@use "../styles/colors";

.button {
  font-size: 2.4rem;
  margin-left: 1.6rem;
}

.icon {
  color: colors.$gray-200;
  font-size: 16rem;
  margin-bottom: 3.2rem;
  opacity: 0.5;
}

.input {
  width: 100%;
}

.placeholder {
  align-items: center;
  color: colors.$gray-600;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 8rem 0;
  text-align: center;
  width: 100%;

  @include breakpoints.respond-to("lg") {
    padding: 16rem 0;
  }

  &__title {
    font-size: 3.2rem;
  }
}

.results {
  padding-top: 1.6rem;
}
</style>
