import { AxiosError } from "axios";
import { Pokemon, PokemonDetail } from "../../domain/entities";
import { PokemonRepository } from "../../domain/repositories/pokemonRepository";
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

    async getAllPokemons(offset: number): Promise<PokemonDetail[]> {
        try {
            // const response = await this.http.get<PokemonListModel>(`/pokemon`);

            // const pokemonDetailsPromises = response.results.map(async (result) => {
            //     const pokemonDetailResponse = await this.http.get<PokemonModel>(`/pokemon/${result.name}`);
            //     return PokemonMapper.fromPokemonModelToEntity(pokemonDetailResponse);
            // });

            // return await Promise.all(pokemonDetailsPromises);
            

            const request = new Request(`${BASE_URL}/pokemon`);
            const response = await getResponse(getHandlers, request);
            const jsonResponse = await response?.json() as Pokemon[];

            const pokemonDetailsPromises = jsonResponse.map(async (result) => { 
                return await this.getPokemonFake(result.name)
            }

            )
            return await Promise.all(pokemonDetailsPromises);

            // const pokemonDetailsPromises = jsonResponse.map(async (result) => {
            //     const pokemonDetailResponse = await this.http.get<PokemonModel>(`/pokemon/${result.name}`);
            //     return PokemonMapper.fromPokemonModelToEntity(pokemonDetailResponse);
            // });

            // return await Promise.all(pokemonDetailsPromises);



        } catch (error) {
            const err = error as AxiosError;
            console.log(err)
            throw err

        }
    }

    async getPokemonFake(id: string): Promise<PokemonDetail> {
        try {
            const request = new Request(`${BASE_URL}/pokemon/${id}`)
            const response = await getResponse(getHandlers, request)
            const jsonResponse = await response?.json() as PokemonDetail;

            return jsonResponse;
        } catch (error) {
            console.log("error getPokemon" + { error });
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