import React from 'react'

import { createStackNavigator } from '@react-navigation/stack';
import AnimalRegistrationPage from '../pages/AnimalRegistrationPage';
import AnimalRegistrationSuccessPage from '../pages/AnimalRegistrationSuccessPage';
import AccesDeniedPage from '../pages/AcessDeniedPage';
import Icon from 'react-native-vector-icons/FontAwesome5';

import AssistPage from '../pages/AssistPage';
import IntroPage from '../pages/IntroPage';
import LoginPage from '../pages/LoginPage';
import SingUpPage from '../pages/SignUpPage';
import MyPetsPage from '../pages/MyPetsPage';
import AdoptPage from '../pages/AdoptPage';
import HelpPage from '../pages/HelpPage';
import PatronizePage from '../pages/PatronizePage';

const Stack = createStackNavigator();

const StackRoutes = ({ navigation }) => {
  return (
    <Stack.Navigator initialRouteName="LoginPage">
      <Stack.Screen options={{ headerShown: false }} name="IntroPage" component={IntroPage} />


      <Stack.Screen name="LoginPage" component={LoginPage} options={{
        headerShown: false,
        title: 'Login',
        headerStyle: {
          backgroundColor: '#88c9bf',
        },
        headerTintColor: '#434343',
        headerTitleStyle: {
          fontSize: 20
        },
      }} />

      <Stack.Screen name="SignUpPage" component={SingUpPage} options={{
        headerShown: true,
        title: 'Cadastro',
        headerStyle: {
          backgroundColor: '#88c9bf',
        },
        headerTintColor: '#434343',
        headerTitleStyle: {
          fontSize: 20
        },
      }} />

      <Stack.Screen name="AcessDeniedPage" component={AccesDeniedPage} options={{
        title: 'Cadastro',
        headerStyle: {
          backgroundColor: '#88c9bf',
        },
        headerTintColor: '#434343',
        headerTitleStyle: {
          fontSize: 20
        },
      }} />

      <Stack.Screen name="CadastroPessoal" component={SingUpPage} options={{
        title: 'Cadastro Pessoal',
        headerStyle: {
          backgroundColor: '#88c9bf',
        },
        headerTintColor: '#434343',
        headerTitleStyle: {
          fontSize: 20
        },
      }} />

      <Stack.Screen name="MyPets" component={MyPetsPage} options={{
        title: 'Meus Pets',
        headerLeft: () => (
          <Icon
            name='bars'
            size={24}
            onPress={() => navigation.toggleDrawer()}
            style={{ marginLeft: 20, color: '#434343' }}
          />
        ),
        headerRight: () => (
          <Icon
            name='search'
            size={24}
            style={{ marginRight: 20, color: '#434343' }}
          />
        ),
        headerStyle: {
          backgroundColor: '#88c9bf',
        },
        headerTintColor: '#434343',
        headerTitleStyle: {
          fontSize: 20
        },
      }} />

      <Stack.Screen name="Adopt" component={AdoptPage} options={{
        title: 'Adotar',
        headerLeft: () => (
          <Icon
            name='bars'
            size={24}
            onPress={() => navigation.toggleDrawer()}
            style={{ marginLeft: 20, color: '#434343' }}
          />
        ),
        headerRight: () => (
          <Icon
            name='search'
            size={24}
            style={{ marginRight: 20, color: '#434343' }}
          />
        ),
        headerStyle: {
          backgroundColor: '#ffd358',
        },
        headerTintColor: '#434343',
        headerTitleStyle: {
          fontSize: 20
        },
      }} />

      <Stack.Screen name="Help" component={HelpPage} options={{
        title: 'Ajudar',
        headerLeft: () => (
          <Icon
            name='bars'
            size={24}
            onPress={() => navigation.toggleDrawer()}
            style={{ marginLeft: 20, color: '#434343' }}
          />
        ),
        headerRight: () => (
          <Icon
            name='search'
            size={24}
            style={{ marginRight: 20, color: '#434343' }}
          />
        ),
        headerStyle: {
          backgroundColor: '#ffd358',
        },
        headerTintColor: '#434343',
        headerTitleStyle: {
          fontSize: 20
        },
      }} />

      <Stack.Screen name="Patronize" component={PatronizePage} options={{
        title: 'Apadrinhar',
        headerLeft: () => (
          <Icon
            name='bars'
            size={24}
            onPress={() => navigation.toggleDrawer()}
            style={{ marginLeft: 20, color: '#434343' }}
          />
        ),
        headerRight: () => (
          <Icon
            name='search'
            size={24}
            style={{ marginRight: 20, color: '#434343' }}
          />
        ),
        headerStyle: {
          backgroundColor: '#ffd358',
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
      <Stack.Screen name="AssistPage" component={AssistPage} options={{
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
  )
}

export default StackRoutes

