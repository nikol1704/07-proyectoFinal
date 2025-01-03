import { PokemonDetail } from "../entities"

// Es una interfaz que define lo que se hara, luego habra otra implementación que usara esa interfaz
export interface PokemonRepository {
    getAllPokemons(offset?: number, limit?: number): Promise<PaginationResponse<PokemonDetail[]>>
    getPokemon(id: string): Promise<PokemonDetail>
}
export interface PaginationResponse<T>{
    data: T
    hasNext: boolean
  }