import React from 'react'
import {
  Container,
  Alert,
  Info,
  NotificationAlert,
  MyPetsButton,
  MyPetsButtonText
} from './styles'
import {useFonts, Courgette_400Regular} from '@expo-google-fonts/courgette';
import {Roboto_400Regular} from '@expo-google-fonts/roboto';
import {AppLoading} from 'expo';

const AnimalRegistrationSuccessPage = () => {

  let [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Courgette_400Regular
  });

  if (!fontsLoaded) {
    return <AppLoading />
  }

  return (
    <Container>
      <Alert>Eba!</Alert>
      <Info>
        O cadastro do seu pet foi realizado{'\n'}
        com sucesso!
      </Info>
      <NotificationAlert>
        Certifique-se que permitiu o envio de
        notificações por push no campo
        privacidade no menu de configurações do
        aplicativo. Assim, poderemos te avisar
        assim que alguém interessado entrar
        em contato!
      </NotificationAlert>
      <MyPetsButton>
        <MyPetsButtonText>
          MEUS PETS
        </MyPetsButtonText>
      </MyPetsButton>
    </Container>
  )
}

export default AnimalRegistrationSuccessPage;
