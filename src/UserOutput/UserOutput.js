import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
  font-weight: ${props => props.alt ? 'bold' : 'normal'};
`;

const userOutput = (props) => {
  const rand = Math.random();
  if (rand < 0.7) {
    throw new Error('Error random');
  }
  return (
    <StyledDiv alt={true}>
      <p>{props.username}</p>
    </StyledDiv>
  );
}

export default userOutput;
