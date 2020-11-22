import React, { useState, useEffect, useRef } from 'react';
import LogoMeau from '../../../assets/marca-meau.png';
import {
  Container,
  Greeting,
  AboutText,
  Button,
  ButtonText,
  LoginLink,
  LoginText,
  Logo
} from './styles';
import * as Notifications from 'expo-notifications';
import { NotificationService } from '../../services/NotificationService.js';

const IntroPage = ({ navigation }) => {
  const [expoPushToken, setExpoPushToken] = useState('');
  const [notification, setNotification] = useState(false);
  const notificationListener = useRef();
  const responseListener = useRef();

  useEffect(() => {
    NotificationService.setNotificationHandler(true, true, false);
    registerForPushNotificationsAsync().then(token => setExpoPushToken(token));

    notificationListener.current = Notifications.addNotificationReceivedListener(notification => {
      setNotification(notification);
    });

    responseListener.current = Notifications.addNotificationResponseReceivedListener(response => {
      console.log(response);
    });

    return () => {
      Notifications.removeNotificationSubscription(notificationListener);
      Notifications.removeNotificationSubscription(responseListener);
    };
  }, []);

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
      <Button onPress={() => navigation.navigate('AssistPage')}>
        <ButtonText>
          AJUDAR
            </ButtonText>
      </Button>
      <Button onPress={() => navigation.navigate('AnimalRegistration')}>
        <ButtonText>
          CADASTRAR ANIMAL
            </ButtonText>
      </Button>
      <Button onPress={async () => { await sendNotification(); }}  >
        <ButtonText>
          NOTIFICACAO
            </ButtonText>
      </Button>
      {/* <LoginLink onPress={() => navigation.navigate('Login')}>
            <LoginText>login</LoginText>
          </LoginLink> */}
      <Logo source={LogoMeau}>

      </Logo>
    </Container>
  )
}

async function sendNotification() {
  let content = {
    to: 'ExponentPushToken[samOALEl0c9iasFohmVJt9]',
    sound: 'default',
    title: `Primeira Notificação`,
    body: `Testando primeira notificação`,
    data: { data: `dataC` },
  };

  await NotificationService.sendNotification(content);
}

async function registerForPushNotificationsAsync() {
  let token = await NotificationService.registerForPushNotificationsAsync();

  return token;
}

export default IntroPage
