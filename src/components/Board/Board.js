import React, { useEffect, useState } from 'react';

const board = (props) => {
  let [points, setPoints] = useState(0);
  let [current, setCurrent] = useState(102);
  let [isOn, setIsOn] = useState(0);
  let [int, setInt] = useState();
  let [timer, setTimer] = useState(props.time);

  // let interval;
  const divIds = [];
  for (let i = 1; i <= 100; i++) {
    divIds.push(i);
  }

  useEffect(() => {
    if (isOn === 1) {
      console.log('useEffect', timer, int);
      if (int) {
        clearInterval(int);
      }
      let interval = setInterval(() => {
        setTimer((prevState) => {
          setTimer(prevState - 1);
        });
      }, 1000);
      setInt(interval);
    }
  }, [points, isOn]);

  useEffect(() => {
    if (timer < 0) {
      clearInterval(int);
      if (window.confirm('You lost! Do you want to play again?')) {
        window.location.reload();
      }
    }
  }, [timer]);

  const divClicked = (divId) => {
    if (divId === current) {
      setCurrent(Math.floor(Math.random() * 101));
      setTimer(props.time);
      setPoints(points + 1);
    }
  }

  const startGame = () => {
    setIsOn(1);
    setCurrent(Math.floor(Math.random() * 101));
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
                backgroundColor: divId === current ? 'grey' : 'white'
              }}
            ></div>;
          })
        }
      </div>
    </div>
  )
}

export default board;
