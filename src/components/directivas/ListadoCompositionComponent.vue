<template>
  <ul>
    <ListadoItemCompositionComponent v-for="item in items" :key="item.id" :item="item" />
  </ul>
</template>

<script setup>
import ListadoItemCompositionComponent from './ListadoItemCompositionComponent.vue';

defineProps({
  items: {
    type: Array,
    required: true,
  },
});
</script>