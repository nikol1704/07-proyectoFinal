import { Image, Pressable, StyleSheet, Text, View } from "react-native"
import Card from "../shared/Card"
import { Constants } from "../../styles/styles"
import { usePokemonDetail } from "../../hooks/usePokemonDetail"
import { Routes, StackNavigatorParams } from "../../navigation/StackNavigator"
import { NavigationProp, useNavigation } from "@react-navigation/native"

interface Props {
  id: string
}

export const PokemonListItem = ({ id }: Props) => {
  const { isLoading, pokemon } = usePokemonDetail(id);
  const navigation = useNavigation<NavigationProp<StackNavigatorParams>>();
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
          <View style={styles.item}></View>
          {/* <Image
            style={styles.image}
            source={{ uri: "" }}
          /> */}
          <View>
            <Text>{pokemon?.name ?? 'Pokemon'}</Text>


            <Text>{types.join(', ')} </Text>
            <Text>{abilities.join(', ')} </Text>

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
    minHeight: 140
  },
  item: {
    width: '40%'
  },
  image: {
    flex: 1,
    borderRadius: 18
  },
})