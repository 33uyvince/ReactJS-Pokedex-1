import React, { useEffect, useState } from "react";
import { Card } from "./card";
import Pokeinfo from "./Pokeinfo";
import { getPokemon, getPokemonList } from "../API/PokemonAPI";
import { Button } from "@mui/material";

const Main = () => {
    const [pokemons, setPokemons] = useState([]);
    const [selectedPokemon, setSelectedPokemon] = useState(null);
    const [offset, setOffSet] = useState(0);

    async function getList() {
        const responseData = await getPokemonList(offset);

        const pokemonNames = [];
        for (let i = 0; i < responseData.results.length; i++) {
            const name = responseData.results[i].name;
            pokemonNames.push(name);
        }

        getAllPokemon(pokemonNames);
    }

    async function getAllPokemon(pokemonList) {
        const pokemonData = [];

        for (let i = 0; i < pokemonList.length; i++) {
            const currentPokemon = pokemonList[i];
            const currentPokemonData = getPokemon(currentPokemon);

            pokemonData.push(currentPokemonData);
        }
        const data = await Promise.all(pokemonData);
        setPokemons(data);
    }

    useEffect(() => {
        getList();
    }, [offset]);

    useEffect(() => {
        getList();
    }, []);

    return (
        <div className="container">
            <div className="left-container">
                <div className="left-content">
                    {pokemons.map((pokemon) => (
                        <div
                            key={pokemon.id}
                            onClick={() => setSelectedPokemon(pokemon)}
                        >
                            <Card
                                pokemonName={pokemon.name}
                                image={pokemon.sprites.front_default}
                                id={pokemon.id}
                            ></Card>
                        </div>
                    ))}
                </div>
            </div>
            <div className="right-container">
                {selectedPokemon && (
                    <div className="right-content">
                        <Pokeinfo pokemon={selectedPokemon}></Pokeinfo>
                    </div>
                )}
                <div className="prev-next-btn">
                    <Button
                        className="nav-btn"
                        variant="contained"
                        disabled={offset === 0}
                        onClick={() => {
                            setOffSet(offset - 9);
                        }}
                    >
                        previous
                    </Button>
                    <Button
                        className="nav-btn"
                        variant="contained"
                        onClick={() => {
                            setOffSet(offset + 9);
                        }}
                    >
                        next
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default Main;
