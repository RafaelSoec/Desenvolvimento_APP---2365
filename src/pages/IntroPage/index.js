import React from 'react'
import LogoMeau from '../../../assets/marca-meau.png';
import {  Text  } from 'react-native'
import { useFonts, Courgette_400Regular } from '@expo-google-fonts/courgette'
import { Roboto_400Regular } from '@expo-google-fonts/roboto'
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

  let [fontsLoaded] = useFonts({
    Courgette_400Regular,
    Roboto_400Regular
  });

  if( !fontsLoaded ) {
    return <AppLoading/>
  }

  return (
    <Container>
      <Greeting>Olá!</Greeting>
      <AboutText>
        Bem vindo ao Meau!{`\n`}
        Aqui você pode adotar, doar e ajudar{`\n`}
        cães e gatos com facilidade.{`\n`}
        Qual o seu interesse?
      </AboutText>
      <Button activeOpacity={1}>
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
