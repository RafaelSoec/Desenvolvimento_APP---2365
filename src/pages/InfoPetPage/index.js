import React, { useState, useEffect, useRef } from 'react';
import { Image, Text, View} from 'react-native';
import { Button } from 'react-native-paper';
import { ImageContainer, DataContainer, PetImage } from './styles.js';
import firebase from 'firebase';


const InfoPetPage = ({route, navigation}) => {

    console.log(route.params.pet)
    pet = route.params.pet
    console.log(pet.id)
    const [avatarUrl, setAvatarUrl] = useState(' ')

    const getImageUrl = async () => {    
        const url = await firebase.storage().ref('animals/' + pet.id).getDownloadURL();
        console.log(url)
        setAvatarUrl(url)
      }

    useEffect( () => {
        navigation.setOptions({title: pet.data.nome})
        getImageUrl();
    }, [])

    return (
        <>
            <ImageContainer>
                <PetImage source={{uri: avatarUrl}} />
            </ImageContainer>
            <DataContainer>
                <Button onPress={() => navigation.navigate('InterestedPage', {pet})} >Ver Interessados</Button>
            </DataContainer>
        </>
    )
}

export default InfoPetPage