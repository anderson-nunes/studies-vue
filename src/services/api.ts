import axios from "axios";

const apiUrl = "https://pokeapi.co/api/v2/pokemon";

export const fetchPokemonData = async () => {
  try {
    const response = await axios.get(apiUrl);
    return response.data.results;
  } catch (error) {
    console.error("Ocorreu um erro ao fazer a solicitação:", error.message);
    return [];
  }
};
