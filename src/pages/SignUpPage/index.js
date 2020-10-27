import React, { Component } from 'react'
import UsuarioDTO from '../../dto/UsuarioDTO';
import { AuthService } from '../../services/AuthService.js';
import { UsuarioService } from '../../services/UsuarioService.js';

import { MaterialIcons } from 'react-native-vector-icons';

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
        .integer('Informe uma idade válida')
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
        console.log(this.state)
    }

    async componentWillMount() {

    }

    signUp = (values) => {
        AuthService.createUser(values.email, values.senha, res => {
            console.log(res.message);
            if (res.result) {
                UsuarioService.addUsuario(values, callback => {
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
                <Formik
                    initialValues={{
                        nome: '', idade: '', email: '', estado: '', cidade: '',
                        endereco: '', telefone: '', usuario: '', senha: ''
                    }}
                    initialErrors={{
                        nome: true, idade: true, email: true, estado: true, cidade: true,
                        endereco: true, telefone: true, usuario: true, senha: true
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
                                <SingUpInput placeholder="Nome Completo" onBlur={formikProps.handleChange('nome')} />
                                <MaterialIcons name="done" size={30} color={formikProps.errors.nome ? "#fafafa" : "#88c9bf"} />
                            </InputWrapper>
                            <InputWrapper>
                                <SingUpInput placeholder="Idade" onBlur={formikProps.handleChange('idade')} />
                                <MaterialIcons name="done" size={30} color={formikProps.errors.idade ? "#fafafa" : "#88c9bf"} />
                            </InputWrapper>
                            <InputWrapper>
                                <SingUpInput placeholder="Email" onBlur={formikProps.handleChange('email')} />
                                <MaterialIcons name="done" size={30} color={formikProps.errors.email ? "#fafafa" : "#88c9bf"} />
                            </InputWrapper>
                            <InputWrapper>
                                <SingUpInput placeholder="Estado" onBlur={formikProps.handleChange('estado')} />
                                <MaterialIcons name="done" size={30} color={formikProps.errors.estado ? "#fafafa" : "#88c9bf"} />
                            </InputWrapper>
                            <InputWrapper>
                                <SingUpInput placeholder="Cidade" onBlur={formikProps.handleChange('cidade')} />
                                <MaterialIcons name="done" size={30} color={formikProps.errors.cidade ? "#fafafa" : "#88c9bf"} />
                            </InputWrapper>
                            <InputWrapper>
                                <SingUpInput placeholder="Endereço" onBlur={formikProps.handleChange('endereco')} />
                                <MaterialIcons name="done" size={30} color={formikProps.errors.endereco ? "#fafafa" : "#88c9bf"} />
                            </InputWrapper>
                            <InputWrapper>
                                <SingUpInput placeholder="Telefone" onBlur={formikProps.handleChange('telefone')} />
                                <MaterialIcons name="done" size={30} color={formikProps.errors.telefone ? "#fafafa" : "#88c9bf"} />
                            </InputWrapper>
                            <Header>
                                INFORMAÇÕES DE PERFIL
                            </Header>
                            <InputWrapper>
                                <SingUpInput placeholder="Nome de Usuário" onBlur={formikProps.handleChange('usuario')} />
                                <MaterialIcons name="done" size={30} color={formikProps.errors.usuario ? "#fafafa" : "#88c9bf"} />
                            </InputWrapper>
                            <InputWrapper>
                                <SingUpInput placeholder="Senha" secureTextEntry={true} onBlur={formikProps.handleChange('senha')} />
                                <MaterialIcons name="done" size={30} color={formikProps.errors.senha ? "#fafafa" : "#88c9bf"} />
                            </InputWrapper>
                            <InputWrapper>
                                <SingUpInput placeholder="Confirmação de senha" secureTextEntry={true} onBlur={formikProps.handleChange('confirmarSenha')} />
                                <MaterialIcons name="done" size={30} color={formikProps.errors.confirmarSenha ? "#fafafa" : "#88c9bf"} />
                            </InputWrapper>
                            <Header>
                                FOTO DE PERFIL
                            </Header>
                            <PhotoFrame>

                            </PhotoFrame>

                            {formikProps.isValid ?
                                <SingUpButton title="Submit" onPress={formikProps.handleSubmit}>
                                    <ButtonText>
                                        FAZER CADASTRO
                                    </ButtonText>
                                </SingUpButton>
                                :
                                <SingUpButton style={{ opacity: 0.4 }}>
                                    <ButtonText>
                                        FAZER CADASTRO
                                    </ButtonText>
                                </SingUpButton>
                            }
                        </>
                    )}

                </Formik>
            </Container>
        );
    }
}