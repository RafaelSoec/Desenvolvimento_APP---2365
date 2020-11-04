import React, { Component } from 'react';
import { ActivityIndicator, Text, View } from "react-native";

export default class  Loading extends Component {
  constructor(props) {
    super(props);
    this.state = { loading: props.loading };
  }

  render() {
    if(this.state.loading){
      return (
        <View style={[{
          flex: 1,
          justifyContent: "center"
        },
        {
          flexDirection: "row",
          justifyContent: "space-around",
          padding: 10
        }]}>
          <ActivityIndicator size="large" color="#0000ff" />
        </View>
      )
    }else{
      return (<View></View>);
    }
  }
}
