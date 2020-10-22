import React, { Component } from 'react'
import UsuarioDTO from '../../dto/UsuarioDTO';
import { AuthService } from '../../services/AuthService.js';
import { UsuarioService } from '../../services/UsuarioService.js';

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

export default class SignUpPage extends Component {
    constructor(props) {
        super(props);
        this.state = new UsuarioDTO();
        this.errorMsg = "";
        console.log(this.state)
    }

    async componentWillMount() {
    }

    setSexo = (sexo) => {
        this.setState({ sexo: sexo });
    }

    setEmail = (email) => {
        this.setState({ email: email });
    }

    setEstado = (estado) => {
        this.setState({ estado: estado });
    }

    setImagem = (imagem) => {
        this.setState({ imagem: imagem });
    }

    setMunicipio = (municipio) => {
        this.setState({ municipio: municipio });
    }

    setNascimento = (nascimento) => {
        this.setState({ nascimento: nascimento });
    }

    setNome = (nome) => {
        this.setState({ nome: nome });
    }

    setCpf = (cpf) => {
        this.setState({ cpf: cpf });
    }

    setSenha = (senha) => {
        this.setState({ senha: senha });
    }

    setLogradouro = (logradouro) => {
        this.setState({ logradouro: logradouro });
    }

    setTelefone = (telefone) => {
        this.setState({ telefone: telefone });
    }

    confirmPassword = (senha) => {
        if (senha === this.state.senha) {
            this.errorMsg = `Senhas diferentes.`;
        }
    }

    signUp = () => {
        AuthService.createUser(this.state.email, this.state.senha, res => {
            console.log(res.message);
            if (res.result) {
                UsuarioService.addUsuario(this.state, callback => {
                    this.props.navigation.navigate('LoginPage');
                })
            }
        });
    }

    render() {
        return (
            <Container contentContainerStyle={{ alignItems: 'center' }}>
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
                    <SingUpInput placeholder="Nome Completo" onChangeText={this.setNome} />
                </InputWrapper>
                <InputWrapper>
                    <SingUpInput placeholder="CPF" onChangeText={this.setCpf} />
                </InputWrapper>
                <InputWrapper>
                    <SingUpInput placeholder="Gênero" onChangeText={this.setSexo} />
                </InputWrapper>
                <InputWrapper>
                    <SingUpInput placeholder="Data de Nascimento" onChangeText={this.setNascimento} />
                </InputWrapper>
                <InputWrapper>
                    <SingUpInput placeholder="Estado" onChangeText={this.setEstado} />
                </InputWrapper>
                <InputWrapper>
                    <SingUpInput placeholder="Municipio" onChangeText={this.setMunicipio} />
                </InputWrapper>
                <InputWrapper>
                    <SingUpInput placeholder="Logradouro" onChangeText={this.setLogradouro} />
                </InputWrapper>
                <InputWrapper>
                    <SingUpInput placeholder="Telefone" onChangeText={this.setTelefone} />
                </InputWrapper>
                <Header>
                    INFORMAÇÕES DE PERFIL
            </Header>
                <InputWrapper>
                    <SingUpInput placeholder="Nome de Usuário" onChangeText={this.setEmail} />
                </InputWrapper>
                <InputWrapper>
                    <SingUpInput placeholder="Senha" secureTextEntry={true} onChangeText={this.setSenha} />
                </InputWrapper>
                <InputWrapper>
                    <SingUpInput placeholder="Confirmação de senha" secureTextEntry={true} onChangeText={this.confirmPassword} />
                </InputWrapper>
                <Header>
                    FOTO DE PERFIL
            </Header>
                <PhotoFrame>

                </PhotoFrame>
                <SingUpButton onPress={() => this.signUp()}>
                    <ButtonText>
                        FAZER CADASTRO
                </ButtonText>
                </SingUpButton>
            </Container>
        );
    }
}