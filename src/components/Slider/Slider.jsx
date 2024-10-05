import React, { useEffect, useRef, useState } from 'react';

export const Slider = ({ data }) => {
  console.log('data', data);
  const [show, setShow] = useState(0);
  const intervalRef = useRef(null);

  const handleNaxt = () => {
    setShow((prev) => (prev === data.length - 1 ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setShow((prev) => (prev === 0 ? data.length - 1 : prev - 1));
  };

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      handleNaxt();
    }, 2000);

    return () => {
      clearInterval(intervalRef.current);
    };
  }, []);
  return (
    <div
      className='container'
      ref={intervalRef}
      onMouseEnter={() => {
        clearInterval(intervalRef.current);
      }}
      onMouseLeave={() => {
        intervalRef.current = setInterval(() => {
          handleNaxt();
        }, 2000);
      }}>
      <button className='left-btn' onClick={handlePrev}>
        {'<'}
      </button>
      <img src={data[show].download_url} alt='' />
      <button className='right-btn' onClick={handleNaxt}>
        {'>'}
      </button>
    </div>
  );
};
