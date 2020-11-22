import { Text, TouchableOpacity, View } from 'react-native';
import styled from 'styled-components';

export const Container = styled(View)`
  flex: 1;
  background-color: #fafafa;
  align-items: center;
  padding: 52px 52px 24px 52px;
`;
  
export const Alert = styled(Text)`
  margin-bottom: 52px;
  font-size: 70px;
  font-family: 'Courgette-Regular';
  color: #ffd348;
`;
  
export const Info = styled(Text)`
  font-size: 19px;
  font-family: 'Roboto-Regular';
  color: #757575;
  text-align: center;
  margin-bottom: 20px;
`;
  
export const NotificationAlert = styled(Text)`
  font-size: 16px;
  font-family: 'Roboto-Regular';
  color: #757575;
  text-align: center;
  margin-bottom: 20px;
`;

export const MyPetsButton = styled(TouchableOpacity)`
  height: 40px;
  width: 232px;
  background-color: #ffd358;
  align-items: center;
  justify-content: center;
  border-radius: 2px;
  margin-top: auto;
`;

export const MyPetsButtonText = styled(Text)`
  font-family: 'Roboto-Regular';
  font-size: 14px;
`;