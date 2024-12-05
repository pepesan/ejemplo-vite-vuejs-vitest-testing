<template>
  <div>
    <p>Contador: {{ counter }}</p>
    <button @click="increase">Incrementar</button>
  </div>
</template>

<script setup>
import { useCounter } from '../../composables/useCounter';

const { counter, increase } = useCounter();
</script>
