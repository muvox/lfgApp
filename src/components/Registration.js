import React, { Component, Fragment } from "react";
import { View, Text } from "react-native";
import { Input, TextLink, Button, Loading } from './common';
import axios from 'axios';
import deviceStorage from '../services/deviceStorage';

class Registration extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "",
      password: "",
      password_confirmation: "",
      error: "",
      loading: false
    };
  }

  registerUser(){
    const { userName, password, password_confirmation} = this.state;

    this.setState({ error: '', loading: true});

    axops.post("http://localhost:8080/users/sign-up", {
      user: {
        userName : userName,
        password : password
      }
    },)
    .then((response) => {
      //jwt response here
    })
    .catch((error) => {
      //handle errors here
    });
  }

  render() {
    const { userName, password, password_confirmation, error, loading } = this.state;
    const { form, section, errorTextStyle } = styles;

    return (
      <Fragment>
        <View style={form}>
          <View style={section}>
            <Input
              placeholder="Username"
              label="userName"
              value={userName}
              onChangeText={userName => this.setState({ userName })}
            />
          </View>

          <View style={section}>
            <Input
              secureTextEntry
              placeholder="password"
              label="Password"
              value={password}
              onChangeText={password => this.setState({ password })}
            />
          </View>
          <View style={section}>
            <Input
              secureTextEntry
              placeholder="confirm password"
              label="Confirm Password"
              value={password_confirmation}
              onChangeText={password_confirmation =>
                this.setState({ password_confirmation })
              }
            />
          </View>

          <Text style={errorTextStyle}>
          {error}
          </Text>

          {!loading ?
            <Button>
            Register
            </Button>
            :
            <Loading size={"large"} />
          }
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
