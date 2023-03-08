import axios from "axios";

export const getPokemon = (pokemonName) => {
    return axios
        .get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
        .then((response) => response.data)
        .catch((error) => console.log(error));
};

export const getPokemonList = (offset) => {
    return axios
        .get(`https://pokeapi.co/api/v2/pokemon?limit=9&offset=${offset}`)
        .then((response) => response.data)
        .catch((error) => console.log(error));
};
