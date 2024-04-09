import React, { useState } from "react";

const Timer = () => {
  const [timer, setTimer] = useState(0);
  const [timerInterval, setTimerInterval] = useState(null);

  const startTimer = () => {
    // console.log("start");

    setTimerInterval( setInterval(()=>{
      setTimer((prev) => prev + 1)
    },1000))
  };

  const pauseTimer = () => {
    // console.log("pause", timerInterval);
    clearInterval(timerInterval)
  };

  const resetTimer = () => {
    // console.log("reset", timerInterval);

    setTimer(0)
    clearInterval(timerInterval)
  };

  return (
    <div>
      <h3>{timer}</h3>
      <button onClick={startTimer}>Start</button>
      <button onClick={pauseTimer}>Pause</button>
      <button onClick={resetTimer}>Reset</button>
    </div>
  );
};

export default Timer;
