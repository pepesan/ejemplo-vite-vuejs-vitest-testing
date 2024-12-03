<template>
  <div>
    <p>Título: {{ title }}</p>
    <p>Numero: {{ numero }}</p>
    <p>Cantidad: {{ quantity }}</p>
    <button @click="incrementQuantity">Aumentar cantidad</button>
  </div>
</template>

<script setup>
import { ref, defineProps } from 'vue';

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
const quantity = ref(0);

const incrementQuantity = () => {
  quantity.value++;
};
</script>