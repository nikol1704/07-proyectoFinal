import { Image, StyleSheet, Text, View } from 'react-native'
import { Colors, Constants, Styles } from '../../styles/styles'
import { useRoute, RouteProp } from '@react-navigation/native';
import { StackNavigatorParams, Routes } from '../../navigation/StackNavigator';
import { Card, Subtitle, StarIcon } from '../../components/shared';
import { ScrollView } from 'react-native-gesture-handler';
import { useEffect, useState } from 'react';
import { usePokemonStore, useOrientation, usePokemonDetail } from '../../hooks';

export const DetailsScreen = () => {
  const { id } = useRoute<RouteProp<StackNavigatorParams, Routes.Details>>().params;
  const { isLoading, pokemon, fetchPokemon } = usePokemonDetail(id);
  const isLandscape = useOrientation();

  const { savedPokemons, addPokemon, updatePokemon } = usePokemonStore();
  let savedPokemon = savedPokemons.find(pokemon => pokemon.id === id);
  const [isFavorite, setIsFavorite] = useState(savedPokemon?.isFavorite ?? false);

  const types = savedPokemon?.types ?? []
  const abilities = savedPokemon?.abilities ?? []

  // Comprobamos si esta en store
  useEffect(() => {
    if (savedPokemon == undefined) {
      console.log("no esta guardado, fetch");
      fetchPokemon()
    }
  }, [])

  useEffect(() => {
      if (pokemon) {
        console.log("guardado");
        addPokemon(pokemon)
      }
  }, [pokemon])

  const saveFavorite = (isFavorite: boolean) => {
    if (savedPokemon) {
      setIsFavorite(isFavorite);
      savedPokemon.isFavorite = isFavorite;
      updatePokemon(savedPokemon);
    }
  }

  if (isLoading) {
    return (
      <Card>
        <View style={styles.container}>
          <Text>Cargando...</Text>
        </View>
      </Card>
    );
  }
  return (
    <ScrollView style={{ ...Styles.container, padding: isLandscape ? 40 : Constants.xLarge }}>
      <Card>
        <View style={styles.container}>
          <View style={{ minHeight: 140 }}>
            <Image
              style={styles.image}
              source={{ uri: savedPokemon?.imagePath }}
              resizeMode='contain'
            />
          </View>

          <View style={{ flexDirection: 'row', justifyContent: 'flex-end', padding: 24, }}>
            <StarIcon 
              isSelected={ isFavorite } 
              action={ () => { saveFavorite(!isFavorite) }}
            />
          </View>

          <Subtitle title="Name" description={savedPokemon?.name ?? "Pokemon"} fontSizeTitle={16} fontSizeDescription={16} textAlign='right'></Subtitle>

          <Subtitle title="Type:" description={types.join(', ')} fontSizeTitle={16} fontSizeDescription={16} textAlign='right'></Subtitle>

          <Subtitle title="Abilities:" description={abilities.join(', ')} fontSizeTitle={16} fontSizeDescription={16} textAlign='right'></Subtitle>

          <Subtitle title="Height:" description={`${savedPokemon?.height ?? 0}cm`} fontSizeTitle={16} fontSizeDescription={16} textAlign='right'></Subtitle>

          <Subtitle title="Weight:" description={`${savedPokemon?.weight ?? 0}kg`} fontSizeTitle={16} fontSizeDescription={16} textAlign='right'></Subtitle>

        </View>

      </Card>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    padding: Constants.xLarge,
    gap: 12,
  },
  image: {
    flex: 1,
    borderRadius: 2,
    borderColor: Colors.black,
    borderWidth: 1,
  },
  title: {
    ...Styles.title,
    fontSize: 20,
    alignItems: 'center',
    paddingBottom: Constants.xLarge,
  }
})