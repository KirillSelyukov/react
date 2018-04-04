import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import Chart from './components/Chart/Chart';

class App extends Component {
  state = {
    clientKey: null,
    time: null,
    stations: []
  };

  componentDidMount = () => {
    const data = axios.get('http://localhost:8080/api/v1/init');
    data.then(({ data }) => {
      const { clientKey, time, stations } = data;
      this.setState({ clientKey: clientKey, time: time, stations: stations });
    }, function (err) {
      console.log(err);
    })
  }

  componentDidUpdate() {
    const data = axios.get(`http://localhost:8080/api/v1/client/${this.state.clientKey}/delta/Delta/since/${this.state.time}`);

    data.then((res) => {
      console.log(res.data);
      let newPoints = [...this.state.stations['Delta'].points, ...res.data.delta];
      console.log(newPoints)
      this.setState({time:data.time })
    }, (err) => {
      console.log(err);
    })
  }

  render() {
    let chart = null;

    if (typeof this.state.stations['Delta'] !== 'undefined' && this.state.stations['Delta'].points !== undefined) {
      const data = this.state.stations['Delta'].points.map((point) => {
        return { name: point, value: point };
      });
      chart = <Chart data={data} />;
    }
    return (
      <div className="App">
        {chart}
      </div>
    );
  }
}

export default App;
