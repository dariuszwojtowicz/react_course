import React from 'react';
import UserOutput from '../UserOutput/UserOutput';
import UserInput from '../UserInput/UserInput';
import Radium from 'radium';

const userSection = (props) => {
  const style = {
    border: '1px solid #eee',
    boxShadow: '0 2px 3px #ccc',
    margin: '10px auto',
    padding: '16px',
    color: '#fe9e76',
    width: '50%',
    '@media (min-width: 1468px)': {
      width: '700px'
    }
  };

  return (
    <div style={style}>
      <UserOutput username={props.username} />
      <UserInput onchange={props.onchange} username={props.username} />
    </div>
  );
}

export default Radium(userSection);
