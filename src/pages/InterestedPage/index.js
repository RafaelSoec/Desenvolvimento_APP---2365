import React, { useState, useEffect, useRef } from 'react';
import { View, Text } from 'react-native';
import { Button } from 'react-native-paper';
import InterestedCard from '../../components/InterestedCard/index.js';
import { Container } from './styles.js';


const InterestedPage = ({route, navigation}) => {



    return (
        <Container>
            <Text>Interessados em {pet.data.nome}: { () => pet.data.interessado.length()}</Text>
            <InterestedCard id={"algumId"}/>
        </Container>
    )
}

export default InterestedPage;