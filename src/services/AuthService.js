import firebase from 'firebase';

export class AuthService {

    static  login = (email, password, callback) => {
        const auth = firebase.auth();
        auth.signInWithEmailAndPassword(email, password)
        .then((res) => {
            console.log(`Login realizado com sucesso.`);
            callback({result: res, message: `Login realizado com sucesso.`});
        })
        .catch((error) => {
            console.log(error['message']); 
            callback({result: null, message: error['message']});
        });
    };

    static  createUser = (email, password, callback) => {  
        firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((res) => {
            console.log(`Usuario criado com sucesso.`);
            callback({result: res,  message: `Usuario criado com sucesso.`});
        })
        .catch((error) => {
            callback({result: false, message: error['message']});
            console.log(error['message']); 
        });
    };

    static logout = () => {
        const auth = firebase.auth();
        auth.signOut()
        .then((res) => {
            console.log(`Logout realizado com sucesso.`);
            callback({result: res,  message: `Logout realizado com sucesso.`});
        })
        .catch((error) => {
            callback({result: false, message: error['message']});
            console.log(error['message']); 
        });
    };

}