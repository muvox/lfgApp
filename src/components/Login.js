import React, { Component, Fragment } from 'react';
import { Text, View, Keyboard} from 'react-native';
import { Input, TextLink, Loading, Button } from './common';
import axios from 'axios';
import deviceStorage from '../services/deviceStorage'

import Toast, {DURATION} from 'react-native-easy-toast';


class Login extends Component {
  constructor(props){
    super(props);
    this.state = {
      username: '',
      password: '',
      error: '',
      loading: false
    };

    this.loginUser = this.loginUser.bind(this);
  }

  isEmpty(str){
    return (!str || 0 === str.length);
  }

  loginUser(){
    const {username, password} = this.state;

    this.setState({error: '', loading: true});

    Keyboard.dismiss();

    const user = {
          username: this.state.username,
          password: this.state.password
        };

    if(this.isEmpty(this.state.username)||this.isEmpty(this.state.password)){
        this.refs.errorToast.show('Username and/or password field cannot be empty!');
        this.setState({loading: false});
        return;
      }

    axios.post('http://lookingforgamer.herokuapp.com/login', user)
      .then((response) => {
        console.log(response);
        console.log(response.headers.authorization);
        this.props.newJWT(response.headers.authorization);
        deviceStorage.saveItem('id_token', response.data.authorization);
        this.setState({loading: false});
      })
      .catch((error)=>{
        console.log(error);
        this.onLoginFail();
      });
  }

  onLoginFail() {
    this.setState({
      error: 'Login Failed',
      loading: false
    });
  }

  render(){
    const {
      username,
      password,
      error,
      loading
    } = this.state;
    const { toastSuccess, toastError, form, section, errorTextStyle, input, header } = styles;

    return (
      <Fragment>
      <Text style={header}> Login </Text>

        <View style={form}>
          <View style={section}>
            <Input
              style={input}
              placeholder="username"
              label="Username"
              value={username}
              onChangeText={username => this.setState({ username })}
            />
          </View>

          <View style={section}>
            <Input
              style={input}
              secureTextEntry
              placeholder="password"
              label="Password"
              value={password}
              onChangeText={password => this.setState({ password })}
            />
          </View>

          <Text style={errorTextStyle}>
            {error}
          </Text>

          {!loading ?
            <Button onPress={this.loginUser.bind(this)}>
            Login
            </Button>
            :
            <Loading size={'large'} />}
            <Button onPress={this.props.authSwitch}>
            Don't have an account? Register!
            </Button>


            </View>

            <Toast ref="successToast" style={toastSuccess}/>
            <Toast ref="errorToast" style={toastError}/>
          </Fragment>
    )
  }
}

const styles = {
  input:{
  width: '90%',
  },
  toastSuccess: {
  backgroundColor: '#00FF00',
  borderColor: '#b8ecdf'
  },
  toastError:{
  backgroundColor: '#FF0000',
  borderColor: '#f8cdc8'
 },
  form: {
    width: "90%",
    borderColor: "#ddd"
  },
  section: {
    flexDirection: "row",
    backgroundColor: "#fff",
    borderColor: "#ddd",
    borderRadius: 4,
    marginBottom: 4,
  },
  errorTextStyle: {
    alignSelf: "center",
    fontSize: 18,
    color: "red"
  },
  header: {
    fontSize: 35,
    color: '#FFF',
    marginBottom: 5
  }
};

export { Login };
