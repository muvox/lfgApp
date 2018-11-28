import React, { Component, Fragment } from 'react';
import { Text, View } from 'react-native';
import { Input, TextLink, Loading, Button } from './common';
import axios from 'axios';

class Login extends Component {
  constructor(props){
    super(props);
    this.state = {
      userName: '',
      password: '',
      error: '',
      loading: false
    };
  }

  render(){
    const {
      userName,
      password,
      error,
      loading
    } = this.state;
    const { form, section, errorTextStyle } = styles;

    return (
      <Fragment>
        <View style={form}>
          <View style={section}>
            <Input
              placeholder="username"
              label="Username"
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

          <Text style={errorTextStyle}>
            {error}
          </Text>

          {!loading ?
            <Button>
            Login
            </Button>
            :
            <Loading size={'large'} />}
            <Button onPress={this.props.authSwitch}>
            Don't have an account? Register!
            </Button>


            </View>
          </Fragment>
    )
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

export { Login };
