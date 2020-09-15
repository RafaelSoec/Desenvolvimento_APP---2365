import { Text, View, TouchableOpacity, Image } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import styled from 'styled-components';


export const Container = styled(View)`
  align-items: center;
`;

export const Greeting = styled(Text)`
  font-family: 'Courgette_400Regular';
  font-size: 96px;
  color: #ffd358;  
  margin-bottom: 52px;
  margin-top: 56px;
`;

export const AboutText = styled(Text)`
  font-size: 22px;
  color: #757575;
  text-align: center;
  margin-bottom: 48px;
`;

export const Button = styled(RectButton)`

  display: flex;
  align-items: center;
  justify-content:center;
  border-radius: 2px;
  height: 40px;
  width: 232px;
  background-color: #ffd358;
  margin-bottom: 12px;
`;

export const ButtonText = styled(Text)`
  font-size: 16px;
  color: #434343;
`;

export const LoginLink = styled(TouchableOpacity)`
  margin-top: 44px;
  margin-bottom: 50px;
`;

export const LoginText = styled(Text)`
  font-size: 22px;
  color: #88cbf9;
`;

export const Logo = styled(Image)`
  height: 44px;
  width: 122px;
  margin-bottom: 32px;
`;


