import React, { Component, Fragment } from "react";
import { View, Text, TextInput, Keyboard } from "react-native";
import { Input, TextLink, Button, Loading } from './common';
import axios from 'axios';
import deviceStorage from '../services/deviceStorage';
import Toast, {DURATION} from 'react-native-easy-toast';

class Registration extends React.Component {
  constructor(props) {
    super(props);
    this.state = { username: "", password: "", password_confirmation: "", error: "", loading: false};


  }

  isEmpty(str){
    return (!str || 0 === str.length);
  }

  registerUser() {
    console.log('starting the register method');
    const { username, password, error, loading } = this.state;
    this.setState({ error: '', loading: true});
    Keyboard.dismiss();
    console.log('const and state set');

    const user = {
          username: this.state.username,
          password: this.state.password
        };

    console.log(user);

    if(this.isEmpty(this.state.username)||this.isEmpty(this.state.password))
      {
        this.refs.errorToast.show('Username and/or password field cannot be empty!');
        this.setState({loading: false});
        return;
      }
    //localhost address: http://192.168.1.106:8080/users/sign-up
    //deployment address: http://lookingforgamer.herokuapp.com/users/sign-up
    axios.post(`http://lookingforgamer.herokuapp.com/users/sign-up`,
      user,
      {headers: {
          'Content-Type': 'application/json'
      }})
    .then((response) => {
      console.log(response);
      console.log(response.data);
      if (response.data.includes("Error")){
        this.refs.errorToast.show('Username already taken!');
      }else{
      this.refs.successToast.show('Registration succesful, please log in.');
      }
      this.setState({loading: false});

    })
    .catch((error) => {
      console.log(error);
      this.refs.errorToast.show('Something went wrong!');

    });
  }

  render() {
    const { username, password, error, loading } = this.state;
    const { toastSuccess, toastError, form, section, errorTextStyle } = styles;

    return (
      <Fragment>
        <View style={form}>
          <View style={section}>
            <Input
              placeholder="username"
              label="Username"
              value={username}
              onChangeText={(username) => this.setState({ username })}
            />
          </View>

          <View style={section}>
            <Input
              secureTextEntry
              placeholder="password"
              label="Password"
              value={password}
              onChangeText={(password) => this.setState({ password })}
            />
          </View>


          <Text style={errorTextStyle}>
          {error}
          </Text>

          {!loading ?
            <Button onPress={this.registerUser.bind(this)}>
            Register
            </Button>
            :
            <Loading size={'large'} />}

          <Button onPress={this.props.authSwitch}>
          Already have an account? Log in!
          </Button>


        </View>

        <Toast ref="successToast" style={toastSuccess}/>
        <Toast ref="errorToast" style={toastError}/>
      </Fragment>
    );
  }
}

const styles = {
  toastSuccess: {
  backgroundColor: '#00FF00',
  borderColor: '#b8ecdf'

  },
  toastError:{
  backgroundColor: '#FF0000',
  borderColor: '#f8cdc8'
 },
  form: {
    width: "100%",
    borderTopWidth: 1,
    borderColor: "#ddd"
  },
  section: {
    flexDirection: "row",
    borderBottomWidth: 1,
    backgroundColor: "#fff",
    borderColor: "#ddd"
  },
  errorTextStyle: {
    alignSelf: "center",
    fontSize: 18,
    color: "red"
  }
};

export { Registration };
