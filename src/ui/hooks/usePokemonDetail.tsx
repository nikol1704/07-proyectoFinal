import { useState } from "react";
import { PokemonRepositoryImpl } from "../../data/repositories/PokemonRepositoryImpl";
import { PokeAdpater } from "../../data/network";
import { PokemonDetail } from "../../domain/entities";

export const usePokemonDetail = (id: string) => {
  const [isLoading, setIsLoading] = useState(false);
    const [pokemon, setPokemon] = useState<PokemonDetail>();

    const adapter = PokeAdpater;
    const repository = new PokemonRepositoryImpl(adapter);

    const fetchPokemon = async () => {
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
        pokemon,
        fetchPokemon
    }
}