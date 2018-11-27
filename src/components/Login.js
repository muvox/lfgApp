import React, { Component, Framgent } from 'react';
import { Text, View } from 'react-native';
import { Input, TextLink, Loading, Button } from './common';

class Login extends Component {
  constructor(props){
    super(props);
    this.state = {
      email: '',
      password: '',
      error: '',
      loading: false
    };
  }

  render(){
    const { email, password, error, loading } = this.state;
    const { form, section, errorTextStyle } = styles;

    return (
      <Framgent>
        <View style={form}>
          <View stlye={section}>
            <Input
              placeholder="user@email.com"
              label="Email"
              value={email}
              onChangeText={email => this.setState({ email })}
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

            <TextLink onPress={this.props.authSwitch}>
              Don't have an account? Register!
            </TextLink>
          </View>


          </Framgent>
    )
  }
}

export { Login };
