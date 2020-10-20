import React, { Component } from 'react';
import { Text, View, FlatList} from 'react-native';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';

const accordionText = { color: '#434343', fontFamily: 'Roboto_500Medium' }
const itemText = { color: '#434343', fontFamily: 'Roboto_400Regular' }

export default class CardComponet extends Component{
  // FirebaseService.getDataList('usuario', dataIn => console.log(`result: `, dataIn));

  constructor(props){
    super(props);
    this.state = {
      informations: [
        {key: '0', value:'pai'},
        {key: '1', value:'mae'},
        {key: '2', value:'filho'},
      ]
    };

    this.renderItem = this.renderItem.bind(this);
  }

  renderItem(obj){
    return (
      <Card style={{ marginTop: '15px' }}>
        <CardImg top width="100%" src="../../"  alt="Card image cap" />
        <CardBody>
          <CardTitle>{obj.item.value}</CardTitle>
          <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
        </CardBody>
      </Card>
      // <text>{obj.item.value}</text>
    );
  }

  render() {
    return (
      <View >
        <FlatList data={this.state.informations} renderItem={this.renderItem}/>
      </View>
    )
  }
}
