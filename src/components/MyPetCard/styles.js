import { View, Text, Image } from 'react-native';
import styled from 'styled-components';

export const Container = styled(View)`
  margin: 8px 0;
  /* border-radius: 100px; */
`;

export const Header = styled(View)`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: 32px;
  background-color: #cfe9e5;
  padding: 0 8px;
  border-radius: 5px;
`;

export const PetName = styled(Text)`
  font-family: 'Roboto_500Medium';
  font-size: 16px;
  color: #434343;
`

export const PetImage = styled(Image)`
  width: 100%;
  height: 183px;
`;

export const PetInfo = styled(View)`
  align-items: center;
  height: 49px;
  width: 100%;
  padding: 8px 0;
  background-color: #fff;
  border-bottom-right-radius: 5px; 
  border-bottom-left-radius: 5px; 
`;

export const InfoText = styled(Text)`
  font-size: 12px;
  font-family: 'Roboto_400Regular';
  color: #434343;
`;