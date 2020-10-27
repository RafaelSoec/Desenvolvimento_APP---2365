import React from 'react'
import {Container, Header, PetName, PetImage, PetInfo, InfoText} from './styles'
import Icon from 'react-native-vector-icons/FontAwesome5'

const MyPetCard = ({name, color, sections, interested}) => {
  return (
    <Container style={{ elevation: 5, borderColor: '#000' }}>
      <Header>
        <PetName>
          {name}
        </PetName>
        <Icon name='info-circle' size={24} color={'#434343'} />
      </Header>
      <PetImage source={{uri: 'https://source.unsplash.com/random?dog,cat'}} />
      <PetInfo>
        <InfoText>{interested} NOVOS INTERESSADOS</InfoText>
        <InfoText>{sections.map(section => section + ' | ')}</InfoText>
      </PetInfo>
    </Container>
  )
}

export default MyPetCard;
