import { ActivityIndicator, ScrollView, StyleSheet, Text, View } from 'react-native'
import { Colors, Constants, Styles } from '../../styles/styles'
import { usePokemons } from '../../hooks/usePokemons';
import { PokemonListItem } from '../../components/PokemonList/PokemonListItem';
import { FlatList } from 'react-native-gesture-handler';
import { useOrientation } from '../../hooks/useOrientation';
import { LoadingIndicator } from '../../components/shared/LoadingIndicator';
import { ItemSeparator } from '../../components/shared/ItemSeparator';

export const HomeScreen = () => {
  const { isLoading, allPokemons, nextItems } = usePokemons(0, 20);
  const isLandscape = useOrientation();

  if (isLoading && allPokemons.length == 0) {
    <View style={styles.container}>
      <LoadingIndicator />
    </View>
  }

  return (
    <FlatList
      data={allPokemons}
      style={{ ...Styles.container, padding: isLandscape ? 40 : Constants.xLarge }}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <PokemonListItem pokemon={item} isLoading={isLoading} />}
      ItemSeparatorComponent={() => <ItemSeparator />}
      ListFooterComponent={<LoadingIndicator />}
      onEndReachedThreshold={1}
      onEndReached={nextItems}
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