<script setup>
import { ref, onMounted } from "vue";
import { fetchPokemonData } from "../../services/api";

const pokemons = ref([]);

onMounted(async () => {
  pokemons.value = await fetchPokemonData();
});
console.log("@==>>", pokemons);
</script>

<template>
  <div>
    <v-container>
      <v-row>
        <v-col v-for="pokemon in pokemons" :key="pokemon.name">
          <v-card>
            <v-card-title class="text-center">{{ pokemon.name }}</v-card-title>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
