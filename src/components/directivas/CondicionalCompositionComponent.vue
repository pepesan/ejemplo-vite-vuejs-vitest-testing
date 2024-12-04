<template>
  <div>
    <button @click="toggleShow">Mostrar/Ocultar</button>
    <p v-if="showContent">Contenido visible</p>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  setup() {
    const showContent = ref(false);

    const toggleShow = () => {
      showContent.value = !showContent.value;
    };

    return {
      showContent,
      toggleShow,
    };
  },
};
</script>