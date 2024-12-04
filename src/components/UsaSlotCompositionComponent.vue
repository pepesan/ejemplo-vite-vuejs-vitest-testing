<template>
  <div>
    <h2>Usa Slot</h2>
    <SlotCompositionComponent>
      <h3>contenido de slot</h3>
    </SlotCompositionComponent>
  </div>
</template>

<script setup>
// Definimos una función para manejar los slots
import SlotCompositionComponent from "./SlotCompositionComponent.vue";
</script>