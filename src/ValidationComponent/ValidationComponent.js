import React from 'react';

const validationComponent = (props) => {
  if (props.inputLen < 5) {
     return (<p>Text too short</p>);
  }
  return (<p>Text long enough</p>);
};

export default validationComponent;
