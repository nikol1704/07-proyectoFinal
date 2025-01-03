export interface PokemonListModel {
    count:    number;
    next:     null;
    previous: null;
    results:  PokemonListItem[];
}

export interface PokemonListItem {
    name: string;
    url:  string;
}