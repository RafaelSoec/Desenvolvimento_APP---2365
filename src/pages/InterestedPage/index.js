import { firestore } from 'firebase';
import React, { useState, useEffect, useRef } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { Button } from 'react-native-paper';
import InterestedCard from '../../components/InterestedCard/index.js';
import { Container } from './styles.js';


const InterestedPage = ({route, navigation}) => {

    console.log(route.params)
    
    const [interested, setInterested] = useState([]);

    const getInterested = async () => {
        const interestedRes = await firestore()
            .collection('animal')
            .doc(route.params.pet.id)
            .collection('interessados').get();
        const interessados = interestedRes.docs.map(int => {return {...int.data()}})
        console.log(interessados)
        setInterested([...interessados]);
    }

    useEffect(() => {
        getInterested();
    }, [])    

    return (
        <Container>
            <Text style={{fontSize: 16}}>Interessados em {route.params.pet.data.nome}: {interested.length}</Text>           
            {interested && interested.map(item => (
                <InterestedCard  navigation={navigation} email={item.email} name={item.nome} id={item.id} pet={route.params.pet} />
            ))}
        </Container>
    )
}

export default InterestedPage;