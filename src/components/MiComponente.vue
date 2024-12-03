<template>
  <p>{{ msg }}</p>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "MiComponente",
  setup() {
    return {
      msg: "Mensaje",
    };
  },
});
</script>
