import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from '../screens/home/HomeScreen';
import { DetailsScreen } from '../screens/details/DetailsScreen';
import { Constants, Fonts } from '../styles/styles';
import { IonIcon } from '../components/shared';

const Stack = createStackNavigator<StackNavigatorParams>();

export type StackNavigatorParams = {
    [Routes.Home]: undefined
    [Routes.Details]: { id: string }
}

export enum Routes {
    Home = "Pokedex",
    Details = "Detalle",
}

export const StackNavigator = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerTitleStyle: {
                    fontWeight: 'bold',
                    fontFamily: Fonts.montserratRegular,
                    letterSpacing: 0.5,
                    fontSize: 20
                },
                headerBackButtonDisplayMode: 'minimal',
                headerBackImage: () => <IonIcon style= {{ paddingLeft: Constants.large }} name="arrow-back-outline" size={30}/>
            }}
        >
            <Stack.Screen name={Routes.Home} component={HomeScreen} />
            <Stack.Screen 
                name={Routes.Details} 
                component={DetailsScreen} 
            />
        </Stack.Navigator>
    );
}