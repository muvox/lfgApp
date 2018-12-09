import React, {Component } from 'react';
import { Loading } from './components/common/';
import Auth from './screens/Auth';
import LoggedIn from './screens/LoggedIn';
import Posters from './screens/Posters';
import deviceStorage from './services/deviceStorage';
import { BackHandler } from 'react-native';

export default class Main extends React.Component {
  constructor() {
    super();
    this.state = {
      jwt: '',
      loading: true,
      gameId: '',
      gameName: '',
    }
    this.handleBackButtonClick = this.handleBackButtonClick.bind(this);
    this.newJWT = this.newJWT.bind(this);
    this.deleteJWT = deviceStorage.deleteJWT.bind(this);
    this.loadJWT = deviceStorage.loadJWT.bind(this);
    this.loadJWT();
    this.newGID = this.newGID.bind(this);
    this.gameName = this.gameName.bind(this);
    }

  gameName(gameName){
    this.setState({
      gameName: gameName
    });
  }

  newJWT(jwt){
    this.setState({
      jwt: jwt
    });
  }

  newGID(gameId){
    this.setState({
      gameId: gameId
    });
  }


  deleteGID(){
    this.setState({
      gameId: ''
    });
  }


  handleBackButtonClick(){
    if(!this.state.gameId){
      this.setState({jwt:''});
    }else {
    this.setState({
      gameId: '',
      gameName: ''
    });
    return(
      <LoggedIn jwt={this.state.jwt} deleteJWT={this.deleteJWT} newGID={this.newGID} />

    );
  }
  }

  componentDidMount(){
    BackHandler.addEventListener('hardwareBackPress', this.handleBackButtonClick);
  }

  componentWillUnmount() {
      BackHandler.removeEventListener('hardwareBackPress', this.handleBackButtonClick);
  }

  render() {
    if (this.state.loading) {
      return (
        <Loading size={'large'}/>
       );
    } else if(this.state.gameId) {
      return (
        <Posters jwt={this.state.jwt} gameId={this.state.gameId} deleteGID={this.deleteGID} gameName={this.state.gameName}/>
      )
    } else if (!this.state.jwt) {
      return (
        <Auth newJWT={this.newJWT} />
      );
    } else if (this.state.jwt) {
      console.log(this.state.jwt);
      return (
        <LoggedIn jwt={this.state.jwt} deleteJWT={this.deleteJWT} newGID={this.newGID} gameName={this.gameName} />
      );
    }
  }
}
