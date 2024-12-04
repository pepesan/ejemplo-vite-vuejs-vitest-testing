<script setup lang="ts">
import { ref, computed } from 'vue';
const mensaje = ref('');

const mensajeEnMayusculas = computed(() => {
  return mensaje.value.toUpperCase();
});
</script>

<template>
  <div>
    <p>Mensaje original: {{ mensaje }}</p>
    <p>Mensaje en mayúsculas: {{ mensajeEnMayusculas }}</p>
    <input v-model="mensaje" placeholder="Escribe un mensaje" />
  </div>
</template>

<style scoped>

</style>