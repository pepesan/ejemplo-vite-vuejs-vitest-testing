<script setup lang="ts">

import UseCounterComposableComponent from "./components/composables/UseCounterComposableComponent.vue";
import UsaDoubleComposableComponent from "./components/composables/UsaDoubleComposableComponent.vue";
import UsaMouseComposableComponent from "./components/composables/UsaMouseComposableComponent.vue";
</script>

<template>
  <UsaMouseComposableComponent/>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
