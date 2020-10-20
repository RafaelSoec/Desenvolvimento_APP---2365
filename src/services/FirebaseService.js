import firebase from 'firebase';

export class FirebaseService {

    //Realtime example
    static getDataList = (nodePath, callback, size = 10) => {
        let query = firebase.database().ref(nodePath).limitToLast(size);
        query.on('value', dataSnapshot => {
            let items = [];
            dataSnapshot.forEach(childSnapshot => {
                let item = childSnapshot.val();
                item['key'] = childSnapshot.key;
                items.push(item);
            });
            callback(items);
        });

        return query;
    };

    //firestore example
    static getDataFirestore = (nodePath, callback) => {
        let query = firebase.firestore().collection(nodePath)
        .get().then((querySnapshot) => {
            let items = [];
            querySnapshot.forEach((doc) => {
                items.push({id: doc.id, data: doc.data()});
            });
            callback(items);
        });

        return query;
    };

    static getGoogleProvider = () => {
        return new firebase.auth.GoogleAuthProvider();
    };

    static getFacebookProvider = () => {
        return new firebase.auth.FacebookAuthProvider();
    };
}