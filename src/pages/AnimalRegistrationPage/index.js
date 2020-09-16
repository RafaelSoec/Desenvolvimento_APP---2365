import React, { useState } from 'react'
import { useFonts, Roboto_400Regular, Roboto_500Medium } from '@expo-google-fonts/roboto'
import { Text, ScrollView } from 'react-native'
import { AppLoading } from 'expo'
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
// import CheckBox from '@react-native-community/checkbox'
import {RadioButton, Checkbox} from 'react-native-paper'

const AnimalRegistrationPage = ({navigation}) => {

  let [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_500Medium
  });
  const [selectedOptions, setSelectedOptions] = useState({
    ajuda: false,
    adocao: true,
    apadrinhar: false
  });

  if (!fontsLoaded) {
    return <AppLoading />
  }

  const getSubmitText = () => {
    if (selectedOptions.apadrinhar) {
      return 'Procurar padrinho';
    }else if(selectedOptions.adocao) {
      return 'Colocar para adoção';
    } else {
      return 'Procurar ajuda';
    }
  }

  const getTitle = () => {
    if (selectedOptions.apadrinhar) {
      return 'Apadrinhar';
    }else if(selectedOptions.adocao) {
      return 'Adoção';
    } else {
      return 'Ajudar';
    }
  }


  return (
    <ScrollView 
      contentContainerStyle={{ alignItems: 'center', backgroundColor: '#fff', paddingBottom: 16 }}
    >
      <IntroText>Tenho interesse em cadastrar o animal para:</IntroText>
      <Options>
        <OptionButton
          disabled={selectedOptions.apadrinhar}
          style={{ backgroundColor: selectedOptions.adocao ? '#ffd358' : '#f1f2f2' }}
          onPress={() => {
            setSelectedOptions({
              ajuda: selectedOptions.ajuda,
              adocao: !selectedOptions.adocao,
              apadrinhar: false
            });
          }}
        >
          <OptionText>
            ADOÇÃO
          </OptionText>
        </OptionButton>
        <OptionButton
          disabled={selectedOptions.adocao}
          style={{ backgroundColor: selectedOptions.apadrinhar ? '#ffd358' : '#f1f2f2' }}
          onPress={() => {
            setSelectedOptions({
              ajuda: selectedOptions.ajuda,
              adocao: false,
              apadrinhar: !selectedOptions.apadrinhar
            });
          }}
        >
          <OptionText>
            APADRINHAR
          </OptionText>
        </OptionButton>
        <OptionButton
          style={{ backgroundColor: selectedOptions.ajuda ? '#ffd358' : '#f1f2f2' }}
          onPress={() => {
            setSelectedOptions({
              ajuda: !selectedOptions.ajuda,
              adocao: selectedOptions.adocao,
              apadrinhar: selectedOptions.apadrinhar
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
        <Input placeholder="Nome do animal" ></Input>
        <Label>FOTOS DO ANIMAL</Label>
        <Upload />

        <Label>ESPÉCIE</Label>
        <ItemOptions>
          <RadioButton status='disabled' />
          <Item>Cachorro</Item>
          <RadioButton status='disabled' />
          <Item>Gato</Item>
        </ItemOptions>

        <Label>SEXO</Label>
        <ItemOptions>
          <RadioButton status='disabled' />
          <Item>Macho</Item>
          <RadioButton status='disabled' />
          <Item>Fêmea</Item>
        </ItemOptions>

        <Label>PORTE</Label>
        <ItemOptions>
          <RadioButton status='disabled' />
          <Item>Pequeno</Item>
          <RadioButton status='disabled' />
          <Item>Médio</Item>
          <RadioButton status='disabled' />
          <Item>Grande</Item>
        </ItemOptions>

        <Label>IDADE</Label>
        <ItemOptions>
          <RadioButton status='disabled' />
          <Item>Filhote</Item>
          <RadioButton status='disabled' />
          <Item>Adulto</Item>
          <RadioButton status='disabled' />
          <Item>Idoso</Item>
        </ItemOptions>

        <Label>TEMPERAMENTO</Label>
        <ItemOptions>
          <Checkbox status='unchecked'/>
          <Item>Brincalhão</Item>
          <Checkbox status='unchecked'/>
          <Item>Tímido</Item>
          <Checkbox status='unchecked'/>
          <Item>Calmo</Item>
        </ItemOptions>
        <ItemOptions>
          <Checkbox status='unchecked'/>
          <Item>Guarda</Item>
          <Checkbox status='unchecked'/>
          <Item>Amoroso</Item>
          <Checkbox status='unchecked'/>
          <Item>Preguiçoso</Item>
        </ItemOptions>

        <Label>SAÚDE</Label>
        <ItemOptions>
          <Checkbox status='unchecked'/>
          <Item>Vacinado</Item>
          <Checkbox status='unchecked'/>
          <Item>Vermifugado</Item>
        </ItemOptions>
        <ItemOptions>
          <Checkbox status='unchecked'/>
          <Item>Castrado</Item>
          <Checkbox status='unchecked'/>
          <Item>Doente</Item>
        </ItemOptions>
        <Input placeholder="Doenças do animal"></Input>

        {selectedOptions.apadrinhar && (
          <>
            <Label>EXIGÊNCIAS PARA APADRINHAMENTO</Label>
            <ItemOptions>
              <Checkbox status='unchecked'/>
              <Item>Termo de apadrinhamento</Item>
            </ItemOptions>
            <ItemOptions>
              <Checkbox status='unchecked'/>
              <Item>Auxílio financeiro</Item>
            </ItemOptions>
            <SubItemOptions>
              <Checkbox status='unchecked'/>
              <Item>Alimentação</Item>
            </SubItemOptions>
            <SubItemOptions>
              <Checkbox status='unchecked'/>
              <Item>Saúde</Item>
            </SubItemOptions>
            <SubItemOptions>
              <Checkbox status='unchecked'/>
              <Item>Objetos</Item>
            </SubItemOptions>
            <ItemOptions>
              <Checkbox status='unchecked'/>
              <Item>Visitas ao animal</Item>
            </ItemOptions>
          </>
        )}

        {selectedOptions.adocao && (
          <>
            <Label>EXIGÊNCIAS PARA ADOÇÃO</Label>
            <ItemOptions>
              <Checkbox status='unchecked'/>
              <Item>Termo de adoção</Item>
            </ItemOptions>
            <ItemOptions>
              <Checkbox status='unchecked'/>
              <Item>Fotos da casa</Item>
            </ItemOptions>
            <ItemOptions>
              <Checkbox status='unchecked'/>
              <Item>Visita prévia ao animal</Item>
            </ItemOptions>
            <ItemOptions>
              <Checkbox status='unchecked'/>
              <Item>Acompanhamento pós adoção</Item>
            </ItemOptions>
            <SubItemOptions>
              <Checkbox status='unchecked'/>
              <Item>1 mês</Item>
            </SubItemOptions>
            <SubItemOptions>
              <Checkbox status='unchecked'/>
              <Item>3 meses</Item>
            </SubItemOptions>
            <SubItemOptions>
              <Checkbox status='unchecked'/>
              <Item>6 meses</Item>
            </SubItemOptions>
          </>
        )}

        {selectedOptions.ajuda && (
          <>
            <FormSectionTitle>Ajudar</FormSectionTitle>
            <Label>Necessidades do animal</Label>
            <ItemOptions>
              <Checkbox status='unchecked'/>
              <Item>Alimento</Item>
            </ItemOptions>
            <ItemOptions>
              <Checkbox status='unchecked'/>
              <Item>Auxílio financeiro</Item>
            </ItemOptions>
            <ItemOptions>
              <Checkbox status='unchecked'/>
              <Item>Medicamento</Item>
            </ItemOptions>
            <Input placeholder="Nome do medicamento"/>
            <ItemOptions>
              <Checkbox status='unchecked'/>
              <Item>Objetos</Item>
            </ItemOptions>
            <Input placeholder="Especifique os objetos"/>
          </>
        )}

        <Label>SOBRE O ANIMAL</Label>
        <Input placeholder="Compartilhe a história do animal"></Input>
      </Form>
      <SubmitButton onPress={() => navigation.navigate('AnimalRegistrationSuccess')}>
        <SubmitButtonText>{getSubmitText()}</SubmitButtonText>
      </SubmitButton>
    </ScrollView>
  )
}

export default AnimalRegistrationPage
