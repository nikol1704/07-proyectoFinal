import { PokemonModel } from "../../data/models/PokemonModel";

export class PokemonDetail {
    id: string
    name: string
    types: string[]
    abilities: string[]
    height: number
    weight: number

    constructor(
        id: string, 
        name: string,
        types: string[],
        abilities: string[],
        height: number,
        weight: number,
    ) {
        this.id = id,
        this.name = name
        this.types = types
        this.abilities = abilities
        this.height = height
        this.weight = weight
    }
}