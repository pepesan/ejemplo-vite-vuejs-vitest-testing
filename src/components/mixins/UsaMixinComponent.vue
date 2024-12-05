<template>
  <div>
    <p>{{ message }}</p>
    <button @click="saludar">Saludar</button>
  </div>
</template>

<script>
import { myMixin } from '../../mixins/myMixin';

export default {
  mixins: [myMixin]
};
</script>
