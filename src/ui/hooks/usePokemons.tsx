import { useEffect, useState } from "react";
import { PokemonRepositoryImpl } from "../../data/repositories/PokemonRepositoryImpl";
import { PokeAdpater } from "../../data/network";
import { PokemonDetail } from "../../domain/entities";

export const usePokemons = (offset: number = 0, incrementOffset: number = 0) => {
  const [isLoading, setIsLoading] = useState(true);
  const [allPokemons, setAllPokemons] = useState<PokemonDetail[]>([]);
  const [page, setPage] = useState(offset);
  const [hasNext, setHasNext] = useState(false);

  const adapter = PokeAdpater;
  const repository = new PokemonRepositoryImpl(adapter);

  useEffect(() => {
    setTimeout(() => {
      start();
    }, 500);
  }, []);

  const start = async () => {
    try {
      const { data, hasNext } = await repository.getAllPokemons(page);
      setPage(page + incrementOffset);
      setAllPokemons([...allPokemons, ...data]);
      setHasNext(hasNext);
    } catch (error) {
      console.error('Error al cargar los Pokémon:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const nextItems = async () => {
    console.log('page nextItems');
    console.log(page);

    if (hasNext) { 
      start()
    }
  };

  return {
    isLoading,
    allPokemons,
    nextItems,
    hasNext
  };
};

