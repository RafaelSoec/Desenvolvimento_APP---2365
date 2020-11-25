import { FirebaseService } from './FirebaseService.js';

export class AuthService {

    static  login = (email, password, callback) => {
        console.log('ei');
        const auth = FirebaseService.getInstanceFirebase().auth();
        auth.signInWithEmailAndPassword(email, password)
        .then((res) => {
            console.log(`Login realizado com sucesso.`);
            callback({result: res, message: `Login realizado com sucesso.`});
        })
        .catch((error) => {
            console.log('ei', error['message']); 
            alert(error['message']); 
            callback({result: null, message: error['message']});
        });
    };

    static  createUser = (email, password, callback) => {  
        FirebaseService.getInstanceFirebase().auth().createUserWithEmailAndPassword(email, password)
        .then((res) => {
            console.log(`Usuario criado com sucesso.`);
            callback({result: res,  message: `Usuario criado com sucesso.`});
        })
        .catch((error) => {
            callback({result: false, message: error['message']});
            alert(error['message']); 
        });
    };

    static logout = (callback) => {
        const auth = FirebaseService.getInstanceFirebase().auth();
        auth.signOut()
        .then((res) => {
            console.log(`Logout realizado com sucesso.`);
            callback({result: res,  message: `Logout realizado com sucesso.`});
        })
        .catch((error) => {
            callback({result: false, message: error['message']});
            alert(error['message']); 
        });
    };

}