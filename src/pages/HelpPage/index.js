import React from 'react'
import PetCard from '../../components/PetCard'
import {Container} from './styles'

const HelpPage = () => {
  return (
    <Container>
      <PetCard location='Samambaia - Brasília' name='Bob' about={['MACHO', 'ADULTO', 'MEDIO']} />
      <PetCard location='Samambaia - Brasília' name='Bob' about={['MACHO', 'ADULTO', 'MEDIO']} />
      <PetCard location='Samambaia - Brasília' name='Bob' about={['MACHO', 'ADULTO', 'MEDIO']} />
      <PetCard location='Samambaia - Brasília' name='Bob' about={['MACHO', 'ADULTO', 'MEDIO']} />
    </Container>
  )
}

export default HelpPage
