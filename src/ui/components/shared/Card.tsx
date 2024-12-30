import { View } from "react-native";
import { Constants, Colors, Styles } from "../../styles/styles";

export const Card = ({ children }: { children: React.ReactNode }) => {
    return (
        <View style={{
            borderRadius: Constants.large,
            backgroundColor: Colors.white,
            ...Styles.shadow
        }}>
            {children}
        </View>
    )
}