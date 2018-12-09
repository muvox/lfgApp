import React, { Component } from 'react';
import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native';
import { Button, Loading, PosterComponent} from '../components/common';
import axios from 'axios';

export default class Posters extends React.Component {
  constructor(props){
    super(props);
    this.state = {
    loading: true,
    error: '',
    data:[],
    gameName: '',
    }
  }

componentDidMount(){
  this.setState({gameName: this.props.gameName});
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
  const { container, errorText, gameNameText, posterCardContainer, posterCard, headerStyle, userText, platformText, grayText, detailStyle } = styles;
  const { loading, username, error, gameName, data } = this.state;

  if(loading){
    return(
      <View style={container}>
        <Loading size={'large'}/>
      </View>
    );
  }else {
    return(
      // user={item.user} platform={item.platform} playerAmount={item.playerAmount} details={item.details}
    <View style={container}>
    <Text style={gameNameText}> {gameName} </Text>

      <FlatList data={data} keyExtractor={item => item.id.toString()} renderItem={({item}) =>
      <PosterComponent user={item.user} platform={item.platform} playerAmount={item.playerAmount} details={item.details} />

      }/>
    </View>

  );
}
}
}

const styles = {
  container: {
    paddingTop: 50,
    paddingBottom: 20,
    flex:1,
    justifyContent: 'center',
    backgroundColor: '#222'
  },
  errorText: {
    alignSelf: 'center',
    fontSize: 18,
    color: 'red'
  },
  gameNameText: {
    fontSize: 30,
    color: '#fff',
    marginLeft: 10,
  }
};
