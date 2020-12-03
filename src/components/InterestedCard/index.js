import React, { useEffect, useState } from 'react'
import firebase from 'firebase'
import {Container, Header, PetName, PetImage, PetInfo, InfoText} from './styles'
import Icon from 'react-native-vector-icons/FontAwesome5'

const InterestedCard = ({id, ...props}) => {

  const [avatarUrl, setAvatarUrl] = useState('')
  
  const getImageUrl = async () => {    
    const url = await firebase.storage().ref('users/' + id).getDownloadURL();
    console.log(url)
    setAvatarUrl(url)
  }

  useEffect(() => {
    getImageUrl();
  }, [])

  return (
    <Container style={{ elevation: 5, borderColor: '#000' }}>
      <Image source={{uri: avatarUrl}} />
    </Container>
  )
}

export default InterestedCard;