import './Person.css';
import React from 'react';

const person = (props) => {
  return (
    <div className="Person">
      <p>I am a Person and my name is {props.name}!</p>
      <p>{props.children}</p>
      <input type="text" onChange={props.nameChangedHandler} value={props.name}/>
    </div>
  );
}

export default person;
