<script setup lang="ts">
import UsaMethodComponent from "./components/UsaMethodComponent.vue";
import UsaComputadaComponent from "./components/UsaComputadaComponent.vue";
import UsaReactiveCompositionComponent from "./components/UsaReactiveCompositionComponent.vue";
import UsaComputedFormatComponent from "./components/UsaComputedFormatComponent.vue";
</script>

<template>
  <UsaComputedFormatComponent/>
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
