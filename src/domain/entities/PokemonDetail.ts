import { PokemonModel } from "../../data/models/PokemonModel";

export class PokemonDetail {
    id: number
    name: string

    constructor(id: number, name: string) {
        this.id = id,
        this.name = name
    }

    static fromPokemonModelToEntity(result: PokemonModel): PokemonDetail {
        return {
            id: result.id,
            name: result.name
        }
    }
}