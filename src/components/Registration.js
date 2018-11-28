import React, { Component, Fragment } from "react";
import { View, Text, TextInput } from "react-native";
import { Input, TextLink, Button, Loading } from './common';
import axios from 'axios';
import deviceStorage from '../services/deviceStorage';

class Registration extends React.Component {
  constructor(props) {
    super(props);
    this.state = { username: "", password: "", password_confirmation: "", error: "", loading: false};

  }

  registerUser() {
    console.log('starting the register method');
    const { username, password, error, loading } = this.state;
    this.setState({ error: '', loading: true});

    console.log('const and state set');

    const user = {
          name: this.state.username,
          password: this.state.password
        };

    console.log(user);

    axios.post(`http://lookingforgamer.herokuapp.com/users/sign-up`, { user })
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });
  }

  render() {
    const { username, password, error, loading } = this.state;
    const { form, section, errorTextStyle } = styles;

    return (
      <Fragment>
        <View style={form}>
          <View style={section}>
            <Input
              placeholder="Username"
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


      </Fragment>
    );
  }
}

const styles = {
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
