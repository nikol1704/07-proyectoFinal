import { Pressable, StyleSheet, Text, View } from "react-native"
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
                onPress={() => navigation.navigate( Routes.Details , { id: id })}
                style={({ pressed }) => ({
                    marginHorizontal: 4,
                    paddingBottom: 20,
                    paddingHorizontal: 7,
                    opacity: pressed ? 0.9 : 1,
                })
                }
            >
                <View style={styles.container}>
                    <View style={styles.item}>

                    </View>

                    <View>
                        <Text>{pokemon?.name ?? "Pokemon"}</Text>
                    </View>
                </View>

            </Pressable>
        </Card>
    )
}

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
        width: '30%'
    }
})