import React, { useEffect }  from 'react';
import UserOutput from '../UserOutput/UserOutput';
import UserInput from '../UserInput/UserInput';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledDiv = styled.div`
  border: 1px solid #eee;
  box-shadow: 0 2px 3px #ccc;
  margin: 10px auto;
  padding: 16px;
  color: #fe9e76;
`;

const userSection = (props) => {
  console.log('UserSection.js render', props.conn);

  useEffect(() => {
      console.log('UserSection.js useEffect');

      return () => {
        console.log('UserSection.js cleanup in useEffect');
      }
  }, [props.username]); // [] for componentDidMount (only once)

  return (
    <StyledDiv>
      <UserOutput username={props.username} />
      <UserInput onchange={props.onchange} username={props.username} />
    </StyledDiv>
  );
}

userSection.propTypes = {
  conn: PropTypes.number,
  username: PropTypes.string,
  onChange: PropTypes.func
};

export default userSection;
