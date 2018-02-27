import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    inputLength: 0
  }
  onChangeHandler = (e) => {
    this.setState({ inputLength: e.target.value.length });
  }
  render() {
    return (
      <div className="App">
        <input onChange={this.onChangeHandler} />
        <p>Length of input: {this.state.inputLength}</p>

      </div>
    );
  }
}

export default App;
