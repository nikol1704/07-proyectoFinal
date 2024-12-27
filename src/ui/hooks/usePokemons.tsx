import { useEffect, useState } from "react";
import { Pokemon } from "../../domain/entities/Pokemon";
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
        try {
            const allPokemons = await repository.getAllPokemons();
            setPokemons(allPokemons);
        } catch (error) {
            console.log('error' + { error })
        } finally {
            setIsLoading(false);
        }
    }

    return {
        isLoading,
        pokemons
    }
}