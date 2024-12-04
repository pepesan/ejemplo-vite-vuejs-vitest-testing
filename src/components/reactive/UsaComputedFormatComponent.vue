<script setup lang="ts">
import { ref, computed } from 'vue';
const fecha = ref(new Date());

const fechaFormateada = computed(() => {
  // Puedes usar librerías como date-fns o moment.js para formateos más complejos
  return fecha.value.toLocaleDateString();
});
</script>

<template>
  <div>
    <p>Fecha actual: {{ fechaFormateada }}</p>
  </div>
</template>

<style scoped>

</style>