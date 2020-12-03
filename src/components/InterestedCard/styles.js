import React from 'react';
import styled from 'styled-components';
import { View, Image, TouchableOpacity, Text} from 'react-native';

export const Container = styled(View)`
    padding: 10px 20px;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
`;

export const InfoText = styled(Text)`
    font-size: 16px;
`;

export const Avatar = styled(Image)`
    height: 50px;
    width: 50px;
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
`

export const AcceptButton = styled(TouchableOpacity)`
    width: 70px;
    height: 40px;
    border-radius: 10px;
    background-color: green;
    justify-content: center;
    align-items: center;
    color: white;
`;