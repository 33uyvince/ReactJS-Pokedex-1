import React from "react";

const Pokeinfo = ({ pokemon }) => {
    return (
        <>
            <h1>{pokemon.name}</h1>
            <img
                src={
                    pokemon.sprites.versions["generation-v"]["black-white"]
                        .animated.front_default
                }
                alt="here"
            ></img>
            {pokemon.types.map((type) => (
                <h2 key={type.slot}>{type.type.name}</h2>
            ))}
        </>
    );
};

export default Pokeinfo;
