import React from "react";
import { TextInput } from "react-native-gesture-handler";
import { Container, SocialButton, ButtonText, LoginInput } from "./styles";

const LoginPage = () => {
    return (
        <Container>
            <LoginInput placeholder="Nome de usuário" style={{ marginBottom: "20px", marginTop: "64px" }}>
            </LoginInput>
            <LoginInput placeholder="Senha" style={{ marginBottom: "52px" }}>

            </LoginInput>
            <SocialButton style={{ backgroundColor: "#88c9bf", marginBottom: "72px" }}>
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