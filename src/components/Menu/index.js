import React, { useEffect, useState } from 'react'
import { Text, View, ScrollView, Image } from 'react-native'
import firebase from 'firebase'
import { Avatar, List } from 'react-native-paper'
// import {} from 'react-native-vector-icons/'
import {
  AvatarContainer,
  Accordion,
  ListItem,
  ExitButton,
  ExitButtonText,
  AvatarImage
} from './styles'
import { AuthService } from '../../services/AuthService'

const accordionText = { color: '#434343', fontFamily: 'Roboto-Medium' }
const itemText = { color: '#434343', fontFamily: 'Roboto-Regular' }

const Menu = ({ navigation, props }) => {
  const getImageUrl = () => {    
    firebase.storage().ref('usuarios/' + firebase.auth().currentUser.email).getDownloadURL().then(url => {setUrl(url)});
  }

  const [finalUrl, setUrl] = useState('https://source.unsplash.com/random?user');

  return (
    <View style={{ flex: 1 }}>
      <ScrollView style={{ paddingTop: 0, marginTop: 0 }}>
        <AvatarContainer>
          <AvatarImage source={{uri: finalUrl}}/>        
        </AvatarContainer>
        <Accordion
          left={(props) => <List.Icon {...props} icon='account' />}
          titleStyle={accordionText}
          title="Nome do usuario"
          style={{ backgroundColor: '#88c9bf' }}>
          <ListItem title="Meu perfil" onPress={() => {getImageUrl(); console.log(finalUrl)}}/>
          <ListItem title="Meus pets" onPress={() => navigation.navigate('MyPets')} />
          <ListItem title="Favoritos" />
          <ListItem title="Chat" />
        </Accordion>
        <Accordion
          left={(props) => <List.Icon {...props} icon='paw' />}
          titleStyle={accordionText}
          title="Atalhos"
          style={{ backgroundColor: '#fee29b' }}>
          <ListItem title="Cadastrar um pet" onPress={() => navigation.navigate('AnimalRegistration')} />
          <ListItem title="Adotar um pet" onPress={() => navigation.navigate('Adopt')} />
          <ListItem title="Ajudar um pet" onPress={() => navigation.navigate('Help')} />
          <ListItem title="Apadrinhar um pet" onPress={() => navigation.navigate('Patronize')} />
        </Accordion>
        <Accordion
          left={(props) => <List.Icon {...props} icon='information-outline' />}

          titleStyle={accordionText}
          title="Atalhos"
          style={{ backgroundColor: '#cfe9e5' }}>
          <ListItem title="Dicas" />
          <ListItem title="Eventos" />
          <ListItem title="Legislação" />
          <ListItem title="Histórias de adoção" />
        </Accordion>
        <Accordion
          left={(props) => <List.Icon {...props} icon='settings' />}
          titleStyle={accordionText}
          title="Configurações"
          style={{ backgroundColor: '#e6e7e8' }}>
          <ListItem title="Privacidade" />
        </Accordion>
      </ScrollView>
      <ExitButton onPress={() => {AuthService.logout(res => {
            console.log(res.message);
            if(res.result){
                this.props.navigation.navigate('IntroPage');
            }
        }); navigation.navigate('LoginPage')}}>
        <ExitButtonText>
          Sair
        </ExitButtonText>
      </ExitButton>
    </View>
  )
}

export default Menu
