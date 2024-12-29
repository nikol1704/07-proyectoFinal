export class PokemonDetail {
    id: string
    name: string
    types: string[]
    abilities: string[]
    height: number
    weight: number
    imagePath: string
    isFavorite: boolean

    constructor(
        id: string, 
        name: string,
        types: string[],
        abilities: string[],
        height: number,
        weight: number,
        imagePath: string,
        isFavorite: boolean
    ) {
        console.log("types");
        console.log([...types]);
        this.id = id,
        this.name = name
        this.types = types
        this.abilities = abilities
        this.height = height
        this.weight = weight
        this.imagePath = imagePath
        this.isFavorite = isFavorite
    }

}