import React, { useEffect, useState } from 'react'
import { Text, ScrollView, Alert } from 'react-native'
import { AppLoading } from 'expo'
import firebase from 'firebase'
import {
  IntroText,
  Container,
  OptionButton,
  OptionText,
  Options,
  Form,
  FormSectionTitle,
  Label,
  Input,
  Upload,
  ItemOptions,
  Item, SubItemOptions,
  SubmitButton,
  SubmitButtonText
} from './styles';
import * as ImagePicker from 'expo-image-picker';

// import CheckBox from '@react-native-community/checkbox'
import { RadioButton, Checkbox } from 'react-native-paper'
import { AnimalService } from '../../services/AnimalService';

const AnimalRegistrationPage = ({ navigation }) => {

  useEffect(() => {
    const email = firebase.auth().currentUser.email
    firebase.firestore().collection('usuario').where('email', '==', email).get().then(data => data.forEach(doc => setAnimalState({ ...animalState, userId: doc.id, userEmail: doc.data().email })))
  }, []);

  const [selectedOptions, setSelectedOptions] = useState({
    ajuda: false,
    adocao: true,
    apadrinhar: false
  });

  const getSubmitText = () => {
    if (selectedOptions.apadrinhar) {
      return 'Procurar padrinho';
    } else if (selectedOptions.adocao) {
      return 'Colocar para adoção';
    } else {
      return 'Procurar ajuda';
    }
  }

  const getTitle = () => {
    if (selectedOptions.apadrinhar) {
      return 'Apadrinhar';
    } else if (selectedOptions.adocao) {
      return 'Adoção';
    } else {
      return 'Ajudar';
    }
  }

  const [animalState, setAnimalState] = useState({ temperamento: [], saude: [] })
  const [sickness, setSickness] = useState(false)
  const [medication, setMedication] = useState(false)
  const [objects, setObjects] = useState(false)
  const [imageUri, setImageUri] = useState()

  const handleClick = () => {
    Alert.alert(
      "Foto de perfil",
      "Selecione a sua foto de perfil",
      [{
        text: "Tirar foto",
        onPress: () => { choosePhoto("camera").then((res) => { if (!res.cancelled) Alert.alert("Sucesso") }).catch((err) => alert(err)) },
      },
      {
        text: "Escolher da biblioteca",
        onPress: () => { choosePhoto("cameraRoll").then((res) => { if (!res.cancelled) Alert.alert("Sucesso") }).catch((err) => alert(err)) },
      },
      {
        text: "Cancelar",
      }]
    )
  }

  const choosePhoto = async (from) => {
    if (from == "camera") {
      await ImagePicker.getCameraPermissionsAsync();
      var result = await ImagePicker.launchCameraAsync();
    }
    else {
      var result = await ImagePicker.launchImageLibraryAsync();
    }

    if (!result.cancelled) {
      setImageUri(result.uri);
    }
    return result;
  }

  const uploadPhoto = async (uri, imageName) => {
    const response = await fetch(uri).then(console.log("fetch com sucesso"));
    const blob = await response.blob();

    var ref = firebase.storage().ref().child("animals/" + imageName);
    return ref.put(blob);
  }

  const cadastrarAnimal = async () => {
    AnimalService.addAnimal(animalState, data => {
      uploadPhoto(imageUri, data.id);
      navigation.navigate('AnimalRegistrationSuccess');
    });
  }

  return (
    <ScrollView
      contentContainerStyle={{ alignItems: 'center', backgroundColor: '#fff', paddingBottom: 16 }}
    >
      <IntroText>Tenho interesse em cadastrar o animal para:</IntroText>
      <Options>
        <OptionButton
          style={{ backgroundColor: selectedOptions.adocao ? '#ffd358' : '#f1f2f2' }}
          onPress={() => {
            setAnimalState({ ...animalState, tipo: 'ADOÇÃO' });
            setSelectedOptions({
              ajuda: false,
              adocao: true,
              apadrinhar: false
            });
          }}
        >
          <OptionText>
            ADOÇÃO
          </OptionText>
        </OptionButton>
        <OptionButton
          style={{ backgroundColor: selectedOptions.apadrinhar ? '#ffd358' : '#f1f2f2' }}
          onPress={() => {
            setAnimalState({ ...animalState, tipo: 'APADRINHAR' });
            setSelectedOptions({
              ajuda: false,
              adocao: false,
              apadrinhar: true
            });
            console.log(selectedOptions);
          }}
        >
          <OptionText>
            APADRINHAR
          </OptionText>
        </OptionButton>
        <OptionButton
          style={{ backgroundColor: selectedOptions.ajuda ? '#ffd358' : '#f1f2f2' }}
          onPress={() => {
            setAnimalState({ ...animalState, tipo: 'AJUDA' });
            setSelectedOptions({
              ajuda: true,
              adocao: false,
              apadrinhar: false
            });
          }}
        >
          <OptionText>
            AJUDAR
          </OptionText>
        </OptionButton>
      </Options>

      <Form>
        <FormSectionTitle>{getTitle()}</FormSectionTitle>
        <Label>NOME DO ANIMAL</Label>
        <Input placeholder="Nome do animal" onChangeText={(value) => setAnimalState({ ...animalState, nome: value })}></Input>
        <Label>FOTOS DO ANIMAL</Label>
        <Upload onPress={handleClick}/>

        <Label>ESPÉCIE</Label>
        <ItemOptions>
          <RadioButton.Group onValueChange={value => { setAnimalState({ ...animalState, especie: value }) }} value={animalState.especie}>
            <RadioButton value='cachorro' />
            <Item>Cachorro</Item>
            <RadioButton value='gato' />
            <Item>Gato</Item>
          </RadioButton.Group>
        </ItemOptions>

        <Label>SEXO</Label>
        <ItemOptions>
          <RadioButton.Group onValueChange={value => { setAnimalState({ ...animalState, sexo: value }) }} value={animalState.sexo}>
            <RadioButton value='macho' />
            <Item>Macho</Item>
            <RadioButton value='femea' />
            <Item>Fêmea</Item>
          </RadioButton.Group>
        </ItemOptions>

        <Label>PORTE</Label>
        <ItemOptions>
          <RadioButton.Group onValueChange={value => { setAnimalState({ ...animalState, tamanho: value }) }} value={animalState.tamanho}>
            <RadioButton value='pequeno' />
            <Item>Pequeno</Item>
            <RadioButton value='medio' />
            <Item>Médio</Item>
            <RadioButton value='grande' />
            <Item>Grande</Item>
          </RadioButton.Group>
        </ItemOptions>

        <Label>IDADE</Label>
        <ItemOptions>
          <RadioButton.Group onValueChange={value => { setAnimalState({ ...animalState, idade: value }) }} value={animalState.idade}>
            <RadioButton value='filhote' />
            <Item>Filhote</Item>
            <RadioButton value='adulto' />
            <Item>Adulto</Item>
            <RadioButton value='idoso' />
            <Item>Idoso</Item>
          </RadioButton.Group>
        </ItemOptions>

        <Label>TEMPERAMENTO</Label>
        <ItemOptions>
          <Checkbox status={animalState.temperamento?.find((elemento) => 'brincalhao' === elemento) ? 'checked' : "unchecked"} onPress={() => { animalState.temperamento.push('brincalhao'); setAnimalState({ ...animalState }) }} />
          <Item>Brincalhão</Item>
          <Checkbox status={animalState.temperamento?.find((elemento) => 'timido' === elemento) ? 'checked' : "unchecked"} onPress={() => { animalState.temperamento.push('timido'); setAnimalState({ ...animalState }) }} />
          <Item>Tímido</Item>
          <Checkbox status={animalState.temperamento?.find((elemento) => 'calmo' === elemento) ? 'checked' : "unchecked"} onPress={() => { animalState.temperamento.push('calmo'); setAnimalState({ ...animalState }) }} />
          <Item>Calmo</Item>
        </ItemOptions>
        <ItemOptions>
          <Checkbox status={animalState.temperamento?.find((elemento) => 'guarda' === elemento) ? 'checked' : "unchecked"} onPress={() => { animalState.temperamento.push('guarda'); setAnimalState({ ...animalState }) }} />
          <Item>Guarda</Item>
          <Checkbox status={animalState.temperamento?.find((elemento) => 'amoroso' === elemento) ? 'checked' : "unchecked"} onPress={() => { animalState.temperamento.push('amoroso'); setAnimalState({ ...animalState }) }} />
          <Item>Amoroso</Item>
          <Checkbox status={animalState.temperamento?.find((elemento) => 'preguicoso' === elemento) ? 'checked' : "unchecked"} onPress={() => { animalState.temperamento.push('preguicoso'); setAnimalState({ ...animalState }) }} />
          <Item>Preguiçoso</Item>
        </ItemOptions>

        <Label>SAÚDE</Label>
        <ItemOptions>
          <Checkbox status={animalState.saude?.find((elemento) => 'vacinado' === elemento) ? 'checked' : "unchecked"} onPress={() => { animalState.saude.push('vacinado'); setAnimalState({ ...animalState }) }} />
          <Item>Vacinado</Item>
          <Checkbox status={animalState.saude?.find((elemento) => 'vermifugado' === elemento) ? 'checked' : "unchecked"} onPress={() => { animalState.saude.push('vermifugado'); setAnimalState({ ...animalState }) }} />
          <Item>Vermifugado</Item>
        </ItemOptions>
        <ItemOptions>
          <Checkbox status={animalState.saude?.find((elemento) => 'castrado' === elemento) ? 'checked' : "unchecked"} onPress={() => { animalState.saude.push('castrado'); setAnimalState({ ...animalState }) }} />
          <Item>Castrado</Item>
          <Checkbox status={sickness ? 'checked' : 'unchecked'} onPress={() => setSickness(!sickness)} />
          <Item>Doente</Item>
        </ItemOptions>
        <Input placeholder="Doenças do animal" onChangeText={(value) => setAnimalState({ ...animalState, doencas: value })} editable={sickness}></Input>

        {selectedOptions.apadrinhar && (
          <>
            <Label>EXIGÊNCIAS PARA APADRINHAMENTO</Label>
            <ItemOptions>
              <Checkbox status={animalState.exigencias?.termoDeApadrinhamento ? 'checked' : "unchecked"} onPress={() => { setAnimalState({ ...animalState, exigencias: { ...animalState.exigencias, termoDeApadrinhamento: true } }) }} />
              <Item>Termo de apadrinhamento</Item>
            </ItemOptions>
            <ItemOptions>
              <Checkbox status={animalState.exigencias?.auxilioFinanceiro ? 'checked' : "unchecked"} onPress={() => { setAnimalState({ ...animalState, exigencias: { ...animalState.exigencias, auxilioFinanceiro: [] } }) }} />
              <Item>Auxílio financeiro</Item>
            </ItemOptions>
            <SubItemOptions>
              <Checkbox status={animalState.exigencias?.auxilioFinanceiro?.find((value => value === 'alimentacao')) ? 'checked' : "unchecked"} onPress={() => { animalState.exigencias.auxilioFinanceiro.push('alimentacao'); setAnimalState({ ...animalState }) }} />
              <Item>Alimentação</Item>
            </SubItemOptions>
            <SubItemOptions>
              <Checkbox status={animalState.exigencias?.auxilioFinanceiro?.find((value => value === 'saude')) ? 'checked' : "unchecked"} onPress={() => { animalState.exigencias.auxilioFinanceiro.push('saude'); setAnimalState({ ...animalState }) }} />
              <Item>Saúde</Item>
            </SubItemOptions>
            <SubItemOptions>
              <Checkbox status={animalState.exigencias?.auxilioFinanceiro?.find((value => value === 'objetos')) ? 'checked' : "unchecked"} onPress={() => { animalState.exigencias.auxilioFinanceiro.push('objetos'); setAnimalState({ ...animalState }) }} />
              <Item>Objetos</Item>
            </SubItemOptions>
            <ItemOptions>
              <Checkbox status={animalState.exigencias?.visitas ? 'checked' : "unchecked"} onPress={() => { setAnimalState({ ...animalState, exigencias: { ...animalState.exigencias, visitas: true } }) }} />
              <Item>Visitas ao animal</Item>
            </ItemOptions>
          </>
        )}

        {selectedOptions.adocao && (
          <>
            <Label>EXIGÊNCIAS PARA ADOÇÃO</Label>
            <ItemOptions>
              <Checkbox status={animalState.exigencias?.termoDeAdocao ? 'checked' : "unchecked"} onPress={() => { setAnimalState({ ...animalState, exigencias: { ...animalState.exigencias, termoDeAdocao: true } }) }} />
              <Item>Termo de adoção</Item>
            </ItemOptions>
            <ItemOptions>
              <Checkbox status={animalState.exigencias?.fotosDaCasa ? 'checked' : "unchecked"} onPress={() => { setAnimalState({ ...animalState, exigencias: { ...animalState.exigencias, fotosDaCasa: true } }) }} />
              <Item>Fotos da casa</Item>
            </ItemOptions>
            <ItemOptions>
              <Checkbox status={animalState.exigencias?.visitaPrevia ? 'checked' : "unchecked"} onPress={() => { setAnimalState({ ...animalState, exigencias: { ...animalState.exigencias, visitaPrevia: true } }) }} />
              <Item>Visita prévia ao animal</Item>
            </ItemOptions>
            <ItemOptions>
              <Checkbox status={animalState.exigencias?.acompanhamento ? 'checked' : "unchecked"} onPress={() => { setAnimalState({ ...animalState, exigencias: { ...animalState.exigencias, acompanhamento: [] } }) }} />
              <Item>Acompanhamento pós adoção</Item>
            </ItemOptions>
            <SubItemOptions>
              <Checkbox status={animalState.exigencias?.acompanhamento?.find((value => value === '1 mês')) ? 'checked' : "unchecked"} onPress={() => { animalState.exigencias.acompanhamento.push('1 mês'); setAnimalState({ ...animalState }) }} />
              <Item>1 mês</Item>
            </SubItemOptions>
            <SubItemOptions>
              <Checkbox status={animalState.exigencias?.acompanhamento?.find((value => value === '3 meses')) ? 'checked' : "unchecked"} onPress={() => { animalState.exigencias.acompanhamento.push('3 meses'); setAnimalState({ ...animalState }) }} />
              <Item>3 meses</Item>
            </SubItemOptions>
            <SubItemOptions>
              <Checkbox status={animalState.exigencias?.acompanhamento?.find((value => value === '6 meses')) ? 'checked' : "unchecked"} onPress={() => { animalState.exigencias.acompanhamento.push('6 meses'); setAnimalState({ ...animalState }) }} />
              <Item>6 meses</Item>
            </SubItemOptions>
          </>
        )}

        {selectedOptions.ajuda && (
          <>
            <FormSectionTitle>Ajudar</FormSectionTitle>
            <Label>Necessidades do animal</Label>
            <ItemOptions>
              <Checkbox status={animalState.necessidades?.alimento ? 'checked' : "unchecked"} onPress={() => { setAnimalState({ ...animalState, necessidades: { ...animalState.necessidades, alimento: true } }) }} />
              <Item>Alimento</Item>
            </ItemOptions>
            <ItemOptions>
              <Checkbox status={animalState.necessidades?.auxilioFinanceiro ? 'checked' : "unchecked"} onPress={() => { setAnimalState({ ...animalState, necessidades: { ...animalState.necessidades, auxilioFinanceiro: true } }) }} />
              <Item>Auxílio financeiro</Item>
            </ItemOptions>
            <ItemOptions>
              <Checkbox status={medication ? 'checked' : 'unchecked'} onPress={() => setMedication(!medication)} />
              <Item>Medicamento</Item>
            </ItemOptions>
            <Input placeholder="Nome do medicamento" editable={medication} onChangeText={(value => setAnimalState({ ...animalState, necessidades: { ...animalState.necessidades, medicamento: value } }))} />
            <ItemOptions>
              <Checkbox status={objects ? 'checked' : 'unchecked'} onPress={() => setObjects(!objects)} />
              <Item>Objetos</Item>
            </ItemOptions>
            <Input placeholder="Especifique os objetos" editable={objects} onChangeText={(value => setAnimalState({ ...animalState, necessidades: { ...animalState.necessidades, objetos: value } }))} />

          </>
        )}

        <Label>SOBRE O ANIMAL</Label>
        <Input placeholder="Compartilhe a história do animal"></Input>
      </Form>
      <SubmitButton onPress={cadastrarAnimal}>
        <SubmitButtonText>{getSubmitText()}</SubmitButtonText>
      </SubmitButton>
    </ScrollView >
  )
}

export default AnimalRegistrationPage
