import firebase from 'firebase';
import { FirebaseService } from './FirebaseService.js';


export class AnimalService {
    static path = "animal";

    static  addAnimal = (data, callback) => {
        firebase.firestore()
        .collection(this.path).add(data)
        .then((doc) => {
            data["id"] = doc.id;
            console.log(`Animal adicionado.`);
            callback(data);
        })
        .catch((error) => {console.log(`Falha ao adicionar animal: ${error}`); });
    };

    static  updateAnimal = (data, callback) => {  
        FirebaseService.findById(this.path, data["id"], dataRecover => {
            if(dataRecover){
                firebase.firestore()
                .collection(this.path)
                .doc(idAnimal).update(data["id"])
                .then((doc) => {
                    console.log(`Animal atualizado.`);
                    callback(doc.data());
                })
                .catch((error) => {console.log(`Falha ao atualizar animal: ${error}`); });
            }else{
                console.log(`Nao foi possivel recuperar o animal.`);
                callback(null);
            }
        });
    };

    static deleteAnimal = (idAnimal) => {
        FirebaseService.findById(this.path, idAnimal, dataRecover => {
            if(dataRecover){
                firebase.firestore()
                .collection(this.path)
                .doc(idAnimal).delete()
                .then((doc) => {
                    console.log("Animal removido.");
                })
                .catch((error) => {console.log(`Falha ao remover animal: ${error}`); });
            }else{
                console.log(`Nao foi possivel recuperar o animal.`);
            }
        });
    };

}