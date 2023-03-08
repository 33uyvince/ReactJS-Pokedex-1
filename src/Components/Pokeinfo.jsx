import React from "react";

// const Pokeinfo = ({ name, image, types }) => {
//     return (
//         <>
//             <h1>{name}</h1>
//             <img src={image} alt="here"></img>
//             {types.map((type) => (
//                 <h2 key={type.slot}>{type.type.name}</h2>
//             ))}
//         </>
//     );
// };

const Pokeinfo = ({ pokemon }) => {
    return (
        <>
            <h1>{pokemon.name}</h1>
            <div className="img-container">
                <img
                    src={
                        pokemon.sprites.versions["generation-v"]["black-white"]
                            .animated.front_default
                    }
                    alt="here"
                ></img>
            </div>
            {pokemon.types.map((type) => (
                <h2 key={type.slot}>{type.type.name}</h2>
            ))}
        </>
    );
};

export default Pokeinfo;
