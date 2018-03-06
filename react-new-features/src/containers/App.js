import React, { Component } from 'react';
import './App.css';
import { Persons } from '../components/Persons';
import { Cockpit } from '../components/Cockpit';

class App extends Component {
  state = {
    persons: [
      { id: '123d', name: 'Maxx', age: 28 },
      { id: '34fv', name: 'Maxx', age: 28 },
      { id: 'dsfg', name: 'Angela', age: 18 }
    ],
    showPersons: false
  };

  toggleOutputHandler = () => {
    this.setState({
      showPersons: !this.state.showPersons
    })
  }

  deletePersonHandler = (personIndex) => {

    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  }

  render() {
    let persons = null;
    if (this.state.showPersons) {
      persons = <Persons
        persons={this.state.persons}
        clicked={this.deletePersonHandler} />
    }

    return (
      <div className='App'>
        <Cockpit
          clicked={this.toggleOutputHandler}
          showPersons={this.state.showPersons} />
        {persons}
      </div>
    );
  }
}

export default App;
