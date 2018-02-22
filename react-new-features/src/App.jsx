import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { UserInput } from '../src/UserInput/UserInput'
import { UserOutput } from '../src/UserOutput/UserOutput'

class App extends Component {
  state = {
    persons: [{ name: 'max', age: 28 }, { name: 'Angela', age: 18 }],
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
  showPersons = () => {
    return this.state.showUserOutput
      ?
      this.state.persons.map((person) => {
        return <UserOutput userName={person.name} age={person.age} />
      })
      : null;
  }

  render() {
    return (
      <div>
        <button onClick={this.toggleOutputhandler}>Show Output</button>
        <UserInput changed={this.onChangeHandler} username={this.state.username} ></UserInput>

        {this.showPersons()}

      </div>
    );
  }
}

export default App;
