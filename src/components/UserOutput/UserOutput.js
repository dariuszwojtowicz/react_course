import React, {useContext} from 'react';
import styled from 'styled-components';
import SampleContext from '../../contexts/SampleContext';

const StyledDiv = styled.div`
  font-weight: ${props => props.alt ? 'bold' : 'normal'};
`;

const userOutput = (props) => {
  const sampleContext = useContext(SampleContext);

  return (
    <SampleContext.Consumer>
      {(context) =>
        <StyledDiv alt={'true'}>
          <span>{props.username} </span><span> {context.sample}</span>
          <p>{sampleContext.sample}</p>
        </StyledDiv>
      }
    </SampleContext.Consumer>
  );
}

export default userOutput;
