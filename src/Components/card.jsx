import React from "react";

export const Card = ({ image, pokemonName, id }) => {
    return (
        <div className="card">
            <h2>{id}</h2>
            <img src={image} alt="here"></img>
            <h2>{pokemonName}</h2>
        </div>
    );
};
