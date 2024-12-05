<!-- MyComponent.vue -->
<template>
  <div>
    <p>Número: {{ number }}</p>
    <p>El doble: {{ double }}</p>
    <input v-model="number" type="number" />
  </div>
</template>

<script setup>
import { useDouble } from '../../composables/useDouble'

const { number, double } = useDouble(5) // Puedes pasar un valor inicial si lo deseas
</script>

