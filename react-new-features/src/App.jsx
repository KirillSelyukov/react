import React, { Component } from 'react';
import './App.css';
import { Person } from '../src/Person/Person'

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
        return <Person userName={person.name} age={person.age} />
      })
      : null;
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    return (
      <div className='App'>
        <h1>Hi I'm React App</h1>
        <p>Push the Button</p>
        <button style={style} onClick={this.toggleOutputhandler}>Show Output</button>
        <div>
          {this.showPersons()}
        </div>
      </div>
    );
  }
}

export default App;
