import React, { Component } from 'react';
import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native';
import { Button, Loading, GameComponent } from '../components/common';
import axios from 'axios';

export default class LoggedIn extends React.Component {
  constructor(props){
    super(props);
    this.state = {
    loading: true,
    testTitle: '',
    testImageSource:'',
    error: '',
    data:[]
    }
  }


componentDidMount(){

  const headers = {
    'Authorization': ''+this.props.jwt
  };
  console.log('mounted like a motherfucker');
  axios({
    method: 'GET',
    url: 'http://lookingforgamer.herokuapp.com/api/games',
    headers: headers,
  }).then((response) => {
    console.log(response.data);
    this.setState({ data: response.data});
    this.setState({
      loading:false
    });
  }).catch((error) => {
    console.log(error);
  })
}




testOutput(coverUrl){
  console.log(coverUrl);
}
  deletePropsAndError(){
    this.props.deleteJWT;
    console.log('Deleting jwt');
    console.log(this.props.jwt);
  }

  _onPressItem(gameId,gameName){
    this.props.newGID(gameId);
    this.props.gameName(gameName);
    console.log(gameId);
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
          <View style={container}>
          <FlatList style={{marginTop:20, backgroundColor: "#fff"}} data={this.state.data} keyExtractor={ item => item.id.toString()} renderItem={({item}) =>

        <GameComponent onPress={() => this._onPressItem(item.id, item.name)} imageSource={'http:'+item.coverUrl} title={item.name} />
        }/>

          </View>
      );
    }
  }
}

const styles = {
  container: {
    flex:1,
    justifyContent: 'center',
    backgroundColor: '#222222',
  },
  usernameText: {
    alignSelf: 'center',
    color: 'black',
    fontSize: 20
  },
  errorText: {
    alignSelf: 'center',
    fontSize: 18,
    color: 'red'
  }
};
