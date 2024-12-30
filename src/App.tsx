import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { StackNavigator } from './ui/navigation/StackNavigator';

export const App = () => {
  console.log('entrando en la app');
  
  return (
    <NavigationContainer>
      <StackNavigator/>
    </NavigationContainer>
  )
}