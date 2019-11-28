import React, { Component } from 'react';
import UserOutput from './UserOutput/UserOutput';
import UserInput from './UserInput/UserInput';
import './App.css';

class App extends Component {
  state = {
    username: 'Daro'
  };

  changeNameHandler = (event) => {
    this.setState({
      username: event.target.value
    });
  };
  render() {
    const style = {
      border: '1px solid #eee',
      boxShadow: '0 2px 5px #ccc',
      margin: '10px auto',
      color: '#fe9e76'
    };
    return (
      <div className="App">
        <h1>Hi there!</h1>
        <div style={style}>
          <UserOutput username={this.state.username} />
          <UserInput onchange={this.changeNameHandler} username={this.state.username} />
        </div>
      </div>
    );
  }
}

export default App;
