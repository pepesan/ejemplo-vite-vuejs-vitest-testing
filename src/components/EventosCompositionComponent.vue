<template>
  <div>
    <h1>{{ message }}</h1>
    <p>Contador: {{ count }}</p>
    <button id="inc" @click="increment">Incrementar</button>
    <button id="dec" @click="decrement">Decrementar</button>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  setup() {
    // Variables de estado
    const count = ref(0);
    const message = ref('¡Hola, Vue 3!');

    // Métodos para modificar el estado
    const increment = () => {
      count.value++;
    };

    const decrement = () => {
      if (count.value > 0) count.value--;
    };

    // Devuelve el estado y los métodos al template
    return {
      count,
      message,
      increment,
      decrement,
    };
  },
};
</script>

<style scoped>
h1 {
  color: #42b983;
}
button {
  margin: 5px;
  padding: 10px;
  font-size: 14px;
  cursor: pointer;
}
</style>
