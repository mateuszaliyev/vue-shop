<template>
  <div class="container home">Home</div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Home extends Vue {}
</script>

<style lang="scss" scoped>
.home {
  flex-grow: 1;
}
</style>
