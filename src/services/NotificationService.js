import * as Notifications from 'expo-notifications';
import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions';
import { UsuarioService } from './UsuarioService.js';

export class NotificationService {

    static setNotificationHandler = () => {
         Notifications.setNotificationHandler({
             handleNotification: async () => ({
                shouldShowAlert: true,
                shouldPlaySound: false,
                shouldSetBadge: false,
            })
        });
    }

    static  setNotificationChannelAsync = (email, callback) => {
        // Prepare the notification channel
        Notifications.setNotificationChannelAsync('new-emails', {
        name: 'E-mail notifications',
        importance: Notifications.AndroidImportance.HIGH,
        sound: 'email-sound.wav', // <- for Android 8.0+, see channelId property below
        });
    }

    //ContentNotificationDTO contentC
    static schedulePushNotification = async (contentC) => {
        await Notifications.scheduleNotificationAsync({
        content: contentC,
        trigger: { seconds: 2 },
        });
    }

  
    static registerForPushNotificationsAsync = async () => {
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
            token = await this.getExpoPushTokenAsync();
            console.log(token);
        } else {
            alert('Must use physical device for Push Notifications');
        }
    
        if(token){
            //Setar o token ao usuario
            UsuarioService.getCurrentUser().set({ token }, {merge: true});
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

    static configNotification = (email, callback) => {
        // Eg. schedule the notification
        Notifications.scheduleNotificationAsync({
        content: {
            title: "You've got mail! 📬",
            body: 'Open the notification to read them all',
            sound: 'email-sound.wav', // <- for Android below 8.0
        },
        trigger: {
            seconds: 2,
            channelId: 'new-emails', // <- for Android 8.0+, see definition above
        },
        });
    }
}