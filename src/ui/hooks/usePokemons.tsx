import { useEffect, useState } from "react";
import { PokemonRepositoryImpl } from "../../data/repositories/pokemonRepo";
import { PokeAdpater } from "../../data/network";
import { PokemonDetail } from "../../domain/entities";

export const usePokemons = (offset: number = 0, incrementOffset: number = 0) => {
  const [isLoading, setIsLoading] = useState(true);
  const [allPokemons, setAllPokemons] = useState<PokemonDetail[]>([]);
  const [page, setPage] = useState(offset);

  const adapter = PokeAdpater;
  const repository = new PokemonRepositoryImpl(adapter);

  useEffect(() => {
    setTimeout(() => {
      start();
    }, 40000);
  }, []);

  const start = async () => {
    try {
      const responsePokemons = await repository.getAllPokemons(page);
      setPage(page + incrementOffset);
      setAllPokemons([...allPokemons, ...responsePokemons]);

    } catch (error) {
      console.error('Error al cargar los Pokémon:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const nextItems = async () => {
    console.log('page nextItems');
    console.log(page);
    start()
  };

  return {
    isLoading,
    allPokemons,
    nextItems
  };
};