<template>
  <p>{{ msg }}</p>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "MiComponente",
  props: {
    message: {
      type: String,
      default: "World",
    },
  },
  setup(props) {
    return {
      msg: props.message,
    };
  },
});
</script>
