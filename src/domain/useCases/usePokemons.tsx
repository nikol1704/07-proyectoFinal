import { useEffect, useState } from "react";
import { Pokemon } from "../entities/Pokemon";
import { PokemonRepositoryImpl } from "../../data/repositories/pokemonRepo";
import { PokeAdpater } from "../../data/network/PokeAdpater";

export const usePokemons = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [pokemons, setPokemons] = useState<Pokemon[]>([]);
    const adapter = PokeAdpater;
    const repository = new PokemonRepositoryImpl(adapter);

    useEffect(() => {
        start();
    }, [])

    const start = async () => {
        const allPokemonsPromise = repository.getAllPokemons();

        const [
            allPokemons,
        ] = await Promise.all([
            allPokemonsPromise
        ]);

        setPokemons(allPokemons);
        setIsLoading(false);
    }

    return {
        isLoading,
        pokemons
    }
}