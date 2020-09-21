import React from 'react'
import { Text } from 'react-native'
import MyPetCard from '../../components/MyPetCard'
import {Container} from './styles'

const MyPetsPage = () => {
  return (
    <Container >
      <MyPetCard interested={2} name='Bob' sections={['APADRINHAMENTO', 'AJUDA']}/>
      <MyPetCard interested={2} name='Josue' sections={['ADOCAO', 'AJUDA']}/>
      <MyPetCard interested={2} name='Bob' sections={['AJUDA']}/>
      <MyPetCard interested={2} name='Bob' sections={['APADRINHAMENTO', 'AJUDA']}/>
      <MyPetCard interested={2} name='Josue' sections={['ADOCAO', 'AJUDA']}/>
      <MyPetCard interested={2} name='Bob' sections={['AJUDA']}/>
    </Container>
  )
}

export default MyPetsPage
