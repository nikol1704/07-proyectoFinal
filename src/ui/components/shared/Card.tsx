import { View } from "react-native";
import { Constants, Colors } from "../../styles/styles";

export const Card = ( { children }: { children: React.ReactNode }) => {
    return(
        <View style= {{ 
            borderRadius: Constants.large,
            backgroundColor: Colors.white,
            shadowColor: Colors.gray,
            shadowOffset: { width: 0, height: 2 }
        }}>
            { children }
        </View>
    )
}