<script setup>
import ExemploFormulario2 from "./ExemploFormulario2.vue";

function processForm(data) {
  console.log("Dados recebidos do formulário", data);
}
</script>

<template>
  <ExemploFormulario2 @submit="processForm" />
</template>
