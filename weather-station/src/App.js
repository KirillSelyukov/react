import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import Charts from './components/Charts/Charts';

class App extends Component {
  state = {
    clientKey: null,
    time: null,
    stations: [],
    name: 'Delta',
    names: null,
    initialized: false
  };

  componentDidMount = () => {
    const data = axios.get('http://localhost:8080/api/v1/init');
    data.then(({ data }) => {
      const { clientKey, time, stations } = data;
      this.setState({ clientKey: clientKey, time: time, stations: stations, name: Object.keys(stations)[0], names: Object.keys(stations), initialized: true });

      this.getDelta();
    }, function (err) {
      console.log(err);
    })
  }

  getDelta = () => {
    setInterval(() => {
      if (this.state.initialized) {
        const data = axios.get(`http://localhost:8080/api/v1/client/${this.state.clientKey}/delta/${this.state.name}/since/${this.state.time}`);
        data.then((res) => {

          let newPoints = [...this.state.stations[this.state.name].points, ...res.data.delta].slice(-100);

          const newStations = { ...this.state.stations };
          newStations[this.state.name] = { ...this.state.stations[this.state.name] }
          newStations[this.state.name].points = newPoints;
          this.setState({ time: data.time, stations: newStations })
        }, (err) => {
          console.log(err);
        })
      }
    }, 4000)
  }

  render() {
    let chart = null;
    if (this.state.initialized) {
      chart = <Charts names={this.state.names} stations={this.state.stations} />;
    }

    return (
      <div className="App">
        {chart}
      </div>
    );
  }
}

export default App;
