import { Pokemon } from "../../domain/entities/Pokemon";
import { PokemonDetail } from "../../domain/entities/PokemonDetail";
import { PokemonListItem } from "../models/PokemonListModel";
import { PokemonModel } from "../models/PokemonModel";

export class PokemonMapper {
    static fromPokemonListItemToEntity(result: PokemonListItem): Pokemon {
        console.log("fromPokemonListItemToEntity")
        const match = result.url.match(/\/(\d+\/)$/);
        const idWithSlash = match ? match[1] : null;
        console.log({
            name: result.name,
            url: result.url,
            id: idWithSlash
        });
        return {
            name: result.name,
            url: result.url,
            id: result.url.split('/')[-1]
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