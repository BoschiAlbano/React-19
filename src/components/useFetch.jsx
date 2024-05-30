import React, { use, Suspense, useState } from "react";
import { useDebouncedCallback } from "use-debounce";
const UseFetch = () => {
    const [pokemon, setPokemon] = useState();

    const fetchPokeApi = async () => {
        if (!pokemon) {
            return Promise.resolve();
        }

        return fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`).then(
            (res) => {
                if (res.ok) return res.json();

                return { error: true, message: "No se encontro el pokemon" };
            }
        );
    };

    const handleChange = useDebouncedCallback((e) => {
        setPokemon(e.target.value);
    }, 500);

    return (
        <div style={{ width: "100%" }}>
            <input
                onChange={(e) => handleChange(e)}
                type="text"
                placeholder="Pokemon"
            />

            <Suspense fallback={<div>Cargando...</div>}>
                <ShowPokemon promesa={fetchPokeApi()} />
            </Suspense>
        </div>
    );
};

export default UseFetch;

// Component show pokemon
function ShowPokemon({ promesa }) {
    const pokemon = use(promesa);

    if (pokemon?.error) {
        return <div>Error: {pokemon.message}</div>;
    }

    if (!pokemon) return null;

    return (
        <div>
            <article>
                <h3>{pokemon.name}</h3>
                <img src={pokemon.sprites.front_default} alt={pokemon.name} />
                <p>Peso: {pokemon.weight}kg</p>
            </article>
        </div>
    );
}
