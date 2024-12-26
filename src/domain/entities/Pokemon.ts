import { PokemonListItem } from "../../data/models/PokemonListModel"

export class Pokemon {
    name: string
    url:  string

    constructor(name: string, url: string) {
        this.name = name,
        this.url = url
    }
}