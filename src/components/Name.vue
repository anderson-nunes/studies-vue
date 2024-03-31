<script setup lang="ts">
const props = defineProps({
  name: {
    type: String,
    default: "Anderson",
  },
});
</script>

<template>
  <div>
    <p>Meu nome é {{ props.name }}</p>
  </div>
</template>
