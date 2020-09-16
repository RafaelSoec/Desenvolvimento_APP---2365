import styled from 'styled-components';
import {View, Text} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export const Container = styled(View)`
  flex: 1;
  background-color: #fafafa;
  align-items: center;
  padding: 52px 52px 24px 52px;
`;
  
export const Alert = styled(Text)`
  margin-bottom: 52px;
  font-size: 70px;
  font-family: 'Courgette_400Regular';
  color: #88c9bf;
`;
  
export const Info = styled(Text)`
  font-size: 19px;
  font-family: 'Roboto_400Regular';
  color: #757575;
  text-align: center;
  margin-bottom: 16px;
`;

export const Button = styled(TouchableOpacity)`
  height: 40px;
  width: 232px;
  background-color: #88c9bf;
  align-items: center;
  justify-content: center;
  border-radius: 2px;
`;

export const ButtonText = styled(Text)`
  font-family: 'Roboto_400Regular';
  font-size: 16px;
`;