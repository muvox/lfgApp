import React, { Component } from 'react';
import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native';
import { Button, Loading, GameComponent } from '../components/common';
import axios from 'axios';

export default class Posters extends React.Component {
  constructor(props){
    super(props);
    this.state = {
    loading: true,
    error: '',
    data:[]
    }
  }

componentDidMount(){
  var url = 'http://lookingforgamer.herokuapp.com/api/posters/'+this.props.gameId;
  console.log(url);
  const headers = {
    'Authorization': ''+this.props.jwt
  };
  console.log('mounted like a motherfucker 2');
  axios({
    method: 'GET',
    url: url,
    headers: headers,
  }).then((response) => {
    console.log(response.data);
    this.setState({ data: response.data});
    this.setState({
      loading:false
    });
  }).catch((error) => {
    console.log(error);
    this.setState({
      loading:false
    });
  })
}

render() {
  const { container, errorText } = styles;
  const { loading, username, error } = this.state;

  if(loading){
    return(
      <View style={container}>
        <Loading size={'large'}/>
      </View>
    )
  }else {
    return(
    <View>
    <Text> lol </Text>
    </View>
  );
}
}
}

const styles = {
  container: {
    paddingTop: 20,
    paddingBottom: 20,
    flex:1,
    justifyContent: 'center'
  },
  errorText: {
    alignSelf: 'center',
    fontSize: 18,
    color: 'red'
  }
};
