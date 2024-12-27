import { ScrollView, Text, View } from 'react-native'
import { Styles } from '../../styles/styles'
import { usePokemons } from '../../hooks/usePokemons';
import { PokemonListItem } from '../../components/PokemonList/PokemonListItem';

export const HomeScreen = () => {
  const { isLoading, pokemons } = usePokemons();

  if (isLoading) {
    return (<Text>Cargando...</Text>);
  }

  return (
    <ScrollView style={Styles.container}>
      <View>
        {
          pokemons.map( pokemon => (
            <PokemonListItem key={ pokemon.id } id={ pokemon.id }></PokemonListItem>
          ))
        }
        {/* <Text>HomeScreen</Text> */}
      </View>
    </ScrollView>

  )
}