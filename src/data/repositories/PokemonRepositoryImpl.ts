import { Pokemon, PokemonDetail } from "../../domain/entities";
import { PaginationResponse, PokemonRepository } from "../../domain/repositories/pokemonRepository";
import { PokemonMapper } from "../mappers/PokemonMapper";
import { PokemonListModel, PokemonModel } from "../models";
import { HttpAdapter } from "../network";
import { getResponse } from "msw";
import { getHandlers } from "../../mocks/getHandlers";
import { BASE_URL } from "../config";

export class PokemonRepositoryImpl implements PokemonRepository {
    private http: HttpAdapter

    constructor(http: HttpAdapter) {
        this.http = http;
    }

    async getAllPokemons(offset: number): Promise<PaginationResponse<PokemonDetail[]>> {
        try {
            // if (__DEV__) {
            //     return this.getAllPokemonsMock(offset);
            // }

            const response = await this.http.get<PokemonListModel>('/pokemon');
            const hasNext = response.next !== null;
            // const pokemonDetailsPromises = response.results.map(async (result) => {
            //     const pokemonDetailResponse = await this.http.get<PokemonModel>(`/pokemon/${result.name}`);
            //     return PokemonMapper.fromPokemonModelToEntity(pokemonDetailResponse);
            // });
            // const pokemonDetails = await Promise.all(pokemonDetailsPromises);


            return {
                data: [],
                hasNext
            };
        } catch (error) {
            const err = error as Error;
            console.log(err);
            throw err;
        }
    }

    async getPokemon(id: string): Promise<PokemonDetail> {
        try {
            // if (__DEV__) {
            //     return this.getPokemonMock(id);
            // }

            const response = await this.http.get<PokemonModel>(`/pokemon/${id}`);
            return PokemonMapper.fromPokemonModelToEntity(response);

        } catch (error) {
            console.log("error getPokemon" + { error });
            throw error;
        }
    }

    private async getAllPokemonsMock(offset: number): Promise<PaginationResponse<PokemonDetail[]>> {
        const request = new Request(`${BASE_URL}/pokemon`);
        const response = await getResponse(getHandlers, request);
        const jsonResponse = await response?.json() as PokemonListModel;
        const hasNext = jsonResponse.next !== null;

        const pokemonDetailsPromises = jsonResponse.results.map(async (result) => {
            const pokemonDetailResponse = await this.getPokemonMock(result.name);
            return pokemonDetailResponse;
        })
        const pokemonDetails = await Promise.all(pokemonDetailsPromises);

        return {
            data: pokemonDetails,
            hasNext
        };
    }

    private async getPokemonMock(id: string): Promise<PokemonDetail> {
        const request = new Request(`${BASE_URL}/pokemon/${id}`)
        const response = await getResponse(getHandlers, request)
        const jsonResponse = await response?.json() as PokemonModel;

        return PokemonMapper.fromPokemonModelToEntity(jsonResponse);
    }
}