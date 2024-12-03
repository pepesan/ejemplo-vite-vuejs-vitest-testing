<template>
  <h2>LLama</h2>
  <ListadoCompositionComponent :items="myItems" />
</template>

<script>
import ListadoCompositionComponent from "./ListadoCompositionComponent.vue";

export default {
  components: {ListadoCompositionComponent},
  data() {
    return {
      myItems: [
        { id: 1, name: 'Item 1' },
        { id: 2, name: 'Item 2' },
        { id: 3, name: 'Item 3' },
      ],
    };
  },
};
</script>