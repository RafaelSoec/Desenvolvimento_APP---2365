import { Text, ScrollView, View, TouchableOpacity, TextInput } from 'react-native';
import styled from 'styled-components';

export const IntroText = styled(Text)`
  margin: 16px 0;
  font-size: 16px;
  font-family: 'Roboto_400Regular';
  color: #757575;
`;

export const Options = styled(View)`
  flex-direction: row;  
  padding: 0 24px;
  width: 100%;
  justify-content: space-between;
`;



export const OptionButton = styled(TouchableOpacity)`
  background-color: #f1f2f2;
  height: 40px;
  width: 106px;
  align-items: center;
  justify-content: center;
`;

export const OptionText = styled(Text)`
  font-size: 16px;
  border-radius: 2px;
`;

export const Form = styled(View)`
  width: 100%;
  padding: 0 24px;
  margin-bottom: 20px;
`;

export const FormSectionTitle = styled(Text)`
  margin-top: 30px;
  font-family: 'Roboto_500Medium';
  font-size: 22px;
`;

export const Label = styled(Text)`
  margin-top: 20px;
  font-family: 'Roboto_400Regular';
  color: #f7a800;
  font-size: 16px;
`;

export const Input = styled(TextInput)`
  margin-top: 20px;
  font-family: 'Roboto_400Regular';
  font-size: 19px;
  border-bottom-color: #e6e7e8;
  border-bottom-width: 1px;
`;
  
export const Upload = styled(TouchableOpacity)`
  margin-top: 20px;
  height: 128px;
  width: 312px;
  background-color: #f1f2f2;
`;

export const ItemOptions = styled(View)`
  margin-top: 20px;
  flex-direction: row;
  align-items: center;
`;

export const SubItemOptions = styled(View)`
  margin-top: 20px;
  flex-direction: row;
  align-items: center;
  margin-left: 40px;
`;

export const Item = styled(Text)`
  font-size: 19px;
  font-family: 'Roboto_400Regular';
  margin-right: 10px;
`;

export const SubmitButton = styled(TouchableOpacity)`
  height: 40px;
  width: 232px;
  align-items: center;
  justify-content: center;
  background-color: #ffd348;
  border-radius: 2px;
`;

export const SubmitButtonText = styled(Text)`
  font-size: 18px;
  font-family: 'Roboto_400Regular';
`;