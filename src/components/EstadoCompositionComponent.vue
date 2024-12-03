<template>
  <div>
    <h1>{{ message }}</h1>
    <p>Contador: {{ count }}</p>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  setup() {
    // Variables de estado
    const count = ref(0);
    const message = ref('¡Hola, Vue 3!');

    // Devuelve el estado y los métodos al template
    return {
      count,
      message
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
