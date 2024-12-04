<template>
  <h2>Llama</h2>
  <ListadoCompositionComponent :items="items" />
</template>

<script setup>
import { ref } from 'vue';
import ListadoCompositionComponent from "./ListadoCompositionComponent.vue";

const items = ref([
  { id: 1, name: 'Item 1' },
  { id: 2, name: 'Item 2' },
  { id: 3, name: 'Item 3' },
]);
</script>