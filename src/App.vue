<script setup lang="ts">
import FormularioCompositionComponent from "./components/forms/FormularioCompositionComponent.vue";
import YupValidationCompositionComponent from "./components/forms/YupValidationCompositionComponent.vue";
import YupValidationV2CompositionComponent from "./components/forms/YupValidationLoginCompositionComponent.vue";
</script>

<template>
  <YupValidationV2CompositionComponent/>
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
