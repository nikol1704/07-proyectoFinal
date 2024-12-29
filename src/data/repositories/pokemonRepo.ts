import { PokemonDetail } from "../../domain/entities";
import { PokemonRepository } from "../../domain/repositories/pokemonRepository";
import { PokemonMapper } from "../mappers/PokemonMapper";
import { PokemonListModel, PokemonModel } from "../models";
import { HttpAdapter } from "../network";

export class PokemonRepositoryImpl implements PokemonRepository {
    private http: HttpAdapter

    constructor(http: HttpAdapter) {
        this.http = http;
    }

    async getAllPokemons(offset: number): Promise<PokemonDetail[]> {
        try {
            const response = await this.http.get<PokemonListModel>(`/pokemon?offset=${offset}`);
            console.log(response.next);

            const pokemonDetailsPromises = response.results.map(async (result) => {
                const pokemonDetailResponse = await this.http.get<PokemonModel>(`/pokemon/${result.name}`);
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
            const response = await this.http.get<PokemonModel>(`/pokemon/${id}`);
            return PokemonMapper.fromPokemonModelToEntity(response);
        } catch (error) {
            console.log("error getPokemon" + { error });
            throw error;
        }
    }

}