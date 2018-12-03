import React, { Component } from 'react';
import { View, Text, FlatList } from 'react-native';
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

  deletePropsAndError(){
    this.props.deleteJWT;
    console.log('Deleting jwt');
    console.log(this.props.jwt);
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
          <View>
          <FlatList
          data={this.state.data}
          keyExtractor={item => item.id}
          renderItem={({item}) =>
        <GameComponent imageSource={item.coverUrl} title={item.name} />}
          />

          </View>
          <Button>
          Log out
          </Button>
          </View>
      );
    }
  }
}

const styles = {
  container: {
    flex:1,
    justifyContent: 'center'
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
