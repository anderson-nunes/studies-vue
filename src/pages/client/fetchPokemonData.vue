<script setup>
import { ref, onMounted } from "vue";
import { fetchPokemonData } from "../../services/api";

const pokemons = ref([]);
onMounted(async () => {
  pokemons.value = await fetchPokemonData();
});
</script>

<template>
  <div>
    <ul>
      <li v-for="pokemon in pokemons" :key="pokemon.name">
        Nomes: <span style="color: red">{{ pokemon.name }}</span>
      </li>
    </ul>
  </div>
</template>
