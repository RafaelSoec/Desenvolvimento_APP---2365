import React from 'react';
import { View, Image, Text, ScrollView, Button} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import styled from 'styled-components';


export const ImageContainer = styled(View)`
    width: 100%;
    overflow: hidden;
`;

export const PetImage = styled(Image)`
  width: 100%;
  height: 183px;
`;

export const DataContainer = styled(ScrollView)`
    padding: 19px 16px;
`;

export const DataStrip = styled(View)`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    flex-wrap: wrap;
    margin-top: 16px;
`;

export const Data = styled(View)`
    margin-right: auto;
`;

export const DataHeader = styled(Text)`
    font-size: 16px;
    color: #589b9b;
    margin-bottom: 8px;
    text-transform: uppercase;
`;

export const DataText = styled(Text)`
    font-size: 16px;
    color: #757575;
    text-transform: capitalize;
`;

export const StyledButton = styled(TouchableOpacity)`
    width: 150px;
    background-color: #88c9bf;
    height:  40px;
    color: #757575;
    border-radius: 5px;
    margin: 16px 0px;
    align-items: center;
    justify-content: center;
`;

export const ButtonText = styled(Text)`
    
`;