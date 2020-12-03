import React from 'react';
import { View, Image} from 'react-native';
import styled from 'styled-components';


export const DataContainer = styled(View)`
    padding: 10px;
`;

export const ImageContainer = styled(View)`
    width: 100%;
    overflow: hidden;
`;

export const PetImage = styled(Image)`
  width: 100%;
  height: 183px;
`;