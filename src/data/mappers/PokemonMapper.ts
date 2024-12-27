import { Pokemon } from "../../domain/entities/Pokemon";
import { PokemonDetail } from "../../domain/entities/PokemonDetail";
import { capitalize } from "../../helpers/StringHelpers";
import { PokemonListItem } from "../models/PokemonListModel";
import { PokemonModel } from "../models/PokemonModel";

export class PokemonMapper {
    static fromPokemonListItemToEntity(result: PokemonListItem): Pokemon {
        // console.log("fromPokemonListItemToEntity")
        const match = result.url.match(/\/(\d+)\/$/);
        const idWithSlash = match ? match[1] : null;
        // console.log({
        //     name: result.name,
        //     url: result.url,
        //     id: idWithSlash
        // });
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
        }
    }
}