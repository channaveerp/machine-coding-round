// simple counter app
import React, { useReducer, useState } from 'react';
const initialState = { count: 0 };
const reducer = (state, action) => {
  switch (action.type) {
    case 'INCREMENT': {
      return { count: state.count + 1 };
    }
    case 'DECREMENT': {
      return { count: state.count - 1 };
    }
    case 'RESET':
      return { count: 0 };

      defeault: return state;
  }
};
const UseReducerHook = () => {
//   const [count, setCount] = useState(0);
  const [state, dispatch] = useReducer(reducer, initialState);
  const handleIncrement = () => {
    // setCount(count + 1);
    dispatch({ type: 'INCREMENT' });
  };
  const handleDecrement = () => {
    // setCount(count - 1);
    dispatch({ type: 'DECREMENT' });
  };
  const handleReset = () => {
    // setCount(0);
    dispatch({ type: 'RESET' });
  };
  return (
    <div>
      cont: {state.count}
      <button onClick={handleIncrement}>increment</button>
      <button onClick={handleDecrement} disabled={state.count < 1}>
        decrement
      </button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
};

export default UseReducerHook;
