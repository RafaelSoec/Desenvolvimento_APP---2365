import { Image, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { List } from 'react-native-paper';
import styled from 'styled-components';

export const AvatarContainer = styled(View)`
  height: 140px;
  width: 100%;
  background-color: #88c9bf;
  padding: 50px 0 20px 16px;
`;

export const AvatarImage = styled(Image)`
  width: 64px;
  height: 64px;
  background-color: red;
  border-radius: 50;
`;

export const Accordion = styled(List.Accordion)`
  background-color: #88c9bf;
  color: #434343;
`;

export const ListItem = styled(List.Item)`
  /* margin-left: 48px; */
  font-size: 21px;
  border-bottom-color: #434343;
  border-bottom-width: .5px; 
`;

export const ExitButton = styled(TouchableOpacity)`
  height: 48px;
  width: 100%;
  background-color: #88c9bf;
  justify-content: center;
  align-items: center;
`;

export const ExitButtonText = styled(Text)``;