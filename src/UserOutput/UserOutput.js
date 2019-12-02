import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
  font-weight: ${props => props.alt ? 'bold' : 'normal'};
`;

const userOutput = (props) => {
  return (
    <StyledDiv alt={true}>
      <p>{props.username}</p>
    </StyledDiv>
  );
}

export default userOutput;
