import React, { Component } from 'react';
import './App.css';
import ValidationComponent from './ValidationComponent/ValidationComponent';
import CharComponent from './CharComponent/CharComponent';

class App extends Component {
  state = {
    inputLen: 0,
    input: ''
  };

  inputChangeListener = (event) => {
    this.setState({
      inputLen: event.target.value.length,
      input: event.target.value
    });
  };

  charClickHandler = (index) => {
    let input = this.state.input.split('');
    input.splice(index, 1);
    this.setState({
      input: input.join(''),
      inputLen: input.length
    });
  };

  render() {
    let chars = (
      <div>
        {this.state.input.split('').map((char, index) =>
        <CharComponent
          char={char}
          index={index}
          key={index}
          onclick={this.charClickHandler}
        />)}
      </div>
    );
    return (
      <div className="App">
        <h1>Hi there!</h1>
        <input type="text" onChange={this.inputChangeListener} value={this.state.input} />
        <p>{this.state.inputLen}</p>
        <ValidationComponent inputLen={this.state.inputLen} />
        {chars}
      </div>
    );
  }
}

export default App;
