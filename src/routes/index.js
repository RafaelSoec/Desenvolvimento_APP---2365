import React from 'react';

import IntroPage from '../pages/IntroPage';
import LoginPage from '../pages/LoginPage';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AnimalRegistrationPage from '../pages/AnimalRegistrationPage';
import AnimalRegistrationSuccessPage from '../pages/AnimalRegistrationSuccessPage';

const Stack = createStackNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{headerShown: false}} name="IntroPage" component={IntroPage} />
        <Stack.Screen name="Login" component={LoginPage} options={{
          title: 'Login',
          headerStyle: {
            backgroundColor: '#cfe9e5',
          },
          headerTintColor: '#434343',
          headerTitleStyle: {
            fontSize: 20
          },
        }} />
        <Stack.Screen name="AnimalRegistration" component={AnimalRegistrationPage} options={{
          title: 'Cadastro do Animal',
          headerStyle: {
            backgroundColor: '#ffd358',
          },
          headerTintColor: '#434343',
          headerTitleStyle: {
            fontSize: 20
          },
        }} />
        <Stack.Screen name="AnimalRegistrationSuccess" component={AnimalRegistrationSuccessPage} options={{
          title: 'Cadastro do Animal',
          headerStyle: {
            backgroundColor: '#ffd358',
          },
          headerTintColor: '#434343',
          headerTitleStyle: {
            fontSize: 20
          },
        }} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Routes
