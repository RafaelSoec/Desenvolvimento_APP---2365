import React from 'react'
import {Container, Header, PetName, PetImage, PetInfo, AboutPet, Location, AboutItem} from './styles'
import Icon from 'react-native-vector-icons/FontAwesome5'
import { Image, Text, View } from 'react-native'

const PetCard = ({name, age, sex, location, size}) => {

  const defineSize = (sexo) => {
    if(sexo == 'M'){
      return 'MÉDIO';
    }
    else if(sexo == 'G'){
      return 'GRANDE';
    }
    else{
      return 'PEQUENO';
    }
  }

  const defineSex = (sexo) => {
    if(sexo == 'M'){
      return 'MACHO';
    }else{
      return 'FÊMEA';
    }
  }

  const defineYear = (idade, sexo) => {
    if(idade < 2){
      return 'FILHOTE';
    }else if(idade >= 2 && idade < 4){
      return ((sexo == 'M') ? 'ADULTO' : 'ADULTA');
    }else{
      return ((sexo == 'M') ? 'IDOSO' : 'IDOSA');
    }
  }

  return (
    <Container style={{ elevation: 5, borderColor: '#000' }}>
      <Header>
        <PetName>
          {name}
        </PetName>
        <Icon name='heart' size={24} color={'#434343'} />
      </Header>
      <PetImage source={{uri: 'https://source.unsplash.com/random?dog,cat'}} />
      <PetInfo>
        <AboutPet>
          <AboutItem>{defineSex(sex)}</AboutItem>
          <AboutItem>{defineYear(age, sex)}</AboutItem>
          <AboutItem>{defineSize(size)}</AboutItem>
        </AboutPet>
        <Location>{location}</Location>
      </PetInfo>
    </Container>
  )
}

export default PetCard;