<script setup lang="ts">
import { onMounted, ref } from "vue";
import Card from "../../components/Card/CardPokemon.vue";
import { PokemonService } from "../../services/apiPokemon";

const { fetchAllPokemons, pokemons } = PokemonService();

const selectedPokemon = ref<any | null>(null);

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
      @click="selectedPokemon = pokemon"
    >
      class="card-ordinary" >
      <template v-slot:name>{{ pokemon.name.toUpperCase() }}</template>
      <template v-slot:content>
        <img :src="pokemon.image" :alt="pokemon.name" />
      </template>
      <template v-slot:description>
        <span v-for="(type, index) in pokemon.types" :key="index">
          {{ type.toUpperCase() }}
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
