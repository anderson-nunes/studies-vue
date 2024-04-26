// api.ts
import { typeColors } from "../type/typeColors";
import { ref } from "vue";

export async function fetchPokemons() {
  const API = "https://pokeapi.co/api/v2/pokemon";

  try {
    const response = await fetch(API);
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error("Ocorreu um erro ao buscar os pokemons:", error);
    throw error;
  }
}

export async function fetchPokemonDetails(url: string) {
  try {
    const response = await fetch(url);
    return await response.json();
  } catch (error) {
    console.error("Ocorreu um erro ao buscar os detalhes do pokemon:", error);
    throw error;
  }
}

export function PokemonService() {
  const pokemons = ref<any[]>([]);

  // console.log("@==>>>", pokemons);

  const fetchAllPokemons = async () => {
    try {
      const pokemonList = await fetchPokemons();

      const detailedPokemonList = await Promise.all(
        pokemonList.map(async (pokemon: any) => {
          const pokemonData = await fetchPokemonDetails(pokemon.url);
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
  // console.log("@====", pokemons);
  return { fetchAllPokemons, pokemons, PokemonService };
}
