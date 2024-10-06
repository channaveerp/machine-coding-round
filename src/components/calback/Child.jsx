import React from 'react';

const Child = ({ setData }) => {
  const handleSendDatatoparent = () => {
    setData('data from child');
  };

  return (
    <div>
      <button onClick={handleSendDatatoparent}>hello</button>
    </div>
  );
};

export default Child;
