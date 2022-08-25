import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Login from '../Screen/Login';
import TimeList from '../Screen/TimeList';

const Stack = createStackNavigator();

export default function AppNavigation() {
  return (
    <NavigationContainer>
    <Stack.Navigator
         screenOptions={{
          headerShown: false,
        }}
        initialRouteName={"Login"}
    >
      <Stack.Screen  name="Login" component={Login} />
      <Stack.Screen name="TimeList" component={TimeList} />
    </Stack.Navigator>
    </NavigationContainer>
  );
}