import axios from "axios";

interface Pokemon {
    name: string;
    url: string;
}

interface PokemonResponse {
    results: Pokemon[]
}

const API_URL = 'https://pokeapi.co/api/v2';

async function getAllPokemon() {
    const response = await axios.get<PokemonResponse>(`${API_URL}/pokemon`);
    return response.data.results;
}

// https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/132.png

export default getAllPokemon;
