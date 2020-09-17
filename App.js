import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Routes from './src/routes';
import { AppLoading } from 'expo'
import { useFonts, Courgette_400Regular } from '@expo-google-fonts/courgette'
import { Roboto_400Regular, Roboto_500Medium } from '@expo-google-fonts/roboto'

export default function App() {
  let [fontsLoaded] = useFonts({
    Courgette_400Regular,
    Roboto_400Regular,
    Roboto_500Medium
  });

  if( !fontsLoaded ) {
    return <AppLoading/>
  }
  return (
    <Routes />
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
