import React, {useState, useEffect} from 'react'
import {Container, Header, PetName, PetImage, PetInfo, AboutPet, Location, AboutItem} from './styles'
import Icon from 'react-native-vector-icons/FontAwesome5'
import firebase from 'firebase';
import { Image, Text, View } from 'react-native';
import { UsuarioService } from '../../services/UsuarioService.js';
import { NotificationService } from '../../services/NotificationService.js';
import UsuarioDTO from '../../dto/UsuarioDTO';

const PetCard = ({owner, name, age, sex, location, size, id}) => {

  const [avatarUrl, setAvatarUrl] = useState('https://source.unsplash.com/random?dog,cat')
  
  const getImageUrl = async () => {    
    const url = await firebase.storage().ref('animals/' + id).getDownloadURL();
    console.log(url)
    setAvatarUrl(url)
  }

  useEffect(() => {
    getImageUrl();
  }, [])

  const selectAnimal =  () =>{
    let usuario = new UsuarioDTO();
    if(owner){
      usuario = owner;
      
      let content = {
        to: usuario.token,
        sound: 'default',
        title: `Aviso de adoção`,
        body: `Alguem tem interesse no seu pet!!`,
        data: { data: `dataC` },
      };
    
      NotificationService.sendNotification(content);
      }
  }
  
  return (
    <Container style={{ elevation: 5, borderColor: '#000' }}>
      <Header>
        <PetName>
          {name}
        </PetName>
        <Icon name='heart' size={24} color={'#434343'} onPress={() => selectAnimal()} />
      </Header>
      <PetImage source={{uri: avatarUrl}}  onPress={() => selectAnimal()}/>
      <PetInfo>
        <AboutPet>
          <AboutItem>{sex}</AboutItem>
          <AboutItem>{age}</AboutItem>
          <AboutItem>{size}</AboutItem>
        </AboutPet>
        <Location>{location}</Location>
      </PetInfo>
    </Container>
  )
}

export default PetCard;