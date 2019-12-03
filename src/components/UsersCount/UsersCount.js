import React from 'react';

const usersCount = (props) => {
  console.log('usersCount rendered')
  return (
    <div>
      <p>{props.usersCount}</p>
    </div>
  );
}

export default React.memo(usersCount);
