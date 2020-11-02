import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Routes from './src/routes';
import { AppLoading } from 'expo'
import { useFonts, Courgette_400Regular } from '@expo-google-fonts/courgette'
import { Roboto_400Regular, Roboto_500Medium } from '@expo-google-fonts/roboto'
import firebase from 'firebase'
// import 'bootstrap/dist/css/bootstrap.min.css';

export default function App() {
  let [fontsLoaded] = useFonts({
    Courgette_400Regular,
    Roboto_400Regular,
    Roboto_500Medium
  });

  if (!fontsLoaded) {
    return <AppLoading />
  }

  const app = firebase.initializeApp(firebaseConfig);
  firebase.firestore(app);

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


const firebaseConfig = {
  apiKey: "AIzaSyBjTTdAQWXbKw78BiH3qSSk51zM2OWtZL4",
  authDomain: "meau-61777.firebaseapp.com",
  databaseURL: "https://meau-61777.firebaseio.com",
  projectId: "meau-61777",
  storageBucket: "meau-61777.appspot.com",
  messagingSenderId: "641683666858",
  appId: "1:641683666858:web:6f49aadfced9d66a5f9dd3",
  measurementId: "G-8D172FBD4H"
};
