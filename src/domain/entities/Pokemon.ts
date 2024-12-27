import { PokemonListItem } from "../../data/models/PokemonListModel"

export class Pokemon {
    name: string
    url:  string
    id: string

    constructor(name: string, url: string, id: string) {
        this.name = name,
        this.url = url
        this.id = id
    }
}