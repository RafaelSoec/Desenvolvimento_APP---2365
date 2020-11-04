import React, { Component } from 'react'
import { Container, SocialButton, ButtonText, LoginInput } from "./styles";
import { AuthService } from '../../services/AuthService.js';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input } from 'react-native-elements';
import {
    StatusBar,
    StyleSheet,
    TextInput,
    View,
    Text,
    ScrollView,
    Image,
    KeyboardAvoidingView,
} from 'react-native';
import Loading from '../../components/Loading';


export default class LoginPage extends Component {
    constructor(props) {
        super(props);
        this.state = { email: "", password: "" };
    }

    async componentWillMount() {
    }


    handleEmailChange = (email) => {
        this.setState({ email: email });
    }

    handlePasswordChange = (senha) => {
        this.setState({ password: senha });
    }

    handleError = (erro) => {
        return `${erro} inválido.`
    }

    signUp = () => {
        this.props.navigation.navigate('SignUpPage');
    }

    logIn = () => {
        AuthService.login(this.state.email, this.state.password, res => {
            console.log(res.message);
            if (res.result) {
                this.props.navigation.navigate('IntroPage');
            }
        });
    }

    render() {
        return (
            <Container style={styles.mainBody}>  
                 <Loading loading={false} /> 
                <StatusBar barStyle="light-content" backgroundColor="#88c9bf" />
                <ScrollView keyboardShouldPersistTaps="handled">
                    <View style={{ marginTop: 100 }}>
                        <KeyboardAvoidingView enabled>
                            <View style={{ alignItems: 'center' }}>
                                <Image
                                    source={require('../../../assets/marca-meau.png')}
                                    style={{
                                        width: '50%',
                                        height: 100,
                                        resizeMode: 'contain',
                                        margin: 30,
                                    }}
                                />
                            </View>
                            <View style={styles.SectionStyle}>
                                <Input
                                    placeholder='Email'
                                    placeholderTextColor="#88c9bf"
                                    onChangeText={this.handleEmailChange}
                                    leftIcon={<Icon name='lock' size={18} color='#88c9bf' />}
                                />
                            </View>
                            <View style={styles.SectionStyle}>
                                <Input
                                    placeholder='Senha'
                                    secureTextEntry={true}
                                    placeholderTextColor="#88c9bf"
                                    onChangeText={this.handlePasswordChange}
                                    leftIcon={<Icon name='lock' size={18} color='#88c9bf' />}
                                />
                            </View>
                        </KeyboardAvoidingView>
                    </View>
                </ScrollView>

                <SocialButton style={{ backgroundColor: "#88c9bf", marginBottom: 72 }} onPress={() => this.logIn()}>
                    <ButtonText style={{ color: "#434343" }}>
                        Entrar
                    </ButtonText>
                </SocialButton>
                <SocialButton style={{ backgroundColor: "#88c9bf", marginBottom: 72 }} onPress={() => this.signUp()}>
                    <ButtonText style={{ color: "#434343" }}>
                        Cadastrar
                    </ButtonText>
                </SocialButton>
            </Container>
        )
    }
}
const styles = StyleSheet.create({
    mainBody: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#fafafa',
    },
    SectionStyle: {
        flexDirection: 'row',
        height: 40,
        marginTop: 20,
        marginLeft: 35,
        marginRight: 35,
        margin: 10,
    },
    buttonStyle: {
        backgroundColor: '#7DE24E',
        borderWidth: 0,
        color: '#FFFFFF',
        borderColor: '#7DE24E',
        height: 40,
        alignItems: 'center',
        borderRadius: 30,
        marginLeft: 35,
        marginRight: 35,
        marginTop: 20,
        marginBottom: 20,
    },
    buttonTextStyle: {
        color: '#FFFFFF',
        paddingVertical: 10,
        fontSize: 16,
    },
    inputStyle: {
        flex: 1,
        color: 'white',
        paddingLeft: 15,
        paddingRight: 15,
        borderWidth: 1,
        borderRadius: 30,
        borderColor: 'white',
    },
    registerTextStyle: {
        color: '#FFFFFF',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 14,
    },
    errorTextStyle: {
        color: 'red',
        textAlign: 'center',
        fontSize: 14,
    },
});