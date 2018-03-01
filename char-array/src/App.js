import React, { Component } from 'react';
import './App.css';
import { Chars } from './Chars';
import { ValidateInputLength } from './ValidateInputLength';

class App extends Component {
  state = {
    input: '',
  }

  onChangeHandler = (e) => {
    this.setState({
      input: e.target.value,
    });
  }

  deleteCharhandler = (index) => {
    let chars = [...this.state.input];
    chars.splice(index, 1);
    this.setState({ input: chars.join('') })
  }

  render() {
    return (
      <div className="App">
        <input onChange={this.onChangeHandler} value={this.state.input} />
        <p>Length of input: {this.state.input.length}</p>
        <ValidateInputLength length={this.state.input.length} />
        <Chars input={this.state.input} click={this.deleteCharhandler} />
      </div>
    );
  }
}

export default App;
