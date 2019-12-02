import React, { Component } from 'react';
import UserSection from './UserSection/UserSection';
import './App.css';

class App extends Component {
  state = {
    persons: [
      { id: '1', username: 'Daro' },
      { id: '2', username: 'Patryk' },
      { id: '3', username: 'Krzychu' }
    ],
    showPersons: false
  };

  changeNameHandler = (personId, event) => {
    let persons = [...this.state.persons];
    persons.find(person => person.id === personId).username = event.target.value;
    this.setState({
      persons
    });
  };

  toggleHandler = () => {
    this.setState({
      showPersons: !this.state.showPersons
    })
  }

  render() {
    let personElements = null;
    if (this.state.showPersons) {
      personElements = (
        <div>
          {this.state.persons.map(person =>
              <UserSection
                username={person.username}
                key={person.id}
                onchange={this.changeNameHandler.bind(this, person.id)}
              />
          )}
        </div>
      );
    }

    return (
      <div className="App">
        <h1>Hi there!</h1>
        <button onClick={this.toggleHandler}>Toggle</button>
        {personElements}
      </div>
    );
  }
}

export default App;
