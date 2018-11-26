import React, { Component } from 'react';
import Loading from './components/common/';
import Auth from './screens/Auth';
import LoggedIn from './screens/LoggedIn';

export default class Main extends Component<{}> {
  constructor() {
    super();
    this.state = {
      jwt: '',
    }
  }

  render() {
    if(!this.state.jwt) {
      return (
        <Auth />
      );
    } else if(this.state.jwt) {
      return (
        <LoggedIn />
      );
    }
  }
}
