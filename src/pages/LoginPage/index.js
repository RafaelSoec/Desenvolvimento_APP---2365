import React from "react";
import { StatusBar } from 'react-native';
import { TextInput } from "react-native-gesture-handler";
import { Container, SocialButton, ButtonText, LoginInput } from "./styles";
import {FirebaseService} from '../../services/FirebaseService.js';

    
const LoginPage = () => {
    FirebaseService.getDataList('usuario', dataIn => console.log(`result: `, dataIn));

    return (
        <Container>
            <StatusBar barStyle="light-content" backgroundColor="#88c9bf" />

            <LoginInput placeholder="Nome de usuário" style={{ marginBottom: 20, marginTop: 64 }}>
            </LoginInput>
            <LoginInput placeholder="Senha" style={{ marginBottom: 52 }}>

            </LoginInput>
            <SocialButton style={{ backgroundColor: "#88c9bf", marginBottom: 72 }}>
                <ButtonText style={{ color: "#434343" }}>
                    Entrar
                </ButtonText>
            </SocialButton>
            <SocialButton style={{ backgroundColor: "#194f7c" }}>
                <ButtonText>
                    Entrar com o Facebook
                </ButtonText>
            </SocialButton>
            <SocialButton style={{ backgroundColor: "#f15f5c" }}>
                <ButtonText>
                    Entrar com o Google
                </ButtonText>
            </SocialButton>
        </Container>
    )
}

export default LoginPage;