import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { UserInput } from '../src/UserInput/UserInput'
import { UserOutput } from '../src/UserOutput/UserOutput'

class App extends Component {
  state = {
    username: 'ololo'
  }
  onChangeHandler = (event) => {
    this.setState({
      username: event.target.value
    });
  }

  render() {
    return (
      <div>
        <UserInput changed={this.onChangeHandler} username = {this.state.username} ></UserInput>
        <UserOutput userName={this.state.username}></UserOutput>
        <UserOutput userName='Scaevola'></UserOutput>
      </div>
    );
  }
}

export default App;
