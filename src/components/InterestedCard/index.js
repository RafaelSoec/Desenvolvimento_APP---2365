import React, { useEffect, useState } from 'react'
import firebase, { firestore } from 'firebase'
import {Container, Avatar, InfoText, AcceptButton, DeleteButton} from './styles'
import Icon from 'react-native-vector-icons/FontAwesome5'
import { Text, Image, View } from 'react-native'

const InterestedCard = ({id, name, email, pet, navigation}) => {

  const [avatarUrl, setAvatarUrl] = useState('')
  
  const getImageUrl = async () => {    
    const url = await firebase.storage().ref('usuarios/' + email).getDownloadURL();
    setAvatarUrl(url)
  }

  const transferPet = async () => {
    await firestore().collection('animal').doc(pet.id).update({userId: id, userEmail: email, tipo: 'ADOTADO'});
    navigation.navigate('IntroPage')
  }

  useEffect(() => {
    getImageUrl();
  }, [])

  return (
    <Container>      
      <Avatar source={{uri: avatarUrl}}  />
      <InfoText>{name}</InfoText>
      <AcceptButton onPress={transferPet}><Text style={{color: 'white'}}>Aceitar</Text></AcceptButton>
    </Container>
  )
}

export default InterestedCard;