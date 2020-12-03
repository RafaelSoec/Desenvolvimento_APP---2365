import React, { Component } from 'react'
import AnimalCard from '../../components/AnimalCard';
import { Container } from './styles'
import { FirebaseService } from '../../services/FirebaseService.js';
import { AnimalService } from '../../services/AnimalService.js';
import { AnimalDTO } from '../../dto/AnimalDTO';

export default class AssistPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  async componentWillMount() {
    await FirebaseService.getDataFirestore('animal', listAnimals => {
      console.log("lista de animais: ", listAnimals)
    });

    // await FirebaseService.findById('animal', id, listAnimals => {
    //   console.log("ot", listAnimals)
    // });
    

    //passa o animal e a funcao de callback como parametros.
    // const animal = { nome: "Maco", porte: "M", sexo: "M", nascimento: "12/03/2019", estado: "Distrito Federal", municipio: "Brasilia", imagem: "" };
    // await AnimalService.addAnimal(animal, animalAdicionado => {
    //     console.log(animalAdicionado)
    //   }
    // );

    const id = "8bpOOi4aKfiOu1UeuCOh";
    //passa o id do animal como parametros
    await AnimalService.deleteAnimal(id);
  }

  render() {
    return (
      <Container>
        <AnimalCard listAnimals={this.state.listAnimals} />
      </Container>
    )
  }
}