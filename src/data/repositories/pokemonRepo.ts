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

    async getAllPokemons(): Promise<Pokemon[]> {
        try {
            const response = await this.http.get<PokemonListModel>('/pokemon');
            console.log( [response.results])
            return response.results.map( result => PokemonMapper.fromPokemonListItemToEntity(result))
        } catch (error) {
            console.log("error getAllPokemons" + { error });
            throw error;
        }
    }

    async getPokemon(id: string): Promise<PokemonDetail> {
        try {
            console.log(id);
            const response = await this.http.get<PokemonModel>(`/pokemon/${ id }`);
            return PokemonMapper.fromPokemonModelToEntity(response);
        } catch (error) {
            console.log("error getPokemon" + { error });
            throw error;
        }
    }

}