import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from '../screens/home/HomeScreen';
import { DetailsScreen } from '../screens/details/DetailsScreen';

const Stack = createStackNavigator<StackNavigatorParams>();

export type StackNavigatorParams = {
    [Routes.Home]: undefined
    [Routes.Details]: { id: number, name: string }
}

export enum Routes {
    Home = "Pokemons",
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