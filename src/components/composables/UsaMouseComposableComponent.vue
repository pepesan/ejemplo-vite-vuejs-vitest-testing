<template>
  <p>La posición del ratón es: {{ x }}, {{ y }}</p>
</template>

<script setup>
import { useMouse } from '../../composables/useMouse.js'

const { x, y } = useMouse()
</script>
