import React, { Component } from 'react';
import './App.css';
import Board from './components/Board/Board';

class App extends Component {
  state = {
    time: 10,
    points: 0
  }

  resetGame = (event) => {
    const newTime = event.target.value;
    if (isNaN(newTime)) {
      alert('Wrong value!');
      return;
    }
    this.setState({
      time: newTime
    });
  }

  render() {
    return (
      <div className="App">
        <h1>Hi there! You have {this.state.time} seconds to catch The Div!</h1>
        <input
          type="text"
          value={this.state.time}
          onChange={this.resetGame}
          />
        <Board time={this.state.time} />
      </div>
    );
  }
}

export default App;
