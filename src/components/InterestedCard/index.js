import React, { useEffect, useState } from 'react'
import firebase from 'firebase'
import {Container, ImageContainer, InfoText, AcceptButton, DeleteButton} from './styles'
import Icon from 'react-native-vector-icons/FontAwesome5'
import { Text, Image, View } from 'react-native'

const InterestedCard = ({id, ...props}) => {

  const [avatarUrl, setAvatarUrl] = useState('')
  
  const getImageUrl = async () => {    
    const url = await firebase.storage().ref('usuarios/' + id).getDownloadURL();
    console.log(url)
    setAvatarUrl(url)
  }

  useEffect(() => {
    getImageUrl();
  }, [])

  return (
    <Container style={{ elevation: 5, borderColor: '#000' }}>
      <ImageContainer>
        <Image source={{uri: avatarUrl}}  />
      </ImageContainer>
      <InfoText>Usuario id: {id}</InfoText>
      <AcceptButton><Text>Aceitar</Text></AcceptButton>
      <DeleteButton><Text>Excluir</Text></DeleteButton>
    </Container>
  )
}

export default InterestedCard;