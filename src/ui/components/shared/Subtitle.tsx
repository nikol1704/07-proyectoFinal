import { StyleSheet, Text, View } from "react-native"
import { Fonts, Styles } from "../../styles/styles"

interface Props {
    title: string,
    description: string,
    fontSizeTitle?: number,
    fontSizeDescription?: number,
}

export const Subtitle = ({ title, description, fontSizeTitle=12, fontSizeDescription=10}: Props) => {
    return (
        <View style={styles.container}>
            <Text style= { {...Styles.title, flex : 1, fontSize:fontSizeTitle } }>{title}</Text>
            <Text 
                numberOfLines={1} 
                style= {{
                    fontFamily: Fonts.montserratRegular, 
                    flex : 1, 
                    fontSize:fontSizeDescription
                }}
            >
                {description} 
            </Text>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex:1, 
        flexDirection:"row", 
        justifyContent: 'center',
        alignItems: 'center',
    }
})