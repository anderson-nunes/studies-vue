<script setup lang="ts">
import { ref, onMounted } from "vue";
import Card from "../../components/Card/Card.vue";
import { typeColors } from "../../type/typeColors";

const API = "https://pokeapi.co/api/v2/pokemon";

const pokemons = ref([]);

const fetchAllPokemons = async () => {
  try {
    const response = await fetch(API);
    const data = await response.json();
    const pokemonList = data.results;

    const detailedPokemonList = await Promise.all(
      pokemonList.map(async (pokemon: any) => {
        const pokemonResponse = await fetch(pokemon.url);
        const pokemonData = await pokemonResponse.json();

        console.log(pokemonData);

        const backgroundColor = pokemonData.types.map(
          (type: any) => typeColors[type.type.name]
        );

        return {
          id: pokemonData.id,
          name: pokemonData.name,
          image: pokemonData.sprites.other["official-artwork"].front_default,
          types: pokemonData.types.map((type: any) => type.type.name),
          backgroundColor: backgroundColor[0],
        };
      })
    );

    pokemons.value = detailedPokemonList;
  } catch (error) {
    console.error("Ocorreu um erro ao buscar os pokemons:", error);
  }
};

onMounted(async () => {
  await fetchAllPokemons();
});
</script>

<template>
  <div class="cards">
    <Card
      v-for="pokemon in pokemons"
      :key="pokemon.id"
      :item="pokemon"
      :style="{ backgroundColor: pokemon.backgroundColor }"
    >
      class="card-ordinary" >
      <template v-slot:name>{{ pokemon.name.toUpperCase() }}</template>
      <template v-slot:content>
        <img :src="pokemon.image" :alt="pokemon.name" />
      </template>
      <template v-slot:description>
        <span v-for="(type, index) in pokemon.types" :key="index">
          {{ type }}
        </span>
      </template>
    </Card>
  </div>
</template>

<style scoped>
body {
  background: #f5f5f5;
}

img {
  width: 100%;
}

.type {
  margin: 0 1rem;
}
.cards {
  display: flex;
  flex-wrap: wrap;
  margin: 4rem;
  gap: 0.4rem;
}

.blur {
  opacity: 0.5;
}

.card-ordinary:hover {
  opacity: 1;
}
</style>
