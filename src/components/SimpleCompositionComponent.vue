<template>
  <!-- Mostramos el mensaje en la plantilla -->
  <p>{{ mensaje }}</p>
</template>

<script>
import { ref } from 'vue'; // Importamos 'ref' para declarar variables reactivas

export default {
  // Definimos el nombre del componente
  name: 'ComponenteSimpleComposition',

  // El método 'setup' es el corazón de la Composition API
  setup() {
    // Declaramos una variable reactiva llamada 'mensaje'
    const mensaje = ref('Hola desde Composition API');

    // Retornamos las variables y funciones que queremos usar en la plantilla
    return {
      mensaje
    };
  }
};
</script>
