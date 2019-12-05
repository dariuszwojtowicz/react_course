import React, { Component } from 'react';
import UserSection from './components/UserSection/UserSection';
import UsersCount from './components/UsersCount/UsersCount';
import SampleContext from './contexts/SampleContext';
import './App.css';
import styled from 'styled-components';

const StyledButton = styled.button`
  display: inline-block;
  padding: 0.3em 1.2em;
  margin: 0 0.3em 0.3em 0;
  border-radius: 2em;
  box-sizing: border-box;
  text-decoration: none;
  font-family: 'Roboto',sans-serif;
  font-weight: 300;
  color: #FFFFFF;
  text-align: center;
  transition: all 0.2s;
  outline: none;
  font-size: 1.3em;
  background-color: #8cba51;

  &:hover {
    color: #6D6E71;
  }
`;

class App extends Component { // extends PureComponent

  constructor(props) {
    super(props);
    console.log('App.js Constructor');
    this.inputElementRef = React.createRef();
  }

  static contextType = SampleContext;

  state = {
    persons: [
      { id: '1', username: 'Daro' },
      { id: '2', username: 'Patryk' },
      { id: '3', username: 'Krzychu' }
    ],
    showPersons: false
  };

  static getDerivedStateFromProps(props, state) {
    console.log('App.js getDerivedStateFromProps');
    return state;
  }

  componentDidMount() {
    console.log('App.js componentDidMount');
  }

  shouldComponentUpdate(nextProps, nextState) { // extends PureComponent - it checks if any props has changed automatically
    console.log('App.js shouldComponentUpdate');
    return true;
  }

  componentDidUpdate() {
    console.log('App.js componentDidUpdate');
  }

  componentWillUnmount() {
    console.log('App.js componentWillUnmount'); // for cleanup, before remove
  }

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
    });
    this.inputElementRef.current.style['text-transform'] =
      this.inputElementRef.current.style['text-transform'] === 'uppercase' ? 'lowercase' : 'uppercase';
  }

  render() {
    let personElements = null;
    let pClasses = [];
    if (this.state.showPersons) {
      pClasses.push('no-bold');
      if (this.state.persons.some(p => p.username === 'Darek')) {
        pClasses.push('blue');
      }
      personElements = (
        <React.Fragment>
          {this.state.persons.map(person =>
              <UserSection
                username={person.username}
                conn={5}
                key={person.id}
                onchange={this.changeNameHandler.bind(this, person.id)}
              />
          )}
        </React.Fragment>
      );
    }
    return (
      <div className="App">
        <h1 ref={this.inputElementRef} className={pClasses.join(' ')}>Hi there! {this.props.title}</h1>
        <UsersCount usersCount={this.state.persons.length}/>
        <p>{this.context.sample}</p>
        <StyledButton
          onClick={this.toggleHandler}>Toggle</StyledButton>
        <SampleContext.Provider value={{sample: 'contextValue'}}>
          {personElements}
        </SampleContext.Provider>
      </div>
    );
  }
}

export default App;
