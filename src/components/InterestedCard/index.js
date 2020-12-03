import React, { useEffect, useState } from 'react'
import firebase from 'firebase'
import {Container, InterestedImage, InfoText} from './styles'
import Icon from 'react-native-vector-icons/FontAwesome5'

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
      <InterestedImage source={{uri: avatarUrl}} />
      <InfoText></InfoText>
      <AcceptButton>Aceitar</AcceptButton>
      <DeleteButton>Excluir</DeleteButton>
    </Container>
  )
}

export default InterestedCard;