import { ScrollView, Text, View } from 'react-native'
import { Styles } from '../../styles/styles'
import { usePokemons } from '../../../domain/useCases/usePokemons';

export const HomeScreen = () => {
  const { isLoading, pokemons } = usePokemons();
  if (isLoading) {
    return (<Text>Cargando...</Text>);
  }
  return (
    <ScrollView>
      <View style={Styles.container}>
        {
          pokemons.map( pokemon => (
            <Text key={ pokemon.name }>{ pokemon.name }</Text>
          ))
        }
      </View>
    </ScrollView>

  )
}
