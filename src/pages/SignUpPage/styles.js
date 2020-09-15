import { View, Button, TextInput, Text } from "react-native";
import { RectButton } from "react-native-gesture-handler";
import styled from "styled-components";

export const Container = styled(View)`
    align-items: center;
    background-color: #fafafa;
    padding: 16px;
    width: 100%;
    flex: 1;
`;

export const SingUpInput = styled(TextInput)`
    padding: 11px;
    font-size: 18px;
    /* font-family: Roboto, 'Open Sans', 'Helvetica Neue', sans-serif; */
    color: #bdbdbd;
    width: 312px;
    :focus{
        outline: none;
    }
    ::placeholder{
        color: #e6e7e8;
    }
`;

export const InputWrapper = styled(View)`
    border-bottom: 1px solid #e6e7e8;
    margin-bottom: 36px;
`;

export const SingUpButton = styled(RectButton)`
    background-color: #88c9bf;
    border-radius: 2px;
    width: 232px;
    height: 40px;
    margin-bottom: 24px;
    align-items: center;
    justify-content:center;
`;

export const ButtonText = styled(Text)`
    font-size: 16px;
    color: #434343;
    /* font-family: Roboto, 'Open Sans', 'Helvetica Neue', sans-serif; */
`;

export const InfoBanner = styled(View)`
    background-color: #cfe9e5;
    border-radius: 4px;
    /* width: 90%; */
    /* height: 80px; */
    align-items: center;
`;

export const InfoText = styled(Text)`
    color: #434343;
    font-size: 18px;
    text-align: center;
    margin: 10px;
`;

export const Header = styled(Text)`
    color: #88c9bf;
    font-size: 18px;
    align-self: flex-start;
    margin: 28px 0px 32px 5px;
`;

export const PhotoFrame = styled(View)`
    width: 128px;
    height: 128px;
    margin-bottom: 32px;
    background-color: #e6e7e7;
    border-radius: 4px;
`;
