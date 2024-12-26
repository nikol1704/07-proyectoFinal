import { Pokemon } from "../../domain/entities/Pokemon";
import { PokemonDetail } from "../../domain/entities/PokemonDetail";
import { PokemonListItem } from "../models/PokemonListModel";
import { PokemonModel } from "../models/PokemonModel";

export class PokemonMapper {
    static fromPokemonListItemToEntity(result: PokemonListItem): Pokemon {
        return {
            name: result.name,
            url: result.url
        }
    }

    static fromPokemonModelToEntity(result: PokemonModel): PokemonDetail {
        return {
            id: result.id, 
            name: result.name,
            types: result.types.map( type => type.type.name),
            abilities: result.abilities.map( ability => ability.ability.name),
            height: result.height,
            weight: result.weight,
        }
    }
}