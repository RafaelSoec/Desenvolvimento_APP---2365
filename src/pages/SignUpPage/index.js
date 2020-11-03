import React, { Component } from 'react';
import { Alert } from 'react-native';
import { MaterialIcons } from 'react-native-vector-icons';

import UsuarioDTO from '../../dto/UsuarioDTO';
import { AuthService } from '../../services/AuthService.js';
import { UsuarioService } from '../../services/UsuarioService.js';

import * as ImagePicker from 'expo-image-picker';
import * as firebase from 'firebase';

import { Formik } from 'formik';
import * as Yup from 'yup';

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

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

const validationSchema = Yup.object().shape({
    nome: Yup.string()
        .required('Informe o nome')
        .min(5, 'O nome deve conter mais de 5 letras')
        .max(100, 'O nome deve conter menos de 100 letras'),
    idade: Yup.number()
        .required('Informe a idade')
        .integer('Informe sua idade apenas com números')
        .max(150, 'Informe uma idade válida')
        .min(18, 'Deve ser maior de idade'),
    email: Yup.string()
        .required('Informe o email')
        .email('Informe um email válido'),
    estado: Yup.string()
        .required('Informe seu estado')
        .min(4, 'O estado deve ser completo'),
    cidade: Yup.string()
        .required('Informe sua cidade')
        .min(4, 'Nome muito curto'),
    endereco: Yup.string()
        .required('Informe seu endereço')
        .min(5, 'Informe seu endereço'),
    telefone: Yup.string()
        .required('Informe seu telefone')
        .matches(phoneRegExp, 'Informe um telefone válido'),
    usuario: Yup.string()
        .required('Informe seu nome de usuário')
        .min(6, 'Deve ter mais de 5 caracteres')
        .max(25, 'Nome muito longo'),
    senha: Yup.string()
        .required('Escolha uma senha')
        .min(8, 'A senha deve ter mais de 8 caracteres'),
    confirmarSenha: Yup.string()
        .required('Confirme a senha')
        .equals([Yup.ref('senha')], 'As senhas não conferem.')
})


export default class SignUpPage extends Component {
    constructor(props) {
        super(props);
        this.state = new UsuarioDTO();
        this.handleClick = this.handleClick.bind(this);
    }

    signUp(values) {
        AuthService.createUser(values.email, values.senha, res => {
            console.log(res.message);
            if (res.result) {
                this.uploadPhoto(this.state.imageURI, values.email);
                UsuarioService.addUsuario(values, callback => {
                    this.props.navigation.navigate('LoginPage');
                })
            }
        });
    }

    handleClick() {
        Alert.alert(
            "Foto de perfil",
            "Selecione a sua foto de perfil",
            [{
                text: "Tirar foto",
                onPress: () => { this.choosePhoto("camera").then((res) => { if (!res.cancelled) Alert.alert("Sucesso") }).catch((err) => alert(err)) },
            },
            {
                text: "Escolher da biblioteca",
                onPress: () => { this.choosePhoto("cameraRoll").then((res) => { if (!res.cancelled) Alert.alert("Sucesso") }).catch((err) => alert(err)) },
            },
            {
                text: "Cancelar",
            }]
        )
    }

    async choosePhoto(from) {
        if (from == "camera") {
            await ImagePicker.getCameraPermissionsAsync();
            var result = await ImagePicker.launchCameraAsync();
        }
        else {
            var result = await ImagePicker.launchImageLibraryAsync();
        }

        if (!result.cancelled) {
            this.setState({ imageURI: result.uri });
        }
        return result;
    }

    async uploadPhoto(uri, imageName) {
        const response = await fetch(uri).then(console.log("fetch com sucesso"));
        const blob = await response.blob();

        var ref = firebase.storage().ref().child("images/" + imageName);
        return ref.put(blob);
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
                <Formik
                    initialValues={{
                        nome: '', idade: '', email: '', estado: '', cidade: '',
                        endereco: '', telefone: '', usuario: '', senha: ''
                    }}
                    initialErrors={{
                        nome: 'Informe o seu nome', idade: 'Informe a sua idade', email: 'Informe o seu e-mail',
                        estado: 'Informe o seu Estado', cidade: 'Informe a sua cidade',
                        endereco: 'Informe o seu endereço', telefone: 'Informe o seu telefone',
                        usuario: 'Informe o nome de usuário', senha: 'Escolha uma senha', confirmarSenha: 'Confirme a senha'
                    }}

                    onSubmit={(values, actions) => {
                        console.log(values);
                        this.signUp(values);
                        setTimeout(() => {
                            actions.setSubmitting(false);
                        }, 1000);
                    }}
                    validationSchema={validationSchema}
                >

                    {formikProps => (
                        <>
                            <InputWrapper>
                                <SingUpInput placeholder="Nome Completo" onChangeText={formikProps.handleChange('nome')} />
                                <MaterialIcons name="done" size={30} color={formikProps.errors.nome ? "#fafafa" : "#88c9bf"} />
                            </InputWrapper>
                            <InputWrapper>
                                <SingUpInput placeholder="Idade" keyboardType="number-pad" onChangeText={formikProps.handleChange('idade')} />
                                <MaterialIcons name="done" size={30} color={formikProps.errors.idade ? "#fafafa" : "#88c9bf"} />
                            </InputWrapper>
                            <InputWrapper>
                                <SingUpInput placeholder="Email" keyboardType="email-address" onChangeText={formikProps.handleChange('email')} />
                                <MaterialIcons name="done" size={30} color={formikProps.errors.email ? "#fafafa" : "#88c9bf"} />
                            </InputWrapper>
                            <InputWrapper>
                                <SingUpInput placeholder="Estado" onChangeText={formikProps.handleChange('estado')} />
                                <MaterialIcons name="done" size={30} color={formikProps.errors.estado ? "#fafafa" : "#88c9bf"} />
                            </InputWrapper>
                            <InputWrapper>
                                <SingUpInput placeholder="Cidade" onChangeText={formikProps.handleChange('cidade')} />
                                <MaterialIcons name="done" size={30} color={formikProps.errors.cidade ? "#fafafa" : "#88c9bf"} />
                            </InputWrapper>
                            <InputWrapper>
                                <SingUpInput placeholder="Endereço" onChangeText={formikProps.handleChange('endereco')} />
                                <MaterialIcons name="done" size={30} color={formikProps.errors.endereco ? "#fafafa" : "#88c9bf"} />
                            </InputWrapper>
                            <InputWrapper>
                                <SingUpInput placeholder="Telefone" onChangeText={formikProps.handleChange('telefone')} />
                                <MaterialIcons name="done" size={30} color={formikProps.errors.telefone ? "#fafafa" : "#88c9bf"} />
                            </InputWrapper>
                            <Header>
                                INFORMAÇÕES DE PERFIL
                            </Header>
                            <InputWrapper>
                                <SingUpInput placeholder="Nome de Usuário" onChangeText={formikProps.handleChange('usuario')} />
                                <MaterialIcons name="done" size={30} color={formikProps.errors.usuario ? "#fafafa" : "#88c9bf"} />
                            </InputWrapper>
                            <InputWrapper>
                                <SingUpInput placeholder="Senha" secureTextEntry={true} onChangeText={formikProps.handleChange('senha')} />
                                <MaterialIcons name="done" size={30} color={formikProps.errors.senha ? "#fafafa" : "#88c9bf"} />
                            </InputWrapper>
                            <InputWrapper>
                                <SingUpInput placeholder="Confirmação de senha" secureTextEntry={true} onChangeText={formikProps.handleChange('confirmarSenha')} />
                                <MaterialIcons name="done" size={30} color={formikProps.errors.confirmarSenha ? "#fafafa" : "#88c9bf"} />
                            </InputWrapper>
                            <Header>
                                FOTO DE PERFIL
                            </Header>
                            <PhotoFrame onPress={this.handleClick}>
                                <ButtonText style={{ color: "white" }}>Escolher foto</ButtonText>
                            </PhotoFrame>

                            {formikProps.isValid ?
                                <SingUpButton title="Submit" onPress={formikProps.handleSubmit}>
                                    <ButtonText>
                                        FAZER CADASTRO
                                    </ButtonText>
                                </SingUpButton>
                                :
                                <SingUpButton style={{ opacity: 0.4 }}
                                    onPress={() => {
                                        let erros = '';
                                        Object.keys(formikProps.errors).forEach(campo => {
                                            erros += "- " + formikProps.errors[campo] + "\n"
                                        })
                                        Alert.alert(
                                            "Corrija os seguintes erros: ",
                                            erros,
                                            [{ title: 'OK' }]
                                        )
                                    }}>
                                    <ButtonText>
                                        FAZER CADASTRO
                                    </ButtonText>
                                </SingUpButton>
                            }
                        </>
                    )}

                </Formik>
            </Container >
        );
    }
}