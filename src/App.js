import React, { Component } from 'react';
import UserSection from './UserSection/UserSection';
import './App.css';
import Radium, {StyleRoot} from 'radium';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary';

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
    let style = {
      backgroundColor: '#8cba51',
      ':hover': {
        color: '#6D6E71'
      }
    };
    let pClasses = [];
    if (this.state.showPersons) {
      pClasses.push('no-bold');
      if (this.state.persons.some(p => p.username === 'Darek')) {
        pClasses.push('blue');
      }
      style.backgroundColor = '#f85c50';
      personElements = (
        <div>
          {this.state.persons.map(person =>
            <ErrorBoundary key={person.id}>
              <UserSection
                username={person.username}
                onchange={this.changeNameHandler.bind(this, person.id)}
              />
            </ErrorBoundary>
          )}
        </div>
      );
    }
    return (
      <StyleRoot>
        <div className="App">
          <h1 className={pClasses.join(' ')}>Hi there!</h1>
          <button
            style={style}
            onClick={this.toggleHandler}>Toggle</button>
          {personElements}
        </div>
      </StyleRoot>
    );
  }
}

export default Radium(App);
