import React, {Component} from 'react'
import AnimalCard from '../../components/AnimalCard';
import { Container } from './styles'
import {FirebaseService} from '../../services/FirebaseService.js';

export default class AssistPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  async componentWillMount() {
    await FirebaseService.getDataFirestore('animal', listAnimals => {
      console.log("ot", listAnimals)
    });
  }

  render() {
    return (
      <Container>
        <AnimalCard listAnimals={this.state.listAnimals} />
      </Container>
    )
  }
}