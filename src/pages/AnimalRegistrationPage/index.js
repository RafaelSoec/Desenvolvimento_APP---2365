import React, { useState } from 'react'
import { useFonts, Roboto_400Regular, Roboto_500Medium } from '@expo-google-fonts/roboto'
import { Text, ScrollView } from 'react-native'
import { } from 'react'
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
import CheckBox from '@react-native-community/checkbox'

const AnimalRegistrationPage = () => {

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
          <CheckBox boxType={'circle'} hideBox={true} value={false} onValueChange={() => { }} />
          <Item>Cachorro</Item>
          <CheckBox boxType={'circle'} hideBox={true} value={false} onValueChange={() => { }} />
          <Item>Gato</Item>
        </ItemOptions>

        <Label>SEXO</Label>
        <ItemOptions>
          <CheckBox boxType={'circle'} hideBox={true} value={false} onValueChange={() => { }} />
          <Item>Macho</Item>
          <CheckBox boxType={'circle'} hideBox={true} value={false} onValueChange={() => { }} />
          <Item>Fêmea</Item>
        </ItemOptions>

        <Label>PORTE</Label>
        <ItemOptions>
          <CheckBox boxType={'circle'} hideBox={true} value={false} onValueChange={() => { }} />
          <Item>Pequeno</Item>
          <CheckBox boxType={'circle'} hideBox={true} value={false} onValueChange={() => { }} />
          <Item>Médio</Item>
          <CheckBox boxType={'circle'} hideBox={true} value={false} onValueChange={() => { }} />
          <Item>Grande</Item>
        </ItemOptions>

        <Label>IDADE</Label>
        <ItemOptions>
          <CheckBox boxType={'circle'} hideBox={true} value={false} onValueChange={() => { }} />
          <Item>Filhote</Item>
          <CheckBox boxType={'circle'} hideBox={true} value={false} onValueChange={() => { }} />
          <Item>Adulto</Item>
          <CheckBox boxType={'circle'} hideBox={true} value={false} onValueChange={() => { }} />
          <Item>Idoso</Item>
        </ItemOptions>

        <Label>TEMPERAMENTO</Label>
        <ItemOptions>
          <CheckBox boxType={'circle'} hideBox={true} value={false} onValueChange={() => { }} />
          <Item>Brincalhão</Item>
          <CheckBox boxType={'circle'} hideBox={true} value={false} onValueChange={() => { }} />
          <Item>Tímido</Item>
          <CheckBox boxType={'circle'} hideBox={true} value={false} onValueChange={() => { }} />
          <Item>Calmo</Item>
        </ItemOptions>
        <ItemOptions>
          <CheckBox boxType={'circle'} hideBox={true} value={false} onValueChange={() => { }} />
          <Item>Guarda</Item>
          <CheckBox boxType={'circle'} hideBox={true} value={false} onValueChange={() => { }} />
          <Item>Amoroso</Item>
          <CheckBox boxType={'circle'} hideBox={true} value={false} onValueChange={() => { }} />
          <Item>Preguiçoso</Item>
        </ItemOptions>

        <Label>SAÚDE</Label>
        <ItemOptions>
          <CheckBox boxType={'circle'} hideBox={true} value={false} onValueChange={() => { }} />
          <Item>Vacinado</Item>
          <CheckBox boxType={'circle'} hideBox={true} value={false} onValueChange={() => { }} />
          <Item>Vermifugado</Item>
        </ItemOptions>
        <ItemOptions>
          <CheckBox boxType={'circle'} hideBox={true} value={false} onValueChange={() => { }} />
          <Item>Castrado</Item>
          <CheckBox boxType={'circle'} hideBox={true} value={false} onValueChange={() => { }} />
          <Item>Doente</Item>
        </ItemOptions>
        <Input placeholder="Doenças do animal"></Input>

        {selectedOptions.apadrinhar && (
          <>
            <Label>EXIGÊNCIAS PARA APADRINHAMENTO</Label>
            <ItemOptions>
              <CheckBox boxType={'circle'} hideBox={true} value={false} onValueChange={() => { }} />
              <Item>Termo de apadrinhamento</Item>
            </ItemOptions>
            <ItemOptions>
              <CheckBox boxType={'circle'} hideBox={true} value={false} onValueChange={() => { }} />
              <Item>Auxílio financeiro</Item>
            </ItemOptions>
            <SubItemOptions>
              <CheckBox boxType={'circle'} hideBox={true} value={false} onValueChange={() => { }} />
              <Item>Alimentação</Item>
            </SubItemOptions>
            <SubItemOptions>
              <CheckBox boxType={'circle'} hideBox={true} value={false} onValueChange={() => { }} />
              <Item>Saúde</Item>
            </SubItemOptions>
            <SubItemOptions>
              <CheckBox boxType={'circle'} hideBox={true} value={false} onValueChange={() => { }} />
              <Item>Objetos</Item>
            </SubItemOptions>
            <ItemOptions>
              <CheckBox boxType={'circle'} hideBox={true} value={false} onValueChange={() => { }} />
              <Item>Visitas ao animal</Item>
            </ItemOptions>
          </>
        )}

        {selectedOptions.adocao && (
          <>
            <Label>EXIGÊNCIAS PARA ADOÇÃO</Label>
            <ItemOptions>
              <CheckBox boxType={'circle'} hideBox={true} value={false} onValueChange={() => { }} />
              <Item>Termo de adoção</Item>
            </ItemOptions>
            <ItemOptions>
              <CheckBox boxType={'circle'} hideBox={true} value={false} onValueChange={() => { }} />
              <Item>Fotos da casa</Item>
            </ItemOptions>
            <ItemOptions>
              <CheckBox boxType={'circle'} hideBox={true} value={false} onValueChange={() => { }} />
              <Item>Visita prévia ao animal</Item>
            </ItemOptions>
            <ItemOptions>
              <CheckBox boxType={'circle'} hideBox={true} value={false} onValueChange={() => { }} />
              <Item>Acompanhamento pós adoção</Item>
            </ItemOptions>
            <SubItemOptions>
              <CheckBox boxType={'circle'} hideBox={true} value={false} onValueChange={() => { }} />
              <Item>1 mês</Item>
            </SubItemOptions>
            <SubItemOptions>
              <CheckBox boxType={'circle'} hideBox={true} value={false} onValueChange={() => { }} />
              <Item>3 meses</Item>
            </SubItemOptions>
            <SubItemOptions>
              <CheckBox boxType={'circle'} hideBox={true} value={false} onValueChange={() => { }} />
              <Item>6 meses</Item>
            </SubItemOptions>
          </>
        )}

        {selectedOptions.ajuda && (
          <>
            <FormSectionTitle>Ajudar</FormSectionTitle>
            <Label>Necessidades do animal</Label>
            <ItemOptions>
              <CheckBox boxType={'circle'} hideBox={true} value={false} onValueChange={() => { }} />
              <Item>Alimento</Item>
            </ItemOptions>
            <ItemOptions>
              <CheckBox boxType={'circle'} hideBox={true} value={false} onValueChange={() => { }} />
              <Item>Auxílio financeiro</Item>
            </ItemOptions>
            <ItemOptions>
              <CheckBox boxType={'circle'} hideBox={true} value={false} onValueChange={() => { }} />
              <Item>Medicamento</Item>
            </ItemOptions>
            <Input placeholder="Nome do medicamento"/>
            <ItemOptions>
              <CheckBox boxType={'circle'} hideBox={true} value={false} onValueChange={() => { }} />
              <Item>Objetos</Item>
            </ItemOptions>
            <Input placeholder="Especifique os objetos"/>
          </>
        )}

        <Label>SOBRE O ANIMAL</Label>
        <Input placeholder="Compartilhe a história do animal"></Input>
      </Form>
      <SubmitButton>
        <SubmitButtonText>{getSubmitText()}</SubmitButtonText>
      </SubmitButton>
    </ScrollView>
  )
}

export default AnimalRegistrationPage
