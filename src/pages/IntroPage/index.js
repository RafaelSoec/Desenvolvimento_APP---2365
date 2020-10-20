import React from 'react'
import LogoMeau from '../../../assets/marca-meau.png';
import {  Text  } from 'react-native'
import { 
  Container, 
  Greeting, 
  AboutText, 
  Button,   
  ButtonText, 
  LoginLink, 
  LoginText, 
  Logo 
} from './styles'
import { AppLoading } from 'expo'

const IntroPage = ({navigation}) => {

  return (
    <Container>
      <Greeting>Olá!</Greeting>
      <AboutText>
        Bem vindo ao Meau!{`\n`}
        Aqui você pode adotar, doar e ajudar{`\n`}
        cães e gatos com facilidade.{`\n`}
        Qual o seu interesse?
      </AboutText>
      <Button onPress={() => navigation.toggleDrawer()}>
        <ButtonText>
          ADOTAR
        </ButtonText>
      </Button>
      <Button onPress={() => navigation.navigate('AcessDeniedPage')}>
        <ButtonText>
          AJUDAR
        </ButtonText>
      </Button>
      <Button onPress={() => navigation.navigate('AnimalRegistration')}>
        <ButtonText>
          CADASTRAR ANIMAL
        </ButtonText>
      </Button>
      <LoginLink onPress={() => navigation.navigate('Login')}>
        <LoginText>login</LoginText>
      </LoginLink>
      <Logo source={LogoMeau}>

      </Logo>
    </Container>
  )
}

export default IntroPage
