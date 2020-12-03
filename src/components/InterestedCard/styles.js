import React from 'react';
import styled from 'styled-components';
import { View, Image, TouchableOpacity} from 'react-native';

export const Container = styled(View)`
    padding: 10px 20px;
`;

export const InterestedImage = styled(Image)`
    border-radius: 50%;
    width: 50px;
`;

export const InfoText = styled(Text)`

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