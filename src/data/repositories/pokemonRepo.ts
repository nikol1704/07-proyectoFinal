import { Pokemon } from "../../domain/entities/Pokemon";
import { PokemonDetail } from "../../domain/entities/PokemonDetail";
import { PokemonRepository } from "../../domain/repositories/pokemonRepository";
import { PokemonMapper } from "../mappers/PokemonMapper";
import { PokemonListModel } from "../models/PokemonListModel";
import { PokemonModel } from "../models/PokemonModel";
import { HttpAdapter } from "../network/HttpAdapter";

export class PokemonRepositoryImpl implements PokemonRepository {
    private http: HttpAdapter
 
    constructor(http: HttpAdapter) {   
        this.http = http;
    }

    async getAllPokemons(offset: number): Promise<PokemonDetail[]> {
        try {
            // const response = await this.http.get<PokemonListModel>(`/pokemon?offset=${offset}`);
            // console.log(response.next)
            // return response.results.map( (result) => {
            //     console.log(PokemonMapper.fromPokemonListItemToEntity(result));
            //         return PokemonMapper.fromPokemonListItemToEntity(result)
            //     }
            // )
             // Obtener la lista de Pokémon
             const response = await this.http.get<PokemonListModel>(`/pokemon?offset=${offset}`);
             console.log(response.next);
 
             const pokemonDetailsPromises = response.results.map(async (result) => {
                 console.log(PokemonMapper.fromPokemonListItemToEntity(result));
                 
                 const pokemonDetailResponse = await this.http.get<PokemonModel>(`/pokemon/${result.name}`);
                 
                 // Mapear y retornar el detalle del Pokémon
                 return PokemonMapper.fromPokemonModelToEntity(pokemonDetailResponse);
             });

             return await Promise.all(pokemonDetailsPromises);
        } catch (error) {
            console.log("error getAllPokemons" + { error });
            throw error;
        }
    }

    async getPokemon(id: string): Promise<PokemonDetail> {
        try {
            const response = await this.http.get<PokemonModel>(`/pokemon/${ id }`);
            return PokemonMapper.fromPokemonModelToEntity(response);
        } catch (error) {
            console.log("error getPokemon" + { error });
            throw error;
        }
    }

}