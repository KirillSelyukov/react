import React, { Component } from 'react';
import './App.css';
import { Persons } from '../components/Persons';
import { Cockpit } from '../components/Cockpit';

class App extends Component {
  constructor(props) {
    super(props);
    console.log('[App.js] Inside Constructor', props);
  }

  componentWillMount() {
    console.log('[App.js] Inside componentWillMount');
  }

  componentDidMount() {
    console.log('[App.js] Inside componentDidMount');
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('[UPDATE App.js] Inside shouldComponentUpdate', nextProps, nextState);
    return true;
  }

  componentWillUpdate(nextProps, nextState) {
    console.log('[UPDATE App.js] Inside componentWillUpdate', nextProps, nextState);
  }

  componentDidUpdate() {
    console.log('[UPDATE App.js] Inside componentDidUpdate');
  }

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
    console.log('[App.js] Inside render');

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
