import { StyleSheet } from "react-native";

export const Colors = {
    background: '#E4E4E4',
    white: '#FFFFFF',
    gray: '#00000040'
};

export const Constants = {
    xSmall: 4,
    small: 8,
    medium: 12,
    large: 16,
    xLarge: 32
};

export const Styles = StyleSheet.create({

    container: {
        flex: 1,
        padding: Constants.large,
        backgroundColor: Colors.background,
    }
})