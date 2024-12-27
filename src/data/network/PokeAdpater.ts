// import { BASE_URL } from "@env";
import { AxiosAdapter } from "./AxiosAdapter";

export const PokeAdpater = new AxiosAdapter({
    baseUrl: 'https://pokeapi.co/api/v2', //?? 'no-key'
    // params: {
    //     limit: 2
    // }
})