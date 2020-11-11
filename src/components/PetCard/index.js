import React, {useState, useEffect} from 'react'
import {Container, Header, PetName, PetImage, PetInfo, AboutPet, Location, AboutItem} from './styles'
import Icon from 'react-native-vector-icons/FontAwesome5'
import firebase from 'firebase'
import { Image, Text, View } from 'react-native'

const PetCard = ({name, age, sex, location, size, id}) => {

  const [avatarUrl, setAvatarUrl] = useState('https://source.unsplash.com/random?dog,cat')
  
  const getImageUrl = async () => {    
    const url = await firebase.storage().ref('animals/' + id).getDownloadURL();
    console.log(url)
    setAvatarUrl(url)
  }

  useEffect(() => {
    getImageUrl();
  }, [])

  return (
    <Container style={{ elevation: 5, borderColor: '#000' }}>
      <Header>
        <PetName>
          {name}
        </PetName>
        <Icon name='heart' size={24} color={'#434343'} />
      </Header>
      <PetImage source={{uri: avatarUrl}} />
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