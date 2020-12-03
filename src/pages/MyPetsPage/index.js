import React, { useEffect, useState } from 'react'
import firebase from 'firebase'
import { TouchableOpacity } from 'react-native'
import MyPetCard from '../../components/MyPetCard'
import {Container} from './styles'
import InfoPetPage from '../InfoPetPage'


const MyPetsPage = ({navigation}) => {

  const [myPets, setMyPets] = useState([]);

  const getPets = async () => {
    const email = firebase.auth().currentUser.email
    const data = await firebase.firestore().collection('animal').where('userEmail', '==', email).get()
    const list = data.docs.map(item => {return {data: item.data(), id: item.id}})
    setMyPets(list);
  }

  useEffect(() => {
    getPets()
  }, [])

  return (
    <Container >
      {myPets && myPets.map(pet => (
        <MyPetCard key={pet.id} id={pet.id} interested={'X'} 
        name={pet.data.nome} sections={pet.data.tipo} 
        onPress={() => {navigation.navigate('InfoPetPage', {pet}); console.log("AUAUAU")}} />
      ))}
    </Container>
  )
}

export default MyPetsPage
