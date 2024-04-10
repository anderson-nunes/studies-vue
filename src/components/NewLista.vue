<script setup lang="ts">
const newArray = [
  {
    name: "Anderson",
    idade: 37,
    profissao: "Desenvolvedor Front End",
  },
];
</script>

<template>
  <ul>
    <li v-for="item in newArray" :key="item.name">
      <p>Meu nome é: {{ item.name }}</p>
      <p>A minha idade é: {{ item.idade }}</p>
      <p>Minha profissão é: {{ item.profissao }}</p>
    </li>
  </ul>
</template>
