import React from 'react'
import {Container, Header, PetName, PetImage, PetInfo, AboutPet, Location, AboutItem} from './styles'
import Icon from 'react-native-vector-icons/FontAwesome5'
import { Image, Text, View } from 'react-native'

const PetCard = ({name, about, location}) => {
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
          {about.map(item => (            
            <AboutItem key={item}>{item}</AboutItem>           
          ))}    
        </AboutPet>
        <Location>{location}</Location>
      </PetInfo>
    </Container>
  )
}

export default PetCard;