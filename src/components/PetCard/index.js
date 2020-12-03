import React, {useState, useEffect} from 'react'
import {Container, Header, PetName, PetImage, PetInfo, AboutPet, Location, AboutItem} from './styles'
import Icon from 'react-native-vector-icons/FontAwesome5'
import firebase from 'firebase';
import { Image, Text, View } from 'react-native';
import { UsuarioService } from '../../services/UsuarioService.js';
import { NotificationService } from '../../services/NotificationService.js';
import UsuarioDTO from '../../dto/UsuarioDTO';
import { AnimalService } from '../../services/AnimalService';

const PetCard = ({owner, name, age, sex, location, size, id, current}) => {

  const [avatarUrl, setAvatarUrl] = useState('https://source.unsplash.com/random?dog,cat')
  
  const getImageUrl = async () => {    
    const url = await firebase.storage().ref('animals/' + id).getDownloadURL();
    setAvatarUrl(url)
  }

  useEffect(() => {
    getImageUrl();
    
  }, [])

  const selectAnimal = async () =>{
    let usuario = new UsuarioDTO();
    if(owner){
      const userRes = await firebase.firestore().collection('usuario').where('email', '==', owner).get()
      const user = userRes.docs.pop().data();
      const currentRes = await firebase.firestore().collection('usuario').where('email', '==', current).get()
      const currentUser = currentRes.docs.map(usuario => {
        return {id: usuario.id, nome: usuario.data().nome, email: usuario.data().email} 
      })

      await firebase.firestore().collection('animal')
        .doc(id)
        .collection('interessados')
        .add(currentUser[0])
      
      let content = {
        to: user.token,
        sound: 'default',
        title: `Aviso de adoção`,
        body: `Alguem tem interesse no(a) ${name}!!`,
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