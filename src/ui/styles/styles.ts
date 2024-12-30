import { StyleSheet } from "react-native";

export const Colors = {
    background: '#E4E4E4',
    white: '#FFFFFF',
    gray: '#00000040',
    black: '#000000',
    blue: '#809AF5',
    disabled: '#D9D9D9',
    yellow: '#ffd32c'
};

export const Constants = {
    xSmall: 4,
    small: 8,
    medium: 12,
    large: 16,
    xLarge: 24,
    xxLarge: 32
};

export const Fonts = {
    montserratRegular: 'Montserrat-Regular'
}

export const Styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.background,
    },
    title: {
        fontFamily: Fonts.montserratRegular,
        fontWeight: 'bold',
        letterSpacing: 1
    },
    shadow: {
        shadowColor: '#171717',
        shadowOffset: {width: 0, height: 4},
        shadowOpacity: 0.2,
        shadowRadius: 3,
    },
})