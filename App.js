import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native';
import Routes from './src/routes';
import { AppLoading } from 'expo'
import * as Font from 'expo-font';
import firebase from 'firebase';
import { Enviromment } from './src/enviromment.js';

<<<<<<< HEAD
export default class App extends Component {
  customFonts = {
    'Roboto-Medium': require('./assets/fonts/Roboto/Roboto-Medium.ttf'),
    'Roboto-Regular': require('./assets/fonts/Roboto/Roboto-Regular.ttf'),
    'Courgette-Regular': require('./assets/fonts/Courgette/Courgette-Regular.ttf'),
   };

  styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

  constructor(props){
    super(props);
    this.state = { fontsLoaded: false };
  }

  async componentDidMount(){
    this._loadFontsAsync();
    const app = firebase.initializeApp(Enviromment.getConfigFirebase());
    firebase.firestore(app);
  }

  async _loadFontsAsync() {
    await Font.loadAsync(this.customFonts);
    this.setState({ fontsLoaded: true });
  }

  render() {
    // para disabilitar os warnings
    // console.disableYellowBox = ['Setting a timer'];

    if (!this.state.fontsLoaded) {
      return <AppLoading />
    }

    return (
      <Routes />
    )
  }
}
=======
export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hello Test</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
>>>>>>> master
