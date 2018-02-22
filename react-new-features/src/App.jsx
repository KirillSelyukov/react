import React, { Component } from 'react';
import './App.css';
import { Person } from '../src/Person/Person'

class App extends Component {
  state = {
    persons: [
      { id: '123d', name: 'Maxx', age: 28 },
      { id: '34fv', name: 'Maxx', age: 28 },
      { id: 'dsfg', name: 'Angela', age: 18 }
    ],
    showPersons: false
  }

  toggleOutputhandler = () => {
    this.setState({
      showPersons: !this.state.showPersons
    })
  }
  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  }

  showPersons = () => {
    return this.state.showPersons
      ?
      this.state.persons.map((person, index) => {
        return <Person
          key={person.id}
          userName={person.name}
          age={person.age}
          click={() => this.deletePersonHandler(index)} />
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
        <button style={style} onClick={this.toggleOutputhandler}>Show Persons</button>
        <div>
          {this.showPersons()}
        </div>
      </div>
    );
  }
}

export default App;
