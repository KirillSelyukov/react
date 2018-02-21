import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { UserInput } from '../src/UserInput/UserInput'
import { UserOutput } from '../src/UserOutput/UserOutput'

class App extends Component {
  state = {
    username: 'Musius Scaevola',
    showUserOutput: false
  }

  onChangeHandler = (event) => {
    this.setState({
      username: event.target.value
    });
  }

  toggleOutputhandler = () => {
    console.log(this.state.showUserOutput);
    this.setState({
      showUserOutput: !this.state.showUserOutput
    })
  }

  render() {
    return (
      <div>
        <button onClick={this.toggleOutputhandler}>Show Output</button>
        <UserInput changed={this.onChangeHandler} username={this.state.username} ></UserInput>
        {this.state.showUserOutput
          ?
          <div>
            <UserOutput userName={this.state.username}></UserOutput>
            <UserOutput userName='Scaevola'></UserOutput>
          </div>
          : null
        }
      </div>
    );
  }
}

export default App;
