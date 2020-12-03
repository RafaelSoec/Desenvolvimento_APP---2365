import React from 'react';
import styled from 'styled-components';
import { View, Image, TouchableOpacity, Text} from 'react-native';

export const Container = styled(View)`
    padding: 10px 20px;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
`;

export const ImageContainer = styled(View)`
    width: 20%;
`;

export const InfoText = styled(Text)`
    font-size: 16px;
`;

export const AcceptButton = styled(TouchableOpacity)`
    width: 40px;
    height: 40px;
    border-radius: 10px;
    background-color: green;
`;

export const DeleteButton = styled(TouchableOpacity)`
    width: 40px;
    height: 40px;
    border-radius: 10px;
    background-color: red;
`;