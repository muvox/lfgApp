import React from 'react';
import { Loading } from './components/common/';
import Auth from './screens/Auth';
import LoggedIn from './screens/LoggedIn';

export default class App extends Component {
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
    } esle if(this.state.jwt) {
      return (
        <LoggedIn />
      )
    }
  }


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
