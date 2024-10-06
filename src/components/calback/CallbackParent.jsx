import React, { useState } from 'react';
import Child from './Child';

const CallbackParent = () => {
  const [data, setData] = useState('');

  const handleDatafromChild = (child) => {
    setData(child);
  };
  return (
    <div>
      {data}
      <Child setData={handleDatafromChild} />
    </div>
  );
};

export default CallbackParent;
