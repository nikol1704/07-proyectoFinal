import { Pressable } from "react-native"
import { Colors, Styles } from "../../styles/styles"
import { IonIcon } from "./IonIcon"

interface Props {
    isSelected: boolean
    action: () => void,
}

export const StarIcon = ({ isSelected, action }: Props) => {
    return (
        <Pressable
            onPress={() => action()}
            style={({ pressed }) => ({
                opacity: pressed ? 0.9 : 1,
            })}
        >
            <IonIcon name="star" size={40} color={isSelected ? Colors.yellow : Colors.disabled}></IonIcon>
        </Pressable>
    )
}