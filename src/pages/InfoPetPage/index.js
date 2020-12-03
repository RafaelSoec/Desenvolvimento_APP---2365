import React, { useState, useEffect, useRef } from 'react';
import { Image, Text, View, ScrollView} from 'react-native';
import { Button } from 'react-native-paper';
import 
    { ImageContainer, PetImage, 
    DataContainer, DataStrip, 
    Data, DataHeader, DataText,
    StyledButton, ButtonText } from './styles.js';
import firebase from 'firebase';


const InfoPetPage = ({route, navigation}) => {

    console.log(route.params.pet)
    var pet = route.params.pet
    
    const [avatarUrl, setAvatarUrl] = useState(' ')

    const getImageUrl = async () => {    
        const url = await firebase.storage().ref('animals/' + pet.id).getDownloadURL();
        console.log(url)
        setAvatarUrl(url)
      }

    useEffect( () => {
        if(route.params.type === 'ADOPT'){
            navigation.setOptions({headerStyle: {backgroundColor: '#ffd358'}})
        }
        navigation.setOptions({title: pet.data.nome})
        getImageUrl();
    }, [])

    return (
        <ScrollView>
            <ImageContainer>
                <PetImage source={{uri: avatarUrl}} />
            </ImageContainer>
            <DataContainer>
            <Text style={{fontSize: 26,color: '#434343'}}>{pet.data.nome}</Text>
                <DataStrip>
                    <Data>
                        <DataHeader>SEXO</DataHeader>
                        <DataText>{pet.data.sexo}</DataText>
                    </Data>
                    <Data>
                        <DataHeader>PORTE</DataHeader>
                        <DataText>{pet.data.tamanho}</DataText>
                    </Data>
                    <Data>
                        <DataHeader>IDADE</DataHeader>
                        <DataText>{pet.data.idade}</DataText>
                    </Data>
                </DataStrip>
                <DataStrip>
                    <Data>
                        <DataHeader>LOCALIZAÇÃO</DataHeader>
                        <DataText>Brasília - DF</DataText>
                    </Data>
                </DataStrip>
                <DataStrip>
                    <Data>
                        <DataHeader>CASTRADO</DataHeader>
                        <DataText>{pet.data.saude.includes('castrado') ? 'Sim' : 'Não'}</DataText>
                    </Data>
                    <Data>
                        <DataHeader>VERMIFUGADO</DataHeader>
                        <DataText>{pet.data.saude.includes('vermifugado') ? 'Sim' : 'Não'}</DataText>
                    </Data>
                </DataStrip>
                <DataStrip>
                    <Data>
                        <DataHeader>VACINADO</DataHeader>
                        <DataText>{pet.data.saude.includes('vacinado') ? 'Sim' : 'Não'}</DataText>
                    </Data>
                    <Data>
                        <DataHeader>DOENÇAS</DataHeader>
                        <DataText>{pet.data.doencas ? pet.data.doencas : 'Nenhuma'}</DataText>
                    </Data>
                </DataStrip>
                <DataStrip>
                    <Data>
                        <DataHeader>TEMPERAMENTO</DataHeader>
                        <DataText>{pet.data.temperamento+''}</DataText>
                    </Data>
                </DataStrip>
                <DataStrip>
                    <Data>
                        <DataHeader>EXIGENCIAS DO DOADOR</DataHeader>
                        <DataText>
                            { pet.data.exigencias.termoDeApadrinhamento ? "- Termo de apadrinhamento\n" : ""}
                            { pet.data.exigencias.visitas ? "- Visitas\n" : ""}
                            { pet.data.exigencias.fotosDaCasa ? "- Fotos da casa\n" : ""}
                            { pet.data.exigencias.acompanhamento ? `- Acompanhamento: ${pet.data.exigencias.acompanhamento} \n` : ""}
                            { pet.data.exigencias.auxilioFinanceiro ? `- Auxilio Financeiro: ${pet.data.exigencias.auxilioFinanceiro+""} \n` : ""}
                        </DataText>
                    </Data>
                </DataStrip>
                {pet.data.tipo != 'ADOTADO' && route.params.type != 'ADOPT' && 
                <DataStrip style={{justifyContent:"space-around"}}>
                    <StyledButton title="Interessados" onPress={() => navigation.navigate('InterestedPage', {pet: route.params.pet})} >
                        <ButtonText>VER INTERESSADOS</ButtonText>
                    </StyledButton>
                    <StyledButton title="Remover" >
                        <ButtonText>REMOVER PET</ButtonText>
                    </StyledButton>
                </DataStrip>}
                
            </DataContainer>
        </ScrollView>
    );
}

export default InfoPetPage;