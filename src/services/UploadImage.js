import ImagePicker from 'react-native-image-picker';
import firebase from 'firebase';
import RNFetchBlob from 'react-native-fetch-blob';

const Blob = RNFetchBlob.polyfill.Blob
const fs = RNFetchBlob.fs
window.XMLHttpRequest = RNFetchBlob.polyfill.XMLHttpRequest
window.Blob = Blob

const photoOptions = {
    title: 'Inserir foto',
    takePhotoButtonTitle: 'Tirar uma nova foto',
    chooseFromLibraryButtonTitle: 'Escolher foto da galeria',
};

export function prepareUpload() {

    ImagePicker.showImagePicker(photoOptions, (response) => {
        if (response.didCancel) {
            console.log('cancelou upload da imagem');
        } else if (response.error) {
            console.log('ImagePicker Error: ', response.error);
        } else {
            this.uploadProfilePic(response.path, response.fileName);
        }
    })
}

export function uploadProfilePic(uri, imageName, mime = 'image/jpeg') {

    return new Promise((resolve, reject) => {
        const uploadUri = Platform.OS === 'ios' ? uri.replace('file//', '') : uri
        let uploadBlob = null
        const imageRef = firebase.storage().ref('user/images/profile/').child(imageName)
        fs.readFile(uploadUri, 'base64')
            .then((data) => {
                return Blob.build(data, { type: `${mime};BASE64` })
            })
            .then((blob) => {
                uploadBlob = blob
                return imageRef.put(blob, { contentType: mime })
            })
            .then(() => {
                uploadBlob.close()
                return imageRef.getDownloadURL()
            })
            .then((url) => {
                firebase.database().ref('user/images/profile/').push({
                    profileUrl: url
                });
                this.setState({ avatarSource: url });
                this._updateScreen();
                resolve(url)
            })
            .catch((erro) => {
                reject(erro)
            })
    })

}