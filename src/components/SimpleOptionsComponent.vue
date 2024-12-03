<template>
  <!-- Mostramos el mensaje en la plantilla -->
  <p>{{ mensaje }}</p>
</template>

<script>
export default {
  // Definimos el nombre del componente
  name: 'ComponenteSimpleOptions',

  // Aquí declaramos las variables reactivas del componente
  data() {
    return {
      // Una propiedad llamada 'mensaje' que se mostrará en la plantilla
      mensaje: 'Hola desde Options API'
    };
  }
};
</script>

