import { ScrollView, Text, View } from 'react-native'
import { Styles } from '../../styles/styles'
import { usePokemons } from '../../hooks/usePokemons';
import { PokemonListItem } from '../../components/PokemonList/PokemonListItem';
import { FlatList } from 'react-native-gesture-handler';

export const HomeScreen = () => {
  const { isLoading, pokemons } = usePokemons();

  if (isLoading) {
    return (<Text>Cargando...</Text>);
  }

  return (
    // <ScrollView style={Styles.container}>

    //   <View>
    //     {
    //       pokemons.map(pokemon => (
    //         <PokemonListItem key={pokemon.id} id={pokemon.id}></PokemonListItem>
    //       ))
    //     }

          <FlatList 
            data={ pokemons }
            style={Styles.container}
            keyExtractor={(item) => item.id }  // Make sure id is a string
            renderItem={({ item }) => <PokemonListItem id={item.id} />}
          />
    //   </View>
    // </ScrollView>
  )
}
