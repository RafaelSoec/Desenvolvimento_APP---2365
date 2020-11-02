import firebase from 'firebase';
import { FirebaseService } from './FirebaseService.js';


export class UsuarioService {
    static path = "usuario";

    static addUsuario = (data, callback) => {
        firebase.firestore()
            .collection(this.path).add(data)
            .then((doc) => {
                data["id"] = doc.id;
                console.log(`Usuario adicionado.`);
                callback(data);
            })
            .catch((error) => { console.log(`Falha ao adicionar Usuario: ${error}`); });
    };

    static updateUsuario = (data, callback) => {
        FirebaseService.findById(this.path, data["id"], dataRecover => {
            if (dataRecover) {
                firebase.firestore()
                    .collection(this.path)
                    .doc(idUsuario).update(data["id"])
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
                firebase.firestore()
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

        var ref = firebase.storage().ref().child(path + "/" + imageName);
        return ref.put(blob);
    }

}