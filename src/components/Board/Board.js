import React, { useEffect, useState } from 'react';

const board = (props) => {
  let [points, setPoints] = useState(0);
  let [current, setCurrent] = useState(Math.floor(Math.random() * 101));
  let [isOn, setIsOn] = useState(0);
  let [int, setInt] = useState();

  // let interval;
  const divIds = [];
  let timer = props.time;
  for (let i = 1; i <= 100; i++) {
    divIds.push(i);
  }

  const countDown = () => {
      timer--;
  }

  useEffect(() => {
    if (isOn === 1) {
      console.log('useEffect', timer, int);
      if (int) {
        clearInterval(int);
      }
      let interval = setInterval(countDown, 1000);
      setInt(interval);
    }
  }, [points, isOn]);

  const divClicked = (divId) => {
    if (divId === current) {
      setCurrent(Math.floor(Math.random() * 101));
      setPoints(points + 1);
    }
  }

  const startGame = () => {
    setIsOn(1);
  }

  return (
    <div style={{
      marginTop: '10px',
      marginBottom: '10px'
    }}>
      <div style={{display: 'inline-block', float: 'left', width: '20%'}}><label >Your Score: </label><span>{points}</span></div>
      <div style={{display: 'inline-block', float: 'right', width: '20%'}}><label >Your Time: </label><span>{timer}</span></div>
      <div style={{marginTop: '10px'}}><button onClick={(startGame)}>START</button></div>
      <div className="Board">
        {
          divIds.map(divId => {
            return <div
              onClick={divClicked.bind(this, divId)}
              key={divId}
              style={{
                backgroundColor: divId === current ? 'red' : 'white'
              }}
            ></div>;
          })
        }
      </div>
    </div>
  )
}

export default board;
