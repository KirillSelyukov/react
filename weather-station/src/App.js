import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import Charts from './components/Charts/Charts';

class App extends Component {
  state = {
    clientKey: null,
    time: null,
    stations: null,
    names: null,
    initialized: false
  };

  componentDidMount = () => {
    const req = axios.get('http://localhost:8080/api/v1/init');
    req.then(({ data }) => {
      const { clientKey, time, stations } = data;
      this.setState({
        clientKey: clientKey,
        time: time,
        stations: stations,
        names: Object.keys(stations).slice(-3),
        initialized: true
      });
    }, function (err) {
      console.log(err);
    })
  }

  render() {
    if (!this.state.initialized) { return null; }
    return (
      <div className="App">
        <Charts
          names={this.state.names}
          stations={this.state.stations}
          time={this.state.time}
          clientKey={this.state.clientKey} />;
      </div>
    );
  }
}

export default App;
