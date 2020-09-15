import { View, Button, TextInput, Text } from "react-native";
import { RectButton } from "react-native-gesture-handler";
import styled from "styled-components";

export const Container = styled(View)`
    align-items: center;
    background-color: #fafafa;
    width: 100%;
    flex: 1;
`;

export const LoginInput = styled(TextInput)`
    padding: 11px;
    font-size: 14px;
    /* font-family: Roboto, 'Open Sans', 'Helvetica Neue', sans-serif; */
    color: #bdbdbd;
    width: 312px;
    /* border-bottom: 1px solid #e6e7e8; */
    :focus{
        outline: none;
    }
    ::placeholder{
        color: #bdbdbd;
    }
`;

export const SocialButton = styled(RectButton)`
    color: #ffffff;
    border-radius: 2px;
    width: 232px;
    height: 40px;
    margin-bottom: 8px;
    align-items: center;
    justify-content:center;
`;

export const ButtonText = styled(Text)`
    font-size: 16px;
    color: #f7f7f7;
    /* font-family: Roboto, 'Open Sans', 'Helvetica Neue', sans-serif; */
`;