import * as Notifications from 'expo-notifications';
import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions';
import { UsuarioService } from './UsuarioService.js';

export class NotificationService {

    static setNotificationHandler = (shouldShowAlert, shouldPlaySound, shouldSetBadge) => {
        Notifications.setNotificationHandler({
            handleNotification: async () => ({
                shouldShowAlert: shouldShowAlert,
                shouldPlaySound: shouldPlaySound,
                shouldSetBadge: shouldSetBadge,
            })
        });
    }

    static setNotificationChannelAsync = ( ) => {
        // Prepare the notification channel
        Notifications.setNotificationChannelAsync('new-emails', {
            name: 'E-mail notifications',
            importance: Notifications.AndroidImportance.HIGH,
            sound: 'email-sound.wav', // <- for Android 8.0+, see channelId property below
        });
    }

    //ContentNotificationDTO contentC
    static sendNotification = async (contentC) => {
        console.log(contentC)
        await Notifications.scheduleNotificationAsync({
            content: contentC,
            trigger: { seconds: 2 },
        });
    }


    static registerForPushNotificationsAsync = async () => {
        let token;
        // if (Constants.isDevice) {
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
            console.log('token', token);

            if (token) {
                //Setar o token ao usuario
                UsuarioService.setAttrCurrentUser({token: token});
            }
        // } else {
        //     alert('Must use physical device for Push Notifications');
        // }

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


    // static registerForPushNotificationsAsync = (userId) => {
    //     let experienceId = undefined;
    //     if (!Constants.manifest) {
    //         // Absence of the manifest means we're in bare workflow
    //         experienceId = '@username/example';
    //     }
    //     const expoPushToken = await Notifications.getExpoPushTokenAsync({
    //         experienceId,
    //     });
    //     await fetch('https://example.com/', {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json',
    //         },
    //         body: JSON.stringify({
    //             userId,
    //             expoPushToken,
    //         }),
    //     });
    // }
}