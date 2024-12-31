import { StyleSheet, View } from 'react-native'
import { Constants, Styles } from '../../styles/styles'
import { PokemonListItem } from '../../components/PokemonList/PokemonListItem';
import { FlatList } from 'react-native-gesture-handler';
import { useOrientation, usePokemons } from '../../hooks';
import { LoadingIndicator, ItemSeparator } from '../../components/shared';

export const HomeScreen = () => {
  const { isLoading, allPokemons, nextItems } = usePokemons(0, 20);
  const isLandscape = useOrientation();

  if (isLoading && allPokemons.length == 0) {
    return (
      <View style={styles.container}>
        <LoadingIndicator />
      </View>
    )
  }

  return (
    <FlatList
      data={allPokemons}
      style={{ ...Styles.container, padding: isLandscape ? 40 : Constants.xLarge }}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <PokemonListItem pokemon={item} isLoading={isLoading} />}
      ItemSeparatorComponent={() => <ItemSeparator />}
      ListFooterComponent={<LoadingIndicator />}
    // onEndReachedThreshold={1}
    //onEndReached={nextItems}
    />
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})