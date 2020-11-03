import React, { useEffect, useState } from 'react'
import firebase from 'firebase'
import {Container, Header, PetName, PetImage, PetInfo, InfoText} from './styles'
import Icon from 'react-native-vector-icons/FontAwesome5'

const MyPetCard = ({name, color, sections, interested, id}) => {

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
        <Icon name='info-circle' size={24} color={'#434343'} />
      </Header>
      <PetImage source={{uri: avatarUrl}} />
      <PetInfo>
        <InfoText>{interested} NOVOS INTERESSADOS</InfoText>
        <InfoText>{sections}</InfoText>
      </PetInfo>
    </Container>
  )
}

export default MyPetCard;
