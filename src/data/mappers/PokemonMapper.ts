import { Pokemon, PokemonDetail } from "../../domain/entities";
import { capitalize } from "../../helpers/StringHelpers";
import { PokemonListItem, PokemonModel } from "../models";

export class PokemonMapper {
    static fromPokemonListItemToEntity(result: PokemonListItem): Pokemon {
        const match = result.url.match(/\/(\d+)\/$/);
        const idWithSlash = match ? match[1] : null;
 
        return {
            name: result.name,
            url: result.url,
            id: idWithSlash ?? ""
        }
    }

    static fromPokemonModelToEntity(result: PokemonModel): PokemonDetail {
        return {
            id: result.id.toString(), 
            name: capitalize(result.name),
            types: result.types.map( type => capitalize(type.type.name)),
            abilities: result.abilities.map( ability => capitalize(ability.ability.name)),
            height: result.height,
            weight: result.weight,
            imagePath: result.sprites.front_default,
            isFavorite: false
        }
    }
}