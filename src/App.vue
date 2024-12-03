<script setup lang="ts">
import PropsCompositionComponent from "./components/PropsCompositionComponent.vue";
</script>

<template>
  <PropsCompositionComponent title="titulo" numero="2"></PropsCompositionComponent>
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
