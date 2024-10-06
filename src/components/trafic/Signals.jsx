import React, { useEffect, useState } from 'react';

const Signals = ({ lights = ['green', 'yellow', 'red'] }) => {
  const [active, setActive] = useState(0);
  useEffect(() => {
    const inyerval = setInterval(() => {
      setActive((prev) => (prev + 1) % lights.length);
    }, 1000);

    return () => {
      clearInterval(inyerval);
    };
  }, [lights.length]);

  return (
    <div>
      {lights.map((color, index) => (
        <div
          key={index}
          style={{
            backgroundColor: active === index ? color : 'grey',
            width: '40px',
            height: '40px',
            borderRadius: '50%',
          }}></div>
      ))}
    </div>
  );
};

export default Signals;
