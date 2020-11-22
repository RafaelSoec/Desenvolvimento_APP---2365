import { FirebaseService } from './FirebaseService.js';

export class UsuarioService {
    static path = "usuario";


    static  getCurrentUser = async (callback) => {
        let emailCurrentUser = FirebaseService.getInstanceFirebase().auth().currentUser.email;

        return await FirebaseService.getInstanceFirebase().firestore().collection('usuario')
        .where("email", "==", emailCurrentUser).get()
        .then(function(querySnapshot) {
            querySnapshot.forEach(function(doc) {
                let data = doc.data();
                data["id"] = doc.id;
                console.log(data);
                callback(data);
            });
        })
        .catch((error) => { console.log(`Falha ao recuperar Usuario: ${error}`); });
    };

    static  setAttrCurrentUser = async (obj) => {
        this.getCurrentUser(user => {
            FirebaseService.getInstanceFirebase()
            .firestore().collection('usuario').doc(user["id"])
            .set(obj, {merge: true})
            .then(function() {
                console.log("Atributo adicionado!");
            })
            .catch((error) => { console.log(`Falha ao setar atributo para o Usuario: ${error}`); });
        });
    }
    
    static  addUsuario = async (data, callback) => {
        if(data != null){
            FirebaseService.getInstanceFirebase().firestore()
            .collection(this.path).add(data)
            .then((doc) => {
                data["id"] = doc.id;
                console.log(`Usuario adicionado.`);
                callback(data);
            })
            .catch((error) => { console.log(`Falha ao adicionar Usuario: ${error}`); });
        }
    };

    static  addUsuario = async (data, callback) => {
        if(data != null){
            FirebaseService.getInstanceFirebase().firestore()
            .collection(this.path).add(data)
            .then((doc) => {
                data["id"] = doc.id;
                console.log(`Usuario adicionado.`);
                callback(data);
            })
            .catch((error) => { console.log(`Falha ao adicionar Usuario: ${error}`); });
        }
    };

    static updateUsuario = (data, callback) => {
        FirebaseService.findById(this.path, data["id"], dataRecover => {
            if (dataRecover) {
                FirebaseService.getInstanceFirebase().firestore()
                    .collection(this.path)
                    .doc(idUsuario).update(data)
                    .then((doc) => {
                        console.log(`Usuario atualizado.`);
                        callback(doc.data());
                    })
                    .catch((error) => { console.log(`Falha ao atualizar Usuario: ${error}`); });
            } else {
                console.log(`Nao foi possivel recuperar o Usuario.`);
                callback(null);
            }
        });
    };

    static deleteUsuario = (idUsuario) => {
        FirebaseService.findById(this.path, idUsuario, dataRecover => {
            if (dataRecover) {
                FirebaseService.getInstanceFirebase().firestore()
                    .collection(this.path)
                    .doc(idUsuario).delete()
                    .then((doc) => {
                        console.log("Usuario removido.");
                    })
                    .catch((error) => { console.log(`Falha ao remover Usuario: ${error}`); });
            } else {
                console.log(`Nao foi possivel recuperar o Usuario.`);
            }
        });
    };

    static async uploadPhoto(uri, imageName) {
        const response = await fetch(uri).then(console.log("Fetch de imagem com sucesso"));
        const blob = await response.blob();

        var ref = FirebaseService.getInstanceFirebase().storage().ref().child(path + "/" + imageName);
        return ref.put(blob);
    }

}