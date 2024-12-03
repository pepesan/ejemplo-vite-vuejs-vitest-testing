<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue'
import MiComponente from './components/MiComponente.vue'
import EstadoComponent from "./components/EstadoCompositionComponent.vue";
import SimpleOptionsComponent from "./components/SimpleOptionsComponent.vue";
import SimpleCompositionComponent from "./components/SimpleCompositionComponent.vue";
import PropsCompositionComponent from "./components/PropsCompositionComponent.vue";
</script>

<template>
  <SimpleOptionsComponent/>
  <SimpleCompositionComponent/>
  <PropsCompositionComponent title="hola" numero="2"/>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
