<!-- Estrutura extraída do site: https://vuejs.org/guide/scaling-up/routing.html -->

<!-- SCRIPT -->
<script setup>
// Importações do Vue
import { ref, computed } from "vue";

// Páginas
import Page1 from "./Page1.vue";
import Page2 from "./Page2.vue";
import PageError from "./PageError.vue";

// Criar uma estrutura de rotas, contendo o caminho e o camponente
const routes = {
  "/": Page1,
  "/pagina2": Page2,
  "/404": PageError,
};

// Obter o conteúdo a partir da cerquila, exemplo: http://localhost:5173/#/sobre o retorno será: #/sobre
const referenciaRota = ref(window.location.hash);

// Executa a ação quando realizar a navegação entre páginas. Obter o conteúdo a partir da cerquilha
window.addEventListener("hashchange", () => {
  referenciaRota.value = window.location.hash;
});

// Função responsável por exibir a página específica
const currentView = computed(() => {
  return routes[referenciaRota.value.slice(1) || "/"] || PageError;
});
</script>

<!-- TEMPLATE -->
<template>
  <!-- Links -->
  <a href="#/">Página 1</a>
  |
  <a href="#/pagina2">Página 2</a>

  <!-- Exibição das páginas -->
  <component :is="currentView" />
</template>
