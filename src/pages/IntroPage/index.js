import React, { useState, useEffect, useRef } from 'react';
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
import { AppLoading } from 'expo';
import Constants from 'expo-constants';
import * as Notifications from 'expo-notifications';
import * as Permissions from 'expo-permissions';

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
});

const IntroPage = ({navigation}) => {
  const [expoPushToken, setExpoPushToken] = useState('');
  const [notification, setNotification] = useState(false);
  const notificationListener = useRef();
  const responseListener = useRef();

  useEffect(() => {
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
      <Button onPress={async () => { await schedulePushNotification(); }}  >
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

async function schedulePushNotification() {
  await Notifications.scheduleNotificationAsync({
    content: {
      title: "You've got mail! 📬",
      body: 'Here is the notification body',
      data: { data: 'goes here' },
    },
    trigger: { seconds: 2 },
  });
}

async function registerForPushNotificationsAsync() {
  let token;
  if (Constants.isDevice) {
    const { status: existingStatus } = await Permissions.getAsync(Permissions.NOTIFICATIONS);
    let finalStatus = existingStatus;
    if (existingStatus !== 'granted') {
      const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);
      finalStatus = status;
    }
    if (finalStatus !== 'granted') {
      alert('Failed to get push token for push notification!');
      return;
    }
    token = (await Notifications.getExpoPushTokenAsync()).data;
    console.log(token);
  } else {
    alert('Must use physical device for Push Notifications');
  }

  if (Platform.OS === 'android') {
    Notifications.setNotificationChannelAsync('default', {
      name: 'default',
      importance: Notifications.AndroidImportance.MAX,
      vibrationPattern: [0, 250, 250, 250],
      lightColor: '#FF231F7C',
    });
  }

  return token;
}

export default IntroPage
