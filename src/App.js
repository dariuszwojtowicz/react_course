import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

const app = (props) => {
  const [persons, setPersons] = useState([
    { name: 'Darek' },
    { name: 'Zenek' }
  ]);

  const nameChangedHandler = (event) => {
    setPersons([
      { name: event.target.value },
      { name: 'Zenek' }
    ]);
  }

  const inlineStyle = {
    backgroundColor: '#ccc',
    font: 'inherit',
    cursor: 'pointer',
    border: '1px solid #eee',
    padding: '8px'
  };

  return (
    <div className="App">
      <h1>Hi there, this is a React App!</h1>
      <button style={inlineStyle}
        onClick={() => {
          setPersons([
            { name: 'Dareczek' },
            { name: 'Zenek' }
          ]);
        }}
      >Switch name</button>
      {persons.map(person =>
        <Person name={person.name} nameChangedHandler={nameChangedHandler}>Joł from {person.name}!</Person>
      )}
    </div>
  );
}

export default app;
