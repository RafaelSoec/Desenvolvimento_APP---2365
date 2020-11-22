import { FirebaseService } from './FirebaseService.js';

export class UsuarioService {
    static path = "usuario";


    static  getCurrentUser = async (data, callback) => {
        return await FirebaseService.getInstanceFirebase().firestore().collection('usuario')
        .doc(FirebaseService.getInstanceFirebase().auth().currentUser.uid);
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