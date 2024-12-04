<template>
  <div>
    <input type="text" v-model="inputValue" />
    <p>El valor actual es: {{ inputValue }}</p>
    <button id="inc" @click="show">Mostrar</button>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  setup() {
    const inputValue = ref('');
    const show = () => {
      console.log(inputValue.value);
    };
    return {
      inputValue,
      show
    };
  },
};
</script>