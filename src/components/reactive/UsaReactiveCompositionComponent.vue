<script setup lang="ts">
import { reactive, computed } from 'vue';
const estado = reactive({
  contador: 0
});

const dobleContador = computed(() => estado.contador * 2);

const incrementar = () => {
  estado.contador++;
};
</script>

<template>
  <div>
    <p>Contador: {{ estado.contador }}</p>
    <p>Doble del contador: {{ dobleContador }}</p>
    <button @click="incrementar">Incrementar</button>
  </div>
</template>

<style scoped>

</style>