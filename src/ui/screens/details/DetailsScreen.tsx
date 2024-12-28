import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import { Colors, Constants, Styles } from '../../styles/styles'
import { useRoute, RouteProp } from '@react-navigation/native';
import { StackNavigatorParams, Routes } from '../../navigation/StackNavigator';
import { usePokemonDetail } from '../../hooks/usePokemonDetail';
import Card from '../../components/shared/Card';
import { Subtitle } from '../../components/shared/Subtitle';
import { ScrollView } from 'react-native-gesture-handler';
import { useOrientation } from '../../hooks/useOrientation';
import { IonIcon } from '../../components/shared/IonIcon';

export const DetailsScreen = () => {
  const { id } = useRoute<RouteProp<StackNavigatorParams, Routes.Details>>().params;
  const { isLoading, pokemon } = usePokemonDetail(id);
  const isLandscape = useOrientation();

  const types = pokemon?.types ?? []
  const abilities = pokemon?.abilities ?? []

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
              source={{ uri: pokemon?.imagePath }}
              resizeMode='contain'
            />
          </View>

          <StarIcon/>

          <Subtitle title="Name" description={pokemon?.name ?? "Pokemon"} fontSizeTitle={16} fontSizeDescription={16}></Subtitle>

          <Subtitle title="Type:" description={types.join(', ')} fontSizeTitle={16} fontSizeDescription={16} ></Subtitle>

          <Subtitle title="Abilities:" description={abilities.join(', ')} fontSizeTitle={16} fontSizeDescription={16}></Subtitle>

          <Subtitle title="Height:" description={`${pokemon?.height ?? 0}cm`} fontSizeTitle={16} fontSizeDescription={16}></Subtitle>

          <Subtitle title="Weight:" description={`${pokemon?.weight ?? 0}kg`} fontSizeTitle={16} fontSizeDescription={16}></Subtitle>

        </View>

      </Card>
    </ScrollView>
  );
}

const StarIcon = () => {
  return (
    <Pressable
      onPress={() => { }}
    >
      <IonIcon name="star" size={40}></IonIcon>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    padding: Constants.xLarge,
    gap: 10,
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