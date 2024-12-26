import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from '../screens/home/HomeScreen';
import { DetailsScreen } from '../screens/details/DetailsScreen';
import { useNavigation } from '@react-navigation/native';
import { useEffect } from 'react';

const Stack = createStackNavigator<StackNavigatorParams>();

export type StackNavigatorParams = {
    [Routes.Home]: undefined // es porque no hay params
    [Routes.Details]: { id: number, name: string }
}

export enum Routes {
    Home = "Lista de Pokemons",
    Details = "Detalle",
}

export const StackNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name={Routes.Home} component={HomeScreen} />
            <Stack.Screen name={Routes.Details} component={DetailsScreen} />
        </Stack.Navigator>
    );
}