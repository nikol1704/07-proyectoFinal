import { Pokemon } from "../entities/Pokemon"
import { PokemonDetail } from "../entities/PokemonDetail"

// Es una interfaz que define lo que se hara, luego habra otra implementación que usara esa interfaz
export interface PokemonRepository {
    getAllPokemons(): Promise<Pokemon[]>
    getPokemon(id: string): Promise<PokemonDetail>
}