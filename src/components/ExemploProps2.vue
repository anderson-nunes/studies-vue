<script setup>
const props = defineProps(["name", "age", "city", "citys", "message"]);
</script>

<template>
  <h1>Nome: {{ name }}</h1>
  <h1>Idade: {{ age }}</h1>
  <h1>Cidade: {{ city }}</h1>

  <ul>
    <li v-for="city of citys" :key="city">
      {{ city }}
    </li>
  </ul>
  <button style="background: yellow; padding: 4px" @click="message">
    Clique aqui
  </button>
</template>
