import React, { Component } from 'react';
import { Text, View, FlatList } from 'react-native';
import { Style } from '../../style'
import { Card, CardImg, CardText, CardBody, CardHeader, Row, Col } from 'reactstrap';
import Dog from '../../../assets/dog.jpg';

export default class AnimalCard extends Component {
  constructor(props) {
    super(props);
    this.state = {listAnimals: props.listAnimals};
    this.renderItem = this.renderItem.bind(this);
  }

  defineSize(sexo) {
    if(sexo == 'M'){
      return 'MÉDIO';
    }
    else if(sexo == 'G'){
      return 'GRANDE';
    }
    else{
      return 'PEQUENO';
    }
  }

  defineSex(sexo) {
    if(sexo == 'M'){
      return 'MACHO';
    }else{
      return 'FÊMEA';
    }
  }

  defineYear(idade, sexo) {
    if(idade < 2){
      return 'FILHOTE';
    }else if(idade >= 2 && idade < 4){
      return ((sexo == 'M') ? 'ADULTO' : 'ADULTA');
    }else{
      return ((sexo == 'M') ? 'IDOSO' : 'IDOSA');
    }
  }

  renderItem(obj) {
    return (
      <Card style={{ marginTop: '15px' }}>
        <CardHeader style={Style.bgColor}>
          <Text style={Style.itemTitle}>{obj.item.nome}</Text>
        </CardHeader>
        <CardBody>
          <CardImg width="100%" height="100vh" src={Dog} alt={obj.item.nome} />
          <CardText style={Style.itemText} className="text-center">
            <Row className="mt-2">
              <Col max="4">
                <Text>{this.defineSex(obj.item.sexo)}</Text>
              </Col>
              <Col max="4">
                <Text>{this.defineYear(obj.item.idade)}</Text>
              </Col>
              <Col max="4">
                <Text>{this.defineSize(obj.item.porte)}</Text>
              </Col>
            </Row>
            <Row className="mt-2">
              <Col max="12">
                <Text>{obj.item.local}</Text>
              </Col>
            </Row>
          </CardText>
        </CardBody>
      </Card>
    );
  }

  render() {
    return (
      <View style={{ width: '96%', marginTop: '10px' }} >
        <FlatList data={this.state.listAnimals} renderItem={this.renderItem} extraData={this.state}/>
      </View>
    )
  }
}
