import React from 'react';
import useDierction from '../../hook/useDierction';

const ScrollDirection = () => {
  const direction = useDierction();
  return (
    <div>
      <h4>scroll deirection is {direction}</h4>
      <h1>direction Interview question</h1>
    </div>
  );
};

export default ScrollDirection;
