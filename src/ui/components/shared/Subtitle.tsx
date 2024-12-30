import { StyleSheet, Text, TextStyle, View } from "react-native"
import { Fonts, Styles } from "../../styles/styles"

interface Props {
    title: string,
    description: string,
    fontSizeTitle?: number,
    fontSizeDescription?: number,
    textAlign?: TextStyle['textAlign']
}

export const Subtitle = ({ title, description, fontSizeTitle=12, fontSizeDescription=10, textAlign='right'}: Props) => {
    return (
        <View style={styles.container}>
            <Text style= { {...Styles.title, flex : 1, fontSize:fontSizeTitle } }>{title}</Text>
            <Text 
                numberOfLines={1} 
                style= {{
                    fontFamily: Fonts.montserratRegular, 
                    flex: 1, 
                    fontSize:fontSizeDescription,
                    textAlign: textAlign,
                    letterSpacing: 0.5
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
        justifyContent: 'flex-start',
        alignItems: 'center',
    }
})