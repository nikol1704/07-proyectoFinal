
import { create } from "zustand";
import { PokemonDetail } from "../../domain/entities";

interface StoreState {
  savedPokemons: PokemonDetail[];
  addPokemon: (pokemon: PokemonDetail) => void;
  updatePokemon: (pokemon: PokemonDetail) => void;
}

export const usePokemonStore = create<StoreState>()((set, get) => ({
  savedPokemons: [],

  addPokemon: (pokemon: PokemonDetail) => {
    const savedPokemons = get().savedPokemons;
    if (!savedPokemons.some(p => p.id === pokemon.id)) {
      savedPokemons.push(pokemon);
    }

    set({ savedPokemons: [...savedPokemons] });
  },

  updatePokemon: (pokemon: PokemonDetail) => {
    const savedPokemons = get().savedPokemons;

    const updatedPokemons = savedPokemons.map(p =>
      p.id === pokemon.id ? { ...p, ...pokemon } : p
    );

    set({ savedPokemons: updatedPokemons });
  }
}));
