<template>
  <div>
    <p>{{ fechaFormateada }}</p>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';

const fecha = ref(new Date());

const fechaFormateada = computed(() => {
  // Lógica para formatear la fecha
  return fecha.value.toLocaleDateString();
});
</script>

<style scoped>
</style>
