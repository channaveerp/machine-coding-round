import { clear } from '@testing-library/user-event/dist/clear';
import React, { useEffect, useRef, useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);
  const [isRunning, setIsruning] = useState('');
  const counterRef = useRef();

  //   useEffect(() => {
  //     if (isRunning === 'start') {
  //       counterRef.current = setInterval(() => {
  //         setCount((prev) => prev + 1);
  //       }, 1000);
  //     } else if (isRunning === 'stop') {
  //       setCount(0);
  //       clearInterval(counterRef.current);
  //     } else if (isRunning === 'pause') {
  //       clearInterval(counterRef.current);
  //     }
  //   }, [isRunning]);

  //   without using useEffcect

  const handlebtn = (text) => {
    if (text === 'start') {
      counterRef.current = setInterval(() => {
        setCount((prev) => prev + 1);
      }, 1000);
    } else if (text === 'stop') {
      setCount(0);
      clearInterval(counterRef.current);
    } else if (text === 'pause') {
      clearInterval(counterRef.current);
    }
  };

  return (
    <div>
      <span>counter: {count}</span>
      <div>
        {/* <button onClick={() => setIsruning('start')}>start</button>
        <button onClick={() => setIsruning('stop')}>stop</button>
        <button onClick={() => setIsruning('pause')}>Pause</button> */}
        <button onClick={() => handlebtn('start')}>start</button>
        <button onClick={() => handlebtn('stop')}>stop</button>
        <button onClick={() => handlebtn('pause')}>Pause</button>
      </div>
    </div>
  );
};

export default Counter;
