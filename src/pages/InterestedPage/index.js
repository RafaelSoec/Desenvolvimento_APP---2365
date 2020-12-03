import React, { useState, useEffect, useRef } from 'react';
import { View, Text } from 'react-native';
import { Button } from 'react-native-paper';
import { Container } from './styles.js';


const InterestedPage = ({route, navigation}) => {
    console.log(route.params)
    console.log(route.params.pet)
    pet = route.params.pet

    return (
        <Container>
            <Text>Interessados em {pet.data.nome}: { () => pet.data.interessado.length()}</Text>
        </Container>
    )
}

export default InterestedPage;