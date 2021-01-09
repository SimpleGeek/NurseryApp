import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './components/Login.js';
import Checkin from './components/Checkin.js';
import Confirm from './components/Confirm.js';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          component={Login}
        />
        <Stack.Screen
          name="Check In"
          component={Checkin}
        />
        <Stack.Screen
          name="Confirm"
          component={Confirm}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;