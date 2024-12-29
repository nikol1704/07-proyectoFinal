import { ActivityIndicator, StyleSheet, View } from "react-native"
import { TouchableWithoutFeedback } from "react-native-gesture-handler"
import { Colors } from "../../styles/styles"

export const LoadingIndicator = () => {
    return(
        <View style={ styles.footer }>
            <ActivityIndicator color={ Colors.disabled }></ActivityIndicator>
        </View>
    )
}

const styles = StyleSheet.create({
    footer: {
        padding: 20,
        alignItems: 'center',
        justifyContent: 'center',
    }
})