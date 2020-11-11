import React, {useEffect, useState} from 'react'
import PetCard from '../../components/PetCard'
import MyPetCard from '../../components/MyPetCard'
import firebase from 'firebase'

import {Container} from './styles'

const AdoptPage = ({navigation}) => {

  const [petsList, setMyPets] = useState([]);
  const [currentUser, setCurrentUser] = useState('');

  const getPets = async () => {
    const email = firebase.auth().currentUser.email
    const data = await firebase.firestore().collection('animal').where('tipo', '==', 'ADOÇÃO').where('userEmail', '!=', email).get()
    const list = data.docs.map(item => {return {data: item.data(), id: item.id}})
    console.log(list)
    setCurrentUser(email)
    setMyPets(list);
  }

  useEffect(() => {
    getPets()
  }, [])

  return (
    <Container>
      {petsList && petsList.map(pet => (
        <PetCard key={pet.id} current={currentUser} id={pet.id} age={pet.data.idade} name={pet.data.nome} size={pet.data.tamanho} sex={pet.data.sexo} location={'Brasilia'}/>
      ))}
    </Container>
  )
}

export default AdoptPage
