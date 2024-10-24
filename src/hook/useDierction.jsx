import React, { useEffect, useRef, useState } from 'react';

const useDierction = () => {
  const [scrollDirection, setScrollDirection] = useState('');
  const prevRefy = useRef();

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScroll = () => {
    prevRefy.current > window.scrollY
      ? setScrollDirection('upward direction')
      : setScrollDirection('downward direction');
      
    prevRefy.current = window.scrollY;
  };

  return scrollDirection;
};

export default useDierction;
