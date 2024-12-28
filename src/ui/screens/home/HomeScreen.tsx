import { ScrollView, StyleSheet, Text, View } from 'react-native'
import { Colors, Constants, Styles } from '../../styles/styles'
import { usePokemons } from '../../hooks/usePokemons';
import { PokemonListItem } from '../../components/PokemonList/PokemonListItem';
import { FlatList } from 'react-native-gesture-handler';
import { useOrientation } from '../../hooks/useOrientation';

export const HomeScreen = () => {
  const { isLoading, pokemons } = usePokemons();
  const isLandscape = useOrientation();

  if (isLoading) {
    return (<Text>Cargando...</Text>);
  }

  return (
    <FlatList
      data={pokemons}
      style={{ ...Styles.container, padding: isLandscape ? 40 : Constants.xLarge }}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <PokemonListItem id={item.id} />}
      ItemSeparatorComponent={() => <ItemSeparator />}
    />

  )
}

const ItemSeparator = () => {
  return (
    <View style={styles.spacing}>
      <View style={styles.row} />
    </View>
  )
}

const styles = StyleSheet.create({
  row: {
    flex: 1,
    height: 2,
    backgroundColor: Colors.blue,
    marginHorizontal: 24
  },
  spacing: {
    height: Constants.xxLarge,
    flexDirection: 'row',
    alignItems: 'center'
  }
})