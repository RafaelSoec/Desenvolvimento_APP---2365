import React from 'react';

import IntroPage from '../pages/IntroPage';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'react-native';

const Stack = createStackNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <StatusBar barStyle="light-content" />
      <Stack.Navigator>
        <Stack.Screen options={{headerShown: false}} name="IntroPage" component={IntroPage} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Routes
