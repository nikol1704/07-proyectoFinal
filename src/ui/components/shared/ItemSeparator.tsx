import { StyleSheet, View } from "react-native"
import { Colors, Constants } from "../../styles/styles"

export const ItemSeparator = () => {
    return (
      <View style={styles.spacing}>
        <View style={styles.row} />
      </View>
    )
  }
  
  const styles = StyleSheet.create({
    row: {
      flex: 1,
      height: 2,
      backgroundColor: Colors.blue,
      marginHorizontal: 24
    },
    spacing: {
      height: Constants.xxLarge,
      flexDirection: 'row',
      alignItems: 'center'
    }
})