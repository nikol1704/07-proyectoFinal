import { Pokemon } from "../../domain/entities/Pokemon";

export interface PokemonListModel {
    count:    number;
    next:     string;
    previous: null;
    results:  PokemonListItem[];
}

export interface PokemonListItem {
    name: string;
    url:  string;
}