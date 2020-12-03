import { FirebaseService } from './FirebaseService.js';


export class AnimalService {
    static path = "animal";

    static  addAnimal = (data, callback) => {
        FirebaseService.getInstanceFirebase().firestore()
        .collection(this.path).add(data)
        .then((doc) => {
            data["id"] = doc.id;
            console.log(`Animal adicionado.`);
            callback(data);
        })
        .catch((error) => {console.log(`Falha ao adicionar animal: ${error}`); });
    };

    static  updateAnimal = (data, callback) => {  
        let idAnimal = data["id"];
        FirebaseService.findById(this.path, idAnimal, dataRecover => {
            if(dataRecover){
                FirebaseService.getInstanceFirebase().firestore()
                .collection(this.path)
                .doc(idAnimal).update(data)
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
                FirebaseService.getInstanceFirebase().firestore()
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