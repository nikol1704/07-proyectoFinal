import { http, HttpResponse } from 'msw'
import { BASE_URL } from '../data/config'
import { PokemonListModel, PokemonModel } from '../data/models'
import { Pokemon, PokemonDetail } from '../domain/entities'


export const getHandlers = [
    //Intercept GET requests...
    http.get(`${BASE_URL}/pokemon`, () => {
        // ...and respond to them using this JSON response.

        return HttpResponse.json<Pokemon[]>(
            [
                {
                    name: "bulbasaur",
                    url: "https://pokeapi.co/api/v2/pokemon/1/",
                    id: "1"
                }
            ]
        )

    }),

    http.get(`${BASE_URL}/pokemon/:id`, () => {
        // ...and respond to them using this JSON response.

        return HttpResponse.json<PokemonDetail>(
            {
                id: "1",
                name: "Bulbasur",
                types: ["grass", "poison"],
                abilities: ["overgrow", "chlorophyll"],
                height: 7,
                weight: 69,
                imagePath:  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
                isFavorite: false
            }
        )
    }),
]
