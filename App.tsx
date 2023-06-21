import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './src/screens/LoginScreen/index';
import FollowingScreen from './src/screens/FollowingScreen/index';

const Stack = createStackNavigator();

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ title: 'Login', headerShown: false }}
        />

        <Stack.Screen
          name="Following"
          component={FollowingScreen}
          options={{ title: 'Following', headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;