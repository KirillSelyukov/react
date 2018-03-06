import React, { Component } from 'react';
import './App.css';
import Radium from 'radium';
import { Person } from './Person/Person'
import { ErrorBoundary } from './ErrorBoundary/ErrorBoundary';

class App extends Component {
  state = {
    persons: [
      { id: '123d', name: 'Maxx', age: 28 },
      { id: '34fv', name: 'Maxx', age: 28 },
      { id: 'dsfg', name: 'Angela', age: 18 }
    ],
    showPersons: false
  }

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
    const style = {
      backgroundColor: 'green',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
      ':hover': {
        backgroundColor: 'lightgreen',
        color: 'black'
      }
    };

    const showPersons = () => {
      if (this.state.showPersons) {
        style.backgroundColor = 'red';
        style[':hover'] = {
          backgroundColor: 'salmon',
          color: 'white'
        }
        return this.state.persons.map((person, index) =>
          <ErrorBoundary>
            <Person
              key={person.id}
              userName={person.name}
              age={person.age}
              click={() => this.deletePersonHandler(index)} />
          </ErrorBoundary>
        )
      }

      return null;
    }

    return (
      <div className='App'>
        <h1>Hi I'm React App</h1>
        <p>Push the Button</p>
        <button style={style} onClick={this.toggleOutputHandler}>Show Persons</button>
        <div>
          {showPersons()}
        </div>
      </div>
    );
  }
}

export default Radium(App);
