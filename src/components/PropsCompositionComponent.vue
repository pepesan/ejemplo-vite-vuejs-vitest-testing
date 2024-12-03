<template>
  <div>
    <h1>Mi componente con props</h1>
    <h2 id="title">El mensaje recibido es: {{ title }}</h2>
    <h3 id="number">El número es: {{ numero }}</h3>
    <h4 class="card">Título</h4>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  numero: {
    type: Number,
    default: 0,
  },
});
</script>