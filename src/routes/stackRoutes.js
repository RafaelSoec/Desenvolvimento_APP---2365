import React from 'react'

import { createStackNavigator } from '@react-navigation/stack';
import AnimalRegistrationPage from '../pages/AnimalRegistrationPage';
import AnimalRegistrationSuccessPage from '../pages/AnimalRegistrationSuccessPage';
import AccesDeniedPage from '../pages/AcessDeniedPage';
import AssistPage from '../pages/AssistPage';

import IntroPage from '../pages/IntroPage';
import LoginPage from '../pages/LoginPage';
import SingUpPage from '../pages/SignUpPage';

const Stack = createStackNavigator();

const setOption = (pageName) => {
  return (
    {
      title: pageName,
      headerStyle: {
        backgroundColor: '#ffd358',
      },
      headerTintColor: '#434343',
      headerTitleStyle: {
        fontSize: 20
      },
    }
  );
}

const StackRoutes = () => {
  return (
    <Stack.Navigator initialRouteName="IntroPage">
      <Stack.Screen options={{ headerShown: false }} name="IntroPage" component={IntroPage} />
      <Stack.Screen name="AcessDeniedPage" component={AccesDeniedPage} options={setOption('Cadastro')}/>
      <Stack.Screen name="CadastroPessoal" component={SingUpPage} options={setOption('Cadastro Pessoal')}/>
      <Stack.Screen name="Login" component={LoginPage} options={setOption('Login')}/>
      <Stack.Screen name="AnimalRegistration" component={AnimalRegistrationPage} options={setOption('Cadastro do Animal')}/>
      <Stack.Screen name="AnimalRegistrationSuccess" component={AnimalRegistrationSuccessPage} options={setOption('Cadastro do Animal')}/>
      <Stack.Screen name="AssistPage" component={AssistPage} options={setOption("Ajudar")} />
    </Stack.Navigator>
  )
}

export default StackRoutes

