<template>
  <li :key="item.id" >{{ item.name }}</li>
</template>

<script setup>
defineProps({
  item: {
    type: Object,
    required: true,
  },
});
</script>