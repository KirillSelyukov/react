import React, { Component } from 'react';
import './App.css';
import Stations from './components/Stations/Stations';
import { getStations } from './service/Points'

class App extends Component {
  state = {
    names:[]
  };

  componentDidMount = () => {
    getStations()
      .then((stationNames) => {
        return this.setState({ names:stationNames,initialized:true });
      });
  }

  render() {
    if (!this.state.initialized) { return null; }
    return (
      <div className="App">
        <Stations names={this.state.names} />
      </div>
    );
  }
}

export default App;
