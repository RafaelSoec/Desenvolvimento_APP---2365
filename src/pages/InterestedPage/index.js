import React, { useState, useEffect, useRef } from 'react';
import { View, Text, Image } from 'react-native';
import { Button } from 'react-native-paper';
import InterestedCard from '../../components/InterestedCard/index.js';
import { Container } from './styles.js';


const InterestedPage = ({route, navigation}) => {
    pet = route.params.pet;

    return (
        <Container>
            <Text>Interessados em {pet.data.nome}: { () => pet.data.interessado.length()}</Text>
            <InterestedCard id={"algumId"}/>
        </Container>
    )
}

export default InterestedPage;