<template>
  <div>
    <input type="text" v-model="inputValue" />
    <p>El valor actual es: {{ inputValue }}</p>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  setup() {
    const inputValue = ref('');
    return { inputValue };
  },
};
</script>