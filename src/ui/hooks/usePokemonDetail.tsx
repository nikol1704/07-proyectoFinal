import { useEffect, useState } from "react";
import { PokemonRepositoryImpl } from "../../data/repositories/pokemonRepo";
import { PokeAdpater } from "../../data/network/PokeAdpater";
import { PokemonDetail } from "../../domain/entities/PokemonDetail";

export const usePokemonDetail = (id: string) => {
    const [isLoading, setIsLoading] = useState(true);
    const [pokemon, setPokemon] = useState<PokemonDetail>();

    const adapter = PokeAdpater;
    const repository = new PokemonRepositoryImpl(adapter);

    useEffect(() => {
        start();
    }, [id])

    // const start = async () => {
    //     const data = await repository.getPokemon(id);
    
    //     setPokemon(data);
    //     setIsLoading(false);
    // }

    const start = async () => {
        try {
          console.log(`id pal fetch ${ id }`)
          const data = await repository.getPokemon(id);
          setPokemon(data);
        } catch (error) {
          console.error('Error al cargar detalles del Pokémon:', error);
        } finally {
          setIsLoading(false);
        }
      };

    return {
        isLoading,
        pokemon
    }
}