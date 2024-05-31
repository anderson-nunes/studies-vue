<script setup lang="ts">
const items = [
  { type: "fruit", name: "apple" },
  { type: "vegetable", name: "carrot" },
  { type: "grain", name: "rice" },
];

const transformdItems = items.map((item) => ({
  [item.type]: item.name,
}));

console.log("@teste==>>", transformdItems);
</script>

<template></template>
