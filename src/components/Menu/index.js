import React from 'react'
import { Text, View, ScrollView } from 'react-native'
import {Avatar, List} from 'react-native-paper'
// import {} from 'react-native-vector-icons/'
import {
  AvatarContainer, 
  Accordion, 
  ListItem,
  ExitButton,
  ExitButtonText
} from './styles'

const accordionText = {color: '#434343', fontFamily: 'Roboto_500Medium'}
const itemText = {color: '#434343', fontFamily: 'Roboto_400Regular'}

const Menu = ({navigation}) => {
  return (
    <View style={{flex: 1}}>
      <ScrollView style={{paddingTop: 0, marginTop: 0}}>
        <AvatarContainer>
          <Avatar.Image size={64} />
        </AvatarContainer>
        <Accordion
          left={(props) => <List.Icon {...props} icon='account' />}
          titleStyle={accordionText}
          title="Nome do usuario" 
          style={{backgroundColor: '#88c9bf' }}>
          <ListItem title="Meu perfil" />
          <ListItem title="Meus pets" onPress={() => navigation.navigate('MyPets')}/>
          <ListItem title="Favoritos" />
          <ListItem title="Chat" />
        </Accordion>
        <Accordion
          left={(props) => <List.Icon {...props} icon='paw' />}
          titleStyle={accordionText}
          title="Atalhos" 
          style={{backgroundColor: '#fee29b' }}>
          <ListItem title="Cadastrar um pet" onPress={() => navigation.navigate('AnimalRegistration')}/>
          <ListItem title="Adotar um pet" onPress={() => navigation.navigate('Adopt')} />
          <ListItem title="Ajudar um pet" onPress={() => navigation.navigate('Help')}/>
          <ListItem title="Apadrinhar um pet" />
        </Accordion>
        <Accordion
          left={(props) => <List.Icon {...props} icon='information-outline' />}

          titleStyle={accordionText}
          title="Atalhos" 
          style={{backgroundColor: '#cfe9e5' }}>
          <ListItem title="Dicas" />
          <ListItem title="Eventos" />
          <ListItem title="Legislação" />
          <ListItem title="Histórias de adoção" />
        </Accordion>
        <Accordion
          left={(props) => <List.Icon {...props} icon='settings' />}
          titleStyle={accordionText}
          title="Configurações" 
          style={{backgroundColor: '#e6e7e8' }}>
          <ListItem title="Privacidade" />
        </Accordion>
      </ScrollView>
      <ExitButton>
        <ExitButtonText>
          Sair
        </ExitButtonText>
      </ExitButton>
    </View>
  )
}

export default Menu
