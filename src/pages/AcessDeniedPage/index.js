import React from 'react'
import {Container, Alert, Info, Button, ButtonText} from './styles';

const AccesDeniedPage = ({navigation}) => {
  return (
    <Container>
      <Alert>Ops!</Alert>
      <Info>
        Você não pode realizar esta ação sem{'\n'}
        possuir um cadastro.
      </Info>
      <Button onPress={() => navigation.navigate('CadastroPessoal')}>
        <ButtonText>
          FAZER CADASTRO
        </ButtonText>
      </Button>
      <Info style={{marginTop: 52}}>
        Já possui cadastro?
      </Info>
      <Button onPress={() => navigation.navigate('Login')}>
        <ButtonText>
          FAZER LOGIN
        </ButtonText>
      </Button>
    </Container>
  )
}

export default AccesDeniedPage
