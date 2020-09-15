import React from 'react';
import {
    InfoBanner,
    Container,
    InfoText,
    Header,
    SingUpInput,
    InputWrapper,
    PhotoFrame,
    SingUpButton,
    ButtonText
} from './styles';

const SignUpPage = () => {
    return (
        <Container contentContainerStyle={{alignItems: 'center'}}>
            <InfoBanner>
                <InfoText>
                    As informações preenchidas serão divulgadas
                    apenas para a pessoa com a qual você realizar
                    o processo de adoção e/ou apadrinhamento,
                    após a formalização do processo.
                </InfoText>
            </InfoBanner>
            <Header>
                INFORMAÇÕES PESSOAIS
            </Header>
            <InputWrapper>
                <SingUpInput placeholder="Nome Completo" />
            </InputWrapper>
            <InputWrapper>
                <SingUpInput placeholder="Idade" />
            </InputWrapper>
            <InputWrapper>
                <SingUpInput placeholder="E-mail" />
            </InputWrapper>
            <InputWrapper>
                <SingUpInput placeholder="Estado" />
            </InputWrapper>
            <InputWrapper>
                <SingUpInput placeholder="Cidade" />
            </InputWrapper>
            <InputWrapper>
                <SingUpInput placeholder="Endereço" />
            </InputWrapper>
            <InputWrapper>
                <SingUpInput placeholder="Telefone" />
            </InputWrapper>
            <Header>
                INFORMAÇÕES DE PERFIL
            </Header>
            <InputWrapper>
                <SingUpInput placeholder="Nome de Usuário" />
            </InputWrapper>
            <InputWrapper>
                <SingUpInput placeholder="Senha" />
            </InputWrapper>
            <InputWrapper>
                <SingUpInput placeholder="Confirmação de senha" />
            </InputWrapper>
            <Header>
                FOTO DE PERFIL
            </Header>
            <PhotoFrame>

            </PhotoFrame>
            <SingUpButton>
                <ButtonText>
                    FAZER CADASTRO
                </ButtonText>
            </SingUpButton>
        </Container>
    )
}

export default SignUpPage;