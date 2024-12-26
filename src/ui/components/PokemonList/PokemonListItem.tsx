import { StyleSheet, View } from "react-native"
import Card from "../shared/Card"
import { Constants } from "../../styles/styles"

interface Props {
    name: string
    image: string
    types: string[]
    abilities: string[]
}

export const PokemonListItem = ({ name, image, types, abilities }: Props) => {
    return (
        <Card>
            <View style={styles.container}>
                <View style={styles.item}>

                </View>

                <View style={styles.item}>

                </View>
            </View>
        </Card>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        padding: Constants.large,
        paddingBottom: Constants.xSmall
    },
    item: {
        width: '30%'
    }
})