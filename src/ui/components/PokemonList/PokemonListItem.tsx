import { Image, Pressable, StyleSheet, View, Text } from "react-native"
import { Card } from "../shared/Card"
import { Colors, Constants } from "../../styles/styles"
import { Routes, StackNavigatorParams } from "../../navigation/StackNavigator"
import { NavigationProp, RouteProp, useNavigation, useRoute } from "@react-navigation/native"
import { Styles } from '../../styles/styles'
import { Subtitle } from '../shared/Subtitle';
import { PokemonDetail } from "../../../domain/entities/PokemonDetail"

interface Props {
  pokemon: PokemonDetail
  isLoading: boolean
}

export const PokemonListItem = ({ pokemon, isLoading }: Props) => {
  const navigation = useNavigation<NavigationProp<StackNavigatorParams>>();

  const types = pokemon?.types ?? []
  const abilities = pokemon?.abilities ?? []
  const id = pokemon.id

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
    <Card>
      <Pressable
        onPress={() => navigation.navigate(Routes.Details, { id })}
        style={({ pressed }) => ({
          marginHorizontal: 4,
          paddingBottom: 20,
          paddingHorizontal: 7,
          opacity: pressed ? 0.9 : 1,
        })}
      >
        <View style={styles.container}>
          <View style={styles.item}>
            <Image
              style={styles.image}
              source={{ uri: pokemon?.imagePath }}
              resizeMode='contain'
            />
          </View>

          <View style={{ alignItems: 'center',  flex: 1 }}>
            <Text style={styles.title} >{pokemon?.name ?? 'Pokemon'}</Text>

            <Subtitle title="Type:" description={ types.join(', ') } ></Subtitle>

            <Subtitle title="Abilities:" description= {abilities.join(', ')} ></Subtitle>
          </View>
        </View>
      </Pressable>
    </Card>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: Constants.large,
    paddingBottom: Constants.xSmall,
    minHeight: 140,
  },
  item: {
    width: '40%',
    paddingRight: 16
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