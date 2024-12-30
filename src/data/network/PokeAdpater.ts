import { BASE_URL } from "../config";
import { AxiosAdapter } from "./AxiosAdapter";

export const PokeAdpater = new AxiosAdapter({
    baseUrl: BASE_URL,
})